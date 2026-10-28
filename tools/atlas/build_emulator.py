#!/usr/bin/env python3
"""
Эмулятор из атласа → ассеты приложения (app/src/main/assets/emulator/).

Берёт из страницы атласа (сохранённый HTML) данные поз и объёмную марионетку как есть
и добавляет мост для приложения: window.Mudrya.go(id, mirror, ms) — плавный переход
в позу так же, как в атласе (опорные ладони и стопы не скользят), setTheme, resetView.
three.js — локальная копия (без сети), путь к пакету передаётся вторым аргументом.

  python3 tools/atlas/build_emulator.py <atlas.html> <three/package> <esbuild>

Марионетка собирается esbuild'ом в один обычный (не модульный) скрипт вместе с three.js:
так WebView не зависит от поддержки importmap и MIME-типов для ES-модулей.
"""
import pathlib, re, shutil, subprocess, sys, tempfile

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
# Зеркало поз библиотеки: кроме рук и ног меняются местами цели кистей/стоп, а наклон и скрутка таза — по знаку.
classic = classic.replace(
    "if(o.sp)o.sp=[o.sp[0],-o.sp[1],-o.sp[2]];",
    "if(o.sp)o.sp=[o.sp[0],-o.sp[1],-o.sp[2]];if(o.pp)o.pp=[o.pp[0],-(o.pp[1]||0),-(o.pp[2]||0)];sw('tL','tR');sw('gL','gR');"
    "for(const k of ['tL','tR','gL','gR'])if(o[k]&&o[k].ref&&/[LR]$/.test(o[k].ref))o[k]={...o[k],ref:o[k].ref.replace(/L$/,'#').replace(/R$/,'L').replace('#','R')};", 1)
assert "sw('tL','tR')" in classic
# Позы приложения при зеркале не разворачиваются лицом в другую сторону (как позы атласа): поворот сохраняется.
classic = classic.replace("function getPose(id,m){if(window.JP&&JP[id]){const j=m?mirJ(JP[id]):JP[id];",
    "function getPose(id,m){if(window.JP&&JP[id]){const j=m?mirJ(JP[id]):JP[id];if(m&&window.KEEPYAW&&KEEPYAW[id]&&JP[id].root)j.root=[j.root[0],j.root[1],JP[id].root[2]];", 1)
assert 'KEEPYAW[id]' in classic
# Заготовки библиотеки, у которых после аудита была неверная геометрия (правка по книге Лакерды):
_PRESETS = [
    # поза ребёнка: торс ложится на бёдра — наклон всего тела вперёд, иначе бёдра торчат вверх
    ("var CHILD=(o)=>VIR(mg({hL:[150,4,0],hR:[150,4,0],pp:[-15,0,0],sp:[35,0,0],nk:[20,0,0]},o||{}));",
     "var CHILD=(o)=>VIR(mg({root:[90,0,0],hL:[150,4,0],hR:[150,4,0],pp:[-20,0,0],sp:[35,0,0],nk:[25,0,0]},o||{}));"),
    # позы на руках (ворона и производные): ладони на полу под плечами, стопы над полом
    ("var CRW=(o)=>mg({ab:1,root:[60,0,0],pp:[30,0,0],hL:[120,15,0],hR:[120,15,0],kL:150,kR:150,aL:-40,aR:-40,nk:[-30,0,0],c:['hL','hR']},arms('dn',{s:[60,10,0],e:20}),o||{});",
     "var CRWP={p:[0.17,-0.12,0.42],ref:'chest',hd:[0,1,0],pn:[0,0,1],pole:[0,-1,0]};"
     "var CRW=(o)=>mg({ab:1,root:[80,0,0],pp:[0,0,0],hL:[145,24,0],hR:[145,24,0],kL:160,kR:160,aL:30,aR:30,sp:[25,0,0],nk:[-45,0,0],c:['hL','hR']},{tL:CRWP,tR:CRWP,hm:{L:'floor',R:'floor'}},o||{});"),
    # поза бесконечности: лёжа на правом боку (правая рука под головой), левая нога вверх
    ("var INFS=(o)=>INF(mg(arm('R','up',{s:[170,0,0],e:140}),o||{}));",
     "var INFS=(o)=>{const q=INF(mg(arm('R','up',{s:[170,0,0],e:140}),o||{}));q.root=[q.root[0],-q.root[1],q.root[2]];return q;};"),
    # мост: плечи и голова на полу, таз поднят, стопы на полу
    ("var BRG=(o)=>mg({root:[-120,0,0],hL:[-60,8,0],hR:[-60,8,0],kL:70,kR:70,aL:20,aR:20,nk:[50,0,0],c:['fL','fR']},arms('dn',{s:[10,10,0]}),o||{});",
     "var BRG=(o)=>mg({root:[-145,0,0],hL:[-60,8,0],hR:[-60,8,0],kL:75,kR:75,aL:20,aR:20,nk:[55,0,0],c:['fL','fR']},arms('dn',{s:[-50,10,0]}),o||{});"),
    # рыба: таз и ноги на полу, грудь поднята, макушка на полу
    ("var FISH=(o)=>SUP(mg({pp:[45,0,0],sp:[-75,0,0],nk:[-55,0,0]},arms('dn',{s:[0,10,0],e:60}),o||{}));",
     "var FISH=(o)=>SUP(mg({pp:[42,0,0],sp:[-30,0,0],nk:[-80,0,0]},arms('dn',{s:[0,10,0],e:60}),o||{}));"),
]
_PRESETS += [
    # боковые позы на руках: ноги уходят вбок вместе с тазом (крен), грудь развёрнута обратно к полу
    ("var SIDEC=(o)=>CRW(mg({root:[60,0,0],pp:[30,0,-70],hL:[110,-10,0],hR:[110,-10,0],kL:130,kR:130},o||{}));",
     "var SIDEC=(o)=>CRW(mg({root:[85,85,0],pp:[0,0,85],hL:[110,-10,0],hR:[110,-10,0],kL:130,kR:130,aL:-30,aR:-30},o||{}));"),
    ("var KOUN=(o)=>CRW(mg({root:[70,0,0],pp:[20,0,-60],hL:[95,-15,0],hR:[95,-15,0],kL:0,kR:0,aL:10,aR:10},arms('dn',{s:[40,10,0],e:90}),o||{}));",
     "var KOUN=(o)=>CRW(mg({root:[85,85,0],pp:[0,0,85],hL:[95,-15,0],hR:[95,-15,0],kL:0,kR:0,aL:-20,aR:-20},o||{}));"),
]
for _a, _b in _PRESETS:
    assert _a in classic, _a[:60]
    classic = classic.replace(_a, _b, 1)
# Позы, исправленные по книге после аудита (tools/atlas/app_poses.js): внутри блока библиотеки, где есть mg/arms/FOOT.
_fix = (root / 'tools/atlas/app_poses.js').read_text(encoding='utf-8')
_anchor = "JP.pranam=mg({root:[0,0,90],hL:[0,3,4],hR:[0,3,4]},AP?arms('pr'):{});"
assert _anchor in classic
classic = classic.replace(_anchor, _anchor + '\n' + _fix, 1)


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

# ---- пальцы с фалангами и замки пальцев (дополнение приложения к марионетке атласа) ----
# Наклон вперёд во фронтальных позах (sc<1) шёл назад, на спину: знак поворота торса.
head = sub(head, "const qLean=Q().setFromAxisAngle(V3(1,0,0),-lean);", "const qLean=Q().setFromAxisAngle(V3(1,0,0),lean);")
head = sub(head, "if(lean){W.neck=[rotL(dir2(t1)).applyAxisAngle(X,-0.2),Lt];W.head=[rotL(dir2(t1)).applyAxisAngle(X,-0.4),Lt];}",
           "if(lean){W.neck=[rotL(dir2(t1)).applyAxisAngle(X,0.2),Lt];W.head=[rotL(dir2(t1)).applyAxisAngle(X,0.4),Lt];}")
head = sub(head, "const fist={L:false,R:false};", r"""const fist={L:false,R:false};
  /* пальцы: четыре по три фаланги и большой из двух; форма кисти задаёт сгибание */
  const shape={L:'open',R:'open'};
  const PH=[[.040,.026,.019],[.044,.028,.020],[.041,.026,.019],[.031,.020,.016]],TH=[.034,.028];
  const CURL={open:{c:[6,10,6],sp:.06,t:[12,12]},floor:{c:[2,2,0],sp:.12,t:[4,0]},fist:{c:[88,100,70],sp:0,t:[40,55]},
    lock:{c:[62,72,40],sp:.03,t:[6,12]},namaste:{c:[0,0,0],sp:0,t:[0,6]}};
  const LOCKM=mk('#e8b64c');LOCKM.emissive=new T.Color('#5a3d00');
  const FING={};
  for(const s of ['L','R']){FING[s]={f:PH.map(row=>row.map(L=>add(capG(.0082,L),M[s]))),t:TH.map(L=>add(capG(.0098,L),M[s]))};}
  const segTo=(o,a,b,dir,mat)=>{o.position.copy(a).add(b).multiplyScalar(.5);o.quaternion.setFromUnitVectors(Y,dir);if(o.material!==mat)o.material=mat;};""")
head = sub(head, "const f=fist[s];const hl=f?.06:.095, hw=f?.05:.047, ht=f?.045:.022;", "const f=fist[s];const hl=f?.06:.058, hw=f?.05:.047, ht=f?.045:.024;")
head = sub(head, "const hc=j['W'+s].clone().add(hd.clone().multiplyScalar(f?.05:.085));", "const hc=j['W'+s].clone().add(hd.clone().multiplyScalar(f?.05:.055));")
head = sub(head, "      if(apply)P['hand'+s].scale.set(ht,hl,hw);", r"""      if(apply)P['hand'+s].scale.set(ht,hl,hw);
      {const sh=shape[s]||'open',C=CURL[sh]||CURL.open,lock=sh==='lock',mat=lock?LOCKM:M[s];
       const fz=V3().crossVectors(pn,hd).normalize(),g=s==='R'?1:-1;
       const knuck=j['W'+s].clone().add(hd.clone().multiplyScalar((f?.05:.055)+hl*.85));
       for(let i=0;i<4;i++){
         let p=knuck.clone().add(fz.clone().multiplyScalar((i-1.5)*.0205+(lock&&s==='L'?.01:0)));
         const d=hd.clone().add(fz.clone().multiplyScalar((i-1.5)*C.sp)).normalize();let a=0;
         for(let k=0;k<3;k++){a+=C.c[k]*DEG;const dir=d.clone().multiplyScalar(Math.cos(a)).add(pn.clone().multiplyScalar(Math.sin(a))).normalize();
           const e=p.clone().add(dir.clone().multiplyScalar(PH[i][k]));if(apply)segTo(FING[s].f[i][k],p,e,dir,mat);low('A_'+s+'h',Math.min(p.y,e.y)-.008);p=e;}}
       let p=j['W'+s].clone().add(hd.clone().multiplyScalar(.035)).add(fz.clone().multiplyScalar(-g*.03)).add(pn.clone().multiplyScalar(sh==='floor'?-.004:.012));
       const d0=hd.clone().multiplyScalar(.75).add(fz.clone().multiplyScalar(-g*.55)).add(pn.clone().multiplyScalar(sh==='floor'?-.05:.25)).normalize();let a=0;
       for(let k=0;k<2;k++){a+=C.t[k]*DEG;const dir=d0.clone().multiplyScalar(Math.cos(a)).add(pn.clone().multiplyScalar(Math.sin(a))).normalize();
         const e=p.clone().add(dir.clone().multiplyScalar(TH[k]));if(apply)segTo(FING[s].t[k],p,e,dir,mat);low('A_'+s+'h',Math.min(p.y,e.y)-.009);p=e;}}""")
head = sub(head, "fist.L=!!(hands&&hands.L==='fist');fist.R=!!(hands&&hands.R==='fist');",
           "fist.L=!!(hands&&hands.L==='fist');fist.R=!!(hands&&hands.R==='fist');shape.L=(hands&&hands.L)||'open';shape.R=(hands&&hands.R)||'open';")

boot = sub(boot, "f.hands[sd[A]]=h?(h.t==='fist'?'fist':'open'):'open';",
           "f.hands[sd[A]]=h?({fist:'fist',lock:'lock',lockrev:'lock',namaste:'namaste',floor:'floor',floorb:'floor'}[h.t]||'open'):'open';")
# ---- переходы без изломов: если сустав в середине перехода сгибается сильнее, чем в обеих позах,
# переход считается вторым способом (поворот каждого сегмента по кратчайшей дуге) и берётся лучший ----
# Опора, которую поза отпускает (или набирает), тянула кисть или стопу к полу всю середину перехода —
# локоть и колено складывались «на излом». Теперь опора отпускается в первой трети перехода
# и набирается в последней.
boot = sub(boot, "else if(A.ik&&A.ik[key])ik[key]={p:A.ends[key],w:1-e};else ik[key]={p:B.ends[key],w:e};}",
           "else if(A.ik&&A.ik[key])ik[key]={p:A.ends[key],w:Math.pow(Math.max(0,1-e/0.35),2)};else ik[key]={p:B.ends[key],w:Math.pow(Math.max(0,(e-0.65)/0.35),2)};}")
boot = sub(boot, "      else{TW0={};for(const n in A.TW)TW0[n]=A.TW[n].clone().slerp(B.TW[n],e);}",
           "      else if(mode==='H')TW0=slerpLocal(A.TW,B.TW,e);\n      else{TW0={};for(const n in A.TW)TW0[n]=A.TW[n].clone().slerp(B.TW[n],e);}")
boot = sub(boot, "const mode=A.kind==='J'&&B.kind==='J'", "let mode=A.kind==='J'&&B.kind==='J'")
boot = sub(boot, "    const at=k=>{\n      const e=ease(k);", "    const atM=(k,mode)=>{\n      const e=ease(k);")
boot = sub(boot, "      camYaw=A.cam+(B.cam-A.cam)*e;frameCam(lerpFr(A.center,centerB,e),camYaw);};\n", r"""      camYaw=A.cam+(B.cam-A.cam)*e;frameCam(lerpFr(A.center,centerB,e),camYaw);};
    const at=k=>atM(k,mode);
    if(mode!=='Q'){
      const sc=m=>{const rows=[];for(let j=0;j<=8;j++){atM(j/8,m);const P={};for(const q of fig.points())P[q.name]=q.v;rows.push(BENDS.map(t=>bendOf(P,t)));}
        let worst=0;for(let t=0;t<BENDS.length;t++){const lim=Math.max(rows[0][t],rows[8][t]);for(let j=1;j<8;j++)worst=Math.max(worst,rows[j][t]-lim);}return worst;};
      const s0=sc(mode);if(s0>25){let best=s0,bm=mode;for(const m of ['H','Q']){const v=sc(m);if(v<best-10){best=v;bm=m;}}mode=bm;}}
    else{const s0=(()=>{const rows=[];for(let j=0;j<=8;j++){atM(j/8,'Q');const P={};for(const q of fig.points())P[q.name]=q.v;rows.push(BENDS.map(t=>bendOf(P,t)));}
        let w=0;for(let t=0;t<BENDS.length;t++){const lim=Math.max(rows[0][t],rows[8][t]);for(let j=1;j<8;j++)w=Math.max(w,rows[j][t]-lim);}return w;})();
      if(s0>25)mode='H';}
""")
boot = sub(boot, "  function makeTransition(toPose,toId){", r"""  const BENDS=[['pelvis','waist','chest'],['waist','chest','head'],['hipL','kneeL','ankleL'],['hipR','kneeR','ankleR'],
    ['shoulderL','elbowL','wristL'],['shoulderR','elbowR','wristR'],['waist','hipL','kneeL'],['waist','hipR','kneeR']];
  const bendOf=(P,[a,b,c])=>P[b].clone().sub(P[a]).angleTo(P[c].clone().sub(P[b]))*180/Math.PI;
  /* поворот каждого сустава относительно родителя по кратчайшей дуге: сгибы идут ровно от позы к позе */
  const PARENT={lumbar:'pelvis',chest:'lumbar',neck:'chest',head:'neck',uarmL:'chest',farmL:'uarmL',handL:'farmL',uarmR:'chest',farmR:'uarmR',handR:'farmR',
    thighL:'pelvis',shinL:'thighL',footL:'shinL',thighR:'pelvis',shinR:'thighR',footR:'shinR'};
  const ORDER=['pelvis','lumbar','chest','neck','head','uarmL','farmL','handL','uarmR','farmR','handR','thighL','shinL','footL','thighR','shinR','footR'];
  function slerpLocal(TA,TB,e){const out={};
    for(const n of ORDER){const p=PARENT[n];
      if(!p){out[n]=TA[n].clone().slerp(TB[n],e);continue;}
      const la=TA[p].clone().invert().multiply(TA[n]),lb=TB[p].clone().invert().multiply(TB[n]);
      out[n]=out[p].clone().multiply(la.slerp(lb,e));}
    for(const n in TA)if(!out[n])out[n]=TA[n].clone().slerp(TB[n],e);
    return out;}
  function makeTransition(toPose,toId){""")
boot = sub(boot, "const host=document.getElementById('stage3d'); if(!host)return;", "const host=document.getElementById('stage');")
boot = sub(boot, "const canvas=document.getElementById('big3d');", "const canvas=document.getElementById('c');")
boot = re.sub(r"const fit=\(\)=>\{[^\n]*?\};", "const fit=()=>{view.resize(host.clientWidth||600,host.clientHeight||600);if(window.__refit)window.__refit();};", boot, count=1)
boot = sub(boot, "view.controls.addEventListener('start',()=>{view.userMoved=true;$('view3d').hidden=false;});",
           "view.controls.addEventListener('start',()=>{view.userMoved=true;});")
boot += r"""
  /* ---- мост для приложения ---- */
  let lastKey='';
  window.__refit=()=>{if(cur)frameCam(cur.center,camYaw);};
  /* отладка переходов: кадры точек фигуры при переходе A → B (для проверки изломов) */
  window.__trans=(aId,aM,bId,bM,n)=>{cur=null;go(getPose(aId,aM),aId,0);const tr=makeTransition(getPose(bId,bM),bId);const out=[];
    for(let j=0;j<=n;j++){tr.at(j/n);out.push(fig.points().map(q=>[q.name,+q.v.x.toFixed(4),+q.v.y.toFixed(4),+q.v.z.toFixed(4)]));}
    tr.finish();return out;};
  window.__frame=(aId,aM,bId,bM,k)=>{cur=null;go(getPose(aId,aM),aId,0);const tr=makeTransition(getPose(bId,bM),bId);tr.at(k);view.render();};
  window.Mudrya={
    ready:true,
    go(id,mirror,ms,hands){const key=id+'|'+(mirror?1:0)+'|'+(hands||'');if(key===lastKey&&ms>0)return;lastKey=key;
      try{let pose=getPose(id,mirror?1:0);
        /* положение кистей из приложения (замок, ладони вместе) — для поз библиотеки */
        if(hands&&pose.jp)pose={...pose,jp:{...pose.jp,hm:{L:hands,R:hands}}};
        go(pose,id,ms||0);}catch(e){console.warn('pose',id,e);}},
    hands(id){try{const st=solveState(getPose(id,0),id);return JSON.stringify(st.hands);}catch(e){return '';}},
    setTheme(t){fig.setTheme(t);document.body.style.background=t==='dark'?'#0F1115':'#f3f1ec';},
    resetView(){view.userMoved=false;if(cur)frameCam(cur.center,camYaw);},
    setYaw(d){view.yaw=d;view.userMoved=false;if(cur)frameCam(cur.center,camYaw);},
    has(id){return !!(P[id]||(window.JP&&JP[id]));}
  };
  if(window.AndroidBridge)AndroidBridge.onReady();
}
boot();
"""

# ---- реалистичная модель (tools/atlas/skin.mjs) поверх решателя: кожа повторяет повороты сегментов ----
head = sub(head, "import {OrbitControls} from 'three/addons/controls/OrbitControls.js';",
           "import {OrbitControls} from 'three/addons/controls/OrbitControls.js';\nimport {createSkin} from './skin.mjs';")
head = sub(head, "  let J=null, root=V3(), lastTW=null;", "  let J=null, root=V3(), lastTW=null, skin=null; const skins={};")
head = sub(head, "    return mins;}\n  function regionMins()", "    if(apply&&skin)skin.update(TW,j,shape);\n    return mins;}\n  function regionMins()")
head = sub(head, "floorM.color.set(pal.floor);matM.map=stripeTex(pal);", "for(const k in skins)skins[k].setTheme(t);floorM.color.set(pal.floor);matM.map=stripeTex(pal);")
head = sub(head, "  return {scene,setTheme,", """  /* реалистичная модель поверх марионетки: решатель тот же, рисуется кожа */
  /* модели: 'model' — женская (model.glb), 'male' — мужская (model_m.glb, грузится по запросу); 'doll' — марионетка */
  const SKIN_URL={model:'model.glb',male:'model_m.glb'};
  async function loadSkin(url,key='model'){const s=await createSkin(T,scene,{REST,DIM,url});s.setTheme(theme||'light');s.active=false;skins[key]=s;return s;}
  async function setFigure(kind){
    if(kind!=='doll'&&!skins[kind]&&SKIN_URL[kind]){try{await loadSkin(SKIN_URL[kind],kind);}catch(e){console.warn('model',kind,e);kind='doll';}}
    if(kind!=='doll'&&!skins[kind])kind='doll';
    for(const k in skins)skins[k].active=k===kind;skin=kind==='doll'?null:skins[kind];doll.visible=!skin;if(J)layout(lastTW,J,true);}
  return {scene,setTheme,loadSkin,setFigure,""")
boot = sub(boot, "  if(window.AndroidBridge)AndroidBridge.onReady();\n}",
           "  try{await fig.setFigure('model');}catch(e){console.warn('model unavailable, keeping the doll',e);}\n  view.render();window.Mudrya.loaded=true;\n  if(window.AndroidBridge)AndroidBridge.onReady();\n}")
boot = sub(boot, "    has(id){return !!(P[id]||(window.JP&&JP[id]));}", "    has(id){return !!(P[id]||(window.JP&&JP[id]));},\n    setFigure(k){fig.setFigure(k).then(()=>view.render());}")

# ---- переходы по очереди (таз и ноги → корпус → руки, голова), продолжение с середины перехода, отладка кожи ----
import json as _json
for _part, _a, _b in _json.loads((root / 'tools/atlas/emulator_patches.json').read_text(encoding='utf-8')):
    if _part == 'head':
        head = sub(head, _a, _b)
    else:
        boot = sub(boot, _a, _b)

esbuild = sys.argv[3] if len(sys.argv) > 3 else 'esbuild'
html = """<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Mudrya emulator</title>
<style>html,body{margin:0;height:100%;background:#0F1115;overflow:hidden}#stage{position:fixed;inset:0}#c{width:100%;height:100%;display:block;touch-action:none}</style>
</head><body><div id="stage"><canvas id="c"></canvas></div>
<!-- Сгенерировано tools/atlas/build_emulator.py из «Атласа нулевого цикла» — не править руками. -->
<script>window.onerror=function(m,s,l){if(window.AndroidBridge&&AndroidBridge.onError)AndroidBridge.onError(String(m)+' @'+l);};</script>
<script src="atlas-data.js"></script>
<script src="marionette.js"></script>
</body></html>
"""
for old in ['three.module.min.js', 'controls/OrbitControls.js', 'THREE-LICENSE']:
    f = out / old
    if f.exists():
        f.unlink()
if (out / 'controls').exists():
    shutil.rmtree(out / 'controls')
(out / 'index.html').write_text(html, encoding='utf-8')
(out / 'atlas-data.js').write_text(classic, encoding='utf-8')
# Исходник марионетки (ES-модуль) — для сборки и для tools/atlas/library_poses.mjs.
src_mod = root / 'tools/atlas/marionette.src.mjs'
src_mod.write_text(head + boot, encoding='utf-8')
if True:
    subprocess.run([esbuild, str(src_mod), '--bundle', '--format=iife', '--minify', '--target=chrome80',
                    f'--alias:three={three}/build/three.module.js',
                    f'--alias:three/addons={three}/examples/jsm',
                    '--legal-comments=none', f'--outfile={out / "marionette.js"}'], check=True)
shutil.copy(three / 'LICENSE', out / 'THREE-LICENSE.txt')
print('ok', {p.name: p.stat().st_size for p in out.rglob('*') if p.is_file()})
