package ru.mudrya.yoga.store

import android.app.Activity
import android.content.Context
import android.content.Intent

/** Реализации для сборки Google Play. */
object StoreModule {

    fun billing(context: Context): BillingGateway = PlayBillingGateway(context)

    /** Возврат из оплаты не требует обработки интента в Google Play. */
    fun onNewIntent(activity: Activity, intent: Intent?) = Unit

    val services: StoreServices = object : StoreServices {
        override val storeName = "Google Play"
        override fun requestReview(activity: Activity) = Unit
        override fun checkForUpdate(activity: Activity) = Unit
    }
}
