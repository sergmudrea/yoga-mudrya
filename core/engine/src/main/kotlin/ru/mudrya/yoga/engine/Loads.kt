package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Asana
import ru.mudrya.yoga.model.Joint
import ru.mudrya.yoga.model.Pose
import kotlin.math.abs
import kotlin.math.max

/** Чем фигура касается пола. По этому набору ищется похожая поза на замену. */
enum class Base { STANDING, HANDS_AND_FEET, KNEELING, SEATED, LYING, INVERTED, ARM_BALANCE }

/** Результат разбора позы: нагрузка 0..3 на каждый сустав, перевёрнутость, опора. */
data class LoadProfile(val load: Map<Joint, Int>, val inversion: Boolean, val base: Base)

/**
 * Где и как в позе возникает нагрузка — по геометрии фигуры, без ручной разметки.
 *
 * Правила (нагрузка 0..3):
 * - запястья: кисти на полу и держат вес; упор с ногами — 2, баланс на руках — 3, опора на предплечья — 1;
 * - плечи: вес на руках при поднятых над головой руках (горка) — 2, баланс на руках — 3, руки в замке за спиной
 *   с подъёмом вверх — 2, стойка на плечах — 2;
 * - шея: стойка на голове — 3, стойка на плечах и плуг — 3, сильное запрокидывание головы — 1–2;
 * - поясница: прогиб (разгибание корпуса относительно таза и бёдер) — 1–3, глубокий наклон с опорой — 1;
 * - колени: опора на колено — 1, глубокое сгибание — 2, глубокое сгибание в виде спереди (лотос, лягушка) — 3.
 */
object LoadAnalyzer {

    /** Точка «на полу», если ниже этой высоты: у лежащего тела линия корпуса — на высоте радиуса головы. */
    private const val FLOOR = 13.0

    /** Угол b − a в диапазоне −180..180. */
    private fun d(a: Double, b: Double): Double = PoseMath.shortestDelta(a, b)

    /**
     * Куда смотрит фигура: +1 — вправо, −1 — влево. В атласе часть поз нарисована зеркально,
     * поэтому направление определяем по сгибу колена (голень уходит назад) или по стопе (носок вперёд).
     */
    fun facing(p: Pose): Int {
        if (p.front > 0.5) return 1
        val k1 = d(p.thigh, p.shin)
        val k2 = d(p.farThigh, p.farShin)
        val knee = if (abs(k1) >= abs(k2)) k1 else k2
        if (abs(knee) > 20) return if (knee < 0) 1 else -1
        val foot = d(p.shin, p.foot)
        if (abs(foot) > 45) return if (foot > 0) 1 else -1
        return 1
    }

    fun analyze(p: Pose): LoadProfile {
        val f = FigureGeometry.grounded(p)
        val s = facing(p).toDouble()
        fun onFloor(pt: Pt) = pt.y < FLOOR
        val handDown = onFloor(f.wrist) || onFloor(f.wrist2)
        val forearmDown = (onFloor(f.wrist) && onFloor(f.elbow)) || (onFloor(f.wrist2) && onFloor(f.elbow2))
        val footDown = onFloor(f.ankle) || onFloor(f.toe) || onFloor(f.ankle2) || onFloor(f.toe2)
        val kneeDown = onFloor(f.knee) || onFloor(f.knee2)
        val headDown = f.head.y - f.headRadius < FLOOR
        val shoulderDown = onFloor(f.shoulder)
        val hipDown = onFloor(f.hip)
        val hipHigh = f.hip.y
        val inverted = (headDown || shoulderDown) && hipHigh > f.shoulder.y + 20 && !footDown

        val base = when {
            inverted -> Base.INVERTED
            handDown && !footDown && !kneeDown && !hipDown && !shoulderDown -> Base.ARM_BALANCE
            hipDown && (f.shoulder.y > 25) -> Base.SEATED
            hipDown || shoulderDown -> Base.LYING
            kneeDown -> Base.KNEELING
            handDown && footDown -> Base.HANDS_AND_FEET
            else -> Base.STANDING
        }

        val load = mutableMapOf<Joint, Int>()

        // Запястья.
        // Кисти держат вес, только если плечи подняты над полом.
        val weightOnHands = handDown && !forearmDown && (f.shoulder.y > 20)
        // Колено держит вес, когда таз поднят (стоя на коленях, на четвереньках), а не лёжа.
        val kneeBearing = kneeDown && f.hip.y > 25
        load[Joint.WRISTS] = when {
            base == Base.ARM_BALANCE -> 3
            // Сидя кисти на полу лишь придерживают — вес на тазе.
            weightOnHands && hipDown -> 1
            weightOnHands && (footDown || kneeDown) -> 2
            forearmDown && f.shoulder.y > 15 -> 1
            weightOnHands -> 1
            else -> 0
        }

        // Плечи: угол между плечом и корпусом (направлением грудного отдела).
        val armOverhead = max(abs(d(p.chest, p.upperArm)), abs(d(p.chest, p.farUpperArm)))
        load[Joint.SHOULDERS] = when {
            base == Base.ARM_BALANCE -> 3
            inverted && shoulderDown -> 2
            weightOnHands && hipDown -> 0
            weightOnHands && armOverhead < 45 -> 2
            weightOnHands -> 1
            else -> 0
        }

        // Шея.
        val neckExt = s * d(p.chest, p.neck) // плюс — голова запрокинута назад относительно груди
        load[Joint.NECK] = when {
            inverted && headDown && !forearmDown -> 3
            inverted && headDown -> 3
            inverted && shoulderDown -> 3
            neckExt > 60 -> 2
            neckExt > 35 -> 1
            else -> 0
        }

        // Поясница: разгибание грудного отдела относительно нижней части и таза относительно бёдер.
        val spineExt = s * d(p.torso, p.chest)
        // В виде спереди бёдра разведены в стороны — разгибание таза по ним не считаем.
        val hipExt = if (p.front > 0.5) 0.0 else max(s * d(p.thigh + 180, p.torso), s * d(p.farThigh + 180, p.torso))
        val backbend = spineExt + max(0.0, hipExt)
        val deepFold = -spineExt - max(0.0, -hipExt) * 0.3
        load[Joint.LUMBAR] = when {
            backbend > 75 -> 3
            backbend > 40 -> 2
            backbend > 20 -> 1
            deepFold > 120 && footDown -> 1
            else -> 0
        }

        // Колени: сгибание = угол между бедром и голенью.
        val flex = max(abs(d(p.thigh, p.shin)), abs(d(p.farThigh, p.farShin)))
        load[Joint.KNEES] = when {
            p.front > 0.5 && flex > 120 -> 3
            flex > 135 && (kneeBearing || hipDown || footDown) -> 2
            kneeBearing -> 1
            flex > 100 && footDown && !hipDown -> 1
            else -> 0
        }

        return LoadProfile(load.filterValues { it > 0 }, inverted, base)
    }

    /** Насколько две позы похожи: средняя разница основных углов, градусы. */
    fun distance(a: Pose, b: Pose): Double {
        val pairs = listOf(
            a.torso to b.torso, a.chest to b.chest, a.neck to b.neck,
            a.thigh to b.thigh, a.shin to b.shin, a.farThigh to b.farThigh, a.farShin to b.farShin,
            a.upperArm to b.upperArm, a.foreArm to b.foreArm, a.farUpperArm to b.farUpperArm, a.farForeArm to b.farForeArm,
        )
        val weights = listOf(3.0, 2.0, 1.0, 2.0, 1.5, 2.0, 1.5, 1.0, 0.5, 1.0, 0.5)
        return pairs.zip(weights).sumOf { (pr, w) -> abs(d(pr.first, pr.second)) * w } / weights.sum()
    }
}

/**
 * Подбор замен: для каждой асаны и каждого сустава с нагрузкой ≥ [threshold] — самая похожая асана
 * из любого сета, где этот сустав нагружен не больше 1. Сначала ищем позу с той же опорой.
 */
object Substitutions {

    /** Градусов «похожести» за каждую единицу нагрузки у кандидата. */
    private const val LOAD_PENALTY = 6.0

    fun build(asanas: Collection<Asana>, profiles: Map<String, LoadProfile>, threshold: Int = 2): Map<String, Map<Joint, String>> {
        val result = mutableMapOf<String, Map<Joint, String>>()
        asanas.forEach { a ->
            val prof = profiles.getValue(a.id)
            val perJoint = mutableMapOf<Joint, String>()
            Joint.entries.forEach { j ->
                if ((a.load[j] ?: 0) >= threshold) {
                    pick(a, j, asanas, profiles)?.let { perJoint[j] = it }
                }
            }
            if (prof.inversion) {
                pick(a, Joint.NECK, asanas, profiles)?.let { perJoint.putIfAbsent(Joint.NECK, it) }
            }
            if (perJoint.isNotEmpty()) result[a.id] = perJoint
        }
        return result
    }

    private fun pick(
        a: Asana,
        j: Joint,
        all: Collection<Asana>,
        profiles: Map<String, LoadProfile>,
    ): String? {
        val base = profiles.getValue(a.id).base
        val ok = all.filter { c ->
            c.id != a.id && (c.load[j] ?: 0) <= 1 &&
                // Перевёрнутая поза никогда не становится заменой.
                !profiles.getValue(c.id).inversion &&
                // Замена не должна сильнее нагружать другие суставы.
                Joint.entries.all { o -> o == j || (c.load[o] ?: 0) <= max(1, a.load[o] ?: 0) }
        }
        val sameBase = ok.filter { profiles.getValue(it.id).base == base }
        val pool = sameBase.ifEmpty { ok }
        // Похожесть позы важнее всего, но при равенстве берём ту, что легче для всего тела.
        return pool.minByOrNull { LoadAnalyzer.distance(a.pose, it.pose) + LOAD_PENALTY * it.load.values.sum() }?.id
    }
}
