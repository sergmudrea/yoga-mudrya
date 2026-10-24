package ru.mudrya.yoga.store

import org.junit.jupiter.api.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class PremiumPolicyTest {

    @Test
    fun `surya is always free, other sets need premium`() {
        assertFalse(PremiumPolicy.isLocked("surya", premium = false))
        assertTrue(PremiumPolicy.isLocked("chandra", premium = false))
        assertTrue(PremiumPolicy.isLocked("surya_chandra", premium = false))
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
