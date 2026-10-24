package ru.mudrya.yoga.engine

import java.time.DayOfWeek
import java.time.LocalDate
import java.time.YearMonth
import kotlin.math.roundToInt

/** Замер тела в какой-то день: вес и/или талия. */
data class BodyRecord(val localDay: Long, val weightKg: Double?, val waistCm: Double?)

/** Как изменились вес и талия с первого замера до последнего. */
data class BodyTrend(
    val firstWeight: Double?,
    val lastWeight: Double?,
    val firstWaist: Double?,
    val lastWaist: Double?,
) {
    val weightChange: Double? get() = if (firstWeight != null && lastWeight != null) round1(lastWeight - firstWeight) else null
    val waistChange: Double? get() = if (firstWaist != null && lastWaist != null) round1(lastWaist - firstWaist) else null

    companion object {
        fun of(records: List<BodyRecord>): BodyTrend {
            val sorted = records.sortedBy { it.localDay }
            val w = sorted.mapNotNull { it.weightKg }
            val t = sorted.mapNotNull { it.waistCm }
            return BodyTrend(w.firstOrNull(), w.lastOrNull(), t.firstOrNull(), t.lastOrNull())
        }

        private fun round1(x: Double) = (x * 10).roundToInt() / 10.0
    }
}

object BodyLog {
    /** Добавляет замер за день; если за этот день уже есть — обновляет только заданные поля. */
    fun put(records: List<BodyRecord>, day: Long, weightKg: Double?, waistCm: Double?): List<BodyRecord> {
        val old = records.firstOrNull { it.localDay == day }
        val merged = BodyRecord(day, weightKg ?: old?.weightKg, waistCm ?: old?.waistCm)
        return (records.filter { it.localDay != day } + merged).sortedBy { it.localDay }
    }

    /** Последнее известное значение — от него удобно начинать ввод. */
    fun lastWeight(records: List<BodyRecord>): Double? = records.sortedBy { it.localDay }.lastOrNull { it.weightKg != null }?.weightKg
    fun lastWaist(records: List<BodyRecord>): Double? = records.sortedBy { it.localDay }.lastOrNull { it.waistCm != null }?.waistCm
}

/**
 * Вызов «108 кругов Сурья Намаскар»: считаются круги солнечных сетов в завершённых
 * практиках с дня старта. 108 — традиционное число кругов.
 */
data class Challenge108(val startDay: Long, val rounds: Int, val days: Int) {
    val done: Boolean get() = rounds >= TARGET
    val fraction: Double get() = (rounds.toDouble() / TARGET).coerceAtMost(1.0)
    val left: Int get() = (TARGET - rounds).coerceAtLeast(0)

    companion object {
        const val TARGET = 108

        fun of(state: UserState): Challenge108? {
            val start = state.challengeStart ?: return null
            val counted = state.sessions.filter { it.completed && it.localDay >= start && it.sequenceId in Path8.SURYA_SETS }
            return Challenge108(start, counted.sumOf { it.rounds }, counted.map { it.localDay }.distinct().size)
        }
    }
}

/** Клетка календаря практик. */
data class CalendarDay(val localDay: Long, val dayOfMonth: Int, val minutes: Int, val completed: Boolean)

/** Месяц для календаря: недели с понедельника, пустые клетки до первого числа — null. */
data class CalendarMonth(val year: Int, val month: Int, val weeks: List<List<CalendarDay?>>, val activeDays: Int, val minutes: Int)

object PracticeCalendar {

    fun month(state: UserState, year: Int, month: Int): CalendarMonth {
        val ym = YearMonth.of(year, month)
        val byDay = state.sessions.groupBy { it.localDay }
        val days = (1..ym.lengthOfMonth()).map { d ->
            val day = ym.atDay(d).toEpochDay()
            val list = byDay[day].orEmpty()
            CalendarDay(day, d, (list.sumOf { it.durationMs } / 60_000).toInt(), list.any { it.completed })
        }
        val lead = ym.atDay(1).dayOfWeek.value - DayOfWeek.MONDAY.value
        val cells: List<CalendarDay?> = List(lead) { null } + days
        val weeks = cells.chunked(7).map { w -> w + List(7 - w.size) { null } }
        return CalendarMonth(year, month, weeks, days.count { it.completed }, days.sumOf { it.minutes })
    }

    /** Год и месяц для дня (epoch day). */
    fun monthOf(day: Long): Pair<Int, Int> = LocalDate.ofEpochDay(day).let { it.year to it.monthValue }

    fun shift(year: Int, month: Int, by: Int): Pair<Int, Int> = YearMonth.of(year, month).plusMonths(by.toLong()).let { it.year to it.monthValue }
}

/**
 * Отметки цикла. Пока идут «дни менструации», сессии собираются в щадящем режиме.
 * Дни считаются с отметки «начались» до отметки «закончились», но не дольше [maxDays].
 */
data class CycleSettings(
    /** Пользовательница включила отслеживание (в профиле). */
    val enabled: Boolean = false,
    val lastStart: Long? = null,
    val lastEnd: Long? = null,
    val maxDays: Int = DEFAULT_DAYS,
) {
    fun active(today: Long): Boolean {
        if (!enabled) return false
        val start = lastStart ?: return false
        if (today < start || today - start >= maxDays) return false
        // Отметка «закончились» (не раньше начала) выключает режим сразу, в тот же день.
        val end = lastEnd
        return end == null || end < start
    }

    /** Какой по счёту день (с 1), если режим активен. */
    fun dayOf(today: Long): Int? = if (active(today)) (today - lastStart!!).toInt() + 1 else null

    fun started(today: Long): CycleSettings = copy(lastStart = today, lastEnd = null)
    fun ended(today: Long): CycleSettings = copy(lastEnd = today)

    companion object {
        const val DEFAULT_DAYS = 5
    }
}

/** Все ограничения пользователя на сегодня: травмы, проблемные зоны после практики, щадящий режим цикла. */
fun UserState.constraints(today: Long): Constraints = Constraints(
    injuries = profile?.injuries.orEmpty(),
    eased = params.easedJoints,
    cycle = cycle.active(today),
)
