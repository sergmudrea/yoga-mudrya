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

    /** Одинаковые позы атласа и библиотеки: снимается одна, ролик идёт в обе. */
    val ALIASES: Map<String, String> = mapOf(
        "lb_B270" to "at_edog",
        "lb_B1223" to "at_ustra",
        "lb_B1510" to "at_sarp",
        "lb_B1159" to "at_chat",
        "at_shavaring" to "at_shava",
        "at_padah" to "at_padahasta",
        "at_hastaut" to "at_polu",
        "at_shishu" to "lb_B1068",
        "lb_B720" to "at_bhadralock",
        "lb_B779" to "at_pasch",
    )

    /** Ролик для асаны, если он есть среди [available] (набор слотов с роликами); иначе — ролик позы-двойника. */
    fun resolve(asanaId: String, available: Set<String>): ClipRef? {
        direct(asanaId, available)?.let { return it }
        val alias = ALIASES[slotOf(asanaId)] ?: return null
        return direct(if (asanaId.endsWith(MIRROR)) alias + MIRROR else alias, available)
    }

    private fun direct(asanaId: String, available: Set<String>): ClipRef? {
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
