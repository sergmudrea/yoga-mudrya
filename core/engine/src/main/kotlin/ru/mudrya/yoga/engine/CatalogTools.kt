package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Block
import ru.mudrya.yoga.model.Catalog
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.model.SequenceDef
import ru.mudrya.yoga.model.Support
import ru.mudrya.yoga.model.TransitionGraph

/** Построение графа переходов из канонических последовательностей методики. */
object GraphBuilder {

    /**
     * Ребро добавляется для каждой пары соседних шагов: внутри блока, на стыке блоков,
     * на входе и выходе каждого слота, между кругами, а также для замен (щадящая асана
     * наследует переходы исходной).
     */
    fun build(
        blocks: Map<String, Block>,
        sequences: Collection<SequenceDef>,
        alternatives: Map<String, String> = emptyMap(),
    ): TransitionGraph {
        val edges = mutableSetOf<Pair<String, String>>()
        fun link(a: String, b: String) {
            edges += a to b
        }
        fun firstOf(id: String) = blocks.getValue(id).steps.first().asanaId
        fun lastOf(id: String) = blocks.getValue(id).steps.last().asanaId

        blocks.values.forEach { b -> b.steps.zipWithNext { x, y -> link(x.asanaId, y.asanaId) } }

        sequences.forEach { seq ->
            seq.items.zipWithNext { x, y -> link(lastOf(x.blockId), firstOf(y.blockId)) }
            // Повтор кругов: конец сета переходит в его начало (и для сета из одного блока).
            if (seq.items.isNotEmpty()) link(lastOf(seq.items.last().blockId), firstOf(seq.items.first().blockId))
            seq.slots.forEach { slot ->
                val before = seq.items[slot.afterItemIndex].blockId
                val after = seq.items.getOrNull(slot.afterItemIndex + 1)?.blockId ?: seq.items.first().blockId
                link(lastOf(before), firstOf(slot.blockId))
                link(lastOf(slot.blockId), firstOf(after))
            }
        }

        // Замена наследует все рёбра исходной асаны — в обе стороны.
        val inherited = mutableSetOf<Pair<String, String>>()
        alternatives.forEach { (original, safer) ->
            edges.forEach { (a, b) ->
                if (a == original) inherited += safer to b
                if (b == original) inherited += a to safer
            }
        }
        edges += inherited
        // Цепочки из двух замен подряд (обе асаны заменены).
        alternatives.forEach { (o1, s1) ->
            alternatives.forEach { (o2, s2) -> if ((o1 to o2) in edges) edges += s1 to s2 }
        }
        return TransitionGraph(edges)
    }
}

/** Проблема каталога, найденная валидатором. */
data class CatalogProblem(val sequenceId: String, val case: String, val message: String)

/**
 * Проверяет, что каждая последовательность собирается при любой комбинации травм, опор и слотов.
 * Используется в тестах: «весь каталог собирается».
 */
object CatalogValidator {

    fun validate(catalog: Catalog, sequences: Collection<SequenceDef>, maxLevel: Int = 0): List<CatalogProblem> {
        val builder = SessionBuilder(catalog)
        val problems = mutableListOf<CatalogProblem>()
        val injurySets = Injury.entries.powerSet()

        sequences.forEach { seq ->
            val slotSets = seq.slots.map { it.id }.powerSet()
            for (level in 0..maxLevel) for (injuries in injurySets) for (support in Support.entries) for (slots in slotSets) {
                val case = "level=$level injuries=$injuries support=$support slots=$slots"
                try {
                    val s = builder.build(
                        BuildRequest(seq, rounds = 2, support = support, enabledSlots = slots, constraints = Constraints(injuries, level)),
                    )
                    if (s.steps.isEmpty()) problems += CatalogProblem(seq.id, case, "empty session")
                } catch (e: Exception) {
                    problems += CatalogProblem(seq.id, case, e.message ?: e.toString())
                }
            }
        }
        return problems
    }

    private fun <T> Collection<T>.powerSet(): List<Set<T>> =
        fold(listOf(emptySet())) { acc, item -> acc + acc.map { it + item } }
}
