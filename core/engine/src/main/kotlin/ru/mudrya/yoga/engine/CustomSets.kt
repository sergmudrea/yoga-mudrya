package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Block
import ru.mudrya.yoga.model.BlockRef
import ru.mudrya.yoga.model.Breath
import ru.mudrya.yoga.model.Catalog
import ru.mudrya.yoga.model.SequenceDef
import ru.mudrya.yoga.model.Step

/** Сет, собранный пользователем в конструкторе: название и позы по порядку. */
data class CustomSet(val id: String, val name: String, val asanaIds: List<String>)

/**
 * Конструктор сетов: свой сет проигрывается как обычный. Дыхание и подсказки шага берутся
 * из первого места, где поза встречается в сетах каталога; новые позы библиотеки — вдох на вход
 * и три спокойных цикла удержания.
 */
object CustomSets {
    const val PREFIX = "my_"

    /** Сколько раз свой сет можно запустить без премиума. */
    const val FREE_RUNS = 5

    private val DEFAULT_HOLD = listOf(Breath.EXHALE, Breath.INHALE, Breath.EXHALE, Breath.INHALE, Breath.EXHALE, Breath.INHALE)

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
        val steps = set.asanaIds.filter { it in catalog.asanas }.map { id ->
            templates[id]?.copy(metalDog = false)
                ?: Step(id, enter = listOf(Breath.INHALE), hold = DEFAULT_HOLD)
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
