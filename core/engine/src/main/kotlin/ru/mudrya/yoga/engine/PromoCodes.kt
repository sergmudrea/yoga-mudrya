package ru.mudrya.yoga.engine

import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec

/** Что даёт код: месяц, год или навсегда. */
enum class PromoKind(val letter: Char, val days: Int?) { MONTH('M', 30), YEAR('Y', 365), LIFETIME('L', null) }

data class PromoGrant(val kind: PromoKind, val serial: String)

/**
 * Коды активации премиума (тестировщики, подарки, партнёры) — проверяются без сети.
 * Формат: MUDRA-<M|Y|L><серия из 5 знаков>-<подпись из 6 знаков>, например MUDRA-Y7K2QP-4F9XHC.
 * Подпись — первые знаки HMAC-SHA256 от «вид+серия»; коды выпускает tools/promo/make_codes.py.
 * Ключ лежит в приложении, поэтому коды — для тестов и акций, а не защита от взлома.
 */
object PromoCodes {
    private const val ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
    private const val SECRET = "mudrya-yoga-promo-2026-v1"

    fun normalize(code: String): String = code.uppercase().filter { it.isLetterOrDigit() }.removePrefix("MUDRA")

    fun sign(body: String): String {
        val mac = Mac.getInstance("HmacSHA256").apply { init(SecretKeySpec(SECRET.toByteArray(), "HmacSHA256")) }
        val h = mac.doFinal(body.toByteArray())
        return (0 until 6).map { ALPHABET[(h[it].toInt() and 0xFF) % ALPHABET.length] }.joinToString("")
    }

    fun make(kind: PromoKind, serial: String): String {
        val body = kind.letter + serial
        return "MUDRA-$body-${sign(body)}"
    }

    /** Проверка кода; null — код неверный. */
    fun verify(code: String): PromoGrant? {
        val n = normalize(code)
        if (n.length != 12) return null
        val body = n.substring(0, 6)
        val sig = n.substring(6)
        val kind = PromoKind.entries.firstOrNull { it.letter == body[0] } ?: return null
        if (body.drop(1).any { it !in ALPHABET } || sign(body) != sig) return null
        return PromoGrant(kind, body.drop(1))
    }

    /** Применить код к состоянию: продлевает срок от текущего конца (или от сейчас); повторно один код не действует. */
    fun apply(state: UserState, grant: PromoGrant, nowMs: Long): UserState? {
        val key = grant.kind.letter + grant.serial
        if (key in state.usedCodes) return null
        val days = grant.kind.days
        return if (days == null) {
            state.copy(promoLifetime = true, usedCodes = state.usedCodes + key)
        } else {
            val from = maxOf(nowMs, state.promoUntilMs ?: 0L)
            state.copy(promoUntilMs = from + days * DAY_MS, usedCodes = state.usedCodes + key)
        }
    }

    fun active(state: UserState, nowMs: Long): Boolean = state.promoLifetime || (state.promoUntilMs ?: 0L) > nowMs

    private const val DAY_MS = 86_400_000L
}
