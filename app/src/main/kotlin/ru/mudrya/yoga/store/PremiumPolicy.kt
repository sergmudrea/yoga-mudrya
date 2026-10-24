package ru.mudrya.yoga.store

/**
 * Что бесплатно, а что по подписке. Бесплатное ядро не урезается в обновлениях:
 * полная Сурья Намаскар, тест возраста движения, прогресс, напоминания, вывод на ТВ.
 */
object PremiumPolicy {
    /** Классическая Сурья Намаскар и Солнечное кольцо книги — бесплатно всегда. */
    val FREE_SETS = setOf("surya", "at_sn")

    fun isLocked(setId: String, premium: Boolean): Boolean = !premium && setId !in FREE_SETS

    /** Когда напомнить о конце пробного периода: за 48 часов до первого списания. */
    fun trialReminderAt(purchaseEpochMs: Long, trialDays: Int): Long? =
        if (trialDays <= 2) null else purchaseEpochMs + (trialDays * 24L - 48) * HOUR_MS

    /** Дата первого списания после пробного периода. */
    fun firstChargeAt(purchaseEpochMs: Long, trialDays: Int): Long = purchaseEpochMs + trialDays * 24L * HOUR_MS

    private const val HOUR_MS = 3_600_000L
}
