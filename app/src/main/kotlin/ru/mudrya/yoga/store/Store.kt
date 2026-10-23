package ru.mudrya.yoga.store

import android.app.Activity
import android.content.Intent
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

/** Права пользователя на премиум-контент. */
sealed interface Entitlement {
    data object Free : Entitlement
    data class Trial(val untilEpochMs: Long) : Entitlement
    data class Premium(val renewsAtEpochMs: Long?) : Entitlement
    data object Lifetime : Entitlement
}

fun Entitlement.isPremium(nowEpochMs: Long): Boolean = when (this) {
    Entitlement.Free -> false
    is Entitlement.Trial -> nowEpochMs < untilEpochMs
    is Entitlement.Premium -> renewsAtEpochMs == null || nowEpochMs < renewsAtEpochMs
    Entitlement.Lifetime -> true
}

/** ID тарифов одинаковые в Google Play и RuStore. */
object ProductIds {
    const val MONTHLY = "premium_monthly"
    const val YEARLY = "premium_yearly"
    const val LIFETIME = "premium_lifetime"
    val all = listOf(MONTHLY, YEARLY, LIFETIME)
}

data class ProductOffer(
    val id: String,
    val title: String,
    /** Цена, отформатированная магазином, например «399 ₽». */
    val price: String,
    val trialDays: Int,
    val isSubscription: Boolean,
)

sealed interface PurchaseResult {
    data class Success(val entitlement: Entitlement) : PurchaseResult
    data object Cancelled : PurchaseResult
    data class Error(val message: String) : PurchaseResult
}

/** Оплата. Реализация своя в каждой сборке: Google Play Billing или RuStore. */
interface BillingGateway {
    val entitlement: StateFlow<Entitlement>
    suspend fun products(): List<ProductOffer>
    suspend fun purchase(activity: Activity, productId: String): PurchaseResult
    suspend fun restore(): Entitlement

    /** Экран управления подписками магазина — для кнопки «Отменить подписку». */
    fun manageSubscriptionsIntent(): Intent
}

/** Отзыв и обновления через SDK магазина. */
interface StoreServices {
    val storeName: String
    fun requestReview(activity: Activity)
    fun checkForUpdate(activity: Activity)
}

/**
 * Заглушка оплаты до подключения SDK магазинов (этап 5).
 * Покупка сразу выдаёт право, чтобы можно было пройти весь путь пользователя.
 */
class FakeBillingGateway(
    private val manageUrl: String,
    private val clock: () -> Long = System::currentTimeMillis,
) : BillingGateway {

    private val state = MutableStateFlow<Entitlement>(Entitlement.Free)
    override val entitlement: StateFlow<Entitlement> = state.asStateFlow()

    override suspend fun products(): List<ProductOffer> = listOf(
        ProductOffer(ProductIds.MONTHLY, "Месяц", "[ЦЕНА]", trialDays = 7, isSubscription = true),
        ProductOffer(ProductIds.YEARLY, "Год", "[ЦЕНА]", trialDays = 7, isSubscription = true),
        ProductOffer(ProductIds.LIFETIME, "Навсегда", "[ЦЕНА]", trialDays = 0, isSubscription = false),
    )

    override suspend fun purchase(activity: Activity, productId: String): PurchaseResult {
        val e = grant(productId) ?: return PurchaseResult.Error("Unknown product $productId")
        return PurchaseResult.Success(e)
    }

    /** Логика выдачи права — вынесена отдельно, чтобы тестировать без Activity. */
    fun grant(productId: String): Entitlement? {
        val e = when (productId) {
            ProductIds.LIFETIME -> Entitlement.Lifetime
            ProductIds.MONTHLY, ProductIds.YEARLY -> Entitlement.Trial(clock() + TRIAL_MS)
            else -> return null
        }
        state.value = e
        return e
    }

    override suspend fun restore(): Entitlement = state.value

    override fun manageSubscriptionsIntent(): Intent =
        Intent(Intent.ACTION_VIEW, android.net.Uri.parse(manageUrl))

    companion object {
        const val TRIAL_MS = 7L * 24 * 60 * 60 * 1000
    }
}
