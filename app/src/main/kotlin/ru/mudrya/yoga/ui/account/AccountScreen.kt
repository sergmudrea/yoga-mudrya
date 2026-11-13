package ru.mudrya.yoga.ui.account

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import ru.mudrya.yoga.R
import ru.mudrya.yoga.data.AccountRepository
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.AccountError
import ru.mudrya.yoga.engine.AccountException
import ru.mudrya.yoga.engine.Accounts
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.Chip
import ru.mudrya.yoga.ui.common.ChipRow
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.theme.MudryaColors

/**
 * Аккаунт: создать, войти, выйти, удалить. У каждого аккаунта свой прогресс на этом устройстве;
 * при регистрации текущий прогресс переносится в аккаунт, при удалении стирается вместе с ним.
 */
@Composable
fun AccountScreen(accounts: AccountRepository, users: UserRepository, onBack: () -> Unit) {
    BackHandler(onBack = onBack)
    val current by accounts.current.collectAsStateWithLifecycle()
    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        ScreenTitle(stringResource(R.string.account_title))
        val a = current
        if (a == null) SignIn(accounts, users) else SignedIn(a.name, a.email, accounts, users)
        Body(stringResource(R.string.account_local_note))
        TextAction(stringResource(R.string.back), onBack)
    }
}

@Composable
private fun SignIn(accounts: AccountRepository, users: UserRepository) {
    var register by rememberSaveable { mutableStateOf(false) }
    var email by rememberSaveable { mutableStateOf("") }
    var name by rememberSaveable { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var error by remember { mutableStateOf<AccountError?>(null) }
    Card {
        ChipRow {
            Chip(stringResource(R.string.account_login), !register, { register = false; error = null })
            Chip(stringResource(R.string.account_register), register, { register = true; error = null })
        }
        Field(email, { email = it }, stringResource(R.string.account_email), KeyboardType.Email)
        if (register) Field(name, { name = it }, stringResource(R.string.account_name), KeyboardType.Text)
        Field(password, { password = it }, stringResource(R.string.account_password, Accounts.MIN_PASSWORD), KeyboardType.Password, secret = true)
        error?.let { Text(errorText(it), color = MudryaColors.Saffron, fontSize = 14.sp) }
        if (register) Body(stringResource(R.string.account_register_hint))
        PrimaryButton(stringResource(if (register) R.string.account_register_do else R.string.account_login_do), {
            val r = if (register) accounts.register(email, name, password, users) else accounts.login(email, password, users)
            error = (r.exceptionOrNull() as? AccountException)?.error
            if (r.isSuccess) password = ""
        })
    }
}

@Composable
private fun SignedIn(name: String, email: String, accounts: AccountRepository, users: UserRepository) {
    var deleting by remember { mutableStateOf(false) }
    var password by remember { mutableStateOf("") }
    var wrong by remember { mutableIntStateOf(0) }
    Card {
        Text(name, color = MudryaColors.Text, fontSize = 20.sp, fontWeight = FontWeight.Bold)
        Text(email, color = MudryaColors.TextMuted, fontSize = 14.sp)
        PrimaryButton(stringResource(R.string.account_logout), { accounts.logout(users) }, color = MudryaColors.Border, contentColor = MudryaColors.Text)
        TextAction(stringResource(R.string.account_delete), { deleting = true })
    }
    if (deleting) {
        AlertDialog(
            onDismissRequest = { deleting = false },
            title = { Text(stringResource(R.string.account_delete_title)) },
            text = {
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Text(stringResource(R.string.account_delete_text))
                    Field(password, { password = it }, stringResource(R.string.account_password, Accounts.MIN_PASSWORD), KeyboardType.Password, secret = true)
                    if (wrong > 0) Text(errorText(AccountError.WRONG_PASSWORD), color = MudryaColors.Saffron)
                }
            },
            confirmButton = {
                TextButton(onClick = {
                    if (accounts.delete(password, users).isSuccess) {
                        deleting = false
                        password = ""
                    } else {
                        wrong++
                    }
                }) { Text(stringResource(R.string.account_delete_confirm)) }
            },
            dismissButton = { TextButton(onClick = { deleting = false }) { Text(stringResource(R.string.close)) } },
        )
    }
}

@Composable
private fun Field(value: String, onChange: (String) -> Unit, label: String, type: KeyboardType, secret: Boolean = false) {
    OutlinedTextField(
        value = value,
        onValueChange = onChange,
        singleLine = true,
        label = { Text(label) },
        keyboardOptions = KeyboardOptions(keyboardType = type),
        visualTransformation = if (secret) PasswordVisualTransformation() else androidx.compose.ui.text.input.VisualTransformation.None,
        modifier = Modifier.fillMaxWidth(),
        colors = OutlinedTextFieldDefaults.colors(
            focusedTextColor = MudryaColors.Text,
            unfocusedTextColor = MudryaColors.Text,
            focusedBorderColor = MudryaColors.Saffron,
            unfocusedBorderColor = MudryaColors.Border,
            focusedLabelColor = MudryaColors.Saffron,
            unfocusedLabelColor = MudryaColors.TextMuted,
        ),
    )
}

@Composable
private fun errorText(e: AccountError): String = when (e) {
    AccountError.BAD_EMAIL -> stringResource(R.string.account_err_email)
    AccountError.SHORT_PASSWORD -> stringResource(R.string.account_err_short, Accounts.MIN_PASSWORD)
    AccountError.EXISTS -> stringResource(R.string.account_err_exists)
    AccountError.NOT_FOUND -> stringResource(R.string.account_err_not_found)
    AccountError.WRONG_PASSWORD -> stringResource(R.string.account_err_wrong)
}
