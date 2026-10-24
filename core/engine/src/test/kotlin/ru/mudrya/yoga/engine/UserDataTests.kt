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
        settings = AppSettings(sound = false, voice = VoiceLevel.FULL, vibration = true, tvOutput = false),
        reminder = ReminderSettings(enabled = true, hour = 19, minute = 30, days = setOf(1, 3, 5)),
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
