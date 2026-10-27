package ru.mudrya.yoga.ui.onboarding

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.engine.Goal
import ru.mudrya.yoga.engine.Level
import ru.mudrya.yoga.engine.SessionFit
import ru.mudrya.yoga.engine.Sex
import ru.mudrya.yoga.engine.UserProfile
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Chip
import ru.mudrya.yoga.ui.common.ChipRow
import ru.mudrya.yoga.ui.common.ChoiceCard
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.Stepper
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.common.goalLabel
import ru.mudrya.yoga.ui.common.injuryLabel
import ru.mudrya.yoga.ui.common.levelHint
import ru.mudrya.yoga.ui.common.levelLabel
import ru.mudrya.yoga.ui.common.sexLabel
import ru.mudrya.yoga.ui.theme.MudryaColors

/** Ответы онбординга: профиль, минуты в день, выбранная программа и «начать сразу». */
data class OnboardingResult(val profile: UserProfile, val minutes: Int, val programId: String?, val startNow: Boolean)

private const val PLAN_STEP = 5

/**
 * Онбординг на минуту: знакомство → цели → опыт → минуты в день → о вас и ограничения → ваш план.
 * При редактировании профиля приветствия и плана нет. Ответы хранятся в rememberSaveable.
 */
@Composable
fun OnboardingScreen(initial: UserProfile?, initialMinutes: Int = 10, onDone: (OnboardingResult) -> Unit) {
    val editing = initial != null
    val firstStep = if (editing) 1 else 0
    val lastStep = if (editing) PLAN_STEP - 1 else PLAN_STEP
    var step by rememberSaveable { mutableIntStateOf(firstStep) }
    var sex by rememberSaveable { mutableStateOf(initial?.sex ?: Sex.FEMALE) }
    var age by rememberSaveable { mutableIntStateOf(initial?.age ?: 35) }
    var goals by rememberSaveable { mutableStateOf(initial?.goals?.map { it.name }?.toSet() ?: emptySet()) }
    var level by rememberSaveable { mutableStateOf(initial?.level) }
    var injuries by rememberSaveable { mutableStateOf(initial?.injuries?.map { it.name }?.toSet() ?: emptySet()) }
    var minutes by rememberSaveable { mutableIntStateOf(if (initialMinutes in SessionFit.LENGTHS) initialMinutes else 10) }

    fun profile() = UserProfile(
        sex = sex,
        age = age,
        goals = goals.mapNotNull { n -> Goal.entries.firstOrNull { it.name == n } }.toSet(),
        level = level ?: Level.BEGINNER,
        injuries = injuries.mapNotNull { n -> Injury.entries.firstOrNull { it.name == n } }.toSet(),
    )

    BackHandler(enabled = step > firstStep) { step-- }

    Column(
        Modifier
            .fillMaxSize()
            .background(MudryaColors.Ground)
            .padding(horizontal = 20.dp, vertical = 16.dp),
    ) {
        if (step > 0) {
            StepDots(step, lastStep)
            Spacer(Modifier.height(20.dp))
        }
        Column(
            Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            when (step) {
                0 -> Welcome()
                1 -> {
                    ScreenTitle(stringResource(R.string.onb_goals_title))
                    Body(stringResource(R.string.onb_goals_hint))
                    Goal.entries.forEach { g ->
                        ChoiceCard(goalLabel(g), null, g.name in goals, {
                            goals = if (g.name in goals) goals - g.name else goals + g.name
                        })
                    }
                }
                2 -> {
                    ScreenTitle(stringResource(R.string.onb_level_title))
                    Level.entries.forEach { l ->
                        ChoiceCard(levelLabel(l), levelHint(l), level == l, { level = l })
                    }
                }
                3 -> {
                    ScreenTitle(stringResource(R.string.onb_minutes_title))
                    Body(stringResource(R.string.onb_minutes_hint))
                    SessionFit.LENGTHS.forEach { m ->
                        ChoiceCard(stringResource(R.string.session_length_min, m), minutesHint(m), minutes == m, { minutes = m })
                    }
                }
                4 -> {
                    ScreenTitle(stringResource(R.string.onb_about_title))
                    Body(stringResource(R.string.onb_about_hint))
                    ChipRow {
                        Sex.entries.forEach { s -> Chip(sexLabel(s), sex == s, { sex = s }) }
                    }
                    SectionLabel(stringResource(R.string.onb_age))
                    Stepper(
                        value = age.toString(),
                        onMinus = { age = (age - 1).coerceAtLeast(14) },
                        onPlus = { age = (age + 1).coerceAtMost(100) },
                        onBigMinus = { age = (age - 5).coerceAtLeast(14) },
                        onBigPlus = { age = (age + 5).coerceAtMost(100) },
                    )
                    Spacer(Modifier.height(4.dp))
                    SectionLabel(stringResource(R.string.onb_limits_title))
                    Body(stringResource(R.string.onb_limits_hint))
                    ChoiceCard(stringResource(R.string.onb_limits_none), null, injuries.isEmpty(), { injuries = emptySet() })
                    Injury.entries.forEach { i ->
                        ChoiceCard(injuryLabel(i), injuryHint(i), i.name in injuries, {
                            injuries = if (i.name in injuries) injuries - i.name else injuries + i.name
                        })
                    }
                    Body(stringResource(R.string.onb_limits_doctor))
                }
                PLAN_STEP -> PlanStep(profile(), minutes)
            }
        }
        Spacer(Modifier.height(12.dp))
        val canGo = when (step) {
            1 -> goals.isNotEmpty()
            2 -> level != null
            else -> true
        }
        val label = when {
            step == 0 -> R.string.onb_start
            step == PLAN_STEP -> R.string.onb_plan_start
            step == lastStep -> R.string.onb_finish
            else -> R.string.onb_next
        }
        PrimaryButton(
            text = stringResource(label),
            onClick = {
                if (step < lastStep) {
                    step++
                } else {
                    val prof = profile()
                    val program = if (editing) null else ru.mudrya.yoga.catalog.ProgramCatalog.recommend(prof).id
                    onDone(OnboardingResult(prof, minutes, program, startNow = !editing))
                }
            },
            enabled = canGo,
        )
        if (step == PLAN_STEP) {
            TextAction(stringResource(R.string.onb_plan_later), {
                val prof = profile()
                onDone(OnboardingResult(prof, minutes, ru.mudrya.yoga.catalog.ProgramCatalog.recommend(prof).id, startNow = false))
            })
        } else if (step > firstStep) {
            TextAction(stringResource(R.string.onb_back), { step-- })
        }
    }
}

@Composable
private fun minutesHint(m: Int): String = stringResource(
    when (m) {
        10 -> R.string.onb_minutes_10
        20 -> R.string.onb_minutes_20
        else -> R.string.onb_minutes_40
    },
)

/** Последний шаг: программа под ответы и первая практика. */
@Composable
private fun PlanStep(profile: UserProfile, minutes: Int) {
    val program = androidx.compose.runtime.remember(profile) { ru.mudrya.yoga.catalog.ProgramCatalog.recommend(profile) }
    val first = program.days.firstOrNull { it != null } ?: "at_sn"
    ScreenTitle(stringResource(R.string.onb_plan_title))
    Body(stringResource(R.string.onb_plan_hint))
    ru.mudrya.yoga.ui.common.Card(color = MudryaColors.SaffronDeep) {
        androidx.compose.material3.Text(
            ru.mudrya.yoga.ui.common.programName(program),
            color = MudryaColors.Saffron,
            fontSize = androidx.compose.ui.unit.TextUnit(22f, androidx.compose.ui.unit.TextUnitType.Sp),
            fontWeight = androidx.compose.ui.text.font.FontWeight.Bold,
        )
        Body(ru.mudrya.yoga.ui.common.programHint(program), color = MudryaColors.Text)
        Body(stringResource(R.string.onb_plan_first, ru.mudrya.yoga.ui.common.sequenceName(first), minutes), color = MudryaColors.Saffron)
    }
    Body(stringResource(R.string.onb_plan_change))
}

@Composable
private fun Welcome() {
    Spacer(Modifier.height(32.dp))
    WelcomeHero()
    Spacer(Modifier.height(12.dp))
    ScreenTitle(stringResource(R.string.onb_welcome_title))
    Body(stringResource(R.string.onb_welcome_text))
    Body(stringResource(R.string.onb_welcome_method), color = MudryaColors.Text)
}

@Composable
private fun StepDots(step: Int, last: Int) {
    Row(horizontalArrangement = Arrangement.spacedBy(6.dp), modifier = Modifier.fillMaxWidth()) {
        (1..last).forEach { i ->
            Box(
                Modifier
                    .weight(1f)
                    .height(4.dp)
                    .background(if (i <= step) MudryaColors.Saffron else MudryaColors.Border, RoundedCornerShape(2.dp)),
            )
        }
    }
}

@Composable
private fun injuryHint(i: Injury): String = stringResource(
    when (i) {
        Injury.WRISTS -> R.string.injury_wrists_hint
        Injury.LUMBAR -> R.string.injury_lumbar_hint
        Injury.NECK -> R.string.injury_neck_hint
        Injury.KNEES -> R.string.injury_knees_hint
    },
)

/**
 * Заставка приветствия: марионетка проходит положения классической Сурья Намаскар
 * (кадры из атласа), под ней — название и номер положения.
 */
@Composable
private fun WelcomeHero() {
    val poses = androidx.compose.runtime.remember {
        ru.mudrya.yoga.catalog.AtlasCatalog.blocks.first { it.id == "at_sn_r" }.steps.map { it.asanaId to (it.titleRu ?: "") }
    }
    var i by androidx.compose.runtime.remember { androidx.compose.runtime.mutableIntStateOf(0) }
    androidx.compose.runtime.LaunchedEffect(Unit) {
        while (true) {
            kotlinx.coroutines.delay(1_300)
            i = (i + 1) % poses.size
        }
    }
    Column(
        Modifier
            .fillMaxWidth()
            .background(MudryaColors.SaffronDeep, RoundedCornerShape(28.dp))
            .padding(vertical = 14.dp),
        horizontalAlignment = androidx.compose.ui.Alignment.CenterHorizontally,
    ) {
        androidx.compose.animation.Crossfade(targetState = i, label = "hero") { k ->
            ru.mudrya.yoga.ui.builder.PoseThumb(poses[k].first, 150.dp)
        }
        Spacer(Modifier.height(8.dp))
        androidx.compose.material3.Text(
            "${i + 1} / ${poses.size} · ${poses[i].second}",
            color = MudryaColors.Saffron,
            fontSize = androidx.compose.ui.unit.TextUnit(13f, androidx.compose.ui.unit.TextUnitType.Sp),
        )
    }
}
