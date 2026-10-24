package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Asana
import ru.mudrya.yoga.model.Breath
import ru.mudrya.yoga.model.Catalog
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.model.Joint
import ru.mudrya.yoga.model.SequenceDef
import ru.mudrya.yoga.model.Side
import ru.mudrya.yoga.model.Step
import ru.mudrya.yoga.model.Support

/** Ограничения пользователя, влияющие на сборку сессии. */
data class Constraints(
    val injuries: Set<Injury> = emptySet(),
    val level: Int = 0,
)

/** Что пользователь выбрал на карточке сессии. */
data class BuildRequest(
    val sequence: SequenceDef,
    val rounds: Int,
    val support: Support,
    val enabledSlots: Set<String> = emptySet(),
    val constraints: Constraints = Constraints(),
    /** Промежуточное расслабление после каждого N-го круга (0 — без расслаблений). */
    val relaxEvery: Int = 0,
)

/** Шаг готовой сессии: асана уже с учётом замен, стороны и опоры. */
data class SessionStep(
    val asana: Asana,
    val side: Side,
    val support: Support?,
    val enter: List<Breath>,
    val hold: List<Breath>,
    val extraCycles: Boolean,
    val round: Int,
    val metalDog: Boolean = false,
    val titleRu: String? = null,
    val cueRu: String? = null,
) {
    /** Что показывать заголовком: уточнённое название шага или название асаны. */
    val title: String get() = titleRu ?: asana.nameRu
}

data class Session(
    val sequenceId: String,
    val rounds: Int,
    val steps: List<SessionStep>,
    /** Номера кругов (с 1), после которых идёт промежуточное расслабление. */
    val relaxAfterRounds: Set<Int>,
    /** Условная нагрузка на суставы за всю сессию. */
    val load: Map<Joint, Double>,
)

class SessionBuildException(message: String) : IllegalStateException(message)

/**
 * Собирает плоскую сессию из последовательности:
 * блоки → стороны → слоты → замены по противопоказаниям → опоры → проверка переходов → круги.
 */
class SessionBuilder(private val catalog: Catalog) {

    fun build(req: BuildRequest): Session {
        require(req.rounds >= 1) { "rounds must be >= 1" }

        val round = oneRound(req)
        validateTransitions(round.map { it.asana.id }, wrapAround = req.rounds > 1)

        val steps = (1..req.rounds).flatMap { r -> round.map { it.copy(round = r) } }
        val relax = if (req.relaxEvery > 0) {
            (1 until req.rounds).filter { it % req.relaxEvery == 0 }.toSet()
        } else {
            emptySet()
        }
        return Session(
            sequenceId = req.sequence.id,
            rounds = req.rounds,
            steps = steps,
            relaxAfterRounds = relax,
            load = loadOf(steps),
        )
    }

    /** Один круг без повторов. */
    internal fun oneRound(req: BuildRequest): List<SessionStep> {
        val seq = req.sequence
        val slotsByItem = seq.slots
            .filter { it.id in req.enabledSlots && it.minLevel <= req.constraints.level }
            .groupBy { it.afterItemIndex }

        val raw = mutableListOf<Pair<Step, Side>>()
        seq.items.forEachIndexed { index, ref ->
            catalog.block(ref.blockId).steps.forEach { raw += it to ref.side }
            slotsByItem[index].orEmpty().forEach { slot ->
                catalog.block(slot.blockId).steps.forEach { raw += it to ref.side }
            }
        }

        return raw.mapNotNull { (step, side) ->
            val asana = resolveAsana(catalog.asana(step.asanaId), req.constraints) ?: return@mapNotNull null
            SessionStep(
                asana = asana,
                side = side,
                support = resolveSupport(asana, req.support, req.constraints),
                enter = step.enter,
                hold = step.hold,
                extraCycles = step.extraCycles,
                round = 1,
                metalDog = step.metalDog,
                titleRu = step.titleRu,
                cueRu = step.cueRu,
            )
        }
    }

    /** Возвращает саму асану, её щадящую замену или null, если асану нужно убрать. */
    internal fun resolveAsana(asana: Asana, c: Constraints): Asana? {
        var current = asana
        repeat(MAX_REPLACEMENTS) {
            if (!isContraindicated(current, c)) return current
            val alt = current.saferAlternative ?: return null
            current = catalog.asana(alt)
        }
        return if (isContraindicated(current, c)) null else current
    }

    internal fun resolveSupport(asana: Asana, requested: Support, c: Constraints): Support? {
        if (asana.supports.isEmpty()) return null
        val wanted = if (Injury.WRISTS in c.injuries) Support.FISTS else requested
        val preference = listOf(wanted, Support.FISTS, Support.PALMS, Support.FINGERS)
        return preference.first { it in asana.supports }
    }

    private fun validateTransitions(ids: List<String>, wrapAround: Boolean) {
        ids.zipWithNext().forEach { (a, b) ->
            if (!catalog.transitions.allows(a, b)) throw SessionBuildException("No transition $a -> $b")
        }
        if (wrapAround && ids.size > 1 && !catalog.transitions.allows(ids.last(), ids.first())) {
            throw SessionBuildException("No transition between rounds ${ids.last()} -> ${ids.first()}")
        }
    }

    companion object {
        private const val MAX_REPLACEMENTS = 3

        fun isContraindicated(asana: Asana, c: Constraints): Boolean {
            if (asana.level > c.level) return true
            if (Injury.NECK in c.injuries && asana.inversion) return true
            return c.injuries.any { injury ->
                // Запястья решаются опорой, а не заменой асаны.
                injury != Injury.WRISTS && (asana.load[injury.joint] ?: 0) >= 3
            }
        }

        /** Коэффициент нагрузки на запястья для опоры. */
        fun wristFactor(support: Support?): Double = when (support) {
            Support.FISTS -> 0.6
            Support.PALMS -> 1.0
            Support.FINGERS -> 1.3
            null -> 1.0
        }

        fun loadOf(steps: List<SessionStep>): Map<Joint, Double> {
            val result = Joint.entries.associateWith { 0.0 }.toMutableMap()
            steps.forEach { s ->
                val breaths = s.enter.size + s.hold.size
                s.asana.load.forEach { (joint, value) ->
                    val factor = if (joint == Joint.WRISTS) wristFactor(s.support) else 1.0
                    result[joint] = result.getValue(joint) + value * breaths * factor
                }
            }
            return result
        }
    }
}
