package ru.mudrya.yoga.ui.player

import androidx.compose.foundation.background
import androidx.activity.compose.BackHandler
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
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
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.runtime.withFrameMillis
import kotlinx.coroutines.delay
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalView
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import ru.mudrya.yoga.R
import ru.mudrya.yoga.engine.Feedback
import ru.mudrya.yoga.engine.PhaseKind
import ru.mudrya.yoga.model.Joint
import ru.mudrya.yoga.ui.common.Chip
import ru.mudrya.yoga.ui.common.ChipRow
import ru.mudrya.yoga.ui.common.ChoiceCard
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.appContainer
import ru.mudrya.yoga.ui.common.jointLabel
import ru.mudrya.yoga.ui.common.sequenceName
import ru.mudrya.yoga.engine.PlayerFrame
import ru.mudrya.yoga.model.Breath
import ru.mudrya.yoga.model.Side
import ru.mudrya.yoga.ui.theme.MudryaColors

@Composable
fun PlayerScreen(
    sequenceId: String,
    onClose: () -> Unit,
    vm: PlayerViewModel = viewModel(key = "player-$sequenceId", factory = PlayerViewModel.factory(appContainer().users, sequenceId)),
) {
    val title = sequenceName(sequenceId)
    val c = vm.controller
    val close = {
        vm.abandon()
        onClose()
    }
    BackHandler(onBack = close)
    var frame by remember { mutableStateOf(vm.frame()) }
    var restLeft by remember { mutableStateOf<Int?>(null) }
    val endRest = {
        restLeft = null
        c.setPaused(false)
    }
    LaunchedEffect(restLeft) {
        val left = restLeft ?: return@LaunchedEffect
        if (left <= 0) {
            endRest()
        } else {
            delay(1_000)
            restLeft = left - 1
        }
    }

    val view = LocalView.current
    DisposableEffect(Unit) {
        view.keepScreenOn = true
        onDispose { view.keepScreenOn = false }
    }

    LaunchedEffect(c) {
        var last = withFrameMillis { it }
        while (true) {
            withFrameMillis { now ->
                c.advance(now - last)
                last = now
                frame = vm.frame()
                if (vm.enteredRest(frame)) restLeft = vm.relaxSeconds
            }
        }
    }

    fun act(block: () -> Unit) {
        block()
        frame = vm.frame()
        if (vm.enteredRest(frame)) restLeft = vm.relaxSeconds
    }

    if (frame.finished) {
        FinishView(frame, title) { feedback, zones ->
            vm.finish(feedback, zones)
            onClose()
        }
        return
    }

    Column(
        Modifier
            .fillMaxSize()
            .background(MudryaColors.Ground)
            .padding(horizontal = 16.dp, vertical = 8.dp),
    ) {
        TopBar(frame, title, close)
        Spacer(Modifier.height(8.dp))
        ProgressLine(frame.elapsedMs.toFloat() / frame.totalMs.coerceAtLeast(1).toFloat())
        Spacer(Modifier.height(12.dp))
        StepTitle(frame)
        Box(Modifier.fillMaxWidth().weight(1f)) {
            FigureCanvas(
                pose = frame.pose,
                fill = frame.fill,
                description = frame.step.asana.nameRu,
                modifier = Modifier.fillMaxSize(),
            )
            if (c.metalDogActive) MetalDogOverlay { act { c.setMetalDog(false) } }
            restLeft?.let { RestOverlay(it, frame.step.round, endRest) }
        }
        BreathPanel(frame)
        Spacer(Modifier.height(10.dp))
        Cue(frame)
        Spacer(Modifier.height(12.dp))
        Controls(
                paused = c.paused,
                speed = c.speed,
                phaseSec = c.phaseMs / 1000,
                metalDogOffered = frame.step.metalDog,
                onPrev = { act { c.previousStep() } },
                onPause = { act { c.togglePause() } },
                onNext = { act { c.nextStep() } },
                onSpeed = { act { vm.cycleSpeed() } },
                onPhase = { act { vm.cyclePhaseLength() } },
                onMetalDog = { act { vm.startMetalDog() } },
            )
    }
}

@Composable
private fun TopBar(f: PlayerFrame, title: String, onClose: () -> Unit) {
    Row(verticalAlignment = Alignment.CenterVertically, modifier = Modifier.fillMaxWidth()) {
        Text(
            "✕",
            color = MudryaColors.TextMuted,
            fontSize = 22.sp,
            modifier = Modifier
                .clickable(onClick = onClose)
                .padding(8.dp),
        )
        Text(
            title,
            color = MudryaColors.Text,
            fontWeight = FontWeight.Bold,
            fontSize = 17.sp,
            modifier = Modifier.weight(1f),
        )
        Text(
            stringResource(R.string.player_step_of, f.stepIndex + 1, f.stepCount),
            color = MudryaColors.TextMuted,
            fontSize = 14.sp,
        )
    }
}

@Composable
private fun ProgressLine(value: Float) {
    Box(
        Modifier
            .fillMaxWidth()
            .height(4.dp)
            .background(MudryaColors.Border, RoundedCornerShape(2.dp)),
    ) {
        Box(
            Modifier
                .fillMaxWidth(value.coerceIn(0f, 1f))
                .height(4.dp)
                .background(MudryaColors.Saffron, RoundedCornerShape(2.dp)),
        )
    }
}

@Composable
private fun StepTitle(f: PlayerFrame) {
    val asana = f.step.asana
    val enter = f.phase.kind == PhaseKind.ENTER
    Column(Modifier.fillMaxWidth()) {
        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            Tag(
                if (enter) stringResource(R.string.player_phase_move) else stringResource(R.string.player_phase_hold),
                if (enter) MudryaColors.Moon else MudryaColors.Saffron,
            )
            sideLabel(f.step.side)?.let { Tag(it, MudryaColors.TextMuted) }
        }
        Spacer(Modifier.height(6.dp))
        Text(asana.nameRu, color = MudryaColors.Text, fontSize = 24.sp, fontWeight = FontWeight.Bold)
        asana.sanskrit?.let { Text(it, color = MudryaColors.TextMuted, fontSize = 14.sp) }
        val from = f.previous?.asana?.nameRu
        val next = f.next?.asana?.nameRu
        if (enter && from != null) {
            Text(stringResource(R.string.player_from, from), color = MudryaColors.TextMuted, fontSize = 13.sp)
        } else if (next != null) {
            Text(stringResource(R.string.player_next, next), color = MudryaColors.TextMuted, fontSize = 13.sp)
        }
    }
}

@Composable
private fun sideLabel(side: Side): String? = when (side) {
    Side.RIGHT -> stringResource(R.string.player_side_right)
    Side.LEFT -> stringResource(R.string.player_side_left)
    Side.NONE -> null
}

@Composable
private fun Tag(text: String, color: Color) {
    Text(
        text,
        color = color,
        fontSize = 11.sp,
        fontWeight = FontWeight.Bold,
        letterSpacing = 1.sp,
        modifier = Modifier
            .background(color.copy(alpha = 0.14f), RoundedCornerShape(8.dp))
            .padding(horizontal = 8.dp, vertical = 3.dp),
    )
}

@Composable
private fun BreathPanel(f: PlayerFrame) {
    val inhale = f.phase.breath == Breath.INHALE
    Column(
        Modifier
            .fillMaxWidth()
            .background(MudryaColors.Surface, RoundedCornerShape(16.dp))
            .padding(14.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Text(
                if (inhale) stringResource(R.string.player_inhale) else stringResource(R.string.player_exhale),
                color = if (inhale) MudryaColors.Moon else MudryaColors.Saffron,
                fontSize = 20.sp,
                fontWeight = FontWeight.Bold,
                modifier = Modifier.weight(1f),
            )
            if (f.phase.count > 1) {
                Text(
                    stringResource(R.string.player_breath_of, f.phase.index + 1, f.phase.count),
                    color = MudryaColors.TextMuted,
                    fontSize = 13.sp,
                    modifier = Modifier.padding(end = 10.dp),
                )
            }
            Text("${f.secondsLeftInPhase}", color = MudryaColors.Text, fontSize = 20.sp, fontWeight = FontWeight.Bold)
        }
        Bar(stringResource(R.string.player_belly), (f.fill.belly / 0.6).toFloat(), MudryaColors.Saffron)
        Bar(stringResource(R.string.player_chest), f.fill.chest.toFloat(), MudryaColors.Moon)
        Text(
            if (inhale) stringResource(R.string.player_hint_inhale) else stringResource(R.string.player_hint_exhale),
            color = MudryaColors.TextMuted,
            fontSize = 13.sp,
        )
    }
}

@Composable
private fun Bar(label: String, value: Float, color: Color) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Text(label, color = MudryaColors.TextMuted, fontSize = 12.sp, modifier = Modifier.width(60.dp))
        Box(
            Modifier
                .weight(1f)
                .height(8.dp)
                .background(MudryaColors.Border, RoundedCornerShape(4.dp)),
        ) {
            Box(
                Modifier
                    .fillMaxWidth(value.coerceIn(0f, 1f))
                    .height(8.dp)
                    .background(color, RoundedCornerShape(4.dp)),
            )
        }
    }
}

@Composable
private fun Cue(f: PlayerFrame) {
    val cues = f.step.asana.cuesRu
    if (cues.isEmpty()) return
    // Подсказки сменяются по фазам: одна строка — меньше читать во время практики.
    val i = (f.phase.index + if (f.phase.kind == PhaseKind.HOLD) 1 else 0) % cues.size
    Text(cues[i], color = MudryaColors.Text, fontSize = 15.sp, modifier = Modifier.fillMaxWidth())
}

@Composable
private fun Controls(
    paused: Boolean,
    speed: Double,
    phaseSec: Long,
    metalDogOffered: Boolean,
    onPrev: () -> Unit,
    onPause: () -> Unit,
    onNext: () -> Unit,
    onSpeed: () -> Unit,
    onPhase: () -> Unit,
    onMetalDog: () -> Unit,
) {
    Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
        Row(
            Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceEvenly,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            RoundButton("⏮", 52, MudryaColors.Surface, MudryaColors.Text, stringResource(R.string.player_prev), onPrev)
            RoundButton(if (paused) "▶" else "❚❚", 68, MudryaColors.Saffron, MudryaColors.Ground, stringResource(R.string.player_pause), onPause)
            RoundButton("⏭", 52, MudryaColors.Surface, MudryaColors.Text, stringResource(R.string.player_next_step), onNext)
        }
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            SmallButton(stringResource(R.string.player_speed, formatSpeed(speed)), Modifier.weight(1f), onSpeed)
            SmallButton(stringResource(R.string.player_phase_len, phaseSec), Modifier.weight(1f), onPhase)
            SmallButton(
                stringResource(R.string.player_metal_dog_short),
                Modifier.weight(1f),
                onMetalDog,
                highlight = metalDogOffered,
            )
        }
    }
}

private fun formatSpeed(s: Double): String = when (s) {
    0.75 -> "0.75×"
    1.25 -> "1.25×"
    else -> "1×"
}

@Composable
private fun RoundButton(symbol: String, sizeDp: Int, bg: Color, fg: Color, label: String, onClick: () -> Unit) {
    Box(
        Modifier
            .size(sizeDp.dp)
            .background(bg, CircleShape)
            .clickable(onClickLabel = label, onClick = onClick),
        contentAlignment = Alignment.Center,
    ) {
        Text(symbol, color = fg, fontSize = (sizeDp / 2.6).sp, fontWeight = FontWeight.Bold)
    }
}

@Composable
private fun SmallButton(text: String, modifier: Modifier, onClick: () -> Unit, highlight: Boolean = false) {
    Text(
        text,
        color = if (highlight) MudryaColors.Ground else MudryaColors.Text,
        fontSize = 13.sp,
        textAlign = TextAlign.Center,
        modifier = modifier
            .background(if (highlight) MudryaColors.Moon else MudryaColors.Surface, RoundedCornerShape(12.dp))
            .clickable(onClick = onClick)
            .padding(vertical = 10.dp, horizontal = 6.dp),
    )
}

/** Расслабление лёжа на спине между кругами — с таймером. */
@Composable
private fun RestOverlay(secondsLeft: Int, nextRound: Int, onDone: () -> Unit) {
    Column(
        Modifier
            .fillMaxSize()
            .background(MudryaColors.Ground.copy(alpha = 0.94f), RoundedCornerShape(20.dp))
            .padding(20.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Text(stringResource(R.string.rest_title), color = MudryaColors.Saffron, fontSize = 22.sp, fontWeight = FontWeight.Bold, textAlign = TextAlign.Center)
        Spacer(Modifier.height(8.dp))
        Text("%d:%02d".format(secondsLeft / 60, secondsLeft % 60), color = MudryaColors.Text, fontSize = 48.sp, fontWeight = FontWeight.Bold)
        Spacer(Modifier.height(8.dp))
        Text(stringResource(R.string.rest_hint, nextRound), color = MudryaColors.TextMuted, fontSize = 15.sp, textAlign = TextAlign.Center)
        Spacer(Modifier.height(18.dp))
        Button(
            onClick = onDone,
            colors = ButtonDefaults.buttonColors(containerColor = MudryaColors.Saffron, contentColor = MudryaColors.Ground),
            shape = RoundedCornerShape(14.dp),
        ) { Text(stringResource(R.string.rest_skip), fontWeight = FontWeight.Bold) }
    }
}

@Composable
private fun MetalDogOverlay(onDone: () -> Unit) {
    Column(
        Modifier
            .fillMaxSize()
            .background(MudryaColors.Ground.copy(alpha = 0.9f), RoundedCornerShape(20.dp))
            .padding(20.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Text(stringResource(R.string.player_metal_dog), color = MudryaColors.Moon, fontSize = 22.sp, fontWeight = FontWeight.Bold, textAlign = TextAlign.Center)
        Spacer(Modifier.height(10.dp))
        Text(stringResource(R.string.player_metal_dog_hint), color = MudryaColors.Text, fontSize = 15.sp, textAlign = TextAlign.Center)
        Spacer(Modifier.height(18.dp))
        Button(
            onClick = onDone,
            colors = ButtonDefaults.buttonColors(containerColor = MudryaColors.Moon, contentColor = MudryaColors.Ground),
            shape = RoundedCornerShape(14.dp),
        ) { Text(stringResource(R.string.player_continue), fontWeight = FontWeight.Bold) }
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
private fun FinishView(f: PlayerFrame, title: String, onSave: (Feedback, Set<Joint>) -> Unit) {
    var feedback by remember { mutableStateOf<Feedback?>(null) }
    var zones by remember { mutableStateOf(emptySet<Joint>()) }
    Column(
        Modifier
            .fillMaxSize()
            .background(MudryaColors.Ground)
            .verticalScroll(rememberScrollState())
            .padding(24.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        Spacer(Modifier.height(12.dp))
        Text(stringResource(R.string.player_done, title), color = MudryaColors.Saffron, fontSize = 28.sp, fontWeight = FontWeight.Bold)
        Text(
            stringResource(R.string.player_done_stats, f.stepCount, (f.totalMs / 60_000).toInt()),
            color = MudryaColors.Text,
            fontSize = 16.sp,
        )
        Spacer(Modifier.height(8.dp))
        SectionLabel(stringResource(R.string.finish_how))
        ChoiceCard(stringResource(R.string.finish_easy), stringResource(R.string.finish_easy_hint), feedback == Feedback.EASY, { feedback = Feedback.EASY })
        ChoiceCard(stringResource(R.string.finish_ok), stringResource(R.string.finish_ok_hint), feedback == Feedback.OK, { feedback = Feedback.OK })
        ChoiceCard(stringResource(R.string.finish_hard), stringResource(R.string.finish_hard_hint), feedback == Feedback.HARD, { feedback = Feedback.HARD })
        Spacer(Modifier.height(4.dp))
        SectionLabel(stringResource(R.string.finish_zones))
        ChipRow {
            Joint.entries.forEach { j ->
                Chip(jointLabel(j), j in zones, { zones = if (j in zones) zones - j else zones + j }, accent = MudryaColors.Moon)
            }
        }
        Spacer(Modifier.height(8.dp))
        PrimaryButton(stringResource(R.string.player_finish), { feedback?.let { onSave(it, zones) } }, enabled = feedback != null)
    }
}
