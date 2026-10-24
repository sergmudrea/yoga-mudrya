package ru.mudrya.yoga.ui.player

import android.view.TextureView
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.media3.common.MediaItem
import androidx.media3.common.Player
import androidx.media3.exoplayer.ExoPlayer
import ru.mudrya.yoga.engine.ClipRef
import ru.mudrya.yoga.ui.theme.MudryaColors
import java.io.File

/**
 * Ролик инструктора для текущей позы: без звука (ведёт дыхание и голос приложения), по кругу.
 * Зеркальная поза показывает ролик пары, отражённый по горизонтали.
 */
@Composable
fun VideoPane(clip: ClipRef, file: (String) -> File, paused: Boolean, description: String, modifier: Modifier = Modifier) {
    val context = LocalContext.current
    val player = remember {
        ExoPlayer.Builder(context).build().apply {
            volume = 0f
            repeatMode = Player.REPEAT_MODE_ONE
        }
    }
    DisposableEffect(Unit) { onDispose { player.release() } }
    LaunchedEffect(clip.slot) {
        player.setMediaItem(MediaItem.fromUri(android.net.Uri.fromFile(file(clip.slot))))
        player.prepare()
    }
    LaunchedEffect(paused) { player.playWhenReady = !paused }

    Box(
        modifier
            .clip(RoundedCornerShape(20.dp))
            .background(MudryaColors.Surface)
            .semantics { contentDescription = description },
    ) {
        AndroidView(
            factory = { ctx -> TextureView(ctx).also { player.setVideoTextureView(it) } },
            modifier = Modifier.matchParentSize().graphicsLayer { scaleX = if (clip.mirrored) -1f else 1f },
        )
    }
}
