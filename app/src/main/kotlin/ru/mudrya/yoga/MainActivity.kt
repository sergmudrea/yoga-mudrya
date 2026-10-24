package ru.mudrya.yoga

import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import ru.mudrya.yoga.store.StoreModule
import ru.mudrya.yoga.ui.AppRoot
import ru.mudrya.yoga.ui.theme.MudryaTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        if (savedInstanceState == null) StoreModule.onNewIntent(this, intent)
        setContent {
            MudryaTheme { AppRoot() }
        }
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        StoreModule.onNewIntent(this, intent)
    }
}
