package ru.mudrya.yoga.ui

import androidx.annotation.StringRes
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import ru.mudrya.yoga.BuildConfig
import ru.mudrya.yoga.R
import ru.mudrya.yoga.store.PremiumPolicy
import ru.mudrya.yoga.store.isPremium
import ru.mudrya.yoga.ui.paywall.PaywallScreen
import androidx.compose.runtime.LaunchedEffect
import ru.mudrya.yoga.engine.Plan
import ru.mudrya.yoga.engine.UserProfile
import ru.mudrya.yoga.model.Injury
import ru.mudrya.yoga.model.Support
import ru.mudrya.yoga.ui.common.appContainer
import ru.mudrya.yoga.ui.home.PracticeScreen
import ru.mudrya.yoga.ui.home.ProfileScreen
import ru.mudrya.yoga.ui.home.ProgressScreen
import ru.mudrya.yoga.ui.home.SetsScreen
import ru.mudrya.yoga.ui.settings.SettingsScreen
import ru.mudrya.yoga.data.UserRepository
import ru.mudrya.yoga.ui.onboarding.OnboardingScreen
import ru.mudrya.yoga.ui.player.PlayerScreen
import ru.mudrya.yoga.ui.test.MovementTestScreen
import ru.mudrya.yoga.ui.theme.MudryaColors

enum class Tab(val route: String, @StringRes val label: Int) {
    PRACTICE("practice", R.string.tab_practice),
    SETS("sets", R.string.tab_sets),
    PROGRESS("progress", R.string.tab_progress),
    PROFILE("profile", R.string.tab_profile),
}

private object Routes {
    const val ONBOARDING = "onboarding"
    const val EDIT_PROFILE = "profile/edit"
    const val FIRST_TEST = "test/first"
    const val TEST = "test"
    const val SETTINGS = "settings"
    const val PAYWALL = "paywall"
    const val PLAYER = "player/{seq}"
    fun player(sequenceId: String) = "player/$sequenceId"
}

@Composable
fun AppRoot() {
    val container = appContainer()
    val users = container.users
    val state by users.state.collectAsStateWithLifecycle()
    val entitlement by container.billing.entitlement.collectAsStateWithLifecycle()
    val premium = entitlement.isPremium(System.currentTimeMillis()) || (BuildConfig.DEBUG && state.settings.debugPremium)
    // Права проверяются у магазина при каждом запуске: покупка на другом устройстве, отмена, продление.
    LaunchedEffect(Unit) { container.billing.restore() }
    val nav = rememberNavController()
    val backStack by nav.currentBackStackEntryAsState()
    val current = backStack?.destination?.route
    val start = remember { if (state.onboarded) Tab.PRACTICE.route else Routes.ONBOARDING }
    val showTabs = Tab.entries.any { it.route == current }

    Scaffold(
        containerColor = MudryaColors.Ground,
        bottomBar = { if (showTabs) TabBar(nav, current) },
    ) { padding ->
        NavHost(nav, startDestination = start, modifier = Modifier.padding(padding)) {
            composable(Routes.ONBOARDING) {
                OnboardingScreen(initial = null) { profile ->
                    users.update { it.copy(profile = profile, params = Plan.initial(profile), planStartDay = UserRepository.today()) }
                    nav.navigate(Routes.FIRST_TEST) { popUpTo(Routes.ONBOARDING) { inclusive = true } }
                }
            }
            composable(Routes.EDIT_PROFILE) {
                OnboardingScreen(initial = state.profile) { profile ->
                    users.update { it.copy(profile = profile, params = it.params.respecting(profile)) }
                    nav.popBackStack()
                }
            }
            composable(Routes.FIRST_TEST) {
                val profile = state.profile
                if (profile == null) {
                    Box(Modifier.fillMaxSize())
                } else {
                    MovementTestScreen(profile, users) { nav.goHome() }
                }
            }
            composable(Routes.TEST) {
                val profile = state.profile
                if (profile == null) {
                    Box(Modifier.fillMaxSize())
                } else {
                    MovementTestScreen(profile, users) { nav.popBackStack() }
                }
            }
            composable(Routes.PLAYER) { entry ->
                PlayerScreen(sequenceId = entry.arguments?.getString("seq") ?: "surya", onClose = { nav.popBackStack() })
            }
            composable(Routes.PAYWALL) { PaywallScreen(onClose = { nav.popBackStack() }) }
            composable(Routes.SETTINGS) { SettingsScreen(state, users, onBack = { nav.popBackStack() }) }
            composable(Tab.PRACTICE.route) {
                PracticeScreen(
                    state,
                    users,
                    onStart = { nav.startSet(it, premium) },
                    onTest = { nav.navigate(Routes.TEST) },
                    onSets = { nav.goTab(Tab.SETS) },
                )
            }
            composable(Tab.SETS.route) { SetsScreen(state, users, premium, onStart = { nav.startSet(it, premium) }) }
            composable(Tab.PROGRESS.route) { ProgressScreen(state, onTest = { nav.navigate(Routes.TEST) }) }
            composable(Tab.PROFILE.route) {
                ProfileScreen(
                    state,
                    onEdit = { nav.navigate(Routes.EDIT_PROFILE) },
                    onSettings = { nav.navigate(Routes.SETTINGS) },
                    entitlement = entitlement,
                    onSubscribe = { nav.navigate(Routes.PAYWALL) },
                    onReset = {
                        users.reset()
                        nav.navigate(Routes.ONBOARDING) { popUpTo(nav.graph.id) { inclusive = true } }
                    },
                )
            }
        }
    }
}

/** После смены ограничений опора должна оставаться допустимой. */
private fun ru.mudrya.yoga.engine.SessionParams.respecting(p: UserProfile) =
    if (Injury.WRISTS in p.injuries && support != Support.FISTS) copy(support = Support.FISTS) else this

/** Закрытый сет ведёт на экран подписки, открытый — сразу в плеер. Во время практики продаж нет. */
private fun NavHostController.startSet(id: String, premium: Boolean) =
    navigate(if (PremiumPolicy.isLocked(id, premium)) Routes.PAYWALL else Routes.player(id))

private fun NavHostController.goTab(tab: Tab) = navigate(tab.route) {
    popUpTo(Tab.PRACTICE.route) { saveState = true }
    launchSingleTop = true
    restoreState = true
}

private fun NavHostController.goHome() = navigate(Tab.PRACTICE.route) { popUpTo(graph.id) { inclusive = true } }

@Composable
private fun TabBar(nav: NavHostController, current: String?) {
    NavigationBar(containerColor = MudryaColors.SurfaceHigh) {
        Tab.entries.forEach { tab ->
            val selected = current == tab.route
            NavigationBarItem(
                selected = selected,
                onClick = {
                    nav.navigate(tab.route) {
                        // Практика — корень после онбординга, на неё и сворачиваем стек вкладок.
                        popUpTo(Tab.PRACTICE.route) { saveState = true }
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
}

@Composable
private fun TabDot(selected: Boolean) {
    Box(
        Modifier
            .size(10.dp)
            .background(if (selected) MudryaColors.Saffron else MudryaColors.Border, CircleShape),
    )
}
