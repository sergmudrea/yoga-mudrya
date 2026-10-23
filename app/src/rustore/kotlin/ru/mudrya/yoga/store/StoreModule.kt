package ru.mudrya.yoga.store

import android.app.Activity

/** Реализации для сборки RuStore. RuStore Pay, Review и Update SDK подключаются на этапе 5. */
object StoreModule {

    val billing: BillingGateway by lazy {
        FakeBillingGateway(manageUrl = "https://www.rustore.ru/")
    }

    val services: StoreServices = object : StoreServices {
        override val storeName = "RuStore"
        override fun requestReview(activity: Activity) = Unit
        override fun checkForUpdate(activity: Activity) = Unit
    }
}
