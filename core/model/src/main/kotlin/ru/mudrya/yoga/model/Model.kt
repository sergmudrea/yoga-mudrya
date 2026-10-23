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
 * Углы сегментов тела для векторной модели, в градусах.
 * 0° — вправо, 90° — вверх, вид сбоку, голова смотрит вправо.
 */
data class Pose(
    val torso: Double,
    val neck: Double,
    val upperArm: Double,
    val foreArm: Double,
    val thigh: Double,
    val shin: Double,
    val foot: Double,
) {
    fun toList(): List<Double> = listOf(torso, neck, upperArm, foreArm, thigh, shin, foot)

    companion object {
        fun fromList(v: List<Double>): Pose {
            require(v.size == 7) { "Pose needs 7 angles, got ${v.size}" }
            return Pose(v[0], v[1], v[2], v[3], v[4], v[5], v[6])
        }
    }
}

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
)

/** Шаг последовательности: вход в асану на одной фазе дыхания и удержание на нескольких. */
data class Step(
    val asanaId: String,
    val enter: Breath = Breath.EXHALE,
    val hold: List<Breath> = DEFAULT_HOLD,
    /** Можно добавить циклы удержания кнопкой «ещё дыхание». */
    val extraCycles: Boolean = true,
) {
    companion object {
        val DEFAULT_HOLD = listOf(Breath.INHALE, Breath.EXHALE, Breath.INHALE)
    }
}

/** Блок — именованный кусок последовательности: стандартный вход, виньяса, внутреннее кольцо… */
data class Block(val id: String, val steps: List<Step>) {
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
