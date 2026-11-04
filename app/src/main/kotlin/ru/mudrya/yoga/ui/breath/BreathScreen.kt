package ru.mudrya.yoga.ui.breath

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableLongStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.runtime.withFrameMillis
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.platform.LocalView
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.engine.Breathwork
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.theme.MudryaColors

private fun nameOf(id: String) = when (id) {
    "sos" -> R.string.breath_sos
    "calm478" -> R.string.breath_478
    "box" -> R.string.breath_box
    "ujjayi" -> R.string.breath_ujjayi
    "nadi" -> R.string.breath_nadi
    "full" -> R.string.breath_full
    "bhramari" -> R.string.breath_bhramari
    "sitali" -> R.string.breath_sitali
    "kapala" -> R.string.breath_kapala
    else -> R.string.breath_sleep
}

private fun hintOf(id: String) = when (id) {
    "sos" -> R.string.breath_sos_hint
    "calm478" -> R.string.breath_478_hint
    "box" -> R.string.breath_box_hint
    "ujjayi" -> R.string.breath_ujjayi_hint
    "nadi" -> R.string.breath_nadi_hint
    "full" -> R.string.breath_full_hint
    "bhramari" -> R.string.breath_bhramari_hint
    "sitali" -> R.string.breath_sitali_hint
    "kapala" -> R.string.breath_kapala_hint
    else -> R.string.breath_sleep_hint
}

private fun phaseLabel(k: Breathwork.Kind) = when (k) {
    Breathwork.Kind.IN -> R.string.breath_in
    Breathwork.Kind.TOP_UP -> R.string.breath_top_up
    Breathwork.Kind.HOLD -> R.string.breath_hold
    Breathwork.Kind.OUT -> R.string.breath_out
    Breathwork.Kind.HUM -> R.string.breath_hum
    Breathwork.Kind.COOL_IN -> R.string.breath_cool_in
    Breathwork.Kind.PUMP -> R.string.breath_pump
    Breathwork.Kind.REST -> R.string.breath_rest
}

/** Карточка на главном экране: вход в дыхательные практики. */
@Composable
fun BreathCardContent(onOpen: () -> Unit) {
    Card(Modifier.clickable(onClick = onOpen), color = MudryaColors.MoonDeep) {
        SectionLabel(stringResource(R.string.breath_title))
        Body(stringResource(R.string.breath_card_hint), color = MudryaColors.Text)
    }
}

/**
 * Дыхание без поз: SOS на 2 минуты, 4-7-8, квадрат, уджайи, перед сном.
 * Круг растёт на вдохе и сжимается на выдохе; «без задержек» — для беременных и при давлении.
 */
@Composable
fun BreathScreen(state: UserState, onBack: () -> Unit) {
    var running by rememberSaveable { mutableStateOf<String?>(null) }
    var noHolds by rememberSaveable { mutableStateOf(false) }
    val active = running?.let { Breathwork.pattern(it) }
    if (active != null) {
        BackHandler { running = null }
        BreathSession(active, noHolds) { running = null }
        return
    }
    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        ScreenTitle(stringResource(R.string.breath_title))
        Body(stringResource(R.string.breath_intro))
        Row(
            Modifier
                .fillMaxWidth()
                .background(MudryaColors.Surface, RoundedCornerShape(16.dp))
                .clickable { noHolds = !noHolds }
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Column(Modifier.weight(1f)) {
                Text(stringResource(R.string.breath_no_holds), color = MudryaColors.Text, fontSize = 16.sp, fontWeight = FontWeight.Bold)
                Text(stringResource(R.string.breath_no_holds_hint), color = MudryaColors.TextMuted, fontSize = 13.sp, lineHeight = 18.sp)
            }
            androidx.compose.material3.Switch(checked = noHolds, onCheckedChange = { noHolds = it })
        }
        Breathwork.patterns.filter { !noHolds || it.id !in Breathwork.ACTIVE }.forEach { p ->
            Card(Modifier.clickable { running = p.id }) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text(stringResource(nameOf(p.id)), color = MudryaColors.Text, fontSize = 17.sp, fontWeight = FontWeight.Bold, modifier = Modifier.weight(1f))
                    val sec = p.totalSeconds(noHolds)
                    Text(stringResource(R.string.breath_duration, (sec + 30) / 60), color = MudryaColors.Moon, fontSize = 14.sp)
                }
                Body(stringResource(hintOf(p.id)))
                if (p.id in Breathwork.ACTIVE) Text(stringResource(R.string.breath_active_warning), color = MudryaColors.Saffron, fontSize = 13.sp, lineHeight = 18.sp)
            }
        }
        TextAction(stringResource(R.string.back), onBack)
        Spacer(Modifier.height(8.dp))
    }
}

@Composable
private fun BreathSession(p: Breathwork.Pattern, noHolds: Boolean, onDone: () -> Unit) {
    val view = LocalView.current
    DisposableEffect(Unit) {
        view.keepScreenOn = true
        onDispose { view.keepScreenOn = false }
    }
    var elapsed by androidx.compose.runtime.remember { mutableLongStateOf(0L) }
    LaunchedEffect(p.id, noHolds) {
        val start = withFrameMillis { it }
        while (true) {
            val t = withFrameMillis { it } - start
            elapsed = t
            if (Breathwork.at(p, t, noHolds).done) break
        }
    }
    val now = Breathwork.at(p, elapsed, noHolds)
    val lung = Breathwork.lung(p, elapsed, noHolds)
    Column(
        Modifier
            .fillMaxSize()
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(18.dp),
    ) {
        Text(stringResource(nameOf(p.id)), color = MudryaColors.TextMuted, fontSize = 15.sp)
        Box(Modifier.fillMaxWidth().aspectRatio(1f), contentAlignment = Alignment.Center) {
            val moon = MudryaColors.Moon
            val ring = MudryaColors.Border
            Canvas(Modifier.fillMaxSize()) {
                val maxR = size.minDimension / 2f * 0.92f
                val r = maxR * (0.32f + 0.68f * lung)
                drawCircle(ring, radius = maxR, center = Offset(size.width / 2, size.height / 2), style = Stroke(width = 2.dp.toPx()))
                drawCircle(moon.copy(alpha = 0.22f), radius = r, center = Offset(size.width / 2, size.height / 2))
                drawCircle(moon, radius = r, center = Offset(size.width / 2, size.height / 2), style = Stroke(width = 3.dp.toPx()))
            }
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                if (now.done) {
                    Text(stringResource(R.string.breath_done), color = MudryaColors.Text, fontSize = 26.sp, fontWeight = FontWeight.Bold, textAlign = TextAlign.Center)
                } else {
                    Text(stringResource(phaseLabel(now.phase.kind)), color = MudryaColors.Text, fontSize = 28.sp, fontWeight = FontWeight.Bold, textAlign = TextAlign.Center)
                    now.phase.nostril?.let {
                        Text(
                            stringResource(if (it == Breathwork.Nostril.LEFT) R.string.breath_left_nostril else R.string.breath_right_nostril),
                            color = MudryaColors.Saffron,
                            fontSize = 18.sp,
                        )
                    }
                    Text("${now.secondsLeft}", color = MudryaColors.Moon, fontSize = 40.sp, fontWeight = FontWeight.Bold)
                }
            }
        }
        if (!now.done) Text(stringResource(R.string.breath_cycle, now.cycle, p.cycles), color = MudryaColors.TextMuted, fontSize = 14.sp)
        Spacer(Modifier.weight(1f))
        PrimaryButton(stringResource(if (now.done) R.string.breath_finish else R.string.breath_stop), onDone, color = MudryaColors.Moon)
    }
}
