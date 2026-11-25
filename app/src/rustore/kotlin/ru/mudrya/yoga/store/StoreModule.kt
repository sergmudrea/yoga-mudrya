package ru.mudrya.yoga.store

import android.app.Activity
import android.content.Context
import android.content.Intent
import ru.rustore.sdk.pay.RuStorePayClient
import ru.rustore.sdk.pay.model.SdkTheme

/** Реализации для сборки RuStore. */
object StoreModule {

    @Suppress("UNUSED_PARAMETER")
    fun billing(context: Context): BillingGateway = RuStorePayGateway()

    /** Оплата в RuStore возвращается в приложение по deeplink — его нужно передать SDK. */
    fun onNewIntent(activity: Activity, intent: Intent?) {
        try {
            RuStorePayClient.instance.getIntentInteractor().proceedIntent(intent, SdkTheme.DARK)
        } catch (_: RuntimeException) {
            // SDK не инициализирован (нет ID приложения из консоли) — оплата просто недоступна.
        }
    }

    val services: StoreServices = object : StoreServices {
        override val storeName = "RuStore"
        override fun requestReview(activity: Activity) = Unit
        override fun checkForUpdate(activity: Activity) = Unit
    }
}
