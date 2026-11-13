package ru.mudrya.yoga.engine

import kotlin.math.roundToInt

enum class Sex { FEMALE, MALE }

enum class MovementTest {
    /** Сесть и встать с пола без опоры, шкала 0..10. */
    SIT_RISE,

    /** Наклон вперёд стоя: сантиметры ниже уровня пола (выше пола — отрицательные). */
    FORWARD_FOLD,

    /** Баланс на одной ноге с закрытыми глазами, секунды. */
    BALANCE,

    /** Отжимания подряд. */
    PUSH_UPS,

    /** Снижение пульса за 60 с после 6 кругов, ударов в минуту. */
    HR_RECOVERY,
}

/**
 * Возрастные нормы. Реальные значения берутся из опубликованных исследований (этап 1),
 * поэтому здесь только интерфейс: формула не зависит от конкретной таблицы.
 */
interface MovementNorms {
    /** Ожидаемое значение теста для возраста и пола. */
    fun expected(test: MovementTest, age: Int, sex: Sex): Double

    /** Сколько «лет возраста движения» стоит одна единица отклонения от нормы. */
    fun yearsPerUnit(test: MovementTest): Double
}

data class MovementResult(val age: Int, val perTest: Map<MovementTest, Double>)

/**
 * Возраст движения = паспортный возраст + сумма поправок по тестам.
 * Результат лучше нормы снижает возраст, хуже — повышает.
 * Поправка одного теста ограничена ±[perTestCapYears], итог — [minAge]..(возраст + [maxOverYears]).
 */
class MovementAgeCalculator(
    private val norms: MovementNorms,
    private val perTestCapYears: Double = 8.0,
    private val minAge: Int = 18,
    private val maxUnderYears: Int = 15,
    private val maxOverYears: Int = 25,
) {
    fun calculate(chronologicalAge: Int, sex: Sex, results: Map<MovementTest, Double>): MovementResult {
        require(chronologicalAge in 14..100) { "age out of range: $chronologicalAge" }
        val corrections = results.mapValues { (test, value) ->
            val deficit = norms.expected(test, chronologicalAge, sex) - value
            (deficit * norms.yearsPerUnit(test)).coerceIn(-perTestCapYears, perTestCapYears)
        }
        val raw = chronologicalAge + corrections.values.sum()
        val low = maxOf(minAge, chronologicalAge - maxUnderYears)
        val high = chronologicalAge + maxOverYears
        return MovementResult(raw.roundToInt().coerceIn(low, high), corrections)
    }
}
