import{v as B,cj as Z,r as I,m as h,aI as J,w as R,bM as Ie,aU as ve,cB as Wt,c9 as fe,ay as ot,b4 as z,cC as Gt,s as _,cD as Le,cE as zt,cF as Ne,cG as ge,cH as he,cI as He,cJ as je,c1 as W,b$ as qe,u as Ut,b1 as lt,bb as it,b8 as te,bt as Q,bc as st,E as ie,cK as Ve,J as Be,y as Y,z as re,cc as Te,cd as Kt,K as rt,L as D,cL as Fe,cM as Yt,cN as Xt,C as ne,i as p,B as G,bs as pe,a3 as Zt,R as Me,S as ct,bg as ut,_ as ke,a5 as Ce,aZ as dt,A as vt,c7 as Jt,I as ee,H as me,bZ as ce,cp as We,cq as ft,cm as mt,cr as yt,G as gt,cs as Qt,co as ht,cu as en,cz as tn,cv as pt,cw as nn,cn as bt,cx as St,M as wt,cO as an,cA as on,V as Ge,O as ln,bY as sn,c8 as U,Q as kt,ca as rn,cP as cn,x as un}from"./index-c8a20c60.js";import{B as be,g as ze,n as Ct,a as oe,s as Pe,d as dn,c as vn,e as fn,f as mn}from"./index-0e5408e7.js";import{m as yn,M as Pt}from"./VImg-5a555564.js";import{c as xt,V as Ue}from"./VAvatar-56f432b8.js";import{V as gn}from"./VDivider-f07c4d70.js";function Et(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function hn(e){for(;e;){if(De(e))return e;e=e.parentElement}return document.scrollingElement}function ue(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(De(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function De(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function pn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const bn=B({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Sn(e,n){const t={},a=o=>()=>{if(!Z)return Promise.resolve(!0);const l=o==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(i=>{const s=parseInt(e[o]??0,10);t[o]=window.setTimeout(()=>{n==null||n(l),i(l)},s)})};return{runCloseDelay:a("closeDelay"),runOpenDelay:a("openDelay")}}const xe=Symbol.for("vuetify:v-menu"),wn=B({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...bn()},"v-overlay-activator");function kn(e,n){let{isActive:t,isTop:a}=n;const o=I();let l=!1,i=!1,s=!0;const c=h(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),y=h(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:d,runCloseDelay:r}=Sn(e,v=>{v===(e.openOnHover&&l||c.value&&i)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==v&&(s=!0),t.value=v)}),u={click:v=>{v.stopPropagation(),o.value=v.currentTarget||v.target,t.value=!t.value},mouseenter:v=>{var L;(L=v.sourceCapabilities)!=null&&L.firesTouchEvents||(l=!0,o.value=v.currentTarget||v.target,d())},mouseleave:v=>{l=!1,r()},focus:v=>{Gt&&!v.target.matches(":focus-visible")||(i=!0,v.stopPropagation(),o.value=v.currentTarget||v.target,d())},blur:v=>{i=!1,v.stopPropagation(),r()}},f=h(()=>{const v={};return y.value&&(v.click=u.click),e.openOnHover&&(v.mouseenter=u.mouseenter,v.mouseleave=u.mouseleave),c.value&&(v.focus=u.focus,v.blur=u.blur),v}),m=h(()=>{const v={};if(e.openOnHover&&(v.mouseenter=()=>{l=!0,d()},v.mouseleave=()=>{l=!1,r()}),e.closeOnContentClick){const L=J(xe,null);v.click=()=>{t.value=!1,L==null||L.closeParents()}}return v}),g=h(()=>{const v={};return e.openOnHover&&(v.mouseenter=()=>{s&&(l=!0,s=!1,d())},v.mouseleave=()=>{l=!1,r()}),v});R(a,v=>{v&&(e.openOnHover&&!l&&(!c.value||!i)||c.value&&!i&&(!e.openOnHover||!l))&&(t.value=!1)});const b=I();Ie(()=>{b.value&&ve(()=>{const v=b.value;o.value=Wt(v)?v.$el:v})});const C=fe("useActivator");let P;return R(()=>!!e.activator,v=>{v&&Z?(P=ot(),P.run(()=>{Cn(e,C,{activatorEl:o,activatorEvents:f})})):P&&P.stop()},{flush:"post",immediate:!0}),z(()=>{P==null||P.stop()}),{activatorEl:o,activatorRef:b,activatorEvents:f,contentEvents:m,scrimEvents:g}}function Cn(e,n,t){let{activatorEl:a,activatorEvents:o}=t;R(()=>e.activator,(c,y)=>{if(y&&c!==y){const d=s(y);d&&i(d)}c&&ve(()=>l())},{immediate:!0}),R(()=>e.activatorProps,()=>{l()}),z(()=>{i()});function l(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&(Object.entries(o.value).forEach(d=>{let[r,u]=d;c.addEventListener(r,u)}),Object.keys(y).forEach(d=>{y[d]==null?c.removeAttribute(d):c.setAttribute(d,y[d])}))}function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&(Object.entries(o.value).forEach(d=>{let[r,u]=d;c.removeEventListener(r,u)}),Object.keys(y).forEach(d=>{c.removeAttribute(d)}))}function s(){var d,r;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,y;if(c)if(c==="parent"){let u=(r=(d=n==null?void 0:n.proxy)==null?void 0:d.$el)==null?void 0:r.parentNode;for(;u.hasAttribute("data-no-activator");)u=u.parentNode;y=u}else typeof c=="string"?y=document.querySelector(c):"$el"in c?y=c.$el:y=c;return a.value=(y==null?void 0:y.nodeType)===Node.ELEMENT_NODE?y:null,a.value}}const Pn=B({eager:Boolean},"lazy");function xn(e,n){const t=_(!1),a=h(()=>t.value||e.eager||n.value);R(n,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}function Se(e,n){return{x:e.x+n.x,y:e.y+n.y}}function En(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ke(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,o=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,l=t==="top"?0:t==="bottom"?n.height:t;return Se({x:o,y:l},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,o=t==="left"?0:t==="right"?n.width:t,l=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return Se({x:o,y:l},n)}return Se({x:n.width/2,y:n.height/2},n)}const At={static:In,connected:Vn},An=B({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in At},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function On(e,n){const t=I({}),a=I();Z&&(Le(()=>!!(n.isActive.value&&e.locationStrategy),l=>{var i,s;R(()=>e.locationStrategy,l),z(()=>{a.value=void 0}),typeof e.locationStrategy=="function"?a.value=(i=e.locationStrategy(n,e,t))==null?void 0:i.updateLocation:a.value=(s=At[e.locationStrategy](n,e,t))==null?void 0:s.updateLocation}),window.addEventListener("resize",o,{passive:!0}),z(()=>{window.removeEventListener("resize",o),a.value=void 0}));function o(l){var i;(i=a.value)==null||i.call(a,l)}return{contentStyles:t,updateLocation:a}}function In(){}function Ln(e,n){const t=Ct(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Vn(e,n,t){pn(e.activatorEl.value)&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:o,preferredOrigin:l}=zt(()=>{const m=Ne(n.location,e.isRtl.value),g=n.origin==="overlap"?m:n.origin==="auto"?ge(m):Ne(n.origin,e.isRtl.value);return m.side===g.side&&m.align===he(g).align?{preferredAnchor:He(m),preferredOrigin:He(g)}:{preferredAnchor:m,preferredOrigin:g}}),[i,s,c,y]=["minWidth","minHeight","maxWidth","maxHeight"].map(m=>h(()=>{const g=parseFloat(n[m]);return isNaN(g)?1/0:g})),d=h(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const m=n.offset.split(" ").map(parseFloat);return m.length<2&&m.push(0),m}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let r=!1;const u=new ResizeObserver(()=>{r&&f()});R([e.activatorEl,e.contentEl],(m,g)=>{let[b,C]=m,[P,v]=g;P&&u.unobserve(P),b&&u.observe(b),v&&u.unobserve(v),C&&u.observe(C)},{immediate:!0}),z(()=>{u.disconnect()});function f(){if(r=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>r=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const m=e.activatorEl.value.getBoundingClientRect(),g=Ln(e.contentEl.value,e.isRtl.value),b=ue(e.contentEl.value),C=12;b.length||(b.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(g.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),g.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const P=b.reduce((O,E)=>{const k=E.getBoundingClientRect(),x=new be({x:E===document.documentElement?0:k.x,y:E===document.documentElement?0:k.y,width:E.clientWidth,height:E.clientHeight});return O?new be({x:Math.max(O.left,x.left),y:Math.max(O.top,x.top),width:Math.min(O.right,x.right)-Math.max(O.left,x.left),height:Math.min(O.bottom,x.bottom)-Math.max(O.top,x.top)}):x},void 0);P.x+=C,P.y+=C,P.width-=C*2,P.height-=C*2;let v={anchor:o.value,origin:l.value};function L(O){const E=new be(g),k=Ke(O.anchor,m),x=Ke(O.origin,E);let{x:V,y:M}=En(k,x);switch(O.anchor.side){case"top":M-=d.value[0];break;case"bottom":M+=d.value[0];break;case"left":V-=d.value[0];break;case"right":V+=d.value[0];break}switch(O.anchor.align){case"top":M-=d.value[1];break;case"bottom":M+=d.value[1];break;case"left":V-=d.value[1];break;case"right":V+=d.value[1];break}return E.x+=V,E.y+=M,E.width=Math.min(E.width,c.value),E.height=Math.min(E.height,y.value),{overflows:ze(E,P),x:V,y:M}}let $=0,N=0;const H={x:0,y:0},T={x:!1,y:!1};let A=-1;for(;!(A++>10);){const{x:O,y:E,overflows:k}=L(v);$+=O,N+=E,g.x+=O,g.y+=E;{const x=je(v.anchor),V=k.x.before||k.x.after,M=k.y.before||k.y.after;let K=!1;if(["x","y"].forEach(S=>{if(S==="x"&&V&&!T.x||S==="y"&&M&&!T.y){const w={anchor:{...v.anchor},origin:{...v.origin}},j=S==="x"?x==="y"?he:ge:x==="y"?ge:he;w.anchor=j(w.anchor),w.origin=j(w.origin);const{overflows:X}=L(w);(X[S].before<=k[S].before&&X[S].after<=k[S].after||X[S].before+X[S].after<(k[S].before+k[S].after)/2)&&(v=w,K=T[S]=!0)}}),K)continue}k.x.before&&($+=k.x.before,g.x+=k.x.before),k.x.after&&($-=k.x.after,g.x-=k.x.after),k.y.before&&(N+=k.y.before,g.y+=k.y.before),k.y.after&&(N-=k.y.after,g.y-=k.y.after);{const x=ze(g,P);H.x=P.width-x.x.before-x.x.after,H.y=P.height-x.y.before-x.y.after,$+=x.x.before,g.x+=x.x.before,N+=x.y.before,g.y+=x.y.before}break}const F=je(v.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${v.anchor.side} ${v.anchor.align}`,transformOrigin:`${v.origin.side} ${v.origin.align}`,top:W(we(N)),left:e.isRtl.value?void 0:W(we($)),right:e.isRtl.value?W(we(-$)):void 0,minWidth:W(F==="y"?Math.min(i.value,m.width):i.value),maxWidth:W(Ye(qe(H.x,i.value===1/0?0:i.value,c.value))),maxHeight:W(Ye(qe(H.y,s.value===1/0?0:s.value,y.value)))}),{available:H,contentBox:g}}return R(()=>[o.value,l.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>f()),ve(()=>{const m=f();if(!m)return;const{available:g,contentBox:b}=m;b.height>g.y&&requestAnimationFrame(()=>{f(),requestAnimationFrame(()=>{f()})})}),{updateLocation:f}}function we(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ye(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Ee=!0;const de=[];function Bn(e){!Ee||de.length?(de.push(e),Ae()):(Ee=!1,e(),Ae())}let Xe=-1;function Ae(){cancelAnimationFrame(Xe),Xe=requestAnimationFrame(()=>{const e=de.shift();e&&e(),de.length?Ae():Ee=!0})}const se={none:null,close:Mn,block:Dn,reposition:Rn},Tn=B({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in se}},"v-overlay-scroll-strategies");function Fn(e,n){if(!Z)return;let t;Ie(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=ot(),await ve(),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=se[e.scrollStrategy])==null||a.call(se,n,e,t)}))}),z(()=>{t==null||t.stop()})}function Mn(e){function n(t){e.isActive.value=!1}Ot(e.activatorEl.value??e.contentEl.value,n)}function Dn(e,n){var i;const t=(i=e.root.value)==null?void 0:i.offsetParent,a=[...new Set([...ue(e.activatorEl.value,n.contained?t:void 0),...ue(e.contentEl.value,n.contained?t:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,l=(s=>De(s)&&s)(t||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((s,c)=>{s.style.setProperty("--v-body-scroll-x",W(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",W(-s.scrollTop)),s.style.setProperty("--v-scrollbar-offset",W(o)),s.classList.add("v-overlay-scroll-blocked")}),z(()=>{a.forEach((s,c)=>{const y=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),d=parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-y,s.scrollTop=-d}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Rn(e,n,t){let a=!1,o=-1,l=-1;function i(s){Bn(()=>{var d,r;const c=performance.now();(r=(d=e.updateLocation).value)==null||r.call(d,s),a=(performance.now()-c)/(1e3/60)>2})}l=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{t.run(()=>{Ot(e.activatorEl.value??e.contentEl.value,s=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{i(s)})})):i(s)})})}),z(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(l),cancelAnimationFrame(o)})}function Ot(e,n){const t=[document,...ue(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),z(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}function _n(){if(!Z)return _(!1);const{ssr:e}=Ut();if(e){const n=_(!1);return lt(()=>{n.value=!0}),n}else return _(!0)}function It(){const n=fe("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Ze=Symbol.for("vuetify:stack"),ae=it([]);function $n(e,n,t){const a=fe("useStack"),o=!t,l=J(Ze,void 0),i=it({activeChildren:new Set});te(Ze,i);const s=_(+n.value);Le(e,()=>{var r;const d=(r=ae.at(-1))==null?void 0:r[1];s.value=d?d+10:+n.value,o&&ae.push([a.uid,s.value]),l==null||l.activeChildren.add(a.uid),z(()=>{if(o){const u=Q(ae).findIndex(f=>f[0]===a.uid);ae.splice(u,1)}l==null||l.activeChildren.delete(a.uid)})});const c=_(!0);o&&Ie(()=>{var r;const d=((r=ae.at(-1))==null?void 0:r[0])===a.uid;setTimeout(()=>c.value=d)});const y=h(()=>!i.activeChildren.size);return{globalTop:st(c),localTop:y,stackStyles:h(()=>({zIndex:s.value}))}}function Nn(e){return{teleportTarget:h(()=>{const t=e.value;if(t===!0||!Z)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let o=a.querySelector(":scope > .v-overlay-container");return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function Hn(){return!0}function Lt(e,n,t){if(!e||Vt(e,t)===!1)return!1;const a=Et(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(l=>l==null?void 0:l.contains(e.target))}function Vt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Hn)(e)}function jn(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Lt(e,n,t)&&setTimeout(()=>{Vt(e,t)&&a&&a(e)},0)}function Je(e,n){const t=Et(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const qn={mounted(e,n){const t=o=>jn(o,e,n),a=o=>{e._clickOutside.lastMousedownWasOutside=Lt(o,e,n)};Je(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},unmounted(e,n){e._clickOutside&&(Je(e,t=>{var l;if(!t||!((l=e._clickOutside)!=null&&l[n.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Wn(e){const{modelValue:n,color:t,...a}=e;return p(Ce,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&p("div",G({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const Bt=B({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...wn(),...ie(),...Ve(),...Pn(),...An(),...Tn(),...Be(),...yn()},"v-overlay"),Qe=Y()({name:"VOverlay",directives:{ClickOutside:qn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Bt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:o}=n;const l=re(e,"modelValue"),i=h({get:()=>l.value,set:w=>{w&&e.disabled||(l.value=w)}}),{teleportTarget:s}=Nn(h(()=>e.attach||e.contained)),{themeClasses:c}=Te(e),{rtlClasses:y,isRtl:d}=Kt(),{hasContent:r,onAfterLeave:u}=xn(e,i),f=rt(h(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:m,localTop:g,stackStyles:b}=$n(i,D(e,"zIndex"),e._disableGlobalStack),{activatorEl:C,activatorRef:P,activatorEvents:v,contentEvents:L,scrimEvents:$}=kn(e,{isActive:i,isTop:g}),{dimensionStyles:N}=Fe(e),H=_n(),{scopeId:T}=It();R(()=>e.disabled,w=>{w&&(i.value=!1)});const A=I(),F=I(),{contentStyles:O,updateLocation:E}=On(e,{isRtl:d,contentEl:F,activatorEl:C,isActive:i});Fn(e,{root:A,contentEl:F,activatorEl:C,isActive:i,updateLocation:E});function k(w){o("click:outside",w),e.persistent?S():i.value=!1}function x(){return i.value&&m.value}Z&&R(i,w=>{w?window.addEventListener("keydown",V):window.removeEventListener("keydown",V)},{immediate:!0});function V(w){w.key==="Escape"&&m.value&&(e.persistent?S():i.value=!1)}const M=Yt();Le(()=>e.closeOnBack,()=>{Xt(M,w=>{m.value&&i.value?(w(!1),e.persistent?S():i.value=!1):w()})});const K=I();R(()=>i.value&&(e.absolute||e.contained)&&s.value==null,w=>{if(w){const j=hn(A.value);j&&j!==document.scrollingElement&&(K.value=j.scrollTop)}});function S(){e.noClickAnimation||F.value&&oe(F.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Pe})}return ne(()=>{var w;return p(ke,null,[(w=t.activator)==null?void 0:w.call(t,{isActive:i.value,props:G({ref:P},pe(v.value),e.activatorProps)}),H.value&&p(Zt,{disabled:!s.value,to:s.value},{default:()=>[r.value&&p("div",G({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},c.value,y.value,e.class],style:[b.value,{top:W(K.value)},e.style],ref:A},T,a),[p(Wn,G({color:f,modelValue:i.value&&!!e.scrim},pe($.value)),null),p(Pt,{appear:!0,persisted:!0,transition:e.transition,target:C.value,onAfterLeave:()=>{u(),o("afterLeave")}},{default:()=>{var j;return[Me(p("div",G({ref:F,class:["v-overlay__content",e.contentClass],style:[N.value,O.value]},pe(L.value),e.contentProps),[(j=t.default)==null?void 0:j.call(t,{isActive:i})]),[[ct,i.value],[ut("click-outside"),{handler:k,closeConditional:x,include:()=>[C.value]}]])]}})])]})])}),{activatorEl:C,animateClick:S,contentEl:F,globalTop:m,localTop:g,updateLocation:E}}});const Gn=B({target:Object},"v-dialog-transition"),zn=Y()({name:"VDialogTransition",props:Gn(),setup(e,n){let{slots:t}=n;const a={onBeforeEnter(o){o.style.pointerEvents="none",o.style.visibility="hidden"},async onEnter(o,l){var u;await new Promise(f=>requestAnimationFrame(f)),await new Promise(f=>requestAnimationFrame(f)),o.style.visibility="";const{x:i,y:s,sx:c,sy:y,speed:d}=tt(e.target,o),r=oe(o,[{transform:`translate(${i}px, ${s}px) scale(${c}, ${y})`,opacity:0},{}],{duration:225*d,easing:dn});(u=et(o))==null||u.forEach(f=>{oe(f,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*d,easing:Pe})}),r.finished.then(()=>l())},onAfterEnter(o){o.style.removeProperty("pointer-events")},onBeforeLeave(o){o.style.pointerEvents="none"},async onLeave(o,l){var u;await new Promise(f=>requestAnimationFrame(f));const{x:i,y:s,sx:c,sy:y,speed:d}=tt(e.target,o);oe(o,[{},{transform:`translate(${i}px, ${s}px) scale(${c}, ${y})`,opacity:0}],{duration:125*d,easing:vn}).finished.then(()=>l()),(u=et(o))==null||u.forEach(f=>{oe(f,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*d,easing:Pe})})},onAfterLeave(o){o.style.removeProperty("pointer-events")}};return()=>e.target?p(Ce,G({name:"dialog-transition"},a,{css:!1}),t):p(Ce,{name:"dialog-transition"},t)}});function et(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function tt(e,n){const t=e.getBoundingClientRect(),a=Ct(n),[o,l]=getComputedStyle(n).transformOrigin.split(" ").map(C=>parseFloat(C)),[i,s]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=t.left+t.width/2;i==="left"||s==="left"?c-=t.width/2:(i==="right"||s==="right")&&(c+=t.width/2);let y=t.top+t.height/2;i==="top"||s==="top"?y-=t.height/2:(i==="bottom"||s==="bottom")&&(y+=t.height/2);const d=t.width/a.width,r=t.height/a.height,u=Math.max(1,d,r),f=d/u||0,m=r/u||0,g=a.width*a.height/(window.innerWidth*window.innerHeight),b=g>.12?Math.min(1.5,(g-.12)*10+1):1;return{x:c-(o+a.left),y:y-(l+a.top),sx:f,sy:m,speed:b}}const Oe=Symbol.for("vuetify:list");function Tt(){const e=J(Oe,{hasPrepend:_(!1),updateHasPrepend:()=>null}),n={hasPrepend:_(!1),updateHasPrepend:t=>{t&&(n.hasPrepend.value=t)}};return te(Oe,n),e}function Ft(){return J(Oe,null)}const Un={open:e=>{let{id:n,value:t,opened:a,parents:o}=e;if(t){const l=new Set;l.add(n);let i=o.get(n);for(;i!=null;)l.add(i),i=o.get(i);return l}else return a.delete(n),a},select:()=>null},Mt={open:e=>{let{id:n,value:t,opened:a,parents:o}=e;if(t){let l=o.get(n);for(a.add(n);l!=null&&l!==n;)a.add(l),l=o.get(l);return a}else a.delete(n);return a},select:()=>null},Kn={open:Mt.open,select:e=>{let{id:n,value:t,opened:a,parents:o}=e;if(!t)return a;const l=[];let i=o.get(n);for(;i!=null;)l.push(i),i=o.get(i);return new Set(l)}},Re=e=>{const n={select:t=>{let{id:a,value:o,selected:l}=t;if(a=Q(a),e&&!o){const i=Array.from(l.entries()).reduce((s,c)=>{let[y,d]=c;return d==="on"?[...s,y]:s},[]);if(i.length===1&&i[0]===a)return l}return l.set(a,o?"on":"off"),l},in:(t,a,o)=>{let l=new Map;for(const i of t||[])l=n.select({id:i,value:!0,selected:new Map(l),children:a,parents:o});return l},out:t=>{const a=[];for(const[o,l]of t.entries())l==="on"&&a.push(o);return a}};return n},Dt=e=>{const n=Re(e);return{select:a=>{let{selected:o,id:l,...i}=a;l=Q(l);const s=o.has(l)?new Map([[l,o.get(l)]]):new Map;return n.select({...i,id:l,selected:s})},in:(a,o,l)=>{let i=new Map;return a!=null&&a.length&&(i=n.in(a.slice(0,1),o,l)),i},out:(a,o,l)=>n.out(a,o,l)}},Yn=e=>{const n=Re(e);return{select:a=>{let{id:o,selected:l,children:i,...s}=a;return o=Q(o),i.has(o)?l:n.select({id:o,selected:l,children:i,...s})},in:n.in,out:n.out}},Xn=e=>{const n=Dt(e);return{select:a=>{let{id:o,selected:l,children:i,...s}=a;return o=Q(o),i.has(o)?l:n.select({id:o,selected:l,children:i,...s})},in:n.in,out:n.out}},Zn=e=>{const n={select:t=>{let{id:a,value:o,selected:l,children:i,parents:s}=t;a=Q(a);const c=new Map(l),y=[a];for(;y.length;){const r=y.shift();l.set(r,o?"on":"off"),i.has(r)&&y.push(...i.get(r))}let d=s.get(a);for(;d;){const r=i.get(d),u=r.every(m=>l.get(m)==="on"),f=r.every(m=>!l.has(m)||l.get(m)==="off");l.set(d,u?"on":f?"off":"indeterminate"),d=s.get(d)}return e&&!o&&Array.from(l.entries()).reduce((u,f)=>{let[m,g]=f;return g==="on"?[...u,m]:u},[]).length===0?c:l},in:(t,a,o)=>{let l=new Map;for(const i of t||[])l=n.select({id:i,value:!0,selected:new Map(l),children:a,parents:o});return l},out:(t,a)=>{const o=[];for(const[l,i]of t.entries())i==="on"&&!a.has(l)&&o.push(l);return o}};return n},le=Symbol.for("vuetify:nested"),Rt={id:_(),root:{register:()=>null,unregister:()=>null,parents:I(new Map),children:I(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:I(new Set),selected:I(new Map),selectedValues:I([])}},Jn=B({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),Qn=e=>{let n=!1;const t=I(new Map),a=I(new Map),o=re(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),l=h(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Xn(e.mandatory);case"leaf":return Yn(e.mandatory);case"independent":return Re(e.mandatory);case"single-independent":return Dt(e.mandatory);case"classic":default:return Zn(e.mandatory)}}),i=h(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Kn;case"single":return Un;case"multiple":default:return Mt}}),s=re(e,"selected",e.selected,r=>l.value.in(r,t.value,a.value),r=>l.value.out(r,t.value,a.value));dt(()=>{n=!0});function c(r){const u=[];let f=r;for(;f!=null;)u.unshift(f),f=a.value.get(f);return u}const y=fe("nested"),d={id:_(),root:{opened:o,selected:s,selectedValues:h(()=>{const r=[];for(const[u,f]of s.value.entries())f==="on"&&r.push(u);return r}),register:(r,u,f)=>{u&&r!==u&&a.value.set(r,u),f&&t.value.set(r,[]),u!=null&&t.value.set(u,[...t.value.get(u)||[],r])},unregister:r=>{if(n)return;t.value.delete(r);const u=a.value.get(r);if(u){const f=t.value.get(u)??[];t.value.set(u,f.filter(m=>m!==r))}a.value.delete(r),o.value.delete(r)},open:(r,u,f)=>{y.emit("click:open",{id:r,value:u,path:c(r),event:f});const m=i.value.open({id:r,value:u,opened:new Set(o.value),children:t.value,parents:a.value,event:f});m&&(o.value=m)},openOnSelect:(r,u,f)=>{const m=i.value.select({id:r,value:u,selected:new Map(s.value),opened:new Set(o.value),children:t.value,parents:a.value,event:f});m&&(o.value=m)},select:(r,u,f)=>{y.emit("click:select",{id:r,value:u,path:c(r),event:f});const m=l.value.select({id:r,value:u,selected:new Map(s.value),children:t.value,parents:a.value,event:f});m&&(s.value=m),d.root.openOnSelect(r,u,f)},children:t,parents:a}};return te(le,d),d.root},_t=(e,n)=>{const t=J(le,Rt),a=Symbol(vt()),o=h(()=>e.value??a),l={...t,id:o,open:(i,s)=>t.root.open(o.value,i,s),openOnSelect:(i,s)=>t.root.openOnSelect(o.value,i,s),isOpen:h(()=>t.root.opened.value.has(o.value)),parent:h(()=>t.root.parents.value.get(o.value)),select:(i,s)=>t.root.select(o.value,i,s),isSelected:h(()=>t.root.selected.value.get(Q(o.value))==="on"),isIndeterminate:h(()=>t.root.selected.value.get(o.value)==="indeterminate"),isLeaf:h(()=>!t.root.children.value.get(o.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(o.value,t.id.value,n),dt(()=>{!t.isGroupActivator&&t.root.unregister(o.value)}),n&&te(le,l),l},ea=()=>{const e=J(le,Rt);te(le,{...e,isGroupActivator:!0})};function ta(){const e=_(!1);return lt(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:h(()=>e.value?void 0:{transition:"none !important"}),isBooted:st(e)}}const na=Jt({name:"VListGroupActivator",setup(e,n){let{slots:t}=n;return ea(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),aa=B({activeColor:String,baseColor:String,color:String,collapseIcon:{type:ee,default:"$collapse"},expandIcon:{type:ee,default:"$expand"},prependIcon:ee,appendIcon:ee,fluid:Boolean,subgroup:Boolean,title:String,value:null,...ie(),...me()},"v-list-group"),nt=Y()({name:"VListGroup",props:aa(),setup(e,n){let{slots:t}=n;const{isOpen:a,open:o,id:l}=_t(D(e,"value"),!0),i=h(()=>`v-list-group--id-${String(l.value)}`),s=Ft(),{isBooted:c}=ta();function y(f){o(!a.value,f)}const d=h(()=>({onClick:y,class:"v-list-group__header",id:i.value})),r=h(()=>a.value?e.collapseIcon:e.expandIcon),u=h(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&r.value,appendIcon:e.appendIcon||!e.subgroup&&r.value,title:e.title,value:e.value}}));return ne(()=>p(e.tag,{class:["v-list-group",{"v-list-group--prepend":s==null?void 0:s.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&p(ce,{defaults:u.value},{default:()=>[p(na,null,{default:()=>[t.activator({props:d.value,isOpen:a.value})]})]}),p(Pt,{transition:{component:fn},disabled:!c.value},{default:()=>{var f;return[Me(p("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(f=t.default)==null?void 0:f.call(t)]),[[ct,a.value]])]}})]})),{}}});const oa=xt("v-list-item-subtitle"),la=xt("v-list-item-title"),ia=B({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:ee,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:ee,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:We(),onClickOnce:We(),...ft(),...ie(),...mt(),...Ve(),...yt(),...gt(),...Qt(),...me(),...Be(),...ht({variant:"text"})},"v-list-item"),at=Y()({name:"VListItem",directives:{Ripple:en},props:ia(),emits:{click:e=>!0},setup(e,n){let{attrs:t,slots:a,emit:o}=n;const l=tn(e,t),i=h(()=>e.value??l.href.value),{select:s,isSelected:c,isIndeterminate:y,isGroupActivator:d,root:r,parent:u,openOnSelect:f}=_t(i,!1),m=Ft(),g=h(()=>{var S;return e.active!==!1&&(e.active||((S=l.isActive)==null?void 0:S.value)||c.value)}),b=h(()=>e.link!==!1&&l.isLink.value),C=h(()=>!e.disabled&&e.link!==!1&&(e.link||l.isClickable.value||e.value!=null&&!!m)),P=h(()=>e.rounded||e.nav),v=h(()=>e.color??e.activeColor),L=h(()=>({color:g.value?v.value??e.baseColor:e.baseColor,variant:e.variant}));R(()=>{var S;return(S=l.isActive)==null?void 0:S.value},S=>{S&&u.value!=null&&r.open(u.value,!0),S&&f(S)},{immediate:!0});const{themeClasses:$}=Te(e),{borderClasses:N}=pt(e),{colorClasses:H,colorStyles:T,variantClasses:A}=nn(L),{densityClasses:F}=bt(e),{dimensionStyles:O}=Fe(e),{elevationClasses:E}=St(e),{roundedClasses:k}=wt(P),x=h(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),V=h(()=>({isActive:g.value,select:s,isSelected:c.value,isIndeterminate:y.value}));function M(S){var w;o("click",S),!(d||!C.value)&&((w=l.navigate)==null||w.call(l,S),e.value!=null&&s(!c.value,S))}function K(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),M(S))}return ne(()=>{const S=b.value?"a":e.tag,w=a.title||e.title,j=a.subtitle||e.subtitle,X=!!(e.appendAvatar||e.appendIcon),qt=!!(X||a.append),_e=!!(e.prependAvatar||e.prependIcon),ye=!!(_e||a.prepend);return m==null||m.updateHasPrepend(ye),e.activeColor&&an("active-color",["color","base-color"]),Me(p(S,{class:["v-list-item",{"v-list-item--active":g.value,"v-list-item--disabled":e.disabled,"v-list-item--link":C.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ye&&(m==null?void 0:m.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&g.value},$.value,N.value,H.value,F.value,E.value,x.value,k.value,A.value,e.class],style:[T.value,O.value,e.style],href:l.href.value,tabindex:C.value?m?-2:0:void 0,onClick:M,onKeydown:C.value&&!b.value&&K},{default:()=>{var $e;return[on(C.value||g.value,"v-list-item"),ye&&p("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?p(ce,{key:"prepend-defaults",disabled:!_e,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var q;return[(q=a.prepend)==null?void 0:q.call(a,V.value)]}}):p(ke,null,[e.prependAvatar&&p(Ue,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&p(Ge,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),p("div",{class:"v-list-item__content","data-no-activator":""},[w&&p(la,{key:"title"},{default:()=>{var q;return[((q=a.title)==null?void 0:q.call(a,{title:e.title}))??e.title]}}),j&&p(oa,{key:"subtitle"},{default:()=>{var q;return[((q=a.subtitle)==null?void 0:q.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),($e=a.default)==null?void 0:$e.call(a,V.value)]),qt&&p("div",{key:"append",class:"v-list-item__append"},[a.append?p(ce,{key:"append-defaults",disabled:!X,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var q;return[(q=a.append)==null?void 0:q.call(a,V.value)]}}):p(ke,null,[e.appendIcon&&p(Ge,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&p(Ue,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}}),[[ut("ripple"),C.value&&e.ripple]])}),{}}}),sa=B({color:String,inset:Boolean,sticky:Boolean,title:String,...ie(),...me()},"v-list-subheader"),ra=Y()({name:"VListSubheader",props:sa(),setup(e,n){let{slots:t}=n;const{textColorClasses:a,textColorStyles:o}=ln(D(e,"color"));return ne(()=>{const l=!!(t.default||e.title);return p(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:o},e.style]},{default:()=>{var i;return[l&&p("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),ca=B({items:Array},"v-list-children"),$t=Y()({name:"VListChildren",props:ca(),setup(e,n){let{slots:t}=n;return Tt(),()=>{var a,o;return((a=t.default)==null?void 0:a.call(t))??((o=e.items)==null?void 0:o.map(l=>{var f,m;let{children:i,props:s,type:c,raw:y}=l;if(c==="divider")return((f=t.divider)==null?void 0:f.call(t,{props:s}))??p(gn,s,null);if(c==="subheader")return((m=t.subheader)==null?void 0:m.call(t,{props:s}))??p(ra,s,null);const d={subtitle:t.subtitle?g=>{var b;return(b=t.subtitle)==null?void 0:b.call(t,{...g,item:y})}:void 0,prepend:t.prepend?g=>{var b;return(b=t.prepend)==null?void 0:b.call(t,{...g,item:y})}:void 0,append:t.append?g=>{var b;return(b=t.append)==null?void 0:b.call(t,{...g,item:y})}:void 0,title:t.title?g=>{var b;return(b=t.title)==null?void 0:b.call(t,{...g,item:y})}:void 0},[r,u]=nt.filterProps(s);return i?p(nt,G({value:s==null?void 0:s.value},r),{activator:g=>{let{props:b}=g;return t.header?t.header({props:{...s,...b}}):p(at,G(s,b),d)},default:()=>p($t,{items:i},t)}):t.item?t.item({props:s}):p(at,s,d)}))}}}),ua=B({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"list-items");function Nt(e,n){const t=U(n,e.itemTitle,n),a=e.returnObject?n:U(n,e.itemValue,t),o=U(n,e.itemChildren),l=e.itemProps===!0?typeof n=="object"&&n!=null&&!Array.isArray(n)?"children"in n?kt(n,["children"])[1]:n:void 0:U(n,e.itemProps),i={title:t,value:a,...l};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(o)?Ht(e,o):void 0,raw:n}}function Ht(e,n){const t=[];for(const a of n)t.push(Nt(e,a));return t}function ka(e){const n=h(()=>Ht(e,e.items));return da(n,t=>Nt(e,t))}function da(e,n){function t(o){return o.map(l=>e.value.find(s=>sn(l,s.value))??n(l))}function a(o){return o.map(l=>{let{value:i}=l;return i})}return{items:e,transformIn:t,transformOut:a}}function va(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function fa(e,n){const t=U(n,e.itemType,"item"),a=va(n)?n:U(n,e.itemTitle),o=U(n,e.itemValue,void 0),l=U(n,e.itemChildren),i=e.itemProps===!0?kt(n,["children"])[1]:U(n,e.itemProps),s={title:a,value:o,...i};return{type:t,title:s.title,value:s.value,props:s,children:t==="item"&&l?jt(e,l):void 0,raw:n}}function jt(e,n){const t=[];for(const a of n)t.push(fa(e,a));return t}function ma(e){return{items:h(()=>jt(e,e.items))}}const ya=B({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Jn({selectStrategy:"single-leaf",openStrategy:"list"}),...ft(),...ie(),...mt(),...Ve(),...yt(),itemType:{type:String,default:"type"},...ua(),...gt(),...me(),...Be(),...ht({variant:"text"})},"v-list"),Ca=Y()({name:"VList",props:ya(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,n){let{slots:t}=n;const{items:a}=ma(e),{themeClasses:o}=Te(e),{backgroundColorClasses:l,backgroundColorStyles:i}=rt(D(e,"bgColor")),{borderClasses:s}=pt(e),{densityClasses:c}=bt(e),{dimensionStyles:y}=Fe(e),{elevationClasses:d}=St(e),{roundedClasses:r}=wt(e),{open:u,select:f}=Qn(e),m=h(()=>e.lines?`v-list--${e.lines}-line`:void 0),g=D(e,"activeColor"),b=D(e,"baseColor"),C=D(e,"color");Tt(),rn({VListGroup:{activeColor:g,baseColor:b,color:C},VListItem:{activeClass:D(e,"activeClass"),activeColor:g,baseColor:b,color:C,density:D(e,"density"),disabled:D(e,"disabled"),lines:D(e,"lines"),nav:D(e,"nav"),variant:D(e,"variant")}});const P=_(!1),v=I();function L(A){P.value=!0}function $(A){P.value=!1}function N(A){var F;!P.value&&!(A.relatedTarget&&((F=v.value)!=null&&F.contains(A.relatedTarget)))&&T()}function H(A){if(v.value){if(A.key==="ArrowDown")T("next");else if(A.key==="ArrowUp")T("prev");else if(A.key==="Home")T("first");else if(A.key==="End")T("last");else return;A.preventDefault()}}function T(A){if(v.value)return cn(v.value,A)}return ne(()=>p(e.tag,{ref:v,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},o.value,l.value,s.value,c.value,d.value,m.value,r.value,e.class],style:[i.value,y.value,e.style],role:"listbox","aria-activedescendant":void 0,onFocusin:L,onFocusout:$,onFocus:N,onKeydown:H},{default:()=>[p($t,{items:a.value},t)]})),{open:u,select:f,focus:T}}});const ga=B({id:String,...un(Bt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:zn}}),["absolute"])},"v-menu"),Pa=Y()({name:"VMenu",props:ga(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=re(e,"modelValue"),{scopeId:o}=It(),l=vt(),i=h(()=>e.id||`v-menu-${l}`),s=I(),c=J(xe,null),y=_(0);te(xe,{register(){++y.value},unregister(){--y.value},closeParents(){setTimeout(()=>{y.value||(a.value=!1,c==null||c.closeParents())},40)}}),R(a,u=>{u?c==null||c.register():c==null||c.unregister()});function d(){c==null||c.closeParents()}const r=h(()=>G({"aria-haspopup":"menu","aria-expanded":String(a.value),"aria-owns":i.value},e.activatorProps));return ne(()=>{const[u]=Qe.filterProps(e);return p(Qe,G({ref:s,class:["v-menu",e.class],style:e.style},u,{modelValue:a.value,"onUpdate:modelValue":f=>a.value=f,absolute:!0,activatorProps:r.value,"onClick:outside":d},o),{activator:t.activator,default:function(){for(var f=arguments.length,m=new Array(f),g=0;g<f;g++)m[g]=arguments[g];return p(ce,{root:!0},{default:()=>{var b;return[(b=t.default)==null?void 0:b.call(t,...m)]}})}})}),mn({id:i,ΨopenChildren:y},s)}});export{Qe as V,Pa as a,Ca as b,at as c,la as d,oa as e,ua as f,zn as g,ka as h,Pn as i,ta as j,xn as k,Bt as m,It as u};
