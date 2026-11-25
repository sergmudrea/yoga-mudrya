/* Авторские позы, заменяющие атлас там, где он неточен (ключ — id позы атласа, сторона m=0; m=1 — зеркало).
   W: P/C/H — наклон таза/груди/головы (+ вперёд), конечности — угол от «висит вниз» (+ назад, − вперёд),
   стопа: 0 плашмя, 90 на пальцах, 180 подъёмом на полу. */
import {W, POSES} from './auth.mjs';
const lat = (jp, sp, nk) => { jp.sp = [jp.sp[0], sp, 0]; if (nk != null) jp.nk = [jp.nk[0], nk, 0]; return jp; };
const floor = {L: 'floor', R: 'floor'}, open = {L: 'open', R: 'open'}, lock = {L: 'lock', R: 'lock'};
const seat = {tL: -90, sL: -90, fL: -70, tR: -90, sR: -90, fR: -70};
export const OVR = {
  /* на пятках, корпус к бёдрам, ладони широко на полу впереди, пальцы ног подогнуты */
  darnika: W({P: 52, C: 96, H: 104, tL: -80, sL: 92, fL: 90, tR: -80, sR: 92, fR: 90, uL: -128, aL: -136, uR: -128, aR: -136, shAbd: 26, hands: floor, pins: ['handL', 'handR'], fit: 'C'}),
  /* лёжа на животе, руки вдоль тела, голова повёрнута набок */
  croc: W({P: 90, C: 90, H: 90, tL: 90, sL: 90, fL: 176, tR: 90, sR: 90, fR: 176, uL: 92, aL: 92, uR: 92, aR: 92, shAbd: 10, hands: open}),
  /* Сурья: авторские позы */
  pranam: POSES.pranam, hastaut: POSES.hastaut, padah: POSES.padah, ashwa: POSES.ashwaR, edog: POSES.edog, a8: POSES.a8, sarp: POSES.sarp,
  /* боковой наклон: руки в замке над головой, корпус уходит вбок */
  bok: lat(W({P: 0, C: 0, H: 0, tL: 0, tR: 0, uL: 178, aL: 180, uR: 178, aR: 180, shAbd: 4, hands: lock}), 34, 10),
  /* планка, правое колено к правому плечу */
  plknee: W({P: 70, C: 74, H: 80, tL: 70, sL: 70, fL: 62, tR: -50, sR: 96, fR: 120, uL: 0, aL: 0, uR: 0, aR: 0, hands: floor, pins: ['handL', 'handR', 'footL'], fit: 'P'}),
  /* кошка: спина круглая, колено к лбу */
  antknee: W({P: 70, C: 104, H: 140, tL: 2, sL: 90, fL: 178, tR: -58, sR: 58, fR: 90, uL: 4, aL: 4, uR: 4, aR: 4, hands: floor, pins: ['handL', 'handR'], fit: 'C'}),
  /* кошка: нога назад-вверх, спина ровная */
  antkick: W({P: 86, C: 86, H: 78, tL: 2, sL: 90, fL: 178, tR: 112, sR: 112, fR: 150, uL: 2, aL: 2, uR: 2, aR: 2, hands: floor, pins: ['handL', 'handR'], fit: 'C'}),
  /* полумесяц на колене: заднее колено и подъём стопы на полу, руки вверх, грудной прогиб */
  ardhach: W({P: 18, C: -6, H: -24, tL: -98, sL: -4, fL: 0, tR: 44, sR: 92, fR: 178, uL: 176, aL: 178, uR: 176, aR: 178, hands: open, pins: ['footL']}),
  lcres3: W({P: 22, C: -18, H: -40, tL: -98, sL: -4, fL: 0, tR: 46, sR: 92, fR: 178, uL: 196, aL: 200, uR: 196, aR: 200, hands: open, pins: ['footL']}),
  /* широкая «собака мордой вверх» на коленях: колени широко, голени на полу, грудь вперёд-вверх */
  wideknees: W({P: 34, C: 4, H: -14, tL: 38, sL: 92, fL: 178, tR: 38, sR: 92, fR: 178, uL: -6, aL: -6, uR: -6, aR: -6, hipAbd: 18, hands: floor, pins: ['handL', 'handR'], fit: 'C'}),
  /* рыба: лёжа на спине, грудь вверх, макушка к полу, руки вдоль тела */
  matsya: W({P: -90, C: -40, H: -128, tL: -90, sL: -90, fL: -40, tR: -90, sR: -90, fR: -40, uL: -84, aL: -96, uR: -84, aR: -96, hands: floor}),
  /* наклон сидя с круглой спиной, руки к стопам */
  ugra: W({...seat, P: 38, C: 92, H: 122, uL: -58, aL: -62, uR: -58, aR: -62, hands: open}),
  /* наклон сидя, руки в замке за спиной подняты */
  ugrash: W({...seat, P: 40, C: 92, H: 118, uL: 150, aL: 154, uR: 150, aR: 154, hands: lock}),
  paschsh: W({...seat, P: 52, C: 78, H: 88, uL: 140, aL: 144, uR: 140, aR: 144, hands: lock}),
  /* широкий сед: наклон вперёд, ладони на полу */
  upavfold: W({...seat, P: 46, C: 84, H: 96, uL: -60, aL: -66, uR: -60, aR: -66, hipAbd: 42, shAbd: 20, hands: floor, pins: ['handL', 'handR'], fit: 'C'}),
  /* широкий сед с прогибом: ладони на полу сзади, грудь вверх */
  upavfix: W({...seat, P: -14, C: -26, H: -30, uL: 38, aL: 38, uR: 38, aR: 38, hipAbd: 42, shAbd: 14, hands: floor, pins: ['handL', 'handR']}),
  /* широкий сед, наклон вперёд, ладони сложены за спиной */
  upavnam: W({...seat, P: 46, C: 84, H: 96, uL: 128, aL: 60, uR: 128, aR: 60, hipAbd: 42, hands: open}),
  upavsh: W({...seat, P: 46, C: 84, H: 96, uL: 146, aL: 150, uR: 146, aR: 150, hipAbd: 42, hands: lock}),
  upavside: lat(W({...seat, P: 6, C: 6, H: 6, uL: 175, aL: 178, uR: -30, aR: -30, hipAbd: 42, hands: open}), -38, -12),
};
