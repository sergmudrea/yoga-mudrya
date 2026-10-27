package ru.mudrya.yoga.ui.builder

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import ru.mudrya.yoga.R
import ru.mudrya.yoga.model.Asana
import ru.mudrya.yoga.model.FigureRef
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.common.english
import ru.mudrya.yoga.ui.common.shownDescription
import ru.mudrya.yoga.ui.player.Figure3D
import ru.mudrya.yoga.ui.theme.MudryaColors

/** Название позы на языке интерфейса. */
fun Asana.shownName(): String = if (english) ru.mudrya.yoga.ui.common.tr(nameEn) else nameRu

/** Поза на марионетке с описанием — доступна и без премиума. */
@Composable
fun PosePreview(asana: Asana, onAdd: (() -> Unit)?, onClose: () -> Unit) {
    Dialog(onDismissRequest = onClose) {
        Column(
            Modifier
                .fillMaxWidth()
                .background(MudryaColors.Surface, RoundedCornerShape(20.dp))
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
        ) {
            Text(asana.shownName(), color = MudryaColors.Text, fontSize = 20.sp, fontWeight = FontWeight.Bold)
            asana.sanskrit?.let { Text(it, color = MudryaColors.TextMuted, fontSize = 14.sp) }
            Figure3D(
                asana.figure ?: FigureRef("tad"),
                0,
                asana.shownName(),
                Modifier.fillMaxWidth().height(300.dp),
                placeholder = { PoseThumb(asana.id, 300.dp, Modifier.fillMaxWidth()) },
            )
            Column(Modifier.height(120.dp).verticalScroll(rememberScrollState())) {
                Text(asana.shownDescription() ?: asana.cuesRu.firstOrNull().orEmpty(), color = MudryaColors.TextMuted, fontSize = 14.sp)
            }
            onAdd?.let { PrimaryButton(stringResource(R.string.builder_add_to_set), it) }
            TextAction(stringResource(R.string.close), onClose)
        }
    }
}
