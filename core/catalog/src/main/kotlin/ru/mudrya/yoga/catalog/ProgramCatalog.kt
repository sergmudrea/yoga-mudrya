package ru.mudrya.yoga.catalog

import ru.mudrya.yoga.engine.Goal
import ru.mudrya.yoga.engine.Level
import ru.mudrya.yoga.engine.UserProfile
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.model.Injury

/**
 * Программы на 14–30 дней: на каждый день — один сет из библиотеки (или день отдыха).
 * День программы идёт по календарю от старта; день засчитан, если в этот день завершён сет дня
 * (в день отдыха — всегда). Длина каждого сета подгоняется под выбранные минуты (SessionFit).
 */
object ProgramCatalog {

    data class Program(
        val id: String,
        val nameRu: String,
        val nameEn: String,
        val hintRu: String,
        val hintEn: String,
        /** Сет на каждый день; null — отдых. */
        val days: List<String?>,
    ) {
        val length: Int get() = days.size
    }

    /** Программа «Путь 8 недель» по кругам «Солнце» и «Луна» — отдельная логика (Path8). */
    const val PATH8 = "path8"

    private val R: String? = null

    private fun weeks(week: List<String?>, total: Int): List<String?> = List(total) { week[it % week.size] }

    val programs: List<Program> = listOf(
        Program(
            "prog_start", "Старт с нуля: 14 дней", "Start from zero: 14 days",
            "Мягкое начало: утро, спина, суставы, гибкость и сон — по 10 минут в день.",
            "A gentle start: morning, back, joints, flexibility and sleep — 10 minutes a day.",
            listOf("th_morning", "th_back_relief", "th_joints", R, "th_morning", "th_flex", "th_calm",
                "th_back_strong", "th_hips", R, "at_sn", "th_balance", "th_morning", "th_sleep"),
        ),
        Program(
            "prog_back", "Спина без боли за 21 день", "Back without pain in 21 days",
            "Разгрузить поясницу, укрепить мышцы спины, освободить шею и выпрямить осанку.",
            "Unload the lower back, strengthen the back muscles, free the neck and straighten your posture.",
            weeks(listOf("th_back_relief", "th_neck", "th_back_strong", R, "th_back_relief", "th_posture", "th_calm"), 21),
        ),
        Program(
            "prog_flex", "Гибкость за 30 дней", "Flexibility in 30 days",
            "Каждый день чуть глубже: наклоны, бёдра, суставы. Цель — свободно достать до пола.",
            "A little deeper every day: forward bends, hips, joints. The goal is to touch the floor with ease.",
            weeks(listOf("th_flex", "th_hips", "th_joints", R, "th_flex", "th_hips", "th_morning"), 30),
        ),
        Program(
            "prog_slim", "Стройность за 30 дней", "Slim and toned in 30 days",
            "Динамичные сеты на всё тело, выносливость и баланс. Лучше утром, до еды.",
            "Dynamic full-body sets, endurance and balance. Best in the morning, before eating.",
            weeks(listOf("th_slim", "th_endurance", "th_strength", R, "th_slim", "bk_mk", "th_balance"), 30),
        ),
        Program(
            "prog_strength", "Сильное тело за 30 дней", "Strong body in 30 days",
            "Сила рук, ног и корпуса: стоячие позы, упоры, балансы. Для тех, у кого есть опыт.",
            "Arm, leg and core strength: standing poses, planks, balances. For those with some experience.",
            weeks(listOf("th_strength", "bk_v", "th_endurance", R, "bk_pz", "th_strength", "th_balance"), 30),
        ),
        Program(
            "prog_morning", "Бодрое утро: 21 день", "Energising mornings: 21 days",
            "Короткая практика сразу после пробуждения — привычка, которая держит в тонусе весь день.",
            "A short practice right after waking up — a habit that keeps you energised all day.",
            weeks(listOf("th_morning", "at_sn", "th_morning", "bk_mk", "th_morning", "at_sn", R), 21),
        ),
        Program(
            "prog_calm", "Спокойствие и сон: 21 день", "Calm and sleep: 21 days",
            "Вечерние практики: снять напряжение, расслабить шею и живот, легко уснуть.",
            "Evening practices: release tension, relax the neck and belly, fall asleep easily.",
            weeks(listOf("th_calm", "th_sleep", "th_digest", "th_calm", "th_neck", "th_sleep", R), 21),
        ),
    )

    fun program(id: String?): Program? = programs.firstOrNull { it.id == id }

    /** Все сеты программ (для проверки каталога). */
    val allSets: Set<String> get() = programs.flatMap { it.days.filterNotNull() }.toSet()

    data class ProgramDay(
        /** Номер дня с нуля. */
        val index: Int,
        /** Сет дня; null — отдых. */
        val setId: String?,
        /** Программа пройдена (все дни позади). */
        val finished: Boolean,
        /** Сколько прошедших и сегодняшних дней засчитано. */
        val doneDays: Int,
        /** Отметки по дням: true — засчитан, false — пропущен, null — ещё впереди. */
        val marks: List<Boolean?>,
    )

    /** День программы на [today]. */
    fun today(p: Program, start: Long, today: Long, state: UserState): ProgramDay {
        val offset = (today - start).coerceAtLeast(0)
        val index = offset.coerceAtMost((p.length - 1).toLong()).toInt()
        val marks = List(p.length) { i ->
            val day = start + i
            when {
                day > today -> null
                isDone(p, i, day, state) -> true
                day == today -> null
                else -> false
            }
        }
        return ProgramDay(index, p.days[index], finished = offset >= p.length, doneDays = marks.count { it == true }, marks = marks)
    }

    /** Засчитан ли день программы: в этот день завершён сет дня; день отдыха засчитан всегда. */
    fun isDone(p: Program, index: Int, day: Long, state: UserState): Boolean {
        val set = p.days.getOrNull(index) ?: return true
        return state.sessions.any { it.localDay == day && it.completed && it.sequenceId == set }
    }

    /** Программа по ответам онбординга: травма поясницы — спина, иначе главная цель и уровень. */
    fun recommend(profile: UserProfile): Program {
        val id = when {
            Injury.LUMBAR in profile.injuries -> "prog_back"
            profile.level == Level.BEGINNER && profile.goals.size != 1 -> "prog_start"
            Goal.SHAPE in profile.goals -> "prog_slim"
            Goal.STRENGTH in profile.goals -> if (profile.level == Level.BEGINNER) "prog_slim" else "prog_strength"
            Goal.JOINTS in profile.goals -> "prog_flex"
            Goal.CALM in profile.goals -> "prog_calm"
            Goal.YOUTH in profile.goals -> "prog_morning"
            else -> "prog_start"
        }
        return program(id)!!
    }
}
