(function(){const L=document.createElement("link").relList;if(L&&L.supports&&L.supports("modulepreload"))return;for(const I of document.querySelectorAll('link[rel="modulepreload"]'))Q(I);new MutationObserver(I=>{for(const U of I)if(U.type==="childList")for(const ne of U.addedNodes)ne.tagName==="LINK"&&ne.rel==="modulepreload"&&Q(ne)}).observe(document,{childList:!0,subtree:!0});function h(I){const U={};return I.integrity&&(U.integrity=I.integrity),I.referrerPolicy&&(U.referrerPolicy=I.referrerPolicy),I.crossOrigin==="use-credentials"?U.credentials="include":I.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function Q(I){if(I.ep)return;I.ep=!0;const U=h(I);fetch(I.href,U)}})();function Au(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var Cl={exports:{}},wn={},bl={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu;function Ld(){if(Eu)return A;Eu=1;var E=Symbol.for("react.element"),L=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),ne=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),we=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),K=Symbol.iterator;function Z(d){return d===null||typeof d!="object"?null:(d=K&&d[K]||d["@@iterator"],typeof d=="function"?d:null)}var ze={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Me=Object.assign,B={};function Y(d,v,M){this.props=d,this.context=v,this.refs=B,this.updater=M||ze}Y.prototype.isReactComponent={},Y.prototype.setState=function(d,v){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,v,"setState")},Y.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Se(){}Se.prototype=Y.prototype;function Je(d,v,M){this.props=d,this.context=v,this.refs=B,this.updater=M||ze}var z=Je.prototype=new Se;z.constructor=Je,Me(z,Y.prototype),z.isPureReactComponent=!0;var H=Array.isArray,oe=Object.prototype.hasOwnProperty,ge={current:null},ce={key:!0,ref:!0,__self:!0,__source:!0};function Ue(d,v,M){var O,W={},$=null,J=null;if(v!=null)for(O in v.ref!==void 0&&(J=v.ref),v.key!==void 0&&($=""+v.key),v)oe.call(v,O)&&!ce.hasOwnProperty(O)&&(W[O]=v[O]);var X=arguments.length-2;if(X===1)W.children=M;else if(1<X){for(var ie=Array(X),Ke=0;Ke<X;Ke++)ie[Ke]=arguments[Ke+2];W.children=ie}if(d&&d.defaultProps)for(O in X=d.defaultProps,X)W[O]===void 0&&(W[O]=X[O]);return{$$typeof:E,type:d,key:$,ref:J,props:W,_owner:ge.current}}function Ae(d,v){return{$$typeof:E,type:d.type,key:v,ref:d.ref,props:d.props,_owner:d._owner}}function et(d){return typeof d=="object"&&d!==null&&d.$$typeof===E}function tt(d){var v={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(M){return v[M]})}var rt=/\/+/g;function _e(d,v){return typeof d=="object"&&d!==null&&d.key!=null?tt(""+d.key):v.toString(36)}function Ce(d,v,M,O,W){var $=typeof d;($==="undefined"||$==="boolean")&&(d=null);var J=!1;if(d===null)J=!0;else switch($){case"string":case"number":J=!0;break;case"object":switch(d.$$typeof){case E:case L:J=!0}}if(J)return J=d,W=W(J),d=O===""?"."+_e(J,0):O,H(W)?(M="",d!=null&&(M=d.replace(rt,"$&/")+"/"),Ce(W,v,M,"",function(Ke){return Ke})):W!=null&&(et(W)&&(W=Ae(W,M+(!W.key||J&&J.key===W.key?"":(""+W.key).replace(rt,"$&/")+"/")+d)),v.push(W)),1;if(J=0,O=O===""?".":O+":",H(d))for(var X=0;X<d.length;X++){$=d[X];var ie=O+_e($,X);J+=Ce($,v,M,ie,W)}else if(ie=Z(d),typeof ie=="function")for(d=ie.call(d),X=0;!($=d.next()).done;)$=$.value,ie=O+_e($,X++),J+=Ce($,v,M,ie,W);else if($==="object")throw v=String(d),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return J}function gt(d,v,M){if(d==null)return d;var O=[],W=0;return Ce(d,O,"","",function($){return v.call(M,$,W++)}),O}function Be(d){if(d._status===-1){var v=d._result;v=v(),v.then(function(M){(d._status===0||d._status===-1)&&(d._status=1,d._result=M)},function(M){(d._status===0||d._status===-1)&&(d._status=2,d._result=M)}),d._status===-1&&(d._status=0,d._result=v)}if(d._status===1)return d._result.default;throw d._result}var de={current:null},N={transition:null},R={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:N,ReactCurrentOwner:ge};function S(){throw Error("act(...) is not supported in production builds of React.")}return A.Children={map:gt,forEach:function(d,v,M){gt(d,function(){v.apply(this,arguments)},M)},count:function(d){var v=0;return gt(d,function(){v++}),v},toArray:function(d){return gt(d,function(v){return v})||[]},only:function(d){if(!et(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},A.Component=Y,A.Fragment=h,A.Profiler=I,A.PureComponent=Je,A.StrictMode=Q,A.Suspense=D,A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,A.act=S,A.cloneElement=function(d,v,M){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var O=Me({},d.props),W=d.key,$=d.ref,J=d._owner;if(v!=null){if(v.ref!==void 0&&($=v.ref,J=ge.current),v.key!==void 0&&(W=""+v.key),d.type&&d.type.defaultProps)var X=d.type.defaultProps;for(ie in v)oe.call(v,ie)&&!ce.hasOwnProperty(ie)&&(O[ie]=v[ie]===void 0&&X!==void 0?X[ie]:v[ie])}var ie=arguments.length-2;if(ie===1)O.children=M;else if(1<ie){X=Array(ie);for(var Ke=0;Ke<ie;Ke++)X[Ke]=arguments[Ke+2];O.children=X}return{$$typeof:E,type:d.type,key:W,ref:$,props:O,_owner:J}},A.createContext=function(d){return d={$$typeof:ne,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:U,_context:d},d.Consumer=d},A.createElement=Ue,A.createFactory=function(d){var v=Ue.bind(null,d);return v.type=d,v},A.createRef=function(){return{current:null}},A.forwardRef=function(d){return{$$typeof:le,render:d}},A.isValidElement=et,A.lazy=function(d){return{$$typeof:fe,_payload:{_status:-1,_result:d},_init:Be}},A.memo=function(d,v){return{$$typeof:we,type:d,compare:v===void 0?null:v}},A.startTransition=function(d){var v=N.transition;N.transition={};try{d()}finally{N.transition=v}},A.unstable_act=S,A.useCallback=function(d,v){return de.current.useCallback(d,v)},A.useContext=function(d){return de.current.useContext(d)},A.useDebugValue=function(){},A.useDeferredValue=function(d){return de.current.useDeferredValue(d)},A.useEffect=function(d,v){return de.current.useEffect(d,v)},A.useId=function(){return de.current.useId()},A.useImperativeHandle=function(d,v,M){return de.current.useImperativeHandle(d,v,M)},A.useInsertionEffect=function(d,v){return de.current.useInsertionEffect(d,v)},A.useLayoutEffect=function(d,v){return de.current.useLayoutEffect(d,v)},A.useMemo=function(d,v){return de.current.useMemo(d,v)},A.useReducer=function(d,v,M){return de.current.useReducer(d,v,M)},A.useRef=function(d){return de.current.useRef(d)},A.useState=function(d){return de.current.useState(d)},A.useSyncExternalStore=function(d,v,M){return de.current.useSyncExternalStore(d,v,M)},A.useTransition=function(){return de.current.useTransition()},A.version="18.3.1",A}var Fu;function Pl(){return Fu||(Fu=1,bl.exports=Ld()),bl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function Md(){if(zu)return wn;zu=1;var E=Pl(),L=Symbol.for("react.element"),h=Symbol.for("react.fragment"),Q=Object.prototype.hasOwnProperty,I=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function ne(le,D,we){var fe,K={},Z=null,ze=null;we!==void 0&&(Z=""+we),D.key!==void 0&&(Z=""+D.key),D.ref!==void 0&&(ze=D.ref);for(fe in D)Q.call(D,fe)&&!U.hasOwnProperty(fe)&&(K[fe]=D[fe]);if(le&&le.defaultProps)for(fe in D=le.defaultProps,D)K[fe]===void 0&&(K[fe]=D[fe]);return{$$typeof:L,type:le,key:Z,ref:ze,props:K,_owner:I.current}}return wn.Fragment=h,wn.jsx=ne,wn.jsxs=ne,wn}var _u;function Ad(){return _u||(_u=1,Cl.exports=Md()),Cl.exports}var l=Ad(),Fe=Pl();const Id=Au(Fe);var Pi={},El={exports:{}},Qe={},Fl={exports:{}},zl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Od(){return Pu||(Pu=1,(function(E){function L(N,R){var S=N.length;N.push(R);e:for(;0<S;){var d=S-1>>>1,v=N[d];if(0<I(v,R))N[d]=R,N[S]=v,S=d;else break e}}function h(N){return N.length===0?null:N[0]}function Q(N){if(N.length===0)return null;var R=N[0],S=N.pop();if(S!==R){N[0]=S;e:for(var d=0,v=N.length,M=v>>>1;d<M;){var O=2*(d+1)-1,W=N[O],$=O+1,J=N[$];if(0>I(W,S))$<v&&0>I(J,W)?(N[d]=J,N[$]=S,d=$):(N[d]=W,N[O]=S,d=O);else if($<v&&0>I(J,S))N[d]=J,N[$]=S,d=$;else break e}}return R}function I(N,R){var S=N.sortIndex-R.sortIndex;return S!==0?S:N.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var U=performance;E.unstable_now=function(){return U.now()}}else{var ne=Date,le=ne.now();E.unstable_now=function(){return ne.now()-le}}var D=[],we=[],fe=1,K=null,Z=3,ze=!1,Me=!1,B=!1,Y=typeof setTimeout=="function"?setTimeout:null,Se=typeof clearTimeout=="function"?clearTimeout:null,Je=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(N){for(var R=h(we);R!==null;){if(R.callback===null)Q(we);else if(R.startTime<=N)Q(we),R.sortIndex=R.expirationTime,L(D,R);else break;R=h(we)}}function H(N){if(B=!1,z(N),!Me)if(h(D)!==null)Me=!0,Be(oe);else{var R=h(we);R!==null&&de(H,R.startTime-N)}}function oe(N,R){Me=!1,B&&(B=!1,Se(Ue),Ue=-1),ze=!0;var S=Z;try{for(z(R),K=h(D);K!==null&&(!(K.expirationTime>R)||N&&!tt());){var d=K.callback;if(typeof d=="function"){K.callback=null,Z=K.priorityLevel;var v=d(K.expirationTime<=R);R=E.unstable_now(),typeof v=="function"?K.callback=v:K===h(D)&&Q(D),z(R)}else Q(D);K=h(D)}if(K!==null)var M=!0;else{var O=h(we);O!==null&&de(H,O.startTime-R),M=!1}return M}finally{K=null,Z=S,ze=!1}}var ge=!1,ce=null,Ue=-1,Ae=5,et=-1;function tt(){return!(E.unstable_now()-et<Ae)}function rt(){if(ce!==null){var N=E.unstable_now();et=N;var R=!0;try{R=ce(!0,N)}finally{R?_e():(ge=!1,ce=null)}}else ge=!1}var _e;if(typeof Je=="function")_e=function(){Je(rt)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,gt=Ce.port2;Ce.port1.onmessage=rt,_e=function(){gt.postMessage(null)}}else _e=function(){Y(rt,0)};function Be(N){ce=N,ge||(ge=!0,_e())}function de(N,R){Ue=Y(function(){N(E.unstable_now())},R)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(N){N.callback=null},E.unstable_continueExecution=function(){Me||ze||(Me=!0,Be(oe))},E.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<N?Math.floor(1e3/N):5},E.unstable_getCurrentPriorityLevel=function(){return Z},E.unstable_getFirstCallbackNode=function(){return h(D)},E.unstable_next=function(N){switch(Z){case 1:case 2:case 3:var R=3;break;default:R=Z}var S=Z;Z=R;try{return N()}finally{Z=S}},E.unstable_pauseExecution=function(){},E.unstable_requestPaint=function(){},E.unstable_runWithPriority=function(N,R){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var S=Z;Z=N;try{return R()}finally{Z=S}},E.unstable_scheduleCallback=function(N,R,S){var d=E.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?d+S:d):S=d,N){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=S+v,N={id:fe++,callback:R,priorityLevel:N,startTime:S,expirationTime:v,sortIndex:-1},S>d?(N.sortIndex=S,L(we,N),h(D)===null&&N===h(we)&&(B?(Se(Ue),Ue=-1):B=!0,de(H,S-d))):(N.sortIndex=v,L(D,N),Me||ze||(Me=!0,Be(oe))),N},E.unstable_shouldYield=tt,E.unstable_wrapCallback=function(N){var R=Z;return function(){var S=Z;Z=R;try{return N.apply(this,arguments)}finally{Z=S}}}})(zl)),zl}var Ru;function Dd(){return Ru||(Ru=1,Fl.exports=Od()),Fl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Ud(){if(Tu)return Qe;Tu=1;var E=Pl(),L=Dd();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q=new Set,I={};function U(e,t){ne(e,t),ne(e+"Capture",t)}function ne(e,t){for(I[e]=t,e=0;e<t.length;e++)Q.add(t[e])}var le=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),D=Object.prototype.hasOwnProperty,we=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fe={},K={};function Z(e){return D.call(K,e)?!0:D.call(fe,e)?!1:we.test(e)?K[e]=!0:(fe[e]=!0,!1)}function ze(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Me(e,t,r,n){if(t===null||typeof t>"u"||ze(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function B(e,t,r,n,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Y[t]=new B(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var Se=/[\-:]([a-z])/g;function Je(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Se,Je);Y[t]=new B(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Se,Je);Y[t]=new B(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Se,Je);Y[t]=new B(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function z(e,t,r,n){var i=Y.hasOwnProperty(t)?Y[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Me(t,r,i,n)&&(r=null),n||i===null?Z(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var H=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),ge=Symbol.for("react.portal"),ce=Symbol.for("react.fragment"),Ue=Symbol.for("react.strict_mode"),Ae=Symbol.for("react.profiler"),et=Symbol.for("react.provider"),tt=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),N=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var S=Object.assign,d;function v(e){if(d===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var M=!1;function O(e,t){if(!e||M)return"";M=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var n=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){n=p}e.call(t.prototype)}else{try{throw Error()}catch(p){n=p}e()}}catch(p){if(p&&n&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),a=n.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{M=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?v(e):""}function W(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=O(e.type,!1),e;case 11:return e=O(e.type.render,!1),e;case 1:return e=O(e.type,!0),e;default:return""}}function $(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ce:return"Fragment";case ge:return"Portal";case Ae:return"Profiler";case Ue:return"StrictMode";case _e:return"Suspense";case Ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tt:return(e.displayName||"Context")+".Consumer";case et:return(e._context.displayName||"Context")+".Provider";case rt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gt:return t=e.displayName||null,t!==null?t:$(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return $(e(t))}catch{}}return null}function J(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(t);case 8:return t===Ue?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function X(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ke(e){var t=ie(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nn(e){e._valueTracker||(e._valueTracker=Ke(e))}function Rl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ie(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ri(e,t){var r=t.checked;return S({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Tl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=X(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ll(e,t){t=t.checked,t!=null&&z(e,"checked",t,!1)}function Ti(e,t){Ll(e,t);var r=X(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Li(e,t.type,r):t.hasOwnProperty("defaultValue")&&Li(e,t.type,X(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ml(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Li(e,t,r){(t!=="number"||kn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Lr=Array.isArray;function ur(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+X(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return S({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Al(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(h(92));if(Lr(r)){if(1<r.length)throw Error(h(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:X(r)}}function Il(e,t){var r=X(t.value),n=X(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Ol(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ai(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jn,Ul=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jn=jn||document.createElement("div"),jn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ou=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){Ou.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e]})});function Bl(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function Hl(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Bl(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Du=S({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ii(e,t){if(t){if(Du[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Oi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function Ui(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bi=null,cr=null,dr=null;function Vl(e){if(e=an(e)){if(typeof Bi!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Gn(t),Bi(e.stateNode,e.type,t))}}function Wl(e){cr?dr?dr.push(e):dr=[e]:cr=e}function $l(){if(cr){var e=cr,t=dr;if(dr=cr=null,Vl(e),t)for(e=0;e<t.length;e++)Vl(t[e])}}function Gl(e,t){return e(t)}function Ql(){}var Hi=!1;function Kl(e,t,r){if(Hi)return e(t,r);Hi=!0;try{return Gl(e,t,r)}finally{Hi=!1,(cr!==null||dr!==null)&&(Ql(),$l())}}function Ir(e,t){var r=e.stateNode;if(r===null)return null;var n=Gn(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(h(231,t,typeof r));return r}var Vi=!1;if(le)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Vi=!1}function Uu(e,t,r,n,i,a,o,s,u){var p=Array.prototype.slice.call(arguments,3);try{t.apply(r,p)}catch(x){this.onError(x)}}var Dr=!1,Sn=null,Cn=!1,Wi=null,Bu={onError:function(e){Dr=!0,Sn=e}};function Hu(e,t,r,n,i,a,o,s,u){Dr=!1,Sn=null,Uu.apply(Bu,arguments)}function Vu(e,t,r,n,i,a,o,s,u){if(Hu.apply(this,arguments),Dr){if(Dr){var p=Sn;Dr=!1,Sn=null}else throw Error(h(198));Cn||(Cn=!0,Wi=p)}}function Xt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Yl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xl(e){if(Xt(e)!==e)throw Error(h(188))}function Wu(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Xl(i),e;if(a===n)return Xl(i),t;a=a.sibling}throw Error(h(188))}if(r.return!==n.return)r=i,n=a;else{for(var o=!1,s=i.child;s;){if(s===r){o=!0,r=i,n=a;break}if(s===n){o=!0,n=i,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,n=i;break}if(s===n){o=!0,n=a,r=i;break}s=s.sibling}if(!o)throw Error(h(189))}}if(r.alternate!==n)throw Error(h(190))}if(r.tag!==3)throw Error(h(188));return r.stateNode.current===r?e:t}function ql(e){return e=Wu(e),e!==null?Zl(e):null}function Zl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zl(e);if(t!==null)return t;e=e.sibling}return null}var Jl=L.unstable_scheduleCallback,eo=L.unstable_cancelCallback,$u=L.unstable_shouldYield,Gu=L.unstable_requestPaint,pe=L.unstable_now,Qu=L.unstable_getCurrentPriorityLevel,$i=L.unstable_ImmediatePriority,to=L.unstable_UserBlockingPriority,bn=L.unstable_NormalPriority,Ku=L.unstable_LowPriority,ro=L.unstable_IdlePriority,En=null,vt=null;function Yu(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(En,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Zu,Xu=Math.log,qu=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(Xu(e)/qu|0)|0}var Fn=64,zn=4194304;function Ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _n(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var s=o&~i;s!==0?n=Ur(s):(a&=o,a!==0&&(n=Ur(a)))}else o=r&~i,o!==0?n=Ur(o):a!==0&&(n=Ur(a));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-ut(t),i=1<<r,n|=e[r],t&=~i;return n}function Ju(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ec(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ut(a),s=1<<o,u=i[o];u===-1?((s&r)===0||(s&n)!==0)&&(i[o]=Ju(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function Gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function no(){var e=Fn;return Fn<<=1,(Fn&4194240)===0&&(Fn=64),e}function Qi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Br(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=r}function tc(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-ut(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function Ki(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ut(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var q=0;function io(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ao,Yi,lo,oo,so,Xi=!1,Pn=[],_t=null,Pt=null,Rt=null,Hr=new Map,Vr=new Map,Tt=[],rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uo(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function Wr(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=an(t),t!==null&&Yi(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function nc(e,t,r,n,i){switch(t){case"focusin":return _t=Wr(_t,e,t,r,n,i),!0;case"dragenter":return Pt=Wr(Pt,e,t,r,n,i),!0;case"mouseover":return Rt=Wr(Rt,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return Hr.set(a,Wr(Hr.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Vr.set(a,Wr(Vr.get(a)||null,e,t,r,n,i)),!0}return!1}function co(e){var t=qt(e.target);if(t!==null){var r=Xt(t);if(r!==null){if(t=r.tag,t===13){if(t=Yl(r),t!==null){e.blockedOn=t,so(e.priority,function(){lo(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Zi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Di=n,r.target.dispatchEvent(n),Di=null}else return t=an(r),t!==null&&Yi(t),e.blockedOn=r,!1;t.shift()}return!0}function mo(e,t,r){Rn(e)&&r.delete(t)}function ic(){Xi=!1,_t!==null&&Rn(_t)&&(_t=null),Pt!==null&&Rn(Pt)&&(Pt=null),Rt!==null&&Rn(Rt)&&(Rt=null),Hr.forEach(mo),Vr.forEach(mo)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,Xi||(Xi=!0,L.unstable_scheduleCallback(L.unstable_NormalPriority,ic)))}function Gr(e){function t(i){return $r(i,e)}if(0<Pn.length){$r(Pn[0],e);for(var r=1;r<Pn.length;r++){var n=Pn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(_t!==null&&$r(_t,e),Pt!==null&&$r(Pt,e),Rt!==null&&$r(Rt,e),Hr.forEach(t),Vr.forEach(t),r=0;r<Tt.length;r++)n=Tt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Tt.length&&(r=Tt[0],r.blockedOn===null);)co(r),r.blockedOn===null&&Tt.shift()}var mr=H.ReactCurrentBatchConfig,Tn=!0;function ac(e,t,r,n){var i=q,a=mr.transition;mr.transition=null;try{q=1,qi(e,t,r,n)}finally{q=i,mr.transition=a}}function lc(e,t,r,n){var i=q,a=mr.transition;mr.transition=null;try{q=4,qi(e,t,r,n)}finally{q=i,mr.transition=a}}function qi(e,t,r,n){if(Tn){var i=Zi(e,t,r,n);if(i===null)ha(e,t,n,Ln,r),uo(e,n);else if(nc(i,e,t,r,n))n.stopPropagation();else if(uo(e,n),t&4&&-1<rc.indexOf(e)){for(;i!==null;){var a=an(i);if(a!==null&&ao(a),a=Zi(e,t,r,n),a===null&&ha(e,t,n,Ln,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else ha(e,t,n,null,r)}}var Ln=null;function Zi(e,t,r,n){if(Ln=null,e=Ui(n),e=qt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Yl(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ln=e,null}function fo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qu()){case $i:return 1;case to:return 4;case bn:case Ku:return 16;case ro:return 536870912;default:return 16}default:return 16}}var Lt=null,Ji=null,Mn=null;function po(){if(Mn)return Mn;var e,t=Ji,r=t.length,n,i="value"in Lt?Lt.value:Lt.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===i[a-n];n++);return Mn=i.slice(e,1<n?1-n:void 0)}function An(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function In(){return!0}function ho(){return!1}function Ye(e){function t(r,n,i,a,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?In:ho,this.isPropagationStopped=ho,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=Ye(fr),Qr=S({},fr,{view:0,detail:0}),oc=Ye(Qr),ta,ra,Kr,On=S({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(ta=e.screenX-Kr.screenX,ra=e.screenY-Kr.screenY):ra=ta=0,Kr=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:ra}}),go=Ye(On),sc=S({},On,{dataTransfer:0}),uc=Ye(sc),cc=S({},Qr,{relatedTarget:0}),na=Ye(cc),dc=S({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),mc=Ye(dc),fc=S({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pc=Ye(fc),hc=S({},fr,{data:0}),vo=Ye(hc),gc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xc[e])?!!t[e]:!1}function ia(){return yc}var wc=S({},Qr,{key:function(e){if(e.key){var t=gc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=An(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ia,charCode:function(e){return e.type==="keypress"?An(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?An(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nc=Ye(wc),kc=S({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xo=Ye(kc),jc=S({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ia}),Sc=Ye(jc),Cc=S({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bc=Ye(Cc),Ec=S({},On,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fc=Ye(Ec),zc=[9,13,27,32],aa=le&&"CompositionEvent"in window,Yr=null;le&&"documentMode"in document&&(Yr=document.documentMode);var _c=le&&"TextEvent"in window&&!Yr,yo=le&&(!aa||Yr&&8<Yr&&11>=Yr),wo=" ",No=!1;function ko(e,t){switch(e){case"keyup":return zc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function Pc(e,t){switch(e){case"compositionend":return jo(t);case"keypress":return t.which!==32?null:(No=!0,wo);case"textInput":return e=t.data,e===wo&&No?null:e;default:return null}}function Rc(e,t){if(pr)return e==="compositionend"||!aa&&ko(e,t)?(e=po(),Mn=Ji=Lt=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yo&&t.locale!=="ko"?null:t.data;default:return null}}var Tc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function So(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tc[e.type]:t==="textarea"}function Co(e,t,r,n){Wl(n),t=Vn(t,"onChange"),0<t.length&&(r=new ea("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Xr=null,qr=null;function Lc(e){Vo(e,0)}function Dn(e){var t=yr(e);if(Rl(t))return e}function Mc(e,t){if(e==="change")return t}var bo=!1;if(le){var la;if(le){var oa="oninput"in document;if(!oa){var Eo=document.createElement("div");Eo.setAttribute("oninput","return;"),oa=typeof Eo.oninput=="function"}la=oa}else la=!1;bo=la&&(!document.documentMode||9<document.documentMode)}function Fo(){Xr&&(Xr.detachEvent("onpropertychange",zo),qr=Xr=null)}function zo(e){if(e.propertyName==="value"&&Dn(qr)){var t=[];Co(t,qr,e,Ui(e)),Kl(Lc,t)}}function Ac(e,t,r){e==="focusin"?(Fo(),Xr=t,qr=r,Xr.attachEvent("onpropertychange",zo)):e==="focusout"&&Fo()}function Ic(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dn(qr)}function Oc(e,t){if(e==="click")return Dn(t)}function Dc(e,t){if(e==="input"||e==="change")return Dn(t)}function Uc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Uc;function Zr(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!D.call(t,i)||!ct(e[i],t[i]))return!1}return!0}function _o(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Po(e,t){var r=_o(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=_o(r)}}function Ro(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ro(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function To(){for(var e=window,t=kn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=kn(e.document)}return t}function sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bc(e){var t=To(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ro(r.ownerDocument.documentElement,r)){if(n!==null&&sa(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=Po(r,a);var o=Po(r,n);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hc=le&&"documentMode"in document&&11>=document.documentMode,hr=null,ua=null,Jr=null,ca=!1;function Lo(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ca||hr==null||hr!==kn(n)||(n=hr,"selectionStart"in n&&sa(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Jr&&Zr(Jr,n)||(Jr=n,n=Vn(ua,"onSelect"),0<n.length&&(t=new ea("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=hr)))}function Un(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var gr={animationend:Un("Animation","AnimationEnd"),animationiteration:Un("Animation","AnimationIteration"),animationstart:Un("Animation","AnimationStart"),transitionend:Un("Transition","TransitionEnd")},da={},Mo={};le&&(Mo=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Bn(e){if(da[e])return da[e];if(!gr[e])return e;var t=gr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Mo)return da[e]=t[r];return e}var Ao=Bn("animationend"),Io=Bn("animationiteration"),Oo=Bn("animationstart"),Do=Bn("transitionend"),Uo=new Map,Bo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){Uo.set(e,t),U(t,[e])}for(var ma=0;ma<Bo.length;ma++){var fa=Bo[ma],Vc=fa.toLowerCase(),Wc=fa[0].toUpperCase()+fa.slice(1);Mt(Vc,"on"+Wc)}Mt(Ao,"onAnimationEnd"),Mt(Io,"onAnimationIteration"),Mt(Oo,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Do,"onTransitionEnd"),ne("onMouseEnter",["mouseout","mouseover"]),ne("onMouseLeave",["mouseout","mouseover"]),ne("onPointerEnter",["pointerout","pointerover"]),ne("onPointerLeave",["pointerout","pointerover"]),U("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),U("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),U("onBeforeInput",["compositionend","keypress","textInput","paste"]),U("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var en="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$c=new Set("cancel close invalid load scroll toggle".split(" ").concat(en));function Ho(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Vu(n,t,void 0,e),e.currentTarget=null}function Vo(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],u=s.instance,p=s.currentTarget;if(s=s.listener,u!==a&&i.isPropagationStopped())break e;Ho(i,s,p),a=u}else for(o=0;o<n.length;o++){if(s=n[o],u=s.instance,p=s.currentTarget,s=s.listener,u!==a&&i.isPropagationStopped())break e;Ho(i,s,p),a=u}}}if(Cn)throw e=Wi,Cn=!1,Wi=null,e}function te(e,t){var r=t[Na];r===void 0&&(r=t[Na]=new Set);var n=e+"__bubble";r.has(n)||(Wo(t,e,2,!1),r.add(n))}function pa(e,t,r){var n=0;t&&(n|=4),Wo(r,e,n,t)}var Hn="_reactListening"+Math.random().toString(36).slice(2);function tn(e){if(!e[Hn]){e[Hn]=!0,Q.forEach(function(r){r!=="selectionchange"&&($c.has(r)||pa(r,!1,e),pa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hn]||(t[Hn]=!0,pa("selectionchange",!1,t))}}function Wo(e,t,r,n){switch(fo(t)){case 1:var i=ac;break;case 4:i=lc;break;default:i=qi}r=i.bind(null,t,r,e),i=void 0,!Vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function ha(e,t,r,n,i){var a=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=qt(s),o===null)return;if(u=o.tag,u===5||u===6){n=a=o;continue e}s=s.parentNode}}n=n.return}Kl(function(){var p=a,x=Ui(r),y=[];e:{var g=Uo.get(e);if(g!==void 0){var k=ea,C=e;switch(e){case"keypress":if(An(r)===0)break e;case"keydown":case"keyup":k=Nc;break;case"focusin":C="focus",k=na;break;case"focusout":C="blur",k=na;break;case"beforeblur":case"afterblur":k=na;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Sc;break;case Ao:case Io:case Oo:k=mc;break;case Do:k=bc;break;case"scroll":k=oc;break;case"wheel":k=Fc;break;case"copy":case"cut":case"paste":k=pc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=xo}var b=(t&4)!==0,he=!b&&e==="scroll",m=b?g!==null?g+"Capture":null:g;b=[];for(var c=p,f;c!==null;){f=c;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,m!==null&&(w=Ir(c,m),w!=null&&b.push(rn(c,w,f)))),he)break;c=c.return}0<b.length&&(g=new k(g,C,null,r,x),y.push({event:g,listeners:b}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&r!==Di&&(C=r.relatedTarget||r.fromElement)&&(qt(C)||C[kt]))break e;if((k||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,k?(C=r.relatedTarget||r.toElement,k=p,C=C?qt(C):null,C!==null&&(he=Xt(C),C!==he||C.tag!==5&&C.tag!==6)&&(C=null)):(k=null,C=p),k!==C)){if(b=go,w="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=xo,w="onPointerLeave",m="onPointerEnter",c="pointer"),he=k==null?g:yr(k),f=C==null?g:yr(C),g=new b(w,c+"leave",k,r,x),g.target=he,g.relatedTarget=f,w=null,qt(x)===p&&(b=new b(m,c+"enter",C,r,x),b.target=f,b.relatedTarget=he,w=b),he=w,k&&C)t:{for(b=k,m=C,c=0,f=b;f;f=vr(f))c++;for(f=0,w=m;w;w=vr(w))f++;for(;0<c-f;)b=vr(b),c--;for(;0<f-c;)m=vr(m),f--;for(;c--;){if(b===m||m!==null&&b===m.alternate)break t;b=vr(b),m=vr(m)}b=null}else b=null;k!==null&&$o(y,g,k,b,!1),C!==null&&he!==null&&$o(y,he,C,b,!0)}}e:{if(g=p?yr(p):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var F=Mc;else if(So(g))if(bo)F=Dc;else{F=Ic;var _=Ac}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=Oc);if(F&&(F=F(e,p))){Co(y,F,r,x);break e}_&&_(e,g,p),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Li(g,"number",g.value)}switch(_=p?yr(p):window,e){case"focusin":(So(_)||_.contentEditable==="true")&&(hr=_,ua=p,Jr=null);break;case"focusout":Jr=ua=hr=null;break;case"mousedown":ca=!0;break;case"contextmenu":case"mouseup":case"dragend":ca=!1,Lo(y,r,x);break;case"selectionchange":if(Hc)break;case"keydown":case"keyup":Lo(y,r,x)}var P;if(aa)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else pr?ko(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(yo&&r.locale!=="ko"&&(pr||T!=="onCompositionStart"?T==="onCompositionEnd"&&pr&&(P=po()):(Lt=x,Ji="value"in Lt?Lt.value:Lt.textContent,pr=!0)),_=Vn(p,T),0<_.length&&(T=new vo(T,e,null,r,x),y.push({event:T,listeners:_}),P?T.data=P:(P=jo(r),P!==null&&(T.data=P)))),(P=_c?Pc(e,r):Rc(e,r))&&(p=Vn(p,"onBeforeInput"),0<p.length&&(x=new vo("onBeforeInput","beforeinput",null,r,x),y.push({event:x,listeners:p}),x.data=P))}Vo(y,t)})}function rn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Vn(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ir(e,r),a!=null&&n.unshift(rn(e,a,i)),a=Ir(e,t),a!=null&&n.push(rn(e,a,i))),e=e.return}return n}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $o(e,t,r,n,i){for(var a=t._reactName,o=[];r!==null&&r!==n;){var s=r,u=s.alternate,p=s.stateNode;if(u!==null&&u===n)break;s.tag===5&&p!==null&&(s=p,i?(u=Ir(r,a),u!=null&&o.unshift(rn(r,u,s))):i||(u=Ir(r,a),u!=null&&o.push(rn(r,u,s)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Gc=/\r\n?/g,Qc=/\u0000|\uFFFD/g;function Go(e){return(typeof e=="string"?e:""+e).replace(Gc,`
`).replace(Qc,"")}function Wn(e,t,r){if(t=Go(t),Go(e)!==t&&r)throw Error(h(425))}function $n(){}var ga=null,va=null;function xa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ya=typeof setTimeout=="function"?setTimeout:void 0,Kc=typeof clearTimeout=="function"?clearTimeout:void 0,Qo=typeof Promise=="function"?Promise:void 0,Yc=typeof queueMicrotask=="function"?queueMicrotask:typeof Qo<"u"?function(e){return Qo.resolve(null).then(e).catch(Xc)}:ya;function Xc(e){setTimeout(function(){throw e})}function wa(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Gr(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Gr(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ko(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),xt="__reactFiber$"+xr,nn="__reactProps$"+xr,kt="__reactContainer$"+xr,Na="__reactEvents$"+xr,qc="__reactListeners$"+xr,Zc="__reactHandles$"+xr;function qt(e){var t=e[xt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[kt]||r[xt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ko(e);e!==null;){if(r=e[xt])return r;e=Ko(e)}return t}e=r,r=e.parentNode}return null}function an(e){return e=e[xt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Gn(e){return e[nn]||null}var ka=[],wr=-1;function It(e){return{current:e}}function re(e){0>wr||(e.current=ka[wr],ka[wr]=null,wr--)}function ee(e,t){wr++,ka[wr]=e.current,e.current=t}var Ot={},Pe=It(Ot),He=It(!1),Zt=Ot;function Nr(e,t){var r=e.type.contextTypes;if(!r)return Ot;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(e){return e=e.childContextTypes,e!=null}function Qn(){re(He),re(Pe)}function Yo(e,t,r){if(Pe.current!==Ot)throw Error(h(168));ee(Pe,t),ee(He,r)}function Xo(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(h(108,J(e)||"Unknown",i));return S({},r,n)}function Kn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Zt=Pe.current,ee(Pe,e),ee(He,He.current),!0}function qo(e,t,r){var n=e.stateNode;if(!n)throw Error(h(169));r?(e=Xo(e,t,Zt),n.__reactInternalMemoizedMergedChildContext=e,re(He),re(Pe),ee(Pe,e)):re(He),ee(He,r)}var jt=null,Yn=!1,ja=!1;function Zo(e){jt===null?jt=[e]:jt.push(e)}function Jc(e){Yn=!0,Zo(e)}function Dt(){if(!ja&&jt!==null){ja=!0;var e=0,t=q;try{var r=jt;for(q=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}jt=null,Yn=!1}catch(i){throw jt!==null&&(jt=jt.slice(e+1)),Jl($i,Dt),i}finally{q=t,ja=!1}}return null}var kr=[],jr=0,Xn=null,qn=0,nt=[],it=0,Jt=null,St=1,Ct="";function er(e,t){kr[jr++]=qn,kr[jr++]=Xn,Xn=e,qn=t}function Jo(e,t,r){nt[it++]=St,nt[it++]=Ct,nt[it++]=Jt,Jt=e;var n=St;e=Ct;var i=32-ut(n)-1;n&=~(1<<i),r+=1;var a=32-ut(t)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,St=1<<32-ut(t)+i|r<<i|n,Ct=a+e}else St=1<<a|r<<i|n,Ct=e}function Sa(e){e.return!==null&&(er(e,1),Jo(e,1,0))}function Ca(e){for(;e===Xn;)Xn=kr[--jr],kr[jr]=null,qn=kr[--jr],kr[jr]=null;for(;e===Jt;)Jt=nt[--it],nt[it]=null,Ct=nt[--it],nt[it]=null,St=nt[--it],nt[it]=null}var Xe=null,qe=null,ae=!1,dt=null;function es(e,t){var r=st(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ts(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,qe=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Jt!==null?{id:St,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=st(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Xe=e,qe=null,!0):!1;default:return!1}}function ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ea(e){if(ae){var t=qe;if(t){var r=t;if(!ts(e,t)){if(ba(e))throw Error(h(418));t=At(r.nextSibling);var n=Xe;t&&ts(e,t)?es(n,r):(e.flags=e.flags&-4097|2,ae=!1,Xe=e)}}else{if(ba(e))throw Error(h(418));e.flags=e.flags&-4097|2,ae=!1,Xe=e}}}function rs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Zn(e){if(e!==Xe)return!1;if(!ae)return rs(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xa(e.type,e.memoizedProps)),t&&(t=qe)){if(ba(e))throw ns(),Error(h(418));for(;t;)es(e,t),t=At(t.nextSibling)}if(rs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){qe=At(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Xe?At(e.stateNode.nextSibling):null;return!0}function ns(){for(var e=qe;e;)e=At(e.nextSibling)}function Sr(){qe=Xe=null,ae=!1}function Fa(e){dt===null?dt=[e]:dt.push(e)}var ed=H.ReactCurrentBatchConfig;function ln(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(h(309));var n=r.stateNode}if(!n)throw Error(h(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(h(284));if(!r._owner)throw Error(h(290,e))}return e}function Jn(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function is(e){var t=e._init;return t(e._payload)}function as(e){function t(m,c){if(e){var f=m.deletions;f===null?(m.deletions=[c],m.flags|=16):f.push(c)}}function r(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function n(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function i(m,c){return m=Qt(m,c),m.index=0,m.sibling=null,m}function a(m,c,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<c?(m.flags|=2,c):f):(m.flags|=2,c)):(m.flags|=1048576,c)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,c,f,w){return c===null||c.tag!==6?(c=yl(f,m.mode,w),c.return=m,c):(c=i(c,f),c.return=m,c)}function u(m,c,f,w){var F=f.type;return F===ce?x(m,c,f.props.children,w,f.key):c!==null&&(c.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Be&&is(F)===c.type)?(w=i(c,f.props),w.ref=ln(m,c,f),w.return=m,w):(w=ji(f.type,f.key,f.props,null,m.mode,w),w.ref=ln(m,c,f),w.return=m,w)}function p(m,c,f,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=wl(f,m.mode,w),c.return=m,c):(c=i(c,f.children||[]),c.return=m,c)}function x(m,c,f,w,F){return c===null||c.tag!==7?(c=sr(f,m.mode,w,F),c.return=m,c):(c=i(c,f),c.return=m,c)}function y(m,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=yl(""+c,m.mode,f),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case oe:return f=ji(c.type,c.key,c.props,null,m.mode,f),f.ref=ln(m,null,c),f.return=m,f;case ge:return c=wl(c,m.mode,f),c.return=m,c;case Be:var w=c._init;return y(m,w(c._payload),f)}if(Lr(c)||R(c))return c=sr(c,m.mode,f,null),c.return=m,c;Jn(m,c)}return null}function g(m,c,f,w){var F=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return F!==null?null:s(m,c,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case oe:return f.key===F?u(m,c,f,w):null;case ge:return f.key===F?p(m,c,f,w):null;case Be:return F=f._init,g(m,c,F(f._payload),w)}if(Lr(f)||R(f))return F!==null?null:x(m,c,f,w,null);Jn(m,f)}return null}function k(m,c,f,w,F){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(f)||null,s(c,m,""+w,F);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oe:return m=m.get(w.key===null?f:w.key)||null,u(c,m,w,F);case ge:return m=m.get(w.key===null?f:w.key)||null,p(c,m,w,F);case Be:var _=w._init;return k(m,c,f,_(w._payload),F)}if(Lr(w)||R(w))return m=m.get(f)||null,x(c,m,w,F,null);Jn(c,w)}return null}function C(m,c,f,w){for(var F=null,_=null,P=c,T=c=0,je=null;P!==null&&T<f.length;T++){P.index>T?(je=P,P=null):je=P.sibling;var G=g(m,P,f[T],w);if(G===null){P===null&&(P=je);break}e&&P&&G.alternate===null&&t(m,P),c=a(G,c,T),_===null?F=G:_.sibling=G,_=G,P=je}if(T===f.length)return r(m,P),ae&&er(m,T),F;if(P===null){for(;T<f.length;T++)P=y(m,f[T],w),P!==null&&(c=a(P,c,T),_===null?F=P:_.sibling=P,_=P);return ae&&er(m,T),F}for(P=n(m,P);T<f.length;T++)je=k(P,m,T,f[T],w),je!==null&&(e&&je.alternate!==null&&P.delete(je.key===null?T:je.key),c=a(je,c,T),_===null?F=je:_.sibling=je,_=je);return e&&P.forEach(function(Kt){return t(m,Kt)}),ae&&er(m,T),F}function b(m,c,f,w){var F=R(f);if(typeof F!="function")throw Error(h(150));if(f=F.call(f),f==null)throw Error(h(151));for(var _=F=null,P=c,T=c=0,je=null,G=f.next();P!==null&&!G.done;T++,G=f.next()){P.index>T?(je=P,P=null):je=P.sibling;var Kt=g(m,P,G.value,w);if(Kt===null){P===null&&(P=je);break}e&&P&&Kt.alternate===null&&t(m,P),c=a(Kt,c,T),_===null?F=Kt:_.sibling=Kt,_=Kt,P=je}if(G.done)return r(m,P),ae&&er(m,T),F;if(P===null){for(;!G.done;T++,G=f.next())G=y(m,G.value,w),G!==null&&(c=a(G,c,T),_===null?F=G:_.sibling=G,_=G);return ae&&er(m,T),F}for(P=n(m,P);!G.done;T++,G=f.next())G=k(P,m,T,G.value,w),G!==null&&(e&&G.alternate!==null&&P.delete(G.key===null?T:G.key),c=a(G,c,T),_===null?F=G:_.sibling=G,_=G);return e&&P.forEach(function(Td){return t(m,Td)}),ae&&er(m,T),F}function he(m,c,f,w){if(typeof f=="object"&&f!==null&&f.type===ce&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case oe:e:{for(var F=f.key,_=c;_!==null;){if(_.key===F){if(F=f.type,F===ce){if(_.tag===7){r(m,_.sibling),c=i(_,f.props.children),c.return=m,m=c;break e}}else if(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Be&&is(F)===_.type){r(m,_.sibling),c=i(_,f.props),c.ref=ln(m,_,f),c.return=m,m=c;break e}r(m,_);break}else t(m,_);_=_.sibling}f.type===ce?(c=sr(f.props.children,m.mode,w,f.key),c.return=m,m=c):(w=ji(f.type,f.key,f.props,null,m.mode,w),w.ref=ln(m,c,f),w.return=m,m=w)}return o(m);case ge:e:{for(_=f.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){r(m,c.sibling),c=i(c,f.children||[]),c.return=m,m=c;break e}else{r(m,c);break}else t(m,c);c=c.sibling}c=wl(f,m.mode,w),c.return=m,m=c}return o(m);case Be:return _=f._init,he(m,c,_(f._payload),w)}if(Lr(f))return C(m,c,f,w);if(R(f))return b(m,c,f,w);Jn(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(r(m,c.sibling),c=i(c,f),c.return=m,m=c):(r(m,c),c=yl(f,m.mode,w),c.return=m,m=c),o(m)):r(m,c)}return he}var Cr=as(!0),ls=as(!1),ei=It(null),ti=null,br=null,za=null;function _a(){za=br=ti=null}function Pa(e){var t=ei.current;re(ei),e._currentValue=t}function Ra(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Er(e,t){ti=e,za=br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(We=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(za!==e)if(e={context:e,memoizedValue:t,next:null},br===null){if(ti===null)throw Error(h(308));br=e,ti.dependencies={lanes:0,firstContext:e}}else br=br.next=e;return t}var tr=null;function Ta(e){tr===null?tr=[e]:tr.push(e)}function os(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Ta(t)):(r.next=i.next,i.next=r),t.interleaved=r,bt(e,n)}function bt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Ut=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ss(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(V&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,bt(e,r)}return i=n.interleaved,i===null?(t.next=t,Ta(n)):(t.next=i.next,i.next=t),n.interleaved=t,bt(e,r)}function ri(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ki(e,r)}}function us(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ni(e,t,r,n){var i=e.updateQueue;Ut=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,p=u.next;u.next=null,o===null?a=p:o.next=p,o=u;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==o&&(s===null?x.firstBaseUpdate=p:s.next=p,x.lastBaseUpdate=u))}if(a!==null){var y=i.baseState;o=0,x=p=u=null,s=a;do{var g=s.lane,k=s.eventTime;if((n&g)===g){x!==null&&(x=x.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,b=s;switch(g=t,k=r,b.tag){case 1:if(C=b.payload,typeof C=="function"){y=C.call(k,y,g);break e}y=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=b.payload,g=typeof C=="function"?C.call(k,y,g):C,g==null)break e;y=S({},y,g);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else k={eventTime:k,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(p=x=k,u=y):x=x.next=k,o|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(x===null&&(u=y),i.baseState=u,i.firstBaseUpdate=p,i.lastBaseUpdate=x,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);ir|=o,e.lanes=o,e.memoizedState=y}}function cs(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(h(191,i));i.call(n)}}}var on={},yt=It(on),sn=It(on),un=It(on);function rr(e){if(e===on)throw Error(h(174));return e}function Ma(e,t){switch(ee(un,t),ee(sn,e),ee(yt,on),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ai(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ai(t,e)}re(yt),ee(yt,t)}function Fr(){re(yt),re(sn),re(un)}function ds(e){rr(un.current);var t=rr(yt.current),r=Ai(t,e.type);t!==r&&(ee(sn,e),ee(yt,r))}function Aa(e){sn.current===e&&(re(yt),re(sn))}var se=It(0);function ii(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ia=[];function Oa(){for(var e=0;e<Ia.length;e++)Ia[e]._workInProgressVersionPrimary=null;Ia.length=0}var ai=H.ReactCurrentDispatcher,Da=H.ReactCurrentBatchConfig,nr=0,ue=null,xe=null,Ne=null,li=!1,cn=!1,dn=0,td=0;function Re(){throw Error(h(321))}function Ua(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ct(e[r],t[r]))return!1;return!0}function Ba(e,t,r,n,i,a){if(nr=a,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=e===null||e.memoizedState===null?ad:ld,e=r(n,i),cn){a=0;do{if(cn=!1,dn=0,25<=a)throw Error(h(301));a+=1,Ne=xe=null,t.updateQueue=null,ai.current=od,e=r(n,i)}while(cn)}if(ai.current=ui,t=xe!==null&&xe.next!==null,nr=0,Ne=xe=ue=null,li=!1,t)throw Error(h(300));return e}function Ha(){var e=dn!==0;return dn=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ue.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function lt(){if(xe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ne===null?ue.memoizedState:Ne.next;if(t!==null)Ne=t,xe=e;else{if(e===null)throw Error(h(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ne===null?ue.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function mn(e,t){return typeof t=="function"?t(e):t}function Va(e){var t=lt(),r=t.queue;if(r===null)throw Error(h(311));r.lastRenderedReducer=e;var n=xe,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var s=o=null,u=null,p=a;do{var x=p.lane;if((nr&x)===x)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),n=p.hasEagerState?p.eagerState:e(n,p.action);else{var y={lane:x,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(s=u=y,o=n):u=u.next=y,ue.lanes|=x,ir|=x}p=p.next}while(p!==null&&p!==a);u===null?o=n:u.next=s,ct(n,t.memoizedState)||(We=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,ue.lanes|=a,ir|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Wa(e){var t=lt(),r=t.queue;if(r===null)throw Error(h(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);ct(a,t.memoizedState)||(We=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function ms(){}function fs(e,t){var r=ue,n=lt(),i=t(),a=!ct(n.memoizedState,i);if(a&&(n.memoizedState=i,We=!0),n=n.queue,$a(gs.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||Ne!==null&&Ne.memoizedState.tag&1){if(r.flags|=2048,fn(9,hs.bind(null,r,n,i,t),void 0,null),ke===null)throw Error(h(349));(nr&30)!==0||ps(r,t,i)}return i}function ps(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function hs(e,t,r,n){t.value=r,t.getSnapshot=n,vs(t)&&xs(e)}function gs(e,t,r){return r(function(){vs(t)&&xs(e)})}function vs(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ct(e,r)}catch{return!0}}function xs(e){var t=bt(e,1);t!==null&&ht(t,e,1,-1)}function ys(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},t.queue=e,e=e.dispatch=id.bind(null,ue,e),[t.memoizedState,e]}function fn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function ws(){return lt().memoizedState}function oi(e,t,r,n){var i=wt();ue.flags|=e,i.memoizedState=fn(1|t,r,void 0,n===void 0?null:n)}function si(e,t,r,n){var i=lt();n=n===void 0?null:n;var a=void 0;if(xe!==null){var o=xe.memoizedState;if(a=o.destroy,n!==null&&Ua(n,o.deps)){i.memoizedState=fn(t,r,a,n);return}}ue.flags|=e,i.memoizedState=fn(1|t,r,a,n)}function Ns(e,t){return oi(8390656,8,e,t)}function $a(e,t){return si(2048,8,e,t)}function ks(e,t){return si(4,2,e,t)}function js(e,t){return si(4,4,e,t)}function Ss(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cs(e,t,r){return r=r!=null?r.concat([e]):null,si(4,4,Ss.bind(null,t,e),r)}function Ga(){}function bs(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ua(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Es(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ua(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Fs(e,t,r){return(nr&21)===0?(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=r):(ct(r,t)||(r=no(),ue.lanes|=r,ir|=r,e.baseState=!0),t)}function rd(e,t){var r=q;q=r!==0&&4>r?r:4,e(!0);var n=Da.transition;Da.transition={};try{e(!1),t()}finally{q=r,Da.transition=n}}function zs(){return lt().memoizedState}function nd(e,t,r){var n=$t(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},_s(e))Ps(t,r);else if(r=os(e,t,r,n),r!==null){var i=Oe();ht(r,e,n,i),Rs(r,t,n)}}function id(e,t,r){var n=$t(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(_s(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,r);if(i.hasEagerState=!0,i.eagerState=s,ct(s,o)){var u=t.interleaved;u===null?(i.next=i,Ta(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=os(e,t,i,n),r!==null&&(i=Oe(),ht(r,e,n,i),Rs(r,t,n))}}function _s(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Ps(e,t){cn=li=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Rs(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ki(e,r)}}var ui={readContext:at,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},ad={readContext:at,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Ns,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,oi(4194308,4,Ss.bind(null,t,e),r)},useLayoutEffect:function(e,t){return oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return oi(4,2,e,t)},useMemo:function(e,t){var r=wt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=wt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=nd.bind(null,ue,e),[n.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:ys,useDebugValue:Ga,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=ys(!1),t=e[0];return e=rd.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ue,i=wt();if(ae){if(r===void 0)throw Error(h(407));r=r()}else{if(r=t(),ke===null)throw Error(h(349));(nr&30)!==0||ps(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,Ns(gs.bind(null,n,a,e),[e]),n.flags|=2048,fn(9,hs.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=wt(),t=ke.identifierPrefix;if(ae){var r=Ct,n=St;r=(n&~(1<<32-ut(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=dn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=td++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ld={readContext:at,useCallback:bs,useContext:at,useEffect:$a,useImperativeHandle:Cs,useInsertionEffect:ks,useLayoutEffect:js,useMemo:Es,useReducer:Va,useRef:ws,useState:function(){return Va(mn)},useDebugValue:Ga,useDeferredValue:function(e){var t=lt();return Fs(t,xe.memoizedState,e)},useTransition:function(){var e=Va(mn)[0],t=lt().memoizedState;return[e,t]},useMutableSource:ms,useSyncExternalStore:fs,useId:zs,unstable_isNewReconciler:!1},od={readContext:at,useCallback:bs,useContext:at,useEffect:$a,useImperativeHandle:Cs,useInsertionEffect:ks,useLayoutEffect:js,useMemo:Es,useReducer:Wa,useRef:ws,useState:function(){return Wa(mn)},useDebugValue:Ga,useDeferredValue:function(e){var t=lt();return xe===null?t.memoizedState=e:Fs(t,xe.memoizedState,e)},useTransition:function(){var e=Wa(mn)[0],t=lt().memoizedState;return[e,t]},useMutableSource:ms,useSyncExternalStore:fs,useId:zs,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=S({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Qa(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:S({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ci={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Oe(),i=$t(e),a=Et(n,i);a.payload=t,r!=null&&(a.callback=r),t=Bt(e,a,i),t!==null&&(ht(t,e,i,n),ri(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Oe(),i=$t(e),a=Et(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Bt(e,a,i),t!==null&&(ht(t,e,i,n),ri(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Oe(),n=$t(e),i=Et(r,n);i.tag=2,t!=null&&(i.callback=t),t=Bt(e,i,n),t!==null&&(ht(t,e,n,r),ri(t,e,n))}};function Ts(e,t,r,n,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,o):t.prototype&&t.prototype.isPureReactComponent?!Zr(r,n)||!Zr(i,a):!0}function Ls(e,t,r){var n=!1,i=Ot,a=t.contextType;return typeof a=="object"&&a!==null?a=at(a):(i=Ve(t)?Zt:Pe.current,n=t.contextTypes,a=(n=n!=null)?Nr(e,i):Ot),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ms(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Ka(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},La(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=at(a):(a=Ve(t)?Zt:Pe.current,i.context=Nr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Qa(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ci.enqueueReplaceState(i,i.state,null),ni(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t){try{var r="",n=t;do r+=W(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Ya(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Xa(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var sd=typeof WeakMap=="function"?WeakMap:Map;function As(e,t,r){r=Et(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){vi||(vi=!0,dl=n),Xa(e,t)},r}function Is(e,t,r){r=Et(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Xa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Xa(e,t),typeof n!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Os(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new sd;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=kd.bind(null,e,t,r),t.then(e,e))}function Ds(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Us(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Et(-1,1),t.tag=2,Bt(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ud=H.ReactCurrentOwner,We=!1;function Ie(e,t,r,n){t.child=e===null?ls(t,null,r,n):Cr(t,e.child,r,n)}function Bs(e,t,r,n,i){r=r.render;var a=t.ref;return Er(t,i),n=Ba(e,t,r,n,a,i),r=Ha(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(ae&&r&&Sa(t),t.flags|=1,Ie(e,t,n,i),t.child)}function Hs(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!xl(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Vs(e,t,a,n,i)):(e=ji(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:Zr,r(o,n)&&e.ref===t.ref)return Ft(e,t,i)}return t.flags|=1,e=Qt(a,n),e.ref=t.ref,e.return=t,t.child=e}function Vs(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(Zr(a,n)&&e.ref===t.ref)if(We=!1,t.pendingProps=n=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,Ft(e,t,i)}return qa(e,t,r,n,i)}function Ws(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Pr,Ze),Ze|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Pr,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,ee(Pr,Ze),Ze|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,ee(Pr,Ze),Ze|=n;return Ie(e,t,i,r),t.child}function $s(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function qa(e,t,r,n,i){var a=Ve(r)?Zt:Pe.current;return a=Nr(t,a),Er(t,i),r=Ba(e,t,r,n,a,i),n=Ha(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(ae&&n&&Sa(t),t.flags|=1,Ie(e,t,r,i),t.child)}function Gs(e,t,r,n,i){if(Ve(r)){var a=!0;Kn(t)}else a=!1;if(Er(t,i),t.stateNode===null)mi(e,t),Ls(t,r,n),Ka(t,r,n,i),n=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,p=r.contextType;typeof p=="object"&&p!==null?p=at(p):(p=Ve(r)?Zt:Pe.current,p=Nr(t,p));var x=r.getDerivedStateFromProps,y=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==n||u!==p)&&Ms(t,o,n,p),Ut=!1;var g=t.memoizedState;o.state=g,ni(t,n,o,i),u=t.memoizedState,s!==n||g!==u||He.current||Ut?(typeof x=="function"&&(Qa(t,r,x,n),u=t.memoizedState),(s=Ut||Ts(t,r,s,n,g,u,p))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),o.props=n,o.state=u,o.context=p,n=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,ss(e,t),s=t.memoizedProps,p=t.type===t.elementType?s:mt(t.type,s),o.props=p,y=t.pendingProps,g=o.context,u=r.contextType,typeof u=="object"&&u!==null?u=at(u):(u=Ve(r)?Zt:Pe.current,u=Nr(t,u));var k=r.getDerivedStateFromProps;(x=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==y||g!==u)&&Ms(t,o,n,u),Ut=!1,g=t.memoizedState,o.state=g,ni(t,n,o,i);var C=t.memoizedState;s!==y||g!==C||He.current||Ut?(typeof k=="function"&&(Qa(t,r,k,n),C=t.memoizedState),(p=Ut||Ts(t,r,p,n,g,C,u)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,C,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=C),o.props=n,o.state=C,o.context=u,n=p):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return Za(e,t,r,n,a,i)}function Za(e,t,r,n,i,a){$s(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return i&&qo(t,r,!1),Ft(e,t,a);n=t.stateNode,ud.current=t;var s=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=Cr(t,e.child,null,a),t.child=Cr(t,null,s,a)):Ie(e,t,s,a),t.memoizedState=n.state,i&&qo(t,r,!0),t.child}function Qs(e){var t=e.stateNode;t.pendingContext?Yo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yo(e,t.context,!1),Ma(e,t.containerInfo)}function Ks(e,t,r,n,i){return Sr(),Fa(i),t.flags|=256,Ie(e,t,r,n),t.child}var Ja={dehydrated:null,treeContext:null,retryLane:0};function el(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ys(e,t,r){var n=t.pendingProps,i=se.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(se,i&1),e===null)return Ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=n.children,e=n.fallback,a?(n=t.mode,a=t.child,o={mode:"hidden",children:o},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Si(o,n,0,null),e=sr(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=el(r),t.memoizedState=Ja,e):tl(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return cd(e,t,o,n,s,i,r);if(a){a=n.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:n.children};return(o&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Qt(i,u),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Qt(s,a):(a=sr(a,o,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,o=e.child.memoizedState,o=o===null?el(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=Ja,n}return a=e.child,e=a.sibling,n=Qt(a,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function tl(e,t){return t=Si({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function di(e,t,r,n){return n!==null&&Fa(n),Cr(t,e.child,null,r),e=tl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cd(e,t,r,n,i,a,o){if(r)return t.flags&256?(t.flags&=-257,n=Ya(Error(h(422))),di(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=Si({mode:"visible",children:n.children},i,0,null),a=sr(a,i,o,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,(t.mode&1)!==0&&Cr(t,e.child,null,o),t.child.memoizedState=el(o),t.memoizedState=Ja,a);if((t.mode&1)===0)return di(e,t,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,a=Error(h(419)),n=Ya(a,n,void 0),di(e,t,o,n)}if(s=(o&e.childLanes)!==0,We||s){if(n=ke,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|o))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,bt(e,i),ht(n,e,i,-1))}return vl(),n=Ya(Error(h(421))),di(e,t,o,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jd.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,qe=At(i.nextSibling),Xe=t,ae=!0,dt=null,e!==null&&(nt[it++]=St,nt[it++]=Ct,nt[it++]=Jt,St=e.id,Ct=e.overflow,Jt=t),t=tl(t,n.children),t.flags|=4096,t)}function Xs(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ra(e.return,t,r)}function rl(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function qs(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(Ie(e,t,n.children,r),n=se.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xs(e,r,t);else if(e.tag===19)Xs(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ee(se,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&ii(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),rl(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}rl(t,!0,r,null,a);break;case"together":rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,r=Qt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Qt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function dd(e,t,r){switch(t.tag){case 3:Qs(t),Sr();break;case 5:ds(t);break;case 1:Ve(t.type)&&Kn(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ee(ei,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ee(se,se.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Ys(e,t,r):(ee(se,se.current&1),e=Ft(e,t,r),e!==null?e.sibling:null);ee(se,se.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return qs(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(se,se.current),n)break;return null;case 22:case 23:return t.lanes=0,Ws(e,t,r)}return Ft(e,t,r)}var Zs,nl,Js,eu;Zs=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},nl=function(){},Js=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,rr(yt.current);var a=null;switch(r){case"input":i=Ri(e,i),n=Ri(e,n),a=[];break;case"select":i=S({},i,{value:void 0}),n=S({},n,{value:void 0}),a=[];break;case"textarea":i=Mi(e,i),n=Mi(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=$n)}Ii(r,n);var o;r=null;for(p in i)if(!n.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var s=i[p];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(I.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in n){var u=n[p];if(s=i!=null?i[p]:void 0,n.hasOwnProperty(p)&&u!==s&&(u!=null||s!=null))if(p==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(r||(r={}),r[o]=u[o])}else r||(a||(a=[]),a.push(p,r)),r=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(I.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&te("scroll",e),a||s===u||(a=[])):(a=a||[]).push(p,u))}r&&(a=a||[]).push("style",r);var p=a;(t.updateQueue=p)&&(t.flags|=4)}},eu=function(e,t,r,n){r!==n&&(t.flags|=4)};function pn(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function md(e,t,r){var n=t.pendingProps;switch(Ca(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ve(t.type)&&Qn(),Te(t),null;case 3:return n=t.stateNode,Fr(),re(He),re(Pe),Oa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dt!==null&&(pl(dt),dt=null))),nl(e,t),Te(t),null;case 5:Aa(t);var i=rr(un.current);if(r=t.type,e!==null&&t.stateNode!=null)Js(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(h(166));return Te(t),null}if(e=rr(yt.current),Zn(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[xt]=t,n[nn]=a,e=(t.mode&1)!==0,r){case"dialog":te("cancel",n),te("close",n);break;case"iframe":case"object":case"embed":te("load",n);break;case"video":case"audio":for(i=0;i<en.length;i++)te(en[i],n);break;case"source":te("error",n);break;case"img":case"image":case"link":te("error",n),te("load",n);break;case"details":te("toggle",n);break;case"input":Tl(n,a),te("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},te("invalid",n);break;case"textarea":Al(n,a),te("invalid",n)}Ii(r,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?n.textContent!==s&&(a.suppressHydrationWarning!==!0&&Wn(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Wn(n.textContent,s,e),i=["children",""+s]):I.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&te("scroll",n)}switch(r){case"input":Nn(n),Ml(n,a,!0);break;case"textarea":Nn(n),Ol(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=$n)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dl(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[xt]=t,e[nn]=n,Zs(e,t,!1,!1),t.stateNode=e;e:{switch(o=Oi(r,n),r){case"dialog":te("cancel",e),te("close",e),i=n;break;case"iframe":case"object":case"embed":te("load",e),i=n;break;case"video":case"audio":for(i=0;i<en.length;i++)te(en[i],e);i=n;break;case"source":te("error",e),i=n;break;case"img":case"image":case"link":te("error",e),te("load",e),i=n;break;case"details":te("toggle",e),i=n;break;case"input":Tl(e,n),i=Ri(e,n),te("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=S({},n,{value:void 0}),te("invalid",e);break;case"textarea":Al(e,n),i=Mi(e,n),te("invalid",e);break;default:i=n}Ii(r,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?Hl(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ul(e,u)):a==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Mr(e,u):typeof u=="number"&&Mr(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(I.hasOwnProperty(a)?u!=null&&a==="onScroll"&&te("scroll",e):u!=null&&z(e,a,u,o))}switch(r){case"input":Nn(e),Ml(e,n,!1);break;case"textarea":Nn(e),Ol(e);break;case"option":n.value!=null&&e.setAttribute("value",""+X(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?ur(e,!!n.multiple,a,!1):n.defaultValue!=null&&ur(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$n)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)eu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(h(166));if(r=rr(un.current),rr(yt.current),Zn(t)){if(n=t.stateNode,r=t.memoizedProps,n[xt]=t,(a=n.nodeValue!==r)&&(e=Xe,e!==null))switch(e.tag){case 3:Wn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wn(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[xt]=t,t.stateNode=n}return Te(t),null;case 13:if(re(se),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ns(),Sr(),t.flags|=98560,a=!1;else if(a=Zn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(h(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(h(317));a[xt]=t}else Sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else dt!==null&&(pl(dt),dt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(se.current&1)!==0?ye===0&&(ye=3):vl())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return Fr(),nl(e,t),e===null&&tn(t.stateNode.containerInfo),Te(t),null;case 10:return Pa(t.type._context),Te(t),null;case 17:return Ve(t.type)&&Qn(),Te(t),null;case 19:if(re(se),a=t.memoizedState,a===null)return Te(t),null;if(n=(t.flags&128)!==0,o=a.rendering,o===null)if(n)pn(a,!1);else{if(ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ii(e),o!==null){for(t.flags|=128,pn(a,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ee(se,se.current&1|2),t.child}e=e.sibling}a.tail!==null&&pe()>Rr&&(t.flags|=128,n=!0,pn(a,!1),t.lanes=4194304)}else{if(!n)if(e=ii(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),pn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ae)return Te(t),null}else 2*pe()-a.renderingStartTime>Rr&&r!==1073741824&&(t.flags|=128,n=!0,pn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=pe(),t.sibling=null,r=se.current,ee(se,n?r&1|2:r&1),t):(Te(t),null);case 22:case 23:return gl(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(Ze&1073741824)!==0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function fd(e,t){switch(Ca(t),t.tag){case 1:return Ve(t.type)&&Qn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fr(),re(He),re(Pe),Oa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Aa(t),null;case 13:if(re(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(se),null;case 4:return Fr(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return gl(),null;case 24:return null;default:return null}}var fi=!1,Le=!1,pd=typeof WeakSet=="function"?WeakSet:Set,j=null;function _r(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){me(e,t,n)}else r.current=null}function il(e,t,r){try{r()}catch(n){me(e,t,n)}}var tu=!1;function hd(e,t){if(ga=Tn,e=To(),sa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,s=-1,u=-1,p=0,x=0,y=e,g=null;t:for(;;){for(var k;y!==r||i!==0&&y.nodeType!==3||(s=o+i),y!==a||n!==0&&y.nodeType!==3||(u=o+n),y.nodeType===3&&(o+=y.nodeValue.length),(k=y.firstChild)!==null;)g=y,y=k;for(;;){if(y===e)break t;if(g===r&&++p===i&&(s=o),g===a&&++x===n&&(u=o),(k=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=k}r=s===-1||u===-1?null:{start:s,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(va={focusedElem:e,selectionRange:r},Tn=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var C=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var b=C.memoizedProps,he=C.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:mt(t.type,b),he);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){me(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return C=tu,tu=!1,C}function hn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&il(t,r,a)}i=i.next}while(i!==n)}}function pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function al(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function ru(e){var t=e.alternate;t!==null&&(e.alternate=null,ru(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[nn],delete t[Na],delete t[qc],delete t[Zc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nu(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=$n));else if(n!==4&&(e=e.child,e!==null))for(ll(e,t,r),e=e.sibling;e!==null;)ll(e,t,r),e=e.sibling}function ol(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ol(e,t,r),e=e.sibling;e!==null;)ol(e,t,r),e=e.sibling}var be=null,ft=!1;function Ht(e,t,r){for(r=r.child;r!==null;)au(e,t,r),r=r.sibling}function au(e,t,r){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(En,r)}catch{}switch(r.tag){case 5:Le||_r(r,t);case 6:var n=be,i=ft;be=null,Ht(e,t,r),be=n,ft=i,be!==null&&(ft?(e=be,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):be.removeChild(r.stateNode));break;case 18:be!==null&&(ft?(e=be,r=r.stateNode,e.nodeType===8?wa(e.parentNode,r):e.nodeType===1&&wa(e,r),Gr(e)):wa(be,r.stateNode));break;case 4:n=be,i=ft,be=r.stateNode.containerInfo,ft=!0,Ht(e,t,r),be=n,ft=i;break;case 0:case 11:case 14:case 15:if(!Le&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&((a&2)!==0||(a&4)!==0)&&il(r,t,o),i=i.next}while(i!==n)}Ht(e,t,r);break;case 1:if(!Le&&(_r(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){me(r,t,s)}Ht(e,t,r);break;case 21:Ht(e,t,r);break;case 22:r.mode&1?(Le=(n=Le)||r.memoizedState!==null,Ht(e,t,r),Le=n):Ht(e,t,r);break;default:Ht(e,t,r)}}function lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new pd),t.forEach(function(n){var i=Sd.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function pt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,ft=!1;break e;case 3:be=s.stateNode.containerInfo,ft=!0;break e;case 4:be=s.stateNode.containerInfo,ft=!0;break e}s=s.return}if(be===null)throw Error(h(160));au(a,o,i),be=null,ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(p){me(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ou(t,e),t=t.sibling}function ou(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),Nt(e),n&4){try{hn(3,e,e.return),pi(3,e)}catch(b){me(e,e.return,b)}try{hn(5,e,e.return)}catch(b){me(e,e.return,b)}}break;case 1:pt(t,e),Nt(e),n&512&&r!==null&&_r(r,r.return);break;case 5:if(pt(t,e),Nt(e),n&512&&r!==null&&_r(r,r.return),e.flags&32){var i=e.stateNode;try{Mr(i,"")}catch(b){me(e,e.return,b)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Ll(i,a),Oi(s,o);var p=Oi(s,a);for(o=0;o<u.length;o+=2){var x=u[o],y=u[o+1];x==="style"?Hl(i,y):x==="dangerouslySetInnerHTML"?Ul(i,y):x==="children"?Mr(i,y):z(i,x,y,p)}switch(s){case"input":Ti(i,a);break;case"textarea":Il(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var k=a.value;k!=null?ur(i,!!a.multiple,k,!1):g!==!!a.multiple&&(a.defaultValue!=null?ur(i,!!a.multiple,a.defaultValue,!0):ur(i,!!a.multiple,a.multiple?[]:"",!1))}i[nn]=a}catch(b){me(e,e.return,b)}}break;case 6:if(pt(t,e),Nt(e),n&4){if(e.stateNode===null)throw Error(h(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(b){me(e,e.return,b)}}break;case 3:if(pt(t,e),Nt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(b){me(e,e.return,b)}break;case 4:pt(t,e),Nt(e);break;case 13:pt(t,e),Nt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(cl=pe())),n&4&&lu(e);break;case 22:if(x=r!==null&&r.memoizedState!==null,e.mode&1?(Le=(p=Le)||x,pt(t,e),Le=p):pt(t,e),Nt(e),n&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!x&&(e.mode&1)!==0)for(j=e,x=e.child;x!==null;){for(y=j=x;j!==null;){switch(g=j,k=g.child,g.tag){case 0:case 11:case 14:case 15:hn(4,g,g.return);break;case 1:_r(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(b){me(n,r,b)}}break;case 5:_r(g,g.return);break;case 22:if(g.memoizedState!==null){cu(y);continue}}k!==null?(k.return=g,j=k):cu(y)}x=x.sibling}e:for(x=null,y=e;;){if(y.tag===5){if(x===null){x=y;try{i=y.stateNode,p?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Bl("display",o))}catch(b){me(e,e.return,b)}}}else if(y.tag===6){if(x===null)try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(b){me(e,e.return,b)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;x===y&&(x=null),y=y.return}x===y&&(x=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:pt(t,e),Nt(e),n&4&&lu(e);break;case 21:break;default:pt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(nu(r)){var n=r;break e}r=r.return}throw Error(h(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Mr(i,""),n.flags&=-33);var a=iu(e);ol(e,a,i);break;case 3:case 4:var o=n.stateNode.containerInfo,s=iu(e);ll(e,s,o);break;default:throw Error(h(161))}}catch(u){me(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gd(e,t,r){j=e,su(e)}function su(e,t,r){for(var n=(e.mode&1)!==0;j!==null;){var i=j,a=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||fi;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Le;s=fi;var p=Le;if(fi=o,(Le=u)&&!p)for(j=i;j!==null;)o=j,u=o.child,o.tag===22&&o.memoizedState!==null?du(i):u!==null?(u.return=o,j=u):du(i);for(;a!==null;)j=a,su(a),a=a.sibling;j=i,fi=s,Le=p}uu(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,j=a):uu(e)}}function uu(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Le||pi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Le)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:mt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&cs(t,a,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}cs(t,o,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var x=p.memoizedState;if(x!==null){var y=x.dehydrated;y!==null&&Gr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}Le||t.flags&512&&al(t)}catch(g){me(t,t.return,g)}}if(t===e){j=null;break}if(r=t.sibling,r!==null){r.return=t.return,j=r;break}j=t.return}}function cu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var r=t.sibling;if(r!==null){r.return=t.return,j=r;break}j=t.return}}function du(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{pi(4,t)}catch(u){me(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){me(t,i,u)}}var a=t.return;try{al(t)}catch(u){me(t,a,u)}break;case 5:var o=t.return;try{al(t)}catch(u){me(t,o,u)}}}catch(u){me(t,t.return,u)}if(t===e){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var vd=Math.ceil,hi=H.ReactCurrentDispatcher,sl=H.ReactCurrentOwner,ot=H.ReactCurrentBatchConfig,V=0,ke=null,ve=null,Ee=0,Ze=0,Pr=It(0),ye=0,gn=null,ir=0,gi=0,ul=0,vn=null,$e=null,cl=0,Rr=1/0,zt=null,vi=!1,dl=null,Vt=null,xi=!1,Wt=null,yi=0,xn=0,ml=null,wi=-1,Ni=0;function Oe(){return(V&6)!==0?pe():wi!==-1?wi:wi=pe()}function $t(e){return(e.mode&1)===0?1:(V&2)!==0&&Ee!==0?Ee&-Ee:ed.transition!==null?(Ni===0&&(Ni=no()),Ni):(e=q,e!==0||(e=window.event,e=e===void 0?16:fo(e.type)),e)}function ht(e,t,r,n){if(50<xn)throw xn=0,ml=null,Error(h(185));Br(e,r,n),((V&2)===0||e!==ke)&&(e===ke&&((V&2)===0&&(gi|=r),ye===4&&Gt(e,Ee)),Ge(e,n),r===1&&V===0&&(t.mode&1)===0&&(Rr=pe()+500,Yn&&Dt()))}function Ge(e,t){var r=e.callbackNode;ec(e,t);var n=_n(e,e===ke?Ee:0);if(n===0)r!==null&&eo(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&eo(r),t===1)e.tag===0?Jc(fu.bind(null,e)):Zo(fu.bind(null,e)),Yc(function(){(V&6)===0&&Dt()}),r=null;else{switch(io(n)){case 1:r=$i;break;case 4:r=to;break;case 16:r=bn;break;case 536870912:r=ro;break;default:r=bn}r=Nu(r,mu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function mu(e,t){if(wi=-1,Ni=0,(V&6)!==0)throw Error(h(327));var r=e.callbackNode;if(Tr()&&e.callbackNode!==r)return null;var n=_n(e,e===ke?Ee:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=ki(e,n);else{t=n;var i=V;V|=2;var a=hu();(ke!==e||Ee!==t)&&(zt=null,Rr=pe()+500,lr(e,t));do try{wd();break}catch(s){pu(e,s)}while(!0);_a(),hi.current=a,V=i,ve!==null?t=0:(ke=null,Ee=0,t=ye)}if(t!==0){if(t===2&&(i=Gi(e),i!==0&&(n=i,t=fl(e,i))),t===1)throw r=gn,lr(e,0),Gt(e,n),Ge(e,pe()),r;if(t===6)Gt(e,n);else{if(i=e.current.alternate,(n&30)===0&&!xd(i)&&(t=ki(e,n),t===2&&(a=Gi(e),a!==0&&(n=a,t=fl(e,a))),t===1))throw r=gn,lr(e,0),Gt(e,n),Ge(e,pe()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(h(345));case 2:or(e,$e,zt);break;case 3:if(Gt(e,n),(n&130023424)===n&&(t=cl+500-pe(),10<t)){if(_n(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ya(or.bind(null,e,$e,zt),t);break}or(e,$e,zt);break;case 4:if(Gt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var o=31-ut(n);a=1<<o,o=t[o],o>i&&(i=o),n&=~a}if(n=i,n=pe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*vd(n/1960))-n,10<n){e.timeoutHandle=ya(or.bind(null,e,$e,zt),n);break}or(e,$e,zt);break;case 5:or(e,$e,zt);break;default:throw Error(h(329))}}}return Ge(e,pe()),e.callbackNode===r?mu.bind(null,e):null}function fl(e,t){var r=vn;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=ki(e,t),e!==2&&(t=$e,$e=r,t!==null&&pl(t)),e}function pl(e){$e===null?$e=e:$e.push.apply($e,e)}function xd(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!ct(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~ul,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ut(t),n=1<<r;e[r]=-1,t&=~n}}function fu(e){if((V&6)!==0)throw Error(h(327));Tr();var t=_n(e,0);if((t&1)===0)return Ge(e,pe()),null;var r=ki(e,t);if(e.tag!==0&&r===2){var n=Gi(e);n!==0&&(t=n,r=fl(e,n))}if(r===1)throw r=gn,lr(e,0),Gt(e,t),Ge(e,pe()),r;if(r===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,$e,zt),Ge(e,pe()),null}function hl(e,t){var r=V;V|=1;try{return e(t)}finally{V=r,V===0&&(Rr=pe()+500,Yn&&Dt())}}function ar(e){Wt!==null&&Wt.tag===0&&(V&6)===0&&Tr();var t=V;V|=1;var r=ot.transition,n=q;try{if(ot.transition=null,q=1,e)return e()}finally{q=n,ot.transition=r,V=t,(V&6)===0&&Dt()}}function gl(){Ze=Pr.current,re(Pr)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Kc(r)),ve!==null)for(r=ve.return;r!==null;){var n=r;switch(Ca(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Qn();break;case 3:Fr(),re(He),re(Pe),Oa();break;case 5:Aa(n);break;case 4:Fr();break;case 13:re(se);break;case 19:re(se);break;case 10:Pa(n.type._context);break;case 22:case 23:gl()}r=r.return}if(ke=e,ve=e=Qt(e.current,null),Ee=Ze=t,ye=0,gn=null,ul=gi=ir=0,$e=vn=null,tr!==null){for(t=0;t<tr.length;t++)if(r=tr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var o=a.next;a.next=i,n.next=o}r.pending=n}tr=null}return e}function pu(e,t){do{var r=ve;try{if(_a(),ai.current=ui,li){for(var n=ue.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}li=!1}if(nr=0,Ne=xe=ue=null,cn=!1,dn=0,sl.current=null,r===null||r.return===null){ye=1,gn=t,ve=null;break}e:{var a=e,o=r.return,s=r,u=t;if(t=Ee,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,x=s,y=x.tag;if((x.mode&1)===0&&(y===0||y===11||y===15)){var g=x.alternate;g?(x.updateQueue=g.updateQueue,x.memoizedState=g.memoizedState,x.lanes=g.lanes):(x.updateQueue=null,x.memoizedState=null)}var k=Ds(o);if(k!==null){k.flags&=-257,Us(k,o,s,a,t),k.mode&1&&Os(a,p,t),t=k,u=p;var C=t.updateQueue;if(C===null){var b=new Set;b.add(u),t.updateQueue=b}else C.add(u);break e}else{if((t&1)===0){Os(a,p,t),vl();break e}u=Error(h(426))}}else if(ae&&s.mode&1){var he=Ds(o);if(he!==null){(he.flags&65536)===0&&(he.flags|=256),Us(he,o,s,a,t),Fa(zr(u,s));break e}}a=u=zr(u,s),ye!==4&&(ye=2),vn===null?vn=[a]:vn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=As(a,u,t);us(a,m);break e;case 1:s=u;var c=a.type,f=a.stateNode;if((a.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Vt===null||!Vt.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=Is(a,s,t);us(a,w);break e}}a=a.return}while(a!==null)}vu(r)}catch(F){t=F,ve===r&&r!==null&&(ve=r=r.return);continue}break}while(!0)}function hu(){var e=hi.current;return hi.current=ui,e===null?ui:e}function vl(){(ye===0||ye===3||ye===2)&&(ye=4),ke===null||(ir&268435455)===0&&(gi&268435455)===0||Gt(ke,Ee)}function ki(e,t){var r=V;V|=2;var n=hu();(ke!==e||Ee!==t)&&(zt=null,lr(e,t));do try{yd();break}catch(i){pu(e,i)}while(!0);if(_a(),V=r,hi.current=n,ve!==null)throw Error(h(261));return ke=null,Ee=0,ye}function yd(){for(;ve!==null;)gu(ve)}function wd(){for(;ve!==null&&!$u();)gu(ve)}function gu(e){var t=wu(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?vu(e):ve=t,sl.current=null}function vu(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=md(r,t,Ze),r!==null){ve=r;return}}else{if(r=fd(r,t),r!==null){r.flags&=32767,ve=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,ve=null;return}}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);ye===0&&(ye=5)}function or(e,t,r){var n=q,i=ot.transition;try{ot.transition=null,q=1,Nd(e,t,r,n)}finally{ot.transition=i,q=n}return null}function Nd(e,t,r,n){do Tr();while(Wt!==null);if((V&6)!==0)throw Error(h(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(tc(e,a),e===ke&&(ve=ke=null,Ee=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||xi||(xi=!0,Nu(bn,function(){return Tr(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=ot.transition,ot.transition=null;var o=q;q=1;var s=V;V|=4,sl.current=null,hd(e,r),ou(r,e),Bc(va),Tn=!!ga,va=ga=null,e.current=r,gd(r),Gu(),V=s,q=o,ot.transition=a}else e.current=r;if(xi&&(xi=!1,Wt=e,yi=i),a=e.pendingLanes,a===0&&(Vt=null),Yu(r.stateNode),Ge(e,pe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(vi)throw vi=!1,e=dl,dl=null,e;return(yi&1)!==0&&e.tag!==0&&Tr(),a=e.pendingLanes,(a&1)!==0?e===ml?xn++:(xn=0,ml=e):xn=0,Dt(),null}function Tr(){if(Wt!==null){var e=io(yi),t=ot.transition,r=q;try{if(ot.transition=null,q=16>e?16:e,Wt===null)var n=!1;else{if(e=Wt,Wt=null,yi=0,(V&6)!==0)throw Error(h(331));var i=V;for(V|=4,j=e.current;j!==null;){var a=j,o=a.child;if((j.flags&16)!==0){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var p=s[u];for(j=p;j!==null;){var x=j;switch(x.tag){case 0:case 11:case 15:hn(8,x,a)}var y=x.child;if(y!==null)y.return=x,j=y;else for(;j!==null;){x=j;var g=x.sibling,k=x.return;if(ru(x),x===p){j=null;break}if(g!==null){g.return=k,j=g;break}j=k}}}var C=a.alternate;if(C!==null){var b=C.child;if(b!==null){C.child=null;do{var he=b.sibling;b.sibling=null,b=he}while(b!==null)}}j=a}}if((a.subtreeFlags&2064)!==0&&o!==null)o.return=a,j=o;else e:for(;j!==null;){if(a=j,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:hn(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,j=m;break e}j=a.return}}var c=e.current;for(j=c;j!==null;){o=j;var f=o.child;if((o.subtreeFlags&2064)!==0&&f!==null)f.return=o,j=f;else e:for(o=c;j!==null;){if(s=j,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:pi(9,s)}}catch(F){me(s,s.return,F)}if(s===o){j=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,j=w;break e}j=s.return}}if(V=i,Dt(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(En,e)}catch{}n=!0}return n}finally{q=r,ot.transition=t}}return!1}function xu(e,t,r){t=zr(r,t),t=As(e,t,1),e=Bt(e,t,1),t=Oe(),e!==null&&(Br(e,1,t),Ge(e,t))}function me(e,t,r){if(e.tag===3)xu(e,e,r);else for(;t!==null;){if(t.tag===3){xu(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Vt===null||!Vt.has(n))){e=zr(r,e),e=Is(t,e,1),t=Bt(t,e,1),e=Oe(),t!==null&&(Br(t,1,e),Ge(t,e));break}}t=t.return}}function kd(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&r,ke===e&&(Ee&r)===r&&(ye===4||ye===3&&(Ee&130023424)===Ee&&500>pe()-cl?lr(e,0):ul|=r),Ge(e,t)}function yu(e,t){t===0&&((e.mode&1)===0?t=1:(t=zn,zn<<=1,(zn&130023424)===0&&(zn=4194304)));var r=Oe();e=bt(e,t),e!==null&&(Br(e,t,r),Ge(e,r))}function jd(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),yu(e,r)}function Sd(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(h(314))}n!==null&&n.delete(t),yu(e,r)}var wu;wu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)We=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return We=!1,dd(e,t,r);We=(e.flags&131072)!==0}else We=!1,ae&&(t.flags&1048576)!==0&&Jo(t,qn,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;mi(e,t),e=t.pendingProps;var i=Nr(t,Pe.current);Er(t,r),i=Ba(null,t,n,e,i,r);var a=Ha();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(n)?(a=!0,Kn(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,La(t),i.updater=ci,t.stateNode=i,i._reactInternals=t,Ka(t,n,e,r),t=Za(null,t,n,!0,a,r)):(t.tag=0,ae&&a&&Sa(t),Ie(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(mi(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=bd(n),e=mt(n,e),i){case 0:t=qa(null,t,n,e,r);break e;case 1:t=Gs(null,t,n,e,r);break e;case 11:t=Bs(null,t,n,e,r);break e;case 14:t=Hs(null,t,n,mt(n.type,e),r);break e}throw Error(h(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:mt(n,i),qa(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:mt(n,i),Gs(e,t,n,i,r);case 3:e:{if(Qs(t),e===null)throw Error(h(387));n=t.pendingProps,a=t.memoizedState,i=a.element,ss(e,t),ni(t,n,null,r);var o=t.memoizedState;if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=zr(Error(h(423)),t),t=Ks(e,t,n,r,i);break e}else if(n!==i){i=zr(Error(h(424)),t),t=Ks(e,t,n,r,i);break e}else for(qe=At(t.stateNode.containerInfo.firstChild),Xe=t,ae=!0,dt=null,r=ls(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Sr(),n===i){t=Ft(e,t,r);break e}Ie(e,t,n,r)}t=t.child}return t;case 5:return ds(t),e===null&&Ea(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,xa(n,i)?o=null:a!==null&&xa(n,a)&&(t.flags|=32),$s(e,t),Ie(e,t,o,r),t.child;case 6:return e===null&&Ea(t),null;case 13:return Ys(e,t,r);case 4:return Ma(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Cr(t,null,n,r):Ie(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:mt(n,i),Bs(e,t,n,i,r);case 7:return Ie(e,t,t.pendingProps,r),t.child;case 8:return Ie(e,t,t.pendingProps.children,r),t.child;case 12:return Ie(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ee(ei,n._currentValue),n._currentValue=o,a!==null)if(ct(a.value,o)){if(a.children===i.children&&!He.current){t=Ft(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var u=s.firstContext;u!==null;){if(u.context===n){if(a.tag===1){u=Et(-1,r&-r),u.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var x=p.pending;x===null?u.next=u:(u.next=x.next,x.next=u),p.pending=u}}a.lanes|=r,u=a.alternate,u!==null&&(u.lanes|=r),Ra(a.return,r,t),s.lanes|=r;break}u=u.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(h(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),Ra(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ie(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Er(t,r),i=at(i),n=n(i),t.flags|=1,Ie(e,t,n,r),t.child;case 14:return n=t.type,i=mt(n,t.pendingProps),i=mt(n.type,i),Hs(e,t,n,i,r);case 15:return Vs(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:mt(n,i),mi(e,t),t.tag=1,Ve(n)?(e=!0,Kn(t)):e=!1,Er(t,r),Ls(t,n,i),Ka(t,n,i,r),Za(null,t,n,!0,e,r);case 19:return qs(e,t,r);case 22:return Ws(e,t,r)}throw Error(h(156,t.tag))};function Nu(e,t){return Jl(e,t)}function Cd(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,r,n){return new Cd(e,t,r,n)}function xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bd(e){if(typeof e=="function")return xl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rt)return 11;if(e===gt)return 14}return 2}function Qt(e,t){var r=e.alternate;return r===null?(r=st(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ji(e,t,r,n,i,a){var o=2;if(n=e,typeof e=="function")xl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ce:return sr(r.children,i,a,t);case Ue:o=8,i|=8;break;case Ae:return e=st(12,r,t,i|2),e.elementType=Ae,e.lanes=a,e;case _e:return e=st(13,r,t,i),e.elementType=_e,e.lanes=a,e;case Ce:return e=st(19,r,t,i),e.elementType=Ce,e.lanes=a,e;case de:return Si(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case et:o=10;break e;case tt:o=9;break e;case rt:o=11;break e;case gt:o=14;break e;case Be:o=16,n=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=st(o,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function sr(e,t,r,n){return e=st(7,e,n,t),e.lanes=r,e}function Si(e,t,r,n){return e=st(22,e,n,t),e.elementType=de,e.lanes=r,e.stateNode={isHidden:!1},e}function yl(e,t,r){return e=st(6,e,null,t),e.lanes=r,e}function wl(e,t,r){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ed(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nl(e,t,r,n,i,a,o,s,u){return e=new Ed(e,t,r,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=st(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},La(a),e}function Fd(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ku(e){if(!e)return Ot;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var r=e.type;if(Ve(r))return Xo(e,r,t)}return t}function ju(e,t,r,n,i,a,o,s,u){return e=Nl(r,n,!0,e,i,a,o,s,u),e.context=ku(null),r=e.current,n=Oe(),i=$t(r),a=Et(n,i),a.callback=t??null,Bt(r,a,i),e.current.lanes=i,Br(e,i,n),Ge(e,n),e}function Ci(e,t,r,n){var i=t.current,a=Oe(),o=$t(i);return r=ku(r),t.context===null?t.context=r:t.pendingContext=r,t=Et(a,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Bt(i,t,o),e!==null&&(ht(e,i,o,a),ri(e,i,o)),o}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function kl(e,t){Su(e,t),(e=e.alternate)&&Su(e,t)}function zd(){return null}var Cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function jl(e){this._internalRoot=e}Ei.prototype.render=jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));Ci(e,t,null,null)},Ei.prototype.unmount=jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){Ci(null,e,null,null)}),t[kt]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=oo();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Tt.length&&t!==0&&t<Tt[r].priority;r++);Tt.splice(r,0,e),r===0&&co(e)}};function Sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bu(){}function _d(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var p=bi(o);a.call(p)}}var o=ju(t,n,e,0,null,!1,!1,"",bu);return e._reactRootContainer=o,e[kt]=o.current,tn(e.nodeType===8?e.parentNode:e),ar(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var p=bi(u);s.call(p)}}var u=Nl(e,0,!1,null,null,!1,!1,"",bu);return e._reactRootContainer=u,e[kt]=u.current,tn(e.nodeType===8?e.parentNode:e),ar(function(){Ci(t,u,r,n)}),u}function zi(e,t,r,n,i){var a=r._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var u=bi(o);s.call(u)}}Ci(t,o,e,i)}else o=_d(r,t,e,i,n);return bi(o)}ao=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ur(t.pendingLanes);r!==0&&(Ki(t,r|1),Ge(t,pe()),(V&6)===0&&(Rr=pe()+500,Dt()))}break;case 13:ar(function(){var n=bt(e,1);if(n!==null){var i=Oe();ht(n,e,1,i)}}),kl(e,1)}},Yi=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var r=Oe();ht(t,e,134217728,r)}kl(e,134217728)}},lo=function(e){if(e.tag===13){var t=$t(e),r=bt(e,t);if(r!==null){var n=Oe();ht(r,e,t,n)}kl(e,t)}},oo=function(){return q},so=function(e,t){var r=q;try{return q=e,t()}finally{q=r}},Bi=function(e,t,r){switch(t){case"input":if(Ti(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Gn(n);if(!i)throw Error(h(90));Rl(n),Ti(n,i)}}}break;case"textarea":Il(e,r);break;case"select":t=r.value,t!=null&&ur(e,!!r.multiple,t,!1)}},Gl=hl,Ql=ar;var Pd={usingClientEntryPoint:!1,Events:[an,yr,Gn,Wl,$l,hl]},yn={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rd={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ql(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||zd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{En=_i.inject(Rd),vt=_i}catch{}}return Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pd,Qe.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sl(t))throw Error(h(200));return Fd(e,t,null,r)},Qe.createRoot=function(e,t){if(!Sl(e))throw Error(h(299));var r=!1,n="",i=Cu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nl(e,1,!1,null,null,r,!1,n,i),e[kt]=t.current,tn(e.nodeType===8?e.parentNode:e),new jl(t)},Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=ql(t),e=e===null?null:e.stateNode,e},Qe.flushSync=function(e){return ar(e)},Qe.hydrate=function(e,t,r){if(!Fi(t))throw Error(h(200));return zi(null,e,t,!0,r)},Qe.hydrateRoot=function(e,t,r){if(!Sl(e))throw Error(h(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",o=Cu;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=ju(t,null,e,1,r??null,i,!1,a,o),e[kt]=t.current,tn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Ei(t)},Qe.render=function(e,t,r){if(!Fi(t))throw Error(h(200));return zi(null,e,t,!1,r)},Qe.unmountComponentAtNode=function(e){if(!Fi(e))throw Error(h(40));return e._reactRootContainer?(ar(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},Qe.unstable_batchedUpdates=hl,Qe.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Fi(r))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return zi(e,t,r,!1,n)},Qe.version="18.3.1-next-f1338f8080-20240426",Qe}var Lu;function Bd(){if(Lu)return El.exports;Lu=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(L){console.error(L)}}return E(),El.exports=Ud(),El.exports}var Mu;function Hd(){if(Mu)return Pi;Mu=1;var E=Bd();return Pi.createRoot=E.createRoot,Pi.hydrateRoot=E.hydrateRoot,Pi}var Vd=Hd();const Wd=Au(Vd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=E=>E.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Iu=(...E)=>E.filter((L,h,Q)=>!!L&&L.trim()!==""&&Q.indexOf(L)===h).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=Fe.forwardRef(({color:E="currentColor",size:L=24,strokeWidth:h=2,absoluteStrokeWidth:Q,className:I="",children:U,iconNode:ne,...le},D)=>Fe.createElement("svg",{ref:D,...Gd,width:L,height:L,stroke:E,strokeWidth:Q?Number(h)*24/Number(L):h,className:Iu("lucide",I),...le},[...ne.map(([we,fe])=>Fe.createElement(we,fe)),...Array.isArray(U)?U:[U]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=(E,L)=>{const h=Fe.forwardRef(({className:Q,...I},U)=>Fe.createElement(Qd,{ref:U,iconNode:L,className:Iu(`lucide-${$d(E)}`,Q),...I}));return h.displayName=`${E}`,h};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Yt=De("ArrowRight",Kd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],_l=De("ArrowUpRight",Yd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],qd=De("ChevronLeft",Xd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Jd=De("ChevronRight",Zd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],tm=De("Download",em);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],nm=De("Facebook",rm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],am=De("Instagram",im);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],om=De("Linkedin",lm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],um=De("Mail",sm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],dm=De("Menu",cm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],fm=De("Phone",mm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],hm=De("Quote",pm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],vm=De("Twitter",gm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ym=De("X",xm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Nm=De("Youtube",wm);function km(){const[E,L]=Fe.useState(!1),[h,Q]=Fe.useState(!1),[I,U]=Fe.useState(0),ne=[{id:"campus-tower",tag:"Mangalagangothri",image:"/hero-campus-hd.jpg",title:"Majestic Clock Tower & Heritage Campus",subtitle:"Four decades of academic distinction and cultural heritage in coastal Karnataka"},{id:"campus-faculties",tag:"Verdant Campus",image:"/hero-campus-2-hd.jpg",title:"Interdisciplinary Research & Academic Complexes",subtitle:"State-of-the-art research laboratories, modern lecture halls, and academic departments"},{id:"campus-aerial",tag:"Coastal Sanctuary",image:"/mangalagangothri-aerial.jpg",title:"353-Acre Hilltop Sanctuary Overlooking the Arabian Sea",subtitle:"Where the Western Ghats biodiversity meets the coastal Nethravathi river basin"}];Fe.useEffect(()=>{const z=setInterval(()=>{U(H=>(H+1)%ne.length)},5500);return()=>clearInterval(z)},[ne.length]);const[le,D]=Fe.useState(0),[we,fe]=Fe.useState(!1),[K,Z]=Fe.useState({years:0,pgDepts:0,colleges:0,acres:0,autonomous:0}),ze=Fe.useRef(null),Me=Fe.useRef(!1);Fe.useEffect(()=>{const z=()=>{L(window.scrollY>24)};return window.addEventListener("scroll",z,{passive:!0}),()=>window.removeEventListener("scroll",z)},[]),Fe.useEffect(()=>{if(typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){Z({years:45,pgDepts:26,colleges:204,acres:353,autonomous:5}),fe(!0);return}const H=new IntersectionObserver(([oe])=>{if(oe.isIntersecting&&!Me.current){Me.current=!0,fe(!0);const ge=1800,ce=performance.now(),Ue=tt=>tt===1?1:1-Math.pow(2,-10*tt),Ae={years:45,pgDepts:26,colleges:204,acres:353,autonomous:5},et=tt=>{const rt=tt-ce,_e=Math.min(rt/ge,1),Ce=Ue(_e);Z({years:Math.round(Ae.years*Ce),pgDepts:Math.round(Ae.pgDepts*Ce),colleges:Math.round(Ae.colleges*Ce),acres:Math.round(Ae.acres*Ce),autonomous:Math.round(Ae.autonomous*Ce)}),_e<1?requestAnimationFrame(et):Z(Ae)};requestAnimationFrame(et)}},{threshold:.25});return ze.current&&H.observe(ze.current),()=>H.disconnect()},[]);const B=[{id:"t1",quote:"The proximity to the Arabian Sea and the dedicated marine research stations provided field exposure that few institutions in the country can match.",name:"Pooja Hegde",role:"M.Sc. Marine Geology",batch:"Batch of 2023",rating:5,avatar:"PH"},{id:"t2",quote:"Mangalagangothri gave me both the critical perspective and practical studio training to transition directly into investigative broadcast media.",name:"Karthik Rao",role:"M.A. Journalism & Mass Comm",batch:"Batch of 2022",rating:5,avatar:"KR"},{id:"t3",quote:"Interdisciplinary faculty mentorship in materials science shaped my research methodology and secured a doctoral fellowship at BARC.",name:"Dr. Ananya Shenoy",role:"Ph.D in Materials Science",batch:"Doctoral Fellow",rating:5,avatar:"AS"},{id:"t4",quote:"The central library archives, high-speed computing labs, and corporate placement drives paved my way to a top multinational fintech career.",name:"Naveen D'Souza",role:"Master of Business Admin (MBA)",batch:"Batch of 2024",rating:5,avatar:"ND"},{id:"t5",quote:"World-class athletics synthetic track and specialized sports science faculties enabled me to represent Karnataka at national university games.",name:"Sahana Acharya",role:"Master of Physical Education",batch:"Batch of 2023",rating:5,avatar:"SA"}],Y=[{id:"arts",title:"Faculty of Arts",category:"HUMANITIES & SOCIAL SCIENCES",deptCount:"8 Departments",image:"/faculty-arts.jpg",color:"#6B3E26",badgeBg:"rgba(107, 62, 38, 0.9)",desc:"Nurturing critical inquiry, literary traditions, regional historiography, and contemporary socio-cultural dialogues.",link:"#faculty-arts",programmes:["English Language & Literature","Kannada & Regional Heritage","History & Archaeology","Economics & Development Studies","Mass Communication & Journalism","Sociology & Social Work (MSW)"]},{id:"science",title:"Science & Technology",category:"PHYSICAL & LIFE SCIENCES",deptCount:"17 Departments",image:"/faculty-science.jpg",color:"#0F4C81",badgeBg:"rgba(15, 76, 129, 0.9)",desc:"Pioneering frontier laboratory research in materials science, biosciences, atomic energy, and computing algorithms.",link:"#faculty-science",programmes:["Physics & Materials Science","Applied Chemistry & Biochemistry","Biosciences & Biotechnology","Computer Science (M.Sc. & MCA)","Mathematics & Statistics","Electronics & Applied Physics"]},{id:"commerce",title:"Faculty of Commerce",category:"MANAGEMENT & CORPORATE STUDIES",deptCount:"2 Departments",image:"/faculty-commerce.jpg",color:"#1E5F74",badgeBg:"rgba(30, 95, 116, 0.9)",desc:"Cultivating ethical business leadership, strategic managerial competence, and modern fintech expertise.",link:"#faculty-commerce",programmes:["Master of Commerce (M.Com)","Master of Business Admin (MBA)","Finance & Banking Technology","International Trade & Logistics","Human Resource Management","Doctoral Research in Commerce"]},{id:"education",title:"Faculty of Education",category:"PEDAGOGY & SPORTS SCIENCE",deptCount:"2 Departments",image:"/faculty-education.jpg",color:"#7D4E57",badgeBg:"rgba(125, 78, 87, 0.9)",desc:"Advancing pedagogical methodologies, educational psychology, physical education, and athletic performance sciences.",link:"#faculty-education",programmes:["Master of Education (M.Ed)","Physical Education (M.P.Ed)","Sports Science & Biomechanics","Curriculum Design & Evaluation","Educational Technology Lab","Athletic Performance Centre"]},{id:"marine",title:"Marine & Coastal Studies",category:"OCEANOGRAPHY & EARTH SCIENCES",deptCount:"3 Research Units",image:"/faculty-marine.jpg",color:"#0E5A6A",badgeBg:"rgba(14, 90, 106, 0.9)",desc:"Leveraging coastal Karnataka's shoreline for frontier oceanographic explorations, marine geology, and coastal ecosystem preservation.",link:"#faculty-marine",programmes:["Marine Geology & Oceanography","Coastal Geomorphology & Sediments","Marine Geophysics & Bathymetry","Arabian Sea Ecology Station","Coastal Zone Monitoring Unit"]}],Se={category:"CONVOCATION & DISTINCTION",date:"SEP 18, 2026",title:"44th Annual Grand Convocation Ceremony Announced at Mangalagangothri",desc:"Hon'ble Chancellor and eminent scholars will confer doctoral degrees, academic gold medals, and honorary doctorates to distinguished achievers across 26 departments.",image:"/news-featured.jpg",link:"#convocation-2026"},Je=[{id:"news-1",date:"SEP 15, 2026",category:"Admissions",title:"Ph.D Entrance Examination 2026 Notification & Syllabus Matrix",desc:"Detailed schedule, vacancy matrix across 26 PG departments, and syllabus guidelines.",image:"/news-thumb-1.jpg",link:"#phd-admission"},{id:"news-2",date:"SEP 11, 2026",category:"Research",title:"BRNS & DAE Grant ₹4.8 Cr Sanctioned for Microtron Radiation Facility",desc:"Advanced electron accelerator laboratory to expand research in materials modification and polymer physics.",image:"/news-thumb-2.jpg",link:"#microtron-grant"},{id:"news-3",date:"SEP 08, 2026",category:"Examinations",title:"Postgraduate Common Entrance (PGCET) Calendar & Verification",desc:"Revised schedule for centralized university counseling and mandatory document verification.",image:"/news-thumb-1.jpg",link:"#pgcet-schedule"},{id:"news-4",date:"SEP 02, 2026",category:"Sports & Athletics",title:"All India Inter-University Athletics Championship Selection Trials",desc:"Mangalore University athletic contingent trials to be held at the 400m synthetic track stadium.",image:"/news-thumb-3.jpg",link:"#athletics-trials"},{id:"news-5",date:"AUG 28, 2026",category:"Academic Library",title:"e-ShodhSindhu & INFLIBNET Digital Journal Portal Expanded for Scholars",desc:"Access to over 15,000+ peer-reviewed international journals enabled across campus Wi-Fi network.",image:"/news-thumb-4.jpg",link:"#library-portal"},{id:"news-6",date:"AUG 14, 2026",category:"Official Circular",title:"University Prospectus & Academic Calendar 2026–2027 Handbook Released",desc:"Comprehensive handbook detailing CBCS curriculum regulations, term dates, and examination statutes.",image:"/campus-heritage.jpg",link:"#academic-handbook"}];return l.jsxs("div",{className:"mu-page",children:[l.jsx("div",{className:"mu-utility-bar",children:l.jsxs("div",{className:"mu-container mu-utility-content",children:[l.jsxs("div",{className:"mu-utility-links",children:[l.jsx("a",{href:"#admissions",className:"mu-utility-link",children:"Apply Online"}),l.jsx("span",{className:"mu-utility-divider",children:"|"}),l.jsx("a",{href:"#portal",className:"mu-utility-link",children:"Student Portal (UUCMS)"}),l.jsx("span",{className:"mu-utility-divider",children:"|"}),l.jsx("a",{href:"#alumni",className:"mu-utility-link",children:"Alumni Network"}),l.jsx("span",{className:"mu-utility-divider",children:"|"}),l.jsx("a",{href:"#mail",className:"mu-utility-link",children:"Webmail Server"}),l.jsx("span",{className:"mu-utility-divider",children:"|"}),l.jsx("span",{className:"mu-utility-lang",children:"ಕನ್ನಡ"})]}),l.jsxs("div",{className:"mu-utility-socials",children:[l.jsx("a",{href:"https://facebook.com","aria-label":"Facebook",className:"mu-social-icon",children:l.jsx(nm,{size:13})}),l.jsx("a",{href:"https://twitter.com","aria-label":"Twitter/X",className:"mu-social-icon",children:l.jsx(vm,{size:13})}),l.jsx("a",{href:"https://linkedin.com","aria-label":"LinkedIn",className:"mu-social-icon",children:l.jsx(om,{size:13})}),l.jsx("a",{href:"https://youtube.com","aria-label":"YouTube",className:"mu-social-icon",children:l.jsx(Nm,{size:13})}),l.jsx("a",{href:"https://instagram.com","aria-label":"Instagram",className:"mu-social-icon",children:l.jsx(am,{size:13})})]})]})}),l.jsxs("header",{className:`mu-header ${E?"mu-header-scrolled":""}`,children:[l.jsxs("div",{className:"mu-container mu-header-content",children:[l.jsx("a",{href:"#",className:"mu-brand","aria-label":"Mangalore University Home",children:l.jsx("img",{src:E?"/mu-logo-white.svg":"/mu-logo.svg",alt:"Mangalore University — ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾನಿಲಯ",className:"mu-brand-logo-img"})}),l.jsxs("nav",{className:"mu-nav-desktop","aria-label":"Main Navigation",children:[l.jsx("a",{href:"#about",className:"mu-nav-link",children:"About"}),l.jsx("a",{href:"#academics",className:"mu-nav-link",children:"Academics"}),l.jsx("a",{href:"#infrastructure",className:"mu-nav-link",children:"Campus"}),l.jsx("a",{href:"#research",className:"mu-nav-link",children:"Research Centres"}),l.jsx("a",{href:"#placement",className:"mu-nav-link",children:"Placements"}),l.jsx("a",{href:"#news",className:"mu-nav-link",children:"Notices"}),l.jsx("a",{href:"#admissions",className:"mu-btn mu-btn-nav",children:"Apply Now"})]}),l.jsx("button",{className:"mu-mobile-toggle",onClick:()=>Q(!h),"aria-label":"Toggle Navigation Menu","aria-expanded":h,children:h?l.jsx(ym,{size:24}):l.jsx(dm,{size:24})})]}),h&&l.jsx("div",{className:"mu-mobile-drawer",children:l.jsxs("div",{className:"mu-container mu-mobile-drawer-content",children:[l.jsx("a",{href:"#about",className:"mu-mobile-link",onClick:()=>Q(!1),children:"About & VC Message"}),l.jsx("a",{href:"#academics",className:"mu-mobile-link",onClick:()=>Q(!1),children:"Academics & Degrees"}),l.jsx("a",{href:"#infrastructure",className:"mu-mobile-link",onClick:()=>Q(!1),children:"Campus & Infrastructure"}),l.jsx("a",{href:"#research",className:"mu-mobile-link",onClick:()=>Q(!1),children:"National Research Centres"}),l.jsx("a",{href:"#coastal",className:"mu-mobile-link",onClick:()=>Q(!1),children:"Coastal Identity"}),l.jsx("a",{href:"#placement",className:"mu-mobile-link",onClick:()=>Q(!1),children:"Placement & Career Ecosystem"}),l.jsx("a",{href:"#news",className:"mu-mobile-link",onClick:()=>Q(!1),children:"News & Circulars"}),l.jsx("div",{className:"mu-mobile-drawer-actions",children:l.jsxs("a",{href:"#admissions",className:"mu-btn mu-btn-gold",style:{width:"100%"},onClick:()=>Q(!1),children:["Apply for Admission ",l.jsx(Yt,{size:16})]})})]})})]}),l.jsxs("section",{className:"mu-hero-modern","aria-label":"Mangalore University Campus Showcase",children:[l.jsx("div",{className:"mu-container mu-hero-modern-container",children:l.jsxs("div",{className:"mu-hero-modern-content",children:[l.jsx("div",{className:"mu-hero-modern-eyebrow-wrap mu-fade-in-1",children:l.jsx("span",{className:"mu-hero-modern-eyebrow",children:"MANGALORE UNIVERSITY • ESTD. 1980"})}),l.jsxs("h1",{className:"mu-hero-modern-headline mu-fade-in-2",children:["Empowering Minds, ",l.jsx("span",{className:"mu-hero-headline-accent",children:"Inspiring Futures."})]}),l.jsx("p",{className:"mu-hero-modern-desc mu-fade-in-2",children:"A 353-acre hilltop research campus fostering four decades of interdisciplinary excellence, NAAC 'A' grade accreditation, and coastal scientific innovation."})]})}),l.jsxs("div",{className:"mu-hero-modern-media-stage",children:[l.jsx("div",{className:"mu-hero-stage-top-gradient","aria-hidden":"true"}),l.jsx("div",{className:"mu-hero-modern-slides-frame",children:ne.map((z,H)=>l.jsx("div",{className:`mu-hero-modern-slide ${H===I?"mu-hero-modern-slide-active":""}`,"aria-hidden":H!==I,children:l.jsx("img",{src:z.image,alt:z.title,className:"mu-hero-modern-img"})},z.id))})]}),l.jsx("div",{className:"mu-ticker-band",children:l.jsxs("div",{className:"mu-container mu-ticker-container",children:[l.jsxs("div",{className:"mu-ticker-badge",children:[l.jsx("span",{className:"mu-ticker-dot"}),l.jsx("span",{className:"mu-ticker-badge-text",children:"FLASH NEWS"})]}),l.jsx("div",{className:"mu-ticker-track",children:l.jsxs("div",{className:"mu-ticker-content",children:[l.jsxs("a",{href:"#news",className:"mu-ticker-item",children:[l.jsx("span",{className:"mu-ticker-date",children:"NEW"}),"Ph.D Entrance Examination 2026–27 notification and center guidelines published."]}),l.jsx("span",{className:"mu-ticker-sep",children:"•"}),l.jsxs("a",{href:"#news",className:"mu-ticker-item",children:[l.jsx("span",{className:"mu-ticker-date",children:"ANNOUNCEMENT"}),"Postgraduate Common Entrance Test (PGCET) centralized counselling schedule updated."]}),l.jsx("span",{className:"mu-ticker-sep",children:"•"}),l.jsxs("a",{href:"#news",className:"mu-ticker-item",children:[l.jsx("span",{className:"mu-ticker-date",children:"EXAM"}),"Last date for submission of revaluation forms for Even Semester extended."]}),l.jsx("span",{className:"mu-ticker-sep",children:"•"}),l.jsxs("a",{href:"#news",className:"mu-ticker-item",children:[l.jsx("span",{className:"mu-ticker-date",children:"ACADEMIC"}),"Official University Prospectus & CBCS Calendar 2026–2027 released."]}),l.jsx("span",{className:"mu-ticker-sep",children:"•"}),l.jsxs("a",{href:"#news",className:"mu-ticker-item",children:[l.jsx("span",{className:"mu-ticker-date",children:"ADMISSION"}),"Karnataka UUCMS Portal open for 1st Semester PG/UG applications."]})]})})]})})]}),l.jsx("section",{id:"about",className:"mu-section mu-bg-paper",children:l.jsx("div",{className:"mu-container",children:l.jsxs("div",{className:"mu-about-grid",children:[l.jsxs("div",{className:"mu-about-text",children:[l.jsx("span",{className:"mu-eyebrow",children:"ABOUT THE UNIVERSITY"}),l.jsx("h2",{className:"mu-heading",children:"From a postgraduate centre to a premier coastal institution"}),l.jsx("p",{className:"mu-about-p",children:"Mangalore University was established in 1980, growing out of a modest postgraduate centre of the University of Mysore at Konaje which originally commenced with just three departments."}),l.jsx("p",{className:"mu-about-p",children:"Today, the university encompasses 26 postgraduate departments on its main campus, offering advanced interdisciplinary research, frontier laboratory infrastructure, and comprehensive academic jurisdiction across Dakshina Kannada, Udupi, and Kodagu districts."}),l.jsxs("a",{href:"#history",className:"mu-link-arrow",style:{marginTop:"8px"},children:["Read our full history & vision ",l.jsx(Yt,{size:15})]})]}),l.jsx("div",{className:"mu-about-media",children:l.jsxs("div",{className:"mu-about-image-wrapper",children:[l.jsx("img",{src:"/campus-heritage.jpg",alt:"Mangalore University Heritage & Academic Library",className:"mu-about-img"}),l.jsxs("div",{className:"mu-about-milestone",children:[l.jsx("span",{className:"mu-milestone-year",children:"1980"}),l.jsx("span",{className:"mu-milestone-text",children:"Chartered Independent University"})]})]})})]})})}),l.jsx("section",{id:"vc-message",className:"mu-vc-editorial-section",children:l.jsx("div",{className:"mu-container",children:l.jsxs("div",{className:"mu-vc-editorial-grid",children:[l.jsxs("div",{className:"mu-vc-portrait-col",children:[l.jsxs("div",{className:"mu-vc-cutout-frame",children:[l.jsx("img",{src:"/vc-portrait.png",alt:"Prof. P. L. Dharma, Vice-Chancellor of Mangalore University",className:"mu-vc-cutout-img"}),l.jsx("div",{className:"mu-vc-cutout-bottom-fade"})]}),l.jsxs("div",{className:"mu-vc-signoff-block",children:[l.jsx("h4",{className:"mu-vc-signoff-name",children:"Prof. P. L. Dharma"}),l.jsx("span",{className:"mu-vc-signoff-title",children:"Vice-Chancellor"}),l.jsx("span",{className:"mu-vc-signoff-inst",children:"Mangalore University"})]})]}),l.jsxs("div",{className:"mu-vc-message-col",children:[l.jsxs("div",{className:"mu-vc-header-row",children:[l.jsx("span",{className:"mu-eyebrow mu-vc-eyebrow-accent",children:"VICE-CHANCELLOR'S MESSAGE"}),l.jsx(hm,{size:32,className:"mu-vc-editorial-quote-mark"})]}),l.jsx("h3",{className:"mu-vc-editorial-lead",children:"“Fostering global academic competence anchored in cultural heritage, ethical rigor, and frontier scientific discovery.”"}),l.jsxs("div",{className:"mu-vc-editorial-body",children:[l.jsx("p",{children:"Mangalore University stands at the confluence of rich coastal intellectual traditions and modern research innovation. Over four decades, our scholars and faculty have driven impactful advancements across sciences, humanities, management, and oceanography."}),l.jsx("p",{children:"We are committed to nurturing an inclusive, forward-looking academic ecosystem where curious minds explore multidisciplinary boundaries, pioneer sustainable solutions, and contribute meaningfully to society and the nation."})]})]})]})})}),l.jsx("section",{ref:ze,className:"mu-section-tight mu-bg-mist mu-stats-section",children:l.jsx("div",{className:"mu-container",children:l.jsxs("div",{className:"mu-stats-grid",children:[l.jsxs("div",{className:"mu-stat-card",children:[l.jsxs("div",{className:"mu-stat-number",children:[K.years,"+"]}),l.jsx("div",{className:"mu-stat-label",children:"Years of Academic Excellence"})]}),l.jsxs("div",{className:"mu-stat-card",children:[l.jsx("div",{className:"mu-stat-number",children:K.pgDepts}),l.jsx("div",{className:"mu-stat-label",children:"Postgraduate Departments"})]}),l.jsxs("div",{className:"mu-stat-card",children:[l.jsx("div",{className:"mu-stat-number",children:K.colleges}),l.jsx("div",{className:"mu-stat-label",children:"Affiliated Colleges"})]}),l.jsxs("div",{className:"mu-stat-card",children:[l.jsx("div",{className:"mu-stat-number",children:K.acres}),l.jsx("div",{className:"mu-stat-label",children:"Acres of Verdant Campus"})]}),l.jsxs("div",{className:"mu-stat-card mu-stat-card-last",children:[l.jsx("div",{className:"mu-stat-number",children:K.autonomous}),l.jsx("div",{className:"mu-stat-label",children:"Autonomous Colleges"})]})]})})}),l.jsx("section",{id:"academics",className:"mu-section mu-bg-paper mu-faculty-section",children:l.jsxs("div",{className:"mu-container",children:[l.jsx("div",{className:"mu-section-header",children:l.jsxs("div",{children:[l.jsx("span",{className:"mu-eyebrow",children:"ACADEMIC EXCELLENCE"}),l.jsx("h2",{className:"mu-heading",children:"Academics, Faculties & Degrees"})]})}),l.jsx("div",{className:"mu-faculty-grid",children:Y.map(z=>l.jsxs("div",{className:"mu-faculty-hcard",style:{"--accent-color":z.color},children:[l.jsxs("div",{className:"mu-hcard-image-wrap",children:[l.jsx("img",{src:z.image,alt:z.title,className:"mu-hcard-img"}),l.jsx("div",{className:"mu-hcard-top-gradient"}),l.jsx("span",{className:"mu-hcard-badge",style:{backgroundColor:z.badgeBg},children:z.deptCount})]}),l.jsxs("div",{className:"mu-hcard-content",children:[l.jsx("span",{className:"mu-hcard-category",children:z.category}),l.jsx("h3",{className:"mu-hcard-title",children:z.title}),l.jsx("p",{className:"mu-hcard-desc",children:z.desc})]}),l.jsxs("div",{className:"mu-hcard-hover-overlay",children:[l.jsxs("div",{className:"mu-hcard-hover-header",children:[l.jsx("span",{className:"mu-hcard-hover-category",children:z.category}),l.jsx("h3",{className:"mu-hcard-hover-title",children:z.title})]}),l.jsx("p",{className:"mu-hcard-hover-desc",children:z.desc}),l.jsxs("div",{className:"mu-hcard-hover-progs",children:[l.jsx("span",{className:"mu-hcard-prog-label",children:"Key Departments & Programmes:"}),l.jsx("ul",{className:"mu-hcard-prog-list",children:z.programmes.map((H,oe)=>l.jsxs("li",{children:[l.jsx("span",{className:"mu-hcard-prog-bullet",children:"•"}),H]},oe))})]}),l.jsxs("a",{href:z.link,className:"mu-hcard-hover-link",children:["Explore Programmes ",l.jsx(_l,{size:16})]})]})]},z.id))})]})}),l.jsx("section",{className:"mu-section mu-bg-mist mu-why-study-section",children:l.jsxs("div",{className:"mu-container",children:[l.jsxs("div",{className:"mu-section-header-center",children:[l.jsx("span",{className:"mu-eyebrow",children:"INSTITUTIONAL DISTINCTION"}),l.jsx("h2",{className:"mu-heading",children:"Why Study at Mangalore University"})]}),l.jsxs("div",{className:"mu-why-asym-grid",children:[l.jsxs("div",{className:"mu-why-card mu-why-card-tall",children:[l.jsxs("div",{className:"mu-why-image-wrapper",children:[l.jsx("img",{src:"/why-academic.jpg",alt:"Academic Excellence & Choice Based Credit System at Mangalore University",className:"mu-why-img"}),l.jsx("div",{className:"mu-why-gradient"})]}),l.jsxs("div",{className:"mu-why-content-panel",children:[l.jsx("span",{className:"mu-why-eyebrow",children:"CURRICULUM & PEDAGOGY"}),l.jsx("h3",{className:"mu-why-title",children:"Academic Excellence & CBCS Flexibility"}),l.jsx("p",{className:"mu-why-desc",children:"Dynamic Choice Based Credit System offering flexibility across disciplines, industry-relevant syllabi, and interdisciplinary electives mentored by senior scholars."})]}),l.jsxs("div",{className:"mu-why-hover-overlay",children:[l.jsx("span",{className:"mu-why-hover-badge",children:"ACADEMIC RIGOR"}),l.jsx("h3",{className:"mu-why-hover-title",children:"Academic Excellence & CBCS Flexibility"}),l.jsx("p",{className:"mu-why-hover-desc",children:"With 26 postgraduate departments and 204 affiliated institutions, Mangalore University pairs time-tested academic foundations with cutting-edge semester choice credits, seminars, and comprehensive continuous assessment."}),l.jsxs("div",{className:"mu-why-hover-metric",children:[l.jsx("span",{className:"mu-why-metric-val",children:"26 PG Departments"}),l.jsx("span",{className:"mu-why-metric-lbl",children:"Under CBCS Framework"})]})]})]}),l.jsxs("div",{className:"mu-why-right-stack",children:[l.jsxs("div",{className:"mu-why-card mu-why-card-wide",children:[l.jsxs("div",{className:"mu-why-image-wrapper",children:[l.jsx("img",{src:"/why-research.jpg",alt:"Frontier Radiation & Marine Research Facilities",className:"mu-why-img"}),l.jsx("div",{className:"mu-why-gradient"})]}),l.jsxs("div",{className:"mu-why-content-panel",children:[l.jsx("span",{className:"mu-why-eyebrow",children:"DISCOVERY & INNOVATION"}),l.jsx("h3",{className:"mu-why-title",children:"Frontier Research & National Centres"}),l.jsx("p",{className:"mu-why-desc",children:"High-impact scientific research funded by DST, DBT, BRNS, and AERB with dedicated Microtron particle accelerator, CARRT, and marine laboratories."})]}),l.jsxs("div",{className:"mu-why-hover-overlay",children:[l.jsx("span",{className:"mu-why-hover-badge",children:"NATIONAL IMPACT"}),l.jsx("h3",{className:"mu-why-hover-title",children:"Frontier Research & National Centres"}),l.jsx("p",{className:"mu-why-hover-desc",children:"Home to pioneering nuclear research installations, radiation technology applications, and coastal oceanographic stations conducting sponsored investigations."}),l.jsxs("div",{className:"mu-why-hover-metric",children:[l.jsx("span",{className:"mu-why-metric-val",children:"₹40+ Cr Grants"}),l.jsx("span",{className:"mu-why-metric-lbl",children:"From DST, BRNS & UGC"})]})]})]}),l.jsxs("div",{className:"mu-why-card mu-why-card-wide",children:[l.jsxs("div",{className:"mu-why-image-wrapper",children:[l.jsx("img",{src:"/why-campus.jpg",alt:"Student Belonging & Coastal Hilltop Campus Life",className:"mu-why-img"}),l.jsx("div",{className:"mu-why-gradient"})]}),l.jsxs("div",{className:"mu-why-content-panel",children:[l.jsx("span",{className:"mu-why-eyebrow",children:"CAMPUS & ECOSYSTEM"}),l.jsx("h3",{className:"mu-why-title",children:"Vibrant Coastal Hilltop Community"}),l.jsx("p",{className:"mu-why-desc",children:"A secure 353-acre hilltop campus with panoramic vistas of the Western Ghats and Arabian Sea, active cultural societies, and athletic sports pavilions."})]}),l.jsxs("div",{className:"mu-why-hover-overlay",children:[l.jsx("span",{className:"mu-why-hover-badge",children:"STUDENT LIFE"}),l.jsx("h3",{className:"mu-why-hover-title",children:"Vibrant Coastal Hilltop Community"}),l.jsx("p",{className:"mu-why-hover-desc",children:"An inspiring environment where academic life intersects with botanical gardens, Olympic-standard athletics, modernized residential hostels, and student welfare councils."}),l.jsxs("div",{className:"mu-why-hover-metric",children:[l.jsx("span",{className:"mu-why-metric-val",children:"353 Acres"}),l.jsx("span",{className:"mu-why-metric-lbl",children:"Verdant Hilltop Canopy"})]})]})]})]})]})]})}),l.jsx("section",{id:"infrastructure",className:"mu-section-compact mu-bg-paper mu-infra-editorial-section",children:l.jsxs("div",{className:"mu-container",children:[l.jsx("div",{className:"mu-infra-header-row",children:l.jsxs("div",{children:[l.jsx("span",{className:"mu-eyebrow",children:"WORLD-CLASS AMENITIES"}),l.jsx("h2",{className:"mu-heading-tight",children:"Campus & Infrastructure"})]})}),l.jsxs("div",{className:"mu-infra-bento-grid",children:[l.jsxs("div",{className:"mu-infra-bento-card mu-infra-bento-hero",children:[l.jsxs("div",{className:"mu-infra-img-wrap",children:[l.jsx("img",{src:"/news-thumb-4.jpg",alt:"Central Library & Knowledge Hub",className:"mu-infra-img"}),l.jsx("div",{className:"mu-infra-gradient-base"})]}),l.jsxs("div",{className:"mu-infra-content",children:[l.jsx("div",{className:"mu-infra-tag-row",children:l.jsx("span",{className:"mu-infra-badge",children:"CAMPUS HEART"})}),l.jsx("h3",{className:"mu-infra-title",children:"Central Library & Knowledge Hub"}),l.jsx("p",{className:"mu-infra-desc",children:"250,000+ volumes, 300+ print journals, INFLIBNET access, and 24/7 digital reading halls."})]}),l.jsxs("div",{className:"mu-infra-hover-panel",children:[l.jsx("span",{className:"mu-infra-hover-badge",children:"ACADEMIC RESOURCE"}),l.jsx("h3",{className:"mu-infra-hover-title",children:"Central Library & Digital Hub"}),l.jsx("p",{className:"mu-infra-hover-desc",children:"RFID automation, centralized OPAC search, doctoral research cubicles, and national library network access."}),l.jsxs("div",{className:"mu-infra-hover-metric",children:[l.jsx("span",{className:"mu-infra-metric-val",children:"250K+ Volumes"}),l.jsx("span",{className:"mu-infra-metric-lbl",children:"24/7 Scholar Access"})]})]})]}),l.jsxs("div",{className:"mu-infra-bento-right",children:[l.jsxs("div",{className:"mu-infra-bento-card mu-infra-card-sports",children:[l.jsxs("div",{className:"mu-infra-img-wrap",children:[l.jsx("img",{src:"/news-thumb-3.jpg",alt:"Sports Complex & Olympic Stadium",className:"mu-infra-img"}),l.jsx("div",{className:"mu-infra-gradient-base"})]}),l.jsxs("div",{className:"mu-infra-content",children:[l.jsx("div",{className:"mu-infra-tag-row",children:l.jsx("span",{className:"mu-infra-badge",children:"ATHLETICS"})}),l.jsx("h3",{className:"mu-infra-title",children:"Sports Complex & Stadium"}),l.jsx("p",{className:"mu-infra-desc",children:"400m synthetic athletic track, indoor pavilion, gymnasium, and tennis courts."})]}),l.jsxs("div",{className:"mu-infra-hover-panel",children:[l.jsx("span",{className:"mu-infra-hover-badge",children:"OLYMPIC STANDARD"}),l.jsx("h3",{className:"mu-infra-hover-title",children:"Sports Complex & Stadium"}),l.jsx("p",{className:"mu-infra-hover-desc",children:"Home to national champion athletes, equipped with synthetic tracks and floodlit arenas."}),l.jsxs("div",{className:"mu-infra-hover-metric",children:[l.jsx("span",{className:"mu-infra-metric-val",children:"400m Synthetic"}),l.jsx("span",{className:"mu-infra-metric-lbl",children:"Multi-Sport Pavilion"})]})]})]}),l.jsxs("div",{className:"mu-infra-bento-card mu-infra-card-hostels",children:[l.jsxs("div",{className:"mu-infra-img-wrap",children:[l.jsx("img",{src:"/faculty-arts.jpg",alt:"Hostels & Residential Life",className:"mu-infra-img"}),l.jsx("div",{className:"mu-infra-gradient-base"})]}),l.jsxs("div",{className:"mu-infra-content",children:[l.jsx("div",{className:"mu-infra-tag-row",children:l.jsx("span",{className:"mu-infra-badge",children:"RESIDENTIAL"})}),l.jsx("h3",{className:"mu-infra-title",children:"Hostels & Living"}),l.jsx("p",{className:"mu-infra-desc",children:"Separate halls for men, women, and research scholars with Wi-Fi."})]}),l.jsxs("div",{className:"mu-infra-hover-panel",children:[l.jsx("span",{className:"mu-infra-hover-badge",children:"STUDENT LIVING"}),l.jsx("h3",{className:"mu-infra-hover-title",children:"Hostels & Living"}),l.jsx("p",{className:"mu-infra-hover-desc",children:"Hygienic dining halls, solar water heating, recreation rooms, and 24/7 security."}),l.jsxs("div",{className:"mu-infra-hover-metric",children:[l.jsx("span",{className:"mu-infra-metric-val",children:"6 Halls"}),l.jsx("span",{className:"mu-infra-metric-lbl",children:"24/7 Wi-Fi & Security"})]})]})]}),l.jsxs("div",{className:"mu-infra-bento-card mu-infra-card-ict",children:[l.jsxs("div",{className:"mu-infra-img-wrap",children:[l.jsx("img",{src:"/news-thumb-1.jpg",alt:"ICT & Computing Centre",className:"mu-infra-img"}),l.jsx("div",{className:"mu-infra-gradient-base"})]}),l.jsxs("div",{className:"mu-infra-content",children:[l.jsx("div",{className:"mu-infra-tag-row",children:l.jsx("span",{className:"mu-infra-badge",children:"TECH"})}),l.jsx("h3",{className:"mu-infra-title",children:"ICT Centre"}),l.jsx("p",{className:"mu-infra-desc",children:"Campus optical fiber and HPC data facilities."})]}),l.jsxs("div",{className:"mu-infra-hover-panel",children:[l.jsx("span",{className:"mu-infra-hover-badge",children:"DATA & NETWORKS"}),l.jsx("h3",{className:"mu-infra-hover-title",children:"ICT & Computing Centre"}),l.jsx("p",{className:"mu-infra-hover-desc",children:"1 Gbps dedicated NKN optical connectivity powering smart laboratories and campus servers."}),l.jsxs("div",{className:"mu-infra-hover-metric",children:[l.jsx("span",{className:"mu-infra-metric-val",children:"1 Gbps NKN"}),l.jsx("span",{className:"mu-infra-metric-lbl",children:"HPC Data Core"})]})]})]}),l.jsxs("div",{className:"mu-infra-bento-card mu-infra-card-health",children:[l.jsxs("div",{className:"mu-infra-img-wrap",children:[l.jsx("img",{src:"/faculty-science.jpg",alt:"University Health Centre",className:"mu-infra-img"}),l.jsx("div",{className:"mu-infra-gradient-base"})]}),l.jsxs("div",{className:"mu-infra-content",children:[l.jsx("div",{className:"mu-infra-tag-row",children:l.jsx("span",{className:"mu-infra-badge",children:"WELLNESS"})}),l.jsx("h3",{className:"mu-infra-title",children:"Health Centre"}),l.jsx("p",{className:"mu-infra-desc",children:"Primary care, 24/7 emergency, and diagnostics."})]}),l.jsxs("div",{className:"mu-infra-hover-panel",children:[l.jsx("span",{className:"mu-infra-hover-badge",children:"24/7 HEALTHCARE"}),l.jsx("h3",{className:"mu-infra-hover-title",children:"Health Centre"}),l.jsx("p",{className:"mu-infra-hover-desc",children:"Resident medical officers, diagnostic labs, pharmacy, and ambulance service."}),l.jsxs("div",{className:"mu-infra-hover-metric",children:[l.jsx("span",{className:"mu-infra-metric-val",children:"24/7 Care"}),l.jsx("span",{className:"mu-infra-metric-lbl",children:"Emergency & Pharmacy"})]})]})]}),l.jsxs("div",{className:"mu-infra-bento-card mu-infra-card-botanical",children:[l.jsxs("div",{className:"mu-infra-img-wrap",children:[l.jsx("img",{src:"/why-campus.jpg",alt:"Botanical Garden & Arboretum",className:"mu-infra-img"}),l.jsx("div",{className:"mu-infra-gradient-base"})]}),l.jsxs("div",{className:"mu-infra-content",children:[l.jsx("div",{className:"mu-infra-tag-row",children:l.jsx("span",{className:"mu-infra-badge",children:"FLORA"})}),l.jsx("h3",{className:"mu-infra-title",children:"Botanical Garden"}),l.jsx("p",{className:"mu-infra-desc",children:"Western Ghats flora, arboretum, and solar park."})]}),l.jsxs("div",{className:"mu-infra-hover-panel",children:[l.jsx("span",{className:"mu-infra-hover-badge",children:"BIODIVERSITY"}),l.jsx("h3",{className:"mu-infra-hover-title",children:"Botanical Garden"}),l.jsx("p",{className:"mu-infra-hover-desc",children:"Living repository conserving endemic Western Ghats flora and medicinal plants."}),l.jsxs("div",{className:"mu-infra-hover-metric",children:[l.jsx("span",{className:"mu-infra-metric-val",children:"353 Acres"}),l.jsx("span",{className:"mu-infra-metric-lbl",children:"Green Canopy"})]})]})]})]})]})]})}),l.jsx("section",{id:"research",className:"mu-section mu-bg-mist mu-research-section",children:l.jsxs("div",{className:"mu-container",children:[l.jsx("div",{className:"mu-section-header",children:l.jsxs("div",{children:[l.jsx("span",{className:"mu-eyebrow",children:"PIONEERING DISCOVERY"}),l.jsx("h2",{className:"mu-heading",children:"Nationally Recognized Research Centres"})]})}),l.jsx("div",{className:"mu-research-scroll-wrapper",children:l.jsxs("div",{className:"mu-research-card-grid",children:[l.jsxs("div",{className:"mu-research-image-card",children:[l.jsxs("div",{className:"mu-res-img-wrap",children:[l.jsx("img",{src:"/news-thumb-2.jpg",alt:"Microtron Centre — Advanced Electron Accelerator",className:"mu-res-img"}),l.jsx("div",{className:"mu-res-gradient-base"})]}),l.jsxs("div",{className:"mu-res-content",children:[l.jsx("div",{className:"mu-res-meta",children:l.jsx("span",{className:"mu-res-badge",children:"DAE / BRNS RECOGNIZED"})}),l.jsx("h3",{className:"mu-res-title",children:"Microtron Centre"}),l.jsx("p",{className:"mu-res-desc",children:"Advanced electron accelerator facility for radiation physics, polymer modification, and nuclear research."})]}),l.jsxs("div",{className:"mu-res-hover-panel",children:[l.jsx("span",{className:"mu-res-hover-badge",children:"PARTICLE ACCELERATOR"}),l.jsx("h3",{className:"mu-res-hover-title",children:"Microtron Centre"}),l.jsx("p",{className:"mu-res-hover-desc",children:"Established in collaboration with RRCAT and BARC, conducting frontier research in electron beam technology, radiation physics, and polymer modification."}),l.jsxs("div",{className:"mu-res-hover-footer",children:[l.jsx("span",{className:"mu-res-footer-label",children:"Key Research Domains:"}),l.jsx("span",{className:"mu-res-footer-tags",children:"Radiation Physics • Polymers • Electron Beam Tech"})]})]})]}),l.jsxs("div",{className:"mu-research-image-card",children:[l.jsxs("div",{className:"mu-res-img-wrap",children:[l.jsx("img",{src:"/why-research.jpg",alt:"CARRT — Centre for Application of Radioisotopes",className:"mu-res-img"}),l.jsx("div",{className:"mu-res-gradient-base"})]}),l.jsxs("div",{className:"mu-res-content",children:[l.jsx("div",{className:"mu-res-meta",children:l.jsx("span",{className:"mu-res-badge",children:"CENTRE OF EXCELLENCE"})}),l.jsx("h3",{className:"mu-res-title",children:"CARRT"}),l.jsx("p",{className:"mu-res-desc",children:"Frontier applications of radioisotopes in medical physics, nuclear diagnostics, and radiation biology."})]}),l.jsxs("div",{className:"mu-res-hover-panel",children:[l.jsx("span",{className:"mu-res-hover-badge",children:"RADIOISOTOPE APPLICATIONS"}),l.jsx("h3",{className:"mu-res-hover-title",children:"CARRT (Centre for Radiation Tech)"}),l.jsx("p",{className:"mu-res-hover-desc",children:"National Centre of Excellence partnered with BRNS and AERB for radiopharmaceutical innovations, radiation sterilization, and agricultural food irradiation."}),l.jsxs("div",{className:"mu-res-hover-footer",children:[l.jsx("span",{className:"mu-res-footer-label",children:"Key Research Domains:"}),l.jsx("span",{className:"mu-res-footer-tags",children:"Radiopharmacy • Food Preservation • Nuclear Medicine"})]})]})]}),l.jsxs("div",{className:"mu-research-image-card",children:[l.jsxs("div",{className:"mu-res-img-wrap",children:[l.jsx("img",{src:"/faculty-marine.jpg",alt:"CAREER & Marine Oceanographic Research Station",className:"mu-res-img"}),l.jsx("div",{className:"mu-res-gradient-base"})]}),l.jsxs("div",{className:"mu-res-content",children:[l.jsx("div",{className:"mu-res-meta",children:l.jsx("span",{className:"mu-res-badge",children:"COASTAL & OCEANOGRAPHIC"})}),l.jsx("h3",{className:"mu-res-title",children:"CAREER & Marine Station"}),l.jsx("p",{className:"mu-res-desc",children:"Monitoring Arabian Sea sedimentary dynamics, coastal ecology, and marine environmental radioactivity."})]}),l.jsxs("div",{className:"mu-res-hover-panel",children:[l.jsx("span",{className:"mu-res-hover-badge",children:"COASTAL OCEANOGRAPHY"}),l.jsx("h3",{className:"mu-res-hover-title",children:"CAREER & Marine Station"}),l.jsx("p",{className:"mu-res-hover-desc",children:"Centre for Advanced Research in Environmental Radioactivity monitoring coastal geomorphology, marine biodiversity conservation, and shoreline oceanography."}),l.jsxs("div",{className:"mu-res-hover-footer",children:[l.jsx("span",{className:"mu-res-footer-label",children:"Key Research Domains:"}),l.jsx("span",{className:"mu-res-footer-tags",children:"Marine Geology • Oceanography • Coastal Ecology"})]})]})]})]})})]})}),l.jsx("section",{id:"coastal",className:"mu-section mu-sanctuary-section",children:l.jsx("div",{className:"mu-container",children:l.jsxs("div",{className:"mu-sanctuary-frame",children:[l.jsxs("div",{className:"mu-sanctuary-backdrop",children:[l.jsx("img",{src:"/mangalagangothri-aerial.jpg",alt:"Mangalagangothri Coastal Campus Panoramic View",className:"mu-sanctuary-img"}),l.jsx("div",{className:"mu-sanctuary-gradient"})]}),l.jsxs("div",{className:"mu-sanctuary-inner",children:[l.jsxs("div",{className:"mu-sanctuary-header",children:[l.jsx("span",{className:"mu-eyebrow mu-eyebrow-gold",children:"MANGALAGANGOTHRI • COASTAL SANCTUARY"}),l.jsx("h2",{className:"mu-sanctuary-title",children:"Where the Western Ghats meet the Arabian Sea"}),l.jsx("p",{className:"mu-sanctuary-lead",children:"Perched atop a 353-acre verdant hillock overlooking the Nethravathi river basin, Mangalore University provides an inspiring coastal sanctuary blending biodiversity, state-of-the-art facilities, and scholarly heritage."})]}),l.jsxs("div",{className:"mu-sanctuary-grid",children:[l.jsxs("div",{className:"mu-sanctuary-card",children:[l.jsx("div",{className:"mu-scard-num",children:"353 ACRES"}),l.jsx("h4",{className:"mu-scard-title",children:"Verdant Hilltop Campus"}),l.jsx("p",{className:"mu-scard-desc",children:"Panoramic vistas of the Nethravathi valley and coastal estuary breeze."})]}),l.jsxs("div",{className:"mu-sanctuary-card",children:[l.jsx("div",{className:"mu-scard-num",children:"ECO-BIOME"}),l.jsx("h4",{className:"mu-scard-title",children:"Western Ghats Biodiversity"}),l.jsx("p",{className:"mu-scard-desc",children:"Home to endemic flora, arboretum, medicinal plant gardens, and nature trails."})]}),l.jsxs("div",{className:"mu-sanctuary-card",children:[l.jsx("div",{className:"mu-scard-num",children:"WORLD-CLASS"}),l.jsx("h4",{className:"mu-scard-title",children:"Sports & Athletics Complex"}),l.jsx("p",{className:"mu-scard-desc",children:"400m synthetic track, Olympic-sized gymnasium, and multi-sport pavilions."})]}),l.jsxs("div",{className:"mu-sanctuary-card",children:[l.jsx("div",{className:"mu-scard-num",children:"HERITAGE"}),l.jsx("h4",{className:"mu-scard-title",children:"Sambhrama Cultural Amphitheatre"}),l.jsx("p",{className:"mu-scard-desc",children:"Open-air acoustic performance arena celebrating Yakshagana & coastal arts."})]})]})]})]})})}),l.jsx("section",{id:"placement",className:"mu-section mu-bg-paper mu-placement-editorial-section",children:l.jsx("div",{className:"mu-container",children:l.jsxs("div",{className:"mu-placement-split-grid",children:[l.jsxs("div",{className:"mu-placement-content-left",children:[l.jsx("span",{className:"mu-eyebrow",children:"CAREER & STUDENT SUCCESS"}),l.jsx("h2",{className:"mu-heading",children:"Placement & Career Ecosystem"}),l.jsx("p",{className:"mu-placement-p",children:"The University Employment Information & Guidance Bureau serves as a career catalyst—coordinating corporate recruitments, competitive examination coaching, industry internships, and international academic fellowships."}),l.jsxs("div",{className:"mu-placement-cards-grid",children:[l.jsx("a",{href:"#campus-recruitment",className:"mu-placement-card",children:l.jsxs("div",{className:"mu-pcard-body",children:[l.jsxs("div",{className:"mu-pcard-header-row",children:[l.jsx("h4",{className:"mu-pcard-title",children:"Campus Recruitment"}),l.jsx(Yt,{size:16,className:"mu-pcard-arrow"})]}),l.jsx("p",{className:"mu-pcard-desc",children:"Industry-led hiring drives, corporate interfaces, and active recruiter engagement."})]})}),l.jsx("a",{href:"#career-guidance",className:"mu-placement-card",children:l.jsxs("div",{className:"mu-pcard-body",children:[l.jsxs("div",{className:"mu-pcard-header-row",children:[l.jsx("h4",{className:"mu-pcard-title",children:"Career Guidance"}),l.jsx(Yt,{size:16,className:"mu-pcard-arrow"})]}),l.jsx("p",{className:"mu-pcard-desc",children:"Individual counselling, alumni mentorship, and competitive-exam preparation."})]})}),l.jsx("a",{href:"#internships",className:"mu-placement-card",children:l.jsxs("div",{className:"mu-pcard-body",children:[l.jsxs("div",{className:"mu-pcard-header-row",children:[l.jsx("h4",{className:"mu-pcard-title",children:"Internships & Industry Exposure"}),l.jsx(Yt,{size:16,className:"mu-pcard-arrow"})]}),l.jsx("p",{className:"mu-pcard-desc",children:"Practical learning through summer internships and research-corporate partnerships."})]})}),l.jsx("a",{href:"#higher-studies",className:"mu-placement-card",children:l.jsxs("div",{className:"mu-pcard-body",children:[l.jsxs("div",{className:"mu-pcard-header-row",children:[l.jsx("h4",{className:"mu-pcard-title",children:"Higher Studies & Fellowships"}),l.jsx(Yt,{size:16,className:"mu-pcard-arrow"})]}),l.jsx("p",{className:"mu-pcard-desc",children:"Guidance for doctoral admissions, international fellowships, and national grants."})]})})]})]}),l.jsx("div",{className:"mu-placement-visual-right",children:l.jsxs("div",{className:"mu-placement-visual-frame",children:[l.jsx("div",{className:"mu-placement-glow-backdrop"}),l.jsxs("div",{className:"mu-placement-img-container",children:[l.jsx("img",{src:"/why-academic.jpg",alt:"Mangalore University Students in Career & Academic Progression",className:"mu-placement-main-img"}),l.jsx("div",{className:"mu-placement-img-overlay"})]})]})})]})})}),l.jsx("section",{id:"news",className:"mu-section mu-bg-mist mu-news-editorial-section",children:l.jsxs("div",{className:"mu-container",children:[l.jsxs("div",{className:"mu-news-top-bar",children:[l.jsxs("div",{children:[l.jsx("span",{className:"mu-eyebrow",children:"NOTICES & CIRCULARS"}),l.jsx("h2",{className:"mu-heading",children:"News, Events & Official Circulars"})]}),l.jsxs("a",{href:"#all-notifications",className:"mu-news-view-all",children:["View All Notifications ",l.jsx(Yt,{size:15})]})]}),l.jsxs("div",{className:"mu-news-editorial-grid",children:[l.jsx("div",{className:"mu-news-featured-col",children:l.jsxs("a",{href:Se.link,className:"mu-news-featured-card",children:[l.jsxs("div",{className:"mu-featured-img-wrap",children:[l.jsx("img",{src:Se.image,alt:Se.title,className:"mu-featured-img"}),l.jsx("div",{className:"mu-featured-gradient-overlay"})]}),l.jsxs("div",{className:"mu-featured-content",children:[l.jsxs("div",{className:"mu-featured-meta",children:[l.jsx("span",{className:"mu-featured-badge",children:Se.category}),l.jsx("span",{className:"mu-featured-date",children:Se.date})]}),l.jsx("h3",{className:"mu-featured-title",children:Se.title}),l.jsx("p",{className:"mu-featured-desc",children:Se.desc}),l.jsxs("div",{className:"mu-featured-link-action",children:[l.jsx("span",{children:"Read Full Coverage"}),l.jsx(_l,{size:16})]})]})]})}),l.jsx("div",{className:"mu-news-list-col",children:l.jsx("div",{className:"mu-news-scroll-container",children:Je.map(z=>l.jsxs("a",{href:z.link,className:"mu-news-compact-item",children:[l.jsx("div",{className:"mu-item-thumb-wrap",children:l.jsx("img",{src:z.image,alt:z.title,className:"mu-item-thumb"})}),l.jsxs("div",{className:"mu-item-details",children:[l.jsxs("div",{className:"mu-item-meta-row",children:[l.jsx("span",{className:"mu-item-category",children:z.category}),l.jsx("span",{className:"mu-item-date",children:z.date})]}),l.jsx("h4",{className:"mu-item-title",children:z.title}),l.jsx("p",{className:"mu-item-desc",children:z.desc}),l.jsxs("div",{className:"mu-item-readmore",children:[l.jsx("span",{children:"Read More"}),l.jsx(_l,{size:14,className:"mu-item-arrow"})]})]})]},z.id))})})]})]})}),l.jsx("section",{id:"testimonials",className:"mu-section mu-bg-paper mu-testimonial-section",children:l.jsxs("div",{className:"mu-container",children:[l.jsxs("div",{className:"mu-section-header",children:[l.jsxs("div",{children:[l.jsx("span",{className:"mu-eyebrow",children:"VOICES OF MANGALAGANGOTHRI"}),l.jsx("h2",{className:"mu-heading",children:"Student & Alumni Perspectives"})]}),l.jsxs("div",{className:"mu-t-header-nav",children:[l.jsx("button",{type:"button",className:"mu-t-arrow-btn",onClick:()=>D(z=>z===0?B.length-1:z-1),"aria-label":"Previous Testimonial",children:l.jsx(qd,{size:18})}),l.jsx("button",{type:"button",className:"mu-t-arrow-btn",onClick:()=>D(z=>z===B.length-1?0:z+1),"aria-label":"Next Testimonial",children:l.jsx(Jd,{size:18})})]})]}),l.jsxs("div",{className:"mu-t-carousel-wrapper",children:[l.jsx("div",{className:"mu-t-cards-row",children:[-1,0,1].map(z=>{const H=(le+z+B.length)%B.length,oe=B[H],ge=z===0;return l.jsxs("div",{onClick:()=>{z===-1?D(ce=>ce===0?B.length-1:ce-1):z===1&&D(ce=>ce===B.length-1?0:ce+1)},className:`mu-t-card ${ge?"mu-t-card-center":"mu-t-card-side"}`,role:"group","aria-label":`Testimonial by ${oe.name}`,children:[l.jsxs("p",{className:"mu-t-card-quote",children:["“",oe.quote,"”"]}),l.jsxs("div",{className:"mu-t-card-profile",children:[l.jsx("div",{className:`mu-t-avatar ${ge?"mu-avatar-center":"mu-avatar-side"}`,children:oe.avatar}),l.jsxs("div",{className:"mu-t-meta",children:[l.jsx("h4",{className:"mu-t-name",children:oe.name}),l.jsx("span",{className:"mu-t-role",children:oe.role}),l.jsx("span",{className:"mu-t-batch",children:oe.batch})]})]})]},`${oe.id}-${z}`)})}),l.jsx("div",{className:"mu-t-dots-container",children:B.map((z,H)=>l.jsx("button",{type:"button",className:`mu-t-dot-pill ${le===H?"mu-t-dot-pill-active":""}`,onClick:()=>D(H),"aria-label":`Go to testimonial ${H+1}`},H))})]})]})}),l.jsx("section",{id:"admissions",className:"mu-cta-banner-strip",children:l.jsx("div",{className:"mu-container",children:l.jsxs("div",{className:"mu-cta-card-wrapper",children:[l.jsxs("div",{className:"mu-cta-bg-layer",children:[l.jsx("img",{src:"/campus-heritage.jpg",alt:"Mangalore University Campus Background",className:"mu-cta-bg-img"}),l.jsx("div",{className:"mu-cta-bg-overlay"})]}),l.jsxs("div",{className:"mu-cta-inner",children:[l.jsx("div",{className:"mu-cta-left",children:l.jsxs("div",{className:"mu-cta-text-group",children:[l.jsx("span",{className:"mu-cta-eyebrow",children:"ADMISSIONS 2026–2027"}),l.jsx("h3",{className:"mu-cta-title",children:"Begin your journey at Mangalagangothri"}),l.jsx("p",{className:"mu-cta-subtitle",children:"Postgraduate, doctoral, and diploma admissions are open via Karnataka UUCMS portal."})]})}),l.jsxs("div",{className:"mu-cta-actions-right",children:[l.jsxs("a",{href:"#uucms-apply",className:"mu-btn mu-btn-gold mu-btn-cta-compact",children:["Apply Now ",l.jsx(Yt,{size:14})]}),l.jsxs("a",{href:"#download-prospectus",className:"mu-btn mu-btn-outline-white mu-btn-cta-compact",children:[l.jsx(tm,{size:14})," Prospectus (PDF)"]})]})]})]})})}),l.jsx("footer",{className:"mu-footer",children:l.jsxs("div",{className:"mu-container",children:[l.jsxs("div",{className:"mu-footer-grid",children:[l.jsxs("div",{className:"mu-footer-col",children:[l.jsx("div",{className:"mu-footer-brand-wrapper",children:l.jsx("img",{src:"/mu-logo.png",alt:"Mangalore University — ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾನಿಲಯ",className:"mu-footer-logo-img"})}),l.jsx("p",{className:"mu-footer-address",children:"Mangalagangothri - 574 199, Dakshina Kannada District, Karnataka State, India."}),l.jsxs("div",{className:"mu-footer-contact",children:[l.jsxs("p",{children:[l.jsx(fm,{size:14})," +91 824 2287276 / 2287347"]}),l.jsxs("p",{children:[l.jsx(um,{size:14})," contact@mangaloreuniversity.ac.in"]})]})]}),l.jsxs("div",{className:"mu-footer-col",children:[l.jsx("h4",{className:"mu-footer-col-title",children:"Academics"}),l.jsxs("ul",{className:"mu-footer-links",children:[l.jsx("li",{children:l.jsx("a",{href:"#faculty-arts",children:"Faculty of Arts"})}),l.jsx("li",{children:l.jsx("a",{href:"#faculty-science",children:"Faculty of Science & Tech"})}),l.jsx("li",{children:l.jsx("a",{href:"#faculty-commerce",children:"Faculty of Commerce"})}),l.jsx("li",{children:l.jsx("a",{href:"#faculty-education",children:"Faculty of Education"})}),l.jsx("li",{children:l.jsx("a",{href:"#research",children:"Microtron & CARRT Centres"})}),l.jsx("li",{children:l.jsx("a",{href:"#calendar",children:"Academic Calendar 2026"})})]})]}),l.jsxs("div",{className:"mu-footer-col",children:[l.jsx("h4",{className:"mu-footer-col-title",children:"Examinations & Governance"}),l.jsxs("ul",{className:"mu-footer-links",children:[l.jsx("li",{children:l.jsx("a",{href:"#results",children:"Examination Results Portal"})}),l.jsx("li",{children:l.jsx("a",{href:"#reval",children:"Revaluation Applications"})}),l.jsx("li",{children:l.jsx("a",{href:"#statutes",children:"University Statutes & Acts"})}),l.jsx("li",{children:l.jsx("a",{href:"#rti",children:"Right to Information (RTI)"})}),l.jsx("li",{children:l.jsx("a",{href:"#iqac",children:"Internal Quality Assurance Cell (IQAC)"})}),l.jsx("li",{children:l.jsx("a",{href:"#naac",children:"NAAC Self Study Report"})})]})]}),l.jsxs("div",{className:"mu-footer-col",children:[l.jsx("h4",{className:"mu-footer-col-title",children:"Student Welfare"}),l.jsxs("ul",{className:"mu-footer-links",children:[l.jsx("li",{children:l.jsx("a",{href:"#anti-ragging",children:"Anti-Ragging Squad & Cell"})}),l.jsx("li",{children:l.jsx("a",{href:"#grievance",children:"Women's Grievance Redressal"})}),l.jsx("li",{children:l.jsx("a",{href:"#scst",children:"SC / ST Special Cell"})}),l.jsx("li",{children:l.jsx("a",{href:"#infrastructure",children:"Central Library Catalog"})}),l.jsx("li",{children:l.jsx("a",{href:"#nirf",children:"NIRF Disclosures"})}),l.jsx("li",{children:l.jsx("a",{href:"#uucms",children:"Karnataka UUCMS Portal"})})]})]})]}),l.jsxs("div",{className:"mu-footer-bottom",children:[l.jsx("p",{children:"© 2026 Mangalore University, Mangalagangothri. All Rights Reserved."}),l.jsxs("div",{className:"mu-footer-legal",children:[l.jsx("a",{href:"#privacy",children:"Privacy Policy"}),l.jsx("span",{className:"mu-utility-divider",children:"|"}),l.jsx("a",{href:"#terms",children:"Terms of Use"}),l.jsx("span",{className:"mu-utility-divider",children:"|"}),l.jsx("a",{href:"#sitemap",children:"Sitemap"})]})]})]})}),l.jsx("style",{children:`
        .mu-page {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          position: relative;
        }

        /* Utility Bar */
        .mu-utility-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1010;
          background: #071D33;
          color: rgba(255, 255, 255, 0.85);
          font-size: 13px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.3s ease, opacity 0.3s ease;
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
          color: rgba(255, 255, 255, 0.85);
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
          color: rgba(255, 255, 255, 0.25);
        }
        .mu-utility-socials {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .mu-social-icon {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s;
        }
        .mu-social-icon:hover {
          color: var(--gold);
        }

        /* Main Header — Seamless Transparent Overlay on Light Hero, Soft Sticky Deep-Navy on Scroll */
        .mu-header {
          position: fixed;
          top: 36px;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: rgba(247, 248, 250, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: none;
          box-shadow: none;
          transition: top 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
          padding: 8px 0;
        }
        .mu-header-scrolled {
          top: 0;
          background-color: rgba(7, 29, 51, 0.98);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
          border-bottom: none;
          padding: 8px 0;
        }
        .mu-header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
        }
        .mu-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 2px 0;
          margin-right: 24px;
        }
        .mu-brand-logo-img {
          height: 58px;
          width: auto;
          max-width: 440px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06));
          transition: height 0.3s ease;
        }
        .mu-header-scrolled .mu-brand-logo-img {
          height: 48px;
          filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.4));
        }
        .mu-footer-brand-wrapper {
          margin-bottom: 24px;
        }
        .mu-footer-logo-img {
          height: 68px;
          width: auto;
          max-width: 400px;
          object-fit: contain;
          display: block;
          filter: none;
        }

        /* Nav Links */
        .mu-nav-desktop {
          display: flex;
          align-items: center;
          gap: 26px;
        }
        .mu-nav-link {
          font-family: var(--font-heading);
          font-size: 13.5px;
          font-weight: 600;
          color: var(--teal);
          text-decoration: none;
          position: relative;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .mu-header-scrolled .mu-nav-link {
          color: rgba(255, 255, 255, 0.92);
        }
        .mu-nav-link:hover {
          color: var(--blue);
        }
        .mu-header-scrolled .mu-nav-link:hover {
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
          border-top: 1px solid rgba(255, 255, 255, 0.08);
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

        /* =========================================================================
           Hero Section (One Screen Viewport Fit with Integrated Campus Carousel)
           ========================================================================= */
        .mu-hero-modern {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          max-height: 1080px;
          background-color: var(--paper);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          padding-top: 110px;
          padding-bottom: 0;
          box-sizing: border-box;
        }

        .mu-hero-modern-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: clamp(8px, 1.8vh, 24px);
          padding-bottom: clamp(10px, 2vh, 24px);
          position: relative;
          z-index: 5;
          flex-shrink: 0;
        }

        .mu-hero-modern-content {
          max-width: 860px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Eyebrow badge (Pure text, no box or background) */
        .mu-hero-modern-eyebrow-wrap {
          margin-bottom: clamp(10px, 1.6vh, 18px);
        }

        .mu-hero-modern-eyebrow {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: clamp(11.5px, 0.95vw, 13px);
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--blue);
          background: none;
          border: none;
          padding: 0;
        }

        /* Short, Powerful Headline (Montserrat) */
        .mu-hero-modern-headline {
          font-family: var(--font-heading);
          font-size: clamp(28px, 3.4vw, 48px);
          font-weight: 800;
          color: var(--teal);
          line-height: 1.14;
          letter-spacing: -0.03em;
          margin-bottom: clamp(8px, 1.4vh, 14px);
          max-width: 840px;
        }

        .mu-hero-headline-accent {
          color: var(--blue);
          position: relative;
        }

        /* Concise Supporting Description */
        .mu-hero-modern-desc {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.1vw, 16px);
          line-height: 1.5;
          color: var(--ink-soft);
          max-width: 660px;
          margin: 0 auto;
        }

        /* Lower Media Stage: Campus Photography Frame Filling Viewport Bottom */
        .mu-hero-modern-media-stage {
          position: relative;
          width: 100%;
          flex: 1;
          min-height: clamp(220px, 35vh, 460px);
          overflow: hidden;
          background-color: var(--teal-deep);
        }

        /* Seamless Fade from Light Canvas into Lower Photograph */
        .mu-hero-stage-top-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: clamp(60px, 12vh, 100px);
          z-index: 3;
          pointer-events: none;
          background: linear-gradient(
            to bottom,
            var(--paper) 0%,
            rgba(247, 248, 250, 0.85) 35%,
            rgba(247, 248, 250, 0.4) 65%,
            transparent 100%
          );
        }

        /* Slides Frame */
        .mu-hero-modern-slides-frame {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .mu-hero-modern-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: scale(1.02);
          transition: opacity 1.1s cubic-bezier(0.4, 0, 0.2, 1), transform 5s ease-out;
          pointer-events: none;
        }

        .mu-hero-modern-slide.mu-hero-modern-slide-active {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }

        .mu-hero-modern-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 38%;
          display: block;
        }

        /* Subtle Bottom Vignette for Campus Image Caption */
        .mu-hero-slide-caption-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: 24px 0 12px;
          background: linear-gradient(to top, rgba(7, 29, 51, 0.9) 0%, rgba(7, 29, 51, 0.45) 60%, transparent 100%);
        }

        .mu-hero-caption-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mu-hero-slide-badge {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--gold);
          color: var(--teal-deep);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }

        .mu-hero-slide-title {
          font-family: var(--font-heading);
          font-size: 13.5px;
          font-weight: 600;
          color: #FFFFFF;
          letter-spacing: -0.01em;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }

        /* Slide Progress Dots */
        .mu-hero-progress-dots {
          position: absolute;
          bottom: 12px;
          right: 48px;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .mu-hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }

        .mu-hero-dot.mu-hero-dot-active {
          width: 22px;
          border-radius: var(--radius-md);
          background: var(--gold);
          box-shadow: 0 0 8px rgba(232, 163, 23, 0.6);
        }

        /* Flash News Ticker — Emerging seamlessly from the Hero Dissolve */
        .mu-ticker-band {
          width: 100%;
          height: 54px;
          background-color: #071D33;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          position: relative;
          z-index: 10;
          overflow: hidden;
        }
        .mu-ticker-container {
          display: flex;
          align-items: center;
          height: 100%;
          gap: 20px;
        }
        .mu-ticker-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: #D92525;
          color: #FFFFFF;
          padding: 6px 14px;
          border-radius: var(--radius-md);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          flex-shrink: 0;
          z-index: 2;
        }
        .mu-ticker-dot {
          width: 7px;
          height: 7px;
          background-color: #FFFFFF;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        .mu-ticker-track {
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }
        .mu-ticker-content {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          animation: tickerScroll 32s linear infinite;
        }
        .mu-ticker-track:hover .mu-ticker-content {
          animation-play-state: paused;
        }
        @keyframes tickerScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .mu-ticker-item {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
        }
        .mu-ticker-item:hover {
          color: var(--gold);
        }
        .mu-ticker-date {
          background-color: rgba(255, 255, 255, 0.12);
          color: var(--gold);
          font-size: 10.5px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          letter-spacing: 0.04em;
        }
        .mu-ticker-sep {
          color: rgba(255, 255, 255, 0.3);
          font-size: 14px;
        }

        /* About Section */
        .mu-about-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 72px;
          align-items: center;
        }
        .mu-about-image-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: visible;
        }
        .mu-about-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: var(--radius-lg);
          border: 1px solid var(--line);
        }
        .mu-about-milestone {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background-color: var(--teal);
          color: #FFFFFF;
          padding: 18px 24px;
          border-radius: var(--radius-md);
          border-left: 3.5px solid var(--gold);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }
        .mu-milestone-year {
          display: block;
          font-family: var(--font-serif);
          font-size: 28px;
          font-weight: 600;
          color: var(--gold);
        }
        .mu-milestone-text {
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.85);
        }
        .mu-about-p {
          font-size: 16.5px;
          color: var(--ink-soft);
          margin-bottom: 18px;
          line-height: 1.65;
          max-width: 660px;
        }
        /* =========================================================================
           SECTION 04B: Vice-Chancellor's Message (Minimalist Editorial Layout)
           ========================================================================= */
        .mu-vc-editorial-section {
          padding: 68px 0 76px 0;
          background-color: var(--paper);
          border-top: 1px solid var(--line-soft);
          width: 100%;
        }
        .mu-vc-editorial-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1120px;
          margin: 0 auto;
        }

        /* Left Portrait Cutout Column */
        .mu-vc-portrait-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .mu-vc-cutout-frame {
          position: relative;
          width: 220px;
          height: 250px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          margin-bottom: 16px;
          border-radius: 12px 12px 0 0;
          overflow: hidden;
        }
        .mu-vc-cutout-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          border-radius: 12px 12px 0 0;
          filter: drop-shadow(0 10px 20px rgba(11, 42, 74, 0.12));
          /* Mask image for seamless bottom dissolve blend into background */
          -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
        }
        .mu-vc-cutout-bottom-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 36px;
          background: linear-gradient(to bottom, transparent, var(--paper));
          pointer-events: none;
        }
        .mu-vc-signoff-block {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mu-vc-signoff-name {
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 700;
          color: var(--teal);
          margin: 0 0 3px 0;
          line-height: 1.25;
        }
        .mu-vc-signoff-title {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: var(--gold-deep);
          margin-bottom: 1px;
        }
        .mu-vc-signoff-inst {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--ink-soft);
        }

        /* Right Message Content Column */
        .mu-vc-message-col {
          display: flex;
          flex-direction: column;
        }
        .mu-vc-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .mu-vc-eyebrow-accent {
          margin-bottom: 0 !important;
          color: var(--blue) !important;
        }
        .mu-vc-editorial-quote-mark {
          color: var(--gold);
          opacity: 0.9;
          stroke-width: 1.5;
        }
        .mu-vc-editorial-lead {
          font-family: var(--font-quote, 'Fraunces', Georgia, serif);
          font-size: clamp(20px, 2.1vw, 25px);
          font-style: italic;
          font-weight: 400;
          color: var(--teal);
          line-height: 1.45;
          margin: 0 0 18px 0;
          letter-spacing: -0.01em;
        }
        .mu-vc-editorial-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 680px;
        }
        .mu-vc-editorial-body p {
          font-family: var(--font-body);
          font-size: 14.5px;
          line-height: 1.7;
          color: var(--ink-soft);
          margin: 0;
        }

        @media (max-width: 860px) {
          .mu-vc-editorial-grid {
            grid-template-columns: 1fr;
            gap: 36px;
            text-align: center;
          }
          .mu-vc-portrait-col {
            margin: 0 auto;
          }
          .mu-vc-header-row {
            justify-content: center;
            gap: 16px;
          }
          .mu-vc-editorial-body {
            margin: 0 auto;
          }
        }
        .mu-link-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--blue);
          font-weight: 600;
          font-size: 15px;
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
          padding: 24px 28px;
          border-right: 1px solid var(--line);
          text-align: center;
        }
        .mu-stat-card-last {
          border-right: none;
        }
        .mu-stat-number {
          font-family: var(--font-serif);
          font-size: clamp(38px, 3.8vw, 54px);
          font-weight: 500;
          color: var(--teal);
          margin-bottom: 8px;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .mu-stat-label {
          font-size: 14px;
          color: var(--ink-soft);
          font-weight: 500;
          line-height: 1.4;
        }

        /* Why Study Section (Asymmetrical Editorial Visual Grid) */
        .mu-section-header-center {
          text-align: center;
          margin-bottom: 48px;
        }

        .mu-why-asym-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: stretch;
          width: 100%;
        }

        /* Base Card Styling */
        .mu-why-card {
          position: relative;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid var(--line);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(7, 29, 51, 0.04);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
          cursor: pointer;
        }
        .mu-why-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(7, 29, 51, 0.12);
          border-color: var(--blue);
        }

        /* Left Hero Card (Tall Portrait Structure) */
        .mu-why-card-tall {
          height: 560px;
        }
        .mu-why-card-tall .mu-why-image-wrapper {
          height: 380px;
        }
        .mu-why-card-tall .mu-why-content-panel {
          padding: 24px 28px 26px;
        }

        /* Right Column (Stacked Rhythm) */
        .mu-why-right-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
          height: 560px;
        }
        .mu-why-card-wide {
          flex: 1;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          overflow: hidden;
        }
        .mu-why-card-wide .mu-why-image-wrapper {
          height: 100%;
          min-height: 100%;
        }
        .mu-why-card-wide .mu-why-content-panel {
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Image & Overlays */
        .mu-why-image-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          background-color: var(--navy);
        }
        .mu-why-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
        }
        .mu-why-card:hover .mu-why-img {
          transform: scale(1.05);
          filter: brightness(0.6);
        }
        .mu-why-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(7, 29, 51, 0.1) 0%, rgba(7, 29, 51, 0.4) 100%);
          pointer-events: none;
        }

        /* Content Panels */
        .mu-why-content-panel {
          background: #FFFFFF;
          border-top: 2px solid rgba(11, 42, 74, 0.08);
        }
        .mu-why-card-wide .mu-why-content-panel {
          border-top: none;
          border-left: 2px solid rgba(11, 42, 74, 0.08);
        }
        .mu-why-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--blue);
          display: block;
          margin-bottom: 6px;
        }
        .mu-why-title {
          font-family: var(--font-serif);
          font-size: 20px;
          font-weight: 600;
          color: var(--teal);
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .mu-why-desc {
          font-size: 13.5px;
          color: var(--ink-soft);
          line-height: 1.55;
          margin: 0;
        }

        /* Hover Reveal State */
        .mu-why-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(7, 29, 51, 0.96) 0%, rgba(11, 42, 74, 0.98) 100%);
          color: #FFFFFF;
          padding: 28px 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s;
          z-index: 10;
          border-top: 4px solid var(--gold);
        }
        .mu-why-card:hover .mu-why-hover-overlay {
          opacity: 1;
          visibility: visible;
        }
        .mu-why-hover-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 6px;
        }
        .mu-why-hover-title {
          font-family: var(--font-serif);
          font-size: 21px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 10px 0;
          line-height: 1.25;
        }
        .mu-why-hover-desc {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.55;
          margin: 0 0 16px 0;
          flex: 1;
        }
        .mu-why-hover-metric {
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .mu-why-metric-val {
          font-family: var(--font-serif);
          font-size: 18px;
          font-weight: 600;
          color: var(--gold);
        }
        .mu-why-metric-lbl {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Faculties Section (Horizontal Scrollable Card Showcase) */
        .mu-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 44px;
          gap: 32px;
        }
        .mu-faculty-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
          max-width: 520px;
        }
        .mu-faculty-header-right .mu-body-lead {
          margin-bottom: 0;
          text-align: right;
        }
        /* Faculties Section (Screen-Fit Modern Card Grid) */
        .mu-faculty-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          padding: 8px 0 16px 0;
          width: 100%;
        }

        .mu-faculty-hcard {
          width: 100%;
          position: relative;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid var(--line);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 440px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
          cursor: pointer;
        }
        .mu-faculty-hcard:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 34px rgba(7, 29, 51, 0.16);
          border-color: var(--accent-color, var(--blue));
        }

        /* Default Image Section */
        .mu-hcard-image-wrap {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background-color: var(--navy);
        }
        .mu-hcard-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease, filter 0.5s ease;
        }
        .mu-faculty-hcard:hover .mu-hcard-img {
          transform: scale(1.06);
          filter: brightness(0.65);
        }
        .mu-hcard-top-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.5) 100%);
          pointer-events: none;
        }
        .mu-hcard-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
          backdrop-filter: blur(4px);
        }

        /* Default Content Section */
        .mu-hcard-content {
          padding: 22px 20px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
          background: #FFFFFF;
          border-top: 3px solid var(--accent-color, var(--blue));
        }
        .mu-hcard-category {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-color, var(--blue));
          margin-bottom: 6px;
          display: block;
        }
        .mu-hcard-title {
          font-family: var(--font-serif);
          font-size: 20px;
          font-weight: 600;
          color: var(--teal);
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .mu-hcard-desc {
          font-size: 13.5px;
          color: var(--ink-soft);
          line-height: 1.55;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Hover Overlay State: Deep Navy Smooth Transition */
        .mu-hcard-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(7, 29, 51, 0.96) 0%, rgba(11, 42, 74, 0.98) 100%);
          color: #FFFFFF;
          padding: 26px 22px 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s;
          z-index: 10;
          border-top: 4px solid var(--gold);
        }
        .mu-faculty-hcard:hover .mu-hcard-hover-overlay {
          opacity: 1;
          visibility: visible;
        }
        .mu-hcard-hover-category {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 6px;
        }
        .mu-hcard-hover-title {
          font-family: var(--font-serif);
          font-size: 21px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 10px 0;
          line-height: 1.25;
        }
        .mu-hcard-hover-desc {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          margin: 0 0 14px 0;
        }
        .mu-hcard-hover-progs {
          flex: 1;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 12px;
          margin-bottom: 14px;
        }
        .mu-hcard-prog-label {
          font-size: 11.5px;
          font-weight: 600;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 8px;
        }
        .mu-hcard-prog-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .mu-hcard-prog-list li {
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.92);
          display: flex;
          align-items: center;
          gap: 6px;
          line-height: 1.35;
        }
        .mu-hcard-prog-bullet {
          color: var(--gold);
          font-size: 14px;
        }
        .mu-hcard-hover-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background-color: var(--gold);
          color: var(--teal);
          font-size: 13px;
          font-weight: 700;
          padding: 10px 16px;
          border-radius: var(--radius-btn);
          text-decoration: none;
          transition: background-color 0.2s, transform 0.2s;
        }
        .mu-hcard-hover-link:hover {
          background-color: #FFC038;
          transform: translateY(-1px);
        }

        /* =========================================================================
           SECTION 08: Campus & Infrastructure (Single-Screen Editorial Bento Grid)
           ========================================================================= */
        .mu-infra-editorial-section {
          padding: 56px 0 64px 0;
          background-color: var(--paper);
        }
        .mu-infra-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 24px;
          gap: 24px;
        }
        .mu-heading-tight {
          font-family: var(--font-heading);
          font-size: clamp(26px, 2.8vw, 36px);
          font-weight: 700;
          color: var(--teal);
          line-height: 1.2;
          margin: 0;
        }
        .mu-infra-tagline {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 14px;
          color: var(--ink-soft);
          max-width: 520px;
          text-align: right;
          line-height: 1.45;
        }

        /* Bento Grid: 40% Hero on Left, 60% 5-Tile Mosaic on Right */
        .mu-infra-bento-grid {
          display: grid;
          grid-template-columns: 42% 58%;
          gap: 16px;
          height: 520px;
        }

        /* Generic Bento Card */
        .mu-infra-bento-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: var(--teal-deep);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 14px rgba(11, 42, 74, 0.08);
        }
        .mu-infra-bento-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(11, 42, 74, 0.16);
        }

        /* Left Hero Card: Spans full 520px height */
        .mu-infra-bento-hero {
          height: 100%;
        }

        /* Right 5-Tile Nested Container */
        .mu-infra-bento-right {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: 1fr 1fr;
          gap: 16px;
          height: 100%;
        }

        /* Row 1 Tiles */
        .mu-infra-card-sports {
          grid-column: span 4;
        }
        .mu-infra-card-hostels {
          grid-column: span 2;
        }

        /* Row 2 Tiles (3 equal 2-col cards) */
        .mu-infra-card-ict {
          grid-column: span 2;
        }
        .mu-infra-card-health {
          grid-column: span 2;
        }
        .mu-infra-card-botanical {
          grid-column: span 2;
        }

        /* Image & Gradients */
        .mu-infra-img-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .mu-infra-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .mu-infra-bento-card:hover .mu-infra-img {
          transform: scale(1.05);
        }
        .mu-infra-gradient-base {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          background: linear-gradient(
            180deg,
            rgba(7, 29, 51, 0.04) 0%,
            rgba(7, 29, 51, 0.35) 40%,
            rgba(7, 29, 51, 0.82) 72%,
            rgba(7, 29, 51, 0.96) 100%
          );
        }

        /* Default Content State */
        .mu-infra-content {
          position: relative;
          z-index: 2;
          padding: 16px 20px 18px 20px;
          color: #FFFFFF;
          pointer-events: none;
        }
        .mu-infra-bento-hero .mu-infra-content {
          padding: 24px 26px 26px 26px;
        }
        .mu-infra-tag-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
        }
        .mu-infra-badge {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background-color: var(--gold);
          color: var(--teal-deep);
          padding: 2px 7px;
          border-radius: var(--radius-sm);
        }
        .mu-infra-badge-icon {
          color: var(--gold);
        }
        .mu-infra-title {
          font-family: var(--font-heading);
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 4px 0;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }
        .mu-infra-bento-hero .mu-infra-title {
          font-size: clamp(19px, 1.9vw, 24px);
          margin-bottom: 8px;
        }
        .mu-infra-desc {
          font-family: var(--font-body);
          font-size: 12.5px;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mu-infra-bento-hero .mu-infra-desc {
          font-size: 14px;
          line-height: 1.55;
          -webkit-line-clamp: 3;
        }

        /* Hover Reveal Panel */
        .mu-infra-hover-panel {
          position: absolute;
          inset: 0;
          z-index: 4;
          background: rgba(7, 29, 51, 0.95);
          padding: 20px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .mu-infra-bento-hero .mu-infra-hover-panel {
          padding: 32px 28px;
        }
        .mu-infra-bento-card:hover .mu-infra-hover-panel {
          opacity: 1;
          pointer-events: auto;
        }
        .mu-infra-hover-badge {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          display: inline-block;
          margin-bottom: 6px;
        }
        .mu-infra-hover-title {
          font-family: var(--font-heading);
          font-size: clamp(15px, 1.5vw, 19px);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 6px 0;
          line-height: 1.25;
        }
        .mu-infra-bento-hero .mu-infra-hover-title {
          font-size: clamp(20px, 2vw, 24px);
          margin-bottom: 10px;
        }
        .mu-infra-hover-desc {
          font-family: var(--font-body);
          font-size: 12.5px;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 10px 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mu-infra-bento-hero .mu-infra-hover-desc {
          font-size: 14px;
          line-height: 1.55;
          -webkit-line-clamp: 4;
          margin-bottom: 16px;
        }
        .mu-infra-hover-metric {
          display: flex;
          align-items: baseline;
          gap: 8px;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }
        .mu-infra-metric-val {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 700;
          color: var(--gold);
        }
        .mu-infra-metric-lbl {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 11px;
          color: rgba(255, 255, 255, 0.75);
          font-weight: 500;
        }

        /* =========================================================================
           SECTION 09: Nationally Recognized Research Centres (Image-Led Editorial)
           ========================================================================= */
        .mu-research-section {
          padding: 88px 0;
        }
        .mu-research-scroll-wrapper {
          width: 100%;
        }
        .mu-research-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .mu-research-image-card {
          position: relative;
          height: 420px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: var(--teal-deep);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          box-shadow: 0 4px 18px rgba(11, 42, 74, 0.09);
        }
        .mu-research-image-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(11, 42, 74, 0.2);
        }

        /* Image & Gradients */
        .mu-res-img-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .mu-res-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .mu-research-image-card:hover .mu-res-img {
          transform: scale(1.06);
        }
        .mu-res-gradient-base {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          background: linear-gradient(
            180deg,
            rgba(7, 29, 51, 0.08) 0%,
            rgba(7, 29, 51, 0.4) 40%,
            rgba(7, 29, 51, 0.85) 72%,
            rgba(7, 29, 51, 0.98) 100%
          );
        }

        /* Default Content State */
        .mu-res-content {
          position: relative;
          z-index: 2;
          padding: 24px 24px 26px 24px;
          color: #FFFFFF;
          pointer-events: none;
        }
        .mu-res-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .mu-res-badge {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background-color: var(--gold);
          color: var(--teal-deep);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }
        .mu-res-icon-pill {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.16);
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mu-res-title {
          font-family: var(--font-heading);
          font-size: clamp(19px, 1.8vw, 23px);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 6px 0;
          line-height: 1.25;
        }
        .mu-res-desc {
          font-family: var(--font-body);
          font-size: 13.5px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Hover Reveal Panel */
        .mu-res-hover-panel {
          position: absolute;
          inset: 0;
          z-index: 4;
          background: rgba(7, 29, 51, 0.95);
          padding: 30px 24px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .mu-research-image-card:hover .mu-res-hover-panel {
          opacity: 1;
          pointer-events: auto;
        }
        .mu-res-hover-badge {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          display: inline-block;
          margin-bottom: 8px;
        }
        .mu-res-hover-title {
          font-family: var(--font-heading);
          font-size: clamp(19px, 1.9vw, 23px);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 10px 0;
          line-height: 1.25;
        }
        .mu-res-hover-desc {
          font-family: var(--font-body);
          font-size: 13.5px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 16px 0;
        }
        .mu-res-hover-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 12px;
        }
        .mu-res-footer-label {
          display: block;
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 11px;
          font-weight: 700;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        .mu-res-footer-tags {
          font-family: var(--font-body);
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.4;
        }

        /* =========================================================================
           SECTION 10: Campus / Coastal Identity (Premium Framed Showcase)
           ========================================================================= */
        .mu-sanctuary-section {
          padding: 60px 0 80px 0;
          background: #FAF8F5;
        }
        .mu-sanctuary-frame {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 48px rgba(11, 42, 74, 0.12), 0 4px 12px rgba(11, 42, 74, 0.04);
          border: 1px solid rgba(11, 42, 74, 0.08);
          background: #0B2A4A;
        }
        .mu-sanctuary-backdrop {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .mu-sanctuary-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.92) contrast(1.05);
          transform: scale(1.02);
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mu-sanctuary-frame:hover .mu-sanctuary-img {
          transform: scale(1.05);
        }
        .mu-sanctuary-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(7, 26, 46, 0.88) 0%,
            rgba(7, 26, 46, 0.65) 45%,
            rgba(7, 26, 46, 0.95) 100%
          );
        }
        .mu-sanctuary-inner {
          position: relative;
          z-index: 2;
          padding: 64px 54px 54px 54px;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .mu-sanctuary-header {
          max-width: 820px;
        }
        .mu-sanctuary-title {
          font-family: var(--font-heading);
          font-size: clamp(28px, 3.8vw, 44px);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.15;
          margin: 12px 0 16px 0;
          letter-spacing: -0.02em;
        }
        .mu-sanctuary-lead {
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.86);
          margin: 0;
          max-width: 740px;
        }
        .mu-sanctuary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .mu-sanctuary-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 12px;
          padding: 22px 20px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }
        .mu-sanctuary-card:hover {
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(212, 160, 23, 0.6);
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
        }
        .mu-scard-num {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--gold);
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        .mu-scard-title {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }
        .mu-scard-desc {
          font-family: var(--font-body);
          font-size: 12.5px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.78);
          margin: 0;
        }

        @media (max-width: 1024px) {
          .mu-sanctuary-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mu-sanctuary-inner {
            padding: 44px 32px 36px 32px;
            gap: 36px;
          }
        }
        @media (max-width: 640px) {
          .mu-sanctuary-grid {
            grid-template-columns: 1fr;
          }
          .mu-sanctuary-inner {
            padding: 36px 20px 24px 20px;
            gap: 28px;
          }
        }

        /* =========================================================================
           SECTION 11: Placement & Career Ecosystem (Split Editorial Visual Layout)
           ========================================================================= */
        .mu-placement-editorial-section {
          padding: 84px 0;
          background-color: var(--paper);
        }
        .mu-placement-split-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 52px;
          align-items: stretch;
        }
        .mu-placement-content-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .mu-placement-p {
          font-family: var(--font-body);
          font-size: 15.5px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin-bottom: 24px;
          max-width: 580px;
        }

        /* Compact Career-Service Detail Cards Grid (4 Cards with Right Arrow) */
        .mu-placement-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .mu-placement-card {
          padding: 20px;
          background: #FFFFFF;
          border: 1px solid rgba(11, 42, 74, 0.08);
          border-radius: var(--radius-lg);
          box-shadow: 0 2px 8px rgba(11, 42, 74, 0.03);
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }
        .mu-placement-card:hover {
          transform: translateY(-3px);
          border-color: var(--blue);
          box-shadow: 0 8px 20px rgba(11, 42, 74, 0.1);
        }
        .mu-pcard-body {
          width: 100%;
        }
        .mu-pcard-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 6px;
        }
        .mu-pcard-title {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 700;
          color: var(--teal);
          margin: 0;
          line-height: 1.3;
          transition: color 0.2s ease;
        }
        .mu-placement-card:hover .mu-pcard-title {
          color: var(--blue);
        }
        .mu-pcard-arrow {
          color: var(--gold-deep);
          opacity: 0;
          transform: translateX(-6px);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease, color 0.25s ease;
          flex-shrink: 0;
        }
        .mu-placement-card:hover .mu-pcard-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .mu-pcard-desc {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--ink-soft);
          line-height: 1.55;
          margin: 0;
        }

        /* Right Visual: Perfectly Aligned Framed Container */
        .mu-placement-visual-right {
          position: relative;
          display: flex;
          width: 100%;
          height: 100%;
        }
        .mu-placement-visual-frame {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
        }
        .mu-placement-img-container {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          min-height: 380px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(11, 42, 74, 0.08);
          border: 1px solid rgba(11, 42, 74, 0.08);
        }
        .mu-placement-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .mu-placement-visual-frame:hover .mu-placement-main-img {
          transform: scale(1.04);
        }
        .mu-placement-img-overlay {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          background: linear-gradient(180deg, transparent 70%, rgba(7, 29, 51, 0.35) 100%);
          pointer-events: none;
        }

        @media (max-width: 991px) {
          .mu-placement-split-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .mu-placement-visual-frame {
            max-width: 480px;
          }
          .mu-placement-img-container {
            height: 340px;
          }
        }
        @media (max-width: 640px) {
          .mu-placement-cards-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .mu-placement-img-container {
            height: 280px;
          }
        }

        /* =========================================================================
           SECTION 12: News, Events & Official Circulars (Editorial 2-Column Split)
           ========================================================================= */
        .mu-news-editorial-section {
          padding: 88px 0;
        }
        .mu-news-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 36px;
        }
        .mu-news-view-all {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 14px;
          font-weight: 600;
          color: var(--blue);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
          padding: 6px 12px;
          border-radius: var(--radius-md);
          background: rgba(30, 78, 121, 0.06);
        }
        .mu-news-view-all:hover {
          color: var(--teal);
          background: rgba(30, 78, 121, 0.12);
          transform: translateX(3px);
        }

        /* 2-Column Grid: 58% Featured / 42% Scrollable List */
        .mu-news-editorial-grid {
          display: grid;
          grid-template-columns: 58% 42%;
          gap: 32px;
          align-items: stretch;
        }

        /* Left Column: Featured Card */
        .mu-news-featured-col {
          display: flex;
        }
        .mu-news-featured-card {
          position: relative;
          width: 100%;
          min-height: 520px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: var(--teal-deep);
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          box-shadow: 0 4px 20px rgba(11, 42, 74, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .mu-news-featured-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(11, 42, 74, 0.16);
        }
        .mu-featured-img-wrap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .mu-featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .mu-news-featured-card:hover .mu-featured-img {
          transform: scale(1.03);
        }
        .mu-featured-gradient-overlay {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          background: linear-gradient(
            180deg,
            rgba(7, 29, 51, 0.1) 0%,
            rgba(7, 29, 51, 0.45) 45%,
            rgba(7, 29, 51, 0.88) 75%,
            rgba(7, 29, 51, 0.98) 100%
          );
        }
        .mu-featured-content {
          position: relative;
          z-index: 2;
          padding: 32px 36px 36px 36px;
          color: #FFFFFF;
        }
        .mu-featured-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }
        .mu-featured-badge {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background-color: var(--gold);
          color: var(--teal-deep);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
        }
        .mu-featured-date {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 12.5px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .mu-featured-title {
          font-family: var(--font-quote, 'Fraunces', Georgia, serif);
          font-size: clamp(22px, 2.2vw, 29px);
          font-weight: 500;
          line-height: 1.3;
          color: #FFFFFF;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }
        .mu-featured-desc {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 14.5px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mu-featured-link-action {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 13.5px;
          font-weight: 600;
          color: var(--gold);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.02em;
          transition: gap 0.2s ease;
        }
        .mu-news-featured-card:hover .mu-featured-link-action {
          gap: 10px;
        }

        /* Right Column: Vertically Scrollable List */
        .mu-news-list-col {
          display: flex;
          flex-direction: column;
        }
        .mu-news-scroll-container {
          height: 520px;
          overflow-y: auto;
          padding-right: 10px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          scrollbar-width: thin;
          scrollbar-color: rgba(11, 42, 74, 0.25) transparent;
        }
        .mu-news-scroll-container::-webkit-scrollbar {
          width: 5px;
        }
        .mu-news-scroll-container::-webkit-scrollbar-track {
          background: rgba(11, 42, 74, 0.04);
          border-radius: var(--radius-sm);
        }
        .mu-news-scroll-container::-webkit-scrollbar-thumb {
          background-color: rgba(11, 42, 74, 0.25);
          border-radius: var(--radius-sm);
        }
        .mu-news-scroll-container::-webkit-scrollbar-thumb:hover {
          background-color: var(--blue);
        }

        /* Compact Item */
        .mu-news-compact-item {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 16px;
          background: #FFFFFF;
          border: 1px solid rgba(11, 42, 74, 0.08);
          border-radius: var(--radius-md);
          padding: 12px;
          text-decoration: none;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .mu-news-compact-item:hover {
          border-color: rgba(11, 42, 74, 0.22);
          box-shadow: 0 4px 14px rgba(11, 42, 74, 0.07);
          transform: translateX(4px);
        }
        .mu-item-thumb-wrap {
          width: 110px;
          height: 88px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background-color: var(--mist);
          flex-shrink: 0;
        }
        .mu-item-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .mu-news-compact-item:hover .mu-item-thumb {
          transform: scale(1.06);
        }
        .mu-item-details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-width: 0;
        }
        .mu-item-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 4px;
        }
        .mu-item-category {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--blue);
          letter-spacing: 0.04em;
        }
        .mu-item-date {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 11px;
          font-weight: 500;
          color: var(--ink-soft);
        }
        .mu-item-title {
          font-family: var(--font-quote, 'Fraunces', Georgia, serif);
          font-size: 15px;
          font-weight: 500;
          line-height: 1.35;
          color: var(--teal);
          margin: 0 0 4px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mu-news-compact-item:hover .mu-item-title {
          color: var(--blue);
        }
        .mu-item-desc {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 12.5px;
          line-height: 1.45;
          color: var(--ink-soft);
          margin: 0 0 6px 0;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mu-item-readmore {
          font-family: var(--font-author, 'Libre Franklin', sans-serif);
          font-size: 12px;
          font-weight: 600;
          color: var(--teal);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s ease;
        }
        .mu-news-compact-item:hover .mu-item-readmore {
          color: var(--gold-deep);
          gap: 6px;
        }
        .mu-item-arrow {
          transition: transform 0.2s ease;
        }
        .mu-news-compact-item:hover .mu-item-arrow {
          transform: translate(2px, -2px);
        }

        /* =========================================================================
           SECTION 13: Student & Alumni Testimonials (Clean Editorial Carousel)
           ========================================================================= */
        .mu-testimonial-section {
          padding: 88px 0;
          background-color: var(--mist);
          border-top: 1px solid var(--line-soft);
          border-bottom: 1px solid var(--line-soft);
          width: 100%;
        }
        .mu-t-header-nav {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .mu-t-carousel-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }
        .mu-t-cards-row {
          display: grid;
          grid-template-columns: 1fr 1.15fr 1fr;
          gap: 24px;
          align-items: stretch;
          width: 100%;
          margin-bottom: 28px;
        }

        /* Testimonial Card Base */
        .mu-t-card {
          border-radius: var(--radius-lg);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 220px;
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), background-color 0.35s ease;
          cursor: pointer;
        }

        /* Center Card: Deep Navy Highlight */
        .mu-t-card-center {
          background-color: #071D33;
          color: #FFFFFF;
          border: 1px solid rgba(232, 163, 23, 0.35);
          box-shadow: 0 12px 36px rgba(7, 29, 51, 0.22);
          transform: scale(1.03);
          z-index: 2;
        }
        .mu-t-card-center:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 16px 42px rgba(7, 29, 51, 0.28);
        }

        /* Side Cards: White / Soft Light-Blue */
        .mu-t-card-side {
          background-color: #FFFFFF;
          color: var(--ink);
          border: 1px solid rgba(11, 42, 74, 0.08);
          box-shadow: 0 4px 16px rgba(11, 42, 74, 0.06);
          opacity: 0.9;
        }
        .mu-t-card-side:hover {
          opacity: 1;
          transform: translateY(-2px);
          border-color: rgba(11, 42, 74, 0.18);
        }

        /* Quote Text */
        .mu-t-card-quote {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 20px 0;
          flex: 1;
        }
        .mu-t-card-center .mu-t-card-quote {
          color: rgba(255, 255, 255, 0.94);
        }
        .mu-t-card-side .mu-t-card-quote {
          color: var(--ink-soft);
        }

        /* Profile Block */
        .mu-t-card-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }
        .mu-t-card-side .mu-t-card-profile {
          border-top: 1px solid var(--line-soft);
        }
        .mu-t-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 12.5px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .mu-avatar-center {
          background-color: var(--gold);
          color: var(--teal-deep);
        }
        .mu-avatar-side {
          background-color: var(--mist);
          color: var(--teal);
          border: 1px solid rgba(11, 42, 74, 0.1);
        }
        .mu-t-meta {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .mu-t-name {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          margin: 0 0 2px 0;
          line-height: 1.25;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mu-t-card-center .mu-t-name {
          color: #FFFFFF;
        }
        .mu-t-card-side .mu-t-name {
          color: var(--teal);
        }
        .mu-t-role {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mu-t-card-center .mu-t-role {
          color: var(--gold);
        }
        .mu-t-card-side .mu-t-role {
          color: var(--blue);
        }
        .mu-t-batch {
          font-family: var(--font-body);
          font-size: 11px;
          color: rgba(255, 255, 255, 0.65);
        }
        .mu-t-card-side .mu-t-batch {
          color: var(--ink-soft);
        }

        /* Top-Right Arrow Buttons (Matching other section headers) */
        .mu-t-arrow-btn {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(11, 42, 74, 0.12);
          background: #FFFFFF;
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(11, 42, 74, 0.05);
          transition: all 0.2s ease;
        }
        .mu-t-arrow-btn:hover {
          border-color: var(--teal);
          background-color: var(--teal);
          color: #FFFFFF;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(11, 42, 74, 0.15);
        }
        .mu-t-arrow-btn:active {
          transform: translateY(0);
        }

        /* Clean Pagination Dots */
        .mu-t-dots-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-top: 8px;
        }
        .mu-t-dot-pill {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(11, 42, 74, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }
        .mu-t-dot-pill:hover {
          background-color: rgba(11, 42, 74, 0.4);
        }
        .mu-t-dot-pill-active {
          background-color: var(--gold);
          width: 24px;
          border-radius: var(--radius-md);
          box-shadow: 0 0 6px rgba(232, 163, 23, 0.5);
        }

        @media (max-width: 900px) {
          .mu-t-cards-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .mu-t-card-side {
            display: none;
          }
          .mu-t-card-center {
            transform: none;
          }
          .mu-t-card-center:hover {
            transform: none;
          }
        }
        @media (max-width: 640px) {
          .mu-testimonial-section .mu-section-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 28px;
          }
          .mu-testimonial-section .mu-section-header > div:first-child {
            flex: 1;
          }
          .mu-t-header-nav {
            margin-top: 4px;
            flex-shrink: 0;
          }
          .mu-t-arrow-btn {
            width: 36px;
            height: 36px;
          }
        }

        /* =========================================================================
           SECTION 14: Admissions CTA Strip (Compact Horizontal Promotional Banner)
           ========================================================================= */
        .mu-cta-banner-strip {
          padding: 36px 0;
          background-color: var(--paper);
          width: 100%;
        }
        .mu-cta-card-wrapper {
          position: relative;
          width: 100%;
          min-height: 128px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: #071D33;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 30px rgba(7, 29, 51, 0.16);
          display: flex;
          align-items: center;
        }
        .mu-cta-bg-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .mu-cta-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          opacity: 0.18;
          filter: grayscale(40%);
        }
        .mu-cta-bg-overlay {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          background: linear-gradient(
            90deg,
            rgba(7, 29, 51, 0.98) 0%,
            rgba(7, 29, 51, 0.94) 50%,
            rgba(7, 29, 51, 0.78) 100%
          );
        }
        .mu-cta-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 24px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }
        .mu-cta-left {
          display: flex;
          align-items: center;
          flex: 1;
        }
        .mu-cta-text-group {
          display: flex;
          flex-direction: column;
        }
        .mu-cta-eyebrow {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 3px;
        }
        .mu-cta-title {
          font-family: var(--font-heading);
          font-size: clamp(18px, 1.8vw, 22px);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 3px 0;
          line-height: 1.25;
        }
        .mu-cta-subtitle {
          font-family: var(--font-body);
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          line-height: 1.4;
        }
        .mu-cta-actions-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .mu-btn-cta-compact {
          padding: 9px 18px !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          border-radius: var(--radius-btn) !important;
        }

        @media (max-width: 900px) {
          .mu-cta-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            padding: 24px;
          }
          .mu-cta-actions-right {
            width: 100%;
            justify-content: flex-start;
          }
        }
        @media (max-width: 560px) {
          .mu-cta-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .mu-cta-actions-right {
            flex-direction: column;
            width: 100%;
          }
          .mu-cta-actions-right .mu-btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* Footer */
        .mu-footer {
          background-color: var(--teal-deep);
          color: rgba(255, 255, 255, 0.7);
          padding: 80px 0 36px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          width: 100%;
        }
        .mu-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 56px;
          margin-bottom: 60px;
        }
        .mu-footer-brand-wrapper {
          margin-bottom: 20px;
        }
        .mu-footer-address {
          font-size: 14.5px;
          line-height: 1.65;
          margin-bottom: 18px;
          max-width: 320px;
        }
        .mu-footer-contact p {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          margin-bottom: 8px;
        }
        .mu-footer-col-title {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          margin-bottom: 22px;
        }
        .mu-footer-links {
          list-style: none;
        }
        .mu-footer-links li {
          margin-bottom: 12px;
        }
        .mu-footer-links a {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          font-size: 14.5px;
          transition: color 0.2s;
        }
        .mu-footer-links a:hover {
          color: var(--gold);
        }
        .mu-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 13.5px;
        }
        .mu-footer-legal {
          display: flex;
          align-items: center;
          gap: 14px;
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
        @media (max-width: 1200px) {
          .mu-faculty-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .mu-infra-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 960px) {
          .mu-header {
            top: 36px;
          }
          .mu-nav-desktop {
            display: none;
          }
          .mu-mobile-toggle {
            display: block;
          }
          .mu-hero-fullscreen {
            min-height: 80vh;
            padding-top: 100px;
          }
          .mu-faculty-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .mu-about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .mu-about-milestone {
            right: 12px;
            bottom: -12px;
          }
          .mu-why-asym-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .mu-why-card-tall {
            height: auto;
          }
          .mu-why-card-tall .mu-why-image-wrapper {
            height: 280px;
          }
          .mu-why-right-stack {
            height: auto;
            gap: 24px;
          }
          .mu-why-card-wide {
            grid-template-columns: 1fr;
            height: auto;
          }
          .mu-why-card-wide .mu-why-image-wrapper {
            height: 220px;
          }
          .mu-why-card-wide .mu-why-content-panel {
            border-left: none;
            border-top: 2px solid rgba(11, 42, 74, 0.08);
          }
          .mu-careers-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .mu-infra-bento-grid {
            grid-template-columns: 1fr;
            height: auto;
            gap: 16px;
          }
          .mu-infra-bento-hero {
            height: 320px;
          }
          .mu-infra-bento-right {
            height: auto;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            gap: 16px;
          }
          .mu-infra-card-sports {
            grid-column: span 2;
            height: 220px;
          }
          .mu-infra-card-hostels,
          .mu-infra-card-ict,
          .mu-infra-card-health,
          .mu-infra-card-botanical {
            grid-column: span 1;
            height: 200px;
          }
          .mu-news-editorial-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .mu-news-featured-card {
            min-height: 440px;
          }
          .mu-news-scroll-container {
            height: auto;
            max-height: 520px;
          }
          .mu-research-scroll-wrapper {
            overflow-x: auto;
            padding-bottom: 16px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
            scrollbar-color: rgba(11, 42, 74, 0.25) transparent;
          }
          .mu-research-card-grid {
            grid-template-columns: repeat(3, 310px);
            gap: 18px;
            width: max-content;
          }
          .mu-research-image-card {
            height: 380px;
          }
          .mu-footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }

        @media (max-width: 860px) {
          .mu-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mu-stat-card {
            border-right: none;
            border-bottom: 1px solid var(--line);
            padding: 20px 12px;
          }
        }

        @media (max-width: 720px) {
          .mu-utility-bar {
            display: none;
          }
          .mu-header {
            top: 0;
            padding: 10px 0;
          }
          .mu-brand-logo-img {
            height: 48px;
          }
          .mu-hero-fullscreen {
            min-height: 75vh;
            padding-top: 80px;
            padding-bottom: 40px;
          }
          .mu-ticker-band {
            height: 48px;
          }
          .mu-ticker-badge {
            padding: 4px 10px;
            font-size: 11px;
          }
          .mu-ticker-item {
            font-size: 13px;
          }
          .mu-section-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .mu-infra-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .mu-infra-tagline {
            text-align: left;
            font-size: 13px;
          }
          .mu-infra-bento-hero {
            height: 260px;
          }
          .mu-infra-bento-right {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .mu-infra-card-sports,
          .mu-infra-card-hostels,
          .mu-infra-card-ict,
          .mu-infra-card-health,
          .mu-infra-card-botanical {
            grid-column: span 1;
            height: 180px;
          }
          .mu-research-scroll-wrapper {
            overflow-x: auto;
            padding-bottom: 12px;
            margin: 0 -20px;
            padding-left: 20px;
            padding-right: 20px;
          }
          .mu-research-card-grid {
            grid-template-columns: repeat(3, 275px);
            gap: 14px;
          }
          .mu-research-image-card {
            height: 350px;
          }
          .mu-news-top-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .mu-news-featured-card {
            min-height: 380px;
          }
          .mu-featured-content {
            padding: 24px 20px 24px 20px;
          }
          .mu-news-compact-item {
            grid-template-columns: 90px 1fr;
            gap: 12px;
            padding: 10px;
          }
          .mu-item-thumb-wrap {
            width: 90px;
            height: 80px;
          }
          .mu-footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }

        @media (max-width: 560px) {
          .mu-faculty-grid {
            grid-template-columns: 1fr;
          }
          .mu-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}Wd.createRoot(document.getElementById("root")).render(l.jsx(Id.StrictMode,{children:l.jsx(km,{})}));
