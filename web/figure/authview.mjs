/* постановка авторской позы на модель: углы → кости, кисти на пол/в намасте, опора на пол */
import * as T from 'three';
import {jpToTW, mixJP, POSES, PHASES, ROUTES, W as Wf} from './auth.mjs';
const V = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z), Q = () => new T.Quaternion();
const basisQ = (d, n) => { const c = V().crossVectors(n, d); return Q().setFromRotationMatrix(new T.Matrix4().makeBasis(n, d, c)); };
export function makeAuthView(fig) {
  const {B, wp, wq, samp, sampleWorld, setPelvisPos, ik2, CHAIN, syncHair, toes} = fig;
  const restBasis = s => basisQ(fig.handRest[s].d, fig.handRest[s].n);
  function handQ(s, d, n) { return basisQ(d, n).multiply(restBasis(s).invert()); }
  function build(jp) {
    const TW = jpToTW(jp);
    const R = TW.pelvis, yaw = Q().setFromAxisAngle(V(0, 1, 0), ((jp.root || [])[2] || 0) * Math.PI / 180);
    const F = V(0, 0, 1).applyQuaternion(yaw);
    for (const s of ['L', 'R']) {
      const shape = (jp.hands || {})[s];
      let target = null;
      if (shape === 'floor') target = handQ(s, F.clone(), V(0, -1, 0));
      if (shape === 'namaste') { const up = V(0, 1, 0).applyQuaternion(TW.chest), med = V(s === 'L' ? -1 : 1, 0, 0).applyQuaternion(TW.chest); target = handQ(s, up, med); }
      if (target) { /* половину скрутки берёт предплечье (пронация), половину — кисть */
        const rel = TW['farm' + s].clone().invert().multiply(target);
        const tw = Q().set(0, rel.y, 0, rel.w); if (tw.lengthSq() > 1e-9) { tw.normalize(); const half = Q().slerp(tw, .55); TW['farm' + s].multiply(half); }
        TW['hand' + s] = target; }
    }
    return TW;
  }
  const regMin = (P, r) => { let m = Infinity, k = -1; for (let j = 0; j < samp.length; j++) if (samp[j].reg === r && P[j * 3 + 1] < m) { m = P[j * 3 + 1]; k = j; } return [m, k]; };
  function reach(r, k, target, pole) { for (let it = 0; it < 3; it++) { const P = sampleWorld(); const c = V(P[k * 3], P[k * 3 + 1], P[k * 3 + 2]); if (c.distanceTo(target) < .002) break; const end = wp(B[CHAIN[r][2]]); const hw = wq(B[CHAIN[r][2]]); ik2(CHAIN[r], end.add(target.clone().sub(c)), pole); } }
  /* показать позу: x,z — положение таза; возвращает опорные точки */
  function show(jp, x = 0, z = 0, opt = {}) {
    const TW = build(jp); fig.pose(TW, jp.hands || {}); setPelvisPos(V(0, 1, 0));
    let P = sampleWorld(); let m = Infinity;
    for (let j = 0; j < samp.length; j++) { const r = samp[j].reg; if (!jp.armBal && /^(hand|farm)/.test(r) && (jp.pins || []).some(p => p.startsWith('hand'))) continue; if (jp.fitT && opt.fitting && r === jp.fitT) continue; if (r.startsWith('hand') && !jp.armBal) continue; m = Math.min(m, P[j * 3 + 1]); }
    const y = (opt.y != null ? opt.y : jp.seat ? jp.seat + .1 : 1 - m - (opt.fitting ? 0 : jp.drop || 0)); setPelvisPos(V(x, y, z));
    const fw = V(0, 0, 1).applyQuaternion(Q().setFromAxisAngle(V(0, 1, 0), ((jp.root || [])[2] || 0) * Math.PI / 180));
    const pins = opt.pins || jp.pins || [];
    P = sampleWorld();
    const out = {};
    for (const r of pins) {
      const [mm, k] = regMin(P, r); if (k < 0) continue;
      const tgt = opt.targets && opt.targets[r] ? opt.targets[r].clone() : V(P[k * 3], .003, P[k * 3 + 2]);
      reach(r, k, tgt, curPole(r) || (r.startsWith('hand') ? fw.clone().negate().add(V(0, jp.elbowUp || 0, 0)) : fw.clone())); out[r] = {k, p: tgt};
    }
    if (jp.pray) { /* ладони вместе перед грудиной */
      const ch = wp(B.spine_03), f = V(0, 0, 1).applyQuaternion(wq(B.spine_03)), up = V(0, 1, 0).applyQuaternion(wq(B.spine_03));
      const c = ch.clone().addScaledVector(f, .2).addScaledVector(up, .02);
      for (const s of ['L', 'R']) { const lat = V(s === 'L' ? 1 : -1, 0, 0).applyQuaternion(wq(B.spine_03));
        const hb = B['hand_' + s.toLowerCase()], mid = B['middle_01_' + s.toLowerCase()];
        const off = wp(hb).sub(wp(mid).lerp(wp(hb), .5)); /* центр ладони → запястье */
        ik2(CHAIN['hand' + s], c.clone().addScaledVector(lat, .018).add(off), lat.clone().add(V(0, -.7, 0)).add(f.clone().multiplyScalar(-.3))); }
    }
    if (jp.hands && jp.hands.L === 'lock' && jp.hands.R === 'lock') joinHands();
    toes(); syncHair();
    return {y, pins: out};
  }
  /* полюс IK по текущему сгибу колена/локтя: нога, согнутая в сторону (боковой угол), остаётся согнутой в сторону */
  function curPole(r) { const [a, m, e] = CHAIN[r].map(n => wp(B[n])); const mid = a.clone().add(e).multiplyScalar(.5); const p = m.sub(mid);
    return p.length() > .03 ? p.normalize() : null; }
  /* «замок»: кисти сцеплены — сводим запястья к общей точке (IK, плоскость сгиба локтя сохраняется) */
  function joinHands() {
    const hl = wp(B.hand_l), hr = wp(B.hand_r); const d = hl.distanceTo(hr); if (d > .45) return;
    const mid = hl.clone().add(hr).multiplyScalar(.5), ax = hl.clone().sub(hr).normalize();
    for (let it = 0; it < 2; it++) for (const s of ['L', 'R']) { const b = s === 'L' ? B.hand_l : B.hand_r; const t = mid.clone().addScaledVector(ax, s === 'L' ? .035 : -.035);
      ik2(CHAIN['hand' + s], t, wp(s === 'L' ? B.lowerarm_l : B.lowerarm_r).sub(wp(s === 'L' ? B.upperarm_l : B.upperarm_r))); }
  }
  /* подбор одного угла так, чтобы опорные кисти без IK оказались на полу (поза согласована с пропорциями модели) */
  function fit(jp) {
    /* подбор наклона корпуса (C или P) так, чтобы опорные ладони без IK оказались у пола (поза под пропорции модели) */
    if (!jp.fit || !jp.w) return jp;
    const key = jp.fit; let best = null; const w0 = jp.w;
    for (let v = (w0[key] || 0) - 40; v <= (w0[key] || 0) + 40; v += 2) {
      const w = {...w0, [key]: v}; if (key === 'P' && w0.C != null) w.C = w0.C + (v - w0.P); if (key === 'P' && w0.H != null) w.H = w0.H + (v - w0.P);
      if (key === 'C' && w0.H != null) w.H = w0.H + (v - w0.C);
      /* руки, заданные «вдоль корпуса», поворачиваются вместе с ним */
      if (key === 'C' || key === 'P') for (const s of ['L', 'R']) { if (w0['u' + s] != null && Math.abs(w0['u' + s] - ((w0.C ?? w0.P) - 180)) < 8) { w['u' + s] = w0['u' + s] + (v - w0[key]); w['a' + s] = (w0['a' + s] ?? w0['u' + s]) + (v - w0[key]); } }
      if (w0.line) { const L = (w.P || 0); for (const s of ['L', 'R']) { w['t' + s] = L; w['s' + s] = L; w['f' + s] = L - 8; } }
      const j2 = Wf(w); show(j2, 0, 0, {pins: [], fitting: true}); const P = sampleWorld();
      const gap = jp.fitT ? regMin(P, jp.fitT)[0] - regMin(P, 'shinL')[0] : Math.max(...['handL', 'handR'].map(r => regMin(P, r)[0]));
      const err = Math.abs(gap - (jp.fitT ? .004 : .006)) + Math.abs(v - (w0[key] || 0)) * .0008; if (!best || err < best.err) best = {err, v, w};
    }
    const out = Wf(best.w); out.fitted = {key, v: best.v, err: +best.err.toFixed(3)}; return out;
  }

  /* ---------- маршрут: ключевые позы → плавная кривая (Catmull-Rom) в угловом пространстве ---------- */
  const VK3 = ['root', 'sp', 'nk', 'hL', 'hR', 'sL', 'sR', 'wL', 'wR'], VK1 = ['kL', 'kR', 'aL', 'aR', 'eL', 'eR'];
  const vec = jp => { const o = []; for (const k of VK3) { const a = jp[k] || [0, 0, 0]; o.push(a[0] || 0, a[1] || 0, a[2] || 0); } for (const k of VK1) o.push(jp[k] || 0); return o; };
  const unvec = (v, src) => { const o = {...src}; let i = 0; for (const k of VK3) { o[k] = [v[i], v[i + 1], v[i + 2]]; i += 3; } for (const k of VK1) o[k] = v[i++]; return o; };
  const fitted = new Map();
  const get = n => { if (!fitted.has(n)) { const jp = POSES[n] || PHASES[n]; fitted.set(n, fit(jp)); } return fitted.get(n); };
  const CONTACT = ['footL', 'footR', 'handL', 'handR', 'shinL', 'shinR', 'pelvis', 'thighL', 'thighR', 'chest', 'head'];
  const BODYC = ['pelvis', 'thighL', 'thighR', 'shinL', 'shinR', 'chest', 'head'];
  function keyInfo(n) { const jp = typeof n === 'object' ? n.jp : get(n); show(jp, 0, 0); const P = sampleWorld(); const c = {};
    for (const r of CONTACT) { const [m, k] = regMin(P, r); if (m < .03 || (jp.pins || []).includes(r)) c[r] = k; }
    const pv = wp(B.pelvis); return {n, jp, c, P, pel: pv}; }
  /* seq: названия поз по порядку; между соседними — фазы из ROUTES */
  function timeline(seq, {hold = .5, seg = .95, poseSeg = 1.15, x0 = 0, z0 = 0} = {}) {
    const names = [seq[0]];
    for (let i = 1; i < seq.length; i++) { const nm = x => typeof x === 'object' ? x.name : x; const r = ROUTES[nm(seq[i - 1]) + '>' + nm(seq[i])] || []; names.push(...r, seq[i]); }
    const keys = []; let t = 0;
    names.forEach((n, i) => { const main = POSES[n] && seq.includes(n);
      if (i > 0) t += main ? poseSeg : seg;
      keys.push({n, t, info: n.info || keyInfo(n)}); if (main) { t += hold; keys.push({n, t, info: keys[keys.length - 1].info, holdDup: true}); } });
    /* положение каждой ключевой позы: общая опора остаётся на месте */
    keys[0].x = x0; keys[0].z = z0;
    for (let i = 1; i < keys.length; i++) {
      const A = keys[i - 1], Bk = keys[i];
      if (Bk.holdDup) { Bk.x = A.x; Bk.z = A.z; Bk.anchor = A.anchor; continue; }
      const common = CONTACT.filter(r => A.info.c[r] != null && Bk.info.c[r] != null);
      let best = null;
      for (const r of common) { const k = A.info.c[r]; const ax = A.info.P[k * 3] + A.x, az = A.info.P[k * 3 + 2] + A.z;
        const x = ax - Bk.info.P[k * 3], z = az - Bk.info.P[k * 3 + 2]; let cost = 0;
        for (const o of common) { if (o === r) continue; const k2 = A.info.c[o]; cost += Math.hypot(A.info.P[k2 * 3] + A.x - (Bk.info.P[k2 * 3] + x), A.info.P[k2 * 3 + 2] + A.z - (Bk.info.P[k2 * 3 + 2] + z)); }
        if (!best || cost < best.cost) best = {cost, r, k, x, z}; }
      if (best) { Bk.x = best.x; Bk.z = best.z; Bk.anchor = best; } else { Bk.x = A.x; Bk.z = A.z; }
    }
    return {keys, T: keys[keys.length - 1].t};
  }
  /* форма кистей: сгиб пальцев плавно меняется между позами (кулак ↔ ладонь) */
  const curlOf = h => (h && typeof h === 'object') ? h : (fig.CURL[h || 'open'] || fig.CURL.open);
  function mixHands(a = {}, b = {}, u) { const o = {};
    for (const s of ['L', 'R']) { const x = a[s] || 'open', y = b[s] || 'open';
      if (x === 'floor' || y === 'floor' || x === 'namaste' || y === 'namaste') { o[s] = u < .5 ? x : y; continue; }
      const p = curlOf(x), q = curlOf(y); o[s] = {c: p.c.map((v, i) => v + (q.c[i] - v) * u), t: p.t.map((v, i) => v + ((q.t[i] || 0) - v) * u)}; }
    return o; }
  const cr = (p0, p1, p2, p3, u) => { const u2 = u * u, u3 = u2 * u; return .5 * ((2 * p1) + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u2 + (-p0 + 3 * p1 - 3 * p2 + p3) * u3); };
  function frameAt(tl, t) {
    const K = tl.keys; let i = 0; while (i < K.length - 2 && K[i + 1].t <= t) i++;
    const A = K[i], Bk = K[i + 1]; const u0 = Bk.t > A.t ? (t - A.t) / (Bk.t - A.t) : 1;
    const u = u0 * u0 * (3 - 2 * u0) * .35 + u0 * .65; /* мягкий разгон/торможение */
    const P0 = vec(K[Math.max(0, i - 1)].info.jp), P1 = vec(A.info.jp), P2 = vec(Bk.info.jp), P3 = vec(K[Math.min(K.length - 1, i + 2)].info.jp);
    const v = P1.map((_, j) => (P1[j] === P2[j]) ? P1[j] : cr(K[i - 1] && !A.holdDup ? P0[j] : P1[j], P1[j], P2[j], (K[i + 2] && !Bk.holdDup) ? P3[j] : P2[j], u));
    const src = u < .5 ? A.info.jp : Bk.info.jp;
    const jp = unvec(v, {hands: mixHands(A.info.jp.hands, Bk.info.jp.hands, u), wL: src.wL, wR: src.wR, pray: A.info.jp.pray && Bk.info.jp.pray, elbowUp: (A.info.jp.elbowUp || 0) * (1 - u) + (Bk.info.jp.elbowUp || 0) * u});
    /* поза без IK, потом: горизонталь — по опорной вершине, высота — самая низкая точка (кроме кистей) на полу */
    const TW = build(jp); fig.pose(TW, jp.hands || {}); setPelvisPos(V(0, 1, 0)); let P = sampleWorld();
    /* общая опора телом (таз, бёдра, голени, грудь, голова) в начале и в конце — по ней и держим высоту: сидя тело не «всплывает» */
    /* высота: опора телом в начале (A) и в конце (B) — смешиваем; стопы/кисти ниже пола поднимает IK; остальное тело не ниже пола */
    const ground = regs => { let mm = Infinity; for (let j = 0; j < samp.length; j++) { const r = samp[j].reg; if (regs ? !regs.includes(r) : /^(hand|foot)/.test(r)) continue; mm = Math.min(mm, P[j * 3 + 1]); } return mm; };
    const ra = BODYC.filter(r => A.info.c[r] != null), rb = BODYC.filter(r => Bk.info.c[r] != null);
    const mAll = (() => { let mm = Infinity; for (let j = 0; j < samp.length; j++) { if (samp[j].reg.startsWith('hand')) continue; mm = Math.min(mm, P[j * 3 + 1]); } return mm; })();
    let m;
    const gi = (info, rs) => Math.min(...rs.map(r => P[info.c[r] * 3 + 1]));
    if (ra.length || rb.length) { const ma = ra.length ? gi(A.info, ra) : ground(null), mb = rb.length ? gi(Bk.info, rb) : ground(null); m = ma + (mb - ma) * u; m = Math.min(m, ground(["pelvis", "chest", "head", "uarmL", "uarmR"])); }
    else m = mAll;
    let x, z; const an = Bk.anchor;
    if (an) { x = A.info.P[an.k * 3] + A.x - P[an.k * 3]; z = A.info.P[an.k * 3 + 2] + A.z - P[an.k * 3 + 2]; } else { x = A.x + (Bk.x - A.x) * u; z = A.z + (Bk.z - A.z) * u; }
    { const yf = 1 - m - ((A.info.jp.drop || 0) * (1 - u) + (Bk.info.jp.drop || 0) * u);
      const ya = A.info.jp.seat ? A.info.jp.seat + .1 : yf, yb = Bk.info.jp.seat ? Bk.info.jp.seat + .1 : yf;
      setPelvisPos(V(x, (A.info.jp.seat || Bk.info.jp.seat) ? ya + (yb - ya) * u : yf, z)); }
    /* кисти/стопы, стоящие на полу и в начале, и в конце сегмента, держатся на месте (IK) */
    const fw = V(0, 0, 1);
    for (const r of ['handL', 'handR', 'footL', 'footR']) {
      const ka = A.info.c[r], kb = Bk.info.c[r]; if (ka == null || kb == null) continue;
      const pa = V(A.info.P[ka * 3] + A.x, .003, A.info.P[ka * 3 + 2] + A.z), pb = V(Bk.info.P[kb * 3] + Bk.x, .003, Bk.info.P[kb * 3 + 2] + Bk.z);
      if (pa.distanceTo(pb) > .08 && r.startsWith('foot')) continue;
      const pole = curPole(r) || (r.startsWith('hand') ? fw.clone().negate().add(V(0, jp.elbowUp || 0, 0)) : fw.clone());
      reach(r, ka, pa.lerp(pb, u), pole);
    }
    /* кисти без опоры не уходят под пол */
    P = sampleWorld();
    for (const r of ['handL', 'handR', 'footL', 'footR']) { const [mm, k] = regMin(P, r); if (k >= 0 && mm < -.003) reach(r, k, V(P[k * 3], .003, P[k * 3 + 2]), r.startsWith('hand') ? fw.clone().negate() : fw.clone()); }
    if (jp.pray) show(jp, x, z, {y: 1 - m, pins: []});
    toes(); syncHair();
    return {x, z, i};
  }
  return {build, show, fit, timeline, frameAt, keyInfo, POSES, PHASES, ROUTES, mixJP};
}
