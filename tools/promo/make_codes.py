#!/usr/bin/env python3
"""
Выпуск кодов активации премиума (проверяются в приложении без сети, см. PromoCodes.kt).

  python3 tools/promo/make_codes.py M 5     # 5 кодов на месяц
  python3 tools/promo/make_codes.py Y 3     # на год
  python3 tools/promo/make_codes.py L 1     # навсегда
"""
import hashlib, hmac, secrets, sys

ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
SECRET = b"mudrya-yoga-promo-2026-v1"


def sign(body: str) -> str:
    h = hmac.new(SECRET, body.encode(), hashlib.sha256).digest()
    return "".join(ALPHABET[h[i] % len(ALPHABET)] for i in range(6))


def make(kind: str, serial: str) -> str:
    body = kind + serial
    return f"MUDRA-{body}-{sign(body)}"


if __name__ == "__main__":
    kind = sys.argv[1].upper() if len(sys.argv) > 1 else "M"
    n = int(sys.argv[2]) if len(sys.argv) > 2 else 1
    assert kind in "MYL" and len(kind) == 1
    for _ in range(n):
        print(make(kind, "".join(secrets.choice(ALPHABET) for _ in range(5))))
