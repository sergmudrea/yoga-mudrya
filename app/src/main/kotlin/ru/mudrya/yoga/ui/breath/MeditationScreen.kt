package ru.mudrya.yoga.ui.breath

import android.annotation.SuppressLint
import android.content.Context
import androidx.activity.compose.BackHandler
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalView
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay
import ru.mudrya.yoga.R
import ru.mudrya.yoga.engine.Meditations
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.player.VoiceGuide
import ru.mudrya.yoga.ui.theme.MudryaColors

private fun medName(id: String) = when (id) {
    "nidra" -> R.string.med_nidra
    "trataka" -> R.string.med_trataka
    "soham" -> R.string.med_soham
    "gap" -> R.string.med_gap
    else -> R.string.med_sleep
}

private fun medHint(id: String) = when (id) {
    "nidra" -> R.string.med_nidra_hint
    "trataka" -> R.string.med_trataka_hint
    "soham" -> R.string.med_soham_hint
    "gap" -> R.string.med_gap_hint
    else -> R.string.med_sleep_hint
}

/** Текст строки медитации: ресурс med_<id>_<n>. */
@SuppressLint("DiscouragedApi")
private fun lineText(context: Context, id: String, index: Int): String {
    val res = context.resources.getIdentifier("med_${id}_${index + 1}", "string", context.packageName)
    return if (res != 0) context.getString(res) else ""
}

/** Карточка на главном экране. */
@Composable
fun MeditationCardContent(onOpen: () -> Unit) {
    Card(Modifier.clickable(onClick = onOpen), color = MudryaColors.SaffronDeep) {
        SectionLabel(stringResource(R.string.med_title))
        Body(stringResource(R.string.med_card_hint), color = MudryaColors.Text)
    }
}

@Composable
fun MeditationScreen(premium: Boolean, onPaywall: () -> Unit, onBack: () -> Unit) {
    val context = LocalContext.current
    var running by rememberSaveable { mutableStateOf<String?>(null) }
    val active = running?.let { Meditations.get(it) }
    if (active != null) {
        BackHandler { running = null }
        MeditationSession(active) { running = null }
        return
    }
    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        ScreenTitle(stringResource(R.string.med_title))
        Body(stringResource(R.string.med_intro))
        Meditations.all.forEachIndexed { i, m ->
            // Первая медитация бесплатно, остальные — в премиуме.
            val locked = !premium && i > 0
            Card(Modifier.clickable { if (locked) onPaywall() else running = m.id }) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text(stringResource(medName(m.id)), color = MudryaColors.Text, fontSize = 17.sp, fontWeight = FontWeight.Bold, modifier = Modifier.weight(1f))
                    val sec = Meditations.estimateSeconds(m) { lineText(context, m.id, it).length }
                    Text(
                        if (locked) "🔒 " + stringResource(R.string.med_minutes, (sec + 30) / 60) else stringResource(R.string.med_minutes, (sec + 30) / 60),
                        color = MudryaColors.Saffron,
                        fontSize = 14.sp,
                    )
                }
                Body(stringResource(medHint(m.id)))
            }
        }
        TextAction(stringResource(R.string.back), onBack)
        Spacer(Modifier.height(8.dp))
    }
}

@Composable
private fun MeditationSession(m: Meditations.Meditation, onDone: () -> Unit) {
    val context = LocalContext.current
    val view = LocalView.current
    val voice = remember { VoiceGuide(context) }
    DisposableEffect(Unit) {
        view.keepScreenOn = true
        onDispose {
            view.keepScreenOn = false
            voice.release()
        }
    }
    var index by rememberSaveable { mutableIntStateOf(0) }
    var paused by rememberSaveable { mutableStateOf(false) }
    val done = index >= m.lines
    LaunchedEffect(index, paused) {
        if (done || paused) return@LaunchedEffect
        val text = lineText(context, m.id, index)
        delay(600)
        voice.say(text)
        delay((Meditations.speechSeconds(text.length) + m.pauses[index]) * 1000L)
        index += 1
    }
    LaunchedEffect(done) { if (done) voice.say(context.getString(R.string.med_done)) }
    Column(
        Modifier
            .fillMaxSize()
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(18.dp),
    ) {
        Text(stringResource(medName(m.id)), color = MudryaColors.TextMuted, fontSize = 15.sp)
        LinearProgressIndicator(
            progress = { (index.coerceAtMost(m.lines)).toFloat() / m.lines },
            modifier = Modifier.fillMaxWidth(),
            color = MudryaColors.Saffron,
            trackColor = MudryaColors.Border,
        )
        Box(Modifier.weight(1f).fillMaxWidth(), contentAlignment = Alignment.Center) {
            Text(
                if (done) stringResource(R.string.med_done) else lineText(context, m.id, index),
                color = MudryaColors.Text,
                fontSize = 24.sp,
                lineHeight = 32.sp,
                textAlign = TextAlign.Center,
            )
        }
        if (!voice.ready) Text(stringResource(R.string.med_no_voice), color = MudryaColors.TextMuted, fontSize = 13.sp, textAlign = TextAlign.Center)
        if (!done) {
            PrimaryButton(stringResource(if (paused) R.string.med_resume else R.string.med_pause), {
                paused = !paused
                if (paused) voice.stop()
            }, color = MudryaColors.Moon)
        }
        TextAction(stringResource(if (done) R.string.breath_finish else R.string.med_stop), onDone)
    }
}
