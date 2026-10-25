#!/usr/bin/env python3
"""
Эмулятор из атласа → ассеты приложения (app/src/main/assets/emulator/).

Берёт из страницы атласа (сохранённый HTML) данные поз и объёмную марионетку как есть
и добавляет мост для приложения: window.Mudrya.go(id, mirror, ms) — плавный переход
в позу так же, как в атласе (опорные ладони и стопы не скользят), setTheme, resetView.
three.js — локальная копия (без сети), путь к пакету передаётся вторым аргументом.

  python3 tools/atlas/build_emulator.py <atlas.html> <three/package>
"""
import pathlib, re, shutil, sys

src = pathlib.Path(sys.argv[1]).read_text(encoding='utf-8')
three = pathlib.Path(sys.argv[2])
root = pathlib.Path(__file__).resolve().parents[2]
out = root / 'app/src/main/assets/emulator'
out.mkdir(parents=True, exist_ok=True)
lines = src.split('\n')

# 1) Классический скрипт: данные и функции поз — до определения сетов включительно.
start = next(i for i, l in enumerate(lines) if l.strip() == '<script>' and 'const TOC' in lines[i + 1]) + 1
end = next(i for i, l in enumerate(lines) if l.startswith('var EXTRA='))
classic = '\n'.join(lines[start:end + 1])
classic += '\nfunction poseOf(st){return getPose(st[1],st[2]);}\n'

# 2) Модуль марионетки: createFigure3D и помощники; boot — из атласа, без разметки страницы.
m0 = next(i for i, l in enumerate(lines) if l.startswith('<script type="module">')) + 1
m_end = next(i for i in range(m0, len(lines)) if lines[i].startswith('</script>'))
module = '\n'.join(lines[m0:m_end])
glue = module.index('async function boot(){')
thumbs = module.index('  /* ---- thumbnails ---- */')
head, boot = module[:glue], module[glue:thumbs]

def sub(text, old, new):
    if old not in text:
        raise SystemExit(f'не найдено в атласе: {old[:70]}')
    return text.replace(old, new, 1)

boot = sub(boot, "const host=document.getElementById('stage3d'); if(!host)return;", "const host=document.getElementById('stage');")
boot = sub(boot, "const canvas=document.getElementById('big3d');", "const canvas=document.getElementById('c');")
boot = re.sub(r"const fit=\(\)=>\{[^\n]*?\};", "const fit=()=>{view.resize(host.clientWidth||600,host.clientHeight||600);if(window.__refit)window.__refit();};", boot, count=1)
boot = sub(boot, "view.controls.addEventListener('start',()=>{view.userMoved=true;$('view3d').hidden=false;});",
           "view.controls.addEventListener('start',()=>{view.userMoved=true;});")
boot += r"""
  /* ---- мост для приложения ---- */
  let lastKey='';
  window.__refit=()=>{if(cur)frameCam(cur.center,camYaw);};
  window.Mudrya={
    ready:true,
    go(id,mirror,ms){const key=id+'|'+(mirror?1:0);if(key===lastKey&&ms>0)return;lastKey=key;
      try{go(getPose(id,mirror?1:0),id,ms||0);}catch(e){console.warn('pose',id,e);}},
    setTheme(t){fig.setTheme(t);document.body.style.background=t==='dark'?'#0F1115':'#f3f1ec';},
    resetView(){view.userMoved=false;if(cur)frameCam(cur.center,camYaw);},
    has(id){return !!(P[id]||(window.JP&&JP[id]));}
  };
  if(window.AndroidBridge)AndroidBridge.onReady();
}
boot();
"""

html = f"""<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Mudrya emulator</title>
<style>html,body{{margin:0;height:100%;background:#0F1115;overflow:hidden}}#stage{{position:fixed;inset:0}}#c{{width:100%;height:100%;display:block;touch-action:none}}</style>
<script type="importmap">{{"imports":{{"three":"./three.module.min.js","three/addons/":"./"}}}}</script>
</head><body><div id="stage"><canvas id="c"></canvas></div>
<!-- Сгенерировано tools/atlas/build_emulator.py из «Атласа нулевого цикла» — не править руками. -->
<script src="atlas-data.js"></script>
<script type="module" src="marionette.js"></script>
</body></html>
"""
(out / 'index.html').write_text(html, encoding='utf-8')
(out / 'atlas-data.js').write_text(classic, encoding='utf-8')
(out / 'marionette.js').write_text(head + boot, encoding='utf-8')
(out / 'controls').mkdir(exist_ok=True)
shutil.copy(three / 'build/three.module.min.js', out / 'three.module.min.js')
shutil.copy(three / 'examples/jsm/controls/OrbitControls.js', out / 'controls/OrbitControls.js')
shutil.copy(three / 'LICENSE', out / 'THREE-LICENSE')
print('ok', {p.name: p.stat().st_size for p in out.rglob('*') if p.is_file()})
