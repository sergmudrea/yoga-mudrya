package ru.mudrya.yoga.engine

import org.junit.jupiter.api.Test
import ru.mudrya.yoga.model.Pose
import kotlin.test.assertEquals

class PoseSideTest {

    // Выпад: правая (ближняя) нога впереди, левая (дальняя) сзади.
    private val lunge = Pose(90.0, 90.0, 270.0, 270.0, 0.0, 270.0, 0.0, 268.0, 268.0, 220.0, 180.0, 180.0, 90.0)

    @Test
    fun `other side swaps right and left limbs in side view`() {
        val o = lunge.otherSide()
        assertEquals(lunge.farThigh, o.thigh)
        assertEquals(lunge.thigh, o.farThigh)
        assertEquals(lunge.farUpperArm, o.upperArm)
        assertEquals(lunge.torso, o.torso)
        val f = FigureGeometry.grounded(o)
        val g = FigureGeometry.grounded(lunge)
        assertEquals(g.knee2.x, f.knee.x, 1e-9)
    }

    @Test
    fun `other side twice gives the same pose`() {
        val wide = lunge.copy(front = 1.0, torso = 80.0, upperTorso = 75.0)
        val back = wide.otherSide().otherSide()
        wide.toList().zip(back.toList()).forEach { (a, b) -> assertEquals(a, b, 1e-9) }
    }

    @Test
    fun `front view other side is a mirror image`() {
        val bend = Pose(80.0, 80.0, 100.0, 100.0, 275.0, 275.0, 0.0, 265.0, 265.0, 180.0, 260.0, 260.0, 75.0, front = 1.0)
        val a = FigureGeometry.points(bend)
        val b = FigureGeometry.points(bend.otherSide())
        assertEquals(-a.head.x, b.head.x, 1e-9)
        assertEquals(-a.wrist.x, b.wrist2.x, 1e-9)
        assertEquals(a.wrist.y, b.wrist2.y, 1e-9)
    }
}
