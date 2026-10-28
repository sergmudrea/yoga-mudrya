# Мудря йога

Android-приложение для практики Сурья Намаскар и Чандра Намаскар как воркаута: анимированная модель или видео инструктора, дыхание по фазам, подстройка нагрузки и «возраст движения».

Техническое задание: [docs/TZ.md](docs/TZ.md).

## Сборки

Один код, две сборки (product flavor `store`):

| Сборка | Магазин | Команда |
|---|---|---|
| `google` | Google Play | `./gradlew assembleGoogleDebug` |
| `rustore` | RuStore | `./gradlew assembleRustoreDebug` |

## Модули

- `core/model` — доменные типы: асаны, позы, шаги, блоки, последовательности, граф переходов. Чистый Kotlin.
- `core/engine` — движок: сборка сессии, тайминг дыхания, подстройка нагрузки, возраст движения, путь 8 недель, напоминания, формат хранения прогресса. Чистый Kotlin, покрыт тестами.
- `core/catalog` — каталог методики: асаны, позы, блоки, Сурья (77), Чандра (99), связка и короткие сессии.
- `app` — Android-приложение на Jetpack Compose; магазинные реализации лежат в `src/google` и `src/rustore`.

## Тесты

```
./gradlew :core:engine:test :core:catalog:test testGoogleDebugUnitTest testRustoreDebugUnitTest
```

CI (GitHub Actions) на каждый push гоняет тесты и lint, проверяет релизную сборку (R8), собирает обе debug-сборки и выкладывает APK в артефакты. По тегу `v*` — подписанные AAB (Google Play) и APK (RuStore).

## Выпуск

Ключ подписи, секреты CI, настройка тарифов в консолях и чек-лист перед отправкой — [docs/RELEASE.md](docs/RELEASE.md).
Тексты страниц магазинов — [docs/store](docs/store), политика конфиденциальности — [docs/privacy-policy.md](docs/privacy-policy.md).

## Требования

JDK 17, Android SDK с платформой 36.
