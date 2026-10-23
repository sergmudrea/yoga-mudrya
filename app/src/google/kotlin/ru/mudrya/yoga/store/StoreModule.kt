package ru.mudrya.yoga.store

import android.app.Activity

/** Реализации для сборки Google Play. SDK Play Billing и Play Core подключаются на этапе 5. */
object StoreModule {

    val billing: BillingGateway by lazy {
        FakeBillingGateway(manageUrl = "https://play.google.com/store/account/subscriptions")
    }

    val services: StoreServices = object : StoreServices {
        override val storeName = "Google Play"
        override fun requestReview(activity: Activity) = Unit
        override fun checkForUpdate(activity: Activity) = Unit
    }
}
