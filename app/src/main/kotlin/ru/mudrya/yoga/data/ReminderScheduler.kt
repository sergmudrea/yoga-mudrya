package ru.mudrya.yoga.data

import android.annotation.SuppressLint
import android.app.AlarmManager
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.core.content.ContextCompat
import ru.mudrya.yoga.MainActivity
import ru.mudrya.yoga.MudryaApp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.engine.ReminderSettings
import ru.mudrya.yoga.engine.Reminders
import java.time.LocalDateTime
import java.time.ZoneId

/**
 * Локальные напоминания: без интернета и push-сервисов, одинаково в обеих сборках.
 * Ставится один будильник на ближайшее время; после срабатывания — следующий.
 */
class ReminderScheduler(private val context: Context) {

    private val alarms = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager

    fun schedule(r: ReminderSettings) {
        val pending = pendingIntent(KIND_PRACTICE, REQUEST_PRACTICE)
        alarms.cancel(pending)
        val next = Reminders.next(LocalDateTime.now(), r) ?: return
        val at = next.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli()
        // Неточный будильник: точность до нескольких минут, зато без особого разрешения.
        alarms.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, at, pending)
    }

    /** Разовое уведомление в заданный момент — например, о конце пробного периода. */
    fun scheduleOnce(kind: String, atEpochMs: Long, request: Int) {
        val pending = pendingIntent(kind, request)
        alarms.cancel(pending)
        if (atEpochMs > System.currentTimeMillis()) alarms.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, atEpochMs, pending)
    }

    fun cancelOnce(kind: String, request: Int) = alarms.cancel(pendingIntent(kind, request))

    private fun pendingIntent(kind: String, request: Int): PendingIntent = PendingIntent.getBroadcast(
        context,
        request,
        Intent(context, ReminderReceiver::class.java).putExtra(EXTRA_KIND, kind),
        PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE,
    )

    companion object {
        const val EXTRA_KIND = "kind"
        const val KIND_PRACTICE = "practice"
        const val KIND_TRIAL = "trial"
        const val REQUEST_PRACTICE = 1
        const val REQUEST_TRIAL = 2
        const val CHANNEL = "reminders"

        fun ensureChannel(context: Context) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                val nm = context.getSystemService(NotificationManager::class.java)
                nm.createNotificationChannel(
                    NotificationChannel(CHANNEL, context.getString(R.string.reminder_channel), NotificationManager.IMPORTANCE_DEFAULT),
                )
            }
        }

        fun canNotify(context: Context): Boolean =
            Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU ||
                ContextCompat.checkSelfPermission(context, android.Manifest.permission.POST_NOTIFICATIONS) == PackageManager.PERMISSION_GRANTED
    }
}

/** Срабатывание будильника: показать уведомление и поставить следующее. */
class ReminderReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val app = context.applicationContext as MudryaApp
        val kind = intent.getStringExtra(ReminderScheduler.EXTRA_KIND) ?: ReminderScheduler.KIND_PRACTICE
        val (title, text) = when (kind) {
            ReminderScheduler.KIND_TRIAL -> context.getString(R.string.trial_reminder_title) to context.getString(R.string.trial_reminder_text)
            else -> context.getString(R.string.reminder_title) to context.getString(R.string.reminder_text)
        }
        notify(context, title, text, if (kind == ReminderScheduler.KIND_TRIAL) 2 else 1)
        if (kind == ReminderScheduler.KIND_PRACTICE) app.container.reminders.schedule(app.container.users.state.value.reminder)
    }

    // Разрешение проверяется в canNotify(), отзыв между проверкой и показом ловится ниже.
    @SuppressLint("MissingPermission")
    private fun notify(context: Context, title: String, text: String, id: Int) {
        if (!ReminderScheduler.canNotify(context)) return
        ReminderScheduler.ensureChannel(context)
        val open = PendingIntent.getActivity(
            context,
            0,
            Intent(context, MainActivity::class.java).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP),
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE,
        )
        val n = NotificationCompat.Builder(context, ReminderScheduler.CHANNEL)
            .setSmallIcon(R.drawable.ic_notification)
            .setContentTitle(title)
            .setContentText(text)
            .setStyle(NotificationCompat.BigTextStyle().bigText(text))
            .setContentIntent(open)
            .setAutoCancel(true)
            .build()
        try {
            NotificationManagerCompat.from(context).notify(id, n)
        } catch (_: SecurityException) {
            // Разрешение отозвали между проверкой и показом — просто пропускаем.
        }
    }
}

/** После перезагрузки телефона будильники сбрасываются — ставим заново. */
class BootReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action != Intent.ACTION_BOOT_COMPLETED) return
        val app = context.applicationContext as MudryaApp
        app.container.reminders.schedule(app.container.users.state.value.reminder)
    }
}
