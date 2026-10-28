package ru.mudrya.yoga.ui.player

import android.content.Context
import android.speech.tts.TextToSpeech
import java.util.Locale

/**
 * Голосовое ведение: записанный голос инструктора (RecordedVoice), а чего нет в записи —
 * системный синтезатор речи. Фразы готовит VoiceScript; каждая новая фраза обрывает предыдущую,
 * чтобы голос не отставал от дыхания. Если голоса для языка нет, [ready] остаётся false — тогда звучит тон.
 */
class VoiceGuide(context: Context) {

    /** Язык озвучки — язык интерфейса, если он поддерживается, иначе английский. */
    val language: String = Locale.getDefault().language.takeIf { it in LANGUAGES } ?: "en"

    private val recorded = RecordedVoice(context, language)

    @Volatile
    private var ttsReady: Boolean = false

    val ready: Boolean get() = ttsReady || recorded.available

    private var tts: TextToSpeech? = null

    init {
        tts = TextToSpeech(context.applicationContext) { status ->
            val engine = tts
            if (status == TextToSpeech.SUCCESS && engine != null) {
                val result = engine.setLanguage(Locale.forLanguageTag(language))
                ttsReady = result != TextToSpeech.LANG_MISSING_DATA && result != TextToSpeech.LANG_NOT_SUPPORTED
                engine.setSpeechRate(SPEECH_RATE)
            }
        }
    }

    fun say(text: String) {
        if (recorded.canSay(text)) {
            tts?.stop()
            recorded.say(text)
            return
        }
        recorded.stop()
        if (!ttsReady) return
        tts?.speak(text, TextToSpeech.QUEUE_FLUSH, null, text.hashCode().toString())
    }

    fun stop() {
        recorded.stop()
        tts?.stop()
    }

    fun release() {
        recorded.stop()
        tts?.stop()
        tts?.shutdown()
        tts = null
        ttsReady = false
    }

    private companion object {
        /** Чуть медленнее обычного — спокойный темп практики. */
        const val SPEECH_RATE = 0.92f

        /** Языки озвучки и интерфейса. */
        val LANGUAGES = setOf("ru", "en", "de", "fr", "es", "it", "pt")
    }
}
