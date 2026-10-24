package ru.mudrya.yoga.data

import android.content.Context
import android.util.AtomicFile
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.engine.UserStateCodec
import java.io.File
import java.time.LocalDate

/** Где лежат данные. Отдельный интерфейс — чтобы тестировать без Android. */
interface StateStore {
    fun read(): String?
    fun write(text: String)
}

/** Файл во внутренней памяти приложения. AtomicFile не оставит полузаписанный файл при сбое. */
class FileStateStore(dir: File) : StateStore {
    private val file = AtomicFile(File(dir, "user_state.txt"))

    override fun read(): String? = try {
        file.readFully().toString(Charsets.UTF_8)
    } catch (_: java.io.FileNotFoundException) {
        null
    }

    override fun write(text: String) {
        val out = file.startWrite()
        try {
            out.write(text.toByteArray(Charsets.UTF_8))
            file.finishWrite(out)
        } catch (e: java.io.IOException) {
            file.failWrite(out)
            throw e
        }
    }
}

/**
 * Единственный источник данных пользователя. Состояние в памяти обновляется сразу,
 * запись на диск идёт в фоне по порядку.
 */
class UserRepository(
    private val store: StateStore,
    private val scope: CoroutineScope = CoroutineScope(SupervisorJob() + Dispatchers.IO),
) {
    private val _state = MutableStateFlow(store.read()?.let(UserStateCodec::decode) ?: UserState())
    val state: StateFlow<UserState> = _state.asStateFlow()

    private val writeLock = Mutex()

    fun update(transform: (UserState) -> UserState) {
        _state.update(transform)
        scope.launch {
            // Пишем самое свежее состояние: даже если записи встали в очередь не по порядку, на диске окажется последнее.
            writeLock.withLock { store.write(UserStateCodec.encode(_state.value)) }
        }
    }

    fun reset() = update { UserState() }

    companion object {
        fun today(): Long = LocalDate.now().toEpochDay()
    }
}

/** Зависимости приложения. Создаются один раз в [ru.mudrya.yoga.MudryaApp]. */
class AppContainer(context: Context) {
    val users = UserRepository(FileStateStore(context.filesDir))
    val reminders = ReminderScheduler(context)
}
