package ru.mudrya.yoga.ui.builder

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.util.LruCache
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import ru.mudrya.yoga.ui.theme.MudryaColors

/** Маленькие картинки поз (кадры марионетки атласа) из ассетов thumbs/<id асаны>.webp. */
private object Thumbs {
    private val cache = LruCache<String, Bitmap>(220)

    fun cached(id: String): Bitmap? = cache.get(id)

    fun load(context: Context, id: String): Bitmap? = cache.get(id) ?: try {
        context.assets.open("thumbs/$id.webp").use(BitmapFactory::decodeStream)?.also { cache.put(id, it) }
    } catch (_: java.io.IOException) {
        null
    }
}

@Composable
fun PoseThumb(asanaId: String, size: Dp = 56.dp, modifier: Modifier = Modifier) {
    val context = LocalContext.current
    var image by remember(asanaId) { mutableStateOf<ImageBitmap?>(Thumbs.cached(asanaId)?.asImageBitmap()) }
    LaunchedEffect(asanaId) {
        if (image == null) image = withContext(Dispatchers.IO) { Thumbs.load(context.applicationContext, asanaId) }?.asImageBitmap()
    }
    Box(modifier.size(size).clip(RoundedCornerShape(8.dp)).background(MudryaColors.Ground)) {
        image?.let { Image(it, contentDescription = null, modifier = Modifier.size(size)) }
    }
}
