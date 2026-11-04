// Запуск: эмулятор на localhost:8767 (python3 -m http.server в app/src/main/assets/emulator), затем
// NODE_PATH=$(npm root -g) node tools/atlas/audit_rom.js <[[id, pose, mirror], ...].json> <out.json>
// Абсолютная проверка поз: углы суставов и проникновения частей тела друг в друга (по точкам решателя).
const { chromium } = require('playwright');
const fs = require('fs');
const list = JSON.parse(fs.readFileSync(process.argv[2]));
const sub=(a,b)=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]], dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2], len=a=>Math.hypot(...a);
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]], nrm=a=>{const l=len(a)||1;return [a[0]/l,a[1]/l,a[2]/l];};
const ang=(u,v)=>Math.acos(Math.max(-1,Math.min(1,dot(u,v)/(len(u)*len(v)||1))))*180/Math.PI;
function segDist(p,a,b){const ab=sub(b,a),t=Math.max(0,Math.min(1,dot(sub(p,a),ab)/(dot(ab,ab)||1)));return len(sub(p,[a[0]+ab[0]*t,a[1]+ab[1]*t,a[2]+ab[2]*t]));}
(async () => {
  const b = await chromium.launch({args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
  const p = await b.newPage({viewport:{width:200,height:200}});
  await p.goto('http://localhost:8767/index.html');
  await p.waitForFunction(() => window.Mudrya && window.Mudrya.ready && window.__trans, null, {timeout: 30000});
  const out = [];
  for (const [aid, pid, m] of list) {
    let f; try { f = await p.evaluate(([a,m]) => window.__trans(a,m?1:0,a,m?1:0,1)[1], [pid, m]); } catch(e) { out.push({aid, err:String(e).slice(0,80)}); continue; }
    const P = Object.fromEntries(f.map(([n,x,y,z]) => [n,[x,y,z]]));
    const r = {aid, pid, m};
    // рамка таза: вправо — от левого бедра к правому, вверх — от таза к пояснице, вперёд — их произведение
    const right = nrm(sub(P.hipR,P.hipL)); const up0 = sub(P.waist,P.pelvis); const fwd = nrm(cross(up0,right)); const up = nrm(cross(right,fwd));
    // знаковый угол в сагиттальной плоскости таза/груди: + разгибание (назад), − сгибание (вперёд)
    const sag = (u, v, F) => { const a = Math.atan2(dot(u,F), dot(u,up)), c = Math.atan2(dot(v,F), dot(v,up)); let d = (a - c) * 180 / Math.PI; while (d > 180) d -= 360; while (d < -180) d += 360; return +d.toFixed(0); };
    r.lumbarS = sag(sub(P.waist,P.pelvis), sub(P.chest,P.waist), fwd);
    r.thorS = sag(sub(P.chest,P.waist), sub(P.head,P.chest), fwd);
    r.neckS = sag(sub(P.head,P.chest), sub(P.crown,P.head), fwd);
    // плечо: 0 — рука вниз вдоль корпуса, 180 — вверх, больше 180 — за голову (в рамке груди)
    const cup = nrm(sub(P.head,P.chest)), cf = nrm(cross(cup,right));
    for (const s of ['L','R']) { const a = sub(P['elbow'+s],P['shoulder'+s]); let d = Math.atan2(dot(a,cf), -dot(a,cup))*180/Math.PI; if (d < -90) d += 360; r['sh'+s] = +d.toFixed(0); }
    r.lumbar = +ang(sub(P.waist,P.pelvis), sub(P.chest,P.waist)).toFixed(0);
    r.thor = +ang(sub(P.chest,P.waist), sub(P.head,P.chest)).toFixed(0);
    r.neck = +ang(sub(P.head,P.chest), sub(P.crown,P.head)).toFixed(0);
    for (const s of ['L','R']) {
      r['hip'+s] = +ang(sub(P.waist,P.pelvis), sub(P['knee'+s],P['hip'+s])).toFixed(0);   // 180 = стоя; 0 = бедро к груди
      r['knee'+s] = +ang(sub(P['knee'+s],P['hip'+s]), sub(P['ankle'+s],P['knee'+s])).toFixed(0);
      r['elb'+s] = +ang(sub(P['elbow'+s],P['shoulder'+s]), sub(P['wrist'+s],P['elbow'+s])).toFixed(0);
    }
    // проникновение: голова в бёдра/голени, грудь в бёдра
    let pen = 0, what = '';
    for (const s of ['L','R']) for (const [a,bb,ra] of [['hip'+s,'knee'+s,.075],['knee'+s,'ankle'+s,.055]]) {
      for (const [q,rq] of [['head',.1],['chest',.12]]) { const d = segDist(P[q],P[a],P[bb]) - (ra + rq); if (d < pen) { pen = d; what = q+'>'+a; } }
    }
    r.pen = +pen.toFixed(3); r.penWhat = what;
    out.push(r);
  }
  fs.writeFileSync(process.argv[3], JSON.stringify(out));
  await b.close();
})();
