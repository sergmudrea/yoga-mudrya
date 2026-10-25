package ru.mudrya.yoga

import android.app.Application
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.distinctUntilChanged
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.launch
import ru.mudrya.yoga.catalog.SuryaCatalog
import ru.mudrya.yoga.data.AppContainer
import ru.mudrya.yoga.data.ReminderScheduler

class MudryaApp : Application() {
    lateinit var container: AppContainer
        private set

    override fun onCreate() {
        super.onCreate()
        container = AppContainer(this)
        ReminderScheduler.ensureChannel(this)
        // Каталог (2000+ поз с нагрузками и заменами) собирается заранее, не на главном потоке.
        CoroutineScope(Dispatchers.Default).launch { SuryaCatalog.catalog }
        // Любое изменение настроек напоминания сразу переставляет будильник.
        appScope.launch {
            container.users.state.map { it.reminder }.distinctUntilChanged().collect { container.reminders.schedule(it) }
        }
    }

    private val appScope = CoroutineScope(SupervisorJob() + Dispatchers.Main.immediate)
}
