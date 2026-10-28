package ru.mudrya.yoga.ui.paywall

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.input.KeyboardCapitalization
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.PromoCodes
import ru.mudrya.yoga.engine.PromoKind
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.SectionLabel
import ru.mudrya.yoga.ui.theme.MudryaColors
import java.text.DateFormat
import java.util.Date

/** Ввод кода активации премиума: на месяц, год или навсегда. */
@Composable
fun PromoCodeCard(state: UserState, users: UserRepository) {
    var code by remember { mutableStateOf("") }
    var message by remember { mutableStateOf<String?>(null) }
    val now = System.currentTimeMillis()
    val okMonth = stringResource(R.string.promo_ok_month)
    val okYear = stringResource(R.string.promo_ok_year)
    val okLife = stringResource(R.string.promo_ok_lifetime)
    val bad = stringResource(R.string.promo_bad)
    val used = stringResource(R.string.promo_used)
    Card {
        SectionLabel(stringResource(R.string.promo_title))
        when {
            state.promoLifetime -> Body(stringResource(R.string.promo_active_lifetime), color = MudryaColors.Saffron)
            PromoCodes.active(state, now) ->
                Body(stringResource(R.string.promo_active_until, DateFormat.getDateInstance().format(Date(state.promoUntilMs ?: now))), color = MudryaColors.Saffron)
            else -> Body(stringResource(R.string.promo_hint))
        }
        OutlinedTextField(
            value = code,
            onValueChange = { code = it.uppercase().take(24); message = null },
            singleLine = true,
            placeholder = { Text("MUDRA-XXXXXX-XXXXXX", color = MudryaColors.TextMuted) },
            keyboardOptions = KeyboardOptions(capitalization = KeyboardCapitalization.Characters),
            modifier = Modifier.fillMaxWidth(),
            colors = OutlinedTextFieldDefaults.colors(
                focusedTextColor = MudryaColors.Text,
                unfocusedTextColor = MudryaColors.Text,
                focusedBorderColor = MudryaColors.Saffron,
                unfocusedBorderColor = MudryaColors.Border,
            ),
        )
        message?.let { Text(it, color = MudryaColors.Saffron, fontSize = 14.sp) }
        PrimaryButton(stringResource(R.string.promo_activate), {
            val grant = PromoCodes.verify(code)
            message = if (grant == null) {
                bad
            } else {
                val next = PromoCodes.apply(state, grant, System.currentTimeMillis())
                if (next == null) {
                    used
                } else {
                    users.update { s -> PromoCodes.apply(s, grant, System.currentTimeMillis()) ?: s }
                    code = ""
                    when (grant.kind) {
                        PromoKind.MONTH -> okMonth
                        PromoKind.YEAR -> okYear
                        PromoKind.LIFETIME -> okLife
                    }
                }
            }
        }, enabled = code.isNotBlank())
    }
}
