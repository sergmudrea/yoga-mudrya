package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Contact
import ru.mudrya.yoga.model.FitRule
import ru.mudrya.yoga.model.Pose
import kotlin.math.cos
import kotlin.math.sin

/** Точка в системе координат фигуры: x — вперёд, y — вверх. */
data class Pt(val x: Double, val y: Double) {
    operator fun plus(o: Pt) = Pt(x + o.x, y + o.y)
}

/** Длины сегментов схематичной фигуры в условных единицах. */
data class BodyProportions(
    val torso: Double = 52.0,
    val neck: Double = 7.0,
    val head: Double = 9.0,
    val upperArm: Double = 26.0,
    val foreArm: Double = 24.0,
    val thigh: Double = 44.0,
    val shin: Double = 42.0,
    val foot: Double = 11.0,
)

/** Все суставы фигуры для отрисовки. «2» — дальние рука и нога. */
data class FigurePoints(
    val hip: Pt, val shoulder: Pt, val neck: Pt, val head: Pt,
    val elbow: Pt, val wrist: Pt, val elbow2: Pt, val wrist2: Pt,
    val knee: Pt, val ankle: Pt, val toe: Pt, val knee2: Pt, val ankle2: Pt, val toe2: Pt,
    val headRadius: Double,
) {
    fun all(): List<Pt> = listOf(hip, shoulder, neck, elbow, wrist, elbow2, wrist2, knee, ankle, toe, knee2, ankle2, toe2) +
        listOf(Pt(head.x, head.y - headRadius), Pt(head.x - headRadius, head.y), Pt(head.x + headRadius, head.y), Pt(head.x, head.y + headRadius))

    fun map(f: (Pt) -> Pt): FigurePoints = FigurePoints(
        f(hip), f(shoulder), f(neck), f(head), f(elbow), f(wrist), f(elbow2), f(wrist2),
        f(knee), f(ankle), f(toe), f(knee2), f(ankle2), f(toe2), headRadius,
    )

    /** Самая низкая точка тела. */
    val minY: Double get() = all().minOf { it.y }
}

object FigureGeometry {

    private fun dir(deg: Double): Pt {
        val r = Math.toRadians(deg)
        return Pt(cos(r), sin(r))
    }

    private fun Pt.go(deg: Double, len: Double): Pt {
        val d = dir(deg)
        return Pt(x + d.x * len, y + d.y * len)
    }

    /**
     * Суставы в координатах фигуры с тазом в начале координат.
     * [chestLift] — небольшой подъём корпуса на вдохе (градусы).
     */
    fun points(p: Pose, body: BodyProportions = BodyProportions(), chestLift: Double = 0.0): FigurePoints {
        val hip = Pt(0.0, 0.0)
        val sh = hip.go(p.torso + chestLift, body.torso)
        val neck = sh.go(p.neck, body.neck)
        val head = neck.go(p.neck, body.head)
        val el = sh.go(p.upperArm, body.upperArm)
        val wr = el.go(p.foreArm, body.foreArm)
        val el2 = sh.go(p.farUpperArm, body.upperArm)
        val wr2 = el2.go(p.farForeArm, body.foreArm)
        val kn = hip.go(p.thigh, body.thigh)
        val an = kn.go(p.shin, body.shin)
        val toe = an.go(p.foot, body.foot)
        val kn2 = hip.go(p.farThigh, body.thigh)
        val an2 = kn2.go(p.farShin, body.shin)
        val toe2 = an2.go(p.farFoot, body.foot)
        return FigurePoints(hip, sh, neck, head, el, wr, el2, wr2, kn, an, toe, kn2, an2, toe2, body.head)
    }

    /** Те же суставы, поставленные на пол: самая низкая точка — y = 0, по горизонтали — центр по габариту. */
    fun grounded(p: Pose, body: BodyProportions = BodyProportions(), chestLift: Double = 0.0): FigurePoints {
        val raw = points(p, body, chestLift)
        val all = raw.all()
        val minY = all.minOf { it.y }
        val midX = (all.minOf { it.x } + all.maxOf { it.x }) / 2
        return raw.map { Pt(it.x - midX, it.y - minY) }
    }

    fun contactY(f: FigurePoints, c: Contact): Double = when (c) {
        Contact.HAND -> minOf(f.wrist.y, f.wrist2.y)
        Contact.FOOT -> minOf(f.ankle.y, f.toe.y)
        Contact.FOOT2 -> minOf(f.ankle2.y, f.toe2.y)
        Contact.KNEE2 -> f.knee2.y
    }
}

/**
 * Подгонка позы под пропорции модели. Автор задаёт позу приблизительно, а подгонка
 * сдвигает выбранные углы так, чтобы обе опоры одновременно стояли на полу.
 */
object PoseFitter {

    fun gap(p: Pose, rule: FitRule, body: BodyProportions = BodyProportions()): Double {
        val f = FigureGeometry.points(p, body)
        return FigureGeometry.contactY(f, rule.a) - FigureGeometry.contactY(f, rule.b)
    }

    /** Возвращает подогнанную позу или исходную, если в диапазоне ±[range] решения нет. */
    fun fit(p: Pose, rule: FitRule, body: BodyProportions = BodyProportions(), range: Double = 45.0): Pose {
        fun at(delta: Double) = p.with(rule.vary.associateWith { p.get(it) + delta })
        var lo = -range
        var hi = range
        val fLo = gap(at(lo), rule, body)
        val fHi = gap(at(hi), rule, body)
        if (fLo == 0.0) return at(lo)
        if (fHi == 0.0) return at(hi)
        if ((fLo > 0) == (fHi > 0)) return p
        repeat(50) {
            val mid = (lo + hi) / 2
            val fm = gap(at(mid), rule, body)
            if ((fm > 0) == (fLo > 0)) lo = mid else hi = mid
        }
        return at((lo + hi) / 2)
    }
}
