/* Мудря йога — фигура v2.
   Реалистичная модель (Quaternius Universal Base Characters, CC0) и переходы между асанами без изломов.

   Позы: для каждой позы атласа — мировые повороты 17 звеньев марионетки (poses.json, выгружены из решателя атласа).
   Переход A → B строится в суставном пространстве:
   • каждый сустав интерполируется в системе родителя (а не в мировой) — конечности не «проворачиваются»;
   • колени и локти — шарниры: меняется только угол сгиба, переразгибания и выворота нет;
   • позвоночник и шея: общий изгиб делится на 3 позвонка и шею степенями кватерниона — спина гнётся дугой;
   • плечо и бедро при развороте больше 150° идут через «вперёд», как у человека;
   • движение по очереди: ноги и таз начинают, корпус следует, руки и голова заканчивают;
   • опора (вершина сетки, которой тело касается пола) не скользит; тело всегда стоит на полу;
     ладони и стопы, которые стоят на полу и в начале, и в конце, держит двухзвенный IK;
   • переносимая нога/рука приподнимается (сгиб колена/локтя), чтобы не пройти сквозь пол. */
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const V = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
const Qn = () => new T.Quaternion();
const DEG = Math.PI / 180;
const X = V(1, 0, 0), Y = V(0, 1, 0), Z = V(0, 0, 1), DN = V(0, -1, 0);
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const smooth = x => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
const smoother = x => { x = clamp(x, 0, 1); return x * x * x * (x * (6 * x - 15) + 10); };

const SEGS = ['pelvis', 'lumbar', 'chest', 'neck', 'head', 'uarmL', 'farmL', 'handL', 'uarmR', 'farmR', 'handR',
  'thighL', 'shinL', 'footL', 'thighR', 'shinR', 'footR'];
const PARENT = {lumbar: 'pelvis', chest: 'lumbar', neck: 'chest', head: 'neck', uarmL: 'chest', farmL: 'uarmL', handL: 'farmL',
  uarmR: 'chest', farmR: 'uarmR', handR: 'farmR', thighL: 'pelvis', shinL: 'thighL', footL: 'shinL', thighR: 'pelvis', shinR: 'thighR', footR: 'shinR'};
/* шарниры: ось X звена; знак — в какую сторону сгиб (колено +, локоть −) */
const HINGE = {shinL: 1, shinR: 1, farmL: -1, farmR: -1};
/* шаровые суставы, у которых большой разворот ведём через «вперёд» (направление звена в системе родителя) */
const BALL = {uarmL: 1, uarmR: 1, thighL: 1, thighR: 1};
/* очерёдность: группа → окно времени [начало, конец] */
const GROUP = n => /^(pelvis|thigh|shin|foot)/.test(n) ? 'L' : /^(lumbar|chest)/.test(n) ? 'T' : /^(neck|head)/.test(n) ? 'H' : 'A';
const WIN = {L: [0, .82], T: [.06, .9], A: [.14, 1], H: [.18, 1]};

/* кисти: сгиб фаланг по форме (как в атласе) */
const CURL = {open: {c: [6, 10, 6], t: [8, 10]}, floor: {c: [3, 3, 0], t: [4, 0]}, fist: {c: [85, 95, 70], t: [35, 50]},
  lock: {c: [62, 72, 40], t: [6, 12]}, namaste: {c: [0, 0, 0], t: [0, 4]}};

/* одежда: верх и легинсы по теме; кожа — текстура модели */
const OUTFIT = {
  light: {top: '#2f8f8a', low: '#2e3566', hair: '#3b2a20'},
  dark: {top: '#3aa39c', low: '#4e5aa8', hair: '#3b2a20'},
};
const STAGE = {
  light: {bg: '#f3f0ea', floor: '#ebe6dc', mat: '#7fa38c', stripe: '#6d9179'},
  dark: {bg: '#16171b', floor: '#1f2024', mat: '#3f5a4c', stripe: '#36503f'},
};

const MODELS = {
  female: {body: 'Regular_Female_FullBody.gltf', hair: 'Hair_Ponytail.gltf'},
  male: {body: 'Regular_Male_FullBody.gltf', hair: 'Hair_SimpleParted.gltf'},
};

export async function createFigure(canvas, {base = '', poses, model = 'female', interactive = true} = {}) {
  /* ---------- сцена ---------- */
  const renderer = new T.WebGLRenderer({canvas, antialias: true, alpha: false});
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap;
  const scene = new T.Scene();
  const hemi = new T.HemisphereLight(0xffffff, 0x9c9384, 1.6); scene.add(hemi);
  const key = new T.DirectionalLight(0xfff4e6, 2.4); key.position.set(2.2, 5, 4.5); key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048); Object.assign(key.shadow.camera, {left: -2.5, right: 2.5, top: 2.5, bottom: -2.5, near: .5, far: 15});
  key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02; key.shadow.radius = 4;
  scene.add(key); scene.add(key.target);
  const rim = new T.DirectionalLight(0xdfe8ff, .9); rim.position.set(-3, 2.5, -3.5); scene.add(rim);
  const floorM = new T.MeshStandardMaterial({roughness: 1});
  const floor = new T.Mesh(new T.PlaneGeometry(40, 40), floorM); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  const matM = new T.MeshStandardMaterial({roughness: .95});
  const mat = new T.Mesh(new T.PlaneGeometry(1.85, .64), matM); mat.rotation.x = -Math.PI / 2; mat.position.y = .003; mat.receiveShadow = true; scene.add(mat);
  const stripeTex = c => { const cv = document.createElement('canvas'); cv.width = 512; cv.height = 64; const g = cv.getContext('2d');
    g.fillStyle = c.mat; g.fillRect(0, 0, 512, 64); g.fillStyle = c.stripe; for (let x = 0; x < 512; x += 64) g.fillRect(x, 0, 2, 64);
    const t = new T.CanvasTexture(cv); t.colorSpace = T.SRGBColorSpace; return t; };

  const cam = new T.PerspectiveCamera(24, 1, .05, 60);
  let controls = null; if (interactive) { controls = new OrbitControls(cam, canvas); controls.enableDamping = true; controls.enablePan = false; controls.minDistance = 1.5; controls.maxDistance = 12; }

  /* ---------- модель ---------- */
  const loader = new GLTFLoader();
  const M = MODELS[model] || MODELS.female;
  const [gb, gh] = await Promise.all([loader.loadAsync(base + M.body), loader.loadAsync(base + M.hair).catch(() => null)]);
  const root = gb.scene; scene.add(root);
  const B = {}; const meshes = [];
  root.traverse(o => { if (o.isBone) B[o.name] = o; if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false; if (o.isSkinnedMesh) meshes.push(o); } });
  const hairBones = {}; let hairRoot = null;
  if (gh) { hairRoot = gh.scene; scene.add(hairRoot); hairRoot.traverse(o => { if (o.isBone) hairBones[o.name] = o; if (o.isMesh) { o.castShadow = true; o.frustumCulled = false; } }); }
  const need = ['pelvis', 'spine_01', 'spine_02', 'spine_03', 'neck_01', 'Head', 'clavicle_l', 'upperarm_l', 'lowerarm_l', 'hand_l', 'thigh_l', 'calf_l', 'foot_l', 'ball_l'];
  for (const n of need) if (!B[n]) throw new Error('model: no bone ' + n);
  const wq = o => o.getWorldQuaternion(Qn()), wp = o => o.getWorldPosition(V());
  const sd = s => s === 'L' ? 'l' : 'r';

  /* покой = покой марионетки: стоя, руки вниз ладонями к бёдрам, ноги прямо вниз */
  const aim = (n, child, dir) => { root.updateMatrixWorld(true); const b = B[n], cur = wp(B[child]).sub(wp(b)).normalize();
    const nw = Qn().setFromUnitVectors(cur, dir).multiply(wq(b)); b.quaternion.copy(wq(b.parent).invert().multiply(nw)); };
  for (const s of ['l', 'r']) {
    aim('upperarm_' + s, 'lowerarm_' + s, DN); aim('lowerarm_' + s, 'hand_' + s, DN);
    aim('thigh_' + s, 'calf_' + s, DN); aim('calf_' + s, 'foot_' + s, DN);
  }
  root.updateMatrixWorld(true);
  const order = []; B.pelvis.traverse(o => { if (o.isBone) order.push(o); });
  const restLocal = new Map(order.map(b => [b, b.quaternion.clone()]));
  const restW = new Map(order.map(b => [b, wq(b)]));
  const SEGBONE = {pelvis: 'pelvis', spine_03: 'chest', Head: 'head', upperarm_l: 'uarmL', lowerarm_l: 'farmL', hand_l: 'handL',
    upperarm_r: 'uarmR', lowerarm_r: 'farmR', hand_r: 'handR', thigh_l: 'thighL', calf_l: 'shinL', foot_l: 'footL', thigh_r: 'thighR', calf_r: 'shinR', foot_r: 'footR'};
  const pelvisOff = wp(B.pelvis); /* положение таза в покое (стоя, стопы на полу) */

  /* оси сгиба фаланг */
  const curl = new Map();
  for (const s of ['l', 'r']) {
    const pn = V(s === 'l' ? -1 : 1, 0, 0); /* ладонь к бедру */
    const chains = ['index', 'middle', 'ring', 'pinky', 'thumb'].map(f => [1, 2, 3].map(i => B[`${f}_0${i}_${s}`]));
    chains.forEach((ch, ci) => ch.forEach((b, k) => {
      if (!b) return; const next = ch[k + 1] || b.children.find(c => c.isBone); if (!next) return;
      const dir = wp(next).sub(wp(b)).normalize(); const ax = V().crossVectors(dir, pn).normalize();
      curl.set(b, {ax: ax.applyQuaternion(wq(b).invert()), k, thumb: ci === 4, side: s === 'l' ? 'L' : 'R'});
    }));
  }

  /* ---------- одежда: ровные края — маска считается в шейдере по высоте вершины в покое ---------- */
  const body = meshes.reduce((a, m) => (m.geometry.attributes.position.count > (a ? a.geometry.attributes.position.count : 0) ? m : a), null);
  {
    body.skeleton.update(); body.updateMatrixWorld(true);
    const g = body.geometry, pos = g.attributes.position, si = g.attributes.skinIndex, sw = g.attributes.skinWeight, n = pos.count;
    const info = new Float32Array(n * 3), v = V();
    const shY = wp(B.upperarm_l).y;
    for (let i = 0; i < n; i++) {
      let best = 0, bi = 0; for (let k = 0; k < 4; k++) { const w = sw.getComponent(i, k); if (w > best) { best = w; bi = si.getComponent(i, k); } }
      const bn = body.skeleton.bones[bi].name; body.getVertexPosition(i, v); body.localToWorld(v);
      const cls = /upperarm|lowerarm/.test(bn) ? 1 : /hand|index|middle|ring|pinky|thumb|Head|neck|foot|ball/.test(bn) ? 2 : 0;
      info[i * 3] = v.y; info[i * 3 + 1] = cls; info[i * 3 + 2] = cls === 1 ? shY - v.y : Math.abs(v.x);
    }
    g.setAttribute('oinfo', new T.BufferAttribute(info, 3));
    const y = n => wp(B[n]).y;
    /* полосы по высоте: [низ, верх] — майка/топ и легинсы */
    const male = model === 'male';
    const top = male ? [y('pelvis') + .06, shY + .2] : [y('spine_02') - .015, shY + .2];
    const low = [y('foot_l') + .07, male ? y('pelvis') + .09 : y('spine_01') - .005];
    const sleeve = male ? .16 : 0;
    const mats = [].concat(body.material);
    for (const m of mats) {
      m.userData.top = {value: new T.Color(OUTFIT.light.top)}; m.userData.low = {value: new T.Color(OUTFIT.light.low)};
      m.onBeforeCompile = sh => {
        sh.uniforms.uTop = m.userData.top; sh.uniforms.uLow = m.userData.low;
        sh.vertexShader = 'attribute vec3 oinfo;\nvarying vec3 vO;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvO = oinfo;');
        const f = x => x.toFixed(4);
        sh.fragmentShader = 'uniform vec3 uTop;\nuniform vec3 uLow;\nvarying vec3 vO;\n' + sh.fragmentShader
          .replace('#include <map_fragment>', `#include <map_fragment>
{ float yy=vO.x, cls=vO.y; float e=.006;
  float body=1.-step(.5,cls);
  float t=body*smoothstep(${f(top[0])}-e,${f(top[0])}+e,yy)*(1.-smoothstep(${f(top[1])}-e,${f(top[1])}+e,yy));
  ${male ? `t=max(t,(1.-step(1.5,cls))*step(.5,cls)*(1.-smoothstep(${f(sleeve)}-e,${f(sleeve)}+e,vO.z)));` : `t*=1.-smoothstep(.13,.145,vO.z);`}
  float l=body*smoothstep(${f(low[0])}-e,${f(low[0])}+e,yy)*(1.-smoothstep(${f(low[1])}-e,${f(low[1])}+e,yy));
  float lum=dot(diffuseColor.rgb,vec3(.3,.59,.11)); vec3 shade=vec3(1.);
  diffuseColor.rgb=mix(diffuseColor.rgb,uTop*shade,t); diffuseColor.rgb=mix(diffuseColor.rgb,uLow*shade,l*(1.-t)); vOut=max(t,l); }`)
          .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor=mix(roughnessFactor,.85,vOut);')
          .replace('void main() {', 'float vOut=0.;\nvoid main() {');
      };
      m.needsUpdate = true;
    }
  }
  if (hairRoot) hairRoot.traverse(o => { if (o.isMesh) for (const m of [].concat(o.material)) { m.color = new T.Color(OUTFIT.light.hair); m.needsUpdate = true; } });

  /* ---------- образцы вершин для пола и опоры ---------- */
  const samp = [];
  {
    const g = body.geometry, si = g.attributes.skinIndex, sw = g.attributes.skinWeight, n = g.attributes.position.count;
    for (let i = 0; i < n; i += 3) {
      let best = 0, bi = 0; for (let k = 0; k < 4; k++) { const w = sw.getComponent(i, k); if (w > best) { best = w; bi = si.getComponent(i, k); } }
      const bn = body.skeleton.bones[bi].name;
      const reg = /hand|index|middle|ring|pinky|thumb/.test(bn) ? 'hand' + (bn.endsWith('_l') ? 'L' : 'R')
        : /foot|ball/.test(bn) ? 'foot' + (bn.endsWith('_l') ? 'L' : 'R')
        : /calf/.test(bn) ? 'shin' + (bn.endsWith('_l') ? 'L' : 'R')
        : /thigh/.test(bn) ? 'thigh' + (bn.endsWith('_l') ? 'L' : 'R')
        : /lowerarm/.test(bn) ? 'farm' + (bn.endsWith('_l') ? 'L' : 'R')
        : /upperarm/.test(bn) ? 'uarm' + (bn.endsWith('_l') ? 'L' : 'R')
        : /Head|neck/.test(bn) ? 'head' : /pelvis|spine_01/.test(bn) ? 'pelvis' : 'chest';
      samp.push({i, reg});
    }
  }
  const sv = V();
  function sampleWorld() { body.skeleton.update(); const out = new Float32Array(samp.length * 3);
    for (let k = 0; k < samp.length; k++) { body.getVertexPosition(samp[k].i, sv); body.localToWorld(sv); out[k * 3] = sv.x; out[k * 3 + 1] = sv.y; out[k * 3 + 2] = sv.z; } return out; }

  /* ---------- позы → кости ---------- */
  const qPow = (q, t) => Qn().slerp(q, t); /* q^t для единичного кватерниона */
  const tmp = Qn();
  function applyTW(TW, hands, clav = true) {
    const W = new Map();
    const Qs = TW.pelvis.clone().invert().multiply(TW.chest);
    const Qn_ = TW.chest.clone().invert().multiply(TW.head);
    const parentW = B.pelvis.parent ? wq(B.pelvis.parent) : Qn();
    for (const b of order) {
      const n = b.name, pw = b === B.pelvis ? parentW : W.get(b.parent);
      let w;
      if (n === 'spine_01') w = TW.pelvis.clone().multiply(qPow(Qs, .3)).multiply(restW.get(b));
      else if (n === 'spine_02') w = TW.pelvis.clone().multiply(qPow(Qs, .65)).multiply(restW.get(b));
      else if (n === 'neck_01') w = TW.chest.clone().multiply(qPow(Qn_, .5)).multiply(restW.get(b));
      else if (SEGBONE[n]) w = TW[SEGBONE[n]].clone().multiply(restW.get(b));
      else if (/^clavicle_/.test(n) && clav) {
        /* ключица поднимается, когда рука уходит вверх (лопатка вращается) */
        const s = n.endsWith('_l') ? 'L' : 'R', g = s === 'L' ? 1 : -1;
        const ua = DN.clone().applyQuaternion(TW['uarm' + s]), up = Y.clone().applyQuaternion(TW.chest), fw = Z.clone().applyQuaternion(TW.chest);
        const elev = smooth((ua.dot(up) + .2) / 1.2) * 22, prot = smooth((ua.dot(fw) - .3) / .7) * 10;
        w = pw.clone().multiply(restLocal.get(b)).multiply(Qn().setFromAxisAngle(Z.clone().applyQuaternion(restW.get(b).clone().invert()), g * elev * DEG)).multiply(Qn().setFromAxisAngle(Y.clone().applyQuaternion(restW.get(b).clone().invert()), -g * prot * DEG));
      }
      else {
        w = pw.clone().multiply(restLocal.get(b));
        const c = curl.get(b);
        if (c) { const sh = CURL[(hands && hands[c.side]) || 'open'] || CURL.open; const deg = c.thumb ? (sh.t[Math.min(c.k, 1)] || 0) : sh.c[c.k];
          if (deg) w.multiply(tmp.setFromAxisAngle(c.ax, deg * DEG)); }
      }
      W.set(b, w);
      b.quaternion.copy(pw.clone().invert().multiply(w));
    }
  }
  function setPelvisPos(p) { const hp = B.pelvis.parent; B.pelvis.position.copy(hp ? hp.worldToLocal(p.clone()) : p); root.updateMatrixWorld(true); }
  function syncHair() { if (!hairRoot) return; for (const n in hairBones) { const s = B[n]; if (!s) continue; hairBones[n].position.copy(s.position); hairBones[n].quaternion.copy(s.quaternion); hairBones[n].scale.copy(s.scale); } hairRoot.position.copy(root.position); hairRoot.quaternion.copy(root.quaternion); hairRoot.scale.copy(root.scale); hairRoot.updateMatrixWorld(true); }

  /* пол: опускаем/поднимаем тело так, чтобы самая низкая точка касалась пола.
     Кисти не держат тело, если поза не на руках: они, наоборот, поднимаются IK до пола */
  function lowest(P, skipHands) { let m = Infinity, k = -1; for (let j = 0; j < samp.length; j++) { if (skipHands && samp[j].reg.startsWith('hand')) continue; const y = P[j * 3 + 1]; if (y < m) { m = y; k = j; } } return {y: m, k}; }

  /* двухзвенный IK по костям модели, плоскость сгиба сохраняется (полюс — текущий локоть/колено) */
  const setWorldQ = (b, w) => { b.quaternion.copy(wq(b.parent).invert().multiply(w)); b.updateMatrixWorld(true); };
  function ik2(chain, target) {
    const [A, E, H] = chain.map(n => B[n]); const endW = wq(H);
    const s = wp(A), e = wp(E), w = wp(H), a = s.distanceTo(e), b = e.distanceTo(w);
    const to = V().subVectors(target, s); let d = to.length(); if (d < 1e-6) return; const dir = to.divideScalar(d);
    d = clamp(d, Math.abs(a - b) + 1e-3, a + b - 1e-3);
    const pole = V().subVectors(e, s); pole.addScaledVector(dir, -pole.dot(dir)); if (pole.lengthSq() < 1e-8) pole.set(0, 0, 1); pole.normalize();
    const cosA = (a * a + d * d - b * b) / (2 * a * d), sinA = Math.sqrt(Math.max(0, 1 - cosA * cosA));
    const e2 = V().copy(s).addScaledVector(dir, a * cosA).addScaledVector(pole, a * sinA);
    setWorldQ(A, Qn().setFromUnitVectors(V().subVectors(e, s).normalize(), V().subVectors(e2, s).normalize()).multiply(wq(A)));
    const e3 = wp(E), w3 = wp(H), t3 = V().copy(s).addScaledVector(dir, d);
    setWorldQ(E, Qn().setFromUnitVectors(V().subVectors(w3, e3).normalize(), V().subVectors(t3, e3).normalize()).multiply(wq(E)));
    setWorldQ(H, endW);
  }
  const CHAIN = {handL: ['upperarm_l', 'lowerarm_l', 'hand_l'], handR: ['upperarm_r', 'lowerarm_r', 'hand_r'], footL: ['thigh_l', 'calf_l', 'foot_l'], footR: ['thigh_r', 'calf_r', 'foot_r']};
  /* довести вершину образца idx (на кисти/стопе) до точки target: IK по цепочке, 2 прохода */
  function reachVertex(r, idx, target) {
    for (let it = 0; it < 2; it++) { const P = sampleWorld(); const c = V(P[idx * 3], P[idx * 3 + 1], P[idx * 3 + 2]);
      if (c.distanceTo(target) < .002) break; const end = wp(B[CHAIN[r][2]]); ik2(CHAIN[r], end.add(target.clone().sub(c))); }
  }

  /* пальцы ног: если подушечка ниже пола (упор на носки), носок разгибается и ложится на пол */
  function toes() {
    for (const s of ['l', 'r']) {
      const ball = B['ball_' + s], tip = B['ball_leaf_' + s] || ball.children[0]; if (!tip) continue;
      const p0 = wp(ball), p1 = wp(tip); const drop = p1.y - Math.max(0, p0.y - .02);
      if (p1.y < .005 && p0.y > .01) {
        const dir = V().subVectors(p1, p0); const len = dir.length(); const want = V(dir.x, 0, dir.z).normalize().multiplyScalar(len); want.y = -Math.min(p0.y - .005, len * .9);
        setWorldQ(ball, Qn().setFromUnitVectors(dir.normalize(), want.normalize()).multiply(wq(ball)));
      }
    }
  }

  /* ---------- состояние позы: кватернионы, опоры, положение ---------- */
  const qArr = a => new T.Quaternion(a[0], a[1], a[2], a[3]);
  const cache = new Map();
  function stateOf(key) {
    if (cache.has(key)) return cache.get(key);
    const p = poses[key]; if (!p) return null;
    const TW = {}; for (const n of SEGS) TW[n] = qArr(p.q[n]);
    const st = buildState(TW, p.h || {L: 'open', R: 'open'}, p.c || 0, !!p.a, p.k || []); st.key = key;
    cache.set(key, st); return st;
  }
  function buildState(TW, hands, camYaw, armBal, contacts) {
    const st = {TW, hands, cam: camYaw, armBal, contacts: contacts || []};
    /* разметка опор: поставим позу (таз в 0) и найдём, какие области касаются пола */
    pose(TW, st.hands); setPelvisPos(V(0, 1, 0));
    let P = sampleWorld(); const lo = lowest(P, !st.armBal);
    setPelvisPos(V(0, 1 - lo.y, 0)); P = sampleWorld();
    st.pelvisY = 1 - lo.y;
    /* ладони «на полу» (форма кисти floor): ставим ладонь на пол IK, даже если в рисунке она чуть выше/ниже */
    /* ладони на полу, а рук не хватает (у модели руки короче, чем у марионетки): наклоняем корпус вперёд */
    const handC = ['L', 'R'].filter(s => st.contacts.includes('hand' + s) || (!armBal && hands[s] === 'floor'));
    if (handC.length && !armBal) {
      const UP = ['lumbar', 'chest', 'neck', 'head', 'uarmL', 'farmL', 'handL', 'uarmR', 'farmR', 'handR'];
      const reachOk = () => { P = sampleWorld(); let ok = true;
        for (const s of handC) { const r = 'hand' + s; let m = Infinity, mk = -1; for (let j = 0; j < samp.length; j++) if (samp[j].reg === r && P[j * 3 + 1] < m) { m = P[j * 3 + 1]; mk = j; }
          if (m > .32) continue; reachVertex(r, mk, V(P[mk * 3], .003, P[mk * 3 + 2])); const P2 = sampleWorld(); if (P2[mk * 3 + 1] > .006) ok = false; }
        pose(TW, hands); setPelvisPos(V(0, st.pelvisY, 0)); return ok; };
      for (let i = 0; i < 20 && !reachOk(); i++) {
        const lat = X.clone().applyQuaternion(TW.pelvis), rq = Qn().setFromAxisAngle(lat, 3 * DEG);
        for (const n of UP) TW[n] = rq.clone().multiply(TW[n]);
        pose(TW, hands); setPelvisPos(V(0, 1, 0)); P = sampleWorld(); const l2 = lowest(P, true); setPelvisPos(V(0, 1 - l2.y, 0)); st.pelvisY = 1 - l2.y;
      }
      P = sampleWorld();
    }
    /* опоры по решателю атласа (стопы, ладони): у модели другие пропорции — доводим их до пола IK */
    for (const r of ['footL', 'footR', 'handL', 'handR']) {
      const isC = st.contacts.includes(r) || (r.startsWith('hand') && !armBal && hands[r.slice(-1)] === 'floor');
      if (!isC) continue;
      let m = Infinity, mk = -1; for (let j = 0; j < samp.length; j++) if (samp[j].reg === r && P[j * 3 + 1] < m) { m = P[j * 3 + 1]; mk = j; }
      if (mk >= 0 && m < .32 && Math.abs(m) > .004) {
        const t = V(P[mk * 3], 0.003, P[mk * 3 + 2]);
        /* точка вне досягаемости — подвинуть её к проекции плеча/бедра на пол */
        const S = wp(B[CHAIN[r][0]]), end = wp(B[CHAIN[r][2]]), c = V(P[mk * 3], P[mk * 3 + 1], P[mk * 3 + 2]);
        const L = B[CHAIN[r][1]].position.length() * 0 + wp(B[CHAIN[r][1]]).distanceTo(S) + wp(B[CHAIN[r][1]]).distanceTo(end) + end.distanceTo(c) * .9;
        const reach = L * .985; const dv = V().subVectors(t, S);
        if (dv.length() > reach && S.y < reach) { const hz = Math.sqrt(reach * reach - S.y * S.y); const h = V(dv.x, 0, dv.z); const hl = h.length() || 1; t.x = S.x + h.x / hl * hz; t.z = S.z + h.z / hl * hz; }
        reachVertex(r, mk, t); P = sampleWorld(); if (window.__dbg) console.log("IK", r, m.toFixed(3), "S", S.y.toFixed(3), "reach", reach.toFixed(3), "t", t.x.toFixed(2), t.z.toFixed(2), "->", P[mk*3+1].toFixed(3)); }
    }
    const touch = {}; for (let j = 0; j < samp.length; j++) { const y = P[j * 3 + 1]; if (y < .03) { const r = samp[j].reg; if (!touch[r] || y < P[touch[r] * 3 + 1]) touch[r] = j; } }
    st.touch = touch; /* область → индекс образца, который касается пола */
    st.P = P;
    return st;
  }
  function pose(TW, hands) { applyTW(TW, hands); root.updateMatrixWorld(true); }

  /* ---------- интерполяция в суставном пространстве ---------- */
  const local = (TW, n) => PARENT[n] ? TW[PARENT[n]].clone().invert().multiply(TW[n]) : TW[n].clone();
  const hingeAngle = q => { /* угол вокруг X (разложение swing-twist) */ const t = Qn().set(q.x, 0, 0, q.w); if (t.lengthSq() < 1e-9) return 0; t.normalize(); return 2 * Math.atan2(t.x, t.w); };
  function makePair(A, B2) {
    const pr = {};
    for (const n of SEGS) {
      const la = local(A.TW, n), lb = local(B2.TW, n);
      if (n in HINGE) {
        const g = HINGE[n]; let a = hingeAngle(la) * g, b = hingeAngle(lb) * g;
        a = clamp(a, -2 * DEG, 170 * DEG); b = clamp(b, -2 * DEG, 170 * DEG);
        /* остаток (небольшой поворот вне оси шарнира) — slerp */
        const ra = la.clone().multiply(Qn().setFromAxisAngle(X, -a * g)), rb = lb.clone().multiply(Qn().setFromAxisAngle(X, -b * g));
        pr[n] = {hinge: true, g, a, b, ra, rb};
      } else if (n in BALL) {
        const da = DN.clone().applyQuaternion(la), db = DN.clone().applyQuaternion(lb);
        const ang = da.angleTo(db);
        let via = null;
        if (ang > 150 * DEG) { /* через «вперёд» (для бедра — тоже вперёд: нога идёт махом вперёд) */
          via = V(0, 0, 1).add(da).add(db); if (via.lengthSq() < 1e-4) via = V(0, 0, 1); via.normalize();
        }
        pr[n] = {ball: true, la, lb, da, db, via};
      } else pr[n] = {la, lb};
    }
    return pr;
  }
  /* поворот направления по дуге a→(via)→b и сохранение «скрутки» звена */
  function ballAt(o, e) {
    if (!o.via) return o.la.clone().slerp(o.lb, e);
    const a1 = o.da.angleTo(o.via), a2 = o.via.angleTo(o.db), s = e * (a1 + a2);
    let dir; if (s <= a1) dir = slerpV(o.da, o.via, a1 ? s / a1 : 1); else dir = slerpV(o.via, o.db, a2 ? (s - a1) / a2 : 1);
    const base = o.la.clone().slerp(o.lb, e); /* скрутка из обычного slerp, направление — по дуге */
    const cur = DN.clone().applyQuaternion(base);
    return Qn().setFromUnitVectors(cur, dir).multiply(base);
  }
  function slerpV(a, b, t) { const q = Qn().setFromUnitVectors(a, b); return a.clone().applyQuaternion(Qn().slerp(q, t)); }

  function twAt(A, B2, pr, k, opt) {
    const e = {}; const W2 = opt.win || WIN; for (const g in W2) { const [s, f] = W2[g]; e[g] = smoother((k - s) / (f - s)); }
    if (!opt.stagger) for (const g in e) e[g] = smoother(k);
    const TW = {};
    if (opt.rootVia) { const t = e.L; TW.pelvis = t < .5 ? A.TW.pelvis.clone().slerp(opt.rootVia, t * 2) : opt.rootVia.clone().slerp(B2.TW.pelvis, t * 2 - 1); }
    else TW.pelvis = A.TW.pelvis.clone().slerp(B2.TW.pelvis, e.L);
    for (const n of SEGS) {
      if (n === 'pelvis') continue; const o = pr[n], t = e[GROUP(n)];
      let l;
      if (o.hinge) { let ang = o.a + (o.b - o.a) * t + (opt.lift && opt.lift[n] ? opt.lift[n] * Math.sin(Math.PI * t) : 0);
        l = o.ra.clone().slerp(o.rb, t).multiply(Qn().setFromAxisAngle(X, ang * o.g)); }
      else if (o.ball) { l = ballAt(o, t); if (opt.lift && opt.lift[n]) l.multiply(Qn().setFromAxisAngle(X, -opt.lift[n] * Math.sin(Math.PI * t))); }
      else l = o.la.clone().slerp(o.lb, t);
      TW[n] = TW[PARENT[n]].clone().multiply(l);
    }
    return {TW, hands: t2h(A.hands, B2.hands, k)};
  }
  const t2h = (a, b, k) => ({L: k < .5 ? a.L : b.L, R: k < .5 ? a.R : b.R});

  /* ---------- переход ---------- */
  let cur = null; /* {st, x, z, yaw} — текущая поза и её положение на коврике */
  let anim = null;
  function placeStatic(st, x, z) { pose(st.TW, st.hands); setPelvisPos(V(x, st.pelvisY, z));
    for (const r of ['handL', 'handR', 'footL', 'footR']) { const k = st.touch[r]; if (k != null) reachVertex(r, k, V(st.P[k * 3] + x, st.P[k * 3 + 1], st.P[k * 3 + 2] + z)); }
    toes(); syncHair(); }

  function makeTransition(A, ax, az, B2) {
    const pr = makePair(A, B2);
    /* общая опора: область, которая касается пола и в начале, и в конце (стопы → колени → таз → кисти) */
    const prio = ['footR', 'footL', 'shinR', 'shinL', 'pelvis', 'thighR', 'thighL', 'handR', 'handL', 'chest', 'head'];
    /* опора, при которой остальным общим опорам приходится сдвигаться меньше всего */
    const common = prio.filter(r => A.touch[r] != null && B2.touch[r] != null);
    let pin = null, bx = ax, bz = az, best = Infinity;
    for (const r of common) { const ka = A.touch[r];
      const x = A.P[ka * 3] + ax - B2.P[ka * 3], z = A.P[ka * 3 + 2] + az - B2.P[ka * 3 + 2];
      let cost = common.indexOf(r) * .01;
      { const pa = V(ax, 0, az), pb = V(x, 0, z); cost += .5 * Math.hypot(pa.x - pb.x, pa.z - pb.z); } /* таз смещается меньше */
      for (const o of common) { if (o === r) continue; const k = A.touch[o]; cost += Math.hypot(A.P[k * 3] + ax - (B2.P[k * 3] + x), A.P[k * 3 + 2] + az - (B2.P[k * 3 + 2] + z)) * (o.startsWith('hand') ? 1.5 : 1); }
      if (cost < best) { best = cost; pin = r; bx = x; bz = z; } }
    /* кисти и стопы: стоят на полу и в начале, и в конце — идут по полу или переносятся дугой; отрываются/ставятся плавно */
    const ends = {};
    const posOf = (st, k, x, z) => V(st.P[k * 3] + x, st.P[k * 3 + 1], st.P[k * 3 + 2] + z);
    for (const r of ['handL', 'handR', 'footL', 'footR']) {
      if (r === pin) continue; const ia = A.touch[r], ib = B2.touch[r];
      if (ia == null && ib == null) continue;
      if (r.startsWith('hand') && !(A.armBal || B2.armBal) && !((A.hands[r.slice(-1)] === 'floor' && ia != null) || (B2.hands[r.slice(-1)] === 'floor' && ib != null))) continue;
      const idx = ia != null ? ia : ib;
      const p0 = posOf(A, idx, ax, az), p1 = posOf(B2, idx, bx, bz);
      const dist = V(p1.x - p0.x, 0, p1.z - p0.z).length();
      ends[r] = {idx, p0, p1, a: ia != null, b: ib != null, h: dist > .2 ? clamp(dist * .22, .05, .14) : 0};
    }
    const held = Object.keys(ends).filter(r => ends[r].a && ends[r].b);
    /* шаги по очереди: в воздухе одновременно только одна стопа (и одна кисть) */
    for (const kind of ['foot', 'hand']) {
      const steps = held.filter(r => r.startsWith(kind) && ends[r].h > 0).sort((a, b) => ends[b].h - ends[a].h);
      steps.forEach((r, i) => { ends[r].win = steps.length > 1 ? (i === 0 ? [.04, .56] : [.44, .96]) : (kind === 'foot' ? [.05, .8] : [.15, .95]); });
    }
    const lift = {};
    const ikReg = new Set(); for (const r in ends) { const s2 = r.slice(-1); (r.startsWith('foot') ? ['foot', 'shin', 'thigh'] : ['hand', 'farm', 'uarm']).forEach(p => ikReg.add(p + s2)); }
    const landHands = Object.keys(ends).some(r => r.startsWith('hand') && !ends[r].a && ends[r].b);
    /* переворот больше 150° (с живота на спину): перекат вокруг оси тела, а не «через мостик» */
    let rootVia = null;
    if (A.TW.pelvis.angleTo(B2.TW.pelvis) > 150 * DEG) {
      let bestA = Infinity;
      for (const sg of [1, -1]) { const v = A.TW.pelvis.clone().multiply(Qn().setFromAxisAngle(Y, sg * 90 * DEG)); const a2 = v.angleTo(B2.TW.pelvis); if (a2 < bestA) { bestA = a2; rootVia = v; } }
    }
    const opt = {rootVia, stagger: true, lift, win: landHands ? {L: [.12, .95], T: [0, .6], A: [0, .62], H: [.05, .7]} : WIN};
    const skipHands = !(A.armBal || B2.armBal);
    let pinIdx = pin ? A.touch[pin] : -1;
    function at(k) {
      const {TW, hands} = twAt(A, B2, pr, k, opt);
      pose(TW, hands);
      /* положение по горизонтали: опорная вершина неподвижна; без опоры — плавный сдвиг */
      setPelvisPos(V(0, 1, 0)); let P = sampleWorld();
      let x, z;
      if (pin) { x = (A.P[pinIdx * 3] + ax) - P[pinIdx * 3]; z = (A.P[pinIdx * 3 + 2] + az) - P[pinIdx * 3 + 2]; }
      else { const e = smoother(k); x = ax + (bx - ax) * e; z = az + (bz - az) * e; }
      /* высота: опорная вершина на своей высоте; остальное тело (кроме кистей/стоп под IK) не ниже пола */
      let y; { let m = Infinity; for (let j = 0; j < samp.length; j++) { const r = samp[j].reg; if (ikReg.has(r) || (skipHands && r.startsWith('hand'))) continue; m = Math.min(m, P[j * 3 + 1]); }
        y = 1 - m; }
      setPelvisPos(V(x, y, z));
      const solveEnds = () => { for (const r in ends) { const o = ends[r]; P = sampleWorld(); const fk = V(P[o.idx * 3], P[o.idx * 3 + 1], P[o.idx * 3 + 2]);
        let target, w;
        if (o.a && o.b) { const [s0, f0] = o.win || (r.startsWith('foot') ? [.05, .8] : [.15, .95]); const t = smoother((k - s0) / (f0 - s0));
          target = o.p0.clone().lerp(o.p1, t); target.y += o.h * Math.sin(Math.PI * t); w = 1; }
        /* новая опора ставится раньше, старая снимается позже — тело всегда на что-то опирается */
        else if (o.a) { target = o.p0.clone(); w = 1 - smooth((k - .5) / .35); }
        else { target = o.p1.clone(); w = smooth((k - .12) / .38); }
        if (w > .001) reachVertex(r, o.idx, fk.lerp(target, w)); } };
      solveEnds();
      /* после IK тело не должно висеть: если ничто не касается пола — опустить и повторить */
      { P = sampleWorld(); let m = Infinity; for (let j = 0; j < samp.length; j++) { if (skipHands && samp[j].reg.startsWith('hand')) continue; m = Math.min(m, P[j * 3 + 1]); }
        if (m > .004 || m < -.004) { pose(TW, hands); setPelvisPos(V(x, y - m, z)); solveEnds(); } }
      /* кисти и стопы не уходят под пол */
      P = sampleWorld();
      for (const r of ['handL', 'handR', 'footL', 'footR']) { if (r === pin) continue; let m = 0, mk = -1; for (let j = 0; j < samp.length; j++) if (samp[j].reg === r && P[j * 3 + 1] < m) { m = P[j * 3 + 1]; mk = j; }
        if (mk >= 0 && m < -.004) reachVertex(r, mk, V(P[mk * 3], 0.002, P[mk * 3 + 2])); }
      toes(); syncHair();
      return {x, z};
    }
    return {at, bx, bz, pin, held, lift, tw: k => twAt(A, B2, pr, k, opt)};
  }

  /* ---------- камера ---------- */
  const view = {yaw: 16, pitch: 7, userMoved: false, c: V(0, .9, 0), s: 1, camYaw: 0};
  const bounds = () => { const P = sampleWorld(); const bb = new T.Box3(); for (let j = 0; j < samp.length; j++) bb.expandByPoint(V(P[j * 3], P[j * 3 + 1], P[j * 3 + 2])); return bb; };
  function frameTarget() { const bb = bounds(); const c = bb.getCenter(V()), sz = bb.getSize(V()); c.y = Math.max(c.y, .45); return {c, s: Math.max(sz.x, sz.y * 1.15, sz.z, .9)}; }
  let camT = null;
  function placeCam(fr, yaw, snap) {
    const a = (yaw + view.yaw) * DEG, p = view.pitch * DEG;
    const asp = cam.aspect || 1, fov = cam.fov * DEG;
    const dist = (fr.s * .62) / Math.tan(fov / 2) / Math.min(1, asp) + .6;
    const pos = V(Math.sin(a) * Math.cos(p), Math.sin(p), Math.cos(a) * Math.cos(p)).multiplyScalar(dist).add(fr.c);
    if (view.userMoved && controls) { controls.target.lerp(fr.c, snap ? 1 : .08); return; }
    if (snap || !camT) camT = {pos, c: fr.c.clone()}; else { camT.pos.lerp(pos, .08); camT.c.lerp(fr.c, .08); }
    cam.position.copy(camT.pos); cam.lookAt(camT.c); if (controls) controls.target.copy(camT.c);
  }
  function setTheme(t) { const s = STAGE[t] || STAGE.light, o = OUTFIT[t] || OUTFIT.light; scene.background = new T.Color(s.bg); floorM.color.set(s.floor); matM.map = stripeTex(s); matM.needsUpdate = true;
    for (const m of [].concat(body.material)) { m.userData.top.value.set(o.top); m.userData.low.value.set(o.low); } }
  setTheme('light');
  function resize(w, h) { renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); }

  /* ---------- цикл ---------- */
  let frameFr = null;
  function render() { if (controls) controls.update(); renderer.render(scene, cam); }
  function tick(now) {
    if (anim) { const k = Math.min(1, (now - anim.t0) / anim.ms); const {x, z} = anim.tr.at(k); anim.x = x; anim.z = z;
      frameFr = frameTarget(); placeCam(frameFr, anim.A.cam + (anim.B.cam - anim.A.cam) * smoother(k), false);
      if (k >= 1) { cur = {st: anim.B, x: anim.tr.bx, z: anim.tr.bz}; placeStatic(cur.st, cur.x, cur.z); anim = null; } }
    else if (frameFr) placeCam(frameFr, cur ? cur.st.cam : 0, false);
    render(); requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function go(key, ms) {
    const st = stateOf(key); if (!st) return false;
    if (anim) { /* прерывание: новый переход начинается с текущего положения, без рывка */
      const k = Math.min(1, (performance.now() - anim.t0) / anim.ms); const {TW, hands} = anim.tr.tw(k);
      const s2 = buildState(TW, hands, anim.A.cam + (anim.B.cam - anim.A.cam) * smoother(k), anim.A.armBal || anim.B.armBal);
      const p = anim.tr.at(k); const pv = wp(B.pelvis);
      cur = {st: s2, x: pv.x, z: pv.z}; anim = null; }
    if (!cur || !ms) { const x = cur ? cur.x : 0, z = cur ? cur.z : 0; placeStatic(st, x, z); if (!cur) { const sh = shiftCenter(); placeStatic(st, -sh.x, -sh.z); cur = {st, x: -sh.x, z: -sh.z}; } else cur = {st, x, z};
      frameFr = frameTarget(); placeCam(frameFr, st.cam, true); return true; }
    const tr = makeTransition(cur.st, cur.x, cur.z, st);
    anim = {A: cur.st, B: st, tr, t0: performance.now(), ms};
    return true;
  }
  function shiftCenter() { const bb = bounds(); const c = bb.getCenter(V()); return {x: c.x, z: c.z}; }

  return {go, setTheme, resize, render, cam, controls, view, renderer, scene, stateOf, makeTransition, placeStatic, frameTarget, placeCam,
    sampleWorld, samp, B, get cur() { return cur; }, set cur(v) { cur = v; }, pose, setPelvisPos, toes, syncHair};
}
