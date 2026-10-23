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

private const val STEPS = 5

/**
 * Онбординг в пять шагов: знакомство, пол и возраст, цели, уровень, ограничения.
 * Ответы хранятся в rememberSaveable — поворот экрана их не теряет.
 */
@Composable
fun OnboardingScreen(initial: UserProfile?, onDone: (UserProfile) -> Unit) {
    // При редактировании профиля приветствие не показываем.
    val firstStep = if (initial == null) 0 else 1
    var step by rememberSaveable { mutableIntStateOf(firstStep) }
    var sex by rememberSaveable { mutableStateOf(initial?.sex) }
    var age by rememberSaveable { mutableIntStateOf(initial?.age ?: 35) }
    var goals by rememberSaveable { mutableStateOf(initial?.goals?.map { it.name }?.toSet() ?: emptySet()) }
    var level by rememberSaveable { mutableStateOf(initial?.level) }
    var injuries by rememberSaveable { mutableStateOf(initial?.injuries?.map { it.name }?.toSet() ?: emptySet()) }

    BackHandler(enabled = step > firstStep) { step-- }

    Column(
        Modifier
            .fillMaxSize()
            .background(MudryaColors.Ground)
            .padding(horizontal = 20.dp, vertical = 16.dp),
    ) {
        if (step > 0) {
            StepDots(step)
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
                    ScreenTitle(stringResource(R.string.onb_about_title))
                    Body(stringResource(R.string.onb_about_hint))
                    SectionLabel(stringResource(R.string.onb_sex))
                    ChipRow {
                        Sex.entries.forEach { s -> Chip(sexLabel(s), sex == s, { sex = s }) }
                    }
                    Spacer(Modifier.height(8.dp))
                    SectionLabel(stringResource(R.string.onb_age))
                    Stepper(
                        value = age.toString(),
                        onMinus = { age = (age - 1).coerceAtLeast(14) },
                        onPlus = { age = (age + 1).coerceAtMost(100) },
                        onBigMinus = { age = (age - 5).coerceAtLeast(14) },
                        onBigPlus = { age = (age + 5).coerceAtMost(100) },
                    )
                }
                2 -> {
                    ScreenTitle(stringResource(R.string.onb_goals_title))
                    Body(stringResource(R.string.onb_goals_hint))
                    Goal.entries.forEach { g ->
                        ChoiceCard(goalLabel(g), null, g.name in goals, {
                            goals = if (g.name in goals) goals - g.name else goals + g.name
                        })
                    }
                }
                3 -> {
                    ScreenTitle(stringResource(R.string.onb_level_title))
                    Level.entries.forEach { l ->
                        ChoiceCard(levelLabel(l), levelHint(l), level == l, { level = l })
                    }
                }
                4 -> {
                    ScreenTitle(stringResource(R.string.onb_limits_title))
                    Body(stringResource(R.string.onb_limits_hint))
                    ChoiceCard(stringResource(R.string.onb_limits_none), null, injuries.isEmpty(), { injuries = emptySet() })
                    Injury.entries.forEach { i ->
                        ChoiceCard(injuryLabel(i), injuryHint(i), i.name in injuries, {
                            injuries = if (i.name in injuries) injuries - i.name else injuries + i.name
                        })
                    }
                    Body(stringResource(R.string.onb_limits_doctor))
                }
            }
        }
        Spacer(Modifier.height(12.dp))
        val canGo = when (step) {
            1 -> sex != null
            2 -> goals.isNotEmpty()
            3 -> level != null
            else -> true
        }
        PrimaryButton(
            text = stringResource(if (step == 0) R.string.onb_start else if (step == STEPS - 1) R.string.onb_finish else R.string.onb_next),
            onClick = {
                if (step < STEPS - 1) {
                    step++
                } else {
                    onDone(
                        UserProfile(
                            sex = sex ?: Sex.FEMALE,
                            age = age,
                            goals = goals.mapNotNull { n -> Goal.entries.firstOrNull { it.name == n } }.toSet(),
                            level = level ?: Level.BEGINNER,
                            injuries = injuries.mapNotNull { n -> Injury.entries.firstOrNull { it.name == n } }.toSet(),
                        ),
                    )
                }
            },
            enabled = canGo,
        )
        if (step > firstStep) TextAction(stringResource(R.string.onb_back), { step-- })
    }
}

@Composable
private fun Welcome() {
    Spacer(Modifier.height(32.dp))
    Box(
        Modifier
            .fillMaxWidth()
            .height(180.dp)
            .background(MudryaColors.SaffronDeep, RoundedCornerShape(28.dp)),
    )
    Spacer(Modifier.height(12.dp))
    ScreenTitle(stringResource(R.string.onb_welcome_title))
    Body(stringResource(R.string.onb_welcome_text))
    Body(stringResource(R.string.onb_welcome_method), color = MudryaColors.Text)
}

@Composable
private fun StepDots(step: Int) {
    Row(horizontalArrangement = Arrangement.spacedBy(6.dp), modifier = Modifier.fillMaxWidth()) {
        (1 until STEPS).forEach { i ->
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
