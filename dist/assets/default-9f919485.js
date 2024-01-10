import{o as k,c as Z,a as L,t as Q,h as X,u as gt,r as K,b as mt,w as tt,d as G,e as C,f,g as $,i as s,j as E,n as bt,k as yt,l as R,s as Xt,m as M,p as Rt,V as x,q as Ht,v as _t,x as kt,y as wt,z as At,A as Et,B as F,C as Tt,D as et,I as Pt,E as Mt,F as Ct,G as Vt,H as Nt,J as Bt,K as $t,L as rt,M as It,N as Dt,O as Ot,P as Kt,Q as Ut,R as jt,S as qt,T as zt,U as Ft}from"./index-c8a20c60.js";import{l as Jt}from"./arm-579d17dc.js";import{t as Qt,a as nt,u as Gt,s as Zt,V as te,b as ee}from"./VSpacer-f173b5b3.js";import{_ as Lt}from"./_plugin-vue_export-helper-c27b6911.js";import{m as re,u as ne,V as lt,a as le,b as oe,c as N,d as B,e as ae}from"./VMenu-57e987e2.js";import{f as se}from"./index-0e5408e7.js";import{A as ie}from"./index-573a504e.js";import{a as ot}from"./avatar-1-17e0049b.js";import{V as at}from"./VAvatar-56f432b8.js";import{m as ce,M as ue,V as st}from"./VImg-5a555564.js";import{V as it}from"./VDivider-f07c4d70.js";const he={class:"nav-section-title"},de={class:"title-wrapper"},fe=["textContent"],ct={__name:"VerticalNavSectionTitle",props:{item:{type:null,required:!0}},setup(t){return(e,r)=>(k(),Z("li",he,[L("div",de,[L("span",{class:"title-text",textContent:Q(t.item.heading)},null,8,fe)])]))}},ve="/assets/upgrade-banner-dark-f34f6a24.png",pe="/assets/upgrade-banner-light-68cf2382.png";/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function H(t){return getComputedStyle(t)}function Y(t,e){for(var r in e){var l=e[r];typeof l=="number"&&(l=l+"px"),t.style[r]=l}return t}function q(t){var e=document.createElement("div");return e.className=t,e}var ut=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function P(t,e){if(!ut)throw new Error("No element matching method supported");return ut.call(t,e)}function D(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function ht(t,e){return Array.prototype.filter.call(t.children,function(r){return P(r,e)})}var w={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},Yt={x:null,y:null};function xt(t,e){var r=t.element.classList,l=w.state.scrolling(e);r.contains(l)?clearTimeout(Yt[e]):r.add(l)}function St(t,e){Yt[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(w.state.scrolling(e))},t.settings.scrollingThreshold)}function ge(t,e){xt(t,e),St(t,e)}var U=function(e){this.element=e,this.handlers={}},Wt={isEmpty:{configurable:!0}};U.prototype.bind=function(e,r){typeof this.handlers[e]>"u"&&(this.handlers[e]=[]),this.handlers[e].push(r),this.element.addEventListener(e,r,!1)};U.prototype.unbind=function(e,r){var l=this;this.handlers[e]=this.handlers[e].filter(function(o){return r&&o!==r?!0:(l.element.removeEventListener(e,o,!1),!1)})};U.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)};Wt.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return t.handlers[e].length===0})};Object.defineProperties(U.prototype,Wt);var O=function(){this.eventElements=[]};O.prototype.eventElement=function(e){var r=this.eventElements.filter(function(l){return l.element===e})[0];return r||(r=new U(e),this.eventElements.push(r)),r};O.prototype.bind=function(e,r,l){this.eventElement(e).bind(r,l)};O.prototype.unbind=function(e,r,l){var o=this.eventElement(e);o.unbind(r,l),o.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(o),1)};O.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]};O.prototype.once=function(e,r,l){var o=this.eventElement(e),c=function(a){o.unbind(r,c),l(a)};o.bind(r,c)};function z(t){if(typeof window.CustomEvent=="function")return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function J(t,e,r,l,o){l===void 0&&(l=!0),o===void 0&&(o=!1);var c;if(e==="top")c=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(e==="left")c=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");me(t,r,c,l,o)}function me(t,e,r,l,o){var c=r[0],a=r[1],i=r[2],n=r[3],h=r[4],u=r[5];l===void 0&&(l=!0),o===void 0&&(o=!1);var p=t.element;t.reach[n]=null,p[i]<1&&(t.reach[n]="start"),p[i]>t[c]-t[a]-1&&(t.reach[n]="end"),e&&(p.dispatchEvent(z("ps-scroll-"+n)),e<0?p.dispatchEvent(z("ps-scroll-"+h)):e>0&&p.dispatchEvent(z("ps-scroll-"+u)),l&&ge(t,n)),t.reach[n]&&(e||o)&&p.dispatchEvent(z("ps-"+n+"-reach-"+t.reach[n]))}function y(t){return parseInt(t,10)||0}function be(t){return P(t,"input,[contenteditable]")||P(t,"select,[contenteditable]")||P(t,"textarea,[contenteditable]")||P(t,"button,[contenteditable]")}function ye(t){var e=H(t);return y(e.width)+y(e.paddingLeft)+y(e.paddingRight)+y(e.borderLeftWidth)+y(e.borderRightWidth)}var I={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function A(t){var e=t.element,r=Math.floor(e.scrollTop),l=e.getBoundingClientRect();t.containerWidth=Math.round(l.width),t.containerHeight=Math.round(l.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(ht(e,w.element.rail("x")).forEach(function(o){return D(o)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(ht(e,w.element.rail("y")).forEach(function(o){return D(o)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=dt(t,y(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=y((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=dt(t,y(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=y(r*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),_e(e,t),t.scrollbarXActive?e.classList.add(w.state.active("x")):(e.classList.remove(w.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=t.isRtl===!0?t.contentWidth:0),t.scrollbarYActive?e.classList.add(w.state.active("y")):(e.classList.remove(w.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function dt(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function _e(t,e){var r={width:e.railXWidth},l=Math.floor(t.scrollTop);e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:r.left=t.scrollLeft,e.isScrollbarXUsingBottom?r.bottom=e.scrollbarXBottom-l:r.top=e.scrollbarXTop+l,Y(e.scrollbarXRail,r);var o={top:l,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?o.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:o.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?o.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth*2-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:o.left=e.scrollbarYLeft+t.scrollLeft,Y(e.scrollbarYRail,o),Y(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),Y(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function we(t){t.element,t.event.bind(t.scrollbarY,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var r=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,l=r>t.scrollbarYTop?1:-1;t.element.scrollTop+=l*t.containerHeight,A(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var r=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,l=r>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=l*t.containerWidth,A(t),e.stopPropagation()})}function Te(t){ft(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),ft(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function ft(t,e){var r=e[0],l=e[1],o=e[2],c=e[3],a=e[4],i=e[5],n=e[6],h=e[7],u=e[8],p=t.element,b=null,_=null,d=null;function v(g){g.touches&&g.touches[0]&&(g[o]=g.touches[0].pageY),p[n]=b+d*(g[o]-_),xt(t,h),A(t),g.stopPropagation(),g.type.startsWith("touch")&&g.changedTouches.length>1&&g.preventDefault()}function T(){St(t,h),t[u].classList.remove(w.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",v)}function m(g,S){b=p[n],S&&g.touches&&(g[o]=g.touches[0].pageY),_=g[o],d=(t[l]-t[r])/(t[c]-t[i]),S?t.event.bind(t.ownerDocument,"touchmove",v):(t.event.bind(t.ownerDocument,"mousemove",v),t.event.once(t.ownerDocument,"mouseup",T),g.preventDefault()),t[u].classList.add(w.state.clicking),g.stopPropagation()}t.event.bind(t[a],"mousedown",function(g){m(g)}),t.event.bind(t[a],"touchstart",function(g){m(g,!0)})}function Le(t){var e=t.element,r=function(){return P(e,":hover")},l=function(){return P(t.scrollbarX,":focus")||P(t.scrollbarY,":focus")};function o(c,a){var i=Math.floor(e.scrollTop);if(c===0){if(!t.scrollbarYActive)return!1;if(i===0&&a>0||i>=t.contentHeight-t.containerHeight&&a<0)return!t.settings.wheelPropagation}var n=e.scrollLeft;if(a===0){if(!t.scrollbarXActive)return!1;if(n===0&&c<0||n>=t.contentWidth-t.containerWidth&&c>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",function(c){if(!(c.isDefaultPrevented&&c.isDefaultPrevented()||c.defaultPrevented)&&!(!r()&&!l())){var a=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(a){if(a.tagName==="IFRAME")a=a.contentDocument.activeElement;else for(;a.shadowRoot;)a=a.shadowRoot.activeElement;if(be(a))return}var i=0,n=0;switch(c.which){case 37:c.metaKey?i=-t.contentWidth:c.altKey?i=-t.containerWidth:i=-30;break;case 38:c.metaKey?n=t.contentHeight:c.altKey?n=t.containerHeight:n=30;break;case 39:c.metaKey?i=t.contentWidth:c.altKey?i=t.containerWidth:i=30;break;case 40:c.metaKey?n=-t.contentHeight:c.altKey?n=-t.containerHeight:n=-30;break;case 32:c.shiftKey?n=t.containerHeight:n=-t.containerHeight;break;case 33:n=t.containerHeight;break;case 34:n=-t.containerHeight;break;case 36:n=t.contentHeight;break;case 35:n=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&i!==0||t.settings.suppressScrollY&&n!==0||(e.scrollTop-=n,e.scrollLeft+=i,A(t),o(i,n)&&c.preventDefault())}})}function Ye(t){var e=t.element;function r(a,i){var n=Math.floor(e.scrollTop),h=e.scrollTop===0,u=n+e.offsetHeight===e.scrollHeight,p=e.scrollLeft===0,b=e.scrollLeft+e.offsetWidth===e.scrollWidth,_;return Math.abs(i)>Math.abs(a)?_=h||u:_=p||b,_?!t.settings.wheelPropagation:!0}function l(a){var i=a.deltaX,n=-1*a.deltaY;return(typeof i>"u"||typeof n>"u")&&(i=-1*a.wheelDeltaX/6,n=a.wheelDeltaY/6),a.deltaMode&&a.deltaMode===1&&(i*=10,n*=10),i!==i&&n!==n&&(i=0,n=a.wheelDelta),a.shiftKey?[-n,-i]:[i,n]}function o(a,i,n){if(!I.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(a))return!1;for(var h=a;h&&h!==e;){if(h.classList.contains(w.element.consuming))return!0;var u=H(h);if(n&&u.overflowY.match(/(scroll|auto)/)){var p=h.scrollHeight-h.clientHeight;if(p>0&&(h.scrollTop>0&&n<0||h.scrollTop<p&&n>0))return!0}if(i&&u.overflowX.match(/(scroll|auto)/)){var b=h.scrollWidth-h.clientWidth;if(b>0&&(h.scrollLeft>0&&i<0||h.scrollLeft<b&&i>0))return!0}h=h.parentNode}return!1}function c(a){var i=l(a),n=i[0],h=i[1];if(!o(a.target,n,h)){var u=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(h?e.scrollTop-=h*t.settings.wheelSpeed:e.scrollTop+=n*t.settings.wheelSpeed,u=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(n?e.scrollLeft+=n*t.settings.wheelSpeed:e.scrollLeft-=h*t.settings.wheelSpeed,u=!0):(e.scrollTop-=h*t.settings.wheelSpeed,e.scrollLeft+=n*t.settings.wheelSpeed),A(t),u=u||r(n,h),u&&!a.ctrlKey&&(a.stopPropagation(),a.preventDefault())}}typeof window.onwheel<"u"?t.event.bind(e,"wheel",c):typeof window.onmousewheel<"u"&&t.event.bind(e,"mousewheel",c)}function xe(t){if(!I.supportsTouch&&!I.supportsIePointer)return;var e=t.element;function r(d,v){var T=Math.floor(e.scrollTop),m=e.scrollLeft,g=Math.abs(d),S=Math.abs(v);if(S>g){if(v<0&&T===t.contentHeight-t.containerHeight||v>0&&T===0)return window.scrollY===0&&v>0&&I.isChrome}else if(g>S&&(d<0&&m===t.contentWidth-t.containerWidth||d>0&&m===0))return!0;return!0}function l(d,v){e.scrollTop-=v,e.scrollLeft-=d,A(t)}var o={},c=0,a={},i=null;function n(d){return d.targetTouches?d.targetTouches[0]:d}function h(d){return d.pointerType&&d.pointerType==="pen"&&d.buttons===0?!1:!!(d.targetTouches&&d.targetTouches.length===1||d.pointerType&&d.pointerType!=="mouse"&&d.pointerType!==d.MSPOINTER_TYPE_MOUSE)}function u(d){if(h(d)){var v=n(d);o.pageX=v.pageX,o.pageY=v.pageY,c=new Date().getTime(),i!==null&&clearInterval(i)}}function p(d,v,T){if(!e.contains(d))return!1;for(var m=d;m&&m!==e;){if(m.classList.contains(w.element.consuming))return!0;var g=H(m);if(T&&g.overflowY.match(/(scroll|auto)/)){var S=m.scrollHeight-m.clientHeight;if(S>0&&(m.scrollTop>0&&T<0||m.scrollTop<S&&T>0))return!0}if(v&&g.overflowX.match(/(scroll|auto)/)){var V=m.scrollWidth-m.clientWidth;if(V>0&&(m.scrollLeft>0&&v<0||m.scrollLeft<V&&v>0))return!0}m=m.parentNode}return!1}function b(d){if(h(d)){var v=n(d),T={pageX:v.pageX,pageY:v.pageY},m=T.pageX-o.pageX,g=T.pageY-o.pageY;if(p(d.target,m,g))return;l(m,g),o=T;var S=new Date().getTime(),V=S-c;V>0&&(a.x=m/V,a.y=g/V,c=S),r(m,g)&&d.preventDefault()}}function _(){t.settings.swipeEasing&&(clearInterval(i),i=setInterval(function(){if(t.isInitialized){clearInterval(i);return}if(!a.x&&!a.y){clearInterval(i);return}if(Math.abs(a.x)<.01&&Math.abs(a.y)<.01){clearInterval(i);return}if(!t.element){clearInterval(i);return}l(a.x*30,a.y*30),a.x*=.8,a.y*=.8},10))}I.supportsTouch?(t.event.bind(e,"touchstart",u),t.event.bind(e,"touchmove",b),t.event.bind(e,"touchend",_)):I.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",u),t.event.bind(e,"pointermove",b),t.event.bind(e,"pointerup",_)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",u),t.event.bind(e,"MSPointerMove",b),t.event.bind(e,"MSPointerUp",_)))}var Se=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},We={"click-rail":we,"drag-thumb":Te,keyboard:Le,wheel:Ye,touch:xe},j=function(e,r){var l=this;if(r===void 0&&(r={}),typeof e=="string"&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=e,e.classList.add(w.main),this.settings=Se();for(var o in r)this.settings[o]=r[o];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var c=function(){return e.classList.add(w.state.focus)},a=function(){return e.classList.remove(w.state.focus)};this.isRtl=H(e).direction==="rtl",this.isRtl===!0&&e.classList.add(w.rtl),this.isNegativeScroll=function(){var h=e.scrollLeft,u=null;return e.scrollLeft=-1,u=e.scrollLeft<0,e.scrollLeft=h,u}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new O,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=q(w.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=q(w.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",c),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var i=H(this.scrollbarXRail);this.scrollbarXBottom=parseInt(i.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=y(i.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=y(i.borderLeftWidth)+y(i.borderRightWidth),Y(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=y(i.marginLeft)+y(i.marginRight),Y(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=q(w.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=q(w.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",c),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var n=H(this.scrollbarYRail);this.scrollbarYRight=parseInt(n.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=y(n.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?ye(this.scrollbarY):null,this.railBorderYWidth=y(n.borderTopWidth)+y(n.borderBottomWidth),Y(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=y(n.marginTop)+y(n.marginBottom),Y(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(h){return We[h](l)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(h){return l.onScroll(h)}),A(this)};j.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,Y(this.scrollbarXRail,{display:"block"}),Y(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=y(H(this.scrollbarXRail).marginLeft)+y(H(this.scrollbarXRail).marginRight),this.railYMarginHeight=y(H(this.scrollbarYRail).marginTop)+y(H(this.scrollbarYRail).marginBottom),Y(this.scrollbarXRail,{display:"none"}),Y(this.scrollbarYRail,{display:"none"}),A(this),J(this,"top",0,!1,!0),J(this,"left",0,!1,!0),Y(this.scrollbarXRail,{display:""}),Y(this.scrollbarYRail,{display:""}))};j.prototype.onScroll=function(e){this.isAlive&&(A(this),J(this,"top",this.element.scrollTop-this.lastScrollTop),J(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};j.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),D(this.scrollbarX),D(this.scrollbarY),D(this.scrollbarXRail),D(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};j.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};const vt=["scroll","ps-scroll-y","ps-scroll-x","ps-scroll-up","ps-scroll-down","ps-scroll-left","ps-scroll-right","ps-y-reach-start","ps-y-reach-end","ps-x-reach-start","ps-x-reach-end"];var Xe={name:"PerfectScrollbar",props:{options:{type:Object,required:!1,default:()=>{}},tag:{type:String,required:!1,default:"div"},watchOptions:{type:Boolean,required:!1,default:!1}},emits:vt,data(){return{ps:null}},watch:{watchOptions(t){!t&&this.watcher?this.watcher():this.createWatcher()}},mounted(){this.create(),this.watchOptions&&this.createWatcher()},updated(){this.$nextTick(()=>{this.update()})},beforeUnmount(){this.destroy()},methods:{create(){this.ps&&this.$isServer||(this.ps=new j(this.$el,this.options),vt.forEach(t=>{this.ps.element.addEventListener(t,e=>this.$emit(t,e))}))},createWatcher(){this.watcher=this.$watch("options",()=>{this.destroy(),this.create()},{deep:!0})},update(){this.ps&&this.ps.update()},destroy(){this.ps&&(this.ps.destroy(),this.ps=null)}},render(){return X(this.tag,{class:"ps"},this.$slots.default&&this.$slots.default())}};const Re={class:"nav-header"},He=["innerHTML"],ke=L("h1",{class:"leading-normal arm-nav text-center"},[R(" Athyara Raya "),L("br"),R(" Madani ")],-1),Ae=L("div",{class:"vertical-nav-items-shadow"},null,-1),Ee={__name:"VerticalNav",props:{tag:{type:[String,null],required:!1,default:"aside"},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(t){const e=t,{mdAndDown:r}=gt(),l=K(),o=mt();tt(()=>o.path,()=>{e.toggleIsOverlayNavActive(!1)});const c=K(!1),a=n=>c.value=n,i=n=>{c.value=n.target.scrollTop>0};return(n,h)=>{const u=G("RouterLink");return k(),C(yt(e.tag),{ref_key:"refNav",ref:l,class:bt(["layout-vertical-nav",[{visible:t.isOverlayNavActive,scrolled:E(c),"overlay-nav":E(r)}]])},{default:f(()=>[L("div",Re,[$(n.$slots,"nav-header",{},()=>[s(u,{to:"/",class:"app-logo d-flex align-center gap-x-3 app-title-wrapper"},{default:f(()=>[L("div",{class:"d-flex logo-wrapper",innerHTML:E(Jt)},null,8,He),ke]),_:1})])]),$(n.$slots,"before-nav-items",{},()=>[Ae]),$(n.$slots,"nav-items",{updateIsVerticalNavScrolled:a},()=>[s(E(Xe),{tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:i},{default:f(()=>[$(n.$slots,"default")]),_:3})]),$(n.$slots,"after-nav-items")]),_:3},8,["class"])}}};function Pe(t,e){const r=Xt(h()),l=Qt(t),o=M({get(){var u;const p=l.value;let b=e!=null&&e.getIndexOf?e.getIndexOf(r.value,p):p.indexOf(r.value);return b<0&&(b=(u=e==null?void 0:e.fallbackIndex)!=null?u:0),b},set(u){c(u)}});function c(u){const p=l.value,b=p.length,_=(u%b+b)%b,d=p[_];return r.value=d,d}function a(u=1){return c(o.value+u)}function i(u=1){return a(u)}function n(u=1){return a(-u)}function h(){var u,p;return(p=nt((u=e==null?void 0:e.initialValue)!=null?u:nt(t)[0]))!=null?p:void 0}return tt(l,()=>c(o.value)),{state:r,index:o,next:i,prev:n}}const Me=Rt({setup(t,{slots:e}){const r=K(!1),l=K(!1),o=Gt(r),c=mt(),{mdAndDown:a}=gt();return Zt(r,l),()=>{var b,_,d;const i=X(Ee,{isOverlayNavActive:r.value,toggleIsOverlayNavActive:o},{"nav-header":()=>{var v;return(v=e["vertical-nav-header"])==null?void 0:v.call(e)},"before-nav-items":()=>{var v;return(v=e["before-vertical-nav-items"])==null?void 0:v.call(e)},default:()=>{var v;return(v=e["vertical-nav-content"])==null?void 0:v.call(e)},"after-nav-items":()=>{var v;return(v=e["after-vertical-nav-items"])==null?void 0:v.call(e)}}),n=X("header",{class:["layout-navbar navbar-blur"]},[X("div",{class:"navbar-content-container"},(b=e.navbar)==null?void 0:b.call(e,{toggleVerticalOverlayNavActive:o}))]),h=X("main",{class:"layout-page-content"},X("div",{class:"page-content-container"},(_=e.default)==null?void 0:_.call(e))),u=X("footer",{class:"layout-footer"},[X("div",{class:"footer-content-container"},(d=e.footer)==null?void 0:d.call(e))]),p=X("div",{class:["layout-overlay",{visible:l.value}],onClick:()=>{l.value=!l.value}});return X("div",{class:["layout-wrapper layout-nav-type-vertical layout-navbar-static layout-footer-static layout-content-width-fluid",a.value&&"layout-overlay-nav",c.meta.layoutWrapperClasses]},[i,X("div",{class:"layout-content-wrapper"},[n,h,u]),p])}}});const Ce={class:"nav-item-title"},W={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(t){return(e,r)=>(k(),Z("li",{class:bt(["nav-link",{disabled:t.item.disable}])},[(k(),C(yt(t.item.to?"RouterLink":"a"),{to:t.item.to,href:t.item.href},{default:f(()=>[s(x,{icon:t.item.icon,class:"nav-item-icon"},null,8,["icon"]),L("span",Ce,Q(t.item.title),1)]),_:1},8,["to","href"]))],2))}},Ve={},Ne={class:"h-100 d-flex flex-wrap align-center justify-space-between"},Be={class:"d-flex align-center"},$e=L("a",{href:"https://themeselection.com",target:"_blank",rel:"noopener noreferrer",class:"text-primary ms-1"},"ThemeSelection",-1),Ie=Ht('<span class="d-flex align-center"> Distributed By <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer" class="text-primary ms-1">ThemeWagon</a></span><span class="d-md-flex gap-x-4 text-primary d-none"><a href="https://themeselection.com/license/" target="noopener noreferrer">License</a><a href="https://themeselection.com/" target="noopener noreferrer">More Themes</a><a href="https://demos.themeselection.com/sneat-vuetify-vuejs-admin-template/documentation/" target="noopener noreferrer">Documentation</a></span>',2);function De(t,e){return k(),Z("div",Ne,[L("span",Be,[R(" © "+Q(new Date().getFullYear())+" Made With ",1),s(x,{icon:"bx-heart",color:"error",size:"1.25rem",class:"mx-1"}),R(" By "),$e]),Ie])}const Oe=Lt(Ve,[["render",De]]);const Ke=_t({id:String,text:String,...kt(re({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"v-tooltip"),Ue=wt()({name:"VTooltip",props:Ke(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:r}=e;const l=At(t,"modelValue"),{scopeId:o}=ne(),c=Et(),a=M(()=>t.id||`v-tooltip-${c}`),i=K(),n=M(()=>t.location.split(" ").length>1?t.location:t.location+" center"),h=M(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),u=M(()=>t.transition?t.transition:l.value?"scale-transition":"fade-transition"),p=M(()=>F({"aria-describedby":a.value},t.activatorProps));return Tt(()=>{const[b]=lt.filterProps(t);return s(lt,F({ref:i,class:["v-tooltip",t.class],style:t.style,id:a.value},b,{modelValue:l.value,"onUpdate:modelValue":_=>l.value=_,transition:u.value,absolute:!0,location:n.value,origin:h.value,persistent:!0,role:"tooltip",activatorProps:p.value,_disableGlobalStack:!0},o),{activator:r.activator,default:function(){var T;for(var _=arguments.length,d=new Array(_),v=0;v<_;v++)d[v]=arguments[v];return((T=r.default)==null?void 0:T.call(r,...d))??t.text}})}),se({},i)}}),je={class:"text-capitalize"},qe={__name:"ThemeSwitcher",props:{themes:{type:Array,required:!0}},setup(t){const e=t,{name:r,global:l}=et(),{state:o,next:c,index:a}=Pe(e.themes.map(n=>n.name),{initialValue:r}),i=()=>{l.name.value=c()};return tt(()=>l.name.value,n=>{o.value=n}),(n,h)=>{const u=G("IconBtn");return k(),C(u,{onClick:i},{default:f(()=>[s(x,{icon:e.themes[E(a)].icon},null,8,["icon"]),s(Ue,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:f(()=>[L("span",je,Q(E(o)),1)]),_:1})]),_:1})}}},ze={__name:"NavbarThemeSwitcher",setup(t){const e=[{name:"light",icon:"bx-sun"},{name:"dark",icon:"bx-moon"}];return(r,l)=>{const o=qe;return k(),C(o,{themes:e})}}};const Fe=_t({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Pt,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...Mt(),...Ct({location:"top end"}),...Vt(),...Nt(),...Bt(),...ce({transition:"scale-rotate-transition"})},"v-badge"),pt=wt()({name:"VBadge",inheritAttrs:!1,props:Fe(),setup(t,e){const{backgroundColorClasses:r,backgroundColorStyles:l}=$t(rt(t,"color")),{roundedClasses:o}=It(t),{t:c}=Dt(),{textColorClasses:a,textColorStyles:i}=Ot(rt(t,"textColor")),{themeClasses:n}=et(),{locationStyles:h}=Kt(t,!0,u=>(t.floating?t.dot?2:4:t.dot?8:12)+(["top","bottom"].includes(u)?+(t.offsetY??0):["left","right"].includes(u)?+(t.offsetX??0):0));return Tt(()=>{const u=Number(t.content),p=!t.max||isNaN(u)?t.content:u<=+t.max?u:`${t.max}+`,[b,_]=Ut(e.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return s(t.tag,F({class:["v-badge",{"v-badge--bordered":t.bordered,"v-badge--dot":t.dot,"v-badge--floating":t.floating,"v-badge--inline":t.inline},t.class]},_,{style:t.style}),{default:()=>{var d,v;return[s("div",{class:"v-badge__wrapper"},[(v=(d=e.slots).default)==null?void 0:v.call(d),s(ue,{transition:t.transition},{default:()=>{var T,m;return[jt(s("span",F({class:["v-badge__badge",n.value,r.value,o.value,a.value],style:[l.value,i.value,t.inline?{}:h.value],"aria-atomic":"true","aria-label":c(t.label,u),"aria-live":"polite",role:"status"},b),[t.dot?void 0:e.slots.badge?(m=(T=e.slots).badge)==null?void 0:m.call(T):t.icon?s(x,{icon:t.icon},null):p]),[[qt,t.modelValue]])]}})])]}})}),{}}}),Je={__name:"UserProfile",setup(t){const e=async()=>{try{const r=localStorage.getItem("token");if(!r){console.error("Token not found.");return}await ie.post("/api/auth/logout",null,{headers:{Authorization:`Bearer ${r}`}}),localStorage.removeItem("token"),window.location.href="/login"}catch(r){console.error("Logout error:",r)}};return(r,l)=>(k(),C(pt,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success",bordered:""},{default:f(()=>[s(at,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:f(()=>[s(st,{src:E(ot)},null,8,["src"]),s(le,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:f(()=>[s(oe,null,{default:f(()=>[s(N,null,{prepend:f(()=>[s(te,{start:""},{default:f(()=>[s(pt,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:f(()=>[s(at,{color:"primary",variant:"tonal"},{default:f(()=>[s(st,{src:E(ot)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),default:f(()=>[s(B,{class:"font-weight-semibold"},{default:f(()=>[R(" John Doe ")]),_:1}),s(ae,null,{default:f(()=>[R("Admin")]),_:1})]),_:1}),s(it,{class:"my-2"}),s(N,{link:""},{prepend:f(()=>[s(x,{class:"me-2",icon:"bx-user",size:"22"})]),default:f(()=>[s(B,null,{default:f(()=>[R("Profile")]),_:1})]),_:1}),s(N,{link:""},{prepend:f(()=>[s(x,{class:"me-2",icon:"bx-cog",size:"22"})]),default:f(()=>[s(B,null,{default:f(()=>[R("Settings")]),_:1})]),_:1}),s(N,{link:""},{prepend:f(()=>[s(x,{class:"me-2",icon:"bx-dollar",size:"22"})]),default:f(()=>[s(B,null,{default:f(()=>[R("Pricing")]),_:1})]),_:1}),s(N,{link:""},{prepend:f(()=>[s(x,{class:"me-2",icon:"bx-help-circle",size:"22"})]),default:f(()=>[s(B,null,{default:f(()=>[R("FAQ")]),_:1})]),_:1}),s(it,{class:"my-2"}),s(N,{to:"/login"},{prepend:f(()=>[s(x,{class:"me-2",icon:"bx-log-out",size:"22"})]),default:f(()=>[s(B,{onClick:l[0]||(l[0]=o=>e())},{default:f(()=>[R("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};const Qe=t=>(zt("data-v-aba7e629"),t=t(),Ft(),t),Ge={class:"d-flex h-100 align-center"},Ze={class:"d-flex align-center cursor-pointer",style:{"user-select":"none"}},tr=Qe(()=>L("span",{class:"d-none d-md-flex align-center text-disabled"},[L("span",{class:"me-3"},"Search"),L("span",{class:"meta-key"},"⌘K")],-1)),er={__name:"DefaultLayoutWithVerticalNav",setup(t){const e=et();return M(()=>e.global.name.value==="light"?pe:ve),(r,l)=>{const o=G("IconBtn");return k(),C(Me,null,{navbar:f(({toggleVerticalOverlayNavActive:c})=>[L("div",Ge,[s(o,{class:"ms-n3 d-lg-none",onClick:a=>c(!0)},{default:f(()=>[s(x,{icon:"bx-menu"})]),_:2},1032,["onClick"]),L("div",Ze,[s(o,null,{default:f(()=>[s(x,{icon:"bx-search"})]),_:1}),tr]),s(ee),s(o,{class:"me-2",href:"https://github.com/themeselection/sneat-vuetify-vuejs-admin-template-free",target:"_blank",rel:"noopener noreferrer"},{default:f(()=>[s(x,{icon:"bxl-github"})]),_:1}),s(o,{class:"me-2"},{default:f(()=>[s(x,{icon:"bx-bell"})]),_:1}),s(ze,{class:"me-2"}),s(Je)])]),"vertical-nav-content":f(()=>[s(W,{item:{title:"Dashboard",icon:"bx-home",to:"/dashboard"}}),s(W,{item:{title:"Account Settings",icon:"mdi-account-cog-outline",to:"/account-settings"}}),s(W,{item:{title:"Pemohon",icon:"mdi-account-cog-outline",to:"/permohonans"}}),s(ct,{item:{heading:"Pages"}}),s(W,{item:{title:"Login",icon:"bx-log-in",to:"/login"}}),s(W,{item:{title:"Register",icon:"bx-user-plus",to:"/register"}}),s(W,{item:{title:"Error",icon:"bx-info-circle",to:"/no-existence"}}),s(ct,{item:{heading:"User Interface"}}),s(W,{item:{title:"Typography",icon:"mdi-alpha-t-box-outline",to:"/typography"}}),s(W,{item:{title:"Icons",icon:"bx-show",to:"/icons"}}),s(W,{item:{title:"Cards",icon:"bx-credit-card",to:"/cards"}}),s(W,{item:{title:"Tables",icon:"bx-table",to:"/tables"}}),s(W,{item:{title:"Form Layouts",icon:"mdi-form-select",to:"/form-layouts"}})]),footer:f(()=>[s(Oe)]),default:f(()=>[$(r.$slots,"default",{},void 0,!0)]),_:3})}}},rr=Lt(er,[["__scopeId","data-v-aba7e629"]]);const vr={__name:"default",setup(t){return(e,r)=>{const l=G("RouterView");return k(),C(rr,null,{default:f(()=>[s(l)]),_:1})}}};export{vr as default};
