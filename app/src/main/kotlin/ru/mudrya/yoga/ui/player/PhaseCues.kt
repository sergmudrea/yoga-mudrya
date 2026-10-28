package ru.mudrya.yoga.ui.player

import android.content.Context
import android.media.AudioManager
import android.media.ToneGenerator
import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import ru.mudrya.yoga.model.Breath

/**
 * Сигналы смены фазы: короткий тон (вдох — выше, выдох — ниже) и лёгкая вибрация.
 * Нужны, чтобы заниматься, не глядя в экран.
 */
class PhaseCues(context: Context) {

    private val tone: ToneGenerator? = try {
        ToneGenerator(AudioManager.STREAM_MUSIC, VOLUME)
    } catch (_: RuntimeException) {
        // На некоторых устройствах генератор тонов недоступен — тогда просто без звука.
        null
    }

    private val vibrator: Vibrator? = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
        (context.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as? VibratorManager)?.defaultVibrator
    } else {
        @Suppress("DEPRECATION")
        context.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
    }

    fun onPhase(breath: Breath, sound: Boolean, vibration: Boolean) {
        if (sound) {
            tone?.startTone(if (breath == Breath.INHALE) ToneGenerator.TONE_PROP_BEEP else ToneGenerator.TONE_PROP_ACK, TONE_MS)
        }
        if (vibration && vibrator?.hasVibrator() == true) {
            vibrator.vibrate(VibrationEffect.createOneShot(if (breath == Breath.INHALE) 40L else 80L, VibrationEffect.DEFAULT_AMPLITUDE))
        }
    }

    fun release() {
        tone?.release()
    }

    private companion object {
        const val VOLUME = 60
        const val TONE_MS = 120
    }
}
