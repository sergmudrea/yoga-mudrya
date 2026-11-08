#!/bin/sh
# Каталог асан: реестр, дерево, карточки, JSON → docs/asanas/. cards_batch1.md пишется вручную и не перезаписывается.
# sequences.tsv — состав связок (at_sn, at_cn, wu_seated, surya, chandra): выгрузка из SuryaCatalog.
set -e
cd "$(dirname "$0")/../.."
python3 tools/asanas/extract.py
python3 tools/asanas/emit.py docs/asanas tools/asanas/sequences.tsv app/src/main/assets/cards/ru.json tools/cards
