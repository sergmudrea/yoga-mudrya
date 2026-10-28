package ru.mudrya.yoga.engine

/**
 * Короткие медитации с голосом. Тексты строк — в ресурсах приложения: med_<id>_<n> (n с единицы);
 * здесь — порядок строк и пауза после каждой (секунды), когда голос замолчал.
 * Техники: йога-нидра (сканирование тела), тратака, Со-Хам, пауза между вдохами («Виджняна-бхайрава-тантра»),
 * вечерняя с намерением замечать сны (по мотивам тибетской йоги сна). Тексты написаны заново.
 */
object Meditations {
    data class Meditation(val id: String, val pauses: List<Int>) {
        val lines: Int get() = pauses.size
    }

    val all: List<Meditation> = listOf(
        Meditation("nidra", listOf(10, 12, 15, 20, 20, 20, 20, 20, 20, 30, 15, 10)),
        Meditation("trataka", listOf(8, 45, 40, 45, 50, 10)),
        Meditation("soham", listOf(8, 20, 40, 60, 60, 15, 5)),
        Meditation("gap", listOf(8, 30, 40, 40, 60, 60, 5)),
        Meditation("sleep", listOf(10, 25, 30, 30, 20, 20, 40)),
    )

    fun get(id: String): Meditation? = all.firstOrNull { it.id == id }

    /** Примерная длительность: речь (около 14 знаков в секунду) плюс паузы. */
    fun estimateSeconds(m: Meditation, textLength: (Int) -> Int): Int =
        m.pauses.indices.sumOf { i -> speechSeconds(textLength(i)) + m.pauses[i] }

    fun speechSeconds(chars: Int): Int = (chars / 14.0).toInt() + 2
}
