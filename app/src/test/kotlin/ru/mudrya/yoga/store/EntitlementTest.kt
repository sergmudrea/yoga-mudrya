package ru.mudrya.yoga.store

import org.junit.jupiter.api.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class EntitlementTest {

    @Test
    fun `premium status by entitlement type`() {
        val now = 1_000L
        assertFalse(Entitlement.Free.isPremium(now))
        assertTrue(Entitlement.Trial(untilEpochMs = 2_000).isPremium(now))
        assertFalse(Entitlement.Trial(untilEpochMs = 500).isPremium(now))
        assertTrue(Entitlement.Premium(renewsAtEpochMs = null).isPremium(now))
        assertFalse(Entitlement.Premium(renewsAtEpochMs = 999).isPremium(now))
        assertTrue(Entitlement.Lifetime.isPremium(now))
    }

    @Test
    fun `fake billing grants trial for subscriptions and lifetime for one-time`() {
        val billing = FakeBillingGateway(manageUrl = "https://example.invalid", clock = { 0L })
        assertEquals(Entitlement.Trial(FakeBillingGateway.TRIAL_MS), billing.grant(ProductIds.YEARLY))
        assertEquals(Entitlement.Lifetime, billing.grant(ProductIds.LIFETIME))
        assertEquals(Entitlement.Lifetime, billing.entitlement.value)
        assertNull(billing.grant("unknown"))
    }
}
