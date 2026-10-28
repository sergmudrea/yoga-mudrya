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
        assertEquals("th_sleep", DailyCheck.recommend(c(Energy.LOW), 22).candidates.first())
        assertEquals("ex_sh_tired", DailyCheck.recommend(c(Energy.LOW), 14).candidates.first())
    }

    @Test
    fun `no energising sets in the evening`() {
        val r = DailyCheck.recommend(c(Energy.HIGH), 21)
        assertEquals(Reason.EVENING, r.reason)
    }

    @Test
    fun `every recommendation ends with a set that exists for free users`() {
        val free = setOf("surya", "chandra", "at_sn", "th_back_relief", "th_morning", "bk_mk", "ex_ybreak", "ex_cyp", "pl_base")
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
