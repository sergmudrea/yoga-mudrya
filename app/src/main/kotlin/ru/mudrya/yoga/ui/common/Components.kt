package ru.mudrya.yoga.ui.common

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.MudryaApp
import ru.mudrya.yoga.data.AppContainer
import ru.mudrya.yoga.ui.theme.MudryaColors

@Composable
fun appContainer(): AppContainer = (LocalContext.current.applicationContext as MudryaApp).container

@Composable
fun ScreenTitle(text: String, modifier: Modifier = Modifier) {
    Text(text, color = MudryaColors.Text, fontSize = 26.sp, fontWeight = FontWeight.Bold, modifier = modifier)
}

@Composable
fun SectionLabel(text: String, modifier: Modifier = Modifier) {
    Text(
        text.uppercase(),
        color = MudryaColors.TextMuted,
        fontSize = 12.sp,
        fontWeight = FontWeight.Bold,
        letterSpacing = 1.sp,
        modifier = modifier,
    )
}

@Composable
fun Body(text: String, modifier: Modifier = Modifier, color: Color = MudryaColors.TextMuted) {
    Text(text, color = color, fontSize = 15.sp, lineHeight = 21.sp, modifier = modifier)
}

@Composable
fun PrimaryButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    color: Color = MudryaColors.Saffron,
    contentColor: Color = MudryaColors.Ground,
) {
    Button(
        onClick = onClick,
        enabled = enabled,
        colors = ButtonDefaults.buttonColors(
            containerColor = color,
            contentColor = contentColor,
            disabledContainerColor = MudryaColors.Border,
            disabledContentColor = MudryaColors.TextMuted,
        ),
        shape = RoundedCornerShape(16.dp),
        modifier = modifier
            .fillMaxWidth()
            .height(52.dp),
    ) { Text(text, fontWeight = FontWeight.Bold, fontSize = 16.sp) }
}

@Composable
fun TextAction(text: String, onClick: () -> Unit, modifier: Modifier = Modifier) {
    Text(
        text,
        color = MudryaColors.TextMuted,
        fontSize = 15.sp,
        textAlign = TextAlign.Center,
        modifier = modifier
            .fillMaxWidth()
            .clickable(onClick = onClick)
            .padding(vertical = 12.dp),
    )
}

/** Карточка-вариант: заголовок, пояснение, отметка выбора. */
@Composable
fun ChoiceCard(title: String, subtitle: String?, selected: Boolean, onClick: () -> Unit, modifier: Modifier = Modifier) {
    Row(
        modifier
            .fillMaxWidth()
            .background(if (selected) MudryaColors.SaffronDeep else MudryaColors.Surface, RoundedCornerShape(16.dp))
            .border(1.5.dp, if (selected) MudryaColors.Saffron else MudryaColors.Border, RoundedCornerShape(16.dp))
            .clickable(onClick = onClick)
            .padding(16.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Column(Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(2.dp)) {
            Text(title, color = MudryaColors.Text, fontSize = 16.sp, fontWeight = FontWeight.Bold)
            subtitle?.let { Text(it, color = MudryaColors.TextMuted, fontSize = 13.sp, lineHeight = 18.sp) }
        }
        Box(
            Modifier
                .padding(start = 12.dp)
                .size(20.dp)
                .border(2.dp, if (selected) MudryaColors.Saffron else MudryaColors.Border, CircleShape)
                .padding(4.dp)
                .background(if (selected) MudryaColors.Saffron else Color.Transparent, CircleShape),
        )
    }
}

@Composable
fun Chip(text: String, selected: Boolean, onClick: () -> Unit, modifier: Modifier = Modifier, accent: Color = MudryaColors.Saffron) {
    Text(
        text,
        color = if (selected) MudryaColors.Ground else MudryaColors.Text,
        fontSize = 14.sp,
        fontWeight = if (selected) FontWeight.Bold else FontWeight.Normal,
        modifier = modifier
            .background(if (selected) accent else MudryaColors.Surface, RoundedCornerShape(20.dp))
            .border(1.dp, if (selected) accent else MudryaColors.Border, RoundedCornerShape(20.dp))
            .clickable(onClick = onClick)
            .padding(horizontal = 14.dp, vertical = 9.dp),
    )
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun ChipRow(content: @Composable () -> Unit) {
    FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) { content() }
}

/** Число с кнопками. [big] — второй шаг (±5) для длинных шкал. */
@Composable
fun Stepper(
    value: String,
    onMinus: () -> Unit,
    onPlus: () -> Unit,
    modifier: Modifier = Modifier,
    onBigMinus: (() -> Unit)? = null,
    onBigPlus: (() -> Unit)? = null,
    bigLabel: String = "5",
) {
    Row(modifier, verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) {
        onBigMinus?.let { StepButton("−$bigLabel", it) }
        StepButton("−", onMinus)
        Text(
            value,
            color = MudryaColors.Text,
            fontSize = 26.sp,
            fontWeight = FontWeight.Bold,
            textAlign = TextAlign.Center,
            modifier = Modifier.widthIn(min = 72.dp),
        )
        StepButton("+", onPlus)
        onBigPlus?.let { StepButton("+$bigLabel", it) }
    }
}

@Composable
private fun StepButton(label: String, onClick: () -> Unit) {
    Box(
        Modifier
            .size(44.dp)
            .background(MudryaColors.Surface, CircleShape)
            .border(1.dp, MudryaColors.Border, CircleShape)
            .clickable(onClick = onClick),
        contentAlignment = Alignment.Center,
    ) { Text(label, color = MudryaColors.Text, fontSize = if (label.length > 1) 13.sp else 20.sp, fontWeight = FontWeight.Bold) }
}

@Composable
fun Card(modifier: Modifier = Modifier, color: Color = MudryaColors.Surface, content: @Composable () -> Unit) {
    Column(
        modifier
            .fillMaxWidth()
            .background(color, RoundedCornerShape(20.dp))
            .padding(18.dp),
        verticalArrangement = Arrangement.spacedBy(10.dp),
    ) { content() }
}
