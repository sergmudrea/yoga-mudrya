package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.model.Joint
import ru.mudrya.yoga.model.Support

enum class Level { BEGINNER, EXPERIENCED, ADVANCED }

enum class Goal { JOINTS, YOUTH, SHAPE, STRENGTH, CALM }

/** Ответы онбординга. */
data class UserProfile(
    val sex: Sex,
    val age: Int,
    val goals: Set<Goal>,
    val level: Level,
    val injuries: Set<Injury>,
)

/** Одна практика. [localDay] — номер дня по местному времени (LocalDate.toEpochDay). */
data class SessionRecord(
    val startedAtMs: Long,
    val localDay: Long,
    val sequenceId: String,
    val rounds: Int,
    val durationMs: Long,
    val completed: Boolean,
    val feedback: Feedback?,
    val usedMetalDog: Boolean,
)

/** Результат теста возраста движения. */
data class MovementRecord(
    val atMs: Long,
    val localDay: Long,
    val chronologicalAge: Int,
    val movementAge: Int,
    val results: Map<MovementTest, Double>,
)

/** Ракурс камеры у марионетки: угол поворота вокруг фигуры, градусы. */
enum class CameraView(val yaw: Int) { SIDE(16), THREE_QUARTER(45), FRONT(80) }

/** Всё, что приложение хранит о пользователе. */
data class UserState(
    val profile: UserProfile? = null,
    val params: SessionParams = Plan.DEFAULT_PARAMS,
    val sessions: List<SessionRecord> = emptyList(),
    val tests: List<MovementRecord> = emptyList(),
    /** День начала «Пути 8 недель» (LocalDate.toEpochDay). */
    val planStartDay: Long? = null,
    /** Расслабление лёжа между кругами, секунды (0 — без расслабления). */
    val relaxSeconds: Int = 60,
    val settings: AppSettings = AppSettings(),
    val reminder: ReminderSettings = ReminderSettings(),
    /** Замеры веса и талии. */
    val body: List<BodyRecord> = emptyList(),
    /** День старта вызова «108 кругов», null — вызов не начат. */
    val challengeStart: Long? = null,
    /** Отметки цикла для щадящего режима. */
    val cycle: CycleSettings = CycleSettings(),
    /** Свои сеты из конструктора. */
    val customSets: List<CustomSet> = emptyList(),
    /** Сколько раз запускались свои сеты без премиума. */
    val customRuns: Int = 0,
    /** Свои сеты, вынесенные на главный экран. */
    val pinnedSets: List<String> = emptyList(),
    /** Анкеты здоровья (ИМТ, талия, пульс, лестница, сидячие часы). */
    val health: List<HealthRecord> = emptyList(),
) {
    val onboarded: Boolean get() = profile != null
}

/** Стартовый план и правила подстройки для полной Сурья Намаскар (длинный круг). */
object Plan {
    const val DEFAULT_PHASE_MS = 4_000L

    val DEFAULT_PARAMS = SessionParams(rounds = 1, support = Support.PALMS, enabledSlots = emptyList(), phaseMs = DEFAULT_PHASE_MS)

    /** Полный круг Сурьи — около 20 минут, поэтому круги прибавляются по одному. */
    val LIMITS = AdaptationLimits(minRounds = 1, maxRounds = 6, roundStep = 1)

    fun initial(profile: UserProfile): SessionParams {
        val wrists = Injury.WRISTS in profile.injuries
        return when (profile.level) {
            Level.BEGINNER -> SessionParams(1, if (wrists) Support.FISTS else Support.PALMS, emptyList(), 4_000)
            Level.EXPERIENCED -> SessionParams(1, if (wrists) Support.FISTS else Support.PALMS, emptyList(), 5_000)
            Level.ADVANCED -> SessionParams(2, if (wrists) Support.FISTS else Support.FINGERS, emptyList(), 6_000)
        }
    }

    /** Опора, которую можно выбрать при этих ограничениях. */
    fun allowedSupports(injuries: Set<Injury>): List<Support> =
        if (Injury.WRISTS in injuries) listOf(Support.FISTS) else Support.entries.toList()

    fun adapt(
        state: UserState,
        feedback: Feedback,
        usedMetalDog: Boolean,
        problemZones: Set<Joint>,
    ): SessionParams = Adaptation(LIMITS).next(
        current = state.params,
        feedback = feedback,
        usedMetalDog = usedMetalDog,
        availableSlots = emptyList(),
        injuries = state.profile?.injuries.orEmpty(),
        problemZones = problemZones,
    )
}

/** Настройки приложения. */
data class AppSettings(
    /** Короткий сигнал на смене вдоха и выдоха. */
    val sound: Boolean = true,
    /** Голосовое ведение: дыхание, названия поз, подсказки. */
    val voice: VoiceLevel = VoiceLevel.NAMES,
    /** Лёгкая вибрация на смене фазы. */
    val vibration: Boolean = false,
    /** Показывать практику на втором экране (ТВ), когда он подключён. */
    val tvOutput: Boolean = true,
    /** Объёмная марионетка из атласа вместо плоской схемы. */
    val figure3d: Boolean = true,
    /** Показ в плеере: подсказки, «далее», санскрит, полоса дыхания, крупный текст, ракурс камеры. */
    val showCues: Boolean = true,
    val showNext: Boolean = true,
    val showSanskrit: Boolean = true,
    val showBreath: Boolean = true,
    val largeText: Boolean = false,
    val camera: CameraView = CameraView.SIDE,
    /** Картинки поз в библиотеке и конструкторе. */
    val thumbnails: Boolean = true,
    /** Только для отладочной сборки: включить премиум без покупки, чтобы проверить закрытые сеты. */
    val debugPremium: Boolean = false,
)

/** Напоминание о практике: время и дни недели (1 — понедельник … 7 — воскресенье). */
data class ReminderSettings(
    val enabled: Boolean = false,
    val hour: Int = 8,
    val minute: Int = 0,
    val days: Set<Int> = setOf(1, 2, 3, 4, 5, 6, 7),
)

object Reminders {
    /** Ближайший момент напоминания строго после [now] или null, если напоминания выключены. */
    fun next(now: java.time.LocalDateTime, r: ReminderSettings): java.time.LocalDateTime? {
        if (!r.enabled || r.days.isEmpty()) return null
        val time = java.time.LocalTime.of(r.hour.coerceIn(0, 23), r.minute.coerceIn(0, 59))
        for (d in 0..7) {
            val date = now.toLocalDate().plusDays(d.toLong())
            val at = date.atTime(time)
            if (date.dayOfWeek.value in r.days && at.isAfter(now)) return at
        }
        return null
    }
}

enum class DayKind { SURYA, CHANDRA, REST, TEST }

/** День «Пути 8 недель». */
data class PathDay(val index: Int, val week: Int, val kind: DayKind, val finished: Boolean)

/**
 * «Путь 8 недель»: в неделе три дня Сурьи, два дня Чандры и два дня отдыха;
 * тест возраста движения — в первый день и затем каждые 14 дней (вместо практики этого дня).
 */
object Path8 {
    const val DAYS = 56
    private val WEEK = listOf(DayKind.SURYA, DayKind.CHANDRA, DayKind.SURYA, DayKind.REST, DayKind.CHANDRA, DayKind.SURYA, DayKind.REST)

    /** Какие сеты засчитываются за день Сурьи и за день Чандры. */
    val SURYA_SETS = setOf("surya", "at_sn")
    val CHANDRA_SETS = setOf("chandra", "at_cn")

    fun kindOf(index: Int): DayKind = when {
        index % 14 == 0 || index == DAYS - 1 -> DayKind.TEST
        else -> WEEK[index % 7]
    }

    /** Какой день пути сегодня. После восьми недель путь начинается заново. */
    fun today(start: Long, today: Long): PathDay {
        val i = ((today - start).coerceAtLeast(0) % DAYS).toInt()
        return PathDay(i, i / 7 + 1, kindOf(i), finished = today - start >= DAYS)
    }

    /** Сделан ли план дня: практика нужного сета или тест в этот день. */
    fun done(state: UserState, day: Long, kind: DayKind): Boolean = when (kind) {
        DayKind.SURYA -> state.sessions.any { it.localDay == day && it.completed && it.sequenceId in SURYA_SETS }
        DayKind.CHANDRA -> state.sessions.any { it.localDay == day && it.completed && it.sequenceId in CHANDRA_SETS }
        DayKind.TEST -> state.tests.any { it.localDay == day }
        DayKind.REST -> true
    }

    /** Тест пора повторить: прошло 14 дней с последнего. */
    fun testDue(state: UserState, today: Long): Boolean {
        val last = state.tests.maxOfOrNull { it.localDay } ?: return true
        return today - last >= 14
    }
}

/** Сводка для экрана «Прогресс». */
data class ProgressStats(
    val sessions: Int,
    val totalMinutes: Int,
    val currentStreak: Int,
    val bestStreak: Int,
    /** Минуты за последние 7 дней, от самого раннего к сегодняшнему. */
    val lastWeekMinutes: List<Int>,
    val firstMovementAge: Int?,
    val lastMovementAge: Int?,
) {
    companion object {
        fun of(state: UserState, today: Long): ProgressStats {
            val minutesByDay = state.sessions.groupBy { it.localDay }
                .mapValues { (_, list) -> list.sumOf { it.durationMs } }
            val days = state.sessions.filter { it.completed }.map { it.localDay }.toSortedSet()

            var best = 0
            var run = 0
            var prev: Long? = null
            for (d in days) {
                run = if (prev != null && d == prev + 1) run + 1 else 1
                best = maxOf(best, run)
                prev = d
            }
            // Серия не прерывается, пока не прошёл весь сегодняшний день.
            var current = 0
            var d = if (today in days) today else today - 1
            while (d in days) {
                current++
                d--
            }

            val tests = state.tests.sortedBy { it.atMs }
            return ProgressStats(
                sessions = state.sessions.count { it.completed },
                totalMinutes = (state.sessions.sumOf { it.durationMs } / 60_000).toInt(),
                currentStreak = current,
                bestStreak = best,
                lastWeekMinutes = (today - 6..today).map { ((minutesByDay[it] ?: 0L) / 60_000).toInt() },
                firstMovementAge = tests.firstOrNull()?.movementAge,
                lastMovementAge = tests.lastOrNull()?.movementAge,
            )
        }
    }
}

/**
 * Текстовый формат хранения: строки «ключ=значение». Без внешних библиотек, читается глазами,
 * лишние и битые строки пропускаются — обновление приложения не теряет прогресс.
 */
object UserStateCodec {
    const val VERSION = 1

    fun encode(s: UserState): String = buildString {
        line("v", VERSION.toString())
        s.profile?.let { p ->
            line("profile.sex", p.sex.name)
            line("profile.age", p.age.toString())
            line("profile.goals", p.goals.joinToString(",") { it.name })
            line("profile.level", p.level.name)
            line("profile.injuries", p.injuries.joinToString(",") { it.name })
        }
        with(s.params) {
            line("params.rounds", rounds.toString())
            line("params.support", support.name)
            line("params.slots", enabledSlots.joinToString(","))
            line("params.phaseMs", phaseMs.toString())
            line("params.easyStreak", easyStreak.toString())
            line("params.okCount", okCount.toString())
            line("params.eased", easedJoints.joinToString(",") { it.name })
        }
        s.sessions.forEach { r ->
            line(
                "session",
                listOf(r.startedAtMs, r.localDay, r.sequenceId, r.rounds, r.durationMs, r.completed, r.feedback?.name ?: "", r.usedMetalDog)
                    .joinToString(";"),
            )
        }
        s.planStartDay?.let { line("plan.start", it.toString()) }
        line("settings.relaxSeconds", s.relaxSeconds.toString())
        line("settings.sound", s.settings.sound.toString())
        line("settings.voice", s.settings.voice.name)
        line("settings.vibration", s.settings.vibration.toString())
        line("settings.tv", s.settings.tvOutput.toString())
        line("settings.figure3d", s.settings.figure3d.toString())
        line("settings.showCues", s.settings.showCues.toString())
        line("settings.showNext", s.settings.showNext.toString())
        line("settings.showSanskrit", s.settings.showSanskrit.toString())
        line("settings.showBreath", s.settings.showBreath.toString())
        line("settings.largeText", s.settings.largeText.toString())
        line("settings.camera", s.settings.camera.name)
        line("settings.thumbnails", s.settings.thumbnails.toString())
        line("settings.debugPremium", s.settings.debugPremium.toString())
        line("reminder.enabled", s.reminder.enabled.toString())
        line("reminder.time", "${s.reminder.hour}:${s.reminder.minute}")
        line("reminder.days", s.reminder.days.sorted().joinToString(","))
        s.body.forEach { b -> line("body", listOf(b.localDay, b.weightKg ?: "", b.waistCm ?: "").joinToString(";")) }
        s.challengeStart?.let { line("challenge108.start", it.toString()) }
        line("cycle.enabled", s.cycle.enabled.toString())
        s.cycle.lastStart?.let { line("cycle.start", it.toString()) }
        s.cycle.lastEnd?.let { line("cycle.end", it.toString()) }
        line("cycle.days", s.cycle.maxDays.toString())
        line("custom.runs", s.customRuns.toString())
        line("custom.pinned", s.pinnedSets.joinToString(","))
        s.customSets.forEach { c ->
            line("custom", listOf(c.id, java.net.URLEncoder.encode(c.name, "UTF-8"), c.asanaIds.joinToString(","), c.holdCycles).joinToString(";"))
        }
        s.health.forEach { h ->
            line(
                "health",
                listOf(h.atMs, h.localDay, h.heightCm ?: "", h.weightKg ?: "", h.waistCm ?: "", h.restingHr ?: "", h.stairsSec ?: "", h.sittingHours ?: "")
                    .joinToString(";"),
            )
        }
        s.tests.forEach { t ->
            line(
                "test",
                listOf(t.atMs, t.localDay, t.chronologicalAge, t.movementAge, t.results.entries.joinToString(",") { "${it.key.name}:${it.value}" })
                    .joinToString(";"),
            )
        }
    }

    fun decode(text: String): UserState {
        val single = mutableMapOf<String, String>()
        val sessions = mutableListOf<SessionRecord>()
        val tests = mutableListOf<MovementRecord>()
        val body = mutableListOf<BodyRecord>()
        val custom = mutableListOf<CustomSet>()
        val health = mutableListOf<HealthRecord>()
        text.lineSequence().forEach { raw ->
            val i = raw.indexOf('=')
            if (i <= 0) return@forEach
            val key = raw.substring(0, i).trim()
            val value = raw.substring(i + 1).trim()
            when (key) {
                "session" -> parseSession(value)?.let(sessions::add)
                "test" -> parseTest(value)?.let(tests::add)
                "body" -> parseBody(value)?.let(body::add)
                "custom" -> parseCustom(value)?.let(custom::add)
                "health" -> parseHealth(value)?.let(health::add)
                else -> single[key] = value
            }
        }
        return UserState(
            profile = parseProfile(single),
            params = parseParams(single),
            sessions = sessions,
            tests = tests,
            planStartDay = single["plan.start"]?.toLongOrNull(),
            relaxSeconds = single["settings.relaxSeconds"]?.toIntOrNull()?.coerceIn(0, 600) ?: 60,
            settings = AppSettings(
                sound = single["settings.sound"]?.toBooleanStrictOrNull() ?: true,
                voice = single["settings.voice"]?.let { v -> VoiceLevel.entries.firstOrNull { it.name == v } } ?: VoiceLevel.NAMES,
                vibration = single["settings.vibration"]?.toBooleanStrictOrNull() ?: false,
                tvOutput = single["settings.tv"]?.toBooleanStrictOrNull() ?: true,
                figure3d = single["settings.figure3d"]?.toBooleanStrictOrNull() ?: true,
                showCues = single["settings.showCues"]?.toBooleanStrictOrNull() ?: true,
                showNext = single["settings.showNext"]?.toBooleanStrictOrNull() ?: true,
                showSanskrit = single["settings.showSanskrit"]?.toBooleanStrictOrNull() ?: true,
                showBreath = single["settings.showBreath"]?.toBooleanStrictOrNull() ?: true,
                largeText = single["settings.largeText"]?.toBooleanStrictOrNull() ?: false,
                camera = single["settings.camera"]?.let { v -> CameraView.entries.firstOrNull { it.name == v } } ?: CameraView.SIDE,
                thumbnails = single["settings.thumbnails"]?.toBooleanStrictOrNull() ?: true,
                debugPremium = single["settings.debugPremium"]?.toBooleanStrictOrNull() ?: false,
            ),
            reminder = parseReminder(single),
            body = body.sortedBy { it.localDay },
            challengeStart = single["challenge108.start"]?.toLongOrNull(),
            customSets = custom,
            customRuns = single["custom.runs"]?.toIntOrNull()?.coerceAtLeast(0) ?: 0,
            pinnedSets = single["custom.pinned"]?.split(',')?.filter { it.startsWith(CustomSets.PREFIX) }.orEmpty(),
            health = health.sortedBy { it.atMs },
            cycle = CycleSettings(
                enabled = single["cycle.enabled"]?.toBooleanStrictOrNull() ?: false,
                lastStart = single["cycle.start"]?.toLongOrNull(),
                lastEnd = single["cycle.end"]?.toLongOrNull(),
                maxDays = single["cycle.days"]?.toIntOrNull()?.coerceIn(2, 10) ?: CycleSettings.DEFAULT_DAYS,
            ),
        )
    }

    private fun StringBuilder.line(k: String, v: String) {
        append(k).append('=').append(v.replace('\n', ' ')).append('\n')
    }

    private inline fun <reified E : Enum<E>> enumOrNull(s: String?): E? = s?.let { v -> enumValues<E>().firstOrNull { it.name == v } }

    private inline fun <reified E : Enum<E>> enumSet(s: String?): Set<E> =
        s.orEmpty().split(',').mapNotNull { enumOrNull<E>(it.trim()) }.toSet()

    private fun parseProfile(m: Map<String, String>): UserProfile? {
        val sex = enumOrNull<Sex>(m["profile.sex"]) ?: return null
        val age = m["profile.age"]?.toIntOrNull()?.takeIf { it in 14..100 } ?: return null
        val level = enumOrNull<Level>(m["profile.level"]) ?: return null
        return UserProfile(sex, age, enumSet(m["profile.goals"]), level, enumSet(m["profile.injuries"]))
    }

    private fun parseParams(m: Map<String, String>): SessionParams {
        val d = Plan.DEFAULT_PARAMS
        return SessionParams(
            rounds = m["params.rounds"]?.toIntOrNull()?.coerceIn(Plan.LIMITS.minRounds, Plan.LIMITS.maxRounds) ?: d.rounds,
            support = enumOrNull<Support>(m["params.support"]) ?: d.support,
            enabledSlots = m["params.slots"].orEmpty().split(',').map { it.trim() }.filter { it.isNotEmpty() },
            phaseMs = m["params.phaseMs"]?.toLongOrNull()?.coerceIn(2_000, 10_000) ?: d.phaseMs,
            easyStreak = m["params.easyStreak"]?.toIntOrNull() ?: 0,
            okCount = m["params.okCount"]?.toIntOrNull() ?: 0,
            easedJoints = enumSet(m["params.eased"]),
        )
    }

    private fun parseReminder(m: Map<String, String>): ReminderSettings {
        val d = ReminderSettings()
        val time = m["reminder.time"]?.split(':')
        return ReminderSettings(
            enabled = m["reminder.enabled"]?.toBooleanStrictOrNull() ?: d.enabled,
            hour = time?.getOrNull(0)?.toIntOrNull()?.coerceIn(0, 23) ?: d.hour,
            minute = time?.getOrNull(1)?.toIntOrNull()?.coerceIn(0, 59) ?: d.minute,
            days = m["reminder.days"]?.split(',')?.mapNotNull { it.trim().toIntOrNull()?.takeIf { x -> x in 1..7 } }?.toSet() ?: d.days,
        )
    }

    private fun parseSession(v: String): SessionRecord? {
        val p = v.split(';')
        if (p.size < 8) return null
        return SessionRecord(
            startedAtMs = p[0].toLongOrNull() ?: return null,
            localDay = p[1].toLongOrNull() ?: return null,
            sequenceId = p[2],
            rounds = p[3].toIntOrNull() ?: return null,
            durationMs = p[4].toLongOrNull() ?: return null,
            completed = p[5].toBooleanStrictOrNull() ?: return null,
            feedback = enumOrNull<Feedback>(p[6]),
            usedMetalDog = p[7].toBooleanStrictOrNull() ?: false,
        )
    }

    private fun parseCustom(v: String): CustomSet? {
        val p = v.split(';')
        if (p.size < 3 || !p[0].startsWith(CustomSets.PREFIX)) return null
        val name = try {
            java.net.URLDecoder.decode(p[1], "UTF-8")
        } catch (_: IllegalArgumentException) {
            return null
        }
        val hold = p.getOrNull(3)?.toIntOrNull()?.coerceIn(1, CustomSets.MAX_HOLD) ?: CustomSets.DEFAULT_HOLD_CYCLES
        return CustomSet(p[0], name, p[2].split(',').filter { it.isNotBlank() }, hold)
    }

    private fun parseHealth(v: String): HealthRecord? {
        val p = v.split(';')
        if (p.size < 8) return null
        return HealthRecord(
            atMs = p[0].toLongOrNull() ?: return null,
            localDay = p[1].toLongOrNull() ?: return null,
            heightCm = p[2].toDoubleOrNull(),
            weightKg = p[3].toDoubleOrNull(),
            waistCm = p[4].toDoubleOrNull(),
            restingHr = p[5].toIntOrNull(),
            stairsSec = p[6].toIntOrNull(),
            sittingHours = p[7].toIntOrNull(),
        )
    }

    private fun parseBody(v: String): BodyRecord? {
        val p = v.split(';')
        if (p.size < 3) return null
        val weight = p[1].toDoubleOrNull()?.takeIf { it in 20.0..300.0 }
        val waist = p[2].toDoubleOrNull()?.takeIf { it in 30.0..250.0 }
        if (weight == null && waist == null) return null
        return BodyRecord(p[0].toLongOrNull() ?: return null, weight, waist)
    }

    private fun parseTest(v: String): MovementRecord? {
        val p = v.split(';')
        if (p.size < 5) return null
        val results = p[4].split(',').mapNotNull { pair ->
            val kv = pair.split(':')
            if (kv.size != 2) return@mapNotNull null
            val test = enumOrNull<MovementTest>(kv[0]) ?: return@mapNotNull null
            val value = kv[1].toDoubleOrNull() ?: return@mapNotNull null
            test to value
        }.toMap()
        return MovementRecord(
            atMs = p[0].toLongOrNull() ?: return null,
            localDay = p[1].toLongOrNull() ?: return null,
            chronologicalAge = p[2].toIntOrNull() ?: return null,
            movementAge = p[3].toIntOrNull() ?: return null,
            results = results,
        )
    }
}
