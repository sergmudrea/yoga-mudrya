// Позы библиотеки атласа (суставные углы марионетки) → точки фигуры в 3D, без отрисовки.
// Считает ту же марионетку, что эмулятор (createFigure3D: solveJoint + showTW с опорами на пол),
// и выгружает именованные точки для каждой позы: из них генератор строит плоскую схему и нагрузки.
//   node tools/atlas/library_poses.mjs <three/package> <out.json>
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { pathToFileURL, fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const emu = path.join(here, '../../app/src/main/assets/emulator');
const T = await import(pathToFileURL(path.join(process.argv[2], 'build/three.module.js')).href);

// Заглушки браузера: марионетке нужен только canvas для полосатой текстуры коврика.
const ctx2d = new Proxy({}, { get: () => () => {} });
globalThis.window = globalThis;
globalThis.document = { createElement: () => ({ getContext: () => ctx2d, width: 0, height: 0 }) };
globalThis.__THREE = T;

const data = fs.readFileSync(path.join(emu, 'atlas-data.js'), 'utf8');
let mar = fs.readFileSync(path.join(emu, 'marionette.js'), 'utf8');
mar = mar.replace(/^import .*$/gm, '');
mar = mar.slice(0, mar.indexOf('async function boot(){'));
const code = `${data}\n;(async()=>{\nconst T=globalThis.__THREE;\n${mar}\nconst OrbitControls=null;\nglobalThis.__fig=await createFigure3D();\n})();`;
vm.runInThisContext(code);
await new Promise(r => setTimeout(r, 50));
const fig = globalThis.__fig;

const jik = jp => { const ik = {}; for (const c of jp.c || []) { const m = { hL: 'A_L', hR: 'A_R', fL: 'L_L', fR: 'L_R' }[c]; if (m) ik[m] = 'floor'; } return ik; };
const out = {};
for (const id of Object.keys(globalThis.JP)) {
  const jp = globalThis.JP[id];
  try {
    const pts = fig.showTW(fig.solveJoint(jp), { hipX: 0, ik: jik(jp), ignoreArms: !jp.ab, hands: { L: 'open', R: 'open' } });
    const TW = fig.lastTW;
    const fwd = new T.Vector3(0, 0, 1).applyQuaternion(TW.pelvis);
    const lat = new T.Vector3(1, 0, 0).applyQuaternion(TW.pelvis);
    out[id] = {
      p: Object.fromEntries(pts.map(q => [q.name, [+q.v.x.toFixed(4), +q.v.y.toFixed(4), +q.v.z.toFixed(4)]])),
      fwd: [fwd.x, fwd.y, fwd.z].map(v => +v.toFixed(4)), lat: [lat.x, lat.y, lat.z].map(v => +v.toFixed(4)),
      c: jp.c || [],
    };
  } catch (e) { out[id] = { err: String(e) }; }
}
fs.writeFileSync(process.argv[3], JSON.stringify(out));
const bad = Object.entries(out).filter(([, v]) => v.err);
console.log(Object.keys(out).length, 'poses', bad.length, 'errors', bad.slice(0, 3));
