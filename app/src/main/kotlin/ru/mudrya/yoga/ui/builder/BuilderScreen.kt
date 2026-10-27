package ru.mudrya.yoga.ui.builder

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectDragGesturesAfterLongPress
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.zIndex
import ru.mudrya.yoga.R
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.CustomSet
import ru.mudrya.yoga.engine.CustomSets
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.Chip
import ru.mudrya.yoga.ui.common.ChipRow
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.TextAction
import ru.mudrya.yoga.ui.theme.MudryaColors
import kotlin.math.roundToInt

private val ROW_HEIGHT = 64.dp

/**
 * Конструктор сетов: свои сеты из поз колец, старт-сета и библиотеки 2100 асан.
 * Порядок меняется перетаскиванием (долгое нажатие на строку), позы добавляются «плюсом».
 * Без премиума свой сет можно запустить [CustomSets.FREE_RUNS] раз — перед запуском
 * приложение честно говорит, сколько осталось.
 */
@Composable
fun BuilderScreen(
    state: UserState,
    users: UserRepository,
    premium: Boolean,
    onPlay: (String) -> Unit,
    onPaywall: () -> Unit,
    onBack: () -> Unit,
) {
    var editing by rememberSaveable { mutableStateOf<String?>(null) }
    var picking by rememberSaveable { mutableStateOf(false) }
    var trialFor by rememberSaveable { mutableStateOf<String?>(null) }
    val set = state.customSets.firstOrNull { it.id == editing }

    fun save(updated: CustomSet) = users.update { s -> s.copy(customSets = s.customSets.map { if (it.id == updated.id) updated else it }) }

    BackHandler {
        when {
            picking -> picking = false
            editing != null -> editing = null
            else -> onBack()
        }
    }

    when {
        set != null && picking -> PosePicker(
            added = set.asanaIds.size,
            thumbs = state.settings.thumbnails,
            onAdd = { id -> save(set.copy(asanaIds = set.asanaIds + id)) },
            onDone = { picking = false },
        )
        set != null -> SetEditor(
            set = set,
            pinned = set.id in state.pinnedSets,
            thumbs = state.settings.thumbnails,
            onChange = ::save,
            onPin = { on ->
                users.update { s -> s.copy(pinnedSets = if (on) (s.pinnedSets + set.id).distinct() else s.pinnedSets - set.id) }
            },
            onAdd = { picking = true },
            onTest = { if (premium) onPlay(set.id) else trialFor = set.id },
            onDelete = {
                users.update { s -> s.copy(customSets = s.customSets.filter { it.id != set.id }, pinnedSets = s.pinnedSets - set.id) }
                editing = null
            },
            onBack = { editing = null },
        )
        else -> SetList(
            state = state,
            premium = premium,
            onNew = { name ->
                val created = CustomSet(CustomSets.newId(System.currentTimeMillis()), name, emptyList())
                users.update { it.copy(customSets = it.customSets + created) }
                editing = created.id
                picking = true
            },
            onEdit = { editing = it },
            onTest = { if (premium) onPlay(it) else trialFor = it },
            onPin = { id, on -> users.update { s -> s.copy(pinnedSets = if (on) (s.pinnedSets + id).distinct() else s.pinnedSets - id) } },
            onBack = onBack,
        )
    }

    trialFor?.let { id ->
        TrialDialog(
            runsUsed = state.customRuns,
            onRun = {
                trialFor = null
                users.update { it.copy(customRuns = it.customRuns + 1) }
                onPlay(id)
            },
            onPremium = {
                trialFor = null
                onPaywall()
            },
            onDismiss = { trialFor = null },
        )
    }
}

/** Перед запуском своего сета: с премиумом — сразу, без — честно о пяти бесплатных запусках. */
@Composable
fun TrialDialog(runsUsed: Int, onRun: () -> Unit, onPremium: () -> Unit, onDismiss: () -> Unit) {
    val left = CustomSets.runsLeft(runsUsed)
    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text(stringResource(if (left > 0) R.string.trial_title else R.string.trial_over_title)) },
        text = {
            Text(
                if (left > 0) stringResource(R.string.trial_text, CustomSets.FREE_RUNS, left)
                else stringResource(R.string.trial_over_text, CustomSets.FREE_RUNS),
            )
        },
        confirmButton = {
            if (left > 0) {
                TextButton(onClick = onRun) { Text(stringResource(R.string.trial_run, left)) }
            } else {
                TextButton(onClick = onPremium) { Text(stringResource(R.string.trial_premium)) }
            }
        },
        dismissButton = {
            if (left > 0) {
                TextButton(onClick = onPremium) { Text(stringResource(R.string.trial_premium)) }
            } else {
                TextButton(onClick = onDismiss) { Text(stringResource(R.string.close)) }
            }
        },
    )
}

@Composable
private fun SetList(
    state: UserState,
    premium: Boolean,
    onNew: (String) -> Unit,
    onEdit: (String) -> Unit,
    onTest: (String) -> Unit,
    onPin: (String, Boolean) -> Unit,
    onBack: () -> Unit,
) {
    val defaultName = stringResource(R.string.builder_new_name, state.customSets.size + 1)
    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        ScreenTitle(stringResource(R.string.builder_title))
        Body(stringResource(R.string.builder_hint))
        if (!premium) {
            Body(stringResource(R.string.builder_runs_left, CustomSets.runsLeft(state.customRuns), CustomSets.FREE_RUNS), color = MudryaColors.Saffron)
        }
        PrimaryButton(stringResource(R.string.builder_new), { onNew(defaultName) })
        if (state.customSets.isEmpty()) Body(stringResource(R.string.builder_empty))
        state.customSets.forEach { set ->
            Card {
                Text(set.name, color = MudryaColors.Saffron, fontSize = 19.sp, fontWeight = FontWeight.Bold)
                Text(stringResource(R.string.library_poses, set.asanaIds.size), color = MudryaColors.Text, fontSize = 14.sp)
                Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                    PrimaryButton(stringResource(R.string.builder_edit), { onEdit(set.id) }, Modifier.weight(1f), color = MudryaColors.Border, contentColor = MudryaColors.Text)
                    PrimaryButton(
                        stringResource(R.string.builder_test),
                        { onTest(set.id) },
                        Modifier.weight(1f),
                        enabled = set.asanaIds.isNotEmpty(),
                    )
                }
                val pinned = set.id in state.pinnedSets
                TextAction(stringResource(if (pinned) R.string.builder_unpin else R.string.builder_pin_do), { onPin(set.id, !pinned) })
            }
        }
        TextAction(stringResource(R.string.back), onBack)
    }
}

@Composable
private fun SetEditor(
    set: CustomSet,
    pinned: Boolean,
    thumbs: Boolean,
    onChange: (CustomSet) -> Unit,
    onPin: (Boolean) -> Unit,
    onAdd: () -> Unit,
    onTest: () -> Unit,
    onDelete: () -> Unit,
    onBack: () -> Unit,
) {
    var preview by remember { mutableStateOf<String?>(null) }
    var dragIndex by remember { mutableIntStateOf(-1) }
    var dragOffset by remember { mutableFloatStateOf(0f) }
    val rowPx = with(LocalDensity.current) { ROW_HEIGHT.toPx() }
    // Список держим локально, пока идёт перетаскивание, и сохраняем, когда палец отпущен.
    var order by remember(set.id, set.asanaIds) { mutableStateOf(set.asanaIds) }
    val current by rememberUpdatedState(set)

    Column(Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(horizontal = 20.dp)) {
        Column(Modifier.padding(top = 20.dp, bottom = 8.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
            OutlinedTextField(
                value = set.name,
                onValueChange = { onChange(set.copy(name = it.take(40))) },
                singleLine = true,
                label = { Text(stringResource(R.string.builder_name)) },
                modifier = Modifier.fillMaxWidth(),
                colors = fieldColors(),
            )
            Text(stringResource(R.string.builder_hold), color = MudryaColors.TextMuted, fontSize = 13.sp)
            ChipRow {
                listOf(1, 2, 3, 5).forEach { n ->
                    Chip(stringResource(R.string.builder_hold_n, n), set.holdCycles == n, { onChange(set.copy(holdCycles = n)) })
                }
            }
            PrimaryButton(
                stringResource(if (pinned) R.string.builder_unpin else R.string.builder_pin_do),
                { onPin(!pinned) },
                color = if (pinned) MudryaColors.Border else MudryaColors.Moon,
                contentColor = if (pinned) MudryaColors.Text else MudryaColors.Ground,
            )
            if (order.isNotEmpty()) SetPreview(order, set.holdCycles)
            Body(stringResource(R.string.builder_drag_hint))
        }
        Column {
            order.forEachIndexed { i, id ->
                val asana = PoseCatalog.asana(id)
                val dragging = i == dragIndex
                Row(
                    Modifier
                        .zIndex(if (dragging) 1f else 0f)
                        .graphicsLayer { translationY = if (dragging) dragOffset else 0f }
                        .fillMaxWidth()
                        .height(ROW_HEIGHT)
                        .padding(vertical = 3.dp)
                        .background(if (dragging) MudryaColors.SaffronDeep else MudryaColors.Surface, RoundedCornerShape(12.dp))
                        .pointerInput(Unit) {
                            detectDragGesturesAfterLongPress(
                                onDragStart = { dragIndex = i; dragOffset = 0f },
                                onDragEnd = {
                                    dragIndex = -1; dragOffset = 0f
                                    onChange(current.copy(asanaIds = order))
                                },
                                onDragCancel = { dragIndex = -1; dragOffset = 0f },
                                onDrag = { change, amount ->
                                    change.consume()
                                    dragOffset += amount.y
                                    val steps = (dragOffset / rowPx).roundToInt()
                                    val target = (dragIndex + steps).coerceIn(0, order.lastIndex)
                                    if (target != dragIndex && dragIndex >= 0) {
                                        order = CustomSets.move(order, dragIndex, target)
                                        dragOffset -= (target - dragIndex) * rowPx
                                        dragIndex = target
                                    }
                                },
                            )
                        }
                        .clickable { preview = id }
                        .padding(horizontal = 12.dp),
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Text("≡", color = MudryaColors.TextMuted, fontSize = 22.sp, modifier = Modifier.width(26.dp))
                    Text("${i + 1}.", color = MudryaColors.TextMuted, fontSize = 14.sp, modifier = Modifier.width(30.dp))
                    if (thumbs) {
                        PoseThumb(id, 50.dp)
                        Spacer(Modifier.width(8.dp))
                    }
                    Text(
                        asana?.shownName() ?: id,
                        color = MudryaColors.Text,
                        fontSize = 15.sp,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                        modifier = Modifier.weight(1f),
                    )
                    Box(
                        Modifier
                            .size(36.dp)
                            .clickable { onChange(set.copy(asanaIds = order.filterIndexed { k, _ -> k != i })) },
                        contentAlignment = Alignment.Center,
                    ) { Text("✕", color = MudryaColors.TextMuted, fontSize = 16.sp) }
                }
            }
            if (order.isEmpty()) Body(stringResource(R.string.builder_no_poses))
            Spacer(Modifier.height(8.dp))
        }
        Column(Modifier.padding(vertical = 10.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                PrimaryButton("＋ " + stringResource(R.string.builder_add), onAdd, Modifier.weight(1f), color = MudryaColors.Moon)
                PrimaryButton(stringResource(R.string.builder_test), onTest, Modifier.weight(1f), enabled = order.isNotEmpty())
            }
            Row {
                TextAction(stringResource(R.string.back), onBack, Modifier.weight(1f))
                TextAction(stringResource(R.string.builder_delete), onDelete)
            }
        }
    }
    preview?.let { id -> PoseCatalog.asana(id)?.let { PosePreview(it, onAdd = null, onClose = { preview = null }) } }
}

/** Выбор поз «плюсом»: позы колец и старт-сета или вся библиотека, с поиском и просмотром на марионетке. */
@Composable
fun PosePicker(added: Int, onAdd: (String) -> Unit, onDone: () -> Unit, thumbs: Boolean = true) {
    var tab by rememberSaveable { mutableIntStateOf(0) }
    var query by rememberSaveable { mutableStateOf("") }
    var preview by remember { mutableStateOf<String?>(null) }
    val list = remember(tab, query) { PoseCatalog.search(if (tab == 0) PoseCatalog.core else PoseCatalog.library, query) }
    LazyColumn(Modifier.fillMaxSize().padding(horizontal = 20.dp), verticalArrangement = Arrangement.spacedBy(6.dp)) {
        item {
            Column(Modifier.padding(top = 20.dp, bottom = 6.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                ScreenTitle(stringResource(R.string.builder_pick_title))
                Text(stringResource(R.string.builder_in_set, added), color = MudryaColors.Saffron, fontSize = 14.sp)
                ChipRow {
                    Chip(stringResource(R.string.builder_tab_core), tab == 0, { tab = 0 })
                    Chip(stringResource(R.string.builder_tab_library), tab == 1, { tab = 1 }, accent = MudryaColors.Moon)
                }
                OutlinedTextField(
                    value = query,
                    onValueChange = { query = it },
                    singleLine = true,
                    placeholder = { Text(stringResource(R.string.library_search), color = MudryaColors.TextMuted) },
                    modifier = Modifier.fillMaxWidth(),
                    colors = fieldColors(),
                )
                PrimaryButton(stringResource(R.string.builder_done), onDone)
            }
        }
        items(list.take(300), key = { it.asana.id }) { e ->
            Row(
                Modifier
                    .fillMaxWidth()
                    .background(MudryaColors.Surface, RoundedCornerShape(12.dp))
                    .clickable { preview = e.asana.id }
                    .padding(start = 8.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                if (thumbs) {
                    PoseThumb(e.asana.id, 56.dp)
                    Spacer(Modifier.width(10.dp))
                }
                Column(Modifier.weight(1f).padding(vertical = 8.dp)) {
                    Text(e.asana.shownName(), color = MudryaColors.Text, fontSize = 15.sp, maxLines = 2, overflow = TextOverflow.Ellipsis)
                    e.asana.sanskrit?.let { Text(it, color = MudryaColors.TextMuted, fontSize = 12.sp, maxLines = 1) }
                }
                Box(Modifier.size(52.dp).clickable { onAdd(e.asana.id) }, contentAlignment = Alignment.Center) {
                    Text("＋", color = MudryaColors.Saffron, fontSize = 24.sp, fontWeight = FontWeight.Bold)
                }
            }
        }
        if (list.size > 300) item { Body(stringResource(R.string.builder_more, list.size - 300)) }
        item { Spacer(Modifier.height(24.dp)) }
    }
    preview?.let { id ->
        PoseCatalog.asana(id)?.let { PosePreview(it, onAdd = { onAdd(id); preview = null }, onClose = { preview = null }) }
    }
}

@Composable
private fun fieldColors() = OutlinedTextFieldDefaults.colors(
    focusedTextColor = MudryaColors.Text,
    unfocusedTextColor = MudryaColors.Text,
    focusedBorderColor = MudryaColors.Saffron,
    unfocusedBorderColor = MudryaColors.Border,
    focusedLabelColor = MudryaColors.Saffron,
    unfocusedLabelColor = MudryaColors.TextMuted,
)

/** Живой просмотр своего сета: марионетка переходит от позы к позе с выбранным удержанием. */
@Composable
private fun SetPreview(order: List<String>, holdCycles: Int) {
    var i by remember(order) { mutableIntStateOf(0) }
    androidx.compose.runtime.LaunchedEffect(order, holdCycles) {
        while (true) {
            kotlinx.coroutines.delay(PREVIEW_MOVE_MS + holdCycles * 2 * PREVIEW_PHASE_MS)
            i = (i + 1) % order.size
        }
    }
    val asana = PoseCatalog.asana(order[i.coerceIn(0, order.lastIndex)])
    Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
        Text(stringResource(R.string.builder_preview, i + 1, order.size, asana?.shownName() ?: ""), color = MudryaColors.TextMuted, fontSize = 13.sp)
        asana?.figure?.let {
            ru.mudrya.yoga.ui.player.Figure3D(
                it,
                PREVIEW_MOVE_MS,
                asana.shownName(),
                Modifier.fillMaxWidth().height(200.dp).clip(RoundedCornerShape(16.dp)),
                placeholder = { PoseThumb(asana.id, 200.dp, Modifier.fillMaxWidth()) },
            )
        }
    }
}

private const val PREVIEW_MOVE_MS = 1_800L
private const val PREVIEW_PHASE_MS = 900L
