package ru.mudrya.yoga.data

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import org.junit.jupiter.api.Test
import ru.mudrya.yoga.engine.Level
import ru.mudrya.yoga.engine.Sex
import ru.mudrya.yoga.engine.UserProfile
import ru.mudrya.yoga.engine.UserStateCodec
import kotlin.test.assertEquals
import kotlin.test.assertNull

class UserRepositoryTest {

    private class MemoryStore(var text: String? = null) : StateStore {
        override fun read(): String? = text
        override fun write(text: String) {
            this.text = text
        }
    }

    private val profile = UserProfile(Sex.MALE, 35, emptySet(), Level.BEGINNER, emptySet())

    @Test
    fun `update is visible at once and written to the store`() {
        val store = MemoryStore()
        val repo = UserRepository(store, CoroutineScope(Dispatchers.Unconfined))
        repo.update { it.copy(profile = profile) }
        assertEquals(profile, repo.state.value.profile)
        assertEquals(profile, UserStateCodec.decode(store.text!!).profile)
    }

    @Test
    fun `state is restored on start and reset clears it`() {
        val store = MemoryStore()
        UserRepository(store, CoroutineScope(Dispatchers.Unconfined)).update { it.copy(profile = profile) }
        val again = UserRepository(store, CoroutineScope(Dispatchers.Unconfined))
        assertEquals(profile, again.state.value.profile)
        again.reset()
        assertNull(UserStateCodec.decode(store.text!!).profile)
    }
}
