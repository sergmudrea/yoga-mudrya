package ru.mudrya.yoga.engine

/**
 * Дыхательные практики без поз: ритм задаётся фазами (вдох, добор вдоха, задержка, выдох) в секундах.
 * Вариант «без задержек» убирает задержки — для беременных, при высоком давлении и головокружении.
 */
object Breathwork {
    enum class Kind { IN, TOP_UP, HOLD, OUT }

    data class Phase(val kind: Kind, val seconds: Int)

    data class Pattern(val id: String, val phases: List<Phase>, val cycles: Int) {
        fun phases(noHolds: Boolean): List<Phase> = if (noHolds) phases.filter { it.kind != Kind.HOLD } else phases
        fun cycleSeconds(noHolds: Boolean): Int = phases(noHolds).sumOf { it.seconds }
        fun totalSeconds(noHolds: Boolean): Int = cycleSeconds(noHolds) * cycles
        val hasHolds: Boolean get() = phases.any { it.kind == Kind.HOLD }
    }

    private fun p(k: Kind, s: Int) = Phase(k, s)

    val patterns: List<Pattern> = listOf(
        /* 2 минуты: двойной вдох носом и длинный выдох — быстрее всего снимает острое напряжение */
        Pattern("sos", listOf(p(Kind.IN, 2), p(Kind.TOP_UP, 1), p(Kind.OUT, 6)), 13),
        Pattern("calm478", listOf(p(Kind.IN, 4), p(Kind.HOLD, 7), p(Kind.OUT, 8)), 4),
        Pattern("box", listOf(p(Kind.IN, 4), p(Kind.HOLD, 4), p(Kind.OUT, 4), p(Kind.HOLD, 4)), 8),
        Pattern("ujjayi", listOf(p(Kind.IN, 5), p(Kind.OUT, 5)), 18),
        Pattern("sleep", listOf(p(Kind.IN, 4), p(Kind.OUT, 8)), 22),
    )

    fun pattern(id: String): Pattern? = patterns.firstOrNull { it.id == id }

    /** Где мы через [elapsedMs] от начала: фаза, доля фазы 0..1, номер круга, сколько секунд осталось в фазе. */
    data class Now(val phase: Phase, val progress: Float, val cycle: Int, val secondsLeft: Int, val done: Boolean)

    fun at(p: Pattern, elapsedMs: Long, noHolds: Boolean): Now {
        val ph = p.phases(noHolds)
        val cycleMs = ph.sumOf { it.seconds } * 1000L
        val total = cycleMs * p.cycles
        if (elapsedMs >= total) return Now(ph.last(), 1f, p.cycles, 0, true)
        val t = elapsedMs.coerceAtLeast(0)
        val cycle = (t / cycleMs).toInt() + 1
        var inCycle = t % cycleMs
        for (x in ph) {
            val ms = x.seconds * 1000L
            if (inCycle < ms) {
                val left = ((ms - inCycle + 999) / 1000).toInt()
                return Now(x, inCycle.toFloat() / ms, cycle, left, false)
            }
            inCycle -= ms
        }
        return Now(ph.last(), 1f, cycle, 0, false)
    }

    /** Размер круга 0..1: растёт на вдохе, держится на задержке, сжимается на выдохе. */
    fun lung(p: Pattern, elapsedMs: Long, noHolds: Boolean): Float {
        val ph = p.phases(noHolds)
        val inSec = ph.filter { it.kind == Kind.IN || it.kind == Kind.TOP_UP }.sumOf { it.seconds }.coerceAtLeast(1)
        val now = at(p, elapsedMs, noHolds)
        if (now.done) return 0f
        // сколько вдоха уже набрано до текущей фазы в этом круге
        var acc = 0f
        var level = 0f
        for (x in ph) {
            if (x === now.phase) {
                level = when (x.kind) {
                    Kind.IN, Kind.TOP_UP -> (acc + x.seconds * now.progress) / inSec
                    Kind.HOLD -> level
                    Kind.OUT -> level * (1f - now.progress)
                }
                return level.coerceIn(0f, 1f)
            }
            when (x.kind) {
                Kind.IN, Kind.TOP_UP -> { acc += x.seconds; level = acc / inSec }
                Kind.OUT -> level = 0f
                Kind.HOLD -> {}
            }
        }
        return level.coerceIn(0f, 1f)
    }
}
