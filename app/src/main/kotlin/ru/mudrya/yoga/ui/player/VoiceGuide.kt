package ru.mudrya.yoga.ui.player

import android.content.Context
import android.speech.tts.TextToSpeech
import java.util.Locale

/**
 * Голосовое ведение через системный синтезатор речи. Фразы готовит VoiceScript;
 * каждая новая фраза обрывает предыдущую, чтобы голос не отставал от дыхания.
 * Если голоса для языка нет, [ready] остаётся false — тогда звучит обычный тон.
 */
class VoiceGuide(context: Context) {

    /** Язык озвучки: русский, если интерфейс русский, иначе английский. */
    val language: String = if (Locale.getDefault().language == "ru") "ru" else "en"

    @Volatile
    var ready: Boolean = false
        private set

    private var tts: TextToSpeech? = null

    init {
        tts = TextToSpeech(context.applicationContext) { status ->
            val engine = tts
            if (status == TextToSpeech.SUCCESS && engine != null) {
                val result = engine.setLanguage(Locale.forLanguageTag(language))
                ready = result != TextToSpeech.LANG_MISSING_DATA && result != TextToSpeech.LANG_NOT_SUPPORTED
                engine.setSpeechRate(SPEECH_RATE)
            }
        }
    }

    fun say(text: String) {
        if (!ready) return
        tts?.speak(text, TextToSpeech.QUEUE_FLUSH, null, text.hashCode().toString())
    }

    fun stop() {
        tts?.stop()
    }

    fun release() {
        tts?.stop()
        tts?.shutdown()
        tts = null
        ready = false
    }

    private companion object {
        /** Чуть медленнее обычного — спокойный темп практики. */
        const val SPEECH_RATE = 0.92f
    }
}
