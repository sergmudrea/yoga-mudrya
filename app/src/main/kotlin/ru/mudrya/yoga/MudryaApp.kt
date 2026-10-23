package ru.mudrya.yoga

import android.app.Application
import ru.mudrya.yoga.data.AppContainer

class MudryaApp : Application() {
    lateinit var container: AppContainer
        private set

    override fun onCreate() {
        super.onCreate()
        container = AppContainer(this)
    }
}
