package ru.mudrya.yoga.data

import android.content.Context
import android.net.Uri
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.withContext
import java.io.File

/**
 * Ролики инструктора для поз. Хранятся в личной папке приложения: videos/<слот>.mp4,
 * слот — id асаны (зеркальная поза берёт ролик пары, см. VideoSlots).
 */
class VideoLibrary(context: Context) {

    private val resolver = context.contentResolver
    private val dir = File(context.filesDir, "videos").apply { mkdirs() }

    private val _slots = MutableStateFlow(scan())

    /** Слоты, для которых есть ролик. */
    val slots: StateFlow<Set<String>> = _slots.asStateFlow()

    fun file(slot: String): File = File(dir, "$slot$EXT")

    /** Копирует выбранный ролик в слот. false — если файл не удалось прочитать. */
    suspend fun import(slot: String, uri: Uri): Boolean = withContext(Dispatchers.IO) {
        val target = file(slot)
        val tmp = File(dir, "$slot.part")
        val ok = try {
            resolver.openInputStream(uri)?.use { input -> tmp.outputStream().use { input.copyTo(it) } } != null && tmp.length() > 0
        } catch (_: Exception) {
            false
        }
        if (ok) {
            target.delete()
            tmp.renameTo(target)
        } else {
            tmp.delete()
        }
        _slots.value = scan()
        ok
    }

    fun remove(slot: String) {
        file(slot).delete()
        _slots.value = scan()
    }

    private fun scan(): Set<String> =
        dir.listFiles { f -> f.name.endsWith(EXT) }.orEmpty().map { it.name.removeSuffix(EXT) }.toSet()

    private companion object {
        const val EXT = ".mp4"
    }
}
