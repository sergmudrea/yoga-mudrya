package ru.mudrya.yoga.engine

import org.junit.jupiter.api.Test
import ru.mudrya.yoga.engine.Breathwork.Kind
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class BreathworkTest {
    private val box = Breathwork.pattern("box")!!
    private val calm = Breathwork.pattern("calm478")!!

    @Test
    fun `phases follow each other inside a cycle`() {
        assertEquals(Kind.IN, Breathwork.at(calm, 1_000, false).phase.kind)
        assertEquals(Kind.HOLD, Breathwork.at(calm, 5_000, false).phase.kind)
        assertEquals(Kind.OUT, Breathwork.at(calm, 12_000, false).phase.kind)
        assertEquals(2, Breathwork.at(calm, 19_500, false).cycle)
    }

    @Test
    fun `no holds removes holds and shortens the practice`() {
        assertEquals(Kind.OUT, Breathwork.at(calm, 5_000, true).phase.kind)
        assertTrue(calm.totalSeconds(true) < calm.totalSeconds(false))
        assertTrue(Breathwork.patterns.none { p -> p.phases(true).any { it.kind == Kind.HOLD } })
    }

    @Test
    fun `the circle grows on the inhale, stays on the hold and empties on the exhale`() {
        assertEquals(0.5f, Breathwork.lung(box, 2_000, false), 0.01f)
        assertEquals(1f, Breathwork.lung(box, 6_000, false), 0.01f)
        assertEquals(0.5f, Breathwork.lung(box, 10_000, false), 0.01f)
        assertEquals(0f, Breathwork.lung(box, 14_000, false), 0.01f)
    }

    @Test
    fun `practices end and the sos one takes about two minutes`() {
        assertTrue(Breathwork.at(box, box.totalSeconds(false) * 1000L, false).done)
        assertEquals(117, Breathwork.pattern("sos")!!.totalSeconds(false))
    }
}
