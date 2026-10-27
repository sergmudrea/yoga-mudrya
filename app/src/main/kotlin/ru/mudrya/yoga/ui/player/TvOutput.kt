package ru.mudrya.yoga.ui.player

import android.app.Presentation
import android.content.ActivityNotFoundException
import android.content.Context
import android.content.ContextWrapper
import android.content.Intent
import android.hardware.display.DisplayManager
import android.os.Bundle
import android.provider.Settings
import android.view.Display
import android.view.WindowManager
import androidx.activity.ComponentActivity
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.setViewTreeLifecycleOwner
import androidx.lifecycle.setViewTreeViewModelStoreOwner
import androidx.savedstate.setViewTreeSavedStateRegistryOwner
import ru.mudrya.yoga.R
import ru.mudrya.yoga.engine.PhaseKind
import ru.mudrya.yoga.engine.PlayerFrame
import ru.mudrya.yoga.model.Breath
import ru.mudrya.yoga.ui.common.shownTitle
import ru.mudrya.yoga.ui.common.shownCues
import ru.mudrya.yoga.ui.theme.MudryaColors
import ru.mudrya.yoga.ui.theme.MudryaTheme

/** Что показывает второй экран. Обновляется плеером на каждом кадре. */
class TvState(frame: PlayerFrame, title: String) {
    var frame by mutableStateOf(frame)
    var title by mutableStateOf(title)
    var restLeft by mutableStateOf<Int?>(null)
    var transitionMs by mutableStateOf(4_000L)
    var use3d by mutableStateOf(true)
    var cameraYaw by mutableStateOf(16)
}

/**
 * Второй экран через Presentation API: работает с Miracast, HDMI-переходником,
 * беспроводным повтором экрана и док-станциями. Телефон в это время — пульт.
 */
private class FigurePresentation(
    outer: Context,
    display: Display,
    private val activity: ComponentActivity,
    private val state: TvState,
) : Presentation(outer, display) {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        window?.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        val view = ComposeView(context).apply {
            // У Presentation своё окно: владельцев жизненного цикла берём у активности.
            setViewTreeLifecycleOwner(activity)
            setViewTreeViewModelStoreOwner(activity)
            setViewTreeSavedStateRegistryOwner(activity)
            setContent { MudryaTheme { TvScreen(state) } }
        }
        setContentView(view)
    }
}

/** Находит активность за контекстом Compose. */
private fun Context.findActivity(): ComponentActivity? {
    var c: Context? = this
    while (c is ContextWrapper) {
        if (c is ComponentActivity) return c
        c = c.baseContext
    }
    return null
}

/**
 * Пока экран плеера открыт, следит за внешними дисплеями и показывает на первом из них практику.
 * Возвращает true, если картинка сейчас идёт на ТВ.
 */
@Composable
fun rememberTvOutput(enabled: Boolean, state: TvState): MutableState<Boolean> {
    val context = LocalContext.current
    val showing = remember { mutableStateOf(false) }
    DisposableEffect(enabled) {
        val activity = context.findActivity()
        val dm = context.getSystemService(Context.DISPLAY_SERVICE) as DisplayManager
        var presentation: FigurePresentation? = null

        fun dismiss() {
            presentation?.dismiss()
            presentation = null
            showing.value = false
        }

        fun refresh() {
            if (!enabled || activity == null) {
                dismiss()
                return
            }
            val display = dm.getDisplays(DisplayManager.DISPLAY_CATEGORY_PRESENTATION).firstOrNull()
            if (display == null) {
                dismiss()
                return
            }
            if (presentation?.display?.displayId == display.displayId) return
            dismiss()
            val p = FigurePresentation(context, display, activity, state)
            try {
                p.show()
                presentation = p
                showing.value = true
            } catch (_: WindowManager.InvalidDisplayException) {
                showing.value = false
            }
        }

        val listener = object : DisplayManager.DisplayListener {
            override fun onDisplayAdded(displayId: Int) = refresh()
            override fun onDisplayRemoved(displayId: Int) = refresh()
            override fun onDisplayChanged(displayId: Int) = refresh()
        }
        dm.registerDisplayListener(listener, null)
        refresh()
        onDispose {
            dm.unregisterDisplayListener(listener)
            dismiss()
        }
    }
    return showing
}

/** Открывает системные настройки трансляции экрана (Miracast / повтор экрана). */
fun openCastSettings(context: Context) {
    val intents = listOf(Intent(Settings.ACTION_CAST_SETTINGS), Intent(Settings.ACTION_WIRELESS_SETTINGS), Intent(Settings.ACTION_SETTINGS))
    for (intent in intents) {
        try {
            context.startActivity(intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
            return
        } catch (_: ActivityNotFoundException) {
            // Пробуем следующий экран настроек.
        }
    }
}

/** Экран ТВ: крупная фигура слева, название, дыхание и подсказка справа — читается с дивана. */
@Composable
private fun TvScreen(state: TvState) {
    val f = state.frame
    val inhale = f.phase.breath == Breath.INHALE
    Row(
        Modifier
            .fillMaxSize()
            .background(MudryaColors.Ground)
            .padding(32.dp),
        horizontalArrangement = Arrangement.spacedBy(32.dp),
    ) {
        Box(Modifier.weight(1.3f).fillMaxHeight()) {
            PracticeFigure(f, state.transitionMs, state.use3d, Modifier.fillMaxSize(), state.cameraYaw)
        }
        Column(Modifier.weight(1f).fillMaxHeight(), verticalArrangement = Arrangement.spacedBy(16.dp)) {
            Text(state.title, color = MudryaColors.TextMuted, fontSize = 22.sp)
            Text("${f.stepIndex + 1} / ${f.stepCount}", color = MudryaColors.TextMuted, fontSize = 20.sp)
            Text(
                stringResource(if (f.phase.kind == PhaseKind.ENTER) R.string.player_phase_move else R.string.player_phase_hold),
                color = if (f.phase.kind == PhaseKind.ENTER) MudryaColors.Moon else MudryaColors.Saffron,
                fontSize = 20.sp,
                fontWeight = FontWeight.Bold,
            )
            Text(f.step.shownTitle(), color = MudryaColors.Text, fontSize = 44.sp, fontWeight = FontWeight.Bold, lineHeight = 50.sp)
            Text(
                stringResource(if (inhale) R.string.player_inhale else R.string.player_exhale) + "  ${f.secondsLeftInPhase}",
                color = if (inhale) MudryaColors.Moon else MudryaColors.Saffron,
                fontSize = 56.sp,
                fontWeight = FontWeight.Bold,
            )
            TvBar(f.fill.belly / 0.6, MudryaColors.Saffron)
            TvBar(f.fill.chest, MudryaColors.Moon)
            f.step.shownCues().firstOrNull()?.let { Text(it, color = MudryaColors.Text, fontSize = 26.sp, lineHeight = 34.sp) }
            state.restLeft?.let {
                Text(stringResource(R.string.rest_title) + "  %d:%02d".format(it / 60, it % 60), color = MudryaColors.Saffron, fontSize = 32.sp)
            }
        }
    }
}

@Composable
private fun TvBar(value: Double, color: androidx.compose.ui.graphics.Color) {
    Box(Modifier.fillMaxWidth().height(14.dp).background(MudryaColors.Border, RoundedCornerShape(7.dp))) {
        Box(Modifier.fillMaxWidth(value.coerceIn(0.0, 1.0).toFloat()).height(14.dp).background(color, RoundedCornerShape(7.dp)))
    }
}
