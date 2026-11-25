"""Каталог асан одним JSON-файлом с легендой: docs/asanas/asanas.json.

Кодировка UTF-8 без экранирования кириллицы. Перечислимые поля (семейство, уровень, нагрузка, положение тела,
роль вариации, мышцы…) записаны короткими латинскими кодами; расшифровка каждого кода на русском и английском —
в разделе "legend". Источник — catalog.json (emit.py), registry.csv и углы фигуры из каталогов приложения."""
import csv
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
D = os.path.join(ROOT, 'docs/asanas/')
sys.path.insert(0, HERE)
from posecheck import load as load_poses, KEYS  # noqa: E402

cat = json.load(open(D + 'catalog.json', encoding='utf-8'))
POSES = load_poses()

FAMILY = {
    'standing': ('Стоячие', 'Standing'),
    'leg_balance': ('Балансы на ногах', 'Standing balances'),
    'forward_bend': ('Наклоны вперёд', 'Forward bends'),
    'backbend': ('Прогибы назад', 'Backbends'),
    'twist': ('Скрутки', 'Twists'),
    'side_bend': ('Боковые наклоны', 'Side bends'),
    'inversion': ('Перевёрнутые', 'Inversions'),
    'arm_balance': ('Балансы на руках', 'Arm balances'),
    'seated_hip': ('Сидячие и раскрытие тазобедренных', 'Seated and hip openers'),
    'supine': ('Лёжа на спине', 'Supine'),
    'prone': ('Лёжа на животе', 'Prone'),
    'kneeling': ('На коленях', 'Kneeling'),
    'restorative': ('Восстанавливающие и расслабляющие', 'Restorative and relaxation'),
}
LEVEL = {'beginner': ('начальный', 'beginner'), 'intermediate': ('средний', 'intermediate'), 'advanced': ('продвинутый', 'advanced')}
LOAD = {'flexibility': ('гибкость', 'flexibility'), 'strength': ('сила', 'strength'), 'balance': ('баланс', 'balance'),
        'relaxation': ('расслабление', 'relaxation')}
POSITION = {  # положение тела — из поля «тип» в источнике
    'standing': ('стоя', 'standing'), 'kneeling': ('на коленях', 'kneeling'), 'hands_knees': ('на четвереньках', 'on hands and knees'),
    'seated': ('сидя', 'seated'), 'supine': ('лёжа на спине', 'lying on the back'), 'prone': ('лёжа на животе', 'lying on the belly'),
    'side_lying': ('лёжа на боку', 'lying on the side'), 'inverted': ('перевёрнутая', 'inverted'),
    'arm_balance': ('баланс на руках', 'balance on the hands'), 'forearm_balance': ('баланс на предплечьях', 'balance on the forearms'),
    'one_leg': ('баланс на одной ноге', 'balance on one leg'),
}
ACTION = {
    'forward_bend': ('наклон вперёд', 'forward bend'), 'backbend': ('прогиб', 'backbend'), 'gentle_backbend': ('мягкий прогиб', 'gentle backbend'),
    'twist': ('скручивание', 'twist'), 'side_bend': ('боковой наклон', 'side bend'), 'bind': ('захват', 'bind'), 'core': ('работа кора', 'core'),
    'balance': ('баланс', 'balance'),
}
MUSCLE = {
    'neck': ('шея', 'neck'), 'shoulders': ('плечи (дельтовидные)', 'shoulders (deltoids)'), 'chest': ('грудные', 'chest (pectorals)'),
    'upperback': ('верх спины (трапеция, ромбовидные)', 'upper back (trapezius, rhomboids)'), 'lats': ('широчайшие', 'lats'),
    'biceps': ('бицепсы', 'biceps'), 'triceps': ('трицепсы', 'triceps'), 'forearms': ('предплечья', 'forearms'),
    'abs': ('пресс', 'abs (rectus abdominis)'), 'obliques': ('косые мышцы живота', 'obliques'),
    'lowerback': ('поясница (разгибатели спины)', 'lower back (erector spinae)'), 'glutes': ('ягодичные', 'glutes'),
    'hipflexors': ('сгибатели бедра (подвздошно-поясничная)', 'hip flexors (iliopsoas)'), 'quads': ('четырёхглавые', 'quadriceps'),
    'hamstrings': ('задняя поверхность бедра', 'hamstrings'), 'adductors': ('внутренняя поверхность бедра (приводящие)', 'adductors'),
    'calves': ('икроножные', 'calves'), 'shins': ('передняя поверхность голени', 'shins (tibialis anterior)'),
}
ROLE = {
    'easier': ('облегчение', 'easier — for beginners or limited mobility'),
    'easier_supported': ('облегчение с опорой', 'easier, with a prop or support'),
    'supported': ('с опорой', 'with a prop or support'),
    'harder': ('усложнение', 'harder — for experienced practitioners'),
    'alt_focus': ('другой акцент', 'same level, different emphasis'),
}
REPLACES = {'yes': ('Да — может заменить базовую', 'can replace the base pose'),
            'partial': ('Частично — та же основа, другой акцент', 'partially, same base with a different emphasis'),
            'no': ('Нет — это усложнение, не замена', 'no, a harder pose rather than a substitute')}
VTAG = {
    'arms': ('другое положение рук', 'different arm position'), 'half': ('половинная / неполная версия', 'half or partial version'),
    'bind': ('захват (руки в замке или за стопу)', 'bind'), 'twist': ('добавлено скручивание', 'twist added'),
    'oneleg': ('на одной ноге / одна нога работает', 'one leg'), 'prep': ('подготовка к позе', 'preparation'),
    'side': ('боковое направление', 'to the side'), 'toes': ('на носках / захват пальцев', 'on the toes or holding the toes'),
    'lotus': ('ноги в лотосе или полулотосе', 'legs in lotus or half lotus'), 'invert': ('перевёрнутая версия', 'inverted version'),
    'legs': ('другое положение ног', 'different leg position'), 'deep': ('глубже базовой', 'deeper than the base'),
    'wide': ('широкая стойка', 'wide stance'), 'knees': ('с опорой на колени', 'on the knees'), 'back': ('с прогибом', 'with a backbend'),
    'forearm': ('на предплечьях', 'on the forearms'), 'prop': ('с пропсом (блок, ремень, стена, стул)', 'with a prop'),
    'onehand': ('на одной руке', 'on one hand'), 'nosupport': ('без опоры', 'without support'), 'lying': ('лёжа', 'lying'),
    'dyn': ('в динамике', 'dynamic'), 'seated': ('сидя', 'seated'),
}
STATUS = {'Базовая': 'base', 'Вариация': 'variation', 'Дубль': 'duplicate', 'Дубль (другая сторона)': 'other_side',
          'Не асана (связочное движение)': 'not_asana', 'Сомнительно': 'doubtful'}
STATUS_L = {'base': ('базовая асана', 'base pose'), 'variation': ('вариация базовой', 'variation of a base pose'),
            'duplicate': ('дубль: та же поза под другим номером', 'duplicate of another record'),
            'other_side': ('та же поза на другую сторону', 'same pose on the other side'),
            'not_asana': ('не асана: связочное движение между позами', 'not a pose: a linking movement between poses'),
            'doubtful': ('сомнительная: не удалось уверенно отнести к базовой', 'doubtful: could not be grouped with confidence')}

rev = lambda tbl: {v[0]: k for k, v in tbl.items()}
FAM_R, LEV_R, LOAD_R, ROLE_R = rev(FAMILY), rev(LEVEL), rev(LOAD), rev(ROLE)


def legend_of(tbl):
    return {k: {'ru': v[0], 'en': v[1]} for k, v in tbl.items()}


def type_codes(t):
    t = (t or '').lower()
    pos, act = [], []
    rules = [('лёжа на спине (on the side)', 'side_lying', pos), ('on hands and knees', 'hands_knees', pos), ('hands and knees', 'hands_knees', pos),
             ('on the knees', 'kneeling', pos), ('лёжа на спине', 'supine', pos), ('лёжа на животе', 'prone', pos),
             ('баланс на одной ноге', 'one_leg', pos), ('fore', 'forearm_balance', pos), ('elbow', 'forearm_balance', pos),
             ('баланс на руках', 'arm_balance', pos), ('перевёрнут', 'inverted', pos), ('сидя', 'seated', pos), ('стоя', 'standing', pos),
             ('мягкий прогиб', 'gentle_backbend', act), ('наклон вперёд', 'forward_bend', act), ('прогиб', 'backbend', act),
             ('скручивание', 'twist', act), ('боковой наклон', 'side_bend', act), ('захват', 'bind', act), ('кор', 'core', act)]
    for needle, code, out in rules:
        if needle in t and code not in out:
            if code == 'standing' and ('kneeling' in pos or 'hands_knees' in pos): continue
            if code == 'arm_balance' and 'forearm_balance' in pos: continue
            if code == 'backbend' and 'gentle_backbend' in act: continue
            if code == 'supine' and 'side_lying' in pos: continue
            out.append(code)
    if t.strip() == 'баланс' or ', баланс' in t: act.append('balance')
    return pos, act


def split_list(s):
    return [x.strip().rstrip('.') for x in re.split(r';\s*', s or '') if x.strip()]


def pose_of(src):
    r = POSES.get(src) or POSES.get(src.removesuffix('_m'))
    if not r: return None
    a = r['a']
    names = ['torso', 'neck', 'upper_arm_r', 'forearm_r', 'thigh_r', 'shin_r', 'foot_r', 'thigh_l', 'shin_l', 'foot_l', 'upper_arm_l', 'forearm_l', 'chest']
    out = {n: int(round(a[k])) % 360 for n, k in zip(names, KEYS)}
    out['view'] = 'front' if a['front'] > 0.5 else 'side'
    if src not in POSES: out['other_side'] = True
    return out


def muscles(mg):
    m, s = mg if mg else ([], [])
    return {'primary': m, 'secondary': s}


def replaces(text):
    head, _, rest = text.partition('.')
    return {'answer': {'Да': 'yes', 'Частично': 'partial', 'Нет': 'no'}[head.strip()], 'note': rest.strip()}


def names(o):
    return {'sanskrit': o['sanskrit'] or None, 'ru': o['ru'], 'en': o['en']}


def base_json(b):
    pos, act = type_codes(b['type'])
    card = None
    if b['steps'] or b['short']:
        card = {'benefit': b['short'] or None, 'steps': b['steps'] or [], 'common_mistakes': b['watch'],
                'easier_option': b['easier'], 'tip': b['tip'], 'app_card_id': b['card']}
    return {
        'id': b['id'],
        'names': names(b),
        'synonyms': b['synonyms'],
        'family': FAM_R[b['family']],
        'level': LEV_R[b['level']],
        'load': [LOAD_R[x.strip()] for x in b['load'].split(',')],
        'position': pos,
        'action': act,
        'gaze': b['gaze'] or None,
        'muscles': muscles(b['muscle_groups']),
        'contraindications': split_list(b['contra']),
        'cautions': split_list(b['avoid']),
        'app': {'used_in': b['used'], 'free': b['free']},
        'card': card,
        'source': {'record_id': b['source'], 'book': 'atlas' if b['source'].startswith('at_') else 'lacerda'},
        'figure': pose_of(b['source']),
        'variations': [{
            'id': v['id'],
            'names': names(v),
            'role': ROLE_R[v['role']],
            'replaces_base': replaces(v['replace']),
            'changes': v['what'],
            'tags': v['tags'],
            'gaze': v['gaze'] or None,
            'muscles': muscles(v.get('muscle_groups')),
            'extra_contraindications': [x.rstrip('.') for x in v['extra']],
            'source_note': v['note'] or None,
            'source': {'record_id': v['source'], 'book': 'atlas' if v['source'].startswith('at_') else 'lacerda'},
            'figure': pose_of(v['source']),
        } for v in b['variations']],
    }


def records():
    rows = list(csv.reader(open(D + 'registry.csv', encoding='utf-8-sig'), delimiter=';'))
    head, rows = rows[0], rows[1:]
    out = []
    for r in rows:
        d = dict(zip(head, r))
        out.append({'record_id': d['ID записи'], 'status': STATUS[d['Статус']], 'catalog_id': d['Итоговый ID'] or None,
                    'base_id': (d['Базовая асана'].split(' ')[0] or None) if d['Базовая асана'] else None,
                    'names': {'sanskrit': d['Санскрит'] or None, 'ru': d['Исходное название (рус.)'], 'en': d['Английское'] or None},
                    'book': 'atlas' if d['ID записи'].startswith('at_') else 'lacerda'})
    return out


def build():
    s = cat['summary']
    legend = {
        'about': {
            'ru': 'Каталог асан приложения «Мудря йога»: базовые асаны, сгруппированные по семействам, и их вариации. '
                  'Все коды расшифрованы ниже на русском и английском. Кодировка файла — UTF-8.',
            'en': 'Pose catalogue of the Mudrya Yoga app: base poses grouped by family, with their variations. '
                  'Every code is explained below in Russian and English. File encoding: UTF-8.'},
        'ids': {
            'base': 'A-NNNN — базовая асана (A-0071 — собака мордой вниз)',
            'variation': 'A-NNNN-VNN — вариация базовой асаны A-NNNN',
            'record_id': 'исходная запись: lb_B<номер> — книга Д. Лакерды «2100 Asanas» (номер позы в книге), at_<ключ> — атлас приложения по методу Сидерского; '
                         'суффикс _m — та же поза на другую сторону'},
        'fields': {
            'names': 'sanskrit — санскрит латиницей (null, если нет), ru — русское, en — английское',
            'synonyms': 'другие названия, под которыми поза встречается в источниках',
            'family': 'семейство (раздел legend.family)', 'level': 'уровень, предварительно (legend.level)',
            'load': 'что тренирует поза (legend.load), может быть несколько',
            'position': 'положение тела по источнику (legend.position)', 'action': 'что делает позвоночник и руки (legend.action)',
            'gaze': 'куда направлен взгляд (дришти) по Лакерде; null — не указан',
            'muscles': 'primary — основные мышцы, secondary — вспомогательные; коды в legend.muscle',
            'contraindications': 'противопоказания и предостережения, по одному на строку',
            'cautions': 'дополнительные предупреждения из карточки приложения',
            'app': 'used_in — сеты приложения, где поза встречается; free — есть ли в бесплатной версии',
            'card': 'текст карточки приложения (только у поз, для которых она есть, иначе null): польза, шаги входа, типичные ошибки, облегчение, совет',
            'source': 'record_id — исходная запись, book — источник (legend.book)',
            'figure': 'углы фигуры из палочек, как в приложении (legend.figure); null — рисунка нет',
            'variations': 'вариации базовой асаны',
            'variations[].role': 'для кого вариация (legend.role)',
            'variations[].replaces_base': 'answer — может ли заменить базовую (legend.replaces), note — пояснение',
            'variations[].changes': 'что меняется по сравнению с базовой',
            'variations[].tags': 'коды отличий (legend.variation_tag)',
            'variations[].extra_contraindications': 'противопоказания сверх противопоказаний базовой',
            'variations[].source_note': 'описание позы в источнике',
            'records': 'все 2211 исходных записей и что с каждой стало (legend.status)'},
        'family': legend_of(FAMILY), 'level': legend_of(LEVEL), 'load': legend_of(LOAD),
        'position': legend_of(POSITION), 'action': legend_of(ACTION), 'muscle': legend_of(MUSCLE),
        'role': legend_of(ROLE), 'replaces': legend_of(REPLACES), 'variation_tag': legend_of(VTAG), 'status': legend_of(STATUS_L),
        'book': {'lacerda': {'ru': 'Д. Лакерда, «2100 Asanas»', 'en': 'Daniel Lacerda, 2100 Asanas'},
                 'atlas': {'ru': 'атлас приложения по методу А. Сидерского', 'en': 'app atlas, after A. Sidersky'}},
        'figure': {
            'ru': 'Углы в градусах, 0 — вперёд (куда смотрит фигура), 90 — вверх, 180 — назад, 270 — вниз; отсчёт против часовой стрелки. '
                  'Каждый угол — направление сегмента от верхнего сустава к нижнему: torso — от таза к талии, chest — от талии к плечам, '
                  'neck — шея и голова, upper_arm и forearm — плечо и предплечье, thigh, shin, foot — бедро, голень, стопа. '
                  'Суффикс _r — правая сторона (на рисунке красная), _l — левая (синяя). view: side — вид сбоку, фигура смотрит вправо; '
                  'front — вид спереди. other_side: true — поза на другую сторону: правые и левые конечности поменять местами.',
            'en': 'Angles in degrees: 0 forward (where the figure faces), 90 up, 180 back, 270 down, counter-clockwise. Each angle is the direction of a '
                  'segment from its upper joint: torso hip→waist, chest waist→shoulders, neck neck and head. _r is the right side (red), _l the left (blue). '
                  'view: side (facing right) or front. other_side: true means swap right and left limbs.'},
    }
    meta = {'title': 'Каталог асан «Мудря йога»', 'version': '2026-11-13', 'encoding': 'UTF-8',
            'counts': {'source_records': s['records'], 'bases': s['bases'], 'variations': s['variations'], 'duplicates': s['duplicates'],
                       'not_asana': s['not_asana'], 'doubtful': s['doubtful']},
            'note': 'Уровень и противопоказания предварительные; при сомнениях советуйтесь с врачом или опытным преподавателем.'}
    bases = [base_json(b) for b in cat['bases']]
    return {'meta': meta, 'legend': legend, 'asanas': bases, 'records': records()}


if __name__ == '__main__':
    d = build()
    out = D + 'asanas.json'
    json.dump(d, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
    print(out, os.path.getsize(out) // 1024, 'KB')
