package ru.mudrya.yoga.ui.home

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableDoubleStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.BodyLog
import ru.mudrya.yoga.engine.BodyTrend
import ru.mudrya.yoga.engine.Challenge108
import ru.mudrya.yoga.engine.MovementRecord
import ru.mudrya.yoga.engine.PracticeCalendar
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.Stepper
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.theme.MudryaColors
import java.time.DayOfWeek
import java.time.Month
import java.time.format.TextStyle
import java.util.Locale
import kotlin.math.roundToInt

/** Календарь практик за месяц: закрашены дни с завершённой практикой. */
@Composable
fun CalendarCard(state: UserState, today: Long) {
    var ym by rememberSaveable { mutableStateOf(PracticeCalendar.monthOf(today)) }
    val month = remember(state.sessions, ym) { PracticeCalendar.month(state, ym.first, ym.second) }
    Card {
        Row(Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
            TextAction("‹", { ym = PracticeCalendar.shift(ym.first, ym.second, -1) })
            Text(
                Month.of(month.month).getDisplayName(TextStyle.FULL_STANDALONE, Locale.getDefault()).replaceFirstChar { it.titlecase() } + " ${month.year}",
                color = MudryaColors.Text,
                fontSize = 17.sp,
                fontWeight = FontWeight.Bold,
                textAlign = TextAlign.Center,
                modifier = Modifier.weight(1f),
            )
            TextAction("›", { ym = PracticeCalendar.shift(ym.first, ym.second, 1) })
        }
        Row(Modifier.fillMaxWidth()) {
            DayOfWeek.values().forEach { d ->
                Text(
                    d.getDisplayName(TextStyle.SHORT, Locale.getDefault()),
                    color = MudryaColors.TextMuted,
                    fontSize = 11.sp,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.weight(1f),
                )
            }
        }
        month.weeks.forEach { week ->
            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                week.forEach { day ->
                    Box(
                        Modifier
                            .weight(1f)
                            .aspectRatio(1f)
                            .background(
                                when {
                                    day == null -> MudryaColors.Ground.copy(alpha = 0f)
                                    day.completed -> MudryaColors.Saffron
                                    day.minutes > 0 -> MudryaColors.SaffronDeep
                                    else -> MudryaColors.Border
                                },
                                RoundedCornerShape(6.dp),
                            ),
                        contentAlignment = Alignment.Center,
                    ) {
                        if (day != null) {
                            Text(
                                "${day.dayOfMonth}",
                                color = if (day.completed) MudryaColors.Ground else if (day.localDay == today) MudryaColors.Saffron else MudryaColors.Text,
                                fontSize = 12.sp,
                                fontWeight = if (day.localDay == today) FontWeight.Bold else FontWeight.Normal,
                            )
                        }
                    }
                }
            }
        }
        Body(stringResource(R.string.calendar_summary, month.activeDays, month.minutes))
    }
}

/** Вызов «108 кругов»: старт, прогресс, повтор. */
@Composable
fun ChallengeCard(state: UserState, users: UserRepository, today: Long) {
    val c = remember(state.sessions, state.challengeStart) { Challenge108.of(state) }
    Card {
        SectionLabel(stringResource(R.string.challenge_title))
        if (c == null) {
            Body(stringResource(R.string.challenge_hint))
            PrimaryButton(stringResource(R.string.challenge_start), { users.update { it.copy(challengeStart = today) } })
        } else {
            Text(
                stringResource(R.string.challenge_progress, c.rounds, Challenge108.TARGET),
                color = MudryaColors.Saffron,
                fontSize = 22.sp,
                fontWeight = FontWeight.Bold,
            )
            Box(Modifier.fillMaxWidth().height(10.dp).background(MudryaColors.Border, RoundedCornerShape(5.dp))) {
                Box(
                    Modifier
                        .fillMaxWidth(c.fraction.toFloat().coerceAtLeast(0.02f))
                        .height(10.dp)
                        .background(MudryaColors.Saffron, RoundedCornerShape(5.dp)),
                )
            }
            Body(
                if (c.done) stringResource(R.string.challenge_done, c.days) else stringResource(R.string.challenge_left, c.left, c.days),
                color = MudryaColors.Text,
            )
            TextAction(stringResource(if (c.done) R.string.challenge_again else R.string.challenge_reset), {
                users.update { it.copy(challengeStart = if (c.done) today else null) }
            })
        }
    }
}

/** Вес и талия: ввод за сегодня и изменение с первого замера. */
@Composable
fun BodyCard(state: UserState, users: UserRepository, today: Long) {
    val trend = remember(state.body) { BodyTrend.of(state.body) }
    var editing by rememberSaveable { mutableStateOf(false) }
    var weight by rememberSaveable { mutableDoubleStateOf(BodyLog.lastWeight(state.body) ?: 70.0) }
    var waist by rememberSaveable { mutableDoubleStateOf(BodyLog.lastWaist(state.body) ?: 80.0) }
    fun fmt(x: Double) = if (x == x.roundToInt().toDouble()) "${x.roundToInt()}" else String.format(Locale.getDefault(), "%.1f", x)
    fun signed(x: Double) = (if (x > 0) "+" else "") + fmt(x)
    Card {
        SectionLabel(stringResource(R.string.body_title))
        if (state.body.isEmpty() && !editing) Body(stringResource(R.string.body_hint))
        trend.lastWeight?.let { w ->
            Row(Modifier.fillMaxWidth()) {
                Text(stringResource(R.string.body_weight), color = MudryaColors.TextMuted, fontSize = 14.sp, modifier = Modifier.weight(1f))
                Text(
                    stringResource(R.string.body_kg, fmt(w)) + (trend.weightChange?.takeIf { it != 0.0 }?.let { "  (${signed(it)})" } ?: ""),
                    color = MudryaColors.Text,
                    fontSize = 15.sp,
                    fontWeight = FontWeight.Bold,
                )
            }
        }
        trend.lastWaist?.let { t ->
            Row(Modifier.fillMaxWidth()) {
                Text(stringResource(R.string.body_waist), color = MudryaColors.TextMuted, fontSize = 14.sp, modifier = Modifier.weight(1f))
                Text(
                    stringResource(R.string.body_cm, fmt(t)) + (trend.waistChange?.takeIf { it != 0.0 }?.let { "  (${signed(it)})" } ?: ""),
                    color = MudryaColors.Text,
                    fontSize = 15.sp,
                    fontWeight = FontWeight.Bold,
                )
            }
        }
        if (editing) {
            Text(stringResource(R.string.body_weight), color = MudryaColors.Text, fontSize = 14.sp)
            Stepper(
                stringResource(R.string.body_kg, fmt(weight)),
                onMinus = { weight = ((weight - 0.1) * 10).roundToInt() / 10.0 },
                onPlus = { weight = ((weight + 0.1) * 10).roundToInt() / 10.0 },
                onBigMinus = { weight = (weight - 1).coerceAtLeast(30.0) },
                onBigPlus = { weight = (weight + 1).coerceAtMost(250.0) },
                bigLabel = "1",
            )
            Text(stringResource(R.string.body_waist), color = MudryaColors.Text, fontSize = 14.sp)
            Stepper(
                stringResource(R.string.body_cm, fmt(waist)),
                onMinus = { waist = ((waist - 0.5) * 10).roundToInt() / 10.0 },
                onPlus = { waist = ((waist + 0.5) * 10).roundToInt() / 10.0 },
                onBigMinus = { waist = (waist - 5).coerceAtLeast(40.0) },
                onBigPlus = { waist = (waist + 5).coerceAtMost(200.0) },
            )
            PrimaryButton(stringResource(R.string.body_save), {
                users.update { it.copy(body = BodyLog.put(it.body, today, weight, waist)) }
                editing = false
            })
        } else {
            PrimaryButton(stringResource(R.string.body_add), { editing = true }, color = MudryaColors.Moon)
        }
    }
}

/** Линия возраста движения по всем тестам: вниз — лучше. */
@Composable
fun MovementAgeChart(tests: List<MovementRecord>) {
    val sorted = tests.sortedBy { it.atMs }
    if (sorted.size < 2) return
    val ages = sorted.map { it.movementAge }
    val passport = sorted.map { it.chronologicalAge }
    val lo = (ages + passport).min() - 2
    val hi = (ages + passport).max() + 2
    Column {
        Canvas(Modifier.fillMaxWidth().height(120.dp)) {
            fun pt(i: Int, v: Int) = Offset(
                size.width * i / (sorted.size - 1).toFloat(),
                size.height * (1f - (v - lo).toFloat() / (hi - lo).toFloat()),
            )
            val ref = Path().apply {
                passport.forEachIndexed { i, v -> pt(i, v).let { if (i == 0) moveTo(it.x, it.y) else lineTo(it.x, it.y) } }
            }
            drawPath(ref, MudryaColors.Border, style = Stroke(width = 3f, cap = StrokeCap.Round))
            val line = Path().apply {
                ages.forEachIndexed { i, v -> pt(i, v).let { if (i == 0) moveTo(it.x, it.y) else lineTo(it.x, it.y) } }
            }
            drawPath(line, MudryaColors.Saffron, style = Stroke(width = 6f, cap = StrokeCap.Round))
            ages.forEachIndexed { i, v -> drawCircle(MudryaColors.Saffron, radius = 8f, center = pt(i, v)) }
        }
        Body(stringResource(R.string.age_chart_legend))
    }
}
