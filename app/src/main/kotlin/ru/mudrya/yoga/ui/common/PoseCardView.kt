package ru.mudrya.yoga.ui.common

import android.content.Context
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import org.json.JSONObject
import ru.mudrya.yoga.R
import ru.mudrya.yoga.engine.PoseCards
import ru.mudrya.yoga.ui.theme.MudryaColors
import java.util.Locale

/** Тексты карточек поз из assets/cards/<язык>.json; чего нет на языке интерфейса — по-английски. */
object CardText {
    private val LANGS = setOf("en", "ru", "de", "fr", "es", "it", "pt")
    private var lang: String? = null
    private var main: JSONObject? = null
    private var en: JSONObject? = null

    private fun load(context: Context, l: String): JSONObject? = runCatching {
        JSONObject(context.assets.open("cards/$l.json").bufferedReader().use { it.readText() })
    }.getOrNull()

    @Synchronized
    private fun ensure(context: Context) {
        val l = Locale.getDefault().language.let { if (it in LANGS) it else "en" }
        if (l == lang) return
        lang = l
        en = load(context, "en")
        main = if (l == "en") en else load(context, l)
    }

    /** Поле карточки: строка для текстовых полей, шаги для steps. Пусто — поля нет. */
    fun field(context: Context, card: String, field: String): List<String> {
        ensure(context)
        for (src in listOf(main, en)) {
            val c = src?.optJSONObject(card) ?: continue
            if (!c.has(field)) continue
            val arr = c.optJSONArray(field)
            return if (arr != null) List(arr.length()) { arr.getString(it) } else listOf(c.getString(field))
        }
        return emptyList()
    }
}

/** Карточка позы: как войти, польза, на что обратить внимание, как облегчить, совет, кому нельзя. Нет карточки — ничего. */
@Composable
fun PoseCardView(asanaId: String, modifier: Modifier = Modifier) {
    val card = PoseCards.cardFor(asanaId) ?: return
    val context = LocalContext.current
    val labels = listOf(R.string.card_steps, R.string.card_works, R.string.card_watch, R.string.card_easier, R.string.card_tip, R.string.card_avoid)
    val data = remember(card) { PoseCards.FIELDS.map { CardText.field(context, card, it) } }
    Column(modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(6.dp)) {
        PoseCards.FIELDS.forEachIndexed { i, f ->
            val v = data[i]
            if (v.isEmpty()) return@forEachIndexed
            Text(
                stringResource(labels[i]),
                color = if (f == "avoid") MudryaColors.Saffron else MudryaColors.Moon,
                fontSize = 12.sp,
                fontWeight = FontWeight.Bold,
            )
            if (f == "steps") {
                v.forEachIndexed { n, s ->
                    Row {
                        Text("${n + 1}.", color = MudryaColors.Saffron, fontSize = 14.sp, lineHeight = 19.sp, modifier = Modifier.width(22.dp))
                        Text(s, color = MudryaColors.Text, fontSize = 14.sp, lineHeight = 19.sp)
                    }
                }
            } else {
                Text(v.first(), color = MudryaColors.Text, fontSize = 14.sp, lineHeight = 19.sp)
            }
        }
    }
}
