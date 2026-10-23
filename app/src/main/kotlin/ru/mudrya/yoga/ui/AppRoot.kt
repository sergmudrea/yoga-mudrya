package ru.mudrya.yoga.ui

import androidx.annotation.StringRes
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import ru.mudrya.yoga.R
import ru.mudrya.yoga.store.StoreModule
import ru.mudrya.yoga.ui.theme.MudryaColors

enum class Tab(val route: String, @StringRes val label: Int) {
    PRACTICE("practice", R.string.tab_practice),
    SETS("sets", R.string.tab_sets),
    PROGRESS("progress", R.string.tab_progress),
    PROFILE("profile", R.string.tab_profile),
}

@Composable
fun AppRoot() {
    val nav = rememberNavController()
    val backStack by nav.currentBackStackEntryAsState()
    val current = backStack?.destination?.route

    Scaffold(
        containerColor = MudryaColors.Ground,
        bottomBar = {
            NavigationBar(containerColor = MudryaColors.SurfaceHigh) {
                Tab.entries.forEach { tab ->
                    val selected = current == tab.route
                    NavigationBarItem(
                        selected = selected,
                        onClick = {
                            nav.navigate(tab.route) {
                                popUpTo(nav.graph.findStartDestination().id) { saveState = true }
                                launchSingleTop = true
                                restoreState = true
                            }
                        },
                        icon = { TabDot(selected) },
                        label = { Text(stringResource(tab.label)) },
                        colors = NavigationBarItemDefaults.colors(
                            selectedTextColor = MudryaColors.Saffron,
                            unselectedTextColor = MudryaColors.TextMuted,
                            indicatorColor = Color.Transparent,
                        ),
                    )
                }
            }
        },
    ) { padding ->
        NavHost(nav, startDestination = Tab.PRACTICE.route, modifier = Modifier.padding(padding)) {
            composable(Tab.PRACTICE.route) { PracticeScreen() }
            composable(Tab.SETS.route) { Placeholder(R.string.tab_sets) }
            composable(Tab.PROGRESS.route) { Placeholder(R.string.tab_progress) }
            composable(Tab.PROFILE.route) { Placeholder(R.string.tab_profile) }
        }
    }
}

@Composable
private fun TabDot(selected: Boolean) {
    Box(
        Modifier
            .size(10.dp)
            .background(if (selected) MudryaColors.Saffron else MudryaColors.Border, CircleShape),
    )
}

@Composable
private fun PracticeScreen() {
    Column(
        Modifier
            .fillMaxSize()
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        Text(stringResource(R.string.today), color = MudryaColors.TextMuted, fontSize = 14.sp)
        Column(
            Modifier
                .fillMaxWidth()
                .background(MudryaColors.Saffron, RoundedCornerShape(24.dp))
                .padding(20.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Text(
                stringResource(R.string.surya),
                color = MudryaColors.Ground,
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
            )
            Button(
                onClick = { /* Плеер — этап 2 */ },
                colors = ButtonDefaults.buttonColors(containerColor = MudryaColors.Ground, contentColor = MudryaColors.Text),
                modifier = Modifier
                    .fillMaxWidth()
                    .height(52.dp),
                shape = RoundedCornerShape(16.dp),
            ) { Text(stringResource(R.string.start), fontWeight = FontWeight.Bold) }
        }
        Spacer(Modifier.height(8.dp))
        Text(
            stringResource(R.string.store_label, StoreModule.services.storeName),
            color = MudryaColors.TextMuted,
            style = MaterialTheme.typography.bodySmall,
        )
    }
}

@Composable
private fun Placeholder(@StringRes title: Int) {
    Column(
        Modifier
            .fillMaxSize()
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Text(stringResource(title), color = MudryaColors.Text, fontSize = 22.sp, fontWeight = FontWeight.Bold)
        Text(stringResource(R.string.coming_soon), color = MudryaColors.TextMuted)
    }
}
