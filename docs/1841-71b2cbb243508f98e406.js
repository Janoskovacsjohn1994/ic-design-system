"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[1841],{1841:function(t,e,i){i.r(e),i.d(e,{ic_top_navigation:function(){return o}});var a=i(3660),n=i(3077),s=i(6003);const o=class{constructor(t){(0,a.r)(this,t),this.icNavigationMenuClosed=(0,a.c)(this,"icNavigationMenuClosed",7),this.icNavigationMenuOpened=(0,a.c)(this,"icNavigationMenuOpened",7),this.hasAppIcon=!1,this.hasIconButtons=!1,this.hasNavigation=!1,this.hasSearchSlotContent=!1,this.resizeObserver=null,this.searchBar=null,this.initialiseSearchBar=()=>{if(this.hasSearchSlotContent){const t=(0,s.J)(this.el,"search");t&&"IC-SEARCH-BAR"===t.tagName?this.searchBar=t:t&&"FORM"===t.tagName&&(this.searchBar=t.querySelector("ic-search-bar")),null!==this.searchBar&&(this.searchBar.hideLabel=!0)}},this.emitTopNavResized=t=>{const e=new CustomEvent("topNavResized",{detail:{size:t}});this.el.dispatchEvent(e)},this.menuButtonClick=()=>{this.showNavMenu(!0)},this.searchButtonMouseDownHandler=()=>{this.searchButtonClick=!0},this.searchButtonClickHandler=()=>{this.toggleSearchBar(),this.searchButtonClick=!1},this.resizeObserverCallback=t=>{t!==this.deviceSize&&(this.deviceSize=t,t>s.D.L&&(this.showNavMenu(!1),this.mobileSearchBarVisible&&this.toggleSearchBar()),this.emitTopNavResized(t),null!==document.activeElement&&void 0!==document.activeElement&&"IC-SEARCH-BAR"===document.activeElement.tagName&&(this.searchBar.setAttribute("hidden","true"),this.searchBar.removeAttribute("hidden"),setTimeout((()=>{this.searchBar.focus()}),100)))},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{const t=(0,s.g)();this.resizeObserverCallback(t)})),this.resizeObserver.observe(this.el)},this.deviceSize=s.D.XL,this.foregroundColor=(0,s.l)(),this.hasFullWidthSearchBar=!1,this.menuOpen=!1,this.mobileSearchBarVisible=!1,this.mobileSearchHiddenOnBlur=!1,this.navMenuVisible=!1,this.searchButtonClick=!1,this.searchValue="",this.contentAligned="full-width",this.href="/",this.inline=!1,this.shortAppTitle="",this.status="",this.version="",this.appTitle=void 0}watchPropHandler(t,e){(0,s.o)(e,t,this.initialiseSearchBar)}disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}componentWillLoad(){this.hasAppIcon=(0,s.i)(this.el,"app-icon"),this.hasNavigation=(0,s.i)(this.el,"navigation"),this.hasIconButtons=(0,s.i)(this.el,"buttons"),this.hasSearchSlotContent=(0,s.i)(this.el,"search"),this.deviceSize=(0,s.g)(),this.initialiseSearchBar()}componentDidLoad(){(0,s.c)(this.runResizeObserver),!(0,s.i)(this.el,"app-title")&&(0,s.a)([{prop:this.appTitle,propName:"app-title"}],"Top Navigation")}componentWillRender(){this.hasNavigation=(0,s.i)(this.el,"navigation"),this.hasSearchSlotContent=(0,s.i)(this.el,"search"),this.hasIconButtons=(0,s.i)(this.el,"buttons"),this.hasAppIcon=(0,s.i)(this.el,"app-icon")}navBarMenuCloseHandler(){this.showNavMenu(!1);this.el.shadowRoot.querySelector("#menu-button").focus()}searchInputBlurHandler(t){null!==t.detail&&(this.mobileSearchBarVisible&&!this.searchButtonClick&&this.toggleSearchBar(),this.searchValue=t.detail.value)}searchValueChangeHandler(t){this.searchValue=t.detail.value}themeChangeHandler(t){const e=t.detail;this.foregroundColor=e.mode}toggleSearchBar(){this.mobileSearchBarVisible=!this.mobileSearchBarVisible,null!==this.searchBar&&(this.mobileSearchBarVisible?(this.mobileSearchButtonEl.updateAriaLabel("Hide search"),this.hasFullWidthSearchBar=!0,this.searchBar.fullWidth=!0,setTimeout((()=>{this.searchBar.focus()}),100)):(this.mobileSearchButtonEl.updateAriaLabel("Show search"),this.hasFullWidthSearchBar=!1,this.searchBar.fullWidth=!1))}showNavMenu(t){this.navMenuVisible=t,t?(this.icNavigationMenuOpened.emit(),document.body.style.height="100%",document.body.style.overflow="hidden"):(this.icNavigationMenuClosed.emit(),document.body.style.height="auto",document.body.style.overflow="auto")}render(){const t=this.hasNavigation||this.hasIconButtons||""!==this.status||""!==this.version,e=this.deviceSize<=s.D.S?"default":"large";let i="h3";const o=""!==this.appTitle&&void 0!==this.appTitle;this.deviceSize<=s.D.L&&(i="h4",this.deviceSize<=s.D.S&&(i="subtitle-small"));const r=this.mobileSearchBarVisible?"Hide search":"Show search",h=this.deviceSize<=s.D.S?"small":"default",l=(0,s.i)(this.el,"app-title")?"div":"a",c="a"==l&&{href:this.href};return(0,a.h)(a.H,{class:{"fullwidth-searchbar":this.hasFullWidthSearchBar,[n.I.Dark]:this.foregroundColor===n.I.Dark}},(0,a.h)("div",{class:"top-navigation"},(0,a.h)("ic-section-container",{aligned:this.contentAligned,"full-height":!0},(0,a.h)("header",{role:"banner"},(0,a.h)("div",{class:"top-panel-container"},(0,a.h)("div",{class:"app-details-container"},(o||(0,s.i)(this.el,"app-title"))&&(0,a.h)(l,Object.assign({class:"title-link"},c),this.hasAppIcon&&(0,a.h)("div",{class:"app-icon-container","aria-hidden":"true"},(0,a.h)("slot",{name:"app-icon"})),this.deviceSize<=s.D.S&&!(0,s.B)(this.shortAppTitle)?(0,a.h)("ic-typography",{variant:"subtitle-small","aria-label":"".concat(this.appTitle," (").concat(this.shortAppTitle,")")},(0,a.h)("h1",null,this.shortAppTitle)):(0,a.h)("ic-typography",{variant:i},(0,a.h)("h1",{class:"title-wrap"},(0,s.i)(this.el,"app-title")?(0,a.h)("slot",{name:"app-title"}):this.appTitle))),""!==this.status&&(0,a.h)("div",{class:"app-status"},(0,a.h)("ic-typography",{"aria-label":"app tag",variant:"label-uppercase",class:"app-status-text"},this.status)),""!==this.version&&(0,a.h)("div",{class:"app-version"},(0,a.h)("ic-typography",{variant:"label",class:"app-version-text","aria-label":"app version"},this.version))),(this.hasSearchSlotContent||t)&&(0,a.h)("div",{class:"search-menu-container"},(0,a.h)("div",{class:"search-actions-container"},this.deviceSize>s.D.L&&(0,a.h)("slot",{name:"search"}),this.hasSearchSlotContent&&this.deviceSize<=s.D.L&&(0,a.h)("ic-button",{id:"search-toggle-button",ref:t=>this.mobileSearchButtonEl=t,onMouseDown:this.searchButtonMouseDownHandler,variant:"icon",size:e,"aria-label":r,appearance:this.foregroundColor,onClick:this.searchButtonClickHandler},(0,a.h)("slot",{name:"toggle-icon"},(0,a.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#ffffff"},(0,a.h)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,a.h)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))),this.hasIconButtons&&this.deviceSize>s.D.L&&(0,a.h)("div",{class:"icon-buttons-container"},(0,a.h)("slot",{name:"buttons"})),t&&this.deviceSize<=s.D.L&&(0,a.h)("div",{class:"menu-button-container"},(0,a.h)("span",{id:"navigation-landmark-button-text",class:"navigation-landmark-button-text","aria-hidden":"true"},"Main navigation button"),(0,a.h)("nav",{"aria-labelledby":"navigation-landmark-button-text","aria-hidden":this.navMenuVisible?"true":"false"},(0,a.h)("ic-button",{id:"menu-button",appearance:this.foregroundColor,variant:"secondary","aria-expanded":this.menuOpen?"true":"false","aria-haspopup":"true","aria-label":"Open ".concat(this.hasNavigation?"navigation":"app"," menu"),size:h,onClick:this.menuButtonClick},"Menu",(0,a.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",slot:"icon"},(0,a.h)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,a.h)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})))))))),this.mobileSearchBarVisible&&(0,a.h)("div",{class:"search-bar-container"},(0,a.h)("slot",{name:"search"})),this.hasNavigation&&this.deviceSize>s.D.L&&(0,a.h)("div",{class:"navigation-tabs"},(0,a.h)("span",{id:"navigation-landmark-text",class:"navigation-landmark-text","aria-hidden":"true"},"Main navigation"),(0,a.h)("nav",{"aria-labelledby":"navigation-landmark-text",class:"nav-panel-container"},(0,a.h)("ic-horizontal-scroll",{appearance:this.foregroundColor},(0,a.h)("ul",{class:"navigation-item-list",tabindex:"-1"},(0,a.h)("slot",{name:"navigation"})))))))),this.navMenuVisible&&(0,a.h)("ic-navigation-menu",{version:this.version,status:this.status,class:{inline:this.inline}},(0,a.h)("div",{class:"menu-buttons-slot",slot:"buttons"},(0,a.h)("slot",{name:"buttons"})),(0,a.h)("ul",{slot:"navigation"},(0,a.h)("slot",{name:"navigation"}))))}get el(){return(0,a.g)(this)}static get watchers(){return{appTitle:["watchPropHandler"]}}};o.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;color:var(--ic-theme-text);width:100%;position:relative}:host .top-navigation{background-color:var(--ic-theme-primary);height:-moz-max-content;height:max-content}:host(.fullwidth-searchbar) slot[name="search"]::slotted(form){width:100%}:host .title-link{display:inline-flex;align-items:center;text-decoration:none;padding:var(--ic-space-xxs);transition:var(--ic-easing-transition-fast)}:host .title-link,:host .title-link:visited,:host .title-link:active,:host .title-link ::slotted(a),:host .title-link:visited ::slotted(a),:host .title-link:active ::slotted(a){color:var(--ic-theme-text);text-decoration:none;outline:none}:host .title-link:hover:not(:focus){background-color:var(--ic-theme-hover)}:host .title-link:active:not(:focus){background-color:var(--ic-theme-active)}:host .title-link:hover{border-radius:var(--ic-border-radius)}:host .title-link:focus,:host .title-link:focus-within{border-radius:var(--ic-border-radius);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline)}:host .title-link ic-typography{font-weight:600}:host .nav-panel-container{border-top:var(--ic-keyline-lighten);padding:0 var(--ic-space-lg);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin));display:flex}:host(.dark) .nav-panel-container{border-top:var(--ic-keyline-darken)}.top-panel-container{display:flex;padding-top:0.5rem;padding-bottom:0.5rem}.navigation-tabs{margin-top:calc(-1 * var(--ic-space-1px))}.app-details-container{display:flex;align-items:center;flex:1 1 auto;margin-right:var(--ic-space-md)}.app-icon-container{display:flex;padding-right:var(--ic-space-xs)}.icon-buttons-container{display:flex;margin-left:var(--ic-space-md)}.icon-buttons-container ::slotted(nav){display:flex}.title-wrap{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}:host .app-status{border-radius:var(--ic-space-md);background-color:var(--ic-architectural-white);color:var(--ic-color-primary-text);padding:var(--ic-space-xxs) var(--ic-space-lg);margin-left:var(--ic-space-md);flex:1 1 0;max-width:-moz-fit-content;max-width:fit-content}:host(.dark) .app-status{background-color:var(--ic-theme-text);color:var(--ic-color-white-text)}:host .app-version{border-radius:var(--ic-space-md);background-color:var(--ic-theme-active);padding:var(--ic-space-xxs) var(--ic-space-sm);margin-left:var(--ic-space-xs);flex:1 1 0;max-width:-moz-fit-content;max-width:fit-content}slot[name="app-icon"]::slotted(svg){fill:var(--ic-theme-text);width:2em;height:2em}slot[name="toggle-icon"] svg{fill:var(--ic-theme-text)}.search-menu-container{justify-content:right;display:flex;align-items:center}.menu-button-container{margin-left:var(--ic-space-md)}.menu-button-container .navigation-landmark-button-text{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}.search-actions-container{display:flex}.menu-buttons-slot{display:flex;flex-direction:column}.navigation-landmark-text{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}.navigation-item-list{display:flex;list-style:none;height:2.75rem}.navigation-item-list::-webkit-scrollbar{display:none}:host ic-section-container{padding-bottom:0 !important;padding-top:0 !important}@media screen and (min-width: 993px){.app-details-container{margin-right:var(--ic-space-lg)}}@media screen and (max-width: 1200px){:host .nav-panel-container{padding:0 var(--ic-space-md)}}@media screen and (max-width: 992px){:host .nav-panel-container,:host .app-status,:host .app-version{display:none}:host .title-link{margin-right:var(--ic-space-xs)}.search-menu-container{max-width:10rem}.search-bar-container{display:flex;justify-content:center;align-items:center;border-top:var(--ic-keyline-darken);height:4rem;padding-left:var(--ic-space-md);padding-right:var(--ic-space-md);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin))}}@media screen and (max-width: 576px){:host .title-link{margin-right:var(--ic-space-xxxs);word-break:break-word;-webkit-hyphens:none;hyphens:none}.top-panel-container{min-height:2.5rem}.searchbox-inline{display:none}.search-bar-container{margin-top:0;height:3.5rem;padding-left:var(--ic-space-xs);padding-right:var(--ic-space-xs)}.menu-button-container{margin-left:var(--ic-space-sm)}slot[name="app-icon"]::slotted(svg){width:1.5em;height:1.5em}slot[name="toggle-icon"] svg{width:1.5em;height:1.5em}}@media (forced-colors: active){:host .top-navigation{border-bottom:var(--ic-hc-border)}.app-status,.app-version{border:var(--ic-hc-border)}slot[name="app-icon"]::slotted(svg){fill:currentcolor}}'}}]);