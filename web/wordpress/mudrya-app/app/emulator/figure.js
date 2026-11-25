(()=>{var qc="170",Zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yf=0,th=1,vf=2;var yu=1,Zc=2,Jn=3,kn=0,nn=1,Ln=2,yi=0,_s=1,eh=2,nh=3,ih=4,Mf=5,zi=100,Sf=101,bf=102,wf=103,Af=104,Tf=200,Ef=201,Rf=202,Cf=203,Ua=204,Oa=205,Lf=206,Pf=207,If=208,Df=209,Nf=210,Uf=211,Of=212,Ff=213,Bf=214,Fa=0,Ba=1,za=2,Ms=3,ka=4,Va=5,Ha=6,Ga=7,vu=0,zf=1,kf=2,vi=0,Vf=1,Hf=2,Gf=3,Kc=4,Wf=5,Xf=6,Yf=7,sh="attached",qf="detached",Mu=300,Ss=301,bs=302,Wa=303,Xa=304,ko=306,Hi=1e3,$n=1001,ir=1002,Je=1003,Jc=1004;var ms=1005;var en=1006,Qs=1007;var zn=1008;var ti=1009,Su=1010,bu=1011,sr=1012,$c=1013,Gi=1014,In=1015,mr=1016,jc=1017,Qc=1018,ws=1020,wu=35902,Au=1021,Tu=1022,_n=1023,Eu=1024,Ru=1025,xs=1026,As=1027,tl=1028,el=1029,Cu=1030,nl=1031;var il=1033,so=33776,ro=33777,oo=33778,ao=33779,Ya=35840,qa=35841,Za=35842,Ka=35843,Ja=36196,$a=37492,ja=37496,Qa=37808,tc=37809,ec=37810,nc=37811,ic=37812,sc=37813,rc=37814,oc=37815,ac=37816,cc=37817,lc=37818,hc=37819,uc=37820,fc=37821,co=36492,dc=36494,pc=36495,Lu=36283,mc=36284,gc=36285,_c=36286;var Ts=2300,Es=2301,ia=2302,rh=2400,oh=2401,ah=2402,Zf=2500;var Pu=0,Vo=1,gr=2,Kf=3200,Jf=3201;var Iu=0,$f=1,_i="",Le="srgb",$e="srgb-linear",Ho="linear",be="srgb";var ts=7680;var ch=519,jf=512,Qf=513,td=514,Du=515,ed=516,nd=517,id=518,sd=519,xc=35044;var lh="300 es",jn=2e3,lo=2001,ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=1234567,tr=Math.PI/180,Rs=180/Math.PI;function Dn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function qe(i,t,e){return Math.max(t,Math.min(e,i))}function sl(i,t){return(i%t+t)%t}function rd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function od(i,t,e){return i!==t?(e-i)/(t-i):0}function er(i,t,e){return(1-e)*i+e*t}function ad(i,t,e,n){return er(i,t,1-Math.exp(-e*n))}function cd(i,t=1){return t-Math.abs(sl(i,t*2)-t)}function ld(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ud(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fd(i,t){return i+Math.random()*(t-i)}function dd(i){return i*(.5-Math.random())}function pd(i){i!==void 0&&(hh=i);let t=hh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function md(i){return i*tr}function gd(i){return i*Rs}function _d(i){return(i&i-1)===0&&i!==0}function xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Go={DEG2RAD:tr,RAD2DEG:Rs,generateUUID:Dn,clamp:qe,euclideanModulo:sl,mapLinear:rd,inverseLerp:od,lerp:er,damp:ad,pingpong:cd,smoothstep:ld,smootherstep:hd,randInt:ud,randFloat:fd,randFloatSpread:dd,seededRandom:pd,degToRad:md,radToDeg:gd,isPowerOfTwo:_d,ceilPowerOfTwo:xd,floorPowerOfTwo:yd,setQuaternionFromProperEuler:vd,normalize:Me,denormalize:Pn},jt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oe=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],y=s[0],m=s[3],d=s[6],R=s[1],C=s[4],S=s[7],Z=s[2],I=s[5],U=s[8];return r[0]=o*y+a*R+c*Z,r[3]=o*m+a*C+c*I,r[6]=o*d+a*S+c*U,r[1]=l*y+h*R+u*Z,r[4]=l*m+h*C+u*I,r[7]=l*d+h*S+u*U,r[2]=f*y+p*R+_*Z,r[5]=f*m+p*C+_*I,r[8]=f*d+p*S+_*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,_=e*u+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sa.makeScale(t,e)),this}rotate(t){return this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sa=new oe;function Nu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Md(){let i=rr("canvas");return i.style.display="block",i}var uh={};function $s(i){i in uh||(uh[i]=!0,console.warn(i))}function Sd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var pe={enabled:!0,workingColorSpace:$e,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===be&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===be&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_i?Ho:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fh=[.64,.33,.3,.6,.15,.06],dh=[.2126,.7152,.0722],ph=[.3127,.329],mh=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pe.define({[$e]:{primaries:fh,whitePoint:ph,transfer:Ho,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:dh,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:fh,whitePoint:ph,transfer:be,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:dh,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}});var es,yc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=rr("canvas")),es.width=t.width,es.height=t.height;let n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=rr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ad=0,ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ra(s[o].image)):r.push(ra(s[o]))}else r=ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Td=0,We=class i extends ei{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=en,o=zn,a=_n,c=ti,l=i.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Dn(),this.name="",this.source=new ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hi:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hi:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Mu;We.DEFAULT_ANISOTROPY=1;var _e=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],_=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(l+1)/2,S=(p+1)/2,Z=(d+1)/2,I=(h+f)/4,U=(u+y)/4,X=(_+m)/4;return C>S&&C>Z?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=I/n,r=U/n):S>Z?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=I/s,r=X/s):Z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(Z),n=U/r,s=X/r),this.set(n,s,r,e),this}let R=Math.sqrt((m-_)*(m-_)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(m-_)/R,this.y=(u-y)/R,this.z=(f-h)/R,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vc=class extends ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ho(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends vc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},uo=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mc=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ye=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],_=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=y;return}if(u!==y||c!==f||l!==p||h!==_){let m=1-a,d=c*f+l*p+h*_+u*y,R=d>=0?1:-1,C=1-d*d;if(C>Number.EPSILON){let Z=Math.sqrt(C),I=Math.atan2(Z,d*R);m=Math.sin(m*I)/Z,a=Math.sin(a*I)/Z}let S=a*R;if(c=c*m+f*S,l=l*m+p*S,h=h*m+_*S,u=u*m+y*S,m===1-a){let Z=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=Z,l*=Z,h*=Z,u*=Z}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*p-l*f,t[e+1]=c*_+h*f+l*u-a*p,t[e+2]=l*_+h*p+a*f-c*u,t[e+3]=h*_-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"YZX":this._x=f*h*u+l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u-f*p*_;break;case"XZY":this._x=f*h*u-l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oa=new N,_h=new ye,sn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Ir.subVectors(this.max,Gs),ns.subVectors(t.a,Gs),is.subVectors(t.b,Gs),ss.subVectors(t.c,Gs),ui.subVectors(is,ns),fi.subVectors(ss,is),Ii.subVectors(ns,ss);let e=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Ii.z,Ii.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Ii.z,0,-Ii.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Ii.y,Ii.x,0];return!aa(e,ns,is,ss,Ir)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,ns,is,ss,Ir))?!1:(Dr.crossVectors(ui,fi),e=[Dr.x,Dr.y,Dr.z],aa(e,ns,is,ss,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new N,new N,new N,new N,new N,new N,new N,new N],Tn=new N,Pr=new sn,ns=new N,is=new N,ss=new N,ui=new N,fi=new N,Ii=new N,Gs=new N,Ir=new N,Dr=new N,Di=new N;function aa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Di.fromArray(i,r);let a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=t.dot(Di),l=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ed=new sn,Ws=new N,ca=new N,fn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ed.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(ca)),this.expandByPoint(Ws.copy(t.center).sub(ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new N,la=new N,Nr=new N,di=new N,ha=new N,Ur=new N,ua=new N,Mi=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){la.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),di.copy(this.origin).sub(la);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Nr),a=di.dot(this.direction),c=-di.dot(Nr),l=di.lengthSq(),h=Math.abs(1-o*o),u,f,p,_;if(h>0)if(u=o*c-a,f=o*a-c,_=r*h,u>=0)if(f>=-_)if(f<=_){let y=1/h;u*=y,f*=y,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(la).addScaledVector(Nr,f),p}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){ha.subVectors(e,t),Ur.subVectors(n,t),ua.crossVectors(ha,Ur);let o=this.direction.dot(ua),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,t);let c=a*this.direction.dot(Ur.crossVectors(di,Ur));if(c<0)return null;let l=a*this.direction.dot(ha.cross(di));if(l<0||c+l>o)return null;let h=-a*di.dot(ua);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,p,_,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,p,_,y,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,p,_,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,_=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+_*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=_+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,p=c*u,_=l*h,y=l*u;e[0]=f+y*a,e[4]=_*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,p=c*u,_=l*h,y=l*u;e[0]=f-y*a,e[4]=-o*u,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,p=o*u,_=a*h,y=a*u;e[0]=c*h,e[4]=_*l-p,e[8]=f*l+y,e[1]=c*u,e[5]=y*l+f,e[9]=p*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,_=a*c,y=a*l;e[0]=c*h,e[4]=y-f*u,e[8]=_*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+_,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*c,p=o*l,_=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+y,e[5]=o*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rd,t,Cd)}lookAt(t,e,n){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),pi.crossVectors(n,hn),pi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),pi.crossVectors(n,hn)),pi.normalize(),Or.crossVectors(hn,pi),s[0]=pi.x,s[4]=Or.x,s[8]=hn.x,s[1]=pi.y,s[5]=Or.y,s[9]=hn.y,s[2]=pi.z,s[6]=Or.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],y=n[6],m=n[10],d=n[14],R=n[3],C=n[7],S=n[11],Z=n[15],I=s[0],U=s[4],X=s[8],x=s[12],g=s[1],b=s[5],E=s[9],P=s[13],L=s[2],H=s[6],B=s[10],J=s[14],w=s[3],G=s[7],K=s[11],q=s[15];return r[0]=o*I+a*g+c*L+l*w,r[4]=o*U+a*b+c*H+l*G,r[8]=o*X+a*E+c*B+l*K,r[12]=o*x+a*P+c*J+l*q,r[1]=h*I+u*g+f*L+p*w,r[5]=h*U+u*b+f*H+p*G,r[9]=h*X+u*E+f*B+p*K,r[13]=h*x+u*P+f*J+p*q,r[2]=_*I+y*g+m*L+d*w,r[6]=_*U+y*b+m*H+d*G,r[10]=_*X+y*E+m*B+d*K,r[14]=_*x+y*P+m*J+d*q,r[3]=R*I+C*g+S*L+Z*w,r[7]=R*U+C*b+S*H+Z*G,r[11]=R*X+C*E+S*B+Z*K,r[15]=R*x+C*P+S*J+Z*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],_=t[3],y=t[7],m=t[11],d=t[15];return _*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+y*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],_=t[12],y=t[13],m=t[14],d=t[15],R=u*m*l-y*f*l+y*c*p-a*m*p-u*c*d+a*f*d,C=_*f*l-h*m*l-_*c*p+o*m*p+h*c*d-o*f*d,S=h*y*l-_*u*l+_*a*p-o*y*p-h*a*d+o*u*d,Z=_*u*c-h*y*c-_*a*f+o*y*f+h*a*m-o*u*m,I=e*R+n*C+s*S+r*Z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return t[0]=R*U,t[1]=(y*f*r-u*m*r-y*s*p+n*m*p+u*s*d-n*f*d)*U,t[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*d+n*c*d)*U,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*U,t[4]=C*U,t[5]=(h*m*r-_*f*r+_*s*p-e*m*p-h*s*d+e*f*d)*U,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*d-e*c*d)*U,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*p+e*c*p)*U,t[8]=S*U,t[9]=(_*u*r-h*y*r-_*n*p+e*y*p+h*n*d-e*u*d)*U,t[10]=(o*y*r-_*a*r+_*n*l-e*y*l-o*n*d+e*a*d)*U,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*U,t[12]=Z*U,t[13]=(h*y*s-_*u*s+_*n*f-e*y*f-h*n*m+e*u*m)*U,t[14]=(_*a*s-o*y*s-_*n*c+e*y*c+o*n*m-e*a*m)*U,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,_=r*u,y=o*h,m=o*u,d=a*u,R=c*l,C=c*h,S=c*u,Z=n.x,I=n.y,U=n.z;return s[0]=(1-(y+d))*Z,s[1]=(p+S)*Z,s[2]=(_-C)*Z,s[3]=0,s[4]=(p-S)*I,s[5]=(1-(f+d))*I,s[6]=(m+R)*I,s[7]=0,s[8]=(_+C)*U,s[9]=(m-R)*U,s[10]=(1-(f+y))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);let l=1/r,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=jn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,_;if(a===jn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===lo)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=jn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,p=(n+s)*h,_,y;if(a===jn)_=(o+r)*u,y=-2*u;else if(a===lo)_=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},rs=new N,En=new ie,Rd=new N(0,0,0),Cd=new N(1,1,1),pi=new N,Or=new N,hn=new N,xh=new ie,yh=new ye,rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yh.setFromEuler(this),this.setFromQuaternion(yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var fo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ld=0,vh=new N,os=new ye,Yn=new ie,Fr=new N,Xs=new N,Pd=new N,Id=new ye,Mh=new N(1,0,0),Sh=new N(0,1,0),bh=new N(0,0,1),wh={type:"added"},Dd={type:"removed"},as={type:"childadded",child:null},fa={type:"childremoved",child:null},Ce=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new rn,n=new ye,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new oe}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(Mh,t)}rotateY(t){return this.rotateOnAxis(Sh,t)}rotateZ(t){return this.rotateOnAxis(bh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mh,t)}translateY(t){return this.translateOnAxis(Sh,t)}translateZ(t){return this.translateOnAxis(bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Xs,Fr,this.up):Yn.lookAt(Fr,Xs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Yn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wh),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dd),fa.child=t,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wh),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new N(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new N,qn=new N,da=new N,Zn=new N,cs=new N,ls=new N,Ah=new N,pa=new N,ma=new N,ga=new N,_a=new _e,xa=new _e,ya=new _e,ki=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),qn.subVectors(n,e),da.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(qn),c=Rn.dot(da),l=qn.dot(qn),h=qn.dot(da),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return _a.setScalar(0),xa.setScalar(0),ya.setScalar(0),_a.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,n),ya.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_a,r.x),o.addScaledVector(xa,r.y),o.addScaledVector(ya,r.z),o}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),qn.subVectors(t,e),Rn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Rn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;cs.subVectors(s,n),ls.subVectors(r,n),pa.subVectors(t,n);let c=cs.dot(pa),l=ls.dot(pa);if(c<=0&&l<=0)return e.copy(n);ma.subVectors(t,s);let h=cs.dot(ma),u=ls.dot(ma);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(cs,o);ga.subVectors(t,r);let p=cs.dot(ga),_=ls.dot(ga);if(_>=0&&p<=_)return e.copy(r);let y=p*l-c*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(ls,a);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Ah.subVectors(r,s),a=(u-h)/(u-h+(p-_)),e.copy(s).addScaledVector(Ah,a);let d=1/(m+y+f);return o=y*d,a=f*d,e.copy(n).addScaledVector(cs,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function va(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=sl(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=va(o,r,t+1/3),this.g=va(o,r,t),this.b=va(o,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let n=Uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return pe.fromWorkingColorSpace(Ke.copy(this),t),Math.round(qe(Ke.r*255,0,255))*65536+Math.round(qe(Ke.g*255,0,255))*256+Math.round(qe(Ke.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Le){pe.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(Br);let n=er(mi.h,Br.h,e),s=er(mi.s,Br.s,e),r=er(mi.l,Br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Xt;Xt.NAMES=Uu;var Nd=0,dn=class extends ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Dn(),this.name="",this.blending=_s,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Oa,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ch&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Vn=class extends dn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new N,zr=new jt,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xc&&(t.usage=this.usage),t}};var po=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mo=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var yn=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ud=0,gn=new ie,Ma=new Ce,hs=new N,un=new sn,Ys=new sn,Ge=new N,vn=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nu(t)?mo:po)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yn(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(un.min,Ys.min),un.expandByPoint(Ge),Ge.addVectors(un.max,Ys.max),un.expandByPoint(Ge)):(un.expandByPoint(Ys.min),un.expandByPoint(Ys.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ge.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(t,l),Ge.add(hs)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let X=0;X<n.count;X++)a[X]=new N,c[X]=new N;let l=new N,h=new N,u=new N,f=new jt,p=new jt,_=new jt,y=new N,m=new N;function d(X,x,g){l.fromBufferAttribute(n,X),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,g),f.fromBufferAttribute(r,X),p.fromBufferAttribute(r,x),_.fromBufferAttribute(r,g),h.sub(l),u.sub(l),p.sub(f),_.sub(f);let b=1/(p.x*_.y-_.x*p.y);isFinite(b)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(b),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(b),a[X].add(y),a[x].add(y),a[g].add(y),c[X].add(m),c[x].add(m),c[g].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let X=0,x=R.length;X<x;++X){let g=R[X],b=g.start,E=g.count;for(let P=b,L=b+E;P<L;P+=3)d(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let C=new N,S=new N,Z=new N,I=new N;function U(X){Z.fromBufferAttribute(s,X),I.copy(Z);let x=a[X];C.copy(x),C.sub(Z.multiplyScalar(Z.dot(x))).normalize(),S.crossVectors(I,x);let b=S.dot(c[X])<0?-1:1;o.setXYZW(X,C.x,C.y,C.z,b)}for(let X=0,x=R.length;X<x;++X){let g=R[X],b=g.start,E=g.count;for(let P=b,L=b+E;P<L;P+=3)U(t.getX(P+0)),U(t.getX(P+1)),U(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,_=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let d=0;d<h;d++)f[_++]=l[p++]}return new Ie(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Th=new ie,Ni=new Mi,kr=new fn,Eh=new N,Vr=new N,Hr=new N,Gr=new N,Sa=new N,Wr=new N,Rh=new N,Xr=new N,Pe=class extends Ce{constructor(t=new vn,e=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Sa.fromBufferAttribute(u,t),o?Wr.addScaledVector(Sa,h):Wr.addScaledVector(Sa.sub(e),h))}e.add(Wr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(kr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(kr,Eh)===null||Ni.origin.distanceToSquared(Eh)>(t.far-t.near)**2))&&(Th.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(Th),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){let m=f[_],d=o[m.materialIndex],R=Math.max(m.start,p.start),C=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,Z=C;S<Z;S+=3){let I=a.getX(S),U=a.getX(S+1),X=a.getX(S+2);s=Yr(this,d,t,n,l,h,u,I,U,X),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){let R=a.getX(m),C=a.getX(m+1),S=a.getX(m+2);s=Yr(this,o,t,n,l,h,u,R,C,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){let m=f[_],d=o[m.materialIndex],R=Math.max(m.start,p.start),C=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,Z=C;S<Z;S+=3){let I=S,U=S+1,X=S+2;s=Yr(this,d,t,n,l,h,u,I,U,X),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){let R=m,C=m+1,S=m+2;s=Yr(this,o,t,n,l,h,u,R,C,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Od(i,t,e,n,s,r,o,a){let c;if(t.side===nn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===kn,a),c===null)return null;Xr.copy(a),Xr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Xr);return l<e.near||l>e.far?null:{distance:l,point:Xr.clone(),object:i}}function Yr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Vr),i.getVertexPosition(c,Hr),i.getVertexPosition(l,Gr);let h=Od(i,t,e,n,Vr,Hr,Gr,Rh);if(h){let u=new N;ki.getBarycoord(Rh,Vr,Hr,Gr,u),s&&(h.uv=ki.getInterpolatedAttribute(s,a,c,l,u,new jt)),r&&(h.uv1=ki.getInterpolatedAttribute(r,a,c,l,u,new jt)),o&&(h.normal=ki.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new N,materialIndex:0};ki.getNormal(Vr,Hr,Gr,f.normal),h.face=f,h.barycoord=u}return h}var Wi=class i extends vn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new yn(l,3)),this.setAttribute("normal",new yn(h,3)),this.setAttribute("uv",new yn(u,2));function _(y,m,d,R,C,S,Z,I,U,X,x){let g=S/U,b=Z/X,E=S/2,P=Z/2,L=I/2,H=U+1,B=X+1,J=0,w=0,G=new N;for(let K=0;K<B;K++){let q=K*b-P;for(let z=0;z<H;z++){let tt=z*g-E;G[y]=tt*R,G[m]=q*C,G[d]=L,l.push(G.x,G.y,G.z),G[y]=0,G[m]=0,G[d]=I>0?1:-1,h.push(G.x,G.y,G.z),u.push(z/U),u.push(1-K/X),J+=1}}for(let K=0;K<X;K++)for(let q=0;q<U;q++){let z=f+q+H*K,tt=f+q+H*(K+1),V=f+(q+1)+H*(K+1),j=f+(q+1)+H*K;c.push(z,tt,j),c.push(tt,V,j),w+=6}a.addGroup(p,w,x),p+=w,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=Cs(i[e]);for(let s in n)t[s]=n[s]}return t}function Fd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ou(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Bd={clone:Cs,merge:Qe},zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends dn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=Fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},go=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new N,Ch=new jt,Lh=new jt,Be=class extends go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Lh),e.subVectors(Lh,Ch)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(tr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},us=-90,fs=1,Sc=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(us,fs,t,e);s.layers=this.layers,this.add(s);let r=new Be(us,fs,t,e);r.layers=this.layers,this.add(r);let o=new Be(us,fs,t,e);o.layers=this.layers,this.add(o);let a=new Be(us,fs,t,e);a.layers=this.layers,this.add(a);let c=new Be(us,fs,t,e);c.layers=this.layers,this.add(c);let l=new Be(us,fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},_o=class extends We{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bc=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _o(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Wi(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:yi});r.uniforms.tEquirect.value=e;let o=new Pe(s,r),a=e.minFilter;return e.minFilter===zn&&(e.minFilter=en),new Sc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ba=new N,Vd=new N,Hd=new oe,Cn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ba.subVectors(n,e).cross(Vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hd.getNormalMatrix(t),s=this.coplanarPoint(ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new fn,qr=new N,or=class{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,o=new Cn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],_=s[9],y=s[10],m=s[11],d=s[12],R=s[13],C=s[14],S=s[15];if(n[0].setComponents(c-r,f-l,m-p,S-d).normalize(),n[1].setComponents(c+r,f+l,m+p,S+d).normalize(),n[2].setComponents(c+o,f+h,m+_,S+R).normalize(),n[3].setComponents(c-o,f-h,m-_,S-R).normalize(),n[4].setComponents(c-a,f-u,m-y,S-C).normalize(),e===jn)n[5].setComponents(c+a,f+u,m+y,S+C).normalize();else if(e===lo)n[5].setComponents(a,u,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gd(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<u.length;p++){let _=u[f],y=u[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,u[f]=y)}u.length=f+1;for(let p=0,_=u.length;p<_;p++){let y=u[p];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Xi=class i extends vn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,p=[],_=[],y=[],m=[];for(let d=0;d<h;d++){let R=d*f-o;for(let C=0;C<l;C++){let S=C*u-r;_.push(S,-R,0),y.push(0,0,1),m.push(C/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let R=0;R<a;R++){let C=R+l*d,S=R+l*(d+1),Z=R+1+l*(d+1),I=R+1+l*d;p.push(C,S,I),p.push(S,Z,I)}this.setIndex(p),this.setAttribute("position",new yn(_,3)),this.setAttribute("normal",new yn(y,3)),this.setAttribute("uv",new yn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$m=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ug=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:Yd,alphamap_pars_fragment:qd,alphatest_fragment:Zd,alphatest_pars_fragment:Kd,aomap_fragment:Jd,aomap_pars_fragment:$d,batching_pars_vertex:jd,batching_vertex:Qd,begin_vertex:tp,beginnormal_vertex:ep,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:ap,clipping_planes_vertex:cp,color_fragment:lp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:fp,common:dp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:_p,emissivemap_fragment:xp,emissivemap_pars_fragment:yp,colorspace_fragment:vp,colorspace_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:bp,envmap_pars_fragment:wp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Op,envmap_vertex:Tp,fog_vertex:Ep,fog_pars_vertex:Rp,fog_fragment:Cp,fog_pars_fragment:Lp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Np,lights_pars_begin:Up,lights_toon_fragment:Fp,lights_toon_pars_fragment:Bp,lights_phong_fragment:zp,lights_phong_pars_fragment:kp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Gp,lights_fragment_maps:Wp,lights_fragment_end:Xp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Kp,map_fragment:Jp,map_pars_fragment:$p,map_particle_fragment:jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:tm,metalnessmap_pars_fragment:em,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:sm,morphtarget_pars_vertex:rm,morphtarget_vertex:om,normal_fragment_begin:am,normal_fragment_maps:cm,normal_pars_fragment:lm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:_m,packing:xm,premultiplied_alpha_fragment:ym,project_vertex:vm,dithering_fragment:Mm,dithering_pars_fragment:Sm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Tm,shadowmap_vertex:Em,shadowmask_pars_fragment:Rm,skinbase_vertex:Cm,skinning_pars_vertex:Lm,skinning_vertex:Pm,skinnormal_vertex:Im,specularmap_fragment:Dm,specularmap_pars_fragment:Nm,tonemapping_fragment:Um,tonemapping_pars_fragment:Om,transmission_fragment:Fm,transmission_pars_fragment:Bm,uv_pars_fragment:zm,uv_pars_vertex:km,uv_vertex:Vm,worldpos_vertex:Hm,background_vert:Gm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:Ym,cube_vert:qm,cube_frag:Zm,depth_vert:Km,depth_frag:Jm,distanceRGBA_vert:$m,distanceRGBA_frag:jm,equirect_vert:Qm,equirect_frag:tg,linedashed_vert:eg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:og,meshmatcap_vert:ag,meshmatcap_frag:cg,meshnormal_vert:lg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:fg,meshphysical_vert:dg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:_g,points_frag:xg,shadow_vert:yg,shadow_frag:vg,sprite_vert:Mg,sprite_frag:Sg},Et={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Bn={basic:{uniforms:Qe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Qe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Qe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Qe([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Qe([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Qe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Qe([Et.points,Et.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Qe([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Qe([Et.common,Et.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Qe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Qe([Et.sprite,Et.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Qe([Et.common,Et.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Qe([Et.lights,Et.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Bn.physical={uniforms:Qe([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var Zr={r:0,b:0,g:0},Oi=new rn,bg=new ie;function wg(i,t,e,n,s,r,o){let a=new Xt(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function _(R){let C=R.isScene===!0?R.background:null;return C&&C.isTexture&&(C=(R.backgroundBlurriness>0?e:t).get(C)),C}function y(R){let C=!1,S=_(R);S===null?d(a,c):S&&S.isColor&&(d(S,1),C=!0);let Z=i.xr.getEnvironmentBlendMode();Z==="additive"?n.buffers.color.setClear(0,0,0,1,o):Z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(R,C){let S=_(C);S&&(S.isCubeTexture||S.mapping===ko)?(h===void 0&&(h=new Pe(new Wi(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Cs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(Z,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Oi.copy(C.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(Oi)),h.material.toneMapped=pe.getTransfer(S.colorSpace)!==be,(u!==S||f!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,p=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pe(new Xi(2,2),new Hn({name:"BackgroundMaterial",uniforms:Cs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=pe.getTransfer(S.colorSpace)!==be,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,p=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function d(R,C){R.getRGB(Zr,Ou(i)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,C,o)}return{getClearColor:function(){return a},setClearColor:function(R,C=1){a.set(R),c=C,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,d(a,c)},render:y,addToRenderList:m}}function Ag(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(g,b,E,P,L){let H=!1,B=u(P,E,b);r!==B&&(r=B,l(r.object)),H=p(g,P,E,L),H&&_(g,P,E,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,S(g,b,E,P),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function u(g,b,E){let P=E.wireframe===!0,L=n[g.id];L===void 0&&(L={},n[g.id]=L);let H=L[b.id];H===void 0&&(H={},L[b.id]=H);let B=H[P];return B===void 0&&(B=f(c()),H[P]=B),B}function f(g){let b=[],E=[],P=[];for(let L=0;L<e;L++)b[L]=0,E[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:E,attributeDivisors:P,object:g,attributes:{},index:null}}function p(g,b,E,P){let L=r.attributes,H=b.attributes,B=0,J=E.getAttributes();for(let w in J)if(J[w].location>=0){let K=L[w],q=H[w];if(q===void 0&&(w==="instanceMatrix"&&g.instanceMatrix&&(q=g.instanceMatrix),w==="instanceColor"&&g.instanceColor&&(q=g.instanceColor)),K===void 0||K.attribute!==q||q&&K.data!==q.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function _(g,b,E,P){let L={},H=b.attributes,B=0,J=E.getAttributes();for(let w in J)if(J[w].location>=0){let K=H[w];K===void 0&&(w==="instanceMatrix"&&g.instanceMatrix&&(K=g.instanceMatrix),w==="instanceColor"&&g.instanceColor&&(K=g.instanceColor));let q={};q.attribute=K,K&&K.data&&(q.data=K.data),L[w]=q,B++}r.attributes=L,r.attributesNum=B,r.index=P}function y(){let g=r.newAttributes;for(let b=0,E=g.length;b<E;b++)g[b]=0}function m(g){d(g,0)}function d(g,b){let E=r.newAttributes,P=r.enabledAttributes,L=r.attributeDivisors;E[g]=1,P[g]===0&&(i.enableVertexAttribArray(g),P[g]=1),L[g]!==b&&(i.vertexAttribDivisor(g,b),L[g]=b)}function R(){let g=r.newAttributes,b=r.enabledAttributes;for(let E=0,P=b.length;E<P;E++)b[E]!==g[E]&&(i.disableVertexAttribArray(E),b[E]=0)}function C(g,b,E,P,L,H,B){B===!0?i.vertexAttribIPointer(g,b,E,L,H):i.vertexAttribPointer(g,b,E,P,L,H)}function S(g,b,E,P){y();let L=P.attributes,H=E.getAttributes(),B=b.defaultAttributeValues;for(let J in H){let w=H[J];if(w.location>=0){let G=L[J];if(G===void 0&&(J==="instanceMatrix"&&g.instanceMatrix&&(G=g.instanceMatrix),J==="instanceColor"&&g.instanceColor&&(G=g.instanceColor)),G!==void 0){let K=G.normalized,q=G.itemSize,z=t.get(G);if(z===void 0)continue;let tt=z.buffer,V=z.type,j=z.bytesPerElement,dt=V===i.INT||V===i.UNSIGNED_INT||G.gpuType===$c;if(G.isInterleavedBufferAttribute){let ct=G.data,xt=ct.stride,ft=G.offset;if(ct.isInstancedInterleavedBuffer){for(let Ot=0;Ot<w.locationSize;Ot++)d(w.location+Ot,ct.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ot=0;Ot<w.locationSize;Ot++)m(w.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Ot=0;Ot<w.locationSize;Ot++)C(w.location+Ot,q/w.locationSize,V,K,xt*j,(ft+q/w.locationSize*Ot)*j,dt)}else{if(G.isInstancedBufferAttribute){for(let ct=0;ct<w.locationSize;ct++)d(w.location+ct,G.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ct=0;ct<w.locationSize;ct++)m(w.location+ct);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ct=0;ct<w.locationSize;ct++)C(w.location+ct,q/w.locationSize,V,K,q*j,q/w.locationSize*ct*j,dt)}}else if(B!==void 0){let K=B[J];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(w.location,K);break;case 3:i.vertexAttrib3fv(w.location,K);break;case 4:i.vertexAttrib4fv(w.location,K);break;default:i.vertexAttrib1fv(w.location,K)}}}}R()}function Z(){X();for(let g in n){let b=n[g];for(let E in b){let P=b[E];for(let L in P)h(P[L].object),delete P[L];delete b[E]}delete n[g]}}function I(g){if(n[g.id]===void 0)return;let b=n[g.id];for(let E in b){let P=b[E];for(let L in P)h(P[L].object),delete P[L];delete b[E]}delete n[g.id]}function U(g){for(let b in n){let E=n[b];if(E[g.id]===void 0)continue;let P=E[g.id];for(let L in P)h(P[L].object),delete P[L];delete E[g.id]}}function X(){x(),o=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:X,resetDefaultState:x,dispose:Z,releaseStatesOfGeometry:I,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:m,disableUnusedAttributes:R}}function Tg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let y=0;y<u;y++)_+=h[y]*f[y];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==_n&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let X=U===mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==ti&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==In&&!X)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),Z=_>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:S,vertexTextures:Z,maxSamples:I}}function Rg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Cn,a=new oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let _=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{let R=r?0:n,C=R*4,S=d.clippingState||null;c.value=S,S=h(_,f,C,p);for(let Z=0;Z!==C;++Z)S[Z]=e[Z];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,_){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,_!==!0||m===null){let d=p+y*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<d)&&(m=new Float32Array(d));for(let C=0,S=p;C!==y;++C,S+=4)o.copy(u[C]).applyMatrix4(R,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Cg(i){let t=new WeakMap;function e(o,a){return a===Wa?o.mapping=Ss:a===Xa&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wa||a===Xa)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new bc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ls=class extends go{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gs=4,Ph=[.125,.215,.35,.446,.526,.582],Vi=20,wa=new Ls,Ih=new Xt,Aa=null,Ta=0,Ea=0,Ra=!1,Bi=(1+Math.sqrt(5))/2,ds=1/Bi,Dh=[new N(-Bi,ds,0),new N(Bi,ds,0),new N(-ds,0,Bi),new N(ds,0,Bi),new N(0,Bi,-ds),new N(0,Bi,ds),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],xo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Aa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Aa,Ta,Ea),this._renderer.xr.enabled=Ra,t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Aa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:mr,format:_n,colorSpace:$e,depthBuffer:!1},s=Nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(r)),this._blurMaterial=Pg(r,t,e)}return s}_compileMaterial(t){let e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,wa)}_sceneToCubeUV(t,e,n,s){let a=new Be(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ih),h.toneMapping=vi,h.autoClear=!1;let p=new Vn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new Pe(new Wi,p),y=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(Ih),y=!0);for(let d=0;d<6;d++){let R=d%3;R===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):R===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let C=this._cubeSize;Kr(s,R*C,d>2?C:0,C,C),h.setRenderTarget(s),y&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ss||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Kr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,wa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dh[(s-r-1)%Dh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Pe(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),y=r/_,m=isFinite(r)?1+Math.floor(h*y):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);let d=[],R=0;for(let U=0;U<Vi;++U){let X=U/y,x=Math.exp(-X*X/2);d.push(x),U===0?R+=x:U<m&&(R+=2*x)}for(let U=0;U<d.length;U++)d[U]=d[U]/R;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:C}=this;f.dTheta.value=_,f.mipInt.value=C-n;let S=this._sizeLods[s],Z=3*S*(s>C-gs?s-C+gs:0),I=4*(this._cubeSize-S);Kr(e,Z,I,3*S,2*S),c.setRenderTarget(e),c.render(u,wa)}};function Lg(i){let t=[],e=[],n=[],s=i,r=i-gs+1+Ph.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-gs?c=Ph[o-i+gs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,y=3,m=2,d=1,R=new Float32Array(y*_*p),C=new Float32Array(m*_*p),S=new Float32Array(d*_*p);for(let I=0;I<p;I++){let U=I%3*2/3-1,X=I>2?0:-1,x=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];R.set(x,y*_*I),C.set(f,m*_*I);let g=[I,I,I,I,I,I];S.set(g,d*_*I)}let Z=new vn;Z.setAttribute("position",new Ie(R,y)),Z.setAttribute("uv",new Ie(C,m)),Z.setAttribute("faceIndex",new Ie(S,d)),t.push(Z),s>gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nh(i,t,e){let n=new ni(i,t,e);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Pg(i,t,e){let n=new Float32Array(Vi),s=new N(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Uh(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Oh(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ig(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Wa||c===Xa,h=c===Ss||c===bs;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new xo(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new xo(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ng(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let y=f.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)t.remove(y[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let _ in f)t.update(f[_],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let _ in p){let y=p[_];for(let m=0,d=y.length;m<d;m++)t.update(y[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,_=u.attributes.position,y=0;if(p!==null){let R=p.array;y=p.version;for(let C=0,S=R.length;C<S;C+=3){let Z=R[C+0],I=R[C+1],U=R[C+2];f.push(Z,I,I,U,U,Z)}}else if(_!==void 0){let R=_.array;y=_.version;for(let C=0,S=R.length/3-1;C<S;C+=3){let Z=C+0,I=C+1,U=C+2;f.push(Z,I,I,U,U,Z)}}else return;let m=new(Nu(f)?mo:po)(f,1);m.version=y;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ug(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*o,_),e.update(p,n,_))}function h(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];e.update(m,n,1)}function u(f,p,_,y){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,_);let d=0;for(let R=0;R<_;R++)d+=p[R]*y[R];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Og(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fg(i,t,e){let n=new WeakMap,s=new _e;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let x=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],C=0;p===!0&&(C=1),_===!0&&(C=2),y===!0&&(C=3);let S=a.attributes.position.count*C,Z=1;S>t.maxTextureSize&&(Z=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let I=new Float32Array(S*Z*4*u),U=new uo(I,S,Z,u);U.type=In,U.needsUpdate=!0;let X=C*4;for(let g=0;g<u;g++){let b=m[g],E=d[g],P=R[g],L=S*Z*4*g;for(let H=0;H<b.count;H++){let B=H*X;p===!0&&(s.fromBufferAttribute(b,H),I[L+B+0]=s.x,I[L+B+1]=s.y,I[L+B+2]=s.z,I[L+B+3]=0),_===!0&&(s.fromBufferAttribute(E,H),I[L+B+4]=s.x,I[L+B+5]=s.y,I[L+B+6]=s.z,I[L+B+7]=0),y===!0&&(s.fromBufferAttribute(P,H),I[L+B+8]=s.x,I[L+B+9]=s.y,I[L+B+10]=s.z,I[L+B+11]=P.itemSize===4?s.w:1)}}f={count:u,texture:U,size:new jt(S,Z)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Bg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var yo=class extends We{constructor(t,e,n,s,r,o,a,c,l,h=xs){if(h!==xs&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xs&&(n=Gi),n===void 0&&h===As&&(n=ws),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Bu=new We,Fh=new yo(1,1),zu=new uo,ku=new Mc,Vu=new _o,Bh=[],zh=[],kh=new Float32Array(16),Vh=new Float32Array(9),Hh=new Float32Array(4);function Ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Bh[s];if(r===void 0&&(r=new Float32Array(s),Bh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wo(i,t){let e=zh[t];e===void 0&&(e=new Int32Array(t),zh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Hh.set(n),i.uniformMatrix2fv(this.addr,!1,Hh),ke(e,n)}}function Wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Vh.set(n),i.uniformMatrix3fv(this.addr,!1,Vh),ke(e,n)}}function Xg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;kh.set(n),i.uniformMatrix4fv(this.addr,!1,kh),ke(e,n)}}function Yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function Jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function t0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fh.compareFunction=Du,r=Fh):r=Bu,e.setTexture2D(t||r,s)}function e0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ku,s)}function n0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vu,s)}function i0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zu,s)}function s0(i){switch(i){case 5126:return zg;case 35664:return kg;case 35665:return Vg;case 35666:return Hg;case 35674:return Gg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return Yg;case 35667:case 35671:return qg;case 35668:case 35672:return Zg;case 35669:case 35673:return Kg;case 5125:return Jg;case 36294:return $g;case 36295:return jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}function r0(i,t){i.uniform1fv(this.addr,t)}function o0(i,t){let e=Ds(t,this.size,2);i.uniform2fv(this.addr,e)}function a0(i,t){let e=Ds(t,this.size,3);i.uniform3fv(this.addr,e)}function c0(i,t){let e=Ds(t,this.size,4);i.uniform4fv(this.addr,e)}function l0(i,t){let e=Ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function h0(i,t){let e=Ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function u0(i,t){let e=Ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function f0(i,t){i.uniform1iv(this.addr,t)}function d0(i,t){i.uniform2iv(this.addr,t)}function p0(i,t){i.uniform3iv(this.addr,t)}function m0(i,t){i.uniform4iv(this.addr,t)}function g0(i,t){i.uniform1uiv(this.addr,t)}function _0(i,t){i.uniform2uiv(this.addr,t)}function x0(i,t){i.uniform3uiv(this.addr,t)}function y0(i,t){i.uniform4uiv(this.addr,t)}function v0(i,t,e){let n=this.cache,s=t.length,r=Wo(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Bu,r[o])}function M0(i,t,e){let n=this.cache,s=t.length,r=Wo(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ku,r[o])}function S0(i,t,e){let n=this.cache,s=t.length,r=Wo(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Vu,r[o])}function b0(i,t,e){let n=this.cache,s=t.length,r=Wo(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||zu,r[o])}function w0(i){switch(i){case 5126:return r0;case 35664:return o0;case 35665:return a0;case 35666:return c0;case 35674:return l0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return f0;case 35667:case 35671:return d0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return _0;case 36295:return x0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return b0}}var wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=s0(e.type)}},Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=w0(e.type)}},Tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ca=/(\w+)(\])?(\[|\.)?/g;function Gh(i,t){i.seq.push(t),i.map[t.id]=t}function A0(i,t,e){let n=i.name,s=n.length;for(Ca.lastIndex=0;;){let r=Ca.exec(n),o=Ca.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Gh(e,l===void 0?new wc(a,i,t):new Ac(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Tc(a),Gh(e,u)),e=u}}}var vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);A0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Wh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var T0=37297,E0=0;function R0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Xh=new oe;function C0(i){pe._getMatrix(Xh,pe.workingColorSpace,i);let t=`mat3( ${Xh.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case Ho:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+R0(i.getShaderSource(t),o)}else return s}function L0(i,t){let e=C0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function P0(i,t){let e;switch(t){case Vf:e="Linear";break;case Hf:e="Reinhard";break;case Gf:e="Cineon";break;case Kc:e="ACESFilmic";break;case Xf:e="AgX";break;case Yf:e="Neutral";break;case Wf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jr=new N;function I0(){pe.getLuminanceCoefficients(Jr);let i=Jr.x.toFixed(4),t=Jr.y.toFixed(4),e=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function N0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function U0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function js(i){return i!==""}function qh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(i){return i.replace(O0,B0)}var F0=new Map;function B0(i,t){let e=ce[t];if(e===void 0){let n=F0.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ec(e)}var z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(i){return i.replace(z0,k0)}function k0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function V0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function H0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case bs:t="ENVMAP_TYPE_CUBE";break;case ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function G0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function W0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vu:t="ENVMAP_BLENDING_MULTIPLY";break;case zf:t="ENVMAP_BLENDING_MIX";break;case kf:t="ENVMAP_BLENDING_ADD";break}return t}function X0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Y0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=V0(e),l=H0(e),h=G0(e),u=W0(e),f=X0(e),p=D0(e),_=N0(r),y=s.createProgram(),m,d,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(js).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(js).join(`
`),d.length>0&&(d+=`
`)):(m=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),d=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?ce.tonemapping_pars_fragment:"",e.toneMapping!==vi?P0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,L0("linearToOutputTexel",e.outputColorSpace),I0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),o=Ec(o),o=qh(o,e),o=Zh(o,e),a=Ec(a),a=qh(a,e),a=Zh(a,e),o=Kh(o),a=Kh(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let C=R+m+o,S=R+d+a,Z=Wh(s,s.VERTEX_SHADER,C),I=Wh(s,s.FRAGMENT_SHADER,S);s.attachShader(y,Z),s.attachShader(y,I),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function U(b){if(i.debug.checkShaderErrors){let E=s.getProgramInfoLog(y).trim(),P=s.getShaderInfoLog(Z).trim(),L=s.getShaderInfoLog(I).trim(),H=!0,B=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,Z,I);else{let J=Yh(s,Z,"vertex"),w=Yh(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+E+`
`+J+`
`+w)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(P===""||L==="")&&(B=!1);B&&(b.diagnostics={runnable:H,programLog:E,vertexShader:{log:P,prefix:m},fragmentShader:{log:L,prefix:d}})}s.deleteShader(Z),s.deleteShader(I),X=new vs(s,y),x=U0(s,y)}let X;this.getUniforms=function(){return X===void 0&&U(this),X};let x;this.getAttributes=function(){return x===void 0&&U(this),x};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(y,T0)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=Z,this.fragmentShader=I,this}var q0=0,Rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cc(t),e.set(t,n)),n}},Cc=class{constructor(t){this.id=q0++,this.code=t,this.usedTimes=0}};function Z0(i,t,e,n,s,r,o){let a=new fo,c=new Rc,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,g,b,E,P){let L=E.fog,H=P.geometry,B=x.isMeshStandardMaterial?E.environment:null,J=(x.isMeshStandardMaterial?e:t).get(x.envMap||B),w=J&&J.mapping===ko?J.image.height:null,G=_[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let K=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,q=K!==void 0?K.length:0,z=0;H.morphAttributes.position!==void 0&&(z=1),H.morphAttributes.normal!==void 0&&(z=2),H.morphAttributes.color!==void 0&&(z=3);let tt,V,j,dt;if(G){let st=Bn[G];tt=st.vertexShader,V=st.fragmentShader}else tt=x.vertexShader,V=x.fragmentShader,c.update(x),j=c.getVertexShaderID(x),dt=c.getFragmentShaderID(x);let ct=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),ft=P.isInstancedMesh===!0,Ot=P.isBatchedMesh===!0,qt=!!x.map,Ht=!!x.matcap,fe=!!J,O=!!x.aoMap,Se=!!x.lightMap,Jt=!!x.bumpMap,Qt=!!x.normalMap,kt=!!x.displacementMap,he=!!x.emissiveMap,Bt=!!x.metalnessMap,A=!!x.roughnessMap,v=x.anisotropy>0,Q=x.clearcoat>0,lt=x.dispersion>0,nt=x.iridescence>0,et=x.sheen>0,At=x.transmission>0,bt=v&&!!x.anisotropyMap,gt=Q&&!!x.clearcoatMap,zt=Q&&!!x.clearcoatNormalMap,pt=Q&&!!x.clearcoatRoughnessMap,Nt=nt&&!!x.iridescenceMap,Wt=nt&&!!x.iridescenceThicknessMap,Zt=et&&!!x.sheenColorMap,Dt=et&&!!x.sheenRoughnessMap,se=!!x.specularMap,te=!!x.specularColorMap,ve=!!x.specularIntensityMap,W=At&&!!x.transmissionMap,wt=At&&!!x.thicknessMap,it=!!x.gradientMap,ht=!!x.alphaMap,Pt=x.alphaTest>0,Ct=!!x.alphaHash,T=!!x.extensions,$=vi;x.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&($=i.toneMapping);let at={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:tt,fragmentShader:V,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:dt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&P._colorsTexture!==null,instancing:ft,instancingColor:ft&&P.instanceColor!==null,instancingMorph:ft&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:$e,alphaToCoverage:!!x.alphaToCoverage,map:qt,matcap:Ht,envMap:fe,envMapMode:fe&&J.mapping,envMapCubeUVHeight:w,aoMap:O,lightMap:Se,bumpMap:Jt,normalMap:Qt,displacementMap:f&&kt,emissiveMap:he,normalMapObjectSpace:Qt&&x.normalMapType===$f,normalMapTangentSpace:Qt&&x.normalMapType===Iu,metalnessMap:Bt,roughnessMap:A,anisotropy:v,anisotropyMap:bt,clearcoat:Q,clearcoatMap:gt,clearcoatNormalMap:zt,clearcoatRoughnessMap:pt,dispersion:lt,iridescence:nt,iridescenceMap:Nt,iridescenceThicknessMap:Wt,sheen:et,sheenColorMap:Zt,sheenRoughnessMap:Dt,specularMap:se,specularColorMap:te,specularIntensityMap:ve,transmission:At,transmissionMap:W,thicknessMap:wt,gradientMap:it,opaque:x.transparent===!1&&x.blending===_s&&x.alphaToCoverage===!1,alphaMap:ht,alphaTest:Pt,alphaHash:Ct,combine:x.combine,mapUv:qt&&y(x.map.channel),aoMapUv:O&&y(x.aoMap.channel),lightMapUv:Se&&y(x.lightMap.channel),bumpMapUv:Jt&&y(x.bumpMap.channel),normalMapUv:Qt&&y(x.normalMap.channel),displacementMapUv:kt&&y(x.displacementMap.channel),emissiveMapUv:he&&y(x.emissiveMap.channel),metalnessMapUv:Bt&&y(x.metalnessMap.channel),roughnessMapUv:A&&y(x.roughnessMap.channel),anisotropyMapUv:bt&&y(x.anisotropyMap.channel),clearcoatMapUv:gt&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:zt&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&y(x.sheenRoughnessMap.channel),specularMapUv:se&&y(x.specularMap.channel),specularColorMapUv:te&&y(x.specularColorMap.channel),specularIntensityMapUv:ve&&y(x.specularIntensityMap.channel),transmissionMapUv:W&&y(x.transmissionMap.channel),thicknessMapUv:wt&&y(x.thicknessMap.channel),alphaMapUv:ht&&y(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Qt||v),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!H.attributes.uv&&(qt||ht),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:xt,skinning:P.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:z,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:$,decodeVideoTexture:qt&&x.map.isVideoTexture===!0&&pe.getTransfer(x.map.colorSpace)===be,decodeVideoTextureEmissive:he&&x.emissiveMap.isVideoTexture===!0&&pe.getTransfer(x.emissiveMap.colorSpace)===be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ln,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:T&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(T&&x.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function d(x){let g=[];if(x.shaderID?g.push(x.shaderID):(g.push(x.customVertexShaderID),g.push(x.customFragmentShaderID)),x.defines!==void 0)for(let b in x.defines)g.push(b),g.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(R(g,x),C(g,x),g.push(i.outputColorSpace)),g.push(x.customProgramCacheKey),g.join()}function R(x,g){x.push(g.precision),x.push(g.outputColorSpace),x.push(g.envMapMode),x.push(g.envMapCubeUVHeight),x.push(g.mapUv),x.push(g.alphaMapUv),x.push(g.lightMapUv),x.push(g.aoMapUv),x.push(g.bumpMapUv),x.push(g.normalMapUv),x.push(g.displacementMapUv),x.push(g.emissiveMapUv),x.push(g.metalnessMapUv),x.push(g.roughnessMapUv),x.push(g.anisotropyMapUv),x.push(g.clearcoatMapUv),x.push(g.clearcoatNormalMapUv),x.push(g.clearcoatRoughnessMapUv),x.push(g.iridescenceMapUv),x.push(g.iridescenceThicknessMapUv),x.push(g.sheenColorMapUv),x.push(g.sheenRoughnessMapUv),x.push(g.specularMapUv),x.push(g.specularColorMapUv),x.push(g.specularIntensityMapUv),x.push(g.transmissionMapUv),x.push(g.thicknessMapUv),x.push(g.combine),x.push(g.fogExp2),x.push(g.sizeAttenuation),x.push(g.morphTargetsCount),x.push(g.morphAttributeCount),x.push(g.numDirLights),x.push(g.numPointLights),x.push(g.numSpotLights),x.push(g.numSpotLightMaps),x.push(g.numHemiLights),x.push(g.numRectAreaLights),x.push(g.numDirLightShadows),x.push(g.numPointLightShadows),x.push(g.numSpotLightShadows),x.push(g.numSpotLightShadowsWithMaps),x.push(g.numLightProbes),x.push(g.shadowMapType),x.push(g.toneMapping),x.push(g.numClippingPlanes),x.push(g.numClipIntersection),x.push(g.depthPacking)}function C(x,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reverseDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),x.push(a.mask)}function S(x){let g=_[x.type],b;if(g){let E=Bn[g];b=Bd.clone(E.uniforms)}else b=x.uniforms;return b}function Z(x,g){let b;for(let E=0,P=h.length;E<P;E++){let L=h[E];if(L.cacheKey===g){b=L,++b.usedTimes;break}}return b===void 0&&(b=new Y0(i,g,x,r),h.push(b)),b}function I(x){if(--x.usedTimes===0){let g=h.indexOf(x);h[g]=h[h.length-1],h.pop(),x.destroy()}}function U(x){c.remove(x)}function X(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:Z,releaseProgram:I,releaseShaderCache:U,programs:h,dispose:X}}function K0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function J0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $h(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,_,y,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:y,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=y,d.group=m),t++,d}function a(u,f,p,_,y,m){let d=o(u,f,p,_,y,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,_,y,m){let d=o(u,f,p,_,y,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||J0),n.length>1&&n.sort(f||$h),s.length>1&&s.sort(f||$h)}function h(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function $0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new jh,i.set(n,[o])):s>=r.length?(o=new jh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function j0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Xt};break;case"SpotLight":e={position:new N,direction:new N,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Q0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var t_=0;function e_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function n_(i){let t=new j0,e=Q0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new ie,o=new ie;function a(l){let h=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,_=0,y=0,m=0,d=0,R=0,C=0,S=0,Z=0,I=0,U=0;l.sort(e_);for(let x=0,g=l.length;x<g;x++){let b=l[x],E=b.color,P=b.intensity,L=b.distance,H=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=E.r*P,u+=E.g*P,f+=E.b*P;else if(b.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(b.sh.coefficients[B],P);U++}else if(b.isDirectionalLight){let B=t.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let J=b.shadow,w=e.get(b);w.shadowIntensity=J.intensity,w.shadowBias=J.bias,w.shadowNormalBias=J.normalBias,w.shadowRadius=J.radius,w.shadowMapSize=J.mapSize,n.directionalShadow[p]=w,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=b.shadow.matrix,R++}n.directional[p]=B,p++}else if(b.isSpotLight){let B=t.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(E).multiplyScalar(P),B.distance=L,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,n.spot[y]=B;let J=b.shadow;if(b.map&&(n.spotLightMap[Z]=b.map,Z++,J.updateMatrices(b),b.castShadow&&I++),n.spotLightMatrix[y]=J.matrix,b.castShadow){let w=e.get(b);w.shadowIntensity=J.intensity,w.shadowBias=J.bias,w.shadowNormalBias=J.normalBias,w.shadowRadius=J.radius,w.shadowMapSize=J.mapSize,n.spotShadow[y]=w,n.spotShadowMap[y]=H,S++}y++}else if(b.isRectAreaLight){let B=t.get(b);B.color.copy(E).multiplyScalar(P),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=B,m++}else if(b.isPointLight){let B=t.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){let J=b.shadow,w=e.get(b);w.shadowIntensity=J.intensity,w.shadowBias=J.bias,w.shadowNormalBias=J.normalBias,w.shadowRadius=J.radius,w.shadowMapSize=J.mapSize,w.shadowCameraNear=J.camera.near,w.shadowCameraFar=J.camera.far,n.pointShadow[_]=w,n.pointShadowMap[_]=H,n.pointShadowMatrix[_]=b.shadow.matrix,C++}n.point[_]=B,_++}else if(b.isHemisphereLight){let B=t.get(b);B.skyColor.copy(b.color).multiplyScalar(P),B.groundColor.copy(b.groundColor).multiplyScalar(P),n.hemi[d]=B,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let X=n.hash;(X.directionalLength!==p||X.pointLength!==_||X.spotLength!==y||X.rectAreaLength!==m||X.hemiLength!==d||X.numDirectionalShadows!==R||X.numPointShadows!==C||X.numSpotShadows!==S||X.numSpotMaps!==Z||X.numLightProbes!==U)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=S+Z-I,n.spotLightMap.length=Z,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=U,X.directionalLength=p,X.pointLength=_,X.spotLength=y,X.rectAreaLength=m,X.hemiLength=d,X.numDirectionalShadows=R,X.numPointShadows=C,X.numSpotShadows=S,X.numSpotMaps=Z,X.numLightProbes=U,n.version=t_++)}function c(l,h){let u=0,f=0,p=0,_=0,y=0,m=h.matrixWorldInverse;for(let d=0,R=l.length;d<R;d++){let C=l[d];if(C.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(C.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(C.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(C.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(C.width*.5,0,0),S.halfHeight.set(0,C.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(C.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(m),f++}else if(C.isHemisphereLight){let S=n.hemi[y];S.direction.setFromMatrixPosition(C.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function Qh(i){let t=new n_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function i_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Qh(i),t.set(s,[a])):r>=o.length?(a=new Qh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Lc=class extends dn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pc=class extends dn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},s_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o_(i,t,e){let n=new or,s=new jt,r=new jt,o=new _e,a=new Lc({depthPacking:Jf}),c=new Pc,l={},h=e.maxTextureSize,u={[kn]:nn,[nn]:kn,[Ln]:Ln},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:s_,fragmentShader:r_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new vn;_.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Pe(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let d=this.type;this.render=function(I,U,X){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let x=i.getRenderTarget(),g=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),E=i.state;E.setBlending(yi),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let P=d!==Jn&&this.type===Jn,L=d===Jn&&this.type!==Jn;for(let H=0,B=I.length;H<B;H++){let J=I[H],w=J.shadow;if(w===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(w.autoUpdate===!1&&w.needsUpdate===!1)continue;s.copy(w.mapSize);let G=w.getFrameExtents();if(s.multiply(G),r.copy(w.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,w.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,w.mapSize.y=r.y)),w.map===null||P===!0||L===!0){let q=this.type!==Jn?{minFilter:Je,magFilter:Je}:{};w.map!==null&&w.map.dispose(),w.map=new ni(s.x,s.y,q),w.map.texture.name=J.name+".shadowMap",w.camera.updateProjectionMatrix()}i.setRenderTarget(w.map),i.clear();let K=w.getViewportCount();for(let q=0;q<K;q++){let z=w.getViewport(q);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),E.viewport(o),w.updateMatrices(J,q),n=w.getFrustum(),S(U,X,w.camera,J,this.type)}w.isPointLightShadow!==!0&&this.type===Jn&&R(w,X),w.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(x,g,b)};function R(I,U){let X=t.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ni(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(U,null,X,f,y,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(U,null,X,p,y,null)}function C(I,U,X,x){let g=null,b=X.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(b!==void 0)g=b;else if(g=X.isPointLight===!0?c:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let E=g.uuid,P=U.uuid,L=l[E];L===void 0&&(L={},l[E]=L);let H=L[P];H===void 0&&(H=g.clone(),L[P]=H,U.addEventListener("dispose",Z)),g=H}if(g.visible=U.visible,g.wireframe=U.wireframe,x===Jn?g.side=U.shadowSide!==null?U.shadowSide:U.side:g.side=U.shadowSide!==null?U.shadowSide:u[U.side],g.alphaMap=U.alphaMap,g.alphaTest=U.alphaTest,g.map=U.map,g.clipShadows=U.clipShadows,g.clippingPlanes=U.clippingPlanes,g.clipIntersection=U.clipIntersection,g.displacementMap=U.displacementMap,g.displacementScale=U.displacementScale,g.displacementBias=U.displacementBias,g.wireframeLinewidth=U.wireframeLinewidth,g.linewidth=U.linewidth,X.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let E=i.properties.get(g);E.light=X}return g}function S(I,U,X,x,g){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&g===Jn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld);let P=t.update(I),L=I.material;if(Array.isArray(L)){let H=P.groups;for(let B=0,J=H.length;B<J;B++){let w=H[B],G=L[w.materialIndex];if(G&&G.visible){let K=C(I,G,x,g);I.onBeforeShadow(i,I,U,X,P,K,w),i.renderBufferDirect(X,null,P,K,I,w),I.onAfterShadow(i,I,U,X,P,K,w)}}}else if(L.visible){let H=C(I,L,x,g);I.onBeforeShadow(i,I,U,X,P,H,null),i.renderBufferDirect(X,null,P,H,I,null),I.onAfterShadow(i,I,U,X,P,H,null)}}let E=I.children;for(let P=0,L=E.length;P<L;P++)S(E[P],U,X,x,g)}function Z(I){I.target.removeEventListener("dispose",Z);for(let X in l){let x=l[X],g=I.target.uuid;g in x&&(x[g].dispose(),delete x[g])}}}var a_={[Fa]:Ba,[za]:Ha,[ka]:Ga,[Ms]:Va,[Ba]:Fa,[Ha]:za,[Ga]:ka,[Va]:Ms};function c_(i,t){function e(){let W=!1,wt=new _e,it=null,ht=new _e(0,0,0,0);return{setMask:function(Pt){it!==Pt&&!W&&(i.colorMask(Pt,Pt,Pt,Pt),it=Pt)},setLocked:function(Pt){W=Pt},setClear:function(Pt,Ct,T,$,at){at===!0&&(Pt*=$,Ct*=$,T*=$),wt.set(Pt,Ct,T,$),ht.equals(wt)===!1&&(i.clearColor(Pt,Ct,T,$),ht.copy(wt))},reset:function(){W=!1,it=null,ht.set(-1,0,0,0)}}}function n(){let W=!1,wt=!1,it=null,ht=null,Pt=null;return{setReversed:function(Ct){if(wt!==Ct){let T=t.get("EXT_clip_control");wt?T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT):T.clipControlEXT(T.LOWER_LEFT_EXT,T.NEGATIVE_ONE_TO_ONE_EXT);let $=Pt;Pt=null,this.setClear($)}wt=Ct},getReversed:function(){return wt},setTest:function(Ct){Ct?ct(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(Ct){it!==Ct&&!W&&(i.depthMask(Ct),it=Ct)},setFunc:function(Ct){if(wt&&(Ct=a_[Ct]),ht!==Ct){switch(Ct){case Fa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Va:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=Ct}},setLocked:function(Ct){W=Ct},setClear:function(Ct){Pt!==Ct&&(wt&&(Ct=1-Ct),i.clearDepth(Ct),Pt=Ct)},reset:function(){W=!1,it=null,ht=null,Pt=null,wt=!1}}}function s(){let W=!1,wt=null,it=null,ht=null,Pt=null,Ct=null,T=null,$=null,at=null;return{setTest:function(st){W||(st?ct(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(st){wt!==st&&!W&&(i.stencilMask(st),wt=st)},setFunc:function(st,ut,Mt){(it!==st||ht!==ut||Pt!==Mt)&&(i.stencilFunc(st,ut,Mt),it=st,ht=ut,Pt=Mt)},setOp:function(st,ut,Mt){(Ct!==st||T!==ut||$!==Mt)&&(i.stencilOp(st,ut,Mt),Ct=st,T=ut,$=Mt)},setLocked:function(st){W=st},setClear:function(st){at!==st&&(i.clearStencil(st),at=st)},reset:function(){W=!1,wt=null,it=null,ht=null,Pt=null,Ct=null,T=null,$=null,at=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],_=null,y=!1,m=null,d=null,R=null,C=null,S=null,Z=null,I=null,U=new Xt(0,0,0),X=0,x=!1,g=null,b=null,E=null,P=null,L=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,J=0,w=i.getParameter(i.VERSION);w.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(w)[1]),B=J>=1):w.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(w)[1]),B=J>=2);let G=null,K={},q=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),tt=new _e().fromArray(q),V=new _e().fromArray(z);function j(W,wt,it,ht){let Pt=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(W,Ct),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let T=0;T<it;T++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(wt+T,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Ct}let dt={};dt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(Ms),Jt(!1),Qt(th),ct(i.CULL_FACE),O(yi);function ct(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function xt(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function ft(W,wt){return u[W]!==wt?(i.bindFramebuffer(W,wt),u[W]=wt,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=wt),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Ot(W,wt){let it=p,ht=!1;if(W){it=f.get(wt),it===void 0&&(it=[],f.set(wt,it));let Pt=W.textures;if(it.length!==Pt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,T=Pt.length;Ct<T;Ct++)it[Ct]=i.COLOR_ATTACHMENT0+Ct;it.length=Pt.length,ht=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,ht=!0);ht&&i.drawBuffers(it)}function qt(W){return _!==W?(i.useProgram(W),_=W,!0):!1}let Ht={[zi]:i.FUNC_ADD,[Sf]:i.FUNC_SUBTRACT,[bf]:i.FUNC_REVERSE_SUBTRACT};Ht[wf]=i.MIN,Ht[Af]=i.MAX;let fe={[Tf]:i.ZERO,[Ef]:i.ONE,[Rf]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[Nf]:i.SRC_ALPHA_SATURATE,[If]:i.DST_COLOR,[Lf]:i.DST_ALPHA,[Cf]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[Df]:i.ONE_MINUS_DST_COLOR,[Pf]:i.ONE_MINUS_DST_ALPHA,[Uf]:i.CONSTANT_COLOR,[Of]:i.ONE_MINUS_CONSTANT_COLOR,[Ff]:i.CONSTANT_ALPHA,[Bf]:i.ONE_MINUS_CONSTANT_ALPHA};function O(W,wt,it,ht,Pt,Ct,T,$,at,st){if(W===yi){y===!0&&(xt(i.BLEND),y=!1);return}if(y===!1&&(ct(i.BLEND),y=!0),W!==Mf){if(W!==m||st!==x){if((d!==zi||S!==zi)&&(i.blendEquation(i.FUNC_ADD),d=zi,S=zi),st)switch(W){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eh:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}R=null,C=null,Z=null,I=null,U.set(0,0,0),X=0,m=W,x=st}return}Pt=Pt||wt,Ct=Ct||it,T=T||ht,(wt!==d||Pt!==S)&&(i.blendEquationSeparate(Ht[wt],Ht[Pt]),d=wt,S=Pt),(it!==R||ht!==C||Ct!==Z||T!==I)&&(i.blendFuncSeparate(fe[it],fe[ht],fe[Ct],fe[T]),R=it,C=ht,Z=Ct,I=T),($.equals(U)===!1||at!==X)&&(i.blendColor($.r,$.g,$.b,at),U.copy($),X=at),m=W,x=!1}function Se(W,wt){W.side===Ln?xt(i.CULL_FACE):ct(i.CULL_FACE);let it=W.side===nn;wt&&(it=!it),Jt(it),W.blending===_s&&W.transparent===!1?O(yi):O(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let ht=W.stencilWrite;a.setTest(ht),ht&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),he(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(W){g!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),g=W)}function Qt(W){W!==yf?(ct(i.CULL_FACE),W!==b&&(W===th?i.cullFace(i.BACK):W===vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),b=W}function kt(W){W!==E&&(B&&i.lineWidth(W),E=W)}function he(W,wt,it){W?(ct(i.POLYGON_OFFSET_FILL),(P!==wt||L!==it)&&(i.polygonOffset(wt,it),P=wt,L=it)):xt(i.POLYGON_OFFSET_FILL)}function Bt(W){W?ct(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function A(W){W===void 0&&(W=i.TEXTURE0+H-1),G!==W&&(i.activeTexture(W),G=W)}function v(W,wt,it){it===void 0&&(G===null?it=i.TEXTURE0+H-1:it=G);let ht=K[it];ht===void 0&&(ht={type:void 0,texture:void 0},K[it]=ht),(ht.type!==W||ht.texture!==wt)&&(G!==it&&(i.activeTexture(it),G=it),i.bindTexture(W,wt||dt[W]),ht.type=W,ht.texture=wt)}function Q(){let W=K[G];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Nt(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(W){tt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),tt.copy(W))}function Dt(W){V.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),V.copy(W))}function se(W,wt){let it=l.get(wt);it===void 0&&(it=new WeakMap,l.set(wt,it));let ht=it.get(W);ht===void 0&&(ht=i.getUniformBlockIndex(wt,W.name),it.set(W,ht))}function te(W,wt){let ht=l.get(wt).get(W);c.get(wt)!==ht&&(i.uniformBlockBinding(wt,ht,W.__bindingPointIndex),c.set(wt,ht))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,K={},u={},f=new WeakMap,p=[],_=null,y=!1,m=null,d=null,R=null,C=null,S=null,Z=null,I=null,U=new Xt(0,0,0),X=0,x=!1,g=null,b=null,E=null,P=null,L=null,tt.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:xt,bindFramebuffer:ft,drawBuffers:Ot,useProgram:qt,setBlending:O,setMaterial:Se,setFlipSided:Jt,setCullFace:Qt,setLineWidth:kt,setPolygonOffset:he,setScissorTest:Bt,activeTexture:A,bindTexture:v,unbindTexture:Q,compressedTexImage2D:lt,compressedTexImage3D:nt,texImage2D:Nt,texImage3D:Wt,updateUBOMapping:se,uniformBlockBinding:te,texStorage2D:zt,texStorage3D:pt,texSubImage2D:et,texSubImage3D:At,compressedTexSubImage2D:bt,compressedTexSubImage3D:gt,scissor:Zt,viewport:Dt,reset:ve}}function tu(i,t,e,n){let s=l_(n);switch(e){case Au:return i*t;case Eu:return i*t;case Ru:return i*t*2;case tl:return i*t/s.components*s.byteLength;case el:return i*t/s.components*s.byteLength;case Cu:return i*t*2/s.components*s.byteLength;case nl:return i*t*2/s.components*s.byteLength;case Tu:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case il:return i*t*4/s.components*s.byteLength;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oo:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:case Ka:return Math.max(i,16)*Math.max(t,8)/4;case Ya:case Za:return Math.max(i,8)*Math.max(t,8)/2;case Ja:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case co:case dc:case pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lu:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case gc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l_(i){switch(i){case ti:case Su:return{byteLength:1,components:1};case sr:case bu:case mr:return{byteLength:2,components:1};case jc:case Qc:return{byteLength:2,components:4};case Gi:case $c:case In:return{byteLength:4,components:1};case wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function h_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new jt,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,v){return p?new OffscreenCanvas(A,v):rr("canvas")}function y(A,v,Q){let lt=1,nt=Bt(A);if((nt.width>Q||nt.height>Q)&&(lt=Q/Math.max(nt.width,nt.height)),lt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let et=Math.floor(lt*nt.width),At=Math.floor(lt*nt.height);u===void 0&&(u=_(et,At));let bt=v?_(et,At):u;return bt.width=et,bt.height=At,bt.getContext("2d").drawImage(A,0,0,et,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+et+"x"+At+")."),bt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(A,v,Q,lt,nt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=v;if(v===i.RED&&(Q===i.FLOAT&&(et=i.R32F),Q===i.HALF_FLOAT&&(et=i.R16F),Q===i.UNSIGNED_BYTE&&(et=i.R8)),v===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(et=i.R8UI),Q===i.UNSIGNED_SHORT&&(et=i.R16UI),Q===i.UNSIGNED_INT&&(et=i.R32UI),Q===i.BYTE&&(et=i.R8I),Q===i.SHORT&&(et=i.R16I),Q===i.INT&&(et=i.R32I)),v===i.RG&&(Q===i.FLOAT&&(et=i.RG32F),Q===i.HALF_FLOAT&&(et=i.RG16F),Q===i.UNSIGNED_BYTE&&(et=i.RG8)),v===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(et=i.RG8UI),Q===i.UNSIGNED_SHORT&&(et=i.RG16UI),Q===i.UNSIGNED_INT&&(et=i.RG32UI),Q===i.BYTE&&(et=i.RG8I),Q===i.SHORT&&(et=i.RG16I),Q===i.INT&&(et=i.RG32I)),v===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(et=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(et=i.RGB16UI),Q===i.UNSIGNED_INT&&(et=i.RGB32UI),Q===i.BYTE&&(et=i.RGB8I),Q===i.SHORT&&(et=i.RGB16I),Q===i.INT&&(et=i.RGB32I)),v===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),Q===i.UNSIGNED_INT&&(et=i.RGBA32UI),Q===i.BYTE&&(et=i.RGBA8I),Q===i.SHORT&&(et=i.RGBA16I),Q===i.INT&&(et=i.RGBA32I)),v===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),v===i.RGBA){let At=nt?Ho:pe.getTransfer(lt);Q===i.FLOAT&&(et=i.RGBA32F),Q===i.HALF_FLOAT&&(et=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(et=At===be?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function S(A,v){let Q;return A?v===null||v===Gi||v===ws?Q=i.DEPTH24_STENCIL8:v===In?Q=i.DEPTH32F_STENCIL8:v===sr&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gi||v===ws?Q=i.DEPTH_COMPONENT24:v===In?Q=i.DEPTH_COMPONENT32F:v===sr&&(Q=i.DEPTH_COMPONENT16),Q}function Z(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==en?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function I(A){let v=A.target;v.removeEventListener("dispose",I),X(v),v.isVideoTexture&&h.delete(v)}function U(A){let v=A.target;v.removeEventListener("dispose",U),g(v)}function X(A){let v=n.get(A);if(v.__webglInit===void 0)return;let Q=A.source,lt=f.get(Q);if(lt){let nt=lt[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&x(A),Object.keys(lt).length===0&&f.delete(Q)}n.remove(A)}function x(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let Q=A.source,lt=f.get(Q);delete lt[v.__cacheKey],o.memory.textures--}function g(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(v.__webglFramebuffer[lt]))for(let nt=0;nt<v.__webglFramebuffer[lt].length;nt++)i.deleteFramebuffer(v.__webglFramebuffer[lt][nt]);else i.deleteFramebuffer(v.__webglFramebuffer[lt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[lt])}else{if(Array.isArray(v.__webglFramebuffer))for(let lt=0;lt<v.__webglFramebuffer.length;lt++)i.deleteFramebuffer(v.__webglFramebuffer[lt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let lt=0;lt<v.__webglColorRenderbuffer.length;lt++)v.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[lt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Q=A.textures;for(let lt=0,nt=Q.length;lt<nt;lt++){let et=n.get(Q[lt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(Q[lt])}n.remove(A)}let b=0;function E(){b=0}function P(){let A=b;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),b+=1,A}function L(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function H(A,v){let Q=n.get(A);if(A.isVideoTexture&&kt(A),A.isRenderTargetTexture===!1&&A.version>0&&Q.__version!==A.version){let lt=A.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(Q,A,v);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+v)}function B(A,v){let Q=n.get(A);if(A.version>0&&Q.__version!==A.version){V(Q,A,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+v)}function J(A,v){let Q=n.get(A);if(A.version>0&&Q.__version!==A.version){V(Q,A,v);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+v)}function w(A,v){let Q=n.get(A);if(A.version>0&&Q.__version!==A.version){j(Q,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+v)}let G={[Hi]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[ir]:i.MIRRORED_REPEAT},K={[Je]:i.NEAREST,[Jc]:i.NEAREST_MIPMAP_NEAREST,[ms]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Qs]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},q={[jf]:i.NEVER,[sd]:i.ALWAYS,[Qf]:i.LESS,[Du]:i.LEQUAL,[td]:i.EQUAL,[id]:i.GEQUAL,[ed]:i.GREATER,[nd]:i.NOTEQUAL};function z(A,v){if(v.type===In&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===en||v.magFilter===Qs||v.magFilter===ms||v.magFilter===zn||v.minFilter===en||v.minFilter===Qs||v.minFilter===ms||v.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,G[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,G[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,G[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,K[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,K[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,q[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Je||v.minFilter!==ms&&v.minFilter!==zn||v.type===In&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function tt(A,v){let Q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",I));let lt=v.source,nt=f.get(lt);nt===void 0&&(nt={},f.set(lt,nt));let et=L(v);if(et!==A.__cacheKey){nt[et]===void 0&&(nt[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),nt[et].usedTimes++;let At=nt[A.__cacheKey];At!==void 0&&(nt[A.__cacheKey].usedTimes--,At.usedTimes===0&&x(v)),A.__cacheKey=et,A.__webglTexture=nt[et].texture}return Q}function V(A,v,Q){let lt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(lt=i.TEXTURE_3D);let nt=tt(A,v),et=v.source;e.bindTexture(lt,A.__webglTexture,i.TEXTURE0+Q);let At=n.get(et);if(et.version!==At.__version||nt===!0){e.activeTexture(i.TEXTURE0+Q);let bt=pe.getPrimaries(pe.workingColorSpace),gt=v.colorSpace===_i?null:pe.getPrimaries(v.colorSpace),zt=v.colorSpace===_i||bt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let pt=y(v.image,!1,s.maxTextureSize);pt=he(v,pt);let Nt=r.convert(v.format,v.colorSpace),Wt=r.convert(v.type),Zt=C(v.internalFormat,Nt,Wt,v.colorSpace,v.isVideoTexture);z(lt,v);let Dt,se=v.mipmaps,te=v.isVideoTexture!==!0,ve=At.__version===void 0||nt===!0,W=et.dataReady,wt=Z(v,pt);if(v.isDepthTexture)Zt=S(v.format===As,v.type),ve&&(te?e.texStorage2D(i.TEXTURE_2D,1,Zt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Zt,pt.width,pt.height,0,Nt,Wt,null));else if(v.isDataTexture)if(se.length>0){te&&ve&&e.texStorage2D(i.TEXTURE_2D,wt,Zt,se[0].width,se[0].height);for(let it=0,ht=se.length;it<ht;it++)Dt=se[it],te?W&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Dt.width,Dt.height,Nt,Wt,Dt.data):e.texImage2D(i.TEXTURE_2D,it,Zt,Dt.width,Dt.height,0,Nt,Wt,Dt.data);v.generateMipmaps=!1}else te?(ve&&e.texStorage2D(i.TEXTURE_2D,wt,Zt,pt.width,pt.height),W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,Nt,Wt,pt.data)):e.texImage2D(i.TEXTURE_2D,0,Zt,pt.width,pt.height,0,Nt,Wt,pt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){te&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Zt,se[0].width,se[0].height,pt.depth);for(let it=0,ht=se.length;it<ht;it++)if(Dt=se[it],v.format!==_n)if(Nt!==null)if(te){if(W)if(v.layerUpdates.size>0){let Pt=tu(Dt.width,Dt.height,v.format,v.type);for(let Ct of v.layerUpdates){let T=Dt.data.subarray(Ct*Pt/Dt.data.BYTES_PER_ELEMENT,(Ct+1)*Pt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Ct,Dt.width,Dt.height,1,Nt,T)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Dt.width,Dt.height,pt.depth,Nt,Dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Zt,Dt.width,Dt.height,pt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Dt.width,Dt.height,pt.depth,Nt,Wt,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Zt,Dt.width,Dt.height,pt.depth,0,Nt,Wt,Dt.data)}else{te&&ve&&e.texStorage2D(i.TEXTURE_2D,wt,Zt,se[0].width,se[0].height);for(let it=0,ht=se.length;it<ht;it++)Dt=se[it],v.format!==_n?Nt!==null?te?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,Dt.width,Dt.height,Nt,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Zt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?W&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Dt.width,Dt.height,Nt,Wt,Dt.data):e.texImage2D(i.TEXTURE_2D,it,Zt,Dt.width,Dt.height,0,Nt,Wt,Dt.data)}else if(v.isDataArrayTexture)if(te){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Zt,pt.width,pt.height,pt.depth),W)if(v.layerUpdates.size>0){let it=tu(pt.width,pt.height,v.format,v.type);for(let ht of v.layerUpdates){let Pt=pt.data.subarray(ht*it/pt.data.BYTES_PER_ELEMENT,(ht+1)*it/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,pt.width,pt.height,1,Nt,Wt,Pt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Nt,Wt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,pt.width,pt.height,pt.depth,0,Nt,Wt,pt.data);else if(v.isData3DTexture)te?(ve&&e.texStorage3D(i.TEXTURE_3D,wt,Zt,pt.width,pt.height,pt.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Nt,Wt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,pt.width,pt.height,pt.depth,0,Nt,Wt,pt.data);else if(v.isFramebufferTexture){if(ve)if(te)e.texStorage2D(i.TEXTURE_2D,wt,Zt,pt.width,pt.height);else{let it=pt.width,ht=pt.height;for(let Pt=0;Pt<wt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Zt,it,ht,0,Nt,Wt,null),it>>=1,ht>>=1}}else if(se.length>0){if(te&&ve){let it=Bt(se[0]);e.texStorage2D(i.TEXTURE_2D,wt,Zt,it.width,it.height)}for(let it=0,ht=se.length;it<ht;it++)Dt=se[it],te?W&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Nt,Wt,Dt):e.texImage2D(i.TEXTURE_2D,it,Zt,Nt,Wt,Dt);v.generateMipmaps=!1}else if(te){if(ve){let it=Bt(pt);e.texStorage2D(i.TEXTURE_2D,wt,Zt,it.width,it.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Nt,Wt,pt)}else e.texImage2D(i.TEXTURE_2D,0,Zt,Nt,Wt,pt);m(v)&&d(lt),At.__version=et.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function j(A,v,Q){if(v.image.length!==6)return;let lt=tt(A,v),nt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+Q);let et=n.get(nt);if(nt.version!==et.__version||lt===!0){e.activeTexture(i.TEXTURE0+Q);let At=pe.getPrimaries(pe.workingColorSpace),bt=v.colorSpace===_i?null:pe.getPrimaries(v.colorSpace),gt=v.colorSpace===_i||At===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let zt=v.isCompressedTexture||v.image[0].isCompressedTexture,pt=v.image[0]&&v.image[0].isDataTexture,Nt=[];for(let ht=0;ht<6;ht++)!zt&&!pt?Nt[ht]=y(v.image[ht],!0,s.maxCubemapSize):Nt[ht]=pt?v.image[ht].image:v.image[ht],Nt[ht]=he(v,Nt[ht]);let Wt=Nt[0],Zt=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type),se=C(v.internalFormat,Zt,Dt,v.colorSpace),te=v.isVideoTexture!==!0,ve=et.__version===void 0||lt===!0,W=nt.dataReady,wt=Z(v,Wt);z(i.TEXTURE_CUBE_MAP,v);let it;if(zt){te&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,se,Wt.width,Wt.height);for(let ht=0;ht<6;ht++){it=Nt[ht].mipmaps;for(let Pt=0;Pt<it.length;Pt++){let Ct=it[Pt];v.format!==_n?Zt!==null?te?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt,0,0,Ct.width,Ct.height,Zt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt,se,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt,0,0,Ct.width,Ct.height,Zt,Dt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt,se,Ct.width,Ct.height,0,Zt,Dt,Ct.data)}}}else{if(it=v.mipmaps,te&&ve){it.length>0&&wt++;let ht=Bt(Nt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,se,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(pt){te?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Nt[ht].width,Nt[ht].height,Zt,Dt,Nt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,se,Nt[ht].width,Nt[ht].height,0,Zt,Dt,Nt[ht].data);for(let Pt=0;Pt<it.length;Pt++){let T=it[Pt].image[ht].image;te?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt+1,0,0,T.width,T.height,Zt,Dt,T.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt+1,se,T.width,T.height,0,Zt,Dt,T.data)}}else{te?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Zt,Dt,Nt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,se,Zt,Dt,Nt[ht]);for(let Pt=0;Pt<it.length;Pt++){let Ct=it[Pt];te?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt+1,0,0,Zt,Dt,Ct.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt+1,se,Zt,Dt,Ct.image[ht])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),et.__version=nt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function dt(A,v,Q,lt,nt,et){let At=r.convert(Q.format,Q.colorSpace),bt=r.convert(Q.type),gt=C(Q.internalFormat,At,bt,Q.colorSpace),zt=n.get(v),pt=n.get(Q);if(pt.__renderTarget=v,!zt.__hasExternalTextures){let Nt=Math.max(1,v.width>>et),Wt=Math.max(1,v.height>>et);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,et,gt,Nt,Wt,v.depth,0,At,bt,null):e.texImage2D(nt,et,gt,Nt,Wt,0,At,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Qt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,nt,pt.__webglTexture,0,Jt(v)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,nt,pt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(A,v,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let lt=v.depthTexture,nt=lt&&lt.isDepthTexture?lt.type:null,et=S(v.stencilBuffer,nt),At=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=Jt(v);Qt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,et,v.width,v.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,et,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,et,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,A)}else{let lt=v.textures;for(let nt=0;nt<lt.length;nt++){let et=lt[nt],At=r.convert(et.format,et.colorSpace),bt=r.convert(et.type),gt=C(et.internalFormat,At,bt,et.colorSpace),zt=Jt(v);Q&&Qt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,gt,v.width,v.height):Qt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,gt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,gt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let lt=n.get(v.depthTexture);lt.__renderTarget=v,(!lt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);let nt=lt.__webglTexture,et=Jt(v);if(v.depthTexture.format===xs)Qt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(v.depthTexture.format===As)Qt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function ft(A){let v=n.get(A),Q=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let lt=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),lt){let nt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,lt.removeEventListener("dispose",nt)};lt.addEventListener("dispose",nt),v.__depthDisposeCallback=nt}v.__boundDepthTexture=lt}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");xt(v.__webglFramebuffer,A)}else if(Q){v.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[lt]),v.__webglDepthbuffer[lt]===void 0)v.__webglDepthbuffer[lt]=i.createRenderbuffer(),ct(v.__webglDepthbuffer[lt],A,!1);else{let nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=v.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ct(v.__webglDepthbuffer,A,!1);else{let lt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,v,Q){let lt=n.get(A);v!==void 0&&dt(lt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&ft(A)}function qt(A){let v=A.texture,Q=n.get(A),lt=n.get(v);A.addEventListener("dispose",U);let nt=A.textures,et=A.isWebGLCubeRenderTarget===!0,At=nt.length>1;if(At||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=v.version,o.memory.textures++),et){Q.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(v.mipmaps&&v.mipmaps.length>0){Q.__webglFramebuffer[bt]=[];for(let gt=0;gt<v.mipmaps.length;gt++)Q.__webglFramebuffer[bt][gt]=i.createFramebuffer()}else Q.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Q.__webglFramebuffer=[];for(let bt=0;bt<v.mipmaps.length;bt++)Q.__webglFramebuffer[bt]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(At)for(let bt=0,gt=nt.length;bt<gt;bt++){let zt=n.get(nt[bt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Qt(A)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let bt=0;bt<nt.length;bt++){let gt=nt[bt];Q.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[bt]);let zt=r.convert(gt.format,gt.colorSpace),pt=r.convert(gt.type),Nt=C(gt.internalFormat,zt,pt,gt.colorSpace,A.isXRRenderTarget===!0),Wt=Jt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Nt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(Q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),z(i.TEXTURE_CUBE_MAP,v);for(let bt=0;bt<6;bt++)if(v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)dt(Q.__webglFramebuffer[bt][gt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,gt);else dt(Q.__webglFramebuffer[bt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);m(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let bt=0,gt=nt.length;bt<gt;bt++){let zt=nt[bt],pt=n.get(zt);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),z(i.TEXTURE_2D,zt),dt(Q.__webglFramebuffer,A,zt,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),m(zt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(bt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,lt.__webglTexture),z(bt,v),v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)dt(Q.__webglFramebuffer[gt],A,v,i.COLOR_ATTACHMENT0,bt,gt);else dt(Q.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,bt,0);m(v)&&d(bt),e.unbindTexture()}A.depthBuffer&&ft(A)}function Ht(A){let v=A.textures;for(let Q=0,lt=v.length;Q<lt;Q++){let nt=v[Q];if(m(nt)){let et=R(A),At=n.get(nt).__webglTexture;e.bindTexture(et,At),d(et),e.unbindTexture()}}}let fe=[],O=[];function Se(A){if(A.samples>0){if(Qt(A)===!1){let v=A.textures,Q=A.width,lt=A.height,nt=i.COLOR_BUFFER_BIT,et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(A),bt=v.length>1;if(bt)for(let gt=0;gt<v.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let gt=0;gt<v.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[gt]);let zt=n.get(v[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,Q,lt,0,0,Q,lt,nt,i.NEAREST),c===!0&&(fe.length=0,O.length=0,fe.push(i.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(fe.push(et),O.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let gt=0;gt<v.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,At.__webglColorRenderbuffer[gt]);let zt=n.get(v[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Jt(A){return Math.min(s.maxSamples,A.samples)}function Qt(A){let v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function kt(A){let v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function he(A,v){let Q=A.colorSpace,lt=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||Q!==$e&&Q!==_i&&(pe.getTransfer(Q)===be?(lt!==_n||nt!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),v}function Bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=E,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=J,this.setTextureCube=w,this.rebindTextures=Ot,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Qt}function u_(i,t){function e(n,s=_i){let r,o=pe.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===jc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return i.BYTE;if(n===bu)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===$c)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===mr)return i.HALF_FLOAT;if(n===Au)return i.ALPHA;if(n===Tu)return i.RGB;if(n===_n)return i.RGBA;if(n===Eu)return i.LUMINANCE;if(n===Ru)return i.LUMINANCE_ALPHA;if(n===xs)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===el)return i.RED_INTEGER;if(n===Cu)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===so||n===ro||n===oo||n===ao)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===qa||n===Za||n===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===$a||n===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===$a)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qa||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===fc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qa)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===co||n===dc||n===pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===co)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lu||n===mc||n===gc||n===_c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ic=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},xn=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},f_={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),d=this._getHandJoint(l,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Hn({vertexShader:d_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new Xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends ei{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,_=null,y=new Dc,m=e.getContextAttributes(),d=null,R=null,C=[],S=[],Z=new jt,I=null,U=new Be;U.viewport=new _e;let X=new Be;X.viewport=new _e;let x=[U,X],g=new Ic,b=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=C[V];return j===void 0&&(j=new nr,C[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=C[V];return j===void 0&&(j=new nr,C[V]=j),j.getGripSpace()},this.getHand=function(V){let j=C[V];return j===void 0&&(j=new nr,C[V]=j),j.getHandSpace()};function P(V){let j=S.indexOf(V.inputSource);if(j===-1)return;let dt=C[j];dt!==void 0&&(dt.update(V.inputSource,V.frame,l||o),dt.dispatchEvent({type:V.type,data:V.inputSource}))}function L(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",H);for(let V=0;V<C.length;V++){let j=S[V];j!==null&&(S[V]=null,C[V].disconnect(j))}b=null,E=null,y.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,R=null,tt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(Z.width,Z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",L),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(Z),s.renderState.layers===void 0){let j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new ni(p.framebufferWidth,p.framebufferHeight,{format:_n,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,dt=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?As:xs,dt=m.stencil?ws:Gi);let xt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new ni(f.textureWidth,f.textureHeight,{format:_n,type:ti,depthTexture:new yo(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(V){for(let j=0;j<V.removed.length;j++){let dt=V.removed[j],ct=S.indexOf(dt);ct>=0&&(S[ct]=null,C[ct].disconnect(dt))}for(let j=0;j<V.added.length;j++){let dt=V.added[j],ct=S.indexOf(dt);if(ct===-1){for(let ft=0;ft<C.length;ft++)if(ft>=S.length){S.push(dt),ct=ft;break}else if(S[ft]===null){S[ft]=dt,ct=ft;break}if(ct===-1)break}let xt=C[ct];xt&&xt.connect(dt)}}let B=new N,J=new N;function w(V,j,dt){B.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(dt.matrixWorld);let ct=B.distanceTo(J),xt=j.projectionMatrix.elements,ft=dt.projectionMatrix.elements,Ot=xt[14]/(xt[10]-1),qt=xt[14]/(xt[10]+1),Ht=(xt[9]+1)/xt[5],fe=(xt[9]-1)/xt[5],O=(xt[8]-1)/xt[0],Se=(ft[8]+1)/ft[0],Jt=Ot*O,Qt=Ot*Se,kt=ct/(-O+Se),he=kt*-O;if(j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(he),V.translateZ(kt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),xt[10]===-1)V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Bt=Ot+kt,A=qt+kt,v=Jt-he,Q=Qt+(ct-he),lt=Ht*qt/A*Bt,nt=fe*qt/A*Bt;V.projectionMatrix.makePerspective(v,Q,lt,nt,Bt,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function G(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let j=V.near,dt=V.far;y.texture!==null&&(y.depthNear>0&&(j=y.depthNear),y.depthFar>0&&(dt=y.depthFar)),g.near=X.near=U.near=j,g.far=X.far=U.far=dt,(b!==g.near||E!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),b=g.near,E=g.far),U.layers.mask=V.layers.mask|2,X.layers.mask=V.layers.mask|4,g.layers.mask=U.layers.mask|X.layers.mask;let ct=V.parent,xt=g.cameras;G(g,ct);for(let ft=0;ft<xt.length;ft++)G(xt[ft],ct);xt.length===2?w(g,U,X):g.projectionMatrix.copy(U.projectionMatrix),K(V,g,ct)};function K(V,j,dt){dt===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(dt.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Rs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(g)};let q=null;function z(V,j){if(h=j.getViewerPose(l||o),_=j,h!==null){let dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(R,p.framebuffer),t.setRenderTarget(R));let ct=!1;dt.length!==g.cameras.length&&(g.cameras.length=0,ct=!0);for(let ft=0;ft<dt.length;ft++){let Ot=dt[ft],qt=null;if(p!==null)qt=p.getViewport(Ot);else{let fe=u.getViewSubImage(f,Ot);qt=fe.viewport,ft===0&&(t.setRenderTargetTextures(R,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(R))}let Ht=x[ft];Ht===void 0&&(Ht=new Be,Ht.layers.enable(ft),Ht.viewport=new _e,x[ft]=Ht),Ht.matrix.fromArray(Ot.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Ot.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(qt.x,qt.y,qt.width,qt.height),ft===0&&(g.matrix.copy(Ht.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ct===!0&&g.cameras.push(Ht)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")){let ft=u.getDepthInformation(dt[0]);ft&&ft.isValid&&ft.texture&&y.init(t,ft,s.renderState)}}for(let dt=0;dt<C.length;dt++){let ct=S[dt],xt=C[dt];ct!==null&&xt!==void 0&&xt.update(ct,j,l||o)}q&&q(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}let tt=new Fu;tt.setAnimationLoop(z),this.setAnimationLoop=function(V){q=V},this.dispose=function(){}}},Fi=new rn,m_=new ie;function g_(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ou(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,R,C,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,R,C):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===nn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===nn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let R=t.get(d),C=R.envMap,S=R.envMapRotation;C&&(m.envMap.value=C,Fi.copy(S),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(m_.makeRotationFromEuler(Fi)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,R,C){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*R,m.scale.value=C*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,R){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let R=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function __(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,C){let S=C.program;n.uniformBlockBinding(R,S)}function l(R,C){let S=s[R.id];S===void 0&&(_(R),S=h(R),s[R.id]=S,R.addEventListener("dispose",m));let Z=C.program;n.updateUBOMapping(R,Z);let I=t.render.frame;r[R.id]!==I&&(f(R),r[R.id]=I)}function h(R){let C=u();R.__bindingPointIndex=C;let S=i.createBuffer(),Z=R.__size,I=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,Z,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,S),S}function u(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){let C=s[R.id],S=R.uniforms,Z=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let I=0,U=S.length;I<U;I++){let X=Array.isArray(S[I])?S[I]:[S[I]];for(let x=0,g=X.length;x<g;x++){let b=X[x];if(p(b,I,x,Z)===!0){let E=b.__offset,P=Array.isArray(b.value)?b.value:[b.value],L=0;for(let H=0;H<P.length;H++){let B=P[H],J=y(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,E+L,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,C,S,Z){let I=R.value,U=C+"_"+S;if(Z[U]===void 0)return typeof I=="number"||typeof I=="boolean"?Z[U]=I:Z[U]=I.clone(),!0;{let X=Z[U];if(typeof I=="number"||typeof I=="boolean"){if(X!==I)return Z[U]=I,!0}else if(X.equals(I)===!1)return X.copy(I),!0}return!1}function _(R){let C=R.uniforms,S=0,Z=16;for(let U=0,X=C.length;U<X;U++){let x=Array.isArray(C[U])?C[U]:[C[U]];for(let g=0,b=x.length;g<b;g++){let E=x[g],P=Array.isArray(E.value)?E.value:[E.value];for(let L=0,H=P.length;L<H;L++){let B=P[L],J=y(B),w=S%Z,G=w%J.boundary,K=w+G;S+=G,K!==0&&Z-K<J.storage&&(S+=Z-K),E.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=S,S+=J.storage}}}let I=S%Z;return I>0&&(S+=Z-I),R.__size=S,R.__cache={},this}function y(R){let C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),C}function m(R){let C=R.target;C.removeEventListener("dispose",m);let S=o.indexOf(C.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function d(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var vo=class{constructor(t={}){let{canvas:e=Md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=new Uint32Array(4),y=new Int32Array(4),m=null,d=null,R=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=vi,this.toneMappingExposure=1;let S=this,Z=!1,I=0,U=0,X=null,x=-1,g=null,b=new _e,E=new _e,P=null,L=new Xt(0),H=0,B=e.width,J=e.height,w=1,G=null,K=null,q=new _e(0,0,B,J),z=new _e(0,0,B,J),tt=!1,V=new or,j=!1,dt=!1,ct=new ie,xt=new ie,ft=new N,Ot=new _e,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function fe(){return X===null?w:1}let O=n;function Se(M,k){return e.getContext(M,k)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qc}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),O===null){let k="webgl2";if(O=Se(k,M),O===null)throw Se(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Jt,Qt,kt,he,Bt,A,v,Q,lt,nt,et,At,bt,gt,zt,pt,Nt,Wt,Zt,Dt,se,te,ve,W;function wt(){Jt=new Dg(O),Jt.init(),te=new u_(O,Jt),Qt=new Eg(O,Jt,t,te),kt=new c_(O,Jt),Qt.reverseDepthBuffer&&f&&kt.buffers.depth.setReversed(!0),he=new Og(O),Bt=new K0,A=new h_(O,Jt,kt,Bt,Qt,te,he),v=new Cg(S),Q=new Ig(S),lt=new Gd(O),ve=new Ag(O,lt),nt=new Ng(O,lt,he,ve),et=new Bg(O,nt,lt,he),Zt=new Fg(O,Qt,A),pt=new Rg(Bt),At=new Z0(S,v,Q,Jt,Qt,ve,pt),bt=new g_(S,Bt),gt=new $0,zt=new i_(Jt),Wt=new wg(S,v,Q,kt,et,p,c),Nt=new o_(S,et,Qt),W=new __(O,he,Qt,kt),Dt=new Tg(O,Jt,he),se=new Ug(O,Jt,he),he.programs=At.programs,S.capabilities=Qt,S.extensions=Jt,S.properties=Bt,S.renderLists=gt,S.shadowMap=Nt,S.state=kt,S.info=he}wt();let it=new Nc(S,O);this.xr=it,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=Jt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Jt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return w},this.setPixelRatio=function(M){M!==void 0&&(w=M,this.setSize(B,J,!1))},this.getSize=function(M){return M.set(B,J)},this.setSize=function(M,k,F=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,J=k,e.width=Math.floor(M*w),e.height=Math.floor(k*w),F===!0&&(e.style.width=M+"px",e.style.height=k+"px"),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(B*w,J*w).floor()},this.setDrawingBufferSize=function(M,k,F){B=M,J=k,w=F,e.width=Math.floor(M*F),e.height=Math.floor(k*F),this.setViewport(0,0,M,k)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(q)},this.setViewport=function(M,k,F,Y){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,k,F,Y),kt.viewport(b.copy(q).multiplyScalar(w).round())},this.getScissor=function(M){return M.copy(z)},this.setScissor=function(M,k,F,Y){M.isVector4?z.set(M.x,M.y,M.z,M.w):z.set(M,k,F,Y),kt.scissor(E.copy(z).multiplyScalar(w).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){kt.setScissorTest(tt=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(M=!0,k=!0,F=!0){let Y=0;if(M){let D=!1;if(X!==null){let ot=X.texture.format;D=ot===il||ot===nl||ot===el}if(D){let ot=X.texture.type,_t=ot===ti||ot===Gi||ot===sr||ot===ws||ot===jc||ot===Qc,St=Wt.getClearColor(),Tt=Wt.getClearAlpha(),$t=St.r,Ft=St.g,yt=St.b;_t?(_[0]=$t,_[1]=Ft,_[2]=yt,_[3]=Tt,O.clearBufferuiv(O.COLOR,0,_)):(y[0]=$t,y[1]=Ft,y[2]=yt,y[3]=Tt,O.clearBufferiv(O.COLOR,0,y))}else Y|=O.COLOR_BUFFER_BIT}k&&(Y|=O.DEPTH_BUFFER_BIT),F&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),gt.dispose(),zt.dispose(),Bt.dispose(),v.dispose(),Q.dispose(),et.dispose(),ve.dispose(),W.dispose(),At.dispose(),it.dispose(),it.removeEventListener("sessionstart",vt),it.removeEventListener("sessionend",mt),Rt.stop()};function ht(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Z=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),Z=!1;let M=he.autoReset,k=Nt.enabled,F=Nt.autoUpdate,Y=Nt.needsUpdate,D=Nt.type;wt(),he.autoReset=M,Nt.enabled=k,Nt.autoUpdate=F,Nt.needsUpdate=Y,Nt.type=D}function Ct(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function T(M){let k=M.target;k.removeEventListener("dispose",T),$(k)}function $(M){at(M),Bt.remove(M)}function at(M){let k=Bt.get(M).programs;k!==void 0&&(k.forEach(function(F){At.releaseProgram(F)}),M.isShaderMaterial&&At.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,F,Y,D,ot){k===null&&(k=qt);let _t=D.isMesh&&D.matrixWorld.determinant()<0,St=He(M,k,F,Y,D);kt.setMaterial(Y,_t);let Tt=F.index,$t=1;if(Y.wireframe===!0){if(Tt=nt.getWireframeAttribute(F),Tt===void 0)return;$t=2}let Ft=F.drawRange,yt=F.attributes.position,ne=Ft.start*$t,le=(Ft.start+Ft.count)*$t;ot!==null&&(ne=Math.max(ne,ot.start*$t),le=Math.min(le,(ot.start+ot.count)*$t)),Tt!==null?(ne=Math.max(ne,0),le=Math.min(le,Tt.count)):yt!=null&&(ne=Math.max(ne,0),le=Math.min(le,yt.count));let ge=le-ne;if(ge<0||ge===1/0)return;ve.setup(D,Y,St,F,Tt);let Ye,me=Dt;if(Tt!==null&&(Ye=lt.get(Tt),me=se,me.setIndex(Ye)),D.isMesh)Y.wireframe===!0?(kt.setLineWidth(Y.wireframeLinewidth*fe()),me.setMode(O.LINES)):me.setMode(O.TRIANGLES);else if(D.isLine){let Vt=Y.linewidth;Vt===void 0&&(Vt=1),kt.setLineWidth(Vt*fe()),D.isLineSegments?me.setMode(O.LINES):D.isLineLoop?me.setMode(O.LINE_LOOP):me.setMode(O.LINE_STRIP)}else D.isPoints?me.setMode(O.POINTS):D.isSprite&&me.setMode(O.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)me.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))me.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Vt=D._multiDrawStarts,Gn=D._multiDrawCounts,xe=D._multiDrawCount,An=Tt?lt.get(Tt).bytesPerElement:1,Qi=Bt.get(Y).currentProgram.getUniforms();for(let ln=0;ln<xe;ln++)Qi.setValue(O,"_gl_DrawID",ln),me.render(Vt[ln]/An,Gn[ln])}else if(D.isInstancedMesh)me.renderInstances(ne,ge,D.count);else if(F.isInstancedBufferGeometry){let Vt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Gn=Math.min(F.instanceCount,Vt);me.renderInstances(ne,ge,Gn)}else me.render(ne,ge)};function st(M,k,F){M.transparent===!0&&M.side===Ln&&M.forceSinglePass===!1?(M.side=nn,M.needsUpdate=!0,It(M,k,F),M.side=kn,M.needsUpdate=!0,It(M,k,F),M.side=Ln):It(M,k,F)}this.compile=function(M,k,F=null){F===null&&(F=M),d=zt.get(F),d.init(k),C.push(d),F.traverseVisible(function(D){D.isLight&&D.layers.test(k.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),M!==F&&M.traverseVisible(function(D){D.isLight&&D.layers.test(k.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),d.setupLights();let Y=new Set;return M.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let ot=D.material;if(ot)if(Array.isArray(ot))for(let _t=0;_t<ot.length;_t++){let St=ot[_t];st(St,F,D),Y.add(St)}else st(ot,F,D),Y.add(ot)}),C.pop(),d=null,Y},this.compileAsync=function(M,k,F=null){let Y=this.compile(M,k,F);return new Promise(D=>{function ot(){if(Y.forEach(function(_t){Bt.get(_t).currentProgram.isReady()&&Y.delete(_t)}),Y.size===0){D(M);return}setTimeout(ot,10)}Jt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ut=null;function Mt(M){ut&&ut(M)}function vt(){Rt.stop()}function mt(){Rt.start()}let Rt=new Fu;Rt.setAnimationLoop(Mt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(M){ut=M,it.setAnimationLoop(M),M===null?Rt.stop():Rt.start()},it.addEventListener("sessionstart",vt),it.addEventListener("sessionend",mt),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(k),k=it.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,k,X),d=zt.get(M,C.length),d.init(k),C.push(d),xt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),V.setFromProjectionMatrix(xt),dt=this.localClippingEnabled,j=pt.init(this.clippingPlanes,dt),m=gt.get(M,R.length),m.init(),R.push(m),it.enabled===!0&&it.isPresenting===!0){let ot=S.xr.getDepthSensingMesh();ot!==null&&Ut(ot,k,-1/0,S.sortObjects)}Ut(M,k,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(G,K),Ht=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ht&&Wt.addToRenderList(m,M),this.info.render.frame++,j===!0&&pt.beginShadows();let F=d.state.shadowsArray;Nt.render(F,M,k),j===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,D=m.transmissive;if(d.setupLights(),k.isArrayCamera){let ot=k.cameras;if(D.length>0)for(let _t=0,St=ot.length;_t<St;_t++){let Tt=ot[_t];Gt(Y,D,M,Tt)}Ht&&Wt.render(M);for(let _t=0,St=ot.length;_t<St;_t++){let Tt=ot[_t];Lt(m,M,Tt,Tt.viewport)}}else D.length>0&&Gt(Y,D,M,k),Ht&&Wt.render(M),Lt(m,M,k);X!==null&&(A.updateMultisampleRenderTarget(X),A.updateRenderTargetMipmap(X)),M.isScene===!0&&M.onAfterRender(S,M,k),ve.resetDefaultState(),x=-1,g=null,C.pop(),C.length>0?(d=C[C.length-1],j===!0&&pt.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Ut(M,k,F,Y){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||V.intersectsSprite(M)){Y&&Ot.setFromMatrixPosition(M.matrixWorld).applyMatrix4(xt);let _t=et.update(M),St=M.material;St.visible&&m.push(M,_t,St,F,Ot.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||V.intersectsObject(M))){let _t=et.update(M),St=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ot.copy(M.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ot.copy(_t.boundingSphere.center)),Ot.applyMatrix4(M.matrixWorld).applyMatrix4(xt)),Array.isArray(St)){let Tt=_t.groups;for(let $t=0,Ft=Tt.length;$t<Ft;$t++){let yt=Tt[$t],ne=St[yt.materialIndex];ne&&ne.visible&&m.push(M,_t,ne,F,Ot.z,yt)}}else St.visible&&m.push(M,_t,St,F,Ot.z,null)}}let ot=M.children;for(let _t=0,St=ot.length;_t<St;_t++)Ut(ot[_t],k,F,Y)}function Lt(M,k,F,Y){let D=M.opaque,ot=M.transmissive,_t=M.transparent;d.setupLightsView(F),j===!0&&pt.setGlobalState(S.clippingPlanes,F),Y&&kt.viewport(b.copy(Y)),D.length>0&&re(D,k,F),ot.length>0&&re(ot,k,F),_t.length>0&&re(_t,k,F),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Gt(M,k,F,Y){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new ni(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?mr:ti,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));let ot=d.state.transmissionRenderTarget[Y.id],_t=Y.viewport||b;ot.setSize(_t.z,_t.w);let St=S.getRenderTarget();S.setRenderTarget(ot),S.getClearColor(L),H=S.getClearAlpha(),H<1&&S.setClearColor(16777215,.5),S.clear(),Ht&&Wt.render(F);let Tt=S.toneMapping;S.toneMapping=vi;let $t=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),j===!0&&pt.setGlobalState(S.clippingPlanes,Y),re(M,F,Y),A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let yt=0,ne=k.length;yt<ne;yt++){let le=k[yt],ge=le.object,Ye=le.geometry,me=le.material,Vt=le.group;if(me.side===Ln&&ge.layers.test(Y.layers)){let Gn=me.side;me.side=nn,me.needsUpdate=!0,ue(ge,F,Y,Ye,me,Vt),me.side=Gn,me.needsUpdate=!0,Ft=!0}}Ft===!0&&(A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot))}S.setRenderTarget(St),S.setClearColor(L,H),$t!==void 0&&(Y.viewport=$t),S.toneMapping=Tt}function re(M,k,F){let Y=k.isScene===!0?k.overrideMaterial:null;for(let D=0,ot=M.length;D<ot;D++){let _t=M[D],St=_t.object,Tt=_t.geometry,$t=Y===null?_t.material:Y,Ft=_t.group;St.layers.test(F.layers)&&ue(St,k,F,Tt,$t,Ft)}}function ue(M,k,F,Y,D,ot){M.onBeforeRender(S,k,F,Y,D,ot),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(S,k,F,Y,M,ot),D.transparent===!0&&D.side===Ln&&D.forceSinglePass===!1?(D.side=nn,D.needsUpdate=!0,S.renderBufferDirect(F,k,Y,D,M,ot),D.side=kn,D.needsUpdate=!0,S.renderBufferDirect(F,k,Y,D,M,ot),D.side=Ln):S.renderBufferDirect(F,k,Y,D,M,ot),M.onAfterRender(S,k,F,Y,D,ot)}function It(M,k,F){k.isScene!==!0&&(k=qt);let Y=Bt.get(M),D=d.state.lights,ot=d.state.shadowsArray,_t=D.state.version,St=At.getParameters(M,D.state,ot,k,F),Tt=At.getProgramCacheKey(St),$t=Y.programs;Y.environment=M.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(M.isMeshStandardMaterial?Q:v).get(M.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,$t===void 0&&(M.addEventListener("dispose",T),$t=new Map,Y.programs=$t);let Ft=$t.get(Tt);if(Ft!==void 0){if(Y.currentProgram===Ft&&Y.lightsStateVersion===_t)return ae(M,St),Ft}else St.uniforms=At.getUniforms(M),M.onBeforeCompile(St,S),Ft=At.acquireProgram(St,Tt),$t.set(Tt,Ft),Y.uniforms=St.uniforms;let yt=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(yt.clippingPlanes=pt.uniform),ae(M,St),Y.needsLights=Ue(M),Y.lightsStateVersion=_t,Y.needsLights&&(yt.ambientLightColor.value=D.state.ambient,yt.lightProbe.value=D.state.probe,yt.directionalLights.value=D.state.directional,yt.directionalLightShadows.value=D.state.directionalShadow,yt.spotLights.value=D.state.spot,yt.spotLightShadows.value=D.state.spotShadow,yt.rectAreaLights.value=D.state.rectArea,yt.ltc_1.value=D.state.rectAreaLTC1,yt.ltc_2.value=D.state.rectAreaLTC2,yt.pointLights.value=D.state.point,yt.pointLightShadows.value=D.state.pointShadow,yt.hemisphereLights.value=D.state.hemi,yt.directionalShadowMap.value=D.state.directionalShadowMap,yt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,yt.spotShadowMap.value=D.state.spotShadowMap,yt.spotLightMatrix.value=D.state.spotLightMatrix,yt.spotLightMap.value=D.state.spotLightMap,yt.pointShadowMap.value=D.state.pointShadowMap,yt.pointShadowMatrix.value=D.state.pointShadowMatrix),Y.currentProgram=Ft,Y.uniformsList=null,Ft}function Kt(M){if(M.uniformsList===null){let k=M.currentProgram.getUniforms();M.uniformsList=vs.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function ae(M,k){let F=Bt.get(M);F.outputColorSpace=k.outputColorSpace,F.batching=k.batching,F.batchingColor=k.batchingColor,F.instancing=k.instancing,F.instancingColor=k.instancingColor,F.instancingMorph=k.instancingMorph,F.skinning=k.skinning,F.morphTargets=k.morphTargets,F.morphNormals=k.morphNormals,F.morphColors=k.morphColors,F.morphTargetsCount=k.morphTargetsCount,F.numClippingPlanes=k.numClippingPlanes,F.numIntersection=k.numClipIntersection,F.vertexAlphas=k.vertexAlphas,F.vertexTangents=k.vertexTangents,F.toneMapping=k.toneMapping}function He(M,k,F,Y,D){k.isScene!==!0&&(k=qt),A.resetTextureUnits();let ot=k.fog,_t=Y.isMeshStandardMaterial?k.environment:null,St=X===null?S.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:$e,Tt=(Y.isMeshStandardMaterial?Q:v).get(Y.envMap||_t),$t=Y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ft=!!F.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),yt=!!F.morphAttributes.position,ne=!!F.morphAttributes.normal,le=!!F.morphAttributes.color,ge=vi;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ge=S.toneMapping);let Ye=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,me=Ye!==void 0?Ye.length:0,Vt=Bt.get(Y),Gn=d.state.lights;if(j===!0&&(dt===!0||M!==g)){let mn=M===g&&Y.id===x;pt.setState(Y,M,mn)}let xe=!1;Y.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Gn.state.version||Vt.outputColorSpace!==St||D.isBatchedMesh&&Vt.batching===!1||!D.isBatchedMesh&&Vt.batching===!0||D.isBatchedMesh&&Vt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Vt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Vt.instancing===!1||!D.isInstancedMesh&&Vt.instancing===!0||D.isSkinnedMesh&&Vt.skinning===!1||!D.isSkinnedMesh&&Vt.skinning===!0||D.isInstancedMesh&&Vt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Vt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Vt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Vt.instancingMorph===!1&&D.morphTexture!==null||Vt.envMap!==Tt||Y.fog===!0&&Vt.fog!==ot||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==pt.numPlanes||Vt.numIntersection!==pt.numIntersection)||Vt.vertexAlphas!==$t||Vt.vertexTangents!==Ft||Vt.morphTargets!==yt||Vt.morphNormals!==ne||Vt.morphColors!==le||Vt.toneMapping!==ge||Vt.morphTargetsCount!==me)&&(xe=!0):(xe=!0,Vt.__version=Y.version);let An=Vt.currentProgram;xe===!0&&(An=It(Y,k,D));let Qi=!1,ln=!1,Vs=!1,Te=An.getUniforms(),Fn=Vt.uniforms;if(kt.useProgram(An.program)&&(Qi=!0,ln=!0,Vs=!0),Y.id!==x&&(x=Y.id,ln=!0),Qi||g!==M){kt.buffers.depth.getReversed()?(ct.copy(M.projectionMatrix),bd(ct),wd(ct),Te.setValue(O,"projectionMatrix",ct)):Te.setValue(O,"projectionMatrix",M.projectionMatrix),Te.setValue(O,"viewMatrix",M.matrixWorldInverse);let li=Te.map.cameraPosition;li!==void 0&&li.setValue(O,ft.setFromMatrixPosition(M.matrixWorld)),Qt.logarithmicDepthBuffer&&Te.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Te.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),g!==M&&(g=M,ln=!0,Vs=!0)}if(D.isSkinnedMesh){Te.setOptional(O,D,"bindMatrix"),Te.setOptional(O,D,"bindMatrixInverse");let mn=D.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Te.setValue(O,"boneTexture",mn.boneTexture,A))}D.isBatchedMesh&&(Te.setOptional(O,D,"batchingTexture"),Te.setValue(O,"batchingTexture",D._matricesTexture,A),Te.setOptional(O,D,"batchingIdTexture"),Te.setValue(O,"batchingIdTexture",D._indirectTexture,A),Te.setOptional(O,D,"batchingColorTexture"),D._colorsTexture!==null&&Te.setValue(O,"batchingColorTexture",D._colorsTexture,A));let Hs=F.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&Zt.update(D,F,An),(ln||Vt.receiveShadow!==D.receiveShadow)&&(Vt.receiveShadow=D.receiveShadow,Te.setValue(O,"receiveShadow",D.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Fn.envMap.value=Tt,Fn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Fn.envMapIntensity.value=k.environmentIntensity),ln&&(Te.setValue(O,"toneMappingExposure",S.toneMappingExposure),Vt.needsLights&&Ne(Fn,Vs),ot&&Y.fog===!0&&bt.refreshFogUniforms(Fn,ot),bt.refreshMaterialUniforms(Fn,Y,w,J,d.state.transmissionRenderTarget[M.id]),vs.upload(O,Kt(Vt),Fn,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(vs.upload(O,Kt(Vt),Fn,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Te.setValue(O,"center",D.center),Te.setValue(O,"modelViewMatrix",D.modelViewMatrix),Te.setValue(O,"normalMatrix",D.normalMatrix),Te.setValue(O,"modelMatrix",D.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let mn=Y.uniformsGroups;for(let li=0,hi=mn.length;li<hi;li++){let Ql=mn[li];W.update(Ql,An),W.bind(Ql,An)}}return An}function Ne(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function Ue(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(M,k,F){Bt.get(M.texture).__webglTexture=k,Bt.get(M.depthTexture).__webglTexture=F;let Y=Bt.get(M);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=F===void 0,Y.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,k){let F=Bt.get(M);F.__webglFramebuffer=k,F.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(M,k=0,F=0){X=M,I=k,U=F;let Y=!0,D=null,ot=!1,_t=!1;if(M){let Tt=Bt.get(M);if(Tt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1;else if(Tt.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(Tt.__hasExternalTextures)A.rebindTextures(M,Bt.get(M.texture).__webglTexture,Bt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let yt=M.depthTexture;if(Tt.__boundDepthTexture!==yt){if(yt!==null&&Bt.has(yt)&&(M.width!==yt.image.width||M.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}let $t=M.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(_t=!0);let Ft=Bt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[k])?D=Ft[k][F]:D=Ft[k],ot=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?D=Bt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?D=Ft[F]:D=Ft,b.copy(M.viewport),E.copy(M.scissor),P=M.scissorTest}else b.copy(q).multiplyScalar(w).floor(),E.copy(z).multiplyScalar(w).floor(),P=tt;if(kt.bindFramebuffer(O.FRAMEBUFFER,D)&&Y&&kt.drawBuffers(M,D),kt.viewport(b),kt.scissor(E),kt.setScissorTest(P),ot){let Tt=Bt.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,F)}else if(_t){let Tt=Bt.get(M.texture),$t=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Tt.__webglTexture,F||0,$t)}x=-1},this.readRenderTargetPixels=function(M,k,F,Y,D,ot,_t){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){kt.bindFramebuffer(O.FRAMEBUFFER,St);try{let Tt=M.texture,$t=Tt.format,Ft=Tt.type;if(!Qt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-Y&&F>=0&&F<=M.height-D&&O.readPixels(k,F,Y,D,te.convert($t),te.convert(Ft),ot)}finally{let Tt=X!==null?Bt.get(X).__webglFramebuffer:null;kt.bindFramebuffer(O.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,k,F,Y,D,ot,_t){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){let Tt=M.texture,$t=Tt.format,Ft=Tt.type;if(!Qt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=M.width-Y&&F>=0&&F<=M.height-D){kt.bindFramebuffer(O.FRAMEBUFFER,St);let yt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,yt),O.bufferData(O.PIXEL_PACK_BUFFER,ot.byteLength,O.STREAM_READ),O.readPixels(k,F,Y,D,te.convert($t),te.convert(Ft),0);let ne=X!==null?Bt.get(X).__webglFramebuffer:null;kt.bindFramebuffer(O.FRAMEBUFFER,ne);let le=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Sd(O,le,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,yt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ot),O.deleteBuffer(yt),O.deleteSync(le),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,k=null,F=0){M.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1]);let Y=Math.pow(2,-F),D=Math.floor(M.image.width*Y),ot=Math.floor(M.image.height*Y),_t=k!==null?k.x:0,St=k!==null?k.y:0;A.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,F,0,0,_t,St,D,ot),kt.unbindTexture()},this.copyTextureToTexture=function(M,k,F=null,Y=null,D=0){M.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,M=arguments[1],k=arguments[2],D=arguments[3]||0,F=null);let ot,_t,St,Tt,$t,Ft,yt,ne,le,ge=M.isCompressedTexture?M.mipmaps[D]:M.image;F!==null?(ot=F.max.x-F.min.x,_t=F.max.y-F.min.y,St=F.isBox3?F.max.z-F.min.z:1,Tt=F.min.x,$t=F.min.y,Ft=F.isBox3?F.min.z:0):(ot=ge.width,_t=ge.height,St=ge.depth||1,Tt=0,$t=0,Ft=0),Y!==null?(yt=Y.x,ne=Y.y,le=Y.z):(yt=0,ne=0,le=0);let Ye=te.convert(k.format),me=te.convert(k.type),Vt;k.isData3DTexture?(A.setTexture3D(k,0),Vt=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),Vt=O.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),Vt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let Gn=O.getParameter(O.UNPACK_ROW_LENGTH),xe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),An=O.getParameter(O.UNPACK_SKIP_PIXELS),Qi=O.getParameter(O.UNPACK_SKIP_ROWS),ln=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ge.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ge.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Tt),O.pixelStorei(O.UNPACK_SKIP_ROWS,$t),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ft);let Vs=M.isDataArrayTexture||M.isData3DTexture,Te=k.isDataArrayTexture||k.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let Fn=Bt.get(M),Hs=Bt.get(k),mn=Bt.get(Fn.__renderTarget),li=Bt.get(Hs.__renderTarget);kt.bindFramebuffer(O.READ_FRAMEBUFFER,mn.__webglFramebuffer),kt.bindFramebuffer(O.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let hi=0;hi<St;hi++)Vs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.get(M).__webglTexture,D,Ft+hi),M.isDepthTexture?(Te&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.get(k).__webglTexture,D,le+hi),O.blitFramebuffer(Tt,$t,ot,_t,yt,ne,ot,_t,O.DEPTH_BUFFER_BIT,O.NEAREST)):Te?O.copyTexSubImage3D(Vt,D,yt,ne,le+hi,Tt,$t,ot,_t):O.copyTexSubImage2D(Vt,D,yt,ne,le+hi,Tt,$t,ot,_t);kt.bindFramebuffer(O.READ_FRAMEBUFFER,null),kt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Te?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Vt,D,yt,ne,le,ot,_t,St,Ye,me,ge.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Vt,D,yt,ne,le,ot,_t,St,Ye,ge.data):O.texSubImage3D(Vt,D,yt,ne,le,ot,_t,St,Ye,me,ge):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,D,yt,ne,ot,_t,Ye,me,ge.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,D,yt,ne,ge.width,ge.height,Ye,ge.data):O.texSubImage2D(O.TEXTURE_2D,D,yt,ne,ot,_t,Ye,me,ge);O.pixelStorei(O.UNPACK_ROW_LENGTH,Gn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,An),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ln),D===0&&k.generateMipmaps&&O.generateMipmap(Vt),kt.unbindTexture()},this.copyTextureToTexture3D=function(M,k,F=null,Y=null,D=0){return M.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,Y=arguments[1]||null,M=arguments[2],k=arguments[3],D=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,k,F,Y,D)},this.initRenderTarget=function(M){Bt.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),kt.unbindTexture()},this.resetState=function(){I=0,U=0,X=null,kt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var Mo=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ar=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xc,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new N,cr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var eu=new N,nu=new _e,iu=new _e,x_=new N,su=new ie,$r=new N,La=new fn,ru=new ie,Pa=new Mi,So=class extends Pe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sh,this.bindMatrix=new ie,this.bindMatrixInverse=new ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,$r),this.boundingBox.expandByPoint($r)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,$r),this.boundingSphere.expandByPoint($r)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(s),t.ray.intersectsSphere(La)!==!1&&(ru.copy(s).invert(),Pa.copy(t.ray).applyMatrix4(ru),!(this.boundingBox!==null&&Pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Pa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new _e,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;nu.fromBufferAttribute(s.attributes.skinIndex,t),iu.fromBufferAttribute(s.attributes.skinWeight,t),eu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=iu.getComponent(r);if(o!==0){let a=nu.getComponent(r);su.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(x_.copy(eu).applyMatrix4(su),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},lr=class extends Ce{constructor(){super(),this.isBone=!0,this.type="Bone"}},bo=class extends We{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Je,h=Je,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ou=new ie,y_=new ie,wo=class i{constructor(t=[],e=[]){this.uuid=Dn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ie)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new ie;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:y_;ou.multiplyMatrices(a,e[r]),ou.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new bo(e,t,t,_n,In);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new lr),this.bones.push(o),this.boneInverses.push(new ie().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},Yi=class extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ps=new ie,au=new ie,jr=[],cu=new sn,v_=new ie,qs=new Pe,Zs=new fn,Ao=class extends Pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,v_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),cu.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(cu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),Zs.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(Zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(n),t.ray.intersectsSphere(Zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),au.multiplyMatrices(n,ps),qs.matrixWorld=au,qs.raycast(t,jr);for(let o=0,a=jr.length;o<a;o++){let c=jr[o];c.instanceId=r,c.object=this,e.push(c)}jr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bo(new Float32Array(s*this.count),s,this.count,tl,In));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var hr=class extends dn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},To=new N,Eo=new N,lu=new ie,Ks=new Mi,Qr=new fn,Ia=new N,hu=new N,Ps=class extends Ce{constructor(t=new vn,e=new hr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)To.fromBufferAttribute(e,s-1),Eo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=To.distanceTo(Eo);t.setAttribute("lineDistance",new yn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;lu.copy(s).invert(),Ks.copy(t.ray).applyMatrix4(lu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=p,m=_-1;y<m;y+=l){let d=h.getX(y),R=h.getX(y+1),C=to(this,t,Ks,c,d,R);C&&e.push(C)}if(this.isLineLoop){let y=h.getX(_-1),m=h.getX(p),d=to(this,t,Ks,c,y,m);d&&e.push(d)}}else{let p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=p,m=_-1;y<m;y+=l){let d=to(this,t,Ks,c,y,y+1);d&&e.push(d)}if(this.isLineLoop){let y=to(this,t,Ks,c,_-1,p);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function to(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(To.fromBufferAttribute(o,s),Eo.fromBufferAttribute(o,r),e.distanceSqToSegment(To,Eo,Ia,hu)>n)return;Ia.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ia);if(!(c<t.near||c>t.far))return{distance:c,point:hu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var uu=new N,fu=new N,Ro=class extends Ps{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)uu.fromBufferAttribute(e,s),fu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uu.distanceTo(fu);t.setAttribute("lineDistance",new yn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Co=class extends Ps{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},ur=class extends dn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},du=new ie,Uc=new Mi,eo=new fn,no=new N,Lo=class extends Ce{constructor(t=new vn,e=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,t.ray.intersectsSphere(eo)===!1)return;du.copy(s).invert(),Uc.copy(t.ray).applyMatrix4(du);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=f,y=p;_<y;_++){let m=l.getX(_);no.fromBufferAttribute(u,m),pu(no,m,c,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,y=p;_<y;_++)no.fromBufferAttribute(u,_),pu(no,_,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pu(i,t,e,n,s,r,o){let a=Uc.distanceSqToPoint(i);if(a<e){let c=new N;Uc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Po=class extends We{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Nn=class extends dn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},pn=class extends Nn{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new jt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function io(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function M_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function S_(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function mu(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function Hu(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}var Si=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oc=class extends Si{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case oh:r=t,a=2*e-n;break;case ah:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case oh:o=t,c=2*n-e;break;case ah:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),y=_*_,m=y*_,d=-f*m+2*f*y-f*_,R=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*_+1,C=(-1-p)*m+(1.5+p)*y+.5*_,S=p*m-p*y;for(let Z=0;Z!==a;++Z)r[Z]=d*o[h+Z]+R*o[l+Z]+C*o[c+Z]+S*o[u+Z];return r}},Fc=class extends Si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Bc=class extends Si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=io(e,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:io(t.times,Array),values:io(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ts:e=this.InterpolantFactoryMethodDiscrete;break;case Es:e=this.InterpolantFactoryMethodLinear;break;case ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return Es;case this.InterpolantFactoryMethodSmooth:return ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&M_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let _=0;_!==n;++_){let y=e[u+_];if(y!==e[f+_]||y!==e[p+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Es;var bi=class extends Mn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Ts;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends Mn{};Io.prototype.ValueTypeName="color";var ii=class extends Mn{};ii.prototype.ValueTypeName="number";var zc=class extends Si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ye.slerpFlat(r,0,o,l-a,o,l,c);return r}},si=class extends Mn{InterpolantFactoryMethodLinear(t){return new zc(this.times,this.values,this.getValueSize(),t)}};si.prototype.ValueTypeName="quaternion";si.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends Mn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Ts;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends Mn{};ri.prototype.ValueTypeName="vector";var Do=class{constructor(t="",e=-1,n=[],s=Zf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(w_(n[o]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Mn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=S_(c);c=mu(c,1,h),l=mu(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ii(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,_,y){if(p.length!==0){let m=[],d=[];Hu(p,m,d,_),m.length!==0&&y.push(new u(f,m,d))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let y=0;y<f[_].morphTargets.length;y++)p[f[_].morphTargets[y]]=-1;for(let y in p){let m=[],d=[];for(let R=0;R!==f[_].morphTargets.length;++R){let C=f[_];m.push(C.time),d.push(C.morphTarget===y?1:0)}s.push(new ii(".morphTargetInfluence["+y+"]",m,d))}c=p.length*o}else{let p=".bones["+e[u].name+"]";n(ri,p+".position",f,"pos",s),n(si,p+".quaternion",f,"rot",s),n(ri,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function b_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ii;case"vector":case"vector2":case"vector3":case"vector4":return ri;case"color":return Io;case"quaternion":return si;case"bool":case"boolean":return bi;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function w_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=b_(i.type);if(i.times===void 0){let e=[],n=[];Hu(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}var xi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},kc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},A_=new kc,oi=class{constructor(t){this.manager=t!==void 0?t:A_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kn={},Vc=class extends Error{constructor(t,e){super(t),this.response=e}},fr=class extends oi{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=xi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Kn[t]!==void 0){Kn[t].push({onLoad:e,onProgress:n,onError:s});return}Kn[t]=[],Kn[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Kn[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0,y=0,m=new ReadableStream({start(d){R();function R(){u.read().then(({done:C,value:S})=>{if(C)d.close();else{y+=S.byteLength;let Z=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let I=0,U=h.length;I<U;I++){let X=h[I];X.onProgress&&X.onProgress(Z)}d.enqueue(S),R()}},C=>{d.error(C)})}}});return new Response(m)}else throw new Vc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{xi.add(t,l);let h=Kn[t];delete Kn[t];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Kn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Kn[t];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Hc=class extends oi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=xi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=rr("img");function c(){h(),xi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var No=class extends oi{constructor(t){super(t)}load(t,e,n,s){let r=new We,o=new Hc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Is=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Uo=class extends Is{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Da=new ie,gu=new N,_u=new N,dr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(gu),_u.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_u),e.updateMatrixWorld(),Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Gc=class extends dr{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Rs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Oo=class extends Is{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},xu=new ie,Js=new N,Na=new N,Wc=class extends dr{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new jt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),Na.copy(n.position),Na.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Na),n.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu)}},Fo=class extends Is{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Xc=class extends dr{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qi=class extends Is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Xc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ai=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Bo=class extends oi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=xi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return xi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),xi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});xi.add(t,c),r.manager.itemStart(t)}};var ol="\\[\\]\\.:\\/",T_=new RegExp("["+ol+"]","g"),al="[^"+ol+"]",E_="[^"+ol.replace("\\.","")+"]",R_=/((?:WC+[\/:])*)/.source.replace("WC",al),C_=/(WCOD+)?/.source.replace("WCOD",E_),L_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),P_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),I_=new RegExp("^"+R_+C_+L_+P_+"$"),D_=["material","materials","bones","map"],Yc=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(T_,"")}static parseTrackName(t){let e=I_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);D_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Yc;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yx=new Float32Array(1);var pr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var zo=class extends ei{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);function cl(i,t){if(t===Pu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===gr||t===Vo){let e=i.getIndex();if(e===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,s=[];if(t===gr)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}var Xo=class extends oi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new ml(e)}),this.register(function(e){return new gl(e)}),this.register(function(e){return new Al(e)}),this.register(function(e){return new Tl(e)}),this.register(function(e){return new El(e)}),this.register(function(e){return new xl(e)}),this.register(function(e){return new yl(e)}),this.register(function(e){return new vl(e)}),this.register(function(e){return new Ml(e)}),this.register(function(e){return new pl(e)}),this.register(function(e){return new Sl(e)}),this.register(function(e){return new _l(e)}),this.register(function(e){return new wl(e)}),this.register(function(e){return new bl(e)}),this.register(function(e){return new fl(e)}),this.register(function(e){return new Rl(e)}),this.register(function(e){return new Cl(e)})}load(t,e,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ai.extractUrlBase(t);o=Ai.resolveURL(l,this.path)}else o=Ai.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new fr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r,o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===qu){try{o[de.KHR_BINARY_GLTF]=new Ll(t)}catch(u){s&&s(u);return}r=JSON.parse(o[de.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Fl(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case de.KHR_MATERIALS_UNLIT:o[u]=new dl;break;case de.KHR_DRACO_MESH_COMPRESSION:o[u]=new Pl(r,this.dracoLoader);break;case de.KHR_TEXTURE_TRANSFORM:o[u]=new Il;break;case de.KHR_MESH_QUANTIZATION:o[u]=new Dl;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(t,e){let n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}};function N_(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}var de={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fl=class{constructor(t){this.parser=t,this.name=de.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,s=e.cache.get(n);if(s)return s;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new Xt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],$e);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new qi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Fo(h),l.distance=u;break;case"spot":l=new Oo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ai(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},dl=class{constructor(){this.name=de.KHR_MATERIALS_UNLIT}getMaterialType(){return Vn}extendParams(t,e,n){let s=[];t.color=new Xt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],$e),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Le))}return Promise.all(s)}},pl=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},ml=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new jt(a,a)}return Promise.all(r)}},gl=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},_l=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},xl=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new Xt(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],$e)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Le)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},yl=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},vl=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Xt().setRGB(a[0],a[1],a[2],$e),Promise.all(r)}},Ml=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Sl=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new Xt().setRGB(a[0],a[1],a[2],$e),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Le)),Promise.all(r)}},bl=class{constructor(t){this.parser=t,this.name=de.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},wl=class{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Al=class{constructor(t){this.parser=t,this.name=de.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},Tl=class{constructor(t){this.parser=t,this.name=de.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},El=class{constructor(t){this.parser=t,this.name=de.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Rl=class{constructor(t){this.name=de.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},Cl=class{constructor(t){this.name=de.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=e.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Sn.TRIANGLES&&l.mode!==Sn.TRIANGLE_STRIP&&l.mode!==Sn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let _ of u){let y=new ie,m=new N,d=new ye,R=new N(1,1,1),C=new Ao(_.geometry,_.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,S),c.SCALE&&R.fromBufferAttribute(c.SCALE,S),C.setMatrixAt(S,y.compose(m,d,R));for(let S in c)if(S==="_COLOR_0"){let Z=c[S];C.instanceColor=new Yi(Z.array,Z.itemSize,Z.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,c[S]);Ce.prototype.copy.call(C,_),this.parser.assignFinalMaterial(C),p.push(C)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},qu="glTF",_r=12,Gu={JSON:1313821514,BIN:5130562},Ll=class{constructor(t){this.name=de.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,_r),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==qu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-_r,r=new DataView(t,_r),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Gu.JSON){let l=new Uint8Array(t,_r+o,a);this.content=n.decode(l)}else if(c===Gu.BIN){let l=_r+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Pl=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=de.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Ul[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=Ul[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],p=Us[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let _ in p.attributes){let y=p.attributes[_],m=c[_];m!==void 0&&(y.normalized=m)}u(p)},a,l,$e,f)})})}},Il=class{constructor(){this.name=de.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Dl=class{constructor(){this.name=de.KHR_MESH_QUANTIZATION}},Yo=class extends Si{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-e,u=(n-e)/h,f=u*u,p=f*u,_=t*l,y=_-l,m=-2*p+3*f,d=p-f,R=1-m,C=d-f+u;for(let S=0;S!==a;S++){let Z=o[y+S+a],I=o[y+S+c]*h,U=o[_+S+a],X=o[_+S]*h;r[S]=R*Z+C*I+m*U+d*X}return r}},U_=new ye,Nl=class extends Yo{interpolate_(t,e,n,s){let r=super.interpolate_(t,e,n,s);return U_.fromArray(r).normalize().toArray(r),r}},Sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wu={9728:Je,9729:en,9984:Jc,9985:Qs,9986:ms,9987:zn},Xu={33071:$n,33648:ir,10497:Hi},ll={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ul={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},O_={CUBICSPLINE:void 0,LINEAR:Es,STEP:Ts},hl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function F_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Nn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),i.DefaultMaterial}function Ji(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ai(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function B_(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function z_(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function k_(i){let t,e=i.extensions&&i.extensions[de.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ul(e.attributes):t=i.indices+":"+ul(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+ul(i.targets[n]);return t}function ul(i){let t="",e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Ol(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function V_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var H_=new ie,Fl=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new N_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new No(this.options.manager):this.textureLoader=new Bo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ji(r,a,s),ai(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){let o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){let o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let s=t(e[n]);if(s)return s}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let s=0;s<e.length;s++){let r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[de.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ai.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){let e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){let o=ll[s.type],a=Us[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ie(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=ll[s.type],l=Us[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0,y,m;if(p&&p!==u){let d=Math.floor(f/p),R="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,C=e.cache.get(R);C||(y=new l(a,d*p,s.count*p/h),C=new ar(y,p/h),e.cache.add(R,C)),m=new cr(C,c,f%p/h,_)}else a===null?y=new l(s.count*c):y=new l(a,f,s.count*c),m=new Ie(y,c,_);if(s.sparse!==void 0){let d=ll.SCALAR,R=Us[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,Z=new R(o[1],C,s.sparse.count*d),I=new l(o[2],S,s.sparse.count*c);a!==null&&(m=new Ie(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let U=0,X=Z.length;U<X;U++){let x=Z[U];if(m.setX(x,I[U*c]),c>=2&&m.setY(x,I[U*c+1]),c>=3&&m.setZ(x,I[U*c+2]),c>=4&&m.setW(x,I[U*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Wu[f.magFilter]||en,h.minFilter=Wu[f.minFilter]||zn,h.wrapS=Xu[f.wrapS]||Hi,h.wrapT=Xu[f.wrapT]||Hi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Je&&h.minFilter!==en,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=s.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let _=f;e.isImageBitmapLoader===!0&&(_=function(y){let m=new We(y);m.needsUpdate=!0,f(m)}),e.load(Ai.resolveURL(u,r.path),_,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),ai(u,o),u.userData.mimeType=o.mimeType||V_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[de.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[de.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[de.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ur,dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new hr,dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Nn}loadMaterial(t){let e=this,n=this.json,s=this.extensions,r=n.materials[t],o,a={},c=r.extensions||{},l=[];if(c[de.KHR_MATERIALS_UNLIT]){let u=s[de.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Xt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],$e),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Le)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Ln);let h=r.alphaMode||hl.OPAQUE;if(h===hl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===hl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Vn&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new jt(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Vn&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Vn){let u=r.emissiveFactor;a.emissive=new Xt().setRGB(u[0],u[1],u[2],$e)}return r.emissiveTexture!==void 0&&o!==Vn&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Le)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ai(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ji(s,u,r),u})}createUniqueName(t){let e=Ae.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[de.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Yu(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],h=k_(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[de.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Yu(new vn,l,e),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?F_(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,_=h.length;p<_;p++){let y=h[p],m=o[p],d,R=l[p];if(m.mode===Sn.TRIANGLES||m.mode===Sn.TRIANGLE_STRIP||m.mode===Sn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new So(y,R):new Pe(y,R),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Sn.TRIANGLE_STRIP?d.geometry=cl(d.geometry,Vo):m.mode===Sn.TRIANGLE_FAN&&(d.geometry=cl(d.geometry,gr));else if(m.mode===Sn.LINES)d=new Ro(y,R);else if(m.mode===Sn.LINE_STRIP)d=new Ps(y,R);else if(m.mode===Sn.LINE_LOOP)d=new Co(y,R);else if(m.mode===Sn.POINTS)d=new Lo(y,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&z_(d,r),d.name=e.createUniqueName(r.name||"mesh_"+t),ai(d,r),m.extensions&&Ji(s,d,m),e.assignFinalMaterial(d),u.push(d)}for(let p=0,_=u.length;p<_;p++)e.associations.set(u[p],{meshes:t,primitives:p});if(u.length===1)return r.extensions&&Ji(s,u[0],r),u[0];let f=new xn;r.extensions&&Ji(s,f,r),e.associations.set(f,{meshes:t});for(let p=0,_=u.length;p<_;p++)f.add(u[p]);return f})}loadCamera(t){let e,n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Be(Go.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Ls(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ai(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new ie;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new wo(a,c)})}loadAnimation(t){let e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],_=s.samplers[p.sampler],y=p.target,m=y.node,d=s.parameters!==void 0?s.parameters[_.input]:_.input,R=s.parameters!==void 0?s.parameters[_.output]:_.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",R)),l.push(_),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],_=u[2],y=u[3],m=u[4],d=[];for(let R=0,C=f.length;R<C;R++){let S=f[R],Z=p[R],I=_[R],U=y[R],X=m[R];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let x=n._createAnimationTracks(S,Z,I,U,X);if(x)for(let g=0;g<x.length;g++)d.push(x[g])}return new Do(r,void 0,d)})}createNodeMesh(t){let e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){let e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,H_)});for(let p=0,_=u.length;p<_;p++)h.add(u[p]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new lr:l.length>1?h=new xn:l.length===1?h=l[0]:h=new Ce,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ai(h,r),r.extensions&&Ji(n,h,r),r.matrix!==void 0){let u=new ie;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],s=this,r=new xn;n.name&&(r.name=s.createUniqueName(n.name)),ai(r,n),n.extensions&&Ji(e,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof dn||f instanceof We)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){let o=[],a=t.name?t.name:t.uuid,c=[];Ti[r.path]===Ti.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Ti[r.path]){case Ti.weights:l=ii;break;case Ti.rotation:l=si;break;case Ti.position:case Ti.scale:l=ri;break;default:switch(n.itemSize){case 1:l=ii;break;case 2:case 3:default:l=ri;break}break}let h=s.interpolation!==void 0?O_[s.interpolation]:Es,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let _=new l(c[f]+"."+Ti[r.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Ol(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let s=this instanceof si?Nl:Yo;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function G_(i,t,e){let n=t.attributes,s=new sn;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){let h=Ol(Us[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new N,c=new N;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){let y=Ol(Us[f.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new fn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Yu(i,t,e){let n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Ul[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){let o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return pe.workingColorSpace!==$e&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pe.workingColorSpace}" not supported.`),ai(i,t),G_(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?B_(i,t.targets,e):i})}var Zu={type:"change"},zl={type:"start"},Ju={type:"end"},qo=new Mi,Ku=new Cn,W_=Math.cos(70*Go.DEG2RAD),Ve=new N,on=2*Math.PI,we={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bl=1e-6,Zo=class extends zo{constructor(t,e=null){super(t,e),this.state=we.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ye,this._lastTargetPosition=new N,this._quat=new ye().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pr,this._sphericalDelta=new pr,this._scale=1,this._panOffset=new N,this._rotateStart=new jt,this._rotateEnd=new jt,this._rotateDelta=new jt,this._panStart=new jt,this._panEnd=new jt,this._panDelta=new jt,this._dollyStart=new jt,this._dollyEnd=new jt,this._dollyDelta=new jt,this._dollyDirection=new N,this._mouse=new jt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Y_.bind(this),this._onPointerDown=X_.bind(this),this._onPointerUp=q_.bind(this),this._onContextMenu=tx.bind(this),this._onMouseWheel=J_.bind(this),this._onKeyDown=$_.bind(this),this._onTouchStart=j_.bind(this),this._onTouchMove=Q_.bind(this),this._onMouseDown=Z_.bind(this),this._onMouseMove=K_.bind(this),this._interceptControlDown=ex.bind(this),this._interceptControlUp=nx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zu),this.update(),this.state=we.NONE}update(t=null){let e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===we.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ve.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<W_?this.object.lookAt(this.target):(Ku.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(Ku,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bl||this._lastTargetPosition.distanceToSquared(this.target)>Bl?(this.dispatchEvent(Zu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?on/60*this.autoRotateSpeed*t:on/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ve.copy(s).sub(this.target);let r=Ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new jt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function X_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Y_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function q_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ju),this.state=we.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Z_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=we.DOLLY;break;case Zi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}break;case Zi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(zl)}function K_(i){switch(this.state){case we.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case we.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case we.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function J_(i){this.enabled===!1||this.enableZoom===!1||this.state!==we.NONE||(i.preventDefault(),this.dispatchEvent(zl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ju))}function $_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function j_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=we.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=we.TOUCH_PAN;break;default:this.state=we.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=we.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=we.TOUCH_DOLLY_ROTATE;break;default:this.state=we.NONE}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(zl)}function Q_(i){switch(this._trackPointer(i),this.state){case we.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case we.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case we.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case we.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=we.NONE}}function tx(i){this.enabled!==!1&&i.preventDefault()}function ex(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Yt=(i=0,t=0,e=0)=>new N(i,t,e),Fe=()=>new ye,an=Math.PI/180,xr=Yt(1,0,0),kl=Yt(0,1,0),$u=Yt(0,0,1),Ei=Yt(0,-1,0),ci=(i,t,e)=>Math.max(t,Math.min(e,i)),yr=i=>(i=ci(i,0,1),i*i*(3-2*i)),Os=i=>(i=ci(i,0,1),i*i*i*(i*(6*i-15)+10)),Vl=["pelvis","lumbar","chest","neck","head","uarmL","farmL","handL","uarmR","farmR","handR","thighL","shinL","footL","thighR","shinR","footR"],Hl={lumbar:"pelvis",chest:"lumbar",neck:"chest",head:"neck",uarmL:"chest",farmL:"uarmL",handL:"farmL",uarmR:"chest",farmR:"uarmR",handR:"farmR",thighL:"pelvis",shinL:"thighL",footL:"shinL",thighR:"pelvis",shinR:"thighR",footR:"shinR"},ju={shinL:1,shinR:1,farmL:-1,farmR:-1},ix={uarmL:1,uarmR:1,thighL:1,thighR:1},sx=i=>/^(pelvis|thigh|shin|foot)/.test(i)?"L":/^(lumbar|chest)/.test(i)?"T":/^(neck|head)/.test(i)?"H":"A",Qu={L:[0,.82],T:[.06,.9],A:[.14,1],H:[.18,1]},Gl={open:{c:[6,10,6],t:[8,10]},floor:{c:[3,3,0],t:[4,0]},fist:{c:[85,95,70],t:[35,50]},lock:{c:[62,72,40],t:[6,12]},namaste:{c:[0,0,0],t:[0,4]},spread:{c:[-6,0,0],t:[-10,0]}},vr={light:{top:"#2f8f8a",low:"#2e3566",hair:"#3b2a20"},dark:{top:"#3aa39c",low:"#4e5aa8",hair:"#3b2a20"}},tf={light:{bg:"#f3f0ea",floor:"#ebe6dc",mat:"#7fa38c",stripe:"#6d9179"},dark:{bg:"#16171b",floor:"#1f2024",mat:"#3f5a4c",stripe:"#36503f"}},ef={female:{body:"Regular_Female_FullBody.gltf",hair:"Hair_Ponytail.gltf"},male:{body:"Regular_Male_FullBody.gltf",hair:"Hair_SimpleParted.gltf"}};async function nf(i,{base:t="",poses:e,model:n="female",interactive:s=!0}={}){let r=new vo({canvas:i,antialias:!0,alpha:!1});r.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),r.outputColorSpace=Le,r.toneMapping=Kc,r.toneMappingExposure=1.05,r.shadowMap.enabled=!0,r.shadowMap.type=Zc;let o=new Mo,a=new Uo(16777215,10261380,1.6);o.add(a);let c=new qi(16774374,2.4);c.position.set(2.2,5,4.5),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-2.5,right:2.5,top:2.5,bottom:-2.5,near:.5,far:15}),c.shadow.bias=-4e-4,c.shadow.normalBias=.02,c.shadow.radius=4,o.add(c),o.add(c.target);let l=new qi(14674175,.9);l.position.set(-3,2.5,-3.5),o.add(l);let h=new Nn({roughness:1}),u=new Pe(new Xi(40,40),h);u.rotation.x=-Math.PI/2,u.receiveShadow=!0,o.add(u);let f=new Nn({roughness:.95}),p=new Pe(new Xi(.64,1.85),f);p.rotation.x=-Math.PI/2,p.position.y=.003,p.receiveShadow=!0,o.add(p);let _=T=>{let $=document.createElement("canvas");$.width=512,$.height=64;let at=$.getContext("2d");at.fillStyle=T.mat,at.fillRect(0,0,512,64),at.fillStyle=T.stripe;for(let ut=0;ut<512;ut+=64)at.fillRect(ut,0,2,64);let st=new Po($);return st.colorSpace=Le,st},y=new Be(24,1,.05,60),m=null;s&&(m=new Zo(y,i),m.enableDamping=!0,m.enablePan=!1,m.minDistance=1.5,m.maxDistance=12);let d=new Xo,R=ef[n]||ef.female,[C,S]=await Promise.all([d.loadAsync(t+R.body),d.loadAsync(t+R.hair).catch(()=>null)]),Z=C.scene;o.add(Z);let I={},U=[];Z.traverse(T=>{T.isBone&&(I[T.name]=T),T.isMesh&&(T.castShadow=!0,T.receiveShadow=!0,T.frustumCulled=!1,T.isSkinnedMesh&&U.push(T))});let X={},x=null;S&&(x=S.scene,o.add(x),x.traverse(T=>{T.isBone&&(X[T.name]=T),T.isMesh&&(T.castShadow=!0,T.frustumCulled=!1)}));let g=["pelvis","spine_01","spine_02","spine_03","neck_01","Head","clavicle_l","upperarm_l","lowerarm_l","hand_l","thigh_l","calf_l","foot_l","ball_l"];for(let T of g)if(!I[T])throw new Error("model: no bone "+T);let b=T=>T.getWorldQuaternion(Fe()),E=T=>T.getWorldPosition(Yt()),P=T=>T==="L"?"l":"r",L=(T,$,at)=>{Z.updateMatrixWorld(!0);let st=I[T],ut=E(I[$]).sub(E(st)).normalize(),Mt=Fe().setFromUnitVectors(ut,at).multiply(b(st));st.quaternion.copy(b(st.parent).invert().multiply(Mt))};for(let T of["l","r"])L("upperarm_"+T,"lowerarm_"+T,Ei),L("lowerarm_"+T,"hand_"+T,Ei),L("thigh_"+T,"calf_"+T,Ei),L("calf_"+T,"foot_"+T,Ei);Z.updateMatrixWorld(!0);let H=[];I.pelvis.traverse(T=>{T.isBone&&H.push(T)});let B=new Map(H.map(T=>[T,T.quaternion.clone()])),J=new Map(H.map(T=>[T,b(T)])),w={pelvis:"pelvis",spine_03:"chest",Head:"head",upperarm_l:"uarmL",lowerarm_l:"farmL",hand_l:"handL",upperarm_r:"uarmR",lowerarm_r:"farmR",hand_r:"handR",thigh_l:"thighL",calf_l:"shinL",foot_l:"footL",thigh_r:"thighR",calf_r:"shinR",foot_r:"footR"},G=E(I.pelvis),K={};for(let T of["l","r"]){let $=E(I["hand_"+T]),at=E(I["middle_01_"+T]),st=E(I["index_01_"+T]),ut=E(I["pinky_01_"+T]),Mt=at.clone().sub($).normalize(),vt=st.clone().sub(ut);vt.addScaledVector(Mt,-vt.dot(Mt)).normalize();let mt=Yt().crossVectors(Mt,vt).normalize(),Rt=Yt(T==="l"?-1:1,0,0);mt.dot(Rt)<0&&mt.negate(),K[T==="l"?"L":"R"]={d:Mt,n:mt}}let q=new Map;for(let T of["l","r"]){let $=Yt(T==="l"?-1:1,0,0);["index","middle","ring","pinky","thumb"].map(st=>[1,2,3].map(ut=>I[`${st}_0${ut}_${T}`])).forEach((st,ut)=>st.forEach((Mt,vt)=>{if(!Mt)return;let mt=st[vt+1]||Mt.children.find(Lt=>Lt.isBone);if(!mt)return;let Rt=E(mt).sub(E(Mt)).normalize(),Ut=Yt().crossVectors(Rt,$).normalize();q.set(Mt,{ax:Ut.applyQuaternion(b(Mt).invert()),k:vt,thumb:ut===4,side:T==="l"?"L":"R"})}))}let z=U.reduce((T,$)=>$.geometry.attributes.position.count>(T?T.geometry.attributes.position.count:0)?$:T,null);if(!/noW=1/.test(location.search)){z.skeleton.update(),z.updateMatrixWorld(!0);let T=z.geometry,$=T.attributes.skinIndex,at=T.attributes.skinWeight,st=T.attributes.position.count,ut=Yt(),Mt=z.skeleton.bones,vt=Ut=>Mt.findIndex(Lt=>Lt.name===Ut),mt=vt("pelvis"),Rt=vt("spine_01");for(let Ut of["l","r"]){let Lt=vt("thigh_"+Ut);if(Lt<0||mt<0)continue;let Gt=E(I["thigh_"+Ut]),re=E(I["calf_"+Ut]),ue=Gt.distanceTo(re);for(let It=0;It<st;It++){let Kt=-1;for(let D=0;D<4;D++)$.getComponent(It,D)===Lt&&(Kt=D);if(Kt<0)continue;let ae=at.getComponent(It,Kt);if(ae<=0)continue;z.getVertexPosition(It,ut),z.localToWorld(ut);let He=(Gt.y-ut.y)/ue,Ne=ci((Gt.z-ut.z)/.08,-1,1),Ue=ci((Math.abs(ut.x)-Math.abs(Gt.x))/.07,0,1),k=(1-yr((He+.02)/.5))*(Ne>0?.5+.42*Ne:.22+.3*Ue);if(k=ci(k,0,.9),k<.01)continue;let F=ae*k;window.__wcnt=(window.__wcnt||0)+1,at.setComponent(It,Kt,ae-F);let Y=-1;for(let D=0;D<4;D++)$.getComponent(It,D)===mt&&(Y=D);if(Y<0){let D=0,ot=9;for(let St=0;St<4;St++){let Tt=at.getComponent(It,St);St!==Kt&&Tt<ot&&(ot=Tt,D=St)}let _t=at.getComponent(It,D);$.setComponent(It,D,mt),at.setComponent(It,D,F+_t*0),_t>0&&at.setComponent(It,Kt,at.getComponent(It,Kt)+_t)}else at.setComponent(It,Y,at.getComponent(It,Y)+F)}}$.needsUpdate=!0,at.needsUpdate=!0,window.__wfix=(window.__wfix||0)+1}{z.skeleton.update(),z.updateMatrixWorld(!0);let T=z.geometry,$=T.attributes.position,at=T.attributes.skinIndex,st=T.attributes.skinWeight,ut=$.count,Mt=new Float32Array(ut*3),vt=Yt(),mt=E(I.upperarm_l).y;for(let It=0;It<ut;It++){let Kt=0,ae=0;for(let Ue=0;Ue<4;Ue++){let M=st.getComponent(It,Ue);M>Kt&&(Kt=M,ae=at.getComponent(It,Ue))}let He=z.skeleton.bones[ae].name;z.getVertexPosition(It,vt),z.localToWorld(vt);let Ne=/upperarm|lowerarm/.test(He)?1:/hand|index|middle|ring|pinky|thumb|Head|neck|foot|ball/.test(He)?2:0;Mt[It*3]=vt.y,Mt[It*3+1]=Ne,Mt[It*3+2]=Ne===1?mt-vt.y:Math.abs(vt.x)}T.setAttribute("oinfo",new Ie(Mt,3));let Rt=It=>E(I[It]).y,Ut=n==="male",Lt=Ut?[Rt("pelvis")+.06,mt+.2]:[Rt("spine_01")-.035,mt+.2],Gt=[Rt("foot_l")+.07,Ut?Rt("pelvis")+.09:Rt("spine_01")-.005],re=Ut?.16:0,ue=[].concat(z.material);for(let It of ue)It.userData.top={value:new Xt(vr.light.top)},It.userData.low={value:new Xt(vr.light.low)},It.onBeforeCompile=Kt=>{Kt.uniforms.uTop=It.userData.top,Kt.uniforms.uLow=It.userData.low,Kt.vertexShader=`attribute vec3 oinfo;
varying vec3 vO;
`+Kt.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vO = oinfo;`);let ae=He=>He.toFixed(4);Kt.fragmentShader=`uniform vec3 uTop;
uniform vec3 uLow;
varying vec3 vO;
`+Kt.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
{ float yy=vO.x, cls=vO.y; float e=.006;
  float body=1.-step(.5,cls);
  float t=body*smoothstep(${ae(Lt[0])}-e,${ae(Lt[0])}+e,yy)*(1.-smoothstep(${ae(Lt[1])}-e,${ae(Lt[1])}+e,yy));
  ${Ut?`t=max(t,(1.-step(1.5,cls))*step(.5,cls)*(1.-smoothstep(${ae(re)}-e,${ae(re)}+e,vO.z)));`:"t*=1.-smoothstep(.13,.145,vO.z);"}
  float l=body*smoothstep(${ae(Gt[0])}-e,${ae(Gt[0])}+e,yy)*(1.-smoothstep(${ae(Gt[1])}-e,${ae(Gt[1])}+e,yy));
  float lum=dot(diffuseColor.rgb,vec3(.3,.59,.11)); vec3 shade=vec3(1.);
  diffuseColor.rgb=mix(diffuseColor.rgb,uTop*shade,t); diffuseColor.rgb=mix(diffuseColor.rgb,uLow*shade,l*(1.-t)); vOut=max(t,l); }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.85,vOut);`).replace("void main() {",`float vOut=0.;
void main() {`)},It.needsUpdate=!0}x&&x.traverse(T=>{if(T.isMesh)for(let $ of[].concat(T.material))$.color=new Xt(vr.light.hair),$.needsUpdate=!0});let tt=[];{let T=z.geometry,$=T.attributes.skinIndex,at=T.attributes.skinWeight,st=T.attributes.position.count;for(let ut=0;ut<st;ut+=3){let Mt=0,vt=0;for(let Ut=0;Ut<4;Ut++){let Lt=at.getComponent(ut,Ut);Lt>Mt&&(Mt=Lt,vt=$.getComponent(ut,Ut))}let mt=z.skeleton.bones[vt].name,Rt=/hand|index|middle|ring|pinky|thumb/.test(mt)?"hand"+(mt.endsWith("_l")?"L":"R"):/foot|ball/.test(mt)?"foot"+(mt.endsWith("_l")?"L":"R"):/calf/.test(mt)?"shin"+(mt.endsWith("_l")?"L":"R"):/thigh/.test(mt)?"thigh"+(mt.endsWith("_l")?"L":"R"):/lowerarm/.test(mt)?"farm"+(mt.endsWith("_l")?"L":"R"):/upperarm/.test(mt)?"uarm"+(mt.endsWith("_l")?"L":"R"):/Head|neck/.test(mt)?"head":/pelvis|spine_01/.test(mt)?"pelvis":"chest";tt.push({i:ut,reg:Rt})}}let V=Yt();function j(){z.skeleton.update();let T=new Float32Array(tt.length*3);for(let $=0;$<tt.length;$++)z.getVertexPosition(tt[$].i,V),z.localToWorld(V),T[$*3]=V.x,T[$*3+1]=V.y,T[$*3+2]=V.z;return T}let dt=(T,$)=>Fe().slerp(T,$),ct=Fe();function xt(T,$,at=!0){let st=new Map,ut=T.pelvis.clone().invert().multiply(T.chest),Mt=T.chest.clone().invert().multiply(T.head),vt=I.pelvis.parent?b(I.pelvis.parent):Fe();for(let mt of H){let Rt=mt.name,Ut=mt===I.pelvis?vt:st.get(mt.parent),Lt;if(Rt==="spine_01")Lt=T.pelvis.clone().multiply(dt(ut,.3)).multiply(J.get(mt));else if(Rt==="spine_02")Lt=T.pelvis.clone().multiply(dt(ut,.65)).multiply(J.get(mt));else if(Rt==="neck_01")Lt=T.chest.clone().multiply(dt(Mt,.5)).multiply(J.get(mt));else if(w[Rt])Lt=T[w[Rt]].clone().multiply(J.get(mt));else if(/^clavicle_/.test(Rt)&&at){let Gt=Rt.endsWith("_l")?"L":"R",re=Gt==="L"?1:-1,ue=Ei.clone().applyQuaternion(T["uarm"+Gt]),It=kl.clone().applyQuaternion(T.chest),Kt=$u.clone().applyQuaternion(T.chest),ae=yr((ue.dot(It)+.2)/1.2)*22,He=yr((ue.dot(Kt)-.3)/.7)*10;Lt=Ut.clone().multiply(B.get(mt)).multiply(Fe().setFromAxisAngle($u.clone().applyQuaternion(J.get(mt).clone().invert()),re*ae*an)).multiply(Fe().setFromAxisAngle(kl.clone().applyQuaternion(J.get(mt).clone().invert()),-re*He*an))}else{Lt=Ut.clone().multiply(B.get(mt));let Gt=q.get(mt);if(Gt){let re=$&&$[Gt.side],ue=re&&typeof re=="object"?re:Gl[re||"open"]||Gl.open,It=Gt.thumb?ue.t[Math.min(Gt.k,1)]||0:ue.c[Gt.k];It&&Lt.multiply(ct.setFromAxisAngle(Gt.ax,It*an))}}st.set(mt,Lt),mt.quaternion.copy(Ut.clone().invert().multiply(Lt))}}function ft(T){let $=I.pelvis.parent;I.pelvis.position.copy($?$.worldToLocal(T.clone()):T),Z.updateMatrixWorld(!0)}function Ot(){if(x){for(let T in X){let $=I[T];$&&(X[T].position.copy($.position),X[T].quaternion.copy($.quaternion),X[T].scale.copy($.scale))}x.position.copy(Z.position),x.quaternion.copy(Z.quaternion),x.scale.copy(Z.scale),x.updateMatrixWorld(!0)}}function qt(T,$){let at=1/0,st=-1;for(let ut=0;ut<tt.length;ut++){if($&&tt[ut].reg.startsWith("hand"))continue;let Mt=T[ut*3+1];Mt<at&&(at=Mt,st=ut)}return{y:at,k:st}}let Ht=(T,$)=>{T.quaternion.copy(b(T.parent).invert().multiply($)),T.updateMatrixWorld(!0)};function fe(T,$,at){let[st,ut,Mt]=T.map(F=>I[F]),vt=b(Mt),mt=E(st),Rt=E(ut),Ut=E(Mt),Lt=mt.distanceTo(Rt),Gt=Rt.distanceTo(Ut),re=Yt().subVectors($,mt),ue=re.length();if(ue<1e-6)return;let It=re.divideScalar(ue);ue=ci(ue,Math.abs(Lt-Gt)+.001,Lt+Gt-.001);let Kt=at?at.clone():Yt().subVectors(Rt,mt);Kt.addScaledVector(It,-Kt.dot(It)),Kt.lengthSq()<1e-8&&Kt.set(0,0,1),Kt.normalize();let ae=(Lt*Lt+ue*ue-Gt*Gt)/(2*Lt*ue),He=Math.sqrt(Math.max(0,1-ae*ae)),Ne=Yt().copy(mt).addScaledVector(It,Lt*ae).addScaledVector(Kt,Lt*He);Ht(st,Fe().setFromUnitVectors(Yt().subVectors(Rt,mt).normalize(),Yt().subVectors(Ne,mt).normalize()).multiply(b(st)));let Ue=E(ut),M=E(Mt),k=Yt().copy(mt).addScaledVector(It,ue);Ht(ut,Fe().setFromUnitVectors(Yt().subVectors(M,Ue).normalize(),Yt().subVectors(k,Ue).normalize()).multiply(b(ut))),Ht(Mt,vt)}let O={handL:["upperarm_l","lowerarm_l","hand_l"],handR:["upperarm_r","lowerarm_r","hand_r"],footL:["thigh_l","calf_l","foot_l"],footR:["thigh_r","calf_r","foot_r"]};function Se(T,$,at){for(let st=0;st<2;st++){let ut=j(),Mt=Yt(ut[$*3],ut[$*3+1],ut[$*3+2]);if(Mt.distanceTo(at)<.002)break;let vt=E(I[O[T][2]]);fe(O[T],vt.add(at.clone().sub(Mt)))}}function Jt(){for(let T of["l","r"]){let $=I["ball_"+T],at=I["ball_leaf_"+T]||$.children[0];if(!at)continue;let st=E($),ut=E(at),Mt=ut.y-Math.max(0,st.y-.02);if(ut.y<.005&&st.y>.01){let vt=Yt().subVectors(ut,st),mt=vt.length(),Rt=Yt(vt.x,0,vt.z).normalize().multiplyScalar(mt);Rt.y=-Math.min(st.y-.005,mt*.9),Ht($,Fe().setFromUnitVectors(vt.normalize(),Rt.normalize()).multiply(b($)))}}}let Qt=T=>new ye(T[0],T[1],T[2],T[3]),kt=new Map;function he(T){if(kt.has(T))return kt.get(T);let $=e[T];if(!$)return null;let at={};for(let ut of Vl)at[ut]=Qt($.q[ut]);let st=Bt(at,$.h||{L:"open",R:"open"},$.c||0,!!$.a,$.k||[]);return st.key=T,kt.set(T,st),st}function Bt(T,$,at,st,ut){let Mt={TW:T,hands:$,cam:at,armBal:st,contacts:ut||[]};A(T,Mt.hands),ft(Yt(0,1,0));let vt=j(),mt=qt(vt,!Mt.armBal);ft(Yt(0,1-mt.y,0)),vt=j(),Mt.pelvisY=1-mt.y;let Rt=["L","R"].filter(Lt=>Mt.contacts.includes("hand"+Lt)||!st&&$[Lt]==="floor");if(Rt.length&&!st){let Lt=["lumbar","chest","neck","head","uarmL","farmL","handL","uarmR","farmR","handR"],Gt=()=>{vt=j();let re=!0;for(let ue of Rt){let It="hand"+ue,Kt=1/0,ae=-1;for(let Ne=0;Ne<tt.length;Ne++)tt[Ne].reg===It&&vt[Ne*3+1]<Kt&&(Kt=vt[Ne*3+1],ae=Ne);if(Kt>.32)continue;Se(It,ae,Yt(vt[ae*3],.003,vt[ae*3+2])),j()[ae*3+1]>.006&&(re=!1)}return A(T,$),ft(Yt(0,Mt.pelvisY,0)),re};for(let re=0;re<20&&!Gt();re++){let ue=xr.clone().applyQuaternion(T.pelvis),It=Fe().setFromAxisAngle(ue,3*an);for(let ae of Lt)T[ae]=It.clone().multiply(T[ae]);A(T,$),ft(Yt(0,1,0)),vt=j();let Kt=qt(vt,!0);ft(Yt(0,1-Kt.y,0)),Mt.pelvisY=1-Kt.y}vt=j()}for(let Lt of["footL","footR","handL","handR"]){if(!(Mt.contacts.includes(Lt)||Lt.startsWith("hand")&&!st&&$[Lt.slice(-1)]==="floor"))continue;let re=1/0,ue=-1;for(let It=0;It<tt.length;It++)tt[It].reg===Lt&&vt[It*3+1]<re&&(re=vt[It*3+1],ue=It);if(ue>=0&&re<.32&&Math.abs(re)>.004){let It=Yt(vt[ue*3],.003,vt[ue*3+2]),Kt=E(I[O[Lt][0]]),ae=E(I[O[Lt][2]]),He=Yt(vt[ue*3],vt[ue*3+1],vt[ue*3+2]),Ue=(I[O[Lt][1]].position.length()*0+E(I[O[Lt][1]]).distanceTo(Kt)+E(I[O[Lt][1]]).distanceTo(ae)+ae.distanceTo(He)*.9)*.985,M=Yt().subVectors(It,Kt);if(M.length()>Ue&&Kt.y<Ue){let k=Math.sqrt(Ue*Ue-Kt.y*Kt.y),F=Yt(M.x,0,M.z),Y=F.length()||1;It.x=Kt.x+F.x/Y*k,It.z=Kt.z+F.z/Y*k}Se(Lt,ue,It),vt=j(),window.__dbg&&console.log("IK",Lt,re.toFixed(3),"S",Kt.y.toFixed(3),"reach",Ue.toFixed(3),"t",It.x.toFixed(2),It.z.toFixed(2),"->",vt[ue*3+1].toFixed(3))}}let Ut={};for(let Lt=0;Lt<tt.length;Lt++){let Gt=vt[Lt*3+1];if(Gt<.03){let re=tt[Lt].reg;(!Ut[re]||Gt<vt[Ut[re]*3+1])&&(Ut[re]=Lt)}}return Mt.touch=Ut,Mt.P=vt,Mt}function A(T,$){xt(T,$),Z.updateMatrixWorld(!0)}let v=(T,$)=>Hl[$]?T[Hl[$]].clone().invert().multiply(T[$]):T[$].clone(),Q=T=>{let $=Fe().set(T.x,0,0,T.w);return $.lengthSq()<1e-9?0:($.normalize(),2*Math.atan2($.x,$.w))};function lt(T,$){let at={};for(let st of Vl){let ut=v(T.TW,st),Mt=v($.TW,st);if(st in ju){let vt=ju[st],mt=Q(ut)*vt,Rt=Q(Mt)*vt;mt=ci(mt,-2*an,170*an),Rt=ci(Rt,-2*an,170*an);let Ut=ut.clone().multiply(Fe().setFromAxisAngle(xr,-mt*vt)),Lt=Mt.clone().multiply(Fe().setFromAxisAngle(xr,-Rt*vt));at[st]={hinge:!0,g:vt,a:mt,b:Rt,ra:Ut,rb:Lt}}else if(st in ix){let vt=Ei.clone().applyQuaternion(ut),mt=Ei.clone().applyQuaternion(Mt),Rt=vt.angleTo(mt),Ut=null;Rt>150*an&&(Ut=Yt(0,0,1).add(vt).add(mt),Ut.lengthSq()<1e-4&&(Ut=Yt(0,0,1)),Ut.normalize()),at[st]={ball:!0,la:ut,lb:Mt,da:vt,db:mt,via:Ut}}else at[st]={la:ut,lb:Mt}}return at}function nt(T,$){if(!T.via)return T.la.clone().slerp(T.lb,$);let at=T.da.angleTo(T.via),st=T.via.angleTo(T.db),ut=$*(at+st),Mt;ut<=at?Mt=et(T.da,T.via,at?ut/at:1):Mt=et(T.via,T.db,st?(ut-at)/st:1);let vt=T.la.clone().slerp(T.lb,$),mt=Ei.clone().applyQuaternion(vt);return Fe().setFromUnitVectors(mt,Mt).multiply(vt)}function et(T,$,at){let st=Fe().setFromUnitVectors(T,$);return T.clone().applyQuaternion(Fe().slerp(st,at))}function At(T,$,at,st,ut){let Mt={},vt=ut.win||Qu;for(let Rt in vt){let[Ut,Lt]=vt[Rt];Mt[Rt]=Os((st-Ut)/(Lt-Ut))}if(!ut.stagger)for(let Rt in Mt)Mt[Rt]=Os(st);let mt={};if(ut.rootVia){let Rt=Mt.L;mt.pelvis=Rt<.5?T.TW.pelvis.clone().slerp(ut.rootVia,Rt*2):ut.rootVia.clone().slerp($.TW.pelvis,Rt*2-1)}else mt.pelvis=T.TW.pelvis.clone().slerp($.TW.pelvis,Mt.L);for(let Rt of Vl){if(Rt==="pelvis")continue;let Ut=at[Rt],Lt=Mt[sx(Rt)],Gt;if(Ut.hinge){let re=Ut.a+(Ut.b-Ut.a)*Lt+(ut.lift&&ut.lift[Rt]?ut.lift[Rt]*Math.sin(Math.PI*Lt):0);Gt=Ut.ra.clone().slerp(Ut.rb,Lt).multiply(Fe().setFromAxisAngle(xr,re*Ut.g))}else Ut.ball?(Gt=nt(Ut,Lt),ut.lift&&ut.lift[Rt]&&Gt.multiply(Fe().setFromAxisAngle(xr,-ut.lift[Rt]*Math.sin(Math.PI*Lt)))):Gt=Ut.la.clone().slerp(Ut.lb,Lt);mt[Rt]=mt[Hl[Rt]].clone().multiply(Gt)}return{TW:mt,hands:bt(T.hands,$.hands,st)}}let bt=(T,$,at)=>({L:at<.5?T.L:$.L,R:at<.5?T.R:$.R}),gt=null,zt=null;function pt(T,$,at){A(T.TW,T.hands),ft(Yt($,T.pelvisY,at));for(let st of["handL","handR","footL","footR"]){let ut=T.touch[st];ut!=null&&Se(st,ut,Yt(T.P[ut*3]+$,T.P[ut*3+1],T.P[ut*3+2]+at))}Jt(),Ot()}function Nt(T,$,at,st){let ut=lt(T,st),vt=["footR","footL","shinR","shinL","pelvis","thighR","thighL","handR","handL","chest","head"].filter(F=>T.touch[F]!=null&&st.touch[F]!=null),mt=null,Rt=$,Ut=at,Lt=1/0;for(let F of vt){let Y=T.touch[F],D=T.P[Y*3]+$-st.P[Y*3],ot=T.P[Y*3+2]+at-st.P[Y*3+2],_t=vt.indexOf(F)*.01;{let St=Yt($,0,at),Tt=Yt(D,0,ot);_t+=.5*Math.hypot(St.x-Tt.x,St.z-Tt.z)}for(let St of vt){if(St===F)continue;let Tt=T.touch[St];_t+=Math.hypot(T.P[Tt*3]+$-(st.P[Tt*3]+D),T.P[Tt*3+2]+at-(st.P[Tt*3+2]+ot))*(St.startsWith("hand")?1.5:1)}_t<Lt&&(Lt=_t,mt=F,Rt=D,Ut=ot)}let Gt={},re=(F,Y,D,ot)=>Yt(F.P[Y*3]+D,F.P[Y*3+1],F.P[Y*3+2]+ot);for(let F of["handL","handR","footL","footR"]){if(F===mt)continue;let Y=T.touch[F],D=st.touch[F];if(Y==null&&D==null||F.startsWith("hand")&&!(T.armBal||st.armBal)&&!(T.hands[F.slice(-1)]==="floor"&&Y!=null||st.hands[F.slice(-1)]==="floor"&&D!=null))continue;let ot=Y??D,_t=re(T,ot,$,at),St=re(st,ot,Rt,Ut),Tt=Yt(St.x-_t.x,0,St.z-_t.z).length();Gt[F]={idx:ot,p0:_t,p1:St,a:Y!=null,b:D!=null,h:Tt>.2?ci(Tt*.22,.05,.14):0}}let ue=Object.keys(Gt).filter(F=>Gt[F].a&&Gt[F].b);for(let F of["foot","hand"]){let Y=ue.filter(D=>D.startsWith(F)&&Gt[D].h>0).sort((D,ot)=>Gt[ot].h-Gt[D].h);Y.forEach((D,ot)=>{Gt[D].win=Y.length>1?ot===0?[.04,.56]:[.44,.96]:F==="foot"?[.05,.8]:[.15,.95]})}let It={},Kt=new Set;for(let F in Gt){let Y=F.slice(-1);(F.startsWith("foot")?["foot","shin","thigh"]:["hand","farm","uarm"]).forEach(D=>Kt.add(D+Y))}let ae=Object.keys(Gt).some(F=>F.startsWith("hand")&&!Gt[F].a&&Gt[F].b),He=null;if(T.TW.pelvis.angleTo(st.TW.pelvis)>150*an){let F=1/0;for(let Y of[1,-1]){let D=T.TW.pelvis.clone().multiply(Fe().setFromAxisAngle(kl,Y*90*an)),ot=D.angleTo(st.TW.pelvis);ot<F&&(F=ot,He=D)}}let Ne={rootVia:He,stagger:!0,lift:It,win:ae?{L:[.12,.95],T:[0,.6],A:[0,.62],H:[.05,.7]}:Qu},Ue=!(T.armBal||st.armBal),M=mt?T.touch[mt]:-1;function k(F){let{TW:Y,hands:D}=At(T,st,ut,F,Ne);A(Y,D),ft(Yt(0,1,0));let ot=j(),_t,St;if(mt)_t=T.P[M*3]+$-ot[M*3],St=T.P[M*3+2]+at-ot[M*3+2];else{let Ft=Os(F);_t=$+(Rt-$)*Ft,St=at+(Ut-at)*Ft}let Tt;{let Ft=1/0;for(let yt=0;yt<tt.length;yt++){let ne=tt[yt].reg;Kt.has(ne)||Ue&&ne.startsWith("hand")||(Ft=Math.min(Ft,ot[yt*3+1]))}Tt=1-Ft}ft(Yt(_t,Tt,St));let $t=()=>{for(let Ft in Gt){let yt=Gt[Ft];ot=j();let ne=Yt(ot[yt.idx*3],ot[yt.idx*3+1],ot[yt.idx*3+2]),le,ge;if(yt.a&&yt.b){let[Ye,me]=yt.win||(Ft.startsWith("foot")?[.05,.8]:[.15,.95]),Vt=Os((F-Ye)/(me-Ye));le=yt.p0.clone().lerp(yt.p1,Vt),le.y+=yt.h*Math.sin(Math.PI*Vt),ge=1}else yt.a?(le=yt.p0.clone(),ge=1-yr((F-.5)/.35)):(le=yt.p1.clone(),ge=yr((F-.12)/.38));ge>.001&&Se(Ft,yt.idx,ne.lerp(le,ge))}};$t();{ot=j();let Ft=1/0;for(let yt=0;yt<tt.length;yt++)Ue&&tt[yt].reg.startsWith("hand")||(Ft=Math.min(Ft,ot[yt*3+1]));(Ft>.004||Ft<-.004)&&(A(Y,D),ft(Yt(_t,Tt-Ft,St)),$t())}ot=j();for(let Ft of["handL","handR","footL","footR"]){if(Ft===mt)continue;let yt=0,ne=-1;for(let le=0;le<tt.length;le++)tt[le].reg===Ft&&ot[le*3+1]<yt&&(yt=ot[le*3+1],ne=le);ne>=0&&yt<-.004&&Se(Ft,ne,Yt(ot[ne*3],.002,ot[ne*3+2]))}return Jt(),Ot(),{x:_t,z:St}}return{at:k,bx:Rt,bz:Ut,pin:mt,held:ue,lift:It,tw:F=>At(T,st,ut,F,Ne)}}let Wt={yaw:16,pitch:7,userMoved:!1,c:Yt(0,.9,0),s:1,camYaw:0},Zt=()=>{let T=j(),$=new sn;for(let at=0;at<tt.length;at++)$.expandByPoint(Yt(T[at*3],T[at*3+1],T[at*3+2]));return $};function Dt(){let T=Zt(),$=T.getCenter(Yt()),at=T.getSize(Yt());return $.y=Math.max($.y,.45),{c:$,s:Math.max(at.x,at.y*1.15,at.z,.9)}}let se=null;function te(T,$,at){let st=($+Wt.yaw)*an,ut=Wt.pitch*an,Mt=y.aspect||1,vt=y.fov*an,mt=T.s*.62/Math.tan(vt/2)/Math.min(1,Mt)+.6,Rt=Yt(Math.sin(st)*Math.cos(ut),Math.sin(ut),Math.cos(st)*Math.cos(ut)).multiplyScalar(mt).add(T.c);if(Wt.userMoved&&m){m.target.lerp(T.c,at?1:.08);return}at||!se?se={pos:Rt,c:T.c.clone()}:(se.pos.lerp(Rt,.08),se.c.lerp(T.c,.08)),y.position.copy(se.pos),y.lookAt(se.c),m&&m.target.copy(se.c)}function ve(T){let $=tf[T]||tf.light,at=vr[T]||vr.light;o.background=new Xt($.bg),h.color.set($.floor),f.map=_($),f.needsUpdate=!0;for(let st of[].concat(z.material))st.userData.top.value.set(at.top),st.userData.low.value.set(at.low)}ve("light");function W(T,$){r.setSize(T,$,!1),y.aspect=T/$,y.updateProjectionMatrix()}let wt=null;function it(){m&&m.update(),r.render(o,y)}function ht(T){if(zt){let $=Math.min(1,(T-zt.t0)/zt.ms),{x:at,z:st}=zt.tr.at($);zt.x=at,zt.z=st,wt=Dt(),te(wt,zt.A.cam+(zt.B.cam-zt.A.cam)*Os($),!1),$>=1&&(gt={st:zt.B,x:zt.tr.bx,z:zt.tr.bz},pt(gt.st,gt.x,gt.z),zt=null)}else wt&&te(wt,gt?gt.st.cam:0,!1);it(),requestAnimationFrame(ht)}requestAnimationFrame(ht);function Pt(T,$){let at=he(T);if(!at)return!1;if(zt){let ut=Math.min(1,(performance.now()-zt.t0)/zt.ms),{TW:Mt,hands:vt}=zt.tr.tw(ut),mt=Bt(Mt,vt,zt.A.cam+(zt.B.cam-zt.A.cam)*Os(ut),zt.A.armBal||zt.B.armBal),Rt=zt.tr.at(ut),Ut=E(I.pelvis);gt={st:mt,x:Ut.x,z:Ut.z},zt=null}if(!gt||!$){let ut=gt?gt.x:0,Mt=gt?gt.z:0;if(pt(at,ut,Mt),gt)gt={st:at,x:ut,z:Mt};else{let vt=Ct();pt(at,-vt.x,-vt.z),gt={st:at,x:-vt.x,z:-vt.z}}return wt=Dt(),te(wt,at.cam,!0),!0}let st=Nt(gt.st,gt.x,gt.z,at);return zt={A:gt.st,B:at,tr:st,t0:performance.now(),ms:$},!0}function Ct(){let $=Zt().getCenter(Yt());return{x:$.x,z:$.z}}return{go:Pt,setTheme:ve,resize:W,render:it,cam:y,controls:m,view:Wt,renderer:r,scene:o,stateOf:he,makeTransition:Nt,placeStatic:pt,frameTarget:Dt,placeCam:te,sampleWorld:j,samp:tt,B:I,mat:p,handRest:K,CURL:Gl,applyTW:xt,ik2:fe,reachVertex:Se,CHAIN:O,wp:E,wq:b,restW:J,lowest:qt,get cur(){return gt},set cur(T){gt=T},pose:A,setPelvisPos:ft,toes:Jt,syncHair:Ot}}var Wl=(i=0,t=0,e=0)=>new N(i,t,e),rx=()=>new ye,ox=Math.PI/180,Ri=Wl(1,0,0),Mr=Wl(0,1,0),Sr=Wl(0,0,1),Xe=(i,t)=>rx().setFromAxisAngle(i,t*ox),Ko=(i,t,e)=>Xe(Ri,i).multiply(Xe(Sr,-t)).multiply(Xe(Mr,e));function br(i){let t=i.root||[0,0,0],e=Xe(Mr,t[2]||0).multiply(Xe(Sr,-(t[1]||0))).multiply(Xe(Ri,t[0]||0)),n=i.sp||[0,0,0],s=i.nk||[0,0,0],r={};r.pelvis=e.clone(),r.lumbar=r.pelvis.clone().multiply(Ko(n[0]*.45,n[1]*.45,n[2]*.35)),r.chest=r.lumbar.clone().multiply(Ko(n[0]*.55,n[1]*.55,n[2]*.65)),r.neck=r.chest.clone().multiply(Ko(s[0]*.5,s[1]*.5,s[2]*.5)),r.head=r.neck.clone().multiply(Ko(s[0]*.5,s[1]*.5,s[2]*.5));for(let o of["L","R"]){let a=o==="L"?1:-1,c=i["h"+o]||[0,0,0];r["thigh"+o]=e.clone().multiply(Xe(Ri,-c[0])).multiply(Xe(Sr,a*(c[1]||0))).multiply(Xe(Mr,a*(c[2]||0))),r["shin"+o]=r["thigh"+o].clone().multiply(Xe(Ri,i["k"+o]||0)),r["foot"+o]=r["shin"+o].clone().multiply(Xe(Ri,-(i["a"+o]||0)));let l=i["s"+o]||[0,0,0];r["uarm"+o]=r.chest.clone().multiply(Xe(Ri,-l[0])).multiply(Xe(Sr,a*(l[1]||0))).multiply(Xe(Mr,a*(l[2]||0))),r["farm"+o]=r["uarm"+o].clone().multiply(Xe(Ri,-(i["e"+o]||0)));let h=i["w"+o]||[0,0,0];r["hand"+o]=r["farm"+o].clone().multiply(Xe(Mr,a*(h[0]||0))).multiply(Xe(Sr,-a*(h[1]||0))).multiply(Xe(Ri,h[2]||0))}return r}var ax=["root","sp","nk","hL","hR","sL","sR","wL","wR"],cx=["kL","kR","aL","aR","eL","eR"];function sf(i,t,e){let n={};for(let s of ax){let r=i[s]||[0,0,0],o=t[s]||[0,0,0];n[s]=[0,1,2].map(a=>(r[a]||0)+((o[a]||0)-(r[a]||0))*e)}for(let s of cx)n[s]=(i[s]||0)+((t[s]||0)-(i[s]||0))*e;return n}function ee(i){let t={root:[i.P||0,0,i.yaw||0],sp:[(i.C??i.P??0)-(i.P||0),0,0],nk:[(i.H??i.C??0)-(i.C??i.P??0),0,0]},e=i.C??i.P??0;for(let n of["L","R"]){let s=i["t"+n]??0,r=i["s"+n]??s,o=i["f"+n]??0,a=i["u"+n]??0,c=i["a"+n]??a;t["h"+n]=[(i.P||0)-s,i.hipAbd??3,0],t["k"+n]=r-s,t["a"+n]=r-o,t["s"+n]=[e-a,i.shAbd??8,i.shRot??0],t["e"+n]=a-c}for(let n of["hands","pins","pray","elbowUp","fit","fitT"])i[n]!==void 0&&(t[n]=i[n]);return t.w=i,t}var bn={};bn.pranam={root:[0,0,0],sp:[0,0,0],nk:[0,0,0],hL:[0,2,0],hR:[0,2,0],aL:0,aR:0,sL:[38,28,62],sR:[38,28,62],eL:118,eR:118,hands:{L:"namaste",R:"namaste"},pray:!0};bn.hastaut={root:[-6,0,0],sp:[-22,0,0],nk:[-14,0,0],hL:[-4,2,0],hR:[-4,2,0],kL:4,kR:4,aL:4,aR:4,sL:[172,6,0],sR:[172,6,0],eL:4,eR:4,hands:{L:"open",R:"open"}};bn.padah=ee({P:104,C:166,H:182,tL:-16,sL:10,tR:-16,sR:10,uL:-12,aL:-12,uR:-12,aR:-12,hands:{L:"floor",R:"floor"},pins:["handL","handR"],fit:"C"});bn.ashwaR=ee({P:30,C:34,H:-6,tL:-104,sL:-6,fL:0,tR:38,sR:90,fR:180,uL:0,aL:0,uR:0,aR:0,hands:{L:"floor",R:"floor"},pins:["handL","handR","footL"],fit:"P"});bn.edog=ee({P:132,C:128,H:140,tL:44,tR:44,fL:12,fR:12,uL:-52,aL:-52,uR:-52,aR:-52,hands:{L:"floor",R:"floor"},pins:["handL","handR","footL","footR"],fit:"P"});bn.a8=ee({P:122,C:126,H:96,tL:32,sL:90,fL:90,tR:32,sR:90,fR:90,uL:150,aL:4,uR:150,aR:4,shAbd:24,hands:{L:"floor",R:"floor"},pins:["handL","handR"],elbowUp:1.5,fit:"P",fitT:"chest"});bn.sarp=ee({P:86,C:36,H:8,tL:90,sL:90,fL:178,tR:90,sR:90,fR:178,uL:22,aL:-8,uR:22,aR:-8,shAbd:10,hands:{L:"floor",R:"floor"},pins:["handL","handR"],elbowUp:.6});var wr=i=>{let t={...i};for(let[e,n]of[["tL","tR"],["sL","sR"],["fL","fR"],["uL","uR"],["aL","aR"]])t[e]=i[n],t[n]=i[e];return t};bn.ashwaL=ee(wr(bn.ashwaR.w));var De={};De.flatHalf=ee({P:62,C:60,H:58,tL:0,tR:0,uL:-118,aL:-118,uR:-118,aR:-118,hands:{L:"open",R:"open"}});De.squatFold=ee({P:88,C:140,H:150,tL:-48,sL:22,tR:-48,sR:22,uL:-14,aL:-14,uR:-14,aR:-14,hands:{L:"floor",R:"floor"},pins:["handL","handR"],fit:"C"});De.highLungeR=ee({P:50,C:52,H:30,tL:-96,sL:-4,fL:0,tR:58,sR:58,fR:60,uL:-2,aL:-2,uR:-2,aR:-2,hands:{L:"floor",R:"floor"},pins:["handL","handR"],fit:"P"});De.plank=ee({P:76,C:76,H:80,tL:76,tR:76,sL:76,sR:76,fL:68,fR:68,uL:0,aL:0,uR:0,aR:0,line:!0,hands:{L:"floor",R:"floor"},pins:["handL","handR","footL","footR"],fit:"P"});De.kneesDown=ee({P:104,C:110,H:118,tL:4,sL:90,fL:90,tR:4,sR:90,fR:90,uL:-24,aL:-24,uR:-24,aR:-24,hands:{L:"floor",R:"floor"},pins:["handL","handR"],fit:"C"});De.kneeToChestR=ee({P:112,C:112,H:116,tL:50,sL:50,fL:70,tR:-96,sR:18,fR:40,uL:-16,aL:-16,uR:-16,aR:-16,hands:{L:"floor",R:"floor"},pins:["handL","handR","footL"],fit:"C"});De.stepBackL=ee({P:84,C:84,H:80,tL:-14,sL:78,fL:110,tR:62,sR:62,fR:64,uL:0,aL:0,uR:0,aR:0,hands:{L:"floor",R:"floor"},pins:["handL","handR","footR"],fit:"P"});De.stepFwdL=ee({P:74,C:112,H:124,tL:-44,sL:42,fL:62,tR:-72,sR:-4,fR:0,uL:-10,aL:-10,uR:-10,aR:-10,hands:{L:"floor",R:"floor"},pins:["handL","handR","footR"],fit:"C"});De.highLungeL=ee(wr(De.highLungeR.w));De.kneeToChestL=ee(wr(De.kneeToChestR.w));De.stepBackR=ee(wr(De.stepBackL.w));De.stepFwdR=ee(wr(De.stepFwdL.w));for(let i of["stepBackR","stepFwdR","highLungeL","kneeToChestL"])De[i].pins=De[i].pins.map(t=>t.endsWith("L")?t.slice(0,-1)+"R":t.endsWith("R")?t.slice(0,-1)+"L":t);bn.ashwaL.pins=bn.ashwaL.pins.map(i=>i==="footL"?"footR":i);De.riseHalf=De.flatHalf;var wn=bn,Xl=De,Yl={"pranam>hastaut":[],"hastaut>padah":["flatHalf"],"padah>ashwaR":["squatFold","highLungeR"],"padah>ashwaL":["squatFold","highLungeL"],"ashwaR>edog":["highLungeR","stepBackL","plank"],"ashwaL>edog":["highLungeL","stepBackR","plank"],"edog>a8":["kneesDown"],"a8>sarp":[],"sarp>edog":[],"edog>ashwaL":["kneeToChestR","highLungeL"],"edog>ashwaR":["kneeToChestL","highLungeR"],"ashwaL>padah":["highLungeL","stepFwdL","squatFold"],"ashwaR>padah":["highLungeR","stepFwdR","squatFold"],"padah>hastaut":["squatFold","riseHalf"],"hastaut>pranam":[],"ardhachR>plank":["ashwaR","highLungeR","stepBackL"],"ardhachL>plank":["ashwaL","highLungeL","stepBackR"],"ardhachR>padah":["ashwaR","highLungeR","stepFwdR","squatFold"],"ardhachL>padah":["ashwaL","highLungeL","stepFwdL","squatFold"],"ardhachR>edog":["ashwaR","highLungeR","stepBackL","plank"],"ardhachL>edog":["ashwaL","highLungeL","stepBackR","plank"]};var Ee=(i=0,t=0,e=0)=>new N(i,t,e),Ar=()=>new ye,rf=(i,t)=>{let e=Ee().crossVectors(t,i);return Ar().setFromRotationMatrix(new ie().makeBasis(t,i,e))};function of(i){let{B:t,wp:e,wq:n,samp:s,sampleWorld:r,setPelvisPos:o,ik2:a,CHAIN:c,syncHair:l,toes:h}=i,u=w=>rf(i.handRest[w].d,i.handRest[w].n);function f(w,G,K){return rf(G,K).multiply(u(w).invert())}function p(w){let G=br(w),K=G.pelvis,q=Ar().setFromAxisAngle(Ee(0,1,0),((w.root||[])[2]||0)*Math.PI/180),z=Ee(0,0,1).applyQuaternion(q);for(let tt of["L","R"]){let V=(w.hands||{})[tt],j=null;if(V==="floor"&&(j=f(tt,z.clone(),Ee(0,-1,0))),V==="namaste"){let dt=Ee(0,1,0).applyQuaternion(G.chest),ct=Ee(tt==="L"?-1:1,0,0).applyQuaternion(G.chest);j=f(tt,dt,ct)}if(j){let dt=G["farm"+tt].clone().invert().multiply(j),ct=Ar().set(0,dt.y,0,dt.w);if(ct.lengthSq()>1e-9){ct.normalize();let xt=Ar().slerp(ct,.55);G["farm"+tt].multiply(xt)}G["hand"+tt]=j}}return G}let _=(w,G)=>{let K=1/0,q=-1;for(let z=0;z<s.length;z++)s[z].reg===G&&w[z*3+1]<K&&(K=w[z*3+1],q=z);return[K,q]};function y(w,G,K,q){for(let z=0;z<3;z++){let tt=r(),V=Ee(tt[G*3],tt[G*3+1],tt[G*3+2]);if(V.distanceTo(K)<.002)break;let j=e(t[c[w][2]]),dt=n(t[c[w][2]]);a(c[w],j.add(K.clone().sub(V)),q)}}function m(w,G=0,K=0,q={}){let z=p(w);i.pose(z,w.hands||{}),o(Ee(0,1,0));let tt=r(),V=1/0;for(let ft=0;ft<s.length;ft++){let Ot=s[ft].reg;!w.armBal&&/^(hand|farm)/.test(Ot)&&(w.pins||[]).some(qt=>qt.startsWith("hand"))||w.fitT&&q.fitting&&Ot===w.fitT||Ot.startsWith("hand")&&!w.armBal||(V=Math.min(V,tt[ft*3+1]))}let j=q.y!=null?q.y:w.seat?w.seat+.1:1-V-(q.fitting?0:w.drop||0);o(Ee(G,j,K));let dt=Ee(0,0,1).applyQuaternion(Ar().setFromAxisAngle(Ee(0,1,0),((w.root||[])[2]||0)*Math.PI/180)),ct=q.pins||w.pins||[];tt=r();let xt={};for(let ft of ct){let[Ot,qt]=_(tt,ft);if(qt<0)continue;let Ht=q.targets&&q.targets[ft]?q.targets[ft].clone():Ee(tt[qt*3],.003,tt[qt*3+2]);y(ft,qt,Ht,d(ft)||(ft.startsWith("hand")?dt.clone().negate().add(Ee(0,w.elbowUp||0,0)):dt.clone())),xt[ft]={k:qt,p:Ht}}if(w.pray){let ft=e(t.spine_03),Ot=Ee(0,0,1).applyQuaternion(n(t.spine_03)),qt=Ee(0,1,0).applyQuaternion(n(t.spine_03)),Ht=ft.clone().addScaledVector(Ot,.2).addScaledVector(qt,.02);for(let fe of["L","R"]){let O=Ee(fe==="L"?1:-1,0,0).applyQuaternion(n(t.spine_03)),Se=t["hand_"+fe.toLowerCase()],Jt=t["middle_01_"+fe.toLowerCase()],Qt=e(Se).sub(e(Jt).lerp(e(Se),.5));a(c["hand"+fe],Ht.clone().addScaledVector(O,.018).add(Qt),O.clone().add(Ee(0,-.7,0)).add(Ot.clone().multiplyScalar(-.3)))}}return w.hands&&w.hands.L==="lock"&&w.hands.R==="lock"&&R(),h(),l(),{y:j,pins:xt}}function d(w){let[G,K,q]=c[w].map(V=>e(t[V])),z=G.clone().add(q).multiplyScalar(.5),tt=K.sub(z);return tt.length()>.03?tt.normalize():null}function R(){let w=e(t.hand_l),G=e(t.hand_r);if(w.distanceTo(G)>.45)return;let q=w.clone().add(G).multiplyScalar(.5),z=w.clone().sub(G).normalize();for(let tt=0;tt<2;tt++)for(let V of["L","R"]){let j=V==="L"?t.hand_l:t.hand_r,dt=q.clone().addScaledVector(z,V==="L"?.035:-.035);a(c["hand"+V],dt,e(V==="L"?t.lowerarm_l:t.lowerarm_r).sub(e(V==="L"?t.upperarm_l:t.upperarm_r)))}}function C(w){if(!w.fit||!w.w)return w;let G=w.fit,K=null,q=w.w;for(let tt=(q[G]||0)-40;tt<=(q[G]||0)+40;tt+=2){let V={...q,[G]:tt};if(G==="P"&&q.C!=null&&(V.C=q.C+(tt-q.P)),G==="P"&&q.H!=null&&(V.H=q.H+(tt-q.P)),G==="C"&&q.H!=null&&(V.H=q.H+(tt-q.C)),G==="C"||G==="P")for(let ft of["L","R"])q["u"+ft]!=null&&Math.abs(q["u"+ft]-((q.C??q.P)-180))<8&&(V["u"+ft]=q["u"+ft]+(tt-q[G]),V["a"+ft]=(q["a"+ft]??q["u"+ft])+(tt-q[G]));if(q.line){let ft=V.P||0;for(let Ot of["L","R"])V["t"+Ot]=ft,V["s"+Ot]=ft,V["f"+Ot]=ft-8}let j=ee(V);m(j,0,0,{pins:[],fitting:!0});let dt=r(),ct=w.fitT?_(dt,w.fitT)[0]-_(dt,"shinL")[0]:Math.max(...["handL","handR"].map(ft=>_(dt,ft)[0])),xt=Math.abs(ct-(w.fitT?.004:.006))+Math.abs(tt-(q[G]||0))*8e-4;(!K||xt<K.err)&&(K={err:xt,v:tt,w:V})}let z=ee(K.w);return z.fitted={key:G,v:K.v,err:+K.err.toFixed(3)},z}let S=["root","sp","nk","hL","hR","sL","sR","wL","wR"],Z=["kL","kR","aL","aR","eL","eR"],I=w=>{let G=[];for(let K of S){let q=w[K]||[0,0,0];G.push(q[0]||0,q[1]||0,q[2]||0)}for(let K of Z)G.push(w[K]||0);return G},U=(w,G)=>{let K={...G},q=0;for(let z of S)K[z]=[w[q],w[q+1],w[q+2]],q+=3;for(let z of Z)K[z]=w[q++];return K},X=new Map,x=w=>{if(!X.has(w)){let G=wn[w]||Xl[w];X.set(w,C(G))}return X.get(w)},g=["footL","footR","handL","handR","shinL","shinR","pelvis","thighL","thighR","chest","head"],b=["pelvis","thighL","thighR","shinL","shinR","chest","head"];function E(w){let G=typeof w=="object"?w.jp:x(w);m(G,0,0);let K=r(),q={};for(let tt of g){let[V,j]=_(K,tt);(V<.03||(G.pins||[]).includes(tt))&&(q[tt]=j)}let z=e(t.pelvis);return{n:w,jp:G,c:q,P:K,pel:z}}function P(w,{hold:G=.5,seg:K=.95,poseSeg:q=1.15,x0:z=0,z0:tt=0}={}){let V=[w[0]];for(let ct=1;ct<w.length;ct++){let xt=Ot=>typeof Ot=="object"?Ot.name:Ot,ft=Yl[xt(w[ct-1])+">"+xt(w[ct])]||[];V.push(...ft,w[ct])}let j=[],dt=0;V.forEach((ct,xt)=>{let ft=wn[ct]&&w.includes(ct);xt>0&&(dt+=ft?q:K),j.push({n:ct,t:dt,info:ct.info||E(ct)}),ft&&(dt+=G,j.push({n:ct,t:dt,info:j[j.length-1].info,holdDup:!0}))}),j[0].x=z,j[0].z=tt;for(let ct=1;ct<j.length;ct++){let xt=j[ct-1],ft=j[ct];if(ft.holdDup){ft.x=xt.x,ft.z=xt.z,ft.anchor=xt.anchor;continue}let Ot=g.filter(Ht=>xt.info.c[Ht]!=null&&ft.info.c[Ht]!=null),qt=null;for(let Ht of Ot){let fe=xt.info.c[Ht],O=xt.info.P[fe*3]+xt.x,Se=xt.info.P[fe*3+2]+xt.z,Jt=O-ft.info.P[fe*3],Qt=Se-ft.info.P[fe*3+2],kt=0;for(let he of Ot){if(he===Ht)continue;let Bt=xt.info.c[he];kt+=Math.hypot(xt.info.P[Bt*3]+xt.x-(ft.info.P[Bt*3]+Jt),xt.info.P[Bt*3+2]+xt.z-(ft.info.P[Bt*3+2]+Qt))}(!qt||kt<qt.cost)&&(qt={cost:kt,r:Ht,k:fe,x:Jt,z:Qt})}qt?(ft.x=qt.x,ft.z=qt.z,ft.anchor=qt):(ft.x=xt.x,ft.z=xt.z)}return{keys:j,T:j[j.length-1].t}}let L=w=>w&&typeof w=="object"?w:i.CURL[w||"open"]||i.CURL.open;function H(w={},G={},K){let q={};for(let z of["L","R"]){let tt=w[z]||"open",V=G[z]||"open";if(tt==="floor"||V==="floor"||tt==="namaste"||V==="namaste"){q[z]=K<.5?tt:V;continue}let j=L(tt),dt=L(V);q[z]={c:j.c.map((ct,xt)=>ct+(dt.c[xt]-ct)*K),t:j.t.map((ct,xt)=>ct+((dt.t[xt]||0)-ct)*K)}}return q}let B=(w,G,K,q,z)=>{let tt=z*z,V=tt*z;return .5*(2*G+(-w+K)*z+(2*w-5*G+4*K-q)*tt+(-w+3*G-3*K+q)*V)};function J(w,G){let K=w.keys,q=0;for(;q<K.length-2&&K[q+1].t<=G;)q++;let z=K[q],tt=K[q+1],V=tt.t>z.t?(G-z.t)/(tt.t-z.t):1,j=V*V*(3-2*V)*.35+V*.65,dt=I(K[Math.max(0,q-1)].info.jp),ct=I(z.info.jp),xt=I(tt.info.jp),ft=I(K[Math.min(K.length-1,q+2)].info.jp),Ot=ct.map((nt,et)=>ct[et]===xt[et]?ct[et]:B(K[q-1]&&!z.holdDup?dt[et]:ct[et],ct[et],xt[et],K[q+2]&&!tt.holdDup?ft[et]:xt[et],j)),qt=j<.5?z.info.jp:tt.info.jp,Ht=U(Ot,{hands:H(z.info.jp.hands,tt.info.jp.hands,j),wL:qt.wL,wR:qt.wR,pray:z.info.jp.pray&&tt.info.jp.pray,elbowUp:(z.info.jp.elbowUp||0)*(1-j)+(tt.info.jp.elbowUp||0)*j}),fe=p(Ht);i.pose(fe,Ht.hands||{}),o(Ee(0,1,0));let O=r(),Se=nt=>{let et=1/0;for(let At=0;At<s.length;At++){let bt=s[At].reg;(nt?!nt.includes(bt):/^(hand|foot)/.test(bt))||(et=Math.min(et,O[At*3+1]))}return et},Jt=b.filter(nt=>z.info.c[nt]!=null),Qt=b.filter(nt=>tt.info.c[nt]!=null),kt=(()=>{let nt=1/0;for(let et=0;et<s.length;et++)s[et].reg.startsWith("hand")||(nt=Math.min(nt,O[et*3+1]));return nt})(),he,Bt=(nt,et)=>Math.min(...et.map(At=>O[nt.c[At]*3+1]));if(Jt.length||Qt.length){let nt=Jt.length?Bt(z.info,Jt):Se(null),et=Qt.length?Bt(tt.info,Qt):Se(null);he=nt+(et-nt)*j,he=Math.min(he,Se(["pelvis","chest","head","uarmL","uarmR"]))}else he=kt;let A,v,Q=tt.anchor;Q?(A=z.info.P[Q.k*3]+z.x-O[Q.k*3],v=z.info.P[Q.k*3+2]+z.z-O[Q.k*3+2]):(A=z.x+(tt.x-z.x)*j,v=z.z+(tt.z-z.z)*j);{let nt=1-he-((z.info.jp.drop||0)*(1-j)+(tt.info.jp.drop||0)*j),et=z.info.jp.seat?z.info.jp.seat+.1:nt,At=tt.info.jp.seat?tt.info.jp.seat+.1:nt;o(Ee(A,z.info.jp.seat||tt.info.jp.seat?et+(At-et)*j:nt,v))}let lt=Ee(0,0,1);for(let nt of["handL","handR","footL","footR"]){let et=z.info.c[nt],At=tt.info.c[nt];if(et==null||At==null)continue;let bt=Ee(z.info.P[et*3]+z.x,.003,z.info.P[et*3+2]+z.z),gt=Ee(tt.info.P[At*3]+tt.x,.003,tt.info.P[At*3+2]+tt.z);if(bt.distanceTo(gt)>.08&&nt.startsWith("foot"))continue;let zt=d(nt)||(nt.startsWith("hand")?lt.clone().negate().add(Ee(0,Ht.elbowUp||0,0)):lt.clone());y(nt,et,bt.lerp(gt,j),zt)}O=r();for(let nt of["handL","handR","footL","footR"]){let[et,At]=_(O,nt);At>=0&&et<-.003&&y(nt,At,Ee(O[At*3],.003,O[At*3+2]),nt.startsWith("hand")?lt.clone().negate():lt.clone())}return Ht.pray&&m(Ht,A,v,{y:1-he,pins:[]}),h(),l(),{x:A,z:v,i:q}}return{build:p,show:m,fit:C,timeline:P,frameAt:J,keyInfo:E,POSES:wn,PHASES:Xl,ROUTES:Yl,mixJP:sf}}var af=(i,t,e)=>(i.sp=[i.sp[0],t,0],e!=null&&(i.nk=[i.nk[0],e,0]),i),Ci={L:"floor",R:"floor"},$i={L:"open",R:"open"},Jo={L:"lock",R:"lock"},Li={tL:-90,sL:-90,fL:-70,tR:-90,sR:-90,fR:-70},Tr={"A-0002":ee({P:2,C:-8,H:-12,tL:-64,sL:2,fL:0,tR:34,sR:34,fR:0,uL:176,aL:178,uR:176,aR:178,hands:$i,pins:["footL","footR"]}),darnika:ee({P:52,C:96,H:104,tL:-80,sL:92,fL:90,tR:-80,sR:92,fR:90,uL:-128,aL:-136,uR:-128,aR:-136,shAbd:26,hands:Ci,pins:["handL","handR"],fit:"C"}),croc:ee({P:90,C:90,H:90,tL:90,sL:90,fL:176,tR:90,sR:90,fR:176,uL:92,aL:92,uR:92,aR:92,shAbd:10,hands:$i}),pranam:wn.pranam,hastaut:wn.hastaut,padah:wn.padah,ashwa:wn.ashwaR,edog:wn.edog,a8:wn.a8,sarp:wn.sarp,bok:af(ee({P:0,C:0,H:0,tL:0,tR:0,uL:178,aL:180,uR:178,aR:180,shAbd:4,hands:Jo}),34,10),plknee:ee({P:70,C:74,H:80,tL:70,sL:70,fL:62,tR:-50,sR:96,fR:120,uL:0,aL:0,uR:0,aR:0,hands:Ci,pins:["handL","handR","footL"],fit:"P"}),antknee:ee({P:70,C:104,H:140,tL:2,sL:90,fL:178,tR:-58,sR:58,fR:90,uL:4,aL:4,uR:4,aR:4,hands:Ci,pins:["handL","handR"],fit:"C"}),antkick:ee({P:86,C:86,H:78,tL:2,sL:90,fL:178,tR:112,sR:112,fR:150,uL:2,aL:2,uR:2,aR:2,hands:Ci,pins:["handL","handR"],fit:"C"}),ardhach:ee({P:18,C:-6,H:-24,tL:-98,sL:-4,fL:0,tR:44,sR:92,fR:178,uL:176,aL:178,uR:176,aR:178,hands:$i,pins:["footL"]}),lcres3:ee({P:22,C:-18,H:-40,tL:-98,sL:-4,fL:0,tR:46,sR:92,fR:178,uL:196,aL:200,uR:196,aR:200,hands:$i,pins:["footL"]}),wideknees:ee({P:34,C:4,H:-14,tL:38,sL:92,fL:178,tR:38,sR:92,fR:178,uL:-6,aL:-6,uR:-6,aR:-6,hipAbd:18,hands:Ci,pins:["handL","handR"],fit:"C"}),matsya:ee({P:-90,C:-40,H:-128,tL:-90,sL:-90,fL:-40,tR:-90,sR:-90,fR:-40,uL:-84,aL:-96,uR:-84,aR:-96,hands:Ci}),ugra:ee({...Li,P:38,C:92,H:122,uL:-58,aL:-62,uR:-58,aR:-62,hands:$i}),ugrash:ee({...Li,P:40,C:92,H:118,uL:150,aL:154,uR:150,aR:154,hands:Jo}),paschsh:ee({...Li,P:52,C:78,H:88,uL:140,aL:144,uR:140,aR:144,hands:Jo}),upavfold:ee({...Li,P:46,C:84,H:96,uL:-60,aL:-66,uR:-60,aR:-66,hipAbd:42,shAbd:20,hands:Ci,pins:["handL","handR"],fit:"C"}),upavfix:ee({...Li,P:-14,C:-26,H:-30,uL:38,aL:38,uR:38,aR:38,hipAbd:42,shAbd:14,hands:Ci,pins:["handL","handR"]}),upavnam:ee({...Li,P:46,C:84,H:96,uL:128,aL:60,uR:128,aR:60,hipAbd:42,hands:$i}),upavsh:ee({...Li,P:46,C:84,H:96,uL:146,aL:150,uR:146,aR:150,hipAbd:42,hands:Jo}),upavside:af(ee({...Li,P:6,C:6,H:6,uL:175,aL:178,uR:-30,aR:-30,hipAbd:42,hands:$i}),-38,-12)};var Er=Math.PI/180,ql=new N(0,1,0),$o=new N(0,-1,0),lx=new N(0,0,1),hx=new N(1,0,0),ux=["torso","chest","neck","thigh_r","shin_r","foot_r","thigh_l","shin_l","foot_l","upper_arm_r","forearm_r","upper_arm_l","forearm_l"];function cf(i){let t={};ux.forEach((o,a)=>t[o]=i[a]);let e=!!i[13],n=o=>e?new N(Math.cos(o*Er),Math.sin(o*Er),0):new N(0,Math.sin(o*Er),Math.cos(o*Er)),s=(o,a,c)=>{let l=n(a),h=c||new ye,u=o.clone().applyQuaternion(h);return new ye().setFromUnitVectors(u,l).multiply(h)},r={};r.pelvis=s(ql,t.torso),r.chest=s(ql,t.chest,r.pelvis),r.lumbar=r.pelvis.clone().slerp(r.chest,.45),r.head=s(ql,t.neck,r.chest),r.neck=r.chest.clone().slerp(r.head,.5);for(let[o,a]of[["R","r"],["L","l"]]){r["thigh"+o]=s($o,t["thigh_"+a],r.pelvis),r["shin"+o]=s($o,t["shin_"+a],r["thigh"+o]);let c=r["shin"+o],l=n(t["foot_"+a]),h=null;for(let u=-100;u<=60;u+=2){let f=c.clone().multiply(new ye().setFromAxisAngle(hx,-u*Er)),p=lx.clone().applyQuaternion(f).angleTo(l);(!h||p<h.e)&&(h={e:p,q:f})}r["foot"+o]=h.q,r["uarm"+o]=s($o,t["upper_arm_"+a],r.chest),r["farm"+o]=s($o,t["forearm_"+a],r["uarm"+o]),r["hand"+o]=r["farm"+o].clone()}return r}var fx=.46,hf={L:"open",R:"open"},ji=(i,t)=>Object.assign(i,t),dx={P:0,C:0,H:0,tL:-90,sL:0,fL:0,tR:-90,sR:0,fR:0,hipAbd:7},Re=(i,t={})=>ji(ee({...dx,uL:-18,aL:-66,uR:-18,aR:-66,shAbd:14,hands:hf,...i}),{seat:fx,pins:["footL","footR"],prop:"chair",...t}),px={P:-90,C:-90,H:-90,tL:-90,sL:-90,fL:-150,tR:-90,sR:-90,fR:-150,uL:-84,aL:-86,uR:-84,aR:-86,shAbd:14,hands:hf},tn=(i,t={})=>ji(ee({...px,...i}),t),Rr=(i,t)=>(i.nk=[i.nk[0]+(t[0]||0),t[1]||0,t[2]||0],i),lf=(i,t)=>(i.sp=[i.sp[0]+(t[0]||0),t[1]||0,t[2]||0],i),Zl=(i,t)=>(i.wL=t.slice(),i.wR=t.slice(),i),Kl={seat:.015,pins:["footL","footR"]},Fs=i=>Object.assign({root:[0,0,0],sp:[0,0,0],nk:[0,0,0],hL:[0,3,0],hR:[0,3,0],kL:0,kR:0,aL:0,aR:0,sL:[0,10,0],sR:[0,10,0],eL:0,eR:0,hands:{L:"open",R:"open"}},i),Jl={sideSit:Fs({seat:.015,root:[4,0,0],hL:[80,10,55],kL:150,hR:[70,22,-40],kR:152,aL:-30,aR:-40,sL:[10,14,0],sR:[6,30,0],eL:20,eR:10,hands:{L:"open",R:"floor"},pins:["handR"]}),tree:Fs({hR:[62,48,62],kR:146,aR:-30,hands:{L:"namaste",R:"namaste"},pray:!0,pins:["footL"],sL:[38,28,62],sR:[38,28,62],eL:118,eR:118}),treeUp:Fs({hR:[62,48,62],kR:146,aR:-30,pins:["footL"],sL:[176,6,0],sR:[176,6,0],eL:4,eR:4}),bfDown:Fs({...Kl,cam:60,hL:[82,52,62],kL:150,hR:[82,52,62],kR:150,aL:-20,aR:-20,sL:[32,10,0],sR:[32,10,0],eL:50,eR:50}),bfUp:Fs({...Kl,cam:60,hL:[86,30,40],kL:148,hR:[86,30,40],kR:148,aL:-20,aR:-20,sL:[32,10,0],sR:[32,10,0],eL:50,eR:50}),easy:Fs({...Kl,cam:60,hL:[84,40,66],kL:160,hR:[84,40,66],kR:160,aL:-24,aR:-24,sL:[26,12,0],sR:[26,12,0],eL:64,eR:64}),c_sit:Re({}),c_tall:Re({uL:-6,aL:-6,uR:-6,aR:-6,shAbd:18}),c_up:Re({uL:176,aL:178,uR:176,aR:178,shAbd:6}),c_fwd:Re({uL:-88,aL:-90,uR:-88,aR:-90,shAbd:4},{focus:"arms"}),c_side_arms:Re({uL:0,aL:0,uR:0,aR:0,shAbd:86}),c_cow:Re({C:-12,H:-16,uL:-36,aL:-64,uR:-36,aR:-64}),c_cat:Re({C:24,H:44,uL:-30,aL:-60,uR:-30,aR:-60}),c_fold:Re({P:30,C:74,H:86,uL:2,aL:2,uR:2,aR:2}),c_sideL:lf(Re({uL:0,aL:0,uR:168,aR:172,shAbd:10}),[0,24,0]),c_twistL:lf(Re({uL:-36,aL:-82,uR:-20,aR:-70}),[0,0,34]),c_marchR:Re({tR:-114,sR:-24,fR:8},{pins:["footL"]}),c_legR:Re({tR:-96,sR:-94,fR:-150},{pins:["footL"]}),c_toes:Re({fL:-24,fR:-24},{focus:"feet"}),c_heels:Re({fL:34,fR:34},{focus:"feet"}),c_headL:Rr(Re({}),[0,0,55]),c_headTiltL:Rr(Re({}),[0,26,0]),c_chin:Rr(Re({}),[26,0,0]),c_lookUp:Rr(Re({}),[-24,0,0]),h_open:Re({uL:-70,aL:-88,uR:-70,aR:-88,shAbd:8},{focus:"hands"}),h_fist:ji(Re({uL:-70,aL:-88,uR:-70,aR:-88,shAbd:8,hands:{L:"fist",R:"fist"}}),{focus:"hands"}),h_spread:ji(Re({uL:-70,aL:-88,uR:-70,aR:-88,shAbd:8,hands:{L:"spread",R:"spread"}}),{focus:"hands"}),h_wristUp:Zl(Re({uL:-70,aL:-88,uR:-70,aR:-88,shAbd:8},{focus:"hands"}),[0,0,-45]),h_wristDn:Zl(Re({uL:-70,aL:-88,uR:-70,aR:-88,shAbd:8},{focus:"hands"}),[0,0,50]),h_palmUp:Zl(Re({uL:-70,aL:-88,uR:-70,aR:-88,shAbd:8},{focus:"hands"}),[-80,0,0]),s_rest:tn({}),s_knees:tn({tL:-140,sL:-36,fL:-10,tR:-140,sR:-36,fR:-10},{pins:["footL","footR"]}),s_kneeR:tn({tL:-90,sL:-90,fL:-150,tR:-140,sR:-36,fR:-10},{pins:["footR"]}),s_kneeChestR:tn({tR:-214,sR:-70,fR:-140,uR:-172,aR:-116,shAbd:18}),s_kneesChest:tn({tL:-214,sL:-70,fL:-140,tR:-214,sR:-70,fR:-140,uL:-172,aL:-116,uR:-172,aR:-116,shAbd:18}),s_armsUp:tn({uL:86,aL:88,uR:86,aR:88,shAbd:10}),s_armsSide:tn({uL:-6,aL:-6,uR:-6,aR:-6,shAbd:86}),s_feetFlex:tn({fL:-184,fR:-184},{focus:"feet"}),s_feetPoint:tn({fL:-112,fR:-112},{focus:"feet"}),s_headL:Rr(tn({}),[0,0,55]),s_legSlideR:tn({tR:-120,sR:-60,fR:-110}),s_fist:ji(tn({hands:{L:"fist",R:"fist"}}),{focus:"hands"}),s_open:ji(tn({}),{focus:"hands"}),s_spread:ji(tn({hands:{L:"spread",R:"spread"}}),{focus:"hands"}),s_breathIn:tn({C:-96,H:-94,uL:-80,aL:-80,uR:-80,aR:-80})};var Cr=()=>new ye,Pi=180/Math.PI,mf=(i,t)=>{let e=new rn().setFromQuaternion(i,t);return[e.x*Pi,e.y*Pi,e.z*Pi]},Un=(i,t)=>i.clone().invert().multiply(t),jo=i=>{let t=Cr().set(i.x,0,0,i.w);if(t.lengthSq()<1e-12)return 0;t.normalize();let e=2*Math.atan2(t.x,t.w)*Pi;return e>180&&(e-=360),e<-180&&(e+=360),e},uf=i=>Math.round(i*10)/10,ff=new N(0,-1,0),mx=new N(0,1,0),gf=new N(1,0,0),Bs=i=>((i+180)%360+360)%360-180,cn={sp:[[-90,120],[-50,50],[-60,60]],nk:[[-80,90],[-45,45],[-75,75]],h:[[-40,145],[-35,90],[-50,100]],k:[0,168],a:[-95,38],s:[[-95,200],[-55,200],[-95,95]],e:[0,150],w:[[-80,80],[-30,40],[-75,75]]};function zs(i,t,e,n){let[s,r,o]=mf(i,t),a=[[s,r,o],t==="XZY"?[Bs(s+180),Bs(r+180),Bs(180-o)]:[Bs(s+180),Bs(180-r),Bs(o+180)]],c=null;for(let l of a){let h=e(l),u=0;n&&h.forEach((f,p)=>{let[_,y]=n[p],m=f,d=1/0;for(let R of[f,f+360,f-360]){let C=Math.max(0,_-R,R-y)*10+Math.abs(R)*.001;C<d&&(d=C,m=R)}h[p]=m,u+=Math.max(0,_-m,m-y)*10}),u+=Math.abs(h[0])*.01+Math.abs(h[1])*.03+Math.abs(h[2])*.05,(!c||u<c.cost)&&(c={cost:u,j:h})}return c.j}var Qo=i=>t=>[-t[0],i*t[2],i*t[1]];function df(i,t,e,n,s,r,o){let a=i[e],c=i[n],l=ff.clone().applyQuaternion(c),h=null;for(let p=-180;p<180;p+=2){let _=a.clone().multiply(Cr().setFromAxisAngle(mx,p/Pi)),y=jo(Un(_,c))*s;y<0&&(y=0);let m=_.clone().multiply(Cr().setFromAxisAngle(gf,s*y/Pi)),d=ff.clone().applyQuaternion(m).angleTo(l)*Pi,R=zs(Un(i[t],_),"XZY",Qo(r),o),C=Math.max(0,o[2][0]-R[2],R[2]-o[2][1])*.6+Math.abs(R[2])*.03+Math.max(0,o[0][0]-R[0],R[0]-o[0][1])*.3+Math.max(0,o[1][0]-R[1],R[1]-o[1][1])*.3,S=d+C;(!h||S<h.cost)&&(h={cost:S,U2:_,L2:m})}let u=Un(h.L2,c),f=Cr().set(0,u.y,0,u.w).normalize();i[e]=h.U2,i[n]=h.L2.clone().multiply(f)}function ta(i,{hinges:t=!0}={}){let e={};for(let s in i)e[s]=i[s].clone();if(t)for(let s of["L","R"]){let r=s==="L"?1:-1;df(e,"pelvis","thigh"+s,"shin"+s,1,r,cn.h),df(e,"chest","uarm"+s,"farm"+s,-1,r,cn.s)}for(let s=0;s<3;s++){let r=["L","R"].map(l=>zs(Un(e.pelvis,e["thigh"+l]),"XZY",Qo(l==="L"?1:-1),cn.h)[0]),o=Math.max(...r),a=Math.min(...r),c=0;if(o>122&&(c=o-122),a-c<-28&&(c=(c+(a- -28))/2),!c||Math.abs(c)<1)break;e.pelvis=e.pelvis.clone().multiply(Cr().setFromAxisAngle(gf,-c/Pi))}let n={};{let[s,r,o]=mf(e.pelvis,"YZX");n.root=[s,-o,r]}n.sp=zs(Un(e.pelvis,e.chest),"XZY",s=>[s[0],-s[2],s[1]],cn.sp),n.nk=zs(Un(e.chest,e.head),"XZY",s=>[s[0],-s[2],s[1]],cn.nk);for(let s of["L","R"]){let r=s==="L"?1:-1;n["h"+s]=zs(Un(e.pelvis,e["thigh"+s]),"XZY",Qo(r),cn.h),n["k"+s]=Math.max(0,jo(Un(e["thigh"+s],e["shin"+s]))),n["a"+s]=-jo(Un(e["shin"+s],e["foot"+s])),n["s"+s]=zs(Un(e.chest,e["uarm"+s]),"XZY",Qo(r),cn.s),n["e"+s]=Math.max(0,-jo(Un(e["uarm"+s],e["farm"+s]))),n["w"+s]=[0,0,0]}return n}var pf=(i,[t,e])=>Math.max(t,Math.min(e,i));function ea(i){let t=JSON.parse(JSON.stringify(i)),e=[],n=(r,o)=>{t[r]&&(t[r]=t[r].map((a,c)=>{let l=pf(a,o[c]);return Math.abs(l-a)>4&&e.push(r+c+":"+Math.round(a)),l}))},s=(r,o)=>{if(t[r]==null)return;let a=pf(t[r],o);Math.abs(a-t[r])>4&&e.push(r+":"+Math.round(t[r])),t[r]=a};n("sp",cn.sp),n("nk",cn.nk);for(let r of["L","R"])n("h"+r,cn.h),s("k"+r,cn.k),s("a"+r,cn.a),n("s"+r,cn.s),s("e"+r,cn.e);return{jp:t,viol:e}}var na=i=>{let t={};for(let e in i)t[e]=Array.isArray(i[e])?i[e].map(uf):typeof i[e]=="number"?uf(i[e]):i[e];return t};function Lr(i){let t=JSON.parse(JSON.stringify(i)),e=(n,s)=>{let r=t[n];t[n]=t[s],t[s]=r};for(let[n,s]of[["hL","hR"],["kL","kR"],["aL","aR"],["sL","sR"],["eL","eR"],["wL","wR"]])e(n,s);t.root&&(t.root=[t.root[0],-t.root[1],-t.root[2]]);for(let n of["sp","nk"])t[n]&&(t[n]=[t[n][0],-t[n][1],-t[n][2]]);return t.hands&&(t.hands={L:t.hands.R,R:t.hands.L}),t.pins&&(t.pins=t.pins.map(n=>n.replace(/L$/,"#").replace(/R$/,"L").replace("#","R"))),t}var $l=document.getElementById("stage"),gx=document.getElementById("c"),ks=new URLSearchParams(location.search),rt=null,On=null,_f="",_x="light",xf=ks.get("model")||window.MUDRYA_MODEL||"female";function jl(i,t,e){if(/^A-\d/.test(i)||/^mv:/.test(i))return i+(t?"|1":"");let n=i+"|"+(t?1:0)+"|"+(e||"");if(On[n])return n;let s=i+"|"+(t?1:0)+"|";if(On[s])return s;for(let r in On)if(r.startsWith(i+"|"+(t?1:0)+"|"))return r;return null}async function xx(){On=await fetch("poses.json"+(ks.get("v")?"?v="+encodeURIComponent(ks.get("v")):"")).then(x=>x.json()),rt=await nf(gx,{poses:On,model:xf}),rt.view.yaw=-58,rt.view.pitch=9;let i=()=>rt.resize($l.clientWidth||600,$l.clientHeight||600);i(),new ResizeObserver(i).observe($l),rt.controls&&rt.controls.addEventListener("start",()=>{rt.view.userMoved=!0}),window.Mudrya={ready:!0,loaded:!1,version:3,go(x,g,b,E){let P=jl(x,g,E);if(!P){console.warn("pose",x);return}P===_f&&b>0||(_f=P,R(P,b||0))},hands(x){let g=jl(x,0,"");return g?JSON.stringify(On[g].h):""},setTheme(x){_x=x,rt.setTheme(x),document.body.style.background=x==="dark"?"#16171b":"#f3f0ea"},resetView(){rt.view.userMoved=!1,_(!0,r?r.it.jp.cam:0)},setYaw(x){rt.view.yaw=x,rt.view.userMoved=!1,_(!0,r?r.it.jp.cam:0)},has(x){return!!jl(x,0,"")},setFigure(x){let g=/male|man|y/.test(x)&&!/female/.test(x)?"male":"female";if(g!==xf){let b=new URL(location.href);b.searchParams.set("model",g),location.replace(b)}},_fig:rt},window.__tr=(x,g,b)=>{let E=rt.stateOf(x),P=rt.stateOf(g);rt.placeStatic(E,0,0);let L=rt.makeTransition(E,0,0,P);L.at(b);let H=rt.frameTarget();return rt.placeCam(H,E.cam,!0),rt.render(),{pin:L.pin,held:L.held,lift:Object.keys(L.lift)}},window.__keys=()=>Object.keys(On);let t=null;window.__tl=(x,g,b)=>{t=e.timeline(x),rt.view.yaw=g,rt.view.pitch=b;let E=[1e9,1e9,1e9],P=[-1e9,-1e9,-1e9];for(let L=0;L<=t.T;L+=.25){e.frameAt(t,L);let H=rt.sampleWorld();for(let B=0;B<H.length;B+=3)for(let J=0;J<3;J++)E[J]=Math.min(E[J],H[B+J]),P[J]=Math.max(P[J],H[B+J])}return t.fr={c:rt.cam.position.clone().set((E[0]+P[0])/2,Math.max(.55,(E[1]+P[1])/2),(E[2]+P[2])/2),s:Math.max(P[0]-E[0],(P[1]-E[1])*1.1,P[2]-E[2])*.9},rt.mat.position.set((E[0]+P[0])/2,.003,(E[2]+P[2])/2),t.fr.s*=.82,rt.mat.material.map&&(rt.mat.material.map.rotation=Math.PI/2,rt.mat.material.map.center.set(.5,.5)),t.end=e.frameAt(t,t.T),{T:t.T,n:t.keys.length,names:t.keys.map(L=>L.n+(L.anchor?"@"+L.anchor.r:"")).join(" ")}},window.__tlFrame=(x,g)=>{let b=e.frameAt(t,x),E=t.end?x/t.T:0;if(t.end){let P=rt.B.pelvis.getWorldPosition(rt.cam.position.clone());P.x-=t.end.x*E,P.z-=t.end.z*E,rt.setPelvisPos(P),rt.syncHair()}return rt.view.userMoved=!1,rt.placeCam(t.fr,0,!0),rt.render(),g?rt.renderer.domElement.toDataURL("image/jpeg",.9):""},window.__handDbg=x=>{let g=window.__AV.POSES[x]||window.__AV.PHASES[x];window.__AV.show(g,0,0,{pins:[]});let b={};for(let E of["l","r"]){let P=rt.B["hand_"+E],L=rt.B["middle_01_"+E],H=rt.B["lowerarm_"+E],B=rt.wp(P),J=rt.wp(L),w=rt.wp(H),G=J.clone().sub(B).normalize();b[E]={fingerDir:G.toArray().map(K=>+K.toFixed(2)),wrist:B.toArray().map(K=>+K.toFixed(2)),elbow:w.toArray().map(K=>+K.toFixed(2)),sh:rt.wp(rt.B["upperarm_"+E]).toArray().map(K=>+K.toFixed(2))}}return JSON.stringify(b)},window.__conv=()=>{let x={},g=["pelvis","chest","head","thighL","shinL","footL","uarmL","farmL","thighR","shinR","footR","uarmR","farmR"];for(let b in On){let E={};for(let w in On[b].q){let G=On[b].q[w];E[w]=new ye(G[0],G[1],G[2],G[3])}let P=ta(E),L=br(P),H=0,B="";for(let w of g){let G=(/^(pelvis|chest|head)$/.test(w)?E[w].angleTo(L[w]):new N(0,-1,0).applyQuaternion(E[w]).angleTo(new N(0,-1,0).applyQuaternion(L[w])))*57.3;G>H&&(H=G,B=w)}let J=ea(P);x[b]={jp:na(P),err:+H.toFixed(1),ew:B,viol:J.viol}}return JSON.stringify(x)};let e=of(rt);window.__AV=e;let n=new Map,s=x=>{if(!n.has(x)){let g=window.__prepJP(x),[b,E]=x.split("|"),P=b==="ashwa"?+E?"ashwaL":"ashwaR":b==="ardhach"?+E?"ardhachL":"ardhachR":b,L=e.keyInfo({jp:g}),H=rt.B,B={pel:rt.wp(H.pelvis).y,ch:rt.wp(H.spine_03).y,kn:Math.min(rt.wp(H.calf_l).y,rt.wp(H.calf_r).y),hd:rt.wp(H.Head).y};n.set(x,{name:P,jp:g,info:L,geo:B})}return n.get(x)},r=null,o=null;function a(x,g,b){e.show(x.jp,g,b),l(x.jp),p=x.jp.focus?x.jp:null}let c=new xn;{let x=new Nn({color:10124124,roughness:.8}),g=(E,P,L,H,B,J)=>{let w=new Pe(new Wi(E,P,L),x);w.position.set(H,B,J),w.castShadow=!0,w.receiveShadow=!0,c.add(w)},b=.46;g(.46,.04,.44,0,b-.02,0);for(let E of[-1,1])for(let P of[-1,1])g(.035,b-.04,.035,E*.2,(b-.04)/2,P*.19);for(let E of[-1,1])g(.035,.48,.035,E*.2,b+.24,-.2);g(.44,.16,.03,0,b+.36,-.2)}c.visible=!1,rt.scene.add(c);function l(x){if(c.visible=!!(x&&x.prop==="chair"),!c.visible)return;let g=rt.wp(rt.B.pelvis);c.position.set(g.x,0,g.z-.1);let b=(x.root?x.root[2]:0)*Math.PI/180;c.rotation.y=b}function h(x){let g=x&&x.focus;if(!g)return null;let b=g==="hands"?/^(hand|farm)/:g==="feet"?/^(foot|shin)/:/^(hand|farm|uarm)/,E=rt.sampleWorld(),P=[9,9,9],L=[-9,-9,-9];return rt.samp.forEach((B,J)=>{if(b.test(B.reg))for(let w=0;w<3;w++)P[w]=Math.min(P[w],E[J*3+w]),L[w]=Math.max(L[w],E[J*3+w])}),{c:new N((P[0]+L[0])/2,(P[1]+L[1])/2,(P[2]+L[2])/2),s:Math.max(.55,L[0]-P[0],L[1]-P[1],L[2]-P[2])*1.4}}let u=null,f=0,p=null;function _(x,g){let b=p&&h(p)||rt.frameTarget();g=g||0,x||!u?u={c:b.c.clone(),s:b.s,cy:g}:(u.c.lerp(b.c,.07),u.s+=(b.s-u.s)*.07,u.cy+=(g-u.cy)*.07),rt.placeCam({c:u.c,s:u.s},u.cy,!0)}function y(x){let g=x.info.c,b=x.jp,E=x.geo||{};if(b.prop==="chair")return"CHAIR";let P=b.root&&b.root[0]>40;return!P&&E.hd<.3&&E.hd<E.pel-.2&&E.pel<.8?"LIE":E.pel<.3&&E.ch<.24?P?"PRONE":"LIE":E.pel<.32?P?"PRONE":E.kn<.09&&E.pel>.18?"KNEEL":E.kn>.3&&E.pel>.22&&g.pelvis==null&&g.thighL==null&&g.thighR==null?"STAND":"SIT":E.kn<.09?"KNEEL":g.handL!=null&&g.handR!=null?"HANDS":"STAND"}let m={"STAND>HANDS":["A-0042"],"HANDS>STAND":["A-0042"],"KNEEL>SIT":["mv:sideSit"],"SIT>KNEEL":["mv:sideSit"],"STAND>SIT":["A-0004"],"SIT>STAND":["A-0004"],"STAND>KNEEL":["A-0004"],"KNEEL>STAND":["A-0004"],"STAND>LIE":["A-0004","mv:sideSit"],"LIE>STAND":["mv:sideSit","A-0004"],"KNEEL>LIE":["mv:sideSit"],"LIE>KNEEL":["mv:sideSit"],"HANDS>SIT":["mv:sideSit"],"SIT>HANDS":["mv:sideSit"],"PRONE>SIT":["cat|0|","mv:sideSit"],"SIT>PRONE":["mv:sideSit","cat|0|"],"PRONE>STAND":["cat|0|","A-0004"],"STAND>PRONE":["A-0004","cat|0|"],"PRONE>LIE":["mv:sideSit"],"LIE>PRONE":["mv:sideSit"],"STAND>LIE ":[]};function d(x,g){return x.jp.prop==="chair"||g.jp.prop==="chair"?[]:(m[y(x)+">"+y(g)]||[]).map(E=>s(E)).filter(E=>E&&E.jp&&E.name!==x.name&&E.name!==g.name)}window.__cls=x=>y(s(x));function R(x,g){let b=s(x);if(o){let H=o;o=null,r={it:H.to,x:H.end.x,z:H.end.z}}if(!r||!g){let H=r?r.x:0,B=r?r.z:0;r={it:b,x:H,z:B},a(b,H,B),_(!0,b.jp.cam);return}let E=e.ROUTES[r.it.name+">"+b.name]?[]:d(r.it,b),P=e.timeline([{jp:r.it.jp,name:r.it.name,info:r.it.info},...E.map(H=>({jp:H.jp,name:H.name,info:H.info})),{jp:b.jp,name:b.name,info:b.info}],{seg:1,poseSeg:1,hold:0,x0:r.x,z0:r.z}),L=P.keys[P.keys.length-1];o={tl:P,t0:performance.now(),ms:g,to:b,from:r.it,end:{x:L.x,z:L.z}}}function C(x){if(o){let g=Math.min(1,(x-o.t0)/o.ms);e.frameAt(o.tl,g*o.tl.T),l(g<.5?o.from.jp:o.to.jp),p=o.to.jp.focus&&o.from.jp.focus?o.to.jp:null,_(!1,(o.from.jp.cam||0)+((o.to.jp.cam||0)-(o.from.jp.cam||0))*g),g>=1&&(f=90,r={it:o.to,x:o.end.x,z:o.end.z},o=null,a(r.it,r.x,r.z)),rt.render()}else if(r&&u&&f>0){f--,rt.view.userMoved||_(!1,r.it.jp.cam);let g=rt.mat.position;g.x+=(u.c.x-g.x)*.06,g.z+=(u.c.z-g.z)*.06}requestAnimationFrame(C),window.__scan=g=>{let b=[],E=L=>{L.sort((w,G)=>w[0]-G[0]||w[1]-G[1]);let H=(w,G,K)=>(G[0]-w[0])*(K[1]-w[1])-(G[1]-w[1])*(K[0]-w[0]),B=[],J=[];for(let w of L){for(;B.length>=2&&H(B[B.length-2],B[B.length-1],w)<=0;)B.pop();B.push(w)}for(let w of L.slice().reverse()){for(;J.length>=2&&H(J[J.length-2],J[J.length-1],w)<=0;)J.pop();J.push(w)}return B.slice(0,-1).concat(J.slice(0,-1))},P=(L,H)=>{if(L.length<3){let w=9;for(let G of L)w=Math.min(w,Math.hypot(G[0]-H[0],G[1]-H[1]));return w}let B=!0,J=9;for(let w=0;w<L.length;w++){let G=L[w],K=L[(w+1)%L.length];(K[0]-G[0])*(H[1]-G[1])-(K[1]-G[1])*(H[0]-G[0])<0&&(B=!1);let z=Math.hypot(K[0]-G[0],K[1]-G[1])||1e-9,tt=((H[0]-G[0])*(K[0]-G[0])+(H[1]-G[1])*(K[1]-G[1]))/(z*z);tt=Math.max(0,Math.min(1,tt)),J=Math.min(J,Math.hypot(G[0]+tt*(K[0]-G[0])-H[0],G[1]+tt*(K[1]-G[1])-H[1]))}return B?0:J};for(let[L,H]of g)try{o=null,r=null,R(L,0),R(H,1e3);let B=o;o=null;let J=0,w=0;for(let G=.1;G<.95;G+=.1){e.frameAt(B.tl,G*B.tl.T);let K=rt.sampleWorld(),q=0,z=0,tt=K.length/3,V=[];for(let dt=0;dt<K.length;dt+=3)q+=K[dt],z+=K[dt+2],K[dt+1]<.025&&V.push([K[dt],K[dt+2]]);let j=V.length?P(E(V),[q/tt,z/tt]):1;j>J&&(J=j,w=G)}b.push([L,H,+J.toFixed(3),+w.toFixed(1)])}catch(B){b.push([L,H,-1,String(B).slice(0,60)])}return JSON.stringify(b)},window.__strip=(g,b,E,P)=>{o=null,r=null,R(g,0),R(b,1e3);let L=o;o=null;let H=[];rt.view.yaw=(L.to.jp.root[2]||0)-(P??70),rt.view.pitch=8;for(let B of E)e.frameAt(L.tl,B*L.tl.T),_(!0,0),rt.render(),H.push(rt.renderer.domElement.toDataURL("image/jpeg",.8));return H}}requestAnimationFrame(C);function S(x,g={}){e.show({...x,pins:[]},0,0);let b=rt.sampleWorld(),E={};rt.samp.forEach((L,H)=>{E[L.reg]=Math.min(E[L.reg]??9,b[H*3+1])});let P=[];for(let L of["footL","footR"])((g.k||[]).includes(L)||E[L]<.04)&&E[L]<.12&&P.push(L);if(!x.armBal)for(let L of["L","R"])g.autoHands&&E["hand"+L]<.14&&(x.hands[L]="floor"),x.hands[L]==="floor"&&E["hand"+L]<.25&&P.push("hand"+L);for(let L of["L","R"]){let H=L==="L"?"R":"L",B=rt.wp(rt.B["calf_"+L.toLowerCase()]).y;if(x["k"+L]>70&&B<E["foot"+L]+.06&&B>.07&&E["foot"+H]<.03&&!x.armBal){x.drop=Math.min(.25,B-.055),P.includes("foot"+H)||P.push("foot"+H);break}}return x.pins=P,x}window.__prepJP=x=>{if(x.startsWith("A-"))return window.__prepCat(x);if(x.startsWith("mv:")){let[J,w]=x.slice(3).split("|"),G=Jl[J];if(!G)return null;let K=JSON.parse(JSON.stringify(G));return K.cam=K.cam||0,+w?Lr(K):K}let g=On[x],[b,E]=x.split("|"),P={};for(let J in g.q){let w=g.q[J];P[J]=new ye(w[0],w[1],w[2],w[3])}let L=Math.round(new rn().setFromQuaternion(P.pelvis,"YXZ").y*57.2958)-90;if(Tr[b]){let J=e.fit(Tr[b]);return J={...J,viol:["OVR"]},J=+E?Lr(J):J,J.cam=-L,J}let H=ea(ta(P)),B=na(H.jp);return B.root[2]=0,B.hands={...g.h},g.h.L==="namaste"&&g.h.R==="namaste"&&(B.pray=!0),B.armBal=!!g.a,B.cam=-L,S(B,{k:g.k}),B.viol=H.viol,B};let Z=null;window.__catLoad=async()=>(Z||(Z=await fetch("catalog.json"+(ks.get("v")?"?v="+encodeURIComponent(ks.get("v")):"")).then(x=>x.json())),Object.keys(Z).length),window.__prepCat=x=>{let[g,b]=x.split("|"),E=Z[g];if(!E)return null;if(Tr[g]){let z=e.fit(Tr[g]);return z=+b?Lr(z):z,z.cam=z.cam||0,z}let P=ea(ta(cf(E.g))),L=na(P.jp);L.root[2]=0,L.hands={L:"open",R:"open"},L.cam=E.g[13]?90:0,L.armBal=E.fam==="arm_balance"||/arm_balance|forearm_balance/.test((E.pos||[]).join(" "));let H=E.c||0,B=(E.tags||[]).includes("lotus")||/лотос/i.test(E.n);if(B){let z=Jl.easy,V=/полулотос/i.test(E.n)?[(L.kL||0)>=(L.kR||0)?"L":"R"]:["L","R"];for(let j of V)for(let dt of["h","k","a"])L[dt+j]=JSON.parse(JSON.stringify(z[dt+j]))}let J=!!(H&256)||B&&H&512&&!(H&2)&&!L.armBal&&!(H&192)&&L.root[0]<60;+b&&(L=Lr(L));let w=+b?{R:"L",L:"R"}:{R:"R",L:"L"},G={R:!!(H&64),L:!!(H&128)},K={R:!!(H&16),L:!!(H&32)},q=!!(H&12);for(let z of["R","L"])G[z]&&(L.hands[w[z]]="floor");if(J&&(L.seat=.015),S(L,{}),L.pins=L.pins.filter(z=>z.startsWith("hand")||(J?!1:K.R||K.L?K[z==="foot"+w.R?"R":"L"]:!0)),J)for(let z of["R","L"])K[z]&&L.pins.push("foot"+w[z]);for(let z of["R","L"])G[z]&&!L.pins.includes("hand"+w[z])&&L.pins.push("hand"+w[z]);if(q&&!J&&!L.drop){e.show(L,0,0);let z=Math.min(rt.wp(rt.B.calf_l).y,rt.wp(rt.B.calf_r).y);z>.07&&z<.5&&(L.drop=z-.055)}return J||U(L),L.viol=P.viol,L.flags=H,L};function I(x){e.show(x,0,0);let g=rt.sampleWorld(),b=0,E=0,P=g.length/3,L=[];for(let q=0;q<g.length;q+=3)b+=g[q],E+=g[q+2],g[q+1]<.03&&L.push([g[q],g[q+2]]);if(b/=P,E/=P,L.length<3)return 0;L.sort((q,z)=>q[0]-z[0]||q[1]-z[1]);let H=(q,z,tt)=>(z[0]-q[0])*(tt[1]-q[1])-(z[1]-q[1])*(tt[0]-q[0]),B=[],J=[];for(let q of L){for(;B.length>=2&&H(B[B.length-2],B[B.length-1],q)<=0;)B.pop();B.push(q)}for(let q of L.slice().reverse()){for(;J.length>=2&&H(J[J.length-2],J[J.length-1],q)<=0;)J.pop();J.push(q)}let w=B.slice(0,-1).concat(J.slice(0,-1));if(w.length<3){let q=9;for(let z of L)q=Math.min(q,Math.hypot(z[0]-b,z[1]-E));return q}let G=!0,K=9;for(let q=0;q<w.length;q++){let z=w[q],tt=w[(q+1)%w.length];(tt[0]-z[0])*(E-z[1])-(tt[1]-z[1])*(b-z[0])<0&&(G=!1);let V=Math.hypot(tt[0]-z[0],tt[1]-z[1])||1e-9,j=((b-z[0])*(tt[0]-z[0])+(E-z[1])*(tt[1]-z[1]))/(V*V);j=Math.max(0,Math.min(1,j)),K=Math.min(K,Math.hypot(z[0]+j*(tt[0]-z[0])-b,z[1]+j*(tt[1]-z[1])-E))}return G?0:K}function U(x){if(x.armBal||x.seat)return;let g=I(x);if(!(g<.02)){for(let b=0;b<14&&g>=.02;b++){let E=null;for(let[P,L]of[[0,3],[0,-3],[1,3],[1,-3]]){let H=x.root.slice();x.root[P]+=L;let B=I(x);(!E||B<E.d)&&(E={d:B,i:P,s:L}),x.root=H}if(E.d>=g)break;x.root[E.i]+=E.s,g=E.d}x.balanced=+g.toFixed(3)}}window.__shotOld=(x,g)=>{let b=rt.stateOf(x),E=window.__prepJP(x).root[2];rt.view.yaw=E-(g??55),rt.view.pitch=8,rt.placeStatic(b,0,0);let P=rt.frameTarget();return rt.view.userMoved=!1,rt.placeCam(P,0,!0),rt.render(),rt.renderer.domElement.toDataURL("image/jpeg",.85)},window.__shot=(x,g,b,E)=>{rt.view.yaw=(x.root?x.root[2]:0)-(g??55),rt.view.pitch=8,e.show(x,0,0),l(x);let P=h(x)||rt.frameTarget();return rt.view.userMoved=!1,rt.placeCam(P,0,!0),rt.render(),rt.renderer.domElement.toDataURL("image/jpeg",.85)},window.__showA=(x,g,b,E)=>{let P=e.POSES[x]||e.PHASES[x];E&&(P=e.fit(P)),rt.view.yaw=g??90,rt.view.pitch=b??6;let L=e.show(P,0,0),H=rt.frameTarget();return window.__zoom&&(H={c:rt.wp(rt.B.pelvis),s:window.__zoom}),rt.placeCam(H,0,!0),rt.render(),JSON.stringify({fit:P.fitted||null})};let X=null;window.__filmInit=(x,g,b)=>{rt.view.yaw=g,rt.view.pitch=b;let E=rt.stateOf(x[0]);rt.placeStatic(E,0,0);let P=0,L=0,H=new rt.cam.position.constructor,B=[1e9,1e9,1e9],J=[-1e9,-1e9,-1e9],w=()=>{let z=rt.sampleWorld();for(let tt=0;tt<z.length;tt+=3)for(let V=0;V<3;V++)B[V]=Math.min(B[V],z[tt+V]),J[V]=Math.max(J[V],z[tt+V])};w();let G=[];for(let z=1;z<x.length;z++){let tt=rt.stateOf(x[z-1]),V=rt.stateOf(x[z]);rt.placeStatic(tt,P,L);let j=rt.makeTransition(tt,P,L,V);for(let dt of[.25,.5,.75,1])j.at(dt),w();G.push({A:tt,B2:V,x:P,z:L}),P=j.bx,L=j.bz}let K={x:(B[0]+J[0])/2,y:Math.max(.6,(B[1]+J[1])/2),z:(B[2]+J[2])/2},q=Math.max(J[0]-B[0],(J[1]-B[1])*1.1,J[2]-B[2]);return X={D:{x:P,z:L},tr:G,fr:{c:rt.cam.position.clone().set(K.x,K.y,K.z),s:q*.92}},{n:G.length,c:K,s:q}},window.__filmFrame=(x,g,b)=>{let E=X.tr[x];rt.placeStatic(E.A,E.x,E.z),g>0&&rt.makeTransition(E.A,E.x,E.z,E.B2).at(g);{let P=rt.B.pelvis.getWorldPosition(rt.cam.position.clone());P.x-=X.D.x*b,P.z-=X.D.z*b,rt.setPelvisPos(P),rt.syncHair()}return rt.view.userMoved=!1,rt.placeCam(X.fr,0,!0),rt.render(),rt.renderer.domElement.toDataURL("image/jpeg",.9)},window.__miny=(x,g,b)=>{__tr(x,g,b);let E=rt.sampleWorld(),P={};return rt.samp.forEach((L,H)=>{P[L.reg]=Math.min(P[L.reg]??9,E[H*3+1])}),JSON.stringify(Object.fromEntries(Object.entries(P).map(([L,H])=>[L,+H.toFixed(3)])))},window.__hmin=x=>{let g=rt.stateOf(x);rt.placeStatic(g,0,0);let b=rt.sampleWorld(),E={};return rt.samp.forEach((P,L)=>{E[P.reg]=Math.min(E[P.reg]??9,b[L*3+1])}),JSON.stringify(Object.fromEntries(Object.entries(E).map(([P,L])=>[P,+L.toFixed(3)])))},window.__touch=x=>{let g=rt.stateOf(x);return Object.keys(g.touch).join(",")+" pelY="+g.pelvisY.toFixed(3)},await window.__catLoad(),window.Mudrya.loaded=!0,window.Mudrya.go(ks.get("pose")||"tad",0,0),window.AndroidBridge&&AndroidBridge.onReady&&AndroidBridge.onReady()}xx().catch(i=>{console.error(i),window.AndroidBridge&&AndroidBridge.onError&&AndroidBridge.onError(String(i))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
