/* Мост для приложения и сайта: window.Mudrya — тот же интерфейс, что у прежнего эмулятора. */
import {createFigure} from './fig2.mjs';
import {makeAuthView} from './authview.mjs';
import {OVR} from './overrides.mjs';
import {twToJP, limitJP, roundJP, jpToTW, mirrorJP} from './conv.mjs';
import * as T3 from 'three';
const host = document.getElementById('stage'), canvas = document.getElementById('c');
const q = new URLSearchParams(location.search);
let fig = null, poses = null, lastKey = '', theme = 'light', model = q.get('model') || (window.MUDRYA_MODEL || 'female');
function keyOf(id, m, h) { const k = id + '|' + (m ? 1 : 0) + '|' + (h || ''); if (poses[k]) return k; const k2 = id + '|' + (m ? 1 : 0) + '|'; if (poses[k2]) return k2;
  for (const kk in poses) if (kk.startsWith(id + '|' + (m ? 1 : 0) + '|')) return kk; return null; }
async function boot() {
  poses = await fetch('poses.json' + (q.get('v') ? '?v=' + encodeURIComponent(q.get('v')) : '')).then(r => r.json());
  fig = await createFigure(canvas, {poses, model});
  fig.view.yaw = -58; fig.view.pitch = 9; /* вид сбоку-спереди: видно и наклоны, и выпады */
  const fit = () => fig.resize(host.clientWidth || 600, host.clientHeight || 600); fit(); new ResizeObserver(fit).observe(host);
  if (fig.controls) fig.controls.addEventListener('start', () => { fig.view.userMoved = true; });
  window.Mudrya = {
    ready: true, loaded: true, version: 2,
    go(id, mirror, ms, hands) { const k = keyOf(id, mirror, hands); if (!k) { console.warn('pose', id); return; }
      if (k === lastKey && ms > 0) return; lastKey = k; play(k, ms || 0); },
    hands(id) { const k = keyOf(id, 0, ''); return k ? JSON.stringify(poses[k].h) : ''; },
    setTheme(t) { theme = t; fig.setTheme(t); document.body.style.background = t === 'dark' ? '#16171b' : '#f3f0ea'; },
    resetView() { fig.view.userMoved = false; camTo(true, PC ? PC.it.jp.cam : 0); },
    setYaw(d) { fig.view.yaw = d; fig.view.userMoved = false; camTo(true, PC ? PC.it.jp.cam : 0); },
    has(id) { return !!keyOf(id, 0, ''); },
    setFigure(k) { const m = /male|man|y/.test(k) && !/female/.test(k) ? 'male' : 'female'; if (m !== model) { const u = new URL(location.href); u.searchParams.set('model', m); location.replace(u); } },
    _fig: fig,
  };
  window.__tr = (a, b, k) => { const A = fig.stateOf(a), B2 = fig.stateOf(b); fig.placeStatic(A, 0, 0); const tr = fig.makeTransition(A, 0, 0, B2); tr.at(k);
    const f = fig.frameTarget(); fig.placeCam(f, A.cam, true); fig.render(); return {pin: tr.pin, held: tr.held, lift: Object.keys(tr.lift)}; };
  window.__keys = () => Object.keys(poses);
  let TL = null; window.__tl = (seq, yaw, pitch) => { TL = AV.timeline(seq); fig.view.yaw = yaw; fig.view.pitch = pitch;
    const lo = [1e9,1e9,1e9], hi = [-1e9,-1e9,-1e9]; for (let t = 0; t <= TL.T; t += .25) { AV.frameAt(TL, t); const P = fig.sampleWorld(); for (let j = 0; j < P.length; j += 3) for (let a = 0; a < 3; a++) { lo[a] = Math.min(lo[a], P[j+a]); hi[a] = Math.max(hi[a], P[j+a]); } }
    TL.fr = {c: fig.cam.position.clone().set((lo[0]+hi[0])/2, Math.max(.55,(lo[1]+hi[1])/2), (lo[2]+hi[2])/2), s: Math.max(hi[0]-lo[0], (hi[1]-lo[1])*1.1, hi[2]-lo[2]) * .9};
    fig.mat.position.set((lo[0]+hi[0])/2, .003, (lo[2]+hi[2])/2); TL.fr.s *= .82; fig.mat.material.map && (fig.mat.material.map.rotation = Math.PI / 2, fig.mat.material.map.center.set(.5,.5));
    TL.end = AV.frameAt(TL, TL.T); return {T: TL.T, n: TL.keys.length, names: TL.keys.map(k => k.n + (k.anchor ? '@' + k.anchor.r : '')).join(' ')}; };
  window.__tlFrame = (t, jpg) => { const f = AV.frameAt(TL, t); const g = TL.end ? t / TL.T : 0;
    if (TL.end) { const p = fig.B.pelvis.getWorldPosition(fig.cam.position.clone()); p.x -= TL.end.x * g; p.z -= TL.end.z * g; fig.setPelvisPos(p); fig.syncHair(); }
    fig.view.userMoved = false; fig.placeCam(TL.fr, 0, true); fig.render(); return jpg ? fig.renderer.domElement.toDataURL('image/jpeg', .9) : ''; };
  window.__handDbg = (name) => { const jp = (window.__AV.POSES[name] || window.__AV.PHASES[name]); window.__AV.show(jp, 0, 0, {pins: []}); const o = {};
    for (const s of ['l','r']) { const h = fig.B['hand_'+s], m = fig.B['middle_01_'+s], lo = fig.B['lowerarm_'+s]; const a = fig.wp(h), b = fig.wp(m), c = fig.wp(lo);
      const d = b.clone().sub(a).normalize(); o[s] = {fingerDir: d.toArray().map(v=>+v.toFixed(2)), wrist: a.toArray().map(v=>+v.toFixed(2)), elbow: c.toArray().map(v=>+v.toFixed(2)), sh: fig.wp(fig.B['upperarm_'+s]).toArray().map(v=>+v.toFixed(2))}; }
    return JSON.stringify(o); };

  window.__conv = () => { const out = {}; const SG = ['pelvis','chest','head','thighL','shinL','footL','uarmL','farmL','thighR','shinR','footR','uarmR','farmR'];
    for (const k in poses) { const TW = {}; for (const n in poses[k].q) { const a = poses[k].q[n]; TW[n] = new T3.Quaternion(a[0],a[1],a[2],a[3]); }
      const jp = twToJP(TW); const TW2 = jpToTW(jp); let err = 0, ew = ''; for (const n of SG) { const e = (/^(pelvis|chest|head)$/.test(n) ? TW[n].angleTo(TW2[n]) : new T3.Vector3(0,-1,0).applyQuaternion(TW[n]).angleTo(new T3.Vector3(0,-1,0).applyQuaternion(TW2[n]))) * 57.3; if (e > err) { err = e; ew = n; } }
      const L = limitJP(jp); out[k] = {jp: roundJP(jp), err: +err.toFixed(1), ew, viol: L.viol}; }
    return JSON.stringify(out); };
  const AV = makeAuthView(fig); window.__AV = AV;

  /* ---------- плеер: позы в суставных углах, переходы по кривой без изломов, опоры на месте ---------- */
  const infoCache = new Map();
  const infoOf = k => { if (!infoCache.has(k)) { const jp = window.__prepJP(k); const [id, mm] = k.split('|'); const name = id === 'ashwa' ? (+mm ? 'ashwaL' : 'ashwaR') : id === 'ardhach' ? (+mm ? 'ardhachL' : 'ardhachR') : id; infoCache.set(k, {name, jp, info: AV.keyInfo({jp})}); } return infoCache.get(k); };
  let PC = null, PA = null; /* текущая поза {it, x, z}; анимация */
  function placeRest(it, x, z) { AV.show(it.jp, x, z); }
  /* камера: своё сглаживание кадра (центр, размер, поворот), в three — всегда точная установка */
  let FR = null, settle = 0;
  function camTo(snap, cy) { const f = fig.frameTarget(); cy = cy || 0;
    if (snap || !FR) FR = {c: f.c.clone(), s: f.s, cy}; else { FR.c.lerp(f.c, .07); FR.s += (f.s - FR.s) * .07; FR.cy += (cy - FR.cy) * .07; }
    fig.placeCam({c: FR.c, s: FR.s}, FR.cy, true); }
  function play(k, ms) {
    const it = infoOf(k);
    if (PA) { const e = PA; PA = null; PC = {it: e.to, x: e.end.x, z: e.end.z}; }
    if (!PC || !ms) { const x = PC ? PC.x : 0, z = PC ? PC.z : 0; PC = {it, x, z}; placeRest(it, x, z); camTo(true, it.jp.cam); return; }
    const tl = AV.timeline([{jp: PC.it.jp, name: PC.it.name, info: PC.it.info}, {jp: it.jp, name: it.name, info: it.info}], {seg: 1, poseSeg: 1, hold: 0, x0: PC.x, z0: PC.z});
    const last = tl.keys[tl.keys.length - 1];
    PA = {tl, t0: performance.now(), ms, to: it, from: PC.it, end: {x: last.x, z: last.z}};
  }
  function loop(now) {
    if (PA) { const k = Math.min(1, (now - PA.t0) / PA.ms); AV.frameAt(PA.tl, k * PA.tl.T);
      camTo(false, (PA.from.jp.cam || 0) + ((PA.to.jp.cam || 0) - (PA.from.jp.cam || 0)) * k);
      if (k >= 1) { settle = 90; PC = {it: PA.to, x: PA.end.x, z: PA.end.z}; PA = null; placeRest(PC.it, PC.x, PC.z); } fig.render(); }
    else if (PC && FR && settle > 0) { settle--; if (!fig.view.userMoved) camTo(false, PC.it.jp.cam);
      /* коврик подтягивается под фигуру, пока она стоит в позе */
      const mp = fig.mat.position; mp.x += (FR.c.x - mp.x) * .06; mp.z += (FR.c.z - mp.z) * .06; }
    requestAnimationFrame(loop);
  window.__scan = (pairs) => { const out = []; const hull = pts => { pts.sort((a, b) => a[0] - b[0] || a[1] - b[1]); const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
      const lo = [], up = []; for (const p of pts) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
      for (const p of pts.slice().reverse()) { while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); } return lo.slice(0, -1).concat(up.slice(0, -1)); };
    const dist = (h, c) => { if (h.length < 3) { let m = 9; for (const p of h) m = Math.min(m, Math.hypot(p[0] - c[0], p[1] - c[1])); return m; }
      let inside = true, m = 9; for (let i = 0; i < h.length; i++) { const a = h[i], b = h[(i + 1) % h.length]; const cr = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]); if (cr < 0) inside = false;
        const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1e-9; let t = ((c[0] - a[0]) * (b[0] - a[0]) + (c[1] - a[1]) * (b[1] - a[1])) / (L * L); t = Math.max(0, Math.min(1, t)); m = Math.min(m, Math.hypot(a[0] + t * (b[0] - a[0]) - c[0], a[1] + t * (b[1] - a[1]) - c[1])); }
      return inside ? 0 : m; };
    for (const [a, b] of pairs) { try { PA = null; PC = null; play(a, 0); play(b, 1000); const A = PA; PA = null; let worst = 0, wk = 0;
      for (let k = .1; k < .95; k += .1) { AV.frameAt(A.tl, k * A.tl.T); const P = fig.sampleWorld(); let cx = 0, cz = 0, n = P.length / 3; const sp = [];
        for (let j = 0; j < P.length; j += 3) { cx += P[j]; cz += P[j + 2]; if (P[j + 1] < .025) sp.push([P[j], P[j + 2]]); }
        const d = sp.length ? dist(hull(sp), [cx / n, cz / n]) : 1; if (d > worst) { worst = d; wk = k; } }
      out.push([a, b, +worst.toFixed(3), +wk.toFixed(1)]); } catch (e) { out.push([a, b, -1, String(e).slice(0, 60)]); } }
    return JSON.stringify(out); };
  window.__strip = (ka, kb, ks, rel) => { PA = null; PC = null; play(ka, 0); play(kb, 1000); const A = PA; PA = null; const out = [];
    fig.view.yaw = (A.to.jp.root[2] || 0) - (rel ?? 70); fig.view.pitch = 8;
    for (const k of ks) { AV.frameAt(A.tl, k * A.tl.T); camTo(true, 0); fig.render(); out.push(fig.renderer.domElement.toDataURL('image/jpeg', .8)); } return out; };
  }
  requestAnimationFrame(loop);


  /* подготовка позы атласа для нового движка: углы, пределы, опоры */
  window.__prepJP = k => { const p = poses[k]; const [fid, mm] = k.split('|');
    const TWa = {}; for (const n in p.q) { const a = p.q[n]; TWa[n] = new T3.Quaternion(a[0],a[1],a[2],a[3]); }
    const yawA = Math.round(new T3.Euler().setFromQuaternion(TWa.pelvis, 'YXZ').y * 57.2958) - 90; /* поворот, с которым атлас показывал позу */
    if (OVR[fid]) { let o = AV.fit(OVR[fid]); o = {...o, cam: -yawA * (+mm ? -1 : 1), viol: ['OVR']}; o = +mm ? mirrorJP(o) : o; o.cam = -yawA; return o; } const TW = {}; for (const n in p.q) { const a = p.q[n]; TW[n] = new T3.Quaternion(a[0],a[1],a[2],a[3]); }
    const L = limitJP(twToJP(TW)); const jp = roundJP(L.jp); jp.root[2] = 0; jp.hands = p.h; if (p.h.L === 'namaste' && p.h.R === 'namaste') jp.pray = true; jp.armBal = !!p.a; jp.cam = -yawA;
    /* опоры: стопы/голени из атласа; ладони формы «floor» у пола */
    AV.show({...jp, pins: []}, 0, 0); const P = fig.sampleWorld(); const mins = {}; fig.samp.forEach((q, j) => { mins[q.reg] = Math.min(mins[q.reg] ?? 9, P[j * 3 + 1]); });
    const pins = []; for (const r of ['footL','footR']) if ((p.k || []).includes(r) || mins[r] < .04) if (mins[r] < .12) pins.push(r);
    if (!jp.armBal) for (const s of ['L','R']) if (p.h[s] === 'floor' && mins['hand' + s] < .25) pins.push('hand' + s);
    /* колено на полу: сильно согнутое колено ниже стопы той же ноги, другая стопа стоит — опускаем таз до касания коленом,
       стоящая нога сгибается сильнее (IK) */
    for (const s of ['L','R']) { const o = s === 'L' ? 'R' : 'L'; const kn = fig.wp(fig.B['calf_' + s.toLowerCase()]).y;
      if (jp['k' + s] > 70 && kn < mins['foot' + s] + .06 && kn > .07 && mins['foot' + o] < .03 && !jp.armBal) { jp.drop = Math.min(.25, kn - .055); if (!pins.includes('foot' + o)) pins.push('foot' + o); break; } }
    jp.pins = pins; jp.viol = L.viol; return jp; };
  window.__shotOld = (k, rel) => { const st = fig.stateOf(k); const yaw = (window.__prepJP(k).root[2]); fig.view.yaw = yaw - (rel ?? 55); fig.view.pitch = 8; fig.placeStatic(st, 0, 0); const f = fig.frameTarget(); fig.view.userMoved = false; fig.placeCam(f, 0, true); fig.render(); return fig.renderer.domElement.toDataURL('image/jpeg', .85); };
  window.__shot = (jp, rel, w, h) => { fig.view.yaw = (jp.root ? jp.root[2] : 0) - (rel ?? 55); fig.view.pitch = 8; AV.show(jp, 0, 0); const f = fig.frameTarget(); fig.view.userMoved = false; fig.placeCam(f, 0, true); fig.render(); return fig.renderer.domElement.toDataURL('image/jpeg', .85); };
  window.__showA = (name, yaw, pitch, dofit) => { let jp = AV.POSES[name] || AV.PHASES[name]; if (dofit) jp = AV.fit(jp); fig.view.yaw = yaw ?? 90; fig.view.pitch = pitch ?? 6; const r = AV.show(jp, 0, 0); let f = fig.frameTarget(); if (window.__zoom) f = {c: fig.wp(fig.B.pelvis), s: window.__zoom}; fig.placeCam(f, 0, true); fig.render(); return JSON.stringify({fit: jp.fitted || null}); };
  /* съёмка ролика: неподвижная камера, переходы по шагам времени */
  let FILM = null;
  window.__filmInit = (keys, yaw, pitch) => { fig.view.yaw = yaw; fig.view.pitch = pitch; let st = fig.stateOf(keys[0]); fig.placeStatic(st, 0, 0); let x = 0, z = 0;
    const bb = new (fig.cam.position.constructor)(); const lo = [1e9, 1e9, 1e9], hi = [-1e9, -1e9, -1e9];
    const acc = () => { const P = fig.sampleWorld(); for (let j = 0; j < P.length; j += 3) for (let a = 0; a < 3; a++) { lo[a] = Math.min(lo[a], P[j + a]); hi[a] = Math.max(hi[a], P[j + a]); } };
    acc(); const tr = []; for (let i = 1; i < keys.length; i++) { const A = fig.stateOf(keys[i - 1]), B2 = fig.stateOf(keys[i]); fig.placeStatic(A, x, z); const t = fig.makeTransition(A, x, z, B2); for (const k of [.25, .5, .75, 1]) { t.at(k); acc(); } tr.push({A, B2, x, z}); x = t.bx; z = t.bz; }
    const c = {x: (lo[0] + hi[0]) / 2, y: Math.max(.6, (lo[1] + hi[1]) / 2), z: (lo[2] + hi[2]) / 2}; const s = Math.max(hi[0] - lo[0], (hi[1] - lo[1]) * 1.1, hi[2] - lo[2]);
    FILM = {D: {x, z}, tr, fr: {c: fig.cam.position.clone().set(c.x, c.y, c.z), s: s * .92}}; return {n: tr.length, c, s}; };
  window.__filmFrame = (i, k, g) => { const T = FILM.tr[i]; fig.placeStatic(T.A, T.x, T.z); if (k > 0) { const t = fig.makeTransition(T.A, T.x, T.z, T.B2); t.at(k); }
    { const p = fig.B.pelvis.getWorldPosition(fig.cam.position.clone()); p.x -= FILM.D.x * g; p.z -= FILM.D.z * g; fig.setPelvisPos(p); fig.syncHair(); }
    fig.view.userMoved = false; fig.placeCam(FILM.fr, 0, true); fig.render(); return fig.renderer.domElement.toDataURL('image/jpeg', .9); };
  window.__miny = (a,b,k) => { __tr(a,b,k); const P = fig.sampleWorld(); const o={}; fig.samp.forEach((q,j)=>{o[q.reg]=Math.min(o[q.reg]??9,P[j*3+1]);}); return JSON.stringify(Object.fromEntries(Object.entries(o).map(([a,b])=>[a,+b.toFixed(3)]))); };
  window.__hmin = k => { const st = fig.stateOf(k); fig.placeStatic(st,0,0); const P = fig.sampleWorld(); const o={}; fig.samp.forEach((q,j)=>{o[q.reg]=Math.min(o[q.reg]??9,P[j*3+1]);}); return JSON.stringify(Object.fromEntries(Object.entries(o).map(([a,b])=>[a,+b.toFixed(3)]))); };
  window.__touch = k => { const st = fig.stateOf(k); return Object.keys(st.touch).join(',') + ' pelY=' + st.pelvisY.toFixed(3); };
  window.Mudrya.go(q.get('pose') || 'tad', 0, 0);
  if (window.AndroidBridge && AndroidBridge.onReady) AndroidBridge.onReady();
}
boot().catch(e => { console.error(e); if (window.AndroidBridge && AndroidBridge.onError) AndroidBridge.onError(String(e)); });
