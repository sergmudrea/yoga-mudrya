package ru.mudrya.yoga.ui.test

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
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableDoubleStateOf
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.BodyLog
import ru.mudrya.yoga.engine.HealthCheck
import ru.mudrya.yoga.engine.HealthRecord
import ru.mudrya.yoga.engine.MovementAgeCalculator
import ru.mudrya.yoga.engine.MovementRecord
import ru.mudrya.yoga.engine.MovementResult
import ru.mudrya.yoga.engine.MovementTest
import ru.mudrya.yoga.engine.ProvisionalNorms
import ru.mudrya.yoga.engine.UserProfile
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.Stepper
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.common.testHowTo
import ru.mudrya.yoga.ui.common.testTitle
import ru.mudrya.yoga.ui.common.testUnit
import ru.mudrya.yoga.ui.theme.MudryaColors
import kotlin.math.abs
import kotlin.math.roundToInt

/** Шкала ввода для теста. */
private data class Scale(val min: Double, val max: Double, val step: Double, val start: Double, val big: Double?)

private fun scaleOf(t: MovementTest) = when (t) {
    MovementTest.SIT_RISE -> Scale(0.0, 10.0, 0.5, 8.0, null)
    MovementTest.FORWARD_FOLD -> Scale(-40.0, 40.0, 1.0, 0.0, 5.0)
    MovementTest.BALANCE -> Scale(0.0, 120.0, 1.0, 5.0, 5.0)
    MovementTest.PUSH_UPS -> Scale(0.0, 150.0, 1.0, 10.0, 5.0)
    MovementTest.HR_RECOVERY -> Scale(0.0, 80.0, 1.0, 20.0, 5.0)
}

private fun format(v: Double): String = if (v % 1.0 == 0.0) v.toInt().toString() else v.toString()

/**
 * Тест возраста движения: вступление → пять тестов (любой можно пропустить) → результат.
 */
@Composable
fun MovementTestScreen(profile: UserProfile, users: UserRepository, onPremium: () -> Unit = {}, onDone: () -> Unit) {
    val tests = MovementTest.entries
    val questions = HealthQuestion.entries
    // −1 — вступление, 0..4 — тесты движения, дальше — анкета здоровья, последняя — результат.
    var page by rememberSaveable { mutableIntStateOf(-1) }
    val results = rememberSaveable { HashMap<String, Double>() }
    val answers = rememberSaveable { HashMap<String, Double>() }
    var resultAge by rememberSaveable { mutableStateOf<Int?>(null) }
    var healthAt by rememberSaveable { mutableStateOf<Long?>(null) }
    val resultPage = tests.size + questions.size

    BackHandler(enabled = page in 0 until resultPage) { page-- }

    fun movementValues() = results.mapNotNull { (k, v) -> tests.firstOrNull { it.name == k }?.let { it to v } }.toMap()

    fun finish() {
        val values = movementValues()
        val now = System.currentTimeMillis()
        val day = UserRepository.today()
        val health = healthRecord(answers, now, day)
        val hasHealth = answers.isNotEmpty()
        if (values.isEmpty() && !hasHealth) {
            onDone()
            return
        }
        val r = if (values.isEmpty()) null else MovementAgeCalculator(ProvisionalNorms).calculate(profile.age, profile.sex, values)
        users.update { s ->
            var next = s
            if (r != null) next = next.copy(tests = next.tests + MovementRecord(now, day, profile.age, r.age, values))
            if (hasHealth) {
                next = next.copy(health = next.health + health)
                // Вес и талия сразу попадают в журнал замеров прогресса.
                if (health.weightKg != null || health.waistCm != null) {
                    next = next.copy(body = BodyLog.put(next.body, day, health.weightKg, health.waistCm))
                }
            }
            next
        }
        resultAge = r?.age
        healthAt = if (hasHealth) now else null
        page = resultPage
    }

    Column(
        Modifier
            .fillMaxSize()
            .background(MudryaColors.Ground)
            .padding(horizontal = 20.dp, vertical = 16.dp),
    ) {
        when {
            page < 0 -> Intro(onStart = { page = 0 }, onSkip = onDone)
            page < tests.size -> {
                val t = tests[page]
                TestPage(
                    index = page,
                    count = tests.size,
                    test = t,
                    initial = results[t.name],
                    onRecord = { v ->
                        results[t.name] = v
                        page++
                    },
                    onSkip = {
                        results.remove(t.name)
                        page++
                    },
                )
            }
            page < resultPage -> {
                val i = page - tests.size
                HealthPage(i, questions.size, questions[i], answers) {
                    if (page == resultPage - 1) finish() else page++
                }
            }
            else -> {
                val values = movementValues()
                val r = if (values.isEmpty()) null else MovementAgeCalculator(ProvisionalNorms).calculate(profile.age, profile.sex, values)
                val health = healthAt?.let { healthRecord(answers, it, UserRepository.today()) }
                ResultPage(profile, resultAge ?: r?.age, r, health, onPremium, onDone)
            }
        }
    }
}

@Composable
private fun Intro(onStart: () -> Unit, onSkip: () -> Unit) {
    Column(Modifier.fillMaxSize()) {
        Column(
            Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Spacer(Modifier.height(16.dp))
            ScreenTitle(stringResource(R.string.test_intro_title))
            Body(stringResource(R.string.test_intro_text))
            Card {
                MovementTest.entries.forEachIndexed { i, t ->
                    Text("${i + 1}. ${testTitle(t)}", color = MudryaColors.Text, fontSize = 15.sp)
                }
            }
            Body(stringResource(R.string.test_disclaimer))
        }
        PrimaryButton(stringResource(R.string.test_start), onStart)
        TextAction(stringResource(R.string.test_later), onSkip)
    }
}

@Composable
private fun TestPage(index: Int, count: Int, test: MovementTest, initial: Double?, onRecord: (Double) -> Unit, onSkip: () -> Unit) {
    val scale = scaleOf(test)
    var value by rememberSaveable(test) { mutableDoubleStateOf(initial ?: scale.start) }
    fun change(d: Double) {
        value = (value + d).coerceIn(scale.min, scale.max)
    }
    Column(Modifier.fillMaxSize()) {
        Column(
            Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            SectionLabel(stringResource(R.string.test_n_of, index + 1, count))
            ScreenTitle(testTitle(test))
            Body(testHowTo(test), color = MudryaColors.Text)
            Spacer(Modifier.height(12.dp))
            Column(Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally) {
                Stepper(
                    value = format(value),
                    onMinus = { change(-scale.step) },
                    onPlus = { change(scale.step) },
                    onBigMinus = scale.big?.let { b -> { change(-b) } },
                    onBigPlus = scale.big?.let { b -> { change(b) } },
                    bigLabel = format(scale.big ?: 0.0),
                )
                Spacer(Modifier.height(6.dp))
                Text(testUnit(test), color = MudryaColors.TextMuted, fontSize = 14.sp)
            }
        }
        PrimaryButton(stringResource(R.string.test_record), { onRecord(value) })
        TextAction(stringResource(R.string.test_skip), onSkip)
    }
}

@Composable
private fun ResultPage(
    profile: UserProfile,
    movementAge: Int?,
    r: MovementResult?,
    health: HealthRecord?,
    onPremium: () -> Unit,
    onDone: () -> Unit,
) {
    val passportAge = profile.age
    Column(Modifier.fillMaxSize()) {
        Column(
            Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Spacer(Modifier.height(16.dp))
            if (movementAge != null && r != null) MovementResultBlock(passportAge, movementAge, r)
            health?.let { HealthSummaryView(it, HealthCheck.evaluate(it, profile.sex), onPremium) }
            Body(stringResource(R.string.test_disclaimer))
        }
        PrimaryButton(stringResource(R.string.test_done), onDone)
    }
}

@Composable
private fun MovementResultBlock(passportAge: Int, movementAge: Int, r: MovementResult) {
    Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
            SectionLabel(stringResource(R.string.test_result_label))
            Row(verticalAlignment = Alignment.Bottom) {
                Text("$movementAge", color = MudryaColors.Saffron, fontSize = 64.sp, fontWeight = FontWeight.Bold)
                Text(
                    stringResource(R.string.test_result_passport, passportAge),
                    color = MudryaColors.TextMuted,
                    fontSize = 15.sp,
                    modifier = Modifier.padding(start = 12.dp, bottom = 14.dp),
                )
            }
            val diff = movementAge - passportAge
            Body(
                when {
                    diff < 0 -> stringResource(R.string.test_result_younger, -diff)
                    diff > 0 -> stringResource(R.string.test_result_older, diff)
                    else -> stringResource(R.string.test_result_same)
                },
                color = MudryaColors.Text,
            )
            Card {
                r.perTest.forEach { (t, years) -> Correction(testTitle(t), years) }
            }
    }
}

/** Полоса поправки: влево (моложе) — шафран, вправо (старше) — серая. Шкала ±8 лет. */
@Composable
private fun Correction(title: String, years: Double) {
    Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
        Row {
            Text(title, color = MudryaColors.Text, fontSize = 14.sp, modifier = Modifier.weight(1f))
            val y = years.roundToInt()
            Text(if (y > 0) "+$y" else "$y", color = if (y <= 0) MudryaColors.Saffron else MudryaColors.TextMuted, fontSize = 14.sp, fontWeight = FontWeight.Bold)
        }
        Row(Modifier.fillMaxWidth().height(6.dp)) {
            val share = (abs(years) / 8.0).coerceIn(0.0, 1.0).toFloat()
            Box(Modifier.weight(1f).height(6.dp).background(MudryaColors.Border, RoundedCornerShape(3.dp))) {
                if (years < 0) {
                    Row(Modifier.fillMaxWidth()) {
                        Spacer(Modifier.weight(1f - share + 0.0001f))
                        Box(Modifier.weight(share + 0.0001f).height(6.dp).background(MudryaColors.Saffron, RoundedCornerShape(3.dp)))
                    }
                }
            }
            Spacer(Modifier.padding(horizontal = 1.dp))
            Box(Modifier.weight(1f).height(6.dp).background(MudryaColors.Border, RoundedCornerShape(3.dp))) {
                if (years > 0) {
                    Box(Modifier.fillMaxWidth(share).height(6.dp).background(MudryaColors.TextMuted, RoundedCornerShape(3.dp)))
                }
            }
        }
    }
}
