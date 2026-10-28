// Сгенерировано tools/cards/build_cards.py. Не редактировать вручную.
@file:Suppress("LargeClass", "MaxLineLength")

package ru.mudrya.yoga.engine

/** Какая карточка позы показывается для асаны. */
internal object PoseCardsData {
    val byAsana: Map<String, String> = HashMap<String, String>(384).apply { part0(this) }

    private fun part0(m: HashMap<String, String>) {
        m["at_antcat"] = "cat"; m["at_bearfold"] = "stmudra"; m["at_bearfold_m"] = "stmudra"; m["at_bhadra"] = "bound"; m["at_bhadrafold"] = "boundfold"; m["at_bok"] = "crescent"
        m["at_bok_m"] = "crescent"; m["at_bridge"] = "bridge"; m["at_cat"] = "cat"; m["at_chat"] = "chat"; m["at_croc"] = "croc"; m["at_darnika"] = "thunderbolt"
        m["at_deepdog"] = "edog"; m["at_edog"] = "edog"; m["at_full"] = "stbackbend"; m["at_garuda"] = "eagle"; m["at_garuda_m"] = "eagle"; m["at_garudaup"] = "eagle"
        m["at_garudaup_m"] = "eagle"; m["at_hala"] = "plough"; m["at_hedgeplech"] = "stmudra"; m["at_hnak"] = "halflift"; m["at_horse2"] = "goddess"; m["at_legs90"] = "legsup"
        m["at_padah"] = "uttan"; m["at_padahasta"] = "uttan"; m["at_padma"] = "lotus"; m["at_padmafold"] = "yogamudra"; m["at_pasch"] = "pasch"; m["at_paschprep"] = "pasch"
        m["at_plank"] = "plank"; m["at_plech"] = "stmudra"; m["at_pnak"] = "uttan"; m["at_polu"] = "armsup"; m["at_ppchat"] = "chat"; m["at_prasarita"] = "wide"
        m["at_pyramid"] = "pyramid"; m["at_sarp"] = "cobra"; m["at_sarvanga"] = "shoulderstand"; m["at_shalabha"] = "locust"; m["at_shava"] = "shava"; m["at_shishu"] = "child"
        m["at_siddha"] = "siddha"; m["at_tad"] = "tad"; m["at_ugra"] = "pasch"; m["at_upavfold"] = "upavistha"; m["at_upavsh"] = "upavistha"; m["at_upavup"] = "upavistha"
        m["at_updog"] = "updog"; m["at_ustra"] = "camel"; m["at_utkata"] = "chair"; m["at_utkatapull"] = "chair"; m["at_utkatatoe"] = "chair"; m["at_uttan"] = "uttan"
        m["at_vdoh"] = "armsup"; m["at_vira"] = "hero"; m["at_virabend"] = "hero"; m["at_virafold"] = "downhero"; m["at_virahedge"] = "downhero"; m["at_virash"] = "hero"
        m["at_virawide"] = "hero"; m["lb_B1005"] = "boat"; m["lb_B1007"] = "boat"; m["lb_B1016"] = "boat"; m["lb_B1017"] = "halfboat"; m["lb_B1018"] = "boat"
        m["lb_B104"] = "handtoe"; m["lb_B1067"] = "child"; m["lb_B1068"] = "child"; m["lb_B1069"] = "child"; m["lb_B1072"] = "child"; m["lb_B110"] = "handtoe"
        m["lb_B111"] = "handtoe"; m["lb_B1129"] = "plank"; m["lb_B115"] = "dancer"; m["lb_B1159"] = "chat"; m["lb_B1223"] = "camel"; m["lb_B1248"] = "thunderbolt"
        m["lb_B132"] = "halfmoon"; m["lb_B148"] = "eagle"; m["lb_B1487"] = "locust"; m["lb_B150"] = "eagle"; m["lb_B1510"] = "cobra"; m["lb_B1703"] = "bridge"
        m["lb_B1750"] = "reclbound"; m["lb_B1761"] = "reclbound"; m["lb_B1772"] = "kneeschest"; m["lb_B1773"] = "supinetwist"; m["lb_B1777"] = "bigtoe"; m["lb_B1813"] = "supinetwist"
        m["lb_B1818"] = "bigtoe"; m["lb_B1819"] = "bigtoe"; m["lb_B222"] = "goddess"; m["lb_B226"] = "goddess"; m["lb_B227"] = "goddess"; m["lb_B250"] = "wide"
        m["lb_B251"] = "wide"; m["lb_B267"] = "widetwist"; m["lb_B268"] = "widetwist"; m["lb_B270"] = "edog"; m["lb_B29"] = "dancer"; m["lb_B292"] = "pyramid"
        m["lb_B293"] = "pyramid"; m["lb_B294"] = "pyramid"; m["lb_B295"] = "pyramid"; m["lb_B296"] = "pyramid"; m["lb_B298"] = "pyramid"; m["lb_B299"] = "pyramid"
        m["lb_B3"] = "revprayer"; m["lb_B300"] = "pyramid"; m["lb_B301"] = "pyramid"; m["lb_B303"] = "pyramid"; m["lb_B306"] = "pyramid"; m["lb_B308"] = "triangle"
        m["lb_B313"] = "revtriangle"; m["lb_B314"] = "revtriangle"; m["lb_B316"] = "sideangle"; m["lb_B317"] = "warrior"; m["lb_B332"] = "revsideangle"; m["lb_B342"] = "warrior1"
        m["lb_B344"] = "warrior1"; m["lb_B4"] = "boundhands"; m["lb_B46"] = "dancer"; m["lb_B49"] = "dancer"; m["lb_B5"] = "armsup"; m["lb_B50"] = "dancer"
        m["lb_B504"] = "chair"; m["lb_B505"] = "chair"; m["lb_B51"] = "dancer"; m["lb_B637"] = "easy"; m["lb_B642"] = "easy"; m["lb_B649"] = "siddha"
        m["lb_B655"] = "halflotus"; m["lb_B656"] = "halflotus"; m["lb_B659"] = "lotus"; m["lb_B660"] = "lotus"; m["lb_B662"] = "baddhapadma"; m["lb_B663"] = "baddhapadma"
        m["lb_B665"] = "lotus"; m["lb_B676"] = "yogamudra"; m["lb_B679"] = "yogamudra"; m["lb_B681"] = "yogamudra"; m["lb_B687"] = "matsyendra"; m["lb_B697"] = "matsyendra"
        m["lb_B698"] = "matsyendra"; m["lb_B699"] = "matsyendra"; m["lb_B7"] = "raisedbound"; m["lb_B700"] = "matsyendra"; m["lb_B701"] = "marichi3"; m["lb_B703"] = "marichi3"
        m["lb_B704"] = "marichi3"; m["lb_B705"] = "marichi3"; m["lb_B706"] = "matsyendra"; m["lb_B709"] = "marichi3"; m["lb_B710"] = "marichi3"; m["lb_B720"] = "bound"
        m["lb_B721"] = "bound"; m["lb_B722"] = "bound"; m["lb_B732"] = "bound"; m["lb_B733"] = "bound"; m["lb_B734"] = "bound"; m["lb_B765"] = "upavistha"
        m["lb_B766"] = "upavistha"; m["lb_B767"] = "upavistha"; m["lb_B775"] = "staff"; m["lb_B777"] = "staff"; m["lb_B778"] = "pasch"; m["lb_B779"] = "pasch"
        m["lb_B780"] = "pasch"; m["lb_B781"] = "pasch"; m["lb_B784"] = "twist"; m["lb_B799"] = "marichi1"; m["lb_B800"] = "marichi1"; m["lb_B802"] = "marichi1"
        m["lb_B805"] = "marichi3"; m["lb_B822"] = "abpp"; m["lb_B823"] = "abpp"; m["lb_B825"] = "matsyendra"; m["lb_B831"] = "triang"; m["lb_B852"] = "headknee"
        m["lb_B853"] = "headknee"; m["lb_B854"] = "headknee"; m["lb_B855"] = "headknee"; m["lb_B874"] = "hero"; m["lb_B875"] = "hero"; m["lb_B878"] = "hero"
        m["lb_B882"] = "hero"; m["lb_B887"] = "bharadvaja"; m["lb_B889"] = "bharadvaja"; m["lb_B893"] = "thunderbolt"; m["lb_B93"] = "tree"; m["lb_B943"] = "cowface"
    }
}
