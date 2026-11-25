/* Авторские позы и переходы Сурья Намаскар на скелете модели.
   Поза задаётся анатомическими углами (градусы), как в решателе атласа:
   root:[наклон вперёд, крен, поворот]; sp/nk:[сгиб, боковой, скрутка] (позвоночник делится на 3 позвонка, шея — на шею и голову);
   hL/hR:[сгиб бедра, отведение, ротация]; kL/kR — колено; aL/aR — стопа (+ тыльное сгибание);
   sL/sR:[сгиб плеча, отведение, ротация]; eL/eR — локоть.
   Опоры (pin): кисти/стопы, которые стоят на полу, — их ставит IK с анатомическим полюсом
   (локоть смотрит назад, колено — вперёд), сама поза при этом уже почти касается пола. */
import * as T from 'three';
const V = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
const Q = () => new T.Quaternion();
const D = Math.PI / 180;
const X = V(1, 0, 0), Y = V(0, 1, 0), Z = V(0, 0, 1);
const ax = (a, d) => Q().setFromAxisAngle(a, d * D);
const E3 = (f, s, t) => ax(X, f).multiply(ax(Z, -s)).multiply(ax(Y, t));

export function jpToTW(jp) {
  const r = jp.root || [0, 0, 0];
  const R = ax(Y, r[2] || 0).multiply(ax(Z, -(r[1] || 0))).multiply(ax(X, r[0] || 0));
  const sp = jp.sp || [0, 0, 0], nk = jp.nk || [0, 0, 0];
  const TW = {};
  TW.pelvis = R.clone();
  TW.lumbar = TW.pelvis.clone().multiply(E3(sp[0] * .45, sp[1] * .45, sp[2] * .35));
  TW.chest = TW.lumbar.clone().multiply(E3(sp[0] * .55, sp[1] * .55, sp[2] * .65));
  TW.neck = TW.chest.clone().multiply(E3(nk[0] * .5, nk[1] * .5, nk[2] * .5));
  TW.head = TW.neck.clone().multiply(E3(nk[0] * .5, nk[1] * .5, nk[2] * .5));
  for (const s of ['L', 'R']) {
    const g = s === 'L' ? 1 : -1;
    const h = jp['h' + s] || [0, 0, 0];
    TW['thigh' + s] = R.clone().multiply(ax(X, -h[0])).multiply(ax(Z, g * (h[1] || 0))).multiply(ax(Y, g * (h[2] || 0)));
    TW['shin' + s] = TW['thigh' + s].clone().multiply(ax(X, jp['k' + s] || 0));
    TW['foot' + s] = TW['shin' + s].clone().multiply(ax(X, -(jp['a' + s] || 0)));
    const sh = jp['s' + s] || [0, 0, 0];
    TW['uarm' + s] = TW.chest.clone().multiply(ax(X, -sh[0])).multiply(ax(Z, g * (sh[1] || 0))).multiply(ax(Y, g * (sh[2] || 0)));
    TW['farm' + s] = TW['uarm' + s].clone().multiply(ax(X, -(jp['e' + s] || 0)));
    const w = jp['w' + s] || [0, 0, 0]; /* кисть: пронация, отведение, разгибание */
    TW['hand' + s] = TW['farm' + s].clone().multiply(ax(Y, g * (w[0] || 0))).multiply(ax(Z, -g * (w[1] || 0))).multiply(ax(X, w[2] || 0));
  }
  return TW;
}

/* смешивание двух поз в угловом пространстве (все промежуточные — анатомически допустимы) */
const KEYS3 = ['root', 'sp', 'nk', 'hL', 'hR', 'sL', 'sR', 'wL', 'wR'], KEYS1 = ['kL', 'kR', 'aL', 'aR', 'eL', 'eR'];
export function mixJP(a, b, t) {
  const o = {};
  for (const k of KEYS3) { const x = a[k] || [0, 0, 0], y = b[k] || [0, 0, 0]; o[k] = [0, 1, 2].map(i => (x[i] || 0) + ((y[i] || 0) - (x[i] || 0)) * t); }
  for (const k of KEYS1) o[k] = (a[k] || 0) + ((b[k] || 0) - (a[k] || 0)) * t;
  return o;
}
const mir = jp => { const o = JSON.parse(JSON.stringify(jp)); const sw = (a, b) => { const t = o[a]; o[a] = o[b]; o[b] = t; };
  for (const [a, b] of [['hL', 'hR'], ['kL', 'kR'], ['aL', 'aR'], ['sL', 'sR'], ['eL', 'eR'], ['wL', 'wR']]) sw(a, b); return o; };

/* ---------- позы через наклоны звеньев в пространстве (вид сбоку) ----------
   P — таз, C — грудь, H — голова: 0 = вертикально, + = наклон вперёд.
   конечности (t бедро, s голень, f стопа; u плечо, a предплечье): угол от «висит вниз», + = назад, − = вперёд.
   стопа: 0 = плашмя носком вперёд, 90 = носком вниз (упор на пальцы), 180 = подъёмом на полу (носок назад). */
export function W(w) {
  const o = {root: [w.P || 0, 0, w.yaw || 0], sp: [(w.C ?? w.P ?? 0) - (w.P || 0), 0, 0], nk: [(w.H ?? w.C ?? 0) - (w.C ?? w.P ?? 0), 0, 0]};
  const C = w.C ?? w.P ?? 0;
  for (const s of ['L', 'R']) {
    const t = w['t' + s] ?? 0, sh = w['s' + s] ?? t, f = w['f' + s] ?? 0, u = w['u' + s] ?? 0, fa = w['a' + s] ?? u;
    o['h' + s] = [(w.P || 0) - t, w.hipAbd ?? 3, 0]; o['k' + s] = sh - t; o['a' + s] = sh - f;
    o['s' + s] = [C - u, w.shAbd ?? 8, w.shRot ?? 0]; o['e' + s] = u - fa;
  }
  for (const k of ['hands', 'pins', 'pray', 'elbowUp', 'fit', 'fitT']) if (w[k] !== undefined) o[k] = w[k];
  o.w = w; return o;
}
const P = {};
P.pranam = {root: [0, 0, 0], sp: [0, 0, 0], nk: [0, 0, 0], hL: [0, 2, 0], hR: [0, 2, 0], aL: 0, aR: 0,
  sL: [38, 28, 62], sR: [38, 28, 62], eL: 118, eR: 118, hands: {L: 'namaste', R: 'namaste'}, pray: true};
P.hastaut = {root: [-6, 0, 0], sp: [-22, 0, 0], nk: [-14, 0, 0], hL: [-4, 2, 0], hR: [-4, 2, 0], kL: 4, kR: 4, aL: 4, aR: 4,
  sL: [172, 6, 0], sR: [172, 6, 0], eL: 4, eR: 4, hands: {L: 'open', R: 'open'}};
/* наклон: таз сильно вперёд, грудь вниз к ногам, колени мягкие, ладони у стоп */
P.padah = W({P: 128, C: 168, H: 182, tL: -18, sL: 10, tR: -18, sR: 10, uL: -12, aL: -12, uR: -12, aR: -12, hands: {L: 'floor', R: 'floor'}, pins: ['handL', 'handR'], fit: 'C'});
/* выпад: левая стопа впереди (голень вертикально), правое колено на полу, подъём стопы на полу; корпус наклонён, грудь раскрыта, взгляд вперёд-вверх */
P.ashwaR = W({P: 30, C: 34, H: -6, tL: -104, sL: -6, fL: 0, tR: 38, sR: 90, fR: 180, uL: 0, aL: 0, uR: 0, aR: 0, hands: {L: 'floor', R: 'floor'}, pins: ['handL', 'handR', 'footL'], fit: 'P'});
/* собака: таз вверх, руки и спина одной линией, ноги прямые, пятки тянутся к полу */
P.edog = W({P: 132, C: 128, H: 140, tL: 44, tR: 44, fL: 12, fR: 12, uL: -52, aL: -52, uR: -52, aR: -52, hands: {L: 'floor', R: 'floor'}, pins: ['handL', 'handR', 'footL', 'footR'], fit: 'P'});
/* аштанга: колени, грудь и подбородок на полу, таз приподнят, локти назад-вверх, пальцы ног подогнуты */
P.a8 = W({P: 122, C: 126, H: 96, tL: 32, sL: 90, fL: 90, tR: 32, sR: 90, fR: 90, uL: 150, aL: 4, uR: 150, aR: 4, shAbd: 24, hands: {L: 'floor', R: 'floor'}, pins: ['handL', 'handR'], elbowUp: 1.5, fit: 'P', fitT: 'chest'});
/* кобра: таз и ноги на полу, подъёмы стоп на полу, грудь вверх, локти мягкие у корпуса */
P.sarp = W({P: 86, C: 36, H: 8, tL: 90, sL: 90, fL: 178, tR: 90, sR: 90, fR: 178, uL: 22, aL: -8, uR: 22, aR: -8, shAbd: 10, hands: {L: 'floor', R: 'floor'}, pins: ['handL', 'handR'], elbowUp: .6});
const mirW = w => { const o = {...w}; for (const [a, b] of [['tL', 'tR'], ['sL', 'sR'], ['fL', 'fR'], ['uL', 'uR'], ['aL', 'aR']]) { o[a] = w[b]; o[b] = w[a]; } return o; };
P.ashwaL = W(mirW(P.ashwaR.w));

const K = {};
K.flatHalf = W({P: 62, C: 60, H: 58, tL: 0, tR: 0, uL: -118, aL: -118, uR: -118, aR: -118, hands: {L: 'open', R: 'open'}});
K.squatFold = W({P: 105, C: 140, H: 150, tL: -48, sL: 22, tR: -48, sR: 22, uL: -14, aL: -14, uR: -14, aR: -14, hands: {L: 'floor', R: 'floor'}, pins: ['handL', 'handR'], fit: 'C'});
K.highLungeR = W({P: 50, C: 52, H: 30, tL: -96, sL: -4, fL: 0, tR: 58, sR: 58, fR: 60, uL: -2, aL: -2, uR: -2, aR: -2, hands: {L: 'floor', R: 'floor'}, pins: ['handL', 'handR'], fit: 'P'});
K.plank = W({P: 76, C: 76, H: 80, tL: 76, tR: 76, sL: 76, sR: 76, fL: 68, fR: 68, uL: 0, aL: 0, uR: 0, aR: 0, line: true, hands: {L: 'floor', R: 'floor'}, pins: ['handL', 'handR', 'footL', 'footR'], fit: 'P'});
K.kneesDown = W({P: 104, C: 110, H: 118, tL: 4, sL: 90, fL: 90, tR: 4, sR: 90, fR: 90, uL: -24, aL: -24, uR: -24, aR: -24, hands: {L: 'floor', R: 'floor'}, pins: ['handL', 'handR'], fit: 'C'});
K.kneeToChestR = W({P: 112, C: 112, H: 116, tL: 50, sL: 50, fL: 70, tR: -96, sR: 18, fR: 40, uL: -16, aL: -16, uR: -16, aR: -16, hands: {L: 'floor', R: 'floor'}, pins: ['handL', 'handR', 'footL'], fit: 'C'});
/* передняя нога уходит назад: колено под таз, голень назад, стопа над полом */
K.stepBackL = W({P: 84, C: 84, H: 80, tL: -14, sL: 78, fL: 110, tR: 62, sR: 62, fR: 64, uL: 0, aL: 0, uR: 0, aR: 0, hands: {L: 'floor', R: 'floor'}, pins: ['handL', 'handR', 'footR'], fit: 'P'});
/* задняя нога шагает вперёд к рукам: колено к груди */
K.stepFwdL = W({P: 74, C: 112, H: 124, tL: -44, sL: 42, fL: 62, tR: -72, sR: -4, fR: 0, uL: -10, aL: -10, uR: -10, aR: -10, hands: {L: 'floor', R: 'floor'}, pins: ['handL', 'handR', 'footR'], fit: 'C'});
K.highLungeL = W(mirW(K.highLungeR.w)); K.kneeToChestL = W(mirW(K.kneeToChestR.w));
K.stepBackR = W(mirW(K.stepBackL.w)); K.stepFwdR = W(mirW(K.stepFwdL.w));
for (const k of ['stepBackR', 'stepFwdR', 'highLungeL', 'kneeToChestL']) { K[k].pins = K[k].pins.map(p => p.endsWith('L') ? p.slice(0, -1) + 'R' : p.endsWith('R') ? p.slice(0, -1) + 'L' : p); }
P.ashwaL.pins = P.ashwaL.pins.map(p => p === 'footL' ? 'footR' : p);
K.riseHalf = K.flatHalf;

export const POSES = P, PHASES = K;

/* переходы: последовательность промежуточных фаз (ключ: 'из>в') */
export const ROUTES = {
  'pranam>hastaut': [], 'hastaut>padah': ['flatHalf'],
  'padah>ashwaR': ['squatFold', 'highLungeR'], 'padah>ashwaL': ['squatFold', 'highLungeL'],
  'ashwaR>edog': ['highLungeR', 'stepBackL', 'plank'], 'ashwaL>edog': ['highLungeL', 'stepBackR', 'plank'],
  'edog>a8': ['kneesDown'], 'a8>sarp': [], 'sarp>edog': [],
  'edog>ashwaL': ['kneeToChestR', 'highLungeL'], 'edog>ashwaR': ['kneeToChestL', 'highLungeR'],
  'ashwaL>padah': ['highLungeL', 'stepFwdL', 'squatFold'], 'ashwaR>padah': ['highLungeR', 'stepFwdR', 'squatFold'],
  'padah>hastaut': ['squatFold', 'riseHalf'], 'hastaut>pranam': [],
};
