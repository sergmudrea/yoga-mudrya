package ru.mudrya.yoga.store

/**
 * Что бесплатно, а что по подписке. Бесплатное ядро не урезается в обновлениях:
 * классические Сурья Намаскар и Чандра Намаскар, разминка сидя, несколько вводных сетов,
 * библиотека асан для просмотра и конструктора, тест возраста движения и анкета здоровья,
 * прогресс, напоминания, вывод на ТВ. Свои сеты — 5 бесплатных запусков (см. CustomSets).
 */
object PremiumPolicy {
    /** Классические Сурья и Чандра Намаскар и вводные сеты — бесплатно; кольца книги Сидерского — в премиуме. */
    val FREE_SETS = setOf("at_sn", "at_cn", "wu_seated", "th_back_relief", "th_morning", "ex_ybreak", "pl_base", "hl_sleep")

    /** Чем заменить кольцо книги в плане «Путь 8 недель», если премиума нет: классическим приветствием. */
    fun pathSet(ringId: String, premium: Boolean): String =
        if (!isLocked(ringId, premium)) ringId else if (ringId == "chandra") "at_cn" else "at_sn"

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
