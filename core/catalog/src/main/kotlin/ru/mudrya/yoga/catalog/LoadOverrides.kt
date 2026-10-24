package ru.mudrya.yoga.catalog

import ru.mudrya.yoga.model.Joint

// Сгенерировано tools/atlas/overrides_to_kotlin.py из load_overrides.json — не править руками.

data class LoadOverride(val load: Map<Joint, Int>, val inversion: Boolean)

/** Нагрузки, выверенные вручную там, где геометрическое правило ошибается. */
object LoadOverrides {
    val map: Map<String, LoadOverride> = mapOf(
    )
}
