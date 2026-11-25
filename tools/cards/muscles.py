#!/usr/bin/env python3
"""Карта мышц: какие группы мышц работают в позе (основные и вспомогательные) и стилизованный силуэт
спереди и сзади → core/engine/.../MuscleMap.kt. Силуэт — tools/cards/muscle_body.py (полигоны 200×440).
Разметка поз по описаниям «что даёт» из трёх книг (Maran, Айенгар): основные — где поза работает сильнее всего
(укрепляет или растягивает), вспомогательные — что работает меньше."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import muscle_body as body  # noqa: E402

GROUPS = ['neck', 'shoulders', 'chest', 'upperback', 'lats', 'biceps', 'triceps', 'forearms', 'abs', 'obliques',
          'lowerback', 'glutes', 'hipflexors', 'quads', 'hamstrings', 'adductors', 'calves', 'shins']

# карточка: (основные, вспомогательные)
M = {
    'abpp': ('hamstrings lowerback', 'hipflexors shoulders'),
    'armsup': ('shoulders lats', 'abs calves'),
    'baddhapadma': ('chest shoulders adductors', 'lowerback'),
    'bharadvaja': ('obliques lowerback', 'shoulders glutes'),
    'bigtoe': ('hamstrings calves', 'adductors'),
    'boat': ('abs hipflexors', 'quads lowerback'),
    'bound': ('adductors hipflexors', 'lowerback'),
    'boundfold': ('adductors lowerback', 'hamstrings'),
    'boundhands': ('chest shoulders', 'upperback'),
    'bow': ('quads chest lowerback', 'hipflexors shoulders glutes'),
    'bridge': ('glutes hamstrings lowerback', 'quads chest'),
    'camel': ('quads hipflexors chest', 'lowerback abs'),
    'cat': ('lowerback abs', 'neck upperback'),
    'chair': ('quads glutes', 'shoulders lowerback calves'),
    'chat': ('triceps chest abs', 'shoulders forearms'),
    'child': ('lowerback glutes', 'shoulders lats'),
    'cobra': ('lowerback chest', 'triceps abs'),
    'cowface': ('triceps shoulders glutes', 'chest'),
    'crescent': ('obliques lats', 'shoulders'),
    'croc': ('lowerback', 'neck'),
    'dancer': ('quads hipflexors shoulders', 'glutes calves chest'),
    'downhero': ('quads lowerback', 'shoulders lats'),
    'eagle': ('adductors glutes upperback', 'quads calves shoulders'),
    'easy': ('lowerback', 'adductors neck'),
    'edog': ('hamstrings calves shoulders', 'lats triceps'),
    'eight': ('triceps chest', 'lowerback'),
    'extcat': ('glutes lowerback shoulders', 'abs'),
    'eyeneedle': ('glutes', 'lowerback hamstrings'),
    'fish': ('chest neck abs', 'lowerback upperback'),
    'gate': ('obliques lats adductors', 'hamstrings'),
    'goddess': ('quads adductors glutes', 'shoulders calves'),
    'halfboat': ('abs hipflexors', 'quads'),
    'halflift': ('hamstrings lowerback', 'calves'),
    'halflocust': ('glutes lowerback hamstrings', ''),
    'halflotus': ('hipflexors adductors', 'lowerback'),
    'halfmoon': ('glutes quads obliques', 'adductors shoulders calves'),
    'halfshoulder': ('neck upperback abs', 'shoulders'),
    'handtoe': ('hamstrings quads hipflexors', 'abs calves'),
    'headknee': ('hamstrings lowerback', 'calves obliques'),
    'headstand': ('shoulders abs neck', 'forearms upperback lowerback'),
    'hero': ('quads shins', 'lowerback'),
    'jathara': ('obliques abs lowerback', 'glutes'),
    'karna': ('upperback lowerback hamstrings', 'neck'),
    'kneeschest': ('lowerback glutes', ''),
    'legraise': ('abs hipflexors', 'quads'),
    'legsup': ('hamstrings calves', 'lowerback'),
    'locust': ('lowerback glutes hamstrings', 'upperback shoulders'),
    'lotus': ('adductors hipflexors', 'lowerback shins'),
    'lunge': ('hipflexors quads', 'glutes hamstrings'),
    'marichi1': ('hamstrings shoulders', 'lowerback chest'),
    'marichi3': ('obliques lowerback', 'chest glutes'),
    'matsyendra': ('obliques lowerback glutes', 'chest neck'),
    'neck': ('neck', 'upperback'),
    'pasch': ('hamstrings lowerback', 'calves'),
    'pigeon': ('glutes hipflexors', 'quads lowerback'),
    'plank': ('abs shoulders triceps', 'quads chest forearms'),
    'plough': ('upperback lowerback hamstrings', 'neck shoulders'),
    'prayer': ('chest forearms', 'shoulders'),
    'purvo': ('glutes hamstrings triceps', 'chest shoulders lowerback'),
    'pyramid': ('hamstrings calves', 'hipflexors shoulders'),
    'raisedbound': ('shoulders lats', 'forearms'),
    'reclbound': ('adductors hipflexors', 'chest'),
    'revprayer': ('forearms shoulders chest', 'upperback'),
    'revsideangle': ('obliques quads glutes', 'hamstrings shoulders'),
    'revtriangle': ('hamstrings obliques', 'lowerback glutes shoulders'),
    'rockbaby': ('glutes hipflexors', 'adductors'),
    'rocking': ('lowerback abs', 'upperback'),
    'shava': ('', ''),
    'shoulderstand': ('neck upperback abs', 'shoulders triceps lowerback'),
    'siddha': ('adductors hipflexors', 'lowerback'),
    'sideangle': ('quads obliques adductors', 'glutes shoulders lats'),
    'sphinx': ('lowerback', 'chest abs shoulders'),
    'squat': ('adductors glutes calves', 'quads lowerback'),
    'staff': ('lowerback hamstrings abs', 'quads calves'),
    'stbackbend': ('chest abs hipflexors', 'lowerback shoulders'),
    'stmudra': ('hamstrings shoulders chest', 'calves lowerback'),
    'supinetwist': ('obliques lowerback', 'chest glutes'),
    'suptakona': ('hamstrings adductors lowerback', 'neck'),
    'suptavira': ('quads hipflexors abs', 'shins lowerback'),
    'tablebal': ('glutes abs lowerback', 'shoulders hamstrings'),
    'tad': ('quads abs', 'calves glutes'),
    'thightwist': ('obliques glutes', 'lowerback'),
    'thunderbolt': ('quads shins', 'lowerback'),
    'tree': ('glutes calves adductors', 'abs quads'),
    'triang': ('hamstrings quads', 'lowerback shins'),
    'triangle': ('hamstrings obliques adductors', 'quads shoulders'),
    'twist': ('obliques', 'lowerback chest'),
    'upavistha': ('adductors hamstrings', 'lowerback'),
    'updog': ('chest abs hipflexors', 'triceps shoulders lowerback'),
    'uttan': ('hamstrings calves lowerback', 'neck'),
    'viparita': ('hamstrings lowerback', 'calves neck'),
    'vipdanda': ('chest shoulders abs', 'lowerback quads'),
    'warrior': ('quads adductors shoulders', 'glutes hipflexors'),
    'warrior1': ('quads hipflexors shoulders', 'glutes calves chest'),
    'wheel': ('chest shoulders quads', 'glutes triceps lowerback abs'),
    'wide': ('hamstrings adductors', 'lowerback calves'),
    'widetwist': ('hamstrings obliques adductors', 'lowerback'),
    'yogamudra': ('lowerback shoulders', 'chest hipflexors'),
}


def check(cards):
    errs = []
    for k, (p, s) in M.items():
        for g in (p + ' ' + s).split():
            if g not in GROUPS:
                errs.append(f'{k}: unknown group {g}')
        if set(p.split()) & set(s.split()):
            errs.append(f'{k}: group both main and supporting')
    errs += [f'no muscles for card {c}' for c in sorted(set(cards) - set(M))]
    errs += [f'unknown card {c}' for c in sorted(set(M) - set(cards))]
    return errs


def kt_poly(pts):
    return 'floatArrayOf(' + ', '.join(f'{x}f, {y}f' for x, y in pts) + ')'


def emit(path):
    L = ['// Сгенерировано tools/cards/muscles.py. Не редактировать вручную.',
         '@file:Suppress("LargeClass", "MaxLineLength")', '',
         'package ru.mudrya.yoga.engine', '',
         '/** Карта мышц: группы, разметка поз (основные и вспомогательные) и стилизованный силуэт 200×440 спереди и сзади. */',
         'object MuscleMap {',
         '    const val WIDTH = 200f', '    const val HEIGHT = 440f', '',
         '    val GROUPS: List<String> = listOf(' + ', '.join(f'"{g}"' for g in GROUPS) + ')', '',
         '    data class Muscles(val main: List<String>, val supporting: List<String>)',
         '    class Shape(val group: String?, val points: FloatArray)', '',
         '    /** Мышцы для карточки позы; пусто — поза для отдыха, карты нет. */',
         '    fun forCard(card: String): Muscles? = byCard[card]?.takeIf { it.main.isNotEmpty() }', '',
         '    private val byCard: Map<String, Muscles> = mapOf(']
    for k in sorted(M):
        p, s = M[k]
        L.append(f'        "{k}" to Muscles(listOf({", ".join(chr(34) + g + chr(34) for g in p.split())}), listOf({", ".join(chr(34) + g + chr(34) for g in s.split())})),')
    L.append('    )')
    L.append('')
    for view in ('front', 'back'):
        L.append(f'    /** Вид {"спереди" if view == "front" else "сзади"}: сначала части тела (group = null), потом мышцы. */')
        L.append(f'    val {view}: List<Shape> = listOf(')
        for o in body.OUTS:
            L.append(f'        Shape(null, {kt_poly(o)}),')
        for o in body.SIL[view]:
            L.append(f'        Shape("", {kt_poly(o)}),')
        for g, pts in body.polys(view):
            L.append(f'        Shape("{g}", {kt_poly(pts)}),')
        L.append('    )')
        L.append('')
    L.append('}')
    open(path, 'w', encoding='utf-8').write('\n'.join(L) + '\n')


if __name__ == '__main__':
    root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    import json
    cards = json.load(open(os.path.join(root, 'app/src/main/assets/cards/en.json'), encoding='utf-8')).keys()
    e = check(cards)
    if e:
        sys.exit('\n'.join(e))
    emit(os.path.join(root, 'core/engine/src/main/kotlin/ru/mudrya/yoga/engine/MuscleMap.kt'))
    print('cards', len(M), 'front', len(body.polys('front')), 'back', len(body.polys('back')))
