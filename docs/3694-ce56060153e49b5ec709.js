"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[3694],{73694:function(e,t,i){i.r(t),i.d(t,{ic_top_navigation:function(){return s}});var a=i(19067),n=i(73817),o=i(83689);const s=class{constructor(e){(0,a.r)(this,e),this.icNavigationMenuClosed=(0,a.c)(this,"icNavigationMenuClosed",7),this.icNavigationMenuOpened=(0,a.c)(this,"icNavigationMenuOpened",7),this.topNavResized=(0,a.c)(this,"topNavResized",7),this.hasAppIcon=!1,this.hasIconButtons=!1,this.hasNavigation=!1,this.hasSearchSlotContent=!1,this.resizeObserver=null,this.searchBar=null,this.checkSlots=()=>{this.hasAppIcon=(0,o.i)(this.el,"app-icon"),this.hasNavigation=(0,o.i)(this.el,"navigation"),this.hasIconButtons=(0,o.i)(this.el,"buttons"),this.hasSearchSlotContent=(0,o.i)(this.el,"search")},this.initialiseSearchBar=()=>{if(this.hasSearchSlotContent){const e=(0,o.K)(this.el,"search");"IC-SEARCH-BAR"===(null==e?void 0:e.tagName)?this.searchBar=e:"FORM"===(null==e?void 0:e.tagName)&&(this.searchBar=e.querySelector("ic-search-bar")),null!==this.searchBar&&(this.searchBar.hideLabel=!0)}},this.menuButtonClick=()=>{this.showNavMenu(!0)},this.searchButtonMouseDownHandler=()=>{this.searchButtonClick=!0},this.searchButtonClickHandler=()=>{this.toggleSearchBar(),this.searchButtonClick=!1},this.resizeObserverCallback=e=>{e!==this.deviceSize&&(this.deviceSize=e,e>this.customMobileBreakpoint&&(this.showNavMenu(!1),this.mobileSearchBarVisible&&this.toggleSearchBar()),this.topNavResized.emit({size:e}),this.searchBar&&document.activeElement===this.searchBar&&(this.searchBar.setAttribute("hidden","true"),this.searchBar.removeAttribute("hidden"),setTimeout((()=>{this.searchBar.focus()}),100)))},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{this.resizeObserverCallback((0,o.e)())})),this.resizeObserver.observe(this.el)},this.deviceSize=o.D.XL,this.foregroundColor=(0,o.b)(),this.hasFullWidthSearchBar=!1,this.mobileSearchBarVisible=!1,this.mobileSearchHiddenOnBlur=!1,this.navMenuVisible=!1,this.searchButtonClick=!1,this.searchValue="",this.contentAligned="full-width",this.customMobileBreakpoint=o.D.L,this.href="/",this.inline=!1,this.shortAppTitle="",this.status="",this.version="",this.appTitle=void 0}watchPropHandler(e,t){(0,o.o)(t,e,this.initialiseSearchBar)}disconnectedCallback(){var e;null===(e=this.resizeObserver)||void 0===e||e.disconnect()}componentWillLoad(){this.checkSlots(),this.deviceSize=(0,o.e)(),this.initialiseSearchBar()}componentDidLoad(){(0,o.f)(this.runResizeObserver),!(0,o.i)(this.el,"app-title")&&(0,o.a)([{prop:this.appTitle,propName:"app-title"}],"Top Navigation")}componentWillRender(){this.checkSlots()}navBarMenuCloseHandler(){this.showNavMenu(!1),this.el.shadowRoot.querySelector("#menu-button").focus()}searchInputBlurHandler({detail:e}){null!==e&&(this.mobileSearchBarVisible&&!this.searchButtonClick&&this.toggleSearchBar(),this.searchValue=e.value)}searchValueChangeHandler({detail:e}){this.searchValue=e.value}themeChangeHandler({detail:e}){this.foregroundColor=e.mode}toggleSearchBar(){this.mobileSearchBarVisible=!this.mobileSearchBarVisible,null!==this.searchBar&&(this.mobileSearchButtonEl.setAttribute("aria-label",(this.mobileSearchBarVisible?"Hide":"Show")+" search"),this.hasFullWidthSearchBar=this.mobileSearchBarVisible,this.searchBar.fullWidth=this.mobileSearchBarVisible,this.mobileSearchBarVisible&&setTimeout((()=>{this.searchBar.focus()}),100))}showNavMenu(e){this.navMenuVisible=e,(e?this.icNavigationMenuOpened:this.icNavigationMenuClosed).emit(),document.body.style.height=e?"100%":"auto",document.body.style.overflow=e?"hidden":"auto"}render(){const{appTitle:e,contentAligned:t,customMobileBreakpoint:i,deviceSize:s,el:r,foregroundColor:l,hasAppIcon:h,hasFullWidthSearchBar:c,hasIconButtons:d,hasNavigation:p,hasSearchSlotContent:m,href:u,inline:b,menuButtonClick:v,mobileSearchBarVisible:g,navMenuVisible:f,searchButtonClickHandler:x,searchButtonMouseDownHandler:k,shortAppTitle:w,status:y,version:B}=this,z=""!==y,S=""!==B,C=p||d||z||S,M=s<=o.D.S?"default":"large",H=""!==e&&(0,o.d)(e),N=s<=i,V=N?s<=o.D.S?"subtitle-small":"h4":"h3",O=(g?"Hide":"Show")+" search",A=s<=o.D.S?"small":"default",D=(0,o.i)(r,"short-app-title"),I=(0,o.i)(r,"app-title"),R=I?"div":"a",T="a"==R&&{href:u};return(0,a.h)(a.H,{class:{"fullwidth-searchbar":c,"mobile-mode":N,[n.I.Dark]:l===n.I.Dark}},(0,a.h)("div",{class:"top-navigation"},(0,a.h)("ic-section-container",{aligned:t,"full-height":!0},(0,a.h)("header",{role:"banner"},(0,a.h)("div",{class:"top-panel-container"},(0,a.h)("div",{class:"app-details-container"},(H||I)&&(0,a.h)(R,Object.assign({class:"title-link"},T),h&&(0,a.h)("div",{class:"app-icon-container"},(0,a.h)("slot",{name:"app-icon"})),s<=o.D.S&&(!(0,o.F)(w)||D)?(0,a.h)("ic-typography",{variant:"subtitle-small","aria-label":(!I||!D)&&`${e} (${w})`},(0,a.h)("h1",null,D?(0,a.h)("slot",{name:"short-app-title"}):w)):(0,a.h)("ic-typography",{variant:V},(0,a.h)("h1",{class:"title-wrap"},I?(0,a.h)("slot",{name:"app-title"}):e))),z&&(0,a.h)("div",{class:"app-status"},(0,a.h)("ic-typography",{"aria-label":"app tag",variant:"label-uppercase",class:"app-status-text"},y)),S&&(0,a.h)("div",{class:"app-version"},(0,a.h)("ic-typography",{variant:"label",class:"app-version-text","aria-label":"app version"},B))),(m||C)&&(0,a.h)("div",{class:"search-menu-container"},(0,a.h)("div",{class:"search-actions-container"},!N&&(0,a.h)("slot",{name:"search"}),m&&N&&(0,a.h)("ic-button",{id:"search-toggle-button",ref:e=>this.mobileSearchButtonEl=e,onMouseDown:k,variant:"icon",size:M,"aria-label":O,appearance:l,onClick:x},(0,a.h)("slot",{name:"toggle-icon"},(0,a.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#ffffff"},(0,a.h)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,a.h)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))),d&&!N&&(0,a.h)("div",{class:"icon-buttons-container"},(0,a.h)("slot",{name:"buttons"})),C&&N&&(0,a.h)("div",{class:"menu-button-container"},(0,a.h)("span",{id:"navigation-landmark-button-text",class:"navigation-landmark-button-text","aria-hidden":"true"},"Main navigation button"),(0,a.h)("nav",{"aria-labelledby":"navigation-landmark-button-text","aria-hidden":`${f}`},(0,a.h)("ic-button",{id:"menu-button",appearance:l,variant:"secondary","aria-expanded":"false","aria-haspopup":"true","aria-label":`Open ${p?"navigation":"app"} menu`,size:A,onClick:v},"Menu",(0,a.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",slot:"icon"},(0,a.h)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,a.h)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})))))))),g&&(0,a.h)("div",{class:"search-bar-container"},(0,a.h)("slot",{name:"search"})),p&&!N&&(0,a.h)("div",{class:"navigation-tabs"},(0,a.h)("span",{id:"navigation-landmark-text",class:"navigation-landmark-text","aria-hidden":"true"},"Main pages"),(0,a.h)("nav",{"aria-labelledby":"navigation-landmark-text",class:"nav-panel-container"},(0,a.h)("ic-horizontal-scroll",{appearance:l},(0,a.h)("ul",{class:"navigation-item-list",tabindex:"-1"},(0,a.h)("slot",{name:"navigation"})))))))),f&&(0,a.h)("ic-navigation-menu",{version:B,status:y,class:{inline:b}},d&&(0,a.h)("div",{class:"menu-buttons-slot",slot:"buttons"},(0,a.h)("slot",{name:"buttons"})),(0,a.h)("ul",{slot:"navigation"},(0,a.h)("slot",{name:"navigation"}))))}get el(){return(0,a.g)(this)}static get watchers(){return{appTitle:["watchPropHandler"]}}};s.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;color:var(--ic-theme-text);width:100%;position:relative}:host .top-navigation{background-color:var(--ic-theme-primary);height:-moz-max-content;height:max-content}:host(.fullwidth-searchbar) slot[name="search"]::slotted(form){width:100%}:host .title-link{display:inline-flex;align-items:center;text-decoration:none;padding:var(--ic-space-xxs);transition:var(--ic-easing-transition-fast)}:host .title-link,:host .title-link:visited,:host .title-link:active,:host .title-link ::slotted(a),:host .title-link:visited ::slotted(a),:host .title-link:active ::slotted(a){color:var(--ic-theme-text);text-decoration:none;outline:none}:host .title-link:hover:not(:focus){background-color:var(--ic-theme-hover)}:host .title-link:active:not(:focus){background-color:var(--ic-theme-active)}:host .title-link:hover{border-radius:var(--ic-border-radius)}:host .title-link:focus,:host .title-link:focus-within{border-radius:var(--ic-border-radius);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline)}:host .title-link ic-typography{font-weight:600}:host .nav-panel-container{border-top:var(--ic-keyline-lighten);padding:0 var(--ic-space-lg);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin));display:flex}:host(.dark) .nav-panel-container{border-top:var(--ic-keyline-darken)}.top-panel-container{display:flex;padding-top:0.5rem;padding-bottom:0.5rem}.navigation-tabs{margin-top:calc(-1 * var(--ic-space-1px))}.app-details-container{display:flex;align-items:center;flex:1 1 auto;margin-right:var(--ic-space-md)}.app-icon-container{display:flex;padding-right:var(--ic-space-xs)}.icon-buttons-container{display:flex;margin-left:var(--ic-space-md)}.icon-buttons-container ::slotted(nav){display:flex}.title-wrap{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}:host .app-status{border-radius:var(--ic-space-md);background-color:var(--ic-architectural-white);color:var(--ic-color-primary-text);padding:var(--ic-space-xxs) var(--ic-space-lg);margin-left:var(--ic-space-md);flex:1 1 0;max-width:-moz-fit-content;max-width:fit-content}:host(.dark) .app-status{background-color:var(--ic-theme-text);color:var(--ic-color-white-text)}:host .app-version{border-radius:var(--ic-space-md);background-color:var(--ic-theme-active);padding:var(--ic-space-xxs) var(--ic-space-sm);margin-left:var(--ic-space-xs);flex:1 1 0;max-width:-moz-fit-content;max-width:fit-content}slot[name="app-icon"]::slotted(*){fill:var(--ic-theme-text);width:2em;height:2em}slot[name="toggle-icon"] svg{fill:var(--ic-theme-text)}.search-menu-container{justify-content:right;display:flex;align-items:center}.menu-button-container{margin-left:var(--ic-space-md)}.menu-button-container .navigation-landmark-button-text{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}.search-actions-container{display:flex}.menu-buttons-slot{display:flex;flex-direction:column}.navigation-landmark-text{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}.navigation-item-list{display:flex;list-style:none;height:2.75rem}.navigation-item-list::-webkit-scrollbar{display:none}:host ic-section-container{padding-bottom:0 !important;padding-top:0 !important}@media screen and (min-width: 993px){.app-details-container{margin-right:var(--ic-space-lg)}}@media screen and (max-width: 1200px){:host .nav-panel-container{padding:0 var(--ic-space-md)}}:host(.mobile-mode) .app-status,:host(.mobile-mode) .app-version{display:none}:host(.mobile-mode) .title-link{margin-right:var(--ic-space-xs)}:host(.mobile-mode) .search-menu-container{max-width:10rem}:host(.mobile-mode) .search-bar-container{display:flex;justify-content:center;align-items:center;border-top:var(--ic-keyline-darken);height:4rem;padding-left:var(--ic-space-md);padding-right:var(--ic-space-md);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin))}@media screen and (max-width: 576px){:host .title-link{margin-right:var(--ic-space-xxxs);word-break:break-word;-webkit-hyphens:none;hyphens:none}.top-panel-container{min-height:2.5rem}.search-bar-container{margin-top:0;height:3.5rem;padding-left:var(--ic-space-xs);padding-right:var(--ic-space-xs)}.menu-button-container{margin-left:var(--ic-space-sm)}slot[name="app-icon"]::slotted(*){width:1.5em;height:1.5em}slot[name="toggle-icon"] svg{width:1.5em;height:1.5em}}@media (forced-colors: active){:host .top-navigation{border-bottom:var(--ic-hc-border)}.app-status,.app-version{border:var(--ic-hc-border)}slot[name="app-icon"]::slotted(*){fill:currentcolor}}'}}]);