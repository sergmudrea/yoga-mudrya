/* Мост для приложения и сайта: window.Mudrya — тот же интерфейс, что у прежнего эмулятора. */
import {createFigure} from './fig2.mjs';
const host = document.getElementById('stage'), canvas = document.getElementById('c');
const q = new URLSearchParams(location.search);
let fig = null, poses = null, lastKey = '', theme = 'light', model = q.get('model') || (window.MUDRYA_MODEL || 'female');
function keyOf(id, m, h) { const k = id + '|' + (m ? 1 : 0) + '|' + (h || ''); if (poses[k]) return k; const k2 = id + '|' + (m ? 1 : 0) + '|'; if (poses[k2]) return k2;
  for (const kk in poses) if (kk.startsWith(id + '|' + (m ? 1 : 0) + '|')) return kk; return null; }
async function boot() {
  poses = await fetch('poses.json' + (q.get('v') ? '?v=' + encodeURIComponent(q.get('v')) : '')).then(r => r.json());
  fig = await createFigure(canvas, {poses, model});
  const fit = () => fig.resize(host.clientWidth || 600, host.clientHeight || 600); fit(); new ResizeObserver(fit).observe(host);
  if (fig.controls) fig.controls.addEventListener('start', () => { fig.view.userMoved = true; });
  window.Mudrya = {
    ready: true, loaded: true, version: 2,
    go(id, mirror, ms, hands) { const k = keyOf(id, mirror, hands); if (!k) { console.warn('pose', id); return; }
      if (k === lastKey && ms > 0) return; lastKey = k; fig.go(k, ms || 0); },
    hands(id) { const k = keyOf(id, 0, ''); return k ? JSON.stringify(poses[k].h) : ''; },
    setTheme(t) { theme = t; fig.setTheme(t); document.body.style.background = t === 'dark' ? '#16171b' : '#f3f0ea'; },
    resetView() { fig.view.userMoved = false; const f = fig.frameTarget(); fig.placeCam(f, fig.cur ? fig.cur.st.cam : 0, true); },
    setYaw(d) { fig.view.yaw = d; fig.view.userMoved = false; const f = fig.frameTarget(); fig.placeCam(f, fig.cur ? fig.cur.st.cam : 0, true); },
    has(id) { return !!keyOf(id, 0, ''); },
    setFigure(k) { const m = /male|man|y/.test(k) && !/female/.test(k) ? 'male' : 'female'; if (m !== model) { const u = new URL(location.href); u.searchParams.set('model', m); location.replace(u); } },
    _fig: fig,
  };
  window.__tr = (a, b, k) => { const A = fig.stateOf(a), B2 = fig.stateOf(b); fig.placeStatic(A, 0, 0); const tr = fig.makeTransition(A, 0, 0, B2); tr.at(k);
    const f = fig.frameTarget(); fig.placeCam(f, A.cam, true); fig.render(); return {pin: tr.pin, held: tr.held, lift: Object.keys(tr.lift)}; };
  window.__keys = () => Object.keys(poses);
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
