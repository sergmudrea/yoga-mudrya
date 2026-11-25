/* Перевод поз атласа (мировые повороты звеньев) в анатомические суставные углы и обратно.
   Углы в тех же соглашениях, что и в auth.mjs (jpToTW), поэтому каждая поза атласа становится
   «авторской»: её можно править числом, ограничивать пределами суставов и смешивать без изломов. */
import * as T from 'three';
import {jpToTW} from './auth.mjs';
const Q = () => new T.Quaternion(), D = 180 / Math.PI;
const eul = (q, order) => { const e = new T.Euler().setFromQuaternion(q, order); return [e.x * D, e.y * D, e.z * D]; };
const rel = (a, b) => a.clone().invert().multiply(b);
const hinge = q => { const t = Q().set(q.x, 0, 0, q.w); if (t.lengthSq() < 1e-12) return 0; t.normalize(); let a = 2 * Math.atan2(t.x, t.w) * D; if (a > 180) a -= 360; if (a < -180) a += 360; return a; };
const r1 = x => Math.round(x * 10) / 10;
const DNv = new T.Vector3(0, -1, 0), Yv = new T.Vector3(0, 1, 0), Xv = new T.Vector3(1, 0, 0);
const n180 = a => ((a + 180) % 360 + 360) % 360 - 180;

/* пределы суставов (градусы) — по анатомии взрослого с хорошей растяжкой */
export const LIM = {
  sp: [[-90, 120], [-50, 50], [-60, 60]],      /* сгиб(+)/прогиб, боковой, скрутка — на весь позвоночник */
  nk: [[-80, 90], [-45, 45], [-75, 75]],
  h: [[-40, 145], [-35, 90], [-50, 100]],      /* сгиб бедра, отведение, ротация */
  k: [0, 168], a: [-95, 38],
  s: [[-95, 200], [-55, 200], [-95, 95]],      /* плечо */
  e: [0, 150], w: [[-80, 80], [-30, 40], [-75, 75]],
};
/* две эквивалентные тройки Эйлера; берём ту, что в пределах сустава и ближе к нейтрали */
function dec3(q, order, toJ, L) {
  const [x, y, z] = eul(q, order);
  const cands = [[x, y, z], order === 'XZY' ? [n180(x + 180), n180(y + 180), n180(180 - z)] : [n180(x + 180), n180(180 - y), n180(z + 180)]];
  let best = null;
  for (const c of cands) { const j = toJ(c); let cost = 0;
    if (L) j.forEach((v, i) => { const [lo, hi] = L[i]; let bv = v, bc = Infinity;
      for (const w of [v, v + 360, v - 360]) { const ex = Math.max(0, lo - w, w - hi) * 10 + Math.abs(w) * .001; if (ex < bc) { bc = ex; bv = w; } }
      j[i] = bv; cost += Math.max(0, lo - bv, bv - hi) * 10; });
    cost += Math.abs(j[0]) * .01 + Math.abs(j[1]) * .03 + Math.abs(j[2]) * .05; if (!best || cost < best.cost) best = {cost, j}; }
  return best.j;
}
const jHip = g => c => [-c[0], g * c[2], g * c[1]];
/* колено/локоть — шарниры: скрутку верхнего звена подбираем так, чтобы нижнее звено лежало в плоскости сгиба,
   а ротация в бедре/плече оставалась в анатомических пределах (колено не смотрит назад, локоть не выворачивается) */
function fixHinge(TW, par, up, lo, sign, g, L) {
  const U = TW[up], Lq = TW[lo], dl = DNv.clone().applyQuaternion(Lq); let best = null;
  for (let ph = -180; ph < 180; ph += 2) {
    const U2 = U.clone().multiply(Q().setFromAxisAngle(Yv, ph / D)); let k = hinge(rel(U2, Lq)) * sign;
    if (k < 0) k = 0;
    const L2 = U2.clone().multiply(Q().setFromAxisAngle(Xv, sign * k / D)); const e = DNv.clone().applyQuaternion(L2).angleTo(dl) * D;
    const j = dec3(rel(TW[par], U2), 'XZY', jHip(g), L);
    const pen = Math.max(0, L[2][0] - j[2], j[2] - L[2][1]) * .6 + Math.abs(j[2]) * .03 + Math.max(0, L[0][0] - j[0], j[0] - L[0][1]) * .3 + Math.max(0, L[1][0] - j[1], j[1] - L[1][1]) * .3;
    const cost = e + pen; if (!best || cost < best.cost) best = {cost, U2, L2}; }
  const tw = rel(best.L2, Lq); const t = Q().set(0, tw.y, 0, tw.w).normalize();
  TW[up] = best.U2; TW[lo] = best.L2.clone().multiply(t);
}
export function twToJP(TW0, {hinges = true} = {}) {
  const TW = {}; for (const n in TW0) TW[n] = TW0[n].clone();
  if (hinges) for (const s of ['L', 'R']) { const g = s === 'L' ? 1 : -1; fixHinge(TW, 'pelvis', 'thigh' + s, 'shin' + s, 1, g, LIM.h); fixHinge(TW, 'chest', 'uarm' + s, 'farm' + s, -1, g, LIM.s); }
  /* таз: у атласа таз иногда наклонён так, что сгиб/разгиб бедра выходит за пределы человека;
     поворачиваем таз (бёдра и грудь в пространстве не меняются) — излишек берёт поясница */
  for (let it = 0; it < 3; it++) {
    const hip = ['L', 'R'].map(s => dec3(rel(TW.pelvis, TW['thigh' + s]), 'XZY', jHip(s === 'L' ? 1 : -1), LIM.h)[0]);
    const hi = Math.max(...hip), lo = Math.min(...hip); let d = 0;
    if (hi > 122) d = hi - 122; if (lo - d < -28) d = (d + (lo - -28)) / 2; if (!d || Math.abs(d) < 1) break;
    TW.pelvis = TW.pelvis.clone().multiply(Q().setFromAxisAngle(Xv, -d / D));
  }
  const jp = {};
  { const [x, y, z] = eul(TW.pelvis, 'YZX'); jp.root = [x, -z, y]; }
  jp.sp = dec3(rel(TW.pelvis, TW.chest), 'XZY', c => [c[0], -c[2], c[1]], LIM.sp);
  jp.nk = dec3(rel(TW.chest, TW.head), 'XZY', c => [c[0], -c[2], c[1]], LIM.nk);
  for (const s of ['L', 'R']) {
    const g = s === 'L' ? 1 : -1;
    jp['h' + s] = dec3(rel(TW.pelvis, TW['thigh' + s]), 'XZY', jHip(g), LIM.h);
    jp['k' + s] = Math.max(0, hinge(rel(TW['thigh' + s], TW['shin' + s])));
    jp['a' + s] = -hinge(rel(TW['shin' + s], TW['foot' + s]));
    jp['s' + s] = dec3(rel(TW.chest, TW['uarm' + s]), 'XZY', jHip(g), LIM.s);
    jp['e' + s] = Math.max(0, -hinge(rel(TW['uarm' + s], TW['farm' + s])));
    jp['w' + s] = [0, 0, 0];
  }
  return jp;
}
const cl = (x, [a, b]) => Math.max(a, Math.min(b, x));
/* ограничить позу пределами; возвращает список нарушений (что было выше предела и на сколько) */
export function limitJP(jp) {
  const o = JSON.parse(JSON.stringify(jp)), viol = [];
  const lim3 = (k, L) => { if (!o[k]) return; o[k] = o[k].map((v, i) => { const c = cl(v, L[i]); if (Math.abs(c - v) > 4) viol.push(k + i + ':' + Math.round(v)); return c; }); };
  const lim1 = (k, L) => { if (o[k] == null) return; const c = cl(o[k], L); if (Math.abs(c - o[k]) > 4) viol.push(k + ':' + Math.round(o[k])); o[k] = c; };
  lim3('sp', LIM.sp); lim3('nk', LIM.nk);
  for (const s of ['L', 'R']) { lim3('h' + s, LIM.h); lim1('k' + s, LIM.k); lim1('a' + s, LIM.a); lim3('s' + s, LIM.s); lim1('e' + s, LIM.e); }
  return {jp: o, viol};
}
export const roundJP = jp => { const o = {}; for (const k in jp) o[k] = Array.isArray(jp[k]) ? jp[k].map(r1) : typeof jp[k] === 'number' ? r1(jp[k]) : jp[k]; return o; };
export {jpToTW};

/* зеркало позы (левая ↔ правая сторона) */
export function mirrorJP(jp) {
  const o = JSON.parse(JSON.stringify(jp)); const sw = (a, b) => { const t = o[a]; o[a] = o[b]; o[b] = t; };
  for (const [a, b] of [['hL', 'hR'], ['kL', 'kR'], ['aL', 'aR'], ['sL', 'sR'], ['eL', 'eR'], ['wL', 'wR']]) sw(a, b);
  if (o.root) o.root = [o.root[0], -o.root[1], -o.root[2]];
  for (const k of ['sp', 'nk']) if (o[k]) o[k] = [o[k][0], -o[k][1], -o[k][2]];
  if (o.hands) o.hands = {L: o.hands.R, R: o.hands.L};
  if (o.pins) o.pins = o.pins.map(p => p.replace(/L$/, '#').replace(/R$/, 'L').replace('#', 'R'));
  return o;
}
