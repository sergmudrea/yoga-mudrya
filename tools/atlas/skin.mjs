/* ---------- Skin: a realistic skinned model (Mixamo skeleton) driven by the marionette ----------
   The marionette solver stays the source of truth: joint limits, floor contacts, smooth transitions.
   Every frame the segment world rotations (TW) are copied onto the model's bones:
     bone world rotation = TW[segment] * (bone world rotation in the marionette rest pose)
   so the model inherits twist and knee/elbow direction from the solver, not just limb directions.
   The suit texture is grey in the asset; colours come from vertex colours by body region,
   one palette per theme (top, leggings, feet). Fingers follow the hand shape (open, floor, fist, lock, namaste). */
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

const SEG = {Hips:'pelvis',Spine:'lumbar',Spine2:'chest',Neck:'neck',Head:'head',
  LeftArm:'uarmL',LeftForeArm:'farmL',LeftHand:'handL',RightArm:'uarmR',RightForeArm:'farmR',RightHand:'handR',
  LeftUpLeg:'thighL',LeftLeg:'shinL',LeftFoot:'footL',RightUpLeg:'thighR',RightLeg:'shinR',RightFoot:'footR'};
const FINGERS = ['Index','Middle','Ring','Pinky'];
/* phalanx curl in degrees per hand shape (same shapes as the marionette's fingers) */
const CURL = {open:{c:[6,10,6],t:[8,10]},floor:{c:[2,2,0],t:[2,0]},fist:{c:[85,95,70],t:[35,50]},
  lock:{c:[62,72,40],t:[6,12]},namaste:{c:[0,0,0],t:[0,4]}};
const PAL = {
  light:{top:[0x1e,0x7a,0x80],low:[0x2e,0x35,0x66],feet:[0x26,0x24,0x2c]},
  dark:{top:[0x2c,0x8e,0x8b],low:[0x4e,0x5a,0xa8],feet:[0x6e,0x69,0x62]},
};
const clean = n => n.replace(/^mixamorig\d*:?/, '');
const regionOf = n => /Foot|Toe/.test(n) ? 'feet' : /UpLeg|Leg|Hips/.test(n) ? 'low' : /Head|Eye|Neck|Hand/.test(n) ? 'skin' : 'top';

export async function createSkin(T, scene, {REST, DIM, url = 'model.glb'}) {
  const gltf = await new GLTFLoader().loadAsync(url);
  const root = gltf.scene;
  const B = {}; const meshes = [];
  root.traverse(o => {
    if (o.isBone) B[clean(o.name)] = o;
    if (o.isSkinnedMesh) { meshes.push(o); o.castShadow = true; o.receiveShadow = false; o.frustumCulled = false; }
  });
  for (const k of [...Object.keys(SEG), 'Spine1', 'LeftShoulder', 'RightShoulder']) if (!B[k]) throw new Error('model: no bone ' + k);
  scene.add(root);
  const V = () => new T.Vector3(), Qn = () => new T.Quaternion();
  const wq = o => o.getWorldQuaternion(Qn()), wp = o => o.getWorldPosition(V());

  /* ---- rest pose = the marionette's rest: standing, arms down, palms to the thighs ---- */
  const aim = (n, child, dir) => {
    root.updateMatrixWorld(true);
    const b = B[n], cur = wp(B[child]).sub(wp(b)).normalize();
    const nw = Qn().setFromUnitVectors(cur, dir).multiply(wq(b));
    b.quaternion.copy(wq(b.parent).invert().multiply(nw));
  };
  const DN = new T.Vector3(0, -1, 0);
  for (const s of ['Left', 'Right']) {
    aim(s + 'Arm', s + 'ForeArm', DN); aim(s + 'ForeArm', s + 'Hand', DN);
    aim(s + 'UpLeg', s + 'Leg', DN); aim(s + 'Leg', s + 'Foot', DN);
  }
  root.updateMatrixWorld(true);
  /* scale: model leg length = marionette leg length, so feet land where the solver puts them */
  const legLen = wp(B.LeftUpLeg).distanceTo(wp(B.LeftLeg)) + wp(B.LeftLeg).distanceTo(wp(B.LeftFoot));
  root.scale.multiplyScalar((DIM.th + DIM.sh) / legLen);
  root.updateMatrixWorld(true);

  const order = []; B.Hips.traverse(o => { if (o.isBone) order.push(o); });
  const restLocal = new Map(order.map(b => [b, b.quaternion.clone()]));
  const delta = {}; for (const n in SEG) delta[n] = wq(B[n]);
  delta.Spine1 = wq(B.Spine1);
  const midHips = () => wp(B.LeftUpLeg).add(wp(B.RightUpLeg)).multiplyScalar(.5);
  const hipOff = wp(B.Hips).sub(midHips());           /* in the rest (identity pelvis) frame */
  const ankleUp = wp(B.LeftFoot).y;                   /* ankle height above the soles in the rest pose */

  /* finger curl axes in each phalanx's own frame */
  const curl = new Map();
  for (const s of ['Left', 'Right']) {
    const pn = REST['hand' + (s === 'Left' ? 'L' : 'R')][1].clone(); /* palm normal at rest */
    const chains = FINGERS.map(f => [1, 2, 3].map(i => B[s + 'Hand' + f + i]));
    chains.push([1, 2, 3].map(i => B[s + 'HandThumb' + i]));
    chains.forEach((ch, ci) => ch.forEach((b, k) => {
      if (!b) return;
      const next = ch[k + 1] || b.children.find(c => c.isBone); if (!next) return;
      const dir = wp(next).sub(wp(b)).normalize();
      const axW = V().crossVectors(dir, pn).normalize();
      curl.set(b, {ax: axW.applyQuaternion(wq(b).invert()), k, thumb: ci === 4, side: s});
    }));
  }

  /* ---- body volumes: capsules along the bones, radius measured from the skinned mesh in the rest pose ----
     Used to keep hands and forearms out of the body and to put a palm on the surface of a knee or a shin. */
  const CAPS = [
    ['pelvis', 'Hips', 'Spine1', /Hips|^Spine$/], ['chest', 'Spine1', 'Neck', /Spine1|Spine2|Shoulder/],
    ['head', 'Head', 'HeadTop_End', /Head|Neck/],
    ['thighL', 'LeftUpLeg', 'LeftLeg', /LeftUpLeg/], ['thighR', 'RightUpLeg', 'RightLeg', /RightUpLeg/],
    ['shinL', 'LeftLeg', 'LeftFoot', /LeftLeg/], ['shinR', 'RightLeg', 'RightFoot', /RightLeg/],
    ['footL', 'LeftFoot', 'LeftToeBase', /LeftFoot|LeftToe/], ['footR', 'RightFoot', 'RightToeBase', /RightFoot|RightToe/],
    ['uarmL', 'LeftArm', 'LeftForeArm', /LeftArm/], ['uarmR', 'RightArm', 'RightForeArm', /RightArm/],
    ['farmL', 'LeftForeArm', 'LeftHand', /LeftForeArm/], ['farmR', 'RightForeArm', 'RightHand', /RightForeArm/],
  ].filter(c => B[c[1]] && B[c[2]]);
  const segPt = (p, a, b, out) => { const ab = V().subVectors(b, a); const t = Math.max(0, Math.min(1, ab.dot(V().subVectors(p, a)) / Math.max(1e-9, ab.lengthSq()))); return out.copy(a).addScaledVector(ab, t); };
  const radius = {};
  {
    const body = meshes.find(m => /Body/i.test(m.name)) || meshes[0];
    body.skeleton.update(); body.updateMatrixWorld(true);
    const dist = Object.fromEntries(CAPS.map(c => [c[0], []]));
    const pos = body.geometry.attributes.position, si = body.geometry.attributes.skinIndex, sw = body.geometry.attributes.skinWeight;
    const ends = Object.fromEntries(CAPS.map(c => [c[0], [wp(B[c[1]]), wp(B[c[2]])]]));
    const v = V(), q = V();
    for (let i = 0; i < pos.count; i += 2) {
      let best = 0, bi = 0;
      for (let k = 0; k < 4; k++) { const w = sw.getComponent(i, k); if (w > best) { best = w; bi = si.getComponent(i, k); } }
      const bn = clean(body.skeleton.bones[bi].name);
      const cap = CAPS.find(c => c[3].test(bn)); if (!cap) continue;
      body.getVertexPosition(i, v); body.localToWorld(v);
      const [a, b] = ends[cap[0]]; dist[cap[0]].push(v.distanceTo(segPt(v, a, b, q)));
    }
    for (const c of CAPS) {
      const d = dist[c[0]].sort((x, y) => x - y);
      radius[c[0]] = d.length ? d[Math.floor(d.length * (/pelvis|chest/.test(c[0]) ? .55 : .7))] : .05;
    }
  }

  /* region colours */
  const regions = meshes.map(m => {
    const tint = !/Face|Eye|lash|hair/i.test(m.name);
    if (!tint) return null;
    const g = m.geometry, si = g.attributes.skinIndex, sw = g.attributes.skinWeight, n = si.count, reg = new Array(n);
    for (let v = 0; v < n; v++) {
      let best = 0, bi = 0;
      for (let k = 0; k < 4; k++) { const w = sw.getComponent(v, k); if (w > best) { best = w; bi = si.getComponent(v, k); } }
      reg[v] = regionOf(clean(m.skeleton.bones[bi].name));
    }
    g.setAttribute('color', new T.BufferAttribute(new Float32Array(n * 3), 3));
    for (const mat of [].concat(m.material)) { mat.vertexColors = true; mat.needsUpdate = true; }
    return {g, reg};
  });
  function setTheme(t) {
    const p = PAL[t] || PAL.light, mul = 1.85;
    const col = {skin: [1, 1, 1]}; for (const k of ['top', 'low', 'feet']) col[k] = p[k].map(x => Math.min(1, x / 255 * mul));
    for (const r of regions) {
      if (!r) continue; const a = r.g.attributes.color;
      for (let v = 0; v < r.reg.length; v++) a.setXYZ(v, ...col[r.reg[v]]);
      a.needsUpdate = true;
    }
  }

  /* golden lock: a soft glow where the fingers interlace */
  const lockM = new T.MeshStandardMaterial({color: '#e8b64c', emissive: '#7a5200', transparent: true, opacity: .55, roughness: .4});
  const glow = {L: new T.Mesh(new T.SphereGeometry(.04, 16, 12), lockM), R: new T.Mesh(new T.SphereGeometry(.04, 16, 12), lockM)};
  scene.add(glow.L); scene.add(glow.R);

  const W = new Map(), tq = Qn(), tv = V();
  let active = true;
  function update(TW, j, shape) {
    root.visible = active; glow.L.visible = glow.R.visible = false;
    if (!active) return;
    root.updateMatrixWorld(true);
    W.clear();
    const parentW = B.Hips.parent ? wq(B.Hips.parent) : Qn();
    for (const b of order) {
      const n = clean(b.name), pw = b === B.Hips ? parentW : W.get(b.parent);
      let w;
      if (n === 'Spine') w = TW.pelvis.clone().slerp(TW.lumbar, .7).multiply(delta.Spine);
      else if (n === 'Spine1') w = TW.lumbar.clone().slerp(TW.chest, .45).multiply(delta.Spine1);
      else if (n === 'Neck') w = TW.chest.clone().slerp(TW.head, .55).multiply(delta.Neck);
      else if (SEG[n]) w = TW[SEG[n]].clone().multiply(delta[n]);
      else {
        w = pw.clone().multiply(restLocal.get(b));
        const c = curl.get(b);
        if (c) {
          const sh = CURL[(shape && shape[c.side === 'Left' ? 'L' : 'R']) || 'open'] || CURL.open;
          const deg = c.thumb ? (sh.t[Math.min(c.k, 1)] || 0) : sh.c[c.k];
          if (deg) w.multiply(tq.setFromAxisAngle(c.ax, deg * Math.PI / 180));
        }
      }
      W.set(b, w);
      b.quaternion.copy(pw.clone().invert().multiply(w));
    }
    /* place the pelvis: model hip joints midway between the solver's hip joints */
    root.updateMatrixWorld(true);
    const target = j.hipL.clone().add(j.hipR).multiplyScalar(.5).add(hipOff.clone().applyQuaternion(TW.pelvis));
    const hp = B.Hips.parent; B.Hips.position.copy(hp ? hp.worldToLocal(target.clone()) : target);
    root.updateMatrixWorld(true);
    fixLegs(j);
    fixArms(TW, j, shape);
    for (const s of ['L', 'R']) {
      if (shape && shape[s] === 'lock') {
        const side = s === 'L' ? 'Left' : 'Right', h = wp(B[side + 'Hand']), m = B[side + 'HandMiddle1'] ? wp(B[side + 'HandMiddle1']) : h;
        glow[s].position.copy(h.lerp(m, .8)); glow[s].visible = true;
      }
    }
  }
  /* ---- arms: palm on the knee/shin/foot/floor where the solver puts it, and never inside the body ---- */
  const capNow = () => CAPS.map(c => ({n: c[0], a: wp(B[c[1]]), b: wp(B[c[2]]), r: radius[c[0]]}));
  const palmOff = (side) => {                       /* palm centre relative to the wrist, in world space */
    const h = wp(B[side + 'Hand']), m = B[side + 'HandMiddle1'] ? wp(B[side + 'HandMiddle1']) : h;
    return m.sub(h).multiplyScalar(.55);
  };
  function push(p, caps, skip, margin) {
    let moved = 0; const q = V();
    for (let it = 0; it < 3; it++) for (const c of caps) {
      if (skip.test(c.n)) continue;
      segPt(p, c.a, c.b, q); const d = p.distanceTo(q), need = c.r + margin;
      if (d < need) { const dir = d > 1e-6 ? V().subVectors(p, q).divideScalar(d) : V(0, 1, 0); p.addScaledVector(dir, need - d); moved = Math.max(moved, need - d); }
    }
    return moved;
  }
  const setWorldQ = (b, w) => { b.quaternion.copy(wq(b.parent).invert().multiply(w)); b.updateMatrixWorld(true); };
  function ik2(side, target, poleHint, chain) {
    const [A, E, H] = (chain || ['Arm', 'ForeArm', 'Hand']).map(n => B[side + n]);
    const handW = wq(H);
    const s = wp(A), e = wp(E), w = wp(H);
    const a = s.distanceTo(e), b = e.distanceTo(w);
    const to = V().subVectors(target, s); let d = to.length(); if (d < 1e-6) return;
    const dir = to.divideScalar(d); d = Math.max(Math.abs(a - b) + 1e-3, Math.min(a + b - 1e-3, d));
    const pole = V().subVectors(poleHint || e, s); pole.addScaledVector(dir, -pole.dot(dir));
    if (pole.lengthSq() < 1e-8) pole.set(0, -1, 0).addScaledVector(dir, -dir.y);
    pole.normalize();
    const cosA = (a * a + d * d - b * b) / (2 * a * d), sinA = Math.sqrt(Math.max(0, 1 - cosA * cosA));
    const e2 = V().copy(s).addScaledVector(dir, a * cosA).addScaledVector(pole, a * sinA);
    setWorldQ(A, Qn().setFromUnitVectors(V().subVectors(e, s).normalize(), V().subVectors(e2, s).normalize()).multiply(wq(A)));
    const e3 = wp(E), w3 = wp(H), t3 = V().copy(s).addScaledVector(dir, d);
    setWorldQ(E, Qn().setFromUnitVectors(V().subVectors(w3, e3).normalize(), V().subVectors(t3, e3).normalize()).multiply(wq(E)));
    setWorldQ(H, handW);
  }
  let lastAudit = null;
  function fixArms(TW, j, shape) {
    const caps = capNow();
    const audit = {pen0: 0, pen1: 0, contact: {}};
    for (const s of ['L', 'R']) {
      const side = s === 'L' ? 'Left' : 'Right', o = s === 'L' ? 'R' : 'L';
      /* where the solver's palm is and what it rests on */
      const hd = REST['hand' + s][0].clone().applyQuaternion(TW['hand' + s]);
      const palmM = j['W' + s].clone().addScaledVector(hd, .08);
      const marks = [
        ['knee' + s, j['K' + s], .056, () => wp(B[side + 'Leg']), 'thigh' + s], ['knee' + o, j['K' + o], .056, () => wp(B[(o === 'L' ? 'Left' : 'Right') + 'Leg']), 'thigh' + o],
        ['shin' + s, j['K' + s].clone().lerp(j['A' + s], .5), .049, () => wp(B[side + 'Leg']).lerp(wp(B[side + 'Foot']), .5), 'shin' + s],
        ['shin' + o, j['K' + o].clone().lerp(j['A' + o], .5), .049, () => wp(B[(o === 'L' ? 'Left' : 'Right') + 'Leg']).lerp(wp(B[(o === 'L' ? 'Left' : 'Right') + 'Foot']), .5), 'shin' + o],
        ['thigh' + s, j['hip' + s].clone().lerp(j['K' + s], .55), .066, () => wp(B[side + 'UpLeg']).lerp(wp(B[side + 'Leg']), .55), 'thigh' + s],
        ['thigh' + o, j['hip' + o].clone().lerp(j['K' + o], .55), .066, () => wp(B[(o === 'L' ? 'Left' : 'Right') + 'UpLeg']).lerp(wp(B[(o === 'L' ? 'Left' : 'Right') + 'Leg']), .55), 'thigh' + o],
        ['ankle' + s, j['A' + s], .046, () => wp(B[side + 'Foot']), 'shin' + s], ['ankle' + o, j['A' + o], .046, () => wp(B[(o === 'L' ? 'Left' : 'Right') + 'Foot']), 'shin' + o],
      ];
      let best = null;
      for (const m of marks) { const gap = palmM.distanceTo(m[1]) - m[2]; if (gap < .07 && (!best || gap < best.gap)) best = {m, gap}; }
      const off = palmOff(side);
      let palmT = wp(B[side + 'Hand']).add(off);
      /* касание включается плавно (по расстоянию), чтобы в переходах кисть не «прилипала» рывком */
      const sm = x => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
      if (best) {
        const [name, pm, , modelPt, capName] = best.m;
        const lm = modelPt(), dir = palmM.clone().sub(pm).normalize();
        const w = sm(1 - (best.gap - .03) / .04);
        palmT.lerp(lm.addScaledVector(dir, (radius[capName] || .06) + .022), w);
        if (w > .5) audit.contact[s] = name;
      } else if (palmM.y < .12) {
        const w = sm(1 - (palmM.y - .05) / .07);
        palmT.y += (.03 - palmT.y) * w; if (w > .5) audit.contact[s] = 'floor';
      }
      /* forearm, elbow and palm outside the body (own arm and, for clasped hands, the other arm skipped) */
      const skip = new RegExp('(uarm|farm)' + s + '|(uarm|farm)' + o);
      const pen = () => { let m = 0; const elbow = wp(B[side + 'ForeArm']), wr = wp(B[side + 'Hand']);
        for (const p of [elbow, elbow.clone().lerp(wr, .5), wr.clone().add(palmOff(side))]) { const q = p.clone(); m = Math.max(m, push(q, caps, skip, 0)); } return m; };
      const a0 = pen(); audit.pen0 = Math.max(audit.pen0, a0);
      const savedArm = ['Arm', 'ForeArm', 'Hand'].map(n => B[side + n].quaternion.clone());
      const before = palmT.clone();
      push(palmT, caps, skip, .012);
      const wristT = palmT.clone().sub(off);
      if (best || palmT.distanceTo(before) > 1e-4 || audit.contact[s] === 'floor' || pen() > .005) {
        ik2(side, wristT, null);
        /* локоть и середина предплечья выходят из тела: локоть — как подсказка изгиба, предплечье сдвигает кисть */
        for (let it = 0; it < 4; it++) {
          const elbow = wp(B[side + 'ForeArm']), wr = wp(B[side + 'Hand']);
          const mid = elbow.clone().lerp(wr, .5), mid0 = mid.clone();
          const me = push(elbow, caps, skip, .015), mm = push(mid, caps, skip, .012);
          if (me < .003 && mm < .003) break;
          if (mm >= .003) wristT.add(mid.sub(mid0).multiplyScalar(best || audit.contact[s] === 'floor' ? .8 : 1.6));
          ik2(side, wristT, elbow);
        }
      }
      if (pen() > Math.max(a0, .01) + .005) { ['Arm', 'ForeArm', 'Hand'].forEach((n, i) => B[side + n].quaternion.copy(savedArm[i])); root.updateMatrixWorld(true); }
      audit.pen1 = Math.max(audit.pen1, pen());
    }
    audit.legs0 = legAudit.pen0; audit.legs1 = legAudit.pen1;
    lastAudit = audit;
  }

  /* ---- ноги: свободная (не опорная) нога не проходит сквозь другую ногу и корпус ---- */
  const LEG = ['UpLeg', 'Leg', 'Foot'];
  let legAudit = {pen0: 0, pen1: 0};
  function fixLegs(j) {
    const caps = capNow();
    legAudit = {pen0: 0, pen1: 0};
    for (const s of ['L', 'R']) {
      const side = s === 'L' ? 'Left' : 'Right', o = s === 'L' ? 'R' : 'L';
      const skip = new RegExp('(thigh|shin|foot)' + s + '|uarm|farm');
      const pts = () => { const k = wp(B[side + 'Leg']), a = wp(B[side + 'Foot']); return [k, k.clone().lerp(a, .5), a]; };
      const pen = () => { let m = 0; for (const p of pts()) m = Math.max(m, push(p.clone(), caps, skip, 0)); return m; };
      const p0 = pen(); legAudit.pen0 = Math.max(legAudit.pen0, p0);
      /* опорная нога (стопа или колено на полу) остаётся на месте: её держит решатель */
      const planted = j['A' + s].y < .09 || j['K' + s].y < .09;
      if (!planted && p0 > .006) {
        const footW = wq(B[side + 'Foot']);
        const saved = LEG.map(n => B[side + n].quaternion.clone());
        for (let it = 0; it < 4; it++) {
          const [k, mid, a] = pts(); const a0 = a.clone(), m0 = mid.clone();
          const mk = push(k, caps, skip, .01), mm = push(mid, caps, skip, .008), ma = push(a, caps, skip, .008);
          if (mk < .003 && mm < .003 && ma < .003) break;
          a.add(mid.sub(m0).multiplyScalar(1.2));
          ik2(side, a, k, LEG);
        }
        setWorldQ(B[side + 'Foot'], footW);
        /* стало хуже — оставляем как было */
        if (pen() > p0) { LEG.forEach((n, i) => B[side + n].quaternion.copy(saved[i])); root.updateMatrixWorld(true); }
      }
      legAudit.pen1 = Math.max(legAudit.pen1, pen());
    }
  }

  setTheme('light');
  return {
    update, setTheme, ankleUp, radius, get audit() { return lastAudit; },
    get active() { return active; },
    set active(v) { active = !!v; root.visible = active; if (!active) glow.L.visible = glow.R.visible = false; },
  };
}
