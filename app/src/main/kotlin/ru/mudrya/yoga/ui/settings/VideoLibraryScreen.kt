package ru.mudrya.yoga.ui.settings

import androidx.activity.compose.BackHandler
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import kotlinx.coroutines.launch
import ru.mudrya.yoga.R
import ru.mudrya.yoga.catalog.SuryaCatalog
import ru.mudrya.yoga.data.VideoLibrary
import ru.mudrya.yoga.engine.BuildRequest
import ru.mudrya.yoga.engine.SessionBuilder
import ru.mudrya.yoga.engine.VideoSlots
import ru.mudrya.yoga.model.Support
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Chip
import ru.mudrya.yoga.ui.common.ChipRow
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.common.sequenceName
import ru.mudrya.yoga.ui.theme.MudryaColors

/**
 * Видео инструктора: для каждой позы сета можно положить свой ролик (снятый на телефон или
 * присланный инструктором). В плеере ролик показывается вместо схемы, если включено «Видео».
 */
@Composable
fun VideoLibraryScreen(videos: VideoLibrary, onBack: () -> Unit) {
    BackHandler(onBack = onBack)
    val slots by videos.slots.collectAsStateWithLifecycle()
    var sequenceId by rememberSaveable { mutableStateOf("at_sn") }
    var pendingSlot by rememberSaveable { mutableStateOf<String?>(null) }
    var failed by remember { mutableStateOf(false) }
    val scope = rememberCoroutineScope()
    val picker = rememberLauncherForActivityResult(ActivityResultContracts.OpenDocument()) { uri ->
        val slot = pendingSlot
        pendingSlot = null
        if (uri != null && slot != null) scope.launch { failed = !videos.import(slot, uri) }
    }
    val positions = remember(sequenceId) {
        val session = SessionBuilder(SuryaCatalog.catalog).build(BuildRequest(SuryaCatalog.sequence(sequenceId), 1, Support.PALMS))
        val names = session.steps.associate { VideoSlots.slotOf(it.asana.id) to it.asana.nameRu }
        VideoSlots.slots(session).map { it to names.getValue(it) }
    }

    LazyColumn(
        Modifier.fillMaxSize().padding(horizontal = 20.dp),
        verticalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        item {
            Column(Modifier.padding(top = 20.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                ScreenTitle(stringResource(R.string.videos_title))
                Body(stringResource(R.string.videos_hint))
                ChipRow {
                    SuryaCatalog.sequences.forEach { seq ->
                        Chip(sequenceName(seq.id), seq.id == sequenceId, { sequenceId = seq.id }, accent = MudryaColors.Moon)
                    }
                }
                val covered = positions.count { (slot, _) -> VideoSlots.resolve(slot, slots) != null }
                Text(stringResource(R.string.videos_coverage, covered, positions.size), color = MudryaColors.Text, fontSize = 14.sp)
                if (failed) Body(stringResource(R.string.videos_failed), color = MudryaColors.Saffron)
            }
        }
        items(positions, key = { it.first }) { (slot, name) ->
            val has = VideoSlots.resolve(slot, slots) != null
            Row(Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
                Column(Modifier.weight(1f).padding(end = 8.dp)) {
                    Text(name, color = MudryaColors.Text, fontSize = 15.sp, fontWeight = if (has) FontWeight.Bold else FontWeight.Normal)
                    Text(
                        stringResource(if (has) R.string.videos_has else R.string.videos_none),
                        color = if (has) MudryaColors.Moon else MudryaColors.TextMuted,
                        fontSize = 12.sp,
                    )
                }
                TextAction(stringResource(if (has) R.string.videos_replace else R.string.videos_add), {
                    pendingSlot = slot
                    picker.launch(arrayOf("video/*"))
                })
                if (slot in slots) TextAction(stringResource(R.string.videos_remove), { videos.remove(slot) })
            }
        }
        item { Column(Modifier.padding(bottom = 24.dp)) {} }
    }
}
