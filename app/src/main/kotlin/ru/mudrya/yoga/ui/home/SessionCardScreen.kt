package ru.mudrya.yoga.ui.home

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
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
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.catalog.AtlasCatalog
import ru.mudrya.yoga.catalog.SuryaCatalog
import ru.mudrya.yoga.model.SequenceDef
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.BreathTimeline
import ru.mudrya.yoga.engine.BuildRequest
import ru.mudrya.yoga.engine.Plan
import ru.mudrya.yoga.engine.SessionBuilder
import ru.mudrya.yoga.engine.SessionFit
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.engine.constraints
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.model.Side
import ru.mudrya.yoga.model.Support
import ru.mudrya.yoga.store.PremiumPolicy
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.Chip
import ru.mudrya.yoga.ui.common.ChipRow
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.Stepper
import ru.mudrya.yoga.ui.common.sequenceName
import ru.mudrya.yoga.ui.common.supportLabel
import ru.mudrya.yoga.ui.theme.MudryaColors
import java.util.Locale

/** Добавить сет в избранное или убрать оттуда. */
fun UserRepository.toggleFavorite(id: String) = update { s ->
    s.copy(favoriteSets = if (id in s.favoriteSets) s.favoriteSets - id else s.favoriteSets + id)
}

/** Звёздочка избранного: ★ — в избранном, ☆ — нет. */
@Composable
fun FavoriteStar(id: String, state: UserState, users: UserRepository, modifier: Modifier = Modifier) {
    val on = id in state.favoriteSets
    Text(
        if (on) "★" else "☆",
        color = if (on) MudryaColors.Saffron else MudryaColors.TextMuted,
        fontSize = 26.sp,
        modifier = modifier
            .clickable { users.toggleFavorite(id) }
            .padding(horizontal = 6.dp, vertical = 2.dp),
    )
}

private val HOLD_OPTIONS = listOf(0, 1, 2, 3, 5)

/**
 * Карточка сессии перед стартом: длительность, круги, опора и нагрузка на запястья,
 * вдохи на удержании, структура сета по разделам книги, избранное и «Начать».
 */
@Composable
fun SessionCardScreen(
    sequenceId: String,
    state: UserState,
    users: UserRepository,
    premium: Boolean,
    onStart: () -> Unit,
    onPaywall: () -> Unit,
    onBack: () -> Unit,
) {
    BackHandler(onBack = onBack)
    val params = state.params
    val constraints = state.constraints(UserRepository.today())
    val injuries = state.profile?.injuries.orEmpty()
    val def = remember(sequenceId) { SuryaCatalog.sequence(sequenceId) }
    val built = remember(sequenceId, params, constraints) {
        SessionBuilder(SuryaCatalog.catalog).build(BuildRequest(def, params.rounds, params.support, enabledSlots = params.enabledSlots.toSet(), constraints = constraints))
    }
    val lengthMin = state.settings.lengthMin
    val session = remember(built, lengthMin, params.phaseMs) { SessionFit.fit(built, params.phaseMs, lengthMin) }
    val shortest = remember(built, params.phaseMs) { SessionFit.minMinutes(built, params.phaseMs) }
    val minutes = ((BreathTimeline(session, params.phaseMs).totalMs + 30_000) / 60_000).toInt().coerceAtLeast(1)
    val perRound = session.steps.size / params.rounds.coerceAtLeast(1)
    val usesHands = remember(session) { session.steps.any { it.asana.supports.isNotEmpty() } }
    val ru = Locale.getDefault().language == "ru"
    val locked = PremiumPolicy.isLocked(sequenceId, premium)

    Column(Modifier.fillMaxSize().background(MudryaColors.Ground)) {
        Column(
            Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 20.dp, vertical = 16.dp),
            verticalArrangement = Arrangement.spacedBy(14.dp),
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    "←",
                    color = MudryaColors.Text,
                    fontSize = 24.sp,
                    modifier = Modifier.clickable(onClick = onBack).padding(end = 12.dp, top = 4.dp, bottom = 4.dp),
                )
                Text(
                    sequenceName(sequenceId),
                    color = MudryaColors.Text,
                    fontSize = 24.sp,
                    fontWeight = FontWeight.Bold,
                    modifier = Modifier.weight(1f),
                )
                FavoriteStar(sequenceId, state, users)
            }
            ChipRow {
                InfoChip(stringResource(R.string.session_minutes, minutes))
                InfoChip(stringResource(R.string.session_poses, perRound))
                if (params.rounds > 1) InfoChip(stringResource(R.string.session_rounds_chip, params.rounds))
            }

            Card {
                SectionLabel(stringResource(R.string.session_length))
                ChipRow {
                    SessionFit.LENGTHS.forEach { m ->
                        Chip(
                            stringResource(R.string.session_length_min, m),
                            lengthMin == m,
                            { users.update { it.copy(settings = it.settings.copy(lengthMin = m, holdBreaths = 0)) } },
                        )
                    }
                    Chip(stringResource(R.string.session_length_full), lengthMin == 0, { users.update { it.copy(settings = it.settings.copy(lengthMin = 0)) } })
                }
                if (lengthMin in 1 until shortest) Body(stringResource(R.string.session_length_shortest, shortest))
            }

            Card {
                SectionLabel(stringResource(R.string.home_rounds))
                Stepper(
                    value = params.rounds.toString(),
                    onMinus = { users.update { it.copy(params = it.params.copy(rounds = (it.params.rounds - 1).coerceAtLeast(Plan.LIMITS.minRounds))) } },
                    onPlus = { users.update { it.copy(params = it.params.copy(rounds = (it.params.rounds + 1).coerceAtMost(Plan.LIMITS.maxRounds))) } },
                )
                if (usesHands) {
                    SectionLabel(stringResource(R.string.home_support))
                    ChipRow {
                        Plan.allowedSupports(injuries).forEach { s ->
                            Chip(supportLabel(s), params.support == s, { users.update { it.copy(params = it.params.copy(support = s)) } })
                        }
                    }
                    WristLoad(params.support)
                    if (Injury.WRISTS in injuries) Body(stringResource(R.string.home_support_wrists))
                }
                SectionLabel(stringResource(R.string.session_hold))
                ChipRow {
                    HOLD_OPTIONS.forEach { n ->
                        Chip(
                            if (n == 0) stringResource(R.string.session_hold_method) else n.toString(),
                            state.settings.holdBreaths == n,
                            { users.update { it.copy(settings = it.settings.copy(holdBreaths = n, lengthMin = if (n > 0) 0 else it.settings.lengthMin)) } },
                        )
                    }
                }
                Body(stringResource(R.string.session_phase_line, formatPhase(params.phaseMs)))
            }

            ExtrasCard(def, state, users, ru)

            SectionLabel(stringResource(R.string.session_structure))
            Card {
                // Блоки, разрезанные под вставки допэлементов, показываются одним разделом.
                val rows = mutableListOf<Triple<String, Side, Int>>()
                def.items.forEach { ref ->
                    val block = SuryaCatalog.catalog.blocks[ref.blockId] ?: return@forEach
                    val title = (if (ru) block.titleRu else block.titleEn ?: block.titleRu) ?: sequenceName(sequenceId)
                    val last = rows.lastOrNull()
                    if (last != null && last.first == title && last.second == ref.side) rows[rows.size - 1] = Triple(title, ref.side, last.third + block.steps.size)
                    else rows += Triple(title, ref.side, block.steps.size)
                }
                rows.forEachIndexed { i, (title, sideRef, n) ->
                    val side = when (sideRef) {
                        Side.RIGHT -> stringResource(R.string.session_side_right)
                        Side.LEFT -> stringResource(R.string.session_side_left)
                        else -> null
                    }
                    StructureRow(i + 1, title, side, n)
                }
            }
            if (locked) Body(stringResource(R.string.session_locked), color = MudryaColors.Saffron)
        }
        Column(Modifier.padding(horizontal = 20.dp, vertical = 12.dp)) {
            PrimaryButton(
                stringResource(if (locked) R.string.set_locked else R.string.session_start),
                { if (locked) onPaywall() else onStart() },
            )
        }
    }
}

@Composable
private fun InfoChip(text: String) {
    Text(
        text,
        color = MudryaColors.Text,
        fontSize = 14.sp,
        modifier = Modifier
            .background(MudryaColors.Surface, RoundedCornerShape(50))
            .padding(horizontal = 12.dp, vertical = 6.dp),
    )
}

/** Шкала нагрузки на запястья: кулаки — мягко, ладони — средне, пальцы — высоко. */
@Composable
private fun WristLoad(support: Support) {
    val (level, label, color) = when (support) {
        Support.FISTS -> Triple(1, R.string.session_wrist_low, Color(0xFF6CC49B))
        Support.PALMS -> Triple(2, R.string.session_wrist_mid, MudryaColors.Moon)
        Support.FINGERS -> Triple(3, R.string.session_wrist_high, MudryaColors.Saffron)
    }
    Text(stringResource(R.string.session_wrist), color = MudryaColors.TextMuted, fontSize = 13.sp)
    Row(Modifier.fillMaxWidth().height(8.dp), horizontalArrangement = Arrangement.spacedBy(4.dp)) {
        (1..3).forEach { i ->
            Box(
                Modifier
                    .weight(1f)
                    .fillMaxHeight()
                    .background(if (i <= level) color else MudryaColors.Border, RoundedCornerShape(4.dp)),
            )
        }
    }
    Text(stringResource(label), color = color, fontSize = 14.sp)
}

@Composable
private fun StructureRow(n: Int, title: String, side: String?, steps: Int) {
    Row(Modifier.fillMaxWidth().padding(vertical = 6.dp), verticalAlignment = Alignment.CenterVertically) {
        Box(Modifier.size(26.dp).background(MudryaColors.SaffronDeep, CircleShape), contentAlignment = Alignment.Center) {
            Text(n.toString(), color = MudryaColors.Saffron, fontSize = 12.sp, fontWeight = FontWeight.Bold)
        }
        Spacer(Modifier.width(12.dp))
        Column(Modifier.weight(1f)) {
            Text(title, color = MudryaColors.Text, fontSize = 15.sp)
            side?.let { Text(it, color = MudryaColors.TextMuted, fontSize = 13.sp) }
        }
        Text(stringResource(R.string.session_steps, steps), color = MudryaColors.TextMuted, fontSize = 13.sp)
    }
}

/**
 * Дополнительные элементы книги: общий переключатель и по зонам. Включённая зона встаёт в сет на своё место
 * (например, «королевская кобра» — между СС-43 и СС-44). Выбор общий для всех сетов.
 */
@Composable
private fun ExtrasCard(def: SequenceDef, state: UserState, users: UserRepository, ru: Boolean) {
    val here = def.slots.map { it.id }.distinct()
    if (here.isEmpty()) return
    val zones = AtlasCatalog.zones.filter { it.id in here }
    val on = state.params.enabledSlots.toSet()
    fun set(ids: Collection<String>, enable: Boolean) = users.update { s ->
        val cur = s.params.enabledSlots.toMutableList()
        ids.forEach { id -> if (enable) { if (id !in cur) cur += id } else cur.remove(id) }
        s.copy(params = s.params.copy(enabledSlots = cur))
    }
    SectionLabel(stringResource(R.string.extras_title))
    Card {
        val all = zones.all { it.id in on }
        SwitchRow(stringResource(R.string.extras_all), stringResource(R.string.extras_all_hint), all) { set(zones.map { it.id }, it) }
        zones.forEach { z ->
            val n = def.slots.filter { it.id == z.id }.sumOf { SuryaCatalog.catalog.block(it.blockId).steps.size }
            SwitchRow(if (ru) z.nameRu else z.nameEn, stringResource(R.string.extras_positions, n), z.id in on) { set(listOf(z.id), it) }
        }
    }
}

@Composable
private fun SwitchRow(title: String, hint: String, checked: Boolean, onChange: (Boolean) -> Unit) {
    Row(Modifier.fillMaxWidth().clickable { onChange(!checked) }.padding(vertical = 4.dp), verticalAlignment = Alignment.CenterVertically) {
        Column(Modifier.weight(1f)) {
            Text(title, color = MudryaColors.Text, fontSize = 15.sp)
            Text(hint, color = MudryaColors.TextMuted, fontSize = 13.sp)
        }
        androidx.compose.material3.Switch(
            checked = checked,
            onCheckedChange = onChange,
            colors = androidx.compose.material3.SwitchDefaults.colors(
                checkedThumbColor = MudryaColors.Ground,
                checkedTrackColor = MudryaColors.Saffron,
                uncheckedThumbColor = MudryaColors.TextMuted,
                uncheckedTrackColor = MudryaColors.Surface,
                uncheckedBorderColor = MudryaColors.Border,
            ),
        )
    }
}
