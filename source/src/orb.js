import * as THREE from 'three';

const NOISE = `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm3(vec3 p){float s=0.,a=.5;for(int i=0;i<3;i++){s+=a*snoise(p);p=p*2.02+vec3(1.7,9.2,3.1);a*=.5;}return s;}
float fbm4(vec3 p){float s=0.,a=.5;for(int i=0;i<4;i++){s+=a*snoise(p);p=p*2.03+vec3(4.1,2.3,7.7);a*=.5;}return s;}
`;

const vertex = `
varying vec3 vNw;varying vec3 vPw;varying vec3 vPo;
void main(){
  vPo=position;
  vec4 w=modelMatrix*vec4(position,1.);
  vPw=w.xyz;
  vNw=normalize(mat3(modelMatrix)*normal);
  gl_Position=projectionMatrix*viewMatrix*w;
}`;

const fragment = `
uniform float uTime,uSeed,uScale,uWarp,uMatte,uAlpha,uSpin,uPulse,uHasTex,uZoom,uRot,uGrade,uBack,uIor,uDisp;
uniform vec2 uPan;
uniform vec3 uA,uB,uC,uD,uEnvTop,uEnvBot,uCamO,uCenter;
uniform sampler2D uTex;
varying vec3 vNw;varying vec3 vPw;varying vec3 vPo;
${NOISE}
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
vec2 subjectUv(vec2 h){return rot(uRot)*h/(uZoom*2.)+.5+uPan;}
vec3 grade(vec3 c){
  float l=pow(dot(c,vec3(.299,.587,.114)),1.2);
  vec3 g=l<.45?mix(mix(uA,uB,.45),uC,smoothstep(0.,.45,l)):mix(uC,uD,smoothstep(.45,1.,l));
  return mix(c,g,uGrade);
}
float folds(vec3 p,vec2 w){
  vec3 q=p*uScale+uSeed;
  q.xz=rot(uSpin)*q.xz;
  return fbm3(q+uWarp*vec3(w,w.x*.5)+vec3(0.,uTime*.035,0.));
}
void main(){
  vec3 N=normalize(vNw);
  vec3 V=normalize(cameraPosition-vPw);
  float ndv=clamp(dot(N,V),0.,1.);
  float edge=1.-ndv;
  float fr=pow(edge,3.);
  vec3 L=normalize(vec3(-.45,.85,.55));
  vec3 H=normalize(L+V);
  float nh=max(dot(N,H),0.);
  float spec=pow(nh,220.)*1.1+pow(nh,26.)*.08;
  vec3 R=reflect(-V,N);
  vec3 env=mix(uEnvBot,uEnvTop,smoothstep(-.35,.65,R.y));
  vec3 col;
  if(uMatte>.5){
    float lam=max(dot(N,L),0.);
    vec3 base=mix(uA,uC,.35+.45*N.y);
    col=base*(.42+.7*lam)+uD*pow(edge,2.2)*.35;
    col=mix(col,env,fr*.35)+spec*.55;
    col*=1.+uPulse*.35;
  }else if(uHasTex>.999){
    vec3 D=normalize(cameraPosition-uCenter);
    vec3 rt=normalize(cross(vec3(0.,1.,0.),D));
    vec3 up=cross(D,rt);
    vec2 p=vec2(dot(N,rt),dot(N,up));
    float z=max(dot(N,D),0.);
    float r=length(p);
    float dp=uDisp*(.15+.85*smoothstep(.35,1.,r));
    vec2 hr=lens(p,z,uIor-dp),hg=lens(p,z,uIor),hb=lens(p,z,uIor+dp);
    vec3 sg=texture2D(uTex,subjectUv(hg)).rgb;
    vec3 sp=vec3(texture2D(uTex,subjectUv(hr)).r,sg.g,texture2D(uTex,subjectUv(hb)).b);
    vec3 fringe=clamp(sp-sg,-.3,.3);
    col=grade(sg)+fringe*smoothstep(.5,.97,r);
    col*=mix(1.,.5,smoothstep(.72,1.,r));
    col=mix(col,env,fr*.3);
    col+=uEnvTop*smoothstep(.55,1.,R.y)*fr*.3;
    col+=spec*.7;
  }else{
    vec3 Ro=normalize(vPo);
    vec3 Vo=normalize(uCamO-vPo);
    vec3 Rd=refract(-Vo,Ro,.76);
    vec3 p1=Ro+Rd*.22;vec3 p2=Ro+Rd*.7;
    vec3 qw=p1*uScale*.5+uSeed*1.7;
    vec2 w=vec2(fbm3(qw+vec3(0.,0.,uTime*.025)),fbm3(qw+vec3(5.2,1.3,2.8)));
    float f1=folds(p1,w);
    float f2=folds(p2,w*.7);
    float h=pow(clamp(1.-abs(f1*2.4),0.,1.),1.5);
    float h2=pow(clamp(1.-abs(f2*2.),0.,1.),1.2);
    float sx=max(length(dFdx(vPo)),1e-5),sy=max(length(dFdy(vPo)),1e-5);
    vec2 g=vec2(dFdx(h)/sx,-dFdy(h)/sy)*.03;
    float lit=clamp(.62+dot(g,vec2(-.55,.83)),0.,1.6);
    col=mix(uA,uB,smoothstep(.05,.8,h2)*.85);
    col=mix(col,uC,smoothstep(.12,.62,h));
    col*=.3+.85*lit;
    col=mix(col,uD,smoothstep(.62,1.,h)*smoothstep(.75,1.35,lit)*.85);
    col*=mix(.45,1.05,smoothstep(-.95,.4,N.y));
    float band=smoothstep(.62,.9,edge)*(1.-smoothstep(.93,.995,edge));
    vec3 irid=.5+.5*cos(6.2831*(vec3(0.,.33,.67)+edge*2.2+N.x*.3-N.y*.25+uTime*.012));
    col=mix(col,mix(irid,uD,.35),band*.32);
    col*=1.-smoothstep(.93,1.,edge)*.45;
    col=mix(col,env,fr*.38);
    col=mix(col,uEnvBot,fr*smoothstep(.1,-.7,R.y)*.55);
    col+=uEnvTop*smoothstep(.55,1.,R.y)*fr*.25;
    col+=spec*.8;
    col+=uPulse*.12*uD;
  }
  gl_FragColor=vec4(col,uAlpha);
  #include <colorspace_fragment>
}`;

export function hex(c) { return new THREE.Color(c); }

export function makeOrbMaterial(palette, { seed = 0, matte = false } = {}) {
  const [a, b, c, d] = palette.map(hex);
  return new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    uniforms: {
      uTime: { value: 0 }, uSeed: { value: seed }, uScale: { value: 1.25 }, uWarp: { value: 2.1 },
      uMatte: { value: matte ? 1 : 0 }, uAlpha: { value: 1 }, uSpin: { value: 0 }, uPulse: { value: 0 },
      uA: { value: a }, uB: { value: b }, uC: { value: c }, uD: { value: d },
      uTex: { value: null }, uHasTex: { value: 0 }, uZoom: { value: 1 }, uRot: { value: 0 }, uPan: { value: new THREE.Vector2() },
      uGrade: { value: .82 }, uBack: { value: 1.0 }, uIor: { value: 1.22 }, uDisp: { value: .018 }, uCenter: { value: new THREE.Vector3() },
      uEnvTop: { value: hex('#ffffff') }, uEnvBot: { value: hex('#1b2230') }, uCamO: { value: new THREE.Vector3(0, 0, 5) },
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
uniform sampler2D uMap;uniform float uHas,uAlpha,uRadius,uAspect,uPaper,uDim,uVideo;uniform vec3 uTint;varying vec2 vUv;
float rbox(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
void main(){
  vec2 p=(vUv-.5)*vec2(uAspect,1.);
  float d=rbox(p,vec2(uAspect,1.)*.5,uRadius);
  float m=1.-smoothstep(-.004,.0015,d);
  vec3 c=uHas>.5?texture2D(uMap,vUv).rgb:uTint;
  if(uPaper>.5){c=mix(c,c*vec3(1.,.985,.95),.6);}
  float edge=smoothstep(-.03,0.,d);
  c=mix(c,c*.86,edge*.6);
  c*=1.-uDim;
  if(uVideo>.5){float r=length(p);float ring=smoothstep(.115,.11,r)*smoothstep(.07,.075,r);c=mix(c,vec3(1.),ring*.0);}
  gl_FragColor=vec4(c,m*uAlpha);
  #include <colorspace_fragment>
}`;

export function makeCardMaterial(aspect, { paper = false, tint = '#e9ebee' } = {}) {
  return new THREE.ShaderMaterial({
    vertexShader: uvVert, fragmentShader: cardFrag, transparent: true,
    uniforms: {
      uMap: { value: null }, uHas: { value: 0 }, uAlpha: { value: 1 }, uRadius: { value: .035 },
      uAspect: { value: aspect }, uPaper: { value: paper ? 1 : 0 }, uDim: { value: 0 }, uVideo: { value: 0 },
      uTint: { value: hex(tint) },
    },
  });
}

const bgFrag = `
uniform vec3 uTop,uMid,uBot,uGlow;uniform float uMidAt,uGlowA,uGlowY,uGlowR,uAspect;varying vec2 vUv;
float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
void main(){
  float y=1.-vUv.y;
  vec3 c=y<uMidAt?mix(uTop,uMid,smoothstep(0.,uMidAt,y)):mix(uMid,uBot,smoothstep(uMidAt,1.,y));
  vec2 p=vec2((vUv.x-.5)*uAspect,vUv.y-uGlowY);
  float g=exp(-dot(p,p)/(uGlowR*uGlowR));
  c=mix(c,uGlow,g*uGlowA);
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
