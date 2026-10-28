#!/usr/bin/env python3
"""Английские строки каталога для перевода → tools/i18n/source.json (группы по важности).

Ключ перевода — сам английский текст; приложение ищет его в assets/i18n/<язык>.json (Tr.kt).
"""
import json, os, re
from collections import OrderedDict

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
C = os.path.join(ROOT, 'core/catalog/src/main/kotlin/ru/mudrya/yoga/catalog/')
rd = lambda n: open(C + n, encoding='utf-8').read()
a, l, th, bk, pr = rd('AtlasCatalog.kt'), rd('LibraryCatalog.kt'), rd('ThemeCatalog.kt'), rd('BookSetsCatalog.kt'), rd('ProgramCatalog.kt')
S = r'"((?:[^"\\]|\\.)*)"'

def un(s):
    return s.replace('\\"', '"').replace('\\\\', '\\')

groups = OrderedDict()
def add(g, items):
    groups.setdefault(g, OrderedDict())
    for x in items:
        x = un(x)
        if x and re.search(r'[A-Za-z]', x):
            groups[g][x] = 1

# 1. названия сетов, программ, тем, разделы
add('sets', re.findall(r'SequenceDef\(id = "[^"]+", nameRu = ' + S + ', nameEn = ' + S, a) and [m[1] for m in re.findall(r'SequenceDef\(id = "[^"]+", nameRu = ' + S + ', nameEn = ' + S, a)])
add('sets', [m[1] for m in re.findall(r'Block\("[^"]+", titleRu = ' + S + ', titleEn = ' + S, a)])
add('sets', [m[1] for m in re.findall(r'Zone\("[^"]+", ' + S + ', ' + S, a)])
add('sets', [m[1] for m in re.findall(r'\b[A-Z]+\(' + S + ', ' + S + r'\),', th)])          # разделы тем
add('sets', [x for m in re.findall(r'Theme\(\s*"th_\w+", ' + S + ', ' + S + r',\s*' + S + ', ' + S, th) for x in (m[1], m[3])])
add('sets', re.findall(r'"th_birth", "[^"]*", ' + S, th) + re.findall(r'\n\s+"(For pregnancy[^"]*)"', th))
add('sets', [x for m in re.findall(r'BookSet\("bk_\w+", ' + S + ', ' + S + ', ' + S + ', ' + S, bk) for x in (m[1], m[3])])
add('sets', [x for m in re.findall(r'Program\(\s*"prog_\w+", ' + S + ', ' + S + r',\s*' + S + r',\s*' + S, pr) for x in (m[1], m[3])])
add('sets', [m[1] for m in re.findall(r'LibraryChapter\(' + S + ', ' + S, l)])
# 2. позы и шаги практик
add('poses', [m for m in re.findall(r'nameEn = ' + S + ', pose', a)])
add('poses', [m[4] for m in re.findall(r's\("[^"]+", listOf\([^)]*\), (?:emptyList\(\)|listOf\([^)]*\)), ("(?:[^"\\]|\\.)*"|null), ("(?:[^"\\]|\\.)*"|null), "((?:[^"\\]|\\.)*)"', a)] if False else [])
steps = re.findall(r's\("[^"]+", listOf\([^)]*\), (?:emptyList\(\)|listOf\([^)]*\)), (?:' + S + '|null), (?:' + S + '|null), (?:' + S + '|null), (?:' + S + '|null)', a)
add('poses', [m[2] for m in steps])
add('poses', [m[1] for m in re.findall(r's\("[^"]+", \w+, \d+, ' + S + ', ' + S + r'\)', bk)])
used_lb = set(re.findall(r'"(lb_B\d+)', th + bk))
libnames = {m[0]: m[1] for m in re.findall(r'a\("(lb_B\d+)", "[^"]*", ' + S, l)}
add('poses', [libnames[i] for i in sorted(used_lb, key=lambda s: int(s[4:]))])
# 3. подсказки шагов
add('cues', [m[3] for m in steps])
# 3а. дополнительные сеты и пилатес-йога (ExtraSetsCatalog): разделы, названия, описания, шаги
ex = rd('ExtraSetsCatalog.kt')
add('extra', [m[1] for m in re.findall(r'\n        [A-Z]+\(' + S + ', ' + S + r'\),', ex)])
add('extra', [x for m in re.findall(r'ExtraSet\("\w+", Section\.\w+, ' + S + ', ' + S + ', ' + S + ', ' + S, ex) for x in (m[1], m[3])])
add('extra', [m[1] for m in re.findall(r's\("[^"]+", \w+, \d+, ' + S + ', ' + S + r'\)', ex)])
# 4. описания поз атласа
add('desc', re.findall(r'descriptionEn = ' + S + r',\n', a))
# 5. разделы библиотеки и 6. названия поз библиотеки
add('libsections', [m[1] for m in re.findall(r'SequenceDef\("lib\d+", ' + S + ', ' + S, l)])
add('libposes', list(libnames.values()))

seen = set()
out = OrderedDict()
for g, items in groups.items():
    lst = [x for x in items if x not in seen]
    seen.update(lst)
    out[g] = lst
json.dump(out, open(os.path.join(ROOT, 'tools/i18n/source.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
for g, lst in out.items():
    print(g, len(lst), sum(len(x.split()) for x in lst))
