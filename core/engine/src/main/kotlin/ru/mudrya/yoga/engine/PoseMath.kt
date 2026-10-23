package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Pose
import kotlin.math.pow

/** Интерполяция поз для плавных переходов модели. */
object PoseMath {

    /** Нормализует угол в диапазон [0, 360). */
    fun normalize(deg: Double): Double {
        val r = deg % 360.0
        return if (r < 0) r + 360.0 else r
    }

    /** Кратчайшая разница b − a по окружности, в диапазоне [-180, 180). */
    fun shortestDelta(a: Double, b: Double): Double {
        val d = normalize(b - a)
        return if (d >= 180.0) d - 360.0 else d
    }

    fun lerpAngle(a: Double, b: Double, t: Double): Double = normalize(a + shortestDelta(a, b) * t)

    /** Плавный старт и плавная остановка. */
    fun easeInOut(t: Double): Double {
        val x = t.coerceIn(0.0, 1.0)
        return if (x < 0.5) 2 * x * x else 1 - (-2 * x + 2).pow(2) / 2
    }

    /** Все 12 углов ведутся по кратчайшему пути; вторые рука и нога — тоже. */
    fun interpolate(from: Pose, to: Pose, t: Double, eased: Boolean = true): Pose {
        val k = if (eased) easeInOut(t) else t.coerceIn(0.0, 1.0)
        return Pose.fromList(from.toList().zip(to.toList()) { a, b -> lerpAngle(a, b, k) })
    }
}
