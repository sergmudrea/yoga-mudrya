package ru.mudrya.yoga.engine

import org.junit.jupiter.api.Test
import ru.mudrya.yoga.model.Catalog
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.model.Joint
import ru.mudrya.yoga.model.Side
import ru.mudrya.yoga.model.Support
import ru.mudrya.yoga.model.TransitionGraph
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class SessionBuilderTest {

    private val builder = SessionBuilder(Fixtures.catalog)
    private fun req(
        rounds: Int = 1,
        support: Support = Support.PALMS,
        slots: Set<String> = emptySet(),
        injuries: Set<Injury> = emptySet(),
        level: Int = 0,
        relaxEvery: Int = 0,
    ) = BuildRequest(Fixtures.surya, rounds, support, slots, Constraints(injuries, level), relaxEvery)

    @Test
    fun `one round unfolds blocks in order`() {
        val ids = builder.build(req()).steps.map { it.asana.id }
        assertEquals(
            listOf(
                "tadasana", "arms_up", "uttanasana", "plank",
                "chaturanga", "up_dog", "down_dog",
                "lunge", "crescent", "down_dog",
                "chaturanga", "up_dog", "down_dog",
                "lunge", "crescent", "down_dog",
                "chaturanga", "up_dog", "down_dog",
                "uttanasana", "arms_up", "tadasana",
            ),
            ids,
        )
    }

    @Test
    fun `mirrored blocks carry their side`() {
        val lunges = builder.build(req()).steps.filter { it.asana.id == "lunge" }.map { it.side }
        assertEquals(listOf(Side.RIGHT, Side.LEFT), lunges)
    }

    @Test
    fun `rounds repeat the round and are numbered`() {
        val s = builder.build(req(rounds = 3))
        assertEquals(22 * 3, s.steps.size)
        assertEquals(listOf(1, 2, 3), s.steps.map { it.round }.distinct())
    }

    @Test
    fun `slot is inserted only when enabled`() {
        val off = builder.build(req()).steps.map { it.asana.id }
        val on = builder.build(req(slots = setOf("crow"))).steps.map { it.asana.id }
        assertFalse("crow" in off)
        assertEquals(off.size + 2, on.size)
        // Сразу после первой виньясы (chaturanga, up_dog, down_dog).
        assertEquals(listOf("down_dog", "crow", "plank", "lunge"), on.subList(6, 10))
    }

    @Test
    fun `slot above user level is ignored`() {
        val ids = builder.build(req(slots = setOf("advanced"), level = 0)).steps.map { it.asana.id }
        assertFalse("crow" in ids)
    }

    @Test
    fun `neck injury replaces inversion with safer alternative`() {
        val ids = builder.build(req(slots = setOf("plow"), injuries = setOf(Injury.NECK))).steps.map { it.asana.id }
        assertFalse("plow" in ids)
        assertTrue("bridge" in ids)
    }

    @Test
    fun `lumbar injury replaces high lumbar load asanas`() {
        val ids = builder.build(req(injuries = setOf(Injury.LUMBAR))).steps.map { it.asana.id }
        assertFalse("up_dog" in ids)
        assertEquals(3, ids.count { it == "sphinx" })
    }

    @Test
    fun `wrist injury forces fists where possible`() {
        val steps = builder.build(req(support = Support.FINGERS, slots = setOf("crow"), injuries = setOf(Injury.WRISTS))).steps
        assertEquals(Support.FISTS, steps.first { it.asana.id == "chaturanga" }.support)
        // Стойка-сборка — баланс на руках с нагрузкой 3: при больных запястьях её не делаем.
        assertTrue(steps.none { it.asana.id == "crow" })
    }

    @Test
    fun `unsupported requested support falls back`() {
        val dog = builder.build(req(support = Support.FINGERS)).steps.first { it.asana.id == "down_dog" }
        assertEquals(Support.FISTS, dog.support)
    }

    @Test
    fun `standing asanas have no support`() {
        assertNull(builder.build(req()).steps.first().support)
    }

    @Test
    fun `missing transition fails the build`() {
        val broken = Catalog(Fixtures.asanas, Fixtures.blocks, TransitionGraph.fromBlocks(Fixtures.blocks.values))
        assertFailsWith<SessionBuildException> { SessionBuilder(broken).build(req()) }
    }

    @Test
    fun `relaxation goes after every Nth round but not after the last`() {
        assertEquals(setOf(2, 4), builder.build(req(rounds = 6, relaxEvery = 2)).relaxAfterRounds)
        assertEquals(setOf(2, 4), builder.build(req(rounds = 5, relaxEvery = 2)).relaxAfterRounds)
        assertEquals(emptySet(), builder.build(req(rounds = 5)).relaxAfterRounds)
    }

    @Test
    fun `fists load wrists less than fingers`() {
        val fists = builder.build(req(support = Support.FISTS)).load.getValue(Joint.WRISTS)
        val fingers = builder.build(req(support = Support.FINGERS)).load.getValue(Joint.WRISTS)
        assertTrue(fists < fingers, "fists=$fists fingers=$fingers")
    }

    @Test
    fun `zero rounds is rejected`() {
        assertFailsWith<IllegalArgumentException> { builder.build(req(rounds = 0)) }
    }
}
