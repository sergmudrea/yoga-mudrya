package ru.mudrya.yoga.ui.common

import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import ru.mudrya.yoga.R
import ru.mudrya.yoga.engine.Goal
import ru.mudrya.yoga.engine.Level
import ru.mudrya.yoga.engine.MovementTest
import ru.mudrya.yoga.engine.Sex
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.model.Joint
import ru.mudrya.yoga.model.Support

/** Название сета по его id. */
@Composable
fun sequenceName(id: String): String = stringResource(
    when (id) {
        "chandra" -> R.string.chandra
        "surya_chandra" -> R.string.set_bundle
        "morning" -> R.string.set_morning
        else -> R.string.surya
    },
)

@Composable
fun jointLabel(j: Joint): String = stringResource(
    when (j) {
        Joint.WRISTS -> R.string.joint_wrists
        Joint.SHOULDERS -> R.string.joint_shoulders
        Joint.LUMBAR -> R.string.joint_lumbar
        Joint.NECK -> R.string.joint_neck
        Joint.KNEES -> R.string.joint_knees
    },
)

@Composable
fun injuryLabel(i: Injury): String = jointLabel(i.joint)

@Composable
fun goalLabel(g: Goal): String = stringResource(
    when (g) {
        Goal.JOINTS -> R.string.goal_joints
        Goal.YOUTH -> R.string.goal_youth
        Goal.SHAPE -> R.string.goal_shape
        Goal.STRENGTH -> R.string.goal_strength
        Goal.CALM -> R.string.goal_calm
    },
)

@Composable
fun levelLabel(l: Level): String = stringResource(
    when (l) {
        Level.BEGINNER -> R.string.level_beginner
        Level.EXPERIENCED -> R.string.level_experienced
        Level.ADVANCED -> R.string.level_advanced
    },
)

@Composable
fun levelHint(l: Level): String = stringResource(
    when (l) {
        Level.BEGINNER -> R.string.level_beginner_hint
        Level.EXPERIENCED -> R.string.level_experienced_hint
        Level.ADVANCED -> R.string.level_advanced_hint
    },
)

@Composable
fun sexLabel(s: Sex): String = stringResource(if (s == Sex.FEMALE) R.string.sex_female else R.string.sex_male)

@Composable
fun supportLabel(s: Support): String = stringResource(
    when (s) {
        Support.FISTS -> R.string.support_fists
        Support.PALMS -> R.string.support_palms
        Support.FINGERS -> R.string.support_fingers
    },
)

@Composable
fun testTitle(t: MovementTest): String = stringResource(
    when (t) {
        MovementTest.SIT_RISE -> R.string.test_sit_rise
        MovementTest.FORWARD_FOLD -> R.string.test_fold
        MovementTest.BALANCE -> R.string.test_balance
        MovementTest.PUSH_UPS -> R.string.test_push_ups
        MovementTest.HR_RECOVERY -> R.string.test_hr
    },
)

@Composable
fun testHowTo(t: MovementTest): String = stringResource(
    when (t) {
        MovementTest.SIT_RISE -> R.string.test_sit_rise_how
        MovementTest.FORWARD_FOLD -> R.string.test_fold_how
        MovementTest.BALANCE -> R.string.test_balance_how
        MovementTest.PUSH_UPS -> R.string.test_push_ups_how
        MovementTest.HR_RECOVERY -> R.string.test_hr_how
    },
)

@Composable
fun testUnit(t: MovementTest): String = stringResource(
    when (t) {
        MovementTest.SIT_RISE -> R.string.unit_points
        MovementTest.FORWARD_FOLD -> R.string.unit_cm
        MovementTest.BALANCE -> R.string.unit_sec
        MovementTest.PUSH_UPS -> R.string.unit_times
        MovementTest.HR_RECOVERY -> R.string.unit_bpm
    },
)
