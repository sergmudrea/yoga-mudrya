package ru.mudrya.yoga.store

/**
 * Что бесплатно, а что по подписке. Бесплатное ядро не урезается в обновлениях:
 * Солнечное и Лунное кольца книги, классическое приветствие солнцу (Сурья Намаскар),
 * библиотека асан для просмотра и конструктора, тест возраста движения и анкета здоровья,
 * прогресс, напоминания, вывод на ТВ. Свои сеты — 5 бесплатных запусков (см. CustomSets).
 */
object PremiumPolicy {
    /** Кольца книги и классическая Сурья Намаскар — бесплатно всегда. */
    val FREE_SETS = setOf("surya", "chandra", "at_sn", "th_back_relief", "th_morning", "bk_mk", "ex_ybreak", "ex_cyp", "pl_base")

    /** Свои сеты не закрываются целиком: их запуски считает конструктор. */
    fun isLocked(setId: String, premium: Boolean): Boolean =
        !premium && setId !in FREE_SETS && !ru.mudrya.yoga.engine.CustomSets.isCustom(setId)

    /** Когда напомнить о конце пробного периода: за 48 часов до первого списания. */
    fun trialReminderAt(purchaseEpochMs: Long, trialDays: Int): Long? =
        if (trialDays <= 2) null else purchaseEpochMs + (trialDays * 24L - 48) * HOUR_MS

    /** Дата первого списания после пробного периода. */
    fun firstChargeAt(purchaseEpochMs: Long, trialDays: Int): Long = purchaseEpochMs + trialDays * 24L * HOUR_MS

    private const val HOUR_MS = 3_600_000L
}
