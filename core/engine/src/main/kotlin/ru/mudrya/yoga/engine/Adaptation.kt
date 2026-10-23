package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.model.Joint
import ru.mudrya.yoga.model.Support

enum class Feedback { EASY, OK, HARD }

/** Параметры, которые движок переносит из сессии в сессию. */
data class SessionParams(
    val rounds: Int,
    val support: Support,
    val enabledSlots: List<String>,
    val phaseMs: Long,
    val easyStreak: Int = 0,
    val okCount: Int = 0,
    /** Зоны, нагрузку на которые временно снижаем, и до какой сессии. */
    val easedJoints: Set<Joint> = emptySet(),
)

data class AdaptationLimits(
    val minRounds: Int = 2,
    val maxRounds: Int = 12,
    val minPhaseMs: Long = 3_000,
    val maxPhaseMs: Long = 9_000,
    val phaseStepMs: Long = 500,
    val easyStreakForSlowerBreath: Int = 3,
)

/**
 * Подстройка после финиша: «легко / в самый раз / тяжело» → параметры следующей сессии.
 */
class Adaptation(private val limits: AdaptationLimits = AdaptationLimits()) {

    fun next(
        current: SessionParams,
        feedback: Feedback,
        usedMetalDog: Boolean,
        availableSlots: List<String>,
        injuries: Set<Injury>,
        problemZones: Set<Joint> = emptySet(),
    ): SessionParams {
        val adapted = when (feedback) {
            Feedback.EASY -> easier(current, usedMetalDog, availableSlots, injuries)
            Feedback.OK -> {
                val ok = current.okCount + 1
                val rounds = if (ok % 3 == 0) (current.rounds + 1).coerceAtMost(limits.maxRounds) else current.rounds
                current.copy(rounds = rounds, okCount = ok, easyStreak = 0)
            }
            Feedback.HARD -> current.copy(
                rounds = (current.rounds - 2).coerceAtLeast(limits.minRounds),
                enabledSlots = emptyList(),
                phaseMs = (current.phaseMs - limits.phaseStepMs).coerceAtLeast(limits.minPhaseMs),
                easyStreak = 0,
                okCount = 0,
                support = if (current.support == Support.FINGERS) Support.PALMS else current.support,
            )
        }
        return adapted.copy(easedJoints = problemZones)
    }

    private fun easier(c: SessionParams, usedMetalDog: Boolean, slots: List<String>, injuries: Set<Injury>): SessionParams {
        var rounds = c.rounds
        var enabled = c.enabledSlots
        if (rounds + 2 <= limits.maxRounds) {
            rounds += 2
        } else {
            slots.firstOrNull { it !in enabled }?.let { enabled = enabled + it }
        }

        val support = if (Injury.WRISTS in injuries) {
            Support.FISTS
        } else {
            when (c.support) {
                Support.FISTS -> Support.PALMS
                Support.PALMS -> Support.FINGERS
                Support.FINGERS -> Support.FINGERS
            }
        }

        var streak = c.easyStreak + 1
        var phase = c.phaseMs
        if (streak >= limits.easyStreakForSlowerBreath && !usedMetalDog) {
            phase = (phase + limits.phaseStepMs).coerceAtMost(limits.maxPhaseMs)
            streak = 0
        }
        return c.copy(rounds = rounds, enabledSlots = enabled, support = support, phaseMs = phase, easyStreak = streak, okCount = 0)
    }
}
