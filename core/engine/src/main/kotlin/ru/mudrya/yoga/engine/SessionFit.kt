package ru.mudrya.yoga.engine

import kotlin.math.abs
import kotlin.math.roundToInt

/**
 * Длина сета «10 / 20 / 40 минут»: удержания поз растягиваются или сокращаются пропорционально,
 * динамические шаги (без удержания) не меняются, порядок поз и переходы остаются как в сете.
 */
object SessionFit {

    /** Варианты длины в минутах; 0 — как задумано в сете. */
    val LENGTHS = listOf(10, 20, 40)

    private const val MAX_FACTOR = 4.0

    /** Удержания, умноженные на [factor] (в циклах вдох-выдох; 0 — без удержания). */
    fun scaled(session: Session, factor: Double): Session = session.copy(
        steps = session.steps.map { st ->
            if (st.hold.isEmpty()) {
                st
            } else {
                val cycles = ((st.hold.size / 2.0) * factor).roundToInt().coerceAtLeast(0)
                val pattern = if (st.hold.size >= 2) st.hold.take(2) else listOf(st.hold[0], st.hold[0])
                st.copy(hold = List(cycles * 2) { pattern[it % 2] })
            }
        },
    )

    fun totalMs(session: Session, phaseMs: Long): Long = BreathTimeline(session, phaseMs).totalMs

    /** Самая короткая версия сета: без удержаний. */
    fun minMinutes(session: Session, phaseMs: Long): Int = minutes(totalMs(scaled(session, 0.0), phaseMs))

    /** Самая длинная разумная версия: удержания вчетверо длиннее. */
    fun maxMinutes(session: Session, phaseMs: Long): Int = minutes(totalMs(scaled(session, MAX_FACTOR), phaseMs))

    /** Сессия, подогнанная к [targetMinutes]; 0 или меньше — без изменений. */
    fun fit(session: Session, phaseMs: Long, targetMinutes: Int): Session {
        if (targetMinutes <= 0 || session.steps.none { it.hold.isNotEmpty() }) return session
        val target = targetMinutes * 60_000L
        var lo = 0.0
        var hi = MAX_FACTOR
        repeat(24) {
            val mid = (lo + hi) / 2
            if (totalMs(scaled(session, mid), phaseMs) < target) lo = mid else hi = mid
        }
        val a = scaled(session, lo)
        val b = scaled(session, hi)
        return if (abs(totalMs(a, phaseMs) - target) <= abs(totalMs(b, phaseMs) - target)) a else b
    }

    /** Минуты с округлением как на карточке сессии. */
    fun minutes(ms: Long): Int = ((ms + 30_000) / 60_000).toInt().coerceAtLeast(1)
}
