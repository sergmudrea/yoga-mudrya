package ru.mudrya.yoga.store

import org.junit.jupiter.api.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class PremiumPolicyTest {

    @Test
    fun `classic surya and chandra namaskar are free, book rings and other sets need premium`() {
        assertTrue(PremiumPolicy.isLocked("surya", premium = false))
        assertTrue(PremiumPolicy.isLocked("chandra", premium = false))
        assertTrue(PremiumPolicy.isLocked("bk_mk", premium = false))
        assertTrue(PremiumPolicy.isLocked("ex_cyp", premium = false))
        assertFalse(PremiumPolicy.isLocked("at_cn", premium = false))
        assertFalse(PremiumPolicy.isLocked("wu_seated", premium = false))
        assertEquals("at_sn", PremiumPolicy.pathSet("surya", premium = false))
        assertEquals("at_cn", PremiumPolicy.pathSet("chandra", premium = false))
        assertEquals("chandra", PremiumPolicy.pathSet("chandra", premium = true))
        assertFalse(PremiumPolicy.isLocked("my_abc", premium = false))
        assertTrue(PremiumPolicy.isLocked("lib0", premium = false))
        assertFalse(PremiumPolicy.isLocked("at_sn", premium = false))
        assertTrue(PremiumPolicy.isLocked("at_ss1", premium = false))
        assertFalse(PremiumPolicy.isLocked("chandra", premium = true))
    }

    @Test
    fun `trial reminder comes two days before the first charge`() {
        val day = 24L * 3_600_000
        assertEquals(5 * day, PremiumPolicy.trialReminderAt(0, 7))
        assertEquals(7 * day, PremiumPolicy.firstChargeAt(0, 7))
        assertNull(PremiumPolicy.trialReminderAt(0, 0))
    }
}
