package ru.mudrya.yoga.data

import android.util.AtomicFile
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import ru.mudrya.yoga.engine.Account
import ru.mudrya.yoga.engine.Accounts
import java.io.File

/**
 * Аккаунты на этом устройстве: регистрация, вход, выход, удаление.
 * У каждого аккаунта свой файл прогресса; гостевой прогресс при регистрации переносится в аккаунт.
 * Пароль хранится только как соль и хэш PBKDF2. Перенос на другое устройство — через резервную копию.
 */
class AccountRepository(private val dir: File) {

    private val file = AtomicFile(File(dir, "accounts.txt"))
    private var list: List<Account>
    private val _current: MutableStateFlow<Account?>

    init {
        val text = try {
            file.readFully().toString(Charsets.UTF_8)
        } catch (_: java.io.FileNotFoundException) {
            ""
        }
        val (accounts, current) = Accounts.decode(text)
        list = accounts
        _current = MutableStateFlow(accounts.firstOrNull { it.email == current })
    }

    val current: StateFlow<Account?> = _current.asStateFlow()

    fun storeFor(account: Account?): FileStateStore =
        if (account == null) FileStateStore(dir) else FileStateStore(dir, "user_${Accounts.dataKey(account.email)}.txt")

    fun currentStore(): FileStateStore = storeFor(_current.value)

    /** Регистрация: аккаунт создаётся и сразу становится текущим, текущий прогресс переносится в него. */
    fun register(email: String, name: String, password: String, users: UserRepository): Result<Account> =
        Accounts.create(email, name, password, System.currentTimeMillis(), list).onSuccess { a ->
            list = list + a
            _current.value = a
            save()
            users.switchTo(storeFor(a), carry = true)
        }

    fun login(email: String, password: String, users: UserRepository): Result<Account> =
        Accounts.check(email, password, list).onSuccess { a ->
            _current.value = a
            save()
            users.switchTo(storeFor(a))
        }

    /** Выход: приложение продолжает работать в гостевом режиме со своим прогрессом. */
    fun logout(users: UserRepository) {
        _current.value = null
        save()
        users.switchTo(storeFor(null))
    }

    /** Удаление аккаунта: нужен пароль; удаляются учётная запись и весь прогресс этого аккаунта. */
    fun delete(password: String, users: UserRepository): Result<Unit> {
        val a = _current.value ?: return Result.success(Unit)
        return Accounts.check(a.email, password, list).map {
            list = list.filter { it.email != a.email }
            _current.value = null
            save()
            users.switchTo(storeFor(null))
            storeFor(a).delete()
        }
    }

    private fun save() {
        val out = file.startWrite()
        try {
            out.write(Accounts.encode(list, _current.value?.email).toByteArray(Charsets.UTF_8))
            file.finishWrite(out)
        } catch (e: java.io.IOException) {
            file.failWrite(out)
        }
    }
}
