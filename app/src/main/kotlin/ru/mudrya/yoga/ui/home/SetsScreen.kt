package ru.mudrya.yoga.ui.home

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
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
import ru.mudrya.yoga.engine.SessionBuilder
import ru.mudrya.yoga.engine.SessionParams
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.store.PremiumPolicy
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.sequenceName
import ru.mudrya.yoga.ui.theme.MudryaColors

/** Раздел каталога сетов — как вкладки атласа нулевого цикла. */
private data class SetGroup(val title: Int, val hint: Int?, val ids: List<String>, val accent: Color, val background: Color)

private val GROUPS = listOf(
    SetGroup(R.string.sets_classic, R.string.sets_classic_hint, listOf("at_sn", "at_cn"), MudryaColors.Saffron, MudryaColors.SaffronDeep),
    SetGroup(R.string.sets_rings, R.string.sets_rings_hint, listOf("surya", "chandra"), MudryaColors.Moon, MudryaColors.MoonDeep),
    SetGroup(
        R.string.sets_start,
        R.string.sets_start_hint,
        listOf("at_ns", "at_ss1", "at_ss2", "at_ss3", "at_ss4", "at_ss5", "at_ss6", "at_ss7"),
        MudryaColors.Saffron,
        MudryaColors.Surface,
    ),
    SetGroup(R.string.sets_core, R.string.sets_core_hint, listOf("at_st", "at_ds", "at_zs"), MudryaColors.Moon, MudryaColors.Surface),
    SetGroup(R.string.sets_extra, R.string.sets_extra_hint, listOf("at_skd", "at_lkd", "at_ssd", "at_zsd"), MudryaColors.TextMuted, MudryaColors.Surface),
)

/** Сколько позиций и минут займёт сет с такими параметрами. */
fun setSize(sequenceId: String, params: SessionParams, injuries: Set<Injury>): Pair<Int, Int> {
    val session = SessionBuilder(SuryaCatalog.catalog).build(
        BuildRequest(SuryaCatalog.sequence(sequenceId), params.rounds, params.support, constraints = Constraints(injuries)),
    )
    val minutes = ((BreathTimeline(session, params.phaseMs).totalMs + 30_000) / 60_000).toInt().coerceAtLeast(1)
    return session.steps.size / params.rounds.coerceAtLeast(1) to minutes
}

@Composable
fun SetsScreen(state: UserState, users: UserRepository, premium: Boolean, onStart: (String) -> Unit) {
    val params = state.params
    val injuries = state.profile?.injuries.orEmpty()
    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        ScreenTitle(stringResource(R.string.tab_sets))
        SessionTuning(state, users)
        GROUPS.forEach { group ->
            Spacer(Modifier.height(4.dp))
            SectionLabel(stringResource(group.title))
            group.hint?.let { Body(stringResource(it)) }
            group.ids.forEach { id ->
                val (positions, minutes) = remember(params, injuries, id) { setSize(id, params, injuries) }
                val locked = PremiumPolicy.isLocked(id, premium)
                Card(color = group.background) {
                    Text(sequenceName(id), color = group.accent, fontSize = 20.sp, fontWeight = FontWeight.Bold)
                    Text(stringResource(R.string.set_size, positions, minutes, params.rounds), color = MudryaColors.Text, fontSize = 14.sp)
                    PrimaryButton(
                        stringResource(if (locked) R.string.set_locked else R.string.start),
                        { onStart(id) },
                        color = if (group.accent == MudryaColors.TextMuted) MudryaColors.Border else group.accent,
                        contentColor = if (group.accent == MudryaColors.TextMuted) MudryaColors.Text else MudryaColors.Ground,
                    )
                }
            }
        }
        Spacer(Modifier.height(8.dp))
    }
}
