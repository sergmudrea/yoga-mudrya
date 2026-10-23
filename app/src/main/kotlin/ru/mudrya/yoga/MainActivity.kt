package ru.mudrya.yoga

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import ru.mudrya.yoga.ui.AppRoot
import ru.mudrya.yoga.ui.theme.MudryaTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            MudryaTheme { AppRoot() }
        }
    }
}
