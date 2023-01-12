"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[7077],{713:function(e,t,n){n.d(t,{A:function(){return F},B:function(){return S},C:function(){return u},D:function(){return O},E:function(){return X},F:function(){return j},G:function(){return D},H:function(){return L},I:function(){return o},J:function(){return v},K:function(){return g},W:function(){return s},a:function(){return P},b:function(){return y},c:function(){return _},d:function(){return Q},e:function(){return f},f:function(){return m},g:function(){return z},h:function(){return k},i:function(){return V},j:function(){return R},k:function(){return A},l:function(){return J},m:function(){return d},n:function(){return r},o:function(){return W},p:function(){return H},q:function(){return U},r:function(){return Y},s:function(){return T},t:function(){return q},u:function(){return x},v:function(){return C},w:function(){return h},x:function(){return I},y:function(){return w},z:function(){return E}});var i=n(9455),r=["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],o={XS:576,S:768,M:992,L:1200,XL:99999},a=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],l=["ic-alert"],c={"ic-alert":["ic-link"]},u=136.701,s=130,d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return t.forEach((function(t){e.hasAttribute(t)&&(null!==e.getAttribute(t)&&(n[t]=e.getAttribute(t)),e.removeAttribute(t))})),n},h=function(e,t){var n=e._original||e;return{_original:e,emit:p(n.emit.bind(n),t)}},p=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];t=setTimeout.apply(void 0,[e,n].concat(r))}},f=function(e,t,n,i,r){if(void 0!==n&&(e||b(t))){var o=t.querySelectorAll("input.ic-input"),a=Array.from(o).filter((function(e){return t===e.parentElement}))[0];null==a&&((a=t.ownerDocument.createElement("input")).type="hidden",a.classList.add("ic-input"),t.appendChild(a)),a.disabled=r,a.name=n,a.value=i||""}},m=function(e){var t=e.querySelectorAll("input.ic-input"),n=Array.from(t).filter((function(t){return e===t.parentElement}))[0];null==n||n.remove()},b=function(e){return!!e.shadowRoot&&!!e.attachShadow},v=function(e){return e+"-helper-text"},g=function(e){return e+"-validation-text"},k=function(e,t,n){return"".concat(t?v(e):""," ").concat(n?g(e):"").trim()},y=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e.parentElement||e.getRootNode().host.parentElement,o=r.closest(a.join(","));if(null!==o){var u=o.tagName.toLowerCase(),s=e.tagName.toLowerCase();return(null===(t=c[u])||void 0===t?void 0:t.includes(s))?i.I.Default:null===n||l.includes(u)?o.classList.contains(i.I.Dark)?i.I.Dark:i.I.Light:n}return i.I.Default},w=function(){var e=!1;return"maxTouchPoints"in navigator&&(e=navigator.maxTouchPoints>0),e},x=function(e,t){var n=document.createElement("button");n.setAttribute("type",t.type),n.style.display="none",e.appendChild(n),n.click(),n.remove()},L=function(e){return 0===e.trim().length},I=function(e,t){var n,i=[];if(t.length>0)return t.map((function(e){e.children?e.children.map((function(e){return i.push(e)})):i.push(e)})),null===(n=i.find((function(t){return t.value===e})))||void 0===n?void 0:n.label},C=function(e,t,n,i){return"anywhere"===i?e.filter((function(e){var i;return t?e.label.toLowerCase().includes(n.toLowerCase())||(null===(i=e.description)||void 0===i?void 0:i.toLowerCase().includes(n.toLowerCase())):e.label.toLowerCase().includes(n.toLowerCase())})):e.filter((function(e){var i;return t?e.label.toLowerCase().startsWith(n.toLowerCase())||(null===(i=e.description)||void 0===i?void 0:i.toLowerCase().startsWith(n.toLowerCase())):e.label.toLowerCase().startsWith(n.toLowerCase())}))},N=function(e){return window.matchMedia("(max-width: ".concat(e,"px)")).matches},z=function(){return N(O.S)?O.S:N(O.M)?O.M:N(O.L)?O.L:N(O.XL)?O.XL:O.UNDEFINED},E=function(e){return getComputedStyle(document.documentElement).getPropertyValue(e)},S=function(){var e=E("--ic-theme-primary-r"),t=E("--ic-theme-primary-g"),n=E("--ic-theme-primary-b");return(299*parseInt(e)+587*parseInt(t)+114*parseInt(n))/1e3},A=function(){return S()>133.3505?i.I.Dark:i.I.Light},D=function(e,t){return e&&e.querySelector?e.querySelector('[slot="'.concat(t,'"]')):null},T=function(e,t){return null!==D(e,t)},q=function(e,t){var n=D(e,t);return n?M(n):null},M=function(e){var t=e.firstElementChild;if(null!==t){var n=t.assignedElements?t.assignedElements():t.childNodes;return n.length?n:null}return null===e?null:[e]},H=function e(t){var n={navType:"",parent:null};switch(U(t)){case"IC-NAVIGATION-GROUP":n=e(t.parentElement);break;case"IC-TOP-NAVIGATION":n={navType:"top",parent:B(t)};break;case"IC-SIDE-NAVIGATION":n={navType:"side",parent:B(t)};break;case"IC-PAGE-HEADER":n={navType:"page-header",parent:null}}return n},O={XS:Number(E("--ic-breakpoint-xs").replace("px","")),S:Number(E("--ic-breakpoint-sm").replace("px","")),M:Number(E("--ic-breakpoint-md").replace("px","")),L:Number(E("--ic-breakpoint-lg").replace("px","")),XL:Number(E("--ic-breakpoint-xl").replace("px","")),UNDEFINED:1200},R=function(e,t){return""!==e&&!t},V=function(e,t){return!!e.querySelector('[slot="'.concat(t,'"]'))},W=function(e,t,n){void 0===e&&t!==e&&n()},P=function(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=i.prop,o=i.propName;null==r&&console.error("No ".concat(o," specified for ").concat(t," component - prop '").concat(o,"' (web components) / '").concat(Z(o),"' (react) required"))}},Z=function(e){for(var t=(e=e.toLowerCase()).split("-"),n=t[0],i=1;i<t.length;i++)n+=t[i].substring(0,1).toUpperCase()+t[i].substring(1);return n},_=function(e){"undefined"!=typeof window&&void 0!==window.ResizeObserver&&e()},G=function(e){return parseInt(e,16)},X=function(e){var t;return 4===e.length?(t=e.replace("#","").split(""),{r:G(t[0]+t[0]),g:G(t[1]+t[1]),b:G(t[2]+t[2]),a:1}):{r:G(e.slice(1,3)),g:G(e.slice(3,5)),b:G(e.slice(5)),a:1}},j=function(e){var t;if("a"===e.slice(3,4).toLowerCase()){t={r:null,g:null,b:null,a:null};var n=e.substring(5,e.length-1).replace(/ /g,"").split(",");t.r=Number(n[0]),t.g=Number(n[1]),t.b=Number(n[2]),t.a=Number(n[3])}else{t={r:null,g:null,b:null,a:1};var i=e.substring(4,e.length-1).replace(/ /g,"").split(",");t.r=Number(i[0]),t.g=Number(i[1]),t.b=Number(i[2])}return t},F=function(e){return e.scrollWidth>e.clientWidth},U=function(e){return e.parentElement.tagName},B=function(e){return e.parentElement},J=function(){return!!document.querySelector("ic-classification-banner:not([inline='true'])")},K=function(e){return e.closest("FORM")},Q=function(e,t){var n=K(e);null!==n&&n.addEventListener("reset",t)},Y=function(e,t){var n=K(e);null!==n&&n.removeEventListener("reset",t)}},7077:function(e,t,n){n.r(t),n.d(t,{ic_link:function(){return s}});var i=n(4942),r=n(2982),o=n(5671),a=n(3144),l=n(6902),c=n(713),u=n(9455),s=function(){function e(t){(0,o.Z)(this,e),(0,l.r)(this,t),this.inheritedAttributes={},this.download=!1,this.href=null,this.hreflang=void 0,this.referrerpolicy=void 0,this.rel=void 0,this.target=void 0,this.showIcon=void 0,this.appearance="default"}return(0,a.Z)(e,[{key:"themeChangeHandler",value:function(e){var t=e.detail;this.updateTheme(t.mode)}},{key:"updateTheme",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=(0,c.b)(this.el,e||null);switch(t){case u.I.Light:this.appearance=u.I.Light;break;case u.I.Dark:this.appearance=u.I.Dark}}},{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,c.m)(this.el,[].concat((0,r.Z)(c.n),["aria-expanded"]))}},{key:"componentDidLoad",value:function(){this.updateTheme()}},{key:"hasRouterSlot",value:function(){return this.routerSlot=this.el.querySelector('[slot="router-item"]'),this.routerSlot&&(this.routerSlot.ariaLabel=this.routerSlot.textContent),!!this.routerSlot}},{key:"render",value:function(){var e,t,n=this.download,r=this.href,o=this.hreflang,a=this.referrerpolicy,c=this.rel,u=this.target,s=this.showIcon,d=this.appearance;return(0,l.h)(l.H,{class:(e={},(0,i.Z)(e,"link",!0),(0,i.Z)(e,"".concat(d),!0),e)},this.hasRouterSlot()?(0,l.h)("slot",{name:"router-item"}):(0,l.h)("a",Object.assign({class:(t={},(0,i.Z)(t,"ic-link",null!==r),(0,i.Z)(t,"".concat(d),null!==r),t),download:!1!==n?n:null,href:r,hrefLang:o,referrerPolicy:a,rel:c,target:u,tabindex:null!==r?"0":"-1"},this.inheritedAttributes),(0,l.h)("slot",null),s&&(0,l.h)("span",{class:"ic-link-open-in-new-icon",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>'})))}},{key:"el",get:function(){return(0,l.g)(this)}}]),e}();s.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.link) .ic-link,:host(.link) ::slotted(a){color:var(--ic-hyperlink);text-decoration:underline;font-weight:var(--ic-font-weight-bold);transition:var(--ic-easing-transition-fast)}:host(.link.dark) .ic-link.dark,:host(.link.dark) ::slotted(a){color:var(--ic-color-primary-text)}:host(.link.light) .ic-link.light,:host(.link.light) ::slotted(a){color:var(--ic-color-white-text)}:host(.link) .ic-link:visited,:host(.link) ::slotted(a:visited){color:var(--ic-hyperlink-visited)}:host(.link) .ic-link:hover,:host(.link) .ic-link:focus,:host(.link) ::slotted(a:hover),:host(.link) ::slotted(a:focus){text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%}:host(.link) .ic-link:hover,:host(.link) ::slotted(a:hover){outline:none}:host(.link) .ic-link:focus,:host(.link) ::slotted(a:focus){outline:var(--ic-hc-focus-outline)}:host(.link) .ic-link:active,:host(.link) .ic-link:focus:active,:host(.link) .ic-link:visited:active,:host(.link) ::slotted(a:active),:host(.link) ::slotted(a:focus:active),:host(.link) ::slotted(a:visited:active){text-decoration:none}.ic-link-open-in-new-icon{vertical-align:middle;margin-left:var(--ic-space-xxs)}.ic-link>.ic-link-open-in-new-icon{fill:var(--ic-hyperlink)}.ic-link.dark>.ic-link-open-in-new-icon{fill:var(--ic-color-primary-text)}.ic-link.light>.ic-link-open-in-new-icon{fill:var(--ic-color-white-text)}.ic-link-open-in-new-icon>svg{width:var(--ic-space-md);height:var(--ic-space-md);fill:currentcolor}.ic-link:visited>.ic-link-open-in-new-icon{fill:var(--ic-hyperlink-visited)}.ic-link.light:visited>.ic-link-open-in-new-icon{fill:var(--ic-hyperlink-contrast-visited)}:host(.breadcrumb-link) .ic-link{display:var(--breadcrumb-link-display);align-items:var(--breadcrumb-link-align-items);gap:var(--breadcrumb-link-gap)}:host(.breadcrumb-link) .ic-link ::slotted(.back-icon){height:var(--ic-space-lg);width:var(--ic-space-lg)}:host(.breadcrumb-link.current-page) a,:host(.breadcrumb-link.current-page) ::slotted(a){font-weight:normal;color:inherit;text-decoration:none;display:flex;align-items:center}:host(.breadcrumb-link.current-page) .ic-link,:host(.breadcrumb-link.current-page) ::slotted(a:focus){outline:var(--ic-hc-focus-outline);text-decoration:none}:host(.breadcrumb-link.current-page) .ic-link:visited{color:var(--ic-color-primary-text)}'},9455:function(e,t,n){var i,r;n.d(t,{I:function(){return r},a:function(){return i}}),function(e){e.Warning="warning",e.Error="error",e.Success="success"}(i||(i={})),function(e){e.Default="default",e.Dark="dark",e.Light="light"}(r||(r={}))}}]);
//# sourceMappingURL=7077-7b6f591dd7b713343159.js.map