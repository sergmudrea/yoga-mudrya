package ru.mudrya.yoga.engine

import org.junit.jupiter.api.Test
import ru.mudrya.yoga.model.Breath
import ru.mudrya.yoga.model.Catalog
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.model.Joint
import ru.mudrya.yoga.model.Pose
import ru.mudrya.yoga.model.Support
import kotlin.math.abs
import kotlin.test.assertEquals
import kotlin.test.assertTrue

private fun close(expected: Double, actual: Double, eps: Double = 1e-9) =
    assertTrue(abs(expected - actual) < eps, "expected $expected, got $actual")

class CatalogValidatorTest {

    @Test
    fun `fixture catalog builds for every combination`() {
        val problems = CatalogValidator.validate(Fixtures.catalog, listOf(Fixtures.surya), maxLevel = 1)
        assertEquals(emptyList(), problems)
    }

    @Test
    fun `alternative without inherited transitions is reported`() {
        val graphWithoutAlternatives = GraphBuilder.build(Fixtures.blocks, listOf(Fixtures.surya))
        val broken = Catalog(Fixtures.asanas, Fixtures.blocks, graphWithoutAlternatives)
        val problems = CatalogValidator.validate(broken, listOf(Fixtures.surya))
        assertTrue(problems.isNotEmpty())
        assertTrue(problems.all { "LUMBAR" in it.case || "NECK" in it.case })
    }
}

class BreathTimelineTest {

    private val session = SessionBuilder(Fixtures.catalog)
        .build(BuildRequest(Fixtures.surya, rounds = 1, support = Support.PALMS))

    @Test
    fun `each step is an enter phase plus three hold phases`() {
        val t = BreathTimeline(session, phaseMs = 4_000)
        assertEquals(session.steps.size * 4, t.phases.size)
        assertEquals(session.steps.size * 4 * 4_000L, t.totalMs)
        val first = t.phases.take(4)
        assertEquals(listOf(PhaseKind.ENTER, PhaseKind.HOLD, PhaseKind.HOLD, PhaseKind.HOLD), first.map { it.kind })
        assertEquals(listOf(Breath.EXHALE, Breath.INHALE, Breath.EXHALE, Breath.INHALE), first.map { it.breath })
    }

    @Test
    fun `step enter breath comes from the sequence`() {
        val t = BreathTimeline(session, phaseMs = 1_000)
        val armsUpInExit = session.steps.indexOfLast { it.asana.id == "arms_up" }
        val enter = t.phases.first { it.stepIndex == armsUpInExit && it.kind == PhaseKind.ENTER }
        assertEquals(Breath.INHALE, enter.breath)
    }

    @Test
    fun `position lookup finds phase and progress`() {
        val t = BreathTimeline(session, phaseMs = 4_000)
        val p0 = t.positionAt(0)
        assertEquals(0, p0.phaseIndex)
        close(0.0, p0.progress)
        val p = t.positionAt(4_000L * 5 + 1_000)
        assertEquals(5, p.phaseIndex)
        assertEquals(1, p.phase.stepIndex)
        close(0.25, p.progress)
        assertEquals(t.phases.lastIndex, t.positionAt(Long.MAX_VALUE).phaseIndex)
        assertEquals(0, t.positionAt(-50).phaseIndex)
    }

    @Test
    fun `slower speed makes phases longer`() {
        val normal = BreathTimeline(session, 4_000, speed = 1.0)
        val slow = BreathTimeline(session, 4_000, speed = 0.75)
        assertTrue(slow.totalMs > normal.totalMs)
        assertEquals(5_333L, slow.phases.first().durationMs)
    }

    @Test
    fun `breaths per minute matches phase length`() {
        // Фаза 7,5 с → вдох+выдох 15 с → 4 дыхания в минуту.
        close(4.0, BreathTimeline(session, 7_500).breathsPerMinute(), 1e-6)
    }
}

class FullBreathTest {

    @Test
    fun `inhale fills belly first then chest`() {
        val start = FullBreath.fill(Breath.INHALE, 0.0)
        close(0.0, start.belly); close(0.0, start.chest)
        val early = FullBreath.fill(Breath.INHALE, 0.3)
        assertTrue(early.belly > 0.3 && early.chest == 0.0)
        val end = FullBreath.fill(Breath.INHALE, 1.0)
        close(FullBreath.BELLY_MAX, end.belly); close(1.0, end.chest)
    }

    @Test
    fun `exhale empties chest first then belly`() {
        val start = FullBreath.fill(Breath.EXHALE, 0.0)
        close(FullBreath.BELLY_MAX, start.belly); close(1.0, start.chest)
        val mid = FullBreath.fill(Breath.EXHALE, 0.4)
        assertTrue(mid.chest < 0.5 && mid.belly == FullBreath.BELLY_MAX)
        val end = FullBreath.fill(Breath.EXHALE, 1.0)
        close(0.0, end.belly); close(0.0, end.chest)
    }

    @Test
    fun `progress is clamped`() {
        assertEquals(FullBreath.fill(Breath.INHALE, 1.0), FullBreath.fill(Breath.INHALE, 3.0))
    }
}

class PoseMathTest {

    @Test
    fun `shortest delta crosses zero`() {
        close(20.0, PoseMath.shortestDelta(350.0, 10.0))
        close(-20.0, PoseMath.shortestDelta(10.0, 350.0))
        close(-180.0, PoseMath.shortestDelta(0.0, 180.0))
    }

    @Test
    fun `lerp goes the short way and normalizes`() {
        close(0.0, PoseMath.lerpAngle(350.0, 10.0, 0.5))
        close(355.0, PoseMath.lerpAngle(10.0, 340.0, 0.5))
    }

    @Test
    fun `ease keeps endpoints and is symmetric`() {
        close(0.0, PoseMath.easeInOut(0.0))
        close(1.0, PoseMath.easeInOut(1.0))
        close(0.5, PoseMath.easeInOut(0.5))
        close(1.0 - PoseMath.easeInOut(0.2), PoseMath.easeInOut(0.8))
    }

    @Test
    fun `interpolation hits both poses`() {
        val a = Pose(40.0, 66.0, 276.0, 274.0, 186.0, 184.0, 246.0)
        val b = Pose(318.0, 312.0, 316.0, 316.0, 226.0, 226.0, 300.0)
        assertEquals(a.toList(), PoseMath.interpolate(a, b, 0.0).toList())
        PoseMath.interpolate(a, b, 1.0).toList().zip(b.toList()).forEach { (x, y) -> close(y, x, 1e-6) }
        // Корпус идёт от 40° к 318° через 0°, а не через 180°.
        val mid = PoseMath.interpolate(a, b, 0.5, eased = false).torso
        close(359.0, mid, 1e-6)
    }
}

class AdaptationTest {

    private val adaptation = Adaptation()
    private val base = SessionParams(rounds = 6, support = Support.FISTS, enabledSlots = emptyList(), phaseMs = 4_000)
    private val slots = listOf("crow", "plow")

    @Test
    fun `easy adds rounds and harder support`() {
        val n = adaptation.next(base, Feedback.EASY, usedMetalDog = false, availableSlots = slots, injuries = emptySet())
        assertEquals(8, n.rounds)
        assertEquals(Support.PALMS, n.support)
        assertEquals(1, n.easyStreak)
    }

    @Test
    fun `wrist injury keeps fists`() {
        val n = adaptation.next(base, Feedback.EASY, false, slots, setOf(Injury.WRISTS))
        assertEquals(Support.FISTS, n.support)
    }

    @Test
    fun `at max rounds easy opens the next slot`() {
        val n = adaptation.next(base.copy(rounds = 12, enabledSlots = listOf("crow")), Feedback.EASY, false, slots, emptySet())
        assertEquals(12, n.rounds)
        assertEquals(listOf("crow", "plow"), n.enabledSlots)
    }

    @Test
    fun `three easy sessions without metal dog slow the breath`() {
        var p = base
        repeat(3) { p = adaptation.next(p, Feedback.EASY, false, slots, emptySet()) }
        assertEquals(4_500L, p.phaseMs)
        assertEquals(0, p.easyStreak)

        var q = base
        repeat(3) { q = adaptation.next(q, Feedback.EASY, true, slots, emptySet()) }
        assertEquals(4_000L, q.phaseMs)
    }

    @Test
    fun `hard reduces load within limits`() {
        val n = adaptation.next(
            base.copy(rounds = 3, support = Support.FINGERS, enabledSlots = listOf("crow"), phaseMs = 3_200),
            Feedback.HARD, false, slots, emptySet(),
        )
        assertEquals(2, n.rounds)
        assertEquals(emptyList(), n.enabledSlots)
        assertEquals(3_000L, n.phaseMs)
        assertEquals(Support.PALMS, n.support)
    }

    @Test
    fun `ok adds a round every third time`() {
        var p = base
        val rounds = (1..6).map { p = adaptation.next(p, Feedback.OK, false, slots, emptySet()); p.rounds }
        assertEquals(listOf(6, 6, 7, 7, 7, 8), rounds)
    }

    @Test
    fun `problem zones are carried to the next session`() {
        val n = adaptation.next(base, Feedback.OK, false, slots, emptySet(), problemZones = setOf(Joint.WRISTS))
        assertEquals(setOf(Joint.WRISTS), n.easedJoints)
    }
}

class MovementAgeTest {

    /** Тестовые нормы: ожидаемое значение 10 для любого теста, 1 год за единицу. */
    private val flatNorms = object : MovementNorms {
        override fun expected(test: MovementTest, age: Int, sex: Sex) = 10.0
        override fun yearsPerUnit(test: MovementTest) = 1.0
    }
    private val calc = MovementAgeCalculator(flatNorms)

    @Test
    fun `results at norm give chronological age`() {
        val r = calc.calculate(35, Sex.MALE, MovementTest.entries.associateWith { 10.0 })
        assertEquals(35, r.age)
    }

    @Test
    fun `worse results make you older and better younger`() {
        assertEquals(41, calc.calculate(35, Sex.MALE, mapOf(MovementTest.SIT_RISE to 4.0)).age)
        assertEquals(32, calc.calculate(35, Sex.FEMALE, mapOf(MovementTest.BALANCE to 13.0)).age)
    }

    @Test
    fun `single test correction is capped`() {
        val r = calc.calculate(35, Sex.MALE, mapOf(MovementTest.PUSH_UPS to -100.0))
        assertEquals(43, r.age)
        close(8.0, r.perTest.getValue(MovementTest.PUSH_UPS))
    }

    @Test
    fun `result stays within bounds`() {
        val great = MovementTest.entries.associateWith { 100.0 }
        assertEquals(20, calc.calculate(35, Sex.MALE, great).age)
        assertEquals(18, calc.calculate(20, Sex.MALE, great).age)
        val poor = MovementTest.entries.associateWith { -100.0 }
        assertEquals(60, calc.calculate(35, Sex.MALE, poor).age)
    }
}
