package ru.mudrya.yoga.engine

import org.junit.jupiter.api.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class DailyCheckTest {
    private fun c(e: Energy = Energy.MID, m: Mood = Mood.CALM, z: TensionZone = TensionZone.NONE) = CheckIn(100, e, m, z, 20)

    @Test
    fun `a tension zone wins over everything else`() {
        val r = DailyCheck.recommend(c(Energy.HIGH, Mood.TENSE, TensionZone.NECK), 9)
        assertEquals("th_neck", r.candidates.first())
        assertEquals(Reason.NECK, r.reason)
        assertTrue(r.breathFirst)
    }

    @Test
    fun `tired in the evening gets sleep, tired by day gets the gentle set`() {
        assertEquals("hl_sleep", DailyCheck.recommend(c(Energy.LOW), 22).candidates.first())
        assertEquals("ex_sh_tired", DailyCheck.recommend(c(Energy.LOW), 14).candidates.first())
    }

    @Test
    fun `no energising sets in the evening`() {
        val r = DailyCheck.recommend(c(Energy.HIGH), 21)
        assertEquals(Reason.EVENING, r.reason)
    }

    @Test
    fun `every recommendation ends with a set that exists for free users`() {
        // тот же список, что PremiumPolicy.FREE_SETS в приложении
        val free = setOf("at_sn", "at_cn", "wu_seated", "th_back_relief", "th_morning", "ex_ybreak", "pl_base", "hl_sleep")
        for (e in Energy.entries) for (m in Mood.entries) for (z in TensionZone.entries) for (h in 0..23) {
            val r = DailyCheck.recommend(c(e, m, z), h)
            assertTrue(r.candidates.last() in free, "$e $m $z $h -> ${r.candidates}")
        }
    }

    @Test
    fun `one check-in per day, newest kept`() {
        val a = DailyCheck.record(emptyList(), CheckIn(5, Energy.LOW, Mood.CALM, TensionZone.NONE, 10))
        val b = DailyCheck.record(a, CheckIn(5, Energy.HIGH, Mood.CALM, TensionZone.NONE, 10))
        assertEquals(1, b.size)
        assertEquals(Energy.HIGH, DailyCheck.today(b, 5)?.energy)
    }
}

class WisdomTest {
    @org.junit.jupiter.api.Test
    fun `thought of the day cycles and the dosha with most answers wins`() {
        kotlin.test.assertEquals(1, Wisdom.forDay(0))
        kotlin.test.assertEquals(1, Wisdom.forDay(Wisdom.COUNT.toLong()))
        val d = DoshaQuiz.Dosha.entries
        kotlin.test.assertEquals(DoshaQuiz.Dosha.KAPHA, DoshaQuiz.result(listOf(d[2], d[0], d[2], d[1])))
    }
}
