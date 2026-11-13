package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Breath
import ru.mudrya.yoga.model.Side

/** Насколько подробно ведёт голос. */
enum class VoiceLevel {
    /** Голоса нет — только тон и вибрация. */
    OFF,

    /** Только «вдох» / «выдох». */
    BREATH,

    /** Название позы на входе и дыхание. */
    NAMES,

    /** Как NAMES и ещё подсказка к позе, если на удержании есть время её произнести. */
    FULL,
}

/** Слова, которые голос говорит сам, на языке озвучки. */
data class VoiceWords(
    val inhale: String,
    val exhale: String,
    val right: String,
    val left: String,
    val rest: String,
    val done: String,
    val round: String,
) {
    companion object {
        val RU = VoiceWords("Вдох", "Выдох", "правая сторона", "левая сторона", "Расслабьтесь лёжа", "Практика завершена. Спасибо", "Круг")
        val EN = VoiceWords("Breathe in", "Breathe out", "right side", "left side", "Lie down and relax", "Practice complete. Thank you", "Round")
        val DE = VoiceWords("Einatmen", "Ausatmen", "rechte Seite", "linke Seite", "Leg dich hin und entspanne", "Übung beendet. Danke", "Runde")
        val FR = VoiceWords("Inspirez", "Expirez", "côté droit", "côté gauche", "Allongez-vous et détendez-vous", "Pratique terminée. Merci", "Tour")
        val ES = VoiceWords("Inhala", "Exhala", "lado derecho", "lado izquierdo", "Túmbate y relájate", "Práctica terminada. Gracias", "Ronda")
        val IT = VoiceWords("Inspira", "Espira", "lato destro", "lato sinistro", "Sdraiati e rilassati", "Pratica completata. Grazie", "Giro")
        val PT = VoiceWords("Inspire", "Expire", "lado direito", "lado esquerdo", "Deite-se e relaxe", "Prática concluída. Obrigado", "Volta")
        fun of(language: String): VoiceWords = when (language) {
            "ru" -> RU
            "de" -> DE
            "fr" -> FR
            "es" -> ES
            "it" -> IT
            "pt" -> PT
            else -> EN
        }
    }
}

/**
 * Что сказать на смене фазы дыхания. Чистая функция: экран вызывает её, когда фаза сменилась,
 * и отдаёт фразу синтезатору речи.
 *
 * Правила:
 * - первая фаза позы: название (и сторона, когда она сменилась), затем «вдох» / «выдох»;
 * - остальные фазы: только «вдох» / «выдох»;
 * - FULL: на первой фазе удержания, если удержание длится хотя бы две фазы, — подсказка к позе;
 * - начало нового круга объявляется номером.
 */
object VoiceScript {

    /** Подсказки длиннее не читаем — не успеть за одну фазу. */
    private const val MAX_CUE_CHARS = 90

    fun phrase(
        step: SessionStep,
        previous: SessionStep?,
        phase: Phase,
        level: VoiceLevel,
        words: VoiceWords,
        english: Boolean = false,
        /** Перевод английских названий и подсказок на язык озвучки (не русский и не английский). */
        translate: (String) -> String = { it },
    ): String? {
        if (level == VoiceLevel.OFF) return null
        val breath = if (phase.breath == Breath.INHALE) words.inhale else words.exhale
        val firstOfStep = phase.kind == PhaseKind.ENTER && phase.index == 0
        if (level == VoiceLevel.BREATH || !firstOfStep) {
            if (level == VoiceLevel.FULL && phase.kind == PhaseKind.HOLD && phase.index == 0 && phase.count >= 2) {
                cue(step, english, translate)?.let { return "$breath. $it" }
            }
            return breath
        }
        val parts = mutableListOf<String>()
        if (previous != null && step.round != previous.round) parts += "${words.round} ${step.round}"
        if (step.side != Side.NONE && step.side != previous?.side) {
            parts += if (step.side == Side.RIGHT) words.right else words.left
        }
        parts += spoken(if (english) translate(step.title(true)) else step.title(false))
        parts += breath
        return parts.joinToString(". ")
    }

    private fun cue(step: SessionStep, english: Boolean, translate: (String) -> String): String? =
        (if (english) step.cueEn?.let(translate) else step.cueRu ?: step.asana.cuesRu.firstOrNull())?.let(::spoken)?.takeIf { it.isNotBlank() && it.length <= MAX_CUE_CHARS }

    /** Текст для синтезатора: без скобок, кавычек и лишних пробелов. */
    fun spoken(text: String): String = text
        .replace(Regex("\\([^)]*\\)"), "")
        .replace(Regex("[«»\"“”]"), "")
        .replace(Regex("\\s+"), " ")
        .trim()
        .trimEnd('.', ',', ';', ':')
}
