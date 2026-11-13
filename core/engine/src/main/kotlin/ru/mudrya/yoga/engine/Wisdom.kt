package ru.mudrya.yoga.engine

/**
 * Мысль дня, словарь йоги и тест аюрведы по дошам. Тексты — ресурсы приложения
 * (wisdom_<n>, gloss_<n>_t / gloss_<n>_d, dosha_q<n> и ответы _v/_p/_k); здесь — счёт и правила.
 * Мысли — пересказ йога-сутр Патанджали, «Хатха-йога прадипики» и наставлений Свами Шивананды;
 * словарь — по «Yoga Vedanta Dictionary» Шивананды; тест — по классическим признакам трёх дош.
 */
object Wisdom {
    const val COUNT = 21

    /** Номер мысли на этот день (с единицы), по кругу. */
    fun forDay(localDay: Long): Int = (Math.floorMod(localDay, COUNT.toLong()) + 1).toInt()
}

object Glossary {
    const val COUNT = 31
}

object DoshaQuiz {
    enum class Dosha { VATA, PITTA, KAPHA }

    const val QUESTIONS = 8

    /** Ведущая доша по ответам; при равенстве — та, что встречается раньше в ответах. */
    fun result(answers: List<Dosha>): Dosha {
        val counts = Dosha.entries.associateWith { d -> answers.count { it == d } }
        val max = counts.values.maxOrNull() ?: 0
        return answers.firstOrNull { counts[it] == max } ?: Dosha.VATA
    }

    /** Сеты, которые подходят доше (первый существующий в каталоге будет показан). */
    fun sets(d: Dosha): List<String> = when (d) {
        Dosha.VATA -> listOf("hl_stress", "hl_sleep", "th_back_relief")
        Dosha.PITTA -> listOf("chandra", "th_calm", "hl_head")
        Dosha.KAPHA -> listOf("surya", "th_morning", "th_strength")
    }
}
