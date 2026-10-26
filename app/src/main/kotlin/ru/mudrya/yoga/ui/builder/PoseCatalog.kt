package ru.mudrya.yoga.ui.builder

import ru.mudrya.yoga.catalog.AtlasCatalog
import ru.mudrya.yoga.catalog.LibraryCatalog
import ru.mudrya.yoga.model.Asana

/** Поза для выбора в конструкторе и библиотеке. */
data class PoseEntry(val asana: Asana, val search: String)

/** Позы, из которых собирают свой сет: сеты Сидерского и библиотека 2100 асан. */
object PoseCatalog {

    private fun entry(a: Asana) = PoseEntry(a, listOfNotNull(a.nameRu, a.nameEn, a.sanskrit).joinToString(" ").lowercase())

    /** Позы колец, классики и старт-сета — без повторов по названию. */
    val core: List<PoseEntry> by lazy { AtlasCatalog.asanas.distinctBy { it.nameRu }.map(::entry) }

    val library: List<PoseEntry> by lazy { LibraryCatalog.asanas.map(::entry) }

    private val byId: Map<String, Asana> by lazy { (AtlasCatalog.asanas + LibraryCatalog.asanas).associateBy { it.id } }

    fun asana(id: String): Asana? = byId[id]

    /** Позы одного раздела библиотеки по порядку книги. */
    fun section(sequenceId: String): List<Asana> =
        LibraryCatalog.blocks.firstOrNull { it.id == sequenceId }?.steps?.mapNotNull { byId[it.asanaId] }.orEmpty()

    fun search(list: List<PoseEntry>, query: String): List<PoseEntry> {
        val q = query.trim().lowercase()
        return if (q.isEmpty()) list else list.filter { it.search.contains(q) }
    }
}
