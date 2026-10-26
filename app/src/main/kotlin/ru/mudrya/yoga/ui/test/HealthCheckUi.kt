package ru.mudrya.yoga.ui.test

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableDoubleStateOf
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.engine.HealthCheck
import ru.mudrya.yoga.engine.HealthFinding
import ru.mudrya.yoga.engine.HealthLevel
import ru.mudrya.yoga.engine.HealthMetric
import ru.mudrya.yoga.engine.HealthRecord
import ru.mudrya.yoga.engine.HealthSummary
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.Chip
import ru.mudrya.yoga.ui.common.ChipRow
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.Stepper
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.theme.MudryaColors
import java.util.Locale
import kotlin.math.roundToInt

/** Вопросы анкеты здоровья — после тестов движения. */
enum class HealthQuestion { BODY, WAIST, PULSE, STAIRS, SITTING }

private fun f1(x: Double) = if (x % 1.0 == 0.0) x.roundToInt().toString() else String.format(Locale.getDefault(), "%.1f", x)

/** Одна страница анкеты: ответ записывается в [answers] (ключ — имя поля HealthRecord). */
@Composable
fun HealthPage(index: Int, count: Int, q: HealthQuestion, answers: HashMap<String, Double>, onNext: () -> Unit) {
    Column(Modifier.fillMaxSize()) {
        Column(Modifier.weight(1f).verticalScroll(rememberScrollState()), verticalArrangement = Arrangement.spacedBy(12.dp)) {
            SectionLabel(stringResource(R.string.health_n_of, index + 1, count))
            when (q) {
                HealthQuestion.BODY -> {
                    var h by rememberSaveable { mutableDoubleStateOf(answers["height"] ?: 170.0) }
                    var w by rememberSaveable { mutableDoubleStateOf(answers["weight"] ?: 70.0) }
                    ScreenTitle(stringResource(R.string.health_body_title))
                    Body(stringResource(R.string.health_body_how), color = MudryaColors.Text)
                    Text(stringResource(R.string.health_height), color = MudryaColors.TextMuted)
                    Stepper("${h.roundToInt()} см".takeIf { isRu() } ?: "${h.roundToInt()} cm", { h = (h - 1).coerceAtLeast(120.0) }, { h = (h + 1).coerceAtMost(220.0) },
                        onBigMinus = { h = (h - 5).coerceAtLeast(120.0) }, onBigPlus = { h = (h + 5).coerceAtMost(220.0) })
                    Text(stringResource(R.string.health_weight), color = MudryaColors.TextMuted)
                    Stepper(f1(w) + if (isRu()) " кг" else " kg", { w = ((w - 0.5) * 2).roundToInt() / 2.0 }, { w = ((w + 0.5) * 2).roundToInt() / 2.0 },
                        onBigMinus = { w = (w - 5).coerceAtLeast(30.0) }, onBigPlus = { w = (w + 5).coerceAtMost(250.0) })
                    answers["height"] = h
                    answers["weight"] = w
                }
                HealthQuestion.WAIST -> {
                    var v by rememberSaveable { mutableDoubleStateOf(answers["waist"] ?: 85.0) }
                    ScreenTitle(stringResource(R.string.health_waist_title))
                    Body(stringResource(R.string.health_waist_how), color = MudryaColors.Text)
                    Stepper(f1(v) + if (isRu()) " см" else " cm", { v = (v - 1).coerceAtLeast(40.0) }, { v = (v + 1).coerceAtMost(200.0) },
                        onBigMinus = { v = (v - 5).coerceAtLeast(40.0) }, onBigPlus = { v = (v + 5).coerceAtMost(200.0) })
                    answers["waist"] = v
                }
                HealthQuestion.PULSE -> {
                    var v by rememberSaveable { mutableIntStateOf(answers["hr"]?.toInt() ?: 70) }
                    ScreenTitle(stringResource(R.string.health_pulse_title))
                    Body(stringResource(R.string.health_pulse_how), color = MudryaColors.Text)
                    Stepper(stringResource(R.string.health_bpm, v), { v = (v - 1).coerceAtLeast(35) }, { v = (v + 1).coerceAtMost(140) },
                        onBigMinus = { v = (v - 5).coerceAtLeast(35) }, onBigPlus = { v = (v + 5).coerceAtMost(140) })
                    answers["hr"] = v.toDouble()
                }
                HealthQuestion.STAIRS -> {
                    var v by rememberSaveable { mutableIntStateOf(answers["stairs"]?.toInt() ?: -1) }
                    ScreenTitle(stringResource(R.string.health_stairs_title))
                    Body(stringResource(R.string.health_stairs_how), color = MudryaColors.Text)
                    ChipRow {
                        listOf(40 to R.string.health_stairs_45, 55 to R.string.health_stairs_60, 80 to R.string.health_stairs_90,
                            100 to R.string.health_stairs_slow, 0 to R.string.health_stairs_cannot).forEach { (sec, label) ->
                            Chip(stringResource(label), v == sec, { v = sec })
                        }
                    }
                    if (v >= 0) answers["stairs"] = v.toDouble() else answers.remove("stairs")
                }
                HealthQuestion.SITTING -> {
                    var v by rememberSaveable { mutableIntStateOf(answers["sitting"]?.toInt() ?: 6) }
                    ScreenTitle(stringResource(R.string.health_sitting_title))
                    Body(stringResource(R.string.health_sitting_how), color = MudryaColors.Text)
                    Stepper(stringResource(R.string.health_hours, v), { v = (v - 1).coerceAtLeast(0) }, { v = (v + 1).coerceAtMost(16) })
                    answers["sitting"] = v.toDouble()
                }
            }
        }
        PrimaryButton(stringResource(R.string.test_record), onNext)
        TextAction(stringResource(R.string.test_skip), {
            when (q) {
                HealthQuestion.BODY -> { answers.remove("height"); answers.remove("weight") }
                HealthQuestion.WAIST -> answers.remove("waist")
                HealthQuestion.PULSE -> answers.remove("hr")
                HealthQuestion.STAIRS -> answers.remove("stairs")
                HealthQuestion.SITTING -> answers.remove("sitting")
            }
            onNext()
        })
    }
}

private fun isRu() = Locale.getDefault().language == "ru"

/** Ответы анкеты → запись. */
fun healthRecord(answers: Map<String, Double>, atMs: Long, day: Long) = HealthRecord(
    atMs = atMs,
    localDay = day,
    heightCm = answers["height"],
    weightKg = answers["weight"],
    waistCm = answers["waist"],
    restingHr = answers["hr"]?.toInt(),
    stairsSec = answers["stairs"]?.toInt(),
    sittingHours = answers["sitting"]?.toInt(),
)

fun levelColor(l: HealthLevel): Color = when (l) {
    HealthLevel.GOOD -> Color(0xFF6CC49B)
    HealthLevel.OK -> MudryaColors.Moon
    HealthLevel.RISK -> MudryaColors.Saffron
    HealthLevel.HIGH -> Color(0xFFE0645A)
}

/** Карточки выводов анкеты и призыв к премиум-программе. */
@Composable
fun HealthSummaryView(record: HealthRecord, summary: HealthSummary, onPremium: (() -> Unit)?) {
    if (summary.findings.isEmpty()) return
    Card {
        SectionLabel(stringResource(R.string.health_result_title))
        Row(verticalAlignment = Alignment.CenterVertically) {
            Box(Modifier.size(12.dp).background(levelColor(summary.overall), CircleShape))
            Spacer(Modifier.size(8.dp))
            Text(stringResource(overallText(summary.overall)), color = MudryaColors.Text, fontSize = 16.sp, fontWeight = FontWeight.Bold)
        }
        summary.findings.forEach { FindingRow(it) }
        val h = record.heightCm
        val w = record.weightKg
        if (h != null && w != null) {
            HealthCheck.targetWeight(h, w)?.let { t ->
                Body(stringResource(R.string.health_target, f1(w - t), f1(t)), color = MudryaColors.Text)
            }
        }
        Body(stringResource(R.string.health_disclaimer))
        if (onPremium != null && summary.overall != HealthLevel.GOOD) {
            Text(stringResource(R.string.health_premium_pitch), color = MudryaColors.Saffron, fontSize = 15.sp)
            PrimaryButton(stringResource(R.string.health_premium_button), onPremium)
        }
    }
}

private fun overallText(l: HealthLevel) = when (l) {
    HealthLevel.GOOD -> R.string.health_overall_good
    HealthLevel.OK -> R.string.health_overall_ok
    HealthLevel.RISK -> R.string.health_overall_risk
    HealthLevel.HIGH -> R.string.health_overall_high
}

@Composable
private fun FindingRow(f: HealthFinding) {
    val title = when (f.metric) {
        HealthMetric.BMI -> stringResource(R.string.health_m_bmi, f1(f.value))
        HealthMetric.WAIST_TO_HEIGHT -> stringResource(R.string.health_m_whtr, String.format(Locale.US, "%.2f", f.value))
        HealthMetric.WAIST -> stringResource(R.string.health_m_waist, f1(f.value))
        HealthMetric.RESTING_HR -> stringResource(R.string.health_m_hr, f.value.toInt())
        HealthMetric.STAIRS -> stringResource(R.string.health_m_stairs)
        HealthMetric.SITTING -> stringResource(R.string.health_m_sitting, f.value.toInt())
    }
    val verdict = stringResource(verdictRes(f))
    Row(Modifier.fillMaxWidth().padding(vertical = 4.dp), verticalAlignment = Alignment.Top) {
        Box(Modifier.padding(top = 6.dp).size(10.dp).background(levelColor(f.level), CircleShape))
        Spacer(Modifier.size(10.dp))
        Column {
            Text(title, color = MudryaColors.Text, fontSize = 15.sp, fontWeight = FontWeight.Bold)
            Text(verdict, color = MudryaColors.TextMuted, fontSize = 14.sp)
        }
    }
}

private fun verdictRes(f: HealthFinding): Int = when (f.metric) {
    HealthMetric.BMI -> when (f.grade) {
        "UNDER" -> R.string.health_bmi_under
        "NORMAL" -> R.string.health_bmi_normal
        "OVER" -> R.string.health_bmi_over
        "OBESE1" -> R.string.health_bmi_obese1
        "OBESE2" -> R.string.health_bmi_obese2
        else -> R.string.health_bmi_obese3
    }
    HealthMetric.WAIST_TO_HEIGHT -> when (f.level) {
        HealthLevel.GOOD -> R.string.health_whtr_good
        HealthLevel.HIGH -> R.string.health_whtr_high
        else -> R.string.health_whtr_risk
    }
    HealthMetric.WAIST -> when (f.level) {
        HealthLevel.GOOD -> R.string.health_waist_good
        HealthLevel.HIGH -> R.string.health_waist_high
        else -> R.string.health_waist_risk
    }
    HealthMetric.RESTING_HR -> when (f.grade) {
        "EXCELLENT" -> R.string.health_hr_excellent
        "GOOD" -> R.string.health_hr_good
        "AVERAGE" -> R.string.health_hr_average
        "BELOW" -> R.string.health_hr_below
        "TACHY" -> R.string.health_hr_tachy
        else -> R.string.health_hr_poor
    }
    HealthMetric.STAIRS -> when (f.grade) {
        "FIT" -> R.string.health_stairs_fit
        "GOOD" -> R.string.health_stairs_good
        "AVERAGE" -> R.string.health_stairs_average
        "CANNOT" -> R.string.health_stairs_cannot_v
        else -> R.string.health_stairs_low
    }
    HealthMetric.SITTING -> when (f.level) {
        HealthLevel.GOOD -> R.string.health_sit_good
        HealthLevel.OK -> R.string.health_sit_ok
        else -> R.string.health_sit_risk
    }
}
