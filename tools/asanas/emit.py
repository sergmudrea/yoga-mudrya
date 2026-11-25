"""Каталог асан «Мудря йога»: реестр, дерево, карточки базовых асан и вариаций, отчёт о сомнительных, JSON.
Источник — LibraryCatalog (Д. Лакерда, «2100 Asanas») и AtlasCatalog (атлас Сидерского) приложения."""
import sys, json, csv, re, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build import *
from varinfo import describe
from figures import var_muscles
from muscles_bases import M as MB

OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)
keys, bid, fam, out = build()
byid = {r['id']: r for r in R}

# семейство: ручные поправки там, где тип Лакерды вводит в заблуждение
FAM_OVR = {'sukasana': 'Сидячие и раскрытие тазобедренных', 'bitilasana': 'На коленях', 'urdva hastasana': 'Стоячие',
           'sancalanasana': 'Стоячие', 'anjaneyasana': 'На коленях', 'bujangasana': 'Прогибы назад', 'urdva muka svanasana': 'Прогибы назад',
           'ado muka svanasana': 'Наклоны вперёд', 'janu sirsasana': 'Наклоны вперёд', 'badda konasana': 'Сидячие и раскрытие тазобедренных',
           'tadasana': 'Стоячие', 'utkatasana': 'Стоячие', 'virabadrasana': 'Стоячие', 'trikonasana': 'Стоячие', 'parsva konasana': 'Стоячие',
           'vriksasana': 'Балансы на ногах', 'garudasana': 'Балансы на ногах', 'natarajasana': 'Балансы на ногах', 'savasana': 'Восстанавливающие и расслабляющие',
           'balasana': 'Восстанавливающие и расслабляющие', 'halasana': 'Перевёрнутые', 'sarvangasana': 'Перевёрнутые', 'sirsasana': 'Перевёрнутые',
           'setu banda sarvangasana': 'Прогибы назад', 'ustrasana': 'Прогибы назад', 'danurasana': 'Прогибы назад', 'salabasana': 'Лёжа на животе',
           'matsyasana': 'Лёжа на спине', 'dandasana': 'Сидячие и раскрытие тазобедренных', 'padmasana': 'Сидячие и раскрытие тазобедренных',
           'virasana': 'Сидячие и раскрытие тазобедренных', 'vajrasana': 'На коленях', 'malasana': 'Стоячие', 'navasana': 'Сидячие и раскрытие тазобедренных',
           'caturanga dandasana': 'Балансы на руках', 'astangasana': 'Лёжа на животе', 'pascimottanasana': 'Наклоны вперёд', 'uttanasana': 'Наклоны вперёд',
           'parsvottanasana': 'Наклоны вперёд', 'prasarita padottanasana': 'Наклоны вперёд', 'jatara parivartanasana': 'Скрутки', 'maricyasana': 'Скрутки',
           'matsyendrasana': 'Скрутки', 'ardha matsyendrasana': 'Скрутки', 'baradvajasana': 'Скрутки', 'gomukasana': 'Сидячие и раскрытие тазобедренных',
           'hanumanasana': 'Сидячие и раскрытие тазобедренных', 'raja kapotasana': 'Сидячие и раскрытие тазобедренных', 'kapotasana': 'Прогибы назад',
           'makarasana': 'Восстанавливающие и расслабляющие', 'utkata konasana': 'Стоячие', 'upavista konasana': 'Сидячие и раскрытие тазобедренных'}
for k, f in FAM_OVR.items():
    if k in fam: fam[k] = f
# отображаемые названия базовых: канонические для партии 1, для остальных — без уточнений после двоеточия или запятой
NAME_OVR={'tadasana':('Тадасана','Поза горы','Mountain Pose'),'urdva hastasana':('Урдхва хастасана','Руки вверх','Upward Salute'),
 'uttanasana':('Уттанасана','Наклон вперёд стоя','Standing Forward Bend'),'sancalanasana':('Ашва санчаланасана','Выпад всадника','Equestrian Pose'),
 'ado muka svanasana':('Адхо мукха шванасана','Собака мордой вниз','Downward-Facing Dog'),'astangasana':('Аштанга намаскара','Поза восьми точек','Eight-Limbed Pose'),
 'bujangasana':('Бхуджангасана','Кобра','Cobra Pose'),'anjaneyasana':('Анджанейасана','Низкий выпад (полумесяц на колене)','Low Lunge'),
 'caturanga dandasana':('Пхалакасана / Утхита чатуранга дандасана','Планка','Plank Pose'),'balasana':('Баласана','Поза ребёнка','Child’s Pose'),
 'bitilasana':('Марджариасана — битиласана','Кошка — корова','Cat–Cow'),'urdva muka svanasana':('Урдхва мукха шванасана','Собака мордой вверх','Upward-Facing Dog'),
 'sukasana':('Сукхасана','Лёгкая поза','Easy Pose'),'dandasana':('Дандасана','Поза посоха','Staff Pose'),'badda konasana':('Баддха конасана','Связанный угол (бабочка)','Bound Angle Pose'),
 'janu sirsasana':('Джану ширшасана','Голова к колену','Head-to-Knee Forward Bend')}
for k,(sa,ru,en) in NAME_OVR.items():
    if k in base_rec: base_rec[k]=dict(base_rec[k], sa=sa, ru=ru, en=en, _orig=base_rec[k]['ru'])
for k in list(base_rec):
    b=base_rec[k]
    if k not in NAME_OVR and re.search(r'[:,]',b['ru']):
        base_rec[k]=dict(b, ru=re.split(r'\s*[:,]\s*',b['ru'])[0], _orig=b['ru'])
# порядок ID — по семействам
keys = sorted(keys, key=lambda k: (FAM.index(fam[k]), base_rec[k]['ru'].lower()))
old = dict(bid)
bid = {k: f'A-{i+1:04d}' for i, k in enumerate(keys)}
remap = {old[k]: bid[k] for k in keys}
def rid(i):
    if i in ('—', ''): return i
    b = i[:6]; return remap.get(b, b) + i[6:]
out = {k: (st, rid(i), key) for k, (st, i, key) in out.items()}

# где используется в приложении
seqs = {}
for line in open(sys.argv[2], encoding='utf-8'):
    sid, ids = line.rstrip('\n').split('\t'); seqs[sid] = ids.split(',')
USE = {'at_sn': 'Сурья Намаскар', 'at_cn': 'Чандра Намаскар', 'wu_seated': 'Разминка сидя', 'surya': '«Солнце»', 'chandra': '«Луна»'}
FREE = {'at_sn', 'at_cn', 'wu_seated'}
used = defaultdict(set)
for sid, ids in seqs.items():
    for a in ids:
        o = out.get(a)
        if o and o[2]: used[o[2]].add(sid)
BATCH1 = ['tadasana', 'urdva hastasana', 'uttanasana', 'sancalanasana', 'ado muka svanasana', 'astangasana', 'bujangasana', 'anjaneyasana',
          'caturanga dandasana', 'balasana', 'bitilasana', 'urdva muka svanasana', 'sukasana', 'dandasana', 'badda konasana', 'janu sirsasana']
ADV_ROOTS = ('kapotasana', 'danurasana', 'ustrasana', 'vrscikasana', 'vriscikasana', 'mayurasana', 'bakasana', 'koundinyasana', 'astavakrasana', 'tittibasana',
             'sirsasana', 'gerandasana', 'berundasana', 'natarajasana', 'hanumanasana', 'pada sirsasana', 'vriksasana')
def level(k):
    if k in BATCH1: return 'начальный'
    f = fam[k]
    if k in ('caturanga dandasana', 'sarvangasana', 'halasana', 'setu banda sarvangasana'): return 'средний'
    if f in ('Перевёрнутые', 'Балансы на руках'): return 'продвинутый'
    if any(k.endswith(r) for r in ADV_ROOTS) and f != 'Балансы на ногах': return 'продвинутый'
    if f in ('Восстанавливающие и расслабляющие', 'Лёжа на спине', 'На коленях'): return 'начальный'
    return 'средний'
LOAD = {'Стоячие': 'сила, баланс', 'Балансы на ногах': 'баланс, сила', 'Наклоны вперёд': 'гибкость', 'Прогибы назад': 'гибкость, сила',
        'Скрутки': 'гибкость', 'Боковые наклоны': 'гибкость', 'Перевёрнутые': 'сила, баланс', 'Балансы на руках': 'сила, баланс',
        'Сидячие и раскрытие тазобедренных': 'гибкость', 'Лёжа на спине': 'гибкость, расслабление', 'Лёжа на животе': 'сила',
        'На коленях': 'гибкость', 'Восстанавливающие и расслабляющие': 'расслабление'}
# противопоказания по семейству (Айенгар «Light on Yoga» и «Yoga for Holistic Health», Maran «Yoga Illustrated»,
# Yoga Journal; для перевёрнутых — Jasien et al., PLOS ONE 2015; для лёжа на спине при беременности — ACOG)
CONTRA = {
 'Стоячие': 'травмы коленей и голеностопов; при низком давлении и головокружении не задерживаться долго, стоять у стены',
 'Балансы на ногах': 'головокружение, низкое давление, свежие травмы голеностопа или колена — выполнять у стены',
 'Наклоны вперёд': 'острая грыжа межпозвонкового диска (особенно с круглой спиной), травма задней поверхности бедра; стоячие наклоны головой вниз — осторожно при глаукоме и высоком давлении',
 'Прогибы назад': 'острая боль в пояснице, спондилолистез, травмы шеи; глубокие прогибы — не при беременности, высоком давлении и мигрени',
 'Скрутки': 'беременность (только мягкие открытые скрутки), острые проблемы с межпозвонковыми дисками, недавние операции на животе',
 'Боковые наклоны': 'травма плеча (руку не поднимать), острая боль в спине или боку',
 'Перевёрнутые': 'повышенное давление, глаукома и отслоение сетчатки, травмы шеи, головная боль в момент практики, беременность без опыта; во время менструации традиционно не выполняют',
 'Балансы на руках': 'травмы запястий, локтей и плеч, туннельный синдром, беременность',
 'Сидячие и раскрытие тазобедренных': 'травмы коленей (не тянуть колено в лотос и сложные посадки), травма паха',
 'Лёжа на спине': 'со второй половины беременности не лежать долго на спине; при боли в шее — плед под голову',
 'Лёжа на животе': 'беременность, недавние операции на животе; при боли в пояснице — мягкий вариант',
 'На коленях': 'чувствительные или травмированные колени — плед под колени',
 'Восстанавливающие и расслабляющие': 'особых ограничений нет; при беременности — с опорами и на боку',
}
SOURCES = '«2100 Asanas» Д. Лакерды (санскрит, тип, взгляд), атлас Сидерского, карточки приложения (по книгам Айенгара и Марана), противопоказания по семействам — см. раздел «Источники»'

# карточки приложения (98) — к базовым асанам
cards_ru = json.load(open(sys.argv[3], encoding='utf-8'))
sys.path.insert(0, sys.argv[4]); import muscles as MU
CARD_IDS = {}
for f in os.listdir(os.path.join(sys.argv[4], 'data')):
    if f.endswith('.py') and f.startswith('b'):
        spec = __import__('data.' + f[:-3], fromlist=['CARDS']).CARDS
        for ck, v in spec.items(): CARD_IDS[ck] = v.get('ids', [])
import base_cards
for ck, (aids, _) in base_cards.CARDS.items(): CARD_IDS[ck] = aids
card_of_base = {}
for ck, aids in CARD_IDS.items():
    for a in aids:
        o = out.get(a.removesuffix('_m'))
        if o and o[2] and o[2] not in card_of_base: card_of_base[o[2]] = ck
MUSCLE_RU = {g: n for g, n in [('neck', 'шея'), ('shoulders', 'плечи'), ('chest', 'грудь'), ('upperback', 'верх спины'), ('lats', 'широчайшие'), ('biceps', 'бицепсы'),
             ('triceps', 'трицепсы'), ('forearms', 'предплечья'), ('abs', 'пресс'), ('obliques', 'косые мышцы живота'), ('lowerback', 'поясница'), ('glutes', 'ягодичные'),
             ('hipflexors', 'сгибатели бедра'), ('quads', 'четырёхглавые'), ('hamstrings', 'задняя поверхность бедра'), ('adductors', 'внутренняя поверхность бедра'),
             ('calves', 'икроножные'), ('shins', 'голени и стопы')]}

def gaze(r):
    m = re.search(r'Взгляд: ([^.]*)\.', r.get('long', '')); return m.group(1) if m else ''
def name3(r):
    return r['sa'] or '—', r['ru'], r['en']
def members(k):
    return [r for r in groups[k]] + [r for r in at if out.get(r['id'], ('', '', ''))[2] == k and r not in groups[k]]

# ---------- реестр ----------
with open(os.path.join(OUT, 'registry.csv'), 'w', encoding='utf-8-sig', newline='') as f:
    w = csv.writer(f, delimiter=';')
    w.writerow(['ID записи', 'Исходное название (рус.)', 'Английское', 'Санскрит', 'Статус', 'Итоговый ID', 'Базовая асана', 'Семейство', 'Синонимы', 'Источник', 'Описание в источнике'])
    for r in R:
        st, iid, k = out[r['id']]
        base = base_rec[k]['ru'] if k else ''
        syn = ''
        if st.startswith('Дубль') and k: syn = base
        w.writerow([r['id'], r['ru'], r['en'], r['sa'], st, iid, (bid[k] + ' ' + base) if k else '', fam.get(k, ''), syn, r['src'], (r['long'] or r['short'])[:300]])

# ---------- сводка ----------
cnt = Counter(v[0] for v in out.values())
summary = dict(records=len(R), bases=len(keys), variations=cnt['Вариация'], duplicates=cnt['Дубль'] + cnt['Дубль (другая сторона)'],
               duplicates_mirror=cnt['Дубль (другая сторона)'], not_asana=cnt['Не асана (связочное движение)'], doubtful=cnt['Сомнительно'],
               families={f: sum(1 for k in keys if fam[k] == f) for f in FAM})
json.dump(summary, open(os.path.join(OUT, 'summary.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

# ---------- данные по базовым и вариациям ----------
data = []
for k in keys:
    b = base_rec[k]; vs = []
    for r in members(k):
        st, iid, _ = out[r['id']]
        if st != 'Вариация': continue
        d = describe(r['ru'], b['ru'], fam[k])
        vs.append(dict(id=iid, source=r['id'], ru=r['ru'], en=r['en'], sanskrit=r['sa'], **d, gaze=gaze(r), note=(r['short'] if r['src'] != 'Лакерда' else '')))
    vs.sort(key=lambda v: v['id'])
    syn = sorted({r['ru'] for r in members(k) if out[r['id']][0].startswith('Дубль')} - {b['ru']})
    ck = card_of_base.get(k); card = cards_ru.get(ck) if ck else None
    mu = MU.M.get(ck) if ck else None
    if not mu or not mu[0]: mu = MB.get(bid[k])
    mg = (mu[0].split(), mu[1].split()) if mu else ([], [])
    for v in vs:
        vm = var_muscles(mg[0], mg[1], v['tags'])
        v['muscle_groups'] = vm
        v['muscles'] = ([MUSCLE_RU[g] for g in vm[0]], [MUSCLE_RU[g] for g in vm[1]])
    data.append(dict(id=bid[k], key=k, sanskrit=b['sa'], ru=b['ru'], en=b['en'], synonyms=syn, family=fam[k], level=level(k), load=LOAD[fam[k]],
                     used=[USE[s] for s in USE if s in used[k]], free=bool(used[k] & FREE), gaze=gaze(b), type=typ(b), source=b['id'],
                     short=(card['works'] if card else (b['short'] if b['src'] != 'Лакерда' else '')), card=ck, steps=(card or {}).get('steps'),
                     watch=(card or {}).get('watch'), easier=(card or {}).get('easier'), tip=(card or {}).get('tip'), avoid=(card or {}).get('avoid'),
                     muscles=([MUSCLE_RU[g] for g in mg[0]], [MUSCLE_RU[g] for g in mg[1]]) if mg[0] else None, muscle_groups=mg,
                     contra=CONTRA[fam[k]], variations=vs))
json.dump(dict(summary=summary, bases=data), open(os.path.join(OUT, 'catalog.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

# ---------- дерево ----------
L = ['# Дерево асан: семейство → базовая → вариации', '', f'Базовых асан: {len(keys)}, вариаций: {cnt["Вариация"]}. ID стабильны в пределах этой версии реестра.', '']
for f in FAM:
    ks = [d for d in data if d['family'] == f]
    if not ks: continue
    L += [f'## {f} ({len(ks)})', '']
    for d in ks:
        L.append(f'- **{d["id"]} {d["ru"]}** — {d["sanskrit"]} / {d["en"]} · вариаций: {len(d["variations"])}')
        for v in d['variations']:
            L.append(f'  - {v["id"]} {v["ru"]} — {v["role"]}')
    L.append('')
open(os.path.join(OUT, 'tree.md'), 'w', encoding='utf-8').write('\n'.join(L))

# ---------- карточки ----------
def base_card(d, full_ids):
    L = [f'### {d["id"]} {d["ru"]}', '']
    L += ['**Паспорт**', '',
          f'- Санскрит / русское / английское: {d["sanskrit"] or "—"} / {d["ru"]} / {d["en"]}',
          f'- Синонимы: {", ".join(d["synonyms"]) if d["synonyms"] else "нет"}',
          f'- Семейство: {d["family"]}; уровень (предварительно): {d["level"]}; нагрузка: {d["load"]}',
          f'- Где в приложении: {", ".join(d["used"]) if d["used"] else "нигде"}; бесплатная версия: {"да" if d["free"] else "нет"}',
          f'- Взгляд (по Лакерде): {d["gaze"] or "не указан"}', '']
    if d['id'] in full_ids:
        L += [f'Полная карточка по шаблону — в файле cards_batch1.md (партия 1).', '']
    if d['short']: L += [f'**Польза:** {d["short"]}', '']
    if d['steps']:
        L += ['**Вход (по карточке приложения):**', ''] + [f'{i+1}. {s}' for i, s in enumerate(d['steps'])] + ['']
    if d['muscles']:
        L += [f'**Мышцы:** основные — {", ".join(d["muscles"][0])}' + (f'; вспомогательные — {", ".join(d["muscles"][1])}' if d['muscles'][1] else ''), '']
    if d['watch']: L += [f'**Типичные ошибки:** {d["watch"]}', '']
    if d['easier']: L += [f'**Облегчение:** {d["easier"]}', '']
    if d['tip']: L += [f'**Совет:** {d["tip"]}', '']
    L += [f'**Противопоказания и предостережения:** {d["avoid"] + "; " if d["avoid"] else ""}{d["contra"]}. При сомнениях посоветуйтесь с врачом или опытным преподавателем.', '']
    if d['variations']:
        L += [f'**Вариации ({len(d["variations"])}):**', '']
        for v in d['variations']:
            L.append(f'- **{v["id"]} {v["ru"]}** ({v["sanskrit"] or "—"} / {v["en"]})')
            L.append(f'  - Что меняется: {"; ".join(v["what"])}.')
            L.append(f'  - Для кого: {v["role"]}.')
            if v['muscles'][0]: L.append(f'  - Мышцы: основные — {", ".join(v["muscles"][0])}' + (f'; вспомогательные — {", ".join(v["muscles"][1])}' if v['muscles'][1] else '') + '.')
            L.append(f'  - Замена базовой: {v["replace"]}')
            L.append(f'  - Дополнительно нельзя или осторожно: {"; ".join(v["extra"]) if v["extra"] else "сверх противопоказаний базовой — нет"}.')
            if v['note']: L.append(f'  - В атласе: {v["note"]}')
        L.append('')
    return L
full_ids = {bid[k] for k in BATCH1 if k in bid}
L = ['# Каталог асан «Мудря йога»: базовые асаны и вариации', '',
     'Краткие карточки всех базовых асан и карточки вариаций. Полные карточки по шаблону ТЗ (вход и выход с дыханием, ошибки, переходы, 3D) — '
     'в cards_batch1.md (партия 1: Сурья Намаскар, Чандра Намаскар, разминка сидя); следующие партии — по семействам.', '']
for f in FAM:
    ks = [d for d in data if d['family'] == f]
    if not ks: continue
    L += [f'## {f}', '']
    for d in ks: L += base_card(d, full_ids)
open(os.path.join(OUT, 'catalog.md'), 'w', encoding='utf-8').write('\n'.join(L))

# ---------- сомнительные и не асаны ----------
L = ['# Записи для ручной проверки', '', '## Сомнительные — не удалось однозначно отнести к базовой асане', '',
     '| ID записи | Название | Санскрит | Источник | Почему |', '|---|---|---|---|---|']
for r in R:
    st = out[r['id']][0]
    if st == 'Сомнительно':
        why = 'санскрит не распознан (служебная пометка вместо названия)' if r['src'] == 'Лакерда' else 'элемент методики Сидерского без явного аналога у Лакерды'
        L.append(f'| {r["id"]} | {r["ru"]} | {r["sa"] or "—"} | {r["src"]} | {why} |')
L += ['', '## Не асаны — связочные движения и дыхательные элементы', '', '| ID записи | Название | Источник |', '|---|---|---|']
for r in R:
    if out[r['id']][0].startswith('Не асана'): L.append(f'| {r["id"]} | {r["ru"]} | {r["src"]} |')
open(os.path.join(OUT, 'doubtful.md'), 'w', encoding='utf-8').write('\n'.join(L))
print(json.dumps(summary, ensure_ascii=False))
print('batch1', [(k, bid.get(k)) for k in BATCH1])
