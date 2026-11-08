"""Рисунки для каталога: поза — плоская фигура из палочек и кружочков (как в приложении), и карта мышц на женском
и мужском силуэте спереди и сзади. Всё в SVG."""
import math
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'cards'))
import muscle_body as body  # noqa: E402

INK, FAR, FLOOR = '#2B2F38', '#A3A8B2', '#D9DBE0'


def pose_svg(f, w=150, h=120):
    """f — точки FigureGeometry.grounded (как в pts_all.json). Масштаб и пол — как в FigureCanvas."""
    pts = [f['hip'], f['waist'], f['sh'], f['neck'], f['head']] + f['near'] + f['far'] + f['arm'] + f['arm2']
    r = f['r']
    minx = min(p[0] for p in pts) - r; maxx = max(p[0] for p in pts) + r
    hgt = max(p[1] for p in pts) + r
    bottom = h * 0.12
    sc = min(w * 0.86 / max(maxx - minx, 1), (h - bottom - h * 0.08) / max(hgt, 1), h / 115)
    g = h - bottom; cx = w / 2 - (minx + maxx) / 2 * sc
    o = lambda p: (cx + p[0] * sc, g - p[1] * sc)
    def pl(ps, col, wd):
        return f'<polyline points="{" ".join("%.1f,%.1f" % o(p) for p in ps)}" fill="none" stroke="{col}" stroke-width="{wd:.2f}" stroke-linecap="round" stroke-linejoin="round"/>'
    limb = 6.5 * sc / 1.75; trunk = 9 * sc / 1.75
    far = INK if f['front'] > 0.5 else FAR
    s = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">',
         f'<line x1="{w*.06:.1f}" y1="{g+2*sc/1.75:.1f}" x2="{w*.94:.1f}" y2="{g+2*sc/1.75:.1f}" stroke="{FLOOR}" stroke-width="{4*sc/1.75:.2f}" stroke-linecap="round"/>',
         pl(f['far'], far, limb), pl(f['arm2'], far, limb)]
    if f['front'] > 0.05:
        s += [pl(f['shl'], INK, limb), pl(f['hpl'], INK, limb)]
    hp, wa, sh, nk = o(f['hip']), o(f['waist']), o(f['sh']), o(f['neck'])
    c1 = (2 * wa[0] - (hp[0] + sh[0]) / 2, 2 * wa[1] - (hp[1] + sh[1]) / 2)
    s.append(f'<path d="M{hp[0]:.1f},{hp[1]:.1f} Q{c1[0]:.1f},{c1[1]:.1f} {sh[0]:.1f},{sh[1]:.1f} L{nk[0]:.1f},{nk[1]:.1f}" fill="none" stroke="{INK}" stroke-width="{trunk:.2f}" stroke-linecap="round" stroke-linejoin="round"/>')
    s += [pl(f['near'], INK, limb), pl(f['arm'], INK, limb)]
    hx, hy = o(f['head'])
    s.append(f'<circle cx="{hx:.1f}" cy="{hy:.1f}" r="{r*sc:.1f}" fill="{INK}"/></svg>')
    return ''.join(s)


# силуэт: поперечный масштаб по высоте (женский — уже плечи и талия, шире таз; мужской — шире плечи и грудь)
WARP = {
    'f': [(0, 1.0), (56, 1.0), (70, 0.93), (110, 0.92), (175, 0.86), (215, 1.07), (250, 1.05), (300, 1.0), (440, 1.0)],
    'm': [(0, 1.0), (56, 1.0), (70, 1.08), (120, 1.06), (180, 0.99), (220, 0.96), (300, 1.0), (440, 1.0)],
}


def _k(sex, y):
    t = WARP[sex]
    for (y0, a), (y1, b) in zip(t, t[1:]):
        if y0 <= y <= y1:
            return a + (b - a) * (y - y0) / (y1 - y0)
    return 1.0


def _warp(pts, sex):
    return [(100 + (x - 100) * _k(sex, y), y) for x, y in pts]


MAIN, SUP, IDLE, PART, BODY, GAP = '#E0761C', '#F4B97A', '#C9CDD5', '#B9BEC8', '#E3E5EA', '#FFFFFF'


def body_svg(view, main, sup, sex, w=70):
    h = w * body.H / body.W
    k = w / body.W
    def poly(pts, fill, stroke, sw):
        return f'<polygon points="{" ".join("%.1f,%.1f" % (x * k, y * k) for x, y in _warp(pts, sex))}" fill="{fill}" stroke="{stroke}" stroke-width="{sw*k:.2f}" stroke-linejoin="round"/>'
    s = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{w:.0f}" height="{h:.0f}" viewBox="0 0 {w:.1f} {h:.1f}">']
    s += [poly(o, BODY, BODY, 3) for o in body.OUTS]
    s += [poly(o, PART, GAP, 1.5) for o in body.SIL[view]]
    for g, pts in body.polys(view):
        s.append(poly(pts, MAIN if g in main else SUP if g in sup else IDLE, GAP, 1.5))
    s.append('</svg>')
    return ''.join(s)


# мышцы вариации: базовые плюс то, что добавляет вариация
ADD = {'twist': ('obliques', ''), 'back': ('chest', 'lowerback'), 'bind': ('', 'shoulders chest'), 'oneleg': ('', 'glutes calves'),
       'toes': ('', 'calves'), 'nosupport': ('', 'abs'), 'onehand': ('forearms triceps', 'shoulders'), 'forearm': ('shoulders', 'forearms'),
       'invert': ('shoulders', 'neck'), 'side': ('obliques', 'lats'), 'lotus': ('', 'hipflexors adductors'), 'arms': ('', 'shoulders')}


def var_muscles(base_main, base_sup, tags):
    main = list(base_main); sup = list(base_sup)
    for t in tags:
        a, b = ADD.get(t, ('', ''))
        for g in a.split():
            if g not in main: main.append(g)
            if g in sup: sup.remove(g)
        for g in b.split():
            if g not in main and g not in sup: sup.append(g)
    return main[:5], sup[:5]
