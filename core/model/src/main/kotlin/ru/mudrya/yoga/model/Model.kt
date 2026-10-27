package ru.mudrya.yoga.model

/** Фаза дыхания. */
enum class Breath { INHALE, EXHALE }

/** Сторона для зеркальных блоков (правое/левое внутреннее кольцо). */
enum class Side {
    NONE, LEFT, RIGHT;

    fun mirrored(): Side = when (this) {
        LEFT -> RIGHT
        RIGHT -> LEFT
        NONE -> NONE
    }
}

/** Опора кистей в упорах. Порядок — от щадящей к самой тяжёлой для запястий. */
enum class Support { FISTS, PALMS, FINGERS }

/** Суставы и отделы, нагрузку на которые учитывает движок. */
enum class Joint { WRISTS, SHOULDERS, LUMBAR, NECK, KNEES }

/** Ограничения, которые пользователь отмечает в онбординге. */
enum class Injury(val joint: Joint) {
    WRISTS(Joint.WRISTS),
    LUMBAR(Joint.LUMBAR),
    NECK(Joint.NECK),
    KNEES(Joint.KNEES),
}

/**
 * Углы сегментов тела для схематичной модели, в градусах.
 * 0° — вперёд (по направлению взгляда, на экране вправо), 90° — вверх, вид сбоку.
 *
 * Основные рука и нога — ближние к зрителю (рабочие). Вторые задаются только для
 * асимметричных поз: выпады, трёхточечные упоры. Если не заданы — совпадают с основными.
 *
 * Корпус по умолчанию прямой: [torso] — направление от таза к плечам. Если задан [upperTorso],
 * [torso] — нижняя половина позвоночника, [upperTorso] — верхняя: так видны прогиб и антипрогиб («кошка»).
 */
data class Pose(
    val torso: Double,
    val neck: Double,
    val upperArm: Double,
    val foreArm: Double,
    val thigh: Double,
    val shin: Double,
    val foot: Double,
    val upperArm2: Double? = null,
    val foreArm2: Double? = null,
    val thigh2: Double? = null,
    val shin2: Double? = null,
    val foot2: Double? = null,
    val upperTorso: Double? = null,
    /** 0 — вид сбоку, 1 — вид спереди (плечи и таз разведены в ширину): позы с ногами в стороны. */
    val front: Double = 0.0,
    /** Масштаб длины позвоночника — для поз, где корпус виден в перспективе. */
    val spineScale: Double = 1.0,
) {
    val chest: Double get() = upperTorso ?: torso

    val farUpperArm: Double get() = upperArm2 ?: upperArm
    val farForeArm: Double get() = foreArm2 ?: foreArm
    val farThigh: Double get() = thigh2 ?: thigh
    val farShin: Double get() = shin2 ?: shin
    val farFoot: Double get() = foot2 ?: foot

    /** Все 13 углов с подставленными вторыми конечностями и верхом корпуса — для интерполяции и подгонки. */
    fun toList(): List<Double> = listOf(
        torso, neck, upperArm, foreArm, thigh, shin, foot,
        farUpperArm, farForeArm, farThigh, farShin, farFoot, chest,
    )

    fun get(param: PoseParam): Double = toList()[param.ordinal]

    /**
     * Меняет указанные углы. Незаданные вторые рука и нога остаются незаданными —
     * то есть продолжают повторять основные, если меняются основные.
     */
    fun with(changes: Map<PoseParam, Double>): Pose = Pose(
        torso = changes[PoseParam.TORSO] ?: torso,
        neck = changes[PoseParam.NECK] ?: neck,
        upperArm = changes[PoseParam.UPPER_ARM] ?: upperArm,
        foreArm = changes[PoseParam.FORE_ARM] ?: foreArm,
        thigh = changes[PoseParam.THIGH] ?: thigh,
        shin = changes[PoseParam.SHIN] ?: shin,
        foot = changes[PoseParam.FOOT] ?: foot,
        upperArm2 = changes[PoseParam.UPPER_ARM2] ?: upperArm2,
        foreArm2 = changes[PoseParam.FORE_ARM2] ?: foreArm2,
        thigh2 = changes[PoseParam.THIGH2] ?: thigh2,
        shin2 = changes[PoseParam.SHIN2] ?: shin2,
        foot2 = changes[PoseParam.FOOT2] ?: foot2,
        upperTorso = changes[PoseParam.UPPER_TORSO] ?: upperTorso,
    )

    companion object {
        fun fromList(v: List<Double>): Pose {
            require(v.size == 7 || v.size == 12 || v.size == 13) { "Pose needs 7, 12 or 13 angles, got ${v.size}" }
            if (v.size == 7) return Pose(v[0], v[1], v[2], v[3], v[4], v[5], v[6])
            return Pose(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v.getOrNull(12))
        }
    }
}

/** Параметры позы в порядке [Pose.toList]. */
enum class PoseParam { TORSO, NECK, UPPER_ARM, FORE_ARM, THIGH, SHIN, FOOT, UPPER_ARM2, FORE_ARM2, THIGH2, SHIN2, FOOT2, UPPER_TORSO }

/** Точки, которые должны касаться пола. */
enum class Contact { HAND, FOOT, FOOT2, KNEE, KNEE2, HEAD }

/**
 * Правило подгонки позы под пропорции модели: меняем [vary] на общую величину,
 * пока точки [a] и [b] не окажутся на одной высоте (обе на полу).
 */
data class FitRule(val a: Contact, val b: Contact, val vary: List<PoseParam>)

/** Асана из каталога. Сторона задаётся шагом последовательности, а не асаной. */
data class Asana(
    val id: String,
    val nameRu: String,
    val nameEn: String,
    val pose: Pose,
    /** Варианты опоры. Пусто — опора к этой асане не относится (стойки, наклоны). */
    val supports: Set<Support> = emptySet(),
    /** Нагрузка на суставы, 0..3. */
    val load: Map<Joint, Int> = emptyMap(),
    val inversion: Boolean = false,
    val level: Int = 0,
    /** Более щадящий вариант с теми же переходами — подставляется при противопоказании. */
    val saferAlternative: String? = null,
    /** Подсказки по технике, по порядку важности. */
    val cuesRu: List<String> = emptyList(),
    /** Подробное описание позы своими словами по тексту методики. */
    val descriptionRu: String? = null,
    /** Описание по-английски. */
    val descriptionEn: String? = null,
    /** Санскритское название, если есть. */
    val sanskrit: String? = null,
    /** Как подогнать позу под пропорции модели, чтобы опоры стояли на полу. */
    val fit: FitRule? = null,
    /** Замена для каждого сустава: похожая поза из любого сета, где этот сустав не нагружен. */
    val alternatives: Map<Joint, String> = emptyMap(),
    /** Поза объёмной марионетки из атласа (эмулятор); null — только схема. */
    val figure: FigureRef? = null,
)

/** Ссылка на позу в эмуляторе атласа: id позы, отражение (другая сторона) и положение кистей. */
data class FigureRef(val pose: String, val mirror: Boolean = false, val hands: HandShape? = null)

/** Положение кистей и пальцев, если оно важно для позы. */
enum class HandShape(val js: String) {
    /** Пальцы в замке — переплетены (перед собой, за спиной, за головой). */
    LOCK("lock"),

    /** Ладони вместе — анджали-мудра. */
    PRAYER("namaste"),
}

/**
 * Шаг последовательности. Движение (вход в асану) может занимать одну или несколько фаз дыхания,
 * удержание — любое число фаз. Схемы берутся из методики для каждой асаны отдельно.
 */
data class Step(
    val asanaId: String,
    val enter: List<Breath> = listOf(Breath.EXHALE),
    val hold: List<Breath> = DEFAULT_HOLD,
    /** Можно добавить циклы удержания кнопкой «ещё дыхание». */
    val extraCycles: Boolean = true,
    /** В этой позе методика предлагает «дыхание металлической собаки». */
    val metalDog: Boolean = false,
    /** Название шага, если оно уточняет асану («поворот влево», «правая нога вверх»). */
    val titleRu: String? = null,
    /** Подсказка именно для этого шага последовательности. */
    val cueRu: String? = null,
    /** То же по-английски (для английского интерфейса). */
    val titleEn: String? = null,
    val cueEn: String? = null,
) {
    init {
        require(enter.isNotEmpty()) { "Step $asanaId: movement needs at least one breath phase" }
    }

    companion object {
        val DEFAULT_HOLD = listOf(Breath.INHALE, Breath.EXHALE, Breath.INHALE)
    }
}

/** Блок — именованный кусок последовательности: стандартный вход, виньяса, внутреннее кольцо… */
/** Блок шагов; [titleRu]/[titleEn] — название раздела книги (вход, связка, кольцо…), если оно есть. */
data class Block(val id: String, val steps: List<Step>, val titleRu: String? = null, val titleEn: String? = null) {
    init {
        require(steps.isNotEmpty()) { "Block $id is empty" }
    }
}

/** Слот для дополнительного элемента: вставляется сразу после блока [afterItemIndex] в последовательности. */
data class Slot(
    val id: String,
    val blockId: String,
    val afterItemIndex: Int,
    val minLevel: Int = 0,
)

/** Ссылка на блок внутри последовательности. */
data class BlockRef(val blockId: String, val side: Side = Side.NONE)

/** Последовательность (сет): Сурья Намаскар, Чандра Намаскар, короткие сессии. */
data class SequenceDef(
    val id: String,
    val nameRu: String,
    val nameEn: String,
    val items: List<BlockRef>,
    val slots: List<Slot> = emptyList(),
    /** Блок стандартного входа/выхода — пропускается при стыковке сетов. */
    val entryBlockId: String? = null,
    val exitBlockId: String? = null,
)

/** Всё, что знает приложение о методике. */
data class Catalog(
    val asanas: Map<String, Asana>,
    val blocks: Map<String, Block>,
    val transitions: TransitionGraph,
) {
    fun asana(id: String): Asana = asanas[id] ?: error("Unknown asana: $id")
    fun block(id: String): Block = blocks[id] ?: error("Unknown block: $id")
}

/** Допустимые переходы между асанами (из → в). */
class TransitionGraph(edges: Set<Pair<String, String>>) {
    private val edges: Set<Pair<String, String>> = edges.toSet()

    fun allows(from: String, to: String): Boolean = (from to to) in edges

    fun next(from: String): Set<String> = edges.filter { it.first == from }.map { it.second }.toSet()

    val size: Int get() = edges.size

    operator fun plus(other: TransitionGraph): TransitionGraph = TransitionGraph(edges + other.edges)

    companion object {
        /** Граф из канонических блоков: каждая пара соседних шагов — допустимый переход. */
        fun fromBlocks(blocks: Collection<Block>): TransitionGraph {
            val e = mutableSetOf<Pair<String, String>>()
            blocks.forEach { b -> b.steps.zipWithNext { a, c -> e += a.asanaId to c.asanaId } }
            return TransitionGraph(e)
        }

        fun of(vararg pairs: Pair<String, String>): TransitionGraph = TransitionGraph(pairs.toSet())
    }
}
