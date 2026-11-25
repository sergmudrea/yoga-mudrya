# Мудря йога — сайт mudryayoga.ru

Три независимых плагина WordPress: если один сломается, остальное продолжит работать.

- `mudrya-canvas` — показывает страницу лендинга без шапки темы (страницы с `<!--mudrya-canvas-->`).
- `mudrya-help` — форма «Психологическая помощь женщинам»: заявки в админке и на почту.
- `mudrya-app` — закрытая веб-практика с 3D-фигурой (страница с `<!--mudrya-app-->`).
  Файлы фигуры `atlas-data.js` и `marionette.js` берутся из `tools/atlas/archive/emulator/` при сборке архива.
  `app/data.json` собирается из `AtlasCatalog.kt` скриптом `conv_catalog_to_json.py`.

`landing-page.html` — содержимое страницы «Главная» (блок «Произвольный HTML»).
