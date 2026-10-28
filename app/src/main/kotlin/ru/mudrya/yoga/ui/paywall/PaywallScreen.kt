package ru.mudrya.yoga.ui.paywall

import android.app.Activity
import android.content.Context
import android.content.ContextWrapper
import androidx.activity.compose.BackHandler
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.launch
import ru.mudrya.yoga.R
import ru.mudrya.yoga.data.ReminderScheduler
import ru.mudrya.yoga.store.PremiumPolicy
import ru.mudrya.yoga.store.ProductIds
import ru.mudrya.yoga.store.ProductOffer
import ru.mudrya.yoga.store.PurchaseResult
import ru.mudrya.yoga.store.StoreModule
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.ChoiceCard
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.common.appContainer
import ru.mudrya.yoga.ui.theme.MudryaColors
import java.text.DateFormat
import java.util.Date

private fun Context.findActivity(): Activity? {
    var c: Context? = this
    while (c is ContextWrapper) {
        if (c is Activity) return c
        c = c.baseContext
    }
    return null
}

/**
 * Экран подписки. Честные правила из ТЗ: цена, период и дата первого списания видны до кнопки,
 * напоминание за 48 часов до конца пробного периода, отмена — из профиля одной кнопкой.
 */
@Composable
fun PaywallScreen(onClose: () -> Unit) {
    BackHandler(onBack = onClose)
    val container = appContainer()
    val billing = container.billing
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    var offers by remember { mutableStateOf<List<ProductOffer>?>(null) }
    var selected by remember { mutableStateOf(ProductIds.YEARLY) }
    var message by remember { mutableStateOf<String?>(null) }
    var busy by remember { mutableStateOf(false) }

    LaunchedEffect(Unit) { offers = billing.products() }

    val unavailable = stringResource(R.string.paywall_unavailable, StoreModule.services.storeName)
    val restoredNone = stringResource(R.string.paywall_restore_none)

    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        ScreenTitle(stringResource(R.string.paywall_title))
        Card {
            listOf(R.string.paywall_benefit_today, R.string.paywall_benefit_chandra, R.string.paywall_benefit_bundle, R.string.paywall_benefit_short, R.string.paywall_benefit_future).forEach {
                Text("•  " + stringResource(it), color = MudryaColors.Text, fontSize = 15.sp, lineHeight = 21.sp)
            }
            Body(stringResource(R.string.paywall_free_core))
            Body(stringResource(R.string.paywall_free_extra))
        }

        val list = offers
        when {
            list == null -> Body(stringResource(R.string.paywall_loading))
            list.isEmpty() -> Body(unavailable, color = MudryaColors.Saffron)
            else -> {
                list.forEach { o ->
                    ChoiceCard(
                        title = planTitle(o.id),
                        subtitle = planLine(o),
                        selected = selected == o.id,
                        onClick = { selected = o.id },
                    )
                }
                val offer = list.firstOrNull { it.id == selected } ?: list.first()
                if (offer.trialDays > 0) {
                    val first = DateFormat.getDateInstance(DateFormat.LONG).format(Date(PremiumPolicy.firstChargeAt(System.currentTimeMillis(), offer.trialDays)))
                    Body(stringResource(R.string.paywall_trial_terms, offer.trialDays, first, offer.price), color = MudryaColors.Text)
                }
                PrimaryButton(
                    text = if (offer.trialDays > 0) stringResource(R.string.paywall_try, offer.trialDays) else stringResource(R.string.paywall_buy, offer.price),
                    enabled = !busy,
                    onClick = {
                        val activity = context.findActivity() ?: return@PrimaryButton
                        busy = true
                        scope.launch {
                            val started = System.currentTimeMillis()
                            when (val r = billing.purchase(activity, offer.id)) {
                                is PurchaseResult.Success -> {
                                    PremiumPolicy.trialReminderAt(started, offer.trialDays)?.let {
                                        container.reminders.scheduleOnce(ReminderScheduler.KIND_TRIAL, it, ReminderScheduler.REQUEST_TRIAL)
                                    }
                                    onClose()
                                }
                                PurchaseResult.Cancelled -> Unit
                                is PurchaseResult.Error -> message = r.message
                            }
                            busy = false
                        }
                    },
                )
            }
        }
        Body(stringResource(R.string.paywall_cancel_anytime))
        TextAction(stringResource(R.string.paywall_restore), {
            scope.launch {
                val e = billing.restore()
                if (e == ru.mudrya.yoga.store.Entitlement.Free) message = restoredNone else onClose()
            }
        })
        message?.let { Body(it, color = MudryaColors.Saffron) }
        val userState by container.users.state.collectAsState()
        PromoCodeCard(userState, container.users)
        TextAction(stringResource(R.string.paywall_not_now), onClose)
        Spacer(Modifier.height(8.dp))
    }
}

@Composable
private fun planTitle(id: String): String = stringResource(
    when (id) {
        ProductIds.MONTHLY -> R.string.plan_month
        ProductIds.YEARLY -> R.string.plan_year
        else -> R.string.plan_lifetime
    },
)

@Composable
private fun planLine(o: ProductOffer): String = when (o.id) {
    ProductIds.MONTHLY -> stringResource(R.string.plan_per_month, o.price)
    ProductIds.YEARLY -> stringResource(R.string.plan_per_year, o.price)
    else -> stringResource(R.string.plan_once, o.price)
}

/** Подпись статуса подписки для профиля. */
@Composable
fun entitlementLabel(e: ru.mudrya.yoga.store.Entitlement): String = when (e) {
    ru.mudrya.yoga.store.Entitlement.Free -> stringResource(R.string.sub_free)
    is ru.mudrya.yoga.store.Entitlement.Trial -> stringResource(R.string.sub_trial, DateFormat.getDateInstance().format(Date(e.untilEpochMs)))
    is ru.mudrya.yoga.store.Entitlement.Premium -> e.renewsAtEpochMs?.let { stringResource(R.string.sub_premium_until, DateFormat.getDateInstance().format(Date(it))) }
        ?: stringResource(R.string.sub_premium)
    ru.mudrya.yoga.store.Entitlement.Lifetime -> stringResource(R.string.sub_lifetime)
}

/** Открывает управление подписками магазина; если ссылка не открылась — сайт магазина. */
fun openManageSubscriptions(context: Context, intent: android.content.Intent) {
    try {
        context.startActivity(intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK))
    } catch (_: android.content.ActivityNotFoundException) {
        val site = if (StoreModule.services.storeName == "RuStore") "https://www.rustore.ru/" else "https://play.google.com/store/account/subscriptions"
        context.startActivity(android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(site)).addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK))
    }
}
