package ru.mudrya.yoga.ui.home

import androidx.compose.foundation.clickable
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
import androidx.compose.material3.Text
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
import ru.mudrya.yoga.R
import ru.mudrya.yoga.catalog.SuryaCatalog
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.BreathTimeline
import ru.mudrya.yoga.engine.BuildRequest
import ru.mudrya.yoga.engine.Constraints
import ru.mudrya.yoga.engine.Plan
import ru.mudrya.yoga.engine.ProgressStats
import ru.mudrya.yoga.engine.SessionBuilder
import ru.mudrya.yoga.engine.SessionParams
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.Chip
import ru.mudrya.yoga.ui.common.ChipRow
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.Stepper
import ru.mudrya.yoga.ui.common.supportLabel
import ru.mudrya.yoga.ui.theme.MudryaColors

/** Сколько минут займёт сессия с такими параметрами. */
fun estimateMinutes(sequenceId: String, params: SessionParams, injuries: Set<Injury>): Int {
    val session = SessionBuilder(SuryaCatalog.catalog).build(
        BuildRequest(SuryaCatalog.sequence(sequenceId), params.rounds, params.support, constraints = Constraints(injuries)),
    )
    return ((BreathTimeline(session, params.phaseMs).totalMs + 30_000) / 60_000).toInt()
}

@Composable
fun PracticeScreen(state: UserState, users: UserRepository, onStart: (String) -> Unit, onTest: () -> Unit) {
    val params = state.params
    val injuries = state.profile?.injuries.orEmpty()
    val minutes = remember(params, injuries) { estimateMinutes("surya", params, injuries) }
    val chandraMinutes = remember(params, injuries) { estimateMinutes("chandra", params, injuries) }
    val stats = remember(state) { ProgressStats.of(state, UserRepository.today()) }
    var tuning by rememberSaveable { mutableStateOf(false) }

    fun setParams(p: SessionParams) = users.update { it.copy(params = p) }

    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        Text(stringResource(R.string.today), color = MudryaColors.TextMuted, fontSize = 14.sp)

        Card(color = MudryaColors.Saffron) {
            Text(stringResource(R.string.surya), color = MudryaColors.Ground, fontSize = 26.sp, fontWeight = FontWeight.Bold)
            Text(
                stringResource(R.string.home_session_line, params.rounds, minutes, supportLabel(params.support), formatPhase(params.phaseMs)),
                color = MudryaColors.Ground,
                fontSize = 14.sp,
            )
            PrimaryButton(stringResource(R.string.start), { onStart("surya") }, color = MudryaColors.Ground, contentColor = MudryaColors.Text)
            Text(
                stringResource(if (tuning) R.string.home_tune_hide else R.string.home_tune),
                color = MudryaColors.Ground,
                fontSize = 14.sp,
                fontWeight = FontWeight.Bold,
                modifier = Modifier
                    .clickable { tuning = !tuning }
                    .padding(vertical = 4.dp),
            )
        }

        if (tuning) {
            Card {
                SectionLabel(stringResource(R.string.home_rounds))
                Stepper(
                    value = params.rounds.toString(),
                    onMinus = { setParams(params.copy(rounds = (params.rounds - 1).coerceAtLeast(Plan.LIMITS.minRounds))) },
                    onPlus = { setParams(params.copy(rounds = (params.rounds + 1).coerceAtMost(Plan.LIMITS.maxRounds))) },
                )
                SectionLabel(stringResource(R.string.home_support))
                ChipRow {
                    Plan.allowedSupports(injuries).forEach { s ->
                        Chip(supportLabel(s), params.support == s, { setParams(params.copy(support = s)) })
                    }
                }
                if (Injury.WRISTS in injuries) Body(stringResource(R.string.home_support_wrists))
                SectionLabel(stringResource(R.string.home_phase))
                Stepper(
                    value = stringResource(R.string.phase_value, formatPhase(params.phaseMs)),
                    onMinus = { setParams(params.copy(phaseMs = (params.phaseMs - 500).coerceAtLeast(2_000))) },
                    onPlus = { setParams(params.copy(phaseMs = (params.phaseMs + 500).coerceAtMost(10_000))) },
                )
                Body(stringResource(R.string.home_phase_hint))
            }
        }

        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            Tile(stringResource(R.string.stat_streak), stats.currentStreak.toString(), Modifier.weight(1f))
            Tile(stringResource(R.string.stat_sessions), stats.sessions.toString(), Modifier.weight(1f))
            Tile(stringResource(R.string.stat_minutes), stats.totalMinutes.toString(), Modifier.weight(1f))
        }

        Card {
            SectionLabel(stringResource(R.string.home_age_label))
            val last = stats.lastMovementAge
            if (last == null) {
                Body(stringResource(R.string.home_age_none), color = MudryaColors.Text)
            } else {
                Row(verticalAlignment = Alignment.Bottom) {
                    Text("$last", color = MudryaColors.Saffron, fontSize = 40.sp, fontWeight = FontWeight.Bold)
                    Text(
                        stringResource(R.string.test_result_passport, state.profile?.age ?: 0),
                        color = MudryaColors.TextMuted,
                        fontSize = 14.sp,
                        modifier = Modifier.padding(start = 10.dp, bottom = 8.dp),
                    )
                }
            }
            PrimaryButton(
                stringResource(if (last == null) R.string.test_start else R.string.home_age_retake),
                onTest,
                color = MudryaColors.Moon,
            )
        }

        Card(color = MudryaColors.MoonDeep) {
            Text(stringResource(R.string.chandra), color = MudryaColors.Moon, fontSize = 24.sp, fontWeight = FontWeight.Bold)
            Text(
                stringResource(R.string.home_session_line, params.rounds, chandraMinutes, supportLabel(params.support), formatPhase(params.phaseMs)),
                color = MudryaColors.Text,
                fontSize = 14.sp,
            )
            Body(stringResource(R.string.home_chandra_hint))
            PrimaryButton(stringResource(R.string.start), { onStart("chandra") }, color = MudryaColors.Moon)
        }
        Spacer(Modifier.height(8.dp))
    }
}

/** Длительность фазы числом: «4» или «4,5». Единица — в строковом ресурсе. */
fun formatPhase(ms: Long): String = if (ms % 1000 == 0L) "${ms / 1000}" else "${ms / 1000},${(ms % 1000) / 100}"

@Composable
fun Tile(label: String, value: String, modifier: Modifier = Modifier) {
    Card(modifier) {
        Text(value, color = MudryaColors.Text, fontSize = 24.sp, fontWeight = FontWeight.Bold)
        Text(label, color = MudryaColors.TextMuted, fontSize = 12.sp)
    }
}
