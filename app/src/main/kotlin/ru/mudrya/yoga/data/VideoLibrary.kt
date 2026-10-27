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
 * Ролики инструктора для поз. Встроенные — в ассетах приложения (assets/video/<слот>.mp4),
 * свои — в личной папке приложения (videos/<слот>.mp4) и важнее встроенных.
 * Слот — id асаны (зеркальная поза берёт ролик пары, см. VideoSlots).
 */
class VideoLibrary(context: Context) {

    private val resolver = context.contentResolver
    private val dir = File(context.filesDir, "videos").apply { mkdirs() }

    /** Ролики, встроенные в приложение. */
    private val bundled: Set<String> = runCatching {
        context.assets.list(ASSET_DIR).orEmpty().filter { it.endsWith(EXT) }.map { it.removeSuffix(EXT) }.toSet()
    }.getOrDefault(emptySet())

    private val _slots = MutableStateFlow(scan())

    /** Слоты, для которых есть ролик. */
    val slots: StateFlow<Set<String>> = _slots.asStateFlow()

    fun file(slot: String): File = File(dir, "$slot$EXT")

    /** Откуда играть ролик слота: свой файл, иначе встроенный. */
    fun uri(slot: String): Uri {
        val own = file(slot)
        return if (own.exists()) Uri.fromFile(own) else Uri.parse("asset:///$ASSET_DIR/$slot$EXT")
    }

    /** В слоте лежит свой ролик (его можно удалить; встроенный — нет). */
    fun hasOwn(slot: String): Boolean = file(slot).exists()

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
        dir.listFiles { f -> f.name.endsWith(EXT) }.orEmpty().map { it.name.removeSuffix(EXT) }.toSet() + bundled

    private companion object {
        const val EXT = ".mp4"
        const val ASSET_DIR = "video"
    }
}
