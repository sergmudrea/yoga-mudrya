package ru.mudrya.yoga.engine

/**
 * Карточки поз: «что работает», «на что обратить внимание», «как упростить», «кому нельзя».
 * Тексты — ресурсы приложения card_<карточка>_<поле>; здесь — какие асаны к какой карточке относятся.
 * Зеркальная сторона (_m) показывает ту же карточку.
 */
object PoseCards {
    val FIELDS = listOf("works", "watch", "easier", "avoid")

    private val byAsana: Map<String, String> = mapOf(
        "at_shava" to "shava",
        "at_tad" to "tad",
        "lb_B5" to "armsup",
        "at_vdoh" to "armsup",
        "at_polu" to "armsup",
        "at_uttan" to "uttan",
        "at_padah" to "uttan",
        "at_padahasta" to "uttan",
        "at_pnak" to "uttan",
        "at_edog" to "edog",
        "at_deepdog" to "edog",
        "lb_B270" to "edog",
        "lb_B1129" to "plank",
        "at_plank" to "plank",
        "at_chat" to "chat",
        "at_ppchat" to "chat",
        "lb_B1159" to "chat",
        "at_updog" to "updog",
        "lb_B1510" to "cobra",
        "at_sarp" to "cobra",
        "lb_B1487" to "locust",
        "at_shalabha" to "locust",
        "lb_B1068" to "child",
        "lb_B1067" to "child",
        "lb_B1072" to "child",
        "at_cat" to "cat",
        "at_antcat" to "cat",
        "lb_B642" to "easy",
        "lb_B637" to "easy",
        "at_vira" to "hero",
        "lb_B775" to "staff",
        "at_danda" to "staff",
        "at_pasch" to "pasch",
        "lb_B781" to "pasch",
        "lb_B780" to "pasch",
        "lb_B853" to "headknee",
        "lb_B855" to "headknee",
        "lb_B720" to "bound",
        "at_bhadra" to "bound",
        "lb_B1750" to "reclbound",
        "lb_B1761" to "reclbound",
        "lb_B784" to "twist",
        "lb_B709" to "twist",
        "lb_B887" to "twist",
        "lb_B700" to "twist",
        "lb_B1773" to "supinetwist",
        "lb_B1813" to "supinetwist",
        "lb_B1703" to "bridge",
        "at_bridge" to "bridge",
        "lb_B1772" to "kneeschest",
        "at_legs90" to "legsup",
        "at_sarvanga" to "shoulderstand",
        "at_hala" to "plough",
        "lb_B308" to "triangle",
        "lb_B316" to "sideangle",
        "lb_B317" to "warrior",
        "lb_B342" to "warrior",
        "lb_B93" to "tree",
        "lb_B132" to "halfmoon",
        "at_prasarita" to "wide",
        "lb_B250" to "wide",
        "lb_B251" to "wide",
        "lb_B1223" to "camel",
        "at_ustra" to "camel",
        "lb_B943" to "cowface",
        "at_padma" to "lotus",
        "lb_B1007" to "boat",
        "lb_B1005" to "boat",
        "lb_B1819" to "bigtoe",
        "lb_B1818" to "bigtoe",
        "lb_B1777" to "bigtoe",
        "at_croc" to "croc",
    )

    fun cardFor(asanaId: String): String? = byAsana[asanaId.removeSuffix("_m")]

    val cards: Set<String> get() = byAsana.values.toSet()
}
