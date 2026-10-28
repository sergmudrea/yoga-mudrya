package ru.mudrya.yoga.store

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.net.Uri
import com.android.billingclient.api.AcknowledgePurchaseParams
import com.android.billingclient.api.BillingClient
import com.android.billingclient.api.BillingClientStateListener
import com.android.billingclient.api.BillingFlowParams
import com.android.billingclient.api.BillingResult
import com.android.billingclient.api.PendingPurchasesParams
import com.android.billingclient.api.ProductDetails
import com.android.billingclient.api.Purchase
import com.android.billingclient.api.QueryProductDetailsParams
import com.android.billingclient.api.QueryPurchasesParams
import com.android.billingclient.api.acknowledgePurchase
import com.android.billingclient.api.queryProductDetails
import com.android.billingclient.api.queryPurchasesAsync
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock

/**
 * Google Play Billing 8. Права считаются локально по покупкам из Play;
 * серверная проверка — в v1 (см. ТЗ, раздел 3).
 */
class PlayBillingGateway(context: Context) : BillingGateway {

    private val state = MutableStateFlow<Entitlement>(Entitlement.Free)
    override val entitlement: StateFlow<Entitlement> = state.asStateFlow()

    private var pendingPurchase: CompletableDeferred<PurchaseResult>? = null
    private val details = mutableMapOf<String, ProductDetails>()
    private val connectLock = Mutex()

    private val client: BillingClient = BillingClient.newBuilder(context.applicationContext)
        .setListener { result, purchases -> onPurchasesUpdated(result, purchases) }
        .enablePendingPurchases(PendingPurchasesParams.newBuilder().enableOneTimeProducts().build())
        .enableAutoServiceReconnection()
        .build()

    private suspend fun connect(): Boolean = connectLock.withLock {
        if (client.isReady) return true
        val done = CompletableDeferred<Boolean>()
        client.startConnection(object : BillingClientStateListener {
            override fun onBillingSetupFinished(result: BillingResult) {
                done.complete(result.responseCode == BillingClient.BillingResponseCode.OK)
            }

            override fun onBillingServiceDisconnected() {
                done.complete(false)
            }
        })
        done.await()
    }

    override suspend fun products(): List<ProductOffer> {
        if (!connect()) return emptyList()
        val subs = query(listOf(ProductIds.MONTHLY, ProductIds.YEARLY), BillingClient.ProductType.SUBS)
        val inapp = query(listOf(ProductIds.LIFETIME), BillingClient.ProductType.INAPP)
        return (subs + inapp).mapNotNull { d ->
            details[d.productId] = d
            if (d.productType == BillingClient.ProductType.SUBS) {
                val offer = d.subscriptionOfferDetails?.firstOrNull() ?: return@mapNotNull null
                val phases = offer.pricingPhases.pricingPhaseList
                val trial = phases.firstOrNull { it.priceAmountMicros == 0L }
                ProductOffer(
                    id = d.productId,
                    title = d.name,
                    price = phases.last().formattedPrice,
                    trialDays = trial?.let { trialDays(it.billingPeriod) } ?: 0,
                    isSubscription = true,
                )
            } else {
                val p = d.oneTimePurchaseOfferDetails ?: return@mapNotNull null
                ProductOffer(d.productId, d.name, p.formattedPrice, trialDays = 0, isSubscription = false)
            }
        }
    }

    private suspend fun query(ids: List<String>, type: String): List<ProductDetails> {
        val params = QueryProductDetailsParams.newBuilder()
            .setProductList(ids.map { QueryProductDetailsParams.Product.newBuilder().setProductId(it).setProductType(type).build() })
            .build()
        return client.queryProductDetails(params).productDetailsList.orEmpty()
    }

    override suspend fun purchase(activity: Activity, productId: String): PurchaseResult {
        if (!connect()) return PurchaseResult.Error("Google Play недоступен")
        if (details.isEmpty()) products()
        val d = details[productId] ?: return PurchaseResult.Error("Тариф $productId не найден")
        val product = BillingFlowParams.ProductDetailsParams.newBuilder().setProductDetails(d).apply {
            d.subscriptionOfferDetails?.firstOrNull()?.let { setOfferToken(it.offerToken) }
        }.build()
        val wait = CompletableDeferred<PurchaseResult>()
        pendingPurchase = wait
        val launch = client.launchBillingFlow(activity, BillingFlowParams.newBuilder().setProductDetailsParamsList(listOf(product)).build())
        if (launch.responseCode != BillingClient.BillingResponseCode.OK) {
            pendingPurchase = null
            return PurchaseResult.Error(launch.debugMessage)
        }
        return wait.await()
    }

    private fun onPurchasesUpdated(result: BillingResult, purchases: List<Purchase>?) {
        val wait = pendingPurchase
        pendingPurchase = null
        when (result.responseCode) {
            BillingClient.BillingResponseCode.OK -> {
                val e = entitlementOf(purchases.orEmpty())
                state.value = e
                wait?.complete(PurchaseResult.Success(e))
            }
            BillingClient.BillingResponseCode.USER_CANCELED -> wait?.complete(PurchaseResult.Cancelled)
            else -> wait?.complete(PurchaseResult.Error(result.debugMessage))
        }
    }

    override suspend fun restore(): Entitlement {
        if (!connect()) return state.value
        val all = listOf(BillingClient.ProductType.SUBS, BillingClient.ProductType.INAPP).flatMap { type ->
            client.queryPurchasesAsync(QueryPurchasesParams.newBuilder().setProductType(type).build()).purchasesList
        }
        // Неподтверждённая покупка отменяется магазином через 3 дня — подтверждаем сразу.
        all.filter { it.purchaseState == Purchase.PurchaseState.PURCHASED && !it.isAcknowledged }.forEach {
            client.acknowledgePurchase(AcknowledgePurchaseParams.newBuilder().setPurchaseToken(it.purchaseToken).build())
        }
        return entitlementOf(all).also { state.value = it }
    }

    private fun entitlementOf(purchases: List<Purchase>): Entitlement {
        val bought = purchases.filter { it.purchaseState == Purchase.PurchaseState.PURCHASED }.flatMap { it.products }.toSet()
        return when {
            ProductIds.LIFETIME in bought -> Entitlement.Lifetime
            bought.any { it == ProductIds.MONTHLY || it == ProductIds.YEARLY } -> Entitlement.Premium(renewsAtEpochMs = null)
            else -> Entitlement.Free
        }
    }

    override fun manageSubscriptionsIntent(): Intent =
        Intent(Intent.ACTION_VIEW, Uri.parse("https://play.google.com/store/account/subscriptions?package=ru.mudrya.yoga"))

    private companion object {
        /** ISO 8601: P7D, P1W, P1M. */
        fun trialDays(period: String): Int {
            val n = period.drop(1).dropLast(1).toIntOrNull() ?: return 0
            return when (period.lastOrNull()) {
                'D' -> n
                'W' -> n * 7
                'M' -> n * 30
                else -> 0
            }
        }
    }
}
