"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[5121],{713:function(n,t,e){e.d(t,{A:function(){return B},B:function(){return A},C:function(){return l},D:function(){return H},E:function(){return G},F:function(){return X},G:function(){return D},H:function(){return C},I:function(){return o},J:function(){return b},K:function(){return y},W:function(){return u},a:function(){return O},b:function(){return x},c:function(){return Z},d:function(){return Q},e:function(){return m},f:function(){return p},g:function(){return z},h:function(){return v},i:function(){return j},j:function(){return P},k:function(){return S},l:function(){return J},m:function(){return d},n:function(){return r},o:function(){return M},p:function(){return F},q:function(){return U},r:function(){return Y},s:function(){return T},t:function(){return W},u:function(){return w},v:function(){return I},w:function(){return h},x:function(){return L},y:function(){return k},z:function(){return E}});var i=e(9455),r=["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],o={XS:576,S:768,M:992,L:1200,XL:99999},a=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],c=["ic-alert"],s={"ic-alert":["ic-link"]},l=136.701,u=130,d=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e={};return t.forEach((function(t){n.hasAttribute(t)&&(null!==n.getAttribute(t)&&(e[t]=n.getAttribute(t)),n.removeAttribute(t))})),e},h=function(n,t){var e=n._original||n;return{_original:n,emit:g(e.emit.bind(e),t)}},g=function(n){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];t=setTimeout.apply(void 0,[n,e].concat(r))}},m=function(n,t,e,i,r){if(void 0!==e&&(n||f(t))){var o=t.querySelectorAll("input.ic-input"),a=Array.from(o).filter((function(n){return t===n.parentElement}))[0];null==a&&((a=t.ownerDocument.createElement("input")).type="hidden",a.classList.add("ic-input"),t.appendChild(a)),a.disabled=r,a.name=e,a.value=i||""}},p=function(n){var t=n.querySelectorAll("input.ic-input"),e=Array.from(t).filter((function(t){return n===t.parentElement}))[0];null==e||e.remove()},f=function(n){return!!n.shadowRoot&&!!n.attachShadow},b=function(n){return n+"-helper-text"},y=function(n){return n+"-validation-text"},v=function(n,t,e){return"".concat(t?b(n):""," ").concat(e?y(n):"").trim()},x=function(n){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=n.parentElement||n.getRootNode().host.parentElement,o=r.closest(a.join(","));if(null!==o){var l=o.tagName.toLowerCase(),u=n.tagName.toLowerCase();return(null===(t=s[l])||void 0===t?void 0:t.includes(u))?i.I.Default:null===e||c.includes(l)?o.classList.contains(i.I.Dark)?i.I.Dark:i.I.Light:e}return i.I.Default},k=function(){var n=!1;return"maxTouchPoints"in navigator&&(n=navigator.maxTouchPoints>0),n},w=function(n,t){var e=document.createElement("button");e.setAttribute("type",t.type),e.style.display="none",n.appendChild(e),e.click(),e.remove()},C=function(n){return 0===n.trim().length},L=function(n,t){var e,i=[];if(t.length>0)return t.map((function(n){n.children?n.children.map((function(n){return i.push(n)})):i.push(n)})),null===(e=i.find((function(t){return t.value===n})))||void 0===e?void 0:e.label},I=function(n,t,e,i){return"anywhere"===i?n.filter((function(n){var i;return t?n.label.toLowerCase().includes(e.toLowerCase())||(null===(i=n.description)||void 0===i?void 0:i.toLowerCase().includes(e.toLowerCase())):n.label.toLowerCase().includes(e.toLowerCase())})):n.filter((function(n){var i;return t?n.label.toLowerCase().startsWith(e.toLowerCase())||(null===(i=n.description)||void 0===i?void 0:i.toLowerCase().startsWith(e.toLowerCase())):n.label.toLowerCase().startsWith(e.toLowerCase())}))},N=function(n){return window.matchMedia("(max-width: ".concat(n,"px)")).matches},z=function(){return N(H.S)?H.S:N(H.M)?H.M:N(H.L)?H.L:N(H.XL)?H.XL:H.UNDEFINED},E=function(n){return getComputedStyle(document.documentElement).getPropertyValue(n)},A=function(){var n=E("--ic-theme-primary-r"),t=E("--ic-theme-primary-g"),e=E("--ic-theme-primary-b");return(299*parseInt(n)+587*parseInt(t)+114*parseInt(e))/1e3},S=function(){return A()>133.3505?i.I.Dark:i.I.Light},D=function(n,t){return n&&n.querySelector?n.querySelector('[slot="'.concat(t,'"]')):null},T=function(n,t){return null!==D(n,t)},W=function(n,t){var e=D(n,t);return e?q(e):null},q=function(n){var t=n.firstElementChild;if(null!==t){var e=t.assignedElements?t.assignedElements():t.childNodes;return e.length?e:null}return null===n?null:[n]},F=function n(t){var e={navType:"",parent:null};switch(U(t)){case"IC-NAVIGATION-GROUP":e=n(t.parentElement);break;case"IC-TOP-NAVIGATION":e={navType:"top",parent:V(t)};break;case"IC-SIDE-NAVIGATION":e={navType:"side",parent:V(t)};break;case"IC-PAGE-HEADER":e={navType:"page-header",parent:null}}return e},H={XS:Number(E("--ic-breakpoint-xs").replace("px","")),S:Number(E("--ic-breakpoint-sm").replace("px","")),M:Number(E("--ic-breakpoint-md").replace("px","")),L:Number(E("--ic-breakpoint-lg").replace("px","")),XL:Number(E("--ic-breakpoint-xl").replace("px","")),UNDEFINED:1200},P=function(n,t){return""!==n&&!t},j=function(n,t){return!!n.querySelector('[slot="'.concat(t,'"]'))},M=function(n,t,e){void 0===n&&t!==n&&e()},O=function(n,t){for(var e=0;e<n.length;e++){var i=n[e],r=i.prop,o=i.propName;null==r&&console.error("No ".concat(o," specified for ").concat(t," component - prop '").concat(o,"' (web components) / '").concat(R(o),"' (react) required"))}},R=function(n){for(var t=(n=n.toLowerCase()).split("-"),e=t[0],i=1;i<t.length;i++)e+=t[i].substring(0,1).toUpperCase()+t[i].substring(1);return e},Z=function(n){"undefined"!=typeof window&&void 0!==window.ResizeObserver&&n()},_=function(n){return parseInt(n,16)},G=function(n){var t;return 4===n.length?(t=n.replace("#","").split(""),{r:_(t[0]+t[0]),g:_(t[1]+t[1]),b:_(t[2]+t[2]),a:1}):{r:_(n.slice(1,3)),g:_(n.slice(3,5)),b:_(n.slice(5)),a:1}},X=function(n){var t;if("a"===n.slice(3,4).toLowerCase()){t={r:null,g:null,b:null,a:null};var e=n.substring(5,n.length-1).replace(/ /g,"").split(",");t.r=Number(e[0]),t.g=Number(e[1]),t.b=Number(e[2]),t.a=Number(e[3])}else{t={r:null,g:null,b:null,a:1};var i=n.substring(4,n.length-1).replace(/ /g,"").split(",");t.r=Number(i[0]),t.g=Number(i[1]),t.b=Number(i[2])}return t},B=function(n){return n.scrollWidth>n.clientWidth},U=function(n){return n.parentElement.tagName},V=function(n){return n.parentElement},J=function(){return!!document.querySelector("ic-classification-banner:not([inline='true'])")},K=function(n){return n.closest("FORM")},Q=function(n,t){var e=K(n);null!==e&&e.addEventListener("reset",t)},Y=function(n,t){var e=K(n);null!==e&&e.removeEventListener("reset",t)}},5121:function(n,t,e){e.r(t),e.d(t,{ic_hero:function(){return l}});var i=e(4942),r=e(5671),o=e(3144),a=e(6902),c=e(9455),s=e(713),l=function(){function n(t){(0,r.Z)(this,n),(0,a.r)(this,t),this.heading=void 0,this.subheading=void 0,this.secondaryHeading=void 0,this.secondarySubheading=void 0,this.backgroundImage=void 0,this.disableBackgroundParallax=!1,this.aligned="left",this.contentAligned="left",this.small=!1,this.rightContent=!1,this.scrollFactor="right -100px",this.leftContentFullWidth=!this.rightContent&&void 0===this.secondaryHeading,this.foregroundColor=(0,s.k)()}return(0,o.Z)(n,[{key:"themeChangeHandler",value:function(n){var t=n.detail;this.foregroundColor=t.mode}},{key:"doScroll",value:function(){if(!this.disableBackgroundParallax){var n=.4*document.scrollingElement.scrollTop-100;this.scrollFactor="right "+n+"px"}}},{key:"componentWillLoad",value:function(){this.rightContent=(0,s.s)(this.el,"secondary")}},{key:"componentDidLoad",value:function(){(0,s.a)([{prop:this.heading,propName:"heading"}],"Hero")}},{key:"componentWillRender",value:function(){this.rightContent=(0,s.s)(this.el,"secondary")}},{key:"render",value:function(){var n,t,e=this.aligned,r=this.small,o=this.heading,s=this.subheading,l=this.secondaryHeading,u=this.secondarySubheading,d=this.foregroundColor,h=this.backgroundImage,g=this.scrollFactor,m={};return void 0!==h&&(m={"background-image":"url("+h+")","background-position":g}),(0,a.h)(a.H,{class:(n={},(0,i.Z)(n,c.I.Dark,d===c.I.Dark),(0,i.Z)(n,"has-background-image",void 0!==h),n),style:m},(0,a.h)("ic-section-container",{aligned:e,fullHeight:!0,class:"section-container"},(0,a.h)("div",{class:(t={},(0,i.Z)(t,"left-container",!0),(0,i.Z)(t,"left-container-full-width",this.leftContentFullWidth),t)},(0,a.h)("div",{class:"heading"},(0,a.h)("slot",{name:"heading"},(0,a.h)("ic-typography",{variant:r?"h2":"h1",class:(0,i.Z)({},"heading-bottom-spacing",!r)},o))),(0,a.h)("div",{class:"subheading"},(0,a.h)("slot",{name:"subheading"},(0,a.h)("ic-typography",{variant:"body"},s))),(0,a.h)("div",{class:"interaction-container"},(0,a.h)("slot",{name:"interaction"}))),(void 0!==l||this.rightContent)&&(0,a.h)("div",{class:"right-container"},(0,a.h)("slot",{name:"secondary"},l&&(0,a.h)("div",{class:"secondary-container"},(0,a.h)("div",{class:"secondary-heading"},(0,a.h)("ic-typography",{variant:"h4"},l)),(0,a.h)("div",{class:"secondary-subheading"},(0,a.h)("ic-typography",{variant:"subtitle-small"},u)))))))}},{key:"el",get:function(){return(0,a.g)(this)}}]),n}();l.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;background-color:var(--ic-theme-tertiary);color:var(--ic-theme-text);--hero-heading-bottom-margin:var(--ic-space-md)}:host(.dark){background-color:var(--ic-theme-secondary)}:host(.has-background-image){background-repeat:no-repeat;background-position:right -100px;background-size:auto calc(100% + 100px);box-shadow:var(--ic-elevation-inset)}@media (prefers-reduced-motion){:host(.has-background-image){background-position:right -100px !important}}ic-typography.heading-bottom-spacing{margin-bottom:var(--hero-heading-bottom-margin)}.section-container{display:flex;align-items:center;height:100%}.left-container{padding:var(--ic-space-xl) 0}.left-container:not(.left-container-full-width){flex-basis:50%}.left-container-full-width{width:100%}.right-container{flex-basis:50%}.interaction-container{display:flex;gap:var(--ic-space-md);margin-top:var(--ic-space-lg)}.secondary-container{display:flex;flex-direction:column;justify-content:center;border-left:var(--ic-space-xxxs) solid var(--ic-theme-text)}.secondary-subheading{margin-top:var(--ic-space-xxs)}:host([content-aligned="left"]) .left-container,:host([content-aligned="left"]) .interaction-container{justify-content:flex-start;text-align:left}:host([content-aligned="center"]) .left-container,:host([content-aligned="center"]) .interaction-container{justify-content:center;text-align:center}@media (min-width: 992px){.left-container-full-width{width:66.6%}}@media (min-width: 1044px){:host,.section-container{min-height:208px}:host([small]),:host([small]) .section-container{min-height:173px}.left-container:not(.left-container-full-width){flex-basis:66.6%}.left-container{min-height:144px}.right-container{flex-basis:33.3%;margin-left:50px}.secondary-container{min-height:144px}.secondary-heading,.secondary-subheading{margin-left:63px}}@media (min-width: 801px) and (max-width: 1043px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:256px}:host([small]),:host([small]) .section-container{min-height:240px}:host([secondary-heading]),:host([secondary-heading]) .section-container{min-height:224px}.left-container{min-height:160px}.secondary-container{min-height:160px}.secondary-heading,.secondary-subheading{margin-left:94.75px}.right-container{margin-left:50px}}@media (min-width: 641px) and (max-width: 800px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:256px}:host([small]),:host([small]) .section-container{min-height:240px}:host([secondary-heading]),:host([secondary-heading]) .section-container{min-height:224px}.left-container{min-height:160px}.secondary-container{min-height:160px}.secondary-heading,.secondary-subheading{margin-left:34px}.right-container{margin-left:50px}}@media (min-width: 481px) and (max-width: 640px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:208px}:host([small]),:host([small]) .section-container{min-height:173px}:host([secondary-heading]),:host([secondary-heading]) .section-container{min-height:280px}:host([secondary-heading]) .section-container,:host([small]) .section-container,.section-container{flex-direction:column;align-items:flex-start}.left-container{height:-moz-fit-content;height:fit-content}.secondary-container{height:-moz-fit-content;height:fit-content;border:none}.right-container{margin-bottom:40px}}@media (max-width: 480px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:192px}:host([small]),:host([small]) .section-container{min-height:173px}:host([secondary-heading]),:host([secondary-heading]) .section-container{min-height:264px}:host([secondary-heading]) .section-container,:host([small]) .section-container,.section-container{flex-direction:column;align-items:flex-start}.left-container{height:-moz-fit-content;height:fit-content}.secondary-container{height:-moz-fit-content;height:fit-content;border:none}}'},9455:function(n,t,e){var i,r;e.d(t,{I:function(){return r},a:function(){return i}}),function(n){n.Warning="warning",n.Error="error",n.Success="success"}(i||(i={})),function(n){n.Default="default",n.Dark="dark",n.Light="light"}(r||(r={}))}}]);
//# sourceMappingURL=5121-aa2f1120bcda00bd2e70.js.map