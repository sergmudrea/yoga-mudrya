package ru.mudrya.yoga.catalog

import org.junit.jupiter.api.Test
import ru.mudrya.yoga.engine.BuildRequest
import ru.mudrya.yoga.engine.Constraints
import ru.mudrya.yoga.engine.LoadAnalyzer
import ru.mudrya.yoga.engine.SessionBuilder
import ru.mudrya.yoga.model.Joint
import ru.mudrya.yoga.model.Support
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class LoadsTest {

    private val catalog = SuryaCatalog.catalog

    @Test
    fun `standing at rest loads nothing`() {
        assertTrue(LoadAnalyzer.analyze(catalog.asana("tadasana").pose).load.isEmpty())
    }

    @Test
    fun `plank puts weight on wrists and shoulders`() {
        val load = catalog.asana("plank").load
        assertTrue((load[Joint.WRISTS] ?: 0) >= 2)
        assertTrue((load[Joint.SHOULDERS] ?: 0) >= 2)
    }

    @Test
    fun `full backbend loads the lower back heavily`() {
        assertEquals(3, catalog.asana("full_backbend").load[Joint.LUMBAR])
    }

    @Test
    fun `replacements never load the same zone and never turn upside down`() {
        catalog.asanas.values.forEach { a ->
            a.alternatives.forEach { (joint, id) ->
                val alt = catalog.asana(id)
                assertTrue((alt.load[joint] ?: 0) <= 1, "${a.id} → $id для $joint")
                assertTrue(!alt.inversion, "${a.id} → $id перевёрнута")
            }
        }
    }

    @Test
    fun `problem zone after practice is spared in every set`() {
        Joint.entries.forEach { joint ->
            SuryaCatalog.sequences.forEach { seq ->
                val s = SessionBuilder(catalog).build(
                    BuildRequest(seq, 1, Support.FISTS, constraints = Constraints(eased = setOf(joint))),
                )
                s.steps.forEach { step ->
                    // Упор на кулаках снимает с запястий умеренную нагрузку — убираем только тяжёлую.
                    val limit = if (joint == Joint.WRISTS && step.asana.supports.isNotEmpty()) 3 else 2
                    assertTrue((step.asana.load[joint] ?: 0) < limit, "${seq.id}: ${step.asana.id} грузит $joint")
                    if (joint == Joint.NECK) assertTrue(!step.asana.inversion, "${seq.id}: ${step.asana.id} перевёрнута")
                }
            }
        }
    }

    @Test
    fun `replaced step says what it replaced and why`() {
        val s = SessionBuilder(catalog).build(
            BuildRequest(SuryaCatalog.sequence("at_sn"), 1, Support.PALMS, constraints = Constraints(eased = setOf(Joint.LUMBAR))),
        )
        val replaced = s.steps.filter { it.replacedFor != null }
        assertTrue(replaced.isNotEmpty())
        replaced.forEach {
            assertEquals(Joint.LUMBAR, it.replacedFor)
            assertTrue(!it.replacedTitle.isNullOrBlank())
        }
    }

    @Test
    fun `cycle mode has no inversions and no deepest backbends in any set`() {
        SuryaCatalog.sequences.forEach { seq ->
            val s = SessionBuilder(catalog).build(BuildRequest(seq, 1, Support.PALMS, constraints = Constraints(cycle = true)))
            s.steps.forEach { step ->
                assertTrue(!step.asana.inversion, "${seq.id}: ${step.asana.id} перевёрнута")
                assertTrue((step.asana.load[Joint.LUMBAR] ?: 0) < 3, "${seq.id}: ${step.asana.id} глубокий прогиб")
            }
            s.steps.filter { it.replacedFor != null }.forEach { assertTrue(it.replacedForCycle, "${seq.id}: ${it.asana.id}") }
        }
    }
}
