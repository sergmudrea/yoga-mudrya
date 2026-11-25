/* Позы для мягких программ: на стуле, лёжа (на коврике или в кровати), мелкие движения (пальцы, кисти, стопы, шея).
   Те же обозначения W, что в auth.mjs. seat — высота сиденья стула; focus — на что смотрит камера. */
import {W} from './auth.mjs';
const SEAT = .46;
const open = {L: 'open', R: 'open'};
const set = (jp, o) => Object.assign(jp, o);
const CH = {P: 0, C: 0, H: 0, tL: -90, sL: 0, fL: 0, tR: -90, sR: 0, fR: 0, hipAbd: 7};
const chair = (w, extra = {}) => set(W({...CH, uL: -18, aL: -66, uR: -18, aR: -66, shAbd: 14, hands: open, ...w}), {seat: SEAT, pins: ['footL', 'footR'], prop: 'chair', ...extra});
const SU = {P: -90, C: -90, H: -90, tL: -90, sL: -90, fL: -150, tR: -90, sR: -90, fR: -150, uL: -84, aL: -86, uR: -84, aR: -86, shAbd: 14, hands: open};
const lie = (w, extra = {}) => set(W({...SU, ...w}), extra);
const nk = (jp, a) => { jp.nk = [jp.nk[0] + (a[0] || 0), a[1] || 0, a[2] || 0]; return jp; };
const sp = (jp, a) => { jp.sp = [jp.sp[0] + (a[0] || 0), a[1] || 0, a[2] || 0]; return jp; };
const wr = (jp, a) => { jp.wL = a.slice(); jp.wR = a.slice(); return jp; };
const floorSit = {seat: .015, pins: ['footL', 'footR']};
const J = o => Object.assign({root: [0, 0, 0], sp: [0, 0, 0], nk: [0, 0, 0], hL: [0, 3, 0], hR: [0, 3, 0], kL: 0, kR: 0, aL: 0, aR: 0, sL: [0, 10, 0], sR: [0, 10, 0], eL: 0, eR: 0, hands: {L: 'open', R: 'open'}}, o);
export const MV = {
  /* сидя боком (ноги согнуты в одну сторону) — переход между «на коленях» и «сидя» */
  sideSit: J({seat: .015, root: [4, 0, 0], hL: [80, 10, 55], kL: 150, hR: [70, 22, -40], kR: 152, aL: -30, aR: -40, sL: [10, 14, 0], sR: [6, 30, 0], eL: 20, eR: 10, hands: {L: 'open', R: 'floor'}, pins: ['handR']}),
  /* дерево: стопа правой ноги у внутренней стороны левого бедра, ладони у груди */
  tree: J({hR: [62, 48, 62], kR: 146, aR: -30, hands: {L: 'namaste', R: 'namaste'}, pray: true, pins: ['footL'], sL: [38, 28, 62], sR: [38, 28, 62], eL: 118, eR: 118}),
  treeUp: J({hR: [62, 48, 62], kR: 146, aR: -30, pins: ['footL'], sL: [176, 6, 0], sR: [176, 6, 0], eL: 4, eR: 4}),
  /* бабочка: сидя, стопы вместе, колени вниз / вверх */
  bfDown: J({...floorSit, cam: 60, hL: [82, 52, 62], kL: 150, hR: [82, 52, 62], kR: 150, aL: -20, aR: -20, sL: [32, 10, 0], sR: [32, 10, 0], eL: 50, eR: 50}),
  bfUp: J({...floorSit, cam: 60, hL: [86, 30, 40], kL: 148, hR: [86, 30, 40], kR: 148, aL: -20, aR: -20, sL: [32, 10, 0], sR: [32, 10, 0], eL: 50, eR: 50}),
  /* сидя скрестив ноги (лёгкая поза) */
  easy: J({...floorSit, cam: 60, hL: [84, 40, 66], kL: 160, hR: [84, 40, 66], kR: 160, aL: -24, aR: -24, sL: [26, 12, 0], sR: [26, 12, 0], eL: 64, eR: 64}),
  /* ---- стул ---- */
  c_sit: chair({}),
  c_tall: chair({uL: -6, aL: -6, uR: -6, aR: -6, shAbd: 18}),
  c_up: chair({uL: 176, aL: 178, uR: 176, aR: 178, shAbd: 6}),
  c_fwd: chair({uL: -88, aL: -90, uR: -88, aR: -90, shAbd: 4}, {focus: 'arms'}),
  c_side_arms: chair({uL: 0, aL: 0, uR: 0, aR: 0, shAbd: 86}),
  c_cow: chair({C: -12, H: -16, uL: -36, aL: -64, uR: -36, aR: -64}),
  c_cat: chair({C: 24, H: 44, uL: -30, aL: -60, uR: -30, aR: -60}),
  c_fold: chair({P: 30, C: 74, H: 86, uL: 2, aL: 2, uR: 2, aR: 2}),
  c_sideL: sp(chair({uL: 0, aL: 0, uR: 168, aR: 172, shAbd: 10}), [0, 24, 0]),
  c_twistL: sp(chair({uL: -36, aL: -82, uR: -20, aR: -70}), [0, 0, 34]),
  c_marchR: chair({tR: -114, sR: -24, fR: 8}, {pins: ['footL']}),
  c_legR: chair({tR: -96, sR: -94, fR: -150}, {pins: ['footL']}),
  c_toes: chair({fL: -24, fR: -24}, {focus: 'feet'}),
  c_heels: chair({fL: 34, fR: 34}, {focus: 'feet'}),
  c_headL: nk(chair({}), [0, 0, 55]),
  c_headTiltL: nk(chair({}), [0, 26, 0]),
  c_chin: nk(chair({}), [26, 0, 0]),
  c_lookUp: nk(chair({}), [-24, 0, 0]),
  /* кисти и пальцы — руки вперёд, камера на кистях */
  h_open: chair({uL: -70, aL: -88, uR: -70, aR: -88, shAbd: 8}, {focus: 'hands'}),
  h_fist: set(chair({uL: -70, aL: -88, uR: -70, aR: -88, shAbd: 8, hands: {L: 'fist', R: 'fist'}}), {focus: 'hands'}),
  h_spread: set(chair({uL: -70, aL: -88, uR: -70, aR: -88, shAbd: 8, hands: {L: 'spread', R: 'spread'}}), {focus: 'hands'}),
  h_wristUp: wr(chair({uL: -70, aL: -88, uR: -70, aR: -88, shAbd: 8}, {focus: 'hands'}), [0, 0, -45]),
  h_wristDn: wr(chair({uL: -70, aL: -88, uR: -70, aR: -88, shAbd: 8}, {focus: 'hands'}), [0, 0, 50]),
  h_palmUp: wr(chair({uL: -70, aL: -88, uR: -70, aR: -88, shAbd: 8}, {focus: 'hands'}), [-80, 0, 0]),
  /* ---- лёжа на спине (коврик или кровать) ---- */
  s_rest: lie({}),
  s_knees: lie({tL: -140, sL: -36, fL: -10, tR: -140, sR: -36, fR: -10}, {pins: ['footL', 'footR']}),
  s_kneeR: lie({tL: -90, sL: -90, fL: -150, tR: -140, sR: -36, fR: -10}, {pins: ['footR']}),
  s_kneeChestR: lie({tR: -214, sR: -70, fR: -140, uR: -172, aR: -116, shAbd: 18}),
  s_kneesChest: lie({tL: -214, sL: -70, fL: -140, tR: -214, sR: -70, fR: -140, uL: -172, aL: -116, uR: -172, aR: -116, shAbd: 18}),
  s_armsUp: lie({uL: 86, aL: 88, uR: 86, aR: 88, shAbd: 10}),
  s_armsSide: lie({uL: -6, aL: -6, uR: -6, aR: -6, shAbd: 86}),
  s_feetFlex: lie({fL: -184, fR: -184}, {focus: 'feet'}),
  s_feetPoint: lie({fL: -112, fR: -112}, {focus: 'feet'}),
  s_headL: nk(lie({}), [0, 0, 55]),
  s_legSlideR: lie({tR: -120, sR: -60, fR: -110}),
  s_fist: set(lie({hands: {L: 'fist', R: 'fist'}}), {focus: 'hands'}),
  s_open: set(lie({}), {focus: 'hands'}),
  s_spread: set(lie({hands: {L: 'spread', R: 'spread'}}), {focus: 'hands'}),
  s_breathIn: lie({C: -96, H: -94, uL: -80, aL: -80, uR: -80, aR: -80}),
};
