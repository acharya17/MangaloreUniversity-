(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))K(D);new MutationObserver(D=>{for(const U of D)if(U.type==="childList")for(const q of U.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&K(q)}).observe(document,{childList:!0,subtree:!0});function h(D){const U={};return D.integrity&&(U.integrity=D.integrity),D.referrerPolicy&&(U.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?U.credentials="include":D.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function K(D){if(D.ep)return;D.ep=!0;const U=h(D);fetch(D.href,U)}})();function Oa(z){return z&&z.__esModule&&Object.prototype.hasOwnProperty.call(z,"default")?z.default:z}var _o={exports:{}},wr={},zo={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za;function Dd(){if(za)return O;za=1;var z=Symbol.for("react.element"),M=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),q=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),te=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),L=Symbol.iterator;function B(d){return d===null||typeof d!="object"?null:(d=L&&d[L]||d["@@iterator"],typeof d=="function"?d:null)}var Qe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ke=Object.assign,ne={};function X(d,g,I){this.props=d,this.context=g,this.refs=ne,this.updater=I||Qe}X.prototype.isReactComponent={},X.prototype.setState=function(d,g){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,g,"setState")},X.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function yt(){}yt.prototype=X.prototype;function ct(d,g,I){this.props=d,this.context=g,this.refs=ne,this.updater=I||Qe}var et=ct.prototype=new yt;et.constructor=ct,Ke(et,X.prototype),et.isPureReactComponent=!0;var Se=Array.isArray,tt=Object.prototype.hasOwnProperty,_e={current:null},Fe={key:!0,ref:!0,__self:!0,__source:!0};function Ge(d,g,I){var A,H={},W=null,Z=null;if(g!=null)for(A in g.ref!==void 0&&(Z=g.ref),g.key!==void 0&&(W=""+g.key),g)tt.call(g,A)&&!Fe.hasOwnProperty(A)&&(H[A]=g[A]);var G=arguments.length-2;if(G===1)H.children=I;else if(1<G){for(var re=Array(G),Ue=0;Ue<G;Ue++)re[Ue]=arguments[Ue+2];H.children=re}if(d&&d.defaultProps)for(A in G=d.defaultProps,G)H[A]===void 0&&(H[A]=G[A]);return{$$typeof:z,type:d,key:W,ref:Z,props:H,_owner:_e.current}}function zt(d,g){return{$$typeof:z,type:d.type,key:g,ref:d.ref,props:d.props,_owner:d._owner}}function xt(d){return typeof d=="object"&&d!==null&&d.$$typeof===z}function Yt(d){var g={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(I){return g[I]})}var dt=/\/+/g;function Ae(d,g){return typeof d=="object"&&d!==null&&d.key!=null?Yt(""+d.key):g.toString(36)}function nt(d,g,I,A,H){var W=typeof d;(W==="undefined"||W==="boolean")&&(d=null);var Z=!1;if(d===null)Z=!0;else switch(W){case"string":case"number":Z=!0;break;case"object":switch(d.$$typeof){case z:case M:Z=!0}}if(Z)return Z=d,H=H(Z),d=A===""?"."+Ae(Z,0):A,Se(H)?(I="",d!=null&&(I=d.replace(dt,"$&/")+"/"),nt(H,g,I,"",function(Ue){return Ue})):H!=null&&(xt(H)&&(H=zt(H,I+(!H.key||Z&&Z.key===H.key?"":(""+H.key).replace(dt,"$&/")+"/")+d)),g.push(H)),1;if(Z=0,A=A===""?".":A+":",Se(d))for(var G=0;G<d.length;G++){W=d[G];var re=A+Ae(W,G);Z+=nt(W,g,I,re,H)}else if(re=B(d),typeof re=="function")for(d=re.call(d),G=0;!(W=d.next()).done;)W=W.value,re=A+Ae(W,G++),Z+=nt(W,g,I,re,H);else if(W==="object")throw g=String(d),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return Z}function ft(d,g,I){if(d==null)return d;var A=[],H=0;return nt(d,A,"","",function(W){return g.call(I,W,H++)}),A}function Te(d){if(d._status===-1){var g=d._result;g=g(),g.then(function(I){(d._status===0||d._status===-1)&&(d._status=1,d._result=I)},function(I){(d._status===0||d._status===-1)&&(d._status=2,d._result=I)}),d._status===-1&&(d._status=0,d._result=g)}if(d._status===1)return d._result.default;throw d._result}var ue={current:null},k={transition:null},T={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:k,ReactCurrentOwner:_e};function j(){throw Error("act(...) is not supported in production builds of React.")}return O.Children={map:ft,forEach:function(d,g,I){ft(d,function(){g.apply(this,arguments)},I)},count:function(d){var g=0;return ft(d,function(){g++}),g},toArray:function(d){return ft(d,function(g){return g})||[]},only:function(d){if(!xt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},O.Component=X,O.Fragment=h,O.Profiler=D,O.PureComponent=ct,O.StrictMode=K,O.Suspense=$,O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,O.act=j,O.cloneElement=function(d,g,I){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var A=Ke({},d.props),H=d.key,W=d.ref,Z=d._owner;if(g!=null){if(g.ref!==void 0&&(W=g.ref,Z=_e.current),g.key!==void 0&&(H=""+g.key),d.type&&d.type.defaultProps)var G=d.type.defaultProps;for(re in g)tt.call(g,re)&&!Fe.hasOwnProperty(re)&&(A[re]=g[re]===void 0&&G!==void 0?G[re]:g[re])}var re=arguments.length-2;if(re===1)A.children=I;else if(1<re){G=Array(re);for(var Ue=0;Ue<re;Ue++)G[Ue]=arguments[Ue+2];A.children=G}return{$$typeof:z,type:d.type,key:H,ref:W,props:A,_owner:Z}},O.createContext=function(d){return d={$$typeof:q,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:U,_context:d},d.Consumer=d},O.createElement=Ge,O.createFactory=function(d){var g=Ge.bind(null,d);return g.type=d,g},O.createRef=function(){return{current:null}},O.forwardRef=function(d){return{$$typeof:se,render:d}},O.isValidElement=xt,O.lazy=function(d){return{$$typeof:fe,_payload:{_status:-1,_result:d},_init:Te}},O.memo=function(d,g){return{$$typeof:te,type:d,compare:g===void 0?null:g}},O.startTransition=function(d){var g=k.transition;k.transition={};try{d()}finally{k.transition=g}},O.unstable_act=j,O.useCallback=function(d,g){return ue.current.useCallback(d,g)},O.useContext=function(d){return ue.current.useContext(d)},O.useDebugValue=function(){},O.useDeferredValue=function(d){return ue.current.useDeferredValue(d)},O.useEffect=function(d,g){return ue.current.useEffect(d,g)},O.useId=function(){return ue.current.useId()},O.useImperativeHandle=function(d,g,I){return ue.current.useImperativeHandle(d,g,I)},O.useInsertionEffect=function(d,g){return ue.current.useInsertionEffect(d,g)},O.useLayoutEffect=function(d,g){return ue.current.useLayoutEffect(d,g)},O.useMemo=function(d,g){return ue.current.useMemo(d,g)},O.useReducer=function(d,g,I){return ue.current.useReducer(d,g,I)},O.useRef=function(d){return ue.current.useRef(d)},O.useState=function(d){return ue.current.useState(d)},O.useSyncExternalStore=function(d,g,I){return ue.current.useSyncExternalStore(d,g,I)},O.useTransition=function(){return ue.current.useTransition()},O.version="18.3.1",O}var Pa;function Lo(){return Pa||(Pa=1,zo.exports=Dd()),zo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa;function Id(){if(Fa)return wr;Fa=1;var z=Lo(),M=Symbol.for("react.element"),h=Symbol.for("react.fragment"),K=Object.prototype.hasOwnProperty,D=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function q(se,$,te){var fe,L={},B=null,Qe=null;te!==void 0&&(B=""+te),$.key!==void 0&&(B=""+$.key),$.ref!==void 0&&(Qe=$.ref);for(fe in $)K.call($,fe)&&!U.hasOwnProperty(fe)&&(L[fe]=$[fe]);if(se&&se.defaultProps)for(fe in $=se.defaultProps,$)L[fe]===void 0&&(L[fe]=$[fe]);return{$$typeof:M,type:se,key:B,ref:Qe,props:L,_owner:D.current}}return wr.Fragment=h,wr.jsx=q,wr.jsxs=q,wr}var Ta;function Od(){return Ta||(Ta=1,_o.exports=Id()),_o.exports}var s=Od(),We=Lo();const Ad=Oa(We);var Rl={},Po={exports:{}},Oe={},Fo={exports:{}},To={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra;function Ud(){return Ra||(Ra=1,(function(z){function M(k,T){var j=k.length;k.push(T);e:for(;0<j;){var d=j-1>>>1,g=k[d];if(0<D(g,T))k[d]=T,k[j]=g,j=d;else break e}}function h(k){return k.length===0?null:k[0]}function K(k){if(k.length===0)return null;var T=k[0],j=k.pop();if(j!==T){k[0]=j;e:for(var d=0,g=k.length,I=g>>>1;d<I;){var A=2*(d+1)-1,H=k[A],W=A+1,Z=k[W];if(0>D(H,j))W<g&&0>D(Z,H)?(k[d]=Z,k[W]=j,d=W):(k[d]=H,k[A]=j,d=A);else if(W<g&&0>D(Z,j))k[d]=Z,k[W]=j,d=W;else break e}}return T}function D(k,T){var j=k.sortIndex-T.sortIndex;return j!==0?j:k.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var U=performance;z.unstable_now=function(){return U.now()}}else{var q=Date,se=q.now();z.unstable_now=function(){return q.now()-se}}var $=[],te=[],fe=1,L=null,B=3,Qe=!1,Ke=!1,ne=!1,X=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,ct=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function et(k){for(var T=h(te);T!==null;){if(T.callback===null)K(te);else if(T.startTime<=k)K(te),T.sortIndex=T.expirationTime,M($,T);else break;T=h(te)}}function Se(k){if(ne=!1,et(k),!Ke)if(h($)!==null)Ke=!0,Te(tt);else{var T=h(te);T!==null&&ue(Se,T.startTime-k)}}function tt(k,T){Ke=!1,ne&&(ne=!1,yt(Ge),Ge=-1),Qe=!0;var j=B;try{for(et(T),L=h($);L!==null&&(!(L.expirationTime>T)||k&&!Yt());){var d=L.callback;if(typeof d=="function"){L.callback=null,B=L.priorityLevel;var g=d(L.expirationTime<=T);T=z.unstable_now(),typeof g=="function"?L.callback=g:L===h($)&&K($),et(T)}else K($);L=h($)}if(L!==null)var I=!0;else{var A=h(te);A!==null&&ue(Se,A.startTime-T),I=!1}return I}finally{L=null,B=j,Qe=!1}}var _e=!1,Fe=null,Ge=-1,zt=5,xt=-1;function Yt(){return!(z.unstable_now()-xt<zt)}function dt(){if(Fe!==null){var k=z.unstable_now();xt=k;var T=!0;try{T=Fe(!0,k)}finally{T?Ae():(_e=!1,Fe=null)}}else _e=!1}var Ae;if(typeof ct=="function")Ae=function(){ct(dt)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ft=nt.port2;nt.port1.onmessage=dt,Ae=function(){ft.postMessage(null)}}else Ae=function(){X(dt,0)};function Te(k){Fe=k,_e||(_e=!0,Ae())}function ue(k,T){Ge=X(function(){k(z.unstable_now())},T)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(k){k.callback=null},z.unstable_continueExecution=function(){Ke||Qe||(Ke=!0,Te(tt))},z.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):zt=0<k?Math.floor(1e3/k):5},z.unstable_getCurrentPriorityLevel=function(){return B},z.unstable_getFirstCallbackNode=function(){return h($)},z.unstable_next=function(k){switch(B){case 1:case 2:case 3:var T=3;break;default:T=B}var j=B;B=T;try{return k()}finally{B=j}},z.unstable_pauseExecution=function(){},z.unstable_requestPaint=function(){},z.unstable_runWithPriority=function(k,T){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var j=B;B=k;try{return T()}finally{B=j}},z.unstable_scheduleCallback=function(k,T,j){var d=z.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?d+j:d):j=d,k){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=j+g,k={id:fe++,callback:T,priorityLevel:k,startTime:j,expirationTime:g,sortIndex:-1},j>d?(k.sortIndex=j,M(te,k),h($)===null&&k===h(te)&&(ne?(yt(Ge),Ge=-1):ne=!0,ue(Se,j-d))):(k.sortIndex=g,M($,k),Ke||Qe||(Ke=!0,Te(tt))),k},z.unstable_shouldYield=Yt,z.unstable_wrapCallback=function(k){var T=B;return function(){var j=B;B=T;try{return k.apply(this,arguments)}finally{B=j}}}})(To)),To}var La;function Bd(){return La||(La=1,Fo.exports=Ud()),Fo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma;function $d(){if(Ma)return Oe;Ma=1;var z=Lo(),M=Bd();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K=new Set,D={};function U(e,t){q(e,t),q(e+"Capture",t)}function q(e,t){for(D[e]=t,e=0;e<t.length;e++)K.add(t[e])}var se=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$=Object.prototype.hasOwnProperty,te=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fe={},L={};function B(e){return $.call(L,e)?!0:$.call(fe,e)?!1:te.test(e)?L[e]=!0:(fe[e]=!0,!1)}function Qe(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ke(e,t,n,r){if(t===null||typeof t>"u"||Qe(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ne(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new ne(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];X[t]=new ne(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new ne(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new ne(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new ne(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new ne(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new ne(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new ne(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var yt=/[\-:]([a-z])/g;function ct(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yt,ct);X[t]=new ne(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yt,ct);X[t]=new ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yt,ct);X[t]=new ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new ne(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function et(e,t,n,r){var l=X.hasOwnProperty(t)?X[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ke(t,n,l,r)&&(n=null),r||l===null?B(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Se=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tt=Symbol.for("react.element"),_e=Symbol.for("react.portal"),Fe=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),zt=Symbol.for("react.profiler"),xt=Symbol.for("react.provider"),Yt=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),k=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,d;function g(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var I=!1;function A(e,t){if(!e||I)return"";I=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var l=m.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{I=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function H(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=A(e.type,!1),e;case 11:return e=A(e.type.render,!1),e;case 1:return e=A(e.type,!0),e;default:return""}}function W(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fe:return"Fragment";case _e:return"Portal";case zt:return"Profiler";case Ge:return"StrictMode";case Ae:return"Suspense";case nt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yt:return(e.displayName||"Context")+".Consumer";case xt:return(e._context.displayName||"Context")+".Provider";case dt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}function Z(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===Ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function G(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function re(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ue(e){var t=re(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sr(e){e._valueTracker||(e._valueTracker=Ue(e))}function Mo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=re(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Do(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=G(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Io(e,t){t=t.checked,t!=null&&et(e,"checked",t,!1)}function Ml(e,t){Io(e,t);var n=G(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Dl(e,t.type,G(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Dl(e,t,n){(t!=="number"||Nr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function cn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+G(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Il(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ao(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Dn(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:G(n)}}function Uo(e,t){var n=G(t.value),r=G(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $o(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$o(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,Vo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ua=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){Ua.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Ho(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function Wo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ho(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ba=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(Ba[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function $l(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vl=null,dn=null,fn=null;function Qo(e){if(e=ir(e)){if(typeof Vl!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Gr(t),Vl(e.stateNode,e.type,t))}}function Ko(e){dn?fn?fn.push(e):fn=[e]:dn=e}function Go(){if(dn){var e=dn,t=fn;if(fn=dn=null,Qo(e),t)for(e=0;e<t.length;e++)Qo(t[e])}}function Yo(e,t){return e(t)}function Xo(){}var Hl=!1;function qo(e,t,n){if(Hl)return e(t,n);Hl=!0;try{return Yo(e,t,n)}finally{Hl=!1,(dn!==null||fn!==null)&&(Xo(),Go())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=Gr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Wl=!1;if(se)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{Wl=!1}function $a(e,t,n,r,l,i,o,u,a){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(y){this.onError(y)}}var Bn=!1,Cr=null,Er=!1,Ql=null,Va={onError:function(e){Bn=!0,Cr=e}};function Ha(e,t,n,r,l,i,o,u,a){Bn=!1,Cr=null,$a.apply(Va,arguments)}function Wa(e,t,n,r,l,i,o,u,a){if(Ha.apply(this,arguments),Bn){if(Bn){var m=Cr;Bn=!1,Cr=null}else throw Error(h(198));Er||(Er=!0,Ql=m)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jo(e){if(Xt(e)!==e)throw Error(h(188))}function Qa(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Jo(l),e;if(i===r)return Jo(l),t;i=i.sibling}throw Error(h(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function bo(e){return e=Qa(e),e!==null?es(e):null}function es(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=es(e);if(t!==null)return t;e=e.sibling}return null}var ts=M.unstable_scheduleCallback,ns=M.unstable_cancelCallback,Ka=M.unstable_shouldYield,Ga=M.unstable_requestPaint,ce=M.unstable_now,Ya=M.unstable_getCurrentPriorityLevel,Kl=M.unstable_ImmediatePriority,rs=M.unstable_UserBlockingPriority,_r=M.unstable_NormalPriority,Xa=M.unstable_LowPriority,ls=M.unstable_IdlePriority,zr=null,pt=null;function qa(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(zr,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:ba,Za=Math.log,Ja=Math.LN2;function ba(e){return e>>>=0,e===0?32:31-(Za(e)/Ja|0)|0}var Pr=64,Fr=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=$n(u):(i&=o,i!==0&&(r=$n(i)))}else o=n&~l,o!==0?r=$n(o):i!==0&&(r=$n(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),l=1<<n,r|=e[n],t&=~l;return r}function ec(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-rt(i),u=1<<o,a=l[o];a===-1?((u&n)===0||(u&r)!==0)&&(l[o]=ec(u,t)):a<=t&&(e.expiredLanes|=u),i&=~u}}function Gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function is(){var e=Pr;return Pr<<=1,(Pr&4194240)===0&&(Pr=64),e}function Yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function nc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-rt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var Y=0;function os(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ss,ql,us,as,cs,Zl=!1,Rr=[],Pt=null,Ft=null,Tt=null,Hn=new Map,Wn=new Map,Rt=[],rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ds(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function Qn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ir(t),t!==null&&ql(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function lc(e,t,n,r,l){switch(t){case"focusin":return Pt=Qn(Pt,e,t,n,r,l),!0;case"dragenter":return Ft=Qn(Ft,e,t,n,r,l),!0;case"mouseover":return Tt=Qn(Tt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Hn.set(i,Qn(Hn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Wn.set(i,Qn(Wn.get(i)||null,e,t,n,r,l)),!0}return!1}function fs(e){var t=qt(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=Zo(n),t!==null){e.blockedOn=t,cs(e.priority,function(){us(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=ir(n),t!==null&&ql(t),e.blockedOn=n,!1;t.shift()}return!0}function ps(e,t,n){Lr(e)&&n.delete(t)}function ic(){Zl=!1,Pt!==null&&Lr(Pt)&&(Pt=null),Ft!==null&&Lr(Ft)&&(Ft=null),Tt!==null&&Lr(Tt)&&(Tt=null),Hn.forEach(ps),Wn.forEach(ps)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,ic)))}function Gn(e){function t(l){return Kn(l,e)}if(0<Rr.length){Kn(Rr[0],e);for(var n=1;n<Rr.length;n++){var r=Rr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Kn(Pt,e),Ft!==null&&Kn(Ft,e),Tt!==null&&Kn(Tt,e),Hn.forEach(t),Wn.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)fs(n),n.blockedOn===null&&Rt.shift()}var pn=Se.ReactCurrentBatchConfig,Mr=!0;function oc(e,t,n,r){var l=Y,i=pn.transition;pn.transition=null;try{Y=1,Jl(e,t,n,r)}finally{Y=l,pn.transition=i}}function sc(e,t,n,r){var l=Y,i=pn.transition;pn.transition=null;try{Y=4,Jl(e,t,n,r)}finally{Y=l,pn.transition=i}}function Jl(e,t,n,r){if(Mr){var l=bl(e,t,n,r);if(l===null)vi(e,t,r,Dr,n),ds(e,r);else if(lc(l,e,t,n,r))r.stopPropagation();else if(ds(e,r),t&4&&-1<rc.indexOf(e)){for(;l!==null;){var i=ir(l);if(i!==null&&ss(i),i=bl(e,t,n,r),i===null&&vi(e,t,r,Dr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else vi(e,t,r,null,n)}}var Dr=null;function bl(e,t,n,r){if(Dr=null,e=$l(r),e=qt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dr=e,null}function ms(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ya()){case Kl:return 1;case rs:return 4;case _r:case Xa:return 16;case ls:return 536870912;default:return 16}default:return 16}}var Lt=null,ei=null,Ir=null;function hs(){if(Ir)return Ir;var e,t=ei,n=t.length,r,l="value"in Lt?Lt.value:Lt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Ir=l.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ar(){return!0}function vs(){return!1}function Be(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ar:vs,this.isPropagationStopped=vs,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ti=Be(mn),Yn=j({},mn,{view:0,detail:0}),uc=Be(Yn),ni,ri,Xn,Ur=j({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ii,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(ni=e.screenX-Xn.screenX,ri=e.screenY-Xn.screenY):ri=ni=0,Xn=e),ni)},movementY:function(e){return"movementY"in e?e.movementY:ri}}),gs=Be(Ur),ac=j({},Ur,{dataTransfer:0}),cc=Be(ac),dc=j({},Yn,{relatedTarget:0}),li=Be(dc),fc=j({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),pc=Be(fc),mc=j({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hc=Be(mc),vc=j({},mn,{data:0}),ys=Be(vc),gc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xc[e])?!!t[e]:!1}function ii(){return wc}var kc=j({},Yn,{key:function(e){if(e.key){var t=gc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ii,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sc=Be(kc),Nc=j({},Ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xs=Be(Nc),jc=j({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ii}),Cc=Be(jc),Ec=j({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),_c=Be(Ec),zc=j({},Ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pc=Be(zc),Fc=[9,13,27,32],oi=se&&"CompositionEvent"in window,qn=null;se&&"documentMode"in document&&(qn=document.documentMode);var Tc=se&&"TextEvent"in window&&!qn,ws=se&&(!oi||qn&&8<qn&&11>=qn),ks=" ",Ss=!1;function Ns(e,t){switch(e){case"keyup":return Fc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function Rc(e,t){switch(e){case"compositionend":return js(t);case"keypress":return t.which!==32?null:(Ss=!0,ks);case"textInput":return e=t.data,e===ks&&Ss?null:e;default:return null}}function Lc(e,t){if(hn)return e==="compositionend"||!oi&&Ns(e,t)?(e=hs(),Ir=ei=Lt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ws&&t.locale!=="ko"?null:t.data;default:return null}}var Mc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mc[e.type]:t==="textarea"}function Es(e,t,n,r){Ko(r),t=Wr(t,"onChange"),0<t.length&&(n=new ti("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zn=null,Jn=null;function Dc(e){Ws(e,0)}function Br(e){var t=wn(e);if(Mo(t))return e}function Ic(e,t){if(e==="change")return t}var _s=!1;if(se){var si;if(se){var ui="oninput"in document;if(!ui){var zs=document.createElement("div");zs.setAttribute("oninput","return;"),ui=typeof zs.oninput=="function"}si=ui}else si=!1;_s=si&&(!document.documentMode||9<document.documentMode)}function Ps(){Zn&&(Zn.detachEvent("onpropertychange",Fs),Jn=Zn=null)}function Fs(e){if(e.propertyName==="value"&&Br(Jn)){var t=[];Es(t,Jn,e,$l(e)),qo(Dc,t)}}function Oc(e,t,n){e==="focusin"?(Ps(),Zn=t,Jn=n,Zn.attachEvent("onpropertychange",Fs)):e==="focusout"&&Ps()}function Ac(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Br(Jn)}function Uc(e,t){if(e==="click")return Br(t)}function Bc(e,t){if(e==="input"||e==="change")return Br(t)}function $c(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:$c;function bn(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!$.call(t,l)||!lt(e[l],t[l]))return!1}return!0}function Ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rs(e,t){var n=Ts(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ts(n)}}function Ls(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ls(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ms(){for(var e=window,t=Nr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nr(e.document)}return t}function ai(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vc(e){var t=Ms(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ls(n.ownerDocument.documentElement,n)){if(r!==null&&ai(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Rs(n,i);var o=Rs(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hc=se&&"documentMode"in document&&11>=document.documentMode,vn=null,ci=null,er=null,di=!1;function Ds(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;di||vn==null||vn!==Nr(r)||(r=vn,"selectionStart"in r&&ai(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&bn(er,r)||(er=r,r=Wr(ci,"onSelect"),0<r.length&&(t=new ti("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}function $r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionend:$r("Transition","TransitionEnd")},fi={},Is={};se&&(Is=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Vr(e){if(fi[e])return fi[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Is)return fi[e]=t[n];return e}var Os=Vr("animationend"),As=Vr("animationiteration"),Us=Vr("animationstart"),Bs=Vr("transitionend"),$s=new Map,Vs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){$s.set(e,t),U(t,[e])}for(var pi=0;pi<Vs.length;pi++){var mi=Vs[pi],Wc=mi.toLowerCase(),Qc=mi[0].toUpperCase()+mi.slice(1);Mt(Wc,"on"+Qc)}Mt(Os,"onAnimationEnd"),Mt(As,"onAnimationIteration"),Mt(Us,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Bs,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),U("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),U("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),U("onBeforeInput",["compositionend","keypress","textInput","paste"]),U("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kc=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Hs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wa(r,t,void 0,e),e.currentTarget=null}function Ws(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,m=u.currentTarget;if(u=u.listener,a!==i&&l.isPropagationStopped())break e;Hs(l,u,m),i=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,m=u.currentTarget,u=u.listener,a!==i&&l.isPropagationStopped())break e;Hs(l,u,m),i=a}}}if(Er)throw e=Ql,Er=!1,Ql=null,e}function b(e,t){var n=t[Si];n===void 0&&(n=t[Si]=new Set);var r=e+"__bubble";n.has(r)||(Qs(t,e,2,!1),n.add(r))}function hi(e,t,n){var r=0;t&&(r|=4),Qs(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Hr]){e[Hr]=!0,K.forEach(function(n){n!=="selectionchange"&&(Kc.has(n)||hi(n,!1,e),hi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,hi("selectionchange",!1,t))}}function Qs(e,t,n,r){switch(ms(t)){case 1:var l=oc;break;case 4:l=sc;break;default:l=Jl}n=l.bind(null,t,n,e),l=void 0,!Wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function vi(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;u!==null;){if(o=qt(u),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}u=u.parentNode}}r=r.return}qo(function(){var m=i,y=$l(n),x=[];e:{var v=$s.get(e);if(v!==void 0){var S=ti,C=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":S=Sc;break;case"focusin":C="focus",S=li;break;case"focusout":C="blur",S=li;break;case"beforeblur":case"afterblur":S=li;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Cc;break;case Os:case As:case Us:S=pc;break;case Bs:S=_c;break;case"scroll":S=uc;break;case"wheel":S=Pc;break;case"copy":case"cut":case"paste":S=hc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=xs}var E=(t&4)!==0,de=!E&&e==="scroll",f=E?v!==null?v+"Capture":null:v;E=[];for(var c=m,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=An(c,f),w!=null&&E.push(rr(c,w,p)))),de)break;c=c.return}0<E.length&&(v=new S(v,C,null,n,y),x.push({event:v,listeners:E}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",v&&n!==Bl&&(C=n.relatedTarget||n.fromElement)&&(qt(C)||C[wt]))break e;if((S||v)&&(v=y.window===y?y:(v=y.ownerDocument)?v.defaultView||v.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=m,C=C?qt(C):null,C!==null&&(de=Xt(C),C!==de||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=m),S!==C)){if(E=gs,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=xs,w="onPointerLeave",f="onPointerEnter",c="pointer"),de=S==null?v:wn(S),p=C==null?v:wn(C),v=new E(w,c+"leave",S,n,y),v.target=de,v.relatedTarget=p,w=null,qt(y)===m&&(E=new E(f,c+"enter",C,n,y),E.target=p,E.relatedTarget=de,w=E),de=w,S&&C)t:{for(E=S,f=C,c=0,p=E;p;p=yn(p))c++;for(p=0,w=f;w;w=yn(w))p++;for(;0<c-p;)E=yn(E),c--;for(;0<p-c;)f=yn(f),p--;for(;c--;){if(E===f||f!==null&&E===f.alternate)break t;E=yn(E),f=yn(f)}E=null}else E=null;S!==null&&Ks(x,v,S,E,!1),C!==null&&de!==null&&Ks(x,de,C,E,!0)}}e:{if(v=m?wn(m):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var _=Ic;else if(Cs(v))if(_s)_=Bc;else{_=Ac;var P=Oc}else(S=v.nodeName)&&S.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(_=Uc);if(_&&(_=_(e,m))){Es(x,_,n,y);break e}P&&P(e,v,m),e==="focusout"&&(P=v._wrapperState)&&P.controlled&&v.type==="number"&&Dl(v,"number",v.value)}switch(P=m?wn(m):window,e){case"focusin":(Cs(P)||P.contentEditable==="true")&&(vn=P,ci=m,er=null);break;case"focusout":er=ci=vn=null;break;case"mousedown":di=!0;break;case"contextmenu":case"mouseup":case"dragend":di=!1,Ds(x,n,y);break;case"selectionchange":if(Hc)break;case"keydown":case"keyup":Ds(x,n,y)}var F;if(oi)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else hn?Ns(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(ws&&n.locale!=="ko"&&(hn||R!=="onCompositionStart"?R==="onCompositionEnd"&&hn&&(F=hs()):(Lt=y,ei="value"in Lt?Lt.value:Lt.textContent,hn=!0)),P=Wr(m,R),0<P.length&&(R=new ys(R,e,null,n,y),x.push({event:R,listeners:P}),F?R.data=F:(F=js(n),F!==null&&(R.data=F)))),(F=Tc?Rc(e,n):Lc(e,n))&&(m=Wr(m,"onBeforeInput"),0<m.length&&(y=new ys("onBeforeInput","beforeinput",null,n,y),x.push({event:y,listeners:m}),y.data=F))}Ws(x,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=An(e,n),i!=null&&r.unshift(rr(e,i,l)),i=An(e,t),i!=null&&r.push(rr(e,i,l))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ks(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,a=u.alternate,m=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&m!==null&&(u=m,l?(a=An(n,i),a!=null&&o.unshift(rr(n,a,u))):l||(a=An(n,i),a!=null&&o.push(rr(n,a,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Gc=/\r\n?/g,Yc=/\u0000|\uFFFD/g;function Gs(e){return(typeof e=="string"?e:""+e).replace(Gc,`
`).replace(Yc,"")}function Qr(e,t,n){if(t=Gs(t),Gs(e)!==t&&n)throw Error(h(425))}function Kr(){}var gi=null,yi=null;function xi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wi=typeof setTimeout=="function"?setTimeout:void 0,Xc=typeof clearTimeout=="function"?clearTimeout:void 0,Ys=typeof Promise=="function"?Promise:void 0,qc=typeof queueMicrotask=="function"?queueMicrotask:typeof Ys<"u"?function(e){return Ys.resolve(null).then(e).catch(Zc)}:wi;function Zc(e){setTimeout(function(){throw e})}function ki(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Gn(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),mt="__reactFiber$"+xn,lr="__reactProps$"+xn,wt="__reactContainer$"+xn,Si="__reactEvents$"+xn,Jc="__reactListeners$"+xn,bc="__reactHandles$"+xn;function qt(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xs(e);e!==null;){if(n=e[mt])return n;e=Xs(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[mt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Gr(e){return e[lr]||null}var Ni=[],kn=-1;function It(e){return{current:e}}function ee(e){0>kn||(e.current=Ni[kn],Ni[kn]=null,kn--)}function J(e,t){kn++,Ni[kn]=e.current,e.current=t}var Ot={},Ne=It(Ot),Re=It(!1),Zt=Ot;function Sn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Le(e){return e=e.childContextTypes,e!=null}function Yr(){ee(Re),ee(Ne)}function qs(e,t,n){if(Ne.current!==Ot)throw Error(h(168));J(Ne,t),J(Re,n)}function Zs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(h(108,Z(e)||"Unknown",l));return j({},n,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Zt=Ne.current,J(Ne,e),J(Re,Re.current),!0}function Js(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=Zs(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,ee(Re),ee(Ne),J(Ne,e)):ee(Re),J(Re,n)}var kt=null,qr=!1,ji=!1;function bs(e){kt===null?kt=[e]:kt.push(e)}function ed(e){qr=!0,bs(e)}function At(){if(!ji&&kt!==null){ji=!0;var e=0,t=Y;try{var n=kt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,qr=!1}catch(l){throw kt!==null&&(kt=kt.slice(e+1)),ts(Kl,At),l}finally{Y=t,ji=!1}}return null}var Nn=[],jn=0,Zr=null,Jr=0,Ye=[],Xe=0,Jt=null,St=1,Nt="";function bt(e,t){Nn[jn++]=Jr,Nn[jn++]=Zr,Zr=e,Jr=t}function eu(e,t,n){Ye[Xe++]=St,Ye[Xe++]=Nt,Ye[Xe++]=Jt,Jt=e;var r=St;e=Nt;var l=32-rt(r)-1;r&=~(1<<l),n+=1;var i=32-rt(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,St=1<<32-rt(t)+l|n<<l|r,Nt=i+e}else St=1<<i|n<<l|r,Nt=e}function Ci(e){e.return!==null&&(bt(e,1),eu(e,1,0))}function Ei(e){for(;e===Zr;)Zr=Nn[--jn],Nn[jn]=null,Jr=Nn[--jn],Nn[jn]=null;for(;e===Jt;)Jt=Ye[--Xe],Ye[Xe]=null,Nt=Ye[--Xe],Ye[Xe]=null,St=Ye[--Xe],Ye[Xe]=null}var $e=null,Ve=null,le=!1,it=null;function tu(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Ve=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:St,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Ve=null,!0):!1;default:return!1}}function _i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zi(e){if(le){var t=Ve;if(t){var n=t;if(!nu(e,t)){if(_i(e))throw Error(h(418));t=Dt(n.nextSibling);var r=$e;t&&nu(e,t)?tu(r,n):(e.flags=e.flags&-4097|2,le=!1,$e=e)}}else{if(_i(e))throw Error(h(418));e.flags=e.flags&-4097|2,le=!1,$e=e}}}function ru(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function br(e){if(e!==$e)return!1;if(!le)return ru(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xi(e.type,e.memoizedProps)),t&&(t=Ve)){if(_i(e))throw lu(),Error(h(418));for(;t;)tu(e,t),t=Dt(t.nextSibling)}if(ru(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=$e?Dt(e.stateNode.nextSibling):null;return!0}function lu(){for(var e=Ve;e;)e=Dt(e.nextSibling)}function Cn(){Ve=$e=null,le=!1}function Pi(e){it===null?it=[e]:it.push(e)}var td=Se.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function el(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function iu(e){var t=e._init;return t(e._payload)}function ou(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Kt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,p,w){return c===null||c.tag!==6?(c=ko(p,f.mode,w),c.return=f,c):(c=l(c,p),c.return=f,c)}function a(f,c,p,w){var _=p.type;return _===Fe?y(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Te&&iu(_)===c.type)?(w=l(c,p.props),w.ref=or(f,c,p),w.return=f,w):(w=jl(p.type,p.key,p.props,null,f.mode,w),w.ref=or(f,c,p),w.return=f,w)}function m(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=So(p,f.mode,w),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function y(f,c,p,w,_){return c===null||c.tag!==7?(c=un(p,f.mode,w,_),c.return=f,c):(c=l(c,p),c.return=f,c)}function x(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ko(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case tt:return p=jl(c.type,c.key,c.props,null,f.mode,p),p.ref=or(f,null,c),p.return=f,p;case _e:return c=So(c,f.mode,p),c.return=f,c;case Te:var w=c._init;return x(f,w(c._payload),p)}if(Dn(c)||T(c))return c=un(c,f.mode,p,null),c.return=f,c;el(f,c)}return null}function v(f,c,p,w){var _=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:u(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case tt:return p.key===_?a(f,c,p,w):null;case _e:return p.key===_?m(f,c,p,w):null;case Te:return _=p._init,v(f,c,_(p._payload),w)}if(Dn(p)||T(p))return _!==null?null:y(f,c,p,w,null);el(f,p)}return null}function S(f,c,p,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,u(c,f,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case tt:return f=f.get(w.key===null?p:w.key)||null,a(c,f,w,_);case _e:return f=f.get(w.key===null?p:w.key)||null,m(c,f,w,_);case Te:var P=w._init;return S(f,c,p,P(w._payload),_)}if(Dn(w)||T(w))return f=f.get(p)||null,y(c,f,w,_,null);el(c,w)}return null}function C(f,c,p,w){for(var _=null,P=null,F=c,R=c=0,ye=null;F!==null&&R<p.length;R++){F.index>R?(ye=F,F=null):ye=F.sibling;var Q=v(f,F,p[R],w);if(Q===null){F===null&&(F=ye);break}e&&F&&Q.alternate===null&&t(f,F),c=i(Q,c,R),P===null?_=Q:P.sibling=Q,P=Q,F=ye}if(R===p.length)return n(f,F),le&&bt(f,R),_;if(F===null){for(;R<p.length;R++)F=x(f,p[R],w),F!==null&&(c=i(F,c,R),P===null?_=F:P.sibling=F,P=F);return le&&bt(f,R),_}for(F=r(f,F);R<p.length;R++)ye=S(F,f,R,p[R],w),ye!==null&&(e&&ye.alternate!==null&&F.delete(ye.key===null?R:ye.key),c=i(ye,c,R),P===null?_=ye:P.sibling=ye,P=ye);return e&&F.forEach(function(Gt){return t(f,Gt)}),le&&bt(f,R),_}function E(f,c,p,w){var _=T(p);if(typeof _!="function")throw Error(h(150));if(p=_.call(p),p==null)throw Error(h(151));for(var P=_=null,F=c,R=c=0,ye=null,Q=p.next();F!==null&&!Q.done;R++,Q=p.next()){F.index>R?(ye=F,F=null):ye=F.sibling;var Gt=v(f,F,Q.value,w);if(Gt===null){F===null&&(F=ye);break}e&&F&&Gt.alternate===null&&t(f,F),c=i(Gt,c,R),P===null?_=Gt:P.sibling=Gt,P=Gt,F=ye}if(Q.done)return n(f,F),le&&bt(f,R),_;if(F===null){for(;!Q.done;R++,Q=p.next())Q=x(f,Q.value,w),Q!==null&&(c=i(Q,c,R),P===null?_=Q:P.sibling=Q,P=Q);return le&&bt(f,R),_}for(F=r(f,F);!Q.done;R++,Q=p.next())Q=S(F,f,R,Q.value,w),Q!==null&&(e&&Q.alternate!==null&&F.delete(Q.key===null?R:Q.key),c=i(Q,c,R),P===null?_=Q:P.sibling=Q,P=Q);return e&&F.forEach(function(Md){return t(f,Md)}),le&&bt(f,R),_}function de(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Fe&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case tt:e:{for(var _=p.key,P=c;P!==null;){if(P.key===_){if(_=p.type,_===Fe){if(P.tag===7){n(f,P.sibling),c=l(P,p.props.children),c.return=f,f=c;break e}}else if(P.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Te&&iu(_)===P.type){n(f,P.sibling),c=l(P,p.props),c.ref=or(f,P,p),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===Fe?(c=un(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=jl(p.type,p.key,p.props,null,f.mode,w),w.ref=or(f,c,p),w.return=f,f=w)}return o(f);case _e:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=So(p,f.mode,w),c.return=f,f=c}return o(f);case Te:return P=p._init,de(f,c,P(p._payload),w)}if(Dn(p))return C(f,c,p,w);if(T(p))return E(f,c,p,w);el(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=ko(p,f.mode,w),c.return=f,f=c),o(f)):n(f,c)}return de}var En=ou(!0),su=ou(!1),tl=It(null),nl=null,_n=null,Fi=null;function Ti(){Fi=_n=nl=null}function Ri(e){var t=tl.current;ee(tl),e._currentValue=t}function Li(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){nl=e,Fi=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Me=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(Fi!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(nl===null)throw Error(h(308));_n=e,nl.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var en=null;function Mi(e){en===null?en=[e]:en.push(e)}function uu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Mi(t)):(n.next=l.next,l.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function au(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,jt(e,n)}return l=r.interleaved,l===null?(t.next=t,Mi(r)):(t.next=l.next,l.next=t),r.interleaved=t,jt(e,n)}function rl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}function cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ll(e,t,n,r){var l=e.updateQueue;Ut=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,m=a.next;a.next=null,o===null?i=m:o.next=m,o=a;var y=e.alternate;y!==null&&(y=y.updateQueue,u=y.lastBaseUpdate,u!==o&&(u===null?y.firstBaseUpdate=m:u.next=m,y.lastBaseUpdate=a))}if(i!==null){var x=l.baseState;o=0,y=m=a=null,u=i;do{var v=u.lane,S=u.eventTime;if((r&v)===v){y!==null&&(y=y.next={eventTime:S,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var C=e,E=u;switch(v=t,S=n,E.tag){case 1:if(C=E.payload,typeof C=="function"){x=C.call(S,x,v);break e}x=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=E.payload,v=typeof C=="function"?C.call(S,x,v):C,v==null)break e;x=j({},x,v);break e;case 2:Ut=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[u]:v.push(u))}else S={eventTime:S,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},y===null?(m=y=S,a=x):y=y.next=S,o|=v;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;v=u,u=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);if(y===null&&(a=x),l.baseState=a,l.firstBaseUpdate=m,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);rn|=o,e.lanes=o,e.memoizedState=x}}function du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var sr={},ht=It(sr),ur=It(sr),ar=It(sr);function tn(e){if(e===sr)throw Error(h(174));return e}function Ii(e,t){switch(J(ar,t),J(ur,e),J(ht,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ol(t,e)}ee(ht),J(ht,t)}function Pn(){ee(ht),ee(ur),ee(ar)}function fu(e){tn(ar.current);var t=tn(ht.current),n=Ol(t,e.type);t!==n&&(J(ur,e),J(ht,n))}function Oi(e){ur.current===e&&(ee(ht),ee(ur))}var ie=It(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ai=[];function Ui(){for(var e=0;e<Ai.length;e++)Ai[e]._workInProgressVersionPrimary=null;Ai.length=0}var ol=Se.ReactCurrentDispatcher,Bi=Se.ReactCurrentBatchConfig,nn=0,oe=null,me=null,ve=null,sl=!1,cr=!1,dr=0,nd=0;function je(){throw Error(h(321))}function $i(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function Vi(e,t,n,r,l,i){if(nn=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ol.current=e===null||e.memoizedState===null?od:sd,e=n(r,l),cr){i=0;do{if(cr=!1,dr=0,25<=i)throw Error(h(301));i+=1,ve=me=null,t.updateQueue=null,ol.current=ud,e=n(r,l)}while(cr)}if(ol.current=cl,t=me!==null&&me.next!==null,nn=0,ve=me=oe=null,sl=!1,t)throw Error(h(300));return e}function Hi(){var e=dr!==0;return dr=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?oe.memoizedState=ve=e:ve=ve.next=e,ve}function Ze(){if(me===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ve===null?oe.memoizedState:ve.next;if(t!==null)ve=t,me=e;else{if(e===null)throw Error(h(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ve===null?oe.memoizedState=ve=e:ve=ve.next=e}return ve}function fr(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=Ze(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=me,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,a=null,m=i;do{var y=m.lane;if((nn&y)===y)a!==null&&(a=a.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var x={lane:y,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};a===null?(u=a=x,o=r):a=a.next=x,oe.lanes|=y,rn|=y}m=m.next}while(m!==null&&m!==i);a===null?o=r:a.next=u,lt(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,oe.lanes|=i,rn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qi(e){var t=Ze(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);lt(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function pu(){}function mu(e,t){var n=oe,r=Ze(),l=t(),i=!lt(r.memoizedState,l);if(i&&(r.memoizedState=l,Me=!0),r=r.queue,Ki(gu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,pr(9,vu.bind(null,n,r,l,t),void 0,null),ge===null)throw Error(h(349));(nn&30)!==0||hu(n,t,l)}return l}function hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vu(e,t,n,r){t.value=n,t.getSnapshot=r,yu(t)&&xu(e)}function gu(e,t,n){return n(function(){yu(t)&&xu(e)})}function yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function xu(e){var t=jt(e,1);t!==null&&at(t,e,1,-1)}function wu(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=id.bind(null,oe,e),[t.memoizedState,e]}function pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ku(){return Ze().memoizedState}function ul(e,t,n,r){var l=vt();oe.flags|=e,l.memoizedState=pr(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=Ze();r=r===void 0?null:r;var i=void 0;if(me!==null){var o=me.memoizedState;if(i=o.destroy,r!==null&&$i(r,o.deps)){l.memoizedState=pr(t,n,i,r);return}}oe.flags|=e,l.memoizedState=pr(1|t,n,i,r)}function Su(e,t){return ul(8390656,8,e,t)}function Ki(e,t){return al(2048,8,e,t)}function Nu(e,t){return al(4,2,e,t)}function ju(e,t){return al(4,4,e,t)}function Cu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eu(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,Cu.bind(null,t,e),n)}function Gi(){}function _u(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$i(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zu(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$i(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pu(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n):(lt(n,t)||(n=is(),oe.lanes|=n,rn|=n,e.baseState=!0),t)}function rd(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=Bi.transition;Bi.transition={};try{e(!1),t()}finally{Y=n,Bi.transition=r}}function Fu(){return Ze().memoizedState}function ld(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tu(e))Ru(t,n);else if(n=uu(e,t,n,r),n!==null){var l=Pe();at(n,e,r,l),Lu(n,t,r)}}function id(e,t,n){var r=Wt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tu(e))Ru(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,lt(u,o)){var a=t.interleaved;a===null?(l.next=l,Mi(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=uu(e,t,l,r),n!==null&&(l=Pe(),at(n,e,r,l),Lu(n,t,r))}}function Tu(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Ru(e,t){cr=sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}var cl={readContext:qe,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},od={readContext:qe,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:Su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ul(4194308,4,Cu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ul(4194308,4,e,t)},useInsertionEffect:function(e,t){return ul(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ld.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:wu,useDebugValue:Gi,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=wu(!1),t=e[0];return e=rd.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,l=vt();if(le){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),ge===null)throw Error(h(349));(nn&30)!==0||hu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Su(gu.bind(null,r,i,e),[e]),r.flags|=2048,pr(9,vu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vt(),t=ge.identifierPrefix;if(le){var n=Nt,r=St;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sd={readContext:qe,useCallback:_u,useContext:qe,useEffect:Ki,useImperativeHandle:Eu,useInsertionEffect:Nu,useLayoutEffect:ju,useMemo:zu,useReducer:Wi,useRef:ku,useState:function(){return Wi(fr)},useDebugValue:Gi,useDeferredValue:function(e){var t=Ze();return Pu(t,me.memoizedState,e)},useTransition:function(){var e=Wi(fr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:mu,useId:Fu,unstable_isNewReconciler:!1},ud={readContext:qe,useCallback:_u,useContext:qe,useEffect:Ki,useImperativeHandle:Eu,useInsertionEffect:Nu,useLayoutEffect:ju,useMemo:zu,useReducer:Qi,useRef:ku,useState:function(){return Qi(fr)},useDebugValue:Gi,useDeferredValue:function(e){var t=Ze();return me===null?t.memoizedState=e:Pu(t,me.memoizedState,e)},useTransition:function(){var e=Qi(fr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:mu,useId:Fu,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),l=Wt(e),i=Ct(r,l);i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,l),t!==null&&(at(t,e,l,r),rl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),l=Wt(e),i=Ct(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,l),t!==null&&(at(t,e,l,r),rl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=Wt(e),l=Ct(n,r);l.tag=2,t!=null&&(l.callback=t),t=Bt(e,l,r),t!==null&&(at(t,e,r,n),rl(t,e,r))}};function Mu(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!bn(n,r)||!bn(l,i):!0}function Du(e,t,n){var r=!1,l=Ot,i=t.contextType;return typeof i=="object"&&i!==null?i=qe(i):(l=Le(t)?Zt:Ne.current,r=t.contextTypes,i=(r=r!=null)?Sn(e,l):Ot),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Iu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function Xi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Di(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=qe(i):(i=Le(t)?Zt:Ne.current,l.context=Sn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Yi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&dl.enqueueReplaceState(l,l.state,null),ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var n="",r=t;do n+=H(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function Ou(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yl||(yl=!0,po=r),Zi(e,t)},n}function Au(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Zi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zi(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ad;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Nd.bind(null,e,t,n),t.then(e,e))}function Bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $u(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var cd=Se.ReactCurrentOwner,Me=!1;function ze(e,t,n,r){t.child=e===null?su(t,null,n,r):En(t,e.child,n,r)}function Vu(e,t,n,r,l){n=n.render;var i=t.ref;return zn(t,l),r=Vi(e,t,n,r,i,l),n=Hi(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(le&&n&&Ci(t),t.flags|=1,ze(e,t,r,l),t.child)}function Hu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!wo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Wu(e,t,i,r,l)):(e=jl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:bn,n(o,r)&&e.ref===t.ref)return Et(e,t,l)}return t.flags|=1,e=Kt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Wu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(bn(i,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Me=!0);else return t.lanes=e.lanes,Et(e,t,l)}return Ji(e,t,n,r,l)}function Qu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Rn,He),He|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Rn,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(Rn,He),He|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(Rn,He),He|=r;return ze(e,t,l,n),t.child}function Ku(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ji(e,t,n,r,l){var i=Le(n)?Zt:Ne.current;return i=Sn(t,i),zn(t,l),n=Vi(e,t,n,r,i,l),r=Hi(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(le&&r&&Ci(t),t.flags|=1,ze(e,t,n,l),t.child)}function Gu(e,t,n,r,l){if(Le(n)){var i=!0;Xr(t)}else i=!1;if(zn(t,l),t.stateNode===null)pl(e,t),Du(t,n,r),Xi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var a=o.context,m=n.contextType;typeof m=="object"&&m!==null?m=qe(m):(m=Le(n)?Zt:Ne.current,m=Sn(t,m));var y=n.getDerivedStateFromProps,x=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==m)&&Iu(t,o,r,m),Ut=!1;var v=t.memoizedState;o.state=v,ll(t,r,o,l),a=t.memoizedState,u!==r||v!==a||Re.current||Ut?(typeof y=="function"&&(Yi(t,n,y,r),a=t.memoizedState),(u=Ut||Mu(t,n,u,r,v,a,m))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=m,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,au(e,t),u=t.memoizedProps,m=t.type===t.elementType?u:ot(t.type,u),o.props=m,x=t.pendingProps,v=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=qe(a):(a=Le(n)?Zt:Ne.current,a=Sn(t,a));var S=n.getDerivedStateFromProps;(y=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==x||v!==a)&&Iu(t,o,r,a),Ut=!1,v=t.memoizedState,o.state=v,ll(t,r,o,l);var C=t.memoizedState;u!==x||v!==C||Re.current||Ut?(typeof S=="function"&&(Yi(t,n,S,r),C=t.memoizedState),(m=Ut||Mu(t,n,m,r,v,C,a)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),o.props=r,o.state=C,o.context=a,r=m):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return bi(e,t,n,r,i,l)}function bi(e,t,n,r,l,i){Ku(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Js(t,n,!1),Et(e,t,i);r=t.stateNode,cd.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=En(t,e.child,null,i),t.child=En(t,null,u,i)):ze(e,t,u,i),t.memoizedState=r.state,l&&Js(t,n,!0),t.child}function Yu(e){var t=e.stateNode;t.pendingContext?qs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qs(e,t.context,!1),Ii(e,t.containerInfo)}function Xu(e,t,n,r,l){return Cn(),Pi(l),t.flags|=256,ze(e,t,n,r),t.child}var eo={dehydrated:null,treeContext:null,retryLane:0};function to(e){return{baseLanes:e,cachePool:null,transitions:null}}function qu(e,t,n){var r=t.pendingProps,l=ie.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),J(ie,l&1),e===null)return zi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Cl(o,r,0,null),e=un(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=to(n),t.memoizedState=eo,e):no(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return dd(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Kt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=Kt(u,i):(i=un(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?to(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=eo,r}return i=e.child,e=i.sibling,r=Kt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function no(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fl(e,t,n,r){return r!==null&&Pi(r),En(t,e.child,null,n),e=no(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dd(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=qi(Error(h(422))),fl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Cl({mode:"visible",children:r.children},l,0,null),i=un(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&En(t,e.child,null,o),t.child.memoizedState=to(o),t.memoizedState=eo,i);if((t.mode&1)===0)return fl(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(h(419)),r=qi(i,r,void 0),fl(e,t,o,r)}if(u=(o&e.childLanes)!==0,Me||u){if(r=ge,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,jt(e,l),at(r,e,l,-1))}return xo(),r=qi(Error(h(421))),fl(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=jd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ve=Dt(l.nextSibling),$e=t,le=!0,it=null,e!==null&&(Ye[Xe++]=St,Ye[Xe++]=Nt,Ye[Xe++]=Jt,St=e.id,Nt=e.overflow,Jt=t),t=no(t,r.children),t.flags|=4096,t)}function Zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Li(e.return,t,n)}function ro(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Ju(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ze(e,t,r.children,n),r=ie.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zu(e,n,t);else if(e.tag===19)Zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(ie,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ro(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&il(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ro(t,!0,n,null,i);break;case"together":ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fd(e,t,n){switch(t.tag){case 3:Yu(t),Cn();break;case 5:fu(t);break;case 1:Le(t.type)&&Xr(t);break;case 4:Ii(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;J(tl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(ie,ie.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?qu(e,t,n):(J(ie,ie.current&1),e=Et(e,t,n),e!==null?e.sibling:null);J(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ju(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Qu(e,t,n)}return Et(e,t,n)}var bu,lo,ea,ta;bu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},lo=function(){},ea=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,tn(ht.current);var i=null;switch(n){case"input":l=Ll(e,l),r=Ll(e,r),i=[];break;case"select":l=j({},l,{value:void 0}),r=j({},r,{value:void 0}),i=[];break;case"textarea":l=Il(e,l),r=Il(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kr)}Al(n,r);var o;n=null;for(m in l)if(!r.hasOwnProperty(m)&&l.hasOwnProperty(m)&&l[m]!=null)if(m==="style"){var u=l[m];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(D.hasOwnProperty(m)?i||(i=[]):(i=i||[]).push(m,null));for(m in r){var a=r[m];if(u=l!=null?l[m]:void 0,r.hasOwnProperty(m)&&a!==u&&(a!=null||u!=null))if(m==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(m,n)),n=a;else m==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(m,a)):m==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(m,""+a):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(D.hasOwnProperty(m)?(a!=null&&m==="onScroll"&&b("scroll",e),i||u===a||(i=[])):(i=i||[]).push(m,a))}n&&(i=i||[]).push("style",n);var m=i;(t.updateQueue=m)&&(t.flags|=4)}},ta=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pd(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Le(t.type)&&Yr(),Ce(t),null;case 3:return r=t.stateNode,Pn(),ee(Re),ee(Ne),Ui(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(vo(it),it=null))),lo(e,t),Ce(t),null;case 5:Oi(t);var l=tn(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)ea(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return Ce(t),null}if(e=tn(ht.current),br(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[lr]=i,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(l=0;l<tr.length;l++)b(tr[l],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":Do(r,i),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},b("invalid",r);break;case"textarea":Ao(r,i),b("invalid",r)}Al(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,u,e),l=["children",""+u]):D.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&b("scroll",r)}switch(n){case"input":Sr(r),Oo(r,i,!0);break;case"textarea":Sr(r),Bo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Kr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$o(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[mt]=t,e[lr]=r,bu(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ul(n,r),n){case"dialog":b("cancel",e),b("close",e),l=r;break;case"iframe":case"object":case"embed":b("load",e),l=r;break;case"video":case"audio":for(l=0;l<tr.length;l++)b(tr[l],e);l=r;break;case"source":b("error",e),l=r;break;case"img":case"image":case"link":b("error",e),b("load",e),l=r;break;case"details":b("toggle",e),l=r;break;case"input":Do(e,r),l=Ll(e,r),b("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=j({},r,{value:void 0}),b("invalid",e);break;case"textarea":Ao(e,r),l=Il(e,r),b("invalid",e);break;default:l=r}Al(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?Wo(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Vo(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&In(e,a):typeof a=="number"&&In(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(D.hasOwnProperty(i)?a!=null&&i==="onScroll"&&b("scroll",e):a!=null&&et(e,i,a,o))}switch(n){case"input":Sr(e),Oo(e,r,!1);break;case"textarea":Sr(e),Bo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+G(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?cn(e,!!r.multiple,i,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Kr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)ta(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=tn(ar.current),tn(ht.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Ce(t),null;case 13:if(ee(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Ve!==null&&(t.mode&1)!==0&&(t.flags&128)===0)lu(),Cn(),t.flags|=98560,i=!1;else if(i=br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[mt]=t}else Cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else it!==null&&(vo(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ie.current&1)!==0?he===0&&(he=3):xo())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Pn(),lo(e,t),e===null&&nr(t.stateNode.containerInfo),Ce(t),null;case 10:return Ri(t.type._context),Ce(t),null;case 17:return Le(t.type)&&Yr(),Ce(t),null;case 19:if(ee(ie),i=t.memoizedState,i===null)return Ce(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)mr(i,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=il(e),o!==null){for(t.flags|=128,mr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(ie,ie.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>Ln&&(t.flags|=128,r=!0,mr(i,!1),t.lanes=4194304)}else{if(!r)if(e=il(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!le)return Ce(t),null}else 2*ce()-i.renderingStartTime>Ln&&n!==1073741824&&(t.flags|=128,r=!0,mr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,n=ie.current,J(ie,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return yo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(He&1073741824)!==0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function md(e,t){switch(Ei(t),t.tag){case 1:return Le(t.type)&&Yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),ee(Re),ee(Ne),Ui(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Oi(t),null;case 13:if(ee(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ie),null;case 4:return Pn(),null;case 10:return Ri(t.type._context),null;case 22:case 23:return yo(),null;case 24:return null;default:return null}}var ml=!1,Ee=!1,hd=typeof WeakSet=="function"?WeakSet:Set,N=null;function Tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function io(e,t,n){try{n()}catch(r){ae(e,t,r)}}var na=!1;function vd(e,t){if(gi=Mr,e=Ms(),ai(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,a=-1,m=0,y=0,x=e,v=null;t:for(;;){for(var S;x!==n||l!==0&&x.nodeType!==3||(u=o+l),x!==i||r!==0&&x.nodeType!==3||(a=o+r),x.nodeType===3&&(o+=x.nodeValue.length),(S=x.firstChild)!==null;)v=x,x=S;for(;;){if(x===e)break t;if(v===n&&++m===l&&(u=o),v===i&&++y===r&&(a=o),(S=x.nextSibling)!==null)break;x=v,v=x.parentNode}x=S}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(yi={focusedElem:e,selectionRange:n},Mr=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var C=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var E=C.memoizedProps,de=C.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?E:ot(t.type,E),de);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return C=na,na=!1,C}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&io(t,n,i)}l=l.next}while(l!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ra(e){var t=e.alternate;t!==null&&(e.alternate=null,ra(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[lr],delete t[Si],delete t[Jc],delete t[bc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function la(e){return e.tag===5||e.tag===3||e.tag===4}function ia(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||la(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function so(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kr));else if(r!==4&&(e=e.child,e!==null))for(so(e,t,n),e=e.sibling;e!==null;)so(e,t,n),e=e.sibling}function uo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(uo(e,t,n),e=e.sibling;e!==null;)uo(e,t,n),e=e.sibling}var we=null,st=!1;function $t(e,t,n){for(n=n.child;n!==null;)oa(e,t,n),n=n.sibling}function oa(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(zr,n)}catch{}switch(n.tag){case 5:Ee||Tn(n,t);case 6:var r=we,l=st;we=null,$t(e,t,n),we=r,st=l,we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?ki(e.parentNode,n):e.nodeType===1&&ki(e,n),Gn(e)):ki(we,n.stateNode));break;case 4:r=we,l=st,we=n.stateNode.containerInfo,st=!0,$t(e,t,n),we=r,st=l;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&io(n,t,o),l=l.next}while(l!==r)}$t(e,t,n);break;case 1:if(!Ee&&(Tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ae(n,t,u)}$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,$t(e,t,n),Ee=r):$t(e,t,n);break;default:$t(e,t,n)}}function sa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hd),t.forEach(function(r){var l=Cd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:we=u.stateNode,st=!1;break e;case 3:we=u.stateNode.containerInfo,st=!0;break e;case 4:we=u.stateNode.containerInfo,st=!0;break e}u=u.return}if(we===null)throw Error(h(160));oa(i,o,l),we=null,st=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(m){ae(l,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ua(t,e),t=t.sibling}function ua(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),gt(e),r&4){try{hr(3,e,e.return),hl(3,e)}catch(E){ae(e,e.return,E)}try{hr(5,e,e.return)}catch(E){ae(e,e.return,E)}}break;case 1:ut(t,e),gt(e),r&512&&n!==null&&Tn(n,n.return);break;case 5:if(ut(t,e),gt(e),r&512&&n!==null&&Tn(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(E){ae(e,e.return,E)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Io(l,i),Ul(u,o);var m=Ul(u,i);for(o=0;o<a.length;o+=2){var y=a[o],x=a[o+1];y==="style"?Wo(l,x):y==="dangerouslySetInnerHTML"?Vo(l,x):y==="children"?In(l,x):et(l,y,x,m)}switch(u){case"input":Ml(l,i);break;case"textarea":Uo(l,i);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?cn(l,!!i.multiple,S,!1):v!==!!i.multiple&&(i.defaultValue!=null?cn(l,!!i.multiple,i.defaultValue,!0):cn(l,!!i.multiple,i.multiple?[]:"",!1))}l[lr]=i}catch(E){ae(e,e.return,E)}}break;case 6:if(ut(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(E){ae(e,e.return,E)}}break;case 3:if(ut(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(E){ae(e,e.return,E)}break;case 4:ut(t,e),gt(e);break;case 13:ut(t,e),gt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(fo=ce())),r&4&&sa(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(m=Ee)||y,ut(t,e),Ee=m):ut(t,e),gt(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!y&&(e.mode&1)!==0)for(N=e,y=e.child;y!==null;){for(x=N=y;N!==null;){switch(v=N,S=v.child,v.tag){case 0:case 11:case 14:case 15:hr(4,v,v.return);break;case 1:Tn(v,v.return);var C=v.stateNode;if(typeof C.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(E){ae(r,n,E)}}break;case 5:Tn(v,v.return);break;case 22:if(v.memoizedState!==null){da(x);continue}}S!==null?(S.return=v,N=S):da(x)}y=y.sibling}e:for(y=null,x=e;;){if(x.tag===5){if(y===null){y=x;try{l=x.stateNode,m?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=x.stateNode,a=x.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Ho("display",o))}catch(E){ae(e,e.return,E)}}}else if(x.tag===6){if(y===null)try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(E){ae(e,e.return,E)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;y===x&&(y=null),x=x.return}y===x&&(y=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:ut(t,e),gt(e),r&4&&sa(e);break;case 21:break;default:ut(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(la(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var i=ia(e);uo(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=ia(e);so(e,u,o);break;default:throw Error(h(161))}}catch(a){ae(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gd(e,t,n){N=e,aa(e)}function aa(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var l=N,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||ml;if(!o){var u=l.alternate,a=u!==null&&u.memoizedState!==null||Ee;u=ml;var m=Ee;if(ml=o,(Ee=a)&&!m)for(N=l;N!==null;)o=N,a=o.child,o.tag===22&&o.memoizedState!==null?fa(l):a!==null?(a.return=o,N=a):fa(l);for(;i!==null;)N=i,aa(i),i=i.sibling;N=l,ml=u,Ee=m}ca(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,N=i):ca(e)}}function ca(e){for(;N!==null;){var t=N;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ee||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&du(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}du(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var y=m.memoizedState;if(y!==null){var x=y.dehydrated;x!==null&&Gn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}Ee||t.flags&512&&oo(t)}catch(v){ae(t,t.return,v)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function da(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function fa(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(a){ae(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){ae(t,l,a)}}var i=t.return;try{oo(t)}catch(a){ae(t,i,a)}break;case 5:var o=t.return;try{oo(t)}catch(a){ae(t,o,a)}}}catch(a){ae(t,t.return,a)}if(t===e){N=null;break}var u=t.sibling;if(u!==null){u.return=t.return,N=u;break}N=t.return}}var yd=Math.ceil,vl=Se.ReactCurrentDispatcher,ao=Se.ReactCurrentOwner,Je=Se.ReactCurrentBatchConfig,V=0,ge=null,pe=null,ke=0,He=0,Rn=It(0),he=0,vr=null,rn=0,gl=0,co=0,gr=null,De=null,fo=0,Ln=1/0,_t=null,yl=!1,po=null,Vt=null,xl=!1,Ht=null,wl=0,yr=0,mo=null,kl=-1,Sl=0;function Pe(){return(V&6)!==0?ce():kl!==-1?kl:kl=ce()}function Wt(e){return(e.mode&1)===0?1:(V&2)!==0&&ke!==0?ke&-ke:td.transition!==null?(Sl===0&&(Sl=is()),Sl):(e=Y,e!==0||(e=window.event,e=e===void 0?16:ms(e.type)),e)}function at(e,t,n,r){if(50<yr)throw yr=0,mo=null,Error(h(185));Vn(e,n,r),((V&2)===0||e!==ge)&&(e===ge&&((V&2)===0&&(gl|=n),he===4&&Qt(e,ke)),Ie(e,r),n===1&&V===0&&(t.mode&1)===0&&(Ln=ce()+500,qr&&At()))}function Ie(e,t){var n=e.callbackNode;tc(e,t);var r=Tr(e,e===ge?ke:0);if(r===0)n!==null&&ns(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ns(n),t===1)e.tag===0?ed(ma.bind(null,e)):bs(ma.bind(null,e)),qc(function(){(V&6)===0&&At()}),n=null;else{switch(os(r)){case 1:n=Kl;break;case 4:n=rs;break;case 16:n=_r;break;case 536870912:n=ls;break;default:n=_r}n=Sa(n,pa.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pa(e,t){if(kl=-1,Sl=0,(V&6)!==0)throw Error(h(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Tr(e,e===ge?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Nl(e,r);else{t=r;var l=V;V|=2;var i=va();(ge!==e||ke!==t)&&(_t=null,Ln=ce()+500,on(e,t));do try{kd();break}catch(u){ha(e,u)}while(!0);Ti(),vl.current=i,V=l,pe!==null?t=0:(ge=null,ke=0,t=he)}if(t!==0){if(t===2&&(l=Gl(e),l!==0&&(r=l,t=ho(e,l))),t===1)throw n=vr,on(e,0),Qt(e,r),Ie(e,ce()),n;if(t===6)Qt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!xd(l)&&(t=Nl(e,r),t===2&&(i=Gl(e),i!==0&&(r=i,t=ho(e,i))),t===1))throw n=vr,on(e,0),Qt(e,r),Ie(e,ce()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:sn(e,De,_t);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=fo+500-ce(),10<t)){if(Tr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=wi(sn.bind(null,e,De,_t),t);break}sn(e,De,_t);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-rt(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yd(r/1960))-r,10<r){e.timeoutHandle=wi(sn.bind(null,e,De,_t),r);break}sn(e,De,_t);break;case 5:sn(e,De,_t);break;default:throw Error(h(329))}}}return Ie(e,ce()),e.callbackNode===n?pa.bind(null,e):null}function ho(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=De,De=n,t!==null&&vo(t)),e}function vo(e){De===null?De=e:De.push.apply(De,e)}function xd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!lt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~co,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function ma(e){if((V&6)!==0)throw Error(h(327));Mn();var t=Tr(e,0);if((t&1)===0)return Ie(e,ce()),null;var n=Nl(e,t);if(e.tag!==0&&n===2){var r=Gl(e);r!==0&&(t=r,n=ho(e,r))}if(n===1)throw n=vr,on(e,0),Qt(e,t),Ie(e,ce()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,De,_t),Ie(e,ce()),null}function go(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Ln=ce()+500,qr&&At())}}function ln(e){Ht!==null&&Ht.tag===0&&(V&6)===0&&Mn();var t=V;V|=1;var n=Je.transition,r=Y;try{if(Je.transition=null,Y=1,e)return e()}finally{Y=r,Je.transition=n,V=t,(V&6)===0&&At()}}function yo(){He=Rn.current,ee(Rn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xc(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Ei(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yr();break;case 3:Pn(),ee(Re),ee(Ne),Ui();break;case 5:Oi(r);break;case 4:Pn();break;case 13:ee(ie);break;case 19:ee(ie);break;case 10:Ri(r.type._context);break;case 22:case 23:yo()}n=n.return}if(ge=e,pe=e=Kt(e.current,null),ke=He=t,he=0,vr=null,co=gl=rn=0,De=gr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}en=null}return e}function ha(e,t){do{var n=pe;try{if(Ti(),ol.current=cl,sl){for(var r=oe.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}sl=!1}if(nn=0,ve=me=oe=null,cr=!1,dr=0,ao.current=null,n===null||n.return===null){he=1,vr=t,pe=null;break}e:{var i=e,o=n.return,u=n,a=t;if(t=ke,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var m=a,y=u,x=y.tag;if((y.mode&1)===0&&(x===0||x===11||x===15)){var v=y.alternate;v?(y.updateQueue=v.updateQueue,y.memoizedState=v.memoizedState,y.lanes=v.lanes):(y.updateQueue=null,y.memoizedState=null)}var S=Bu(o);if(S!==null){S.flags&=-257,$u(S,o,u,i,t),S.mode&1&&Uu(i,m,t),t=S,a=m;var C=t.updateQueue;if(C===null){var E=new Set;E.add(a),t.updateQueue=E}else C.add(a);break e}else{if((t&1)===0){Uu(i,m,t),xo();break e}a=Error(h(426))}}else if(le&&u.mode&1){var de=Bu(o);if(de!==null){(de.flags&65536)===0&&(de.flags|=256),$u(de,o,u,i,t),Pi(Fn(a,u));break e}}i=a=Fn(a,u),he!==4&&(he=2),gr===null?gr=[i]:gr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ou(i,a,t);cu(i,f);break e;case 1:u=a;var c=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Vt===null||!Vt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Au(i,u,t);cu(i,w);break e}}i=i.return}while(i!==null)}ya(n)}catch(_){t=_,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function va(){var e=vl.current;return vl.current=cl,e===null?cl:e}function xo(){(he===0||he===3||he===2)&&(he=4),ge===null||(rn&268435455)===0&&(gl&268435455)===0||Qt(ge,ke)}function Nl(e,t){var n=V;V|=2;var r=va();(ge!==e||ke!==t)&&(_t=null,on(e,t));do try{wd();break}catch(l){ha(e,l)}while(!0);if(Ti(),V=n,vl.current=r,pe!==null)throw Error(h(261));return ge=null,ke=0,he}function wd(){for(;pe!==null;)ga(pe)}function kd(){for(;pe!==null&&!Ka();)ga(pe)}function ga(e){var t=ka(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?ya(e):pe=t,ao.current=null}function ya(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=pd(n,t,He),n!==null){pe=n;return}}else{if(n=md(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,pe=null;return}}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);he===0&&(he=5)}function sn(e,t,n){var r=Y,l=Je.transition;try{Je.transition=null,Y=1,Sd(e,t,n,r)}finally{Je.transition=l,Y=r}return null}function Sd(e,t,n,r){do Mn();while(Ht!==null);if((V&6)!==0)throw Error(h(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(nc(e,i),e===ge&&(pe=ge=null,ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||xl||(xl=!0,Sa(_r,function(){return Mn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Je.transition,Je.transition=null;var o=Y;Y=1;var u=V;V|=4,ao.current=null,vd(e,n),ua(n,e),Vc(yi),Mr=!!gi,yi=gi=null,e.current=n,gd(n),Ga(),V=u,Y=o,Je.transition=i}else e.current=n;if(xl&&(xl=!1,Ht=e,wl=l),i=e.pendingLanes,i===0&&(Vt=null),qa(n.stateNode),Ie(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(yl)throw yl=!1,e=po,po=null,e;return(wl&1)!==0&&e.tag!==0&&Mn(),i=e.pendingLanes,(i&1)!==0?e===mo?yr++:(yr=0,mo=e):yr=0,At(),null}function Mn(){if(Ht!==null){var e=os(wl),t=Je.transition,n=Y;try{if(Je.transition=null,Y=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,wl=0,(V&6)!==0)throw Error(h(331));var l=V;for(V|=4,N=e.current;N!==null;){var i=N,o=i.child;if((N.flags&16)!==0){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var m=u[a];for(N=m;N!==null;){var y=N;switch(y.tag){case 0:case 11:case 15:hr(8,y,i)}var x=y.child;if(x!==null)x.return=y,N=x;else for(;N!==null;){y=N;var v=y.sibling,S=y.return;if(ra(y),y===m){N=null;break}if(v!==null){v.return=S,N=v;break}N=S}}}var C=i.alternate;if(C!==null){var E=C.child;if(E!==null){C.child=null;do{var de=E.sibling;E.sibling=null,E=de}while(E!==null)}}N=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,N=o;else e:for(;N!==null;){if(i=N,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:hr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,N=f;break e}N=i.return}}var c=e.current;for(N=c;N!==null;){o=N;var p=o.child;if((o.subtreeFlags&2064)!==0&&p!==null)p.return=o,N=p;else e:for(o=c;N!==null;){if(u=N,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:hl(9,u)}}catch(_){ae(u,u.return,_)}if(u===o){N=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,N=w;break e}N=u.return}}if(V=l,At(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(zr,e)}catch{}r=!0}return r}finally{Y=n,Je.transition=t}}return!1}function xa(e,t,n){t=Fn(n,t),t=Ou(e,t,1),e=Bt(e,t,1),t=Pe(),e!==null&&(Vn(e,1,t),Ie(e,t))}function ae(e,t,n){if(e.tag===3)xa(e,e,n);else for(;t!==null;){if(t.tag===3){xa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=Fn(n,e),e=Au(t,e,1),t=Bt(t,e,1),e=Pe(),t!==null&&(Vn(t,1,e),Ie(t,e));break}}t=t.return}}function Nd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ke&n)===n&&(he===4||he===3&&(ke&130023424)===ke&&500>ce()-fo?on(e,0):co|=n),Ie(e,t)}function wa(e,t){t===0&&((e.mode&1)===0?t=1:(t=Fr,Fr<<=1,(Fr&130023424)===0&&(Fr=4194304)));var n=Pe();e=jt(e,t),e!==null&&(Vn(e,t,n),Ie(e,n))}function jd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wa(e,n)}function Cd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),wa(e,n)}var ka;ka=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Me=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Me=!1,fd(e,t,n);Me=(e.flags&131072)!==0}else Me=!1,le&&(t.flags&1048576)!==0&&eu(t,Jr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;pl(e,t),e=t.pendingProps;var l=Sn(t,Ne.current);zn(t,n),l=Vi(null,t,r,e,l,n);var i=Hi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(i=!0,Xr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Di(t),l.updater=dl,t.stateNode=l,l._reactInternals=t,Xi(t,r,e,n),t=bi(null,t,r,!0,i,n)):(t.tag=0,le&&i&&Ci(t),ze(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(pl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=_d(r),e=ot(r,e),l){case 0:t=Ji(null,t,r,e,n);break e;case 1:t=Gu(null,t,r,e,n);break e;case 11:t=Vu(null,t,r,e,n);break e;case 14:t=Hu(null,t,r,ot(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ji(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Gu(e,t,r,l,n);case 3:e:{if(Yu(t),e===null)throw Error(h(387));r=t.pendingProps,i=t.memoizedState,l=i.element,au(e,t),ll(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Fn(Error(h(423)),t),t=Xu(e,t,r,n,l);break e}else if(r!==l){l=Fn(Error(h(424)),t),t=Xu(e,t,r,n,l);break e}else for(Ve=Dt(t.stateNode.containerInfo.firstChild),$e=t,le=!0,it=null,n=su(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),r===l){t=Et(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return fu(t),e===null&&zi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,xi(r,l)?o=null:i!==null&&xi(r,i)&&(t.flags|=32),Ku(e,t),ze(e,t,o,n),t.child;case 6:return e===null&&zi(t),null;case 13:return qu(e,t,n);case 4:return Ii(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Vu(e,t,r,l,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,J(tl,r._currentValue),r._currentValue=o,i!==null)if(lt(i.value,o)){if(i.children===l.children&&!Re.current){t=Et(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ct(-1,n&-n),a.tag=2;var m=i.updateQueue;if(m!==null){m=m.shared;var y=m.pending;y===null?a.next=a:(a.next=y.next,y.next=a),m.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Li(i.return,n,t),u.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Li(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ze(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,zn(t,n),l=qe(l),r=r(l),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,l=ot(r,t.pendingProps),l=ot(r.type,l),Hu(e,t,r,l,n);case 15:return Wu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),pl(e,t),t.tag=1,Le(r)?(e=!0,Xr(t)):e=!1,zn(t,n),Du(t,r,l),Xi(t,r,l,n),bi(null,t,r,!0,e,n);case 19:return Ju(e,t,n);case 22:return Qu(e,t,n)}throw Error(h(156,t.tag))};function Sa(e,t){return ts(e,t)}function Ed(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new Ed(e,t,n,r)}function wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _d(e){if(typeof e=="function")return wo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dt)return 11;if(e===ft)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")wo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Fe:return un(n.children,l,i,t);case Ge:o=8,l|=8;break;case zt:return e=be(12,n,t,l|2),e.elementType=zt,e.lanes=i,e;case Ae:return e=be(13,n,t,l),e.elementType=Ae,e.lanes=i,e;case nt:return e=be(19,n,t,l),e.elementType=nt,e.lanes=i,e;case ue:return Cl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xt:o=10;break e;case Yt:o=9;break e;case dt:o=11;break e;case ft:o=14;break e;case Te:o=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=be(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function un(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=be(22,e,r,t),e.elementType=ue,e.lanes=n,e.stateNode={isHidden:!1},e}function ko(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function So(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function No(e,t,n,r,l,i,o,u,a){return e=new zd(e,t,n,u,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Di(i),e}function Pd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Na(e){if(!e)return Ot;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Le(n))return Zs(e,n,t)}return t}function ja(e,t,n,r,l,i,o,u,a){return e=No(n,r,!0,e,l,i,o,u,a),e.context=Na(null),n=e.current,r=Pe(),l=Wt(n),i=Ct(r,l),i.callback=t??null,Bt(n,i,l),e.current.lanes=l,Vn(e,l,r),Ie(e,r),e}function El(e,t,n,r){var l=t.current,i=Pe(),o=Wt(l);return n=Na(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(l,t,o),e!==null&&(at(e,l,o,i),rl(e,l,o)),o}function _l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ca(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jo(e,t){Ca(e,t),(e=e.alternate)&&Ca(e,t)}function Fd(){return null}var Ea=typeof reportError=="function"?reportError:function(e){console.error(e)};function Co(e){this._internalRoot=e}zl.prototype.render=Co.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));El(e,t,null,null)},zl.prototype.unmount=Co.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){El(null,e,null,null)}),t[wt]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=as();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&fs(e)}};function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _a(){}function Td(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var m=_l(o);i.call(m)}}var o=ja(t,r,e,0,null,!1,!1,"",_a);return e._reactRootContainer=o,e[wt]=o.current,nr(e.nodeType===8?e.parentNode:e),ln(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var m=_l(a);u.call(m)}}var a=No(e,0,!1,null,null,!1,!1,"",_a);return e._reactRootContainer=a,e[wt]=a.current,nr(e.nodeType===8?e.parentNode:e),ln(function(){El(t,a,n,r)}),a}function Fl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var a=_l(o);u.call(a)}}El(t,o,e,l)}else o=Td(n,t,e,l,r);return _l(o)}ss=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$n(t.pendingLanes);n!==0&&(Xl(t,n|1),Ie(t,ce()),(V&6)===0&&(Ln=ce()+500,At()))}break;case 13:ln(function(){var r=jt(e,1);if(r!==null){var l=Pe();at(r,e,1,l)}}),jo(e,1)}},ql=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Pe();at(t,e,134217728,n)}jo(e,134217728)}},us=function(e){if(e.tag===13){var t=Wt(e),n=jt(e,t);if(n!==null){var r=Pe();at(n,e,t,r)}jo(e,t)}},as=function(){return Y},cs=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}},Vl=function(e,t,n){switch(t){case"input":if(Ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Gr(r);if(!l)throw Error(h(90));Mo(r),Ml(r,l)}}}break;case"textarea":Uo(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}},Yo=go,Xo=ln;var Rd={usingClientEntryPoint:!1,Events:[ir,wn,Gr,Ko,Go,go]},xr={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ld={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bo(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||Fd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{zr=Tl.inject(Ld),pt=Tl}catch{}}return Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rd,Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eo(t))throw Error(h(200));return Pd(e,t,null,n)},Oe.createRoot=function(e,t){if(!Eo(e))throw Error(h(299));var n=!1,r="",l=Ea;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=No(e,1,!1,null,null,n,!1,r,l),e[wt]=t.current,nr(e.nodeType===8?e.parentNode:e),new Co(t)},Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=bo(t),e=e===null?null:e.stateNode,e},Oe.flushSync=function(e){return ln(e)},Oe.hydrate=function(e,t,n){if(!Pl(t))throw Error(h(200));return Fl(null,e,t,!0,n)},Oe.hydrateRoot=function(e,t,n){if(!Eo(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Ea;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ja(t,null,e,1,n??null,l,!1,i,o),e[wt]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new zl(t)},Oe.render=function(e,t,n){if(!Pl(t))throw Error(h(200));return Fl(null,e,t,!1,n)},Oe.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(h(40));return e._reactRootContainer?(ln(function(){Fl(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1},Oe.unstable_batchedUpdates=go,Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pl(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Fl(e,t,n,!1,r)},Oe.version="18.3.1-next-f1338f8080-20240426",Oe}var Da;function Vd(){if(Da)return Po.exports;Da=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(M){console.error(M)}}return z(),Po.exports=$d(),Po.exports}var Ia;function Hd(){if(Ia)return Rl;Ia=1;var z=Vd();return Rl.createRoot=z.createRoot,Rl.hydrateRoot=z.hydrateRoot,Rl}var Wd=Hd();const Qd=Oa(Wd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Aa=(...z)=>z.filter((M,h,K)=>!!M&&M.trim()!==""&&K.indexOf(M)===h).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=We.forwardRef(({color:z="currentColor",size:M=24,strokeWidth:h=2,absoluteStrokeWidth:K,className:D="",children:U,iconNode:q,...se},$)=>We.createElement("svg",{ref:$,...Gd,width:M,height:M,stroke:z,strokeWidth:K?Number(h)*24/Number(M):h,className:Aa("lucide",D),...se},[...q.map(([te,fe])=>We.createElement(te,fe)),...Array.isArray(U)?U:[U]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=(z,M)=>{const h=We.forwardRef(({className:K,...D},U)=>We.createElement(Yd,{ref:U,iconNode:M,className:Aa(`lucide-${Kd(z)}`,K),...D}));return h.displayName=`${z}`,h};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],an=xe("ArrowRight",Xd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],kr=xe("ArrowUpRight",qd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Jd=xe("Award",Zd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ef=xe("ChevronLeft",bd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],nf=xe("ChevronRight",tf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],lf=xe("Download",rf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],sf=xe("Facebook",of);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Ro=xe("GraduationCap",uf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],cf=xe("Instagram",af);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],ff=xe("Linkedin",df);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],mf=xe("Mail",pf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],vf=xe("Menu",hf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],yf=xe("Microscope",gf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],wf=xe("Phone",xf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],Sf=xe("Trees",kf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],jf=xe("Twitter",Nf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ef=xe("X",Cf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],zf=xe("Youtube",_f);function Pf(){const[z,M]=We.useState(!1),[h,K]=We.useState(!1),[D,U]=We.useState(0),[q,se]=We.useState(!1),$=We.useRef(null);We.useEffect(()=>{const L=()=>{M(window.scrollY>24)};return window.addEventListener("scroll",L,{passive:!0}),()=>window.removeEventListener("scroll",L)},[]),We.useEffect(()=>{const L=new IntersectionObserver(([B])=>{B.isIntersecting&&se(!0)},{threshold:.2});return $.current&&L.observe($.current),()=>L.disconnect()},[]);const te=[{quote:"The proximity to the Arabian Sea and the university's dedicated marine research stations provided field exposure that few institutions in the country can match.",name:"Pooja Hegde",role:"M.Sc. Marine Geology (Batch of 2023)",field:"Oceanographic Research"},{quote:"Mangalagangothri gave me both the critical perspective and the practical studio training necessary to transition directly into investigative broadcast media.",name:"Karthik Rao",role:"M.A. Journalism & Mass Communication (Batch of 2022)",field:"Media & Communications"},{quote:"The interdisciplinary encouragement and mentorship from senior faculty shaped my research methodology and opened doors to prestigious national doctoral fellowships.",name:"Ananya Shenoy",role:"Ph.D Scholar in Economics",field:"Development Economics"}],fe=[{date:"SEP 15, 2026",category:"Admissions",title:"Ph.D Entrance Examination 2026 Notification & Guidelines",desc:"Detailed schedule, eligibility criteria, syllabus, and examination center guidelines for doctoral admissions."},{date:"SEP 08, 2026",category:"Examinations",title:"Postgraduate Common Entrance Test (PGCET) Calendar",desc:"Revised schedule for centralized counseling, seat allocation, and mandatory document verification."},{date:"AUG 28, 2026",category:"Results",title:"Revaluation & Result Scrutiny Applications — Even Semester",desc:"Last date for submission of revaluation forms extended for undergraduate and postgraduate courses."},{date:"AUG 14, 2026",category:"General",title:"Official Release of University Prospectus & Academic Calendar 2026–2027",desc:"Comprehensive handbook detailing CBCS curriculum, academic terms, institutional calendar, and student regulations."}];return s.jsxs("div",{className:"mu-page",children:[s.jsx("div",{className:"mu-utility-bar",children:s.jsxs("div",{className:"mu-container mu-utility-content",children:[s.jsxs("div",{className:"mu-utility-links",children:[s.jsx("a",{href:"#admissions",className:"mu-utility-link",children:"Apply Online"}),s.jsx("span",{className:"mu-utility-divider",children:"|"}),s.jsx("a",{href:"#portal",className:"mu-utility-link",children:"Student Portal (UUCMS)"}),s.jsx("span",{className:"mu-utility-divider",children:"|"}),s.jsx("a",{href:"#alumni",className:"mu-utility-link",children:"Alumni Network"}),s.jsx("span",{className:"mu-utility-divider",children:"|"}),s.jsx("a",{href:"#mail",className:"mu-utility-link",children:"Webmail Server"})]}),s.jsxs("div",{className:"mu-utility-socials",children:[s.jsx("a",{href:"https://facebook.com","aria-label":"Facebook",className:"mu-social-icon",children:s.jsx(sf,{size:14})}),s.jsx("a",{href:"https://twitter.com","aria-label":"X Twitter",className:"mu-social-icon",children:s.jsx(jf,{size:14})}),s.jsx("a",{href:"https://linkedin.com","aria-label":"LinkedIn",className:"mu-social-icon",children:s.jsx(ff,{size:14})}),s.jsx("a",{href:"https://youtube.com","aria-label":"YouTube",className:"mu-social-icon",children:s.jsx(zf,{size:14})}),s.jsx("a",{href:"https://instagram.com","aria-label":"Instagram",className:"mu-social-icon",children:s.jsx(cf,{size:14})})]})]})}),s.jsxs("header",{className:`mu-header ${z?"mu-header-scrolled":""}`,children:[s.jsxs("div",{className:"mu-container mu-header-content",children:[s.jsxs("a",{href:"#",className:"mu-brand",children:[s.jsx("div",{className:"mu-brand-crest",children:s.jsx(Ro,{size:24,className:"mu-crest-icon"})}),s.jsxs("div",{className:"mu-brand-text",children:[s.jsx("span",{className:"mu-brand-title",children:"Mangalore University"}),s.jsx("span",{className:"mu-brand-sub",children:"Mangalagangothri, Karnataka"})]})]}),s.jsxs("nav",{className:"mu-nav-desktop","aria-label":"Main Navigation",children:[s.jsx("a",{href:"#about",className:"mu-nav-link",children:"About"}),s.jsx("a",{href:"#academics",className:"mu-nav-link",children:"Academics"}),s.jsx("a",{href:"#research",className:"mu-nav-link",children:"Research"}),s.jsx("a",{href:"#campus",className:"mu-nav-link",children:"Campus"}),s.jsx("a",{href:"#careers",className:"mu-nav-link",children:"Careers"}),s.jsx("a",{href:"#news",className:"mu-nav-link",children:"Notices"}),s.jsx("a",{href:"#admissions",className:"mu-btn mu-btn-nav",children:"Apply Now"})]}),s.jsx("button",{className:"mu-mobile-toggle",onClick:()=>K(!h),"aria-label":"Toggle Navigation Menu","aria-expanded":h,children:h?s.jsx(Ef,{size:24}):s.jsx(vf,{size:24})})]}),h&&s.jsx("div",{className:"mu-mobile-drawer",children:s.jsxs("div",{className:"mu-container mu-mobile-drawer-content",children:[s.jsx("a",{href:"#about",className:"mu-mobile-link",onClick:()=>K(!1),children:"About the University"}),s.jsx("a",{href:"#academics",className:"mu-mobile-link",onClick:()=>K(!1),children:"Faculties & Programmes"}),s.jsx("a",{href:"#research",className:"mu-mobile-link",onClick:()=>K(!1),children:"Research & Innovation"}),s.jsx("a",{href:"#campus",className:"mu-mobile-link",onClick:()=>K(!1),children:"Campus Sanctuary"}),s.jsx("a",{href:"#careers",className:"mu-mobile-link",onClick:()=>K(!1),children:"Careers & Guidance"}),s.jsx("a",{href:"#news",className:"mu-mobile-link",onClick:()=>K(!1),children:"Latest Announcements"}),s.jsx("div",{className:"mu-mobile-drawer-actions",children:s.jsxs("a",{href:"#admissions",className:"mu-btn mu-btn-gold",style:{width:"100%"},onClick:()=>K(!1),children:["Apply for Admission ",s.jsx(an,{size:16})]})})]})})]}),s.jsx("section",{className:"mu-hero-section",children:s.jsxs("div",{className:"mu-container mu-hero-grid",children:[s.jsxs("div",{className:"mu-hero-content",children:[s.jsxs("div",{className:"mu-fade-in-1",children:[s.jsx("span",{className:"mu-eyebrow",children:"ESTD. 1980 • MANGALAGANGOTHRI"}),s.jsx("h1",{className:"mu-hero-headline",children:"Four decades of learning where the river meets the sea."})]}),s.jsx("p",{className:"mu-hero-subtext mu-fade-in-2",children:"Spanning 353 acres at the confluence of the Nethravathi river and Arabian Sea, Mangalore University is home to 26 postgraduate departments and over 200 affiliated colleges across coastal Karnataka."}),s.jsxs("div",{className:"mu-hero-actions mu-fade-in-3",children:[s.jsxs("a",{href:"#admissions",className:"mu-btn mu-btn-gold",children:["Apply for admission ",s.jsx(an,{size:16})]}),s.jsx("a",{href:"#academics",className:"mu-btn mu-btn-outline",children:"View programmes"})]})]}),s.jsxs("div",{className:"mu-hero-media-wrapper mu-fade-in-3",children:[s.jsx("div",{className:"mu-hero-frame-border"}),s.jsxs("div",{className:"mu-hero-image-card",children:[s.jsx("img",{src:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",alt:"Mangalore University Campus Architecture",className:"mu-hero-img"}),s.jsxs("div",{className:"mu-hero-badge",children:[s.jsx(Jd,{size:18,className:"mu-badge-icon"}),s.jsxs("div",{children:[s.jsx("strong",{children:"A++ NAAC Accredited"}),s.jsx("span",{children:"353-Acre Green Campus"})]})]})]})]})]})}),s.jsx("section",{id:"about",className:"mu-section mu-bg-paper",children:s.jsxs("div",{className:"mu-container mu-about-grid",children:[s.jsx("div",{className:"mu-about-media",children:s.jsxs("div",{className:"mu-about-image-wrapper",children:[s.jsx("img",{src:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",alt:"University Library and Heritage",className:"mu-about-img"}),s.jsxs("div",{className:"mu-about-milestone",children:[s.jsx("span",{className:"mu-milestone-year",children:"1980"}),s.jsx("span",{className:"mu-milestone-text",children:"Autonomous University Established"})]})]})}),s.jsxs("div",{className:"mu-about-text",children:[s.jsx("span",{className:"mu-eyebrow",children:"ABOUT THE UNIVERSITY"}),s.jsx("h2",{className:"mu-heading",children:"From a postgraduate centre to a premier coastal institution"}),s.jsx("p",{className:"mu-about-p",children:"Mangalore University grew out of a modest postgraduate centre of the University of Mysore at Konaje, which originally commenced with just three departments. In 1980, it was formally chartered as an independent, self-governing university."}),s.jsx("p",{className:"mu-about-p",children:"Today, the university encompasses 26 postgraduate teaching and research departments on its main campus, offering advanced interdisciplinary degrees, cutting-edge laboratory infrastructure, and comprehensive academic jurisdiction across Dakshina Kannada, Udupi, and Kodagu districts."}),s.jsx("blockquote",{className:"mu-pullquote",children:'"Fostering academic excellence, innovative research, and ethical leadership in a dynamic global environment."'}),s.jsxs("a",{href:"#history",className:"mu-link-arrow",children:["Read our full history ",s.jsx(an,{size:15})]})]})]})}),s.jsx("section",{ref:$,className:"mu-section-tight mu-bg-mist mu-stats-section",children:s.jsx("div",{className:"mu-container",children:s.jsxs("div",{className:"mu-stats-grid",children:[s.jsxs("div",{className:"mu-stat-card",children:[s.jsx("div",{className:"mu-stat-number",children:q?"45+":"0+"}),s.jsx("div",{className:"mu-stat-label",children:"Years of Academic Excellence"})]}),s.jsxs("div",{className:"mu-stat-card",children:[s.jsx("div",{className:"mu-stat-number",children:q?"26":"0"}),s.jsx("div",{className:"mu-stat-label",children:"Postgraduate Departments"})]}),s.jsxs("div",{className:"mu-stat-card",children:[s.jsx("div",{className:"mu-stat-number",children:q?"204":"0"}),s.jsx("div",{className:"mu-stat-label",children:"Affiliated Colleges"})]}),s.jsxs("div",{className:"mu-stat-card",children:[s.jsx("div",{className:"mu-stat-number",children:q?"353":"0"}),s.jsx("div",{className:"mu-stat-label",children:"Acres of Verdant Campus"})]}),s.jsxs("div",{className:"mu-stat-card mu-stat-card-last",children:[s.jsx("div",{className:"mu-stat-number",children:q?"5":"0"}),s.jsx("div",{className:"mu-stat-label",children:"Autonomous Colleges"})]})]})})}),s.jsx("section",{className:"mu-section mu-bg-paper",children:s.jsxs("div",{className:"mu-container",children:[s.jsxs("div",{className:"mu-section-header-center",children:[s.jsx("span",{className:"mu-eyebrow",children:"INSTITUTIONAL DISTINCTION"}),s.jsx("h2",{className:"mu-heading",children:"Why Choose Mangalore University"}),s.jsx("p",{className:"mu-body-lead",style:{margin:"0 auto"},children:"A confluence of traditional scholarly rigor, modern frontier research, and an inspiring coastal living environment."})]}),s.jsxs("div",{className:"mu-pillars-grid",children:[s.jsxs("div",{className:"mu-pillar-card",children:[s.jsx("div",{className:"mu-pillar-icon-badge",children:s.jsx(Ro,{size:24})}),s.jsx("h3",{className:"mu-pillar-title",children:"Academic Depth & Flexibility"}),s.jsx("p",{className:"mu-pillar-desc",children:"Comprehensive Choice Based Credit System (CBCS) curriculum across 26 disciplines, allowing scholars to design interdisciplinary academic pathways tailored to evolving industry demands."})]}),s.jsxs("div",{className:"mu-pillar-card",children:[s.jsx("div",{className:"mu-pillar-icon-badge",children:s.jsx(yf,{size:24})}),s.jsx("h3",{className:"mu-pillar-title",children:"Coastal & Frontier Research"}),s.jsx("p",{className:"mu-pillar-desc",children:"Pioneering specialized national research laboratories including the Microtron radiation facility, Marine Geology marine stations, and Coastal Biosciences centers of excellence."})]}),s.jsxs("div",{className:"mu-pillar-card",children:[s.jsx("div",{className:"mu-pillar-icon-badge",children:s.jsx(Sf,{size:24})}),s.jsx("h3",{className:"mu-pillar-title",children:"A Campus Built for Belonging"}),s.jsx("p",{className:"mu-pillar-desc",children:"A scenic 353-acre sanctuary on the hilltops of Konaje, featuring a state-of-the-art central library, sports complex, research hostels, and vibrant cultural student societies."})]})]})]})}),s.jsx("section",{id:"academics",className:"mu-section mu-bg-mist",children:s.jsxs("div",{className:"mu-container",children:[s.jsxs("div",{className:"mu-section-header",children:[s.jsxs("div",{children:[s.jsx("span",{className:"mu-eyebrow",children:"ACADEMIC ARCHITECTURE"}),s.jsx("h2",{className:"mu-heading",children:"Faculties & Postgraduate Programmes"})]}),s.jsx("p",{className:"mu-body-lead",children:"Structured into four core faculties offering Master's, Doctoral, and Postgraduate Diploma qualifications."})]}),s.jsxs("div",{className:"mu-faculties-grid",children:[s.jsxs("div",{className:"mu-faculty-card",children:[s.jsxs("div",{className:"mu-faculty-header",children:[s.jsx("span",{className:"mu-faculty-count",children:"8 Departments"}),s.jsx("h3",{className:"mu-faculty-title",children:"Faculty of Arts"})]}),s.jsxs("ul",{className:"mu-dept-list",children:[s.jsx("li",{children:"English Language & Literature"}),s.jsx("li",{children:"Kannada & Regional Studies"}),s.jsx("li",{children:"History & Archaeology"}),s.jsx("li",{children:"Economics & Development"}),s.jsx("li",{children:"Mass Communication & Journalism"}),s.jsx("li",{children:"Sociology & Social Work"})]}),s.jsxs("a",{href:"#faculty-arts",className:"mu-faculty-link",children:["Explore Faculty of Arts ",s.jsx(kr,{size:16})]})]}),s.jsxs("div",{className:"mu-faculty-card",children:[s.jsxs("div",{className:"mu-faculty-header",children:[s.jsx("span",{className:"mu-faculty-count",children:"17 Departments"}),s.jsx("h3",{className:"mu-faculty-title",children:"Science & Technology"})]}),s.jsxs("ul",{className:"mu-dept-list",children:[s.jsx("li",{children:"Physics & Materials Science"}),s.jsx("li",{children:"Chemistry & Applied Chemistry"}),s.jsx("li",{children:"Marine Geology & Oceanography"}),s.jsx("li",{children:"Biosciences & Biotechnology"}),s.jsx("li",{children:"Computer Science & Applications"}),s.jsx("li",{children:"Mathematics & Statistics"})]}),s.jsxs("a",{href:"#faculty-science",className:"mu-faculty-link",children:["Explore Faculty of Science ",s.jsx(kr,{size:16})]})]}),s.jsxs("div",{className:"mu-faculty-card",children:[s.jsxs("div",{className:"mu-faculty-header",children:[s.jsx("span",{className:"mu-faculty-count",children:"2 Departments"}),s.jsx("h3",{className:"mu-faculty-title",children:"Faculty of Commerce"})]}),s.jsxs("ul",{className:"mu-dept-list",children:[s.jsx("li",{children:"Master of Commerce (M.Com)"}),s.jsx("li",{children:"Master of Business Admin (MBA)"}),s.jsx("li",{children:"Financial Management & Banking"}),s.jsx("li",{children:"International Business Studies"}),s.jsx("li",{children:"Corporate Governance Cell"}),s.jsx("li",{children:"Doctoral Research in Commerce"})]}),s.jsxs("a",{href:"#faculty-commerce",className:"mu-faculty-link",children:["Explore Faculty of Commerce ",s.jsx(kr,{size:16})]})]}),s.jsxs("div",{className:"mu-faculty-card",children:[s.jsxs("div",{className:"mu-faculty-header",children:[s.jsx("span",{className:"mu-faculty-count",children:"2 Departments"}),s.jsx("h3",{className:"mu-faculty-title",children:"Faculty of Education"})]}),s.jsxs("ul",{className:"mu-dept-list",children:[s.jsx("li",{children:"Master of Education (M.Ed)"}),s.jsx("li",{children:"Physical Education (M.P.Ed)"}),s.jsx("li",{children:"Sports Science & Biomechanics"}),s.jsx("li",{children:"Educational Technology & Policy"}),s.jsx("li",{children:"Teacher Training Research"}),s.jsx("li",{children:"Athletic Performance Lab"})]}),s.jsxs("a",{href:"#faculty-education",className:"mu-faculty-link",children:["Explore Faculty of Education ",s.jsx(kr,{size:16})]})]})]})]})}),s.jsxs("section",{id:"campus",className:"mu-campus-break",children:[s.jsx("div",{className:"mu-campus-overlay"}),s.jsx("div",{className:"mu-container mu-campus-content",children:s.jsxs("div",{className:"mu-campus-text-card",children:[s.jsx("span",{className:"mu-eyebrow mu-eyebrow-gold",children:"MANGALAGANGOTHRI • COASTAL SANCTUARY"}),s.jsx("h2",{className:"mu-campus-heading",children:"Where the Western Ghats meet the Arabian Sea"}),s.jsx("p",{className:"mu-campus-desc",children:"Perched atop a scenic hillock overlooking the Nethravathi river basin, our 353-acre verdant campus provides an inspiring sanctuary for scholarly inquiry, artistic expression, and athletic achievement."}),s.jsxs("a",{href:"#campus-tour",className:"mu-btn mu-btn-outline-white",children:["Discover Campus Facilities ",s.jsx(an,{size:16})]})]})})]}),s.jsx("section",{id:"careers",className:"mu-section mu-bg-paper",children:s.jsxs("div",{className:"mu-container mu-careers-grid",children:[s.jsxs("div",{className:"mu-careers-intro",children:[s.jsx("span",{className:"mu-eyebrow",children:"CAREER & STUDENT SUPPORT"}),s.jsx("h2",{className:"mu-heading",children:"University Employment Information & Guidance Bureau"}),s.jsx("p",{className:"mu-careers-p",children:"The Bureau functions as a vital bridge between academic attainment and career fulfillment, organizing on-campus recruitments, soft skills training, civil service guidance, and overseas scholarship counseling."}),s.jsxs("a",{href:"#placement",className:"mu-link-arrow",children:["Connect with Placement Cell ",s.jsx(an,{size:15})]})]}),s.jsxs("div",{className:"mu-careers-services",children:[s.jsxs("div",{className:"mu-service-item",children:[s.jsx("div",{className:"mu-service-dot"}),s.jsxs("div",{children:[s.jsx("h4",{className:"mu-service-title",children:"Campus Placement & Corporate Recruitment"}),s.jsx("p",{className:"mu-service-desc",children:"Facilitating top-tier recruitment drives in collaboration with multinational corporations and research organizations."})]})]}),s.jsxs("div",{className:"mu-service-item",children:[s.jsx("div",{className:"mu-service-dot"}),s.jsxs("div",{children:[s.jsx("h4",{className:"mu-service-title",children:"UPSC, KPSC, NET & SLET Coaching"}),s.jsx("p",{className:"mu-service-desc",children:"Comprehensive specialized mentorship and coaching for national and state civil services and lectureship eligibility exams."})]})]}),s.jsxs("div",{className:"mu-service-item",children:[s.jsx("div",{className:"mu-service-dot"}),s.jsxs("div",{children:[s.jsx("h4",{className:"mu-service-title",children:"Higher Education & Overseas Fellowships"}),s.jsx("p",{className:"mu-service-desc",children:"Dedicated advisory and application support for prestigious international research grants and doctoral fellowships."})]})]}),s.jsxs("div",{className:"mu-service-item",children:[s.jsx("div",{className:"mu-service-dot"}),s.jsxs("div",{children:[s.jsx("h4",{className:"mu-service-title",children:"Skill Enhancement & Industry Internship Linkages"}),s.jsx("p",{className:"mu-service-desc",children:"Curriculum-aligned corporate internships, technical certification programs, and professional communication workshops."})]})]})]})]})}),s.jsx("section",{id:"news",className:"mu-section mu-bg-mist",children:s.jsxs("div",{className:"mu-container",children:[s.jsxs("div",{className:"mu-news-header",children:[s.jsxs("div",{children:[s.jsx("span",{className:"mu-eyebrow",children:"NOTICES & CIRCULARS"}),s.jsx("h2",{className:"mu-heading",children:"Latest University Announcements"})]}),s.jsxs("a",{href:"#all-news",className:"mu-link-arrow",children:["View all notifications ",s.jsx(an,{size:15})]})]}),s.jsx("div",{className:"mu-news-list",children:fe.map((L,B)=>s.jsxs("a",{href:`#notice-${B}`,className:"mu-news-row",children:[s.jsxs("div",{className:"mu-news-date-col",children:[s.jsx("span",{className:"mu-news-date",children:L.date}),s.jsx("span",{className:"mu-news-category",children:L.category})]}),s.jsxs("div",{className:"mu-news-content-col",children:[s.jsx("h3",{className:"mu-news-title",children:L.title}),s.jsx("p",{className:"mu-news-desc",children:L.desc})]}),s.jsx("div",{className:"mu-news-action-col",children:s.jsx(kr,{size:20,className:"mu-news-arrow"})})]},B))})]})}),s.jsx("section",{className:"mu-section mu-bg-navy",children:s.jsx("div",{className:"mu-container",children:s.jsxs("div",{className:"mu-testimonial-wrapper",children:[s.jsx("div",{className:"mu-quote-glyph",children:"“"}),s.jsxs("div",{className:"mu-testimonial-card",children:[s.jsx("p",{className:"mu-testimonial-text",children:te[D].quote}),s.jsxs("div",{className:"mu-testimonial-author",children:[s.jsx("span",{className:"mu-author-name",children:te[D].name}),s.jsx("span",{className:"mu-author-role",children:te[D].role})]})]}),s.jsxs("div",{className:"mu-carousel-controls",children:[s.jsx("button",{className:"mu-carousel-btn",onClick:()=>U(L=>L===0?te.length-1:L-1),"aria-label":"Previous Testimonial",children:s.jsx(ef,{size:20})}),s.jsx("div",{className:"mu-carousel-dots",children:te.map((L,B)=>s.jsx("button",{className:`mu-dot ${D===B?"mu-dot-active":""}`,onClick:()=>U(B),"aria-label":`Go to testimonial ${B+1}`},B))}),s.jsx("button",{className:"mu-carousel-btn",onClick:()=>U(L=>L===te.length-1?0:L+1),"aria-label":"Next Testimonial",children:s.jsx(nf,{size:20})})]})]})})}),s.jsx("section",{id:"admissions",className:"mu-cta-banner",children:s.jsxs("div",{className:"mu-container mu-cta-content",children:[s.jsx("span",{className:"mu-eyebrow mu-eyebrow-gold",children:"ADMISSIONS 2026–2027"}),s.jsx("h2",{className:"mu-cta-heading",children:"Begin your journey at Mangalagangothri"}),s.jsx("p",{className:"mu-cta-desc",children:"Applications for postgraduate, diploma, and doctoral programmes are now open through the Karnataka Unified University & College Management System (UUCMS)."}),s.jsxs("div",{className:"mu-cta-actions",children:[s.jsxs("a",{href:"#uucms-apply",className:"mu-btn mu-btn-gold",children:["Apply Now ",s.jsx(an,{size:16})]}),s.jsxs("a",{href:"#download-prospectus",className:"mu-btn mu-btn-outline-white",children:[s.jsx(lf,{size:16})," Download Prospectus (PDF)"]})]})]})}),s.jsx("footer",{className:"mu-footer",children:s.jsxs("div",{className:"mu-container",children:[s.jsxs("div",{className:"mu-footer-grid",children:[s.jsxs("div",{className:"mu-footer-col",children:[s.jsxs("div",{className:"mu-brand mu-footer-brand",children:[s.jsx("div",{className:"mu-brand-crest",children:s.jsx(Ro,{size:24,className:"mu-crest-icon"})}),s.jsxs("div",{className:"mu-brand-text",children:[s.jsx("span",{className:"mu-brand-title",style:{color:"#FFFFFF"},children:"Mangalore University"}),s.jsx("span",{className:"mu-brand-sub",style:{color:"rgba(255,255,255,0.7)"},children:"Mangalagangothri - 574 199"})]})]}),s.jsx("p",{className:"mu-footer-address",children:"Dakshina Kannada District, Karnataka State, India."}),s.jsxs("div",{className:"mu-footer-contact",children:[s.jsxs("p",{children:[s.jsx(wf,{size:14})," +91 824 2287276 / 2287347"]}),s.jsxs("p",{children:[s.jsx(mf,{size:14})," contact@mangaloreuniversity.ac.in"]})]})]}),s.jsxs("div",{className:"mu-footer-col",children:[s.jsx("h4",{className:"mu-footer-col-title",children:"Academics"}),s.jsxs("ul",{className:"mu-footer-links",children:[s.jsx("li",{children:s.jsx("a",{href:"#faculty-arts",children:"Faculty of Arts"})}),s.jsx("li",{children:s.jsx("a",{href:"#faculty-science",children:"Faculty of Science & Tech"})}),s.jsx("li",{children:s.jsx("a",{href:"#faculty-commerce",children:"Faculty of Commerce"})}),s.jsx("li",{children:s.jsx("a",{href:"#faculty-education",children:"Faculty of Education"})}),s.jsx("li",{children:s.jsx("a",{href:"#research-labs",children:"Research Centres & Labs"})}),s.jsx("li",{children:s.jsx("a",{href:"#calendar",children:"Academic Calendar 2026"})})]})]}),s.jsxs("div",{className:"mu-footer-col",children:[s.jsx("h4",{className:"mu-footer-col-title",children:"Examinations & Governance"}),s.jsxs("ul",{className:"mu-footer-links",children:[s.jsx("li",{children:s.jsx("a",{href:"#results",children:"Examination Results Portal"})}),s.jsx("li",{children:s.jsx("a",{href:"#reval",children:"Revaluation Applications"})}),s.jsx("li",{children:s.jsx("a",{href:"#statutes",children:"University Statutes & Acts"})}),s.jsx("li",{children:s.jsx("a",{href:"#rti",children:"Right to Information (RTI)"})}),s.jsx("li",{children:s.jsx("a",{href:"#iqac",children:"Internal Quality Assurance Cell (IQAC)"})}),s.jsx("li",{children:s.jsx("a",{href:"#naac",children:"NAAC Self Study Report"})})]})]}),s.jsxs("div",{className:"mu-footer-col",children:[s.jsx("h4",{className:"mu-footer-col-title",children:"Student Welfare"}),s.jsxs("ul",{className:"mu-footer-links",children:[s.jsx("li",{children:s.jsx("a",{href:"#anti-ragging",children:"Anti-Ragging Squad & Cell"})}),s.jsx("li",{children:s.jsx("a",{href:"#grievance",children:"Women's Grievance Redressal"})}),s.jsx("li",{children:s.jsx("a",{href:"#scst",children:"SC / ST Special Cell"})}),s.jsx("li",{children:s.jsx("a",{href:"#library",children:"Central Library Catalog"})}),s.jsx("li",{children:s.jsx("a",{href:"#nirf",children:"NIRF Disclosures"})}),s.jsx("li",{children:s.jsx("a",{href:"#uucms",children:"Karnataka UUCMS Portal"})})]})]})]}),s.jsxs("div",{className:"mu-footer-bottom",children:[s.jsx("p",{children:"© 2026 Mangalore University, Mangalagangothri. All Rights Reserved."}),s.jsxs("div",{className:"mu-footer-legal",children:[s.jsx("a",{href:"#privacy",children:"Privacy Policy"}),s.jsx("span",{className:"mu-utility-divider",children:"|"}),s.jsx("a",{href:"#terms",children:"Terms of Use"}),s.jsx("span",{className:"mu-utility-divider",children:"|"}),s.jsx("a",{href:"#sitemap",children:"Sitemap"})]})]})]})}),s.jsx("style",{children:`
        /* Header & Utility Bar */
        .mu-utility-bar {
          background-color: var(--teal-deep);
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .mu-utility-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mu-utility-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .mu-utility-link {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          transition: color 0.2s;
        }
        .mu-utility-link:hover {
          color: var(--gold);
        }
        .mu-utility-divider {
          color: rgba(255, 255, 255, 0.2);
        }
        .mu-utility-socials {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .mu-social-icon {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s;
        }
        .mu-social-icon:hover {
          color: var(--gold);
        }

        /* Main Header */
        .mu-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: transparent;
          transition: all 0.3s ease;
          padding: 16px 0;
        }
        .mu-header-scrolled {
          background-color: rgba(11, 42, 74, 0.96);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          padding: 12px 0;
        }
        .mu-header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mu-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .mu-brand-crest {
          width: 42px;
          height: 42px;
          background-color: var(--teal);
          border: 1px solid var(--gold);
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
        }
        .mu-brand-text {
          display: flex;
          flex-direction: column;
        }
        .mu-brand-title {
          font-family: var(--font-serif);
          font-size: 20px;
          font-weight: 600;
          color: var(--teal);
          line-height: 1.1;
          transition: color 0.3s;
        }
        .mu-header-scrolled .mu-brand-title {
          color: #FFFFFF;
        }
        .mu-brand-sub {
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--blue);
          transition: color 0.3s;
        }
        .mu-header-scrolled .mu-brand-sub {
          color: rgba(255, 255, 255, 0.7);
        }

        /* Nav Links */
        .mu-nav-desktop {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .mu-nav-link {
          font-size: 14.5px;
          font-weight: 500;
          color: var(--teal);
          text-decoration: none;
          position: relative;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .mu-header-scrolled .mu-nav-link {
          color: #FFFFFF;
        }
        .mu-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--gold);
          transition: width 0.25s ease;
        }
        .mu-nav-link:hover::after {
          width: 100%;
        }
        .mu-mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--teal);
          cursor: pointer;
        }
        .mu-header-scrolled .mu-mobile-toggle {
          color: #FFFFFF;
        }

        /* Mobile Drawer */
        .mu-mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--teal-deep);
          padding: 24px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .mu-mobile-drawer-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mu-mobile-link {
          color: #FFFFFF;
          text-decoration: none;
          font-size: 16px;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .mu-mobile-drawer-actions {
          margin-top: 8px;
        }

        /* Hero Section */
        .mu-hero-section {
          padding: 48px 0 88px 0;
          background-color: var(--paper);
        }
        .mu-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }
        .mu-hero-headline {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 500;
          color: var(--teal);
          line-height: 1.14;
          margin-bottom: 20px;
        }
        .mu-hero-subtext {
          font-size: 17px;
          line-height: 1.6;
          color: var(--ink-soft);
          margin-bottom: 32px;
          max-width: 520px;
        }
        .mu-hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .mu-hero-media-wrapper {
          position: relative;
        }
        .mu-hero-frame-border {
          position: absolute;
          top: -12px;
          right: -12px;
          bottom: 12px;
          left: 12px;
          border: 1px solid var(--gold);
          border-radius: var(--radius);
          z-index: 1;
        }
        .mu-hero-image-card {
          position: relative;
          z-index: 2;
          border-radius: var(--radius);
          overflow: hidden;
          background-color: #E2E8F0;
        }
        .mu-hero-img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
        }
        .mu-hero-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background-color: rgba(11, 42, 74, 0.92);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(232, 163, 23, 0.4);
          color: #FFFFFF;
          padding: 12px 18px;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .mu-badge-icon {
          color: var(--gold);
        }
        .mu-hero-badge strong {
          display: block;
          font-size: 13.5px;
        }
        .mu-hero-badge span {
          display: block;
          font-size: 11.5px;
          color: rgba(255, 255, 255, 0.75);
        }

        /* About Section */
        .mu-about-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
          align-items: center;
        }
        .mu-about-image-wrapper {
          position: relative;
        }
        .mu-about-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: var(--radius);
          border: 1px solid var(--line);
        }
        .mu-about-milestone {
          position: absolute;
          bottom: -16px;
          right: -16px;
          background-color: var(--teal);
          color: #FFFFFF;
          padding: 16px 20px;
          border-radius: var(--radius);
          border-left: 3px solid var(--gold);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }
        .mu-milestone-year {
          display: block;
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 600;
          color: var(--gold);
        }
        .mu-milestone-text {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.85);
        }
        .mu-about-p {
          font-size: 16px;
          color: var(--ink-soft);
          margin-bottom: 16px;
          line-height: 1.6;
        }
        .mu-pullquote {
          margin: 24px 0;
          padding: 16px 20px;
          background-color: var(--mist);
          border-left: 3px solid var(--gold);
          font-family: var(--font-serif);
          font-size: 18px;
          font-style: italic;
          color: var(--teal);
          line-height: 1.45;
        }
        .mu-link-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--blue);
          font-weight: 600;
          font-size: 14.5px;
          text-decoration: none;
          transition: gap 0.2s ease;
        }
        .mu-link-arrow:hover {
          gap: 10px;
        }

        /* Stats Section */
        .mu-stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }
        .mu-stat-card {
          padding: 16px 24px;
          border-right: 1px solid var(--line);
          text-align: center;
        }
        .mu-stat-card-last {
          border-right: none;
        }
        .mu-stat-number {
          font-family: var(--font-serif);
          font-size: clamp(34px, 4vw, 48px);
          font-weight: 500;
          color: var(--teal);
          margin-bottom: 6px;
          line-height: 1;
        }
        .mu-stat-label {
          font-size: 13.5px;
          color: var(--ink-soft);
          font-weight: 500;
        }

        /* Pillars Section */
        .mu-section-header-center {
          text-align: center;
          margin-bottom: 56px;
        }
        .mu-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 44px;
        }
        .mu-pillar-card {
          background-color: #FFFFFF;
          padding: 36px 30px;
          border: 1px solid var(--line);
          border-radius: var(--radius);
        }
        .mu-pillar-icon-badge {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--mist);
          color: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .mu-pillar-title {
          font-size: 20px;
          margin-bottom: 12px;
          color: var(--teal);
        }
        .mu-pillar-desc {
          font-size: 15px;
          color: var(--ink-soft);
          line-height: 1.6;
        }

        /* Faculties Section */
        .mu-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 48px;
          gap: 24px;
        }
        .mu-faculties-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .mu-faculty-card {
          background-color: #FFFFFF;
          padding: 32px 26px;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .mu-faculty-card:hover {
          border-color: var(--blue);
          transform: translateY(-2px);
        }
        .mu-faculty-count {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--blue);
          display: block;
          margin-bottom: 6px;
        }
        .mu-faculty-title {
          font-size: 20px;
          margin-bottom: 18px;
        }
        .mu-dept-list {
          list-style: none;
          margin-bottom: 24px;
        }
        .mu-dept-list li {
          font-size: 14px;
          color: var(--ink-soft);
          padding: 6px 0;
          border-bottom: 1px solid var(--line-soft);
        }
        .mu-faculty-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--teal);
          text-decoration: none;
          margin-top: auto;
        }
        .mu-faculty-link:hover {
          color: var(--blue);
        }

        /* Campus Full-Bleed Section */
        .mu-campus-break {
          position: relative;
          min-height: 540px;
          background: url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80') center/cover no-repeat;
          display: flex;
          align-items: flex-end;
          padding: 80px 0;
        }
        .mu-campus-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(7, 29, 51, 0.92) 0%, rgba(7, 29, 51, 0.65) 50%, rgba(7, 29, 51, 0.2) 100%);
        }
        .mu-campus-content {
          position: relative;
          z-index: 2;
        }
        .mu-campus-text-card {
          max-width: 620px;
        }
        .mu-campus-heading {
          color: #FFFFFF;
          font-size: clamp(30px, 3.8vw, 44px);
          margin-bottom: 16px;
        }
        .mu-campus-desc {
          color: rgba(255, 255, 255, 0.85);
          font-size: 16.5px;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        /* Careers Section */
        .mu-careers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .mu-careers-p {
          font-size: 16px;
          color: var(--ink-soft);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .mu-careers-services {
          display: flex;
          flex-direction: column;
        }
        .mu-service-item {
          display: flex;
          gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid var(--line);
        }
        .mu-service-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--gold);
          margin-top: 8px;
          flex-shrink: 0;
        }
        .mu-service-title {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 600;
          color: var(--teal);
          margin-bottom: 4px;
        }
        .mu-service-desc {
          font-size: 14px;
          color: var(--ink-soft);
          line-height: 1.5;
        }

        /* News Section */
        .mu-news-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
        }
        .mu-news-list {
          border-top: 1px solid var(--line);
        }
        .mu-news-row {
          display: grid;
          grid-template-columns: 160px 1fr 40px;
          align-items: center;
          padding: 22px 12px;
          border-bottom: 1px solid var(--line);
          text-decoration: none;
          transition: background-color 0.2s ease;
        }
        .mu-news-row:hover {
          background-color: rgba(255, 255, 255, 0.6);
        }
        .mu-news-row:hover .mu-news-arrow {
          transform: translate(3px, -3px);
          color: var(--blue);
        }
        .mu-news-date {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--teal);
        }
        .mu-news-category {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--blue);
          margin-top: 4px;
        }
        .mu-news-title {
          font-family: var(--font-serif);
          font-size: 18px;
          color: var(--teal);
          margin-bottom: 4px;
        }
        .mu-news-desc {
          font-size: 14px;
          color: var(--ink-soft);
        }
        .mu-news-arrow {
          color: var(--ink-soft);
          transition: all 0.2s ease;
        }

        /* Testimonials Section */
        .mu-testimonial-wrapper {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
          position: relative;
        }
        .mu-quote-glyph {
          font-family: var(--font-serif);
          font-size: 84px;
          color: var(--gold);
          line-height: 0.6;
          margin-bottom: 24px;
          opacity: 0.8;
        }
        .mu-testimonial-text {
          font-family: var(--font-serif);
          font-size: clamp(20px, 2.6vw, 26px);
          font-style: italic;
          color: #FFFFFF;
          line-height: 1.5;
          margin-bottom: 28px;
        }
        .mu-author-name {
          display: block;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 16px;
          color: #FFFFFF;
        }
        .mu-author-role {
          display: block;
          font-size: 13.5px;
          color: var(--gold);
          margin-top: 4px;
        }
        .mu-carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
        }
        .mu-carousel-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: none;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .mu-carousel-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
        }
        .mu-carousel-dots {
          display: flex;
          gap: 8px;
        }
        .mu-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.25);
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        .mu-dot-active {
          background-color: var(--gold);
          width: 20px;
          border-radius: 4px;
        }

        /* Admissions CTA Banner */
        .mu-cta-banner {
          background-color: var(--teal-deep);
          color: #FFFFFF;
          padding: 84px 32px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .mu-cta-content {
          max-width: 680px;
          margin: 0 auto;
        }
        .mu-cta-heading {
          color: #FFFFFF;
          font-size: clamp(30px, 4vw, 44px);
          margin-bottom: 16px;
        }
        .mu-cta-desc {
          font-size: 16.5px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .mu-cta-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Footer */
        .mu-footer {
          background-color: var(--teal-deep);
          color: rgba(255, 255, 255, 0.7);
          padding: 72px 0 32px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .mu-footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 56px;
        }
        .mu-footer-brand {
          margin-bottom: 16px;
        }
        .mu-footer-address {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .mu-footer-contact p {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          margin-bottom: 6px;
        }
        .mu-footer-col-title {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          margin-bottom: 20px;
        }
        .mu-footer-links {
          list-style: none;
        }
        .mu-footer-links li {
          margin-bottom: 10px;
        }
        .mu-footer-links a {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }
        .mu-footer-links a:hover {
          color: var(--gold);
        }
        .mu-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 13px;
        }
        .mu-footer-legal {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .mu-footer-legal a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
        }
        .mu-footer-legal a:hover {
          color: var(--gold);
        }

        /* =========================================================================
           Responsive Breakpoints
           ========================================================================= */
        @media (max-width: 920px) {
          .mu-nav-desktop {
            display: none;
          }
          .mu-mobile-toggle {
            display: block;
          }
          .mu-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .mu-faculties-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 860px) {
          .mu-about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .mu-about-milestone {
            right: 12px;
            bottom: -12px;
          }
          .mu-pillars-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .mu-careers-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .mu-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mu-stat-card {
            border-right: none;
            border-bottom: 1px solid var(--line);
            padding: 20px 12px;
          }
          .mu-footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }

        @media (max-width: 720px) {
          .mu-utility-links {
            display: none;
          }
          .mu-utility-content {
            justify-content: flex-end;
          }
          .mu-section-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .mu-news-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .mu-news-action-col {
            display: none;
          }
          .mu-footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }

        @media (max-width: 560px) {
          .mu-faculties-grid {
            grid-template-columns: 1fr;
          }
          .mu-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}Qd.createRoot(document.getElementById("root")).render(s.jsx(Ad.StrictMode,{children:s.jsx(Pf,{})}));
