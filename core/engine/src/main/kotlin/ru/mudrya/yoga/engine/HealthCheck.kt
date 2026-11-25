package ru.mudrya.yoga.engine

import kotlin.math.roundToInt

/** Ответы короткой анкеты здоровья (любой ответ можно пропустить). */
data class HealthRecord(
    val atMs: Long,
    val localDay: Long,
    val heightCm: Double? = null,
    val weightKg: Double? = null,
    val waistCm: Double? = null,
    /** Пульс в покое, уд/мин, утром сидя. */
    val restingHr: Int? = null,
    /** 4 пролёта (≈60 ступеней) быстрым шагом без остановки, секунды; 0 — не смог(ла). */
    val stairsSec: Int? = null,
    /** Сколько часов в день сидя (работа, транспорт, экран). */
    val sittingHours: Int? = null,
    /** Спокойных дыханий (вдох+выдох) за минуту. */
    val breathsPerMin: Int? = null,
)

/** Насколько хорош показатель: от хорошего к высокому риску. */
enum class HealthLevel { GOOD, OK, RISK, HIGH }

/** Что показывает анкета. */
enum class HealthMetric { BMI, WAIST_TO_HEIGHT, WAIST, RESTING_HR, STAIRS, SITTING, BREATH }

/** Один вывод: показатель, его значение, уровень и класс (для текста на экране). */
data class HealthFinding(val metric: HealthMetric, val value: Double, val level: HealthLevel, val grade: String)

/** Итог анкеты: выводы и общий риск по числу тревожных показателей. */
data class HealthSummary(val findings: List<HealthFinding>, val overall: HealthLevel)

/**
 * Простые проверки по открытым шкалам (не диагноз):
 * - индекс массы тела и степень ожирения по классификации ВОЗ (18,5 / 25 / 30 / 35 / 40);
 * - отношение талии к росту: < 0,5 — норма, 0,5–0,6 — повышенный риск, ≥ 0,6 — высокий (NICE);
 * - окружность талии (IDF/ВОЗ): мужчины ≥ 94 / > 102 см, женщины ≥ 80 / > 88 см;
 * - пульс в покое: ≤ 60 отлично … > 90 плохо, ≥ 100 — к врачу (женщинам +3 уд/мин к границам);
 * - подъём на 4 пролёта (ESC, 2020): < 45 с ≈ 9–10 MET — хорошо, > 90 с — ниже нормы;
 * - сидячие часы: > 8 часов в день — высокий риск без часа активности в день (Lancet, 2016).
 */
object HealthCheck {

    fun bmi(heightCm: Double, weightKg: Double): Double = weightKg / ((heightCm / 100) * (heightCm / 100))

    /** Класс ИМТ по ВОЗ. */
    fun bmiGrade(bmi: Double): Pair<String, HealthLevel> = when {
        bmi < 18.5 -> "UNDER" to HealthLevel.RISK
        bmi < 25 -> "NORMAL" to HealthLevel.GOOD
        bmi < 30 -> "OVER" to HealthLevel.OK
        bmi < 35 -> "OBESE1" to HealthLevel.RISK
        bmi < 40 -> "OBESE2" to HealthLevel.HIGH
        else -> "OBESE3" to HealthLevel.HIGH
    }

    fun evaluate(r: HealthRecord, sex: Sex): HealthSummary {
        val out = mutableListOf<HealthFinding>()
        val h = r.heightCm
        val w = r.weightKg
        if (h != null && w != null && h > 0) {
            val b = round1(bmi(h, w))
            val (grade, level) = bmiGrade(b)
            out += HealthFinding(HealthMetric.BMI, b, level, grade)
        }
        val waist = r.waistCm
        if (waist != null && h != null && h > 0) {
            val whtr = (waist / h * 100).roundToInt() / 100.0
            val level = when {
                whtr < 0.5 -> HealthLevel.GOOD
                whtr < 0.6 -> HealthLevel.RISK
                else -> HealthLevel.HIGH
            }
            out += HealthFinding(HealthMetric.WAIST_TO_HEIGHT, whtr, level, level.name)
        }
        if (waist != null) {
            val (raised, high) = if (sex == Sex.MALE) 94.0 to 102.0 else 80.0 to 88.0
            val level = when {
                waist < raised -> HealthLevel.GOOD
                waist <= high -> HealthLevel.RISK
                else -> HealthLevel.HIGH
            }
            out += HealthFinding(HealthMetric.WAIST, waist, level, level.name)
        }
        r.restingHr?.let { hr ->
            val shift = if (sex == Sex.FEMALE) 3 else 0
            val (grade, level) = when {
                hr >= 100 -> "TACHY" to HealthLevel.HIGH
                hr <= 60 + shift -> "EXCELLENT" to HealthLevel.GOOD
                hr <= 70 + shift -> "GOOD" to HealthLevel.GOOD
                hr <= 80 + shift -> "AVERAGE" to HealthLevel.OK
                hr <= 90 + shift -> "BELOW" to HealthLevel.RISK
                else -> "POOR" to HealthLevel.HIGH
            }
            out += HealthFinding(HealthMetric.RESTING_HR, hr.toDouble(), level, grade)
        }
        r.stairsSec?.let { s ->
            val (grade, level) = when {
                s <= 0 -> "CANNOT" to HealthLevel.HIGH
                s <= 45 -> "FIT" to HealthLevel.GOOD
                s <= 60 -> "GOOD" to HealthLevel.OK
                s <= 90 -> "AVERAGE" to HealthLevel.RISK
                else -> "LOW" to HealthLevel.HIGH
            }
            out += HealthFinding(HealthMetric.STAIRS, s.toDouble(), level, grade)
        }
        r.sittingHours?.let { hrs ->
            val level = when {
                hrs < 4 -> HealthLevel.GOOD
                hrs <= 8 -> HealthLevel.OK
                else -> HealthLevel.RISK
            }
            out += HealthFinding(HealthMetric.SITTING, hrs.toDouble(), level, level.name)
        }
        r.breathsPerMin?.let { b ->
            val (grade, level) = when {
                b <= 10 -> "SLOW" to HealthLevel.GOOD
                b <= 20 -> "NORMAL" to HealthLevel.OK
                else -> "FAST" to HealthLevel.RISK
            }
            out += HealthFinding(HealthMetric.BREATH, b.toDouble(), level, grade)
        }
        val worries = out.count { it.level == HealthLevel.RISK } + 2 * out.count { it.level == HealthLevel.HIGH }
        val overall = when {
            out.isEmpty() -> HealthLevel.OK
            worries == 0 -> HealthLevel.GOOD
            worries <= 1 -> HealthLevel.OK
            worries <= 3 -> HealthLevel.RISK
            else -> HealthLevel.HIGH
        }
        return HealthSummary(out, overall)
    }

    /** Вес, при котором ИМТ станет 24,9 (верх нормы), — цель для мотивации; null — уже в норме. */
    fun targetWeight(heightCm: Double, weightKg: Double): Double? {
        val top = 24.9 * (heightCm / 100) * (heightCm / 100)
        return if (weightKg > top) round1(top) else null
    }

    private fun round1(x: Double) = (x * 10).roundToInt() / 10.0

    /**
     * Стартовая длина фазы (вдоха или выдоха) по спокойному дыханию: половина цикла,
     * с шагом 0,5 с, в пределах 2–8 с. Дальше фазу удлиняют кнопкой в плеере.
     */
    fun startPhaseMs(breathsPerMin: Int): Long {
        val half = 60_000.0 / breathsPerMin.coerceIn(4, 40) / 2
        return ((half / 500).roundToInt() * 500L).coerceIn(2_000L, 8_000L)
    }
}
