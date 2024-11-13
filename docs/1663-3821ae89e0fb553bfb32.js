"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[1663],{5002:function(i,t,e){e.d(t,{C:function(){return a}});const a='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},8712:function(i,t,e){e.d(t,{c:function(){return a}});const a='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},1663:function(i,t,e){e.r(t),e.d(t,{ic_side_navigation:function(){return r}});var a=e(9917),s=e(8712),o=e(5002),n=e(7261),l=e(6040);const r=class{constructor(i){(0,a.r)(this,i),this.sideNavExpanded=(0,a.c)(this,"sideNavExpanded",7),this.ANIMATION_DURATION=parseInt((0,n.g)("--ic-transition-duration-slow"))||0,this.IC_NAVIGATION_ITEM="ic-navigation-item",this.resizeObserver=null,this.COLLAPSED_ICON_LABELS_END="collapsed-icon-labels-end",this.COLLAPSED_ICON_LABELS_START="collapsed-icon-labels-start",this.menuButton=null,this.emitSideNavigationExpanded=i=>{this.sideNavExpanded.emit({sideNavExpanded:i.sideNavExpanded,sideNavMobile:i.sideNavMobile})},this.toggleMenu=()=>{this.menuOpen=!this.menuOpen,this.setMobileMenuAriaAttributes(this.menuOpen),this.arrangeSlottedNavigationItem(this.menuOpen),this.setToggleMenuFlyoutMenuVisibility(this.menuOpen),this.emitSideNavigationExpanded({sideNavExpanded:this.menuOpen,sideNavMobile:!0})},this.setToggleMenuFlyoutMenuVisibility=i=>{const t=this.el.shadowRoot.querySelector("#side-navigation"),e=t.querySelector(".side-navigation-inner"),a=t.querySelector(".bottom-wrapper"),s="menu-visibility-visible";i?(a.classList.add(s),e.classList.add(s)):setTimeout((()=>{e.classList.remove(s),a.classList.remove(s)}),this.ANIMATION_DURATION)},this.setMobileMenuAriaAttributes=i=>{null!==this.menuButton&&(this.menuButton.setAttribute("aria-expanded",`${i}`),this.menuButton.setAttribute("aria-label",(i?"Close":"Open")+" navigation menu"))},this.setAndRemoveNoWrapAfterMenuExpanded=()=>{const i=this.el.shadowRoot.querySelector(".title-link ic-typography")||this.el.querySelector("[slot='app-title']");i.classList.add("ic-typography-no-wrap"),setTimeout((()=>{i.classList.remove("ic-typography-no-wrap")}),this.ANIMATION_DURATION)},this.toggleMenuExpanded=()=>{this.menuExpanded=!this.menuExpanded,this.menuExpanded?(this.setAndRemoveNoWrapAfterMenuExpanded(),this.el.shadowRoot.querySelector(".app-title-inner-wrapper").classList.add("app-title-show")):(this.el.style.setProperty("--navigation-item-width","320px"),this.el.shadowRoot.querySelector(".app-title-inner-wrapper").classList.remove("app-title-show"),this.el.addEventListener("transitionend",(i=>{"width"===i.propertyName&&this.el.style.setProperty("--navigation-item-width",null)}))),this.arrangeSlottedNavigationItem(this.menuExpanded),this.displayTooltipWithExpandedLongLabel(this.menuExpanded),this.collapsedIconLabels&&this.animateCollapsedIconLabels(),this.setExpandedButtonHeight(),this.emitSideNavigationExpanded({sideNavExpanded:this.menuExpanded})},this.arrangeSlottedNavigationItem=i=>{this.el.querySelectorAll("ic-navigation-item").forEach((t=>{const e=(0,n.i)(t,"navigation-item"),a=t.children[0]&&!t.children[0].getAttribute("slot");if(e||a){let a;a=e?t.querySelector("[slot='navigation-item']"):t.children[0];const s=document.createElement("div"),o=a.querySelector("svg"),n=t.textContent.trim(),l=document.createElement("ic-typography");l.classList.add("ic-typography-label","hydrated","navigation-item-side-nav-slotted-text"),s.style.height="var(--ic-space-lg)",s.append(o),a.textContent="",l.textContent=n,a.append(s),a.append(l),this.collapsedIconLabels?this.styleSlottedCollapsedIconLabels(i,l):this.styleSlottedIconLabels(i,l)}}))},this.styleSlottedCollapsedIconLabels=(i,t)=>{i?(t.style.marginTop="0",t.style.whiteSpace="nowrap",t.style.overflow="hidden",t.style.textOverflow="ellipsis"):(t.style.marginTop="10px",t.style.whiteSpace="nowrap",t.style.overflow="hidden",t.style.textOverflow="ellipsis")},this.setExpandedButtonHeight=()=>{const i=this.el.shadowRoot.querySelector("#side-navigation > .bottom-wrapper > .bottom-side-nav > .app-status-wrapper");0!==i.offsetHeight&&this.el.style.setProperty("--sm-side-navigation-bottom-bar-height",`${i.offsetHeight}px`)},this.styleSlottedIconLabels=(i,t)=>{i?(t.style.opacity="1",t.style.visibility="visible",t.style.transition="visibility 0s, opacity var(--ic-easing-transition-slow)"):(t.style.opacity="0",t.style.visibility="hidden",t.style.transition="visibility 0s, opacity var(--ic-easing-transition-slow)")},this.transitionHandler=i=>{const t=this.el.shadowRoot.querySelector(".primary-navigation"),e=this.el.shadowRoot.querySelector(".bottom-wrapper > .secondary-navigation"),a="start"===i?this.COLLAPSED_ICON_LABELS_END:this.COLLAPSED_ICON_LABELS_START,s="start"===i?this.COLLAPSED_ICON_LABELS_START:this.COLLAPSED_ICON_LABELS_END;t&&(t.classList.remove(a),t.classList.add(s)),e&&(e.classList.remove(a),e.classList.add(s))},this.transitionEndHandler=()=>{this.transitionHandler("end")},this.animateCollapsedIconLabels=()=>{this.transitionHandler("start"),this.transitionEndHandler(),this.el.addEventListener("transitionend",this.transitionEndHandler)},this.paddingIconWidth=i=>{const t=i[0].shadowRoot&&(i[0].shadowRoot.querySelector("ic-tooltip a")||i[0].shadowRoot.querySelector("ic-tooltip div"))||i[0].querySelector("a")||i[0].querySelector("div"),e=i[0].querySelector("svg"),a={gap:window.getComputedStyle(t).gap,iconWidth:window.getComputedStyle(e).width,paddingLeft:window.getComputedStyle(t).paddingLeft};return Object.values(a).reduce(((i,t)=>i+parseInt(t)),0)},this.displayTooltipWithExpandedLongLabel=i=>{let t;if(i)t=setTimeout((()=>{const i=this.el.clientWidth,t=Array.from(this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)),e=t.length?this.paddingIconWidth(t):0;t.forEach((t=>{var a,s;((null===(a=t.shadowRoot&&t.shadowRoot.querySelector("ic-tooltip .link ic-typography.ic-typography-label"))||void 0===a?void 0:a.scrollWidth)||(null===(s=t.querySelector("ic-typography.ic-typography-label"))||void 0===s?void 0:s.scrollWidth))>i-e&&t.setAttribute("display-navigation-tooltip","true")}))}),this.ANIMATION_DURATION);else{clearTimeout(t);Array.from(this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)).forEach((i=>{i.setAttribute("display-navigation-tooltip","false")}))}},this.setMenuExpanded=i=>{this.menuExpanded=i},this.setParentPaddingTop=i=>{this.el.parentElement.style.setProperty("padding-top",i)},this.setParentPaddingLeft=i=>{this.el.parentElement.style.setProperty("padding-left",i)},this.renderAppTitle=i=>{const t=this.deviceSize<=n.D.S&&!(0,n.F)(this.shortAppTitle);return(0,a.h)("ic-typography",{variant:t||i?"subtitle-small":"h3","aria-label":t?`${this.appTitle} (${this.shortAppTitle})`:void 0},(0,a.h)("h1",null,t?this.shortAppTitle:this.appTitle))},this.resizeObserverCallback=i=>{var t;this.deviceSize=i;const e=i===n.D.S&&!this.disableTopBarBehaviour;if(!this.disableAutoParentStyling){const i=null===(t=this.el.shadowRoot.querySelector(".top-bar"))||void 0===t?void 0:t.scrollHeight;this.setParentPaddingTop(e?`${i}px`:"0"),e&&this.setParentPaddingLeft("0"),e&&this.inline?this.el.parentElement.style.setProperty("height",`calc(100% - ${i}px)`):e||this.el.parentElement.style.setProperty("height","100%")}if(!this.disableAutoParentStyling){const t=`calc(var(--ic-space-xxl) ${this.collapsedIconLabels?"* 2":"+ var(--ic-space-xs)"})`;i>n.D.L?(this.setParentPaddingTop("0"),this.setParentPaddingLeft("0")):(i>n.D.S||this.disableTopBarBehaviour)&&i<=n.D.M&&this.static?this.setParentPaddingLeft(t):(i>n.D.S||this.disableTopBarBehaviour)&&i<=n.D.L&&this.setParentPaddingLeft(this.static&&this.menuExpanded?"calc(var(--ic-space-xl) * 10)":t)}},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{const i=(0,n.e)();this.deviceSizeAppTitle=i,this.resizeObserverCallback(i)})),this.resizeObserver.observe(document.body,{box:"content-box"})},this.setCollapsedIconLabels=()=>{Array.from(this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)).forEach((i=>{i.setAttribute("collapsed-icon-label","true")}))},this.styleSlottedCollapsedIconLabel=()=>{Array.from(this.el.querySelectorAll(".navigation-item-side-nav-slotted-text")).forEach((i=>{var t,e;(null===(e=null===(t=null==i?void 0:i.parentElement)||void 0===t?void 0:t.parentElement)||void 0===e?void 0:e.classList.contains("navigation-item-side-nav-collapsed-with-label"))&&(i.style.whiteSpace="nowrap",i.style.overflow="hidden",i.style.textOverflow="ellipsis",i.style.marginTop="10px")}))},this.renderTopBar=({isSDevice:i,foregroundColor:t,menuOpen:e,href:o,isAppNameSubtitleVariant:l})=>{const r=""!==this.appTitle&&(0,n.d)(this.appTitle),d=(0,n.i)(this.el,"app-title")?"div":"a",p="a"==d&&{href:o};return(0,a.h)("div",{class:{"top-bar":!0,[this.foregroundColor]:!0}},i&&(0,a.h)("nav",{"aria-labelledby":"menu-navigation-toggle-button-landmark","aria-hidden":"false"},(0,a.h)("ic-button",{"aria-label":"Open navigation menu",class:"menu-button",id:"menu-button",variant:"secondary",size:"small","full-width":"true",appearance:t,onClick:this.toggleMenu,ariaOwnsId:"side-navigation","aria-haspopup":"true","aria-expanded":"false",ref:i=>this.menuButton=i},(0,a.h)("span",{class:"mobile-top-bar-menu-icon",slot:"icon",innerHTML:e?s.c:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n  <path d="M0 0h24v24H0V0z" fill="none" />\n  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />\n  <title>menu icon</title>\n</svg>\n'}),e?"Close":"Menu"),(0,a.h)("span",{id:"menu-navigation-toggle-button-landmark",class:"navigation-landmark-title","aria-hidden":"true"},"Navigation menu toggle button")),(0,a.h)("div",{class:"app-title-wrapper"},(r||(0,n.i)(this.el,"app-title"))&&(0,a.h)(d,Object.assign({},p,{class:"title-link"}),(0,a.h)("div",{class:"app-icon-container","aria-hidden":"true"},(0,a.h)("slot",{name:"app-icon"})),(0,a.h)("div",{class:"app-title-inner-wrapper"},(0,n.i)(this.el,"app-title")?(0,a.h)("slot",{name:"app-title"}):this.renderAppTitle(l)))))},this.deviceSize=(0,n.e)(),this.deviceSizeAppTitle=n.D.S,this.foregroundColor=(0,n.b)(),this.hasSecondaryNavigation=!1,this.menuExpanded=!1,this.menuOpen=!1,this.appTitle=void 0,this.collapsedIconLabels=!1,this.disableAutoParentStyling=!1,this.disableTopBarBehaviour=!1,this.expanded=!1,this.href="/",this.inline=!1,this.shortAppTitle="",this.static=!1,this.status=void 0,this.version=void 0}watchExpandedHandler(){this.setMenuExpanded(this.expanded)}componentWillLoad(){this.setMenuExpanded(this.expanded),this.collapsedIconLabels&&this.setCollapsedIconLabels(),this.hasSecondaryNavigation=(0,n.i)(this.el,"secondary-navigation")}componentDidLoad(){this.emitSideNavigationExpanded({sideNavExpanded:this.menuExpanded,sideNavMobile:this.deviceSize===n.D.S&&!this.disableTopBarBehaviour}),(0,n.f)(this.runResizeObserver),this.styleSlottedCollapsedIconLabel(),this.arrangeSlottedNavigationItem(this.menuExpanded),this.displayTooltipWithExpandedLongLabel(this.menuExpanded),this.setExpandedButtonHeight(),!(0,n.i)(this.el,"app-title")&&(0,n.a)([{prop:this.appTitle,propName:"app-title"}],"Side Navigation")}disconnectedCallback(){var i;null!==this.resizeObserver&&this.resizeObserver.disconnect(),null===(i=this.el)||void 0===i||i.removeEventListener("transitionend",this.transitionEndHandler)}themeChangeHandler({detail:i}){this.foregroundColor=i.mode}render(){const{appTitle:i,menuOpen:t,foregroundColor:e,menuExpanded:s,href:r,status:d,version:p,collapsedIconLabels:h,inline:c}=this,v=!this.disableTopBarBehaviour&&this.deviceSize===n.D.S,g=this.deviceSize===n.D.M,m=this.deviceSize>=n.D.L,u=this.deviceSizeAppTitle===n.D.S,b=g||this.disableTopBarBehaviour||m&&!this.static,y={isSDevice:v,foregroundColor:e,menuOpen:t,href:r,isAppNameSubtitleVariant:u,appTitle:i};return(0,a.h)(a.H,{class:{"xs-menu-open":t&&v,"xs-menu-close":!t&&v,"sm-collapsed":!v&&!s,"sm-expanded":!v&&s,"side-display":this.deviceSize>n.D.S||this.disableTopBarBehaviour,[l.I.Dark]:e===l.I.Dark,"collapsed-labels":!v&&!s&&h,inline:c}},v&&this.renderTopBar(Object.assign({},y)),(0,a.h)("div",{class:"side-navigation",id:"side-navigation"},!v&&this.renderTopBar(Object.assign({},y)),(0,a.h)("div",{class:"side-navigation-inner"},(0,n.i)(this.el,"primary-navigation")&&(0,a.h)("nav",{class:"primary-navigation","aria-labelledby":"primary-navigation-landmark"},(0,a.h)("span",{"aria-hidden":"true",class:"navigation-landmark-title",id:"primary-navigation-landmark"},"Primary"),(0,a.h)("ul",{class:"navigation-list"},(0,a.h)("slot",{name:"primary-navigation"})))),(0,a.h)("div",{class:{"bottom-wrapper":!0,"classification-spacing":(0,n.w)()}},(0,n.i)(this.el,"secondary-navigation")&&(0,a.h)("nav",{class:"secondary-navigation","aria-labelledby":"secondary-navigation-landmark"},(0,a.h)("span",{"aria-hidden":"true",class:"navigation-landmark-title",id:"secondary-navigation-landmark"},"Secondary"),(0,a.h)("ul",{class:"navigation-list"},(0,a.h)("slot",{name:"secondary-navigation"}))),(0,a.h)("div",{class:"bottom-side-nav"},this.hasSecondaryNavigation&&(0,a.h)("ic-divider",null),b&&(0,a.h)("button",{class:"menu-expand-button",innerHTML:o.C,onClick:this.toggleMenuExpanded,"aria-label":(s?"Collapse":"Expand")+" side navigation"}),(0,a.h)("div",{class:"app-status-wrapper"},""!==d&&(0,a.h)("div",{class:{"app-status":!0}},(0,a.h)("ic-typography",{"aria-label":"app tag",variant:"label-uppercase",class:"app-status-text"},d)),""!==p&&(0,a.h)("ic-typography",{variant:"label",class:"app-version","aria-label":"app version"},p))))))}get el(){return(0,a.g)(this)}static get watchers(){return{expanded:["watchExpandedHandler"]}}};r.style=':host{display:block;--side-navigation-position:fixed;--side-navigation-position-left:0;--side-navigation-position-top:var(--ic-space-xxl);--side-navigation-height:var(--ic-space-xxl);--sm-side-navigation-top-bar-height:3.5rem;--sm-side-navigation-collapsed-labels-width:6rem;--sm-side-navigation-expand-transition-duration:var(\n    --ic-transition-duration-slow\n  );--side-navigation-width:20rem;--sm-side-navigation-bottom-bar-height:3.5rem;z-index:var(--ic-z-index-side-navigation)}:host>*{box-sizing:border-box}.side-navigation{display:flex;flex-direction:column;width:var(--side-navigation-width);color:var(--ic-theme-text);position:var(--side-navigation-position);top:var(--side-navigation-position-top);left:calc(var(--side-navigation-width) * -1);bottom:0;background-color:var(--ic-theme-primary);z-index:var(--ic-z-index-side-navigation)}:host(.inline) .side-navigation{position:absolute;height:100%}:host(.anchor-right) .side-navigation{right:calc(var(--side-navigation-width) * -1)}.classification-spacing{margin-bottom:var(--ic-space-lg)}.navigation-list{padding:0;margin:0;list-style:none}.side-navigation-inner{background-color:var(--ic-theme-primary);display:flex;flex-direction:column;flex:1 1 0;overflow:auto}:host(.inline) .side-navigation-inner{flex:1}:host(.xs-menu-open) .side-navigation{transition:left var(--ic-easing-transition-slow);left:0}:host(:has(.xs-menu-open,.xs-menu-close)) ::slotted(ic-navigation-item){--navigation-item-side-nav-right:var(--ic-space-xl)}:host(.xs-menu-close) .side-navigation{left:calc(var(--side-navigation-width) * -1);transition:left var(--ic-easing-transition-slow)}:host(.xs-menu-close) .side-navigation>*{visibility:hidden}:host(.anchor-right.xs-menu-open) .side-navigation{right:0;left:auto}:host(.anchor-right.xs-menu-close) .side-navigation{right:calc(var(--side-navigation-width) * -1);left:auto;transition:right var(--ic-easing-transition-slow)}.bottom-wrapper{border-top:var(--ic-keyline-lighten);bottom:0;left:0;z-index:2;box-shadow:-0.188rem -0.188rem 0.5rem rgb(0 0 0 / 20%);background-color:var(--ic-theme-primary);display:flex;flex-direction:column}:host(.inline) .bottom-wrapper{position:sticky}:host(.dark) .bottom-wrapper{border-top:var(--ic-keyline-darken)}.top-bar{display:flex;flex-direction:row;align-items:center;min-height:var(--side-navigation-height);padding:var(--ic-space-xs);box-sizing:border-box;background-color:var(--ic-theme-primary);position:fixed;top:0;left:0;right:0;border-bottom:var(--ic-keyline-darken);box-shadow:var(--ic-elevation-overlay);z-index:2;overflow:hidden;visibility:visible}:host(.inline) .top-bar{position:absolute}.top-bar.dark a:focus{box-shadow:var(--ic-border-focus)}.top-bar.light{border-bottom:var(--ic-keyline-lighten)}.app-title-wrapper{display:flex;margin-left:var(--ic-space-xs);border-left:var(--ic-keyline-darken);padding-left:var(--ic-space-xxs);color:var(--ic-theme-text);align-items:center}.app-title-wrapper ic-typography h1{margin:0}@media screen and (min-width: 340px){.app-title-wrapper ic-typography{margin-left:var(--ic-space-xs)}}:host .title-link{display:flex;align-items:center;transition:box-shadow var(--ic-easing-transition-fast),\n    background-color var(--ic-easing-transition-fast);text-decoration:none;padding:var(--ic-space-xxs);color:var(--ic-theme-text)}:host .title-link:visited,:host .title-link:active{color:var(--ic-theme-text)}slot[name="app-title"]::slotted(a),slot[name="app-icon"]::slotted(a){color:var(--ic-theme-text);outline:none;text-decoration:none;display:flex}slot[name="app-title"]::slotted(ic-typography),slot[name="app-title"]::slotted(a){margin-left:var(--ic-space-xs) !important}slot[name="app-title"]::slotted(a){font:var(--ic-font-subtitle-small)}@media screen and (min-width: 577px){:host(.sm-collapsed) slot[name="app-title"]::slotted(ic-typography),:host(.sm-collapsed) slot[name="app-title"]::slotted(a){position:absolute;left:-9999px;opacity:0;transition:opacity var(--ic-easing-transition-slow)}:host(.sm-expanded) slot[name="app-title"]::slotted(a){font:var(--ic-font-h3) !important;font-weight:var(--ic-font-weight-semibold) !important;margin-left:var(--ic-space-xs) !important}}:host .title-link:hover{border-radius:var(--ic-border-radius);background-color:var(--ic-theme-hover)}:host .title-link:active{background-color:var(--ic-theme-active)}:host .title-link:focus,:host .title-link:focus-within{border-radius:var(--ic-border-radius);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);background-color:transparent}:host .title-link ic-typography{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.app-title-wrapper ::slotted(svg){fill:var(--ic-theme-text)}.app-icon-container{display:none}.button-label{display:flex;align-items:center}.mobile-top-bar-menu-icon{display:flex}.menu-button{width:6.5rem}.app-status-wrapper{inset:0 var(--ic-space-sm) 0 3.5rem;width:auto;display:flex;gap:var(--ic-space-xs);padding:var(--ic-space-sm) 0;justify-content:flex-end;align-items:flex-end;pointer-events:none;height:-moz-fit-content;height:fit-content;margin:0 var(--ic-space-xs)}.app-status-wrapper .app-version{display:flex;overflow-wrap:break-word;padding-bottom:var(--ic-space-xxs)}.app-status-wrapper .app-status{display:flex;border-radius:1rem;background-color:var(--ic-theme-text);color:var(--ic-color-primary-text);padding:var(--ic-space-xxs) var(--ic-space-lg);min-width:1rem}.app-status-wrapper .app-status-text{overflow-wrap:break-word}:host(.dark) .app-status-wrapper .app-status{color:var(--ic-color-white-text)}.navigation-landmark-title{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}::slotted(ic-navigation-group){--navigation-group-height:2.75rem;--navigation-group-width:100%;--navigation-group-justify-content:space-between;--navigation-group-hover:var(--ic-theme-hover);--navigation-group-text-hover:var(--ic-theme-text);--navigation-item-child-height:3.5rem;--navigation-item-child-active:var(--ic-action-dark-bg-active);--navigation-item-child-color:var(--ic-theme-text);--navigation-group-expand-toggle-padding:0.25rem}::slotted(ic-navigation-item),::slotted(ic-navigation-group){--navigation-item-justify-content:flex-start;--navigation-item-min-height:56px;--navigation-item-height:auto}.bottom-side-nav{position:relative;align-content:flex-end;min-height:var(--sm-side-navigation-top-bar-height)}.bottom-side-nav ic-divider{position:absolute;top:0;width:100%}.primary-navigation{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none}.primary-navigation::-webkit-scrollbar{display:none}.primary-navigation,.secondary-navigation{overflow-x:hidden}.bottom-side-nav .menu-expand-button{position:absolute;display:none}.menu-visibility-visible{visibility:visible;width:100%}.app-title-show{min-width:15.5rem}:host(.side-display){display:flex;flex-direction:column;height:100vh;position:var(--side-navigation-position);left:0;top:0;bottom:0}:host(.side-display) .app-icon-container{height:40px;display:flex;align-items:center}:host(.side-display) .top-bar{--side-navigation-height:var(--sm-side-navigation-top-bar-height);position:relative;padding:0;box-shadow:-0.188rem 0.188rem 0.5rem rgb(0 0 0 / 20%)}:host(.inline.side-display) .top-bar{position:sticky}:host(.anchor-right.side-display) .top-bar{box-shadow:0.188rem 0.188rem 0.5rem rgb(0 0 0 / 20%)}:host(.anchor-right.side-display) .bottom-wrapper{box-shadow:0.188rem -0.188rem 0.5rem rgb(0 0 0 / 20%)}:host(.side-display) .side-navigation,:host(.side-display) .top-bar{width:var(--sm-side-navigation-top-bar-height)}:host(.sm-collapsed.side-display){width:var(--sm-side-navigation-top-bar-height);transition:width var(--ic-easing-transition-slow)}:host(.sm-collapsed.collapsed-labels.side-display){width:var(--sm-side-navigation-collapsed-labels-width)}:host(.sm-expanded.side-display){width:var(--side-navigation-width);transition:width var(--ic-easing-transition-slow);box-shadow:var(--ic-elevation-overlay)}:host(.side-display) .side-navigation{--side-navigation-position-top:0;flex:1;position:relative;top:auto;left:auto;bottom:auto}:host(.inline.side-display) .side-navigation{position:relative}:host(.anchor-right.side-display) .side-navigation{left:auto;right:0}:host(.side-display) .app-title-wrapper{margin-left:0;border-left:none;padding:var(--ic-space-xs) var(--ic-space-sm)}:host(.side-display) .app-title-wrapper ::slotted(svg){height:var(--ic-space-lg);width:var(--ic-space-lg)}:host(.side-display) .app-title-wrapper ic-typography{font-weight:var(--ic-font-weight-semibold)}:host(.sm-collapsed.side-display) .app-title-wrapper ic-typography{position:absolute;left:-9999px;opacity:0;transition:opacity var(--ic-easing-transition-slow)}:host(.sm-expanded.side-display) ic-typography{position:relative;left:0}:host(.sm-expanded.side-display) :is(.side-navigation,.top-bar){width:var(--side-navigation-width);transition:width var(--ic-easing-transition-slow)}:host(.sm-collapsed.side-display) :is(.side-navigation,.top-bar){width:var(--sm-side-navigation-top-bar-height);transition:width var(--ic-easing-transition-slow)}:host(.anchor-right.sm-expanded.side-display) :is(.side-navigation,.top-bar){left:auto;right:0}:host(.side-display) .app-status-wrapper,:host(.sm-collapsed.side-display) .app-status-wrapper{display:none;margin-left:0}:host(.sm-expanded.side-display) .app-status-wrapper{display:flex;max-width:16rem;margin-right:calc(var(--ic-space-xxxs) + var(--ic-space-xs))}:host(.side-display) .bottom-side-nav{justify-items:flex-end;align-items:flex-end;justify-content:flex-end;display:flex;outline:none}:host(.side-display) .bottom-side-nav .menu-expand-button{padding-left:var(--ic-space-md);height:var(--sm-side-navigation-top-bar-height);width:100%;color:var(--ic-theme-text);background-color:transparent;outline:var(--ic-hc-focus-outline);border:none;cursor:pointer;display:flex;transition:var(--ic-easing-transition-fast)}:host(.sm-expanded.side-display) .bottom-side-nav .menu-expand-button{height:100%}:host(.side-display) .bottom-side-nav .menu-expand-button svg{justify-items:flex-start;align-self:center;display:inline-block;width:var(--ic-space-lg);height:var(--ic-space-lg)}:host(.side-display) .bottom-side-nav .menu-expand-button:hover{background-color:var(--ic-theme-hover)}:host(.side-display) .bottom-side-nav .menu-expand-button:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background-color:transparent}:host(.sm-collapsed.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(1);transition:transform var(--ic-easing-transition-slow)}:host(.sm-expanded.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(-1);transition:transform var(--ic-easing-transition-slow);align-self:flex-end;margin-bottom:0.875rem}:host(.anchor-right.sm-collapsed.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(-1)}:host(.anchor-right.sm-expanded.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(1)}:host(.sm-collapsed.side-display) ::slotted(ic-navigation-item){--navigation-item-label-opacity:1}:host(.sm-collapsed.side-display) ::slotted(ic-navigation-item),:host(.sm-collapsed.side-display) ::slotted(ic-navigation-group){--navigation-item-label-opacity:0;--navigation-item-min-height:56px;--navigation-item-height:56px}:host(.sm-expanded.side-display) ::slotted(ic-navigation-item),:host(.sm-expanded.side-display) ::slotted(ic-navigation-group){--navigation-item-label-opacity:1;--navigation-item-height:auto;--navigation-item-min-height:56px;--navigation-item-width:320px;--navigation-item-side-nav-right:var(--ic-space-xl)}:host(.sm-collapsed.side-display) ::slotted(ic-navigation-group){--navigation-group-title-position:absolute;--navigation-group-title-position-left:-9999px;--navigation-group-title-opacity:none}:host(.sm-expanded.side-display) ::slotted(ic-navigation-group){--navigation-group-title-position:relative;--navigation-group-title-position-left:0;--navigation-group-expand-toggle-padding:0.25rem;--navigation-group-title-opacity:flex}:host(.sm-collapsed.collapsed-labels.side-display) .side-navigation,:host(.sm-collapsed.collapsed-labels.side-display) .top-bar{width:var(--sm-side-navigation-collapsed-labels-width)}:host(.sm-collapsed.collapsed-labels.side-display) .menu-expand-button{padding:0}:host(.sm-collapsed.collapsed-labels.side-display) .app-title-wrapper{width:100%;justify-content:center}:host(.sm-collapsed.collapsed-labels.side-display) ::slotted(ic-navigation-group){--navigation-group-justify-content:center;--navigation-item-label-opacity:1;--navigation-group-item-min-width:100%;--navigation-group-expand-toggle-padding:1rem}:host(.collapsed-labels.side-display) .bottom-side-nav .menu-expand-button{justify-content:center}:host(.side-display) .collapsed-icon-labels-start{visibility:hidden;opacity:0}:host(.side-display) .collapsed-icon-labels-end{visibility:visible;opacity:1;transition:visibility 0s, opacity var(--ic-easing-transition-slow)}@media screen and (min-width: 340px){.app-icon-container{display:flex}}@media screen and (min-width: 993px){:host(.side-display){position:sticky;left:auto;top:0;bottom:0}:host(.sm-expanded.side-display){box-shadow:none}}@media (forced-colors: active){.side-navigation,.top-bar{border-right:var(--ic-hc-border)}.menu-expand-button{color:Highlight !important}slot[name="app-icon"]::slotted(svg){fill:currentcolor}}'}}]);