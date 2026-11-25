#!/usr/bin/env python3
"""Сборка карточек поз.

Источники:
  base_cards.py      — первые 38 карточек (поля works/watch/easier/avoid на 7 языках);
  data/*.py          — карточки по книгам: CARDS = {ключ: {"ids": [...], "m": [regex санскрита], "en": {...}, "ru": {...}}};
  tr/<язык>_*.py     — переводы: T = {ключ: {поле: текст}} (steps — список шагов).
Поля: steps (как войти, список), works (польза), watch (на что обратить внимание), easier (облегчить),
tip (совет), avoid (кому нельзя).

Результат:
  app/src/main/assets/cards/<язык>.json
  core/engine/src/main/kotlin/ru/mudrya/yoga/engine/PoseCardsData.kt — какая асана к какой карточке.
Проверяет, что у каждой карточки на каждом языке есть все поля, что есть у английской.
"""
import glob, importlib.util, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
HERE = os.path.join(ROOT, 'tools/cards')
LANGS = ['en', 'ru', 'de', 'fr', 'es', 'it', 'pt']
FIELDS = ['steps', 'works', 'watch', 'easier', 'tip', 'avoid']


def load(path):
    spec = importlib.util.spec_from_file_location(os.path.basename(path)[:-3], path)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def index():
    """id, английское название, санскрит — из сгенерированных каталогов."""
    rows = []
    lib = open(os.path.join(ROOT, 'core/catalog/src/main/kotlin/ru/mudrya/yoga/catalog/LibraryCatalog.kt'), encoding='utf-8').read()
    for m in re.finditer(r'a\("(lb_B\d+)", "([^"]*)", "([^"]*)", "([^"]*)"', lib):
        rows.append((m[1], m[3], m[4]))
    at = open(os.path.join(ROOT, 'core/catalog/src/main/kotlin/ru/mudrya/yoga/catalog/AtlasCatalog.kt'), encoding='utf-8').read()
    for m in re.finditer(r'Asana\(id = "(at_[a-z0-9_]+)", nameRu = "([^"]*)", nameEn = "([^"]*)"', at):
        rows.append((m[1], m[3], ''))
    return rows


def main():
    rows = index()
    known = {r[0] for r in rows}
    text = {l: {} for l in LANGS}
    ids = {}      # карточка -> явные id
    pats = {}     # карточка -> regex

    base = load(os.path.join(HERE, 'base_cards.py'))
    for key, (aids, fields) in base.CARDS.items():
        ids[key] = list(aids)
        for fi, f in enumerate(base.F):
            for li, l in enumerate(base.LANGS):
                text[l].setdefault(key, {})[f] = fields[fi][li]

    for p in sorted(glob.glob(os.path.join(HERE, 'data', '*.py'))):
        for key, c in load(p).CARDS.items():
            ids[key] = ids.get(key, []) + [i for i in c.get('ids', []) if i not in ids.get(key, [])]
            if c.get('m'):
                pats[key] = pats.get(key, []) + c['m']
            for l in ('en', 'ru'):
                for f, v in c.get(l, {}).items():
                    text[l].setdefault(key, {})[f] = v

    for p in sorted(glob.glob(os.path.join(HERE, 'tr', '*.py'))):
        l = os.path.basename(p).split('_')[0]
        for key, fields in load(p).T.items():
            for f, v in fields.items():
                text[l].setdefault(key, {})[f] = v

    # Первые 38 карточек проверены раньше: их поля works/watch/easier/avoid сохраняются как были,
    # из книг к ним добавляются только steps и tip. Заменять поле можно лишь там, где старый текст
    # оказался неверным, — такие поля перечислены в OVERRIDE с причиной.
    OVERRIDE = {}
    for key, (aids, fields) in base.CARDS.items():
        for fi, f in enumerate(base.F):
            if f in OVERRIDE.get(key, ()):
                continue
            for li, l in enumerate(base.LANGS):
                text[l][key][f] = fields[fi][li]

    errs = []
    for key, en in text['en'].items():
        for l in LANGS[1:]:
            have = text[l].get(key, {})
            for f in en:
                if f not in have:
                    errs.append(f'{l}: {key}.{f} missing')
                elif f == 'steps' and len(have[f]) != len(en[f]):
                    errs.append(f'{l}: {key}.steps has {len(have[f])} steps, en has {len(en[f])}')
    for l in LANGS:
        for key in text[l]:
            if key not in text['en']:
                errs.append(f'{l}: {key} has no English card')

    # Асана -> карточка: сначала явные id, потом совпадения по санскриту.
    by = {}
    for key, aids in ids.items():
        for a in aids:
            if a not in known:
                errs.append(f'{key}: unknown asana id {a}')
            elif a not in by:
                by[a] = key
    for key, ps in pats.items():
        for pat in ps:
            r = re.compile(pat, re.I)
            hit = [x[0] for x in rows if x[2] and r.search(x[2])]
            if not hit:
                errs.append(f'{key}: pattern {pat} matches nothing')
            for a in hit:
                by.setdefault(a, key)
    for key in text['en']:
        if key not in by.values():
            errs.append(f'{key}: no asana shows this card')

    if errs:
        print('\n'.join(errs))
        sys.exit(1)

    d = os.path.join(ROOT, 'app/src/main/assets/cards')
    os.makedirs(d, exist_ok=True)
    for l in LANGS:
        out = {k: {f: v[f] for f in FIELDS if f in v} for k, v in sorted(text[l].items())}
        json.dump(out, open(os.path.join(d, f'{l}.json'), 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))

    kt = ['// Сгенерировано tools/cards/build_cards.py. Не редактировать вручную.',
          '@file:Suppress("LargeClass", "MaxLineLength")', '',
          'package ru.mudrya.yoga.engine', '',
          '/** Какая карточка позы показывается для асаны. */',
          'internal object PoseCardsData {']
    items = sorted(by.items())
    parts = [items[i:i + 300] for i in range(0, len(items), 300)]
    kt.append('    val byAsana: Map<String, String> = HashMap<String, String>(%d).apply { %s }' % (
        len(items) * 2, '; '.join(f'part{i}(this)' for i in range(len(parts)))))
    for i, part in enumerate(parts):
        kt.append('')
        kt.append(f'    private fun part{i}(m: HashMap<String, String>) {{')
        for j in range(0, len(part), 6):
            kt.append('        ' + ' '.join(f'm["{a}"] = "{k}"' + (';' if n < len(part[j:j + 6]) - 1 else '') for n, (a, k) in enumerate(part[j:j + 6])))
        kt.append('    }')
    kt += ['}', '']
    open(os.path.join(ROOT, 'core/engine/src/main/kotlin/ru/mudrya/yoga/engine/PoseCardsData.kt'), 'w', encoding='utf-8').write('\n'.join(kt))
    print(f'cards: {len(text["en"])}, asanas: {len(by)}')


if __name__ == '__main__':
    main()
