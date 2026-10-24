package ru.mudrya.yoga.ui.settings

import android.os.Build
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import ru.mudrya.yoga.R
import ru.mudrya.yoga.data.ReminderScheduler
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.ReminderSettings
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.engine.UserStateCodec
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.Chip
import ru.mudrya.yoga.ui.common.ChipRow
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.Stepper
import ru.mudrya.yoga.ui.theme.MudryaColors
import java.time.DayOfWeek
import java.time.LocalDate
import java.time.format.TextStyle
import java.util.Locale

/** Напоминание о практике: вкл/выкл, время, дни недели. */
@Composable
fun ReminderSection(state: UserState, users: UserRepository) {
    val context = LocalContext.current
    val r = state.reminder
    fun set(transform: (ReminderSettings) -> ReminderSettings) = users.update { it.copy(reminder = transform(it.reminder)) }
    var denied by rememberSaveable { mutableStateOf(false) }

    val permission = rememberLauncherForActivityResult(ActivityResultContracts.RequestPermission()) { granted ->
        denied = !granted
        if (granted) set { it.copy(enabled = true) }
    }

    Card {
        SectionLabel(stringResource(R.string.reminder_section))
        Toggle(stringResource(R.string.reminder_toggle), stringResource(R.string.reminder_toggle_hint), r.enabled) { on ->
            if (on && !ReminderScheduler.canNotify(context) && Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                permission.launch(android.Manifest.permission.POST_NOTIFICATIONS)
            } else {
                set { it.copy(enabled = on) }
            }
        }
        if (denied) Body(stringResource(R.string.reminder_denied), color = MudryaColors.Saffron)
        if (r.enabled) {
            Stepper(
                value = "%02d:%02d".format(r.hour, r.minute),
                onMinus = { set { it.copy(minute = (it.minute + 45) % 60, hour = if (it.minute < 15) (it.hour + 23) % 24 else it.hour) } },
                onPlus = { set { it.copy(minute = (it.minute + 15) % 60, hour = if (it.minute >= 45) (it.hour + 1) % 24 else it.hour) } },
                onBigMinus = { set { it.copy(hour = (it.hour + 23) % 24) } },
                onBigPlus = { set { it.copy(hour = (it.hour + 1) % 24) } },
                bigLabel = stringResource(R.string.reminder_hour_step),
            )
            ChipRow {
                DayOfWeek.entries.forEach { d ->
                    val on = d.value in r.days
                    Chip(
                        d.getDisplayName(TextStyle.SHORT, Locale.getDefault()),
                        on,
                        { set { it.copy(days = if (on) it.days - d.value else it.days + d.value) } },
                    )
                }
            }
        }
    }
}

/** Резервная копия прогресса в файл и восстановление из файла. */
@Composable
fun BackupSection(state: UserState, users: UserRepository) {
    val context = LocalContext.current
    var message by remember { mutableStateOf<String?>(null) }
    var pending by remember { mutableStateOf<UserState?>(null) }
    val saved = stringResource(R.string.backup_saved)
    val failed = stringResource(R.string.backup_failed)
    val empty = stringResource(R.string.backup_empty)

    val export = rememberLauncherForActivityResult(ActivityResultContracts.CreateDocument("text/plain")) { uri ->
        if (uri == null) return@rememberLauncherForActivityResult
        message = try {
            context.contentResolver.openOutputStream(uri)?.use { it.write(UserStateCodec.encode(state).toByteArray(Charsets.UTF_8)) }
            saved
        } catch (_: Exception) {
            failed
        }
    }
    val importer = rememberLauncherForActivityResult(ActivityResultContracts.OpenDocument()) { uri ->
        if (uri == null) return@rememberLauncherForActivityResult
        try {
            val text = context.contentResolver.openInputStream(uri)?.use { it.readBytes().toString(Charsets.UTF_8) }.orEmpty()
            val decoded = UserStateCodec.decode(text)
            if (decoded.profile == null && decoded.sessions.isEmpty() && decoded.tests.isEmpty()) {
                message = empty
            } else {
                pending = decoded
            }
        } catch (_: Exception) {
            message = failed
        }
    }

    Card {
        SectionLabel(stringResource(R.string.backup_section))
        Body(stringResource(R.string.backup_hint))
        PrimaryButton(stringResource(R.string.backup_export), { export.launch("mudrya-backup-${LocalDate.now()}.txt") }, color = MudryaColors.Saffron)
        PrimaryButton(stringResource(R.string.backup_import), { importer.launch(arrayOf("text/plain", "application/octet-stream", "*/*")) }, color = MudryaColors.Surface, contentColor = MudryaColors.Text)
        message?.let { Body(it, color = MudryaColors.Text) }
    }

    pending?.let { incoming ->
        AlertDialog(
            onDismissRequest = { pending = null },
            title = { Text(stringResource(R.string.backup_confirm_title)) },
            text = { Text(stringResource(R.string.backup_confirm_text, incoming.sessions.size, incoming.tests.size)) },
            confirmButton = {
                TextButton(onClick = {
                    users.update { incoming }
                    pending = null
                    message = context.getString(R.string.backup_restored)
                }) { Text(stringResource(R.string.backup_confirm_yes)) }
            },
            dismissButton = { TextButton(onClick = { pending = null }) { Text(stringResource(R.string.profile_reset_no)) } },
        )
    }
}
