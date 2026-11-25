package ru.mudrya.yoga.ui.common

import android.annotation.SuppressLint
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.StrokeJoin
import androidx.compose.ui.graphics.drawscope.Fill
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.engine.MuscleMap
import ru.mudrya.yoga.ui.theme.MudryaColors

private val BODY = Color(0xFF2A2E37)
private val PART = Color(0xFF3A3F4A)
private val MUSCLE = Color(0xFF454B57)
private val MAIN = MudryaColors.Saffron
private val SUPPORT = Color(0xFF8A6A3A)

/** Название группы мышц: ресурс muscle_<группа>. */
@SuppressLint("DiscouragedApi")
@Composable
private fun muscleName(group: String): String {
    val context = LocalContext.current
    val id = context.resources.getIdentifier("muscle_$group", "string", context.packageName)
    return if (id != 0) context.getString(id) else group
}

/** Мышцы в позе: метки основных и вспомогательных групп и силуэт спереди и сзади с подсветкой. */
@Composable
fun MuscleMapView(card: String, modifier: Modifier = Modifier) {
    val m = MuscleMap.forCard(card) ?: return
    Column(modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text(stringResource(R.string.muscles_title), color = MudryaColors.Moon, fontSize = 12.sp, fontWeight = FontWeight.Bold)
        ChipRow {
            m.main.forEach { MuscleChip(muscleName(it), MAIN) }
            m.supporting.forEach { MuscleChip(muscleName(it), SUPPORT) }
        }
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            listOf(MuscleMap.front to R.string.muscles_front, MuscleMap.back to R.string.muscles_back).forEach { (shapes, label) ->
                Column(Modifier.weight(1f), horizontalAlignment = Alignment.CenterHorizontally) {
                    BodyShape(shapes, m.main.toSet(), m.supporting.toSet(), Modifier.fillMaxWidth(0.8f))
                    Text(stringResource(label), color = MudryaColors.TextMuted, fontSize = 12.sp)
                }
            }
        }
        Row(horizontalArrangement = Arrangement.spacedBy(14.dp), verticalAlignment = Alignment.CenterVertically) {
            Legend(stringResource(R.string.muscles_main), MAIN)
            Legend(stringResource(R.string.muscles_supporting), SUPPORT)
        }
    }
}

@Composable
private fun MuscleChip(text: String, dot: Color) {
    Row(
        Modifier
            .background(MudryaColors.SurfaceHigh, RoundedCornerShape(16.dp))
            .padding(horizontal = 10.dp, vertical = 6.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Box(Modifier.size(8.dp).background(dot, CircleShape))
        Text(text, color = MudryaColors.Text, fontSize = 13.sp, modifier = Modifier.padding(start = 6.dp))
    }
}

@Composable
private fun Legend(text: String, dot: Color) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Box(Modifier.size(8.dp).background(dot, CircleShape))
        Text(text, color = MudryaColors.TextMuted, fontSize = 12.sp, modifier = Modifier.padding(start = 6.dp))
    }
}

@Composable
private fun BodyShape(shapes: List<MuscleMap.Shape>, main: Set<String>, supporting: Set<String>, modifier: Modifier) {
    Canvas(modifier.aspectRatio(MuscleMap.WIDTH / MuscleMap.HEIGHT)) {
        val k = size.width / MuscleMap.WIDTH
        val gap = Stroke(width = 1.5f * k, join = StrokeJoin.Round)
        shapes.forEach { s ->
            val path = Path().apply {
                val p = s.points
                moveTo(p[0] * k, p[1] * k)
                var i = 2
                while (i < p.size) {
                    lineTo(p[i] * k, p[i + 1] * k)
                    i += 2
                }
                close()
            }
            val color = when (s.group) {
                null -> BODY
                "" -> PART
                in main -> MAIN
                in supporting -> SUPPORT
                else -> MUSCLE
            }
            drawPath(path, color, style = Fill)
            // мышцы и части тела разделены тонкой линией цвета фона, как на анатомических схемах
            drawPath(path, if (s.group == null) BODY else MudryaColors.Surface, style = if (s.group == null) Stroke(width = 3f * k, join = StrokeJoin.Round) else gap)
        }
    }
}
