package ru.mudrya.yoga.ui.settings

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Switch
import androidx.compose.material3.SwitchDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.BuildConfig
import ru.mudrya.yoga.R
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.AppSettings
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.player.openCastSettings
import ru.mudrya.yoga.engine.VoiceLevel
import ru.mudrya.yoga.ui.common.Chip
import ru.mudrya.yoga.ui.common.ChipRow
import ru.mudrya.yoga.ui.theme.MudryaColors

/**
 * Настройки. [extra] — разделы, которые добавляют следующие этапы (напоминания, резервная копия).
 */
@Composable
fun SettingsScreen(
    state: UserState,
    users: UserRepository,
    onBack: () -> Unit,
    onVideos: () -> Unit = {},
    extra: @Composable () -> Unit = {},
) {
    BackHandler(onBack = onBack)
    val context = LocalContext.current
    val s = state.settings
    fun set(transform: (AppSettings) -> AppSettings) = users.update { it.copy(settings = transform(it.settings)) }

    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        ScreenTitle(stringResource(R.string.settings_title))

        Card {
            SectionLabel(stringResource(R.string.settings_practice))
            Toggle(stringResource(R.string.settings_sound), stringResource(R.string.settings_sound_hint), s.sound) { v -> set { it.copy(sound = v) } }
            Text(stringResource(R.string.settings_voice), color = MudryaColors.Text, fontSize = 16.sp, fontWeight = FontWeight.Bold)
            Text(stringResource(R.string.settings_voice_hint), color = MudryaColors.TextMuted, fontSize = 13.sp, lineHeight = 18.sp)
            ChipRow {
                listOf(
                    VoiceLevel.OFF to R.string.voice_off,
                    VoiceLevel.BREATH to R.string.voice_breath,
                    VoiceLevel.NAMES to R.string.voice_names,
                    VoiceLevel.FULL to R.string.voice_full,
                ).forEach { (level, label) ->
                    Chip(stringResource(label), s.voice == level, { set { it.copy(voice = level) } })
                }
            }
            Toggle(stringResource(R.string.settings_figure3d), stringResource(R.string.settings_figure3d_hint), s.figure3d) { v -> set { it.copy(figure3d = v) } }
            Toggle(stringResource(R.string.settings_vibration), stringResource(R.string.settings_vibration_hint), s.vibration) { v -> set { it.copy(vibration = v) } }
        }

        Card {
            SectionLabel(stringResource(R.string.settings_display))
            Toggle(stringResource(R.string.settings_show_cues), null, s.showCues) { v -> set { it.copy(showCues = v) } }
            Toggle(stringResource(R.string.settings_show_next), null, s.showNext) { v -> set { it.copy(showNext = v) } }
            Toggle(stringResource(R.string.settings_show_sanskrit), null, s.showSanskrit) { v -> set { it.copy(showSanskrit = v) } }
            Toggle(stringResource(R.string.settings_show_breath), null, s.showBreath) { v -> set { it.copy(showBreath = v) } }
            Toggle(stringResource(R.string.settings_large_text), null, s.largeText) { v -> set { it.copy(largeText = v) } }
            Toggle(stringResource(R.string.settings_thumbnails), stringResource(R.string.settings_thumbnails_hint), s.thumbnails) { v -> set { it.copy(thumbnails = v) } }
            Text(stringResource(R.string.settings_camera), color = MudryaColors.Text, fontSize = 16.sp, fontWeight = FontWeight.Bold)
            ChipRow {
                listOf(
                    ru.mudrya.yoga.engine.CameraView.SIDE to R.string.camera_side,
                    ru.mudrya.yoga.engine.CameraView.THREE_QUARTER to R.string.camera_three_quarter,
                    ru.mudrya.yoga.engine.CameraView.FRONT to R.string.camera_front,
                ).forEach { (view, label) -> Chip(stringResource(label), s.camera == view, { set { it.copy(camera = view) } }) }
            }
        }

        Card {
            SectionLabel(stringResource(R.string.settings_tv))
            Toggle(stringResource(R.string.settings_tv_auto), stringResource(R.string.settings_tv_auto_hint), s.tvOutput) { v -> set { it.copy(tvOutput = v) } }
            Body(stringResource(R.string.settings_tv_how))
            PrimaryButton(stringResource(R.string.settings_tv_open), { openCastSettings(context) }, color = MudryaColors.Moon)
        }

        Card {
            SectionLabel(stringResource(R.string.videos_title))
            Body(stringResource(R.string.videos_settings_hint))
            PrimaryButton(stringResource(R.string.videos_open), onVideos, color = MudryaColors.Moon)
        }

        ReminderSection(state, users)
        BackupSection(state, users)
        extra()

        if (BuildConfig.DEBUG) {
            Card {
                SectionLabel(stringResource(R.string.settings_debug))
                Toggle(stringResource(R.string.settings_debug_premium), stringResource(R.string.settings_debug_premium_hint), s.debugPremium) { v -> set { it.copy(debugPremium = v) } }
            }
        }

        TextAction(stringResource(R.string.onb_back), onBack)
        Spacer(Modifier.height(8.dp))
    }
}

@Composable
fun Toggle(title: String, hint: String?, checked: Boolean, onChange: (Boolean) -> Unit) {
    Row(Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
        Column(Modifier.weight(1f).padding(end = 12.dp)) {
            Text(title, color = MudryaColors.Text, fontSize = 16.sp, fontWeight = FontWeight.Bold)
            hint?.let { Text(it, color = MudryaColors.TextMuted, fontSize = 13.sp, lineHeight = 18.sp) }
        }
        Switch(
            checked = checked,
            onCheckedChange = onChange,
            colors = SwitchDefaults.colors(checkedTrackColor = MudryaColors.Saffron, checkedThumbColor = MudryaColors.Ground),
        )
    }
}
