package ru.mudrya.yoga.ui.player

import androidx.lifecycle.ViewModel
import ru.mudrya.yoga.catalog.SuryaCatalog
import ru.mudrya.yoga.engine.BuildRequest
import ru.mudrya.yoga.engine.PlayerController
import ru.mudrya.yoga.engine.PlayerFrame
import ru.mudrya.yoga.engine.SessionBuilder
import ru.mudrya.yoga.model.Support

/**
 * Держит контроллер плеера, чтобы поворот экрана не сбрасывал практику.
 * Время двигает экран (кадровый цикл), модель только хранит состояние.
 */
class PlayerViewModel : ViewModel() {

    private val session = SessionBuilder(SuryaCatalog.catalog)
        .build(BuildRequest(SuryaCatalog.surya, rounds = 1, support = Support.PALMS))

    val controller = PlayerController(session, phaseMs = DEFAULT_PHASE_MS)

    fun frame(): PlayerFrame = controller.frame()

    fun cycleSpeed() {
        val i = SPEEDS.indexOf(controller.speed).let { if (it < 0) 1 else it }
        controller.setTempo(controller.phaseMs, SPEEDS[(i + 1) % SPEEDS.size])
    }

    fun cyclePhaseLength() {
        val i = PHASE_LENGTHS.indexOf(controller.phaseMs).let { if (it < 0) 1 else it }
        controller.setTempo(PHASE_LENGTHS[(i + 1) % PHASE_LENGTHS.size], controller.speed)
    }

    companion object {
        const val DEFAULT_PHASE_MS = 4_000L
        val SPEEDS = listOf(0.75, 1.0, 1.25)
        val PHASE_LENGTHS = listOf(3_000L, 4_000L, 5_000L, 6_000L)
    }
}
