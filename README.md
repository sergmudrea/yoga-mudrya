# Мудрая йога (рабочее название)

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
- `core/engine` — движок: сборка сессии, тайминг дыхания, подстройка нагрузки, возраст движения, интерполяция поз. Чистый Kotlin, покрыт тестами.
- `app` — Android-приложение на Jetpack Compose; магазинные реализации лежат в `src/google` и `src/rustore`.

## Тесты

```
./gradlew :core:engine:test testGoogleDebugUnitTest testRustoreDebugUnitTest
```

CI (GitHub Actions) на каждый push гоняет тесты и lint, собирает обе debug-сборки и выкладывает APK в артефакты.

## Требования

JDK 17, Android SDK с платформой 36.
