package ru.mudrya.yoga.ui.common

import android.annotation.SuppressLint
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.engine.PoseCards
import ru.mudrya.yoga.ui.theme.MudryaColors

/** Карточка позы: что работает, на что обратить внимание, как упростить, кому нельзя. Нет карточки — ничего. */
@SuppressLint("DiscouragedApi")
@Composable
fun PoseCardView(asanaId: String, modifier: Modifier = Modifier) {
    val card = PoseCards.cardFor(asanaId) ?: return
    val context = LocalContext.current
    val labels = listOf(R.string.card_works, R.string.card_watch, R.string.card_easier, R.string.card_avoid)
    Column(modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(6.dp)) {
        PoseCards.FIELDS.forEachIndexed { i, f ->
            val res = context.resources.getIdentifier("card_${card}_$f", "string", context.packageName)
            if (res == 0) return@forEachIndexed
            Text(
                stringResource(labels[i]),
                color = if (f == "avoid") MudryaColors.Saffron else MudryaColors.Moon,
                fontSize = 12.sp,
                fontWeight = FontWeight.Bold,
            )
            Text(stringResource(res), color = MudryaColors.Text, fontSize = 14.sp, lineHeight = 19.sp)
        }
    }
}
