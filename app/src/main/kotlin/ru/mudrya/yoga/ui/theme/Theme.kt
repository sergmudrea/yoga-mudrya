package ru.mudrya.yoga.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Typography
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

/** Палитра из прототипа: тёмная основа, шафран — Сурья, голубой — Чандра и отдых. */
object MudryaColors {
    val Ground = Color(0xFF0F1115)
    val Surface = Color(0xFF191C22)
    val SurfaceHigh = Color(0xFF14171C)
    val Border = Color(0xFF2A2E37)
    val Text = Color(0xFFF3F1EC)
    val TextMuted = Color(0xFFA3A7B0)
    val Saffron = Color(0xFFF2A93B)
    val SaffronDeep = Color(0xFF2A2216)
    val Moon = Color(0xFF8FB3FF)
    val MoonDeep = Color(0xFF1E2A40)
}

private val scheme = darkColorScheme(
    primary = MudryaColors.Saffron,
    onPrimary = MudryaColors.Ground,
    secondary = MudryaColors.Moon,
    onSecondary = MudryaColors.Ground,
    background = MudryaColors.Ground,
    onBackground = MudryaColors.Text,
    surface = MudryaColors.Surface,
    onSurface = MudryaColors.Text,
    surfaceVariant = MudryaColors.SurfaceHigh,
    onSurfaceVariant = MudryaColors.TextMuted,
    outline = MudryaColors.Border,
)

@Composable
fun MudryaTheme(content: @Composable () -> Unit) {
    MaterialTheme(colorScheme = scheme, typography = Typography(), content = content)
}
