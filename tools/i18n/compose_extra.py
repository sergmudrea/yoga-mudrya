#!/usr/bin/env python3
"""Переводы дополнительных сетов: tools/i18n/<язык>/extra_base.tsv (английский<TAB>перевод, без «— right/left side»)
→ tools/i18n/<язык>/extra.tsv (номер<TAB>перевод по группе «extra» в source.json). Сторону дописывает сам."""
import json
import os
import sys

I18N = os.path.dirname(os.path.abspath(__file__))
SIDES = {
    'de': (' — rechte Seite', ' — linke Seite'),
    'fr': (' — côté droit', ' — côté gauche'),
    'es': (' — lado derecho', ' — lado izquierdo'),
    'it': (' — lato destro', ' — lato sinistro'),
    'pt': (' — lado direito', ' — lado esquerdo'),
}
EN_SIDES = (' — right side', ' — left side')


def compose(lang):
    src = json.load(open(os.path.join(I18N, 'source.json'), encoding='utf-8'))['extra']
    base = {}
    for line in open(os.path.join(I18N, lang, 'extra_base.tsv'), encoding='utf-8'):
        line = line.rstrip('\n')
        if line.strip():
            k, v = line.split('\t', 1)
            base[k] = v
    out, missing = [], []
    for i, en in enumerate(src):
        suffix = ''
        for n, s in enumerate(EN_SIDES):
            if en.endswith(s):
                en, suffix = en[:-len(s)], SIDES[lang][n]
        if en not in base:
            missing.append(en)
            continue
        out.append(f'{i}\t{base[en]}{suffix}')
    if missing:
        sys.exit(f'{lang}: no translation for ' + ' | '.join(missing))
    open(os.path.join(I18N, lang, 'extra.tsv'), 'w', encoding='utf-8').write('\n'.join(out) + '\n')
    print(lang, len(out))


if __name__ == '__main__':
    for lang in sys.argv[1:] or SIDES:
        compose(lang)
