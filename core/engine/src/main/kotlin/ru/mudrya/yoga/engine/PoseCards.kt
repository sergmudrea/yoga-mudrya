package ru.mudrya.yoga.engine

/**
 * Карточки поз: как войти, польза, на что обратить внимание, как облегчить, совет, кому нельзя.
 * Тексты — assets/cards/<язык>.json (собирает tools/cards/build_cards.py по книгам Б. К. С. Айенгара,
 * «Maran Illustrated Yoga» и др.); здесь — какая асана к какой карточке относится.
 * Зеркальная сторона (_m) показывает ту же карточку.
 */
object PoseCards {
    val FIELDS = listOf("steps", "works", "watch", "easier", "tip", "avoid")

    fun cardFor(asanaId: String): String? = PoseCardsData.byAsana[asanaId.removeSuffix("_m")]

    val cards: Set<String> get() = PoseCardsData.byAsana.values.toSet()

    /** Сколько асан показывают карточку. */
    val asanaCount: Int get() = PoseCardsData.byAsana.size
}
