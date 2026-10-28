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
      if (SEG[n]) w = TW[SEG[n]].clone().multiply(delta[n]);
      else if (n === 'Spine1') w = TW.lumbar.clone().slerp(TW.chest, .5).multiply(delta.Spine1);
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
    for (const s of ['L', 'R']) {
      if (shape && shape[s] === 'lock') {
        const side = s === 'L' ? 'Left' : 'Right', h = wp(B[side + 'Hand']), m = B[side + 'HandMiddle1'] ? wp(B[side + 'HandMiddle1']) : h;
        glow[s].position.copy(h.lerp(m, .8)); glow[s].visible = true;
      }
    }
  }
  setTheme('light');
  return {
    update, setTheme, ankleUp,
    get active() { return active; },
    set active(v) { active = !!v; root.visible = active; if (!active) glow.L.visible = glow.R.visible = false; },
  };
}
