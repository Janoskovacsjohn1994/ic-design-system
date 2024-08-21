"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[780],{5002:function(e,t,i){i.d(t,{C:function(){return o}});const o='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},780:function(e,t,i){i.r(t),i.d(t,{ic_navigation_group:function(){return s}});var o=i(9917),n=i(7261),a=i(5002);i(6040);const s=class{constructor(e){(0,o.r)(this,e),this.allGroupedNavigationItems=[],this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS=100,this.IC_NAVIGATION_ITEM="ic-navigation-item",this.mouseGate=!1,this.nodeName="IC-NAVIGATION-GROUP",this.GROUPED_LINKS_WRAPPER_CLASS=".grouped-links-wrapper",this.sideNavExpandHandler=e=>{this.isSideNavExpanded=e.detail.sideNavExpanded;const t=this.el.shadowRoot.querySelector(this.GROUPED_LINKS_WRAPPER_CLASS);t&&(this.isSideNavExpanded?this.expanded&&this.expandedNavItemsHeight?this.setGroupedLinksElementHeight(t,this.expandedNavItemsHeight):this.expanded&&setTimeout((()=>{this.expandedNavItemsHeight=this.getNavigationChildItemsHeight(),this.setGroupedLinksElementHeight(t,this.expandedNavItemsHeight)}),this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS):this.expanded&&this.collapsedNavItemsHeight?this.setGroupedLinksElementHeight(t,this.collapsedNavItemsHeight):this.expanded&&setTimeout((()=>{this.collapsedNavItemsHeight=this.getNavigationChildItemsHeight(),this.setGroupedLinksElementHeight(t,this.collapsedNavItemsHeight)}),this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS))},this.topNavResizedHandler=({detail:e})=>{var t;const{size:i}=e;i!==this.deviceSize&&(this.deviceSize=i,this.inTopNavSideMenu=i<=((null===(t=this.parentEl)||void 0===t?void 0:t.customMobileBreakpoint)||n.D.L))},this.setGroupedNavItemTabIndex=e=>{this.el.querySelectorAll(this.IC_NAVIGATION_ITEM).forEach((t=>{const i=t.shadowRoot.querySelector("a")||t.querySelector("a");i&&i.setAttribute("tabindex",e)}))},this.toggleGroupedLinkWrapperHeight=(e,t)=>{e&&(t?(this.isSideNavExpanded?this.setGroupedLinksElementHeight(e,this.expandedNavItemsHeight):this.setGroupedLinksElementHeight(e,this.collapsedNavItemsHeight),this.setGroupedNavItemTabIndex("0")):(e.style.setProperty("--navigation-child-items-height","0"),this.setGroupedNavItemTabIndex("-1")))},this.toggleExpanded=()=>{this.expanded=!this.expanded;const e=this.el.shadowRoot.querySelector(this.GROUPED_LINKS_WRAPPER_CLASS);this.toggleGroupedLinkWrapperHeight(e,this.expanded)},this.handleClick=e=>{"top"===this.navigationType&&e.detail?this.toggleDropdown():this.toggleExpanded()},this.handleBlur=e=>{const t=e.relatedTarget;this.el.contains(t)||this.hideDropdown()},this.handleTopNavKeydown=e=>{" "===e.key||"Enter"===e.key?this.toggleDropdown():this.inTopNavSideMenu||"Escape"!==e.key||this.hideDropdown()},this.handleKeydown=e=>{if("Enter"===e.key||" "===e.key||"Escape"===e.key)switch(this.navigationType){case"top":this.handleTopNavKeydown(e);break;case"side":this.toggleExpanded(),e.preventDefault();break;default:this.toggleExpanded()}},this.handleMouseLeave=e=>{const t=e.relatedTarget;this.mouseGate=!1,this.el.contains(t)||t===this.dropdown||document.activeElement===this.el||this.el.contains(document.activeElement)||(null==t?void 0:t.nodeName)!==this.nodeName||!0!==this.dropdownOpen?this.el.contains(t)||t===this.dropdown||this.el.contains(document.activeElement)||(this.mouseGate=!1,setTimeout((()=>{this.dropdownOpen&&this.hideDropdown()}),500)):(this.mouseGate=!0,this.hideDropdown())},this.handleMouseEnter=e=>{const t=e.relatedTarget;document.addEventListener("keydown",this.handleKeydown),(null==t?void 0:t.nodeName)===this.nodeName&&!0===this.mouseGate?this.showDropdown():!1===this.dropdownOpen&&null!==t&&!1===this.mouseGate&&(this.mouseGate=!0,setTimeout((()=>{this.mouseGate&&this.showDropdown()}),500))},this.renderDropdownGroupedLinks=()=>(0,o.h)("div",{class:{"navigation-group-dropdown":!this.inTopNavSideMenu,"navigation-group-dropdown-side-menu":this.inTopNavSideMenu,selected:this.dropdownOpen&&!this.inTopNavSideMenu},onMouseLeave:this.inTopNavSideMenu?null:this.handleMouseLeave,ref:e=>this.dropdown=e},(0,o.h)("nav",{class:{"navigation-group-dropdown-items":!this.inTopNavSideMenu}},(0,o.h)("ul",null,(0,o.h)("slot",null)))),this.renderGroupedLinks=()=>(0,o.h)("ul",{class:"grouped-links-wrapper"},(0,o.h)("slot",null)),this.getNavigationChildItemsHeight=()=>{let e=0;return this.allGroupedNavigationItems.forEach((t=>{e+=t.offsetHeight})),`${e}px`},this.setInitialGroupedLinksWrapperHeight=()=>{const e=this.el.shadowRoot.querySelector(this.GROUPED_LINKS_WRAPPER_CLASS);e&&(this.isSideNavExpanded||this.collapsedNavItemsHeight||!this.expanded||(this.collapsedNavItemsHeight=this.getNavigationChildItemsHeight(),this.setGroupedLinksElementHeight(e,this.collapsedNavItemsHeight)),this.isSideNavExpanded&&this.expanded&&(this.expandedNavItemsHeight=this.getNavigationChildItemsHeight(),this.setGroupedLinksElementHeight(e,this.expandedNavItemsHeight)))},this.renderNavigationItems=()=>this.dropdownOpen||this.inTopNavSideMenu&&!this.expandable?this.renderDropdownGroupedLinks():"top"!==this.navigationType?this.renderGroupedLinks():null,this.deviceSize=n.D.XL,this.dropdownOpen=!1,this.expanded=!0,this.focusStyle=(0,n.b)(),this.inTopNavSideMenu=!1,this.navigationType=void 0,this.parentEl=void 0,this.expandable=!1,this.label=void 0}disconnectedCallback(){"side"===this.navigationType?this.parentEl.removeEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&this.parentEl.removeEventListener("topNavResized",this.topNavResizedHandler)}componentWillLoad(){this.deviceSize=(0,n.e)();const{navType:e,parent:t}=(0,n.z)(this.el);this.navigationType=e,this.parentEl=t,"side"===this.navigationType?this.parentEl.addEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&(this.parentEl.addEventListener("topNavResized",this.topNavResizedHandler),this.deviceSize<=this.parentEl.customMobileBreakpoint&&(this.inTopNavSideMenu=!0))}componentDidLoad(){this.allGroupedNavigationItems=Array.from(this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)),setTimeout((()=>this.setInitialGroupedLinksWrapperHeight()),this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS)}childBlurHandler(){this.hideDropdown()}navItemClickHandler(){this.hideDropdown()}themeChangeHandler(e){const t=e.detail;this.focusStyle=t.mode}async setFocus(){this.groupEl&&this.groupEl.focus()}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen}showDropdown(){this.dropdownOpen||this.toggleDropdown()}hideDropdown(){document.removeEventListener("keydown",this.handleKeydown),this.dropdownOpen&&this.toggleDropdown()}setGroupedLinksElementHeight(e,t){e.style.setProperty("--navigation-child-items-height",t)}render(){const{label:e,dropdownOpen:t,inTopNavSideMenu:i,expandable:n}=this;return(0,o.h)(o.H,{class:{"in-side-menu":i,expanded:this.expanded,collapsed:!this.expanded,"navigation-group-side-nav":"side"===this.navigationType},role:"listitem"},(0,o.h)("button",{onMouseEnter:!i&&"top"===this.navigationType&&this.handleMouseEnter,onMouseLeave:"top"===this.navigationType&&this.handleMouseLeave,tabindex:i&&!n?"-1":"0",onBlur:this.handleBlur,onClick:n?this.handleClick:null,onKeyDown:this.handleKeydown,class:{"navigation-group":!0,[this.focusStyle]:!i,"navigation-group-side-menu":i&&!n,"navigation-group-side-menu-collapsed":i&&n&&!t,"navigation-group-side-menu-expanded":i&&n&&t,selected:t&&!i},ref:e=>this.groupEl=e,"aria-expanded":`${t||this.expanded}`,"aria-haspopup":`${!i&&"top"===this.navigationType}`},(0,o.h)("ic-typography",{variant:"side"===this.navigationType?"caption":"label"},e),"side"===this.navigationType&&n&&(0,o.h)("div",{class:{"chevron-toggle-icon-wrapper":!0,"chevron-toggle-icon-closed":this.expanded},innerHTML:a.C})),this.renderNavigationItems())}static get delegatesFocus(){return!0}get el(){return(0,o.g)(this)}};s.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host(.in-side-menu){border-bottom:var(--ic-border-width) solid var(--ic-architectural-200);padding:var(--ic-space-md) 0}:host .navigation-group{height:100%;width:-moz-fit-content;width:fit-content;color:var(--ic-theme-text);display:flex;align-items:center;justify-content:center;padding:0 var(--ic-space-md);transition:var(--ic-easing-transition-slow);position:relative;background:none;border:none;white-space:nowrap}:host(.in-side-menu) .navigation-group{height:2.5rem;width:100%;text-align:left}:host(.in-side-menu) .navigation-group .ic-typography-label{width:11.875rem}:host(.in-side-menu) .navigation-group-side-menu{color:var(--ic-action-default);justify-content:flex-start;padding:0 var(--ic-space-md) 0 var(--ic-space-md)}:host(.in-side-menu) .navigation-group-side-menu-collapsed,:host(.in-side-menu) .navigation-group-side-menu-expanded{color:var(--ic-action-default);justify-content:flex-start;padding-left:var(--ic-space-md)}:host(.in-side-menu) .navigation-group-side-menu-expanded{margin-bottom:var(--ic-space-xs)}:host(.in-side-menu) .navigation-group-side-menu-collapsed::after,:host(.in-side-menu) .navigation-group-side-menu-expanded::after{border-style:solid;border-width:0.125em 0.125em 0 0;content:"";display:inline-block;height:0.45em;left:0.75em;position:relative;top:-0.1em;transform:rotate(135deg);vertical-align:top;width:0.45em}:host(.in-side-menu) .navigation-group-side-menu-expanded::after{top:0.15em;transform:rotate(-45deg)}:host .navigation-group:hover,:host .navigation-group:active,:host .selected{background-color:var(--ic-architectural-20);color:var(--ic-color-primary-text);outline:none;cursor:pointer}:host(:not(.in-side-menu)) .navigation-group:focus{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline);z-index:var(--ic-z-index-navigation-item);transition:box-shadow var(--ic-easing-transition-fast)}:host(.in-side-menu) .navigation-group-side-menu:hover,:host(.in-side-menu) .navigation-group-side-menu:active,:host(.in-side-menu) .navigation-group-side-menu:focus{background-color:var(--ic-architectural-20);color:var(--ic-action-default);cursor:auto;box-shadow:none;outline:none}:host(.in-side-menu) .navigation-group-side-menu:focus{outline:var(--ic-hc-focus-outline)}:host(.in-side-menu) .navigation-group-side-menu-expanded:hover:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:hover:not(:focus){background-color:var(--ic-action-dark-bg-hover);color:var(--ic-action-default);cursor:pointer}:host(.in-side-menu) .navigation-group-side-menu-expanded:active:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:active:not(:focus){background-color:var(--ic-action-dark-bg-active);color:var(--ic-action-default)}:host(.in-side-menu) .navigation-group-side-menu-expanded:focus,:host(.in-side-menu) .navigation-group-side-menu-collapsed:focus{color:var(--ic-action-default);box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);outline:var(--ic-hc-focus-outline)}:host .navigation-group-dropdown{background-color:var(--ic-architectural-20);border-bottom:var(--ic-border-default);position:absolute;left:0;right:0;padding:var(--ic-space-xs) var(--ic-space-md);box-shadow:0 0.375rem 0.5rem -0.375rem rgba(0 0 0 / 20%);z-index:calc(var(--ic-z-index-navigation-item) - 1)}:host .navigation-group-dropdown-items-list{list-style:none;display:flex;flex-flow:column wrap;align-content:flex-start;padding-left:var(--ic-space-md);max-height:16.5rem}:host .chevron-toggle-icon-wrapper{display:flex;align-items:center}:host .chevron-toggle-icon-wrapper svg{transform:rotate(90deg);height:var(--ic-space-lg);width:var(--ic-space-lg)}:host .chevron-toggle-icon-closed svg{transform:rotate(-90deg)}:host(.expanded) .grouped-links-wrapper{height:var(--navigation-child-items-height, auto) !important;transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.navigation-group-side-nav) .link,:host(.navigation-group-side-nav) ::slotted(a){height:var(--navigation-child-items-height, auto)}:host(.collapsed) .grouped-links-wrapper{height:0;transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.navigation-group-side-nav) .navigation-group{height:var(--navigation-group-height);width:var(--navigation-group-width);justify-content:var(--navigation-group-justify-content);padding-right:var(--navigation-group-expand-toggle-padding)}:host(.navigation-group-side-nav) .navigation-group:hover,:host(.navigation-group-side-nav) .navigation-group:active,:host(.navigation-group-side-nav) .selected{background-color:var(--navigation-group-hover);color:var(--navigation-group-text-hover)}:host(.navigation-group-side-nav) .navigation-group:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background:none}:host(.navigation-group-side-nav) .ic-typography-caption{position:var(--navigation-group-title-position);left:var(--navigation-group-title-position-left);white-space:nowrap}'}}]);