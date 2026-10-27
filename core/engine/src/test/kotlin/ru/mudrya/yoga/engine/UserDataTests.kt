package ru.mudrya.yoga.engine

import org.junit.jupiter.api.Test
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.model.Joint
import ru.mudrya.yoga.model.Support
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class UserStateCodecTest {

    private val full = UserState(
        profile = UserProfile(Sex.FEMALE, 41, setOf(Goal.JOINTS, Goal.CALM), Level.EXPERIENCED, setOf(Injury.WRISTS, Injury.NECK)),
        params = SessionParams(3, Support.FISTS, listOf("s1"), 5_500, easyStreak = 2, okCount = 1, easedJoints = setOf(Joint.KNEES)),
        sessions = listOf(
            SessionRecord(1_000, 20_000, "surya", 1, 1_200_000, true, Feedback.OK, false),
            SessionRecord(2_000, 20_001, "surya", 2, 300_000, false, null, true),
        ),
        tests = listOf(MovementRecord(5_000, 20_000, 41, 37, mapOf(MovementTest.BALANCE to 8.5, MovementTest.SIT_RISE to 9.0))),
        planStartDay = 19_990,
        relaxSeconds = 90,
        settings = AppSettings(sound = false, voice = VoiceLevel.FULL, vibration = true, tvOutput = false, figure3d = false, showCues = false, largeText = true, camera = CameraView.FRONT, thumbnails = false, holdBreaths = 3),
        reminder = ReminderSettings(enabled = true, hour = 19, minute = 30, days = setOf(1, 3, 5)),
        body = listOf(BodyRecord(19_990, 72.5, null), BodyRecord(20_000, 71.8, 84.0)),
        challengeStart = 19_995,
        cycle = CycleSettings(enabled = true, lastStart = 19_998, lastEnd = null, maxDays = 6),
        customSets = listOf(CustomSet("my_abc", "Утро; спина, плечи", listOf("at_tad", "lb_B1"), holdCycles = 3)),
        customRuns = 3,
        pinnedSets = listOf("my_abc"),
        favoriteSets = listOf("surya", "lib3", "my_abc"),
        promoUntilMs = 99_000,
        usedCodes = listOf("YABCDE"),
        health = listOf(HealthRecord(7_000, 20_000, 178.0, 86.5, 92.0, 66, 52, 9, 14), HealthRecord(8_000, 20_001, weightKg = 85.0)),
    )

    @Test
    fun `round trip keeps everything`() {
        assertEquals(full, UserStateCodec.decode(UserStateCodec.encode(full)))
    }

    @Test
    fun `empty text gives a fresh user`() {
        val s = UserStateCodec.decode("")
        assertNull(s.profile)
        assertEquals(Plan.DEFAULT_PARAMS, s.params)
        assertTrue(s.sessions.isEmpty())
    }

    @Test
    fun `broken lines are skipped, good ones survive`() {
        val text = UserStateCodec.encode(full) + "garbage\nsession=1;2;x\ntest=;;;\nunknown.key=5\nprofile.level=WIZARD_IGNORED_LATER\n"
        val s = UserStateCodec.decode(text)
        assertEquals(2, s.sessions.size)
        assertEquals(1, s.tests.size)
        // Испорченное значение уровня делает профиль недействительным — пользователь пройдёт онбординг заново,
        // но история остаётся.
        assertNull(s.profile)
    }

    @Test
    fun `out of range params are clamped`() {
        val s = UserStateCodec.decode("params.rounds=99\nparams.phaseMs=100\n")
        assertEquals(Plan.LIMITS.maxRounds, s.params.rounds)
        assertEquals(2_000, s.params.phaseMs)
    }
}

class PlanTest {

    private fun profile(level: Level, injuries: Set<Injury> = emptySet()) = UserProfile(Sex.MALE, 35, setOf(Goal.SHAPE), level, injuries)

    @Test
    fun `beginner starts with one round and palms`() {
        val p = Plan.initial(profile(Level.BEGINNER))
        assertEquals(1, p.rounds)
        assertEquals(Support.PALMS, p.support)
        assertEquals(4_000, p.phaseMs)
    }

    @Test
    fun `wrist injury always means fists`() {
        Level.entries.forEach { assertEquals(Support.FISTS, Plan.initial(profile(it, setOf(Injury.WRISTS))).support) }
        assertEquals(listOf(Support.FISTS), Plan.allowedSupports(setOf(Injury.WRISTS)))
    }

    @Test
    fun `adaptation adds one round at a time and never drops below one`() {
        val state = UserState(profile(Level.BEGINNER), Plan.initial(profile(Level.BEGINNER)))
        assertEquals(2, Plan.adapt(state, Feedback.EASY, false, emptySet()).rounds)
        assertEquals(1, Plan.adapt(state, Feedback.HARD, false, emptySet()).rounds)
    }
}

class ProgressStatsTest {

    private fun rec(day: Long, minutes: Long, completed: Boolean = true) =
        SessionRecord(day * 86_400_000, day, "surya", 1, minutes * 60_000, completed, null, false)

    @Test
    fun `streak counts consecutive days up to today`() {
        val s = ProgressStats.of(UserState(sessions = listOf(rec(8, 20), rec(9, 20), rec(10, 20))), today = 10)
        assertEquals(3, s.currentStreak)
        assertEquals(3, s.bestStreak)
    }

    @Test
    fun `streak survives until today ends`() {
        val s = ProgressStats.of(UserState(sessions = listOf(rec(8, 20), rec(9, 20))), today = 10)
        assertEquals(2, s.currentStreak)
    }

    @Test
    fun `missed day breaks the streak but best is kept`() {
        val s = ProgressStats.of(UserState(sessions = listOf(rec(1, 20), rec(2, 20), rec(3, 20), rec(9, 10))), today = 11)
        assertEquals(0, s.currentStreak)
        assertEquals(3, s.bestStreak)
    }

    @Test
    fun `unfinished practice counts minutes but not sessions or streak`() {
        val s = ProgressStats.of(UserState(sessions = listOf(rec(10, 7, completed = false))), today = 10)
        assertEquals(0, s.sessions)
        assertEquals(7, s.totalMinutes)
        assertEquals(0, s.currentStreak)
        assertEquals(listOf(0, 0, 0, 0, 0, 0, 7), s.lastWeekMinutes)
    }

    @Test
    fun `movement age first and last`() {
        val tests = listOf(
            MovementRecord(2, 2, 40, 38, emptyMap()),
            MovementRecord(1, 1, 40, 44, emptyMap()),
        )
        val s = ProgressStats.of(UserState(tests = tests), today = 2)
        assertEquals(44, s.firstMovementAge)
        assertEquals(38, s.lastMovementAge)
    }
}

class ProvisionalNormsTest {

    private val calc = MovementAgeCalculator(ProvisionalNorms)

    @Test
    fun `meeting the norm gives the passport age`() {
        val results = MovementTest.entries.associateWith { ProvisionalNorms.expected(it, 45, Sex.FEMALE) }
        assertEquals(45, calc.calculate(45, Sex.FEMALE, results).age)
    }

    @Test
    fun `norms decline with age`() {
        MovementTest.entries.forEach { t ->
            Sex.entries.forEach { sex ->
                assertTrue(ProvisionalNorms.expected(t, 30, sex) >= ProvisionalNorms.expected(t, 70, sex), "$t $sex")
            }
        }
    }

    @Test
    fun `strong results lower the movement age`() {
        val r = calc.calculate(50, Sex.MALE, mapOf(MovementTest.BALANCE to 15.0, MovementTest.SIT_RISE to 10.0, MovementTest.PUSH_UPS to 30.0))
        assertTrue(r.age < 50, "age=${r.age}")
    }

    @Test
    fun `values outside the anchors are flat`() {
        assertEquals(ProvisionalNorms.expected(MovementTest.BALANCE, 90, Sex.MALE), ProvisionalNorms.expected(MovementTest.BALANCE, 99, Sex.MALE))
    }
}

class Path8Test {

    @Test
    fun `week has three surya, two chandra and two rest days`() {
        val kinds = (7..13).map { Path8.kindOf(it) }
        assertEquals(3, kinds.count { it == DayKind.SURYA })
        assertEquals(2, kinds.count { it == DayKind.CHANDRA })
        assertEquals(2, kinds.count { it == DayKind.REST })
    }

    @Test
    fun `test every fourteen days and on the last day`() {
        val tests = (0 until Path8.DAYS).filter { Path8.kindOf(it) == DayKind.TEST }
        assertEquals(listOf(0, 14, 28, 42, 55), tests)
    }

    @Test
    fun `today wraps after eight weeks`() {
        assertEquals(PathDay(3, 1, DayKind.REST, false), Path8.today(100, 103))
        assertEquals(0, Path8.today(100, 156).index)
        assertTrue(Path8.today(100, 156).finished)
    }

    @Test
    fun `day plan is done by the right set`() {
        val s = UserState(sessions = listOf(SessionRecord(0, 5, "at_sn", 1, 1, true, null, false), SessionRecord(0, 5, "chandra", 1, 1, true, null, false)))
        assertTrue(Path8.done(s, 5, DayKind.SURYA))
        assertTrue(Path8.done(s, 5, DayKind.CHANDRA))
        assertFalse(Path8.done(s, 6, DayKind.SURYA))
    }

    @Test
    fun `test is due after two weeks`() {
        assertTrue(Path8.testDue(UserState(), 10))
        val s = UserState(tests = listOf(MovementRecord(0, 10, 40, 40, emptyMap())))
        assertFalse(Path8.testDue(s, 23))
        assertTrue(Path8.testDue(s, 24))
    }
}

class RemindersTest {
    private val r = ReminderSettings(enabled = true, hour = 8, minute = 0, days = setOf(1, 3)) // пн, ср
    // 2026-10-26 — понедельник.
    private fun at(day: Int, h: Int, m: Int = 0) = java.time.LocalDateTime.of(2026, 10, day, h, m)

    @Test
    fun `later today when time has not come`() {
        assertEquals(at(26, 8), Reminders.next(at(26, 7), r))
    }

    @Test
    fun `next allowed day when time has passed`() {
        assertEquals(at(28, 8), Reminders.next(at(26, 8), r))
    }

    @Test
    fun `wraps to next week`() {
        assertEquals(java.time.LocalDateTime.of(2026, 11, 2, 8, 0), Reminders.next(at(29, 9), r))
    }

    @Test
    fun `disabled or no days gives nothing`() {
        assertNull(Reminders.next(at(26, 7), r.copy(enabled = false)))
        assertNull(Reminders.next(at(26, 7), r.copy(days = emptySet())))
    }
}

class VoiceScriptTest {
    private val words = VoiceWords.RU
    private fun step(title: String, side: ru.mudrya.yoga.model.Side = ru.mudrya.yoga.model.Side.NONE, round: Int = 1, cue: String? = null) =
        SessionStep(
            ru.mudrya.yoga.model.Asana("a", title, title, Fixtures.P), side, null,
            enter = listOf(ru.mudrya.yoga.model.Breath.INHALE), hold = listOf(ru.mudrya.yoga.model.Breath.EXHALE, ru.mudrya.yoga.model.Breath.INHALE),
            extraCycles = false, round = round, titleRu = title, cueRu = cue,
        )
    private fun phase(kind: PhaseKind, index: Int, count: Int, b: ru.mudrya.yoga.model.Breath = ru.mudrya.yoga.model.Breath.INHALE) =
        Phase(0, kind, b, index, count, 0, 4000)

    @Test
    fun `first phase names the pose then breath`() {
        assertEquals("Кобра. Вдох", VoiceScript.phrase(step("Кобра (бхуджангасана)"), null, phase(PhaseKind.ENTER, 0, 1), VoiceLevel.NAMES, words))
    }

    @Test
    fun `other phases say only the breath`() {
        assertEquals("Выдох", VoiceScript.phrase(step("Кобра"), null, phase(PhaseKind.HOLD, 1, 2, ru.mudrya.yoga.model.Breath.EXHALE), VoiceLevel.NAMES, words))
    }

    @Test
    fun `side and round are announced when they change`() {
        val prev = step("Гора", ru.mudrya.yoga.model.Side.RIGHT, round = 1)
        val s = step("Выпад", ru.mudrya.yoga.model.Side.LEFT, round = 2)
        assertEquals("Круг 2. левая сторона. Выпад. Вдох", VoiceScript.phrase(s, prev, phase(PhaseKind.ENTER, 0, 1), VoiceLevel.NAMES, words))
    }

    @Test
    fun `full level reads a short cue on a long hold`() {
        val s = step("Кобра", cue = "Плечи от ушей.")
        assertEquals("Вдох. Плечи от ушей", VoiceScript.phrase(s, null, phase(PhaseKind.HOLD, 0, 2), VoiceLevel.FULL, words))
        assertEquals("Вдох", VoiceScript.phrase(s, null, phase(PhaseKind.HOLD, 0, 2), VoiceLevel.NAMES, words))
    }

    @Test
    fun `off says nothing and breath level never names`() {
        assertNull(VoiceScript.phrase(step("Кобра"), null, phase(PhaseKind.ENTER, 0, 1), VoiceLevel.OFF, words))
        assertEquals("Вдох", VoiceScript.phrase(step("Кобра"), null, phase(PhaseKind.ENTER, 0, 1), VoiceLevel.BREATH, words))
    }
}

class VideoSlotsTest {

    @Test
    fun `own clip wins and is not mirrored`() {
        assertEquals(ClipRef("at_lunge", false), VideoSlots.resolve("at_lunge", setOf("at_lunge", "at_lunge_m")))
    }

    @Test
    fun `mirrored pose borrows its pair flipped`() {
        assertEquals(ClipRef("at_lunge", true), VideoSlots.resolve("at_lunge_m", setOf("at_lunge")))
        assertEquals(ClipRef("at_lunge_m", true), VideoSlots.resolve("at_lunge", setOf("at_lunge_m")))
    }

    @Test
    fun `no clip gives nothing`() {
        assertNull(VideoSlots.resolve("at_cobra", setOf("at_lunge")))
    }

    @Test
    fun `slots collapse mirrored poses`() {
        assertEquals("at_lunge", VideoSlots.slotOf("at_lunge_m"))
        assertEquals("at_lunge", VideoSlots.slotOf("at_lunge"))
    }
}

class ProgressExtrasTest {
    private fun rec(day: Long, seq: String, rounds: Int, completed: Boolean = true) =
        SessionRecord(day * 86_400_000, day, seq, rounds, 600_000, completed, null, false)

    @Test
    fun `challenge counts solar rounds since start`() {
        val s = UserState(
            sessions = listOf(rec(9, "surya", 5), rec(10, "at_sn", 4), rec(11, "chandra", 6), rec(12, "surya", 3, completed = false), rec(13, "surya", 2)),
            challengeStart = 10,
        )
        val c = Challenge108.of(s)!!
        assertEquals(6, c.rounds)
        assertEquals(2, c.days)
        assertEquals(102, c.left)
        assertNull(Challenge108.of(UserState()))
    }

    @Test
    fun `body log merges a day and trend shows change`() {
        var log = BodyLog.put(emptyList(), 5, 80.0, null)
        log = BodyLog.put(log, 5, null, 90.0)
        log = BodyLog.put(log, 9, 78.4, 88.5)
        assertEquals(listOf(BodyRecord(5, 80.0, 90.0), BodyRecord(9, 78.4, 88.5)), log)
        val t = BodyTrend.of(log)
        assertEquals(-1.6, t.weightChange)
        assertEquals(-1.5, t.waistChange)
    }

    @Test
    fun `calendar starts weeks on monday`() {
        // 1 октября 2026 — четверг.
        val day = java.time.LocalDate.of(2026, 10, 2).toEpochDay()
        val m = PracticeCalendar.month(UserState(sessions = listOf(rec(day, "surya", 1))), 2026, 10)
        assertEquals(listOf(null, null, null), m.weeks[0].take(3))
        assertEquals(1, m.weeks[0][3]?.dayOfMonth)
        assertEquals(true, m.weeks[0][4]?.completed)
        assertEquals(1, m.activeDays)
        assertTrue(m.weeks.all { it.size == 7 })
        assertEquals(2027 to 1, PracticeCalendar.shift(2026, 12, 1))
    }
}

class CycleTest {
    private val c = CycleSettings(enabled = true).started(100)

    @Test
    fun `active from start for max days`() {
        assertTrue(c.active(100))
        assertEquals(5, c.dayOf(104))
        assertFalse(c.active(105))
        assertFalse(c.active(99))
    }

    @Test
    fun `ended mark switches off at once`() {
        assertFalse(c.ended(102).active(102))
        assertTrue(c.ended(102).started(110).active(111))
    }

    @Test
    fun `disabled tracking is never active`() {
        assertFalse(c.copy(enabled = false).active(100))
    }
}

class CustomSetsTest {
    @Test
    fun `move reorders like drag and drop`() {
        assertEquals(listOf("b", "c", "a"), CustomSets.move(listOf("a", "b", "c"), 0, 2))
        assertEquals(listOf("c", "a", "b"), CustomSets.move(listOf("a", "b", "c"), 2, 0))
        assertEquals(listOf("a", "b"), CustomSets.move(listOf("a", "b"), 0, 5))
    }

    @Test
    fun `five free runs then premium`() {
        assertTrue(CustomSets.canRun(premium = false, runsUsed = 4))
        assertFalse(CustomSets.canRun(premium = false, runsUsed = 5))
        assertTrue(CustomSets.canRun(premium = true, runsUsed = 50))
        assertEquals(2, CustomSets.runsLeft(3))
    }

    @Test
    fun `custom set plays with breaths copied from the catalog`() {
        val set = CustomSet("my_1", "Мой", listOf("plank", "tadasana", "unknown", "plank"))
        val cat = CustomSets.catalogWith(Fixtures.catalog, set)
        val s = SessionBuilder(cat).build(BuildRequest(CustomSets.sequence(set), 1, ru.mudrya.yoga.model.Support.PALMS))
        assertEquals(listOf("plank", "tadasana", "plank"), s.steps.map { it.asana.id })
    }
}

class HealthCheckTest {
    private fun level(r: HealthRecord, m: HealthMetric, sex: Sex = Sex.MALE) = HealthCheck.evaluate(r, sex).findings.first { it.metric == m }

    @Test
    fun `bmi classes follow WHO`() {
        assertEquals("NORMAL", HealthCheck.bmiGrade(22.0).first)
        assertEquals("OVER", HealthCheck.bmiGrade(27.0).first)
        assertEquals("OBESE1", HealthCheck.bmiGrade(31.0).first)
        assertEquals("OBESE2", HealthCheck.bmiGrade(36.0).first)
        assertEquals("OBESE3", HealthCheck.bmiGrade(41.0).first)
        assertEquals(27.3, level(HealthRecord(0, 0, heightCm = 178.0, weightKg = 86.5), HealthMetric.BMI).value)
    }

    @Test
    fun `waist thresholds depend on sex and height`() {
        val r = HealthRecord(0, 0, heightCm = 170.0, waistCm = 98.0)
        assertEquals(HealthLevel.RISK, level(r, HealthMetric.WAIST, Sex.MALE).level)
        assertEquals(HealthLevel.HIGH, level(r, HealthMetric.WAIST, Sex.FEMALE).level)
        assertEquals(HealthLevel.RISK, level(r, HealthMetric.WAIST_TO_HEIGHT).level)
    }

    @Test
    fun `stairs and pulse grades`() {
        assertEquals("FIT", level(HealthRecord(0, 0, stairsSec = 40), HealthMetric.STAIRS).grade)
        assertEquals("CANNOT", level(HealthRecord(0, 0, stairsSec = 0), HealthMetric.STAIRS).grade)
        assertEquals("TACHY", level(HealthRecord(0, 0, restingHr = 104), HealthMetric.RESTING_HR).grade)
        assertEquals("GOOD", level(HealthRecord(0, 0, restingHr = 72), HealthMetric.RESTING_HR, Sex.FEMALE).grade)
    }

    @Test
    fun `overall risk grows with worrying answers`() {
        assertEquals(HealthLevel.GOOD, HealthCheck.evaluate(HealthRecord(0, 0, 180.0, 72.0, 80.0, 58, 40, 3), Sex.MALE).overall)
        assertEquals(HealthLevel.HIGH, HealthCheck.evaluate(HealthRecord(0, 0, 170.0, 100.0, 110.0, 95, 0, 10), Sex.MALE).overall)
        assertEquals(76.9, HealthCheck.targetWeight(175.7, 90.0))
        assertNull(HealthCheck.targetWeight(180.0, 70.0))
    }
}

class CustomSetPlaybackTest {
    @Test
    fun `custom set moves on from pose to pose by itself`() {
        val set = CustomSet("my_1", "Мой", listOf("plank", "tadasana", "chaturanga"), holdCycles = 1)
        val s = SessionBuilder(CustomSets.catalogWith(Fixtures.catalog, set))
            .build(BuildRequest(CustomSets.sequence(set), 1, ru.mudrya.yoga.model.Support.PALMS))
        assertTrue(s.steps.all { it.hold.size == 2 })
        val c = PlayerController(s, phaseMs = 1_000)
        val seen = mutableListOf<Int>()
        repeat(40) { c.advance(250); seen += c.frame().stepIndex }
        assertEquals(listOf(0, 1, 2), seen.distinct())
        assertTrue(c.frame().finished)
    }
}

class AccountsTest {
    @Test
    fun `register, log in and reject a wrong password`() {
        val a = Accounts.create("Me@Example.com ", "Сергей", "secret-123", 1, emptyList()).getOrThrow()
        assertEquals("me@example.com", a.email)
        assertTrue(Accounts.check("me@example.com", "secret-123", listOf(a)).isSuccess)
        assertEquals(AccountError.WRONG_PASSWORD, (Accounts.check("me@example.com", "nope-nope", listOf(a)).exceptionOrNull() as AccountException).error)
        assertEquals(AccountError.EXISTS, (Accounts.create("me@example.com", "", "secret-123", 2, listOf(a)).exceptionOrNull() as AccountException).error)
        assertEquals(AccountError.SHORT_PASSWORD, Accounts.validate("x@y.ru", "123"))
        assertEquals(AccountError.BAD_EMAIL, Accounts.validate("not-mail", "12345678"))
    }

    @Test
    fun `accounts file round trip`() {
        val a = Accounts.create("a@b.ru", "Имя; с точкой", "12345678", 5, emptyList()).getOrThrow()
        val (list, current) = Accounts.decode(Accounts.encode(listOf(a), "a@b.ru"))
        assertEquals(listOf(a), list)
        assertEquals("a@b.ru", current)
        assertEquals(16, Accounts.dataKey("a@b.ru").length)
    }
}

class HoldOverrideTest {
    @Test
    fun `player can change breaths per pose and keeps the current step`() {
        val set = CustomSet("my_1", "Мой", listOf("plank", "tadasana", "chaturanga"), holdCycles = 3)
        val s = SessionBuilder(CustomSets.catalogWith(Fixtures.catalog, set))
            .build(BuildRequest(CustomSets.sequence(set), 1, ru.mudrya.yoga.model.Support.PALMS))
        val c = PlayerController(s, phaseMs = 1_000)
        c.goToStep(1)
        val before = c.frame().totalMs
        c.setHold(1)
        assertEquals(1, c.frame().stepIndex)
        assertTrue(c.frame().totalMs < before)
        assertTrue(c.frame().step.hold.size == 2)
        c.setHold(null)
        assertEquals(before, c.frame().totalMs)
    }
}

class PromoCodesTest {
    @Test
    fun `codes verify offline, kinds and tampering`() {
        val y = PromoCodes.make(PromoKind.YEAR, "7K2QP")
        assertEquals(PromoKind.YEAR, PromoCodes.verify(y)!!.kind)
        assertEquals(PromoKind.YEAR, PromoCodes.verify(y.lowercase().replace("-", " "))!!.kind)
        assertNull(PromoCodes.verify(y.dropLast(1) + if (y.last() == 'A') "B" else "A"))
        assertNull(PromoCodes.verify("MUDRA-Q7K2QP-AAAAAA"))
    }

    @Test
    fun `applying extends the term once per code, lifetime forever`() {
        val now = 1_000L
        val m = PromoCodes.verify(PromoCodes.make(PromoKind.MONTH, "AAAAA"))!!
        val s1 = PromoCodes.apply(UserState(), m, now)!!
        assertEquals(now + 30 * 86_400_000L, s1.promoUntilMs)
        assertNull(PromoCodes.apply(s1, m, now))
        assertTrue(PromoCodes.active(s1, now + 1))
        val l = PromoCodes.verify(PromoCodes.make(PromoKind.LIFETIME, "BBBBB"))!!
        assertTrue(PromoCodes.active(PromoCodes.apply(UserState(), l, now)!!, Long.MAX_VALUE))
    }

    @Test
    fun `start phase follows calm breathing`() {
        assertEquals(4_000L, HealthCheck.startPhaseMs(8))
        assertEquals(2_500L, HealthCheck.startPhaseMs(12))
        assertEquals(2_000L, HealthCheck.startPhaseMs(20))
        assertEquals(7_500L, HealthCheck.startPhaseMs(4))
    }
}

class ThemeAdvisorTest {
    @Test
    fun `back pain, sitting and weight lead the recommendations`() {
        val s = UserState(
            profile = UserProfile(Sex.MALE, 45, setOf(Goal.SHAPE), Level.BEGINNER, setOf(ru.mudrya.yoga.model.Injury.LUMBAR)),
            health = listOf(HealthRecord(1, 1, heightCm = 178.0, weightKg = 92.0, waistCm = 100.0, sittingHours = 9)),
        )
        val ids = ThemeAdvisor.recommend(s).map { it.themeId }
        kotlin.test.assertEquals("th_slim", ids.first())
        kotlin.test.assertTrue("th_back_relief" in ids && "th_posture" in ids, ids.toString())
        kotlin.test.assertTrue("th_strength" !in ids)
    }

    @Test
    fun `no data gives no advice`() {
        kotlin.test.assertTrue(ThemeAdvisor.recommend(UserState()).isEmpty())
    }
}
