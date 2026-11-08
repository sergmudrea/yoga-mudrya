import markdown,re,sys
import os
ROOT=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
D=os.path.join(ROOT,'docs/asanas/')
os.chdir(os.path.dirname(os.path.abspath(__file__)))
md=lambda f: markdown.markdown(open(D+f,encoding='utf-8').read(), extensions=['tables'])
readme=md('README.md').replace('<h1>','<h1 class="part">',1)
b1=md('cards_batch1.md'); cat=md('catalog.md')
b1=re.sub(r'<h2>(A-\d{4})([^<]*)</h2>', lambda m: f'<h2 id="full-{m.group(1)}">{m.group(1)}{m.group(2)}</h2>', b1)
cat=re.sub(r'<h3>(A-\d{4})([^<]*)</h3>', lambda m: f'<h3 id="{m.group(1)}">{m.group(1)}{m.group(2)}</h3>', cat)
toc=[]
for m in re.finditer(r'<h2>([^<]*)</h2>|<h3 id="(A-\d{4})">([^<]*)</h3>', cat):
    if m.group(1): toc.append(f'<div class="tf">{m.group(1)}</div>')
    else: toc.append(f'<div class="tb"><a href="#{m.group(2)}">{m.group(3)}</a></div>')
full=[f'<div class="tb"><a href="#full-{m.group(1)}">{m.group(1)}{m.group(2)}</a></div>' for m in re.finditer(r'<h2 id="full-(A-\d{4})">A-\d{4}([^<]*)</h2>', b1)]
css=open('style.css').read()
doc=f"""<!doctype html><html lang="ru"><head><meta charset="utf-8"><style>{css}</style></head><body>
<div class="cover"><div class="t">Каталог асан</div><div class="s">«Мудря йога» · базовые асаны и вариации</div>
<div class="d">2211 исходных записей · 235 базовых асан · 1818 вариаций<br>Партия 1: полные карточки Сурья и Чандра Намаскар, разминки сидя<br><br>Ноябрь 2026</div></div>
<div class="sect"><h1>Содержание</h1><p><b>1.</b> Сводка и метод · <b>2.</b> Полные карточки, партия 1 · <b>3.</b> Каталог базовых асан и вариаций по семействам</p>
<div class="tf">Полные карточки (партия 1)</div><div class="toc">{''.join(full)}</div><div class="toc">{''.join(toc)}</div></div>
{readme}<div class="sect">{b1}</div><div class="sect">{cat}</div></body></html>"""
open(os.path.join('work','catalog.html'),'w',encoding='utf-8').write(doc); print(len(toc),len(full))
