# Архив фигур

Сейчас приложение показывает только плоскую фигуру из палочек и кружочков (`FigureCanvas`): в плеере, на ТВ,
в карточках поз, библиотеке и конструкторе (`PoseThumb` рисует её из данных позы).

Убрано в архив и в приложение не входит:

1. **Человек и робот** — `models/xbot.glb` (Mixamo X Bot, женская фигура) и `models/ybot.glb` (Y Bot, мужская),
   переведены из FBX утилитой FBX2glTF. Раскраска — `tools/atlas/skin.mjs`: `fitness` (человек в спортивной форме),
   `sides` (робот: правые конечности оранжевые, левые синие).
2. **3D-марионетка** — `emulator/` (страница, решатель `marionette.js`, данные атласа). Исходник решателя —
   `tools/atlas/marionette.src.mjs`, сборка — esbuild в `emulator/marionette.js`. Код показа в приложении остался:
   `ui/player/Figure3D.kt`.
3. **Кадры 3D для миниатюр** — `thumbs/` (2262 webp).

Как вернуть 3D: перенести `emulator/` в `app/src/main/assets/emulator/` (и пути в build_emulator.py, library_poses.mjs),
в PlayerScreen и TvOutput снова передавать `settings.figure3d`, вернуть переключатель в настройках.
Человека и робота: положить .glb рядом с эмулятором, вписать в `SKIN_URL` в marionette.src.mjs
(например `human_f:{url:'xbot.glb',tint:'fitness'}`), вернуть выбор фигуры (FigureKind и figureJs в UserData.kt есть).
