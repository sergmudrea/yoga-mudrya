"""Проверка поз фигуры: пределы суставов и «висящие» опоры. Читает углы прямо из каталогов Kotlin
(AtlasCatalog, LibraryCatalog) и повторяет FigureGeometry. Отчёт — work/posecheck.json и вывод в консоль."""
import json
import math
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
CAT = os.path.join(ROOT, 'core/catalog/src/main/kotlin/ru/mudrya/yoga/catalog/')
B = dict(torso=56, neck=7, head=11, ua=28, fa=28, th=44, sh=42, ft=12, shh=10, hph=7)
KEYS = ['t', 'n', 'ua', 'fa', 'th', 'sh', 'ft', 'th2', 'sh2', 'ft2', 'ua2', 'fa2', 'ut']
LINE = re.compile(r'(?:Asana\(id = |a\()"(\w+)",\s*(?:nameRu = )?"([^"]*)".*?\bp\(([^()]*)\)')


def load():
    out = {}
    for f in ('AtlasCatalog.kt', 'LibraryCatalog.kt'):
        for ln, line in enumerate(open(CAT + f, encoding='utf-8'), 1):
            m = LINE.search(line)
            if not m: continue
            i, name, args = m.groups()
            parts = [a.strip() for a in args.split(',') if a.strip()]
            pos = [float(a) for a in parts if '=' not in a]
            kw = {a.split('=')[0].strip(): float(a.split('=')[1]) for a in parts if '=' in a}
            if len(pos) != 13: continue
            d = dict(zip(KEYS, pos)); d['front'] = kw.get('front', pos[13] if len(pos) > 13 else 0.0); d['scale'] = kw.get('spineScale', 1.0)
            out[i] = dict(id=i, name=name, file=f, line=ln, a=d)
    return out


def go(p, deg, ln):
    r = math.radians(deg); return (p[0] + math.cos(r) * ln, p[1] + math.sin(r) * ln)


def points(a):
    hip = (0.0, 0.0); half = B['torso'] / 2 * a['scale']
    waist = go(hip, a['t'], half); sh = go(waist, a['ut'], half); neck = go(sh, a['n'], B['neck']); head = go(neck, a['n'], B['head'])
    fv = max(0.0, min(1.0, a['front']))
    shN = go(sh, a['ut'] - 90, B['shh'] * fv); shF = go(sh, a['ut'] - 90, -B['shh'] * fv)
    hN = go(hip, a['t'] - 90, B['hph'] * fv); hF = go(hip, a['t'] - 90, -B['hph'] * fv)
    el = go(shN, a['ua'], B['ua']); wr = go(el, a['fa'], B['fa']); el2 = go(shF, a['ua2'], B['ua']); wr2 = go(el2, a['fa2'], B['fa'])
    kn = go(hN, a['th'], B['th']); an = go(kn, a['sh'], B['sh']); toe = go(an, a['ft'], B['ft'])
    kn2 = go(hF, a['th2'], B['th']); an2 = go(kn2, a['sh2'], B['sh']); toe2 = go(an2, a['ft2'], B['ft'])
    P = dict(hip=hip, waist=waist, sh=sh, neck=neck, head=head, el=el, wr=wr, el2=el2, wr2=wr2, kn=kn, an=an, toe=toe, kn2=kn2, an2=an2, toe2=toe2)
    lo = min(min(v[1] for v in P.values()), head[1] - B['head'])
    return {k: (v[0], v[1] - lo) for k, v in P.items()}


def rel(a, b, lo=-180):
    """b относительно a в (lo, lo + 360]."""
    d = (b - a - lo) % 360 + lo
    return d + 360 if d <= lo else d


def joints(a):
    """Углы суставов в виде сбоку (фигура смотрит вправо, углы против часовой от «вперёд»).
    Положительное сгибание колена, локтя, бедра и плеча — в сторону сгибания."""
    j = {}
    for s, (th, sh, ft, ua, fa) in {'R': ('th', 'sh', 'ft', 'ua', 'fa'), 'L': ('th2', 'sh2', 'ft2', 'ua2', 'fa2')}.items():
        j['knee' + s] = rel(a[sh], a[th], -90)            # сгибание колена: голень поворачивается по часовой
        j['elbow' + s] = rel(a[ua], a[fa], -90)           # сгибание локтя: предплечье против часовой
        j['ankle' + s] = rel(a[sh] + 90, a[ft])      # 0 — стопа под прямым углом; + тыльное сгибание
        j['hip' + s] = rel(a['t'] + 180, a[th], -100)  # 0 — нога продолжает корпус; + сгибание (бедро вперёд)
        j['shoulder' + s] = rel(a['ut'] + 180, a[ua], -100)  # 0 — рука вдоль корпуса; + сгибание (рука вперёд-вверх)
    j['spine'] = rel(a['t'], a['ut'])                # + прогиб назад
    j['neck'] = rel(a['ut'], a['n'])                 # + голова назад
    return j


LIM = {'knee': (-10, 195), 'elbow': (-15, 195), 'ankle': (-100, 35), 'hip': (-60, 200), 'shoulder': (-80, 200), 'spine': (-60, 110), 'neck': (-75, 85)}


def check(r):
    a = r['a']; issues = []
    if a['front'] <= 0.5:
        for k, v in joints(a).items():
            lo, hi = LIM[k.rstrip('RL')]
            if not lo <= v <= hi: issues.append(f'{k}={v:.0f} (норма {lo}..{hi})')
    P = points(a)
    # опоры, которые почти касаются пола, но висят: 1.5..9 единиц
    for k in ():
        if 1.5 < P[k][1] < 9 and not any(P[o][1] < 0.6 for o in (k,)):
            issues.append(f'{k} висит над полом на {P[k][1]:.1f}')
    if False and P['head'][1] - B['head'] > 1.5 and P['head'][1] - B['head'] < 7:
        issues.append(f'голова висит над полом на {P["head"][1]-B["head"]:.1f}')
    return issues


def report(R, path):
    """Список поз, которые стоит перерисовать вручную: вид сбоку, суставы за пределами нормы (кроме лотоса,
    где проекция сбоку неизбежно «ломает» колени)."""
    rows = []
    for i, r in R.items():  # noqa: E501
        a = r['a']
        if not i.startswith('lb_') or a['front'] > 0.5 or 'лотос' in r['name'].lower(): continue
        j = joints(a); bad = [f'{k} {v:.0f}°' for k, v in j.items() if not LIM[k.rstrip('RL')][0] <= v <= LIM[k.rstrip('RL')][1]]
        if bad and excess(a) >= 30: rows.append((round(excess(a)), i, r['name'], bad))
    rows.sort(reverse=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write('# Позы, которые стоит перерисовать\n\nАвтоматическая проверка рисунков фигуры (tools/asanas/posecheck.py): '
                'углы суставов в виде сбоку заметно за пределами нормы (суммарно от 30°). Только позы Лакерды (lb_): '
                'позы атласа (at_) проверены и поправлены вручную. Лотос и позы в виде спереди не проверяются. '
                'Суставы: R — правая сторона, L — левая; колено и локоть: + сгибание; бедро и плечо: + сгибание вперёд; стопа: + на себя.\n\n')
        f.write(f'Всего: {len(rows)}\n\n| Отклонение | ID | Поза | Что не так |\n|---|---|---|---|\n')
        for e, i, n, b in rows: f.write(f'| {e} | {i} | {n} | {", ".join(b)} |\n')
    return rows


if __name__ == '__main__':
    R = load()
    rep = {i: check(r) for i, r in R.items()}
    bad = {i: v for i, v in rep.items() if v}
    json.dump({i: dict(name=R[i]['name'], issues=v) for i, v in bad.items()}, open(os.path.join(HERE, 'work/posecheck.json'), 'w'), ensure_ascii=False, indent=1)
    from collections import Counter
    c = Counter(x.split('=')[0].split(' ')[0] for v in bad.values() for x in v)
    print(len(R), 'поз;', len(bad), 'с замечаниями'); print(c.most_common())
    for i in list(bad)[:int(sys.argv[1]) if len(sys.argv) > 1 else 0]: print(i, R[i]['name'], bad[i])


def excess(a):
    if a['front'] > 0.5: return 0.0
    e = 0.0
    for k, v in joints(a).items():
        lo, hi = LIM[k.rstrip('RL')]
        e += max(0, lo - v) + max(0, v - hi)
    return e


def reflect(a):
    """Та же картинка, отражённая по горизонтали: фигура снова смотрит вправо."""
    b = dict(a)
    for k in KEYS: b[k] = (180 - a[k]) % 360
    return b


def write(R, changed):
    """Записывает новые углы обратно в каталоги Kotlin (те же строки, тот же вызов p(...))."""
    by_file = {}
    for i in changed: by_file.setdefault(R[i]['file'], []).append(i)
    for f, ids in by_file.items():
        lines = open(CAT + f, encoding='utf-8').read().split('\n')
        for i in ids:
            r = R[i]; a = r['a']; ln = r['line'] - 1
            m = LINE.search(lines[ln]); assert m and m.group(1) == i, i
            old = m.group(3)
            kw = [x.strip() for x in old.split(',') if '=' in x]
            if a['front'] and not any(x.startswith('front') for x in kw) and len([x for x in old.split(',') if x.strip() and '=' not in x]) == 13:
                pass
            new = ', '.join(str(int(round(a[k])) % 360) for k in KEYS)
            extra = [x for x in kw]
            if a['front'] and not any(x.startswith('front') for x in extra): extra.append(f"front = {a['front']}")
            new = ', '.join([new] + extra)
            s, e = m.span(3)
            lines[ln] = lines[ln][:s] + new + lines[ln][e:]
        open(CAT + f, 'w', encoding='utf-8').write('\n'.join(lines))
