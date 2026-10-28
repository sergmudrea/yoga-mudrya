package ru.mudrya.yoga.engine

import org.junit.jupiter.api.Test
import ru.mudrya.yoga.model.Breath
import ru.mudrya.yoga.model.Contact
import ru.mudrya.yoga.model.FitRule
import ru.mudrya.yoga.model.Pose
import ru.mudrya.yoga.model.PoseParam
import ru.mudrya.yoga.model.Step
import ru.mudrya.yoga.model.Support
import kotlin.math.abs
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class FigureTest {

    private val standing = Pose(90.0, 90.0, 270.0, 270.0, 270.0, 270.0, 0.0)

    @Test
    fun `standing figure stands on the floor with head on top`() {
        val f = FigureGeometry.grounded(standing)
        assertEquals(0.0, f.minY, 1e-9)
        assertTrue(f.head.y > f.shoulder.y && f.shoulder.y > f.hip.y && f.hip.y > f.knee.y)
    }

    @Test
    fun `far limbs default to near limbs`() {
        val f = FigureGeometry.points(standing)
        assertEquals(f.knee, f.knee2)
        assertEquals(f.wrist, f.wrist2)
    }

    @Test
    fun `chest lift tilts the torso`() {
        val a = FigureGeometry.points(standing)
        val b = FigureGeometry.points(standing, chestLift = 10.0)
        assertTrue(b.shoulder.x < a.shoulder.x)
    }

    @Test
    fun `fitter puts hands and feet on the floor in a plank`() {
        val plank = Pose(12.0, 16.0, 272.0, 272.0, 205.0, 205.0, 250.0)
        val rule = FitRule(Contact.HAND, Contact.FOOT, listOf(PoseParam.THIGH, PoseParam.SHIN))
        assertTrue(abs(PoseFitter.gap(plank, rule)) > 3)
        val fitted = PoseFitter.fit(plank, rule)
        assertTrue(abs(PoseFitter.gap(fitted, rule)) < 0.01)
        assertEquals(plank.torso, fitted.torso)
    }

    @Test
    fun `fitter leaves the pose alone when there is no solution`() {
        val rule = FitRule(Contact.HAND, Contact.FOOT, listOf(PoseParam.NECK))
        assertEquals(standing, PoseFitter.fit(standing, rule))
    }

    @Test
    fun `pose with second leg keeps it through interpolation`() {
        val lunge = Pose(95.0, 92.0, 250.0, 10.0, 330.0, 270.0, 0.0, thigh2 = 205.0, shin2 = 205.0, foot2 = 250.0)
        val mid = PoseMath.interpolate(standing, lunge, 1.0)
        assertEquals(205.0, mid.farThigh, 1e-6)
        assertEquals(330.0, mid.thigh, 1e-6)
    }
}

class MultiPhaseTimelineTest {

    private val session = Session(
        sequenceId = "t", rounds = 1, relaxAfterRounds = emptySet(), load = emptyMap(),
        steps = listOf(
            stepOf("a", listOf(Breath.EXHALE), emptyList()),
            stepOf("b", listOf(Breath.EXHALE, Breath.INHALE, Breath.EXHALE), listOf(Breath.INHALE, Breath.EXHALE)),
        ),
    )

    @Test
    fun `movement can span several breaths`() {
        val t = BreathTimeline(session, 1_000)
        assertEquals(6, t.phases.size)
        assertEquals(listOf(0, 1, 1, 1, 1, 1), t.phases.map { it.stepIndex })
        val p = t.positionAt(1_000 + 1_500)
        assertEquals(PhaseKind.ENTER, p.phase.kind)
        assertEquals(0.5, p.movementProgress, 1e-9)
        assertEquals(1.0, t.positionAt(4_500).movementProgress, 1e-9)
        assertEquals(listOf(0, 1), t.stepStartPhase)
    }

    companion object {
        private val P = Pose(90.0, 90.0, 270.0, 270.0, 270.0, 270.0, 0.0)
        fun stepOf(id: String, enter: List<Breath>, hold: List<Breath>) = SessionStep(
            asana = ru.mudrya.yoga.model.Asana(id, id, id, P), side = ru.mudrya.yoga.model.Side.NONE, support = null,
            enter = enter, hold = hold, extraCycles = true, round = 1,
        )
    }
}

class PlayerControllerTest {

    private val session = SessionBuilder(Fixtures.catalog).build(BuildRequest(Fixtures.surya, rounds = 1, support = Support.PALMS))

    @Test
    fun `time moves only when playing`() {
        val p = PlayerController(session, phaseMs = 1_000)
        p.advance(500)
        assertEquals(500, p.frame().elapsedMs)
        p.togglePause(); p.advance(500)
        assertEquals(500, p.frame().elapsedMs)
        p.togglePause(); p.setMetalDog(true); p.advance(500)
        assertEquals(500, p.frame().elapsedMs)
        p.setMetalDog(false); p.advance(500)
        assertEquals(1_000, p.frame().elapsedMs)
    }

    @Test
    fun `next and previous step navigation`() {
        val p = PlayerController(session, phaseMs = 1_000)
        p.nextStep(); p.nextStep()
        assertEquals(2, p.frame().stepIndex)
        p.advance(1_500)
        p.previousStep()
        assertEquals(2, p.frame().stepIndex)
        p.previousStep()
        assertEquals(1, p.frame().stepIndex)
    }

    @Test
    fun `pose interpolates during movement and holds after`() {
        val p = PlayerController(session, phaseMs = 1_000)
        p.goToStep(1)
        p.advance(500)
        val f = p.frame()
        assertEquals(PhaseKind.ENTER, f.phase.kind)
        assertTrue(f.pose != f.step.asana.pose)
        p.advance(1_000)
        assertEquals(f.step.asana.pose, p.frame().pose)
    }

    @Test
    fun `tempo change keeps position and finish is reported`() {
        val p = PlayerController(session, phaseMs = 1_000)
        p.goToStep(5)
        val before = p.frame().stepIndex
        p.setTempo(2_000, 0.75)
        assertEquals(before, p.frame().stepIndex)
        assertFalse(p.frame().finished)
        p.advance(Long.MAX_VALUE / 2)
        assertTrue(p.frame().finished)
    }
}
