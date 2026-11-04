package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Block
import ru.mudrya.yoga.model.BlockRef
import ru.mudrya.yoga.model.Breath
import ru.mudrya.yoga.model.Catalog
import ru.mudrya.yoga.model.SequenceDef
import ru.mudrya.yoga.model.Step

/** Сет, собранный пользователем в конструкторе: название, позы по порядку и сколько дыханий держать позу. */
data class CustomSet(
    val id: String,
    val name: String,
    val asanaIds: List<String>,
    val holdCycles: Int = CustomSets.DEFAULT_HOLD_CYCLES,
)

/**
 * Конструктор сетов: свой сет проигрывается как обычный и сам переходит от позы к позе.
 * Вход в позу и подсказки берутся из первого места, где поза встречается в сетах каталога
 * (у новых поз библиотеки — вдох на вход), удержание — столько дыхательных циклов, сколько
 * выбрано для сета ([CustomSet.holdCycles]).
 */
object CustomSets {
    const val PREFIX = "my_"

    /** Сколько раз свой сет можно запустить без премиума. */
    const val FREE_RUNS = 5

    const val DEFAULT_HOLD_CYCLES = 2
    const val MAX_HOLD = 10

    fun hold(cycles: Int): List<Breath> = List(cycles.coerceIn(1, MAX_HOLD)) { listOf(Breath.EXHALE, Breath.INHALE) }.flatten()

    fun isCustom(sequenceId: String): Boolean = sequenceId.startsWith(PREFIX)

    fun newId(nowMs: Long): String = PREFIX + nowMs.toString(36)

    /** Можно ли запустить свой сет: с премиумом всегда, без — первые [FREE_RUNS] раз. */
    fun canRun(premium: Boolean, runsUsed: Int): Boolean = premium || runsUsed < FREE_RUNS

    fun runsLeft(runsUsed: Int): Int = (FREE_RUNS - runsUsed).coerceAtLeast(0)

    fun sequence(set: CustomSet): SequenceDef = SequenceDef(set.id, set.name, set.name, listOf(BlockRef(set.id)))

    /** Шаги своего сета (позы, которых нет в каталоге, пропускаются); null — сет пуст. */
    fun block(set: CustomSet, catalog: Catalog): Block? {
        val templates = HashMap<String, Step>()
        catalog.blocks.values.forEach { b -> b.steps.forEach { st -> templates.putIfAbsent(st.asanaId, st) } }
        val hold = hold(set.holdCycles)
        val steps = set.asanaIds.filter { it in catalog.asanas }.map { id ->
            templates[id]?.copy(metalDog = false, hold = hold, extraCycles = false)
                ?: Step(id, enter = listOf(Breath.INHALE), hold = hold, extraCycles = false)
        }
        return if (steps.isEmpty()) null else Block(set.id, steps)
    }

    /** Каталог, в котором есть блок своего сета и переходы между его соседними позами. */
    fun catalogWith(catalog: Catalog, set: CustomSet): Catalog {
        val block = block(set, catalog) ?: return catalog
        val blocks = catalog.blocks + (set.id to block)
        return catalog.copy(
            blocks = blocks,
            transitions = catalog.transitions + GraphBuilder.build(mapOf(set.id to block), listOf(sequence(set))),
        )
    }

    /** Переставить позу [from] на место [to] (перетаскивание в конструкторе). */
    fun move(list: List<String>, from: Int, to: Int): List<String> {
        if (from !in list.indices || to !in list.indices || from == to) return list
        val m = list.toMutableList()
        val x = m.removeAt(from)
        m.add(to, x)
        return m
    }
}
