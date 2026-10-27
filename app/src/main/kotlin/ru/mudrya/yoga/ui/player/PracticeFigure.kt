package ru.mudrya.yoga.ui.player

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import ru.mudrya.yoga.engine.PlayerFrame
import ru.mudrya.yoga.ui.common.shownTitle

/**
 * Фигура практики: объёмная марионетка атласа, если у позы она есть и включена в настройках,
 * иначе плоская схема с подсветкой дыхания. Если WebGL недоступен — до конца экрана схема.
 */
@Composable
fun PracticeFigure(frame: PlayerFrame, transitionMs: Long, use3d: Boolean, modifier: Modifier = Modifier, cameraYaw: Int = 16) {
    var unavailable by rememberSaveable { mutableStateOf(false) }
    val figure = frame.step.asana.figure
    if (use3d && !unavailable && figure != null) {
        Figure3D(figure, transitionMs, frame.step.shownTitle(), modifier, onUnavailable = { unavailable = true }, cameraYaw = cameraYaw)
    } else {
        FigureCanvas(pose = frame.pose, fill = frame.fill, description = frame.step.shownTitle(), modifier = modifier)
    }
}

/** Сколько длится движение шага при текущем темпе: за это время марионетка переходит в позу. */
fun transitionMs(frame: PlayerFrame, phaseMs: Long, speed: Double): Long =
    (frame.step.enter.size.coerceAtLeast(1) * phaseMs / speed.coerceAtLeast(0.1)).toLong()
