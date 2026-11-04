package ru.mudrya.yoga.ui.player

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.initializer
import androidx.lifecycle.viewmodel.viewModelFactory
import ru.mudrya.yoga.catalog.SuryaCatalog
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.BuildRequest
import ru.mudrya.yoga.engine.CustomSets
import ru.mudrya.yoga.engine.constraints
import ru.mudrya.yoga.engine.Feedback
import ru.mudrya.yoga.engine.Plan
import ru.mudrya.yoga.engine.PlayerController
import ru.mudrya.yoga.engine.PlayerFrame
import ru.mudrya.yoga.engine.SessionBuilder
import ru.mudrya.yoga.engine.SessionFit
import ru.mudrya.yoga.engine.SessionRecord
import ru.mudrya.yoga.model.Joint

/**
 * Держит контроллер плеера, чтобы поворот экрана не сбрасывал практику.
 * Время двигает экран (кадровый цикл), модель хранит состояние и сохраняет итог.
 */
class PlayerViewModel(private val users: UserRepository, sequenceId: String) : ViewModel() {

    private val startedAt = System.currentTimeMillis()
    private val startDay = UserRepository.today()
    private val params = users.state.value.params

    /** Сколько длится расслабление лёжа между кругами. */
    val relaxSeconds: Int = users.state.value.relaxSeconds

    /** Свой сет из конструктора проигрывается на каталоге, дополненном его блоком. */
    private val custom = users.state.value.customSets.firstOrNull { it.id == sequenceId }

    private val built = SessionBuilder(custom?.let { CustomSets.catalogWith(SuryaCatalog.catalog, it) } ?: SuryaCatalog.catalog).build(
        BuildRequest(
            sequence = custom?.let(CustomSets::sequence) ?: SuryaCatalog.sequence(sequenceId),
            rounds = params.rounds,
            support = params.support,
            enabledSlots = params.enabledSlots.toSet(),
            constraints = users.state.value.constraints(startDay),
            relaxEvery = if (relaxSeconds > 0) 1 else 0,
        ),
    )

    /** Длина сета 10 / 20 / 40 минут: удержания подгоняются (если не выбран ручной счёт вдохов). */
    private val session = if (custom == null && users.state.value.settings.holdBreaths == 0) {
        SessionFit.fit(built, params.phaseMs, users.state.value.settings.lengthMin)
    } else {
        built
    }

    private var lastRound = 1

    /** Начался новый круг, а перед ним положено расслабление: ставим практику на паузу. */
    fun enteredRest(f: PlayerFrame): Boolean {
        val r = f.step.round
        val crossed = r > lastRound && (r - 1) in session.relaxAfterRounds
        lastRound = r
        if (crossed) controller.setPaused(true)
        return crossed
    }

    val controller = PlayerController(
        session,
        phaseMs = params.phaseMs,
        // У своего сета счёт вдохов задан в конструкторе и важнее общей настройки.
        holdCycles = custom?.holdCycles ?: users.state.value.settings.holdBreaths.takeIf { it > 0 },
    )

    /** Вдохов-выдохов на удержании: по методике → 1 → 2 → 3 → 5; выбор запоминается. */
    fun cycleHold() {
        val options = if (custom != null) HOLDS.filterNotNull() else HOLDS
        val i = options.indexOf(controller.holdCycles).let { if (it < 0) -1 else it }
        val next = options[(i + 1) % options.size]
        controller.setHold(next)
        if (custom != null && next != null) {
            users.update { s -> s.copy(customSets = s.customSets.map { if (it.id == custom.id) it.copy(holdCycles = next) else it }) }
        } else {
            users.update { it.copy(settings = it.settings.copy(holdBreaths = next ?: 0)) }
        }
    }

    var usedMetalDog = false
        private set

    private var saved = false

    fun frame(): PlayerFrame = controller.frame()

    fun startMetalDog() {
        usedMetalDog = true
        controller.setMetalDog(true)
    }

    private val HOLDS = listOf(null, 1, 2, 3, 5)

    fun cycleSpeed() {
        val i = SPEEDS.indexOf(controller.speed).let { if (it < 0) 1 else it }
        controller.setTempo(controller.phaseMs, SPEEDS[(i + 1) % SPEEDS.size])
    }

    /** Стартовая фаза — из замера спокойного дыхания (тест здоровья) или по методике. */
    private val basePhaseMs = params.phaseMs

    /** Кнопка фазы удлиняет вдох/выдох на секунду от личного старта; после 10 с — снова старт. */
    fun cyclePhaseLength() {
        controller.setTempo(nextPhase(controller.phaseMs, basePhaseMs), controller.speed)
    }

    /** Финиш с ответом «как прошло»: сохраняем практику и параметры следующей сессии. */
    fun finish(feedback: Feedback, problemZones: Set<Joint>) {
        if (saved) return
        saved = true
        val f = frame()
        users.update { s ->
            val next = Plan.adapt(s, feedback, usedMetalDog, problemZones)
            s.copy(
                params = next,
                sessions = s.sessions + record(f.totalMs, completed = true, feedback = feedback),
            )
        }
    }

    /** Выход до конца: минуты засчитываем, если позанимались хотя бы минуту. Параметры не меняем. */
    fun abandon() {
        if (saved) return
        val f = frame()
        if (f.finished || f.elapsedMs < 60_000) return
        saved = true
        users.update { it.copy(sessions = it.sessions + record(f.elapsedMs, completed = false, feedback = null)) }
    }

    private fun record(durationMs: Long, completed: Boolean, feedback: Feedback?) = SessionRecord(
        startedAtMs = startedAt,
        localDay = startDay,
        sequenceId = session.sequenceId,
        rounds = session.rounds,
        durationMs = durationMs,
        completed = completed,
        feedback = feedback,
        usedMetalDog = usedMetalDog,
    )

    companion object {
        val SPEEDS = listOf(0.75, 1.0, 1.25)
        val PHASE_LENGTHS = listOf(3_000L, 4_000L, 5_000L, 6_000L, 7_000L, 8_000L)
        const val MAX_PHASE_MS = 10_000L

        fun nextPhase(current: Long, base: Long): Long = (current + 1_000).let { if (it > MAX_PHASE_MS) base else it }

        fun factory(users: UserRepository, sequenceId: String) = viewModelFactory { initializer { PlayerViewModel(users, sequenceId) } }
    }
}
