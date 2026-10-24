package ru.mudrya.yoga.ui.player

import androidx.compose.foundation.Canvas
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.StrokeJoin
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.rotate
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.semantics
import ru.mudrya.yoga.engine.BreathFill
import ru.mudrya.yoga.engine.FigureGeometry
import ru.mudrya.yoga.engine.FigurePoints
import ru.mudrya.yoga.engine.Pt
import ru.mudrya.yoga.model.Pose
import ru.mudrya.yoga.ui.theme.MudryaColors
import kotlin.math.min

private val FarLimb = Color(0xFF5B6170)
private val Floor = Color(0xFF2A2E37)

/**
 * Схематичная фигура: ближние рука и нога светлые, дальние — серые.
 * На вдохе подсвечиваются живот (шафран) и грудь (голубой), по порядку полного дыхания.
 */
@Composable
fun FigureCanvas(
    pose: Pose,
    fill: BreathFill,
    description: String,
    modifier: Modifier = Modifier,
) {
    Canvas(modifier.semantics { contentDescription = description }) {
        val f = FigureGeometry.grounded(pose, chestLift = fill.chest * 2.5)
        val all = f.all()
        val w = all.maxOf { it.x } - all.minOf { it.x }
        val h = all.maxOf { it.y }
        val bottomPad = size.height * 0.12f
        val scale = min(size.width * 0.86f / w.toFloat().coerceAtLeast(1f), (size.height - bottomPad - size.height * 0.08f) / h.toFloat().coerceAtLeast(1f))
            .coerceAtMost(size.height / 115f)
        val ground = size.height - bottomPad
        val cx = size.width / 2
        fun o(p: Pt) = Offset(cx + p.x.toFloat() * scale, ground - p.y.toFloat() * scale)

        drawLine(Floor, Offset(size.width * 0.06f, ground + 4f * scale / 2), Offset(size.width * 0.94f, ground + 4f * scale / 2), strokeWidth = 4f * scale / 1.75f, cap = StrokeCap.Round)

        breathGlow(f, fill, ::o, scale)

        val limb = Stroke(width = 6.5f * scale / 1.75f, cap = StrokeCap.Round, join = StrokeJoin.Round)
        val trunk = Stroke(width = 9f * scale / 1.75f, cap = StrokeCap.Round, join = StrokeJoin.Round)
        drawPath(pathOf(listOf(f.hip, f.knee2, f.ankle2, f.toe2), ::o), FarLimb, style = limb)
        drawPath(pathOf(listOf(f.shoulder, f.elbow2, f.wrist2), ::o), FarLimb, style = limb)
        drawPath(spinePath(f, ::o), MudryaColors.Text, style = trunk)
        drawPath(pathOf(listOf(f.hip, f.knee, f.ankle, f.toe), ::o), MudryaColors.Text, style = limb)
        drawPath(pathOf(listOf(f.shoulder, f.elbow, f.wrist), ::o), MudryaColors.Text, style = limb)
        drawCircle(MudryaColors.Text, radius = f.headRadius.toFloat() * scale, center = o(f.head))
    }
}

private fun pathOf(points: List<Pt>, o: (Pt) -> Offset): Path = Path().apply {
    val first = o(points.first())
    moveTo(first.x, first.y)
    points.drop(1).forEach { val q = o(it); lineTo(q.x, q.y) }
}

/** Позвоночник — плавная дуга через талию (прогиб и антипрогиб), дальше шея. */
private fun spinePath(f: FigurePoints, o: (Pt) -> Offset): Path = Path().apply {
    val hip = o(f.hip)
    val waist = o(f.waist)
    val sh = o(f.shoulder)
    val neck = o(f.neck)
    // Контрольная точка, при которой квадратичная кривая проходит через талию.
    val cx = 2 * waist.x - (hip.x + sh.x) / 2
    val cy = 2 * waist.y - (hip.y + sh.y) / 2
    moveTo(hip.x, hip.y)
    quadraticTo(cx, cy, sh.x, sh.y)
    lineTo(neck.x, neck.y)
}

private fun DrawScope.breathGlow(f: FigurePoints, fill: BreathFill, o: (Pt) -> Offset, scale: Float) {
    fun lerp(a: Pt, b: Pt, t: Double) = Pt(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t)
    val angle = -Math.toDegrees(kotlin.math.atan2(f.shoulder.y - f.hip.y, f.shoulder.x - f.hip.x)).toFloat()
    fun glow(center: Pt, length: Float, width: Float, color: Color, alpha: Float) {
        val c = o(center)
        rotate(angle, pivot = c) {
            drawOval(
                color = color.copy(alpha = alpha),
                topLeft = Offset(c.x - length * scale, c.y - width * scale),
                size = Size(2 * length * scale, 2 * width * scale),
            )
        }
    }
    glow(lerp(f.hip, f.shoulder, 0.3), 13f, (5 + fill.belly * 5).toFloat(), MudryaColors.Saffron, (0.12 + fill.belly * 0.5).toFloat())
    glow(lerp(f.hip, f.shoulder, 0.68), 14f, (5 + fill.chest * 6).toFloat(), MudryaColors.Moon, (0.12 + fill.chest * 0.55).toFloat())
}
