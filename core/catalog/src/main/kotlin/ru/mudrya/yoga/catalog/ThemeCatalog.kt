package ru.mudrya.yoga.catalog

import ru.mudrya.yoga.model.Asana
import ru.mudrya.yoga.model.Block
import ru.mudrya.yoga.model.BlockRef
import ru.mudrya.yoga.model.Breath
import ru.mudrya.yoga.model.SequenceDef
import ru.mudrya.yoga.model.Step

/**
 * Библиотека сетов «под задачу»: спина, суставы, бёдра, фигура, сила, выносливость, сон и т. д.
 * Сеты собраны из поз атласа (at_…) и библиотеки Д. Лакерды (lb_B…); односторонние позы идут
 * правой и левой стороной (зеркальная копия позы библиотеки — id с суффиксом «_m»).
 * Темы — самые частые запросы в приложениях и на занятиях йогой: боль в спине, гибкость, похудение,
 * сила, баланс, снятие стресса, сон, беременность.
 */
object ThemeCatalog {

    enum class Section(val titleRu: String, val titleEn: String) {
        BACK("Спина и осанка", "Back and posture"),
        JOINTS("Суставы и гибкость", "Joints and flexibility"),
        BODY("Фигура, сила, выносливость", "Shape, strength, endurance"),
        CALM("Покой и сон", "Calm and sleep"),
        SPECIAL("Особые случаи", "Special cases"),
    }

    data class Theme(
        val id: String,
        val nameRu: String,
        val nameEn: String,
        val hintRu: String,
        val hintEn: String,
        val section: Section,
        val poses: List<String>,
    )

    private const val M = "+m" // поза идёт правой, затем левой стороной

    val themes: List<Theme> = listOf(
        Theme(
            "th_back_strong", "Укрепи свою спину", "Strengthen your back",
            "Мышцы-разгибатели и кор: кошка, сфинкс, кобра, саранча, мост.", "Back extensors and core: cat, sphinx, cobra, locust, bridge.",
            Section.BACK,
            listOf("at_tad", "at_cat", "at_antcat", "at_cat", "at_sphinx", "at_croc", "lb_B1510", "lb_B1487", "lb_B1499$M", "at_darnika",
                "lb_B1703", "lb_B1773$M", "at_shava"),
        ),
        Theme(
            "th_back_relief", "Спина без боли", "Back without pain",
            "Мягко разгрузить поясницу: колени к груди, кошка, ребёнок, скрутка лёжа.", "Gently unload the lower back: knees to chest, cat, child, reclining twist.",
            Section.BACK,
            listOf("at_shava", "lb_B1813$M", "lb_B1771", "at_cat", "at_antcat", "lb_B1068", "at_sphinx", "at_croc", "lb_B1773$M", "lb_B1750",
                "lb_B1783", "at_shava"),
        ),
        Theme(
            "th_posture", "Ровная осанка", "Straight posture",
            "Раскрыть грудь и плечи, укрепить спину: замок за спиной, коровья морда, саранча, щенок.", "Open the chest and shoulders, strengthen the back.",
            Section.BACK,
            listOf("at_tad", "lb_B4", "lb_B5", "lb_B943$M", "at_cat", "at_antcat", "lb_B1598", "at_sphinx", "lb_B1492", "lb_B1487",
                "lb_B1068", "at_tad"),
        ),
        Theme(
            "th_neck", "Шея и плечи без зажимов", "Neck and shoulders, no tension",
            "После сидячего дня: орёл, коровья морда, щенок, «ушко иглы» на боку.", "After a day at the desk: eagle arms, cow face, puppy, thread the needle.",
            Section.BACK,
            listOf("lb_B642", "lb_B4", "lb_B943$M", "at_cat", "at_antcat", "lb_B1073$M", "lb_B1598", "lb_B1068", "lb_B149$M", "at_shava"),
        ),
        Theme(
            "th_joints", "Верни подвижность суставов", "Get your joints moving again",
            "Плечи, запястья, бёдра, колени и стопы — по кругу, без перегрузки.", "Shoulders, wrists, hips, knees and feet — a full circle without overload.",
            Section.JOINTS,
            listOf("at_tad", "lb_B5", "lb_B10$M", "lb_B149$M", "lb_B943$M", "lb_B1094", "at_cat", "at_antcat", "lb_B609", "lb_B720",
                "lb_B853$M", "lb_B1773$M", "at_shava"),
        ),
        Theme(
            "th_hips", "Свобода в бёдрах", "Free your hips",
            "Тазобедренные суставы: выпад, ящерица, гирлянда, бабочка, «ушко иглы», счастливый ребёнок.", "Hip joints: lunge, lizard, garland, butterfly, eye of the needle, happy baby.",
            Section.JOINTS,
            listOf("at_tad", "lb_B359$M", "lb_B365$M", "lb_B609", "lb_B720", "at_frog", "lb_B253", "lb_B1763$M", "lb_B1783", "lb_B1750",
                "at_shava"),
        ),
        Theme(
            "th_flex", "Гибкость: достань до пола", "Flexibility: touch the floor",
            "Задняя поверхность ног и спина: наклоны стоя и сидя, рука к большому пальцу лёжа.", "Hamstrings and back: standing and seated folds, reclining big toe.",
            Section.JOINTS,
            listOf("at_tad", "at_uttan", "lb_B299$M", "lb_B253", "lb_B775", "lb_B853$M", "lb_B779", "lb_B720", "lb_B1818$M", "at_shava"),
        ),
        Theme(
            "th_knees", "Колени без боли", "Knees without pain",
            "Укрепить мышцы вокруг колена без глубоких сгибаний: посох, нога вверх лёжа, мост, высокий стул.", "Strengthen around the knee without deep bending.",
            Section.JOINTS,
            listOf("at_shava", "lb_B775", "lb_B1817$M", "lb_B1818$M", "lb_B1703", "at_croc", "lb_B1497$M", "lb_B504", "lb_B317$M", "at_tad",
                "at_shava"),
        ),
        Theme(
            "th_slim", "Стройная фигура", "Slim figure",
            "Большие мышцы в работе: стул, воины, планка, боковая планка, лодка, мост.", "Big muscles at work: chair, warriors, plank, side plank, boat, bridge.",
            Section.BODY,
            listOf("at_tad", "lb_B504", "lb_B342$M", "lb_B317$M", "lb_B316$M", "lb_B270", "lb_B1129", "lb_B1178$M", "lb_B1007", "lb_B1703",
                "at_shava"),
        ),
        Theme(
            "th_endurance", "Выносливость: дольше без одышки", "Endurance: go longer without breathlessness",
            "Непрерывный поток: наклон, выпад, планка, чатуранга, собаки, стул, воины.", "A continuous flow: fold, lunge, plank, chaturanga, dogs, chair, warriors.",
            Section.BODY,
            listOf("at_tad", "lb_B5", "at_uttan", "lb_B359$M", "lb_B1129", "lb_B1159", "lb_B1523", "lb_B270", "lb_B504", "lb_B342$M",
                "lb_B133$M", "at_tad"),
        ),
        Theme(
            "th_strength", "Сила и рельеф", "Strength and definition",
            "Плечи, руки и кор: планка, чатуранга, дельфин, журавль, лодка, воин 3.", "Shoulders, arms and core: plank, chaturanga, dolphin, crane, boat, warrior 3.",
            Section.BODY,
            listOf("at_tad", "lb_B505", "lb_B1129", "lb_B1159", "lb_B1178$M", "lb_B1344", "lb_B1145", "lb_B1305", "lb_B1007", "lb_B133$M",
                "lb_B1703", "at_shava"),
        ),
        Theme(
            "th_balance", "Баланс и концентрация", "Balance and focus",
            "Равновесие на одной ноге: дерево, орёл, воин 3, полумесяц, танцор.", "One-leg balances: tree, eagle, warrior 3, half moon, dancer.",
            Section.BODY,
            listOf("at_tad", "lb_B89$M", "lb_B149$M", "lb_B133$M", "lb_B132$M", "lb_B29$M", "at_tad"),
        ),
        Theme(
            "th_morning", "Бодрое утро", "Energizing morning",
            "Проснуться за 10 минут: потягивание, наклон, выпад, собака, кобра, стул, дерево.", "Wake up in 10 minutes.",
            Section.BODY,
            listOf("at_tad", "lb_B5", "lb_B10$M", "at_uttan", "lb_B359$M", "lb_B270", "lb_B1510", "lb_B1068", "lb_B504", "lb_B89$M", "at_tad"),
        ),
        Theme(
            "th_calm", "Антистресс: выдохни", "Anti-stress: breathe out",
            "Спокойный темп и длинный выдох: кошка, ребёнок, наклоны, бабочка лёжа, скрутка.", "Slow pace, long exhale.",
            Section.CALM,
            listOf("lb_B642", "at_cat", "at_antcat", "lb_B1068", "lb_B853$M", "lb_B779", "lb_B1750", "lb_B1773$M", "at_shava"),
        ),
        Theme(
            "th_sleep", "Крепкий сон", "Deep sleep",
            "Перед сном: ребёнок, бабочка лёжа, скрутка, счастливый ребёнок, ноги вверх.", "Before bed: child, reclined butterfly, twist, happy baby, legs up.",
            Section.CALM,
            listOf("lb_B1068", "lb_B779", "lb_B1750", "lb_B1773$M", "lb_B1783", "lb_B1823", "at_shava"),
        ),
        Theme(
            "th_digest", "Лёгкость в животе", "A light belly",
            "Скрутки и «ветер»: колени к груди, скрутки лёжа, наклон сидя.", "Twists and wind release: knees to chest, reclining twists, seated fold.",
            Section.CALM,
            listOf("at_shava", "lb_B1813$M", "lb_B1771", "lb_B1773$M", "at_cat", "at_antcat", "lb_B1068", "lb_B779", "at_shava"),
        ),
        Theme(
            "th_birth", "Лёгкие роды", "Easier birth",
            "Для беременных с разрешения врача: таз, тазовое дно, спина; без прогибов на животе, " +
                "закрытых скруток и перевёрнутых поз; отдых — на боку.",
            "For pregnancy with a doctor's approval: pelvis, pelvic floor, back; no prone backbends, closed twists or inversions; rest lying on the side.",
            Section.SPECIAL,
            listOf("lb_B642", "lb_B5", "at_cat", "at_antcat", "lb_B1072", "lb_B609", "lb_B720", "lb_B317$M", "lb_B308$M", "lb_B1828"),
        ),
    )

    private val IN = Breath.INHALE
    private val EX = Breath.EXHALE

    /** Вдох-выдох на удержании: 3 цикла, для расслабления — больше. */
    private fun step(id: String): Step {
        val relax = id in setOf("at_shava", "lb_B1828", "lb_B1823", "lb_B1750")
        val hold = List(if (relax) 8 else 6) { if (it % 2 == 0) IN else EX }
        return Step(id, enter = listOf(EX), hold = hold)
    }

    private fun expand(poses: List<String>): List<String> = poses.flatMap { p ->
        if (p.endsWith(M)) {
            val base = p.removeSuffix(M)
            listOf(base, if (base.startsWith("lb_")) base + "_m" else "${base}_m")
        } else {
            listOf(p)
        }
    }

    val blocks: List<Block> by lazy { themes.map { t -> Block(t.id, expand(t.poses).map(::step), titleRu = t.nameRu, titleEn = t.nameEn) } }

    val sequences: List<SequenceDef> by lazy { themes.map { SequenceDef(it.id, it.nameRu, it.nameEn, listOf(BlockRef(it.id))) } }

    /** Зеркальные копии поз библиотеки, которые нужны темам (правая/левая сторона). */
    fun mirroredLibraryAsanas(library: Map<String, Asana>): List<Asana> =
        themes.flatMap { expand(it.poses) }.filter { it.startsWith("lb_") && it.endsWith("_m") }.distinct().mapNotNull { id ->
            library[id.removeSuffix("_m")]?.let { a -> a.copy(id = id, figure = a.figure?.copy(mirror = true)) }
        }

    fun theme(id: String): Theme? = themes.firstOrNull { it.id == id }
}
