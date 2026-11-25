(()=>{var tl="170",ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rf=0,ah=1,Ef=2;var Tu=1,el=2,ti=3,Gn=0,on=1,Dn=2,Si=0,vs=1,ch=2,lh=3,hh=4,Lf=5,Gi=100,Cf=101,Pf=102,If=103,Df=104,Nf=200,Uf=201,Vf=202,Of=203,Ha=204,Ga=205,Ff=206,Bf=207,kf=208,zf=209,Hf=210,Gf=211,Wf=212,Xf=213,qf=214,Wa=0,Xa=1,qa=2,ws=3,Ya=4,Za=5,Ka=6,Ja=7,Ru=0,Yf=1,Zf=2,bi=0,Kf=1,Jf=2,$f=3,nl=4,jf=5,Qf=6,td=7,uh="attached",ed="detached",Eu=300,Ts=301,Rs=302,$a=303,ja=304,Wo=306,qi=1e3,ei=1001,cr=1002,Qe=1003,il=1004;var xs=1005;var rn=1006,sr=1007;var Hn=1008;var si=1009,Lu=1010,Cu=1011,lr=1012,sl=1013,Yi=1014,Un=1015,yr=1016,rl=1017,ol=1018,Es=1020,Pu=35902,Iu=1021,Du=1022,yn=1023,Nu=1024,Uu=1025,Ms=1026,Ls=1027,al=1028,cl=1029,Vu=1030,ll=1031;var hl=1033,co=33776,lo=33777,ho=33778,uo=33779,Qa=35840,tc=35841,ec=35842,nc=35843,ic=36196,sc=37492,rc=37496,oc=37808,ac=37809,cc=37810,lc=37811,hc=37812,uc=37813,fc=37814,dc=37815,pc=37816,mc=37817,gc=37818,_c=37819,Ac=37820,xc=37821,fo=36492,yc=36494,vc=36495,Ou=36283,Mc=36284,Sc=36285,bc=36286;var Cs=2300,Ps=2301,ha=2302,fh=2400,dh=2401,ph=2402,nd=2500;var Fu=0,Xo=1,vr=2,id=3200,sd=3201;var Bu=0,rd=1,vi="",De="srgb",tn="srgb-linear",qo="linear",we="srgb";var ss=7680;var mh=519,od=512,ad=513,cd=514,ku=515,ld=516,hd=517,ud=518,fd=519,wc=35044;var gh="300 es",ni=2e3,po=2001,ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_h=1234567,rr=Math.PI/180,Is=180/Math.PI;function Vn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function Je(i,t,e){return Math.max(t,Math.min(e,i))}function ul(i,t){return(i%t+t)%t}function dd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function pd(i,t,e){return i!==t?(e-i)/(t-i):0}function or(i,t,e){return(1-e)*i+e*t}function md(i,t,e,n){return or(i,t,1-Math.exp(-e*n))}function gd(i,t=1){return t-Math.abs(ul(i,t*2)-t)}function _d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ad(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yd(i,t){return i+Math.random()*(t-i)}function vd(i){return i*(.5-Math.random())}function Md(i){i!==void 0&&(_h=i);let t=_h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sd(i){return i*rr}function bd(i){return i*Is}function wd(i){return(i&i-1)===0&&i!==0}function Td(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ed(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Yo={DEG2RAD:rr,RAD2DEG:Is,generateUUID:Vn,clamp:Je,euclideanModulo:ul,mapLinear:dd,inverseLerp:pd,lerp:or,damp:md,pingpong:gd,smoothstep:_d,smootherstep:Ad,randInt:xd,randFloat:yd,randFloatSpread:vd,seededRandom:Md,degToRad:Sd,radToDeg:bd,isPowerOfTwo:wd,ceilPowerOfTwo:Td,floorPowerOfTwo:Rd,setQuaternionFromProperEuler:Ed,normalize:Se,denormalize:Nn},te=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ae=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],x=s[0],m=s[3],d=s[6],E=s[1],L=s[4],M=s[7],Z=s[2],I=s[5],U=s[8];return r[0]=o*x+a*E+c*Z,r[3]=o*m+a*L+c*I,r[6]=o*d+a*M+c*U,r[1]=l*x+h*E+u*Z,r[4]=l*m+h*L+u*I,r[7]=l*d+h*M+u*U,r[2]=f*x+p*E+_*Z,r[5]=f*m+p*L+_*I,r[8]=f*d+p*M+_*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,_=e*u+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ua.makeScale(t,e)),this}rotate(t){return this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ua=new ae;function zu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ld(){let i=hr("canvas");return i.style.display="block",i}var Ah={};function nr(i){i in Ah||(Ah[i]=!0,console.warn(i))}function Cd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Pd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Id(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var me={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(i.r=Ss(i.r),i.g=Ss(i.g),i.b=Ss(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?qo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xh=[.64,.33,.3,.6,.15,.06],yh=[.2126,.7152,.0722],vh=[.3127,.329],Mh=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);me.define({[tn]:{primaries:xh,whitePoint:vh,transfer:qo,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:yh,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:xh,whitePoint:vh,transfer:we,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:yh,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});var rs,Tc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=hr("canvas")),rs.width=t.width,rs.height=t.height;let n=rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dd=0,mo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fa(s[o].image)):r.push(fa(s[o]))}else r=fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nd=0,Ye=class i extends ri{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,s=ei,r=rn,o=Hn,a=yn,c=si,l=i.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Vn(),this.name="",this.source=new mo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qi:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case cr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qi:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case cr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Eu;Ye.DEFAULT_ANISOTROPY=1;var xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],_=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(l+1)/2,M=(p+1)/2,Z=(d+1)/2,I=(h+f)/4,U=(u+x)/4,X=(_+m)/4;return L>M&&L>Z?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=I/n,r=U/n):M>Z?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=I/s,r=X/s):Z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(Z),n=U/r,s=X/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(u-x)/E,this.z=(f-h)/E,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rc=class extends ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new mo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends Rc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},go=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ec=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ve=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(u!==x||c!==f||l!==p||h!==_){let m=1-a,d=c*f+l*p+h*_+u*x,E=d>=0?1:-1,L=1-d*d;if(L>Number.EPSILON){let Z=Math.sqrt(L),I=Math.atan2(Z,d*E);m=Math.sin(m*I)/Z,a=Math.sin(a*I)/Z}let M=a*E;if(c=c*m+f*M,l=l*m+p*M,h=h*m+_*M,u=u*m+x*M,m===1-a){let Z=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=Z,l*=Z,h*=Z,u*=Z}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*p-l*f,t[e+1]=c*_+h*f+l*u-a*p,t[e+2]=l*_+h*p+a*f-c*u,t[e+3]=h*_-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"YZX":this._x=f*h*u+l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u-f*p*_;break;case"XZY":this._x=f*h*u-l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return da.copy(this).projectOnVector(t),this.sub(da)}reflect(t){return this.sub(da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},da=new N,bh=new ve,an=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Vr.subVectors(this.max,Zs),os.subVectors(t.a,Zs),as.subVectors(t.b,Zs),cs.subVectors(t.c,Zs),mi.subVectors(as,os),gi.subVectors(cs,as),Vi.subVectors(os,cs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Vi.z,Vi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Vi.z,0,-Vi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Vi.y,Vi.x,0];return!pa(e,os,as,cs,Vr)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,os,as,cs,Vr))?!1:(Or.crossVectors(mi,gi),e=[Or.x,Or.y,Or.z],pa(e,os,as,cs,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Zn=[new N,new N,new N,new N,new N,new N,new N,new N],Ln=new N,Ur=new an,os=new N,as=new N,cs=new N,mi=new N,gi=new N,Vi=new N,Zs=new N,Vr=new N,Or=new N,Oi=new N;function pa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Oi.fromArray(i,r);let a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ud=new an,Ks=new N,ma=new N,mn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ud.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(ma)),this.expandByPoint(Ks.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new N,ga=new N,Fr=new N,_i=new N,_a=new N,Br=new N,Aa=new N,wi=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ga.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(ga);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fr),a=_i.dot(this.direction),c=-_i.dot(Fr),l=_i.lengthSq(),h=Math.abs(1-o*o),u,f,p,_;if(h>0)if(u=o*c-a,f=o*a-c,_=r*h,u>=0)if(f>=-_)if(f<=_){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ga).addScaledVector(Fr,f),p}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){_a.subVectors(e,t),Br.subVectors(n,t),Aa.crossVectors(_a,Br);let o=this.direction.dot(Aa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,t);let c=a*this.direction.dot(Br.crossVectors(_i,Br));if(c<0)return null;let l=a*this.direction.dot(_a.cross(_i));if(l<0||c+l>o)return null;let h=-a*_i.dot(Aa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,p,_,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,p,_,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,p,_,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,_=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+_*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=_+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,p=c*u,_=l*h,x=l*u;e[0]=f+x*a,e[4]=_*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,p=c*u,_=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,p=o*u,_=a*h,x=a*u;e[0]=c*h,e[4]=_*l-p,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=p*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=_*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+_,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*c,p=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vd,t,Od)}lookAt(t,e,n){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ai.crossVectors(n,dn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ai.crossVectors(n,dn)),Ai.normalize(),kr.crossVectors(dn,Ai),s[0]=Ai.x,s[4]=kr.x,s[8]=dn.x,s[1]=Ai.y,s[5]=kr.y,s[9]=dn.y,s[2]=Ai.z,s[6]=kr.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],x=n[6],m=n[10],d=n[14],E=n[3],L=n[7],M=n[11],Z=n[15],I=s[0],U=s[4],X=s[8],A=s[12],g=s[1],S=s[5],T=s[9],P=s[13],C=s[2],z=s[6],V=s[10],J=s[14],b=s[3],G=s[7],K=s[11],Y=s[15];return r[0]=o*I+a*g+c*C+l*b,r[4]=o*U+a*S+c*z+l*G,r[8]=o*X+a*T+c*V+l*K,r[12]=o*A+a*P+c*J+l*Y,r[1]=h*I+u*g+f*C+p*b,r[5]=h*U+u*S+f*z+p*G,r[9]=h*X+u*T+f*V+p*K,r[13]=h*A+u*P+f*J+p*Y,r[2]=_*I+x*g+m*C+d*b,r[6]=_*U+x*S+m*z+d*G,r[10]=_*X+x*T+m*V+d*K,r[14]=_*A+x*P+m*J+d*Y,r[3]=E*I+L*g+M*C+Z*b,r[7]=E*U+L*S+M*z+Z*G,r[11]=E*X+L*T+M*V+Z*K,r[15]=E*A+L*P+M*J+Z*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],_=t[3],x=t[7],m=t[11],d=t[15];return _*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+x*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],_=t[12],x=t[13],m=t[14],d=t[15],E=u*m*l-x*f*l+x*c*p-a*m*p-u*c*d+a*f*d,L=_*f*l-h*m*l-_*c*p+o*m*p+h*c*d-o*f*d,M=h*x*l-_*u*l+_*a*p-o*x*p-h*a*d+o*u*d,Z=_*u*c-h*x*c-_*a*f+o*x*f+h*a*m-o*u*m,I=e*E+n*L+s*M+r*Z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return t[0]=E*U,t[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*U,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*d+n*c*d)*U,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*U,t[4]=L*U,t[5]=(h*m*r-_*f*r+_*s*p-e*m*p-h*s*d+e*f*d)*U,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*d-e*c*d)*U,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*p+e*c*p)*U,t[8]=M*U,t[9]=(_*u*r-h*x*r-_*n*p+e*x*p+h*n*d-e*u*d)*U,t[10]=(o*x*r-_*a*r+_*n*l-e*x*l-o*n*d+e*a*d)*U,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*U,t[12]=Z*U,t[13]=(h*x*s-_*u*s+_*n*f-e*x*f-h*n*m+e*u*m)*U,t[14]=(_*a*s-o*x*s-_*n*c+e*x*c+o*n*m-e*a*m)*U,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,_=r*u,x=o*h,m=o*u,d=a*u,E=c*l,L=c*h,M=c*u,Z=n.x,I=n.y,U=n.z;return s[0]=(1-(x+d))*Z,s[1]=(p+M)*Z,s[2]=(_-L)*Z,s[3]=0,s[4]=(p-M)*I,s[5]=(1-(f+d))*I,s[6]=(m+E)*I,s[7]=0,s[8]=(_+L)*U,s[9]=(m-E)*U,s[10]=(1-(f+x))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ls.set(s[0],s[1],s[2]).length(),o=ls.set(s[4],s[5],s[6]).length(),a=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let l=1/r,h=1/o,u=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ni){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,_;if(a===ni)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===po)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ni){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,p=(n+s)*h,_,x;if(a===ni)_=(o+r)*u,x=-2*u;else if(a===po)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ls=new N,Cn=new se,Vd=new N(0,0,0),Od=new N(1,1,1),Ai=new N,kr=new N,dn=new N,wh=new se,Th=new ve,cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Th.setFromEuler(this),this.setFromQuaternion(Th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fd=0,Rh=new N,hs=new ve,Jn=new se,zr=new N,Js=new N,Bd=new N,kd=new ve,Eh=new N(1,0,0),Lh=new N(0,1,0),Ch=new N(0,0,1),Ph={type:"added"},zd={type:"removed"},us={type:"childadded",child:null},xa={type:"childremoved",child:null},Pe=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new cn,n=new ve,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new ae}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Eh,t)}rotateY(t){return this.rotateOnAxis(Lh,t)}rotateZ(t){return this.rotateOnAxis(Ch,t)}translateOnAxis(t,e){return Rh.copy(t).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eh,t)}translateY(t){return this.translateOnAxis(Lh,t)}translateZ(t){return this.translateOnAxis(Ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zr.copy(t):zr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Js,zr,this.up):Jn.lookAt(zr,Js,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Jn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ph),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zd),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ph),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,Bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new N(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new N,$n=new N,ya=new N,jn=new N,fs=new N,ds=new N,Ih=new N,va=new N,Ma=new N,Sa=new N,ba=new xe,wa=new xe,Ta=new xe,Wi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),$n.subVectors(n,e),ya.subVectors(t,e);let o=Pn.dot(Pn),a=Pn.dot($n),c=Pn.dot(ya),l=$n.dot($n),h=$n.dot(ya),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(a,jn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ba.setScalar(0),wa.setScalar(0),Ta.setScalar(0),ba.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,n),Ta.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ba,r.x),o.addScaledVector(wa,r.y),o.addScaledVector(Ta,r.z),o}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),$n.subVectors(t,e),Pn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Pn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;fs.subVectors(s,n),ds.subVectors(r,n),va.subVectors(t,n);let c=fs.dot(va),l=ds.dot(va);if(c<=0&&l<=0)return e.copy(n);Ma.subVectors(t,s);let h=fs.dot(Ma),u=ds.dot(Ma);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(fs,o);Sa.subVectors(t,r);let p=fs.dot(Sa),_=ds.dot(Sa);if(_>=0&&p<=_)return e.copy(r);let x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(ds,a);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Ih.subVectors(r,s),a=(u-h)/(u-h+(p-_)),e.copy(s).addScaledVector(Ih,a);let d=1/(m+x+f);return o=x*d,a=f*d,e.copy(n).addScaledVector(fs,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function Ra(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=ul(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ra(o,r,t+1/3),this.g=Ra(o,r,t),this.b=Ra(o,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=Hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return me.fromWorkingColorSpace(je.copy(this),t),Math.round(Je(je.r*255,0,255))*65536+Math.round(Je(je.g*255,0,255))*256+Math.round(Je(je.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(je.copy(this),e);let n=je.r,s=je.g,r=je.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=De){me.fromWorkingColorSpace(je.copy(this),t);let e=je.r,n=je.g,s=je.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(Hr);let n=or(xi.h,Hr.h,e),s=or(xi.s,Hr.s,e),r=or(xi.l,Hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Yt;Yt.NAMES=Hu;var Hd=0,gn=class extends ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Vn(),this.name="",this.blending=vs,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Ga,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Wn=class extends gn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new N,Gr=new te,Ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wc&&(t.usage=this.usage),t}};var Ao=class extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var xo=class extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Mn=class extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gd=0,xn=new se,Ea=new Pe,ps=new N,pn=new an,$s=new an,qe=new N,Sn=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zu(t)?xo:Ao)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Ea.lookAt(t),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mn(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(pn.min,$s.min),pn.expandByPoint(qe),qe.addVectors(pn.max,$s.max),pn.expandByPoint(qe)):(pn.expandByPoint($s.min),pn.expandByPoint($s.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)qe.fromBufferAttribute(a,l),c&&(ps.fromBufferAttribute(t,l),qe.add(ps)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let X=0;X<n.count;X++)a[X]=new N,c[X]=new N;let l=new N,h=new N,u=new N,f=new te,p=new te,_=new te,x=new N,m=new N;function d(X,A,g){l.fromBufferAttribute(n,X),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,g),f.fromBufferAttribute(r,X),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,g),h.sub(l),u.sub(l),p.sub(f),_.sub(f);let S=1/(p.x*_.y-_.x*p.y);isFinite(S)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(S),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(S),a[X].add(x),a[A].add(x),a[g].add(x),c[X].add(m),c[A].add(m),c[g].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let X=0,A=E.length;X<A;++X){let g=E[X],S=g.start,T=g.count;for(let P=S,C=S+T;P<C;P+=3)d(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let L=new N,M=new N,Z=new N,I=new N;function U(X){Z.fromBufferAttribute(s,X),I.copy(Z);let A=a[X];L.copy(A),L.sub(Z.multiplyScalar(Z.dot(A))).normalize(),M.crossVectors(I,A);let S=M.dot(c[X])<0?-1:1;o.setXYZW(X,L.x,L.y,L.z,S)}for(let X=0,A=E.length;X<A;++X){let g=E[X],S=g.start,T=g.count;for(let P=S,C=S+T;P<C;P+=3)U(t.getX(P+0)),U(t.getX(P+1)),U(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)f[_++]=l[p++]}return new Ue(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dh=new se,Fi=new wi,Wr=new mn,Nh=new N,Xr=new N,qr=new N,Yr=new N,La=new N,Zr=new N,Uh=new N,Kr=new N,Ne=class extends Pe{constructor(t=new Sn,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(La.fromBufferAttribute(u,t),o?Zr.addScaledVector(La,h):Zr.addScaledVector(La.sub(e),h))}e.add(Zr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(Wr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Wr,Nh)===null||Fi.origin.distanceToSquared(Nh)>(t.far-t.near)**2))&&(Dh.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(Dh),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){let m=f[_],d=o[m.materialIndex],E=Math.max(m.start,p.start),L=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,Z=L;M<Z;M+=3){let I=a.getX(M),U=a.getX(M+1),X=a.getX(M+2);s=Jr(this,d,t,n,l,h,u,I,U,X),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){let E=a.getX(m),L=a.getX(m+1),M=a.getX(m+2);s=Jr(this,o,t,n,l,h,u,E,L,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){let m=f[_],d=o[m.materialIndex],E=Math.max(m.start,p.start),L=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,Z=L;M<Z;M+=3){let I=M,U=M+1,X=M+2;s=Jr(this,d,t,n,l,h,u,I,U,X),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){let E=m,L=m+1,M=m+2;s=Jr(this,o,t,n,l,h,u,E,L,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Wd(i,t,e,n,s,r,o,a){let c;if(t.side===on?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Gn,a),c===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Kr);return l<e.near||l>e.far?null:{distance:l,point:Kr.clone(),object:i}}function Jr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Xr),i.getVertexPosition(c,qr),i.getVertexPosition(l,Yr);let h=Wd(i,t,e,n,Xr,qr,Yr,Uh);if(h){let u=new N;Wi.getBarycoord(Uh,Xr,qr,Yr,u),s&&(h.uv=Wi.getInterpolatedAttribute(s,a,c,l,u,new te)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,a,c,l,u,new te)),o&&(h.normal=Wi.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new N,materialIndex:0};Wi.getNormal(Xr,qr,Yr,f.normal),h.face=f,h.barycoord=u}return h}var Zi=class i extends Sn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Mn(l,3)),this.setAttribute("normal",new Mn(h,3)),this.setAttribute("uv",new Mn(u,2));function _(x,m,d,E,L,M,Z,I,U,X,A){let g=M/U,S=Z/X,T=M/2,P=Z/2,C=I/2,z=U+1,V=X+1,J=0,b=0,G=new N;for(let K=0;K<V;K++){let Y=K*S-P;for(let O=0;O<z;O++){let tt=O*g-T;G[x]=tt*E,G[m]=Y*L,G[d]=C,l.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[d]=I>0?1:-1,h.push(G.x,G.y,G.z),u.push(O/U),u.push(1-K/X),J+=1}}for(let K=0;K<X;K++)for(let Y=0;Y<U;Y++){let O=f+Y+z*K,tt=f+Y+z*(K+1),H=f+(Y+1)+z*(K+1),j=f+(Y+1)+z*K;c.push(O,tt,j),c.push(tt,H,j),b+=6}a.addGroup(p,b,A),p+=b,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ds(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=Ds(i[e]);for(let s in n)t[s]=n[s]}return t}function Xd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var qd={clone:Ds,merge:nn},Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends gn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},yo=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yi=new N,Vh=new te,Oh=new te,ze=class extends yo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Vh,Oh),e.subVectors(Oh,Vh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ms=-90,gs=1,Lc=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new ze(ms,gs,t,e);r.layers=this.layers,this.add(r);let o=new ze(ms,gs,t,e);o.layers=this.layers,this.add(o);let a=new ze(ms,gs,t,e);a.layers=this.layers,this.add(a);let c=new ze(ms,gs,t,e);c.layers=this.layers,this.add(c);let l=new ze(ms,gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},vo=class extends Ye{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cc=class extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zi(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Si});r.uniforms.tEquirect.value=e;let o=new Ne(s,r),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=rn),new Lc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ca=new N,Kd=new N,Jd=new ae,In=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ca.subVectors(n,e).cross(Kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Jd.getNormalMatrix(t),s=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new mn,$r=new N,ur=class{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],_=s[9],x=s[10],m=s[11],d=s[12],E=s[13],L=s[14],M=s[15];if(n[0].setComponents(c-r,f-l,m-p,M-d).normalize(),n[1].setComponents(c+r,f+l,m+p,M+d).normalize(),n[2].setComponents(c+o,f+h,m+_,M+E).normalize(),n[3].setComponents(c-o,f-h,m-_,M-E).normalize(),n[4].setComponents(c-a,f-u,m-x,M-L).normalize(),e===ni)n[5].setComponents(c+a,f+u,m+x,M+L).normalize();else if(e===po)n[5].setComponents(a,u,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if($r.x=s.normal.x>0?t.max.x:t.min.x,$r.y=s.normal.y>0?t.max.y:t.min.y,$r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $d(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<u.length;p++){let _=u[f],x=u[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,_=u.length;p<_;p++){let x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ki=class i extends Sn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,p=[],_=[],x=[],m=[];for(let d=0;d<h;d++){let E=d*f-o;for(let L=0;L<l;L++){let M=L*u-r;_.push(M,-E,0),x.push(0,0,1),m.push(L/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<a;E++){let L=E+l*d,M=E+l*(d+1),Z=E+1+l*(d+1),I=E+1+l*d;p.push(L,M,I),p.push(M,Z,I)}this.setIndex(p),this.setAttribute("position",new Mn(_,3)),this.setAttribute("normal",new Mn(x,3)),this.setAttribute("uv",new Mn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qd=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
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
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
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
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,up=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vp=`#define PI 3.141592653589793
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
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sp=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
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
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,Jp=`struct PhysicalMaterial {
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
}`,$p=`
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a0=`#if defined( USE_POINTS_UV )
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
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,p0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
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
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
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
}`,sm=`#if DEPTH_PACKING == 3200
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
}`,rm=`#define DISTANCE
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
}`,om=`#define DISTANCE
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,fm=`uniform vec3 diffuse;
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
}`,dm=`#define LAMBERT
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define MATCAP
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
}`,gm=`#define MATCAP
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
}`,_m=`#define NORMAL
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
}`,Am=`#define NORMAL
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
}`,xm=`#define PHONG
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
}`,ym=`#define PHONG
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
}`,vm=`#define STANDARD
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
}`,Mm=`#define STANDARD
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
}`,Sm=`#define TOON
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
}`,bm=`#define TOON
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
}`,wm=`uniform float size;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Em=`uniform vec3 color;
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
}`,Lm=`uniform float rotation;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:jd,alphahash_pars_fragment:Qd,alphamap_fragment:tp,alphamap_pars_fragment:ep,alphatest_fragment:np,alphatest_pars_fragment:ip,aomap_fragment:sp,aomap_pars_fragment:rp,batching_pars_vertex:op,batching_vertex:ap,begin_vertex:cp,beginnormal_vertex:lp,bsdfs:hp,iridescence_fragment:up,bumpmap_pars_fragment:fp,clipping_planes_fragment:dp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:gp,color_fragment:_p,color_pars_fragment:Ap,color_pars_vertex:xp,color_vertex:yp,common:vp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:bp,displacementmap_vertex:wp,emissivemap_fragment:Tp,emissivemap_pars_fragment:Rp,colorspace_fragment:Ep,colorspace_pars_fragment:Lp,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Ip,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Wp,envmap_vertex:Np,fog_vertex:Up,fog_pars_vertex:Vp,fog_fragment:Op,fog_pars_fragment:Fp,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:kp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Gp,lights_toon_fragment:Xp,lights_toon_pars_fragment:qp,lights_phong_fragment:Yp,lights_phong_pars_fragment:Zp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Jp,lights_fragment_begin:$p,lights_fragment_maps:jp,lights_fragment_end:Qp,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:n0,logdepthbuf_vertex:i0,map_fragment:s0,map_pars_fragment:r0,map_particle_fragment:o0,map_particle_pars_fragment:a0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:l0,morphinstance_vertex:h0,morphcolor_vertex:u0,morphnormal_vertex:f0,morphtarget_pars_vertex:d0,morphtarget_vertex:p0,normal_fragment_begin:m0,normal_fragment_maps:g0,normal_pars_fragment:_0,normal_pars_vertex:A0,normal_vertex:x0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:b0,opaque_fragment:w0,packing:T0,premultiplied_alpha_fragment:R0,project_vertex:E0,dithering_fragment:L0,dithering_pars_fragment:C0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:I0,shadowmap_pars_fragment:D0,shadowmap_pars_vertex:N0,shadowmap_vertex:U0,shadowmask_pars_fragment:V0,skinbase_vertex:O0,skinning_pars_vertex:F0,skinning_vertex:B0,skinnormal_vertex:k0,specularmap_fragment:z0,specularmap_pars_fragment:H0,tonemapping_fragment:G0,tonemapping_pars_fragment:W0,transmission_fragment:X0,transmission_pars_fragment:q0,uv_pars_fragment:Y0,uv_pars_vertex:Z0,uv_vertex:K0,worldpos_vertex:J0,background_vert:$0,background_frag:j0,backgroundCube_vert:Q0,backgroundCube_frag:tm,cube_vert:em,cube_frag:nm,depth_vert:im,depth_frag:sm,distanceRGBA_vert:rm,distanceRGBA_frag:om,equirect_vert:am,equirect_frag:cm,linedashed_vert:lm,linedashed_frag:hm,meshbasic_vert:um,meshbasic_frag:fm,meshlambert_vert:dm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:_m,meshnormal_frag:Am,meshphong_vert:xm,meshphong_frag:ym,meshphysical_vert:vm,meshphysical_frag:Mm,meshtoon_vert:Sm,meshtoon_frag:bm,points_vert:wm,points_frag:Tm,shadow_vert:Rm,shadow_frag:Em,sprite_vert:Lm,sprite_frag:Cm},Rt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},zn={basic:{uniforms:nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:nn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:nn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:nn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:nn([Rt.points,Rt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:nn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:nn([Rt.common,Rt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:nn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:nn([Rt.sprite,Rt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:nn([Rt.common,Rt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:nn([Rt.lights,Rt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};zn.physical={uniforms:nn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var jr={r:0,b:0,g:0},ki=new cn,Pm=new se;function Im(i,t,e,n,s,r,o){let a=new Yt(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function _(E){let L=E.isScene===!0?E.background:null;return L&&L.isTexture&&(L=(E.backgroundBlurriness>0?e:t).get(L)),L}function x(E){let L=!1,M=_(E);M===null?d(a,c):M&&M.isColor&&(d(M,1),L=!0);let Z=i.xr.getEnvironmentBlendMode();Z==="additive"?n.buffers.color.setClear(0,0,0,1,o):Z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,L){let M=_(L);M&&(M.isCubeTexture||M.mapping===Wo)?(h===void 0&&(h=new Ne(new Zi(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ds(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(Z,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(L.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(ki)),h.material.toneMapped=me.getTransfer(M.colorSpace)!==we,(u!==M||f!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ne(new Ki(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ds(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=me.getTransfer(M.colorSpace)!==we,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,L){E.getRGB(jr,Gu(i)),n.buffers.color.setClear(jr.r,jr.g,jr.b,L,o)}return{getClearColor:function(){return a},setClearColor:function(E,L=1){a.set(E),c=L,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(a,c)},render:x,addToRenderList:m}}function Dm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(g,S,T,P,C){let z=!1,V=u(P,T,S);r!==V&&(r=V,l(r.object)),z=p(g,P,T,C),z&&_(g,P,T,C),C!==null&&t.update(C,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,M(g,S,T,P),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function c(){return i.createVertexArray()}function l(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function u(g,S,T){let P=T.wireframe===!0,C=n[g.id];C===void 0&&(C={},n[g.id]=C);let z=C[S.id];z===void 0&&(z={},C[S.id]=z);let V=z[P];return V===void 0&&(V=f(c()),z[P]=V),V}function f(g){let S=[],T=[],P=[];for(let C=0;C<e;C++)S[C]=0,T[C]=0,P[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:T,attributeDivisors:P,object:g,attributes:{},index:null}}function p(g,S,T,P){let C=r.attributes,z=S.attributes,V=0,J=T.getAttributes();for(let b in J)if(J[b].location>=0){let K=C[b],Y=z[b];if(Y===void 0&&(b==="instanceMatrix"&&g.instanceMatrix&&(Y=g.instanceMatrix),b==="instanceColor"&&g.instanceColor&&(Y=g.instanceColor)),K===void 0||K.attribute!==Y||Y&&K.data!==Y.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function _(g,S,T,P){let C={},z=S.attributes,V=0,J=T.getAttributes();for(let b in J)if(J[b].location>=0){let K=z[b];K===void 0&&(b==="instanceMatrix"&&g.instanceMatrix&&(K=g.instanceMatrix),b==="instanceColor"&&g.instanceColor&&(K=g.instanceColor));let Y={};Y.attribute=K,K&&K.data&&(Y.data=K.data),C[b]=Y,V++}r.attributes=C,r.attributesNum=V,r.index=P}function x(){let g=r.newAttributes;for(let S=0,T=g.length;S<T;S++)g[S]=0}function m(g){d(g,0)}function d(g,S){let T=r.newAttributes,P=r.enabledAttributes,C=r.attributeDivisors;T[g]=1,P[g]===0&&(i.enableVertexAttribArray(g),P[g]=1),C[g]!==S&&(i.vertexAttribDivisor(g,S),C[g]=S)}function E(){let g=r.newAttributes,S=r.enabledAttributes;for(let T=0,P=S.length;T<P;T++)S[T]!==g[T]&&(i.disableVertexAttribArray(T),S[T]=0)}function L(g,S,T,P,C,z,V){V===!0?i.vertexAttribIPointer(g,S,T,C,z):i.vertexAttribPointer(g,S,T,P,C,z)}function M(g,S,T,P){x();let C=P.attributes,z=T.getAttributes(),V=S.defaultAttributeValues;for(let J in z){let b=z[J];if(b.location>=0){let G=C[J];if(G===void 0&&(J==="instanceMatrix"&&g.instanceMatrix&&(G=g.instanceMatrix),J==="instanceColor"&&g.instanceColor&&(G=g.instanceColor)),G!==void 0){let K=G.normalized,Y=G.itemSize,O=t.get(G);if(O===void 0)continue;let tt=O.buffer,H=O.type,j=O.bytesPerElement,dt=H===i.INT||H===i.UNSIGNED_INT||G.gpuType===sl;if(G.isInterleavedBufferAttribute){let ct=G.data,At=ct.stride,ft=G.offset;if(ct.isInstancedInterleavedBuffer){for(let Ot=0;Ot<b.locationSize;Ot++)d(b.location+Ot,ct.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ot=0;Ot<b.locationSize;Ot++)m(b.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Ot=0;Ot<b.locationSize;Ot++)L(b.location+Ot,Y/b.locationSize,H,K,At*j,(ft+Y/b.locationSize*Ot)*j,dt)}else{if(G.isInstancedBufferAttribute){for(let ct=0;ct<b.locationSize;ct++)d(b.location+ct,G.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ct=0;ct<b.locationSize;ct++)m(b.location+ct);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ct=0;ct<b.locationSize;ct++)L(b.location+ct,Y/b.locationSize,H,K,Y*j,Y/b.locationSize*ct*j,dt)}}else if(V!==void 0){let K=V[J];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(b.location,K);break;case 3:i.vertexAttrib3fv(b.location,K);break;case 4:i.vertexAttrib4fv(b.location,K);break;default:i.vertexAttrib1fv(b.location,K)}}}}E()}function Z(){X();for(let g in n){let S=n[g];for(let T in S){let P=S[T];for(let C in P)h(P[C].object),delete P[C];delete S[T]}delete n[g]}}function I(g){if(n[g.id]===void 0)return;let S=n[g.id];for(let T in S){let P=S[T];for(let C in P)h(P[C].object),delete P[C];delete S[T]}delete n[g.id]}function U(g){for(let S in n){let T=n[S];if(T[g.id]===void 0)continue;let P=T[g.id];for(let C in P)h(P[C].object),delete P[C];delete T[g.id]}}function X(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:X,resetDefaultState:A,dispose:Z,releaseStatesOfGeometry:I,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Nm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x]*f[x];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Um(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==yn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let X=U===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==si&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Un&&!X)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),Z=_>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:L,maxFragmentUniforms:M,vertexTextures:Z,maxSamples:I}}function Vm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new In,a=new ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,L=E*4,M=d.clippingState||null;c.value=M,M=h(_,f,L,p);for(let Z=0;Z!==L;++Z)M[Z]=e[Z];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,_){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,_!==!0||m===null){let d=p+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let L=0,M=p;L!==x;++L,M+=4)o.copy(u[L]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Om(i){let t=new WeakMap;function e(o,a){return a===$a?o.mapping=Ts:a===ja&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$a||a===ja)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Cc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ns=class extends yo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ys=4,Fh=[.125,.215,.35,.446,.526,.582],Xi=20,Pa=new Ns,Bh=new Yt,Ia=null,Da=0,Na=0,Ua=!1,Hi=(1+Math.sqrt(5))/2,_s=1/Hi,kh=[new N(-Hi,_s,0),new N(Hi,_s,0),new N(-_s,0,Hi),new N(_s,0,Hi),new N(0,Hi,-_s),new N(0,Hi,_s),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Mo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia,Da,Na),this._renderer.xr.enabled=Ua,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:yr,format:yn,colorSpace:tn,depthBuffer:!1},s=zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fm(r)),this._blurMaterial=Bm(r,t,e)}return s}_compileMaterial(t){let e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,Pa)}_sceneToCubeUV(t,e,n,s){let a=new ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Bh),h.toneMapping=bi,h.autoClear=!1;let p=new Wn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new Ne(new Zi,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Bh),x=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):E===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let L=this._cubeSize;Qr(s,E*L,d>2?L:0,L,L),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ts||t.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Qr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kh[(s-r-1)%kh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ne(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xi-1),x=r/_,m=isFinite(r)?1+Math.floor(h*x):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);let d=[],E=0;for(let U=0;U<Xi;++U){let X=U/x,A=Math.exp(-X*X/2);d.push(A),U===0?E+=A:U<m&&(E+=2*A)}for(let U=0;U<d.length;U++)d[U]=d[U]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:L}=this;f.dTheta.value=_,f.mipInt.value=L-n;let M=this._sizeLods[s],Z=3*M*(s>L-ys?s-L+ys:0),I=4*(this._cubeSize-M);Qr(e,Z,I,3*M,2*M),c.setRenderTarget(e),c.render(u,Pa)}};function Fm(i){let t=[],e=[],n=[],s=i,r=i-ys+1+Fh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ys?c=Fh[o-i+ys-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,x=3,m=2,d=1,E=new Float32Array(x*_*p),L=new Float32Array(m*_*p),M=new Float32Array(d*_*p);for(let I=0;I<p;I++){let U=I%3*2/3-1,X=I>2?0:-1,A=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];E.set(A,x*_*I),L.set(f,m*_*I);let g=[I,I,I,I,I,I];M.set(g,d*_*I)}let Z=new Sn;Z.setAttribute("position",new Ue(E,x)),Z.setAttribute("uv",new Ue(L,m)),Z.setAttribute("faceIndex",new Ue(M,d)),t.push(Z),s>ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zh(i,t,e){let n=new oi(i,t,e);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bm(i,t,e){let n=new Float32Array(Xi),s=new N(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Hh(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Gh(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function fl(){return`

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
	`}function km(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===$a||c===ja,h=c===Ts||c===Rs;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Mo(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Mo(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function zm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hm(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let x=f.morphAttributes[_];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let _ in f)t.update(f[_],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let _ in p){let x=p[_];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,_=u.attributes.position,x=0;if(p!==null){let E=p.array;x=p.version;for(let L=0,M=E.length;L<M;L+=3){let Z=E[L+0],I=E[L+1],U=E[L+2];f.push(Z,I,I,U,U,Z)}}else if(_!==void 0){let E=_.array;x=_.version;for(let L=0,M=E.length/3-1;L<M;L+=3){let Z=L+0,I=L+1,U=L+2;f.push(Z,I,I,U,U,Z)}}else return;let m=new(zu(f)?xo:Ao)(f,1);m.version=x;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Gm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*o,_),e.update(p,n,_))}function h(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];e.update(m,n,1)}function u(f,p,_,x){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,_);let d=0;for(let E=0;E<_;E++)d+=p[E]*x[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xm(i,t,e){let n=new WeakMap,s=new xe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let A=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],L=0;p===!0&&(L=1),_===!0&&(L=2),x===!0&&(L=3);let M=a.attributes.position.count*L,Z=1;M>t.maxTextureSize&&(Z=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let I=new Float32Array(M*Z*4*u),U=new go(I,M,Z,u);U.type=Un,U.needsUpdate=!0;let X=L*4;for(let g=0;g<u;g++){let S=m[g],T=d[g],P=E[g],C=M*Z*4*g;for(let z=0;z<S.count;z++){let V=z*X;p===!0&&(s.fromBufferAttribute(S,z),I[C+V+0]=s.x,I[C+V+1]=s.y,I[C+V+2]=s.z,I[C+V+3]=0),_===!0&&(s.fromBufferAttribute(T,z),I[C+V+4]=s.x,I[C+V+5]=s.y,I[C+V+6]=s.z,I[C+V+7]=0),x===!0&&(s.fromBufferAttribute(P,z),I[C+V+8]=s.x,I[C+V+9]=s.y,I[C+V+10]=s.z,I[C+V+11]=P.itemSize===4?s.w:1)}}f={count:u,texture:U,size:new te(M,Z)},n.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function qm(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var So=class extends Ye{constructor(t,e,n,s,r,o,a,c,l,h=Ms){if(h!==Ms&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ms&&(n=Yi),n===void 0&&h===Ls&&(n=Es),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xu=new Ye,Wh=new So(1,1),qu=new go,Yu=new Ec,Zu=new vo,Xh=[],qh=[],Yh=new Float32Array(16),Zh=new Float32Array(9),Kh=new Float32Array(4);function Os(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xh[s];if(r===void 0&&(r=new Float32Array(s),Xh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zo(i,t){let e=qh[t];e===void 0&&(e=new Int32Array(t),qh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ym(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function $m(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Kh.set(n),i.uniformMatrix2fv(this.addr,!1,Kh),Ge(e,n)}}function jm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Zh.set(n),i.uniformMatrix3fv(this.addr,!1,Zh),Ge(e,n)}}function Qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Yh.set(n),i.uniformMatrix4fv(this.addr,!1,Yh),Ge(e,n)}}function tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wh.compareFunction=ku,r=Wh):r=Xu,e.setTexture2D(t||r,s)}function lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yu,s)}function hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zu,s)}function ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qu,s)}function fg(i){switch(i){case 5126:return Ym;case 35664:return Zm;case 35665:return Km;case 35666:return Jm;case 35674:return $m;case 35675:return jm;case 35676:return Qm;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return og;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}function dg(i,t){i.uniform1fv(this.addr,t)}function pg(i,t){let e=Os(t,this.size,2);i.uniform2fv(this.addr,e)}function mg(i,t){let e=Os(t,this.size,3);i.uniform3fv(this.addr,e)}function gg(i,t){let e=Os(t,this.size,4);i.uniform4fv(this.addr,e)}function _g(i,t){let e=Os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ag(i,t){let e=Os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xg(i,t){let e=Os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yg(i,t){i.uniform1iv(this.addr,t)}function vg(i,t){i.uniform2iv(this.addr,t)}function Mg(i,t){i.uniform3iv(this.addr,t)}function Sg(i,t){i.uniform4iv(this.addr,t)}function bg(i,t){i.uniform1uiv(this.addr,t)}function wg(i,t){i.uniform2uiv(this.addr,t)}function Tg(i,t){i.uniform3uiv(this.addr,t)}function Rg(i,t){i.uniform4uiv(this.addr,t)}function Eg(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xu,r[o])}function Lg(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yu,r[o])}function Cg(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Zu,r[o])}function Pg(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qu,r[o])}function Ig(i){switch(i){case 5126:return dg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return Ag;case 35676:return xg;case 5124:case 35670:return yg;case 35667:case 35671:return vg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return wg;case 36295:return Tg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}var Pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fg(e.type)}},Ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ig(e.type)}},Dc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Va=/(\w+)(\])?(\[|\.)?/g;function Jh(i,t){i.seq.push(t),i.map[t.id]=t}function Dg(i,t,e){let n=i.name,s=n.length;for(Va.lastIndex=0;;){let r=Va.exec(n),o=Va.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Jh(e,l===void 0?new Pc(a,i,t):new Ic(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Dc(a),Jh(e,u)),e=u}}}var bs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Dg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function $h(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ng=37297,Ug=0;function Vg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var jh=new ae;function Og(i){me._getMatrix(jh,me.workingColorSpace,i);let t=`mat3( ${jh.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case qo:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Qh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vg(i.getShaderSource(t),o)}else return s}function Fg(i,t){let e=Og(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bg(i,t){let e;switch(t){case Kf:e="Linear";break;case Jf:e="Reinhard";break;case $f:e="Cineon";break;case nl:e="ACESFilmic";break;case Qf:e="AgX";break;case td:e="Neutral";break;case jf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var to=new N;function kg(){me.getLuminanceCoefficients(to);let i=to.x.toFixed(4),t=to.y.toFixed(4),e=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Hg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ir(i){return i!==""}function tu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(i){return i.replace(Wg,qg)}var Xg=new Map;function qg(i,t){let e=le[t];if(e===void 0){let n=Xg.get(t);if(n!==void 0)e=le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nc(e)}var Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(i){return i.replace(Yg,Zg)}function Zg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function iu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Kg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===el?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Jg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case Rs:t="ENVMAP_TYPE_CUBE";break;case Wo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $g(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function jg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ru:t="ENVMAP_BLENDING_MULTIPLY";break;case Yf:t="ENVMAP_BLENDING_MIX";break;case Zf:t="ENVMAP_BLENDING_ADD";break}return t}function Qg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function t_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Kg(e),l=Jg(e),h=$g(e),u=jg(e),f=Qg(e),p=zg(e),_=Hg(r),x=s.createProgram(),m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ir).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ir).join(`
`),d.length>0&&(d+=`
`)):(m=[iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),d=[iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?le.tonemapping_pars_fragment:"",e.toneMapping!==bi?Bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Fg("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),o=Nc(o),o=tu(o,e),o=eu(o,e),a=Nc(a),a=tu(a,e),a=eu(a,e),o=nu(o),a=nu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let L=E+m+o,M=E+d+a,Z=$h(s,s.VERTEX_SHADER,L),I=$h(s,s.FRAGMENT_SHADER,M);s.attachShader(x,Z),s.attachShader(x,I),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function U(S){if(i.debug.checkShaderErrors){let T=s.getProgramInfoLog(x).trim(),P=s.getShaderInfoLog(Z).trim(),C=s.getShaderInfoLog(I).trim(),z=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,Z,I);else{let J=Qh(s,Z,"vertex"),b=Qh(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+T+`
`+J+`
`+b)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||C==="")&&(V=!1);V&&(S.diagnostics={runnable:z,programLog:T,vertexShader:{log:P,prefix:m},fragmentShader:{log:C,prefix:d}})}s.deleteShader(Z),s.deleteShader(I),X=new bs(s,x),A=Gg(s,x)}let X;this.getUniforms=function(){return X===void 0&&U(this),X};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(x,Ng)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=Z,this.fragmentShader=I,this}var e_=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Vc(t),e.set(t,n)),n}},Vc=class{constructor(t){this.id=e_++,this.code=t,this.usedTimes=0}};function n_(i,t,e,n,s,r,o){let a=new _o,c=new Uc,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return l.add(A),A===0?"uv":`uv${A}`}function m(A,g,S,T,P){let C=T.fog,z=P.geometry,V=A.isMeshStandardMaterial?T.environment:null,J=(A.isMeshStandardMaterial?e:t).get(A.envMap||V),b=J&&J.mapping===Wo?J.image.height:null,G=_[A.type];A.precision!==null&&(p=s.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));let K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Y=K!==void 0?K.length:0,O=0;z.morphAttributes.position!==void 0&&(O=1),z.morphAttributes.normal!==void 0&&(O=2),z.morphAttributes.color!==void 0&&(O=3);let tt,H,j,dt;if(G){let rt=zn[G];tt=rt.vertexShader,H=rt.fragmentShader}else tt=A.vertexShader,H=A.fragmentShader,c.update(A),j=c.getVertexShaderID(A),dt=c.getFragmentShaderID(A);let ct=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),ft=P.isInstancedMesh===!0,Ot=P.isBatchedMesh===!0,Kt=!!A.map,Gt=!!A.matcap,de=!!J,F=!!A.aoMap,be=!!A.lightMap,jt=!!A.bumpMap,ee=!!A.normalMap,zt=!!A.displacementMap,ue=!!A.emissiveMap,Bt=!!A.metalnessMap,w=!!A.roughnessMap,y=A.anisotropy>0,Q=A.clearcoat>0,lt=A.dispersion>0,nt=A.iridescence>0,et=A.sheen>0,wt=A.transmission>0,St=y&&!!A.anisotropyMap,gt=Q&&!!A.clearcoatMap,kt=Q&&!!A.clearcoatNormalMap,pt=Q&&!!A.clearcoatRoughnessMap,Ut=nt&&!!A.iridescenceMap,qt=nt&&!!A.iridescenceThicknessMap,Jt=et&&!!A.sheenColorMap,Nt=et&&!!A.sheenRoughnessMap,re=!!A.specularMap,ne=!!A.specularColorMap,Me=!!A.specularIntensityMap,W=wt&&!!A.transmissionMap,bt=wt&&!!A.thicknessMap,st=!!A.gradientMap,ht=!!A.alphaMap,Pt=A.alphaTest>0,Lt=!!A.alphaHash,R=!!A.extensions,$=bi;A.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&($=i.toneMapping);let at={shaderID:G,shaderType:A.type,shaderName:A.name,vertexShader:tt,fragmentShader:H,defines:A.defines,customVertexShaderID:j,customFragmentShaderID:dt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&P._colorsTexture!==null,instancing:ft,instancingColor:ft&&P.instanceColor!==null,instancingMorph:ft&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:tn,alphaToCoverage:!!A.alphaToCoverage,map:Kt,matcap:Gt,envMap:de,envMapMode:de&&J.mapping,envMapCubeUVHeight:b,aoMap:F,lightMap:be,bumpMap:jt,normalMap:ee,displacementMap:f&&zt,emissiveMap:ue,normalMapObjectSpace:ee&&A.normalMapType===rd,normalMapTangentSpace:ee&&A.normalMapType===Bu,metalnessMap:Bt,roughnessMap:w,anisotropy:y,anisotropyMap:St,clearcoat:Q,clearcoatMap:gt,clearcoatNormalMap:kt,clearcoatRoughnessMap:pt,dispersion:lt,iridescence:nt,iridescenceMap:Ut,iridescenceThicknessMap:qt,sheen:et,sheenColorMap:Jt,sheenRoughnessMap:Nt,specularMap:re,specularColorMap:ne,specularIntensityMap:Me,transmission:wt,transmissionMap:W,thicknessMap:bt,gradientMap:st,opaque:A.transparent===!1&&A.blending===vs&&A.alphaToCoverage===!1,alphaMap:ht,alphaTest:Pt,alphaHash:Lt,combine:A.combine,mapUv:Kt&&x(A.map.channel),aoMapUv:F&&x(A.aoMap.channel),lightMapUv:be&&x(A.lightMap.channel),bumpMapUv:jt&&x(A.bumpMap.channel),normalMapUv:ee&&x(A.normalMap.channel),displacementMapUv:zt&&x(A.displacementMap.channel),emissiveMapUv:ue&&x(A.emissiveMap.channel),metalnessMapUv:Bt&&x(A.metalnessMap.channel),roughnessMapUv:w&&x(A.roughnessMap.channel),anisotropyMapUv:St&&x(A.anisotropyMap.channel),clearcoatMapUv:gt&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:kt&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&x(A.sheenRoughnessMap.channel),specularMapUv:re&&x(A.specularMap.channel),specularColorMapUv:ne&&x(A.specularColorMap.channel),specularIntensityMapUv:Me&&x(A.specularIntensityMap.channel),transmissionMapUv:W&&x(A.transmissionMap.channel),thicknessMapUv:bt&&x(A.thicknessMap.channel),alphaMapUv:ht&&x(A.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ee||y),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(Kt||ht),fog:!!C,useFog:A.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:O,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:$,decodeVideoTexture:Kt&&A.map.isVideoTexture===!0&&me.getTransfer(A.map.colorSpace)===we,decodeVideoTextureEmissive:ue&&A.emissiveMap.isVideoTexture===!0&&me.getTransfer(A.emissiveMap.colorSpace)===we,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Dn,flipSided:A.side===on,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:R&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(R&&A.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function d(A){let g=[];if(A.shaderID?g.push(A.shaderID):(g.push(A.customVertexShaderID),g.push(A.customFragmentShaderID)),A.defines!==void 0)for(let S in A.defines)g.push(S),g.push(A.defines[S]);return A.isRawShaderMaterial===!1&&(E(g,A),L(g,A),g.push(i.outputColorSpace)),g.push(A.customProgramCacheKey),g.join()}function E(A,g){A.push(g.precision),A.push(g.outputColorSpace),A.push(g.envMapMode),A.push(g.envMapCubeUVHeight),A.push(g.mapUv),A.push(g.alphaMapUv),A.push(g.lightMapUv),A.push(g.aoMapUv),A.push(g.bumpMapUv),A.push(g.normalMapUv),A.push(g.displacementMapUv),A.push(g.emissiveMapUv),A.push(g.metalnessMapUv),A.push(g.roughnessMapUv),A.push(g.anisotropyMapUv),A.push(g.clearcoatMapUv),A.push(g.clearcoatNormalMapUv),A.push(g.clearcoatRoughnessMapUv),A.push(g.iridescenceMapUv),A.push(g.iridescenceThicknessMapUv),A.push(g.sheenColorMapUv),A.push(g.sheenRoughnessMapUv),A.push(g.specularMapUv),A.push(g.specularColorMapUv),A.push(g.specularIntensityMapUv),A.push(g.transmissionMapUv),A.push(g.thicknessMapUv),A.push(g.combine),A.push(g.fogExp2),A.push(g.sizeAttenuation),A.push(g.morphTargetsCount),A.push(g.morphAttributeCount),A.push(g.numDirLights),A.push(g.numPointLights),A.push(g.numSpotLights),A.push(g.numSpotLightMaps),A.push(g.numHemiLights),A.push(g.numRectAreaLights),A.push(g.numDirLightShadows),A.push(g.numPointLightShadows),A.push(g.numSpotLightShadows),A.push(g.numSpotLightShadowsWithMaps),A.push(g.numLightProbes),A.push(g.shadowMapType),A.push(g.toneMapping),A.push(g.numClippingPlanes),A.push(g.numClipIntersection),A.push(g.depthPacking)}function L(A,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reverseDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),A.push(a.mask)}function M(A){let g=_[A.type],S;if(g){let T=zn[g];S=qd.clone(T.uniforms)}else S=A.uniforms;return S}function Z(A,g){let S;for(let T=0,P=h.length;T<P;T++){let C=h[T];if(C.cacheKey===g){S=C,++S.usedTimes;break}}return S===void 0&&(S=new t_(i,g,A,r),h.push(S)),S}function I(A){if(--A.usedTimes===0){let g=h.indexOf(A);h[g]=h[h.length-1],h.pop(),A.destroy()}}function U(A){c.remove(A)}function X(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:Z,releaseProgram:I,releaseShaderCache:U,programs:h,dispose:X}}function i_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function s_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function su(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ru(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,_,x,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function a(u,f,p,_,x,m){let d=o(u,f,p,_,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,_,x,m){let d=o(u,f,p,_,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||s_),n.length>1&&n.sort(f||su),s.length>1&&s.sort(f||su)}function h(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function r_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ru,i.set(n,[o])):s>=r.length?(o=new ru,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function o_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Yt};break;case"SpotLight":e={position:new N,direction:new N,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function a_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var c_=0;function l_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h_(i){let t=new o_,e=a_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new se,o=new se;function a(l){let h=0,u=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,E=0,L=0,M=0,Z=0,I=0,U=0;l.sort(l_);for(let A=0,g=l.length;A<g;A++){let S=l[A],T=S.color,P=S.intensity,C=S.distance,z=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=T.r*P,u+=T.g*P,f+=T.b*P;else if(S.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(S.sh.coefficients[V],P);U++}else if(S.isDirectionalLight){let V=t.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let J=S.shadow,b=e.get(S);b.shadowIntensity=J.intensity,b.shadowBias=J.bias,b.shadowNormalBias=J.normalBias,b.shadowRadius=J.radius,b.shadowMapSize=J.mapSize,n.directionalShadow[p]=b,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=S.shadow.matrix,E++}n.directional[p]=V,p++}else if(S.isSpotLight){let V=t.get(S);V.position.setFromMatrixPosition(S.matrixWorld),V.color.copy(T).multiplyScalar(P),V.distance=C,V.coneCos=Math.cos(S.angle),V.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),V.decay=S.decay,n.spot[x]=V;let J=S.shadow;if(S.map&&(n.spotLightMap[Z]=S.map,Z++,J.updateMatrices(S),S.castShadow&&I++),n.spotLightMatrix[x]=J.matrix,S.castShadow){let b=e.get(S);b.shadowIntensity=J.intensity,b.shadowBias=J.bias,b.shadowNormalBias=J.normalBias,b.shadowRadius=J.radius,b.shadowMapSize=J.mapSize,n.spotShadow[x]=b,n.spotShadowMap[x]=z,M++}x++}else if(S.isRectAreaLight){let V=t.get(S);V.color.copy(T).multiplyScalar(P),V.halfWidth.set(S.width*.5,0,0),V.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=V,m++}else if(S.isPointLight){let V=t.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),V.distance=S.distance,V.decay=S.decay,S.castShadow){let J=S.shadow,b=e.get(S);b.shadowIntensity=J.intensity,b.shadowBias=J.bias,b.shadowNormalBias=J.normalBias,b.shadowRadius=J.radius,b.shadowMapSize=J.mapSize,b.shadowCameraNear=J.camera.near,b.shadowCameraFar=J.camera.far,n.pointShadow[_]=b,n.pointShadowMap[_]=z,n.pointShadowMatrix[_]=S.shadow.matrix,L++}n.point[_]=V,_++}else if(S.isHemisphereLight){let V=t.get(S);V.skyColor.copy(S.color).multiplyScalar(P),V.groundColor.copy(S.groundColor).multiplyScalar(P),n.hemi[d]=V,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let X=n.hash;(X.directionalLength!==p||X.pointLength!==_||X.spotLength!==x||X.rectAreaLength!==m||X.hemiLength!==d||X.numDirectionalShadows!==E||X.numPointShadows!==L||X.numSpotShadows!==M||X.numSpotMaps!==Z||X.numLightProbes!==U)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=M+Z-I,n.spotLightMap.length=Z,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=U,X.directionalLength=p,X.pointLength=_,X.spotLength=x,X.rectAreaLength=m,X.hemiLength=d,X.numDirectionalShadows=E,X.numPointShadows=L,X.numSpotShadows=M,X.numSpotMaps=Z,X.numLightProbes=U,n.version=c_++)}function c(l,h){let u=0,f=0,p=0,_=0,x=0,m=h.matrixWorldInverse;for(let d=0,E=l.length;d<E;d++){let L=l[d];if(L.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(L.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(L.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(L.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(L.width*.5,0,0),M.halfHeight.set(0,L.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(L.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(m),f++}else if(L.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(L.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function ou(i){let t=new h_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function u_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ou(i),t.set(s,[a])):r>=o.length?(a=new ou(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Oc=class extends gn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fc=class extends gn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d_=`uniform sampler2D shadow_pass;
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
}`;function p_(i,t,e){let n=new ur,s=new te,r=new te,o=new xe,a=new Oc({depthPacking:sd}),c=new Fc,l={},h=e.maxTextureSize,u={[Gn]:on,[on]:Gn,[Dn]:Dn},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:f_,fragmentShader:d_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Sn;_.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ne(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let d=this.type;this.render=function(I,U,X){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let A=i.getRenderTarget(),g=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),T=i.state;T.setBlending(Si),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let P=d!==ti&&this.type===ti,C=d===ti&&this.type!==ti;for(let z=0,V=I.length;z<V;z++){let J=I[z],b=J.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;s.copy(b.mapSize);let G=b.getFrameExtents();if(s.multiply(G),r.copy(b.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,b.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,b.mapSize.y=r.y)),b.map===null||P===!0||C===!0){let Y=this.type!==ti?{minFilter:Qe,magFilter:Qe}:{};b.map!==null&&b.map.dispose(),b.map=new oi(s.x,s.y,Y),b.map.texture.name=J.name+".shadowMap",b.camera.updateProjectionMatrix()}i.setRenderTarget(b.map),i.clear();let K=b.getViewportCount();for(let Y=0;Y<K;Y++){let O=b.getViewport(Y);o.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),T.viewport(o),b.updateMatrices(J,Y),n=b.getFrustum(),M(U,X,b.camera,J,this.type)}b.isPointLightShadow!==!0&&this.type===ti&&E(b,X),b.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(A,g,S)};function E(I,U){let X=t.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new oi(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(U,null,X,f,x,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(U,null,X,p,x,null)}function L(I,U,X,A){let g=null,S=X.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(S!==void 0)g=S;else if(g=X.isPointLight===!0?c:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let T=g.uuid,P=U.uuid,C=l[T];C===void 0&&(C={},l[T]=C);let z=C[P];z===void 0&&(z=g.clone(),C[P]=z,U.addEventListener("dispose",Z)),g=z}if(g.visible=U.visible,g.wireframe=U.wireframe,A===ti?g.side=U.shadowSide!==null?U.shadowSide:U.side:g.side=U.shadowSide!==null?U.shadowSide:u[U.side],g.alphaMap=U.alphaMap,g.alphaTest=U.alphaTest,g.map=U.map,g.clipShadows=U.clipShadows,g.clippingPlanes=U.clippingPlanes,g.clipIntersection=U.clipIntersection,g.displacementMap=U.displacementMap,g.displacementScale=U.displacementScale,g.displacementBias=U.displacementBias,g.wireframeLinewidth=U.wireframeLinewidth,g.linewidth=U.linewidth,X.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let T=i.properties.get(g);T.light=X}return g}function M(I,U,X,A,g){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&g===ti)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld);let P=t.update(I),C=I.material;if(Array.isArray(C)){let z=P.groups;for(let V=0,J=z.length;V<J;V++){let b=z[V],G=C[b.materialIndex];if(G&&G.visible){let K=L(I,G,A,g);I.onBeforeShadow(i,I,U,X,P,K,b),i.renderBufferDirect(X,null,P,K,I,b),I.onAfterShadow(i,I,U,X,P,K,b)}}}else if(C.visible){let z=L(I,C,A,g);I.onBeforeShadow(i,I,U,X,P,z,null),i.renderBufferDirect(X,null,P,z,I,null),I.onAfterShadow(i,I,U,X,P,z,null)}}let T=I.children;for(let P=0,C=T.length;P<C;P++)M(T[P],U,X,A,g)}function Z(I){I.target.removeEventListener("dispose",Z);for(let X in l){let A=l[X],g=I.target.uuid;g in A&&(A[g].dispose(),delete A[g])}}}var m_={[Wa]:Xa,[qa]:Ka,[Ya]:Ja,[ws]:Za,[Xa]:Wa,[Ka]:qa,[Ja]:Ya,[Za]:ws};function g_(i,t){function e(){let W=!1,bt=new xe,st=null,ht=new xe(0,0,0,0);return{setMask:function(Pt){st!==Pt&&!W&&(i.colorMask(Pt,Pt,Pt,Pt),st=Pt)},setLocked:function(Pt){W=Pt},setClear:function(Pt,Lt,R,$,at){at===!0&&(Pt*=$,Lt*=$,R*=$),bt.set(Pt,Lt,R,$),ht.equals(bt)===!1&&(i.clearColor(Pt,Lt,R,$),ht.copy(bt))},reset:function(){W=!1,st=null,ht.set(-1,0,0,0)}}}function n(){let W=!1,bt=!1,st=null,ht=null,Pt=null;return{setReversed:function(Lt){if(bt!==Lt){let R=t.get("EXT_clip_control");bt?R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT):R.clipControlEXT(R.LOWER_LEFT_EXT,R.NEGATIVE_ONE_TO_ONE_EXT);let $=Pt;Pt=null,this.setClear($)}bt=Lt},getReversed:function(){return bt},setTest:function(Lt){Lt?ct(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(Lt){st!==Lt&&!W&&(i.depthMask(Lt),st=Lt)},setFunc:function(Lt){if(bt&&(Lt=m_[Lt]),ht!==Lt){switch(Lt){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=Lt}},setLocked:function(Lt){W=Lt},setClear:function(Lt){Pt!==Lt&&(bt&&(Lt=1-Lt),i.clearDepth(Lt),Pt=Lt)},reset:function(){W=!1,st=null,ht=null,Pt=null,bt=!1}}}function s(){let W=!1,bt=null,st=null,ht=null,Pt=null,Lt=null,R=null,$=null,at=null;return{setTest:function(rt){W||(rt?ct(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(rt){bt!==rt&&!W&&(i.stencilMask(rt),bt=rt)},setFunc:function(rt,ut,vt){(st!==rt||ht!==ut||Pt!==vt)&&(i.stencilFunc(rt,ut,vt),st=rt,ht=ut,Pt=vt)},setOp:function(rt,ut,vt){(Lt!==rt||R!==ut||$!==vt)&&(i.stencilOp(rt,ut,vt),Lt=rt,R=ut,$=vt)},setLocked:function(rt){W=rt},setClear:function(rt){at!==rt&&(i.clearStencil(rt),at=rt)},reset:function(){W=!1,bt=null,st=null,ht=null,Pt=null,Lt=null,R=null,$=null,at=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,E=null,L=null,M=null,Z=null,I=null,U=new Yt(0,0,0),X=0,A=!1,g=null,S=null,T=null,P=null,C=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,J=0,b=i.getParameter(i.VERSION);b.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(b)[1]),V=J>=1):b.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(b)[1]),V=J>=2);let G=null,K={},Y=i.getParameter(i.SCISSOR_BOX),O=i.getParameter(i.VIEWPORT),tt=new xe().fromArray(Y),H=new xe().fromArray(O);function j(W,bt,st,ht){let Pt=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(W,Lt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let R=0;R<st;R++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(bt+R,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Lt}let dt={};dt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(ws),jt(!1),ee(ah),ct(i.CULL_FACE),F(Si);function ct(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function At(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function ft(W,bt){return u[W]!==bt?(i.bindFramebuffer(W,bt),u[W]=bt,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=bt),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Ot(W,bt){let st=p,ht=!1;if(W){st=f.get(bt),st===void 0&&(st=[],f.set(bt,st));let Pt=W.textures;if(st.length!==Pt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Lt=0,R=Pt.length;Lt<R;Lt++)st[Lt]=i.COLOR_ATTACHMENT0+Lt;st.length=Pt.length,ht=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,ht=!0);ht&&i.drawBuffers(st)}function Kt(W){return _!==W?(i.useProgram(W),_=W,!0):!1}let Gt={[Gi]:i.FUNC_ADD,[Cf]:i.FUNC_SUBTRACT,[Pf]:i.FUNC_REVERSE_SUBTRACT};Gt[If]=i.MIN,Gt[Df]=i.MAX;let de={[Nf]:i.ZERO,[Uf]:i.ONE,[Vf]:i.SRC_COLOR,[Ha]:i.SRC_ALPHA,[Hf]:i.SRC_ALPHA_SATURATE,[kf]:i.DST_COLOR,[Ff]:i.DST_ALPHA,[Of]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[zf]:i.ONE_MINUS_DST_COLOR,[Bf]:i.ONE_MINUS_DST_ALPHA,[Gf]:i.CONSTANT_COLOR,[Wf]:i.ONE_MINUS_CONSTANT_COLOR,[Xf]:i.CONSTANT_ALPHA,[qf]:i.ONE_MINUS_CONSTANT_ALPHA};function F(W,bt,st,ht,Pt,Lt,R,$,at,rt){if(W===Si){x===!0&&(At(i.BLEND),x=!1);return}if(x===!1&&(ct(i.BLEND),x=!0),W!==Lf){if(W!==m||rt!==A){if((d!==Gi||M!==Gi)&&(i.blendEquation(i.FUNC_ADD),d=Gi,M=Gi),rt)switch(W){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFunc(i.ONE,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}E=null,L=null,Z=null,I=null,U.set(0,0,0),X=0,m=W,A=rt}return}Pt=Pt||bt,Lt=Lt||st,R=R||ht,(bt!==d||Pt!==M)&&(i.blendEquationSeparate(Gt[bt],Gt[Pt]),d=bt,M=Pt),(st!==E||ht!==L||Lt!==Z||R!==I)&&(i.blendFuncSeparate(de[st],de[ht],de[Lt],de[R]),E=st,L=ht,Z=Lt,I=R),($.equals(U)===!1||at!==X)&&(i.blendColor($.r,$.g,$.b,at),U.copy($),X=at),m=W,A=!1}function be(W,bt){W.side===Dn?At(i.CULL_FACE):ct(i.CULL_FACE);let st=W.side===on;bt&&(st=!st),jt(st),W.blending===vs&&W.transparent===!1?F(Si):F(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let ht=W.stencilWrite;a.setTest(ht),ht&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ue(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(W){g!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),g=W)}function ee(W){W!==Rf?(ct(i.CULL_FACE),W!==S&&(W===ah?i.cullFace(i.BACK):W===Ef?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),S=W}function zt(W){W!==T&&(V&&i.lineWidth(W),T=W)}function ue(W,bt,st){W?(ct(i.POLYGON_OFFSET_FILL),(P!==bt||C!==st)&&(i.polygonOffset(bt,st),P=bt,C=st)):At(i.POLYGON_OFFSET_FILL)}function Bt(W){W?ct(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function w(W){W===void 0&&(W=i.TEXTURE0+z-1),G!==W&&(i.activeTexture(W),G=W)}function y(W,bt,st){st===void 0&&(G===null?st=i.TEXTURE0+z-1:st=G);let ht=K[st];ht===void 0&&(ht={type:void 0,texture:void 0},K[st]=ht),(ht.type!==W||ht.texture!==bt)&&(G!==st&&(i.activeTexture(st),G=st),i.bindTexture(W,bt||dt[W]),ht.type=W,ht.texture=bt)}function Q(){let W=K[G];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ut(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Jt(W){tt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),tt.copy(W))}function Nt(W){H.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),H.copy(W))}function re(W,bt){let st=l.get(bt);st===void 0&&(st=new WeakMap,l.set(bt,st));let ht=st.get(W);ht===void 0&&(ht=i.getUniformBlockIndex(bt,W.name),st.set(W,ht))}function ne(W,bt){let ht=l.get(bt).get(W);c.get(bt)!==ht&&(i.uniformBlockBinding(bt,ht,W.__bindingPointIndex),c.set(bt,ht))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,K={},u={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,E=null,L=null,M=null,Z=null,I=null,U=new Yt(0,0,0),X=0,A=!1,g=null,S=null,T=null,P=null,C=null,tt.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:At,bindFramebuffer:ft,drawBuffers:Ot,useProgram:Kt,setBlending:F,setMaterial:be,setFlipSided:jt,setCullFace:ee,setLineWidth:zt,setPolygonOffset:ue,setScissorTest:Bt,activeTexture:w,bindTexture:y,unbindTexture:Q,compressedTexImage2D:lt,compressedTexImage3D:nt,texImage2D:Ut,texImage3D:qt,updateUBOMapping:re,uniformBlockBinding:ne,texStorage2D:kt,texStorage3D:pt,texSubImage2D:et,texSubImage3D:wt,compressedTexSubImage2D:St,compressedTexSubImage3D:gt,scissor:Jt,viewport:Nt,reset:Me}}function au(i,t,e,n){let s=__(n);switch(e){case Iu:return i*t;case Nu:return i*t;case Uu:return i*t*2;case al:return i*t/s.components*s.byteLength;case cl:return i*t/s.components*s.byteLength;case Vu:return i*t*2/s.components*s.byteLength;case ll:return i*t*2/s.components*s.byteLength;case Du:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case hl:return i*t*4/s.components*s.byteLength;case co:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:case nc:return Math.max(i,16)*Math.max(t,8)/4;case Qa:case ec:return Math.max(i,8)*Math.max(t,8)/2;case ic:case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case dc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fo:case yc:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ou:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Sc:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function __(i){switch(i){case si:case Lu:return{byteLength:1,components:1};case lr:case Cu:case yr:return{byteLength:2,components:1};case rl:case ol:return{byteLength:2,components:4};case Yi:case sl:case Un:return{byteLength:4,components:1};case Pu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function A_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new te,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,y){return p?new OffscreenCanvas(w,y):hr("canvas")}function x(w,y,Q){let lt=1,nt=Bt(w);if((nt.width>Q||nt.height>Q)&&(lt=Q/Math.max(nt.width,nt.height)),lt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let et=Math.floor(lt*nt.width),wt=Math.floor(lt*nt.height);u===void 0&&(u=_(et,wt));let St=y?_(et,wt):u;return St.width=et,St.height=wt,St.getContext("2d").drawImage(w,0,0,et,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+et+"x"+wt+")."),St}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(w,y,Q,lt,nt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let et=y;if(y===i.RED&&(Q===i.FLOAT&&(et=i.R32F),Q===i.HALF_FLOAT&&(et=i.R16F),Q===i.UNSIGNED_BYTE&&(et=i.R8)),y===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(et=i.R8UI),Q===i.UNSIGNED_SHORT&&(et=i.R16UI),Q===i.UNSIGNED_INT&&(et=i.R32UI),Q===i.BYTE&&(et=i.R8I),Q===i.SHORT&&(et=i.R16I),Q===i.INT&&(et=i.R32I)),y===i.RG&&(Q===i.FLOAT&&(et=i.RG32F),Q===i.HALF_FLOAT&&(et=i.RG16F),Q===i.UNSIGNED_BYTE&&(et=i.RG8)),y===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(et=i.RG8UI),Q===i.UNSIGNED_SHORT&&(et=i.RG16UI),Q===i.UNSIGNED_INT&&(et=i.RG32UI),Q===i.BYTE&&(et=i.RG8I),Q===i.SHORT&&(et=i.RG16I),Q===i.INT&&(et=i.RG32I)),y===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(et=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(et=i.RGB16UI),Q===i.UNSIGNED_INT&&(et=i.RGB32UI),Q===i.BYTE&&(et=i.RGB8I),Q===i.SHORT&&(et=i.RGB16I),Q===i.INT&&(et=i.RGB32I)),y===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),Q===i.UNSIGNED_INT&&(et=i.RGBA32UI),Q===i.BYTE&&(et=i.RGBA8I),Q===i.SHORT&&(et=i.RGBA16I),Q===i.INT&&(et=i.RGBA32I)),y===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),y===i.RGBA){let wt=nt?qo:me.getTransfer(lt);Q===i.FLOAT&&(et=i.RGBA32F),Q===i.HALF_FLOAT&&(et=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(et=wt===we?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(w,y){let Q;return w?y===null||y===Yi||y===Es?Q=i.DEPTH24_STENCIL8:y===Un?Q=i.DEPTH32F_STENCIL8:y===lr&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Yi||y===Es?Q=i.DEPTH_COMPONENT24:y===Un?Q=i.DEPTH_COMPONENT32F:y===lr&&(Q=i.DEPTH_COMPONENT16),Q}function Z(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Qe&&w.minFilter!==rn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function I(w){let y=w.target;y.removeEventListener("dispose",I),X(y),y.isVideoTexture&&h.delete(y)}function U(w){let y=w.target;y.removeEventListener("dispose",U),g(y)}function X(w){let y=n.get(w);if(y.__webglInit===void 0)return;let Q=w.source,lt=f.get(Q);if(lt){let nt=lt[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&A(w),Object.keys(lt).length===0&&f.delete(Q)}n.remove(w)}function A(w){let y=n.get(w);i.deleteTexture(y.__webglTexture);let Q=w.source,lt=f.get(Q);delete lt[y.__cacheKey],o.memory.textures--}function g(w){let y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(y.__webglFramebuffer[lt]))for(let nt=0;nt<y.__webglFramebuffer[lt].length;nt++)i.deleteFramebuffer(y.__webglFramebuffer[lt][nt]);else i.deleteFramebuffer(y.__webglFramebuffer[lt]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[lt])}else{if(Array.isArray(y.__webglFramebuffer))for(let lt=0;lt<y.__webglFramebuffer.length;lt++)i.deleteFramebuffer(y.__webglFramebuffer[lt]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let lt=0;lt<y.__webglColorRenderbuffer.length;lt++)y.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[lt]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Q=w.textures;for(let lt=0,nt=Q.length;lt<nt;lt++){let et=n.get(Q[lt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(Q[lt])}n.remove(w)}let S=0;function T(){S=0}function P(){let w=S;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),S+=1,w}function C(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function z(w,y){let Q=n.get(w);if(w.isVideoTexture&&zt(w),w.isRenderTargetTexture===!1&&w.version>0&&Q.__version!==w.version){let lt=w.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(Q,w,y);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+y)}function V(w,y){let Q=n.get(w);if(w.version>0&&Q.__version!==w.version){H(Q,w,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+y)}function J(w,y){let Q=n.get(w);if(w.version>0&&Q.__version!==w.version){H(Q,w,y);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+y)}function b(w,y){let Q=n.get(w);if(w.version>0&&Q.__version!==w.version){j(Q,w,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+y)}let G={[qi]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[cr]:i.MIRRORED_REPEAT},K={[Qe]:i.NEAREST,[il]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[sr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},Y={[od]:i.NEVER,[fd]:i.ALWAYS,[ad]:i.LESS,[ku]:i.LEQUAL,[cd]:i.EQUAL,[ud]:i.GEQUAL,[ld]:i.GREATER,[hd]:i.NOTEQUAL};function O(w,y){if(y.type===Un&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===rn||y.magFilter===sr||y.magFilter===xs||y.magFilter===Hn||y.minFilter===rn||y.minFilter===sr||y.minFilter===xs||y.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,G[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,G[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,G[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,K[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,K[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Y[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Qe||y.minFilter!==xs&&y.minFilter!==Hn||y.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function tt(w,y){let Q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",I));let lt=y.source,nt=f.get(lt);nt===void 0&&(nt={},f.set(lt,nt));let et=C(y);if(et!==w.__cacheKey){nt[et]===void 0&&(nt[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),nt[et].usedTimes++;let wt=nt[w.__cacheKey];wt!==void 0&&(nt[w.__cacheKey].usedTimes--,wt.usedTimes===0&&A(y)),w.__cacheKey=et,w.__webglTexture=nt[et].texture}return Q}function H(w,y,Q){let lt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(lt=i.TEXTURE_3D);let nt=tt(w,y),et=y.source;e.bindTexture(lt,w.__webglTexture,i.TEXTURE0+Q);let wt=n.get(et);if(et.version!==wt.__version||nt===!0){e.activeTexture(i.TEXTURE0+Q);let St=me.getPrimaries(me.workingColorSpace),gt=y.colorSpace===vi?null:me.getPrimaries(y.colorSpace),kt=y.colorSpace===vi||St===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let pt=x(y.image,!1,s.maxTextureSize);pt=ue(y,pt);let Ut=r.convert(y.format,y.colorSpace),qt=r.convert(y.type),Jt=L(y.internalFormat,Ut,qt,y.colorSpace,y.isVideoTexture);O(lt,y);let Nt,re=y.mipmaps,ne=y.isVideoTexture!==!0,Me=wt.__version===void 0||nt===!0,W=et.dataReady,bt=Z(y,pt);if(y.isDepthTexture)Jt=M(y.format===Ls,y.type),Me&&(ne?e.texStorage2D(i.TEXTURE_2D,1,Jt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Jt,pt.width,pt.height,0,Ut,qt,null));else if(y.isDataTexture)if(re.length>0){ne&&Me&&e.texStorage2D(i.TEXTURE_2D,bt,Jt,re[0].width,re[0].height);for(let st=0,ht=re.length;st<ht;st++)Nt=re[st],ne?W&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Nt.width,Nt.height,Ut,qt,Nt.data):e.texImage2D(i.TEXTURE_2D,st,Jt,Nt.width,Nt.height,0,Ut,qt,Nt.data);y.generateMipmaps=!1}else ne?(Me&&e.texStorage2D(i.TEXTURE_2D,bt,Jt,pt.width,pt.height),W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,Ut,qt,pt.data)):e.texImage2D(i.TEXTURE_2D,0,Jt,pt.width,pt.height,0,Ut,qt,pt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ne&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Jt,re[0].width,re[0].height,pt.depth);for(let st=0,ht=re.length;st<ht;st++)if(Nt=re[st],y.format!==yn)if(Ut!==null)if(ne){if(W)if(y.layerUpdates.size>0){let Pt=au(Nt.width,Nt.height,y.format,y.type);for(let Lt of y.layerUpdates){let R=Nt.data.subarray(Lt*Pt/Nt.data.BYTES_PER_ELEMENT,(Lt+1)*Pt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Lt,Nt.width,Nt.height,1,Ut,R)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,Nt.width,Nt.height,pt.depth,Ut,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Jt,Nt.width,Nt.height,pt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,Nt.width,Nt.height,pt.depth,Ut,qt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Jt,Nt.width,Nt.height,pt.depth,0,Ut,qt,Nt.data)}else{ne&&Me&&e.texStorage2D(i.TEXTURE_2D,bt,Jt,re[0].width,re[0].height);for(let st=0,ht=re.length;st<ht;st++)Nt=re[st],y.format!==yn?Ut!==null?ne?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,Nt.width,Nt.height,Ut,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Jt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?W&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Nt.width,Nt.height,Ut,qt,Nt.data):e.texImage2D(i.TEXTURE_2D,st,Jt,Nt.width,Nt.height,0,Ut,qt,Nt.data)}else if(y.isDataArrayTexture)if(ne){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Jt,pt.width,pt.height,pt.depth),W)if(y.layerUpdates.size>0){let st=au(pt.width,pt.height,y.format,y.type);for(let ht of y.layerUpdates){let Pt=pt.data.subarray(ht*st/pt.data.BYTES_PER_ELEMENT,(ht+1)*st/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,pt.width,pt.height,1,Ut,qt,Pt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Ut,qt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Jt,pt.width,pt.height,pt.depth,0,Ut,qt,pt.data);else if(y.isData3DTexture)ne?(Me&&e.texStorage3D(i.TEXTURE_3D,bt,Jt,pt.width,pt.height,pt.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Ut,qt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Jt,pt.width,pt.height,pt.depth,0,Ut,qt,pt.data);else if(y.isFramebufferTexture){if(Me)if(ne)e.texStorage2D(i.TEXTURE_2D,bt,Jt,pt.width,pt.height);else{let st=pt.width,ht=pt.height;for(let Pt=0;Pt<bt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Jt,st,ht,0,Ut,qt,null),st>>=1,ht>>=1}}else if(re.length>0){if(ne&&Me){let st=Bt(re[0]);e.texStorage2D(i.TEXTURE_2D,bt,Jt,st.width,st.height)}for(let st=0,ht=re.length;st<ht;st++)Nt=re[st],ne?W&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Ut,qt,Nt):e.texImage2D(i.TEXTURE_2D,st,Jt,Ut,qt,Nt);y.generateMipmaps=!1}else if(ne){if(Me){let st=Bt(pt);e.texStorage2D(i.TEXTURE_2D,bt,Jt,st.width,st.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,qt,pt)}else e.texImage2D(i.TEXTURE_2D,0,Jt,Ut,qt,pt);m(y)&&d(lt),wt.__version=et.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function j(w,y,Q){if(y.image.length!==6)return;let lt=tt(w,y),nt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+Q);let et=n.get(nt);if(nt.version!==et.__version||lt===!0){e.activeTexture(i.TEXTURE0+Q);let wt=me.getPrimaries(me.workingColorSpace),St=y.colorSpace===vi?null:me.getPrimaries(y.colorSpace),gt=y.colorSpace===vi||wt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let kt=y.isCompressedTexture||y.image[0].isCompressedTexture,pt=y.image[0]&&y.image[0].isDataTexture,Ut=[];for(let ht=0;ht<6;ht++)!kt&&!pt?Ut[ht]=x(y.image[ht],!0,s.maxCubemapSize):Ut[ht]=pt?y.image[ht].image:y.image[ht],Ut[ht]=ue(y,Ut[ht]);let qt=Ut[0],Jt=r.convert(y.format,y.colorSpace),Nt=r.convert(y.type),re=L(y.internalFormat,Jt,Nt,y.colorSpace),ne=y.isVideoTexture!==!0,Me=et.__version===void 0||lt===!0,W=nt.dataReady,bt=Z(y,qt);O(i.TEXTURE_CUBE_MAP,y);let st;if(kt){ne&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,re,qt.width,qt.height);for(let ht=0;ht<6;ht++){st=Ut[ht].mipmaps;for(let Pt=0;Pt<st.length;Pt++){let Lt=st[Pt];y.format!==yn?Jt!==null?ne?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt,0,0,Lt.width,Lt.height,Jt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt,re,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt,0,0,Lt.width,Lt.height,Jt,Nt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt,re,Lt.width,Lt.height,0,Jt,Nt,Lt.data)}}}else{if(st=y.mipmaps,ne&&Me){st.length>0&&bt++;let ht=Bt(Ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,re,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(pt){ne?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ut[ht].width,Ut[ht].height,Jt,Nt,Ut[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,re,Ut[ht].width,Ut[ht].height,0,Jt,Nt,Ut[ht].data);for(let Pt=0;Pt<st.length;Pt++){let R=st[Pt].image[ht].image;ne?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt+1,0,0,R.width,R.height,Jt,Nt,R.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt+1,re,R.width,R.height,0,Jt,Nt,R.data)}}else{ne?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Jt,Nt,Ut[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,re,Jt,Nt,Ut[ht]);for(let Pt=0;Pt<st.length;Pt++){let Lt=st[Pt];ne?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt+1,0,0,Jt,Nt,Lt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt+1,re,Jt,Nt,Lt.image[ht])}}}m(y)&&d(i.TEXTURE_CUBE_MAP),et.__version=nt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function dt(w,y,Q,lt,nt,et){let wt=r.convert(Q.format,Q.colorSpace),St=r.convert(Q.type),gt=L(Q.internalFormat,wt,St,Q.colorSpace),kt=n.get(y),pt=n.get(Q);if(pt.__renderTarget=y,!kt.__hasExternalTextures){let Ut=Math.max(1,y.width>>et),qt=Math.max(1,y.height>>et);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,et,gt,Ut,qt,y.depth,0,wt,St,null):e.texImage2D(nt,et,gt,Ut,qt,0,wt,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ee(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,nt,pt.__webglTexture,0,jt(y)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,nt,pt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(w,y,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){let lt=y.depthTexture,nt=lt&&lt.isDepthTexture?lt.type:null,et=M(y.stencilBuffer,nt),wt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=jt(y);ee(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,et,y.width,y.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,et,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,w)}else{let lt=y.textures;for(let nt=0;nt<lt.length;nt++){let et=lt[nt],wt=r.convert(et.format,et.colorSpace),St=r.convert(et.type),gt=L(et.internalFormat,wt,St,et.colorSpace),kt=jt(y);Q&&ee(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,gt,y.width,y.height):ee(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,gt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,gt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let lt=n.get(y.depthTexture);lt.__renderTarget=y,(!lt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);let nt=lt.__webglTexture,et=jt(y);if(y.depthTexture.format===Ms)ee(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(y.depthTexture.format===Ls)ee(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function ft(w){let y=n.get(w),Q=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let lt=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),lt){let nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,lt.removeEventListener("dispose",nt)};lt.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=lt}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");At(y.__webglFramebuffer,w)}else if(Q){y.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[lt]),y.__webglDepthbuffer[lt]===void 0)y.__webglDepthbuffer[lt]=i.createRenderbuffer(),ct(y.__webglDepthbuffer[lt],w,!1);else{let nt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ct(y.__webglDepthbuffer,w,!1);else{let lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(w,y,Q){let lt=n.get(w);y!==void 0&&dt(lt.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&ft(w)}function Kt(w){let y=w.texture,Q=n.get(w),lt=n.get(y);w.addEventListener("dispose",U);let nt=w.textures,et=w.isWebGLCubeRenderTarget===!0,wt=nt.length>1;if(wt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=y.version,o.memory.textures++),et){Q.__webglFramebuffer=[];for(let St=0;St<6;St++)if(y.mipmaps&&y.mipmaps.length>0){Q.__webglFramebuffer[St]=[];for(let gt=0;gt<y.mipmaps.length;gt++)Q.__webglFramebuffer[St][gt]=i.createFramebuffer()}else Q.__webglFramebuffer[St]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Q.__webglFramebuffer=[];for(let St=0;St<y.mipmaps.length;St++)Q.__webglFramebuffer[St]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(wt)for(let St=0,gt=nt.length;St<gt;St++){let kt=n.get(nt[St]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ee(w)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let St=0;St<nt.length;St++){let gt=nt[St];Q.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[St]);let kt=r.convert(gt.format,gt.colorSpace),pt=r.convert(gt.type),Ut=L(gt.internalFormat,kt,pt,gt.colorSpace,w.isXRRenderTarget===!0),qt=jt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Ut,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Q.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(Q.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),O(i.TEXTURE_CUBE_MAP,y);for(let St=0;St<6;St++)if(y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)dt(Q.__webglFramebuffer[St][gt],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,gt);else dt(Q.__webglFramebuffer[St],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);m(y)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let St=0,gt=nt.length;St<gt;St++){let kt=nt[St],pt=n.get(kt);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),O(i.TEXTURE_2D,kt),dt(Q.__webglFramebuffer,w,kt,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),m(kt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(St=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,lt.__webglTexture),O(St,y),y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)dt(Q.__webglFramebuffer[gt],w,y,i.COLOR_ATTACHMENT0,St,gt);else dt(Q.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,St,0);m(y)&&d(St),e.unbindTexture()}w.depthBuffer&&ft(w)}function Gt(w){let y=w.textures;for(let Q=0,lt=y.length;Q<lt;Q++){let nt=y[Q];if(m(nt)){let et=E(w),wt=n.get(nt).__webglTexture;e.bindTexture(et,wt),d(et),e.unbindTexture()}}}let de=[],F=[];function be(w){if(w.samples>0){if(ee(w)===!1){let y=w.textures,Q=w.width,lt=w.height,nt=i.COLOR_BUFFER_BIT,et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(w),St=y.length>1;if(St)for(let gt=0;gt<y.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let gt=0;gt<y.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),St){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);let kt=n.get(y[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,Q,lt,0,0,Q,lt,nt,i.NEAREST),c===!0&&(de.length=0,F.length=0,de.push(i.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(de.push(et),F.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let gt=0;gt<y.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);let kt=n.get(y[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function jt(w){return Math.min(s.maxSamples,w.samples)}function ee(w){let y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function zt(w){let y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function ue(w,y){let Q=w.colorSpace,lt=w.format,nt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||Q!==tn&&Q!==vi&&(me.getTransfer(Q)===we?(lt!==yn||nt!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),y}function Bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=T,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=b,this.rebindTextures=Ot,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=ee}function x_(i,t){function e(n,s=vi){let r,o=me.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return i.BYTE;if(n===Cu)return i.SHORT;if(n===lr)return i.UNSIGNED_SHORT;if(n===sl)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===yr)return i.HALF_FLOAT;if(n===Iu)return i.ALPHA;if(n===Du)return i.RGB;if(n===yn)return i.RGBA;if(n===Nu)return i.LUMINANCE;if(n===Uu)return i.LUMINANCE_ALPHA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===al)return i.RED;if(n===cl)return i.RED_INTEGER;if(n===Vu)return i.RG;if(n===ll)return i.RG_INTEGER;if(n===hl)return i.RGBA_INTEGER;if(n===co||n===lo||n===ho||n===uo)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ic||n===sc)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===_c||n===Ac||n===xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ac)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===yc||n===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fo)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ou||n===Mc||n===Sc||n===bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Bc=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},vn=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},y_={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(y_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
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

}`,kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xn({vertexShader:v_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zc=class extends ri{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,_=null,x=new kc,m=e.getContextAttributes(),d=null,E=null,L=[],M=[],Z=new te,I=null,U=new ze;U.viewport=new xe;let X=new ze;X.viewport=new xe;let A=[U,X],g=new Bc,S=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=L[H];return j===void 0&&(j=new ar,L[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=L[H];return j===void 0&&(j=new ar,L[H]=j),j.getGripSpace()},this.getHand=function(H){let j=L[H];return j===void 0&&(j=new ar,L[H]=j),j.getHandSpace()};function P(H){let j=M.indexOf(H.inputSource);if(j===-1)return;let dt=L[j];dt!==void 0&&(dt.update(H.inputSource,H.frame,l||o),dt.dispatchEvent({type:H.type,data:H.inputSource}))}function C(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",z);for(let H=0;H<L.length;H++){let j=M[H];j!==null&&(M[H]=null,L[H].disconnect(j))}S=null,T=null,x.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,E=null,tt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(Z.width,Z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",C),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(Z),s.renderState.layers===void 0){let j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new oi(p.framebufferWidth,p.framebufferHeight,{format:yn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,dt=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?Ls:Ms,dt=m.stencil?Es:Yi);let At={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new oi(f.textureWidth,f.textureHeight,{format:yn,type:si,depthTexture:new So(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z(H){for(let j=0;j<H.removed.length;j++){let dt=H.removed[j],ct=M.indexOf(dt);ct>=0&&(M[ct]=null,L[ct].disconnect(dt))}for(let j=0;j<H.added.length;j++){let dt=H.added[j],ct=M.indexOf(dt);if(ct===-1){for(let ft=0;ft<L.length;ft++)if(ft>=M.length){M.push(dt),ct=ft;break}else if(M[ft]===null){M[ft]=dt,ct=ft;break}if(ct===-1)break}let At=L[ct];At&&At.connect(dt)}}let V=new N,J=new N;function b(H,j,dt){V.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(dt.matrixWorld);let ct=V.distanceTo(J),At=j.projectionMatrix.elements,ft=dt.projectionMatrix.elements,Ot=At[14]/(At[10]-1),Kt=At[14]/(At[10]+1),Gt=(At[9]+1)/At[5],de=(At[9]-1)/At[5],F=(At[8]-1)/At[0],be=(ft[8]+1)/ft[0],jt=Ot*F,ee=Ot*be,zt=ct/(-F+be),ue=zt*-F;if(j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ue),H.translateZ(zt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),At[10]===-1)H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Bt=Ot+zt,w=Kt+zt,y=jt-ue,Q=ee+(ct-ue),lt=Gt*Kt/w*Bt,nt=de*Kt/w*Bt;H.projectionMatrix.makePerspective(y,Q,lt,nt,Bt,w),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function G(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let j=H.near,dt=H.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(dt=x.depthFar)),g.near=X.near=U.near=j,g.far=X.far=U.far=dt,(S!==g.near||T!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),S=g.near,T=g.far),U.layers.mask=H.layers.mask|2,X.layers.mask=H.layers.mask|4,g.layers.mask=U.layers.mask|X.layers.mask;let ct=H.parent,At=g.cameras;G(g,ct);for(let ft=0;ft<At.length;ft++)G(At[ft],ct);At.length===2?b(g,U,X):g.projectionMatrix.copy(U.projectionMatrix),K(H,g,ct)};function K(H,j,dt){dt===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(dt.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Is*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(g)};let Y=null;function O(H,j){if(h=j.getViewerPose(l||o),_=j,h!==null){let dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let ct=!1;dt.length!==g.cameras.length&&(g.cameras.length=0,ct=!0);for(let ft=0;ft<dt.length;ft++){let Ot=dt[ft],Kt=null;if(p!==null)Kt=p.getViewport(Ot);else{let de=u.getViewSubImage(f,Ot);Kt=de.viewport,ft===0&&(t.setRenderTargetTextures(E,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(E))}let Gt=A[ft];Gt===void 0&&(Gt=new ze,Gt.layers.enable(ft),Gt.viewport=new xe,A[ft]=Gt),Gt.matrix.fromArray(Ot.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ot.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),ft===0&&(g.matrix.copy(Gt.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ct===!0&&g.cameras.push(Gt)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){let ft=u.getDepthInformation(dt[0]);ft&&ft.isValid&&ft.texture&&x.init(t,ft,s.renderState)}}for(let dt=0;dt<L.length;dt++){let ct=M[dt],At=L[dt];ct!==null&&At!==void 0&&At.update(ct,j,l||o)}Y&&Y(H,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}let tt=new Wu;tt.setAnimationLoop(O),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}},zi=new cn,S_=new se;function b_(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Gu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,L,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,E,L):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===on&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===on&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=t.get(d),L=E.envMap,M=E.envMapRotation;L&&(m.envMap.value=L,zi.copy(M),zi.x*=-1,zi.y*=-1,zi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(S_.makeRotationFromEuler(zi)),m.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,E,L){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=L*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,L){let M=L.program;n.uniformBlockBinding(E,M)}function l(E,L){let M=s[E.id];M===void 0&&(_(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));let Z=L.program;n.updateUBOMapping(E,Z);let I=t.render.frame;r[E.id]!==I&&(f(E),r[E.id]=I)}function h(E){let L=u();E.__bindingPointIndex=L;let M=i.createBuffer(),Z=E.__size,I=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,Z,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let L=s[E.id],M=E.uniforms,Z=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let I=0,U=M.length;I<U;I++){let X=Array.isArray(M[I])?M[I]:[M[I]];for(let A=0,g=X.length;A<g;A++){let S=X[A];if(p(S,I,A,Z)===!0){let T=S.__offset,P=Array.isArray(S.value)?S.value:[S.value],C=0;for(let z=0;z<P.length;z++){let V=P[z],J=x(V);typeof V=="number"||typeof V=="boolean"?(S.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,T+C,S.__data)):V.isMatrix3?(S.__data[0]=V.elements[0],S.__data[1]=V.elements[1],S.__data[2]=V.elements[2],S.__data[3]=0,S.__data[4]=V.elements[3],S.__data[5]=V.elements[4],S.__data[6]=V.elements[5],S.__data[7]=0,S.__data[8]=V.elements[6],S.__data[9]=V.elements[7],S.__data[10]=V.elements[8],S.__data[11]=0):(V.toArray(S.__data,C),C+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,T,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,L,M,Z){let I=E.value,U=L+"_"+M;if(Z[U]===void 0)return typeof I=="number"||typeof I=="boolean"?Z[U]=I:Z[U]=I.clone(),!0;{let X=Z[U];if(typeof I=="number"||typeof I=="boolean"){if(X!==I)return Z[U]=I,!0}else if(X.equals(I)===!1)return X.copy(I),!0}return!1}function _(E){let L=E.uniforms,M=0,Z=16;for(let U=0,X=L.length;U<X;U++){let A=Array.isArray(L[U])?L[U]:[L[U]];for(let g=0,S=A.length;g<S;g++){let T=A[g],P=Array.isArray(T.value)?T.value:[T.value];for(let C=0,z=P.length;C<z;C++){let V=P[C],J=x(V),b=M%Z,G=b%J.boundary,K=b+G;M+=G,K!==0&&Z-K<J.storage&&(M+=Z-K),T.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,M+=J.storage}}}let I=M%Z;return I>0&&(M+=Z-I),E.__size=M,E.__cache={},this}function x(E){let L={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(L.boundary=4,L.storage=4):E.isVector2?(L.boundary=8,L.storage=8):E.isVector3||E.isColor?(L.boundary=16,L.storage=12):E.isVector4?(L.boundary=16,L.storage=16):E.isMatrix3?(L.boundary=48,L.storage=48):E.isMatrix4?(L.boundary=64,L.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),L}function m(E){let L=E.target;L.removeEventListener("dispose",m);let M=o.indexOf(L.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var bo=class{constructor(t={}){let{canvas:e=Ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,E=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=bi,this.toneMappingExposure=1;let M=this,Z=!1,I=0,U=0,X=null,A=-1,g=null,S=new xe,T=new xe,P=null,C=new Yt(0),z=0,V=e.width,J=e.height,b=1,G=null,K=null,Y=new xe(0,0,V,J),O=new xe(0,0,V,J),tt=!1,H=new ur,j=!1,dt=!1,ct=new se,At=new se,ft=new N,Ot=new xe,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function de(){return X===null?b:1}let F=n;function be(v,k){return e.getContext(v,k)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tl}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),F===null){let k="webgl2";if(F=be(k,v),F===null)throw be(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let jt,ee,zt,ue,Bt,w,y,Q,lt,nt,et,wt,St,gt,kt,pt,Ut,qt,Jt,Nt,re,ne,Me,W;function bt(){jt=new zm(F),jt.init(),ne=new x_(F,jt),ee=new Um(F,jt,t,ne),zt=new g_(F,jt),ee.reverseDepthBuffer&&f&&zt.buffers.depth.setReversed(!0),ue=new Wm(F),Bt=new i_,w=new A_(F,jt,zt,Bt,ee,ne,ue),y=new Om(M),Q=new km(M),lt=new $d(F),Me=new Dm(F,lt),nt=new Hm(F,lt,ue,Me),et=new qm(F,nt,lt,ue),Jt=new Xm(F,ee,w),pt=new Vm(Bt),wt=new n_(M,y,Q,jt,ee,Me,pt),St=new b_(M,Bt),gt=new r_,kt=new u_(jt),qt=new Im(M,y,Q,zt,et,p,c),Ut=new p_(M,et,ee),W=new w_(F,ue,ee,zt),Nt=new Nm(F,jt,ue),re=new Gm(F,jt,ue),ue.programs=wt.programs,M.capabilities=ee,M.extensions=jt,M.properties=Bt,M.renderLists=gt,M.shadowMap=Ut,M.state=zt,M.info=ue}bt();let st=new zc(M,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let v=jt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=jt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return b},this.setPixelRatio=function(v){v!==void 0&&(b=v,this.setSize(V,J,!1))},this.getSize=function(v){return v.set(V,J)},this.setSize=function(v,k,B=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=v,J=k,e.width=Math.floor(v*b),e.height=Math.floor(k*b),B===!0&&(e.style.width=v+"px",e.style.height=k+"px"),this.setViewport(0,0,v,k)},this.getDrawingBufferSize=function(v){return v.set(V*b,J*b).floor()},this.setDrawingBufferSize=function(v,k,B){V=v,J=k,b=B,e.width=Math.floor(v*B),e.height=Math.floor(k*B),this.setViewport(0,0,v,k)},this.getCurrentViewport=function(v){return v.copy(S)},this.getViewport=function(v){return v.copy(Y)},this.setViewport=function(v,k,B,q){v.isVector4?Y.set(v.x,v.y,v.z,v.w):Y.set(v,k,B,q),zt.viewport(S.copy(Y).multiplyScalar(b).round())},this.getScissor=function(v){return v.copy(O)},this.setScissor=function(v,k,B,q){v.isVector4?O.set(v.x,v.y,v.z,v.w):O.set(v,k,B,q),zt.scissor(T.copy(O).multiplyScalar(b).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(v){zt.setScissorTest(tt=v)},this.setOpaqueSort=function(v){G=v},this.setTransparentSort=function(v){K=v},this.getClearColor=function(v){return v.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(v=!0,k=!0,B=!0){let q=0;if(v){let D=!1;if(X!==null){let ot=X.texture.format;D=ot===hl||ot===ll||ot===cl}if(D){let ot=X.texture.type,_t=ot===si||ot===Yi||ot===lr||ot===Es||ot===rl||ot===ol,Mt=qt.getClearColor(),Tt=qt.getClearAlpha(),Qt=Mt.r,Ft=Mt.g,xt=Mt.b;_t?(_[0]=Qt,_[1]=Ft,_[2]=xt,_[3]=Tt,F.clearBufferuiv(F.COLOR,0,_)):(x[0]=Qt,x[1]=Ft,x[2]=xt,x[3]=Tt,F.clearBufferiv(F.COLOR,0,x))}else q|=F.COLOR_BUFFER_BIT}k&&(q|=F.DEPTH_BUFFER_BIT),B&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),gt.dispose(),kt.dispose(),Bt.dispose(),y.dispose(),Q.dispose(),et.dispose(),Me.dispose(),W.dispose(),wt.dispose(),st.dispose(),st.removeEventListener("sessionstart",yt),st.removeEventListener("sessionend",mt),Et.stop()};function ht(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Z=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),Z=!1;let v=ue.autoReset,k=Ut.enabled,B=Ut.autoUpdate,q=Ut.needsUpdate,D=Ut.type;bt(),ue.autoReset=v,Ut.enabled=k,Ut.autoUpdate=B,Ut.needsUpdate=q,Ut.type=D}function Lt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function R(v){let k=v.target;k.removeEventListener("dispose",R),$(k)}function $(v){at(v),Bt.remove(v)}function at(v){let k=Bt.get(v).programs;k!==void 0&&(k.forEach(function(B){wt.releaseProgram(B)}),v.isShaderMaterial&&wt.releaseShaderCache(v))}this.renderBufferDirect=function(v,k,B,q,D,ot){k===null&&(k=Kt);let _t=D.isMesh&&D.matrixWorld.determinant()<0,Mt=Xe(v,k,B,q,D);zt.setMaterial(q,_t);let Tt=B.index,Qt=1;if(q.wireframe===!0){if(Tt=nt.getWireframeAttribute(B),Tt===void 0)return;Qt=2}let Ft=B.drawRange,xt=B.attributes.position,ie=Ft.start*Qt,he=(Ft.start+Ft.count)*Qt;ot!==null&&(ie=Math.max(ie,ot.start*Qt),he=Math.min(he,(ot.start+ot.count)*Qt)),Tt!==null?(ie=Math.max(ie,0),he=Math.min(he,Tt.count)):xt!=null&&(ie=Math.max(ie,0),he=Math.min(he,xt.count));let Ae=he-ie;if(Ae<0||Ae===1/0)return;Me.setup(D,q,Mt,B,Tt);let Ke,_e=Nt;if(Tt!==null&&(Ke=lt.get(Tt),_e=re,_e.setIndex(Ke)),D.isMesh)q.wireframe===!0?(zt.setLineWidth(q.wireframeLinewidth*de()),_e.setMode(F.LINES)):_e.setMode(F.TRIANGLES);else if(D.isLine){let Ht=q.linewidth;Ht===void 0&&(Ht=1),zt.setLineWidth(Ht*de()),D.isLineSegments?_e.setMode(F.LINES):D.isLineLoop?_e.setMode(F.LINE_LOOP):_e.setMode(F.LINE_STRIP)}else D.isPoints?_e.setMode(F.POINTS):D.isSprite&&_e.setMode(F.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)_e.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))_e.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Ht=D._multiDrawStarts,Yn=D._multiDrawCounts,ye=D._multiDrawCount,En=Tt?lt.get(Tt).bytesPerElement:1,is=Bt.get(q).currentProgram.getUniforms();for(let fn=0;fn<ye;fn++)is.setValue(F,"_gl_DrawID",fn),_e.render(Ht[fn]/En,Yn[fn])}else if(D.isInstancedMesh)_e.renderInstances(ie,Ae,D.count);else if(B.isInstancedBufferGeometry){let Ht=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Yn=Math.min(B.instanceCount,Ht);_e.renderInstances(ie,Ae,Yn)}else _e.render(ie,Ae)};function rt(v,k,B){v.transparent===!0&&v.side===Dn&&v.forceSinglePass===!1?(v.side=on,v.needsUpdate=!0,It(v,k,B),v.side=Gn,v.needsUpdate=!0,It(v,k,B),v.side=Dn):It(v,k,B)}this.compile=function(v,k,B=null){B===null&&(B=v),d=kt.get(B),d.init(k),L.push(d),B.traverseVisible(function(D){D.isLight&&D.layers.test(k.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),v!==B&&v.traverseVisible(function(D){D.isLight&&D.layers.test(k.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),d.setupLights();let q=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let ot=D.material;if(ot)if(Array.isArray(ot))for(let _t=0;_t<ot.length;_t++){let Mt=ot[_t];rt(Mt,B,D),q.add(Mt)}else rt(ot,B,D),q.add(ot)}),L.pop(),d=null,q},this.compileAsync=function(v,k,B=null){let q=this.compile(v,k,B);return new Promise(D=>{function ot(){if(q.forEach(function(_t){Bt.get(_t).currentProgram.isReady()&&q.delete(_t)}),q.size===0){D(v);return}setTimeout(ot,10)}jt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ut=null;function vt(v){ut&&ut(v)}function yt(){Et.stop()}function mt(){Et.start()}let Et=new Wu;Et.setAnimationLoop(vt),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(v){ut=v,st.setAnimationLoop(v),v===null?Et.stop():Et.start()},st.addEventListener("sessionstart",yt),st.addEventListener("sessionend",mt),this.render=function(v,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(k),k=st.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,k,X),d=kt.get(v,L.length),d.init(k),L.push(d),At.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),H.setFromProjectionMatrix(At),dt=this.localClippingEnabled,j=pt.init(this.clippingPlanes,dt),m=gt.get(v,E.length),m.init(),E.push(m),st.enabled===!0&&st.isPresenting===!0){let ot=M.xr.getDepthSensingMesh();ot!==null&&Vt(ot,k,-1/0,M.sortObjects)}Vt(v,k,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(G,K),Gt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Gt&&qt.addToRenderList(m,v),this.info.render.frame++,j===!0&&pt.beginShadows();let B=d.state.shadowsArray;Ut.render(B,v,k),j===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,D=m.transmissive;if(d.setupLights(),k.isArrayCamera){let ot=k.cameras;if(D.length>0)for(let _t=0,Mt=ot.length;_t<Mt;_t++){let Tt=ot[_t];Xt(q,D,v,Tt)}Gt&&qt.render(v);for(let _t=0,Mt=ot.length;_t<Mt;_t++){let Tt=ot[_t];Ct(m,v,Tt,Tt.viewport)}}else D.length>0&&Xt(q,D,v,k),Gt&&qt.render(v),Ct(m,v,k);X!==null&&(w.updateMultisampleRenderTarget(X),w.updateRenderTargetMipmap(X)),v.isScene===!0&&v.onAfterRender(M,v,k),Me.resetDefaultState(),A=-1,g=null,L.pop(),L.length>0?(d=L[L.length-1],j===!0&&pt.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Vt(v,k,B,q){if(v.visible===!1)return;if(v.layers.test(k.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(k);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||H.intersectsSprite(v)){q&&Ot.setFromMatrixPosition(v.matrixWorld).applyMatrix4(At);let _t=et.update(v),Mt=v.material;Mt.visible&&m.push(v,_t,Mt,B,Ot.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||H.intersectsObject(v))){let _t=et.update(v),Mt=v.material;if(q&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ot.copy(v.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ot.copy(_t.boundingSphere.center)),Ot.applyMatrix4(v.matrixWorld).applyMatrix4(At)),Array.isArray(Mt)){let Tt=_t.groups;for(let Qt=0,Ft=Tt.length;Qt<Ft;Qt++){let xt=Tt[Qt],ie=Mt[xt.materialIndex];ie&&ie.visible&&m.push(v,_t,ie,B,Ot.z,xt)}}else Mt.visible&&m.push(v,_t,Mt,B,Ot.z,null)}}let ot=v.children;for(let _t=0,Mt=ot.length;_t<Mt;_t++)Vt(ot[_t],k,B,q)}function Ct(v,k,B,q){let D=v.opaque,ot=v.transmissive,_t=v.transparent;d.setupLightsView(B),j===!0&&pt.setGlobalState(M.clippingPlanes,B),q&&zt.viewport(S.copy(q)),D.length>0&&oe(D,k,B),ot.length>0&&oe(ot,k,B),_t.length>0&&oe(_t,k,B),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function Xt(v,k,B,q){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new oi(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?yr:si,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let ot=d.state.transmissionRenderTarget[q.id],_t=q.viewport||S;ot.setSize(_t.z,_t.w);let Mt=M.getRenderTarget();M.setRenderTarget(ot),M.getClearColor(C),z=M.getClearAlpha(),z<1&&M.setClearColor(16777215,.5),M.clear(),Gt&&qt.render(B);let Tt=M.toneMapping;M.toneMapping=bi;let Qt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),j===!0&&pt.setGlobalState(M.clippingPlanes,q),oe(v,B,q),w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let xt=0,ie=k.length;xt<ie;xt++){let he=k[xt],Ae=he.object,Ke=he.geometry,_e=he.material,Ht=he.group;if(_e.side===Dn&&Ae.layers.test(q.layers)){let Yn=_e.side;_e.side=on,_e.needsUpdate=!0,fe(Ae,B,q,Ke,_e,Ht),_e.side=Yn,_e.needsUpdate=!0,Ft=!0}}Ft===!0&&(w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot))}M.setRenderTarget(Mt),M.setClearColor(C,z),Qt!==void 0&&(q.viewport=Qt),M.toneMapping=Tt}function oe(v,k,B){let q=k.isScene===!0?k.overrideMaterial:null;for(let D=0,ot=v.length;D<ot;D++){let _t=v[D],Mt=_t.object,Tt=_t.geometry,Qt=q===null?_t.material:q,Ft=_t.group;Mt.layers.test(B.layers)&&fe(Mt,k,B,Tt,Qt,Ft)}}function fe(v,k,B,q,D,ot){v.onBeforeRender(M,k,B,q,D,ot),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(M,k,B,q,v,ot),D.transparent===!0&&D.side===Dn&&D.forceSinglePass===!1?(D.side=on,D.needsUpdate=!0,M.renderBufferDirect(B,k,q,D,v,ot),D.side=Gn,D.needsUpdate=!0,M.renderBufferDirect(B,k,q,D,v,ot),D.side=Dn):M.renderBufferDirect(B,k,q,D,v,ot),v.onAfterRender(M,k,B,q,D,ot)}function It(v,k,B){k.isScene!==!0&&(k=Kt);let q=Bt.get(v),D=d.state.lights,ot=d.state.shadowsArray,_t=D.state.version,Mt=wt.getParameters(v,D.state,ot,k,B),Tt=wt.getProgramCacheKey(Mt),Qt=q.programs;q.environment=v.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(v.isMeshStandardMaterial?Q:y).get(v.envMap||q.environment),q.envMapRotation=q.environment!==null&&v.envMap===null?k.environmentRotation:v.envMapRotation,Qt===void 0&&(v.addEventListener("dispose",R),Qt=new Map,q.programs=Qt);let Ft=Qt.get(Tt);if(Ft!==void 0){if(q.currentProgram===Ft&&q.lightsStateVersion===_t)return ce(v,Mt),Ft}else Mt.uniforms=wt.getUniforms(v),v.onBeforeCompile(Mt,M),Ft=wt.acquireProgram(Mt,Tt),Qt.set(Tt,Ft),q.uniforms=Mt.uniforms;let xt=q.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(xt.clippingPlanes=pt.uniform),ce(v,Mt),q.needsLights=Fe(v),q.lightsStateVersion=_t,q.needsLights&&(xt.ambientLightColor.value=D.state.ambient,xt.lightProbe.value=D.state.probe,xt.directionalLights.value=D.state.directional,xt.directionalLightShadows.value=D.state.directionalShadow,xt.spotLights.value=D.state.spot,xt.spotLightShadows.value=D.state.spotShadow,xt.rectAreaLights.value=D.state.rectArea,xt.ltc_1.value=D.state.rectAreaLTC1,xt.ltc_2.value=D.state.rectAreaLTC2,xt.pointLights.value=D.state.point,xt.pointLightShadows.value=D.state.pointShadow,xt.hemisphereLights.value=D.state.hemi,xt.directionalShadowMap.value=D.state.directionalShadowMap,xt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,xt.spotShadowMap.value=D.state.spotShadowMap,xt.spotLightMatrix.value=D.state.spotLightMatrix,xt.spotLightMap.value=D.state.spotLightMap,xt.pointShadowMap.value=D.state.pointShadowMap,xt.pointShadowMatrix.value=D.state.pointShadowMatrix),q.currentProgram=Ft,q.uniformsList=null,Ft}function $t(v){if(v.uniformsList===null){let k=v.currentProgram.getUniforms();v.uniformsList=bs.seqWithValue(k.seq,v.uniforms)}return v.uniformsList}function ce(v,k){let B=Bt.get(v);B.outputColorSpace=k.outputColorSpace,B.batching=k.batching,B.batchingColor=k.batchingColor,B.instancing=k.instancing,B.instancingColor=k.instancingColor,B.instancingMorph=k.instancingMorph,B.skinning=k.skinning,B.morphTargets=k.morphTargets,B.morphNormals=k.morphNormals,B.morphColors=k.morphColors,B.morphTargetsCount=k.morphTargetsCount,B.numClippingPlanes=k.numClippingPlanes,B.numIntersection=k.numClipIntersection,B.vertexAlphas=k.vertexAlphas,B.vertexTangents=k.vertexTangents,B.toneMapping=k.toneMapping}function Xe(v,k,B,q,D){k.isScene!==!0&&(k=Kt),w.resetTextureUnits();let ot=k.fog,_t=q.isMeshStandardMaterial?k.environment:null,Mt=X===null?M.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:tn,Tt=(q.isMeshStandardMaterial?Q:y).get(q.envMap||_t),Qt=q.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ft=!!B.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),xt=!!B.morphAttributes.position,ie=!!B.morphAttributes.normal,he=!!B.morphAttributes.color,Ae=bi;q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ae=M.toneMapping);let Ke=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_e=Ke!==void 0?Ke.length:0,Ht=Bt.get(q),Yn=d.state.lights;if(j===!0&&(dt===!0||v!==g)){let An=v===g&&q.id===A;pt.setState(q,v,An)}let ye=!1;q.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Yn.state.version||Ht.outputColorSpace!==Mt||D.isBatchedMesh&&Ht.batching===!1||!D.isBatchedMesh&&Ht.batching===!0||D.isBatchedMesh&&Ht.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ht.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ht.instancing===!1||!D.isInstancedMesh&&Ht.instancing===!0||D.isSkinnedMesh&&Ht.skinning===!1||!D.isSkinnedMesh&&Ht.skinning===!0||D.isInstancedMesh&&Ht.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ht.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ht.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ht.instancingMorph===!1&&D.morphTexture!==null||Ht.envMap!==Tt||q.fog===!0&&Ht.fog!==ot||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==pt.numPlanes||Ht.numIntersection!==pt.numIntersection)||Ht.vertexAlphas!==Qt||Ht.vertexTangents!==Ft||Ht.morphTargets!==xt||Ht.morphNormals!==ie||Ht.morphColors!==he||Ht.toneMapping!==Ae||Ht.morphTargetsCount!==_e)&&(ye=!0):(ye=!0,Ht.__version=q.version);let En=Ht.currentProgram;ye===!0&&(En=It(q,k,D));let is=!1,fn=!1,qs=!1,Ee=En.getUniforms(),kn=Ht.uniforms;if(zt.useProgram(En.program)&&(is=!0,fn=!0,qs=!0),q.id!==A&&(A=q.id,fn=!0),is||g!==v){zt.buffers.depth.getReversed()?(ct.copy(v.projectionMatrix),Pd(ct),Id(ct),Ee.setValue(F,"projectionMatrix",ct)):Ee.setValue(F,"projectionMatrix",v.projectionMatrix),Ee.setValue(F,"viewMatrix",v.matrixWorldInverse);let di=Ee.map.cameraPosition;di!==void 0&&di.setValue(F,ft.setFromMatrixPosition(v.matrixWorld)),ee.logarithmicDepthBuffer&&Ee.setValue(F,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ee.setValue(F,"isOrthographic",v.isOrthographicCamera===!0),g!==v&&(g=v,fn=!0,qs=!0)}if(D.isSkinnedMesh){Ee.setOptional(F,D,"bindMatrix"),Ee.setOptional(F,D,"bindMatrixInverse");let An=D.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ee.setValue(F,"boneTexture",An.boneTexture,w))}D.isBatchedMesh&&(Ee.setOptional(F,D,"batchingTexture"),Ee.setValue(F,"batchingTexture",D._matricesTexture,w),Ee.setOptional(F,D,"batchingIdTexture"),Ee.setValue(F,"batchingIdTexture",D._indirectTexture,w),Ee.setOptional(F,D,"batchingColorTexture"),D._colorsTexture!==null&&Ee.setValue(F,"batchingColorTexture",D._colorsTexture,w));let Ys=B.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&Jt.update(D,B,En),(fn||Ht.receiveShadow!==D.receiveShadow)&&(Ht.receiveShadow=D.receiveShadow,Ee.setValue(F,"receiveShadow",D.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(kn.envMap.value=Tt,kn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(kn.envMapIntensity.value=k.environmentIntensity),fn&&(Ee.setValue(F,"toneMappingExposure",M.toneMappingExposure),Ht.needsLights&&Oe(kn,qs),ot&&q.fog===!0&&St.refreshFogUniforms(kn,ot),St.refreshMaterialUniforms(kn,q,b,J,d.state.transmissionRenderTarget[v.id]),bs.upload(F,$t(Ht),kn,w)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(bs.upload(F,$t(Ht),kn,w),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ee.setValue(F,"center",D.center),Ee.setValue(F,"modelViewMatrix",D.modelViewMatrix),Ee.setValue(F,"normalMatrix",D.normalMatrix),Ee.setValue(F,"modelMatrix",D.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let An=q.uniformsGroups;for(let di=0,pi=An.length;di<pi;di++){let oh=An[di];W.update(oh,En),W.bind(oh,En)}}return En}function Oe(v,k){v.ambientLightColor.needsUpdate=k,v.lightProbe.needsUpdate=k,v.directionalLights.needsUpdate=k,v.directionalLightShadows.needsUpdate=k,v.pointLights.needsUpdate=k,v.pointLightShadows.needsUpdate=k,v.spotLights.needsUpdate=k,v.spotLightShadows.needsUpdate=k,v.rectAreaLights.needsUpdate=k,v.hemisphereLights.needsUpdate=k}function Fe(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(v,k,B){Bt.get(v.texture).__webglTexture=k,Bt.get(v.depthTexture).__webglTexture=B;let q=Bt.get(v);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=B===void 0,q.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,k){let B=Bt.get(v);B.__webglFramebuffer=k,B.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(v,k=0,B=0){X=v,I=k,U=B;let q=!0,D=null,ot=!1,_t=!1;if(v){let Tt=Bt.get(v);if(Tt.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(Tt.__webglFramebuffer===void 0)w.setupRenderTarget(v);else if(Tt.__hasExternalTextures)w.rebindTextures(v,Bt.get(v.texture).__webglTexture,Bt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let xt=v.depthTexture;if(Tt.__boundDepthTexture!==xt){if(xt!==null&&Bt.has(xt)&&(v.width!==xt.image.width||v.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(v)}}let Qt=v.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(_t=!0);let Ft=Bt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ft[k])?D=Ft[k][B]:D=Ft[k],ot=!0):v.samples>0&&w.useMultisampledRTT(v)===!1?D=Bt.get(v).__webglMultisampledFramebuffer:Array.isArray(Ft)?D=Ft[B]:D=Ft,S.copy(v.viewport),T.copy(v.scissor),P=v.scissorTest}else S.copy(Y).multiplyScalar(b).floor(),T.copy(O).multiplyScalar(b).floor(),P=tt;if(zt.bindFramebuffer(F.FRAMEBUFFER,D)&&q&&zt.drawBuffers(v,D),zt.viewport(S),zt.scissor(T),zt.setScissorTest(P),ot){let Tt=Bt.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,B)}else if(_t){let Tt=Bt.get(v.texture),Qt=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.__webglTexture,B||0,Qt)}A=-1},this.readRenderTargetPixels=function(v,k,B,q,D,ot,_t){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Bt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_t!==void 0&&(Mt=Mt[_t]),Mt){zt.bindFramebuffer(F.FRAMEBUFFER,Mt);try{let Tt=v.texture,Qt=Tt.format,Ft=Tt.type;if(!ee.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=v.width-q&&B>=0&&B<=v.height-D&&F.readPixels(k,B,q,D,ne.convert(Qt),ne.convert(Ft),ot)}finally{let Tt=X!==null?Bt.get(X).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(v,k,B,q,D,ot,_t){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Bt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_t!==void 0&&(Mt=Mt[_t]),Mt){let Tt=v.texture,Qt=Tt.format,Ft=Tt.type;if(!ee.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=v.width-q&&B>=0&&B<=v.height-D){zt.bindFramebuffer(F.FRAMEBUFFER,Mt);let xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.bufferData(F.PIXEL_PACK_BUFFER,ot.byteLength,F.STREAM_READ),F.readPixels(k,B,q,D,ne.convert(Qt),ne.convert(Ft),0);let ie=X!==null?Bt.get(X).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,ie);let he=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Cd(F,he,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ot),F.deleteBuffer(xt),F.deleteSync(he),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,k=null,B=0){v.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,v=arguments[1]);let q=Math.pow(2,-B),D=Math.floor(v.image.width*q),ot=Math.floor(v.image.height*q),_t=k!==null?k.x:0,Mt=k!==null?k.y:0;w.setTexture2D(v,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,_t,Mt,D,ot),zt.unbindTexture()},this.copyTextureToTexture=function(v,k,B=null,q=null,D=0){v.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,v=arguments[1],k=arguments[2],D=arguments[3]||0,B=null);let ot,_t,Mt,Tt,Qt,Ft,xt,ie,he,Ae=v.isCompressedTexture?v.mipmaps[D]:v.image;B!==null?(ot=B.max.x-B.min.x,_t=B.max.y-B.min.y,Mt=B.isBox3?B.max.z-B.min.z:1,Tt=B.min.x,Qt=B.min.y,Ft=B.isBox3?B.min.z:0):(ot=Ae.width,_t=Ae.height,Mt=Ae.depth||1,Tt=0,Qt=0,Ft=0),q!==null?(xt=q.x,ie=q.y,he=q.z):(xt=0,ie=0,he=0);let Ke=ne.convert(k.format),_e=ne.convert(k.type),Ht;k.isData3DTexture?(w.setTexture3D(k,0),Ht=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(w.setTexture2DArray(k,0),Ht=F.TEXTURE_2D_ARRAY):(w.setTexture2D(k,0),Ht=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let Yn=F.getParameter(F.UNPACK_ROW_LENGTH),ye=F.getParameter(F.UNPACK_IMAGE_HEIGHT),En=F.getParameter(F.UNPACK_SKIP_PIXELS),is=F.getParameter(F.UNPACK_SKIP_ROWS),fn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Tt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ft);let qs=v.isDataArrayTexture||v.isData3DTexture,Ee=k.isDataArrayTexture||k.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let kn=Bt.get(v),Ys=Bt.get(k),An=Bt.get(kn.__renderTarget),di=Bt.get(Ys.__renderTarget);zt.bindFramebuffer(F.READ_FRAMEBUFFER,An.__webglFramebuffer),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let pi=0;pi<Mt;pi++)qs&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(v).__webglTexture,D,Ft+pi),v.isDepthTexture?(Ee&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(k).__webglTexture,D,he+pi),F.blitFramebuffer(Tt,Qt,ot,_t,xt,ie,ot,_t,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ee?F.copyTexSubImage3D(Ht,D,xt,ie,he+pi,Tt,Qt,ot,_t):F.copyTexSubImage2D(Ht,D,xt,ie,he+pi,Tt,Qt,ot,_t);zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ee?v.isDataTexture||v.isData3DTexture?F.texSubImage3D(Ht,D,xt,ie,he,ot,_t,Mt,Ke,_e,Ae.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Ht,D,xt,ie,he,ot,_t,Mt,Ke,Ae.data):F.texSubImage3D(Ht,D,xt,ie,he,ot,_t,Mt,Ke,_e,Ae):v.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,D,xt,ie,ot,_t,Ke,_e,Ae.data):v.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,D,xt,ie,Ae.width,Ae.height,Ke,Ae.data):F.texSubImage2D(F.TEXTURE_2D,D,xt,ie,ot,_t,Ke,_e,Ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,Yn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye),F.pixelStorei(F.UNPACK_SKIP_PIXELS,En),F.pixelStorei(F.UNPACK_SKIP_ROWS,is),F.pixelStorei(F.UNPACK_SKIP_IMAGES,fn),D===0&&k.generateMipmaps&&F.generateMipmap(Ht),zt.unbindTexture()},this.copyTextureToTexture3D=function(v,k,B=null,q=null,D=0){return v.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,q=arguments[1]||null,v=arguments[2],k=arguments[3],D=arguments[4]||0),nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,k,B,q,D)},this.initRenderTarget=function(v){Bt.get(v).__webglFramebuffer===void 0&&w.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?w.setTextureCube(v,0):v.isData3DTexture?w.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?w.setTexture2DArray(v,0):w.setTexture2D(v,0),zt.unbindTexture()},this.resetState=function(){I=0,U=0,X=null,zt.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var wo=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},fr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wc,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new N,dr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var cu=new N,lu=new xe,hu=new xe,T_=new N,uu=new se,eo=new N,Oa=new mn,fu=new se,Fa=new wi,To=class extends Ne{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uh,this.bindMatrix=new se,this.bindMatrixInverse=new se,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,eo),this.boundingBox.expandByPoint(eo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,eo),this.boundingSphere.expandByPoint(eo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oa.copy(this.boundingSphere),Oa.applyMatrix4(s),t.ray.intersectsSphere(Oa)!==!1&&(fu.copy(s).invert(),Fa.copy(t.ray).applyMatrix4(fu),!(this.boundingBox!==null&&Fa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Fa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new xe,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===uh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ed?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;lu.fromBufferAttribute(s.attributes.skinIndex,t),hu.fromBufferAttribute(s.attributes.skinWeight,t),cu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=hu.getComponent(r);if(o!==0){let a=lu.getComponent(r);uu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(T_.copy(cu).applyMatrix4(uu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},pr=class extends Pe{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ro=class extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Qe,h=Qe,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},du=new se,R_=new se,Eo=class i{constructor(t=[],e=[]){this.uuid=Vn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new se)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new se;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:R_;du.multiplyMatrices(a,e[r]),du.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Ro(e,t,t,yn,Un);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new pr),this.bones.push(o),this.boneInverses.push(new se().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},Ji=class extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},As=new se,pu=new se,no=[],mu=new an,E_=new se,js=new Ne,Qs=new mn,Lo=class extends Ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,E_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new an),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),mu.copy(t.boundingBox).applyMatrix4(As),this.boundingBox.union(mu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),Qs.copy(t.boundingSphere).applyMatrix4(As),this.boundingSphere.union(Qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),t.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),pu.multiplyMatrices(n,As),js.matrixWorld=pu,js.raycast(t,no);for(let o=0,a=no.length;o<a;o++){let c=no[o];c.instanceId=r,c.object=this,e.push(c)}no.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ro(new Float32Array(s*this.count),s,this.count,al,Un));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var mr=class extends gn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Co=new N,Po=new N,gu=new se,tr=new wi,io=new mn,Ba=new N,_u=new N,Us=class extends Pe{constructor(t=new Sn,e=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Co.fromBufferAttribute(e,s-1),Po.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Co.distanceTo(Po);t.setAttribute("lineDistance",new Mn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(s),io.radius+=r,t.ray.intersectsSphere(io)===!1)return;gu.copy(s).invert(),tr.copy(t.ray).applyMatrix4(gu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=l){let d=h.getX(x),E=h.getX(x+1),L=so(this,t,tr,c,d,E);L&&e.push(L)}if(this.isLineLoop){let x=h.getX(_-1),m=h.getX(p),d=so(this,t,tr,c,x,m);d&&e.push(d)}}else{let p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=l){let d=so(this,t,tr,c,x,x+1);d&&e.push(d)}if(this.isLineLoop){let x=so(this,t,tr,c,_-1,p);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function so(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Co.fromBufferAttribute(o,s),Po.fromBufferAttribute(o,r),e.distanceSqToSegment(Co,Po,Ba,_u)>n)return;Ba.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ba);if(!(c<t.near||c>t.far))return{distance:c,point:_u.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Au=new N,xu=new N,Io=class extends Us{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Au.fromBufferAttribute(e,s),xu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Au.distanceTo(xu);t.setAttribute("lineDistance",new Mn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Do=class extends Us{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},gr=class extends gn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yu=new se,Hc=new wi,ro=new mn,oo=new N,No=class extends Pe{constructor(t=new Sn,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,t.ray.intersectsSphere(ro)===!1)return;yu.copy(s).invert(),Hc.copy(t.ray).applyMatrix4(yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=f,x=p;_<x;_++){let m=l.getX(_);oo.fromBufferAttribute(u,m),vu(oo,m,c,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,x=p;_<x;_++)oo.fromBufferAttribute(u,_),vu(oo,_,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vu(i,t,e,n,s,r,o){let a=Hc.distanceSqToPoint(i);if(a<e){let c=new N;Hc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Uo=class extends Ye{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var On=class extends gn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bu,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_n=class extends On{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ao(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function L_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function C_(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Mu(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function Ku(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}var Ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gc=class extends Ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case dh:r=t,a=2*e-n;break;case ph:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case dh:o=t,c=2*n-e;break;case ph:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),x=_*_,m=x*_,d=-f*m+2*f*x-f*_,E=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*_+1,L=(-1-p)*m+(1.5+p)*x+.5*_,M=p*m-p*x;for(let Z=0;Z!==a;++Z)r[Z]=d*o[h+Z]+E*o[l+Z]+L*o[c+Z]+M*o[u+Z];return r}},Wc=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Xc=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ao(e,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ao(t.times,Array),values:ao(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Cs:e=this.InterpolantFactoryMethodDiscrete;break;case Ps:e=this.InterpolantFactoryMethodLinear;break;case ha:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return ha}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&L_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ha,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let _=0;_!==n;++_){let x=e[u+_];if(x!==e[f+_]||x!==e[p+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Ps;var Ri=class extends bn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Cs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends bn{};Vo.prototype.ValueTypeName="color";var ai=class extends bn{};ai.prototype.ValueTypeName="number";var qc=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ve.slerpFlat(r,0,o,l-a,o,l,c);return r}},ci=class extends bn{InterpolantFactoryMethodLinear(t){return new qc(this.times,this.values,this.getValueSize(),t)}};ci.prototype.ValueTypeName="quaternion";ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends bn{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Cs;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends bn{};li.prototype.ValueTypeName="vector";var Oo=class{constructor(t="",e=-1,n=[],s=nd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(I_(n[o]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=C_(c);c=Mu(c,1,h),l=Mu(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ai(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,_,x){if(p.length!==0){let m=[],d=[];Ku(p,m,d,_),m.length!==0&&x.push(new u(f,m,d))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let x=0;x<f[_].morphTargets.length;x++)p[f[_].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let E=0;E!==f[_].morphTargets.length;++E){let L=f[_];m.push(L.time),d.push(L.morphTarget===x?1:0)}s.push(new ai(".morphTargetInfluence["+x+"]",m,d))}c=p.length*o}else{let p=".bones["+e[u].name+"]";n(li,p+".position",f,"pos",s),n(ci,p+".quaternion",f,"rot",s),n(li,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function P_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ai;case"vector":case"vector2":case"vector3":case"vector4":return li;case"color":return Vo;case"quaternion":return ci;case"bool":case"boolean":return Ri;case"string":return Ei}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function I_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=P_(i.type);if(i.times===void 0){let e=[],n=[];Ku(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}var Mi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Yc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},D_=new Yc,hi=class{constructor(t){this.manager=t!==void 0?t:D_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qn={},Zc=class extends Error{constructor(t,e){super(t),this.response=e}},_r=class extends hi{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Mi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Qn[t]!==void 0){Qn[t].push({onLoad:e,onProgress:n,onError:s});return}Qn[t]=[],Qn[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Qn[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0,x=0,m=new ReadableStream({start(d){E();function E(){u.read().then(({done:L,value:M})=>{if(L)d.close();else{x+=M.byteLength;let Z=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let I=0,U=h.length;I<U;I++){let X=h[I];X.onProgress&&X.onProgress(Z)}d.enqueue(M),E()}},L=>{d.error(L)})}}});return new Response(m)}else throw new Zc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{Mi.add(t,l);let h=Qn[t];delete Qn[t];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Qn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Qn[t];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Kc=class extends hi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Mi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=hr("img");function c(){h(),Mi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Fo=class extends hi{constructor(t){super(t)}load(t,e,n,s){let r=new Ye,o=new Kc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Vs=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Bo=class extends Vs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ka=new se,Su=new N,bu=new N,Ar=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Su.setFromMatrixPosition(t.matrixWorld),e.position.copy(Su),bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bu),e.updateMatrixWorld(),ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jc=class extends Ar{constructor(){super(new ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Is*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ko=class extends Vs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Jc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},wu=new se,er=new N,za=new N,$c=class extends Ar{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),er.setFromMatrixPosition(t.matrixWorld),n.position.copy(er),za.copy(n.position),za.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(za),n.updateMatrixWorld(),s.makeTranslation(-er.x,-er.y,-er.z),wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu)}},zo=class extends Vs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $c}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},jc=class extends Ar{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$i=class extends Vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new jc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Li=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Ho=class extends hi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Mi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Mi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),Mi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Mi.add(t,c),r.manager.itemStart(t)}};var dl="\\[\\]\\.:\\/",N_=new RegExp("["+dl+"]","g"),pl="[^"+dl+"]",U_="[^"+dl.replace("\\.","")+"]",V_=/((?:WC+[\/:])*)/.source.replace("WC",pl),O_=/(WCOD+)?/.source.replace("WCOD",U_),F_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),B_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),k_=new RegExp("^"+V_+O_+F_+B_+"$"),z_=["material","materials","bones","map"],Qc=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(N_,"")}static parseTrackName(t){let e=k_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);z_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Qc;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RA=new Float32Array(1);var xr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Go=class extends ri{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);function ml(i,t){if(t===Fu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===vr||t===Xo){let e=i.getIndex();if(e===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,s=[];if(t===vr)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}var Ko=class extends hi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Ml(e)}),this.register(function(e){return new Sl(e)}),this.register(function(e){return new Il(e)}),this.register(function(e){return new Dl(e)}),this.register(function(e){return new Nl(e)}),this.register(function(e){return new wl(e)}),this.register(function(e){return new Tl(e)}),this.register(function(e){return new Rl(e)}),this.register(function(e){return new El(e)}),this.register(function(e){return new vl(e)}),this.register(function(e){return new Ll(e)}),this.register(function(e){return new bl(e)}),this.register(function(e){return new Pl(e)}),this.register(function(e){return new Cl(e)}),this.register(function(e){return new xl(e)}),this.register(function(e){return new Ul(e)}),this.register(function(e){return new Vl(e)})}load(t,e,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Li.extractUrlBase(t);o=Li.resolveURL(l,this.path)}else o=Li.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new _r(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r,o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===tf){try{o[pe.KHR_BINARY_GLTF]=new Ol(t)}catch(u){s&&s(u);return}r=JSON.parse(o[pe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Wl(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case pe.KHR_MATERIALS_UNLIT:o[u]=new yl;break;case pe.KHR_DRACO_MESH_COMPRESSION:o[u]=new Fl(r,this.dracoLoader);break;case pe.KHR_TEXTURE_TRANSFORM:o[u]=new Bl;break;case pe.KHR_MESH_QUANTIZATION:o[u]=new kl;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(t,e){let n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}};function H_(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}var pe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},xl=class{constructor(t){this.parser=t,this.name=pe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,s=e.cache.get(n);if(s)return s;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new Yt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],tn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new $i(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new zo(h),l.distance=u;break;case"spot":l=new ko(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ui(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},yl=class{constructor(){this.name=pe.KHR_MATERIALS_UNLIT}getMaterialType(){return Wn}extendParams(t,e,n){let s=[];t.color=new Yt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],tn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,De))}return Promise.all(s)}},vl=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},Ml=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new te(a,a)}return Promise.all(r)}},Sl=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},bl=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},wl=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new Yt(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],tn)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,De)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Tl=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Rl=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Yt().setRGB(a[0],a[1],a[2],tn),Promise.all(r)}},El=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ll=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new Yt().setRGB(a[0],a[1],a[2],tn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,De)),Promise.all(r)}},Cl=class{constructor(t){this.parser=t,this.name=pe.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},Pl=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Il=class{constructor(t){this.parser=t,this.name=pe.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},Dl=class{constructor(t){this.parser=t,this.name=pe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Nl=class{constructor(t){this.parser=t,this.name=pe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Ul=class{constructor(t){this.name=pe.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},Vl=class{constructor(t){this.name=pe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=e.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==wn.TRIANGLES&&l.mode!==wn.TRIANGLE_STRIP&&l.mode!==wn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let _ of u){let x=new se,m=new N,d=new ve,E=new N(1,1,1),L=new Lo(_.geometry,_.material,f);for(let M=0;M<f;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,M),c.SCALE&&E.fromBufferAttribute(c.SCALE,M),L.setMatrixAt(M,x.compose(m,d,E));for(let M in c)if(M==="_COLOR_0"){let Z=c[M];L.instanceColor=new Ji(Z.array,Z.itemSize,Z.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,c[M]);Pe.prototype.copy.call(L,_),this.parser.assignFinalMaterial(L),p.push(L)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},tf="glTF",Mr=12,Ju={JSON:1313821514,BIN:5130562},Ol=class{constructor(t){this.name=pe.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Mr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==tf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Mr,r=new DataView(t,Mr),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Ju.JSON){let l=new Uint8Array(t,Mr+o,a);this.content=n.decode(l)}else if(c===Ju.BIN){let l=Mr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Fl=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Hl[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=Hl[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],p=Bs[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let _ in p.attributes){let x=p.attributes[_],m=c[_];m!==void 0&&(x.normalized=m)}u(p)},a,l,tn,f)})})}},Bl=class{constructor(){this.name=pe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},kl=class{constructor(){this.name=pe.KHR_MESH_QUANTIZATION}},Jo=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-e,u=(n-e)/h,f=u*u,p=f*u,_=t*l,x=_-l,m=-2*p+3*f,d=p-f,E=1-m,L=d-f+u;for(let M=0;M!==a;M++){let Z=o[x+M+a],I=o[x+M+c]*h,U=o[_+M+a],X=o[_+M]*h;r[M]=E*Z+L*I+m*U+d*X}return r}},G_=new ve,zl=class extends Jo{interpolate_(t,e,n,s){let r=super.interpolate_(t,e,n,s);return G_.fromArray(r).normalize().toArray(r),r}},wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$u={9728:Qe,9729:rn,9984:il,9985:sr,9986:xs,9987:Hn},ju={33071:ei,33648:cr,10497:qi},gl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},W_={CUBICSPLINE:void 0,LINEAR:Ps,STEP:Cs},_l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function X_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new On({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),i.DefaultMaterial}function ts(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ui(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function q_(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Y_(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Z_(i){let t,e=i.extensions&&i.extensions[pe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Al(e.attributes):t=i.indices+":"+Al(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Al(i.targets[n]);return t}function Al(i){let t="",e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Gl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function K_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var J_=new se,Wl=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new H_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Fo(this.options.manager):this.textureLoader=new Ho(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _r(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ts(r,a,s),ui(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){let o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){let o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let s=t(e[n]);if(s)return s}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let s=0;s<e.length;s++){let r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[pe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Li.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){let e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){let o=gl[s.type],a=Bs[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ue(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=gl[s.type],l=Bs[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0,x,m;if(p&&p!==u){let d=Math.floor(f/p),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,L=e.cache.get(E);L||(x=new l(a,d*p,s.count*p/h),L=new fr(x,p/h),e.cache.add(E,L)),m=new dr(L,c,f%p/h,_)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),m=new Ue(x,c,_);if(s.sparse!==void 0){let d=gl.SCALAR,E=Bs[s.sparse.indices.componentType],L=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,Z=new E(o[1],L,s.sparse.count*d),I=new l(o[2],M,s.sparse.count*c);a!==null&&(m=new Ue(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let U=0,X=Z.length;U<X;U++){let A=Z[U];if(m.setX(A,I[U*c]),c>=2&&m.setY(A,I[U*c+1]),c>=3&&m.setZ(A,I[U*c+2]),c>=4&&m.setW(A,I[U*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=$u[f.magFilter]||rn,h.minFilter=$u[f.minFilter]||Hn,h.wrapS=ju[f.wrapS]||qi,h.wrapT=ju[f.wrapT]||qi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Qe&&h.minFilter!==rn,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=s.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let _=f;e.isImageBitmapLoader===!0&&(_=function(x){let m=new Ye(x);m.needsUpdate=!0,f(m)}),e.load(Li.resolveURL(u,r.path),_,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),ui(u,o),u.userData.mimeType=o.mimeType||K_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[pe.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[pe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[pe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new gr,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new mr,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return On}loadMaterial(t){let e=this,n=this.json,s=this.extensions,r=n.materials[t],o,a={},c=r.extensions||{},l=[];if(c[pe.KHR_MATERIALS_UNLIT]){let u=s[pe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Yt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],tn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,De)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Dn);let h=r.alphaMode||_l.OPAQUE;if(h===_l.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===_l.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Wn&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new te(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Wn&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Wn){let u=r.emissiveFactor;a.emissive=new Yt().setRGB(u[0],u[1],u[2],tn)}return r.emissiveTexture!==void 0&&o!==Wn&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,De)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ui(u,r),e.associations.set(u,{materials:t}),r.extensions&&ts(s,u,r),u})}createUniqueName(t){let e=Re.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[pe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Qu(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],h=Z_(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[pe.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Qu(new Sn,l,e),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?X_(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,_=h.length;p<_;p++){let x=h[p],m=o[p],d,E=l[p];if(m.mode===wn.TRIANGLES||m.mode===wn.TRIANGLE_STRIP||m.mode===wn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new To(x,E):new Ne(x,E),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===wn.TRIANGLE_STRIP?d.geometry=ml(d.geometry,Xo):m.mode===wn.TRIANGLE_FAN&&(d.geometry=ml(d.geometry,vr));else if(m.mode===wn.LINES)d=new Io(x,E);else if(m.mode===wn.LINE_STRIP)d=new Us(x,E);else if(m.mode===wn.LINE_LOOP)d=new Do(x,E);else if(m.mode===wn.POINTS)d=new No(x,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Y_(d,r),d.name=e.createUniqueName(r.name||"mesh_"+t),ui(d,r),m.extensions&&ts(s,d,m),e.assignFinalMaterial(d),u.push(d)}for(let p=0,_=u.length;p<_;p++)e.associations.set(u[p],{meshes:t,primitives:p});if(u.length===1)return r.extensions&&ts(s,u[0],r),u[0];let f=new vn;r.extensions&&ts(s,f,r),e.associations.set(f,{meshes:t});for(let p=0,_=u.length;p<_;p++)f.add(u[p]);return f})}loadCamera(t){let e,n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new ze(Yo.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Ns(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ui(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new se;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Eo(a,c)})}loadAnimation(t){let e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],_=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[_.input]:_.input,E=s.parameters!==void 0?s.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",E)),l.push(_),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],_=u[2],x=u[3],m=u[4],d=[];for(let E=0,L=f.length;E<L;E++){let M=f[E],Z=p[E],I=_[E],U=x[E],X=m[E];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let A=n._createAnimationTracks(M,Z,I,U,X);if(A)for(let g=0;g<A.length;g++)d.push(A[g])}return new Oo(r,void 0,d)})}createNodeMesh(t){let e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){let e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,J_)});for(let p=0,_=u.length;p<_;p++)h.add(u[p]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new pr:l.length>1?h=new vn:l.length===1?h=l[0]:h=new Pe,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ui(h,r),r.extensions&&ts(n,h,r),r.matrix!==void 0){let u=new se;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],s=this,r=new vn;n.name&&(r.name=s.createUniqueName(n.name)),ui(r,n),n.extensions&&ts(e,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof gn||f instanceof Ye)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){let o=[],a=t.name?t.name:t.uuid,c=[];Ci[r.path]===Ci.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Ci[r.path]){case Ci.weights:l=ai;break;case Ci.rotation:l=ci;break;case Ci.position:case Ci.scale:l=li;break;default:switch(n.itemSize){case 1:l=ai;break;case 2:case 3:default:l=li;break}break}let h=s.interpolation!==void 0?W_[s.interpolation]:Ps,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let _=new l(c[f]+"."+Ci[r.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Gl(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let s=this instanceof ci?zl:Jo;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function $_(i,t,e){let n=t.attributes,s=new an;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){let h=Gl(Bs[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new N,c=new N;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){let x=Gl(Bs[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new mn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Qu(i,t,e){let n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Hl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){let o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return me.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${me.workingColorSpace}" not supported.`),ui(i,t),$_(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?q_(i,t.targets,e):i})}var ef={type:"change"},ql={type:"start"},sf={type:"end"},$o=new wi,nf=new In,j_=Math.cos(70*Yo.DEG2RAD),We=new N,ln=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xl=1e-6,jo=class extends Go{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ve,this._lastTargetPosition=new N,this._quat=new ve().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xr,this._sphericalDelta=new xr,this._scale=1,this._panOffset=new N,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new N,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tA.bind(this),this._onPointerDown=Q_.bind(this),this._onPointerUp=eA.bind(this),this._onContextMenu=cA.bind(this),this._onMouseWheel=sA.bind(this),this._onKeyDown=rA.bind(this),this._onTouchStart=oA.bind(this),this._onTouchMove=aA.bind(this),this._onMouseDown=nA.bind(this),this._onMouseMove=iA.bind(this),this._interceptControlDown=lA.bind(this),this._interceptControlUp=hA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ef),this.update(),this.state=Te.NONE}update(t=null){let e=this.object.position;We.copy(e).sub(this.target),We.applyQuaternion(this._quat),this._spherical.setFromVector3(We),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ln:n>Math.PI&&(n-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(We.setFromSpherical(this._spherical),We.applyQuaternion(this._quatInverse),e.copy(this.target).add(We),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=We.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=We.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($o.origin.copy(this.object.position),$o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($o.direction))<j_?this.object.lookAt(this.target):(nf.setFromNormalAndCoplanarPoint(this.object.up,this.target),$o.intersectPlane(nf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xl||this._lastTargetPosition.distanceToSquared(this.target)>Xl?(this.dispatchEvent(ef),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ln/60*this.autoRotateSpeed*t:ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){We.setFromMatrixColumn(e,0),We.multiplyScalar(-t),this._panOffset.add(We)}_panUp(t,e){this.screenSpacePanning===!0?We.setFromMatrixColumn(e,1):(We.setFromMatrixColumn(e,0),We.crossVectors(this.object.up,We)),We.multiplyScalar(t),this._panOffset.add(We)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;We.copy(s).sub(this.target);let r=We.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new te,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Q_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function tA(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function eA(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sf),this.state=Te.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function nA(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Te.DOLLY;break;case ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}break;case ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(ql)}function iA(i){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function sA(i){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(i.preventDefault(),this.dispatchEvent(ql),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(sf))}function rA(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function oA(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Te.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Te.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(ql)}function aA(i){switch(this._trackPointer(i),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Te.NONE}}function cA(i){this.enabled!==!1&&i.preventDefault()}function lA(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hA(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Zt=(i=0,t=0,e=0)=>new N(i,t,e),ke=()=>new ve,hn=Math.PI/180,Sr=Zt(1,0,0),Yl=Zt(0,1,0),rf=Zt(0,0,1),Pi=Zt(0,-1,0),fi=(i,t,e)=>Math.max(t,Math.min(e,i)),br=i=>(i=fi(i,0,1),i*i*(3-2*i)),ks=i=>(i=fi(i,0,1),i*i*i*(i*(6*i-15)+10)),Zl=["pelvis","lumbar","chest","neck","head","uarmL","farmL","handL","uarmR","farmR","handR","thighL","shinL","footL","thighR","shinR","footR"],Kl={lumbar:"pelvis",chest:"lumbar",neck:"chest",head:"neck",uarmL:"chest",farmL:"uarmL",handL:"farmL",uarmR:"chest",farmR:"uarmR",handR:"farmR",thighL:"pelvis",shinL:"thighL",footL:"shinL",thighR:"pelvis",shinR:"thighR",footR:"shinR"},of={shinL:1,shinR:1,farmL:-1,farmR:-1},uA={uarmL:1,uarmR:1,thighL:1,thighR:1},fA=i=>/^(pelvis|thigh|shin|foot)/.test(i)?"L":/^(lumbar|chest)/.test(i)?"T":/^(neck|head)/.test(i)?"H":"A",af={L:[0,.82],T:[.06,.9],A:[.14,1],H:[.18,1]},Jl={open:{c:[6,10,6],t:[8,10]},floor:{c:[3,3,0],t:[4,0]},fist:{c:[85,95,70],t:[35,50]},lock:{c:[62,72,40],t:[6,12]},namaste:{c:[0,0,0],t:[0,4]},spread:{c:[-6,0,0],t:[-10,0]}},wr={light:{top:"#2f8f8a",low:"#2e3566",hair:"#3b2a20"},dark:{top:"#3aa39c",low:"#4e5aa8",hair:"#3b2a20"}},cf={light:{bg:"#f3f0ea",floor:"#ebe6dc",mat:"#7fa38c",stripe:"#6d9179"},dark:{bg:"#16171b",floor:"#1f2024",mat:"#3f5a4c",stripe:"#36503f"}},lf={female:{body:"Regular_Female_FullBody.gltf",hair:"Hair_Ponytail.gltf"},male:{body:"Regular_Male_FullBody.gltf",hair:"Hair_SimpleParted.gltf"}};async function hf(i,{base:t="",poses:e,model:n="female",interactive:s=!0}={}){let r=new bo({canvas:i,antialias:!0,alpha:!1});r.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),r.outputColorSpace=De,r.toneMapping=nl,r.toneMappingExposure=1.05,r.shadowMap.enabled=!0,r.shadowMap.type=el;let o=new wo,a=new Bo(16777215,10261380,1.6);o.add(a);let c=new $i(16774374,2.4);c.position.set(2.2,5,4.5),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-2.5,right:2.5,top:2.5,bottom:-2.5,near:.5,far:15}),c.shadow.bias=-4e-4,c.shadow.normalBias=.02,c.shadow.radius=4,o.add(c),o.add(c.target);let l=new $i(14674175,.9);l.position.set(-3,2.5,-3.5),o.add(l);let h=new On({roughness:1}),u=new Ne(new Ki(40,40),h);u.rotation.x=-Math.PI/2,u.receiveShadow=!0,o.add(u);let f=new On({roughness:.95}),p=new Ne(new Ki(.64,1.85),f);p.rotation.x=-Math.PI/2,p.position.y=.003,p.receiveShadow=!0,o.add(p);let _=R=>{let $=document.createElement("canvas");$.width=512,$.height=64;let at=$.getContext("2d");at.fillStyle=R.mat,at.fillRect(0,0,512,64),at.fillStyle=R.stripe;for(let ut=0;ut<512;ut+=64)at.fillRect(ut,0,2,64);let rt=new Uo($);return rt.colorSpace=De,rt},x=new ze(24,1,.05,60),m=null;s&&(m=new jo(x,i),m.enableDamping=!0,m.enablePan=!1,m.minDistance=1.5,m.maxDistance=12);let d=new Ko,E=lf[n]||lf.female,[L,M]=await Promise.all([d.loadAsync(t+E.body),d.loadAsync(t+E.hair).catch(()=>null)]),Z=L.scene;o.add(Z);let I={},U=[];Z.traverse(R=>{R.isBone&&(I[R.name]=R),R.isMesh&&(R.castShadow=!0,R.receiveShadow=!0,R.frustumCulled=!1,R.isSkinnedMesh&&U.push(R))});let X={},A=null;M&&(A=M.scene,o.add(A),A.traverse(R=>{R.isBone&&(X[R.name]=R),R.isMesh&&(R.castShadow=!0,R.frustumCulled=!1)}));let g=["pelvis","spine_01","spine_02","spine_03","neck_01","Head","clavicle_l","upperarm_l","lowerarm_l","hand_l","thigh_l","calf_l","foot_l","ball_l"];for(let R of g)if(!I[R])throw new Error("model: no bone "+R);let S=R=>R.getWorldQuaternion(ke()),T=R=>R.getWorldPosition(Zt()),P=R=>R==="L"?"l":"r",C=(R,$,at)=>{Z.updateMatrixWorld(!0);let rt=I[R],ut=T(I[$]).sub(T(rt)).normalize(),vt=ke().setFromUnitVectors(ut,at).multiply(S(rt));rt.quaternion.copy(S(rt.parent).invert().multiply(vt))};for(let R of["l","r"])C("upperarm_"+R,"lowerarm_"+R,Pi),C("lowerarm_"+R,"hand_"+R,Pi),C("thigh_"+R,"calf_"+R,Pi),C("calf_"+R,"foot_"+R,Pi);Z.updateMatrixWorld(!0);let z=[];I.pelvis.traverse(R=>{R.isBone&&z.push(R)});let V=new Map(z.map(R=>[R,R.quaternion.clone()])),J=new Map(z.map(R=>[R,S(R)])),b={pelvis:"pelvis",spine_03:"chest",Head:"head",upperarm_l:"uarmL",lowerarm_l:"farmL",hand_l:"handL",upperarm_r:"uarmR",lowerarm_r:"farmR",hand_r:"handR",thigh_l:"thighL",calf_l:"shinL",foot_l:"footL",thigh_r:"thighR",calf_r:"shinR",foot_r:"footR"},G=T(I.pelvis),K={};for(let R of["l","r"]){let $=T(I["hand_"+R]),at=T(I["middle_01_"+R]),rt=T(I["index_01_"+R]),ut=T(I["pinky_01_"+R]),vt=at.clone().sub($).normalize(),yt=rt.clone().sub(ut);yt.addScaledVector(vt,-yt.dot(vt)).normalize();let mt=Zt().crossVectors(vt,yt).normalize(),Et=Zt(R==="l"?-1:1,0,0);mt.dot(Et)<0&&mt.negate(),K[R==="l"?"L":"R"]={d:vt,n:mt}}let Y=new Map;for(let R of["l","r"]){let $=Zt(R==="l"?-1:1,0,0);["index","middle","ring","pinky","thumb"].map(rt=>[1,2,3].map(ut=>I[`${rt}_0${ut}_${R}`])).forEach((rt,ut)=>rt.forEach((vt,yt)=>{if(!vt)return;let mt=rt[yt+1]||vt.children.find(Ct=>Ct.isBone);if(!mt)return;let Et=T(mt).sub(T(vt)).normalize(),Vt=Zt().crossVectors(Et,$).normalize();Y.set(vt,{ax:Vt.applyQuaternion(S(vt).invert()),k:yt,thumb:ut===4,side:R==="l"?"L":"R"})}))}let O=U.reduce((R,$)=>$.geometry.attributes.position.count>(R?R.geometry.attributes.position.count:0)?$:R,null);if(!/noW=1/.test(location.search)){O.skeleton.update(),O.updateMatrixWorld(!0);let R=O.geometry,$=R.attributes.skinIndex,at=R.attributes.skinWeight,rt=R.attributes.position.count,ut=Zt(),vt=O.skeleton.bones,yt=Vt=>vt.findIndex(Ct=>Ct.name===Vt),mt=yt("pelvis"),Et=yt("spine_01");for(let Vt of["l","r"]){let Ct=yt("thigh_"+Vt);if(Ct<0||mt<0)continue;let Xt=T(I["thigh_"+Vt]),oe=T(I["calf_"+Vt]),fe=Xt.distanceTo(oe);for(let It=0;It<rt;It++){let $t=-1;for(let D=0;D<4;D++)$.getComponent(It,D)===Ct&&($t=D);if($t<0)continue;let ce=at.getComponent(It,$t);if(ce<=0)continue;O.getVertexPosition(It,ut),O.localToWorld(ut);let Xe=(Xt.y-ut.y)/fe,Oe=fi((Xt.z-ut.z)/.08,-1,1),Fe=fi((Math.abs(ut.x)-Math.abs(Xt.x))/.07,0,1),k=(1-br((Xe+.02)/.5))*(Oe>0?.5+.42*Oe:.22+.3*Fe);if(k=fi(k,0,.9),k<.01)continue;let B=ce*k;window.__wcnt=(window.__wcnt||0)+1,at.setComponent(It,$t,ce-B);let q=-1;for(let D=0;D<4;D++)$.getComponent(It,D)===mt&&(q=D);if(q<0){let D=0,ot=9;for(let Mt=0;Mt<4;Mt++){let Tt=at.getComponent(It,Mt);Mt!==$t&&Tt<ot&&(ot=Tt,D=Mt)}let _t=at.getComponent(It,D);$.setComponent(It,D,mt),at.setComponent(It,D,B+_t*0),_t>0&&at.setComponent(It,$t,at.getComponent(It,$t)+_t)}else at.setComponent(It,q,at.getComponent(It,q)+B)}}$.needsUpdate=!0,at.needsUpdate=!0,window.__wfix=(window.__wfix||0)+1}{O.skeleton.update(),O.updateMatrixWorld(!0);let R=O.geometry,$=R.attributes.position,at=R.attributes.skinIndex,rt=R.attributes.skinWeight,ut=$.count,vt=new Float32Array(ut*3),yt=Zt(),mt=T(I.upperarm_l).y;for(let It=0;It<ut;It++){let $t=0,ce=0;for(let Fe=0;Fe<4;Fe++){let v=rt.getComponent(It,Fe);v>$t&&($t=v,ce=at.getComponent(It,Fe))}let Xe=O.skeleton.bones[ce].name;O.getVertexPosition(It,yt),O.localToWorld(yt);let Oe=/upperarm|lowerarm/.test(Xe)?1:/hand|index|middle|ring|pinky|thumb|Head|neck|foot|ball/.test(Xe)?2:0;vt[It*3]=yt.y,vt[It*3+1]=Oe,vt[It*3+2]=Oe===1?mt-yt.y:Math.abs(yt.x)}R.setAttribute("oinfo",new Ue(vt,3));let Et=It=>T(I[It]).y,Vt=n==="male",Ct=Vt?[Et("pelvis")+.06,mt+.2]:[Et("spine_01")-.035,mt+.2],Xt=[Et("foot_l")+.07,Vt?Et("pelvis")+.09:Et("spine_01")-.005],oe=Vt?.16:0,fe=[].concat(O.material);for(let It of fe)It.userData.top={value:new Yt(wr.light.top)},It.userData.low={value:new Yt(wr.light.low)},It.onBeforeCompile=$t=>{$t.uniforms.uTop=It.userData.top,$t.uniforms.uLow=It.userData.low,$t.vertexShader=`attribute vec3 oinfo;
varying vec3 vO;
`+$t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vO = oinfo;`);let ce=Xe=>Xe.toFixed(4);$t.fragmentShader=`uniform vec3 uTop;
uniform vec3 uLow;
varying vec3 vO;
`+$t.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
{ float yy=vO.x, cls=vO.y; float e=.006;
  float body=1.-step(.5,cls);
  float t=body*smoothstep(${ce(Ct[0])}-e,${ce(Ct[0])}+e,yy)*(1.-smoothstep(${ce(Ct[1])}-e,${ce(Ct[1])}+e,yy));
  ${Vt?`t=max(t,(1.-step(1.5,cls))*step(.5,cls)*(1.-smoothstep(${ce(oe)}-e,${ce(oe)}+e,vO.z)));`:"t*=1.-smoothstep(.13,.145,vO.z);"}
  float l=body*smoothstep(${ce(Xt[0])}-e,${ce(Xt[0])}+e,yy)*(1.-smoothstep(${ce(Xt[1])}-e,${ce(Xt[1])}+e,yy));
  float lum=dot(diffuseColor.rgb,vec3(.3,.59,.11)); vec3 shade=vec3(1.);
  diffuseColor.rgb=mix(diffuseColor.rgb,uTop*shade,t); diffuseColor.rgb=mix(diffuseColor.rgb,uLow*shade,l*(1.-t)); vOut=max(t,l); }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.85,vOut);`).replace("void main() {",`float vOut=0.;
void main() {`)},It.needsUpdate=!0}A&&A.traverse(R=>{if(R.isMesh)for(let $ of[].concat(R.material))$.color=new Yt(wr.light.hair),$.needsUpdate=!0});let tt=[];{let R=O.geometry,$=R.attributes.skinIndex,at=R.attributes.skinWeight,rt=R.attributes.position.count;for(let ut=0;ut<rt;ut+=3){let vt=0,yt=0;for(let Vt=0;Vt<4;Vt++){let Ct=at.getComponent(ut,Vt);Ct>vt&&(vt=Ct,yt=$.getComponent(ut,Vt))}let mt=O.skeleton.bones[yt].name,Et=/hand|index|middle|ring|pinky|thumb/.test(mt)?"hand"+(mt.endsWith("_l")?"L":"R"):/foot|ball/.test(mt)?"foot"+(mt.endsWith("_l")?"L":"R"):/calf/.test(mt)?"shin"+(mt.endsWith("_l")?"L":"R"):/thigh/.test(mt)?"thigh"+(mt.endsWith("_l")?"L":"R"):/lowerarm/.test(mt)?"farm"+(mt.endsWith("_l")?"L":"R"):/upperarm/.test(mt)?"uarm"+(mt.endsWith("_l")?"L":"R"):/Head|neck/.test(mt)?"head":/pelvis|spine_01/.test(mt)?"pelvis":"chest";tt.push({i:ut,reg:Et})}}let H=Zt();function j(){O.skeleton.update();let R=new Float32Array(tt.length*3);for(let $=0;$<tt.length;$++)O.getVertexPosition(tt[$].i,H),O.localToWorld(H),R[$*3]=H.x,R[$*3+1]=H.y,R[$*3+2]=H.z;return R}let dt=(R,$)=>ke().slerp(R,$),ct=ke();function At(R,$,at=!0){let rt=new Map,ut=R.pelvis.clone().invert().multiply(R.chest),vt=R.chest.clone().invert().multiply(R.head),yt=I.pelvis.parent?S(I.pelvis.parent):ke();for(let mt of z){let Et=mt.name,Vt=mt===I.pelvis?yt:rt.get(mt.parent),Ct;if(Et==="spine_01")Ct=R.pelvis.clone().multiply(dt(ut,.3)).multiply(J.get(mt));else if(Et==="spine_02")Ct=R.pelvis.clone().multiply(dt(ut,.65)).multiply(J.get(mt));else if(Et==="neck_01")Ct=R.chest.clone().multiply(dt(vt,.5)).multiply(J.get(mt));else if(b[Et])Ct=R[b[Et]].clone().multiply(J.get(mt));else if(/^clavicle_/.test(Et)&&at){let Xt=Et.endsWith("_l")?"L":"R",oe=Xt==="L"?1:-1,fe=Pi.clone().applyQuaternion(R["uarm"+Xt]),It=Yl.clone().applyQuaternion(R.chest),$t=rf.clone().applyQuaternion(R.chest),ce=br((fe.dot(It)+.2)/1.2)*22,Xe=br((fe.dot($t)-.3)/.7)*10;Ct=Vt.clone().multiply(V.get(mt)).multiply(ke().setFromAxisAngle(rf.clone().applyQuaternion(J.get(mt).clone().invert()),oe*ce*hn)).multiply(ke().setFromAxisAngle(Yl.clone().applyQuaternion(J.get(mt).clone().invert()),-oe*Xe*hn))}else{Ct=Vt.clone().multiply(V.get(mt));let Xt=Y.get(mt);if(Xt){let oe=$&&$[Xt.side],fe=oe&&typeof oe=="object"?oe:Jl[oe||"open"]||Jl.open,It=Xt.thumb?fe.t[Math.min(Xt.k,1)]||0:fe.c[Xt.k];It&&Ct.multiply(ct.setFromAxisAngle(Xt.ax,It*hn))}}rt.set(mt,Ct),mt.quaternion.copy(Vt.clone().invert().multiply(Ct))}}function ft(R){let $=I.pelvis.parent;I.pelvis.position.copy($?$.worldToLocal(R.clone()):R),Z.updateMatrixWorld(!0)}function Ot(){if(A){for(let R in X){let $=I[R];$&&(X[R].position.copy($.position),X[R].quaternion.copy($.quaternion),X[R].scale.copy($.scale))}A.position.copy(Z.position),A.quaternion.copy(Z.quaternion),A.scale.copy(Z.scale),A.updateMatrixWorld(!0)}}function Kt(R,$){let at=1/0,rt=-1;for(let ut=0;ut<tt.length;ut++){if($&&tt[ut].reg.startsWith("hand"))continue;let vt=R[ut*3+1];vt<at&&(at=vt,rt=ut)}return{y:at,k:rt}}let Gt=(R,$)=>{R.quaternion.copy(S(R.parent).invert().multiply($)),R.updateMatrixWorld(!0)};function de(R,$,at){let[rt,ut,vt]=R.map(B=>I[B]),yt=S(vt),mt=T(rt),Et=T(ut),Vt=T(vt),Ct=mt.distanceTo(Et),Xt=Et.distanceTo(Vt),oe=Zt().subVectors($,mt),fe=oe.length();if(fe<1e-6)return;let It=oe.divideScalar(fe);fe=fi(fe,Math.abs(Ct-Xt)+.001,Ct+Xt-.001);let $t=at?at.clone():Zt().subVectors(Et,mt);$t.addScaledVector(It,-$t.dot(It)),$t.lengthSq()<1e-8&&$t.set(0,0,1),$t.normalize();let ce=(Ct*Ct+fe*fe-Xt*Xt)/(2*Ct*fe),Xe=Math.sqrt(Math.max(0,1-ce*ce)),Oe=Zt().copy(mt).addScaledVector(It,Ct*ce).addScaledVector($t,Ct*Xe);Gt(rt,ke().setFromUnitVectors(Zt().subVectors(Et,mt).normalize(),Zt().subVectors(Oe,mt).normalize()).multiply(S(rt)));let Fe=T(ut),v=T(vt),k=Zt().copy(mt).addScaledVector(It,fe);Gt(ut,ke().setFromUnitVectors(Zt().subVectors(v,Fe).normalize(),Zt().subVectors(k,Fe).normalize()).multiply(S(ut))),Gt(vt,yt)}let F={handL:["upperarm_l","lowerarm_l","hand_l"],handR:["upperarm_r","lowerarm_r","hand_r"],footL:["thigh_l","calf_l","foot_l"],footR:["thigh_r","calf_r","foot_r"]};function be(R,$,at){for(let rt=0;rt<2;rt++){let ut=j(),vt=Zt(ut[$*3],ut[$*3+1],ut[$*3+2]);if(vt.distanceTo(at)<.002)break;let yt=T(I[F[R][2]]);de(F[R],yt.add(at.clone().sub(vt)))}}function jt(){for(let R of["l","r"]){let $=I["ball_"+R],at=I["ball_leaf_"+R]||$.children[0];if(!at)continue;let rt=T($),ut=T(at),vt=ut.y-Math.max(0,rt.y-.02);if(ut.y<.005&&rt.y>.01){let yt=Zt().subVectors(ut,rt),mt=yt.length(),Et=Zt(yt.x,0,yt.z).normalize().multiplyScalar(mt);Et.y=-Math.min(rt.y-.005,mt*.9),Gt($,ke().setFromUnitVectors(yt.normalize(),Et.normalize()).multiply(S($)))}}}let ee=R=>new ve(R[0],R[1],R[2],R[3]),zt=new Map;function ue(R){if(zt.has(R))return zt.get(R);let $=e[R];if(!$)return null;let at={};for(let ut of Zl)at[ut]=ee($.q[ut]);let rt=Bt(at,$.h||{L:"open",R:"open"},$.c||0,!!$.a,$.k||[]);return rt.key=R,zt.set(R,rt),rt}function Bt(R,$,at,rt,ut){let vt={TW:R,hands:$,cam:at,armBal:rt,contacts:ut||[]};w(R,vt.hands),ft(Zt(0,1,0));let yt=j(),mt=Kt(yt,!vt.armBal);ft(Zt(0,1-mt.y,0)),yt=j(),vt.pelvisY=1-mt.y;let Et=["L","R"].filter(Ct=>vt.contacts.includes("hand"+Ct)||!rt&&$[Ct]==="floor");if(Et.length&&!rt){let Ct=["lumbar","chest","neck","head","uarmL","farmL","handL","uarmR","farmR","handR"],Xt=()=>{yt=j();let oe=!0;for(let fe of Et){let It="hand"+fe,$t=1/0,ce=-1;for(let Oe=0;Oe<tt.length;Oe++)tt[Oe].reg===It&&yt[Oe*3+1]<$t&&($t=yt[Oe*3+1],ce=Oe);if($t>.32)continue;be(It,ce,Zt(yt[ce*3],.003,yt[ce*3+2])),j()[ce*3+1]>.006&&(oe=!1)}return w(R,$),ft(Zt(0,vt.pelvisY,0)),oe};for(let oe=0;oe<20&&!Xt();oe++){let fe=Sr.clone().applyQuaternion(R.pelvis),It=ke().setFromAxisAngle(fe,3*hn);for(let ce of Ct)R[ce]=It.clone().multiply(R[ce]);w(R,$),ft(Zt(0,1,0)),yt=j();let $t=Kt(yt,!0);ft(Zt(0,1-$t.y,0)),vt.pelvisY=1-$t.y}yt=j()}for(let Ct of["footL","footR","handL","handR"]){if(!(vt.contacts.includes(Ct)||Ct.startsWith("hand")&&!rt&&$[Ct.slice(-1)]==="floor"))continue;let oe=1/0,fe=-1;for(let It=0;It<tt.length;It++)tt[It].reg===Ct&&yt[It*3+1]<oe&&(oe=yt[It*3+1],fe=It);if(fe>=0&&oe<.32&&Math.abs(oe)>.004){let It=Zt(yt[fe*3],.003,yt[fe*3+2]),$t=T(I[F[Ct][0]]),ce=T(I[F[Ct][2]]),Xe=Zt(yt[fe*3],yt[fe*3+1],yt[fe*3+2]),Fe=(I[F[Ct][1]].position.length()*0+T(I[F[Ct][1]]).distanceTo($t)+T(I[F[Ct][1]]).distanceTo(ce)+ce.distanceTo(Xe)*.9)*.985,v=Zt().subVectors(It,$t);if(v.length()>Fe&&$t.y<Fe){let k=Math.sqrt(Fe*Fe-$t.y*$t.y),B=Zt(v.x,0,v.z),q=B.length()||1;It.x=$t.x+B.x/q*k,It.z=$t.z+B.z/q*k}be(Ct,fe,It),yt=j(),window.__dbg&&console.log("IK",Ct,oe.toFixed(3),"S",$t.y.toFixed(3),"reach",Fe.toFixed(3),"t",It.x.toFixed(2),It.z.toFixed(2),"->",yt[fe*3+1].toFixed(3))}}let Vt={};for(let Ct=0;Ct<tt.length;Ct++){let Xt=yt[Ct*3+1];if(Xt<.03){let oe=tt[Ct].reg;(!Vt[oe]||Xt<yt[Vt[oe]*3+1])&&(Vt[oe]=Ct)}}return vt.touch=Vt,vt.P=yt,vt}function w(R,$){At(R,$),Z.updateMatrixWorld(!0)}let y=(R,$)=>Kl[$]?R[Kl[$]].clone().invert().multiply(R[$]):R[$].clone(),Q=R=>{let $=ke().set(R.x,0,0,R.w);return $.lengthSq()<1e-9?0:($.normalize(),2*Math.atan2($.x,$.w))};function lt(R,$){let at={};for(let rt of Zl){let ut=y(R.TW,rt),vt=y($.TW,rt);if(rt in of){let yt=of[rt],mt=Q(ut)*yt,Et=Q(vt)*yt;mt=fi(mt,-2*hn,170*hn),Et=fi(Et,-2*hn,170*hn);let Vt=ut.clone().multiply(ke().setFromAxisAngle(Sr,-mt*yt)),Ct=vt.clone().multiply(ke().setFromAxisAngle(Sr,-Et*yt));at[rt]={hinge:!0,g:yt,a:mt,b:Et,ra:Vt,rb:Ct}}else if(rt in uA){let yt=Pi.clone().applyQuaternion(ut),mt=Pi.clone().applyQuaternion(vt),Et=yt.angleTo(mt),Vt=null;Et>150*hn&&(Vt=Zt(0,0,1).add(yt).add(mt),Vt.lengthSq()<1e-4&&(Vt=Zt(0,0,1)),Vt.normalize()),at[rt]={ball:!0,la:ut,lb:vt,da:yt,db:mt,via:Vt}}else at[rt]={la:ut,lb:vt}}return at}function nt(R,$){if(!R.via)return R.la.clone().slerp(R.lb,$);let at=R.da.angleTo(R.via),rt=R.via.angleTo(R.db),ut=$*(at+rt),vt;ut<=at?vt=et(R.da,R.via,at?ut/at:1):vt=et(R.via,R.db,rt?(ut-at)/rt:1);let yt=R.la.clone().slerp(R.lb,$),mt=Pi.clone().applyQuaternion(yt);return ke().setFromUnitVectors(mt,vt).multiply(yt)}function et(R,$,at){let rt=ke().setFromUnitVectors(R,$);return R.clone().applyQuaternion(ke().slerp(rt,at))}function wt(R,$,at,rt,ut){let vt={},yt=ut.win||af;for(let Et in yt){let[Vt,Ct]=yt[Et];vt[Et]=ks((rt-Vt)/(Ct-Vt))}if(!ut.stagger)for(let Et in vt)vt[Et]=ks(rt);let mt={};if(ut.rootVia){let Et=vt.L;mt.pelvis=Et<.5?R.TW.pelvis.clone().slerp(ut.rootVia,Et*2):ut.rootVia.clone().slerp($.TW.pelvis,Et*2-1)}else mt.pelvis=R.TW.pelvis.clone().slerp($.TW.pelvis,vt.L);for(let Et of Zl){if(Et==="pelvis")continue;let Vt=at[Et],Ct=vt[fA(Et)],Xt;if(Vt.hinge){let oe=Vt.a+(Vt.b-Vt.a)*Ct+(ut.lift&&ut.lift[Et]?ut.lift[Et]*Math.sin(Math.PI*Ct):0);Xt=Vt.ra.clone().slerp(Vt.rb,Ct).multiply(ke().setFromAxisAngle(Sr,oe*Vt.g))}else Vt.ball?(Xt=nt(Vt,Ct),ut.lift&&ut.lift[Et]&&Xt.multiply(ke().setFromAxisAngle(Sr,-ut.lift[Et]*Math.sin(Math.PI*Ct)))):Xt=Vt.la.clone().slerp(Vt.lb,Ct);mt[Et]=mt[Kl[Et]].clone().multiply(Xt)}return{TW:mt,hands:St(R.hands,$.hands,rt)}}let St=(R,$,at)=>({L:at<.5?R.L:$.L,R:at<.5?R.R:$.R}),gt=null,kt=null;function pt(R,$,at){w(R.TW,R.hands),ft(Zt($,R.pelvisY,at));for(let rt of["handL","handR","footL","footR"]){let ut=R.touch[rt];ut!=null&&be(rt,ut,Zt(R.P[ut*3]+$,R.P[ut*3+1],R.P[ut*3+2]+at))}jt(),Ot()}function Ut(R,$,at,rt){let ut=lt(R,rt),yt=["footR","footL","shinR","shinL","pelvis","thighR","thighL","handR","handL","chest","head"].filter(B=>R.touch[B]!=null&&rt.touch[B]!=null),mt=null,Et=$,Vt=at,Ct=1/0;for(let B of yt){let q=R.touch[B],D=R.P[q*3]+$-rt.P[q*3],ot=R.P[q*3+2]+at-rt.P[q*3+2],_t=yt.indexOf(B)*.01;{let Mt=Zt($,0,at),Tt=Zt(D,0,ot);_t+=.5*Math.hypot(Mt.x-Tt.x,Mt.z-Tt.z)}for(let Mt of yt){if(Mt===B)continue;let Tt=R.touch[Mt];_t+=Math.hypot(R.P[Tt*3]+$-(rt.P[Tt*3]+D),R.P[Tt*3+2]+at-(rt.P[Tt*3+2]+ot))*(Mt.startsWith("hand")?1.5:1)}_t<Ct&&(Ct=_t,mt=B,Et=D,Vt=ot)}let Xt={},oe=(B,q,D,ot)=>Zt(B.P[q*3]+D,B.P[q*3+1],B.P[q*3+2]+ot);for(let B of["handL","handR","footL","footR"]){if(B===mt)continue;let q=R.touch[B],D=rt.touch[B];if(q==null&&D==null||B.startsWith("hand")&&!(R.armBal||rt.armBal)&&!(R.hands[B.slice(-1)]==="floor"&&q!=null||rt.hands[B.slice(-1)]==="floor"&&D!=null))continue;let ot=q??D,_t=oe(R,ot,$,at),Mt=oe(rt,ot,Et,Vt),Tt=Zt(Mt.x-_t.x,0,Mt.z-_t.z).length();Xt[B]={idx:ot,p0:_t,p1:Mt,a:q!=null,b:D!=null,h:Tt>.2?fi(Tt*.22,.05,.14):0}}let fe=Object.keys(Xt).filter(B=>Xt[B].a&&Xt[B].b);for(let B of["foot","hand"]){let q=fe.filter(D=>D.startsWith(B)&&Xt[D].h>0).sort((D,ot)=>Xt[ot].h-Xt[D].h);q.forEach((D,ot)=>{Xt[D].win=q.length>1?ot===0?[.04,.56]:[.44,.96]:B==="foot"?[.05,.8]:[.15,.95]})}let It={},$t=new Set;for(let B in Xt){let q=B.slice(-1);(B.startsWith("foot")?["foot","shin","thigh"]:["hand","farm","uarm"]).forEach(D=>$t.add(D+q))}let ce=Object.keys(Xt).some(B=>B.startsWith("hand")&&!Xt[B].a&&Xt[B].b),Xe=null;if(R.TW.pelvis.angleTo(rt.TW.pelvis)>150*hn){let B=1/0;for(let q of[1,-1]){let D=R.TW.pelvis.clone().multiply(ke().setFromAxisAngle(Yl,q*90*hn)),ot=D.angleTo(rt.TW.pelvis);ot<B&&(B=ot,Xe=D)}}let Oe={rootVia:Xe,stagger:!0,lift:It,win:ce?{L:[.12,.95],T:[0,.6],A:[0,.62],H:[.05,.7]}:af},Fe=!(R.armBal||rt.armBal),v=mt?R.touch[mt]:-1;function k(B){let{TW:q,hands:D}=wt(R,rt,ut,B,Oe);w(q,D),ft(Zt(0,1,0));let ot=j(),_t,Mt;if(mt)_t=R.P[v*3]+$-ot[v*3],Mt=R.P[v*3+2]+at-ot[v*3+2];else{let Ft=ks(B);_t=$+(Et-$)*Ft,Mt=at+(Vt-at)*Ft}let Tt;{let Ft=1/0;for(let xt=0;xt<tt.length;xt++){let ie=tt[xt].reg;$t.has(ie)||Fe&&ie.startsWith("hand")||(Ft=Math.min(Ft,ot[xt*3+1]))}Tt=1-Ft}ft(Zt(_t,Tt,Mt));let Qt=()=>{for(let Ft in Xt){let xt=Xt[Ft];ot=j();let ie=Zt(ot[xt.idx*3],ot[xt.idx*3+1],ot[xt.idx*3+2]),he,Ae;if(xt.a&&xt.b){let[Ke,_e]=xt.win||(Ft.startsWith("foot")?[.05,.8]:[.15,.95]),Ht=ks((B-Ke)/(_e-Ke));he=xt.p0.clone().lerp(xt.p1,Ht),he.y+=xt.h*Math.sin(Math.PI*Ht),Ae=1}else xt.a?(he=xt.p0.clone(),Ae=1-br((B-.5)/.35)):(he=xt.p1.clone(),Ae=br((B-.12)/.38));Ae>.001&&be(Ft,xt.idx,ie.lerp(he,Ae))}};Qt();{ot=j();let Ft=1/0;for(let xt=0;xt<tt.length;xt++)Fe&&tt[xt].reg.startsWith("hand")||(Ft=Math.min(Ft,ot[xt*3+1]));(Ft>.004||Ft<-.004)&&(w(q,D),ft(Zt(_t,Tt-Ft,Mt)),Qt())}ot=j();for(let Ft of["handL","handR","footL","footR"]){if(Ft===mt)continue;let xt=0,ie=-1;for(let he=0;he<tt.length;he++)tt[he].reg===Ft&&ot[he*3+1]<xt&&(xt=ot[he*3+1],ie=he);ie>=0&&xt<-.004&&be(Ft,ie,Zt(ot[ie*3],.002,ot[ie*3+2]))}return jt(),Ot(),{x:_t,z:Mt}}return{at:k,bx:Et,bz:Vt,pin:mt,held:fe,lift:It,tw:B=>wt(R,rt,ut,B,Oe)}}let qt={yaw:16,pitch:7,userMoved:!1,c:Zt(0,.9,0),s:1,camYaw:0},Jt=()=>{let R=j(),$=new an;for(let at=0;at<tt.length;at++)$.expandByPoint(Zt(R[at*3],R[at*3+1],R[at*3+2]));return $};function Nt(){let R=Jt(),$=R.getCenter(Zt()),at=R.getSize(Zt());return $.y=Math.max($.y,.45),{c:$,s:Math.max(at.x,at.y*1.15,at.z,.9)}}let re=null;function ne(R,$,at){let rt=($+qt.yaw)*hn,ut=qt.pitch*hn,vt=x.aspect||1,yt=x.fov*hn,mt=R.s*.62/Math.tan(yt/2)/Math.min(1,vt)+.6,Et=Zt(Math.sin(rt)*Math.cos(ut),Math.sin(ut),Math.cos(rt)*Math.cos(ut)).multiplyScalar(mt).add(R.c);if(qt.userMoved&&m){m.target.lerp(R.c,at?1:.08);return}at||!re?re={pos:Et,c:R.c.clone()}:(re.pos.lerp(Et,.08),re.c.lerp(R.c,.08)),x.position.copy(re.pos),x.lookAt(re.c),m&&m.target.copy(re.c)}function Me(R){let $=cf[R]||cf.light,at=wr[R]||wr.light;o.background=new Yt($.bg),h.color.set($.floor),f.map=_($),f.needsUpdate=!0;for(let rt of[].concat(O.material))rt.userData.top.value.set(at.top),rt.userData.low.value.set(at.low)}Me("light");function W(R,$){r.setSize(R,$,!1),x.aspect=R/$,x.updateProjectionMatrix()}let bt=null;function st(){m&&m.update(),r.render(o,x)}function ht(R){if(kt){let $=Math.min(1,(R-kt.t0)/kt.ms),{x:at,z:rt}=kt.tr.at($);kt.x=at,kt.z=rt,bt=Nt(),ne(bt,kt.A.cam+(kt.B.cam-kt.A.cam)*ks($),!1),$>=1&&(gt={st:kt.B,x:kt.tr.bx,z:kt.tr.bz},pt(gt.st,gt.x,gt.z),kt=null)}else bt&&ne(bt,gt?gt.st.cam:0,!1);st(),requestAnimationFrame(ht)}requestAnimationFrame(ht);function Pt(R,$){let at=ue(R);if(!at)return!1;if(kt){let ut=Math.min(1,(performance.now()-kt.t0)/kt.ms),{TW:vt,hands:yt}=kt.tr.tw(ut),mt=Bt(vt,yt,kt.A.cam+(kt.B.cam-kt.A.cam)*ks(ut),kt.A.armBal||kt.B.armBal),Et=kt.tr.at(ut),Vt=T(I.pelvis);gt={st:mt,x:Vt.x,z:Vt.z},kt=null}if(!gt||!$){let ut=gt?gt.x:0,vt=gt?gt.z:0;if(pt(at,ut,vt),gt)gt={st:at,x:ut,z:vt};else{let yt=Lt();pt(at,-yt.x,-yt.z),gt={st:at,x:-yt.x,z:-yt.z}}return bt=Nt(),ne(bt,at.cam,!0),!0}let rt=Ut(gt.st,gt.x,gt.z,at);return kt={A:gt.st,B:at,tr:rt,t0:performance.now(),ms:$},!0}function Lt(){let $=Jt().getCenter(Zt());return{x:$.x,z:$.z}}return{go:Pt,setTheme:Me,resize:W,render:st,cam:x,controls:m,view:qt,renderer:r,scene:o,stateOf:ue,makeTransition:Ut,placeStatic:pt,frameTarget:Nt,placeCam:ne,sampleWorld:j,samp:tt,B:I,mat:p,handRest:K,CURL:Jl,applyTW:At,ik2:de,reachVertex:be,CHAIN:F,wp:T,wq:S,restW:J,lowest:Kt,get cur(){return gt},set cur(R){gt=R},pose:w,setPelvisPos:ft,toes:jt,syncHair:Ot}}var $l=(i=0,t=0,e=0)=>new N(i,t,e),dA=()=>new ve,pA=Math.PI/180,Ii=$l(1,0,0),Tr=$l(0,1,0),Rr=$l(0,0,1),Ze=(i,t)=>dA().setFromAxisAngle(i,t*pA),Qo=(i,t,e)=>Ze(Ii,i).multiply(Ze(Rr,-t)).multiply(Ze(Tr,e));function Er(i){let t=i.root||[0,0,0],e=Ze(Tr,t[2]||0).multiply(Ze(Rr,-(t[1]||0))).multiply(Ze(Ii,t[0]||0)),n=i.sp||[0,0,0],s=i.nk||[0,0,0],r={};r.pelvis=e.clone(),r.lumbar=r.pelvis.clone().multiply(Qo(n[0]*.45,n[1]*.45,n[2]*.35)),r.chest=r.lumbar.clone().multiply(Qo(n[0]*.55,n[1]*.55,n[2]*.65)),r.neck=r.chest.clone().multiply(Qo(s[0]*.5,s[1]*.5,s[2]*.5)),r.head=r.neck.clone().multiply(Qo(s[0]*.5,s[1]*.5,s[2]*.5));for(let o of["L","R"]){let a=o==="L"?1:-1,c=i["h"+o]||[0,0,0];r["thigh"+o]=e.clone().multiply(Ze(Ii,-c[0])).multiply(Ze(Rr,a*(c[1]||0))).multiply(Ze(Tr,a*(c[2]||0))),r["shin"+o]=r["thigh"+o].clone().multiply(Ze(Ii,i["k"+o]||0)),r["foot"+o]=r["shin"+o].clone().multiply(Ze(Ii,-(i["a"+o]||0)));let l=i["s"+o]||[0,0,0];r["uarm"+o]=r.chest.clone().multiply(Ze(Ii,-l[0])).multiply(Ze(Rr,a*(l[1]||0))).multiply(Ze(Tr,a*(l[2]||0))),r["farm"+o]=r["uarm"+o].clone().multiply(Ze(Ii,-(i["e"+o]||0)));let h=i["w"+o]||[0,0,0];r["hand"+o]=r["farm"+o].clone().multiply(Ze(Tr,a*(h[0]||0))).multiply(Ze(Rr,-a*(h[1]||0))).multiply(Ze(Ii,h[2]||0))}return r}var mA=["root","sp","nk","hL","hR","sL","sR","wL","wR"],gA=["kL","kR","aL","aR","eL","eR"];function uf(i,t,e){let n={};for(let s of mA){let r=i[s]||[0,0,0],o=t[s]||[0,0,0];n[s]=[0,1,2].map(a=>(r[a]||0)+((o[a]||0)-(r[a]||0))*e)}for(let s of gA)n[s]=(i[s]||0)+((t[s]||0)-(i[s]||0))*e;return n}function Dt(i){let t={root:[i.P||0,0,i.yaw||0],sp:[(i.C??i.P??0)-(i.P||0),0,0],nk:[(i.H??i.C??0)-(i.C??i.P??0),0,0]},e=i.C??i.P??0;for(let n of["L","R"]){let s=i["t"+n]??0,r=i["s"+n]??s,o=i["f"+n]??0,a=i["u"+n]??0,c=i["a"+n]??a;t["h"+n]=[(i.P||0)-s,i.hipAbd??3,0],t["k"+n]=r-s,t["a"+n]=r-o,t["s"+n]=[e-a,i.shAbd??8,i.shRot??0],t["e"+n]=a-c}for(let n of["hands","pins","pray","elbowUp","fit","fitT"])i[n]!==void 0&&(t[n]=i[n]);return t.w=i,t}var Tn={};Tn.pranam={root:[0,0,0],sp:[0,0,0],nk:[0,0,0],hL:[0,2,0],hR:[0,2,0],aL:0,aR:0,sL:[38,28,62],sR:[38,28,62],eL:118,eR:118,hands:{L:"namaste",R:"namaste"},pray:!0};Tn.hastaut={root:[-6,0,0],sp:[-22,0,0],nk:[-14,0,0],hL:[-4,2,0],hR:[-4,2,0],kL:4,kR:4,aL:4,aR:4,sL:[172,6,0],sR:[172,6,0],eL:4,eR:4,hands:{L:"open",R:"open"}};Tn.padah=Dt({P:104,C:166,H:182,tL:-16,sL:10,tR:-16,sR:10,uL:-12,aL:-12,uR:-12,aR:-12,hands:{L:"floor",R:"floor"},pins:["handL","handR"],fit:"C"});Tn.ashwaR=Dt({P:30,C:34,H:-6,tL:-104,sL:-6,fL:0,tR:38,sR:90,fR:180,uL:0,aL:0,uR:0,aR:0,hands:{L:"floor",R:"floor"},pins:["handL","handR","footL"],fit:"P"});Tn.edog=Dt({P:132,C:128,H:140,tL:44,tR:44,fL:12,fR:12,uL:-52,aL:-52,uR:-52,aR:-52,hands:{L:"floor",R:"floor"},pins:["handL","handR","footL","footR"],fit:"P"});Tn.a8=Dt({P:122,C:126,H:96,tL:32,sL:90,fL:90,tR:32,sR:90,fR:90,uL:150,aL:4,uR:150,aR:4,shAbd:24,hands:{L:"floor",R:"floor"},pins:["handL","handR"],elbowUp:1.5,fit:"P",fitT:"chest"});Tn.sarp=Dt({P:86,C:36,H:8,tL:90,sL:90,fL:178,tR:90,sR:90,fR:178,uL:22,aL:-8,uR:22,aR:-8,shAbd:10,hands:{L:"floor",R:"floor"},pins:["handL","handR"],elbowUp:.6});var Lr=i=>{let t={...i};for(let[e,n]of[["tL","tR"],["sL","sR"],["fL","fR"],["uL","uR"],["aL","aR"]])t[e]=i[n],t[n]=i[e];return t};Tn.ashwaL=Dt(Lr(Tn.ashwaR.w));var Ve={};Ve.flatHalf=Dt({P:62,C:60,H:58,tL:0,tR:0,uL:-118,aL:-118,uR:-118,aR:-118,hands:{L:"open",R:"open"}});Ve.squatFold=Dt({P:88,C:140,H:150,tL:-48,sL:22,tR:-48,sR:22,uL:-14,aL:-14,uR:-14,aR:-14,hands:{L:"floor",R:"floor"},pins:["handL","handR"],fit:"C"});Ve.highLungeR=Dt({P:50,C:52,H:30,tL:-96,sL:-4,fL:0,tR:58,sR:58,fR:60,uL:-2,aL:-2,uR:-2,aR:-2,hands:{L:"floor",R:"floor"},pins:["handL","handR"],fit:"P"});Ve.plank=Dt({P:76,C:76,H:80,tL:76,tR:76,sL:76,sR:76,fL:68,fR:68,uL:0,aL:0,uR:0,aR:0,line:!0,hands:{L:"floor",R:"floor"},pins:["handL","handR","footL","footR"],fit:"P"});Ve.kneesDown=Dt({P:104,C:110,H:118,tL:4,sL:90,fL:90,tR:4,sR:90,fR:90,uL:-24,aL:-24,uR:-24,aR:-24,hands:{L:"floor",R:"floor"},pins:["handL","handR"],fit:"C"});Ve.kneeToChestR=Dt({P:112,C:112,H:116,tL:50,sL:50,fL:70,tR:-96,sR:18,fR:40,uL:-16,aL:-16,uR:-16,aR:-16,hands:{L:"floor",R:"floor"},pins:["handL","handR","footL"],fit:"C"});Ve.stepBackL=Dt({P:84,C:84,H:80,tL:-14,sL:78,fL:110,tR:62,sR:62,fR:64,uL:0,aL:0,uR:0,aR:0,hands:{L:"floor",R:"floor"},pins:["handL","handR","footR"],fit:"P"});Ve.stepFwdL=Dt({P:74,C:112,H:124,tL:-44,sL:42,fL:62,tR:-72,sR:-4,fR:0,uL:-10,aL:-10,uR:-10,aR:-10,hands:{L:"floor",R:"floor"},pins:["handL","handR","footR"],fit:"C"});Ve.highLungeL=Dt(Lr(Ve.highLungeR.w));Ve.kneeToChestL=Dt(Lr(Ve.kneeToChestR.w));Ve.stepBackR=Dt(Lr(Ve.stepBackL.w));Ve.stepFwdR=Dt(Lr(Ve.stepFwdL.w));for(let i of["stepBackR","stepFwdR","highLungeL","kneeToChestL"])Ve[i].pins=Ve[i].pins.map(t=>t.endsWith("L")?t.slice(0,-1)+"R":t.endsWith("R")?t.slice(0,-1)+"L":t);Tn.ashwaL.pins=Tn.ashwaL.pins.map(i=>i==="footL"?"footR":i);Ve.riseHalf=Ve.flatHalf;var Rn=Tn,jl=Ve,Ql={"pranam>hastaut":[],"hastaut>padah":["flatHalf"],"padah>ashwaR":["squatFold","highLungeR"],"padah>ashwaL":["squatFold","highLungeL"],"ashwaR>edog":["highLungeR","stepBackL","plank"],"ashwaL>edog":["highLungeL","stepBackR","plank"],"edog>a8":["kneesDown"],"a8>sarp":[],"sarp>edog":[],"edog>ashwaL":["kneeToChestR","highLungeL"],"edog>ashwaR":["kneeToChestL","highLungeR"],"ashwaL>padah":["highLungeL","stepFwdL","squatFold"],"ashwaR>padah":["highLungeR","stepFwdR","squatFold"],"padah>hastaut":["squatFold","riseHalf"],"hastaut>pranam":[],"ardhachR>plank":["ashwaR","highLungeR","stepBackL"],"ardhachL>plank":["ashwaL","highLungeL","stepBackR"],"ardhachR>padah":["ashwaR","highLungeR","stepFwdR","squatFold"],"ardhachL>padah":["ashwaL","highLungeL","stepFwdL","squatFold"],"ardhachR>edog":["ashwaR","highLungeR","stepBackL","plank"],"ardhachL>edog":["ashwaL","highLungeL","stepBackR","plank"]};var Le=(i=0,t=0,e=0)=>new N(i,t,e),Cr=()=>new ve,ff=(i,t)=>{let e=Le().crossVectors(t,i);return Cr().setFromRotationMatrix(new se().makeBasis(t,i,e))};function df(i){let{B:t,wp:e,wq:n,samp:s,sampleWorld:r,setPelvisPos:o,ik2:a,CHAIN:c,syncHair:l,toes:h}=i,u=b=>ff(i.handRest[b].d,i.handRest[b].n);function f(b,G,K){return ff(G,K).multiply(u(b).invert())}function p(b){let G=Er(b),K=G.pelvis,Y=Cr().setFromAxisAngle(Le(0,1,0),((b.root||[])[2]||0)*Math.PI/180),O=Le(0,0,1).applyQuaternion(Y);for(let tt of["L","R"]){let H=(b.hands||{})[tt],j=null;if(H==="floor"&&(j=f(tt,O.clone(),Le(0,-1,0))),H==="namaste"){let dt=Le(0,1,0).applyQuaternion(G.chest),ct=Le(tt==="L"?-1:1,0,0).applyQuaternion(G.chest);j=f(tt,dt,ct)}if(j){let dt=G["farm"+tt].clone().invert().multiply(j),ct=Cr().set(0,dt.y,0,dt.w);if(ct.lengthSq()>1e-9){ct.normalize();let At=Cr().slerp(ct,.55);G["farm"+tt].multiply(At)}G["hand"+tt]=j}}return G}let _=(b,G)=>{let K=1/0,Y=-1;for(let O=0;O<s.length;O++)s[O].reg===G&&b[O*3+1]<K&&(K=b[O*3+1],Y=O);return[K,Y]};function x(b,G,K,Y){for(let O=0;O<3;O++){let tt=r(),H=Le(tt[G*3],tt[G*3+1],tt[G*3+2]);if(H.distanceTo(K)<.002)break;let j=e(t[c[b][2]]),dt=n(t[c[b][2]]);a(c[b],j.add(K.clone().sub(H)),Y)}}function m(b,G=0,K=0,Y={}){let O=p(b);i.pose(O,b.hands||{}),o(Le(0,1,0));let tt=r(),H=1/0;for(let ft=0;ft<s.length;ft++){let Ot=s[ft].reg;!b.armBal&&/^(hand|farm)/.test(Ot)&&(b.pins||[]).some(Kt=>Kt.startsWith("hand"))||b.fitT&&Y.fitting&&Ot===b.fitT||Ot.startsWith("hand")&&!b.armBal||(H=Math.min(H,tt[ft*3+1]))}let j=Y.y!=null?Y.y:b.seat?b.seat+.1:1-H-(Y.fitting?0:b.drop||0);o(Le(G,j,K));let dt=Le(0,0,1).applyQuaternion(Cr().setFromAxisAngle(Le(0,1,0),((b.root||[])[2]||0)*Math.PI/180)),ct=Y.pins||b.pins||[];tt=r();let At={};for(let ft of ct){let[Ot,Kt]=_(tt,ft);if(Kt<0)continue;let Gt=Y.targets&&Y.targets[ft]?Y.targets[ft].clone():Le(tt[Kt*3],.003,tt[Kt*3+2]);x(ft,Kt,Gt,d(ft)||(ft.startsWith("hand")?dt.clone().negate().add(Le(0,b.elbowUp||0,0)):dt.clone())),At[ft]={k:Kt,p:Gt}}if(b.pray){let ft=e(t.spine_03),Ot=Le(0,0,1).applyQuaternion(n(t.spine_03)),Kt=Le(0,1,0).applyQuaternion(n(t.spine_03)),Gt=ft.clone().addScaledVector(Ot,.2).addScaledVector(Kt,.02);for(let de of["L","R"]){let F=Le(de==="L"?1:-1,0,0).applyQuaternion(n(t.spine_03)),be=t["hand_"+de.toLowerCase()],jt=t["middle_01_"+de.toLowerCase()],ee=e(be).sub(e(jt).lerp(e(be),.5));a(c["hand"+de],Gt.clone().addScaledVector(F,.018).add(ee),F.clone().add(Le(0,-.7,0)).add(Ot.clone().multiplyScalar(-.3)))}}return b.hands&&b.hands.L==="lock"&&b.hands.R==="lock"&&E(),h(),l(),{y:j,pins:At}}function d(b){let[G,K,Y]=c[b].map(H=>e(t[H])),O=G.clone().add(Y).multiplyScalar(.5),tt=K.sub(O);return tt.length()>.03?tt.normalize():null}function E(){let b=e(t.hand_l),G=e(t.hand_r);if(b.distanceTo(G)>.45)return;let Y=b.clone().add(G).multiplyScalar(.5),O=b.clone().sub(G).normalize();for(let tt=0;tt<2;tt++)for(let H of["L","R"]){let j=H==="L"?t.hand_l:t.hand_r,dt=Y.clone().addScaledVector(O,H==="L"?.035:-.035);a(c["hand"+H],dt,e(H==="L"?t.lowerarm_l:t.lowerarm_r).sub(e(H==="L"?t.upperarm_l:t.upperarm_r)))}}function L(b){if(!b.fit||!b.w)return b;let G=b.fit,K=null,Y=b.w;for(let tt=(Y[G]||0)-40;tt<=(Y[G]||0)+40;tt+=2){let H={...Y,[G]:tt};if(G==="P"&&Y.C!=null&&(H.C=Y.C+(tt-Y.P)),G==="P"&&Y.H!=null&&(H.H=Y.H+(tt-Y.P)),G==="C"&&Y.H!=null&&(H.H=Y.H+(tt-Y.C)),G==="C"||G==="P")for(let ft of["L","R"])Y["u"+ft]!=null&&Math.abs(Y["u"+ft]-((Y.C??Y.P)-180))<8&&(H["u"+ft]=Y["u"+ft]+(tt-Y[G]),H["a"+ft]=(Y["a"+ft]??Y["u"+ft])+(tt-Y[G]));if(Y.line){let ft=H.P||0;for(let Ot of["L","R"])H["t"+Ot]=ft,H["s"+Ot]=ft,H["f"+Ot]=ft-8}let j=Dt(H);m(j,0,0,{pins:[],fitting:!0});let dt=r(),ct=b.fitT?_(dt,b.fitT)[0]-_(dt,"shinL")[0]:Math.max(...["handL","handR"].map(ft=>_(dt,ft)[0])),At=Math.abs(ct-(b.fitT?.004:.006))+Math.abs(tt-(Y[G]||0))*8e-4;(!K||At<K.err)&&(K={err:At,v:tt,w:H})}let O=Dt(K.w);return O.fitted={key:G,v:K.v,err:+K.err.toFixed(3)},O}let M=["root","sp","nk","hL","hR","sL","sR","wL","wR"],Z=["kL","kR","aL","aR","eL","eR"],I=b=>{let G=[];for(let K of M){let Y=b[K]||[0,0,0];G.push(Y[0]||0,Y[1]||0,Y[2]||0)}for(let K of Z)G.push(b[K]||0);return G},U=(b,G)=>{let K={...G},Y=0;for(let O of M)K[O]=[b[Y],b[Y+1],b[Y+2]],Y+=3;for(let O of Z)K[O]=b[Y++];return K},X=new Map,A=b=>{if(!X.has(b)){let G=Rn[b]||jl[b];X.set(b,L(G))}return X.get(b)},g=["footL","footR","handL","handR","shinL","shinR","pelvis","thighL","thighR","chest","head"],S=["pelvis","thighL","thighR","shinL","shinR","chest","head"];function T(b){let G=typeof b=="object"?b.jp:A(b);m(G,0,0);let K=r(),Y={};for(let tt of g){let[H,j]=_(K,tt);(H<.03||(G.pins||[]).includes(tt))&&(Y[tt]=j)}let O=e(t.pelvis);return{n:b,jp:G,c:Y,P:K,pel:O}}function P(b,{hold:G=.5,seg:K=.95,poseSeg:Y=1.15,x0:O=0,z0:tt=0}={}){let H=[b[0]];for(let ct=1;ct<b.length;ct++){let At=Ot=>typeof Ot=="object"?Ot.name:Ot,ft=Ql[At(b[ct-1])+">"+At(b[ct])]||[];H.push(...ft,b[ct])}let j=[],dt=0;H.forEach((ct,At)=>{let ft=Rn[ct]&&b.includes(ct);At>0&&(dt+=ft?Y:K),j.push({n:ct,t:dt,info:ct.info||T(ct)}),ft&&(dt+=G,j.push({n:ct,t:dt,info:j[j.length-1].info,holdDup:!0}))}),j[0].x=O,j[0].z=tt;for(let ct=1;ct<j.length;ct++){let At=j[ct-1],ft=j[ct];if(ft.holdDup){ft.x=At.x,ft.z=At.z,ft.anchor=At.anchor;continue}let Ot=g.filter(Gt=>At.info.c[Gt]!=null&&ft.info.c[Gt]!=null),Kt=null;for(let Gt of Ot){let de=At.info.c[Gt],F=At.info.P[de*3]+At.x,be=At.info.P[de*3+2]+At.z,jt=F-ft.info.P[de*3],ee=be-ft.info.P[de*3+2],zt=0;for(let ue of Ot){if(ue===Gt)continue;let Bt=At.info.c[ue];zt+=Math.hypot(At.info.P[Bt*3]+At.x-(ft.info.P[Bt*3]+jt),At.info.P[Bt*3+2]+At.z-(ft.info.P[Bt*3+2]+ee))}(!Kt||zt<Kt.cost)&&(Kt={cost:zt,r:Gt,k:de,x:jt,z:ee})}Kt?(ft.x=Kt.x,ft.z=Kt.z,ft.anchor=Kt):(ft.x=At.x,ft.z=At.z)}return{keys:j,T:j[j.length-1].t}}let C=b=>b&&typeof b=="object"?b:i.CURL[b||"open"]||i.CURL.open;function z(b={},G={},K){let Y={};for(let O of["L","R"]){let tt=b[O]||"open",H=G[O]||"open";if(tt==="floor"||H==="floor"||tt==="namaste"||H==="namaste"){Y[O]=K<.5?tt:H;continue}let j=C(tt),dt=C(H);Y[O]={c:j.c.map((ct,At)=>ct+(dt.c[At]-ct)*K),t:j.t.map((ct,At)=>ct+((dt.t[At]||0)-ct)*K)}}return Y}let V=(b,G,K,Y,O)=>{let tt=O*O,H=tt*O;return .5*(2*G+(-b+K)*O+(2*b-5*G+4*K-Y)*tt+(-b+3*G-3*K+Y)*H)};function J(b,G){let K=b.keys,Y=0;for(;Y<K.length-2&&K[Y+1].t<=G;)Y++;let O=K[Y],tt=K[Y+1],H=tt.t>O.t?(G-O.t)/(tt.t-O.t):1,j=H*H*(3-2*H)*.35+H*.65,dt=I(K[Math.max(0,Y-1)].info.jp),ct=I(O.info.jp),At=I(tt.info.jp),ft=I(K[Math.min(K.length-1,Y+2)].info.jp),Ot=ct.map((nt,et)=>ct[et]===At[et]?ct[et]:V(K[Y-1]&&!O.holdDup?dt[et]:ct[et],ct[et],At[et],K[Y+2]&&!tt.holdDup?ft[et]:At[et],j)),Kt=j<.5?O.info.jp:tt.info.jp,Gt=U(Ot,{hands:z(O.info.jp.hands,tt.info.jp.hands,j),wL:Kt.wL,wR:Kt.wR,pray:O.info.jp.pray&&tt.info.jp.pray,elbowUp:(O.info.jp.elbowUp||0)*(1-j)+(tt.info.jp.elbowUp||0)*j}),de=p(Gt);i.pose(de,Gt.hands||{}),o(Le(0,1,0));let F=r(),be=nt=>{let et=1/0;for(let wt=0;wt<s.length;wt++){let St=s[wt].reg;(nt?!nt.includes(St):/^(hand|foot)/.test(St))||(et=Math.min(et,F[wt*3+1]))}return et},jt=S.filter(nt=>O.info.c[nt]!=null),ee=S.filter(nt=>tt.info.c[nt]!=null),zt=(()=>{let nt=1/0;for(let et=0;et<s.length;et++)s[et].reg.startsWith("hand")||(nt=Math.min(nt,F[et*3+1]));return nt})(),ue,Bt=(nt,et)=>Math.min(...et.map(wt=>F[nt.c[wt]*3+1]));if(jt.length||ee.length){let nt=jt.length?Bt(O.info,jt):be(null),et=ee.length?Bt(tt.info,ee):be(null);ue=nt+(et-nt)*j,ue=Math.min(ue,be(["pelvis","chest","head","uarmL","uarmR"]))}else ue=zt;let w,y,Q=tt.anchor;Q?(w=O.info.P[Q.k*3]+O.x-F[Q.k*3],y=O.info.P[Q.k*3+2]+O.z-F[Q.k*3+2]):(w=O.x+(tt.x-O.x)*j,y=O.z+(tt.z-O.z)*j);{let nt=1-ue-((O.info.jp.drop||0)*(1-j)+(tt.info.jp.drop||0)*j),et=O.info.jp.seat?O.info.jp.seat+.1:nt,wt=tt.info.jp.seat?tt.info.jp.seat+.1:nt;o(Le(w,O.info.jp.seat||tt.info.jp.seat?et+(wt-et)*j:nt,y))}let lt=Le(0,0,1);for(let nt of["handL","handR","footL","footR"]){let et=O.info.c[nt],wt=tt.info.c[nt];if(et==null||wt==null)continue;let St=Le(O.info.P[et*3]+O.x,.003,O.info.P[et*3+2]+O.z),gt=Le(tt.info.P[wt*3]+tt.x,.003,tt.info.P[wt*3+2]+tt.z);if(St.distanceTo(gt)>.08&&nt.startsWith("foot"))continue;let kt=d(nt)||(nt.startsWith("hand")?lt.clone().negate().add(Le(0,Gt.elbowUp||0,0)):lt.clone());x(nt,et,St.lerp(gt,j),kt)}F=r();for(let nt of["handL","handR","footL","footR"]){let[et,wt]=_(F,nt);wt>=0&&et<-.003&&x(nt,wt,Le(F[wt*3],.003,F[wt*3+2]),nt.startsWith("hand")?lt.clone().negate():lt.clone())}return Gt.pray&&m(Gt,w,y,{y:1-ue,pins:[]}),h(),l(),{x:w,z:y,i:Y}}return{build:p,show:m,fit:L,timeline:P,frameAt:J,keyInfo:T,POSES:Rn,PHASES:jl,ROUTES:Ql,mixJP:uf}}var Ie={L:"floor",R:"floor"},ge={L:"open",R:"open"},qn={L:"namaste",R:"namaste"},th={L:"lock",R:"lock"};var Wt=(i,t={})=>{let e=Dt(i);for(let n in t)e[n]=t[n];return e},pf={"A-0001":Wt({},{root:[0,-38,0],sp:[0,-32,0],nk:[0,0,30],hR:[14,84,40],kR:95,aR:0,hL:[0,6,-10],kL:0,sR:[0,40,0],eR:70,sL:[0,178,0],eL:0,hands:ge,pins:["footL","footR"]}),"A-0004":Wt({P:22,C:30,H:20,tL:-128,sL:40,fL:0,tR:-128,sR:40,fR:0},{hL:[150,30,30],hR:[150,30,30],sL:[38,28,62],sR:[38,28,62],eL:118,eR:118,hands:qn,pray:!0,pins:["footL","footR"]}),"A-0005":Wt({},{hL:[62,52,50],hR:[62,52,50],kL:96,kR:96,aL:-20,aR:-20,sL:[0,90,-80],sR:[0,90,-80],eL:90,eR:90,hands:ge,pins:["footL","footR"]}),"A-0009":Dt({P:90,C:84,H:70,tL:0,sL:90,fL:178,tR:112,sR:112,fR:140,uL:0,aL:0,uR:0,aR:0,hands:Ie,pins:["handL","handR"],fit:"C"}),"A-0013":Wt({},{root:[0,-40,0],sp:[0,-44,0],nk:[0,0,40],hR:[6,80,40],hL:[0,-2,-10],kR:0,kL:0,sR:[0,92,0],sL:[0,92,0],eR:0,eL:0,hands:ge,pins:["footL","footR"]}),"A-0014":Wt({},{hR:[8,22,60],kR:18,aR:-30,sL:[38,28,62],sR:[38,28,62],eL:118,eR:118,hands:qn,pray:!0,pins:["footL"]}),"A-0015":Dt({P:150,C:170,H:176,tL:-2,sL:-2,fL:0,tR:186,sR:186,fR:200,uL:-10,aL:-10,uR:-10,aR:-10,hands:Ie,pins:["handL","handR","footL"],fit:"P"}),"A-0017":Dt({P:90,C:90,H:84,tL:0,sL:0,fL:0,tR:90,sR:90,fR:120,uL:-90,aL:-90,uR:-90,aR:-90,hands:ge,pins:["footL"]}),"A-0018":Wt({},{hR:[172,10,10],kR:0,aR:20,sR:[176,6,0],eR:20,sL:[0,10,0],hands:ge,pins:["footL"]}),"A-0006":Wt({},{hR:[6,18,60],kR:150,aR:-30,hL:[88,6,0],kL:92,aL:0,sL:[84,30,0],sR:[90,30,0],eL:104,eR:104,hands:qn,pins:["footL"]}),"A-0011":Dt({P:60,C:96,H:110,tL:-60,sL:4,fL:0,tR:36,sR:36,fR:0,uL:-60,aL:-60,uR:-60,aR:-60,hands:qn,pray:!0,pins:["footL","footR"]}),"A-0030":Dt({P:72,C:110,H:104,tL:-104,sL:-8,fL:0,tR:52,sR:52,fR:66,uL:110,aL:110,uR:-14,aR:-14,hands:{L:"open",R:"floor"},pins:["handR","footL","footR"]}),"A-0032":Wt({P:44,C:74,H:86,tL:-90,sL:-90,fL:-150,tR:-90,sR:-90,fR:-150,uL:-112,aL:-112,uR:-112,aR:-112},{hR:[130,56,64],kR:150,aR:-20,hands:ge}),"A-0048":Wt({P:48,C:80,H:96,tL:-90,sL:-90,fL:-150,tR:-90,sR:-90,fR:-150,uL:-60,aL:-40,uR:-60,aR:-40},{seat:.015,hL:[132,46,46],hR:[132,46,46],kL:70,kR:70,aL:-10,aR:-10,hands:ge}),"A-0053":Wt({},{hL:[0,88,0],hR:[0,88,0],aL:-30,aR:-30,sL:[38,28,62],sR:[38,28,62],eL:118,eR:118,hands:qn,pray:!0}),"A-0054":Wt({P:-34,C:-24,H:-14},{hL:[118,34,0],hR:[118,34,0],aL:-20,aR:-20,sL:[104,30,0],sR:[104,30,0],eL:0,eR:0,hands:ge}),"A-0059":Wt({P:6},{hL:[86,34,66],kL:150,aL:-20,hR:[112,36,72],kR:118,aR:-10,sL:[62,34,0],sR:[56,14,0],eL:112,eR:104,hands:th}),"A-0060":Wt({P:4,tL:-90,sL:-90,fL:-150},{hR:[118,44,70],kR:96,aR:-10,sR:[40,40,0],eR:60,sL:[10,12,0],hands:ge}),"A-0062":Dt({P:110,C:160,H:176,tL:-10,sL:-8,tR:-10,sR:-8,uL:4,aL:4,uR:4,aR:4,hands:ge,pins:["footL","footR"]}),"A-0075":Wt({P:-26,C:-14,H:-4},{hL:[138,34,60],hR:[138,34,60],kL:158,kR:158,aL:-26,aR:-26,sL:[96,18,0],sR:[96,18,0],eL:136,eR:136,hands:ge}),"A-0081":Dt({P:-16,C:-116,H:-168,tL:18,sL:6,fL:0,tR:18,sR:6,fR:0,uL:6,aL:6,uR:6,aR:6,hands:ge,pins:["footL","footR"]}),"A-0087":Dt({P:4,C:-22,H:-34,tL:-84,sL:-6,fL:0,tR:42,sR:42,fR:62,uL:0,aL:0,uR:166,aR:166,hands:ge,pins:["footL","footR"]}),"A-0091":Dt({P:88,C:44,H:20,tL:118,sL:202,fL:250,tR:118,sR:202,fR:250,uL:128,aL:128,uR:128,aR:128,shAbd:10,hands:ge}),"A-0093":Wt({},{root:[0,88,0],sL:[170,6,0],eL:130,sR:[0,8,0],hands:ge}),"A-0099":Dt({P:-24,C:-42,H:-64,tL:-90,sL:-90,fL:-150,tR:-90,sR:-90,fR:-150,uL:30,aL:30,uR:30,aR:30,shAbd:14,hands:Ie,pins:["handL","handR"]}),"A-0102":Wt({P:38,C:64,H:70,tL:-90,sL:-90,fL:-150,tR:-90,sR:-90,fR:-150},{sp:[26,0,-40],sL:[104,10,0],sR:[170,10,0],eL:0,eR:0,hands:ge}),"A-0105":Wt({},{hL:[84,38,74],hR:[84,34,78],kL:104,kR:104,aL:-10,aR:-10,sL:[38,28,62],sR:[38,28,62],eL:118,eR:118,hands:qn,pray:!0}),"A-0106":Wt({P:26,C:40,H:40},{hL:[110,40,0],hR:[110,40,0],aL:-20,aR:-20,sp:[10,-10,-24],sL:[80,8,0],sR:[80,8,0],eL:0,eR:0,hands:th}),"A-0108":Wt({P:4,tL:-90,sL:-90,fL:-150},{seat:.015,hR:[118,-6,0],kR:140,aR:0,sp:[0,0,-52],nk:[0,0,-30],sL:[40,40,0],eL:90,sR:[-30,20,0],eR:10,hands:{L:"open",R:"floor"}}),"A-0118":Wt({},{hL:[80,32,64],kL:154,aL:-30,hR:[60,30,-54],kR:162,aR:40,sL:[38,28,62],sR:[38,28,62],eL:118,eR:118,hands:qn,pray:!0}),"A-0085":Dt({P:-128,C:-158,H:-206,tL:-34,sL:2,fL:0,tR:-34,sR:2,fR:0,uL:-150,aL:-20,uR:-150,aR:-20,hands:ge,pins:["footL","footR"]}),"A-0131":Dt({P:132,C:126,H:146,tL:46,sL:46,fL:20,tR:46,sR:46,fR:20,uL:-40,aL:-96,uR:-40,aR:-96,hands:Ie,pins:["handL","handR","footL","footR"]}),"A-0133":Dt({P:64,C:150,H:206,tL:4,sL:90,fL:178,tR:4,sR:90,fR:178,uL:54,aL:30,uR:54,aR:30,hands:ge}),"A-0136":Wt({P:128,C:116,H:100,uL:-28,aL:-96,uR:-28,aR:-96},{hL:[150,30,56],hR:[150,30,56],kL:160,kR:160,aL:-30,aR:-30,hands:Ie,armBal:!0,pins:["handL","handR"]}),"A-0147":Wt({P:72,C:66,H:50,uL:-24,aL:-24,uR:-24,aR:-24},{hL:[150,26,56],hR:[150,26,56],kL:160,kR:160,aL:-30,aR:-30,hands:Ie,armBal:!0,pins:["handL","handR"]}),"A-0149":Wt({},{root:[0,-84,-90],hL:[96,-8,20],hR:[104,12,0],kL:10,kR:0,aL:-30,aR:-30,sp:[10,0,-56],sL:[60,26,0],sR:[60,26,0],eL:78,eR:78,hands:Ie,armBal:!0}),"A-0150":Dt({P:6,C:4,H:0,tL:-90,sL:-90,fL:-150,tR:-90,sR:-90,fR:-150,uL:4,aL:4,uR:4,aR:4,hands:Ie,armBal:!0,pins:["handL","handR"]}),"A-0151":Wt({},{root:[0,70,0],sL:[0,72,0],eL:90,sR:[0,116,0],eR:0,hands:{L:"floor",R:"open"},armBal:!0,pins:["handL","footL","footR"]}),"A-0152":Wt({},{root:[0,68,0],sL:[0,70,0],eL:0,hR:[14,96,20],kR:0,sR:[20,126,0],eR:0,hands:{L:"floor",R:"open"},armBal:!0,pins:["handL","footL"]}),"A-0153":Wt({P:8,C:6,H:0,uL:4,aL:4,uR:4,aR:4},{hL:[112,34,60],hR:[112,34,60],kL:160,kR:160,aL:-30,aR:-30,hands:Ie,armBal:!0,pins:["handL","handR"]}),"A-0154":Wt({},{root:[10,-62,0],sR:[0,66,0],eR:0,hR:[118,40,30],kR:10,hL:[-8,14,0],kL:0,sL:[0,120,0],eL:0,hands:{L:"open",R:"floor"},armBal:!0,pins:["handR","footL"]}),"A-0155":Wt({P:64,C:70,H:60,uL:-16,aL:-10,uR:-16,aR:-10},{hL:[156,52,26],hR:[156,52,26],kL:96,kR:96,aL:-20,aR:-20,hands:Ie,armBal:!0,pins:["handL","handR"]}),"A-0156":Dt({P:78,C:78,H:82,tL:78,sL:78,fL:70,tR:78,sR:78,fR:70,uL:-2,aL:-88,uR:-2,aR:-88,hands:Ie,armBal:!0,pins:["footL","footR"]}),"A-0157":Wt({},{root:[0,-66,0],sR:[0,68,0],eR:0,hL:[130,20,40],kL:70,sL:[0,120,0],eL:0,hands:{L:"open",R:"floor"},armBal:!0,pins:["handR","footR"]}),"A-0158":Wt({},{root:[0,-90,-90],hL:[92,4,0],hR:[88,4,0],kL:0,kR:0,aL:-30,aR:-30,sp:[0,0,-62],sL:[64,22,0],sR:[64,22,0],eL:84,eR:84,hands:Ie,armBal:!0}),"A-0159":Wt({},{root:[0,-66,0],sR:[0,68,0],eR:0,hL:[40,30,60],kL:150,aL:-20,sL:[-60,30,0],eL:60,hands:{L:"open",R:"floor"},armBal:!0,pins:["handR","footR"]}),"A-0160":Wt({},{root:[-10,-62,0],sp:[-24,0,0],sR:[0,68,0],eR:0,hL:[-30,20,0],kL:120,sL:[-120,30,0],eL:10,hands:{L:"open",R:"floor"},armBal:!0,pins:["handR","footR"]}),"A-0162":Wt({P:30,C:34,H:24,uL:4,aL:4,uR:4,aR:4},{hR:[152,34,40],kR:20,hL:[96,6,0],kL:0,aL:-20,aR:-20,hands:Ie,armBal:!0,pins:["handL","handR"]}),"A-0163":Wt({P:74,C:80,H:70,uL:-4,aL:30,uR:-4,aR:30},{hR:[128,40,74],kR:110,aR:-20,hL:[-30,4,0],kL:0,aL:-30,hands:Ie,armBal:!0,pins:["handL","handR"]}),"A-0165":Wt({P:4,C:2,H:0,uL:6,aL:6,uR:6,aR:6},{hL:[96,30,58],hR:[96,30,58],kL:160,kR:160,aL:-30,aR:-30,sL:[0,4,0],sR:[0,4,0],hands:Ie,armBal:!0,pins:["handL","handR"]}),"A-0166":Wt({P:56,C:86,H:100,uL:-14,aL:-14,uR:-14,aR:-14},{hL:[150,6,10],hR:[150,6,-10],kL:150,kR:150,aL:40,aR:40,hands:Ie,armBal:!0,pins:["handL","handR"]}),"A-0168":Wt({},{root:[0,-90,-90],hL:[92,4,0],hR:[118,10,40],kL:0,kR:110,aL:-30,aR:-20,sp:[0,0,-62],sL:[64,22,0],sR:[64,22,0],eL:84,eR:84,hands:Ie,armBal:!0}),"A-0170":Dt({P:88,C:26,H:-16,tL:98,sL:206,fL:250,tR:98,sR:206,fR:250,uL:-14,aL:-14,uR:-14,aR:-14,shAbd:12,hands:Ie,pins:["handL","handR"]}),"A-0172":Wt({},{hL:[84,40,66],kL:160,hR:[84,40,66],kR:160,aL:-24,aR:-24,sL:[26,12,0],sR:[26,12,0],eL:64,eR:64,hands:ge}),"A-0173":Wt({},{hL:[84,36,64],kL:156,aL:-30,hR:[150,44,64],kR:104,aR:-10,sL:[38,28,62],sR:[38,28,62],eL:118,eR:118,hands:qn,pray:!0}),"A-0183":Wt({},{hL:[82,52,62],kL:150,hR:[82,52,62],kR:150,aL:-20,aR:-20,sL:[-34,18,0],sR:[-34,18,0],eL:8,eR:8,hands:Ie}),"A-0187":Wt({P:-90,C:-90,H:-90,tL:-90,sL:-90,fL:-150,tR:-90,sR:-90,fR:-150,uL:86,aL:88,uR:86,aR:88,shAbd:10},{hR:[34,54,62],kR:140,aR:-30,hands:ge}),"A-0194":Wt({},{root:[0,88,0],sL:[170,6,0],eL:130,hR:[20,96,10],kR:0,sR:[30,138,0],eR:0,hands:ge}),"A-0201":Wt({P:-90,C:-56,H:-150,uL:-70,aL:-70,uR:-70,aR:-70},{hL:[34,34,60],hR:[34,34,60],kL:160,kR:160,aL:-30,aR:-30,hands:ge}),"A-0208":Wt({P:90,C:90,H:84,uL:-86,aL:-86,uR:-86,aR:-86,shAbd:4},{hL:[-12,30,60],hR:[-12,30,60],kL:160,kR:160,aL:-30,aR:-30,hands:qn}),"A-0209":Dt({P:86,C:22,H:-6,tL:108,sL:214,fL:260,tR:108,sR:214,fR:260,uL:168,aL:238,uR:168,aR:238,shAbd:20,hands:ge}),"A-0210":Wt({P:88,C:52,H:34,uL:0,aL:-80,uR:40,aR:120},{hR:[-8,30,60],kR:160,aR:-30,hL:[-6,8,0],kL:150,aL:40,hands:{L:"open",R:"floor"}}),"A-0213":Dt({P:88,C:54,H:36,tL:112,sL:168,fL:200,tR:112,sR:168,fR:200,uL:120,aL:120,uR:120,aR:120,shAbd:10,hands:ge}),"A-0217":Wt({P:88,C:40,H:20,tR:116,sR:200,fR:250,uR:126,aR:126,tL:92,sL:214,fL:220,uL:70,aL:150},{hands:ge}),"A-0218":Dt({P:88,C:16,H:-14,tL:110,sL:210,fL:250,tR:110,sR:210,fR:250,uL:140,aL:140,uR:140,aR:140,shAbd:12,hands:ge}),"A-0219":Wt({P:84,C:26,H:4,uL:-14,aL:-14,uR:-14,aR:-14},{hL:[-6,30,60],hR:[-6,30,60],kL:160,kR:160,aL:-30,aR:-30,hands:Ie,pins:["handL","handR"]}),"A-0220":Wt({P:90,C:80,H:72,uL:-6,aL:-90,uR:-6,aR:-90},{hL:[8,84,-80],hR:[8,84,-80],kL:90,kR:90,aL:10,aR:10,hands:Ie}),"A-0222":(()=>{let i=Dt({P:90,C:90,H:90,tL:90,sL:90,fL:176,tR:90,sR:90,fR:176,uL:92,aL:92,uR:92,aR:92,shAbd:80,hands:ge});return i.hR=[-20,-24,0],i.kR=100,i})(),"A-0224":Dt({P:80,C:86,H:80,tL:86,sL:92,fL:178,tR:-112,sR:-14,fR:0,uL:-4,aL:-90,uR:-4,aR:-90,hands:Ie,pins:["handL","handR","footR"]}),"A-0225":Dt({P:0,C:0,H:0,tL:-80,sL:92,fL:90,tR:-80,sR:92,fR:90,uL:-20,aL:-62,uR:-20,aR:-62,hands:ge}),"A-0226":Wt({P:4,C:-8,H:-10},{hR:[72,42,84],kR:132,aR:-20,hL:[-30,6,0],kL:120,aL:40,sp:[-8,0,30],sL:[-60,20,0],eL:20,sR:[40,10,0],eR:20,hands:ge}),"A-0235":Wt({P:-90,C:-90,H:-90,uL:-6,aL:-6,uR:-6,aR:-6,shAbd:70},{hL:[44,52,62],hR:[44,52,62],kL:140,kR:140,aL:-20,aR:-20,hands:ge}),"A-0038":Wt({P:70,C:112,H:132,uL:150,aL:150,uR:150,aR:150},{hL:[160,30,60],hR:[160,30,60],kL:160,kR:160,aL:-30,aR:-30,hands:th}),"A-0039":Wt({P:70,C:112,H:132},{hL:[160,30,60],hR:[160,30,60],kL:160,kR:160,aL:-30,aR:-30,sL:[-46,36,70],sR:[-46,36,70],eL:130,eR:130,hands:qn}),"A-0055":Wt({P:40,C:66,H:78,tL:-90,sL:-90,fL:-150,uL:-110,aL:-110,uR:-110,aR:-110},{hR:[160,40,40],kR:70,aR:-20,hands:ge}),"A-0056":Wt({P:40,C:70,H:80,tL:-90,sL:-90,fL:-150,tR:-90,sR:-90,fR:-150,uL:-110,aL:-110},{sR:[-20,70,0],eR:0,hands:ge}),"A-0070":Wt({P:52,C:82,H:92,uL:-100,aL:-100,uR:-100,aR:-100,shAbd:34},{hL:[142,40,0],hR:[142,40,0],aL:-20,aR:-20,hands:ge})};var mf=(i,t,e)=>(i.sp=[i.sp[0],t,0],e!=null&&(i.nk=[i.nk[0],e,0]),i),Di={L:"floor",R:"floor"},es={L:"open",R:"open"},ta={L:"lock",R:"lock"},Ni={tL:-90,sL:-90,fL:-70,tR:-90,sR:-90,fR:-70},zs={...pf,"A-0002":Dt({P:2,C:-8,H:-12,tL:-64,sL:2,fL:0,tR:34,sR:34,fR:0,uL:176,aL:178,uR:176,aR:178,hands:es,pins:["footL","footR"]}),darnika:Dt({P:52,C:96,H:104,tL:-80,sL:92,fL:90,tR:-80,sR:92,fR:90,uL:-128,aL:-136,uR:-128,aR:-136,shAbd:26,hands:Di,pins:["handL","handR"],fit:"C"}),croc:Dt({P:90,C:90,H:90,tL:90,sL:90,fL:176,tR:90,sR:90,fR:176,uL:92,aL:92,uR:92,aR:92,shAbd:10,hands:es}),pranam:Rn.pranam,hastaut:Rn.hastaut,padah:Rn.padah,ashwa:Rn.ashwaR,edog:Rn.edog,a8:Rn.a8,sarp:Rn.sarp,bok:mf(Dt({P:0,C:0,H:0,tL:0,tR:0,uL:178,aL:180,uR:178,aR:180,shAbd:4,hands:ta}),34,10),plknee:Dt({P:70,C:74,H:80,tL:70,sL:70,fL:62,tR:-50,sR:96,fR:120,uL:0,aL:0,uR:0,aR:0,hands:Di,pins:["handL","handR","footL"],fit:"P"}),antknee:Dt({P:70,C:104,H:140,tL:2,sL:90,fL:178,tR:-58,sR:58,fR:90,uL:4,aL:4,uR:4,aR:4,hands:Di,pins:["handL","handR"],fit:"C"}),antkick:Dt({P:86,C:86,H:78,tL:2,sL:90,fL:178,tR:112,sR:112,fR:150,uL:2,aL:2,uR:2,aR:2,hands:Di,pins:["handL","handR"],fit:"C"}),ardhach:Dt({P:18,C:-6,H:-24,tL:-98,sL:-4,fL:0,tR:44,sR:92,fR:178,uL:176,aL:178,uR:176,aR:178,hands:es,pins:["footL"]}),lcres3:Dt({P:22,C:-18,H:-40,tL:-98,sL:-4,fL:0,tR:46,sR:92,fR:178,uL:196,aL:200,uR:196,aR:200,hands:es,pins:["footL"]}),wideknees:Dt({P:34,C:4,H:-14,tL:38,sL:92,fL:178,tR:38,sR:92,fR:178,uL:-6,aL:-6,uR:-6,aR:-6,hipAbd:18,hands:Di,pins:["handL","handR"],fit:"C"}),matsya:Dt({P:-90,C:-40,H:-128,tL:-90,sL:-90,fL:-40,tR:-90,sR:-90,fR:-40,uL:-84,aL:-96,uR:-84,aR:-96,hands:Di}),ugra:Dt({...Ni,P:38,C:92,H:122,uL:-58,aL:-62,uR:-58,aR:-62,hands:es}),ugrash:Dt({...Ni,P:40,C:92,H:118,uL:150,aL:154,uR:150,aR:154,hands:ta}),paschsh:Dt({...Ni,P:52,C:78,H:88,uL:140,aL:144,uR:140,aR:144,hands:ta}),upavfold:Dt({...Ni,P:46,C:84,H:96,uL:-60,aL:-66,uR:-60,aR:-66,hipAbd:42,shAbd:20,hands:Di,pins:["handL","handR"],fit:"C"}),upavfix:Dt({...Ni,P:-14,C:-26,H:-30,uL:38,aL:38,uR:38,aR:38,hipAbd:42,shAbd:14,hands:Di,pins:["handL","handR"]}),upavnam:Dt({...Ni,P:46,C:84,H:96,uL:128,aL:60,uR:128,aR:60,hipAbd:42,hands:es}),upavsh:Dt({...Ni,P:46,C:84,H:96,uL:146,aL:150,uR:146,aR:150,hipAbd:42,hands:ta}),upavside:mf(Dt({...Ni,P:6,C:6,H:6,uL:175,aL:178,uR:-30,aR:-30,hipAbd:42,hands:es}),-38,-12)},ea={"A-0003":"ashwa","A-0140":"fwheel","A-0097":"kneelbend","A-0204":"hala","A-0126":"sarvquad","A-0128":"karna","A-0132":"revtableup","A-0167":"tittibha","A-0073":"kurma","A-0089":"bhadralock","A-0007":"tad","A-0008":"utkata","A-0010":"hastaut","A-0012":"horse","A-0016":"garuda","A-0033":"pasch","A-0037":"pyramid","A-0041":"padahasta","A-0042":"uttan","A-0043":"prasaritatw","A-0064":"tittibha","A-0071":"edog","A-0074":"kurma","A-0077":"ustra","A-0078":"purvo","A-0082":"sarp","A-0086":"sbridge","A-0090":"paryarch","A-0100":"updog","A-0115":"jathara","A-0125":"wheel","A-0127":"viparita","A-0130":"karna","A-0135":"hala","A-0141":"fscorp","A-0142":"shirsha","A-0143":"handstand","A-0145":"baka","A-0148":"plank","A-0164":"mayura","A-0171":"padma","A-0174":"vira","A-0179":"siddha","A-0180":"hanu","A-0182":"bhadralock","A-0184":"upavup","A-0198":"legs90","A-0216":"a8","A-0221":"shalabha","A-0227":"cat","A-0228":"lcres","A-0230":"paryanka","A-0233":"shishu","A-0234":"shava","A-0197":"mv:s_kneesChest"},na={"A-0001-V19":"A-0001","A-0002-V01":"A-0002","A-0003-V01":"A-0003","A-0003-V02":"A-0003","A-0003-V03":"A-0003","A-0003-V04":"A-0003","A-0003-V05":"A-0003","A-0003-V06":"A-0003","A-0004-V04":"A-0004","A-0004-V05":"A-0004","A-0004-V06":"A-0004","A-0004-V13":"A-0004","A-0004-V14":"A-0004","A-0004-V15":"A-0004","A-0004-V19":"A-0004","A-0004-V20":"A-0004","A-0004-V21":"A-0004","A-0004-V22":"A-0004","A-0004-V24":"A-0004","A-0005-V03":"A-0005","A-0005-V07":"A-0005","A-0005-V08":"A-0005","A-0005-V11":"A-0005","A-0005-V15":"A-0005","A-0005-V16":"A-0005","A-0005-V20":"A-0005","A-0005-V22":"A-0005","A-0005-V24":"A-0005","A-0005-V26":"A-0005","A-0005-V27":"A-0005","A-0005-V28":"A-0005","A-0005-V29":"A-0005","A-0006-V01":"A-0006","A-0006-V02":"A-0006","A-0006-V03":"A-0006","A-0008-V01":"A-0008","A-0008-V03":"A-0008","A-0008-V16":"A-0008","A-0009-V02":"A-0009","A-0009-V05":"A-0009","A-0009-V07":"A-0009","A-0009-V08":"A-0009","A-0009-V09":"A-0009","A-0009-V10":"A-0009","A-0010-V03":"A-0010","A-0010-V05":"A-0010","A-0010-V07":"A-0010","A-0011-V02":"A-0011","A-0011-V09":"A-0011","A-0011-V11":"A-0011","A-0011-V12":"A-0011","A-0011-V13":"A-0011","A-0011-V14":"A-0011","A-0014-V01":"A-0014","A-0014-V10":"A-0014","A-0015-V03":"A-0015","A-0015-V04":"A-0015","A-0015-V06":"A-0015","A-0016-V09":"A-0016","A-0017-V01":"A-0017","A-0017-V02":"A-0017","A-0020-V01":"A-0020","A-0022-V01":"A-0022","A-0023-V01":"A-0023","A-0023-V02":"A-0023","A-0024-V01":"A-0024","A-0024-V02":"A-0024","A-0024-V03":"A-0024","A-0024-V05":"A-0024","A-0024-V07":"A-0024","A-0024-V08":"A-0024","A-0025-V07":"A-0025","A-0025-V08":"A-0025","A-0025-V09":"A-0025","A-0025-V10":"A-0025","A-0028-V01":"A-0028","A-0028-V02":"A-0028","A-0028-V03":"A-0028","A-0028-V04":"A-0028","A-0028-V05":"A-0028","A-0028-V06":"A-0028","A-0031-V01":"A-0031","A-0031-V02":"A-0031","A-0031-V03":"A-0031","A-0031-V04":"A-0031","A-0031-V06":"A-0031","A-0031-V10":"A-0031","A-0031-V11":"A-0031","A-0031-V12":"A-0031","A-0031-V13":"A-0031","A-0032-V01":"A-0032","A-0032-V02":"A-0032","A-0032-V03":"A-0032","A-0032-V04":"A-0032","A-0032-V05":"A-0032","A-0032-V06":"A-0032","A-0032-V07":"A-0032","A-0032-V08":"A-0032","A-0032-V10":"A-0032","A-0032-V11":"A-0032","A-0033-V03":"A-0033","A-0033-V04":"A-0033","A-0033-V10":"A-0033","A-0033-V11":"A-0033","A-0033-V13":"A-0033","A-0033-V19":"A-0033","A-0033-V23":"A-0033","A-0033-V24":"A-0033","A-0034-V11":"A-0034","A-0036-V01":"A-0036","A-0036-V02":"A-0036","A-0036-V03":"A-0036","A-0036-V04":"A-0036","A-0036-V05":"A-0036","A-0036-V06":"A-0036","A-0036-V07":"A-0036","A-0036-V08":"A-0036","A-0037-V01":"A-0037","A-0037-V02":"A-0037","A-0037-V04":"A-0037","A-0037-V05":"A-0037","A-0037-V06":"A-0037","A-0037-V07":"A-0037","A-0037-V09":"A-0037","A-0037-V11":"A-0037","A-0037-V12":"A-0037","A-0037-V13":"A-0037","A-0037-V14":"A-0037","A-0038-V01":"A-0038","A-0040-V03":"A-0040","A-0040-V04":"A-0040","A-0041-V01":"A-0041","A-0041-V02":"A-0041","A-0041-V03":"A-0041","A-0041-V04":"A-0041","A-0042-V01":"A-0042","A-0042-V03":"A-0042","A-0042-V06":"A-0042","A-0042-V07":"A-0042","A-0042-V08":"A-0042","A-0042-V09":"A-0042","A-0042-V10":"A-0042","A-0042-V11":"A-0042","A-0042-V13":"A-0042","A-0042-V15":"A-0042","A-0042-V19":"A-0042","A-0042-V21":"A-0042","A-0042-V22":"A-0042","A-0042-V23":"A-0042","A-0042-V25":"A-0042","A-0042-V26":"A-0042","A-0042-V28":"A-0042","A-0042-V29":"A-0042","A-0042-V32":"A-0042","A-0042-V33":"A-0042","A-0042-V34":"A-0042","A-0042-V35":"A-0042","A-0042-V36":"A-0042","A-0042-V37":"A-0042","A-0042-V41":"A-0042","A-0042-V44":"A-0042","A-0042-V45":"A-0042","A-0043-V01":"A-0043","A-0043-V03":"A-0043","A-0043-V05":"A-0043","A-0043-V10":"A-0043","A-0043-V12":"A-0043","A-0043-V14":"A-0043","A-0043-V18":"A-0043","A-0043-V19":"A-0043","A-0043-V20":"A-0043","A-0043-V21":"A-0043","A-0043-V22":"A-0043","A-0043-V26":"A-0043","A-0043-V27":"A-0043","A-0046-V01":"A-0046","A-0046-V02":"A-0046","A-0046-V03":"A-0046","A-0046-V04":"A-0046","A-0046-V05":"A-0046","A-0046-V06":"A-0046","A-0046-V07":"A-0046","A-0046-V08":"A-0046","A-0046-V09":"A-0046","A-0046-V10":"A-0046","A-0046-V11":"A-0046","A-0046-V13":"A-0046","A-0046-V14":"A-0046","A-0046-V15":"A-0046","A-0046-V16":"A-0046","A-0046-V17":"A-0046","A-0046-V18":"A-0046","A-0046-V19":"A-0046","A-0046-V20":"A-0046","A-0046-V21":"A-0046","A-0046-V22":"A-0046","A-0046-V25":"A-0046","A-0046-V26":"A-0046","A-0046-V27":"A-0046","A-0046-V29":"A-0046","A-0046-V30":"A-0046","A-0046-V31":"A-0046","A-0048-V01":"A-0048","A-0057-V01":"A-0057","A-0057-V03":"A-0057","A-0057-V05":"A-0057","A-0060-V01":"A-0060","A-0060-V02":"A-0060","A-0060-V03":"A-0060","A-0060-V04":"A-0060","A-0060-V07":"A-0060","A-0060-V08":"A-0060","A-0061-V16":"A-0061","A-0061-V19":"A-0061","A-0061-V27":"A-0061","A-0061-V29":"A-0061","A-0064-V01":"A-0064","A-0064-V02":"A-0064","A-0064-V03":"A-0064","A-0064-V04":"A-0064","A-0064-V05":"A-0064","A-0064-V06":"A-0064","A-0064-V07":"A-0064","A-0064-V09":"A-0064","A-0064-V10":"A-0064","A-0064-V11":"A-0064","A-0067-V01":"A-0067","A-0071-V01":"A-0071","A-0071-V02":"A-0071","A-0071-V03":"A-0071","A-0071-V07":"A-0071","A-0071-V08":"A-0071","A-0071-V09":"A-0071","A-0071-V10":"A-0071","A-0071-V12":"A-0071","A-0071-V13":"A-0071","A-0071-V14":"A-0071","A-0071-V19":"A-0071","A-0073-V01":"A-0073","A-0074-V01":"A-0074","A-0074-V02":"A-0074","A-0074-V03":"A-0074","A-0074-V04":"A-0074","A-0075-V01":"A-0075","A-0076-V01":"A-0076","A-0077-V03":"A-0077","A-0077-V08":"A-0077","A-0077-V09":"A-0077","A-0077-V10":"A-0077","A-0077-V11":"A-0077","A-0077-V14":"A-0077","A-0077-V18":"A-0077","A-0077-V21":"A-0077","A-0077-V22":"A-0077","A-0077-V24":"A-0077","A-0077-V25":"A-0077","A-0077-V26":"A-0077","A-0077-V27":"A-0077","A-0077-V28":"A-0077","A-0077-V29":"A-0077","A-0077-V30":"A-0077","A-0077-V31":"A-0077","A-0078-V02":"A-0078","A-0078-V03":"A-0078","A-0078-V04":"A-0078","A-0078-V06":"A-0078","A-0078-V07":"A-0078","A-0078-V08":"A-0078","A-0078-V10":"A-0078","A-0078-V15":"A-0078","A-0078-V16":"A-0078","A-0079-V01":"A-0079","A-0079-V04":"A-0079","A-0079-V06":"A-0079","A-0079-V07":"A-0079","A-0079-V09":"A-0079","A-0079-V11":"A-0079","A-0079-V13":"A-0079","A-0082-V01":"A-0082","A-0082-V08":"A-0082","A-0082-V12":"A-0082","A-0082-V16":"A-0082","A-0085-V01":"A-0085","A-0085-V02":"A-0085","A-0085-V03":"A-0085","A-0085-V04":"A-0085","A-0085-V05":"A-0085","A-0086-V02":"A-0086","A-0086-V03":"A-0086","A-0086-V04":"A-0086","A-0086-V07":"A-0086","A-0086-V10":"A-0086","A-0086-V11":"A-0086","A-0086-V13":"A-0086","A-0086-V14":"A-0086","A-0086-V15":"A-0086","A-0086-V16":"A-0086","A-0086-V19":"A-0086","A-0086-V20":"A-0086","A-0086-V21":"A-0086","A-0086-V22":"A-0086","A-0086-V24":"A-0086","A-0086-V25":"A-0086","A-0086-V27":"A-0086","A-0086-V28":"A-0086","A-0086-V29":"A-0086","A-0086-V30":"A-0086","A-0086-V31":"A-0086","A-0086-V32":"A-0086","A-0086-V34":"A-0086","A-0086-V38":"A-0086","A-0086-V39":"A-0086","A-0086-V40":"A-0086","A-0086-V41":"A-0086","A-0086-V42":"A-0086","A-0086-V43":"A-0086","A-0086-V48":"A-0086","A-0086-V49":"A-0086","A-0086-V50":"A-0086","A-0086-V51":"A-0086","A-0086-V52":"A-0086","A-0086-V53":"A-0086","A-0086-V54":"A-0086","A-0086-V55":"A-0086","A-0086-V56":"A-0086","A-0086-V57":"A-0086","A-0086-V58":"A-0086","A-0086-V59":"A-0086","A-0086-V60":"A-0086","A-0086-V61":"A-0086","A-0086-V62":"A-0086","A-0087-V01":"A-0087","A-0088-V05":"A-0088","A-0089-V01":"A-0089","A-0089-V02":"A-0089","A-0089-V03":"A-0089","A-0089-V04":"A-0089","A-0090-V01":"A-0090","A-0091-V02":"A-0091","A-0091-V04":"A-0091","A-0091-V05":"A-0091","A-0091-V06":"A-0091","A-0091-V08":"A-0091","A-0091-V09":"A-0091","A-0091-V13":"A-0091","A-0091-V15":"A-0091","A-0091-V17":"A-0091","A-0091-V18":"A-0091","A-0091-V19":"A-0091","A-0093-V01":"A-0093","A-0093-V02":"A-0093","A-0098-V01":"A-0098","A-0098-V02":"A-0098","A-0099-V01":"A-0099","A-0100-V01":"A-0100","A-0100-V02":"A-0100","A-0100-V03":"A-0100","A-0100-V05":"A-0100","A-0100-V06":"A-0100","A-0100-V12":"A-0100","A-0101-V03":"A-0101","A-0102-V01":"A-0102","A-0102-V02":"A-0102","A-0102-V03":"A-0102","A-0102-V04":"A-0102","A-0102-V05":"A-0102","A-0102-V06":"A-0102","A-0103-V02":"A-0103","A-0103-V03":"A-0103","A-0103-V06":"A-0103","A-0103-V08":"A-0103","A-0103-V09":"A-0103","A-0103-V10":"A-0103","A-0105-V01":"A-0105","A-0105-V02":"A-0105","A-0105-V03":"A-0105","A-0105-V04":"A-0105","A-0108-V01":"A-0108","A-0108-V02":"A-0108","A-0109-V01":"A-0109","A-0109-V02":"A-0109","A-0109-V03":"A-0109","A-0109-V04":"A-0109","A-0109-V05":"A-0109","A-0109-V06":"A-0109","A-0109-V07":"A-0109","A-0109-V08":"A-0109","A-0109-V09":"A-0109","A-0109-V10":"A-0109","A-0109-V12":"A-0109","A-0109-V13":"A-0109","A-0109-V14":"A-0109","A-0109-V15":"A-0109","A-0111-V03":"A-0111","A-0112-V03":"A-0112","A-0112-V05":"A-0112","A-0112-V16":"A-0112","A-0112-V17":"A-0112","A-0112-V18":"A-0112","A-0115-V01":"A-0115","A-0115-V02":"A-0115","A-0115-V03":"A-0115","A-0115-V04":"A-0115","A-0115-V08":"A-0115","A-0115-V10":"A-0115","A-0115-V11":"A-0115","A-0115-V13":"A-0115","A-0115-V14":"A-0115","A-0115-V15":"A-0115","A-0115-V16":"A-0115","A-0115-V17":"A-0115","A-0118-V01":"A-0118","A-0118-V03":"A-0118","A-0119-V02":"A-0119","A-0119-V04":"A-0119","A-0119-V05":"A-0119","A-0119-V06":"A-0119","A-0119-V07":"A-0119","A-0119-V08":"A-0119","A-0119-V10":"A-0119","A-0119-V11":"A-0119","A-0119-V12":"A-0119","A-0124-V01":"A-0124","A-0124-V02":"A-0124","A-0125-V01":"A-0125","A-0125-V02":"A-0125","A-0125-V03":"A-0125","A-0125-V04":"A-0125","A-0126-V01":"A-0126","A-0126-V02":"A-0126","A-0126-V03":"A-0126","A-0128-V01":"A-0128","A-0128-V02":"A-0128","A-0129-V03":"A-0129","A-0130-V01":"A-0130","A-0130-V02":"A-0130","A-0130-V03":"A-0130","A-0130-V05":"A-0130","A-0130-V06":"A-0130","A-0130-V07":"A-0130","A-0131-V02":"A-0131","A-0131-V03":"A-0131","A-0132-V01":"A-0132","A-0132-V02":"A-0132","A-0132-V03":"A-0132","A-0132-V04":"A-0132","A-0133-V01":"A-0133","A-0135-V03":"A-0135","A-0135-V05":"A-0135","A-0135-V08":"A-0135","A-0135-V09":"A-0135","A-0135-V10":"A-0135","A-0135-V11":"A-0135","A-0135-V13":"A-0135","A-0136-V02":"A-0136","A-0136-V03":"A-0136","A-0139-V01":"A-0139","A-0139-V02":"A-0139","A-0139-V04":"A-0139","A-0139-V05":"A-0139","A-0139-V09":"A-0139","A-0139-V10":"A-0139","A-0139-V11":"A-0139","A-0139-V12":"A-0139","A-0139-V13":"A-0139","A-0139-V14":"A-0139","A-0139-V15":"A-0139","A-0139-V18":"A-0139","A-0139-V20":"A-0139","A-0139-V23":"A-0139","A-0139-V25":"A-0139","A-0139-V26":"A-0139","A-0139-V27":"A-0139","A-0139-V28":"A-0139","A-0139-V29":"A-0139","A-0139-V30":"A-0139","A-0140-V01":"A-0140","A-0140-V02":"A-0140","A-0140-V03":"A-0140","A-0141-V02":"A-0141","A-0141-V03":"A-0141","A-0141-V04":"A-0141","A-0142-V01":"A-0142","A-0142-V02":"A-0142","A-0142-V03":"A-0142","A-0142-V04":"A-0142","A-0142-V05":"A-0142","A-0142-V06":"A-0142","A-0142-V07":"A-0142","A-0142-V08":"A-0142","A-0142-V09":"A-0142","A-0142-V10":"A-0142","A-0142-V11":"A-0142","A-0142-V12":"A-0142","A-0142-V13":"A-0142","A-0142-V14":"A-0142","A-0142-V15":"A-0142","A-0142-V16":"A-0142","A-0142-V17":"A-0142","A-0142-V18":"A-0142","A-0142-V19":"A-0142","A-0142-V20":"A-0142","A-0142-V21":"A-0142","A-0142-V22":"A-0142","A-0142-V23":"A-0142","A-0142-V24":"A-0142","A-0142-V25":"A-0142","A-0142-V26":"A-0142","A-0142-V27":"A-0142","A-0142-V28":"A-0142","A-0142-V29":"A-0142","A-0142-V31":"A-0142","A-0142-V32":"A-0142","A-0142-V33":"A-0142","A-0142-V34":"A-0142","A-0142-V35":"A-0142","A-0142-V36":"A-0142","A-0142-V37":"A-0142","A-0142-V38":"A-0142","A-0142-V39":"A-0142","A-0142-V40":"A-0142","A-0142-V44":"A-0142","A-0142-V45":"A-0142","A-0142-V46":"A-0142","A-0142-V47":"A-0142","A-0142-V48":"A-0142","A-0142-V49":"A-0142","A-0142-V50":"A-0142","A-0142-V51":"A-0142","A-0142-V52":"A-0142","A-0142-V53":"A-0142","A-0142-V54":"A-0142","A-0142-V55":"A-0142","A-0142-V56":"A-0142","A-0142-V57":"A-0142","A-0142-V58":"A-0142","A-0142-V59":"A-0142","A-0142-V60":"A-0142","A-0142-V61":"A-0142","A-0144-V01":"A-0144","A-0144-V02":"A-0144","A-0144-V03":"A-0144","A-0144-V04":"A-0144","A-0144-V05":"A-0144","A-0144-V06":"A-0144","A-0144-V07":"A-0144","A-0144-V08":"A-0144","A-0144-V09":"A-0144","A-0144-V10":"A-0144","A-0144-V11":"A-0144","A-0144-V12":"A-0144","A-0144-V13":"A-0144","A-0145-V02":"A-0145","A-0145-V03":"A-0145","A-0145-V04":"A-0145","A-0145-V06":"A-0145","A-0146-V01":"A-0146","A-0148-V05":"A-0148","A-0148-V10":"A-0148","A-0148-V14":"A-0148","A-0148-V15":"A-0148","A-0148-V17":"A-0148","A-0148-V19":"A-0148","A-0148-V20":"A-0148","A-0148-V21":"A-0148","A-0148-V24":"A-0148","A-0148-V25":"A-0148","A-0148-V29":"A-0148","A-0148-V31":"A-0148","A-0148-V32":"A-0148","A-0148-V33":"A-0148","A-0148-V34":"A-0148","A-0148-V36":"A-0148","A-0148-V38":"A-0148","A-0149-V02":"A-0149","A-0149-V04":"A-0149","A-0150-V01":"A-0150","A-0151-V03":"A-0151","A-0151-V06":"A-0151","A-0151-V07":"A-0151","A-0151-V08":"A-0151","A-0156-V01":"A-0156","A-0156-V04":"A-0156","A-0158-V02":"A-0158","A-0158-V03":"A-0158","A-0158-V04":"A-0158","A-0158-V05":"A-0158","A-0158-V06":"A-0158","A-0158-V07":"A-0158","A-0159-V01":"A-0159","A-0164-V01":"A-0164","A-0164-V02":"A-0164","A-0164-V03":"A-0164","A-0164-V04":"A-0164","A-0164-V05":"A-0164","A-0164-V06":"A-0164","A-0164-V08":"A-0164","A-0164-V12":"A-0164","A-0165-V01":"A-0165","A-0166-V01":"A-0166","A-0166-V02":"A-0166","A-0166-V03":"A-0166","A-0166-V04":"A-0166","A-0166-V05":"A-0166","A-0169-V01":"A-0169","A-0170-V03":"A-0170","A-0170-V04":"A-0170","A-0170-V05":"A-0170","A-0170-V06":"A-0170","A-0170-V07":"A-0170","A-0170-V08":"A-0170","A-0170-V09":"A-0170","A-0170-V10":"A-0170","A-0170-V11":"A-0170","A-0170-V17":"A-0170","A-0170-V18":"A-0170","A-0170-V19":"A-0170","A-0170-V20":"A-0170","A-0170-V21":"A-0170","A-0170-V22":"A-0170","A-0170-V24":"A-0170","A-0170-V26":"A-0170","A-0170-V28":"A-0170","A-0170-V29":"A-0170","A-0170-V30":"A-0170","A-0170-V31":"A-0170","A-0170-V32":"A-0170","A-0170-V33":"A-0170","A-0170-V34":"A-0170","A-0170-V35":"A-0170","A-0170-V36":"A-0170","A-0170-V37":"A-0170","A-0170-V38":"A-0170","A-0170-V39":"A-0170","A-0170-V40":"A-0170","A-0170-V41":"A-0170","A-0170-V42":"A-0170","A-0170-V43":"A-0170","A-0170-V44":"A-0170","A-0170-V45":"A-0170","A-0170-V46":"A-0170","A-0170-V47":"A-0170","A-0170-V48":"A-0170","A-0170-V51":"A-0170","A-0170-V52":"A-0170","A-0170-V53":"A-0170","A-0170-V54":"A-0170","A-0170-V56":"A-0170","A-0170-V57":"A-0170","A-0170-V58":"A-0170","A-0170-V59":"A-0170","A-0170-V60":"A-0170","A-0171-V01":"A-0171","A-0171-V03":"A-0171","A-0171-V07":"A-0171","A-0171-V16":"A-0171","A-0171-V17":"A-0171","A-0171-V19":"A-0171","A-0171-V22":"A-0171","A-0171-V24":"A-0171","A-0171-V25":"A-0171","A-0171-V28":"A-0171","A-0171-V29":"A-0171","A-0171-V32":"A-0171","A-0171-V33":"A-0171","A-0171-V34":"A-0171","A-0171-V38":"A-0171","A-0171-V46":"A-0171","A-0171-V47":"A-0171","A-0171-V48":"A-0171","A-0171-V49":"A-0171","A-0171-V53":"A-0171","A-0172-V01":"A-0172","A-0172-V03":"A-0172","A-0172-V04":"A-0172","A-0172-V05":"A-0172","A-0172-V06":"A-0172","A-0172-V11":"A-0172","A-0173-V01":"A-0173","A-0173-V03":"A-0173","A-0174-V07":"A-0174","A-0174-V15":"A-0174","A-0174-V21":"A-0174","A-0174-V22":"A-0174","A-0174-V23":"A-0174","A-0174-V24":"A-0174","A-0175-V02":"A-0175","A-0175-V09":"A-0175","A-0175-V10":"A-0175","A-0175-V11":"A-0175","A-0175-V13":"A-0175","A-0176-V34":"A-0176","A-0177-V04":"A-0177","A-0178-V01":"A-0178","A-0178-V02":"A-0178","A-0178-V03":"A-0178","A-0178-V04":"A-0178","A-0178-V05":"A-0178","A-0178-V06":"A-0178","A-0178-V07":"A-0178","A-0178-V08":"A-0178","A-0179-V01":"A-0179","A-0180-V01":"A-0180","A-0180-V03":"A-0180","A-0180-V04":"A-0180","A-0180-V06":"A-0180","A-0180-V07":"A-0180","A-0180-V10":"A-0180","A-0180-V11":"A-0180","A-0180-V12":"A-0180","A-0180-V13":"A-0180","A-0180-V15":"A-0180","A-0182-V01":"A-0182","A-0182-V03":"A-0182","A-0182-V04":"A-0182","A-0182-V05":"A-0182","A-0182-V06":"A-0182","A-0182-V07":"A-0182","A-0182-V08":"A-0182","A-0182-V10":"A-0182","A-0182-V11":"A-0182","A-0182-V12":"A-0182","A-0182-V13":"A-0182","A-0182-V14":"A-0182","A-0182-V15":"A-0182","A-0182-V17":"A-0182","A-0182-V18":"A-0182","A-0182-V19":"A-0182","A-0182-V21":"A-0182","A-0182-V22":"A-0182","A-0182-V23":"A-0182","A-0184-V01":"A-0184","A-0184-V07":"A-0184","A-0184-V08":"A-0184","A-0184-V09":"A-0184","A-0184-V10":"A-0184","A-0184-V11":"A-0184","A-0191-V08":"A-0191","A-0191-V10":"A-0191","A-0194-V01":"A-0194","A-0194-V02":"A-0194","A-0194-V03":"A-0194","A-0194-V04":"A-0194","A-0194-V05":"A-0194","A-0194-V06":"A-0194","A-0194-V07":"A-0194","A-0194-V08":"A-0194","A-0194-V09":"A-0194","A-0194-V10":"A-0194","A-0194-V11":"A-0194","A-0194-V12":"A-0194","A-0194-V13":"A-0194","A-0194-V14":"A-0194","A-0194-V15":"A-0194","A-0194-V16":"A-0194","A-0194-V17":"A-0194","A-0194-V18":"A-0194","A-0194-V19":"A-0194","A-0194-V20":"A-0194","A-0194-V21":"A-0194","A-0194-V22":"A-0194","A-0194-V23":"A-0194","A-0194-V24":"A-0194","A-0194-V25":"A-0194","A-0194-V26":"A-0194","A-0194-V27":"A-0194","A-0194-V28":"A-0194","A-0194-V29":"A-0194","A-0194-V30":"A-0194","A-0194-V31":"A-0194","A-0194-V32":"A-0194","A-0194-V33":"A-0194","A-0194-V34":"A-0194","A-0194-V35":"A-0194","A-0194-V36":"A-0194","A-0197-V03":"A-0197","A-0197-V08":"A-0197","A-0197-V10":"A-0197","A-0198-V02":"A-0198","A-0199-V02":"A-0199","A-0199-V03":"A-0199","A-0199-V04":"A-0199","A-0201-V02":"A-0201","A-0201-V06":"A-0201","A-0201-V07":"A-0201","A-0201-V08":"A-0201","A-0201-V10":"A-0201","A-0201-V11":"A-0201","A-0201-V14":"A-0201","A-0201-V15":"A-0201","A-0201-V16":"A-0201","A-0201-V17":"A-0201","A-0201-V18":"A-0201","A-0201-V19":"A-0201","A-0201-V20":"A-0201","A-0201-V21":"A-0201","A-0204-V01":"A-0204","A-0204-V02":"A-0204","A-0204-V03":"A-0204","A-0204-V04":"A-0204","A-0207-V02":"A-0207","A-0209-V12":"A-0209","A-0209-V13":"A-0209","A-0209-V14":"A-0209","A-0212-V02":"A-0212","A-0212-V03":"A-0212","A-0212-V05":"A-0212","A-0212-V06":"A-0212","A-0212-V07":"A-0212","A-0212-V08":"A-0212","A-0212-V09":"A-0212","A-0212-V10":"A-0212","A-0212-V11":"A-0212","A-0212-V12":"A-0212","A-0213-V01":"A-0213","A-0213-V02":"A-0213","A-0215-V01":"A-0215","A-0215-V02":"A-0215","A-0215-V03":"A-0215","A-0215-V04":"A-0215","A-0215-V05":"A-0215","A-0215-V06":"A-0215","A-0215-V08":"A-0215","A-0215-V09":"A-0215","A-0215-V10":"A-0215","A-0215-V12":"A-0215","A-0215-V13":"A-0215","A-0215-V14":"A-0215","A-0216-V01":"A-0216","A-0220-V01":"A-0220","A-0220-V02":"A-0220","A-0220-V03":"A-0220","A-0220-V04":"A-0220","A-0220-V05":"A-0220","A-0221-V01":"A-0221","A-0221-V16":"A-0221","A-0224-V01":"A-0224","A-0225-V02":"A-0225","A-0225-V09":"A-0225","A-0226-V01":"A-0226","A-0227-V03":"A-0227","A-0227-V11":"A-0227","A-0227-V13":"A-0227","A-0227-V14":"A-0227","A-0227-V15":"A-0227","A-0227-V16":"A-0227","A-0227-V17":"A-0227","A-0227-V22":"A-0227","A-0227-V24":"A-0227","A-0227-V25":"A-0227","A-0227-V30":"A-0227","A-0228-V03":"A-0228","A-0228-V06":"A-0228","A-0228-V07":"A-0228","A-0228-V08":"A-0228","A-0228-V09":"A-0228","A-0228-V11":"A-0228","A-0228-V13":"A-0228","A-0228-V15":"A-0228","A-0228-V16":"A-0228","A-0228-V17":"A-0228","A-0228-V18":"A-0228","A-0228-V19":"A-0228","A-0228-V20":"A-0228","A-0228-V21":"A-0228","A-0228-V22":"A-0228","A-0228-V26":"A-0228","A-0229-V02":"A-0229","A-0230-V01":"A-0230","A-0230-V02":"A-0230","A-0230-V03":"A-0230","A-0230-V05":"A-0230","A-0230-V06":"A-0230","A-0233-V02":"A-0233","A-0233-V03":"A-0233","A-0233-V05":"A-0233","A-0233-V06":"A-0233","A-0233-V07":"A-0233","A-0233-V09":"A-0233","A-0233-V10":"A-0233","A-0233-V11":"A-0233","A-0233-V12":"A-0233","A-0233-V13":"A-0233","A-0233-V14":"A-0233","A-0233-V15":"A-0233","A-0233-V17":"A-0233","A-0233-V18":"A-0233","A-0233-V19":"A-0233","A-0233-V20":"A-0233","A-0233-V21":"A-0233","A-0233-V22":"A-0233","A-0233-V23":"A-0233","A-0233-V24":"A-0233","A-0234-V01":"A-0234","A-0234-V02":"A-0234","A-0235-V01":"A-0235","A-0235-V02":"A-0235"};var Pr=Math.PI/180,eh=new N(0,1,0),ia=new N(0,-1,0),_A=new N(0,0,1),AA=new N(1,0,0),xA=["torso","chest","neck","thigh_r","shin_r","foot_r","thigh_l","shin_l","foot_l","upper_arm_r","forearm_r","upper_arm_l","forearm_l"];function gf(i){let t={};xA.forEach((o,a)=>t[o]=i[a]);let e=!!i[13],n=o=>e?new N(Math.cos(o*Pr),Math.sin(o*Pr),0):new N(0,Math.sin(o*Pr),Math.cos(o*Pr)),s=(o,a,c)=>{let l=n(a),h=c||new ve,u=o.clone().applyQuaternion(h);return new ve().setFromUnitVectors(u,l).multiply(h)},r={};r.pelvis=s(eh,t.torso),r.chest=s(eh,t.chest,r.pelvis),r.lumbar=r.pelvis.clone().slerp(r.chest,.45),r.head=s(eh,t.neck,r.chest),r.neck=r.chest.clone().slerp(r.head,.5);for(let[o,a]of[["R","r"],["L","l"]]){r["thigh"+o]=s(ia,t["thigh_"+a],r.pelvis),r["shin"+o]=s(ia,t["shin_"+a],r["thigh"+o]);let c=r["shin"+o],l=n(t["foot_"+a]),h=null;for(let u=-100;u<=60;u+=2){let f=c.clone().multiply(new ve().setFromAxisAngle(AA,-u*Pr)),p=_A.clone().applyQuaternion(f).angleTo(l);(!h||p<h.e)&&(h={e:p,q:f})}r["foot"+o]=h.q,r["uarm"+o]=s(ia,t["upper_arm_"+a],r.chest),r["farm"+o]=s(ia,t["forearm_"+a],r["uarm"+o]),r["hand"+o]=r["farm"+o].clone()}return r}var yA=.46,Af={L:"open",R:"open"},ns=(i,t)=>Object.assign(i,t),vA={P:0,C:0,H:0,tL:-90,sL:0,fL:0,tR:-90,sR:0,fR:0,hipAbd:7},Ce=(i,t={})=>ns(Dt({...vA,uL:-18,aL:-66,uR:-18,aR:-66,shAbd:14,hands:Af,...i}),{seat:yA,pins:["footL","footR"],prop:"chair",...t}),MA={P:-90,C:-90,H:-90,tL:-90,sL:-90,fL:-150,tR:-90,sR:-90,fR:-150,uL:-84,aL:-86,uR:-84,aR:-86,shAbd:14,hands:Af},sn=(i,t={})=>ns(Dt({...MA,...i}),t),Ir=(i,t)=>(i.nk=[i.nk[0]+(t[0]||0),t[1]||0,t[2]||0],i),_f=(i,t)=>(i.sp=[i.sp[0]+(t[0]||0),t[1]||0,t[2]||0],i),nh=(i,t)=>(i.wL=t.slice(),i.wR=t.slice(),i),ih={seat:.015,pins:["footL","footR"]},Hs=i=>Object.assign({root:[0,0,0],sp:[0,0,0],nk:[0,0,0],hL:[0,3,0],hR:[0,3,0],kL:0,kR:0,aL:0,aR:0,sL:[0,10,0],sR:[0,10,0],eL:0,eR:0,hands:{L:"open",R:"open"}},i),sh={sideSit:Hs({seat:.015,root:[4,0,0],hL:[80,10,55],kL:150,hR:[70,22,-40],kR:152,aL:-30,aR:-40,sL:[10,14,0],sR:[6,30,0],eL:20,eR:10,hands:{L:"open",R:"floor"},pins:["handR"]}),tree:Hs({hR:[62,48,62],kR:146,aR:-30,hands:{L:"namaste",R:"namaste"},pray:!0,pins:["footL"],sL:[38,28,62],sR:[38,28,62],eL:118,eR:118}),treeUp:Hs({hR:[62,48,62],kR:146,aR:-30,pins:["footL"],sL:[176,6,0],sR:[176,6,0],eL:4,eR:4}),bfDown:Hs({...ih,cam:60,hL:[82,52,62],kL:150,hR:[82,52,62],kR:150,aL:-20,aR:-20,sL:[32,10,0],sR:[32,10,0],eL:50,eR:50}),bfUp:Hs({...ih,cam:60,hL:[86,30,40],kL:148,hR:[86,30,40],kR:148,aL:-20,aR:-20,sL:[32,10,0],sR:[32,10,0],eL:50,eR:50}),easy:Hs({...ih,cam:60,hL:[84,40,66],kL:160,hR:[84,40,66],kR:160,aL:-24,aR:-24,sL:[26,12,0],sR:[26,12,0],eL:64,eR:64}),c_sit:Ce({}),c_tall:Ce({uL:-6,aL:-6,uR:-6,aR:-6,shAbd:18}),c_up:Ce({uL:176,aL:178,uR:176,aR:178,shAbd:6}),c_fwd:Ce({uL:-88,aL:-90,uR:-88,aR:-90,shAbd:4},{focus:"arms"}),c_side_arms:Ce({uL:0,aL:0,uR:0,aR:0,shAbd:86}),c_cow:Ce({C:-12,H:-16,uL:-36,aL:-64,uR:-36,aR:-64}),c_cat:Ce({C:24,H:44,uL:-30,aL:-60,uR:-30,aR:-60}),c_fold:Ce({P:30,C:74,H:86,uL:2,aL:2,uR:2,aR:2}),c_sideL:_f(Ce({uL:0,aL:0,uR:168,aR:172,shAbd:10}),[0,24,0]),c_twistL:_f(Ce({uL:-36,aL:-82,uR:-20,aR:-70}),[0,0,34]),c_marchR:Ce({tR:-114,sR:-24,fR:8},{pins:["footL"]}),c_legR:Ce({tR:-96,sR:-94,fR:-150},{pins:["footL"]}),c_toes:Ce({fL:-24,fR:-24},{focus:"feet"}),c_heels:Ce({fL:34,fR:34},{focus:"feet"}),c_headL:Ir(Ce({}),[0,0,55]),c_headTiltL:Ir(Ce({}),[0,26,0]),c_chin:Ir(Ce({}),[26,0,0]),c_lookUp:Ir(Ce({}),[-24,0,0]),h_open:Ce({uL:-70,aL:-88,uR:-70,aR:-88,shAbd:8},{focus:"hands"}),h_fist:ns(Ce({uL:-70,aL:-88,uR:-70,aR:-88,shAbd:8,hands:{L:"fist",R:"fist"}}),{focus:"hands"}),h_spread:ns(Ce({uL:-70,aL:-88,uR:-70,aR:-88,shAbd:8,hands:{L:"spread",R:"spread"}}),{focus:"hands"}),h_wristUp:nh(Ce({uL:-70,aL:-88,uR:-70,aR:-88,shAbd:8},{focus:"hands"}),[0,0,-45]),h_wristDn:nh(Ce({uL:-70,aL:-88,uR:-70,aR:-88,shAbd:8},{focus:"hands"}),[0,0,50]),h_palmUp:nh(Ce({uL:-70,aL:-88,uR:-70,aR:-88,shAbd:8},{focus:"hands"}),[-80,0,0]),s_rest:sn({}),s_knees:sn({tL:-140,sL:-36,fL:-10,tR:-140,sR:-36,fR:-10},{pins:["footL","footR"]}),s_kneeR:sn({tL:-90,sL:-90,fL:-150,tR:-140,sR:-36,fR:-10},{pins:["footR"]}),s_kneeChestR:sn({tR:-214,sR:-70,fR:-140,uR:-172,aR:-116,shAbd:18}),s_kneesChest:sn({tL:-214,sL:-70,fL:-140,tR:-214,sR:-70,fR:-140,uL:-172,aL:-116,uR:-172,aR:-116,shAbd:18}),s_armsUp:sn({uL:86,aL:88,uR:86,aR:88,shAbd:10}),s_armsSide:sn({uL:-6,aL:-6,uR:-6,aR:-6,shAbd:86}),s_feetFlex:sn({fL:-184,fR:-184},{focus:"feet"}),s_feetPoint:sn({fL:-112,fR:-112},{focus:"feet"}),s_headL:Ir(sn({}),[0,0,55]),s_legSlideR:sn({tR:-120,sR:-60,fR:-110}),s_fist:ns(sn({hands:{L:"fist",R:"fist"}}),{focus:"hands"}),s_open:ns(sn({}),{focus:"hands"}),s_spread:ns(sn({hands:{L:"spread",R:"spread"}}),{focus:"hands"}),s_breathIn:sn({C:-96,H:-94,uL:-80,aL:-80,uR:-80,aR:-80})};var Dr=()=>new ve,Ui=180/Math.PI,Sf=(i,t)=>{let e=new cn().setFromQuaternion(i,t);return[e.x*Ui,e.y*Ui,e.z*Ui]},Fn=(i,t)=>i.clone().invert().multiply(t),sa=i=>{let t=Dr().set(i.x,0,0,i.w);if(t.lengthSq()<1e-12)return 0;t.normalize();let e=2*Math.atan2(t.x,t.w)*Ui;return e>180&&(e-=360),e<-180&&(e+=360),e},xf=i=>Math.round(i*10)/10,yf=new N(0,-1,0),SA=new N(0,1,0),bf=new N(1,0,0),Gs=i=>((i+180)%360+360)%360-180,un={sp:[[-90,120],[-50,50],[-60,60]],nk:[[-80,90],[-45,45],[-75,75]],h:[[-40,145],[-35,90],[-50,100]],k:[0,168],a:[-95,38],s:[[-95,200],[-55,200],[-95,95]],e:[0,150],w:[[-80,80],[-30,40],[-75,75]]};function Ws(i,t,e,n){let[s,r,o]=Sf(i,t),a=[[s,r,o],t==="XZY"?[Gs(s+180),Gs(r+180),Gs(180-o)]:[Gs(s+180),Gs(180-r),Gs(o+180)]],c=null;for(let l of a){let h=e(l),u=0;n&&h.forEach((f,p)=>{let[_,x]=n[p],m=f,d=1/0;for(let E of[f,f+360,f-360]){let L=Math.max(0,_-E,E-x)*10+Math.abs(E)*.001;L<d&&(d=L,m=E)}h[p]=m,u+=Math.max(0,_-m,m-x)*10}),u+=Math.abs(h[0])*.01+Math.abs(h[1])*.03+Math.abs(h[2])*.05,(!c||u<c.cost)&&(c={cost:u,j:h})}return c.j}var ra=i=>t=>[-t[0],i*t[2],i*t[1]];function vf(i,t,e,n,s,r,o){let a=i[e],c=i[n],l=yf.clone().applyQuaternion(c),h=null;for(let p=-180;p<180;p+=2){let _=a.clone().multiply(Dr().setFromAxisAngle(SA,p/Ui)),x=sa(Fn(_,c))*s;x<0&&(x=0);let m=_.clone().multiply(Dr().setFromAxisAngle(bf,s*x/Ui)),d=yf.clone().applyQuaternion(m).angleTo(l)*Ui,E=Ws(Fn(i[t],_),"XZY",ra(r),o),L=Math.max(0,o[2][0]-E[2],E[2]-o[2][1])*.6+Math.abs(E[2])*.03+Math.max(0,o[0][0]-E[0],E[0]-o[0][1])*.3+Math.max(0,o[1][0]-E[1],E[1]-o[1][1])*.3,M=d+L;(!h||M<h.cost)&&(h={cost:M,U2:_,L2:m})}let u=Fn(h.L2,c),f=Dr().set(0,u.y,0,u.w).normalize();i[e]=h.U2,i[n]=h.L2.clone().multiply(f)}function oa(i,{hinges:t=!0}={}){let e={};for(let s in i)e[s]=i[s].clone();if(t)for(let s of["L","R"]){let r=s==="L"?1:-1;vf(e,"pelvis","thigh"+s,"shin"+s,1,r,un.h),vf(e,"chest","uarm"+s,"farm"+s,-1,r,un.s)}for(let s=0;s<3;s++){let r=["L","R"].map(l=>Ws(Fn(e.pelvis,e["thigh"+l]),"XZY",ra(l==="L"?1:-1),un.h)[0]),o=Math.max(...r),a=Math.min(...r),c=0;if(o>122&&(c=o-122),a-c<-28&&(c=(c+(a- -28))/2),!c||Math.abs(c)<1)break;e.pelvis=e.pelvis.clone().multiply(Dr().setFromAxisAngle(bf,-c/Ui))}let n={};{let[s,r,o]=Sf(e.pelvis,"YZX");n.root=[s,-o,r]}n.sp=Ws(Fn(e.pelvis,e.chest),"XZY",s=>[s[0],-s[2],s[1]],un.sp),n.nk=Ws(Fn(e.chest,e.head),"XZY",s=>[s[0],-s[2],s[1]],un.nk);for(let s of["L","R"]){let r=s==="L"?1:-1;n["h"+s]=Ws(Fn(e.pelvis,e["thigh"+s]),"XZY",ra(r),un.h),n["k"+s]=Math.max(0,sa(Fn(e["thigh"+s],e["shin"+s]))),n["a"+s]=-sa(Fn(e["shin"+s],e["foot"+s])),n["s"+s]=Ws(Fn(e.chest,e["uarm"+s]),"XZY",ra(r),un.s),n["e"+s]=Math.max(0,-sa(Fn(e["uarm"+s],e["farm"+s]))),n["w"+s]=[0,0,0]}return n}var Mf=(i,[t,e])=>Math.max(t,Math.min(e,i));function aa(i){let t=JSON.parse(JSON.stringify(i)),e=[],n=(r,o)=>{t[r]&&(t[r]=t[r].map((a,c)=>{let l=Mf(a,o[c]);return Math.abs(l-a)>4&&e.push(r+c+":"+Math.round(a)),l}))},s=(r,o)=>{if(t[r]==null)return;let a=Mf(t[r],o);Math.abs(a-t[r])>4&&e.push(r+":"+Math.round(t[r])),t[r]=a};n("sp",un.sp),n("nk",un.nk);for(let r of["L","R"])n("h"+r,un.h),s("k"+r,un.k),s("a"+r,un.a),n("s"+r,un.s),s("e"+r,un.e);return{jp:t,viol:e}}var ca=i=>{let t={};for(let e in i)t[e]=Array.isArray(i[e])?i[e].map(xf):typeof i[e]=="number"?xf(i[e]):i[e];return t};function Nr(i){let t=JSON.parse(JSON.stringify(i)),e=(n,s)=>{let r=t[n];t[n]=t[s],t[s]=r};for(let[n,s]of[["hL","hR"],["kL","kR"],["aL","aR"],["sL","sR"],["eL","eR"],["wL","wR"]])e(n,s);t.root&&(t.root=[t.root[0],-t.root[1],-t.root[2]]);for(let n of["sp","nk"])t[n]&&(t[n]=[t[n][0],-t[n][1],-t[n][2]]);return t.hands&&(t.hands={L:t.hands.R,R:t.hands.L}),t.pins&&(t.pins=t.pins.map(n=>n.replace(/L$/,"#").replace(/R$/,"L").replace("#","R"))),t}var rh=document.getElementById("stage"),bA=document.getElementById("c"),Xs=new URLSearchParams(location.search),it=null,Bn=null,wf="",wA="light",Tf=Xs.get("model")||window.MUDRYA_MODEL||"female";function la(i,t,e){if(/^A-\d/.test(i)||/^mv:/.test(i))return i+(t?"|1":"");let n=i+"|"+(t?1:0)+"|"+(e||"");if(Bn[n])return n;let s=i+"|"+(t?1:0)+"|";if(Bn[s])return s;for(let r in Bn)if(r.startsWith(i+"|"+(t?1:0)+"|"))return r;return null}async function TA(){Bn=await fetch("poses.json"+(Xs.get("v")?"?v="+encodeURIComponent(Xs.get("v")):"")).then(A=>A.json()),it=await hf(bA,{poses:Bn,model:Tf}),it.view.yaw=-58,it.view.pitch=9;let i=()=>it.resize(rh.clientWidth||600,rh.clientHeight||600);i(),new ResizeObserver(i).observe(rh),it.controls&&it.controls.addEventListener("start",()=>{it.view.userMoved=!0}),window.Mudrya={ready:!0,loaded:!1,version:3,go(A,g,S,T){let P=la(A,g,T);if(!P){console.warn("pose",A);return}P===wf&&S>0||(wf=P,E(P,S||0))},hands(A){let g=la(A,0,"");return g?JSON.stringify(Bn[g].h):""},setTheme(A){wA=A,it.setTheme(A),document.body.style.background=A==="dark"?"#16171b":"#f3f0ea"},resetView(){it.view.userMoved=!1,_(!0,r?r.it.jp.cam:0)},setYaw(A){it.view.yaw=A,it.view.userMoved=!1,_(!0,r?r.it.jp.cam:0)},has(A){return!!la(A,0,"")},setFigure(A){let g=/male|man|y/.test(A)&&!/female/.test(A)?"male":"female";if(g!==Tf){let S=new URL(location.href);S.searchParams.set("model",g),location.replace(S)}},_fig:it},window.__tr=(A,g,S)=>{let T=it.stateOf(A),P=it.stateOf(g);it.placeStatic(T,0,0);let C=it.makeTransition(T,0,0,P);C.at(S);let z=it.frameTarget();return it.placeCam(z,T.cam,!0),it.render(),{pin:C.pin,held:C.held,lift:Object.keys(C.lift)}},window.__keys=()=>Object.keys(Bn);let t=null;window.__tl=(A,g,S)=>{t=e.timeline(A),it.view.yaw=g,it.view.pitch=S;let T=[1e9,1e9,1e9],P=[-1e9,-1e9,-1e9];for(let C=0;C<=t.T;C+=.25){e.frameAt(t,C);let z=it.sampleWorld();for(let V=0;V<z.length;V+=3)for(let J=0;J<3;J++)T[J]=Math.min(T[J],z[V+J]),P[J]=Math.max(P[J],z[V+J])}return t.fr={c:it.cam.position.clone().set((T[0]+P[0])/2,Math.max(.55,(T[1]+P[1])/2),(T[2]+P[2])/2),s:Math.max(P[0]-T[0],(P[1]-T[1])*1.1,P[2]-T[2])*.9},it.mat.position.set((T[0]+P[0])/2,.003,(T[2]+P[2])/2),t.fr.s*=.82,it.mat.material.map&&(it.mat.material.map.rotation=Math.PI/2,it.mat.material.map.center.set(.5,.5)),t.end=e.frameAt(t,t.T),{T:t.T,n:t.keys.length,names:t.keys.map(C=>C.n+(C.anchor?"@"+C.anchor.r:"")).join(" ")}},window.__tlFrame=(A,g)=>{let S=e.frameAt(t,A),T=t.end?A/t.T:0;if(t.end){let P=it.B.pelvis.getWorldPosition(it.cam.position.clone());P.x-=t.end.x*T,P.z-=t.end.z*T,it.setPelvisPos(P),it.syncHair()}return it.view.userMoved=!1,it.placeCam(t.fr,0,!0),it.render(),g?it.renderer.domElement.toDataURL("image/jpeg",.9):""},window.__handDbg=A=>{let g=window.__AV.POSES[A]||window.__AV.PHASES[A];window.__AV.show(g,0,0,{pins:[]});let S={};for(let T of["l","r"]){let P=it.B["hand_"+T],C=it.B["middle_01_"+T],z=it.B["lowerarm_"+T],V=it.wp(P),J=it.wp(C),b=it.wp(z),G=J.clone().sub(V).normalize();S[T]={fingerDir:G.toArray().map(K=>+K.toFixed(2)),wrist:V.toArray().map(K=>+K.toFixed(2)),elbow:b.toArray().map(K=>+K.toFixed(2)),sh:it.wp(it.B["upperarm_"+T]).toArray().map(K=>+K.toFixed(2))}}return JSON.stringify(S)},window.__conv=()=>{let A={},g=["pelvis","chest","head","thighL","shinL","footL","uarmL","farmL","thighR","shinR","footR","uarmR","farmR"];for(let S in Bn){let T={};for(let b in Bn[S].q){let G=Bn[S].q[b];T[b]=new ve(G[0],G[1],G[2],G[3])}let P=oa(T),C=Er(P),z=0,V="";for(let b of g){let G=(/^(pelvis|chest|head)$/.test(b)?T[b].angleTo(C[b]):new N(0,-1,0).applyQuaternion(T[b]).angleTo(new N(0,-1,0).applyQuaternion(C[b])))*57.3;G>z&&(z=G,V=b)}let J=aa(P);A[S]={jp:ca(P),err:+z.toFixed(1),ew:V,viol:J.viol}}return JSON.stringify(A)};let e=df(it);window.__AV=e;let n=new Map,s=A=>{if(!n.has(A)){let g=window.__prepJP(A),[S,T]=A.split("|"),P=S==="ashwa"?+T?"ashwaL":"ashwaR":S==="ardhach"?+T?"ardhachL":"ardhachR":S,C=e.keyInfo({jp:g}),z=it.B,V={pel:it.wp(z.pelvis).y,ch:it.wp(z.spine_03).y,kn:Math.min(it.wp(z.calf_l).y,it.wp(z.calf_r).y),hd:it.wp(z.Head).y};n.set(A,{name:P,jp:g,info:C,geo:V})}return n.get(A)},r=null,o=null;function a(A,g,S){e.show(A.jp,g,S),l(A.jp),p=A.jp.focus?A.jp:null}let c=new vn;{let A=new On({color:10124124,roughness:.8}),g=(T,P,C,z,V,J)=>{let b=new Ne(new Zi(T,P,C),A);b.position.set(z,V,J),b.castShadow=!0,b.receiveShadow=!0,c.add(b)},S=.46;g(.46,.04,.44,0,S-.02,0);for(let T of[-1,1])for(let P of[-1,1])g(.035,S-.04,.035,T*.2,(S-.04)/2,P*.19);for(let T of[-1,1])g(.035,.48,.035,T*.2,S+.24,-.2);g(.44,.16,.03,0,S+.36,-.2)}c.visible=!1,it.scene.add(c);function l(A){if(c.visible=!!(A&&A.prop==="chair"),!c.visible)return;let g=it.wp(it.B.pelvis);c.position.set(g.x,0,g.z-.1);let S=(A.root?A.root[2]:0)*Math.PI/180;c.rotation.y=S}function h(A){let g=A&&A.focus;if(!g)return null;let S=g==="hands"?/^(hand|farm)/:g==="feet"?/^(foot|shin)/:/^(hand|farm|uarm)/,T=it.sampleWorld(),P=[9,9,9],C=[-9,-9,-9];return it.samp.forEach((V,J)=>{if(S.test(V.reg))for(let b=0;b<3;b++)P[b]=Math.min(P[b],T[J*3+b]),C[b]=Math.max(C[b],T[J*3+b])}),{c:new N((P[0]+C[0])/2,(P[1]+C[1])/2,(P[2]+C[2])/2),s:Math.max(.55,C[0]-P[0],C[1]-P[1],C[2]-P[2])*1.4}}let u=null,f=0,p=null;function _(A,g){let S=p&&h(p)||it.frameTarget();g=g||0,A||!u?u={c:S.c.clone(),s:S.s,cy:g}:(u.c.lerp(S.c,.07),u.s+=(S.s-u.s)*.07,u.cy+=(g-u.cy)*.07),it.placeCam({c:u.c,s:u.s},u.cy,!0)}function x(A){let g=A.info.c,S=A.jp,T=A.geo||{};if(S.prop==="chair")return"CHAIR";let P=S.root&&S.root[0]>40;return!P&&T.hd<.3&&T.hd<T.pel-.2&&T.pel<.8?"LIE":T.pel<.3&&T.ch<.24?P?"PRONE":"LIE":T.pel<.32?P?"PRONE":T.kn<.09&&T.pel>.18?"KNEEL":T.kn>.3&&T.pel>.22&&g.pelvis==null&&g.thighL==null&&g.thighR==null?"STAND":"SIT":T.kn<.09?"KNEEL":g.handL!=null&&g.handR!=null?"HANDS":"STAND"}let m={"STAND>HANDS":["A-0042"],"HANDS>STAND":["A-0042"],"KNEEL>SIT":["mv:sideSit"],"SIT>KNEEL":["mv:sideSit"],"STAND>SIT":["A-0004"],"SIT>STAND":["A-0004"],"STAND>KNEEL":["A-0004"],"KNEEL>STAND":["A-0004"],"STAND>LIE":["A-0004","mv:sideSit"],"LIE>STAND":["mv:sideSit","A-0004"],"KNEEL>LIE":["mv:sideSit"],"LIE>KNEEL":["mv:sideSit"],"HANDS>SIT":["mv:sideSit"],"SIT>HANDS":["mv:sideSit"],"PRONE>SIT":["cat|0|","mv:sideSit"],"SIT>PRONE":["mv:sideSit","cat|0|"],"PRONE>STAND":["cat|0|","A-0004"],"STAND>PRONE":["A-0004","cat|0|"],"PRONE>LIE":["mv:sideSit"],"LIE>PRONE":["mv:sideSit"],"STAND>LIE ":[]};function d(A,g){return A.jp.prop==="chair"||g.jp.prop==="chair"?[]:(m[x(A)+">"+x(g)]||[]).map(T=>s(T)).filter(T=>T&&T.jp&&T.name!==A.name&&T.name!==g.name)}window.__cls=A=>x(s(A)),window.__geo=A=>{let g=window.__prepJP(A);e.keyInfo({jp:g});let S=it.B,T=it.wp(S.pelvis),P=it.wp(S.spine_03),C=it.wp(S.Head),z=P.clone().sub(T).normalize(),V=new N(0,0,1).applyQuaternion(it.wq(S.spine_03));return[+z.y.toFixed(2),+T.y.toFixed(2),+C.y.toFixed(2),+(C.y-T.y).toFixed(2),+V.y.toFixed(2)]};function E(A,g){let S=s(A);if(o){let z=o;o=null,r={it:z.to,x:z.end.x,z:z.end.z}}if(!r||!g){let z=r?r.x:0,V=r?r.z:0;r={it:S,x:z,z:V},a(S,z,V),_(!0,S.jp.cam);return}let T=e.ROUTES[r.it.name+">"+S.name]?[]:d(r.it,S),P=e.timeline([{jp:r.it.jp,name:r.it.name,info:r.it.info},...T.map(z=>({jp:z.jp,name:z.name,info:z.info})),{jp:S.jp,name:S.name,info:S.info}],{seg:1,poseSeg:1,hold:0,x0:r.x,z0:r.z}),C=P.keys[P.keys.length-1];o={tl:P,t0:performance.now(),ms:g,to:S,from:r.it,end:{x:C.x,z:C.z}}}function L(A){if(o){let g=Math.min(1,(A-o.t0)/o.ms);e.frameAt(o.tl,g*o.tl.T),l(g<.5?o.from.jp:o.to.jp),p=o.to.jp.focus&&o.from.jp.focus?o.to.jp:null,_(!1,(o.from.jp.cam||0)+((o.to.jp.cam||0)-(o.from.jp.cam||0))*g),g>=1&&(f=90,r={it:o.to,x:o.end.x,z:o.end.z},o=null,a(r.it,r.x,r.z)),it.render()}else if(r&&u&&f>0){f--,it.view.userMoved||_(!1,r.it.jp.cam);let g=it.mat.position;g.x+=(u.c.x-g.x)*.06,g.z+=(u.c.z-g.z)*.06}requestAnimationFrame(L),window.__scan=g=>{let S=[],T=C=>{C.sort((b,G)=>b[0]-G[0]||b[1]-G[1]);let z=(b,G,K)=>(G[0]-b[0])*(K[1]-b[1])-(G[1]-b[1])*(K[0]-b[0]),V=[],J=[];for(let b of C){for(;V.length>=2&&z(V[V.length-2],V[V.length-1],b)<=0;)V.pop();V.push(b)}for(let b of C.slice().reverse()){for(;J.length>=2&&z(J[J.length-2],J[J.length-1],b)<=0;)J.pop();J.push(b)}return V.slice(0,-1).concat(J.slice(0,-1))},P=(C,z)=>{if(C.length<3){let b=9;for(let G of C)b=Math.min(b,Math.hypot(G[0]-z[0],G[1]-z[1]));return b}let V=!0,J=9;for(let b=0;b<C.length;b++){let G=C[b],K=C[(b+1)%C.length];(K[0]-G[0])*(z[1]-G[1])-(K[1]-G[1])*(z[0]-G[0])<0&&(V=!1);let O=Math.hypot(K[0]-G[0],K[1]-G[1])||1e-9,tt=((z[0]-G[0])*(K[0]-G[0])+(z[1]-G[1])*(K[1]-G[1]))/(O*O);tt=Math.max(0,Math.min(1,tt)),J=Math.min(J,Math.hypot(G[0]+tt*(K[0]-G[0])-z[0],G[1]+tt*(K[1]-G[1])-z[1]))}return V?0:J};for(let[C,z]of g)try{o=null,r=null,E(C,0),E(z,1e3);let V=o;o=null;let J=0,b=0;for(let G=.1;G<.95;G+=.1){e.frameAt(V.tl,G*V.tl.T);let K=it.sampleWorld(),Y=0,O=0,tt=K.length/3,H=[];for(let dt=0;dt<K.length;dt+=3)Y+=K[dt],O+=K[dt+2],K[dt+1]<.025&&H.push([K[dt],K[dt+2]]);let j=H.length?P(T(H),[Y/tt,O/tt]):1;j>J&&(J=j,b=G)}S.push([C,z,+J.toFixed(3),+b.toFixed(1)])}catch(V){S.push([C,z,-1,String(V).slice(0,60)])}return JSON.stringify(S)},window.__strip=(g,S,T,P)=>{o=null,r=null,E(g,0),E(S,1e3);let C=o;o=null;let z=[];it.view.yaw=(C.to.jp.root[2]||0)-(P??70),it.view.pitch=8;for(let V of T)e.frameAt(C.tl,V*C.tl.T),_(!0,0),it.render(),z.push(it.renderer.domElement.toDataURL("image/jpeg",.8));return z}}requestAnimationFrame(L);function M(A,g={}){e.show({...A,pins:[]},0,0);let S=it.sampleWorld(),T={};it.samp.forEach((C,z)=>{T[C.reg]=Math.min(T[C.reg]??9,S[z*3+1])});let P=[];for(let C of["footL","footR"])((g.k||[]).includes(C)||T[C]<.04)&&T[C]<.12&&P.push(C);if(!A.armBal)for(let C of["L","R"])g.autoHands&&T["hand"+C]<.14&&(A.hands[C]="floor"),A.hands[C]==="floor"&&T["hand"+C]<.25&&P.push("hand"+C);for(let C of["L","R"]){let z=C==="L"?"R":"L",V=it.wp(it.B["calf_"+C.toLowerCase()]).y;if(A["k"+C]>70&&V<T["foot"+C]+.06&&V>.07&&T["foot"+z]<.03&&!A.armBal){A.drop=Math.min(.25,V-.055),P.includes("foot"+z)||P.push("foot"+z);break}}return A.pins=P,A}window.__OVR=zs,window.__prepJP=A=>{if(A.startsWith("A-"))return window.__prepCat(A);if(A.startsWith("mv:")){let[J,b]=A.slice(3).split("|"),G=sh[J];if(!G)return null;let K=JSON.parse(JSON.stringify(G));return K.cam=K.cam||0,+b?Nr(K):K}let g=Bn[A],[S,T]=A.split("|"),P={};for(let J in g.q){let b=g.q[J];P[J]=new ve(b[0],b[1],b[2],b[3])}let C=Math.round(new cn().setFromQuaternion(P.pelvis,"YXZ").y*57.2958)-90;if(zs[S]){let J=e.fit(zs[S]);return J={...J,viol:["OVR"]},J=+T?Nr(J):J,J.cam=-C,J}let z=aa(oa(P)),V=ca(z.jp);return V.root[2]=0,V.hands={...g.h},g.h.L==="namaste"&&g.h.R==="namaste"&&(V.pray=!0),V.armBal=!!g.a,V.cam=-C,M(V,{k:g.k}),V.viol=z.viol,V};let Z=null;window.__catLoad=async()=>(Z||(Z=await fetch("catalog.json"+(Xs.get("v")?"?v="+encodeURIComponent(Xs.get("v")):"")).then(A=>A.json())),Object.keys(Z).length),window.__prepCat=A=>{let[g,S]=A.split("|"),T=Z[g];if(!T)return null;if(zs[g]){let O=e.fit(zs[g]);return O=+S?Nr(O):O,O.cam=O.cam||0,O}if(na[g]){let O=window.__prepCat(na[g]+(+S?"|1":""));if(O)return{...O,fb:na[g]}}if(ea[g]){let O=la(ea[g],+S,""),tt=O?window.__prepJP(O):null;if(tt)return{...tt,viol:["MAP:"+ea[g]]}}let P=aa(oa(gf(T.g))),C=ca(P.jp);C.root[2]=0,C.hands={L:"open",R:"open"},C.cam=T.g[13]?90:0,C.armBal=T.fam==="arm_balance"||/arm_balance|forearm_balance/.test((T.pos||[]).join(" "));let z=T.c||0,V=(T.tags||[]).includes("lotus")||/лотос/i.test(T.n);if(V){let O=sh.easy,H=/полулотос/i.test(T.n)?[(C.kL||0)>=(C.kR||0)?"L":"R"]:["L","R"];for(let j of H)for(let dt of["h","k","a"])C[dt+j]=JSON.parse(JSON.stringify(O[dt+j]))}let J=!!(z&256)||V&&z&512&&!(z&2)&&!C.armBal&&!(z&192)&&C.root[0]<60;+S&&(C=Nr(C));let b=+S?{R:"L",L:"R"}:{R:"R",L:"L"},G={R:!!(z&64),L:!!(z&128)},K={R:!!(z&16),L:!!(z&32)},Y=!!(z&12);for(let O of["R","L"])G[O]&&(C.hands[b[O]]="floor");if(J&&(C.seat=.015),M(C,{}),C.pins=C.pins.filter(O=>O.startsWith("hand")||(J?!1:K.R||K.L?K[O==="foot"+b.R?"R":"L"]:!0)),J)for(let O of["R","L"])K[O]&&C.pins.push("foot"+b[O]);for(let O of["R","L"])G[O]&&!C.pins.includes("hand"+b[O])&&C.pins.push("hand"+b[O]);if(Y&&!J&&!C.drop){e.show(C,0,0);let O=Math.min(it.wp(it.B.calf_l).y,it.wp(it.B.calf_r).y);O>.07&&O<.5&&(C.drop=O-.055)}return J||U(C),C.viol=P.viol,C.flags=z,C};function I(A){e.show(A,0,0);let g=it.sampleWorld(),S=0,T=0,P=g.length/3,C=[];for(let Y=0;Y<g.length;Y+=3)S+=g[Y],T+=g[Y+2],g[Y+1]<.03&&C.push([g[Y],g[Y+2]]);if(S/=P,T/=P,C.length<3)return 0;C.sort((Y,O)=>Y[0]-O[0]||Y[1]-O[1]);let z=(Y,O,tt)=>(O[0]-Y[0])*(tt[1]-Y[1])-(O[1]-Y[1])*(tt[0]-Y[0]),V=[],J=[];for(let Y of C){for(;V.length>=2&&z(V[V.length-2],V[V.length-1],Y)<=0;)V.pop();V.push(Y)}for(let Y of C.slice().reverse()){for(;J.length>=2&&z(J[J.length-2],J[J.length-1],Y)<=0;)J.pop();J.push(Y)}let b=V.slice(0,-1).concat(J.slice(0,-1));if(b.length<3){let Y=9;for(let O of C)Y=Math.min(Y,Math.hypot(O[0]-S,O[1]-T));return Y}let G=!0,K=9;for(let Y=0;Y<b.length;Y++){let O=b[Y],tt=b[(Y+1)%b.length];(tt[0]-O[0])*(T-O[1])-(tt[1]-O[1])*(S-O[0])<0&&(G=!1);let H=Math.hypot(tt[0]-O[0],tt[1]-O[1])||1e-9,j=((S-O[0])*(tt[0]-O[0])+(T-O[1])*(tt[1]-O[1]))/(H*H);j=Math.max(0,Math.min(1,j)),K=Math.min(K,Math.hypot(O[0]+j*(tt[0]-O[0])-S,O[1]+j*(tt[1]-O[1])-T))}return G?0:K}function U(A){if(A.armBal||A.seat)return;let g=I(A);if(!(g<.02)){for(let S=0;S<14&&g>=.02;S++){let T=null;for(let[P,C]of[[0,3],[0,-3],[1,3],[1,-3]]){let z=A.root.slice();A.root[P]+=C;let V=I(A);(!T||V<T.d)&&(T={d:V,i:P,s:C}),A.root=z}if(T.d>=g)break;A.root[T.i]+=T.s,g=T.d}A.balanced=+g.toFixed(3)}}window.__shotOld=(A,g)=>{let S=it.stateOf(A),T=window.__prepJP(A).root[2];it.view.yaw=T-(g??55),it.view.pitch=8,it.placeStatic(S,0,0);let P=it.frameTarget();return it.view.userMoved=!1,it.placeCam(P,0,!0),it.render(),it.renderer.domElement.toDataURL("image/jpeg",.85)},window.__shot=(A,g,S,T)=>{it.view.yaw=(A.root?A.root[2]:0)-(g??55),it.view.pitch=8,e.show(A,0,0),l(A);let P=h(A)||it.frameTarget();return it.view.userMoved=!1,it.placeCam(P,0,!0),it.render(),it.renderer.domElement.toDataURL("image/jpeg",.85)},window.__showA=(A,g,S,T)=>{let P=e.POSES[A]||e.PHASES[A];T&&(P=e.fit(P)),it.view.yaw=g??90,it.view.pitch=S??6;let C=e.show(P,0,0),z=it.frameTarget();return window.__zoom&&(z={c:it.wp(it.B.pelvis),s:window.__zoom}),it.placeCam(z,0,!0),it.render(),JSON.stringify({fit:P.fitted||null})};let X=null;window.__filmInit=(A,g,S)=>{it.view.yaw=g,it.view.pitch=S;let T=it.stateOf(A[0]);it.placeStatic(T,0,0);let P=0,C=0,z=new it.cam.position.constructor,V=[1e9,1e9,1e9],J=[-1e9,-1e9,-1e9],b=()=>{let O=it.sampleWorld();for(let tt=0;tt<O.length;tt+=3)for(let H=0;H<3;H++)V[H]=Math.min(V[H],O[tt+H]),J[H]=Math.max(J[H],O[tt+H])};b();let G=[];for(let O=1;O<A.length;O++){let tt=it.stateOf(A[O-1]),H=it.stateOf(A[O]);it.placeStatic(tt,P,C);let j=it.makeTransition(tt,P,C,H);for(let dt of[.25,.5,.75,1])j.at(dt),b();G.push({A:tt,B2:H,x:P,z:C}),P=j.bx,C=j.bz}let K={x:(V[0]+J[0])/2,y:Math.max(.6,(V[1]+J[1])/2),z:(V[2]+J[2])/2},Y=Math.max(J[0]-V[0],(J[1]-V[1])*1.1,J[2]-V[2]);return X={D:{x:P,z:C},tr:G,fr:{c:it.cam.position.clone().set(K.x,K.y,K.z),s:Y*.92}},{n:G.length,c:K,s:Y}},window.__filmFrame=(A,g,S)=>{let T=X.tr[A];it.placeStatic(T.A,T.x,T.z),g>0&&it.makeTransition(T.A,T.x,T.z,T.B2).at(g);{let P=it.B.pelvis.getWorldPosition(it.cam.position.clone());P.x-=X.D.x*S,P.z-=X.D.z*S,it.setPelvisPos(P),it.syncHair()}return it.view.userMoved=!1,it.placeCam(X.fr,0,!0),it.render(),it.renderer.domElement.toDataURL("image/jpeg",.9)},window.__miny=(A,g,S)=>{__tr(A,g,S);let T=it.sampleWorld(),P={};return it.samp.forEach((C,z)=>{P[C.reg]=Math.min(P[C.reg]??9,T[z*3+1])}),JSON.stringify(Object.fromEntries(Object.entries(P).map(([C,z])=>[C,+z.toFixed(3)])))},window.__hmin=A=>{let g=it.stateOf(A);it.placeStatic(g,0,0);let S=it.sampleWorld(),T={};return it.samp.forEach((P,C)=>{T[P.reg]=Math.min(T[P.reg]??9,S[C*3+1])}),JSON.stringify(Object.fromEntries(Object.entries(T).map(([P,C])=>[P,+C.toFixed(3)])))},window.__touch=A=>{let g=it.stateOf(A);return Object.keys(g.touch).join(",")+" pelY="+g.pelvisY.toFixed(3)},await window.__catLoad(),window.Mudrya.loaded=!0,window.Mudrya.go(Xs.get("pose")||"tad",0,0),window.AndroidBridge&&AndroidBridge.onReady&&AndroidBridge.onReady()}TA().catch(i=>{console.error(i),window.AndroidBridge&&AndroidBridge.onError&&AndroidBridge.onError(String(i))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
