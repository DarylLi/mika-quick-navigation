(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ss(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uu={exports:{}},br={},Vu={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),Hp=Symbol.for("react.portal"),Up=Symbol.for("react.fragment"),Vp=Symbol.for("react.strict_mode"),qp=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),Qp=Symbol.for("react.context"),$p=Symbol.for("react.forward_ref"),Kp=Symbol.for("react.suspense"),Xp=Symbol.for("react.memo"),Yp=Symbol.for("react.lazy"),Fc=Symbol.iterator;function Zp(e){return e===null||typeof e!="object"?null:(e=Fc&&e[Fc]||e["@@iterator"],typeof e=="function"?e:null)}var qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ju=Object.assign,Qu={};function uo(e,t,n){this.props=e,this.context=t,this.refs=Qu,this.updater=n||qu}uo.prototype.isReactComponent={};uo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};uo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $u(){}$u.prototype=uo.prototype;function Ps(e,t,n){this.props=e,this.context=t,this.refs=Qu,this.updater=n||qu}var Cs=Ps.prototype=new $u;Cs.constructor=Ps;Ju(Cs,uo.prototype);Cs.isPureReactComponent=!0;var Oc=Array.isArray,Ku=Object.prototype.hasOwnProperty,Ds={current:null},Xu={key:!0,ref:!0,__self:!0,__source:!0};function Yu(e,t,n){var o,a={},r=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(r=""+t.key),t)Ku.call(t,o)&&!Xu.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];a.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)a[o]===void 0&&(a[o]=s[o]);return{$$typeof:ca,type:e,key:r,ref:i,props:a,_owner:Ds.current}}function eg(e,t){return{$$typeof:ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bs(e){return typeof e=="object"&&e!==null&&e.$$typeof===ca}function tg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gc=/\/+/g;function Wr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tg(""+e.key):t.toString(36)}function Na(e,t,n,o,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ca:case Hp:i=!0}}if(i)return i=e,a=a(i),e=o===""?"."+Wr(i,0):o,Oc(a)?(n="",e!=null&&(n=e.replace(Gc,"$&/")+"/"),Na(a,t,n,"",function(l){return l})):a!=null&&(Bs(a)&&(a=eg(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Gc,"$&/")+"/")+e)),t.push(a)),1;if(i=0,o=o===""?".":o+":",Oc(e))for(var s=0;s<e.length;s++){r=e[s];var c=o+Wr(r,s);i+=Na(r,t,n,c,a)}else if(c=Zp(e),typeof c=="function")for(e=c.call(e),s=0;!(r=e.next()).done;)r=r.value,c=o+Wr(r,s++),i+=Na(r,t,n,c,a);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function _a(e,t,n){if(e==null)return e;var o=[],a=0;return Na(e,o,"","",function(r){return t.call(n,r,a++)}),o}function ng(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},za={transition:null},og={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:za,ReactCurrentOwner:Ds};function Zu(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:_a,forEach:function(e,t,n){_a(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _a(e,function(){t++}),t},toArray:function(e){return _a(e,function(t){return t})||[]},only:function(e){if(!Bs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=uo;X.Fragment=Up;X.Profiler=qp;X.PureComponent=Ps;X.StrictMode=Vp;X.Suspense=Kp;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=og;X.act=Zu;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Ju({},e.props),a=e.key,r=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,i=Ds.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Ku.call(t,c)&&!Xu.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){s=Array(c);for(var l=0;l<c;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:ca,type:e.type,key:a,ref:r,props:o,_owner:i}};X.createContext=function(e){return e={$$typeof:Qp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jp,_context:e},e.Consumer=e};X.createElement=Yu;X.createFactory=function(e){var t=Yu.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:$p,render:e}};X.isValidElement=Bs;X.lazy=function(e){return{$$typeof:Yp,_payload:{_status:-1,_result:e},_init:ng}};X.memo=function(e,t){return{$$typeof:Xp,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=za.transition;za.transition={};try{e()}finally{za.transition=t}};X.unstable_act=Zu;X.useCallback=function(e,t){return Ge.current.useCallback(e,t)};X.useContext=function(e){return Ge.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};X.useEffect=function(e,t){return Ge.current.useEffect(e,t)};X.useId=function(){return Ge.current.useId()};X.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Ge.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};X.useRef=function(e){return Ge.current.useRef(e)};X.useState=function(e){return Ge.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Ge.current.useTransition()};X.version="18.3.1";Vu.exports=X;var Ae=Vu.exports;const Wc=Ss(Ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag=Ae,rg=Symbol.for("react.element"),ig=Symbol.for("react.fragment"),sg=Object.prototype.hasOwnProperty,cg=ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lg={key:!0,ref:!0,__self:!0,__source:!0};function ed(e,t,n){var o,a={},r=null,i=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)sg.call(t,o)&&!lg.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:rg,type:e,key:r,ref:i,props:a,_owner:cg.current}}br.Fragment=ig;br.jsx=ed;br.jsxs=ed;Uu.exports=br;var b=Uu.exports,Ai={},td={exports:{}},it={},nd={exports:{}},od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,W){var _=P.length;P.push(W);e:for(;0<_;){var Q=_-1>>>1,oe=P[Q];if(0<a(oe,W))P[Q]=W,P[_]=oe,_=Q;else break e}}function n(P){return P.length===0?null:P[0]}function o(P){if(P.length===0)return null;var W=P[0],_=P.pop();if(_!==W){P[0]=_;e:for(var Q=0,oe=P.length,y=oe>>>1;Q<y;){var ye=2*(Q+1)-1,Ye=P[ye],ie=ye+1,ct=P[ie];if(0>a(Ye,_))ie<oe&&0>a(ct,Ye)?(P[Q]=ct,P[ie]=_,Q=ie):(P[Q]=Ye,P[ye]=_,Q=ye);else if(ie<oe&&0>a(ct,_))P[Q]=ct,P[ie]=_,Q=ie;else break e}}return W}function a(P,W){var _=P.sortIndex-W.sortIndex;return _!==0?_:P.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var c=[],l=[],u=1,d=null,g=3,p=!1,w=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(P){for(var W=n(l);W!==null;){if(W.callback===null)o(l);else if(W.startTime<=P)o(l),W.sortIndex=W.expirationTime,t(c,W);else break;W=n(l)}}function T(P){if(k=!1,f(P),!w)if(n(c)!==null)w=!0,V(x);else{var W=n(l);W!==null&&re(T,W.startTime-P)}}function x(P,W){w=!1,k&&(k=!1,m(C),C=-1),p=!0;var _=g;try{for(f(W),d=n(c);d!==null&&(!(d.expirationTime>W)||P&&!R());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,g=d.priorityLevel;var oe=Q(d.expirationTime<=W);W=e.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(c)&&o(c),f(W)}else o(c);d=n(c)}if(d!==null)var y=!0;else{var ye=n(l);ye!==null&&re(T,ye.startTime-W),y=!1}return y}finally{d=null,g=_,p=!1}}var v=!1,E=null,C=-1,O=5,z=-1;function R(){return!(e.unstable_now()-z<O)}function A(){if(E!==null){var P=e.unstable_now();z=P;var W=!0;try{W=E(!0,P)}finally{W?G():(v=!1,E=null)}}else v=!1}var G;if(typeof h=="function")G=function(){h(A)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,M=N.port2;N.port1.onmessage=A,G=function(){M.postMessage(null)}}else G=function(){D(A,0)};function V(P){E=P,v||(v=!0,G())}function re(P,W){C=D(function(){P(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||p||(w=!0,V(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var W=3;break;default:W=g}var _=g;g=W;try{return P()}finally{g=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var _=g;g=P;try{return W()}finally{g=_}},e.unstable_scheduleCallback=function(P,W,_){var Q=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?Q+_:Q):_=Q,P){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=_+oe,P={id:u++,callback:W,priorityLevel:P,startTime:_,expirationTime:oe,sortIndex:-1},_>Q?(P.sortIndex=_,t(l,P),n(c)===null&&P===n(l)&&(k?(m(C),C=-1):k=!0,re(T,_-Q))):(P.sortIndex=oe,t(c,P),w||p||(w=!0,V(x))),P},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(P){var W=g;return function(){var _=g;g=W;try{return P.apply(this,arguments)}finally{g=_}}}})(od);nd.exports=od;var ug=nd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg=Ae,rt=ug;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ad=new Set,Uo={};function Pn(e,t){oo(e,t),oo(e+"Capture",t)}function oo(e,t){for(Uo[e]=t,e=0;e<t.length;e++)ad.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xi=Object.prototype.hasOwnProperty,pg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hc={},Uc={};function gg(e){return xi.call(Uc,e)?!0:xi.call(Hc,e)?!1:pg.test(e)?Uc[e]=!0:(Hc[e]=!0,!1)}function mg(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _g(e,t,n,o){if(t===null||typeof t>"u"||mg(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,o,a,r,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=i}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ls=/[\-:]([a-z])/g;function Ns(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ls,Ns);Ce[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ls,Ns);Ce[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ls,Ns);Ce[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function zs(e,t,n,o){var a=Ce.hasOwnProperty(t)?Ce[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_g(t,n,a,o)&&(n=null),o||a===null?gg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Vt=dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),Ms=Symbol.for("react.strict_mode"),ji=Symbol.for("react.profiler"),rd=Symbol.for("react.provider"),id=Symbol.for("react.context"),Rs=Symbol.for("react.forward_ref"),Ei=Symbol.for("react.suspense"),Si=Symbol.for("react.suspense_list"),Fs=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),sd=Symbol.for("react.offscreen"),Vc=Symbol.iterator;function yo(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,Hr;function Eo(e){if(Hr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hr=t&&t[1]||""}return`
`+Hr+e}var Ur=!1;function Vr(e,t){if(!e||Ur)return"";Ur=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var o=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){o=l}e.call(t.prototype)}else{try{throw Error()}catch(l){o=l}e()}}catch(l){if(l&&o&&typeof l.stack=="string"){for(var a=l.stack.split(`
`),r=o.stack.split(`
`),i=a.length-1,s=r.length-1;1<=i&&0<=s&&a[i]!==r[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==r[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==r[s]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=s);break}}}finally{Ur=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Eo(e):""}function hg(e){switch(e.tag){case 5:return Eo(e.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return e=Vr(e.type,!1),e;case 11:return e=Vr(e.type.render,!1),e;case 1:return e=Vr(e.type,!0),e;default:return""}}function Pi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case Mn:return"Portal";case ji:return"Profiler";case Ms:return"StrictMode";case Ei:return"Suspense";case Si:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case id:return(e.displayName||"Context")+".Consumer";case rd:return(e._context.displayName||"Context")+".Provider";case Rs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fs:return t=e.displayName||null,t!==null?t:Pi(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return Pi(e(t))}catch{}}return null}function fg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pi(t);case 8:return t===Ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yg(e){var t=cd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){o=""+i,r.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fa(e){e._valueTracker||(e._valueTracker=yg(e))}function ld(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=cd(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ci(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qc(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ud(e,t){t=t.checked,t!=null&&zs(e,"checked",t,!1)}function Di(e,t){ud(e,t);var n=ln(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bi(e,t.type,ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Jc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bi(e,t,n){(t!=="number"||Ka(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var So=Array.isArray;function $n(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(So(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ln(n)}}function dd(e,t){var n=ln(t.value),o=ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function $c(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ya,gd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ya.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wg=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(e){wg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Do[t]=Do[e]})});function md(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Do.hasOwnProperty(e)&&Do[e]?(""+t).trim():t+"px"}function _d(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=md(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var kg=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zi(e,t){if(t){if(kg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Mi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ri=null;function Os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fi=null,Kn=null,Xn=null;function Kc(e){if(e=da(e)){if(typeof Fi!="function")throw Error(j(280));var t=e.stateNode;t&&(t=jr(t),Fi(e.stateNode,e.type,t))}}function hd(e){Kn?Xn?Xn.push(e):Xn=[e]:Kn=e}function fd(){if(Kn){var e=Kn,t=Xn;if(Xn=Kn=null,Kc(e),t)for(e=0;e<t.length;e++)Kc(t[e])}}function yd(e,t){return e(t)}function wd(){}var qr=!1;function kd(e,t,n){if(qr)return e(t,n);qr=!0;try{return yd(e,t,n)}finally{qr=!1,(Kn!==null||Xn!==null)&&(wd(),fd())}}function qo(e,t){var n=e.stateNode;if(n===null)return null;var o=jr(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Oi=!1;if(Gt)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Oi=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Oi=!1}function vg(e,t,n,o,a,r,i,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(u){this.onError(u)}}var Bo=!1,Xa=null,Ya=!1,Gi=null,bg={onError:function(e){Bo=!0,Xa=e}};function Tg(e,t,n,o,a,r,i,s,c){Bo=!1,Xa=null,vg.apply(bg,arguments)}function Ig(e,t,n,o,a,r,i,s,c){if(Tg.apply(this,arguments),Bo){if(Bo){var l=Xa;Bo=!1,Xa=null}else throw Error(j(198));Ya||(Ya=!0,Gi=l)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xc(e){if(Cn(e)!==e)throw Error(j(188))}function Ag(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Xc(a),e;if(r===o)return Xc(a),t;r=r.sibling}throw Error(j(188))}if(n.return!==o.return)n=a,o=r;else{for(var i=!1,s=a.child;s;){if(s===n){i=!0,n=a,o=r;break}if(s===o){i=!0,o=a,n=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===n){i=!0,n=r,o=a;break}if(s===o){i=!0,o=r,n=a;break}s=s.sibling}if(!i)throw Error(j(189))}}if(n.alternate!==o)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function bd(e){return e=Ag(e),e!==null?Td(e):null}function Td(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Td(e);if(t!==null)return t;e=e.sibling}return null}var Id=rt.unstable_scheduleCallback,Yc=rt.unstable_cancelCallback,xg=rt.unstable_shouldYield,jg=rt.unstable_requestPaint,we=rt.unstable_now,Eg=rt.unstable_getCurrentPriorityLevel,Gs=rt.unstable_ImmediatePriority,Ad=rt.unstable_UserBlockingPriority,Za=rt.unstable_NormalPriority,Sg=rt.unstable_LowPriority,xd=rt.unstable_IdlePriority,Tr=null,Pt=null;function Pg(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Tr,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Bg,Cg=Math.log,Dg=Math.LN2;function Bg(e){return e>>>=0,e===0?32:31-(Cg(e)/Dg|0)|0}var wa=64,ka=4194304;function Po(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function er(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,r=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~a;s!==0?o=Po(s):(r&=i,r!==0&&(o=Po(r)))}else i=n&~a,i!==0?o=Po(i):r!==0&&(o=Po(r));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,r=t&-t,a>=r||a===16&&(r&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-bt(t),a=1<<n,o|=e[n],t&=~a;return o}function Lg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ng(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes;0<r;){var i=31-bt(r),s=1<<i,c=a[i];c===-1?(!(s&n)||s&o)&&(a[i]=Lg(s,t)):c<=t&&(e.expiredLanes|=s),r&=~s}}function Wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jd(){var e=wa;return wa<<=1,!(wa&4194240)&&(wa=64),e}function Jr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function la(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function zg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-bt(n),r=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~r}}function Ws(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-bt(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var ae=0;function Ed(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sd,Hs,Pd,Cd,Dd,Hi=!1,va=[],en=null,tn=null,nn=null,Jo=new Map,Qo=new Map,Kt=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zc(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(t.pointerId)}}function ko(e,t,n,o,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:r,targetContainers:[a]},t!==null&&(t=da(t),t!==null&&Hs(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Rg(e,t,n,o,a){switch(t){case"focusin":return en=ko(en,e,t,n,o,a),!0;case"dragenter":return tn=ko(tn,e,t,n,o,a),!0;case"mouseover":return nn=ko(nn,e,t,n,o,a),!0;case"pointerover":var r=a.pointerId;return Jo.set(r,ko(Jo.get(r)||null,e,t,n,o,a)),!0;case"gotpointercapture":return r=a.pointerId,Qo.set(r,ko(Qo.get(r)||null,e,t,n,o,a)),!0}return!1}function Bd(e){var t=kn(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=vd(n),t!==null){e.blockedOn=t,Dd(e.priority,function(){Pd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ma(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ui(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Ri=o,n.target.dispatchEvent(o),Ri=null}else return t=da(n),t!==null&&Hs(t),e.blockedOn=n,!1;t.shift()}return!0}function el(e,t,n){Ma(e)&&n.delete(t)}function Fg(){Hi=!1,en!==null&&Ma(en)&&(en=null),tn!==null&&Ma(tn)&&(tn=null),nn!==null&&Ma(nn)&&(nn=null),Jo.forEach(el),Qo.forEach(el)}function vo(e,t){e.blockedOn===t&&(e.blockedOn=null,Hi||(Hi=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,Fg)))}function $o(e){function t(a){return vo(a,e)}if(0<va.length){vo(va[0],e);for(var n=1;n<va.length;n++){var o=va[n];o.blockedOn===e&&(o.blockedOn=null)}}for(en!==null&&vo(en,e),tn!==null&&vo(tn,e),nn!==null&&vo(nn,e),Jo.forEach(t),Qo.forEach(t),n=0;n<Kt.length;n++)o=Kt[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)Bd(n),n.blockedOn===null&&Kt.shift()}var Yn=Vt.ReactCurrentBatchConfig,tr=!0;function Og(e,t,n,o){var a=ae,r=Yn.transition;Yn.transition=null;try{ae=1,Us(e,t,n,o)}finally{ae=a,Yn.transition=r}}function Gg(e,t,n,o){var a=ae,r=Yn.transition;Yn.transition=null;try{ae=4,Us(e,t,n,o)}finally{ae=a,Yn.transition=r}}function Us(e,t,n,o){if(tr){var a=Ui(e,t,n,o);if(a===null)oi(e,t,o,nr,n),Zc(e,o);else if(Rg(a,e,t,n,o))o.stopPropagation();else if(Zc(e,o),t&4&&-1<Mg.indexOf(e)){for(;a!==null;){var r=da(a);if(r!==null&&Sd(r),r=Ui(e,t,n,o),r===null&&oi(e,t,o,nr,n),r===a)break;a=r}a!==null&&o.stopPropagation()}else oi(e,t,o,null,n)}}var nr=null;function Ui(e,t,n,o){if(nr=null,e=Os(o),e=kn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nr=e,null}function Ld(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Eg()){case Gs:return 1;case Ad:return 4;case Za:case Sg:return 16;case xd:return 536870912;default:return 16}default:return 16}}var Yt=null,Vs=null,Ra=null;function Nd(){if(Ra)return Ra;var e,t=Vs,n=t.length,o,a="value"in Yt?Yt.value:Yt.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===a[r-o];o++);return Ra=a.slice(e,1<o?1-o:void 0)}function Fa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ba(){return!0}function tl(){return!1}function st(e){function t(n,o,a,r,i){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ba:tl,this.isPropagationStopped=tl,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),t}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qs=st(po),ua=he({},po,{view:0,detail:0}),Wg=st(ua),Qr,$r,bo,Ir=he({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bo&&(bo&&e.type==="mousemove"?(Qr=e.screenX-bo.screenX,$r=e.screenY-bo.screenY):$r=Qr=0,bo=e),Qr)},movementY:function(e){return"movementY"in e?e.movementY:$r}}),nl=st(Ir),Hg=he({},Ir,{dataTransfer:0}),Ug=st(Hg),Vg=he({},ua,{relatedTarget:0}),Kr=st(Vg),qg=he({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=st(qg),Qg=he({},po,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$g=st(Qg),Kg=he({},po,{data:0}),ol=st(Kg),Xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function em(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zg[e])?!!t[e]:!1}function Js(){return em}var tm=he({},ua,{key:function(e){if(e.key){var t=Xg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Js,charCode:function(e){return e.type==="keypress"?Fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nm=st(tm),om=he({},Ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),al=st(om),am=he({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Js}),rm=st(am),im=he({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),sm=st(im),cm=he({},Ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lm=st(cm),um=[9,13,27,32],Qs=Gt&&"CompositionEvent"in window,Lo=null;Gt&&"documentMode"in document&&(Lo=document.documentMode);var dm=Gt&&"TextEvent"in window&&!Lo,zd=Gt&&(!Qs||Lo&&8<Lo&&11>=Lo),rl=String.fromCharCode(32),il=!1;function Md(e,t){switch(e){case"keyup":return um.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function pm(e,t){switch(e){case"compositionend":return Rd(t);case"keypress":return t.which!==32?null:(il=!0,rl);case"textInput":return e=t.data,e===rl&&il?null:e;default:return null}}function gm(e,t){if(Fn)return e==="compositionend"||!Qs&&Md(e,t)?(e=Nd(),Ra=Vs=Yt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zd&&t.locale!=="ko"?null:t.data;default:return null}}var mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mm[e.type]:t==="textarea"}function Fd(e,t,n,o){hd(o),t=or(t,"onChange"),0<t.length&&(n=new qs("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var No=null,Ko=null;function _m(e){Kd(e,0)}function Ar(e){var t=Wn(e);if(ld(t))return e}function hm(e,t){if(e==="change")return t}var Od=!1;if(Gt){var Xr;if(Gt){var Yr="oninput"in document;if(!Yr){var cl=document.createElement("div");cl.setAttribute("oninput","return;"),Yr=typeof cl.oninput=="function"}Xr=Yr}else Xr=!1;Od=Xr&&(!document.documentMode||9<document.documentMode)}function ll(){No&&(No.detachEvent("onpropertychange",Gd),Ko=No=null)}function Gd(e){if(e.propertyName==="value"&&Ar(Ko)){var t=[];Fd(t,Ko,e,Os(e)),kd(_m,t)}}function fm(e,t,n){e==="focusin"?(ll(),No=t,Ko=n,No.attachEvent("onpropertychange",Gd)):e==="focusout"&&ll()}function ym(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ar(Ko)}function wm(e,t){if(e==="click")return Ar(t)}function km(e,t){if(e==="input"||e==="change")return Ar(t)}function vm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:vm;function Xo(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!xi.call(t,a)||!It(e[a],t[a]))return!1}return!0}function ul(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dl(e,t){var n=ul(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ul(n)}}function Wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hd(){for(var e=window,t=Ka();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ka(e.document)}return t}function $s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bm(e){var t=Hd(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wd(n.ownerDocument.documentElement,n)){if(o!==null&&$s(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,r=Math.min(o.start,a);o=o.end===void 0?r:Math.min(o.end,a),!e.extend&&r>o&&(a=o,o=r,r=a),a=dl(n,r);var i=dl(n,o);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),r>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tm=Gt&&"documentMode"in document&&11>=document.documentMode,On=null,Vi=null,zo=null,qi=!1;function pl(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qi||On==null||On!==Ka(o)||(o=On,"selectionStart"in o&&$s(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),zo&&Xo(zo,o)||(zo=o,o=or(Vi,"onSelect"),0<o.length&&(t=new qs("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=On)))}function Ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gn={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Zr={},Ud={};Gt&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function xr(e){if(Zr[e])return Zr[e];if(!Gn[e])return e;var t=Gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ud)return Zr[e]=t[n];return e}var Vd=xr("animationend"),qd=xr("animationiteration"),Jd=xr("animationstart"),Qd=xr("transitionend"),$d=new Map,gl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){$d.set(e,t),Pn(t,[e])}for(var ei=0;ei<gl.length;ei++){var ti=gl[ei],Im=ti.toLowerCase(),Am=ti[0].toUpperCase()+ti.slice(1);dn(Im,"on"+Am)}dn(Vd,"onAnimationEnd");dn(qd,"onAnimationIteration");dn(Jd,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Qd,"onTransitionEnd");oo("onMouseEnter",["mouseout","mouseover"]);oo("onMouseLeave",["mouseout","mouseover"]);oo("onPointerEnter",["pointerout","pointerover"]);oo("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function ml(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Ig(o,t,void 0,e),e.currentTarget=null}function Kd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var i=o.length-1;0<=i;i--){var s=o[i],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==r&&a.isPropagationStopped())break e;ml(a,s,l),r=c}else for(i=0;i<o.length;i++){if(s=o[i],c=s.instance,l=s.currentTarget,s=s.listener,c!==r&&a.isPropagationStopped())break e;ml(a,s,l),r=c}}}if(Ya)throw e=Gi,Ya=!1,Gi=null,e}function de(e,t){var n=t[Xi];n===void 0&&(n=t[Xi]=new Set);var o=e+"__bubble";n.has(o)||(Xd(t,e,2,!1),n.add(o))}function ni(e,t,n){var o=0;t&&(o|=4),Xd(n,e,o,t)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function Yo(e){if(!e[Ia]){e[Ia]=!0,ad.forEach(function(n){n!=="selectionchange"&&(xm.has(n)||ni(n,!1,e),ni(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ia]||(t[Ia]=!0,ni("selectionchange",!1,t))}}function Xd(e,t,n,o){switch(Ld(t)){case 1:var a=Og;break;case 4:a=Gg;break;default:a=Us}n=a.bind(null,t,n,e),a=void 0,!Oi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function oi(e,t,n,o,a){var r=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var s=o.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=o.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;s!==null;){if(i=kn(s),i===null)return;if(c=i.tag,c===5||c===6){o=r=i;continue e}s=s.parentNode}}o=o.return}kd(function(){var l=r,u=Os(n),d=[];e:{var g=$d.get(e);if(g!==void 0){var p=qs,w=e;switch(e){case"keypress":if(Fa(n)===0)break e;case"keydown":case"keyup":p=nm;break;case"focusin":w="focus",p=Kr;break;case"focusout":w="blur",p=Kr;break;case"beforeblur":case"afterblur":p=Kr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=nl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=rm;break;case Vd:case qd:case Jd:p=Jg;break;case Qd:p=sm;break;case"scroll":p=Wg;break;case"wheel":p=lm;break;case"copy":case"cut":case"paste":p=$g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=al}var k=(t&4)!==0,D=!k&&e==="scroll",m=k?g!==null?g+"Capture":null:g;k=[];for(var h=l,f;h!==null;){f=h;var T=f.stateNode;if(f.tag===5&&T!==null&&(f=T,m!==null&&(T=qo(h,m),T!=null&&k.push(Zo(h,T,f)))),D)break;h=h.return}0<k.length&&(g=new p(g,w,null,n,u),d.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",g&&n!==Ri&&(w=n.relatedTarget||n.fromElement)&&(kn(w)||w[Wt]))break e;if((p||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,p?(w=n.relatedTarget||n.toElement,p=l,w=w?kn(w):null,w!==null&&(D=Cn(w),w!==D||w.tag!==5&&w.tag!==6)&&(w=null)):(p=null,w=l),p!==w)){if(k=nl,T="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(k=al,T="onPointerLeave",m="onPointerEnter",h="pointer"),D=p==null?g:Wn(p),f=w==null?g:Wn(w),g=new k(T,h+"leave",p,n,u),g.target=D,g.relatedTarget=f,T=null,kn(u)===l&&(k=new k(m,h+"enter",w,n,u),k.target=f,k.relatedTarget=D,T=k),D=T,p&&w)t:{for(k=p,m=w,h=0,f=k;f;f=Ln(f))h++;for(f=0,T=m;T;T=Ln(T))f++;for(;0<h-f;)k=Ln(k),h--;for(;0<f-h;)m=Ln(m),f--;for(;h--;){if(k===m||m!==null&&k===m.alternate)break t;k=Ln(k),m=Ln(m)}k=null}else k=null;p!==null&&_l(d,g,p,k,!1),w!==null&&D!==null&&_l(d,D,w,k,!0)}}e:{if(g=l?Wn(l):window,p=g.nodeName&&g.nodeName.toLowerCase(),p==="select"||p==="input"&&g.type==="file")var x=hm;else if(sl(g))if(Od)x=km;else{x=ym;var v=fm}else(p=g.nodeName)&&p.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(x=wm);if(x&&(x=x(e,l))){Fd(d,x,n,u);break e}v&&v(e,g,l),e==="focusout"&&(v=g._wrapperState)&&v.controlled&&g.type==="number"&&Bi(g,"number",g.value)}switch(v=l?Wn(l):window,e){case"focusin":(sl(v)||v.contentEditable==="true")&&(On=v,Vi=l,zo=null);break;case"focusout":zo=Vi=On=null;break;case"mousedown":qi=!0;break;case"contextmenu":case"mouseup":case"dragend":qi=!1,pl(d,n,u);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":pl(d,n,u)}var E;if(Qs)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Fn?Md(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(zd&&n.locale!=="ko"&&(Fn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Fn&&(E=Nd()):(Yt=u,Vs="value"in Yt?Yt.value:Yt.textContent,Fn=!0)),v=or(l,C),0<v.length&&(C=new ol(C,e,null,n,u),d.push({event:C,listeners:v}),E?C.data=E:(E=Rd(n),E!==null&&(C.data=E)))),(E=dm?pm(e,n):gm(e,n))&&(l=or(l,"onBeforeInput"),0<l.length&&(u=new ol("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:l}),u.data=E))}Kd(d,t)})}function Zo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function or(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=qo(e,n),r!=null&&o.unshift(Zo(e,r,a)),r=qo(e,t),r!=null&&o.push(Zo(e,r,a))),e=e.return}return o}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _l(e,t,n,o,a){for(var r=t._reactName,i=[];n!==null&&n!==o;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===o)break;s.tag===5&&l!==null&&(s=l,a?(c=qo(n,r),c!=null&&i.unshift(Zo(n,c,s))):a||(c=qo(n,r),c!=null&&i.push(Zo(n,c,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var jm=/\r\n?/g,Em=/\u0000|\uFFFD/g;function hl(e){return(typeof e=="string"?e:""+e).replace(jm,`
`).replace(Em,"")}function Aa(e,t,n){if(t=hl(t),hl(e)!==t&&n)throw Error(j(425))}function ar(){}var Ji=null,Qi=null;function $i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ki=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,fl=typeof Promise=="function"?Promise:void 0,Pm=typeof queueMicrotask=="function"?queueMicrotask:typeof fl<"u"?function(e){return fl.resolve(null).then(e).catch(Cm)}:Ki;function Cm(e){setTimeout(function(){throw e})}function ai(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),$o(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);$o(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var go=Math.random().toString(36).slice(2),Et="__reactFiber$"+go,ea="__reactProps$"+go,Wt="__reactContainer$"+go,Xi="__reactEvents$"+go,Dm="__reactListeners$"+go,Bm="__reactHandles$"+go;function kn(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yl(e);e!==null;){if(n=e[Et])return n;e=yl(e)}return t}e=n,n=e.parentNode}return null}function da(e){return e=e[Et]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function jr(e){return e[ea]||null}var Yi=[],Hn=-1;function pn(e){return{current:e}}function pe(e){0>Hn||(e.current=Yi[Hn],Yi[Hn]=null,Hn--)}function le(e,t){Hn++,Yi[Hn]=e.current,e.current=t}var un={},Me=pn(un),Je=pn(!1),An=un;function ao(e,t){var n=e.type.contextTypes;if(!n)return un;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in n)a[r]=t[r];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Qe(e){return e=e.childContextTypes,e!=null}function rr(){pe(Je),pe(Me)}function wl(e,t,n){if(Me.current!==un)throw Error(j(168));le(Me,t),le(Je,n)}function Yd(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(j(108,fg(e)||"Unknown",a));return he({},n,o)}function ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,An=Me.current,le(Me,e),le(Je,Je.current),!0}function kl(e,t,n){var o=e.stateNode;if(!o)throw Error(j(169));n?(e=Yd(e,t,An),o.__reactInternalMemoizedMergedChildContext=e,pe(Je),pe(Me),le(Me,e)):pe(Je),le(Je,n)}var Mt=null,Er=!1,ri=!1;function Zd(e){Mt===null?Mt=[e]:Mt.push(e)}function Lm(e){Er=!0,Zd(e)}function gn(){if(!ri&&Mt!==null){ri=!0;var e=0,t=ae;try{var n=Mt;for(ae=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Mt=null,Er=!1}catch(a){throw Mt!==null&&(Mt=Mt.slice(e+1)),Id(Gs,gn),a}finally{ae=t,ri=!1}}return null}var Un=[],Vn=0,sr=null,cr=0,lt=[],ut=0,xn=null,Rt=1,Ft="";function fn(e,t){Un[Vn++]=cr,Un[Vn++]=sr,sr=e,cr=t}function e0(e,t,n){lt[ut++]=Rt,lt[ut++]=Ft,lt[ut++]=xn,xn=e;var o=Rt;e=Ft;var a=32-bt(o)-1;o&=~(1<<a),n+=1;var r=32-bt(t)+a;if(30<r){var i=a-a%5;r=(o&(1<<i)-1).toString(32),o>>=i,a-=i,Rt=1<<32-bt(t)+a|n<<a|o,Ft=r+e}else Rt=1<<r|n<<a|o,Ft=e}function Ks(e){e.return!==null&&(fn(e,1),e0(e,1,0))}function Xs(e){for(;e===sr;)sr=Un[--Vn],Un[Vn]=null,cr=Un[--Vn],Un[Vn]=null;for(;e===xn;)xn=lt[--ut],lt[ut]=null,Ft=lt[--ut],lt[ut]=null,Rt=lt[--ut],lt[ut]=null}var at=null,nt=null,ge=!1,vt=null;function t0(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,nt=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:Rt,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,nt=null,!0):!1;default:return!1}}function Zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function es(e){if(ge){var t=nt;if(t){var n=t;if(!vl(e,t)){if(Zi(e))throw Error(j(418));t=on(n.nextSibling);var o=at;t&&vl(e,t)?t0(o,n):(e.flags=e.flags&-4097|2,ge=!1,at=e)}}else{if(Zi(e))throw Error(j(418));e.flags=e.flags&-4097|2,ge=!1,at=e}}}function bl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function xa(e){if(e!==at)return!1;if(!ge)return bl(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$i(e.type,e.memoizedProps)),t&&(t=nt)){if(Zi(e))throw n0(),Error(j(418));for(;t;)t0(e,t),t=on(t.nextSibling)}if(bl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=at?on(e.stateNode.nextSibling):null;return!0}function n0(){for(var e=nt;e;)e=on(e.nextSibling)}function ro(){nt=at=null,ge=!1}function Ys(e){vt===null?vt=[e]:vt.push(e)}var Nm=Vt.ReactCurrentBatchConfig;function To(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var o=n.stateNode}if(!o)throw Error(j(147,e));var a=o,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(i){var s=a.refs;i===null?delete s[r]:s[r]=i},t._stringRef=r,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function ja(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tl(e){var t=e._init;return t(e._payload)}function o0(e){function t(m,h){if(e){var f=m.deletions;f===null?(m.deletions=[h],m.flags|=16):f.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function o(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function a(m,h){return m=cn(m,h),m.index=0,m.sibling=null,m}function r(m,h,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<h?(m.flags|=2,h):f):(m.flags|=2,h)):(m.flags|=1048576,h)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,h,f,T){return h===null||h.tag!==6?(h=pi(f,m.mode,T),h.return=m,h):(h=a(h,f),h.return=m,h)}function c(m,h,f,T){var x=f.type;return x===Rn?u(m,h,f.props.children,T,f.key):h!==null&&(h.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Qt&&Tl(x)===h.type)?(T=a(h,f.props),T.ref=To(m,h,f),T.return=m,T):(T=qa(f.type,f.key,f.props,null,m.mode,T),T.ref=To(m,h,f),T.return=m,T)}function l(m,h,f,T){return h===null||h.tag!==4||h.stateNode.containerInfo!==f.containerInfo||h.stateNode.implementation!==f.implementation?(h=gi(f,m.mode,T),h.return=m,h):(h=a(h,f.children||[]),h.return=m,h)}function u(m,h,f,T,x){return h===null||h.tag!==7?(h=In(f,m.mode,T,x),h.return=m,h):(h=a(h,f),h.return=m,h)}function d(m,h,f){if(typeof h=="string"&&h!==""||typeof h=="number")return h=pi(""+h,m.mode,f),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ha:return f=qa(h.type,h.key,h.props,null,m.mode,f),f.ref=To(m,null,h),f.return=m,f;case Mn:return h=gi(h,m.mode,f),h.return=m,h;case Qt:var T=h._init;return d(m,T(h._payload),f)}if(So(h)||yo(h))return h=In(h,m.mode,f,null),h.return=m,h;ja(m,h)}return null}function g(m,h,f,T){var x=h!==null?h.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:s(m,h,""+f,T);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ha:return f.key===x?c(m,h,f,T):null;case Mn:return f.key===x?l(m,h,f,T):null;case Qt:return x=f._init,g(m,h,x(f._payload),T)}if(So(f)||yo(f))return x!==null?null:u(m,h,f,T,null);ja(m,f)}return null}function p(m,h,f,T,x){if(typeof T=="string"&&T!==""||typeof T=="number")return m=m.get(f)||null,s(h,m,""+T,x);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ha:return m=m.get(T.key===null?f:T.key)||null,c(h,m,T,x);case Mn:return m=m.get(T.key===null?f:T.key)||null,l(h,m,T,x);case Qt:var v=T._init;return p(m,h,f,v(T._payload),x)}if(So(T)||yo(T))return m=m.get(f)||null,u(h,m,T,x,null);ja(h,T)}return null}function w(m,h,f,T){for(var x=null,v=null,E=h,C=h=0,O=null;E!==null&&C<f.length;C++){E.index>C?(O=E,E=null):O=E.sibling;var z=g(m,E,f[C],T);if(z===null){E===null&&(E=O);break}e&&E&&z.alternate===null&&t(m,E),h=r(z,h,C),v===null?x=z:v.sibling=z,v=z,E=O}if(C===f.length)return n(m,E),ge&&fn(m,C),x;if(E===null){for(;C<f.length;C++)E=d(m,f[C],T),E!==null&&(h=r(E,h,C),v===null?x=E:v.sibling=E,v=E);return ge&&fn(m,C),x}for(E=o(m,E);C<f.length;C++)O=p(E,m,C,f[C],T),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?C:O.key),h=r(O,h,C),v===null?x=O:v.sibling=O,v=O);return e&&E.forEach(function(R){return t(m,R)}),ge&&fn(m,C),x}function k(m,h,f,T){var x=yo(f);if(typeof x!="function")throw Error(j(150));if(f=x.call(f),f==null)throw Error(j(151));for(var v=x=null,E=h,C=h=0,O=null,z=f.next();E!==null&&!z.done;C++,z=f.next()){E.index>C?(O=E,E=null):O=E.sibling;var R=g(m,E,z.value,T);if(R===null){E===null&&(E=O);break}e&&E&&R.alternate===null&&t(m,E),h=r(R,h,C),v===null?x=R:v.sibling=R,v=R,E=O}if(z.done)return n(m,E),ge&&fn(m,C),x;if(E===null){for(;!z.done;C++,z=f.next())z=d(m,z.value,T),z!==null&&(h=r(z,h,C),v===null?x=z:v.sibling=z,v=z);return ge&&fn(m,C),x}for(E=o(m,E);!z.done;C++,z=f.next())z=p(E,m,C,z.value,T),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?C:z.key),h=r(z,h,C),v===null?x=z:v.sibling=z,v=z);return e&&E.forEach(function(A){return t(m,A)}),ge&&fn(m,C),x}function D(m,h,f,T){if(typeof f=="object"&&f!==null&&f.type===Rn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ha:e:{for(var x=f.key,v=h;v!==null;){if(v.key===x){if(x=f.type,x===Rn){if(v.tag===7){n(m,v.sibling),h=a(v,f.props.children),h.return=m,m=h;break e}}else if(v.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Qt&&Tl(x)===v.type){n(m,v.sibling),h=a(v,f.props),h.ref=To(m,v,f),h.return=m,m=h;break e}n(m,v);break}else t(m,v);v=v.sibling}f.type===Rn?(h=In(f.props.children,m.mode,T,f.key),h.return=m,m=h):(T=qa(f.type,f.key,f.props,null,m.mode,T),T.ref=To(m,h,f),T.return=m,m=T)}return i(m);case Mn:e:{for(v=f.key;h!==null;){if(h.key===v)if(h.tag===4&&h.stateNode.containerInfo===f.containerInfo&&h.stateNode.implementation===f.implementation){n(m,h.sibling),h=a(h,f.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=gi(f,m.mode,T),h.return=m,m=h}return i(m);case Qt:return v=f._init,D(m,h,v(f._payload),T)}if(So(f))return w(m,h,f,T);if(yo(f))return k(m,h,f,T);ja(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,h!==null&&h.tag===6?(n(m,h.sibling),h=a(h,f),h.return=m,m=h):(n(m,h),h=pi(f,m.mode,T),h.return=m,m=h),i(m)):n(m,h)}return D}var io=o0(!0),a0=o0(!1),lr=pn(null),ur=null,qn=null,Zs=null;function ec(){Zs=qn=ur=null}function tc(e){var t=lr.current;pe(lr),e._currentValue=t}function ts(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Zn(e,t){ur=e,Zs=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qe=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(Zs!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(ur===null)throw Error(j(308));qn=e,ur.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var vn=null;function nc(e){vn===null?vn=[e]:vn.push(e)}function r0(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,nc(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ht(e,o)}function Ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function oc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,ee&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,Ht(e,n)}return a=o.interleaved,a===null?(t.next=t,nc(o)):(t.next=a.next,a.next=t),o.interleaved=t,Ht(e,n)}function Oa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ws(e,n)}}function Il(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?a=r=i:r=r.next=i,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function dr(e,t,n,o){var a=e.updateQueue;$t=!1;var r=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var c=s,l=c.next;c.next=null,i===null?r=l:i.next=l,i=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==i&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(r!==null){var d=a.baseState;i=0,u=l=c=null,s=r;do{var g=s.lane,p=s.eventTime;if((o&g)===g){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(g=t,p=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){d=w.call(p,d,g);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,g=typeof w=="function"?w.call(p,d,g):w,g==null)break e;d=he({},d,g);break e;case 2:$t=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[s]:g.push(s))}else p={eventTime:p,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,i|=g;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;g=s,s=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(1);if(u===null&&(c=d),a.baseState=c,a.firstBaseUpdate=l,a.lastBaseUpdate=u,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else r===null&&(a.shared.lanes=0);En|=i,e.lanes=i,e.memoizedState=d}}function Al(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(j(191,a));a.call(o)}}}var pa={},Ct=pn(pa),ta=pn(pa),na=pn(pa);function bn(e){if(e===pa)throw Error(j(174));return e}function ac(e,t){switch(le(na,t),le(ta,e),le(Ct,pa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ni(t,e)}pe(Ct),le(Ct,t)}function so(){pe(Ct),pe(ta),pe(na)}function s0(e){bn(na.current);var t=bn(Ct.current),n=Ni(t,e.type);t!==n&&(le(ta,e),le(Ct,n))}function rc(e){ta.current===e&&(pe(Ct),pe(ta))}var me=pn(0);function pr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ii=[];function ic(){for(var e=0;e<ii.length;e++)ii[e]._workInProgressVersionPrimary=null;ii.length=0}var Ga=Vt.ReactCurrentDispatcher,si=Vt.ReactCurrentBatchConfig,jn=0,_e=null,Te=null,xe=null,gr=!1,Mo=!1,oa=0,zm=0;function Le(){throw Error(j(321))}function sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function cc(e,t,n,o,a,r){if(jn=r,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ga.current=e===null||e.memoizedState===null?Om:Gm,e=n(o,a),Mo){r=0;do{if(Mo=!1,oa=0,25<=r)throw Error(j(301));r+=1,xe=Te=null,t.updateQueue=null,Ga.current=Wm,e=n(o,a)}while(Mo)}if(Ga.current=mr,t=Te!==null&&Te.next!==null,jn=0,xe=Te=_e=null,gr=!1,t)throw Error(j(300));return e}function lc(){var e=oa!==0;return oa=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?_e.memoizedState=xe=e:xe=xe.next=e,xe}function _t(){if(Te===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=xe===null?_e.memoizedState:xe.next;if(t!==null)xe=t,Te=e;else{if(e===null)throw Error(j(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},xe===null?_e.memoizedState=xe=e:xe=xe.next=e}return xe}function aa(e,t){return typeof t=="function"?t(e):t}function ci(e){var t=_t(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var o=Te,a=o.baseQueue,r=n.pending;if(r!==null){if(a!==null){var i=a.next;a.next=r.next,r.next=i}o.baseQueue=a=r,n.pending=null}if(a!==null){r=a.next,o=o.baseState;var s=i=null,c=null,l=r;do{var u=l.lane;if((jn&u)===u)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),o=l.hasEagerState?l.eagerState:e(o,l.action);else{var d={lane:u,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(s=c=d,i=o):c=c.next=d,_e.lanes|=u,En|=u}l=l.next}while(l!==null&&l!==r);c===null?i=o:c.next=s,It(o,t.memoizedState)||(qe=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=c,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do r=a.lane,_e.lanes|=r,En|=r,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function li(e){var t=_t(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do r=e(r,i.action),i=i.next;while(i!==a);It(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,o]}function c0(){}function l0(e,t){var n=_e,o=_t(),a=t(),r=!It(o.memoizedState,a);if(r&&(o.memoizedState=a,qe=!0),o=o.queue,uc(p0.bind(null,n,o,e),[e]),o.getSnapshot!==t||r||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,ra(9,d0.bind(null,n,o,a,t),void 0,null),je===null)throw Error(j(349));jn&30||u0(n,t,a)}return a}function u0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function d0(e,t,n,o){t.value=n,t.getSnapshot=o,g0(t)&&m0(e)}function p0(e,t,n){return n(function(){g0(t)&&m0(e)})}function g0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function m0(e){var t=Ht(e,1);t!==null&&Tt(t,e,1,-1)}function xl(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},t.queue=e,e=e.dispatch=Fm.bind(null,_e,e),[t.memoizedState,e]}function ra(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function _0(){return _t().memoizedState}function Wa(e,t,n,o){var a=xt();_e.flags|=e,a.memoizedState=ra(1|t,n,void 0,o===void 0?null:o)}function Sr(e,t,n,o){var a=_t();o=o===void 0?null:o;var r=void 0;if(Te!==null){var i=Te.memoizedState;if(r=i.destroy,o!==null&&sc(o,i.deps)){a.memoizedState=ra(t,n,r,o);return}}_e.flags|=e,a.memoizedState=ra(1|t,n,r,o)}function jl(e,t){return Wa(8390656,8,e,t)}function uc(e,t){return Sr(2048,8,e,t)}function h0(e,t){return Sr(4,2,e,t)}function f0(e,t){return Sr(4,4,e,t)}function y0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function w0(e,t,n){return n=n!=null?n.concat([e]):null,Sr(4,4,y0.bind(null,t,e),n)}function dc(){}function k0(e,t){var n=_t();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&sc(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function v0(e,t){var n=_t();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&sc(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function b0(e,t,n){return jn&21?(It(n,t)||(n=jd(),_e.lanes|=n,En|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=n)}function Mm(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var o=si.transition;si.transition={};try{e(!1),t()}finally{ae=n,si.transition=o}}function T0(){return _t().memoizedState}function Rm(e,t,n){var o=sn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},I0(e))A0(t,n);else if(n=r0(e,t,n,o),n!==null){var a=Oe();Tt(n,e,o,a),x0(n,t,o)}}function Fm(e,t,n){var o=sn(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(I0(e))A0(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var i=t.lastRenderedState,s=r(i,n);if(a.hasEagerState=!0,a.eagerState=s,It(s,i)){var c=t.interleaved;c===null?(a.next=a,nc(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=r0(e,t,a,o),n!==null&&(a=Oe(),Tt(n,e,o,a),x0(n,t,o))}}function I0(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function A0(e,t){Mo=gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function x0(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ws(e,n)}}var mr={readContext:mt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Om={readContext:mt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:jl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wa(4194308,4,y0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wa(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=xt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Rm.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:xl,useDebugValue:dc,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=xl(!1),t=e[0];return e=Mm.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=_e,a=xt();if(ge){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),je===null)throw Error(j(349));jn&30||u0(o,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,jl(p0.bind(null,o,r,e),[e]),o.flags|=2048,ra(9,d0.bind(null,o,r,n,t),void 0,null),n},useId:function(){var e=xt(),t=je.identifierPrefix;if(ge){var n=Ft,o=Rt;n=(o&~(1<<32-bt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=oa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gm={readContext:mt,useCallback:k0,useContext:mt,useEffect:uc,useImperativeHandle:w0,useInsertionEffect:h0,useLayoutEffect:f0,useMemo:v0,useReducer:ci,useRef:_0,useState:function(){return ci(aa)},useDebugValue:dc,useDeferredValue:function(e){var t=_t();return b0(t,Te.memoizedState,e)},useTransition:function(){var e=ci(aa)[0],t=_t().memoizedState;return[e,t]},useMutableSource:c0,useSyncExternalStore:l0,useId:T0,unstable_isNewReconciler:!1},Wm={readContext:mt,useCallback:k0,useContext:mt,useEffect:uc,useImperativeHandle:w0,useInsertionEffect:h0,useLayoutEffect:f0,useMemo:v0,useReducer:li,useRef:_0,useState:function(){return li(aa)},useDebugValue:dc,useDeferredValue:function(e){var t=_t();return Te===null?t.memoizedState=e:b0(t,Te.memoizedState,e)},useTransition:function(){var e=li(aa)[0],t=_t().memoizedState;return[e,t]},useMutableSource:c0,useSyncExternalStore:l0,useId:T0,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ns(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pr={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Oe(),a=sn(e),r=Ot(o,a);r.payload=t,n!=null&&(r.callback=n),t=an(e,r,a),t!==null&&(Tt(t,e,a,o),Oa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Oe(),a=sn(e),r=Ot(o,a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=an(e,r,a),t!==null&&(Tt(t,e,a,o),Oa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),o=sn(e),a=Ot(n,o);a.tag=2,t!=null&&(a.callback=t),t=an(e,a,o),t!==null&&(Tt(t,e,o,n),Oa(t,e,o))}};function El(e,t,n,o,a,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,i):t.prototype&&t.prototype.isPureReactComponent?!Xo(n,o)||!Xo(a,r):!0}function j0(e,t,n){var o=!1,a=un,r=t.contextType;return typeof r=="object"&&r!==null?r=mt(r):(a=Qe(t)?An:Me.current,o=t.contextTypes,r=(o=o!=null)?ao(e,a):un),t=new t(n,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pr,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=r),t}function Sl(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Pr.enqueueReplaceState(t,t.state,null)}function os(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},oc(e);var r=t.contextType;typeof r=="object"&&r!==null?a.context=mt(r):(r=Qe(t)?An:Me.current,a.context=ao(e,r)),a.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(ns(e,t,r,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Pr.enqueueReplaceState(a,a.state,null),dr(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function co(e,t){try{var n="",o=t;do n+=hg(o),o=o.return;while(o);var a=n}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:a,digest:null}}function ui(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function as(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hm=typeof WeakMap=="function"?WeakMap:Map;function E0(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){hr||(hr=!0,ms=o),as(e,t)},n}function S0(e,t,n){n=Ot(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){as(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){as(e,t),typeof o!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Pl(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Hm;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=o_.bind(null,e,t,n),t.then(e,e))}function Cl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dl(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var Um=Vt.ReactCurrentOwner,qe=!1;function Fe(e,t,n,o){t.child=e===null?a0(t,null,n,o):io(t,e.child,n,o)}function Bl(e,t,n,o,a){n=n.render;var r=t.ref;return Zn(t,a),o=cc(e,t,n,o,r,a),n=lc(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ut(e,t,a)):(ge&&n&&Ks(t),t.flags|=1,Fe(e,t,o,a),t.child)}function Ll(e,t,n,o,a){if(e===null){var r=n.type;return typeof r=="function"&&!wc(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=r,P0(e,t,r,o,a)):(e=qa(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&a)){var i=r.memoizedProps;if(n=n.compare,n=n!==null?n:Xo,n(i,o)&&e.ref===t.ref)return Ut(e,t,a)}return t.flags|=1,e=cn(r,o),e.ref=t.ref,e.return=t,t.child=e}function P0(e,t,n,o,a){if(e!==null){var r=e.memoizedProps;if(Xo(r,o)&&e.ref===t.ref)if(qe=!1,t.pendingProps=o=r,(e.lanes&a)!==0)e.flags&131072&&(qe=!0);else return t.lanes=e.lanes,Ut(e,t,a)}return rs(e,t,n,o,a)}function C0(e,t,n){var o=t.pendingProps,a=o.children,r=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Qn,tt),tt|=n;else{if(!(n&1073741824))return e=r!==null?r.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(Qn,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=r!==null?r.baseLanes:n,le(Qn,tt),tt|=o}else r!==null?(o=r.baseLanes|n,t.memoizedState=null):o=n,le(Qn,tt),tt|=o;return Fe(e,t,a,n),t.child}function D0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rs(e,t,n,o,a){var r=Qe(n)?An:Me.current;return r=ao(t,r),Zn(t,a),n=cc(e,t,n,o,r,a),o=lc(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ut(e,t,a)):(ge&&o&&Ks(t),t.flags|=1,Fe(e,t,n,a),t.child)}function Nl(e,t,n,o,a){if(Qe(n)){var r=!0;ir(t)}else r=!1;if(Zn(t,a),t.stateNode===null)Ha(e,t),j0(t,n,o),os(t,n,o,a),o=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var c=i.context,l=n.contextType;typeof l=="object"&&l!==null?l=mt(l):(l=Qe(n)?An:Me.current,l=ao(t,l));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==o||c!==l)&&Sl(t,i,o,l),$t=!1;var g=t.memoizedState;i.state=g,dr(t,o,i,a),c=t.memoizedState,s!==o||g!==c||Je.current||$t?(typeof u=="function"&&(ns(t,n,u,o),c=t.memoizedState),(s=$t||El(t,n,s,o,g,c,l))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),i.props=o,i.state=c,i.context=l,o=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,i0(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:wt(t.type,s),i.props=l,d=t.pendingProps,g=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=mt(c):(c=Qe(n)?An:Me.current,c=ao(t,c));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||g!==c)&&Sl(t,i,o,c),$t=!1,g=t.memoizedState,i.state=g,dr(t,o,i,a);var w=t.memoizedState;s!==d||g!==w||Je.current||$t?(typeof p=="function"&&(ns(t,n,p,o),w=t.memoizedState),(l=$t||El(t,n,l,o,g,w,c)||!1)?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,w,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,w,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=w),i.props=o,i.state=w,i.context=c,o=l):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),o=!1)}return is(e,t,n,o,r,a)}function is(e,t,n,o,a,r){D0(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return a&&kl(t,n,!1),Ut(e,t,r);o=t.stateNode,Um.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=io(t,e.child,null,r),t.child=io(t,null,s,r)):Fe(e,t,s,r),t.memoizedState=o.state,a&&kl(t,n,!0),t.child}function B0(e){var t=e.stateNode;t.pendingContext?wl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wl(e,t.context,!1),ac(e,t.containerInfo)}function zl(e,t,n,o,a){return ro(),Ys(a),t.flags|=256,Fe(e,t,n,o),t.child}var ss={dehydrated:null,treeContext:null,retryLane:0};function cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function L0(e,t,n){var o=t.pendingProps,a=me.current,r=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),le(me,a&1),e===null)return es(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,r?(o=t.mode,r=t.child,i={mode:"hidden",children:i},!(o&1)&&r!==null?(r.childLanes=0,r.pendingProps=i):r=Br(i,o,0,null),e=In(e,o,n,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=cs(n),t.memoizedState=ss,e):pc(t,i));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return Vm(e,t,i,o,s,a,n);if(r){r=o.fallback,i=t.mode,a=e.child,s=a.sibling;var c={mode:"hidden",children:o.children};return!(i&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=cn(a,c),o.subtreeFlags=a.subtreeFlags&14680064),s!==null?r=cn(s,r):(r=In(r,i,n,null),r.flags|=2),r.return=t,o.return=t,o.sibling=r,t.child=o,o=r,r=t.child,i=e.child.memoizedState,i=i===null?cs(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},r.memoizedState=i,r.childLanes=e.childLanes&~n,t.memoizedState=ss,o}return r=e.child,e=r.sibling,o=cn(r,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function pc(e,t){return t=Br({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ea(e,t,n,o){return o!==null&&Ys(o),io(t,e.child,null,n),e=pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vm(e,t,n,o,a,r,i){if(n)return t.flags&256?(t.flags&=-257,o=ui(Error(j(422))),Ea(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=o.fallback,a=t.mode,o=Br({mode:"visible",children:o.children},a,0,null),r=In(r,a,i,null),r.flags|=2,o.return=t,r.return=t,o.sibling=r,t.child=o,t.mode&1&&io(t,e.child,null,i),t.child.memoizedState=cs(i),t.memoizedState=ss,r);if(!(t.mode&1))return Ea(e,t,i,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var s=o.dgst;return o=s,r=Error(j(419)),o=ui(r,o,void 0),Ea(e,t,i,o)}if(s=(i&e.childLanes)!==0,qe||s){if(o=je,o!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|i)?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,Ht(e,a),Tt(o,e,a,-1))}return yc(),o=ui(Error(j(421))),Ea(e,t,i,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=a_.bind(null,e),a._reactRetry=t,null):(e=r.treeContext,nt=on(a.nextSibling),at=t,ge=!0,vt=null,e!==null&&(lt[ut++]=Rt,lt[ut++]=Ft,lt[ut++]=xn,Rt=e.id,Ft=e.overflow,xn=t),t=pc(t,o.children),t.flags|=4096,t)}function Ml(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ts(e.return,t,n)}function di(e,t,n,o,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=n,r.tailMode=a)}function N0(e,t,n){var o=t.pendingProps,a=o.revealOrder,r=o.tail;if(Fe(e,t,o.children,n),o=me.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ml(e,n,t);else if(e.tag===19)Ml(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(le(me,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&pr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),di(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&pr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}di(t,!0,n,null,r);break;case"together":di(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ha(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qm(e,t,n){switch(t.tag){case 3:B0(t),ro();break;case 5:s0(t);break;case 1:Qe(t.type)&&ir(t);break;case 4:ac(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;le(lr,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(le(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?L0(e,t,n):(le(me,me.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);le(me,me.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return N0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),le(me,me.current),o)break;return null;case 22:case 23:return t.lanes=0,C0(e,t,n)}return Ut(e,t,n)}var z0,ls,M0,R0;z0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ls=function(){};M0=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,bn(Ct.current);var r=null;switch(n){case"input":a=Ci(e,a),o=Ci(e,o),r=[];break;case"select":a=he({},a,{value:void 0}),o=he({},o,{value:void 0}),r=[];break;case"textarea":a=Li(e,a),o=Li(e,o),r=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=ar)}zi(n,o);var i;n=null;for(l in a)if(!o.hasOwnProperty(l)&&a.hasOwnProperty(l)&&a[l]!=null)if(l==="style"){var s=a[l];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Uo.hasOwnProperty(l)?r||(r=[]):(r=r||[]).push(l,null));for(l in o){var c=o[l];if(s=a!=null?a[l]:void 0,o.hasOwnProperty(l)&&c!==s&&(c!=null||s!=null))if(l==="style")if(s){for(i in s)!s.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&s[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(r||(r=[]),r.push(l,n)),n=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(r=r||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(r=r||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&de("scroll",e),r||s===c||(r=[])):(r=r||[]).push(l,c))}n&&(r=r||[]).push("style",n);var l=r;(t.updateQueue=l)&&(t.flags|=4)}};R0=function(e,t,n,o){n!==o&&(t.flags|=4)};function Io(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Jm(e,t,n){var o=t.pendingProps;switch(Xs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Qe(t.type)&&rr(),Ne(t),null;case 3:return o=t.stateNode,so(),pe(Je),pe(Me),ic(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(xa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(fs(vt),vt=null))),ls(e,t),Ne(t),null;case 5:rc(t);var a=bn(na.current);if(n=t.type,e!==null&&t.stateNode!=null)M0(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(j(166));return Ne(t),null}if(e=bn(Ct.current),xa(t)){o=t.stateNode,n=t.type;var r=t.memoizedProps;switch(o[Et]=t,o[ea]=r,e=(t.mode&1)!==0,n){case"dialog":de("cancel",o),de("close",o);break;case"iframe":case"object":case"embed":de("load",o);break;case"video":case"audio":for(a=0;a<Co.length;a++)de(Co[a],o);break;case"source":de("error",o);break;case"img":case"image":case"link":de("error",o),de("load",o);break;case"details":de("toggle",o);break;case"input":qc(o,r),de("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!r.multiple},de("invalid",o);break;case"textarea":Qc(o,r),de("invalid",o)}zi(n,r),a=null;for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];i==="children"?typeof s=="string"?o.textContent!==s&&(r.suppressHydrationWarning!==!0&&Aa(o.textContent,s,e),a=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&Aa(o.textContent,s,e),a=["children",""+s]):Uo.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&de("scroll",o)}switch(n){case"input":fa(o),Jc(o,r,!0);break;case"textarea":fa(o),$c(o);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(o.onclick=ar)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[Et]=t,e[ea]=o,z0(e,t,!1,!1),t.stateNode=e;e:{switch(i=Mi(n,o),n){case"dialog":de("cancel",e),de("close",e),a=o;break;case"iframe":case"object":case"embed":de("load",e),a=o;break;case"video":case"audio":for(a=0;a<Co.length;a++)de(Co[a],e);a=o;break;case"source":de("error",e),a=o;break;case"img":case"image":case"link":de("error",e),de("load",e),a=o;break;case"details":de("toggle",e),a=o;break;case"input":qc(e,o),a=Ci(e,o),de("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=he({},o,{value:void 0}),de("invalid",e);break;case"textarea":Qc(e,o),a=Li(e,o),de("invalid",e);break;default:a=o}zi(n,a),s=a;for(r in s)if(s.hasOwnProperty(r)){var c=s[r];r==="style"?_d(e,c):r==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&gd(e,c)):r==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Vo(e,c):typeof c=="number"&&Vo(e,""+c):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Uo.hasOwnProperty(r)?c!=null&&r==="onScroll"&&de("scroll",e):c!=null&&zs(e,r,c,i))}switch(n){case"input":fa(e),Jc(e,o,!1);break;case"textarea":fa(e),$c(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ln(o.value));break;case"select":e.multiple=!!o.multiple,r=o.value,r!=null?$n(e,!!o.multiple,r,!1):o.defaultValue!=null&&$n(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ar)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)R0(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(j(166));if(n=bn(na.current),bn(Ct.current),xa(t)){if(o=t.stateNode,n=t.memoizedProps,o[Et]=t,(r=o.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:Aa(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Aa(o.nodeValue,n,(e.mode&1)!==0)}r&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Et]=t,t.stateNode=o}return Ne(t),null;case 13:if(pe(me),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&nt!==null&&t.mode&1&&!(t.flags&128))n0(),ro(),t.flags|=98560,r=!1;else if(r=xa(t),o!==null&&o.dehydrated!==null){if(e===null){if(!r)throw Error(j(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(j(317));r[Et]=t}else ro(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),r=!1}else vt!==null&&(fs(vt),vt=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Ie===0&&(Ie=3):yc())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return so(),ls(e,t),e===null&&Yo(t.stateNode.containerInfo),Ne(t),null;case 10:return tc(t.type._context),Ne(t),null;case 17:return Qe(t.type)&&rr(),Ne(t),null;case 19:if(pe(me),r=t.memoizedState,r===null)return Ne(t),null;if(o=(t.flags&128)!==0,i=r.rendering,i===null)if(o)Io(r,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=pr(e),i!==null){for(t.flags|=128,Io(r,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)r=n,e=o,r.flags&=14680066,i=r.alternate,i===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=i.childLanes,r.lanes=i.lanes,r.child=i.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=i.memoizedProps,r.memoizedState=i.memoizedState,r.updateQueue=i.updateQueue,r.type=i.type,e=i.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(me,me.current&1|2),t.child}e=e.sibling}r.tail!==null&&we()>lo&&(t.flags|=128,o=!0,Io(r,!1),t.lanes=4194304)}else{if(!o)if(e=pr(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Io(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!ge)return Ne(t),null}else 2*we()-r.renderingStartTime>lo&&n!==1073741824&&(t.flags|=128,o=!0,Io(r,!1),t.lanes=4194304);r.isBackwards?(i.sibling=t.child,t.child=i):(n=r.last,n!==null?n.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=we(),t.sibling=null,n=me.current,le(me,o?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return fc(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?tt&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Qm(e,t){switch(Xs(t),t.tag){case 1:return Qe(t.type)&&rr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return so(),pe(Je),pe(Me),ic(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rc(t),null;case 13:if(pe(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));ro()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(me),null;case 4:return so(),null;case 10:return tc(t.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var Sa=!1,ze=!1,$m=typeof WeakSet=="function"?WeakSet:Set,F=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){fe(e,t,o)}else n.current=null}function us(e,t,n){try{n()}catch(o){fe(e,t,o)}}var Rl=!1;function Km(e,t){if(Ji=tr,e=Hd(),$s(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var i=0,s=-1,c=-1,l=0,u=0,d=e,g=null;t:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(s=i+a),d!==r||o!==0&&d.nodeType!==3||(c=i+o),d.nodeType===3&&(i+=d.nodeValue.length),(p=d.firstChild)!==null;)g=d,d=p;for(;;){if(d===e)break t;if(g===n&&++l===a&&(s=i),g===r&&++u===o&&(c=i),(p=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=p}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qi={focusedElem:e,selectionRange:n},tr=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,D=w.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?k:wt(t.type,k),D);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(T){fe(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return w=Rl,Rl=!1,w}function Ro(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var r=a.destroy;a.destroy=void 0,r!==void 0&&us(t,n,r)}a=a.next}while(a!==o)}}function Cr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function ds(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function F0(e){var t=e.alternate;t!==null&&(e.alternate=null,F0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[ea],delete t[Xi],delete t[Dm],delete t[Bm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function O0(e){return e.tag===5||e.tag===3||e.tag===4}function Fl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||O0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ps(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ar));else if(o!==4&&(e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}function gs(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}var Se=null,kt=!1;function qt(e,t,n){for(n=n.child;n!==null;)G0(e,t,n),n=n.sibling}function G0(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Tr,n)}catch{}switch(n.tag){case 5:ze||Jn(n,t);case 6:var o=Se,a=kt;Se=null,qt(e,t,n),Se=o,kt=a,Se!==null&&(kt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(kt?(e=Se,n=n.stateNode,e.nodeType===8?ai(e.parentNode,n):e.nodeType===1&&ai(e,n),$o(e)):ai(Se,n.stateNode));break;case 4:o=Se,a=kt,Se=n.stateNode.containerInfo,kt=!0,qt(e,t,n),Se=o,kt=a;break;case 0:case 11:case 14:case 15:if(!ze&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var r=a,i=r.destroy;r=r.tag,i!==void 0&&(r&2||r&4)&&us(n,t,i),a=a.next}while(a!==o)}qt(e,t,n);break;case 1:if(!ze&&(Jn(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(s){fe(n,t,s)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(ze=(o=ze)||n.memoizedState!==null,qt(e,t,n),ze=o):qt(e,t,n);break;default:qt(e,t,n)}}function Ol(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $m),t.forEach(function(o){var a=r_.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function yt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var r=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Se=s.stateNode,kt=!1;break e;case 3:Se=s.stateNode.containerInfo,kt=!0;break e;case 4:Se=s.stateNode.containerInfo,kt=!0;break e}s=s.return}if(Se===null)throw Error(j(160));G0(r,i,a),Se=null,kt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(l){fe(a,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)W0(t,e),t=t.sibling}function W0(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),At(e),o&4){try{Ro(3,e,e.return),Cr(3,e)}catch(k){fe(e,e.return,k)}try{Ro(5,e,e.return)}catch(k){fe(e,e.return,k)}}break;case 1:yt(t,e),At(e),o&512&&n!==null&&Jn(n,n.return);break;case 5:if(yt(t,e),At(e),o&512&&n!==null&&Jn(n,n.return),e.flags&32){var a=e.stateNode;try{Vo(a,"")}catch(k){fe(e,e.return,k)}}if(o&4&&(a=e.stateNode,a!=null)){var r=e.memoizedProps,i=n!==null?n.memoizedProps:r,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&ud(a,r),Mi(s,i);var l=Mi(s,r);for(i=0;i<c.length;i+=2){var u=c[i],d=c[i+1];u==="style"?_d(a,d):u==="dangerouslySetInnerHTML"?gd(a,d):u==="children"?Vo(a,d):zs(a,u,d,l)}switch(s){case"input":Di(a,r);break;case"textarea":dd(a,r);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var p=r.value;p!=null?$n(a,!!r.multiple,p,!1):g!==!!r.multiple&&(r.defaultValue!=null?$n(a,!!r.multiple,r.defaultValue,!0):$n(a,!!r.multiple,r.multiple?[]:"",!1))}a[ea]=r}catch(k){fe(e,e.return,k)}}break;case 6:if(yt(t,e),At(e),o&4){if(e.stateNode===null)throw Error(j(162));a=e.stateNode,r=e.memoizedProps;try{a.nodeValue=r}catch(k){fe(e,e.return,k)}}break;case 3:if(yt(t,e),At(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{$o(t.containerInfo)}catch(k){fe(e,e.return,k)}break;case 4:yt(t,e),At(e);break;case 13:yt(t,e),At(e),a=e.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||(_c=we())),o&4&&Ol(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(l=ze)||u,yt(t,e),ze=l):yt(t,e),At(e),o&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!u&&e.mode&1)for(F=e,u=e.child;u!==null;){for(d=F=u;F!==null;){switch(g=F,p=g.child,g.tag){case 0:case 11:case 14:case 15:Ro(4,g,g.return);break;case 1:Jn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){o=g,n=g.return;try{t=o,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){fe(o,n,k)}}break;case 5:Jn(g,g.return);break;case 22:if(g.memoizedState!==null){Wl(d);continue}}p!==null?(p.return=g,F=p):Wl(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{a=d.stateNode,l?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=d.stateNode,c=d.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=md("display",i))}catch(k){fe(e,e.return,k)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(k){fe(e,e.return,k)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:yt(t,e),At(e),o&4&&Ol(e);break;case 21:break;default:yt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(O0(n)){var o=n;break e}n=n.return}throw Error(j(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Vo(a,""),o.flags&=-33);var r=Fl(e);gs(e,r,a);break;case 3:case 4:var i=o.stateNode.containerInfo,s=Fl(e);ps(e,s,i);break;default:throw Error(j(161))}}catch(c){fe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xm(e,t,n){F=e,H0(e)}function H0(e,t,n){for(var o=(e.mode&1)!==0;F!==null;){var a=F,r=a.child;if(a.tag===22&&o){var i=a.memoizedState!==null||Sa;if(!i){var s=a.alternate,c=s!==null&&s.memoizedState!==null||ze;s=Sa;var l=ze;if(Sa=i,(ze=c)&&!l)for(F=a;F!==null;)i=F,c=i.child,i.tag===22&&i.memoizedState!==null?Hl(a):c!==null?(c.return=i,F=c):Hl(a);for(;r!==null;)F=r,H0(r),r=r.sibling;F=a,Sa=s,ze=l}Gl(e)}else a.subtreeFlags&8772&&r!==null?(r.return=a,F=r):Gl(e)}}function Gl(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||Cr(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ze)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&Al(t,r,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Al(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var u=l.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&$o(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ze||t.flags&512&&ds(t)}catch(g){fe(t,t.return,g)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Wl(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Hl(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cr(4,t)}catch(c){fe(t,n,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(c){fe(t,a,c)}}var r=t.return;try{ds(t)}catch(c){fe(t,r,c)}break;case 5:var i=t.return;try{ds(t)}catch(c){fe(t,i,c)}}}catch(c){fe(t,t.return,c)}if(t===e){F=null;break}var s=t.sibling;if(s!==null){s.return=t.return,F=s;break}F=t.return}}var Ym=Math.ceil,_r=Vt.ReactCurrentDispatcher,gc=Vt.ReactCurrentOwner,gt=Vt.ReactCurrentBatchConfig,ee=0,je=null,ve=null,Pe=0,tt=0,Qn=pn(0),Ie=0,ia=null,En=0,Dr=0,mc=0,Fo=null,Ve=null,_c=0,lo=1/0,zt=null,hr=!1,ms=null,rn=null,Pa=!1,Zt=null,fr=0,Oo=0,_s=null,Ua=-1,Va=0;function Oe(){return ee&6?we():Ua!==-1?Ua:Ua=we()}function sn(e){return e.mode&1?ee&2&&Pe!==0?Pe&-Pe:Nm.transition!==null?(Va===0&&(Va=jd()),Va):(e=ae,e!==0||(e=window.event,e=e===void 0?16:Ld(e.type)),e):1}function Tt(e,t,n,o){if(50<Oo)throw Oo=0,_s=null,Error(j(185));la(e,n,o),(!(ee&2)||e!==je)&&(e===je&&(!(ee&2)&&(Dr|=n),Ie===4&&Xt(e,Pe)),$e(e,o),n===1&&ee===0&&!(t.mode&1)&&(lo=we()+500,Er&&gn()))}function $e(e,t){var n=e.callbackNode;Ng(e,t);var o=er(e,e===je?Pe:0);if(o===0)n!==null&&Yc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Yc(n),t===1)e.tag===0?Lm(Ul.bind(null,e)):Zd(Ul.bind(null,e)),Pm(function(){!(ee&6)&&gn()}),n=null;else{switch(Ed(o)){case 1:n=Gs;break;case 4:n=Ad;break;case 16:n=Za;break;case 536870912:n=xd;break;default:n=Za}n=X0(n,U0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function U0(e,t){if(Ua=-1,Va=0,ee&6)throw Error(j(327));var n=e.callbackNode;if(eo()&&e.callbackNode!==n)return null;var o=er(e,e===je?Pe:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=yr(e,o);else{t=o;var a=ee;ee|=2;var r=q0();(je!==e||Pe!==t)&&(zt=null,lo=we()+500,Tn(e,t));do try{t_();break}catch(s){V0(e,s)}while(1);ec(),_r.current=r,ee=a,ve!==null?t=0:(je=null,Pe=0,t=Ie)}if(t!==0){if(t===2&&(a=Wi(e),a!==0&&(o=a,t=hs(e,a))),t===1)throw n=ia,Tn(e,0),Xt(e,o),$e(e,we()),n;if(t===6)Xt(e,o);else{if(a=e.current.alternate,!(o&30)&&!Zm(a)&&(t=yr(e,o),t===2&&(r=Wi(e),r!==0&&(o=r,t=hs(e,r))),t===1))throw n=ia,Tn(e,0),Xt(e,o),$e(e,we()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(j(345));case 2:yn(e,Ve,zt);break;case 3:if(Xt(e,o),(o&130023424)===o&&(t=_c+500-we(),10<t)){if(er(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){Oe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ki(yn.bind(null,e,Ve,zt),t);break}yn(e,Ve,zt);break;case 4:if(Xt(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var i=31-bt(o);r=1<<i,i=t[i],i>a&&(a=i),o&=~r}if(o=a,o=we()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Ym(o/1960))-o,10<o){e.timeoutHandle=Ki(yn.bind(null,e,Ve,zt),o);break}yn(e,Ve,zt);break;case 5:yn(e,Ve,zt);break;default:throw Error(j(329))}}}return $e(e,we()),e.callbackNode===n?U0.bind(null,e):null}function hs(e,t){var n=Fo;return e.current.memoizedState.isDehydrated&&(Tn(e,t).flags|=256),e=yr(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&fs(t)),e}function fs(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function Zm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],r=a.getSnapshot;a=a.value;try{if(!It(r(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~mc,t&=~Dr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),o=1<<n;e[n]=-1,t&=~o}}function Ul(e){if(ee&6)throw Error(j(327));eo();var t=er(e,0);if(!(t&1))return $e(e,we()),null;var n=yr(e,t);if(e.tag!==0&&n===2){var o=Wi(e);o!==0&&(t=o,n=hs(e,o))}if(n===1)throw n=ia,Tn(e,0),Xt(e,t),$e(e,we()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,Ve,zt),$e(e,we()),null}function hc(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(lo=we()+500,Er&&gn())}}function Sn(e){Zt!==null&&Zt.tag===0&&!(ee&6)&&eo();var t=ee;ee|=1;var n=gt.transition,o=ae;try{if(gt.transition=null,ae=1,e)return e()}finally{ae=o,gt.transition=n,ee=t,!(ee&6)&&gn()}}function fc(){tt=Qn.current,pe(Qn)}function Tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sm(n)),ve!==null)for(n=ve.return;n!==null;){var o=n;switch(Xs(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&rr();break;case 3:so(),pe(Je),pe(Me),ic();break;case 5:rc(o);break;case 4:so();break;case 13:pe(me);break;case 19:pe(me);break;case 10:tc(o.type._context);break;case 22:case 23:fc()}n=n.return}if(je=e,ve=e=cn(e.current,null),Pe=tt=t,Ie=0,ia=null,mc=Dr=En=0,Ve=Fo=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,r=n.pending;if(r!==null){var i=r.next;r.next=a,o.next=i}n.pending=o}vn=null}return e}function V0(e,t){do{var n=ve;try{if(ec(),Ga.current=mr,gr){for(var o=_e.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}gr=!1}if(jn=0,xe=Te=_e=null,Mo=!1,oa=0,gc.current=null,n===null||n.return===null){Ie=1,ia=t,ve=null;break}e:{var r=e,i=n.return,s=n,c=t;if(t=Pe,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,u=s,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Cl(i);if(p!==null){p.flags&=-257,Dl(p,i,s,r,t),p.mode&1&&Pl(r,l,t),t=p,c=l;var w=t.updateQueue;if(w===null){var k=new Set;k.add(c),t.updateQueue=k}else w.add(c);break e}else{if(!(t&1)){Pl(r,l,t),yc();break e}c=Error(j(426))}}else if(ge&&s.mode&1){var D=Cl(i);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Dl(D,i,s,r,t),Ys(co(c,s));break e}}r=c=co(c,s),Ie!==4&&(Ie=2),Fo===null?Fo=[r]:Fo.push(r),r=i;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var m=E0(r,c,t);Il(r,m);break e;case 1:s=c;var h=r.type,f=r.stateNode;if(!(r.flags&128)&&(typeof h.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(rn===null||!rn.has(f)))){r.flags|=65536,t&=-t,r.lanes|=t;var T=S0(r,s,t);Il(r,T);break e}}r=r.return}while(r!==null)}Q0(n)}catch(x){t=x,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function q0(){var e=_r.current;return _r.current=mr,e===null?mr:e}function yc(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),je===null||!(En&268435455)&&!(Dr&268435455)||Xt(je,Pe)}function yr(e,t){var n=ee;ee|=2;var o=q0();(je!==e||Pe!==t)&&(zt=null,Tn(e,t));do try{e_();break}catch(a){V0(e,a)}while(1);if(ec(),ee=n,_r.current=o,ve!==null)throw Error(j(261));return je=null,Pe=0,Ie}function e_(){for(;ve!==null;)J0(ve)}function t_(){for(;ve!==null&&!xg();)J0(ve)}function J0(e){var t=K0(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?Q0(e):ve=t,gc.current=null}function Q0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qm(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,ve=null;return}}else if(n=Jm(n,t,tt),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);Ie===0&&(Ie=5)}function yn(e,t,n){var o=ae,a=gt.transition;try{gt.transition=null,ae=1,n_(e,t,n,o)}finally{gt.transition=a,ae=o}return null}function n_(e,t,n,o){do eo();while(Zt!==null);if(ee&6)throw Error(j(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var r=n.lanes|n.childLanes;if(zg(e,r),e===je&&(ve=je=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,X0(Za,function(){return eo(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=gt.transition,gt.transition=null;var i=ae;ae=1;var s=ee;ee|=4,gc.current=null,Km(e,n),W0(n,e),bm(Qi),tr=!!Ji,Qi=Ji=null,e.current=n,Xm(n),jg(),ee=s,ae=i,gt.transition=r}else e.current=n;if(Pa&&(Pa=!1,Zt=e,fr=a),r=e.pendingLanes,r===0&&(rn=null),Pg(n.stateNode),$e(e,we()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(hr)throw hr=!1,e=ms,ms=null,e;return fr&1&&e.tag!==0&&eo(),r=e.pendingLanes,r&1?e===_s?Oo++:(Oo=0,_s=e):Oo=0,gn(),null}function eo(){if(Zt!==null){var e=Ed(fr),t=gt.transition,n=ae;try{if(gt.transition=null,ae=16>e?16:e,Zt===null)var o=!1;else{if(e=Zt,Zt=null,fr=0,ee&6)throw Error(j(331));var a=ee;for(ee|=4,F=e.current;F!==null;){var r=F,i=r.child;if(F.flags&16){var s=r.deletions;if(s!==null){for(var c=0;c<s.length;c++){var l=s[c];for(F=l;F!==null;){var u=F;switch(u.tag){case 0:case 11:case 15:Ro(8,u,r)}var d=u.child;if(d!==null)d.return=u,F=d;else for(;F!==null;){u=F;var g=u.sibling,p=u.return;if(F0(u),u===l){F=null;break}if(g!==null){g.return=p,F=g;break}F=p}}}var w=r.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}F=r}}if(r.subtreeFlags&2064&&i!==null)i.return=r,F=i;else e:for(;F!==null;){if(r=F,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Ro(9,r,r.return)}var m=r.sibling;if(m!==null){m.return=r.return,F=m;break e}F=r.return}}var h=e.current;for(F=h;F!==null;){i=F;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,F=f;else e:for(i=h;F!==null;){if(s=F,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Cr(9,s)}}catch(x){fe(s,s.return,x)}if(s===i){F=null;break e}var T=s.sibling;if(T!==null){T.return=s.return,F=T;break e}F=s.return}}if(ee=a,gn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Tr,e)}catch{}o=!0}return o}finally{ae=n,gt.transition=t}}return!1}function Vl(e,t,n){t=co(n,t),t=E0(e,t,1),e=an(e,t,1),t=Oe(),e!==null&&(la(e,1,t),$e(e,t))}function fe(e,t,n){if(e.tag===3)Vl(e,e,n);else for(;t!==null;){if(t.tag===3){Vl(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(rn===null||!rn.has(o))){e=co(n,e),e=S0(t,e,1),t=an(t,e,1),e=Oe(),t!==null&&(la(t,1,e),$e(t,e));break}}t=t.return}}function o_(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Pe&n)===n&&(Ie===4||Ie===3&&(Pe&130023424)===Pe&&500>we()-_c?Tn(e,0):mc|=n),$e(e,t)}function $0(e,t){t===0&&(e.mode&1?(t=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):t=1);var n=Oe();e=Ht(e,t),e!==null&&(la(e,t,n),$e(e,n))}function a_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$0(e,n)}function r_(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(j(314))}o!==null&&o.delete(t),$0(e,n)}var K0;K0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return qe=!1,qm(e,t,n);qe=!!(e.flags&131072)}else qe=!1,ge&&t.flags&1048576&&e0(t,cr,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ha(e,t),e=t.pendingProps;var a=ao(t,Me.current);Zn(t,n),a=cc(null,t,o,e,a,n);var r=lc();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(o)?(r=!0,ir(t)):r=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,oc(t),a.updater=Pr,t.stateNode=a,a._reactInternals=t,os(t,o,e,n),t=is(null,t,o,!0,r,n)):(t.tag=0,ge&&r&&Ks(t),Fe(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Ha(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=s_(o),e=wt(o,e),a){case 0:t=rs(null,t,o,e,n);break e;case 1:t=Nl(null,t,o,e,n);break e;case 11:t=Bl(null,t,o,e,n);break e;case 14:t=Ll(null,t,o,wt(o.type,e),n);break e}throw Error(j(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:wt(o,a),rs(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:wt(o,a),Nl(e,t,o,a,n);case 3:e:{if(B0(t),e===null)throw Error(j(387));o=t.pendingProps,r=t.memoizedState,a=r.element,i0(e,t),dr(t,o,null,n);var i=t.memoizedState;if(o=i.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){a=co(Error(j(423)),t),t=zl(e,t,o,n,a);break e}else if(o!==a){a=co(Error(j(424)),t),t=zl(e,t,o,n,a);break e}else for(nt=on(t.stateNode.containerInfo.firstChild),at=t,ge=!0,vt=null,n=a0(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),o===a){t=Ut(e,t,n);break e}Fe(e,t,o,n)}t=t.child}return t;case 5:return s0(t),e===null&&es(t),o=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,$i(o,a)?i=null:r!==null&&$i(o,r)&&(t.flags|=32),D0(e,t),Fe(e,t,i,n),t.child;case 6:return e===null&&es(t),null;case 13:return L0(e,t,n);case 4:return ac(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=io(t,null,o,n):Fe(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:wt(o,a),Bl(e,t,o,a,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,r=t.memoizedProps,i=a.value,le(lr,o._currentValue),o._currentValue=i,r!==null)if(It(r.value,i)){if(r.children===a.children&&!Je.current){t=Ut(e,t,n);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var s=r.dependencies;if(s!==null){i=r.child;for(var c=s.firstContext;c!==null;){if(c.context===o){if(r.tag===1){c=Ot(-1,n&-n),c.tag=2;var l=r.updateQueue;if(l!==null){l=l.shared;var u=l.pending;u===null?c.next=c:(c.next=u.next,u.next=c),l.pending=c}}r.lanes|=n,c=r.alternate,c!==null&&(c.lanes|=n),ts(r.return,n,t),s.lanes|=n;break}c=c.next}}else if(r.tag===10)i=r.type===t.type?null:r.child;else if(r.tag===18){if(i=r.return,i===null)throw Error(j(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ts(i,n,t),i=r.sibling}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===t){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}Fe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,Zn(t,n),a=mt(a),o=o(a),t.flags|=1,Fe(e,t,o,n),t.child;case 14:return o=t.type,a=wt(o,t.pendingProps),a=wt(o.type,a),Ll(e,t,o,a,n);case 15:return P0(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:wt(o,a),Ha(e,t),t.tag=1,Qe(o)?(e=!0,ir(t)):e=!1,Zn(t,n),j0(t,o,a),os(t,o,a,n),is(null,t,o,!0,e,n);case 19:return N0(e,t,n);case 22:return C0(e,t,n)}throw Error(j(156,t.tag))};function X0(e,t){return Id(e,t)}function i_(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,o){return new i_(e,t,n,o)}function wc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s_(e){if(typeof e=="function")return wc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Rs)return 11;if(e===Fs)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qa(e,t,n,o,a,r){var i=2;if(o=e,typeof e=="function")wc(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Rn:return In(n.children,a,r,t);case Ms:i=8,a|=8;break;case ji:return e=pt(12,n,t,a|2),e.elementType=ji,e.lanes=r,e;case Ei:return e=pt(13,n,t,a),e.elementType=Ei,e.lanes=r,e;case Si:return e=pt(19,n,t,a),e.elementType=Si,e.lanes=r,e;case sd:return Br(n,a,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rd:i=10;break e;case id:i=9;break e;case Rs:i=11;break e;case Fs:i=14;break e;case Qt:i=16,o=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=pt(i,n,t,a),t.elementType=e,t.type=o,t.lanes=r,t}function In(e,t,n,o){return e=pt(7,e,o,t),e.lanes=n,e}function Br(e,t,n,o){return e=pt(22,e,o,t),e.elementType=sd,e.lanes=n,e.stateNode={isHidden:!1},e}function pi(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function gi(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function c_(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jr(0),this.expirationTimes=Jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function kc(e,t,n,o,a,r,i,s,c){return e=new c_(e,t,n,s,c),t===1?(t=1,r===!0&&(t|=8)):t=0,r=pt(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oc(r),e}function l_(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Y0(e){if(!e)return un;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Qe(n))return Yd(e,n,t)}return t}function Z0(e,t,n,o,a,r,i,s,c){return e=kc(n,o,!0,e,a,r,i,s,c),e.context=Y0(null),n=e.current,o=Oe(),a=sn(n),r=Ot(o,a),r.callback=t??null,an(n,r,a),e.current.lanes=a,la(e,a,o),$e(e,o),e}function Lr(e,t,n,o){var a=t.current,r=Oe(),i=sn(a);return n=Y0(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(r,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=an(a,t,i),e!==null&&(Tt(e,a,i,r),Oa(e,a,i)),i}function wr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ql(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vc(e,t){ql(e,t),(e=e.alternate)&&ql(e,t)}function u_(){return null}var ep=typeof reportError=="function"?reportError:function(e){console.error(e)};function bc(e){this._internalRoot=e}Nr.prototype.render=bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Lr(e,t,null,null)};Nr.prototype.unmount=bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){Lr(null,e,null,null)}),t[Wt]=null}};function Nr(e){this._internalRoot=e}Nr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&Bd(e)}};function Tc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Jl(){}function d_(e,t,n,o,a){if(a){if(typeof o=="function"){var r=o;o=function(){var l=wr(i);r.call(l)}}var i=Z0(t,o,e,0,null,!1,!1,"",Jl);return e._reactRootContainer=i,e[Wt]=i.current,Yo(e.nodeType===8?e.parentNode:e),Sn(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var s=o;o=function(){var l=wr(c);s.call(l)}}var c=kc(e,0,!1,null,null,!1,!1,"",Jl);return e._reactRootContainer=c,e[Wt]=c.current,Yo(e.nodeType===8?e.parentNode:e),Sn(function(){Lr(t,c,n,o)}),c}function Mr(e,t,n,o,a){var r=n._reactRootContainer;if(r){var i=r;if(typeof a=="function"){var s=a;a=function(){var c=wr(i);s.call(c)}}Lr(t,i,e,a)}else i=d_(n,t,e,a,o);return wr(i)}Sd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Po(t.pendingLanes);n!==0&&(Ws(t,n|1),$e(t,we()),!(ee&6)&&(lo=we()+500,gn()))}break;case 13:Sn(function(){var o=Ht(e,1);if(o!==null){var a=Oe();Tt(o,e,1,a)}}),vc(e,1)}};Hs=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var n=Oe();Tt(t,e,134217728,n)}vc(e,134217728)}};Pd=function(e){if(e.tag===13){var t=sn(e),n=Ht(e,t);if(n!==null){var o=Oe();Tt(n,e,t,o)}vc(e,t)}};Cd=function(){return ae};Dd=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}};Fi=function(e,t,n){switch(t){case"input":if(Di(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=jr(o);if(!a)throw Error(j(90));ld(o),Di(o,a)}}}break;case"textarea":dd(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};yd=hc;wd=Sn;var p_={usingClientEntryPoint:!1,Events:[da,Wn,jr,hd,fd,hc]},Ao={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g_={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bd(e),e===null?null:e.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||u_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{Tr=Ca.inject(g_),Pt=Ca}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tc(t))throw Error(j(200));return l_(e,t,null,n)};it.createRoot=function(e,t){if(!Tc(e))throw Error(j(299));var n=!1,o="",a=ep;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=kc(e,1,!1,null,null,n,!1,o,a),e[Wt]=t.current,Yo(e.nodeType===8?e.parentNode:e),new bc(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=bd(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return Sn(e)};it.hydrate=function(e,t,n){if(!zr(t))throw Error(j(200));return Mr(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!Tc(e))throw Error(j(405));var o=n!=null&&n.hydratedSources||null,a=!1,r="",i=ep;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Z0(t,null,e,1,n??null,a,!1,r,i),e[Wt]=t.current,Yo(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Nr(t)};it.render=function(e,t,n){if(!zr(t))throw Error(j(200));return Mr(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!zr(e))throw Error(j(40));return e._reactRootContainer?(Sn(function(){Mr(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};it.unstable_batchedUpdates=hc;it.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!zr(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Mr(e,t,n,!1,o)};it.version="18.3.1-next-f1338f8080-20240426";function tp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tp)}catch(e){console.error(e)}}tp(),td.exports=it;var m_=td.exports,Ql=m_;Ai.createRoot=Ql.createRoot,Ai.hydrateRoot=Ql.hydrateRoot;function __(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const h_=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,f_=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,y_={};function $l(e,t){return((t||y_).jsx?f_:h_).test(e)}const w_=/[ \t\n\f\r]/g;function k_(e){return typeof e=="object"?e.type==="text"?Kl(e.value):!1:Kl(e)}function Kl(e){return e.replace(w_,"")===""}class ga{constructor(t,n,o){this.normal=n,this.property=t,o&&(this.space=o)}}ga.prototype.normal={};ga.prototype.property={};ga.prototype.space=void 0;function np(e,t){const n={},o={};for(const a of e)Object.assign(n,a.property),Object.assign(o,a.normal);return new ga(n,o,t)}function ys(e){return e.toLowerCase()}class Xe{constructor(t,n){this.attribute=n,this.property=t}}Xe.prototype.attribute="";Xe.prototype.booleanish=!1;Xe.prototype.boolean=!1;Xe.prototype.commaOrSpaceSeparated=!1;Xe.prototype.commaSeparated=!1;Xe.prototype.defined=!1;Xe.prototype.mustUseProperty=!1;Xe.prototype.number=!1;Xe.prototype.overloadedBoolean=!1;Xe.prototype.property="";Xe.prototype.spaceSeparated=!1;Xe.prototype.space=void 0;let v_=0;const J=Dn(),ke=Dn(),ws=Dn(),S=Dn(),ce=Dn(),to=Dn(),et=Dn();function Dn(){return 2**++v_}const ks=Object.freeze(Object.defineProperty({__proto__:null,boolean:J,booleanish:ke,commaOrSpaceSeparated:et,commaSeparated:to,number:S,overloadedBoolean:ws,spaceSeparated:ce},Symbol.toStringTag,{value:"Module"})),mi=Object.keys(ks);class Ic extends Xe{constructor(t,n,o,a){let r=-1;if(super(t,n),Xl(this,"space",a),typeof o=="number")for(;++r<mi.length;){const i=mi[r];Xl(this,mi[r],(o&ks[i])===ks[i])}}}Ic.prototype.defined=!0;function Xl(e,t,n){n&&(e[t]=n)}function mo(e){const t={},n={};for(const[o,a]of Object.entries(e.properties)){const r=new Ic(o,e.transform(e.attributes||{},o),a,e.space);e.mustUseProperty&&e.mustUseProperty.includes(o)&&(r.mustUseProperty=!0),t[o]=r,n[ys(o)]=o,n[ys(r.attribute)]=o}return new ga(t,n,e.space)}const op=mo({properties:{ariaActiveDescendant:null,ariaAtomic:ke,ariaAutoComplete:null,ariaBusy:ke,ariaChecked:ke,ariaColCount:S,ariaColIndex:S,ariaColSpan:S,ariaControls:ce,ariaCurrent:null,ariaDescribedBy:ce,ariaDetails:null,ariaDisabled:ke,ariaDropEffect:ce,ariaErrorMessage:null,ariaExpanded:ke,ariaFlowTo:ce,ariaGrabbed:ke,ariaHasPopup:null,ariaHidden:ke,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ce,ariaLevel:S,ariaLive:null,ariaModal:ke,ariaMultiLine:ke,ariaMultiSelectable:ke,ariaOrientation:null,ariaOwns:ce,ariaPlaceholder:null,ariaPosInSet:S,ariaPressed:ke,ariaReadOnly:ke,ariaRelevant:null,ariaRequired:ke,ariaRoleDescription:ce,ariaRowCount:S,ariaRowIndex:S,ariaRowSpan:S,ariaSelected:ke,ariaSetSize:S,ariaSort:null,ariaValueMax:S,ariaValueMin:S,ariaValueNow:S,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function ap(e,t){return t in e?e[t]:t}function rp(e,t){return ap(e,t.toLowerCase())}const b_=mo({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:to,acceptCharset:ce,accessKey:ce,action:null,allow:null,allowFullScreen:J,allowPaymentRequest:J,allowUserMedia:J,alt:null,as:null,async:J,autoCapitalize:null,autoComplete:ce,autoFocus:J,autoPlay:J,blocking:ce,capture:null,charSet:null,checked:J,cite:null,className:ce,cols:S,colSpan:null,content:null,contentEditable:ke,controls:J,controlsList:ce,coords:S|to,crossOrigin:null,data:null,dateTime:null,decoding:null,default:J,defer:J,dir:null,dirName:null,disabled:J,download:ws,draggable:ke,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:J,formTarget:null,headers:ce,height:S,hidden:ws,high:S,href:null,hrefLang:null,htmlFor:ce,httpEquiv:ce,id:null,imageSizes:null,imageSrcSet:null,inert:J,inputMode:null,integrity:null,is:null,isMap:J,itemId:null,itemProp:ce,itemRef:ce,itemScope:J,itemType:ce,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:J,low:S,manifest:null,max:null,maxLength:S,media:null,method:null,min:null,minLength:S,multiple:J,muted:J,name:null,nonce:null,noModule:J,noValidate:J,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:J,optimum:S,pattern:null,ping:ce,placeholder:null,playsInline:J,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:J,referrerPolicy:null,rel:ce,required:J,reversed:J,rows:S,rowSpan:S,sandbox:ce,scope:null,scoped:J,seamless:J,selected:J,shadowRootClonable:J,shadowRootDelegatesFocus:J,shadowRootMode:null,shape:null,size:S,sizes:null,slot:null,span:S,spellCheck:ke,src:null,srcDoc:null,srcLang:null,srcSet:null,start:S,step:null,style:null,tabIndex:S,target:null,title:null,translate:null,type:null,typeMustMatch:J,useMap:null,value:ke,width:S,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ce,axis:null,background:null,bgColor:null,border:S,borderColor:null,bottomMargin:S,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:J,declare:J,event:null,face:null,frame:null,frameBorder:null,hSpace:S,leftMargin:S,link:null,longDesc:null,lowSrc:null,marginHeight:S,marginWidth:S,noResize:J,noHref:J,noShade:J,noWrap:J,object:null,profile:null,prompt:null,rev:null,rightMargin:S,rules:null,scheme:null,scrolling:ke,standby:null,summary:null,text:null,topMargin:S,valueType:null,version:null,vAlign:null,vLink:null,vSpace:S,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:J,disableRemotePlayback:J,prefix:null,property:null,results:S,security:null,unselectable:null},space:"html",transform:rp}),T_=mo({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:et,accentHeight:S,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:S,amplitude:S,arabicForm:null,ascent:S,attributeName:null,attributeType:null,azimuth:S,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:S,by:null,calcMode:null,capHeight:S,className:ce,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:S,diffuseConstant:S,direction:null,display:null,dur:null,divisor:S,dominantBaseline:null,download:J,dx:null,dy:null,edgeMode:null,editable:null,elevation:S,enableBackground:null,end:null,event:null,exponent:S,externalResourcesRequired:null,fill:null,fillOpacity:S,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:to,g2:to,glyphName:to,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:S,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:S,horizOriginX:S,horizOriginY:S,id:null,ideographic:S,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:S,k:S,k1:S,k2:S,k3:S,k4:S,kernelMatrix:et,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:S,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:S,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:S,overlineThickness:S,paintOrder:null,panose1:null,path:null,pathLength:S,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ce,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:S,pointsAtY:S,pointsAtZ:S,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:et,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:et,rev:et,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:et,requiredFeatures:et,requiredFonts:et,requiredFormats:et,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:S,specularExponent:S,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:S,strikethroughThickness:S,string:null,stroke:null,strokeDashArray:et,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:S,strokeOpacity:S,strokeWidth:null,style:null,surfaceScale:S,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:et,tabIndex:S,tableValues:null,target:null,targetX:S,targetY:S,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:et,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:S,underlineThickness:S,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:S,values:null,vAlphabetic:S,vMathematical:S,vectorEffect:null,vHanging:S,vIdeographic:S,version:null,vertAdvY:S,vertOriginX:S,vertOriginY:S,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:S,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ap}),ip=mo({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),sp=mo({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:rp}),cp=mo({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),I_={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},A_=/[A-Z]/g,Yl=/-[a-z]/g,x_=/^data[-\w.:]+$/i;function j_(e,t){const n=ys(t);let o=t,a=Xe;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&x_.test(t)){if(t.charAt(4)==="-"){const r=t.slice(5).replace(Yl,S_);o="data"+r.charAt(0).toUpperCase()+r.slice(1)}else{const r=t.slice(4);if(!Yl.test(r)){let i=r.replace(A_,E_);i.charAt(0)!=="-"&&(i="-"+i),t="data"+i}}a=Ic}return new a(o,t)}function E_(e){return"-"+e.toLowerCase()}function S_(e){return e.charAt(1).toUpperCase()}const P_=np([op,b_,ip,sp,cp],"html"),Ac=np([op,T_,ip,sp,cp],"svg");function C_(e){return e.join(" ").trim()}var xc={},Zl=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,D_=/\n/g,B_=/^\s*/,L_=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,N_=/^:\s*/,z_=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,M_=/^[;\s]*/,R_=/^\s+|\s+$/g,F_=`
`,eu="/",tu="*",wn="",O_="comment",G_="declaration";function W_(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,o=1;function a(w){var k=w.match(D_);k&&(n+=k.length);var D=w.lastIndexOf(F_);o=~D?w.length-D:o+w.length}function r(){var w={line:n,column:o};return function(k){return k.position=new i(w),l(),k}}function i(w){this.start=w,this.end={line:n,column:o},this.source=t.source}i.prototype.content=e;function s(w){var k=new Error(t.source+":"+n+":"+o+": "+w);if(k.reason=w,k.filename=t.source,k.line=n,k.column=o,k.source=e,!t.silent)throw k}function c(w){var k=w.exec(e);if(k){var D=k[0];return a(D),e=e.slice(D.length),k}}function l(){c(B_)}function u(w){var k;for(w=w||[];k=d();)k!==!1&&w.push(k);return w}function d(){var w=r();if(!(eu!=e.charAt(0)||tu!=e.charAt(1))){for(var k=2;wn!=e.charAt(k)&&(tu!=e.charAt(k)||eu!=e.charAt(k+1));)++k;if(k+=2,wn===e.charAt(k-1))return s("End of comment missing");var D=e.slice(2,k-2);return o+=2,a(D),e=e.slice(k),o+=2,w({type:O_,comment:D})}}function g(){var w=r(),k=c(L_);if(k){if(d(),!c(N_))return s("property missing ':'");var D=c(z_),m=w({type:G_,property:nu(k[0].replace(Zl,wn)),value:D?nu(D[0].replace(Zl,wn)):wn});return c(M_),m}}function p(){var w=[];u(w);for(var k;k=g();)k!==!1&&(w.push(k),u(w));return w}return l(),p()}function nu(e){return e?e.replace(R_,wn):wn}var H_=W_,U_=$a&&$a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xc,"__esModule",{value:!0});xc.default=q_;const V_=U_(H_);function q_(e,t){let n=null;if(!e||typeof e!="string")return n;const o=(0,V_.default)(e),a=typeof t=="function";return o.forEach(r=>{if(r.type!=="declaration")return;const{property:i,value:s}=r;a?t(i,s,r):s&&(n=n||{},n[i]=s)}),n}var Rr={};Object.defineProperty(Rr,"__esModule",{value:!0});Rr.camelCase=void 0;var J_=/^--[a-zA-Z0-9_-]+$/,Q_=/-([a-z])/g,$_=/^[^-]+$/,K_=/^-(webkit|moz|ms|o|khtml)-/,X_=/^-(ms)-/,Y_=function(e){return!e||$_.test(e)||J_.test(e)},Z_=function(e,t){return t.toUpperCase()},ou=function(e,t){return"".concat(t,"-")},eh=function(e,t){return t===void 0&&(t={}),Y_(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(X_,ou):e=e.replace(K_,ou),e.replace(Q_,Z_))};Rr.camelCase=eh;var th=$a&&$a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},nh=th(xc),oh=Rr;function vs(e,t){var n={};return!e||typeof e!="string"||(0,nh.default)(e,function(o,a){o&&a&&(n[(0,oh.camelCase)(o,t)]=a)}),n}vs.default=vs;var ah=vs;const rh=Ss(ah),lp=up("end"),jc=up("start");function up(e){return t;function t(n){const o=n&&n.position&&n.position[e]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function ih(e){const t=jc(e),n=lp(e);if(t&&n)return{start:t,end:n}}function Go(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?au(e.position):"start"in e||"end"in e?au(e):"line"in e||"column"in e?bs(e):""}function bs(e){return ru(e&&e.line)+":"+ru(e&&e.column)}function au(e){return bs(e&&e.start)+"-"+bs(e&&e.end)}function ru(e){return e&&typeof e=="number"?e:1}class Re extends Error{constructor(t,n,o){super(),typeof n=="string"&&(o=n,n=void 0);let a="",r={},i=!1;if(n&&("line"in n&&"column"in n?r={place:n}:"start"in n&&"end"in n?r={place:n}:"type"in n?r={ancestors:[n],place:n.position}:r={...n}),typeof t=="string"?a=t:!r.cause&&t&&(i=!0,a=t.message,r.cause=t),!r.ruleId&&!r.source&&typeof o=="string"){const c=o.indexOf(":");c===-1?r.ruleId=o:(r.source=o.slice(0,c),r.ruleId=o.slice(c+1))}if(!r.place&&r.ancestors&&r.ancestors){const c=r.ancestors[r.ancestors.length-1];c&&(r.place=c.position)}const s=r.place&&"start"in r.place?r.place.start:r.place;this.ancestors=r.ancestors||void 0,this.cause=r.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=a,this.line=s?s.line:void 0,this.name=Go(r.place)||"1:1",this.place=r.place||void 0,this.reason=this.message,this.ruleId=r.ruleId||void 0,this.source=r.source||void 0,this.stack=i&&r.cause&&typeof r.cause.stack=="string"?r.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Re.prototype.file="";Re.prototype.name="";Re.prototype.reason="";Re.prototype.message="";Re.prototype.stack="";Re.prototype.column=void 0;Re.prototype.line=void 0;Re.prototype.ancestors=void 0;Re.prototype.cause=void 0;Re.prototype.fatal=void 0;Re.prototype.place=void 0;Re.prototype.ruleId=void 0;Re.prototype.source=void 0;const Ec={}.hasOwnProperty,sh=new Map,ch=/[A-Z]/g,lh=new Set(["table","tbody","thead","tfoot","tr"]),uh=new Set(["td","th"]),dp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function dh(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let o;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=wh(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=yh(n,t.jsx,t.jsxs)}const a={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:o,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Ac:P_,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},r=pp(a,e,void 0);return r&&typeof r!="string"?r:a.create(e,a.Fragment,{children:r||void 0},void 0)}function pp(e,t,n){if(t.type==="element")return ph(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return gh(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return _h(e,t,n);if(t.type==="mdxjsEsm")return mh(e,t);if(t.type==="root")return hh(e,t,n);if(t.type==="text")return fh(e,t)}function ph(e,t,n){const o=e.schema;let a=o;t.tagName.toLowerCase()==="svg"&&o.space==="html"&&(a=Ac,e.schema=a),e.ancestors.push(t);const r=mp(e,t.tagName,!1),i=kh(e,t);let s=Pc(e,t);return lh.has(t.tagName)&&(s=s.filter(function(c){return typeof c=="string"?!k_(c):!0})),gp(e,i,r,t),Sc(i,s),e.ancestors.pop(),e.schema=o,e.create(t,r,i,n)}function gh(e,t){if(t.data&&t.data.estree&&e.evaluater){const o=t.data.estree.body[0];return o.type,e.evaluater.evaluateExpression(o.expression)}sa(e,t.position)}function mh(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);sa(e,t.position)}function _h(e,t,n){const o=e.schema;let a=o;t.name==="svg"&&o.space==="html"&&(a=Ac,e.schema=a),e.ancestors.push(t);const r=t.name===null?e.Fragment:mp(e,t.name,!0),i=vh(e,t),s=Pc(e,t);return gp(e,i,r,t),Sc(i,s),e.ancestors.pop(),e.schema=o,e.create(t,r,i,n)}function hh(e,t,n){const o={};return Sc(o,Pc(e,t)),e.create(t,e.Fragment,o,n)}function fh(e,t){return t.value}function gp(e,t,n,o){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=o)}function Sc(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function yh(e,t,n){return o;function o(a,r,i,s){const l=Array.isArray(i.children)?n:t;return s?l(r,i,s):l(r,i)}}function wh(e,t){return n;function n(o,a,r,i){const s=Array.isArray(r.children),c=jc(o);return t(a,r,i,s,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function kh(e,t){const n={};let o,a;for(a in t.properties)if(a!=="children"&&Ec.call(t.properties,a)){const r=bh(e,a,t.properties[a]);if(r){const[i,s]=r;e.tableCellAlignToStyle&&i==="align"&&typeof s=="string"&&uh.has(t.tagName)?o=s:n[i]=s}}if(o){const r=n.style||(n.style={});r[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return n}function vh(e,t){const n={};for(const o of t.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&e.evaluater){const r=o.data.estree.body[0];r.type;const i=r.expression;i.type;const s=i.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else sa(e,t.position);else{const a=o.name;let r;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&e.evaluater){const s=o.value.data.estree.body[0];s.type,r=e.evaluater.evaluateExpression(s.expression)}else sa(e,t.position);else r=o.value===null?!0:o.value;n[a]=r}return n}function Pc(e,t){const n=[];let o=-1;const a=e.passKeys?new Map:sh;for(;++o<t.children.length;){const r=t.children[o];let i;if(e.passKeys){const c=r.type==="element"?r.tagName:r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement"?r.name:void 0;if(c){const l=a.get(c)||0;i=c+"-"+l,a.set(c,l+1)}}const s=pp(e,r,i);s!==void 0&&n.push(s)}return n}function bh(e,t,n){const o=j_(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=o.commaSeparated?__(n):C_(n)),o.property==="style"){let a=typeof n=="object"?n:Th(e,String(n));return e.stylePropertyNameCase==="css"&&(a=Ih(a)),["style",a]}return[e.elementAttributeNameCase==="react"&&o.space?I_[o.property]||o.property:o.attribute,n]}}function Th(e,t){try{return rh(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const o=n,a=new Re("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw a.file=e.filePath||void 0,a.url=dp+"#cannot-parse-style-attribute",a}}function mp(e,t,n){let o;if(!n)o={type:"Literal",value:t};else if(t.includes(".")){const a=t.split(".");let r=-1,i;for(;++r<a.length;){const s=$l(a[r])?{type:"Identifier",name:a[r]}:{type:"Literal",value:a[r]};i=i?{type:"MemberExpression",object:i,property:s,computed:!!(r&&s.type==="Literal"),optional:!1}:s}o=i}else o=$l(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(o.type==="Literal"){const a=o.value;return Ec.call(e.components,a)?e.components[a]:a}if(e.evaluater)return e.evaluater.evaluateExpression(o);sa(e)}function sa(e,t){const n=new Re("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=dp+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Ih(e){const t={};let n;for(n in e)Ec.call(e,n)&&(t[Ah(n)]=e[n]);return t}function Ah(e){let t=e.replace(ch,xh);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function xh(e){return"-"+e.toLowerCase()}const _i={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},jh={};function Eh(e,t){const n=t||jh,o=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,a=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return _p(e,o,a)}function _p(e,t,n){if(Sh(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return iu(e.children,t,n)}return Array.isArray(e)?iu(e,t,n):""}function iu(e,t,n){const o=[];let a=-1;for(;++a<e.length;)o[a]=_p(e[a],t,n);return o.join("")}function Sh(e){return!!(e&&typeof e=="object")}const su=document.createElement("i");function Cc(e){const t="&"+e+";";su.innerHTML=t;const n=su.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Dt(e,t,n,o){const a=e.length;let r=0,i;if(t<0?t=-t>a?0:a+t:t=t>a?a:t,n=n>0?n:0,o.length<1e4)i=Array.from(o),i.unshift(t,n),e.splice(...i);else for(n&&e.splice(t,n);r<o.length;)i=o.slice(r,r+1e4),i.unshift(t,0),e.splice(...i),r+=1e4,t+=1e4}function dt(e,t){return e.length>0?(Dt(e,e.length,0,t),e):t}const cu={}.hasOwnProperty;function Ph(e){const t={};let n=-1;for(;++n<e.length;)Ch(t,e[n]);return t}function Ch(e,t){let n;for(n in t){const a=(cu.call(e,n)?e[n]:void 0)||(e[n]={}),r=t[n];let i;if(r)for(i in r){cu.call(a,i)||(a[i]=[]);const s=r[i];Dh(a[i],Array.isArray(s)?s:s?[s]:[])}}}function Dh(e,t){let n=-1;const o=[];for(;++n<t.length;)(t[n].add==="after"?e:o).push(t[n]);Dt(e,0,0,o)}function hp(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function no(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const St=mn(/[A-Za-z]/),ot=mn(/[\dA-Za-z]/),Bh=mn(/[#-'*+\--9=?A-Z^-~]/);function Ts(e){return e!==null&&(e<32||e===127)}const Is=mn(/\d/),Lh=mn(/[\dA-Fa-f]/),Nh=mn(/[!-/:-@[-`{-~]/);function H(e){return e!==null&&e<-2}function Ke(e){return e!==null&&(e<0||e===32)}function ne(e){return e===-2||e===-1||e===32}const zh=mn(/\p{P}|\p{S}/u),Mh=mn(/\s/);function mn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function _o(e){const t=[];let n=-1,o=0,a=0;for(;++n<e.length;){const r=e.charCodeAt(n);let i="";if(r===37&&ot(e.charCodeAt(n+1))&&ot(e.charCodeAt(n+2)))a=2;else if(r<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(r))||(i=String.fromCharCode(r));else if(r>55295&&r<57344){const s=e.charCodeAt(n+1);r<56320&&s>56319&&s<57344?(i=String.fromCharCode(r,s),a=1):i="�"}else i=String.fromCharCode(r);i&&(t.push(e.slice(o,n),encodeURIComponent(i)),o=n+a+1,i=""),a&&(n+=a,a=0)}return t.join("")+e.slice(o)}function ue(e,t,n,o){const a=o?o-1:Number.POSITIVE_INFINITY;let r=0;return i;function i(c){return ne(c)?(e.enter(n),s(c)):t(c)}function s(c){return ne(c)&&r++<a?(e.consume(c),s):(e.exit(n),t(c))}}const Rh={tokenize:Fh};function Fh(e){const t=e.attempt(this.parser.constructs.contentInitial,o,a);let n;return t;function o(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),ue(e,t,"linePrefix")}function a(s){return e.enter("paragraph"),r(s)}function r(s){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,i(s)}function i(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return H(s)?(e.consume(s),e.exit("chunkText"),r):(e.consume(s),i)}}const Oh={tokenize:Gh},lu={tokenize:Wh};function Gh(e){const t=this,n=[];let o=0,a,r,i;return s;function s(f){if(o<n.length){const T=n[o];return t.containerState=T[1],e.attempt(T[0].continuation,c,l)(f)}return l(f)}function c(f){if(o++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,a&&h();const T=t.events.length;let x=T,v;for(;x--;)if(t.events[x][0]==="exit"&&t.events[x][1].type==="chunkFlow"){v=t.events[x][1].end;break}m(o);let E=T;for(;E<t.events.length;)t.events[E][1].end={...v},E++;return Dt(t.events,x+1,0,t.events.slice(T)),t.events.length=E,l(f)}return s(f)}function l(f){if(o===n.length){if(!a)return g(f);if(a.currentConstruct&&a.currentConstruct.concrete)return w(f);t.interrupt=!!(a.currentConstruct&&!a._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(lu,u,d)(f)}function u(f){return a&&h(),m(o),g(f)}function d(f){return t.parser.lazy[t.now().line]=o!==n.length,i=t.now().offset,w(f)}function g(f){return t.containerState={},e.attempt(lu,p,w)(f)}function p(f){return o++,n.push([t.currentConstruct,t.containerState]),g(f)}function w(f){if(f===null){a&&h(),m(0),e.consume(f);return}return a=a||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:a,contentType:"flow",previous:r}),k(f)}function k(f){if(f===null){D(e.exit("chunkFlow"),!0),m(0),e.consume(f);return}return H(f)?(e.consume(f),D(e.exit("chunkFlow")),o=0,t.interrupt=void 0,s):(e.consume(f),k)}function D(f,T){const x=t.sliceStream(f);if(T&&x.push(null),f.previous=r,r&&(r.next=f),r=f,a.defineSkip(f.start),a.write(x),t.parser.lazy[f.start.line]){let v=a.events.length;for(;v--;)if(a.events[v][1].start.offset<i&&(!a.events[v][1].end||a.events[v][1].end.offset>i))return;const E=t.events.length;let C=E,O,z;for(;C--;)if(t.events[C][0]==="exit"&&t.events[C][1].type==="chunkFlow"){if(O){z=t.events[C][1].end;break}O=!0}for(m(o),v=E;v<t.events.length;)t.events[v][1].end={...z},v++;Dt(t.events,C+1,0,t.events.slice(E)),t.events.length=v}}function m(f){let T=n.length;for(;T-- >f;){const x=n[T];t.containerState=x[1],x[0].exit.call(t,e)}n.length=f}function h(){a.write([null]),r=void 0,a=void 0,t.containerState._closeFlow=void 0}}function Wh(e,t,n){return ue(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function uu(e){if(e===null||Ke(e)||Mh(e))return 1;if(zh(e))return 2}function Dc(e,t,n){const o=[];let a=-1;for(;++a<e.length;){const r=e[a].resolveAll;r&&!o.includes(r)&&(t=r(t,n),o.push(r))}return t}const As={name:"attention",resolveAll:Hh,tokenize:Uh};function Hh(e,t){let n=-1,o,a,r,i,s,c,l,u;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(o=n;o--;)if(e[o][0]==="exit"&&e[o][1].type==="attentionSequence"&&e[o][1]._open&&t.sliceSerialize(e[o][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[o][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[o][1].end.offset-e[o][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[o][1].end.offset-e[o][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d={...e[o][1].end},g={...e[n][1].start};du(d,-c),du(g,c),i={type:c>1?"strongSequence":"emphasisSequence",start:d,end:{...e[o][1].end}},s={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:g},r={type:c>1?"strongText":"emphasisText",start:{...e[o][1].end},end:{...e[n][1].start}},a={type:c>1?"strong":"emphasis",start:{...i.start},end:{...s.end}},e[o][1].end={...i.start},e[n][1].start={...s.end},l=[],e[o][1].end.offset-e[o][1].start.offset&&(l=dt(l,[["enter",e[o][1],t],["exit",e[o][1],t]])),l=dt(l,[["enter",a,t],["enter",i,t],["exit",i,t],["enter",r,t]]),l=dt(l,Dc(t.parser.constructs.insideSpan.null,e.slice(o+1,n),t)),l=dt(l,[["exit",r,t],["enter",s,t],["exit",s,t],["exit",a,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=dt(l,[["enter",e[n][1],t],["exit",e[n][1],t]])):u=0,Dt(e,o-1,n-o+3,l),n=o+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Uh(e,t){const n=this.parser.constructs.attentionMarkers.null,o=this.previous,a=uu(o);let r;return i;function i(c){return r=c,e.enter("attentionSequence"),s(c)}function s(c){if(c===r)return e.consume(c),s;const l=e.exit("attentionSequence"),u=uu(c),d=!u||u===2&&a||n.includes(c),g=!a||a===2&&u||n.includes(o);return l._open=!!(r===42?d:d&&(a||!g)),l._close=!!(r===42?g:g&&(u||!d)),t(c)}}function du(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Vh={name:"autolink",tokenize:qh};function qh(e,t,n){let o=0;return a;function a(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),r}function r(p){return St(p)?(e.consume(p),i):p===64?n(p):l(p)}function i(p){return p===43||p===45||p===46||ot(p)?(o=1,s(p)):l(p)}function s(p){return p===58?(e.consume(p),o=0,c):(p===43||p===45||p===46||ot(p))&&o++<32?(e.consume(p),s):(o=0,l(p))}function c(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||Ts(p)?n(p):(e.consume(p),c)}function l(p){return p===64?(e.consume(p),u):Bh(p)?(e.consume(p),l):n(p)}function u(p){return ot(p)?d(p):n(p)}function d(p){return p===46?(e.consume(p),o=0,u):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):g(p)}function g(p){if((p===45||ot(p))&&o++<63){const w=p===45?g:d;return e.consume(p),w}return n(p)}}const Fr={partial:!0,tokenize:Jh};function Jh(e,t,n){return o;function o(r){return ne(r)?ue(e,a,"linePrefix")(r):a(r)}function a(r){return r===null||H(r)?t(r):n(r)}}const fp={continuation:{tokenize:$h},exit:Kh,name:"blockQuote",tokenize:Qh};function Qh(e,t,n){const o=this;return a;function a(i){if(i===62){const s=o.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(i),e.exit("blockQuoteMarker"),r}return n(i)}function r(i){return ne(i)?(e.enter("blockQuotePrefixWhitespace"),e.consume(i),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(i))}}function $h(e,t,n){const o=this;return a;function a(i){return ne(i)?ue(e,r,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(i):r(i)}function r(i){return e.attempt(fp,t,n)(i)}}function Kh(e){e.exit("blockQuote")}const yp={name:"characterEscape",tokenize:Xh};function Xh(e,t,n){return o;function o(r){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(r),e.exit("escapeMarker"),a}function a(r){return Nh(r)?(e.enter("characterEscapeValue"),e.consume(r),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(r)}}const wp={name:"characterReference",tokenize:Yh};function Yh(e,t,n){const o=this;let a=0,r,i;return s;function s(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),c}function c(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),r=31,i=ot,u(d))}function l(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),r=6,i=Lh,u):(e.enter("characterReferenceValue"),r=7,i=Is,u(d))}function u(d){if(d===59&&a){const g=e.exit("characterReferenceValue");return i===ot&&!Cc(o.sliceSerialize(g))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return i(d)&&a++<r?(e.consume(d),u):n(d)}}const pu={partial:!0,tokenize:e2},gu={concrete:!0,name:"codeFenced",tokenize:Zh};function Zh(e,t,n){const o=this,a={partial:!0,tokenize:x};let r=0,i=0,s;return c;function c(v){return l(v)}function l(v){const E=o.events[o.events.length-1];return r=E&&E[1].type==="linePrefix"?E[2].sliceSerialize(E[1],!0).length:0,s=v,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),u(v)}function u(v){return v===s?(i++,e.consume(v),u):i<3?n(v):(e.exit("codeFencedFenceSequence"),ne(v)?ue(e,d,"whitespace")(v):d(v))}function d(v){return v===null||H(v)?(e.exit("codeFencedFence"),o.interrupt?t(v):e.check(pu,k,T)(v)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),g(v))}function g(v){return v===null||H(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(v)):ne(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ue(e,p,"whitespace")(v)):v===96&&v===s?n(v):(e.consume(v),g)}function p(v){return v===null||H(v)?d(v):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(v))}function w(v){return v===null||H(v)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(v)):v===96&&v===s?n(v):(e.consume(v),w)}function k(v){return e.attempt(a,T,D)(v)}function D(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),m}function m(v){return r>0&&ne(v)?ue(e,h,"linePrefix",r+1)(v):h(v)}function h(v){return v===null||H(v)?e.check(pu,k,T)(v):(e.enter("codeFlowValue"),f(v))}function f(v){return v===null||H(v)?(e.exit("codeFlowValue"),h(v)):(e.consume(v),f)}function T(v){return e.exit("codeFenced"),t(v)}function x(v,E,C){let O=0;return z;function z(M){return v.enter("lineEnding"),v.consume(M),v.exit("lineEnding"),R}function R(M){return v.enter("codeFencedFence"),ne(M)?ue(v,A,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(M):A(M)}function A(M){return M===s?(v.enter("codeFencedFenceSequence"),G(M)):C(M)}function G(M){return M===s?(O++,v.consume(M),G):O>=i?(v.exit("codeFencedFenceSequence"),ne(M)?ue(v,N,"whitespace")(M):N(M)):C(M)}function N(M){return M===null||H(M)?(v.exit("codeFencedFence"),E(M)):C(M)}}}function e2(e,t,n){const o=this;return a;function a(i){return i===null?n(i):(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),r)}function r(i){return o.parser.lazy[o.now().line]?n(i):t(i)}}const hi={name:"codeIndented",tokenize:n2},t2={partial:!0,tokenize:o2};function n2(e,t,n){const o=this;return a;function a(l){return e.enter("codeIndented"),ue(e,r,"linePrefix",4+1)(l)}function r(l){const u=o.events[o.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?i(l):n(l)}function i(l){return l===null?c(l):H(l)?e.attempt(t2,i,c)(l):(e.enter("codeFlowValue"),s(l))}function s(l){return l===null||H(l)?(e.exit("codeFlowValue"),i(l)):(e.consume(l),s)}function c(l){return e.exit("codeIndented"),t(l)}}function o2(e,t,n){const o=this;return a;function a(i){return o.parser.lazy[o.now().line]?n(i):H(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),a):ue(e,r,"linePrefix",4+1)(i)}function r(i){const s=o.events[o.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(i):H(i)?a(i):n(i)}}const a2={name:"codeText",previous:i2,resolve:r2,tokenize:s2};function r2(e){let t=e.length-4,n=3,o,a;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(o=n;++o<t;)if(e[o][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(o=n-1,t++;++o<=t;)a===void 0?o!==t&&e[o][1].type!=="lineEnding"&&(a=o):(o===t||e[o][1].type==="lineEnding")&&(e[a][1].type="codeTextData",o!==a+2&&(e[a][1].end=e[o-1][1].end,e.splice(a+2,o-a-2),t-=o-a-2,o=a+2),a=void 0);return e}function i2(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function s2(e,t,n){let o=0,a,r;return i;function i(d){return e.enter("codeText"),e.enter("codeTextSequence"),s(d)}function s(d){return d===96?(e.consume(d),o++,s):(e.exit("codeTextSequence"),c(d))}function c(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),c):d===96?(r=e.enter("codeTextSequence"),a=0,u(d)):H(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),c):(e.enter("codeTextData"),l(d))}function l(d){return d===null||d===32||d===96||H(d)?(e.exit("codeTextData"),c(d)):(e.consume(d),l)}function u(d){return d===96?(e.consume(d),a++,u):a===o?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(r.type="codeTextData",l(d))}}class c2{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const o=n??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(t,o):t>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(t,n,o){const a=n||0;this.setCursor(Math.trunc(t));const r=this.right.splice(this.right.length-a,Number.POSITIVE_INFINITY);return o&&xo(this.left,o),r.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),xo(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),xo(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);xo(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);xo(this.left,n.reverse())}}}function xo(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function kp(e){const t={};let n=-1,o,a,r,i,s,c,l;const u=new c2(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(o=u.get(n),n&&o[1].type==="chunkFlow"&&u.get(n-1)[1].type==="listItemPrefix"&&(c=o[1]._tokenizer.events,r=0,r<c.length&&c[r][1].type==="lineEndingBlank"&&(r+=2),r<c.length&&c[r][1].type==="content"))for(;++r<c.length&&c[r][1].type!=="content";)c[r][1].type==="chunkText"&&(c[r][1]._isInFirstContentOfListItem=!0,r++);if(o[0]==="enter")o[1].contentType&&(Object.assign(t,l2(u,n)),n=t[n],l=!0);else if(o[1]._container){for(r=n,a=void 0;r--;)if(i=u.get(r),i[1].type==="lineEnding"||i[1].type==="lineEndingBlank")i[0]==="enter"&&(a&&(u.get(a)[1].type="lineEndingBlank"),i[1].type="lineEnding",a=r);else if(!(i[1].type==="linePrefix"||i[1].type==="listItemIndent"))break;a&&(o[1].end={...u.get(a)[1].start},s=u.slice(a,n),s.unshift(o),u.splice(a,n-a+1,s))}}return Dt(e,0,Number.POSITIVE_INFINITY,u.slice(0)),!l}function l2(e,t){const n=e.get(t)[1],o=e.get(t)[2];let a=t-1;const r=[];let i=n._tokenizer;i||(i=o.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(i._contentTypeTextTrailing=!0));const s=i.events,c=[],l={};let u,d,g=-1,p=n,w=0,k=0;const D=[k];for(;p;){for(;e.get(++a)[1]!==p;);r.push(a),p._tokenizer||(u=o.sliceStream(p),p.next||u.push(null),d&&i.defineSkip(p.start),p._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=!0),i.write(u),p._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++g<s.length;)s[g][0]==="exit"&&s[g-1][0]==="enter"&&s[g][1].type===s[g-1][1].type&&s[g][1].start.line!==s[g][1].end.line&&(k=g+1,D.push(k),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(i.events=[],p?(p._tokenizer=void 0,p.previous=void 0):D.pop(),g=D.length;g--;){const m=s.slice(D[g],D[g+1]),h=r.pop();c.push([h,h+m.length-1]),e.splice(h,2,m)}for(c.reverse(),g=-1;++g<c.length;)l[w+c[g][0]]=w+c[g][1],w+=c[g][1]-c[g][0]-1;return l}const u2={resolve:p2,tokenize:g2},d2={partial:!0,tokenize:m2};function p2(e){return kp(e),e}function g2(e,t){let n;return o;function o(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),a(s)}function a(s){return s===null?r(s):H(s)?e.check(d2,i,r)(s):(e.consume(s),a)}function r(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function i(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,a}}function m2(e,t,n){const o=this;return a;function a(i){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),ue(e,r,"linePrefix")}function r(i){if(i===null||H(i))return n(i);const s=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(i):e.interrupt(o.parser.constructs.flow,n,t)(i)}}function vp(e,t,n,o,a,r,i,s,c){const l=c||Number.POSITIVE_INFINITY;let u=0;return d;function d(m){return m===60?(e.enter(o),e.enter(a),e.enter(r),e.consume(m),e.exit(r),g):m===null||m===32||m===41||Ts(m)?n(m):(e.enter(o),e.enter(i),e.enter(s),e.enter("chunkString",{contentType:"string"}),k(m))}function g(m){return m===62?(e.enter(r),e.consume(m),e.exit(r),e.exit(a),e.exit(o),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===62?(e.exit("chunkString"),e.exit(s),g(m)):m===null||m===60||H(m)?n(m):(e.consume(m),m===92?w:p)}function w(m){return m===60||m===62||m===92?(e.consume(m),p):p(m)}function k(m){return!u&&(m===null||m===41||Ke(m))?(e.exit("chunkString"),e.exit(s),e.exit(i),e.exit(o),t(m)):u<l&&m===40?(e.consume(m),u++,k):m===41?(e.consume(m),u--,k):m===null||m===32||m===40||Ts(m)?n(m):(e.consume(m),m===92?D:k)}function D(m){return m===40||m===41||m===92?(e.consume(m),k):k(m)}}function bp(e,t,n,o,a,r){const i=this;let s=0,c;return l;function l(p){return e.enter(o),e.enter(a),e.consume(p),e.exit(a),e.enter(r),u}function u(p){return s>999||p===null||p===91||p===93&&!c||p===94&&!s&&"_hiddenFootnoteSupport"in i.parser.constructs?n(p):p===93?(e.exit(r),e.enter(a),e.consume(p),e.exit(a),e.exit(o),t):H(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===null||p===91||p===93||H(p)||s++>999?(e.exit("chunkString"),u(p)):(e.consume(p),c||(c=!ne(p)),p===92?g:d)}function g(p){return p===91||p===92||p===93?(e.consume(p),s++,d):d(p)}}function Tp(e,t,n,o,a,r){let i;return s;function s(g){return g===34||g===39||g===40?(e.enter(o),e.enter(a),e.consume(g),e.exit(a),i=g===40?41:g,c):n(g)}function c(g){return g===i?(e.enter(a),e.consume(g),e.exit(a),e.exit(o),t):(e.enter(r),l(g))}function l(g){return g===i?(e.exit(r),c(i)):g===null?n(g):H(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),ue(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),u(g))}function u(g){return g===i||g===null||H(g)?(e.exit("chunkString"),l(g)):(e.consume(g),g===92?d:u)}function d(g){return g===i||g===92?(e.consume(g),u):u(g)}}function Wo(e,t){let n;return o;function o(a){return H(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n=!0,o):ne(a)?ue(e,o,n?"linePrefix":"lineSuffix")(a):t(a)}}const _2={name:"definition",tokenize:f2},h2={partial:!0,tokenize:y2};function f2(e,t,n){const o=this;let a;return r;function r(p){return e.enter("definition"),i(p)}function i(p){return bp.call(o,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function s(p){return a=no(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),c):n(p)}function c(p){return Ke(p)?Wo(e,l)(p):l(p)}function l(p){return vp(e,u,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function u(p){return e.attempt(h2,d,d)(p)}function d(p){return ne(p)?ue(e,g,"whitespace")(p):g(p)}function g(p){return p===null||H(p)?(e.exit("definition"),o.parser.defined.push(a),t(p)):n(p)}}function y2(e,t,n){return o;function o(s){return Ke(s)?Wo(e,a)(s):n(s)}function a(s){return Tp(e,r,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function r(s){return ne(s)?ue(e,i,"whitespace")(s):i(s)}function i(s){return s===null||H(s)?t(s):n(s)}}const w2={name:"hardBreakEscape",tokenize:k2};function k2(e,t,n){return o;function o(r){return e.enter("hardBreakEscape"),e.consume(r),a}function a(r){return H(r)?(e.exit("hardBreakEscape"),t(r)):n(r)}}const v2={name:"headingAtx",resolve:b2,tokenize:T2};function b2(e,t){let n=e.length-2,o=3,a,r;return e[o][1].type==="whitespace"&&(o+=2),n-2>o&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(o===n-1||n-4>o&&e[n-2][1].type==="whitespace")&&(n-=o+1===n?2:4),n>o&&(a={type:"atxHeadingText",start:e[o][1].start,end:e[n][1].end},r={type:"chunkText",start:e[o][1].start,end:e[n][1].end,contentType:"text"},Dt(e,o,n-o+1,[["enter",a,t],["enter",r,t],["exit",r,t],["exit",a,t]])),e}function T2(e,t,n){let o=0;return a;function a(u){return e.enter("atxHeading"),r(u)}function r(u){return e.enter("atxHeadingSequence"),i(u)}function i(u){return u===35&&o++<6?(e.consume(u),i):u===null||Ke(u)?(e.exit("atxHeadingSequence"),s(u)):n(u)}function s(u){return u===35?(e.enter("atxHeadingSequence"),c(u)):u===null||H(u)?(e.exit("atxHeading"),t(u)):ne(u)?ue(e,s,"whitespace")(u):(e.enter("atxHeadingText"),l(u))}function c(u){return u===35?(e.consume(u),c):(e.exit("atxHeadingSequence"),s(u))}function l(u){return u===null||u===35||Ke(u)?(e.exit("atxHeadingText"),s(u)):(e.consume(u),l)}}const I2=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],mu=["pre","script","style","textarea"],A2={concrete:!0,name:"htmlFlow",resolveTo:E2,tokenize:S2},x2={partial:!0,tokenize:C2},j2={partial:!0,tokenize:P2};function E2(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function S2(e,t,n){const o=this;let a,r,i,s,c;return l;function l(y){return u(y)}function u(y){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(y),d}function d(y){return y===33?(e.consume(y),g):y===47?(e.consume(y),r=!0,k):y===63?(e.consume(y),a=3,o.interrupt?t:_):St(y)?(e.consume(y),i=String.fromCharCode(y),D):n(y)}function g(y){return y===45?(e.consume(y),a=2,p):y===91?(e.consume(y),a=5,s=0,w):St(y)?(e.consume(y),a=4,o.interrupt?t:_):n(y)}function p(y){return y===45?(e.consume(y),o.interrupt?t:_):n(y)}function w(y){const ye="CDATA[";return y===ye.charCodeAt(s++)?(e.consume(y),s===ye.length?o.interrupt?t:A:w):n(y)}function k(y){return St(y)?(e.consume(y),i=String.fromCharCode(y),D):n(y)}function D(y){if(y===null||y===47||y===62||Ke(y)){const ye=y===47,Ye=i.toLowerCase();return!ye&&!r&&mu.includes(Ye)?(a=1,o.interrupt?t(y):A(y)):I2.includes(i.toLowerCase())?(a=6,ye?(e.consume(y),m):o.interrupt?t(y):A(y)):(a=7,o.interrupt&&!o.parser.lazy[o.now().line]?n(y):r?h(y):f(y))}return y===45||ot(y)?(e.consume(y),i+=String.fromCharCode(y),D):n(y)}function m(y){return y===62?(e.consume(y),o.interrupt?t:A):n(y)}function h(y){return ne(y)?(e.consume(y),h):z(y)}function f(y){return y===47?(e.consume(y),z):y===58||y===95||St(y)?(e.consume(y),T):ne(y)?(e.consume(y),f):z(y)}function T(y){return y===45||y===46||y===58||y===95||ot(y)?(e.consume(y),T):x(y)}function x(y){return y===61?(e.consume(y),v):ne(y)?(e.consume(y),x):f(y)}function v(y){return y===null||y===60||y===61||y===62||y===96?n(y):y===34||y===39?(e.consume(y),c=y,E):ne(y)?(e.consume(y),v):C(y)}function E(y){return y===c?(e.consume(y),c=null,O):y===null||H(y)?n(y):(e.consume(y),E)}function C(y){return y===null||y===34||y===39||y===47||y===60||y===61||y===62||y===96||Ke(y)?x(y):(e.consume(y),C)}function O(y){return y===47||y===62||ne(y)?f(y):n(y)}function z(y){return y===62?(e.consume(y),R):n(y)}function R(y){return y===null||H(y)?A(y):ne(y)?(e.consume(y),R):n(y)}function A(y){return y===45&&a===2?(e.consume(y),V):y===60&&a===1?(e.consume(y),re):y===62&&a===4?(e.consume(y),Q):y===63&&a===3?(e.consume(y),_):y===93&&a===5?(e.consume(y),W):H(y)&&(a===6||a===7)?(e.exit("htmlFlowData"),e.check(x2,oe,G)(y)):y===null||H(y)?(e.exit("htmlFlowData"),G(y)):(e.consume(y),A)}function G(y){return e.check(j2,N,oe)(y)}function N(y){return e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),M}function M(y){return y===null||H(y)?G(y):(e.enter("htmlFlowData"),A(y))}function V(y){return y===45?(e.consume(y),_):A(y)}function re(y){return y===47?(e.consume(y),i="",P):A(y)}function P(y){if(y===62){const ye=i.toLowerCase();return mu.includes(ye)?(e.consume(y),Q):A(y)}return St(y)&&i.length<8?(e.consume(y),i+=String.fromCharCode(y),P):A(y)}function W(y){return y===93?(e.consume(y),_):A(y)}function _(y){return y===62?(e.consume(y),Q):y===45&&a===2?(e.consume(y),_):A(y)}function Q(y){return y===null||H(y)?(e.exit("htmlFlowData"),oe(y)):(e.consume(y),Q)}function oe(y){return e.exit("htmlFlow"),t(y)}}function P2(e,t,n){const o=this;return a;function a(i){return H(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),r):n(i)}function r(i){return o.parser.lazy[o.now().line]?n(i):t(i)}}function C2(e,t,n){return o;function o(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),e.attempt(Fr,t,n)}}const D2={name:"htmlText",tokenize:B2};function B2(e,t,n){const o=this;let a,r,i;return s;function s(_){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(_),c}function c(_){return _===33?(e.consume(_),l):_===47?(e.consume(_),x):_===63?(e.consume(_),f):St(_)?(e.consume(_),C):n(_)}function l(_){return _===45?(e.consume(_),u):_===91?(e.consume(_),r=0,w):St(_)?(e.consume(_),h):n(_)}function u(_){return _===45?(e.consume(_),p):n(_)}function d(_){return _===null?n(_):_===45?(e.consume(_),g):H(_)?(i=d,re(_)):(e.consume(_),d)}function g(_){return _===45?(e.consume(_),p):d(_)}function p(_){return _===62?V(_):_===45?g(_):d(_)}function w(_){const Q="CDATA[";return _===Q.charCodeAt(r++)?(e.consume(_),r===Q.length?k:w):n(_)}function k(_){return _===null?n(_):_===93?(e.consume(_),D):H(_)?(i=k,re(_)):(e.consume(_),k)}function D(_){return _===93?(e.consume(_),m):k(_)}function m(_){return _===62?V(_):_===93?(e.consume(_),m):k(_)}function h(_){return _===null||_===62?V(_):H(_)?(i=h,re(_)):(e.consume(_),h)}function f(_){return _===null?n(_):_===63?(e.consume(_),T):H(_)?(i=f,re(_)):(e.consume(_),f)}function T(_){return _===62?V(_):f(_)}function x(_){return St(_)?(e.consume(_),v):n(_)}function v(_){return _===45||ot(_)?(e.consume(_),v):E(_)}function E(_){return H(_)?(i=E,re(_)):ne(_)?(e.consume(_),E):V(_)}function C(_){return _===45||ot(_)?(e.consume(_),C):_===47||_===62||Ke(_)?O(_):n(_)}function O(_){return _===47?(e.consume(_),V):_===58||_===95||St(_)?(e.consume(_),z):H(_)?(i=O,re(_)):ne(_)?(e.consume(_),O):V(_)}function z(_){return _===45||_===46||_===58||_===95||ot(_)?(e.consume(_),z):R(_)}function R(_){return _===61?(e.consume(_),A):H(_)?(i=R,re(_)):ne(_)?(e.consume(_),R):O(_)}function A(_){return _===null||_===60||_===61||_===62||_===96?n(_):_===34||_===39?(e.consume(_),a=_,G):H(_)?(i=A,re(_)):ne(_)?(e.consume(_),A):(e.consume(_),N)}function G(_){return _===a?(e.consume(_),a=void 0,M):_===null?n(_):H(_)?(i=G,re(_)):(e.consume(_),G)}function N(_){return _===null||_===34||_===39||_===60||_===61||_===96?n(_):_===47||_===62||Ke(_)?O(_):(e.consume(_),N)}function M(_){return _===47||_===62||Ke(_)?O(_):n(_)}function V(_){return _===62?(e.consume(_),e.exit("htmlTextData"),e.exit("htmlText"),t):n(_)}function re(_){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),P}function P(_){return ne(_)?ue(e,W,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):W(_)}function W(_){return e.enter("htmlTextData"),i(_)}}const Bc={name:"labelEnd",resolveAll:M2,resolveTo:R2,tokenize:F2},L2={tokenize:O2},N2={tokenize:G2},z2={tokenize:W2};function M2(e){let t=-1;const n=[];for(;++t<e.length;){const o=e[t][1];if(n.push(e[t]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const a=o.type==="labelImage"?4:2;o.type="data",t+=a}}return e.length!==n.length&&Dt(e,0,e.length,n),e}function R2(e,t){let n=e.length,o=0,a,r,i,s;for(;n--;)if(a=e[n][1],r){if(a.type==="link"||a.type==="labelLink"&&a._inactive)break;e[n][0]==="enter"&&a.type==="labelLink"&&(a._inactive=!0)}else if(i){if(e[n][0]==="enter"&&(a.type==="labelImage"||a.type==="labelLink")&&!a._balanced&&(r=n,a.type!=="labelLink")){o=2;break}}else a.type==="labelEnd"&&(i=n);const c={type:e[r][1].type==="labelLink"?"link":"image",start:{...e[r][1].start},end:{...e[e.length-1][1].end}},l={type:"label",start:{...e[r][1].start},end:{...e[i][1].end}},u={type:"labelText",start:{...e[r+o+2][1].end},end:{...e[i-2][1].start}};return s=[["enter",c,t],["enter",l,t]],s=dt(s,e.slice(r+1,r+o+3)),s=dt(s,[["enter",u,t]]),s=dt(s,Dc(t.parser.constructs.insideSpan.null,e.slice(r+o+4,i-3),t)),s=dt(s,[["exit",u,t],e[i-2],e[i-1],["exit",l,t]]),s=dt(s,e.slice(i+1)),s=dt(s,[["exit",c,t]]),Dt(e,r,e.length,s),e}function F2(e,t,n){const o=this;let a=o.events.length,r,i;for(;a--;)if((o.events[a][1].type==="labelImage"||o.events[a][1].type==="labelLink")&&!o.events[a][1]._balanced){r=o.events[a][1];break}return s;function s(g){return r?r._inactive?d(g):(i=o.parser.defined.includes(no(o.sliceSerialize({start:r.end,end:o.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(g),e.exit("labelMarker"),e.exit("labelEnd"),c):n(g)}function c(g){return g===40?e.attempt(L2,u,i?u:d)(g):g===91?e.attempt(N2,u,i?l:d)(g):i?u(g):d(g)}function l(g){return e.attempt(z2,u,d)(g)}function u(g){return t(g)}function d(g){return r._balanced=!0,n(g)}}function O2(e,t,n){return o;function o(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),a}function a(d){return Ke(d)?Wo(e,r)(d):r(d)}function r(d){return d===41?u(d):vp(e,i,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function i(d){return Ke(d)?Wo(e,c)(d):u(d)}function s(d){return n(d)}function c(d){return d===34||d===39||d===40?Tp(e,l,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):u(d)}function l(d){return Ke(d)?Wo(e,u)(d):u(d)}function u(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function G2(e,t,n){const o=this;return a;function a(s){return bp.call(o,e,r,i,"reference","referenceMarker","referenceString")(s)}function r(s){return o.parser.defined.includes(no(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function i(s){return n(s)}}function W2(e,t,n){return o;function o(r){return e.enter("reference"),e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),a}function a(r){return r===93?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),t):n(r)}}const H2={name:"labelStartImage",resolveAll:Bc.resolveAll,tokenize:U2};function U2(e,t,n){const o=this;return a;function a(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),r}function r(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),i):n(s)}function i(s){return s===94&&"_hiddenFootnoteSupport"in o.parser.constructs?n(s):t(s)}}const V2={name:"labelStartLink",resolveAll:Bc.resolveAll,tokenize:q2};function q2(e,t,n){const o=this;return a;function a(i){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(i),e.exit("labelMarker"),e.exit("labelLink"),r}function r(i){return i===94&&"_hiddenFootnoteSupport"in o.parser.constructs?n(i):t(i)}}const fi={name:"lineEnding",tokenize:J2};function J2(e,t){return n;function n(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),ue(e,t,"linePrefix")}}const Ja={name:"thematicBreak",tokenize:Q2};function Q2(e,t,n){let o=0,a;return r;function r(l){return e.enter("thematicBreak"),i(l)}function i(l){return a=l,s(l)}function s(l){return l===a?(e.enter("thematicBreakSequence"),c(l)):o>=3&&(l===null||H(l))?(e.exit("thematicBreak"),t(l)):n(l)}function c(l){return l===a?(e.consume(l),o++,c):(e.exit("thematicBreakSequence"),ne(l)?ue(e,s,"whitespace")(l):s(l))}}const Ue={continuation:{tokenize:Y2},exit:ef,name:"list",tokenize:X2},$2={partial:!0,tokenize:tf},K2={partial:!0,tokenize:Z2};function X2(e,t,n){const o=this,a=o.events[o.events.length-1];let r=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0,i=0;return s;function s(p){const w=o.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!o.containerState.marker||p===o.containerState.marker:Is(p)){if(o.containerState.type||(o.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Ja,n,l)(p):l(p);if(!o.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(p)}return n(p)}function c(p){return Is(p)&&++i<10?(e.consume(p),c):(!o.interrupt||i<2)&&(o.containerState.marker?p===o.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),l(p)):n(p)}function l(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||p,e.check(Fr,o.interrupt?n:u,e.attempt($2,g,d))}function u(p){return o.containerState.initialBlankLine=!0,r++,g(p)}function d(p){return ne(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),g):n(p)}function g(p){return o.containerState.size=r+o.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function Y2(e,t,n){const o=this;return o.containerState._closeFlow=void 0,e.check(Fr,a,r);function a(s){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,ue(e,t,"listItemIndent",o.containerState.size+1)(s)}function r(s){return o.containerState.furtherBlankLines||!ne(s)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,i(s)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,e.attempt(K2,t,i)(s))}function i(s){return o.containerState._closeFlow=!0,o.interrupt=void 0,ue(e,e.attempt(Ue,t,n),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function Z2(e,t,n){const o=this;return ue(e,a,"listItemIndent",o.containerState.size+1);function a(r){const i=o.events[o.events.length-1];return i&&i[1].type==="listItemIndent"&&i[2].sliceSerialize(i[1],!0).length===o.containerState.size?t(r):n(r)}}function ef(e){e.exit(this.containerState.type)}function tf(e,t,n){const o=this;return ue(e,a,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function a(r){const i=o.events[o.events.length-1];return!ne(r)&&i&&i[1].type==="listItemPrefixWhitespace"?t(r):n(r)}}const _u={name:"setextUnderline",resolveTo:nf,tokenize:of};function nf(e,t){let n=e.length,o,a,r;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){o=n;break}e[n][1].type==="paragraph"&&(a=n)}else e[n][1].type==="content"&&e.splice(n,1),!r&&e[n][1].type==="definition"&&(r=n);const i={type:"setextHeading",start:{...e[o][1].start},end:{...e[e.length-1][1].end}};return e[a][1].type="setextHeadingText",r?(e.splice(a,0,["enter",i,t]),e.splice(r+1,0,["exit",e[o][1],t]),e[o][1].end={...e[r][1].end}):e[o][1]=i,e.push(["exit",i,t]),e}function of(e,t,n){const o=this;let a;return r;function r(l){let u=o.events.length,d;for(;u--;)if(o.events[u][1].type!=="lineEnding"&&o.events[u][1].type!=="linePrefix"&&o.events[u][1].type!=="content"){d=o.events[u][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||d)?(e.enter("setextHeadingLine"),a=l,i(l)):n(l)}function i(l){return e.enter("setextHeadingLineSequence"),s(l)}function s(l){return l===a?(e.consume(l),s):(e.exit("setextHeadingLineSequence"),ne(l)?ue(e,c,"lineSuffix")(l):c(l))}function c(l){return l===null||H(l)?(e.exit("setextHeadingLine"),t(l)):n(l)}}const af={tokenize:rf};function rf(e){const t=this,n=e.attempt(Fr,o,e.attempt(this.parser.constructs.flowInitial,a,ue(e,e.attempt(this.parser.constructs.flow,a,e.attempt(u2,a)),"linePrefix")));return n;function o(r){if(r===null){e.consume(r);return}return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function a(r){if(r===null){e.consume(r);return}return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const sf={resolveAll:Ap()},cf=Ip("string"),lf=Ip("text");function Ip(e){return{resolveAll:Ap(e==="text"?uf:void 0),tokenize:t};function t(n){const o=this,a=this.parser.constructs[e],r=n.attempt(a,i,s);return i;function i(u){return l(u)?r(u):s(u)}function s(u){if(u===null){n.consume(u);return}return n.enter("data"),n.consume(u),c}function c(u){return l(u)?(n.exit("data"),r(u)):(n.consume(u),c)}function l(u){if(u===null)return!0;const d=a[u];let g=-1;if(d)for(;++g<d.length;){const p=d[g];if(!p.previous||p.previous.call(o,o.previous))return!0}return!1}}}function Ap(e){return t;function t(n,o){let a=-1,r;for(;++a<=n.length;)r===void 0?n[a]&&n[a][1].type==="data"&&(r=a,a++):(!n[a]||n[a][1].type!=="data")&&(a!==r+2&&(n[r][1].end=n[a-1][1].end,n.splice(r+2,a-r-2),a=r+2),r=void 0);return e?e(n,o):n}}function uf(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const o=e[n-1][1],a=t.sliceStream(o);let r=a.length,i=-1,s=0,c;for(;r--;){const l=a[r];if(typeof l=="string"){for(i=l.length;l.charCodeAt(i-1)===32;)s++,i--;if(i)break;i=-1}else if(l===-2)c=!0,s++;else if(l!==-1){r++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const l={type:n===e.length||c||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:r?i:o.start._bufferIndex+i,_index:o.start._index+r,line:o.end.line,column:o.end.column-s,offset:o.end.offset-s},end:{...o.end}};o.end={...l.start},o.start.offset===o.end.offset?Object.assign(o,l):(e.splice(n,0,["enter",l,t],["exit",l,t]),n+=2)}n++}return e}const df={42:Ue,43:Ue,45:Ue,48:Ue,49:Ue,50:Ue,51:Ue,52:Ue,53:Ue,54:Ue,55:Ue,56:Ue,57:Ue,62:fp},pf={91:_2},gf={[-2]:hi,[-1]:hi,32:hi},mf={35:v2,42:Ja,45:[_u,Ja],60:A2,61:_u,95:Ja,96:gu,126:gu},_f={38:wp,92:yp},hf={[-5]:fi,[-4]:fi,[-3]:fi,33:H2,38:wp,42:As,60:[Vh,D2],91:V2,92:[w2,yp],93:Bc,95:As,96:a2},ff={null:[As,sf]},yf={null:[42,95]},wf={null:[]},kf=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:yf,contentInitial:pf,disable:wf,document:df,flow:mf,flowInitial:gf,insideSpan:ff,string:_f,text:hf},Symbol.toStringTag,{value:"Module"}));function vf(e,t,n){let o={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const a={},r=[];let i=[],s=[];const c={attempt:E(x),check:E(v),consume:h,enter:f,exit:T,interrupt:E(v,{interrupt:!0})},l={code:null,containerState:{},defineSkip:k,events:[],now:w,parser:e,previous:null,sliceSerialize:g,sliceStream:p,write:d};let u=t.tokenize.call(l,c);return t.resolveAll&&r.push(t),l;function d(R){return i=dt(i,R),D(),i[i.length-1]!==null?[]:(C(t,0),l.events=Dc(r,l.events,l),l.events)}function g(R,A){return Tf(p(R),A)}function p(R){return bf(i,R)}function w(){const{_bufferIndex:R,_index:A,line:G,column:N,offset:M}=o;return{_bufferIndex:R,_index:A,line:G,column:N,offset:M}}function k(R){a[R.line]=R.column,z()}function D(){let R;for(;o._index<i.length;){const A=i[o._index];if(typeof A=="string")for(R=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===R&&o._bufferIndex<A.length;)m(A.charCodeAt(o._bufferIndex));else m(A)}}function m(R){u=u(R)}function h(R){H(R)?(o.line++,o.column=1,o.offset+=R===-3?2:1,z()):R!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===i[o._index].length&&(o._bufferIndex=-1,o._index++)),l.previous=R}function f(R,A){const G=A||{};return G.type=R,G.start=w(),l.events.push(["enter",G,l]),s.push(G),G}function T(R){const A=s.pop();return A.end=w(),l.events.push(["exit",A,l]),A}function x(R,A){C(R,A.from)}function v(R,A){A.restore()}function E(R,A){return G;function G(N,M,V){let re,P,W,_;return Array.isArray(N)?oe(N):"tokenize"in N?oe([N]):Q(N);function Q(ie){return ct;function ct(ht){const L=ht!==null&&ie[ht],U=ht!==null&&ie.null,Z=[...Array.isArray(L)?L:L?[L]:[],...Array.isArray(U)?U:U?[U]:[]];return oe(Z)(ht)}}function oe(ie){return re=ie,P=0,ie.length===0?V:y(ie[P])}function y(ie){return ct;function ct(ht){return _=O(),W=ie,ie.partial||(l.currentConstruct=ie),ie.name&&l.parser.constructs.disable.null.includes(ie.name)?Ye():ie.tokenize.call(A?Object.assign(Object.create(l),A):l,c,ye,Ye)(ht)}}function ye(ie){return R(W,_),M}function Ye(ie){return _.restore(),++P<re.length?y(re[P]):V}}}function C(R,A){R.resolveAll&&!r.includes(R)&&r.push(R),R.resolve&&Dt(l.events,A,l.events.length-A,R.resolve(l.events.slice(A),l)),R.resolveTo&&(l.events=R.resolveTo(l.events,l))}function O(){const R=w(),A=l.previous,G=l.currentConstruct,N=l.events.length,M=Array.from(s);return{from:N,restore:V};function V(){o=R,l.previous=A,l.currentConstruct=G,l.events.length=N,s=M,z()}}function z(){o.line in a&&o.column<2&&(o.column=a[o.line],o.offset+=a[o.line]-1)}}function bf(e,t){const n=t.start._index,o=t.start._bufferIndex,a=t.end._index,r=t.end._bufferIndex;let i;if(n===a)i=[e[n].slice(o,r)];else{if(i=e.slice(n,a),o>-1){const s=i[0];typeof s=="string"?i[0]=s.slice(o):i.shift()}r>0&&i.push(e[a].slice(0,r))}return i}function Tf(e,t){let n=-1;const o=[];let a;for(;++n<e.length;){const r=e[n];let i;if(typeof r=="string")i=r;else switch(r){case-5:{i="\r";break}case-4:{i=`
`;break}case-3:{i=`\r
`;break}case-2:{i=t?" ":"	";break}case-1:{if(!t&&a)continue;i=" ";break}default:i=String.fromCharCode(r)}a=r===-2,o.push(i)}return o.join("")}function If(e){const o={constructs:Ph([kf,...(e||{}).extensions||[]]),content:a(Rh),defined:[],document:a(Oh),flow:a(af),lazy:{},string:a(cf),text:a(lf)};return o;function a(r){return i;function i(s){return vf(o,r,s)}}}function Af(e){for(;!kp(e););return e}const hu=/[\0\t\n\r]/g;function xf(){let e=1,t="",n=!0,o;return a;function a(r,i,s){const c=[];let l,u,d,g,p;for(r=t+(typeof r=="string"?r.toString():new TextDecoder(i||void 0).decode(r)),d=0,t="",n&&(r.charCodeAt(0)===65279&&d++,n=void 0);d<r.length;){if(hu.lastIndex=d,l=hu.exec(r),g=l&&l.index!==void 0?l.index:r.length,p=r.charCodeAt(g),!l){t=r.slice(d);break}if(p===10&&d===g&&o)c.push(-3),o=void 0;else switch(o&&(c.push(-5),o=void 0),d<g&&(c.push(r.slice(d,g)),e+=g-d),p){case 0:{c.push(65533),e++;break}case 9:{for(u=Math.ceil(e/4)*4,c.push(-2);e++<u;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:o=!0,e=1}d=g+1}return s&&(o&&c.push(-5),t&&c.push(t),c.push(null)),c}}const jf=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ef(e){return e.replace(jf,Sf)}function Sf(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const a=n.charCodeAt(1),r=a===120||a===88;return hp(n.slice(r?2:1),r?16:10)}return Cc(n)||e}const xp={}.hasOwnProperty;function Pf(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Cf(n)(Af(If(n).document().write(xf()(e,t,!0))))}function Cf(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:r(_n),autolinkProtocol:O,autolinkEmail:O,atxHeading:r(be),blockQuote:r(U),characterEscape:O,characterReference:O,codeFenced:r(Z),codeFencedFenceInfo:i,codeFencedFenceMeta:i,codeIndented:r(Z,i),codeText:r(te,i),codeTextData:O,data:O,codeFlowValue:O,definition:r(K),definitionDestinationString:i,definitionLabelString:i,definitionTitleString:i,emphasis:r($),hardBreakEscape:r(De),hardBreakTrailing:r(De),htmlFlow:r(He,i),htmlFlowData:O,htmlText:r(He,i),htmlTextData:O,image:r(Bt),label:i,link:r(_n),listItem:r(Rp),listItemValue:g,listOrdered:r(Be,d),listUnordered:r(Be),paragraph:r(Fp),reference:y,referenceString:i,resourceDestinationString:i,resourceTitleString:i,setextHeading:r(be),strong:r(Op),thematicBreak:r(Wp)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:L,autolinkProtocol:ht,blockQuote:c(),characterEscapeValue:z,characterReferenceMarkerHexadecimal:Ye,characterReferenceMarkerNumeric:Ye,characterReferenceValue:ie,characterReference:ct,codeFenced:c(D),codeFencedFence:k,codeFencedFenceInfo:p,codeFencedFenceMeta:w,codeFlowValue:z,codeIndented:c(m),codeText:c(M),codeTextData:z,data:z,definition:c(),definitionDestinationString:T,definitionLabelString:h,definitionTitleString:f,emphasis:c(),hardBreakEscape:c(A),hardBreakTrailing:c(A),htmlFlow:c(G),htmlFlowData:z,htmlText:c(N),htmlTextData:z,image:c(re),label:W,labelText:P,lineEnding:R,link:c(V),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ye,resourceDestinationString:_,resourceTitleString:Q,resource:oe,setextHeading:c(C),setextHeadingLineSequence:E,setextHeadingText:v,strong:c(),thematicBreak:c()}};jp(t,(e||{}).mdastExtensions||[]);const n={};return o;function o(I){let B={type:"root",children:[]};const q={stack:[B],tokenStack:[],config:t,enter:s,exit:l,buffer:i,resume:u,data:n},Y=[];let se=-1;for(;++se<I.length;)if(I[se][1].type==="listOrdered"||I[se][1].type==="listUnordered")if(I[se][0]==="enter")Y.push(se);else{const ft=Y.pop();se=a(I,ft,se)}for(se=-1;++se<I.length;){const ft=t[I[se][0]];xp.call(ft,I[se][1].type)&&ft[I[se][1].type].call(Object.assign({sliceSerialize:I[se][2].sliceSerialize},q),I[se][1])}if(q.tokenStack.length>0){const ft=q.tokenStack[q.tokenStack.length-1];(ft[1]||fu).call(q,void 0,ft[0])}for(B.position={start:Jt(I.length>0?I[0][1].start:{line:1,column:1,offset:0}),end:Jt(I.length>0?I[I.length-2][1].end:{line:1,column:1,offset:0})},se=-1;++se<t.transforms.length;)B=t.transforms[se](B)||B;return B}function a(I,B,q){let Y=B-1,se=-1,ft=!1,hn,Lt,ho,fo;for(;++Y<=q;){const Ze=I[Y];switch(Ze[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ze[0]==="enter"?se++:se--,fo=void 0;break}case"lineEndingBlank":{Ze[0]==="enter"&&(hn&&!fo&&!se&&!ho&&(ho=Y),fo=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:fo=void 0}if(!se&&Ze[0]==="enter"&&Ze[1].type==="listItemPrefix"||se===-1&&Ze[0]==="exit"&&(Ze[1].type==="listUnordered"||Ze[1].type==="listOrdered")){if(hn){let Bn=Y;for(Lt=void 0;Bn--;){const Nt=I[Bn];if(Nt[1].type==="lineEnding"||Nt[1].type==="lineEndingBlank"){if(Nt[0]==="exit")continue;Lt&&(I[Lt][1].type="lineEndingBlank",ft=!0),Nt[1].type="lineEnding",Lt=Bn}else if(!(Nt[1].type==="linePrefix"||Nt[1].type==="blockQuotePrefix"||Nt[1].type==="blockQuotePrefixWhitespace"||Nt[1].type==="blockQuoteMarker"||Nt[1].type==="listItemIndent"))break}ho&&(!Lt||ho<Lt)&&(hn._spread=!0),hn.end=Object.assign({},Lt?I[Lt][1].start:Ze[1].end),I.splice(Lt||Y,0,["exit",hn,Ze[2]]),Y++,q++}if(Ze[1].type==="listItemPrefix"){const Bn={type:"listItem",_spread:!1,start:Object.assign({},Ze[1].start),end:void 0};hn=Bn,I.splice(Y,0,["enter",Bn,Ze[2]]),Y++,q++,ho=void 0,fo=!0}}}return I[B][1]._spread=ft,q}function r(I,B){return q;function q(Y){s.call(this,I(Y),Y),B&&B.call(this,Y)}}function i(){this.stack.push({type:"fragment",children:[]})}function s(I,B,q){this.stack[this.stack.length-1].children.push(I),this.stack.push(I),this.tokenStack.push([B,q||void 0]),I.position={start:Jt(B.start),end:void 0}}function c(I){return B;function B(q){I&&I.call(this,q),l.call(this,q)}}function l(I,B){const q=this.stack.pop(),Y=this.tokenStack.pop();if(Y)Y[0].type!==I.type&&(B?B.call(this,I,Y[0]):(Y[1]||fu).call(this,I,Y[0]));else throw new Error("Cannot close `"+I.type+"` ("+Go({start:I.start,end:I.end})+"): it’s not open");q.position.end=Jt(I.end)}function u(){return Eh(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function g(I){if(this.data.expectingFirstListItemValue){const B=this.stack[this.stack.length-2];B.start=Number.parseInt(this.sliceSerialize(I),10),this.data.expectingFirstListItemValue=void 0}}function p(){const I=this.resume(),B=this.stack[this.stack.length-1];B.lang=I}function w(){const I=this.resume(),B=this.stack[this.stack.length-1];B.meta=I}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function D(){const I=this.resume(),B=this.stack[this.stack.length-1];B.value=I.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const I=this.resume(),B=this.stack[this.stack.length-1];B.value=I.replace(/(\r?\n|\r)$/g,"")}function h(I){const B=this.resume(),q=this.stack[this.stack.length-1];q.label=B,q.identifier=no(this.sliceSerialize(I)).toLowerCase()}function f(){const I=this.resume(),B=this.stack[this.stack.length-1];B.title=I}function T(){const I=this.resume(),B=this.stack[this.stack.length-1];B.url=I}function x(I){const B=this.stack[this.stack.length-1];if(!B.depth){const q=this.sliceSerialize(I).length;B.depth=q}}function v(){this.data.setextHeadingSlurpLineEnding=!0}function E(I){const B=this.stack[this.stack.length-1];B.depth=this.sliceSerialize(I).codePointAt(0)===61?1:2}function C(){this.data.setextHeadingSlurpLineEnding=void 0}function O(I){const q=this.stack[this.stack.length-1].children;let Y=q[q.length-1];(!Y||Y.type!=="text")&&(Y=Gp(),Y.position={start:Jt(I.start),end:void 0},q.push(Y)),this.stack.push(Y)}function z(I){const B=this.stack.pop();B.value+=this.sliceSerialize(I),B.position.end=Jt(I.end)}function R(I){const B=this.stack[this.stack.length-1];if(this.data.atHardBreak){const q=B.children[B.children.length-1];q.position.end=Jt(I.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(B.type)&&(O.call(this,I),z.call(this,I))}function A(){this.data.atHardBreak=!0}function G(){const I=this.resume(),B=this.stack[this.stack.length-1];B.value=I}function N(){const I=this.resume(),B=this.stack[this.stack.length-1];B.value=I}function M(){const I=this.resume(),B=this.stack[this.stack.length-1];B.value=I}function V(){const I=this.stack[this.stack.length-1];if(this.data.inReference){const B=this.data.referenceType||"shortcut";I.type+="Reference",I.referenceType=B,delete I.url,delete I.title}else delete I.identifier,delete I.label;this.data.referenceType=void 0}function re(){const I=this.stack[this.stack.length-1];if(this.data.inReference){const B=this.data.referenceType||"shortcut";I.type+="Reference",I.referenceType=B,delete I.url,delete I.title}else delete I.identifier,delete I.label;this.data.referenceType=void 0}function P(I){const B=this.sliceSerialize(I),q=this.stack[this.stack.length-2];q.label=Ef(B),q.identifier=no(B).toLowerCase()}function W(){const I=this.stack[this.stack.length-1],B=this.resume(),q=this.stack[this.stack.length-1];if(this.data.inReference=!0,q.type==="link"){const Y=I.children;q.children=Y}else q.alt=B}function _(){const I=this.resume(),B=this.stack[this.stack.length-1];B.url=I}function Q(){const I=this.resume(),B=this.stack[this.stack.length-1];B.title=I}function oe(){this.data.inReference=void 0}function y(){this.data.referenceType="collapsed"}function ye(I){const B=this.resume(),q=this.stack[this.stack.length-1];q.label=B,q.identifier=no(this.sliceSerialize(I)).toLowerCase(),this.data.referenceType="full"}function Ye(I){this.data.characterReferenceType=I.type}function ie(I){const B=this.sliceSerialize(I),q=this.data.characterReferenceType;let Y;q?(Y=hp(B,q==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Y=Cc(B);const se=this.stack[this.stack.length-1];se.value+=Y}function ct(I){const B=this.stack.pop();B.position.end=Jt(I.end)}function ht(I){z.call(this,I);const B=this.stack[this.stack.length-1];B.url=this.sliceSerialize(I)}function L(I){z.call(this,I);const B=this.stack[this.stack.length-1];B.url="mailto:"+this.sliceSerialize(I)}function U(){return{type:"blockquote",children:[]}}function Z(){return{type:"code",lang:null,meta:null,value:""}}function te(){return{type:"inlineCode",value:""}}function K(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function $(){return{type:"emphasis",children:[]}}function be(){return{type:"heading",depth:0,children:[]}}function De(){return{type:"break"}}function He(){return{type:"html",value:""}}function Bt(){return{type:"image",title:null,url:"",alt:null}}function _n(){return{type:"link",title:null,url:"",children:[]}}function Be(I){return{type:"list",ordered:I.type==="listOrdered",start:null,spread:I._spread,children:[]}}function Rp(I){return{type:"listItem",spread:I._spread,checked:null,children:[]}}function Fp(){return{type:"paragraph",children:[]}}function Op(){return{type:"strong",children:[]}}function Gp(){return{type:"text",value:""}}function Wp(){return{type:"thematicBreak"}}}function Jt(e){return{line:e.line,column:e.column,offset:e.offset}}function jp(e,t){let n=-1;for(;++n<t.length;){const o=t[n];Array.isArray(o)?jp(e,o):Df(e,o)}}function Df(e,t){let n;for(n in t)if(xp.call(t,n))switch(n){case"canContainEols":{const o=t[n];o&&e[n].push(...o);break}case"transforms":{const o=t[n];o&&e[n].push(...o);break}case"enter":case"exit":{const o=t[n];o&&Object.assign(e[n],o);break}}}function fu(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Go({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Go({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Go({start:t.start,end:t.end})+") is still open")}function Bf(e){const t=this;t.parser=n;function n(o){return Pf(o,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Lf(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Nf(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function zf(e,t){const n=t.value?t.value+`
`:"",o={},a=t.lang?t.lang.split(/\s+/):[];a.length>0&&(o.className=["language-"+a[0]]);let r={type:"element",tagName:"code",properties:o,children:[{type:"text",value:n}]};return t.meta&&(r.data={meta:t.meta}),e.patch(t,r),r=e.applyData(t,r),r={type:"element",tagName:"pre",properties:{},children:[r]},e.patch(t,r),r}function Mf(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Rf(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ff(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",o=String(t.identifier).toUpperCase(),a=_o(o.toLowerCase()),r=e.footnoteOrder.indexOf(o);let i,s=e.footnoteCounts.get(o);s===void 0?(s=0,e.footnoteOrder.push(o),i=e.footnoteOrder.length):i=r+1,s+=1,e.footnoteCounts.set(o,s);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+a,id:n+"fnref-"+a+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(i)}]};e.patch(t,c);const l={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function Of(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Gf(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Ep(e,t){const n=t.referenceType;let o="]";if(n==="collapsed"?o+="[]":n==="full"&&(o+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+o}];const a=e.all(t),r=a[0];r&&r.type==="text"?r.value="["+r.value:a.unshift({type:"text",value:"["});const i=a[a.length-1];return i&&i.type==="text"?i.value+=o:a.push({type:"text",value:o}),a}function Wf(e,t){const n=String(t.identifier).toUpperCase(),o=e.definitionById.get(n);if(!o)return Ep(e,t);const a={src:_o(o.url||""),alt:t.alt};o.title!==null&&o.title!==void 0&&(a.title=o.title);const r={type:"element",tagName:"img",properties:a,children:[]};return e.patch(t,r),e.applyData(t,r)}function Hf(e,t){const n={src:_o(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const o={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,o),e.applyData(t,o)}function Uf(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const o={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,o),e.applyData(t,o)}function Vf(e,t){const n=String(t.identifier).toUpperCase(),o=e.definitionById.get(n);if(!o)return Ep(e,t);const a={href:_o(o.url||"")};o.title!==null&&o.title!==void 0&&(a.title=o.title);const r={type:"element",tagName:"a",properties:a,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function qf(e,t){const n={href:_o(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const o={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Jf(e,t,n){const o=e.all(t),a=n?Qf(n):Sp(t),r={},i=[];if(typeof t.checked=="boolean"){const u=o[0];let d;u&&u.type==="element"&&u.tagName==="p"?d=u:(d={type:"element",tagName:"p",properties:{},children:[]},o.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),r.className=["task-list-item"]}let s=-1;for(;++s<o.length;){const u=o[s];(a||s!==0||u.type!=="element"||u.tagName!=="p")&&i.push({type:"text",value:`
`}),u.type==="element"&&u.tagName==="p"&&!a?i.push(...u.children):i.push(u)}const c=o[o.length-1];c&&(a||c.type!=="element"||c.tagName!=="p")&&i.push({type:"text",value:`
`});const l={type:"element",tagName:"li",properties:r,children:i};return e.patch(t,l),e.applyData(t,l)}function Qf(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let o=-1;for(;!t&&++o<n.length;)t=Sp(n[o])}return t}function Sp(e){const t=e.spread;return t??e.children.length>1}function $f(e,t){const n={},o=e.all(t);let a=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++a<o.length;){const i=o[a];if(i.type==="element"&&i.tagName==="li"&&i.properties&&Array.isArray(i.properties.className)&&i.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const r={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(o,!0)};return e.patch(t,r),e.applyData(t,r)}function Kf(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Xf(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Yf(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Zf(e,t){const n=e.all(t),o=n.shift(),a=[];if(o){const i={type:"element",tagName:"thead",properties:{},children:e.wrap([o],!0)};e.patch(t.children[0],i),a.push(i)}if(n.length>0){const i={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=jc(t.children[1]),c=lp(t.children[t.children.length-1]);s&&c&&(i.position={start:s,end:c}),a.push(i)}const r={type:"element",tagName:"table",properties:{},children:e.wrap(a,!0)};return e.patch(t,r),e.applyData(t,r)}function e1(e,t,n){const o=n?n.children:void 0,r=(o?o.indexOf(t):1)===0?"th":"td",i=n&&n.type==="table"?n.align:void 0,s=i?i.length:t.children.length;let c=-1;const l=[];for(;++c<s;){const d=t.children[c],g={},p=i?i[c]:void 0;p&&(g.align=p);let w={type:"element",tagName:r,properties:g,children:[]};d&&(w.children=e.all(d),e.patch(d,w),w=e.applyData(d,w)),l.push(w)}const u={type:"element",tagName:"tr",properties:{},children:e.wrap(l,!0)};return e.patch(t,u),e.applyData(t,u)}function t1(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const yu=9,wu=32;function n1(e){const t=String(e),n=/\r?\n|\r/g;let o=n.exec(t),a=0;const r=[];for(;o;)r.push(ku(t.slice(a,o.index),a>0,!0),o[0]),a=o.index+o[0].length,o=n.exec(t);return r.push(ku(t.slice(a),a>0,!1)),r.join("")}function ku(e,t,n){let o=0,a=e.length;if(t){let r=e.codePointAt(o);for(;r===yu||r===wu;)o++,r=e.codePointAt(o)}if(n){let r=e.codePointAt(a-1);for(;r===yu||r===wu;)a--,r=e.codePointAt(a-1)}return a>o?e.slice(o,a):""}function o1(e,t){const n={type:"text",value:n1(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function a1(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const r1={blockquote:Lf,break:Nf,code:zf,delete:Mf,emphasis:Rf,footnoteReference:Ff,heading:Of,html:Gf,imageReference:Wf,image:Hf,inlineCode:Uf,linkReference:Vf,link:qf,listItem:Jf,list:$f,paragraph:Kf,root:Xf,strong:Yf,table:Zf,tableCell:t1,tableRow:e1,text:o1,thematicBreak:a1,toml:Da,yaml:Da,definition:Da,footnoteDefinition:Da};function Da(){}const Pp=-1,Or=0,Ho=1,kr=2,Lc=3,Nc=4,zc=5,Mc=6,Cp=7,Dp=8,vu=typeof self=="object"?self:globalThis,i1=(e,t)=>{const n=(a,r)=>(e.set(r,a),a),o=a=>{if(e.has(a))return e.get(a);const[r,i]=t[a];switch(r){case Or:case Pp:return n(i,a);case Ho:{const s=n([],a);for(const c of i)s.push(o(c));return s}case kr:{const s=n({},a);for(const[c,l]of i)s[o(c)]=o(l);return s}case Lc:return n(new Date(i),a);case Nc:{const{source:s,flags:c}=i;return n(new RegExp(s,c),a)}case zc:{const s=n(new Map,a);for(const[c,l]of i)s.set(o(c),o(l));return s}case Mc:{const s=n(new Set,a);for(const c of i)s.add(o(c));return s}case Cp:{const{name:s,message:c}=i;return n(new vu[s](c),a)}case Dp:return n(BigInt(i),a);case"BigInt":return n(Object(BigInt(i)),a);case"ArrayBuffer":return n(new Uint8Array(i).buffer,i);case"DataView":{const{buffer:s}=new Uint8Array(i);return n(new DataView(s),i)}}return n(new vu[r](i),a)};return o},bu=e=>i1(new Map,e)(0),Nn="",{toString:s1}={},{keys:c1}=Object,jo=e=>{const t=typeof e;if(t!=="object"||!e)return[Or,t];const n=s1.call(e).slice(8,-1);switch(n){case"Array":return[Ho,Nn];case"Object":return[kr,Nn];case"Date":return[Lc,Nn];case"RegExp":return[Nc,Nn];case"Map":return[zc,Nn];case"Set":return[Mc,Nn];case"DataView":return[Ho,n]}return n.includes("Array")?[Ho,n]:n.includes("Error")?[Cp,n]:[kr,n]},Ba=([e,t])=>e===Or&&(t==="function"||t==="symbol"),l1=(e,t,n,o)=>{const a=(i,s)=>{const c=o.push(i)-1;return n.set(s,c),c},r=i=>{if(n.has(i))return n.get(i);let[s,c]=jo(i);switch(s){case Or:{let u=i;switch(c){case"bigint":s=Dp,u=i.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);u=null;break;case"undefined":return a([Pp],i)}return a([s,u],i)}case Ho:{if(c){let g=i;return c==="DataView"?g=new Uint8Array(i.buffer):c==="ArrayBuffer"&&(g=new Uint8Array(i)),a([c,[...g]],i)}const u=[],d=a([s,u],i);for(const g of i)u.push(r(g));return d}case kr:{if(c)switch(c){case"BigInt":return a([c,i.toString()],i);case"Boolean":case"Number":case"String":return a([c,i.valueOf()],i)}if(t&&"toJSON"in i)return r(i.toJSON());const u=[],d=a([s,u],i);for(const g of c1(i))(e||!Ba(jo(i[g])))&&u.push([r(g),r(i[g])]);return d}case Lc:return a([s,i.toISOString()],i);case Nc:{const{source:u,flags:d}=i;return a([s,{source:u,flags:d}],i)}case zc:{const u=[],d=a([s,u],i);for(const[g,p]of i)(e||!(Ba(jo(g))||Ba(jo(p))))&&u.push([r(g),r(p)]);return d}case Mc:{const u=[],d=a([s,u],i);for(const g of i)(e||!Ba(jo(g)))&&u.push(r(g));return d}}const{message:l}=i;return a([s,{name:c,message:l}],i)};return r},Tu=(e,{json:t,lossy:n}={})=>{const o=[];return l1(!(t||n),!!t,new Map,o)(e),o},vr=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?bu(Tu(e,t)):structuredClone(e):(e,t)=>bu(Tu(e,t));function u1(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function d1(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function p1(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||u1,o=e.options.footnoteBackLabel||d1,a=e.options.footnoteLabel||"Footnotes",r=e.options.footnoteLabelTagName||"h2",i=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let c=-1;for(;++c<e.footnoteOrder.length;){const l=e.footnoteById.get(e.footnoteOrder[c]);if(!l)continue;const u=e.all(l),d=String(l.identifier).toUpperCase(),g=_o(d.toLowerCase());let p=0;const w=[],k=e.footnoteCounts.get(d);for(;k!==void 0&&++p<=k;){w.length>0&&w.push({type:"text",value:" "});let h=typeof n=="string"?n:n(c,p);typeof h=="string"&&(h={type:"text",value:h}),w.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+g+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(c,p),className:["data-footnote-backref"]},children:Array.isArray(h)?h:[h]})}const D=u[u.length-1];if(D&&D.type==="element"&&D.tagName==="p"){const h=D.children[D.children.length-1];h&&h.type==="text"?h.value+=" ":D.children.push({type:"text",value:" "}),D.children.push(...w)}else u.push(...w);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+g},children:e.wrap(u,!0)};e.patch(l,m),s.push(m)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:r,properties:{...vr(i),id:"footnote-label"},children:[{type:"text",value:a}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const Bp=function(e){if(e==null)return h1;if(typeof e=="function")return Gr(e);if(typeof e=="object")return Array.isArray(e)?g1(e):m1(e);if(typeof e=="string")return _1(e);throw new Error("Expected function, string, or object as test")};function g1(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Bp(e[n]);return Gr(o);function o(...a){let r=-1;for(;++r<t.length;)if(t[r].apply(this,a))return!0;return!1}}function m1(e){const t=e;return Gr(n);function n(o){const a=o;let r;for(r in e)if(a[r]!==t[r])return!1;return!0}}function _1(e){return Gr(t);function t(n){return n&&n.type===e}}function Gr(e){return t;function t(n,o,a){return!!(f1(n)&&e.call(this,n,typeof o=="number"?o:void 0,a||void 0))}}function h1(){return!0}function f1(e){return e!==null&&typeof e=="object"&&"type"in e}const Lp=[],y1=!0,Iu=!1,w1="skip";function k1(e,t,n,o){let a;typeof t=="function"&&typeof n!="function"?(o=n,n=t):a=t;const r=Bp(a),i=o?-1:1;s(e,void 0,[])();function s(c,l,u){const d=c&&typeof c=="object"?c:{};if(typeof d.type=="string"){const p=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(g,"name",{value:"node ("+(c.type+(p?"<"+p+">":""))+")"})}return g;function g(){let p=Lp,w,k,D;if((!t||r(c,l,u[u.length-1]||void 0))&&(p=v1(n(c,u)),p[0]===Iu))return p;if("children"in c&&c.children){const m=c;if(m.children&&p[0]!==w1)for(k=(o?m.children.length:-1)+i,D=u.concat(m);k>-1&&k<m.children.length;){const h=m.children[k];if(w=s(h,k,D)(),w[0]===Iu)return w;k=typeof w[1]=="number"?w[1]:k+i}}return p}}}function v1(e){return Array.isArray(e)?e:typeof e=="number"?[y1,e]:e==null?Lp:[e]}function Np(e,t,n,o){let a,r,i;typeof t=="function"&&typeof n!="function"?(r=void 0,i=t,a=n):(r=t,i=n,a=o),k1(e,r,s,a);function s(c,l){const u=l[l.length-1],d=u?u.children.indexOf(c):void 0;return i(c,d,u)}}const xs={}.hasOwnProperty,b1={};function T1(e,t){const n=t||b1,o=new Map,a=new Map,r=new Map,i={...r1,...n.handlers},s={all:l,applyData:A1,definitionById:o,footnoteById:a,footnoteCounts:r,footnoteOrder:[],handlers:i,one:c,options:n,patch:I1,wrap:j1};return Np(e,function(u){if(u.type==="definition"||u.type==="footnoteDefinition"){const d=u.type==="definition"?o:a,g=String(u.identifier).toUpperCase();d.has(g)||d.set(g,u)}}),s;function c(u,d){const g=u.type,p=s.handlers[g];if(xs.call(s.handlers,g)&&p)return p(s,u,d);if(s.options.passThrough&&s.options.passThrough.includes(g)){if("children"in u){const{children:k,...D}=u,m=vr(D);return m.children=s.all(u),m}return vr(u)}return(s.options.unknownHandler||x1)(s,u,d)}function l(u){const d=[];if("children"in u){const g=u.children;let p=-1;for(;++p<g.length;){const w=s.one(g[p],u);if(w){if(p&&g[p-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=Au(w.value)),!Array.isArray(w)&&w.type==="element")){const k=w.children[0];k&&k.type==="text"&&(k.value=Au(k.value))}Array.isArray(w)?d.push(...w):d.push(w)}}}return d}}function I1(e,t){e.position&&(t.position=ih(e))}function A1(e,t){let n=t;if(e&&e.data){const o=e.data.hName,a=e.data.hChildren,r=e.data.hProperties;if(typeof o=="string")if(n.type==="element")n.tagName=o;else{const i="children"in n?n.children:[n];n={type:"element",tagName:o,properties:{},children:i}}n.type==="element"&&r&&Object.assign(n.properties,vr(r)),"children"in n&&n.children&&a!==null&&a!==void 0&&(n.children=a)}return n}function x1(e,t){const n=t.data||{},o="value"in t&&!(xs.call(n,"hProperties")||xs.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function j1(e,t){const n=[];let o=-1;for(t&&n.push({type:"text",value:`
`});++o<e.length;)o&&n.push({type:"text",value:`
`}),n.push(e[o]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Au(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function xu(e,t){const n=T1(e,t),o=n.one(e,void 0),a=p1(n),r=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return a&&r.children.push({type:"text",value:`
`},a),r}function E1(e,t){return e&&"run"in e?async function(n,o){const a=xu(n,{file:o,...t});await e.run(a,o)}:function(n,o){return xu(n,{file:o,...e||t})}}function ju(e){if(e)throw e}var Qa=Object.prototype.hasOwnProperty,zp=Object.prototype.toString,Eu=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,Pu=function(t){return typeof Array.isArray=="function"?Array.isArray(t):zp.call(t)==="[object Array]"},Cu=function(t){if(!t||zp.call(t)!=="[object Object]")return!1;var n=Qa.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&Qa.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!o)return!1;var a;for(a in t);return typeof a>"u"||Qa.call(t,a)},Du=function(t,n){Eu&&n.name==="__proto__"?Eu(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Bu=function(t,n){if(n==="__proto__")if(Qa.call(t,n)){if(Su)return Su(t,n).value}else return;return t[n]},S1=function e(){var t,n,o,a,r,i,s=arguments[0],c=1,l=arguments.length,u=!1;for(typeof s=="boolean"&&(u=s,s=arguments[1]||{},c=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});c<l;++c)if(t=arguments[c],t!=null)for(n in t)o=Bu(s,n),a=Bu(t,n),s!==a&&(u&&a&&(Cu(a)||(r=Pu(a)))?(r?(r=!1,i=o&&Pu(o)?o:[]):i=o&&Cu(o)?o:{},Du(s,{name:n,newValue:e(u,i,a)})):typeof a<"u"&&Du(s,{name:n,newValue:a}));return s};const yi=Ss(S1);function js(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function P1(){const e=[],t={run:n,use:o};return t;function n(...a){let r=-1;const i=a.pop();if(typeof i!="function")throw new TypeError("Expected function as last argument, not "+i);s(null,...a);function s(c,...l){const u=e[++r];let d=-1;if(c){i(c);return}for(;++d<a.length;)(l[d]===null||l[d]===void 0)&&(l[d]=a[d]);a=l,u?C1(u,s)(...l):i(null,...l)}}function o(a){if(typeof a!="function")throw new TypeError("Expected `middelware` to be a function, not "+a);return e.push(a),t}}function C1(e,t){let n;return o;function o(...i){const s=e.length>i.length;let c;s&&i.push(a);try{c=e.apply(this,i)}catch(l){const u=l;if(s&&n)throw u;return a(u)}s||(c&&c.then&&typeof c.then=="function"?c.then(r,a):c instanceof Error?a(c):r(c))}function a(i,...s){n||(n=!0,t(i,...s))}function r(i){a(null,i)}}const jt={basename:D1,dirname:B1,extname:L1,join:N1,sep:"/"};function D1(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ma(e);let n=0,o=-1,a=e.length,r;if(t===void 0||t.length===0||t.length>e.length){for(;a--;)if(e.codePointAt(a)===47){if(r){n=a+1;break}}else o<0&&(r=!0,o=a+1);return o<0?"":e.slice(n,o)}if(t===e)return"";let i=-1,s=t.length-1;for(;a--;)if(e.codePointAt(a)===47){if(r){n=a+1;break}}else i<0&&(r=!0,i=a+1),s>-1&&(e.codePointAt(a)===t.codePointAt(s--)?s<0&&(o=a):(s=-1,o=i));return n===o?o=i:o<0&&(o=e.length),e.slice(n,o)}function B1(e){if(ma(e),e.length===0)return".";let t=-1,n=e.length,o;for(;--n;)if(e.codePointAt(n)===47){if(o){t=n;break}}else o||(o=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function L1(e){ma(e);let t=e.length,n=-1,o=0,a=-1,r=0,i;for(;t--;){const s=e.codePointAt(t);if(s===47){if(i){o=t+1;break}continue}n<0&&(i=!0,n=t+1),s===46?a<0?a=t:r!==1&&(r=1):a>-1&&(r=-1)}return a<0||n<0||r===0||r===1&&a===n-1&&a===o+1?"":e.slice(a,n)}function N1(...e){let t=-1,n;for(;++t<e.length;)ma(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":z1(n)}function z1(e){ma(e);const t=e.codePointAt(0)===47;let n=M1(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function M1(e,t){let n="",o=0,a=-1,r=0,i=-1,s,c;for(;++i<=e.length;){if(i<e.length)s=e.codePointAt(i);else{if(s===47)break;s=47}if(s===47){if(!(a===i-1||r===1))if(a!==i-1&&r===2){if(n.length<2||o!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",o=0):(n=n.slice(0,c),o=n.length-1-n.lastIndexOf("/")),a=i,r=0;continue}}else if(n.length>0){n="",o=0,a=i,r=0;continue}}t&&(n=n.length>0?n+"/..":"..",o=2)}else n.length>0?n+="/"+e.slice(a+1,i):n=e.slice(a+1,i),o=i-a-1;a=i,r=0}else s===46&&r>-1?r++:r=-1}return n}function ma(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const R1={cwd:F1};function F1(){return"/"}function Es(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function O1(e){if(typeof e=="string")e=new URL(e);else if(!Es(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return G1(e)}function G1(e){if(e.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const o=t.codePointAt(n+2);if(o===70||o===102){const a=new TypeError("File URL path must not include encoded / characters");throw a.code="ERR_INVALID_FILE_URL_PATH",a}}return decodeURIComponent(t)}const wi=["history","path","basename","stem","extname","dirname"];class Mp{constructor(t){let n;t?Es(t)?n={path:t}:typeof t=="string"||W1(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":R1.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<wi.length;){const r=wi[o];r in n&&n[r]!==void 0&&n[r]!==null&&(this[r]=r==="history"?[...n[r]]:n[r])}let a;for(a in n)wi.includes(a)||(this[a]=n[a])}get basename(){return typeof this.path=="string"?jt.basename(this.path):void 0}set basename(t){vi(t,"basename"),ki(t,"basename"),this.path=jt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?jt.dirname(this.path):void 0}set dirname(t){Lu(this.basename,"dirname"),this.path=jt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?jt.extname(this.path):void 0}set extname(t){if(ki(t,"extname"),Lu(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=jt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Es(t)&&(t=O1(t)),vi(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?jt.basename(this.path,this.extname):void 0}set stem(t){vi(t,"stem"),ki(t,"stem"),this.path=jt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,o){const a=this.message(t,n,o);throw a.fatal=!0,a}info(t,n,o){const a=this.message(t,n,o);return a.fatal=void 0,a}message(t,n,o){const a=new Re(t,n,o);return this.path&&(a.name=this.path+":"+a.name,a.file=this.path),a.fatal=!1,this.messages.push(a),a}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function ki(e,t){if(e&&e.includes(jt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+jt.sep+"`")}function vi(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Lu(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function W1(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const H1=function(e){const o=this.constructor.prototype,a=o[e],r=function(){return a.apply(r,arguments)};return Object.setPrototypeOf(r,o),r},U1={}.hasOwnProperty;class Rc extends H1{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=P1()}copy(){const t=new Rc;let n=-1;for(;++n<this.attachers.length;){const o=this.attachers[n];t.use(...o)}return t.data(yi(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ii("data",this.frozen),this.namespace[t]=n,this):U1.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ii("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const a=n.call(t,...o);typeof a=="function"&&this.transformers.use(a)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=La(t),o=this.parser||this.Parser;return bi("parse",o),o(String(n),n)}process(t,n){const o=this;return this.freeze(),bi("process",this.parser||this.Parser),Ti("process",this.compiler||this.Compiler),n?a(void 0,n):new Promise(a);function a(r,i){const s=La(t),c=o.parse(s);o.run(c,s,function(u,d,g){if(u||!d||!g)return l(u);const p=d,w=o.stringify(p,g);J1(w)?g.value=w:g.result=w,l(u,g)});function l(u,d){u||!d?i(u):r?r(d):n(void 0,d)}}}processSync(t){let n=!1,o;return this.freeze(),bi("processSync",this.parser||this.Parser),Ti("processSync",this.compiler||this.Compiler),this.process(t,a),zu("processSync","process",n),o;function a(r,i){n=!0,ju(r),o=i}}run(t,n,o){Nu(t),this.freeze();const a=this.transformers;return!o&&typeof n=="function"&&(o=n,n=void 0),o?r(void 0,o):new Promise(r);function r(i,s){const c=La(n);a.run(t,c,l);function l(u,d,g){const p=d||t;u?s(u):i?i(p):o(void 0,p,g)}}}runSync(t,n){let o=!1,a;return this.run(t,n,r),zu("runSync","run",o),a;function r(i,s){ju(i),a=s,o=!0}}stringify(t,n){this.freeze();const o=La(n),a=this.compiler||this.Compiler;return Ti("stringify",a),Nu(t),a(t,o)}use(t,...n){const o=this.attachers,a=this.namespace;if(Ii("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):i(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function r(l){if(typeof l=="function")c(l,[]);else if(typeof l=="object")if(Array.isArray(l)){const[u,...d]=l;c(u,d)}else i(l);else throw new TypeError("Expected usable value, not `"+l+"`")}function i(l){if(!("plugins"in l)&&!("settings"in l))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(l.plugins),l.settings&&(a.settings=yi(!0,a.settings,l.settings))}function s(l){let u=-1;if(l!=null)if(Array.isArray(l))for(;++u<l.length;){const d=l[u];r(d)}else throw new TypeError("Expected a list of plugins, not `"+l+"`")}function c(l,u){let d=-1,g=-1;for(;++d<o.length;)if(o[d][0]===l){g=d;break}if(g===-1)o.push([l,...u]);else if(u.length>0){let[p,...w]=u;const k=o[g][1];js(k)&&js(p)&&(p=yi(!0,k,p)),o[g]=[l,p,...w]}}}}const V1=new Rc().freeze();function bi(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ti(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ii(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Nu(e){if(!js(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function zu(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function La(e){return q1(e)?e:new Mp(e)}function q1(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function J1(e){return typeof e=="string"||Q1(e)}function Q1(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const $1="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Mu=[],Ru={allowDangerousHtml:!0},K1=/^(https?|ircs?|mailto|xmpp)$/i,X1=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Y1(e){const t=Z1(e),n=ey(e);return ty(t.runSync(t.parse(n),n),e)}function Z1(e){const t=e.rehypePlugins||Mu,n=e.remarkPlugins||Mu,o=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Ru}:Ru;return V1().use(Bf).use(n).use(E1,o).use(t)}function ey(e){const t=e.children||"",n=new Mp;return typeof t=="string"&&(n.value=t),n}function ty(e,t){const n=t.allowedElements,o=t.allowElement,a=t.components,r=t.disallowedElements,i=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||ny;for(const u of X1)Object.hasOwn(t,u.from)&&(""+u.from+(u.to?"use `"+u.to+"` instead":"remove it")+$1+u.id,void 0);return Np(e,l),dh(e,{Fragment:b.Fragment,components:a,ignoreInvalidStyle:!0,jsx:b.jsx,jsxs:b.jsxs,passKeys:!0,passNode:!0});function l(u,d,g){if(u.type==="raw"&&g&&typeof d=="number")return i?g.children.splice(d,1):g.children[d]={type:"text",value:u.value},d;if(u.type==="element"){let p;for(p in _i)if(Object.hasOwn(_i,p)&&Object.hasOwn(u.properties,p)){const w=u.properties[p],k=_i[p];(k===null||k.includes(u.tagName))&&(u.properties[p]=c(String(w||""),p,u))}}if(u.type==="element"){let p=n?!n.includes(u.tagName):r?r.includes(u.tagName):!1;if(!p&&o&&typeof d=="number"&&(p=!o(u,d,g)),p&&g&&typeof d=="number")return s&&u.children?g.children.splice(d,1,...u.children):g.children.splice(d,1),d}}}function ny(e){const t=e.indexOf(":"),n=e.indexOf("?"),o=e.indexOf("#"),a=e.indexOf("/");return t===-1||a!==-1&&t>a||n!==-1&&t>n||o!==-1&&t>o||K1.test(e.slice(0,t))?e:""}var oy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ay=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ee=(e,t)=>{const n=Ae.forwardRef(({color:o="currentColor",size:a=24,strokeWidth:r=2,absoluteStrokeWidth:i,children:s,...c},l)=>Ae.createElement("svg",{ref:l,...oy,width:a,height:a,stroke:o,strokeWidth:i?Number(r)*24/Number(a):r,className:`lucide lucide-${ay(e)}`,...c},[...t.map(([u,d])=>Ae.createElement(u,d)),...(Array.isArray(s)?s:[s])||[]]));return n.displayName=`${e}`,n},ry=Ee("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),iy=Ee("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),sy=Ee("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]),cy=Ee("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),ly=Ee("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),uy=Ee("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]),dy=Ee("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),py=Ee("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),Fu=Ee("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),Ou=Ee("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),gy=Ee("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),Gu=Ee("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),my=Ee("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]),_y=Ee("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),hy=Ee("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]),fy=Ee("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]),Wu=Ee("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),yy=Ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),zn=[{id:179,parent_category:63,parent_category_name:"办公神器",sub_category:69,sub_category_name:"在线文档",name:"有道云笔记",description:"网易旗下专注办公提效的笔记软件，支持多端同步，用户可以随时随地对线上资料进行编辑、分享以及协同。",url:"https://note.youdao.com/",icon:"https://kjdaohang.com/media/tool_icons/%E6%9C%89%E9%81%93%E4%BA%91%E7%AC%94%E8%AE%B0.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E6%9C%89%E9%81%93%E4%BA%91%E7%AC%94%E8%AE%B0.jpg",tags:"网易,在线文档",order:-1,is_active:!0,views:11,likes_count:0,created_at:"2025-05-22T13:59:32.988360+08:00",updated_at:"2025-05-27T10:23:53.228821+08:00",desc_md:`### 有道云笔记

- **开发商**：网易有道
- **简介**：有道云笔记是一款专注于办公提效的云笔记软件，支持多端同步、资料编辑、分享与协同，适合个人与团队知识管理。
- **主要特性**：
  - 多端同步，随时随地访问
  - 支持文本、图片、附件等多种内容
  - 团队协作与共享空间
  - 强大的搜索与标签管理
  - 数据加密与安全保障
- **适用人群**：学生、职场人士、团队协作用户
- [官网链接](https://note.youdao.com/)
`},{id:379,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"Any Router",description:"Claude Code免费共享平台，提供API中转服务。",url:"https://anyrouter.top/register?aff=8pUE",icon:"https://kjdaohang.com/media/tool_icons/imgi_1_logo.png",logo:"https://kjdaohang.com/media/tool_icons/imgi_1_logo.png",tags:"Claude Code",order:0,is_active:!0,views:14049,likes_count:0,created_at:"2025-07-09T21:24:39.326834+08:00",updated_at:"2025-07-09T21:24:39.326904+08:00",desc_md:`### Visual Studio Code

- **开发商**：Microsoft
- **简介**：VS Code 是一款开源、跨平台的轻量级代码编辑器，支持几乎所有主流编程语言。拥有丰富的插件生态、强大的调试功能和 Git 集成，适合前端、后端、数据科学等多种开发场景。
- **主要特性**：
  - 智能代码补全（IntelliSense）
  - 多语言支持
  - 内置终端与调试器
  - 丰富的插件市场
  - 远程开发与容器支持
- **适用人群**：全栈开发者、前端/后端工程师、学生
- [官网链接](https://code.visualstudio.com/)`},{id:352,parent_category:3,parent_category_name:"AI工具",sub_category:6,sub_category_name:"AI编程",name:"Augment Code",description:"一款专为专业软件工程师设计的 AI 编程助手，基于 Anthropic 的 Claude Sonnet 4 模型构建，适合大型开发团队共同协作的项目，和喜欢高度自主工作流程的用户。",url:"https://www.augmentcode.com/",icon:"https://kjdaohang.com/media/tool_icons/aafcb8cf2ffa41afb97c2dd398b56307.webp",logo:"https://kjdaohang.com/media/tool_icons/aafcb8cf2ffa41afb97c2dd398b56307.webp",tags:"AI编程,VS Code",order:0,is_active:!0,views:4665,likes_count:0,created_at:"2025-06-25T11:24:27.523762+08:00",updated_at:"2025-06-26T20:48:48.493175+08:00",desc_md:`### Visual Studio Code（插件生态）

- **简介**：VS Code 拥有极为丰富的插件生态，支持代码高亮、主题切换、代码片段、远程开发、AI 辅助等。通过插件可扩展为 Python、Java、C++、Go、Rust、Web 等多语言 IDE。
- **推荐插件**：
  - Python、Java Extension Pack
  - Prettier、ESLint
  - GitLens、Remote - SSH
  - Copilot、ChatGPT
- **适用场景**：多语言开发、团队协作、远程开发`},{id:194,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"Claude",description:"Claude是Anthropic公司推出的一款类ChatGPT对话机器人，被认为是ChatGPT最强大的潜在竞争对手。",url:"https://claude.ai/",icon:"https://kjdaohang.com/media/tool_icons/default_2.png",logo:"https://kjdaohang.com/media/tool_icons/default_2.png",tags:"Anthropic,宪法式 AI,AI对话",order:0,is_active:!0,views:3199,likes_count:0,created_at:"2025-05-22T14:41:04.300295+08:00",updated_at:"2025-05-23T11:22:58.324353+08:00",desc_md:`### Claude

- **开发商**：Anthropic
- **简介**：Claude 是由 Anthropic 开发的先进 AI 助手，以安全、可靠和长上下文处理能力著称。它能够进行自然流畅的对话、处理复杂任务、编写代码和分析文档。
- **主要特性**：
  - 超长上下文窗口（支持 200k+ token）
  - 强大的逻辑推理和编码能力
  - 强调安全性（Constitutional AI）
  - 支持文档上传与分析
- **适用人群**：开发者、研究人员、内容创作者、企业用户
- [官网链接](https://claude.ai/)
`},{id:34,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"Cursor",description:"号称最强AI编程工具，继承了 VS Code 强大功能，深度集成了 AI 功能。",url:"https://www.cursor.com/",icon:"https://kjdaohang.com/media/tool_icons/cursor.png",logo:"https://kjdaohang.com/media/tool_icons/cursor.png",tags:"AI编程,VS Code,代码编辑器",order:0,is_active:!0,views:2974,likes_count:1,created_at:"2025-05-21T20:49:58.114584+08:00",updated_at:"2025-06-17T14:30:00.434998+08:00",desc_md:`### Cursor

- **开发商**：Anysphere
- **简介**：Cursor 是一款基于 VS Code 构建的 AI 原生代码编辑器。它深度集成了先进的 AI 模型（如 Claude 3.5 Sonnet, GPT-4），能够理解整个代码库，提供智能补全、代码生成、重构和自然语言编程功能。
- **主要特性**：
  - 内置 AI 聊天与代码生成
  - 代码库级别的上下文理解（Codebase Context）
  - 支持 VS Code 插件生态
  - 智能代码补全（Copilot++）
  - 隐私模式（Local Mode）
- **适用人群**：所有开发者、追求高效编程的工程师
- [官网链接](https://www.cursor.com/)
`},{id:18,parent_category:15,parent_category_name:"测试工具",sub_category:21,sub_category_name:"API测试",name:"Postman",description:"一款功能强大的 API 开发与测试工具，支持从 API 设计、开发、调试到文档生成的全流程管理。",url:"https://www.postman.com",icon:"https://kjdaohang.com/media/tool_icons/postman-logo_3wlwTH8.png",logo:"https://kjdaohang.com/media/tool_icons/postman-logo_3wlwTH8.png",tags:"接口测试,测试工具",order:0,is_active:!0,views:1624,likes_count:0,created_at:"2025-05-21T18:30:29.143433+08:00",updated_at:"2025-05-29T19:06:38.547857+08:00",desc_md:`### Postman

- **开发商**：Postman, Inc.
- **简介**：Postman 是一款全球流行的 API 开发与测试工具，支持 API 设计、调试、自动化测试、Mock、文档生成等全流程管理。适用于前后端协作、接口测试和自动化测试。
- **主要特性**：
  - 可视化接口调试与请求构造
  - 支持自动化测试与断言
  - 丰富的环境变量和参数化功能
  - 支持团队协作与接口文档生成
  - 集成 Mock 服务和 API 监控
- **适用人群**：开发者、测试工程师、API 管理团队
- [官网链接](https://www.postman.com)
`},{id:3,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"ChatGPT",description:"OpenAI开发的AI智能助手，堪称宇宙最强聊天机器人，最新推出的强大的GPT4o",url:"https://chat.openai.com/",icon:"https://kjdaohang.com/media/tool_icons/chatgpt-logo_lnsPOej.png",logo:"https://kjdaohang.com/media/tool_icons/chatgpt-logo_lnsPOej.png",tags:"OpenAI,现象级产品",order:0,is_active:!0,views:966,likes_count:0,created_at:"2025-05-21T12:15:35.324089+08:00",updated_at:"2025-05-28T19:24:37.462111+08:00",desc_md:`### ChatGPT

- **开发商**：OpenAI
- **简介**：ChatGPT 是由 OpenAI 开发的先进对话式人工智能，基于 GPT-4 等大语言模型，能够理解和生成自然语言文本。它广泛应用于编程辅助、内容创作、知识问答、学习辅导等场景。
- **主要特性**：
  - 支持多轮对话和上下文理解
  - 编程代码生成与调试建议
  - 内容创作、文案润色、翻译等
  - 支持插件扩展和联网搜索
  - 多平台支持（网页版、API、第三方集成）
- **适用人群**：开发者、内容创作者、学生、企业用户
- [官网链接](https://chat.openai.com/)
`},{id:382,parent_category:44,parent_category_name:"实用小工具",sub_category:78,sub_category_name:"浏览器插件",name:"Chrome MCP Server",description:"一个基于 Chrome 浏览器插件实现的工具，它允许 AI 助手（如 Claude）直接操控浏览器，实现自动化操作、内容分析和语义搜索等功能。支持 20+ 种工具，包括截图、网络监控、书签管理、浏览历史等。",url:"https://github.com/hangwin/mcp-chrome/releases",icon:"https://kjdaohang.com/media/tool_icons/7_04022324364924.png",logo:"https://kjdaohang.com/media/tool_icons/7_04022324364924.png",tags:"浏览器自动化插件",order:0,is_active:!0,views:848,likes_count:0,created_at:"2025-07-12T16:11:48.041604+08:00",updated_at:"2025-07-12T16:18:19.754797+08:00",desc_md:`### Chrome MCP Server

- **开发商**：hangwin
- **简介**：Chrome MCP Server 是一款基于 Chrome 插件的自动化工具，允许 AI 助手（如 Claude）直接操控浏览器，实现自动化操作、内容分析、语义搜索等，支持多种实用工具集成。
- **主要特性**：
  - 支持 20+ 种浏览器自动化工具
  - 实现 AI 助手自动化操作
  - 内容分析与语义搜索
  - 支持截图、网络监控、书签管理等
  - 开源免费，持续更新
- **适用人群**：开发者、自动化测试人员、AI 应用开发者
- [官网链接](https://github.com/hangwin/mcp-chrome/releases)
`},{id:1,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"DeepSeek",description:"深度求索AI，国产之光，提供强大的AI对话和代码能力。",url:"https://chat.deepseek.com/",icon:"https://kjdaohang.com/media/tool_icons/deepseek-logo_iqV9weL.png",logo:"https://kjdaohang.com/media/tool_icons/deepseek-logo_iqV9weL.png",tags:"免费,AI助手,推理型AI",order:0,is_active:!0,views:718,likes_count:2,created_at:"2025-05-21T11:25:10.284864+08:00",updated_at:"2025-06-02T10:00:57.177538+08:00",desc_md:`### DeepSeek

- **开发商**：DeepSeek团队
- **简介**：DeepSeek是一款支持多语言、多场景的AI助手，适合开发者和内容创作者。
- **主要特性**：
  - 多语言支持
  - 智能写作与代码生成
  - 多端同步
  - 持续更新
  - 数据安全
- **适用人群**：开发者、内容创作者、企业用户
- [官网链接](https://www.deepseek.com/)
`},{id:292,parent_category:63,parent_category_name:"办公神器",sub_category:68,sub_category_name:"工具箱",name:"Toolfolio",description:"一个集成了多种工具、资源和学习材料的在线平台，旨在为用户提供一站式的工具和资源集合",url:"https://toolfolio.io/",icon:"https://kjdaohang.com/media/tool_icons/toolfolio.png",logo:"https://kjdaohang.com/media/tool_icons/toolfolio.png",tags:"在线工具合集",order:0,is_active:!0,views:509,likes_count:0,created_at:"2025-05-22T20:20:01.509036+08:00",updated_at:"2025-05-27T10:40:46.769422+08:00",desc_md:`### Toolfolio

- **开发商**：Toolfolio 团队
- **简介**：Toolfolio 是一个集成多种在线工具、资源和学习材料的平台，涵盖办公、开发、设计等多个领域，致力于为用户提供一站式工具集合。
- **主要特性**：
  - 集成多种实用工具和资源
  - 支持在线学习和资料查找
  - 界面简洁，分类清晰
  - 持续更新，覆盖面广
- **适用人群**：学生、职场人士、开发者、设计师
- [官网链接](https://toolfolio.io/)
`},{id:24,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"Trae",description:"字节跳动推出的一款免费AI驱动的代码编辑器。",url:"https://www.trae.com.cn/",icon:"https://kjdaohang.com/media/tool_icons/docs.trae.com.png",logo:"https://kjdaohang.com/media/tool_icons/docs.trae.com.png",tags:"字节跳动,AI编程,VS Code",order:0,is_active:!0,views:501,likes_count:1,created_at:"2025-05-21T18:50:13.747012+08:00",updated_at:"2025-06-17T14:32:04.954243+08:00",desc_md:`### Trae

- **开发商**：ByteDance
- **简介**：Trae 是字节跳动推出的一款 AI 原生集成开发环境（IDE），基于 VS Code 内核深度定制。它内置了 Claude 3.5 Sonnet 和 GPT-4o 等顶级 AI 模型，通过 "Trae Chat" 和 "Trae Builder" 两种模式，帮助开发者更快地编写、调试和重构代码。
- **主要特性**：
  - **AI 原生集成**：内置高性能 AI 模型，无需额外配置。
  - **双模式工作**：Chat 模式用于问答，Builder 模式用于全工程代码生成。
  - **VS Code 兼容**：完全兼容 VS Code 插件生态，迁移成本低。
  - **免费使用**：目前完全免费，提供强大的 AI 编程能力。
- **适用人群**：全栈开发者、AI 辅助编程爱好者、追求高效开发的工程师
- [官网链接](https://www.trae.ai/)
`},{id:2,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"豆包",description:"字节跳动旗下免费的全场景AI智能助手、功能全面，综合能力强。",url:"https://www.doubao.com/chat/",icon:"https://kjdaohang.com/media/tool_icons/douba-logo_IzwWa42.png",logo:"https://kjdaohang.com/media/tool_icons/douba-logo_IzwWa42.png",tags:"免费,多功能AI助手",order:0,is_active:!0,views:459,likes_count:0,created_at:"2025-05-21T11:44:29.967410+08:00",updated_at:"2025-06-02T10:04:39.298810+08:00",desc_md:`### 豆包

- **开发商**：抖音集团
- **简介**：豆包是一款集成对话、写作、翻译、绘画等多种能力的AI助手，适合日常办公和学习。
- **主要特性**：
  - 智能对话与问答
  - 写作、翻译、绘画
  - 多端支持
  - 简单易用
  - 持续更新
- **适用人群**：学生、职场人士、内容创作者
- [官网链接](https://www.doubao.com/)
`},{id:303,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"DataTool.vip",description:"一个在线视频下载工具，它支持从多个流行网站下载视频、音频和其他文件",url:"https://www.datatool.vip/",icon:"https://kjdaohang.com/media/tool_icons/datatool.vip.ico",logo:"https://kjdaohang.com/media/tool_icons/datatool.vip.ico",tags:"视频下载,在线工具",order:0,is_active:!0,views:379,likes_count:1,created_at:"2025-06-01T12:59:28.652321+08:00",updated_at:"2025-06-17T14:34:36.694898+08:00",desc_md:`### Jupyter Notebook

- **简介**：Jupyter Notebook 是一款基于网页的交互式计算环境，广泛用于数据科学、机器学习、统计分析和教学。支持代码、文本、可视化混合编辑，便于实验和分享。
- **主要特性**：
  - 代码与文档混合
  - 支持多种编程语言（Python、R、Julia 等）
  - 丰富的可视化与扩展插件
- **适用人群**：数据科学家、研究人员、教师
- [官网链接](https://jupyter.org/index.html)`},{id:354,parent_category:15,parent_category_name:"测试工具",sub_category:18,sub_category_name:"安全测试",name:"Hacksplaining",description:"一个在线安全练习平台，它提供了丰富的网络安全漏洞学习资源，该平台涵盖了多种常见的网络安全问题，如SQL注入、跨站脚本攻击（XSS）、命令执行、点击劫持等。每个漏洞类别都有详细的解释和逐步的实践练习，非常适合网络安全的初学者。",url:"https://www.hacksplaining.com/",icon:"https://kjdaohang.com/media/tool_icons/favicon1.png",logo:"https://kjdaohang.com/media/tool_icons/favicon1.png",tags:"网络安全,安全学习平台,常见漏洞",order:0,is_active:!0,views:323,likes_count:0,created_at:"2025-06-29T22:01:45.705967+08:00",updated_at:"2025-06-29T22:01:45.706007+08:00",desc_md:`### Hacksplaining

- **开发商**：Hacksplaining 团队
- **简介**：Hacksplaining 是一个专注于网络安全教育的在线平台，提供丰富的安全漏洞学习资源和交互式实践环境。涵盖 SQL 注入、XSS、命令执行、点击劫持等常见安全问题，适合安全初学者和开发者自学。
- **主要特性**：
  - 覆盖多种主流 Web 安全漏洞
  - 交互式在线练习与实时反馈
  - 每个漏洞配有详细解释和修复建议
  - 适合个人学习和团队安全培训
- **适用人群**：开发者、安全工程师、网络安全初学者
- [官网链接](https://www.hacksplaining.com/)
`},{id:401,parent_category:44,parent_category_name:"实用小工具",sub_category:74,sub_category_name:"Windows工具",name:"DriveTransfer",description:"DriveTransfer 是一款桌面端多网盘管理与文件转存工具，专注于解决不同云存储服务之间的数据管理与迁移问题，简单、安全、高效。",url:"https://mikezhou.feishu.cn/wiki/FQplwYxFTiVo4qkRmtEca8Ypnbc?from=from_copylink",icon:"https://kjdaohang.com/media/tool_icons/OIP-C_1_Hdpbj3c.jpg",logo:"https://kjdaohang.com/media/tool_icons/OIP-C_1_Hdpbj3c.jpg",tags:"网盘工具,多网盘管理,跨网盘",order:0,is_active:!0,views:318,likes_count:1,created_at:"2025-08-12T13:45:23.035859+08:00",updated_at:"2025-08-12T13:45:23.035903+08:00",desc_md:`### DriveTransfer

- **开发商**：DriveTransfer 团队
- **简介**：DriveTransfer 是一款多网盘管理与文件转存工具，支持主流云存储服务间的数据迁移、同步和管理，帮助用户高效整合和备份多平台文件。
- **主要特性**：
  - 支持多种主流网盘（如百度网盘、OneDrive、Google Drive等）
  - 跨网盘文件转存与同步
  - 批量管理与自动化操作
  - 数据安全与隐私保护
  - 简单易用，适合个人和团队
- **适用人群**：多云用户、数据迁移需求者、企业团队
- [官网链接](https://mikezhou.feishu.cn/wiki/FQplwYxFTiVo4qkRmtEca8Ypnbc?from=from_copylink)
`},{id:141,parent_category:58,parent_category_name:"资源网站",sub_category:59,sub_category_name:"学习资源",name:"阿里云AI学习路线",description:"阿里云推出的AI学习课程，人工智能技术一站式学习：算法原理、框架精讲、机器学习实战、图像识别实战、自然语言处理实战...",url:"https://developer.aliyun.com/learning/roadmap/ai",icon:"https://kjdaohang.com/media/tool_icons/%E9%98%BF%E9%87%8C%E4%BA%91.png",logo:"https://kjdaohang.com/media/tool_icons/%E9%98%BF%E9%87%8C%E4%BA%91.png",tags:"学习网站",order:0,is_active:!0,views:317,likes_count:0,created_at:"2025-05-22T11:45:24.151512+08:00",updated_at:"2025-05-29T18:34:52.967683+08:00",desc_md:`### 阿里云AI学习路线

- **简介**：阿里云AI学习路线是阿里云官方推出的人工智能学习平台，涵盖AI基础理论、算法原理、主流框架、实战案例等内容，适合不同阶段的学习者。
- **主要特性**：
  - 系统化AI学习路线图，覆盖入门到进阶
  - 包含机器学习、深度学习、图像识别、NLP等课程
  - 提供实战项目和案例分析
  - 支持在线学习与社区交流
  - 适合自学、提升和企业培训
- **适用人群**：AI初学者、开发者、在校学生、企业技术人员
- [访问阿里云AI学习路线](https://developer.aliyun.com/learning/roadmap/ai)
`},{id:255,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"IntelliJ IDEA",description:"一款由 JetBrains 开发的 智能 Java 集成开发环境（IDE），专为大型项目和企业级开发设计，Java 开发者的首选工具。",url:"https://www.jetbrains.com/idea/",icon:"https://kjdaohang.com/media/tool_icons/IntelliJ_IDEA.png",logo:"https://kjdaohang.com/media/tool_icons/IntelliJ_IDEA.png",tags:"Java开发首选",order:0,is_active:!0,views:308,likes_count:0,created_at:"2025-05-22T17:59:29.576330+08:00",updated_at:"2025-05-29T20:22:36.487890+08:00",desc_md:`### IntelliJ IDEA

- **开发商**：JetBrains
- **简介**：IntelliJ IDEA 是一款功能强大的 Java 集成开发环境（IDE），以智能代码补全、代码分析、重构工具和丰富的插件生态著称。支持 Java、Kotlin、Groovy、Scala 等多种 JVM 语言，并可通过插件扩展支持前端、数据库、移动开发等。
- **主要特性**：
  - 智能代码补全与导航
  - 强大的重构与代码分析
  - 集成版本控制（Git、SVN 等）
  - 丰富的插件市场
  - 支持 Spring、Maven、Gradle 等主流框架
- **适用人群**：Java 开发者、企业级项目开发团队
- [官网链接](https://www.jetbrains.com/idea/)
`},{id:394,parent_category:63,parent_category_name:"办公神器",sub_category:81,sub_category_name:"知识库",name:"Obsidian",description:"Obsidian 是一款基于 Markdown 的笔记管理工具和知识管理平台，凭借其灵活性和强大的功能，被许多用户称为“第二大脑”。它不仅适合个人知识管理，还能满足团队协作的需求，帮助用户高效组织信息、记录灵感、规划项目等。",url:"https://obsidian.md/download",icon:"https://kjdaohang.com/media/tool_icons/imgi_26_default.png",logo:"https://kjdaohang.com/media/tool_icons/imgi_26_default.png",tags:"知识管是,笔记管理,Markdown",order:0,is_active:!0,views:298,likes_count:0,created_at:"2025-07-18T16:55:32.473933+08:00",updated_at:"2025-07-18T16:55:32.473966+08:00",desc_md:`### Obsidian

- **开发商**：Obsidian 团队
- **简介**：Obsidian 是一款基于 Markdown 的知识管理与笔记工具，支持本地存储、双向链接、知识图谱等功能，被誉为“第二大脑”。
- **主要特性**：
  - 支持 Markdown 格式，数据本地存储
  - 双向链接与知识图谱
  - 丰富的插件生态与主题自定义
  - 支持多平台同步与团队协作
  - 强大的搜索与标签管理
- **适用人群**：知识工作者、学生、研究人员、团队协作用户
- [官网链接](https://obsidian.md/download)
`},{id:21,parent_category:15,parent_category_name:"测试工具",sub_category:22,sub_category_name:"抓包工具",name:"Charles",description:"一款功能强大的 HTTP 代理工具，主要用于网络抓包、调试和分析 HTTP/HTTPS 等网络协议",url:"https://www.charlesproxy.com",icon:"https://kjdaohang.com/media/tool_icons/charles.png",logo:"https://kjdaohang.com/media/tool_icons/charles.png",tags:"抓包,HTTP 代理",order:0,is_active:!0,views:297,likes_count:1,created_at:"2025-05-21T18:34:05.569666+08:00",updated_at:"2025-05-30T10:37:48.371977+08:00",desc_md:`### Charles

- **开发商**：XK72 Ltd
- **简介**：Charles 是一款专业的 HTTP 代理和抓包工具，支持 HTTP、HTTPS、WebSocket 等协议。广泛应用于 Web、移动端接口调试、网络请求分析和性能优化。
- **主要特性**：
  - 支持 HTTP/HTTPS 抓包与解密
  - 请求/响应内容实时查看与修改
  - 支持断点调试、重放请求
  - 丰富的过滤和搜索功能
  - 支持多平台（Windows、macOS、Linux）
  - 支持 SSL 代理和流量限速
- **适用人群**：开发者、测试工程师、网络分析师
- [官网链接](https://www.charlesproxy.com)
`},{id:81,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"Airtest",description:"由网易开发并开源的一个跨平台 UI 自动化测试框架，特别适用于游戏和移动应用的自动化测试",url:"https://airtest.netease.com/",icon:"https://kjdaohang.com/media/tool_icons/airtest.jpg",logo:"https://kjdaohang.com/media/tool_icons/airtest.jpg",tags:"UI自动化,游戏测试",order:0,is_active:!0,views:296,likes_count:0,created_at:"2025-05-22T08:57:59.940144+08:00",updated_at:"2025-05-26T20:46:56.992961+08:00",desc_md:`### Airtest

- **开发商**：网易
- **简介**：Airtest 是网易开源的跨平台 UI 自动化测试框架，支持图像识别和脚本录制，适用于游戏、移动应用和桌面应用的自动化测试。
- **主要特性**：
  - 支持多平台（Android、iOS、Windows）
  - 基于图像识别的自动化操作
  - 脚本录制与回放
  - 支持 Poco 框架进行控件级自动化
- **适用人群**：游戏测试工程师、移动开发者、自动化测试团队
- [官网链接](https://airtest.netease.com/)
`},{id:4,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"Kimi",description:"月之暗面推出的AI助手，支持联网和长文本理解。",url:"https://www.kimi.com/",icon:"https://kjdaohang.com/media/tool_icons/kimi-logo_fVpChKD.png",logo:"https://kjdaohang.com/media/tool_icons/kimi-logo_fVpChKD.png",tags:"AI助手,长文本处理",order:0,is_active:!0,views:284,likes_count:0,created_at:"2025-05-21T12:22:39.007147+08:00",updated_at:"2025-05-28T11:37:24.856760+08:00",desc_md:""},{id:412,parent_category:15,parent_category_name:"测试工具",sub_category:82,sub_category_name:"AI测试",name:"Testsigma",description:"Testsigma 是一个功能强大的云端无代码GenAI 测试自动化平台，可让您对复杂的企业级应用程序进行端到端自动化测试。它简化了整个测试创建、执行、报告和维护流程，使您的测试自动化流程速度提升 10 倍。",url:"https://testsigma.com/",icon:"https://kjdaohang.com/media/tool_icons/imageye___-_imgi_60_healer.png",logo:"https://kjdaohang.com/media/tool_icons/imageye___-_imgi_60_healer.png",tags:"AI测试平台,AI测试",order:0,is_active:!0,views:271,likes_count:0,created_at:"2025-09-23T16:09:38.448240+08:00",updated_at:"2025-09-23T16:09:38.448299+08:00",desc_md:`### Testsigma

- **开发商**：Testsigma Technologies
- **简介**：Testsigma 是一款基于云端的无代码 GenAI 测试自动化平台，支持 Web、移动、API 等多端应用的端到端自动化测试。通过自然语言和 AI 技术，极大简化测试用例的创建、维护和执行流程，适合企业级复杂系统。
- **主要特性**：
  - 无代码测试用例编写，支持自然语言描述
  - 支持 Web、移动、API 多端测试
  - AI 驱动的测试维护和自愈能力
  - 云端执行与并发测试，自动生成测试报告
  - 集成 CI/CD 流程，支持团队协作
  - 丰富的测试数据管理和调度能力
- **适用人群**：测试工程师、自动化测试团队、企业级应用开发团队
- [官网链接](https://testsigma.com/)
`},{id:104,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"Pytest",description:"一款成熟且功能齐全的 Python 测试框架，用于编写和运行各种类型的测试。",url:"http://pytest.org/",icon:"https://kjdaohang.com/media/tool_icons/pytest.png",logo:"https://kjdaohang.com/media/tool_icons/pytest.png",tags:"通用测试框架,Python",order:0,is_active:!0,views:262,likes_count:0,created_at:"2025-05-22T09:29:06.595114+08:00",updated_at:"2025-05-26T21:03:24.871436+08:00",desc_md:`### Pytest

- **开发商**：开源社区
- **简介**：Pytest 是一款流行的 Python 测试框架，支持单元测试、功能测试和集成测试，拥有简洁的语法和强大的插件生态。
- **主要特性**：
  - 简洁的测试用例编写方式
  - 丰富的断言和参数化功能
  - 支持插件扩展和自定义钩子
  - 与主流 CI/CD 工具集成良好
- **适用人群**：Python 开发者、测试工程师、自动化测试团队
- [官网链接](https://docs.pytest.org/)
`},{id:254,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"VS Code",description:"一款由微软开发的 开源、轻量级、跨平台 代码编辑器，支持几乎所有编程语言，成为全球开发者最喜爱的工具之一",url:"https://code.visualstudio.com/",icon:"https://kjdaohang.com/media/tool_icons/vscode.jpg",logo:"https://kjdaohang.com/media/tool_icons/vscode.jpg",tags:"微软,开源,万能IDE",order:0,is_active:!0,views:252,likes_count:1,created_at:"2025-05-22T17:58:07.321278+08:00",updated_at:"2025-05-29T18:29:59.179174+08:00",desc_md:`### Visual Studio Code

- **开发商**：Microsoft
- **简介**：VS Code 是一款开源、跨平台的轻量级代码编辑器，支持几乎所有主流编程语言。拥有丰富的插件生态、强大的调试功能和 Git 集成，适合前端、后端、数据科学等多种开发场景。
- **主要特性**：
  - 智能代码补全（IntelliSense）
  - 多语言支持
  - 内置终端与调试器
  - 丰富的插件市场
  - 远程开发与容器支持
- **适用人群**：全栈开发者、前端/后端工程师、学生
- [官网链接](https://code.visualstudio.com/)`},{id:256,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"PyCharm",description:"由 JetBrains 开发的一款专业的 Python 集成开发环境（IDE），广泛用于 Python 开发",url:"https://www.jetbrains.com/pycharm/",icon:"https://kjdaohang.com/media/tool_icons/PyCharm.jpg",logo:"https://kjdaohang.com/media/tool_icons/PyCharm.jpg",tags:"Python开发首选",order:0,is_active:!0,views:244,likes_count:0,created_at:"2025-05-22T18:00:07.271431+08:00",updated_at:"2025-05-27T08:08:52.668540+08:00",desc_md:`### PyCharm

- **开发商**：JetBrains
- **简介**：PyCharm 是一款专业的 Python 集成开发环境，支持 Web、数据科学、AI、自动化测试等多种开发场景。内置调试器、测试工具、数据库工具和 Jupyter Notebook 支持。
- **主要特性**：
  - 智能代码补全与重构
  - 强大的调试与测试工具
  - 集成数据库管理
  - 支持 Django、Flask、FastAPI 等主流框架
- **适用人群**：Python 开发者、数据科学家、Web 工程师
- [官网链接](https://www.jetbrains.com/pycharm/)`},{id:69,parent_category:23,parent_category_name:"开发工具",sub_category:29,sub_category_name:"低代码/无代码",name:"影刀RPA",description:"一款 RPA（机器人流程自动化）能够模拟人工的各种操作。",url:"https://www.yingdao.com/",icon:"https://kjdaohang.com/media/tool_icons/%E5%BD%B1%E5%88%80.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E5%BD%B1%E5%88%80.jpg",tags:"RPA,无代码工具,低代码平台",order:0,is_active:!0,views:244,likes_count:0,created_at:"2025-05-21T22:16:30.176202+08:00",updated_at:"2025-05-26T22:15:12.713450+08:00",desc_md:`### 影刀RPA

- **简介**：影刀RPA 是一款国产领先的机器人流程自动化（RPA）平台，能够模拟人工在电脑上的各种操作，实现业务流程自动化。支持无代码/低代码开发，适用于财务、行政、人力等多种业务场景。
- **主要特性**：
  - 支持鼠标、键盘、网页、桌面应用等多种操作自动化
  - 拖拽式流程设计，零代码上手
  - 丰富的内置组件和流程模板
  - 支持定时、触发、批量任务执行
  - 企业级安全与权限管理
- **适用场景**：适合企业自动化办公、数据采集、流程自动化等需求。
- [官网链接](https://www.yingdao.com/)
`},{id:46,parent_category:3,parent_category_name:"AI工具",sub_category:4,sub_category_name:"AI写作",name:"笔灵AI",description:"全能智能AI写作工具，国内领先的AI写作助手，提供多种智能工具满足不同写作需求。",url:"https://ibiling.cn/template",icon:"https://kjdaohang.com/media/tool_icons/20241120041935954.png",logo:"https://kjdaohang.com/media/tool_icons/20241120041935954.png",tags:"全能助手,AI写作",order:0,is_active:!0,views:233,likes_count:0,created_at:"2025-05-21T21:16:20.189804+08:00",updated_at:"2025-05-23T11:56:30.821357+08:00",desc_md:""},{id:321,parent_category:58,parent_category_name:"资源网站",sub_category:61,sub_category_name:"副业项目",name:"网盘拉新",description:"网盘拉新是指通过各种推广手段吸引新用户注册和使用网盘服务，以获取平台提供的佣金或奖励。",url:"https://mikezhou.feishu.cn/wiki/Pp09wVnsziGW1rkNJpic9IVRn1f?from=from_copylink",icon:"https://kjdaohang.com/media/tool_icons/R-C_1.png",logo:"https://kjdaohang.com/media/tool_icons/R-C_1.png",tags:"网盘拉新",order:0,is_active:!0,views:220,likes_count:0,created_at:"2025-06-09T17:13:06.589075+08:00",updated_at:"2025-06-09T17:13:06.589115+08:00",desc_md:`### 网盘拉新

- **简介**：网盘拉新是一种通过推广活动吸引新用户注册和使用网盘服务的副业方式，用户可通过分享专属邀请链接、参与活动等方式获得平台佣金或奖励。
- **主要特性**：
  - 多平台网盘拉新任务
  - 提供专属推广链接与二维码
  - 实时统计推广效果与收益
  - 支持多种奖励方式（现金、会员、积分等）
  - 适合副业兼职和推广达人
- **适用人群**：副业从业者、推广达人、网盘用户
- [了解更多](https://mikezhou.feishu.cn/wiki/Pp09wVnsziGW1rkNJpic9IVRn1f?from=from_copylink)
`},{id:91,parent_category:15,parent_category_name:"测试工具",sub_category:19,sub_category_name:"构造数据",name:"Faker",description:"一个流行的 Python 库，用于生成假数据，广泛应用于开发、测试和数据模拟场景",url:"https://faker.readthedocs.io/en/master/",icon:"https://kjdaohang.com/media/tool_icons/faker.jpg",logo:"https://kjdaohang.com/media/tool_icons/faker.jpg",tags:"生成模拟数据,Python",order:0,is_active:!0,views:218,likes_count:0,created_at:"2025-05-22T09:10:59.834293+08:00",updated_at:"2025-05-29T19:34:49.042452+08:00",desc_md:`### Faker

- **开发商**：开源社区
- **简介**：Faker 是一个流行的 Python 库，用于生成各种类型的假数据，广泛应用于开发、测试和数据模拟场景。支持多语言和多种数据类型。
- **主要特性**：
  - 支持生成姓名、地址、公司、日期、文本等多种数据
  - 多语言支持
  - 可自定义数据格式和数量
  - 易于集成到测试脚本和数据管道
  - 社区活跃，文档完善
- **适用人群**：开发者、测试工程师、数据分析师
- [项目主页](https://faker.readthedocs.io/en/master/)
`},{id:390,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"Testim.ai",description:"Testim 是一款基于人工智能（AI）的端到端自动化测试平台，专注于提升软件测试的效率和可靠性。它通过深度整合 AI 技术，简化测试流程，适用于 Web 和移动应用的测试场景。",url:"https://www.testim.io/ai/",icon:"https://kjdaohang.com/media/tool_icons/favicon.webp",logo:"https://kjdaohang.com/media/tool_icons/favicon.webp",tags:"Web自动化,移动端自动化,AI测试工具",order:0,is_active:!0,views:216,likes_count:0,created_at:"2025-07-17T20:57:06.854059+08:00",updated_at:"2025-07-17T20:57:06.854101+08:00",desc_md:`### Testim.ai

- **开发商**：Testim
- **简介**：Testim.ai 是一款基于 AI 的端到端自动化测试平台，专注于提升测试效率和稳定性。通过 AI 技术自动维护测试用例，适用于 Web 和移动应用的自动化测试。
- **主要特性**：
  - AI 驱动的测试用例自愈
  - 支持 Web、移动端自动化测试
  - 可视化测试用例编辑与调试
  - 集成 CI/CD 流程与团队协作
- **适用人群**：自动化测试团队、开发者、企业级测试团队
- [官网链接](https://www.testim.io/ai/)
`},{id:383,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"Cherry Studio",description:"Cherry Studio 是一款跨平台的多模型 AI 客户端，采用 Electron+React 技术框架构建，内置 300 多个行业专属 AI 助手、集成 OpenAI、Gemini、Claude、DeepSeek 等主流 AI 服务，支持云端与本地模型自由切换。",url:"https://www.cherry-ai.com/",icon:"https://kjdaohang.com/media/tool_icons/favicon-BmbgeFTf.png",logo:"https://kjdaohang.com/media/tool_icons/favicon-BmbgeFTf.png",tags:"AI客户端",order:0,is_active:!0,views:204,likes_count:0,created_at:"2025-07-12T16:41:39.316790+08:00",updated_at:"2025-07-12T16:41:39.316829+08:00",desc_md:`### Cherry Studio

- **开发商**：Cherry Studio 团队
- **简介**：Cherry Studio 是一款跨平台多模型 AI 客户端，内置 300+ 行业专属 AI 助手，集成 OpenAI、Gemini、Claude、DeepSeek 等主流 AI 服务，支持云端与本地模型切换。
- **主要特性**：
  - 多模型集成与自由切换
  - 丰富的行业专属 AI 助手
  - 支持本地与云端模型
  - 跨平台支持（Windows、macOS、Linux）
  - Electron+React 技术架构，界面现代
- **适用人群**：企业用户、开发者、内容创作者、AI 爱好者
- [官网链接](https://www.cherry-ai.com/)
`},{id:403,parent_category:3,parent_category_name:"AI工具",sub_category:6,sub_category_name:"AI编程",name:"Qoder",description:"Qoder是阿里巴巴推出的 AI Agentic 编程工具，深度理解整个代码库架构，记忆并学习你的习惯，支持MCP工具生态扩展，提供上下文感知补全、内联聊天和一键「维基化」代码结构，自动选最佳模型。Qoder不是简单的代码补全工具，试图成为开发者真正的「思维伙伴」。预览阶段全功能免费开放，助力开发者专注解决真实软件难题。",url:"https://qoder.com/",icon:"https://kjdaohang.com/media/tool_icons/imageye___-_imgi_9_c36b365fe77d15efaf93.png",logo:"https://kjdaohang.com/media/tool_icons/imageye___-_imgi_9_c36b365fe77d15efaf93.png",tags:"阿里巴巴,AI编程,IDE",order:0,is_active:!0,views:193,likes_count:0,created_at:"2025-08-23T17:33:47.950828+08:00",updated_at:"2025-08-23T17:33:47.950894+08:00",desc_md:""},{id:370,parent_category:58,parent_category_name:"资源网站",sub_category:79,sub_category_name:"休闲娱乐",name:"小霸王",description:"在线小霸王游戏机，上千款小霸王、红白机、街机、FC在线游戏，各种类型应有尽有，找回童年的乐趣。",url:"https://www.yikm.net/",icon:"https://kjdaohang.com/media/tool_icons/f.png",logo:"https://kjdaohang.com/media/tool_icons/f.png",tags:"在线小游戏,免费",order:0,is_active:!0,views:193,likes_count:0,created_at:"2025-07-05T11:00:06.755830+08:00",updated_at:"2025-07-05T11:01:17.878647+08:00",desc_md:`### 小霸王在线游戏机

- **简介**：小霸王在线游戏机平台汇聚了上千款经典小霸王、红白机、街机、FC等怀旧游戏，无需下载和安装，打开网页即可畅玩。
- **主要特性**：
  - 丰富的游戏种类（动作、冒险、益智、射击等）
  - 支持存档与读取进度
  - 兼容多种设备（PC、手机、平板）
  - 无需注册，免费畅玩
  - 支持手柄操作，体验原汁原味
- **适用人群**：怀旧玩家、80/90后、喜欢经典游戏的用户
- [访问平台](https://www.yikm.net/)
`},{id:338,parent_category:58,parent_category_name:"资源网站",sub_category:60,sub_category_name:"网盘资源",name:"夸克盘搜",description:"一款功能强大面向夸克网盘资源搜索引擎，不仅支持文件存储和分享，还提供了丰富的搜索功能，帮助用户高效地找到所需资源。",url:"https://qkpanso.com/",icon:"https://kjdaohang.com/media/tool_icons/R-C_2_fbKclcL.png",logo:"https://kjdaohang.com/media/tool_icons/R-C_2_fbKclcL.png",tags:"网盘资源",order:0,is_active:!0,views:189,likes_count:0,created_at:"2025-06-19T08:27:33.538269+08:00",updated_at:"2025-06-19T09:17:21.693703+08:00",desc_md:`### 夸克盘搜

- **简介**：夸克盘搜是专为夸克网盘用户打造的资源搜索引擎，支持多种文件类型的高效检索与分享。
- **主要特性**：
  - 支持夸克网盘资源的关键词搜索
  - 分类细致，涵盖学习资料、影视、软件等
  - 提供资源分享与下载链接
  - 界面简洁，操作便捷
  - 适合资源收集与分享爱好者
- **适用人群**：夸克网盘用户、资源搜集者、学习资料需求者
- [访问夸克盘搜](https://qkpanso.com/)
`},{id:386,parent_category:44,parent_category_name:"实用小工具",sub_category:72,sub_category_name:"在线工具",name:"桔子云",description:"提供科学上网代理服务，提供 SSR / V2Ray / Clash 翻墙节点，支持一键订阅，面向开发者及中小企业的公有云服务商，主打香港 CN2、美国 CN2、日本东京 CN2 以及国内高防云服务器。",url:"https://juziyun996.xyz/auth/register?code=a4Be",icon:"https://kjdaohang.com/media/tool_icons/vpn_PNG13.jpg",logo:"https://kjdaohang.com/media/tool_icons/vpn_PNG13.jpg",tags:"科学上网,VPN,代理服务",order:0,is_active:!0,views:187,likes_count:0,created_at:"2025-07-15T12:11:45.434472+08:00",updated_at:"2025-07-15T12:11:45.434515+08:00",desc_md:`### 桔子云

- **开发商**：桔子云团队
- **简介**：桔子云是一家面向开发者和中小企业的公有云服务商，主打科学上网代理服务，提供SSR、V2Ray、Clash等多种翻墙节点，支持一键订阅和多平台使用，拥有香港、美国、日本等多地高速节点。
- **主要特性**：
  - 多种科学上网协议支持（SSR/V2Ray/Clash）
  - 一键订阅与多平台兼容
  - 高速稳定的国际节点
  - 支持高防云服务器
  - 适合开发者和企业用户
- **适用人群**：开发者、中小企业、跨境用户
- [官网链接](https://juziyun996.xyz/auth/register?code=a4Be)
`},{id:19,parent_category:15,parent_category_name:"测试工具",sub_category:17,sub_category_name:"性能测试",name:"JMeter",description:"一款开源的负载测试工具，广泛用于性能测试、负载测试和压力测试",url:"https://jmeter.apache.org",icon:"https://kjdaohang.com/media/tool_icons/Jmeter_uJ6j5De.jpg",logo:"https://kjdaohang.com/media/tool_icons/Jmeter_uJ6j5De.jpg",tags:"性能测试,接口测试",order:0,is_active:!0,views:183,likes_count:0,created_at:"2025-05-21T18:31:38.968319+08:00",updated_at:"2025-05-29T17:58:18.838687+08:00",desc_md:`### JMeter

- **开发商**：Apache 软件基金会
- **简介**：JMeter 是一款开源的性能测试工具，支持 Web、数据库、FTP、SOAP、REST 等多种协议的负载和压力测试。适合性能测试、接口测试和自动化测试场景。
- **主要特性**：
  - 支持多种协议和场景模拟
  - 可视化测试脚本设计与执行
  - 丰富的插件和扩展生态
  - 支持分布式测试和结果分析
  - 自动化集成与报告生成
- **适用人群**：性能测试工程师、开发者、测试团队
- [官网链接](https://jmeter.apache.org)
`},{id:8,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"可灵AI",description:"快手公司自主研发的一款先进的人工智能视频与图像生成工具。",url:"https://app.klingai.com/cn/",icon:"https://kjdaohang.com/media/tool_icons/kelingai-logo_eLbYX1a.png",logo:"https://kjdaohang.com/media/tool_icons/kelingai-logo_eLbYX1a.png",tags:"快手,图像生成,视频生成",order:0,is_active:!0,views:176,likes_count:0,created_at:"2025-05-21T12:54:36.017088+08:00",updated_at:"2025-06-17T14:32:58.785954+08:00",desc_md:""},{id:381,parent_category:49,parent_category_name:"自媒体工具",sub_category:71,sub_category_name:"视频下载",name:"GreenVideo",description:"GreenVideo 是一款免费的在线视频解析和下载工具，支持从全球超过 1000 个视频平台（如 YouTube、哔哩哔哩、抖音、Instagram 等）解析并下载视频。",url:"https://greenvideo.cc/",icon:"https://kjdaohang.com/media/tool_icons/faviconGreenVideo.ico",logo:"https://kjdaohang.com/media/tool_icons/faviconGreenVideo.ico",tags:"视频下载,在线工具",order:0,is_active:!0,views:173,likes_count:0,created_at:"2025-07-10T12:26:23.906685+08:00",updated_at:"2025-07-10T12:26:23.906778+08:00",desc_md:`### GreenVideo

- **开发商**：GreenVideo 团队
- **简介**：GreenVideo 是一款功能强大的在线视频解析与下载工具，支持全球 1000+ 视频平台，包括 YouTube、B站、抖音、Instagram 等。用户只需粘贴视频链接，即可一键解析并下载高清视频，支持多种格式和分辨率选择。
- **主要特性**：
  - 支持全球主流视频平台解析与下载
  - 多格式、多分辨率下载选项
  - 无需安装，在线使用
  - 下载速度快，界面简洁
  - 支持批量下载与历史记录管理
- **适用人群**：自媒体人、视频剪辑师、内容创作者、普通用户
- [官网链接](https://greenvideo.cc/)
`},{id:86,parent_category:15,parent_category_name:"测试工具",sub_category:22,sub_category_name:"抓包工具",name:"Fiddler",description:"Fiddler 是 Windows 平台最好用的可视化抓包工具，也是大家最熟知的 HTTP 代理工具，功能非常强大",url:"https://www.telerik.com/fiddler",icon:"https://kjdaohang.com/media/tool_icons/Fiddler.png",logo:"https://kjdaohang.com/media/tool_icons/Fiddler.png",tags:"抓包,可视化",order:0,is_active:!0,views:153,likes_count:0,created_at:"2025-05-22T09:02:17.358313+08:00",updated_at:"2025-05-29T19:02:53.195110+08:00",desc_md:`### Fiddler

- **开发商**：Telerik（Progress Software）
- **简介**：Fiddler 是一款广受欢迎的 Windows 平台可视化抓包工具，支持 HTTP/HTTPS 流量的捕获、分析和调试。适用于 Web 开发、接口调试和性能分析。
- **主要特性**：
  - 支持 HTTP/HTTPS 抓包与解密
  - 请求/响应内容可视化查看与修改
  - 支持断点调试、自动化脚本
  - 丰富的插件和扩展支持
  - 性能分析和流量统计
  - 支持流量重放和模拟弱网环境
- **适用人群**：Web 开发者、测试工程师、网络安全分析师
- [官网链接](https://www.telerik.com/fiddler)
`},{id:78,parent_category:15,parent_category_name:"测试工具",sub_category:20,sub_category_name:"测试管理",name:"Testlink",description:"一款开源的测试管理工具，常用于软件测试管理，如管理测试用例、测试计划、测试执行和测试报告等。",url:"https://testlink.org/",icon:"https://kjdaohang.com/media/tool_icons/testlink.jpg",logo:"https://kjdaohang.com/media/tool_icons/testlink.jpg",tags:"用例管理",order:0,is_active:!0,views:149,likes_count:0,created_at:"2025-05-22T08:50:31.377332+08:00",updated_at:"2025-05-29T18:01:14.181065+08:00",desc_md:`### Testlink

- **开发商**：开源社区
- **简介**：Testlink 是一款开源的测试管理工具，支持测试用例、测试计划、测试执行和测试报告的全流程管理。适合中大型软件项目的测试管理。
- **主要特性**：
  - 测试用例和测试计划管理
  - 测试执行与结果跟踪
  - 支持多项目和多用户协作
  - 丰富的统计报表和导出功能
  - 与主流缺陷跟踪系统集成
- **适用人群**：测试经理、测试工程师、项目管理团队
- [官网链接](https://testlink.org/)
`},{id:393,parent_category:58,parent_category_name:"资源网站",sub_category:80,sub_category_name:"大模型云平台",name:"硅基流动",description:"专注于人工智能基础设施（AI Infra），推出的一站式大模型云服务平台SiliconCloud，集成了全球顶尖的开源模型，涵盖文本生成、图像生成、视频生成等多种多模态模型。",url:"https://cloud.siliconflow.cn/i/ZmrDHrXM",icon:"https://kjdaohang.com/media/tool_icons/1740019222-DM_20250220104007_001.png",logo:"https://kjdaohang.com/media/tool_icons/1740019222-DM_20250220104007_001.png",tags:"AI基础设施,大模型云平台",order:0,is_active:!0,views:141,likes_count:0,created_at:"2025-07-18T14:11:07.311668+08:00",updated_at:"2025-07-18T16:22:39.504649+08:00",desc_md:`### 硅基流动 SiliconCloud

- **简介**：硅基流动 SiliconCloud 是专注于AI基础设施的一站式大模型云服务平台，集成全球顶尖开源模型，支持文本、图像、视频等多模态AI应用。
- **主要特性**：
  - 丰富的大模型库，支持多模态生成
  - 云端算力，按需调用
  - 支持API接入与在线体验
  - 持续更新最新AI模型
  - 适合开发者、企业、科研机构
- **适用人群**：AI开发者、企业技术团队、科研人员
- [访问 SiliconCloud](https://cloud.siliconflow.cn/i/ZmrDHrXM)
`},{id:185,parent_category:63,parent_category_name:"办公神器",sub_category:68,sub_category_name:"工具箱",name:"XTools工具箱",description:"XTools是一款功能强大的在线工具集合，无论是在日常生活还是工作学习中，XTools都能满足您不同的需求。",url:"https://taotaoxu.com/XTools/home",icon:"https://kjdaohang.com/media/tool_icons/XTools%E5%B7%A5%E5%85%B7%E7%AE%B1.jpg",logo:"https://kjdaohang.com/media/tool_icons/XTools%E5%B7%A5%E5%85%B7%E7%AE%B1.jpg",tags:"在线工具合集",order:0,is_active:!0,views:140,likes_count:0,created_at:"2025-05-22T14:12:25.504712+08:00",updated_at:"2025-05-27T10:37:22.889189+08:00",desc_md:`### XTools工具箱

- **开发商**：XTools 团队
- **简介**：XTools工具箱是一款集成多种实用工具的在线平台，涵盖文本处理、格式转换、数据分析等多种功能，满足日常和工作学习的多样需求。
- **主要特性**：
  - 多种文本、数据、格式处理工具
  - 支持批量操作和自动化处理
  - 界面简洁，操作便捷
  - 持续更新，功能丰富
- **适用人群**：学生、职场人士、开发者、数据分析师
- [官网链接](https://taotaoxu.com/XTools/home)
`},{id:302,parent_category:63,parent_category_name:"办公神器",sub_category:67,sub_category_name:"PDF工具",name:"PDF24",description:"一款功能强大且免费的PDF处理软件。",url:"https://tools.pdf24.org/zh/",icon:"https://kjdaohang.com/media/tool_icons/PDF24.jpg",logo:"https://kjdaohang.com/media/tool_icons/PDF24.jpg",tags:"PDF处理软件",order:0,is_active:!0,views:134,likes_count:0,created_at:"2025-05-22T20:51:25.172751+08:00",updated_at:"2025-05-27T10:46:05.040575+08:00",desc_md:`### PDF24

- **开发商**：Geek Software GmbH
- **简介**：PDF24 是一款免费且功能丰富的 PDF 处理工具，支持 PDF 创建、合并、拆分、压缩、转换等多种操作，适合个人和企业用户。
- **主要特性**：
  - 支持 PDF 合并、拆分、压缩、转换
  - 提供在线和桌面端应用
  - 支持批量处理和多格式转换
  - 界面简洁，操作便捷
  - 免费使用，无广告
- **适用人群**：办公用户、学生、企业文档处理
- [官网链接](https://tools.pdf24.org/zh/)
`},{id:304,parent_category:49,parent_category_name:"自媒体工具",sub_category:51,sub_category_name:"素材库",name:"Pixabay",description:"提供 90 万＋免费的照片、矢量文件和艺术插图，支持中文搜索，图片可用于商业用途，涵盖各种场景和主题，能满足不同公众号文章的配图需求",url:"https://pixabay.com/zh/",icon:"https://kjdaohang.com/media/tool_icons/Pixabay.png",logo:"https://kjdaohang.com/media/tool_icons/Pixabay.png",tags:"免费素材,图片素材,免费下载",order:0,is_active:!0,views:132,likes_count:0,created_at:"2025-06-02T09:09:18.711152+08:00",updated_at:"2025-06-02T09:57:07.884523+08:00",desc_md:`### Pixabay

- **开发商**：Pixabay 团队
- **简介**：Pixabay 是全球知名的免费图片素材库，提供超过 90 万张高质量照片、矢量图和插画，支持中文搜索，所有图片均可免费商用，无版权限制，适合自媒体配图、设计、广告等多种场景。
- **主要特性**：
  - 海量免费图片、矢量图、插画
  - 支持中文搜索与多条件筛选
  - 图片可商用，无需署名
  - 多分辨率下载，适配不同需求
  - 持续更新，涵盖多种主题
- **适用人群**：自媒体人、设计师、内容创作者、企业用户
- [官网链接](https://pixabay.com/zh/)
`},{id:116,parent_category:35,parent_category_name:"运维工具",sub_category:39,sub_category_name:"容器管理",name:"Kubernetes",description:"Kubernetes（简称为K8s）是一个开源的容器编排平台，用于自动化部署、扩展和管理容器化应用程序。",url:"https://kubernetes.io/",icon:"https://kjdaohang.com/media/tool_icons/Kubernetes.jpg",logo:"https://kjdaohang.com/media/tool_icons/Kubernetes.jpg",tags:"容器编排平台",order:0,is_active:!0,views:130,likes_count:0,created_at:"2025-05-22T10:32:09.413484+08:00",updated_at:"2025-05-29T18:30:31.981810+08:00",desc_md:`### Kubernetes

- **开发商**：CNCF
- **简介**：Kubernetes 是一款开源的容器编排平台，支持自动化部署、扩展和管理容器化应用，广泛应用于云原生和微服务架构。
- **主要特性**：
  - 自动化容器编排与调度
  - 支持集群管理和弹性伸缩
  - 服务发现与负载均衡
  - 丰富的插件和生态系统
  - 与主流云平台无缝集成
- **适用人群**：运维工程师、云原生开发者、企业 IT 团队
- [官网链接](https://kubernetes.io/)
`},{id:90,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"Playwright",description:"由 Microsoft 开发的新一代 跨平台自动化测试框架，支持 Web 应用（浏览器） 和 移动端应用（通过适配工具） 的自动化测试",url:"https://playwright.dev/",icon:"https://kjdaohang.com/media/tool_icons/Playwright.jpg",logo:"https://kjdaohang.com/media/tool_icons/Playwright.jpg",tags:"微软,Web自动化测试",order:0,is_active:!0,views:129,likes_count:0,created_at:"2025-05-22T09:10:03.280517+08:00",updated_at:"2025-05-26T20:55:09.143900+08:00",desc_md:`### Playwright

- **开发商**：Microsoft
- **简介**：Playwright 是微软推出的新一代跨平台自动化测试框架，支持多浏览器（Chromium、Firefox、WebKit）和移动端自动化测试，适合现代 Web 应用测试。
- **主要特性**：
  - 支持多浏览器和多平台
  - 强大的自动化脚本与断言能力
  - 支持并发测试与分布式执行
  - 丰富的调试工具和报告
- **适用人群**：前端开发者、测试工程师、自动化测试团队
- [官网链接](https://playwright.dev/)
`},{id:112,parent_category:15,parent_category_name:"测试工具",sub_category:20,sub_category_name:"测试管理",name:"MeterSphere",description:"一站式开源持续测试平台，涵盖测试跟踪、接口测试、性能测试、团队协作等功能，兼容 JMeter 等开源标准。",url:"https://fit2cloud.com/metersphere/",icon:"https://kjdaohang.com/media/tool_icons/MeterSphere.png",logo:"https://kjdaohang.com/media/tool_icons/MeterSphere.png",tags:"测试平台,开源",order:0,is_active:!0,views:123,likes_count:0,created_at:"2025-05-22T10:26:50.014838+08:00",updated_at:"2025-05-26T18:38:18.531755+08:00",desc_md:`### MeterSphere

- **开发商**：FIT2CLOUD
- **简介**：MeterSphere 是一站式开源持续测试平台，集测试管理、接口测试、性能测试、团队协作于一体，兼容 JMeter 等主流开源标准。
- **主要特性**：
  - 测试用例、计划与执行管理
  - 支持接口测试与性能测试
  - 团队协作与权限管理
  - 丰富的统计分析与报告
  - 支持私有化部署和插件扩展
- **适用人群**：测试团队、开发团队、企业级项目组
- [官网链接](https://fit2cloud.com/metersphere/)
`},{id:37,parent_category:63,parent_category_name:"办公神器",sub_category:64,sub_category_name:"表格处理",name:"ChatExcel",description:"大模型驱动的Excel数据处理工具，基于大模型交互的表格处理系统，允许用户通过对话方式完成数据整理和可视化分析。",url:"https://www.chatexcel.com/#/",icon:"https://kjdaohang.com/media/tool_icons/ChatExcel.jpg",logo:"https://kjdaohang.com/media/tool_icons/ChatExcel.jpg",tags:"大模型驱动,Excel处理",order:0,is_active:!0,views:119,likes_count:0,created_at:"2025-05-21T20:54:36.801512+08:00",updated_at:"2025-05-28T19:15:24.255123+08:00",desc_md:`### ChatExcel

- **开发商**：ChatExcel 团队
- **简介**：ChatExcel 是一款基于大模型驱动的 Excel 数据处理工具，用户可以通过自然语言对话的方式完成表格数据的整理、分析和可视化。适合不会复杂公式和脚本的用户，极大提升数据处理效率。
- **主要特性**：
  - 支持自然语言对话式数据处理
  - 自动生成数据分析和可视化结果
  - 兼容 Excel 文件格式，支持导入导出
  - 智能补全、数据清洗和批量操作
  - 适配多种办公场景和行业需求
- **适用人群**：数据分析师、职场办公用户、教育行业、对 Excel 不熟悉的用户
- [官网链接](https://www.chatexcel.com/#/)
`},{id:142,parent_category:58,parent_category_name:"资源网站",sub_category:59,sub_category_name:"学习资源",name:"动手学深度学习",description:"一本广泛使用的深度学习教材，其官网提供了丰富的学习资源和文档",url:"https://zh.d2l.ai/",icon:"https://kjdaohang.com/media/tool_icons/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.png",logo:"https://kjdaohang.com/media/tool_icons/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.png",tags:"学习网站,深度学习",order:0,is_active:!0,views:116,likes_count:0,created_at:"2025-05-22T11:48:12.605160+08:00",updated_at:"2025-05-27T14:58:11.620792+08:00",desc_md:`### 动手学深度学习（D2L）

- **简介**：《动手学深度学习》是一本面向初学者的深度学习教材，官网提供了丰富的代码示例、交互式文档和多语言版本。
- **主要特性**：
  - 系统讲解深度学习基础理论与实践
  - 提供PyTorch、MXNet等多种实现
  - 代码可在线运行，便于动手实践
  - 社区活跃，持续更新内容
  - 支持中英文等多语言
- **适用人群**：AI初学者、深度学习爱好者、在校学生、开发者
- [访问 D2L 官网](https://zh.d2l.ai/)
`},{id:346,parent_category:40,parent_category_name:"求职面试",sub_category:42,sub_category_name:"简历制作",name:"极简Polebrief",description:"一个专注于提供简洁、灵活的简历设计在线平台，适合不同行业、经验和技能集的求职者。",url:"https://www.polebrief.com/",icon:"https://kjdaohang.com/media/tool_icons/7aa1b8d5-885f-4580-b754-dfa8d5b14dbd.jpg",logo:"https://kjdaohang.com/media/tool_icons/7aa1b8d5-885f-4580-b754-dfa8d5b14dbd.jpg",tags:"简历设计,简历制作",order:0,is_active:!0,views:114,likes_count:0,created_at:"2025-06-20T13:59:29.834139+08:00",updated_at:"2025-06-20T13:59:29.834185+08:00",desc_md:`### 极简Polebrief

- **开发商**：Polebrief 团队
- **简介**：极简Polebrief 是一款专注于极简风格的在线简历设计平台，提供多种模板和自定义选项，帮助用户快速生成专业、个性化的简历。支持多行业、多岗位需求，适合不同阶段的求职者。
- **主要特性**：
  - 多种极简风格简历模板
  - 支持内容自定义与模块拖拽
  - 一键导出PDF/Word格式
  - 支持多语言与多行业
  - 简单易用，界面清爽
- **适用人群**：应届生、职场人士、跨行业求职者
- [官网链接](https://www.polebrief.com/)
`},{id:377,parent_category:40,parent_category_name:"求职面试",sub_category:42,sub_category_name:"简历制作",name:"codecv",description:"一款基于 Markdown 语法的在线简历制作工具，开源，支持本地化部署。",url:"https://codecv.top/login?inviter=6c670e5d686b1bc404a8809c17ea61c7",icon:"https://kjdaohang.com/media/tool_icons/imgi_1_logo-C3GgpKrf.png",logo:"https://kjdaohang.com/media/tool_icons/imgi_1_logo-C3GgpKrf.png",tags:"简历制作,简历模板下载,开源",order:0,is_active:!0,views:110,likes_count:0,created_at:"2025-07-07T09:08:26.635290+08:00",updated_at:"2025-07-07T09:09:09.740169+08:00",desc_md:`### codecv

- **开发商**：codecv 社区
- **简介**：codecv 是一款基于 Markdown 语法的开源在线简历制作工具，支持本地化部署和多种简历模板。用户可通过 Markdown 轻松编辑内容，实时预览并导出高质量简历。
- **主要特性**：
  - Markdown 语法编辑，所见即所得
  - 多种简历模板与主题切换
  - 支持本地化部署与数据安全
  - 一键导出 PDF/Word
  - 开源免费，社区活跃
- **适用人群**：开发者、技术求职者、开源爱好者
- [官网链接](https://codecv.top/login?inviter=6c670e5d686b1bc404a8809c17ea61c7)
`},{id:109,parent_category:15,parent_category_name:"测试工具",sub_category:17,sub_category_name:"性能测试",name:"Locust",description:"一款开源的、基于 Python 的分布式压力测试工具",url:"https://www.locust.io/",icon:"https://kjdaohang.com/media/tool_icons/Locust.jpg",logo:"https://kjdaohang.com/media/tool_icons/Locust.jpg",tags:"Python,负载测试",order:0,is_active:!0,views:105,likes_count:0,created_at:"2025-05-22T10:21:18.092560+08:00",updated_at:"2025-05-29T17:58:36.329790+08:00",desc_md:`### Locust

- **开发商**：开源社区
- **简介**：Locust 是一款基于 Python 的开源分布式压力测试工具，支持自定义用户行为脚本，适合 Web、API 等多种场景的性能测试。
- **主要特性**：
  - Python 脚本自定义用户行为
  - 支持分布式并发测试
  - 实时 Web UI 监控和结果展示
  - 易于集成自动化测试流程
- **适用人群**：性能测试工程师、开发者、自动化测试团队
- [官网链接](https://www.locust.io/)
`},{id:219,parent_category:15,parent_category_name:"测试工具",sub_category:22,sub_category_name:"抓包工具",name:"Wireshark",description:"一款全球领先的 开源网络协议分析工具，广泛应用于网络故障排查、协议开发、安全审计、性能优化等领域",url:"http://www.wireshark.org/",icon:"https://kjdaohang.com/media/tool_icons/Wireshark.png",logo:"https://kjdaohang.com/media/tool_icons/Wireshark.png",tags:"抓包,网络故障排查",order:0,is_active:!0,views:101,likes_count:0,created_at:"2025-05-22T16:30:06.511548+08:00",updated_at:"2025-05-29T20:01:36.775111+08:00",desc_md:`### Wireshark

- **开发商**：Wireshark Foundation
- **简介**：Wireshark 是全球领先的开源网络协议分析工具，支持数百种网络协议的深度解析。广泛应用于网络故障排查、协议开发、安全审计和性能优化。
- **主要特性**：
  - 支持实时抓包和离线分析
  - 深度解析多种网络协议
  - 丰富的过滤和搜索功能
  - 可视化数据包分析和统计
  - 跨平台支持（Windows、macOS、Linux）
  - 支持导出为 pcap 文件，便于共享和复现
- **适用人群**：网络工程师、安全分析师、开发者
- [官网链接](http://www.wireshark.org/)
`},{id:13,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"Coze智能体",description:"字节跳动推出的AI智能体平台，支持自定义AI助手。",url:"https://www.coze.cn",icon:"https://kjdaohang.com/media/tool_icons/coze-logo_m1LcnLX.png",logo:"https://kjdaohang.com/media/tool_icons/coze-logo_m1LcnLX.png",tags:"AI,智能体,定制",order:0,is_active:!0,views:101,likes_count:0,created_at:"2025-05-21T18:24:13.999727+08:00",updated_at:"2025-05-29T20:23:24.368140+08:00",desc_md:`### Coze智能体

- **开发商**：字节跳动
- **简介**：Coze智能体是字节跳动推出的AI智能体平台，支持用户自定义AI助手，适用于多种业务场景和个性化需求。
- **主要特性**：
  - 支持自定义AI助手与智能体
  - 多模型能力集成
  - 场景化工作流与自动化
  - 丰富的API与插件生态
  - 简单易用的可视化配置
- **适用人群**：企业用户、开发者、产品经理、自动化办公用户
- [官网链接](https://www.coze.cn)
`},{id:351,parent_category:49,parent_category_name:"自媒体工具",sub_category:56,sub_category_name:"聚合网站",name:"Link3",description:"一个功能强大且实用的链接聚合工具，支持将分散在各个社交平台（如微博、微信公众号、抖音、B站等）的账号和资源集中管理，并通过一个专属链接或二维码进行分享。",url:"https://link3.cc/",icon:"https://kjdaohang.com/media/tool_icons/link3.png",logo:"https://kjdaohang.com/media/tool_icons/link3.png",tags:"聚合网站,链接聚合",order:0,is_active:!0,views:100,likes_count:0,created_at:"2025-06-24T20:29:08.365294+08:00",updated_at:"2025-06-24T20:29:08.365335+08:00",desc_md:`### Link3

- **开发商**：Link3 团队
- **简介**：Link3 是一款专为自媒体人、内容创作者和品牌打造的链接聚合工具，支持将微博、微信公众号、抖音、B站等多个平台的账号和资源集中管理。用户可通过一个专属链接或二维码，将所有社交账号、作品、联系方式等一站式展示，方便粉丝快速获取和分享。
- **主要特性**：
  - 多平台账号与资源聚合
  - 支持生成专属聚合页和二维码
  - 可自定义页面风格与内容模块
  - 数据统计与访问分析
  - 一键分享，提升品牌曝光
- **适用人群**：自媒体人、内容创作者、品牌方、企业营销人员
- [官网链接](https://link3.cc/)
`},{id:392,parent_category:58,parent_category_name:"资源网站",sub_category:80,sub_category_name:"大模型云平台",name:"魔搭社区",description:"魔搭社区（ModelScope）是由阿里巴巴达摩院联合中国计算机学会（CCF）开源发展委员会于2022年云栖大会推出的AI大模型开源社区，提供数据集、工具及免费算力（如100小时云端算力，含32G/16G显存资源）解决国内访问Hugging Face受限问题，专注中文模型与多模态支持。",url:"https://modelscope.cn/",icon:"https://kjdaohang.com/media/tool_icons/128.ico",logo:"https://kjdaohang.com/media/tool_icons/128.ico",tags:"阿里巴巴,免费算力,大模型社区",order:0,is_active:!0,views:96,likes_count:0,created_at:"2025-07-18T12:46:53.260665+08:00",updated_at:"2025-07-18T14:12:44.673949+08:00",desc_md:`### 魔搭社区

- **开发商**：阿里云
- **简介**：魔搭社区是阿里云推出的AI模型社区，聚合了丰富的开源大模型和AI工具，支持在线体验、模型下载和一键部署。
- **主要特性**：
  - 丰富的开源大模型库
  - 在线体验与一键部署
  - 社区交流与资源共享
  - 支持多种AI应用场景
  - 持续更新与生态扩展
- **适用人群**：开发者、AI研究者、企业用户
- [官网链接](https://modelscope.cn/)
`},{id:114,parent_category:35,parent_category_name:"运维工具",sub_category:38,sub_category_name:"CICD",name:"Jenkins",description:"一款开源的 持续集成（CI）和持续部署（CD）工具，拥有超过1500个插件，被广泛应用于 DevOps 实践中。",url:"https://jenkins.io/",icon:"https://kjdaohang.com/media/tool_icons/Jenkins.png",logo:"https://kjdaohang.com/media/tool_icons/Jenkins.png",tags:"持续集成,CICD",order:0,is_active:!0,views:96,likes_count:0,created_at:"2025-05-22T10:29:49.522489+08:00",updated_at:"2025-05-27T09:55:38.746241+08:00",desc_md:`### Jenkins

- **开发商**：Jenkins 社区
- **简介**：Jenkins 是一款开源的自动化服务器，广泛用于持续集成和持续部署。支持多种插件扩展，适合自动化构建、测试和交付。
- **主要特性**：
  - 插件丰富，支持多种开发语言和工具链
  - 灵活的流水线和任务调度
  - 支持分布式构建和多节点
  - 易于集成第三方服务和通知
- **适用人群**：开发者、DevOps 团队、自动化测试工程师
- [官网链接](https://www.jenkins.io/)
`},{id:20,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"Selenium",description:"一套用于自动化Web应用测试的工具，广泛应用于测试和开发领域。",url:"https://www.selenium.dev",icon:"https://kjdaohang.com/media/tool_icons/selenium.png",logo:"https://kjdaohang.com/media/tool_icons/selenium.png",tags:"Web,自动化测试",order:0,is_active:!0,views:96,likes_count:0,created_at:"2025-05-21T18:33:00.772492+08:00",updated_at:"2025-09-21T09:40:39.109679+08:00",desc_md:`### Selenium

- **开发商**：Selenium 团队
- **简介**：Selenium 是全球最流行的 Web 自动化测试工具套件，支持多种编程语言和主流浏览器，广泛应用于自动化测试和回归测试。
- **主要特性**：
  - 支持多语言（Java、Python、C#、JS 等）
  - 跨浏览器、跨平台自动化
  - 丰富的 WebDriver API
  - 支持分布式执行与集成 CI/CD
- **适用人群**：测试工程师、开发者、自动化测试团队
- [官网链接](https://www.selenium.dev)
`},{id:88,parent_category:15,parent_category_name:"测试工具",sub_category:19,sub_category_name:"构造数据",name:"WireMock",description:"一款开源的测试工具，支持HTTP响应存根、请求验证、代理/拦截、记录和回放，最直接的用途是为Web/移动应用构建Mock Service",url:"https://wiremock.org/docs/",icon:"https://kjdaohang.com/media/tool_icons/wiremock.png",logo:"https://kjdaohang.com/media/tool_icons/wiremock.png",tags:"Mock Service",order:0,is_active:!0,views:93,likes_count:0,created_at:"2025-05-22T09:07:45.324791+08:00",updated_at:"2025-05-26T20:02:01.356463+08:00",desc_md:`### WireMock

- **开发商**：开源社区
- **简介**：WireMock 是一款开源的 HTTP Mock 服务工具，支持响应存根、请求验证、代理/拦截、记录和回放，适合 Web 和移动应用的接口模拟和自动化测试。
- **主要特性**：
  - 支持 HTTP/HTTPS Mock 服务
  - 请求与响应自定义和断言
  - 支持代理、拦截、记录和回放
  - 丰富的配置和扩展能力
  - 易于集成到自动化测试流程
- **适用人群**：开发者、测试工程师、自动化测试团队
- [官网链接](https://wiremock.org/docs/)
`},{id:17,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"Manus",description:"全球首款通用型 AI Agent，能够独立思考、规划并执行复杂任务",url:"https://manus.im/",icon:"https://kjdaohang.com/media/tool_icons/5-7MaDXSqFVQhJjDY8rbjzRuoAqlqXpQhoYWYqSgkgRo6Qo1imTF9nHaOTvNxIeEhg_OCEMzuySjf_8thWLZB.png",logo:"https://kjdaohang.com/media/tool_icons/5-7MaDXSqFVQhJjDY8rbjzRuoAqlqXpQhoYWYqSgkgRo6Qo1imTF9nHaOTvNxIeEhg_OCEMzuySjf_8thWLZB.png",tags:"AI智能体,Agent",order:0,is_active:!0,views:93,likes_count:0,created_at:"2025-05-21T18:29:15.029151+08:00",updated_at:"2025-05-29T20:23:03.577242+08:00",desc_md:`### Manus

- **开发商**：Manus 团队
- **简介**：Manus 是全球首款通用型 AI Agent，具备独立思考、规划和执行复杂任务的能力，适合自动化办公、智能助手等多场景。
- **主要特性**：
  - 通用型AI智能体
  - 自动任务规划与执行
  - 多场景适配与自学习能力
  - 支持API集成与扩展
  - 持续进化与自我优化
- **适用人群**：企业用户、开发者、自动化办公用户
- [官网链接](https://manus.im/)
`},{id:106,parent_category:44,parent_category_name:"实用小工具",sub_category:48,sub_category_name:"表情包",name:"EMOJI中文网",description:"一个方便的EMOJI复制和粘贴工具，提供了每个EMOJI表情符号的含义。",url:"https://www.emojiall.com/zh-hans",icon:"https://kjdaohang.com/media/tool_icons/emoji.jpg",logo:"https://kjdaohang.com/media/tool_icons/emoji.jpg",tags:"Emoji",order:0,is_active:!0,views:91,likes_count:1,created_at:"2025-05-22T10:17:09.603742+08:00",updated_at:"2025-05-29T19:35:05.031711+08:00",desc_md:`### EMOJI中文网

- **开发商**：EMOJI中文网团队
- **简介**：EMOJI中文网是一个专注于Emoji表情符号的在线工具，提供丰富的Emoji分类、含义解释、复制粘贴功能，帮助用户快速查找和使用各种表情符号。支持多平台展示，适合社交、设计、内容创作等场景。
- **主要特性**：
  - 全面Emoji分类与检索
  - 一键复制粘贴
  - 提供详细Emoji含义和用法
  - 支持多平台兼容性
  - 持续更新最新Emoji
- **适用人群**：社交用户、内容创作者、设计师
- [官网链接](https://www.emojiall.com/zh-hans)
`},{id:310,parent_category:40,parent_category_name:"求职面试",sub_category:43,sub_category_name:"面试刷题",name:"LeetCode",description:"一个全球广泛使用的编程题库平台，专注于帮助开发者提高算法和数据结构能力，特别是为求职者提供面试准备的工具。",url:"https://leetcode.cn/",icon:"https://kjdaohang.com/media/tool_icons/logo-711e116152be014f445f50aa6a369231.png",logo:"https://kjdaohang.com/media/tool_icons/logo-711e116152be014f445f50aa6a369231.png",tags:"编程题库,面试刷题,编程练习",order:0,is_active:!0,views:88,likes_count:0,created_at:"2025-06-07T11:25:44.817097+08:00",updated_at:"2025-06-07T11:34:53.711489+08:00",desc_md:`### LeetCode（国际）

- **开发商**：LeetCode Inc.
- **简介**：LeetCode 是全球领先的编程题库和算法训练平台，拥有数千道高质量算法题，涵盖数据结构、数据库、Shell等多领域，支持多语言在线编程。平台还提供面试准备、竞赛、讨论社区等功能。
- **主要特性**：
  - 丰富的算法与数据结构题库
  - 多语言在线编程与自动评测
  - 题解、讨论区与面试经验分享
  - 每周竞赛与排行榜
  - 企业面试题与模拟面试
- **适用人群**：全球开发者、算法爱好者、IT求职者
- [官网链接](https://leetcode.com/)
`},{id:107,parent_category:15,parent_category_name:"测试工具",sub_category:17,sub_category_name:"性能测试",name:"LoadRunner",description:"一款功能强大、企业级的性能测试工具，适用于各种性能测试场景，功能强大！",url:"https://www.loadrunner.cn/",icon:"https://kjdaohang.com/media/tool_icons/loadrunner.jpg",logo:"https://kjdaohang.com/media/tool_icons/loadrunner.jpg",tags:"企业级性能测试",order:0,is_active:!0,views:88,likes_count:0,created_at:"2025-05-22T10:19:14.226987+08:00",updated_at:"2025-05-29T18:22:16.677747+08:00",desc_md:`### LoadRunner

- **开发商**：Micro Focus
- **简介**：LoadRunner 是一款企业级性能测试工具，支持多种协议和大规模并发场景，广泛应用于企业级应用、Web、数据库等性能测试。
- **主要特性**：
  - 支持多种协议（Web、数据库、SAP 等）
  - 强大的脚本录制与回放功能
  - 分布式并发测试与监控
  - 丰富的性能分析与报告
  - 企业级集成与扩展能力
- **适用人群**：性能测试工程师、企业 IT 团队、系统集成商
- [官网链接](https://www.loadrunner.cn/)
`},{id:15,parent_category:3,parent_category_name:"AI工具",sub_category:8,sub_category_name:"AI视频",name:"海螺AI",description:"海螺AI视频：让每个想法都是一部大片",url:"https://hailuoai.com/",icon:"https://kjdaohang.com/media/tool_icons/favicon_q8sISIl.png",logo:"https://kjdaohang.com/media/tool_icons/favicon_q8sISIl.png",tags:"AI视频",order:0,is_active:!0,views:86,likes_count:0,created_at:"2025-05-21T18:27:18.474242+08:00",updated_at:"2025-05-24T08:12:22.355981+08:00",desc_md:""},{id:405,parent_category:44,parent_category_name:"实用小工具",sub_category:72,sub_category_name:"在线工具",name:"在线 Nginx 配置生成器​",description:"一款非常实用的 ​​在线 Nginx 配置生成器​​，可通过填写表单（比如是否启用 HTTPS、是否代理到 Node.js/PHP、是否需要静态文件服务等），​​自动生成完整的 Nginx 配置文件。",url:"https://nginxconfig.io/",icon:"https://kjdaohang.com/media/tool_icons/20210709104033.png",logo:"https://kjdaohang.com/media/tool_icons/20210709104033.png",tags:"Nginx,反向代理,配置生成器",order:0,is_active:!0,views:80,likes_count:0,created_at:"2025-08-27T19:53:32.840455+08:00",updated_at:"2025-08-27T19:53:32.840492+08:00",desc_md:`### 在线 Nginx 配置生成器

- **开发商**：nginxconfig.io 团队
- **简介**：在线 Nginx 配置生成器是一款面向开发者和运维人员的实用工具，通过可视化表单填写，自动生成高质量的 Nginx 配置文件，支持HTTPS、反向代理、静态文件服务等多种场景，极大简化了Nginx配置流程。
- **主要特性**：
  - 可视化配置表单，自动生成Nginx配置
  - 支持HTTPS、反向代理、静态服务等多场景
  - 配置文件可直接下载或复制
  - 支持多语言界面
  - 持续更新，适配新特性
- **适用人群**：开发者、运维工程师、网站管理员
- [官网链接](https://nginxconfig.io/)
`},{id:342,parent_category:44,parent_category_name:"实用小工具",sub_category:77,sub_category_name:"PPT工具",name:"第一PPT",description:"一个专注于提供免费PPT模板下载的专业平台，提供多种类型的PPT模板，包括工作汇报、教育培训、产品介绍、节日庆典等，满足不同场景的需求。",url:"https://www.1ppt.com/",icon:"https://kjdaohang.com/media/tool_icons/22b490d6f0df1bb203dbc34df02b07d2.jpg",logo:"https://kjdaohang.com/media/tool_icons/22b490d6f0df1bb203dbc34df02b07d2.jpg",tags:"PPT模板,PPT免费下载",order:0,is_active:!0,views:79,likes_count:0,created_at:"2025-06-19T14:12:28.139330+08:00",updated_at:"2025-06-19T14:12:28.139434+08:00",desc_md:`### 第一PPT

- **开发商**：第一PPT 团队
- **简介**：第一PPT 是国内知名的 PPT 模板下载平台，提供海量免费 PPT 模板，涵盖工作汇报、教育培训、产品介绍、节日庆典等多种场景，支持一键下载和分类筛选。
- **主要特性**：
  - 海量 PPT 模板免费下载
  - 多场景、多风格分类
  - 支持一键下载与预览
  - 持续更新模板库
  - 提供 PPT 教程与素材
- **适用人群**：学生、职场人士、教师、内容创作者
- [官网链接](https://www.1ppt.com/)
`},{id:99,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"Robot Framework",description:"一个基于 Python 的开源自动化测试框架，以 关键字驱动（Keyword-Driven） 和 低代码 为核心。",url:"https://robotframework.org/",icon:"https://kjdaohang.com/media/tool_icons/Robot_Framework.jpg",logo:"https://kjdaohang.com/media/tool_icons/Robot_Framework.jpg",tags:"测试框架,关键字驱动",order:0,is_active:!0,views:79,likes_count:1,created_at:"2025-05-22T09:23:12.897576+08:00",updated_at:"2025-05-29T19:03:18.123465+08:00",desc_md:`### Robot Framework

- **开发商**：开源社区
- **简介**：Robot Framework 是一款基于 Python 的开源自动化测试框架，采用关键字驱动和低代码理念，支持 Web、接口、桌面等多种自动化测试场景。
- **主要特性**：
  - 关键字驱动测试用例编写
  - 丰富的第三方库和插件
  - 支持多种测试类型（Web、API、桌面等）
  - 易于集成 CI/CD 流程
- **适用人群**：自动化测试工程师、开发者、测试团队
- [官网链接](https://robotframework.org/)
`},{id:339,parent_category:58,parent_category_name:"资源网站",sub_category:60,sub_category_name:"网盘资源",name:"学搜搜",description:"一个专注于百度云资源搜索的网站，主要提供各类网盘资源的免费下载服务，支持搜索学习资料，如考研、考级、考证、IT教程等。",url:"https://www.xuesousou.net/",icon:"https://kjdaohang.com/media/tool_icons/PixPin_2025-06-19_09-18-14.png",logo:"https://kjdaohang.com/media/tool_icons/PixPin_2025-06-19_09-18-14.png",tags:"网盘资源",order:0,is_active:!0,views:77,likes_count:0,created_at:"2025-06-19T08:29:56.157446+08:00",updated_at:"2025-06-19T09:19:11.187171+08:00",desc_md:`### 学搜搜

- **简介**：学搜搜是专注于百度云盘资源搜索与分享的平台，支持各类学习资料、软件、视频等资源的高效检索与免费下载。
- **主要特性**：
  - 支持关键词快速搜索百度云盘资源
  - 分类细致，涵盖考研、考级、IT教程等
  - 提供资源直链与提取码
  - 界面简洁，操作便捷
  - 适合学习资料搜集与分享
- **适用人群**：学生、教师、资源搜集者
- [访问学搜搜](https://www.xuesousou.net/)
`},{id:301,parent_category:63,parent_category_name:"办公神器",sub_category:67,sub_category_name:"PDF工具",name:"PDF toWord Converter",description:"一种将 PDF 文件转换为 Word 文档格式的工具",url:"https://www.gonitro.com/pdf-to-word",icon:"https://kjdaohang.com/media/tool_icons/PDF.jpg",logo:"https://kjdaohang.com/media/tool_icons/PDF.jpg",tags:"PDF处理软件",order:0,is_active:!0,views:77,likes_count:0,created_at:"2025-05-22T20:50:22.077549+08:00",updated_at:"2025-05-29T17:59:01.799949+08:00",desc_md:`### PDF toWord Converter

- **开发商**：Nitro Software, Inc.
- **简介**：PDF toWord Converter 是一款专业的 PDF 转 Word 工具，支持高质量、批量转换，保留原文档格式和排版。
- **主要特性**：
  - 支持 PDF 转 Word、Excel、PPT 等多种格式
  - 保留原文档排版和图片
  - 支持批量转换和大文件处理
  - 提供在线和桌面端服务
- **适用人群**：办公用户、学生、文档编辑者
- [官网链接](https://www.gonitro.com/pdf-to-word)
`},{id:117,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"Gamma",description:"一款由人工智能驱动的工具，可以轻松创建令人惊叹的PPT演示文稿、网页和文档。",url:"https://gamma.app/",icon:"https://kjdaohang.com/media/tool_icons/default_uON2ko2.png",logo:"https://kjdaohang.com/media/tool_icons/default_uON2ko2.png",tags:"PPT自动生成",order:0,is_active:!0,views:76,likes_count:0,created_at:"2025-05-22T10:38:28.402219+08:00",updated_at:"2025-05-24T15:05:44.962834+08:00",desc_md:`### Gamma

- **开发商**：Gamma 团队
- **简介**：Gamma 是一款 AI 驱动的内容创作工具，支持一键生成高质量 PPT 演示文稿、网页和文档，极大提升内容创作效率。
- **主要特性**：
  - AI 自动生成 PPT、网页、文档
  - 丰富的模板和设计风格
  - 支持内容编辑与协作
  - 一键导出多种格式
  - 界面简洁，操作便捷
- **适用人群**：职场人士、学生、内容创作者、企业用户
- [官网链接](https://gamma.app/)
`},{id:349,parent_category:44,parent_category_name:"实用小工具",sub_category:72,sub_category_name:"在线工具",name:"5SIM",description:"一个提供全球接码服务的平台，允许用户租用或购买虚拟号码来接收短信验证码，从而注册不同网站和应用的账号。",url:"https://5sim.net/",icon:"https://kjdaohang.com/media/tool_icons/image.psd-2023-12-05T174430.424.webp",logo:"https://kjdaohang.com/media/tool_icons/image.psd-2023-12-05T174430.424.webp",tags:"虚拟电话号码,海外接码平台",order:0,is_active:!0,views:75,likes_count:0,created_at:"2025-06-20T16:23:46.440941+08:00",updated_at:"2025-06-20T16:23:46.440981+08:00",desc_md:`### 5SIM

- **开发商**：5SIM 团队
- **简介**：5SIM 是一家全球虚拟号码接码服务平台，支持租用或购买全球180多个国家和地区的虚拟号码，帮助用户注册各类网站和应用账号，适合跨境电商、测试人员等使用。
- **主要特性**：
  - 全球180+国家和地区虚拟号码
  - 可租用或购买号码接收短信验证码
  - 支持多平台账号注册
  - 实时短信接收，操作便捷
  - 价格透明，支持多种支付方式
- **适用人群**：跨境电商、测试人员、海外注册用户
- [官网链接](https://5sim.net/)
`},{id:259,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"Sublime Text",description:"一款轻量、高效、跨平台的代码编辑器，以简洁的界面、快速的响应速度和强大的扩展能力著称。",url:"https://www.sublimetext.com/",icon:"https://kjdaohang.com/media/tool_icons/Sublime_Text.jpg",logo:"https://kjdaohang.com/media/tool_icons/Sublime_Text.jpg",tags:"轻量级IDE",order:0,is_active:!0,views:72,likes_count:0,created_at:"2025-05-22T18:04:29.234393+08:00",updated_at:"2025-05-27T08:44:07.250116+08:00",desc_md:`### Sublime Text

- **简介**：Sublime Text 是一款高效、跨平台的代码编辑器，以极快的响应速度和极简的界面著称。支持多光标编辑、命令面板、丰富的插件和主题。
- **主要特性**：
  - 多光标与批量编辑
  - 命令面板与快捷键
  - 丰富的插件生态
  - 跨平台支持
- **适用人群**：追求效率的开发者、前端工程师
- [官网链接](https://www.sublimetext.com/)`},{id:250,parent_category:30,parent_category_name:"设计工具",sub_category:34,sub_category_name:"流程图设计",name:"Draw.io",description:"一款功能强大的在线绘图工具，支持多种图形绘制，适合团队协作和项目管理。",url:"https://draw.io/",icon:"https://kjdaohang.com/media/tool_icons/Draw.io.jpg",logo:"https://kjdaohang.com/media/tool_icons/Draw.io.jpg",tags:"在线绘图工具",order:0,is_active:!0,views:68,likes_count:0,created_at:"2025-05-22T17:50:09.437720+08:00",updated_at:"2025-05-27T08:59:15.724455+08:00",desc_md:`### Draw.io（diagrams.net）

- **简介**：Draw.io（diagrams.net）是一款免费开源的在线图表绘制工具，支持流程图、UML、组织结构图、网络拓扑图等多种类型。无需注册即可使用，支持本地和云端存储。
- **主要特性**：
  - 免费开源，支持本地和云端（Google Drive、OneDrive、Dropbox）保存
  - 丰富的图形库和模板
  - 支持团队协作和版本管理
  - 可导入/导出多种格式（XML、PNG、SVG、PDF等）
  - 支持离线使用
- **适用人群**：开发者、产品经理、学生、教师、设计师
- [官网链接](https://app.diagrams.net/)
`},{id:102,parent_category:15,parent_category_name:"测试工具",sub_category:20,sub_category_name:"测试管理",name:"禅道",description:"一款国产开源的项目管理软件，融合了项目管理、任务管理、缺陷管理、测试管理等多种功能。",url:"https://www.zentao.net/",icon:"https://kjdaohang.com/media/tool_icons/%E7%A6%85%E9%81%93.png",logo:"https://kjdaohang.com/media/tool_icons/%E7%A6%85%E9%81%93.png",tags:"项目管理系统",order:0,is_active:!0,views:66,likes_count:0,created_at:"2025-05-22T09:26:30.328210+08:00",updated_at:"2025-05-26T18:34:47.014034+08:00",desc_md:`### 禅道

- **开发商**：青岛易软天创网络科技有限公司
- **简介**：禅道是一款国产开源项目管理软件，集项目管理、任务管理、缺陷管理、测试管理于一体，适合软件开发全流程管理。
- **主要特性**：
  - 项目、任务、需求、缺陷全流程管理
  - 支持敏捷开发与瀑布模型
  - 测试用例与测试计划管理
  - 丰富的统计报表与权限管理
  - 支持插件扩展与私有化部署
- **适用人群**：项目经理、开发团队、测试团队、企业管理层
- [官网链接](https://www.zentao.net/)
`},{id:396,parent_category:44,parent_category_name:"实用小工具",sub_category:72,sub_category_name:"在线工具",name:"高精度IP地址查询",description:"ping0.cc 是一个高精度 IP 地址归属地查询与全球节点监控平台，主要面向开发者和网络运维人员。",url:"https://ping0.cc/",icon:"https://kjdaohang.com/media/tool_icons/favico111.png",logo:"https://kjdaohang.com/media/tool_icons/favico111.png",tags:"IP查询",order:0,is_active:!0,views:64,likes_count:0,created_at:"2025-07-30T09:04:13.759729+08:00",updated_at:"2025-07-30T09:04:13.759769+08:00",desc_md:`### 高精度IP地址查询（ping0.cc）

- **开发商**：ping0.cc 团队
- **简介**：ping0.cc 是一款面向开发者和网络运维人员的高精度IP地址归属地查询与全球节点监控平台，支持IP定位、节点测速、网络质量分析等功能，帮助用户快速定位网络问题。
- **主要特性**：
  - 高精度IP归属地查询
  - 全球节点测速与监控
  - 网络质量分析与可视化
  - 支持API接口调用
  - 界面简洁，操作便捷
- **适用人群**：开发者、网络运维、IT支持
- [官网链接](https://ping0.cc/)
`},{id:283,parent_category:44,parent_category_name:"实用小工具",sub_category:47,sub_category_name:"图片编辑",name:"remove.photos",description:"一款基于人工智能技术的在线图片处理工具，提供多种功能，包括去除背景、更换背景、去除字幕等。",url:"https://remove.photos/zh-cn/",icon:"https://kjdaohang.com/media/tool_icons/%E4%B8%80%E9%94%AE%E6%89%A3%E5%9B%BE.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E4%B8%80%E9%94%AE%E6%89%A3%E5%9B%BE.jpg",tags:"一键扣图,背景去除",order:0,is_active:!0,views:63,likes_count:0,created_at:"2025-05-22T19:47:47.131529+08:00",updated_at:"2025-06-19T10:01:40.036724+08:00",desc_md:""},{id:369,parent_category:58,parent_category_name:"资源网站",sub_category:79,sub_category_name:"休闲娱乐",name:"Poki 免费在线游戏",description:"免费在线小游戏网站。上千款在线游戏，完全免费，无需登录，打开就能玩。",url:"https://poki.com/zh",icon:"https://kjdaohang.com/media/tool_icons/R-C_z01Vq6G.png",logo:"https://kjdaohang.com/media/tool_icons/R-C_z01Vq6G.png",tags:"在线小游戏,免费",order:0,is_active:!0,views:62,likes_count:0,created_at:"2025-07-05T10:56:57.054223+08:00",updated_at:"2025-07-05T10:56:57.054265+08:00",desc_md:`### Poki 免费在线游戏

- **简介**：Poki 是全球知名的免费在线小游戏平台，收录了上千款高质量的网页游戏，涵盖动作、益智、赛车、射击、休闲等多种类型。
- **主要特性**：
  - 海量游戏资源，持续更新
  - 无需注册、免费下载，打开即玩
  - 支持多语言界面，适合全球用户
  - 适配手机、平板和PC
  - 分类清晰，查找方便
- **适用人群**：所有年龄段的游戏爱好者、休闲玩家
- [访问 Poki](https://poki.com/zh)
`},{id:113,parent_category:23,parent_category_name:"开发工具",sub_category:28,sub_category_name:"静态代码分析",name:"SonarQube",description:"一款开源的 代码质量管理平台，支持20+语言，提供代码质量门禁，社区版免费开源。",url:"https://www.sonarqube.org/",icon:"https://kjdaohang.com/media/tool_icons/SonarQube.jpg",logo:"https://kjdaohang.com/media/tool_icons/SonarQube.jpg",tags:"代码质量管理平台",order:0,is_active:!0,views:62,likes_count:0,created_at:"2025-05-22T10:28:13.987700+08:00",updated_at:"2025-05-26T22:31:19.276035+08:00",desc_md:`### SonarQube

- **简介**：SonarQube 是一款领先的开源代码质量管理平台，支持 20 多种主流编程语言（如 Java、C#、Python、JavaScript、TypeScript 等）。它通过静态代码分析，帮助开发团队持续检测代码中的 bug、漏洞、安全隐患和代码异味。
- **主要特性**：
  - 支持多语言代码质量检测
  - 提供详细的代码质量报告和趋势分析
  - 集成代码门禁，保障代码合规性
  - 支持与 CI/CD 流水线集成（如 Jenkins、GitLab CI 等）
  - 丰富的插件生态，支持自定义规则
  - 社区版免费开源，企业版提供更多高级功能
- **适用场景**：适用于企业级项目、团队协作、持续集成环境下的代码质量管理。
- [官网链接](https://www.sonarqube.org/)
`},{id:111,parent_category:15,parent_category_name:"测试工具",sub_category:21,sub_category_name:"API测试",name:"YApi",description:"一个由去哪儿网移动架组开源的，基于Node.js构建的高效、易用、功能强大的API管理平台",url:"https://github.com/YMFE/yapi",icon:"https://kjdaohang.com/media/tool_icons/YAPI.png",logo:"https://kjdaohang.com/media/tool_icons/YAPI.png",tags:"去哪儿,API管理平台",order:0,is_active:!0,views:62,likes_count:0,created_at:"2025-05-22T10:25:58.915824+08:00",updated_at:"2025-05-26T17:58:31.547132+08:00",desc_md:`### YApi

- **开发商**：去哪儿网
- **简介**：YApi 是去哪儿网开源的 API 管理平台，基于 Node.js 构建，支持接口文档、调试、Mock、权限管理等功能，适合团队协作。
- **主要特性**：
  - 可视化接口文档管理
  - 支持接口调试与 Mock
  - 权限管理与团队协作
  - 支持自动化测试与数据导入导出
  - 开源免费，支持私有化部署
- **适用人群**：开发团队、测试团队、API 管理团队
- [项目主页](https://github.com/YMFE/yapi)
`},{id:175,parent_category:63,parent_category_name:"办公神器",sub_category:67,sub_category_name:"PDF工具",name:"iLovePDF",description:"一个功能强大且用户友好的在线PDF处理平台，提供多种PDF文件处理工具。",url:"https://www.ilovepdf.com/zh-cn",icon:"https://kjdaohang.com/media/tool_icons/iLovePDF.jpg",logo:"https://kjdaohang.com/media/tool_icons/iLovePDF.jpg",tags:"在线工具合集,PDF处理",order:0,is_active:!0,views:61,likes_count:0,created_at:"2025-05-22T13:48:14.067917+08:00",updated_at:"2025-05-27T10:56:39.616248+08:00",desc_md:`### iLovePDF

- **开发商**：iLovePDF
- **简介**：iLovePDF 是一款集成多种 PDF 工具的在线平台，支持 PDF 合并、拆分、压缩、转换、编辑等多种操作，界面友好，操作简单。
- **主要特性**：
  - 支持 PDF 合并、拆分、压缩、转换、编辑
  - 提供批量处理和多格式转换
  - 支持在线和移动端应用
  - 界面简洁，操作便捷
- **适用人群**：办公用户、学生、文档处理需求者
- [官网链接](https://www.ilovepdf.com/zh-cn)
`},{id:145,parent_category:3,parent_category_name:"AI工具",sub_category:12,sub_category_name:"AI数字人",name:"HeyGen",description:"专注于通过AI技术帮助用户快速创建高质量的数字人视频",url:"https://heygen.com/",icon:"https://kjdaohang.com/media/tool_icons/heygen.png",logo:"https://kjdaohang.com/media/tool_icons/heygen.png",tags:"AI数字人",order:0,is_active:!0,views:61,likes_count:0,created_at:"2025-05-22T11:53:45.287944+08:00",updated_at:"2025-05-24T14:15:38.659238+08:00",desc_md:`### HeyGen

- **开发商**：HeyGen 团队
- **简介**：HeyGen 是一款专注于 AI 数字人视频生成的工具，支持文本驱动数字人口播、虚拟形象定制、视频自动生成等功能。
- **主要特性**：
  - 文本驱动数字人口播视频
  - 多种虚拟形象与模板选择
  - 支持多语种配音与字幕
  - 一键生成与导出高清视频
  - 简单易用，适合新手
- **适用人群**：内容创作者、短视频运营者、企业营销团队
- [官网链接](https://heygen.com/)
`},{id:294,parent_category:63,parent_category_name:"办公神器",sub_category:68,sub_category_name:"工具箱",name:"Topai",description:"一个全面的人工智能工具和资源目录，发现最好的新型AI工具。",url:"https://topai.tools/",icon:"https://kjdaohang.com/media/tool_icons/Topai.jpg",logo:"https://kjdaohang.com/media/tool_icons/Topai.jpg",tags:"AI工具合集",order:0,is_active:!0,views:60,likes_count:0,created_at:"2025-05-22T20:23:44.927398+08:00",updated_at:"2025-05-27T10:35:21.481174+08:00",desc_md:`### Topai

- **开发商**：Topai 团队
- **简介**：Topai 是一个专注于人工智能工具和资源的目录平台，收录全球最新、最热门的 AI 工具，便于用户快速查找和对比。
- **主要特性**：
  - 收录丰富的 AI 工具和资源
  - 每日更新，紧跟行业前沿
  - 分类清晰，查找便捷
  - 提供工具对比和推荐
- **适用人群**：AI 爱好者、开发者、产品经理、研究人员
- [官网链接](https://topai.tools/)
`},{id:115,parent_category:35,parent_category_name:"运维工具",sub_category:39,sub_category_name:"容器管理",name:"Docker",description:"一个开源的应用容器引擎，为开发者提供一致的运行环境。",url:"https://www.docker.com/",icon:"https://kjdaohang.com/media/tool_icons/Docker.png",logo:"https://kjdaohang.com/media/tool_icons/Docker.png",tags:"容器引擎",order:0,is_active:!0,views:59,likes_count:0,created_at:"2025-05-22T10:30:47.377378+08:00",updated_at:"2025-05-27T09:12:37.729762+08:00",desc_md:`### Docker

- **开发商**：Docker, Inc.
- **简介**：Docker 是一款开源的容器化平台，支持将应用及其依赖打包到可移植的容器中，实现环境一致性和高效部署。适用于开发、测试、生产等多种场景。
- **主要特性**：
  - 容器镜像快速构建与分发
  - 跨平台兼容与资源隔离
  - 支持自动化部署与扩展
  - 丰富的命令行与 API 工具
  - 与主流云平台和编排工具集成
- **适用人群**：开发者、运维工程师、企业 IT 团队
- [官网链接](https://www.docker.com/)
`},{id:64,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"AiPPT",description:"一款基于人工智能技术的演示文稿生成工具，能够快速生成高质量的 PPT 演示文稿",url:"https://www.aippt.com/",icon:"https://kjdaohang.com/media/tool_icons/5274-2024-11-01052251-1730452971007.png",logo:"https://kjdaohang.com/media/tool_icons/5274-2024-11-01052251-1730452971007.png",tags:"PPT自动生成",order:0,is_active:!0,views:59,likes_count:0,created_at:"2025-05-21T22:07:28.940639+08:00",updated_at:"2025-05-24T15:26:30.720502+08:00",desc_md:`### AiPPT

- **开发商**：AiPPT 团队
- **简介**：AiPPT 是一款基于 AI 技术的 PPT 演示文稿生成工具，支持一键生成结构清晰、设计美观的 PPT，适合各类演讲和汇报场景。
- **主要特性**：
  - AI 自动生成 PPT 内容与设计
  - 丰富的模板和主题风格
  - 支持内容编辑与协作
  - 一键导出多种格式
  - 智能排版与美化
- **适用人群**：职场人士、学生、教师、内容创作者
- [官网链接](https://www.aippt.com/)
`},{id:367,parent_category:44,parent_category_name:"实用小工具",sub_category:78,sub_category_name:"浏览器插件",name:"Screenity",description:"一款基于浏览器扩展的屏幕录制工具，无需安装复杂的客户端软件，用户只需在Chrome浏览器中添加扩展即可使用。该工具支持录制网页内容、桌面应用程序以及摄像头画面，能够满足大多数屏幕录制场景的需求。",url:"https://github.com/alyssaxuu/screenity",icon:"https://kjdaohang.com/media/tool_icons/1_12201555063b1.jpg",logo:"https://kjdaohang.com/media/tool_icons/1_12201555063b1.jpg",tags:"浏览器插件,视频录制,屏幕录制",order:0,is_active:!0,views:58,likes_count:0,created_at:"2025-07-02T12:06:45.294656+08:00",updated_at:"2025-07-02T12:10:45.940516+08:00",desc_md:`### Screenity

- **开发商**：alyssaxuu
- **简介**：Screenity 是一款基于 Chrome 浏览器扩展的屏幕录制工具，支持录制网页、桌面、摄像头画面，内置注释、标记、剪辑等功能，适合教学、演示和内容创作。
- **主要特性**：
  - 支持网页、桌面、摄像头录制
  - 内置注释、标记与剪辑
  - 一键导出与分享
  - 免费开源，安装便捷
  - 适合多种录制场景
- **适用人群**：教师、内容创作者、演示人员
- [官网链接](https://github.com/alyssaxuu/screenity)
`},{id:399,parent_category:44,parent_category_name:"实用小工具",sub_category:74,sub_category_name:"Windows工具",name:"水豚鼠标助手",description:"水豚鼠标助手是一款专为Windows用户设计的屏幕演示工具，功能丰富且实用，特别适合在录屏、演示或教学场景中使用",url:"https://pan.quark.cn/s/a8172bfbba3d?pwd=dVd6",icon:"https://kjdaohang.com/media/tool_icons/u41392950241676132822fm253fmtautoapp120fJPEG.webp",logo:"https://kjdaohang.com/media/tool_icons/u41392950241676132822fm253fmtautoapp120fJPEG.webp",tags:"屏幕演示工具,鼠标助手",order:0,is_active:!0,views:57,likes_count:0,created_at:"2025-08-01T08:28:06.853451+08:00",updated_at:"2025-08-01T08:28:06.853495+08:00",desc_md:`### 水豚鼠标助手

- **开发商**：水豚鼠标助手团队
- **简介**：水豚鼠标助手是一款专为 Windows 用户设计的屏幕演示与鼠标辅助工具，支持鼠标高亮、点击特效、聚光灯、快捷键提示等功能，适合录屏、演示、教学等场景。
- **主要特性**：
  - 鼠标高亮与点击特效
  - 屏幕聚光灯与放大镜
  - 快捷键提示与自定义
  - 轻量级，易于安装和使用
  - 适合多种演示和教学场景
- **适用人群**：教师、讲师、演示人员、录屏用户
- [官网链接](https://pan.quark.cn/s/a8172bfbba3d?pwd=dVd6)
`},{id:334,parent_category:58,parent_category_name:"资源网站",sub_category:60,sub_category_name:"网盘资源",name:"云盘库",description:"云盘库是一个专注于网盘资源搜索的平台，致力于帮助用户在海量的网盘资源中快速找到所需内容。",url:"https://www.yunpanku.com/",icon:"https://kjdaohang.com/media/tool_icons/favicon.ico",logo:"https://kjdaohang.com/media/tool_icons/favicon.ico",tags:"网盘资源",order:0,is_active:!0,views:57,likes_count:0,created_at:"2025-06-16T12:00:34.302318+08:00",updated_at:"2025-06-16T12:00:34.302424+08:00",desc_md:`### 云盘库

- **简介**：云盘库是一个聚合多平台网盘资源的搜索引擎，帮助用户高效检索和获取各类学习、娱乐、软件等资源。
- **主要特性**：
  - 支持多种网盘资源的关键词搜索
  - 分类全面，涵盖学习资料、影视、软件等
  - 提供资源直链与提取码
  - 界面简洁，操作便捷
  - 适合资源收集与分享
- **适用人群**：网盘用户、学习者、资源搜集者
- [访问云盘库](https://www.yunpanku.com/)
`},{id:373,parent_category:58,parent_category_name:"资源网站",sub_category:79,sub_category_name:"休闲娱乐",name:"CrazyGames",description:"一个在线游戏网站，免登录，直接玩，打开后会自动匹配对手，能和全球玩家一起联机游戏。",url:"https://www.crazygames.com/",icon:"https://kjdaohang.com/media/tool_icons/OIP-C_kWL1Qqh.webp",logo:"https://kjdaohang.com/media/tool_icons/OIP-C_kWL1Qqh.webp",tags:"在线小游戏,免费",order:0,is_active:!0,views:56,likes_count:0,created_at:"2025-07-05T11:14:36.892588+08:00",updated_at:"2025-07-05T11:14:36.892627+08:00",desc_md:`### CrazyGames

- **简介**：CrazyGames 是一个国际化的在线游戏平台，提供丰富多样的免费网页游戏，涵盖动作、射击、赛车、益智、模拟等类型。
- **主要特性**：
  - 免注册、免下载，直接畅玩
  - 支持全球玩家实时匹配联机
  - 游戏种类丰富，持续上新
  - 适配多终端（PC、手机、平板）
  - 用户界面简洁，操作便捷
- **适用人群**：喜欢休闲娱乐、多人对战的玩家
- [访问 CrazyGames](https://www.crazygames.com/)
`},{id:300,parent_category:44,parent_category_name:"实用小工具",sub_category:76,sub_category_name:"图片压缩",name:"TinyPNG",description:"一款由 Voormedia 开发的在线图片压缩工具，专注于智能压缩 WebP、PNG 和 JPEG 图片。",url:"https://tinypng.com/",icon:"https://kjdaohang.com/media/tool_icons/TinyPNG.png",logo:"https://kjdaohang.com/media/tool_icons/TinyPNG.png",tags:"图片压缩",order:0,is_active:!0,views:56,likes_count:0,created_at:"2025-05-22T20:49:24.000941+08:00",updated_at:"2025-06-14T21:47:10.549894+08:00",desc_md:""},{id:48,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"文心一言",description:"由百度推出的一款基于大语言模型的人工智能助手。",url:"https://yiyan.baidu.com/",icon:"https://kjdaohang.com/media/tool_icons/default_xFVWR8t.png",logo:"https://kjdaohang.com/media/tool_icons/default_xFVWR8t.png",tags:"百度,大语言模型",order:0,is_active:!0,views:55,likes_count:0,created_at:"2025-05-21T21:18:45.736034+08:00",updated_at:"2025-06-02T10:03:12.488990+08:00",desc_md:""},{id:414,parent_category:15,parent_category_name:"测试工具",sub_category:82,sub_category_name:"AI测试",name:"Appvance",description:"一款AI智能测试平台，其核心是通过“生成式AI+业务语义理解”，实现从用例设计到执行分析的全流程自动化。它的独特之处在于：不依赖预设脚本，而是基于应用的实际代码和用户行为数据，自动生成高价值的测试策略。",url:"https://appvance.ai/",icon:"https://kjdaohang.com/media/tool_icons/imgi_91_Appvance_SOC_NonCPA.png",logo:"https://kjdaohang.com/media/tool_icons/imgi_91_Appvance_SOC_NonCPA.png",tags:"AI测试平台,AI测试",order:0,is_active:!0,views:54,likes_count:0,created_at:"2025-09-26T09:15:32.792847+08:00",updated_at:"2025-09-26T09:15:32.792886+08:00",desc_md:`### Appvance

- **开发商**：Appvance Inc.
- **简介**：Appvance 是一款基于生成式 AI 和业务语义理解的智能测试平台，能够自动化完成用例设计、执行和分析。无需预设脚本，平台会根据应用实际代码和用户行为数据，自动生成高价值的测试策略。
- **主要特性**：
  - 生成式 AI 自动生成测试用例
  - 支持端到端自动化测试
  - 业务语义理解，提升测试覆盖率
  - 自动分析测试结果，智能定位缺陷
  - 支持多种应用类型和集成主流 CI/CD 流程
  - 可视化测试报告和实时反馈
- **适用人群**：企业级测试团队、AI 测试创新团队、DevOps 团队
- [官网链接](https://appvance.ai/)
`},{id:337,parent_category:58,parent_category_name:"资源网站",sub_category:60,sub_category_name:"网盘资源",name:"口袋云",description:"提供各类网盘资源分享的平台，支持百度、阿里、夸克云盘资源搜索，还可以按时间远近、文件大小来筛选想要的资源。",url:"https://www.woxiangsou.com/",icon:"https://kjdaohang.com/media/tool_icons/2215192635ky.png",logo:"https://kjdaohang.com/media/tool_icons/2215192635ky.png",tags:"云盘资源",order:0,is_active:!0,views:54,likes_count:0,created_at:"2025-06-19T08:24:50.881497+08:00",updated_at:"2025-06-19T09:14:46.723693+08:00",desc_md:`### 口袋云

- **简介**：口袋云是一个多平台网盘资源聚合与搜索平台，支持百度、阿里、夸克等主流云盘的资源检索与筛选。
- **主要特性**：
  - 支持多平台云盘资源搜索
  - 可按时间、文件大小等条件筛选资源
  - 分类细致，涵盖学习、娱乐、软件等
  - 提供资源直链与提取码
  - 适合资源收集与分享
- **适用人群**：网盘用户、学习者、资源搜集者
- [访问口袋云](https://www.woxiangsou.com/)
`},{id:315,parent_category:58,parent_category_name:"资源网站",sub_category:75,sub_category_name:"便民查询",name:"中国医药信息查询平台",description:"提供一个权威、全面的医药信息查询服务，不仅提供了基础的疾病、症状、药品等查询功能，还整合了医院、医生等医疗资源信息，并涉及中医药、保健品等多个领域。",url:"https://www.dayi.org.cn/",icon:"https://kjdaohang.com/media/tool_icons/OIP-C_PXRKa03.jpg",logo:"https://kjdaohang.com/media/tool_icons/OIP-C_PXRKa03.jpg",tags:"医药信息查询,医疗资源信息",order:0,is_active:!0,views:54,likes_count:0,created_at:"2025-06-08T17:36:47.544107+08:00",updated_at:"2025-06-08T17:38:50.293558+08:00",desc_md:`### 中国医药信息查询平台

- **简介**：中国医药信息查询平台是权威的医药信息服务网站，集成了疾病、症状、药品、医院、医生等多维度医疗资源信息。
- **主要特性**：
  - 支持疾病、症状、药品、医院、医生等多项查询
  - 涵盖中医药、保健品、医疗器械等领域
  - 提供权威、准确的医学数据
  - 支持多条件筛选和智能推荐
  - 适合患者、医务人员、药学工作者等使用
- **适用人群**：广大患者、医护人员、药师、健康管理者
- [访问平台](https://www.dayi.org.cn/)
`},{id:173,parent_category:44,parent_category_name:"实用小工具",sub_category:47,sub_category_name:"图片编辑",name:"稿定设计在线PS",description:"一款专业精简的在线图片处理软件，免下载、免安装。",url:"https://ps.gaoding.com",icon:"https://kjdaohang.com/media/tool_icons/%E7%A8%BF%E5%AE%9A%E8%AE%BE%E8%AE%A1%E5%9C%A8%E7%BA%BFPS.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E7%A8%BF%E5%AE%9A%E8%AE%BE%E8%AE%A1%E5%9C%A8%E7%BA%BFPS.jpg",tags:"稿定设计,在线PS",order:0,is_active:!0,views:52,likes_count:0,created_at:"2025-05-22T13:45:16.402054+08:00",updated_at:"2025-05-27T14:17:26.225517+08:00",desc_md:""},{id:152,parent_category:63,parent_category_name:"办公神器",sub_category:66,sub_category_name:"在线翻译",name:"火山翻译",description:"字节跳动旗下的机器翻译品牌，由火山引擎团队开发，提供文本、图片、语音、音频、视频等多种翻译服务。",url:"https://translate.volcengine.com/",icon:"https://kjdaohang.com/media/tool_icons/%E7%81%AB%E5%B1%B1%E7%BF%BB%E8%AF%91.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E7%81%AB%E5%B1%B1%E7%BF%BB%E8%AF%91.jpg",tags:"字节跳动,翻译工具",order:0,is_active:!0,views:52,likes_count:0,created_at:"2025-05-22T12:03:09.733466+08:00",updated_at:"2025-05-27T11:24:18.740151+08:00",desc_md:`### 火山翻译

- **开发商**：字节跳动（火山引擎）
- **简介**：火山翻译是字节跳动旗下的多模态机器翻译平台，支持文本、图片、语音、视频等多种翻译场景，适合多行业多场景应用。
- **主要特性**：
  - 支持文本、图片、语音、视频翻译
  - 多语言、多领域翻译能力
  - 高效准确的AI翻译引擎
  - 提供API和SDK，便于集成
  - 支持批量翻译和自定义词库
- **适用人群**：企业用户、开发者、内容创作者、跨境业务团队
- [官网链接](https://translate.volcengine.com/)
`},{id:80,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"Appium",description:"一款开源的移动端自动化测试框架，广泛用于测试原生、混合和移动 Web 应用程序",url:"https://github.com/appium/appium",icon:"https://kjdaohang.com/media/tool_icons/appium.jpg",logo:"https://kjdaohang.com/media/tool_icons/appium.jpg",tags:"多端自动化",order:0,is_active:!0,views:50,likes_count:0,created_at:"2025-05-22T08:56:37.704590+08:00",updated_at:"2025-05-26T20:42:29.421324+08:00",desc_md:`### Appium

- **开发商**：开源社区
- **简介**：Appium 是一款开源的移动端自动化测试框架，支持原生、混合和移动 Web 应用的自动化测试。兼容多平台（Android、iOS），支持多种编程语言，适合移动应用开发和测试。
- **主要特性**：
  - 支持 Android、iOS 多平台自动化
  - 跨语言支持（Java、Python、JS、C# 等）
  - 无需修改被测应用即可自动化
  - 丰富的社区插件和扩展
  - 易于集成 CI/CD 流程
- **适用人群**：移动开发者、测试工程师、自动化测试团队
- [项目主页](https://github.com/appium/appium)
`},{id:378,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"腾讯元器",description:"腾讯公司基于其混元大模型推出的一款AI智能体创作与分发平台，旨在为用户提供低门槛、高效的智能体开发工具。",url:"https://yuanqi.tencent.com/",icon:"https://kjdaohang.com/media/tool_icons/1-240F31U413I4.png",logo:"https://kjdaohang.com/media/tool_icons/1-240F31U413I4.png",tags:"一站式智能体,腾讯,MCP",order:0,is_active:!0,views:49,likes_count:0,created_at:"2025-07-07T11:43:17.073815+08:00",updated_at:"2025-07-07T11:43:17.073859+08:00",desc_md:`### 腾讯元器

- **开发商**：腾讯
- **简介**：腾讯元器是基于混元大模型的AI智能体创作与分发平台，提供低门槛、高效率的智能体开发与管理工具。
- **主要特性**：
  - 智能体快速创建与分发
  - 多模型能力集成
  - 场景化应用与自动化
  - 丰富的API与插件支持
  - 企业级安全与权限管理
- **适用人群**：企业用户、开发者、自动化办公团队
- [官网链接](https://yuanqi.tencent.com/)
`},{id:49,parent_category:3,parent_category_name:"AI工具",sub_category:4,sub_category_name:"AI写作",name:"火山写作",description:"由字节跳动打造，是一款集成创作、润色、改写多功能的中英文AI写作助手。",url:"https://writingo.net/document?docId=1",icon:"https://kjdaohang.com/media/tool_icons/images.png",logo:"https://kjdaohang.com/media/tool_icons/images.png",tags:"字节跳动,AI写作助手",order:0,is_active:!0,views:47,likes_count:0,created_at:"2025-05-21T21:20:05.440603+08:00",updated_at:"2025-05-29T19:03:29.340092+08:00",desc_md:`### 火山写作

- **开发商**：字节跳动
- **简介**：火山写作是一款集成AI写作、润色、改写、翻译等功能的智能写作平台，适合内容创作者和职场人士。
- **主要特性**：
  - 智能写作与润色
  - 多语言翻译与改写
  - 支持多种文档格式
  - 云端存储与协作
  - 简单易用
- **适用人群**：内容创作者、学生、职场人士
- [官网链接](https://xiezuo.volcengine.com/)
`},{id:30,parent_category:3,parent_category_name:"AI工具",sub_category:4,sub_category_name:"AI写作",name:"讯飞绘文",description:"选题、配图、成文，一站式创作。",url:"https://turbodesk.xfyun.cn/home",icon:"https://kjdaohang.com/media/tool_icons/default_hChskHh.png",logo:"https://kjdaohang.com/media/tool_icons/default_hChskHh.png",tags:"科大讯飞,一站式创作",order:0,is_active:!0,views:47,likes_count:0,created_at:"2025-05-21T20:43:14.863675+08:00",updated_at:"2025-05-23T12:02:49.212934+08:00",desc_md:""},{id:402,parent_category:58,parent_category_name:"资源网站",sub_category:59,sub_category_name:"学习资源",name:"TIOBE编程语言排行",description:"TIOBE 指数每月更新一次，用于衡量编程语言的流行程度，其排名基于全球搜索引擎（如 Google、Bing、Yahoo、Wikipedia、Amazon 等）中相关语言的搜索频率、课程数量、第三方开发者数量等指标。它不代表语言的好坏或使用人数，而是反映其在技术社区中的关注度趋势。",url:"https://www.tiobe.com/tiobe-index/",icon:"https://kjdaohang.com/media/tool_icons/apple-touch-icon.webp",logo:"https://kjdaohang.com/media/tool_icons/apple-touch-icon.webp",tags:"编程语言,排行榜",order:0,is_active:!0,views:45,likes_count:0,created_at:"2025-08-18T10:49:04.417384+08:00",updated_at:"2025-08-18T10:49:04.417430+08:00",desc_md:`### TIOBE编程语言排行

- **简介**：TIOBE 编程语言排行榜是全球知名的编程语言流行度指数，每月更新，反映各编程语言在技术社区的关注度变化。
- **主要特性**：
  - 基于多平台搜索数据，客观反映语言热度
  - 提供历史趋势分析和年度排名
  - 支持多种语言对比与筛选
  - 适合开发者、技术管理者、学习者参考
  - 可用于技术选型和学习规划
- **适用人群**：开发者、编程学习者、技术决策者
- [查看 TIOBE 排行榜](https://www.tiobe.com/tiobe-index/)
`},{id:290,parent_category:63,parent_category_name:"办公神器",sub_category:67,sub_category_name:"PDF工具",name:"Smallpdf",description:"一款来自瑞士的在线PDF工具，提供压缩、转换和编辑PDF文档等免费服务",url:"https://www.smallpdf.com.cn/zh-cn/",icon:"https://kjdaohang.com/media/tool_icons/Smallpdf.jpg",logo:"https://kjdaohang.com/media/tool_icons/Smallpdf.jpg",tags:"在线PDF工具",order:0,is_active:!0,views:45,likes_count:0,created_at:"2025-05-22T20:12:17.652127+08:00",updated_at:"2025-05-27T10:50:03.721912+08:00",desc_md:`### Smallpdf

- **开发商**：Smallpdf AG
- **简介**：Smallpdf 是一款来自瑞士的在线 PDF 工具平台，提供 PDF 压缩、转换、合并、拆分、编辑等多种免费服务，界面简洁，操作便捷。
- **主要特性**：
  - 支持 PDF 压缩、转换、合并、拆分、编辑
  - 提供批量处理和多格式转换
  - 支持在线和桌面端应用
  - 数据安全，隐私保护
- **适用人群**：办公用户、学生、文档处理需求者
- [官网链接](https://www.smallpdf.com.cn/zh-cn/)
`},{id:143,parent_category:58,parent_category_name:"资源网站",sub_category:59,sub_category_name:"学习资源",name:"Examful.ai",description:"一个专为准备AP、IB和A-Level考试的学生设计的在线学习平台，免费真题和AI辅导。",url:"https://examful.ai/",icon:"https://kjdaohang.com/media/tool_icons/Examful.ai.png",logo:"https://kjdaohang.com/media/tool_icons/Examful.ai.png",tags:"学习网站,考试辅导",order:0,is_active:!0,views:45,likes_count:0,created_at:"2025-05-22T11:49:28.839902+08:00",updated_at:"2025-05-27T15:02:20.695766+08:00",desc_md:`### Examful.ai

- **简介**：Examful.ai 是面向AP、IB、A-Level等国际课程学生的在线学习平台，提供免费真题、AI智能辅导和个性化学习建议。
- **主要特性**：
  - 覆盖AP、IB、A-Level等主流国际课程
  - 免费获取历年真题与答案解析
  - AI智能批改与个性化学习建议
  - 支持错题本、学习进度追踪
  - 适合自学和备考
- **适用人群**：国际课程学生、备考AP/IB/A-Level的高中生
- [访问 Examful.ai](https://examful.ai/)
`},{id:348,parent_category:44,parent_category_name:"实用小工具",sub_category:72,sub_category_name:"在线工具",name:"SMS-Activate",description:"一个提供虚拟电话号码服务的平台，用户可以通过它接收短信和电话以注册任何服务和应用程序的账户。该平台支持180多个国家和地区的号码，拥有700多个站点和应用程序的编号。",url:"https://sms-activate.org/",icon:"https://kjdaohang.com/media/tool_icons/channels4_profile.jpg",logo:"https://kjdaohang.com/media/tool_icons/channels4_profile.jpg",tags:"虚拟电话号码,海外接码平台",order:0,is_active:!0,views:42,likes_count:0,created_at:"2025-06-20T16:17:47.171500+08:00",updated_at:"2025-06-20T16:17:47.171544+08:00",desc_md:`### SMS-Activate

- **开发商**：SMS-Activate 团队
- **简介**：SMS-Activate 是一家全球虚拟号码接码平台，支持180多个国家和地区的虚拟号码，覆盖700多个网站和应用，帮助用户注册、验证各类账号，适合跨境业务和测试需求。
- **主要特性**：
  - 全球180+国家虚拟号码
  - 支持700+网站和应用注册
  - 实时短信接收与管理
  - 多种套餐与灵活计费
  - 支持API集成
- **适用人群**：跨境用户、测试人员、开发者
- [官网链接](https://sms-activate.org/)
`},{id:44,parent_category:3,parent_category_name:"AI工具",sub_category:4,sub_category_name:"AI写作",name:"有道写作",description:"一款由网易有道推出的智能写作辅助工具，一款更懂中国人的英文写作神器",url:"https://write.youdao.com/#/homepage",icon:"https://kjdaohang.com/media/tool_icons/default_8HpqCOT.png",logo:"https://kjdaohang.com/media/tool_icons/default_8HpqCOT.png",tags:"网易有道,英文写作",order:0,is_active:!0,views:42,likes_count:0,created_at:"2025-05-21T21:12:42.356404+08:00",updated_at:"2025-05-23T11:59:40.872209+08:00",desc_md:""},{id:333,parent_category:44,parent_category_name:"实用小工具",sub_category:76,sub_category_name:"图片压缩",name:"鸭力巨大",description:"一款完全免费的在线图片和视频压缩工具，操作简单且功能强大，适合日常文件处理需求，支持3种压缩模式、批量压缩，单张最大支持50MB。",url:"https://www.yalijuda.com/",icon:"https://kjdaohang.com/media/tool_icons/4020a-www.yalijuda.com.png",logo:"https://kjdaohang.com/media/tool_icons/4020a-www.yalijuda.com.png",tags:"图片压缩",order:0,is_active:!0,views:41,likes_count:0,created_at:"2025-06-14T22:08:01.958062+08:00",updated_at:"2025-06-14T22:08:01.958102+08:00",desc_md:""},{id:272,parent_category:35,parent_category_name:"运维工具",sub_category:38,sub_category_name:"CICD",name:"GitLab CI/CD",description:"GitLab平台的一体化组件，内置于GitLab代码仓库中，通过编写.gitlab-ci.yml文件定义流水线，实现构建、测试、部署全过程自动化。",url:"https://docs.gitlab.com/ee/ci",icon:"https://kjdaohang.com/media/tool_icons/gitlab_AeEKtEx.png",logo:"https://kjdaohang.com/media/tool_icons/gitlab_AeEKtEx.png",tags:"持续集成,CICD",order:0,is_active:!0,views:40,likes_count:0,created_at:"2025-05-22T18:25:53.029429+08:00",updated_at:"2025-05-29T19:03:55.191393+08:00",desc_md:`### GitLab CI/CD

- **开发商**：GitLab Inc.
- **简介**：GitLab CI/CD 是 GitLab 平台内置的一体化持续集成和持续部署工具，通过 .gitlab-ci.yml 文件定义流水线，实现自动化构建、测试和部署。
- **主要特性**：
  - 与 GitLab 代码仓库无缝集成
  - 灵活的流水线和多阶段任务
  - 支持自动化测试、部署和回滚
  - 丰富的 Runner 支持和权限管理
  - 可视化流水线和详细日志
- **适用人群**：开发团队、DevOps 工程师、自动化测试团队
- [官方文档](https://docs.gitlab.com/ee/ci)
`},{id:70,parent_category:3,parent_category_name:"AI工具",sub_category:7,sub_category_name:"AI音频",name:"海绵音乐",description:"字节跳动推出的一款AI音乐创作平台",url:"https://www.haimian.com/",icon:"https://kjdaohang.com/media/tool_icons/512x512bb.png",logo:"https://kjdaohang.com/media/tool_icons/512x512bb.png",tags:"字节跳动,AI音乐",order:0,is_active:!0,views:40,likes_count:0,created_at:"2025-05-21T22:18:11.222462+08:00",updated_at:"2025-05-29T19:03:44.435603+08:00",desc_md:""},{id:261,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"WebStorm",description:"由 JetBrains 开发的一款专业的 JavaScript 集成开发环境（IDE），广泛用于前端开发和 Web 应用开发",url:"https://www.jetbrains.com/webstorm/",icon:"https://kjdaohang.com/media/tool_icons/WebStorm.jpg",logo:"https://kjdaohang.com/media/tool_icons/WebStorm.jpg",tags:"前端开发首选",order:0,is_active:!0,views:38,likes_count:0,created_at:"2025-05-22T18:06:14.712520+08:00",updated_at:"2025-05-27T08:21:45.079024+08:00",desc_md:`### WebStorm

- **开发商**：JetBrains
- **简介**：WebStorm 是一款专业的 JavaScript 集成开发环境，支持前端、Node.js、React、Vue、Angular 等主流技术栈。内置调试、测试、版本控制和代码重构工具。
- **主要特性**：
  - 智能代码补全与导航
  - 集成调试与测试
  - 丰富的前端框架支持
  - Git 集成
- **适用人群**：前端开发者、全栈工程师
- [官网链接](https://www.jetbrains.com/webstorm/)`},{id:176,parent_category:63,parent_category_name:"办公神器",sub_category:68,sub_category_name:"工具箱",name:"帮小忙",description:"腾讯推出的一款轻量级在线工具集合平台，解决日常生活、工作和学习中的各类小问题。",url:"https://tool.browser.qq.com/",icon:"https://kjdaohang.com/media/tool_icons/%E5%B8%AE%E5%B0%8F%E5%BF%99.png",logo:"https://kjdaohang.com/media/tool_icons/%E5%B8%AE%E5%B0%8F%E5%BF%99.png",tags:"腾讯,在线工具合集",order:0,is_active:!0,views:38,likes_count:0,created_at:"2025-05-22T13:51:47.266512+08:00",updated_at:"2025-05-27T10:43:40.496252+08:00",desc_md:`### 帮小忙

- **开发商**：腾讯
- **简介**：帮小忙是腾讯推出的轻量级在线工具集合平台，涵盖文本处理、格式转换、图片编辑等多种实用工具，帮助用户高效解决日常小问题。
- **主要特性**：
  - 多种文本、图片、格式处理工具
  - 界面简洁，操作便捷
  - 支持移动端和网页端
  - 持续更新，功能丰富
- **适用人群**：学生、职场人士、开发者、内容创作者
- [官网链接](https://tool.browser.qq.com/)
`},{id:322,parent_category:23,parent_category_name:"开发工具",sub_category:25,sub_category_name:"代码协作",name:"Codepen",description:"一个在线前端代码编辑和测试平台，用户可以在此编写、测试和分享HTML、CSS和JavaScript代码。",url:"https://codepen.io/pen/",icon:"https://kjdaohang.com/media/tool_icons/OIP-C_3.jpg",logo:"https://kjdaohang.com/media/tool_icons/OIP-C_3.jpg",tags:"Web前端,在线代码编辑器,",order:0,is_active:!0,views:37,likes_count:0,created_at:"2025-06-10T09:18:12.112395+08:00",updated_at:"2025-06-11T12:22:54.088820+08:00",desc_md:`### Codepen

- **简介**：Codepen 是一个流行的在线前端代码编辑和测试平台，支持 HTML、CSS、JavaScript 的实时编写、预览和分享。
- **主要特性**：
  - 实时预览和调试代码
  - 丰富的社区作品和模板
  - 支持多种前端框架和库
  - 便捷的代码分享和嵌入
  - 团队协作和项目管理功能
- **适用场景**：适合前端开发者、设计师、教学演示和代码实验。
- [官网链接](https://codepen.io/pen/)
`},{id:197,parent_category:58,parent_category_name:"资源网站",sub_category:59,sub_category_name:"学习资源",name:"Artificial Analysis",description:"个专注于分析和比较不同AI模型及其API提供商的平台。",url:"https://artificialanalysis.ai/",icon:"https://kjdaohang.com/media/tool_icons/Artificial_Analysis.png",logo:"https://kjdaohang.com/media/tool_icons/Artificial_Analysis.png",tags:"AI提供商",order:0,is_active:!0,views:36,likes_count:0,created_at:"2025-05-22T14:45:00.041474+08:00",updated_at:"2025-05-27T15:06:42.477696+08:00",desc_md:`### Artificial Analysis

- **简介**：Artificial Analysis 是一个专注于AI模型和API服务商分析与对比的平台，帮助开发者和企业选择最合适的AI解决方案。
- **主要特性**：
  - 收录主流AI模型和API服务商信息
  - 提供性能、价格、功能等多维度对比
  - 支持用户评价与经验分享
  - 持续更新最新AI产品和服务
  - 适合技术选型和市场调研
- **适用人群**：AI开发者、企业技术负责人、产品经理
- [访问 Artificial Analysis](https://artificialanalysis.ai/)
`},{id:336,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"博思AIPPT",description:"一款在线AI驱动的PPT制作工具，利用先进的自然语言处理和计算机视觉技术，能够根据用户的文本输入、图片素材以及主题需求，自动生成结构清晰、设计美观、内容丰富的PPT演示文稿。",url:"https://pptgo.cn/?utm_source=referrals&utm_content=kjdaohang&_channel_track_key=PrsQoUOR",icon:"https://kjdaohang.com/media/tool_icons/%E5%8D%9A%E6%80%9DAIPPT_LOGO%E5%9B%BE%E6%A0%87.png",logo:"https://kjdaohang.com/media/tool_icons/%E5%8D%9A%E6%80%9DAIPPT_LOGO%E5%9B%BE%E6%A0%87.png",tags:"PPT自动生成",order:0,is_active:!0,views:34,likes_count:0,created_at:"2025-06-18T18:36:16.131468+08:00",updated_at:"2025-06-18T18:36:16.131508+08:00",desc_md:`### 博思AIPPT

- **开发商**：博思AIPPT 团队
- **简介**：博思AIPPT 是一款基于 AI 的 PPT 制作工具，支持根据文本、图片和主题需求自动生成结构清晰、设计美观的 PPT 演示文稿。
- **主要特性**：
  - AI 自动生成 PPT 内容与结构
  - 支持多种主题和模板
  - 智能排版与美化
  - 支持图片、文本混合输入
  - 一键导出与分享
- **适用人群**：职场人士、学生、教师、内容创作者
- [官网链接](https://pptgo.cn/?utm_source=referrals&utm_content=kjdaohang&_channel_track_key=PrsQoUOR)
`},{id:404,parent_category:63,parent_category_name:"办公神器",sub_category:68,sub_category_name:"工具箱",name:"智写流程",description:"自动捕捉你在网页上的每一步操作，并实时生成一份结构清晰、图文并茂的操作指南、产品手册。你只需“像平常一样操作一遍”，它就能替你生成一份别人一看就能学会的“傻瓜式教程”。",url:"https://www.igenflow.com/",icon:"https://kjdaohang.com/media/tool_icons/imageye___-_imgi_1_logo.png",logo:"https://kjdaohang.com/media/tool_icons/imageye___-_imgi_1_logo.png",tags:"文档助手,操作指南,产品手册",order:0,is_active:!0,views:33,likes_count:0,created_at:"2025-08-24T09:36:23.932425+08:00",updated_at:"2025-08-24T09:36:23.932472+08:00",desc_md:`### 智写流程

- **开发商**：igenflow 团队
- **简介**：智写流程是一款自动化操作记录和文档生成工具，能够捕捉用户在网页上的每一步操作，自动生成结构清晰、图文并茂的操作手册和教程。
- **主要特性**：
  - 自动捕捉网页操作流程
  - 实时生成操作指南和产品手册
  - 支持图文并茂和结构化输出
  - 一键分享和导出
- **适用人群**：产品经理、运营、培训讲师、企业用户
- [官网链接](https://www.igenflow.com/)
`},{id:28,parent_category:63,parent_category_name:"办公神器",sub_category:64,sub_category_name:"表格处理",name:"飞书多维表格",description:"一款强大的在线数据库工具，支持多种数据管理、分析和可视化功能，并接入了DeepSeek-R1，支持智能分析和自动化处理。",url:"https://www.feishu.cn/paid/ai-register",icon:"https://kjdaohang.com/media/tool_icons/%E9%A3%9E%E4%B9%A6%E9%97%AE%E5%8D%B7_n5VFqEV.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E9%A3%9E%E4%B9%A6%E9%97%AE%E5%8D%B7_n5VFqEV.jpg",tags:"字节跳动,多维表格",order:0,is_active:!0,views:33,likes_count:0,created_at:"2025-05-21T19:03:17.395301+08:00",updated_at:"2025-05-27T11:40:14.178866+08:00",desc_md:`### 飞书多维表格

- **开发商**：字节跳动（飞书）
- **简介**：飞书多维表格是一款集数据管理、分析和可视化于一体的在线数据库工具。支持多维数据结构、智能分析和自动化处理，适合企业级数据协作。
- **主要特性**：
  - 多维表格结构，灵活组织数据
  - 支持智能分析和自动化处理（接入 DeepSeek-R1）
  - 丰富的数据可视化组件
  - 多人协作与权限管理
  - 与飞书生态无缝集成
- **适用人群**：企业数据分析师、项目管理者、团队协作用户
- [官网链接](https://www.feishu.cn/paid/ai-register)
`},{id:329,parent_category:44,parent_category_name:"实用小工具",sub_category:72,sub_category_name:"在线工具",name:"MoaktEmail",description:"Moakt 是一个提供临时邮箱服务的网站，可以用于接收邮件，常用于注册网站、接收验证码、测试邮件功能等场景，避免使用个人真实邮箱地址。",url:"https://www.moakt.com/zh",icon:"https://kjdaohang.com/media/tool_icons/OIP-C_1_kmDm7rs.jpg",logo:"https://kjdaohang.com/media/tool_icons/OIP-C_1_kmDm7rs.jpg",tags:"临时邮箱,接收验证码",order:0,is_active:!0,views:32,likes_count:0,created_at:"2025-06-13T14:09:18.695047+08:00",updated_at:"2025-06-13T14:09:18.695086+08:00",desc_md:`### MoaktEmail

- **开发商**：Moakt 团队
- **简介**：MoaktEmail 是一款提供临时邮箱服务的在线工具，用户可免费生成一次性邮箱地址，用于注册网站、接收验证码、测试邮件等，保护个人隐私，防止垃圾邮件骚扰。
- **主要特性**：
  - 免费生成临时邮箱地址
  - 支持多语言界面
  - 邮箱自动失效，保护隐私
  - 支持邮件接收与查看
  - 无需注册，操作便捷
- **适用人群**：注册用户、开发者、测试人员、隐私保护需求者
- [官网链接](https://www.moakt.com/zh)
`},{id:16,parent_category:3,parent_category_name:"AI工具",sub_category:10,sub_category_name:"AI设计",name:"稿定设计",description:"集成AI绘画功能的综合设计平台。",url:"https://www.gaoding.com",icon:"https://kjdaohang.com/media/tool_icons/gaoding-logo_oJ8fLT5.png",logo:"https://kjdaohang.com/media/tool_icons/gaoding-logo_oJ8fLT5.png",tags:"AI绘画,AI设计",order:0,is_active:!0,views:32,likes_count:0,created_at:"2025-05-21T18:28:15.920530+08:00",updated_at:"2025-05-24T10:41:45.778581+08:00",desc_md:`### 稿定设计

- **开发商**：稿定设计团队
- **简介**：稿定设计是一款集成AI绘画功能的综合设计平台，支持图片编辑、海报设计、AI生成等多种场景。
- **主要特性**：
  - AI绘画与图片编辑
  - 丰富的设计模板与素材库
  - 一键生成海报、名片、社交媒体图
  - 多端同步与团队协作
  - 简单易用，适合新手
- **适用人群**：设计师、内容创作者、企业用户
- [官网链接](https://www.gaoding.com)
`},{id:411,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"OpenRouter",description:"多模型聚合平台，国内可偶尔直达，简单注册后即可免费使用Nano Banana相关能力",url:"https://openrouter.ai/chat",icon:null,logo:"https://kjdaohang.com/static/images/default-logo.png",tags:"AI聚合平台,Nano Banana",order:0,is_active:!0,views:31,likes_count:0,created_at:"2025-09-22T19:37:45.496464+08:00",updated_at:"2025-09-22T19:37:45.496502+08:00",desc_md:`### OpenRouter

- **开发商**：OpenRouter 团队
- **简介**：OpenRouter 是一个多模型聚合平台，支持多种主流大模型的统一接入和切换，提供便捷的 API 服务和免费试用 Nano Banana 等模型能力。
- **主要特性**：
  - 聚合多家主流大模型（如 OpenAI、Anthropic、Nano Banana 等）
  - 统一 API 接口，便于开发集成
  - 支持国内访问和免费试用
  - 简单注册，快速上手
  - 支持多种应用场景
- **适用人群**：开发者、AI 应用集成商、企业用户
- [官网链接](https://openrouter.ai/chat)
`},{id:270,parent_category:35,parent_category_name:"运维工具",sub_category:39,sub_category_name:"容器管理",name:"Portainer",description:"一款基于 Web 界面 的 Docker 可视化管理工具。",url:"https://portainer.io/",icon:"https://kjdaohang.com/media/tool_icons/Portainer.png",logo:"https://kjdaohang.com/media/tool_icons/Portainer.png",tags:"Docker 可视化管理工具",order:0,is_active:!0,views:31,likes_count:0,created_at:"2025-05-22T18:23:38.840152+08:00",updated_at:"2025-05-27T09:23:24.246243+08:00",desc_md:`### Portainer

- **开发商**：Portainer.io
- **简介**：Portainer 是一款基于 Web 的 Docker 和 Kubernetes 可视化管理工具，简化容器、镜像、网络和卷的管理，适合初学者和企业运维。
- **主要特性**：
  - 直观的 Web UI 管理 Docker 和 K8s 集群
  - 支持容器、镜像、网络、卷等资源管理
  - 多用户和权限控制
  - 支持多集群和远程主机管理
  - 易于部署和扩展
- **适用人群**：运维工程师、开发者、企业 IT 团队
- [官网链接](https://portainer.io/)
`},{id:161,parent_category:3,parent_category_name:"AI工具",sub_category:12,sub_category_name:"AI数字人",name:"蝉镜",description:"蝉妈妈旗下推出的一款 AI 数字人短视频与直播平台，提供上百套专业模板和 200 + 公版数字人形象，覆盖不同场景。",url:"https://www.chanjing.cc/home",icon:"https://kjdaohang.com/media/tool_icons/changjing.png",logo:"https://kjdaohang.com/media/tool_icons/changjing.png",tags:"AI数字人",order:0,is_active:!0,views:30,likes_count:0,created_at:"2025-05-22T12:24:55.596903+08:00",updated_at:"2025-05-24T13:56:07.843388+08:00",desc_md:`### 蝉镜

- **开发商**：蝉妈妈
- **简介**：蝉镜是一款 AI 数字人短视频与直播平台，提供丰富的数字人形象和专业模板，适合多场景短视频和直播内容创作。
- **主要特性**：
  - 200+ 公版数字人形象
  - 上百套专业短视频模板
  - 支持多语种配音与字幕
  - 一键生成与导出
  - 适配多平台发布
- **适用人群**：内容创作者、短视频运营者、企业营销团队
- [官网链接](https://www.chanjing.cc/home)
`},{id:123,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"CodeSandbox",description:"一个在线的云开发环境（CDE），由 CodeSandbox.io 开发，主要针对前端开发者，提供了一个基于浏览器的代码编辑器。",url:"https://codesandbox.io/",icon:"https://kjdaohang.com/media/tool_icons/CodeSandbox.jpg",logo:"https://kjdaohang.com/media/tool_icons/CodeSandbox.jpg",tags:"在线云开发环境",order:0,is_active:!0,views:30,likes_count:0,created_at:"2025-05-22T10:54:40.070103+08:00",updated_at:"2025-05-27T08:04:12.378866+08:00",desc_md:`### CodeSandbox

- **简介**：CodeSandbox 是一个基于浏览器的在线云开发环境（CDE），支持前端项目的快速搭建、实时预览和协作开发。适合 React、Vue、Angular 等现代前端框架。
- **主要特性**：
  - 在线编辑与实时预览
  - 支持多人协作
  - 丰富的模板与社区项目
- **适用人群**：前端开发者、教学演示、快速原型开发
- [官网链接](https://codesandbox.io/)`},{id:206,parent_category:30,parent_category_name:"设计工具",sub_category:34,sub_category_name:"流程图设计",name:"ProcessOn",description:"一款专业的在线作图工具，支持多种图形绘制，适合业务流程梳理、项目管理、团队协作和知识分享。",url:"https://www.processon.com/",icon:"https://kjdaohang.com/media/tool_icons/ProcessOn.png",logo:"https://kjdaohang.com/media/tool_icons/ProcessOn.png",tags:"在线作图工具",order:0,is_active:!0,views:28,likes_count:0,created_at:"2025-05-22T15:17:15.112925+08:00",updated_at:"2025-05-27T08:54:17.288189+08:00",desc_md:`### ProcessOn

- **简介**：ProcessOn 是国内知名的在线作图与协作平台，支持流程图、思维导图、UML、网络拓扑图等多种图表类型。提供团队协作、知识社区和模板库，适合企业和个人使用。
- **主要特性**：
  - 多人实时协作与评论
  - 丰富的图表模板和图形库
  - 支持导出多种格式（PNG、PDF、SVG等）
  - 内置知识社区，便于学习和交流
  - 支持团队空间和权限管理
- **适用人群**：企业团队、产品经理、开发者、设计师、学生
- [官网链接](https://www.processon.com/)
`},{id:408,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"nanobanana.free",description:"专为Nano Banana打造的免费平台，国内用户无需注册录可直接使用",url:"https://nanobananafree.ai/",icon:"https://kjdaohang.com/media/tool_icons/imageye___-_imgi_1_banana-C7cVRTLK.png",logo:"https://kjdaohang.com/media/tool_icons/imageye___-_imgi_1_banana-C7cVRTLK.png",tags:"Nano Banana,AI绘画,AI设计",order:0,is_active:!0,views:27,likes_count:0,created_at:"2025-09-22T19:28:59.546843+08:00",updated_at:"2025-09-22T19:28:59.546899+08:00",desc_md:""},{id:150,parent_category:63,parent_category_name:"办公神器",sub_category:66,sub_category_name:"在线翻译",name:"Google翻译",description:"谷歌公司推出的一款免费在线翻译服务，支持多种语言之间的文本、语音和图片翻译",url:"https://translate.google.com/",icon:"https://kjdaohang.com/media/tool_icons/Google%E7%BF%BB%E8%AF%91.png",logo:"https://kjdaohang.com/media/tool_icons/Google%E7%BF%BB%E8%AF%91.png",tags:"Google,翻译工具",order:0,is_active:!0,views:27,likes_count:0,created_at:"2025-05-22T12:01:54.470190+08:00",updated_at:"2025-05-27T11:27:58.533939+08:00",desc_md:`### Google翻译

- **开发商**：Google
- **简介**：Google翻译是一款功能强大的在线翻译工具，支持多语言文本、语音、图片和文档翻译，适合全球用户跨语言交流。
- **主要特性**：
  - 多语言互译，支持100+语言
  - 文本、语音、图片、文档翻译
  - 实时对话翻译和拍照翻译
  - 支持网页、移动端和API
- **适用人群**：外语学习者、跨境用户、开发者、企业用户
- [官网链接](https://translate.google.com/)
`},{id:360,parent_category:40,parent_category_name:"求职面试",sub_category:41,sub_category_name:"求职求聘",name:"海投网",description:"成立于2011年，由武汉鸣鸾信息科技有限公司开发与运营，是一家专注于应届毕业生求职领域的综合服务平台。",url:"https://www.haitou.cc/",icon:"https://kjdaohang.com/media/tool_icons/R-C_5.png",logo:"https://kjdaohang.com/media/tool_icons/R-C_5.png",tags:"综合招聘平台",order:0,is_active:!0,views:26,likes_count:0,created_at:"2025-06-30T09:06:54.630884+08:00",updated_at:"2025-06-30T09:37:24.973224+08:00",desc_md:`### 海投网

- **开发商**：武汉鸣鸾信息科技有限公司
- **简介**：海投网是国内知名的应届毕业生求职服务平台，聚合校招、实习、内推、网申等多种招聘信息，提供简历投递、职位推荐、面试跟踪等一站式服务，助力毕业生高效求职。
- **主要特性**：
  - 校招、实习、内推信息聚合
  - 智能职位推荐与简历投递
  - 面试进度跟踪与提醒
  - 求职攻略与经验分享
  - 支持多行业多岗位
- **适用人群**：应届毕业生、实习生、求职者
- [官网链接](https://www.haitou.cc/)
`},{id:308,parent_category:44,parent_category_name:"实用小工具",sub_category:72,sub_category_name:"在线工具",name:"TinyURL",description:"一个国外知名的短链接生成工具，它可以将长URL缩短为短链接，方便用户分享和记忆。用户可以直接使用，无需登录，用户只需输入长链接，即可生成短链接。",url:"https://tinyurl.com/",icon:"https://kjdaohang.com/media/tool_icons/tinyurl-api.png",logo:"https://kjdaohang.com/media/tool_icons/tinyurl-api.png",tags:"短链接生成,国外网站",order:0,is_active:!0,views:26,likes_count:0,created_at:"2025-06-04T08:27:28.524546+08:00",updated_at:"2025-06-04T08:30:49.329413+08:00",desc_md:`### TinyURL

- **开发商**：TinyURL 团队
- **简介**：TinyURL 是全球知名的短链接生成平台，支持将任意长网址快速缩短为短链接，方便分享和记忆。无需注册即可使用，适合社交媒体、营销推广等多种场景。
- **主要特性**：
  - 长链接一键缩短
  - 支持自定义短链接后缀
  - 无需注册，免费使用
  - 链接永久有效
  - 支持批量生成与管理
- **适用人群**：社交媒体用户、营销人员、内容创作者
- [官网链接](https://tinyurl.com/)
`},{id:164,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"Get笔记",description:"由得到团队推出的一款高效AI笔记应用，旨在通过AI技术帮助用户高效记录、整理和管理笔记信息。",url:"https://www.biji.com/subject",icon:"https://kjdaohang.com/media/tool_icons/256x256bb.png",logo:"https://kjdaohang.com/media/tool_icons/256x256bb.png",tags:"得到,知识库,AI笔记",order:0,is_active:!0,views:26,likes_count:0,created_at:"2025-05-22T12:36:16.353062+08:00",updated_at:"2025-05-24T14:51:50.705760+08:00",desc_md:`### Get笔记

- **开发商**：得到团队
- **简介**：Get笔记是一款高效的 AI 笔记应用，集成智能记录、整理、归纳和知识管理功能，适合个人和团队高效办公与学习。
- **主要特性**：
  - AI 智能笔记整理与归纳
  - 支持多端同步与协作
  - 强大的搜索与标签管理
  - 支持语音、图片、文本多种输入
  - 数据安全与隐私保护
- **适用人群**：学生、职场人士、知识工作者、团队协作用户
- [官网链接](https://www.biji.com/subject)
`},{id:214,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"腾讯混元",description:"腾讯公司推出的自研通用大模型，支持文本、图像、视频和3D等多种模态内容的理解与生成",url:"https://hunyuan.tencent.com/",icon:"https://kjdaohang.com/media/tool_icons/default_8I7QkZJ.png",logo:"https://kjdaohang.com/media/tool_icons/default_8I7QkZJ.png",tags:"腾讯旗下,通用大模型",order:0,is_active:!0,views:25,likes_count:0,created_at:"2025-05-22T16:08:06.466567+08:00",updated_at:"2025-05-24T17:14:01.543340+08:00",desc_md:`### 腾讯混元

- **开发商**：腾讯
- **简介**：腾讯混元是腾讯自研的通用大模型平台，具备文本、图像、视频、3D等多模态内容的理解与生成能力，广泛应用于智能问答、内容创作、数字人等领域。
- **主要特性**：
  - 多模态内容理解与生成
  - 支持智能问答、写作、绘画、视频生成等
  - 企业级 API 与开放平台
  - 持续迭代与模型升级
  - 与腾讯云、微信等生态集成
- **适用人群**：企业用户、开发者、内容创作者
- [官网链接](https://hunyuan.tencent.com/)
`},{id:387,parent_category:49,parent_category_name:"自媒体工具",sub_category:73,sub_category_name:"直播录制",name:"直播加加",description:"直播加加是一款专为直播场景设计的高效工具，集成了多种功能，帮助用户轻松打造专业直播间，提升直播质量与互动性。",url:"https://www.zhibojiajia.com/",icon:"https://kjdaohang.com/media/tool_icons/imgi_2_logo.png",logo:"https://kjdaohang.com/media/tool_icons/imgi_2_logo.png",tags:"直播App,直播助手,直播间打造",order:0,is_active:!0,views:24,likes_count:0,created_at:"2025-07-16T11:17:36.808964+08:00",updated_at:"2025-07-16T11:18:06.597879+08:00",desc_md:`### 直播加加

- **开发商**：直播加加团队
- **简介**：直播加加是一款集成多种直播辅助功能的专业工具，适用于各类直播平台。支持弹幕互动、礼物特效、场控管理、数据统计等，帮助主播打造高质量、互动性强的直播间。
- **主要特性**：
  - 弹幕互动与礼物特效
  - 场控管理与自动化工具
  - 直播数据实时统计与分析
  - 多平台兼容，支持主流直播软件
  - 丰富的插件与自定义扩展
- **适用人群**：主播、直播运营、内容创作者
- [官网链接](https://www.zhibojiajia.com/)
`},{id:282,parent_category:44,parent_category_name:"实用小工具",sub_category:47,sub_category_name:"图片编辑",name:"一键抠图",description:"一个在线图片处理平台，专注于提供快速、高效的抠图和背景替换功能",url:"https://www.yijiankoutu.com/",icon:"https://kjdaohang.com/media/tool_icons/%E4%B8%80%E9%94%AE%E6%89%A3%E5%9B%BE2.png",logo:"https://kjdaohang.com/media/tool_icons/%E4%B8%80%E9%94%AE%E6%89%A3%E5%9B%BE2.png",tags:"一键扣图",order:0,is_active:!0,views:24,likes_count:0,created_at:"2025-05-22T19:44:45.281408+08:00",updated_at:"2025-05-27T14:14:18.789307+08:00",desc_md:""},{id:171,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"OfficeAI助手",description:"一款专为Microsoft Office和WPS用户设计的免费智能AI办公工具，旨在通过AI技术提升办公效率",url:"https://www.office-ai.cn/",icon:"https://kjdaohang.com/media/tool_icons/default_KBxhr2u.png",logo:"https://kjdaohang.com/media/tool_icons/default_KBxhr2u.png",tags:"AI办公助手",order:0,is_active:!0,views:24,likes_count:0,created_at:"2025-05-22T13:38:55.816856+08:00",updated_at:"2025-05-24T14:40:24.545901+08:00",desc_md:`### OfficeAI助手

- **开发商**：OfficeAI 团队
- **简介**：OfficeAI助手是一款专为 Microsoft Office 和 WPS 用户设计的智能办公工具，集成 AI 写作、表格分析、PPT 生成等多种功能，提升办公效率。
- **主要特性**：
  - AI 智能写作与润色
  - 表格数据分析与自动化处理
  - PPT 智能生成与美化
  - 支持多平台集成
  - 免费使用，持续更新
- **适用人群**：职场人士、学生、企业用户
- [官网链接](https://www.office-ai.cn/)
`},{id:94,parent_category:3,parent_category_name:"AI工具",sub_category:9,sub_category_name:"AI搜索",name:"秘塔AI",description:"基于 MetaLLM 大模型，纯净无广告、全网及学术等多类型搜索功能",url:"https://metaso.cn",icon:"https://kjdaohang.com/media/tool_icons/04102138ved1.png",logo:"https://kjdaohang.com/media/tool_icons/04102138ved1.png",tags:"MetaLLM,学术搜索",order:0,is_active:!0,views:24,likes_count:0,created_at:"2025-05-22T09:16:20.732999+08:00",updated_at:"2025-05-24T08:41:53.436045+08:00",desc_md:""},{id:186,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"扣子空间",description:"字节跳动推出的一款创新型AI协同办公平台。",url:"https://space.coze.cn/",icon:"https://kjdaohang.com/media/tool_icons/default_fJ7sWFm.png",logo:"https://kjdaohang.com/media/tool_icons/default_fJ7sWFm.png",tags:"字节跳动,AI智能体",order:0,is_active:!0,views:23,likes_count:0,created_at:"2025-05-22T14:14:48.803697+08:00",updated_at:"2025-05-24T11:42:36.905023+08:00",desc_md:`### 扣子空间

- **开发商**：字节跳动
- **简介**：扣子空间是字节跳动推出的创新型AI协同办公平台，集成智能体、知识管理、自动化办公等多种能力。
- **主要特性**：
  - 智能体协同与自动化办公
  - 企业知识库与智能检索
  - 多端同步与团队协作
  - 丰富的API与插件生态
  - 数据安全与权限管理
- **适用人群**：企业团队、知识管理者、自动化办公用户
- [官网链接](https://space.coze.cn/)
`},{id:38,parent_category:3,parent_category_name:"AI工具",sub_category:12,sub_category_name:"AI数字人",name:"腾讯智影",description:"腾讯智影，一个全面的免费在线视频创作平台，融合素材搜集、视频剪辑与发布功能。利用先进的AI技术如数字人配音、自动字幕及内容转换，配备丰富素材库，大幅提升创作效率与质量。",url:"https://zenvideo.qq.com/",icon:"https://kjdaohang.com/media/tool_icons/default_YSVd9cV.png",logo:"https://kjdaohang.com/media/tool_icons/default_YSVd9cV.png",tags:"腾讯旗下,AI数字人",order:0,is_active:!0,views:23,likes_count:0,created_at:"2025-05-21T20:58:48.503476+08:00",updated_at:"2025-05-24T14:03:46.534292+08:00",desc_md:`### 腾讯智影

- **开发商**：腾讯
- **简介**：腾讯智影是腾讯推出的在线视频创作平台，集成素材搜集、视频剪辑、数字人配音、自动字幕等多种 AI 功能，提升视频创作效率。
- **主要特性**：
  - 数字人配音与虚拟主播
  - 自动字幕与内容转换
  - 丰富的素材库与模板
  - 支持多平台视频发布
  - 免费使用，持续更新
- **适用人群**：内容创作者、短视频运营者、企业营销团队
- [官网链接](https://zenvideo.qq.com/)
`},{id:293,parent_category:63,parent_category_name:"办公神器",sub_category:68,sub_category_name:"工具箱",name:"Toolscout",description:"一个专注于人工智能工具和新闻的目录平台，每天更新，最快最新的人工智能工具",url:"https://toolscout.ai/",icon:"https://kjdaohang.com/media/tool_icons/Toolscout.webp",logo:"https://kjdaohang.com/media/tool_icons/Toolscout.webp",tags:"AI工具合集",order:0,is_active:!0,views:22,likes_count:0,created_at:"2025-05-22T20:21:11.859737+08:00",updated_at:"2025-05-27T10:32:45.576458+08:00",desc_md:`### Toolscout

- **开发商**：Toolscout 团队
- **简介**：Toolscout 是一个专注于人工智能工具和新闻的目录平台，收录全球最新 AI 工具，每日更新，帮助用户快速了解行业动态。
- **主要特性**：
  - 收录丰富的 AI 工具和新闻
  - 每日更新，紧跟行业前沿
  - 分类清晰，查找便捷
  - 提供工具对比和推荐
- **适用人群**：AI 爱好者、开发者、产品经理、研究人员
- [官网链接](https://toolscout.ai/)
`},{id:245,parent_category:23,parent_category_name:"开发工具",sub_category:25,sub_category_name:"代码协作",name:"GitHub",description:"全球最大的代码托管平台，提供强大的版本控制功能，支持多人协作，拥有庞大的开源社区。",url:"https://github.com/",icon:"https://kjdaohang.com/media/tool_icons/github.jpg",logo:"https://kjdaohang.com/media/tool_icons/github.jpg",tags:"分布式版本控制",order:0,is_active:!0,views:22,likes_count:0,created_at:"2025-05-22T17:44:35.948913+08:00",updated_at:"2025-05-27T07:40:47.556713+08:00",desc_md:`### GitHub

- **简介**：GitHub 是全球最大的代码托管和协作开发平台，基于 Git 版本控制系统，拥有庞大的开源社区和丰富的协作工具。
- **主要特性**：
  - 支持 Git 仓库托管和版本管理
  - Pull Request、Issue、Wiki 等协作功能
  - Actions 持续集成/持续部署（CI/CD）
  - 丰富的开源项目和社区资源
  - 团队协作与权限管理
- **适用场景**：适合开源项目、企业协作开发、个人代码管理和技术社区。
- [官网链接](https://github.com/)
`},{id:65,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"WPS AI",description:"金山办公推出的一款生成式人工智能应用，具备大语言模型能力，与 WPS 办公套件无缝集成",url:"https://ai.wps.cn/",icon:"https://kjdaohang.com/media/tool_icons/ai-logo.DVsY1U7X.png",logo:"https://kjdaohang.com/media/tool_icons/ai-logo.DVsY1U7X.png",tags:"金山办公,AI办公助手",order:0,is_active:!0,views:22,likes_count:0,created_at:"2025-05-21T22:08:44.176305+08:00",updated_at:"2025-05-24T15:24:48.037856+08:00",desc_md:`### WPS AI

- **开发商**：金山办公
- **简介**：WPS AI 是金山办公推出的生成式人工智能应用，深度集成于 WPS 办公套件，具备大语言模型能力，支持文档写作、表格分析、PPT 生成等多种智能办公场景。
- **主要特性**：
  - 智能写作与文档润色
  - 表格数据分析与自动化处理
  - PPT 智能生成与美化
  - 与 WPS 各组件无缝集成
  - 支持多端同步与协作
- **适用人群**：企业用户、学生、内容创作者、办公人士
- [官网链接](https://ai.wps.cn/)
`},{id:309,parent_category:44,parent_category_name:"实用小工具",sub_category:62,sub_category_name:"二维码制作",name:"微友活码",description:"一款专注于微信生态运营的智能营销工具，通过生成和管理“活码”（动态二维码）帮助用户解决传统微信二维码的各种限制，实现用户引流和社群管理。",url:"https://www.huomaqun.com/create",icon:"https://kjdaohang.com/media/tool_icons/61ef0fe6d482249345e859afa82c3e82.png",logo:"https://kjdaohang.com/media/tool_icons/61ef0fe6d482249345e859afa82c3e82.png",tags:"微信生态,活码生成",order:0,is_active:!0,views:21,likes_count:0,created_at:"2025-06-06T21:51:01.765783+08:00",updated_at:"2025-06-08T11:47:53.955686+08:00",desc_md:`### 微友活码

- **开发商**：微友活码团队
- **简介**：微友活码是一款专注于微信生态的智能二维码营销工具，支持生成动态活码，解决微信二维码人数上限、失效等问题。平台还支持多渠道引流、社群管理、数据统计等功能，助力微信运营者高效管理社群和用户。
- **主要特性**：
  - 动态活码生成与管理
  - 多渠道引流与分流
  - 二维码数据统计与分析
  - 社群管理与自动化工具
  - 多种二维码样式美化
- **适用人群**：微信运营者、社群管理者、营销人员
- [官网链接](https://www.huomaqun.com/create)
`},{id:180,parent_category:63,parent_category_name:"办公神器",sub_category:69,sub_category_name:"在线文档",name:"飞书文档",description:"字节跳动旗下飞书推出的一款在线协作办公平台，支持多人实时协作编辑文档、表格、幻灯片等多种内容。",url:"https://www.feishu.cn/product/docs",icon:"https://kjdaohang.com/media/tool_icons/%E9%A3%9E%E4%B9%A6%E9%97%AE%E5%8D%B7_NGeTCuU.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E9%A3%9E%E4%B9%A6%E9%97%AE%E5%8D%B7_NGeTCuU.jpg",tags:"字节跳动,在线文档",order:0,is_active:!0,views:21,likes_count:0,created_at:"2025-05-22T14:01:03.323648+08:00",updated_at:"2025-05-27T10:25:28.430288+08:00",desc_md:`### 飞书文档

- **开发商**：字节跳动（飞书）
- **简介**：飞书文档是飞书推出的在线协作办公平台，支持多人实时协作编辑文档、表格、幻灯片等内容，适合企业和团队办公。
- **主要特性**：
  - 多人实时协作编辑
  - 支持文档、表格、幻灯片等多种格式
  - 云端存储与权限管理
  - 丰富的模板和插件生态
  - 与飞书生态无缝集成
- **适用人群**：企业团队、项目管理者、远程办公用户
- [官网链接](https://www.feishu.cn/product/docs)
`},{id:330,parent_category:44,parent_category_name:"实用小工具",sub_category:76,sub_category_name:"图片压缩",name:"迅捷在线压缩",description:"迅捷在线压缩是一个功能强大的在线文件压缩工具，支持多种文件类型（如图片、视频、PDF、Word、PPT等）的压缩，并且操作简单、安全可靠。",url:"https://yasuo.xunjiepdf.com/",icon:"https://kjdaohang.com/media/tool_icons/172433-63204c511fcc4.jpg",logo:"https://kjdaohang.com/media/tool_icons/172433-63204c511fcc4.jpg",tags:"图片压缩,视频压缩,文件压缩",order:0,is_active:!0,views:20,likes_count:0,created_at:"2025-06-14T21:52:38.914134+08:00",updated_at:"2025-06-14T21:52:38.914177+08:00",desc_md:""},{id:170,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"ChatBox",description:"一款开源免费跨平台的 OpenAI API 桌面客户端，支持 Windows、macOS 和 Linux。",url:"https://chatboxai.app/zh",icon:"https://kjdaohang.com/media/tool_icons/default_odaZq2C.png",logo:"https://kjdaohang.com/media/tool_icons/default_odaZq2C.png",tags:"AI客户端,开源",order:0,is_active:!0,views:20,likes_count:0,created_at:"2025-05-22T13:38:04.988243+08:00",updated_at:"2025-05-24T14:44:43.506226+08:00",desc_md:`### ChatBox

- **开发商**：ChatBox 社区
- **简介**：ChatBox 是一款开源、免费、跨平台的 OpenAI API 桌面客户端，支持 Windows、macOS 和 Linux，便于用户本地调用 ChatGPT 等大模型进行对话和内容创作。
- **主要特性**：
  - 支持多平台（Windows、macOS、Linux）
  - 本地调用 OpenAI API
  - 聊天记录本地保存与管理
  - 支持多会话与多模型切换
  - 开源免费，社区活跃
- **适用人群**：开发者、内容创作者、AI 爱好者
- [官网链接](https://chatboxai.app/zh)
`},{id:269,parent_category:35,parent_category_name:"运维工具",sub_category:39,sub_category_name:"容器管理",name:"Rancher",description:"一款开源的企业级容器管理平台，专注于简化 Kubernetes 集群的管理和部署，同时支持 Docker 等多种容器技术",url:"https://www.rancher.com/",icon:"https://kjdaohang.com/media/tool_icons/Rancher.jpg",logo:"https://kjdaohang.com/media/tool_icons/Rancher.jpg",tags:"企业级容器管理平台",order:0,is_active:!0,views:19,likes_count:0,created_at:"2025-05-22T18:23:10.509759+08:00",updated_at:"2025-05-27T09:21:01.723552+08:00",desc_md:`### Rancher

- **开发商**：SUSE（原 Rancher Labs）
- **简介**：Rancher 是一款开源的企业级容器管理平台，专注于简化 Kubernetes 集群的部署、管理和运维，同时支持多种容器技术。
- **主要特性**：
  - 一键部署和管理 Kubernetes 集群
  - 多集群和多租户支持
  - 丰富的安全和权限管理
  - 集成监控、日志和告警
  - 支持 Docker、K8s 等多种容器平台
- **适用人群**：企业 IT 团队、运维工程师、云原生开发者
- [官网链接](https://www.rancher.com/)
`},{id:39,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"ima.copilot",description:"腾讯开发的智能工作台产品，以知识库为核心，整合了腾讯混元大模型与DeepSeek R1满血版双AI引擎。",url:"https://ima.qq.com/",icon:"https://kjdaohang.com/media/tool_icons/default_9OOzapn.png",logo:"https://kjdaohang.com/media/tool_icons/default_9OOzapn.png",tags:"腾讯,知识库",order:0,is_active:!0,views:19,likes_count:0,created_at:"2025-05-21T21:01:29.718289+08:00",updated_at:"2025-05-24T15:40:16.113287+08:00",desc_md:`### ima.copilot

- **开发商**：腾讯
- **简介**：ima.copilot 是腾讯推出的智能工作台产品，核心为知识库管理，整合腾讯混元大模型与 DeepSeek R1 双 AI 引擎，助力企业知识管理与智能办公。
- **主要特性**：
  - 智能知识库管理
  - 多模型智能问答与内容生成
  - 支持企业内部文档检索与分析
  - 与腾讯生态产品无缝集成
  - 权限管理与数据安全
- **适用人群**：企业用户、知识管理者、团队协作用户
- [官网链接](https://ima.qq.com/)
`},{id:271,parent_category:35,parent_category_name:"运维工具",sub_category:39,sub_category_name:"容器管理",name:"KubeSphere",description:"一款基于 Kubernetes 的企业级分布式多租户容器平台。",url:"https://kubesphere.io",icon:"https://kjdaohang.com/media/tool_icons/KubeSphere.jpg",logo:"https://kjdaohang.com/media/tool_icons/KubeSphere.jpg",tags:"容器管理平台",order:0,is_active:!0,views:18,likes_count:0,created_at:"2025-05-22T18:24:39.215141+08:00",updated_at:"2025-05-27T09:27:01.638168+08:00",desc_md:`### KubeSphere

- **开发商**：青云QingCloud
- **简介**：KubeSphere 是一款基于 Kubernetes 的企业级分布式多租户容器平台，提供可视化运维、DevOps、微服务治理等全栈功能。
- **主要特性**：
  - 多租户和多集群管理
  - 可视化 DevOps 流水线
  - 微服务治理与服务网格集成
  - 监控、日志、告警一体化
  - 丰富的插件和生态扩展
- **适用人群**：企业 IT 团队、云原生开发者、运维工程师
- [官网链接](https://kubesphere.io)
`},{id:391,parent_category:3,parent_category_name:"AI工具",sub_category:7,sub_category_name:"AI音频",name:"SuperWhisper",description:"SuperWhisper 是一款专为Mac用户设计的人工智能语音转文字工具，凭借其强大的功能和便捷性，极大地提升了用户的工作效率和创作体验。",url:"https://superwhisper.com/",icon:"https://kjdaohang.com/media/tool_icons/256.png",logo:"https://kjdaohang.com/media/tool_icons/256.png",tags:"语音转文字,Mac版",order:0,is_active:!0,views:17,likes_count:0,created_at:"2025-07-18T12:29:51.974682+08:00",updated_at:"2025-07-18T12:29:51.974714+08:00"},{id:313,parent_category:44,parent_category_name:"实用小工具",sub_category:74,sub_category_name:"Windows工具",name:"ZoomIt",description:"一款由微软 Sysinternals 团队开发的免费屏幕放大、注释和录制工具，广泛应用于技术演示、教学、会议等场景。",url:"https://learn.microsoft.com/zh-cn/sysinternals/downloads/zoomit",icon:"https://kjdaohang.com/media/tool_icons/3671_48.png",logo:"https://kjdaohang.com/media/tool_icons/3671_48.png",tags:"微软,Sysinternals,屏幕放大",order:0,is_active:!0,views:17,likes_count:0,created_at:"2025-06-08T12:05:13.799905+08:00",updated_at:"2025-06-08T12:05:13.799986+08:00",desc_md:`### ZoomIt

- **开发商**：Microsoft Sysinternals
- **简介**：ZoomIt 是微软 Sysinternals 团队开发的免费屏幕放大、注释和录制工具，支持实时放大、绘图、计时等功能，广泛应用于技术演示、教学和会议。
- **主要特性**：
  - 实时屏幕放大与缩放
  - 屏幕注释与绘图
  - 计时器与演示辅助
  - 轻量级，免安装
  - 免费使用，兼容性强
- **适用人群**：教师、讲师、技术演示人员
- [官网链接](https://learn.microsoft.com/zh-cn/sysinternals/downloads/zoomit)
`},{id:268,parent_category:35,parent_category_name:"运维工具",sub_category:39,sub_category_name:"容器管理",name:"Docker Compose",description:"Docker官方提供的工具，用于定义和运行多个容器的应用。通过YAML文件定义和配置多个容器之间的关系和依赖。",url:"https://docs.docker.com/compose/",icon:"https://kjdaohang.com/media/tool_icons/Docker_Compose.png",logo:"https://kjdaohang.com/media/tool_icons/Docker_Compose.png",tags:"容器编排工具",order:0,is_active:!0,views:17,likes_count:0,created_at:"2025-05-22T18:22:37.191635+08:00",updated_at:"2025-05-27T09:17:50.646474+08:00",desc_md:`### Docker Compose

- **开发商**：Docker, Inc.
- **简介**：Docker Compose 是 Docker 官方提供的多容器编排工具，通过 YAML 文件定义和管理多个容器应用的服务、网络和存储依赖。
- **主要特性**：
  - 基于 YAML 的服务定义和配置
  - 一键启动、停止和管理多容器应用
  - 支持多环境变量和扩展配置
  - 易于本地开发、测试和 CI/CD 集成
  - 与 Docker 生态无缝集成
- **适用人群**：开发者、测试工程师、DevOps 团队
- [官方文档](https://docs.docker.com/compose/)
`},{id:258,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"Android Studio",description:"由 Google 开发的官方集成开发环境（IDE），专为 Android 应用开发设计，基于 IntelliJ IDEA。",url:"https://developer.android.google.cn/studio",icon:"https://kjdaohang.com/media/tool_icons/Android_Studio.jpg",logo:"https://kjdaohang.com/media/tool_icons/Android_Studio.jpg",tags:"Android开发首选",order:0,is_active:!0,views:17,likes_count:0,created_at:"2025-05-22T18:03:49.797956+08:00",desc_md:`### Android Studio

- **开发商**：Google
- **简介**：Android Studio 是官方 Android 应用开发 IDE，基于 IntelliJ IDEA。集成了强大的代码编辑、调试、性能分析、UI 设计和模拟器工具。
- **主要特性**：
  - 智能代码补全与重构
  - 可视化 UI 设计器
  - 集成模拟器与调试器
  - 支持 Gradle 构建系统
- **适用人群**：Android 应用开发者
- [官网链接](https://developer.android.google.cn/studio)`,updated_at:"2025-05-27T08:16:14.890719+08:00"},{id:192,parent_category:3,parent_category_name:"AI工具",sub_category:12,sub_category_name:"AI数字人",name:"万彩AI",description:"一款全能型AI内容创作平台，集成了AI智能写作、AI换脸、AI数字人制作、AI短视频制作等多种功能",url:"https://ai.kezhan365.com/",icon:"https://kjdaohang.com/media/tool_icons/9557d1-4.png",logo:"https://kjdaohang.com/media/tool_icons/9557d1-4.png",tags:"AI数字人,AI换脸,AI写作",order:0,is_active:!0,views:17,likes_count:0,created_at:"2025-05-22T14:31:22.191148+08:00",updated_at:"2025-05-24T14:13:02.350081+08:00",desc_md:`### 万彩AI

- **开发商**：万彩AI团队
- **简介**：万彩AI是一款全能型 AI 内容创作平台，集成 AI 智能写作、AI 换脸、数字人制作、短视频生成等多种功能，适合多场景内容创作。
- **主要特性**：
  - AI 智能写作与内容生成
  - AI 换脸与数字人制作
  - 短视频自动生成与编辑
  - 丰富的模板与素材库
  - 多端同步与团队协作
- **适用人群**：内容创作者、短视频运营者、企业营销团队
- [官网链接](https://ai.kezhan365.com/)
`},{id:183,parent_category:63,parent_category_name:"办公神器",sub_category:70,sub_category_name:"问卷表单",name:"问卷星",description:"一款免费的在线表单设计、制作工具，可以帮助用户在日常工作中收集信息或意见反馈，并自动汇总数据，常用于问卷调查、在线考试、360度评估等应用。",url:"https://www.wjx.cn/",icon:"https://kjdaohang.com/media/tool_icons/%E9%97%AE%E5%8D%B7%E6%98%9F.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E9%97%AE%E5%8D%B7%E6%98%9F.jpg",tags:"问卷调查",order:0,is_active:!0,views:17,likes_count:0,created_at:"2025-05-22T14:06:02.237969+08:00",updated_at:"2025-05-27T10:08:17.093259+08:00",desc_md:`### 问卷星

- **开发商**：问卷星团队
- **简介**：问卷星是一款免费的在线问卷与表单设计工具，支持问卷创建、发布、数据收集与分析，广泛应用于调查、考试、评估等场景。
- **主要特性**：
  - 支持多种题型与逻辑跳转
  - 自动汇总与数据分析
  - 丰富的模板与自定义设计
  - 支持多渠道发布与回收
  - 数据导出与可视化报告
- **适用人群**：企业、教育机构、研究人员、市场调研员
- [官网链接](https://www.wjx.cn/)
`},{id:23,parent_category:44,parent_category_name:"实用小工具",sub_category:62,sub_category_name:"二维码制作",name:"草料二维码",description:"能快速生成文本码、网址码、文件码、图片码、音视频码、名片码等多种类型的二维码",url:"https://cli.im/",icon:"https://kjdaohang.com/media/tool_icons/%E8%8D%89%E6%96%99%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E8%8D%89%E6%96%99%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg",tags:"二维码,免费",order:0,is_active:!0,views:17,likes_count:0,created_at:"2025-05-21T18:40:14.459353+08:00",updated_at:"2025-05-27T14:29:29.644803+08:00",desc_md:`### 草料二维码

- **开发商**：草料科技
- **简介**：草料二维码是一款专业的二维码生成与管理平台，支持文本、网址、文件、图片、音视频、名片等多种二维码类型。平台提供二维码批量生成、动态二维码、扫码统计、权限管理等功能，广泛应用于企业、教育、营销等场景。
- **主要特性**：
  - 多类型二维码生成（文本、文件、图片、音视频等）
  - 动态二维码与批量生成
  - 二维码扫码统计与权限管理
  - 支持二维码美化与定制
  - 企业级应用与API接口
- **适用人群**：企业用户、教育机构、市场营销人员、个人用户
- [官网链接](https://cli.im/)
`},{id:22,parent_category:44,parent_category_name:"实用小工具",sub_category:48,sub_category_name:"表情包",name:"SearchEmoji",description:"SearchEmoji 是一款功能强大的 Emoji 搜索引擎，支持多达 30 种语言",url:"https://searchemoji.app/zh-hans",icon:"https://kjdaohang.com/media/tool_icons/SearchEmoji.png",logo:"https://kjdaohang.com/media/tool_icons/SearchEmoji.png",tags:"Emoji 搜索引擎",order:0,is_active:!0,views:17,likes_count:1,created_at:"2025-05-21T18:36:32.232441+08:00",updated_at:"2025-05-28T11:36:57.042290+08:00",desc_md:`### SearchEmoji

- **开发商**：SearchEmoji 团队
- **简介**：SearchEmoji 是一款多语言 Emoji 搜索引擎，支持 30 多种语言，帮助用户快速查找、复制和了解各种 Emoji 表情符号的含义和用法。适合跨国沟通、内容创作和表情包制作。
- **主要特性**：
  - 多语言 Emoji 搜索与分类
  - 一键复制 Emoji
  - 提供详细 Emoji 含义和用法
  - 支持表情包创作
  - 界面简洁，操作便捷
- **适用人群**：全球用户、内容创作者、社交达人
- [官网链接](https://searchemoji.app/zh-hans)
`},{id:410,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"imini",description:"国内可直接访问，操作门槛低，支持用Nano Banana生成图片、视频、PPT等多种内容",url:"https://imini.com/zh",icon:"https://kjdaohang.com/media/tool_icons/imageye___-_imgi_6_star.c0f97478.png",logo:"https://kjdaohang.com/media/tool_icons/imageye___-_imgi_6_star.c0f97478.png",tags:"Nano Banana,AI智能体",order:0,is_active:!0,views:16,likes_count:0,created_at:"2025-09-22T19:34:54.667405+08:00",updated_at:"2025-09-22T19:34:54.667523+08:00",desc_md:`### imini

- **开发商**：imini团队
- **简介**：imini是一款面向国内用户的AI内容生成平台，支持Nano Banana模型生成图片、视频、PPT等多种内容，操作简单，免注册。
- **主要特性**：
  - 支持Nano Banana多模态内容生成
  - 图片、视频、PPT一键生成
  - 简单易用，免注册
  - 多平台适配
  - 免费体验
- **适用人群**：内容创作者、学生、企业用户
- [官网链接](https://imini.com/zh)
`},{id:356,parent_category:40,parent_category_name:"求职面试",sub_category:41,sub_category_name:"求职求聘",name:"BOSS直聘",description:"创立于2014年7月，隶属于看准科技集团，是国内首家采用“直聘模式”的互联网招聘平台。",url:"https://www.zhipin.com/",icon:"https://kjdaohang.com/media/tool_icons/OIP-C_3.webp",logo:"https://kjdaohang.com/media/tool_icons/OIP-C_3.webp",tags:"综合招聘平台",order:0,is_active:!0,views:16,likes_count:0,created_at:"2025-06-30T08:59:24.187765+08:00",updated_at:"2025-06-30T09:40:41.204793+08:00",desc_md:`### BOSS直聘

- **开发商**：看准科技集团
- **简介**：BOSS直聘是国内领先的互联网招聘平台，首创“直聘模式”，让求职者与企业Boss直接沟通，提升招聘效率。平台覆盖互联网、金融、教育等多个行业，支持在线聊天、职位推荐、简历投递等功能。
- **主要特性**：
  - Boss与求职者实时沟通
  - 智能职位推荐
  - 简历投递与面试邀约
  - 多行业岗位覆盖
  - 移动端体验优异
- **适用人群**：求职者、企业招聘方、职场人士
- [官网链接](https://www.zhipin.com/)
`},{id:319,parent_category:58,parent_category_name:"资源网站",sub_category:75,sub_category_name:"便民查询",name:"医保政策导航",description:"一个专注于医保政策的导航平台，可以快速获取与医保相关的各种信息，包括基础概念、政策指南、地区分类和常见问题解答等。",url:"https://yibao.233h.com/",icon:"https://kjdaohang.com/media/tool_icons/logo_5GPKTOq.png",logo:"https://kjdaohang.com/media/tool_icons/logo_5GPKTOq.png",tags:"医保政策,医保查询",order:0,is_active:!0,views:16,likes_count:0,created_at:"2025-06-09T10:14:41.989469+08:00",updated_at:"2025-06-09T13:20:42.092754+08:00",desc_md:`### 医保政策导航

- **简介**：医保政策导航是一个聚合全国各地医保政策、指南和常见问题的便民查询平台，帮助用户快速了解和掌握医保相关信息。
- **主要特性**：
  - 汇总全国各地医保政策法规
  - 提供医保基础知识、政策解读、常见问题解答
  - 支持地区分类和快速检索
  - 持续更新，紧跟政策变化
  - 适合个人、企业、医疗机构等多类用户
- **适用人群**：普通居民、医保参保人、企业HR、医疗从业者
- [访问医保政策导航](https://yibao.233h.com/)
`},{id:262,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"Xcode",description:"苹果公司开发的集成开发环境（IDE），专为 macOS、iOS等应用开发设计。",url:"https://apps.apple.com/cn/app/xcode/id497799835",icon:"https://kjdaohang.com/media/tool_icons/Xcode.jpg",logo:"https://kjdaohang.com/media/tool_icons/Xcode.jpg",tags:"苹果专用开发IDE",order:0,is_active:!0,views:16,likes_count:0,created_at:"2025-05-22T18:06:51.429174+08:00",updated_at:"2025-05-27T08:25:07.205075+08:00",desc_md:`### Xcode

- **开发商**：Apple
- **简介**：Xcode 是苹果官方的集成开发环境，专为 macOS、iOS、watchOS、tvOS 应用开发设计。内置代码编辑、UI 设计、调试、测试和模拟器。
- **主要特性**：
  - 支持 Swift、Objective-C
  - 可视化界面设计
  - 集成模拟器与测试工具
  - App Store 发布支持
- **适用人群**：苹果平台开发者
- [App Store链接](https://apps.apple.com/cn/app/xcode/id497799835)`},{id:66,parent_category:30,parent_category_name:"设计工具",sub_category:34,sub_category_name:"流程图设计",name:"亿图脑图",description:"亿图脑图MindMaster，跨平台思维导图软件，覆盖主流操作系统。",url:"https://mm.edrawsoft.cn/app/create?utm_source=pc-homepage",icon:"https://kjdaohang.com/media/tool_icons/%E4%BA%BF%E5%9B%BE%E8%84%91%E5%9B%BE.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E4%BA%BF%E5%9B%BE%E8%84%91%E5%9B%BE.jpg",tags:"在线脑图,MindMaster",order:0,is_active:!0,views:16,likes_count:0,created_at:"2025-05-21T22:11:13.613718+08:00",updated_at:"2025-05-27T08:50:05.893669+08:00",desc_md:`### 亿图脑图（MindMaster）

- **简介**：亿图脑图（MindMaster）是一款专业的思维导图软件，支持 Windows、Mac、Linux、Web、移动端等多平台。适合头脑风暴、知识梳理、项目管理等多种场景。
- **主要特性**：
  - 多平台同步，云端存储
  - 丰富的主题和结构样式
  - 支持导出多种格式（图片、PDF、Word、XMind等）
  - 支持团队协作和演示模式
  - 内置模板库和图标库
- **适用人群**：学生、教师、产品经理、项目经理、企业团队
- [官网链接](https://mm.edrawsoft.cn/app/create?utm_source=pc-homepage)
`},{id:56,parent_category:44,parent_category_name:"实用小工具",sub_category:47,sub_category_name:"图片编辑",name:"remove.bg",description:"remove.bg专门设计用于自动从图像中移除背景，无需手动操作。",url:"https://www.remove.bg/zh",icon:"https://kjdaohang.com/media/tool_icons/remove.bg.jpg",logo:"https://kjdaohang.com/media/tool_icons/remove.bg.jpg",tags:"一键背景移除",order:0,is_active:!0,views:16,likes_count:0,created_at:"2025-05-21T21:48:42.722452+08:00",updated_at:"2025-05-27T14:00:53.544630+08:00"},{id:10,parent_category:3,parent_category_name:"AI工具",sub_category:10,sub_category_name:"AI设计",name:"可画AI",description:"专注于商业场景的AI绘画工具。",url:"https://www.canva.cn/",icon:"https://kjdaohang.com/media/tool_icons/kehuaai-logo_R3WW0B7.png",logo:"https://kjdaohang.com/media/tool_icons/kehuaai-logo_R3WW0B7.png",tags:"AI,绘画,商用",order:0,is_active:!0,views:16,likes_count:0,created_at:"2025-05-21T12:59:12.457298+08:00",updated_at:"2025-05-29T17:32:15.682040+08:00",desc_md:`### 可画AI

- **开发商**：可画AI团队
- **简介**：可画AI是一款专注于商业场景的AI绘画工具，支持多风格AI绘画、商用插画、LOGO等自动生成。
- **主要特性**：
  - 多风格AI绘画与插画生成
  - 商用LOGO与海报自动设计
  - 丰富的模板与素材库
  - 一键导出与商用授权
  - 简单易用，适合新手
- **适用人群**：设计师、内容创作者、企业用户
- [官网链接](https://www.canva.cn/)
`},{id:307,parent_category:44,parent_category_name:"实用小工具",sub_category:72,sub_category_name:"在线工具",name:"FolderPort",description:"一个便捷的文件夹分享平台，只需选择要分享的文件夹，生成分享链接，便可轻松访问和分享。采用P2P技术，无需安装任何软件，只需通过浏览器即可开始分享。",url:"https://folderport.com/zh",icon:"https://kjdaohang.com/media/tool_icons/FolderPort.jpg",logo:"https://kjdaohang.com/media/tool_icons/FolderPort.jpg",tags:"文件分享,临时网盘",order:0,is_active:!0,views:15,likes_count:0,created_at:"2025-06-03T08:52:32.036256+08:00",updated_at:"2025-06-03T08:52:32.036319+08:00",desc_md:`### FolderPort

- **开发商**：FolderPort 团队
- **简介**：FolderPort 是一款基于P2P技术的文件夹分享平台，用户只需选择要分享的文件夹，即可生成分享链接，通过浏览器即可访问和下载，无需安装客户端，适合临时文件传输和协作。
- **主要特性**：
  - 支持文件夹一键分享与访问
  - 基于P2P技术，安全高效
  - 无需安装软件，浏览器即用
  - 支持多平台与多设备
  - 操作简单，适合临时协作
- **适用人群**：团队协作、临时文件分享、远程办公用户
- [官网链接](https://folderport.com/zh)
`},{id:328,parent_category:49,parent_category_name:"自媒体工具",sub_category:51,sub_category_name:"素材库",name:"iconfont",description:"国内图标矢量图标库，提供矢量图标下载、在线存储、格式转换等功能，包含各种创意图标、矢量插画素材，素材丰富，可下载为SVG、PNG多种格式。",url:"https://www.iconfont.cn/",icon:"https://kjdaohang.com/media/tool_icons/R-C_2.png",logo:"https://kjdaohang.com/media/tool_icons/R-C_2.png",tags:"阿里巴巴,矢量图标库",order:0,is_active:!0,views:14,likes_count:0,created_at:"2025-06-10T11:51:08.417092+08:00",updated_at:"2025-06-10T11:51:08.417135+08:00",desc_md:`### iconfont

- **开发商**：阿里巴巴
- **简介**：iconfont 是国内最大的矢量图标库，提供丰富的创意图标、矢量插画素材，支持在线存储、格式转换、图标管理等功能，支持 SVG、PNG 等多种格式下载，适合网页、APP、PPT 等多场景使用。
- **主要特性**：
  - 海量矢量图标与插画素材
  - 支持SVG、PNG等多格式下载
  - 在线存储与图标管理
  - 图标自定义与项目管理
  - 持续更新，社区活跃
- **适用人群**：设计师、开发者、内容创作者、产品经理
- [官网链接](https://www.iconfont.cn/)
`},{id:148,parent_category:63,parent_category_name:"办公神器",sub_category:66,sub_category_name:"在线翻译",name:"有道翻译",description:"网易有道推出的一款功能强大的在线翻译工具，支持多种语言之间的互译。",url:"https://fanyi.youdao.com/index.html#/",icon:"https://kjdaohang.com/media/tool_icons/%E6%9C%89%E9%81%93%E7%BF%BB%E8%AF%91.png",logo:"https://kjdaohang.com/media/tool_icons/%E6%9C%89%E9%81%93%E7%BF%BB%E8%AF%91.png",tags:"网易,翻译工具",order:0,is_active:!0,views:14,likes_count:0,created_at:"2025-05-22T12:00:40.090845+08:00",updated_at:"2025-05-27T11:31:50.768292+08:00",desc_md:`### 有道翻译

- **开发商**：网易有道
- **简介**：有道翻译是网易有道推出的多功能在线翻译平台，支持文本、文档、图片等多种翻译方式，翻译准确，界面友好。
- **主要特性**：
  - 多语言文本互译
  - 文档、图片翻译
  - 智能语音识别与翻译
  - 词典和例句查询
  - 支持网页和移动端
- **适用人群**：学生、职场人士、翻译工作者
- [官网链接](https://fanyi.youdao.com/)
`},{id:368,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"InsCode",description:"InsCode 是一个一站式的软件开发服务平台，从开发-部署-运维-运营，都可以在 InsCode 轻松完成。",url:"https://inscode.csdn.net/",icon:"https://kjdaohang.com/media/tool_icons/avatar.png",logo:"https://kjdaohang.com/media/tool_icons/avatar.png",tags:"开发服务平台,云端IDE",order:0,is_active:!0,views:13,likes_count:0,desc_md:`### InsCode

- **简介**：InsCode 是一个一站式的软件开发服务平台，集成开发、部署、运维、运营于一体。支持云端 IDE、自动化部署、团队协作等功能。
- **主要特性**：
  - 云端开发与部署
  - 团队协作与项目管理
  - 多语言与多框架支持
- **适用人群**：企业开发团队、云原生开发者
- [官网链接](https://inscode.csdn.net/)`,created_at:"2025-07-05T08:46:12.050212+08:00",updated_at:"2025-07-05T08:46:12.050253+08:00"},{id:365,parent_category:40,parent_category_name:"求职面试",sub_category:41,sub_category_name:"求职求聘",name:"华为招聘",description:"华为招聘网站是求职者了解和参与华为招聘的重要平台。",url:"https://career.huawei.com/",icon:"https://kjdaohang.com/media/tool_icons/favicon-%E5%8D%8E%E4%B8%BA.ico",logo:"https://kjdaohang.com/media/tool_icons/favicon-%E5%8D%8E%E4%B8%BA.ico",tags:"企业官方渠道",order:0,is_active:!0,views:13,likes_count:0,created_at:"2025-06-30T09:18:21.933345+08:00",updated_at:"2025-06-30T09:24:44.068031+08:00",desc_md:`### 华为招聘

- **开发商**：华为技术有限公司
- **简介**：华为招聘是华为公司官方的人才招聘平台，发布最新校招、社招、实习等岗位信息，支持在线投递简历、职位搜索、面试进度查询等功能，助力求职者加入华为。
- **主要特性**：
  - 官方岗位发布与职位搜索
  - 在线简历投递与进度查询
  - 校招、社招、实习多渠道招聘
  - 企业文化与员工故事展示
  - 支持多语言界面
- **适用人群**：应届毕业生、社会求职者、技术人才
- [官网链接](https://career.huawei.com/)
`},{id:358,parent_category:40,parent_category_name:"求职面试",sub_category:41,sub_category_name:"求职求聘",name:"拉勾网",description:"成立于2013年，总部位于北京，是一家专注于互联网行业的垂直招聘平台，隶属于北京拉勾网络技术有限公司。",url:"https://www.lagou.com/",icon:"https://kjdaohang.com/media/tool_icons/OIP-C_2.webp",logo:"https://kjdaohang.com/media/tool_icons/OIP-C_2.webp",tags:"综合招聘平台",order:0,is_active:!0,views:12,likes_count:0,created_at:"2025-06-30T09:03:07.803497+08:00",updated_at:"2025-06-30T09:39:18.324920+08:00",desc_md:`### 拉勾网

- **开发商**：北京拉勾网络技术有限公司
- **简介**：拉勾网是国内知名的互联网行业招聘平台，专注于IT、互联网、科技等领域，提供职位搜索、简历投递、在线沟通、面试管理等服务，助力互联网人才高效求职。
- **主要特性**：
  - 覆盖互联网、IT、科技等热门行业
  - 智能职位推荐与在线沟通
  - 简历投递与面试进度管理
  - 行业资讯与求职攻略
  - 活跃的企业招聘方
- **适用人群**：互联网求职者、技术人才、产品经理
- [官网链接](https://www.lagou.com/)
`},{id:289,parent_category:63,parent_category_name:"办公神器",sub_category:66,sub_category_name:"在线翻译",name:"沉浸式翻译",description:"一款基于浏览器的翻译工具，主打“沉浸式”双语对照阅读体验，全网口碑炸裂的双语对照网页翻译插件！",url:"https://immersivetranslate.com/",icon:"https://kjdaohang.com/media/tool_icons/%E6%B2%89%E6%B5%B8%E5%BC%8F%E7%BF%BB%E8%AF%91.png",logo:"https://kjdaohang.com/media/tool_icons/%E6%B2%89%E6%B5%B8%E5%BC%8F%E7%BF%BB%E8%AF%91.png",tags:"翻译插件,口碑炸裂",order:0,is_active:!0,views:12,likes_count:0,created_at:"2025-05-22T20:07:36.569301+08:00",updated_at:"2025-05-27T11:13:48.960536+08:00",desc_md:`### 沉浸式翻译

- **开发商**：沉浸式翻译团队
- **简介**：沉浸式翻译是一款浏览器插件，主打双语对照阅读体验，支持网页、PDF、文档等多种内容的实时翻译，提升外语学习和阅读效率。
- **主要特性**：
  - 支持网页、PDF、文档实时翻译
  - 双语对照显示，提升学习效率
  - 多语言支持，翻译准确
  - 界面简洁，易于使用
  - 支持主流浏览器插件安装
- **适用人群**：外语学习者、跨境用户、内容阅读者
- [官网链接](https://immersivetranslate.com/)
`},{id:246,parent_category:23,parent_category_name:"开发工具",sub_category:25,sub_category_name:"代码协作",name:"GitLab",description:"一款开源的 Git 仓库管理工具，提供从代码托管到持续集成/持续部署（CI/CD）的完整解决方案",url:"https://about.gitlab.com/",icon:"https://kjdaohang.com/media/tool_icons/gitlab.png",logo:"https://kjdaohang.com/media/tool_icons/gitlab.png",tags:"DevOps",order:0,is_active:!0,views:12,likes_count:0,created_at:"2025-05-22T17:45:07.039221+08:00",updated_at:"2025-05-27T07:49:55.017752+08:00",desc_md:`### GitLab

- **简介**：GitLab 是一款开源的 DevOps 平台，集成了 Git 仓库管理、代码审查、CI/CD、项目管理等功能，支持从代码托管到自动化部署的完整开发流程。
- **主要特性**：
  - Git 仓库托管与权限管理
  - 内置 CI/CD 流水线
  - 代码审查、合并请求和问题跟踪
  - 支持 DevOps 全流程自动化
  - 丰富的插件和 API 扩展
- **适用场景**：适合企业级项目、团队协作、DevOps 流程和持续集成部署。
- [官网链接](https://about.gitlab.com/)
`},{id:204,parent_category:63,parent_category_name:"办公神器",sub_category:67,sub_category_name:"PDF工具",name:"iSlide",description:"一款基于 PowerPoint 的高效 PPT 插件，通过一系列智能工具和资源库简化 PPT 制作过程。",url:"https://www.islide.cc/",icon:"https://kjdaohang.com/media/tool_icons/iSlide.jpg",logo:"https://kjdaohang.com/media/tool_icons/iSlide.jpg",tags:"PPT 插件",order:0,is_active:!0,views:12,likes_count:0,created_at:"2025-05-22T15:12:27.790901+08:00",updated_at:"2025-05-27T10:52:48.996480+08:00",desc_md:`### iSlide

- **开发商**：iSlide 团队
- **简介**：iSlide 是一款基于 PowerPoint 的高效 PPT 插件，集成了丰富的设计资源和智能工具，极大提升 PPT 制作效率和美观度。
- **主要特性**：
  - 丰富的 PPT 模板、图标、图片库
  - 一键美化、智能排版、色彩搭配
  - 支持图表、动画、母版管理
  - 云端资源同步与团队协作
- **适用人群**：职场人士、教师、学生、演讲者
- [官网链接](https://www.islide.cc/)
`},{id:57,parent_category:44,parent_category_name:"实用小工具",sub_category:47,sub_category_name:"图片编辑",name:"AI万能图片编辑器",description:"一款结合AI技术的在线图片编辑工具，整合了多种图形设计辅助工具。",url:"https://www.logosc.cn/design/tools/",icon:"https://kjdaohang.com/media/tool_icons/AI%E6%94%B9%E5%9B%BE.png",logo:"https://kjdaohang.com/media/tool_icons/AI%E6%94%B9%E5%9B%BE.png",tags:"图片编辑",order:0,is_active:!0,views:12,likes_count:0,created_at:"2025-05-21T21:50:42.280071+08:00",updated_at:"2025-05-27T21:05:52.109323+08:00"},{id:27,parent_category:3,parent_category_name:"AI工具",sub_category:12,sub_category_name:"AI数字人",name:"有言AI",description:"一站式AI视频创作和3D数字人生成平台",url:"https://www.youyan3d.com/",icon:"https://kjdaohang.com/media/tool_icons/775025c5-a867-4c04-b0e7-e7edb6692cae.png",logo:"https://kjdaohang.com/media/tool_icons/775025c5-a867-4c04-b0e7-e7edb6692cae.png",tags:"AI数字人",order:0,is_active:!0,views:12,likes_count:0,created_at:"2025-05-21T18:55:28.143423+08:00",updated_at:"2025-05-24T13:59:21.759054+08:00",desc_md:`### 有言AI

- **开发商**：有言AI团队
- **简介**：有言AI是一站式 AI 视频创作和 3D 数字人生成平台，支持文本驱动视频生成、虚拟形象定制、3D 数字人建模等功能。
- **主要特性**：
  - 文本驱动视频与数字人生成
  - 3D 虚拟形象定制
  - 多语种配音与字幕
  - 丰富的模板与素材库
  - 一键导出与多平台适配
- **适用人群**：内容创作者、短视频运营者、企业营销团队
- [官网链接](https://www.youyan3d.com/)
`},{id:331,parent_category:44,parent_category_name:"实用小工具",sub_category:47,sub_category_name:"图片编辑",name:"iLoveIMG",description:"一款功能强大的在线图片编辑工具，你的在线图片编辑器就在这里，而且永远免费，适用于日常图片处理需求！",url:"https://www.iloveimg.com/zh-cn",icon:"https://kjdaohang.com/media/tool_icons/iloveimg.png",logo:"https://kjdaohang.com/media/tool_icons/iloveimg.png",tags:"图片编辑,图片压缩,去除背景",order:0,is_active:!0,views:11,likes_count:0,created_at:"2025-06-14T21:58:32.373739+08:00",updated_at:"2025-06-14T21:58:32.373777+08:00"},{id:312,parent_category:49,parent_category_name:"自媒体工具",sub_category:73,sub_category_name:"直播录制",name:"直播伴侣",description:"抖音官方推出的一款专为抖音主播打造的多功能直播辅助工具。",url:"https://streamingtool.douyin.com/",icon:"https://kjdaohang.com/media/tool_icons/R-C_YcnZA9Z.png",logo:"https://kjdaohang.com/media/tool_icons/R-C_YcnZA9Z.png",tags:"抖音直播,直播录制",order:0,is_active:!0,views:11,likes_count:0,created_at:"2025-06-08T11:47:09.186499+08:00",updated_at:"2025-06-08T11:47:09.186541+08:00",desc_md:`### 直播伴侣

- **开发商**：抖音官方
- **简介**：直播伴侣是抖音官方为主播量身打造的多功能直播辅助工具，支持美颜、滤镜、场景切换、弹幕互动、直播录制等功能，提升直播画质和互动体验。
- **主要特性**：
  - 高清美颜与多样滤镜
  - 场景切换与多源输入
  - 弹幕互动与粉丝管理
  - 直播录制与回放
  - 与抖音平台深度集成
- **适用人群**：抖音主播、直播运营、内容创作者
- [官网链接](https://streamingtool.douyin.com/)
`},{id:366113,parent_category:49,parent_category_name:"自媒体工具",sub_category:74,sub_category_name:"视频剪辑",name:"剪映",description:"抖音官方推出的全能视频剪辑工具，适合自媒体创作者快速制作高质量短视频。",url:"https://jianying.bytedance.com/",icon:"https://kjdaohang.com/media/tool_icons/jianying.png",logo:"https://kjdaohang.com/media/tool_icons/jianying.png",tags:"视频剪辑,短视频,抖音",order:0,is_active:!0,views:0,likes_count:0,created_at:"2025-06-08T12:00:00.000000+08:00",updated_at:"2025-06-08T12:00:00.000000+08:00",desc_md:`### 剪映

- **开发商**：抖音官方
- **简介**：剪映是一款功能强大的免费视频剪辑工具，支持多轨编辑、智能字幕、特效滤镜、音频处理等，适合自媒体短视频创作。
- **主要特性**：
  - 多轨道剪辑与画中画
  - 智能语音识别字幕
  - 丰富的转场、特效与滤镜
  - 海量音乐与音效库
  - 一键导出适配各大平台
- **适用人群**：短视频创作者、自媒体运营、内容编辑
- [官网链接](https://jianying.bytedance.com/)
`},{id:22315,parent_category:49,parent_category_name:"自媒体工具",sub_category:74,sub_category_name:"视频剪辑",name:"必剪",description:"B站官方推出的视频剪辑工具，适合UP主和自媒体人制作高质量视频内容。",url:"https://bcut.bilibili.com/",icon:"https://kjdaohang.com/media/tool_icons/bcut.png",logo:"https://kjdaohang.com/media/tool_icons/bcut.png",tags:"视频剪辑,B站,UP主",order:0,is_active:!0,views:0,likes_count:0,created_at:"2025-06-08T12:10:00.000000+08:00",updated_at:"2025-06-08T12:10:00.000000+08:00",desc_md:`### 必剪

- **开发商**：哔哩哔哩（B站）
- **简介**：必剪是B站官方推出的免费视频剪辑工具，支持多轨编辑、智能字幕、丰富特效，适合UP主和自媒体人高效创作。
- **主要特性**：
  - 多轨道剪辑与画中画
  - 智能语音识别字幕
  - 丰富的B站专属素材与特效
  - 一键投稿至B站
  - 支持高清视频导出
- **适用人群**：B站UP主、自媒体视频创作者
- [官网链接](https://bcut.bilibili.com/)
`},{id:333314,parent_category:49,parent_category_name:"自媒体工具",sub_category:74,sub_category_name:"视频剪辑",name:"快剪辑",description:"一款简单易用的视频剪辑软件，适合新手和自媒体人快速制作短视频。",url:"https://kuaijianji.com/",icon:"https://kjdaohang.com/media/tool_icons/kuaijianji.png",logo:"https://kjdaohang.com/media/tool_icons/kuaijianji.png",tags:"视频剪辑,短视频,自媒体",order:0,is_active:!0,views:0,likes_count:0,created_at:"2025-06-08T12:05:00.000000+08:00",updated_at:"2025-06-08T12:05:00.000000+08:00",desc_md:`### 快剪辑

- **开发商**：360
- **简介**：快剪辑是一款操作简单、功能实用的视频剪辑工具，支持一键剪切、字幕添加、特效滤镜、配音配乐等，适合自媒体新手快速上手。
- **主要特性**：
  - 一键剪切与拼接
  - 字幕、贴纸、特效丰富
  - 支持多平台视频导入导出
  - 智能配音与音效库
  - 云端存储与同步
- **适用人群**：自媒体新手、短视频爱好者
- [官网链接](https://kuaijianji.com/)
`},{id:247,parent_category:23,parent_category_name:"开发工具",sub_category:25,sub_category_name:"代码协作",name:"码云 Gitee",description:"由开源中国基于 GitLab 开发，是国内最大的代码托管系统。",url:"https://gitee.com/",icon:"https://kjdaohang.com/media/tool_icons/%E7%A0%81%E4%BA%91_Gitee.png",logo:"https://kjdaohang.com/media/tool_icons/%E7%A0%81%E4%BA%91_Gitee.png",tags:"开源中国",order:0,is_active:!0,views:11,likes_count:0,created_at:"2025-05-22T17:45:40.250340+08:00",updated_at:"2025-05-27T07:45:15.563927+08:00",desc_md:`### 码云 Gitee

- **简介**：码云 Gitee 是由开源中国基于 GitLab 开发的国内最大代码托管平台，支持 Git 仓库管理、代码协作和项目管理。
- **主要特性**：
  - 支持 Git 仓库托管和权限管理
  - 项目管理、代码审查和 Issue 跟踪
  - 丰富的开源项目和社区资源
  - 支持 CI/CD 流水线
  - 国内访问速度快，适合中国开发者
- **适用场景**：适合国内企业、开源项目、团队协作和个人代码管理。
- [官网链接](https://gitee.com/)
`},{id:45,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"飞书知识问答",description:"飞书官方推出的AI知识库，基于DeepSeek R1大模型构建的知识管理系统。",url:"https://ask.feishu.cn/topic",icon:"https://kjdaohang.com/media/tool_icons/default_NBq49sP.png",logo:"https://kjdaohang.com/media/tool_icons/default_NBq49sP.png",tags:"飞书,AI知识库",order:0,is_active:!0,views:11,likes_count:0,created_at:"2025-05-21T21:14:33.041803+08:00",updated_at:"2025-05-24T15:33:27.727871+08:00",desc_md:`### 飞书知识问答

- **开发商**：字节跳动（飞书）
- **简介**：飞书知识问答是基于 DeepSeek R1 大模型构建的企业级 AI 知识管理系统，支持智能问答、知识检索、文档管理等功能。
- **主要特性**：
  - 智能知识问答与检索
  - 企业文档自动归档与管理
  - 支持多格式文档解析
  - 权限管理与团队协作
  - 与飞书生态无缝集成
- **适用人群**：企业团队、知识管理者、远程办公用户
- [官网链接](https://ask.feishu.cn/topic)
`},{id:362,parent_category:40,parent_category_name:"求职面试",sub_category:41,sub_category_name:"求职求聘",name:"腾讯校招",description:"是腾讯公司官方的校园招聘平台，为应届毕业生和近两年内毕业的求职者提供全面、便捷的求职服务。",url:"https://join.qq.com/",icon:"https://kjdaohang.com/media/tool_icons/OIP-C_1.webp",logo:"https://kjdaohang.com/media/tool_icons/OIP-C_1.webp",tags:"企业官方渠道",order:0,is_active:!0,views:9,likes_count:0,created_at:"2025-06-30T09:11:21.557021+08:00",updated_at:"2025-06-30T09:32:39.968225+08:00",desc_md:`### 腾讯校招

- **开发商**：腾讯公司
- **简介**：腾讯校招是腾讯公司官方的校园招聘平台，面向应届毕业生和实习生，发布最新校招岗位、实习机会和招聘流程，支持在线投递、面试进度查询、企业文化了解等功能。
- **主要特性**：
  - 官方校招岗位发布
  - 在线简历投递与进度查询
  - 校园宣讲与招聘流程指引
  - 企业文化与员工故事
  - 多岗位多城市覆盖
- **适用人群**：应届毕业生、实习生、技术人才
- [官网链接](https://join.qq.com/)
`},{id:332,parent_category:44,parent_category_name:"实用小工具",sub_category:76,sub_category_name:"图片压缩",name:"docsmall",description:"一款功能强大的在线文件处理工具，免费，支持JPG、PNG、Webp格式图片压缩，每次可批量压缩30张图片，极致压缩，几乎不损失图片质量。",url:"https://docsmall.com/",icon:"https://kjdaohang.com/media/tool_icons/d7718-docsmall.com.png",logo:"https://kjdaohang.com/media/tool_icons/d7718-docsmall.com.png",tags:"图片压缩,格式转换",order:0,is_active:!0,views:9,likes_count:0,created_at:"2025-06-14T22:03:19.464631+08:00",updated_at:"2025-06-14T22:03:19.464673+08:00"},{id:253,parent_category:23,parent_category_name:"开发工具",sub_category:25,sub_category_name:"代码协作",name:"SVN",description:"一款集中式版本控制系统，用于管理文件和目录的变更历史，但对网络依赖较强。",url:"https://tortoisesvn.net/",icon:"https://kjdaohang.com/media/tool_icons/SVN.png",logo:"https://kjdaohang.com/media/tool_icons/SVN.png",tags:"集中式版本控制",order:0,is_active:!0,views:9,likes_count:0,created_at:"2025-05-22T17:56:19.237271+08:00",updated_at:"2025-05-27T07:38:20.792675+08:00",desc_md:`### SVN

- **简介**：SVN（Subversion）是一款集中式版本控制系统，用于管理文件和目录的变更历史，广泛应用于企业级项目和传统软件开发流程。
- **主要特性**：
  - 集中式版本管理，适合小型团队和企业
  - 支持分支、标签和权限管理
  - 变更历史追踪和回滚
  - 与多种开发工具集成
  - 对网络依赖较强，适合局域网环境
- **适用场景**：适合传统企业、文档管理和对集中式控制有需求的团队。
- [官网链接](https://tortoisesvn.net/)
`},{id:191,parent_category:3,parent_category_name:"AI工具",sub_category:12,sub_category_name:"AI数字人",name:"闪剪",description:"闪剪APP是闪剪智能旗下AIGC产品，一个基于AI技术的短视频营销创作平台，输入文案，一键生成AI数字人口播视频，覆盖各行业口播场景需求，多国籍数字人和语种配音，AI写作+智能包装，轻松实现高效创作。",url:"https://shanjian.tv/",icon:"https://kjdaohang.com/media/tool_icons/110_71b9e77bb5c59e71bcf1dea9342a3560_con.png",logo:"https://kjdaohang.com/media/tool_icons/110_71b9e77bb5c59e71bcf1dea9342a3560_con.png",tags:"AI数字人",order:0,is_active:!0,views:9,likes_count:0,created_at:"2025-05-22T14:26:30.317686+08:00",updated_at:"2025-05-24T14:08:13.255649+08:00",desc_md:`### 闪剪

- **开发商**：闪剪智能
- **简介**：闪剪是一款基于AI技术的短视频营销创作平台，支持输入文案一键生成AI数字人口播视频，覆盖多行业、多语种、多国籍数字人场景。
- **主要特性**：
  - 文案驱动数字人口播视频生成
  - 多国籍数字人形象与多语种配音
  - AI写作与智能包装
  - 丰富的行业模板与场景适配
  - 一键导出与多平台分发
- **适用人群**：短视频运营者、企业营销、内容创作者
- [官网链接](https://shanjian.tv/)
`},{id:407,parent_category:44,parent_category_name:"实用小工具",sub_category:72,sub_category_name:"在线工具",name:"favicon.io",description:"favicon.io 是一款专为项目设计的favicon 生成工具，且被描述为 “项目所需的唯一 favicon 生成工具”，核心价值在于帮助用户快速获取符合需求的 favicon。支持通过图片（PNG 转 ICO）、文本（生成 ICO 格式）、数百个 emoji三种方式快速生成 favicon。",url:"https://favicon.io/",icon:null,logo:"https://kjdaohang.com/static/images/default-logo.png",tags:"favicon生成,logo设计,ICO设计",order:0,is_active:!0,views:8,likes_count:0,created_at:"2025-09-18T15:12:13.061970+08:00",updated_at:"2025-09-18T15:12:13.062011+08:00"},{id:263,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"PlayCode",description:"支持实时协作的轻量级编辑器，内置终端和浏览器预览，适合快速验证想法。",url:"https://playcode.io/new",icon:"https://kjdaohang.com/media/tool_icons/PlayCode.jpg",logo:"https://kjdaohang.com/media/tool_icons/PlayCode.jpg",tags:"2",order:0,is_active:!0,views:8,likes_count:0,created_at:"2025-05-22T18:10:48.616748+08:00",desc_md:`### PlayCode

- **简介**：PlayCode 是一款支持实时协作的轻量级在线编辑器，内置终端和浏览器预览，适合快速验证前端想法和代码片段。
- **主要特性**：
  - 实时协作与预览
  - 内置终端
  - 丰富的代码模板
- **适用人群**：前端开发者、教学演示、代码实验
- [官网链接](https://playcode.io/new)`,updated_at:"2025-05-27T08:26:51.637282+08:00"},{id:257,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"Eclipse",description:"一款由 Eclipse 基金会开发的 开源集成开发环境（IDE），长期以来是 Java 开发者的经典选择。",url:"https://www.eclipse.org/",icon:"https://kjdaohang.com/media/tool_icons/Eclipse_61AvI0m.png",logo:"https://kjdaohang.com/media/tool_icons/Eclipse_61AvI0m.png",tags:"Java开发经典选择",order:0,is_active:!0,views:8,likes_count:0,created_at:"2025-05-22T18:00:46.880915+08:00",desc_md:`### Eclipse

- **简介**：Eclipse 是一款经典的开源集成开发环境（IDE），以 Java 开发为主，支持插件扩展，适合大型项目和企业级开发。
- **主要特性**：
  - 插件化架构
  - 多语言支持（Java、C/C++、PHP 等）
  - 集成调试与测试工具
- **适用人群**：Java 开发者、企业级项目团队
- [官网链接](https://www.eclipse.org/)`,updated_at:"2025-05-27T08:12:04.387120+08:00"},{id:357,parent_category:40,parent_category_name:"求职面试",sub_category:41,sub_category_name:"求职求聘",name:"智联招聘",description:"成立于1994年，是中国最早的一批互联网招聘平台之一，也是国内领先的人力资源服务企业，其前身是智联在线。",url:"https://www.zhaopin.com/",icon:"https://kjdaohang.com/media/tool_icons/R-C_6.png",logo:"https://kjdaohang.com/media/tool_icons/R-C_6.png",tags:"综合招聘平台",order:0,is_active:!0,views:7,likes_count:0,created_at:"2025-06-30T09:01:00.244976+08:00",updated_at:"2025-06-30T09:40:01.127444+08:00",desc_md:`### 智联招聘

- **开发商**：北京网聘咨询有限公司
- **简介**：智联招聘是中国领先的综合招聘平台，拥有庞大的职位库和企业资源，覆盖各行业、各岗位，支持职位搜索、简历投递、面试管理、职业测评等多项服务。
- **主要特性**：
  - 海量职位与企业信息
  - 智能职位推荐与简历投递
  - 面试进度管理与提醒
  - 职业测评与求职攻略
  - 移动端与PC端同步体验
- **适用人群**：求职者、企业招聘方、职场人士
- [官网链接](https://www.zhaopin.com/)
`},{id:177,parent_category:63,parent_category_name:"办公神器",sub_category:69,sub_category_name:"在线文档",name:"腾讯文档",description:"腾讯公司开发的一款在线文档工具，支持多人协作的在线文档。",url:"https://docs.qq.com/desktop",icon:"https://kjdaohang.com/media/tool_icons/%E8%85%BE%E8%AE%AF%E6%96%87%E6%A1%A3.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E8%85%BE%E8%AE%AF%E6%96%87%E6%A1%A3.jpg",tags:"腾讯,在线文档",order:0,is_active:!0,views:7,likes_count:0,created_at:"2025-05-22T13:57:17.258130+08:00",updated_at:"2025-05-27T10:20:22.096334+08:00",desc_md:`### 腾讯文档

- **开发商**：腾讯
- **简介**：腾讯文档是一款支持多人协作、云端存储和多格式导出的在线文档编辑工具，适合企业、教育和个人用户。
- **主要特性**：
  - 实时协作与评论
  - 云端自动保存与历史版本
  - 多格式导入导出
  - 丰富的模板和插件
  - 与微信、QQ等腾讯产品集成
- **适用人群**：企业团队、教师、学生、远程办公用户
- [官网链接](https://docs.qq.com/desktop)
`},{id:26,parent_category:3,parent_category_name:"AI工具",sub_category:9,sub_category_name:"AI搜索",name:"问小白",description:"小白也能用的AI搜索神器",url:"https://www.wenxiaobai.com/",icon:"https://kjdaohang.com/media/tool_icons/default_80Vsspd.png",logo:"https://kjdaohang.com/media/tool_icons/default_80Vsspd.png",tags:"AI搜索,AI智能助手",order:0,is_active:!0,views:7,likes_count:0,created_at:"2025-05-21T18:54:09.336455+08:00",updated_at:"2025-05-24T08:34:37.892364+08:00"},{id:418,parent_category:44,parent_category_name:"实用小工具",sub_category:74,sub_category_name:"Windows工具",name:"PixPin",description:"PixPin 是一款功能强大且使用简单的截图/贴图工具，它以截图和贴图为核心功能。主打高效操作和便捷的信息记录，适合办公、学习等场景。",url:"https://pan.quark.cn/s/246dd34605eb?pwd=S2S6",icon:"https://kjdaohang.com/media/tool_icons/ceb6b-pixpinapp.com.png",logo:"https://kjdaohang.com/media/tool_icons/ceb6b-pixpinapp.com.png",tags:"截图,贴图",order:0,is_active:!0,views:5,likes_count:0,created_at:"2025-10-06T12:03:14.725240+08:00",updated_at:"2025-10-06T12:03:14.725285+08:00",desc_md:`### PixPin

- **开发商**：PixPin 团队
- **简介**：PixPin 是一款集截图、贴图、标注于一体的高效工具，支持多种截图方式、贴图到桌面、图片标注和快捷操作，适合办公、学习和信息记录。
- **主要特性**：
  - 多种截图方式与快捷键支持
  - 截图贴图到桌面，便于信息对比
  - 图片标注、裁剪、马赛克等功能
  - 支持多屏与高分辨率
  - 轻量级，易于安装
- **适用人群**：办公用户、学生、内容创作者
- [官网链接](https://pan.quark.cn/s/246dd34605eb?pwd=S2S6)
`},{id:364,parent_category:40,parent_category_name:"求职面试",sub_category:41,sub_category_name:"求职求聘",name:"字节跳动校招",description:"字节跳动校招官网是求职者了解和参与字节跳动校园招聘的主要平台。",url:"https://jobs.bytedance.com/campus",icon:"https://kjdaohang.com/media/tool_icons/OIP-C.webp",logo:"https://kjdaohang.com/media/tool_icons/OIP-C.webp",tags:"企业官方渠道",order:0,is_active:!0,views:5,likes_count:0,created_at:"2025-06-30T09:16:33.313510+08:00",updated_at:"2025-06-30T09:28:15.383522+08:00",desc_md:`### 字节跳动校招

- **开发商**：字节跳动
- **简介**：字节跳动校招是字节跳动公司官方的校园招聘平台，发布最新校招岗位、实习机会和招聘流程，支持在线投递、面试进度查询、企业文化了解等功能。
- **主要特性**：
  - 官方校招岗位发布
  - 在线简历投递与进度查询
  - 校园宣讲与招聘流程指引
  - 企业文化与成长故事
  - 多岗位多城市覆盖
- **适用人群**：应届毕业生、实习生、技术人才
- [官网链接](https://jobs.bytedance.com/campus)
`},{id:363,parent_category:40,parent_category_name:"求职面试",sub_category:41,sub_category_name:"求职求聘",name:"阿里巴巴校招",description:"阿里巴巴集团官方的校园招聘平台，为应届毕业生和近两年内毕业的求职者提供全面、便捷的求职服务。",url:"https://talent.alibaba.com/",icon:"https://kjdaohang.com/media/tool_icons/R-C_4.png",logo:"https://kjdaohang.com/media/tool_icons/R-C_4.png",tags:"企业官方渠道",order:0,is_active:!0,views:5,likes_count:0,created_at:"2025-06-30T09:12:55.141606+08:00",updated_at:"2025-06-30T09:30:22.665952+08:00",desc_md:`### 阿里巴巴校招

- **开发商**：阿里巴巴集团
- **简介**：阿里巴巴校招是阿里巴巴集团官方的校园招聘平台，面向应届毕业生和实习生，发布最新校招岗位、实习机会和招聘流程，支持在线投递、面试进度查询、企业文化了解等功能。
- **主要特性**：
  - 官方校招岗位发布
  - 在线简历投递与进度查询
  - 校园宣讲与招聘流程指引
  - 企业文化与成长故事
  - 多岗位多城市覆盖
- **适用人群**：应届毕业生、实习生、技术人才
- [官网链接](https://talent.alibaba.com/)
`},{id:361,parent_category:40,parent_category_name:"求职面试",sub_category:41,sub_category_name:"求职求聘",name:"应届生求职网",description:"成立于2005年，是一个专注于服务应届毕业生的求职平台。作为国内较早成立的校园招聘网站之一，帮助应届毕业生获取校园招聘、实习兼职等机会，尤其适合希望进入知名企业的毕业生。",url:"https://www.yingjiesheng.com/",icon:"https://kjdaohang.com/media/tool_icons/imgi_4_pc-logo-da8ad04.png",logo:"https://kjdaohang.com/media/tool_icons/imgi_4_pc-logo-da8ad04.png",tags:"综合招聘平台",order:0,is_active:!0,views:5,likes_count:0,created_at:"2025-06-30T09:09:09.254900+08:00",updated_at:"2025-06-30T09:34:31.301011+08:00",desc_md:`### 应届生求职网

- **开发商**：应届生求职网团队
- **简介**：应届生求职网是国内领先的校园招聘与实习求职平台，专注于为应届毕业生提供校招、实习、兼职、内推等多元化求职信息，助力毕业生顺利就业。
- **主要特性**：
  - 校招、实习、兼职信息聚合
  - 智能职位推荐与简历投递
  - 面试进度跟踪与提醒
  - 求职攻略与经验分享
  - 支持多行业多岗位
- **适用人群**：应届毕业生、实习生、求职者
- [官网链接](https://www.yingjiesheng.com/)
`},{id:359,parent_category:40,parent_category_name:"求职面试",sub_category:41,sub_category_name:"求职求聘",name:"实习僧",description:"成立于2012年，最初以微博账号的形式出现，核心业务围绕大学生实习和校招展开。",url:"https://www.shixiseng.com/",icon:"https://kjdaohang.com/media/tool_icons/v2-95147d769a3ee9dbff121b0171e56671_xll.jpg",logo:"https://kjdaohang.com/media/tool_icons/v2-95147d769a3ee9dbff121b0171e56671_xll.jpg",tags:"综合招聘平台",order:0,is_active:!0,views:5,likes_count:0,created_at:"2025-06-30T09:04:57.149978+08:00",updated_at:"2025-06-30T09:38:32.524040+08:00",desc_md:`### 实习僧

- **开发商**：实习僧团队
- **简介**：实习僧是国内知名的大学生实习与校招平台，聚合实习、校招、兼职等职位信息，支持在线投递、面试进度跟踪、企业评价等功能，助力大学生积累实习经验。
- **主要特性**：
  - 实习、校招、兼职职位聚合
  - 智能职位推荐与简历投递
  - 面试进度跟踪与提醒
  - 企业评价与求职攻略
  - 活跃的校园社区
- **适用人群**：大学生、应届毕业生、实习生
- [官网链接](https://www.shixiseng.com/)
`},{id:252,parent_category:30,parent_category_name:"设计工具",sub_category:34,sub_category_name:"流程图设计",name:"迅捷画图",description:"一款功能强大且操作便捷的在线作图工具，适用于多种场景，可一键套用。",url:"https://www.liuchengtu.com/flowchart/",icon:"https://kjdaohang.com/media/tool_icons/%E8%BF%85%E6%8D%B7%E7%94%BB%E5%9B%BE.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E8%BF%85%E6%8D%B7%E7%94%BB%E5%9B%BE.jpg",tags:"在线作图工具",order:0,is_active:!0,views:5,likes_count:0,created_at:"2025-05-22T17:53:49.631510+08:00",updated_at:"2025-05-27T09:08:14.916923+08:00",desc_md:`### 迅捷画图

- **简介**：迅捷画图是一款国内流行的在线作图工具，支持流程图、组织结构图、思维导图等多种类型。界面简洁，操作便捷，适合快速绘制和一键套用模板。
- **主要特性**：
  - 丰富的模板和图形库
  - 支持多种导出格式（PNG、PDF、SVG等）
  - 支持团队协作和云端保存
  - 拖拽式操作，易于上手
  - 支持多平台访问
- **适用人群**：学生、教师、产品经理、企业用户
- [官网链接](https://www.liuchengtu.com/flowchart/)
`},{id:151,parent_category:63,parent_category_name:"办公神器",sub_category:66,sub_category_name:"在线翻译",name:"百度翻译",description:"百度公司推出的智能翻译工具，支持多语言、多模态翻译，覆盖学习、工作、生活等多种场景。",url:"https://fanyi.baidu.com/mtpe-individual/multimodal#/",icon:"https://kjdaohang.com/media/tool_icons/%E7%99%BE%E5%BA%A6%E7%BF%BB%E8%AF%91.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E7%99%BE%E5%BA%A6%E7%BF%BB%E8%AF%91.jpg",tags:"百度,翻译工具",order:0,is_active:!0,views:5,likes_count:0,created_at:"2025-05-22T12:02:30.351096+08:00",updated_at:"2025-05-27T11:26:15.992824+08:00",desc_md:`### 百度翻译

- **开发商**：百度
- **简介**：百度翻译是一款功能全面的在线翻译工具，支持文本、图片、文档等多种翻译方式，适合多语言交流和学习。
- **主要特性**：
  - 多语言文本、图片、文档翻译
  - 智能语音识别与翻译
  - 支持批量翻译和API接口
  - 界面简洁，操作便捷
- **适用人群**：学生、职场人士、企业用户、开发者
- [官网链接](https://fanyi.baidu.com/)
`},{id:95,parent_category:3,parent_category_name:"AI工具",sub_category:9,sub_category_name:"AI搜索",name:"纳米AI",description:"红衣大叔公司研发的 AI 搜索产品，集搜索、阅读、写作和创作为一体。",url:"https://www.n.cn/",icon:"https://kjdaohang.com/media/tool_icons/default_VjuF3RV.png",logo:"https://kjdaohang.com/media/tool_icons/default_VjuF3RV.png",tags:"奇虎360,红衣大叔",order:0,is_active:!0,views:5,likes_count:0,created_at:"2025-05-22T09:16:53.675348+08:00",updated_at:"2025-05-24T08:39:07.633972+08:00"},{id:67,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"飞书妙记",description:"由字节跳动推出的智能会议记录神器",url:"https://www.feishu.cn/product/minutes",icon:"https://kjdaohang.com/media/tool_icons/%E9%A3%9E%E4%B9%A6%E5%A6%99%E8%AE%B0.png",logo:"https://kjdaohang.com/media/tool_icons/%E9%A3%9E%E4%B9%A6%E5%A6%99%E8%AE%B0.png",tags:"字节跳动,会议神器",order:0,is_active:!0,views:5,likes_count:0,created_at:"2025-05-21T22:12:57.589976+08:00",updated_at:"2025-05-24T15:22:12.763779+08:00",desc_md:`### 飞书妙记

- **开发商**：字节跳动（飞书）
- **简介**：飞书妙记是一款智能会议记录工具，支持会议录音转文字、自动摘要、要点提取等功能，提升团队会议效率。
- **主要特性**：
  - 会议录音自动转文字
  - 智能摘要与要点提取
  - 多端同步与团队协作
  - 数据安全与隐私保护
  - 与飞书生态无缝集成
- **适用人群**：企业团队、远程办公用户、内容创作者
- [官网链接](https://www.feishu.cn/product/minutes)
`},{id:205,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"办公小浣熊",description:"办公小浣熊是商汤科技推出的A办公助手，将AI大模型能力与文档编辑、数据分析场景深度结合，为用户提供一站式创作、分析和知识管理平台，覆盖工作和学习的多个方面。",url:"https://www.xiaohuanxiong.com/",icon:"https://kjdaohang.com/media/tool_icons/office_raccoon_ip-Co1_oI0T.png",logo:"https://kjdaohang.com/media/tool_icons/office_raccoon_ip-Co1_oI0T.png",tags:"AI办公助手",order:0,is_active:!0,views:4,likes_count:0,created_at:"2025-05-22T15:15:08.670977+08:00",updated_at:"2025-05-24T14:22:55.036092+08:00",desc_md:`### 办公小浣熊

- **开发商**：商汤科技
- **简介**：办公小浣熊是一款集成 AI 大模型能力的智能办公助手，支持文档编辑、数据分析、知识管理等多种场景，助力用户高效办公与学习。
- **主要特性**：
  - 智能文档编辑与写作
  - 数据分析与可视化
  - 知识库管理与检索
  - 多端同步与团队协作
  - 持续更新与功能扩展
- **适用人群**：企业用户、学生、内容创作者、数据分析师
- [官网链接](https://www.xiaohuanxiong.com/)
`},{id:416,parent_category:44,parent_category_name:"实用小工具",sub_category:74,sub_category_name:"Windows工具",name:"截图工具-Snipaste",description:`截图也是个老生常谈的问题了。对于截图工具的选择，网友也是各显神通。而Snipaste也是一款活跃于\r
各类论坛帖子的方便工具。Snipaste是一个简单但强大的截图工具，可以将剪贴板里的文字或者颜色信息\r
转化为图片窗口，并且将它们进行缩放、旋转、翻转、设为半透明，还支持将截图贴在屏幕上，进行快\r
速图片标注和其他丰富的自定义设置。`,url:"https://zh.snipaste.com/",icon:"https://kjdaohang.com/media/tool_icons/22743ebc541623476548034acf6605bb.png",logo:"https://kjdaohang.com/media/tool_icons/22743ebc541623476548034acf6605bb.png",tags:"截图工具",order:0,is_active:!0,views:3,likes_count:0,created_at:"2025-10-06T11:46:59.897997+08:00",updated_at:"2025-10-06T11:52:02.360564+08:00",desc_md:`### Snipaste

- **开发商**：Snipaste 团队
- **简介**：Snipaste 是一款简单但强大的截图工具，支持截图、贴图、标注、颜色拾取等多种功能。可将剪贴板内容转化为图片窗口，支持缩放、旋转、半透明等操作，适合日常办公和学习。
- **主要特性**：
  - 多种截图方式与快捷键
  - 截图贴图到桌面
  - 图片标注、缩放、旋转、半透明
  - 支持颜色拾取与剪贴板操作
  - 轻量级，跨平台
- **适用人群**：办公用户、学生、内容创作者
- [官网链接](https://zh.snipaste.com/)
`},{id:406,parent_category:23,parent_category_name:"开发工具",sub_category:27,sub_category_name:"构建工具",name:"bolt.new",description:"Bolt.new 是一个由 StackBlitz 推出的基于人工智能（AI）和 WebContainers 技术的全栈在线开发平台，允许用户通过自然语言描述直接生成、运行、编辑和部署全栈 Web 应用程序。",url:"https://bolt.new/",icon:"https://kjdaohang.com/media/tool_icons/20241120123823693.jpg",logo:"https://kjdaohang.com/media/tool_icons/20241120123823693.jpg",tags:"AI,一键部署,Web应用构建",order:0,is_active:!0,views:3,likes_count:0,created_at:"2025-09-18T14:08:27.019906+08:00",updated_at:"2025-09-18T14:08:27.019946+08:00",desc_md:`### bolt.new

- **简介**：bolt.new 是 StackBlitz 推出的全栈在线开发平台，结合 AI 与 WebContainers 技术，用户可通过自然语言描述直接生成、运行、编辑和部署全栈 Web 应用。
- **主要特性**：
  - 支持自然语言生成代码和项目结构
  - 在线运行和实时预览全栈应用
  - 一键部署与分享
  - 支持多种主流前后端框架
  - 基于 WebContainers，真正的浏览器端 Node.js 环境
- **适用场景**：适合快速原型开发、教学演示、AI 辅助开发和在线协作。
- [官网链接](https://bolt.new/)
`},{id:181,parent_category:63,parent_category_name:"办公神器",sub_category:69,sub_category_name:"在线文档",name:"金山文档",description:"由珠海金山办公软件有限公司发布的一款可多人实时协作编辑的文档创作工具软件。",url:"https://account.wps.cn/",icon:"https://kjdaohang.com/media/tool_icons/%E9%87%91%E5%B1%B1%E6%96%87%E6%A1%A3.png",logo:"https://kjdaohang.com/media/tool_icons/%E9%87%91%E5%B1%B1%E6%96%87%E6%A1%A3.png",tags:"金山办公,在线文档",order:0,is_active:!0,views:3,likes_count:0,created_at:"2025-05-22T14:01:54.503590+08:00",updated_at:"2025-05-27T10:27:03.123336+08:00",desc_md:`### 金山文档

- **开发商**：珠海金山办公软件有限公司
- **简介**：金山文档是一款支持多人实时协作的在线文档创作工具，涵盖文档、表格、演示等多种类型，适合企业和个人办公。
- **主要特性**：
  - 多人实时协作编辑
  - 支持文档、表格、演示等多格式
  - 云端存储与权限管理
  - 丰富的模板与插件
  - 与WPS Office等金山产品集成
- **适用人群**：企业团队、学生、远程办公用户
- [官网链接](https://account.wps.cn/)
`},{id:355,parent_category:40,parent_category_name:"求职面试",sub_category:41,sub_category_name:"求职求聘",name:"前程无忧",description:"前程无忧（51job）成立于1998年，由甄荣辉创立，是中国最早的专业人力资源综合服务提供商之一。",url:"https://51job.com/",icon:"https://kjdaohang.com/media/tool_icons/6104.jpg",logo:"https://kjdaohang.com/media/tool_icons/6104.jpg",tags:"综合招聘平台",order:0,is_active:!0,views:2,likes_count:0,created_at:"2025-06-30T08:57:07.207051+08:00",updated_at:"2025-06-30T09:42:33.555531+08:00",desc_md:`### 前程无忧（51job）

- **开发商**：前程无忧（51job）
- **简介**：前程无忧是中国领先的综合招聘与人力资源服务平台，拥有庞大的职位库和企业资源，覆盖各行业、各岗位，支持职位搜索、简历投递、面试管理、职业测评等多项服务。
- **主要特性**：
  - 海量职位与企业信息
  - 智能职位推荐与简历投递
  - 面试进度管理与提醒
  - 职业测评与求职攻略
  - 移动端与PC端同步体验
- **适用人群**：求职者、企业招聘方、职场人士
- [官网链接](https://51job.com/)
`},{id:415,parent_category:44,parent_category_name:"实用小工具",sub_category:74,sub_category_name:"Windows工具",name:"Everything",description:`Everything是一款经典且知名的文件检索工具，广泛使用于Windows系统的机器。可以把它钉在任务\r
栏，当作电脑文件搜索引擎使用。Everything具有小而美的特点，以其轻量化、方便安装、快速启动、快\r
速搜索的特点而闻名，另外Everything也支持模糊搜索，大家如果感兴趣可以试一试。`,url:"https://www.voidtools.com/zh-cn/",icon:"https://kjdaohang.com/media/tool_icons/OIP-C_3_BnJJ3p6.webp",logo:"https://kjdaohang.com/media/tool_icons/OIP-C_3_BnJJ3p6.webp",tags:"搜索工具",order:0,is_active:!0,views:1,likes_count:0,created_at:"2025-10-06T11:45:50.005592+08:00",updated_at:"2025-10-06T11:51:16.168868+08:00",desc_md:`### Everything

- **开发商**：voidtools
- **简介**：Everything 是一款极其高效的 Windows 文件搜索工具，支持实时索引和模糊搜索，几乎瞬间定位本地文件，体积小巧，资源占用极低。
- **主要特性**：
  - 实时文件索引与极速搜索
  - 支持模糊搜索与正则表达式
  - 体积小巧，资源占用低
  - 支持多种排序与筛选
  - 可集成到任务栏和右键菜单
- **适用人群**：Windows 用户、文件管理需求者
- [官网链接](https://www.voidtools.com/zh-cn/)
`},{id:409,parent_category:3,parent_category_name:"AI工具",sub_category:10,sub_category_name:"AI设计",name:"Lovart",description:"中文界面友好，每日自动重置200免费积分，可直接选择Nano Banana进行设计创作，基础功能完全免费",url:"https://www.lovart.ai/zh",icon:"https://kjdaohang.com/media/tool_icons/imageye___-_imgi_90_default.png",logo:"https://kjdaohang.com/media/tool_icons/imageye___-_imgi_90_default.png",tags:"AI设计,AI智能体,Nano Banana",order:0,is_active:!0,views:1,likes_count:0,created_at:"2025-09-22T19:31:33.978943+08:00",updated_at:"2025-09-22T19:31:33.978994+08:00"},{id:153,parent_category:63,parent_category_name:"办公神器",sub_category:66,sub_category_name:"在线翻译",name:"搜狗翻译",description:"搜狗公司开发的智能翻译工具，支持多语言、多场景的实时翻译。",url:"https://fanyi.sogou.com/text",icon:"https://kjdaohang.com/media/tool_icons/R-C.png",logo:"https://kjdaohang.com/media/tool_icons/R-C.png",tags:"搜狗,翻译工具",order:0,is_active:!0,views:1,likes_count:0,created_at:"2025-05-22T12:03:40.357066+08:00",updated_at:"2025-05-27T11:22:43.058305+08:00",desc_md:`### 搜狗翻译

- **开发商**：搜狗公司
- **简介**：搜狗翻译是搜狗推出的多功能在线翻译平台，支持文本、图片、文档等多种翻译方式，适合多语言交流和学习。
- **主要特性**：
  - 多语言文本、图片、文档翻译
  - 智能语音识别与翻译
  - 支持批量翻译和API接口
  - 界面简洁，操作便捷
- **适用人群**：学生、职场人士、企业用户、开发者
- [官网链接](https://fanyi.sogou.com/)
`},{id:417,parent_category:44,parent_category_name:"实用小工具",sub_category:74,sub_category_name:"Windows工具",name:"磁盘工具-SpaceSniffer",description:`SpaceSniffer可以帮助我们轻松查找和管理硬盘上占用大量空间的文件和文件夹，使用树形图（Treema\r
p）技术，将电脑磁盘空间使用情况转化为直观的视觉区块，并且通过直观的块状图界面快速识别存储问\r
题。SpaceSniffer以其直观、实时、轻量和卓越的可视化窗口闻名，广受用户欢迎和喜爱。`,url:"https://www.spacesniffer.com.cn/",icon:"https://kjdaohang.com/media/tool_icons/R-C_4_m4rGVYR.png",logo:"https://kjdaohang.com/media/tool_icons/R-C_4_m4rGVYR.png",tags:"磁盘工具,磁盘分析",order:0,is_active:!0,views:0,likes_count:0,created_at:"2025-10-06T11:48:21.987718+08:00",updated_at:"2025-10-06T11:53:37.394355+08:00",desc_md:`### SpaceSniffer

- **开发商**：Uderzo Software
- **简介**：SpaceSniffer 是一款基于 Treemap 技术的磁盘空间可视化分析工具，通过直观的块状图展示硬盘空间占用情况，帮助用户快速识别和管理大文件。
- **主要特性**：
  - Treemap 可视化磁盘空间
  - 实时扫描与动态刷新
  - 支持多种筛选与排序
  - 轻量级，绿色免安装
  - 操作简单，界面直观
- **适用人群**：Windows 用户、磁盘管理需求者
- [官网链接](https://www.spacesniffer.com.cn/)
`},{id:384,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"Magentic-UI",description:"Magentic-UI 是一个以人为本的界面的研究原型 ，由多个AI代理系统提供支持，可以在 Web 上浏览和执行作，生成和执行代码，以及生成和分析文件。",url:"https://github.com/microsoft/magentic-ui",icon:"https://kjdaohang.com/media/tool_icons/imgi_2_6154722.png",logo:"https://kjdaohang.com/media/tool_icons/imgi_2_6154722.png",tags:"Web自动化测试,AI自动化工具",order:1,is_active:!0,views:1176,likes_count:0,created_at:"2025-07-12T17:26:05.350801+08:00",updated_at:"2025-07-12T17:26:05.350865+08:00",desc_md:`### Magentic-UI

- **开发商**：Microsoft
- **简介**：Magentic-UI 是微软开源的 AI 驱动 Web 自动化测试与交互平台，集成多种 AI 代理，支持 Web 浏览、自动化操作、代码生成与执行、文件分析等。
- **主要特性**：
  - 多 AI 代理协作，支持复杂自动化场景
  - Web 页面浏览与自动化操作
  - 支持代码生成、执行与分析
  - 可扩展的插件与脚本系统
- **适用人群**：自动化测试工程师、AI 研究者、开发者
- [项目主页](https://github.com/microsoft/magentic-ui)
`},{id:350,parent_category:58,parent_category_name:"资源网站",sub_category:61,sub_category_name:"副业项目",name:"Upwork",description:"全球最大、最受欢迎的在线自由职业者平台之一,，涵盖编程、设计、写作、翻译、市场营销等多个领域。",url:"https://www.upwork.com/",icon:"https://kjdaohang.com/media/tool_icons/upwork.png",logo:"https://kjdaohang.com/media/tool_icons/upwork.png",tags:"自由职业平台",order:1,is_active:!0,views:511,likes_count:0,created_at:"2025-06-21T17:29:37.375167+08:00",updated_at:"2025-06-21T17:29:37.375210+08:00",desc_md:`### Upwork

- **简介**：Upwork 是全球领先的自由职业者平台，连接雇主与全球各类专业人才，涵盖编程、设计、写作、翻译、市场营销等众多领域。平台支持远程项目、短期任务和长期合作，适合企业和个人灵活用工。
- **主要特性**：
  - 海量自由职业者与项目资源
  - 支持多种技能与行业类别
  - 安全的支付与合同保障
  - 实时沟通与协作工具
  - 项目管理与进度跟踪
- **适用人群**：自由职业者、企业主、创业者、远程工作者
- [访问 Upwork](https://www.upwork.com/)
`},{id:398,parent_category:44,parent_category_name:"实用小工具",sub_category:72,sub_category_name:"在线工具",name:"随机Invoice生成器",description:"支持生成 Windsurf 和 Cursor Invoice模板的随机Invoice数据，简单来说就是生成Cursor付费帐单凭证。",url:"https://wipdf.vercel.app/",icon:"https://kjdaohang.com/media/tool_icons/imgi_1_cursor-logo.png",logo:"https://kjdaohang.com/media/tool_icons/imgi_1_cursor-logo.png",tags:"Cursor付费帐单,帐单生成",order:1,is_active:!0,views:211,likes_count:0,created_at:"2025-07-30T09:47:44.440388+08:00",updated_at:"2025-07-30T09:48:55.437406+08:00",desc_md:`### 随机Invoice生成器

- **开发商**：随机Invoice生成器团队
- **简介**：随机Invoice生成器是一款专为生成Windsurf和Cursor Invoice模板的随机账单数据而设计的在线工具，适合开发者、测试人员和需要生成虚拟账单凭证的用户。
- **主要特性**：
  - 多种Invoice模板（Windsurf、Cursor等）
  - 一键生成随机账单数据
  - 支持PDF等格式导出
  - 操作简单，适合测试与演示
  - 免费使用
- **适用人群**：开发者、测试人员、财务演示用户
- [官网链接](https://wipdf.vercel.app/)
`},{id:73,parent_category:3,parent_category_name:"AI工具",sub_category:6,sub_category_name:"AI编程",name:"GitHub Copilot",description:"一款由 GitHub 开发的AI人工智能编程助手",url:"https://github.com/features/copilot",icon:"https://kjdaohang.com/media/tool_icons/default_fhfXjCX.png",logo:"https://kjdaohang.com/media/tool_icons/default_fhfXjCX.png",tags:"GitHub,AI编程",order:1,is_active:!0,views:205,likes_count:0,created_at:"2025-05-21T22:44:49.801943+08:00",updated_at:"2025-05-23T18:09:30.464391+08:00"},{id:40,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"通义千问",description:"由阿里巴巴达摩院开发的大型语言模型(LLM)，一款专门响应人类指令的AI助手。",url:"https://www.tongyi.com/qianwen/",icon:"https://kjdaohang.com/media/tool_icons/cropped-1740638844624.png",logo:"https://kjdaohang.com/media/tool_icons/cropped-1740638844624.png",tags:"阿里巴巴,开源, Qwen",order:1,is_active:!0,views:184,likes_count:0,created_at:"2025-05-21T21:03:11.308789+08:00",updated_at:"2025-06-02T10:07:08.621073+08:00",desc_md:`### 通义千问

- **开发商**：阿里云
- **简介**：通义千问是阿里云推出的大模型AI助手，支持多轮对话、写作、代码生成等多场景应用。
- **主要特性**：
  - 多轮对话与知识问答
  - 智能写作与代码生成
  - 多端支持
  - 持续更新
  - 企业级API
- **适用人群**：开发者、内容创作者、企业用户
- [官网链接](https://tongyi.aliyun.com/qianwen)
`},{id:395,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"PrompterHub",description:"一个面向中文用户的「完美提示词」社区与工具平台，核心定位是“让 AI 听懂人话”，PrompterHub 提供多种类型的提示词创作支持，包括文字、图片和代码提示词。",url:"https://www.prompterhub.cn/home",icon:"https://kjdaohang.com/media/tool_icons/imgi_1_PrompterHublogo.png",logo:"https://kjdaohang.com/media/tool_icons/imgi_1_PrompterHublogo.png",tags:"AI提示词,完美提示词",order:1,is_active:!0,views:162,likes_count:0,created_at:"2025-07-21T09:24:11.431160+08:00",updated_at:"2025-07-21T09:24:11.431197+08:00",desc_md:`### PrompterHub

- **开发商**：PrompterHub 团队
- **简介**：PrompterHub 是专为中文用户打造的 AI 提示词社区与工具平台，致力于帮助用户高效创作和分享高质量的 AI 提示词（Prompt），覆盖文字、图片、代码等多种类型。
- **主要特性**：
  - 丰富的提示词模板和案例
  - 支持多种 AI 模型和场景
  - 社区交流与经验分享
  - 提示词优化与自动生成工具
  - 支持收藏、点赞、评论等互动
- **适用人群**：AI 爱好者、内容创作者、开发者、产品经理
- [官网链接](https://www.prompterhub.cn/home)
`},{id:316,parent_category:58,parent_category_name:"资源网站",sub_category:60,sub_category_name:"网盘资源",name:"学霸盘",description:"一个资源聚合与分享平台，主要提供各类学习资料、课程、软件及娱乐内容的下载链接或资源整合服务。",url:"https://www.xuebapan.com/",icon:"https://kjdaohang.com/media/tool_icons/OIP-C_1.jpg",logo:"https://kjdaohang.com/media/tool_icons/OIP-C_1.jpg",tags:"学习资料,学习课件,资源聚合",order:1,is_active:!0,views:153,likes_count:0,created_at:"2025-06-08T17:54:41.538544+08:00",updated_at:"2025-06-08T17:54:41.538604+08:00",desc_md:`### 学霸盘

- **简介**：学霸盘是一个聚合各类学习资料、课程、软件和娱乐资源的分享平台，致力于为用户提供一站式资源获取服务。
- **主要特性**：
  - 覆盖考研、考证、IT、外语等多领域学习资料
  - 提供软件下载、课程视频、电子书等资源
  - 支持资源分类检索与标签筛选
  - 用户社区活跃，资源更新快
  - 适合学生、教师、职场人士
- **适用人群**：学习者、教师、资源收集者
- [访问学霸盘](https://www.xuebapan.com/)
`},{id:84,parent_category:15,parent_category_name:"测试工具",sub_category:22,sub_category_name:"抓包工具",name:"AnyProxy",description:"阿里开源的抓包工具，基于Node.js可进行二次开发，适合App爬虫、接口数据分析等。",url:"https://github.com/alibaba/anyproxy",icon:"https://kjdaohang.com/media/tool_icons/anyproxy_L2ceu2P.png",logo:"https://kjdaohang.com/media/tool_icons/anyproxy_L2ceu2P.png",tags:"阿里巴巴,开源,抓包",order:1,is_active:!0,views:152,likes_count:0,created_at:"2025-05-22T09:00:34.544106+08:00",updated_at:"2025-05-29T19:02:56.706184+08:00",desc_md:`### AnyProxy

- **开发商**：阿里巴巴开源
- **简介**：AnyProxy 是阿里巴巴开源的基于 Node.js 的抓包工具，支持 HTTP/HTTPS 流量的捕获、分析和二次开发。适合 App 爬虫、接口数据分析和自动化测试。
- **主要特性**：
  - 支持 HTTP/HTTPS 抓包与解密
  - 丰富的 Web 可视化界面
  - 支持自定义插件和二次开发
  - 实时流量监控与日志分析
  - 跨平台支持，易于部署
- **适用人群**：开发者、测试工程师、数据分析师
- [项目主页](https://github.com/alibaba/anyproxy)
`},{id:311,parent_category:40,parent_category_name:"求职面试",sub_category:43,sub_category_name:"面试刷题",name:"牛客网",description:"一个专业的IT笔试面试备考平台，提供在线笔试、在线面试、题库练习、社区交流等功能。",url:"https://www.nowcoder.com/",icon:"https://kjdaohang.com/media/tool_icons/35389dce370b8ef508d416d3cdd31691.jpg",logo:"https://kjdaohang.com/media/tool_icons/35389dce370b8ef508d416d3cdd31691.jpg",tags:"编程题库,面试题库",order:1,is_active:!0,views:142,likes_count:0,created_at:"2025-06-07T11:32:51.009984+08:00",updated_at:"2025-06-07T11:32:51.010021+08:00",desc_md:`### 牛客网

- **开发商**：牛客科技
- **简介**：牛客网是国内领先的IT求职与编程学习平台，专注于为IT求职者、大学生和程序员提供笔试、面试、刷题、实习、校招等一站式服务。平台拥有丰富的题库资源、真实面经、模拟面试、在线竞赛和活跃的技术社区，帮助用户系统提升算法能力和面试技巧。
- **主要特性**：
  - 海量编程题库与面试真题
  - 在线笔试与模拟面试系统
  - 社区交流与经验分享
  - 校招、实习、内推信息聚合
  - 竞赛活动与学习小组
- **适用人群**：IT求职者、大学生、程序员、算法爱好者
- [官网链接](https://www.nowcoder.com/)
`},{id:372,parent_category:58,parent_category_name:"资源网站",sub_category:79,sub_category_name:"休闲娱乐",name:"在线版 CS 1.6",description:"在线版 CS 1.6 游戏，不用注册登录，也不用下载客户端，打开网页，找一个有空位的房间“连”就可以开始联机对战了。",url:"https://play-cs.com/zh/servers",icon:"https://kjdaohang.com/media/tool_icons/R-C_h9w1wm0.jpg",logo:"https://kjdaohang.com/media/tool_icons/R-C_h9w1wm0.jpg",tags:"在线小游戏,免费,枪战类",order:1,is_active:!0,views:136,likes_count:0,created_at:"2025-07-05T11:12:10.077317+08:00",updated_at:"2025-07-05T11:12:10.077352+08:00",desc_md:`### 在线版 CS 1.6

- **简介**：经典射击游戏《反恐精英（CS 1.6）》的网页版，无需下载客户端和注册账号，直接在浏览器中体验原汁原味的CS对战。
- **主要特性**：
  - 免安装、免注册，打开即玩
  - 支持全球玩家实时联机对战
  - 多种地图和模式选择
  - 兼容多平台（PC、Mac、Linux）
  - 低延迟服务器，流畅体验
- **适用人群**：FPS爱好者、怀旧玩家、喜欢团队竞技的用户
- [立即体验](https://play-cs.com/zh/servers)
`},{id:234,parent_category:23,parent_category_name:"开发工具",sub_category:29,sub_category_name:"低代码/无代码",name:"NocoBase",description:"基于Vue.js的开源低代码平台，支持拖拽式开发、代码生成、在线表单、报表等功能，适合中小型企业",url:"https://github.com/NocoBase/NocoBase",icon:"https://kjdaohang.com/media/tool_icons/NocoBase.png",logo:"https://kjdaohang.com/media/tool_icons/NocoBase.png",tags:"开源,低代码平台",order:1,is_active:!0,views:126,likes_count:0,created_at:"2025-05-22T17:17:19.540507+08:00",updated_at:"2025-05-26T22:21:39.335199+08:00",desc_md:`### NocoBase

- **简介**：NocoBase 是一款基于 Vue.js 的开源低代码平台，支持拖拽式开发、代码生成、在线表单、报表等功能。适合中小型企业快速搭建业务系统。
- **主要特性**：
  - 拖拽式页面和表单设计
  - 支持数据建模、权限管理和流程配置
  - 丰富的插件和扩展能力
  - 支持自定义代码扩展和 API 集成
  - 开源免费，社区活跃
- **适用场景**：适合中小企业、创业团队、内部工具开发。
- [官网链接](https://github.com/NocoBase/NocoBase)
`},{id:76,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"Windsurf",description:"一款由Codeium开发的AI驱动的现代化集成开发环境",url:"https://windsurf.com/",icon:"https://kjdaohang.com/media/tool_icons/default_6g2SUuH.png",logo:"https://kjdaohang.com/media/tool_icons/default_6g2SUuH.png",tags:"Codeium,AI编程",order:1,is_active:!0,views:126,likes_count:0,created_at:"2025-05-21T22:50:10.882799+08:00",updated_at:"2025-05-23T18:16:49.965067+08:00",desc_md:`### Windsurf

- **开发商**：Codeium
- **简介**：Windsurf 是由 Codeium 推出的首款 "Agentic IDE"（代理式集成开发环境）。它引入了创新的 "Flows" 概念，使 AI 能够像人类开发者一样理解整个代码库的上下文，并在多个文件之间进行复杂的代码修改和重构。
- **主要特性**：
  - **Flows**：深度感知上下文的连续工作流，保持专注。
  - **Cascade**：强大的 AI 助手，能够理解意图并执行复杂任务。
  - **超快响应**：基于 Codeium 的底层技术，提供极低延迟的代码补全。
  - **深度上下文**：能够索引和理解整个项目结构。
- **适用人群**：专业开发者、大型项目维护者
- [官网链接](https://windsurf.codeium.com/)
`},{id:221,parent_category:15,parent_category_name:"测试工具",sub_category:21,sub_category_name:"API测试",name:"Bruno",description:"一款开源的 API 客户端，旨在替代市场上现有的工具，如 Postman 和 Insomnia",url:"https://github.com/usebruno/bruno",icon:"https://kjdaohang.com/media/tool_icons/Bruno.png",logo:"https://kjdaohang.com/media/tool_icons/Bruno.png",tags:"API 客户端,开源",order:1,is_active:!0,views:120,likes_count:0,created_at:"2025-05-22T16:34:26.405227+08:00",updated_at:"2025-05-26T18:02:33.072381+08:00",desc_md:`### Bruno

- **开发商**：开源社区
- **简介**：Bruno 是一款开源的 API 客户端工具，主打本地优先和隐私保护，支持 REST、GraphQL、WebSocket 等协议。界面简洁，适合开发者替代 Postman、Insomnia 等主流工具。
- **主要特性**：
  - 支持多种 API 协议（REST、GraphQL、WebSocket）
  - 本地存储，数据隐私安全
  - 支持环境变量和请求链路
  - 可导入 Postman、Insomnia 数据
  - 跨平台支持
- **适用人群**：开发者、测试工程师、API 管理团队
- [项目主页](https://github.com/usebruno/bruno)
`},{id:188,parent_category:23,parent_category_name:"开发工具",sub_category:29,sub_category_name:"低代码/无代码",name:"n8n",description:"一款功能强大的开源工作流自动化工具，拥有400多个集成和900多个可以立即使用的模版",url:"https://n8n.io/",icon:"https://kjdaohang.com/media/tool_icons/default_SrNfhuX.png",logo:"https://kjdaohang.com/media/tool_icons/default_SrNfhuX.png",tags:"工作流,自动化",order:1,is_active:!0,views:117,likes_count:0,created_at:"2025-05-22T14:21:10.614272+08:00",updated_at:"2025-05-26T22:15:49.131585+08:00",desc_md:`### n8n

- **简介**：n8n 是一款功能强大的开源工作流自动化工具，支持 400 多个第三方服务集成和 900 多个可用模板。通过可视化拖拽方式，帮助用户轻松实现数据同步、自动化任务和业务流程编排。
- **主要特性**：
  - 可视化工作流设计器，零代码上手
  - 支持丰富的第三方服务和 API 集成
  - 可自定义节点和脚本扩展
  - 支持定时、触发、条件分支等复杂逻辑
  - 开源部署，支持本地和云端运行
- **适用场景**：适合自动化办公、数据同步、业务流程自动化等。
- [官网链接](https://n8n.io/)
`},{id:92,parent_category:15,parent_category_name:"测试工具",sub_category:19,sub_category_name:"构造数据",name:"Mockaroo",description:"一款功能强大的在线测试数据生成工具，广泛应用于开发和测试环境中。",url:"https://www.mockaroo.com/",icon:"https://kjdaohang.com/media/tool_icons/Mockaroo.jpg",logo:"https://kjdaohang.com/media/tool_icons/Mockaroo.jpg",tags:"在线服务,生成模拟数据",order:1,is_active:!0,views:110,likes_count:0,created_at:"2025-05-22T09:11:52.253671+08:00",updated_at:"2025-05-26T20:07:57.503053+08:00",desc_md:`### Mockaroo

- **开发商**：Mockaroo Inc.
- **简介**：Mockaroo 是一款功能强大的在线测试数据生成工具，支持多种数据类型和格式，适合开发、测试和数据模拟场景。
- **主要特性**：
  - 支持自定义字段和数据类型
  - 可导出为 CSV、JSON、SQL 等多种格式
  - 支持批量生成和 API 调用
  - 丰富的数据模板和示例
  - 界面友好，操作简单
- **适用人群**：开发者、测试工程师、数据分析师
- [官网链接](https://www.mockaroo.com/)
`},{id:231,parent_category:15,parent_category_name:"测试工具",sub_category:17,sub_category_name:"性能测试",name:"WebPageTest",description:"一款强大的开源在线工具，用于测试和分析Web网页的性能。",url:"https://www.webpagetest.org/",icon:"https://kjdaohang.com/media/tool_icons/WebPageTest.jpg",logo:"https://kjdaohang.com/media/tool_icons/WebPageTest.jpg",tags:"Web性能测试",order:1,is_active:!0,views:94,likes_count:0,created_at:"2025-05-22T17:01:36.324238+08:00",updated_at:"2025-05-26T20:29:51.024300+08:00",desc_md:`### WebPageTest

- **开发商**：Catchpoint Systems
- **简介**：WebPageTest 是一款开源的网页性能测试与分析工具，支持全球多节点测试，详细分析页面加载速度、资源分布和性能瓶颈。
- **主要特性**：
  - 全球多节点、多浏览器测试
  - 详细的性能指标与瀑布图分析
  - 支持脚本化测试和自动化集成
  - 提供优化建议和历史对比
- **适用人群**：前端开发者、性能测试工程师、网站运维
- [官网链接](https://www.webpagetest.org/)
`},{id:389,parent_category:58,parent_category_name:"资源网站",sub_category:59,sub_category_name:"学习资源",name:"Qwerty Learner",description:"程序员必备，打造英语输入与单词记忆的神器，结合了单词记忆和键盘输入练习，帮助用户在提升英语水平的同时，加强键盘输入的肌肉记忆。旨在为程序员、学生以及需要频繁使用键盘的工作者提供一个高效的学习工具。",url:"https://qwerty.liumingye.cn/gallery",icon:"https://kjdaohang.com/media/tool_icons/8c626-qwerty.kaiyi.cool.png",logo:"https://kjdaohang.com/media/tool_icons/8c626-qwerty.kaiyi.cool.png",tags:"单词记忆,日语学习,计算机英语",order:1,is_active:!0,views:91,likes_count:0,created_at:"2025-07-17T11:37:47.790999+08:00",updated_at:"2025-07-17T11:39:20.257788+08:00",desc_md:`### Qwerty Learner

- **简介**：Qwerty Learner 是一款结合单词记忆与键盘输入练习的高效学习工具，专为程序员、学生和需要提升英语输入能力的用户设计。
- **主要特性**：
  - 英语单词记忆与键盘输入同步训练
  - 支持多种词库（计算机英语、日语等）
  - 统计学习进度与输入速度
  - 简洁界面，专注学习体验
  - 支持自定义词库和练习模式
- **适用人群**：程序员、学生、英语学习者、打字爱好者
- [访问 Qwerty Learner](https://qwerty.liumingye.cn/gallery)
`},{id:232,parent_category:23,parent_category_name:"开发工具",sub_category:29,sub_category_name:"低代码/无代码",name:"腾讯云微搭",description:"一款高性能的低代码开发平台，用户可通过拖拽式开发，可视化配置构建 PC Web、H5 和小程序应用。",url:"https://cloud.tencent.com/product/weda",icon:"https://kjdaohang.com/media/tool_icons/%E8%85%BE%E8%AE%AF%E4%BA%91%E5%BE%AE%E6%90%AD.png",logo:"https://kjdaohang.com/media/tool_icons/%E8%85%BE%E8%AE%AF%E4%BA%91%E5%BE%AE%E6%90%AD.png",tags:"腾讯,低代码平台",order:1,is_active:!0,views:86,likes_count:0,created_at:"2025-05-22T17:03:57.342715+08:00",updated_at:"2025-05-26T22:19:34.034681+08:00",desc_md:`### 腾讯云微搭

- **简介**：腾讯云微搭是一款高性能的低代码开发平台，支持通过拖拽式开发和可视化配置，快速构建 PC Web、H5 和小程序等多端应用。
- **主要特性**：
  - 拖拽式页面搭建，所见即所得
  - 支持多端应用（Web、H5、小程序）一体化开发
  - 丰富的组件库和模板市场
  - 支持数据建模、流程编排和权限管理
  - 与腾讯云生态深度集成
- **适用场景**：适合企业级应用开发、内部管理系统、快速原型搭建。
- [官网链接](https://cloud.tencent.com/product/weda)
`},{id:83,parent_category:15,parent_category_name:"测试工具",sub_category:17,sub_category_name:"性能测试",name:"GT",description:"腾讯开源的APP的随身调试平台，可对APP进行快速的性能测试，如CPU、内存、流量、电量、帧率/流畅度等。",url:"https://github.com/Tencent/GT",icon:"https://kjdaohang.com/media/tool_icons/GT_wfDHIRK.jpg",logo:"https://kjdaohang.com/media/tool_icons/GT_wfDHIRK.jpg",tags:"腾讯,开源,App性能测试",order:1,is_active:!0,views:85,likes_count:0,created_at:"2025-05-22T08:59:45.288647+08:00",updated_at:"2025-05-29T18:12:02.116739+08:00",desc_md:`### GT

- **开发商**：腾讯
- **简介**：GT（Game Test）是腾讯开源的 APP 性能调试平台，支持对 Android 应用的 CPU、内存、流量、电量、帧率等多维度性能测试和实时监控。
- **主要特性**：
  - 实时性能数据采集与展示
  - 支持多种性能指标（CPU、内存、流量、电量、帧率等）
  - 可视化界面与数据导出
  - 支持脚本自动化与插件扩展
- **适用人群**：移动开发者、测试工程师、性能优化团队
- [项目主页](https://github.com/Tencent/GT)
`},{id:376,parent_category:40,parent_category_name:"求职面试",sub_category:42,sub_category_name:"简历制作",name:"简历下载",description:"一个非常不错的简历模板下载网站，免登录一键下载，专业简历模板，Word 格式也方便我们自由编辑修改。",url:"https://jianlixiazai.cn/",icon:"https://kjdaohang.com/media/tool_icons/%E7%AE%80%E5%8E%86%E4%B8%8B%E8%BD%BD.ico",logo:"https://kjdaohang.com/media/tool_icons/%E7%AE%80%E5%8E%86%E4%B8%8B%E8%BD%BD.ico",tags:"简历模板,简历攻略",order:1,is_active:!0,views:84,likes_count:0,created_at:"2025-07-05T11:30:58.732860+08:00",updated_at:"2025-07-05T11:30:58.733020+08:00",desc_md:`### 简历下载

- **开发商**：简历下载团队
- **简介**：简历下载是一个专注于简历模板分享与下载的平台，提供海量专业简历模板，涵盖各行业、岗位和风格，支持Word格式一键下载，方便用户自由编辑和个性化定制。
- **主要特性**：
  - 海量简历模板免费下载
  - 支持Word格式，易于编辑
  - 按行业、岗位、风格分类筛选
  - 无需注册，极速下载
  - 持续更新模板库
- **适用人群**：求职者、学生、职场人士
- [官网链接](https://jianlixiazai.cn/)
`},{id:228,parent_category:15,parent_category_name:"测试工具",sub_category:19,sub_category_name:"构造数据",name:"Generatedata",description:"一款开源的在线测试数据生成器，支持30多种数据类型。",url:"https://generatedata.com/",icon:"https://kjdaohang.com/media/tool_icons/Generatedata.png",logo:"https://kjdaohang.com/media/tool_icons/Generatedata.png",tags:"在线服务,生成模拟数据",order:1,is_active:!0,views:81,likes_count:0,created_at:"2025-05-22T16:48:01.007564+08:00",updated_at:"2025-05-26T20:10:36.758689+08:00",desc_md:`### Generatedata

- **开发商**：Generatedata 团队
- **简介**：Generatedata 是一款开源的在线测试数据生成器，支持 30 多种数据类型，适合开发、测试和数据模拟。
- **主要特性**：
  - 支持多种数据类型和格式
  - 可自定义字段和数据模板
  - 支持批量生成和导出
  - 开源免费，支持本地部署
- **适用人群**：开发者、测试工程师、数据分析师
- [官网链接](https://generatedata.com/)
`},{id:260,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"Notepad++",description:"一款免费、开源、轻量级代码编辑器，适合初学者和简单代码编辑，支持 Windows 系统。",url:"https://notepad-plus-plus.org/",icon:"https://kjdaohang.com/media/tool_icons/Notepad.jpg",logo:"https://kjdaohang.com/media/tool_icons/Notepad.jpg",tags:"处理文本常用工具",order:1,is_active:!0,views:77,likes_count:0,created_at:"2025-05-22T18:05:51.130657+08:00",updated_at:"2025-05-27T08:19:09.925946+08:00",desc_md:`### Notepad++

- **简介**：Notepad++ 是一款免费、开源、轻量级的代码编辑器，支持多种编程语言和语法高亮。适合日常文本处理、脚本编写和简单代码编辑，体积小巧，启动迅速。
- **主要特性**：
  - 多标签页编辑
  - 语法高亮与折叠
  - 支持插件扩展
  - 正则查找与替换
- **适用人群**：初学者、脚本开发者、日常文本处理
- [官网链接](https://notepad-plus-plus.org/)`},{id:400,parent_category:40,parent_category_name:"求职面试",sub_category:42,sub_category_name:"简历制作",name:"OfferStar AI",description:"AI 时代面试笔试助手，本工具无视 切屏检测、共享屏幕 🌟 隐蔽性非常高！面试笔试都可用！秒杀一切八股文、测评题、算法题！但工具虽好，还是需要多多练习，根据自身情况灵活使用，才能在面试中如虎添翼！",url:"https://www.offerstar.cn/login?ic=Qbh_lt",icon:"https://kjdaohang.com/media/tool_icons/logo.webp",logo:"https://kjdaohang.com/media/tool_icons/logo.webp",tags:"面试笔试,在线面试,AI面试",order:1,is_active:!0,views:76,likes_count:0,created_at:"2025-08-04T08:50:30.719772+08:00",updated_at:"2025-08-04T08:52:15.532716+08:00",desc_md:`### OfferStar AI

- **开发商**：OfferStar 团队
- **简介**：OfferStar AI 是一款专为面试和笔试场景设计的AI助手，支持实时答题、八股文速查、算法题解答等，具备极高隐蔽性，适合远程面试和在线笔试辅助。
- **主要特性**：
  - 实时答题与八股文速查
  - 支持算法题、测评题、面试题
  - 无视切屏检测与共享屏幕
  - AI智能解析与答案推荐
  - 支持多种考试场景
- **适用人群**：IT求职者、面试笔试考生、程序员
- [官网链接](https://www.offerstar.cn/login?ic=Qbh_lt)
`},{id:144,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"Dify",description:"一款开源的大语言模型（LLM）应用开发平台。",url:"https://dify.ai/zh",icon:"https://kjdaohang.com/media/tool_icons/dify.png",logo:"https://kjdaohang.com/media/tool_icons/dify.png",tags:"AI智能体",order:1,is_active:!0,views:75,likes_count:0,created_at:"2025-05-22T11:50:29.516037+08:00",updated_at:"2025-05-29T18:52:43.967950+08:00",desc_md:`### Dify

- **开发商**：Dify 团队
- **简介**：Dify 是一款开源的大语言模型（LLM）应用开发平台，支持多模型接入、智能体开发、数据管理和可视化工作流。
- **主要特性**：
  - 支持多种主流大模型
  - 智能体应用开发与部署
  - 可视化工作流与数据管理
  - 开源免费，社区活跃
  - API集成与扩展能力强
- **适用人群**：开发者、AI创业团队、企业用户
- [官网链接](https://dify.ai/zh)
`},{id:344,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"Allure",description:"一款灵活、轻量级的开源测试报告框架，主要用于生成直观、交互式的测试报告。支持多种编程语言和测试框架，如 Python 的 pytest、Java 的 JUnit 和 TestNG等。",url:"https://allurereport.org/docs/",icon:"https://kjdaohang.com/media/tool_icons/imageye___-_logo-report-sign.png",logo:"https://kjdaohang.com/media/tool_icons/imageye___-_logo-report-sign.png",tags:"测试报告框架,开源",order:1,is_active:!0,views:73,likes_count:0,created_at:"2025-06-19T14:30:30.352885+08:00",updated_at:"2025-06-20T10:12:03.299231+08:00",desc_md:`### Allure

- **开发商**：Qameta Software
- **简介**：Allure 是一款灵活、轻量级的开源测试报告框架，支持多种主流测试框架和编程语言，生成直观、交互式的测试报告。
- **主要特性**：
  - 支持多语言和多测试框架
  - 交互式、可视化测试报告
  - 丰富的插件和自定义扩展
  - 易于集成到 CI/CD 流程
- **适用人群**：测试工程师、开发者、自动化测试团队
- [官网链接](https://allurereport.org/docs/)
`},{id:85,parent_category:15,parent_category_name:"测试工具",sub_category:22,sub_category_name:"抓包工具",name:"mitmproxy",description:"一款基于 Python 的开源网络抓包工具，支持 HTTP/HTTPS/WebSocket 协议的中间人代理。",url:"https://github.com/mitmproxy/mitmproxy",icon:"https://kjdaohang.com/media/tool_icons/mitmproxy.png",logo:"https://kjdaohang.com/media/tool_icons/mitmproxy.png",tags:"抓包,Python",order:1,is_active:!0,views:72,likes_count:0,created_at:"2025-05-22T09:01:19.111506+08:00",updated_at:"2025-05-29T19:03:04.153726+08:00",desc_md:`### mitmproxy

- **开发商**：开源社区
- **简介**：mitmproxy 是一款基于 Python 的开源中间人代理抓包工具，支持 HTTP、HTTPS、WebSocket 等协议。适用于接口调试、数据分析和安全测试。
- **主要特性**：
  - 支持命令行和 Web 可视化界面
  - 实时抓包与流量修改
  - 支持脚本自动化和插件扩展
  - 丰富的过滤和搜索功能
  - 跨平台支持，适合自动化集成
- **适用人群**：开发者、测试工程师、安全研究员
- [项目主页](https://github.com/mitmproxy/mitmproxy)
`},{id:82,parent_category:15,parent_category_name:"测试工具",sub_category:20,sub_category_name:"测试管理",name:"STF",description:"一款开源的移动设备管理平台，主要用于远程管理和调试移动设备",url:"https://github.com/openstf/stf",icon:"https://kjdaohang.com/media/tool_icons/STP.jpg",logo:"https://kjdaohang.com/media/tool_icons/STP.jpg",tags:"设备管理平台",order:1,is_active:!0,views:71,likes_count:0,created_at:"2025-05-22T08:58:35.249963+08:00",updated_at:"2025-05-29T18:50:31.067222+08:00",desc_md:`### STF

- **开发商**：开源社区
- **简介**：STF（Smartphone Test Farm）是一款开源的移动设备管理平台，支持远程管理、调试和自动化测试多台移动设备。适合移动应用开发和测试团队。
- **主要特性**：
  - 支持多设备远程管理与调试
  - 实时屏幕投射与操作
  - 支持自动化测试集成
  - 用户权限与设备分配管理
  - 跨平台部署，支持多种设备
- **适用人群**：移动开发团队、测试工程师、设备管理团队
- [项目主页](https://github.com/openstf/stf)
`},{id:75,parent_category:3,parent_category_name:"AI工具",sub_category:6,sub_category_name:"AI编程",name:"Fitten Code",description:"由北京非十科技推出的AI编程助手，支持VS Code、PyCharm、IntelliJ与Visual Studio。",url:"https://code.fittentech.com/",icon:"https://kjdaohang.com/media/tool_icons/default_llC9eK1.png",logo:"https://kjdaohang.com/media/tool_icons/default_llC9eK1.png",tags:"AI编程",order:1,is_active:!0,views:70,likes_count:0,created_at:"2025-05-21T22:48:06.081387+08:00",updated_at:"2025-05-23T18:35:17.402129+08:00"},{id:110,parent_category:15,parent_category_name:"测试工具",sub_category:21,sub_category_name:"API测试",name:"Apifox",description:"一款全链路 API 协作工具，集 API 设计、开发、测试、文档、Mock、自动化 于一体",url:"https://www.apifox.cn/",icon:"https://kjdaohang.com/media/tool_icons/Apifox.png",logo:"https://kjdaohang.com/media/tool_icons/Apifox.png",tags:"接口测试,Mock",order:1,is_active:!0,views:68,likes_count:0,created_at:"2025-05-22T10:24:16.010135+08:00",updated_at:"2025-05-26T17:48:37.738059+08:00",desc_md:`### Apifox

- **开发商**：Apifox 团队
- **简介**：Apifox 是一款全链路 API 协作平台，集 API 设计、开发、调试、测试、Mock、文档于一体，提升团队协作效率。
- **主要特性**：
  - API 设计与文档自动同步
  - 支持接口调试、自动化测试和 Mock
  - 丰富的团队协作与权限管理
  - 支持多种协议（RESTful、WebSocket、gRPC 等）
  - 支持私有化部署
- **适用人群**：开发团队、测试团队、API 管理团队
- [官网链接](https://www.apifox.cn/)
`},{id:103,parent_category:15,parent_category_name:"测试工具",sub_category:20,sub_category_name:"测试管理",name:"Jira",description:"一款由 Atlassian 公司开发的流行的项目管理工具，广泛应用于软件开发、IT 运维、业务流程管理等领域",url:"https://www.atlassian.com/zh/software/jira",icon:"https://kjdaohang.com/media/tool_icons/jira.jpg",logo:"https://kjdaohang.com/media/tool_icons/jira.jpg",tags:"项目管理系统",order:1,is_active:!0,views:68,likes_count:0,created_at:"2025-05-22T09:27:18.916152+08:00",updated_at:"2025-05-26T18:36:20.361769+08:00",desc_md:`### Jira

- **开发商**：Atlassian
- **简介**：Jira 是一款全球流行的项目管理和缺陷跟踪工具，广泛应用于敏捷开发、IT 运维、业务流程管理等领域。支持 Scrum、Kanban 等多种项目管理模式。
- **主要特性**：
  - 敏捷项目管理（Scrum、Kanban）
  - 任务、缺陷、需求全流程管理
  - 丰富的报表与仪表盘
  - 支持插件扩展与第三方集成
  - 团队协作与权限管理
- **适用人群**：项目经理、开发团队、测试团队、企业管理层
- [官网链接](https://www.atlassian.com/zh/software/jira)
`},{id:130,parent_category:3,parent_category_name:"AI工具",sub_category:9,sub_category_name:"AI搜索",name:"心流AI",description:"由阿里巴巴达摩院孵化的一款专为知识密集型场景设计的智能助手",url:"https://iflow.cn/",icon:"https://kjdaohang.com/media/tool_icons/434x0w.png",logo:"https://kjdaohang.com/media/tool_icons/434x0w.png",tags:"AI搜索,阿里巴巴,心流AI",order:1,is_active:!0,views:64,likes_count:0,created_at:"2025-05-22T11:10:55.138259+08:00",updated_at:"2025-09-08T08:39:44.656313+08:00"},{id:314,parent_category:44,parent_category_name:"实用小工具",sub_category:74,sub_category_name:"Windows工具",name:"PowerToys",description:"微软官方推出的一套免费、开源的实用工具集，其中包含鼠标高亮功能。",url:"https://github.com/microsoft/PowerToys/releases",icon:"https://kjdaohang.com/media/tool_icons/image.png",logo:"https://kjdaohang.com/media/tool_icons/image.png",tags:"微软,免费,工具合集",order:1,is_active:!0,views:61,likes_count:1,created_at:"2025-06-08T12:38:53.473230+08:00",updated_at:"2025-06-08T12:38:53.473338+08:00",desc_md:`### PowerToys

- **开发商**：Microsoft
- **简介**：PowerToys 是微软官方推出的免费开源实用工具集，包含窗口管理、鼠标高亮、快捷键管理、批量重命名等多种高效工具，极大提升 Windows 用户的工作效率。
- **主要特性**：
  - 窗口快速分屏与管理
  - 鼠标高亮与定位
  - 快捷键自定义与管理
  - 批量重命名、图片压缩等实用工具
  - 持续更新与社区支持
- **适用人群**：Windows 用户、效率工具爱好者、开发者
- [官网链接](https://github.com/microsoft/PowerToys/releases)
`},{id:275,parent_category:35,parent_category_name:"运维工具",sub_category:38,sub_category_name:"CICD",name:"TeamCity",description:"一款由 JetBrains 开发的 企业级持续集成/持续部署（CI/CD）平台，专为大型团队和复杂项目设计。",url:"https://www.jetbrains.com/teamcity",icon:"https://kjdaohang.com/media/tool_icons/TeamCity.jpg",logo:"https://kjdaohang.com/media/tool_icons/TeamCity.jpg",tags:"JetBrains,持续集成",order:1,is_active:!0,views:57,likes_count:0,created_at:"2025-05-22T18:29:10.416222+08:00",updated_at:"2025-05-27T10:02:34.385450+08:00",desc_md:`### TeamCity

- **开发商**：JetBrains
- **简介**：TeamCity 是 JetBrains 推出的企业级持续集成/持续部署（CI/CD）平台，支持多语言、多平台和复杂项目的自动化构建、测试和部署。
- **主要特性**：
  - 支持多种开发语言和构建工具
  - 灵活的流水线和任务编排
  - 丰富的插件和第三方集成
  - 实时构建监控和详细报告
  - 强大的权限和团队管理
- **适用人群**：大型开发团队、企业 DevOps 团队、自动化测试团队
- [官网链接](https://www.jetbrains.com/teamcity)
`},{id:345,parent_category:49,parent_category_name:"自媒体工具",sub_category:51,sub_category_name:"素材库",name:"喵图库",description:"一个专注于提供高质量街拍美图、图片资源的网站。",url:"https://www.miaotuku.com/",icon:"https://kjdaohang.com/media/tool_icons/hm0VYAu61t.jpg",logo:"https://kjdaohang.com/media/tool_icons/hm0VYAu61t.jpg",tags:"高质量图片,街拍美图",order:1,is_active:!0,views:50,likes_count:0,created_at:"2025-06-20T13:18:52.116728+08:00",updated_at:"2025-06-20T13:54:13.986540+08:00",desc_md:`### 喵图库

- **开发商**：喵图库团队
- **简介**：喵图库是一个专注于高质量街拍美图和图片资源分享的平台，涵盖时尚、生活、城市、人物等多种主题，图片清晰度高，适合自媒体配图、设计灵感、内容创作等。
- **主要特性**：
  - 高质量街拍美图资源
  - 多主题分类，检索便捷
  - 支持高清图片下载
  - 图片风格多样，持续更新
  - 适合二次创作和商业用途
- **适用人群**：自媒体人、摄影爱好者、内容创作者、设计师
- [官网链接](https://www.miaotuku.com/)
`},{id:281,parent_category:63,parent_category_name:"办公神器",sub_category:67,sub_category_name:"PDF工具",name:"PDF Editor",description:"一款在线PDF编辑器，用户可以通过它在线编辑PDF文件和填写PDF表单。",url:"https://www.pdfescape.com/online-pdf-editor/",icon:"https://kjdaohang.com/media/tool_icons/PDF_Editor.jpg",logo:"https://kjdaohang.com/media/tool_icons/PDF_Editor.jpg",tags:"PDF处理软件",order:1,is_active:!0,views:50,likes_count:0,created_at:"2025-05-22T19:34:53.994118+08:00",updated_at:"2025-05-27T10:54:19.251692+08:00",desc_md:`### PDF Editor

- **开发商**：PDFescape
- **简介**：PDF Editor（PDFescape）是一款功能强大的在线 PDF 编辑器，支持编辑、注释、填写表单、添加签名等多种功能。
- **主要特性**：
  - 支持在线编辑和注释 PDF
  - 填写和创建 PDF 表单
  - 添加签名、图片和链接
  - 支持文件加密和保护
- **适用人群**：办公用户、学生、合同文档处理者
- [官网链接](https://www.pdfescape.com/online-pdf-editor/)
`},{id:306,parent_category:49,parent_category_name:"自媒体工具",sub_category:51,sub_category_name:"素材库",name:"Pexels",description:"完全免费的图片网站，所有图片会显示详细信息，如拍摄相机型号、光圈等，每周定量更新，照片经过专人挑选，质量高，可按搜索热度或颜色筛选图片",url:"https://www.pexels.com/zh-cn/",icon:"https://kjdaohang.com/media/tool_icons/Pexels.png",logo:"https://kjdaohang.com/media/tool_icons/Pexels.png",tags:"免费素材,图片素材",order:1,is_active:!0,views:45,likes_count:0,created_at:"2025-06-02T09:16:59.246307+08:00",updated_at:"2025-06-02T09:16:59.246362+08:00",desc_md:`### Pexels

- **开发商**：Pexels 团队
- **简介**：Pexels 是全球领先的免费图片素材网站，所有图片均可免费商用，支持详细信息展示（如相机型号、光圈等），每周定量更新，图片经过人工挑选，质量高，支持按热度、颜色等多条件筛选。
- **主要特性**：
  - 免费高质量图片素材
  - 详细图片信息展示
  - 多条件筛选与搜索
  - 每周定量更新，人工精选
  - 支持多分辨率下载
- **适用人群**：自媒体人、设计师、内容创作者、广告从业者
- [官网链接](https://www.pexels.com/zh-cn/)
`},{id:305,parent_category:49,parent_category_name:"自媒体工具",sub_category:51,sub_category_name:"素材库",name:"Unsplash",description:"以生活中的影像作品为主，数据庞大且定期更新，在互联网圈知名度较高，很多开发者也会使用其图片，适合为公众号文章搭配高质量的生活、风景等相关主题的图片。",url:"https://unsplash.com/",icon:"https://kjdaohang.com/media/tool_icons/Unsplash.jpg",logo:"https://kjdaohang.com/media/tool_icons/Unsplash.jpg",tags:"图片素材,免费素材",order:1,is_active:!0,views:45,likes_count:0,created_at:"2025-06-02T09:13:14.610218+08:00",updated_at:"2025-06-02T09:55:13.929719+08:00",desc_md:`### Unsplash

- **开发商**：Unsplash 团队
- **简介**：Unsplash 是全球知名的高质量图片素材库，以生活、风景、人物等主题为主，图片数据庞大且定期更新，广受开发者和内容创作者欢迎，适合公众号、网站、设计等多场景配图。
- **主要特性**：
  - 海量高质量生活与风景图片
  - 定期更新，内容丰富
  - 免费商用，无版权限制
  - 支持多分辨率下载
  - 多主题、多风格分类
- **适用人群**：自媒体人、开发者、设计师、内容创作者
- [官网链接](https://unsplash.com/)
`},{id:224,parent_category:15,parent_category_name:"测试工具",sub_category:21,sub_category_name:"API测试",name:"Reqable",description:"一款专注于 API 设计、开发和测试的工具，提供了直观的界面和丰富的功能",url:"https://reqable.com/zh-CN/",icon:"https://kjdaohang.com/media/tool_icons/Reqable.png",logo:"https://kjdaohang.com/media/tool_icons/Reqable.png",tags:"API协作平台",order:1,is_active:!0,views:44,likes_count:0,created_at:"2025-05-22T16:40:25.087705+08:00",updated_at:"2025-05-28T11:38:05.294289+08:00",desc_md:`### Reqable

- **开发商**：Reqable 团队
- **简介**：Reqable 是一款专注于 API 设计、开发和测试的工具，提供直观的界面和丰富的功能，适合接口调试、数据抓包和自动化测试。
- **主要特性**：
  - 支持多种协议（HTTP、WebSocket、gRPC 等）
  - 可视化接口调试与数据抓包
  - 支持自动化测试和断言
  - 丰富的插件和脚本扩展
  - 支持团队协作与权限管理
- **适用人群**：开发者、测试工程师、API 管理团队
- [官网链接](https://reqable.com/zh-CN/)
`},{id:100,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"Ranorex",description:"一款功能强大的自动化测试工具，广泛应用于桌面、Web 和移动应用的测试。",url:"http://www.ranorex.com/",icon:"https://kjdaohang.com/media/tool_icons/Ranorex.jpg",logo:"https://kjdaohang.com/media/tool_icons/Ranorex.jpg",tags:"跨平台测试",order:1,is_active:!0,views:44,likes_count:0,created_at:"2025-05-22T09:24:04.026072+08:00",updated_at:"2025-05-26T21:01:30.607774+08:00",desc_md:`### Ranorex

- **开发商**：Ranorex GmbH
- **简介**：Ranorex 是一款企业级自动化测试工具，支持桌面、Web 和移动应用的自动化测试。提供可视化脚本录制、强大的对象识别和丰富的集成能力。
- **主要特性**：
  - 支持多平台（桌面、Web、移动）
  - 可视化脚本录制与编辑
  - 强大的对象识别和维护
  - 丰富的报告和分析工具
  - 集成 CI/CD 流程和第三方工具
- **适用人群**：企业测试团队、自动化测试工程师、开发者
- [官网链接](http://www.ranorex.com/)
`},{id:295,parent_category:44,parent_category_name:"实用小工具",sub_category:47,sub_category_name:"图片编辑",name:"在线PS网页版",description:"一个在线的图像编辑工具，类似于Adobe Photoshop的功能，但完全基于浏览器运行，无需安装任何软件",url:"https://zaixianps.net/",icon:"https://kjdaohang.com/media/tool_icons/PS.jpg",logo:"https://kjdaohang.com/media/tool_icons/PS.jpg",tags:"在线PS",order:1,is_active:!0,views:43,likes_count:0,created_at:"2025-05-22T20:39:01.470097+08:00",updated_at:"2025-05-27T14:07:41.155001+08:00"},{id:87,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"WinAppDriver",description:"由微软开发的一款用于 Windows 应用自动化测试 的工具，基于 WebDriver 协议。",url:"https://github.com/Microsoft/WinAppDriver",icon:"https://kjdaohang.com/media/tool_icons/WinAppDriver.jpg",logo:"https://kjdaohang.com/media/tool_icons/WinAppDriver.jpg",tags:"微软,Windows自动化测试",order:1,is_active:!0,views:43,likes_count:0,created_at:"2025-05-22T09:06:12.269057+08:00",updated_at:"2025-05-26T20:49:57.738865+08:00",desc_md:`### WinAppDriver

- **开发商**：Microsoft
- **简介**：WinAppDriver 是微软推出的 Windows 应用自动化测试工具，基于 WebDriver 协议，支持 UWP、经典桌面应用的自动化测试。
- **主要特性**：
  - 支持 Windows 10 应用自动化
  - 兼容 Selenium WebDriver API
  - 支持多种编程语言
  - 易于集成到 CI/CD 流程
  - 开源免费，社区活跃
- **适用人群**：Windows 应用开发者、测试工程师、自动化测试团队
- [项目主页](https://github.com/Microsoft/WinAppDriver)
`},{id:353,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"PromptPilot",description:"一款由火山引擎推出的 AI 工具，专注于解决用户在大模型应用中“如何有效提问”以及提示词编写困难的问题，简单来说就是帮你优化AI提示词。",url:"https://promptpilot.volcengine.com/home",icon:"https://kjdaohang.com/media/tool_icons/imageye___-_prompt-pilot.png",logo:"https://kjdaohang.com/media/tool_icons/imageye___-_prompt-pilot.png",tags:"AI提示词,提示词优化",order:1,is_active:!0,views:40,likes_count:0,created_at:"2025-06-25T21:56:00.701605+08:00",updated_at:"2025-06-25T21:56:00.701645+08:00",desc_md:`### PromptPilot

- **开发商**：火山引擎
- **简介**：PromptPilot 是一款专注于 AI 提示词优化的智能工具，帮助用户在大模型应用中高效编写和优化 Prompt，提升 AI 交互效果。
- **主要特性**：
  - 智能提示词优化与建议
  - 支持多种大模型平台
  - 提供提示词模板和案例库
  - 一键生成和测试 Prompt 效果
  - 简洁易用的界面
- **适用人群**：AI 应用开发者、内容创作者、产品经理
- [官网链接](https://promptpilot.volcengine.com/home)
`},{id:374,parent_category:58,parent_category_name:"资源网站",sub_category:79,sub_category_name:"休闲娱乐",name:"魔方求解器",description:'魔方玩家的神器，输入魔方各面颜色，网站会自动计算出魔方的复原步骤，点击"求解"，按提示操作即可还原魔方。',url:"https://rubiks-cube-solver.com/zh/",icon:"https://kjdaohang.com/media/tool_icons/R-C_1.jpg",logo:"https://kjdaohang.com/media/tool_icons/R-C_1.jpg",tags:"在线小游戏,魔方",order:1,is_active:!0,views:38,likes_count:0,created_at:"2025-07-05T11:18:21.562868+08:00",updated_at:"2025-07-05T11:18:21.562907+08:00",desc_md:`### 魔方求解器

- **简介**：魔方求解器是一款专为魔方爱好者设计的在线工具，通过输入魔方各面的颜色，自动计算出最优还原步骤，帮助用户轻松复原魔方。
- **主要特性**：
  - 支持标准3x3魔方及部分异形魔方
  - 可视化输入界面，操作简单
  - 自动生成详细还原步骤
  - 提供动画演示，便于学习
  - 支持多语言，全球用户可用
- **适用人群**：魔方新手、进阶玩家、魔方教学者
- [使用魔方求解器](https://rubiks-cube-solver.com/zh/)
`},{id:187,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"阿里云百炼智能体",description:"阿里云百炼推出的智能体应用平台，基于MCP（模型上下文协议）的创新型AI开发平台。",url:"https://bailian.console.aliyun.com/app-center",icon:"https://kjdaohang.com/media/tool_icons/default_e425MRi.png",logo:"https://kjdaohang.com/media/tool_icons/default_e425MRi.png",tags:"阿里云,AI智能体",order:1,is_active:!0,views:38,likes_count:0,created_at:"2025-05-22T14:16:57.526590+08:00",updated_at:"2025-05-24T11:47:11.408444+08:00",desc_md:`### 阿里云百炼智能体

- **开发商**：阿里云
- **简介**：阿里云百炼智能体是基于MCP协议的创新型AI开发平台，支持智能体应用的快速开发、部署与管理。
- **主要特性**：
  - 支持多模型与多场景智能体开发
  - MCP协议标准化接入
  - 可视化工作流与自动化
  - 企业级安全与权限管理
  - 丰富的API与生态扩展
- **适用人群**：企业开发者、AI创业团队、自动化办公用户
- [官网链接](https://bailian.console.aliyun.com/app-center)
`},{id:33,parent_category:3,parent_category_name:"AI工具",sub_category:8,sub_category_name:"AI视频",name:"Vidu",description:"一款AI视频生成平台，能够将文本和图片快速转化为高质量视频",url:"https://www.vidu.cn/",icon:"https://kjdaohang.com/media/tool_icons/vidu-color.png",logo:"https://kjdaohang.com/media/tool_icons/vidu-color.png",tags:"AI视频",order:1,is_active:!0,views:38,likes_count:0,created_at:"2025-05-21T20:48:24.348558+08:00",updated_at:"2025-05-24T08:23:16.362872+08:00"},{id:131,parent_category:3,parent_category_name:"AI工具",sub_category:10,sub_category_name:"AI设计",name:"即时设计",description:"一款支持在线协作的专业级 UI 设计工具，支持 Sketch、Figma、XD 格式导入，海量优质设计资源即拿即用。",url:"https://js.design/",icon:"https://kjdaohang.com/media/tool_icons/js-design-icon-filled-256.png",logo:"https://kjdaohang.com/media/tool_icons/js-design-icon-filled-256.png",tags:"AI设计,UI设计",order:1,is_active:!0,views:37,likes_count:0,created_at:"2025-05-22T11:13:17.198337+08:00",updated_at:"2025-05-24T11:00:20.959297+08:00",desc_md:`### 即时设计

- **开发商**：即时设计团队
- **简介**：即时设计是一款专业级在线UI设计工具，支持Sketch、Figma、XD等格式导入，拥有丰富的设计资源和协作功能。
- **主要特性**：
  - 在线协作与实时编辑
  - 支持多种设计文件格式导入
  - 海量设计资源与模板
  - 多人团队协作与权限管理
  - 云端存储与版本管理
- **适用人群**：UI设计师、产品经理、开发者、团队协作用户
- [官网链接](https://js.design/)
`},{id:108,parent_category:15,parent_category_name:"测试工具",sub_category:17,sub_category_name:"性能测试",name:"Gatling",description:"一款基于 Scala 编程语言的高性能压力测试工具，广泛用于负载测试和性能测试",url:"https://gatling.io/",icon:"https://kjdaohang.com/media/tool_icons/Gatling.jpg",logo:"https://kjdaohang.com/media/tool_icons/Gatling.jpg",tags:"Scala,负载测试",order:1,is_active:!0,views:37,likes_count:0,created_at:"2025-05-22T10:19:50.979732+08:00",updated_at:"2025-05-26T20:25:43.189312+08:00",desc_md:`### Gatling

- **开发商**：Gatling Corp
- **简介**：Gatling 是一款基于 Scala 的高性能压力测试工具，适合 Web 应用和 API 的负载与性能测试，支持脚本化场景和自动化集成。
- **主要特性**：
  - Scala DSL 脚本编写测试场景
  - 高并发性能和低资源消耗
  - 丰富的报告与可视化分析
  - 支持 CI/CD 集成和分布式测试
- **适用人群**：性能测试工程师、开发者、自动化测试团队
- [官网链接](https://gatling.io/)
`},{id:371,parent_category:58,parent_category_name:"资源网站",sub_category:79,sub_category_name:"休闲娱乐",name:"IO游戏+",description:"一个很耐玩的在线联机棋类游戏平台，可以跟全球玩家在线对战、排名。有五个游戏，都比较耐玩，海战游戏、井字游戏、四子棋、五子棋、国际象棋。",url:"https://papergames.io/zh/",icon:"https://kjdaohang.com/media/tool_icons/f1a66c848157fd710af6b1b548e562fa.png",logo:"https://kjdaohang.com/media/tool_icons/f1a66c848157fd710af6b1b548e562fa.png",tags:"在线小游戏,免费,棋牌类",order:1,is_active:!0,views:36,likes_count:0,created_at:"2025-07-05T11:05:50.833707+08:00",updated_at:"2025-07-05T11:05:50.833749+08:00",desc_md:`### IO游戏+

- **简介**：IO游戏+ 是一个专注于在线棋类和策略小游戏的平台，支持全球玩家实时对战和排名。
- **主要特性**：
  - 包含海战、井字棋、四子棋、五子棋、国际象棋等经典棋类游戏
  - 实时匹配全球玩家，支持排行榜
  - 免注册、免费畅玩
  - 简洁的界面和流畅的操作体验
  - 适合休闲娱乐和益智锻炼
- **适用人群**：棋类爱好者、休闲玩家、益智游戏爱好者
- [访问 IO游戏+](https://papergames.io/zh/)
`},{id:79,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"uiautomator2",description:"一款基于 Python 的移动端自动化测试框架，支持真机和模拟器",url:"https://github.com/openatx/uiautomator2",icon:"https://kjdaohang.com/media/tool_icons/faker_0kviePb.jpg",logo:"https://kjdaohang.com/media/tool_icons/faker_0kviePb.jpg",tags:"Android自动化,iOS自动化",order:1,is_active:!0,views:35,likes_count:0,created_at:"2025-05-22T08:53:58.015021+08:00",updated_at:"2025-05-26T20:40:11.235889+08:00",desc_md:`### uiautomator2

- **开发商**：开源社区
- **简介**：uiautomator2 是一款基于 Python 的 Android 自动化测试框架，支持真机和模拟器，适合移动应用自动化测试和数据采集。
- **主要特性**：
  - 支持 Android 真机和模拟器
  - Python 脚本编写，易于集成
  - 丰富的控件操作和断言能力
  - 支持多设备并发测试
  - 社区活跃，文档完善
- **适用人群**：移动开发者、测试工程师、自动化测试团队
- [项目主页](https://github.com/openatx/uiautomator2)
`},{id:60,parent_category:3,parent_category_name:"AI工具",sub_category:8,sub_category_name:"AI视频",name:"白日梦AI",description:"智能视频内容创作平台，轻松生成专业视频。",url:"https://aibrm.com/",icon:"https://kjdaohang.com/media/tool_icons/24105332z5sj.png",logo:"https://kjdaohang.com/media/tool_icons/24105332z5sj.png",tags:"AI视频",order:1,is_active:!0,views:34,likes_count:0,created_at:"2025-05-21T21:57:14.240835+08:00",updated_at:"2025-05-24T08:26:24.991392+08:00"},{id:222,parent_category:15,parent_category_name:"测试工具",sub_category:21,sub_category_name:"API测试",name:"Apipost",description:"集 API 设计、调试、文档、自动化测试为一体的 API 研发协同平台，支持 grpc、http、websocket、socketio、socketjs 类型接口调试，支持私有化部署",url:"https://www.apipost.cn/apidebugger/",icon:"https://kjdaohang.com/media/tool_icons/apipost.png",logo:"https://kjdaohang.com/media/tool_icons/apipost.png",tags:"API协作平台",order:1,is_active:!0,views:33,likes_count:0,created_at:"2025-05-22T16:38:01.038747+08:00",updated_at:"2025-05-26T18:05:47.688897+08:00",desc_md:`### Apipost

- **开发商**：Apipost 团队
- **简介**：Apipost 是一款集 API 设计、调试、文档、自动化测试于一体的研发协同平台，支持多种协议和私有化部署。
- **主要特性**：
  - 支持 REST、gRPC、WebSocket、SocketIO 等协议
  - 可视化接口调试与自动化测试
  - 丰富的团队协作与权限管理
  - 支持接口文档自动生成与 Mock
  - 支持私有化部署和数据安全
- **适用人群**：开发团队、测试团队、API 管理团队
- [官网链接](https://www.apipost.cn/apidebugger/)
`},{id:198,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"Qwen",description:"由阿里巴巴集团旗下的达摩院开发的大型语言模型。",url:"https://chat.qwen.ai/",icon:"https://kjdaohang.com/media/tool_icons/Qwen-Icon-2023.png",logo:"https://kjdaohang.com/media/tool_icons/Qwen-Icon-2023.png",tags:"阿里巴巴,大语言模型",order:1,is_active:!0,views:33,likes_count:0,created_at:"2025-05-22T14:55:01.032866+08:00",updated_at:"2025-05-24T17:09:04.483869+08:00",desc_md:`### Qwen

- **开发商**：阿里巴巴达摩院
- **简介**：Qwen 是阿里巴巴达摩院推出的大型语言模型，具备强大的自然语言理解与生成能力，广泛应用于对话、写作、搜索、代码等场景。
- **主要特性**：
  - 支持多轮对话和上下文理解
  - 多语言支持与知识问答
  - 代码生成与编程辅助
  - 可扩展 API 与开放平台
  - 持续迭代与模型升级
- **适用人群**：开发者、企业用户、AI 研究者
- [官网链接](https://chat.qwen.ai/)
`},{id:98,parent_category:15,parent_category_name:"测试工具",sub_category:21,sub_category_name:"API测试",name:"Insomia",description:"一款开源的、跨平台的 GraphQL、REST、WebSockets 和 gRPC 的 API 客户端。",url:"https://github.com/Kong/insomnia",icon:"https://kjdaohang.com/media/tool_icons/Insomia.png",logo:"https://kjdaohang.com/media/tool_icons/Insomia.png",tags:"接口测试,测试工具",order:1,is_active:!0,views:33,likes_count:0,created_at:"2025-05-22T09:22:06.239896+08:00",updated_at:"2025-05-26T17:54:31.281741+08:00",desc_md:`### Insomnia

- **开发商**：Kong Inc.
- **简介**：Insomnia 是一款开源、跨平台的 API 客户端，支持 REST、GraphQL、WebSockets 和 gRPC 等多种协议。界面简洁，功能强大，适合开发者进行接口调试、自动化测试和团队协作。
- **主要特性**：
  - 支持多种 API 协议（REST、GraphQL、WebSockets、gRPC）
  - 丰富的环境变量和请求链路
  - 支持插件扩展和脚本自动化
  - 可视化请求构造与响应查看
  - 支持团队协作与数据同步
- **适用人群**：开发者、测试工程师、API 管理团队
- [项目主页](https://github.com/Kong/insomnia)
`},{id:89,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"Cypress",description:"一款现代化的Web自动化测试工具，专注于端到端测试。",url:"https://www.cypress.io/",icon:"https://kjdaohang.com/media/tool_icons/cypress.png",logo:"https://kjdaohang.com/media/tool_icons/cypress.png",tags:"Web自动化测试",order:1,is_active:!0,views:33,likes_count:0,created_at:"2025-05-22T09:09:13.717023+08:00",updated_at:"2025-05-26T20:52:01.901491+08:00",desc_md:`### Cypress

- **开发商**：Cypress.io
- **简介**：Cypress 是一款现代化的 Web 自动化测试工具，专注于端到端测试，提供实时调试和可视化测试运行，适合前端开发和测试。
- **主要特性**：
  - 实时可视化测试运行与调试
  - 支持断言、模拟和网络拦截
  - 易于集成 CI/CD 流程
  - 丰富的插件和社区生态
  - 简单易用的 API 和文档
- **适用人群**：前端开发者、测试工程师、自动化测试团队
- [官网链接](https://www.cypress.io/)
`},{id:240,parent_category:23,parent_category_name:"开发工具",sub_category:28,sub_category_name:"静态代码分析",name:"SonarLint",description:"一款强大的静态代码分析工具，能够在开发过程中实时发现并修复潜在的代码质量问题",url:"https://www.sonarlint.org/",icon:"https://kjdaohang.com/media/tool_icons/sonarlint.jpg",logo:"https://kjdaohang.com/media/tool_icons/sonarlint.jpg",tags:"静态代码分析",order:1,is_active:!0,views:30,likes_count:0,created_at:"2025-05-22T17:29:32.831058+08:00",updated_at:"2025-05-26T22:41:14.741348+08:00",desc_md:`### SonarLint

- **简介**：SonarLint 是一款实时静态代码分析插件，支持主流 IDE（如 VS Code、IntelliJ IDEA、Eclipse 等）。它能够在开发过程中即时检测并提示代码中的 bug、漏洞和代码异味，帮助开发者在编码阶段就修复问题。
- **主要特性**：
  - 实时代码质量反馈，边写边查错
  - 支持多种主流编程语言
  - 与 SonarQube 集成，实现本地与服务器规则同步
  - 轻量级、易于安装和使用
  - 支持自定义规则和团队协作
- **适用场景**：适合个人开发者和团队在本地开发环境中提升代码质量。
- [官网链接](https://www.sonarlint.org/)
`},{id:216,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"Sider",description:"一款功能强大的 AI 浏览器扩展工具，集成了多种主流 AI 模型。",url:"https://sider.ai/zh-CN",icon:"https://kjdaohang.com/media/tool_icons/Sider_AI_logo.png",logo:"https://kjdaohang.com/media/tool_icons/Sider_AI_logo.png",tags:"AI插件",order:1,is_active:!0,views:30,likes_count:0,created_at:"2025-05-22T16:17:57.926487+08:00",updated_at:"2025-05-24T17:20:35.029548+08:00",desc_md:`### Sider

- **开发商**：Sider 团队
- **简介**：Sider 是一款集成多种主流 AI 模型的浏览器扩展工具，支持网页内容总结、翻译、写作辅助、代码生成等多种功能。
- **主要特性**：
  - 支持 ChatGPT、Claude、Gemini 等模型
  - 网页内容一键总结与翻译
  - 写作、编程、搜索等多场景支持
  - 多平台浏览器插件（Chrome、Edge 等）
  - 界面简洁，操作便捷
- **适用人群**：内容创作者、开发者、学生、职场人士
- [官网链接](https://sider.ai/zh-CN)
`},{id:385,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"PicDoc",description:"PicDoc是一款AI驱动的文本到视觉内容转换工具，它能够将文本内容自动转换为图表、流程图、信息图等视觉元素图像。致力于将用户的知识、想法和商业故事以可视化的方式表达出来。",url:"https://www.picdoc.cn/",icon:"https://kjdaohang.com/media/tool_icons/PicDoc-logo.png",logo:"https://kjdaohang.com/media/tool_icons/PicDoc-logo.png",tags:"文生图表工具,文本可视化,图表生成器",order:1,is_active:!0,views:29,likes_count:0,created_at:"2025-07-14T11:47:31.410954+08:00",updated_at:"2025-07-14T12:28:51.318891+08:00",desc_md:`### PicDoc

- **开发商**：PicDoc 团队
- **简介**：PicDoc 是一款 AI 驱动的文本可视化工具，支持将文本内容自动转换为图表、流程图、信息图等视觉元素，帮助用户高效表达知识和想法。
- **主要特性**：
  - 文本自动生成图表、流程图、信息图
  - 丰富的可视化模板和样式
  - 支持多种输入格式
  - 一键导出与分享
  - 界面简洁，操作便捷
- **适用人群**：职场人士、教师、学生、内容创作者
- [官网链接](https://www.picdoc.cn/)
`},{id:242,parent_category:23,parent_category_name:"开发工具",sub_category:28,sub_category_name:"静态代码分析",name:"CodeDog",description:"一个集众多代码分析工具的云原生、分布式、高性能的代码综合分析跟踪管理平台。",url:"https://cnb.cool/tca/code-analysis",icon:"https://kjdaohang.com/media/tool_icons/CodeDog.jpg",logo:"https://kjdaohang.com/media/tool_icons/CodeDog.jpg",tags:"代码质量管理平台",order:1,is_active:!0,views:29,likes_count:0,created_at:"2025-05-22T17:34:06.146261+08:00",updated_at:"2025-05-26T22:45:54.757965+08:00",desc_md:`### CodeDog

- **简介**：CodeDog 是一款云原生、分布式、高性能的代码综合分析与跟踪管理平台，集成了多种主流代码分析工具，支持多语言、多项目的代码质量管理。
- **主要特性**：
  - 支持多种静态代码分析工具的集成
  - 分布式架构，适合大规模项目和团队
  - 提供详细的代码质量报告和趋势分析
  - 支持代码缺陷跟踪与管理
  - 云原生部署，易于扩展和维护
- **适用场景**：适合企业级、云原生环境下的代码质量管理和持续集成。
- [官网链接](https://cnb.cool/tca/code-analysis)
`},{id:320,parent_category:30,parent_category_name:"设计工具",sub_category:34,sub_category_name:"流程图设计",name:"Excalidraw",description:"一个开源的、基于浏览器的手绘风格白板工具，可以创建各种图表、草图、流程图、思维导图、设计原型等。",url:"https://excalidraw.com/",icon:"https://kjdaohang.com/media/tool_icons/d2ad1-excalidraw.com.png",logo:"https://kjdaohang.com/media/tool_icons/d2ad1-excalidraw.com.png",tags:"在线画图,手绘风格",order:1,is_active:!0,views:27,likes_count:0,created_at:"2025-06-09T10:20:43.900323+08:00",updated_at:"2025-06-09T10:20:43.900364+08:00",desc_md:`### Excalidraw

- **简介**：Excalidraw 是一款开源的在线白板工具，主打手绘风格，适合快速绘制草图、流程图、思维导图和原型设计。界面极简，操作流畅，支持协作和本地保存。
- **主要特性**：
  - 手绘风格，极简美观
  - 支持实时协作和分享
  - 可导出为 PNG、SVG 等格式
  - 支持离线使用和本地存储
  - 丰富的快捷键和插件扩展
- **适用人群**：设计师、开发者、产品经理、教育工作者、头脑风暴团队
- [官网链接](https://excalidraw.com/)
`},{id:284,parent_category:44,parent_category_name:"实用小工具",sub_category:62,sub_category_name:"二维码制作",name:"腾讯优码",description:"一款功能强大的在线二维码生成与管理工具，支持多种类型的二维码生成",url:"https://qr.qq.com/home",icon:"https://kjdaohang.com/media/tool_icons/%E8%85%BE%E8%AE%AF%E4%BC%98%E7%A0%81%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%94%9F%E6%88%90%E5%99%A8.ico",logo:"https://kjdaohang.com/media/tool_icons/%E8%85%BE%E8%AE%AF%E4%BC%98%E7%A0%81%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%94%9F%E6%88%90%E5%99%A8.ico",tags:"二维码生成",order:1,is_active:!0,views:27,likes_count:0,created_at:"2025-05-22T19:52:44.725695+08:00",updated_at:"2025-05-27T14:41:17.683462+08:00",desc_md:`### 腾讯优码

- **开发商**：腾讯
- **简介**：腾讯优码是一款由腾讯官方推出的二维码生成与管理平台，支持文本、网址、名片、WiFi、文件等多种类型二维码的生成。平台提供二维码批量生成、动态二维码、数据统计、扫码分析等高级功能，适合企业和个人用户进行二维码营销和管理。
- **主要特性**：
  - 多类型二维码生成（文本、网址、名片、WiFi等）
  - 动态二维码与批量生成
  - 二维码数据统计与扫码分析
  - 二维码美化与自定义样式
  - 安全可靠，支持企业级应用
- **适用人群**：企业营销人员、产品经理、个人用户、开发者
- [官网链接](https://qr.qq.com/home)
`},{id:347,parent_category:44,parent_category_name:"实用小工具",sub_category:72,sub_category_name:"在线工具",name:"Temp Mai",description:"临时邮箱，一个提供临时、安全、匿名、免费的一次性电子邮件地址的服务。",url:"https://temp-mail.org/zh/",icon:"https://kjdaohang.com/media/tool_icons/R-C_3.png",logo:"https://kjdaohang.com/media/tool_icons/R-C_3.png",tags:"临时邮箱,接收验证码",order:1,is_active:!0,views:26,likes_count:0,created_at:"2025-06-20T16:08:30.536218+08:00",updated_at:"2025-06-20T16:08:30.536255+08:00",desc_md:`### Temp Mail

- **开发商**：Temp Mail 团队
- **简介**：Temp Mail 是一款提供临时、安全、匿名、免费邮箱地址的服务，适合注册网站、接收验证码、测试邮件等场景，保护用户真实邮箱隐私。
- **主要特性**：
  - 一键生成临时邮箱地址
  - 邮箱自动失效，保护隐私
  - 支持多语言界面
  - 邮件实时接收与查看
  - 无需注册，操作便捷
- **适用人群**：注册用户、开发者、测试人员、隐私保护需求者
- [官网链接](https://temp-mail.org/zh/)
`},{id:96,parent_category:23,parent_category_name:"开发工具",sub_category:25,sub_category_name:"代码协作",name:"Archery",description:"一款开源的数据库管理和SQL审核工具。",url:"https://github.com/hhyo/Archery",icon:"https://kjdaohang.com/media/tool_icons/Archery.jpg",logo:"https://kjdaohang.com/media/tool_icons/Archery.jpg",tags:"SQL审核平台",order:1,is_active:!0,views:26,likes_count:0,created_at:"2025-05-22T09:19:00.136186+08:00",updated_at:"2025-05-27T07:47:51.240790+08:00",desc_md:`### Archery

- **简介**：Archery 是一款开源的数据库管理和 SQL 审核平台，支持多种数据库类型，提供 SQL 审核、执行、权限管理和流程审批等功能。
- **主要特性**：
  - 支持 MySQL、PostgreSQL、SQL Server 等主流数据库
  - SQL 审核和自动化执行
  - 权限和流程审批管理
  - 审计日志和操作追踪
  - 丰富的可视化报表
- **适用场景**：适合企业级数据库管理、数据安全合规和开发运维团队。
- [官网链接](https://github.com/hhyo/Archery)
`},{id:335,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"Same.dev",description:"一个专注于帮助用户快速复制任何UI界面的网站，利用计算机视觉、机器学习模型等技术，精准分析并提取网页UI元素，生成高度还原的复制品，非常适合设计师和开发者使用。",url:"https://same.new/",icon:"https://kjdaohang.com/media/tool_icons/Same.dev.jpg",logo:"https://kjdaohang.com/media/tool_icons/Same.dev.jpg",tags:"网站复刻,一键拆解网站架构",order:1,is_active:!0,views:25,likes_count:1,created_at:"2025-06-17T20:19:01.004797+08:00",updated_at:"2025-06-17T20:19:53.948641+08:00",desc_md:`### Same.dev

- **开发商**：Same.dev 团队
- **简介**：Same.dev 是一款基于 AI 的 UI 复制工具，利用计算机视觉和机器学习技术，自动分析并提取网页 UI 元素，生成高度还原的界面副本。
- **主要特性**：
  - 一键复制网页 UI 结构与样式
  - 支持多种前端框架输出
  - 智能识别布局与组件
  - 提供代码导出与二次开发
  - 界面简洁，操作便捷
- **适用人群**：前端开发者、UI 设计师、产品经理
- [官网链接](https://same.new/)
`},{id:101,parent_category:15,parent_category_name:"测试工具",sub_category:20,sub_category_name:"测试管理",name:"MantisBT",description:"一款开源的、基于 Web 的缺陷跟踪系统，广泛用于软件开发中的缺陷管理和项目管理",url:"http://www.mantisbt.org/",icon:"https://kjdaohang.com/media/tool_icons/MantisBT.jpg",logo:"https://kjdaohang.com/media/tool_icons/MantisBT.jpg",tags:"缺陷跟踪管理",order:1,is_active:!0,views:25,likes_count:0,created_at:"2025-05-22T09:25:15.370481+08:00",updated_at:"2025-05-26T18:32:55.005908+08:00",desc_md:`### MantisBT

- **开发商**：开源社区
- **简介**：MantisBT 是一款开源、基于 Web 的缺陷跟踪系统，支持缺陷管理、任务分配、项目协作等功能，适合中小型开发团队。
- **主要特性**：
  - 缺陷跟踪与任务分配
  - 多项目与多用户支持
  - 丰富的报表与统计分析
  - 支持插件扩展与第三方集成
  - 简洁易用的 Web 界面
- **适用人群**：开发团队、测试团队、项目管理团队
- [官网链接](http://www.mantisbt.org/)
`},{id:29,parent_category:3,parent_category_name:"AI工具",sub_category:4,sub_category_name:"AI写作",name:"讯飞文书",description:"一款AI公文写作平台，专注于政务、企业、教育。",url:"https://gw.iflydocs.com/",icon:"https://kjdaohang.com/media/tool_icons/default_WKYg14P.png",logo:"https://kjdaohang.com/media/tool_icons/default_WKYg14P.png",tags:"科大讯飞,公文写作",order:1,is_active:!0,views:25,likes_count:0,created_at:"2025-05-21T20:41:56.094681+08:00",updated_at:"2025-05-23T12:09:07.185914+08:00"},{id:343,parent_category:44,parent_category_name:"实用小工具",sub_category:77,sub_category_name:"PPT工具",name:"PPT超级市场",description:"一个专注于提供高质量PPT模板下载和制作服务的综合性平台，提供覆盖多种主题、风格和行业的优质PPT模板。",url:"https://www.pptsupermarket.com/",icon:"https://kjdaohang.com/media/tool_icons/PixPin_2025-06-19_14-13-58.png",logo:"https://kjdaohang.com/media/tool_icons/PixPin_2025-06-19_14-13-58.png",tags:"PPT模板,PPT免费下载",order:1,is_active:!0,views:23,likes_count:0,created_at:"2025-06-19T14:16:00.001598+08:00",updated_at:"2025-06-19T14:16:00.001638+08:00",desc_md:`### PPT超级市场

- **开发商**：PPT超级市场团队
- **简介**：PPT超级市场是一个高质量 PPT 模板下载与定制平台，提供多主题、多风格、多行业的优质模板，支持在线预览和一键下载，适合各类演示场景。
- **主要特性**：
  - 高质量 PPT 模板库
  - 多主题、多行业分类
  - 支持在线预览与下载
  - 提供定制设计服务
  - 持续更新与用户社区
- **适用人群**：职场人士、学生、教师、内容创作者
- [官网链接](https://www.pptsupermarket.com/)
`},{id:340,parent_category:58,parent_category_name:"资源网站",sub_category:75,sub_category_name:"便民查询",name:"术语在线",description:"一款由全国科学技术名词审定委员会主办的专业术语知识服务平台，旨在为用户提供全面、规范、便捷的术语查询与学习服务。",url:"https://www.termonline.cn/",icon:"https://kjdaohang.com/media/tool_icons/154908-5f6314f49b8be.jpg",logo:"https://kjdaohang.com/media/tool_icons/154908-5f6314f49b8be.jpg",tags:"专业术语,常用术语,术语查询",order:1,is_active:!0,views:23,likes_count:0,created_at:"2025-06-19T09:56:18.550489+08:00",updated_at:"2025-06-19T09:56:18.550548+08:00",desc_md:`### 术语在线

- **简介**：术语在线是由全国科学技术名词审定委员会主办的权威术语查询平台，致力于为用户提供标准化、权威的专业术语服务。
- **主要特性**：
  - 覆盖科学、技术、医学、工程等多个领域
  - 提供术语中英文对照、定义、来源等详细信息
  - 支持术语批量查询与导出
  - 持续更新，紧跟学科发展
  - 适合学者、学生、翻译、科研人员等使用
- **适用人群**：科研人员、翻译工作者、学生、专业人士
- [访问术语在线](https://www.termonline.cn/)
`},{id:239,parent_category:23,parent_category_name:"开发工具",sub_category:28,sub_category_name:"静态代码分析",name:"Pylint",description:"一个Python代码分析工具，用于检测代码中的错误、不符合编码规范潜在的问题。",url:"https://pylint.readthedocs.io/en/stable/",icon:"https://kjdaohang.com/media/tool_icons/faker_xcqWFrX.jpg",logo:"https://kjdaohang.com/media/tool_icons/faker_xcqWFrX.jpg",tags:"Python,代码静态扫描",order:1,is_active:!0,views:23,likes_count:0,created_at:"2025-05-22T17:28:04.359930+08:00",updated_at:"2025-05-26T22:38:27.760503+08:00",desc_md:`### Pylint

- **简介**：Pylint 是一款广泛使用的 Python 静态代码分析工具，能够检测代码中的错误、不符合编码规范的问题以及潜在的 bug。它支持自定义规则和插件扩展。
- **主要特性**：
  - 检查语法错误、未使用变量、命名规范等
  - 支持自定义规则和配置
  - 生成详细的报告和评分
  - 可与 CI/CD 流水线集成
  - 支持插件扩展和第三方工具集成
- **适用场景**：适合 Python 开发者、团队代码审查和持续集成环境。
- [官网链接](https://pylint.readthedocs.io/en/stable/)
`},{id:97,parent_category:15,parent_category_name:"测试工具",sub_category:21,sub_category_name:"API测试",name:"Hoppscotch",description:"一款开源的 API 开发与测试工具，支持 REST、GraphQL、WebSocket、gRPC 等多种协议",url:"https://hoppscotch.io/",icon:"https://kjdaohang.com/media/tool_icons/Hoppscotch.png",logo:"https://kjdaohang.com/media/tool_icons/Hoppscotch.png",tags:"接口测试,测试工具",order:1,is_active:!0,views:22,likes_count:0,created_at:"2025-05-22T09:20:10.552917+08:00",updated_at:"2025-05-26T17:51:10.850992+08:00",desc_md:`### Hoppscotch

- **开发商**：开源社区
- **简介**：Hoppscotch 是一款轻量级、开源的 API 开发与测试工具，支持 REST、GraphQL、WebSocket、gRPC 等多种协议。界面极简，响应迅速，适合快速接口调试和团队协作。
- **主要特性**：
  - 支持多种 API 协议
  - 实时请求与响应查看
  - 支持环境变量和请求链路
  - 可导入 Postman 数据
  - 支持团队协作和云同步
- **适用人群**：开发者、测试工程师、API 管理团队
- [官网链接](https://hoppscotch.io/)
`},{id:25,parent_category:3,parent_category_name:"AI工具",sub_category:8,sub_category_name:"AI视频",name:"讯飞绘镜",description:"科大讯飞推出的一款AI视频创作平台，能够将文本描述一键转换为专业级短视频。",url:"https://typemovie.art/#/dashboard",icon:"https://kjdaohang.com/media/tool_icons/10-2502112021560-L.png",logo:"https://kjdaohang.com/media/tool_icons/10-2502112021560-L.png",tags:"AI视频,科大讯飞",order:1,is_active:!0,views:22,likes_count:0,created_at:"2025-05-21T18:52:22.362271+08:00",updated_at:"2025-05-24T08:15:13.740817+08:00"},{id:62,parent_category:3,parent_category_name:"AI工具",sub_category:8,sub_category_name:"AI视频",name:"秒创",description:"原名一帧秒创，是一个基于AIGC引擎的智能AI内容生成平台",url:"https://aigc.yizhentv.com/home/app",icon:"https://kjdaohang.com/media/tool_icons/img_652e2ddfb83ad.png",logo:"https://kjdaohang.com/media/tool_icons/img_652e2ddfb83ad.png",tags:"AI视频,数字人",order:1,is_active:!0,views:21,likes_count:0,created_at:"2025-05-21T22:02:30.565667+08:00",updated_at:"2025-05-24T08:19:26.836110+08:00"},{id:223,parent_category:15,parent_category_name:"测试工具",sub_category:21,sub_category_name:"API测试",name:"SoapUI",description:"一款专注于 Web 服务测试 的工具，主要用于测试 SOAP 协议 和 RESTful API 的功能、性能和安全性",url:"https://www.soapui.org/",icon:"https://kjdaohang.com/media/tool_icons/SoapUI.png",logo:"https://kjdaohang.com/media/tool_icons/SoapUI.png",tags:"Web 服务测试, SOAP",order:1,is_active:!0,views:20,likes_count:0,created_at:"2025-05-22T16:39:02.686899+08:00",updated_at:"2025-05-26T17:45:38.687463+08:00",desc_md:`### SoapUI

- **开发商**：SmartBear Software
- **简介**：SoapUI 是一款专业的 Web 服务测试工具，支持 SOAP、REST 等协议的功能、性能和安全性测试。适合企业级服务接口测试和自动化测试。
- **主要特性**：
  - 支持 SOAP、RESTful API 测试
  - 可视化请求构造与断言
  - 支持自动化测试与数据驱动
  - 性能测试与安全测试功能
  - 丰富的插件和脚本扩展
- **适用人群**：测试工程师、开发者、企业级测试团队
- [官网链接](https://www.soapui.org/)
`},{id:72,parent_category:3,parent_category_name:"AI工具",sub_category:7,sub_category_name:"AI音频",name:"网易天音",description:"一款由网易公司推出的一站式AI音乐创作工具，支持自动编曲和作词。",url:"https://tianyin.music.163.com/#/",icon:"https://kjdaohang.com/media/tool_icons/VhG1VUOdPBkccqlfysKZG.png",logo:"https://kjdaohang.com/media/tool_icons/VhG1VUOdPBkccqlfysKZG.png",tags:"网易,AI音乐创作",order:1,is_active:!0,views:18,likes_count:0,created_at:"2025-05-21T22:43:15.683269+08:00",updated_at:"2025-05-23T21:03:03.050890+08:00"},{id:61,parent_category:3,parent_category_name:"AI工具",sub_category:8,sub_category_name:"AI视频",name:"Runway",description:"由 Runway Research 于 2018 年推出的尖端 AI 视频生成平台",url:"https://runwayml.com/",icon:"https://kjdaohang.com/media/tool_icons/19c11d273beee9ba9c0213a16052e88c.png",logo:"https://kjdaohang.com/media/tool_icons/19c11d273beee9ba9c0213a16052e88c.png",tags:"AI视频",order:1,is_active:!0,views:18,likes_count:0,created_at:"2025-05-21T21:58:47.800466+08:00",updated_at:"2025-05-24T08:29:23.247510+08:00"},{id:286,parent_category:44,parent_category_name:"实用小工具",sub_category:48,sub_category_name:"表情包",name:"Emoji百宝箱",description:"综合性的Emoji在线工具平台，提供Emoji合成器、猜成语、表情大全、搜索、小红书文案emoji、壁纸制作等多种实用工具",url:"https://emoji6.com/",icon:"https://kjdaohang.com/media/tool_icons/%E7%99%BE%E5%AE%9D%E7%AE%B1.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E7%99%BE%E5%AE%9D%E7%AE%B1.jpg",tags:"Emoji",order:1,is_active:!0,views:16,likes_count:0,created_at:"2025-05-22T19:58:49.151680+08:00",updated_at:"2025-05-27T13:53:09.149343+08:00",desc_md:`### Emoji百宝箱

- **开发商**：Emoji百宝箱团队
- **简介**：Emoji百宝箱是一个集 Emoji 合成、表情大全、成语猜谜、壁纸制作等多功能于一体的综合性在线工具平台，适合表情包爱好者和内容创作者。
- **主要特性**：
  - Emoji 合成器与表情包制作
  - Emoji 猜成语小游戏
  - 丰富的 Emoji 分类与搜索
  - 壁纸与文案生成
  - 持续更新最新 Emoji
- **适用人群**：表情包爱好者、内容创作者、社交用户
- [官网链接](https://emoji6.com/)
`},{id:265,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"Lightly",description:"一款轻量且功能强大的集成开发工具，支持客户端和Cloud IDE两种模式。",url:"https://www.lightlycode.com/python",icon:"https://kjdaohang.com/media/tool_icons/OIP-C.jpg",logo:"https://kjdaohang.com/media/tool_icons/OIP-C.jpg",tags:"轻量级IDE",order:1,is_active:!0,views:16,likes_count:0,created_at:"2025-05-22T18:15:09.920264+08:00",desc_md:`### Lightly

- **简介**：Lightly 是一款轻量级且功能强大的集成开发工具，支持本地客户端和云端 IDE 两种模式。适合 Python、Web、数据分析等多种开发场景。
- **主要特性**：
  - 云端与本地开发切换
  - 多语言支持
  - 简洁高效的界面
- **适用人群**：追求轻量与云端开发体验的用户
- [官网链接](https://www.lightlycode.com/python)`,updated_at:"2025-05-27T08:36:03.519685+08:00"},{id:68,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"ChatPPT",description:"一款由必优科技开发的智能 PPT 生成工具，基于人工智能技术",url:"https://www.chat-ppt.com/",icon:"https://kjdaohang.com/media/tool_icons/default_BKbqq8C.png",logo:"https://kjdaohang.com/media/tool_icons/default_BKbqq8C.png",tags:"PPT自动生成",order:1,is_active:!0,views:16,likes_count:0,created_at:"2025-05-21T22:13:40.352671+08:00",updated_at:"2025-05-24T15:19:07.997934+08:00",desc_md:`### ChatPPT

- **开发商**：必优科技
- **简介**：ChatPPT 是一款基于人工智能技术的 PPT 生成工具，支持根据用户输入的主题、内容自动生成结构清晰、设计美观的演示文稿。
- **主要特性**：
  - AI 自动生成 PPT 内容与结构
  - 丰富的模板与主题风格
  - 支持内容编辑与协作
  - 一键导出多种格式
  - 智能排版与美化
- **适用人群**：职场人士、学生、教师、内容创作者
- [官网链接](https://www.chat-ppt.com/)
`},{id:54,parent_category:3,parent_category_name:"AI工具",sub_category:10,sub_category_name:"AI设计",name:"美图设计室",description:"美图公司推出的一款结合了人工智能技术的在线设计平台",url:"https://www.designkit.com/",icon:"https://kjdaohang.com/media/tool_icons/cc467ebecf0846ebbe45becb0dc794bc.png",logo:"https://kjdaohang.com/media/tool_icons/cc467ebecf0846ebbe45becb0dc794bc.png",tags:"美图,AI设计",order:1,is_active:!0,views:16,likes_count:0,created_at:"2025-05-21T21:30:38.275378+08:00",updated_at:"2025-05-24T10:54:05.387803+08:00",desc_md:`### 美图设计室

- **开发商**：美图公司
- **简介**：美图设计室是一款结合AI技术的在线设计平台，支持图片编辑、海报设计、AI生成等多种场景。
- **主要特性**：
  - AI图片美化与编辑
  - 丰富的设计模板与素材库
  - 一键生成海报、名片、社交媒体图
  - 多端同步与团队协作
  - 简单易用，适合新手
- **适用人群**：设计师、内容创作者、企业用户
- [官网链接](https://www.designkit.com/)
`},{id:155,parent_category:63,parent_category_name:"办公神器",sub_category:66,sub_category_name:"在线翻译",name:"讯飞智能翻译平台",description:"科大讯飞推出的一款高效、准确、稳定可靠的人工智能翻译平台",url:"https://fanyi.xfyun.cn/console/trans/text",icon:"https://kjdaohang.com/media/tool_icons/%E8%AE%AF%E9%A3%9E%E6%99%BA%E8%83%BD%E7%BF%BB%E8%AF%91%E5%B9%B3%E5%8F%B0.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E8%AE%AF%E9%A3%9E%E6%99%BA%E8%83%BD%E7%BF%BB%E8%AF%91%E5%B9%B3%E5%8F%B0.jpg",tags:"科大讯飞,翻译工具",order:1,is_active:!0,views:14,likes_count:0,created_at:"2025-05-22T12:05:24.408962+08:00",updated_at:"2025-05-27T11:17:42.363773+08:00",desc_md:`### 讯飞智能翻译平台

- **开发商**：科大讯飞
- **简介**：讯飞智能翻译平台是科大讯飞推出的AI翻译平台，支持文本、语音、图片等多模态翻译，翻译准确率高，适合多行业应用。
- **主要特性**：
  - 支持文本、语音、图片翻译
  - 多语言、多领域翻译能力
  - 智能语音识别与合成
  - 提供API和SDK，便于集成
  - 支持批量翻译和自定义词库
- **适用人群**：企业用户、开发者、教育行业、跨境业务团队
- [官网链接](https://fanyi.xfyun.cn/console/trans/text)
`},{id:147,parent_category:63,parent_category_name:"办公神器",sub_category:66,sub_category_name:"在线翻译",name:"必应翻译",description:"微软推出的多语言翻译工具，依托微软强大的AI技术和数据资源，提供文本、语音、图片、文档等多模态翻译服务。",url:"https://cn.bing.com/translator/",icon:"https://kjdaohang.com/media/tool_icons/%E5%BF%85%E5%BA%94%E7%BF%BB%E8%AF%91.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E5%BF%85%E5%BA%94%E7%BF%BB%E8%AF%91.jpg",tags:"微软,翻译工具",order:1,is_active:!0,views:14,likes_count:0,created_at:"2025-05-22T11:59:58.550580+08:00",updated_at:"2025-05-27T11:33:44.347548+08:00",desc_md:`### 必应翻译

- **开发商**：微软（Microsoft）
- **简介**：必应翻译是微软推出的多语言翻译平台，支持文本、语音、图片、文档等多模态翻译，依托微软AI技术，翻译准确高效。
- **主要特性**：
  - 支持多语言文本、语音、图片、文档翻译
  - 实时对话和拍照翻译
  - 提供API和批量翻译服务
  - 跨平台支持，界面简洁
- **适用人群**：学生、职场人士、企业用户、开发者
- [官网链接](https://cn.bing.com/translator/)
`},{id:71,parent_category:3,parent_category_name:"AI工具",sub_category:7,sub_category_name:"AI音频",name:"听脑AI",description:"听脑AI是一款智能语音助手，支持录音转文字、AI总结与文字生成配音，适用于会议、课堂以及内容创作。",url:"https://itingnao.com/",icon:"https://kjdaohang.com/media/tool_icons/default_39mvxTf.png",logo:"https://kjdaohang.com/media/tool_icons/default_39mvxTf.png",tags:"AI语音助手",order:1,is_active:!0,views:14,likes_count:0,created_at:"2025-05-21T22:20:05.379235+08:00",updated_at:"2025-05-23T21:00:01.146718+08:00"},{id:366,parent_category:40,parent_category_name:"求职面试",sub_category:41,sub_category_name:"求职求聘",name:"脉脉",description:"脉脉是一款专注于职场社交的移动应用，于2013年10月上线。其核心定位是帮助职场人士拓展人脉、获取职业机会、提升职场影响力。",url:"https://maimai.cn/",icon:"https://kjdaohang.com/media/tool_icons/t0172230cf43c930c97.png",logo:"https://kjdaohang.com/media/tool_icons/t0172230cf43c930c97.png",tags:"内推渠道,职场社交",order:1,is_active:!0,views:13,likes_count:0,created_at:"2025-06-30T09:21:52.366195+08:00",updated_at:"2025-06-30T09:43:27.385767+08:00",desc_md:`### 脉脉

- **开发商**：北京淘友天下科技发展有限公司
- **简介**：脉脉是国内领先的职场社交平台，致力于帮助职场人士拓展人脉、获取内推机会、交流行业信息。平台支持实名交流、匿名爆料、职位内推、职业成长等多种功能。
- **主要特性**：
  - 职场实名社交与匿名交流
  - 内推职位与求职机会
  - 行业圈子与话题讨论
  - 职业成长课程与资讯
  - 移动端体验优异
- **适用人群**：职场人士、求职者、行业专家
- [官网链接](https://maimai.cn/)
`},{id:237,parent_category:23,parent_category_name:"开发工具",sub_category:28,sub_category_name:"静态代码分析",name:"PMD",description:"专注于Java的轻量级工具，可检测复制粘贴错误、未使用变量和复杂代码，支持自定义规则和IDE插件",url:"https://pmd.github.io/",icon:"https://kjdaohang.com/media/tool_icons/pmd.png",logo:"https://kjdaohang.com/media/tool_icons/pmd.png",tags:"Java,静态代码扫码",order:1,is_active:!0,views:13,likes_count:0,created_at:"2025-05-22T17:26:32.099116+08:00",updated_at:"2025-05-26T22:33:12.566882+08:00",desc_md:`### PMD

- **简介**：PMD 是一款专注于 Java 语言的开源静态代码分析工具，能够检测常见的代码问题，如未使用的变量、空的 catch 块、复杂的表达式等。支持自定义规则和多种 IDE 插件。
- **主要特性**：
  - 检查代码规范、潜在 bug 和代码异味
  - 支持自定义规则和规则集
  - 提供丰富的内置规则
  - 可与 Eclipse、IntelliJ IDEA 等主流 IDE 集成
  - 支持 XML、CSV、HTML 等多种报告格式
- **适用场景**：适合 Java 开发者、团队代码规范管理和持续集成。
- [官网链接](https://pmd.github.io/)
`},{id:388,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"AI好记",description:"AI好记（原名为“叮当好记”）是一款基于AI技术的音视频处理工具，主要功能是将音视频内容转化为文字稿、总结、思维导图等多种形式，旨在帮助用户高效整理信息、提升学习和工作效率。无论是学术研究、职场协作，还是内容创作，AI好记都能提供强大的支持。",url:"https://aihaoji.com/zh",icon:"https://kjdaohang.com/media/tool_icons/1741915314-aihaoji.png",logo:"https://kjdaohang.com/media/tool_icons/1741915314-aihaoji.png",tags:"音频处理,音频转文本",order:1,is_active:!0,views:12,likes_count:0,created_at:"2025-07-17T11:17:17.099047+08:00",updated_at:"2025-07-17T11:25:26.929605+08:00",desc_md:`### AI好记

- **开发商**：AI好记团队
- **简介**：AI好记是一款基于 AI 技术的音视频内容处理工具，支持音视频转文字、自动总结、思维导图生成等，帮助用户高效整理和管理信息。
- **主要特性**：
  - 音视频内容自动转文字稿
  - 智能总结与要点提取
  - 思维导图自动生成
  - 支持多种导出格式
  - 数据安全与隐私保护
- **适用人群**：学生、职场人士、内容创作者、研究人员
- [官网链接](https://aihaoji.com/zh)
`},{id:323,parent_category:23,parent_category_name:"开发工具",sub_category:25,sub_category_name:"代码协作",name:"Jsfiddle",description:"一个Web开发人员的练习场，可在线编辑和测试 HTML、CSS、JavaScript代码片段。",url:"https://jsfiddle.net/",icon:"https://kjdaohang.com/media/tool_icons/jsfiddle.png",logo:"https://kjdaohang.com/media/tool_icons/jsfiddle.png",tags:"Web前端,在线代码编辑器",order:1,is_active:!0,views:12,likes_count:0,created_at:"2025-06-10T09:24:58.220035+08:00",updated_at:"2025-06-10T09:24:58.220074+08:00",desc_md:`### Jsfiddle

- **简介**：Jsfiddle 是一个面向 Web 开发者的在线代码编辑和测试平台，支持 HTML、CSS、JavaScript 代码片段的实时编写和预览。
- **主要特性**：
  - 实时编辑和预览代码
  - 支持多种前端框架和库
  - 便捷的代码分享和嵌入
  - 支持团队协作和代码版本管理
  - 丰富的社区代码示例
- **适用场景**：适合前端开发、代码实验、教学演示和技术分享。
- [官网链接](https://jsfiddle.net/)
`},{id:207,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"AutoGLM沉思",description:"由智谱科技研发的全新AI智能体，被誉为国内首个具备深度思考能力的自主智能体。",url:"https://autoglm-research.zhipuai.cn/#get_started",icon:"https://kjdaohang.com/media/tool_icons/default_rF2M4id.png",logo:"https://kjdaohang.com/media/tool_icons/default_rF2M4id.png",tags:"智谱科技,AutoGLM,AI智能体",order:1,is_active:!0,views:12,likes_count:0,created_at:"2025-05-22T15:20:28.338341+08:00",updated_at:"2025-05-24T12:13:15.713137+08:00",desc_md:`### AutoGLM沉思

- **开发商**：智谱科技
- **简介**：AutoGLM沉思是国内首个具备深度思考能力的自主AI智能体，支持复杂任务规划、自动推理与多场景应用。
- **主要特性**：
  - 深度思考与自主推理能力
  - 多场景任务自动化
  - 支持自定义扩展与API集成
  - 持续进化与自我优化
  - 企业级安全与隐私保护
- **适用人群**：企业用户、开发者、AI研究者
- [官网链接](https://autoglm-research.zhipuai.cn/#get_started)
`},{id:178,parent_category:63,parent_category_name:"办公神器",sub_category:69,sub_category_name:"在线文档",name:"石墨文档",description:"一款在线协作办公平台，支持多人实时协作编辑文档、表格、幻灯片等",url:"https://shimo.im/",icon:"https://kjdaohang.com/media/tool_icons/%E7%9F%B3%E5%A2%A8%E6%96%87%E6%A1%A3.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E7%9F%B3%E5%A2%A8%E6%96%87%E6%A1%A3.jpg",tags:"在线文档",order:1,is_active:!0,views:12,likes_count:0,created_at:"2025-05-22T13:58:44.193649+08:00",updated_at:"2025-05-27T10:22:04.972212+08:00",desc_md:`### 石墨文档

- **开发商**：石墨文档团队
- **简介**：石墨文档是一款支持多人实时协作的在线办公平台，涵盖文档、表格、幻灯片等多种内容类型，适合团队协作与远程办公。
- **主要特性**：
  - 多人实时协作编辑
  - 支持文档、表格、幻灯片等多格式
  - 云端存储与版本管理
  - 丰富的模板和插件支持
  - 权限管理与团队协作
- **适用人群**：企业团队、项目管理者、远程办公用户
- [官网链接](https://shimo.im/)
`},{id:165,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"讯飞星辰Agent平台",description:"新一代智能体Agent，由科大讯飞推出的一款专注于智能体开发的平台。",url:"https://agent.xfyun.cn/home",icon:"https://kjdaohang.com/media/tool_icons/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240306180234.png",logo:"https://kjdaohang.com/media/tool_icons/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240306180234.png",tags:"科大讯飞,AI智能体",order:1,is_active:!0,views:12,likes_count:0,created_at:"2025-05-22T12:39:06.311856+08:00",updated_at:"2025-05-24T11:52:41.965020+08:00",desc_md:`### 讯飞星辰Agent平台

- **开发商**：科大讯飞
- **简介**：讯飞星辰Agent平台是新一代智能体开发平台，支持多模型集成、场景化应用和自动化办公。
- **主要特性**：
  - 多模型智能体开发与集成
  - 场景化任务自动化
  - 可视化工作流与API支持
  - 企业级安全与权限管理
  - 持续更新与生态扩展
- **适用人群**：企业开发者、AI创业团队、自动化办公用户
- [官网链接](https://agent.xfyun.cn/home)
`},{id:47,parent_category:3,parent_category_name:"AI工具",sub_category:9,sub_category_name:"AI搜索",name:"天工AI",description:"由昆仑万维开发的多功能智能助手，集成搜索、对话、写作、文档分析、绘画、PPT制作等多种功能",url:"https://www.tiangong.cn/",icon:"https://kjdaohang.com/media/tool_icons/img_66561181b964f.png",logo:"https://kjdaohang.com/media/tool_icons/img_66561181b964f.png",tags:"昆仑万维,AI搜索",order:1,is_active:!0,views:12,likes_count:0,created_at:"2025-05-21T21:17:22.124758+08:00",updated_at:"2025-05-24T10:11:55.864262+08:00"},{id:140,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"文心智能体平台",description:"百度推出的一款基于文心大模型的智能体构建平台",url:"https://agents.baidu.com/center",icon:"https://kjdaohang.com/media/tool_icons/1713698461-43619585db1a4d445bf22ed0ab8a9f43_favicon.png",logo:"https://kjdaohang.com/media/tool_icons/1713698461-43619585db1a4d445bf22ed0ab8a9f43_favicon.png",tags:"百度,AI智能体",order:1,is_active:!0,views:11,likes_count:0,created_at:"2025-05-22T11:42:13.489023+08:00",updated_at:"2025-05-24T11:38:47.641568+08:00",desc_md:`### 文心智能体平台

- **开发商**：百度
- **简介**：文心智能体平台是百度推出的基于文心大模型的智能体构建平台，支持多场景智能体开发与自动化办公。
- **主要特性**：
  - 基于文心大模型的智能体开发
  - 多场景任务自动化
  - 可视化配置与API集成
  - 企业级安全与权限管理
  - 持续更新与生态扩展
- **适用人群**：企业开发者、AI创业团队、自动化办公用户
- [官网链接](https://agents.baidu.com/center)
`},{id:273,parent_category:35,parent_category_name:"运维工具",sub_category:38,sub_category_name:"CICD",name:"Travis CI",description:"一款 托管型持续集成（CI）服务，专为代码托管平台（如 GitHub、Bitbucket）设计",url:"https://travis-ci.com",icon:"https://kjdaohang.com/media/tool_icons/Travis_CI.jpg",logo:"https://kjdaohang.com/media/tool_icons/Travis_CI.jpg",tags:"持续集成,CICD",order:1,is_active:!0,views:10,likes_count:0,created_at:"2025-05-22T18:26:28.527982+08:00",updated_at:"2025-05-27T16:33:08.425357+08:00",desc_md:`### Travis CI

- **开发商**：Travis CI GmbH
- **简介**：Travis CI 是一款托管型持续集成服务，专为 GitHub、Bitbucket 等代码托管平台设计，支持自动化构建、测试和部署。
- **主要特性**：
  - 与 GitHub、Bitbucket 等平台集成
  - 支持多语言和多平台
  - 自动化测试和部署
  - 配置简单，基于 .travis.yml 文件
  - 丰富的社区和文档支持
- **适用人群**：开源项目、开发团队、自动化测试工程师
- [官网链接](https://travis-ci.com)
`},{id:201,parent_category:3,parent_category_name:"AI工具",sub_category:9,sub_category_name:"AI搜索",name:"C知道",description:"由开发者社区CSDN推出的一款AI技术问答工具，专为程序员和开发者设计。",url:"https://ai.csdn.net/",icon:"https://kjdaohang.com/media/tool_icons/chemometall-3d-letter-c5686.logowik.com.png",logo:"https://kjdaohang.com/media/tool_icons/chemometall-3d-letter-c5686.logowik.com.png",tags:"CSDN,程序员",order:1,is_active:!0,views:10,likes_count:0,created_at:"2025-05-22T15:06:36.008739+08:00",updated_at:"2025-05-24T10:19:57.318926+08:00"},{id:149,parent_category:63,parent_category_name:"办公神器",sub_category:66,sub_category_name:"在线翻译",name:"阿里翻译",description:"阿里巴巴达摩院推出的多领域多语种的在线机器翻译",url:"https://translate.alibaba.com/",icon:"https://kjdaohang.com/media/tool_icons/alfanyi-2.png",logo:"https://kjdaohang.com/media/tool_icons/alfanyi-2.png",tags:"阿里巴巴,翻译工具",order:1,is_active:!0,views:9,likes_count:0,created_at:"2025-05-22T12:01:20.159173+08:00",updated_at:"2025-05-27T11:29:37.538055+08:00",desc_md:`### 阿里翻译

- **开发商**：阿里巴巴达摩院
- **简介**：阿里翻译是阿里巴巴达摩院推出的多领域、多语种在线机器翻译平台，支持文本、文档、图片等多种翻译方式，适合企业和个人用户。
- **主要特性**：
  - 多语种、多领域翻译
  - 支持文本、文档、图片翻译
  - 高效准确的AI翻译引擎
  - 提供API和批量翻译服务
  - 支持自定义词库和术语
- **适用人群**：企业用户、开发者、跨境电商、翻译工作者
- [官网链接](https://translate.alibaba.com/)
`},{id:126,parent_category:3,parent_category_name:"AI工具",sub_category:7,sub_category_name:"AI音频",name:"魔音工坊",description:"由出门问问推出的一款一站式AI音频创作平台",url:"https://moyin.com/",icon:"https://kjdaohang.com/media/tool_icons/20241225040018834.png",logo:"https://kjdaohang.com/media/tool_icons/20241225040018834.png",tags:"AI音频",order:1,is_active:!0,views:9,likes_count:0,created_at:"2025-05-22T11:02:59.621414+08:00",updated_at:"2025-05-23T21:06:08.851820+08:00"},{id:297,parent_category:44,parent_category_name:"实用小工具",sub_category:47,sub_category_name:"图片编辑",name:"resize-image",description:"用于快速调整图片的分辨率、尺寸或比例，支持批量处理和多种格式转换。",url:"https://www.iloveimg.com/resize-image",icon:"https://kjdaohang.com/media/tool_icons/resize_image.png",logo:"https://kjdaohang.com/media/tool_icons/resize_image.png",tags:"图片尺寸修改",order:1,is_active:!0,views:8,likes_count:0,created_at:"2025-05-22T20:46:30.111233+08:00",updated_at:"2025-05-27T14:05:19.218275+08:00"},{id:288,parent_category:44,parent_category_name:"实用小工具",sub_category:48,sub_category_name:"表情包",name:"Emojiu",description:"全面的emoji工具和资源中心，提供丰富的emoji分类，简化用户对表情符号的搜索和使用过程。",url:"https://emojiu.cc/",icon:"https://kjdaohang.com/media/tool_icons/emoji1.jpg",logo:"https://kjdaohang.com/media/tool_icons/emoji1.jpg",tags:"emoji",order:1,is_active:!0,views:8,likes_count:0,created_at:"2025-05-22T20:03:15.192150+08:00",updated_at:"2025-05-27T13:48:03.800550+08:00",desc_md:`### Emojiu

- **开发商**：Emojiu 团队
- **简介**：Emojiu 是一个全面的 Emoji 工具和资源中心，提供丰富的 Emoji 分类、搜索、复制和组合功能，帮助用户高效查找和使用表情符号，适合日常沟通和内容创作。
- **主要特性**：
  - 丰富的 Emoji 分类与检索
  - 一键复制与组合
  - 支持 Emoji 组合创作
  - 持续更新最新 Emoji
  - 界面简洁，操作便捷
- **适用人群**：社交用户、内容创作者、设计师
- [官网链接](https://emojiu.cc/)
`},{id:276,parent_category:35,parent_category_name:"运维工具",sub_category:38,sub_category_name:"CICD",name:"GitHub Actions",description:"GitHub 提供的一项强大的持续集成（CI）和持续交付（CD）服务。",url:"https://github.com/features/actions",icon:"https://kjdaohang.com/media/tool_icons/github_BozuBMQ.jpg",logo:"https://kjdaohang.com/media/tool_icons/github_BozuBMQ.jpg",tags:"github,持续集成",order:1,is_active:!0,views:8,likes_count:0,created_at:"2025-05-22T18:29:41.294758+08:00",updated_at:"2025-05-27T10:04:37.351883+08:00",desc_md:`### GitHub Actions

- **开发商**：GitHub
- **简介**：GitHub Actions 是 GitHub 的 CI/CD 平台，允许用户在仓库内直接创建自动化工作流，实现持续集成、持续部署和自动化运维。
- **主要特性**：
  - 与 GitHub 生态无缝集成
  - 支持多种触发事件和条件
  - 丰富的 Action 组件和社区支持
  - 可视化工作流和实时日志
- **适用人群**：开发者、自动化测试团队、DevOps 工程师
- [官网链接](https://github.com/features/actions)
`},{id:285,parent_category:44,parent_category_name:"实用小工具",sub_category:62,sub_category_name:"二维码制作",name:"汉码云集",description:"一款免费二维码活码生成器，快速为文字、网址、图片、名片等生成静态或动态二维码。",url:"https://tool.hprt.com.cn/ErWeiMa/",icon:"https://kjdaohang.com/media/tool_icons/%E6%B1%89%E7%A0%81%E4%BA%91%E9%9B%86.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E6%B1%89%E7%A0%81%E4%BA%91%E9%9B%86.jpg",tags:"二维码",order:1,is_active:!0,views:7,likes_count:0,created_at:"2025-05-22T19:54:14.875880+08:00",updated_at:"2025-05-27T14:45:18.613842+08:00",desc_md:`### 汉码云集

- **开发商**：汉码云集团队
- **简介**：汉码云集是一款免费二维码活码生成平台，支持文字、网址、图片、名片等多种内容的静态和动态二维码生成。平台操作简便，适合个人和企业用户日常二维码需求。
- **主要特性**：
  - 多类型二维码生成（文字、网址、图片、名片等）
  - 静态二维码与动态活码
  - 免费使用，无需注册
  - 支持二维码美化与定制
  - 简单易用，快速生成
- **适用人群**：个人用户、企业用户、社群运营者
- [官网链接](https://tool.hprt.com.cn/ErWeiMa/)
`},{id:243,parent_category:23,parent_category_name:"开发工具",sub_category:28,sub_category_name:"静态代码分析",name:"P3C",description:"阿里巴巴基于《阿里巴巴 Java 开发手册》推出的 Java 代码规范检查插件",url:"https://github.com/alibaba/p3c",icon:"https://kjdaohang.com/media/tool_icons/P3C.jpg",logo:"https://kjdaohang.com/media/tool_icons/P3C.jpg",tags:"阿里巴巴,静态代码扫码",order:1,is_active:!0,views:7,likes_count:0,created_at:"2025-05-22T17:35:14.450925+08:00",updated_at:"2025-05-26T22:50:14.019927+08:00",desc_md:`### P3C

- **简介**：P3C（Alibaba Java Coding Guidelines Plugin）是阿里巴巴基于《阿里巴巴 Java 开发手册》推出的 Java 代码规范检查插件，帮助开发者自动检测和修复不符合规范的代码。
- **主要特性**：
  - 内置阿里巴巴 Java 开发手册全部规范
  - 支持 IntelliJ IDEA、Eclipse 等主流 IDE
  - 实时检测并提示代码规范问题
  - 支持自动修复部分问题
  - 可自定义规则和配置
- **适用场景**：适合 Java 开发团队、企业级项目代码规范统一。
- [官网链接](https://github.com/alibaba/p3c)
`},{id:238,parent_category:23,parent_category_name:"开发工具",sub_category:28,sub_category_name:"静态代码分析",name:"Checkstyle",description:"一款开源的静态代码分析工具，主要用于检查 Java 代码是否符合特定的编码规范",url:"https://checkstyle.org/",icon:"https://kjdaohang.com/media/tool_icons/Checkstyle.png",logo:"https://kjdaohang.com/media/tool_icons/Checkstyle.png",tags:"Java,静态代码扫码",order:1,is_active:!0,views:7,likes_count:0,created_at:"2025-05-22T17:27:26.774372+08:00",updated_at:"2025-05-26T22:35:51.106343+08:00",desc_md:`### Checkstyle

- **简介**：Checkstyle 是一款开源的 Java 静态代码分析工具，主要用于检查代码是否符合特定的编码规范和风格指南。支持自定义规则和多种报告格式。
- **主要特性**：
  - 检查命名规范、缩进、注释等编码风格
  - 支持自定义规则和配置文件
  - 可与 Maven、Gradle、Ant 等构建工具集成
  - 提供详细的报告和统计分析
  - 支持 Eclipse、IntelliJ IDEA 等 IDE 插件
- **适用场景**：适合 Java 项目代码规范统一、团队协作和持续集成。
- [官网链接](https://checkstyle.org/)
`},{id:203,parent_category:3,parent_category_name:"AI工具",sub_category:9,sub_category_name:"AI搜索",name:"百度AI搜索",description:"百度推出的一款集成了先进AI技术的智能搜索引擎",url:"https://chat.baidu.com/search",icon:"https://kjdaohang.com/media/tool_icons/1740157650-%E7%99%BE%E5%BA%A6AI%E6%90%9C%E7%B4%A2.png",logo:"https://kjdaohang.com/media/tool_icons/1740157650-%E7%99%BE%E5%BA%A6AI%E6%90%9C%E7%B4%A2.png",tags:"百度,AI搜索",order:1,is_active:!0,views:7,likes_count:0,created_at:"2025-05-22T15:09:38.179395+08:00",updated_at:"2025-05-24T10:27:11.770548+08:00"},{id:168,parent_category:44,parent_category_name:"实用小工具",sub_category:62,sub_category_name:"二维码制作",name:"微微二维码",description:"一款功能强大的在线二维码生成与管理工具。",url:"https://www.wwei.cn/",icon:"https://kjdaohang.com/media/tool_icons/%E5%BE%AE%E5%BE%AE%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E5%BE%AE%E5%BE%AE%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg",tags:"在线二维码生成",order:1,is_active:!0,views:7,likes_count:0,created_at:"2025-05-22T12:44:08.929674+08:00",updated_at:"2025-05-27T14:32:20.549062+08:00",desc_md:`### 微微二维码

- **开发商**：微微二维码团队
- **简介**：微微二维码是一款集二维码生成、管理、美化于一体的在线工具，支持文本、网址、名片、文件等多种二维码类型，适合个人和企业用户进行二维码推广和管理。
- **主要特性**：
  - 多类型二维码生成
  - 二维码美化与自定义样式
  - 支持批量生成与导出
  - 二维码管理与统计
  - 操作简单，界面友好
- **适用人群**：个人用户、企业用户、市场营销人员
- [官网链接](https://www.wwei.cn/)
`},{id:324,parent_category:23,parent_category_name:"开发工具",sub_category:25,sub_category_name:"代码协作",name:"Codesandbox",description:"一个免费的在线编辑器，用于快速 Web 开发，除了支持前端的所有语言以及框架以外还支持docker容器、Python等后端语言。",url:"https://codesandbox.io/",icon:"https://kjdaohang.com/media/tool_icons/logo.jpg",logo:"https://kjdaohang.com/media/tool_icons/logo.jpg",tags:"在线代码编辑器",order:1,is_active:!0,views:6,likes_count:0,created_at:"2025-06-10T09:32:15.053636+08:00",updated_at:"2025-06-10T09:32:15.053690+08:00",desc_md:`### Codesandbox

- **简介**：Codesandbox 是一款免费的在线代码编辑器和开发环境，支持前端主流框架和部分后端语言（如 Node.js、Python、Docker 容器等）。
- **主要特性**：
  - 支持多种前端和后端开发语言
  - 实时预览和自动保存
  - 丰富的模板和社区项目
  - 支持在线协作和代码分享
  - 集成云端部署和环境管理
- **适用场景**：适合 Web 开发、在线教学、代码实验和团队协作。
- [官网链接](https://codesandbox.io/)
`},{id:291,parent_category:44,parent_category_name:"实用小工具",sub_category:47,sub_category_name:"图片编辑",name:"做好图",description:"在线图片分割，常用于短视频制作3联屏封面",url:"http://www.zuohaotu.com/cut-image.aspx",icon:"https://kjdaohang.com/media/tool_icons/%E5%81%9A%E5%A5%BD%E5%9B%BE.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E5%81%9A%E5%A5%BD%E5%9B%BE.jpg",tags:"制作三联屏封面",order:1,is_active:!0,views:6,likes_count:0,created_at:"2025-05-22T20:15:02.164488+08:00",updated_at:"2025-05-29T19:06:02.619306+08:00"},{id:182,parent_category:63,parent_category_name:"办公神器",sub_category:69,sub_category_name:"在线文档",name:"钉钉文档",description:"钉钉文档是阿里巴巴集团钉钉出品的企业协同办公套件, 包含文档、表格、脑图等在线创作工具。",url:"https://docs.dingtalk.com/",icon:"https://kjdaohang.com/media/tool_icons/%E9%92%89%E9%92%89%E6%96%87%E6%A1%A3.png",logo:"https://kjdaohang.com/media/tool_icons/%E9%92%89%E9%92%89%E6%96%87%E6%A1%A3.png",tags:"阿里巴巴,在线文档",order:1,is_active:!0,views:6,likes_count:0,created_at:"2025-05-22T14:02:42.220851+08:00",updated_at:"2025-05-27T10:28:44.565284+08:00",desc_md:`### 钉钉文档

- **开发商**：阿里巴巴集团（钉钉）
- **简介**：钉钉文档是钉钉推出的企业级协同办公套件，支持文档、表格、脑图等多种内容的在线创作与协作。
- **主要特性**：
  - 多人实时协作编辑
  - 支持文档、表格、脑图等多格式
  - 云端存储与权限管理
  - 丰富的模板与插件
  - 与钉钉生态无缝集成
- **适用人群**：企业团队、项目管理者、远程办公用户
- [官网链接](https://docs.dingtalk.com/)
`},{id:166,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"Pi智能演示文档",description:"一款由AI驱动的演示文档生成工具。",url:"https://pi.deepvinci.tech/",icon:"https://kjdaohang.com/media/tool_icons/1-241209120634A0.png",logo:"https://kjdaohang.com/media/tool_icons/1-241209120634A0.png",tags:"PPT自动生成",order:1,is_active:!0,views:6,likes_count:0,created_at:"2025-05-22T12:40:55.801995+08:00",updated_at:"2025-05-24T14:48:23.246154+08:00",desc_md:`### Pi智能演示文档

- **开发商**：Pi智能团队
- **简介**：Pi智能演示文档是一款 AI 驱动的演示文档生成工具，支持根据用户输入的主题和内容自动生成结构清晰、设计美观的 PPT 或演示文档。
- **主要特性**：
  - AI 自动生成演示文稿内容与结构
  - 丰富的模板与主题风格
  - 支持内容编辑与协作
  - 一键导出多种格式
  - 智能排版与美化
- **适用人群**：职场人士、学生、教师、内容创作者
- [官网链接](https://pi.deepvinci.tech/)
`},{id:278,parent_category:63,parent_category_name:"办公神器",sub_category:70,sub_category_name:"问卷表单",name:"腾讯问卷",description:"腾讯公司推出的免费、专业的问卷调查系统，简单好用，无需复杂的操作，只要利用拖拉、点选等方式即可轻松创建。",url:"https://wj.qq.com/",icon:"https://kjdaohang.com/media/tool_icons/%E8%85%BE%E8%AE%AF%E9%97%AE%E5%8D%B7.png",logo:"https://kjdaohang.com/media/tool_icons/%E8%85%BE%E8%AE%AF%E9%97%AE%E5%8D%B7.png",tags:"腾讯,问卷调查",order:1,is_active:!0,views:5,likes_count:0,created_at:"2025-05-22T18:34:57.161589+08:00",updated_at:"2025-05-27T10:14:51.151864+08:00",desc_md:`### 腾讯问卷

- **开发商**：腾讯
- **简介**：腾讯问卷是一款免费、专业的在线问卷调查系统，支持拖拽式设计、数据收集与分析，适合企业和个人用户。
- **主要特性**：
  - 拖拽式问卷设计
  - 多种题型与逻辑设置
  - 实时数据统计与分析
  - 多渠道发布与回收
  - 数据导出与可视化报告
- **适用人群**：企业、教育机构、市场调研员、个人用户
- [官网链接](https://wj.qq.com/)
`},{id:248,parent_category:23,parent_category_name:"开发工具",sub_category:25,sub_category_name:"代码协作",name:"Gitea",description:"一款轻量级的 DevOps 平台软件，提供类似 GitHub 的功能",url:"https://gitea.io/",icon:"https://kjdaohang.com/media/tool_icons/Gitea.png",logo:"https://kjdaohang.com/media/tool_icons/Gitea.png",tags:"DevOps",order:1,is_active:!0,views:4,likes_count:0,created_at:"2025-05-22T17:47:58.671193+08:00",updated_at:"2025-05-27T07:42:42.281417+08:00",desc_md:`### Gitea

- **简介**：Gitea 是一款轻量级的开源 DevOps 平台，提供类似 GitHub 的代码托管、协作和项目管理功能，适合自部署和私有化需求。
- **主要特性**：
  - 轻量级、易于部署和维护
  - 支持 Git 仓库托管和权限管理
  - 项目管理、代码审查和 Issue 跟踪
  - 支持 CI/CD 集成和 Webhook
  - 丰富的插件和 API 扩展
- **适用场景**：适合中小企业、团队私有化部署和 DevOps 流程。
- [官网链接](https://gitea.io/)
`},{id:200,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"华为小艺",description:"华为公司推出的一款智能语音助手。",url:"https://xiaoyi.huawei.com/chat/",icon:"https://kjdaohang.com/media/tool_icons/default_EDB5MLs.png",logo:"https://kjdaohang.com/media/tool_icons/default_EDB5MLs.png",tags:"华为,AI智能助手",order:1,is_active:!0,views:4,likes_count:0,created_at:"2025-05-22T14:59:36.163580+08:00",updated_at:"2025-05-24T17:11:34.791518+08:00",desc_md:`### 华为小艺

- **开发商**：华为
- **简介**：华为小艺是华为推出的智能语音助手，支持语音识别、智能问答、日程管理、设备控制等多种功能，深度集成于华为生态。
- **主要特性**：
  - 智能语音识别与自然语言理解
  - 日程提醒、信息查询、设备控制
  - 多设备协同与生态互联
  - 支持多语言和方言
  - 持续升级与个性化定制
- **适用人群**：华为设备用户、智能家居用户、职场人士
- [官网链接](https://xiaoyi.huawei.com/chat/)
`},{id:132,parent_category:3,parent_category_name:"AI工具",sub_category:10,sub_category_name:"AI设计",name:"创客贴",description:"极简好用的智能在线设计软件，在线图片编辑器，免费使用。",url:"https://www.chuangkit.com/",icon:"https://kjdaohang.com/media/tool_icons/default_6llNHVT.png",logo:"https://kjdaohang.com/media/tool_icons/default_6llNHVT.png",tags:"AI设计",order:1,is_active:!0,views:4,likes_count:0,created_at:"2025-05-22T11:14:53.627023+08:00",updated_at:"2025-05-24T11:03:51.860984+08:00"},{id:43,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"AnythingLLM",description:"一款由 Mintplex Labs 开发的全功能 AI 应用程序，旨在为用户提供强大的本地化 AI 功能",url:"https://anythingllm.com/",icon:"https://kjdaohang.com/media/tool_icons/logo_4kyYFYf.png",logo:"https://kjdaohang.com/media/tool_icons/logo_4kyYFYf.png",tags:"AI客户端,免费",order:1,is_active:!0,views:3,likes_count:0,created_at:"2025-05-21T21:11:04.631892+08:00",updated_at:"2025-05-24T15:37:40.100281+08:00",desc_md:`### AnythingLLM

- **开发商**：Mintplex Labs
- **简介**：AnythingLLM 是一款全功能 AI 应用程序，支持本地化部署和多模型集成，适合对数据隐私和自定义需求较高的用户。
- **主要特性**：
  - 支持本地部署与私有化管理
  - 多模型集成与自由切换
  - 聊天、内容创作、知识管理等多场景支持
  - 开源免费，社区活跃
  - 数据安全与隐私保护
- **适用人群**：开发者、企业用户、AI 爱好者
- [官网链接](https://anythingllm.com/)
`},{id:41,parent_category:3,parent_category_name:"AI工具",sub_category:9,sub_category_name:"AI搜索",name:"知乎直答",description:"知乎推出的一款基于AI技术的智能问答工具，一个智能化的问答系统",url:"https://zhida.zhihu.com/",icon:"https://kjdaohang.com/media/tool_icons/1739880601-v2-79e835d86b026c7c499de99d49906814-tuya.png",logo:"https://kjdaohang.com/media/tool_icons/1739880601-v2-79e835d86b026c7c499de99d49906814-tuya.png",tags:"知乎",order:1,is_active:!0,views:3,likes_count:0,created_at:"2025-05-21T21:07:31.193700+08:00",updated_at:"2025-05-24T08:45:07.457771+08:00"},{id:341,parent_category:3,parent_category_name:"AI工具",sub_category:10,sub_category_name:"AI设计",name:"图怪兽",description:"一款功能强大且易于使用的在线图片编辑服务平台，旨在帮助用户快速完成各种场景下的图片设计。",url:"https://818ps.com/home",icon:"https://kjdaohang.com/media/tool_icons/9cdc65909709165fbbcc81cb841ee680.png",logo:"https://kjdaohang.com/media/tool_icons/9cdc65909709165fbbcc81cb841ee680.png",tags:"图片设计",order:1,is_active:!0,views:2,likes_count:0,created_at:"2025-06-19T12:13:05.982166+08:00",updated_at:"2025-06-19T12:13:05.982231+08:00"},{id:172,parent_category:44,parent_category_name:"实用小工具",sub_category:47,sub_category_name:"图片编辑",name:"SVG 在线编辑器",description:"一款专注于快速创建和编辑SVG图形的在线工具。",url:"https://tool.openi.cn/svg/",icon:"https://kjdaohang.com/media/tool_icons/9557d1-6.png",logo:"https://kjdaohang.com/media/tool_icons/9557d1-6.png",tags:"SVG",order:1,is_active:!0,views:2,likes_count:0,created_at:"2025-05-22T13:41:09.833995+08:00",updated_at:"2025-05-27T14:26:16.141763+08:00"},{id:42,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"360智脑",description:"由360公司开发的一款大型语言模型，具备强大的自然语言处理和生成能力，能够完成多种任务。",url:"https://ai.360.com/",icon:"https://kjdaohang.com/media/tool_icons/09145054bei8.png",logo:"https://kjdaohang.com/media/tool_icons/09145054bei8.png",tags:"奇虎360,AI助手",order:1,is_active:!0,views:2,likes_count:0,created_at:"2025-05-21T21:09:13.441346+08:00",updated_at:"2025-05-24T17:03:25.175279+08:00",desc_md:`### 360智脑

- **开发商**：奇虎360
- **简介**：360智脑是360公司推出的大型语言模型平台，具备强大的自然语言理解与生成能力，支持智能问答、内容创作、办公自动化等多种应用。
- **主要特性**：
  - 智能对话与知识问答
  - 内容创作与写作辅助
  - 多模态内容处理
  - 企业级 API 与开放平台
  - 数据安全与隐私保护
- **适用人群**：企业用户、开发者、内容创作者
- [官网链接](https://ai.360.com/)
`},{id:184,parent_category:63,parent_category_name:"办公神器",sub_category:70,sub_category_name:"问卷表单",name:"飞书问卷",description:"字节跳动旗下飞书平台的一款在线问卷调查工具",url:"https://wenjuan.feishu.cn/project",icon:"https://kjdaohang.com/media/tool_icons/%E9%A3%9E%E4%B9%A6%E9%97%AE%E5%8D%B7.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E9%A3%9E%E4%B9%A6%E9%97%AE%E5%8D%B7.jpg",tags:"字节跳动,在线问卷",order:1,is_active:!0,views:1,likes_count:0,created_at:"2025-05-22T14:07:17.579652+08:00",updated_at:"2025-05-27T10:10:56.655531+08:00",desc_md:`### 飞书问卷

- **开发商**：字节跳动（飞书）
- **简介**：飞书问卷是飞书平台推出的在线问卷调查工具，支持多种题型、逻辑跳转和数据分析，适合企业和团队使用。
- **主要特性**：
  - 多种题型与逻辑设置
  - 实时数据统计与分析
  - 丰富的模板与自定义设计
  - 多渠道发布与回收
  - 数据导出与可视化报告
- **适用人群**：企业、教育机构、团队协作用户
- [官网链接](https://wenjuan.feishu.cn/project)
`},{id:199,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"Gemini",description:"由谷歌DeepMind推出的一款多模态大语言模型，具备强大的跨模态理解与推理能力。",url:"https://gemini.google.com/app",icon:"https://kjdaohang.com/media/tool_icons/google-gemini-icon.png",logo:"https://kjdaohang.com/media/tool_icons/google-gemini-icon.png",tags:"Google,DeepMind,多模态",order:2,is_active:!0,views:361,likes_count:0,created_at:"2025-05-22T14:56:45.041825+08:00",updated_at:"2025-06-02T10:08:50.913489+08:00"},{id:158,parent_category:3,parent_category_name:"AI工具",sub_category:6,sub_category_name:"AI编程",name:"CodeBuddy",description:"腾讯云 AI 代码助手（CodeBuddy）是由腾讯云自研的一款 AI 辅助编程工具。",url:"https://copilot.tencent.com/",icon:"https://kjdaohang.com/media/tool_icons/default_Z8Xl9XC.png",logo:"https://kjdaohang.com/media/tool_icons/default_Z8Xl9XC.png",tags:"AI编程助手,腾讯旗下",order:2,is_active:!0,views:148,likes_count:0,created_at:"2025-05-22T12:17:49.781059+08:00",updated_at:"2025-05-23T18:21:51.488982+08:00"},{id:122,parent_category:3,parent_category_name:"AI工具",sub_category:6,sub_category_name:"AI编程",name:"通义灵码",description:"阿里云推出的智能编码辅助工具，结合最新大模型、智能体、MCP等能力。",url:"https://lingma.aliyun.com/",icon:"https://kjdaohang.com/media/tool_icons/p811119.png",logo:"https://kjdaohang.com/media/tool_icons/p811119.png",tags:"阿里旗下,AI编程助手",order:2,is_active:!0,views:147,likes_count:0,created_at:"2025-05-22T10:52:08.262441+08:00",updated_at:"2025-05-23T18:24:15.752865+08:00"},{id:5,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"智谱清言",description:"由智谱AI和清华大学团队共同开发的一款生成式AI助手，中文处理能力突出。",url:"https://chatglm.cn/",icon:"https://kjdaohang.com/media/tool_icons/zhipu-logo_C4M3eCf.png",logo:"https://kjdaohang.com/media/tool_icons/zhipu-logo_C4M3eCf.png",tags:"AI助手,ChatGLM",order:2,is_active:!0,views:99,likes_count:0,created_at:"2025-05-21T12:29:08.370564+08:00",updated_at:"2025-06-02T10:08:33.032848+08:00",desc_md:`### 智谱清言

- **开发商**：智谱AI
- **简介**：智谱清言是一款多模态AI助手，支持文本、图片、代码等多种输入，适合多场景应用。
- **主要特性**：
  - 多模态输入支持
  - 智能写作与代码生成
  - 多端同步
  - 持续更新
  - 数据安全
- **适用人群**：开发者、内容创作者、企业用户
- [官网链接](https://chatglm.cn/)
`},{id:229,parent_category:15,parent_category_name:"测试工具",sub_category:19,sub_category_name:"构造数据",name:"SQL-Data Generator",description:"专门为生成用于 SQL 数据库测试数据而设计的工具。它支持多种主流的 SQL 数据库，如 MySQL、Oracle、SQL Server 等",url:"https://sqldatagenerator.com/generator",icon:"https://kjdaohang.com/media/tool_icons/SQL-Data.png",logo:"https://kjdaohang.com/media/tool_icons/SQL-Data.png",tags:"数据库测试",order:2,is_active:!0,views:93,likes_count:0,created_at:"2025-05-22T16:51:29.388478+08:00",updated_at:"2025-05-26T20:15:14.160103+08:00",desc_md:`### SQL-Data Generator

- **开发商**：SQL Data Generator 团队
- **简介**：SQL-Data Generator 是一款专为 SQL 数据库测试数据生成而设计的工具，支持 MySQL、Oracle、SQL Server 等主流数据库。
- **主要特性**：
  - 支持多种数据库类型
  - 可自定义数据表结构和字段类型
  - 批量生成高质量测试数据
  - 支持导出为 SQL 脚本或直接写入数据库
  - 界面友好，操作简单
- **适用人群**：数据库开发者、测试工程师、数据分析师
- [官网链接](https://sqldatagenerator.com/generator)
`},{id:230,parent_category:15,parent_category_name:"测试工具",sub_category:19,sub_category_name:"构造数据",name:"Randat",description:"一个免费的在线工具，主要用于生成随机数据。",url:"http://www.randat.com/",icon:"https://kjdaohang.com/media/tool_icons/Randat.jpg",logo:"https://kjdaohang.com/media/tool_icons/Randat.jpg",tags:"生成随机数据",order:2,is_active:!0,views:86,likes_count:0,created_at:"2025-05-22T16:56:23.948924+08:00",updated_at:"2025-05-26T19:59:27.254028+08:00",desc_md:`### Randat

- **开发商**：Randat 团队
- **简介**：Randat 是一个免费的在线随机数据生成工具，支持多种数据类型，适合开发、测试和数据模拟场景。
- **主要特性**：
  - 支持多种数据类型（文本、数字、日期等）
  - 可自定义字段和数据格式
  - 支持批量生成和导出
  - 界面简洁，操作便捷
- **适用人群**：开发者、测试工程师、数据分析师
- [官网链接](http://www.randat.com/)
`},{id:236,parent_category:23,parent_category_name:"开发工具",sub_category:29,sub_category_name:"低代码/无代码",name:"JeecgBoot",description:"一款基于 Spring Boot + Vue 的 低代码开发平台，融合了主流技术栈，提供代码生成、微服务架构支持。",url:"https://github.com/jeecgboot/JeecgBoot",icon:"https://kjdaohang.com/media/tool_icons/JeecgBoot.png",logo:"https://kjdaohang.com/media/tool_icons/JeecgBoot.png",tags:"低代码平台",order:2,is_active:!0,views:85,likes_count:0,created_at:"2025-05-22T17:21:38.628738+08:00",updated_at:"2025-05-26T22:27:44.633995+08:00",desc_md:`### JeecgBoot

- **简介**：JeecgBoot 是一款基于 Spring Boot + Vue 的低代码开发平台，融合了主流技术栈，支持代码生成、微服务架构和多租户管理。
- **主要特性**：
  - 一键代码生成，提升开发效率
  - 支持微服务架构和多租户
  - 丰富的组件和模板库
  - 支持流程引擎、报表设计和权限管理
  - 开源免费，社区活跃
- **适用场景**：适合企业级应用开发、管理系统、快速原型搭建。
- [官网链接](https://github.com/jeecgboot/JeecgBoot)
`},{id:6,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"腾讯元宝",description:"腾讯推出的AI超级助手，整合微信公众号、视频号等内容生态。",url:"https://yuanbao.tencent.com/chat",icon:"https://kjdaohang.com/media/tool_icons/yuanbao-chat-logo_hDAecU1.png",logo:"https://kjdaohang.com/media/tool_icons/yuanbao-chat-logo_hDAecU1.png",tags:"AI助手,微信生态",order:2,is_active:!0,views:81,likes_count:0,created_at:"2025-05-21T12:40:06.583850+08:00",updated_at:"2025-05-23T11:27:39.036032+08:00"},{id:327,parent_category:23,parent_category_name:"开发工具",sub_category:25,sub_category_name:"代码协作",name:"TitanIDE",description:"一款支持全栈开发的在线IDE工具，也是一款高度集成的云原生开发工具。",url:"https://www.cloudtogo.cn/product-TitanIDE",icon:"https://kjdaohang.com/media/tool_icons/proclxz3.png",logo:"https://kjdaohang.com/media/tool_icons/proclxz3.png",tags:"在线云开发环境",order:2,is_active:!0,views:65,likes_count:0,created_at:"2025-06-10T10:14:44.427077+08:00",updated_at:"2025-06-10T10:14:44.427345+08:00",desc_md:`### TitanIDE

- **简介**：TitanIDE 是一款支持全栈开发的在线 IDE 工具，集成了云原生开发环境，支持多语言、多框架开发，适合团队协作和远程开发。
- **主要特性**：
  - 支持前后端全栈开发
  - 云端环境，随时随地访问
  - 多人协作与实时编辑
  - 丰富的插件和模板支持
  - 一键部署与预览
- **适用场景**：适合远程开发、团队协作、云原生项目和在线教学。
- [官网链接](https://www.cloudtogo.cn/product-TitanIDE)
`},{id:251,parent_category:30,parent_category_name:"设计工具",sub_category:34,sub_category_name:"流程图设计",name:"百度脑图",description:"百度推出的在线思维导图工具，可以用于简单的流程图绘制。",url:"https://naotu.baidu.com/",icon:"https://kjdaohang.com/media/tool_icons/%E7%99%BE%E5%BA%A6%E8%84%91%E5%9B%BE.png",logo:"https://kjdaohang.com/media/tool_icons/%E7%99%BE%E5%BA%A6%E8%84%91%E5%9B%BE.png",tags:"百度,思维导图",order:2,is_active:!0,views:61,likes_count:0,created_at:"2025-05-22T17:50:55.230163+08:00",updated_at:"2025-05-27T09:05:37.955464+08:00",desc_md:`### 百度脑图

- **简介**：百度脑图是百度推出的一款免费的在线思维导图工具，支持多平台访问。界面简洁，操作便捷，适合快速梳理思路、知识整理和流程图绘制。
- **主要特性**：
  - 支持多种主题和结构样式
  - 可导出为图片、PDF、XMind等格式
  - 支持云端保存和分享
  - 支持快捷键操作，提升效率
  - 可嵌入网页或协作分享
- **适用人群**：学生、教师、产品经理、项目管理者
- [官网链接](https://naotu.baidu.com/)
`},{id:220,parent_category:15,parent_category_name:"测试工具",sub_category:22,sub_category_name:"抓包工具",name:"Tcpdump",description:"功能强大的命令行抓包工具，广泛用于捕获或过滤特定接口上的TCP/IP数据包，适用于Linux/Unix系统",url:"http://www.tcpdump.org/",icon:"https://kjdaohang.com/media/tool_icons/Tcpdump.png",logo:"https://kjdaohang.com/media/tool_icons/Tcpdump.png",tags:"抓包,命令行",order:2,is_active:!0,views:55,likes_count:0,created_at:"2025-05-22T16:31:03.751074+08:00",updated_at:"2025-05-26T17:37:50.896518+08:00",desc_md:`### Tcpdump

- **开发商**：开源社区
- **简介**：Tcpdump 是一款经典的命令行抓包工具，广泛用于 Linux/Unix 系统下的网络数据包捕获与分析。支持多种过滤条件，适合网络故障排查和安全分析。
- **主要特性**：
  - 支持多种协议的数据包捕获
  - 灵活的过滤表达式
  - 可导出为 pcap 文件供 Wireshark 等工具分析
  - 轻量级、性能高
  - 支持脚本自动化和批量处理
- **适用人群**：网络工程师、系统管理员、安全分析师
- [官网链接](http://www.tcpdump.org/)
`},{id:235,parent_category:23,parent_category_name:"开发工具",sub_category:29,sub_category_name:"低代码/无代码",name:"简道云",description:"一款零代码轻量级的应用搭建平台，支持表单设计、流程自动化和数据分析。",url:"https://www.jiandaoyun.com",icon:"https://kjdaohang.com/media/tool_icons/%E7%AE%80%E9%81%93%E4%BA%91.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E7%AE%80%E9%81%93%E4%BA%91.jpg",tags:"零代码平台",order:2,is_active:!0,views:49,likes_count:0,created_at:"2025-05-22T17:18:54.098720+08:00",updated_at:"2025-05-26T22:24:03.324085+08:00",desc_md:`### 简道云

- **简介**：简道云是一款零代码轻量级应用搭建平台，用户无需编程即可通过拖拽方式快速搭建业务应用，支持表单设计、流程自动化和数据分析。
- **主要特性**：
  - 零代码拖拽式应用搭建
  - 支持复杂表单、流程审批和自动化
  - 丰富的数据分析和可视化报表
  - 支持多端访问和移动办公
  - 企业级权限和安全管理
- **适用场景**：适合企业内部管理、业务流程自动化、数据采集与分析。
- [官网链接](https://www.jiandaoyun.com)
`},{id:318,parent_category:40,parent_category_name:"求职面试",sub_category:43,sub_category_name:"面试刷题",name:"VisuAlgo",description:"一个功能强大、易于使用的算法和数据结构可视化工具，适合广大算法和数据结构的学习者和爱好者使用。",url:"https://visualgo.net/zh",icon:"https://kjdaohang.com/media/tool_icons/OIP-C_2.jpg",logo:"https://kjdaohang.com/media/tool_icons/OIP-C_2.jpg",tags:"数据结构,算法学习,可视化",order:2,is_active:!0,views:47,likes_count:0,created_at:"2025-06-09T09:22:11.018495+08:00",updated_at:"2025-06-09T09:22:11.018536+08:00",desc_md:`### VisuAlgo

- **开发商**：新加坡国立大学
- **简介**：VisuAlgo 是一个专注于算法与数据结构可视化的在线学习平台，通过动画演示帮助用户直观理解各种算法的执行过程和数据结构的变化。支持多种语言界面，适合教学与自学。
- **主要特性**：
  - 支持排序、查找、图论、树、堆等多种算法可视化
  - 步骤动画与交互式操作
  - 多语言界面，适合全球用户
  - 题库与在线测验
  - 适合课堂教学与自学
- **适用人群**：算法学习者、教师、学生、编程爱好者
- [官网链接](https://visualgo.net/zh)
`},{id:266,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"PythonTutor",description:"可视化执行代码的工具，支持Python、Java、C、C++、Java和Ruby等语言，帮助理解代码执行过程",url:"https://pythontutor.com/",icon:"https://kjdaohang.com/media/tool_icons/PythonTutor.png",logo:"https://kjdaohang.com/media/tool_icons/PythonTutor.png",tags:"代码执行跟踪",order:2,is_active:!0,views:47,likes_count:0,created_at:"2025-05-22T18:16:06.912492+08:00",desc_md:`### PythonTutor

- **简介**：PythonTutor 是一款可视化代码执行工具，支持 Python、Java、C、C++、JavaScript、Ruby 等多种语言。通过动画演示变量、堆栈、内存变化，帮助用户理解代码执行过程。
- **主要特性**：
  - 代码逐步可视化
  - 多语言支持
  - 适合教学与自学
- **适用人群**：编程初学者、教师、学生
- [官网链接](https://pythontutor.com/)`,updated_at:"2025-05-27T08:35:29.835432+08:00"},{id:226,parent_category:15,parent_category_name:"测试工具",sub_category:21,sub_category_name:"API测试",name:"Swagger",description:"Swagger 是一个规范和完整的框架，用于生成、描述、调用和发现 RESTful Web 服务",url:"https://swagger.io/",icon:"https://kjdaohang.com/media/tool_icons/swagger.png",logo:"https://kjdaohang.com/media/tool_icons/swagger.png",tags:"RESTful标准",order:2,is_active:!0,views:47,likes_count:0,created_at:"2025-05-22T16:42:49.496292+08:00",updated_at:"2025-05-26T18:17:17.086198+08:00",desc_md:`### Swagger

- **开发商**：SmartBear Software
- **简介**：Swagger 是全球最流行的 RESTful API 规范和工具集，支持 API 文档自动生成、接口调试和 Mock 服务。
- **主要特性**：
  - 自动生成 API 文档（OpenAPI 规范）
  - 支持接口调试与 Mock
  - 丰富的可视化界面和插件生态
  - 与主流开发框架无缝集成
  - 支持代码生成和测试用例生成
- **适用人群**：开发者、测试工程师、API 管理团队
- [官网链接](https://swagger.io/)
`},{id:317,parent_category:40,parent_category_name:"求职面试",sub_category:43,sub_category_name:"面试刷题",name:"洛谷",description:"一个面向程序设计竞赛爱好者的在线学习平台，提供题库、比赛、讨论、专栏等多种功能。",url:"https://www.luogu.com.cn/",icon:"https://kjdaohang.com/media/tool_icons/024b2bf9e11849dcbc38c6ff9d2c7da2.jpg",logo:"https://kjdaohang.com/media/tool_icons/024b2bf9e11849dcbc38c6ff9d2c7da2.jpg",tags:"编程竞赛,在线学习,面试刷题",order:2,is_active:!0,views:45,likes_count:0,created_at:"2025-06-09T09:05:10.953478+08:00",updated_at:"2025-06-09T09:05:38.389266+08:00",desc_md:`### 洛谷

- **开发商**：洛谷团队
- **简介**：洛谷是国内知名的编程竞赛与算法学习平台，面向中学生、大学生及算法爱好者，提供丰富的题库、OJ评测、竞赛活动、社区讨论和学习专栏。
- **主要特性**：
  - 海量算法题库与OJ评测系统
  - 支持多种编程语言
  - 定期举办编程竞赛与训练营
  - 题解、专栏与学习资料
  - 活跃的社区与排行榜
- **适用人群**：编程竞赛选手、学生、算法爱好者
- [官网链接](https://www.luogu.com.cn/)
`},{id:227,parent_category:15,parent_category_name:"测试工具",sub_category:21,sub_category_name:"API测试",name:"Postcat",description:"一款功能强大的开源、跨平台 API 开发测试工具，支持 REST、Websocket 等协议",url:"https://postcat.com/zh/",icon:"https://kjdaohang.com/media/tool_icons/Postcat.jpg",logo:"https://kjdaohang.com/media/tool_icons/Postcat.jpg",tags:"接口测试,测试工具",order:2,is_active:!0,views:29,likes_count:0,created_at:"2025-05-22T16:45:12.463270+08:00",updated_at:"2025-05-26T18:24:59.395204+08:00",desc_md:`### Postcat

- **开发商**：开源社区
- **简介**：Postcat 是一款开源、跨平台的 API 开发与测试工具，支持 REST、WebSocket 等多种协议。界面现代，功能丰富，适合接口调试、自动化测试和团队协作。
- **主要特性**：
  - 支持 REST、WebSocket 协议
  - 可视化请求构造与响应查看
  - 丰富的环境变量和参数化功能
  - 支持团队协作与数据同步
  - 插件扩展和脚本支持
- **适用人群**：开发者、测试工程师、API 管理团队
- [官网链接](https://postcat.com/zh/)
`},{id:50,parent_category:3,parent_category_name:"AI工具",sub_category:4,sub_category_name:"AI写作",name:"星火网文助手",description:"一款专为网文作者打造的一站式AI创作平台。",url:"https://writersdesk.net/#/dashboard",icon:"https://kjdaohang.com/media/tool_icons/default_zChCvGr.png",logo:"https://kjdaohang.com/media/tool_icons/default_zChCvGr.png",tags:"网文小说创作",order:2,is_active:!0,views:29,likes_count:0,created_at:"2025-05-21T21:22:11.771997+08:00",updated_at:"2025-05-23T11:48:14.848968+08:00"},{id:215,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"Monica",description:"一款功能强大的多模态AI助手，由90后创业者肖弘创立的中国AI科技公司开发",url:"https://monica.im/",icon:"https://kjdaohang.com/media/tool_icons/67e350df60203_im.monica.app.monica-384x384.png",logo:"https://kjdaohang.com/media/tool_icons/67e350df60203_im.monica.app.monica-384x384.png",tags:"AI智能助手",order:2,is_active:!0,views:26,likes_count:0,created_at:"2025-05-22T16:17:16.659372+08:00",updated_at:"2025-05-24T17:17:55.850262+08:00",desc_md:`### Monica

- **开发商**：Monica 团队
- **简介**：Monica 是一款多模态 AI 助手，支持文本、语音、图片等多种输入方式，集成多模型能力，适合日常办公、学习和生活场景。
- **主要特性**：
  - 支持多模态输入（文本、语音、图片）
  - 集成多种主流大模型
  - 智能写作、翻译、总结、问答
  - 支持插件扩展和自定义
  - 跨平台支持（网页、移动端）
- **适用人群**：学生、职场人士、内容创作者、开发者
- [官网链接](https://monica.im/)
`},{id:202,parent_category:3,parent_category_name:"AI工具",sub_category:9,sub_category_name:"AI搜索",name:"Perplexity",description:"世界上第一个会话搜索引擎",url:"https://www.perplexity.ai/",icon:"https://kjdaohang.com/media/tool_icons/png-transparent-perplexity-ai-icon-tech-companies-thumbnail.png",logo:"https://kjdaohang.com/media/tool_icons/png-transparent-perplexity-ai-icon-tech-companies-thumbnail.png",tags:"AI搜索",order:2,is_active:!0,views:24,likes_count:0,created_at:"2025-05-22T15:07:57.026936+08:00",updated_at:"2025-05-24T10:23:52.453883+08:00"},{id:208,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"Suna",description:"Suna是Kortix推出的全球首款通用型AlAgent开源项目，支持高效解决现实场景中的各类任务。",url:"https://www.suna.so/",icon:"https://kjdaohang.com/media/tool_icons/default_v83yP5d.png",logo:"https://kjdaohang.com/media/tool_icons/default_v83yP5d.png",tags:"AI智能体",order:2,is_active:!0,views:23,likes_count:0,created_at:"2025-05-22T15:21:44.012471+08:00",updated_at:"2025-05-24T12:01:25.876544+08:00",desc_md:`### Suna

- **开发商**：Kortix
- **简介**：Suna是全球首款通用型AI Agent开源项目，支持多场景任务自动化与智能体开发，适合开发者和企业用户。
- **主要特性**：
  - 通用型AI智能体开源框架
  - 多场景任务自动化
  - 支持自定义扩展与插件
  - 社区活跃，持续更新
  - 企业级部署与安全
- **适用人群**：开发者、企业用户、AI创业团队
- [官网链接](https://www.suna.so/)
`},{id:190,parent_category:3,parent_category_name:"AI工具",sub_category:10,sub_category_name:"AI设计",name:"AI改图神器",description:"一款功能强大的在线图片编辑工具，集成了多种实用功能",url:"https://www.logosc.cn/design/tools/",icon:"https://kjdaohang.com/media/tool_icons/9557d1-12.png",logo:"https://kjdaohang.com/media/tool_icons/9557d1-12.png",tags:"AI设计,图片编辑",order:2,is_active:!0,views:20,likes_count:0,created_at:"2025-05-22T14:25:02.759494+08:00",updated_at:"2025-05-24T11:16:44.848834+08:00",desc_md:`### AI改图神器

- **开发商**：AI改图神器团队
- **简介**：AI改图神器是一款功能强大的在线图片编辑工具，集成AI抠图、修复、风格转换等多种实用功能。
- **主要特性**：
  - AI智能抠图与修复
  - 图片风格转换与美化
  - 批量处理与格式转换
  - 丰富的模板与滤镜
  - 在线编辑与一键导出
- **适用人群**：设计师、内容创作者、企业用户
- [官网链接](https://www.logosc.cn/design/tools/)
`},{id:375,parent_category:44,parent_category_name:"实用小工具",sub_category:72,sub_category_name:"在线工具",name:"StickerBaker",description:"一个方便好用的 AI 贴纸生成器，可以根据我们输入的描述，或者上传的照片，生成卡通贴纸。高清、免费、好看！",url:"https://stickerbaker.com/",icon:"https://kjdaohang.com/media/tool_icons/imgi_1_oven.png",logo:"https://kjdaohang.com/media/tool_icons/imgi_1_oven.png",tags:"AI 贴纸生成器",order:2,is_active:!0,views:18,likes_count:0,created_at:"2025-07-05T11:22:20.032443+08:00",updated_at:"2025-07-05T11:23:33.720212+08:00",desc_md:`### StickerBaker

- **开发商**：StickerBaker 团队
- **简介**：StickerBaker 是一款基于AI的贴纸生成工具，支持根据用户输入的描述或上传的照片自动生成卡通贴纸，适合社交聊天、表情包制作等场景，生成的贴纸高清、免费且风格多样。
- **主要特性**：
  - AI智能贴纸生成
  - 支持文本描述与图片上传
  - 多种风格与模板选择
  - 高清贴纸免费下载
  - 操作简单，适合所有用户
- **适用人群**：社交用户、表情包爱好者、内容创作者
- [官网链接](https://stickerbaker.com/)
`},{id:162,parent_category:3,parent_category_name:"AI工具",sub_category:10,sub_category_name:"AI设计",name:"腾讯混元3D",description:"腾讯推出的一站式 AI 驱动 3D 内容创作平台，基于自研的 Hunyuan3D 大模型构建，支持文本到 3D、图像到 3D、草图到 3D等功能。",url:"https://3d.hunyuan.tencent.com/",icon:"https://kjdaohang.com/media/tool_icons/logo_gsrQNx4.png",logo:"https://kjdaohang.com/media/tool_icons/logo_gsrQNx4.png",tags:"AI设计,3D制作",order:2,is_active:!0,views:18,likes_count:0,created_at:"2025-05-22T12:26:32.042267+08:00",updated_at:"2025-05-24T11:09:30.824141+08:00",desc_md:`### 腾讯混元3D

- **开发商**：腾讯
- **简介**：腾讯混元3D是一站式AI驱动的3D内容创作平台，支持文本、图像、草图等多种方式生成3D模型。
- **主要特性**：
  - 文本到3D、图像到3D、草图到3D
  - 基于自研Hunyuan3D大模型
  - 丰富的3D素材与模板
  - 支持导出多种3D格式
  - 企业级安全与权限管理
- **适用人群**：3D设计师、内容创作者、企业用户
- [官网链接](https://3d.hunyuan.tencent.com/)
`},{id:325,parent_category:23,parent_category_name:"开发工具",sub_category:25,sub_category_name:"代码协作",name:"Stackblitz",description:"一个功能强大的在线集成开发环境（IDE）,支持多种前端框架及后端语言。",url:"https://stackblitz.com/",icon:"https://kjdaohang.com/media/tool_icons/OIP-C_4.jpg",logo:"https://kjdaohang.com/media/tool_icons/OIP-C_4.jpg",tags:"在线云开发环境",order:2,is_active:!0,views:16,likes_count:0,created_at:"2025-06-10T10:00:59.216447+08:00",updated_at:"2025-06-10T10:00:59.216490+08:00",desc_md:`### Stackblitz

- **简介**：Stackblitz 是一款基于浏览器的在线集成开发环境（IDE），支持多种前端框架（如 Angular、React、Vue）及 Node.js 后端开发。
- **主要特性**：
  - 即开即用的在线开发环境
  - 支持多种主流前端和后端技术
  - 实时预览和自动保存
  - 与 GitHub 集成，便于代码同步
  - 支持 WebContainers，实现本地 Node.js 环境
- **适用场景**：适合前端开发、在线教学、代码演示和快速原型开发。
- [官网链接](https://stackblitz.com/)
`},{id:249,parent_category:30,parent_category_name:"设计工具",sub_category:34,sub_category_name:"流程图设计",name:"亿图图示",description:"功能强大的图形图表设计软件，操作简便，界面友好，适合新手快速上手。",url:"https://www.edrawmax.cn/",icon:"https://kjdaohang.com/media/tool_icons/%E4%BA%BF%E5%9B%BE%E5%9B%BE%E7%A4%BA.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E4%BA%BF%E5%9B%BE%E5%9B%BE%E7%A4%BA.jpg",tags:"矢量绘图工具",order:2,is_active:!0,views:16,likes_count:0,created_at:"2025-05-22T17:49:24.605394+08:00",updated_at:"2025-05-27T08:57:23.167090+08:00",desc_md:`### 亿图图示（EdrawMax）

- **简介**：亿图图示（EdrawMax）是一款全能型的图形图表设计软件，支持流程图、组织结构图、网络图、工程图等多种类型。界面友好，操作简单，适合新手和专业用户。
- **主要特性**：
  - 丰富的模板和符号库
  - 支持多种导出格式（图片、PDF、Word、Visio等）
  - 支持团队协作和云端存储
  - 拖拽式操作，易于上手
  - 支持多平台（Windows、Mac、Web）
- **适用人群**：设计师、工程师、学生、企业用户
- [官网链接](https://www.edrawmax.cn/)
`},{id:267,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"Jupyter Notebook",description:"一款基于网页的交互式计算环境，广泛用于数据科学、机器学习、统计分析、教学演示和代码文档编写。",url:"https://jupyter.org/index.html",icon:"https://kjdaohang.com/media/tool_icons/Jupyter_Notebook.jpg",logo:"https://kjdaohang.com/media/tool_icons/Jupyter_Notebook.jpg",tags:"交互式IDE",order:2,is_active:!0,views:14,likes_count:0,created_at:"2025-05-22T18:19:21.230796+08:00",desc_md:`### Jupyter Notebook

- **简介**：Jupyter Notebook 是一款基于网页的交互式计算环境，广泛用于数据科学、机器学习、统计分析和教学。支持代码、文本、可视化混合编辑，便于实验和分享。
- **主要特性**：
  - 代码与文档混合
  - 支持多种编程语言（Python、R、Julia 等）
  - 丰富的可视化与扩展插件
- **适用人群**：数据科学家、研究人员、教师
- [官网链接](https://jupyter.org/index.html)`,updated_at:"2025-05-27T08:38:57.544302+08:00"},{id:63,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"MindShow",description:"MindShow 是一款基于人工智能技术的演示文稿生成工具，能够快速生成高质量的 PPT 演示文稿。",url:"https://www.mindshow.fun/#/home",icon:"https://kjdaohang.com/media/tool_icons/default_0H5WOT8.png",logo:"https://kjdaohang.com/media/tool_icons/default_0H5WOT8.png",tags:"PPT自动生成",order:2,is_active:!0,views:13,likes_count:0,created_at:"2025-05-21T22:06:47.194124+08:00",updated_at:"2025-05-24T15:29:20.435277+08:00",desc_md:`### MindShow

- **开发商**：MindShow 团队
- **简介**：MindShow 是一款基于 AI 技术的 PPT 演示文稿生成工具，支持一键生成结构清晰、设计美观的 PPT，适合各类演讲和汇报场景。
- **主要特性**：
  - AI 自动生成 PPT 内容与设计
  - 丰富的模板和主题风格
  - 支持内容编辑与协作
  - 一键导出多种格式
  - 智能排版与美化
- **适用人群**：职场人士、学生、教师、内容创作者
- [官网链接](https://www.mindshow.fun/#/home)
`},{id:326,parent_category:23,parent_category_name:"开发工具",sub_category:25,sub_category_name:"代码协作",name:"Playcode",description:"一个功能强大的在线代码编辑器和开发环境，可以在线运行 JavaScript 或 TypeScript 代码。",url:"https://playcode.io/",icon:"https://kjdaohang.com/media/tool_icons/25252862.png",logo:"https://kjdaohang.com/media/tool_icons/25252862.png",tags:"在线代码编辑器",order:2,is_active:!0,views:12,likes_count:0,created_at:"2025-06-10T10:07:46.057062+08:00",updated_at:"2025-06-10T10:07:46.057105+08:00",desc_md:`### Playcode

- **简介**：Playcode 是一款功能强大的在线代码编辑器和开发环境，支持 JavaScript、TypeScript 等多种语言的在线编写、运行和调试。
- **主要特性**：
  - 实时代码编辑与预览
  - 支持多种前端框架和库
  - 丰富的代码模板和示例
  - 支持团队协作和代码分享
  - 内置终端和调试工具
- **适用场景**：适合前端开发、代码实验、教学演示和快速原型开发。
- [官网链接](https://playcode.io/)
`},{id:287,parent_category:44,parent_category_name:"实用小工具",sub_category:48,sub_category_name:"表情包",name:"Emoji Maker",description:"一个支持用户自定义制作Emoji的在线平台，可将用户上传的照片制作成个性化表情包，支持生成多种静态和动态表情。",url:"https://emojimaker.lol/",icon:"https://kjdaohang.com/media/tool_icons/emoji2.jpg",logo:"https://kjdaohang.com/media/tool_icons/emoji2.jpg",tags:"Emoji",order:2,is_active:!0,views:12,likes_count:0,created_at:"2025-05-22T20:01:15.181673+08:00",updated_at:"2025-05-27T13:50:25.032011+08:00",desc_md:`### Emoji Maker

- **开发商**：Emoji Maker 团队
- **简介**：Emoji Maker 是一款支持用户自定义制作 Emoji 的在线平台，用户可以上传照片或选择模板，生成个性化静态或动态表情包，适合社交聊天和内容创作。
- **主要特性**：
  - 支持照片上传与模板选择
  - 生成静态与动态 Emoji
  - 一键下载与分享
  - 多种风格与特效
  - 操作简单，界面友好
- **适用人群**：表情包爱好者、内容创作者、社交用户
- [官网链接](https://emojimaker.lol/)
`},{id:225,parent_category:15,parent_category_name:"测试工具",sub_category:21,sub_category_name:"API测试",name:"Paw",description:"一款专为 Mac 设计的高效 HTTP 客户端，提供了强大的请求构造器、丰富的自定义脚本功能。",url:"https://paw.cloud/",icon:"https://kjdaohang.com/media/tool_icons/Paw.jpg",logo:"https://kjdaohang.com/media/tool_icons/Paw.jpg",tags:"API客户端",order:2,is_active:!0,views:12,likes_count:0,created_at:"2025-05-22T16:42:04.119740+08:00",updated_at:"2025-05-26T18:14:09.881044+08:00",desc_md:`### Paw

- **开发商**：Paw Inc.
- **简介**：Paw 是一款专为 macOS 设计的高效 HTTP 客户端，支持 REST、GraphQL 等协议。拥有强大的请求构造器、丰富的自定义脚本和团队协作功能。
- **主要特性**：
  - 支持多种 API 协议
  - 可视化请求编辑与响应查看
  - 支持环境变量和请求链路
  - 丰富的脚本和插件扩展
  - 团队协作与数据同步
- **适用人群**：Mac 用户、开发者、测试工程师
- [官网链接](https://paw.cloud/)
`},{id:134,parent_category:3,parent_category_name:"AI工具",sub_category:10,sub_category_name:"AI设计",name:"标小智LOGO设计",description:"一款专业的AI智能设计工具，主要功能包括LOGO设计、名片设计、海报设计、头像设计",url:"https://www.logosc.cn/",icon:"https://kjdaohang.com/media/tool_icons/default_zymobGh.png",logo:"https://kjdaohang.com/media/tool_icons/default_zymobGh.png",tags:"Logo设计,AI设计",order:2,is_active:!0,views:12,likes_count:0,created_at:"2025-05-22T11:20:10.256661+08:00",updated_at:"2025-05-24T11:06:33.079478+08:00"},{id:189,parent_category:3,parent_category_name:"AI工具",sub_category:10,sub_category_name:"AI设计",name:"U钙网",description:"一个专业的智能AI商标logo设计平台，无限制免费下载。",url:"https://www.uugai.com/",icon:"https://kjdaohang.com/media/tool_icons/default_5aYjuLj.png",logo:"https://kjdaohang.com/media/tool_icons/default_5aYjuLj.png",tags:"AI设计,LOGO设计",order:2,is_active:!0,views:11,likes_count:0,created_at:"2025-05-22T14:23:52.843001+08:00",updated_at:"2025-05-24T11:12:36.263831+08:00"},{id:169,parent_category:44,parent_category_name:"实用小工具",sub_category:62,sub_category_name:"二维码制作",name:"QR-Batch",description:"一个在线批量生成二维码的工具。",url:"https://www.qr-batch.com/index.php",icon:"https://kjdaohang.com/media/tool_icons/QR-Batch.png",logo:"https://kjdaohang.com/media/tool_icons/QR-Batch.png",tags:"批量生成二维码",order:2,is_active:!0,views:10,likes_count:0,created_at:"2025-05-22T12:45:32.781360+08:00",updated_at:"2025-05-27T14:49:04.848475+08:00",desc_md:`### QR-Batch

- **开发商**：QR-Batch 团队
- **简介**：QR-Batch 是一款专注于批量二维码生成的在线工具，支持通过Excel、CSV等文件批量导入数据，一键生成大量二维码，适合企业批量制作产品标签、门票、活动码等。
- **主要特性**：
  - 批量导入数据生成二维码
  - 多种二维码样式与格式导出
  - 支持Excel、CSV等文件格式
  - 操作简单，适合大批量需求
  - 支持二维码美化与定制
- **适用人群**：企业用户、活动组织者、生产制造业
- [官网链接](https://www.qr-batch.com/index.php)
`},{id:167,parent_category:44,parent_category_name:"实用小工具",sub_category:62,sub_category_name:"二维码制作",name:"QRcode AI",description:"利用人工智能技术生成二维码的工具，能够将艺术元素与传统二维码技术相结合。",url:"https://app.qrcode-ai.com/",icon:"https://kjdaohang.com/media/tool_icons/QRcode_AI.jpg",logo:"https://kjdaohang.com/media/tool_icons/QRcode_AI.jpg",tags:"二维码",order:2,is_active:!0,views:9,likes_count:0,created_at:"2025-05-22T12:42:20.889434+08:00",updated_at:"2025-05-27T14:36:58.939232+08:00",desc_md:`### QRcode AI

- **开发商**：QRcode AI 团队
- **简介**：QRcode AI 是一款结合人工智能与艺术设计的二维码生成工具，支持将艺术元素、品牌Logo、个性化图案与二维码融合，生成兼具美观与实用性的二维码，适合品牌营销和个性化需求。
- **主要特性**：
  - AI驱动的艺术二维码生成
  - 支持Logo、图片、艺术风格融合
  - 高识别率与美观兼顾
  - 多种二维码样式与模板
  - 支持批量生成与下载
- **适用人群**：品牌营销人员、设计师、企业用户、个人用户
- [官网链接](https://app.qrcode-ai.com/)
`},{id:274,parent_category:35,parent_category_name:"运维工具",sub_category:38,sub_category_name:"CICD",name:"CircleCI",description:"基于云的CI/CD工具，可自动执行集成和部署过程，支持容器、OSX、Linux。",url:"https://circleci.com/",icon:"https://kjdaohang.com/media/tool_icons/CircleCI.jpg",logo:"https://kjdaohang.com/media/tool_icons/CircleCI.jpg",tags:"持续集成,CICD",order:2,is_active:!0,views:7,likes_count:0,created_at:"2025-05-22T18:27:56.993279+08:00",updated_at:"2025-05-27T16:33:36.573870+08:00",desc_md:`### CircleCI

- **开发商**：Circle Internet Services, Inc.
- **简介**：CircleCI 是一款基于云的持续集成和持续部署平台，支持容器化、macOS、Linux 等多平台自动化构建、测试和部署。
- **主要特性**：
  - 支持 Docker、macOS、Linux 等多平台
  - 灵活的流水线和并发执行
  - 丰富的集成和插件生态
  - 实时日志和可视化监控
  - 易于与 GitHub、Bitbucket 集成
- **适用人群**：开发团队、自动化测试工程师、DevOps 团队
- [官网链接](https://circleci.com/)
`},{id:35,parent_category:3,parent_category_name:"AI工具",sub_category:10,sub_category_name:"AI设计",name:"美间设计",description:"在线软装设计工具，提供超过5400万+素材",url:"https://www.meijian.com/introduction",icon:"https://kjdaohang.com/media/tool_icons/logo_oxpnI4y.png",logo:"https://kjdaohang.com/media/tool_icons/logo_oxpnI4y.png",tags:"AI设计",order:2,is_active:!0,views:7,likes_count:0,created_at:"2025-05-21T20:51:54.827781+08:00",updated_at:"2025-05-24T10:48:10.087123+08:00"},{id:241,parent_category:23,parent_category_name:"开发工具",sub_category:28,sub_category_name:"静态代码分析",name:"FindBugs",description:"一款用于 Java 代码的静态分析工具，通过检查字节码来识别常见的 bug 模式和潜在问题",url:"https://findbugs.github.io/",icon:"https://kjdaohang.com/media/tool_icons/findbug.png",logo:"https://kjdaohang.com/media/tool_icons/findbug.png",tags:"Java,静态代码扫码",order:2,is_active:!0,views:6,likes_count:0,created_at:"2025-05-22T17:30:03.653582+08:00",updated_at:"2025-05-26T22:43:09.091434+08:00",desc_md:`### FindBugs

- **简介**：FindBugs 是一款专为 Java 设计的静态代码分析工具，通过分析 Java 字节码来识别常见的 bug 模式和潜在问题。适用于发现空指针异常、死代码等问题。
- **主要特性**：
  - 基于字节码分析，检测多种 bug 模式
  - 提供详细的缺陷报告和分类
  - 支持与 Eclipse、IntelliJ IDEA 等 IDE 集成
  - 可与 CI/CD 工具链集成
  - 支持自定义规则扩展
- **适用场景**：适合 Java 项目 bug 检查、代码审查和持续集成。
- [官网链接](https://findbugs.github.io/)
`},{id:217,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"当贝AI",description:"由当贝公司研发的多功能人工智能助手，集成了自然语言处理、机器学习和大数据分析等先进技术",url:"https://ai.dangbei.com/chat",icon:"https://kjdaohang.com/media/tool_icons/default_I1ba6as.png",logo:"https://kjdaohang.com/media/tool_icons/default_I1ba6as.png",tags:"AI智能助手",order:2,is_active:!0,views:6,likes_count:1,created_at:"2025-05-22T16:23:42.507079+08:00",updated_at:"2025-05-25T20:25:49.569987+08:00",desc_md:`### 当贝AI

- **开发商**：当贝公司
- **简介**：当贝AI 是一款集成自然语言处理、机器学习和大数据分析的多功能 AI 助手，支持智能问答、内容创作、办公自动化等多种场景。
- **主要特性**：
  - 智能对话与知识问答
  - 内容创作与写作辅助
  - 数据分析与办公自动化
  - 多平台支持（网页、移动端）
  - 持续更新与功能扩展
- **适用人群**：企业用户、学生、内容创作者、开发者
- [官网链接](https://ai.dangbei.com/chat)
`},{id:244,parent_category:23,parent_category_name:"开发工具",sub_category:28,sub_category_name:"静态代码分析",name:"ESLint",description:"一个用于 JavaScript 和 TypeScript 的 静态代码分析工具",url:"https://eslint.org/",icon:"https://kjdaohang.com/media/tool_icons/ESLint.jpg",logo:"https://kjdaohang.com/media/tool_icons/ESLint.jpg",tags:"JavaScript,TypeScript",order:2,is_active:!0,views:5,likes_count:0,created_at:"2025-05-22T17:40:28.318160+08:00",updated_at:"2025-05-26T22:47:58.560947+08:00",desc_md:`### ESLint

- **简介**：ESLint 是一款流行的 JavaScript 和 TypeScript 静态代码分析工具，能够检测代码中的错误、风格问题和潜在 bug。支持自定义规则和插件扩展。
- **主要特性**：
  - 支持 JavaScript、TypeScript 及相关框架（如 React、Vue）
  - 丰富的内置和社区规则
  - 支持自定义规则和插件
  - 可与 VS Code、WebStorm 等主流编辑器集成
  - 与 CI/CD 流水线无缝集成
- **适用场景**：适合前端开发者、团队代码规范统一和持续集成。
- [官网链接](https://eslint.org/)
`},{id:211,parent_category:3,parent_category_name:"AI工具",sub_category:9,sub_category_name:"AI搜索",name:"博查AI搜索",description:"博查AI搜索是国内首个支持多模型的AI搜索引擎，基于通义千问、字节云雀、月之暗面Kimi等顶尖AI大模型，提供全新的搜索体验。",url:"https://bochaai.com/",icon:"https://kjdaohang.com/media/tool_icons/1747067342-%E5%8D%9A%E6%9F%A5.png",logo:"https://kjdaohang.com/media/tool_icons/1747067342-%E5%8D%9A%E6%9F%A5.png",tags:"AI搜索",order:2,is_active:!0,views:5,likes_count:0,created_at:"2025-05-22T15:30:15.912154+08:00",updated_at:"2025-05-24T10:31:01.125461+08:00"},{id:154,parent_category:63,parent_category_name:"办公神器",sub_category:66,sub_category_name:"在线翻译",name:"腾讯交互翻译",description:"腾讯公司推出的一款多语言AI翻译工具，融合了交互式机器翻译、神经网络机器翻译、统计机器翻译、语义理解及信息检索等技术。",url:"https://transmart.qq.com/zh-CN/index",icon:"https://kjdaohang.com/media/tool_icons/%E8%85%BE%E8%AE%AF%E7%BF%BB%E8%AF%91.png",logo:"https://kjdaohang.com/media/tool_icons/%E8%85%BE%E8%AE%AF%E7%BF%BB%E8%AF%91.png",tags:"腾讯,翻译工具",order:2,is_active:!0,views:5,likes_count:0,created_at:"2025-05-22T12:04:57.378970+08:00",updated_at:"2025-05-27T11:19:44.626598+08:00",desc_md:`### 腾讯交互翻译

- **开发商**：腾讯
- **简介**：腾讯交互翻译是一款多语言AI翻译平台，融合了多种机器翻译技术，支持文本、语音、图片等多模态翻译，适合多行业应用。
- **主要特性**：
  - 支持多语言文本、语音、图片翻译
  - 交互式机器翻译与语义理解
  - 高效准确的AI翻译引擎
  - 提供API和批量翻译服务
  - 界面简洁，易于使用
- **适用人群**：企业用户、开发者、跨境业务团队、翻译工作者
- [官网链接](https://transmart.qq.com/zh-CN/index)
`},{id:146,parent_category:63,parent_category_name:"办公神器",sub_category:66,sub_category_name:"在线翻译",name:"Deepl翻译",description:"集合深度学习、神经网络算等先进技术的新一代AI翻译神器",url:"https://www.deepl.com/zh/translator",icon:"https://kjdaohang.com/media/tool_icons/Deepl%E7%BF%BB%E8%AF%91.png",logo:"https://kjdaohang.com/media/tool_icons/Deepl%E7%BF%BB%E8%AF%91.png",tags:"翻译工具",order:2,is_active:!0,views:5,likes_count:0,created_at:"2025-05-22T11:59:20.198601+08:00",updated_at:"2025-05-27T11:35:10.767113+08:00",desc_md:`### Deepl翻译

- **开发商**：DeepL GmbH
- **简介**：Deepl翻译是一款基于深度学习和神经网络技术的AI翻译工具，支持多语言文本、文档翻译，翻译质量高，适合专业和日常使用。
- **主要特性**：
  - 多语言文本、文档翻译
  - 高质量神经网络翻译引擎
  - 支持批量翻译和专业术语定制
  - 提供桌面端、网页版和API接口
- **适用人群**：翻译工作者、企业用户、外语学习者
- [官网链接](https://www.deepl.com/zh/translator)
`},{id:127,parent_category:3,parent_category_name:"AI工具",sub_category:7,sub_category_name:"AI音频",name:"通义听悟",description:"由阿里云推出的一款AI助手，专注于音频和视频内容的记录、转写、翻译与智能分析",url:"https://tingwu.aliyun.com/home",icon:"https://kjdaohang.com/media/tool_icons/card-logo.png",logo:"https://kjdaohang.com/media/tool_icons/card-logo.png",tags:"AI语音助手",order:2,is_active:!0,views:5,likes_count:0,created_at:"2025-05-22T11:04:08.502210+08:00",updated_at:"2025-05-23T21:10:05.967302+08:00",desc_md:`### 通义听悟

- **开发商**：阿里云
- **简介**：通义听悟是一款AI音视频转写与总结平台，支持会议、采访等多场景音视频内容处理。
- **主要特性**：
  - 音视频转文字
  - 智能摘要与要点提取
  - 多端同步
  - 数据安全
  - 持续更新
- **适用人群**：职场人士、学生、内容创作者
- [官网链接](https://tingwu.aliyun.com/)
`},{id:156,parent_category:63,parent_category_name:"办公神器",sub_category:66,sub_category_name:"在线翻译",name:"彩云小译",description:"一款功能丰富的翻译软件，支持多种翻译模式，包括文档翻译、网页翻译、划词翻译等",url:"https://fanyi.caiyunapp.com/",icon:"https://kjdaohang.com/media/tool_icons/%E5%BD%A9%E4%BA%91%E5%B0%8F%E8%AF%91.png",logo:"https://kjdaohang.com/media/tool_icons/%E5%BD%A9%E4%BA%91%E5%B0%8F%E8%AF%91.png",tags:"翻译工具",order:2,is_active:!0,views:4,likes_count:0,created_at:"2025-05-22T12:05:52.356360+08:00",updated_at:"2025-05-27T11:15:21.897316+08:00",desc_md:`### 彩云小译

- **开发商**：彩云科技
- **简介**：彩云小译是一款集网页翻译、文档翻译、划词翻译于一体的智能翻译工具，支持多语言互译，适合浏览器插件和移动端使用。
- **主要特性**：
  - 支持网页、文档、划词等多种翻译模式
  - 多语言互译，翻译准确高效
  - 浏览器插件和移动端应用
  - 支持双语对照和沉浸式阅读
  - 界面简洁，操作便捷
- **适用人群**：外语学习者、内容阅读者、跨境用户
- [官网链接](https://fanyi.caiyunapp.com/)
`},{id:277,parent_category:63,parent_category_name:"办公神器",sub_category:70,sub_category_name:"问卷表单",name:"问卷网",description:"中国最大的免费网络调查平台，注于为企业和个人提供问卷创建、发布、管理、收集及分析服务",url:"https://www.wenjuan.com/",icon:"https://kjdaohang.com/media/tool_icons/%E9%97%AE%E5%8D%B7%E7%BD%91.png",logo:"https://kjdaohang.com/media/tool_icons/%E9%97%AE%E5%8D%B7%E7%BD%91.png",tags:"问卷调查",order:2,is_active:!0,views:3,likes_count:0,created_at:"2025-05-22T18:34:23.607918+08:00",updated_at:"2025-05-27T10:13:07.303003+08:00",desc_md:`### 问卷网

- **开发商**：问卷网团队
- **简介**：问卷网是中国领先的免费网络调查平台，支持问卷创建、发布、管理、收集及分析，适合企业和个人用户。
- **主要特性**：
  - 多种题型与逻辑跳转
  - 实时数据统计与分析
  - 丰富的模板与自定义设计
  - 多渠道发布与回收
  - 数据导出与可视化报告
- **适用人群**：企业、教育机构、市场调研员、个人用户
- [官网链接](https://www.wenjuan.com/)
`},{id:31,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"讯飞智文",description:"一款基于星火认知大模型的智能文档创作平台。",url:"https://zhiwen.xfyun.cn/home",icon:"https://kjdaohang.com/media/tool_icons/default_1_baw0XD4.png",logo:"https://kjdaohang.com/media/tool_icons/default_1_baw0XD4.png",tags:"科大讯飞,AI办公",order:2,is_active:!0,views:3,likes_count:0,created_at:"2025-05-21T20:45:51.115985+08:00",updated_at:"2025-05-24T15:43:32.169542+08:00",desc_md:`### 讯飞智文

- **开发商**：科大讯飞
- **简介**：讯飞智文是一款基于星火认知大模型的智能文档创作平台，支持智能写作、文档分析、内容生成等多种功能。
- **主要特性**：
  - 智能写作与内容生成
  - 文档自动分析与摘要
  - 多格式导入导出
  - 数据安全与隐私保护
  - 持续更新与功能扩展
- **适用人群**：企业用户、学生、内容创作者、研究人员
- [官网链接](https://zhiwen.xfyun.cn/home)
`},{id:279,parent_category:63,parent_category_name:"办公神器",sub_category:70,sub_category_name:"问卷表单",name:"问卷帮",description:"一个简单、好用、免费的在线问卷调查平台，提供问卷调查、360度评估、在线考试、心理测评等多种功能",url:"https://www.wenjuanbang.com/home.html#/",icon:"https://kjdaohang.com/media/tool_icons/%E9%97%AE%E5%8D%B7%E5%B8%AE.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E9%97%AE%E5%8D%B7%E5%B8%AE.jpg",tags:"问卷调查",order:2,is_active:!0,views:2,likes_count:0,created_at:"2025-05-22T18:36:04.427189+08:00",updated_at:"2025-05-27T10:16:31.181546+08:00",desc_md:`### 问卷帮

- **开发商**：问卷帮团队
- **简介**：问卷帮是一款简单易用的在线问卷调查平台，支持问卷、评估、考试、测评等多种功能，适合企业和个人用户。
- **主要特性**：
  - 多种题型与逻辑设置
  - 实时数据统计与分析
  - 丰富的模板与自定义设计
  - 多渠道发布与回收
  - 数据导出与可视化报告
- **适用人群**：企业、教育机构、市场调研员、个人用户
- [官网链接](https://www.wenjuanbang.com/home.html#/)
`},{id:218,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"百小应",description:"由百川智能开发的一款AI助手工具，具备搜索、阅读、写作、编程等多方面能力。",url:"https://ying.baichuan-ai.com/chat",icon:"https://kjdaohang.com/media/tool_icons/default_J9Ojn1g.png",logo:"https://kjdaohang.com/media/tool_icons/default_J9Ojn1g.png",tags:"AI智能助手",order:2,is_active:!0,views:2,likes_count:0,created_at:"2025-05-22T16:26:27.588079+08:00",updated_at:"2025-05-24T17:27:37.734456+08:00",desc_md:`### 百小应

- **开发商**：百川智能
- **简介**：百小应是一款多功能 AI 助手，集成搜索、阅读、写作、编程等能力，适合日常办公、学习和开发场景。
- **主要特性**：
  - 智能搜索与知识问答
  - 内容创作与写作辅助
  - 编程代码生成与调试
  - 多平台支持（网页、移动端）
  - 持续更新与功能扩展
- **适用人群**：学生、开发者、内容创作者、企业用户
- [官网链接](https://ying.baichuan-ai.com/chat)
`},{id:212,parent_category:3,parent_category_name:"AI工具",sub_category:9,sub_category_name:"AI搜索",name:"Felo",description:"由日本初创公司 Felo Inc. 开发的多语言AI搜索引擎和工具集合。",url:"https://felo.ai/",icon:"https://kjdaohang.com/media/tool_icons/default_1.png",logo:"https://kjdaohang.com/media/tool_icons/default_1.png",tags:"AI搜索",order:2,is_active:!0,views:1,likes_count:0,created_at:"2025-05-22T15:32:03.238317+08:00",updated_at:"2025-05-24T10:35:47.418006+08:00"},{id:124,parent_category:3,parent_category_name:"AI工具",sub_category:6,sub_category_name:"AI编程",name:"豆包AI编程",description:"由字节跳动推出的一款免费的智能编程工具。",url:"https://www.doubao.com/chat/coding",icon:"https://kjdaohang.com/media/tool_icons/doubao-new-logo.png",logo:"https://kjdaohang.com/media/tool_icons/doubao-new-logo.png",tags:"字节跳动,AI编程",order:3,is_active:!0,views:199,likes_count:0,created_at:"2025-05-22T10:56:46.945448+08:00",updated_at:"2025-05-23T18:28:02.994905+08:00"},{id:74,parent_category:3,parent_category_name:"AI工具",sub_category:6,sub_category_name:"AI编程",name:"CodeGeeX",description:"一款由清华大学知识工程实验室与智谱AI联合开发的多语言AI编程助手",url:"https://codegeex.cn/",icon:"https://kjdaohang.com/media/tool_icons/codegeex-color.png",logo:"https://kjdaohang.com/media/tool_icons/codegeex-color.png",tags:"清华大学,智谱AI,AI编程助手",order:3,is_active:!0,views:86,likes_count:0,created_at:"2025-05-21T22:46:41.101020+08:00",updated_at:"2025-05-23T18:34:08.586272+08:00"},{id:93,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"DrissionPage",description:"一个基于 Python 的网页自动化工具，结合了 Selenium 和 Requests 的优点，适用于各种网页自动化任务",url:"https://gitee.com/g1879/DrissionPage",icon:"https://kjdaohang.com/media/tool_icons/DrissionPage.jpg",logo:"https://kjdaohang.com/media/tool_icons/DrissionPage.jpg",tags:"Web自动化,接口自动化",order:3,is_active:!0,views:83,likes_count:0,created_at:"2025-05-22T09:13:41.402431+08:00",updated_at:"2025-05-26T20:57:45.479794+08:00",desc_md:`### DrissionPage

- **开发商**：开源社区
- **简介**：DrissionPage 是一款基于 Python 的网页自动化工具，结合了 Selenium 的浏览器自动化和 Requests 的接口自动化优点，适合多场景网页自动化任务。
- **主要特性**：
  - 支持浏览器与无头模式自动化
  - 兼容 Selenium 与 Requests API
  - 易于编写和调试自动化脚本
  - 支持数据抓取与接口自动化
- **适用人群**：Python 开发者、自动化测试工程师、数据采集团队
- [项目主页](https://gitee.com/g1879/DrissionPage)
`},{id:133,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"橙篇AI",description:"由百度公司开发的一款AI原生应用，提供了一个专业的知识检索和问答、超长图文理解和生成、深度编辑和跨模态自由创作的平台。",url:"https://cp.baidu.com",icon:"https://kjdaohang.com/media/tool_icons/default_g87Ia19.png",logo:"https://kjdaohang.com/media/tool_icons/default_g87Ia19.png",tags:"百度文库,知识问答",order:3,is_active:!0,views:77,likes_count:1,created_at:"2025-05-22T11:17:23.591458+08:00",updated_at:"2025-06-02T10:11:56.699322+08:00"},{id:125,parent_category:3,parent_category_name:"AI工具",sub_category:6,sub_category_name:"AI编程",name:"文心快码",description:"由百度基于文心大模型研发的智能代码助手。",url:"https://comate.baidu.com/zh",icon:"https://kjdaohang.com/media/tool_icons/6fb7b406-3d32-4144-9a35-1edab92bc0eb.png",logo:"https://kjdaohang.com/media/tool_icons/6fb7b406-3d32-4144-9a35-1edab92bc0eb.png",tags:"百度,AI编程助手",order:3,is_active:!0,views:45,likes_count:0,created_at:"2025-05-22T10:59:47.405603+08:00",updated_at:"2025-05-28T08:52:08.667520+08:00"},{id:105,parent_category:15,parent_category_name:"测试工具",sub_category:16,sub_category_name:"自动化测试",name:"TestNG",description:"一个开源的 Java 测试框架，广泛用于自动化测试，特别适用于测试大型项目",url:"https://testng.org/",icon:"https://kjdaohang.com/media/tool_icons/testng.png",logo:"https://kjdaohang.com/media/tool_icons/testng.png",tags:"Java,通用测试框架",order:3,is_active:!0,views:35,likes_count:0,created_at:"2025-05-22T10:15:10.317773+08:00",updated_at:"2025-05-26T21:06:16.149454+08:00",desc_md:`### TestNG

- **开发商**：开源社区
- **简介**：TestNG 是一款功能强大的 Java 测试框架，支持单元测试、集成测试、端到端测试等多种测试类型，适合大型项目的自动化测试。
- **主要特性**：
  - 灵活的测试用例组织和分组
  - 支持参数化和数据驱动测试
  - 丰富的断言和报告功能
  - 易于集成 CI/CD 流程
  - 与主流开发工具和框架兼容
- **适用人群**：Java 开发者、测试工程师、自动化测试团队
- [官网链接](https://testng.org/)
`},{id:139,parent_category:3,parent_category_name:"AI工具",sub_category:6,sub_category_name:"AI编程",name:"秒哒",description:"由百度智能云推出的一款生成式应用开发平台，基于百度的文心大模型",url:"https://miaoda.baidu.com/",icon:"https://kjdaohang.com/media/tool_icons/4b1c1733953308.png",logo:"https://kjdaohang.com/media/tool_icons/4b1c1733953308.png",tags:"百度旗下,AI编程",order:3,is_active:!0,views:33,likes_count:0,created_at:"2025-05-22T11:37:41.227426+08:00",updated_at:"2025-05-23T18:41:18.635253+08:00"},{id:32,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"讯飞星火",description:"讯飞星火，一款懂你的AI助手。",url:"https://xinghuo.xfyun.cn/",icon:"https://kjdaohang.com/media/tool_icons/default_QvC3OK9.png",logo:"https://kjdaohang.com/media/tool_icons/default_QvC3OK9.png",tags:"科大讯飞,自主研发",order:3,is_active:!0,views:29,likes_count:0,created_at:"2025-05-21T20:47:30.455373+08:00",updated_at:"2025-05-23T11:28:13.385518+08:00"},{id:157,parent_category:44,parent_category_name:"实用小工具",sub_category:48,sub_category_name:"表情包",name:"IryEmoji",description:"一个专注于Emoji的在线工具平台",url:"https://www.tryemoji.com/",icon:"https://kjdaohang.com/media/tool_icons/Emoji.png",logo:"https://kjdaohang.com/media/tool_icons/Emoji.png",tags:"Emoji",order:3,is_active:!0,views:25,likes_count:0,created_at:"2025-05-22T12:12:58.713055+08:00",updated_at:"2025-05-27T13:57:38.793397+08:00",desc_md:`### IryEmoji

- **开发商**：IryEmoji 团队
- **简介**：IryEmoji 是一个专注于 Emoji 表情符号的在线工具平台，提供丰富的 Emoji 分类、搜索、复制和组合功能，帮助用户轻松查找和使用各种表情符号。平台界面简洁，支持多语言，适合日常聊天、社交媒体和内容创作。
- **主要特性**：
  - 丰富的 Emoji 分类与检索
  - 支持一键复制与组合
  - 多语言界面
  - 支持表情符号组合与创作
  - 持续更新最新 Emoji
- **适用人群**：社交用户、内容创作者、设计师
- [官网链接](https://www.tryemoji.com/)
`},{id:209,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"MiniMax Agent",description:"由 MiniMax 公司开发的一款基于深度学习和自然语言处理（NLP）技术的 AI 智能助手。",url:"https://agent.minimax.io/",icon:"https://kjdaohang.com/media/tool_icons/default_cA7WJBp.png",logo:"https://kjdaohang.com/media/tool_icons/default_cA7WJBp.png",tags:"AI智能体",order:3,is_active:!0,views:19,likes_count:0,created_at:"2025-05-22T15:22:30.018532+08:00",updated_at:"2025-05-24T12:05:04.544752+08:00",desc_md:`### MiniMax Agent

- **开发商**：MiniMax
- **简介**：MiniMax Agent是一款基于深度学习和NLP技术的AI智能助手，支持对话、知识问答、内容创作等多场景应用。
- **主要特性**：
  - 智能对话与知识问答
  - 内容创作与自动摘要
  - 多模型能力集成
  - API开放与多平台支持
  - 数据安全与隐私保护
- **适用人群**：企业用户、开发者、内容创作者
- [官网链接](https://agent.minimax.io/)
`},{id:160,parent_category:3,parent_category_name:"AI工具",sub_category:7,sub_category_name:"AI音频",name:"海螺AI语音",description:"由MiniMax推出的一款AI语音合成工具，专注于提供高质量、多语言、多情感的语音生成服务",url:"https://hailuoai.com/audio",icon:"https://kjdaohang.com/media/tool_icons/hailuoai.png",logo:"https://kjdaohang.com/media/tool_icons/hailuoai.png",tags:"AI语音助手",order:3,is_active:!0,views:11,likes_count:0,created_at:"2025-05-22T12:23:12.754759+08:00",updated_at:"2025-05-23T21:27:41.340864+08:00"},{id:196,parent_category:3,parent_category_name:"AI工具",sub_category:7,sub_category_name:"AI音频",name:"TTSMAKER",description:"一款免费的在线文本转语音（TTS）工具",url:"https://ttsmaker.cn/",icon:"https://kjdaohang.com/media/tool_icons/cropped-android-chrome-512x512-1.png",logo:"https://kjdaohang.com/media/tool_icons/cropped-android-chrome-512x512-1.png",tags:"TTS,文本转语音",order:3,is_active:!0,views:10,likes_count:0,created_at:"2025-05-22T14:42:38.929736+08:00",updated_at:"2025-05-23T21:36:45.189488+08:00"},{id:129,parent_category:3,parent_category_name:"AI工具",sub_category:7,sub_category_name:"AI音频",name:"音疯",description:"由昆仑万维最新推出的一款AI音乐创作平台，允许用户输入歌词一键生成专属的歌曲",url:"https://www.yinfeng.cn/create",icon:"https://kjdaohang.com/media/tool_icons/yinfeng-logo1.png",logo:"https://kjdaohang.com/media/tool_icons/yinfeng-logo1.png",tags:"AI音乐创作",order:3,is_active:!0,views:10,likes_count:0,created_at:"2025-05-22T11:06:45.995883+08:00",updated_at:"2025-05-23T21:19:08.797283+08:00"},{id:159,parent_category:3,parent_category_name:"AI工具",sub_category:7,sub_category_name:"AI音频",name:"智声云配",description:"一款由智声悦和（杭州）科技有限公司推出的专注于AI音频的创新工具。",url:"https://app.dubbingx.com/",icon:"https://kjdaohang.com/media/tool_icons/logo_sggGUMb.png",logo:"https://kjdaohang.com/media/tool_icons/logo_sggGUMb.png",tags:"AI语音助手",order:3,is_active:!0,views:8,likes_count:0,created_at:"2025-05-22T12:20:35.597852+08:00",updated_at:"2025-05-23T21:23:39.770804+08:00"},{id:213,parent_category:3,parent_category_name:"AI工具",sub_category:10,sub_category_name:"AI设计",name:"简单设计",description:"简单设计是一款免费的在线设计、图片处理工具，支持设计封面图片、海报、LOGO等。",url:"https://jiandan.link/",icon:"https://kjdaohang.com/media/tool_icons/1AE32E9F9E49E40F57FF3CB7401ACBD2.png",logo:"https://kjdaohang.com/media/tool_icons/1AE32E9F9E49E40F57FF3CB7401ACBD2.png",tags:"AI设计",order:3,is_active:!0,views:7,likes_count:0,created_at:"2025-05-22T15:34:51.206689+08:00",updated_at:"2025-05-24T11:23:08.807933+08:00"},{id:137,parent_category:3,parent_category_name:"AI工具",sub_category:14,sub_category_name:"AI智能助手",name:"MetaLaw",description:"一款由秘塔科技开发的智能法律类案检索工具，专为法律从业者设计。",url:"https://meta.law/",icon:"https://kjdaohang.com/media/tool_icons/E__picgoMetaLaw_Logo.png",logo:"https://kjdaohang.com/media/tool_icons/E__picgoMetaLaw_Logo.png",tags:"秘塔科技,法律咨询",order:3,is_active:!0,views:3,likes_count:0,created_at:"2025-05-22T11:29:24.038935+08:00",updated_at:"2025-05-24T17:05:55.085955+08:00",desc_md:`### MetaLaw

- **开发商**：秘塔科技
- **简介**：MetaLaw 是一款专为法律从业者设计的智能法律案例检索工具，基于大模型技术，支持法律文书检索、案例分析、法规查询等。
- **主要特性**：
  - 智能法律案例检索与分析
  - 法律文书自动生成与推荐
  - 支持法规、判例、合同等多类型文档
  - 多维度筛选与智能摘要
  - 数据安全与隐私保护
- **适用人群**：律师、法务、法律研究人员
- [官网链接](https://meta.law/)
`},{id:128,parent_category:3,parent_category_name:"AI工具",sub_category:7,sub_category_name:"AI音频",name:"录咖AI",description:"一款由网旭科技推出的全球领先的AI音视频处理平台",url:"https://reccloud.cn/",icon:"https://kjdaohang.com/media/tool_icons/%E5%BD%95%E5%92%96.png",logo:"https://kjdaohang.com/media/tool_icons/%E5%BD%95%E5%92%96.png",tags:"AI语音助手",order:3,is_active:!0,views:3,likes_count:0,created_at:"2025-05-22T11:05:44.948625+08:00",updated_at:"2025-05-23T21:13:01.132180+08:00"},{id:193,parent_category:3,parent_category_name:"AI工具",sub_category:7,sub_category_name:"AI音频",name:"BGM猫",description:"一款AI智能生成BGM音乐的工具，用户只需选择音乐时长和对应标签便能自动生成BGM。",url:"https://bgmcat.com/home",icon:"https://kjdaohang.com/media/tool_icons/_U_5ljL1xeZkKAVuoKG2v.png",logo:"https://kjdaohang.com/media/tool_icons/_U_5ljL1xeZkKAVuoKG2v.png",tags:"AI语音助手",order:3,is_active:!0,views:2,likes_count:0,created_at:"2025-05-22T14:36:03.496719+08:00",updated_at:"2025-05-23T21:29:52.968802+08:00"},{id:138,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"苏打办公",description:"一款由360公司开发的一站式在线办公工具合集，它集成了多种办公功能。",url:"https://bangong.360.cn/",icon:"https://kjdaohang.com/media/tool_icons/suda-bangong-logo.png",logo:"https://kjdaohang.com/media/tool_icons/suda-bangong-logo.png",tags:"奇虎360,办公助手",order:3,is_active:!0,views:2,likes_count:0,created_at:"2025-05-22T11:31:05.069473+08:00",updated_at:"2025-05-24T14:56:34.003094+08:00",desc_md:`### 苏打办公

- **开发商**：奇虎360
- **简介**：苏打办公是一站式在线办公工具平台，集成文档编辑、表格处理、PDF 工具、图片处理等多种功能，满足用户多样化办公需求。
- **主要特性**：
  - 文档、表格、PPT 在线编辑
  - PDF 转换与处理
  - 图片编辑与格式转换
  - 多端同步与团队协作
  - 免费使用，持续更新
- **适用人群**：企业用户、学生、内容创作者、办公人士
- [官网链接](https://bangong.360.cn/)
`},{id:135,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"灵办AI",description:"一款全能型AI助手。",url:"https://ilingban.com/",icon:"https://kjdaohang.com/media/tool_icons/default_999Pmow.png",logo:"https://kjdaohang.com/media/tool_icons/default_999Pmow.png",tags:"办公学习,AI助手",order:3,is_active:!0,views:2,likes_count:0,created_at:"2025-05-22T11:25:27.900439+08:00",updated_at:"2025-05-24T15:01:21.604200+08:00",desc_md:`### 灵办AI

- **开发商**：灵办AI团队
- **简介**：灵办AI是一款全能型 AI 助手，集成智能写作、知识管理、数据分析等多种功能，适合办公和学习场景。
- **主要特性**：
  - 智能写作与内容生成
  - 知识库管理与检索
  - 数据分析与可视化
  - 多端同步与团队协作
  - 持续更新与功能扩展
- **适用人群**：企业用户、学生、内容创作者、数据分析师
- [官网链接](https://ilingban.com/)
`},{id:280,parent_category:63,parent_category_name:"办公神器",sub_category:70,sub_category_name:"问卷表单",name:"易表达",description:"一款免费的智能化、小白式在线问卷工具平台",url:"https://www.yibiaoda.com/",icon:"https://kjdaohang.com/media/tool_icons/%E6%98%93%E8%A1%A8%E8%BE%BE.jpg",logo:"https://kjdaohang.com/media/tool_icons/%E6%98%93%E8%A1%A8%E8%BE%BE.jpg",tags:"问卷调查",order:3,is_active:!0,views:0,likes_count:0,created_at:"2025-05-22T18:37:44.077363+08:00",updated_at:"2025-05-27T10:18:18.118941+08:00",desc_md:`### 易表达

- **开发商**：易表达团队
- **简介**：易表达是一款智能化、操作简单的在线问卷工具平台，适合零基础用户快速创建和发布问卷。
- **主要特性**：
  - 智能化问卷设计与逻辑跳转
  - 实时数据统计与分析
  - 丰富的模板与自定义设计
  - 多渠道发布与回收
  - 数据导出与可视化报告
- **适用人群**：个人用户、企业、教育机构、市场调研员
- [官网链接](https://www.yibiaoda.com/)
`},{id:195,parent_category:3,parent_category_name:"AI工具",sub_category:7,sub_category_name:"AI音频",name:"文本转语音",description:"在线文本转语音工具",url:"http://ttsonline.cn/",icon:"https://kjdaohang.com/media/tool_icons/ai-tts.BLxjXkFw_9EevO.png",logo:"https://kjdaohang.com/media/tool_icons/ai-tts.BLxjXkFw_9EevO.png",tags:"文本转语音",order:5,is_active:!0,views:24,likes_count:0,created_at:"2025-05-22T14:41:57.167015+08:00",updated_at:"2025-05-23T21:32:42.854336+08:00"},{id:136,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"得理法搜",description:"一款专为律师和法律团队设计的智能法律检索工具，由得理公司开发",url:"https://data.delilegal.com/",icon:"https://kjdaohang.com/media/tool_icons/256x256bb_HcN6Ok2.png",logo:"https://kjdaohang.com/media/tool_icons/256x256bb_HcN6Ok2.png",tags:"法律助手",order:5,is_active:!0,views:7,likes_count:0,created_at:"2025-05-22T11:27:20.479348+08:00",updated_at:"2025-05-24T14:58:43.024816+08:00",desc_md:`### 得理法搜

- **开发商**：得理公司
- **简介**：得理法搜是一款专为律师和法律团队设计的智能法律检索工具，支持法律案例、法规、合同等多类型文档的智能检索与分析。
- **主要特性**：
  - 智能法律案例检索与分析
  - 法律文书自动生成与推荐
  - 多维度筛选与智能摘要
  - 数据安全与隐私保护
  - 支持团队协作与知识管理
- **适用人群**：律师、法务、法律研究人员、企业法务团队
- [官网链接](https://data.delilegal.com/)
`},{id:163,parent_category:3,parent_category_name:"AI工具",sub_category:13,sub_category_name:"AI办公神器",name:"Tiktokenizer",description:"基于 OpenAI 的tiktoken库开发，计算输入文本的 token 数量，通过在线操作界面，用户输入文本后，它能快速运算出所需的 token 数量",url:"https://tiktokenizer.vercel.app/",icon:"https://kjdaohang.com/media/tool_icons/favicon_VshNkYH.png",logo:"https://kjdaohang.com/media/tool_icons/favicon_VshNkYH.png",tags:"分词数统计",order:10,is_active:!0,views:7,likes_count:0,created_at:"2025-05-22T12:32:54.919342+08:00",updated_at:"2025-06-13T18:25:10.303770+08:00",desc_md:`### Tiktokenizer

- **开发商**：Tiktokenizer 团队
- **简介**：Tiktokenizer 是一款基于 OpenAI tiktoken 库开发的在线分词统计工具，支持快速计算输入文本的 token 数量，便于开发者评估大模型调用成本。
- **主要特性**：
  - 支持多种大模型分词规则
  - 实时计算 token 数量
  - 简洁易用的在线界面
  - 支持批量文本处理
  - 免费使用
- **适用人群**：开发者、AI 应用集成商、内容创作者
- [官网链接](https://tiktokenizer.vercel.app/)
`},{id:7,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"即梦AI",description:"字节跳动旗下团队开发的一款一站式生成式AI创作平台。",url:"https://jimeng.jianying.com/ai-tool/home",icon:"https://kjdaohang.com/media/tool_icons/5754f-jimeng.jianying.com.png",logo:"https://kjdaohang.com/media/tool_icons/5754f-jimeng.jianying.com.png",tags:"剪映团队,一站式AI创作",order:200,is_active:!0,views:170,likes_count:0,created_at:"2025-05-21T12:53:23.672082+08:00",updated_at:"2025-06-17T14:32:43.025406+08:00"},{id:9,parent_category:2,parent_category_name:"热门推荐",sub_category:null,name:"LiblibAI",description:"国内领先的AI图像创作平台和模型分享社区，适合二次元风格AI绘画。",url:"https://www.liblib.ai",icon:"https://kjdaohang.com/media/tool_icons/img_6524ddece10ee.png",logo:"https://kjdaohang.com/media/tool_icons/img_6524ddece10ee.png",tags:"图像创作平台,模型社区",order:202,is_active:!0,views:88,likes_count:1,created_at:"2025-05-21T12:56:26.193894+08:00",updated_at:"2025-06-17T14:35:46.908034+08:00"},{id:11,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"Stable Diffusion",description:"由 Stability AI 开发并开源的一款基于深度学习的文本到图像生成模型",url:"https://stablediffusionweb.com",icon:"https://kjdaohang.com/media/tool_icons/stable-diffusion-logo_l267vLp.png",logo:"https://kjdaohang.com/media/tool_icons/stable-diffusion-logo_l267vLp.png",tags:"Stability AI ,开源,图像生成模型",order:205,is_active:!0,views:140,likes_count:0,created_at:"2025-05-21T13:01:18.334016+08:00",updated_at:"2025-05-23T13:02:33.716089+08:00"},{id:120,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"Midjourney",description:"一个集人工智能绘图、探索、社区互动和个性化服务于一体的绘画平台。",url:"https://www.midjourney.com/",icon:"https://kjdaohang.com/media/tool_icons/1200px-Midjourney_Emblem__Discord.svg.png",logo:"https://kjdaohang.com/media/tool_icons/1200px-Midjourney_Emblem__Discord.svg.png",tags:"AI绘画,社区",order:205,is_active:!0,views:80,likes_count:0,created_at:"2025-05-22T10:47:02.597998+08:00",updated_at:"2025-05-23T13:41:32.550082+08:00"},{id:121,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"堆友AI",description:"由阿里巴巴设计团队推出的一站式AI设计平台，定位为“设计师全成长周期服务平台”。",url:"https://d.design/",icon:"https://kjdaohang.com/media/tool_icons/default_CP7lIEC.png",logo:"https://kjdaohang.com/media/tool_icons/default_CP7lIEC.png",tags:"阿里巴巴,AI绘画",order:205,is_active:!0,views:40,likes_count:0,created_at:"2025-05-22T10:49:47.875394+08:00",updated_at:"2025-05-23T13:47:46.216021+08:00"},{id:55,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"文心一格",description:'百度推出的一款AI艺术和创意辅助平台，依托飞桨和文心大模型的技术创新，实现"一语成画"的创作体验。',url:"https://yige.baidu.com/",icon:"https://kjdaohang.com/media/tool_icons/20240522051247345.png",logo:"https://kjdaohang.com/media/tool_icons/20240522051247345.png",tags:"百度出品,AI绘画",order:205,is_active:!0,views:25,likes_count:0,created_at:"2025-05-21T21:46:42.757383+08:00",updated_at:"2025-05-23T17:47:49.316122+08:00"},{id:51,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"通义万相",description:"阿里云推出的一款AI多模态创作平台。",url:"https://tongyi.aliyun.com/wanxiang/",icon:"https://kjdaohang.com/media/tool_icons/1740605455-wan2.1.png",logo:"https://kjdaohang.com/media/tool_icons/1740605455-wan2.1.png",tags:"阿里旗下,AI多模态",order:206,is_active:!0,views:29,likes_count:0,created_at:"2025-05-21T21:25:05.479693+08:00",updated_at:"2025-05-23T13:21:49.373350+08:00"},{id:118,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"Vega AI",description:"由国内右脑科技推出的一款在线AI绘画创作平台，基于Stable Diffusion技术开发",url:"https://vegaai.art/",icon:"https://kjdaohang.com/media/tool_icons/default_ebD59YZ.png",logo:"https://kjdaohang.com/media/tool_icons/default_ebD59YZ.png",tags:"右脑科技,AI绘画",order:206,is_active:!0,views:25,likes_count:0,created_at:"2025-05-22T10:41:46.033421+08:00",updated_at:"2025-05-23T13:55:09.680232+08:00"},{id:210,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"吐司AI",description:"一个Al绘画模型分享社区和在线生图平台。",url:"https://tusiart.com/",icon:"https://kjdaohang.com/media/tool_icons/4b1c1722630336.png",logo:"https://kjdaohang.com/media/tool_icons/4b1c1722630336.png",tags:"AI绘画,社区",order:206,is_active:!0,views:20,likes_count:0,created_at:"2025-05-22T15:26:56.026160+08:00",updated_at:"2025-05-23T13:55:29.119291+08:00"},{id:12,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"AI秒画",description:"由商汤科技推出的一款AI绘画创作工具。",url:"https://miaohua.sensetime.com/",icon:"https://kjdaohang.com/media/tool_icons/m-logo.png",logo:"https://kjdaohang.com/media/tool_icons/m-logo.png",tags:"商汤科技,AI绘画",order:210,is_active:!0,views:38,likes_count:0,created_at:"2025-05-21T13:02:09.808469+08:00",updated_at:"2025-05-23T13:21:40.817651+08:00"},{id:36,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"可图AI",description:"快手旗下可灵AI团队开发的一款专业的AI图像生成工具。",url:"https://kolors.kuaishou.com/",icon:"https://kjdaohang.com/media/tool_icons/kling-logo.png",logo:"https://kjdaohang.com/media/tool_icons/kling-logo.png",tags:"快手旗下,图像生成",order:210,is_active:!0,views:28,likes_count:0,created_at:"2025-05-21T20:53:16.360498+08:00",updated_at:"2025-05-23T13:21:15.897469+08:00"},{id:119,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"无界AI",description:"一款国产全场景AIGC内容创作平台",url:"https://www.wujieai.com/",icon:"https://kjdaohang.com/media/tool_icons/20230601100726_6ad24277.png",logo:"https://kjdaohang.com/media/tool_icons/20230601100726_6ad24277.png",tags:"AIGC,全场景",order:210,is_active:!0,views:21,likes_count:0,created_at:"2025-05-22T10:43:14.084593+08:00",updated_at:"2025-05-23T13:38:22.137748+08:00"},{id:14,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"星流AI",description:"由LiblibAI团队推出的一款专业AI图像生成平台",url:"https://www.xinliu.ai",icon:"https://kjdaohang.com/media/tool_icons/default_RMvHABl.png",logo:"https://kjdaohang.com/media/tool_icons/default_RMvHABl.png",tags:"LiblibAI团队,图像生成平台",order:210,is_active:!0,views:21,likes_count:0,created_at:"2025-05-21T18:26:01.490806+08:00",updated_at:"2025-05-23T13:10:34.760366+08:00"},{id:59,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"360智图",description:"一款一站式AI图片服务平台，由360公司推出，基于360搜索算法和图像AI能力。",url:"https://pic.360.com/home",icon:"https://kjdaohang.com/media/tool_icons/lxjpg-1.png",logo:"https://kjdaohang.com/media/tool_icons/lxjpg-1.png",tags:"奇虎360,AI绘画",order:210,is_active:!0,views:19,likes_count:0,created_at:"2025-05-21T21:55:01.506384+08:00",updated_at:"2025-05-23T13:33:50.336748+08:00"},{id:58,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"360智绘",description:"由奇虎360科技推出的一款AI图像生成与编辑工具，集成了多种AI技术",url:"https://aigc.360.com/",icon:"https://kjdaohang.com/media/tool_icons/20241128113539507.png",logo:"https://kjdaohang.com/media/tool_icons/20241128113539507.png",tags:"奇虎360,AI绘画",order:210,is_active:!0,views:12,likes_count:0,created_at:"2025-05-21T21:53:31.793296+08:00",updated_at:"2025-05-23T13:30:31.586791+08:00"},{id:53,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"触手AI",description:"由水母智能科技推出的国产AI绘画创作平台，功能全面且强大",url:"https://acgnai.art/",icon:"https://kjdaohang.com/media/tool_icons/20240827034306240.png",logo:"https://kjdaohang.com/media/tool_icons/20240827034306240.png",tags:"水母智能,AI绘画",order:211,is_active:!0,views:12,likes_count:0,created_at:"2025-05-21T21:28:56.698477+08:00",updated_at:"2025-05-23T13:24:50.756677+08:00"},{id:174,parent_category:3,parent_category_name:"AI工具",sub_category:6,sub_category_name:"AI编程",name:"图片转换提示词",description:"一个在线AI工具，可以快速将图片转换为AI绘画软件可用的提示词Prompt。",url:"https://imagetoprompt.org/zh",icon:"https://kjdaohang.com/media/tool_icons/resume-keyword-scanner-icon-vector-image-can-be-used-recruitment-agency_120816-167350.png",logo:"https://kjdaohang.com/media/tool_icons/resume-keyword-scanner-icon-vector-image-can-be-used-recruitment-agency_120816-167350.png",tags:"AI提示词",order:220,is_active:!0,views:45,likes_count:0,created_at:"2025-05-22T13:46:49.898806+08:00",updated_at:"2025-05-24T14:29:04.154549+08:00"},{id:52,parent_category:3,parent_category_name:"AI工具",sub_category:5,sub_category_name:"AI绘画",name:"超能画布",description:"由百度网盘推出的一款专注于人像摄影的AI创意生成工具。",url:"https://photo.baidu.com/photasy/home",icon:"https://kjdaohang.com/media/tool_icons/photasy-icon-1200x1200.png",logo:"https://kjdaohang.com/media/tool_icons/photasy-icon-1200x1200.png",tags:"百度网盘,AI创意绘图",order:220,is_active:!0,views:11,likes_count:0,created_at:"2025-05-21T21:27:21.164233+08:00",updated_at:"2025-05-23T13:21:01.410576+08:00"},{id:400,parent_category:16,parent_category_name:"测试工具",sub_category:null,sub_category_name:"单元测试",name:"Jest",description:"Facebook开源的JavaScript测试框架，专注于简洁的API和快速的执行速度。",url:"https://jestjs.io/",icon:"https://jestjs.io/img/favicon/favicon.ico",logo:"https://jestjs.io/img/jest.png",tags:"JavaScript,测试框架,单元测试",order:1,is_active:!0,views:1e3,likes_count:0,created_at:"2025-07-10T10:00:00+08:00",updated_at:"2025-07-10T10:00:00+08:00",desc_md:`### Jest

- **开发商**：Facebook（Meta）
- **简介**：Jest 是 Facebook 开源的 JavaScript 测试框架，专注于单元测试和前端测试，拥有简洁的 API 和极快的执行速度。
- **主要特性**：
  - 零配置开箱即用
  - 快速的测试运行和快照测试
  - 丰富的断言和 Mock 能力
  - 与 React、Vue 等前端框架集成良好
  - 丰富的插件和社区生态
- **适用人群**：前端开发者、JavaScript 工程师、测试团队
- [官网链接](https://jestjs.io/)
`},{id:401,parent_category:16,parent_category_name:"测试工具",sub_category:null,sub_category_name:"单元测试",name:"Mocha",description:"功能丰富的JavaScript测试框架，支持异步测试。",url:"https://mochajs.org/",icon:"https://mochajs.org/favicon.ico",logo:"https://mochajs.org/images/logo.svg",tags:"JavaScript,测试框架,单元测试",order:2,is_active:!0,views:800,likes_count:0,created_at:"2025-07-10T10:00:00+08:00",updated_at:"2025-07-10T10:00:00+08:00",desc_md:`### Mocha

- **开发商**：开源社区
- **简介**：Mocha 是一款功能丰富的 JavaScript 测试框架，支持异步测试和多种断言库，适合 Node.js 和前端项目的单元测试和集成测试。
- **主要特性**：
  - 支持异步测试和多种断言库
  - 灵活的测试用例组织
  - 丰富的插件和报告工具
  - 易于集成到 CI/CD 流程
- **适用人群**：JavaScript 开发者、Node.js 工程师、测试团队
- [官网链接](https://mochajs.org/)
`},{id:402,parent_category:16,parent_category_name:"测试工具",sub_category:null,sub_category_name:"单元测试",name:"Pytest",description:"Python的测试框架，提供简洁的语法和丰富的功能。",url:"https://docs.pytest.org/",icon:"https://docs.pytest.org/en/stable/_static/favicon.png",logo:"https://docs.pytest.org/en/stable/_static/pytest1.png",tags:"Python,测试框架,单元测试",order:3,is_active:!0,views:900,likes_count:0,created_at:"2025-07-10T10:00:00+08:00",updated_at:"2025-07-10T10:00:00+08:00",desc_md:`### Pytest

- **开发商**：开源社区
- **简介**：Pytest 是一款流行的 Python 测试框架，支持单元测试、功能测试和集成测试，拥有简洁的语法和强大的插件生态。
- **主要特性**：
  - 简洁的测试用例编写方式
  - 丰富的断言和参数化功能
  - 支持插件扩展和自定义钩子
  - 与主流 CI/CD 工具集成良好
- **适用人群**：Python 开发者、测试工程师、自动化测试团队
- [官网链接](https://docs.pytest.org/)
`},{id:403,parent_category:24,parent_category_name:"开发工具",sub_category:null,sub_category_name:"代码评审",name:"SonarQube",description:"开源的代码质量平台，支持多种编程语言的静态代码分析。",url:"https://www.sonarqube.org/",icon:"https://www.sonarqube.org/themes/custom/sq/favicon.ico",logo:"https://www.sonarqube.org/themes/custom/sq/logo.svg",tags:"代码质量,静态分析,代码评审",order:1,is_active:!0,views:1200,likes_count:0,created_at:"2025-07-10T10:00:00+08:00",updated_at:"2025-07-10T10:00:00+08:00",desc_md:`### SonarQube

- **简介**：SonarQube 是一款领先的开源代码质量管理平台，支持 20 多种主流编程语言（如 Java、C#、Python、JavaScript、TypeScript 等）。它通过静态代码分析，帮助开发团队持续检测代码中的 bug、漏洞、安全隐患和代码异味。
- **主要特性**：
  - 支持多语言代码质量检测
  - 提供详细的代码质量报告和趋势分析
  - 集成代码门禁，保障代码合规性
  - 支持与 CI/CD 流水线集成（如 Jenkins、GitLab CI 等）
  - 丰富的插件生态，支持自定义规则
  - 社区版免费开源，企业版提供更多高级功能
- **适用场景**：适用于企业级项目、团队协作、持续集成环境下的代码质量管理。
- [官网链接](https://www.sonarqube.org/)
`},{id:404,parent_category:24,parent_category_name:"开发工具",sub_category:null,sub_category_name:"代码评审",name:"CodeClimate",description:"自动化代码质量评估工具，提供代码审查和技术债务跟踪。",url:"https://codeclimate.com/",icon:"https://codeclimate.com/favicon.ico",logo:"https://codeclimate.com/assets/logo-8169e27868b1d3e522a1312e3472bd1d.svg",tags:"代码质量,自动化,代码评审",order:2,is_active:!0,views:700,likes_count:0,created_at:"2025-07-10T10:00:00+08:00",updated_at:"2025-07-10T10:00:00+08:00",desc_md:`### CodeClimate

- **简介**：CodeClimate 是一款自动化代码质量评估工具，支持多种编程语言。它为开发团队提供代码审查、技术债务跟踪和持续集成分析，帮助提升代码质量和团队协作效率。
- **主要特性**：
  - 自动化代码质量检测和评分
  - 技术债务和代码异味跟踪
  - 支持多种主流语言和框架
  - 与 GitHub、GitLab、Bitbucket 等平台集成
  - 提供详细的可视化报告和趋势分析
- **适用场景**：适合需要持续代码质量管理和团队协作的开发团队。
- [官网链接](https://codeclimate.com/)
`},{id:405,parent_category:34,parent_category_name:"设计工具",sub_category:null,sub_category_name:"3D设计",name:"Blender",description:"开源的3D创作套件，支持建模、动画、渲染等功能。",url:"https://www.blender.org/",icon:"https://www.blender.org/wp-content/themes/blender/images/icons/favicon.ico",logo:"https://www.blender.org/wp-content/uploads/2019/07/blender_logo.png",tags:"3D建模,开源,动画",order:1,is_active:!0,views:1500,likes_count:0,created_at:"2025-07-10T10:00:00+08:00",updated_at:"2025-07-10T10:00:00+08:00",desc_md:`### Blender

- **简介**：Blender 是一款开源免费的3D创作套件，支持建模、雕刻、动画、渲染、视频编辑、特效合成等全流程。拥有强大的社区和丰富的插件，适合个人和团队进行3D内容创作。
- **主要特性**：
  - 3D建模、雕刻、UV展开
  - 动画制作与骨骼绑定
  - 高质量渲染（Cycles、Eevee引擎）
  - 视频剪辑与后期合成
  - 支持Python脚本和插件扩展
- **适用人群**：3D艺术家、动画师、游戏开发者、影视特效从业者
- [官网链接](https://www.blender.org/)
`},{id:406,parent_category:34,parent_category_name:"设计工具",sub_category:null,sub_category_name:"3D设计",name:"SketchUp",description:"直观的3D建模软件，广泛应用于建筑、室内设计等领域。",url:"https://www.sketchup.com/",icon:"https://www.sketchup.com/favicon.ico",logo:"https://www.sketchup.com/themes/sketchup2021/images/sketchup-logo.svg",tags:"3D建模,建筑设计,室内设计",order:2,is_active:!0,views:1100,likes_count:0,created_at:"2025-07-10T10:00:00+08:00",updated_at:"2025-07-10T10:00:00+08:00",desc_md:`### SketchUp

- **简介**：SketchUp 是一款以直观易用著称的3D建模软件，广泛应用于建筑设计、室内设计、景观设计等领域。拥有丰富的模型库和插件生态，适合快速搭建和可视化设计方案。
- **主要特性**：
  - 直观的拖拽式建模操作
  - 丰富的3D模型资源库（3D Warehouse）
  - 支持插件扩展和渲染器集成
  - 支持多种导出格式（SKP、DWG、OBJ等）
  - 支持云端协作与分享
- **适用人群**：建筑师、室内设计师、景观设计师、学生
- [官网链接](https://www.sketchup.com/)
`},{id:407,parent_category:34,parent_category_name:"设计工具",sub_category:null,sub_category_name:"UI设计",name:"Figma",description:"流行的UI/UX设计协作工具，支持实时协作和原型设计。",url:"https://www.figma.com/",icon:"https://www.figma.com/favicon.ico",logo:"https://www.figma.com/static/logo/figma-logo.svg",tags:"UI设计,协作,原型设计",order:1,is_active:!0,views:2e3,likes_count:0,created_at:"2025-07-10T11:00:00+08:00",updated_at:"2025-07-10T11:00:00+08:00",desc_md:`### Figma

- **简介**：Figma 是一款基于云端的 UI/UX 设计协作工具，支持多人实时协作、原型设计和设计系统管理。广泛应用于网页、移动端界面设计，适合远程团队和大型项目。
- **主要特性**：
  - 实时多人协作与评论
  - 丰富的设计组件和插件生态
  - 支持原型设计与交互动画
  - 设计系统和组件库管理
  - 支持多平台（Web、Windows、Mac）
- **适用人群**：UI/UX设计师、产品经理、开发团队、远程协作团队
- [官网链接](https://www.figma.com/)
`},{id:408,parent_category:34,parent_category_name:"设计工具",sub_category:null,sub_category_name:"UI设计",name:"Adobe XD",description:"Adobe的UI/UX设计工具，提供设计、原型和共享功能。",url:"https://www.adobe.com/products/xd.html",icon:"https://www.adobe.com/favicon.ico",logo:"https://www.adobe.com/content/dam/cc/icons/xd.svg",tags:"UI设计,Adobe,原型设计",order:2,is_active:!0,views:1800,likes_count:0,created_at:"2025-07-10T11:00:00+08:00",updated_at:"2025-07-10T11:00:00+08:00",desc_md:`### Adobe XD

- **简介**：Adobe XD 是 Adobe 推出的专业 UI/UX 设计工具，集设计、原型、协作与共享于一体。支持高保真界面设计、交互动画和团队协作，适合网页和移动应用设计。
- **主要特性**：
  - 高保真界面设计与原型制作
  - 支持交互动画和过渡效果
  - 实时协作与评论
  - 与 Photoshop、Illustrator 等 Adobe 产品无缝集成
  - 丰富的插件和资源库
- **适用人群**：UI/UX设计师、产品经理、开发团队
- [官网链接](https://www.adobe.com/products/xd.html)
`},{id:409,parent_category:24,parent_category_name:"开发工具",sub_category:null,sub_category_name:"构建工具",name:"Webpack",description:"现代JavaScript应用的静态模块打包器，支持代码拆分和优化。",url:"https://webpack.js.org/",icon:"https://webpack.js.org/favicon.ico",logo:"https://webpack.js.org/icon-pwa-512x512.f352c1530754cb89e192.png",tags:"JavaScript,打包工具,构建",order:1,is_active:!0,views:2200,likes_count:0,created_at:"2025-07-10T11:00:00+08:00",updated_at:"2025-07-10T11:00:00+08:00",desc_md:`### Webpack

- **简介**：Webpack 是现代 JavaScript 应用的静态模块打包器。它能够将项目中的各种资源（JavaScript、CSS、图片等）作为模块进行管理和打包，支持代码拆分、懒加载和按需加载，极大提升前端工程化水平。
- **主要特性**：
  - 支持多种资源类型的模块化管理
  - 代码拆分与懒加载，优化首屏加载速度
  - 丰富的 Loader 和 Plugin 生态
  - 支持 Tree Shaking，去除无用代码
  - 强大的开发服务器和热更新功能
- **适用场景**：适合中大型前端项目、需要高度自定义打包流程的开发团队。
- [官网链接](https://webpack.js.org/)
`},{id:410,parent_category:24,parent_category_name:"开发工具",sub_category:null,sub_category_name:"构建工具",name:"Vite",description:"下一代前端构建工具，提供极速的开发体验和优化的构建输出。",url:"https://vitejs.dev/",icon:"https://vitejs.dev/favicon.ico",logo:"https://vitejs.dev/logo.svg",tags:"前端构建,极速开发",order:2,is_active:!0,views:1900,likes_count:0,created_at:"2025-07-10T11:00:00+08:00",updated_at:"2025-07-10T11:00:00+08:00",desc_md:`### Vite

- **简介**：Vite 是由尤雨溪（Vue 作者）开发的下一代前端构建工具，采用原生 ES 模块和现代浏览器特性，实现极快的冷启动和热更新，极大提升开发体验。
- **主要特性**：
  - 极速冷启动和热更新
  - 原生 ES 模块支持
  - 构建输出优化，支持多种前端框架（Vue、React、Svelte 等）
  - 丰富的插件生态
  - 友好的配置和扩展能力
- **适用场景**：适合追求开发效率和现代前端工程体验的项目。
- [官网链接](https://vitejs.dev/)
`},{id:411,parent_category:40,parent_category_name:"运维工具",sub_category:null,sub_category_name:"CICD",name:"Jenkins",description:"开源的自动化服务器，支持持续集成和持续部署。",url:"https://www.jenkins.io/",icon:"https://www.jenkins.io/favicon.ico",logo:"https://www.jenkins.io/images/logos/jenkins/Jenkins.svg",tags:"自动化,CICD,开源",order:1,is_active:!0,views:2100,likes_count:0,created_at:"2025-07-10T11:00:00+08:00",updated_at:"2025-07-10T11:00:00+08:00",desc_md:`### Jenkins

- **开发商**：Jenkins 社区
- **简介**：Jenkins 是一款开源的自动化服务器，广泛用于持续集成和持续部署。支持多种插件扩展，适合自动化构建、测试和交付。
- **主要特性**：
  - 插件丰富，支持多种开发语言和工具链
  - 灵活的流水线和任务调度
  - 支持分布式构建和多节点
  - 易于集成第三方服务和通知
- **适用人群**：开发者、DevOps 团队、自动化测试工程师
- [官网链接](https://www.jenkins.io/)
`},{id:412,parent_category:40,parent_category_name:"运维工具",sub_category:null,sub_category_name:"CICD",name:"GitHub Actions",description:"GitHub的CI/CD平台，可直接在GitHub仓库中创建自动化工作流程。",url:"https://github.com/features/actions",icon:"https://github.com/favicon.ico",logo:"https://github.githubassets.com/images/modules/logos_page/GitHub-Actions.png",tags:"GitHub,CICD,自动化",order:2,is_active:!0,views:2300,likes_count:0,created_at:"2025-07-10T11:00:00+08:00",updated_at:"2025-07-10T11:00:00+08:00",desc_md:`### GitHub Actions

- **开发商**：GitHub
- **简介**：GitHub Actions 是 GitHub 的 CI/CD 平台，允许用户在仓库内直接创建自动化工作流，实现持续集成、持续部署和自动化运维。
- **主要特性**：
  - 与 GitHub 生态无缝集成
  - 支持多种触发事件和条件
  - 丰富的 Action 组件和社区支持
  - 可视化工作流和实时日志
- **适用人群**：开发者、自动化测试团队、DevOps 工程师
- [官网链接](https://github.com/features/actions)
`},{id:413,parent_category:34,parent_category_name:"设计工具",sub_category:null,sub_category_name:"原型设计",name:"Axure RP",description:"专业的原型设计工具，用于创建网站和应用程序的交互式原型。",url:"https://www.axure.com/",icon:"https://www.axure.com/favicon.ico",logo:"https://www.axure.com/wp-content/uploads/2019/07/axure-logo.svg",tags:"原型设计,交互设计,专业工具",order:1,is_active:!0,views:1700,likes_count:0,created_at:"2025-07-10T12:00:00+08:00",updated_at:"2025-07-10T12:00:00+08:00",desc_md:`### Axure RP

- **简介**：Axure RP 是一款专业的原型设计工具，广泛用于网站、移动应用和桌面软件的交互式原型制作。支持高保真交互、动态面板、条件逻辑等复杂功能，适合产品经理和设计师进行需求沟通和用户测试。
- **主要特性**：
  - 支持高保真原型和复杂交互设计
  - 动态面板、变量、条件逻辑等高级功能
  - 支持团队协作与版本管理
  - 可导出 HTML 原型进行在线预览和分享
  - 丰富的组件库和模板
- **适用人群**：产品经理、交互设计师、UI/UX设计师、开发团队
- [官网链接](https://www.axure.com/)
`},{id:414,parent_category:34,parent_category_name:"设计工具",sub_category:null,sub_category_name:"原型设计",name:"InVision",description:"数字产品设计平台，提供原型、设计协作和用户测试功能。",url:"https://www.invisionapp.com/",icon:"https://www.invisionapp.com/favicon.ico",logo:"https://www.invisionapp.com/assets/favicon/apple-touch-icon-180x180.png",tags:"原型设计,设计协作,用户测试",order:2,is_active:!0,views:1600,likes_count:0,created_at:"2025-07-10T12:00:00+08:00",updated_at:"2025-07-10T12:00:00+08:00",desc_md:`### InVision

- **简介**：InVision 是一款数字产品设计与协作平台，支持原型设计、团队协作、用户测试和设计交付。适合远程团队进行设计沟通和反馈，提升产品开发效率。
- **主要特性**：
  - 支持交互原型和动画演示
  - 实时协作与评论，便于团队沟通
  - 用户测试与反馈收集
  - 设计系统和组件库管理
  - 与 Sketch、Photoshop、Figma 等工具集成
- **适用人群**：UI/UX设计师、产品经理、开发团队、远程协作团队
- [官网链接](https://www.invisionapp.com/)
`},{id:415,parent_category:34,parent_category_name:"设计工具",sub_category:null,sub_category_name:"流程图设计",name:"Draw.io",description:"免费开源的在线图表绘制工具，支持流程图、UML、组织结构图等多种图表类型。",url:"https://app.diagrams.net/",icon:"https://app.diagrams.net/favicon.ico",logo:"https://app.diagrams.net/static/img/logo.svg",tags:"流程图,开源,免费工具",order:1,is_active:!0,views:1900,likes_count:0,created_at:"2025-07-10T12:00:00+08:00",updated_at:"2025-07-10T12:00:00+08:00",desc_md:`### Draw.io（diagrams.net）

- **简介**：Draw.io（diagrams.net）是一款免费开源的在线图表绘制工具，支持流程图、UML、组织结构图、网络拓扑图等多种类型。无需注册即可使用，支持本地和云端存储。
- **主要特性**：
  - 免费开源，支持本地和云端（Google Drive、OneDrive、Dropbox）保存
  - 丰富的图形库和模板
  - 支持团队协作和版本管理
  - 可导入/导出多种格式（XML、PNG、SVG、PDF等）
  - 支持离线使用
- **适用人群**：开发者、产品经理、学生、教师、设计师
- [官网链接](https://app.diagrams.net/)
`},{id:416,parent_category:34,parent_category_name:"设计工具",sub_category:null,sub_category_name:"流程图设计",name:"Lucidchart",description:"云端流程图和可视化协作平台，提供丰富的图表模板和实时协作功能。",url:"https://www.lucidchart.com/",icon:"https://www.lucidchart.com/favicon.ico",logo:"https://www.lucidchart.com/public/img/lucidchart-logo.svg",tags:"流程图,协作,可视化",order:2,is_active:!0,views:1700,likes_count:0,created_at:"2025-07-10T12:00:00+08:00",updated_at:"2025-07-10T12:00:00+08:00",desc_md:`### Lucidchart

- **简介**：Lucidchart 是一款基于云端的流程图和可视化协作平台，支持团队成员实时协作编辑。它提供了丰富的流程图、组织结构图、UML、网络拓扑等模板，适用于业务流程梳理、项目管理、产品设计等多种场景。
- **主要特性**：
  - 实时多人协作与评论
  - 丰富的图表模板和图形库
  - 支持导入/导出 Visio 文件
  - 与 Google Drive、Slack、Atlassian 等主流工具集成
  - 自动化布局和数据驱动图表
- **适用人群**：产品经理、项目经理、开发团队、设计师、教育工作者等
- [官网链接](https://www.lucidchart.com/)
`},{id:417,parent_category:40,parent_category_name:"运维工具",sub_category:null,sub_category_name:"自动化运维",name:"Ansible",description:"开源的IT自动化工具，用于配置管理、应用部署和任务自动化。",url:"https://www.ansible.com/",icon:"https://www.ansible.com/favicon.ico",logo:"https://www.ansible.com/hubfs/2023-24/Ansible_RedHat-logo.svg",tags:"自动化,配置管理,部署",order:1,is_active:!0,views:2e3,likes_count:0,created_at:"2025-07-10T12:00:00+08:00",updated_at:"2025-07-10T12:00:00+08:00",desc_md:`### Ansible

- **开发商**：Red Hat
- **简介**：Ansible 是一款开源的 IT 自动化工具，支持配置管理、应用部署、自动化运维和编排。采用无代理架构，基于 YAML 的 Playbook，易于上手和扩展。
- **主要特性**：
  - 无代理架构，易于部署
  - 基于 YAML 的 Playbook 自动化脚本
  - 支持大规模集群管理
  - 丰富的模块和插件生态
  - 与云平台和容器平台集成良好
- **适用人群**：运维工程师、DevOps 团队、自动化运维开发者
- [官网链接](https://www.ansible.com/)
`},{id:418,parent_category:40,parent_category_name:"运维工具",sub_category:null,sub_category_name:"自动化运维",name:"Puppet",description:"开源的配置管理工具，用于自动化基础设施管理和应用部署。",url:"https://puppet.com/",icon:"https://puppet.com/favicon.ico",logo:"https://puppet.com/assets/images/logo/puppet-logo.svg",tags:"配置管理,自动化,基础设施",order:2,is_active:!0,views:1500,likes_count:0,created_at:"2025-07-10T12:00:00+08:00",updated_at:"2025-07-10T12:00:00+08:00",desc_md:`### Puppet

- **开发商**：Puppet, Inc.
- **简介**：Puppet 是一款开源的配置管理和自动化运维工具，支持基础设施即代码（IaC），可自动化服务器配置、应用部署和系统管理。
- **主要特性**：
  - 基础设施即代码（IaC）
  - 支持大规模集群和多平台
  - 丰富的模块和社区资源
  - 自动化配置、部署和合规性管理
  - 与云平台和 DevOps 工具链集成
- **适用人群**：运维工程师、DevOps 团队、系统管理员
- [官网链接](https://puppet.com/)
`},{id:419,parent_category:40,parent_category_name:"运维工具",sub_category:null,sub_category_name:"容器管理",name:"Docker",description:"开源的容器化平台，使开发者能够打包应用及其依赖项到一个可移植的容器中。",url:"https://www.docker.com/",icon:"https://www.docker.com/favicon.ico",logo:"https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",tags:"容器化,虚拟化,开发运维",order:1,is_active:!0,views:2500,likes_count:0,created_at:"2025-07-10T13:00:00+08:00",updated_at:"2025-07-10T13:00:00+08:00",desc_md:`### Docker

- **开发商**：Docker, Inc.
- **简介**：Docker 是一款开源的容器化平台，支持将应用及其依赖打包到可移植的容器中，实现环境一致性和高效部署。适用于开发、测试、生产等多种场景。
- **主要特性**：
  - 容器镜像快速构建与分发
  - 跨平台兼容与资源隔离
  - 支持自动化部署与扩展
  - 丰富的命令行与 API 工具
  - 与主流云平台和编排工具集成
- **适用人群**：开发者、运维工程师、企业 IT 团队
- [官网链接](https://www.docker.com/)
`},{id:420,parent_category:40,parent_category_name:"运维工具",sub_category:null,sub_category_name:"容器管理",name:"Kubernetes",description:"开源的容器编排平台，用于自动化部署、扩展和管理容器化应用程序。",url:"https://kubernetes.io/",icon:"https://kubernetes.io/favicon.ico",logo:"https://kubernetes.io/images/kubernetes-horizontal-color.png",tags:"容器编排,自动化部署,集群管理",order:2,is_active:!0,views:2300,likes_count:0,created_at:"2025-07-10T13:00:00+08:00",updated_at:"2025-07-10T13:00:00+08:00",desc_md:`### Kubernetes

- **开发商**：CNCF
- **简介**：Kubernetes 是一款开源的容器编排平台，支持自动化部署、扩展和管理容器化应用，广泛应用于云原生和微服务架构。
- **主要特性**：
  - 自动化容器编排与调度
  - 支持集群管理和弹性伸缩
  - 服务发现与负载均衡
  - 丰富的插件和生态系统
  - 与主流云平台无缝集成
- **适用人群**：运维工程师、云原生开发者、企业 IT 团队
- [官网链接](https://kubernetes.io/)
`},{id:421,parent_category:40,parent_category_name:"运维工具",sub_category:null,sub_category_name:"监控告警",name:"Prometheus",description:"开源的监控和告警工具包，专为云原生环境设计。",url:"https://prometheus.io/",icon:"https://prometheus.io/favicon.ico",logo:"https://prometheus.io/assets/prometheus_logo.svg",tags:"监控,告警,时序数据库",order:1,is_active:!0,views:2100,likes_count:0,created_at:"2025-07-10T13:00:00+08:00",updated_at:"2025-07-10T13:00:00+08:00",desc_md:`### Prometheus

- **开发商**：Prometheus 社区（CNCF）
- **简介**：Prometheus 是一款开源的监控和告警系统，专为云原生和微服务架构设计。它采用多维数据模型和强大的查询语言 PromQL，支持高效的时序数据采集、存储和告警。
- **主要特性**：
  - 多维数据模型和灵活的标签系统
  - 强大的 PromQL 查询语言
  - 自动服务发现和动态配置
  - 内置高效的时序数据库
  - 丰富的可视化和告警集成
  - 与 Kubernetes、Docker 等云原生平台深度集成
- **适用人群**：运维工程师、SRE、云原生开发团队
- [官网链接](https://prometheus.io/)
`},{id:422,parent_category:40,parent_category_name:"运维工具",sub_category:null,sub_category_name:"监控告警",name:"Grafana",description:"开源的可视化和监控平台，用于创建、探索和共享数据可视化。",url:"https://grafana.com/",icon:"https://grafana.com/favicon.ico",logo:"https://grafana.com/static/img/menu/grafana2.svg",tags:"数据可视化,监控仪表盘,告警",order:2,is_active:!0,views:2e3,likes_count:0,created_at:"2025-07-10T13:00:00+08:00",updated_at:"2025-07-10T13:00:00+08:00",desc_md:`### Grafana

- **开发商**：Grafana Labs
- **简介**：Grafana 是一款开源的数据可视化和监控平台，支持多种数据源（如 Prometheus、InfluxDB、Elasticsearch 等），可用于构建动态仪表盘和告警系统。
- **主要特性**：
  - 支持多种数据源和插件扩展
  - 动态仪表盘和丰富的可视化组件
  - 灵活的权限和团队协作管理
  - 支持告警和通知集成
  - 丰富的社区模板和生态
- **适用人群**：运维工程师、数据分析师、开发团队
- [官网链接](https://grafana.com/)
`},{id:423,parent_category:63,parent_category_name:"办公神器",sub_category:null,sub_category_name:"在线文档",name:"Google Docs",description:"Google提供的在线文档编辑工具，支持实时协作和多平台访问。",url:"https://docs.google.com/",icon:"https://www.google.com/favicon.ico",logo:"https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png",tags:"在线文档,Google,协作编辑",order:1,is_active:!0,views:2600,likes_count:0,created_at:"2025-07-10T14:00:00+08:00",updated_at:"2025-07-10T14:00:00+08:00",desc_md:`### Google Docs

- **开发商**：Google
- **简介**：Google Docs 是 Google 推出的在线文档编辑工具，支持多人实时协作、云端存储和多平台访问，广泛应用于团队协作和远程办公。
- **主要特性**：
  - 实时多人协作编辑
  - 云端自动保存和版本管理
  - 支持文档、表格、幻灯片等多种格式
  - 丰富的插件和扩展支持
  - 跨平台访问，兼容移动端
- **适用人群**：学生、教师、企业团队、远程办公用户
- [官网链接](https://docs.google.com/)
`},{id:424,parent_category:63,parent_category_name:"办公神器",sub_category:null,sub_category_name:"在线翻译",name:"Google翻译",description:"Google提供的在线翻译服务，支持多种语言之间的互译。",url:"https://translate.google.com/",icon:"https://www.google.com/favicon.ico",logo:"https://www.gstatic.com/images/branding/product/1x/translate_2020q4_48dp.png",tags:"翻译,多语言,AI翻译",order:1,is_active:!0,views:2800,likes_count:0,created_at:"2025-07-10T14:00:00+08:00",updated_at:"2025-07-10T14:00:00+08:00",desc_md:`### Google翻译

- **开发商**：Google
- **简介**：Google翻译是一款功能强大的在线翻译工具，支持多语言文本、语音、图片和文档翻译，适合全球用户跨语言交流。
- **主要特性**：
  - 多语言互译，支持100+语言
  - 文本、语音、图片、文档翻译
  - 实时对话翻译和拍照翻译
  - 支持网页、移动端和API
- **适用人群**：外语学习者、跨境用户、开发者、企业用户
- [官网链接](https://translate.google.com/)
`},{id:425,parent_category:44,parent_category_name:"实用小工具",sub_category:null,sub_category_name:"图片编辑",name:"Canva",description:"在线设计平台，提供简单易用的图片编辑、设计模板和素材。",url:"https://www.canva.com/",icon:"https://www.canva.com/favicon.ico",logo:"https://www.canva.com/build/8e2fbe7b68fbce7a72a7c01693336c20.svg",tags:"图片编辑,设计模板,在线设计",order:1,is_active:!0,views:2200,likes_count:0,created_at:"2025-07-10T14:00:00+08:00",updated_at:"2025-07-10T14:00:00+08:00"},{id:426,parent_category:44,parent_category_name:"实用小工具",sub_category:null,sub_category_name:"格式转换",name:"CloudConvert",description:"在线文件格式转换工具，支持超过200种格式之间的转换。",url:"https://cloudconvert.com/",icon:"https://cloudconvert.com/favicon.ico",logo:"https://cloudconvert.com/assets/apple-touch-icon-180x180-836c79c5315747e7105f82097e7e0ae8.png",tags:"文件转换,格式转换,在线工具",order:1,is_active:!0,views:1900,likes_count:0,created_at:"2025-07-10T14:00:00+08:00",updated_at:"2025-07-10T14:00:00+08:00"},{id:427,parent_category:62,parent_category_name:"面试工具",sub_category:null,sub_category_name:"面试刷题",name:"LeetCode",description:"在线编程学习平台，提供算法题和编程面试准备资源。",url:"https://leetcode.com/",icon:"https://leetcode.com/favicon.ico",logo:"https://leetcode.com/static/webpack_bundles/images/logo-dark.e99485d9b.svg",tags:"编程,算法,面试准备",order:1,is_active:!0,views:2400,likes_count:0,created_at:"2025-07-10T14:00:00+08:00",updated_at:"2025-07-10T14:00:00+08:00",desc_md:`### LeetCode（国际）

- **开发商**：LeetCode Inc.
- **简介**：LeetCode 是全球领先的编程题库和算法训练平台，拥有数千道高质量算法题，涵盖数据结构、数据库、Shell等多领域，支持多语言在线编程。平台还提供面试准备、竞赛、讨论社区等功能。
- **主要特性**：
  - 丰富的算法与数据结构题库
  - 多语言在线编程与自动评测
  - 题解、讨论区与面试经验分享
  - 每周竞赛与排行榜
  - 企业面试题与模拟面试
- **适用人群**：全球开发者、算法爱好者、IT求职者
- [官网链接](https://leetcode.com/)
`},{id:428,parent_category:63,parent_category_name:"办公神器",sub_category:null,sub_category_name:"在线文档",name:"腾讯文档",description:"腾讯推出的在线文档编辑工具，支持多人协作、云端存储和多种格式导出。",url:"https://docs.qq.com/desktop",icon:"https://docs.qq.com/favicon.ico",logo:"https://docs.qq.com/static/favicon.ico",tags:"在线文档,协作编辑,云端存储",order:1,is_active:!0,views:2300,likes_count:0,created_at:"2025-07-10T15:00:00+08:00",updated_at:"2025-07-10T15:00:00+08:00",desc_md:`### 腾讯文档

- **开发商**：腾讯
- **简介**：腾讯文档是一款支持多人协作、云端存储和多格式导出的在线文档编辑工具，适合企业、教育和个人用户。
- **主要特性**：
  - 实时协作与评论
  - 云端自动保存与历史版本
  - 多格式导入导出
  - 丰富的模板和插件
  - 与微信、QQ等腾讯产品集成
- **适用人群**：企业团队、教师、学生、远程办公用户
- [官网链接](https://docs.qq.com/desktop)
`},{id:429,parent_category:63,parent_category_name:"办公神器",sub_category:null,sub_category_name:"在线会议",name:"Zoom",description:"专业的视频会议和网络会议平台，支持多人在线会议和屏幕共享。",url:"https://zoom.us/",icon:"https://zoom.us/favicon.ico",logo:"https://a.trellocdn.com/prgb/dist/images/zoom-logo-60f27e9c2109f36b1e8a.png",tags:"视频会议,在线会议,屏幕共享",order:1,is_active:!0,views:2700,likes_count:0,created_at:"2025-07-10T15:00:00+08:00",updated_at:"2025-07-10T15:00:00+08:00"},{id:430,parent_category:44,parent_category_name:"实用小工具",sub_category:null,sub_category_name:"图床工具",name:"SM.MS图床",description:"免费的图片托管服务，支持快速上传图片并获取分享链接。",url:"https://sm.ms/",icon:"https://sm.ms/favicon.ico",logo:"https://sm.ms/assets/img/logo.png",tags:"图床,图片托管,免费图床",order:1,is_active:!0,views:1800,likes_count:0,created_at:"2025-07-10T15:00:00+08:00",updated_at:"2025-07-10T15:00:00+08:00"},{id:431,parent_category:44,parent_category_name:"实用小工具",sub_category:null,sub_category_name:"在线笔记",name:"印象笔记",description:"跨平台笔记应用，支持文本、图片、音频等多种形式记录和同步。",url:"https://www.yinxiang.com/",icon:"https://www.yinxiang.com/favicon.ico",logo:"https://www.yinxiang.com/static/images/brand/evernote-logo-dark.svg",tags:"笔记,同步,知识管理",order:1,is_active:!0,views:2100,likes_count:0,created_at:"2025-07-10T15:00:00+08:00",updated_at:"2025-07-10T15:00:00+08:00"},{id:432,parent_category:17,parent_category_name:"开发工具",sub_category:null,sub_category_name:"代码协作",name:"GitHub",description:"全球最大的代码托管平台，提供Git仓库管理、代码协作和版本控制功能。",url:"https://github.com/",icon:"https://github.com/favicon.ico",logo:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",tags:"代码托管,版本控制,协作开发",order:1,is_active:!0,views:3e3,likes_count:0,created_at:"2025-07-10T16:00:00+08:00",updated_at:"2025-07-10T16:00:00+08:00",desc_md:`### GitHub

- **简介**：GitHub 是全球最大的代码托管和协作开发平台，基于 Git 版本控制系统，拥有庞大的开源社区和丰富的协作工具。
- **主要特性**：
  - 支持 Git 仓库托管和版本管理
  - Pull Request、Issue、Wiki 等协作功能
  - Actions 持续集成/持续部署（CI/CD）
  - 丰富的开源项目和社区资源
  - 团队协作与权限管理
- **适用场景**：适合开源项目、企业协作开发、个人代码管理和技术社区。
- [官网链接](https://github.com/)
`},{id:434,parent_category:17,parent_category_name:"开发工具",sub_category:null,sub_category_name:"API工具",name:"Postman",description:"API开发和测试平台，支持API请求创建、调试和自动化测试。",url:"https://www.postman.com/",icon:"https://www.postman.com/favicon.ico",logo:"https://voyager.postman.com/logo/postman-logo-icon-orange.svg",tags:"API测试,API开发,自动化测试",order:1,is_active:!0,views:2500,likes_count:0,created_at:"2025-07-10T16:00:00+08:00",updated_at:"2025-07-10T16:00:00+08:00",desc_md:`### Postman

- **开发商**：Postman, Inc.
- **简介**：Postman 是一款全球流行的 API 开发与测试工具，支持 API 设计、调试、自动化测试、Mock、文档生成等全流程管理。适用于前后端协作、接口测试和自动化测试。
- **主要特性**：
  - 可视化接口调试与请求构造
  - 支持自动化测试与断言
  - 丰富的环境变量和参数化功能
  - 支持团队协作与接口文档生成
  - 集成 Mock 服务和 API 监控
- **适用人群**：开发者、测试工程师、API 管理团队
- [官网链接](https://www.postman.com)
`},{id:435,parent_category:40,parent_category_name:"AI工具",sub_category:null,sub_category_name:"AI智能助手",name:"ChatGPT",description:"OpenAI开发的智能对话AI，可用于编程辅助、内容创作、问题解答等多种场景。",url:"https://chat.openai.com/",icon:"https://chat.openai.com/favicon.ico",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png",tags:"AI,对话,编程辅助",order:1,is_active:!0,views:3500,likes_count:0,created_at:"2025-07-10T17:00:00+08:00",updated_at:"2025-07-10T17:00:00+08:00",desc_md:`### ChatGPT

- **开发商**：OpenAI
- **简介**：ChatGPT 是由 OpenAI 开发的先进对话式人工智能，基于 GPT-4 等大语言模型，能够理解和生成自然语言文本。它广泛应用于编程辅助、内容创作、知识问答、学习辅导等场景。
- **主要特性**：
  - 支持多轮对话和上下文理解
  - 编程代码生成与调试建议
  - 内容创作、文案润色、翻译等
  - 支持插件扩展和联网搜索
  - 多平台支持（网页版、API、第三方集成）
- **适用人群**：开发者、内容创作者、学生、企业用户
- [官网链接](https://chat.openai.com/)
`},{id:436,parent_category:40,parent_category_name:"AI工具",sub_category:null,sub_category_name:"AI编程",name:"GitHub Copilot",description:"GitHub与OpenAI合作开发的AI编程助手，可实时提供代码建议和自动完成功能。",url:"https://github.com/features/copilot",icon:"https://github.com/favicon.ico",logo:"https://github.githubassets.com/images/modules/site/features/copilot/github-copilot.svg",tags:"AI编程,代码辅助,自动完成",order:1,is_active:!0,views:2800,likes_count:0,created_at:"2025-07-10T17:00:00+08:00",updated_at:"2025-07-10T17:00:00+08:00"},{id:437,parent_category:44,parent_category_name:"实用小工具",sub_category:null,sub_category_name:"颜色工具",name:"Adobe Color",description:"Adobe提供的配色方案工具，可用于设计、开发中选择和创建和谐的色彩搭配。",url:"https://color.adobe.com/",icon:"https://color.adobe.com/favicon.ico",logo:"https://www.adobe.com/content/dam/cc/icons/color.svg",tags:"配色,颜色选择,设计工具",order:1,is_active:!0,views:1700,likes_count:0,created_at:"2025-07-10T17:00:00+08:00",updated_at:"2025-07-10T17:00:00+08:00"},{id:438,parent_category:64,parent_category_name:"设计工具",sub_category:null,sub_category_name:"3D设计",name:"Autodesk AutoCAD",description:"专业的计算机辅助设计软件，广泛应用于建筑、工程和制造领域。",url:"https://www.autodesk.com/products/autocad/overview",icon:"https://www.autodesk.com/favicon.ico",logo:"https://www.autodesk.com/content/dam/autodesk/www/site-icons/product-logos/autocad.svg",tags:"CAD,工程设计,建筑设计",order:1,is_active:!0,views:1600,likes_count:0,created_at:"2025-07-10T17:00:00+08:00",updated_at:"2025-07-10T17:00:00+08:00",desc_md:`### Autodesk AutoCAD

- **简介**：AutoCAD 是由 Autodesk 公司开发的全球领先的计算机辅助设计（CAD）软件，广泛应用于建筑、工程、制造、机械、电子等领域。支持2D绘图和3D建模，拥有强大的绘图工具和丰富的插件生态。
- **主要特性**：
  - 精确的2D绘图与3D建模功能
  - 丰富的行业专用工具集（如建筑、机械、电气等）
  - 支持多种文件格式（DWG、DXF等）
  - 强大的图层管理和注释功能
  - 支持插件扩展和自动化脚本
- **适用人群**：建筑师、工程师、设计师、制造业从业者
- [官网链接](https://www.autodesk.com/products/autocad/overview)
`},{id:439,parent_category:63,parent_category_name:"办公神器",sub_category:null,sub_category_name:"在线翻译",name:"百度翻译",description:"百度提供的在线翻译服务，支持文本、图片、文档翻译和多语言互译。",url:"https://fanyi.baidu.com/",icon:"https://fanyi.baidu.com/favicon.ico",logo:"https://fanyi.baidu.com/static/webpc/css/images/favicon.ico",tags:"翻译,百度,多语言",order:2,is_active:!0,views:2500,likes_count:0,created_at:"2025-07-10T18:00:00+08:00",updated_at:"2025-07-10T18:00:00+08:00",desc_md:`### 百度翻译

- **开发商**：百度
- **简介**：百度翻译是一款功能全面的在线翻译工具，支持文本、图片、文档等多种翻译方式，适合多语言交流和学习。
- **主要特性**：
  - 多语言文本、图片、文档翻译
  - 智能语音识别与翻译
  - 支持批量翻译和API接口
  - 界面简洁，操作便捷
- **适用人群**：学生、职场人士、企业用户、开发者
- [官网链接](https://fanyi.baidu.com/)
`},{id:440,parent_category:63,parent_category_name:"办公神器",sub_category:null,sub_category_name:"在线翻译",name:"有道翻译",description:"网易有道提供的在线翻译服务，支持文本、文档、图片翻译和多种语言互译。",url:"https://fanyi.youdao.com/",icon:"https://fanyi.youdao.com/favicon.ico",logo:"https://shared-https.ydstatic.com/fanyi/new/favicon-192x192.png",tags:"翻译,有道,词典",order:3,is_active:!0,views:2300,likes_count:0,created_at:"2025-07-10T18:00:00+08:00",updated_at:"2025-07-10T18:00:00+08:00",desc_md:`### 有道翻译

- **开发商**：网易有道
- **简介**：有道翻译是网易有道推出的多功能在线翻译平台，支持文本、文档、图片等多种翻译方式，翻译准确，界面友好。
- **主要特性**：
  - 多语言文本互译
  - 文档、图片翻译
  - 智能语音识别与翻译
  - 词典和例句查询
  - 支持网页和移动端
- **适用人群**：学生、职场人士、翻译工作者
- [官网链接](https://fanyi.youdao.com/)
`},{id:441,parent_category:63,parent_category_name:"办公神器",sub_category:null,sub_category_name:"在线翻译",name:"DeepL翻译",description:"德国DeepL公司开发的基于深度学习的翻译工具，提供高质量的翻译服务。",url:"https://www.deepl.com/translator",icon:"https://www.deepl.com/favicon.ico",logo:"https://www.deepl.com/static/img/favicon/apple-touch-icon.png",tags:"翻译,AI翻译,深度学习",order:4,is_active:!0,views:2100,likes_count:0,created_at:"2025-07-10T18:00:00+08:00",updated_at:"2025-07-10T18:00:00+08:00",desc_md:`### DeepL翻译

- **开发商**：DeepL GmbH
- **简介**：DeepL翻译是一款基于深度学习技术的高质量翻译工具，支持多种语言互译，翻译结果自然流畅，广受全球用户好评。
- **主要特性**：
  - 支持文本、文档、网页翻译
  - 翻译质量高，语义理解强
  - 支持多语言互译
  - 提供桌面端、网页版和API接口
  - 支持批量翻译和专业术语定制
- **适用人群**：外语学习者、跨境电商、翻译工作者、企业用户
- [官网链接](https://www.deepl.com/translator)
`},{id:442,parent_category:63,parent_category_name:"办公神器",sub_category:null,sub_category_name:"在线翻译",name:"搜狗翻译",description:"搜狗提供的在线翻译服务，支持文本、图片、文档翻译和多语言互译。",url:"https://fanyi.sogou.com/",icon:"https://fanyi.sogou.com/favicon.ico",logo:"https://p1.ssl.img.360kuai.com/t01cfcece9b2c95b44a.png",tags:"翻译,搜狗,多语言",order:5,is_active:!0,views:1900,likes_count:0,created_at:"2025-07-10T18:00:00+08:00",updated_at:"2025-07-10T18:00:00+08:00",desc_md:`### 搜狗翻译

- **开发商**：搜狗公司
- **简介**：搜狗翻译是搜狗推出的多功能在线翻译平台，支持文本、图片、文档等多种翻译方式，适合多语言交流和学习。
- **主要特性**：
  - 多语言文本、图片、文档翻译
  - 智能语音识别与翻译
  - 支持批量翻译和API接口
  - 界面简洁，操作便捷
- **适用人群**：学生、职场人士、企业用户、开发者
- [官网链接](https://fanyi.sogou.com/)
`},{id:443,parent_category:44,parent_category_name:"实用小工具",sub_category:null,sub_category_name:"翻译工具",name:"谷歌翻译扩展",description:"谷歌翻译浏览器扩展，支持网页即时翻译和划词翻译功能。",url:"https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb",icon:"https://www.google.com/favicon.ico",logo:"https://www.gstatic.com/images/branding/product/1x/translate_2020q4_48dp.png",tags:"翻译扩展,划词翻译,浏览器插件",order:1,is_active:!0,views:2200,likes_count:0,created_at:"2025-07-10T19:00:00+08:00",updated_at:"2025-07-10T19:00:00+08:00"},{id:444,parent_category:44,parent_category_name:"实用小工具",sub_category:null,sub_category_name:"翻译工具",name:"沙拉查词",description:"多引擎查词翻译扩展，支持多种词典和翻译服务的划词翻译工具。",url:"https://saladict.crimx.com/",icon:"https://saladict.crimx.com/icons/icon.png",logo:"https://saladict.crimx.com/icons/icon.png",tags:"查词,翻译扩展,多引擎",order:2,is_active:!0,views:2e3,likes_count:0,created_at:"2025-07-10T19:00:00+08:00",updated_at:"2025-07-10T19:00:00+08:00"},{id:445,parent_category:44,parent_category_name:"实用小工具",sub_category:null,sub_category_name:"翻译工具",name:"腾讯翻译君",description:"腾讯出品的翻译APP，支持语音、图片、文本翻译和多语言互译。",url:"https://fanyi.qq.com/",icon:"https://fanyi.qq.com/favicon.ico",logo:"https://mat1.gtimg.com/www/images/qq2021/fanyi/logo.png",tags:"翻译APP,语音翻译,图片翻译",order:3,is_active:!0,views:1800,likes_count:0,created_at:"2025-07-10T19:00:00+08:00",updated_at:"2025-07-10T19:00:00+08:00"},{id:446,parent_category:44,parent_category_name:"实用小工具",sub_category:null,sub_category_name:"翻译工具",name:"彩云小译",description:"基于神经网络的翻译工具，支持即时翻译、文档翻译和多语言互译。",url:"https://fanyi.caiyunapp.com/",icon:"https://fanyi.caiyunapp.com/favicon.ico",logo:"https://static.caiyunapp.com/assets/images/logo.svg",tags:"神经网络翻译,即时翻译,文档翻译",order:4,is_active:!0,views:1700,likes_count:0,created_at:"2025-07-10T19:00:00+08:00",updated_at:"2025-07-10T19:00:00+08:00",desc_md:`### 彩云小译

- **开发商**：彩云科技
- **简介**：彩云小译是一款集网页翻译、文档翻译、划词翻译于一体的智能翻译工具，支持多语言互译，适合浏览器插件和移动端使用。
- **主要特性**：
  - 支持网页、文档、划词等多种翻译模式
  - 多语言互译，翻译准确高效
  - 浏览器插件和移动端应用
  - 支持双语对照和沉浸式阅读
  - 界面简洁，操作便捷
- **适用人群**：外语学习者、内容阅读者、跨境用户
- [官网链接](https://fanyi.caiyunapp.com/)
`},{id:447,parent_category:40,parent_category_name:"运维工具",sub_category:null,sub_category_name:"监控告警",name:"Sentry",description:"开源的错误监控和跟踪平台，帮助开发者实时发现、诊断和修复应用程序错误。",url:"https://sentry.io/",icon:"https://sentry.io/favicon.ico",logo:"https://sentry-brand.storage.googleapis.com/sentry-logo-black.png",tags:"错误监控,异常跟踪,性能监控",order:3,is_active:!0,views:2e3,likes_count:0,created_at:"2025-07-11T11:00:00+08:00",updated_at:"2025-07-11T11:00:00+08:00",desc_md:`### Sentry

- **开发商**：Functional Software, Inc.
- **简介**：Sentry 是一款开源的实时错误监控和异常跟踪平台，支持多种编程语言和框架。帮助开发者快速定位和修复应用程序中的错误和性能问题。
- **主要特性**：
  - 实时错误捕获与告警
  - 丰富的上下文信息和堆栈跟踪
  - 支持前后端多语言（JS、Python、Java、Go 等）
  - 性能监控与事务追踪
  - 团队协作与问题分配
- **适用人群**：开发者、测试工程师、运维团队
- [官网链接](https://sentry.io/)
`},{id:448,parent_category:23,parent_category_name:"开发工具",sub_category:29,sub_category_name:"低代码/无代码",name:"Retool",description:"企业级内部工具构建平台，支持通过拖拽组件和连接数据库/API快速搭建后台管理系统。",url:"https://retool.com/",icon:"https://retool.com/favicon.png",logo:"https://logos-world.net/wp-content/uploads/2021/08/Retool-Logo.png",tags:"内部工具,低代码,企业级",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:00:00+08:00",updated_at:"2026-02-03T10:00:00+08:00",desc_md:`### Retool

- **开发商**：Retool Inc.
- **简介**：Retool 是目前最流行的企业级内部工具构建平台，允许开发者通过拖拽组件、编写 SQL 和 JavaScript 快速搭建后台管理面板、仪表盘和工具。
- **主要特性**：
  - 丰富的预置组件库（表格、表单、图表等）
  - 支持连接几乎所有数据库和 API（PostgreSQL, MySQL, REST, GraphQL等）
  - 支持自定义 JavaScript 代码扩展逻辑
  - 企业级权限管理和部署选项（云端/本地）
- **适用人群**：后端开发人员、全栈工程师、企业内部工具团队
- [官网链接](https://retool.com/)
`},{id:449,parent_category:23,parent_category_name:"开发工具",sub_category:29,sub_category_name:"低代码/无代码",name:"Appsmith",description:"开源的低代码内部工具开发平台，支持连接任意数据源，适合构建管理后台和仪表盘。",url:"https://www.appsmith.com/",icon:"https://www.appsmith.com/favicon.ico",logo:"https://assets.website-files.com/5f68a65d070f9d0208cb1745/5f97364132717070104192d6_appsmith-logo.svg",tags:"开源,低代码,内部工具",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:00:00+08:00",updated_at:"2026-02-03T10:00:00+08:00",desc_md:`### Appsmith

- **开发商**：Appsmith Inc.
- **简介**：Appsmith 是一款开源的低代码框架，专为构建内部工具而生。它允许开发者连接任何数据源，并使用拖拽式 UI 构建器创建应用程序。
- **主要特性**：
  - 完全开源，支持私有化部署
  - 拖拽式 UI 设计，所见即所得
  - 内置 JS 编辑器，支持编写复杂逻辑
  - 预置多种数据库和 API 连接器
  - 活跃的社区支持
- **适用人群**：开发者、开源爱好者、中小企业
- [官网链接](https://www.appsmith.com/)
`},{id:450,parent_category:23,parent_category_name:"开发工具",sub_category:29,sub_category_name:"低代码/无代码",name:"FlutterFlow",description:"基于 Flutter 的可视化移动应用开发平台，支持生成原生代码，适合构建高质量 iOS 和 Android 应用。",url:"https://flutterflow.io/",icon:"https://flutterflow.io/favicon.png",logo:"https://flutterflow.io/images/flutterflow-logo.png",tags:"移动开发,Flutter,NoCode",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:00:00+08:00",updated_at:"2026-02-03T10:00:00+08:00",desc_md:`### FlutterFlow

- **开发商**：FlutterFlow
- **简介**：FlutterFlow 是一款基于 Google Flutter 框架的可视化应用开发工具，允许用户通过拖拽界面构建原生 iOS 和 Android 应用，并支持导出干净的 Flutter 代码。
- **主要特性**：
  - 可视化界面构建，支持复杂交互
  - 直接生成和导出 Flutter 源代码
  - 集成 Firebase 和 Supabase 等后端服务
  - 支持自定义代码和 API 集成
  - 实时预览和真机调试
- **适用人群**：移动应用开发者、创业者、设计师
- [官网链接](https://flutterflow.io/)
`},{id:451,parent_category:23,parent_category_name:"开发工具",sub_category:29,sub_category_name:"低代码/无代码",name:"ILLA Cloud",description:"专为开发者设计的开源低代码平台，深度集成 AI 能力，加速内部工具开发。",url:"https://illacloud.com/",icon:"https://illacloud.com/favicon.ico",logo:"https://illacloud.com/assets/img/logo.svg",tags:"开源,低代码,AI集成",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:00:00+08:00",updated_at:"2026-02-03T10:00:00+08:00",desc_md:`### ILLA Cloud

- **开发商**：ILLA Cloud
- **简介**：ILLA Cloud 是一款面向开发者的开源低代码平台，旨在帮助开发者快速构建内部工具。它不仅支持丰富的组件和数据连接，还深度集成了 AI 能力。
- **主要特性**：
  - 实时协作编辑
  - AI 辅助生成代码和 SQL
  - 丰富的组件库和插件系统
  - 支持多种数据源集成
  - 响应式布局设计
- **适用人群**：全栈开发者、初创团队
- [官网链接](https://illacloud.com/)
`},{id:452,parent_category:23,parent_category_name:"开发工具",sub_category:29,sub_category_name:"低代码/无代码",name:"Softr",description:"无需代码，基于 Airtable 或 Google Sheets 数据快速构建专业的门户网站和内部工具。",url:"https://www.softr.io/",icon:"https://www.softr.io/favicon.ico",logo:"https://assets.softr.io/softr-logo.svg",tags:"无代码,Airtable,门户构建",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:00:00+08:00",updated_at:"2026-02-03T10:00:00+08:00",desc_md:`### Softr

- **开发商**：Softr
- **简介**：Softr 是一款无代码平台，专门用于将 Airtable 或 Google Sheets 数据转化为漂亮的网站、客户端门户和内部工具，无需任何设计或编程技能。
- **主要特性**：
  - 基于数据的自动页面生成
  - 丰富的预置模板和模块
  - 细粒度的权限控制和用户管理
  - 快速集成支付、聊天等第三方服务
  - 极低的学习门槛
- **适用人群**：非技术人员、运营人员、创作者
- [官网链接](https://www.softr.io/)
`},{id:453,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"AgentGPT",description:"在浏览器中组装、配置和部署自主AI智能体，无需编写代码。",url:"https://agentgpt.reworkd.ai/",icon:"https://agentgpt.reworkd.ai/favicon.ico",logo:"https://agentgpt.reworkd.ai/favicon.ico",tags:"自主智能体,浏览器端,NoCode",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:05:00+08:00",updated_at:"2026-02-03T10:05:00+08:00",desc_md:`### AgentGPT

- **开发商**：Reworkd
- **简介**：AgentGPT 允许用户在浏览器中配置和部署自主 AI 智能体。只需给智能体命名并设定目标，它就会开始思考、执行任务并从结果中学习，以实现目标。
- **主要特性**：
  - 浏览器端直接运行，无需安装
  - 自动任务拆解与执行
  - 支持 GPT-3.5 和 GPT-4
  - 可视化任务执行过程
- **适用人群**：AI 爱好者、自动化探索者、无需编程背景的用户
- [官网链接](https://agentgpt.reworkd.ai/)
`},{id:454,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"AutoGPT",description:"一个实验性的开源应用程序，展示了 GPT-4 语言模型的自主能力。",url:"https://news.agpt.co/",icon:"https://news.agpt.co/favicon.ico",logo:"https://news.agpt.co/favicon.ico",tags:"开源,自主智能体,Python",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:05:00+08:00",updated_at:"2026-02-03T10:05:00+08:00",desc_md:`### AutoGPT

- **开发商**：Significant Gravitas
- **简介**：AutoGPT 是一个实验性的开源应用程序，展示了 GPT-4 语言模型的自主能力。该程序由 GPT-4 驱动，将 LLM 的“思想”串联起来，以自主实现您设定的任何目标。
- **主要特性**：
  - 互联网访问以进行搜索和信息收集
  - 长期和短期内存管理
  - 用于文本生成的 GPT-4 实例
  - 访问流行的网站和平台
  - 使用 GPT-3.5 进行文件存储和摘要
- **适用人群**：开发者、AI 研究人员
- [官网链接](https://news.agpt.co/)
`},{id:455,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"CrewAI",description:"用于编排角色扮演、自主 AI 代理的尖端框架。",url:"https://www.crewai.com/",icon:"https://www.crewai.com/favicon.ico",logo:"https://www.crewai.com/favicon.ico",tags:"多智能体,协作框架,Python",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:05:00+08:00",updated_at:"2026-02-03T10:05:00+08:00",desc_md:`### CrewAI

- **开发商**：CrewAI
- **简介**：CrewAI 是一个用于编排角色扮演、自主 AI 代理的框架。通过促进协作智能，CrewAI 使代理能够无缝协作，处理复杂任务。
- **主要特性**：
  - 基于角色的代理设计
  - 自主代理间的协作
  - 灵活的任务分配
  - 与 LangChain 等工具集成
  - 适用于构建复杂的多代理系统
- **适用人群**：Python 开发者、AI 系统架构师
- [官网链接](https://www.crewai.com/)
`},{id:456,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"Microsoft Copilot Studio",description:"用于自定义 Copilot 或构建全新的 AI 智能体的低代码平台。",url:"https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio",icon:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TqX?ver=44c6",logo:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TqX?ver=44c6",tags:"微软,低代码,企业级",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:05:00+08:00",updated_at:"2026-02-03T10:05:00+08:00",desc_md:`### Microsoft Copilot Studio

- **开发商**：Microsoft
- **简介**：Microsoft Copilot Studio 是一个端到端的对话式 AI 平台，允许用户创建和自定义 Copilot，或者构建全新的 AI 智能体。它结合了低代码图形界面和强大的生成式 AI 功能。
- **主要特性**：
  - 低代码构建自定义 Copilot
  - 集成 Azure OpenAI Service
  - 连接数百个预构建的数据连接器
  - 企业级安全、治理和合规性
  - 强大的分析和监控仪表盘
- **适用人群**：企业开发者、业务分析师、IT 管理员
- [官网链接](https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio)
`},{id:457,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"Lindy",description:"您的 AI 员工，可以处理从日历管理到邮件回复等各种任务。",url:"https://www.lindy.ai/",icon:"https://www.lindy.ai/favicon.ico",logo:"https://www.lindy.ai/favicon.ico",tags:"AI员工,自动化,智能助手",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:05:00+08:00",updated_at:"2026-02-03T10:05:00+08:00",desc_md:`### Lindy

- **开发商**：Lindy
- **简介**：Lindy 是一款 AI 员工，旨在帮助用户处理各种日常任务。它可以像真人助手一样管理日历、起草邮件、安排会议、甚至处理特定的工作流程。
- **主要特性**：
  - 自然语言交互
  - 主动式任务管理
  - 集成多种常用工具（Gmail, Calendar 等）
  - 持续学习用户偏好
  - 能够处理复杂的跨应用任务
- **适用人群**：忙碌的专业人士、高管、自由职业者
- [官网链接](https://www.lindy.ai/)
`},{id:458,parent_category:3,parent_category_name:"AI工具",sub_category:11,sub_category_name:"AI智能体",name:"OpenClaw (原Clawdbot)",description:"一个开源、自托管的个人 AI 助手，运行在本地，通过聊天应用与你交互，具备自主执行任务的能力。",url:"https://openclaw.ai/",icon:"https://img.icons8.com/color/48/robot-2.png",logo:"https://img.icons8.com/color/48/robot-2.png",tags:"开源,AI Agent,自托管,自动化",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:15:00+08:00",updated_at:"2026-02-03T10:15:00+08:00",desc_md:`### OpenClaw (原Clawdbot)

- **开发商**：Peter Steinberger & Contributors
- **简介**：OpenClaw（原名 Clawdbot）是一款开源、自托管的个人 AI 助手。与传统的聊天机器人不同，OpenClaw 运行在你的本地设备上，具有持久记忆，并能通过 WhatsApp、Telegram 等聊天应用与你交互。它不仅能回答问题，还能自主执行终端命令、管理日程、控制智能家居等。
- **主要特性**：
  - **完全自主**：能够主动发起任务，而不仅仅是被动响应。
  - **本地运行**：数据掌握在自己手中，支持访问本地文件系统和终端。
  - **多平台集成**：支持 Telegram, WhatsApp, Discord, Slack 等。
  - **持久记忆**：记住你的偏好和历史对话，提供个性化服务。
  - **开源社区驱动**：拥有活跃的社区和丰富的插件生态。
- **适用人群**：开发者、极客、希望拥有私有 AI 助手的用户
- [官网链接](https://openclaw.ai/)
`},{id:459,parent_category:24,parent_category_name:"开发工具",sub_category:null,sub_category_name:"构建工具",name:"Rsbuild",description:"基于 Rspack 的 Web 构建工具，专为高性能和易用性而设计。",url:"https://rsbuild.dev/",icon:"https://assets.rspack.dev/rsbuild/rsbuild-logo-480.png",logo:"https://assets.rspack.dev/rsbuild/rsbuild-logo-480.png",tags:"Rspack,构建工具,高性能",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:20:00+08:00",updated_at:"2026-02-03T10:20:00+08:00",desc_md:`### Rsbuild

- **开发商**：ByteDance
- **简介**：Rsbuild 是基于 Rspack 的 Web 构建工具，由 ByteDance 开源。它旨在提供开箱即用的构建体验，同时保持极高的构建性能。
- **主要特性**：
  - 基于 Rspack，构建速度极快
  - 开箱即用，配置简单
  - 兼容 Webpack 生态
  - 丰富的插件支持
- **适用场景**：追求极致构建速度的 Web 项目
- [官网链接](https://rsbuild.dev/)
`},{id:460,parent_category:24,parent_category_name:"开发工具",sub_category:null,sub_category_name:"构建工具",name:"Rolldown",description:"基于 Rust 编写的 JavaScript 打包工具，旨在成为 Rollup 的高性能替代品。",url:"https://cn.vite.dev/guide/rolldown",icon:"https://rolldown.dev/rolldown-logo.svg",logo:"https://rolldown.dev/rolldown-logo.svg",tags:"Rust,Rollup,打包工具",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:20:00+08:00",updated_at:"2026-02-03T10:20:00+08:00",desc_md:`### Rolldown

- **开发商**：Rolldown Team
- **简介**：Rolldown 是基于 Rust 编写的高性能 JavaScript 打包工具，由 Vue 团队主导开发。它旨在成为 Vite 的底层打包工具，提供比 Rollup 更快的构建速度，同时保持 API 兼容性。
- **主要特性**：
  - 基于 Rust，性能卓越
  - 兼容 Rollup API
  - 旨在统一开发（Vite）和生产构建
- **适用场景**：下一代前端构建流程
- [官网链接](https://cn.vite.dev/guide/rolldown)
`},{id:461,parent_category:23,parent_category_name:"开发工具",sub_category:24,sub_category_name:"开发IDE",name:"Zed",description:"由 Atom 和 Tree-sitter 作者开发的下一代高性能代码编辑器，基于 Rust 编写。",url:"https://zed.dev/",icon:"https://zed.dev/favicon.ico",logo:"https://zed.dev/logo.png",tags:"Rust,高性能,代码编辑器",order:0,is_active:!0,views:0,likes_count:0,created_at:"2026-02-03T10:30:00+08:00",updated_at:"2026-02-03T10:30:00+08:00",desc_md:`### Zed

- **开发商**：Zed Industries
- **简介**：Zed 是一款极速的代码编辑器，由 Atom 和 Tree-sitter 的作者共同开发。它使用 Rust 语言从零开始构建，旨在最大限度地利用现代多核 CPU 和 GPU，提供极其流畅的编程体验。
- **主要特性**：
  - **极致性能**：极快的启动速度和零延迟的输入反馈。
  - **GPU 渲染**：利用 GPU 加速界面渲染，确保流畅度。
  - **内置 AI**：支持集成 OpenAI 和 Anthropic 的模型。
  - **协作开发**：内置强大的多人协作功能。
- **适用人群**：追求极致速度、习惯极简风格的开发者
- [官网链接](https://zed.dev/)
`}],wy=()=>{let e,t,n,o,a,r,k=null,D=0;const m=100,h=14*1.5,f=10*1.5,T=3;let x=new Map,v=[],E=new THREE.Vector3,C=!0;const O=.02,z=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];function R(L){return{aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}[L.toLowerCase()]||"#ffffff"}function A(){e=new THREE.Scene,e.background=new THREE.Color(657930),e.fog=new THREE.Fog(657930,100,500),t=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,.1,5e3),t.position.set(0,10.8,0);const L=document.getElementById("canvas-container");n=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.shadowMap.enabled=!0,n.shadowMap.type=THREE.PCFSoftShadowMap,L.appendChild(n.domElement),o=new THREE.OrbitControls(t,n.domElement),o.enableDamping=!0,o.dampingFactor=.05,o.minDistance=8,o.maxDistance=15,o.target.set(0,0,0),o.enableRotate=!1,o.enablePan=!0,o.enableZoom=!0,o.screenSpacePanning=!0,o.maxPolarAngle=Math.PI/2,o.minPolarAngle=0,o.panSpeed=2,o.zoomSpeed=1.5,o.mouseButtons={LEFT:THREE.MOUSE.PAN,MIDDLE:THREE.MOUSE.DOLLY,RIGHT:THREE.MOUSE.PAN},o.update(),a=new THREE.Raycaster,r=new THREE.Vector2,G(),N(),P(),ie(),E.copy(t.position),console.log("Scene initialized")}function G(){const L=new THREE.AmbientLight(16777215,.5);e.add(L);const U=new THREE.DirectionalLight(16777215,.8);U.position.set(100,100,100),U.castShadow=!0,U.shadow.mapSize.width=2048,U.shadow.mapSize.height=2048,U.shadow.camera.left=-200,U.shadow.camera.right=200,U.shadow.camera.top=200,U.shadow.camera.bottom=-200,U.shadow.camera.near=.5,U.shadow.camera.far=500,e.add(U);const Z=new THREE.DirectionalLight(4482815,.3);Z.position.set(-50,50,-50),e.add(Z)}function N(){v=[];const L=(14-1)*1.5,U=(10-1)*1.5,Z=-L/2,te=-U/2;let K=0;for(let $=0;$<10;$++)for(let be=0;be<14&&!(K>=140);be++){const De=2+Math.random()*(3-2),He=z[K],Bt=new THREE.Color(He.toLowerCase()),_n=R(He),Be=M(1.5,De,1.5,Bt);Be.position.x=Z+be*1.5,Be.position.z=te+$*1.5,Be.position.y=De/2,Be.userData={index:K,colorName:He,hexColor:_n,originalHeight:De,originalPosition:{x:Be.position.x,y:Be.position.y,z:Be.position.z},isSelected:!1,originalMaterial:null,gridX:0,gridZ:0},v.push(Be),K++}}function M(L,U,Z,te){const K=new THREE.BoxGeometry(L,U,Z),$=new THREE.MeshPhysicalMaterial({color:te,roughness:.1,metalness:.2,transparent:!0,opacity:.9,transmission:0,thickness:.5,clearcoat:.5,clearcoatRoughness:.1,reflectivity:.5,specularIntensity:1,side:THREE.DoubleSide}),be=new THREE.Mesh(K,$);return be.castShadow=!0,be.receiveShadow=!0,be}function V(L,U){const Z=new THREE.Group;return v.forEach(te=>{const K=te.clone();K.position.x=te.position.x+L*h,K.position.z=te.position.z+U*f,K.position.y=te.position.y,K.material=te.material.clone(),K.userData={...te.userData,gridX:L,gridZ:U,isClone:!0,originalIndex:te.userData.index},Z.add(K)}),e.add(Z),x.set(`${L},${U}`,Z),Z}function re(L,U){const Z=`${L},${U}`;if(x.has(Z)){const te=x.get(Z);te.traverse(K=>{K.geometry&&K.geometry.dispose(),K.material&&(Array.isArray(K.material)?K.material.forEach($=>{$.map&&$.map.dispose(),$.dispose()}):(K.material.map&&K.material.map.dispose(),K.material.dispose()))}),e.remove(te),x.delete(Z)}}function P(){const L=Math.floor(t.position.x/h),U=Math.floor(t.position.z/f),Z=new Set;for(let K=-T;K<=T;K++)for(let $=-T;$<=T;$++){const be=L+K,De=U+$,He=`${be},${De}`;Z.add(He),x.has(He)||V(be,De)}const te=[];x.forEach((K,$)=>{if(!Z.has($)){const[be,De]=$.split(",").map(Number);te.push({gridX:be,gridZ:De})}}),te.forEach(({gridX:K,gridZ:$})=>{re(K,$)})}function W(L,U,Z,te=0){const K=document.createElement("canvas");K.width=512,K.height=512;const $=K.getContext("2d");$.fillStyle=Z,$.fillRect(0,0,512,512),$.fillStyle=`rgb(${te>>16&255}, ${te>>8&255}, ${te&255})`,$.textAlign="center",$.textBaseline="middle";const be=480;let De=60,He=!1;for(;!He&&De>20;)$.font=`bold ${De}px Arial, sans-serif`,$.measureText(L).width<=be?He=!0:De-=2;$.fillText(L,256,200),$.font="bold 60px Arial, monospace",$.fillText(U.toUpperCase(),256,280);const Bt=new THREE.CanvasTexture(K);return Bt.minFilter=THREE.LinearFilter,Bt.magFilter=THREE.LinearFilter,new THREE.MeshBasicMaterial({map:Bt,side:THREE.DoubleSide,transparent:!0,opacity:.95})}function _(L){if(k===L){Q(L),k=null,y();return}k&&Q(k),k=L,L.userData.isSelected=!0,L.userData.originalMaterial||(L.userData.originalMaterial=L.material);const U=5/L.userData.originalHeight;L.scale.y=U,L.position.y=5/2;const Z=L.userData.hexColor,te=L.userData.colorName,$=(_n=>{const Be=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_n);return Be?{r:parseInt(Be[1],16),g:parseInt(Be[2],16),b:parseInt(Be[3],16)}:{r:255,g:255,b:255}})(Z),be=`rgb(${$.r}, ${$.g}, ${$.b})`,He=(.299*$.r+.587*$.g+.114*$.b)/255>.5?0:16777215,Bt=W(te,Z,be,He);L.material=[L.userData.originalMaterial,L.userData.originalMaterial,Bt,L.userData.originalMaterial,L.userData.originalMaterial,L.userData.originalMaterial],oe(te,Z)}function Q(L){L.userData.isSelected=!1,L.scale.y=1,L.position.y=L.userData.originalPosition.y,L.userData.originalMaterial&&(Array.isArray(L.material)?L.material.forEach(U=>{U.map&&U.map.dispose(),U.dispose&&U.dispose()}):L.material.map&&(L.material.map.dispose(),L.material.dispose()),L.material=L.userData.originalMaterial)}function oe(L,U){const Z=document.getElementById("selected-info"),te=document.getElementById("selected-details");te.innerHTML=`
		<strong>颜色：</strong> ${L}<br>
		<strong>十六进制：</strong> ${U.toUpperCase()}<br>
	`,Z.style.display="block"}function y(){document.getElementById("selected-info").style.display="none"}function ye(){C&&(t.position.x+=O,t.position.z+=O,o.target.x=t.position.x,o.target.z=t.position.z)}function Ye(){const L=Date.now();L-D<m||(D=L,t.position.distanceTo(E)>h*.3&&(P(),E.copy(t.position)))}function ie(){n.domElement.addEventListener("click",ct),n.domElement.addEventListener("dblclick",function(){t.position.set(0,10.8,0),o.target.set(0,0,0),o.update()});const L=document.getElementById("auto-scroll-toggle");L.addEventListener("click",function(){C=!C,C?(L.textContent="⏸ 暂停滚动",L.classList.remove("paused")):(L.textContent="▶ 继续滚动",L.classList.add("paused"))})}function ct(L){r.x=L.clientX/window.innerWidth*2-1,r.y=-(L.clientY/window.innerHeight)*2+1,a.setFromCamera(r,t);const U=[];x.forEach(te=>{U.push(...te.children)});const Z=a.intersectObjects(U,!0);if(Z.length>0){const te=Z[0].object;_(te)}}function ht(){requestAnimationFrame(ht),ye(),o.update(),Ye(),n.render(e,t)}A(),ht()},Hu=()=>{const e=["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57","#ff9ff3","#54a0ff","#5f27cd","#00d2d3","#ff9f43","#ee5253","#10ac84","#5f27cd","#0abde3","#54a0ff"];return e[Math.floor(Math.random()*e.length)]};function ky(){var R;const[e,t]=Ae.useState("开发工具"),[n,o]=Ae.useState("开发IDE"),[a,r]=Ae.useState(!0),[i,s]=Ae.useState(!1),[c,l]=Ae.useState(null);function u(){s(!1),l(null),document.body.style.overflow=""}const[d,g]=Ae.useState(""),[p,w]=Ae.useState([]),[k,D]=Ae.useState(!1),m=Wc.useMemo(()=>[255,254,409,322,21,434,411,447,413,419,194,34].map(G=>{const N=zn.find(V=>V.id===G);return!N||!N.is_active?null:{name:N.name,desc:N.description||"暂无描述",desc_md:N.desc_md||"暂无描述",tags:N.tags?N.tags.split(",").filter(V=>V.trim()):[],color:Hu(),link:N.url||"#",icon:N.icon||N.logo||void 0,parent_category:N.parent_category_name,sub_category:N.sub_category_name||null}}).filter(G=>G!==null),[]),h={开发工具:{icon:ly,color:"from-green-500 to-teal-500",subCategories:["开发IDE","低代码/无代码","静态代码分析","构建工具","代码评审","代码协作"]},设计工具:{icon:gy,color:"from-pink-500 to-rose-500",subCategories:["流程图设计","3D设计","原型设计","UI设计"]},测试工具:{icon:hy,color:"from-red-500 to-orange-500",subCategories:["AI测试","抓包工具","API测试","测试管理","构造数据","安全测试","性能测试","自动化测试","单元测试"]},运维工具:{icon:my,color:"from-indigo-500 to-purple-500",subCategories:["容器管理","CICD","自动化运维","监控告警"]},办公软件:{icon:sy,color:"from-blue-500 to-cyan-500",subCategories:["知识库","问卷表单","在线文档","工具箱","PDF工具","在线翻译","表格处理"]},AI工具:{icon:uy,color:"from-purple-500 to-blue-500",subCategories:["AI写作","AI绘画","AI编程","AI音频","AI视频","AI搜索","AI设计","AI智能体","AI数字人","AI办公神器","AI智能助手"]},面试工具:{icon:py,color:"from-yellow-500 to-orange-500",subCategories:["面试刷题","简历制作","求职求聘"]},实用小工具:{icon:Wu,color:"from-gray-500 to-slate-500",subCategories:["图片压缩","图片编辑","翻译工具","格式转换","浏览器插件","PPT工具","Windows工具","表情包","在线工具","二维码制作"]},自媒体工具:{icon:fy,color:"from-red-500 to-pink-500",subCategories:["素材库","直播录制","视频下载","聚合网站","视频剪辑"]},资源网站:{icon:Fu,color:"from-emerald-500 to-green-500",subCategories:["大模型云平台","副业项目","网盘资源","学习资源","便民查询","休闲娱乐"]}},[f,T]=Ae.useState({}),[x,v]=Ae.useState(!0),[E,C]=Ae.useState([]);Ae.useEffect(()=>{try{const A={},G=[];zn.forEach(N=>{if(!N.is_active)return;const M=N.sub_category_name||N.parent_category_name,V={name:N.name,desc:N.description||"暂无描述",desc_md:N.desc_md||"暂无描述",tags:N.tags?N.tags.split(",").filter(re=>re.trim()):[],color:Hu(),link:N.url||"#",icon:N.icon||N.logo,parent_category:N.parent_category_name,sub_category:N.sub_category_name};A[M]||(A[M]=[]),A[M].push(V),G.push(V)}),Object.keys(A).forEach(N=>{A[N].sort((M,V)=>{const re=zn.findIndex(Q=>Q.name===M.name),P=zn.findIndex(Q=>Q.name===V.name),W=re!==-1?zn[re].views:0;return(P!==-1?zn[P].views:0)-W})}),T(A),C(G)}catch(A){console.error("处理工具数据时出错:",A)}finally{v(!1)}wy()},[]);const O=()=>{const A=d;if(!A.trim()){w([]),D(!1),t("AI工具"),o("AI写作");return}D(!0),setTimeout(()=>{const G=A.toLowerCase().trim(),N=E.filter(M=>M.name.toLowerCase().includes(G)||M.desc.toLowerCase().includes(G)||M.tags.some(V=>V.toLowerCase().includes(G)));if(w(N),N.length>0){const M=N[0];M.parent_category&&(t(M.parent_category),M.sub_category&&M.sub_category!==null?o(M.sub_category):M.parent_category&&h[M.parent_category]&&o(h[M.parent_category].subCategories[0])),r(!0)}},300)},z=n==="hotTools"?m:f[n]||[];return b.jsxs("div",{className:"flex h-screen bg-gray-50",children:[i&&c&&b.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",style:{backdropFilter:"blur(2px)"},children:b.jsxs("div",{className:"modal-dom relative bg-white rounded-2xl shadow-2xl p-8 overflow-y-auto animate-fadeIn",style:{width:"75vw",height:"75vh",maxHeight:"95vh"},children:[b.jsx("button",{className:"absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10",onClick:u,"aria-label":"关闭",children:b.jsx(yy,{size:32})}),b.jsxs("div",{className:"flex items-center mb-6 gap-4",children:[c.icon?b.jsx("img",{src:c.icon,alt:c.name,className:"w-16 h-16 rounded-lg shadow"}):b.jsx("div",{className:"w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-2xl",style:{backgroundColor:c.color},children:c.name.charAt(0)}),b.jsxs("div",{children:[b.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-1",children:c.name}),b.jsx("div",{className:"flex flex-wrap gap-2",children:c.tags.map((A,G)=>b.jsx("span",{className:"text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded",children:A.trim()},G))})]})]}),b.jsx("div",{className:"prose max-w-none mb-6",style:{minHeight:120,fontSize:18},children:b.jsx(Y1,{children:c.desc_md})}),b.jsxs("div",{className:"flex justify-end gap-4",children:[b.jsxs("a",{href:c.link,target:"_blank",rel:"noopener noreferrer",className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow transition",children:["访问工具 ",b.jsx(dy,{className:"inline ml-1",size:18})]}),b.jsx("button",{className:"bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold transition",onClick:u,children:"关闭"})]})]})}),b.jsxs("div",{className:`${a?"w-48":"w-16"} mk-side-bar border-r border-gray-200 flex flex-col transition-all duration-300`,children:[b.jsx("div",{className:"p-4 border-b border-gray-100 flex items-center justify-between",children:b.jsx("button",{onClick:()=>r(!a),className:"p-2 hover:bg-gray-100 rounded-lg",children:b.jsx(Ou,{size:20,className:"text-gray-600"})})}),b.jsx("div",{className:"px-3 pb-2",children:b.jsxs("button",{className:"w-full flex items-center space-x-2 px-3 py-2 text-red-500 bg-red-50 rounded-lg",onClick:()=>o("hotTools"),children:[b.jsx("span",{className:"text-xl",children:"🔥"}),a&&b.jsx("span",{className:"text-sm font-bold",children:"热门推荐"})]})}),b.jsx("div",{className:"flex-1 overflow-y-auto px-3 space-y-1",children:Object.entries(h).map(([A,G])=>{const N=G.icon,M=e===A;return b.jsxs("div",{children:[b.jsxs("button",{onClick:()=>{t(A),o(G.subCategories[0])},className:`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${M?"bg-blue-500 text-white shadow-md":"text-gray-700 hover:bg-gray-100"}`,children:[b.jsx(N,{size:18}),a&&b.jsxs(b.Fragment,{children:[b.jsx("span",{className:"text-md font-bold flex-1 text-left",children:A}),b.jsx(cy,{size:14,className:`transform transition-transform ${M?"rotate-180":""}`})]})]}),M&&a&&b.jsx("div",{className:"ml-4 mt-1 space-y-1",children:G.subCategories.map(V=>b.jsx("button",{onClick:()=>o(V),className:`w-full text-left px-3 py-1.5 rounded text-sm transition ${n===V?"bg-blue-50 text-blue-600 font-medium":"text-gray-600 hover:bg-gray-50"}`,children:V},V))})]},A)})})]}),b.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[b.jsxs("div",{className:"color-change-infinite",children:[b.jsx("div",{id:"canvas-container"}),b.jsx("button",{id:"auto-scroll-toggle",children:"scroll"}),b.jsx("div",{className:"mask"}),b.jsxs("div",{className:"top-content top-header bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white shadow-lg",children:[b.jsxs("div",{className:"px-6 py-3 flex items-center justify-between",children:[b.jsx("div",{className:"flex items-center space-x-6",children:b.jsx("div",{className:"flex items-center space-x-2",children:b.jsx("span",{className:"font-bold text-lg",children:"Mika导航之家"})})}),b.jsxs("div",{className:"flex items-center space-x-6 text-sm",style:{display:"none"},children:[b.jsxs("a",{href:"#",className:"flex items-center space-x-1 hover:text-purple-200 transition",children:[b.jsx(Ou,{size:16}),b.jsx("span",{children:"首页"})]}),b.jsxs("a",{href:"#",className:"flex items-center space-x-1 hover:text-purple-200 transition",children:[b.jsx(ry,{size:16}),b.jsx("span",{children:"最新上架"})]}),b.jsxs("a",{href:"#",className:"flex items-center space-x-1 hover:text-purple-200 transition",children:[b.jsx(_y,{size:16}),b.jsx("span",{children:"喜爱收藏"})]}),b.jsx("a",{href:"#",className:"flex items-center space-x-1 hover:text-purple-200 transition",children:b.jsx("span",{children:"我的导航"})}),b.jsxs("a",{href:"#",className:"flex items-center space-x-1 hover:text-purple-200 transition",children:[b.jsx(iy,{size:16}),b.jsx("span",{children:"免费教程"})]}),b.jsx("button",{className:"hover:text-purple-200 transition",children:"收录申请"}),b.jsx("button",{className:"hover:text-purple-200 transition",children:"联系我"})]})]}),b.jsx("div",{className:"px-6 pb-3",children:b.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-between",children:b.jsxs("div",{className:"flex items-center space-x-3",children:[b.jsx("span",{className:"bg-red-500 text-white text-xs px-2 py-0.5 rounded font-bold",children:"NEW"}),b.jsx("span",{className:"text-sm",children:"最新更新    | Mika导航工具页上线~     2025-10-09"})]})})})]}),b.jsx("div",{className:"top-content search-content bg-gradient-to-b from-purple-500 to-purple-600 px-6 py-12",children:b.jsxs("div",{className:"max-w-4xl mx-auto",children:[b.jsx("h1",{className:"text-header text-white text-3xl font-bold text-center mb-8",children:"工具搜索"}),b.jsxs("div",{className:"flex items-center bg-white rounded-full shadow-2xl overflow-hidden",children:[b.jsx("select",{className:"px-6 py-4 bg-transparent border-none outline-none text-gray-700 font-medium",children:b.jsx("option",{children:"站内"})}),b.jsx("input",{type:"text",placeholder:"搜索全网优质工具...",className:"flex-1 px-4 py-4 outline-none text-gray-700",value:d,onChange:A=>g(A.target.value),onKeyPress:A=>{A.key==="Enter"&&O()}}),b.jsx("button",{className:"search-button bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 hover:from-blue-600 hover:to-cyan-500 transition",onClick:O,children:b.jsx(Gu,{size:20})})]}),b.jsx("div",{className:"mt-4 flex items-center justify-center space-x-6 text-white text-sm",children:b.jsx("button",{className:"bg-green-500 hover:bg-orange-600 px-4 py-1.5 rounded-lg font-medium transition",children:"Ctrl+D 收藏本站"})})]})})]}),b.jsx("div",{className:"flex-1 overflow-y-auto bg-gray-50 mt-5",children:b.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[n==="hotTools"?b.jsxs("div",{className:"text-md font-semibold pb-5 text-red-500  font-bold",children:[b.jsx("span",{className:"text-2xl",children:"🔥"})," 热门推荐！！"]}):b.jsxs("div",{className:"mb-6",children:[b.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[b.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${((R=h[e])==null?void 0:R.color)||"from-gray-400 to-gray-500"} flex items-center justify-center`,children:h[e]?Wc.createElement(h[e].icon,{size:24,className:"text-white"}):b.jsx(Fu,{size:24,className:"text-white"})}),b.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:e})]}),b.jsxs("div",{className:"bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 flex items-center space-x-3",children:[b.jsx("span",{className:"text-2xl",children:"📁"}),b.jsx("span",{className:"font-semibold text-purple-900",children:n})]})]}),k&&b.jsx("div",{className:"mb-6 bg-white rounded-lg p-4 shadow-sm",children:b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsxs("h3",{className:"font-semibold text-gray-800",children:["搜索结果: ",p.length,' 个工具匹配 "',d,'"']}),k&&b.jsx("button",{className:"text-sm text-blue-500 hover:text-blue-700 transition",onClick:()=>{g(""),w([]),D(!1),t("AI工具"),o("AI写作")},children:"清除搜索"})]})}),x?b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:Array.from({length:8}).map((A,G)=>b.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 p-5 animate-pulse",children:[b.jsxs("div",{className:"flex items-start space-x-3 mb-3",children:[b.jsx("div",{className:"w-12 h-12 rounded-lg bg-gray-200 flex-shrink-0"}),b.jsxs("div",{className:"flex-1",children:[b.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4 mb-2"}),b.jsxs("div",{className:"flex space-x-1",children:[b.jsx("div",{className:"h-4 bg-gray-200 rounded w-16"}),b.jsx("div",{className:"h-4 bg-gray-200 rounded w-20"})]})]})]}),b.jsx("div",{className:"h-12 bg-gray-200 rounded w-full mb-4"}),b.jsxs("div",{className:"flex justify-between items-center",children:[b.jsx("div",{className:"h-4 bg-gray-200 rounded w-24"}),b.jsx("div",{className:"h-4 bg-gray-200 rounded w-20"})]})]},G))}):k?p.length>0?b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:p.map((A,G)=>b.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all p-5 group",children:[b.jsxs("div",{className:"flex items-start space-x-3 mb-3",children:[b.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md overflow-hidden",style:{backgroundColor:A.color},children:A.icon?b.jsx("img",{src:A.icon,alt:A.name,className:"w-full h-full object-cover transition-transform group-hover:scale-110",onError:N=>{const V=N.target.parentElement;V&&(V.innerHTML=A.name.charAt(0))}}):A.name.charAt(0)}),b.jsxs("div",{className:"flex-1 min-w-0",children:[b.jsx("h3",{className:"font-bold text-gray-800 group-hover:text-blue-600 transition mb-1 truncate",children:A.name}),b.jsx("div",{className:"flex flex-wrap gap-1",children:A.tags.map((N,M)=>b.jsx("span",{className:"text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded",children:N.trim()},M))})]})]}),b.jsx("p",{className:"text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed",children:A.desc}),b.jsxs("div",{className:"flex items-center justify-between text-sm",children:[b.jsxs("a",{href:A.link,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition",onClick:N=>{A.link==="#"&&(N.preventDefault(),alert("该工具链接暂时不可用"))},children:[b.jsx("span",{children:"直达链接"}),b.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"🔗"})]}),b.jsxs("button",{className:"text-gray-500 hover:text-blue-600 transition flex items-center space-x-1",onClick:()=>{l(A),s(!0),document.body.style.overflow="hidden"},children:[b.jsx("span",{children:"查看详情"}),b.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})]})]},A.name+G))}):b.jsxs("div",{className:"bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center",children:[b.jsx("div",{className:"w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",children:b.jsx(Gu,{size:40,className:"text-gray-400"})}),b.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"未找到相关工具"}),b.jsxs("p",{className:"text-gray-500 mb-6",children:['没有找到与 "',d,'" 相关的工具，请尝试其他关键词']}),b.jsx("button",{className:"bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition",onClick:()=>{g(""),w([]),D(!1),t("AI工具"),o("AI写作")},children:"返回全部工具"})]}):z&&z.length>0?b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:z.map((A,G)=>b.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all p-5 group",children:[b.jsxs("div",{className:"flex items-start space-x-3 mb-3",children:[b.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md overflow-hidden",style:{backgroundColor:A.color},children:A.icon?b.jsx("img",{src:A.icon,alt:A.name,className:"w-full h-full object-cover transition-transform group-hover:scale-110",onError:N=>{const V=N.target.parentElement;V&&(V.innerHTML=A.name.charAt(0))}}):A.name.charAt(0)}),b.jsxs("div",{className:"flex-1 min-w-0",children:[b.jsx("h3",{className:"font-bold text-gray-800 group-hover:text-blue-600 transition mb-1 truncate",children:A.name}),b.jsx("div",{className:"flex flex-wrap gap-1",children:A.tags.map((N,M)=>b.jsx("span",{className:"text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded",children:N.trim()},M))})]})]}),b.jsx("p",{className:"text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed",children:A.desc}),b.jsxs("div",{className:"flex items-center justify-between text-sm",children:[b.jsxs("a",{href:A.link,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition",onClick:N=>{A.link==="#"&&(N.preventDefault(),alert("该工具链接暂时不可用"))},children:[b.jsx("span",{children:"直达链接"}),b.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"🔗"})]}),b.jsxs("button",{className:"text-gray-500 hover:text-blue-600 transition flex items-center space-x-1",onClick:()=>{l(A),s(!0),document.body.style.overflow="hidden"},children:[b.jsx("span",{children:"查看详情"}),b.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})]})]},A.name+G))}):b.jsxs("div",{className:"bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center",children:[b.jsx("div",{className:"w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",children:b.jsx(Wu,{size:40,className:"text-gray-400"})}),b.jsxs("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:[n," - 内容即将上线"]}),b.jsx("p",{className:"text-gray-500",children:"该分类下的优质工具正在精心整理中，敬请期待..."})]})]})})]})]})}function vy(){return b.jsx("div",{className:"App",children:b.jsx(ky,{})})}Ai.createRoot(document.getElementById("root")).render(b.jsx(vy,{}));
