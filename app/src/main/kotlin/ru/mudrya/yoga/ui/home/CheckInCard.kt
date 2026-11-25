package ru.mudrya.yoga.ui.home

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.CheckIn
import ru.mudrya.yoga.engine.DailyCheck
import ru.mudrya.yoga.engine.Energy
import ru.mudrya.yoga.engine.Mood
import ru.mudrya.yoga.engine.Reason
import ru.mudrya.yoga.engine.TensionZone
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.store.PremiumPolicy
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.Chip
import ru.mudrya.yoga.ui.common.ChipRow
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.common.sequenceName
import ru.mudrya.yoga.ui.theme.MudryaColors

val Energy.label: Int get() = when (this) {
    Energy.LOW -> R.string.energy_low
    Energy.MID -> R.string.energy_mid
    Energy.HIGH -> R.string.energy_high
}
val TensionZone.label: Int get() = when (this) {
    TensionZone.NONE -> R.string.zone_none
    TensionZone.NECK -> R.string.zone_neck
    TensionZone.BACK -> R.string.zone_back
    TensionZone.HIPS -> R.string.zone_hips
    TensionZone.KNEES -> R.string.zone_knees
}
private val Reason.label: Int get() = when (this) {
    Reason.NECK -> R.string.reason_neck
    Reason.BACK -> R.string.reason_back
    Reason.HIPS -> R.string.reason_hips
    Reason.KNEES -> R.string.reason_knees
    Reason.LOW_ENERGY -> R.string.reason_low
    Reason.TENSE -> R.string.reason_tense
    Reason.EVENING -> R.string.reason_evening
    Reason.MORNING -> R.string.reason_morning
    Reason.HIGH_ENERGY -> R.string.reason_high
    Reason.STEADY -> R.string.reason_steady
}

/**
 * «Как вы сегодня?» — четыре коротких отметки, и приложение само предлагает практику
 * с объяснением, почему именно её. Закрытый сет не подсовывается: стартует лучший доступный,
 * а более точный премиум-вариант показан строкой под кнопкой.
 */
@Composable
fun CheckInCard(
    state: UserState,
    users: UserRepository,
    premium: Boolean,
    onStart: (String) -> Unit,
    onBreath: () -> Unit,
    onPaywall: () -> Unit,
) {
    val today = UserRepository.today()
    val saved = DailyCheck.today(state.checkIns, today)
    var editing by rememberSaveable { mutableStateOf(false) }
    Card {
        if (saved == null || editing) {
            var energy by rememberSaveable { mutableStateOf(saved?.energy ?: Energy.MID) }
            var mood by rememberSaveable { mutableStateOf(saved?.mood ?: Mood.CALM) }
            var zone by rememberSaveable { mutableStateOf(saved?.zone ?: TensionZone.NONE) }
            var minutes by rememberSaveable { mutableStateOf(saved?.minutes ?: state.settings.lengthMin.takeIf { it > 0 } ?: 20) }
            Text(stringResource(R.string.checkin_title), color = MudryaColors.Text, fontSize = 20.sp, fontWeight = FontWeight.Bold)
            SectionLabel(stringResource(R.string.checkin_energy))
            ChipRow { Energy.entries.forEach { e -> Chip(stringResource(e.label), energy == e, { energy = e }) } }
            SectionLabel(stringResource(R.string.checkin_mood))
            ChipRow {
                Chip(stringResource(R.string.mood_calm), mood == Mood.CALM, { mood = Mood.CALM })
                Chip(stringResource(R.string.mood_tense), mood == Mood.TENSE, { mood = Mood.TENSE })
            }
            SectionLabel(stringResource(R.string.checkin_zone))
            ChipRow { TensionZone.entries.forEach { z -> Chip(stringResource(z.label), zone == z, { zone = z }) } }
            SectionLabel(stringResource(R.string.checkin_time))
            ChipRow { listOf(10, 20, 40).forEach { m -> Chip(stringResource(R.string.checkin_minutes, m), minutes == m, { minutes = m }) } }
            PrimaryButton(stringResource(R.string.checkin_pick), {
                users.update { it.copy(checkIns = DailyCheck.record(it.checkIns, CheckIn(today, energy, mood, zone, minutes))) }
                editing = false
            })
        } else {
            val hour = java.time.LocalTime.now().hour
            val rec = DailyCheck.recommend(saved, hour)
            val pick = rec.candidates.firstOrNull { !PremiumPolicy.isLocked(it, premium) } ?: rec.candidates.last()
            val better = rec.candidates.first().takeIf { it != pick }
            SectionLabel(stringResource(R.string.checkin_for_you))
            Text(sequenceName(pick), color = MudryaColors.Text, fontSize = 20.sp, fontWeight = FontWeight.Bold)
            Body(stringResource(rec.reason.label))
            Text(
                listOf(stringResource(saved.energy.label), stringResource(saved.zone.label), stringResource(R.string.checkin_minutes, saved.minutes)).joinToString(" · "),
                color = MudryaColors.TextMuted,
                fontSize = 13.sp,
            )
            if (rec.breathFirst) {
                PrimaryButton(stringResource(R.string.checkin_breath_first), onBreath, color = MudryaColors.Moon)
            }
            PrimaryButton(stringResource(R.string.checkin_start), {
                users.update { it.copy(settings = it.settings.copy(lengthMin = saved.minutes, holdBreaths = 0)) }
                onStart(pick)
            })
            if (better != null) {
                Text(
                    stringResource(R.string.checkin_premium_better, sequenceName(better)),
                    color = MudryaColors.Saffron,
                    fontSize = 14.sp,
                    modifier = Modifier.fillMaxWidth().clickable(onClick = onPaywall),
                )
            }
            TextAction(stringResource(R.string.checkin_change), { editing = true })
        }
    }
}

/** Самочувствие за последние дни — на экране прогресса. */
@Composable
fun CheckInHistory(state: UserState) {
    val last = state.checkIns.takeLast(7).reversed()
    if (last.isEmpty()) return
    Card {
        SectionLabel(stringResource(R.string.checkin_history))
        val fmt = java.time.format.DateTimeFormatter.ofPattern("dd.MM")
        Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
            last.forEach { c ->
                Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                    Text(java.time.LocalDate.ofEpochDay(c.localDay).format(fmt), color = MudryaColors.TextMuted, fontSize = 14.sp)
                    val parts = buildList {
                        add(stringResource(c.energy.label))
                        if (c.mood == Mood.TENSE) add(stringResource(R.string.mood_tense))
                        if (c.zone != TensionZone.NONE) add(stringResource(c.zone.label))
                    }
                    Text(parts.joinToString(" · "), color = MudryaColors.Text, fontSize = 14.sp)
                }
            }
        }
    }
}
