"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[426],{426:function(t,e,i){i.r(e),i.d(e,{ic_link:function(){return s}});var o=i(19067),n=i(91849),r=i(83689),l=i(73817);const s=class{constructor(t){(0,o.r)(this,t),this.inheritedAttributes={},this.hostMutationObserver=null,this.hostMutationCallback=t=>{let e=!1;t.forEach((({attributeName:t})=>{r.y.includes(t)&&(this.inheritedAttributes[t]=this.el.getAttribute(t),e=!0)})),e&&(0,o.f)(this)},this.appearance="default",this.download=!1,this.href=null,this.hreflang=void 0,this.referrerpolicy=void 0,this.rel=void 0,this.showIcon=void 0,this.target=void 0}componentWillLoad(){this.inheritedAttributes=(0,r.x)(this.el,r.y),this.updateTheme()}componentDidLoad(){this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{attributes:!0})}disconnectedCallback(){var t;null===(t=this.hostMutationObserver)||void 0===t||t.disconnect()}themeChangeHandler({detail:t}){this.updateTheme(t.mode)}async setFocus(){var t;null===(t=this.el.shadowRoot.querySelector("a"))||void 0===t||t.focus()}updateTheme(t=null){const e=(0,r.l)(this.el,t);e!==l.I.Default&&(this.appearance=e)}hasRouterSlot(){return this.routerSlot=this.el.querySelector('[slot="router-item"]'),this.routerSlot&&(this.routerSlot.ariaLabel=this.routerSlot.textContent),!!this.routerSlot}render(){const{download:t,href:e,hreflang:i,referrerpolicy:r,rel:l,target:s,showIcon:a,appearance:c}=this;return(0,o.h)(o.H,{class:{link:!0,[`${c}`]:!0}},this.hasRouterSlot()?(0,o.h)("slot",{name:"router-item"}):(0,o.h)("a",Object.assign({class:{"ic-link":null!==e,[`${c}`]:null!==e},download:!1!==t?t:null,href:e,hrefLang:i,referrerPolicy:r,rel:l,target:s,tabindex:null!==e?"0":"-1"},this.inheritedAttributes),(0,o.h)("slot",null),(a||"_blank"===s)&&(0,o.h)("span",{class:"ic-link-open-in-new-icon",innerHTML:n.O})))}static get delegatesFocus(){return!0}get el(){return(0,o.g)(this)}};s.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.link) .ic-link,:host(.link) ::slotted(a){color:var(--ic-hyperlink);text-decoration:underline;font-weight:var(--ic-font-weight-bold);transition:var(--ic-easing-transition-fast)}:host(.link.dark) .ic-link.dark,:host(.link.dark) ::slotted(a){color:var(--ic-color-primary-text)}:host(.link.light) .ic-link.light,:host(.link.light) ::slotted(a){color:var(--ic-color-white-text)}:host(.link) .ic-link:visited,:host(.link) ::slotted(a:visited){color:var(--ic-hyperlink-visited)}:host(.link) .ic-link:hover,:host(.link) .ic-link:focus,:host(.link) ::slotted(a:hover),:host(.link) ::slotted(a:focus){outline:none;border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none}@supports (text-underline-offset: 10%){:host(.link) .ic-link:hover,:host(.link) .ic-link:focus,:host(.link) ::slotted(a:hover),:host(.link) ::slotted(a:focus){text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:10%;border-bottom:0 !important;margin-bottom:0 !important}}:host(.link) .ic-link:active,:host(.link) .ic-link:focus:active,:host(.link) .ic-link:visited:active,:host(.link) ::slotted(a:active),:host(.link) ::slotted(a:focus:active),:host(.link) ::slotted(a:visited:active){text-decoration:none}.ic-link-open-in-new-icon{vertical-align:middle;margin-left:var(--ic-space-xxs)}.ic-link>.ic-link-open-in-new-icon{fill:var(--ic-hyperlink)}.ic-link.dark>.ic-link-open-in-new-icon{fill:var(--ic-color-primary-text)}.ic-link.light>.ic-link-open-in-new-icon{fill:var(--ic-color-white-text)}.ic-link-open-in-new-icon>svg{width:var(--ic-space-md);height:var(--ic-space-md);fill:currentcolor}.ic-link:visited>.ic-link-open-in-new-icon{fill:var(--ic-hyperlink-visited)}.ic-link.light:visited>.ic-link-open-in-new-icon{fill:var(--ic-hyperlink-contrast-visited)}:host(.breadcrumb-link) .ic-link{display:var(--breadcrumb-link-display);align-items:var(--breadcrumb-link-align-items);gap:var(--breadcrumb-link-gap)}:host(.breadcrumb-link) .ic-link ::slotted(.back-icon){height:var(--ic-space-lg);width:var(--ic-space-lg)}:host(.breadcrumb-link.current-page) a,:host(.breadcrumb-link.current-page) ::slotted(a){font-weight:normal;color:inherit;text-decoration:none;display:flex;align-items:center}:host(.breadcrumb-link.current-page) .ic-link,:host(.breadcrumb-link.current-page) ::slotted(a:focus){outline:var(--ic-hc-focus-outline);text-decoration:none}:host(.breadcrumb-link.current-page) .ic-link:visited{color:var(--ic-color-primary-text)}'}}]);