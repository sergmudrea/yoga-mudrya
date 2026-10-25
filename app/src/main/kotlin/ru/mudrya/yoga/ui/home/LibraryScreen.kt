package ru.mudrya.yoga.ui.home

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.catalog.LibraryCatalog
import ru.mudrya.yoga.catalog.SuryaCatalog
import ru.mudrya.yoga.store.PremiumPolicy
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.Chip
import ru.mudrya.yoga.ui.common.ChipRow
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.english
import ru.mudrya.yoga.ui.common.sequenceName
import ru.mudrya.yoga.ui.theme.MudryaColors

/** Раздел библиотеки для списка: id сета и названия всех его поз (для поиска). */
private data class LibSection(val id: String, val poses: List<String>, val search: String)

private val SECTIONS: Map<String, LibSection> by lazy {
    val asanas = LibraryCatalog.asanas.associateBy { it.id }
    LibraryCatalog.blocks.associate { b ->
        val names = b.steps.map { st -> asanas.getValue(st.asanaId).let { a -> if (english) a.nameEn else a.nameRu } }
        val seq = SuryaCatalog.sequence(b.id)
        val text = (listOf(seq.nameRu, seq.nameEn) + b.steps.flatMap { st ->
            val a = asanas.getValue(st.asanaId)
            listOfNotNull(a.nameRu, a.nameEn, a.sanskrit, st.titleRu)
        }).joinToString(" ").lowercase()
        b.id to LibSection(b.id, names, text)
    }
}

/**
 * Библиотека 2100 асан Д. Лакерды из атласа: главы книги, разделы-сеты, поиск по названиям
 * (по-русски, по-английски, на санскрите). Раздел проигрывается как обычный сет на марионетке.
 */
@Composable
fun LibraryScreen(premium: Boolean, onStart: (String) -> Unit, onBack: () -> Unit) {
    BackHandler(onBack = onBack)
    var chapter by rememberSaveable { mutableIntStateOf(0) }
    var query by rememberSaveable { mutableStateOf("") }
    val ids = remember(chapter, query) {
        val q = query.trim().lowercase()
        if (q.isNotEmpty()) {
            LibraryCatalog.chapters.flatMap { it.sequenceIds }.filter { SECTIONS.getValue(it).search.contains(q) }
        } else {
            LibraryCatalog.chapters[chapter].sequenceIds
        }
    }
    LazyColumn(Modifier.fillMaxSize().padding(horizontal = 20.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
        item {
            Column(Modifier.padding(top = 20.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                ScreenTitle(stringResource(R.string.library_title))
                Body(stringResource(R.string.library_hint, LibraryCatalog.POSE_COUNT))
                OutlinedTextField(
                    value = query,
                    onValueChange = { query = it },
                    singleLine = true,
                    placeholder = { Text(stringResource(R.string.library_search), color = MudryaColors.TextMuted) },
                    modifier = Modifier.fillMaxWidth(),
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedTextColor = MudryaColors.Text,
                        unfocusedTextColor = MudryaColors.Text,
                        focusedBorderColor = MudryaColors.Moon,
                        unfocusedBorderColor = MudryaColors.Border,
                    ),
                )
                if (query.isBlank()) {
                    ChipRow {
                        LibraryCatalog.chapters.forEachIndexed { i, ch ->
                            Chip(if (english) ch.nameEn else ch.nameRu, i == chapter, { chapter = i }, accent = MudryaColors.Moon)
                        }
                    }
                } else {
                    Body(stringResource(R.string.library_found, ids.size))
                }
            }
        }
        items(ids, key = { it }) { id ->
            val section = SECTIONS.getValue(id)
            val locked = PremiumPolicy.isLocked(id, premium)
            Card {
                Text(sequenceName(id), color = MudryaColors.Moon, fontSize = 18.sp, fontWeight = FontWeight.Bold)
                Text(
                    stringResource(R.string.library_poses, section.poses.size) + " · " + section.poses.take(4).joinToString(", ") +
                        if (section.poses.size > 4) "…" else "",
                    color = MudryaColors.Text,
                    fontSize = 13.sp,
                )
                PrimaryButton(
                    stringResource(if (locked) R.string.set_locked else R.string.start),
                    { onStart(id) },
                    color = MudryaColors.Moon,
                    contentColor = MudryaColors.Ground,
                )
            }
        }
        item { Column(Modifier.padding(bottom = 24.dp)) {} }
    }
}
