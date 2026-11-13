package ru.mudrya.yoga.engine

import org.junit.jupiter.api.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

class MuscleMapTest {
    @Test
    fun `every card except rest has main muscles from the known groups`() {
        val cards = PoseCards.cards
        assertEquals(98, cards.size)
        for (c in cards) {
            val m = MuscleMap.forCard(c)
            if (c == "shava") {
                assertNull(m)
                continue
            }
            assertNotNull(m, c)
            assertTrue((m.main + m.supporting).all { it in MuscleMap.GROUPS }, c)
            assertTrue(m.main.intersect(m.supporting.toSet()).isEmpty(), c)
        }
    }

    @Test
    fun `every muscle group is drawn on the front or the back`() {
        val drawn = (MuscleMap.front + MuscleMap.back).mapNotNull { it.group }.toSet()
        assertTrue(MuscleMap.GROUPS.all { it in drawn }, (MuscleMap.GROUPS - drawn).toString())
        (MuscleMap.front + MuscleMap.back).forEach { s ->
            assertTrue(s.points.size >= 6 && s.points.size % 2 == 0)
            assertTrue(s.points.all { it in 0f..MuscleMap.HEIGHT })
        }
    }
}
