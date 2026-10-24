package ru.mudrya.yoga.ui.home

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ru.mudrya.yoga.R
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.engine.UserState
import ru.mudrya.yoga.ui.common.Body
import ru.mudrya.yoga.ui.common.Card
import ru.mudrya.yoga.ui.common.PrimaryButton
import ru.mudrya.yoga.ui.common.ScreenTitle
import ru.mudrya.yoga.ui.common.sequenceName
import ru.mudrya.yoga.ui.theme.MudryaColors

/** Сет в каталоге: id последовательности, описание, цвета карточки. */
private data class SetCard(val id: String, val description: Int, val accent: Color, val background: Color)

private val SETS = listOf(
    SetCard("surya", R.string.set_surya_desc, MudryaColors.Saffron, MudryaColors.SaffronDeep),
    SetCard("chandra", R.string.set_chandra_desc, MudryaColors.Moon, MudryaColors.MoonDeep),
    SetCard("surya_chandra", R.string.set_bundle_desc, MudryaColors.Saffron, MudryaColors.Surface),
    SetCard("morning", R.string.set_morning_desc, MudryaColors.Moon, MudryaColors.Surface),
)

@Composable
fun SetsScreen(state: UserState, users: UserRepository, onStart: (String) -> Unit) {
    val params = state.params
    val injuries = state.profile?.injuries.orEmpty()
    Column(
        Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        ScreenTitle(stringResource(R.string.tab_sets))
        SETS.forEach { set ->
            val minutes = remember(params, injuries, set.id) { estimateMinutes(set.id, params, injuries) }
            Card(color = set.background) {
                Text(sequenceName(set.id), color = set.accent, fontSize = 22.sp, fontWeight = FontWeight.Bold)
                Text(stringResource(R.string.set_minutes, minutes, params.rounds), color = MudryaColors.Text, fontSize = 14.sp)
                Body(stringResource(set.description))
                PrimaryButton(stringResource(R.string.start), { onStart(set.id) }, color = set.accent)
            }
        }
        SessionTuning(state, users)
        Spacer(Modifier.height(8.dp))
    }
}
