package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Injury

/** Почему сет предложен — для подписи на экране. */
enum class AdviceReason { BACK, NECK, KNEES, WRISTS, GOAL_JOINTS, GOAL_YOUTH, GOAL_SHAPE, GOAL_STRENGTH, GOAL_CALM, WEIGHT, HEART, SITTING, BREATH, MOVEMENT_AGE }

data class ThemeAdvice(val themeId: String, val score: Int, val reason: AdviceReason)

/**
 * Подбирает сеты библиотеки под человека: ограничения из онбординга, цели, последний тест здоровья
 * (вес, талия, пульс, лестница, сидячие часы, дыхание) и возраст движения. Асаны, опасные при
 * ограничениях, движок и так заменяет или исключает в любом сете (Substitutions/Constraints);
 * здесь — какие сеты поставить первыми.
 */
object ThemeAdvisor {

    fun recommend(state: UserState, limit: Int = 5): List<ThemeAdvice> {
        val score = mutableMapOf<String, Int>()
        val why = mutableMapOf<String, Pair<Int, AdviceReason>>()
        fun add(id: String, pts: Int, r: AdviceReason) {
            score[id] = (score[id] ?: 0) + pts
            if ((why[id]?.first ?: Int.MIN_VALUE) < pts) why[id] = pts to r
        }
        val p = state.profile
        p?.injuries?.forEach {
            when (it) {
                Injury.LUMBAR -> { add("th_back_relief", 6, AdviceReason.BACK); add("th_posture", 2, AdviceReason.BACK) }
                Injury.NECK -> add("th_neck", 6, AdviceReason.NECK)
                Injury.KNEES -> add("th_knees", 6, AdviceReason.KNEES)
                Injury.WRISTS -> add("th_joints", 3, AdviceReason.WRISTS)
            }
        }
        p?.goals?.forEach {
            when (it) {
                Goal.JOINTS -> { add("th_joints", 4, AdviceReason.GOAL_JOINTS); add("th_hips", 2, AdviceReason.GOAL_JOINTS); add("th_flex", 2, AdviceReason.GOAL_JOINTS) }
                Goal.YOUTH -> { add("th_flex", 3, AdviceReason.GOAL_YOUTH); add("th_balance", 2, AdviceReason.GOAL_YOUTH); add("th_posture", 2, AdviceReason.GOAL_YOUTH) }
                Goal.SHAPE -> { add("th_slim", 4, AdviceReason.GOAL_SHAPE); add("th_endurance", 2, AdviceReason.GOAL_SHAPE) }
                Goal.STRENGTH -> { add("th_strength", 4, AdviceReason.GOAL_STRENGTH); add("th_back_strong", 2, AdviceReason.GOAL_STRENGTH) }
                Goal.CALM -> { add("th_calm", 4, AdviceReason.GOAL_CALM); add("th_sleep", 3, AdviceReason.GOAL_CALM) }
            }
        }
        state.health.maxByOrNull { it.atMs }?.let { h ->
            val bmi = if (h.heightCm != null && h.weightKg != null) HealthCheck.bmi(h.heightCm, h.weightKg) else null
            if (bmi != null && bmi >= 25) { add("th_slim", 3, AdviceReason.WEIGHT); add("th_endurance", 2, AdviceReason.WEIGHT) }
            val waistRisk = h.waistCm != null && h.heightCm != null && h.waistCm / h.heightCm >= 0.5
            if (waistRisk) { add("th_slim", 2, AdviceReason.WEIGHT); add("th_digest", 2, AdviceReason.WEIGHT) }
            val slowStairs = h.stairsSec != null && (h.stairsSec == 0 || h.stairsSec > 60)
            if ((h.restingHr ?: 0) > 80 || slowStairs) add("th_endurance", 4, AdviceReason.HEART)
            if ((h.sittingHours ?: 0) >= 6) { add("th_hips", 3, AdviceReason.SITTING); add("th_posture", 3, AdviceReason.SITTING); add("th_neck", 2, AdviceReason.SITTING) }
            if ((h.breathsPerMin ?: 0) > 20) { add("th_calm", 3, AdviceReason.BREATH); add("th_sleep", 2, AdviceReason.BREATH) }
        }
        state.tests.maxByOrNull { it.atMs }?.let { t ->
            if (t.movementAge > t.chronologicalAge + 3) {
                add("th_joints", 3, AdviceReason.MOVEMENT_AGE); add("th_balance", 2, AdviceReason.MOVEMENT_AGE); add("th_flex", 2, AdviceReason.MOVEMENT_AGE)
            }
        }
        // Новичку и при больной пояснице — не силовой сет первым.
        if (p?.level == Level.BEGINNER || Injury.LUMBAR in p?.injuries.orEmpty()) score["th_strength"]?.let { score["th_strength"] = it - 3 }
        return score.entries.filter { it.value > 0 }.sortedByDescending { it.value }.take(limit)
            .map { ThemeAdvice(it.key, it.value, why.getValue(it.key).second) }
    }
}
