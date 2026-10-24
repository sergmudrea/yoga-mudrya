package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Breath
import ru.mudrya.yoga.model.Pose

/** Кадр плеера: всё, что нужно нарисовать в данный момент. */
data class PlayerFrame(
    val stepIndex: Int,
    val stepCount: Int,
    val step: SessionStep,
    val previous: SessionStep?,
    val next: SessionStep?,
    val pose: Pose,
    val phase: Phase,
    val phaseProgress: Double,
    val secondsLeftInPhase: Int,
    val fill: BreathFill,
    val elapsedMs: Long,
    val totalMs: Long,
    val finished: Boolean,
)

/**
 * Логика плеера без UI: время, пауза, переходы между шагами, «металлическая собака».
 * UI вызывает [advance] на каждом кадре и рисует [frame].
 */
class PlayerController(
    private val session: Session,
    phaseMs: Long = 4_000,
    speed: Double = 1.0,
) {
    var phaseMs: Long = phaseMs
        private set
    var speed: Double = speed
        private set
    var paused: Boolean = false
        private set

    /** Пока идёт «металлическая собака», время сессии стоит. */
    var metalDogActive: Boolean = false
        private set

    private var timeline = BreathTimeline(session, phaseMs, speed)
    private var tMs = 0L

    val stepCount: Int get() = session.steps.size

    fun advance(dtMs: Long) {
        if (paused || metalDogActive || dtMs <= 0) return
        tMs = (tMs + dtMs).coerceAtMost(timeline.totalMs)
    }

    fun togglePause() {
        paused = !paused
    }

    fun setPaused(value: Boolean) {
        paused = value
    }

    fun setMetalDog(active: Boolean) {
        metalDogActive = active
    }

    /** Меняет темп, сохраняя текущую позицию внутри сессии. */
    fun setTempo(phaseMs: Long, speed: Double) {
        val pos = timeline.positionAt(tMs)
        this.phaseMs = phaseMs
        this.speed = speed
        timeline = BreathTimeline(session, phaseMs, speed)
        val p = timeline.phases[pos.phaseIndex]
        tMs = p.startMs + (pos.progress * p.durationMs).toLong()
    }

    fun goToStep(index: Int) {
        tMs = timeline.stepStartMs(index.coerceIn(0, stepCount - 1))
    }

    fun nextStep() = goToStep(frame().stepIndex + 1)

    /** Назад: если шаг идёт дольше секунды — в его начало, иначе на предыдущий. */
    fun previousStep() {
        val f = frame()
        val start = timeline.stepStartMs(f.stepIndex)
        goToStep(if (tMs - start > 1_000) f.stepIndex else f.stepIndex - 1)
    }

    fun frame(): PlayerFrame {
        val pos = timeline.positionAt(tMs)
        val i = pos.phase.stepIndex
        val step = session.steps[i]
        val prev = session.steps.getOrNull(i - 1)
        val pose = if (prev != null && pos.phase.kind == PhaseKind.ENTER) {
            PoseMath.interpolate(prev.asana.pose, step.asana.pose, pos.movementProgress)
        } else {
            step.asana.pose
        }
        val left = ((pos.phase.durationMs * (1 - pos.progress)) / 1000.0)
        return PlayerFrame(
            stepIndex = i,
            stepCount = stepCount,
            step = step,
            previous = prev,
            next = session.steps.getOrNull(i + 1),
            pose = pose,
            phase = pos.phase,
            phaseProgress = pos.progress,
            secondsLeftInPhase = kotlin.math.ceil(left).toInt().coerceAtLeast(1),
            fill = FullBreath.fill(pos.phase.breath, pos.progress),
            elapsedMs = tMs,
            totalMs = timeline.totalMs,
            finished = tMs >= timeline.totalMs,
        )
    }

    companion object {
        /** Подъём корпуса на вдохе для живости фигуры, градусы. */
        fun chestLift(fill: BreathFill): Double = fill.chest * 2.5

        fun isInhale(frame: PlayerFrame): Boolean = frame.phase.breath == Breath.INHALE
    }
}
