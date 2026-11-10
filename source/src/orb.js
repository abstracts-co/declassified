import * as THREE from 'three';

const vertex = `
varying vec3 vNw;varying vec3 vPw;
void main(){
  vec4 w=modelMatrix*vec4(position,1.);
  vPw=w.xyz;
  vNw=normalize(mat3(modelMatrix)*normal);
  gl_Position=projectionMatrix*viewMatrix*w;
}`;

const LUMA = 'vec3(.2126,.7152,.0722)';

const fragment = `
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
  float l=dot(c,${LUMA});
  vec3 g=l<.5?mix(uB,uC,smoothstep(0.,.5,l)):mix(uC,uD,smoothstep(.5,1.,l));
  g*=l/max(dot(g,${LUMA}),1e-3);
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
}`;

export function hex(c) { return new THREE.Color(c); }

export function makeOrbMaterial(palette) {
  const [a, b, c, d] = palette.map(hex);
  return new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    uniforms: {
      uAlpha: { value: 1 }, uHasTex: { value: 0 }, uMix: { value: 1 },
      uA: { value: a }, uB: { value: b }, uC: { value: c }, uD: { value: d },
      uTex: { value: null }, uTex2: { value: null }, uZoom: { value: .5 }, uRot: { value: 0 }, uPan: { value: new THREE.Vector2() },
      uTint: { value: .25 }, uBack: { value: 1.0 }, uIor: { value: 1.2 }, uDisp: { value: .006 }, uGlow: { value: 1 },
      uCenter: { value: new THREE.Vector3() }, uSky: { value: hex('#ffffff') }, uFloor: { value: hex('#d9d9de') },
    },
  });
}

const shadowFrag = `
uniform vec3 uColor;uniform float uAlpha;varying vec2 vUv;
void main(){vec2 p=vUv*2.-1.;float d=length(p);float a=exp(-d*d*4.2)*(1.-smoothstep(.85,1.,d));gl_FragColor=vec4(uColor,a*uAlpha);
#include <colorspace_fragment>
}`;
const uvVert = `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;

export function makeShadowMaterial(color = '#2a3140') {
  return new THREE.ShaderMaterial({
    vertexShader: uvVert, fragmentShader: shadowFrag, transparent: true, depthWrite: false,
    uniforms: { uColor: { value: hex(color) }, uAlpha: { value: .5 } },
  });
}

const cardFrag = `
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
}`;

export function makeCardMaterial(aspect, { tint = '#e9ebee' } = {}) {
  return new THREE.ShaderMaterial({
    vertexShader: uvVert, fragmentShader: cardFrag, transparent: true,
    uniforms: {
      uMap: { value: null }, uHas: { value: 0 }, uAlpha: { value: 1 }, uRadius: { value: .03 },
      uAspect: { value: aspect }, uDim: { value: 0 }, uTint: { value: hex(tint) },
    },
  });
}

const bgFrag = `
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
}`;

export function makeBackground() {
  const mat = new THREE.ShaderMaterial({
    vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`,
    fragmentShader: bgFrag, depthWrite: false, depthTest: false,
    uniforms: {
      uTop: { value: hex('#f4f4f5') }, uMid: { value: hex('#f1f1f2') }, uBot: { value: hex('#e9e9eb') },
      uGlow: { value: hex('#ffffff') }, uMidAt: { value: .55 }, uGlowA: { value: 0 }, uGlowY: { value: .5 }, uGlowR: { value: .4 }, uAspect: { value: 1 },
    },
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -10;
  return mesh;
}

export function darken(c, k) {
  const hsl = {};
  hex(c).getHSL(hsl, THREE.SRGBColorSpace);
  const warm = hsl.h > .09 && hsl.h < .28 ? Math.min(1, k / .35) : 0;
  return new THREE.Color().setHSL(hsl.h - .04 * warm, Math.min(1, hsl.s * (1.06 + .14 * warm)), hsl.l * (1 - k), THREE.SRGBColorSpace);
}
