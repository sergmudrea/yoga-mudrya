package ru.mudrya.yoga.ui.home

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.BuildConfig
import ru.mudrya.yoga.R
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.Feedback
import ru.mudrya.yoga.engine.ProgressStats
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.store.Entitlement
import ru.mudrya.yoga.store.StoreModule
import ru.mudrya.yoga.ui.common.appContainer
import ru.mudrya.yoga.ui.paywall.entitlementLabel
import ru.mudrya.yoga.ui.paywall.openManageSubscriptions
import androidx.compose.ui.platform.LocalContext
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.common.goalLabel
import ru.mudrya.yoga.ui.common.injuryLabel
import ru.mudrya.yoga.ui.common.levelLabel
import ru.mudrya.yoga.ui.common.sequenceName
import ru.mudrya.yoga.ui.common.sexLabel
import ru.mudrya.yoga.ui.theme.MudryaColors
import java.time.LocalDate
import java.time.format.DateTimeFormatter
import java.time.format.FormatStyle
import java.time.format.TextStyle
import java.util.Locale

@Composable
fun ProgressScreen(state: UserState, users: UserRepository, onTest: () -> Unit) {
    val today = UserRepository.today()
    val stats = remember(state) { ProgressStats.of(state, today) }
    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        ScreenTitle(stringResource(R.string.tab_progress))
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            Tile(stringResource(R.string.stat_streak), stats.currentStreak.toString(), Modifier.weight(1f))
            Tile(stringResource(R.string.stat_best_streak), stats.bestStreak.toString(), Modifier.weight(1f))
        }
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            Tile(stringResource(R.string.stat_sessions), stats.sessions.toString(), Modifier.weight(1f))
            Tile(stringResource(R.string.stat_minutes), stats.totalMinutes.toString(), Modifier.weight(1f))
        }

        Card {
            SectionLabel(stringResource(R.string.progress_week))
            WeekBars(stats.lastWeekMinutes, today)
        }

        CalendarCard(state, today)
        ChallengeCard(state, users, today)

        Card {
            SectionLabel(stringResource(R.string.home_age_label))
            val tests = state.tests.sortedByDescending { it.atMs }
            if (tests.isEmpty()) {
                Body(stringResource(R.string.home_age_none), color = MudryaColors.Text)
            } else {
                val first = stats.firstMovementAge
                val last = stats.lastMovementAge
                if (first != null && last != null && tests.size > 1) {
                    val d = last - first
                    Body(
                        if (d < 0) stringResource(R.string.progress_age_better, -d) else if (d > 0) stringResource(R.string.progress_age_worse, d) else stringResource(R.string.progress_age_same),
                        color = MudryaColors.Text,
                    )
                }
                MovementAgeChart(state.tests)
                tests.take(6).forEach { t ->
                    Row(Modifier.fillMaxWidth()) {
                        Text(formatDay(t.localDay), color = MudryaColors.TextMuted, fontSize = 14.sp, modifier = Modifier.weight(1f))
                        Text("${t.movementAge}", color = MudryaColors.Saffron, fontSize = 16.sp, fontWeight = FontWeight.Bold)
                    }
                }
            }
            PrimaryButton(stringResource(if (tests.isEmpty()) R.string.test_start else R.string.home_age_retake), onTest, color = MudryaColors.Moon)
        }

        BodyCard(state, users, today)

        Card {
            SectionLabel(stringResource(R.string.progress_history))
            val recent = state.sessions.sortedByDescending { it.startedAtMs }.take(10)
            if (recent.isEmpty()) Body(stringResource(R.string.progress_empty))
            recent.forEach { r ->
                Row(Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
                    Column(Modifier.weight(1f)) {
                        Text(sequenceName(r.sequenceId), color = MudryaColors.Text, fontSize = 15.sp)
                        Text(
                            formatDay(r.localDay) + " · " + stringResource(R.string.progress_minutes, (r.durationMs / 60_000).toInt()),
                            color = MudryaColors.TextMuted,
                            fontSize = 13.sp,
                        )
                    }
                    Text(
                        when {
                            !r.completed -> stringResource(R.string.progress_unfinished)
                            r.feedback == Feedback.EASY -> stringResource(R.string.finish_easy)
                            r.feedback == Feedback.HARD -> stringResource(R.string.finish_hard)
                            else -> stringResource(R.string.finish_ok)
                        },
                        color = MudryaColors.TextMuted,
                        fontSize = 13.sp,
                    )
                }
            }
        }
        Spacer(Modifier.height(8.dp))
    }
}

private fun formatDay(day: Long): String =
    LocalDate.ofEpochDay(day).format(DateTimeFormatter.ofLocalizedDate(FormatStyle.MEDIUM).withLocale(Locale.getDefault()))

@Composable
private fun WeekBars(minutes: List<Int>, today: Long) {
    val max = (minutes.maxOrNull() ?: 0).coerceAtLeast(20)
    Row(
        Modifier
            .fillMaxWidth()
            .height(120.dp),
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        verticalAlignment = Alignment.Bottom,
    ) {
        minutes.forEachIndexed { i, m ->
            val day = LocalDate.ofEpochDay(today - (minutes.size - 1 - i))
            Column(Modifier.weight(1f).fillMaxHeight(), horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.Bottom) {
                if (m > 0) Text("$m", color = MudryaColors.TextMuted, fontSize = 11.sp)
                Box(
                    Modifier
                        .fillMaxWidth()
                        .height((70f * m / max).coerceAtLeast(4f).dp)
                        .background(if (m > 0) MudryaColors.Saffron else MudryaColors.Border, RoundedCornerShape(4.dp)),
                )
                Spacer(Modifier.height(6.dp))
                Text(
                    day.dayOfWeek.getDisplayName(TextStyle.SHORT, Locale.getDefault()),
                    color = if (i == minutes.size - 1) MudryaColors.Text else MudryaColors.TextMuted,
                    fontSize = 11.sp,
                )
            }
        }
    }
}

@Composable
fun ProfileScreen(
    state: UserState,
    onEdit: () -> Unit,
    onSettings: () -> Unit,
    entitlement: Entitlement,
    onSubscribe: () -> Unit,
    onReset: () -> Unit,
) {
    val context = LocalContext.current
    val billing = appContainer().billing
    var confirm by rememberSaveable { mutableStateOf(false) }
    val p = state.profile
    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        ScreenTitle(stringResource(R.string.tab_profile))
        if (p != null) {
            Card {
                InfoRow(stringResource(R.string.onb_sex), sexLabel(p.sex))
                InfoRow(stringResource(R.string.onb_age), p.age.toString())
                InfoRow(stringResource(R.string.profile_level), levelLabel(p.level))
                InfoRow(stringResource(R.string.profile_goals), p.goals.map { goalLabel(it) }.joinToString(", ").ifEmpty { "—" })
                InfoRow(
                    stringResource(R.string.profile_limits),
                    p.injuries.map { injuryLabel(it) }.joinToString(", ").ifEmpty { stringResource(R.string.onb_limits_none) },
                )
                PrimaryButton(stringResource(R.string.profile_edit), onEdit, color = MudryaColors.Moon)
            }
        }
        Card {
            SectionLabel(stringResource(R.string.sub_section))
            Body(entitlementLabel(entitlement), color = MudryaColors.Text)
            if (entitlement == Entitlement.Free) {
                PrimaryButton(stringResource(R.string.sub_get), onSubscribe)
            } else if (entitlement != Entitlement.Lifetime) {
                // «Отменить подписку» — одной кнопкой, сразу в управление подписками магазина.
                PrimaryButton(stringResource(R.string.sub_cancel), { openManageSubscriptions(context, billing.manageSubscriptionsIntent()) }, color = MudryaColors.Surface, contentColor = MudryaColors.Text)
            }
        }
        PrimaryButton(stringResource(R.string.settings_title), onSettings, color = MudryaColors.Surface, contentColor = MudryaColors.Text)
        Card {
            SectionLabel(stringResource(R.string.profile_data))
            Body(stringResource(R.string.profile_data_hint))
            TextAction(stringResource(R.string.profile_reset), { confirm = true })
        }
        Body(stringResource(R.string.store_label, StoreModule.services.storeName) + " · " + BuildConfig.VERSION_NAME)
    }
    if (confirm) {
        AlertDialog(
            onDismissRequest = { confirm = false },
            title = { Text(stringResource(R.string.profile_reset_title)) },
            text = { Text(stringResource(R.string.profile_reset_text)) },
            confirmButton = {
                TextButton(onClick = {
                    confirm = false
                    onReset()
                }) { Text(stringResource(R.string.profile_reset_yes)) }
            },
            dismissButton = { TextButton(onClick = { confirm = false }) { Text(stringResource(R.string.profile_reset_no)) } },
        )
    }
}

@Composable
private fun InfoRow(label: String, value: String) {
    Row(Modifier.fillMaxWidth()) {
        Text(label, color = MudryaColors.TextMuted, fontSize = 14.sp, modifier = Modifier.weight(1f))
        Text(value, color = MudryaColors.Text, fontSize = 14.sp, fontWeight = FontWeight.Bold, modifier = Modifier.weight(1.4f))
    }
}
