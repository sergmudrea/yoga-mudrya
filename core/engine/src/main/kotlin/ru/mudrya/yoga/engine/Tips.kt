package ru.mudrya.yoga.engine

/**
 * Советы по практике. Тексты — в ресурсах приложения: tip_<раздел>_t (заголовок) и tip_<раздел>_<n> (n с единицы).
 * Собраны из «Light on Yoga» и «Yoga for Holistic Health» Б. К. С. Айенгара и Maran «Yoga Illustrated»,
 * пересказаны своими словами.
 */
object Tips {
    data class Section(val key: String, val count: Int)

    val sections: List<Section> = listOf(
        Section("basics", 6),
        Section("breath", 4),
        Section("props", 4),
        Section("mature", 4),
        Section("cycle", 3),
        Section("pregnancy", 4),
        Section("stop", 3),
    )
}
