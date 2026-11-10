var Ko="170";var hu=0,Hl=1,uu=2;var qc=1,du=2,En=3,qn=0,He=1,Tn=2,Wn=0,Hi=1,Gl=2,Wl=3,Xl=4,fu=5,ui=100,pu=101,mu=102,gu=103,_u=104,vu=200,xu=201,yu=202,Mu=203,Oa=204,Ba=205,Su=206,bu=207,Eu=208,wu=209,Tu=210,Au=211,Cu=212,Ru=213,Iu=214,za=0,ka=1,Va=2,qi=3,Ha=4,Ga=5,Wa=6,Xa=7,Yc=0,Pu=1,Lu=2,Xn=0,Du=1,Uu=2,Nu=3,Fu=4,Ou=5,Bu=6,zu=7;var $c=300,Yi=301,$i=302,qa=303,Ya=304,Br=306,$a=1e3,pi=1001,Zi=1002,on=1003,ku=1004;var Ys=1005;var $e=1006,ca=1007;var mi=1008;var In=1009,Zc=1010,Jc=1011,Ss=1012,Qo=1013,gi=1014,An=1015,Ps=1016,jo=1017,tl=1018,Ji=1020,Kc=35902,Qc=1021,jc=1022,an=1023,th=1024,eh=1025,Gi=1026,Ki=1027,nh=1028,el=1029,ih=1030,nl=1031;var il=1033,mr=33776,gr=33777,_r=33778,vr=33779,Za=35840,Ja=35841,Ka=35842,Qa=35843,ja=36196,to=37492,eo=37496,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,lo=37814,co=37815,ho=37816,uo=37817,fo=37818,po=37819,mo=37820,go=37821,xr=36492,_o=36494,vo=36495,sh=36283,xo=36284,yo=36285,Mo=36286;var yr=2300,So=2301,ha=2302,ql=2400,Yl=2401,$l=2402;var Vu=3200,Hu=3201;var Gu=0,Wu=1,Gn="",de="srgb",es="srgb-linear",zr="linear",jt="srgb";var wi=7680;var Zl=519,Xu=512,qu=513,Yu=514,rh=515,$u=516,Zu=517,Ju=518,Ku=519,Jl=35044;var Kl="300 es",Cn=2e3,Mr=2001,Yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ql=1234567,xs=Math.PI/180,bs=180/Math.PI;function ns(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function Fe(n,t,e){return Math.max(t,Math.min(e,n))}function sl(n,t){return(n%t+t)%t}function Qu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function ju(n,t,e){return n!==t?(e-n)/(t-n):0}function ys(n,t,e){return(1-e)*n+e*t}function td(n,t,e,i){return ys(n,t,1-Math.exp(-e*i))}function ed(n,t=1){return t-Math.abs(sl(n,t*2)-t)}function nd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function id(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function sd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function rd(n,t){return n+Math.random()*(t-n)}function ad(n){return n*(.5-Math.random())}function od(n){n!==void 0&&(Ql=n);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ld(n){return n*xs}function cd(n){return n*bs}function hd(n){return(n&n-1)===0&&n!==0}function ud(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function dd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fd(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),p=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ah={DEG2RAD:xs,RAD2DEG:bs,generateUUID:ns,clamp:Fe,euclideanModulo:sl,mapLinear:Qu,inverseLerp:ju,lerp:ys,damp:td,pingpong:ed,smoothstep:nd,smootherstep:id,randInt:sd,randFloat:rd,randFloatSpread:ad,seededRandom:od,degToRad:ld,radToDeg:cd,isPowerOfTwo:hd,ceilPowerOfTwo:ud,floorPowerOfTwo:dd,setQuaternionFromProperEuler:fd,normalize:Ue,denormalize:zi},$t=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],_=i[8],b=s[0],m=s[3],u=s[6],g=s[1],M=s[4],v=s[7],R=s[2],A=s[5],T=s[8];return r[0]=o*b+a*g+l*R,r[3]=o*m+a*M+l*A,r[6]=o*u+a*v+l*T,r[1]=c*b+h*g+d*R,r[4]=c*m+h*M+d*A,r[7]=c*u+h*v+d*T,r[2]=f*b+p*g+_*R,r[5]=f*m+p*M+_*A,r[8]=f*u+p*v+_*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,_=e*d+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return t[0]=d*b,t[1]=(s*c-h*i)*b,t[2]=(a*i-s*o)*b,t[3]=f*b,t[4]=(h*e-s*l)*b,t[5]=(s*r-a*e)*b,t[6]=p*b,t[7]=(i*l-c*e)*b,t[8]=(o*e-i*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ua.makeScale(t,e)),this}rotate(t){return this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ua=new Ot;function oh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Es(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pd(){let n=Es("canvas");return n.style.display="block",n}var jl={};function _s(n){n in jl||(jl[n]=!0,console.warn(n))}function md(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function gd(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _d(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wt={enabled:!0,workingColorSpace:es,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(n.r=Rn(n.r),n.g=Rn(n.g),n.b=Rn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(n.r=Wi(n.r),n.g=Wi(n.g),n.b=Wi(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Gn?zr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Rn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var tc=[.64,.33,.3,.6,.15,.06],ec=[.2126,.7152,.0722],nc=[.3127,.329],ic=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[es]:{primaries:tc,whitePoint:nc,transfer:zr,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:ec,workingColorSpaceConfig:{unpackColorSpace:de},outputColorSpaceConfig:{drawingBufferColorSpace:de}},[de]:{primaries:tc,whitePoint:nc,transfer:jt,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:ec,outputColorSpaceConfig:{drawingBufferColorSpace:de}}});var Ti,bo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=Es("canvas")),Ti.width=t.width,Ti.height=t.height;let i=Ti.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Es("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Rn(e[i]/255)*255):e[i]=Rn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vd=0,Sr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(da(s[o].image)):r.push(da(s[o]))}else r=da(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function da(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xd=0,Be=class n extends Yn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=pi,s=pi,r=$e,o=mi,a=an,l=In,c=n.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=ns(),this.name="",this.source=new Sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $a:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Zi:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $a:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Zi:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=$c;Be.DEFAULT_ANISOTROPY=1;var ge=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],b=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-b)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+b)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(p+1)/2,R=(u+1)/2,A=(h+f)/4,T=(d+b)/4,L=(_+m)/4;return M>v&&M>R?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=T/i):v>R?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=L/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=T/r,s=L/r),this.set(i,s,r,e),this}let g=Math.sqrt((m-_)*(m-_)+(d-b)*(d-b)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-b)/g,this.z=(f-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eo=class extends Yn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Be(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Sr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Eo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},br=class extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wo=class extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],p=r[o+1],_=r[o+2],b=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=b;return}if(d!==b||l!==f||c!==p||h!==_){let m=1-a,u=l*f+c*p+h*_+d*b,g=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){let R=Math.sqrt(M),A=Math.atan2(R,u*g);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}let v=a*g;if(l=l*m+f*v,c=c*m+p*v,h=h*m+_*v,d=d*m+b*v,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*d+l*p-c*f,t[e+1]=l*_+h*f+c*d-a*p,t[e+2]=c*_+h*p+a*f-l*d,t[e+3]=h*_-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"YZX":this._x=f*h*d+c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d-f*p*_;break;case"XZY":this._x=f*h*d-c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fa=new F,rc=new $n,_i=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,nn):nn.fromBufferAttribute(r,o),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$s.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$s.copy(i.boundingBox)),$s.applyMatrix4(t.matrixWorld),this.union($s)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Zs.subVectors(this.max,fs),Ai.subVectors(t.a,fs),Ci.subVectors(t.b,fs),Ri.subVectors(t.c,fs),On.subVectors(Ci,Ai),Bn.subVectors(Ri,Ci),si.subVectors(Ai,Ri);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-si.z,si.y,On.z,0,-On.x,Bn.z,0,-Bn.x,si.z,0,-si.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-si.y,si.x,0];return!pa(e,Ai,Ci,Ri,Zs)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,Ai,Ci,Ri,Zs))?!1:(Js.crossVectors(On,Bn),e=[Js.x,Js.y,Js.z],pa(e,Ai,Ci,Ri,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},xn=[new F,new F,new F,new F,new F,new F,new F,new F],nn=new F,$s=new _i,Ai=new F,Ci=new F,Ri=new F,On=new F,Bn=new F,si=new F,fs=new F,Zs=new F,Js=new F,ri=new F;function pa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ri.fromArray(n,r);let a=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=i.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var yd=new _i,ps=new F,ma=new F,ws=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):yd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);let e=ps.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ps,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(ma)),this.expandByPoint(ps.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},yn=new F,ga=new F,Ks=new F,zn=new F,_a=new F,Qs=new F,va=new F,Er=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ga.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(ga);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ks),a=zn.dot(this.direction),l=-zn.dot(Ks),c=zn.lengthSq(),h=Math.abs(1-o*o),d,f,p,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){let b=1/h;d*=b,f*=b,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ga).addScaledVector(Ks,f),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);let i=yn.dot(this.direction),s=yn.dot(yn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,i,s,r){_a.subVectors(e,t),Qs.subVectors(i,t),va.crossVectors(_a,Qs);let o=this.direction.dot(va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);let l=a*this.direction.dot(Qs.crossVectors(zn,Qs));if(l<0)return null;let c=a*this.direction.dot(_a.cross(zn));if(c<0||l+c>o)return null;let h=-a*zn.dot(va);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class n{constructor(t,e,i,s,r,o,a,l,c,h,d,f,p,_,b,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,f,p,_,b,m)}set(t,e,i,s,r,o,a,l,c,h,d,f,p,_,b,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=_,u[11]=b,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*d,_=a*h,b=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+_*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,_=c*h,b=c*d;e[0]=f+b*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=b+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,_=c*h,b=c*d;e[0]=f-b*a,e[4]=-o*d,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=b-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*d,_=a*h,b=a*d;e[0]=l*h,e[4]=_*c-p,e[8]=f*c+b,e[1]=l*d,e[5]=b*c+f,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,_=a*l,b=a*c;e[0]=l*h,e[4]=b-f*d,e[8]=_*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+_,e[10]=f-b*d}else if(t.order==="XZY"){let f=o*l,p=o*c,_=a*l,b=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+b,e[5]=o*h,e[9]=p*d-_,e[2]=_*d-p,e[6]=a*h,e[10]=b*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Md,t,Sd)}lookAt(t,e,i){let s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),kn.crossVectors(i,We),kn.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),kn.crossVectors(i,We)),kn.normalize(),js.crossVectors(We,kn),s[0]=kn.x,s[4]=js.x,s[8]=We.x,s[1]=kn.y,s[5]=js.y,s[9]=We.y,s[2]=kn.z,s[6]=js.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],_=i[2],b=i[6],m=i[10],u=i[14],g=i[3],M=i[7],v=i[11],R=i[15],A=s[0],T=s[4],L=s[8],E=s[12],y=s[1],C=s[5],W=s[9],z=s[13],Y=s[2],Q=s[6],H=s[10],tt=s[14],k=s[3],at=s[7],lt=s[11],xt=s[15];return r[0]=o*A+a*y+l*Y+c*k,r[4]=o*T+a*C+l*Q+c*at,r[8]=o*L+a*W+l*H+c*lt,r[12]=o*E+a*z+l*tt+c*xt,r[1]=h*A+d*y+f*Y+p*k,r[5]=h*T+d*C+f*Q+p*at,r[9]=h*L+d*W+f*H+p*lt,r[13]=h*E+d*z+f*tt+p*xt,r[2]=_*A+b*y+m*Y+u*k,r[6]=_*T+b*C+m*Q+u*at,r[10]=_*L+b*W+m*H+u*lt,r[14]=_*E+b*z+m*tt+u*xt,r[3]=g*A+M*y+v*Y+R*k,r[7]=g*T+M*C+v*Q+R*at,r[11]=g*L+M*W+v*H+R*lt,r[15]=g*E+M*z+v*tt+R*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],_=t[3],b=t[7],m=t[11],u=t[15];return _*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+b*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],_=t[12],b=t[13],m=t[14],u=t[15],g=d*m*c-b*f*c+b*l*p-a*m*p-d*l*u+a*f*u,M=_*f*c-h*m*c-_*l*p+o*m*p+h*l*u-o*f*u,v=h*b*c-_*d*c+_*a*p-o*b*p-h*a*u+o*d*u,R=_*d*l-h*b*l-_*a*f+o*b*f+h*a*m-o*d*m,A=e*g+i*M+s*v+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return t[0]=g*T,t[1]=(b*f*r-d*m*r-b*s*p+i*m*p+d*s*u-i*f*u)*T,t[2]=(a*m*r-b*l*r+b*s*c-i*m*c-a*s*u+i*l*u)*T,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*T,t[4]=M*T,t[5]=(h*m*r-_*f*r+_*s*p-e*m*p-h*s*u+e*f*u)*T,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*u-e*l*u)*T,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*T,t[8]=v*T,t[9]=(_*d*r-h*b*r-_*i*p+e*b*p+h*i*u-e*d*u)*T,t[10]=(o*b*r-_*a*r+_*i*c-e*b*c-o*i*u+e*a*u)*T,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*p-e*a*p)*T,t[12]=R*T,t[13]=(h*b*s-_*d*s+_*i*f-e*b*f-h*i*m+e*d*m)*T,t[14]=(_*a*s-o*b*s-_*i*l+e*b*l+o*i*m-e*a*m)*T,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*f+e*a*f)*T,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,_=r*d,b=o*h,m=o*d,u=a*d,g=l*c,M=l*h,v=l*d,R=i.x,A=i.y,T=i.z;return s[0]=(1-(b+u))*R,s[1]=(p+v)*R,s[2]=(_-M)*R,s[3]=0,s[4]=(p-v)*A,s[5]=(1-(f+u))*A,s[6]=(m+g)*A,s[7]=0,s[8]=(_+M)*T,s[9]=(m-g)*T,s[10]=(1-(f+b))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ii.set(s[0],s[1],s[2]).length(),o=Ii.set(s[4],s[5],s[6]).length(),a=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);let c=1/r,h=1/o,d=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,e.setFromRotationMatrix(sn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Cn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),p,_;if(a===Cn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Mr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Cn){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-r),f=(e+t)*c,p=(i+s)*h,_,b;if(a===Cn)_=(o+r)*d,b=-2*d;else if(a===Mr)_=r*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=b,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ii=new F,sn=new ye,Md=new F(0,0,0),Sd=new F(1,1,1),kn=new F,js=new F,We=new F,ac=new ye,oc=new $n,Ln=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oc.setFromEuler(this),this.setFromQuaternion(oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bd=0,lc=new F,Pi=new $n,Mn=new ye,tr=new F,ms=new F,Ed=new F,wd=new $n,cc=new F(1,0,0),hc=new F(0,1,0),uc=new F(0,0,1),dc={type:"added"},Td={type:"removed"},Li={type:"childadded",child:null},xa={type:"childremoved",child:null},ln=class n extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new Ln,i=new $n,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new Ot}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(cc,t)}rotateY(t){return this.rotateOnAxis(hc,t)}rotateZ(t){return this.rotateOnAxis(uc,t)}translateOnAxis(t,e){return lc.copy(t).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cc,t)}translateY(t){return this.translateOnAxis(hc,t)}translateZ(t){return this.translateOnAxis(uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?tr.copy(t):tr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ms,tr,this.up):Mn.lookAt(tr,ms,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dc),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Td),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dc),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};ln.DEFAULT_UP=new F(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new F,Sn=new F,ya=new F,bn=new F,Di=new F,Ui=new F,fc=new F,Ma=new F,Sa=new F,ba=new F,Ea=new ge,wa=new ge,Ta=new ge,di=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),rn.subVectors(t,e),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){rn.subVectors(s,e),Sn.subVectors(i,e),ya.subVectors(t,e);let o=rn.dot(rn),a=rn.dot(Sn),l=rn.dot(ya),c=Sn.dot(Sn),h=Sn.dot(ya),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ea.setScalar(0),wa.setScalar(0),Ta.setScalar(0),Ea.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,i),Ta.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ea,r.x),o.addScaledVector(wa,r.y),o.addScaledVector(Ta,r.z),o}static isFrontFacing(t,e,i,s){return rn.subVectors(i,e),Sn.subVectors(t,e),rn.cross(Sn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Di.subVectors(s,i),Ui.subVectors(r,i),Ma.subVectors(t,i);let l=Di.dot(Ma),c=Ui.dot(Ma);if(l<=0&&c<=0)return e.copy(i);Sa.subVectors(t,s);let h=Di.dot(Sa),d=Ui.dot(Sa);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Di,o);ba.subVectors(t,r);let p=Di.dot(ba),_=Ui.dot(ba);if(_>=0&&p<=_)return e.copy(r);let b=p*c-l*_;if(b<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Ui,a);let m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return fc.subVectors(r,s),a=(d-h)/(d-h+(p-_)),e.copy(s).addScaledVector(fc,a);let u=1/(m+b+f);return o=b*u,a=f*u,e.copy(i).addScaledVector(Di,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},er={h:0,s:0,l:0};function Aa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ht=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Wt.workingColorSpace){if(t=sl(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Aa(o,r,t+1/3),this.g=Aa(o,r,t),this.b=Aa(o,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=de){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){let i=lh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return Wt.fromWorkingColorSpace(De.copy(this),t),Math.round(Fe(De.r*255,0,255))*65536+Math.round(Fe(De.g*255,0,255))*256+Math.round(Fe(De.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(De.copy(this),e);let i=De.r,s=De.g,r=De.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=de){Wt.fromWorkingColorSpace(De.copy(this),t);let e=De.r,i=De.g,s=De.b;return t!==de?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(er);let i=ys(Vn.h,er.h,e),s=ys(Vn.s,er.s,e),r=ys(Vn.l,er.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new Ht;Ht.NAMES=lh;var Ad=0,Qi=class extends Yn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ns(),this.name="",this.blending=Hi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(i.blending=this.blending),this.side!==qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ba&&(i.blendDst=this.blendDst),this.blendEquation!==ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Zn=class extends Qi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var xe=new F,nr=new $t,Ze=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Jl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jl&&(t.usage=this.usage),t}};var wr=class extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Tr=class extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Je=class extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}},Cd=0,Ye=new ye,Ca=new ln,Ni=new F,Xe=new _i,gs=new _i,Re=new F,Jn=class n extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oh(t)?Tr:wr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ot().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,i){return Ye.makeTranslation(t,e,i),this.applyMatrix4(Ye),this}scale(t,e,i){return Ye.makeScale(t,e,i),this.applyMatrix4(Ye),this}lookAt(t){return Ca.lookAt(t),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Xe.min,gs.min),Xe.expandByPoint(Re),Re.addVectors(Xe.max,gs.max),Xe.expandByPoint(Re)):(Xe.expandByPoint(gs.min),Xe.expandByPoint(gs.max))}Xe.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Re.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(t,c),Re.add(Ni)),s=Math.max(s,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new F,l[L]=new F;let c=new F,h=new F,d=new F,f=new $t,p=new $t,_=new $t,b=new F,m=new F;function u(L,E,y){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,y),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,y),h.sub(c),d.sub(c),p.sub(f),_.sub(f);let C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(b.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(C),a[L].add(b),a[E].add(b),a[y].add(b),l[L].add(m),l[E].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let L=0,E=g.length;L<E;++L){let y=g[L],C=y.start,W=y.count;for(let z=C,Y=C+W;z<Y;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let M=new F,v=new F,R=new F,A=new F;function T(L){R.fromBufferAttribute(s,L),A.copy(R);let E=a[L];M.copy(E),M.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(A,E);let C=v.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,C)}for(let L=0,E=g.length;L<E;++L){let y=g[L],C=y.start,W=y.count;for(let z=C,Y=C+W;z<Y;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),b=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),p=0,_=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?p=l[b]*a.data.stride+a.offset:p=l[b]*h;for(let u=0;u<h;u++)f[_++]=c[p++]}return new Ze(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pc=new ye,ai=new Er,ir=new ws,mc=new F,sr=new F,rr=new F,ar=new F,Ra=new F,or=new F,gc=new F,lr=new F,fe=class extends ln{constructor(t=new Jn,e=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Ra.fromBufferAttribute(d,t),o?or.addScaledVector(Ra,h):or.addScaledVector(Ra.sub(e),h))}e.add(or)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ir.copy(i.boundingSphere),ir.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(ir.containsPoint(ai.origin)===!1&&(ai.intersectSphere(ir,mc)===null||ai.origin.distanceToSquared(mc)>(t.far-t.near)**2))&&(pc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(pc),!(i.boundingBox!==null&&ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,b=f.length;_<b;_++){let m=f[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,R=M;v<R;v+=3){let A=a.getX(v),T=a.getX(v+1),L=a.getX(v+2);s=cr(this,u,t,i,c,h,d,A,T,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),b=Math.min(a.count,p.start+p.count);for(let m=_,u=b;m<u;m+=3){let g=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=cr(this,o,t,i,c,h,d,g,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,b=f.length;_<b;_++){let m=f[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,R=M;v<R;v+=3){let A=v,T=v+1,L=v+2;s=cr(this,u,t,i,c,h,d,A,T,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=_,u=b;m<u;m+=3){let g=m,M=m+1,v=m+2;s=cr(this,o,t,i,c,h,d,g,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Rd(n,t,e,i,s,r,o,a){let l;if(t.side===He?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===qn,a),l===null)return null;lr.copy(a),lr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(lr);return c<e.near||c>e.far?null:{distance:c,point:lr.clone(),object:n}}function cr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,sr),n.getVertexPosition(l,rr),n.getVertexPosition(c,ar);let h=Rd(n,t,e,i,sr,rr,ar,gc);if(h){let d=new F;di.getBarycoord(gc,sr,rr,ar,d),s&&(h.uv=di.getInterpolatedAttribute(s,a,l,c,d,new $t)),r&&(h.uv1=di.getInterpolatedAttribute(r,a,l,c,d,new $t)),o&&(h.normal=di.getInterpolatedAttribute(o,a,l,c,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new F,materialIndex:0};di.getNormal(sr,rr,ar,f.normal),h.face=f,h.barycoord=d}return h}var As=class n extends Jn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,p=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(d,2));function _(b,m,u,g,M,v,R,A,T,L,E){let y=v/T,C=R/L,W=v/2,z=R/2,Y=A/2,Q=T+1,H=L+1,tt=0,k=0,at=new F;for(let lt=0;lt<H;lt++){let xt=lt*C-z;for(let Dt=0;Dt<Q;Dt++){let Xt=Dt*y-W;at[b]=Xt*g,at[m]=xt*M,at[u]=Y,c.push(at.x,at.y,at.z),at[b]=0,at[m]=0,at[u]=A>0?1:-1,h.push(at.x,at.y,at.z),d.push(Dt/T),d.push(1-lt/L),tt+=1}}for(let lt=0;lt<L;lt++)for(let xt=0;xt<T;xt++){let Dt=f+xt+Q*lt,Xt=f+xt+Q*(lt+1),X=f+(xt+1)+Q*(lt+1),j=f+(xt+1)+Q*lt;l.push(Dt,Xt,j),l.push(Xt,X,j),k+=6}a.addGroup(p,k,E),p+=k,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ji(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ne(n){let t={};for(let e=0;e<n.length;e++){let i=ji(n[e]);for(let s in i)t[s]=i[s]}return t}function Id(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ch(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var Pd={clone:ji,merge:Ne},Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends Qi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=Id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ar=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hn=new F,_c=new $t,vc=new $t,Oe=class extends Ar{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,_c,vc),e.subVectors(vc,_c)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Fi=-90,Oi=1,To=class extends ln{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(Fi,Oi,t,e);s.layers=this.layers,this.add(s);let r=new Oe(Fi,Oi,t,e);r.layers=this.layers,this.add(r);let o=new Oe(Fi,Oi,t,e);o.layers=this.layers,this.add(o);let a=new Oe(Fi,Oi,t,e);a.layers=this.layers,this.add(a);let l=new Oe(Fi,Oi,t,e);l.layers=this.layers,this.add(l);let c=new Oe(Fi,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Mr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Cr=class extends Be{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Yi,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ao=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Cr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new As(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:Wn});r.uniforms.tEquirect.value=e;let o=new fe(s,r),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=$e),new To(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Ia=new F,Ud=new F,Nd=new Ot,wn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ia.subVectors(i,e).cross(Ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ia),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Nd.getNormalMatrix(t),s=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},oi=new ws,hr=new F,Rr=class{constructor(t=new wn,e=new wn,i=new wn,s=new wn,r=new wn,o=new wn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Cn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],_=s[9],b=s[10],m=s[11],u=s[12],g=s[13],M=s[14],v=s[15];if(i[0].setComponents(l-r,f-c,m-p,v-u).normalize(),i[1].setComponents(l+r,f+c,m+p,v+u).normalize(),i[2].setComponents(l+o,f+h,m+_,v+g).normalize(),i[3].setComponents(l-o,f-h,m-_,v-g).normalize(),i[4].setComponents(l-a,f-d,m-b,v-M).normalize(),e===Cn)i[5].setComponents(l+a,f+d,m+b,v+M).normalize();else if(e===Mr)i[5].setComponents(a,d,b,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(hr.x=s.normal.x>0?t.max.x:t.min.x,hr.y=s.normal.y>0?t.max.y:t.min.y,hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Fd(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){let _=d[f],b=d[p];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++f,d[f]=b)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){let b=d[p];n.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Kn=class n extends Jn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,p=[],_=[],b=[],m=[];for(let u=0;u<h;u++){let g=u*f-o;for(let M=0;M<c;M++){let v=M*d-r;_.push(v,-g,0),b.push(0,0,1),m.push(M/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){let M=g+c*u,v=g+c*(u+1),R=g+1+c*(u+1),A=g+1+c*u;p.push(M,v,A),p.push(v,R,A)}this.setIndex(p),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(b,3)),this.setAttribute("uv",new Je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
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
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
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
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Kd=`#ifdef USE_BUMPMAP
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
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
#endif`,of=`#define PI 3.141592653589793
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
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cf=`vec3 transformedNormal = objectNormal;
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
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
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
}`,Tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rf=`uniform bool receiveShadow;
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
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
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
#endif`,Ff=`struct PhysicalMaterial {
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
}`,Of=`
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
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
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
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yf=`#if defined( USE_POINTS_UV )
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
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
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
#endif`,tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
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
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sp=`float getShadowMask() {
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
}`,bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pp=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bp=`uniform sampler2D t2D;
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`#include <common>
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
}`,Wp=`#if DEPTH_PACKING == 3200
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
}`,Xp=`#define DISTANCE
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
}`,qp=`#define DISTANCE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Kp=`#include <common>
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
}`,Qp=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,tm=`#define LAMBERT
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
}`,em=`#define MATCAP
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
}`,nm=`#define MATCAP
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
}`,im=`#define NORMAL
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
}`,sm=`#define NORMAL
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
}`,rm=`#define PHONG
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
}`,am=`#define PHONG
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
}`,om=`#define STANDARD
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
}`,lm=`#define STANDARD
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
}`,cm=`#define TOON
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
}`,hm=`#define TOON
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
}`,um=`uniform float size;
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
}`,dm=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,pm=`uniform vec3 color;
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
}`,mm=`uniform float rotation;
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
}`,gm=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Od,alphahash_pars_fragment:Bd,alphamap_fragment:zd,alphamap_pars_fragment:kd,alphatest_fragment:Vd,alphatest_pars_fragment:Hd,aomap_fragment:Gd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:qd,begin_vertex:Yd,beginnormal_vertex:$d,bsdfs:Zd,iridescence_fragment:Jd,bumpmap_pars_fragment:Kd,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:tf,clipping_planes_vertex:ef,color_fragment:nf,color_pars_fragment:sf,color_pars_vertex:rf,color_vertex:af,common:of,cube_uv_reflection_fragment:lf,defaultnormal_vertex:cf,displacementmap_pars_vertex:hf,displacementmap_vertex:uf,emissivemap_fragment:df,emissivemap_pars_fragment:ff,colorspace_fragment:pf,colorspace_pars_fragment:mf,envmap_fragment:gf,envmap_common_pars_fragment:_f,envmap_pars_fragment:vf,envmap_pars_vertex:xf,envmap_physical_pars_fragment:If,envmap_vertex:yf,fog_vertex:Mf,fog_pars_vertex:Sf,fog_fragment:bf,fog_pars_fragment:Ef,gradientmap_pars_fragment:wf,lightmap_pars_fragment:Tf,lights_lambert_fragment:Af,lights_lambert_pars_fragment:Cf,lights_pars_begin:Rf,lights_toon_fragment:Pf,lights_toon_pars_fragment:Lf,lights_phong_fragment:Df,lights_phong_pars_fragment:Uf,lights_physical_fragment:Nf,lights_physical_pars_fragment:Ff,lights_fragment_begin:Of,lights_fragment_maps:Bf,lights_fragment_end:zf,logdepthbuf_fragment:kf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:Hf,logdepthbuf_vertex:Gf,map_fragment:Wf,map_pars_fragment:Xf,map_particle_fragment:qf,map_particle_pars_fragment:Yf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:Zf,morphinstance_vertex:Jf,morphcolor_vertex:Kf,morphnormal_vertex:Qf,morphtarget_pars_vertex:jf,morphtarget_vertex:tp,normal_fragment_begin:ep,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:sp,normal_vertex:rp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:hp,opaque_fragment:up,packing:dp,premultiplied_alpha_fragment:fp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:yp,shadowmap_vertex:Mp,shadowmask_pars_fragment:Sp,skinbase_vertex:bp,skinning_pars_vertex:Ep,skinning_vertex:wp,skinnormal_vertex:Tp,specularmap_fragment:Ap,specularmap_pars_fragment:Cp,tonemapping_fragment:Rp,tonemapping_pars_fragment:Ip,transmission_fragment:Pp,transmission_pars_fragment:Lp,uv_pars_fragment:Dp,uv_pars_vertex:Up,uv_vertex:Np,worldpos_vertex:Fp,background_vert:Op,background_frag:Bp,backgroundCube_vert:zp,backgroundCube_frag:kp,cube_vert:Vp,cube_frag:Hp,depth_vert:Gp,depth_frag:Wp,distanceRGBA_vert:Xp,distanceRGBA_frag:qp,equirect_vert:Yp,equirect_frag:$p,linedashed_vert:Zp,linedashed_frag:Jp,meshbasic_vert:Kp,meshbasic_frag:Qp,meshlambert_vert:jp,meshlambert_frag:tm,meshmatcap_vert:em,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:sm,meshphong_vert:rm,meshphong_frag:am,meshphysical_vert:om,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:hm,points_vert:um,points_frag:dm,shadow_vert:fm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},ot={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},pn={basic:{uniforms:Ne([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ne([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ne([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ne([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ne([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ne([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ne([ot.points,ot.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ne([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ne([ot.common,ot.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ne([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ne([ot.sprite,ot.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ne([ot.common,ot.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ne([ot.lights,ot.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};pn.physical={uniforms:Ne([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var ur={r:0,b:0,g:0},li=new Ln,_m=new ye;function vm(n,t,e,i,s,r,o){let a=new Ht(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function _(g){let M=g.isScene===!0?g.background:null;return M&&M.isTexture&&(M=(g.backgroundBlurriness>0?e:t).get(M)),M}function b(g){let M=!1,v=_(g);v===null?u(a,l):v&&v.isColor&&(u(v,1),M=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(g,M){let v=_(M);v&&(v.isCubeTexture||v.mapping===Br)?(h===void 0&&(h=new fe(new As(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:ji(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(M.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(li)),h.material.toneMapped=Wt.getTransfer(v.colorSpace)!==jt,(d!==v||f!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,p=n.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new fe(new Kn(2,2),new ze({name:"BackgroundMaterial",uniforms:ji(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(v.colorSpace)!==jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,M){g.getRGB(ur,ch(n)),i.buffers.color.setClear(ur.r,ur.g,ur.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(g,M=1){a.set(g),l=M,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:b,addToRenderList:m}}function xm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(y,C,W,z,Y){let Q=!1,H=d(z,W,C);r!==H&&(r=H,c(r.object)),Q=p(y,z,W,Y),Q&&_(y,z,W,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(y,C,W,z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function d(y,C,W){let z=W.wireframe===!0,Y=i[y.id];Y===void 0&&(Y={},i[y.id]=Y);let Q=Y[C.id];Q===void 0&&(Q={},Y[C.id]=Q);let H=Q[z];return H===void 0&&(H=f(l()),Q[z]=H),H}function f(y){let C=[],W=[],z=[];for(let Y=0;Y<e;Y++)C[Y]=0,W[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:W,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,C,W,z){let Y=r.attributes,Q=C.attributes,H=0,tt=W.getAttributes();for(let k in tt)if(tt[k].location>=0){let lt=Y[k],xt=Q[k];if(xt===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor)),lt===void 0||lt.attribute!==xt||xt&&lt.data!==xt.data)return!0;H++}return r.attributesNum!==H||r.index!==z}function _(y,C,W,z){let Y={},Q=C.attributes,H=0,tt=W.getAttributes();for(let k in tt)if(tt[k].location>=0){let lt=Q[k];lt===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor));let xt={};xt.attribute=lt,lt&&lt.data&&(xt.data=lt.data),Y[k]=xt,H++}r.attributes=Y,r.attributesNum=H,r.index=z}function b(){let y=r.newAttributes;for(let C=0,W=y.length;C<W;C++)y[C]=0}function m(y){u(y,0)}function u(y,C){let W=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;W[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),Y[y]!==C&&(n.vertexAttribDivisor(y,C),Y[y]=C)}function g(){let y=r.newAttributes,C=r.enabledAttributes;for(let W=0,z=C.length;W<z;W++)C[W]!==y[W]&&(n.disableVertexAttribArray(W),C[W]=0)}function M(y,C,W,z,Y,Q,H){H===!0?n.vertexAttribIPointer(y,C,W,Y,Q):n.vertexAttribPointer(y,C,W,z,Y,Q)}function v(y,C,W,z){b();let Y=z.attributes,Q=W.getAttributes(),H=C.defaultAttributeValues;for(let tt in Q){let k=Q[tt];if(k.location>=0){let at=Y[tt];if(at===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){let lt=at.normalized,xt=at.itemSize,Dt=t.get(at);if(Dt===void 0)continue;let Xt=Dt.buffer,X=Dt.type,j=Dt.bytesPerElement,_t=X===n.INT||X===n.UNSIGNED_INT||at.gpuType===Qo;if(at.isInterleavedBufferAttribute){let $=at.data,V=$.stride,it=at.offset;if($.isInstancedInterleavedBuffer){for(let pt=0;pt<k.locationSize;pt++)u(k.location+pt,$.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let pt=0;pt<k.locationSize;pt++)m(k.location+pt);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let pt=0;pt<k.locationSize;pt++)M(k.location+pt,xt/k.locationSize,X,lt,V*j,(it+xt/k.locationSize*pt)*j,_t)}else{if(at.isInstancedBufferAttribute){for(let $=0;$<k.locationSize;$++)u(k.location+$,at.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let $=0;$<k.locationSize;$++)m(k.location+$);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let $=0;$<k.locationSize;$++)M(k.location+$,xt/k.locationSize,X,lt,xt*j,xt/k.locationSize*$*j,_t)}}else if(H!==void 0){let lt=H[tt];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(k.location,lt);break;case 3:n.vertexAttrib3fv(k.location,lt);break;case 4:n.vertexAttrib4fv(k.location,lt);break;default:n.vertexAttrib1fv(k.location,lt)}}}}g()}function R(){L();for(let y in i){let C=i[y];for(let W in C){let z=C[W];for(let Y in z)h(z[Y].object),delete z[Y];delete C[W]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;let C=i[y.id];for(let W in C){let z=C[W];for(let Y in z)h(z[Y].object),delete z[Y];delete C[W]}delete i[y.id]}function T(y){for(let C in i){let W=i[C];if(W[y.id]===void 0)continue;let z=W[y.id];for(let Y in z)h(z[Y].object),delete z[Y];delete W[y.id]}}function L(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:m,disableUnusedAttributes:g}}function ym(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];e.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let _=0;for(let b=0;b<d;b++)_+=h[b]*f[b];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Mm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==an&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let L=T===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==In&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!L)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:R,maxSamples:A}}function Sm(n){let t=this,e=null,i=0,s=!1,r=!1,o=new wn,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let g=r?0:i,M=g*4,v=u.clippingState||null;l.value=v,v=h(_,f,M,p);for(let R=0;R!==M;++R)v[R]=e[R];u.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,_){let b=d!==null?d.length:0,m=null;if(b!==0){if(m=l.value,_!==!0||m===null){let u=p+b*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,v=p;M!==b;++M,v+=4)o.copy(d[M]).applyMatrix4(g,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}function bm(n){let t=new WeakMap;function e(o,a){return a===qa?o.mapping=Yi:a===Ya&&(o.mapping=$i),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===qa||a===Ya)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ao(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Co=class extends Ar{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ki=4,xc=[.125,.215,.35,.446,.526,.582],fi=20,Pa=new Co,yc=new Ht,La=null,Da=0,Ua=0,Na=!1,hi=(1+Math.sqrt(5))/2,Bi=1/hi,Mc=[new F(-hi,Bi,0),new F(hi,Bi,0),new F(-Bi,0,hi),new F(Bi,0,hi),new F(0,hi,-Bi),new F(0,hi,Bi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Ir=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(La,Da,Ua),this._renderer.xr.enabled=Na,t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Ps,format:an,colorSpace:es,depthBuffer:!1},s=Sc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Em(r)),this._blurMaterial=wm(r,t,e)}return s}_compileMaterial(t){let e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,Pa)}_sceneToCubeUV(t,e,i,s){let a=new Oe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(yc),h.toneMapping=Xn,h.autoClear=!1;let p=new Zn({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),_=new fe(new As,p),b=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,b=!0):(p.color.copy(yc),b=!0);for(let u=0;u<6;u++){let g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let M=this._cubeSize;dr(s,g*M,u>2?M:0,M,M),h.setRenderTarget(s),b&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Yi||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;dr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Pa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mc[(s-r-1)%Mc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new fe(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fi-1),b=r/_,m=isFinite(r)?1+Math.floor(h*b):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);let u=[],g=0;for(let T=0;T<fi;++T){let L=T/b,E=Math.exp(-L*L/2);u.push(E),T===0?g+=E:T<m&&(g+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;let v=this._sizeLods[s],R=3*v*(s>M-ki?s-M+ki:0),A=4*(this._cubeSize-v);dr(e,R,A,3*v,2*v),l.setRenderTarget(e),l.render(d,Pa)}};function Em(n){let t=[],e=[],i=[],s=n,r=n-ki+1+xc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ki?l=xc[o-n+ki-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,b=3,m=2,u=1,g=new Float32Array(b*_*p),M=new Float32Array(m*_*p),v=new Float32Array(u*_*p);for(let A=0;A<p;A++){let T=A%3*2/3-1,L=A>2?0:-1,E=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];g.set(E,b*_*A),M.set(f,m*_*A);let y=[A,A,A,A,A,A];v.set(y,u*_*A)}let R=new Jn;R.setAttribute("position",new Ze(g,b)),R.setAttribute("uv",new Ze(M,m)),R.setAttribute("faceIndex",new Ze(v,u)),t.push(R),s>ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Sc(n,t,e){let i=new Pn(n,t,e);return i.texture.mapping=Br,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function wm(n,t,e){let i=new Float32Array(fi),s=new F(0,1,0);return new ze({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function bc(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ec(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function rl(){return`

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
	`}function Tm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===qa||l===Ya,h=l===Yi||l===$i;if(c||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ir(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ir(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Am(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&_s("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Cm(n,t,e,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let b=f.morphAttributes[_];for(let m=0,u=b.length;m<u;m++)t.remove(b[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)t.update(f[_],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let _ in p){let b=p[_];for(let m=0,u=b.length;m<u;m++)t.update(b[m],n.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,_=d.attributes.position,b=0;if(p!==null){let g=p.array;b=p.version;for(let M=0,v=g.length;M<v;M+=3){let R=g[M+0],A=g[M+1],T=g[M+2];f.push(R,A,A,T,T,R)}}else if(_!==void 0){let g=_.array;b=_.version;for(let M=0,v=g.length/3-1;M<v;M+=3){let R=M+0,A=M+1,T=M+2;f.push(R,A,A,T,T,R)}}else return;let m=new(oh(f)?Tr:wr)(f,1);m.version=b;let u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Rm(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),e.update(p,i,_))}function h(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];e.update(m,i,1)}function d(f,p,_,b){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],b[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,b,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*b[g];e.update(u,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Im(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Pm(n,t,e){let i=new WeakMap,s=new ge;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let E=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],M=0;p===!0&&(M=1),_===!0&&(M=2),b===!0&&(M=3);let v=a.attributes.position.count*M,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*R*4*d),T=new br(A,v,R,d);T.type=An,T.needsUpdate=!0;let L=M*4;for(let y=0;y<d;y++){let C=m[y],W=u[y],z=g[y],Y=v*R*4*y;for(let Q=0;Q<C.count;Q++){let H=Q*L;p===!0&&(s.fromBufferAttribute(C,Q),A[Y+H+0]=s.x,A[Y+H+1]=s.y,A[Y+H+2]=s.z,A[Y+H+3]=0),_===!0&&(s.fromBufferAttribute(W,Q),A[Y+H+4]=s.x,A[Y+H+5]=s.y,A[Y+H+6]=s.z,A[Y+H+7]=0),b===!0&&(s.fromBufferAttribute(z,Q),A[Y+H+8]=s.x,A[Y+H+9]=s.y,A[Y+H+10]=s.z,A[Y+H+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:T,size:new $t(v,R)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Lm(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Pr=class extends Be{constructor(t,e,i,s,r,o,a,l,c,h=Gi){if(h!==Gi&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Gi&&(i=gi),i===void 0&&h===Ki&&(i=Ji),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},uh=new Be,wc=new Pr(1,1),dh=new br,fh=new wo,ph=new Cr,Tc=[],Ac=[],Cc=new Float32Array(16),Rc=new Float32Array(9),Ic=new Float32Array(4);function is(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Tc[s];if(r===void 0&&(r=new Float32Array(s),Tc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function kr(n,t){let e=Ac[t];e===void 0&&(e=new Int32Array(t),Ac[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Dm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Um(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function Nm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function Fm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function Om(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;Ic.set(i),n.uniformMatrix2fv(this.addr,!1,Ic),we(e,i)}}function Bm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;Rc.set(i),n.uniformMatrix3fv(this.addr,!1,Rc),we(e,i)}}function zm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;Cc.set(i),n.uniformMatrix4fv(this.addr,!1,Cc),we(e,i)}}function km(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Vm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function Hm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function Gm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function Wm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Xm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function qm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function Ym(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function $m(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(wc.compareFunction=rh,r=wc):r=uh,e.setTexture2D(t||r,s)}function Zm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||fh,s)}function Jm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ph,s)}function Km(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||dh,s)}function Qm(n){switch(n){case 5126:return Dm;case 35664:return Um;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return km;case 35667:case 35671:return Vm;case 35668:case 35672:return Hm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Km}}function jm(n,t){n.uniform1fv(this.addr,t)}function tg(n,t){let e=is(t,this.size,2);n.uniform2fv(this.addr,e)}function eg(n,t){let e=is(t,this.size,3);n.uniform3fv(this.addr,e)}function ng(n,t){let e=is(t,this.size,4);n.uniform4fv(this.addr,e)}function ig(n,t){let e=is(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function sg(n,t){let e=is(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function rg(n,t){let e=is(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ag(n,t){n.uniform1iv(this.addr,t)}function og(n,t){n.uniform2iv(this.addr,t)}function lg(n,t){n.uniform3iv(this.addr,t)}function cg(n,t){n.uniform4iv(this.addr,t)}function hg(n,t){n.uniform1uiv(this.addr,t)}function ug(n,t){n.uniform2uiv(this.addr,t)}function dg(n,t){n.uniform3uiv(this.addr,t)}function fg(n,t){n.uniform4uiv(this.addr,t)}function pg(n,t,e){let i=this.cache,s=t.length,r=kr(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||uh,r[o])}function mg(n,t,e){let i=this.cache,s=t.length,r=kr(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||fh,r[o])}function gg(n,t,e){let i=this.cache,s=t.length,r=kr(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ph,r[o])}function _g(n,t,e){let i=this.cache,s=t.length,r=kr(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||dh,r[o])}function vg(n){switch(n){case 5126:return jm;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return _g}}var Ro=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Qm(e.type)}},Io=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vg(e.type)}},Po=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Fa=/(\w+)(\])?(\[|\.)?/g;function Pc(n,t){n.seq.push(t),n.map[t.id]=t}function xg(n,t,e){let i=n.name,s=i.length;for(Fa.lastIndex=0;;){let r=Fa.exec(i),o=Fa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Pc(e,c===void 0?new Ro(a,n,t):new Io(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Po(a),Pc(e,d)),e=d}}}var Xi=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);xg(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Lc(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var yg=37297,Mg=0;function Sg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Dc=new Ot;function bg(n){Wt._getMatrix(Dc,Wt.workingColorSpace,n);let t=`mat3( ${Dc.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(n)){case zr:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Uc(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Sg(n.getShaderSource(t),o)}else return s}function Eg(n,t){let e=bg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wg(n,t){let e;switch(t){case Du:e="Linear";break;case Uu:e="Reinhard";break;case Nu:e="Cineon";break;case Fu:e="ACESFilmic";break;case Bu:e="AgX";break;case zu:e="Neutral";break;case Ou:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fr=new F;function Tg(){Wt.getLuminanceCoefficients(fr);let n=fr.x.toFixed(4),t=fr.y.toFixed(4),e=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ag(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function Cg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Rg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function vs(n){return n!==""}function Nc(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(n){return n.replace(Ig,Lg)}var Pg=new Map;function Lg(n,t){let e=Vt[t];if(e===void 0){let i=Pg.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Lo(e)}var Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(n){return n.replace(Dg,Ug)}function Ug(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ng(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===du?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Fg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yi:case $i:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Og(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function Bg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yc:t="ENVMAP_BLENDING_MULTIPLY";break;case Pu:t="ENVMAP_BLENDING_MIX";break;case Lu:t="ENVMAP_BLENDING_ADD";break}return t}function zg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function kg(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ng(e),c=Fg(e),h=Og(e),d=Bg(e),f=zg(e),p=Ag(e),_=Cg(r),b=s.createProgram(),m,u,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vs).join(`
`),u.length>0&&(u+=`
`)):(m=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),u=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Eg("linearToOutputTexel",e.outputColorSpace),Tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),o=Lo(o),o=Nc(o,e),o=Fc(o,e),a=Lo(a),a=Nc(a,e),a=Fc(a,e),o=Oc(o),a=Oc(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let M=g+m+o,v=g+u+a,R=Lc(s,s.VERTEX_SHADER,M),A=Lc(s,s.FRAGMENT_SHADER,v);s.attachShader(b,R),s.attachShader(b,A),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function T(C){if(n.debug.checkShaderErrors){let W=s.getProgramInfoLog(b).trim(),z=s.getShaderInfoLog(R).trim(),Y=s.getShaderInfoLog(A).trim(),Q=!0,H=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,R,A);else{let tt=Uc(s,R,"vertex"),k=Uc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+tt+`
`+k)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||Y==="")&&(H=!1);H&&(C.diagnostics={runnable:Q,programLog:W,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:u}})}s.deleteShader(R),s.deleteShader(A),L=new Xi(s,b),E=Rg(s,b)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(b,yg)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mg++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=A,this}var Vg=0,Do=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Uo(t),e.set(t,i)),i}},Uo=class{constructor(t){this.id=Vg++,this.code=t,this.usedTimes=0}};function Hg(n,t,e,i,s,r,o){let a=new Ts,l=new Do,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,C,W,z){let Y=W.fog,Q=z.geometry,H=E.isMeshStandardMaterial?W.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||H),k=tt&&tt.mapping===Br?tt.image.height:null,at=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let lt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,xt=lt!==void 0?lt.length:0,Dt=0;Q.morphAttributes.position!==void 0&&(Dt=1),Q.morphAttributes.normal!==void 0&&(Dt=2),Q.morphAttributes.color!==void 0&&(Dt=3);let Xt,X,j,_t;if(at){let Qt=pn[at];Xt=Qt.vertexShader,X=Qt.fragmentShader}else Xt=E.vertexShader,X=E.fragmentShader,l.update(E),j=l.getVertexShaderID(E),_t=l.getFragmentShaderID(E);let $=n.getRenderTarget(),V=n.state.buffers.depth.getReversed(),it=z.isInstancedMesh===!0,pt=z.isBatchedMesh===!0,Ut=!!E.map,At=!!E.matcap,Zt=!!tt,P=!!E.aoMap,ee=!!E.lightMap,Bt=!!E.bumpMap,Rt=!!E.normalMap,Tt=!!E.displacementMap,It=!!E.emissiveMap,bt=!!E.metalnessMap,w=!!E.roughnessMap,x=E.anisotropy>0,N=E.clearcoat>0,Z=E.dispersion>0,K=E.iridescence>0,q=E.sheen>0,vt=E.transmission>0,st=x&&!!E.anisotropyMap,ht=N&&!!E.clearcoatMap,zt=N&&!!E.clearcoatNormalMap,et=N&&!!E.clearcoatRoughnessMap,mt=K&&!!E.iridescenceMap,Ct=K&&!!E.iridescenceThicknessMap,Pt=q&&!!E.sheenColorMap,gt=q&&!!E.sheenRoughnessMap,Gt=!!E.specularMap,kt=!!E.specularColorMap,ne=!!E.specularIntensityMap,I=vt&&!!E.transmissionMap,ct=vt&&!!E.thicknessMap,G=!!E.gradientMap,J=!!E.alphaMap,ft=E.alphaTest>0,ut=!!E.alphaHash,Nt=!!E.extensions,ue=Xn;E.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ue=n.toneMapping);let Pe={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:Xt,fragmentShader:X,defines:E.defines,customVertexShaderID:j,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:pt,batchingColor:pt&&z._colorsTexture!==null,instancing:it,instancingColor:it&&z.instanceColor!==null,instancingMorph:it&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:es,alphaToCoverage:!!E.alphaToCoverage,map:Ut,matcap:At,envMap:Zt,envMapMode:Zt&&tt.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:ee,bumpMap:Bt,normalMap:Rt,displacementMap:f&&Tt,emissiveMap:It,normalMapObjectSpace:Rt&&E.normalMapType===Wu,normalMapTangentSpace:Rt&&E.normalMapType===Gu,metalnessMap:bt,roughnessMap:w,anisotropy:x,anisotropyMap:st,clearcoat:N,clearcoatMap:ht,clearcoatNormalMap:zt,clearcoatRoughnessMap:et,dispersion:Z,iridescence:K,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:q,sheenColorMap:Pt,sheenRoughnessMap:gt,specularMap:Gt,specularColorMap:kt,specularIntensityMap:ne,transmission:vt,transmissionMap:I,thicknessMap:ct,gradientMap:G,opaque:E.transparent===!1&&E.blending===Hi&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ut,combine:E.combine,mapUv:Ut&&b(E.map.channel),aoMapUv:P&&b(E.aoMap.channel),lightMapUv:ee&&b(E.lightMap.channel),bumpMapUv:Bt&&b(E.bumpMap.channel),normalMapUv:Rt&&b(E.normalMap.channel),displacementMapUv:Tt&&b(E.displacementMap.channel),emissiveMapUv:It&&b(E.emissiveMap.channel),metalnessMapUv:bt&&b(E.metalnessMap.channel),roughnessMapUv:w&&b(E.roughnessMap.channel),anisotropyMapUv:st&&b(E.anisotropyMap.channel),clearcoatMapUv:ht&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:zt&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:gt&&b(E.sheenRoughnessMap.channel),specularMapUv:Gt&&b(E.specularMap.channel),specularColorMapUv:kt&&b(E.specularColorMap.channel),specularIntensityMapUv:ne&&b(E.specularIntensityMap.channel),transmissionMapUv:I&&b(E.transmissionMap.channel),thicknessMapUv:ct&&b(E.thicknessMap.channel),alphaMapUv:J&&b(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Rt||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(Ut||J),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:V,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Dt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:Ut&&E.map.isVideoTexture===!0&&Wt.getTransfer(E.map.colorSpace)===jt,decodeVideoTextureEmissive:It&&E.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(E.emissiveMap.colorSpace)===jt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Tn,flipSided:E.side===He,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Nt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&E.extensions.multiDraw===!0||pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function u(E){let y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(let C in E.defines)y.push(C),y.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(g(y,E),M(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function g(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function M(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){let y=_[E.type],C;if(y){let W=pn[y];C=Pd.clone(W.uniforms)}else C=E.uniforms;return C}function R(E,y){let C;for(let W=0,z=h.length;W<z;W++){let Y=h[W];if(Y.cacheKey===y){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new kg(n,y,E,r),h.push(C)),C}function A(E){if(--E.usedTimes===0){let y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function T(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:L}}function Gg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Wg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function zc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function kc(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,p,_,b,m){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:b,group:m},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=b,u.group=m),t++,u}function a(d,f,p,_,b,m){let u=o(d,f,p,_,b,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(d,f,p,_,b,m){let u=o(d,f,p,_,b,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||Wg),i.length>1&&i.sort(f||zc),s.length>1&&s.sort(f||zc)}function h(){for(let d=t,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Xg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new kc,n.set(i,[o])):s>=r.length?(o=new kc,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function qg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Ht};break;case"SpotLight":e={position:new F,direction:new F,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function Yg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var $g=0;function Zg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Jg(n){let t=new qg,e=Yg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new ye,o=new ye;function a(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,b=0,m=0,u=0,g=0,M=0,v=0,R=0,A=0,T=0;c.sort(Zg);for(let E=0,y=c.length;E<y;E++){let C=c[E],W=C.color,z=C.intensity,Y=C.distance,Q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=W.r*z,d+=W.g*z,f+=W.b*z;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],z);T++}else if(C.isDirectionalLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let tt=C.shadow,k=e.get(C);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=C.shadow.matrix,g++}i.directional[p]=H,p++}else if(C.isSpotLight){let H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(W).multiplyScalar(z),H.distance=Y,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[b]=H;let tt=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,tt.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[b]=tt.matrix,C.castShadow){let k=e.get(C);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,i.spotShadow[b]=k,i.spotShadowMap[b]=Q,v++}b++}else if(C.isRectAreaLight){let H=t.get(C);H.color.copy(W).multiplyScalar(z),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){let tt=C.shadow,k=e.get(C);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,k.shadowCameraNear=tt.camera.near,k.shadowCameraFar=tt.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=Q,i.pointShadowMatrix[_]=C.shadow.matrix,M++}i.point[_]=H,_++}else if(C.isHemisphereLight){let H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(z),H.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[u]=H,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==b||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==g||L.numPointShadows!==M||L.numSpotShadows!==v||L.numSpotMaps!==R||L.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=b,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,L.directionalLength=p,L.pointLength=_,L.spotLength=b,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=g,L.numPointShadows=M,L.numSpotShadows=v,L.numSpotMaps=R,L.numLightProbes=T,i.version=$g++)}function l(c,h){let d=0,f=0,p=0,_=0,b=0,m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){let M=c[u];if(M.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let v=i.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let v=i.hemi[b];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),b++}}}return{setup:a,setupView:l,state:i}}function Vc(n){let t=new Jg(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Kg(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Vc(n),t.set(s,[a])):r>=o.length?(a=new Vc(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var No=class extends Qi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fo=class extends Qi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
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
}`;function t0(n,t,e){let i=new Rr,s=new $t,r=new $t,o=new ge,a=new No({depthPacking:Hu}),l=new Fo,c={},h=e.maxTextureSize,d={[qn]:He,[He]:qn,[Tn]:Tn},f=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Qg,fragmentShader:jg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Jn;_.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new fe(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let u=this.type;this.render=function(A,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Wn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let z=u!==En&&this.type===En,Y=u===En&&this.type!==En;for(let Q=0,H=A.length;Q<H;Q++){let tt=A[Q],k=tt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let at=k.getFrameExtents();if(s.multiply(at),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,k.mapSize.y=r.y)),k.map===null||z===!0||Y===!0){let xt=this.type!==En?{minFilter:on,magFilter:on}:{};k.map!==null&&k.map.dispose(),k.map=new Pn(s.x,s.y,xt),k.map.texture.name=tt.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let lt=k.getViewportCount();for(let xt=0;xt<lt;xt++){let Dt=k.getViewport(xt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),W.viewport(o),k.updateMatrices(tt,xt),i=k.getFrustum(),v(T,L,k.camera,tt,this.type)}k.isPointLightShadow!==!0&&this.type===En&&g(k,L),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(E,y,C)};function g(A,T){let L=t.update(b);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,L,f,b,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,L,p,b,null)}function M(A,T,L,E){let y=null,C=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=L.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let W=y.uuid,z=T.uuid,Y=c[W];Y===void 0&&(Y={},c[W]=Y);let Q=Y[z];Q===void 0&&(Q=y.clone(),Y[z]=Q,T.addEventListener("dispose",R)),y=Q}if(y.visible=T.visible,y.wireframe=T.wireframe,E===En?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let W=n.properties.get(y);W.light=L}return y}function v(A,T,L,E,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===En)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let z=t.update(A),Y=A.material;if(Array.isArray(Y)){let Q=z.groups;for(let H=0,tt=Q.length;H<tt;H++){let k=Q[H],at=Y[k.materialIndex];if(at&&at.visible){let lt=M(A,at,E,y);A.onBeforeShadow(n,A,T,L,z,lt,k),n.renderBufferDirect(L,null,z,lt,A,k),A.onAfterShadow(n,A,T,L,z,lt,k)}}}else if(Y.visible){let Q=M(A,Y,E,y);A.onBeforeShadow(n,A,T,L,z,Q,null),n.renderBufferDirect(L,null,z,Q,A,null),A.onAfterShadow(n,A,T,L,z,Q,null)}}let W=A.children;for(let z=0,Y=W.length;z<Y;z++)v(W[z],T,L,E,y)}function R(A){A.target.removeEventListener("dispose",R);for(let L in c){let E=c[L],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}var e0={[za]:ka,[Va]:Wa,[Ha]:Xa,[qi]:Ga,[ka]:za,[Wa]:Va,[Xa]:Ha,[Ga]:qi};function n0(n,t){function e(){let I=!1,ct=new ge,G=null,J=new ge(0,0,0,0);return{setMask:function(ft){G!==ft&&!I&&(n.colorMask(ft,ft,ft,ft),G=ft)},setLocked:function(ft){I=ft},setClear:function(ft,ut,Nt,ue,Pe){Pe===!0&&(ft*=ue,ut*=ue,Nt*=ue),ct.set(ft,ut,Nt,ue),J.equals(ct)===!1&&(n.clearColor(ft,ut,Nt,ue),J.copy(ct))},reset:function(){I=!1,G=null,J.set(-1,0,0,0)}}}function i(){let I=!1,ct=!1,G=null,J=null,ft=null;return{setReversed:function(ut){if(ct!==ut){let Nt=t.get("EXT_clip_control");ct?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);let ue=ft;ft=null,this.setClear(ue)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?$(n.DEPTH_TEST):V(n.DEPTH_TEST)},setMask:function(ut){G!==ut&&!I&&(n.depthMask(ut),G=ut)},setFunc:function(ut){if(ct&&(ut=e0[ut]),J!==ut){switch(ut){case za:n.depthFunc(n.NEVER);break;case ka:n.depthFunc(n.ALWAYS);break;case Va:n.depthFunc(n.LESS);break;case qi:n.depthFunc(n.LEQUAL);break;case Ha:n.depthFunc(n.EQUAL);break;case Ga:n.depthFunc(n.GEQUAL);break;case Wa:n.depthFunc(n.GREATER);break;case Xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ut}},setLocked:function(ut){I=ut},setClear:function(ut){ft!==ut&&(ct&&(ut=1-ut),n.clearDepth(ut),ft=ut)},reset:function(){I=!1,G=null,J=null,ft=null,ct=!1}}}function s(){let I=!1,ct=null,G=null,J=null,ft=null,ut=null,Nt=null,ue=null,Pe=null;return{setTest:function(Qt){I||(Qt?$(n.STENCIL_TEST):V(n.STENCIL_TEST))},setMask:function(Qt){ct!==Qt&&!I&&(n.stencilMask(Qt),ct=Qt)},setFunc:function(Qt,tn,_n){(G!==Qt||J!==tn||ft!==_n)&&(n.stencilFunc(Qt,tn,_n),G=Qt,J=tn,ft=_n)},setOp:function(Qt,tn,_n){(ut!==Qt||Nt!==tn||ue!==_n)&&(n.stencilOp(Qt,tn,_n),ut=Qt,Nt=tn,ue=_n)},setLocked:function(Qt){I=Qt},setClear:function(Qt){Pe!==Qt&&(n.clearStencil(Qt),Pe=Qt)},reset:function(){I=!1,ct=null,G=null,J=null,ft=null,ut=null,Nt=null,ue=null,Pe=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],_=null,b=!1,m=null,u=null,g=null,M=null,v=null,R=null,A=null,T=new Ht(0,0,0),L=0,E=!1,y=null,C=null,W=null,z=null,Y=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,tt=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=tt>=1):k.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=tt>=2);let at=null,lt={},xt=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),Xt=new ge().fromArray(xt),X=new ge().fromArray(Dt);function j(I,ct,G,J){let ft=new Uint8Array(4),ut=n.createTexture();n.bindTexture(I,ut),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<G;Nt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(ct+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return ut}let _t={};_t[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(n.DEPTH_TEST),o.setFunc(qi),Bt(!1),Rt(Hl),$(n.CULL_FACE),P(Wn);function $(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function V(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function it(I,ct){return d[I]!==ct?(n.bindFramebuffer(I,ct),d[I]=ct,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ct),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function pt(I,ct){let G=p,J=!1;if(I){G=f.get(ct),G===void 0&&(G=[],f.set(ct,G));let ft=I.textures;if(G.length!==ft.length||G[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Nt=ft.length;ut<Nt;ut++)G[ut]=n.COLOR_ATTACHMENT0+ut;G.length=ft.length,J=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,J=!0);J&&n.drawBuffers(G)}function Ut(I){return _!==I?(n.useProgram(I),_=I,!0):!1}let At={[ui]:n.FUNC_ADD,[pu]:n.FUNC_SUBTRACT,[mu]:n.FUNC_REVERSE_SUBTRACT};At[gu]=n.MIN,At[_u]=n.MAX;let Zt={[vu]:n.ZERO,[xu]:n.ONE,[yu]:n.SRC_COLOR,[Oa]:n.SRC_ALPHA,[Tu]:n.SRC_ALPHA_SATURATE,[Eu]:n.DST_COLOR,[Su]:n.DST_ALPHA,[Mu]:n.ONE_MINUS_SRC_COLOR,[Ba]:n.ONE_MINUS_SRC_ALPHA,[wu]:n.ONE_MINUS_DST_COLOR,[bu]:n.ONE_MINUS_DST_ALPHA,[Au]:n.CONSTANT_COLOR,[Cu]:n.ONE_MINUS_CONSTANT_COLOR,[Ru]:n.CONSTANT_ALPHA,[Iu]:n.ONE_MINUS_CONSTANT_ALPHA};function P(I,ct,G,J,ft,ut,Nt,ue,Pe,Qt){if(I===Wn){b===!0&&(V(n.BLEND),b=!1);return}if(b===!1&&($(n.BLEND),b=!0),I!==fu){if(I!==m||Qt!==E){if((u!==ui||v!==ui)&&(n.blendEquation(n.FUNC_ADD),u=ui,v=ui),Qt)switch(I){case Hi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFunc(n.ONE,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Hi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}g=null,M=null,R=null,A=null,T.set(0,0,0),L=0,m=I,E=Qt}return}ft=ft||ct,ut=ut||G,Nt=Nt||J,(ct!==u||ft!==v)&&(n.blendEquationSeparate(At[ct],At[ft]),u=ct,v=ft),(G!==g||J!==M||ut!==R||Nt!==A)&&(n.blendFuncSeparate(Zt[G],Zt[J],Zt[ut],Zt[Nt]),g=G,M=J,R=ut,A=Nt),(ue.equals(T)===!1||Pe!==L)&&(n.blendColor(ue.r,ue.g,ue.b,Pe),T.copy(ue),L=Pe),m=I,E=!1}function ee(I,ct){I.side===Tn?V(n.CULL_FACE):$(n.CULL_FACE);let G=I.side===He;ct&&(G=!G),Bt(G),I.blending===Hi&&I.transparent===!1?P(Wn):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),It(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):V(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function Rt(I){I!==hu?($(n.CULL_FACE),I!==C&&(I===Hl?n.cullFace(n.BACK):I===uu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):V(n.CULL_FACE),C=I}function Tt(I){I!==W&&(H&&n.lineWidth(I),W=I)}function It(I,ct,G){I?($(n.POLYGON_OFFSET_FILL),(z!==ct||Y!==G)&&(n.polygonOffset(ct,G),z=ct,Y=G)):V(n.POLYGON_OFFSET_FILL)}function bt(I){I?$(n.SCISSOR_TEST):V(n.SCISSOR_TEST)}function w(I){I===void 0&&(I=n.TEXTURE0+Q-1),at!==I&&(n.activeTexture(I),at=I)}function x(I,ct,G){G===void 0&&(at===null?G=n.TEXTURE0+Q-1:G=at);let J=lt[G];J===void 0&&(J={type:void 0,texture:void 0},lt[G]=J),(J.type!==I||J.texture!==ct)&&(at!==G&&(n.activeTexture(G),at=G),n.bindTexture(I,ct||_t[I]),J.type=I,J.texture=ct)}function N(){let I=lt[at];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(I){Xt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Xt.copy(I))}function gt(I){X.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function Gt(I,ct){let G=c.get(ct);G===void 0&&(G=new WeakMap,c.set(ct,G));let J=G.get(I);J===void 0&&(J=n.getUniformBlockIndex(ct,I.name),G.set(I,J))}function kt(I,ct){let J=c.get(ct).get(I);l.get(ct)!==J&&(n.uniformBlockBinding(ct,J,I.__bindingPointIndex),l.set(ct,J))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},at=null,lt={},d={},f=new WeakMap,p=[],_=null,b=!1,m=null,u=null,g=null,M=null,v=null,R=null,A=null,T=new Ht(0,0,0),L=0,E=!1,y=null,C=null,W=null,z=null,Y=null,Xt.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:V,bindFramebuffer:it,drawBuffers:pt,useProgram:Ut,setBlending:P,setMaterial:ee,setFlipSided:Bt,setCullFace:Rt,setLineWidth:Tt,setPolygonOffset:It,setScissorTest:bt,activeTexture:w,bindTexture:x,unbindTexture:N,compressedTexImage2D:Z,compressedTexImage3D:K,texImage2D:mt,texImage3D:Ct,updateUBOMapping:Gt,uniformBlockBinding:kt,texStorage2D:zt,texStorage3D:et,texSubImage2D:q,texSubImage3D:vt,compressedTexSubImage2D:st,compressedTexSubImage3D:ht,scissor:Pt,viewport:gt,reset:ne}}function Hc(n,t,e,i){let s=i0(i);switch(e){case Qc:return n*t;case th:return n*t;case eh:return n*t*2;case nh:return n*t/s.components*s.byteLength;case el:return n*t/s.components*s.byteLength;case ih:return n*t*2/s.components*s.byteLength;case nl:return n*t*2/s.components*s.byteLength;case jc:return n*t*3/s.components*s.byteLength;case an:return n*t*4/s.components*s.byteLength;case il:return n*t*4/s.components*s.byteLength;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _r:case vr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:case Qa:return Math.max(n,16)*Math.max(t,8)/4;case Za:case Ka:return Math.max(n,8)*Math.max(t,8)/2;case ja:case to:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case so:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ro:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ao:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case oo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case lo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case co:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ho:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case uo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case fo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case po:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case mo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case go:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xr:case _o:case vo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case sh:case xo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yo:case Mo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function i0(n){switch(n){case In:case Zc:return{byteLength:1,components:1};case Ss:case Jc:case Ps:return{byteLength:2,components:1};case jo:case tl:return{byteLength:2,components:4};case gi:case Qo:case An:return{byteLength:4,components:1};case Kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function s0(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,x){return p?new OffscreenCanvas(w,x):Es("canvas")}function b(w,x,N){let Z=1,K=bt(w);if((K.width>N||K.height>N)&&(Z=N/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let q=Math.floor(Z*K.width),vt=Math.floor(Z*K.height);d===void 0&&(d=_(q,vt));let st=x?_(q,vt):d;return st.width=q,st.height=vt,st.getContext("2d").drawImage(w,0,0,q,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+vt+")."),st}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function u(w){n.generateMipmap(w)}function g(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(w,x,N,Z,K=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=x;if(x===n.RED&&(N===n.FLOAT&&(q=n.R32F),N===n.HALF_FLOAT&&(q=n.R16F),N===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.R8UI),N===n.UNSIGNED_SHORT&&(q=n.R16UI),N===n.UNSIGNED_INT&&(q=n.R32UI),N===n.BYTE&&(q=n.R8I),N===n.SHORT&&(q=n.R16I),N===n.INT&&(q=n.R32I)),x===n.RG&&(N===n.FLOAT&&(q=n.RG32F),N===n.HALF_FLOAT&&(q=n.RG16F),N===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RG8UI),N===n.UNSIGNED_SHORT&&(q=n.RG16UI),N===n.UNSIGNED_INT&&(q=n.RG32UI),N===n.BYTE&&(q=n.RG8I),N===n.SHORT&&(q=n.RG16I),N===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RGB8UI),N===n.UNSIGNED_SHORT&&(q=n.RGB16UI),N===n.UNSIGNED_INT&&(q=n.RGB32UI),N===n.BYTE&&(q=n.RGB8I),N===n.SHORT&&(q=n.RGB16I),N===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),N===n.UNSIGNED_INT&&(q=n.RGBA32UI),N===n.BYTE&&(q=n.RGBA8I),N===n.SHORT&&(q=n.RGBA16I),N===n.INT&&(q=n.RGBA32I)),x===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),x===n.RGBA){let vt=K?zr:Wt.getTransfer(Z);N===n.FLOAT&&(q=n.RGBA32F),N===n.HALF_FLOAT&&(q=n.RGBA16F),N===n.UNSIGNED_BYTE&&(q=vt===jt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(w,x){let N;return w?x===null||x===gi||x===Ji?N=n.DEPTH24_STENCIL8:x===An?N=n.DEPTH32F_STENCIL8:x===Ss&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===gi||x===Ji?N=n.DEPTH_COMPONENT24:x===An?N=n.DEPTH_COMPONENT32F:x===Ss&&(N=n.DEPTH_COMPONENT16),N}function R(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==on&&w.minFilter!==$e?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){let x=w.target;x.removeEventListener("dispose",A),L(x),x.isVideoTexture&&h.delete(x)}function T(w){let x=w.target;x.removeEventListener("dispose",T),y(x)}function L(w){let x=i.get(w);if(x.__webglInit===void 0)return;let N=w.source,Z=f.get(N);if(Z){let K=Z[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(w),Object.keys(Z).length===0&&f.delete(N)}i.remove(w)}function E(w){let x=i.get(w);n.deleteTexture(x.__webglTexture);let N=w.source,Z=f.get(N);delete Z[x.__cacheKey],o.memory.textures--}function y(w){let x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let K=0;K<x.__webglFramebuffer[Z].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[Z][K]);else n.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[Z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=w.textures;for(let Z=0,K=N.length;Z<K;Z++){let q=i.get(N[Z]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(N[Z])}i.remove(w)}let C=0;function W(){C=0}function z(){let w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function Y(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function Q(w,x){let N=i.get(w);if(w.isVideoTexture&&Tt(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){let Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,w,x);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function H(w,x){let N=i.get(w);if(w.version>0&&N.__version!==w.version){X(N,w,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function tt(w,x){let N=i.get(w);if(w.version>0&&N.__version!==w.version){X(N,w,x);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function k(w,x){let N=i.get(w);if(w.version>0&&N.__version!==w.version){j(N,w,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}let at={[$a]:n.REPEAT,[pi]:n.CLAMP_TO_EDGE,[Zi]:n.MIRRORED_REPEAT},lt={[on]:n.NEAREST,[ku]:n.NEAREST_MIPMAP_NEAREST,[Ys]:n.NEAREST_MIPMAP_LINEAR,[$e]:n.LINEAR,[ca]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},xt={[Xu]:n.NEVER,[Ku]:n.ALWAYS,[qu]:n.LESS,[rh]:n.LEQUAL,[Yu]:n.EQUAL,[Ju]:n.GEQUAL,[$u]:n.GREATER,[Zu]:n.NOTEQUAL};function Dt(w,x){if(x.type===An&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===$e||x.magFilter===ca||x.magFilter===Ys||x.magFilter===mi||x.minFilter===$e||x.minFilter===ca||x.minFilter===Ys||x.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,at[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,at[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,at[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,lt[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===on||x.minFilter!==Ys&&x.minFilter!==mi||x.type===An&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Xt(w,x){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));let Z=x.source,K=f.get(Z);K===void 0&&(K={},f.set(Z,K));let q=Y(x);if(q!==w.__cacheKey){K[q]===void 0&&(K[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),K[q].usedTimes++;let vt=K[w.__cacheKey];vt!==void 0&&(K[w.__cacheKey].usedTimes--,vt.usedTimes===0&&E(x)),w.__cacheKey=q,w.__webglTexture=K[q].texture}return N}function X(w,x,N){let Z=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=n.TEXTURE_3D);let K=Xt(w,x),q=x.source;e.bindTexture(Z,w.__webglTexture,n.TEXTURE0+N);let vt=i.get(q);if(q.version!==vt.__version||K===!0){e.activeTexture(n.TEXTURE0+N);let st=Wt.getPrimaries(Wt.workingColorSpace),ht=x.colorSpace===Gn?null:Wt.getPrimaries(x.colorSpace),zt=x.colorSpace===Gn||st===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let et=b(x.image,!1,s.maxTextureSize);et=It(x,et);let mt=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type),Pt=M(x.internalFormat,mt,Ct,x.colorSpace,x.isVideoTexture);Dt(Z,x);let gt,Gt=x.mipmaps,kt=x.isVideoTexture!==!0,ne=vt.__version===void 0||K===!0,I=q.dataReady,ct=R(x,et);if(x.isDepthTexture)Pt=v(x.format===Ki,x.type),ne&&(kt?e.texStorage2D(n.TEXTURE_2D,1,Pt,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,Pt,et.width,et.height,0,mt,Ct,null));else if(x.isDataTexture)if(Gt.length>0){kt&&ne&&e.texStorage2D(n.TEXTURE_2D,ct,Pt,Gt[0].width,Gt[0].height);for(let G=0,J=Gt.length;G<J;G++)gt=Gt[G],kt?I&&e.texSubImage2D(n.TEXTURE_2D,G,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(n.TEXTURE_2D,G,Pt,gt.width,gt.height,0,mt,Ct,gt.data);x.generateMipmaps=!1}else kt?(ne&&e.texStorage2D(n.TEXTURE_2D,ct,Pt,et.width,et.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,et.width,et.height,mt,Ct,et.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,et.width,et.height,0,mt,Ct,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){kt&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Pt,Gt[0].width,Gt[0].height,et.depth);for(let G=0,J=Gt.length;G<J;G++)if(gt=Gt[G],x.format!==an)if(mt!==null)if(kt){if(I)if(x.layerUpdates.size>0){let ft=Hc(gt.width,gt.height,x.format,x.type);for(let ut of x.layerUpdates){let Nt=gt.data.subarray(ut*ft/gt.data.BYTES_PER_ELEMENT,(ut+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,ut,gt.width,gt.height,1,mt,Nt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,gt.width,gt.height,et.depth,mt,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,Pt,gt.width,gt.height,et.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,gt.width,gt.height,et.depth,mt,Ct,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,G,Pt,gt.width,gt.height,et.depth,0,mt,Ct,gt.data)}else{kt&&ne&&e.texStorage2D(n.TEXTURE_2D,ct,Pt,Gt[0].width,Gt[0].height);for(let G=0,J=Gt.length;G<J;G++)gt=Gt[G],x.format!==an?mt!==null?kt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,G,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?I&&e.texSubImage2D(n.TEXTURE_2D,G,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(n.TEXTURE_2D,G,Pt,gt.width,gt.height,0,mt,Ct,gt.data)}else if(x.isDataArrayTexture)if(kt){if(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Pt,et.width,et.height,et.depth),I)if(x.layerUpdates.size>0){let G=Hc(et.width,et.height,x.format,x.type);for(let J of x.layerUpdates){let ft=et.data.subarray(J*G/et.data.BYTES_PER_ELEMENT,(J+1)*G/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,mt,Ct,ft)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Ct,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,et.width,et.height,et.depth,0,mt,Ct,et.data);else if(x.isData3DTexture)kt?(ne&&e.texStorage3D(n.TEXTURE_3D,ct,Pt,et.width,et.height,et.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Ct,et.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,et.width,et.height,et.depth,0,mt,Ct,et.data);else if(x.isFramebufferTexture){if(ne)if(kt)e.texStorage2D(n.TEXTURE_2D,ct,Pt,et.width,et.height);else{let G=et.width,J=et.height;for(let ft=0;ft<ct;ft++)e.texImage2D(n.TEXTURE_2D,ft,Pt,G,J,0,mt,Ct,null),G>>=1,J>>=1}}else if(Gt.length>0){if(kt&&ne){let G=bt(Gt[0]);e.texStorage2D(n.TEXTURE_2D,ct,Pt,G.width,G.height)}for(let G=0,J=Gt.length;G<J;G++)gt=Gt[G],kt?I&&e.texSubImage2D(n.TEXTURE_2D,G,0,0,mt,Ct,gt):e.texImage2D(n.TEXTURE_2D,G,Pt,mt,Ct,gt);x.generateMipmaps=!1}else if(kt){if(ne){let G=bt(et);e.texStorage2D(n.TEXTURE_2D,ct,Pt,G.width,G.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Ct,et)}else e.texImage2D(n.TEXTURE_2D,0,Pt,mt,Ct,et);m(x)&&u(Z),vt.__version=q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function j(w,x,N){if(x.image.length!==6)return;let Z=Xt(w,x),K=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+N);let q=i.get(K);if(K.version!==q.__version||Z===!0){e.activeTexture(n.TEXTURE0+N);let vt=Wt.getPrimaries(Wt.workingColorSpace),st=x.colorSpace===Gn?null:Wt.getPrimaries(x.colorSpace),ht=x.colorSpace===Gn||vt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let zt=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!zt&&!et?mt[J]=b(x.image[J],!0,s.maxCubemapSize):mt[J]=et?x.image[J].image:x.image[J],mt[J]=It(x,mt[J]);let Ct=mt[0],Pt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),Gt=M(x.internalFormat,Pt,gt,x.colorSpace),kt=x.isVideoTexture!==!0,ne=q.__version===void 0||Z===!0,I=K.dataReady,ct=R(x,Ct);Dt(n.TEXTURE_CUBE_MAP,x);let G;if(zt){kt&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Gt,Ct.width,Ct.height);for(let J=0;J<6;J++){G=mt[J].mipmaps;for(let ft=0;ft<G.length;ft++){let ut=G[ft];x.format!==an?Pt!==null?kt?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Pt,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Gt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Pt,gt,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Gt,ut.width,ut.height,0,Pt,gt,ut.data)}}}else{if(G=x.mipmaps,kt&&ne){G.length>0&&ct++;let J=bt(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Gt,J.width,J.height)}for(let J=0;J<6;J++)if(et){kt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,Pt,gt,mt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,mt[J].width,mt[J].height,0,Pt,gt,mt[J].data);for(let ft=0;ft<G.length;ft++){let Nt=G[ft].image[J].image;kt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Nt.width,Nt.height,Pt,gt,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Gt,Nt.width,Nt.height,0,Pt,gt,Nt.data)}}else{kt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,gt,mt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,Pt,gt,mt[J]);for(let ft=0;ft<G.length;ft++){let ut=G[ft];kt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Pt,gt,ut.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Gt,Pt,gt,ut.image[J])}}}m(x)&&u(n.TEXTURE_CUBE_MAP),q.__version=K.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function _t(w,x,N,Z,K,q){let vt=r.convert(N.format,N.colorSpace),st=r.convert(N.type),ht=M(N.internalFormat,vt,st,N.colorSpace),zt=i.get(x),et=i.get(N);if(et.__renderTarget=x,!zt.__hasExternalTextures){let mt=Math.max(1,x.width>>q),Ct=Math.max(1,x.height>>q);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,q,ht,mt,Ct,x.depth,0,vt,st,null):e.texImage2D(K,q,ht,mt,Ct,0,vt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Rt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,K,et.__webglTexture,0,Bt(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,K,et.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function $(w,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){let Z=x.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,q=v(x.stencilBuffer,K),vt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=Bt(x);Rt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,q,x.width,x.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,w)}else{let Z=x.textures;for(let K=0;K<Z.length;K++){let q=Z[K],vt=r.convert(q.format,q.colorSpace),st=r.convert(q.type),ht=M(q.internalFormat,vt,st,q.colorSpace),zt=Bt(x);N&&Rt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,ht,x.width,x.height):Rt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt,ht,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ht,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function V(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);let K=Z.__webglTexture,q=Bt(x);if(x.depthTexture.format===Gi)Rt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(x.depthTexture.format===Ki)Rt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function it(w){let x=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let Z=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=Z}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");V(x.__webglFramebuffer,w)}else if(N){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=n.createRenderbuffer(),$(x.__webglDepthbuffer[Z],w,!1);else{let K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),$(x.__webglDepthbuffer,w,!1);else{let Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,K)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(w,x,N){let Z=i.get(w);x!==void 0&&_t(Z.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&it(w)}function Ut(w){let x=w.texture,N=i.get(w),Z=i.get(x);w.addEventListener("dispose",T);let K=w.textures,q=w.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=x.version,o.memory.textures++),q){N.__webglFramebuffer=[];for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[st]=[];for(let ht=0;ht<x.mipmaps.length;ht++)N.__webglFramebuffer[st][ht]=n.createFramebuffer()}else N.__webglFramebuffer[st]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let st=0;st<x.mipmaps.length;st++)N.__webglFramebuffer[st]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(vt)for(let st=0,ht=K.length;st<ht;st++){let zt=i.get(K[st]);zt.__webglTexture===void 0&&(zt.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&Rt(w)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let st=0;st<K.length;st++){let ht=K[st];N.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[st]);let zt=r.convert(ht.format,ht.colorSpace),et=r.convert(ht.type),mt=M(ht.internalFormat,zt,et,ht.colorSpace,w.isXRRenderTarget===!0),Ct=Bt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,mt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,N.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),$(N.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,x);for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)_t(N.__webglFramebuffer[st][ht],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht);else _t(N.__webglFramebuffer[st],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(x)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let st=0,ht=K.length;st<ht;st++){let zt=K[st],et=i.get(zt);e.bindTexture(n.TEXTURE_2D,et.__webglTexture),Dt(n.TEXTURE_2D,zt),_t(N.__webglFramebuffer,w,zt,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,0),m(zt)&&u(n.TEXTURE_2D)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(st=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,Z.__webglTexture),Dt(st,x),x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)_t(N.__webglFramebuffer[ht],w,x,n.COLOR_ATTACHMENT0,st,ht);else _t(N.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,st,0);m(x)&&u(st),e.unbindTexture()}w.depthBuffer&&it(w)}function At(w){let x=w.textures;for(let N=0,Z=x.length;N<Z;N++){let K=x[N];if(m(K)){let q=g(w),vt=i.get(K).__webglTexture;e.bindTexture(q,vt),u(q),e.unbindTexture()}}}let Zt=[],P=[];function ee(w){if(w.samples>0){if(Rt(w)===!1){let x=w.textures,N=w.width,Z=w.height,K=n.COLOR_BUFFER_BIT,q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(w),st=x.length>1;if(st)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);let zt=i.get(x[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,zt,0)}n.blitFramebuffer(0,0,N,Z,0,0,N,Z,K,n.NEAREST),l===!0&&(Zt.length=0,P.length=0,Zt.push(n.COLOR_ATTACHMENT0+ht),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Zt.push(q),P.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);let zt=i.get(x[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Bt(w){return Math.min(s.maxSamples,w.samples)}function Rt(w){let x=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(w){let x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function It(w,x){let N=w.colorSpace,Z=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==es&&N!==Gn&&(Wt.getTransfer(N)===jt?(Z!==an||K!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=W,this.setTexture2D=Q,this.setTexture2DArray=H,this.setTexture3D=tt,this.setTextureCube=k,this.rebindTextures=pt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Rt}function r0(n,t){function e(i,s=Gn){let r,o=Wt.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===jo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zc)return n.BYTE;if(i===Jc)return n.SHORT;if(i===Ss)return n.UNSIGNED_SHORT;if(i===Qo)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===Ps)return n.HALF_FLOAT;if(i===Qc)return n.ALPHA;if(i===jc)return n.RGB;if(i===an)return n.RGBA;if(i===th)return n.LUMINANCE;if(i===eh)return n.LUMINANCE_ALPHA;if(i===Gi)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===nh)return n.RED;if(i===el)return n.RED_INTEGER;if(i===ih)return n.RG;if(i===nl)return n.RG_INTEGER;if(i===il)return n.RGBA_INTEGER;if(i===mr||i===gr||i===_r||i===vr)if(o===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ja||i===Ka||i===Qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ja||i===to||i===eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ja||i===to)return o===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===eo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===no)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===io)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===so)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ro)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ao)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===co)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ho)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===po)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===go)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xr||i===_o||i===vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===xr)return o===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sh||i===xo||i===yo||i===Mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===xr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ji?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Oo=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Vi=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},a0={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,i),u=this._getHandJoint(c,b);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Vi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},o0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l0=`
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

}`,Bo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ze({vertexShader:o0,fragmentShader:l0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new Kn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zo=class extends Yn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,_=null,b=new Bo,m=e.getContextAttributes(),u=null,g=null,M=[],v=[],R=new $t,A=null,T=new Oe;T.viewport=new ge;let L=new Oe;L.viewport=new ge;let E=[T,L],y=new Oo,C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=M[X];return j===void 0&&(j=new Ms,M[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=M[X];return j===void 0&&(j=new Ms,M[X]=j),j.getGripSpace()},this.getHand=function(X){let j=M[X];return j===void 0&&(j=new Ms,M[X]=j),j.getHandSpace()};function z(X){let j=v.indexOf(X.inputSource);if(j===-1)return;let _t=M[j];_t!==void 0&&(_t.update(X.inputSource,X.frame,c||o),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Q);for(let X=0;X<M.length;X++){let j=v[X];j!==null&&(v[X]=null,M[X].disconnect(j))}C=null,W=null,b.reset(),t.setRenderTarget(u),p=null,f=null,d=null,s=null,g=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Pn(p.framebufferWidth,p.framebufferHeight,{format:an,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,_t=null,$=null;m.depth&&($=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?Ki:Gi,_t=m.stencil?Ji:gi);let V={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(V),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),g=new Pn(f.textureWidth,f.textureHeight,{format:an,type:In,depthTexture:new Pr(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Q(X){for(let j=0;j<X.removed.length;j++){let _t=X.removed[j],$=v.indexOf(_t);$>=0&&(v[$]=null,M[$].disconnect(_t))}for(let j=0;j<X.added.length;j++){let _t=X.added[j],$=v.indexOf(_t);if($===-1){for(let it=0;it<M.length;it++)if(it>=v.length){v.push(_t),$=it;break}else if(v[it]===null){v[it]=_t,$=it;break}if($===-1)break}let V=M[$];V&&V.connect(_t)}}let H=new F,tt=new F;function k(X,j,_t){H.setFromMatrixPosition(j.matrixWorld),tt.setFromMatrixPosition(_t.matrixWorld);let $=H.distanceTo(tt),V=j.projectionMatrix.elements,it=_t.projectionMatrix.elements,pt=V[14]/(V[10]-1),Ut=V[14]/(V[10]+1),At=(V[9]+1)/V[5],Zt=(V[9]-1)/V[5],P=(V[8]-1)/V[0],ee=(it[8]+1)/it[0],Bt=pt*P,Rt=pt*ee,Tt=$/(-P+ee),It=Tt*-P;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(It),X.translateZ(Tt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),V[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let bt=pt+Tt,w=Ut+Tt,x=Bt-It,N=Rt+($-It),Z=At*Ut/w*bt,K=Zt*Ut/w*bt;X.projectionMatrix.makePerspective(x,N,Z,K,bt,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function at(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let j=X.near,_t=X.far;b.texture!==null&&(b.depthNear>0&&(j=b.depthNear),b.depthFar>0&&(_t=b.depthFar)),y.near=L.near=T.near=j,y.far=L.far=T.far=_t,(C!==y.near||W!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,W=y.far),T.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,y.layers.mask=T.layers.mask|L.layers.mask;let $=X.parent,V=y.cameras;at(y,$);for(let it=0;it<V.length;it++)at(V[it],$);V.length===2?k(y,T,L):y.projectionMatrix.copy(T.projectionMatrix),lt(X,y,$)};function lt(X,j,_t){_t===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=bs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let xt=null;function Dt(X,j){if(h=j.getViewerPose(c||o),_=j,h!==null){let _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(g,p.framebuffer),t.setRenderTarget(g));let $=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,$=!0);for(let it=0;it<_t.length;it++){let pt=_t[it],Ut=null;if(p!==null)Ut=p.getViewport(pt);else{let Zt=d.getViewSubImage(f,pt);Ut=Zt.viewport,it===0&&(t.setRenderTargetTextures(g,Zt.colorTexture,f.ignoreDepthValues?void 0:Zt.depthStencilTexture),t.setRenderTarget(g))}let At=E[it];At===void 0&&(At=new Oe,At.layers.enable(it),At.viewport=new ge,E[it]=At),At.matrix.fromArray(pt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(pt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),it===0&&(y.matrix.copy(At.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),$===!0&&y.cameras.push(At)}let V=s.enabledFeatures;if(V&&V.includes("depth-sensing")){let it=d.getDepthInformation(_t[0]);it&&it.isValid&&it.texture&&b.init(t,it,s.renderState)}}for(let _t=0;_t<M.length;_t++){let $=v[_t],V=M[_t];$!==null&&V!==void 0&&V.update($,j,c||o)}xt&&xt(X,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}let Xt=new hh;Xt.setAnimationLoop(Dt),this.setAnimationLoop=function(X){xt=X},this.dispose=function(){}}},ci=new Ln,c0=new ye;function h0(n,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,ch(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,g,M,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),b(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,M):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===He&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===He&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let g=t.get(u),M=g.envMap,v=g.envMapRotation;M&&(m.envMap.value=M,ci.copy(v),ci.x*=-1,ci.y*=-1,ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(c0.makeRotationFromEuler(ci)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=M*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===He&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function b(m,u){let g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function u0(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,M){let v=M.program;i.uniformBlockBinding(g,v)}function c(g,M){let v=s[g.id];v===void 0&&(_(g),v=h(g),s[g.id]=v,g.addEventListener("dispose",m));let R=M.program;i.updateUBOMapping(g,R);let A=t.render.frame;r[g.id]!==A&&(f(g),r[g.id]=A)}function h(g){let M=d();g.__bindingPointIndex=M;let v=n.createBuffer(),R=g.__size,A=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){let M=s[g.id],v=g.uniforms,R=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,T=v.length;A<T;A++){let L=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,y=L.length;E<y;E++){let C=L[E];if(p(C,A,E,R)===!0){let W=C.__offset,z=Array.isArray(C.value)?C.value:[C.value],Y=0;for(let Q=0;Q<z.length;Q++){let H=z[Q],tt=b(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,W+Y,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,Y),Y+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,M,v,R){let A=g.value,T=M+"_"+v;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{let L=R[T];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[T]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function _(g){let M=g.uniforms,v=0,R=16;for(let T=0,L=M.length;T<L;T++){let E=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,C=E.length;y<C;y++){let W=E[y],z=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,Q=z.length;Y<Q;Y++){let H=z[Y],tt=b(H),k=v%R,at=k%tt.boundary,lt=k+at;v+=at,lt!==0&&R-lt<tt.storage&&(v+=R-lt),W.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=tt.storage}}}let A=v%R;return A>0&&(v+=R-A),g.__size=v,g.__cache={},this}function b(g){let M={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(M.boundary=4,M.storage=4):g.isVector2?(M.boundary=8,M.storage=8):g.isVector3||g.isColor?(M.boundary=16,M.storage=12):g.isVector4?(M.boundary=16,M.storage=16):g.isMatrix3?(M.boundary=48,M.storage=48):g.isMatrix4?(M.boundary=64,M.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),M}function m(g){let M=g.target;M.removeEventListener("dispose",m);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function u(){for(let g in s)n.deleteBuffer(s[g]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Lr=class{constructor(t={}){let{canvas:e=pd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let _=new Uint32Array(4),b=new Int32Array(4),m=null,u=null,g=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this.toneMapping=Xn,this.toneMappingExposure=1;let v=this,R=!1,A=0,T=0,L=null,E=-1,y=null,C=new ge,W=new ge,z=null,Y=new Ht(0),Q=0,H=e.width,tt=e.height,k=1,at=null,lt=null,xt=new ge(0,0,H,tt),Dt=new ge(0,0,H,tt),Xt=!1,X=new Rr,j=!1,_t=!1,$=new ye,V=new ye,it=new F,pt=new ge,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},At=!1;function Zt(){return L===null?k:1}let P=i;function ee(S,D){return e.getContext(S,D)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ko}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),P===null){let D="webgl2";if(P=ee(D,S),P===null)throw ee(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Bt,Rt,Tt,It,bt,w,x,N,Z,K,q,vt,st,ht,zt,et,mt,Ct,Pt,gt,Gt,kt,ne,I;function ct(){Bt=new Am(P),Bt.init(),kt=new r0(P,Bt),Rt=new Mm(P,Bt,t,kt),Tt=new n0(P,Bt),Rt.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),It=new Im(P),bt=new Gg,w=new s0(P,Bt,Tt,bt,Rt,kt,It),x=new bm(v),N=new Tm(v),Z=new Fd(P),ne=new xm(P,Z),K=new Cm(P,Z,It,ne),q=new Lm(P,K,Z,It),Pt=new Pm(P,Rt,w),et=new Sm(bt),vt=new Hg(v,x,N,Bt,Rt,ne,et),st=new h0(v,bt),ht=new Xg,zt=new Kg(Bt),Ct=new vm(v,x,N,Tt,q,p,l),mt=new t0(v,q,Rt),I=new u0(P,It,Rt,Tt),gt=new ym(P,Bt,It),Gt=new Rm(P,Bt,It),It.programs=vt.programs,v.capabilities=Rt,v.extensions=Bt,v.properties=bt,v.renderLists=ht,v.shadowMap=mt,v.state=Tt,v.info=It}ct();let G=new zo(v,P);this.xr=G,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=Bt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Bt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(H,tt,!1))},this.getSize=function(S){return S.set(H,tt)},this.setSize=function(S,D,O=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,tt=D,e.width=Math.floor(S*k),e.height=Math.floor(D*k),O===!0&&(e.style.width=S+"px",e.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(H*k,tt*k).floor()},this.setDrawingBufferSize=function(S,D,O){H=S,tt=D,k=O,e.width=Math.floor(S*O),e.height=Math.floor(D*O),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(xt)},this.setViewport=function(S,D,O,B){S.isVector4?xt.set(S.x,S.y,S.z,S.w):xt.set(S,D,O,B),Tt.viewport(C.copy(xt).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(Dt)},this.setScissor=function(S,D,O,B){S.isVector4?Dt.set(S.x,S.y,S.z,S.w):Dt.set(S,D,O,B),Tt.scissor(W.copy(Dt).multiplyScalar(k).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(S){Tt.setScissorTest(Xt=S)},this.setOpaqueSort=function(S){at=S},this.setTransparentSort=function(S){lt=S},this.getClearColor=function(S){return S.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(S=!0,D=!0,O=!0){let B=0;if(S){let U=!1;if(L!==null){let nt=L.texture.format;U=nt===il||nt===nl||nt===el}if(U){let nt=L.texture.type,dt=nt===In||nt===gi||nt===Ss||nt===Ji||nt===jo||nt===tl,yt=Ct.getClearColor(),Mt=Ct.getClearAlpha(),Lt=yt.r,Ft=yt.g,St=yt.b;dt?(_[0]=Lt,_[1]=Ft,_[2]=St,_[3]=Mt,P.clearBufferuiv(P.COLOR,0,_)):(b[0]=Lt,b[1]=Ft,b[2]=St,b[3]=Mt,P.clearBufferiv(P.COLOR,0,b))}else B|=P.COLOR_BUFFER_BIT}D&&(B|=P.DEPTH_BUFFER_BIT),O&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),ht.dispose(),zt.dispose(),bt.dispose(),x.dispose(),N.dispose(),q.dispose(),ne.dispose(),I.dispose(),vt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Ul),G.removeEventListener("sessionend",Nl),ii.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let S=It.autoReset,D=mt.enabled,O=mt.autoUpdate,B=mt.needsUpdate,U=mt.type;ct(),It.autoReset=S,mt.enabled=D,mt.autoUpdate=O,mt.needsUpdate=B,mt.type=U}function ut(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Nt(S){let D=S.target;D.removeEventListener("dispose",Nt),ue(D)}function ue(S){Pe(S),bt.remove(S)}function Pe(S){let D=bt.get(S).programs;D!==void 0&&(D.forEach(function(O){vt.releaseProgram(O)}),S.isShaderMaterial&&vt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,O,B,U,nt){D===null&&(D=Ut);let dt=U.isMesh&&U.matrixWorld.determinant()<0,yt=ou(S,D,O,B,U);Tt.setMaterial(B,dt);let Mt=O.index,Lt=1;if(B.wireframe===!0){if(Mt=K.getWireframeAttribute(O),Mt===void 0)return;Lt=2}let Ft=O.drawRange,St=O.attributes.position,qt=Ft.start*Lt,ie=(Ft.start+Ft.count)*Lt;nt!==null&&(qt=Math.max(qt,nt.start*Lt),ie=Math.min(ie,(nt.start+nt.count)*Lt)),Mt!==null?(qt=Math.max(qt,0),ie=Math.min(ie,Mt.count)):St!=null&&(qt=Math.max(qt,0),ie=Math.min(ie,St.count));let re=ie-qt;if(re<0||re===1/0)return;ne.setup(U,B,yt,O,Mt);let Ve,Jt=gt;if(Mt!==null&&(Ve=Z.get(Mt),Jt=Gt,Jt.setIndex(Ve)),U.isMesh)B.wireframe===!0?(Tt.setLineWidth(B.wireframeLinewidth*Zt()),Jt.setMode(P.LINES)):Jt.setMode(P.TRIANGLES);else if(U.isLine){let Et=B.linewidth;Et===void 0&&(Et=1),Tt.setLineWidth(Et*Zt()),U.isLineSegments?Jt.setMode(P.LINES):U.isLineLoop?Jt.setMode(P.LINE_LOOP):Jt.setMode(P.LINE_STRIP)}else U.isPoints?Jt.setMode(P.POINTS):U.isSprite&&Jt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Jt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Et=U._multiDrawStarts,vn=U._multiDrawCounts,Kt=U._multiDrawCount,en=Mt?Z.get(Mt).bytesPerElement:1,Ei=bt.get(B).currentProgram.getUniforms();for(let Ge=0;Ge<Kt;Ge++)Ei.setValue(P,"_gl_DrawID",Ge),Jt.render(Et[Ge]/en,vn[Ge])}else if(U.isInstancedMesh)Jt.renderInstances(qt,re,U.count);else if(O.isInstancedBufferGeometry){let Et=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,vn=Math.min(O.instanceCount,Et);Jt.renderInstances(qt,re,vn)}else Jt.render(qt,re)};function Qt(S,D,O){S.transparent===!0&&S.side===Tn&&S.forceSinglePass===!1?(S.side=He,S.needsUpdate=!0,qs(S,D,O),S.side=qn,S.needsUpdate=!0,qs(S,D,O),S.side=Tn):qs(S,D,O)}this.compile=function(S,D,O=null){O===null&&(O=S),u=zt.get(O),u.init(D),M.push(u),O.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),S!==O&&S.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();let B=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let nt=U.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){let yt=nt[dt];Qt(yt,O,U),B.add(yt)}else Qt(nt,O,U),B.add(nt)}),M.pop(),u=null,B},this.compileAsync=function(S,D,O=null){let B=this.compile(S,D,O);return new Promise(U=>{function nt(){if(B.forEach(function(dt){bt.get(dt).currentProgram.isReady()&&B.delete(dt)}),B.size===0){U(S);return}setTimeout(nt,10)}Bt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let tn=null;function _n(S){tn&&tn(S)}function Ul(){ii.stop()}function Nl(){ii.start()}let ii=new hh;ii.setAnimationLoop(_n),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(S){tn=S,G.setAnimationLoop(S),S===null?ii.stop():ii.start()},G.addEventListener("sessionstart",Ul),G.addEventListener("sessionend",Nl),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,D,L),u=zt.get(S,M.length),u.init(D),M.push(u),V.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(V),_t=this.localClippingEnabled,j=et.init(this.clippingPlanes,_t),m=ht.get(S,g.length),m.init(),g.push(m),G.enabled===!0&&G.isPresenting===!0){let nt=v.xr.getDepthSensingMesh();nt!==null&&la(nt,D,-1/0,v.sortObjects)}la(S,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(at,lt),At=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,At&&Ct.addToRenderList(m,S),this.info.render.frame++,j===!0&&et.beginShadows();let O=u.state.shadowsArray;mt.render(O,S,D),j===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,U=m.transmissive;if(u.setupLights(),D.isArrayCamera){let nt=D.cameras;if(U.length>0)for(let dt=0,yt=nt.length;dt<yt;dt++){let Mt=nt[dt];Ol(B,U,S,Mt)}At&&Ct.render(S);for(let dt=0,yt=nt.length;dt<yt;dt++){let Mt=nt[dt];Fl(m,S,Mt,Mt.viewport)}}else U.length>0&&Ol(B,U,S,D),At&&Ct.render(S),Fl(m,S,D);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(v,S,D),ne.resetDefaultState(),E=-1,y=null,M.pop(),M.length>0?(u=M[M.length-1],j===!0&&et.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function la(S,D,O,B){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){B&&pt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(V);let dt=q.update(S),yt=S.material;yt.visible&&m.push(S,dt,yt,O,pt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){let dt=q.update(S),yt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),pt.copy(S.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),pt.copy(dt.boundingSphere.center)),pt.applyMatrix4(S.matrixWorld).applyMatrix4(V)),Array.isArray(yt)){let Mt=dt.groups;for(let Lt=0,Ft=Mt.length;Lt<Ft;Lt++){let St=Mt[Lt],qt=yt[St.materialIndex];qt&&qt.visible&&m.push(S,dt,qt,O,pt.z,St)}}else yt.visible&&m.push(S,dt,yt,O,pt.z,null)}}let nt=S.children;for(let dt=0,yt=nt.length;dt<yt;dt++)la(nt[dt],D,O,B)}function Fl(S,D,O,B){let U=S.opaque,nt=S.transmissive,dt=S.transparent;u.setupLightsView(O),j===!0&&et.setGlobalState(v.clippingPlanes,O),B&&Tt.viewport(C.copy(B)),U.length>0&&Xs(U,D,O),nt.length>0&&Xs(nt,D,O),dt.length>0&&Xs(dt,D,O),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Ol(S,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new Pn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Ps:In,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let nt=u.state.transmissionRenderTarget[B.id],dt=B.viewport||C;nt.setSize(dt.z,dt.w);let yt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(Y),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),At&&Ct.render(O);let Mt=v.toneMapping;v.toneMapping=Xn;let Lt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),j===!0&&et.setGlobalState(v.clippingPlanes,B),Xs(S,O,B),w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let St=0,qt=D.length;St<qt;St++){let ie=D[St],re=ie.object,Ve=ie.geometry,Jt=ie.material,Et=ie.group;if(Jt.side===Tn&&re.layers.test(B.layers)){let vn=Jt.side;Jt.side=He,Jt.needsUpdate=!0,Bl(re,O,B,Ve,Jt,Et),Jt.side=vn,Jt.needsUpdate=!0,Ft=!0}}Ft===!0&&(w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt))}v.setRenderTarget(yt),v.setClearColor(Y,Q),Lt!==void 0&&(B.viewport=Lt),v.toneMapping=Mt}function Xs(S,D,O){let B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,nt=S.length;U<nt;U++){let dt=S[U],yt=dt.object,Mt=dt.geometry,Lt=B===null?dt.material:B,Ft=dt.group;yt.layers.test(O.layers)&&Bl(yt,D,O,Mt,Lt,Ft)}}function Bl(S,D,O,B,U,nt){S.onBeforeRender(v,D,O,B,U,nt),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(v,D,O,B,S,nt),U.transparent===!0&&U.side===Tn&&U.forceSinglePass===!1?(U.side=He,U.needsUpdate=!0,v.renderBufferDirect(O,D,B,U,S,nt),U.side=qn,U.needsUpdate=!0,v.renderBufferDirect(O,D,B,U,S,nt),U.side=Tn):v.renderBufferDirect(O,D,B,U,S,nt),S.onAfterRender(v,D,O,B,U,nt)}function qs(S,D,O){D.isScene!==!0&&(D=Ut);let B=bt.get(S),U=u.state.lights,nt=u.state.shadowsArray,dt=U.state.version,yt=vt.getParameters(S,U.state,nt,D,O),Mt=vt.getProgramCacheKey(yt),Lt=B.programs;B.environment=S.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(S.isMeshStandardMaterial?N:x).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Lt===void 0&&(S.addEventListener("dispose",Nt),Lt=new Map,B.programs=Lt);let Ft=Lt.get(Mt);if(Ft!==void 0){if(B.currentProgram===Ft&&B.lightsStateVersion===dt)return kl(S,yt),Ft}else yt.uniforms=vt.getUniforms(S),S.onBeforeCompile(yt,v),Ft=vt.acquireProgram(yt,Mt),Lt.set(Mt,Ft),B.uniforms=yt.uniforms;let St=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(St.clippingPlanes=et.uniform),kl(S,yt),B.needsLights=cu(S),B.lightsStateVersion=dt,B.needsLights&&(St.ambientLightColor.value=U.state.ambient,St.lightProbe.value=U.state.probe,St.directionalLights.value=U.state.directional,St.directionalLightShadows.value=U.state.directionalShadow,St.spotLights.value=U.state.spot,St.spotLightShadows.value=U.state.spotShadow,St.rectAreaLights.value=U.state.rectArea,St.ltc_1.value=U.state.rectAreaLTC1,St.ltc_2.value=U.state.rectAreaLTC2,St.pointLights.value=U.state.point,St.pointLightShadows.value=U.state.pointShadow,St.hemisphereLights.value=U.state.hemi,St.directionalShadowMap.value=U.state.directionalShadowMap,St.directionalShadowMatrix.value=U.state.directionalShadowMatrix,St.spotShadowMap.value=U.state.spotShadowMap,St.spotLightMatrix.value=U.state.spotLightMatrix,St.spotLightMap.value=U.state.spotLightMap,St.pointShadowMap.value=U.state.pointShadowMap,St.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ft,B.uniformsList=null,Ft}function zl(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=Xi.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function kl(S,D){let O=bt.get(S);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function ou(S,D,O,B,U){D.isScene!==!0&&(D=Ut),w.resetTextureUnits();let nt=D.fog,dt=B.isMeshStandardMaterial?D.environment:null,yt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:es,Mt=(B.isMeshStandardMaterial?N:x).get(B.envMap||dt),Lt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ft=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),St=!!O.morphAttributes.position,qt=!!O.morphAttributes.normal,ie=!!O.morphAttributes.color,re=Xn;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(re=v.toneMapping);let Ve=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Jt=Ve!==void 0?Ve.length:0,Et=bt.get(B),vn=u.state.lights;if(j===!0&&(_t===!0||S!==y)){let qe=S===y&&B.id===E;et.setState(B,S,qe)}let Kt=!1;B.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==vn.state.version||Et.outputColorSpace!==yt||U.isBatchedMesh&&Et.batching===!1||!U.isBatchedMesh&&Et.batching===!0||U.isBatchedMesh&&Et.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Et.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Et.instancing===!1||!U.isInstancedMesh&&Et.instancing===!0||U.isSkinnedMesh&&Et.skinning===!1||!U.isSkinnedMesh&&Et.skinning===!0||U.isInstancedMesh&&Et.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Et.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Et.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Et.instancingMorph===!1&&U.morphTexture!==null||Et.envMap!==Mt||B.fog===!0&&Et.fog!==nt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==et.numPlanes||Et.numIntersection!==et.numIntersection)||Et.vertexAlphas!==Lt||Et.vertexTangents!==Ft||Et.morphTargets!==St||Et.morphNormals!==qt||Et.morphColors!==ie||Et.toneMapping!==re||Et.morphTargetsCount!==Jt)&&(Kt=!0):(Kt=!0,Et.__version=B.version);let en=Et.currentProgram;Kt===!0&&(en=qs(B,D,U));let Ei=!1,Ge=!1,us=!1,ae=en.getUniforms(),fn=Et.uniforms;if(Tt.useProgram(en.program)&&(Ei=!0,Ge=!0,us=!0),B.id!==E&&(E=B.id,Ge=!0),Ei||y!==S){Tt.buffers.depth.getReversed()?($.copy(S.projectionMatrix),gd($),_d($),ae.setValue(P,"projectionMatrix",$)):ae.setValue(P,"projectionMatrix",S.projectionMatrix),ae.setValue(P,"viewMatrix",S.matrixWorldInverse);let Nn=ae.map.cameraPosition;Nn!==void 0&&Nn.setValue(P,it.setFromMatrixPosition(S.matrixWorld)),Rt.logarithmicDepthBuffer&&ae.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ae.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Ge=!0,us=!0)}if(U.isSkinnedMesh){ae.setOptional(P,U,"bindMatrix"),ae.setOptional(P,U,"bindMatrixInverse");let qe=U.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),ae.setValue(P,"boneTexture",qe.boneTexture,w))}U.isBatchedMesh&&(ae.setOptional(P,U,"batchingTexture"),ae.setValue(P,"batchingTexture",U._matricesTexture,w),ae.setOptional(P,U,"batchingIdTexture"),ae.setValue(P,"batchingIdTexture",U._indirectTexture,w),ae.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&ae.setValue(P,"batchingColorTexture",U._colorsTexture,w));let ds=O.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&Pt.update(U,O,en),(Ge||Et.receiveShadow!==U.receiveShadow)&&(Et.receiveShadow=U.receiveShadow,ae.setValue(P,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(fn.envMap.value=Mt,fn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(fn.envMapIntensity.value=D.environmentIntensity),Ge&&(ae.setValue(P,"toneMappingExposure",v.toneMappingExposure),Et.needsLights&&lu(fn,us),nt&&B.fog===!0&&st.refreshFogUniforms(fn,nt),st.refreshMaterialUniforms(fn,B,k,tt,u.state.transmissionRenderTarget[S.id]),Xi.upload(P,zl(Et),fn,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Xi.upload(P,zl(Et),fn,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ae.setValue(P,"center",U.center),ae.setValue(P,"modelViewMatrix",U.modelViewMatrix),ae.setValue(P,"normalMatrix",U.normalMatrix),ae.setValue(P,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let qe=B.uniformsGroups;for(let Nn=0,Fn=qe.length;Nn<Fn;Nn++){let Vl=qe[Nn];I.update(Vl,en),I.bind(Vl,en)}}return en}function lu(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function cu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,D,O){bt.get(S.texture).__webglTexture=D,bt.get(S.depthTexture).__webglTexture=O;let B=bt.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){let O=bt.get(S);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,O=0){L=S,A=D,T=O;let B=!0,U=null,nt=!1,dt=!1;if(S){let Mt=bt.get(S);if(Mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(P.FRAMEBUFFER,null),B=!1;else if(Mt.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(Mt.__hasExternalTextures)w.rebindTextures(S,bt.get(S.texture).__webglTexture,bt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let St=S.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&bt.has(St)&&(S.width!==St.image.width||S.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}let Lt=S.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(dt=!0);let Ft=bt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ft[D])?U=Ft[D][O]:U=Ft[D],nt=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?U=bt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ft)?U=Ft[O]:U=Ft,C.copy(S.viewport),W.copy(S.scissor),z=S.scissorTest}else C.copy(xt).multiplyScalar(k).floor(),W.copy(Dt).multiplyScalar(k).floor(),z=Xt;if(Tt.bindFramebuffer(P.FRAMEBUFFER,U)&&B&&Tt.drawBuffers(S,U),Tt.viewport(C),Tt.scissor(W),Tt.setScissorTest(z),nt){let Mt=bt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,Mt.__webglTexture,O)}else if(dt){let Mt=bt.get(S.texture),Lt=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.__webglTexture,O||0,Lt)}E=-1},this.readRenderTargetPixels=function(S,D,O,B,U,nt,dt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){Tt.bindFramebuffer(P.FRAMEBUFFER,yt);try{let Mt=S.texture,Lt=Mt.format,Ft=Mt.type;if(!Rt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-B&&O>=0&&O<=S.height-U&&P.readPixels(D,O,B,U,kt.convert(Lt),kt.convert(Ft),nt)}finally{let Mt=L!==null?bt.get(L).__webglFramebuffer:null;Tt.bindFramebuffer(P.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(S,D,O,B,U,nt,dt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){let Mt=S.texture,Lt=Mt.format,Ft=Mt.type;if(!Rt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-B&&O>=0&&O<=S.height-U){Tt.bindFramebuffer(P.FRAMEBUFFER,yt);let St=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.bufferData(P.PIXEL_PACK_BUFFER,nt.byteLength,P.STREAM_READ),P.readPixels(D,O,B,U,kt.convert(Lt),kt.convert(Ft),0);let qt=L!==null?bt.get(L).__webglFramebuffer:null;Tt.bindFramebuffer(P.FRAMEBUFFER,qt);let ie=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await md(P,ie,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,nt),P.deleteBuffer(St),P.deleteSync(ie),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,O=0){S.isTexture!==!0&&(_s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);let B=Math.pow(2,-O),U=Math.floor(S.image.width*B),nt=Math.floor(S.image.height*B),dt=D!==null?D.x:0,yt=D!==null?D.y:0;w.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,dt,yt,U,nt),Tt.unbindTexture()},this.copyTextureToTexture=function(S,D,O=null,B=null,U=0){S.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],D=arguments[2],U=arguments[3]||0,O=null);let nt,dt,yt,Mt,Lt,Ft,St,qt,ie,re=S.isCompressedTexture?S.mipmaps[U]:S.image;O!==null?(nt=O.max.x-O.min.x,dt=O.max.y-O.min.y,yt=O.isBox3?O.max.z-O.min.z:1,Mt=O.min.x,Lt=O.min.y,Ft=O.isBox3?O.min.z:0):(nt=re.width,dt=re.height,yt=re.depth||1,Mt=0,Lt=0,Ft=0),B!==null?(St=B.x,qt=B.y,ie=B.z):(St=0,qt=0,ie=0);let Ve=kt.convert(D.format),Jt=kt.convert(D.type),Et;D.isData3DTexture?(w.setTexture3D(D,0),Et=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(w.setTexture2DArray(D,0),Et=P.TEXTURE_2D_ARRAY):(w.setTexture2D(D,0),Et=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let vn=P.getParameter(P.UNPACK_ROW_LENGTH),Kt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),en=P.getParameter(P.UNPACK_SKIP_PIXELS),Ei=P.getParameter(P.UNPACK_SKIP_ROWS),Ge=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,re.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,re.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Lt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ft);let us=S.isDataArrayTexture||S.isData3DTexture,ae=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let fn=bt.get(S),ds=bt.get(D),qe=bt.get(fn.__renderTarget),Nn=bt.get(ds.__renderTarget);Tt.bindFramebuffer(P.READ_FRAMEBUFFER,qe.__webglFramebuffer),Tt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<yt;Fn++)us&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,bt.get(S).__webglTexture,U,Ft+Fn),S.isDepthTexture?(ae&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,bt.get(D).__webglTexture,U,ie+Fn),P.blitFramebuffer(Mt,Lt,nt,dt,St,qt,nt,dt,P.DEPTH_BUFFER_BIT,P.NEAREST)):ae?P.copyTexSubImage3D(Et,U,St,qt,ie+Fn,Mt,Lt,nt,dt):P.copyTexSubImage2D(Et,U,St,qt,ie+Fn,Mt,Lt,nt,dt);Tt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ae?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Et,U,St,qt,ie,nt,dt,yt,Ve,Jt,re.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Et,U,St,qt,ie,nt,dt,yt,Ve,re.data):P.texSubImage3D(Et,U,St,qt,ie,nt,dt,yt,Ve,Jt,re):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,St,qt,nt,dt,Ve,Jt,re.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,St,qt,re.width,re.height,Ve,re.data):P.texSubImage2D(P.TEXTURE_2D,U,St,qt,nt,dt,Ve,Jt,re);P.pixelStorei(P.UNPACK_ROW_LENGTH,vn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Kt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,en),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ei),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ge),U===0&&D.generateMipmaps&&P.generateMipmap(Et),Tt.unbindTexture()},this.copyTextureToTexture3D=function(S,D,O=null,B=null,U=0){return S.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,S=arguments[2],D=arguments[3],U=arguments[4]||0),_s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,O,B,U)},this.initRenderTarget=function(S){bt.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){A=0,T=0,L=null,Tt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var Dr=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Cs=class extends Be{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:$e,this.magFilter=r!==void 0?r:$e,this.generateMipmaps=!1;let h=this;function d(){h.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};var Rs=class extends Be{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ur=class n extends Jn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new F,f=new F,p=[],_=[],b=[],m=[];for(let u=0;u<=i;u++){let g=[],M=u/i,v=0;u===0&&o===0?v=.5/e:u===i&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let A=R/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),b.push(f.x,f.y,f.z),m.push(A+v,1-M),g.push(c++)}h.push(g)}for(let u=0;u<i;u++)for(let g=0;g<e;g++){let M=h[u][g+1],v=h[u][g],R=h[u+1][g],A=h[u+1][g+1];(u!==0||o>0)&&p.push(M,v,A),(u!==i-1||l<Math.PI)&&p.push(v,R,A)}this.setIndex(p),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(b,3)),this.setAttribute("uv",new Je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function pr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function d0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ts=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ko=class extends ts{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ql,endingEnd:ql}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yl:r=t,a=2*e-i;break;case $l:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yl:o=t,l=2*i-e;break;case $l:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-e)/(s-e),b=_*_,m=b*_,u=-f*m+2*f*b-f*_,g=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*_+1,M=(-1-p)*m+(1.5+p)*b+.5*_,v=p*m-p*b;for(let R=0;R!==a;++R)r[R]=u*o[h+R]+g*o[c+R]+M*o[l+R]+v*o[d+R];return r}},Vo=class extends ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Ho=class extends ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pr(e,this.TimeBufferType),this.values=pr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:pr(t.times,Array),values:pr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ko(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case So:e=this.InterpolantFactoryMethodLinear;break;case ha:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return ha}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&d0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ha,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,f=d-i,p=d+i;for(let _=0;_!==i;++_){let b=e[d+_];if(b!==e[f+_]||b!==e[p+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)e[f+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=So;var vi=class extends cn{constructor(t,e,i){super(t,e,i)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=yr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends cn{};Go.prototype.ValueTypeName="color";var Wo=class extends cn{};Wo.prototype.ValueTypeName="number";var Xo=class extends ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)$n.slerpFlat(r,0,o,c-a,o,c,l);return r}},Nr=class extends cn{InterpolantFactoryMethodLinear(t){return new Xo(this.times,this.values,this.getValueSize(),t)}};Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends cn{constructor(t,e,i){super(t,e,i)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=yr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends cn{};qo.prototype.ValueTypeName="vector";var Gc={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Yo=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},f0=new Yo,Is=class{constructor(t){this.manager=t!==void 0?t:f0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Is.DEFAULT_MATERIAL_NAME="__DEFAULT";var $o=class extends Is{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Gc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Es("img");function l(){h(),Gc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Fr=class extends Is{constructor(t){super(t)}load(t,e,i,s){let r=new Be,o=new $o(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}};var al="\\[\\]\\.:\\/",p0=new RegExp("["+al+"]","g"),ol="[^"+al+"]",m0="[^"+al.replace("\\.","")+"]",g0=/((?:WC+[\/:])*)/.source.replace("WC",ol),_0=/(WCOD+)?/.source.replace("WCOD",m0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ol),x0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ol),y0=new RegExp("^"+g0+_0+v0+x0+"$"),M0=["material","materials","bones","map"],Zo=class{constructor(t,e,i){let s=i||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},oe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(p0,"")}static parseTrackName(t){let e=y0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);M0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Zo;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var s_=new Float32Array(1);var Wc=new ye,Or=class{constructor(t,e,i=0,s=1/0){this.ray=new Er(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wc),this}intersectObject(t,e=!0,i=[]){return Jo(t,this,i,e),i.sort(Xc),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Jo(t[s],this,i,e);return i.sort(Xc),i}};function Xc(n,t){return n.distance-t.distance}function Jo(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Jo(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);var S0=`
varying vec3 vNw;varying vec3 vPw;
void main(){
  vec4 w=modelMatrix*vec4(position,1.);
  vPw=w.xyz;
  vNw=normalize(mat3(modelMatrix)*normal);
  gl_Position=projectionMatrix*viewMatrix*w;
}`,gh="vec3(.2126,.7152,.0722)",b0=`
uniform float uAlpha,uHasTex,uMix,uZoom,uRot,uTint,uBack,uIor,uDisp,uGlow;
uniform vec2 uPan;
uniform vec3 uA,uB,uC,uD,uSky,uFloor,uCenter;
uniform sampler2D uTex,uTex2;
varying vec3 vNw;varying vec3 vPw;
mat2 rot(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
vec2 lens(vec2 p,float z,float ior){
  vec3 P=vec3(p,z);
  vec3 d1=refract(vec3(0.,0.,-1.),P,1./ior);
  vec3 Q=P-2.*dot(P,d1)*d1;
  vec3 d2=refract(d1,-Q,ior);
  if(dot(d2,d2)<1e-5)d2=reflect(d1,-Q);
  float s=(-uBack-Q.z)/min(d2.z,-.05);
  return Q.xy+d2.xy*s;
}
vec2 suv(vec2 h){return rot(uRot)*h/(uZoom*2.)+.5+uPan;}
vec3 sub(vec2 uv){
  vec3 b=texture2D(uTex,uv).rgb;
  return uMix<.999?mix(texture2D(uTex2,uv).rgb,b,uMix):b;
}
vec3 tint(vec3 c){
  float l=dot(c,${gh});
  vec3 g=l<.5?mix(uB,uC,smoothstep(0.,.5,l)):mix(uC,uD,smoothstep(.5,1.,l));
  g*=l/max(dot(g,${gh}),1e-3);
  return mix(c,clamp(g,0.,1.),uTint);
}
void main(){
  vec3 N=normalize(vNw);
  vec3 V=normalize(cameraPosition-vPw);
  float ndv=clamp(dot(N,V),0.,1.);
  float edge=1.-ndv;
  float fr=.04+.96*pow(edge,5.);
  vec3 R=reflect(-V,N);
  vec3 D=normalize(cameraPosition-uCenter);
  vec3 rt=normalize(cross(vec3(0.,1.,0.),D));
  vec3 up=cross(D,rt);
  vec2 p=vec2(dot(N,rt),dot(N,up));
  float r=length(p);
  vec3 base=mix(uB,uC,.35+.4*dot(N,up));
  vec3 col=base;
  if(uHasTex>.001){
    float z=max(dot(N,D),0.);
    float dp=uDisp*smoothstep(.8,1.,r);
    vec2 hg=lens(p,z,uIor);
    vec3 sg=sub(suv(hg));
    vec3 sp=vec3(sub(suv(lens(p,z,uIor-dp))).r,sg.g,sub(suv(lens(p,z,uIor+dp))).b);
    vec3 tc=tint(sg)+clamp(sp-sg,-.09,.09)*smoothstep(.84,.99,r);
    col=mix(base,tc,uHasTex);
  }
  vec3 env=mix(uFloor,uSky,smoothstep(-.45,.55,dot(R,up)));
  col=mix(col,env,fr*.42);
  col=mix(col,uC,pow(edge,3.6)*.34*uGlow);
  col*=1.-smoothstep(.9,.975,r)*(1.-smoothstep(.975,1.,r))*.1;
  col+=smoothstep(.962,.992,r)*(1.-smoothstep(.992,1.,r))*.3;
  vec3 L=normalize(-.55*rt+.62*up+.56*D);
  vec3 Lu=normalize(cross(L,up)),Lv=normalize(cross(Lu,L));
  float lu=dot(R,Lu),lv=dot(R,Lv),ll=dot(R,L);
  float box=smoothstep(.1,.055,abs(lu))*smoothstep(.17,.115,abs(lv))*smoothstep(.6,.9,ll);
  col+=box*.3;
  float hot=pow(max(ll,0.),320.);
  col+=hot*.75;
  vec3 L2=normalize(.6*rt-.5*up+.6*D);
  col+=pow(max(dot(R,L2),0.),60.)*.12*uSky;
  gl_FragColor=vec4(col,uAlpha);
  #include <colorspace_fragment>
}`;function Ie(n){return new Ht(n)}function ll(n){let[t,e,i,s]=n.map(Ie);return new ze({vertexShader:S0,fragmentShader:b0,transparent:!0,uniforms:{uAlpha:{value:1},uHasTex:{value:0},uMix:{value:1},uA:{value:t},uB:{value:e},uC:{value:i},uD:{value:s},uTex:{value:null},uTex2:{value:null},uZoom:{value:.5},uRot:{value:0},uPan:{value:new $t},uTint:{value:.25},uBack:{value:1},uIor:{value:1.2},uDisp:{value:.006},uGlow:{value:1},uCenter:{value:new F},uSky:{value:Ie("#ffffff")},uFloor:{value:Ie("#d9d9de")}}})}var E0=`
uniform vec3 uColor;uniform float uAlpha;varying vec2 vUv;
void main(){vec2 p=vUv*2.-1.;float d=length(p);float a=exp(-d*d*4.2)*(1.-smoothstep(.85,1.,d));gl_FragColor=vec4(uColor,a*uAlpha);
#include <colorspace_fragment>
}`,_h="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}";function cl(n="#2a3140"){return new ze({vertexShader:_h,fragmentShader:E0,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:Ie(n)},uAlpha:{value:.5}}})}var w0=`
uniform sampler2D uMap;uniform float uHas,uAlpha,uRadius,uAspect,uDim;uniform vec3 uTint;varying vec2 vUv;
float rbox(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
void main(){
  vec2 p=(vUv-.5)*vec2(uAspect,1.);
  float d=rbox(p,vec2(uAspect,1.)*.5,uRadius);
  float m=1.-smoothstep(-.004,.0015,d);
  vec3 c=mix(uTint,texture2D(uMap,vUv).rgb,uHas);
  c*=1.-uDim;
  gl_FragColor=vec4(c,m*uAlpha);
  #include <colorspace_fragment>
}`;function vh(n,{tint:t="#e9ebee"}={}){return new ze({vertexShader:_h,fragmentShader:w0,transparent:!0,uniforms:{uMap:{value:null},uHas:{value:0},uAlpha:{value:1},uRadius:{value:.03},uAspect:{value:n},uDim:{value:0},uTint:{value:Ie(t)}}})}var T0=`
uniform vec3 uTop,uMid,uBot,uGlow;uniform float uMidAt,uGlowA,uGlowY,uGlowR,uAspect;varying vec2 vUv;
float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
vec3 lin2ok(vec3 c){
  float l=.4122214708*c.r+.5363325363*c.g+.0514459929*c.b;
  float m=.2119034982*c.r+.6806995451*c.g+.1073969566*c.b;
  float s=.0883024619*c.r+.2817188376*c.g+.6299787005*c.b;
  l=pow(max(l,0.),1./3.);m=pow(max(m,0.),1./3.);s=pow(max(s,0.),1./3.);
  return vec3(.2104542553*l+.793617785*m-.0040720468*s,1.9779984951*l-2.428592205*m+.4505937099*s,.0259040371*l+.7827717662*m-.808675766*s);
}
vec3 ok2lin(vec3 c){
  float l=c.x+.3963377774*c.y+.2158037573*c.z;
  float m=c.x-.1055613458*c.y-.0638541728*c.z;
  float s=c.x-.0894841775*c.y-1.291485548*c.z;
  l=l*l*l;m=m*m*m;s=s*s*s;
  return vec3(4.0767416621*l-3.3077115913*m+.2309699292*s,-1.2684380046*l+2.6097574011*m-.3413193965*s,-.0041960863*l-.7034186147*m+1.707614701*s);
}
vec3 okmix(vec3 a,vec3 b,float t){return ok2lin(mix(lin2ok(a),lin2ok(b),t));}
void main(){
  float y=1.-vUv.y;
  vec3 c=y<uMidAt?okmix(uTop,uMid,smoothstep(0.,uMidAt,y)):okmix(uMid,uBot,smoothstep(uMidAt,1.,y));
  vec2 p=vec2((vUv.x-.5)*uAspect,vUv.y-uGlowY);
  float g=exp(-dot(p,p)/(uGlowR*uGlowR));
  c=okmix(c,uGlow,g*uGlowA);
  gl_FragColor=vec4(c,1.);
  #include <colorspace_fragment>
  gl_FragColor.rgb+=(h(gl_FragCoord.xy)-.5)/255.;
}`;function xh(){let n=new ze({vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:T0,depthWrite:!1,depthTest:!1,uniforms:{uTop:{value:Ie("#f4f4f5")},uMid:{value:Ie("#f1f1f2")},uBot:{value:Ie("#e9e9eb")},uGlow:{value:Ie("#ffffff")},uMidAt:{value:.55},uGlowA:{value:0},uGlowY:{value:.5},uGlowR:{value:.4},uAspect:{value:1}}}),t=new fe(new Kn(2,2),n);return t.frustumCulled=!1,t.renderOrder=-10,t}function Ls(n,t){let e={};Ie(n).getHSL(e,de);let i=e.h>.09&&e.h<.28?Math.min(1,t/.35):0;return new Ht().setHSL(e.h-.04*i,Math.min(1,e.s*(1.06+.14*i)),e.l*(1-t),de)}var A0=(globalThis.__ASSETS__||"./data/").replace(/\/?$/,"/"),_e=n=>/^https?:/.test(n)?n:A0+n,Me={topics:[],items:{},countries:[],daily:null},hl=n=>n?String(n).slice(0,4):"",Ds=n=>String(n).padStart(3,"0"),rt=(n,t={},...e)=>{let i=document.createElement(n);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?i.className=r:s==="html"?i.innerHTML=r:s.startsWith("on")?i.addEventListener(s.slice(2),r):i.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&i.append(s);return i},yi=window.parent!==window,C0=0;function Vr(n,t={},e=0){return new Promise((i,s)=>{if(!yi)return s(Object.assign(new Error("standalone"),{code:"unsupported"}));let r=`d${++C0}`,o=0,a=l=>{l.source!==parent||l.data?.abstracts!=="result"||l.data.id!==r||(removeEventListener("message",a),clearTimeout(o),l.data.ok?i(l.data.value):s(Object.assign(new Error(l.data.error?.message||"failed"),{code:l.data.error?.code})))};addEventListener("message",a),e&&(o=setTimeout(()=>{removeEventListener("message",a),s(Object.assign(new Error("timeout"),{code:"timeout"}))},e)),parent.postMessage({abstracts:"call",id:r,method:n,params:t},"*")})}var yh=(n,t={})=>{let e=new URLSearchParams({a_file:n});return t.m!=null?e.set("a_m",t.m):t.page>1?e.set("a_page",t.page):t.t>1&&e.set("a_t",Math.round(t.t)),`https://abstracts.co/a/declassified?${e}`};var Mi=n=>[n.agency,hl(n.date)].filter(Boolean).join(" \xB7 "),Si=(n,t)=>{let e=n?.mo?.[t];return e&&e.k==="p"&&!e.g?e.q.replace(/[“"]([^“”"]*)[”"]/g,"\u2018$1\u2019"):null},Us=n=>{let t=(n?.mo||[]).findIndex(e=>!e.g);return t<0?null:t},Ns=n=>!!n?.mo?.length&&n.mo.every(t=>t.g),ss=n=>`radial-gradient(circle at 50% 36%, ${n.orb[3]}, ${n.orb[2]} 46%, ${n.orb[1]} 82%, ${n.orb[0]})`;function Hr(n){let t=n.length,e="";for(let i=0;i<t;i++){let s=i/t*Math.PI*2-Math.PI/2,r=Math.max(.05,n[i]/99),o=100,a=100+r*26;e+=`<line x1="${(Math.cos(s)*o).toFixed(1)}" y1="${(Math.sin(s)*o).toFixed(1)}" x2="${(Math.cos(s)*a).toFixed(1)}" y2="${(Math.sin(s)*a).toFixed(1)}"/>`}return`<svg viewBox="-130 -130 260 260" aria-hidden="true">${e}</svg>`}var Te=matchMedia("(prefers-reduced-motion: reduce)");function Mh(n){let t=n?.lead&&Me.items[n.lead[0]],e=t?.mo?.[n.lead[1]];return e?.o?{img:t.dir+e.o,zoom:e.k==="p"?.7:.52}:n?.subject?{img:n.subject.img,zoom:n.subject.zoom||.6}:null}function ul(){let n=Me.daily;if(!n)return null;let t=new Date,e=`${String(t.getUTCMonth()+1).padStart(2,"0")}-${String(t.getUTCDate()).padStart(2,"0")}`,i=n.pins?.[e];if(i&&Me.items[i[0]])return{id:i[0],k:i[1],day:!0};if(!n.rot?.length)return null;let s=Date.UTC(...n.start.split("-").map((l,c)=>Number(l)-(c===1?1:0))),r=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),o=Math.floor((r-s)/864e5),a=n.rot[(o%n.rot.length+n.rot.length)%n.rot.length];return Me.items[a[0]]?{id:a[0],k:a[1]}:null}var hn={share:'<svg viewBox="0 0 24 24"><path d="M12 4v11M7.5 8.5L12 4l4.5 4.5M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',close:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',info:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r=".6" fill="currentColor"/></svg>',toc:'<svg viewBox="0 0 24 24"><path d="M9 6.5h10M9 12h10M9 17.5h10"/><circle cx="5" cy="6.5" r=".8" fill="currentColor"/><circle cx="5" cy="12" r=".8" fill="currentColor"/><circle cx="5" cy="17.5" r=".8" fill="currentColor"/></svg>',out:'<svg viewBox="0 0 24 24"><path d="M14 5h5v5M19 5l-8 8M17 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4"/></svg>',play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13M16 5.5v13" stroke-width="2.6"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M5 9.5h3l4-3.5v12l-4-3.5H5z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24"><path d="M5 9.5h3l4-3.5v12l-4-3.5H5z"/><path d="M16 10l4 4M20 10l-4 4"/></svg>',die:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="8.6" cy="8.6" r="1" fill="currentColor"/><circle cx="15.4" cy="8.6" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="8.6" cy="15.4" r="1" fill="currentColor"/><circle cx="15.4" cy="15.4" r="1" fill="currentColor"/></svg>'},Fs=n=>{if(!n)return"";let[t,e,i]=String(n).split("-");if(!e)return t;let s=new Date(Date.UTC(2e3,Number(e)-1,1)).toLocaleString("en",{month:"short",timeZone:"UTC"});return i?`${Number(i)} ${s} ${t}`:`${s} ${t}`},le={depth:0,stack:[],reuse:!1,push(n){if(this.reuse){this.reuse=!1,this.stack.push({close:n,hist:!0});return}let t=!1;try{history.pushState({dz:this.depth+1},""),this.depth++,t=!0}catch{}this.stack.push({close:n,hist:t})},soft(n){this.stack.push({close:n,hist:!1})},handoff(n){let t=this.stack.findLastIndex(e=>e.close===n);t<0||(this.stack[t].hist&&(this.reuse=!0),this.stack.splice(t,1))},back(){let n=this.stack[this.stack.length-1];n&&(n.hist&&this.depth>0?history.back():this.pop())},pop(){let n=this.stack.pop();n&&n.close()}};addEventListener("popstate",n=>{let t=Number(n.state?.dz)||0;if(t>le.depth){history.go(le.depth-t);return}for(;le.depth>t;){le.depth--;let e=le.stack.findLastIndex(s=>s.hist);if(e<0)break;let[i]=le.stack.splice(e,1);i.close()}});var dl="cubic-bezier(.2,.8,.2,1)",mn=(n,t,e)=>Math.min(e,Math.max(t,n)),Gr=n=>Number.isFinite(n)?`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`:"0:00",Wr=n=>Me.topics.find(t=>t.id===n.topic),Sh=()=>document.getElementById("stage"),pe=null,bh=()=>!!pe;function Eh(n){let t=Sh();return`inset(${Math.max(0,n.y)}px ${Math.max(0,t.clientWidth-n.x-n.w)}px ${Math.max(0,t.clientHeight-n.y-n.h)}px ${Math.max(0,n.x)}px round ${n.r}px)`}var wh="inset(0px 0px 0px 0px round 0px)";function R0(){if(!pe)return;let n=pe;pe=null,n.cleanup.forEach(t=>t());for(let t of n.inert)t.inert=!1;if(n.root.style.pointerEvents="none",Te.matches)n.root.remove();else{let t=n.from&&n.same?n.root.animate([{clipPath:wh,opacity:1},{clipPath:Eh(n.from),opacity:0}],{duration:300,easing:dl}):n.root.animate([{opacity:1},{opacity:0}],{duration:180});t.onfinish=()=>n.root.remove()}(n.ret?.isConnected?n.ret:document.getElementById("gl")).focus?.({preventScroll:!0}),n.onClose?.()}function I0(n,t){let e=rt("div",{class:"sheet",role:"dialog",tabindex:"-1"}),i=rt("div",{class:"grab"});e.append(i),t(e);let s=a=>{!e.contains(a.target)&&!a.target.closest("#vt")&&le.back()},r=()=>{e.remove(),n.removeEventListener("pointerdown",s,!0),pe&&(pe.sheet=null)},o=null;i.addEventListener("pointerdown",a=>{o=a.clientY,i.setPointerCapture(a.pointerId)}),i.addEventListener("pointermove",a=>{o!=null&&(e.style.transform=`translateY(${Math.max(0,a.clientY-o)}px)`)}),i.addEventListener("pointerup",a=>{let l=a.clientY-o;o=null,e.style.transform="",l>50&&le.back()}),n.addEventListener("pointerdown",s,!0),n.append(e),le.push(r),pe&&(pe.sheet=e),e.focus({preventScroll:!0})}function P0(n,t,e){if(pe?.sheet){le.back();return}I0(t,i=>{n.summary&&i.append(rt("p",{},n.summary));let s=rt("div",{class:"kv"}),r=(o,a)=>a&&s.append(rt("span",{},o),typeof a=="string"?rt("b",{},a):a);if(r("Date",Fs(n.date)),r("Released",Fs(n.released)),r("From",n.agency),n.source&&r("Source",rt("a",{href:n.source,target:"_blank",rel:"noopener"},new URL(n.source).hostname.replace(/^www\./,""))),n.credit&&n.credit!==n.agency&&r("Credit",n.credit),i.append(s),n.type==="document"&&n.toc?.length&&e){let o=a=>rt("ul",{class:"toc"},a.map(l=>{let c=e.hosted.has(l.p);return rt("li",{},rt("button",{disabled:!c,onclick:c?()=>{le.back(),e.jump(l.p)}:null},rt("span",{},l.t),rt("em",{},String(l.p))),l.n?.length?o(l.n):null)}));i.append(o(n.toc))}})}function L0(n){let t=Wr(n),e=t?t.items.indexOf(n.id):-1;return e>=0&&e<t.items.length-1?Me.items[t.items[e+1]]:null}function fl(n,t,e=""){let i=L0(n);if(!i)return null;let s=Us(i),r=Si(i,s),o=s!=null?i.mo[s]:null,a=i.type==="audio"?null:o?.o?i.dir+o.o:i.type==="document"?i.face||i.thumb:i.poster||i.thumb;return rt("button",{class:`next ${e}`,onclick:()=>{t.onOpen?.(i.id),Os(i,{m:s,onClose:t.onClose,onOpen:t.onOpen})}},rt("i",{style:a?`background-image:url("${_e(a)}")`:`background:${ss(Wr(i))}`}),rt("div",{},rt("b",{class:r?"q":""},r||i.title),rt("span",{},r?i.title:Mi(i))))}function D0(n,t){let e=rt("div",{class:"loupe"});n.append(e);let i=116,s=2.3,r=0,o=!1,a=null,l=null,c=(g,M)=>{let v=l.getBoundingClientRect(),R=n.getBoundingClientRect(),A=(g-v.left)/v.width,T=(M-v.top)/v.height,L=M-R.top>=i+100;e.style.left=`${mn(g-R.left-i/2,4,n.clientWidth-i-4)+n.scrollLeft}px`,e.style.top=`${M-R.top+n.scrollTop+(L?-i-34:44)}px`,e.style.backgroundSize=`${v.width*s}px ${v.height*s}px`,e.style.backgroundPosition=`${-(A*v.width*s-i/2)}px ${-(T*v.height*s-i/2)}px`},h=()=>{o=!0,e.style.backgroundImage=`url("${t(l)}")`,e.classList.add("on"),c(a.x,a.y),navigator.vibrate?.(8)},d=()=>{clearTimeout(r),r=0,a=null,o&&(o=!1,e.classList.remove("on"))},f=(g,M,v)=>{let R=v.closest?.(".pg");R&&(l=R,a={x:g,y:M},clearTimeout(r),r=setTimeout(h,320))},p=(g,M,v)=>{if(o){v.preventDefault(),c(g,M);return}a&&Math.hypot(g-a.x,M-a.y)>8&&(clearTimeout(r),a=null)},_=g=>{g.touches.length===1?f(g.touches[0].clientX,g.touches[0].clientY,g.target):d()},b=g=>{g.touches.length===1&&p(g.touches[0].clientX,g.touches[0].clientY,g)},m=g=>{g.button===0&&g.pointerType==="mouse"&&f(g.clientX,g.clientY,g.target)},u=g=>{g.pointerType==="mouse"&&(a||o)&&p(g.clientX,g.clientY,g)};return n.addEventListener("touchstart",_,{passive:!0}),n.addEventListener("touchmove",b,{passive:!1}),n.addEventListener("touchend",d),n.addEventListener("touchcancel",d),n.addEventListener("pointerdown",m),n.addEventListener("pointermove",u),addEventListener("pointerup",d),n.addEventListener("contextmenu",g=>{g.target.closest(".pg")&&g.preventDefault()}),{active:()=>o,dispose:()=>{d(),removeEventListener("pointerup",d)}}}function U0(n,t,e,i,s,r){let o=i.m!=null?n.mo?.[i.m]:null,a=o?.k==="p"?o:null,l=a?a.p:i.page||1,c=n.shown||0,h=n.extra||{},d=[...Array(c).keys()].map(V=>V+1).concat(Object.keys(h).map(Number)).sort((V,it)=>V-it),f=new Set(d),p=new Set(n.hi||[]),_=n.pa||[],b=V=>h[V]||_[V-1]||_[0]||.773,m=n.pages||c,u=60,g=rt("div",{class:"pages"}),M=new Map,v=0,R=(V,it)=>rt("div",{class:"gap","aria-label":`Pages ${V} to ${it} are at the source`},rt("i"),rt("i"),rt("i"),rt("span",{},V===it?String(V):`${V}\u2013${it}`));for(let V of d){V-v>1&&g.append(R(v+1,V-1)),v=V;let it=rt("img",{alt:`Page ${V}`,loading:Math.abs(V-l)<=1?"eager":"lazy",decoding:"async",crossorigin:"anonymous",draggable:"false",src:_e(`${n.dir}p/${Ds(V)}.webp`)});it.addEventListener("load",()=>it.classList.add("ok"),{once:!0});let pt=rt("div",{class:"pg","data-n":V,style:`aspect-ratio:${b(V)}`},it);M.set(V,pt),g.append(pt)}m>v&&g.append(R(v+1,m));let A=fl(n,r);A&&g.append(A),t.append(g),t.classList.add("doc");let T=rt("div",{id:"pc"},`${l} / ${m}`);e.append(T);let L=0,E=new IntersectionObserver(V=>{for(let it of V)it.isIntersecting&&(T.textContent=`${it.target.dataset.n} / ${m}`);T.style.opacity=1,clearTimeout(L),L=setTimeout(()=>T.style.opacity=0,1600)},{root:t,rootMargin:"-45% 0px -45% 0px"});M.forEach(V=>E.observe(V));let y=()=>Math.min(t.clientWidth-32,760),C=1,W=0,z=()=>{g.style.setProperty("--pw",`${Math.round(y()*C)}px`),t.classList.toggle("zoomed",C>1.01)},Y=V=>{let it=M.get(V);if(!it||!p.has(V)||it.dataset.hi)return;it.dataset.hi=1;let pt=new Image;pt.crossOrigin="anonymous",pt.onload=()=>{let Ut=it.querySelector("img");Ut.src=pt.src,Ut.classList.add("ok")},pt.src=_e(`${n.dir}hi/${Ds(V)}.webp`)},Q=V=>{let it=Number(V.dataset.n);return _e(p.has(it)?`${n.dir}hi/${Ds(it)}.webp`:`${n.dir}p/${Ds(it)}.webp`)},H=(V,it,pt,Ut,At)=>{at=performance.now(),t.scrollLeft=Math.max(0,V.offsetLeft+it*V.offsetWidth-Ut),t.scrollTop=Math.max(0,V.offsetTop+pt*V.offsetHeight-At)},tt=(V,it,pt,Ut)=>{let At=M.get(V);if(!At)return;at=performance.now();let Zt=pt===0?At.offsetTop-u-6:At.offsetTop+pt*At.offsetHeight-u-(t.clientHeight-u)*.42,P=At.offsetLeft+it*At.offsetWidth-t.clientWidth/2;t.scrollTo({top:Math.max(0,Zt),left:Math.max(0,P),behavior:Ut&&!Te.matches?"smooth":"auto"})},k=null,at=0,lt=!1;if(a&&M.get(a.p)){let V=M.get(a.p);Y(a.p);let it=Math.min(...a.ln.map(It=>It[0])),pt=Math.max(...a.ln.map(It=>It[2])),Ut=Math.min(...a.ln.map(It=>It[1])),At=Math.max(...a.ln.map(It=>It[3])),Zt=a.ln.map(It=>[It[0]-.012,It[1]-.008,It[2]+.012,It[3]+.008]).map(([It,bt,w,x])=>`M${It} ${bt}H${w}V${x}H${It}Z`).join("");k=rt("div",{class:"veil",html:`<svg viewBox="0 0 1 1" preserveAspectRatio="none"><defs><filter id="vf" x="-.2" y="-.2" width="1.4" height="1.4"><feGaussianBlur stdDeviation=".004 .003"/></filter></defs><path filter="url(#vf)" fill-rule="evenodd" d="M-1 -1H2V2H-1Z${Zt}"/></svg>`}),V.append(k),V.append(rt("i",{class:"mark",style:`left:calc(${(a.ln[0][0]*100).toFixed(2)}% - 13px);top:${(Ut-.004)*100}%;height:${(At-Ut+.008)*100}%;background:${Wr(n)?.grad[1]||"#888"}`}));let P=a.ln.reduce((It,bt)=>It+(bt[3]-bt[1]),0)/a.ln.length,ee=y(),Bt=Math.max(.5,.4*P*ee/b(a.p)),Rt=7.5/Bt,Tt=(t.clientWidth-24)/((pt-it+.03)*ee);lt=Tt<Rt,C=W=mn(lt?Rt:Math.min(9/Bt,Tt),1,3.2),z(),requestAnimationFrame(()=>{tt(a.p,(it+pt)/2,(Ut+At)/2,!1),lt&&(t.scrollLeft=Math.max(0,V.offsetLeft+a.ln[0][0]*V.offsetWidth-22))})}else z(),l>1&&requestAnimationFrame(()=>tt(l,.5,0,!1));let xt=()=>{k&&performance.now()-at>400&&(k.classList.add("off"),k=null)};t.addEventListener("scroll",xt,{passive:!0});let Dt=D0(t,Q),Xt=(V,it,pt,Ut)=>{let At=V.getBoundingClientRect(),Zt=t.getBoundingClientRect(),P=(pt-At.left)/At.width,ee=(Ut-At.top)/At.height;C=mn(it,1,4),z(),H(V,P,ee,pt-Zt.left,Ut-Zt.top),C>1.3&&Y(Number(V.dataset.n))},X=0;t.addEventListener("click",V=>{let it=V.target.closest(".pg");if(!it||Dt.active())return;let pt=performance.now();pt-X<320?(X=0,Xt(it,C>1.05?1:Math.max(2.2,W),V.clientX,V.clientY)):X=pt});let j=null,_t=V=>Math.hypot(V[0].clientX-V[1].clientX,V[0].clientY-V[1].clientY);t.addEventListener("touchstart",V=>{if(V.touches.length!==2){j=null;return}let it=(V.touches[0].clientX+V.touches[1].clientX)/2,pt=(V.touches[0].clientY+V.touches[1].clientY)/2,Ut=document.elementFromPoint(it,pt)?.closest(".pg");j=Ut?{d:_t(V.touches),z:C,pg:Ut}:null},{passive:!0}),t.addEventListener("touchmove",V=>{!j||V.touches.length!==2||(V.preventDefault(),Xt(j.pg,j.z*_t(V.touches)/j.d,(V.touches[0].clientX+V.touches[1].clientX)/2,(V.touches[0].clientY+V.touches[1].clientY)/2))},{passive:!1}),t.addEventListener("touchend",()=>{j=null}),t.addEventListener("wheel",V=>{let it=V.ctrlKey&&V.target.closest(".pg");it&&(V.preventDefault(),Xt(it,C*Math.exp(-V.deltaY*.012),V.clientX,V.clientY))},{passive:!1});let $=()=>z();return addEventListener("resize",$),s.push(()=>{E.disconnect(),clearTimeout(L),Dt.dispose(),removeEventListener("resize",$)}),{jump:V=>{f.has(V)&&tt(V,.5,0,!0)},hosted:f}}function N0(n,t,e){let i=rt("i"),s=rt("u"),r=t.map(()=>rt("s")),o=rt("div",{class:"abar",role:"slider","aria-label":"Position","aria-valuemin":"0","aria-valuemax":"100",tabindex:"0"},i,s,...r),a=l=>{let c=o.getBoundingClientRect(),h=mn((l.clientX-c.left)/c.width,0,1),d=n();if(d)for(let f of t)Math.abs((f/d-h)*c.width)<12&&(h=f/d);return h};return o.addEventListener("pointerdown",l=>{o.setPointerCapture(l.pointerId),e(a(l)*n()),o.onpointermove=c=>e(a(c)*n())}),o.addEventListener("pointerup",()=>{o.onpointermove=null}),o.addEventListener("keydown",l=>{let c={ArrowRight:5,ArrowLeft:-5,PageUp:30,PageDown:-30}[l.key];c?(e(null,c),l.preventDefault()):l.key==="Home"?e(0):l.key==="End"&&e(n())}),{el:o,set(l){let c=n()||1,h=mn(l/c,0,1);i.style.width=`${h*100}%`,s.style.left=`${h*100}%`,o.setAttribute("aria-valuenow",Math.round(h*100)),o.setAttribute("aria-valuetext",`${Gr(l)} of ${Gr(c)}`),r.forEach((d,f)=>{d.style.left=`${t[f]/c*100}%`})}}}function Th(n,t,e,i){let s=rt("button",{class:"ic big","aria-label":"Play",html:hn.play}),r=rt("div",{class:"atime"}),o=()=>n.duration||t.duration||0,a=N0(o,e,(c,h)=>{o()&&(n.currentTime=mn(c??n.currentTime+h,0,o()-.2))}),l=()=>{a.set(n.currentTime),r.textContent=`${Gr(n.currentTime)} / ${Gr(o())}`};for(let c of["timeupdate","seeked","loadedmetadata","durationchange"])n.addEventListener(c,l);return n.addEventListener("play",()=>{s.innerHTML=hn.pause,s.setAttribute("aria-label","Pause")}),n.addEventListener("pause",()=>{s.innerHTML=hn.play,s.setAttribute("aria-label","Play")}),l(),{btn:s,time:r,bar:a.el,row:(...c)=>rt("div",{class:`actl${i?" dk":""}`},s,a.el,r,...c)}}function F0(n,t,e,i,s,r){let o=i.m!=null?n.mo?.[i.m]:null,a=o?.k==="v"?o:null,l=i.t||a?.t||0,c=!!a?.g||Ns(n)||Te.matches&&i.muted,h=rt("video",{playsinline:!0,preload:"auto",crossorigin:"anonymous",src:_e(n.media)});i.muted&&(h.muted=!0);let d=null;if(a?.po){let T=a.cr||[0,0,1,1];d=rt("img",{class:"cover",alt:"",src:_e(n.dir+a.po),style:`left:${T[0]*100}%;top:${T[1]*100}%;width:${T[2]*100}%;height:${T[3]*100}%`})}else!l&&n.poster&&(d=rt("img",{class:"cover",alt:"",src:_e(n.poster),style:"inset:0;width:100%;height:100%"}));let f=rt("div",{class:"vbox"},h,d),p=rt("div",{class:"vstage"},f),_=Th(h,n,(n.mo||[]).filter(T=>T.k==="v"&&!T.g).map(T=>T.t),!0),b=rt("button",{class:"ic","aria-label":"Sound",html:hn.sound}),m=rt("div",{class:"vid"},p,_.row(b));t.append(m);let u=n.aspect||16/9,g=()=>{let T=Math.min(p.clientWidth,p.clientHeight*u);f.style.width=`${T}px`,f.style.height=`${T/u}px`};g();let M=new ResizeObserver(g);M.observe(p);let v=()=>{b.innerHTML=h.muted?hn.mute:hn.sound,b.setAttribute("aria-label",h.muted?"Sound off":"Sound on")};v(),h.addEventListener("loadedmetadata",()=>{l&&(h.currentTime=Math.min(l,Math.max(0,h.duration-1)))},{once:!0});let R=()=>{d&&!h.paused&&h.currentTime>=l-.5&&d.classList.add("off")};h.addEventListener("playing",R),h.addEventListener("timeupdate",R);let A=()=>{h.paused?h.play().catch(()=>{}):h.pause()};_.btn.addEventListener("click",A),f.addEventListener("click",A),b.addEventListener("click",()=>{h.muted=!h.muted,v()}),h.addEventListener("ended",()=>{let T=fl(n,r,"over");T&&!p.querySelector(".next")&&p.append(T)}),h.addEventListener("play",()=>p.querySelector(".next")?.remove()),c||h.play().catch(()=>{h.muted=!0,v(),h.play().catch(()=>{})}),s.push(()=>{M.disconnect(),h.pause(),h.removeAttribute("src"),h.load()})}function O0(n,t,e){let i=rt("img",{alt:n.title,src:_e(n.media||n.thumb),crossorigin:"anonymous",draggable:"false"}),s=rt("div",{class:"media pz"},i);t.append(s);let r=1,o=0,a=0,l=0,c=0,h=0,d=new Map,f=null,p=0,_=()=>{let g=s.getBoundingClientRect(),M=Math.max(0,(i.offsetWidth*r-g.width)/2),v=Math.max(0,(i.offsetHeight*r-g.height)/2);o=mn(o,-M,M),a=mn(a,-v,v),i.style.transform=`translate(${o}px,${a}px) scale(${r})`,s.classList.toggle("zoomed",r>1)},b=(g,M,v)=>{let R=s.getBoundingClientRect(),A=M-(R.left+R.width/2),T=v-(R.top+R.height/2);o=A-(A-o)*(g/r),a=T-(T-a)*(g/r),r=g,r<=1.001&&(r=1,o=a=0)},m=()=>{cancelAnimationFrame(h);let g=()=>{l*=.92,c*=.92,o+=l,a+=c,_(),Math.hypot(l,c)>.3&&(h=requestAnimationFrame(g))};Te.matches||(h=requestAnimationFrame(g))};s.addEventListener("pointerdown",g=>{if(d.set(g.pointerId,{x:g.clientX,y:g.clientY}),cancelAnimationFrame(h),d.size===2){let[M,v]=[...d.values()];f={d:Math.hypot(M.x-v.x,M.y-v.y),z:r}}else f={x:g.clientX,y:g.clientY,lt:performance.now(),moved:!1};(r>1||d.size===2)&&s.setPointerCapture(g.pointerId)}),s.addEventListener("pointermove",g=>{if(!d.has(g.pointerId)||!f)return;let M=d.get(g.pointerId);if(d.set(g.pointerId,{x:g.clientX,y:g.clientY}),d.size===2&&f.d){let[v,R]=[...d.values()];b(mn(f.z*Math.hypot(v.x-R.x,v.y-R.y)/f.d,1,6),(v.x+R.x)/2,(v.y+R.y)/2),_()}else d.size===1&&r>1?(l=(g.clientX-M.x)*.6,c=(g.clientY-M.y)*.6,o+=g.clientX-M.x,a+=g.clientY-M.y,f.moved=!0,f.lt=performance.now(),_()):f.x!=null&&Math.hypot(g.clientX-f.x,g.clientY-f.y)>6&&(f.moved=!0)});let u=g=>{if(d.delete(g.pointerId)){if(d.size===0&&f&&!f.d&&g.type==="pointerup")if(f.moved)r>1&&performance.now()-f.lt<60&&m();else{let M=performance.now();M-p<320?(p=0,b(r>1?1:2.6,g.clientX,g.clientY),i.classList.add("anim"),_(),setTimeout(()=>i.classList.remove("anim"),300)):p=M}f=d.size?{x:null,moved:!0,lt:performance.now()}:null}};s.addEventListener("pointerup",u),s.addEventListener("pointercancel",u),s.addEventListener("wheel",g=>{!g.ctrlKey&&r<=1&&!document.body.classList.contains("vp")||(g.preventDefault(),b(mn(r*Math.exp(-g.deltaY*(g.ctrlKey?.012:.002)),1,6),g.clientX,g.clientY),_())},{passive:!1}),e.push(()=>cancelAnimationFrame(h))}function B0(n,t,e,i,s,r){let o=Wr(n),a=i.m!=null?n.mo?.[i.m]:null,l=a?.k==="a"?a:null,c=i.t||l?.t||0,h=!!l?.g||Ns(n)||i.muted,d=rt("audio",{preload:"auto",crossorigin:"anonymous",src:_e(n.media)}),f=rt("div",{class:"ring",html:Hr(n.wave||new Array(240).fill(10))}),p=rt("button",{class:"gorb","aria-label":"Play",style:`background:${ss(o)}`},rt("i")),_=rt("div",{class:"aorb",style:`--c:${o?.grad[1]||"#888"}`},f,p),b=Th(d,n,(n.mo||[]).filter(y=>y.k==="a"&&!y.g).map(y=>y.t),!1),m=rt("div",{class:"aud"},_,b.row(),d);t.append(m);let u=[...f.querySelectorAll("line")],g=-1,M=0,v=null,R=null,A=null,T=()=>{let y=Math.floor(d.currentTime/(d.duration||n.duration||1)*u.length);y!==g&&(u.forEach((C,W)=>C.classList.toggle("on",W<=y)),g=y)},L=()=>{if(M=requestAnimationFrame(L),T(),R&&!Te.matches){R.getByteTimeDomainData(A);let y=0;for(let C of A)y+=(C-128)*(C-128);p.style.transform=`scale(${1+Math.min(.06,Math.sqrt(y/A.length)/128*.5)})`}};d.addEventListener("loadedmetadata",()=>{c&&(d.currentTime=Math.min(c,d.duration-1))},{once:!0}),d.addEventListener("seeked",T);let E=async()=>{if(!v)try{v=new AudioContext,R=v.createAnalyser(),R.fftSize=512,A=new Uint8Array(R.fftSize),v.createMediaElementSource(d).connect(R),R.connect(v.destination)}catch{R=null}v?.state==="suspended"&&await v.resume().catch(()=>{}),d.paused?await d.play().catch(()=>{}):d.pause()};b.btn.addEventListener("click",E),p.addEventListener("click",E),d.addEventListener("play",()=>{cancelAnimationFrame(M),L(),_.classList.add("on"),m.querySelector(".next")?.remove()}),d.addEventListener("pause",()=>{cancelAnimationFrame(M),p.style.transform="",_.classList.remove("on")}),d.addEventListener("ended",()=>{let y=fl(n,r);y&&!m.querySelector(".next")&&m.append(y)}),h||E(),s.push(()=>{cancelAnimationFrame(M),d.pause(),d.removeAttribute("src"),d.load(),v?.close()})}async function Xr(n,t={}){let e=yh(n.id,t);if(yi)try{await Vr("share",{url:e});return}catch(i){if(i.code!=="unsupported")return}try{if(navigator.share){await navigator.share({url:e});return}}catch{return}try{await navigator.clipboard.writeText(e)}catch{}}function Os(n,{m:t=null,page:e=null,t:i=null,muted:s=!1,onClose:r,onOpen:o,from:a}={}){let l=Sh(),c={m:t!=null&&n.mo?.[t]?t:null,page:e,t:i,muted:s},h;if(pe)pe.cleanup.forEach(g=>g()),pe.cleanup=[],h=pe.root,h.querySelector("#pc")?.remove(),h.replaceChildren(),pe.onClose=r||pe.onClose,pe.onOpen=o||pe.onOpen,pe.same=!1,Te.matches||h.animate([{opacity:.3},{opacity:1}],{duration:240});else{h=rt("div",{id:"viewer",role:"dialog","aria-modal":"true"});let g=document.activeElement,M=[...l.children].filter(v=>!v.inert);M.forEach(v=>{v.inert=!0}),l.append(h),pe={root:h,onClose:r,onOpen:o,cleanup:[],ret:g,inert:M,from:a,same:!0,sheet:null},le.push(R0),yi&&!document.body.classList.contains("vp")&&l.scrollIntoView({block:"nearest"}),Te.matches||(a?h.animate([{clipPath:Eh(a),opacity:.4},{clipPath:wh,opacity:1}],{duration:420,easing:dl}):h.animate([{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"none"}],{duration:300,easing:dl}))}let d=n.type==="video"||n.type==="image";h.className=[d?"dark":"",n.type==="document"?"docv":""].join(" ").trim(),h.setAttribute("aria-label",n.title);let f=pe.cleanup,p=rt("div",{id:"vh"}),_=rt("div",{id:"vb"}),b=null,m=()=>{if(n.type==="document"){let M=Number(h.querySelector("#pc")?.textContent.split(" / ")[0])||1,v=(n.mo||[]).findIndex(R=>R.k==="p"&&R.p===M&&!R.g);return v>=0?{m:v}:{page:M}}let g=h.querySelector("video,audio");if(g&&g.currentTime>1){let M=(n.mo||[]).findIndex(v=>(v.k==="v"||v.k==="a")&&Math.abs(v.t-g.currentTime)<12&&!v.g);return M>=0?{m:M}:{t:g.currentTime}}return c.m!=null&&!n.mo[c.m].g?{m:c.m}:{}};p.append(rt("button",{class:"ic","aria-label":"Back",html:hn.back,onclick:()=>le.back()}),rt("button",{id:"vt","aria-label":`${n.title}. About this file`,onclick:()=>P0(n,h,b)},rt("b",{},n.title),rt("span",{},Mi(n))),rt("button",{class:"ic","aria-label":"Share",html:hn.share,onclick:()=>Xr(n,m())})),h.append(_,p);let u={onClose:pe.onClose,onOpen:pe.onOpen};n.type==="document"?b=U0(n,_,h,c,f,u):n.type==="video"?F0(n,_,h,c,f,u):n.type==="image"?O0(n,_,f):n.type==="audio"&&B0(n,_,h,c,f,u),h.tabIndex=-1,h.focus({preventScroll:!0})}var gn=null,pl=null,Ah=null,qr=null,_l=()=>!!gn;function ml(){if(!gn)return;gn.remove(),gn=null,document.body.classList.remove("wall");for(let t of qr.inert)t.inert=!1;let n=qr.ret;qr=null,Ah?.(),(n?.isConnected?n:document.getElementById("gl")).focus?.({preventScroll:!0})}var Ch=n=>(n||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,""),z0=n=>Ch(n).split(/[^a-z0-9]+/).filter(t=>t.length>1),gl=(n,t)=>{let e=Ch(n);return t.every(i=>e.includes(i))};function k0(){let n=[];for(let t of Me.topics)for(let e of t.items){let i=Me.items[e];if(!i)continue;if(i.type==="audio"){n.push({t,it:i,k:(i.mo||[]).findIndex(r=>!r.g),tape:!0});continue}let s=!1;(i.mo||[]).forEach((r,o)=>{r.g||!r.o||(s=!0,n.push({t,it:i,k:o,img:i.dir+r.o,q:Si(i,o),glass:r.k==="p"}))}),s||n.push({t,it:i,k:null,img:i.poster||i.thumb})}return n}function Rh({openFile:n,onClose:t}){if(gn)return;Ah=t;let e=document.getElementById("stage"),i=rt("input",{id:"q",type:"search",placeholder:"Search",autocomplete:"off",spellcheck:"false",enterkeyhint:"search","aria-label":"Search the files"}),s=rt("div",{id:"fr"}),r=rt("div",{id:"fh"},i,rt("button",{class:"ic","aria-label":"Close",html:hn.close,onclick:()=>le.back()})),o=[...e.children].filter(u=>!u.inert);qr={ret:document.activeElement,inert:o},o.forEach(u=>{u.inert=!0}),gn=rt("div",{id:"find",role:"dialog","aria-modal":"true","aria-label":"All moments"},r,s),e.append(gn),document.body.classList.add("wall"),le.push(ml),yi&&!document.body.classList.contains("vp")&&e.scrollIntoView({block:"nearest"});let a=k0(),l=(u,g,M)=>{le.handoff(ml),ml(),n(u.id,M?{page:M}:{m:g>=0?g:null})},c=u=>{if(u.tape)return rt("div",{class:"ti glass tape",style:`background:${ss(u.t)};--c:${u.t.orb[3]}`,html:Hr(u.it.wave||[])});let g=rt("img",{alt:"",loading:"lazy",decoding:"async",src:_e(u.img)});return g.addEventListener("load",()=>g.classList.add("ok"),{once:!0}),rt("div",{class:`ti${u.glass?" glass":""}`},g)},h=u=>rt("button",{class:"tile",onclick:()=>l(u.it,u.k)},c(u),rt("b",{class:u.q?"q":""},u.q||u.it.title)),d=(u,g)=>{let M=Mh(u);return rt("section",{class:"band",style:`--g0:${u.grad[0]}`},rt("h3",{},rt("i",{style:M?`background-image:url("${_e(M.img)}")`:`background:${ss(u)}`}),u.name),rt("div",{class:"grid"},g.map(h)))},f=()=>{!yi||document.body.classList.contains("vp")||requestAnimationFrame(()=>{if(!gn)return;let u=r.offsetHeight+s.scrollHeight+24;gn.classList.toggle("capped",u>5800),e.style.height=`${Math.min(5800,Math.max(560,u))}px`,parent.postMessage({abstractsHeight:Math.ceil(document.body.getBoundingClientRect().height)},"*")})},p=u=>Me.topics.map(g=>[g,a.filter(M=>M.t===g&&(!u.length||gl(`${M.q||""} ${M.it.title} ${M.it.agency} ${g.name} ${hl(M.it.date)}`,u)))]).filter(([,g])=>g.length).map(([g,M])=>d(g,M));s.replaceChildren(...p([])),f();let _=0,b=async()=>{let u=++_,g=z0(i.value);if(!g.length){s.replaceChildren(...p([])),f();return}let M=p(g);pl||(pl=fetch(_e("search.json?v=2")).then(L=>L.ok?L.json():{pages:[]}).catch(()=>({pages:[]})));let v=await pl;if(u!==_||!gn)return;let R=[];for(let[L,E,y]of v.pages||[]){let C=Me.items[L];if(!C||!gl(y,g))continue;let W=y.split(`
`).find(z=>gl(z,g.slice(0,1)))||"";if(R.push({it:C,p:E,line:W.length>140?`${W.slice(0,137)}\u2026`:W}),R.length>=40)break}let A=R.length?rt("div",{class:"hits"},R.map(L=>rt("button",{class:"hit",onclick:()=>l(L.it,null,L.p)},rt("b",{},L.line),rt("span",{},`${L.it.title} \xB7 ${L.p}`)))):null,T=[...M,A].filter(Boolean);s.replaceChildren(...T.length?T:[rt("div",{class:"none"},"\u2205")]),f()},m=0;i.addEventListener("input",()=>{clearTimeout(m),m=setTimeout(b,140)})}var Ce=n=>document.querySelector(n),je=Ce("#stage"),ni=Ce("#gl"),ra=window.parent!==window,ce=new URLSearchParams(location.hash.slice(1)).get("shot"),hs=!ra;document.body.classList.toggle("vp",hs);var Ae=(n,t,e)=>Math.min(e,Math.max(t,n)),Ke=(n,t,e)=>n+(t-n)*e,Dn=(n,t,e)=>{let i=Ae((e-n)/(t-n),0,1);return i*i*(3-2*i)},Ih=n=>1-Math.pow(1-n,3);function V0(){return Math.round(Ae(je.clientWidth*1.42,560,780))}function Ml(){!ra||hs||parent.postMessage({abstractsHeight:Math.ceil(document.body.getBoundingClientRect().height)},"*")}addEventListener("message",n=>{n.source!==parent||!n.data||n.data.abstractsLayout!=="viewport"||hs||(hs=!0,document.body.classList.add("vp"),parent.postMessage({abstractsLayout:"viewport"},"*"),ta())});ra&&parent.postMessage({abstractsLayout:"request"},"*");var ei=new Lr({canvas:ni,antialias:!0,powerPreference:"high-performance",alpha:!1}),jr=Math.min(devicePixelRatio||1,2);ei.setPixelRatio(jr);ei.outputColorSpace=de;ei.setClearColor("#f3f3f4");var Qe=new Dr,ti=new Oe(30,1,.1,100);ti.position.set(0,0,8);var Cl=xh();Qe.add(Cl);var Gh=new Fr;Gh.setCrossOrigin("anonymous");var Jr=new Map;function Wh(n,t){let e=n+(t?"#m":"");return Jr.has(e)||Jr.set(e,new Promise(i=>Gh.load(n,s=>{s.colorSpace=de,s.anisotropy=Math.min(8,ei.capabilities.getMaxAnisotropy()),t&&(s.wrapS=s.wrapT=Zi),i(s)},void 0,()=>i(null)))),Jr.get(e)}var un=1,be=1,rs=1,ke=1;function Ph(){un=je.clientWidth,be=je.clientHeight,ei.setSize(un,be,!1),ti.aspect=un/be,ti.updateProjectionMatrix(),ke=2*Math.tan(ah.degToRad(15))*8,rs=ke*ti.aspect,Cl.material.uniforms.uAspect.value=un/be,na="",ve()}function ta(){if(ce){let[n,t]={logo:[512,512],banner:[1500,500],cover:[1200,750],share:[1200,630]}[ce]||[1200,750];Object.assign(je.style,{width:`${n}px`,height:`${t}px`}),document.body.classList.add("shot",`shot-${ce}`),Ph();return}if(_l()){Ml();return}je.style.height=hs?"":`${V0()}px`,Ph(),Ml()}var Xh=new Ur(1,96,64),as=new Kn(1,1),H0=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let t=n.getContext("2d");t.fillStyle="rgba(0,0,0,.28)",t.beginPath(),t.arc(64,64,60,0,7),t.fill(),t.strokeStyle="rgba(255,255,255,.55)",t.lineWidth=2,t.stroke(),t.fillStyle="#fff",t.beginPath(),t.moveTo(52,42),t.lineTo(52,86),t.lineTo(88,64),t.closePath(),t.fill();let e=new Rs(n);return e.colorSpace=de,e})();function qh(n){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.translate(256,256);let i=n.length;e.strokeStyle="rgba(255,255,255,.82)",e.lineCap="round",e.lineWidth=3.2;for(let r=0;r<i;r+=2){let o=r/i*Math.PI*2-Math.PI/2,a=Math.max(.06,n[r]/99),l=196,c=196+a*54;e.beginPath(),e.moveTo(Math.cos(o)*l,Math.sin(o)*l),e.lineTo(Math.cos(o)*c,Math.sin(o)*c),e.stroke()}let s=new Rs(t);return s.colorSpace=de,s}var wt=[],Yt={pos:0,vel:0,target:0,drag:!1},me={pos:0,vel:0,target:0,drag:!1},se=!1,Qn=0,he=0,jn=null,Sl=-1,Kr=0,Un={from:0,to:0,t0:-9,dur:.42},cs=new Set,ea="us",G0=Ie("#f5f5f6"),W0=Ie("#f1f1f3"),bl=Ie("#e4e4e8"),dn=n=>Me.items[n];function Yh(n,t){let e=dn(t?.id),i=e?.mo?.[t?.k];return e&&i?.o?{ref:t,it:e,img:_e(e.dir+i.o),video:i.os&&!Te.matches?_e(e.dir+i.os):null,paper:i.k==="p",zoom:i.k==="p"?.7:.54}:e&&ce==="share"?{ref:t,it:e,img:null,video:null,paper:!1,zoom:.5}:n.t.subject?{ref:t,it:e,img:_e(n.t.subject.img),video:null,paper:!1,zoom:n.t.subject.zoom||.6}:{ref:t,it:e,img:null,video:null,paper:!1,zoom:.5}}function X0(n){if(n.lead&&dn(n.lead[0]))return{id:n.lead[0],k:n.lead[1]};for(let t of n.items){let e=(dn(t)?.mo||[]).findIndex(i=>i.o&&!i.g);if(e>=0)return{id:t,k:e}}return null}var Rl=n=>se&&wt[he]?.show.ref?.id===n.id?wt[he].show.ref.k:Us(n);function $h(){Il(null);for(let t of wt.splice(0))Qe.remove(t.orb,t.sh),t.orb.material.dispose(),t.sh.material.dispose(),t.cards&&Zh(t),t.vid&&(t.vid.el.pause(),t.vid.el.removeAttribute("src"),t.vid.el.load(),t.vid.tex.dispose());let n=ul();Me.topics.filter(t=>(t.country||"us")===ea).forEach((t,e)=>{let i=new fe(Xh,ll(t.orb));i.material.uniforms.uFloor.value.copy(bl),i.userData={kind:"orb",i:e};let s=new fe(as,cl(Ls(t.grad[1],.5)));s.renderOrder=-1,Qe.add(s,i);let r=n&&dn(n.id)?.topic===t.id?n:null,o={t,i:e,orb:i,sh:s,cards:null,glow:Ie(t.grad[1]),top:Ie(t.grad[0]),mid:Ie(t.grad[1]),bot:Ls(t.grad[1],.38),floor:Ls(t.grad[1],.2),land:-99,vid:null,head:!1,day:!!r?.day};o.show=Yh(o,r||X0(t)),wt.push(o)})}function El(n,t){!t||n.uTex.value===t||(n.uTex.value&&n.uHasTex.value>.5?(n.uTex2.value=n.uTex.value,n.uMix.value=0):n.uMix.value=1,n.uTex.value=t,cs.add(n),ve())}function wl(n){n.req||!n.show.img||(n.req=!0,Wh(n.show.img,!0).then(t=>{t&&(n.still=t,n.vid?.on||El(n.orb.material.uniforms,t))}))}function Il(n){for(let t of wt)t.vid&&t!==n&&t.vid.on&&(t.vid.on=!1,t.vid.el.pause(),t.still&&El(t.orb.material.uniforms,t.still));if(!(!n||!n.show.video||!n.still||n.vid?.dead)){if(!n.vid){let t=document.createElement("video");Object.assign(t,{muted:!0,loop:!0,playsInline:!0,crossOrigin:"anonymous",preload:"auto"}),t.setAttribute("muted",""),t.setAttribute("playsinline",""),t.src=n.show.video;let e=new Cs(t);e.colorSpace=de,e.wrapS=e.wrapT=Zi,n.vid={el:t,tex:e,on:!1,dead:!1},t.addEventListener("playing",()=>{n.vid?.on&&El(n.orb.material.uniforms,e)})}n.vid.on||(n.vid.on=!0,n.vid.el.play().catch(()=>{n.vid.on=!1,n.vid.dead=!0}))}}function q0(n,t,e){let i=wt[t];if(n.type==="audio"){let f=new fe(Xh,ll(i.t.orb));f.material.uniforms.uFloor.value.copy(i.floor),f.userData={kind:"card",ti:t,j:e},Qe.add(f);let p=null;return n.wave?.length&&(p=new fe(as,new Zn({map:qh(n.wave),transparent:!0,depthWrite:!1})),p.renderOrder=-1,Qe.add(p)),{item:n,mesh:f,ring:p,orb:!0,aspect:1}}let s=n.type==="video"?(n.mo||[]).find(f=>f.k==="v"&&!f.g):null,r=n.type==="document"?n.fa||n.aspect||.773:s?.a||n.aspect||(n.type==="video"?16/9:1),o=vh(r,{tint:i.t.grad[0]}),a=new fe(as,o);a.userData={kind:"card",ti:t,j:e},Qe.add(a);let l=new fe(as,cl(Ls(i.t.grad[1],.6)));l.renderOrder=-1,Qe.add(l);let c=null;n.type==="video"&&(c=new fe(as,new Zn({map:H0,transparent:!0,depthWrite:!1})),c.renderOrder=2,Qe.add(c));let h={item:n,mesh:a,mat:o,sh:l,play:c,aspect:r,face:null,url:null},d=n.type==="document"?n.face||n.thumb:n.type==="video"&&n.poster||n.thumb;return d&&(h.url=_e(d),Wh(h.url).then(f=>{!f||h.gone||(h.face=f,o.userData.video||(o.uniforms.uMap.value=f,cs.add(o.uniforms),ve()))})),h}function Zh(n){Se&&n.cards.includes(Se.card)&&ks(null);for(let t of n.cards){t.gone=!0,Qe.remove(t.mesh),t.mesh.material.dispose();for(let e of[t.play,t.sh,t.ring])e&&(Qe.remove(e),e.material.dispose());t.ring&&t.ring.material.map?.dispose(),t.face&&(t.face.dispose(),Jr.delete(t.url)),t.mat&&cs.delete(t.mat.uniforms)}n.cards=null}function Jh(n){let t=wt[n];return t.cards||(t.cards=t.t.items.map((e,i)=>q0(dn(e),n,i))),t.cards}var Se=null;function ks(n){if(Se&&Se.card===n)return;if(Se){Se.el.pause(),Se.el.removeAttribute("src"),Se.el.load();let i=Se.card.mat.uniforms;Se.card.mat.userData.video=!1,i.uMap.value=Se.card.face,i.uHas.value=Se.card.face?1:0,Se.tex.dispose(),Se=null}if(!n||!n.item.loop||n.noLoop||Te.matches||Ns(n.item))return;let t=document.createElement("video");Object.assign(t,{muted:!0,loop:!0,playsInline:!0,crossOrigin:"anonymous",preload:"auto"}),t.setAttribute("muted",""),t.setAttribute("playsinline",""),t.src=_e(n.item.loop);let e=new Cs(t);e.colorSpace=de,Se={card:n,el:t,tex:e},t.addEventListener("playing",()=>{Se?.el===t&&(n.mat.userData.video=!0,n.mat.uniforms.uMap.value=e,n.mat.uniforms.uHas.value=1)},{once:!0}),t.play().catch(()=>{n.noLoop=!0})}var vl=new F,Lh=new Ht,Dh=new Ht,Uh=new Ht,Nh=new Ht,Yr=new Ht,os=Ce("#label"),Y0=Ce("#tname"),xl=Ce("#dots"),Fh=Ce("#tn"),ls=Ce("#hq"),Vs="",Tl="",na="";function Kh(){if(ce){let r=ce==="share"&&wt[Math.round(Yt.pos)]?.show.it?.type==="audio",o=ce==="logo"?be*.34:ce==="banner"?be*.37:ce==="share"?be*(r?.33:.44):be*.31,a=be*(ce==="cover"?.44:ce==="share"?.5:.47);return{rpx:o,r:o/be*ke,y:ke/2-a/be*ke,cy:a}}let n=58,t=38,e=un>900?150:116,i=Math.max(60,Math.min(un*.38,(be-n-t-e-24)/2.36)),s=n+Math.max(0,(be-n-t-(i*2.36+e))/2)+i;return{rpx:i,r:i/be*ke,y:ke/2-s/be*ke,cy:s}}function Oh(n,t){if(n.drag)return!1;let e=Te.matches?400:160,i=Te.matches?40:25,s=3,r=t/s;for(let o=0;o<s;o++)n.vel+=(-e*(n.pos-n.target)-i*n.vel)*r,n.pos+=n.vel*r;return Math.abs(n.pos-n.target)<2e-4&&Math.abs(n.vel)<.002?(n.pos=n.target,n.vel=0,!1):!0}function Bh(n){n.style.fontSize="";let t=parseFloat(getComputedStyle(n).fontSize)||20;for(let e of[1,.9,.82])if(n.style.fontSize=e===1?"":`${(t*e).toFixed(1)}px`,n.scrollHeight<=t*e*1.24*3.25)break}function $0(n,t){if(!wt.length)return!1;let e=Oh(Yt,t)|Oh(me,t)|Yt.drag|me.drag,i=Ae((n-Un.t0)/Un.dur,0,1);Qn=Un.from+(Un.to-Un.from)*Ih(i),i<1&&(e=!0);let s=Qn,r=Kh(),o=r.r,a=r.y,l=ke/2-50/be*ke,c=Ae(Math.round(Yt.pos),0,wt.length-1),h=Ae(Math.floor(Yt.pos),0,wt.length-1),d=Math.min(wt.length-1,h+1),f=Ae(Yt.pos-h,0,1),p=wt[he];Nh.copy(wt[h].glow).lerp(wt[d].glow,f),Lh.copy(G0).lerp(p.top,s),Dh.copy(W0).lerp(p.mid,s),Uh.copy(bl).lerp(p.bot,s),Yr.copy(bl).lerp(p.floor,s);let _=Cl.material.uniforms;if(_.uTop.value.copy(Lh),_.uMid.value.copy(Dh),_.uBot.value.copy(Uh),_.uMidAt.value=Ke(.62,.56,s),_.uGlow.value.copy(Nh),_.uGlowA.value=.13*(1-s),_.uGlowY.value=.5+a/ke,_.uGlowR.value=.45,ce==="share"){let g=wt[c];_.uTop.value.copy(g.top),_.uMid.value.copy(g.top).lerp(g.mid,.45),_.uBot.value.copy(g.mid),_.uMidAt.value=.55,_.uGlow.value.set("#ffffff"),_.uGlowA.value=.35,_.uGlowR.value=.5,Yr.copy(g.mid)}wt.forEach((g,M)=>{let v=M-Yt.pos,R=Math.abs(v),A=Math.sign(v),T=A*(Math.min(R,1)*o*2.18+Math.max(R-1,0)*o*1.3),L=-Math.min(R,3)*1.7,E=o*(1-Math.min(R,2)*.2),y=a,C=1-Dn(ce==="banner"?3.2:1.5,ce==="banner"?3.8:2.3,R);(ce==="logo"||ce==="share")&&M!==c&&(C=0);let W=T,z=y,Y=L,Q=E;M===he?(T=Ke(T,0,s),y=Ke(y,l,s),L=Ke(L,0,s),E=Ke(E,Math.max(.15,19/be*ke),s)):(C*=1-s,T+=A*s*1.2),g.orb.position.set(T,y,L),g.orb.scale.setScalar(E),g.orb.visible=C>.005;let H=g.orb.material.uniforms;H.uAlpha.value=C,H.uFloor.value.copy(Yr),(R<2.6||M===he||ce)&&wl(g);let tt=M===c&&R<.02&&!se;tt&&g.land<-9&&(g.land=n),!tt&&R>.5&&(g.land=-99);let k=g.land>-9&&!Te.matches&&!ce,at=k?Ih(Ae((n-g.land)/7,0,1)):0;k&&n-g.land<7&&(e=!0);let lt=g.show.paper,xt=Ae(v,-1.3,1.3),Dt=g.head||!H.uTex.value?0:1;if(H.uHasTex.value!==Dt&&(H.uHasTex.value=Ae(H.uHasTex.value+Math.sign(Dt-H.uHasTex.value)*t/.3,0,1),e=!0),H.uZoom.value=g.show.zoom*(1+.04*at),H.uPan.value.set(xt*(lt?.03:.055),0),H.uRot.value=lt?0:xt*.05,H.uDisp.value=lt?0:.006,H.uTint.value=Ke(lt?.03:.08,.6,Dn(.05,1.1,R))*(1-s*.6),H.uGlow.value=1-Dn(.2,1.2,R)*.5,H.uCenter.value.copy(g.orb.position),g.orb.material.depthWrite=C>.98,g.sh.position.set(T,y-E*1.14,L-.02),g.sh.scale.set(E*2.3,E*.5,1),g.sh.material.uniforms.uAlpha.value=C*(1-s)*.42,g.sh.visible=g.orb.visible&&s<.99,g.ring&&(g.ring.position.set(T,y,L-.01),g.ring.scale.setScalar(E*2.62)),!(M===he&&Qn>.001&&!ce)){g.cards&&g.cards.forEach(Z0);return}let X=Jh(M),j=Math.min(ke*(un>700?.55:.46),rs*.9),_t=Ae(-me.vel*.035,-.22,.22);X.forEach(($,V)=>{let it=V/X.length*Math.PI*2,pt=W+Math.cos(it)*Q*.25,Ut=z+Math.sin(it)*Q*.25,At=Y,Zt=Q*.12,P=V-me.pos,ee=Math.abs(P),Bt=Math.sign(P),Rt=Te.matches?s:Ae(s*1.24-Math.min(ee,3)*.08,0,1),Tt=Bt*(Math.min(ee,1)*rs*.64+Math.max(ee-1,0)*rs*.16),It=-Math.min(ee,3)*1.7,bt=ke*.01,w=-Bt*Math.min(ee,1)*.5+_t,x=1-Dn(2.2,3.1,ee),N=Math.min(ee,1)*.28,Z=($.orb?j*.3:Math.min(j,rs*.74/$.aspect))*(1-Math.min(ee,1)*.14),K=Ke(pt,Tt,Rt),q=Ke(Ut,bt,Rt),vt=Ke(At,It,Rt),st=Ke(Zt,Z,Rt),ht=x*Dn(.05,.55,Rt);if($.mesh.visible=ht>.005,$.mesh.position.set(K,q,vt),$.orb){$.mesh.scale.setScalar(st);let zt=$.mesh.material.uniforms;zt.uAlpha.value=ht,zt.uCenter.value.copy($.mesh.position),zt.uFloor.value.copy(Yr),$.ring&&($.ring.visible=$.mesh.visible,$.ring.position.set(K,q,vt-.01),$.ring.scale.setScalar(st*2.62),$.ring.material.opacity=ht*(1-Math.min(ee,1)*.5))}else $.mesh.scale.set(st*$.aspect,st,1),$.mesh.rotation.y=w*Rt,$.mat.uniforms.uAlpha.value=ht,$.mat.uniforms.uDim.value=N*Rt,$.mat.uniforms.uRadius.value=Ke(.06,.02,Rt),$.sh.visible=$.mesh.visible,$.sh.position.set(K,q-st*.5,vt-.05),$.sh.scale.set(st*$.aspect*1.25,st*.14,1),$.sh.material.uniforms.uAlpha.value=ht*.55*Rt;if($.play){let zt=st*.22;$.play.visible=$.mesh.visible&&!(Se&&Se.card===$&&$.mat.userData.video),$.play.position.set(K,q,vt+.01),$.play.rotation.y=$.mesh.rotation.y,$.play.scale.set(zt,zt,1),$.play.material.opacity=ht}})});let b=Math.abs(Yt.pos-c);if(Kr=(1-Dn(.08,.42,b))*(1-Dn(0,.25,s)),`${c}`!==na){na=`${c}`;let g=wt[c],M=g.show.it,v=M?Si(M,g.show.ref.k):null,R=ls.querySelector("b");R.textContent=v||M?.title||"",R.classList.toggle("q",!!v),ls.querySelector("span").textContent=M?g.day?[M.agency,Fs(M.date)].filter(Boolean).join(" \xB7 "):Mi(M):"",ls.style.top=`${r.cy+r.rpx*1.22}px`,Bh(R),Fh.textContent=g.t.name}ls.style.opacity=Kr,Fh.style.opacity=Kr,ce||Il(!se&&b<.03&&Qn<.02?wt[c]:null),wt.some(g=>g.vid?.on&&!g.vid.el.paused)&&(e=!0);let m=Ae(Math.round(me.pos),0,(wt[he].cards?.length||1)-1);if(se){let g=wt[he].cards?.[m],M=g?g.item.id:"";if(M!==Vs){Vs=M;let v=g?.item,R=v?Si(v,Rl(v)):null,A=os.querySelector("b");A.textContent=R||v?.title||"",A.classList.toggle("q",!!R),os.querySelector("span").textContent=v?R?`${v.title} \xB7 ${Mi(v)}`:Mi(v):"",Bh(A)}os.style.opacity=(1-Dn(.08,.42,Math.abs(me.pos-m)))*Dn(.5,1,s),ks(Qn>.9&&g&&Math.abs(me.pos-m)<.2&&g.item.type==="video"?g:null),Se&&!Se.el.paused&&(e=!0)}else ks(null),os.style.opacity=0;let u=se?`f${he}:${m}:${wt[he].cards?.length||0}`:`h${c}`;if(u!==Tl){Tl=u;let g=se?wt[he].cards?.length||0:wt.length,M=se?m:c;xl.children.length!==g&&(xl.innerHTML="<i></i>".repeat(g)),[...xl.children].forEach((v,R)=>v.classList.toggle("on",R===M)),Ce("#prev").classList.toggle("can",M>0),Ce("#next").classList.toggle("can",M<g-1)}for(let g of cs)g.uHas?(g.uHas.value=Math.min(1,g.uHas.value+t/.28),g.uHas.value>=1&&cs.delete(g)):(g.uMix.value=Math.min(1,g.uMix.value+t/.32),g.uMix.value>=1&&cs.delete(g)),e=!0;return!!e}function Z0(n){n.mesh.visible=!1;for(let t of[n.play,n.sh,n.ring])t&&(t.visible=!1)}var ia=0,Qr=0,Hs=!0,sa=!1,Pl=!0,Qh=performance.now(),Gs=()=>!Hs||bh()||_l();function ve(){!ia&&!Gs()&&(Qr=performance.now(),Pl=!0,ia=requestAnimationFrame(jh))}var bi=jr,Bs=0,$r=0,J0=0,Zr=1e9,zh=!1;function K0(n){if(!(Pl||n<7||++J0<30)&&(Zr=Math.min(Zr*1.002,n),!(Zr>28))){if(n>Zr*1.7?(Bs++,$r=0):(Bs=Math.max(0,Bs-1),$r++),Bs>30&&bi>1)bi=Math.max(1,bi-.35),Bs=0;else if($r>300&&bi<jr&&!zh)bi=Math.min(jr,bi+.35),zh=!0,$r=0;else return;ei.setPixelRatio(bi),ei.setSize(un,be,!1)}}function jh(n){ia=0,K0(n-Qr),Pl=!1;let t=Math.min(.05,Math.max(.001,(n-Qr)/1e3));Qr=n;let e=(n-Qh)/1e3,i=$0(e,t);if(jn&&!Gs()&&Math.abs(Yt.pos-jn.ti)<.05){let s=jn;jn=null,aa(s.ti,s.j)}if(ei.render(Qe,ti),ce&&wt.length){let s=wt[Math.round(Yt.pos)],r=s?.orb.material.uniforms;window.__shotReady=!!r&&(!s.show.img||r.uHasTex.value>=1&&r.uMix.value>=1)&&!i}if(!sa&&wt.length&&wt[Ae(Math.round(Yt.pos),0,wt.length-1)].orb.material.uniforms.uHasTex.value>.99&&tu(),Gs()){Il(null),ks(null);return}(i||jn||!sa)&&(ia=requestAnimationFrame(jh))}function tu(){if(sa)return;sa=!0;let n=Ce("#fp");n&&(n.classList.add("out"),setTimeout(()=>n.remove(),400))}new IntersectionObserver(n=>{Hs=n[0].isIntersecting,Hs&&ve()}).observe(je);document.addEventListener("visibilitychange",()=>{Hs=!document.hidden,Hs&&ve()});ni.addEventListener("webglcontextrestored",()=>ve());function eu(n){Un.from=Qn,Un.to=n,Un.t0=(performance.now()-Qh)/1e3,Un.dur=Te.matches?.001:n?.46:.36,Te.matches&&ni.animate([{opacity:.35},{opacity:1}],{duration:180})}var Al=!1,kh=()=>{Al=!1,nu()};function aa(n,t,{push:e=!0}={}){let i=wt[n];if(t==null){let s=i.show.ref;t=Math.max(0,s?i.t.items.indexOf(s.id):0)}for(let s of wt)s.cards&&s!==i&&s.i!==Sl&&Zh(s);Sl=n,he=n,se=!0,Jh(n),me.pos=me.target=t,me.vel=0,Yt.target=n,document.body.classList.add("in"),Y0.textContent=i.t.name,Vs="",eu(1),Al||(Al=!0,e?le.push(kh):le.soft(kh)),i.head=i.show.paper,ve()}function nu(){if(!se)return;se=!1;let n=wt[he];n.head=!1,document.body.classList.remove("in"),eu(0),ve()}function Ws(n){jn=null;let t=se?me:Yt,e=se?wt[he].cards.length:wt.length;t.target=Ae(Math.round(t.target)+n,0,e-1),ve()}function iu(n,t){vl.copy(n.position).project(ti);let e=be/(ke*(ti.position.z-n.position.z)/8),i=(t?n.scale.x*2:n.scale.x)*e,s=(t?n.scale.x*2:n.scale.y)*e;return{x:(vl.x*.5+.5)*un-i/2,y:(-vl.y*.5+.5)*be-s/2,w:i,h:s,r:t?s/2:10}}var su=n=>{let t=se?wt[he].t.items.indexOf(n):-1;t>=0&&(me.pos=me.target=t,me.vel=0,Vs="")};function Q0(n){Os(n.item,{m:Rl(n.item),from:iu(n.mesh,n.orb),onClose:ve,onOpen:su})}function oa(){if(!se)return aa(Math.round(Yt.target));let n=wt[he].cards[Math.round(me.target)];n&&Q0(n)}function ru(){let n=wt[Ae(Math.round(Yt.pos),0,wt.length-1)];n?.show.it&&Os(n.show.it,{m:n.show.ref.k,from:iu(n.orb,!0),onClose:ve})}var Vh=new Or,Hh=new $t;function j0(n,t){let e=ni.getBoundingClientRect();Hh.set((n-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1),Vh.setFromCamera(Hh,ti);let i=[];wt.forEach((o,a)=>{o.orb.visible&&i.push(o.orb),o.cards&&se&&a===he&&o.cards.forEach(l=>l.mesh.visible&&i.push(l.mesh))});let s=Vh.intersectObjects(i,!1)[0];if(!s)return;let r=s.object.userData;if(r.kind==="orb"){if(se){r.i===he&&le.back();return}r.i===Math.round(Yt.pos)?aa(r.i):(Yt.target=r.i,ve())}else r.kind==="card"&&(r.j===Math.round(me.pos)?oa():(me.target=r.j,ve()))}function t_(n,t){let e=i=>{let s=i.getBoundingClientRect();return n>=s.left&&n<=s.right&&t>=s.top&&t<=s.bottom};if(!se&&Kr>.6&&e(ls))return ru();if(se&&Qn>.9&&e(os))return oa();j0(n,t)}var te=null,e_=()=>se?.64*un:Kh().r*2.18/rs*un;je.addEventListener("pointerdown",n=>{if(n.button!==0||te?.on||Gs()||n.target.closest("#top,.nav,.sheet"))return;jn=null;let t=se?me:Yt;te={x:n.clientX,y:n.clientY,t:performance.now(),pos0:t.pos,sc:t,on:!1,v:0,lx:n.clientX,lt:performance.now(),id:n.pointerId}});je.addEventListener("pointermove",n=>{if(!te||n.pointerId!==te.id)return;let t=n.clientX-te.x,e=n.clientY-te.y;if(!te.on)if(Math.abs(t)>6&&Math.abs(t)>Math.abs(e)*1.1)te.on=!0,te.x=n.clientX,te.pos0=te.sc.pos,te.sc.drag=!0,te.sc.vel=0,je.setPointerCapture(n.pointerId),ni.classList.add("drag");else if(Math.abs(e)>10){te=null;return}else return;let i=e_(),s=se?wt[he].cards.length:wt.length,r=performance.now(),o=-((n.clientX-te.lx)/i)/Math.max(.001,(r-te.lt)/1e3);te.v=Ke(te.v,o,.45),te.lx=n.clientX,te.lt=r;let a=te.pos0-(n.clientX-te.x)/i;a<0&&(a*=.3),a>s-1&&(a=s-1+(a-s+1)*.3),te.sc.pos=te.sc.target=a,ve()});var Ll=n=>{if(!te||n.pointerId!==te.id)return;let t=te;if(te=null,ni.classList.remove("drag"),t.on){t.sc.drag=!1;let e=se?wt[he].cards.length:wt.length,s=performance.now()-t.lt>90?0:Ae(t.v,-14,14),r=Math.round(t.pos0),o=Te.matches?Math.round(t.sc.pos+Math.sign(s)*(Math.abs(s)>.8?.5:0)):Math.round(t.sc.pos+s*.2);o=Ae(Ae(o,r-4,r+4),0,e-1),t.sc.target=o,t.sc.vel=Te.matches?0:s,ve()}else n.type==="pointerup"&&performance.now()-t.t<450&&t_(n.clientX,n.clientY)};je.addEventListener("pointerup",Ll);je.addEventListener("pointercancel",Ll);je.addEventListener("lostpointercapture",Ll);var zs=0,yl=0;ni.addEventListener("wheel",n=>{let t=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:hs||n.shiftKey?n.deltaY:0;if(!t)return;n.preventDefault();let e=performance.now();e-yl>260&&(zs=0),yl=e,zs+=t,Math.abs(zs)>60&&(Ws(Math.sign(zs)),zs=0,yl=e+200)},{passive:!1});addEventListener("keydown",n=>{if(n.key==="Escape"){le.back();return}Gs()||n.target.closest?.("input,textarea")||(n.key==="ArrowRight"?(Ws(1),n.preventDefault()):n.key==="ArrowLeft"?(Ws(-1),n.preventDefault()):n.key==="Enter"&&(n.target===ni||n.target===document.body)&&(oa(),n.preventDefault()))});ls.addEventListener("click",ru);os.addEventListener("click",oa);Ce("#back").addEventListener("click",()=>le.back());Ce("#prev").addEventListener("click",()=>Ws(-1));Ce("#next").addEventListener("click",()=>Ws(1));Ce("#share").addEventListener("click",()=>{if(se){let t=wt[he]?.cards?.[Math.round(me.target)];t&&Xr(t.item,{m:Rl(t.item)});return}let n=wt[Ae(Math.round(Yt.pos),0,wt.length-1)];n?.show.it&&Xr(n.show.it,{m:n.show.ref.k})});Ce("#search").addEventListener("click",()=>Rh({openFile:Dl,onClose:()=>{ta(),ve()}}));Ce("#dice").addEventListener("click",()=>{let n=[];for(let i of wt)for(let s of i.t.items)(dn(s)?.mo||[]).forEach((r,o)=>{r.g||n.push([s,o])});if(!n.length)return;let[t,e]=n[Math.floor(Math.random()*n.length)];Dl(t,{m:e})});function au(n){n===ea||!Me.countries.some(t=>t.id===n)||(ks(null),ea=n,se=!1,Qn=0,he=0,Sl=-1,document.body.classList.remove("in"),$h(),Yt.pos=Yt.target=0,na="",Tl="",ve())}function Dl(n,{m:t,page:e,t:i,muted:s}={}){let r=dn(n);if(!r)return;let o=Me.topics.find(c=>c.id===r.topic);if(!o)return;au(o.country||"us");let a=wt.findIndex(c=>c.t.id===r.topic),l=wt[a].t.items.indexOf(n);if(Os(r,{m:t,page:e,t:i,muted:s,onClose:ve,onOpen:su}),se&&he===a){me.pos=me.target=l,me.vel=0,Vs="";return}se&&nu(),Yt.pos=Yt.target=a,Yt.vel=0,jn={ti:a,j:l}}async function n_(){if(!ra){let t=new URLSearchParams((location.search+"&"+location.hash.slice(1)).replace(/^\?/,""));return{file:t.get("file"),m:t.get("m"),page:t.get("page"),t:t.get("t"),topic:t.get("topic")}}let n=()=>Vr("hello",{},500).catch(()=>null);for(let t=0;t<3;t++){let e=await n();if(e)return e.launch||null}return null}async function i_(){ta(),addEventListener("resize",ta),new ResizeObserver(Ml).observe(document.body);try{let s=await fetch(_e("catalog.json?v=2"));if(!s.ok)throw new Error(s.status);let r=await s.json();Object.assign(Me,{topics:r.topics,items:r.items,countries:r.countries,daily:r.daily||null})}catch{Ce("#err").hidden=!1,Ce("#err").textContent="Could not load the files. Try again later.",Ce("#fp")?.remove();return}if(ea=Me.countries[0]?.id||"us",$h(),ce==="share"){let s=new URLSearchParams(location.hash.slice(1)),r=dn(s.get("f")),o=r?wt.findIndex(a=>a.t.id===r.topic):-1;if(o>=0){let a=wt[o];a.show=Yh(a,{id:r.id,k:Number(s.get("m")||0)}),a.show.video=null,r.type==="audio"&&r.wave?.length&&(a.ring=new fe(as,new Zn({map:qh(r.wave),transparent:!0,depthWrite:!1})),a.ring.renderOrder=-1,Qe.add(a.ring)),Yt.pos=Yt.target=o,wl(a)}ve();return}if(ce){Yt.pos=Yt.target=Math.max(0,wt.findIndex(s=>s.t.id===new URLSearchParams(location.hash.slice(1)).get("t"))),ve();return}let n=ul(),t=Math.max(0,n?wt.findIndex(s=>s.t.id===dn(n.id)?.topic):0);Yt.pos=Yt.target=t,wt.slice(Math.max(0,t-1),t+2).forEach(wl),ve(),setTimeout(tu,4e3);let e=await n_();if(e?.file&&dn(e.file)){let s=dn(e.file),r=e.m!=null&&s.mo?.[Number(e.m)]?Number(e.m):e.page||e.t?null:Us(s);Dl(e.file,{m:r,page:Number(e.page)||null,t:Number(e.t)||null,muted:!0});return}let i=Me.topics.find(s=>s.id===e?.topic);if(i){au(i.country||"us");let s=wt.findIndex(r=>r.t.id===i.id);Yt.pos=Yt.target=s,aa(s,void 0,{push:!1})}}i_();export{ve as wake};
