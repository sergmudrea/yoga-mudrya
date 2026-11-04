package ru.mudrya.yoga.catalog

import org.junit.jupiter.api.Test
import ru.mudrya.yoga.engine.BuildRequest
import ru.mudrya.yoga.engine.Goal
import ru.mudrya.yoga.engine.Level
import ru.mudrya.yoga.engine.SessionBuilder
import ru.mudrya.yoga.engine.SessionFit
import ru.mudrya.yoga.engine.SessionRecord
import ru.mudrya.yoga.engine.Sex
import ru.mudrya.yoga.engine.UserProfile
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.model.Support
import kotlin.math.abs
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class ProgramCatalogTest {

    private fun session(id: String) = SessionBuilder(SuryaCatalog.catalog).build(BuildRequest(SuryaCatalog.sequence(id), 1, Support.PALMS))

    @Test
    fun `every program day is a real set and programs last 14 to 30 days`() {
        val ids = SuryaCatalog.sequences.map { it.id }.toSet()
        ProgramCatalog.allSets.forEach { assertTrue(it in ids, it) }
        ProgramCatalog.programs.forEach { assertTrue(it.length in 14..30, it.id) }
    }

    @Test
    fun `program day follows the calendar and counts finished sets`() {
        val p = ProgramCatalog.program("prog_back")!!
        val start = 100L
        val done = SessionRecord(0, start, p.days[0]!!, 1, 600_000, true, null, false)
        val state = UserState(sessions = listOf(done))
        val d = ProgramCatalog.today(p, start, start + 1, state)
        assertEquals(1, d.index)
        assertEquals(true, d.marks[0])
        assertNull(d.marks[1])
        assertEquals(1, d.doneDays)
        assertFalse(d.finished)
        assertTrue(ProgramCatalog.today(p, start, start + 21, state).finished)
        // день пропущен — отметка «пропущен»
        assertEquals(false, ProgramCatalog.today(p, start, start + 2, state).marks[1])
    }

    @Test
    fun `onboarding answers pick a program`() {
        fun prof(goals: Set<Goal>, level: Level = Level.EXPERIENCED, inj: Set<Injury> = emptySet()) = UserProfile(Sex.FEMALE, 35, goals, level, inj)
        assertEquals("prog_back", ProgramCatalog.recommend(prof(setOf(Goal.SHAPE), inj = setOf(Injury.LUMBAR))).id)
        assertEquals("prog_slim", ProgramCatalog.recommend(prof(setOf(Goal.SHAPE))).id)
        assertEquals("prog_flex", ProgramCatalog.recommend(prof(setOf(Goal.JOINTS))).id)
        assertEquals("prog_start", ProgramCatalog.recommend(prof(setOf(Goal.JOINTS, Goal.CALM), Level.BEGINNER)).id)
    }

    @Test
    fun `sets stretch and shrink to 10, 20 and 40 minutes`() {
        val s = session("th_back_relief")
        val phase = 4_000L
        SessionFit.LENGTHS.forEach { m ->
            val fit = SessionFit.fit(s, phase, m)
            assertEquals(s.steps.map { it.asana.id }, fit.steps.map { it.asana.id })
            if (m >= SessionFit.minMinutes(s, phase) && m <= SessionFit.maxMinutes(s, phase)) {
                assertTrue(abs(SessionFit.totalMs(fit, phase) / 60_000.0 - m) <= 1.5, "$m: ${SessionFit.totalMs(fit, phase)}")
            }
        }
        // динамические шаги без удержания остаются без удержания
        val flow = session("bk_mk")
        val short = SessionFit.fit(flow, phase, 10)
        flow.steps.zip(short.steps).forEach { (a, b) -> if (a.hold.isEmpty()) assertTrue(b.hold.isEmpty()) }
    }
}
