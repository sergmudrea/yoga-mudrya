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
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.ui.Alignment
import ru.mudrya.yoga.ui.common.TextAction
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
import ru.mudrya.yoga.engine.SessionFit
import ru.mudrya.yoga.engine.SessionParams
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.engine.constraints
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

/** Пять готовых сетов на первом экране. */
private val READY = listOf("surya", "chandra", "at_sn", "full_sun", "full_moon")

/** Остальные сеты — под кнопкой «Ещё сеты». */
private val MORE_GROUPS = listOf(
    SetGroup(R.string.sets_classic, R.string.sets_classic_hint, listOf("at_cn"), MudryaColors.Saffron, MudryaColors.SaffronDeep),
    SetGroup(
        R.string.sets_start,
        R.string.sets_start_hint,
        listOf("at_ns", "at_ss1", "at_ss2", "at_ss3", "at_ss4", "at_ss5", "at_ss6", "at_ss7"),
        MudryaColors.Saffron,
        MudryaColors.Surface,
    ),
    SetGroup(R.string.sets_core, R.string.sets_core_hint, listOf("at_st", "at_ds", "at_zs"), MudryaColors.Moon, MudryaColors.Surface),
)

internal fun accentOf(id: String): Color = if (id == "chandra" || id == "full_moon" || id == "at_cn") MudryaColors.Moon else MudryaColors.Saffron
internal fun backgroundOf(id: String): Color = if (accentOf(id) == MudryaColors.Moon) MudryaColors.MoonDeep else MudryaColors.SaffronDeep

/** Сколько позиций и минут займёт сет с такими параметрами. */
fun setSize(sequenceId: String, params: SessionParams, constraints: Constraints, lengthMin: Int = 0): Pair<Int, Int> {
    val session = SessionFit.fit(
        SessionBuilder(SuryaCatalog.catalog).build(
            BuildRequest(SuryaCatalog.sequence(sequenceId), params.rounds, params.support, enabledSlots = params.enabledSlots.toSet(), constraints = constraints),
        ),
        params.phaseMs,
        lengthMin,
    )
    val minutes = ((BreathTimeline(session, params.phaseMs).totalMs + 30_000) / 60_000).toInt().coerceAtLeast(1)
    return session.steps.size / params.rounds.coerceAtLeast(1) to minutes
}

@Composable
fun SetsScreen(
    state: UserState,
    users: UserRepository,
    premium: Boolean,
    onStart: (String) -> Unit,
    onLibrary: () -> Unit = {},
    onBuilder: () -> Unit = {},
    onSetLibrary: () -> Unit = {},
) {
    val params = state.params
    val constraints = state.constraints(UserRepository.today())
    var more by rememberSaveable { mutableStateOf(false) }

    @Composable
    fun SetItem(id: String, accent: Color, background: Color) {
        val (positions, minutes) = remember(params, constraints, id, state.settings.lengthMin) { setSize(id, params, constraints, state.settings.lengthMin) }
        SetRow(id, positions, minutes, PremiumPolicy.isLocked(id, premium), accent, background, state, users) { onStart(id) }
    }

    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        ScreenTitle(stringResource(R.string.tab_sets))

        val favorites = state.favoriteSets.filter { id ->
            runCatching { SuryaCatalog.sequence(id) }.isSuccess
        }
        if (favorites.isNotEmpty()) {
            SectionLabel(stringResource(R.string.sets_favorites))
            favorites.forEach { SetItem(it, accentOf(it), backgroundOf(it)) }
            Spacer(Modifier.height(4.dp))
        }

        Card(color = MudryaColors.MoonDeep, modifier = Modifier.clickable(onClick = onLibrary)) {
            Text(stringResource(R.string.library_card, ru.mudrya.yoga.catalog.LibraryCatalog.POSE_COUNT), color = MudryaColors.Moon, fontSize = 19.sp, fontWeight = FontWeight.Bold)
            Body(stringResource(R.string.library_card_hint))
            PrimaryButton(stringResource(R.string.library_open), onLibrary, color = MudryaColors.Moon, contentColor = MudryaColors.Ground)
        }
        Card(color = MudryaColors.Surface, modifier = Modifier.clickable(onClick = onSetLibrary)) {
            Text(stringResource(R.string.setlib_card), color = MudryaColors.Text, fontSize = 19.sp, fontWeight = FontWeight.Bold)
            Body(stringResource(R.string.setlib_card_hint, ru.mudrya.yoga.catalog.ThemeCatalog.themes.size))
            PrimaryButton(stringResource(R.string.setlib_open), onSetLibrary, color = MudryaColors.Border, contentColor = MudryaColors.Text)
        }
        Card(color = MudryaColors.SaffronDeep, modifier = Modifier.clickable(onClick = onBuilder)) {
            Text(stringResource(R.string.builder_card), color = MudryaColors.Saffron, fontSize = 19.sp, fontWeight = FontWeight.Bold)
            Body(
                if (premium) stringResource(R.string.builder_card_hint_premium)
                else stringResource(R.string.builder_card_hint, ru.mudrya.yoga.engine.CustomSets.runsLeft(state.customRuns)),
            )
            PrimaryButton(stringResource(R.string.builder_open), onBuilder)
        }

        Spacer(Modifier.height(4.dp))
        SectionLabel(stringResource(R.string.sets_ready))
        Body(stringResource(R.string.sets_ready_hint))
        READY.forEach { SetItem(it, accentOf(it), backgroundOf(it)) }

        Spacer(Modifier.height(4.dp))
        TextAction(stringResource(if (more) R.string.sets_more_hide else R.string.sets_more), { more = !more })
        if (more) {
            MORE_GROUPS.forEach { group ->
                SectionLabel(stringResource(group.title))
                group.hint?.let { Body(stringResource(it)) }
                group.ids.forEach { SetItem(it, group.accent, group.background) }
                Spacer(Modifier.height(4.dp))
            }
        }

        SessionTuning(state, users)
        Spacer(Modifier.height(8.dp))
    }
}

/** Компактная строка сета: миниатюра первой позы, название, размер, звезда; нажатие — карточка сессии. */
@Composable
internal fun SetRow(
    id: String,
    positions: Int,
    minutes: Int,
    locked: Boolean,
    accent: Color,
    background: Color,
    state: UserState,
    users: UserRepository,
    onOpen: () -> Unit,
) {
    val firstPose = remember(id) {
        val def = SuryaCatalog.sequence(id)
        def.items.firstNotNullOfOrNull { SuryaCatalog.catalog.blocks[it.blockId]?.steps?.firstOrNull()?.asanaId }
    }
    androidx.compose.foundation.layout.Row(
        Modifier
            .fillMaxWidth()
            .background(background, RoundedCornerShape(18.dp))
            .clickable(onClick = onOpen)
            .padding(12.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        firstPose?.let { ru.mudrya.yoga.ui.builder.PoseThumb(it, 52.dp) }
        Spacer(Modifier.width(12.dp))
        Column(Modifier.weight(1f)) {
            Text(
                sequenceName(id),
                color = if (accent == MudryaColors.TextMuted) MudryaColors.Text else accent,
                fontSize = 17.sp,
                fontWeight = FontWeight.Bold,
            )
            Text(
                if (locked) stringResource(R.string.set_locked) else stringResource(R.string.set_size_short, positions, minutes),
                color = MudryaColors.TextMuted,
                fontSize = 13.sp,
            )
        }
        FavoriteStar(id, state, users)
        Text("›", color = MudryaColors.TextMuted, fontSize = 24.sp, modifier = Modifier.padding(start = 4.dp))
    }
}

/** Избранные сеты на главном экране — быстрый старт. */
@Composable
fun FavoriteSets(state: UserState, users: UserRepository, premium: Boolean, onStart: (String) -> Unit) {
    val ids = state.favoriteSets.filter { runCatching { SuryaCatalog.sequence(it) }.isSuccess }
    if (ids.isEmpty()) return
    val constraints = state.constraints(UserRepository.today())
    SectionLabel(stringResource(R.string.sets_favorites))
    ids.forEach { id ->
        val (positions, minutes) = remember(state.params, constraints, id, state.settings.lengthMin) { setSize(id, state.params, constraints, state.settings.lengthMin) }
        SetRow(id, positions, minutes, PremiumPolicy.isLocked(id, premium), accentOf(id), backgroundOf(id), state, users) { onStart(id) }
    }
}
