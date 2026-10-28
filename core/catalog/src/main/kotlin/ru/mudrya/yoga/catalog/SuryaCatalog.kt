package ru.mudrya.yoga.catalog

import ru.mudrya.yoga.engine.Base
import ru.mudrya.yoga.engine.GraphBuilder
import ru.mudrya.yoga.engine.LoadAnalyzer
import ru.mudrya.yoga.engine.Substitutions
import ru.mudrya.yoga.model.Catalog
import ru.mudrya.yoga.model.Joint
import ru.mudrya.yoga.model.SequenceDef
import ru.mudrya.yoga.model.Support

/**
 * Каталог приложения целиком из «Атласа нулевого цикла»:
 * - кольца книги Сидерского — «Солнечное кольцо» (77 позиций) и «Лунное кольцо» (99) по разделам книги,
 *   старт-сет, стержневой сет, стоп-сет, дополнительные элементы, классические Сурья и Чандра Намаскар;
 * - шесть сетов «Сетового тренинга» (Ясочка, Сидорцов, Зенченко);
 * - дополнительные сеты второй подборки книг и раздел «Пилатес-йога» (ExtraSetsCatalog);
 * - библиотека 2100 асан Д. Лакерды по главам и разделам книги.
 * Позы, дыхание, подсказки и описания — из атласа, переводы — в генераторе (tools/atlas).
 */
object SuryaCatalog {

    private val ALL_SUPPORTS = setOf(Support.FISTS, Support.PALMS, Support.FINGERS)

    /** Сеты Сидерского и классика (кольца — «surya» и «chandra»). */
    val coreSequences: List<SequenceDef> = AtlasCatalog.sequences

    /** Все сеты: сначала Сидерский, потом разделы библиотеки. */
    val sequences: List<SequenceDef> by lazy { coreSequences + ThemeCatalog.sequences + BookSetsCatalog.sequences + ExtraSetsCatalog.sequences + LibraryCatalog.sequences }

    private val byId: Map<String, SequenceDef> by lazy { sequences.associateBy { it.id } }

    fun sequence(id: String): SequenceDef = byId[id] ?: byId.getValue("surya")

    /** Каталог с нагрузками, заменами и графом переходов. */
    val catalog: Catalog by lazy {
        val base = AtlasCatalog.asanas + LibraryCatalog.asanas
        val all = base + ThemeCatalog.mirroredLibraryAsanas(LibraryCatalog.asanas.associateBy { it.id }, BookSetsCatalog.mirroredLibraryIds + ExtraSetsCatalog.mirroredLibraryIds)
        // Нагрузка считается по геометрии позы; поверх — ручная выверка по биомеханике.
        val computedProfiles = all.associate { it.id to LoadAnalyzer.analyze(it.pose) }
        val profiles = computedProfiles.mapValues { (id, p) ->
            LoadOverrides.map[id]?.let { o -> p.copy(load = o.load.filterValues { it > 0 }, inversion = o.inversion, base = o.base ?: p.base) } ?: p
        }
        val loaded = all.map { a ->
            val prof = profiles.getValue(a.id)
            // Упор на руки: можно выбрать опору — кулаки, ладони или пальцы.
            val onHands = prof.base == Base.HANDS_AND_FEET || prof.base == Base.ARM_BALANCE || (prof.load[Joint.WRISTS] ?: 0) >= 2
            a.copy(
                load = prof.load,
                inversion = prof.inversion,
                supports = if (a.supports.isEmpty() && onHands) ALL_SUPPORTS else a.supports,
            )
        }
        val subs = Substitutions.build(loaded, profiles)
        val finalAsanas = loaded.map { a -> subs[a.id]?.let { a.copy(alternatives = it) } ?: a }
        val blockMap = (AtlasCatalog.blocks + ThemeCatalog.blocks + BookSetsCatalog.blocks + ExtraSetsCatalog.blocks + LibraryCatalog.blocks).associateBy { it.id }
        Catalog(
            asanas = finalAsanas.associateBy { it.id },
            blocks = blockMap,
            transitions = GraphBuilder.build(blockMap, sequences, emptyMap()),
        )
    }
}
