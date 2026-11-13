"""Все асаны приложения → work/raw.json: библиотека Лакерды (LibraryCatalog) и атлас Сидерского (AtlasCatalog)."""
import re, json, os
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CAT = os.path.join(ROOT, 'core/catalog/src/main/kotlin/ru/mudrya/yoga/catalog')
W = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'work'); os.makedirs(W, exist_ok=True)
t = open(os.path.join(CAT, 'LibraryCatalog.kt'), encoding='utf-8').read()
rows = []
for m in re.finditer(r'a\("(lb_B\d+)", "((?:[^"\\]|\\.)*)", "((?:[^"\\]|\\.)*)", (null|"(?:[^"\\]|\\.)*"), p\([^)]*\)(.*?)\),?\n', t):
    strs = re.findall(r'"((?:[^"\\]|\\.)*)"', m.group(5))
    rows.append(dict(id=m.group(1), ru=m.group(2), en=m.group(3), sa=(m.group(4).strip('"') if m.group(4) != 'null' else ''),
                     short=strs[0] if strs else '', long=strs[1] if len(strs) > 1 else '', src='Лакерда'))
a = open(os.path.join(CAT, 'AtlasCatalog.kt'), encoding='utf-8').read()
for p in re.split(r'\n\s*Asana\(id = ', a)[1:]:
    m = re.match(r'"(at_\w+)", nameRu = "((?:[^"\\]|\\.)*)", nameEn = "((?:[^"\\]|\\.)*)"', p)
    if not m: continue
    body = p[:4000]
    sa = re.search(r'sanskrit = "([^"]*)"', body); de = re.search(r'description(?:Ru)? = "([^"]*)"', body)
    cue = re.search(r'cuesRu = listOf\("((?:[^"\\]|\\.)*)"', body)
    rows.append(dict(id=m.group(1), ru=m.group(2), en=m.group(3), sa=sa.group(1) if sa else '',
                     short=(de.group(1) if de else (cue.group(1) if cue else '')), long='', src='Атлас Сидерского'))
json.dump(rows, open(os.path.join(W, 'raw.json'), 'w', encoding='utf-8'), ensure_ascii=False)
print(len(rows))
