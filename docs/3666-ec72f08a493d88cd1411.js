"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[3666],{713:function(t,e,n){n.d(e,{A:function(){return V},B:function(){return A},C:function(){return s},D:function(){return M},E:function(){return F},F:function(){return U},G:function(){return D},H:function(){return C},I:function(){return i},J:function(){return b},K:function(){return k},W:function(){return c},a:function(){return G},b:function(){return y},c:function(){return H},d:function(){return Q},e:function(){return h},f:function(){return m},g:function(){return z},h:function(){return v},i:function(){return R},j:function(){return O},k:function(){return S},l:function(){return J},m:function(){return f},n:function(){return r},o:function(){return X},p:function(){return _},q:function(){return Z},r:function(){return Y},s:function(){return T},t:function(){return q},u:function(){return x},v:function(){return E},w:function(){return d},x:function(){return L},y:function(){return w},z:function(){return I}});var o=n(9455),r=["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],i={XS:576,S:768,M:992,L:1200,XL:99999},a=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],l=["ic-alert"],u={"ic-alert":["ic-link"]},s=136.701,c=130,f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return e.forEach((function(e){t.hasAttribute(e)&&(null!==t.getAttribute(e)&&(n[e]=t.getAttribute(e)),t.removeAttribute(e))})),n},d=function(t,e){var n=t._original||t;return{_original:t,emit:p(n.emit.bind(n),e)}},p=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];e=setTimeout.apply(void 0,[t,n].concat(r))}},h=function(t,e,n,o,r){if(void 0!==n&&(t||g(e))){var i=e.querySelectorAll("input.ic-input"),a=Array.from(i).filter((function(t){return e===t.parentElement}))[0];null==a&&((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("ic-input"),e.appendChild(a)),a.disabled=r,a.name=n,a.value=o||""}},m=function(t){var e=t.querySelectorAll("input.ic-input"),n=Array.from(e).filter((function(e){return t===e.parentElement}))[0];null==n||n.remove()},g=function(t){return!!t.shadowRoot&&!!t.attachShadow},b=function(t){return t+"-helper-text"},k=function(t){return t+"-validation-text"},v=function(t,e,n){return"".concat(e?b(t):""," ").concat(n?k(t):"").trim()},y=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=t.parentElement||t.getRootNode().host.parentElement,i=r.closest(a.join(","));if(null!==i){var s=i.tagName.toLowerCase(),c=t.tagName.toLowerCase();return(null===(e=u[s])||void 0===e?void 0:e.includes(c))?o.I.Default:null===n||l.includes(s)?i.classList.contains(o.I.Dark)?o.I.Dark:o.I.Light:n}return o.I.Default},w=function(){var t=!1;return"maxTouchPoints"in navigator&&(t=navigator.maxTouchPoints>0),t},x=function(t,e){var n=document.createElement("button");n.setAttribute("type",e.type),n.style.display="none",t.appendChild(n),n.click(),n.remove()},C=function(t){return 0===t.trim().length},L=function(t,e){var n,o=[];if(e.length>0)return e.map((function(t){t.children?t.children.map((function(t){return o.push(t)})):o.push(t)})),null===(n=o.find((function(e){return e.value===t})))||void 0===n?void 0:n.label},E=function(t,e,n,o){return"anywhere"===o?t.filter((function(t){var o;return e?t.label.toLowerCase().includes(n.toLowerCase())||(null===(o=t.description)||void 0===o?void 0:o.toLowerCase().includes(n.toLowerCase())):t.label.toLowerCase().includes(n.toLowerCase())})):t.filter((function(t){var o;return e?t.label.toLowerCase().startsWith(n.toLowerCase())||(null===(o=t.description)||void 0===o?void 0:o.toLowerCase().startsWith(n.toLowerCase())):t.label.toLowerCase().startsWith(n.toLowerCase())}))},N=function(t){return window.matchMedia("(max-width: ".concat(t,"px)")).matches},z=function(){return N(M.S)?M.S:N(M.M)?M.M:N(M.L)?M.L:N(M.XL)?M.XL:M.UNDEFINED},I=function(t){return getComputedStyle(document.documentElement).getPropertyValue(t)},A=function(){var t=I("--ic-theme-primary-r"),e=I("--ic-theme-primary-g"),n=I("--ic-theme-primary-b");return(299*parseInt(t)+587*parseInt(e)+114*parseInt(n))/1e3},S=function(){return A()>133.3505?o.I.Dark:o.I.Light},D=function(t,e){return t&&t.querySelector?t.querySelector('[slot="'.concat(e,'"]')):null},T=function(t,e){return null!==D(t,e)},q=function(t,e){var n=D(t,e);return n?W(n):null},W=function(t){var e=t.firstElementChild;if(null!==e){var n=e.assignedElements?e.assignedElements():e.childNodes;return n.length?n:null}return null===t?null:[t]},_=function t(e){var n={navType:"",parent:null};switch(Z(e)){case"IC-NAVIGATION-GROUP":n=t(e.parentElement);break;case"IC-TOP-NAVIGATION":n={navType:"top",parent:B(e)};break;case"IC-SIDE-NAVIGATION":n={navType:"side",parent:B(e)};break;case"IC-PAGE-HEADER":n={navType:"page-header",parent:null}}return n},M={XS:Number(I("--ic-breakpoint-xs").replace("px","")),S:Number(I("--ic-breakpoint-sm").replace("px","")),M:Number(I("--ic-breakpoint-md").replace("px","")),L:Number(I("--ic-breakpoint-lg").replace("px","")),XL:Number(I("--ic-breakpoint-xl").replace("px","")),UNDEFINED:1200},O=function(t,e){return""!==t&&!e},R=function(t,e){return!!t.querySelector('[slot="'.concat(e,'"]'))},X=function(t,e,n){void 0===t&&e!==t&&n()},G=function(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=o.prop,i=o.propName;null==r&&console.error("No ".concat(i," specified for ").concat(e," component - prop '").concat(i,"' (web components) / '").concat(P(i),"' (react) required"))}},P=function(t){for(var e=(t=t.toLowerCase()).split("-"),n=e[0],o=1;o<e.length;o++)n+=e[o].substring(0,1).toUpperCase()+e[o].substring(1);return n},H=function(t){"undefined"!=typeof window&&void 0!==window.ResizeObserver&&t()},j=function(t){return parseInt(t,16)},F=function(t){var e;return 4===t.length?(e=t.replace("#","").split(""),{r:j(e[0]+e[0]),g:j(e[1]+e[1]),b:j(e[2]+e[2]),a:1}):{r:j(t.slice(1,3)),g:j(t.slice(3,5)),b:j(t.slice(5)),a:1}},U=function(t){var e;if("a"===t.slice(3,4).toLowerCase()){e={r:null,g:null,b:null,a:null};var n=t.substring(5,t.length-1).replace(/ /g,"").split(",");e.r=Number(n[0]),e.g=Number(n[1]),e.b=Number(n[2]),e.a=Number(n[3])}else{e={r:null,g:null,b:null,a:1};var o=t.substring(4,t.length-1).replace(/ /g,"").split(",");e.r=Number(o[0]),e.g=Number(o[1]),e.b=Number(o[2])}return e},V=function(t){return t.scrollWidth>t.clientWidth},Z=function(t){return t.parentElement.tagName},B=function(t){return t.parentElement},J=function(){return!!document.querySelector("ic-classification-banner:not([inline='true'])")},K=function(t){return t.closest("FORM")},Q=function(t,e){var n=K(t);null!==n&&n.addEventListener("reset",e)},Y=function(t,e){var n=K(t);null!==n&&n.removeEventListener("reset",e)}},3666:function(t,e,n){n.r(e),n.d(e,{ic_footer_link:function(){return u}});var o=n(4942),r=n(5671),i=n(3144),a=n(6902),l=n(713),u=(n(9455),function(){function t(e){(0,r.Z)(this,t),(0,a.r)(this,e),this.href=null,this.footerConfig={small:!1,grouped:!1},this.deviceSize=l.D.XL,this.foregroundColor=(0,l.k)()}return(0,i.Z)(t,[{key:"inferConfig",value:function(t){return null!==t.parentElement?t.parentElement.classList.contains("footer")?{small:t.parentElement.classList.contains("footer-small"),grouped:t.parentElement.classList.contains("footer-grouped")}:this.inferConfig(t.parentElement):{small:!1,grouped:!1}}},{key:"footerResizeHandler",value:function(){this.footerConfig=this.inferConfig(this.el)}},{key:"footerThemeChangeHandler",value:function(t){var e=t.detail;this.foregroundColor=e.mode}},{key:"componentWillLoad",value:function(){this.footerConfig=this.inferConfig(this.el)}},{key:"render",value:function(){var t,e=this.footerConfig,n=this.href,r=e.small,i=e.grouped;return(0,a.h)(a.H,{class:(t={"footer-link":!0},(0,o.Z)(t,"footer-link-".concat(i?"grouped":"ungrouped","-").concat(r?"small":"sparse"),!0),(0,o.Z)(t,"footer-link-".concat(this.foregroundColor),!0),t)},(0,a.h)("a",{href:n},(0,a.h)("slot",null)))}},{key:"el",get:function(){return(0,a.g)(this)}}]),t}());u.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.footer-link-ungrouped-sparse){--footer-link-margin-left:0;--footer-link-margin-right:40px;--footer-link-margin-bottom:0}:host(.footer-link-ungrouped-small){--footer-link-margin-left:0;--footer-link-margin-right:0;--footer-link-margin-bottom:var(--ic-space-md)}:host(.footer-link-grouped-sparse){--footer-link-margin-left:0;--footer-link-margin-right:0;--footer-link-margin-bottom:var(--ic-space-md)}:host(.footer-link-grouped-small){--footer-link-margin-left:var(--ic-space-md);--footer-link-margin-right:0;--footer-link-margin-bottom:var(--ic-space-md)}:host(.footer-link){margin-left:var(--footer-link-margin-left);margin-right:var(--footer-link-margin-right);margin-bottom:var(--footer-link-margin-bottom)}:host(.footer-link) a,:host(.footer-link) a ::slotted(a){display:block;font-weight:var(--ic-font-weight-bold);color:inherit;width:-moz-fit-content;width:fit-content;font-size:var(--ic-font-size-regular)}:host(.footer-link) a:link,:host(.footer-link) a ::slotted(a:link){color:inherit;text-decoration:underline;font-weight:var(--ic-font-weight-bold)}:host(.footer-link) a:link>::slotted(svg),:host(.footer-link) a:link>::slotted(img),:host(.footer-link) a ::slotted(a:link>::slotted(svg)),:host(.footer-link) a ::slotted(a:link>::slotted(img)){padding:var(--ic-space-xxxs);pointer-events:none;transition:var(--ic-easing-transition-fast)}:host(.footer-link-light) ::slotted(svg){fill:var(--ic-architectural-white)}:host(.footer-link-dark) ::slotted(svg){fill:var(--ic-architectural-black)}:host(.footer-link) a:link:hover,:host(.footer-link) a:link:focus,:host(.footer-link) a ::slotted(a:link:hover),:host(.footer-link) a ::slotted(a:link:focus){text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%}:host(.footer-link) a:link:hover,:host(.footer-link) a ::slotted(a:link:hover){outline:none}:host(.footer-link) a:link:focus,:host(.footer-link) a ::slotted(a:link:focus){outline:var(--ic-hc-focus-outline)}:host(.footer-link) a:link:focus>::slotted(svg),:host(.footer-link) a:link:focus>::slotted(img),:host(.footer-link) a ::slotted(a:link:focus>::slotted(svg)),:host(.footer-link) a ::slotted(a:link:focus>::slotted(img)){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius)}:host(.footer-link) a:focus,:host(.footer-link) a ::slotted(a:focus){border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline);transition:var(--ic-transition-duration-fast)}:host(.footer-link) a:link:active,:host(.footer-link) a:link:focus:active,:host(.footer-link) a:link:visited:active,:host(.footer-link) a ::slotted(a:link:active),:host(.footer-link) a ::slotted(a:link:focus:active),:host(.footer-link) a ::slotted(a:link:visited:active){color:inherit;text-decoration:none}:host(.footer-link) a:hover,:host(.footer-link) a ::slotted(a:hover){text-decoration:none}@media screen and (min-width: 769px){:host(.footer-link.footer-link-ungrouped-sparse:last-of-type){margin-right:0}}@media (forced-colors: active){:host(.footer-link-light) ::slotted(svg),:host(.footer-link-dark) ::slotted(svg){fill:currentcolor}}'},9455:function(t,e,n){var o,r;n.d(e,{I:function(){return r},a:function(){return o}}),function(t){t.Warning="warning",t.Error="error",t.Success="success"}(o||(o={})),function(t){t.Default="default",t.Dark="dark",t.Light="light"}(r||(r={}))}}]);
//# sourceMappingURL=3666-ec72f08a493d88cd1411.js.map