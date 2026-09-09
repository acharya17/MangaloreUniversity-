(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const I of document.querySelectorAll('link[rel="modulepreload"]'))Q(I);new MutationObserver(I=>{for(const U of I)if(U.type==="childList")for(const ie of U.addedNodes)ie.tagName==="LINK"&&ie.rel==="modulepreload"&&Q(ie)}).observe(document,{childList:!0,subtree:!0});function h(I){const U={};return I.integrity&&(U.integrity=I.integrity),I.referrerPolicy&&(U.referrerPolicy=I.referrerPolicy),I.crossOrigin==="use-credentials"?U.credentials="include":I.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function Q(I){if(I.ep)return;I.ep=!0;const U=h(I);fetch(I.href,U)}})();function Au(F){return F&&F.__esModule&&Object.prototype.hasOwnProperty.call(F,"default")?F.default:F}var Cl={exports:{}},wr={},El={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu;function Md(){if(bu)return A;bu=1;var F=Symbol.for("react.element"),M=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),ie=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),ke=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),K=Symbol.iterator;function Z(d){return d===null||typeof d!="object"?null:(d=K&&d[K]||d["@@iterator"],typeof d=="function"?d:null)}var _e={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ie=Object.assign,H={};function Y(d,v,L){this.props=d,this.context=v,this.refs=H,this.updater=L||_e}Y.prototype.isReactComponent={},Y.prototype.setState=function(d,v){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,v,"setState")},Y.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Ce(){}Ce.prototype=Y.prototype;function Je(d,v,L){this.props=d,this.context=v,this.refs=H,this.updater=L||_e}var z=Je.prototype=new Ce;z.constructor=Je,Ie(z,Y.prototype),z.isPureReactComponent=!0;var B=Array.isArray,ae=Object.prototype.hasOwnProperty,me={current:null},ue={key:!0,ref:!0,__self:!0,__source:!0};function Re(d,v,L){var D,$={},W=null,J=null;if(v!=null)for(D in v.ref!==void 0&&(J=v.ref),v.key!==void 0&&(W=""+v.key),v)ae.call(v,D)&&!ue.hasOwnProperty(D)&&($[D]=v[D]);var X=arguments.length-2;if(X===1)$.children=L;else if(1<X){for(var le=Array(X),Ke=0;Ke<X;Ke++)le[Ke]=arguments[Ke+2];$.children=le}if(d&&d.defaultProps)for(D in X=d.defaultProps,X)$[D]===void 0&&($[D]=X[D]);return{$$typeof:F,type:d,key:W,ref:J,props:$,_owner:me.current}}function De(d,v){return{$$typeof:F,type:d.type,key:v,ref:d.ref,props:d.props,_owner:d._owner}}function et(d){return typeof d=="object"&&d!==null&&d.$$typeof===F}function tt(d){var v={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(L){return v[L]})}var nt=/\/+/g;function Pe(d,v){return typeof d=="object"&&d!==null&&d.key!=null?tt(""+d.key):v.toString(36)}function Ee(d,v,L,D,$){var W=typeof d;(W==="undefined"||W==="boolean")&&(d=null);var J=!1;if(d===null)J=!0;else switch(W){case"string":case"number":J=!0;break;case"object":switch(d.$$typeof){case F:case M:J=!0}}if(J)return J=d,$=$(J),d=D===""?"."+Pe(J,0):D,B($)?(L="",d!=null&&(L=d.replace(nt,"$&/")+"/"),Ee($,v,L,"",function(Ke){return Ke})):$!=null&&(et($)&&($=De($,L+(!$.key||J&&J.key===$.key?"":(""+$.key).replace(nt,"$&/")+"/")+d)),v.push($)),1;if(J=0,D=D===""?".":D+":",B(d))for(var X=0;X<d.length;X++){W=d[X];var le=D+Pe(W,X);J+=Ee(W,v,L,le,$)}else if(le=Z(d),typeof le=="function")for(d=le.call(d),X=0;!(W=d.next()).done;)W=W.value,le=D+Pe(W,X++),J+=Ee(W,v,L,le,$);else if(W==="object")throw v=String(d),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return J}function gt(d,v,L){if(d==null)return d;var D=[],$=0;return Ee(d,D,"","",function(W){return v.call(L,W,$++)}),D}function He(d){if(d._status===-1){var v=d._result;v=v(),v.then(function(L){(d._status===0||d._status===-1)&&(d._status=1,d._result=L)},function(L){(d._status===0||d._status===-1)&&(d._status=2,d._result=L)}),d._status===-1&&(d._status=0,d._result=v)}if(d._status===1)return d._result.default;throw d._result}var fe={current:null},k={transition:null},P={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:k,ReactCurrentOwner:me};function S(){throw Error("act(...) is not supported in production builds of React.")}return A.Children={map:gt,forEach:function(d,v,L){gt(d,function(){v.apply(this,arguments)},L)},count:function(d){var v=0;return gt(d,function(){v++}),v},toArray:function(d){return gt(d,function(v){return v})||[]},only:function(d){if(!et(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},A.Component=Y,A.Fragment=h,A.Profiler=I,A.PureComponent=Je,A.StrictMode=Q,A.Suspense=O,A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,A.act=S,A.cloneElement=function(d,v,L){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var D=Ie({},d.props),$=d.key,W=d.ref,J=d._owner;if(v!=null){if(v.ref!==void 0&&(W=v.ref,J=me.current),v.key!==void 0&&($=""+v.key),d.type&&d.type.defaultProps)var X=d.type.defaultProps;for(le in v)ae.call(v,le)&&!ue.hasOwnProperty(le)&&(D[le]=v[le]===void 0&&X!==void 0?X[le]:v[le])}var le=arguments.length-2;if(le===1)D.children=L;else if(1<le){X=Array(le);for(var Ke=0;Ke<le;Ke++)X[Ke]=arguments[Ke+2];D.children=X}return{$$typeof:F,type:d.type,key:$,ref:W,props:D,_owner:J}},A.createContext=function(d){return d={$$typeof:ie,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:U,_context:d},d.Consumer=d},A.createElement=Re,A.createFactory=function(d){var v=Re.bind(null,d);return v.type=d,v},A.createRef=function(){return{current:null}},A.forwardRef=function(d){return{$$typeof:se,render:d}},A.isValidElement=et,A.lazy=function(d){return{$$typeof:he,_payload:{_status:-1,_result:d},_init:He}},A.memo=function(d,v){return{$$typeof:ke,type:d,compare:v===void 0?null:v}},A.startTransition=function(d){var v=k.transition;k.transition={};try{d()}finally{k.transition=v}},A.unstable_act=S,A.useCallback=function(d,v){return fe.current.useCallback(d,v)},A.useContext=function(d){return fe.current.useContext(d)},A.useDebugValue=function(){},A.useDeferredValue=function(d){return fe.current.useDeferredValue(d)},A.useEffect=function(d,v){return fe.current.useEffect(d,v)},A.useId=function(){return fe.current.useId()},A.useImperativeHandle=function(d,v,L){return fe.current.useImperativeHandle(d,v,L)},A.useInsertionEffect=function(d,v){return fe.current.useInsertionEffect(d,v)},A.useLayoutEffect=function(d,v){return fe.current.useLayoutEffect(d,v)},A.useMemo=function(d,v){return fe.current.useMemo(d,v)},A.useReducer=function(d,v,L){return fe.current.useReducer(d,v,L)},A.useRef=function(d){return fe.current.useRef(d)},A.useState=function(d){return fe.current.useState(d)},A.useSyncExternalStore=function(d,v,L){return fe.current.useSyncExternalStore(d,v,L)},A.useTransition=function(){return fe.current.useTransition()},A.version="18.3.1",A}var Fu;function Rl(){return Fu||(Fu=1,El.exports=Md()),El.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function Ld(){if(zu)return wr;zu=1;var F=Rl(),M=Symbol.for("react.element"),h=Symbol.for("react.fragment"),Q=Object.prototype.hasOwnProperty,I=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function ie(se,O,ke){var he,K={},Z=null,_e=null;ke!==void 0&&(Z=""+ke),O.key!==void 0&&(Z=""+O.key),O.ref!==void 0&&(_e=O.ref);for(he in O)Q.call(O,he)&&!U.hasOwnProperty(he)&&(K[he]=O[he]);if(se&&se.defaultProps)for(he in O=se.defaultProps,O)K[he]===void 0&&(K[he]=O[he]);return{$$typeof:M,type:se,key:Z,ref:_e,props:K,_owner:I.current}}return wr.Fragment=h,wr.jsx=ie,wr.jsxs=ie,wr}var _u;function Ad(){return _u||(_u=1,Cl.exports=Ld()),Cl.exports}var l=Ad(),ze=Rl();const Id=Au(ze);var Ri={},bl={exports:{}},Qe={},Fl={exports:{}},zl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function Dd(){return Ru||(Ru=1,(function(F){function M(k,P){var S=k.length;k.push(P);e:for(;0<S;){var d=S-1>>>1,v=k[d];if(0<I(v,P))k[d]=P,k[S]=v,S=d;else break e}}function h(k){return k.length===0?null:k[0]}function Q(k){if(k.length===0)return null;var P=k[0],S=k.pop();if(S!==P){k[0]=S;e:for(var d=0,v=k.length,L=v>>>1;d<L;){var D=2*(d+1)-1,$=k[D],W=D+1,J=k[W];if(0>I($,S))W<v&&0>I(J,$)?(k[d]=J,k[W]=S,d=W):(k[d]=$,k[D]=S,d=D);else if(W<v&&0>I(J,S))k[d]=J,k[W]=S,d=W;else break e}}return P}function I(k,P){var S=k.sortIndex-P.sortIndex;return S!==0?S:k.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var U=performance;F.unstable_now=function(){return U.now()}}else{var ie=Date,se=ie.now();F.unstable_now=function(){return ie.now()-se}}var O=[],ke=[],he=1,K=null,Z=3,_e=!1,Ie=!1,H=!1,Y=typeof setTimeout=="function"?setTimeout:null,Ce=typeof clearTimeout=="function"?clearTimeout:null,Je=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(k){for(var P=h(ke);P!==null;){if(P.callback===null)Q(ke);else if(P.startTime<=k)Q(ke),P.sortIndex=P.expirationTime,M(O,P);else break;P=h(ke)}}function B(k){if(H=!1,z(k),!Ie)if(h(O)!==null)Ie=!0,He(ae);else{var P=h(ke);P!==null&&fe(B,P.startTime-k)}}function ae(k,P){Ie=!1,H&&(H=!1,Ce(Re),Re=-1),_e=!0;var S=Z;try{for(z(P),K=h(O);K!==null&&(!(K.expirationTime>P)||k&&!tt());){var d=K.callback;if(typeof d=="function"){K.callback=null,Z=K.priorityLevel;var v=d(K.expirationTime<=P);P=F.unstable_now(),typeof v=="function"?K.callback=v:K===h(O)&&Q(O),z(P)}else Q(O);K=h(O)}if(K!==null)var L=!0;else{var D=h(ke);D!==null&&fe(B,D.startTime-P),L=!1}return L}finally{K=null,Z=S,_e=!1}}var me=!1,ue=null,Re=-1,De=5,et=-1;function tt(){return!(F.unstable_now()-et<De)}function nt(){if(ue!==null){var k=F.unstable_now();et=k;var P=!0;try{P=ue(!0,k)}finally{P?Pe():(me=!1,ue=null)}}else me=!1}var Pe;if(typeof Je=="function")Pe=function(){Je(nt)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,gt=Ee.port2;Ee.port1.onmessage=nt,Pe=function(){gt.postMessage(null)}}else Pe=function(){Y(nt,0)};function He(k){ue=k,me||(me=!0,Pe())}function fe(k,P){Re=Y(function(){k(F.unstable_now())},P)}F.unstable_IdlePriority=5,F.unstable_ImmediatePriority=1,F.unstable_LowPriority=4,F.unstable_NormalPriority=3,F.unstable_Profiling=null,F.unstable_UserBlockingPriority=2,F.unstable_cancelCallback=function(k){k.callback=null},F.unstable_continueExecution=function(){Ie||_e||(Ie=!0,He(ae))},F.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):De=0<k?Math.floor(1e3/k):5},F.unstable_getCurrentPriorityLevel=function(){return Z},F.unstable_getFirstCallbackNode=function(){return h(O)},F.unstable_next=function(k){switch(Z){case 1:case 2:case 3:var P=3;break;default:P=Z}var S=Z;Z=P;try{return k()}finally{Z=S}},F.unstable_pauseExecution=function(){},F.unstable_requestPaint=function(){},F.unstable_runWithPriority=function(k,P){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var S=Z;Z=k;try{return P()}finally{Z=S}},F.unstable_scheduleCallback=function(k,P,S){var d=F.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?d+S:d):S=d,k){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=S+v,k={id:he++,callback:P,priorityLevel:k,startTime:S,expirationTime:v,sortIndex:-1},S>d?(k.sortIndex=S,M(ke,k),h(O)===null&&k===h(ke)&&(H?(Ce(Re),Re=-1):H=!0,fe(B,S-d))):(k.sortIndex=v,M(O,k),Ie||_e||(Ie=!0,He(ae))),k},F.unstable_shouldYield=tt,F.unstable_wrapCallback=function(k){var P=Z;return function(){var S=Z;Z=P;try{return k.apply(this,arguments)}finally{Z=S}}}})(zl)),zl}var Pu;function Od(){return Pu||(Pu=1,Fl.exports=Dd()),Fl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Ud(){if(Tu)return Qe;Tu=1;var F=Rl(),M=Od();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q=new Set,I={};function U(e,t){ie(e,t),ie(e+"Capture",t)}function ie(e,t){for(I[e]=t,e=0;e<t.length;e++)Q.add(t[e])}var se=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),O=Object.prototype.hasOwnProperty,ke=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,he={},K={};function Z(e){return O.call(K,e)?!0:O.call(he,e)?!1:ke.test(e)?K[e]=!0:(he[e]=!0,!1)}function _e(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ie(e,t,n,r){if(t===null||typeof t>"u"||_e(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function H(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Y[t]=new H(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ce=/[\-:]([a-z])/g;function Je(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ce,Je);Y[t]=new H(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ce,Je);Y[t]=new H(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ce,Je);Y[t]=new H(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function z(e,t,n,r){var i=Y.hasOwnProperty(t)?Y[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ie(t,n,i,r)&&(n=null),r||i===null?Z(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var B=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ae=Symbol.for("react.element"),me=Symbol.for("react.portal"),ue=Symbol.for("react.fragment"),Re=Symbol.for("react.strict_mode"),De=Symbol.for("react.profiler"),et=Symbol.for("react.provider"),tt=Symbol.for("react.context"),nt=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),k=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var S=Object.assign,d;function v(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var L=!1;function D(e,t){if(!e||L)return"";L=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{L=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?v(e):""}function $(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=D(e.type,!1),e;case 11:return e=D(e.type.render,!1),e;case 1:return e=D(e.type,!0),e;default:return""}}function W(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ue:return"Fragment";case me:return"Portal";case De:return"Profiler";case Re:return"StrictMode";case Pe:return"Suspense";case Ee:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tt:return(e.displayName||"Context")+".Consumer";case et:return(e._context.displayName||"Context")+".Provider";case nt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gt:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case He:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}function J(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===Re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function X(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ke(e){var t=le(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Ke(e))}function Pl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=le(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pi(e,t){var n=t.checked;return S({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=X(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ml(e,t){t=t.checked,t!=null&&z(e,"checked",t,!1)}function Ti(e,t){Ml(e,t);var n=X(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mi(e,t.type,X(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ll(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mi(e,t,n){(t!=="number"||Nr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+X(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return S({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Al(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Ln(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:X(n)}}function Il(e,t){var n=X(t.value),r=X(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Dl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ol(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ai(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ol(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,Ul=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function An(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Du=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Du.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function Hl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function Bl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ou=S({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ii(e,t){if(t){if(Ou[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Di(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Ui(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,cn=null,dn=null;function Vl(e){if(e=ar(e)){if(typeof Hi!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Gr(t),Hi(e.stateNode,e.type,t))}}function $l(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Wl(){if(cn){var e=cn,t=dn;if(dn=cn=null,Vl(e),t)for(e=0;e<t.length;e++)Vl(t[e])}}function Gl(e,t){return e(t)}function Ql(){}var Bi=!1;function Kl(e,t,n){if(Bi)return e(t,n);Bi=!0;try{return Gl(e,t,n)}finally{Bi=!1,(cn!==null||dn!==null)&&(Ql(),Wl())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=Gr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Vi=!1;if(se)try{var On={};Object.defineProperty(On,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{Vi=!1}function Uu(e,t,n,r,i,a,o,s,u){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(x){this.onError(x)}}var Un=!1,Sr=null,Cr=!1,$i=null,Hu={onError:function(e){Un=!0,Sr=e}};function Bu(e,t,n,r,i,a,o,s,u){Un=!1,Sr=null,Uu.apply(Hu,arguments)}function Vu(e,t,n,r,i,a,o,s,u){if(Bu.apply(this,arguments),Un){if(Un){var p=Sr;Un=!1,Sr=null}else throw Error(h(198));Cr||(Cr=!0,$i=p)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xl(e){if(Yt(e)!==e)throw Error(h(188))}function $u(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Xl(i),e;if(a===r)return Xl(i),t;a=a.sibling}throw Error(h(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function ql(e){return e=$u(e),e!==null?Zl(e):null}function Zl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zl(e);if(t!==null)return t;e=e.sibling}return null}var Jl=M.unstable_scheduleCallback,eo=M.unstable_cancelCallback,Wu=M.unstable_shouldYield,Gu=M.unstable_requestPaint,ge=M.unstable_now,Qu=M.unstable_getCurrentPriorityLevel,Wi=M.unstable_ImmediatePriority,to=M.unstable_UserBlockingPriority,Er=M.unstable_NormalPriority,Ku=M.unstable_LowPriority,no=M.unstable_IdlePriority,br=null,vt=null;function Yu(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(br,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Zu,Xu=Math.log,qu=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(Xu(e)/qu|0)|0}var Fr=64,zr=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Hn(s):(a&=o,a!==0&&(r=Hn(a)))}else o=n&~i,o!==0?r=Hn(o):a!==0&&(r=Hn(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),i=1<<n,r|=e[n],t&=~i;return r}function Ju(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ec(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ut(a),s=1<<o,u=i[o];u===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ju(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function Gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ro(){var e=Fr;return Fr<<=1,(Fr&4194240)===0&&(Fr=64),e}function Qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function tc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ut(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ki(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function io(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ao,Yi,lo,oo,so,Xi=!1,Rr=[],_t=null,Rt=null,Pt=null,Vn=new Map,$n=new Map,Tt=[],nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uo(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function Wn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ar(t),t!==null&&Yi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rc(e,t,n,r,i){switch(t){case"focusin":return _t=Wn(_t,e,t,n,r,i),!0;case"dragenter":return Rt=Wn(Rt,e,t,n,r,i),!0;case"mouseover":return Pt=Wn(Pt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Vn.set(a,Wn(Vn.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,$n.set(a,Wn($n.get(a)||null,e,t,n,r,i)),!0}return!1}function co(e){var t=Xt(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=Yl(n),t!==null){e.blockedOn=t,so(e.priority,function(){lo(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oi=r,n.target.dispatchEvent(r),Oi=null}else return t=ar(n),t!==null&&Yi(t),e.blockedOn=n,!1;t.shift()}return!0}function mo(e,t,n){Pr(e)&&n.delete(t)}function ic(){Xi=!1,_t!==null&&Pr(_t)&&(_t=null),Rt!==null&&Pr(Rt)&&(Rt=null),Pt!==null&&Pr(Pt)&&(Pt=null),Vn.forEach(mo),$n.forEach(mo)}function Gn(e,t){e.blockedOn===t&&(e.blockedOn=null,Xi||(Xi=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,ic)))}function Qn(e){function t(i){return Gn(i,e)}if(0<Rr.length){Gn(Rr[0],e);for(var n=1;n<Rr.length;n++){var r=Rr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Gn(_t,e),Rt!==null&&Gn(Rt,e),Pt!==null&&Gn(Pt,e),Vn.forEach(t),$n.forEach(t),n=0;n<Tt.length;n++)r=Tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)co(n),n.blockedOn===null&&Tt.shift()}var mn=B.ReactCurrentBatchConfig,Tr=!0;function ac(e,t,n,r){var i=q,a=mn.transition;mn.transition=null;try{q=1,qi(e,t,n,r)}finally{q=i,mn.transition=a}}function lc(e,t,n,r){var i=q,a=mn.transition;mn.transition=null;try{q=4,qi(e,t,n,r)}finally{q=i,mn.transition=a}}function qi(e,t,n,r){if(Tr){var i=Zi(e,t,n,r);if(i===null)ha(e,t,r,Mr,n),uo(e,r);else if(rc(i,e,t,n,r))r.stopPropagation();else if(uo(e,r),t&4&&-1<nc.indexOf(e)){for(;i!==null;){var a=ar(i);if(a!==null&&ao(a),a=Zi(e,t,n,r),a===null&&ha(e,t,r,Mr,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ha(e,t,r,null,n)}}var Mr=null;function Zi(e,t,n,r){if(Mr=null,e=Ui(r),e=Xt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mr=e,null}function fo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qu()){case Wi:return 1;case to:return 4;case Er:case Ku:return 16;case no:return 536870912;default:return 16}default:return 16}}var Mt=null,Ji=null,Lr=null;function po(){if(Lr)return Lr;var e,t=Ji,n=t.length,r,i="value"in Mt?Mt.value:Mt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Lr=i.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function ho(){return!1}function Ye(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ir:ho,this.isPropagationStopped=ho,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=Ye(fn),Kn=S({},fn,{view:0,detail:0}),oc=Ye(Kn),ta,na,Yn,Dr=S({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(ta=e.screenX-Yn.screenX,na=e.screenY-Yn.screenY):na=ta=0,Yn=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:na}}),go=Ye(Dr),sc=S({},Dr,{dataTransfer:0}),uc=Ye(sc),cc=S({},Kn,{relatedTarget:0}),ra=Ye(cc),dc=S({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),mc=Ye(dc),fc=S({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pc=Ye(fc),hc=S({},fn,{data:0}),vo=Ye(hc),gc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xc[e])?!!t[e]:!1}function ia(){return yc}var wc=S({},Kn,{key:function(e){if(e.key){var t=gc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ia,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kc=Ye(wc),Nc=S({},Dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xo=Ye(Nc),jc=S({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ia}),Sc=Ye(jc),Cc=S({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ec=Ye(Cc),bc=S({},Dr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fc=Ye(bc),zc=[9,13,27,32],aa=se&&"CompositionEvent"in window,Xn=null;se&&"documentMode"in document&&(Xn=document.documentMode);var _c=se&&"TextEvent"in window&&!Xn,yo=se&&(!aa||Xn&&8<Xn&&11>=Xn),wo=" ",ko=!1;function No(e,t){switch(e){case"keyup":return zc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Rc(e,t){switch(e){case"compositionend":return jo(t);case"keypress":return t.which!==32?null:(ko=!0,wo);case"textInput":return e=t.data,e===wo&&ko?null:e;default:return null}}function Pc(e,t){if(pn)return e==="compositionend"||!aa&&No(e,t)?(e=po(),Lr=Ji=Mt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yo&&t.locale!=="ko"?null:t.data;default:return null}}var Tc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function So(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tc[e.type]:t==="textarea"}function Co(e,t,n,r){$l(r),t=Vr(t,"onChange"),0<t.length&&(n=new ea("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Zn=null;function Mc(e){Vo(e,0)}function Or(e){var t=yn(e);if(Pl(t))return e}function Lc(e,t){if(e==="change")return t}var Eo=!1;if(se){var la;if(se){var oa="oninput"in document;if(!oa){var bo=document.createElement("div");bo.setAttribute("oninput","return;"),oa=typeof bo.oninput=="function"}la=oa}else la=!1;Eo=la&&(!document.documentMode||9<document.documentMode)}function Fo(){qn&&(qn.detachEvent("onpropertychange",zo),Zn=qn=null)}function zo(e){if(e.propertyName==="value"&&Or(Zn)){var t=[];Co(t,Zn,e,Ui(e)),Kl(Mc,t)}}function Ac(e,t,n){e==="focusin"?(Fo(),qn=t,Zn=n,qn.attachEvent("onpropertychange",zo)):e==="focusout"&&Fo()}function Ic(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Or(Zn)}function Dc(e,t){if(e==="click")return Or(t)}function Oc(e,t){if(e==="input"||e==="change")return Or(t)}function Uc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Uc;function Jn(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!O.call(t,i)||!ct(e[i],t[i]))return!1}return!0}function _o(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ro(e,t){var n=_o(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_o(n)}}function Po(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Po(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function To(){for(var e=window,t=Nr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nr(e.document)}return t}function sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hc(e){var t=To(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Po(n.ownerDocument.documentElement,n)){if(r!==null&&sa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Ro(n,a);var o=Ro(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bc=se&&"documentMode"in document&&11>=document.documentMode,hn=null,ua=null,er=null,ca=!1;function Mo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ca||hn==null||hn!==Nr(r)||(r=hn,"selectionStart"in r&&sa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&Jn(er,r)||(er=r,r=Vr(ua,"onSelect"),0<r.length&&(t=new ea("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},da={},Lo={};se&&(Lo=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Hr(e){if(da[e])return da[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lo)return da[e]=t[n];return e}var Ao=Hr("animationend"),Io=Hr("animationiteration"),Do=Hr("animationstart"),Oo=Hr("transitionend"),Uo=new Map,Ho="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){Uo.set(e,t),U(t,[e])}for(var ma=0;ma<Ho.length;ma++){var fa=Ho[ma],Vc=fa.toLowerCase(),$c=fa[0].toUpperCase()+fa.slice(1);Lt(Vc,"on"+$c)}Lt(Ao,"onAnimationEnd"),Lt(Io,"onAnimationIteration"),Lt(Do,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(Oo,"onTransitionEnd"),ie("onMouseEnter",["mouseout","mouseover"]),ie("onMouseLeave",["mouseout","mouseover"]),ie("onPointerEnter",["pointerout","pointerover"]),ie("onPointerLeave",["pointerout","pointerover"]),U("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),U("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),U("onBeforeInput",["compositionend","keypress","textInput","paste"]),U("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wc=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Bo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vu(r,t,void 0,e),e.currentTarget=null}function Vo(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,p=s.currentTarget;if(s=s.listener,u!==a&&i.isPropagationStopped())break e;Bo(i,s,p),a=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,p=s.currentTarget,s=s.listener,u!==a&&i.isPropagationStopped())break e;Bo(i,s,p),a=u}}}if(Cr)throw e=$i,Cr=!1,$i=null,e}function ne(e,t){var n=t[ka];n===void 0&&(n=t[ka]=new Set);var r=e+"__bubble";n.has(r)||($o(t,e,2,!1),n.add(r))}function pa(e,t,n){var r=0;t&&(r|=4),$o(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Br]){e[Br]=!0,Q.forEach(function(n){n!=="selectionchange"&&(Wc.has(n)||pa(n,!1,e),pa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Br]||(t[Br]=!0,pa("selectionchange",!1,t))}}function $o(e,t,n,r){switch(fo(t)){case 1:var i=ac;break;case 4:i=lc;break;default:i=qi}n=i.bind(null,t,n,e),i=void 0,!Vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ha(e,t,n,r,i){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Xt(s),o===null)return;if(u=o.tag,u===5||u===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Kl(function(){var p=a,x=Ui(n),y=[];e:{var g=Uo.get(e);if(g!==void 0){var N=ea,C=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":N=kc;break;case"focusin":C="focus",N=ra;break;case"focusout":C="blur",N=ra;break;case"beforeblur":case"afterblur":N=ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Sc;break;case Ao:case Io:case Do:N=mc;break;case Oo:N=Ec;break;case"scroll":N=oc;break;case"wheel":N=Fc;break;case"copy":case"cut":case"paste":N=pc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=xo}var E=(t&4)!==0,ve=!E&&e==="scroll",m=E?g!==null?g+"Capture":null:g;E=[];for(var c=p,f;c!==null;){f=c;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,m!==null&&(w=Dn(c,m),w!=null&&E.push(rr(c,w,f)))),ve)break;c=c.return}0<E.length&&(g=new N(g,C,null,n,x),y.push({event:g,listeners:E}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",g&&n!==Oi&&(C=n.relatedTarget||n.fromElement)&&(Xt(C)||C[Nt]))break e;if((N||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,N?(C=n.relatedTarget||n.toElement,N=p,C=C?Xt(C):null,C!==null&&(ve=Yt(C),C!==ve||C.tag!==5&&C.tag!==6)&&(C=null)):(N=null,C=p),N!==C)){if(E=go,w="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=xo,w="onPointerLeave",m="onPointerEnter",c="pointer"),ve=N==null?g:yn(N),f=C==null?g:yn(C),g=new E(w,c+"leave",N,n,x),g.target=ve,g.relatedTarget=f,w=null,Xt(x)===p&&(E=new E(m,c+"enter",C,n,x),E.target=f,E.relatedTarget=ve,w=E),ve=w,N&&C)t:{for(E=N,m=C,c=0,f=E;f;f=vn(f))c++;for(f=0,w=m;w;w=vn(w))f++;for(;0<c-f;)E=vn(E),c--;for(;0<f-c;)m=vn(m),f--;for(;c--;){if(E===m||m!==null&&E===m.alternate)break t;E=vn(E),m=vn(m)}E=null}else E=null;N!==null&&Wo(y,g,N,E,!1),C!==null&&ve!==null&&Wo(y,ve,C,E,!0)}}e:{if(g=p?yn(p):window,N=g.nodeName&&g.nodeName.toLowerCase(),N==="select"||N==="input"&&g.type==="file")var b=Lc;else if(So(g))if(Eo)b=Oc;else{b=Ic;var _=Ac}else(N=g.nodeName)&&N.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=Dc);if(b&&(b=b(e,p))){Co(y,b,n,x);break e}_&&_(e,g,p),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Mi(g,"number",g.value)}switch(_=p?yn(p):window,e){case"focusin":(So(_)||_.contentEditable==="true")&&(hn=_,ua=p,er=null);break;case"focusout":er=ua=hn=null;break;case"mousedown":ca=!0;break;case"contextmenu":case"mouseup":case"dragend":ca=!1,Mo(y,n,x);break;case"selectionchange":if(Bc)break;case"keydown":case"keyup":Mo(y,n,x)}var R;if(aa)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else pn?No(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(yo&&n.locale!=="ko"&&(pn||T!=="onCompositionStart"?T==="onCompositionEnd"&&pn&&(R=po()):(Mt=x,Ji="value"in Mt?Mt.value:Mt.textContent,pn=!0)),_=Vr(p,T),0<_.length&&(T=new vo(T,e,null,n,x),y.push({event:T,listeners:_}),R?T.data=R:(R=jo(n),R!==null&&(T.data=R)))),(R=_c?Rc(e,n):Pc(e,n))&&(p=Vr(p,"onBeforeInput"),0<p.length&&(x=new vo("onBeforeInput","beforeinput",null,n,x),y.push({event:x,listeners:p}),x.data=R))}Vo(y,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Dn(e,n),a!=null&&r.unshift(rr(e,a,i)),a=Dn(e,t),a!=null&&r.push(rr(e,a,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wo(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,p=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&p!==null&&(s=p,i?(u=Dn(n,a),u!=null&&o.unshift(rr(n,u,s))):i||(u=Dn(n,a),u!=null&&o.push(rr(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Gc=/\r\n?/g,Qc=/\u0000|\uFFFD/g;function Go(e){return(typeof e=="string"?e:""+e).replace(Gc,`
`).replace(Qc,"")}function $r(e,t,n){if(t=Go(t),Go(e)!==t&&n)throw Error(h(425))}function Wr(){}var ga=null,va=null;function xa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ya=typeof setTimeout=="function"?setTimeout:void 0,Kc=typeof clearTimeout=="function"?clearTimeout:void 0,Qo=typeof Promise=="function"?Promise:void 0,Yc=typeof queueMicrotask=="function"?queueMicrotask:typeof Qo<"u"?function(e){return Qo.resolve(null).then(e).catch(Xc)}:ya;function Xc(e){setTimeout(function(){throw e})}function wa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qn(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ko(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),xt="__reactFiber$"+xn,ir="__reactProps$"+xn,Nt="__reactContainer$"+xn,ka="__reactEvents$"+xn,qc="__reactListeners$"+xn,Zc="__reactHandles$"+xn;function Xt(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ko(e);e!==null;){if(n=e[xt])return n;e=Ko(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[xt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Gr(e){return e[ir]||null}var Na=[],wn=-1;function It(e){return{current:e}}function re(e){0>wn||(e.current=Na[wn],Na[wn]=null,wn--)}function ee(e,t){wn++,Na[wn]=e.current,e.current=t}var Dt={},Te=It(Dt),Be=It(!1),qt=Dt;function kn(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(e){return e=e.childContextTypes,e!=null}function Qr(){re(Be),re(Te)}function Yo(e,t,n){if(Te.current!==Dt)throw Error(h(168));ee(Te,t),ee(Be,n)}function Xo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(h(108,J(e)||"Unknown",i));return S({},n,r)}function Kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,qt=Te.current,ee(Te,e),ee(Be,Be.current),!0}function qo(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=Xo(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,re(Be),re(Te),ee(Te,e)):re(Be),ee(Be,n)}var jt=null,Yr=!1,ja=!1;function Zo(e){jt===null?jt=[e]:jt.push(e)}function Jc(e){Yr=!0,Zo(e)}function Ot(){if(!ja&&jt!==null){ja=!0;var e=0,t=q;try{var n=jt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,Yr=!1}catch(i){throw jt!==null&&(jt=jt.slice(e+1)),Jl(Wi,Ot),i}finally{q=t,ja=!1}}return null}var Nn=[],jn=0,Xr=null,qr=0,rt=[],it=0,Zt=null,St=1,Ct="";function Jt(e,t){Nn[jn++]=qr,Nn[jn++]=Xr,Xr=e,qr=t}function Jo(e,t,n){rt[it++]=St,rt[it++]=Ct,rt[it++]=Zt,Zt=e;var r=St;e=Ct;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var a=32-ut(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,St=1<<32-ut(t)+i|n<<i|r,Ct=a+e}else St=1<<a|n<<i|r,Ct=e}function Sa(e){e.return!==null&&(Jt(e,1),Jo(e,1,0))}function Ca(e){for(;e===Xr;)Xr=Nn[--jn],Nn[jn]=null,qr=Nn[--jn],Nn[jn]=null;for(;e===Zt;)Zt=rt[--it],rt[it]=null,Ct=rt[--it],rt[it]=null,St=rt[--it],rt[it]=null}var Xe=null,qe=null,oe=!1,dt=null;function es(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ts(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,qe=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:St,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,qe=null,!0):!1;default:return!1}}function Ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ba(e){if(oe){var t=qe;if(t){var n=t;if(!ts(e,t)){if(Ea(e))throw Error(h(418));t=At(n.nextSibling);var r=Xe;t&&ts(e,t)?es(r,n):(e.flags=e.flags&-4097|2,oe=!1,Xe=e)}}else{if(Ea(e))throw Error(h(418));e.flags=e.flags&-4097|2,oe=!1,Xe=e}}}function ns(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Zr(e){if(e!==Xe)return!1;if(!oe)return ns(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xa(e.type,e.memoizedProps)),t&&(t=qe)){if(Ea(e))throw rs(),Error(h(418));for(;t;)es(e,t),t=At(t.nextSibling)}if(ns(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Xe?At(e.stateNode.nextSibling):null;return!0}function rs(){for(var e=qe;e;)e=At(e.nextSibling)}function Sn(){qe=Xe=null,oe=!1}function Fa(e){dt===null?dt=[e]:dt.push(e)}var ed=B.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function Jr(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function is(e){var t=e._init;return t(e._payload)}function as(e){function t(m,c){if(e){var f=m.deletions;f===null?(m.deletions=[c],m.flags|=16):f.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function i(m,c){return m=Qt(m,c),m.index=0,m.sibling=null,m}function a(m,c,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<c?(m.flags|=2,c):f):(m.flags|=2,c)):(m.flags|=1048576,c)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,c,f,w){return c===null||c.tag!==6?(c=yl(f,m.mode,w),c.return=m,c):(c=i(c,f),c.return=m,c)}function u(m,c,f,w){var b=f.type;return b===ue?x(m,c,f.props.children,w,f.key):c!==null&&(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===He&&is(b)===c.type)?(w=i(c,f.props),w.ref=lr(m,c,f),w.return=m,w):(w=ji(f.type,f.key,f.props,null,m.mode,w),w.ref=lr(m,c,f),w.return=m,w)}function p(m,c,f,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=wl(f,m.mode,w),c.return=m,c):(c=i(c,f.children||[]),c.return=m,c)}function x(m,c,f,w,b){return c===null||c.tag!==7?(c=sn(f,m.mode,w,b),c.return=m,c):(c=i(c,f),c.return=m,c)}function y(m,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=yl(""+c,m.mode,f),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ae:return f=ji(c.type,c.key,c.props,null,m.mode,f),f.ref=lr(m,null,c),f.return=m,f;case me:return c=wl(c,m.mode,f),c.return=m,c;case He:var w=c._init;return y(m,w(c._payload),f)}if(Ln(c)||P(c))return c=sn(c,m.mode,f,null),c.return=m,c;Jr(m,c)}return null}function g(m,c,f,w){var b=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return b!==null?null:s(m,c,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ae:return f.key===b?u(m,c,f,w):null;case me:return f.key===b?p(m,c,f,w):null;case He:return b=f._init,g(m,c,b(f._payload),w)}if(Ln(f)||P(f))return b!==null?null:x(m,c,f,w,null);Jr(m,f)}return null}function N(m,c,f,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(f)||null,s(c,m,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ae:return m=m.get(w.key===null?f:w.key)||null,u(c,m,w,b);case me:return m=m.get(w.key===null?f:w.key)||null,p(c,m,w,b);case He:var _=w._init;return N(m,c,f,_(w._payload),b)}if(Ln(w)||P(w))return m=m.get(f)||null,x(c,m,w,b,null);Jr(c,w)}return null}function C(m,c,f,w){for(var b=null,_=null,R=c,T=c=0,Se=null;R!==null&&T<f.length;T++){R.index>T?(Se=R,R=null):Se=R.sibling;var G=g(m,R,f[T],w);if(G===null){R===null&&(R=Se);break}e&&R&&G.alternate===null&&t(m,R),c=a(G,c,T),_===null?b=G:_.sibling=G,_=G,R=Se}if(T===f.length)return n(m,R),oe&&Jt(m,T),b;if(R===null){for(;T<f.length;T++)R=y(m,f[T],w),R!==null&&(c=a(R,c,T),_===null?b=R:_.sibling=R,_=R);return oe&&Jt(m,T),b}for(R=r(m,R);T<f.length;T++)Se=N(R,m,T,f[T],w),Se!==null&&(e&&Se.alternate!==null&&R.delete(Se.key===null?T:Se.key),c=a(Se,c,T),_===null?b=Se:_.sibling=Se,_=Se);return e&&R.forEach(function(Kt){return t(m,Kt)}),oe&&Jt(m,T),b}function E(m,c,f,w){var b=P(f);if(typeof b!="function")throw Error(h(150));if(f=b.call(f),f==null)throw Error(h(151));for(var _=b=null,R=c,T=c=0,Se=null,G=f.next();R!==null&&!G.done;T++,G=f.next()){R.index>T?(Se=R,R=null):Se=R.sibling;var Kt=g(m,R,G.value,w);if(Kt===null){R===null&&(R=Se);break}e&&R&&Kt.alternate===null&&t(m,R),c=a(Kt,c,T),_===null?b=Kt:_.sibling=Kt,_=Kt,R=Se}if(G.done)return n(m,R),oe&&Jt(m,T),b;if(R===null){for(;!G.done;T++,G=f.next())G=y(m,G.value,w),G!==null&&(c=a(G,c,T),_===null?b=G:_.sibling=G,_=G);return oe&&Jt(m,T),b}for(R=r(m,R);!G.done;T++,G=f.next())G=N(R,m,T,G.value,w),G!==null&&(e&&G.alternate!==null&&R.delete(G.key===null?T:G.key),c=a(G,c,T),_===null?b=G:_.sibling=G,_=G);return e&&R.forEach(function(Td){return t(m,Td)}),oe&&Jt(m,T),b}function ve(m,c,f,w){if(typeof f=="object"&&f!==null&&f.type===ue&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ae:e:{for(var b=f.key,_=c;_!==null;){if(_.key===b){if(b=f.type,b===ue){if(_.tag===7){n(m,_.sibling),c=i(_,f.props.children),c.return=m,m=c;break e}}else if(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===He&&is(b)===_.type){n(m,_.sibling),c=i(_,f.props),c.ref=lr(m,_,f),c.return=m,m=c;break e}n(m,_);break}else t(m,_);_=_.sibling}f.type===ue?(c=sn(f.props.children,m.mode,w,f.key),c.return=m,m=c):(w=ji(f.type,f.key,f.props,null,m.mode,w),w.ref=lr(m,c,f),w.return=m,m=w)}return o(m);case me:e:{for(_=f.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(m,c.sibling),c=i(c,f.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=wl(f,m.mode,w),c.return=m,m=c}return o(m);case He:return _=f._init,ve(m,c,_(f._payload),w)}if(Ln(f))return C(m,c,f,w);if(P(f))return E(m,c,f,w);Jr(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(m,c.sibling),c=i(c,f),c.return=m,m=c):(n(m,c),c=yl(f,m.mode,w),c.return=m,m=c),o(m)):n(m,c)}return ve}var Cn=as(!0),ls=as(!1),ei=It(null),ti=null,En=null,za=null;function _a(){za=En=ti=null}function Ra(e){var t=ei.current;re(ei),e._currentValue=t}function Pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bn(e,t){ti=e,za=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&($e=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(za!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(ti===null)throw Error(h(308));En=e,ti.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var en=null;function Ta(e){en===null?en=[e]:en.push(e)}function os(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ta(t)):(n.next=i.next,i.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ss(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Et(e,n)}return i=r.interleaved,i===null?(t.next=t,Ta(r)):(t.next=i.next,i.next=t),r.interleaved=t,Et(e,n)}function ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ki(e,n)}}function us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ri(e,t,n,r){var i=e.updateQueue;Ut=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,p=u.next;u.next=null,o===null?a=p:o.next=p,o=u;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==o&&(s===null?x.firstBaseUpdate=p:s.next=p,x.lastBaseUpdate=u))}if(a!==null){var y=i.baseState;o=0,x=p=u=null,s=a;do{var g=s.lane,N=s.eventTime;if((r&g)===g){x!==null&&(x=x.next={eventTime:N,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,E=s;switch(g=t,N=n,E.tag){case 1:if(C=E.payload,typeof C=="function"){y=C.call(N,y,g);break e}y=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=E.payload,g=typeof C=="function"?C.call(N,y,g):C,g==null)break e;y=S({},y,g);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else N={eventTime:N,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(p=x=N,u=y):x=x.next=N,o|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(x===null&&(u=y),i.baseState=u,i.firstBaseUpdate=p,i.lastBaseUpdate=x,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);rn|=o,e.lanes=o,e.memoizedState=y}}function cs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(h(191,i));i.call(r)}}}var or={},yt=It(or),sr=It(or),ur=It(or);function tn(e){if(e===or)throw Error(h(174));return e}function La(e,t){switch(ee(ur,t),ee(sr,e),ee(yt,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ai(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ai(t,e)}re(yt),ee(yt,t)}function Fn(){re(yt),re(sr),re(ur)}function ds(e){tn(ur.current);var t=tn(yt.current),n=Ai(t,e.type);t!==n&&(ee(sr,e),ee(yt,n))}function Aa(e){sr.current===e&&(re(yt),re(sr))}var ce=It(0);function ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ia=[];function Da(){for(var e=0;e<Ia.length;e++)Ia[e]._workInProgressVersionPrimary=null;Ia.length=0}var ai=B.ReactCurrentDispatcher,Oa=B.ReactCurrentBatchConfig,nn=0,de=null,ye=null,Ne=null,li=!1,cr=!1,dr=0,td=0;function Me(){throw Error(h(321))}function Ua(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Ha(e,t,n,r,i,a){if(nn=a,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=e===null||e.memoizedState===null?ad:ld,e=n(r,i),cr){a=0;do{if(cr=!1,dr=0,25<=a)throw Error(h(301));a+=1,Ne=ye=null,t.updateQueue=null,ai.current=od,e=n(r,i)}while(cr)}if(ai.current=ui,t=ye!==null&&ye.next!==null,nn=0,Ne=ye=de=null,li=!1,t)throw Error(h(300));return e}function Ba(){var e=dr!==0;return dr=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?de.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function lt(){if(ye===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Ne===null?de.memoizedState:Ne.next;if(t!==null)Ne=t,ye=e;else{if(e===null)throw Error(h(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ne===null?de.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function mr(e,t){return typeof t=="function"?t(e):t}function Va(e){var t=lt(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=ye,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,u=null,p=a;do{var x=p.lane;if((nn&x)===x)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var y={lane:x,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(s=u=y,o=r):u=u.next=y,de.lanes|=x,rn|=x}p=p.next}while(p!==null&&p!==a);u===null?o=r:u.next=s,ct(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,de.lanes|=a,rn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $a(e){var t=lt(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);ct(a,t.memoizedState)||($e=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ms(){}function fs(e,t){var n=de,r=lt(),i=t(),a=!ct(r.memoizedState,i);if(a&&(r.memoizedState=i,$e=!0),r=r.queue,Wa(gs.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,fr(9,hs.bind(null,n,r,i,t),void 0,null),je===null)throw Error(h(349));(nn&30)!==0||ps(n,t,i)}return i}function ps(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hs(e,t,n,r){t.value=n,t.getSnapshot=r,vs(t)&&xs(e)}function gs(e,t,n){return n(function(){vs(t)&&xs(e)})}function vs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function xs(e){var t=Et(e,1);t!==null&&ht(t,e,1,-1)}function ys(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=id.bind(null,de,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ws(){return lt().memoizedState}function oi(e,t,n,r){var i=wt();de.flags|=e,i.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function si(e,t,n,r){var i=lt();r=r===void 0?null:r;var a=void 0;if(ye!==null){var o=ye.memoizedState;if(a=o.destroy,r!==null&&Ua(r,o.deps)){i.memoizedState=fr(t,n,a,r);return}}de.flags|=e,i.memoizedState=fr(1|t,n,a,r)}function ks(e,t){return oi(8390656,8,e,t)}function Wa(e,t){return si(2048,8,e,t)}function Ns(e,t){return si(4,2,e,t)}function js(e,t){return si(4,4,e,t)}function Ss(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cs(e,t,n){return n=n!=null?n.concat([e]):null,si(4,4,Ss.bind(null,t,e),n)}function Ga(){}function Es(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fs(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n):(ct(n,t)||(n=ro(),de.lanes|=n,rn|=n,e.baseState=!0),t)}function nd(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Oa.transition;Oa.transition={};try{e(!1),t()}finally{q=n,Oa.transition=r}}function zs(){return lt().memoizedState}function rd(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_s(e))Rs(t,n);else if(n=os(e,t,n,r),n!==null){var i=Ue();ht(n,e,r,i),Ps(n,t,r)}}function id(e,t,n){var r=Wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_s(e))Rs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,ct(s,o)){var u=t.interleaved;u===null?(i.next=i,Ta(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=os(e,t,i,r),n!==null&&(i=Ue(),ht(n,e,r,i),Ps(n,t,r))}}function _s(e){var t=e.alternate;return e===de||t!==null&&t===de}function Rs(e,t){cr=li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ps(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ki(e,n)}}var ui={readContext:at,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},ad={readContext:at,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:ks,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oi(4194308,4,Ss.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return oi(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rd.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:ys,useDebugValue:Ga,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=ys(!1),t=e[0];return e=nd.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=wt();if(oe){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),je===null)throw Error(h(349));(nn&30)!==0||ps(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ks(gs.bind(null,r,a,e),[e]),r.flags|=2048,fr(9,hs.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=wt(),t=je.identifierPrefix;if(oe){var n=Ct,r=St;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=td++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ld={readContext:at,useCallback:Es,useContext:at,useEffect:Wa,useImperativeHandle:Cs,useInsertionEffect:Ns,useLayoutEffect:js,useMemo:bs,useReducer:Va,useRef:ws,useState:function(){return Va(mr)},useDebugValue:Ga,useDeferredValue:function(e){var t=lt();return Fs(t,ye.memoizedState,e)},useTransition:function(){var e=Va(mr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:ms,useSyncExternalStore:fs,useId:zs,unstable_isNewReconciler:!1},od={readContext:at,useCallback:Es,useContext:at,useEffect:Wa,useImperativeHandle:Cs,useInsertionEffect:Ns,useLayoutEffect:js,useMemo:bs,useReducer:$a,useRef:ws,useState:function(){return $a(mr)},useDebugValue:Ga,useDeferredValue:function(e){var t=lt();return ye===null?t.memoizedState=e:Fs(t,ye.memoizedState,e)},useTransition:function(){var e=$a(mr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:ms,useSyncExternalStore:fs,useId:zs,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=S({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ci={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Wt(e),a=bt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Ht(e,a,i),t!==null&&(ht(t,e,i,r),ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Wt(e),a=bt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ht(e,a,i),t!==null&&(ht(t,e,i,r),ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=Wt(e),i=bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ht(e,i,r),t!==null&&(ht(t,e,r,n),ni(t,e,r))}};function Ts(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(i,a):!0}function Ms(e,t,n){var r=!1,i=Dt,a=t.contextType;return typeof a=="object"&&a!==null?a=at(a):(i=Ve(t)?qt:Te.current,r=t.contextTypes,a=(r=r!=null)?kn(e,i):Dt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ls(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Ka(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ma(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=at(a):(a=Ve(t)?qt:Te.current,i.context=kn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Qa(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ci.enqueueReplaceState(i,i.state,null),ri(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zn(e,t){try{var n="",r=t;do n+=$(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Ya(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sd=typeof WeakMap=="function"?WeakMap:Map;function As(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vi||(vi=!0,dl=r),Xa(e,t)},n}function Is(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Xa(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ds(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Nd.bind(null,e,t,n),t.then(e,e))}function Os(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Us(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ud=B.ReactCurrentOwner,$e=!1;function Oe(e,t,n,r){t.child=e===null?ls(t,null,n,r):Cn(t,e.child,n,r)}function Hs(e,t,n,r,i){n=n.render;var a=t.ref;return bn(t,i),r=Ha(e,t,n,r,a,i),n=Ba(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(oe&&n&&Sa(t),t.flags|=1,Oe(e,t,r,i),t.child)}function Bs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!xl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Vs(e,t,a,r,i)):(e=ji(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(o,r)&&e.ref===t.ref)return Ft(e,t,i)}return t.flags|=1,e=Qt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Vs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Jn(a,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,Ft(e,t,i)}return qa(e,t,n,r,i)}function $s(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Rn,Ze),Ze|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Rn,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ee(Rn,Ze),Ze|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ee(Rn,Ze),Ze|=r;return Oe(e,t,i,n),t.child}function Ws(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qa(e,t,n,r,i){var a=Ve(n)?qt:Te.current;return a=kn(t,a),bn(t,i),n=Ha(e,t,n,r,a,i),r=Ba(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(oe&&r&&Sa(t),t.flags|=1,Oe(e,t,n,i),t.child)}function Gs(e,t,n,r,i){if(Ve(n)){var a=!0;Kr(t)}else a=!1;if(bn(t,i),t.stateNode===null)mi(e,t),Ms(t,n,r),Ka(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=at(p):(p=Ve(n)?qt:Te.current,p=kn(t,p));var x=n.getDerivedStateFromProps,y=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==p)&&Ls(t,o,r,p),Ut=!1;var g=t.memoizedState;o.state=g,ri(t,r,o,i),u=t.memoizedState,s!==r||g!==u||Be.current||Ut?(typeof x=="function"&&(Qa(t,n,x,r),u=t.memoizedState),(s=Ut||Ts(t,n,s,r,g,u,p))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=p,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ss(e,t),s=t.memoizedProps,p=t.type===t.elementType?s:mt(t.type,s),o.props=p,y=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=at(u):(u=Ve(n)?qt:Te.current,u=kn(t,u));var N=n.getDerivedStateFromProps;(x=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==y||g!==u)&&Ls(t,o,r,u),Ut=!1,g=t.memoizedState,o.state=g,ri(t,r,o,i);var C=t.memoizedState;s!==y||g!==C||Be.current||Ut?(typeof N=="function"&&(Qa(t,n,N,r),C=t.memoizedState),(p=Ut||Ts(t,n,p,r,g,C,u)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),o.props=r,o.state=C,o.context=u,r=p):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Za(e,t,n,r,a,i)}function Za(e,t,n,r,i,a){Ws(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&qo(t,n,!1),Ft(e,t,a);r=t.stateNode,ud.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Cn(t,e.child,null,a),t.child=Cn(t,null,s,a)):Oe(e,t,s,a),t.memoizedState=r.state,i&&qo(t,n,!0),t.child}function Qs(e){var t=e.stateNode;t.pendingContext?Yo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yo(e,t.context,!1),La(e,t.containerInfo)}function Ks(e,t,n,r,i){return Sn(),Fa(i),t.flags|=256,Oe(e,t,n,r),t.child}var Ja={dehydrated:null,treeContext:null,retryLane:0};function el(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ys(e,t,n){var r=t.pendingProps,i=ce.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ce,i&1),e===null)return ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Si(o,r,0,null),e=sn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=el(n),t.memoizedState=Ja,e):tl(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return cd(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Qt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Qt(s,a):(a=sn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?el(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ja,r}return a=e.child,e=a.sibling,r=Qt(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tl(e,t){return t=Si({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function di(e,t,n,r){return r!==null&&Fa(r),Cn(t,e.child,null,n),e=tl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cd(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Ya(Error(h(422))),di(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Si({mode:"visible",children:r.children},i,0,null),a=sn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Cn(t,e.child,null,o),t.child.memoizedState=el(o),t.memoizedState=Ja,a);if((t.mode&1)===0)return di(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(h(419)),r=Ya(a,r,void 0),di(e,t,o,r)}if(s=(o&e.childLanes)!==0,$e||s){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Et(e,i),ht(r,e,i,-1))}return vl(),r=Ya(Error(h(421))),di(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jd.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,qe=At(i.nextSibling),Xe=t,oe=!0,dt=null,e!==null&&(rt[it++]=St,rt[it++]=Ct,rt[it++]=Zt,St=e.id,Ct=e.overflow,Zt=t),t=tl(t,r.children),t.flags|=4096,t)}function Xs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pa(e.return,t,n)}function nl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function qs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Oe(e,t,r.children,n),r=ce.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xs(e,n,t);else if(e.tag===19)Xs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ce,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ii(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nl(t,!0,n,null,a);break;case"together":nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dd(e,t,n){switch(t.tag){case 3:Qs(t),Sn();break;case 5:ds(t);break;case 1:Ve(t.type)&&Kr(t);break;case 4:La(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(ei,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ce,ce.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ys(e,t,n):(ee(ce,ce.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);ee(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return qs(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,$s(e,t,n)}return Ft(e,t,n)}var Zs,rl,Js,eu;Zs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},rl=function(){},Js=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tn(yt.current);var a=null;switch(n){case"input":i=Pi(e,i),r=Pi(e,r),a=[];break;case"select":i=S({},i,{value:void 0}),r=S({},r,{value:void 0}),a=[];break;case"textarea":i=Li(e,i),r=Li(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}Ii(n,r);var o;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var s=i[p];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(I.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in r){var u=r[p];if(s=i!=null?i[p]:void 0,r.hasOwnProperty(p)&&u!==s&&(u!=null||s!=null))if(p==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(p,n)),n=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(I.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&ne("scroll",e),a||s===u||(a=[])):(a=a||[]).push(p,u))}n&&(a=a||[]).push("style",n);var p=a;(t.updateQueue=p)&&(t.flags|=4)}},eu=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function md(e,t,n){var r=t.pendingProps;switch(Ca(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Ve(t.type)&&Qr(),Le(t),null;case 3:return r=t.stateNode,Fn(),re(Be),re(Te),Da(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dt!==null&&(pl(dt),dt=null))),rl(e,t),Le(t),null;case 5:Aa(t);var i=tn(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)Js(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return Le(t),null}if(e=tn(yt.current),Zr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[xt]=t,r[ir]=a,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<tr.length;i++)ne(tr[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Tl(r,a),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ne("invalid",r);break;case"textarea":Al(r,a),ne("invalid",r)}Ii(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&$r(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&$r(r.textContent,s,e),i=["children",""+s]):I.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":kr(r),Ll(r,a,!0);break;case"textarea":kr(r),Dl(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Wr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ol(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[xt]=t,e[ir]=r,Zs(e,t,!1,!1),t.stateNode=e;e:{switch(o=Di(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<tr.length;i++)ne(tr[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":Tl(e,r),i=Pi(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=S({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Al(e,r),i=Li(e,r),ne("invalid",e);break;default:i=r}Ii(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?Bl(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ul(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&An(e,u):typeof u=="number"&&An(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(I.hasOwnProperty(a)?u!=null&&a==="onScroll"&&ne("scroll",e):u!=null&&z(e,a,u,o))}switch(n){case"input":kr(e),Ll(e,r,!1);break;case"textarea":kr(e),Dl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+X(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?un(e,!!r.multiple,a,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)eu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=tn(ur.current),tn(yt.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(a=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:$r(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$r(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Le(t),null;case 13:if(re(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)rs(),Sn(),t.flags|=98560,a=!1;else if(a=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(h(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(h(317));a[xt]=t}else Sn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),a=!1}else dt!==null&&(pl(dt),dt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ce.current&1)!==0?we===0&&(we=3):vl())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return Fn(),rl(e,t),e===null&&nr(t.stateNode.containerInfo),Le(t),null;case 10:return Ra(t.type._context),Le(t),null;case 17:return Ve(t.type)&&Qr(),Le(t),null;case 19:if(re(ce),a=t.memoizedState,a===null)return Le(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)pr(a,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ii(e),o!==null){for(t.flags|=128,pr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ce,ce.current&1|2),t.child}e=e.sibling}a.tail!==null&&ge()>Pn&&(t.flags|=128,r=!0,pr(a,!1),t.lanes=4194304)}else{if(!r)if(e=ii(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!oe)return Le(t),null}else 2*ge()-a.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,r=!0,pr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ge(),t.sibling=null,n=ce.current,ee(ce,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return gl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ze&1073741824)!==0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function fd(e,t){switch(Ca(t),t.tag){case 1:return Ve(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fn(),re(Be),re(Te),Da(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Aa(t),null;case 13:if(re(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(ce),null;case 4:return Fn(),null;case 10:return Ra(t.type._context),null;case 22:case 23:return gl(),null;case 24:return null;default:return null}}var fi=!1,Ae=!1,pd=typeof WeakSet=="function"?WeakSet:Set,j=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function il(e,t,n){try{n()}catch(r){pe(e,t,r)}}var tu=!1;function hd(e,t){if(ga=Tr,e=To(),sa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,p=0,x=0,y=e,g=null;t:for(;;){for(var N;y!==n||i!==0&&y.nodeType!==3||(s=o+i),y!==a||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(N=y.firstChild)!==null;)g=y,y=N;for(;;){if(y===e)break t;if(g===n&&++p===i&&(s=o),g===a&&++x===r&&(u=o),(N=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=N}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(va={focusedElem:e,selectionRange:n},Tr=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var C=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var E=C.memoizedProps,ve=C.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?E:mt(t.type,E),ve);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){pe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return C=tu,tu=!1,C}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&il(t,n,a)}i=i.next}while(i!==r)}}function pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function al(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nu(e){var t=e.alternate;t!==null&&(e.alternate=null,nu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[ir],delete t[ka],delete t[qc],delete t[Zc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ru(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(ll(e,t,n),e=e.sibling;e!==null;)ll(e,t,n),e=e.sibling}function ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ol(e,t,n),e=e.sibling;e!==null;)ol(e,t,n),e=e.sibling}var be=null,ft=!1;function Bt(e,t,n){for(n=n.child;n!==null;)au(e,t,n),n=n.sibling}function au(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(br,n)}catch{}switch(n.tag){case 5:Ae||_n(n,t);case 6:var r=be,i=ft;be=null,Bt(e,t,n),be=r,ft=i,be!==null&&(ft?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ft?(e=be,n=n.stateNode,e.nodeType===8?wa(e.parentNode,n):e.nodeType===1&&wa(e,n),Qn(e)):wa(be,n.stateNode));break;case 4:r=be,i=ft,be=n.stateNode.containerInfo,ft=!0,Bt(e,t,n),be=r,ft=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&((a&2)!==0||(a&4)!==0)&&il(n,t,o),i=i.next}while(i!==r)}Bt(e,t,n);break;case 1:if(!Ae&&(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){pe(n,t,s)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,Bt(e,t,n),Ae=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pd),t.forEach(function(r){var i=Sd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,ft=!1;break e;case 3:be=s.stateNode.containerInfo,ft=!0;break e;case 4:be=s.stateNode.containerInfo,ft=!0;break e}s=s.return}if(be===null)throw Error(h(160));au(a,o,i),be=null,ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(p){pe(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ou(t,e),t=t.sibling}function ou(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),kt(e),r&4){try{hr(3,e,e.return),pi(3,e)}catch(E){pe(e,e.return,E)}try{hr(5,e,e.return)}catch(E){pe(e,e.return,E)}}break;case 1:pt(t,e),kt(e),r&512&&n!==null&&_n(n,n.return);break;case 5:if(pt(t,e),kt(e),r&512&&n!==null&&_n(n,n.return),e.flags&32){var i=e.stateNode;try{An(i,"")}catch(E){pe(e,e.return,E)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Ml(i,a),Di(s,o);var p=Di(s,a);for(o=0;o<u.length;o+=2){var x=u[o],y=u[o+1];x==="style"?Bl(i,y):x==="dangerouslySetInnerHTML"?Ul(i,y):x==="children"?An(i,y):z(i,x,y,p)}switch(s){case"input":Ti(i,a);break;case"textarea":Il(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var N=a.value;N!=null?un(i,!!a.multiple,N,!1):g!==!!a.multiple&&(a.defaultValue!=null?un(i,!!a.multiple,a.defaultValue,!0):un(i,!!a.multiple,a.multiple?[]:"",!1))}i[ir]=a}catch(E){pe(e,e.return,E)}}break;case 6:if(pt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(h(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(E){pe(e,e.return,E)}}break;case 3:if(pt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(E){pe(e,e.return,E)}break;case 4:pt(t,e),kt(e);break;case 13:pt(t,e),kt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(cl=ge())),r&4&&lu(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(p=Ae)||x,pt(t,e),Ae=p):pt(t,e),kt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!x&&(e.mode&1)!==0)for(j=e,x=e.child;x!==null;){for(y=j=x;j!==null;){switch(g=j,N=g.child,g.tag){case 0:case 11:case 14:case 15:hr(4,g,g.return);break;case 1:_n(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(E){pe(r,n,E)}}break;case 5:_n(g,g.return);break;case 22:if(g.memoizedState!==null){cu(y);continue}}N!==null?(N.return=g,j=N):cu(y)}x=x.sibling}e:for(x=null,y=e;;){if(y.tag===5){if(x===null){x=y;try{i=y.stateNode,p?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Hl("display",o))}catch(E){pe(e,e.return,E)}}}else if(y.tag===6){if(x===null)try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(E){pe(e,e.return,E)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;x===y&&(x=null),y=y.return}x===y&&(x=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:pt(t,e),kt(e),r&4&&lu(e);break;case 21:break;default:pt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ru(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(An(i,""),r.flags&=-33);var a=iu(e);ol(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=iu(e);ll(e,s,o);break;default:throw Error(h(161))}}catch(u){pe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gd(e,t,n){j=e,su(e)}function su(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fi;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Ae;s=fi;var p=Ae;if(fi=o,(Ae=u)&&!p)for(j=i;j!==null;)o=j,u=o.child,o.tag===22&&o.memoizedState!==null?du(i):u!==null?(u.return=o,j=u):du(i);for(;a!==null;)j=a,su(a),a=a.sibling;j=i,fi=s,Ae=p}uu(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,j=a):uu(e)}}function uu(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ae||pi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&cs(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cs(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var x=p.memoizedState;if(x!==null){var y=x.dehydrated;y!==null&&Qn(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}Ae||t.flags&512&&al(t)}catch(g){pe(t,t.return,g)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function cu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function du(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pi(4,t)}catch(u){pe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){pe(t,i,u)}}var a=t.return;try{al(t)}catch(u){pe(t,a,u)}break;case 5:var o=t.return;try{al(t)}catch(u){pe(t,o,u)}}}catch(u){pe(t,t.return,u)}if(t===e){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var vd=Math.ceil,hi=B.ReactCurrentDispatcher,sl=B.ReactCurrentOwner,ot=B.ReactCurrentBatchConfig,V=0,je=null,xe=null,Fe=0,Ze=0,Rn=It(0),we=0,gr=null,rn=0,gi=0,ul=0,vr=null,We=null,cl=0,Pn=1/0,zt=null,vi=!1,dl=null,Vt=null,xi=!1,$t=null,yi=0,xr=0,ml=null,wi=-1,ki=0;function Ue(){return(V&6)!==0?ge():wi!==-1?wi:wi=ge()}function Wt(e){return(e.mode&1)===0?1:(V&2)!==0&&Fe!==0?Fe&-Fe:ed.transition!==null?(ki===0&&(ki=ro()),ki):(e=q,e!==0||(e=window.event,e=e===void 0?16:fo(e.type)),e)}function ht(e,t,n,r){if(50<xr)throw xr=0,ml=null,Error(h(185));Bn(e,n,r),((V&2)===0||e!==je)&&(e===je&&((V&2)===0&&(gi|=n),we===4&&Gt(e,Fe)),Ge(e,r),n===1&&V===0&&(t.mode&1)===0&&(Pn=ge()+500,Yr&&Ot()))}function Ge(e,t){var n=e.callbackNode;ec(e,t);var r=_r(e,e===je?Fe:0);if(r===0)n!==null&&eo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&eo(n),t===1)e.tag===0?Jc(fu.bind(null,e)):Zo(fu.bind(null,e)),Yc(function(){(V&6)===0&&Ot()}),n=null;else{switch(io(r)){case 1:n=Wi;break;case 4:n=to;break;case 16:n=Er;break;case 536870912:n=no;break;default:n=Er}n=ku(n,mu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mu(e,t){if(wi=-1,ki=0,(V&6)!==0)throw Error(h(327));var n=e.callbackNode;if(Tn()&&e.callbackNode!==n)return null;var r=_r(e,e===je?Fe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ni(e,r);else{t=r;var i=V;V|=2;var a=hu();(je!==e||Fe!==t)&&(zt=null,Pn=ge()+500,ln(e,t));do try{wd();break}catch(s){pu(e,s)}while(!0);_a(),hi.current=a,V=i,xe!==null?t=0:(je=null,Fe=0,t=we)}if(t!==0){if(t===2&&(i=Gi(e),i!==0&&(r=i,t=fl(e,i))),t===1)throw n=gr,ln(e,0),Gt(e,r),Ge(e,ge()),n;if(t===6)Gt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!xd(i)&&(t=Ni(e,r),t===2&&(a=Gi(e),a!==0&&(r=a,t=fl(e,a))),t===1))throw n=gr,ln(e,0),Gt(e,r),Ge(e,ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:on(e,We,zt);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=cl+500-ge(),10<t)){if(_r(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ya(on.bind(null,e,We,zt),t);break}on(e,We,zt);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-ut(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vd(r/1960))-r,10<r){e.timeoutHandle=ya(on.bind(null,e,We,zt),r);break}on(e,We,zt);break;case 5:on(e,We,zt);break;default:throw Error(h(329))}}}return Ge(e,ge()),e.callbackNode===n?mu.bind(null,e):null}function fl(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=Ni(e,t),e!==2&&(t=We,We=n,t!==null&&pl(t)),e}function pl(e){We===null?We=e:We.push.apply(We,e)}function xd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!ct(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~ul,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function fu(e){if((V&6)!==0)throw Error(h(327));Tn();var t=_r(e,0);if((t&1)===0)return Ge(e,ge()),null;var n=Ni(e,t);if(e.tag!==0&&n===2){var r=Gi(e);r!==0&&(t=r,n=fl(e,r))}if(n===1)throw n=gr,ln(e,0),Gt(e,t),Ge(e,ge()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,We,zt),Ge(e,ge()),null}function hl(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Pn=ge()+500,Yr&&Ot())}}function an(e){$t!==null&&$t.tag===0&&(V&6)===0&&Tn();var t=V;V|=1;var n=ot.transition,r=q;try{if(ot.transition=null,q=1,e)return e()}finally{q=r,ot.transition=n,V=t,(V&6)===0&&Ot()}}function gl(){Ze=Rn.current,re(Rn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kc(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Ca(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:Fn(),re(Be),re(Te),Da();break;case 5:Aa(r);break;case 4:Fn();break;case 13:re(ce);break;case 19:re(ce);break;case 10:Ra(r.type._context);break;case 22:case 23:gl()}n=n.return}if(je=e,xe=e=Qt(e.current,null),Fe=Ze=t,we=0,gr=null,ul=gi=rn=0,We=vr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}en=null}return e}function pu(e,t){do{var n=xe;try{if(_a(),ai.current=ui,li){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}li=!1}if(nn=0,Ne=ye=de=null,cr=!1,dr=0,sl.current=null,n===null||n.return===null){we=1,gr=t,xe=null;break}e:{var a=e,o=n.return,s=n,u=t;if(t=Fe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,x=s,y=x.tag;if((x.mode&1)===0&&(y===0||y===11||y===15)){var g=x.alternate;g?(x.updateQueue=g.updateQueue,x.memoizedState=g.memoizedState,x.lanes=g.lanes):(x.updateQueue=null,x.memoizedState=null)}var N=Os(o);if(N!==null){N.flags&=-257,Us(N,o,s,a,t),N.mode&1&&Ds(a,p,t),t=N,u=p;var C=t.updateQueue;if(C===null){var E=new Set;E.add(u),t.updateQueue=E}else C.add(u);break e}else{if((t&1)===0){Ds(a,p,t),vl();break e}u=Error(h(426))}}else if(oe&&s.mode&1){var ve=Os(o);if(ve!==null){(ve.flags&65536)===0&&(ve.flags|=256),Us(ve,o,s,a,t),Fa(zn(u,s));break e}}a=u=zn(u,s),we!==4&&(we=2),vr===null?vr=[a]:vr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=As(a,u,t);us(a,m);break e;case 1:s=u;var c=a.type,f=a.stateNode;if((a.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Vt===null||!Vt.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=Is(a,s,t);us(a,w);break e}}a=a.return}while(a!==null)}vu(n)}catch(b){t=b,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function hu(){var e=hi.current;return hi.current=ui,e===null?ui:e}function vl(){(we===0||we===3||we===2)&&(we=4),je===null||(rn&268435455)===0&&(gi&268435455)===0||Gt(je,Fe)}function Ni(e,t){var n=V;V|=2;var r=hu();(je!==e||Fe!==t)&&(zt=null,ln(e,t));do try{yd();break}catch(i){pu(e,i)}while(!0);if(_a(),V=n,hi.current=r,xe!==null)throw Error(h(261));return je=null,Fe=0,we}function yd(){for(;xe!==null;)gu(xe)}function wd(){for(;xe!==null&&!Wu();)gu(xe)}function gu(e){var t=wu(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?vu(e):xe=t,sl.current=null}function vu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=md(n,t,Ze),n!==null){xe=n;return}}else{if(n=fd(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,xe=null;return}}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);we===0&&(we=5)}function on(e,t,n){var r=q,i=ot.transition;try{ot.transition=null,q=1,kd(e,t,n,r)}finally{ot.transition=i,q=r}return null}function kd(e,t,n,r){do Tn();while($t!==null);if((V&6)!==0)throw Error(h(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(tc(e,a),e===je&&(xe=je=null,Fe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||xi||(xi=!0,ku(Er,function(){return Tn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=ot.transition,ot.transition=null;var o=q;q=1;var s=V;V|=4,sl.current=null,hd(e,n),ou(n,e),Hc(va),Tr=!!ga,va=ga=null,e.current=n,gd(n),Gu(),V=s,q=o,ot.transition=a}else e.current=n;if(xi&&(xi=!1,$t=e,yi=i),a=e.pendingLanes,a===0&&(Vt=null),Yu(n.stateNode),Ge(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vi)throw vi=!1,e=dl,dl=null,e;return(yi&1)!==0&&e.tag!==0&&Tn(),a=e.pendingLanes,(a&1)!==0?e===ml?xr++:(xr=0,ml=e):xr=0,Ot(),null}function Tn(){if($t!==null){var e=io(yi),t=ot.transition,n=q;try{if(ot.transition=null,q=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,yi=0,(V&6)!==0)throw Error(h(331));var i=V;for(V|=4,j=e.current;j!==null;){var a=j,o=a.child;if((j.flags&16)!==0){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var p=s[u];for(j=p;j!==null;){var x=j;switch(x.tag){case 0:case 11:case 15:hr(8,x,a)}var y=x.child;if(y!==null)y.return=x,j=y;else for(;j!==null;){x=j;var g=x.sibling,N=x.return;if(nu(x),x===p){j=null;break}if(g!==null){g.return=N,j=g;break}j=N}}}var C=a.alternate;if(C!==null){var E=C.child;if(E!==null){C.child=null;do{var ve=E.sibling;E.sibling=null,E=ve}while(E!==null)}}j=a}}if((a.subtreeFlags&2064)!==0&&o!==null)o.return=a,j=o;else e:for(;j!==null;){if(a=j,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:hr(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,j=m;break e}j=a.return}}var c=e.current;for(j=c;j!==null;){o=j;var f=o.child;if((o.subtreeFlags&2064)!==0&&f!==null)f.return=o,j=f;else e:for(o=c;j!==null;){if(s=j,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:pi(9,s)}}catch(b){pe(s,s.return,b)}if(s===o){j=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,j=w;break e}j=s.return}}if(V=i,Ot(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(br,e)}catch{}r=!0}return r}finally{q=n,ot.transition=t}}return!1}function xu(e,t,n){t=zn(n,t),t=As(e,t,1),e=Ht(e,t,1),t=Ue(),e!==null&&(Bn(e,1,t),Ge(e,t))}function pe(e,t,n){if(e.tag===3)xu(e,e,n);else for(;t!==null;){if(t.tag===3){xu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=zn(n,e),e=Is(t,e,1),t=Ht(t,e,1),e=Ue(),t!==null&&(Bn(t,1,e),Ge(t,e));break}}t=t.return}}function Nd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Fe&n)===n&&(we===4||we===3&&(Fe&130023424)===Fe&&500>ge()-cl?ln(e,0):ul|=n),Ge(e,t)}function yu(e,t){t===0&&((e.mode&1)===0?t=1:(t=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var n=Ue();e=Et(e,t),e!==null&&(Bn(e,t,n),Ge(e,n))}function jd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yu(e,n)}function Sd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),yu(e,n)}var wu;wu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)$e=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return $e=!1,dd(e,t,n);$e=(e.flags&131072)!==0}else $e=!1,oe&&(t.flags&1048576)!==0&&Jo(t,qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;mi(e,t),e=t.pendingProps;var i=kn(t,Te.current);bn(t,n),i=Ha(null,t,r,e,i,n);var a=Ba();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(a=!0,Kr(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ma(t),i.updater=ci,t.stateNode=i,i._reactInternals=t,Ka(t,r,e,n),t=Za(null,t,r,!0,a,n)):(t.tag=0,oe&&a&&Sa(t),Oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(mi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ed(r),e=mt(r,e),i){case 0:t=qa(null,t,r,e,n);break e;case 1:t=Gs(null,t,r,e,n);break e;case 11:t=Hs(null,t,r,e,n);break e;case 14:t=Bs(null,t,r,mt(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),qa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Gs(e,t,r,i,n);case 3:e:{if(Qs(t),e===null)throw Error(h(387));r=t.pendingProps,a=t.memoizedState,i=a.element,ss(e,t),ri(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=zn(Error(h(423)),t),t=Ks(e,t,r,n,i);break e}else if(r!==i){i=zn(Error(h(424)),t),t=Ks(e,t,r,n,i);break e}else for(qe=At(t.stateNode.containerInfo.firstChild),Xe=t,oe=!0,dt=null,n=ls(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===i){t=Ft(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return ds(t),e===null&&ba(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,xa(r,i)?o=null:a!==null&&xa(r,a)&&(t.flags|=32),Ws(e,t),Oe(e,t,o,n),t.child;case 6:return e===null&&ba(t),null;case 13:return Ys(e,t,n);case 4:return La(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Hs(e,t,r,i,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ee(ei,r._currentValue),r._currentValue=o,a!==null)if(ct(a.value,o)){if(a.children===i.children&&!Be.current){t=Ft(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=bt(-1,n&-n),u.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var x=p.pending;x===null?u.next=u:(u.next=x.next,x.next=u),p.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Pa(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(h(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Pa(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,bn(t,n),i=at(i),r=r(i),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),Bs(e,t,r,i,n);case 15:return Vs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),mi(e,t),t.tag=1,Ve(r)?(e=!0,Kr(t)):e=!1,bn(t,n),Ms(t,r,i),Ka(t,r,i,n),Za(null,t,r,!0,e,n);case 19:return qs(e,t,n);case 22:return $s(e,t,n)}throw Error(h(156,t.tag))};function ku(e,t){return Jl(e,t)}function Cd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new Cd(e,t,n,r)}function xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ed(e){if(typeof e=="function")return xl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nt)return 11;if(e===gt)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ji(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")xl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ue:return sn(n.children,i,a,t);case Re:o=8,i|=8;break;case De:return e=st(12,n,t,i|2),e.elementType=De,e.lanes=a,e;case Pe:return e=st(13,n,t,i),e.elementType=Pe,e.lanes=a,e;case Ee:return e=st(19,n,t,i),e.elementType=Ee,e.lanes=a,e;case fe:return Si(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case et:o=10;break e;case tt:o=9;break e;case nt:o=11;break e;case gt:o=14;break e;case He:o=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=st(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function sn(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function Si(e,t,n,r){return e=st(22,e,r,t),e.elementType=fe,e.lanes=n,e.stateNode={isHidden:!1},e}function yl(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function wl(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bd(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kl(e,t,n,r,i,a,o,s,u){return e=new bd(e,t,n,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=st(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(a),e}function Fd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nu(e){if(!e)return Dt;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Xo(e,n,t)}return t}function ju(e,t,n,r,i,a,o,s,u){return e=kl(n,r,!0,e,i,a,o,s,u),e.context=Nu(null),n=e.current,r=Ue(),i=Wt(n),a=bt(r,i),a.callback=t??null,Ht(n,a,i),e.current.lanes=i,Bn(e,i,r),Ge(e,r),e}function Ci(e,t,n,r){var i=t.current,a=Ue(),o=Wt(i);return n=Nu(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(i,t,o),e!==null&&(ht(e,i,o,a),ni(e,i,o)),o}function Ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nl(e,t){Su(e,t),(e=e.alternate)&&Su(e,t)}function zd(){return null}var Cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function jl(e){this._internalRoot=e}bi.prototype.render=jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));Ci(e,t,null,null)},bi.prototype.unmount=jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){Ci(null,e,null,null)}),t[Nt]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=oo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&co(e)}};function Sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function _d(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var p=Ei(o);a.call(p)}}var o=ju(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=o,e[Nt]=o.current,nr(e.nodeType===8?e.parentNode:e),an(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var p=Ei(u);s.call(p)}}var u=kl(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=u,e[Nt]=u.current,nr(e.nodeType===8?e.parentNode:e),an(function(){Ci(t,u,n,r)}),u}function zi(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var u=Ei(o);s.call(u)}}Ci(t,o,e,i)}else o=_d(n,t,e,i,r);return Ei(o)}ao=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hn(t.pendingLanes);n!==0&&(Ki(t,n|1),Ge(t,ge()),(V&6)===0&&(Pn=ge()+500,Ot()))}break;case 13:an(function(){var r=Et(e,1);if(r!==null){var i=Ue();ht(r,e,1,i)}}),Nl(e,1)}},Yi=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=Ue();ht(t,e,134217728,n)}Nl(e,134217728)}},lo=function(e){if(e.tag===13){var t=Wt(e),n=Et(e,t);if(n!==null){var r=Ue();ht(n,e,t,r)}Nl(e,t)}},oo=function(){return q},so=function(e,t){var n=q;try{return q=e,t()}finally{q=n}},Hi=function(e,t,n){switch(t){case"input":if(Ti(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Gr(r);if(!i)throw Error(h(90));Pl(r),Ti(r,i)}}}break;case"textarea":Il(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},Gl=hl,Ql=an;var Rd={usingClientEntryPoint:!1,Events:[ar,yn,Gr,$l,Wl,hl]},yr={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pd={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:B.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ql(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||zd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{br=_i.inject(Pd),vt=_i}catch{}}return Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rd,Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sl(t))throw Error(h(200));return Fd(e,t,null,n)},Qe.createRoot=function(e,t){if(!Sl(e))throw Error(h(299));var n=!1,r="",i=Cu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=kl(e,1,!1,null,null,n,!1,r,i),e[Nt]=t.current,nr(e.nodeType===8?e.parentNode:e),new jl(t)},Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=ql(t),e=e===null?null:e.stateNode,e},Qe.flushSync=function(e){return an(e)},Qe.hydrate=function(e,t,n){if(!Fi(t))throw Error(h(200));return zi(null,e,t,!0,n)},Qe.hydrateRoot=function(e,t,n){if(!Sl(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Cu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ju(t,null,e,1,n??null,i,!1,a,o),e[Nt]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new bi(t)},Qe.render=function(e,t,n){if(!Fi(t))throw Error(h(200));return zi(null,e,t,!1,n)},Qe.unmountComponentAtNode=function(e){if(!Fi(e))throw Error(h(40));return e._reactRootContainer?(an(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1},Qe.unstable_batchedUpdates=hl,Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fi(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return zi(e,t,n,!1,r)},Qe.version="18.3.1-next-f1338f8080-20240426",Qe}var Mu;function Hd(){if(Mu)return bl.exports;Mu=1;function F(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F)}catch(M){console.error(M)}}return F(),bl.exports=Ud(),bl.exports}var Lu;function Bd(){if(Lu)return Ri;Lu=1;var F=Hd();return Ri.createRoot=F.createRoot,Ri.hydrateRoot=F.hydrateRoot,Ri}var Vd=Bd();const $d=Au(Vd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=F=>F.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Iu=(...F)=>F.filter((M,h,Q)=>!!M&&M.trim()!==""&&Q.indexOf(M)===h).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=ze.forwardRef(({color:F="currentColor",size:M=24,strokeWidth:h=2,absoluteStrokeWidth:Q,className:I="",children:U,iconNode:ie,...se},O)=>ze.createElement("svg",{ref:O,...Gd,width:M,height:M,stroke:F,strokeWidth:Q?Number(h)*24/Number(M):h,className:Iu("lucide",I),...se},[...ie.map(([ke,he])=>ze.createElement(ke,he)),...Array.isArray(U)?U:[U]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=(F,M)=>{const h=ze.forwardRef(({className:Q,...I},U)=>ze.createElement(Qd,{ref:U,iconNode:M,className:Iu(`lucide-${Wd(F)}`,Q),...I}));return h.displayName=`${F}`,h};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Mn=te("ArrowRight",Kd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],_l=te("ArrowUpRight",Yd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],qd=te("Atom",Xd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Jd=te("Calendar",Zd);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],tm=te("ChevronLeft",em);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],rm=te("ChevronRight",nm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],am=te("Compass",im);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]],om=te("Dna",lm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],um=te("Download",sm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],dm=te("Facebook",cm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]],fm=te("HeartPulse",mm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],hm=te("House",pm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],vm=te("Instagram",gm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]],ym=te("Laptop",xm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],km=te("Library",wm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],jm=te("Linkedin",Nm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Cm=te("Mail",Sm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],bm=te("Menu",Em);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],zm=te("Phone",Fm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],Rm=te("Quote",_m);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]],Tm=te("Radiation",Pm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Lm=te("Star",Mm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Im=te("Trophy",Am);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Om=te("Twitter",Dm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Hm=te("X",Um);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Vm=te("Youtube",Bm);function $m(){const[F,M]=ze.useState(!1),[h,Q]=ze.useState(!1),[I,U]=ze.useState(0),ie=[{image:"/hero-campus.jpg",title:"Verdant 353-Acre Mangalagangothri Hilltop Campus",subtitle:"Scenic coastal hilltops fostering frontier multidisciplinary education since 1980"},{image:"/news-thumb-4.jpg",title:"Central Library & Digital Research Learning Resource Centre",subtitle:"Over 2.5 lakh volumes, e-journals, and high-speed digital research archives"},{image:"/news-thumb-2.jpg",title:"Advanced Laboratories & Microtron Atomic Research Facility",subtitle:"Nationally recognized collaborative radiation physics and materials research"},{image:"/news-featured.jpg",title:"Annual Convocation, Academic Honours & Cultural Heritage",subtitle:"Celebrating four decades of scholarly achievement and regional leadership"},{image:"/news-thumb-3.jpg",title:"Mangala Stadium, Sports Complex & Athletic Excellence",subtitle:"400m international synthetic track, indoor arenas, and championship sports"},{image:"/why-campus.jpg",title:"Vibrant Student Community & Residential Campus Life",subtitle:"Spacious modern hostels, active student societies, and inclusive campus life"},{image:"/coastal-campus.jpg",title:"CAREER Marine Research & Coastal Ecological Sanctuaries",subtitle:"Direct Arabian Sea field stations, estuarine biodiversity, and coastal science"}];ze.useEffect(()=>{const z=setInterval(()=>{U(B=>(B+1)%ie.length)},5500);return()=>clearInterval(z)},[ie.length]);const[se,O]=ze.useState(0),[ke,he]=ze.useState(!1),[K,Z]=ze.useState({years:0,pgDepts:0,colleges:0,acres:0,autonomous:0}),_e=ze.useRef(null),Ie=ze.useRef(!1);ze.useEffect(()=>{const z=()=>{M(window.scrollY>24)};return window.addEventListener("scroll",z,{passive:!0}),()=>window.removeEventListener("scroll",z)},[]),ze.useEffect(()=>{if(typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){Z({years:45,pgDepts:26,colleges:204,acres:353,autonomous:5}),he(!0);return}const B=new IntersectionObserver(([ae])=>{if(ae.isIntersecting&&!Ie.current){Ie.current=!0,he(!0);const me=1800,ue=performance.now(),Re=tt=>tt===1?1:1-Math.pow(2,-10*tt),De={years:45,pgDepts:26,colleges:204,acres:353,autonomous:5},et=tt=>{const nt=tt-ue,Pe=Math.min(nt/me,1),Ee=Re(Pe);Z({years:Math.round(De.years*Ee),pgDepts:Math.round(De.pgDepts*Ee),colleges:Math.round(De.colleges*Ee),acres:Math.round(De.acres*Ee),autonomous:Math.round(De.autonomous*Ee)}),Pe<1?requestAnimationFrame(et):Z(De)};requestAnimationFrame(et)}},{threshold:.25});return _e.current&&B.observe(_e.current),()=>B.disconnect()},[]);const H=[{id:"t1",quote:"The proximity to the Arabian Sea and the dedicated marine research stations provided field exposure that few institutions in the country can match.",name:"Pooja Hegde",role:"M.Sc. Marine Geology",batch:"Batch of 2023",rating:5,avatar:"PH"},{id:"t2",quote:"Mangalagangothri gave me both the critical perspective and practical studio training to transition directly into investigative broadcast media.",name:"Karthik Rao",role:"M.A. Journalism & Mass Comm",batch:"Batch of 2022",rating:5,avatar:"KR"},{id:"t3",quote:"Interdisciplinary faculty mentorship in materials science shaped my research methodology and secured a doctoral fellowship at BARC.",name:"Dr. Ananya Shenoy",role:"Ph.D in Materials Science",batch:"Doctoral Fellow",rating:5,avatar:"AS"},{id:"t4",quote:"The central library archives, high-speed computing labs, and corporate placement drives paved my way to a top multinational fintech career.",name:"Naveen D'Souza",role:"Master of Business Admin (MBA)",batch:"Batch of 2024",rating:5,avatar:"ND"},{id:"t5",quote:"World-class athletics synthetic track and specialized sports science faculties enabled me to represent Karnataka at national university games.",name:"Sahana Acharya",role:"Master of Physical Education",batch:"Batch of 2023",rating:5,avatar:"SA"}],Y=[{id:"arts",title:"Faculty of Arts",category:"HUMANITIES & SOCIAL SCIENCES",deptCount:"8 Departments",image:"/faculty-arts.jpg",color:"#6B3E26",badgeBg:"rgba(107, 62, 38, 0.9)",desc:"Nurturing critical inquiry, literary traditions, regional historiography, and contemporary socio-cultural dialogues.",link:"#faculty-arts",programmes:["English Language & Literature","Kannada & Regional Heritage","History & Archaeology","Economics & Development Studies","Mass Communication & Journalism","Sociology & Social Work (MSW)"]},{id:"science",title:"Science & Technology",category:"PHYSICAL & LIFE SCIENCES",deptCount:"17 Departments",image:"/faculty-science.jpg",color:"#0F4C81",badgeBg:"rgba(15, 76, 129, 0.9)",desc:"Pioneering frontier laboratory research in materials science, biosciences, atomic energy, and computing algorithms.",link:"#faculty-science",programmes:["Physics & Materials Science","Applied Chemistry & Biochemistry","Biosciences & Biotechnology","Computer Science (M.Sc. & MCA)","Mathematics & Statistics","Electronics & Applied Physics"]},{id:"commerce",title:"Faculty of Commerce",category:"MANAGEMENT & CORPORATE STUDIES",deptCount:"2 Departments",image:"/faculty-commerce.jpg",color:"#1E5F74",badgeBg:"rgba(30, 95, 116, 0.9)",desc:"Cultivating ethical business leadership, strategic managerial competence, and modern fintech expertise.",link:"#faculty-commerce",programmes:["Master of Commerce (M.Com)","Master of Business Admin (MBA)","Finance & Banking Technology","International Trade & Logistics","Human Resource Management","Doctoral Research in Commerce"]},{id:"education",title:"Faculty of Education",category:"PEDAGOGY & SPORTS SCIENCE",deptCount:"2 Departments",image:"/faculty-education.jpg",color:"#7D4E57",badgeBg:"rgba(125, 78, 87, 0.9)",desc:"Advancing pedagogical methodologies, educational psychology, physical education, and athletic performance sciences.",link:"#faculty-education",programmes:["Master of Education (M.Ed)","Physical Education (M.P.Ed)","Sports Science & Biomechanics","Curriculum Design & Evaluation","Educational Technology Lab","Athletic Performance Centre"]},{id:"marine",title:"Marine & Coastal Studies",category:"OCEANOGRAPHY & EARTH SCIENCES",deptCount:"3 Research Units",image:"/faculty-marine.jpg",color:"#0E5A6A",badgeBg:"rgba(14, 90, 106, 0.9)",desc:"Leveraging coastal Karnataka's shoreline for frontier oceanographic explorations, marine geology, and coastal ecosystem preservation.",link:"#faculty-marine",programmes:["Marine Geology & Oceanography","Coastal Geomorphology & Sediments","Marine Geophysics & Bathymetry","Arabian Sea Ecology Station","Coastal Zone Monitoring Unit"]}],Ce={category:"CONVOCATION & DISTINCTION",date:"SEP 18, 2026",title:"44th Annual Grand Convocation Ceremony Announced at Mangalagangothri",desc:"Hon'ble Chancellor and eminent scholars will confer doctoral degrees, academic gold medals, and honorary doctorates to distinguished achievers across 26 departments.",image:"/news-featured.jpg",link:"#convocation-2026"},Je=[{id:"news-1",date:"SEP 15, 2026",category:"Admissions",title:"Ph.D Entrance Examination 2026 Notification & Syllabus Matrix",desc:"Detailed schedule, vacancy matrix across 26 PG departments, and syllabus guidelines.",image:"/news-thumb-1.jpg",link:"#phd-admission"},{id:"news-2",date:"SEP 11, 2026",category:"Research",title:"BRNS & DAE Grant ₹4.8 Cr Sanctioned for Microtron Radiation Facility",desc:"Advanced electron accelerator laboratory to expand research in materials modification and polymer physics.",image:"/news-thumb-2.jpg",link:"#microtron-grant"},{id:"news-3",date:"SEP 08, 2026",category:"Examinations",title:"Postgraduate Common Entrance (PGCET) Calendar & Verification",desc:"Revised schedule for centralized university counseling and mandatory document verification.",image:"/news-thumb-1.jpg",link:"#pgcet-schedule"},{id:"news-4",date:"SEP 02, 2026",category:"Sports & Athletics",title:"All India Inter-University Athletics Championship Selection Trials",desc:"Mangalore University athletic contingent trials to be held at the 400m synthetic track stadium.",image:"/news-thumb-3.jpg",link:"#athletics-trials"},{id:"news-5",date:"AUG 28, 2026",category:"Academic Library",title:"e-ShodhSindhu & INFLIBNET Digital Journal Portal Expanded for Scholars",desc:"Access to over 15,000+ peer-reviewed international journals enabled across campus Wi-Fi network.",image:"/news-thumb-4.jpg",link:"#library-portal"},{id:"news-6",date:"AUG 14, 2026",category:"Official Circular",title:"University Prospectus & Academic Calendar 2026–2027 Handbook Released",desc:"Comprehensive handbook detailing CBCS curriculum regulations, term dates, and examination statutes.",image:"/campus-heritage.jpg",link:"#academic-handbook"}];return l.jsxs("div",{className:"mu-page",children:[l.jsx("div",{className:"mu-utility-bar",children:l.jsxs("div",{className:"mu-container mu-utility-content",children:[l.jsxs("div",{className:"mu-utility-links",children:[l.jsx("a",{href:"#admissions",className:"mu-utility-link",children:"Apply Online"}),l.jsx("span",{className:"mu-utility-divider",children:"|"}),l.jsx("a",{href:"#portal",className:"mu-utility-link",children:"Student Portal (UUCMS)"}),l.jsx("span",{className:"mu-utility-divider",children:"|"}),l.jsx("a",{href:"#alumni",className:"mu-utility-link",children:"Alumni Network"}),l.jsx("span",{className:"mu-utility-divider",children:"|"}),l.jsx("a",{href:"#mail",className:"mu-utility-link",children:"Webmail Server"}),l.jsx("span",{className:"mu-utility-divider",children:"|"}),l.jsx("span",{className:"mu-utility-lang",children:"ಕನ್ನಡ"})]}),l.jsxs("div",{className:"mu-utility-socials",children:[l.jsx("a",{href:"https://facebook.com","aria-label":"Facebook",className:"mu-social-icon",children:l.jsx(dm,{size:13})}),l.jsx("a",{href:"https://twitter.com","aria-label":"Twitter/X",className:"mu-social-icon",children:l.jsx(Om,{size:13})}),l.jsx("a",{href:"https://linkedin.com","aria-label":"LinkedIn",className:"mu-social-icon",children:l.jsx(jm,{size:13})}),l.jsx("a",{href:"https://youtube.com","aria-label":"YouTube",className:"mu-social-icon",children:l.jsx(Vm,{size:13})}),l.jsx("a",{href:"https://instagram.com","aria-label":"Instagram",className:"mu-social-icon",children:l.jsx(vm,{size:13})})]})]})}),l.jsxs("header",{className:`mu-header ${F?"mu-header-scrolled":""}`,children:[l.jsxs("div",{className:"mu-container mu-header-content",children:[l.jsx("a",{href:"#",className:"mu-brand","aria-label":"Mangalore University Home",children:l.jsx("img",{src:"/mu-logo.png",alt:"Mangalore University — ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾನಿಲಯ",className:"mu-brand-logo-img"})}),l.jsxs("nav",{className:"mu-nav-desktop","aria-label":"Main Navigation",children:[l.jsx("a",{href:"#about",className:"mu-nav-link",children:"About"}),l.jsx("a",{href:"#academics",className:"mu-nav-link",children:"Academics"}),l.jsx("a",{href:"#infrastructure",className:"mu-nav-link",children:"Campus"}),l.jsx("a",{href:"#research",className:"mu-nav-link",children:"Research Centres"}),l.jsx("a",{href:"#placement",className:"mu-nav-link",children:"Placements"}),l.jsx("a",{href:"#news",className:"mu-nav-link",children:"Notices"}),l.jsx("a",{href:"#admissions",className:"mu-btn mu-btn-nav",children:"Apply Now"})]}),l.jsx("button",{className:"mu-mobile-toggle",onClick:()=>Q(!h),"aria-label":"Toggle Navigation Menu","aria-expanded":h,children:h?l.jsx(Hm,{size:24}):l.jsx(bm,{size:24})})]}),h&&l.jsx("div",{className:"mu-mobile-drawer",children:l.jsxs("div",{className:"mu-container mu-mobile-drawer-content",children:[l.jsx("a",{href:"#about",className:"mu-mobile-link",onClick:()=>Q(!1),children:"About & VC Message"}),l.jsx("a",{href:"#academics",className:"mu-mobile-link",onClick:()=>Q(!1),children:"Academics & Degrees"}),l.jsx("a",{href:"#infrastructure",className:"mu-mobile-link",onClick:()=>Q(!1),children:"Campus & Infrastructure"}),l.jsx("a",{href:"#research",className:"mu-mobile-link",onClick:()=>Q(!1),children:"National Research Centres"}),l.jsx("a",{href:"#coastal",className:"mu-mobile-link",onClick:()=>Q(!1),children:"Coastal Identity"}),l.jsx("a",{href:"#placement",className:"mu-mobile-link",onClick:()=>Q(!1),children:"Placement & Career Ecosystem"}),l.jsx("a",{href:"#news",className:"mu-mobile-link",onClick:()=>Q(!1),children:"News & Circulars"}),l.jsx("div",{className:"mu-mobile-drawer-actions",children:l.jsxs("a",{href:"#admissions",className:"mu-btn mu-btn-gold",style:{width:"100%"},onClick:()=>Q(!1),children:["Apply for Admission ",l.jsx(Mn,{size:16})]})})]})})]}),l.jsxs("section",{className:"mu-hero-fullscreen","aria-label":"Mangalore University Campus Showcase",children:[l.jsxs("div",{className:"mu-hero-carousel-bg",children:[ie.map((z,B)=>l.jsx("div",{className:`mu-hero-carousel-slide ${B===I?"mu-hero-slide-active":""}`,"aria-hidden":B!==I,children:l.jsx("img",{src:z.image,alt:z.title,className:"mu-hero-carousel-img"})},z.image)),l.jsx("div",{className:"mu-hero-fullscreen-overlay"})]}),l.jsx("div",{className:"mu-container mu-hero-fullscreen-content",children:l.jsxs("div",{className:"mu-hero-text-panel",children:[l.jsxs("div",{className:"mu-hero-badge-row",children:[l.jsx("span",{className:"mu-hero-pill-tag",children:"ACCREDITED GRADE 'A' BY NAAC"}),l.jsx("span",{className:"mu-hero-pill-divider",children:"•"}),l.jsx("span",{className:"mu-hero-pill-estd",children:"ESTD. 1980"})]}),l.jsx("h1",{className:"mu-hero-fullscreen-headline",children:"Excellence in Higher Learning & Coastal Research"}),l.jsx("p",{className:"mu-hero-fullscreen-subtext",children:"Chartered across 353 hilltop acres, fostering 26 postgraduate departments and frontier atomic research facilities."})]})}),l.jsx("div",{className:"mu-ticker-band",children:l.jsxs("div",{className:"mu-container mu-ticker-container",children:[l.jsxs("div",{className:"mu-ticker-badge",children:[l.jsx("span",{className:"mu-ticker-dot"}),l.jsx("span",{className:"mu-ticker-badge-text",children:"FLASH NEWS"})]}),l.jsx("div",{className:"mu-ticker-track",children:l.jsxs("div",{className:"mu-ticker-content",children:[l.jsxs("a",{href:"#news",className:"mu-ticker-item",children:[l.jsx("span",{className:"mu-ticker-date",children:"NEW"}),"Ph.D Entrance Examination 2026–27 notification and center guidelines published."]}),l.jsx("span",{className:"mu-ticker-sep",children:"•"}),l.jsxs("a",{href:"#news",className:"mu-ticker-item",children:[l.jsx("span",{className:"mu-ticker-date",children:"ANNOUNCEMENT"}),"Postgraduate Common Entrance Test (PGCET) centralized counselling schedule updated."]}),l.jsx("span",{className:"mu-ticker-sep",children:"•"}),l.jsxs("a",{href:"#news",className:"mu-ticker-item",children:[l.jsx("span",{className:"mu-ticker-date",children:"EXAM"}),"Last date for submission of revaluation forms for Even Semester extended."]}),l.jsx("span",{className:"mu-ticker-sep",children:"•"}),l.jsxs("a",{href:"#news",className:"mu-ticker-item",children:[l.jsx("span",{className:"mu-ticker-date",children:"ACADEMIC"}),"Official University Prospectus & CBCS Calendar 2026–2027 released."]}),l.jsx("span",{className:"mu-ticker-sep",children:"•"}),l.jsxs("a",{href:"#news",className:"mu-ticker-item",children:[l.jsx("span",{className:"mu-ticker-date",children:"ADMISSION"}),"Karnataka UUCMS Portal open for 1st Semester PG/UG applications."]})]})})]})})]}),l.jsx("section",{id:"about",className:"mu-section mu-bg-paper",children:l.jsx("div",{className:"mu-container",children:l.jsxs("div",{className:"mu-about-grid",children:[l.jsxs("div",{className:"mu-about-text",children:[l.jsx("span",{className:"mu-eyebrow",children:"ABOUT THE UNIVERSITY"}),l.jsx("h2",{className:"mu-heading",children:"From a postgraduate centre to a premier coastal institution"}),l.jsx("p",{className:"mu-about-p",children:"Mangalore University was established in 1980, growing out of a modest postgraduate centre of the University of Mysore at Konaje which originally commenced with just three departments."}),l.jsx("p",{className:"mu-about-p",children:"Today, the university encompasses 26 postgraduate departments on its main campus, offering advanced interdisciplinary research, frontier laboratory infrastructure, and comprehensive academic jurisdiction across Dakshina Kannada, Udupi, and Kodagu districts."}),l.jsxs("a",{href:"#history",className:"mu-link-arrow",style:{marginTop:"8px"},children:["Read our full history & vision ",l.jsx(Mn,{size:15})]})]}),l.jsx("div",{className:"mu-about-media",children:l.jsxs("div",{className:"mu-about-image-wrapper",children:[l.jsx("img",{src:"/campus-heritage.jpg",alt:"Mangalore University Heritage & Academic Library",className:"mu-about-img"}),l.jsxs("div",{className:"mu-about-milestone",children:[l.jsx("span",{className:"mu-milestone-year",children:"1980"}),l.jsx("span",{className:"mu-milestone-text",children:"Chartered Independent University"})]})]})})]})})}),l.jsx("section",{id:"vc-message",className:"mu-vc-editorial-section",children:l.jsx("div",{className:"mu-container",children:l.jsxs("div",{className:"mu-vc-editorial-grid",children:[l.jsxs("div",{className:"mu-vc-portrait-col",children:[l.jsxs("div",{className:"mu-vc-cutout-frame",children:[l.jsx("img",{src:"/vc-portrait.png",alt:"Prof. P. L. Dharma, Vice-Chancellor of Mangalore University",className:"mu-vc-cutout-img"}),l.jsx("div",{className:"mu-vc-cutout-bottom-fade"})]}),l.jsxs("div",{className:"mu-vc-signoff-block",children:[l.jsx("h4",{className:"mu-vc-signoff-name",children:"Prof. P. L. Dharma"}),l.jsx("span",{className:"mu-vc-signoff-title",children:"Vice-Chancellor"}),l.jsx("span",{className:"mu-vc-signoff-inst",children:"Mangalore University"})]})]}),l.jsxs("div",{className:"mu-vc-message-col",children:[l.jsxs("div",{className:"mu-vc-header-row",children:[l.jsx("span",{className:"mu-eyebrow mu-vc-eyebrow-accent",children:"VICE-CHANCELLOR'S MESSAGE"}),l.jsx(Rm,{size:32,className:"mu-vc-editorial-quote-mark"})]}),l.jsx("h3",{className:"mu-vc-editorial-lead",children:"“Fostering global academic competence anchored in cultural heritage, ethical rigor, and frontier scientific discovery.”"}),l.jsxs("div",{className:"mu-vc-editorial-body",children:[l.jsx("p",{children:"Mangalore University stands at the confluence of rich coastal intellectual traditions and modern research innovation. Over four decades, our scholars and faculty have driven impactful advancements across sciences, humanities, management, and oceanography."}),l.jsx("p",{children:"We are committed to nurturing an inclusive, forward-looking academic ecosystem where curious minds explore multidisciplinary boundaries, pioneer sustainable solutions, and contribute meaningfully to society and the nation."})]})]})]})})}),l.jsx("section",{ref:_e,className:"mu-section-tight mu-bg-mist mu-stats-section",children:l.jsx("div",{className:"mu-container",children:l.jsxs("div",{className:"mu-stats-grid",children:[l.jsxs("div",{className:"mu-stat-card",children:[l.jsxs("div",{className:"mu-stat-number",children:[K.years,"+"]}),l.jsx("div",{className:"mu-stat-label",children:"Years of Academic Excellence"})]}),l.jsxs("div",{className:"mu-stat-card",children:[l.jsx("div",{className:"mu-stat-number",children:K.pgDepts}),l.jsx("div",{className:"mu-stat-label",children:"Postgraduate Departments"})]}),l.jsxs("div",{className:"mu-stat-card",children:[l.jsx("div",{className:"mu-stat-number",children:K.colleges}),l.jsx("div",{className:"mu-stat-label",children:"Affiliated Colleges"})]}),l.jsxs("div",{className:"mu-stat-card",children:[l.jsx("div",{className:"mu-stat-number",children:K.acres}),l.jsx("div",{className:"mu-stat-label",children:"Acres of Verdant Campus"})]}),l.jsxs("div",{className:"mu-stat-card mu-stat-card-last",children:[l.jsx("div",{className:"mu-stat-number",children:K.autonomous}),l.jsx("div",{className:"mu-stat-label",children:"Autonomous Colleges"})]})]})})}),l.jsx("section",{id:"academics",className:"mu-section mu-bg-paper mu-faculty-section",children:l.jsxs("div",{className:"mu-container",children:[l.jsx("div",{className:"mu-section-header",children:l.jsxs("div",{children:[l.jsx("span",{className:"mu-eyebrow",children:"ACADEMIC EXCELLENCE"}),l.jsx("h2",{className:"mu-heading",children:"Academics, Faculties & Degrees"})]})}),l.jsx("div",{className:"mu-faculty-grid",children:Y.map(z=>l.jsxs("div",{className:"mu-faculty-hcard",style:{"--accent-color":z.color},children:[l.jsxs("div",{className:"mu-hcard-image-wrap",children:[l.jsx("img",{src:z.image,alt:z.title,className:"mu-hcard-img"}),l.jsx("div",{className:"mu-hcard-top-gradient"}),l.jsx("span",{className:"mu-hcard-badge",style:{backgroundColor:z.badgeBg},children:z.deptCount})]}),l.jsxs("div",{className:"mu-hcard-content",children:[l.jsx("span",{className:"mu-hcard-category",children:z.category}),l.jsx("h3",{className:"mu-hcard-title",children:z.title}),l.jsx("p",{className:"mu-hcard-desc",children:z.desc})]}),l.jsxs("div",{className:"mu-hcard-hover-overlay",children:[l.jsxs("div",{className:"mu-hcard-hover-header",children:[l.jsx("span",{className:"mu-hcard-hover-category",children:z.category}),l.jsx("h3",{className:"mu-hcard-hover-title",children:z.title})]}),l.jsx("p",{className:"mu-hcard-hover-desc",children:z.desc}),l.jsxs("div",{className:"mu-hcard-hover-progs",children:[l.jsx("span",{className:"mu-hcard-prog-label",children:"Key Departments & Programmes:"}),l.jsx("ul",{className:"mu-hcard-prog-list",children:z.programmes.map((B,ae)=>l.jsxs("li",{children:[l.jsx("span",{className:"mu-hcard-prog-bullet",children:"•"}),B]},ae))})]}),l.jsxs("a",{href:z.link,className:"mu-hcard-hover-link",children:["Explore Programmes ",l.jsx(_l,{size:16})]})]})]},z.id))})]})}),l.jsx("section",{className:"mu-section mu-bg-mist mu-why-study-section",children:l.jsxs("div",{className:"mu-container",children:[l.jsxs("div",{className:"mu-section-header-center",children:[l.jsx("span",{className:"mu-eyebrow",children:"INSTITUTIONAL DISTINCTION"}),l.jsx("h2",{className:"mu-heading",children:"Why Study at Mangalore University"})]}),l.jsxs("div",{className:"mu-why-asym-grid",children:[l.jsxs("div",{className:"mu-why-card mu-why-card-tall",children:[l.jsxs("div",{className:"mu-why-image-wrapper",children:[l.jsx("img",{src:"/why-academic.jpg",alt:"Academic Excellence & Choice Based Credit System at Mangalore University",className:"mu-why-img"}),l.jsx("div",{className:"mu-why-gradient"})]}),l.jsxs("div",{className:"mu-why-content-panel",children:[l.jsx("span",{className:"mu-why-eyebrow",children:"CURRICULUM & PEDAGOGY"}),l.jsx("h3",{className:"mu-why-title",children:"Academic Excellence & CBCS Flexibility"}),l.jsx("p",{className:"mu-why-desc",children:"Dynamic Choice Based Credit System offering flexibility across disciplines, industry-relevant syllabi, and interdisciplinary electives mentored by senior scholars."})]}),l.jsxs("div",{className:"mu-why-hover-overlay",children:[l.jsx("span",{className:"mu-why-hover-badge",children:"ACADEMIC RIGOR"}),l.jsx("h3",{className:"mu-why-hover-title",children:"Academic Excellence & CBCS Flexibility"}),l.jsx("p",{className:"mu-why-hover-desc",children:"With 26 postgraduate departments and 204 affiliated institutions, Mangalore University pairs time-tested academic foundations with cutting-edge semester choice credits, seminars, and comprehensive continuous assessment."}),l.jsxs("div",{className:"mu-why-hover-metric",children:[l.jsx("span",{className:"mu-why-metric-val",children:"26 PG Departments"}),l.jsx("span",{className:"mu-why-metric-lbl",children:"Under CBCS Framework"})]})]})]}),l.jsxs("div",{className:"mu-why-right-stack",children:[l.jsxs("div",{className:"mu-why-card mu-why-card-wide",children:[l.jsxs("div",{className:"mu-why-image-wrapper",children:[l.jsx("img",{src:"/why-research.jpg",alt:"Frontier Radiation & Marine Research Facilities",className:"mu-why-img"}),l.jsx("div",{className:"mu-why-gradient"})]}),l.jsxs("div",{className:"mu-why-content-panel",children:[l.jsx("span",{className:"mu-why-eyebrow",children:"DISCOVERY & INNOVATION"}),l.jsx("h3",{className:"mu-why-title",children:"Frontier Research & National Centres"}),l.jsx("p",{className:"mu-why-desc",children:"High-impact scientific research funded by DST, DBT, BRNS, and AERB with dedicated Microtron particle accelerator, CARRT, and marine laboratories."})]}),l.jsxs("div",{className:"mu-why-hover-overlay",children:[l.jsx("span",{className:"mu-why-hover-badge",children:"NATIONAL IMPACT"}),l.jsx("h3",{className:"mu-why-hover-title",children:"Frontier Research & National Centres"}),l.jsx("p",{className:"mu-why-hover-desc",children:"Home to pioneering nuclear research installations, radiation technology applications, and coastal oceanographic stations conducting sponsored investigations."}),l.jsxs("div",{className:"mu-why-hover-metric",children:[l.jsx("span",{className:"mu-why-metric-val",children:"₹40+ Cr Grants"}),l.jsx("span",{className:"mu-why-metric-lbl",children:"From DST, BRNS & UGC"})]})]})]}),l.jsxs("div",{className:"mu-why-card mu-why-card-wide",children:[l.jsxs("div",{className:"mu-why-image-wrapper",children:[l.jsx("img",{src:"/why-campus.jpg",alt:"Student Belonging & Coastal Hilltop Campus Life",className:"mu-why-img"}),l.jsx("div",{className:"mu-why-gradient"})]}),l.jsxs("div",{className:"mu-why-content-panel",children:[l.jsx("span",{className:"mu-why-eyebrow",children:"CAMPUS & ECOSYSTEM"}),l.jsx("h3",{className:"mu-why-title",children:"Vibrant Coastal Hilltop Community"}),l.jsx("p",{className:"mu-why-desc",children:"A secure 353-acre hilltop campus with panoramic vistas of the Western Ghats and Arabian Sea, active cultural societies, and athletic sports pavilions."})]}),l.jsxs("div",{className:"mu-why-hover-overlay",children:[l.jsx("span",{className:"mu-why-hover-badge",children:"STUDENT LIFE"}),l.jsx("h3",{className:"mu-why-hover-title",children:"Vibrant Coastal Hilltop Community"}),l.jsx("p",{className:"mu-why-hover-desc",children:"An inspiring environment where academic life intersects with botanical gardens, Olympic-standard athletics, modernized residential hostels, and student welfare councils."}),l.jsxs("div",{className:"mu-why-hover-metric",children:[l.jsx("span",{className:"mu-why-metric-val",children:"353 Acres"}),l.jsx("span",{className:"mu-why-metric-lbl",children:"Verdant Hilltop Canopy"})]})]})]})]})]})]})}),l.jsx("section",{id:"infrastructure",className:"mu-section-compact mu-bg-paper mu-infra-editorial-section",children:l.jsxs("div",{className:"mu-container",children:[l.jsxs("div",{className:"mu-infra-header-row",children:[l.jsxs("div",{children:[l.jsx("span",{className:"mu-eyebrow",children:"WORLD-CLASS AMENITIES"}),l.jsx("h2",{className:"mu-heading-tight",children:"Campus & Infrastructure"})]}),l.jsx("span",{className:"mu-infra-tagline",children:"State-of-the-art facilities designed for academic excellence, athletics, and vibrant student living."})]}),l.jsxs("div",{className:"mu-infra-bento-grid",children:[l.jsxs("div",{className:"mu-infra-bento-card mu-infra-bento-hero",children:[l.jsxs("div",{className:"mu-infra-img-wrap",children:[l.jsx("img",{src:"/news-thumb-4.jpg",alt:"Central Library & Knowledge Hub",className:"mu-infra-img"}),l.jsx("div",{className:"mu-infra-gradient-base"})]}),l.jsxs("div",{className:"mu-infra-content",children:[l.jsxs("div",{className:"mu-infra-tag-row",children:[l.jsx("span",{className:"mu-infra-badge",children:"CAMPUS HEART"}),l.jsx(km,{size:16,className:"mu-infra-badge-icon"})]}),l.jsx("h3",{className:"mu-infra-title",children:"Central Library & Knowledge Hub"}),l.jsx("p",{className:"mu-infra-desc",children:"250,000+ volumes, 300+ print journals, INFLIBNET access, and 24/7 digital reading halls."})]}),l.jsxs("div",{className:"mu-infra-hover-panel",children:[l.jsx("span",{className:"mu-infra-hover-badge",children:"ACADEMIC RESOURCE"}),l.jsx("h3",{className:"mu-infra-hover-title",children:"Central Library & Digital Hub"}),l.jsx("p",{className:"mu-infra-hover-desc",children:"RFID automation, centralized OPAC search, doctoral research cubicles, and national library network access."}),l.jsxs("div",{className:"mu-infra-hover-metric",children:[l.jsx("span",{className:"mu-infra-metric-val",children:"250K+ Volumes"}),l.jsx("span",{className:"mu-infra-metric-lbl",children:"24/7 Scholar Access"})]})]})]}),l.jsxs("div",{className:"mu-infra-bento-right",children:[l.jsxs("div",{className:"mu-infra-bento-card mu-infra-card-sports",children:[l.jsxs("div",{className:"mu-infra-img-wrap",children:[l.jsx("img",{src:"/news-thumb-3.jpg",alt:"Sports Complex & Olympic Stadium",className:"mu-infra-img"}),l.jsx("div",{className:"mu-infra-gradient-base"})]}),l.jsxs("div",{className:"mu-infra-content",children:[l.jsxs("div",{className:"mu-infra-tag-row",children:[l.jsx("span",{className:"mu-infra-badge",children:"ATHLETICS"}),l.jsx(Im,{size:15,className:"mu-infra-badge-icon"})]}),l.jsx("h3",{className:"mu-infra-title",children:"Sports Complex & Stadium"}),l.jsx("p",{className:"mu-infra-desc",children:"400m synthetic athletic track, indoor pavilion, gymnasium, and tennis courts."})]}),l.jsxs("div",{className:"mu-infra-hover-panel",children:[l.jsx("span",{className:"mu-infra-hover-badge",children:"OLYMPIC STANDARD"}),l.jsx("h3",{className:"mu-infra-hover-title",children:"Sports Complex & Stadium"}),l.jsx("p",{className:"mu-infra-hover-desc",children:"Home to national champion athletes, equipped with synthetic tracks and floodlit arenas."}),l.jsxs("div",{className:"mu-infra-hover-metric",children:[l.jsx("span",{className:"mu-infra-metric-val",children:"400m Synthetic"}),l.jsx("span",{className:"mu-infra-metric-lbl",children:"Multi-Sport Pavilion"})]})]})]}),l.jsxs("div",{className:"mu-infra-bento-card mu-infra-card-hostels",children:[l.jsxs("div",{className:"mu-infra-img-wrap",children:[l.jsx("img",{src:"/faculty-arts.jpg",alt:"Hostels & Residential Life",className:"mu-infra-img"}),l.jsx("div",{className:"mu-infra-gradient-base"})]}),l.jsxs("div",{className:"mu-infra-content",children:[l.jsxs("div",{className:"mu-infra-tag-row",children:[l.jsx("span",{className:"mu-infra-badge",children:"RESIDENTIAL"}),l.jsx(hm,{size:15,className:"mu-infra-badge-icon"})]}),l.jsx("h3",{className:"mu-infra-title",children:"Hostels & Living"}),l.jsx("p",{className:"mu-infra-desc",children:"Separate halls for men, women, and research scholars with Wi-Fi."})]}),l.jsxs("div",{className:"mu-infra-hover-panel",children:[l.jsx("span",{className:"mu-infra-hover-badge",children:"STUDENT LIVING"}),l.jsx("h3",{className:"mu-infra-hover-title",children:"Hostels & Living"}),l.jsx("p",{className:"mu-infra-hover-desc",children:"Hygienic dining halls, solar water heating, recreation rooms, and 24/7 security."}),l.jsxs("div",{className:"mu-infra-hover-metric",children:[l.jsx("span",{className:"mu-infra-metric-val",children:"6 Halls"}),l.jsx("span",{className:"mu-infra-metric-lbl",children:"24/7 Wi-Fi & Security"})]})]})]}),l.jsxs("div",{className:"mu-infra-bento-card mu-infra-card-ict",children:[l.jsxs("div",{className:"mu-infra-img-wrap",children:[l.jsx("img",{src:"/news-thumb-1.jpg",alt:"ICT & Computing Centre",className:"mu-infra-img"}),l.jsx("div",{className:"mu-infra-gradient-base"})]}),l.jsxs("div",{className:"mu-infra-content",children:[l.jsxs("div",{className:"mu-infra-tag-row",children:[l.jsx("span",{className:"mu-infra-badge",children:"TECH"}),l.jsx(ym,{size:15,className:"mu-infra-badge-icon"})]}),l.jsx("h3",{className:"mu-infra-title",children:"ICT Centre"}),l.jsx("p",{className:"mu-infra-desc",children:"Campus optical fiber and HPC data facilities."})]}),l.jsxs("div",{className:"mu-infra-hover-panel",children:[l.jsx("span",{className:"mu-infra-hover-badge",children:"DATA & NETWORKS"}),l.jsx("h3",{className:"mu-infra-hover-title",children:"ICT & Computing Centre"}),l.jsx("p",{className:"mu-infra-hover-desc",children:"1 Gbps dedicated NKN optical connectivity powering smart laboratories and campus servers."}),l.jsxs("div",{className:"mu-infra-hover-metric",children:[l.jsx("span",{className:"mu-infra-metric-val",children:"1 Gbps NKN"}),l.jsx("span",{className:"mu-infra-metric-lbl",children:"HPC Data Core"})]})]})]}),l.jsxs("div",{className:"mu-infra-bento-card mu-infra-card-health",children:[l.jsxs("div",{className:"mu-infra-img-wrap",children:[l.jsx("img",{src:"/faculty-science.jpg",alt:"University Health Centre",className:"mu-infra-img"}),l.jsx("div",{className:"mu-infra-gradient-base"})]}),l.jsxs("div",{className:"mu-infra-content",children:[l.jsxs("div",{className:"mu-infra-tag-row",children:[l.jsx("span",{className:"mu-infra-badge",children:"WELLNESS"}),l.jsx(fm,{size:15,className:"mu-infra-badge-icon"})]}),l.jsx("h3",{className:"mu-infra-title",children:"Health Centre"}),l.jsx("p",{className:"mu-infra-desc",children:"Primary care, 24/7 emergency, and diagnostics."})]}),l.jsxs("div",{className:"mu-infra-hover-panel",children:[l.jsx("span",{className:"mu-infra-hover-badge",children:"24/7 HEALTHCARE"}),l.jsx("h3",{className:"mu-infra-hover-title",children:"Health Centre"}),l.jsx("p",{className:"mu-infra-hover-desc",children:"Resident medical officers, diagnostic labs, pharmacy, and ambulance service."}),l.jsxs("div",{className:"mu-infra-hover-metric",children:[l.jsx("span",{className:"mu-infra-metric-val",children:"24/7 Care"}),l.jsx("span",{className:"mu-infra-metric-lbl",children:"Emergency & Pharmacy"})]})]})]}),l.jsxs("div",{className:"mu-infra-bento-card mu-infra-card-botanical",children:[l.jsxs("div",{className:"mu-infra-img-wrap",children:[l.jsx("img",{src:"/why-campus.jpg",alt:"Botanical Garden & Arboretum",className:"mu-infra-img"}),l.jsx("div",{className:"mu-infra-gradient-base"})]}),l.jsxs("div",{className:"mu-infra-content",children:[l.jsxs("div",{className:"mu-infra-tag-row",children:[l.jsx("span",{className:"mu-infra-badge",children:"FLORA"}),l.jsx(am,{size:15,className:"mu-infra-badge-icon"})]}),l.jsx("h3",{className:"mu-infra-title",children:"Botanical Garden"}),l.jsx("p",{className:"mu-infra-desc",children:"Western Ghats flora, arboretum, and solar park."})]}),l.jsxs("div",{className:"mu-infra-hover-panel",children:[l.jsx("span",{className:"mu-infra-hover-badge",children:"BIODIVERSITY"}),l.jsx("h3",{className:"mu-infra-hover-title",children:"Botanical Garden"}),l.jsx("p",{className:"mu-infra-hover-desc",children:"Living repository conserving endemic Western Ghats flora and medicinal plants."}),l.jsxs("div",{className:"mu-infra-hover-metric",children:[l.jsx("span",{className:"mu-infra-metric-val",children:"353 Acres"}),l.jsx("span",{className:"mu-infra-metric-lbl",children:"Green Canopy"})]})]})]})]})]})]})}),l.jsx("section",{id:"research",className:"mu-section mu-bg-mist mu-research-section",children:l.jsxs("div",{className:"mu-container",children:[l.jsx("div",{className:"mu-section-header",children:l.jsxs("div",{children:[l.jsx("span",{className:"mu-eyebrow",children:"PIONEERING DISCOVERY"}),l.jsx("h2",{className:"mu-heading",children:"Nationally Recognized Research Centres"})]})}),l.jsx("div",{className:"mu-research-scroll-wrapper",children:l.jsxs("div",{className:"mu-research-card-grid",children:[l.jsxs("div",{className:"mu-research-image-card",children:[l.jsxs("div",{className:"mu-res-img-wrap",children:[l.jsx("img",{src:"/news-thumb-2.jpg",alt:"Microtron Centre — Advanced Electron Accelerator",className:"mu-res-img"}),l.jsx("div",{className:"mu-res-gradient-base"})]}),l.jsxs("div",{className:"mu-res-content",children:[l.jsxs("div",{className:"mu-res-meta",children:[l.jsx("span",{className:"mu-res-badge",children:"DAE / BRNS RECOGNIZED"}),l.jsx("div",{className:"mu-res-icon-pill",children:l.jsx(Tm,{size:15})})]}),l.jsx("h3",{className:"mu-res-title",children:"Microtron Centre"}),l.jsx("p",{className:"mu-res-desc",children:"Advanced electron accelerator facility for radiation physics, polymer modification, and nuclear research."})]}),l.jsxs("div",{className:"mu-res-hover-panel",children:[l.jsx("span",{className:"mu-res-hover-badge",children:"PARTICLE ACCELERATOR"}),l.jsx("h3",{className:"mu-res-hover-title",children:"Microtron Centre"}),l.jsx("p",{className:"mu-res-hover-desc",children:"Established in collaboration with RRCAT and BARC, conducting frontier research in electron beam technology, radiation physics, and polymer modification."}),l.jsxs("div",{className:"mu-res-hover-footer",children:[l.jsx("span",{className:"mu-res-footer-label",children:"Key Research Domains:"}),l.jsx("span",{className:"mu-res-footer-tags",children:"Radiation Physics • Polymers • Electron Beam Tech"})]})]})]}),l.jsxs("div",{className:"mu-research-image-card",children:[l.jsxs("div",{className:"mu-res-img-wrap",children:[l.jsx("img",{src:"/why-research.jpg",alt:"CARRT — Centre for Application of Radioisotopes",className:"mu-res-img"}),l.jsx("div",{className:"mu-res-gradient-base"})]}),l.jsxs("div",{className:"mu-res-content",children:[l.jsxs("div",{className:"mu-res-meta",children:[l.jsx("span",{className:"mu-res-badge",children:"CENTRE OF EXCELLENCE"}),l.jsx("div",{className:"mu-res-icon-pill",children:l.jsx(qd,{size:15})})]}),l.jsx("h3",{className:"mu-res-title",children:"CARRT"}),l.jsx("p",{className:"mu-res-desc",children:"Frontier applications of radioisotopes in medical physics, nuclear diagnostics, and radiation biology."})]}),l.jsxs("div",{className:"mu-res-hover-panel",children:[l.jsx("span",{className:"mu-res-hover-badge",children:"RADIOISOTOPE APPLICATIONS"}),l.jsx("h3",{className:"mu-res-hover-title",children:"CARRT (Centre for Radiation Tech)"}),l.jsx("p",{className:"mu-res-hover-desc",children:"National Centre of Excellence partnered with BRNS and AERB for radiopharmaceutical innovations, radiation sterilization, and agricultural food irradiation."}),l.jsxs("div",{className:"mu-res-hover-footer",children:[l.jsx("span",{className:"mu-res-footer-label",children:"Key Research Domains:"}),l.jsx("span",{className:"mu-res-footer-tags",children:"Radiopharmacy • Food Preservation • Nuclear Medicine"})]})]})]}),l.jsxs("div",{className:"mu-research-image-card",children:[l.jsxs("div",{className:"mu-res-img-wrap",children:[l.jsx("img",{src:"/faculty-marine.jpg",alt:"CAREER & Marine Oceanographic Research Station",className:"mu-res-img"}),l.jsx("div",{className:"mu-res-gradient-base"})]}),l.jsxs("div",{className:"mu-res-content",children:[l.jsxs("div",{className:"mu-res-meta",children:[l.jsx("span",{className:"mu-res-badge",children:"COASTAL & OCEANOGRAPHIC"}),l.jsx("div",{className:"mu-res-icon-pill",children:l.jsx(om,{size:15})})]}),l.jsx("h3",{className:"mu-res-title",children:"CAREER & Marine Station"}),l.jsx("p",{className:"mu-res-desc",children:"Monitoring Arabian Sea sedimentary dynamics, coastal ecology, and marine environmental radioactivity."})]}),l.jsxs("div",{className:"mu-res-hover-panel",children:[l.jsx("span",{className:"mu-res-hover-badge",children:"COASTAL OCEANOGRAPHY"}),l.jsx("h3",{className:"mu-res-hover-title",children:"CAREER & Marine Station"}),l.jsx("p",{className:"mu-res-hover-desc",children:"Centre for Advanced Research in Environmental Radioactivity monitoring coastal geomorphology, marine biodiversity conservation, and shoreline oceanography."}),l.jsxs("div",{className:"mu-res-hover-footer",children:[l.jsx("span",{className:"mu-res-footer-label",children:"Key Research Domains:"}),l.jsx("span",{className:"mu-res-footer-tags",children:"Marine Geology • Oceanography • Coastal Ecology"})]})]})]})]})})]})}),l.jsxs("section",{id:"coastal",className:"mu-campus-break",children:[l.jsx("div",{className:"mu-campus-overlay"}),l.jsx("div",{className:"mu-container mu-campus-content",children:l.jsxs("div",{className:"mu-campus-text-card",children:[l.jsx("span",{className:"mu-eyebrow mu-eyebrow-gold",children:"MANGALAGANGOTHRI • COASTAL SANCTUARY"}),l.jsx("h2",{className:"mu-campus-heading",children:"Where the Western Ghats meet the Arabian Sea"}),l.jsx("p",{className:"mu-campus-desc",children:"Perched atop a scenic hillock overlooking the Nethravathi river basin, our 353-acre verdant campus provides an inspiring sanctuary for scholarly inquiry, artistic expression, and athletic achievement."}),l.jsxs("a",{href:"#campus-tour",className:"mu-btn mu-btn-outline-white",children:["Discover Campus Facilities ",l.jsx(Mn,{size:16})]})]})})]}),l.jsx("section",{id:"placement",className:"mu-section mu-bg-paper mu-placement-editorial-section",children:l.jsx("div",{className:"mu-container",children:l.jsxs("div",{className:"mu-placement-split-grid",children:[l.jsxs("div",{className:"mu-placement-content-left",children:[l.jsx("span",{className:"mu-eyebrow",children:"CAREER & STUDENT SUCCESS"}),l.jsx("h2",{className:"mu-heading",children:"Placement & Career Ecosystem"}),l.jsx("p",{className:"mu-placement-p",children:"The University Employment Information & Guidance Bureau serves as a career catalyst—coordinating corporate recruitments, competitive examination coaching, industry internships, and international academic fellowships."}),l.jsxs("div",{className:"mu-placement-cards-grid",children:[l.jsx("div",{className:"mu-placement-card",children:l.jsxs("div",{className:"mu-pcard-body",children:[l.jsx("h4",{className:"mu-pcard-title",children:"Campus Recruitment"}),l.jsx("p",{className:"mu-pcard-desc",children:"Industry-led hiring drives, corporate interfaces, and active recruiter engagement."})]})}),l.jsx("div",{className:"mu-placement-card",children:l.jsxs("div",{className:"mu-pcard-body",children:[l.jsx("h4",{className:"mu-pcard-title",children:"Career Guidance"}),l.jsx("p",{className:"mu-pcard-desc",children:"Individual counselling, alumni mentorship, and competitive-exam preparation."})]})}),l.jsx("div",{className:"mu-placement-card",children:l.jsxs("div",{className:"mu-pcard-body",children:[l.jsx("h4",{className:"mu-pcard-title",children:"Internships & Industry Exposure"}),l.jsx("p",{className:"mu-pcard-desc",children:"Practical learning through summer internships and research-corporate partnerships."})]})}),l.jsx("div",{className:"mu-placement-card",children:l.jsxs("div",{className:"mu-pcard-body",children:[l.jsx("h4",{className:"mu-pcard-title",children:"Higher Studies & Fellowships"}),l.jsx("p",{className:"mu-pcard-desc",children:"Guidance for doctoral admissions, international fellowships, and national grants."})]})})]}),l.jsx("div",{className:"mu-placement-cta-wrapper",children:l.jsxs("a",{href:"#placement-cell",className:"mu-btn mu-btn-gold",children:["Explore Career Services ",l.jsx(Mn,{size:15})]})})]}),l.jsx("div",{className:"mu-placement-visual-right",children:l.jsxs("div",{className:"mu-placement-visual-frame",children:[l.jsx("div",{className:"mu-placement-glow-backdrop"}),l.jsxs("div",{className:"mu-placement-img-container",children:[l.jsx("img",{src:"/why-academic.jpg",alt:"Mangalore University Students in Career & Academic Progression",className:"mu-placement-main-img"}),l.jsx("div",{className:"mu-placement-img-overlay"})]})]})})]})})}),l.jsx("section",{id:"news",className:"mu-section mu-bg-mist mu-news-editorial-section",children:l.jsxs("div",{className:"mu-container",children:[l.jsxs("div",{className:"mu-news-top-bar",children:[l.jsxs("div",{children:[l.jsx("span",{className:"mu-eyebrow",children:"NOTICES & CIRCULARS"}),l.jsx("h2",{className:"mu-heading",children:"News, Events & Official Circulars"})]}),l.jsxs("a",{href:"#all-notifications",className:"mu-news-view-all",children:["View All Notifications ",l.jsx(Mn,{size:15})]})]}),l.jsxs("div",{className:"mu-news-editorial-grid",children:[l.jsx("div",{className:"mu-news-featured-col",children:l.jsxs("a",{href:Ce.link,className:"mu-news-featured-card",children:[l.jsxs("div",{className:"mu-featured-img-wrap",children:[l.jsx("img",{src:Ce.image,alt:Ce.title,className:"mu-featured-img"}),l.jsx("div",{className:"mu-featured-gradient-overlay"})]}),l.jsxs("div",{className:"mu-featured-content",children:[l.jsxs("div",{className:"mu-featured-meta",children:[l.jsx("span",{className:"mu-featured-badge",children:Ce.category}),l.jsxs("span",{className:"mu-featured-date",children:[l.jsx(Jd,{size:13})," ",Ce.date]})]}),l.jsx("h3",{className:"mu-featured-title",children:Ce.title}),l.jsx("p",{className:"mu-featured-desc",children:Ce.desc}),l.jsxs("div",{className:"mu-featured-link-action",children:[l.jsx("span",{children:"Read Full Coverage"}),l.jsx(_l,{size:16})]})]})]})}),l.jsx("div",{className:"mu-news-list-col",children:l.jsx("div",{className:"mu-news-scroll-container",children:Je.map(z=>l.jsxs("a",{href:z.link,className:"mu-news-compact-item",children:[l.jsx("div",{className:"mu-item-thumb-wrap",children:l.jsx("img",{src:z.image,alt:z.title,className:"mu-item-thumb"})}),l.jsxs("div",{className:"mu-item-details",children:[l.jsxs("div",{className:"mu-item-meta-row",children:[l.jsx("span",{className:"mu-item-category",children:z.category}),l.jsx("span",{className:"mu-item-date",children:z.date})]}),l.jsx("h4",{className:"mu-item-title",children:z.title}),l.jsx("p",{className:"mu-item-desc",children:z.desc}),l.jsxs("div",{className:"mu-item-readmore",children:[l.jsx("span",{children:"Read More"}),l.jsx(_l,{size:14,className:"mu-item-arrow"})]})]})]},z.id))})})]})]})}),l.jsx("section",{id:"testimonials",className:"mu-section-compact mu-bg-paper mu-testimonial-section",children:l.jsxs("div",{className:"mu-container",children:[l.jsxs("div",{className:"mu-section-header mu-text-center",style:{marginBottom:"32px"},children:[l.jsx("span",{className:"mu-eyebrow",children:"VOICES OF MANGALAGANGOTHRI"}),l.jsx("h2",{className:"mu-heading",children:"Student & Alumni Perspectives"})]}),l.jsxs("div",{className:"mu-t-carousel-wrapper",children:[l.jsx("div",{className:"mu-t-cards-row",children:[-1,0,1].map(z=>{const B=(se+z+H.length)%H.length,ae=H[B],me=z===0;return l.jsxs("div",{onClick:()=>{z===-1?O(ue=>ue===0?H.length-1:ue-1):z===1&&O(ue=>ue===H.length-1?0:ue+1)},className:`mu-t-card ${me?"mu-t-card-center":"mu-t-card-side"}`,role:"group","aria-label":`Testimonial by ${ae.name}`,children:[l.jsx("div",{className:"mu-t-card-rating",children:[...Array(ae.rating)].map((ue,Re)=>l.jsx(Lm,{size:13,className:me?"mu-star-gold":"mu-star-navy",fill:me?"#E8A317":"#0B2A4A"},Re))}),l.jsxs("p",{className:"mu-t-card-quote",children:["“",ae.quote,"”"]}),l.jsxs("div",{className:"mu-t-card-profile",children:[l.jsx("div",{className:`mu-t-avatar ${me?"mu-avatar-center":"mu-avatar-side"}`,children:ae.avatar}),l.jsxs("div",{className:"mu-t-meta",children:[l.jsx("h4",{className:"mu-t-name",children:ae.name}),l.jsx("span",{className:"mu-t-role",children:ae.role}),l.jsx("span",{className:"mu-t-batch",children:ae.batch})]})]})]},`${ae.id}-${z}`)})}),l.jsxs("div",{className:"mu-t-controls-bar",children:[l.jsx("button",{type:"button",className:"mu-t-arrow-btn",onClick:()=>O(z=>z===0?H.length-1:z-1),"aria-label":"Previous Testimonial",children:l.jsx(tm,{size:16})}),l.jsx("div",{className:"mu-t-dots-container",children:H.map((z,B)=>l.jsx("button",{type:"button",className:`mu-t-dot-pill ${se===B?"mu-t-dot-pill-active":""}`,onClick:()=>O(B),"aria-label":`Go to testimonial ${B+1}`},B))}),l.jsx("button",{type:"button",className:"mu-t-arrow-btn",onClick:()=>O(z=>z===H.length-1?0:z+1),"aria-label":"Next Testimonial",children:l.jsx(rm,{size:16})})]})]})]})}),l.jsx("section",{id:"admissions",className:"mu-cta-banner-strip",children:l.jsx("div",{className:"mu-container",children:l.jsxs("div",{className:"mu-cta-card-wrapper",children:[l.jsxs("div",{className:"mu-cta-bg-layer",children:[l.jsx("img",{src:"/campus-heritage.jpg",alt:"Mangalore University Campus Background",className:"mu-cta-bg-img"}),l.jsx("div",{className:"mu-cta-bg-overlay"})]}),l.jsxs("div",{className:"mu-cta-inner",children:[l.jsx("div",{className:"mu-cta-left",children:l.jsxs("div",{className:"mu-cta-text-group",children:[l.jsx("span",{className:"mu-cta-eyebrow",children:"ADMISSIONS 2026–2027"}),l.jsx("h3",{className:"mu-cta-title",children:"Begin your journey at Mangalagangothri"}),l.jsx("p",{className:"mu-cta-subtitle",children:"Postgraduate, doctoral, and diploma admissions are open via Karnataka UUCMS portal."})]})}),l.jsxs("div",{className:"mu-cta-actions-right",children:[l.jsxs("a",{href:"#uucms-apply",className:"mu-btn mu-btn-gold mu-btn-cta-compact",children:["Apply Now ",l.jsx(Mn,{size:14})]}),l.jsxs("a",{href:"#download-prospectus",className:"mu-btn mu-btn-outline-white mu-btn-cta-compact",children:[l.jsx(um,{size:14})," Prospectus (PDF)"]})]})]})]})})}),l.jsx("footer",{className:"mu-footer",children:l.jsxs("div",{className:"mu-container",children:[l.jsxs("div",{className:"mu-footer-grid",children:[l.jsxs("div",{className:"mu-footer-col",children:[l.jsx("div",{className:"mu-footer-brand-wrapper",children:l.jsx("img",{src:"/mu-logo.png",alt:"Mangalore University — ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾನಿಲಯ",className:"mu-footer-logo-img"})}),l.jsx("p",{className:"mu-footer-address",children:"Mangalagangothri - 574 199, Dakshina Kannada District, Karnataka State, India."}),l.jsxs("div",{className:"mu-footer-contact",children:[l.jsxs("p",{children:[l.jsx(zm,{size:14})," +91 824 2287276 / 2287347"]}),l.jsxs("p",{children:[l.jsx(Cm,{size:14})," contact@mangaloreuniversity.ac.in"]})]})]}),l.jsxs("div",{className:"mu-footer-col",children:[l.jsx("h4",{className:"mu-footer-col-title",children:"Academics"}),l.jsxs("ul",{className:"mu-footer-links",children:[l.jsx("li",{children:l.jsx("a",{href:"#faculty-arts",children:"Faculty of Arts"})}),l.jsx("li",{children:l.jsx("a",{href:"#faculty-science",children:"Faculty of Science & Tech"})}),l.jsx("li",{children:l.jsx("a",{href:"#faculty-commerce",children:"Faculty of Commerce"})}),l.jsx("li",{children:l.jsx("a",{href:"#faculty-education",children:"Faculty of Education"})}),l.jsx("li",{children:l.jsx("a",{href:"#research",children:"Microtron & CARRT Centres"})}),l.jsx("li",{children:l.jsx("a",{href:"#calendar",children:"Academic Calendar 2026"})})]})]}),l.jsxs("div",{className:"mu-footer-col",children:[l.jsx("h4",{className:"mu-footer-col-title",children:"Examinations & Governance"}),l.jsxs("ul",{className:"mu-footer-links",children:[l.jsx("li",{children:l.jsx("a",{href:"#results",children:"Examination Results Portal"})}),l.jsx("li",{children:l.jsx("a",{href:"#reval",children:"Revaluation Applications"})}),l.jsx("li",{children:l.jsx("a",{href:"#statutes",children:"University Statutes & Acts"})}),l.jsx("li",{children:l.jsx("a",{href:"#rti",children:"Right to Information (RTI)"})}),l.jsx("li",{children:l.jsx("a",{href:"#iqac",children:"Internal Quality Assurance Cell (IQAC)"})}),l.jsx("li",{children:l.jsx("a",{href:"#naac",children:"NAAC Self Study Report"})})]})]}),l.jsxs("div",{className:"mu-footer-col",children:[l.jsx("h4",{className:"mu-footer-col-title",children:"Student Welfare"}),l.jsxs("ul",{className:"mu-footer-links",children:[l.jsx("li",{children:l.jsx("a",{href:"#anti-ragging",children:"Anti-Ragging Squad & Cell"})}),l.jsx("li",{children:l.jsx("a",{href:"#grievance",children:"Women's Grievance Redressal"})}),l.jsx("li",{children:l.jsx("a",{href:"#scst",children:"SC / ST Special Cell"})}),l.jsx("li",{children:l.jsx("a",{href:"#infrastructure",children:"Central Library Catalog"})}),l.jsx("li",{children:l.jsx("a",{href:"#nirf",children:"NIRF Disclosures"})}),l.jsx("li",{children:l.jsx("a",{href:"#uucms",children:"Karnataka UUCMS Portal"})})]})]})]}),l.jsxs("div",{className:"mu-footer-bottom",children:[l.jsx("p",{children:"© 2026 Mangalore University, Mangalagangothri. All Rights Reserved."}),l.jsxs("div",{className:"mu-footer-legal",children:[l.jsx("a",{href:"#privacy",children:"Privacy Policy"}),l.jsx("span",{className:"mu-utility-divider",children:"|"}),l.jsx("a",{href:"#terms",children:"Terms of Use"}),l.jsx("span",{className:"mu-utility-divider",children:"|"}),l.jsx("a",{href:"#sitemap",children:"Sitemap"})]})]})]})}),l.jsx("style",{children:`
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

        /* Main Header — Fully Seamless Transparent Overlay at Top, Soft Sticky Deep-Navy on Scroll */
        .mu-header {
          position: fixed;
          top: 36px;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: transparent;
          border: none;
          box-shadow: none;
          transition: top 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
          padding: 12px 0;
        }
        .mu-header-scrolled {
          top: 0;
          background-color: rgba(7, 29, 51, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 12px 0;
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
          height: 60px;
          width: auto;
          max-width: 420px;
          object-fit: contain;
          display: block;
          filter: none;
          transition: height 0.3s ease;
        }
        .mu-header-scrolled .mu-brand-logo-img {
          height: 52px;
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
          font-size: 14.5px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.92);
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

        /* Hero Section (Full Viewport Length 100vh, Lower-Left Aligned with Full-Screen Carousel) */
        .mu-hero-fullscreen {
          position: relative;
          width: 100%;
          min-height: 100vh;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background-color: var(--teal-deep);
          padding-top: 110px;
          padding-bottom: 0;
        }
        .mu-hero-carousel-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .mu-hero-carousel-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: scale(1.03);
          transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 6s ease-out;
          pointer-events: none;
        }
        .mu-hero-carousel-slide.mu-hero-slide-active {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }
        .mu-hero-carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 36%;
          display: block;
        }
        /* Refined Readability Gradient: Left & Bottom dark navy for high text contrast */
        .mu-hero-fullscreen-overlay {
          position: absolute;
          inset: 0;
          background: 
            /* Top subtle vignette for lightweight transparent navbar */
            linear-gradient(
              to bottom,
              rgba(7, 29, 51, 0.72) 0%,
              rgba(7, 29, 51, 0.35) 15%,
              transparent 35%
            ),
            /* Left editorial text readability backdrop */
            linear-gradient(
              to right,
              rgba(7, 29, 51, 0.94) 0%,
              rgba(7, 29, 51, 0.85) 35%,
              rgba(7, 29, 51, 0.5) 58%,
              rgba(7, 29, 51, 0.12) 80%,
              transparent 100%
            ),
            /* Soft continuous bottom dissolve into the Flash News background (#071D33) */
            linear-gradient(
              to bottom,
              transparent 0%,
              transparent 50%,
              rgba(7, 29, 51, 0.45) 72%,
              rgba(7, 29, 51, 0.88) 90%,
              #071D33 100%
            );
        }
        .mu-hero-fullscreen-content {
          position: relative;
          z-index: 2;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-bottom: 32px;
        }
        .mu-hero-text-panel {
          max-width: 600px;
          margin-bottom: 0;
        }
        .mu-hero-badge-row {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px;
          background: rgba(7, 29, 51, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(232, 163, 23, 0.35);
          border-radius: 20px;
          margin-bottom: 14px;
        }
        .mu-hero-pill-tag {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .mu-hero-pill-divider {
          color: rgba(255, 255, 255, 0.35);
          font-size: 10px;
        }
        .mu-hero-pill-estd {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: 0.06em;
        }
        .mu-hero-fullscreen-headline {
          font-family: var(--font-heading);
          font-size: clamp(30px, 3.4vw, 44px);
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.18;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
          max-width: 580px;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);
        }
        .mu-hero-fullscreen-subtext {
          font-size: 15px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 0;
          max-width: 520px;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
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
          border-radius: var(--radius);
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
          border-radius: 2px;
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
        }
        .mu-about-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: var(--radius);
          border: 1px solid var(--line);
        }
        .mu-about-milestone {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background-color: var(--teal);
          color: #FFFFFF;
          padding: 18px 24px;
          border-radius: var(--radius);
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
        }
        .mu-vc-cutout-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom center;
          display: block;
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
          border-radius: var(--radius);
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
          border-radius: var(--radius);
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
          border-radius: 3px;
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
          border-radius: 3px;
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
          border-radius: 6px;
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
          border-radius: 3px;
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
          border-radius: 6px;
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
          border-radius: 3px;
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

        /* Campus Full-Bleed Section */
        .mu-campus-break {
          position: relative;
          min-height: 580px;
          background: #071D33 url('/coastal-campus.jpg') center/cover no-repeat;
          display: flex;
          align-items: flex-end;
          padding: 96px 0;
          width: 100%;
        }
        .mu-campus-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(7, 29, 51, 0.94) 0%, rgba(7, 29, 51, 0.65) 50%, rgba(7, 29, 51, 0.2) 100%);
        }
        .mu-campus-content {
          position: relative;
          z-index: 2;
        }
        .mu-campus-text-card {
          max-width: 720px;
        }
        .mu-campus-heading {
          color: #FFFFFF;
          font-size: clamp(32px, 4vw, 48px);
          margin-bottom: 18px;
        }
        .mu-campus-desc {
          color: rgba(255, 255, 255, 0.88);
          font-size: 17px;
          line-height: 1.65;
          margin-bottom: 32px;
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
          gap: 60px;
          align-items: center;
        }
        .mu-placement-content-left {
          display: flex;
          flex-direction: column;
        }
        .mu-placement-p {
          font-family: var(--font-body);
          font-size: 15.5px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin-bottom: 28px;
          max-width: 580px;
        }

        /* Compact Career-Service Detail Cards Grid (4 Cards) */
        .mu-placement-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }
        .mu-placement-card {
          padding: 16px;
          background: #FFFFFF;
          border: 1px solid rgba(11, 42, 74, 0.08);
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(11, 42, 74, 0.03);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .mu-placement-card:hover {
          transform: translateY(-2px);
          border-color: rgba(232, 163, 23, 0.4);
          box-shadow: 0 6px 16px rgba(11, 42, 74, 0.07);
        }
        .mu-pcard-body {
          width: 100%;
        }
        .mu-pcard-title {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          color: var(--teal);
          margin: 0 0 4px 0;
          line-height: 1.3;
        }
        .mu-pcard-desc {
          font-family: var(--font-body);
          font-size: 12.5px;
          color: var(--ink-soft);
          line-height: 1.5;
          margin: 0;
        }

        .mu-placement-cta-wrapper {
          display: flex;
          align-items: center;
        }

        /* Right Visual: Soft Geometric Frame with Floating Badges */
        .mu-placement-visual-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .mu-placement-visual-frame {
          position: relative;
          width: 100%;
          max-width: 440px;
        }
        .mu-placement-glow-backdrop {
          position: absolute;
          inset: -14px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(232, 163, 23, 0.12) 0%, rgba(11, 42, 74, 0.08) 100%);
          z-index: 1;
        }
        .mu-placement-img-container {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 380px;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 12px 36px rgba(11, 42, 74, 0.14);
          border: 2px solid #FFFFFF;
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
          background: linear-gradient(180deg, transparent 60%, rgba(7, 29, 51, 0.45) 100%);
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
          border-radius: 4px;
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
          border-radius: 6px;
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
          border-radius: 3px;
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
          border-radius: 4px;
        }
        .mu-news-scroll-container::-webkit-scrollbar-thumb {
          background-color: rgba(11, 42, 74, 0.25);
          border-radius: 4px;
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
          border-radius: 5px;
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
          border-radius: 4px;
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
           SECTION 13: Student & Alumni Testimonials (Compact 3-Card Carousel)
           ========================================================================= */
        .mu-testimonial-section {
          padding: 72px 0;
          background-color: var(--mist);
          border-top: 1px solid var(--line-soft);
          border-bottom: 1px solid var(--line-soft);
          width: 100%;
        }
        .mu-t-carousel-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }
        .mu-t-cards-row {
          display: grid;
          grid-template-columns: 1fr 1.15fr 1fr;
          gap: 22px;
          align-items: center;
          width: 100%;
          margin-bottom: 32px;
        }

        /* Testimonial Card Base */
        .mu-t-card {
          border-radius: 8px;
          padding: 24px 22px;
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
          transform: scale(1.04);
          z-index: 2;
        }
        .mu-t-card-center:hover {
          transform: scale(1.06) translateY(-2px);
          box-shadow: 0 16px 42px rgba(7, 29, 51, 0.28);
        }

        /* Side Cards: White / Soft Light-Blue */
        .mu-t-card-side {
          background-color: #FFFFFF;
          color: var(--ink);
          border: 1px solid rgba(11, 42, 74, 0.08);
          box-shadow: 0 4px 16px rgba(11, 42, 74, 0.06);
          opacity: 0.88;
        }
        .mu-t-card-side:hover {
          opacity: 1;
          transform: translateY(-2px);
          border-color: rgba(11, 42, 74, 0.18);
        }

        /* Rating Stars */
        .mu-t-card-rating {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-bottom: 12px;
        }
        .mu-star-gold {
          color: var(--gold);
        }
        .mu-star-navy {
          color: var(--teal);
        }

        /* Quote Text */
        .mu-t-card-quote {
          font-family: var(--font-body);
          font-size: 13.5px;
          line-height: 1.55;
          margin: 0 0 18px 0;
          flex: 1;
        }
        .mu-t-card-center .mu-t-card-quote {
          color: rgba(255, 255, 255, 0.92);
        }
        .mu-t-card-side .mu-t-card-quote {
          color: var(--ink-soft);
        }

        /* Profile Block */
        .mu-t-card-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }
        .mu-t-card-side .mu-t-card-profile {
          border-top: 1px solid var(--line-soft);
        }
        .mu-t-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 12px;
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
          font-size: 13.5px;
          font-weight: 700;
          margin: 0 0 1px 0;
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
          font-size: 11.5px;
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
          font-size: 10.5px;
          color: rgba(255, 255, 255, 0.6);
        }
        .mu-t-card-side .mu-t-batch {
          color: var(--ink-soft);
        }

        /* Carousel Controls Bar (Arrows & Dots) */
        .mu-t-controls-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        .mu-t-arrow-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--line-soft);
          background: #FFFFFF;
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(11, 42, 74, 0.06);
          transition: all 0.2s ease;
        }
        .mu-t-arrow-btn:hover {
          border-color: var(--gold);
          background-color: var(--teal);
          color: #FFFFFF;
          transform: scale(1.05);
        }
        .mu-t-dots-container {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .mu-t-dot-pill {
          width: 8px;
          height: 6px;
          border-radius: 3px;
          background-color: rgba(11, 42, 74, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }
        .mu-t-dot-pill-active {
          background-color: var(--gold);
          width: 22px;
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
          border-radius: 10px;
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
          border-radius: 4px !important;
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
      `})]})}$d.createRoot(document.getElementById("root")).render(l.jsx(Id.StrictMode,{children:l.jsx($m,{})}));
