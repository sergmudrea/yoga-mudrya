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
    /** Проблемные зоны, отмеченные после последней практики: их тоже разгружаем заменами. */
    val eased: Set<Joint> = emptySet(),
    /** С какой нагрузки (0..3) поза считается опасной для больного места. */
    val threshold: Int = 2,
    /** Щадящий режим в дни менструации: без перевёрнутых поз и самых глубоких прогибов. */
    val cycle: Boolean = false,
) {
    val joints: Set<Joint> get() = injuries.map { it.joint }.toSet() + eased
}

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
    /** Асана из канонической последовательности — по ней проверяются переходы. */
    val originalAsanaId: String = asanaIdOrEmpty(asana),
    /** Если асана заменена — из-за какого сустава и что было в оригинале. */
    val replacedFor: Joint? = null,
    val replacedTitle: String? = null,
    /** Замена только из-за щадящего режима цикла (а не больного места). */
    val replacedForCycle: Boolean = false,
    val titleEn: String? = null,
    val cueEn: String? = null,
) {
    /** Что показывать заголовком: уточнённое название шага или название асаны. */
    val title: String get() = titleRu ?: asana.nameRu

    /** Заголовок на языке интерфейса. */
    fun title(english: Boolean): String = if (english) titleEn ?: asana.nameEn else title

    /** Подсказка шага на языке интерфейса. */
    fun cue(english: Boolean): String? = if (english) cueEn else cueRu
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

private fun asanaIdOrEmpty(a: Asana): String = a.id

class SessionBuildException(message: String) : IllegalStateException(message)

/**
 * Собирает плоскую сессию из последовательности:
 * блоки → стороны → слоты → замены по противопоказаниям → опоры → проверка переходов → круги.
 */
class SessionBuilder(private val catalog: Catalog) {

    fun build(req: BuildRequest): Session {
        require(req.rounds >= 1) { "rounds must be >= 1" }

        // Переходы проверяем по исходной последовательности: замена стоит на месте оригинала,
        // а убранная поза не рвёт цепочку методики.
        validateTransitions(rawSteps(req).map { it.first.asanaId }, wrapAround = req.rounds > 1)
        val round = oneRound(req)

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
        val raw = rawSteps(req)
        return raw.mapNotNull { (step, side) -> toSessionStep(step, side, req) }
    }

    /** Шаги круга из блоков и включённых слотов, до замен. */
    private fun rawSteps(req: BuildRequest): List<Pair<Step, Side>> {
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

        return raw
    }

    private fun toSessionStep(step: Step, side: Side, req: BuildRequest): SessionStep? {
        val original = catalog.asana(step.asanaId)
        val (asana, reason) = resolve(original, req.constraints) ?: return null
        return SessionStep(
                asana = asana,
                side = side,
                support = resolveSupport(asana, req.support, req.constraints),
                enter = step.enter,
                hold = step.hold,
                extraCycles = step.extraCycles,
                round = 1,
                metalDog = step.metalDog,
                // Название и подсказка шага относятся к оригиналу — у замены свои.
                titleRu = if (asana.id == original.id) step.titleRu else null,
                cueRu = if (asana.id == original.id) step.cueRu else null,
                titleEn = if (asana.id == original.id) step.titleEn else null,
                cueEn = if (asana.id == original.id) step.cueEn else null,
                originalAsanaId = original.id,
                replacedFor = reason,
                replacedTitle = if (asana.id == original.id) null else step.titleRu ?: original.nameRu,
                replacedForCycle = reason != null && req.constraints.cycle && problemJoint(original, req.constraints.copy(cycle = false)) == null,
            )
    }

    /** Возвращает саму асану, её щадящую замену или null, если асану нужно убрать. */
    internal fun resolveAsana(asana: Asana, c: Constraints): Asana? = resolve(asana, c)?.first

    /** Асана для сессии и сустав, из-за которого пришлось заменить (null — замены не было). */
    internal fun resolve(asana: Asana, c: Constraints): Pair<Asana, Joint?>? {
        var current = asana
        var reason: Joint? = null
        for (i in 0 until MAX_REPLACEMENTS) {
            if (current.level > c.level) {
                current = current.saferAlternative?.let(catalog::asana) ?: return null
                continue
            }
            val joint = problemJoint(current, c) ?: return current to reason
            if (reason == null) reason = joint
            val alt = current.alternatives[joint] ?: current.saferAlternative ?: return null
            current = catalog.asana(alt)
        }
        return if (isContraindicated(current, c)) null else current to reason
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

        /** В щадящем режиме цикла убираем прогибы с нагрузкой на поясницу от этого уровня. */
        const val CYCLE_LUMBAR = 3

        fun isContraindicated(asana: Asana, c: Constraints): Boolean =
            asana.level > c.level || problemJoint(asana, c) != null

        /** Какой больной сустав нагружает асана (null — можно делать). */
        fun problemJoint(asana: Asana, c: Constraints): Joint? {
            val joints = c.joints
            if (Joint.NECK in joints && asana.inversion) return Joint.NECK
            joints.firstOrNull { j ->
                val load = asana.load[j] ?: 0
                // Запястья в упорах сначала разгружаются опорой на кулаки; заменяем только самое тяжёлое.
                if (j == Joint.WRISTS && asana.supports.isNotEmpty()) load >= 3 else load >= c.threshold
            }?.let { return it }
            if (c.cycle) {
                // Замена перевёрнутой позы ищется как для шеи (замены по шее никогда не перевёрнуты),
                // глубокого прогиба — как для поясницы.
                if (asana.inversion) return Joint.NECK
                if ((asana.load[Joint.LUMBAR] ?: 0) >= CYCLE_LUMBAR) return Joint.LUMBAR
            }
            return null
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
