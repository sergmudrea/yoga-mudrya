package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Breath

enum class PhaseKind { ENTER, HOLD }

/** Одна фаза дыхания в сессии. */
data class Phase(
    val stepIndex: Int,
    val kind: PhaseKind,
    val breath: Breath,
    /** Номер фазы внутри движения (ENTER) или удержания (HOLD), с нуля. */
    val index: Int,
    /** Сколько всего фаз этого вида у шага. */
    val count: Int,
    val startMs: Long,
    val durationMs: Long,
) {
    val endMs: Long get() = startMs + durationMs
}

/** Где мы в сессии в момент времени t. */
data class Position(val phaseIndex: Int, val phase: Phase, val progress: Double) {
    /**
     * Насколько завершено движение в позу (0..1): по всем фазам входа сразу.
     * На удержании всегда 1.
     */
    val movementProgress: Double
        get() = if (phase.kind == PhaseKind.HOLD) 1.0 else (phase.index + progress) / phase.count
}

/**
 * Временная шкала сессии. Каждый шаг: движение на одну или несколько фаз дыхания, затем удержание.
 * Длительность фазы делится на скорость воспроизведения (0,75× — фазы длиннее).
 */
class BreathTimeline(session: Session, phaseMs: Long, speed: Double = 1.0) {

    val phases: List<Phase>
    val totalMs: Long

    /** Индекс первой фазы каждого шага — для перехода «назад/вперёд». */
    val stepStartPhase: List<Int>

    init {
        require(phaseMs > 0) { "phaseMs must be > 0" }
        require(speed > 0.0) { "speed must be > 0" }
        val len = (phaseMs / speed).toLong()
        var t = 0L
        val list = mutableListOf<Phase>()
        val starts = mutableListOf<Int>()
        session.steps.forEachIndexed { i, step ->
            starts += list.size
            step.enter.forEachIndexed { e, b ->
                list += Phase(i, PhaseKind.ENTER, b, e, step.enter.size, t, len)
                t += len
            }
            step.hold.forEachIndexed { h, b ->
                list += Phase(i, PhaseKind.HOLD, b, h, step.hold.size, t, len)
                t += len
            }
        }
        phases = list
        totalMs = t
        stepStartPhase = starts
    }

    fun positionAt(tMs: Long): Position {
        require(phases.isNotEmpty()) { "empty timeline" }
        val t = tMs.coerceIn(0, totalMs - 1)
        var lo = 0
        var hi = phases.lastIndex
        while (lo < hi) {
            val mid = (lo + hi + 1) / 2
            if (phases[mid].startMs <= t) lo = mid else hi = mid - 1
        }
        val p = phases[lo]
        return Position(lo, p, (t - p.startMs).toDouble() / p.durationMs)
    }

    fun stepStartMs(stepIndex: Int): Long = phases[stepStartPhase[stepIndex.coerceIn(0, stepStartPhase.lastIndex)]].startMs

    /** Средний темп, дыханий в минуту (вдох + выдох = одно дыхание). */
    fun breathsPerMinute(): Double = if (totalMs == 0L) 0.0 else (phases.size / 2.0) / (totalMs / 60_000.0)
}

/** Насколько наполнены живот и грудь (0..1) — для подсветки на модели и полосок в плеере. */
data class BreathFill(val belly: Double, val chest: Double)

/**
 * Полное дыхание по методике: вдох снизу вверх (живот, затем грудь), выдох сверху вниз
 * (грудь, затем живот). Живот слегка подтянут, поэтому его максимум — 0,6.
 */
object FullBreath {
    const val BELLY_MAX = 0.6

    fun fill(breath: Breath, progress: Double): BreathFill {
        val p = progress.coerceIn(0.0, 1.0)
        return when (breath) {
            Breath.INHALE -> BreathFill(
                belly = BELLY_MAX * minOf(1.0, p / 0.45),
                chest = maxOf(0.0, (p - 0.35) / 0.65),
            )
            Breath.EXHALE -> BreathFill(
                belly = BELLY_MAX * (1.0 - maxOf(0.0, (p - 0.4) / 0.6)),
                chest = 1.0 - minOf(1.0, p / 0.6),
            )
        }
    }
}
