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
  window.__miny = (a,b,k) => { __tr(a,b,k); const P = fig.sampleWorld(); const o={}; fig.samp.forEach((q,j)=>{o[q.reg]=Math.min(o[q.reg]??9,P[j*3+1]);}); return JSON.stringify(Object.fromEntries(Object.entries(o).map(([a,b])=>[a,+b.toFixed(3)]))); };
  window.__hmin = k => { const st = fig.stateOf(k); fig.placeStatic(st,0,0); const P = fig.sampleWorld(); const o={}; fig.samp.forEach((q,j)=>{o[q.reg]=Math.min(o[q.reg]??9,P[j*3+1]);}); return JSON.stringify(Object.fromEntries(Object.entries(o).map(([a,b])=>[a,+b.toFixed(3)]))); };
  window.__touch = k => { const st = fig.stateOf(k); return Object.keys(st.touch).join(',') + ' pelY=' + st.pelvisY.toFixed(3); };
  window.Mudrya.go(q.get('pose') || 'tad', 0, 0);
  if (window.AndroidBridge && AndroidBridge.onReady) AndroidBridge.onReady();
}
boot().catch(e => { console.error(e); if (window.AndroidBridge && AndroidBridge.onError) AndroidBridge.onError(String(e)); });
