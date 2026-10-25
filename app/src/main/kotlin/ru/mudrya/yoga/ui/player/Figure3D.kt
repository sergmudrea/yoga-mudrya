package ru.mudrya.yoga.ui.player

import android.annotation.SuppressLint
import android.graphics.Color as AndroidColor
import android.os.Handler
import android.os.Looper
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.viewinterop.AndroidView
import androidx.webkit.WebViewAssetLoader
import kotlinx.coroutines.delay
import ru.mudrya.yoga.model.FigureRef

/** Адрес эмулятора: ассеты отдаются через WebViewAssetLoader, чтобы работали ES-модули. */
private const val EMULATOR_URL = "https://appassets.androidplatform.net/assets/emulator/index.html"

/** Если марионетка не ответила за это время (нет WebGL), показываем схему. */
private const val READY_TIMEOUT_MS = 10_000L

/** id позы атласа — только латиница, цифры и подчёркивание; иначе в JS не передаём. */
private val SAFE_ID = Regex("^[A-Za-z0-9_]+$")

/**
 * Объёмная марионетка из «Атласа нулевого цикла» — тот же эмулятор, что на странице атласа:
 * суставы в анатомических пределах, плавный переход из предыдущей позы, опорные ладони и стопы
 * не скользят. Фигуру можно поворачивать пальцем. Работает без сети: three.js лежит в ассетах.
 *
 * [transitionMs] — сколько длится переход в новую позу (фазы движения шага).
 * [onUnavailable] — WebGL недоступен: экран переключится на плоскую схему.
 */
@SuppressLint("SetJavaScriptEnabled")
@Composable
fun Figure3D(
    target: FigureRef,
    transitionMs: Long,
    description: String,
    modifier: Modifier = Modifier,
    onUnavailable: () -> Unit = {},
) {
    val context = LocalContext.current
    var ready by remember { mutableStateOf(false) }
    val failed by rememberUpdatedState(onUnavailable)
    val main = remember { Handler(Looper.getMainLooper()) }
    val webView = remember {
        val loader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(context))
            .build()
        WebView(context).apply {
            setBackgroundColor(AndroidColor.parseColor("#0F1115"))
            settings.javaScriptEnabled = true
            settings.allowFileAccess = false
            settings.allowContentAccess = false
            webViewClient = object : WebViewClient() {
                override fun shouldInterceptRequest(view: WebView, request: WebResourceRequest): WebResourceResponse? =
                    loader.shouldInterceptRequest(request.url)
            }
            addJavascriptInterface(
                object {
                    @JavascriptInterface
                    fun onReady() {
                        main.post { ready = true }
                    }
                },
                "AndroidBridge",
            )
            loadUrl(EMULATOR_URL)
        }
    }
    DisposableEffect(Unit) {
        onDispose {
            webView.removeJavascriptInterface("AndroidBridge")
            webView.destroy()
        }
    }
    LaunchedEffect(Unit) {
        delay(READY_TIMEOUT_MS)
        if (!ready) failed()
    }
    LaunchedEffect(ready) {
        if (ready) webView.evaluateJavascript("Mudrya.setTheme('dark')", null)
    }
    // Первая поза — сразу, дальше — плавный переход за время движения.
    var shown by remember { mutableStateOf(false) }
    LaunchedEffect(ready, target) {
        if (!ready || !SAFE_ID.matches(target.pose)) return@LaunchedEffect
        val ms = if (shown) transitionMs.coerceIn(0, 20_000) else 0
        webView.evaluateJavascript("Mudrya.go('${target.pose}',${if (target.mirror) 1 else 0},$ms)", null)
        shown = true
    }
    AndroidView(factory = { webView }, modifier = modifier.semantics { contentDescription = description })
}
