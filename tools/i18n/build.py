#!/usr/bin/env python3
"""Сборка переводов: tools/i18n/<язык>/ui.tsv → app/src/main/res/values-<язык>/strings.xml,
tools/i18n/<язык>/<группа>.tsv (номер<TAB>перевод по source.json) → app/src/main/assets/i18n/<язык>.json.
Проверяет, что в переводе интерфейса есть все ключи и те же %-подстановки."""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
I18N = os.path.join(ROOT, 'tools/i18n')
EN_XML = os.path.join(ROOT, 'app/src/main/res/values/strings.xml')

def en_strings():
    t = open(EN_XML, encoding='utf-8').read()
    return [(k, v) for k, _, v in re.findall(r'<string name="([^"]+)"([^>]*)>(.*?)</string>', t, re.S)]

def esc(s):
    s = s.replace('\\', '\\\\') if False else s
    s = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    s = s.replace("\\'", "'").replace("'", "\\'").replace('"', '\\"')
    if s[:1] in ('@', '?'):
        s = '\\' + s
    return s

def ph(s):
    return sorted(re.findall(r'%\d\$[sd]', s))

def build_ui(lang):
    path = os.path.join(I18N, lang, 'ui.tsv')
    tr = {}
    for line in open(path, encoding='utf-8'):
        line = line.rstrip('\n')
        if not line.strip():
            continue
        k, v = line.split('\t', 1)
        tr[k] = v
    errs = []
    out = ['<?xml version="1.0" encoding="utf-8"?>', '<resources>']
    for k, v in en_strings():
        if k not in tr:
            errs.append(f'{lang}: missing {k}')
            continue
        if ph(tr[k]) != ph(v.replace("\\'", "'")):
            errs.append(f'{lang}: placeholders differ in {k}')
        out.append(f'    <string name="{k}">{esc(tr[k])}</string>')
    out.append('</resources>')
    if errs:
        print('\n'.join(errs)); sys.exit(1)
    d = os.path.join(ROOT, f'app/src/main/res/values-{lang}')
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, 'strings.xml'), 'w', encoding='utf-8').write('\n'.join(out) + '\n')

def build_content(lang):
    src = json.load(open(os.path.join(I18N, 'source.json'), encoding='utf-8'))
    m = {}
    for g, items in src.items():
        p = os.path.join(I18N, lang, g + '.tsv')
        if not os.path.exists(p):
            continue
        for line in open(p, encoding='utf-8'):
            line = line.rstrip('\n')
            if not line.strip():
                continue
            i, v = line.split('\t', 1)
            i = int(i)
            if i < len(items) and v.strip():
                m[items[i]] = v
    d = os.path.join(ROOT, 'app/src/main/assets/i18n')
    os.makedirs(d, exist_ok=True)
    json.dump(m, open(os.path.join(d, f'{lang}.json'), 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    return len(m)

if __name__ == '__main__':
    langs = sys.argv[1:] or [d for d in sorted(os.listdir(I18N)) if os.path.isdir(os.path.join(I18N, d))]
    for lang in langs:
        if os.path.exists(os.path.join(I18N, lang, 'ui.tsv')):
            build_ui(lang)
        print(lang, 'content:', build_content(lang))
