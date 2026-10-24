package ru.mudrya.yoga.ui.player

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.initializer
import androidx.lifecycle.viewmodel.viewModelFactory
import ru.mudrya.yoga.catalog.SuryaCatalog
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.BuildRequest
import ru.mudrya.yoga.engine.Constraints
import ru.mudrya.yoga.engine.Feedback
import ru.mudrya.yoga.engine.Plan
import ru.mudrya.yoga.engine.PlayerController
import ru.mudrya.yoga.engine.PlayerFrame
import ru.mudrya.yoga.engine.SessionBuilder
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
    private val injuries = users.state.value.profile?.injuries.orEmpty()

    /** Сколько длится расслабление лёжа между кругами. */
    val relaxSeconds: Int = users.state.value.relaxSeconds

    private val session = SessionBuilder(SuryaCatalog.catalog).build(
        BuildRequest(
            sequence = SuryaCatalog.sequence(sequenceId),
            rounds = params.rounds,
            support = params.support,
            constraints = Constraints(injuries),
            relaxEvery = if (relaxSeconds > 0) 1 else 0,
        ),
    )

    private var lastRound = 1

    /** Начался новый круг, а перед ним положено расслабление: ставим практику на паузу. */
    fun enteredRest(f: PlayerFrame): Boolean {
        val r = f.step.round
        val crossed = r > lastRound && (r - 1) in session.relaxAfterRounds
        lastRound = r
        if (crossed) controller.setPaused(true)
        return crossed
    }

    val controller = PlayerController(session, phaseMs = params.phaseMs)

    var usedMetalDog = false
        private set

    private var saved = false

    fun frame(): PlayerFrame = controller.frame()

    fun startMetalDog() {
        usedMetalDog = true
        controller.setMetalDog(true)
    }

    fun cycleSpeed() {
        val i = SPEEDS.indexOf(controller.speed).let { if (it < 0) 1 else it }
        controller.setTempo(controller.phaseMs, SPEEDS[(i + 1) % SPEEDS.size])
    }

    fun cyclePhaseLength() {
        val i = PHASE_LENGTHS.indexOf(controller.phaseMs).let { if (it < 0) 0 else it }
        controller.setTempo(PHASE_LENGTHS[(i + 1) % PHASE_LENGTHS.size], controller.speed)
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

        fun factory(users: UserRepository, sequenceId: String) = viewModelFactory { initializer { PlayerViewModel(users, sequenceId) } }
    }
}
