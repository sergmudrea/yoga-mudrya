package ru.mudrya.yoga.store

import android.app.Activity
import android.content.Intent
import android.net.Uri
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.suspendCancellableCoroutine
import ru.rustore.sdk.core.tasks.Task
import ru.rustore.sdk.pay.RuStorePayClient
import ru.rustore.sdk.pay.model.ProductId
import ru.rustore.sdk.pay.model.ProductPurchase
import ru.rustore.sdk.pay.model.ProductPurchaseParams
import ru.rustore.sdk.pay.model.PreferredPurchaseType
import ru.rustore.sdk.pay.model.Purchase
import ru.rustore.sdk.pay.model.RuStorePaymentException
import ru.rustore.sdk.pay.model.SdkTheme
import ru.rustore.sdk.pay.model.SubscriptionPurchase
import kotlin.coroutines.resume

/**
 * RuStore Pay SDK. Клиент создаётся автоматически по meta-data `console_app_id_value` в манифесте сборки rustore.
 * Права считаются локально по покупкам; серверная проверка — в v1.
 */
class RuStorePayGateway : BillingGateway {

    private val state = MutableStateFlow<Entitlement>(Entitlement.Free)
    override val entitlement: StateFlow<Entitlement> = state.asStateFlow()

    private val client get() = RuStorePayClient.instance

    override suspend fun products(): List<ProductOffer> {
        val products = client.getProductInteractor().getProducts(ProductIds.all.map { ProductId(it) }).awaitOrNull() ?: return emptyList()
        return products.map { p ->
            val isSub = p.subscriptionInfo != null
            ProductOffer(
                id = p.productId.value,
                title = p.title.value,
                price = p.amountLabel.value,
                // Пробный период для подписок настраивается в консоли RuStore так же, как в Google Play.
                trialDays = if (isSub) TRIAL_DAYS else 0,
                isSubscription = isSub,
            )
        }
    }

    override suspend fun purchase(activity: Activity, productId: String): PurchaseResult = suspendCancellableCoroutine { cont ->
        client.getPurchaseInteractor()
            .purchase(ProductPurchaseParams(productId = ProductId(productId)), PreferredPurchaseType.ONE_STEP, SdkTheme.DARK, null)
            .addOnSuccessListener {
                val e = if (productId == ProductIds.LIFETIME) Entitlement.Lifetime else Entitlement.Premium(renewsAtEpochMs = null)
                state.value = e
                if (cont.isActive) cont.resume(PurchaseResult.Success(e))
            }
            .addOnFailureListener { t ->
                val r = if (t is RuStorePaymentException.ProductPurchaseCancelled) PurchaseResult.Cancelled else PurchaseResult.Error(t.message ?: "RuStore")
                if (cont.isActive) cont.resume(r)
            }
    }

    override suspend fun restore(): Entitlement {
        val purchases: List<Purchase> = client.getPurchaseInteractor().getPurchases(null, null, null).awaitOrNull() ?: return state.value
        val e = when {
            purchases.any { it is ProductPurchase && it.productId.value == ProductIds.LIFETIME && it.status.name == "CONFIRMED" } -> Entitlement.Lifetime
            purchases.any { it is SubscriptionPurchase && it.status.name == "ACTIVE" } -> {
                val until = purchases.filterIsInstance<SubscriptionPurchase>().mapNotNull { it.expirationDate?.time }.maxOrNull()
                Entitlement.Premium(renewsAtEpochMs = until)
            }
            else -> Entitlement.Free
        }
        state.value = e
        return e
    }

    /** Раздел подписок в приложении RuStore. Если RuStore не установлен, экран откроет сайт. */
    override fun manageSubscriptionsIntent(): Intent =
        Intent(Intent.ACTION_VIEW, Uri.parse("rustore://profile/subscriptions"))

    private companion object {
        const val TRIAL_DAYS = 7
    }
}

/** Задача RuStore → корутина. Ошибка превращается в null: экран покажет «магазин недоступен». */
private suspend fun <T> Task<T>.awaitOrNull(): T? = suspendCancellableCoroutine { cont ->
    addOnSuccessListener { if (cont.isActive) cont.resume(it) }
    addOnFailureListener { if (cont.isActive) cont.resume(null) }
}
