!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";e.exports=r(1)},function(e,t,r){"use strict";var n=r(2),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,f=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,i=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_={};function g(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||h}function S(){}function j(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=g.prototype;var O=j.prototype=new S;O.constructor=j,n(O,g.prototype),O.isPureReactComponent=!0;var w={current:null},k={current:null},E=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,o={},c=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){for(var a=Array(f),i=0;i<f;i++)a[i]=arguments[i+2];o.children=a}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:u,type:e,key:c,ref:l,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var $=/\/+/g,R=[];function M(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function z(e,t,r){return null==e?0:function e(t,r,n,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var f=!1;if(null===t)f=!0;else switch(l){case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case u:case c:f=!0}}if(f)return n(o,t,""===r?"."+A(t,0):r),1;if(f=0,r=""===r?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){var i=r+A(l=t[a],a);f+=e(l,i,n,o)}else if(null===t||"object"!=typeof t?i=null:i="function"==typeof(i=b&&t[b]||t["@@iterator"])?i:null,"function"==typeof i)for(t=i.call(t),a=0;!(l=t.next()).done;)f+=e(l=l.value,i=r+A(l,a++),n,o);else if("object"===l)throw n=""+t,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return f}(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function V(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace($,"$&/")+"/"),z(e,I,t=M(t,u,n,o)),N(t)}function H(){var e=w.current;if(null===e)throw Error(v(321));return e}var L={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;z(e,V,t=M(null,null,t,r)),N(t)},count:function(e){return z(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(v(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:j,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return H().useCallback(e,t)},useContext:function(e,t){return H().useContext(e,t)},useEffect:function(e,t){return H().useEffect(e,t)},useImperativeHandle:function(e,t,r){return H().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return H().useLayoutEffect(e,t)},useMemo:function(e,t){return H().useMemo(e,t)},useReducer:function(e,t,r){return H().useReducer(e,t,r)},useRef:function(e){return H().useRef(e)},useState:function(e){return H().useState(e)},Fragment:l,Profiler:a,StrictMode:f,Suspense:y,createElement:C,cloneElement:function(e,t,r){if(null==e)throw Error(v(267,e));var o=n({},e.props),c=e.key,l=e.ref,f=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,f=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(i in t)E.call(t,i)&&!x.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==a?a[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){a=Array(i);for(var s=0;s<i;s++)a[s]=arguments[s+2];o.children=a}return{$$typeof:u,type:e.type,key:c,ref:l,props:o,_owner:f}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n}},U={default:L},T=U&&L||U;e.exports=T.default||T},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,l,f=c(e),a=1;a<arguments.length;a++){for(var i in r=Object(arguments[a]))o.call(r,i)&&(f[i]=r[i]);if(n){l=n(r);for(var s=0;s<l.length;s++)u.call(r,l[s])&&(f[l[s]]=r[l[s]])}}return f}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=function(e){var t=e.onClick,r=e.icon,n=e.className;return o.a.createElement("button",{className:"c-topbar__button ".concat(n),onClick:t},r,o.a.createElement("div",{className:"c-topbar__button-bb"}))},c=function(){return o.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{fill:"#fff",opacity:".3",d:"M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"}),o.a.createElement("path",{fill:"#fff",d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"}))};t.default=function(e){var t=e.composing,r=e.notes;return t?o.a.createElement("div",{className:"c-topbar__control"},o.a.createElement(u,{onClick:function(){window.postMessage("save",JSON.stringify(r))},className:"c-topbar__button--save",icon:o.a.createElement(c,null)})):null}}]);