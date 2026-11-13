package ru.mudrya.yoga.engine

import java.security.MessageDigest
import java.security.SecureRandom
import java.util.Base64
import javax.crypto.SecretKeyFactory
import javax.crypto.spec.PBEKeySpec

/** Аккаунт на устройстве: пароль хранится только в виде соли и хэша PBKDF2. */
data class Account(val email: String, val name: String, val salt: String, val hash: String, val createdMs: Long)

/** Почему не получилось войти или зарегистрироваться. */
enum class AccountError { BAD_EMAIL, SHORT_PASSWORD, EXISTS, NOT_FOUND, WRONG_PASSWORD }

/**
 * Аккаунты: регистрация, вход, удаление. Логика без Android — хранилище в приложении.
 * У каждого аккаунта свой файл прогресса ([dataKey]); гостевой прогресс при регистрации
 * переносится в новый аккаунт.
 */
object Accounts {
    const val MIN_PASSWORD = 8
    private const val ITERATIONS = 120_000
    private const val KEY_BITS = 256
    private val EMAIL = Regex("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$")

    fun normalize(email: String): String = email.trim().lowercase()

    fun validate(email: String, password: String): AccountError? = when {
        !EMAIL.matches(normalize(email)) -> AccountError.BAD_EMAIL
        password.length < MIN_PASSWORD -> AccountError.SHORT_PASSWORD
        else -> null
    }

    fun hash(password: String, salt: String): String {
        val spec = PBEKeySpec(password.toCharArray(), Base64.getDecoder().decode(salt), ITERATIONS, KEY_BITS)
        val bytes = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256").generateSecret(spec).encoded
        return Base64.getEncoder().encodeToString(bytes)
    }

    fun newSalt(random: SecureRandom = SecureRandom()): String =
        Base64.getEncoder().encodeToString(ByteArray(16).also(random::nextBytes))

    fun create(email: String, name: String, password: String, nowMs: Long, existing: List<Account>): Result<Account> {
        validate(email, password)?.let { return Result.failure(AccountException(it)) }
        val e = normalize(email)
        if (existing.any { it.email == e }) return Result.failure(AccountException(AccountError.EXISTS))
        val salt = newSalt()
        return Result.success(Account(e, name.trim().ifEmpty { e.substringBefore('@') }, salt, hash(password, salt), nowMs))
    }

    fun check(email: String, password: String, existing: List<Account>): Result<Account> {
        val a = existing.firstOrNull { it.email == normalize(email) } ?: return Result.failure(AccountException(AccountError.NOT_FOUND))
        val ok = MessageDigest.isEqual(hash(password, a.salt).toByteArray(), a.hash.toByteArray())
        return if (ok) Result.success(a) else Result.failure(AccountException(AccountError.WRONG_PASSWORD))
    }

    /** Имя файла прогресса аккаунта: по хэшу почты, чтобы не писать почту в имя файла. */
    fun dataKey(email: String): String =
        MessageDigest.getInstance("SHA-256").digest(normalize(email).toByteArray()).take(8).joinToString("") { "%02x".format(it) }

    fun encode(list: List<Account>, current: String?): String = buildString {
        current?.let { append("current=").append(it).append('\n') }
        list.forEach { a ->
            append("account=").append(listOf(a.email, java.net.URLEncoder.encode(a.name, "UTF-8"), a.salt, a.hash, a.createdMs).joinToString(";")).append('\n')
        }
    }

    fun decode(text: String): Pair<List<Account>, String?> {
        var current: String? = null
        val list = mutableListOf<Account>()
        text.lineSequence().forEach { line ->
            when {
                line.startsWith("current=") -> current = line.removePrefix("current=").trim().ifEmpty { null }
                line.startsWith("account=") -> {
                    val p = line.removePrefix("account=").split(';')
                    if (p.size >= 5) {
                        val name = runCatching { java.net.URLDecoder.decode(p[1], "UTF-8") }.getOrNull() ?: p[1]
                        p[4].toLongOrNull()?.let { list += Account(p[0], name, p[2], p[3], it) }
                    }
                }
            }
        }
        return list to current?.takeIf { c -> list.any { it.email == c } }
    }
}

class AccountException(val error: AccountError) : Exception(error.name)
