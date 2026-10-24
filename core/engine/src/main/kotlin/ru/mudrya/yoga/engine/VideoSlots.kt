package ru.mudrya.yoga.engine

/** Какой ролик показать для позы и нужно ли отразить его по горизонтали. */
data class ClipRef(val slot: String, val mirrored: Boolean)

/**
 * Слоты для видео инструктора. Слот — асана; зеркальная поза (id с «_m») использует ролик
 * своей пары, отражённый по горизонтали, поэтому левую сторону снимать не нужно.
 */
object VideoSlots {

    private const val MIRROR = "_m"

    /** Слот, в который кладётся ролик для этой асаны: у зеркальной — слот пары. */
    fun slotOf(asanaId: String): String = asanaId.removeSuffix(MIRROR)

    /** Ролик для асаны, если он есть среди [available] (набор слотов с роликами). */
    fun resolve(asanaId: String, available: Set<String>): ClipRef? {
        if (asanaId in available) return ClipRef(asanaId, mirrored = false)
        val pair = if (asanaId.endsWith(MIRROR)) asanaId.removeSuffix(MIRROR) else asanaId + MIRROR
        return if (pair in available) ClipRef(pair, mirrored = true) else null
    }

    /** Слоты сессии по порядку появления, без повторов. */
    fun slots(session: Session): List<String> = session.steps.map { slotOf(it.asana.id) }.distinct()

    /** Доля шагов сессии, для которых есть ролик (0..1). */
    fun coverage(session: Session, available: Set<String>): Double {
        if (session.steps.isEmpty()) return 0.0
        return session.steps.count { resolve(it.asana.id, available) != null }.toDouble() / session.steps.size
    }
}
