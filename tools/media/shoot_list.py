#!/usr/bin/env python3
"""Список съёмки для модели и список фраз для живой озвучки.

Берёт сеты, которые чаще всего встречаются в программах (ProgramCatalog), плюс короткие сеты для старта,
считает, какие позы нужнее всего, и пишет:
- tools/media/out/shoot.json — позы по приоритету (слот = id позы, зеркальная берёт ролик пары);
- tools/media/out/voice_ru.tsv — фразы для записи голоса: файл<TAB>фраза (порядок = приоритет);
- app/src/main/assets/voice/ru/index.txt НЕ трогает: его кладут вместе с записанными файлами.
"""
import json
import os
import re
from collections import Counter, OrderedDict

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CAT = os.path.join(ROOT, 'core/catalog/src/main/kotlin/ru/mudrya/yoga/catalog')

def read(name):
    return open(os.path.join(CAT, name), encoding='utf-8').read()

atlas = read('AtlasCatalog.kt')
lib = read('LibraryCatalog.kt')
theme = read('ThemeCatalog.kt')
book = read('BookSetsCatalog.kt')
prog = read('ProgramCatalog.kt')

names = {}
for m in re.finditer(r'Asana\(id = "(at_[^"]+)", nameRu = "([^"]*)", nameEn = "([^"]*)"', atlas):
    names[m.group(1)] = (m.group(2), m.group(3))
for m in re.finditer(r'a\("(lb_B\d+)", "([^"]*)", "([^"]*)"', lib):
    names[m.group(1)] = (m.group(2), m.group(3))
    names[m.group(1) + '_m'] = (m.group(2), m.group(3))

# сеты → шаги (id позы, название шага ru)
sets = {}
for m in re.finditer(r'Theme\(\s*"(th_\w+)".*?listOf\((.*?)\),\s*\)', theme, re.S):
    poses = []
    for p in re.findall(r'"([^"]+)"', m.group(2)):
        if p.endswith('$M'):
            b = p[:-2]
            poses += [b, b + '_m']
        else:
            poses.append(p)
    sets[m.group(1)] = [(p, None) for p in poses]
for m in re.finditer(r'private fun steps_(\w+)\(\): List<Step> = listOf\((.*?)\n    \)', book, re.S):
    sets['bk_' + m.group(1)] = [(a, t) for a, t in re.findall(r's\("([^"]+)", \w+, \d+, "([^"]*)"', m.group(2))]
m = re.search(r'// at_sn_r\n.*?steps = listOf\((.*?)\n    \)\)', atlas, re.S)
sets['at_sn'] = [(a, t) for a, t in re.findall(r's\("([^"]+)", listOf\([^)]*\), (?:emptyList\(\)|listOf\([^)]*\)), "([^"]*)"', m.group(1))]

# сколько раз сет встречается в программах
days = Counter(re.findall(r'"((?:th|bk|at)_\w+)"', prog.split('val programs')[1]))
for s in ('bk_mk', 'at_sn', 'th_morning', 'th_back_relief'):
    days[s] += 3  # бесплатные и стартовые — повыше

slot_count = Counter()
slot_sets = {}
titles = Counter()
for sid, w in days.items():
    for a, t in sets.get(sid, []):
        slot = a[:-2] if a.endswith('_m') else a
        slot_count[slot] += w
        slot_sets.setdefault(slot, set()).add(sid)
        titles[t or names.get(a, (a,))[0]] += w

out = os.path.join(ROOT, 'tools/media/out')
os.makedirs(out, exist_ok=True)
shoot = []
for i, (slot, c) in enumerate(slot_count.most_common(), 1):
    ru, en = names.get(slot, (slot, slot))
    shoot.append({'n': i, 'slot': slot, 'ru': ru, 'en': en, 'weight': c, 'sets': sorted(slot_sets[slot]),
                  'mirror': os.path.exists(os.path.join(ROOT, f'app/src/main/assets/thumbs/{slot}_m.webp'))})
json.dump(shoot, open(os.path.join(out, 'shoot.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

def spoken(s):
    s = re.sub(r'\([^)]*\)', '', s)
    s = re.sub(r'[«»"“”]', '', s)
    return re.sub(r'\s+', ' ', s).strip().rstrip('.,;:')

words = ['Вдох', 'Выдох', 'правая сторона', 'левая сторона', 'Расслабьтесь лёжа', 'Практика завершена', 'Спасибо'] + [f'Круг {i}' for i in range(2, 7)]
phrases = list(OrderedDict.fromkeys(words + [spoken(t) for t, _ in titles.most_common()]))
with open(os.path.join(out, 'voice_ru.tsv'), 'w', encoding='utf-8') as f:
    for i, p in enumerate(phrases, 1):
        f.write(f'{i:03d}.ogg\t{p}\n')
print(len(shoot), 'poses,', len(phrases), 'phrases')
