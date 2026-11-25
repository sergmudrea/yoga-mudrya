/* Позы каталога (2053: базовые и вариации) — из углов рисунка в мировые повороты звеньев.
   Угол рисунка: 0 — вперёд, 90 — вверх, 180 — назад, 270 — вниз (против часовой). view side — плоскость сбоку,
   front — плоскость спереди (+x рисунка = левая сторона фигуры). Скрутку звеньев выбирает перевод в суставы (twToJP):
   колено и локоть — шарниры, ротация бедра и плеча в пределах. */
import * as T from 'three';
const D = Math.PI / 180, UP = new T.Vector3(0, 1, 0), DN = new T.Vector3(0, -1, 0), FW = new T.Vector3(0, 0, 1), X = new T.Vector3(1, 0, 0);
export const CAT_KEYS = ['torso', 'chest', 'neck', 'thigh_r', 'shin_r', 'foot_r', 'thigh_l', 'shin_l', 'foot_l', 'upper_arm_r', 'forearm_r', 'upper_arm_l', 'forearm_l'];
export function catTW(g) {
  const f = {}; CAT_KEYS.forEach((k, i) => f[k] = g[i]); const front = !!g[13];
  const dir = a => front ? new T.Vector3(Math.cos(a * D), Math.sin(a * D), 0) : new T.Vector3(0, Math.sin(a * D), Math.cos(a * D));
  const seg = (rest, a, base) => { const d = dir(a); const b = base || new T.Quaternion(); const r = rest.clone().applyQuaternion(b);
    return new T.Quaternion().setFromUnitVectors(r, d).multiply(b); };
  const TW = {};
  TW.pelvis = seg(UP, f.torso); TW.chest = seg(UP, f.chest, TW.pelvis); TW.lumbar = TW.pelvis.clone().slerp(TW.chest, .45);
  TW.head = seg(UP, f.neck, TW.chest); TW.neck = TW.chest.clone().slerp(TW.head, .5);
  for (const [s, k] of [['R', 'r'], ['L', 'l']]) {
    TW['thigh' + s] = seg(DN, f['thigh_' + k], TW.pelvis); TW['shin' + s] = seg(DN, f['shin_' + k], TW['thigh' + s]);
    /* стопа: шарнир голеностопа — поворот вокруг оси X голени, ближе всего к нужному направлению */
    const S = TW['shin' + s], want = dir(f['foot_' + k]); let best = null;
    for (let a = -100; a <= 60; a += 2) { const q = S.clone().multiply(new T.Quaternion().setFromAxisAngle(X, -a * D)); const e = FW.clone().applyQuaternion(q).angleTo(want); if (!best || e < best.e) best = {e, q}; }
    TW['foot' + s] = best.q;
    TW['uarm' + s] = seg(DN, f['upper_arm_' + k], TW.chest); TW['farm' + s] = seg(DN, f['forearm_' + k], TW['uarm' + s]);
    TW['hand' + s] = TW['farm' + s].clone();
  }
  return TW;
}
