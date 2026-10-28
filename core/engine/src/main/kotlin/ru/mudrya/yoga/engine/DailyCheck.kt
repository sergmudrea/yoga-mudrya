package ru.mudrya.yoga.engine

/** Самочувствие на сегодня: силы, напряжение, зона зажима и сколько есть времени. */
enum class Energy { LOW, MID, HIGH }
enum class Mood { CALM, TENSE }
enum class TensionZone { NONE, NECK, BACK, HIPS, KNEES }

data class CheckIn(
    val localDay: Long,
    val energy: Energy,
    val mood: Mood,
    val zone: TensionZone,
    /** 10 / 20 / 40 минут. */
    val minutes: Int,
)

/** Почему предложен этот сет — строка-объяснение на экране «Сегодня». */
enum class Reason { NECK, BACK, HIPS, KNEES, LOW_ENERGY, TENSE, EVENING, MORNING, HIGH_ENERGY, STEADY }

data class Recommendation(
    /** Сеты по порядку: первый — самый точный, дальше — запасные (последний всегда бесплатный). */
    val candidates: List<String>,
    val reason: Reason,
    /** Начать с двух минут дыхания: при напряжении. */
    val breathFirst: Boolean,
)

/**
 * Подбор практики на сегодня по отметкам самочувствия. Правила простые и предсказуемые:
 * зажим в теле важнее всего, затем силы, напряжение и время суток. Опасного не предлагает:
 * при усталости — щадящие сеты, вечером — без бодрящих.
 */
object DailyCheck {
    const val KEEP = 90

    fun recommend(c: CheckIn, hour: Int): Recommendation {
        val evening = hour >= 20 || hour < 5
        val morning = hour in 5..11
        val tense = c.mood == Mood.TENSE
        val (sets, reason) = when {
            c.zone == TensionZone.NECK -> listOf("th_neck", "ex_ybreak") to Reason.NECK
            c.zone == TensionZone.BACK -> listOf("th_back_relief") to Reason.BACK
            c.zone == TensionZone.HIPS -> listOf("th_hips", "ex_cyp") to Reason.HIPS
            c.zone == TensionZone.KNEES -> listOf("th_knees", "ex_cyp") to Reason.KNEES
            c.energy == Energy.LOW && evening -> listOf("hl_sleep") to Reason.EVENING
            c.energy == Energy.LOW -> listOf("ex_sh_tired", "th_back_relief") to Reason.LOW_ENERGY
            tense -> listOf("hl_stress", "th_calm", "chandra") to Reason.TENSE
            evening -> listOf("hl_sleep") to Reason.EVENING
            c.energy == Energy.HIGH && morning -> listOf("th_morning") to Reason.MORNING
            c.energy == Energy.HIGH -> listOf("th_strength", "surya") to Reason.HIGH_ENERGY
            morning -> listOf("th_morning") to Reason.MORNING
            else -> listOf("surya") to Reason.STEADY
        }
        return Recommendation(sets, reason, breathFirst = tense)
    }

    /** Сегодняшняя отметка заменяет прежнюю за тот же день; храним последние [KEEP]. */
    fun record(list: List<CheckIn>, c: CheckIn): List<CheckIn> =
        (list.filter { it.localDay != c.localDay } + c).sortedBy { it.localDay }.takeLast(KEEP)

    fun today(list: List<CheckIn>, day: Long): CheckIn? = list.lastOrNull { it.localDay == day }
}
