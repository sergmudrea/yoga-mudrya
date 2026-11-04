package ru.mudrya.yoga.ui.builder

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import ru.mudrya.yoga.engine.BreathFill
import ru.mudrya.yoga.ui.player.FigureCanvas
import ru.mudrya.yoga.ui.theme.MudryaColors

private val NO_BREATH = BreathFill(0.0, 0.0)

/**
 * Картинка позы — плоская фигура из палочек и кружочков (та же, что в плеере), рисуется из данных позы.
 * Левая сторона позы библиотеки (id с _m) — та же фигура, отражённая по горизонтали.
 * Кадры 3D-модели лежат в архиве: tools/atlas/archive/thumbs.
 */
@Composable
fun PoseThumb(asanaId: String, size: Dp = 56.dp, modifier: Modifier = Modifier) {
    val direct = PoseCatalog.asana(asanaId)
    val asana = direct ?: PoseCatalog.asana(asanaId.removeSuffix("_m"))
    val mirror = direct == null && asanaId.endsWith("_m")
    Box(modifier.size(size).clip(RoundedCornerShape(8.dp)).background(MudryaColors.Ground)) {
        asana?.let {
            FigureCanvas(
                pose = it.pose,
                fill = NO_BREATH,
                description = "",
                modifier = Modifier.fillMaxSize().graphicsLayer { if (mirror) scaleX = -1f },
            )
        }
    }
}
