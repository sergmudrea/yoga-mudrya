package ru.mudrya.yoga.catalog

import org.junit.jupiter.api.Test
import ru.mudrya.yoga.engine.CheckIn
import ru.mudrya.yoga.engine.DailyCheck
import ru.mudrya.yoga.engine.Energy
import ru.mudrya.yoga.engine.Mood
import ru.mudrya.yoga.engine.TensionZone
import kotlin.test.assertTrue

class DailyCheckCatalogTest {
    @Test
    fun `every set the check-in can suggest exists in the catalog`() {
        val ids = SuryaCatalog.sequences.map { it.id }.toSet()
        for (e in Energy.entries) for (m in Mood.entries) for (z in TensionZone.entries) for (h in 0..23) {
            for (id in DailyCheck.recommend(CheckIn(1, e, m, z, 20), h).candidates) assertTrue(id in ids, "no set $id")
        }
    }
}
