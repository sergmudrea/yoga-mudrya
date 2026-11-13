"""PDF каталога асан с рисунками: у каждой базовой асаны и вариации — поза (фигура из палочек и кружочков, как в приложении)
и карта мышц спереди и сзади. Две версии: женский и мужской силуэт. HTML → work/catalog_<f|m>.html, печать — render.js."""
import html
import json
import os
import re
import sys

import markdown

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
D = os.path.join(ROOT, 'docs/asanas/')
W = os.path.join(HERE, 'work'); os.makedirs(W, exist_ok=True)
sys.path.insert(0, HERE)
from figures import pose_svg, body_svg, mirror_pts  # noqa: E402

cat = json.load(open(D + 'catalog.json', encoding='utf-8'))
PTS = {p['id']: p for p in json.load(open(os.path.join(HERE, 'pose_points.json'), encoding='utf-8'))}
E = html.escape
FAM = ['Стоячие', 'Балансы на ногах', 'Наклоны вперёд', 'Прогибы назад', 'Скрутки', 'Боковые наклоны', 'Перевёрнутые', 'Балансы на руках',
       'Сидячие и раскрытие тазобедренных', 'Лёжа на спине', 'Лёжа на животе', 'На коленях', 'Восстанавливающие и расслабляющие']


def pose(src, w, h):
    p = PTS.get(src)
    if p is None and src.endswith('_m') and src.removesuffix('_m') in PTS:
        p = mirror_pts(PTS[src.removesuffix('_m')])  # та же поза на другую сторону
    return pose_svg(p, w, h) if p else ''


def bodies(mg, sex, w):
    m, s = mg if mg else ([], [])
    return body_svg('front', m, s, sex, w) + body_svg('back', m, s, sex, w)


def figrow(src, mg, sex, pw, ph, bw):
    return f'<div class="fig">{pose(src, pw, ph)}<div class="bodies">{bodies(mg, sex, bw)}</div></div>'


def musc(m):
    if not m or not m[0]: return 'поза отдыха — мышцы расслаблены'
    return '<b class="mm">основные</b> ' + E(', '.join(m[0])) + ('; <b class="ms">вспомогательные</b> ' + E(', '.join(m[1])) if m[1] else '')


def base_html(b, sex, full):
    li = lambda k, v: f'<li><b>{k}:</b> {v}</li>'
    h = [f'<div class="base"><h3 id="{b["id"]}">{b["id"]} {E(b["ru"])}</h3>',
         figrow(b['source'], b['muscle_groups'], sex, 190, 150, 70),
         '<ul class="pass">',
         li('Санскрит / русское / английское', f'{E(b["sanskrit"] or "—")} / {E(b["ru"])} / {E(b["en"])}'),
         li('Синонимы', E(', '.join(b['synonyms'])) if b['synonyms'] else 'нет'),
         li('Семейство', f'{b["family"]}; уровень (предварительно): {b["level"]}; нагрузка: {b["load"]}'),
         li('Где в приложении', (', '.join(b['used']) if b['used'] else 'нигде') + f'; бесплатная версия: {"да" if b["free"] else "нет"}'),
         li('Взгляд (по Лакерде)', E(b['gaze'] or 'не указан')), li('Мышцы', musc(b['muscles'])), '</ul>']
    if b['id'] in full: h.append('<p class="note">Полная карточка по шаблону — в разделе «Полные карточки, партия 1».</p>')
    if b['short']: h.append(f'<p><b>Польза:</b> {E(b["short"])}</p>')
    if b['steps']: h.append('<p><b>Вход:</b></p><ol>' + ''.join(f'<li>{E(s)}</li>' for s in b['steps']) + '</ol>')
    for k, t in [('watch', 'Типичные ошибки'), ('easier', 'Облегчение'), ('tip', 'Совет')]:
        if b[k]: h.append(f'<p><b>{t}:</b> {E(b[k])}</p>')
    h.append(f'<p><b>Противопоказания и предостережения:</b> {E((b["avoid"] + "; ") if b["avoid"] else "")}{E(b["contra"])}. При сомнениях посоветуйтесь с врачом или опытным преподавателем.</p>')
    if b['variations']:
        h.append(f'<h4>Вариации ({len(b["variations"])})</h4>')
        for v in b['variations']:
            h.append(f'<div class="var">{figrow(v["source"], v.get("muscle_groups"), sex, 120, 92, 36)}<div class="vt">'
                     f'<div class="vh">{v["id"]} {E(v["ru"])}</div><div class="vs">{E(v["sanskrit"] or "—")} / {E(v["en"])}</div><ul>'
                     f'<li><b>Что меняется:</b> {E("; ".join(v["what"]))}.</li><li><b>Для кого:</b> {v["role"]}.</li>'
                     f'<li><b>Мышцы:</b> {musc(v.get("muscles"))}.</li>'
                     f'<li><b>Замена базовой:</b> {E(v["replace"])}</li>'
                     f'<li><b>Дополнительно нельзя или осторожно:</b> {E("; ".join(v["extra"])) if v["extra"] else "сверх противопоказаний базовой — нет"}.</li>'
                     + (f'<li><b>В атласе:</b> {E(v["note"])}</li>' if v['note'] else '') + '</ul></div></div>')
    h.append('</div>')
    return ''.join(h)


def build(sex):
    label = 'женский силуэт' if sex == 'f' else 'мужской силуэт'
    readme = markdown.markdown(open(D + 'README.md', encoding='utf-8').read(), extensions=['tables']).replace('<h1>', '<h1 class="part">', 1)
    b1 = markdown.markdown(open(D + 'cards_batch1.md', encoding='utf-8').read(), extensions=['tables'])
    byid = {b['id']: b for b in cat['bases']}
    def full_head(m):
        i = m.group(1); b = byid.get(i)
        fig = figrow(b['source'], b['muscle_groups'], sex, 220, 170, 80) if b else ''
        return f'<h2 id="full-{i}">{i}{m.group(2)}</h2>{fig}<p class="legend">{musc(b["muscles"]) if b else ""}</p>'
    b1 = re.sub(r'<h2>(A-\d{4})([^<]*)</h2>', full_head, b1)
    full = {b['id'] for b in cat['bases'] if f'id="full-{b["id"]}"' in b1}
    body_parts, toc = [], []
    for f in FAM:
        bs = [b for b in cat['bases'] if b['family'] == f]
        if not bs: continue
        body_parts.append(f'<h2 class="fam">{f}</h2>'); toc.append(f'<div class="tf">{f}</div>')
        for b in bs:
            body_parts.append(base_html(b, sex, full)); toc.append(f'<div class="tb"><a href="#{b["id"]}">{b["id"]} {E(b["ru"])}</a></div>')
    full_toc = ''.join(f'<div class="tb"><a href="#full-{i}">{i} {E(byid[i]["ru"])}</a></div>' for i in sorted(full, key=lambda i: re.search(f'id="full-{i}"', b1).start()))
    legend = (f'<div class="leg"><span class="sw" style="background:#E0761C"></span>основные мышцы '
              f'<span class="sw" style="background:#F4B97A"></span>вспомогательные <span class="sw" style="background:#C9CDD5"></span>не задействованы'
              f' · на рисунке позы <b style="color:#D23B32">правые</b> рука и нога красные, <b style="color:#2D6AD6">левые</b> — синие (в виде сбоку дальние светлее)</div>')
    css = open(os.path.join(HERE, 'style.css'), encoding='utf-8').read()
    doc = f"""<!doctype html><html lang="ru"><head><meta charset="utf-8"><style>{css}</style></head><body>
<div class="cover"><div class="t">Каталог асан</div><div class="s">«Мудря йога» · базовые асаны и вариации · {label}</div>
<div class="cv">{pose('at_pranam', 150, 140)}{pose('at_hastaut', 150, 140)}{pose('at_edog', 150, 140)}{pose('at_sarp', 150, 140)}</div>
<div class="d">2211 исходных записей · {len(cat['bases'])} базовых асан · {cat['summary']['variations']} вариаций<br>У каждой позы — рисунок и карта мышц<br><br>Ноябрь 2026</div></div>
<div class="sect"><h1>Содержание</h1><p><b>1.</b> Сводка и метод · <b>2.</b> Полные карточки, партия 1 · <b>3.</b> Базовые асаны и вариации по семействам</p>{legend}
<div class="tf">Полные карточки (партия 1)</div><div class="toc">{full_toc}</div><div class="toc">{''.join(toc)}</div></div>
{readme}<div class="sect">{legend}{b1}</div><div class="sect"><h1>Базовые асаны и вариации</h1>{legend}{''.join(body_parts)}</div></body></html>"""
    out = os.path.join(W, f'catalog_{sex}.html')
    open(out, 'w', encoding='utf-8').write(doc)
    return out


if __name__ == '__main__':
    for s in ('f', 'm'): print(build(s))
