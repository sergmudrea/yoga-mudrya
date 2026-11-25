package ru.mudrya.yoga.ui.player

import android.content.Context
import android.media.MediaPlayer
import ru.mudrya.yoga.engine.VoiceScript

/**
 * Живой голос инструктора: записанные фразы лежат в assets/voice/<язык>/, их список —
 * в index.txt строками «файл|фраза». Фраза плеера («Собака мордой вниз. Выдох») делится по точкам;
 * если записаны все её части, они звучат подряд, иначе фразу говорит синтезатор речи.
 */
class RecordedVoice(context: Context, language: String) {

    private val assets = context.assets
    private val dir = "voice/$language"

    private val index: Map<String, String> = runCatching {
        assets.open("$dir/index.txt").bufferedReader().readLines()
            .mapNotNull { line ->
                val i = line.indexOf('|')
                if (i <= 0) null else key(line.substring(i + 1)) to line.substring(0, i).trim()
            }
            .toMap()
    }.getOrDefault(emptyMap())

    private var player: MediaPlayer? = null
    private val queue = ArrayDeque<String>()

    /** Есть ли записанный голос для этого языка. */
    val available: Boolean get() = index.isNotEmpty()

    fun canSay(text: String): Boolean = available && parts(text).let { p -> p.isNotEmpty() && p.all { key(it) in index } }

    fun say(text: String) {
        stop()
        parts(text).mapNotNullTo(queue) { index[key(it)] }
        playNext()
    }

    private fun playNext() {
        val file = queue.removeFirstOrNull() ?: return
        val mp = MediaPlayer()
        player = mp
        try {
            assets.openFd("$dir/$file").use { afd -> mp.setDataSource(afd.fileDescriptor, afd.startOffset, afd.length) }
            mp.setOnCompletionListener {
                it.release()
                if (player === it) player = null
                playNext()
            }
            mp.prepare()
            mp.start()
        } catch (_: Exception) {
            mp.release()
            if (player === mp) player = null
            playNext()
        }
    }

    fun stop() {
        queue.clear()
        player?.let { runCatching { it.stop() }; it.release() }
        player = null
    }

    companion object {
        fun key(s: String): String = VoiceScript.spoken(s).lowercase()

        fun parts(text: String): List<String> = text.split(". ").map { it.trim() }.filter { it.isNotEmpty() }
    }
}
