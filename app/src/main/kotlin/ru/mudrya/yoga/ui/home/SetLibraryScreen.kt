package ru.mudrya.yoga.ui.home

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.clickable
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
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.catalog.BookSetsCatalog
import ru.mudrya.yoga.catalog.ExtraSetsCatalog
import ru.mudrya.yoga.catalog.ProgramCatalog
import ru.mudrya.yoga.catalog.ThemeCatalog
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.AdviceReason
import ru.mudrya.yoga.engine.ThemeAdvice
import ru.mudrya.yoga.engine.ThemeAdvisor
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.engine.constraints
import ru.mudrya.yoga.store.PremiumPolicy
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.programHint
import ru.mudrya.yoga.ui.common.programName
import ru.mudrya.yoga.ui.common.tr
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.theme.MudryaColors
import java.util.Locale

/** Дополнительные сеты книги — в библиотеке сетов отдельной папкой. */
private val BOOK_EXTRAS = listOf("at_skd", "at_lkd", "at_ssd", "at_zsd", "at_st")

/**
 * Библиотека сетов: «Подобрано для вас» по тестам и целям, сеты под задачу по разделам
 * шесть сетов «Сетового тренинга» (Ясочка, Сидорцов, Зенченко) и дополнительные сеты из книги Сидерского.
 */
@Composable
fun SetLibraryScreen(state: UserState, users: UserRepository, premium: Boolean, onStart: (String) -> Unit, onBack: () -> Unit) {
    BackHandler(onBack = onBack)
    val ru = Locale.getDefault().language == "ru"
    val advice = remember(state.profile, state.health, state.tests) { ThemeAdvisor.recommend(state) }
    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        Text("←", color = MudryaColors.Text, fontSize = 24.sp, modifier = Modifier.clickable(onClick = onBack))
        ScreenTitle(stringResource(R.string.setlib_title))
        Body(stringResource(R.string.setlib_hint))

        if (advice.isNotEmpty()) {
            SectionLabel(stringResource(R.string.setlib_for_you))
            advice.forEach { a ->
                ThemeRow(a.themeId, state, users, premium, onStart)
                Text(adviceText(a), color = MudryaColors.Saffron, fontSize = 13.sp, modifier = Modifier.padding(start = 6.dp))
            }
        } else {
            Body(stringResource(R.string.setlib_take_test), color = MudryaColors.Saffron)
        }

        Spacer(Modifier.height(4.dp))
        SectionLabel(stringResource(R.string.programs_title))
        Body(stringResource(R.string.programs_hint))
        val today = UserRepository.today()
        ProgramCatalog.programs.forEach { p ->
            val active = state.programId == p.id
            val day = if (active) ProgramCatalog.today(p, state.programStart ?: today, today, state) else null
            ProgramRow(
                programName(p),
                programHint(p),
                if (day != null && !day.finished) stringResource(R.string.program_active, day.index + 1, p.length) else stringResource(R.string.program_days, p.length),
                active,
            ) { users.update { it.copy(programId = p.id, programStart = today) }; onBack() }
        }
        ProgramRow(
            stringResource(R.string.program_path8),
            stringResource(R.string.program_path8_hint),
            "",
            state.programId == null,
        ) { users.update { it.copy(programId = null) }; onBack() }

        ThemeCatalog.Section.entries.forEach { section ->
            Spacer(Modifier.height(4.dp))
            SectionLabel(if (ru) section.titleRu else tr(section.titleEn))
            ThemeCatalog.themes.filter { it.section == section }.forEach { t ->
                ThemeRow(t.id, state, users, premium, onStart)
                Text(if (ru) t.hintRu else tr(t.hintEn), color = MudryaColors.TextMuted, fontSize = 13.sp, modifier = Modifier.padding(start = 6.dp))
            }
        }

        ExtraSection(ExtraSetsCatalog.Section.PILATES, ru, state, users, premium, onStart)

        Spacer(Modifier.height(4.dp))
        SectionLabel(stringResource(R.string.setlib_training))
        Body(stringResource(R.string.setlib_training_hint))
        BookSetsCatalog.sets.forEach { b ->
            ThemeRow(b.id, state, users, premium, onStart)
            Text(if (ru) b.hintRu else tr(b.hintEn), color = MudryaColors.TextMuted, fontSize = 13.sp, modifier = Modifier.padding(start = 6.dp))
        }

        ExtraSetsCatalog.Section.entries.filter { it != ExtraSetsCatalog.Section.PILATES }.forEach { section ->
            ExtraSection(section, ru, state, users, premium, onStart)
        }

        Spacer(Modifier.height(4.dp))
        SectionLabel(stringResource(R.string.setlib_book))
        Body(stringResource(R.string.setlib_book_hint))
        BOOK_EXTRAS.forEach { ThemeRow(it, state, users, premium, onStart) }
        Spacer(Modifier.height(8.dp))
    }
}

/** Раздел дополнительных сетов (классика из книг, мягкая йога 50+, суставы, йога характера, пилатес-йога). */
@Composable
private fun ExtraSection(
    section: ExtraSetsCatalog.Section,
    ru: Boolean,
    state: UserState,
    users: UserRepository,
    premium: Boolean,
    onStart: (String) -> Unit,
) {
    Spacer(Modifier.height(4.dp))
    SectionLabel(if (ru) section.titleRu else tr(section.titleEn))
    ExtraSetsCatalog.sets.filter { it.section == section }.forEach { x ->
        ThemeRow(x.id, state, users, premium, onStart)
        Text(if (ru) x.hintRu else tr(x.hintEn), color = MudryaColors.TextMuted, fontSize = 13.sp, modifier = Modifier.padding(start = 6.dp))
    }
}

@Composable
private fun ThemeRow(id: String, state: UserState, users: UserRepository, premium: Boolean, onStart: (String) -> Unit) {
    val constraints = state.constraints(UserRepository.today())
    val (positions, minutes) = remember(state.params, constraints, id, state.settings.lengthMin) { setSize(id, state.params, constraints, state.settings.lengthMin) }
    SetRow(id, positions, minutes, PremiumPolicy.isLocked(id, premium), accentOf(id), backgroundOf(id), state, users) { onStart(id) }
}

@Composable
fun adviceText(a: ThemeAdvice): String = stringResource(
    when (a.reason) {
        AdviceReason.BACK -> R.string.advice_back
        AdviceReason.NECK -> R.string.advice_neck
        AdviceReason.KNEES -> R.string.advice_knees
        AdviceReason.WRISTS -> R.string.advice_wrists
        AdviceReason.GOAL_JOINTS -> R.string.advice_goal_joints
        AdviceReason.GOAL_YOUTH -> R.string.advice_goal_youth
        AdviceReason.GOAL_SHAPE -> R.string.advice_goal_shape
        AdviceReason.GOAL_STRENGTH -> R.string.advice_goal_strength
        AdviceReason.GOAL_CALM -> R.string.advice_goal_calm
        AdviceReason.WEIGHT -> R.string.advice_weight
        AdviceReason.HEART -> R.string.advice_heart
        AdviceReason.SITTING -> R.string.advice_sitting
        AdviceReason.BREATH -> R.string.advice_breath
        AdviceReason.MOVEMENT_AGE -> R.string.advice_movement_age
    },
)

/** «Подобрано для вас» на главном экране: три первых сета. */
@Composable
fun ForYouSets(state: UserState, users: UserRepository, premium: Boolean, onStart: (String) -> Unit) {
    val advice = remember(state.profile, state.health, state.tests) { ThemeAdvisor.recommend(state, limit = 3) }
    if (advice.isEmpty()) return
    SectionLabel(stringResource(R.string.setlib_for_you))
    advice.forEach { a ->
        ThemeRow(a.themeId, state, users, premium, onStart)
        Text(adviceText(a), color = MudryaColors.Saffron, fontSize = 13.sp, modifier = Modifier.padding(start = 6.dp))
    }
}

/** Строка программы: название, описание, длина или текущий день; нажатие — начать программу. */
@Composable
private fun ProgramRow(name: String, hint: String, meta: String, active: Boolean, onPick: () -> Unit) {
    Card(
        modifier = Modifier.clickable(onClick = onPick),
        color = if (active) MudryaColors.SaffronDeep else MudryaColors.Surface,
    ) {
        Text(name, color = if (active) MudryaColors.Saffron else MudryaColors.Text, fontSize = 17.sp, fontWeight = androidx.compose.ui.text.font.FontWeight.Bold)
        Text(hint, color = MudryaColors.TextMuted, fontSize = 13.sp)
        if (meta.isNotEmpty()) Text(meta, color = MudryaColors.Saffron, fontSize = 13.sp)
        if (!active) Text(stringResource(R.string.program_start_btn) + " →", color = MudryaColors.Saffron, fontSize = 14.sp, fontWeight = androidx.compose.ui.text.font.FontWeight.Bold)
    }
}
