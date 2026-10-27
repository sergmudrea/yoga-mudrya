package ru.mudrya.yoga.catalog

import org.junit.jupiter.api.Test
import ru.mudrya.yoga.engine.BreathTimeline
import ru.mudrya.yoga.engine.BuildRequest
import ru.mudrya.yoga.engine.CatalogValidator
import ru.mudrya.yoga.engine.Constraints
import ru.mudrya.yoga.engine.FigureGeometry
import ru.mudrya.yoga.engine.SessionBuilder
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.model.Side
import ru.mudrya.yoga.model.Support
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class SuryaCatalogTest {

    private val catalog = SuryaCatalog.catalog
    private fun build(id: String, injuries: Set<Injury> = emptySet(), rounds: Int = 1) = SessionBuilder(catalog)
        .build(BuildRequest(SuryaCatalog.sequence(id), rounds = rounds, support = Support.PALMS, constraints = Constraints(injuries)))

    @Test
    fun `sun ring has 77 positions like the book`() {
        val s = build("surya")
        assertEquals(77, s.steps.size)
        assertEquals("Основная стойка", s.steps.first().title)
    }

    @Test
    fun `moon ring has 99 positions like the book`() {
        assertEquals(99, build("chandra").steps.size)
    }

    @Test
    fun `rings follow the sections of the book with right then left inner rings`() {
        val sides = build("surya").steps.map { it.side }.filter { it != Side.NONE }.distinct()
        assertEquals(listOf(Side.RIGHT, Side.LEFT), sides)
        val moon = SuryaCatalog.sequence("chandra")
        assertTrue(moon.entryBlockId != null && moon.exitBlockId != null)
    }

    @Test
    fun `rings repeat rounds`() {
        assertEquals(198, build("chandra", rounds = 2).steps.size)
    }

    @Test
    fun `every step references a known asana and has a breath to move on`() {
        catalog.blocks.values.flatMap { it.steps }.forEach { step ->
            assertTrue(step.asanaId in catalog.asanas, "unknown asana ${step.asanaId}")
            assertTrue(step.enter.isNotEmpty(), step.asanaId)
        }
    }

    @Test
    fun `every asana is used`() {
        val used = catalog.blocks.values.flatMap { b -> b.steps.map { it.asanaId } }.toSet()
        assertEquals(emptySet(), catalog.asanas.keys - used)
    }

    @Test
    fun `sidersky sets build for every combination of injuries and supports`() {
        assertEquals(emptyList(), CatalogValidator.validate(catalog, SuryaCatalog.coreSequences))
    }

    @Test
    fun `no body part goes below the floor in any pose`() {
        catalog.asanas.values.forEach { asana ->
            val f = FigureGeometry.grounded(asana.pose)
            assertTrue(f.all().all { it.y >= -1e-6 }, asana.id)
            assertEquals(0.0, f.minY, 1e-6, asana.id)
        }
    }

    @Test
    fun `lumbar injury replaces deep backbends but keeps the flow`() {
        val s = build("surya", setOf(Injury.LUMBAR))
        assertTrue(s.steps.none { (it.asana.load[ru.mudrya.yoga.model.Joint.LUMBAR] ?: 0) >= 2 })
        assertTrue(s.steps.size >= 70, "steps=${s.steps.size}")
    }

    @Test
    fun `metal dog is offered in plank and chaturanga`() {
        val dogs = build("surya").steps.filter { it.metalDog }.map { it.asana.id }.toSet()
        assertEquals(setOf("at_plank", "at_chat"), dogs)
    }

    @Test
    fun `support choice is offered where the hands carry the body`() {
        assertTrue(catalog.asana("at_plank").supports.isNotEmpty())
        assertTrue(catalog.asana("at_tad").supports.isEmpty())
    }

    @Test
    fun `one round at 4 second phases lasts a reasonable time`() {
        val minutes = BreathTimeline(build("surya"), phaseMs = 4_000).totalMs / 60_000.0
        assertTrue(minutes in 10.0..35.0, "minutes=$minutes")
    }

    @Test
    fun `every asana has names in both languages, a cue and a 3d figure`() {
        catalog.asanas.values.forEach {
            assertTrue(it.nameRu.isNotBlank() && it.nameEn.isNotBlank(), it.id)
            assertTrue(it.nameEn.none { c -> c in 'а'..'я' || c in 'А'..'Я' }, "${it.id}: ${it.nameEn}")
            assertTrue(it.cuesRu.isNotEmpty(), it.id)
            assertTrue(it.figure != null, it.id)
        }
    }

    @Test
    fun `sidersky steps are translated, left side included`() {
        val s = build("at_sn")
        assertTrue(s.steps.all { !it.titleEn.isNullOrBlank() })
        assertTrue(s.steps.any { it.titleEn!!.contains("left", ignoreCase = true) })
        assertTrue(s.steps.any { it.title.contains("левая") })
    }

    @Test
    fun `atlas sets build with the same number of positions as the atlas`() {
        AtlasCatalog.sequences.forEach { seq ->
            assertEquals(AtlasCatalog.stepCounts.getValue(seq.id), build(seq.id).steps.size, seq.id)
        }
    }

    @Test
    fun `classic surya namaskar is a full round, right then left`() {
        val s = build("at_sn")
        assertEquals(24, s.steps.size)
        assertEquals(listOf(Side.RIGHT, Side.LEFT), s.steps.map { it.side }.distinct())
    }

    @Test
    fun `library has every pose of the book by chapters and sections`() {
        assertEquals(1829, LibraryCatalog.POSE_COUNT)
        assertEquals(7, LibraryCatalog.chapters.size)
        assertEquals(LibraryCatalog.sequences.map { it.id }.toSet(), LibraryCatalog.chapters.flatMap { it.sequenceIds }.toSet())
        val first = build("lib0").steps.first()
        assertEquals("Поза горы", first.title)
        assertEquals("Mountain Pose", first.titleEn)
        assertEquals("Tadasana", first.asana.sanskrit)
    }

    @Test
    fun `full cycle opens with the ring, runs start, core and stop sets, closes with the ring exit`() {
        listOf("full_sun" to "surya", "full_moon" to "chandra").forEach { (full, ring) ->
            val f = SuryaCatalog.sequence(full)
            val r = SuryaCatalog.sequence(ring)
            assertEquals(r.items.first(), f.items.first())
            assertEquals(r.items.last(), f.items.last())
            val inner = f.items.map { it.blockId }
            assertEquals(listOf("at_ns", "at_ss1", "at_ss2", "at_ss3", "at_ss4", "at_ss5", "at_ss6", "at_ss7", "at_st", "at_ds", "at_zs"),
                inner.filter { it.startsWith("at_") })
            val n = build(full).steps.size
            assertEquals(AtlasCatalog.stepCounts.getValue(full), n)
            assertTrue(n > build(ring).steps.size + 300, "$full: $n")
        }
    }

    @Test
    fun `start sets 1 to 7, core, stop and extra sets are back`() {
        listOf("at_ss4", "at_ss5", "at_ss6", "at_ss7", "at_st", "at_ds", "at_zs", "at_ssd", "at_zsd").forEach {
            assertEquals(it, SuryaCatalog.sequence(it).id)
        }
    }
}
