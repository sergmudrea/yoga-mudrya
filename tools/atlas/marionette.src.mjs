/* ---------- Marionette: a raw wooden-doll figure built from primitives ----------
   17 segments (pelvis, lumbar, chest, neck, head, upper arm, forearm, hand, thigh, shin, foot).
   A pose is a world quaternion per segment (TW). Two sources feed it:
   1) the atlas drawings (sagittal/frontal joint angles) through the direction solver below;
   2) joint-angle poses (hip/shoulder flexion, abduction, rotation; knee/elbow flexion; spine
      flexion, side bend, twist ...), with anatomical ranges, used by the asana library.
   Palms and soles are the dark half of each hand/foot volume, backs of hands and tops of feet
   the light half. Right limbs orange, left limbs blue. */
import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createSkin} from './skin.mjs';

const V3=(x=0,y=0,z=0)=>new T.Vector3(x,y,z);
const DEG=Math.PI/180;
const dir2=a=>V3(Math.cos(a*DEG),Math.sin(a*DEG),0);
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
const Q=()=>new T.Quaternion();
const qAx=(ax,deg)=>Q().setFromAxisAngle(ax,deg*DEG);
const X=V3(1,0,0),Y=V3(0,1,0),Z=V3(0,0,1);

/* body proportions (metres) */
const DIM={hipW:.09,hipDown:.03,lumb:.20,chest:.25,shW:.175,shDown:.05,neck:.085,headC:.11,ua:.29,fa:.25,hand:.19,th:.43,sh:.43};
/* rest frames of each segment in the body frame (forward +Z, up +Y, left +X): [direction, reference] */
const UP=V3(0,1,0),DN=V3(0,-1,0),FW=V3(0,0,1),LX=V3(1,0,0),RX=V3(-1,0,0);
const REST={pelvis:[UP,LX],lumbar:[UP,LX],chest:[UP,LX],neck:[UP,LX],head:[UP,LX],
  uarmL:[DN,RX],farmL:[DN,RX],handL:[DN,RX],uarmR:[DN,RX],farmR:[DN,RX],handR:[DN,LX],
  thighL:[DN,LX],shinL:[DN,LX],footL:[FW,LX],thighR:[DN,LX],shinR:[DN,LX],footR:[FW,LX]};
const SEGS=Object.keys(REST);

const LOTUS='padma padmatw padmaneck parvata padmafold padmafold2 padmafoldnam baddhapadma baddhafold vmatsya1 vmatsya2 vmatsya3 vmatsya4 vmatsya5 lotusrelax kokila lotusturtle tola padmadhanu1 padmadhanu2 padmahala karnalotus sarvlotus sblotus viplotus shirlotus shirlotusfold fscorplotus tripodlotus handlotus kukprep kukelb kukkuta parshvak galava galavahead mayuralotus fishsphinx x_sukha siddha matsya'.split(' ');
const HALF={hlseat:'L1',hlfold:'L1',hlbind:'L1',hlbindfold:'L1',hltwist:'L1',revtablehl:'L1',ekoshtralotus:'L2'};
const BUTTER='bhadra bhadralock bhadrafold bhadraknees hgoraksha x_suptabaddha baddhaup'.split(' ');

const COLORS={
  light:{R:'#cf6a1e',Rj:'#a9531a',Rd:'#6e3006',Rl:'#f7cfa8',L:'#3f5bb0',Lj:'#2f4790',Ld:'#18234f',Ll:'#bccaf2',torso:'#9a8f80',pelvis:'#857a6c',head:'#e2cdb3',hair:'#3a332c',eye:'#22252b',bg:'#fbfaf7',floor:'#ece7dd',mat:'#d9d1c2',stripe:'#cfc6b4'},
  dark:{R:'#f0974a',Rj:'#c87634',Rd:'#8a420e',Rl:'#ffe0c2',L:'#8ea6f0',Lj:'#6f86d0',Ld:'#33478a',Ll:'#e2e9ff',torso:'#a89d8e',pelvis:'#958a7b',head:'#e2cdb3',hair:'#2a2621',eye:'#1a1c20',bg:'#1f2024',floor:'#26272b',mat:'#34332f',stripe:'#3f3d38'}
};

const basis=(d,r)=>{const y=d.clone().normalize();let x=r.clone().sub(y.clone().multiplyScalar(r.dot(y)));
  if(x.lengthSq()<1e-6){x=Math.abs(y.x)<.9?V3(1,0,0):V3(0,0,1);x.sub(y.clone().multiplyScalar(x.dot(y)));}
  x.normalize();const z=V3().crossVectors(x,y);return Q().setFromRotationMatrix(new T.Matrix4().makeBasis(x,y,z));};
const RESTQ={};for(const s of SEGS)RESTQ[s]=basis(REST[s][0],REST[s][1]);
/* world quaternion of a segment from a target direction and reference vector */
const segQ=(s,d,r)=>basis(d,r).multiply(RESTQ[s].clone().invert());

async function createFigure3D(){
  /* ---------- scene ---------- */
  const scene=new T.Scene();
  scene.add(new T.HemisphereLight(0xffffff,0x8a8070,1.5));
  const key=new T.DirectionalLight(0xffffff,2.3);key.position.set(2.5,5,6);key.castShadow=true;
  key.shadow.mapSize.set(1024,1024);Object.assign(key.shadow.camera,{left:-3,right:3,top:3,bottom:-3,near:.5,far:20});key.shadow.bias=-0.001;
  scene.add(key);scene.add(key.target);
  const fill=new T.DirectionalLight(0xffffff,0.55);fill.position.set(-4,2,-3);scene.add(fill);
  const floorM=new T.MeshStandardMaterial({color:'#ece7dd',roughness:1});
  const floor=new T.Mesh(new T.PlaneGeometry(40,40),floorM);floor.rotation.x=-Math.PI/2;floor.receiveShadow=true;scene.add(floor);
  const matM=new T.MeshStandardMaterial({roughness:1});
  const mat=new T.Mesh(new T.PlaneGeometry(6,0.7),matM);mat.rotation.x=-Math.PI/2;mat.position.y=0.002;mat.receiveShadow=true;scene.add(mat);
  const stripeTex=pal=>{const c=document.createElement('canvas');c.width=512;c.height=64;const g=c.getContext('2d');g.fillStyle=pal.mat;g.fillRect(0,0,512,64);g.fillStyle=pal.stripe;for(let x=0;x<512;x+=32)g.fillRect(x,0,3,64);const t=new T.CanvasTexture(c);t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(4,1);t.colorSpace=T.SRGBColorSpace;return t;};

  /* ---------- the doll ---------- */
  const doll=new T.Group();scene.add(doll);
  const M={};const mk=c=>new T.MeshStandardMaterial({color:c,roughness:.62,metalness:0,flatShading:true});
  for(const k of ['R','Rj','Rd','Rl','L','Lj','Ld','Ll','torso','pelvis','head','hair','eye'])M[k]=mk('#888');
  const sph=new T.SphereGeometry(1,14,10), hemi=new T.SphereGeometry(1,14,7,0,Math.PI*2,0,Math.PI/2);
  const caps={};const capG=(r,l)=>{const k=r+'_'+l;return caps[k]||(caps[k]=new T.CapsuleGeometry(r,l,4,12));};
  const add=(g,m)=>{const o=new T.Mesh(g,m);o.castShadow=true;o.receiveShadow=true;doll.add(o);return o;};
  const P={}; /* primitives */
  P.pelvis=add(sph,M.pelvis);P.lumbar=add(sph,M.torso);P.chest=add(sph,M.torso);P.neck=add(capG(.042,DIM.neck),M.head);
  P.head=new T.Group();doll.add(P.head);
  {const h=new T.Mesh(sph,M.head);h.scale.set(.085,.112,.097);h.castShadow=true;P.head.add(h);
   const hair=new T.Mesh(hemi,M.hair);hair.scale.set(.091,.105,.101);hair.position.set(0,.01,-.012);hair.rotation.x=-0.75;P.head.add(hair);
   const nose=new T.Mesh(sph,M.head);nose.scale.set(.016,.022,.018);nose.position.set(0,-.012,.094);P.head.add(nose);
   for(const s of [-1,1]){const e=new T.Mesh(sph,M.eye);e.scale.setScalar(.011);e.position.set(s*.032,.018,.084);P.head.add(e);}}
  for(const s of ['L','R']){
    P['sh'+s]=add(sph,M[s+'j']);P['el'+s]=add(sph,M[s+'j']);P['wr'+s]=add(sph,M[s+'j']);
    P['hp'+s]=add(sph,M[s+'j']);P['kn'+s]=add(sph,M[s+'j']);P['an'+s]=add(sph,M[s+'j']);
    P['uarm'+s]=add(capG(.046,DIM.ua),M[s]);P['farm'+s]=add(capG(.038,DIM.fa),M[s]);
    P['thigh'+s]=add(capG(.066,DIM.th),M[s]);P['shin'+s]=add(capG(.049,DIM.sh),M[s]);
    for(const part of ['hand','foot']){const g=new T.Group();doll.add(g);
      const dk=new T.Mesh(hemi,M[s+'d']),lt=new T.Mesh(hemi,M[s+'l']);dk.castShadow=lt.castShadow=true;
      g.add(dk);g.add(lt);g.userData={dk,lt};P[part+s]=g;}
  }
  /* hand: local x = palm normal (dark half), y = along the hand; foot: y = up (light half on top) */
  for(const s of ['L','R']){const h=P['hand'+s].userData;h.dk.rotation.z=-Math.PI/2;h.lt.rotation.z=Math.PI/2;
    const f=P['foot'+s].userData;f.dk.rotation.x=Math.PI;}
  const fist={L:false,R:false};
  /* пальцы: четыре по три фаланги и большой из двух; форма кисти задаёт сгибание */
  const shape={L:'open',R:'open'};
  const PH=[[.040,.026,.019],[.044,.028,.020],[.041,.026,.019],[.031,.020,.016]],TH=[.034,.028];
  const CURL={open:{c:[6,10,6],sp:.06,t:[12,12]},floor:{c:[2,2,0],sp:.12,t:[4,0]},fist:{c:[88,100,70],sp:0,t:[40,55]},
    lock:{c:[62,72,40],sp:.03,t:[6,12]},namaste:{c:[0,0,0],sp:0,t:[0,6]}};
  const LOCKM=mk('#e8b64c');LOCKM.emissive=new T.Color('#5a3d00');
  const FING={};
  for(const s of ['L','R']){FING[s]={f:PH.map(row=>row.map(L=>add(capG(.0082,L),M[s]))),t:TH.map(L=>add(capG(.0098,L),M[s]))};}
  const segTo=(o,a,b,dir,mat)=>{o.position.copy(a).add(b).multiplyScalar(.5);o.quaternion.setFromUnitVectors(Y,dir);if(o.material!==mat)o.material=mat;};

  let theme=null;
  function setTheme(t){if(theme===t)return;theme=t;const pal=COLORS[t];for(const k in M)M[k].color.set(pal[k]);
    for(const k in skins)skins[k].setTheme(t);floorM.color.set(pal.floor);matM.map=stripeTex(pal);matM.needsUpdate=true;scene.background=new T.Color(pal.bg);}

  /* ---------- forward kinematics: TW -> joint positions ---------- */
  let J=null, root=V3(), lastTW=null, skin=null; const skins={};
  const ax=(q,v)=>v.clone().applyQuaternion(q);
  function fk(TW,origin){
    const o=origin.clone(), j={O:o};
    const qp=TW.pelvis;
    j.hipL=o.clone().add(ax(qp,V3(DIM.hipW,-DIM.hipDown,0)));j.hipR=o.clone().add(ax(qp,V3(-DIM.hipW,-DIM.hipDown,0)));
    j.B=o.clone().add(ax(qp,V3(0,.03,0)));
    j.C=j.B.clone().add(ax(TW.lumbar,V3(0,DIM.lumb,0)));
    j.N=j.C.clone().add(ax(TW.chest,V3(0,DIM.chest,0)));
    j.NT=j.N.clone().add(ax(TW.neck,V3(0,DIM.neck,0)));
    j.H=j.NT.clone().add(ax(TW.head,V3(0,DIM.headC,.01)));
    const cu=ax(TW.chest,Y);
    for(const s of ['L','R']){const sg=s==='L'?1:-1;
      const ua=ax(TW['uarm'+s],DN);const elev=clamp(-ua.dot(cu),0,1)*0.035; /* shoulders rise when the arm goes overhead */
      j['S'+s]=j.N.clone().add(ax(TW.chest,V3(sg*DIM.shW,-DIM.shDown+elev,0)));
      j['E'+s]=j['S'+s].clone().add(ua.clone().multiplyScalar(DIM.ua));
      j['W'+s]=j['E'+s].clone().add(ax(TW['farm'+s],DN).multiplyScalar(DIM.fa));
      j['K'+s]=j['hip'+s].clone().add(ax(TW['thigh'+s],DN).multiplyScalar(DIM.th));
      j['A'+s]=j['K'+s].clone().add(ax(TW['shin'+s],DN).multiplyScalar(DIM.sh));}
    return j;}

  /* primitive placement + exact lowest points per region */
  const tmpM=new T.Matrix4();
  function ellExt(q,r){const ux=ax(q,X),uy=ax(q,Y),uz=ax(q,Z);return Math.sqrt((r[0]*ux.y)**2+(r[1]*uy.y)**2+(r[2]*uz.y)**2);}
  function layout(TW,j,apply){
    const mins={};const low=(reg,y)=>{if(!(reg in mins)||y<mins[reg])mins[reg]=y;};
    const ell=(o,c,q,r,reg)=>{if(apply){o.position.copy(c);o.quaternion.copy(q);o.scale.set(r[0],r[1],r[2]);}low(reg,c.y-ellExt(q,r));};
    const ball=(o,c,r,reg)=>{if(apply){o.position.copy(c);o.quaternion.identity();o.scale.setScalar(r);}low(reg,c.y-r);};
    const capsule=(o,a,b,r,q,reg)=>{if(apply){o.position.copy(a).add(b).multiplyScalar(.5);o.quaternion.copy(q);}low(reg,Math.min(a.y,b.y)-r);};
    ell(P.pelvis,j.O.clone().add(ax(TW.pelvis,V3(0,.0,-.005))),TW.pelvis,[.155,.105,.115],'T');
    ell(P.lumbar,j.B.clone().lerp(j.C,.55),TW.lumbar,[.135,.125,.098],'T');
    ell(P.chest,j.C.clone().lerp(j.N,.55),TW.chest,[.185,.155,.115],'T');
    capsule(P.neck,j.N,j.NT,.042,TW.neck,'T');
    if(apply){P.head.position.copy(j.H);P.head.quaternion.copy(TW.head);}
    low('T',j.H.y-ellExt(TW.head,[.085,.112,.097]));
    for(const s of ['L','R']){
      ball(P['sh'+s],j['S'+s],.052,'A_'+s);ball(P['el'+s],j['E'+s],.042,'A_'+s);ball(P['wr'+s],j['W'+s],.032,'A_'+s+'h');
      ball(P['hp'+s],j['hip'+s],.07,'L_'+s);ball(P['kn'+s],j['K'+s],.056,'L_'+s);ball(P['an'+s],j['A'+s],.046,'L_'+s+'f');
      const segQd=(name)=>TW[name];
      capsule(P['uarm'+s],j['S'+s],j['E'+s],.046,segQd('uarm'+s),'A_'+s);
      capsule(P['farm'+s],j['E'+s],j['W'+s],.038,segQd('farm'+s),'A_'+s);
      capsule(P['thigh'+s],j['hip'+s],j['K'+s],.066,segQd('thigh'+s),'L_'+s);
      capsule(P['shin'+s],j['K'+s],j['A'+s],.049,segQd('shin'+s),'L_'+s);
      /* hand: frame from direction and palm normal */
      const hq=TW['hand'+s], hd=ax(hq,REST['hand'+s][0]), pn=ax(hq,REST['hand'+s][1]);
      const hb=basis(hd,pn); /* local y = hand dir, x = palm */
      const f=fist[s];const hl=f?.06:.058, hw=f?.05:.047, ht=f?.045:.024;
      const hc=j['W'+s].clone().add(hd.clone().multiplyScalar(f?.05:.055));
      ell(P['hand'+s],hc,hb,[ht,hl,hw],'A_'+s+'h');
      if(apply)P['hand'+s].scale.set(ht,hl,hw);
      {const sh=shape[s]||'open',C=CURL[sh]||CURL.open,lock=sh==='lock',mat=lock?LOCKM:M[s];
       const fz=V3().crossVectors(pn,hd).normalize(),g=s==='R'?1:-1;
       const knuck=j['W'+s].clone().add(hd.clone().multiplyScalar((f?.05:.055)+hl*.85));
       for(let i=0;i<4;i++){
         let p=knuck.clone().add(fz.clone().multiplyScalar((i-1.5)*.0205+(lock&&s==='L'?.01:0)));
         const d=hd.clone().add(fz.clone().multiplyScalar((i-1.5)*C.sp)).normalize();let a=0;
         for(let k=0;k<3;k++){a+=C.c[k]*DEG;const dir=d.clone().multiplyScalar(Math.cos(a)).add(pn.clone().multiplyScalar(Math.sin(a))).normalize();
           const e=p.clone().add(dir.clone().multiplyScalar(PH[i][k]));if(apply)segTo(FING[s].f[i][k],p,e,dir,mat);low('A_'+s+'h',Math.min(p.y,e.y)-.008);p=e;}}
       let p=j['W'+s].clone().add(hd.clone().multiplyScalar(.035)).add(fz.clone().multiplyScalar(-g*.03)).add(pn.clone().multiplyScalar(sh==='floor'?-.004:.012));
       const d0=hd.clone().multiplyScalar(.75).add(fz.clone().multiplyScalar(-g*.55)).add(pn.clone().multiplyScalar(sh==='floor'?-.05:.25)).normalize();let a=0;
       for(let k=0;k<2;k++){a+=C.t[k]*DEG;const dir=d0.clone().multiplyScalar(Math.cos(a)).add(pn.clone().multiplyScalar(Math.sin(a))).normalize();
         const e=p.clone().add(dir.clone().multiplyScalar(TH[k]));if(apply)segTo(FING[s].t[k],p,e,dir,mat);low('A_'+s+'h',Math.min(p.y,e.y)-.009);p=e;}}
      /* foot: x = left, y = up, z = forward */
      const fq=TW['foot'+s], fwd=ax(fq,FW), lf=ax(fq,LX);
      const up=V3().crossVectors(fwd,lf);
      const fb=Q().setFromRotationMatrix(new T.Matrix4().makeBasis(lf,up,fwd));
      const fc=j['A'+s].clone().add(up.clone().multiplyScalar(-.035)).add(fwd.clone().multiplyScalar(.055));
      ell(P['foot'+s],fc,fb,[.046,.04,.13],'L_'+s+'f');
    }
    if(apply&&skin)skin.update(TW,j,shape);
    return mins;}
  function regionMins(){return layout(lastTW,J,false);}

  /* ---------- placement: pelvis at x = hipX, lowest point on the floor ---------- */
  function place(TW,hipX,ignoreArms){
    let j=fk(TW,V3(hipX,0,0));const mins=layout(TW,j,false);
    let minY=Infinity;for(const r in mins){if(ignoreArms&&r[0]==='A')continue;minY=Math.min(minY,mins[r]);}
    j=fk(TW,V3(hipX,-minY,0));return j;}

  /* two-bone IK on world quaternions: move the wrist/ankle to T */
  const fromTo=(a,b)=>Q().setFromUnitVectors(a.clone().normalize(),b.clone().normalize());
  function ik2(TW,j,key,T){const s=key.slice(-1),arm=key[0]==='A';
    const nU=arm?'uarm'+s:'thigh'+s,nL=arm?'farm'+s:'shin'+s;
    const S=arm?j['S'+s]:j['hip'+s],E=arm?j['E'+s]:j['K'+s],C=arm?j['W'+s]:j['A'+s];
    const l1=S.distanceTo(E),l2=E.distanceTo(C);
    const toT=T.clone().sub(S);let d=toT.length();if(d<1e-4)return;const u=toT.clone().divideScalar(d);
    d=clamp(d,Math.abs(l1-l2)+1e-3,l1+l2-1e-3);
    let pole=E.clone().sub(S);pole.sub(u.clone().multiplyScalar(pole.dot(u)));
    if(pole.lengthSq()<1e-8)pole=ax(TW[nU],arm?FW:FW);pole.normalize();
    const a=(l1*l1-l2*l2+d*d)/(2*d),h=Math.sqrt(Math.max(0,l1*l1-a*a));
    const E2=S.clone().add(u.clone().multiplyScalar(a)).add(pole.multiplyScalar(h)),C2=S.clone().add(u.clone().multiplyScalar(d));
    TW[nU]=fromTo(E.clone().sub(S),E2.clone().sub(S)).multiply(TW[nU]);
    TW[nL]=fromTo(C.clone().sub(E),C2.clone().sub(E2)).multiply(TW[nL]);}
  const gapOf=(mins,key)=>{const e=mins[key+(key[0]==='A'?'h':'f')]??Infinity,sg=mins[key]??Infinity;return sg<-0.005?Math.min(e,sg):e;};
  const endOf=(j,key)=>{const s=key.slice(-1);return (key[0]==='A'?j['W'+s]:j['A'+s]).clone();};

  /* show a pose; ik: {A_L|A_R|L_L|L_R: 'floor' | V3 | {p,w}} */
  function showTW(TW0,{hipX=0,ignoreArms=false,ik=null,hands=null}={}){
    const TW={};for(const k in TW0)TW[k]=TW0[k].clone();
    fist.L=!!(hands&&hands.L==='fist');fist.R=!!(hands&&hands.R==='fist');shape.L=(hands&&hands.L)||'open';shape.R=(hands&&hands.R)||'open';
    let j=place(TW,hipX,ignoreArms);
    const spec={...(ik||{})};
    if(ignoreArms){const mins=layout(TW,j,false);for(const key of ['A_L','A_R'])if(!(key in spec)&&gapOf(mins,key)<-0.005)spec[key]='lift';}
    for(let pass=0;pass<3&&Object.keys(spec).length;pass++){
      const mins=layout(TW,j,false);let moved=false;
      for(const key in spec){const end=endOf(j,key);let Tt;const sp=spec[key];
        if(sp==='floor'||sp==='lift'){const g=gapOf(mins,key);if(sp==='lift'?g>-0.005:Math.abs(g)<0.012)continue;Tt=end.clone();Tt.y-=g;}
        else if(sp.isVector3)Tt=sp;else{if(sp.w<0.002)continue;Tt=end.clone().lerp(sp.p,sp.w);}
        ik2(TW,j,key,Tt);moved=true;}
      if(!moved)break;j=place(TW,j.O.x,ignoreArms);}
    /* hands and forearms never end below the floor */
    for(let pass=0;pass<2;pass++){const mins=layout(TW,j,false);let moved=false;
      for(const key of ['A_L','A_R']){const g=gapOf(mins,key);if(g>-0.005)continue;const Tt=endOf(j,key);Tt.y-=g;ik2(TW,j,key,Tt);moved=true;}
      if(!moved)break;j=place(TW,j.O.x,ignoreArms);}
    lastTW=TW;J=j;layout(TW,j,true);
    return points();}
  function shift(dx){const TW=lastTW;J=fk(TW,J.O.clone().add(V3(dx,0,0)));layout(TW,J,true);}

  /* named points with radii (contacts, pins, framing) */
  function points(){const j=J,TW=lastTW,out=[];const add=(name,v,r,arm)=>out.push({name,v:v.clone(),r,arm});
    add('pelvis',j.O,.11);add('waist',j.B.clone().lerp(j.C,.5),.12);add('chest',j.C.clone().lerp(j.N,.5),.13);
    add('head',j.H,.11);add('crown',j.H.clone().add(ax(TW.head,V3(0,.1,0))),.05);
    for(const s of ['L','R']){
      add('hip'+s,j['hip'+s],.08);add('knee'+s,j['K'+s],.056);add('ankle'+s,j['A'+s],.046);
      const fwd=ax(TW['foot'+s],FW),up=V3().crossVectors(fwd,ax(TW['foot'+s],LX));
      add('ball'+s,j['A'+s].clone().add(fwd.clone().multiplyScalar(.13)).add(up.clone().multiplyScalar(-.05)),.03);
      add('tip'+s,j['A'+s].clone().add(fwd.clone().multiplyScalar(.18)).add(up.clone().multiplyScalar(-.045)),.022);
      add('heel'+s,j['A'+s].clone().add(fwd.clone().multiplyScalar(-.05)).add(up.clone().multiplyScalar(-.045)),.04);
      add('shoulder'+s,j['S'+s],.052,1);add('elbow'+s,j['E'+s],.042,1);add('wrist'+s,j['W'+s],.032,1);
      add('finger'+s,j['W'+s].clone().add(ax(TW['hand'+s],REST['hand'+s][0]).multiplyScalar(.17)),.02,1);}
    return out;}
  function endPos(key){return endOf(J,key);}

  /* ---------- solver 1: atlas drawings (2D angles) -> segment directions ---------- */
  const L2={th:DIM.th,sh:DIM.sh,ua:DIM.ua,fa:DIM.fa,sp:DIM.lumb+DIM.chest,hipW:DIM.hipW,shW:DIM.shW};
  function solveLegacy(p,feat,hp3){
    const front=(p.v||0)>0.5;
    if(!front&&p.fl)p=window.reflAng(p);
    const F=front?V3(0,0,1):V3(1,0,0), Rt=front?V3(-1,0,0):V3(0,0,1), Lt=Rt.clone().negate();
    const sideOf={L1:front?'L':'R',L2:front?'R':'L',A1:front?'L':'R',A2:front?'R':'L'};
    const W={};
    const t0=p.t[0],t1=p.t[1],t2=p.t[2];
    const lerpA=(a,b,k)=>a+(((b-a+540)%360)-180)*k;
    const lean=front&&(p.sc||1)<0.95?Math.acos(clamp(p.sc,0.05,1)):0;
    const qLean=Q().setFromAxisAngle(V3(1,0,0),lean);
    const rotL=(v,f=1)=>f>=0.999?v.applyQuaternion(qLean):v.applyQuaternion(Q().slerp(qLean,f));
    const sd_=a=>lean?rotL(dir2(a)):dir2(a);
    W.pelvis=[sd_(t0),Lt];W.lumbar=[sd_(lerpA(t0,t1,.35)),Lt];W.chest=[sd_(t1),Lt];
    if(lean){W.neck=[rotL(dir2(t1)).applyAxisAngle(X,0.2),Lt];W.head=[rotL(dir2(t1)).applyAxisAngle(X,0.4),Lt];}
    else{W.neck=[dir2(lerpA(t1,t2,.5)),Lt];W.head=[dir2(t2),Lt];}
    const chestP=sd_(t0).multiplyScalar(L2.sp*.45).add(sd_(t1).multiplyScalar(L2.sp*.55));
    feat=feat||{};
    for(const Lk of ['L1','L2']){
      const sd=sideOf[Lk], a=p[Lk], lat=(sd==='R'?Rt:Lt);
      let d1=dir2(a[0]), d2=dir2(a[1]); const d3=dir2(a[2]);
      const kneeRel=(((a[0]-a[1])%360)+540)%360-180;
      const wl=Math.max(feat[Lk]||0, front?0:smooth(15,45,-kneeRel)), wb=feat.butter||0, wf=Math.max(wl,wb);
      if(wf>0.001){
        const hip=lat.clone().multiplyScalar(L2.hipW);
        const knee=hip.clone().add(d1.clone().multiplyScalar(L2.th));
        const ank=knee.clone().add(d2.clone().multiplyScalar(L2.sh));
        const k2=knee.clone(), a2=ank.clone(), bw=wb/(wl+wb||1);
        if(front){k2.z+=0.30*(1-bw)+0.22*bw;a2.z+=0.22*(1-bw)+0.26*bw;}
        else{k2.add(lat.clone().multiplyScalar(0.20*(1-bw)+0.30*bw));a2.set(a2.x,a2.y,0).add(lat.clone().multiplyScalar(-0.10*(1-bw)+0.02*bw));}
        knee.lerp(k2,wf);ank.lerp(a2,wf);
        d1=knee.clone().sub(hip).normalize();d2=ank.clone().sub(knee).normalize();}
      const cr=V3().crossVectors(d1,d2), bend=cr.length();
      let def=front?V3().crossVectors(d1,F).negate():Lt.clone();
      if(def.lengthSq()<1e-4)def.copy(Lt);
      let hinge=def.normalize();
      if(bend>0.05){const hc=cr.normalize();const w=smooth(0.05,0.3,bend);hinge=def.clone().lerp(hc,w);if(hinge.lengthSq()<1e-4)hinge=hc;hinge.normalize();}
      let fd=d3.clone();if(front)fd=V3(d3.x*0.3,d3.y*0.6,0.9).normalize();
      W['thigh'+sd]=[d1,hinge];W['shin'+sd]=[d2,hinge];W['foot'+sd]=[fd,hinge];}
    const pw=feat.pair||0;
    for(const Ak of ['A1','A2']){
      const sd=sideOf[Ak], a=p[Ak], lat=(sd==='R'?Rt:Lt);
      let d1=dir2(a[0]), d2=dir2(a[1]);
      if(lean){const f1=smooth(-0.25,0.25,d1.y),f2=smooth(-0.25,0.25,d2.y);d1=rotL(d1,f1);d2=rotL(d2,Math.max(f1,f2));}
      const elRel=(((a[1]-a[0])%360)+540)%360-180;
      const sh=chestP.clone().add(lat.clone().multiplyScalar(L2.shW));
      const el=sh.clone().add(d1.clone().multiplyScalar(L2.ua)), wr=el.clone().add(d2.clone().multiplyScalar(L2.fa));
      const e2=el.clone(), w2=wr.clone(); let wm=0;
      const inFront=front&&Math.abs(wr.x)<0.2&&wr.y>-0.1&&wr.y<L2.sp+0.25;
      if(pw>0.001){
        if(front){if(inFront){w2.z=0.2;e2.z=0.12;}else w2.z=0.06;}
        else{e2.set(e2.x,e2.y,0).add(lat.clone().multiplyScalar(L2.shW*0.55));w2.set(w2.x,w2.y,0).add(lat.clone().multiplyScalar(0.035));}
        wm=pw;}
      else if(inFront){w2.z=0.22;e2.z=0.1;wm=1;}
      else if(!front){const wn=smooth(20,50,-elRel);if(wn>0){w2.set(w2.x,w2.y,0).add(lat.clone().multiplyScalar(-0.02));e2.add(lat.clone().multiplyScalar(0.12));wm=wn;}}
      if(wm>0.001){el.lerp(e2,wm);wr.lerp(w2,wm);d1=el.clone().sub(sh).normalize();d2=wr.clone().sub(el).normalize();}
      let def=front?V3().crossVectors(d1,F):Rt.clone();
      if(def.lengthSq()<1e-4)def.copy(Rt);
      let hinge=def.normalize();
      const cr=V3().crossVectors(d1,d2),bend=cr.length();
      if(bend>0.05){const hc=cr.normalize();const w=smooth(0.05,0.3,bend);hinge=def.clone().lerp(hc,w);if(hinge.lengthSq()<1e-4)hinge=hc;hinge.normalize();}
      W['uarm'+sd]=[d1,hinge];W['farm'+sd]=[d2,hinge];
      const hframe=h=>{let hd=h&&h.dir?h.dir.clone():d2.clone(), pn=h&&h.palm?h.palm.clone():lat.clone().negate();
        if(!front&&h&&h.medial&&pw>0){pn=pn.clone().lerp(lat.clone().negate(),smooth(0,1,pw));if(pn.lengthSq()<1e-3)pn=lat.clone().negate();pn.normalize();}
        return [hd,pn];};
      const hh=hp3&&hp3[Ak];
      if(hh&&hh.mix){const fa=hframe(hh.a),fb=hframe(hh.b);W['hand'+sd]={qa:fa,qb:fb,t:hh.t};}
      else W['hand'+sd]=hframe(hh);}
    const TW={};
    for(const s in W){const w=W[s];
      if(w.qa){TW[s]=segQ(s,w.qa[0],w.qa[1]).slerp(segQ(s,w.qb[0],w.qb[1]),w.t);}
      else TW[s]=segQ(s,w[0],w[1]);}
    return TW;}

  /* ---------- solver 2: joint angles (the library) ----------
     jp: {root:[pitch,roll,yaw], sp:[flex,side,twist], nk:[flex,side,twist],
          hL/hR:[flex,abd,rot], kL/kR, aL/aR (ankle dorsiflexion),
          sL/sR:[flex,abd,rot], eL/eR, fL/fR (forearm supination), wL/wR:[flex,dev]}  degrees */
  /* Joint ranges of a trained yoga practitioner (not of an average untrained body):
     hip flexion to 175 (leg-behind-head shapes), extension to -75 relative to the pelvis (back leg in a split,
     the rest comes from pelvic tilt), abduction to 100 (side splits), external rotation to 95 (lotus);
     knee 0-165 and elbow 0-160 with no hyperextension; ankle plantar flexion 80 (thunderbolt), dorsiflexion 40;
     whole spine flexion 110, extension 120 (wheel, scorpion), side bend 60, twist 75; neck +-80;
     shoulder flexion to 195 (arms overhead with scapular lift), extension to -90 (bound hands lifted behind),
     abduction 190, rotation +-100; forearm rotation +-95; wrist +-90. */
  const ROM={hip:[[-75,175],[-35,100],[-60,95]],knee:[0,165],ank:[-80,40],sp:[[-120,110],[-60,60],[-75,75]],nk:[[-80,75],[-50,50],[-85,85]],
    sh:[[-90,195],[-40,190],[-100,105]],el:[0,160],sup:[-95,95],wr:[[-90,90],[-30,40]]};
  const cl=(v,r)=>clamp(v,r[0],r[1]);
  const E3=(f,s,t)=>qAx(X,f).multiply(qAx(Z,-s)).multiply(qAx(Y,t)); /* spine: flex fwd, side to the left, twist to the left */
  function solveJoint(jp){
    const r=jp.root||[0,0,0];
    const qRoot=qAx(Y,r[2]||0).multiply(qAx(Z,-(r[1]||0))).multiply(qAx(X,r[0]||0));
    const sp=(jp.sp||[0,0,0]).map((v,i)=>cl(v,ROM.sp[i])), nk=(jp.nk||[0,0,0]).map((v,i)=>cl(v,ROM.nk[i]));
    const TW={};
    const pp=jp.pp||[0,0,0];
    TW.pelvis=qRoot.clone().multiply(E3(pp[0]||0,pp[1]||0,pp[2]||0));
    TW.lumbar=TW.pelvis.clone().multiply(E3(sp[0]*.45,sp[1]*.45,sp[2]*.35));
    TW.chest=TW.lumbar.clone().multiply(E3(sp[0]*.55,sp[1]*.55,sp[2]*.65));
    TW.neck=TW.chest.clone().multiply(E3(nk[0]*.5,nk[1]*.5,nk[2]*.5));
    TW.head=TW.neck.clone().multiply(E3(nk[0]*.5,nk[1]*.5,nk[2]*.5));
    for(const s of ['L','R']){const g=s==='L'?1:-1;
      const h=(jp['h'+s]||[0,0,0]).map((v,i)=>i===0?cl(v,[ROM.hip[0][0]-(pp[0]||0),ROM.hip[0][1]-(pp[0]||0)]):i===1?cl(v,[ROM.hip[1][0],ROM.hip[1][1]+Math.max(0,-g*(pp[1]||0))]):cl(v,ROM.hip[i]));
      TW['thigh'+s]=qRoot.clone().multiply(qAx(X,-h[0])).multiply(qAx(Z,g*h[1])).multiply(qAx(Y,g*h[2]));
      TW['shin'+s]=TW['thigh'+s].clone().multiply(qAx(X,cl(jp['k'+s]||0,ROM.knee)));
      TW['foot'+s]=TW['shin'+s].clone().multiply(qAx(X,-cl(jp['a'+s]??0,ROM.ank)));
      const sh=(jp['s'+s]||[0,0,0]).map((v,i)=>cl(v,ROM.sh[i]));
      TW['uarm'+s]=TW.chest.clone().multiply(qAx(X,-sh[0])).multiply(qAx(Z,g*sh[1])).multiply(qAx(Y,g*sh[2]));
      TW['farm'+s]=TW['uarm'+s].clone().multiply(qAx(X,-cl(jp['e'+s]||0,ROM.el)));
      const w=jp['w'+s]||[0,0];
      TW['hand'+s]=TW['farm'+s].clone().multiply(qAx(Y,g*cl(jp['f'+s]||0,ROM.sup))).multiply(qAx(Z,-g*cl(w[0],ROM.wr[0]))).multiply(qAx(X,cl(w[1]||0,ROM.wr[1])));}
    /* targets: place a foot (gL/gR) or a hand (tL/tR) by two-bone IK.
       t = {p:[x,y,z] in the frame of ref, ref:'chest'|'pelvis'|'head'|'kneeL'|..., pole:[x,y,z], hd:[..], pn:[..], fd:[..]}
       vectors are body-frame (x = left, y = up, z = forward) of the reference segment */
    const anyT=['gL','gR','tL','tR'].some(k=>jp[k]);
    if(anyT){
      const frameQ={chest:TW.chest,pelvis:TW.pelvis,head:TW.head,lumbar:TW.lumbar,root:qRoot};
      for(const k of ['gL','gR','tL','tR']){const t=jp[k];if(!t)continue;
        const j=fk(TW,V3());const s=k[1],leg=k[0]==='g';
        const refName=t.ref||(leg?'pelvis':'chest');
        let origin, rq;
        if(frameQ[refName]){rq=frameQ[refName];origin={chest:j.N,pelvis:j.O,head:j.H,lumbar:j.C,root:j.O}[refName];}
        else{const m={kneeL:'KL',kneeR:'KR',ankleL:'AL',ankleR:'AR',hipL:'hipL',hipR:'hipR',wristL:'WL',wristR:'WR',shL:'SL',shR:'SR'}[refName];origin=j[m];
          rq=/knee|ankle|hip/.test(refName)?TW[(refName.includes('knee')?'thigh':refName.includes('ankle')?'shin':'thigh')+refName.slice(-1)]:TW.chest;}
        const W=v=>V3(v[0],v[1],v[2]).applyQuaternion(rq);
        const sd0=s==='L'?1:-1;const Tp=origin.clone().add(W([t.p[0]*sd0,t.p[1],t.p[2]]));
        const S=leg?j['hip'+s]:j['S'+s];
        const l1=leg?DIM.th:DIM.ua,l2=leg?DIM.sh:DIM.fa;
        const toT=Tp.clone().sub(S);let d=clamp(toT.length(),Math.abs(l1-l2)+1e-3,l1+l2-1e-3);const u=toT.normalize();
        let pole=W(t.pole||(leg?[0,0,1]:[0.6,-0.5,-0.4]).map((v,i)=>i===0&&!leg?v*(s==='L'?1:-1):v));
        if(t.pole&&!leg)pole=W([t.pole[0]*(s==='L'?1:-1),t.pole[1],t.pole[2]]);
        if(t.pole&&leg)pole=W([t.pole[0]*(s==='L'?1:-1),t.pole[1],t.pole[2]]);
        pole.sub(u.clone().multiplyScalar(pole.dot(u)));if(pole.lengthSq()<1e-6)pole=W([0,0,1]);pole.normalize();
        const a=(l1*l1-l2*l2+d*d)/(2*d),h=Math.sqrt(Math.max(0,l1*l1-a*a));
        const E=S.clone().add(u.clone().multiplyScalar(a)).add(pole.clone().multiplyScalar(h)),C=S.clone().add(u.clone().multiplyScalar(d));
        const d1=E.clone().sub(S).normalize(),d2=C.clone().sub(E).normalize();
        let hg=V3().crossVectors(d1,d2);if(hg.lengthSq()<1e-5)hg=V3().crossVectors(pole,d1);hg.normalize();
        const side=s==='L'?1:-1;
        const vec=v=>W([v[0]*side,v[1],v[2]]).normalize();
        /* anatomical enforcement: the IK proposes a limb plane; the proximal joint is then re-expressed as
           hip/shoulder angles in the parent frame, clamped to the yoga ROM, and the hinge (knee/elbow) is
           re-bent only in its own anatomical plane, so no target can twist a knee or elbow the wrong way */
        const interior=Math.acos(clamp((l1*l1+l2*l2-d*d)/(2*l1*l2),-1,1))/DEG, bend=180-interior;
        if(leg){const g=side,par=qRoot;
          const q0=par.clone().invert().multiply(segQ('thigh'+s,d1,hg));const eu=new T.Euler().setFromQuaternion(q0,'XZY');
          let h0=-eu.x/DEG,h1=g*eu.z/DEG,h2=g*eu.y/DEG;
          h0=cl(h0,[ROM.hip[0][0]-(pp[0]||0),ROM.hip[0][1]-(pp[0]||0)]);h1=cl(h1,[ROM.hip[1][0],ROM.hip[1][1]+Math.max(0,-g*(pp[1]||0))]);h2=cl(h2,ROM.hip[2]);
          const kk=cl(bend,ROM.knee);
          TW['thigh'+s]=par.clone().multiply(qAx(X,-h0)).multiply(qAx(Z,g*h1)).multiply(qAx(Y,g*h2));
          TW['shin'+s]=TW['thigh'+s].clone().multiply(qAx(X,kk));
          const sd2=DN.clone().applyQuaternion(TW['shin'+s]).normalize(),shg=LX.clone().applyQuaternion(TW['shin'+s]).normalize();
          let fd=t.fd?vec(t.fd):W([0,0,1]);fd.sub(sd2.clone().multiplyScalar(fd.dot(sd2)));if(fd.lengthSq()<1e-4)fd=V3().crossVectors(shg,sd2);fd.normalize();
          const fq=segQ('foot'+s,fd,shg);const a0=new T.Euler().setFromQuaternion(TW['shin'+s].clone().invert().multiply(fq),'XYZ');
          TW['foot'+s]=TW['shin'+s].clone().multiply(qAx(X,-cl(-a0.x/DEG,ROM.ank)));}
        else{const g=side,par=TW.chest;
          const q0=par.clone().invert().multiply(segQ('uarm'+s,d1,hg));const eu=new T.Euler().setFromQuaternion(q0,'XZY');
          let s0=cl(-eu.x/DEG,ROM.sh[0]),s1=cl(g*eu.z/DEG,ROM.sh[1]),s2=cl(g*eu.y/DEG,ROM.sh[2]);
          const ee=cl(bend,ROM.el);
          TW['uarm'+s]=par.clone().multiply(qAx(X,-s0)).multiply(qAx(Z,g*s1)).multiply(qAx(Y,g*s2));
          TW['farm'+s]=TW['uarm'+s].clone().multiply(qAx(X,-ee));
          const hd=t.hd?vec(t.hd):DN.clone().applyQuaternion(TW['farm'+s]);const pn=t.pn?vec(t.pn):W([-side,0,0]);
          TW['hand'+s]=segQ('hand'+s,hd,pn);}
      }}
    return TW;}

  /* ---------- camera / renderer ---------- */
  function makeView(canvas,{interactive=false,w=600,h=480}={}){
    const renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:false,preserveDrawingBuffer:!interactive});
    renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1));renderer.setSize(w,h,false);
    renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.outputColorSpace=T.SRGBColorSpace;
    const cam=new T.PerspectiveCamera(20,w/h,.1,60);
    const view={renderer,cam,yaw:16,pitch:7,dist:7.2,center:V3(0,0.9,0),controls:null};
    if(interactive){const c=new OrbitControls(cam,canvas);c.enableDamping=true;c.enablePan=false;c.minDistance=2;c.maxDistance=16;view.controls=c;}
    view.place=(center,size,yawExtra=0)=>{view.center.copy(center);
      if(view.controls&&view.userMoved){view.controls.target.copy(center);view.controls.update();return;}
      const dist=size?size/(2*Math.tan(cam.fov*DEG/2)):view.dist;
      const y=(view.yaw+yawExtra)*DEG,pt=view.pitch*DEG;cam.position.set(center.x+Math.sin(y)*Math.cos(pt)*dist,center.y+Math.sin(pt)*dist,center.z+Math.cos(y)*Math.cos(pt)*dist);
      cam.lookAt(center);if(view.controls)view.controls.target.copy(center);};
    view.resize=(W,H)=>{renderer.setSize(W,H,false);cam.aspect=W/H;cam.updateProjectionMatrix();};
    view.render=()=>{key.position.set(view.center.x+2.5,5,view.center.z+6);key.target.position.copy(view.center);renderer.render(scene,cam);};
    return view;}
  function frameOf(pts,aspect=1){let x0=Infinity,x1=-Infinity,z0=Infinity,z1=-Infinity,y1=0;for(const q of pts){x0=Math.min(x0,q.v.x-q.r);x1=Math.max(x1,q.v.x+q.r);z0=Math.min(z0,q.v.z-q.r);z1=Math.max(z1,q.v.z+q.r);y1=Math.max(y1,q.v.y+q.r);}
    const H=y1,Wd=Math.max(x1-x0,(z1-z0)*0.6);const s=Math.max(H*1.22+0.32,(Wd*1.1+0.3)/aspect,1.3);
    return {c:V3((x0+x1)/2,Math.max(H/2,s/2-0.12)-0.02,(z0+z1)/2*0.5),s};}

  setTheme('light');
  /* модель поверх марионетки (skin.mjs): решатель тот же, рисуется кожа. Человеческие модели убраны;
     сюда можно подключить другую (например, робота): SKIN_URL={bot:'bot.glb'}. По умолчанию — марионетка ('doll'). */
  const SKIN_URL={};
  async function loadSkin(url,key='model'){const s=await createSkin(T,scene,{REST,DIM,url});s.setTheme(theme||'light');s.active=false;skins[key]=s;return s;}
  async function setFigure(kind){
    if(kind!=='doll'&&!skins[kind]&&SKIN_URL[kind]){try{await loadSkin(SKIN_URL[kind],kind);}catch(e){console.warn('model',kind,e);kind='doll';}}
    if(kind!=='doll'&&!skins[kind])kind='doll';
    for(const k in skins)skins[k].active=k===kind;skin=kind==='doll'?null:skins[kind];doll.visible=!skin;if(J)layout(lastTW,J,true);}
  return {scene,setTheme,loadSkin,setFigure,skinAudit(){return skin&&skin.active?skin.audit:null;},skinRadius(){return skin&&skin.radius;},solveLegacy,solveJoint,showTW,shift,endPos,points,frameOf,makeView,
    get lastTW(){return lastTW;},regionMins,vmin(){const m=regionMins();return Math.min(...Object.values(m));},vminsAll:regionMins,
    centerOf:pts=>frameOf(pts).c,LOTUS,HALF,BUTTER,SEGS,matMesh:mat};
}

/* ---------- 3D stage glue: poses -> marionette, transitions, thumbnails ---------- */
async function boot(){
  const host=document.getElementById('stage');
  let fig;
  try{fig=await createFigure3D();}catch(e){console.warn('3D unavailable, keeping drawings',e);return;}
  const isDark=()=>{const a=document.documentElement.getAttribute('data-theme');return a?a==='dark':matchMedia('(prefers-color-scheme: dark)').matches;};
  fig.setTheme(isDark()?'dark':'light');
  const canvas=document.getElementById('c');
  let view;
  try{view=fig.makeView(canvas,{interactive:true});}catch(e){console.warn('WebGL unavailable',e);return;}
  const fit=()=>{view.resize(host.clientWidth||600,host.clientHeight||600);if(window.__refit)window.__refit();};
  fit();new ResizeObserver(fit).observe(host);
  view.controls.addEventListener('start',()=>{view.userMoved=true;});

  /* ---- legacy (drawn) pose helpers ---- */
  const std=p=>{p={...p};if(!((p.v||0)>0.5)&&p.fl){const h=p.h,v=p.v,sc=p.sc,m=p.mir,ext=p.ext;p={...reflAng(p),h,v,sc,mir:m,ext,fl:0};}return p;};
  const front=p=>(p.v||0)>0.5;
  const feat=(p,id)=>{const f={L1:0,L2:0,butter:0,pair:0};
    if(fig.LOTUS.includes(id)){f.L1=1;f.L2=1;} if(fig.HALF[id]){f[fig.HALF[id]]=1;} if(fig.BUTTER.includes(id))f.butter=1;
    const pl=planHands(place(fk(p)));f.pair=pl.pair?1:0;const fr=front(p);const sd={A1:fr?'L':'R',A2:fr?'R':'L'};f.hands={};
    for(const A of ['A1','A2']){const h=pl[A];f.hands[sd[A]]=h?({fist:'fist',lock:'lock',lockrev:'lock',namaste:'namaste',floor:'floor',floorb:'floor'}[h.t]||'open'):'open';}return f;};
  const lerpFeat=(a,b,k)=>{const o={};for(const key of ['L1','L2','butter','pair'])o[key]=(a[key]||0)+((b[key]||0)-(a[key]||0))*k;o.hands=k<0.5?a.hands:b.hands;return o;};
  const toV=v=>V3(v[0],-v[1],v[2]||0).normalize();
  const plan3=p=>{const pl=planHands(place(fk(p)));const out={};
    for(const k of ['A1','A2']){const h=pl[k];if(!h)continue;
      out[k]={dir:h.floorFront?V3(0,0,1):V3(h.dir[0],-h.dir[1],0).normalize(),palm:toV(h.palm),medial:!!h.medial};
      if(out[k].dir.lengthSq()<1e-6)out[k].dir=V3(0,-1,0);}
    return out;};
  function armFloorFix(p){
    if(front(p))return p;const k=fk(p);
    const RAD=[4.5,4.5,4.5,2.7,2.3,2.1,1.9,2.7,2.3,2.1,1.9];
    const body=[k.P,k.C,k.S,...k.L1,...k.L2];let floor=Math.min(...body.map((q,i)=>q[1]-RAD[i]),k.H[1]-6);
    const q={...p};
    for(const A of ['A1','A2']){const S=k[A][0];let [a0,a1]=p[A];
      const ok=(b0,b1)=>{const E=[S[0]+Math.cos(b0*Math.PI/180)*LEN.ua,S[1]+Math.sin(b0*Math.PI/180)*LEN.ua];const W=[E[0]+Math.cos(b1*Math.PI/180)*LEN.fa,E[1]+Math.sin(b1*Math.PI/180)*LEN.fa];return E[1]-1.9>=floor&&W[1]-1.7>=floor;};
      if(ok(a0,a1))continue;let done=false;
      for(let d=5;d<=150&&!done;d+=5){if(ok(a0,a1+d)){a1+=d;done=true;}}
      for(let d=5;d<=45&&!done;d+=5){for(const s of [1,-1]){if(ok(a0+s*d,a1+s*d)){a0+=s*d;a1+=s*d;done=true;break;}}}
      q[A]=[a0,a1];}
    return q;}
  function contacts2D(p){const o=place(fk(p)),fr=front(p),pl=planHands(o),ik={};
    const sd={L1:fr?'L':'R',L2:fr?'R':'L',A1:fr?'L':'R',A2:fr?'R':'L'};
    for(const L of ['L1','L2'])if(Math.max(o[L][2][1],o[L][3][1])>=93)ik['L_'+sd[L]]='floor';
    for(const A of ['A1','A2']){const h=pl[A];if((h&&(h.t==='floor'||h.t==='floorb'))||o[A][2][1]>=93)ik['A_'+sd[A]]='floor';}
    return ik;}
  const ARMBAL=new Set('lsit baka ekabaka adhoeka mayura mayurabent mayuralotus tola tolang lola kukkuta kukelb handlotus handstand handscorp handscorp1 handL galava parshvak tittibha padabhuja x_koundinya x_astavakra pincha fscorp fscorp1 fscorplotus fscorpext ekscorp ekscorpup ekscorptw kundala pashini pashini2 spider kukprep'.split(' '));

  /* ---- joint-angle (library) pose helpers ---- */
  const JKEYS=['sp','nk','hL','hR','sL','sR','wL','wR'], JSCAL=['kL','kR','aL','aR','eL','eR','fL','fR'];
  const lerpJ=(a,b,k)=>{const o={root:[0,1,2].map(i=>{const x=(a.root||[0,0,0])[i]||0,y=(b.root||[0,0,0])[i]||0;return x+(((y-x+540)%360)-180)*k;})};
    for(const key of JKEYS){const x=a[key]||[0,0,0],y=b[key]||[0,0,0];o[key]=[0,1,2].map(i=>(x[i]||0)+((y[i]||0)-(x[i]||0))*k);}
    for(const key of JSCAL)o[key]=(a[key]||0)+((b[key]||0)-(a[key]||0))*k;return o;};
  const jik=jp=>{const ik={};for(const c of jp.c||[]){const m={hL:'A_L',hR:'A_R',fL:'L_L',fR:'L_R'}[c];if(m)ik[m]='floor';}return ik;};
  const jhands=jp=>({L:(jp.hm&&jp.hm.L)||'open',R:(jp.hm&&jp.hm.R)||'open'});

  /* ---- states ---- */
  function solveState(pose,id){
    if(pose.jp){const jp=pose.jp;return {kind:'J',jp,id,TW0:fig.solveJoint(jp),ik:jik(jp),bd:!jp.ab,hands:jhands(jp),cam:jp.cam||0};}
    const p=std(pose),f=feat(p,id);
    return {kind:'L',p,id,f,TW0:fig.solveLegacy(p,f,plan3(p)),ik:contacts2D(p),bd:!ARMBAL.has(id),hands:f.hands,cam:0};}
  function show(st,hipX,opt={}){const pts=fig.showTW(st.TW0,{hipX,ik:st.ik,ignoreArms:st.bd,hands:st.hands,...opt});
    st.TW=fig.lastTW;st.ends={};for(const k of ['A_R','A_L','L_R','L_L'])st.ends[k]=fig.endPos(k);return pts;}
  const ease=k=>k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
  let camYaw=0;
  function frameCam(fr,yaw){view.place(fr.c,fr.s,yaw);}
  const aspect=()=>view.cam.aspect||1;
  const lerpFr=(a,b,e)=>({c:a.c.clone().lerp(b.c,e),s:a.s+(b.s-a.s)*e});
  let worldX=0;
  function snapMat(){const per=6/4/16;fig.matMesh.position.x=Math.round(worldX/per)*per;}
  const idle=()=>{if(view.controls)view.controls.update();view.render();requestAnimationFrame(idle);};requestAnimationFrame(idle);

  let cur=null,raf=0;
  const CONTACT=['ballR','ballL','heelR','heelL','ankleR','ankleL','kneeR','kneeL','wristR','wristL','pelvis','head','elbowR','elbowL'];
  const contactsOf=pts=>pts.filter(q=>q.v.y-q.r<0.04).map(q=>q.name);
  const ptByName=(pts,n)=>pts.find(q=>q.name===n);

  const BENDS=[['pelvis','waist','chest'],['waist','chest','head'],['hipL','kneeL','ankleL'],['hipR','kneeR','ankleR'],
    ['shoulderL','elbowL','wristL'],['shoulderR','elbowR','wristR'],['waist','hipL','kneeL'],['waist','hipR','kneeR']];
  const bendOf=(P,[a,b,c])=>P[b].clone().sub(P[a]).angleTo(P[c].clone().sub(P[b]))*180/Math.PI;
  /* поворот каждого сустава относительно родителя по кратчайшей дуге: сгибы идут ровно от позы к позе */
  const PARENT={lumbar:'pelvis',chest:'lumbar',neck:'chest',head:'neck',uarmL:'chest',farmL:'uarmL',handL:'farmL',uarmR:'chest',farmR:'uarmR',handR:'farmR',
    thighL:'pelvis',shinL:'thighL',footL:'shinL',thighR:'pelvis',shinR:'thighR',footR:'shinR'};
  const ORDER=['pelvis','lumbar','chest','neck','head','uarmL','farmL','handL','uarmR','farmR','handR','thighL','shinL','footL','thighR','shinR','footR'];
  function slerpLocal(TA,TB,e){const out={};
    for(const n of ORDER){const p=PARENT[n];
      if(!p){out[n]=TA[n].clone().slerp(TB[n],e);continue;}
      const la=TA[p].clone().invert().multiply(TA[n]),lb=TB[p].clone().invert().multiply(TB[n]);
      out[n]=out[p].clone().multiply(la.slerp(lb,e));}
    for(const n in TA)if(!out[n])out[n]=TA[n].clone().slerp(TB[n],e);
    return out;}
  function makeTransition(toPose,toId){
    const B=solveState(toPose,toId);
    const ptsB0=show(B,0);
    if(!cur)return {instant:true,B};
    const A=cur;
    const cA=contactsOf(A.pts),cB=contactsOf(ptsB0);
    const pin=CONTACT.find(n=>cA.includes(n)&&cB.includes(n));
    let hipXB=A.hipX;if(pin)hipXB=ptByName(A.pts,pin).v.x-ptByName(ptsB0,pin).v.x;
    const ptsB=show(B,hipXB);const centerB=fig.frameOf(ptsB,aspect());
    let mode=A.kind==='J'&&B.kind==='J'?'J':(A.kind==='L'&&B.kind==='L'&&front(A.p)===front(B.p))?'L':'Q';
    const armsTouch=[...cA,...cB].some(n=>/wrist|finger|elbow/.test(n));
    const planted=Object.keys(A.ik||{}).filter(key=>B.ik&&B.ik[key]&&A.ends[key].distanceTo(B.ends[key])<0.25);
    const atM=(k,mode)=>{
      const e=ease(k);const ign=(A.bd&&B.bd)||(!armsTouch&&k<1);
      const hands=e<.5?A.hands:B.hands;
      const solveAt=ee=>{
        if(mode==='L'){let p2=lerpPose(A.p,B.p,ee);p2.fl=0;p2.h=ee<.5?A.p.h:B.p.h;
          if(!front(p2)&&!armsTouch){const fx=armFloorFix(p2),w=Math.min(1,3*Math.sin(Math.PI*ee));for(const a of ['A1','A2'])p2[a]=p2[a].map((v,i)=>v+(fx[a][i]-v)*w);}
          const qa=plan3({...p2,h:A.p.h}),qb=plan3({...p2,h:B.p.h}),hp={};for(const key of ['A1','A2'])hp[key]={mix:true,a:qa[key],b:qb[key],t:ee};
          return fig.solveLegacy(p2,lerpFeat(A.f,B.f,ee),hp);}
        if(mode==='J')return fig.solveJoint(lerpJ(A.jp,B.jp,ee));
        if(mode==='H')return slerpLocal(A.TW,B.TW,ee);
        const o={};for(const n in A.TW)o[n]=A.TW[n].clone().slerp(B.TW[n],ee);return o;};
      /* движение по очереди, как у человека: таз и ноги начинают, корпус следует, руки и голова заканчивают */
      const win=(a,b)=>{const x=Math.min(1,Math.max(0,(k-a)/(b-a)));return x*x*x*(x*(6*x-15)+10);};
      const eL=win(0,.8),eT=win(.08,.9),eA=win(.18,1),eH=win(.22,1);
      let TW0;
      if(k<=0||k>=1||Math.abs(eL-eA)<1e-3)TW0=solveAt(e);
      else{const G={L:solveAt(eL),T:solveAt(eT),A:solveAt(eA),H:solveAt(eH)};
        const grp=n=>/^(pelvis|thigh|shin|foot)/.test(n)?'L':/^(lumbar|chest)/.test(n)?'T':/^(neck|head)/.test(n)?'H':'A';
        TW0={pelvis:G.L.pelvis.clone()};
        for(const n of ORDER){if(n==='pelvis')continue;const g=G[grp(n)],p=PARENT[n];TW0[n]=TW0[p].clone().multiply(g[p].clone().invert().multiply(g[n]));}
        for(const n in G.L)if(!TW0[n])TW0[n]=G.L[n].clone();}
      let pts=fig.showTW(TW0,{hipX:0,ignoreArms:ign,hands});
      let hx;if(pin){const q=ptByName(pts,pin);hx=ptByName(A.pts,pin).v.x-q.v.x;}else hx=A.hipX+(hipXB-A.hipX)*e;
      const ik={};for(const key of new Set([...Object.keys(A.ik||{}),...Object.keys(B.ik||{})])){
        if(planted.includes(key))ik[key]={p:A.ends[key].clone().lerp(B.ends[key],e),w:1};
        else if(A.ik&&A.ik[key])ik[key]={p:A.ends[key],w:Math.pow(Math.max(0,1-e/0.35),2)};else ik[key]={p:B.ends[key],w:Math.pow(Math.max(0,(e-0.65)/0.35),2)};}
      pts=fig.showTW(TW0,{hipX:hx,ignoreArms:ign,ik,hands});worldX=hx;snapMat();
      camYaw=A.cam+(B.cam-A.cam)*e;frameCam(lerpFr(A.center,centerB,e),camYaw);};
    let lastK=0;
    const at=k=>{lastK=k;atM(k,mode);};
    if(mode!=='Q'){
      const sc=m=>{const rows=[];for(let j=0;j<=8;j++){atM(j/8,m);const P={};for(const q of fig.points())P[q.name]=q.v;rows.push(BENDS.map(t=>bendOf(P,t)));}
        let worst=0;for(let t=0;t<BENDS.length;t++){const lim=Math.max(rows[0][t],rows[8][t]);for(let j=1;j<8;j++)worst=Math.max(worst,rows[j][t]-lim);}return worst;};
      const s0=sc(mode);if(s0>25){let best=s0,bm=mode;for(const m of ['H','Q']){const v=sc(m);if(v<best-10){best=v;bm=m;}}mode=bm;}}
    else{const s0=(()=>{const rows=[];for(let j=0;j<=8;j++){atM(j/8,'Q');const P={};for(const q of fig.points())P[q.name]=q.v;rows.push(BENDS.map(t=>bendOf(P,t)));}
        let w=0;for(let t=0;t<BENDS.length;t++){const lim=Math.max(rows[0][t],rows[8][t]);for(let j=1;j<8;j++)w=Math.max(w,rows[j][t]-lim);}return w;})();
      if(s0>25)mode='H';}
    const finish=()=>{const pts=show(B,hipXB);worldX=hipXB;snapMat();cur={...B,hipX:hipXB,pts,center:centerB};camYaw=B.cam;frameCam(centerB,camYaw);};
    /* новая поза пришла посреди перехода: следующий переход начинается с текущего положения, без рывка назад */
    const interrupt=()=>{atM(lastK,mode);const e=ease(lastK);
      cur={...B,kind:'Q',TW:Object.fromEntries(Object.entries(fig.lastTW).map(([n,q])=>[n,q.clone()])),pts:fig.points(),ik:{},ends:{},
        hands:e<.5?A.hands:B.hands,cam:camYaw,center:lerpFr(A.center,centerB,e),hipX:worldX};};
    return {at,finish,B,pin,interrupt};}
  let running=null;
  function go(toPose,toId,dur){
    cancelAnimationFrame(raf);
    if(running){try{running.interrupt();}catch(e){}running=null;}
    const tr=makeTransition(toPose,toId);
    if(tr.instant||!dur){if(tr.instant){worldX=0;const pts=show(tr.B,0);cur={...tr.B,hipX:0,pts,center:fig.frameOf(pts,aspect())};snapMat();camYaw=tr.B.cam;frameCam(cur.center,camYaw);}else tr.finish();return;}
    const t0=performance.now();
    running=tr;
    const step=now=>{const k=Math.min(1,(now-t0)/dur);if(k<1){tr.at(k);raf=requestAnimationFrame(step);}else{running=null;tr.finish();}};
    raf=requestAnimationFrame(step);}


  /* ---- мост для приложения ---- */
  let lastKey='';
  window.__refit=()=>{if(cur)frameCam(cur.center,camYaw);};
  /* отладка переходов: кадры точек фигуры при переходе A → B (для проверки изломов) */
  window.__trans=(aId,aM,bId,bM,n)=>{cur=null;go(getPose(aId,aM),aId,0);const tr=makeTransition(getPose(bId,bM),bId);const out=[];
    for(let j=0;j<=n;j++){tr.at(j/n);out.push(fig.points().map(q=>[q.name,+q.v.x.toFixed(4),+q.v.y.toFixed(4),+q.v.z.toFixed(4)]));}
    tr.finish();return out;};
  window.__frame=(aId,aM,bId,bM,k)=>{cur=null;go(getPose(aId,aM),aId,0);const tr=makeTransition(getPose(bId,bM),bId);tr.at(k);view.render();};
  window.Mudrya={
    ready:true,
    go(id,mirror,ms,hands){const key=id+'|'+(mirror?1:0)+'|'+(hands||'');if(key===lastKey&&ms>0)return;lastKey=key;
      try{let pose=getPose(id,mirror?1:0);
        /* положение кистей из приложения (замок, ладони вместе) — для поз библиотеки */
        if(hands&&pose.jp)pose={...pose,jp:{...pose.jp,hm:{L:hands,R:hands}}};
        go(pose,id,ms||0);}catch(e){console.warn('pose',id,e);}},
    hands(id){try{const st=solveState(getPose(id,0),id);return JSON.stringify(st.hands);}catch(e){return '';}},
    setTheme(t){fig.setTheme(t);document.body.style.background=t==='dark'?'#0F1115':'#f3f1ec';},
    resetView(){view.userMoved=false;if(cur)frameCam(cur.center,camYaw);},
    setYaw(d){view.yaw=d;view.userMoved=false;if(cur)frameCam(cur.center,camYaw);},
    has(id){return !!(P[id]||(window.JP&&JP[id]));},
    setFigure(k){fig.setFigure(k).then(()=>view.render());}
  };
  view.render();window.Mudrya.loaded=true;window.__skinAudit=()=>fig.skinAudit();window.__skinRadius=()=>fig.skinRadius();
  if(window.AndroidBridge)AndroidBridge.onReady();
}
boot();
