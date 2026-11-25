package ru.mudrya.yoga.engine

/**
 * Предварительные возрастные нормы для теста возраста движения.
 * Значение для возраста — линейная интерполяция между опорными точками.
 *
 * Источники (сверить с инструктором до релиза):
 * - BALANCE: Springer et al., J Geriatr Phys Ther 2007 — стойка на одной ноге с закрытыми глазами,
 *   среднее из трёх попыток: 18–39 ≈ 9 с, 40–49 ≈ 7 с, 50–59 ≈ 5 с, 60–69 ≈ 3 с, 70–79 ≈ 2 с.
 *   Разницы между полами нет.
 * - PUSH_UPS: таблицы ACSM, середина категории «средне». Женщины — классические отжимания с носков.
 * - SIT_RISE: Araújo et al., Eur J Prev Cardiol 2012/2020 — 10 баллов типичны до 25–40 лет,
 *   около 59 лет 8–10, около 71 года 0–3. Точки ниже — приближение медианы, уточнить по таблицам статьи.
 * - FORWARD_FOLD и HR_RECOVERY: ориентиры (снижение пульса ≤ 12 уд/мин — плохой признак, Cole 1999).
 *   Это самые грубые нормы, у них малый вес.
 */
object ProvisionalNorms : MovementNorms {

    private data class Curve(val points: List<Pair<Int, Double>>) {
        fun at(age: Int): Double {
            if (age <= points.first().first) return points.first().second
            if (age >= points.last().first) return points.last().second
            val i = points.indexOfFirst { it.first >= age }
            val (a0, v0) = points[i - 1]
            val (a1, v1) = points[i]
            return v0 + (v1 - v0) * (age - a0).toDouble() / (a1 - a0)
        }
    }

    private val balance = Curve(listOf(25 to 9.0, 45 to 7.0, 55 to 5.0, 65 to 3.0, 75 to 2.0, 85 to 1.4))

    private val sitRise = Curve(listOf(25 to 9.5, 40 to 9.0, 50 to 8.0, 60 to 6.5, 70 to 4.0, 80 to 2.5))

    private val pushUpsMale = Curve(listOf(18 to 32.0, 25 to 26.5, 35 to 22.0, 45 to 18.0, 55 to 15.0, 65 to 13.5))
    private val pushUpsFemale = Curve(listOf(18 to 19.0, 25 to 19.5, 35 to 17.5, 45 to 13.5, 55 to 11.5, 65 to 8.0))

    private val foldMale = Curve(listOf(20 to 3.0, 40 to 0.0, 60 to -4.0, 80 to -8.0))
    private val foldFemale = Curve(listOf(20 to 7.0, 40 to 4.0, 60 to 0.0, 80 to -4.0))

    private val hrRecovery = Curve(listOf(20 to 30.0, 40 to 26.0, 60 to 21.0, 80 to 17.0))

    override fun expected(test: MovementTest, age: Int, sex: Sex): Double = when (test) {
        MovementTest.SIT_RISE -> sitRise.at(age)
        MovementTest.FORWARD_FOLD -> if (sex == Sex.MALE) foldMale.at(age) else foldFemale.at(age)
        MovementTest.BALANCE -> balance.at(age)
        MovementTest.PUSH_UPS -> if (sex == Sex.MALE) pushUpsMale.at(age) else pushUpsFemale.at(age)
        MovementTest.HR_RECOVERY -> hrRecovery.at(age)
    }

    /** Сколько лет возраста движения стоит единица отклонения (наклон кривой нормы). */
    override fun yearsPerUnit(test: MovementTest): Double = when (test) {
        MovementTest.SIT_RISE -> 6.0
        MovementTest.FORWARD_FOLD -> 2.0
        MovementTest.BALANCE -> 4.0
        MovementTest.PUSH_UPS -> 2.5
        MovementTest.HR_RECOVERY -> 0.8
    }
}
