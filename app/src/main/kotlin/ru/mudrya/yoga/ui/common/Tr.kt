package ru.mudrya.yoga.ui.common

import android.content.Context
import org.json.JSONObject
import java.util.Locale

/**
 * Перевод содержимого каталога (названия поз и сетов, шаги, подсказки, описания) на языки интерфейса,
 * кроме русского и английского. Ключ — английский текст каталога, перевод — в assets/i18n/<язык>.json.
 * Чего нет в словаре, показывается по-английски.
 */
object Tr {

    /** Языки со словарём каталога. */
    val LANGUAGES = setOf("de", "fr", "es", "it", "pt")

    private var map: Map<String, String> = emptyMap()

    fun init(context: Context) {
        val lang = Locale.getDefault().language
        if (lang !in LANGUAGES) return
        map = runCatching {
            val o = JSONObject(context.assets.open("i18n/$lang.json").bufferedReader().use { it.readText() })
            o.keys().asSequence().associateWith { o.getString(it) }
        }.getOrDefault(emptyMap())
    }

    fun t(en: String): String = map[en] ?: en
}

/** Английский текст каталога на языке интерфейса. */
fun tr(en: String): String = Tr.t(en)
