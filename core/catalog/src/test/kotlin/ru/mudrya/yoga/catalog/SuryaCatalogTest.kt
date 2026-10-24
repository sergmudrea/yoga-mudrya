package ru.mudrya.yoga.catalog

import org.junit.jupiter.api.Test
import ru.mudrya.yoga.engine.BreathTimeline
import ru.mudrya.yoga.engine.BuildRequest
import ru.mudrya.yoga.engine.CatalogValidator
import ru.mudrya.yoga.engine.Constraints
import ru.mudrya.yoga.engine.FigureGeometry
import ru.mudrya.yoga.engine.PoseFitter
import ru.mudrya.yoga.engine.SessionBuilder
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.model.Side
import ru.mudrya.yoga.model.Support
import kotlin.math.abs
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class SuryaCatalogTest {

    private val catalog = SuryaCatalog.catalog
    private fun build(injuries: Set<Injury> = emptySet()) = SessionBuilder(catalog)
        .build(BuildRequest(SuryaCatalog.surya, rounds = 1, support = Support.PALMS, constraints = Constraints(injuries)))

    @Test
    fun `surya has 77 positions like the method`() {
        assertEquals(77, build().steps.size)
    }

    @Test
    fun `every step references a known asana`() {
        SuryaCatalog.blocks.flatMap { it.steps }.forEach { step ->
            assertTrue(step.asanaId in catalog.asanas, "unknown asana ${step.asanaId}")
        }
    }

    @Test
    fun `every asana is used`() {
        val used = (SuryaCatalog.blocks + AtlasCatalog.blocks).flatMap { b -> b.steps.map { it.asanaId } }.toSet()
        val unused = catalog.asanas.keys - used
        assertEquals(emptySet(), unused)
    }

    @Test
    fun `whole catalog builds for every combination of injuries and supports`() {
        assertEquals(emptyList(), CatalogValidator.validate(catalog, SuryaCatalog.sequences))
    }

    @Test
    fun `both contacts touch the floor after fitting`() {
        catalog.asanas.values.filter { it.fit != null }.forEach { asana ->
            val gap = PoseFitter.gap(asana.pose, asana.fit!!)
            assertTrue(abs(gap) < 0.5, "${asana.id}: gap $gap")
        }
    }

    @Test
    fun `no body part goes below the floor in any pose`() {
        catalog.asanas.values.forEach { asana ->
            val f = FigureGeometry.grounded(asana.pose)
            assertTrue(f.all().all { it.y >= -1e-6 }, asana.id)
        }
    }

    @Test
    fun `mirrored blocks run right then left`() {
        val sides = build().steps.filter { it.asana.id == "wide_step" }.map { it.side }
        assertEquals(listOf(Side.RIGHT, Side.LEFT), sides)
    }

    @Test
    fun `lumbar injury removes deep backbends but keeps the flow`() {
        val ids = build(setOf(Injury.LUMBAR)).steps.map { it.asana.id }
        assertTrue("full_backbend" !in ids && "lunge_backbend" !in ids && "kneel_backbend" !in ids)
        assertEquals(77, ids.size)
    }

    @Test
    fun `metal dog is offered in plank and chaturanga`() {
        val dogs = build().steps.filter { it.metalDog }.map { it.asana.id }.toSet()
        assertEquals(setOf("plank", "chaturanga"), dogs)
    }

    @Test
    fun `one round at 4 second phases lasts a reasonable time`() {
        val minutes = BreathTimeline(build(), phaseMs = 4_000).totalMs / 60_000.0
        assertTrue(minutes in 15.0..30.0, "minutes=$minutes")
    }

    @Test
    fun `every asana has a name and at least one cue`() {
        catalog.asanas.values.forEach {
            assertTrue(it.nameRu.isNotBlank() && it.nameEn.isNotBlank(), it.id)
            assertTrue(it.cuesRu.isNotEmpty(), it.id)
        }
    }

    private fun buildChandra(injuries: Set<Injury> = emptySet()) = SessionBuilder(catalog)
        .build(BuildRequest(SuryaCatalog.chandra, rounds = 1, support = Support.PALMS, constraints = Constraints(injuries)))

    @Test
    fun `chandra has 99 positions like the book`() {
        assertEquals(99, buildChandra().steps.size)
    }

    @Test
    fun `chandra moon ring runs right then left`() {
        val sides = buildChandra().steps.filter { it.asana.id == "shoulder_dog" }.map { it.side }
        assertEquals(listOf(Side.RIGHT, Side.LEFT), sides)
    }

    @Test
    fun `chandra keeps all positions with any single limitation`() {
        Injury.entries.forEach { assertEquals(99, buildChandra(setOf(it)).steps.size, it.name) }
    }

    @Test
    fun `chandra repeats rounds`() {
        val s = SessionBuilder(catalog).build(BuildRequest(SuryaCatalog.chandra, rounds = 2, support = Support.PALMS))
        assertEquals(198, s.steps.size)
    }

    @Test
    fun `cat backbend and round back differ only by the spine curve`() {
        val cat = catalog.asana("cat").pose
        val anti = catalog.asana("anti_cat").pose
        assertTrue(cat.chest > cat.torso - 360 && (cat.chest - cat.torso + 360) % 360 in 1.0..179.0, "cat chest above waist line")
        assertTrue((anti.torso - anti.chest + 360) % 360 in 1.0..179.0, "anti-cat back rounds up")
    }

    @Test
    fun `atlas sets build with the same number of positions as the atlas`() {
        AtlasCatalog.sequences.forEach { seq ->
            val n = SessionBuilder(catalog).build(BuildRequest(seq, rounds = 1, support = Support.PALMS)).steps.size
            assertEquals(AtlasCatalog.stepCounts.getValue(seq.id), n, seq.id)
        }
    }

    @Test
    fun `classic surya namaskar is a full round, right then left`() {
        val s = SessionBuilder(catalog).build(BuildRequest(SuryaCatalog.sequence("at_sn"), 1, Support.PALMS))
        assertEquals(24, s.steps.size)
        assertEquals(listOf(Side.RIGHT, Side.LEFT), s.steps.map { it.side }.distinct())
        assertTrue(s.steps.any { it.title.contains("левая") })
    }

    @Test
    fun `every step has a breath to move on`() {
        SuryaCatalog.blocks.plus(AtlasCatalog.blocks).flatMap { it.steps }.forEach { assertTrue(it.enter.isNotEmpty(), it.asanaId) }
    }

    @Test
    fun `atlas poses stand on the floor`() {
        AtlasCatalog.asanas.forEach { a ->
            val f = FigureGeometry.grounded(a.pose)
            assertEquals(0.0, f.minY, 1e-6, a.id)
        }
    }
}
