(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const I of document.querySelectorAll('link[rel="modulepreload"]'))W(I);new MutationObserver(I=>{for(const B of I)if(B.type==="childList")for(const ee of B.addedNodes)ee.tagName==="LINK"&&ee.rel==="modulepreload"&&W(ee)}).observe(document,{childList:!0,subtree:!0});function h(I){const B={};return I.integrity&&(B.integrity=I.integrity),I.referrerPolicy&&(B.referrerPolicy=I.referrerPolicy),I.crossOrigin==="use-credentials"?B.credentials="include":I.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function W(I){if(I.ep)return;I.ep=!0;const B=h(I);fetch(I.href,B)}})();function Du(z){return z&&z.__esModule&&Object.prototype.hasOwnProperty.call(z,"default")?z.default:z}var _o={exports:{}},wr={},zo={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u;function Ld(){if(_u)return A;_u=1;var z=Symbol.for("react.element"),T=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),ee=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),ve=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),Q=Symbol.iterator;function Z(d){return d===null||typeof d!="object"?null:(d=Q&&d[Q]||d["@@iterator"],typeof d=="function"?d:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ce=Object.assign,le={};function q(d,g,L){this.props=d,this.context=g,this.refs=le,this.updater=L||K}q.prototype.isReactComponent={},q.prototype.setState=function(d,g){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,g,"setState")},q.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function yt(){}yt.prototype=q.prototype;function ct(d,g,L){this.props=d,this.context=g,this.refs=le,this.updater=L||K}var et=ct.prototype=new yt;et.constructor=ct,ce(et,q.prototype),et.isPureReactComponent=!0;var Se=Array.isArray,tt=Object.prototype.hasOwnProperty,Pe={current:null},Fe={key:!0,ref:!0,__self:!0,__source:!0};function Ge(d,g,L){var D,H={},$=null,J=null;if(g!=null)for(D in g.ref!==void 0&&(J=g.ref),g.key!==void 0&&($=""+g.key),g)tt.call(g,D)&&!Fe.hasOwnProperty(D)&&(H[D]=g[D]);var G=arguments.length-2;if(G===1)H.children=L;else if(1<G){for(var ie=Array(G),$e=0;$e<G;$e++)ie[$e]=arguments[$e+2];H.children=ie}if(d&&d.defaultProps)for(D in G=d.defaultProps,G)H[D]===void 0&&(H[D]=G[D]);return{$$typeof:z,type:d,key:$,ref:J,props:H,_owner:Pe.current}}function zt(d,g){return{$$typeof:z,type:d.type,key:g,ref:d.ref,props:d.props,_owner:d._owner}}function xt(d){return typeof d=="object"&&d!==null&&d.$$typeof===z}function Yt(d){var g={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(L){return g[L]})}var dt=/\/+/g;function He(d,g){return typeof d=="object"&&d!==null&&d.key!=null?Yt(""+d.key):g.toString(36)}function nt(d,g,L,D,H){var $=typeof d;($==="undefined"||$==="boolean")&&(d=null);var J=!1;if(d===null)J=!0;else switch($){case"string":case"number":J=!0;break;case"object":switch(d.$$typeof){case z:case T:J=!0}}if(J)return J=d,H=H(J),d=D===""?"."+He(J,0):D,Se(H)?(L="",d!=null&&(L=d.replace(dt,"$&/")+"/"),nt(H,g,L,"",function($e){return $e})):H!=null&&(xt(H)&&(H=zt(H,L+(!H.key||J&&J.key===H.key?"":(""+H.key).replace(dt,"$&/")+"/")+d)),g.push(H)),1;if(J=0,D=D===""?".":D+":",Se(d))for(var G=0;G<d.length;G++){$=d[G];var ie=D+He($,G);J+=nt($,g,L,ie,H)}else if(ie=Z(d),typeof ie=="function")for(d=ie.call(d),G=0;!($=d.next()).done;)$=$.value,ie=D+He($,G++),J+=nt($,g,L,ie,H);else if($==="object")throw g=String(d),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return J}function ft(d,g,L){if(d==null)return d;var D=[],H=0;return nt(d,D,"","",function($){return g.call(L,$,H++)}),D}function Te(d){if(d._status===-1){var g=d._result;g=g(),g.then(function(L){(d._status===0||d._status===-1)&&(d._status=1,d._result=L)},function(L){(d._status===0||d._status===-1)&&(d._status=2,d._result=L)}),d._status===-1&&(d._status=0,d._result=g)}if(d._status===1)return d._result.default;throw d._result}var de={current:null},k={transition:null},R={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:k,ReactCurrentOwner:Pe};function S(){throw Error("act(...) is not supported in production builds of React.")}return A.Children={map:ft,forEach:function(d,g,L){ft(d,function(){g.apply(this,arguments)},L)},count:function(d){var g=0;return ft(d,function(){g++}),g},toArray:function(d){return ft(d,function(g){return g})||[]},only:function(d){if(!xt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},A.Component=q,A.Fragment=h,A.Profiler=I,A.PureComponent=ct,A.StrictMode=W,A.Suspense=O,A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,A.act=S,A.cloneElement=function(d,g,L){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var D=ce({},d.props),H=d.key,$=d.ref,J=d._owner;if(g!=null){if(g.ref!==void 0&&($=g.ref,J=Pe.current),g.key!==void 0&&(H=""+g.key),d.type&&d.type.defaultProps)var G=d.type.defaultProps;for(ie in g)tt.call(g,ie)&&!Fe.hasOwnProperty(ie)&&(D[ie]=g[ie]===void 0&&G!==void 0?G[ie]:g[ie])}var ie=arguments.length-2;if(ie===1)D.children=L;else if(1<ie){G=Array(ie);for(var $e=0;$e<ie;$e++)G[$e]=arguments[$e+2];D.children=G}return{$$typeof:z,type:d.type,key:H,ref:$,props:D,_owner:J}},A.createContext=function(d){return d={$$typeof:ee,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:B,_context:d},d.Consumer=d},A.createElement=Ge,A.createFactory=function(d){var g=Ge.bind(null,d);return g.type=d,g},A.createRef=function(){return{current:null}},A.forwardRef=function(d){return{$$typeof:re,render:d}},A.isValidElement=xt,A.lazy=function(d){return{$$typeof:ue,_payload:{_status:-1,_result:d},_init:Te}},A.memo=function(d,g){return{$$typeof:ve,type:d,compare:g===void 0?null:g}},A.startTransition=function(d){var g=k.transition;k.transition={};try{d()}finally{k.transition=g}},A.unstable_act=S,A.useCallback=function(d,g){return de.current.useCallback(d,g)},A.useContext=function(d){return de.current.useContext(d)},A.useDebugValue=function(){},A.useDeferredValue=function(d){return de.current.useDeferredValue(d)},A.useEffect=function(d,g){return de.current.useEffect(d,g)},A.useId=function(){return de.current.useId()},A.useImperativeHandle=function(d,g,L){return de.current.useImperativeHandle(d,g,L)},A.useInsertionEffect=function(d,g){return de.current.useInsertionEffect(d,g)},A.useLayoutEffect=function(d,g){return de.current.useLayoutEffect(d,g)},A.useMemo=function(d,g){return de.current.useMemo(d,g)},A.useReducer=function(d,g,L){return de.current.useReducer(d,g,L)},A.useRef=function(d){return de.current.useRef(d)},A.useState=function(d){return de.current.useState(d)},A.useSyncExternalStore=function(d,g,L){return de.current.useSyncExternalStore(d,g,L)},A.useTransition=function(){return de.current.useTransition()},A.version="18.3.1",A}var zu;function Fo(){return zu||(zu=1,zo.exports=Ld()),zo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Ad(){if(Pu)return wr;Pu=1;var z=Fo(),T=Symbol.for("react.element"),h=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,I=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function ee(re,O,ve){var ue,Q={},Z=null,K=null;ve!==void 0&&(Z=""+ve),O.key!==void 0&&(Z=""+O.key),O.ref!==void 0&&(K=O.ref);for(ue in O)W.call(O,ue)&&!B.hasOwnProperty(ue)&&(Q[ue]=O[ue]);if(re&&re.defaultProps)for(ue in O=re.defaultProps,O)Q[ue]===void 0&&(Q[ue]=O[ue]);return{$$typeof:T,type:re,key:Z,ref:K,props:Q,_owner:I.current}}return wr.Fragment=h,wr.jsx=ee,wr.jsxs=ee,wr}var Mu;function Dd(){return Mu||(Mu=1,_o.exports=Ad()),_o.exports}var o=Dd(),Be=Fo();const Id=Du(Be);var Fl={},Po={exports:{}},Ue={},Mo={exports:{}},Ro={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function Od(){return Ru||(Ru=1,(function(z){function T(k,R){var S=k.length;k.push(R);e:for(;0<S;){var d=S-1>>>1,g=k[d];if(0<I(g,R))k[d]=R,k[S]=g,S=d;else break e}}function h(k){return k.length===0?null:k[0]}function W(k){if(k.length===0)return null;var R=k[0],S=k.pop();if(S!==R){k[0]=S;e:for(var d=0,g=k.length,L=g>>>1;d<L;){var D=2*(d+1)-1,H=k[D],$=D+1,J=k[$];if(0>I(H,S))$<g&&0>I(J,H)?(k[d]=J,k[$]=S,d=$):(k[d]=H,k[D]=S,d=D);else if($<g&&0>I(J,S))k[d]=J,k[$]=S,d=$;else break e}}return R}function I(k,R){var S=k.sortIndex-R.sortIndex;return S!==0?S:k.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var B=performance;z.unstable_now=function(){return B.now()}}else{var ee=Date,re=ee.now();z.unstable_now=function(){return ee.now()-re}}var O=[],ve=[],ue=1,Q=null,Z=3,K=!1,ce=!1,le=!1,q=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,ct=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function et(k){for(var R=h(ve);R!==null;){if(R.callback===null)W(ve);else if(R.startTime<=k)W(ve),R.sortIndex=R.expirationTime,T(O,R);else break;R=h(ve)}}function Se(k){if(le=!1,et(k),!ce)if(h(O)!==null)ce=!0,Te(tt);else{var R=h(ve);R!==null&&de(Se,R.startTime-k)}}function tt(k,R){ce=!1,le&&(le=!1,yt(Ge),Ge=-1),K=!0;var S=Z;try{for(et(R),Q=h(O);Q!==null&&(!(Q.expirationTime>R)||k&&!Yt());){var d=Q.callback;if(typeof d=="function"){Q.callback=null,Z=Q.priorityLevel;var g=d(Q.expirationTime<=R);R=z.unstable_now(),typeof g=="function"?Q.callback=g:Q===h(O)&&W(O),et(R)}else W(O);Q=h(O)}if(Q!==null)var L=!0;else{var D=h(ve);D!==null&&de(Se,D.startTime-R),L=!1}return L}finally{Q=null,Z=S,K=!1}}var Pe=!1,Fe=null,Ge=-1,zt=5,xt=-1;function Yt(){return!(z.unstable_now()-xt<zt)}function dt(){if(Fe!==null){var k=z.unstable_now();xt=k;var R=!0;try{R=Fe(!0,k)}finally{R?He():(Pe=!1,Fe=null)}}else Pe=!1}var He;if(typeof ct=="function")He=function(){ct(dt)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ft=nt.port2;nt.port1.onmessage=dt,He=function(){ft.postMessage(null)}}else He=function(){q(dt,0)};function Te(k){Fe=k,Pe||(Pe=!0,He())}function de(k,R){Ge=q(function(){k(z.unstable_now())},R)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(k){k.callback=null},z.unstable_continueExecution=function(){ce||K||(ce=!0,Te(tt))},z.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):zt=0<k?Math.floor(1e3/k):5},z.unstable_getCurrentPriorityLevel=function(){return Z},z.unstable_getFirstCallbackNode=function(){return h(O)},z.unstable_next=function(k){switch(Z){case 1:case 2:case 3:var R=3;break;default:R=Z}var S=Z;Z=R;try{return k()}finally{Z=S}},z.unstable_pauseExecution=function(){},z.unstable_requestPaint=function(){},z.unstable_runWithPriority=function(k,R){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var S=Z;Z=k;try{return R()}finally{Z=S}},z.unstable_scheduleCallback=function(k,R,S){var d=z.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?d+S:d):S=d,k){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=S+g,k={id:ue++,callback:R,priorityLevel:k,startTime:S,expirationTime:g,sortIndex:-1},S>d?(k.sortIndex=S,T(ve,k),h(O)===null&&k===h(ve)&&(le?(yt(Ge),Ge=-1):le=!0,de(Se,S-d))):(k.sortIndex=g,T(O,k),ce||K||(ce=!0,Te(tt))),k},z.unstable_shouldYield=Yt,z.unstable_wrapCallback=function(k){var R=Z;return function(){var S=Z;Z=R;try{return k.apply(this,arguments)}finally{Z=S}}}})(Ro)),Ro}var Fu;function Ud(){return Fu||(Fu=1,Mo.exports=Od()),Mo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Bd(){if(Tu)return Ue;Tu=1;var z=Fo(),T=Ud();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var W=new Set,I={};function B(e,t){ee(e,t),ee(e+"Capture",t)}function ee(e,t){for(I[e]=t,e=0;e<t.length;e++)W.add(t[e])}var re=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),O=Object.prototype.hasOwnProperty,ve=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ue={},Q={};function Z(e){return O.call(Q,e)?!0:O.call(ue,e)?!1:ve.test(e)?Q[e]=!0:(ue[e]=!0,!1)}function K(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ce(e,t,n,r){if(t===null||typeof t>"u"||K(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function le(e,t,n,r,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new le(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];q[t]=new le(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new le(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new le(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new le(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new le(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var yt=/[\-:]([a-z])/g;function ct(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yt,ct);q[t]=new le(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yt,ct);q[t]=new le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yt,ct);q[t]=new le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function et(e,t,n,r){var l=q.hasOwnProperty(t)?q[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ce(t,n,l,r)&&(n=null),r||l===null?Z(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Se=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tt=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),Fe=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),zt=Symbol.for("react.profiler"),xt=Symbol.for("react.provider"),Yt=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),k=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var S=Object.assign,d;function g(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var L=!1;function D(e,t){if(!e||L)return"";L=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var l=m.stack.split(`
`),i=r.stack.split(`
`),s=l.length-1,a=i.length-1;1<=s&&0<=a&&l[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(l[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||l[s]!==i[a]){var u=`
`+l[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{L=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function H(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=D(e.type,!1),e;case 11:return e=D(e.type.render,!1),e;case 1:return e=D(e.type,!0),e;default:return""}}function $(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fe:return"Fragment";case Pe:return"Portal";case zt:return"Profiler";case Ge:return"StrictMode";case He:return"Suspense";case nt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yt:return(e.displayName||"Context")+".Consumer";case xt:return(e._context.displayName||"Context")+".Provider";case dt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:$(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return $(e(t))}catch{}}return null}function J(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(t);case 8:return t===Ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function G(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $e(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nr(e){e._valueTracker||(e._valueTracker=$e(e))}function To(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tl(e,t){var n=t.checked;return S({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=G(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ao(e,t){t=t.checked,t!=null&&et(e,"checked",t,!1)}function Ll(e,t){Ao(e,t);var n=G(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Al(e,t.type,n):t.hasOwnProperty("defaultValue")&&Al(e,t.type,G(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Do(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Al(e,t,n){(t!=="number"||jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var An=Array.isArray;function cn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+G(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return S({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Io(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(An(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:G(n)}}function Oo(e,t){var n=G(t.value),r=G(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Uo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,Ho=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ou=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Ou.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function $o(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function Vo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=$o(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Uu=S({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ol(e,t){if(t){if(Uu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $l=null,dn=null,fn=null;function Wo(e){if(e=ir(e)){if(typeof $l!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Gr(t),$l(e.stateNode,e.type,t))}}function Qo(e){dn?fn?fn.push(e):fn=[e]:dn=e}function Ko(){if(dn){var e=dn,t=fn;if(fn=dn=null,Wo(e),t)for(e=0;e<t.length;e++)Wo(t[e])}}function Go(e,t){return e(t)}function Yo(){}var Vl=!1;function Xo(e,t,n){if(Vl)return e(t,n);Vl=!0;try{return Go(e,t,n)}finally{Vl=!1,(dn!==null||fn!==null)&&(Yo(),Ko())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=Gr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Wl=!1;if(re)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{Wl=!1}function Bu(e,t,n,r,l,i,s,a,u){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(y){this.onError(y)}}var Bn=!1,Cr=null,Er=!1,Ql=null,Hu={onError:function(e){Bn=!0,Cr=e}};function $u(e,t,n,r,l,i,s,a,u){Bn=!1,Cr=null,Bu.apply(Hu,arguments)}function Vu(e,t,n,r,l,i,s,a,u){if($u.apply(this,arguments),Bn){if(Bn){var m=Cr;Bn=!1,Cr=null}else throw Error(h(198));Er||(Er=!0,Ql=m)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zo(e){if(Xt(e)!==e)throw Error(h(188))}function Wu(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Zo(l),e;if(i===r)return Zo(l),t;i=i.sibling}throw Error(h(188))}if(n.return!==r.return)n=l,r=i;else{for(var s=!1,a=l.child;a;){if(a===n){s=!0,n=l,r=i;break}if(a===r){s=!0,r=l,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=l;break}if(a===r){s=!0,r=i,n=l;break}a=a.sibling}if(!s)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function Jo(e){return e=Wu(e),e!==null?bo(e):null}function bo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bo(e);if(t!==null)return t;e=e.sibling}return null}var es=T.unstable_scheduleCallback,ts=T.unstable_cancelCallback,Qu=T.unstable_shouldYield,Ku=T.unstable_requestPaint,pe=T.unstable_now,Gu=T.unstable_getCurrentPriorityLevel,Kl=T.unstable_ImmediatePriority,ns=T.unstable_UserBlockingPriority,_r=T.unstable_NormalPriority,Yu=T.unstable_LowPriority,rs=T.unstable_IdlePriority,zr=null,pt=null;function Xu(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(zr,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:Ju,qu=Math.log,Zu=Math.LN2;function Ju(e){return e>>>=0,e===0?32:31-(qu(e)/Zu|0)|0}var Pr=64,Mr=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~l;a!==0?r=Hn(a):(i&=s,i!==0&&(r=Hn(i)))}else s=n&~l,s!==0?r=Hn(s):i!==0&&(r=Hn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),l=1<<n,r|=e[n],t&=~l;return r}function bu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ec(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-rt(i),a=1<<s,u=l[s];u===-1?((a&n)===0||(a&r)!==0)&&(l[s]=bu(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function Gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ls(){var e=Pr;return Pr<<=1,(Pr&4194240)===0&&(Pr=64),e}function Yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $n(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function tc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-rt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var Y=0;function is(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var os,ql,ss,as,us,Zl=!1,Fr=[],Pt=null,Mt=null,Rt=null,Vn=new Map,Wn=new Map,Ft=[],nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cs(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function Qn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ir(t),t!==null&&ql(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function rc(e,t,n,r,l){switch(t){case"focusin":return Pt=Qn(Pt,e,t,n,r,l),!0;case"dragenter":return Mt=Qn(Mt,e,t,n,r,l),!0;case"mouseover":return Rt=Qn(Rt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Vn.set(i,Qn(Vn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Wn.set(i,Qn(Wn.get(i)||null,e,t,n,r,l)),!0}return!1}function ds(e){var t=qt(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=qo(n),t!==null){e.blockedOn=t,us(e.priority,function(){ss(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=ir(n),t!==null&&ql(t),e.blockedOn=n,!1;t.shift()}return!0}function fs(e,t,n){Tr(e)&&n.delete(t)}function lc(){Zl=!1,Pt!==null&&Tr(Pt)&&(Pt=null),Mt!==null&&Tr(Mt)&&(Mt=null),Rt!==null&&Tr(Rt)&&(Rt=null),Vn.forEach(fs),Wn.forEach(fs)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,lc)))}function Gn(e){function t(l){return Kn(l,e)}if(0<Fr.length){Kn(Fr[0],e);for(var n=1;n<Fr.length;n++){var r=Fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Kn(Pt,e),Mt!==null&&Kn(Mt,e),Rt!==null&&Kn(Rt,e),Vn.forEach(t),Wn.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)ds(n),n.blockedOn===null&&Ft.shift()}var pn=Se.ReactCurrentBatchConfig,Lr=!0;function ic(e,t,n,r){var l=Y,i=pn.transition;pn.transition=null;try{Y=1,Jl(e,t,n,r)}finally{Y=l,pn.transition=i}}function oc(e,t,n,r){var l=Y,i=pn.transition;pn.transition=null;try{Y=4,Jl(e,t,n,r)}finally{Y=l,pn.transition=i}}function Jl(e,t,n,r){if(Lr){var l=bl(e,t,n,r);if(l===null)vi(e,t,r,Ar,n),cs(e,r);else if(rc(l,e,t,n,r))r.stopPropagation();else if(cs(e,r),t&4&&-1<nc.indexOf(e)){for(;l!==null;){var i=ir(l);if(i!==null&&os(i),i=bl(e,t,n,r),i===null&&vi(e,t,r,Ar,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else vi(e,t,r,null,n)}}var Ar=null;function bl(e,t,n,r){if(Ar=null,e=Hl(r),e=qt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function ps(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gu()){case Kl:return 1;case ns:return 4;case _r:case Yu:return 16;case rs:return 536870912;default:return 16}default:return 16}}var Tt=null,ei=null,Dr=null;function ms(){if(Dr)return Dr;var e,t=ei,n=t.length,r,l="value"in Tt?Tt.value:Tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[i-r];r++);return Dr=l.slice(e,1<r?1-r:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function hs(){return!1}function Ve(e){function t(n,r,l,i,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Or:hs,this.isPropagationStopped=hs,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ti=Ve(mn),Yn=S({},mn,{view:0,detail:0}),sc=Ve(Yn),ni,ri,Xn,Ur=S({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ii,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(ni=e.screenX-Xn.screenX,ri=e.screenY-Xn.screenY):ri=ni=0,Xn=e),ni)},movementY:function(e){return"movementY"in e?e.movementY:ri}}),vs=Ve(Ur),ac=S({},Ur,{dataTransfer:0}),uc=Ve(ac),cc=S({},Yn,{relatedTarget:0}),li=Ve(cc),dc=S({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),fc=Ve(dc),pc=S({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mc=Ve(pc),hc=S({},mn,{data:0}),gs=Ve(hc),vc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yc[e])?!!t[e]:!1}function ii(){return xc}var wc=S({},Yn,{key:function(e){if(e.key){var t=vc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ii,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kc=Ve(wc),Nc=S({},Ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ys=Ve(Nc),jc=S({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ii}),Sc=Ve(jc),Cc=S({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ec=Ve(Cc),_c=S({},Ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zc=Ve(_c),Pc=[9,13,27,32],oi=re&&"CompositionEvent"in window,qn=null;re&&"documentMode"in document&&(qn=document.documentMode);var Mc=re&&"TextEvent"in window&&!qn,xs=re&&(!oi||qn&&8<qn&&11>=qn),ws=" ",ks=!1;function Ns(e,t){switch(e){case"keyup":return Pc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function Rc(e,t){switch(e){case"compositionend":return js(t);case"keypress":return t.which!==32?null:(ks=!0,ws);case"textInput":return e=t.data,e===ws&&ks?null:e;default:return null}}function Fc(e,t){if(hn)return e==="compositionend"||!oi&&Ns(e,t)?(e=ms(),Dr=ei=Tt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xs&&t.locale!=="ko"?null:t.data;default:return null}}var Tc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tc[e.type]:t==="textarea"}function Cs(e,t,n,r){Qo(r),t=Wr(t,"onChange"),0<t.length&&(n=new ti("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zn=null,Jn=null;function Lc(e){Vs(e,0)}function Br(e){var t=wn(e);if(To(t))return e}function Ac(e,t){if(e==="change")return t}var Es=!1;if(re){var si;if(re){var ai="oninput"in document;if(!ai){var _s=document.createElement("div");_s.setAttribute("oninput","return;"),ai=typeof _s.oninput=="function"}si=ai}else si=!1;Es=si&&(!document.documentMode||9<document.documentMode)}function zs(){Zn&&(Zn.detachEvent("onpropertychange",Ps),Jn=Zn=null)}function Ps(e){if(e.propertyName==="value"&&Br(Jn)){var t=[];Cs(t,Jn,e,Hl(e)),Xo(Lc,t)}}function Dc(e,t,n){e==="focusin"?(zs(),Zn=t,Jn=n,Zn.attachEvent("onpropertychange",Ps)):e==="focusout"&&zs()}function Ic(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Br(Jn)}function Oc(e,t){if(e==="click")return Br(t)}function Uc(e,t){if(e==="input"||e==="change")return Br(t)}function Bc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:Bc;function bn(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!O.call(t,l)||!lt(e[l],t[l]))return!1}return!0}function Ms(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rs(e,t){var n=Ms(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ms(n)}}function Fs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ts(){for(var e=window,t=jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jr(e.document)}return t}function ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hc(e){var t=Ts(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Fs(n.ownerDocument.documentElement,n)){if(r!==null&&ui(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Rs(n,i);var s=Rs(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $c=re&&"documentMode"in document&&11>=document.documentMode,vn=null,ci=null,er=null,di=!1;function Ls(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;di||vn==null||vn!==jr(r)||(r=vn,"selectionStart"in r&&ui(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&bn(er,r)||(er=r,r=Wr(ci,"onSelect"),0<r.length&&(t=new ti("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionend:Hr("Transition","TransitionEnd")},fi={},As={};re&&(As=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function $r(e){if(fi[e])return fi[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in As)return fi[e]=t[n];return e}var Ds=$r("animationend"),Is=$r("animationiteration"),Os=$r("animationstart"),Us=$r("transitionend"),Bs=new Map,Hs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){Bs.set(e,t),B(t,[e])}for(var pi=0;pi<Hs.length;pi++){var mi=Hs[pi],Vc=mi.toLowerCase(),Wc=mi[0].toUpperCase()+mi.slice(1);Lt(Vc,"on"+Wc)}Lt(Ds,"onAnimationEnd"),Lt(Is,"onAnimationIteration"),Lt(Os,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(Us,"onTransitionEnd"),ee("onMouseEnter",["mouseout","mouseover"]),ee("onMouseLeave",["mouseout","mouseover"]),ee("onPointerEnter",["pointerout","pointerover"]),ee("onPointerLeave",["pointerout","pointerover"]),B("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),B("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),B("onBeforeInput",["compositionend","keypress","textInput","paste"]),B("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),B("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),B("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qc=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function $s(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vu(r,t,void 0,e),e.currentTarget=null}function Vs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,m=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;$s(l,a,m),i=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,m=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;$s(l,a,m),i=u}}}if(Er)throw e=Ql,Er=!1,Ql=null,e}function te(e,t){var n=t[Ni];n===void 0&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(Ws(t,e,2,!1),n.add(r))}function hi(e,t,n){var r=0;t&&(r|=4),Ws(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Vr]){e[Vr]=!0,W.forEach(function(n){n!=="selectionchange"&&(Qc.has(n)||hi(n,!1,e),hi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,hi("selectionchange",!1,t))}}function Ws(e,t,n,r){switch(ps(t)){case 1:var l=ic;break;case 4:l=oc;break;default:l=Jl}n=l.bind(null,t,n,e),l=void 0,!Wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function vi(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;s=s.return}for(;a!==null;){if(s=qt(a),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}a=a.parentNode}}r=r.return}Xo(function(){var m=i,y=Hl(n),x=[];e:{var v=Bs.get(e);if(v!==void 0){var N=ti,C=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":N=kc;break;case"focusin":C="focus",N=li;break;case"focusout":C="blur",N=li;break;case"beforeblur":case"afterblur":N=li;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Sc;break;case Ds:case Is:case Os:N=fc;break;case Us:N=Ec;break;case"scroll":N=sc;break;case"wheel":N=zc;break;case"copy":case"cut":case"paste":N=mc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=ys}var E=(t&4)!==0,me=!E&&e==="scroll",f=E?v!==null?v+"Capture":null:v;E=[];for(var c=m,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=On(c,f),w!=null&&E.push(rr(c,w,p)))),me)break;c=c.return}0<E.length&&(v=new N(v,C,null,n,y),x.push({event:v,listeners:E}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",v&&n!==Bl&&(C=n.relatedTarget||n.fromElement)&&(qt(C)||C[wt]))break e;if((N||v)&&(v=y.window===y?y:(v=y.ownerDocument)?v.defaultView||v.parentWindow:window,N?(C=n.relatedTarget||n.toElement,N=m,C=C?qt(C):null,C!==null&&(me=Xt(C),C!==me||C.tag!==5&&C.tag!==6)&&(C=null)):(N=null,C=m),N!==C)){if(E=vs,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=ys,w="onPointerLeave",f="onPointerEnter",c="pointer"),me=N==null?v:wn(N),p=C==null?v:wn(C),v=new E(w,c+"leave",N,n,y),v.target=me,v.relatedTarget=p,w=null,qt(y)===m&&(E=new E(f,c+"enter",C,n,y),E.target=p,E.relatedTarget=me,w=E),me=w,N&&C)t:{for(E=N,f=C,c=0,p=E;p;p=yn(p))c++;for(p=0,w=f;w;w=yn(w))p++;for(;0<c-p;)E=yn(E),c--;for(;0<p-c;)f=yn(f),p--;for(;c--;){if(E===f||f!==null&&E===f.alternate)break t;E=yn(E),f=yn(f)}E=null}else E=null;N!==null&&Qs(x,v,N,E,!1),C!==null&&me!==null&&Qs(x,me,C,E,!0)}}e:{if(v=m?wn(m):window,N=v.nodeName&&v.nodeName.toLowerCase(),N==="select"||N==="input"&&v.type==="file")var _=Ac;else if(Ss(v))if(Es)_=Uc;else{_=Ic;var P=Dc}else(N=v.nodeName)&&N.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(_=Oc);if(_&&(_=_(e,m))){Cs(x,_,n,y);break e}P&&P(e,v,m),e==="focusout"&&(P=v._wrapperState)&&P.controlled&&v.type==="number"&&Al(v,"number",v.value)}switch(P=m?wn(m):window,e){case"focusin":(Ss(P)||P.contentEditable==="true")&&(vn=P,ci=m,er=null);break;case"focusout":er=ci=vn=null;break;case"mousedown":di=!0;break;case"contextmenu":case"mouseup":case"dragend":di=!1,Ls(x,n,y);break;case"selectionchange":if($c)break;case"keydown":case"keyup":Ls(x,n,y)}var M;if(oi)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else hn?Ns(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(xs&&n.locale!=="ko"&&(hn||F!=="onCompositionStart"?F==="onCompositionEnd"&&hn&&(M=ms()):(Tt=y,ei="value"in Tt?Tt.value:Tt.textContent,hn=!0)),P=Wr(m,F),0<P.length&&(F=new gs(F,e,null,n,y),x.push({event:F,listeners:P}),M?F.data=M:(M=js(n),M!==null&&(F.data=M)))),(M=Mc?Rc(e,n):Fc(e,n))&&(m=Wr(m,"onBeforeInput"),0<m.length&&(y=new gs("onBeforeInput","beforeinput",null,n,y),x.push({event:y,listeners:m}),y.data=M))}Vs(x,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=On(e,n),i!=null&&r.unshift(rr(e,i,l)),i=On(e,t),i!=null&&r.push(rr(e,i,l))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qs(e,t,n,r,l){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,m=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&m!==null&&(a=m,l?(u=On(n,i),u!=null&&s.unshift(rr(n,u,a))):l||(u=On(n,i),u!=null&&s.push(rr(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Kc=/\r\n?/g,Gc=/\u0000|\uFFFD/g;function Ks(e){return(typeof e=="string"?e:""+e).replace(Kc,`
`).replace(Gc,"")}function Qr(e,t,n){if(t=Ks(t),Ks(e)!==t&&n)throw Error(h(425))}function Kr(){}var gi=null,yi=null;function xi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wi=typeof setTimeout=="function"?setTimeout:void 0,Yc=typeof clearTimeout=="function"?clearTimeout:void 0,Gs=typeof Promise=="function"?Promise:void 0,Xc=typeof queueMicrotask=="function"?queueMicrotask:typeof Gs<"u"?function(e){return Gs.resolve(null).then(e).catch(qc)}:wi;function qc(e){setTimeout(function(){throw e})}function ki(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Gn(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ys(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),mt="__reactFiber$"+xn,lr="__reactProps$"+xn,wt="__reactContainer$"+xn,Ni="__reactEvents$"+xn,Zc="__reactListeners$"+xn,Jc="__reactHandles$"+xn;function qt(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ys(e);e!==null;){if(n=e[mt])return n;e=Ys(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[mt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Gr(e){return e[lr]||null}var ji=[],kn=-1;function Dt(e){return{current:e}}function ne(e){0>kn||(e.current=ji[kn],ji[kn]=null,kn--)}function b(e,t){kn++,ji[kn]=e.current,e.current=t}var It={},Ce=Dt(It),Le=Dt(!1),Zt=It;function Nn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ae(e){return e=e.childContextTypes,e!=null}function Yr(){ne(Le),ne(Ce)}function Xs(e,t,n){if(Ce.current!==It)throw Error(h(168));b(Ce,t),b(Le,n)}function qs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(h(108,J(e)||"Unknown",l));return S({},n,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Zt=Ce.current,b(Ce,e),b(Le,Le.current),!0}function Zs(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=qs(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,ne(Le),ne(Ce),b(Ce,e)):ne(Le),b(Le,n)}var kt=null,qr=!1,Si=!1;function Js(e){kt===null?kt=[e]:kt.push(e)}function bc(e){qr=!0,Js(e)}function Ot(){if(!Si&&kt!==null){Si=!0;var e=0,t=Y;try{var n=kt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,qr=!1}catch(l){throw kt!==null&&(kt=kt.slice(e+1)),es(Kl,Ot),l}finally{Y=t,Si=!1}}return null}var jn=[],Sn=0,Zr=null,Jr=0,Ye=[],Xe=0,Jt=null,Nt=1,jt="";function bt(e,t){jn[Sn++]=Jr,jn[Sn++]=Zr,Zr=e,Jr=t}function bs(e,t,n){Ye[Xe++]=Nt,Ye[Xe++]=jt,Ye[Xe++]=Jt,Jt=e;var r=Nt;e=jt;var l=32-rt(r)-1;r&=~(1<<l),n+=1;var i=32-rt(t)+l;if(30<i){var s=l-l%5;i=(r&(1<<s)-1).toString(32),r>>=s,l-=s,Nt=1<<32-rt(t)+l|n<<l|r,jt=i+e}else Nt=1<<i|n<<l|r,jt=e}function Ci(e){e.return!==null&&(bt(e,1),bs(e,1,0))}function Ei(e){for(;e===Zr;)Zr=jn[--Sn],jn[Sn]=null,Jr=jn[--Sn],jn[Sn]=null;for(;e===Jt;)Jt=Ye[--Xe],Ye[Xe]=null,jt=Ye[--Xe],Ye[Xe]=null,Nt=Ye[--Xe],Ye[Xe]=null}var We=null,Qe=null,oe=!1,it=null;function ea(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ta(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Qe=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:Nt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Qe=null,!0):!1;default:return!1}}function _i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zi(e){if(oe){var t=Qe;if(t){var n=t;if(!ta(e,t)){if(_i(e))throw Error(h(418));t=At(n.nextSibling);var r=We;t&&ta(e,t)?ea(r,n):(e.flags=e.flags&-4097|2,oe=!1,We=e)}}else{if(_i(e))throw Error(h(418));e.flags=e.flags&-4097|2,oe=!1,We=e}}}function na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function br(e){if(e!==We)return!1;if(!oe)return na(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xi(e.type,e.memoizedProps)),t&&(t=Qe)){if(_i(e))throw ra(),Error(h(418));for(;t;)ea(e,t),t=At(t.nextSibling)}if(na(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=We?At(e.stateNode.nextSibling):null;return!0}function ra(){for(var e=Qe;e;)e=At(e.nextSibling)}function Cn(){Qe=We=null,oe=!1}function Pi(e){it===null?it=[e]:it.push(e)}var ed=Se.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=l.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function el(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function la(e){var t=e._init;return t(e._payload)}function ia(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Kt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,w){return c===null||c.tag!==6?(c=ko(p,f.mode,w),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,w){var _=p.type;return _===Fe?y(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Te&&la(_)===c.type)?(w=l(c,p.props),w.ref=or(f,c,p),w.return=f,w):(w=Sl(p.type,p.key,p.props,null,f.mode,w),w.ref=or(f,c,p),w.return=f,w)}function m(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=No(p,f.mode,w),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function y(f,c,p,w,_){return c===null||c.tag!==7?(c=an(p,f.mode,w,_),c.return=f,c):(c=l(c,p),c.return=f,c)}function x(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ko(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case tt:return p=Sl(c.type,c.key,c.props,null,f.mode,p),p.ref=or(f,null,c),p.return=f,p;case Pe:return c=No(c,f.mode,p),c.return=f,c;case Te:var w=c._init;return x(f,w(c._payload),p)}if(An(c)||R(c))return c=an(c,f.mode,p,null),c.return=f,c;el(f,c)}return null}function v(f,c,p,w){var _=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:a(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case tt:return p.key===_?u(f,c,p,w):null;case Pe:return p.key===_?m(f,c,p,w):null;case Te:return _=p._init,v(f,c,_(p._payload),w)}if(An(p)||R(p))return _!==null?null:y(f,c,p,w,null);el(f,p)}return null}function N(f,c,p,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,a(c,f,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case tt:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,_);case Pe:return f=f.get(w.key===null?p:w.key)||null,m(c,f,w,_);case Te:var P=w._init;return N(f,c,p,P(w._payload),_)}if(An(w)||R(w))return f=f.get(p)||null,y(c,f,w,_,null);el(c,w)}return null}function C(f,c,p,w){for(var _=null,P=null,M=c,F=c=0,ke=null;M!==null&&F<p.length;F++){M.index>F?(ke=M,M=null):ke=M.sibling;var V=v(f,M,p[F],w);if(V===null){M===null&&(M=ke);break}e&&M&&V.alternate===null&&t(f,M),c=i(V,c,F),P===null?_=V:P.sibling=V,P=V,M=ke}if(F===p.length)return n(f,M),oe&&bt(f,F),_;if(M===null){for(;F<p.length;F++)M=x(f,p[F],w),M!==null&&(c=i(M,c,F),P===null?_=M:P.sibling=M,P=M);return oe&&bt(f,F),_}for(M=r(f,M);F<p.length;F++)ke=N(M,f,F,p[F],w),ke!==null&&(e&&ke.alternate!==null&&M.delete(ke.key===null?F:ke.key),c=i(ke,c,F),P===null?_=ke:P.sibling=ke,P=ke);return e&&M.forEach(function(Gt){return t(f,Gt)}),oe&&bt(f,F),_}function E(f,c,p,w){var _=R(p);if(typeof _!="function")throw Error(h(150));if(p=_.call(p),p==null)throw Error(h(151));for(var P=_=null,M=c,F=c=0,ke=null,V=p.next();M!==null&&!V.done;F++,V=p.next()){M.index>F?(ke=M,M=null):ke=M.sibling;var Gt=v(f,M,V.value,w);if(Gt===null){M===null&&(M=ke);break}e&&M&&Gt.alternate===null&&t(f,M),c=i(Gt,c,F),P===null?_=Gt:P.sibling=Gt,P=Gt,M=ke}if(V.done)return n(f,M),oe&&bt(f,F),_;if(M===null){for(;!V.done;F++,V=p.next())V=x(f,V.value,w),V!==null&&(c=i(V,c,F),P===null?_=V:P.sibling=V,P=V);return oe&&bt(f,F),_}for(M=r(f,M);!V.done;F++,V=p.next())V=N(M,f,F,V.value,w),V!==null&&(e&&V.alternate!==null&&M.delete(V.key===null?F:V.key),c=i(V,c,F),P===null?_=V:P.sibling=V,P=V);return e&&M.forEach(function(Td){return t(f,Td)}),oe&&bt(f,F),_}function me(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Fe&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case tt:e:{for(var _=p.key,P=c;P!==null;){if(P.key===_){if(_=p.type,_===Fe){if(P.tag===7){n(f,P.sibling),c=l(P,p.props.children),c.return=f,f=c;break e}}else if(P.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Te&&la(_)===P.type){n(f,P.sibling),c=l(P,p.props),c.ref=or(f,P,p),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===Fe?(c=an(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=Sl(p.type,p.key,p.props,null,f.mode,w),w.ref=or(f,c,p),w.return=f,f=w)}return s(f);case Pe:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=No(p,f.mode,w),c.return=f,f=c}return s(f);case Te:return P=p._init,me(f,c,P(p._payload),w)}if(An(p))return C(f,c,p,w);if(R(p))return E(f,c,p,w);el(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=ko(p,f.mode,w),c.return=f,f=c),s(f)):n(f,c)}return me}var En=ia(!0),oa=ia(!1),tl=Dt(null),nl=null,_n=null,Mi=null;function Ri(){Mi=_n=nl=null}function Fi(e){var t=tl.current;ne(tl),e._currentValue=t}function Ti(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){nl=e,Mi=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(De=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(Mi!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(nl===null)throw Error(h(308));_n=e,nl.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var en=null;function Li(e){en===null?en=[e]:en.push(e)}function sa(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Li(t)):(n.next=l.next,l.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Ai(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(U&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,St(e,n)}return l=r.interleaved,l===null?(t.next=t,Li(r)):(t.next=l.next,l.next=t),r.interleaved=t,St(e,n)}function rl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}function ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ll(e,t,n,r){var l=e.updateQueue;Ut=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,m=u.next;u.next=null,s===null?i=m:s.next=m,s=u;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==s&&(a===null?y.firstBaseUpdate=m:a.next=m,y.lastBaseUpdate=u))}if(i!==null){var x=l.baseState;s=0,y=m=u=null,a=i;do{var v=a.lane,N=a.eventTime;if((r&v)===v){y!==null&&(y=y.next={eventTime:N,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=e,E=a;switch(v=t,N=n,E.tag){case 1:if(C=E.payload,typeof C=="function"){x=C.call(N,x,v);break e}x=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=E.payload,v=typeof C=="function"?C.call(N,x,v):C,v==null)break e;x=S({},x,v);break e;case 2:Ut=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[a]:v.push(a))}else N={eventTime:N,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(m=y=N,u=x):y=y.next=N,s|=v;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;v=a,a=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);if(y===null&&(u=x),l.baseState=u,l.firstBaseUpdate=m,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);rn|=s,e.lanes=s,e.memoizedState=x}}function ca(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var sr={},ht=Dt(sr),ar=Dt(sr),ur=Dt(sr);function tn(e){if(e===sr)throw Error(h(174));return e}function Di(e,t){switch(b(ur,t),b(ar,e),b(ht,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Il(t,e)}ne(ht),b(ht,t)}function Pn(){ne(ht),ne(ar),ne(ur)}function da(e){tn(ur.current);var t=tn(ht.current),n=Il(t,e.type);t!==n&&(b(ar,e),b(ht,n))}function Ii(e){ar.current===e&&(ne(ht),ne(ar))}var se=Dt(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oi=[];function Ui(){for(var e=0;e<Oi.length;e++)Oi[e]._workInProgressVersionPrimary=null;Oi.length=0}var ol=Se.ReactCurrentDispatcher,Bi=Se.ReactCurrentBatchConfig,nn=0,ae=null,ge=null,xe=null,sl=!1,cr=!1,dr=0,td=0;function Ee(){throw Error(h(321))}function Hi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function $i(e,t,n,r,l,i){if(nn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ol.current=e===null||e.memoizedState===null?id:od,e=n(r,l),cr){i=0;do{if(cr=!1,dr=0,25<=i)throw Error(h(301));i+=1,xe=ge=null,t.updateQueue=null,ol.current=sd,e=n(r,l)}while(cr)}if(ol.current=cl,t=ge!==null&&ge.next!==null,nn=0,xe=ge=ae=null,sl=!1,t)throw Error(h(300));return e}function Vi(){var e=dr!==0;return dr=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ae.memoizedState=xe=e:xe=xe.next=e,xe}function Ze(){if(ge===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=xe===null?ae.memoizedState:xe.next;if(t!==null)xe=t,ge=e;else{if(e===null)throw Error(h(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},xe===null?ae.memoizedState=xe=e:xe=xe.next=e}return xe}function fr(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=Ze(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=ge,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=s=null,u=null,m=i;do{var y=m.lane;if((nn&y)===y)u!==null&&(u=u.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var x={lane:y,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};u===null?(a=u=x,s=r):u=u.next=x,ae.lanes|=y,rn|=y}m=m.next}while(m!==null&&m!==i);u===null?s=r:u.next=a,lt(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,ae.lanes|=i,rn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qi(e){var t=Ze(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);lt(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function fa(){}function pa(e,t){var n=ae,r=Ze(),l=t(),i=!lt(r.memoizedState,l);if(i&&(r.memoizedState=l,De=!0),r=r.queue,Ki(va.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,pr(9,ha.bind(null,n,r,l,t),void 0,null),we===null)throw Error(h(349));(nn&30)!==0||ma(n,t,l)}return l}function ma(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ha(e,t,n,r){t.value=n,t.getSnapshot=r,ga(t)&&ya(e)}function va(e,t,n){return n(function(){ga(t)&&ya(e)})}function ga(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function ya(e){var t=St(e,1);t!==null&&ut(t,e,1,-1)}function xa(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=ld.bind(null,ae,e),[t.memoizedState,e]}function pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wa(){return Ze().memoizedState}function al(e,t,n,r){var l=vt();ae.flags|=e,l.memoizedState=pr(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var l=Ze();r=r===void 0?null:r;var i=void 0;if(ge!==null){var s=ge.memoizedState;if(i=s.destroy,r!==null&&Hi(r,s.deps)){l.memoizedState=pr(t,n,i,r);return}}ae.flags|=e,l.memoizedState=pr(1|t,n,i,r)}function ka(e,t){return al(8390656,8,e,t)}function Ki(e,t){return ul(2048,8,e,t)}function Na(e,t){return ul(4,2,e,t)}function ja(e,t){return ul(4,4,e,t)}function Sa(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ca(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,Sa.bind(null,t,e),n)}function Gi(){}function Ea(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _a(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function za(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n):(lt(n,t)||(n=ls(),ae.lanes|=n,rn|=n,e.baseState=!0),t)}function nd(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=Bi.transition;Bi.transition={};try{e(!1),t()}finally{Y=n,Bi.transition=r}}function Pa(){return Ze().memoizedState}function rd(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ma(e))Ra(t,n);else if(n=sa(e,t,n,r),n!==null){var l=Re();ut(n,e,r,l),Fa(n,t,r)}}function ld(e,t,n){var r=Wt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ma(e))Ra(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(l.hasEagerState=!0,l.eagerState=a,lt(a,s)){var u=t.interleaved;u===null?(l.next=l,Li(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=sa(e,t,l,r),n!==null&&(l=Re(),ut(n,e,r,l),Fa(n,t,r))}}function Ma(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Ra(e,t){cr=sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fa(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}var cl={readContext:qe,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},id={readContext:qe,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:ka,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,al(4194308,4,Sa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){return al(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rd.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:xa,useDebugValue:Gi,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=xa(!1),t=e[0];return e=nd.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,l=vt();if(oe){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),we===null)throw Error(h(349));(nn&30)!==0||ma(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ka(va.bind(null,r,i,e),[e]),r.flags|=2048,pr(9,ha.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vt(),t=we.identifierPrefix;if(oe){var n=jt,r=Nt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=td++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},od={readContext:qe,useCallback:Ea,useContext:qe,useEffect:Ki,useImperativeHandle:Ca,useInsertionEffect:Na,useLayoutEffect:ja,useMemo:_a,useReducer:Wi,useRef:wa,useState:function(){return Wi(fr)},useDebugValue:Gi,useDeferredValue:function(e){var t=Ze();return za(t,ge.memoizedState,e)},useTransition:function(){var e=Wi(fr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:fa,useSyncExternalStore:pa,useId:Pa,unstable_isNewReconciler:!1},sd={readContext:qe,useCallback:Ea,useContext:qe,useEffect:Ki,useImperativeHandle:Ca,useInsertionEffect:Na,useLayoutEffect:ja,useMemo:_a,useReducer:Qi,useRef:wa,useState:function(){return Qi(fr)},useDebugValue:Gi,useDeferredValue:function(e){var t=Ze();return ge===null?t.memoizedState=e:za(t,ge.memoizedState,e)},useTransition:function(){var e=Qi(fr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:fa,useSyncExternalStore:pa,useId:Pa,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=S({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),l=Wt(e),i=Ct(r,l);i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,l),t!==null&&(ut(t,e,l,r),rl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),l=Wt(e),i=Ct(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,l),t!==null&&(ut(t,e,l,r),rl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=Wt(e),l=Ct(n,r);l.tag=2,t!=null&&(l.callback=t),t=Bt(e,l,r),t!==null&&(ut(t,e,r,n),rl(t,e,r))}};function Ta(e,t,n,r,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!bn(n,r)||!bn(l,i):!0}function La(e,t,n){var r=!1,l=It,i=t.contextType;return typeof i=="object"&&i!==null?i=qe(i):(l=Ae(t)?Zt:Ce.current,r=t.contextTypes,i=(r=r!=null)?Nn(e,l):It),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Aa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function Xi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ai(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=qe(i):(i=Ae(t)?Zt:Ce.current,l.context=Nn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Yi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&dl.enqueueReplaceState(l,l.state,null),ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Mn(e,t){try{var n="",r=t;do n+=H(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function Da(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yl||(yl=!0,po=r),Zi(e,t)},n}function Ia(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Zi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zi(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Oa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ad;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Nd.bind(null,e,t,n),t.then(e,e))}function Ua(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ba(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var ud=Se.ReactCurrentOwner,De=!1;function Me(e,t,n,r){t.child=e===null?oa(t,null,n,r):En(t,e.child,n,r)}function Ha(e,t,n,r,l){n=n.render;var i=t.ref;return zn(t,l),r=$i(e,t,n,r,i,l),n=Vi(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(oe&&n&&Ci(t),t.flags|=1,Me(e,t,r,l),t.child)}function $a(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!wo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Va(e,t,i,r,l)):(e=Sl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:bn,n(s,r)&&e.ref===t.ref)return Et(e,t,l)}return t.flags|=1,e=Kt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Va(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(bn(i,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(De=!0);else return t.lanes=e.lanes,Et(e,t,l)}return Ji(e,t,n,r,l)}function Wa(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(Fn,Ke),Ke|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(Fn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,b(Fn,Ke),Ke|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,b(Fn,Ke),Ke|=r;return Me(e,t,l,n),t.child}function Qa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ji(e,t,n,r,l){var i=Ae(n)?Zt:Ce.current;return i=Nn(t,i),zn(t,l),n=$i(e,t,n,r,i,l),r=Vi(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(oe&&r&&Ci(t),t.flags|=1,Me(e,t,n,l),t.child)}function Ka(e,t,n,r,l){if(Ae(n)){var i=!0;Xr(t)}else i=!1;if(zn(t,l),t.stateNode===null)pl(e,t),La(t,n,r),Xi(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,m=n.contextType;typeof m=="object"&&m!==null?m=qe(m):(m=Ae(n)?Zt:Ce.current,m=Nn(t,m));var y=n.getDerivedStateFromProps,x=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function";x||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==m)&&Aa(t,s,r,m),Ut=!1;var v=t.memoizedState;s.state=v,ll(t,r,s,l),u=t.memoizedState,a!==r||v!==u||Le.current||Ut?(typeof y=="function"&&(Yi(t,n,y,r),u=t.memoizedState),(a=Ut||Ta(t,n,a,r,v,u,m))?(x||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=m,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,aa(e,t),a=t.memoizedProps,m=t.type===t.elementType?a:ot(t.type,a),s.props=m,x=t.pendingProps,v=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=qe(u):(u=Ae(n)?Zt:Ce.current,u=Nn(t,u));var N=n.getDerivedStateFromProps;(y=typeof N=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==x||v!==u)&&Aa(t,s,r,u),Ut=!1,v=t.memoizedState,s.state=v,ll(t,r,s,l);var C=t.memoizedState;a!==x||v!==C||Le.current||Ut?(typeof N=="function"&&(Yi(t,n,N,r),C=t.memoizedState),(m=Ut||Ta(t,n,m,r,v,C,u)||!1)?(y||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,C,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,C,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),s.props=r,s.state=C,s.context=u,r=m):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return bi(e,t,n,r,i,l)}function bi(e,t,n,r,l,i){Qa(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&Zs(t,n,!1),Et(e,t,i);r=t.stateNode,ud.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=En(t,e.child,null,i),t.child=En(t,null,a,i)):Me(e,t,a,i),t.memoizedState=r.state,l&&Zs(t,n,!0),t.child}function Ga(e){var t=e.stateNode;t.pendingContext?Xs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xs(e,t.context,!1),Di(e,t.containerInfo)}function Ya(e,t,n,r,l){return Cn(),Pi(l),t.flags|=256,Me(e,t,n,r),t.child}var eo={dehydrated:null,treeContext:null,retryLane:0};function to(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xa(e,t,n){var r=t.pendingProps,l=se.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),b(se,l&1),e===null)return zi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Cl(s,r,0,null),e=an(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=to(n),t.memoizedState=eo,e):no(t,s));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return cd(e,t,s,r,a,l,n);if(i){i=r.fallback,s=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Kt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=Kt(a,i):(i=an(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?to(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=eo,r}return i=e.child,e=i.sibling,r=Kt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function no(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fl(e,t,n,r){return r!==null&&Pi(r),En(t,e.child,null,n),e=no(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cd(e,t,n,r,l,i,s){if(n)return t.flags&256?(t.flags&=-257,r=qi(Error(h(422))),fl(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Cl({mode:"visible",children:r.children},l,0,null),i=an(i,l,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&En(t,e.child,null,s),t.child.memoizedState=to(s),t.memoizedState=eo,i);if((t.mode&1)===0)return fl(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(h(419)),r=qi(i,r,void 0),fl(e,t,s,r)}if(a=(s&e.childLanes)!==0,De||a){if(r=we,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|s))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,St(e,l),ut(r,e,l,-1))}return xo(),r=qi(Error(h(421))),fl(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=jd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Qe=At(l.nextSibling),We=t,oe=!0,it=null,e!==null&&(Ye[Xe++]=Nt,Ye[Xe++]=jt,Ye[Xe++]=Jt,Nt=e.id,jt=e.overflow,Jt=t),t=no(t,r.children),t.flags|=4096,t)}function qa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ti(e.return,t,n)}function ro(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Za(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Me(e,t,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qa(e,n,t);else if(e.tag===19)qa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(se,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ro(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&il(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ro(t,!0,n,null,i);break;case"together":ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dd(e,t,n){switch(t.tag){case 3:Ga(t),Cn();break;case 5:da(t);break;case 1:Ae(t.type)&&Xr(t);break;case 4:Di(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;b(tl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(se,se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Xa(e,t,n):(b(se,se.current&1),e=Et(e,t,n),e!==null?e.sibling:null);b(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Za(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),b(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Wa(e,t,n)}return Et(e,t,n)}var Ja,lo,ba,eu;Ja=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},lo=function(){},ba=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,tn(ht.current);var i=null;switch(n){case"input":l=Tl(e,l),r=Tl(e,r),i=[];break;case"select":l=S({},l,{value:void 0}),r=S({},r,{value:void 0}),i=[];break;case"textarea":l=Dl(e,l),r=Dl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kr)}Ol(n,r);var s;n=null;for(m in l)if(!r.hasOwnProperty(m)&&l.hasOwnProperty(m)&&l[m]!=null)if(m==="style"){var a=l[m];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(I.hasOwnProperty(m)?i||(i=[]):(i=i||[]).push(m,null));for(m in r){var u=r[m];if(a=l!=null?l[m]:void 0,r.hasOwnProperty(m)&&u!==a&&(u!=null||a!=null))if(m==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(m,n)),n=u;else m==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(m,u)):m==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(m,""+u):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(I.hasOwnProperty(m)?(u!=null&&m==="onScroll"&&te("scroll",e),i||a===u||(i=[])):(i=i||[]).push(m,u))}n&&(i=i||[]).push("style",n);var m=i;(t.updateQueue=m)&&(t.flags|=4)}},eu=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fd(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Ae(t.type)&&Yr(),_e(t),null;case 3:return r=t.stateNode,Pn(),ne(Le),ne(Ce),Ui(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(vo(it),it=null))),lo(e,t),_e(t),null;case 5:Ii(t);var l=tn(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)ba(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return _e(t),null}if(e=tn(ht.current),br(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[lr]=i,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(l=0;l<tr.length;l++)te(tr[l],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Lo(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":Io(r,i),te("invalid",r)}Ol(n,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,a,e),l=["children",""+a]):I.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&te("scroll",r)}switch(n){case"input":Nr(r),Do(r,i,!0);break;case"textarea":Nr(r),Uo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Kr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[mt]=t,e[lr]=r,Ja(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ul(n,r),n){case"dialog":te("cancel",e),te("close",e),l=r;break;case"iframe":case"object":case"embed":te("load",e),l=r;break;case"video":case"audio":for(l=0;l<tr.length;l++)te(tr[l],e);l=r;break;case"source":te("error",e),l=r;break;case"img":case"image":case"link":te("error",e),te("load",e),l=r;break;case"details":te("toggle",e),l=r;break;case"input":Lo(e,r),l=Tl(e,r),te("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=S({},r,{value:void 0}),te("invalid",e);break;case"textarea":Io(e,r),l=Dl(e,r),te("invalid",e);break;default:l=r}Ol(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Vo(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ho(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dn(e,u):typeof u=="number"&&Dn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(I.hasOwnProperty(i)?u!=null&&i==="onScroll"&&te("scroll",e):u!=null&&et(e,i,u,s))}switch(n){case"input":Nr(e),Do(e,r,!1);break;case"textarea":Nr(e),Uo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+G(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?cn(e,!!r.multiple,i,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Kr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)eu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=tn(ur.current),tn(ht.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:Qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return _e(t),null;case 13:if(ne(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ra(),Cn(),t.flags|=98560,i=!1;else if(i=br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[mt]=t}else Cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else it!==null&&(vo(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(se.current&1)!==0?ye===0&&(ye=3):xo())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return Pn(),lo(e,t),e===null&&nr(t.stateNode.containerInfo),_e(t),null;case 10:return Fi(t.type._context),_e(t),null;case 17:return Ae(t.type)&&Yr(),_e(t),null;case 19:if(ne(se),i=t.memoizedState,i===null)return _e(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)mr(i,!1);else{if(ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=il(e),s!==null){for(t.flags|=128,mr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&pe()>Tn&&(t.flags|=128,r=!0,mr(i,!1),t.lanes=4194304)}else{if(!r)if(e=il(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!oe)return _e(t),null}else 2*pe()-i.renderingStartTime>Tn&&n!==1073741824&&(t.flags|=128,r=!0,mr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pe(),t.sibling=null,n=se.current,b(se,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return yo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ke&1073741824)!==0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function pd(e,t){switch(Ei(t),t.tag){case 1:return Ae(t.type)&&Yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),ne(Le),ne(Ce),Ui(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ii(t),null;case 13:if(ne(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(se),null;case 4:return Pn(),null;case 10:return Fi(t.type._context),null;case 22:case 23:return yo(),null;case 24:return null;default:return null}}var ml=!1,ze=!1,md=typeof WeakSet=="function"?WeakSet:Set,j=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function io(e,t,n){try{n()}catch(r){fe(e,t,r)}}var tu=!1;function hd(e,t){if(gi=Lr,e=Ts(),ui(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,m=0,y=0,x=e,v=null;t:for(;;){for(var N;x!==n||l!==0&&x.nodeType!==3||(a=s+l),x!==i||r!==0&&x.nodeType!==3||(u=s+r),x.nodeType===3&&(s+=x.nodeValue.length),(N=x.firstChild)!==null;)v=x,x=N;for(;;){if(x===e)break t;if(v===n&&++m===l&&(a=s),v===i&&++y===r&&(u=s),(N=x.nextSibling)!==null)break;x=v,v=x.parentNode}x=N}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yi={focusedElem:e,selectionRange:n},Lr=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var C=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var E=C.memoizedProps,me=C.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?E:ot(t.type,E),me);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){fe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return C=tu,tu=!1,C}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&io(t,n,i)}l=l.next}while(l!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nu(e){var t=e.alternate;t!==null&&(e.alternate=null,nu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[lr],delete t[Ni],delete t[Zc],delete t[Jc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ru(e){return e.tag===5||e.tag===3||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function so(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kr));else if(r!==4&&(e=e.child,e!==null))for(so(e,t,n),e=e.sibling;e!==null;)so(e,t,n),e=e.sibling}function ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ao(e,t,n),e=e.sibling;e!==null;)ao(e,t,n),e=e.sibling}var Ne=null,st=!1;function Ht(e,t,n){for(n=n.child;n!==null;)iu(e,t,n),n=n.sibling}function iu(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(zr,n)}catch{}switch(n.tag){case 5:ze||Rn(n,t);case 6:var r=Ne,l=st;Ne=null,Ht(e,t,n),Ne=r,st=l,Ne!==null&&(st?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(st?(e=Ne,n=n.stateNode,e.nodeType===8?ki(e.parentNode,n):e.nodeType===1&&ki(e,n),Gn(e)):ki(Ne,n.stateNode));break;case 4:r=Ne,l=st,Ne=n.stateNode.containerInfo,st=!0,Ht(e,t,n),Ne=r,st=l;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&io(n,t,s),l=l.next}while(l!==r)}Ht(e,t,n);break;case 1:if(!ze&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Ht(e,t,n),ze=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new md),t.forEach(function(r){var l=Sd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,st=!1;break e;case 3:Ne=a.stateNode.containerInfo,st=!0;break e;case 4:Ne=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(Ne===null)throw Error(h(160));iu(i,s,l),Ne=null,st=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(m){fe(l,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)su(t,e),t=t.sibling}function su(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),gt(e),r&4){try{hr(3,e,e.return),hl(3,e)}catch(E){fe(e,e.return,E)}try{hr(5,e,e.return)}catch(E){fe(e,e.return,E)}}break;case 1:at(t,e),gt(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(at(t,e),gt(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(E){fe(e,e.return,E)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ao(l,i),Ul(a,s);var m=Ul(a,i);for(s=0;s<u.length;s+=2){var y=u[s],x=u[s+1];y==="style"?Vo(l,x):y==="dangerouslySetInnerHTML"?Ho(l,x):y==="children"?Dn(l,x):et(l,y,x,m)}switch(a){case"input":Ll(l,i);break;case"textarea":Oo(l,i);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var N=i.value;N!=null?cn(l,!!i.multiple,N,!1):v!==!!i.multiple&&(i.defaultValue!=null?cn(l,!!i.multiple,i.defaultValue,!0):cn(l,!!i.multiple,i.multiple?[]:"",!1))}l[lr]=i}catch(E){fe(e,e.return,E)}}break;case 6:if(at(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(E){fe(e,e.return,E)}}break;case 3:if(at(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(E){fe(e,e.return,E)}break;case 4:at(t,e),gt(e);break;case 13:at(t,e),gt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(fo=pe())),r&4&&ou(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(m=ze)||y,at(t,e),ze=m):at(t,e),gt(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!y&&(e.mode&1)!==0)for(j=e,y=e.child;y!==null;){for(x=j=y;j!==null;){switch(v=j,N=v.child,v.tag){case 0:case 11:case 14:case 15:hr(4,v,v.return);break;case 1:Rn(v,v.return);var C=v.stateNode;if(typeof C.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(E){fe(r,n,E)}}break;case 5:Rn(v,v.return);break;case 22:if(v.memoizedState!==null){cu(x);continue}}N!==null?(N.return=v,j=N):cu(x)}y=y.sibling}e:for(y=null,x=e;;){if(x.tag===5){if(y===null){y=x;try{l=x.stateNode,m?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=x.stateNode,u=x.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=$o("display",s))}catch(E){fe(e,e.return,E)}}}else if(x.tag===6){if(y===null)try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(E){fe(e,e.return,E)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;y===x&&(y=null),x=x.return}y===x&&(y=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:at(t,e),gt(e),r&4&&ou(e);break;case 21:break;default:at(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ru(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var i=lu(e);ao(e,i,l);break;case 3:case 4:var s=r.stateNode.containerInfo,a=lu(e);so(e,a,s);break;default:throw Error(h(161))}}catch(u){fe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vd(e,t,n){j=e,au(e)}function au(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||ml;if(!s){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ze;a=ml;var m=ze;if(ml=s,(ze=u)&&!m)for(j=l;j!==null;)s=j,u=s.child,s.tag===22&&s.memoizedState!==null?du(l):u!==null?(u.return=s,j=u):du(l);for(;i!==null;)j=i,au(i),i=i.sibling;j=l,ml=a,ze=m}uu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,j=i):uu(e)}}function uu(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ze||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ca(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ca(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var y=m.memoizedState;if(y!==null){var x=y.dehydrated;x!==null&&Gn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}ze||t.flags&512&&oo(t)}catch(v){fe(t,t.return,v)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function cu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function du(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(u){fe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){fe(t,l,u)}}var i=t.return;try{oo(t)}catch(u){fe(t,i,u)}break;case 5:var s=t.return;try{oo(t)}catch(u){fe(t,s,u)}}}catch(u){fe(t,t.return,u)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var gd=Math.ceil,vl=Se.ReactCurrentDispatcher,uo=Se.ReactCurrentOwner,Je=Se.ReactCurrentBatchConfig,U=0,we=null,he=null,je=0,Ke=0,Fn=Dt(0),ye=0,vr=null,rn=0,gl=0,co=0,gr=null,Ie=null,fo=0,Tn=1/0,_t=null,yl=!1,po=null,$t=null,xl=!1,Vt=null,wl=0,yr=0,mo=null,kl=-1,Nl=0;function Re(){return(U&6)!==0?pe():kl!==-1?kl:kl=pe()}function Wt(e){return(e.mode&1)===0?1:(U&2)!==0&&je!==0?je&-je:ed.transition!==null?(Nl===0&&(Nl=ls()),Nl):(e=Y,e!==0||(e=window.event,e=e===void 0?16:ps(e.type)),e)}function ut(e,t,n,r){if(50<yr)throw yr=0,mo=null,Error(h(185));$n(e,n,r),((U&2)===0||e!==we)&&(e===we&&((U&2)===0&&(gl|=n),ye===4&&Qt(e,je)),Oe(e,r),n===1&&U===0&&(t.mode&1)===0&&(Tn=pe()+500,qr&&Ot()))}function Oe(e,t){var n=e.callbackNode;ec(e,t);var r=Rr(e,e===we?je:0);if(r===0)n!==null&&ts(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ts(n),t===1)e.tag===0?bc(pu.bind(null,e)):Js(pu.bind(null,e)),Xc(function(){(U&6)===0&&Ot()}),n=null;else{switch(is(r)){case 1:n=Kl;break;case 4:n=ns;break;case 16:n=_r;break;case 536870912:n=rs;break;default:n=_r}n=ku(n,fu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fu(e,t){if(kl=-1,Nl=0,(U&6)!==0)throw Error(h(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var r=Rr(e,e===we?je:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=jl(e,r);else{t=r;var l=U;U|=2;var i=hu();(we!==e||je!==t)&&(_t=null,Tn=pe()+500,on(e,t));do try{wd();break}catch(a){mu(e,a)}while(!0);Ri(),vl.current=i,U=l,he!==null?t=0:(we=null,je=0,t=ye)}if(t!==0){if(t===2&&(l=Gl(e),l!==0&&(r=l,t=ho(e,l))),t===1)throw n=vr,on(e,0),Qt(e,r),Oe(e,pe()),n;if(t===6)Qt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!yd(l)&&(t=jl(e,r),t===2&&(i=Gl(e),i!==0&&(r=i,t=ho(e,i))),t===1))throw n=vr,on(e,0),Qt(e,r),Oe(e,pe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:sn(e,Ie,_t);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=fo+500-pe(),10<t)){if(Rr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=wi(sn.bind(null,e,Ie,_t),t);break}sn(e,Ie,_t);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-rt(r);i=1<<s,s=t[s],s>l&&(l=s),r&=~i}if(r=l,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gd(r/1960))-r,10<r){e.timeoutHandle=wi(sn.bind(null,e,Ie,_t),r);break}sn(e,Ie,_t);break;case 5:sn(e,Ie,_t);break;default:throw Error(h(329))}}}return Oe(e,pe()),e.callbackNode===n?fu.bind(null,e):null}function ho(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=jl(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&vo(t)),e}function vo(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function yd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!lt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~co,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function pu(e){if((U&6)!==0)throw Error(h(327));Ln();var t=Rr(e,0);if((t&1)===0)return Oe(e,pe()),null;var n=jl(e,t);if(e.tag!==0&&n===2){var r=Gl(e);r!==0&&(t=r,n=ho(e,r))}if(n===1)throw n=vr,on(e,0),Qt(e,t),Oe(e,pe()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Ie,_t),Oe(e,pe()),null}function go(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Tn=pe()+500,qr&&Ot())}}function ln(e){Vt!==null&&Vt.tag===0&&(U&6)===0&&Ln();var t=U;U|=1;var n=Je.transition,r=Y;try{if(Je.transition=null,Y=1,e)return e()}finally{Y=r,Je.transition=n,U=t,(U&6)===0&&Ot()}}function yo(){Ke=Fn.current,ne(Fn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yc(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(Ei(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yr();break;case 3:Pn(),ne(Le),ne(Ce),Ui();break;case 5:Ii(r);break;case 4:Pn();break;case 13:ne(se);break;case 19:ne(se);break;case 10:Fi(r.type._context);break;case 22:case 23:yo()}n=n.return}if(we=e,he=e=Kt(e.current,null),je=Ke=t,ye=0,vr=null,co=gl=rn=0,Ie=gr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=l,r.next=s}n.pending=r}en=null}return e}function mu(e,t){do{var n=he;try{if(Ri(),ol.current=cl,sl){for(var r=ae.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}sl=!1}if(nn=0,xe=ge=ae=null,cr=!1,dr=0,uo.current=null,n===null||n.return===null){ye=1,vr=t,he=null;break}e:{var i=e,s=n.return,a=n,u=t;if(t=je,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var m=u,y=a,x=y.tag;if((y.mode&1)===0&&(x===0||x===11||x===15)){var v=y.alternate;v?(y.updateQueue=v.updateQueue,y.memoizedState=v.memoizedState,y.lanes=v.lanes):(y.updateQueue=null,y.memoizedState=null)}var N=Ua(s);if(N!==null){N.flags&=-257,Ba(N,s,a,i,t),N.mode&1&&Oa(i,m,t),t=N,u=m;var C=t.updateQueue;if(C===null){var E=new Set;E.add(u),t.updateQueue=E}else C.add(u);break e}else{if((t&1)===0){Oa(i,m,t),xo();break e}u=Error(h(426))}}else if(oe&&a.mode&1){var me=Ua(s);if(me!==null){(me.flags&65536)===0&&(me.flags|=256),Ba(me,s,a,i,t),Pi(Mn(u,a));break e}}i=u=Mn(u,a),ye!==4&&(ye=2),gr===null?gr=[i]:gr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Da(i,u,t);ua(i,f);break e;case 1:a=u;var c=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&($t===null||!$t.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Ia(i,a,t);ua(i,w);break e}}i=i.return}while(i!==null)}gu(n)}catch(_){t=_,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function hu(){var e=vl.current;return vl.current=cl,e===null?cl:e}function xo(){(ye===0||ye===3||ye===2)&&(ye=4),we===null||(rn&268435455)===0&&(gl&268435455)===0||Qt(we,je)}function jl(e,t){var n=U;U|=2;var r=hu();(we!==e||je!==t)&&(_t=null,on(e,t));do try{xd();break}catch(l){mu(e,l)}while(!0);if(Ri(),U=n,vl.current=r,he!==null)throw Error(h(261));return we=null,je=0,ye}function xd(){for(;he!==null;)vu(he)}function wd(){for(;he!==null&&!Qu();)vu(he)}function vu(e){var t=wu(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?gu(e):he=t,uo.current=null}function gu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=fd(n,t,Ke),n!==null){he=n;return}}else{if(n=pd(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,he=null;return}}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ye===0&&(ye=5)}function sn(e,t,n){var r=Y,l=Je.transition;try{Je.transition=null,Y=1,kd(e,t,n,r)}finally{Je.transition=l,Y=r}return null}function kd(e,t,n,r){do Ln();while(Vt!==null);if((U&6)!==0)throw Error(h(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(tc(e,i),e===we&&(he=we=null,je=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||xl||(xl=!0,ku(_r,function(){return Ln(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Je.transition,Je.transition=null;var s=Y;Y=1;var a=U;U|=4,uo.current=null,hd(e,n),su(n,e),Hc(yi),Lr=!!gi,yi=gi=null,e.current=n,vd(n),Ku(),U=a,Y=s,Je.transition=i}else e.current=n;if(xl&&(xl=!1,Vt=e,wl=l),i=e.pendingLanes,i===0&&($t=null),Xu(n.stateNode),Oe(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(yl)throw yl=!1,e=po,po=null,e;return(wl&1)!==0&&e.tag!==0&&Ln(),i=e.pendingLanes,(i&1)!==0?e===mo?yr++:(yr=0,mo=e):yr=0,Ot(),null}function Ln(){if(Vt!==null){var e=is(wl),t=Je.transition,n=Y;try{if(Je.transition=null,Y=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,wl=0,(U&6)!==0)throw Error(h(331));var l=U;for(U|=4,j=e.current;j!==null;){var i=j,s=i.child;if((j.flags&16)!==0){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var m=a[u];for(j=m;j!==null;){var y=j;switch(y.tag){case 0:case 11:case 15:hr(8,y,i)}var x=y.child;if(x!==null)x.return=y,j=x;else for(;j!==null;){y=j;var v=y.sibling,N=y.return;if(nu(y),y===m){j=null;break}if(v!==null){v.return=N,j=v;break}j=N}}}var C=i.alternate;if(C!==null){var E=C.child;if(E!==null){C.child=null;do{var me=E.sibling;E.sibling=null,E=me}while(E!==null)}}j=i}}if((i.subtreeFlags&2064)!==0&&s!==null)s.return=i,j=s;else e:for(;j!==null;){if(i=j,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:hr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var c=e.current;for(j=c;j!==null;){s=j;var p=s.child;if((s.subtreeFlags&2064)!==0&&p!==null)p.return=s,j=p;else e:for(s=c;j!==null;){if(a=j,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:hl(9,a)}}catch(_){fe(a,a.return,_)}if(a===s){j=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,j=w;break e}j=a.return}}if(U=l,Ot(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(zr,e)}catch{}r=!0}return r}finally{Y=n,Je.transition=t}}return!1}function yu(e,t,n){t=Mn(n,t),t=Da(e,t,1),e=Bt(e,t,1),t=Re(),e!==null&&($n(e,1,t),Oe(e,t))}function fe(e,t,n){if(e.tag===3)yu(e,e,n);else for(;t!==null;){if(t.tag===3){yu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=Mn(n,e),e=Ia(t,e,1),t=Bt(t,e,1),e=Re(),t!==null&&($n(t,1,e),Oe(t,e));break}}t=t.return}}function Nd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(je&n)===n&&(ye===4||ye===3&&(je&130023424)===je&&500>pe()-fo?on(e,0):co|=n),Oe(e,t)}function xu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Mr,Mr<<=1,(Mr&130023424)===0&&(Mr=4194304)));var n=Re();e=St(e,t),e!==null&&($n(e,t,n),Oe(e,n))}function jd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xu(e,n)}function Sd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),xu(e,n)}var wu;wu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)De=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return De=!1,dd(e,t,n);De=(e.flags&131072)!==0}else De=!1,oe&&(t.flags&1048576)!==0&&bs(t,Jr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;pl(e,t),e=t.pendingProps;var l=Nn(t,Ce.current);zn(t,n),l=$i(null,t,r,e,l,n);var i=Vi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(i=!0,Xr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ai(t),l.updater=dl,t.stateNode=l,l._reactInternals=t,Xi(t,r,e,n),t=bi(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&Ci(t),Me(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(pl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Ed(r),e=ot(r,e),l){case 0:t=Ji(null,t,r,e,n);break e;case 1:t=Ka(null,t,r,e,n);break e;case 11:t=Ha(null,t,r,e,n);break e;case 14:t=$a(null,t,r,ot(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ji(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ka(e,t,r,l,n);case 3:e:{if(Ga(t),e===null)throw Error(h(387));r=t.pendingProps,i=t.memoizedState,l=i.element,aa(e,t),ll(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Mn(Error(h(423)),t),t=Ya(e,t,r,n,l);break e}else if(r!==l){l=Mn(Error(h(424)),t),t=Ya(e,t,r,n,l);break e}else for(Qe=At(t.stateNode.containerInfo.firstChild),We=t,oe=!0,it=null,n=oa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),r===l){t=Et(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return da(t),e===null&&zi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,xi(r,l)?s=null:i!==null&&xi(r,i)&&(t.flags|=32),Qa(e,t),Me(e,t,s,n),t.child;case 6:return e===null&&zi(t),null;case 13:return Xa(e,t,n);case 4:return Di(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ha(e,t,r,l,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,b(tl,r._currentValue),r._currentValue=s,i!==null)if(lt(i.value,s)){if(i.children===l.children&&!Le.current){t=Et(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ct(-1,n&-n),u.tag=2;var m=i.updateQueue;if(m!==null){m=m.shared;var y=m.pending;y===null?u.next=u:(u.next=y.next,y.next=u),m.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ti(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(h(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ti(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Me(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,zn(t,n),l=qe(l),r=r(l),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,l=ot(r,t.pendingProps),l=ot(r.type,l),$a(e,t,r,l,n);case 15:return Va(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),pl(e,t),t.tag=1,Ae(r)?(e=!0,Xr(t)):e=!1,zn(t,n),La(t,r,l),Xi(t,r,l,n),bi(null,t,r,!0,e,n);case 19:return Za(e,t,n);case 22:return Wa(e,t,n)}throw Error(h(156,t.tag))};function ku(e,t){return es(e,t)}function Cd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new Cd(e,t,n,r)}function wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ed(e){if(typeof e=="function")return wo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dt)return 11;if(e===ft)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sl(e,t,n,r,l,i){var s=2;if(r=e,typeof e=="function")wo(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Fe:return an(n.children,l,i,t);case Ge:s=8,l|=8;break;case zt:return e=be(12,n,t,l|2),e.elementType=zt,e.lanes=i,e;case He:return e=be(13,n,t,l),e.elementType=He,e.lanes=i,e;case nt:return e=be(19,n,t,l),e.elementType=nt,e.lanes=i,e;case de:return Cl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xt:s=10;break e;case Yt:s=9;break e;case dt:s=11;break e;case ft:s=14;break e;case Te:s=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=be(s,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function an(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=be(22,e,r,t),e.elementType=de,e.lanes=n,e.stateNode={isHidden:!1},e}function ko(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function No(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _d(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function jo(e,t,n,r,l,i,s,a,u){return e=new _d(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ai(i),e}function zd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nu(e){if(!e)return It;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Ae(n))return qs(e,n,t)}return t}function ju(e,t,n,r,l,i,s,a,u){return e=jo(n,r,!0,e,l,i,s,a,u),e.context=Nu(null),n=e.current,r=Re(),l=Wt(n),i=Ct(r,l),i.callback=t??null,Bt(n,i,l),e.current.lanes=l,$n(e,l,r),Oe(e,r),e}function El(e,t,n,r){var l=t.current,i=Re(),s=Wt(l);return n=Nu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(l,t,s),e!==null&&(ut(e,l,s,i),rl(e,l,s)),s}function _l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function So(e,t){Su(e,t),(e=e.alternate)&&Su(e,t)}function Pd(){return null}var Cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Co(e){this._internalRoot=e}zl.prototype.render=Co.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));El(e,t,null,null)},zl.prototype.unmount=Co.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){El(null,e,null,null)}),t[wt]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=as();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&ds(e)}};function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function Md(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var m=_l(s);i.call(m)}}var s=ju(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=s,e[wt]=s.current,nr(e.nodeType===8?e.parentNode:e),ln(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var m=_l(u);a.call(m)}}var u=jo(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=u,e[wt]=u.current,nr(e.nodeType===8?e.parentNode:e),ln(function(){El(t,u,n,r)}),u}function Ml(e,t,n,r,l){var i=n._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var a=l;l=function(){var u=_l(s);a.call(u)}}El(t,s,e,l)}else s=Md(n,t,e,l,r);return _l(s)}os=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hn(t.pendingLanes);n!==0&&(Xl(t,n|1),Oe(t,pe()),(U&6)===0&&(Tn=pe()+500,Ot()))}break;case 13:ln(function(){var r=St(e,1);if(r!==null){var l=Re();ut(r,e,1,l)}}),So(e,1)}},ql=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=Re();ut(t,e,134217728,n)}So(e,134217728)}},ss=function(e){if(e.tag===13){var t=Wt(e),n=St(e,t);if(n!==null){var r=Re();ut(n,e,t,r)}So(e,t)}},as=function(){return Y},us=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}},$l=function(e,t,n){switch(t){case"input":if(Ll(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Gr(r);if(!l)throw Error(h(90));To(r),Ll(r,l)}}}break;case"textarea":Oo(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}},Go=go,Yo=ln;var Rd={usingClientEntryPoint:!1,Events:[ir,wn,Gr,Qo,Ko,go]},xr={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fd={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jo(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||Pd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{zr=Rl.inject(Fd),pt=Rl}catch{}}return Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rd,Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eo(t))throw Error(h(200));return zd(e,t,null,n)},Ue.createRoot=function(e,t){if(!Eo(e))throw Error(h(299));var n=!1,r="",l=Cu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=jo(e,1,!1,null,null,n,!1,r,l),e[wt]=t.current,nr(e.nodeType===8?e.parentNode:e),new Co(t)},Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Jo(t),e=e===null?null:e.stateNode,e},Ue.flushSync=function(e){return ln(e)},Ue.hydrate=function(e,t,n){if(!Pl(t))throw Error(h(200));return Ml(null,e,t,!0,n)},Ue.hydrateRoot=function(e,t,n){if(!Eo(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",s=Cu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ju(t,null,e,1,n??null,l,!1,i,s),e[wt]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new zl(t)},Ue.render=function(e,t,n){if(!Pl(t))throw Error(h(200));return Ml(null,e,t,!1,n)},Ue.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(h(40));return e._reactRootContainer?(ln(function(){Ml(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1},Ue.unstable_batchedUpdates=go,Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pl(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Ml(e,t,n,!1,r)},Ue.version="18.3.1-next-f1338f8080-20240426",Ue}var Lu;function Hd(){if(Lu)return Po.exports;Lu=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(T){console.error(T)}}return z(),Po.exports=Bd(),Po.exports}var Au;function $d(){if(Au)return Fl;Au=1;var z=Hd();return Fl.createRoot=z.createRoot,Fl.hydrateRoot=z.hydrateRoot,Fl}var Vd=$d();const Wd=Du(Vd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Iu=(...z)=>z.filter((T,h,W)=>!!T&&T.trim()!==""&&W.indexOf(T)===h).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=Be.forwardRef(({color:z="currentColor",size:T=24,strokeWidth:h=2,absoluteStrokeWidth:W,className:I="",children:B,iconNode:ee,...re},O)=>Be.createElement("svg",{ref:O,...Kd,width:T,height:T,stroke:z,strokeWidth:W?Number(h)*24/Number(T):h,className:Iu("lucide",I),...re},[...ee.map(([ve,ue])=>Be.createElement(ve,ue)),...Array.isArray(B)?B:[B]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(z,T)=>{const h=Be.forwardRef(({className:W,...I},B)=>Be.createElement(Gd,{ref:B,iconNode:T,className:Iu(`lucide-${Qd(z)}`,W),...I}));return h.displayName=`${z}`,h};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],un=X("ArrowRight",Yd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],kr=X("ArrowUpRight",Xd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],Zd=X("Atom",qd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],bd=X("Award",Jd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],tf=X("Building2",ef);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],rf=X("ChevronLeft",nf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],of=X("ChevronRight",lf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],af=X("Compass",sf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]],cf=X("Dna",uf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],ff=X("Download",df);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],mf=X("Facebook",pf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],vf=X("GraduationCap",hf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]],yf=X("HeartPulse",gf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],wf=X("House",xf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Nf=X("Instagram",kf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]],Sf=X("Laptop",jf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],Ef=X("Library",Cf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],zf=X("Linkedin",_f);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Mf=X("Mail",Pf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Ff=X("Menu",Rf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],Lf=X("Microscope",Tf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Df=X("Phone",Af);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]],Of=X("Radiation",If);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],Bf=X("Trees",Uf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],$f=X("Trophy",Hf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Wf=X("Twitter",Vf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Kf=X("X",Qf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Yf=X("Youtube",Gf);function Xf(){const[z,T]=Be.useState(!1),[h,W]=Be.useState(!1),[I,B]=Be.useState("science"),[ee,re]=Be.useState(0),[O,ve]=Be.useState(!1),ue=Be.useRef(null);Be.useEffect(()=>{const K=()=>{T(window.scrollY>24)};return window.addEventListener("scroll",K,{passive:!0}),()=>window.removeEventListener("scroll",K)},[]),Be.useEffect(()=>{const K=new IntersectionObserver(([ce])=>{ce.isIntersecting&&ve(!0)},{threshold:.2});return ue.current&&K.observe(ue.current),()=>K.disconnect()},[]);const Q=[{quote:"The proximity to the Arabian Sea and the university's dedicated marine research stations provided field exposure that few institutions in the country can match.",name:"Pooja Hegde",role:"M.Sc. Marine Geology (Batch of 2023)",field:"Oceanographic Research"},{quote:"Mangalagangothri gave me both the critical perspective and the practical studio training necessary to transition directly into investigative broadcast media.",name:"Karthik Rao",role:"M.A. Journalism & Mass Communication (Batch of 2022)",field:"Media & Communications"},{quote:"The interdisciplinary encouragement and mentorship from senior faculty shaped my research methodology and opened doors to prestigious national doctoral fellowships.",name:"Ananya Shenoy",role:"Ph.D Scholar in Economics",field:"Development Economics"}],Z=[{date:"SEP 15, 2026",category:"Admissions",title:"Ph.D Entrance Examination 2026 Notification & Syllabus Guidelines",desc:"Detailed schedule, eligibility criteria, vacancy matrix across 26 PG departments, and examination centre guidelines."},{date:"SEP 08, 2026",category:"Examinations",title:"Postgraduate Common Entrance Test (PGCET) Calendar & Verification",desc:"Revised schedule for centralized university counseling, merit list publication, and mandatory document verification."},{date:"AUG 28, 2026",category:"Results",title:"Revaluation & Result Scrutiny Applications — Even Semester 2026",desc:"Last date for online submission of revaluation requests extended for undergraduate and postgraduate courses."},{date:"AUG 14, 2026",category:"General",title:"Official Release of University Prospectus & Academic Calendar 2026–2027",desc:"Comprehensive handbook detailing CBCS curriculum regulations, term dates, fee structures, and campus statutes."}];return o.jsxs("div",{className:"mu-page",children:[o.jsx("div",{className:"mu-utility-bar",children:o.jsxs("div",{className:"mu-container mu-utility-content",children:[o.jsxs("div",{className:"mu-utility-links",children:[o.jsx("a",{href:"#admissions",className:"mu-utility-link",children:"Apply Online"}),o.jsx("span",{className:"mu-utility-divider",children:"|"}),o.jsx("a",{href:"#portal",className:"mu-utility-link",children:"Student Portal (UUCMS)"}),o.jsx("span",{className:"mu-utility-divider",children:"|"}),o.jsx("a",{href:"#alumni",className:"mu-utility-link",children:"Alumni Network"}),o.jsx("span",{className:"mu-utility-divider",children:"|"}),o.jsx("a",{href:"#mail",className:"mu-utility-link",children:"Webmail Server"}),o.jsx("span",{className:"mu-utility-divider",children:"|"}),o.jsx("span",{className:"mu-utility-lang",children:"ಕನ್ನಡ"})]}),o.jsxs("div",{className:"mu-utility-socials",children:[o.jsx("a",{href:"https://facebook.com","aria-label":"Facebook",className:"mu-social-icon",children:o.jsx(mf,{size:13})}),o.jsx("a",{href:"https://twitter.com","aria-label":"Twitter/X",className:"mu-social-icon",children:o.jsx(Wf,{size:13})}),o.jsx("a",{href:"https://linkedin.com","aria-label":"LinkedIn",className:"mu-social-icon",children:o.jsx(zf,{size:13})}),o.jsx("a",{href:"https://youtube.com","aria-label":"YouTube",className:"mu-social-icon",children:o.jsx(Yf,{size:13})}),o.jsx("a",{href:"https://instagram.com","aria-label":"Instagram",className:"mu-social-icon",children:o.jsx(Nf,{size:13})})]})]})}),o.jsxs("header",{className:`mu-header ${z?"mu-header-scrolled":""}`,children:[o.jsxs("div",{className:"mu-container mu-header-content",children:[o.jsx("a",{href:"#",className:"mu-brand","aria-label":"Mangalore University Home",children:o.jsx("img",{src:"/mu-logo.png",alt:"Mangalore University — ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾನಿಲಯ",className:"mu-brand-logo-img"})}),o.jsxs("nav",{className:"mu-nav-desktop","aria-label":"Main Navigation",children:[o.jsx("a",{href:"#about",className:"mu-nav-link",children:"About"}),o.jsx("a",{href:"#academics",className:"mu-nav-link",children:"Academics"}),o.jsx("a",{href:"#infrastructure",className:"mu-nav-link",children:"Campus"}),o.jsx("a",{href:"#research",className:"mu-nav-link",children:"Research Centres"}),o.jsx("a",{href:"#placement",className:"mu-nav-link",children:"Placements"}),o.jsx("a",{href:"#news",className:"mu-nav-link",children:"Notices"}),o.jsx("a",{href:"#admissions",className:"mu-btn mu-btn-nav",children:"Apply Now"})]}),o.jsx("button",{className:"mu-mobile-toggle",onClick:()=>W(!h),"aria-label":"Toggle Navigation Menu","aria-expanded":h,children:h?o.jsx(Kf,{size:24}):o.jsx(Ff,{size:24})})]}),h&&o.jsx("div",{className:"mu-mobile-drawer",children:o.jsxs("div",{className:"mu-container mu-mobile-drawer-content",children:[o.jsx("a",{href:"#about",className:"mu-mobile-link",onClick:()=>W(!1),children:"About & VC Message"}),o.jsx("a",{href:"#academics",className:"mu-mobile-link",onClick:()=>W(!1),children:"Academics & Degrees"}),o.jsx("a",{href:"#infrastructure",className:"mu-mobile-link",onClick:()=>W(!1),children:"Campus & Infrastructure"}),o.jsx("a",{href:"#research",className:"mu-mobile-link",onClick:()=>W(!1),children:"National Research Centres"}),o.jsx("a",{href:"#coastal",className:"mu-mobile-link",onClick:()=>W(!1),children:"Coastal Identity"}),o.jsx("a",{href:"#placement",className:"mu-mobile-link",onClick:()=>W(!1),children:"Placement & Career Ecosystem"}),o.jsx("a",{href:"#news",className:"mu-mobile-link",onClick:()=>W(!1),children:"News & Circulars"}),o.jsx("div",{className:"mu-mobile-drawer-actions",children:o.jsxs("a",{href:"#admissions",className:"mu-btn mu-btn-gold",style:{width:"100%"},onClick:()=>W(!1),children:["Apply for Admission ",o.jsx(un,{size:16})]})})]})})]}),o.jsx("section",{className:"mu-hero-section",children:o.jsxs("div",{className:"mu-container mu-hero-grid",children:[o.jsxs("div",{className:"mu-hero-content",children:[o.jsxs("div",{className:"mu-fade-in-1",children:[o.jsx("span",{className:"mu-eyebrow",children:"ESTD. 1980 • MANGALAGANGOTHRI"}),o.jsx("h1",{className:"mu-hero-headline",children:"Four decades of learning where the river meets the sea."})]}),o.jsx("p",{className:"mu-hero-subtext mu-fade-in-2",children:"Spanning 353 acres atop the scenic Konaje hillocks, Mangalore University is a NAAC A++ accredited premier state institution with 26 postgraduate departments, internationally recognized nuclear research centres, and 204 affiliated colleges across coastal Karnataka."}),o.jsxs("div",{className:"mu-hero-actions mu-fade-in-3",children:[o.jsxs("a",{href:"#admissions",className:"mu-btn mu-btn-gold",children:["Apply for Admission ",o.jsx(un,{size:16})]}),o.jsx("a",{href:"#academics",className:"mu-btn mu-btn-outline",children:"View Programmes"})]})]}),o.jsxs("div",{className:"mu-hero-media-wrapper mu-fade-in-3",children:[o.jsx("div",{className:"mu-hero-frame-border"}),o.jsxs("div",{className:"mu-hero-image-card",children:[o.jsx("img",{src:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",alt:"Mangalore University Main Administrative Complex",className:"mu-hero-img"}),o.jsxs("div",{className:"mu-hero-badge",children:[o.jsx(bd,{size:20,className:"mu-badge-icon"}),o.jsxs("div",{children:[o.jsx("strong",{children:"NAAC A++ Accredited"}),o.jsx("span",{children:"353-Acre Verdant Campus"})]})]})]})]})]})}),o.jsx("section",{id:"about",className:"mu-section mu-bg-paper",children:o.jsx("div",{className:"mu-container",children:o.jsxs("div",{className:"mu-about-grid",children:[o.jsxs("div",{className:"mu-about-text",children:[o.jsx("span",{className:"mu-eyebrow",children:"ABOUT THE UNIVERSITY"}),o.jsx("h2",{className:"mu-heading",children:"From a postgraduate centre to a premier coastal institution"}),o.jsx("p",{className:"mu-about-p",children:"Mangalore University was established in 1980, growing out of a modest postgraduate centre of the University of Mysore at Konaje which originally commenced with just three departments."}),o.jsx("p",{className:"mu-about-p",children:"Today, the university encompasses 26 postgraduate departments on its main campus, offering advanced interdisciplinary research, frontier laboratory infrastructure, and comprehensive academic jurisdiction across Dakshina Kannada, Udupi, and Kodagu districts."}),o.jsxs("div",{className:"mu-about-vc-card",children:[o.jsxs("div",{className:"mu-vc-header",children:[o.jsx("div",{className:"mu-vc-avatar",children:o.jsx(tf,{size:24,color:"var(--gold)"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"mu-vc-title",children:"Vice-Chancellor's Message"}),o.jsx("span",{className:"mu-vc-sub",children:"Prof. P. L. Dharma, Vice-Chancellor"})]})]}),o.jsx("p",{className:"mu-vc-quote",children:'"Our vision is to evolve as a centre of academic excellence and holistic human development, nurturing global competence anchored in ethics, cultural heritage, and frontier research."'})]}),o.jsxs("a",{href:"#history",className:"mu-link-arrow",style:{marginTop:"16px"},children:["Read our full history & vision ",o.jsx(un,{size:15})]})]}),o.jsx("div",{className:"mu-about-media",children:o.jsxs("div",{className:"mu-about-image-wrapper",children:[o.jsx("img",{src:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",alt:"University Library and Heritage",className:"mu-about-img"}),o.jsxs("div",{className:"mu-about-milestone",children:[o.jsx("span",{className:"mu-milestone-year",children:"1980"}),o.jsx("span",{className:"mu-milestone-text",children:"Chartered Independent University"})]})]})})]})})}),o.jsx("section",{ref:ue,className:"mu-section-tight mu-bg-mist mu-stats-section",children:o.jsx("div",{className:"mu-container",children:o.jsxs("div",{className:"mu-stats-grid",children:[o.jsxs("div",{className:"mu-stat-card",children:[o.jsx("div",{className:"mu-stat-number",children:O?"45+":"0+"}),o.jsx("div",{className:"mu-stat-label",children:"Years of Academic Excellence"})]}),o.jsxs("div",{className:"mu-stat-card",children:[o.jsx("div",{className:"mu-stat-number",children:O?"26":"0"}),o.jsx("div",{className:"mu-stat-label",children:"Postgraduate Departments"})]}),o.jsxs("div",{className:"mu-stat-card",children:[o.jsx("div",{className:"mu-stat-number",children:O?"204":"0"}),o.jsx("div",{className:"mu-stat-label",children:"Affiliated Colleges"})]}),o.jsxs("div",{className:"mu-stat-card",children:[o.jsx("div",{className:"mu-stat-number",children:O?"353":"0"}),o.jsx("div",{className:"mu-stat-label",children:"Acres of Verdant Campus"})]}),o.jsxs("div",{className:"mu-stat-card mu-stat-card-last",children:[o.jsx("div",{className:"mu-stat-number",children:O?"5":"0"}),o.jsx("div",{className:"mu-stat-label",children:"Autonomous Colleges"})]})]})})}),o.jsx("section",{id:"academics",className:"mu-section mu-bg-paper",children:o.jsxs("div",{className:"mu-container",children:[o.jsxs("div",{className:"mu-section-header",children:[o.jsxs("div",{children:[o.jsx("span",{className:"mu-eyebrow",children:"ACADEMIC EXCELLENCE"}),o.jsx("h2",{className:"mu-heading",children:"Academics, Faculties & Degrees"})]}),o.jsx("p",{className:"mu-body-lead",children:"Offering Master's (M.A., M.Sc., M.Com, M.Ed, MBA, MCA), Doctoral (Ph.D), and Postgraduate Diploma programmes under the Choice Based Credit System (CBCS)."})]}),o.jsxs("div",{className:"mu-faculties-grid",children:[o.jsxs("div",{className:"mu-faculty-card",children:[o.jsxs("div",{className:"mu-faculty-header",children:[o.jsx("span",{className:"mu-faculty-count",children:"8 Departments"}),o.jsx("h3",{className:"mu-faculty-title",children:"Faculty of Arts"})]}),o.jsxs("ul",{className:"mu-dept-list",children:[o.jsx("li",{children:"English Language & Literature"}),o.jsx("li",{children:"Kannada & Regional Heritage"}),o.jsx("li",{children:"History & Archaeology"}),o.jsx("li",{children:"Economics & Development Studies"}),o.jsx("li",{children:"Mass Communication & Journalism"}),o.jsx("li",{children:"Sociology & Social Work (MSW)"})]}),o.jsxs("a",{href:"#faculty-arts",className:"mu-faculty-link",children:["Explore Arts Programmes ",o.jsx(kr,{size:16})]})]}),o.jsxs("div",{className:"mu-faculty-card",children:[o.jsxs("div",{className:"mu-faculty-header",children:[o.jsx("span",{className:"mu-faculty-count",children:"17 Departments"}),o.jsx("h3",{className:"mu-faculty-title",children:"Science & Technology"})]}),o.jsxs("ul",{className:"mu-dept-list",children:[o.jsx("li",{children:"Physics & Materials Science"}),o.jsx("li",{children:"Applied Chemistry & Biochemistry"}),o.jsx("li",{children:"Marine Geology & Oceanography"}),o.jsx("li",{children:"Biosciences & Biotechnology"}),o.jsx("li",{children:"Computer Science (M.Sc. & MCA)"}),o.jsx("li",{children:"Mathematics & Statistics"})]}),o.jsxs("a",{href:"#faculty-science",className:"mu-faculty-link",children:["Explore Science Programmes ",o.jsx(kr,{size:16})]})]}),o.jsxs("div",{className:"mu-faculty-card",children:[o.jsxs("div",{className:"mu-faculty-header",children:[o.jsx("span",{className:"mu-faculty-count",children:"2 Departments"}),o.jsx("h3",{className:"mu-faculty-title",children:"Faculty of Commerce"})]}),o.jsxs("ul",{className:"mu-dept-list",children:[o.jsx("li",{children:"Master of Commerce (M.Com)"}),o.jsx("li",{children:"Master of Business Admin (MBA)"}),o.jsx("li",{children:"Finance & Banking Technology"}),o.jsx("li",{children:"International Trade & Logistics"}),o.jsx("li",{children:"Human Resource Management"}),o.jsx("li",{children:"Doctoral Research in Commerce"})]}),o.jsxs("a",{href:"#faculty-commerce",className:"mu-faculty-link",children:["Explore Commerce Programmes ",o.jsx(kr,{size:16})]})]}),o.jsxs("div",{className:"mu-faculty-card",children:[o.jsxs("div",{className:"mu-faculty-header",children:[o.jsx("span",{className:"mu-faculty-count",children:"2 Departments"}),o.jsx("h3",{className:"mu-faculty-title",children:"Faculty of Education"})]}),o.jsxs("ul",{className:"mu-dept-list",children:[o.jsx("li",{children:"Master of Education (M.Ed)"}),o.jsx("li",{children:"Physical Education (M.P.Ed)"}),o.jsx("li",{children:"Sports Science & Biomechanics"}),o.jsx("li",{children:"Curriculum Design & Evaluation"}),o.jsx("li",{children:"Educational Technology Lab"}),o.jsx("li",{children:"Athletic Performance Centre"})]}),o.jsxs("a",{href:"#faculty-education",className:"mu-faculty-link",children:["Explore Education Programmes ",o.jsx(kr,{size:16})]})]})]})]})}),o.jsx("section",{className:"mu-section mu-bg-mist",children:o.jsxs("div",{className:"mu-container",children:[o.jsxs("div",{className:"mu-section-header-center",children:[o.jsx("span",{className:"mu-eyebrow",children:"INSTITUTIONAL DISTINCTION"}),o.jsx("h2",{className:"mu-heading",children:"Why Study at Mangalore University"}),o.jsx("p",{className:"mu-body-lead",style:{margin:"0 auto"},children:"A confluence of traditional scholarly rigor, national-grade research infrastructure, and holistic student growth."})]}),o.jsxs("div",{className:"mu-pillars-grid",children:[o.jsxs("div",{className:"mu-pillar-card",children:[o.jsx("div",{className:"mu-pillar-icon-badge",children:o.jsx(vf,{size:24})}),o.jsx("h3",{className:"mu-pillar-title",children:"Academic Excellence & CBCS"}),o.jsx("p",{className:"mu-pillar-desc",children:"Dynamic Choice Based Credit System offering flexibility across disciplines, industry-relevant syllabi, continuous internal assessment, and interdisciplinary electives."})]}),o.jsxs("div",{className:"mu-pillar-card",children:[o.jsx("div",{className:"mu-pillar-icon-badge",children:o.jsx(Lf,{size:24})}),o.jsx("h3",{className:"mu-pillar-title",children:"Frontier Research & Heritage"}),o.jsx("p",{className:"mu-pillar-desc",children:"High-impact scientific research funded by DST, DBT, BRNS, and UGC with dedicated radiation, marine, and bio-science research centres."})]}),o.jsxs("div",{className:"mu-pillar-card",children:[o.jsx("div",{className:"mu-pillar-icon-badge",children:o.jsx(Bf,{size:24})}),o.jsx("h3",{className:"mu-pillar-title",children:"Student Belonging & Community"}),o.jsx("p",{className:"mu-pillar-desc",children:"An inclusive, secure 353-acre hilltop environment with active cultural societies, national sports championships, subsidized hostels, and student welfare councils."})]})]})]})}),o.jsx("section",{id:"infrastructure",className:"mu-section mu-bg-paper",children:o.jsxs("div",{className:"mu-container",children:[o.jsxs("div",{className:"mu-section-header",children:[o.jsxs("div",{children:[o.jsx("span",{className:"mu-eyebrow",children:"WORLD-CLASS AMENITIES"}),o.jsx("h2",{className:"mu-heading",children:"Campus & Infrastructure"})]}),o.jsx("p",{className:"mu-body-lead",children:"State-of-the-art facilities designed to foster holistic academic, research, athletic, and residential life."})]}),o.jsxs("div",{className:"mu-infra-grid",children:[o.jsxs("div",{className:"mu-infra-card",children:[o.jsx("div",{className:"mu-infra-icon-box",children:o.jsx(Ef,{size:22})}),o.jsx("h3",{className:"mu-infra-title",children:"Central Library"}),o.jsx("p",{className:"mu-infra-desc",children:"Over 250,000 volumes, 300+ print journals, INFLIBNET access, e-ShodhSindhu portal, and 24/7 digital reading halls."})]}),o.jsxs("div",{className:"mu-infra-card",children:[o.jsx("div",{className:"mu-infra-icon-box",children:o.jsx($f,{size:22})}),o.jsx("h3",{className:"mu-infra-title",children:"Sports Complex & Stadium"}),o.jsx("p",{className:"mu-infra-desc",children:"400m synthetic athletic track, indoor sports pavilion, gymnasium, basketball & tennis courts supporting national athletes."})]}),o.jsxs("div",{className:"mu-infra-card",children:[o.jsx("div",{className:"mu-infra-icon-box",children:o.jsx(wf,{size:22})}),o.jsx("h3",{className:"mu-infra-title",children:"Hostels & Residential Life"}),o.jsx("p",{className:"mu-infra-desc",children:"Modern separate hostels for men, women, and research scholars with Wi-Fi, hygienic dining halls, and 24/7 security."})]}),o.jsxs("div",{className:"mu-infra-card",children:[o.jsx("div",{className:"mu-infra-icon-box",children:o.jsx(Sf,{size:22})}),o.jsx("h3",{className:"mu-infra-title",children:"ICT & Computing Centre"}),o.jsx("p",{className:"mu-infra-desc",children:"Campus-wide optical fiber network, high-performance computing clusters, smart classrooms, and centralized data facilities."})]}),o.jsxs("div",{className:"mu-infra-card",children:[o.jsx("div",{className:"mu-infra-icon-box",children:o.jsx(yf,{size:22})}),o.jsx("h3",{className:"mu-infra-title",children:"University Health Centre"}),o.jsx("p",{className:"mu-infra-desc",children:"Dedicated medical facility providing primary healthcare, 24/7 emergency response, pharmacy, and diagnostic services for students and staff."})]}),o.jsxs("div",{className:"mu-infra-card",children:[o.jsx("div",{className:"mu-infra-icon-box",children:o.jsx(af,{size:22})}),o.jsx("h3",{className:"mu-infra-title",children:"Botanical Garden & Arboretum"}),o.jsx("p",{className:"mu-infra-desc",children:"Sprawling arboretum conserving endemic Western Ghats flora, medicinal plant gardens, and green energy solar installations."})]})]})]})}),o.jsx("section",{id:"research",className:"mu-section mu-bg-mist",children:o.jsxs("div",{className:"mu-container",children:[o.jsxs("div",{className:"mu-section-header",children:[o.jsxs("div",{children:[o.jsx("span",{className:"mu-eyebrow",children:"PIONEERING DISCOVERY"}),o.jsx("h2",{className:"mu-heading",children:"Nationally Recognized Research Centres"})]}),o.jsx("p",{className:"mu-body-lead",children:"Hosting prestigious national research facilities funded by DAE, DST, BRNS, and international research collaborations."})]}),o.jsxs("div",{className:"mu-research-grid",children:[o.jsxs("div",{className:"mu-research-card",children:[o.jsxs("div",{className:"mu-research-header",children:[o.jsx("div",{className:"mu-research-icon",children:o.jsx(Of,{size:24})}),o.jsx("span",{className:"mu-research-badge",children:"DAE / BRNS Recognized"})]}),o.jsx("h3",{className:"mu-research-title",children:"Microtron Centre"}),o.jsx("p",{className:"mu-research-desc",children:"An advanced electron accelerator facility established in collaboration with Raja Ramanna Centre for Advanced Technology (RRCAT) and Bhabha Atomic Research Centre (BARC) for radiation physics, materials modification, and polymer research."}),o.jsx("div",{className:"mu-research-footer",children:o.jsx("span",{children:"Key Areas: Radiation Physics, Polymers, Electron Beam Tech"})})]}),o.jsxs("div",{className:"mu-research-card",children:[o.jsxs("div",{className:"mu-research-header",children:[o.jsx("div",{className:"mu-research-icon",children:o.jsx(Zd,{size:24})}),o.jsx("span",{className:"mu-research-badge",children:"National Centre of Excellence"})]}),o.jsx("h3",{className:"mu-research-title",children:"CARRT"}),o.jsx("p",{className:"mu-research-desc",children:"Centre for Application of Radioisotopes and Radiation Technology (CARRT) — conducting frontier research in medical physics, nuclear diagnostics, food irradiation, and radiation biology in partnership with BRNS and AERB."}),o.jsx("div",{className:"mu-research-footer",children:o.jsx("span",{children:"Key Areas: Radiopharmacy, Food Preservation, Nuclear Medicine"})})]}),o.jsxs("div",{className:"mu-research-card",children:[o.jsxs("div",{className:"mu-research-header",children:[o.jsx("div",{className:"mu-research-icon",children:o.jsx(cf,{size:24})}),o.jsx("span",{className:"mu-research-badge",children:"Coastal Ecology & Marine"})]}),o.jsx("h3",{className:"mu-research-title",children:"CAREER & Marine Research Station"}),o.jsx("p",{className:"mu-research-desc",children:"Centre for Advanced Research in Environmental Radioactivity (CAREER) and Oceanographic stations monitoring coastal ecology, Arabian Sea sedimentary dynamics, and marine biodiversity conservation."}),o.jsx("div",{className:"mu-research-footer",children:o.jsx("span",{children:"Key Areas: Marine Geology, Coastal Geomorphology, Oceanography"})})]})]})]})}),o.jsxs("section",{id:"coastal",className:"mu-campus-break",children:[o.jsx("div",{className:"mu-campus-overlay"}),o.jsx("div",{className:"mu-container mu-campus-content",children:o.jsxs("div",{className:"mu-campus-text-card",children:[o.jsx("span",{className:"mu-eyebrow mu-eyebrow-gold",children:"MANGALAGANGOTHRI • COASTAL SANCTUARY"}),o.jsx("h2",{className:"mu-campus-heading",children:"Where the Western Ghats meet the Arabian Sea"}),o.jsx("p",{className:"mu-campus-desc",children:"Perched atop a scenic hillock overlooking the Nethravathi river basin, our 353-acre verdant campus provides an inspiring sanctuary for scholarly inquiry, artistic expression, and athletic achievement."}),o.jsxs("a",{href:"#campus-tour",className:"mu-btn mu-btn-outline-white",children:["Discover Campus Facilities ",o.jsx(un,{size:16})]})]})})]}),o.jsx("section",{id:"placement",className:"mu-section mu-bg-paper",children:o.jsxs("div",{className:"mu-container mu-careers-grid",children:[o.jsxs("div",{className:"mu-careers-intro",children:[o.jsx("span",{className:"mu-eyebrow",children:"CAREER & STUDENT SUCCESS"}),o.jsx("h2",{className:"mu-heading",children:"Placement & Career Ecosystem"}),o.jsx("p",{className:"mu-careers-p",children:"The University Employment Information & Guidance Bureau functions as a vital career springboard, coordinating campus recruitments, competitive civil services mentorship, corporate internship pipelines, and international higher education pathways."}),o.jsxs("div",{className:"mu-placement-stats-mini",children:[o.jsxs("div",{className:"mu-mini-stat",children:[o.jsx("strong",{children:"85%+"}),o.jsx("span",{children:"Placement Assistance"})]}),o.jsxs("div",{className:"mu-mini-stat",children:[o.jsx("strong",{children:"120+"}),o.jsx("span",{children:"Recruitment Partners"})]}),o.jsxs("div",{className:"mu-mini-stat",children:[o.jsx("strong",{children:"₹14 LPA"}),o.jsx("span",{children:"Highest Package"})]})]}),o.jsxs("a",{href:"#placement-cell",className:"mu-link-arrow",children:["Connect with Placement Cell ",o.jsx(un,{size:15})]})]}),o.jsxs("div",{className:"mu-careers-services",children:[o.jsxs("div",{className:"mu-service-item",children:[o.jsx("div",{className:"mu-service-dot"}),o.jsxs("div",{children:[o.jsx("h4",{className:"mu-service-title",children:"Campus Placement & Corporate Recruitment"}),o.jsx("p",{className:"mu-service-desc",children:"Facilitating top-tier recruitment drives with IT, banking, pharmaceutical, manufacturing, and research conglomerates."})]})]}),o.jsxs("div",{className:"mu-service-item",children:[o.jsx("div",{className:"mu-service-dot"}),o.jsxs("div",{children:[o.jsx("h4",{className:"mu-service-title",children:"UPSC, KPSC, NET & SLET Coaching"}),o.jsx("p",{className:"mu-service-desc",children:"Comprehensive mentorship programs for national/state civil services, administrative examinations, and UGC lectureship eligibility."})]})]}),o.jsxs("div",{className:"mu-service-item",children:[o.jsx("div",{className:"mu-service-dot"}),o.jsxs("div",{children:[o.jsx("h4",{className:"mu-service-title",children:"Higher Education & Overseas Fellowships"}),o.jsx("p",{className:"mu-service-desc",children:"Dedicated advisory and application mentorship for prestigious international research grants and doctoral fellowships."})]})]}),o.jsxs("div",{className:"mu-service-item",children:[o.jsx("div",{className:"mu-service-dot"}),o.jsxs("div",{children:[o.jsx("h4",{className:"mu-service-title",children:"Skill Enhancement & Industry Internship Linkages"}),o.jsx("p",{className:"mu-service-desc",children:"Curriculum-aligned corporate internships, technical certification programs, and professional communication workshops."})]})]})]})]})}),o.jsx("section",{id:"news",className:"mu-section mu-bg-mist",children:o.jsxs("div",{className:"mu-container",children:[o.jsxs("div",{className:"mu-news-header",children:[o.jsxs("div",{children:[o.jsx("span",{className:"mu-eyebrow",children:"NOTICES & CIRCULARS"}),o.jsx("h2",{className:"mu-heading",children:"News, Events & Official Circulars"})]}),o.jsxs("a",{href:"#all-news",className:"mu-link-arrow",children:["View all notifications ",o.jsx(un,{size:15})]})]}),o.jsx("div",{className:"mu-news-list",children:Z.map((K,ce)=>o.jsxs("a",{href:`#notice-${ce}`,className:"mu-news-row",children:[o.jsxs("div",{className:"mu-news-date-col",children:[o.jsx("span",{className:"mu-news-date",children:K.date}),o.jsx("span",{className:"mu-news-category",children:K.category})]}),o.jsxs("div",{className:"mu-news-content-col",children:[o.jsx("h3",{className:"mu-news-title",children:K.title}),o.jsx("p",{className:"mu-news-desc",children:K.desc})]}),o.jsx("div",{className:"mu-news-action-col",children:o.jsx(kr,{size:20,className:"mu-news-arrow"})})]},ce))})]})}),o.jsx("section",{className:"mu-section mu-bg-navy",children:o.jsx("div",{className:"mu-container",children:o.jsxs("div",{className:"mu-testimonial-wrapper",children:[o.jsx("div",{className:"mu-quote-glyph",children:"“"}),o.jsxs("div",{className:"mu-testimonial-card",children:[o.jsx("p",{className:"mu-testimonial-text",children:Q[ee].quote}),o.jsxs("div",{className:"mu-testimonial-author",children:[o.jsx("span",{className:"mu-author-name",children:Q[ee].name}),o.jsx("span",{className:"mu-author-role",children:Q[ee].role})]})]}),o.jsxs("div",{className:"mu-carousel-controls",children:[o.jsx("button",{className:"mu-carousel-btn",onClick:()=>re(K=>K===0?Q.length-1:K-1),"aria-label":"Previous Testimonial",children:o.jsx(rf,{size:20})}),o.jsx("div",{className:"mu-carousel-dots",children:Q.map((K,ce)=>o.jsx("button",{className:`mu-dot ${ee===ce?"mu-dot-active":""}`,onClick:()=>re(ce),"aria-label":`Go to testimonial ${ce+1}`},ce))}),o.jsx("button",{className:"mu-carousel-btn",onClick:()=>re(K=>K===Q.length-1?0:K+1),"aria-label":"Next Testimonial",children:o.jsx(of,{size:20})})]})]})})}),o.jsx("section",{id:"admissions",className:"mu-cta-banner",children:o.jsxs("div",{className:"mu-container mu-cta-content",children:[o.jsx("span",{className:"mu-eyebrow mu-eyebrow-gold",children:"ADMISSIONS 2026–2027"}),o.jsx("h2",{className:"mu-cta-heading",children:"Begin your journey at Mangalagangothri"}),o.jsx("p",{className:"mu-cta-desc",children:"Applications for postgraduate, diploma, and doctoral programmes are now open through the Karnataka Unified University & College Management System (UUCMS)."}),o.jsxs("div",{className:"mu-cta-actions",children:[o.jsxs("a",{href:"#uucms-apply",className:"mu-btn mu-btn-gold",children:["Apply Now ",o.jsx(un,{size:16})]}),o.jsxs("a",{href:"#download-prospectus",className:"mu-btn mu-btn-outline-white",children:[o.jsx(ff,{size:16})," Download Prospectus (PDF)"]})]})]})}),o.jsx("footer",{className:"mu-footer",children:o.jsxs("div",{className:"mu-container",children:[o.jsxs("div",{className:"mu-footer-grid",children:[o.jsxs("div",{className:"mu-footer-col",children:[o.jsx("div",{className:"mu-footer-brand-wrapper",children:o.jsx("img",{src:"/mu-logo.png",alt:"Mangalore University — ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾನಿಲಯ",className:"mu-footer-logo-img"})}),o.jsx("p",{className:"mu-footer-address",children:"Mangalagangothri - 574 199, Dakshina Kannada District, Karnataka State, India."}),o.jsxs("div",{className:"mu-footer-contact",children:[o.jsxs("p",{children:[o.jsx(Df,{size:14})," +91 824 2287276 / 2287347"]}),o.jsxs("p",{children:[o.jsx(Mf,{size:14})," contact@mangaloreuniversity.ac.in"]})]})]}),o.jsxs("div",{className:"mu-footer-col",children:[o.jsx("h4",{className:"mu-footer-col-title",children:"Academics"}),o.jsxs("ul",{className:"mu-footer-links",children:[o.jsx("li",{children:o.jsx("a",{href:"#faculty-arts",children:"Faculty of Arts"})}),o.jsx("li",{children:o.jsx("a",{href:"#faculty-science",children:"Faculty of Science & Tech"})}),o.jsx("li",{children:o.jsx("a",{href:"#faculty-commerce",children:"Faculty of Commerce"})}),o.jsx("li",{children:o.jsx("a",{href:"#faculty-education",children:"Faculty of Education"})}),o.jsx("li",{children:o.jsx("a",{href:"#research",children:"Microtron & CARRT Centres"})}),o.jsx("li",{children:o.jsx("a",{href:"#calendar",children:"Academic Calendar 2026"})})]})]}),o.jsxs("div",{className:"mu-footer-col",children:[o.jsx("h4",{className:"mu-footer-col-title",children:"Examinations & Governance"}),o.jsxs("ul",{className:"mu-footer-links",children:[o.jsx("li",{children:o.jsx("a",{href:"#results",children:"Examination Results Portal"})}),o.jsx("li",{children:o.jsx("a",{href:"#reval",children:"Revaluation Applications"})}),o.jsx("li",{children:o.jsx("a",{href:"#statutes",children:"University Statutes & Acts"})}),o.jsx("li",{children:o.jsx("a",{href:"#rti",children:"Right to Information (RTI)"})}),o.jsx("li",{children:o.jsx("a",{href:"#iqac",children:"Internal Quality Assurance Cell (IQAC)"})}),o.jsx("li",{children:o.jsx("a",{href:"#naac",children:"NAAC Self Study Report"})})]})]}),o.jsxs("div",{className:"mu-footer-col",children:[o.jsx("h4",{className:"mu-footer-col-title",children:"Student Welfare"}),o.jsxs("ul",{className:"mu-footer-links",children:[o.jsx("li",{children:o.jsx("a",{href:"#anti-ragging",children:"Anti-Ragging Squad & Cell"})}),o.jsx("li",{children:o.jsx("a",{href:"#grievance",children:"Women's Grievance Redressal"})}),o.jsx("li",{children:o.jsx("a",{href:"#scst",children:"SC / ST Special Cell"})}),o.jsx("li",{children:o.jsx("a",{href:"#infrastructure",children:"Central Library Catalog"})}),o.jsx("li",{children:o.jsx("a",{href:"#nirf",children:"NIRF Disclosures"})}),o.jsx("li",{children:o.jsx("a",{href:"#uucms",children:"Karnataka UUCMS Portal"})})]})]})]}),o.jsxs("div",{className:"mu-footer-bottom",children:[o.jsx("p",{children:"© 2026 Mangalore University, Mangalagangothri. All Rights Reserved."}),o.jsxs("div",{className:"mu-footer-legal",children:[o.jsx("a",{href:"#privacy",children:"Privacy Policy"}),o.jsx("span",{className:"mu-utility-divider",children:"|"}),o.jsx("a",{href:"#terms",children:"Terms of Use"}),o.jsx("span",{className:"mu-utility-divider",children:"|"}),o.jsx("a",{href:"#sitemap",children:"Sitemap"})]})]})]})}),o.jsx("style",{children:`
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
        .mu-utility-lang {
          color: var(--gold);
          font-weight: 600;
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
          background-color: var(--teal);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
          padding: 12px 0;
        }
        .mu-header-scrolled {
          background-color: rgba(7, 29, 51, 0.98);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
          padding: 10px 0;
        }
        .mu-header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mu-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .mu-brand-logo-img {
          height: 60px;
          width: auto;
          max-width: 380px;
          object-fit: contain;
          display: block;
          transition: height 0.3s ease;
        }
        .mu-header-scrolled .mu-brand-logo-img {
          height: 52px;
        }
        .mu-footer-brand-wrapper {
          margin-bottom: 20px;
        }
        .mu-footer-logo-img {
          height: 68px;
          width: auto;
          max-width: 380px;
          object-fit: contain;
          display: block;
        }

        /* Nav Links */
        .mu-nav-desktop {
          display: flex;
          align-items: center;
          gap: 26px;
        }
        .mu-nav-link {
          font-size: 14.5px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.88);
          text-decoration: none;
          position: relative;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .mu-nav-link:hover {
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
          color: #FFFFFF;
          cursor: pointer;
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
          grid-template-columns: 1.15fr 0.85fr;
          gap: 64px;
          align-items: center;
        }
        .mu-about-image-wrapper {
          position: relative;
        }
        .mu-about-img {
          width: 100%;
          height: 440px;
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
        .mu-about-vc-card {
          margin: 20px 0;
          padding: 20px 24px;
          background-color: var(--mist);
          border-left: 3px solid var(--teal);
          border-radius: var(--radius);
        }
        .mu-vc-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        .mu-vc-avatar {
          width: 38px;
          height: 38px;
          background-color: var(--teal);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mu-vc-title {
          font-family: var(--font-serif);
          font-size: 16px;
          color: var(--teal);
          margin-bottom: 2px;
        }
        .mu-vc-sub {
          font-size: 12.5px;
          color: var(--blue);
          font-weight: 600;
        }
        .mu-vc-quote {
          font-family: var(--font-serif);
          font-size: 15.5px;
          font-style: italic;
          color: var(--ink);
          line-height: 1.5;
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

        /* Infrastructure Section */
        .mu-infra-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .mu-infra-card {
          background-color: #FFFFFF;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 30px 26px;
          transition: border-color 0.2s;
        }
        .mu-infra-card:hover {
          border-color: var(--teal);
        }
        .mu-infra-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius);
          background-color: var(--mist);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .mu-infra-title {
          font-size: 18px;
          margin-bottom: 10px;
          color: var(--teal);
        }
        .mu-infra-desc {
          font-size: 14.5px;
          color: var(--ink-soft);
          line-height: 1.55;
        }

        /* Research Centres Section */
        .mu-research-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .mu-research-card {
          background-color: #FFFFFF;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .mu-research-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .mu-research-icon {
          width: 46px;
          height: 46px;
          background-color: var(--teal);
          color: var(--gold);
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mu-research-badge {
          font-size: 11.5px;
          font-weight: 600;
          text-transform: uppercase;
          background-color: var(--mist);
          color: var(--blue);
          padding: 4px 10px;
          border-radius: var(--radius);
        }
        .mu-research-title {
          font-size: 20px;
          color: var(--teal);
          margin-bottom: 14px;
        }
        .mu-research-desc {
          font-size: 14.5px;
          color: var(--ink-soft);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .mu-research-footer {
          font-size: 12.5px;
          color: var(--blue);
          font-weight: 600;
          border-top: 1px solid var(--line-soft);
          padding-top: 14px;
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

        /* Careers & Placement Section */
        .mu-careers-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }
        .mu-careers-p {
          font-size: 16px;
          color: var(--ink-soft);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .mu-placement-stats-mini {
          display: flex;
          gap: 24px;
          margin-bottom: 24px;
          padding: 16px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .mu-mini-stat strong {
          display: block;
          font-family: var(--font-serif);
          font-size: 24px;
          color: var(--teal);
        }
        .mu-mini-stat span {
          font-size: 12px;
          color: var(--ink-soft);
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
          .mu-infra-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mu-research-grid {
            grid-template-columns: 1fr;
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
          .mu-infra-grid {
            grid-template-columns: 1fr;
          }
          .mu-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}Wd.createRoot(document.getElementById("root")).render(o.jsx(Id.StrictMode,{children:o.jsx(Xf,{})}));
