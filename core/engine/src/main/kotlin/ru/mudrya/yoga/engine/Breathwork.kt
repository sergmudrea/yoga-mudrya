package ru.mudrya.yoga.engine

/**
 * Дыхательные практики без поз: ритм задаётся фазами (вдох, добор вдоха, задержка, выдох) в секундах.
 * Вариант «без задержек» убирает задержки — для беременных, при высоком давлении и головокружении.
 */
object Breathwork {
    /** IN — вдох, TOP_UP — добор, HOLD — задержка, OUT — выдох, HUM — выдох с жужжанием (бхрамари),
     *  COOL_IN — вдох через свёрнутый язык (шитали), PUMP — короткий активный выдох (капалабхати), REST — отдых, дыхание свободное. */
    enum class Kind { IN, TOP_UP, HOLD, OUT, HUM, COOL_IN, PUMP, REST }

    /** Через какую ноздрю (попеременное дыхание); null — обе. */
    enum class Nostril { LEFT, RIGHT }

    data class Phase(val kind: Kind, val seconds: Int, val nostril: Nostril? = null)

    data class Pattern(val id: String, val phases: List<Phase>, val cycles: Int) {
        fun phases(noHolds: Boolean): List<Phase> = if (noHolds) phases.filter { it.kind != Kind.HOLD } else phases
        fun cycleSeconds(noHolds: Boolean): Int = phases(noHolds).sumOf { it.seconds }
        fun totalSeconds(noHolds: Boolean): Int = cycleSeconds(noHolds) * cycles
        val hasHolds: Boolean get() = phases.any { it.kind == Kind.HOLD }
    }

    private fun p(k: Kind, s: Int, n: Nostril? = null) = Phase(k, s, n)

    private val PUMP30 = List(30) { Phase(Kind.PUMP, 1) } + Phase(Kind.REST, 30)

    val patterns: List<Pattern> = listOf(
        /* 2 минуты: двойной вдох носом и длинный выдох — быстрее всего снимает острое напряжение */
        Pattern("sos", listOf(p(Kind.IN, 2), p(Kind.TOP_UP, 1), p(Kind.OUT, 6)), 13),
        Pattern("calm478", listOf(p(Kind.IN, 4), p(Kind.HOLD, 7), p(Kind.OUT, 8)), 4),
        Pattern("box", listOf(p(Kind.IN, 4), p(Kind.HOLD, 4), p(Kind.OUT, 4), p(Kind.HOLD, 4)), 8),
        Pattern("ujjayi", listOf(p(Kind.IN, 5), p(Kind.OUT, 5)), 18),
        Pattern("sleep", listOf(p(Kind.IN, 4), p(Kind.OUT, 8)), 22),
        /* попеременное дыхание (нади шодхана): вдох левой — выдох правой — вдох правой — выдох левой */
        Pattern("nadi", listOf(p(Kind.IN, 4, Nostril.LEFT), p(Kind.OUT, 6, Nostril.RIGHT), p(Kind.IN, 4, Nostril.RIGHT), p(Kind.OUT, 6, Nostril.LEFT)), 9),
        /* полное йоговское дыхание: живот, рёбра, грудь — и выдох в обратном порядке */
        Pattern("full", listOf(p(Kind.IN, 6), p(Kind.OUT, 7)), 14),
        /* бхрамари: выдох с мягким «ммм», как жужжание пчелы */
        Pattern("bhramari", listOf(p(Kind.IN, 4), p(Kind.HUM, 8)), 10),
        /* шитали: вдох через свёрнутый трубочкой язык, выдох носом — охлаждает */
        Pattern("sitali", listOf(p(Kind.COOL_IN, 4), p(Kind.OUT, 6)), 12),
        /* капалабхати: 30 коротких выдохов животом и 30 секунд отдыха, три раунда */
        Pattern("kapala", PUMP30, 3),
    )

    /** Практики, которые нельзя при беременности, высоком давлении, грыже и в первые дни цикла. */
    val ACTIVE = setOf("kapala")

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
        if (ph.any { it.kind == Kind.PUMP }) {
            val n = at(p, elapsedMs, noHolds)
            return when {
                n.done -> 0f
                n.phase.kind == Kind.PUMP -> 0.55f + 0.25f * (1f - n.progress)
                else -> 0.5f
            }
        }
        val inSec = ph.filter { it.kind == Kind.IN || it.kind == Kind.TOP_UP || it.kind == Kind.COOL_IN }.sumOf { it.seconds }.coerceAtLeast(1)
        val now = at(p, elapsedMs, noHolds)
        if (now.done) return 0f
        // сколько вдоха уже набрано до текущей фазы в этом круге
        var acc = 0f
        var level = 0f
        for (x in ph) {
            if (x === now.phase) {
                level = when (x.kind) {
                    Kind.IN, Kind.TOP_UP, Kind.COOL_IN -> (acc + x.seconds * now.progress) / inSec
                    Kind.HOLD, Kind.REST -> level
                    Kind.OUT, Kind.HUM, Kind.PUMP -> level * (1f - now.progress)
                }
                return level.coerceIn(0f, 1f)
            }
            when (x.kind) {
                Kind.IN, Kind.TOP_UP, Kind.COOL_IN -> { acc += x.seconds; level = acc / inSec }
                Kind.OUT, Kind.HUM, Kind.PUMP -> level = 0f
                Kind.HOLD, Kind.REST -> {}
            }
        }
        return level.coerceIn(0f, 1f)
    }
}
