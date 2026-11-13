#!/bin/sh
# Каталог асан: реестр, дерево, карточки, JSON → docs/asanas/. cards_batch1.md пишется вручную и не перезаписывается.
# sequences.tsv — состав связок (at_sn, at_cn, wu_seated, surya, chandra): выгрузка из SuryaCatalog.
set -e
cd "$(dirname "$0")/../.."
python3 tools/asanas/extract.py
python3 tools/asanas/emit.py docs/asanas tools/asanas/sequences.tsv app/src/main/assets/cards/ru.json tools/cards
python3 tools/asanas/export_json.py
# PDF с рисунками поз и картами мышц (женский и мужской силуэт). Точки поз — pose_points.json (выгрузка FigureGeometry.grounded, см. pose_points.kt)
python3 tools/asanas/build_pdf.py
for s in f m; do NODE_PATH=$(npm root -g) node tools/asanas/render.js "$PWD/tools/asanas/work/catalog_$s.html" "$PWD/tools/asanas/work/catalog_$s.pdf"; done
cp tools/asanas/work/catalog_f.pdf "docs/asanas/catalog_female.pdf"; cp tools/asanas/work/catalog_m.pdf "docs/asanas/catalog_male.pdf"
