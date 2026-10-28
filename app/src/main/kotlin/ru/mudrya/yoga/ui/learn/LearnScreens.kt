package ru.mudrya.yoga.ui.learn

import android.annotation.SuppressLint
import android.content.Context
import androidx.activity.compose.BackHandler
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
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.catalog.SuryaCatalog
import ru.mudrya.yoga.engine.DoshaQuiz
import ru.mudrya.yoga.engine.Glossary
import ru.mudrya.yoga.engine.Tips
import ru.mudrya.yoga.engine.Wisdom
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.ChoiceCard
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.common.sequenceName
import ru.mudrya.yoga.ui.theme.MudryaColors

/** Строка из ресурсов по имени (тексты словаря, мыслей и теста лежат в strings.xml всех языков). */
@SuppressLint("DiscouragedApi")
private fun res(context: Context, name: String): String {
    val id = context.resources.getIdentifier(name, "string", context.packageName)
    return if (id != 0) context.getString(id) else ""
}

/** Мысль дня на главном экране. */
@Composable
fun WisdomCard(localDay: Long) {
    val context = LocalContext.current
    Card {
        SectionLabel(stringResource(R.string.wisdom_title))
        Text(res(context, "wisdom_${Wisdom.forDay(localDay)}"), color = MudryaColors.Text, fontSize = 16.sp, lineHeight = 22.sp, fontStyle = FontStyle.Italic)
    }
}

/** Плитки на главном: словарь и аюрведа, под ними — советы. */
@Composable
fun LearnTiles(onGlossary: () -> Unit, onDosha: () -> Unit, onTips: () -> Unit = {}) {
    Card(Modifier.fillMaxWidth().clickable(onClick = onTips)) {
        SectionLabel(stringResource(R.string.tips_title))
        Text(stringResource(R.string.tips_card_hint), color = MudryaColors.TextMuted, fontSize = 13.sp, lineHeight = 18.sp)
    }
    Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
        Card(Modifier.weight(1f).clickable(onClick = onGlossary)) {
            SectionLabel(stringResource(R.string.gloss_title))
            Text(stringResource(R.string.gloss_card_hint), color = MudryaColors.TextMuted, fontSize = 13.sp, lineHeight = 18.sp)
        }
        Card(Modifier.weight(1f).clickable(onClick = onDosha)) {
            SectionLabel(stringResource(R.string.dosha_title))
            Text(stringResource(R.string.dosha_card_hint), color = MudryaColors.TextMuted, fontSize = 13.sp, lineHeight = 18.sp)
        }
    }
}

/** Советы по практике: разделы из [Tips], тексты — tip_<раздел>_t и tip_<раздел>_<n>. */
@Composable
fun TipsScreen(onBack: () -> Unit) {
    val context = LocalContext.current
    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        ScreenTitle(stringResource(R.string.tips_title))
        Body(stringResource(R.string.tips_intro))
        Tips.sections.forEach { sec ->
            Card {
                SectionLabel(res(context, "tip_${sec.key}_t"))
                (1..sec.count).forEach { n ->
                    Text("• " + res(context, "tip_${sec.key}_$n"), color = MudryaColors.Text, fontSize = 15.sp, lineHeight = 21.sp)
                }
            }
        }
        TextAction(stringResource(R.string.back), onBack)
        Spacer(Modifier.height(8.dp))
    }
}

@Composable
fun GlossaryScreen(onBack: () -> Unit) {
    val context = LocalContext.current
    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        ScreenTitle(stringResource(R.string.gloss_title))
        (1..Glossary.COUNT).map { i -> res(context, "gloss_${i}_t") to res(context, "gloss_${i}_d") }
            .sortedBy { it.first.lowercase() }
            .forEach { (t, d) ->
                Column {
                    Text(t, color = MudryaColors.Saffron, fontSize = 17.sp, fontWeight = FontWeight.Bold)
                    Text(d, color = MudryaColors.Text, fontSize = 15.sp, lineHeight = 21.sp)
                }
            }
        TextAction(stringResource(R.string.back), onBack)
        Spacer(Modifier.height(8.dp))
    }
}

@Composable
fun DoshaScreen(onStart: (String) -> Unit, onBack: () -> Unit) {
    val context = LocalContext.current
    var answers by rememberSaveable { mutableStateOf(listOf<String>()) }
    val done = answers.size >= DoshaQuiz.QUESTIONS
    BackHandler(enabled = answers.isNotEmpty() && !done) { answers = answers.dropLast(1) }
    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        ScreenTitle(stringResource(R.string.dosha_title))
        if (!done) {
            if (answers.isEmpty()) Body(stringResource(R.string.dosha_intro))
            val q = answers.size + 1
            SectionLabel(stringResource(R.string.dosha_question, q, DoshaQuiz.QUESTIONS))
            Text(res(context, "dosha_q$q"), color = MudryaColors.Text, fontSize = 20.sp, fontWeight = FontWeight.Bold)
            listOf("v" to DoshaQuiz.Dosha.VATA, "p" to DoshaQuiz.Dosha.PITTA, "k" to DoshaQuiz.Dosha.KAPHA).forEach { (k, d) ->
                ChoiceCard(res(context, "dosha_q${q}_$k"), null, false, { answers = answers + d.name })
            }
        } else {
            val d = DoshaQuiz.result(answers.mapNotNull { a -> DoshaQuiz.Dosha.entries.firstOrNull { it.name == a } })
            val key = d.name.lowercase()
            SectionLabel(stringResource(R.string.dosha_result))
            Text(res(context, "dosha_$key"), color = MudryaColors.Saffron, fontSize = 24.sp, fontWeight = FontWeight.Bold)
            Body(res(context, "dosha_${key}_about"), color = MudryaColors.Text)
            Card {
                SectionLabel(stringResource(R.string.dosha_practice))
                Body(res(context, "dosha_${key}_practice"), color = MudryaColors.Text)
                SectionLabel(stringResource(R.string.dosha_day))
                Body(res(context, "dosha_${key}_day"), color = MudryaColors.Text)
                SectionLabel(stringResource(R.string.dosha_food))
                Body(res(context, "dosha_${key}_food"), color = MudryaColors.Text)
            }
            SectionLabel(stringResource(R.string.dosha_sets))
            val ids = SuryaCatalog.sequences.map { it.id }.toSet()
            DoshaQuiz.sets(d).filter { it in ids }.forEach { id ->
                PrimaryButton(sequenceName(id), { onStart(id) }, color = MudryaColors.Moon)
            }
            Body(stringResource(R.string.dosha_note))
            TextAction(stringResource(R.string.dosha_again), { answers = emptyList() })
        }
        TextAction(stringResource(R.string.back), onBack)
        Spacer(Modifier.height(8.dp))
    }
}
