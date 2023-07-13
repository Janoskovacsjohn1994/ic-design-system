/*! For license information please see 3b1baa31-e916a4e853309048a352.js.LICENSE.txt */
"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[4644],{6104:function(t,n,e){e.d(n,{Ep:function(){return y},J0:function(){return d},PP:function(){return p},RQ:function(){return S},X3:function(){return W},Zn:function(){return w},Zq:function(){return b},aU:function(){return r},cP:function(){return g},pC:function(){return R}});var r,a=e(3144),i=e(5671),o=e(136),u=e(2963),c=e(1120),s=e(2407);e(8559),e(4687);function h(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=(0,c.Z)(t);if(n){var a=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,u.Z)(this,e)}}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},f.apply(this,arguments)}!function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(r||(r={}));var l;function p(t){void 0===t&&(t={});var n,e=t,a=e.initialEntries,i=void 0===a?["/"]:a,o=e.initialIndex,u=e.v5Compat,c=void 0!==u&&u;n=i.map((function(t,n){return d(t,"string"==typeof t?null:t.state,0===n?"default":void 0)}));var s=l(null==o?n.length-1:o),h=r.Pop,f=null;function l(t){return Math.min(Math.max(t,0),n.length-1)}function p(){return n[s]}function d(t,e,r){void 0===e&&(e=null);var a=m(n?p().pathname:"/",t,e,r);return v("/"===a.pathname.charAt(0),"relative pathnames are not supported in memory history: "+JSON.stringify(t)),a}function w(t){return"string"==typeof t?t:y(t)}return{get index(){return s},get action(){return h},get location(){return p()},createHref:w,createURL:function(t){return new URL(w(t),"http://localhost")},encodeLocation:function(t){var n="string"==typeof t?g(t):t;return{pathname:n.pathname||"",search:n.search||"",hash:n.hash||""}},push:function(t,e){h=r.Push;var a=d(t,e);s+=1,n.splice(s,n.length,a),c&&f&&f({action:h,location:a,delta:1})},replace:function(t,e){h=r.Replace;var a=d(t,e);n[s]=a,c&&f&&f({action:h,location:a,delta:0})},go:function(t){h=r.Pop;var e=l(s+t),a=n[e];s=e,f&&f({action:h,location:a,delta:t})},listen:function(t){return f=t,function(){f=null}}}}function d(t,n){if(!1===t||null==t)throw new Error(n)}function v(t,n){if(!t){"undefined"!=typeof console&&console.warn(n);try{throw new Error(n)}catch(e){}}}function m(t,n,e,r){return void 0===e&&(e=null),f({pathname:"string"==typeof t?t:t.pathname,search:"",hash:""},"string"==typeof n?g(n):n,{state:e,key:n&&n.key||r||Math.random().toString(36).substr(2,8)})}function y(t){var n=t.pathname,e=void 0===n?"/":n,r=t.search,a=void 0===r?"":r,i=t.hash,o=void 0===i?"":i;return a&&"?"!==a&&(e+="?"===a.charAt(0)?a:"?"+a),o&&"#"!==o&&(e+="#"===o.charAt(0)?o:"#"+o),e}function g(t){var n={};if(t){var e=t.indexOf("#");e>=0&&(n.hash=t.substr(e),t=t.substr(0,e));var r=t.indexOf("?");r>=0&&(n.search=t.substr(r),t=t.substr(0,r)),t&&(n.pathname=t)}return n}!function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"}(l||(l={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function w(t,n){if("/"===n)return t;if(!t.toLowerCase().startsWith(n.toLowerCase()))return null;var e=n.endsWith("/")?n.length-1:n.length,r=t.charAt(e);return r&&"/"!==r?null:t.slice(e)||"/"}function P(t,n,e,r){return"Cannot include a '"+t+"' character in a manually specified `to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+e+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function b(t){return t.filter((function(t,n){return 0===n||t.route.path&&t.route.path.length>0}))}function R(t,n,e,r){var a;void 0===r&&(r=!1),"string"==typeof t?a=g(t):(d(!(a=f({},t)).pathname||!a.pathname.includes("?"),P("?","pathname","search",a)),d(!a.pathname||!a.pathname.includes("#"),P("#","pathname","hash",a)),d(!a.search||!a.search.includes("#"),P("#","search","hash",a)));var i,o=""===t||""===a.pathname,u=o?"/":a.pathname;if(r||null==u)i=e;else{var c=n.length-1;if(u.startsWith("..")){for(var s=u.split("/");".."===s[0];)s.shift(),c-=1;a.pathname=s.join("/")}i=c>=0?n[c]:"/"}var h=function(t,n){void 0===n&&(n="/");var e="string"==typeof t?g(t):t,r=e.pathname,a=e.search,i=void 0===a?"":a,o=e.hash,u=void 0===o?"":o,c=r?r.startsWith("/")?r:function(t,n){var e=n.replace(/\/+$/,"").split("/");return t.split("/").forEach((function(t){".."===t?e.length>1&&e.pop():"."!==t&&e.push(t)})),e.length>1?e.join("/"):"/"}(r,n):n;return{pathname:c,search:O(i),hash:E(u)}}(a,i),l=u&&"/"!==u&&u.endsWith("/"),p=(o||"."===u)&&e.endsWith("/");return h.pathname.endsWith("/")||!l&&!p||(h.pathname+="/"),h}var S=function(t){return t.join("/").replace(/\/\/+/g,"/")},O=function(t){return t&&"?"!==t?t.startsWith("?")?t:"?"+t:""},E=function(t){return t&&"#"!==t?t.startsWith("#")?t:"#"+t:""},W=function(t){(0,o.Z)(e,t);var n=h(e);function e(){return(0,i.Z)(this,e),n.apply(this,arguments)}return(0,a.Z)(e)}((0,s.Z)(Error));var Z=["post","put","patch","delete"],C=(new Set(Z),["get"].concat(Z));new Set(C),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;Symbol("deferred")}}]);
//# sourceMappingURL=3b1baa31-e916a4e853309048a352.js.map