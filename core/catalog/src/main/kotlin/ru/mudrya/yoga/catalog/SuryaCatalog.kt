package ru.mudrya.yoga.catalog

import ru.mudrya.yoga.engine.GraphBuilder
import ru.mudrya.yoga.engine.PoseFitter
import ru.mudrya.yoga.model.Asana
import ru.mudrya.yoga.model.Block
import ru.mudrya.yoga.model.BlockRef
import ru.mudrya.yoga.model.Breath
import ru.mudrya.yoga.model.Catalog
import ru.mudrya.yoga.model.Contact
import ru.mudrya.yoga.model.FitRule
import ru.mudrya.yoga.model.Joint
import ru.mudrya.yoga.model.Pose
import ru.mudrya.yoga.model.PoseParam
import ru.mudrya.yoga.model.SequenceDef
import ru.mudrya.yoga.model.Side
import ru.mudrya.yoga.model.Step
import ru.mudrya.yoga.model.Support

/**
 * Сурья Намаскар (круг солнечного света, 77 позиций) и Чандра Намаскар (круг лунного света, 99 позиций) —
 * основные последовательности нулевого цикла.
 * Порядок асан и схемы дыхания — по методике омнио-тренинга; описания — свои.
 *
 * Углы поз заданы приблизительно и подгоняются под пропорции модели ([PoseFitter]):
 * в позах с двумя опорами руки и стопы одновременно стоят на полу.
 */
object SuryaCatalog {

    private val IN = Breath.INHALE
    private val EX = Breath.EXHALE
    private val ALL_SUPPORTS = setOf(Support.FISTS, Support.PALMS, Support.FINGERS)

    private fun pose(
        t: Int, n: Int, ua: Int, fa: Int, th: Int, sh: Int, ft: Int,
        th2: Int? = null, sh2: Int? = null, ft2: Int? = null,
        ua2: Int? = null, fa2: Int? = null, ut: Int? = null,
    ) = Pose(
        t.toDouble(), n.toDouble(), ua.toDouble(), fa.toDouble(), th.toDouble(), sh.toDouble(), ft.toDouble(),
        thigh2 = th2?.toDouble(), shin2 = sh2?.toDouble(), foot2 = ft2?.toDouble(),
        upperArm2 = ua2?.toDouble(), foreArm2 = fa2?.toDouble(), upperTorso = ut?.toDouble(),
    )

    private fun fit(a: Contact, b: Contact, vararg vary: PoseParam) = FitRule(a, b, vary.toList())

    private val LEGS = arrayOf(PoseParam.THIGH, PoseParam.SHIN)
    private val LEGS2 = arrayOf(PoseParam.THIGH2, PoseParam.SHIN2)
    private val UPPER = arrayOf(PoseParam.TORSO, PoseParam.NECK, PoseParam.UPPER_ARM, PoseParam.FORE_ARM)
    private val TRUNK = arrayOf(PoseParam.TORSO, PoseParam.UPPER_TORSO)

    private fun a(
        id: String, ru: String, en: String, pose: Pose,
        cues: List<String>,
        sanskrit: String? = null,
        supports: Set<Support> = emptySet(),
        load: Map<Joint, Int> = emptyMap(),
        fit: FitRule? = null,
        safer: String? = null,
    ) = Asana(
        id = id, nameRu = ru, nameEn = en, pose = pose, supports = supports, load = load,
        saferAlternative = safer, cuesRu = cues, sanskrit = sanskrit, fit = fit,
    )

    val asanas: List<Asana> = listOf(
        // --- Стандартный вход: стойки и наклоны ---
        a("tadasana", "Основная стойка", "Mountain pose", pose(90, 90, 270, 270, 270, 270, 0),
            listOf("Стопы вместе, вес поровну на обе стопы", "Позвоночник вытянут вверх, плечи расправлены", "Пальцами ног будто обхватываете пол"),
            sanskrit = "Тадасана"),
        a("front_inhale", "Вдох передней поверхностью тела", "Front-body inhale", pose(93, 90, 252, 15, 284, 256, 0),
            listOf("Руки вперёд, затем, чуть присев, резко подтяните кисти к бокам на уровне солнечного сплетения", "Ладони вверх, пальцы будто цепляют воздух", "Короткий резкий вдох — примерно на четверть лёгких"),
            load = mapOf(Joint.KNEES to 1)),
        a("arms_up", "Вытянутый полупрогиб", "Extended half backbend", pose(98, 102, 100, 102, 270, 270, 300),
            listOf("Руки вперёд и вверх, взгляд за кистями, подъём на носки", "Прогиб — в грудном отделе, поясница и шея длинные", "Тянитесь всем телом вверх"),
            load = mapOf(Joint.LUMBAR to 1)),
        a("side_crescent_right", "Правый боковой полумесяц", "Right side crescent", pose(90, 90, 88, 88, 270, 270, 0),
            listOf("Кисти в замок, ладонями вверх, руки прямые", "Наклон вправо — растягивайте левый бок, а не складывайте правый", "Стопы плотно на полу"),
            load = mapOf(Joint.LUMBAR to 1)),
        a("side_crescent_left", "Левый боковой полумесяц", "Left side crescent", pose(90, 90, 88, 88, 270, 270, 0),
            listOf("Кисти в замок, ладонями вверх, руки прямые", "Наклон влево — растягивайте правый бок", "Стопы плотно на полу"),
            load = mapOf(Joint.LUMBAR to 1)),
        a("full_backbend", "Прямой полумесяц (полный прогиб)", "Full standing backbend", pose(122, 145, 140, 150, 262, 264, 0),
            listOf("Сначала раскройте грудной отдел, потом подключайте поясницу и шею", "Каждый отдел сначала вытягивается, затем прогибается", "Ноги прямые, не сгибайте колени"),
            sanskrit = "Ардха-чандрасана", load = mapOf(Joint.LUMBAR to 3, Joint.NECK to 1), safer = "arms_up"),
        a("horiz_fold", "Закрытый горизонтальный наклон", "Flat-back fold", pose(0, 3, 2, 2, 278, 274, 0),
            listOf("Наклон от тазобедренных суставов волной от таза к рукам", "Корпус и руки — одна горизонтальная линия", "Ноги прямые, седалищные кости тянутся вверх"),
            load = mapOf(Joint.LUMBAR to 2)),
        a("uttanasana", "Закрытый вытянутый наклон", "Standing forward fold", pose(268, 262, 264, 262, 282, 276, 0),
            listOf("Складывайтесь в тазобедренных суставах, а не сгибайте спину", "Грудь к бёдрам, макушка тянется к полу", "Пальцы рук давят в пол за стопами"),
            sanskrit = "Уттанасана", load = mapOf(Joint.LUMBAR to 1),
            fit = fit(Contact.HAND, Contact.FOOT, PoseParam.UPPER_ARM, PoseParam.FORE_ARM)),
        a("half_lift", "Полупрогиб в вытянутом наклоне", "Half lift", pose(340, 25, 275, 275, 282, 276, 0),
            listOf("Ладони на полу перед стопами", "Прогнитесь, взгляд вперёд и вверх", "Пупок прижат к бёдрам"),
            load = mapOf(Joint.LUMBAR to 1),
            fit = fit(Contact.HAND, Contact.FOOT, PoseParam.TORSO)),
        a("fold_ankles", "Замкнутый закрытый наклон", "Fold holding ankles", pose(264, 258, 232, 300, 282, 276, 0),
            listOf("Возьмитесь руками за лодыжки", "Притягивайте корпус вниз вдоль бёдер", "Ноги прямые"),
            load = mapOf(Joint.LUMBAR to 1)),
        a("shoulder_fold", "Плечевое вытягивание в наклоне", "Fold with shoulder stretch", pose(266, 262, 55, 55, 282, 276, 0),
            listOf("Кисти в замок за спиной, замок вывернут", "Прямые руки опускаются из-за спины вперёд-вниз", "Позвоночник свободно стекает вниз"),
            load = mapOf(Joint.SHOULDERS to 2)),
        a("plank", "Наклонный упор", "High plank", pose(12, 16, 272, 272, 192, 192, 250),
            listOf("Руки прямые, тело — одна прямая линия", "Плечи расправлены, живот подтянут", "Стопы на ширине плеч"),
            supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2),
            fit = fit(Contact.HAND, Contact.FOOT, *LEGS)),
        // --- Внутренняя связка (виньяса) ---
        a("glide_updog", "Скользящий упор-прогиб", "Gliding upward dog", pose(24, 50, 294, 294, 190, 190, 236),
            listOf("Кисти впереди плеч, таз низко", "Тянитесь макушкой вперёд", "Движение — на вдохе"),
            sanskrit = "Уттана-урдхва-мукха-шванасана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.LUMBAR to 1),
            fit = fit(Contact.HAND, Contact.FOOT, *LEGS)),
        a("glide_low", "Скользящий горизонтальный упор", "Gliding low plank", pose(12, 20, 200, 300, 186, 186, 250),
            listOf("Опуститесь, корпус прямой", "Кисти остаются впереди плеч"),
            sanskrit = "Уттана-чатуранга-дандасана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2),
            fit = fit(Contact.HAND, Contact.FOOT, *LEGS)),
        a("chaturanga", "Горизонтальный упор", "Low plank", pose(12, 16, 205, 280, 188, 188, 250),
            listOf("Локти вдоль корпуса", "Тело параллельно полу, живот подтянут", "Если силы кончаются — «металлическая собака»"),
            sanskrit = "Чатуранга-дандасана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2),
            fit = fit(Contact.HAND, Contact.FOOT, *LEGS)),
        a("half_up_plank", "Полупрогиб в горизонтальном упоре", "Half-up low plank", pose(22, 45, 215, 280, 188, 186, 250),
            listOf("Немного откатитесь назад", "Не выпрямляя рук, раскройте грудь, взгляд вперёд"),
            supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2),
            fit = fit(Contact.HAND, Contact.FOOT, *LEGS)),
        a("updog", "Упор-прогиб", "Upward-facing dog", pose(40, 66, 276, 274, 186, 184, 246),
            listOf("Руки прямые", "Сначала раскройте грудной отдел, потом поясницу", "Движение — на вдохе"),
            sanskrit = "Урдхва-мукха-шванасана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.LUMBAR to 2),
            fit = fit(Contact.HAND, Contact.FOOT, *LEGS)),
        a("ext_dog", "Вытянутый упор-горка", "Extended downward dog", pose(318, 312, 316, 316, 226, 226, 300),
            listOf("Таз вверх-назад", "Спина и руки — одна линия, пятки приподняты"),
            sanskrit = "Уттана-адхо-мукха-шванасана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2),
            fit = fit(Contact.HAND, Contact.FOOT, *UPPER)),
        a("dog_bend", "Упор-горка с прогибом", "Downward dog with chest press", pose(332, 348, 344, 330, 205, 205, 302),
            listOf("Грудь тянется к полу между руками", "Плечи раскрыты", "Движение — на вдохе"),
            supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2),
            fit = fit(Contact.HAND, Contact.FOOT, *UPPER)),
        a("deep_dog", "Глубокий упор-горка", "Downward-facing dog", pose(304, 300, 304, 304, 250, 250, 358),
            listOf("Вес на ноги, пятки к полу", "Шея свободна", "Дышите свободно и плавно"),
            sanskrit = "Адхо-мукха-шванасана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1),
            fit = fit(Contact.HAND, Contact.FOOT, *UPPER)),
        // --- Внутреннее кольцо с широким шагом (рабочая нога — ближняя) ---
        a("wide_step", "Широкий шаг со вдохом", "Wide step with inhale", pose(95, 92, 250, 10, 330, 270, 0, 205, 205, 250),
            listOf("Шагните ногой вперёд, стопа рядом с кистью", "Таз как можно ниже, голень перпендикулярна полу", "Корпус вертикально, кисти к талии, короткий вдох"),
            load = mapOf(Joint.KNEES to 2),
            fit = fit(Contact.FOOT, Contact.FOOT2, *LEGS2)),
        a("crescent_lunge", "Полумесяц с широким шагом", "Crescent lunge", pose(106, 116, 116, 122, 330, 270, 0, 205, 205, 250),
            listOf("Руки вперёд и вверх, прогиб в грудном отделе", "Тело — плавная дуга от задней пятки до пальцев рук", "Промежность низко, таз не разворачивается"),
            sanskrit = "Эка-падардха-чандрасана", load = mapOf(Joint.KNEES to 2, Joint.LUMBAR to 2),
            fit = fit(Contact.FOOT, Contact.FOOT2, *LEGS2)),
        a("wings", "Выдох сквозь распростёртые крылья", "Exhale through open wings", pose(95, 92, 178, 176, 330, 270, 0, 205, 205, 250),
            listOf("Голова прямо, руки медленно разводятся в стороны", "Кисти на себя", "Вся поза — на одном растянутом выдохе"),
            load = mapOf(Joint.KNEES to 2),
            fit = fit(Contact.FOOT, Contact.FOOT2, *LEGS2)),
        a("lunge_backbend", "Полумесяц с широким шагом, глубокий прогиб", "Deep crescent backbend", pose(140, 162, 205, 218, 330, 270, 0, 212, 200, 250),
            listOf("Прогнитесь глубже, пальцы рук тянутся к полу", "Заднюю ногу сгибайте как можно меньше", "Прогиб начинается с грудного отдела"),
            load = mapOf(Joint.KNEES to 2, Joint.LUMBAR to 3), safer = "crescent_lunge",
            fit = fit(Contact.FOOT, Contact.FOOT2, *LEGS2)),
        a("kneel_backbend", "Полумесяц с коленом на полу", "Kneeling crescent backbend", pose(135, 160, 208, 222, 325, 270, 0, 250, 180, 180),
            listOf("Опустите заднее колено на пол", "Прогнитесь ещё чуть глубже, соблюдая порядок: грудь, затем поясница"),
            load = mapOf(Joint.KNEES to 2, Joint.LUMBAR to 3), safer = "crescent_lunge",
            fit = fit(Contact.FOOT, Contact.KNEE2, *LEGS)),
        // --- Связка на трёх точках (рабочая нога поднята) ---
        a("tp_ext_dog", "Трёхточечный вытянутый упор-горка", "Three-legged extended dog", pose(318, 312, 316, 316, 165, 165, 180, 226, 226, 300),
            listOf("Рабочая нога поднята назад-вверх", "Таз не разворачивайте"),
            sanskrit = "Эка-падоттанадхо-мукха-шванасана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2),
            fit = fit(Contact.HAND, Contact.FOOT2, *UPPER)),
        a("tp_glide_updog", "Трёхточечный скользящий упор-прогиб", "Three-legged gliding upward dog", pose(24, 50, 294, 294, 168, 172, 200, 190, 190, 236),
            listOf("Таз опускается, нога остаётся высоко", "Колено поднятой ноги почти прямое"),
            supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.LUMBAR to 1),
            fit = fit(Contact.HAND, Contact.FOOT2, *LEGS2)),
        a("tp_low_plank", "Трёхточечный горизонтальный упор", "Three-legged low plank", pose(12, 18, 205, 282, 172, 174, 200, 188, 188, 250),
            listOf("Опуститесь до горизонтали", "Нога по-прежнему поднята"),
            sanskrit = "Трианга-дандасана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2),
            fit = fit(Contact.HAND, Contact.FOOT2, *LEGS2)),
        a("tp_deep_dog", "Трёхточечный глубокий упор-горка", "Three-legged downward dog", pose(300, 290, 300, 300, 135, 135, 160, 250, 250, 358),
            listOf("Таз вверх, голова свободно висит", "Пятка опорной ноги на полу, рабочая нога назад-вверх"),
            sanskrit = "Эка-пададхо-мукха-шванасана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.NECK to 1),
            fit = fit(Contact.HAND, Contact.FOOT2, *UPPER)),
        a("knee_to_shoulder", "Наклонный упор, колено к плечу", "Plank with knee to shoulder", pose(14, 22, 272, 272, 12, 262, 230, 192, 192, 250),
            listOf("Опустите таз, голову поднимите", "Круговым движением подтяните колено к плечу той же стороны"),
            supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2),
            fit = fit(Contact.HAND, Contact.FOOT2, *LEGS2)),
        // --- Лунное кольцо (Чандра Намаскар): внутреннее кольцо в упоре на четвереньках ---
        a("shoulder_dog", "Плечевое вытягивание в упоре-горке", "Shoulder stretch in down dog",
            pose(305, 302, 70, 70, 240, 240, 0),
            listOf("Макушка мягко упирается в пол, спина и шея — одной линией", "Кисти в замок за спиной, прямые руки тянутся к полу за головой", "Пятки тянутся к полу"),
            load = mapOf(Joint.SHOULDERS to 2, Joint.NECK to 2), fit = fit(Contact.HEAD, Contact.FOOT, *LEGS)),
        a("cat", "Прогиб-кошка", "Cat backbend",
            pose(345, 60, 270, 270, 270, 180, 180, ut = 40),
            listOf("Упор на четвереньках: кисти под плечами, колени под тазом, носки оттянуты", "Подбородок вперёд-вверх, седалищные кости назад-вверх", "Прогиб волной от таза к шее"),
            sanskrit = "Бидаласана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 1, Joint.KNEES to 1),
            fit = fit(Contact.HAND, Contact.KNEE2, *TRUNK)),
        a("anti_cat", "Антипрогиб-кошка", "Cat round back",
            pose(40, 295, 270, 270, 270, 180, 180, ut = 345),
            listOf("Спина дугой вверх, как у кошки", "Подбородок к яремной выемке", "Живот подтянут, пресс напряжён"),
            sanskrit = "Випарита-бидаласана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 1, Joint.KNEES to 1),
            fit = fit(Contact.HAND, Contact.KNEE2, *TRUNK)),
        a("cat_leg_up", "Прогиб-кошка в трёхточечном упоре", "Three-point cat backbend",
            pose(340, 65, 270, 270, 160, 150, 170, 270, 180, 180, ut = 45),
            listOf("Прогнитесь до предела и поднимите рабочую ногу назад-вверх", "Таз и плечи остаются горизонтальными", "Подбородок тянется вперёд-вверх"),
            sanskrit = "Эка-пада-бидаласана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 1, Joint.KNEES to 1, Joint.LUMBAR to 2),
            fit = fit(Contact.HAND, Contact.KNEE2, *TRUNK)),
        a("cat_knee_side", "Упор-кошка, колено к голове сбоку", "Cat knee to ear",
            pose(5, 20, 270, 270, 15, 210, 240, 270, 180, 180, ut = 15),
            listOf("Круговым движением сбоку подтяните колено к уху", "Таз не заваливается, опорная нога неподвижна"),
            supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 1, Joint.KNEES to 1),
            fit = fit(Contact.HAND, Contact.KNEE2, *TRUNK)),
        a("cat_round_kick", "Упор-кошка, медленный круговой удар", "Cat slow roundhouse kick",
            pose(5, 20, 270, 270, 330, 0, 0, 270, 180, 180, ut = 15),
            listOf("Напряжённо выпрямите ногу — как медленный круговой удар подъёмом стопы", "Корпус неподвижен"),
            supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 1, Joint.KNEES to 1),
            fit = fit(Contact.HAND, Contact.KNEE2, *TRUNK)),
        a("cat_deep", "Глубокий трёхточечный прогиб-кошка", "Deep three-point cat",
            pose(335, 75, 270, 270, 140, 60, 60, 270, 180, 180, ut = 50),
            listOf("Широким махом нога назад-вверх, затем согните её", "Прогнитесь до предела, стопа тянется к голове"),
            supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 1, Joint.KNEES to 1, Joint.LUMBAR to 2),
            fit = fit(Contact.HAND, Contact.KNEE2, *TRUNK)),
        a("anticat_knee", "Антипрогиб-кошка, колено к голове снизу", "Round-back cat, knee to head",
            pose(40, 290, 270, 270, 25, 210, 250, 245, 210, 280, ut = 340),
            listOf("Опорная нога на пальцах, спина дугой", "Колено тянется к голове снизу, стопа пола не касается"),
            supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 1, Joint.KNEES to 1),
            fit = fit(Contact.HAND, Contact.FOOT2, *LEGS2)),
        a("anticat_kick", "Антипрогиб-кошка, медленный прямой удар", "Round-back cat, slow front kick",
            pose(40, 290, 270, 270, 5, 5, 10, 245, 210, 280, ut = 340),
            listOf("Медленно выпрямите ногу вперёд-вверх", "Пятка не касается пола, спина остаётся дугой"),
            supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 1, Joint.KNEES to 1),
            fit = fit(Contact.HAND, Contact.FOOT2, *LEGS2)),
        a("cat_side_kick", "Упор-кошка, медленный удар в сторону", "Cat slow side kick",
            pose(5, 20, 270, 270, 315, 10, 10, 270, 180, 180, ut = 15),
            listOf("Стопу — к внутренней стороне опорного бедра", "Затем медленный удар в сторону ребром стопы"),
            supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 1, Joint.KNEES to 1),
            fit = fit(Contact.HAND, Contact.KNEE2, *TRUNK)),
        a("cat_reach", "Двухточечный упор-кошка с вытянутым прогибом", "Two-point cat reach",
            pose(340, 65, 30, 30, 160, 150, 170, 270, 180, 180, 270, 270, ut = 45),
            listOf("Нога назад-вверх, одноимённая рука вперёд-вверх", "Подбородок вперёд-вверх, тело — одна длинная дуга"),
            supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 1, Joint.KNEES to 1, Joint.LUMBAR to 1),
            fit = fit(Contact.HAND, Contact.KNEE2, *TRUNK)),
        a("half_camel", "Верхний полуверблюд", "Upper half camel",
            pose(340, 75, 165, 120, 150, 80, 80, 270, 180, 180, 270, 270, ut = 50),
            listOf("Одноимённой рукой захватите лодыжку согнутой ноги", "Предельный прогиб, грудь раскрыта"),
            sanskrit = "Урдхвардхоштрасана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 1, Joint.KNEES to 1, Joint.LUMBAR to 2, Joint.SHOULDERS to 1),
            fit = fit(Contact.HAND, Contact.KNEE2, *TRUNK)),
        a("cat_cross_reach", "Двухточечный упор-кошка с перекрёстным прогибом", "Two-point cat cross reach",
            pose(340, 65, 270, 270, 160, 150, 170, 270, 180, 180, 30, 30, ut = 45),
            listOf("Нога назад-вверх, противоположная рука вперёд-вверх", "Плечи и таз не поворачиваются"),
            supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 1, Joint.KNEES to 1, Joint.LUMBAR to 1),
            fit = fit(Contact.HAND, Contact.KNEE2, *TRUNK)),
        a("cross_half_camel", "Перекрёстный верхний полуверблюд", "Cross upper half camel",
            pose(340, 75, 270, 270, 150, 80, 80, 270, 180, 180, 165, 120, ut = 50),
            listOf("Противоположной рукой захватите лодыжку", "Плечи и таз не поворачиваются, прогиб предельный"),
            sanskrit = "Урдхвардхоштрасана", supports = ALL_SUPPORTS, load = mapOf(Joint.WRISTS to 1, Joint.KNEES to 1, Joint.LUMBAR to 2, Joint.SHOULDERS to 1),
            fit = fit(Contact.HAND, Contact.KNEE2, *TRUNK)),
        a("darnika", "Расслабление на пятках", "Child's rest on heels",
            pose(345, 300, 182, 178, 340, 180, 180, 339, 180, 180, ut = 355),
            listOf("Опуститесь тазом на пятки, носки вытянуты", "Лоб на полу, руки свободно вдоль тела", "Дышите свободно, отпустите спину"),
            sanskrit = "Дарникасана", load = mapOf(Joint.KNEES to 1),
            fit = fit(Contact.HEAD, Contact.KNEE, *TRUNK)),
    )

    // --- Схемы дыхания шагов ---
    private fun s(id: String, enter: List<Breath>, hold: List<Breath>, dog: Boolean = false) =
        Step(id, enter = enter, hold = hold, metalDog = dog)

    private val FREE = listOf(IN, EX, IN, EX, IN, EX) // «свободное дыхание» в глубоком упоре-горке: в MVP — 3 цикла

    val blocks: List<Block> = listOf(
        Block("standard_entry", listOf(
            s("tadasana", listOf(EX), emptyList()),
            s("front_inhale", listOf(IN), emptyList()),
            s("arms_up", listOf(IN), listOf(EX, IN, EX, IN)),
            s("side_crescent_right", listOf(EX), listOf(IN, EX, IN)),
            s("tadasana", listOf(EX), emptyList()),
            s("front_inhale", listOf(IN), emptyList()),
            s("arms_up", listOf(IN), listOf(EX, IN, EX, IN)),
            s("side_crescent_left", listOf(EX), listOf(IN, EX, IN)),
            s("tadasana", listOf(EX), emptyList()),
            s("front_inhale", listOf(IN), emptyList()),
            s("arms_up", listOf(IN), listOf(EX, IN, EX, IN)),
            s("full_backbend", listOf(EX, IN, EX), listOf(IN, EX, IN)),
            s("horiz_fold", listOf(EX), listOf(IN, EX, IN)),
            s("uttanasana", listOf(EX, IN, EX), listOf(IN, EX, IN, EX)),
            s("half_lift", listOf(IN), listOf(EX, IN)),
            s("fold_ankles", listOf(EX), listOf(IN, EX, IN, EX)),
            s("half_lift", listOf(IN), listOf(EX, IN)),
            s("shoulder_fold", listOf(EX), listOf(IN, EX, IN, EX)),
            s("half_lift", listOf(IN), listOf(EX, IN)),
            s("plank", listOf(EX), listOf(IN, EX, IN), dog = true),
        )),
        Block("vinyasa", listOf(
            s("glide_updog", listOf(IN), listOf(EX, IN)),
            s("glide_low", listOf(EX), listOf(IN, EX, IN)),
            s("chaturanga", listOf(EX), listOf(IN, EX, IN), dog = true),
            s("half_up_plank", listOf(EX), listOf(IN, EX)),
            s("updog", listOf(IN), listOf(EX, IN, EX, IN)),
            s("ext_dog", listOf(EX), listOf(IN, EX, IN, EX, IN, EX)),
            s("dog_bend", listOf(IN), listOf(EX, IN)),
            s("deep_dog", listOf(EX), FREE),
        )),
        Block("ring_wide_step", listOf(
            s("wide_step", listOf(EX, IN), emptyList()),
            s("crescent_lunge", listOf(IN), listOf(EX, IN, EX, IN)),
            s("wings", listOf(EX), emptyList()),
            s("lunge_backbend", listOf(IN, EX), listOf(IN, EX, IN)),
            s("kneel_backbend", listOf(EX), listOf(IN, EX, IN)),
        )),
        Block("three_point", listOf(
            s("tp_ext_dog", listOf(EX), listOf(IN, EX)),
            s("tp_glide_updog", listOf(EX), listOf(IN, EX, IN)),
            s("tp_low_plank", listOf(EX), listOf(IN, EX, IN)),
            s("tp_deep_dog", listOf(EX), listOf(IN, EX, IN)),
            s("knee_to_shoulder", listOf(EX), listOf(IN, EX, IN)),
            s("deep_dog", listOf(EX), FREE),
        )),
        Block("moon_ring", listOf(
            s("shoulder_dog", listOf(EX), listOf(IN, EX, IN)),
            s("cat", listOf(EX, IN), listOf(EX, IN, EX, IN)),
            s("anti_cat", listOf(EX), listOf(IN, EX, IN)),
            s("cat_leg_up", listOf(EX), listOf(IN, EX, IN)),
            s("cat_knee_side", listOf(EX), listOf(IN, EX, IN)),
            s("cat_round_kick", listOf(EX), listOf(IN, EX, IN)),
            s("cat_deep", listOf(EX), listOf(IN, EX, IN)),
            s("anticat_knee", listOf(EX), listOf(IN, EX, IN)),
            s("anticat_kick", listOf(EX), listOf(IN, EX, IN)),
            s("cat_side_kick", listOf(EX), listOf(IN, EX, IN)),
            s("cat_reach", listOf(EX), listOf(IN, EX, IN)),
            s("half_camel", listOf(EX), listOf(IN, EX, IN)),
            s("anticat_knee", listOf(EX), listOf(IN, EX, IN)),
            s("anticat_kick", listOf(EX), listOf(IN, EX, IN)),
            s("cat_side_kick", listOf(EX), listOf(IN, EX, IN)),
            s("cat_cross_reach", listOf(EX), listOf(IN, EX, IN)),
            s("cross_half_camel", listOf(EX), listOf(IN, EX, IN)),
            s("anticat_knee", listOf(EX), listOf(IN, EX, IN)),
            s("cat", listOf(EX, IN), listOf(EX, IN)),
            s("anti_cat", listOf(EX), listOf(IN, EX, IN)),
            s("cat", listOf(EX, IN), listOf(EX, IN)),
            s("darnika", listOf(EX), FREE),
        )),
        Block("standard_exit", listOf(
            s("half_lift", listOf(EX, IN), listOf(EX, IN)),
            s("fold_ankles", listOf(EX), listOf(IN, EX, IN, EX)),
            s("half_lift", listOf(IN), listOf(EX, IN)),
            s("uttanasana", listOf(EX, IN, EX), listOf(IN, EX, IN, EX)),
            s("half_lift", listOf(IN), listOf(EX, IN)),
            s("shoulder_fold", listOf(EX), listOf(IN, EX, IN, EX)),
            s("horiz_fold", listOf(IN), listOf(EX, IN, EX)),
            s("front_inhale", listOf(IN, EX, IN), emptyList()),
            s("arms_up", listOf(IN), listOf(EX, IN, EX, IN)),
            s("full_backbend", listOf(EX, IN, EX), listOf(IN, EX, IN)),
            s("tadasana", listOf(EX), emptyList()),
        )),
    )

    val surya = SequenceDef(
        id = "surya",
        nameRu = "Сурья Намаскар",
        nameEn = "Surya Namaskar",
        items = listOf(
            BlockRef("standard_entry"),
            BlockRef("vinyasa"),
            BlockRef("ring_wide_step", Side.RIGHT),
            BlockRef("three_point", Side.RIGHT),
            BlockRef("vinyasa"),
            BlockRef("ring_wide_step", Side.LEFT),
            BlockRef("three_point", Side.LEFT),
            BlockRef("vinyasa"),
            BlockRef("standard_exit"),
        ),
        entryBlockId = "standard_entry",
        exitBlockId = "standard_exit",
    )

    /** Чандра Намаскар (круг лунного света) — 99 позиций: вход и выход как у Сурьи, внутри — лунные кольца. */
    val chandra = SequenceDef(
        id = "chandra",
        nameRu = "Чандра Намаскар",
        nameEn = "Chandra Namaskar",
        items = listOf(
            BlockRef("standard_entry"),
            BlockRef("vinyasa"),
            BlockRef("moon_ring", Side.RIGHT),
            BlockRef("vinyasa"),
            BlockRef("moon_ring", Side.LEFT),
            BlockRef("vinyasa"),
            BlockRef("standard_exit"),
        ),
        entryBlockId = "standard_entry",
        exitBlockId = "standard_exit",
    )

    /**
     * Связка Сурья → Чандра: по правилу стыковки методики у Сурьи убирается стандартный выход,
     * у Чандры — стандартный вход и первая виньяса (она уже была в конце Сурьи).
     */
    val suryaChandra = SequenceDef(
        id = "surya_chandra",
        nameRu = "Сурья → Чандра",
        nameEn = "Surya → Chandra",
        items = surya.items.dropLast(1) + chandra.items.drop(2),
        entryBlockId = "standard_entry",
        exitBlockId = "standard_exit",
    )

    /** Короткая утренняя сессия: стандартный вход, одна виньяса, стандартный выход (~10 минут). */
    val morning = SequenceDef(
        id = "morning",
        nameRu = "Утро за 10 минут",
        nameEn = "10-minute morning",
        items = listOf(BlockRef("standard_entry"), BlockRef("vinyasa"), BlockRef("standard_exit")),
        entryBlockId = "standard_entry",
        exitBlockId = "standard_exit",
    )

    val sequences: List<SequenceDef> = listOf(surya, chandra, suryaChandra, morning)

    fun sequence(id: String): SequenceDef = sequences.firstOrNull { it.id == id } ?: surya

    /** Каталог с подогнанными позами и графом переходов. */
    val catalog: Catalog by lazy {
        val fitted = asanas.map { asana -> asana.fit?.let { asana.copy(pose = PoseFitter.fit(asana.pose, it)) } ?: asana }
        val blockMap = blocks.associateBy { it.id }
        val alternatives = fitted.mapNotNull { x -> x.saferAlternative?.let { x.id to it } }.toMap()
        Catalog(
            asanas = fitted.associateBy { it.id },
            blocks = blockMap,
            transitions = GraphBuilder.build(blockMap, sequences, alternatives),
        )
    }
}
