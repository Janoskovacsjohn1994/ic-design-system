"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[1990],{1990:function(e,r,s){s.r(r),s.d(r,{ic_breadcrumb:function(){return i}});var t=s(7848),c=s(1089),a=s(6345);s(3077);const i=class{constructor(e){(0,t.r)(this,e),this.renderDefaultBreadcrumb=(e,r,s,c)=>{const i=null!==r&&(0,a.d)(r)&&""!==r;return e&&i?(0,t.h)("span",{class:{"current-page-container":e}},(0,a.i)(this.el,"icon")&&(0,t.h)("slot",{name:"icon"}),r):(0,t.h)("ic-link",{href:c,class:"breadcrumb-link","aria-describedby":this.showBackIcon&&s&&s},this.showBackIcon&&(0,t.h)("div",{class:"back-icon",innerHTML:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="currentColor"/>\n</svg>\n'}),(0,a.i)(this.el,"icon")&&(0,t.h)("slot",{name:"icon"}),r)},this.setSlottedCurrentPageClass=()=>{const e=this.el.querySelector("ic-link"),r="current-page";if(e&&(e.classList.remove(r),this.current)){e.classList.contains(r)||e.classList.add("breadcrumb-link",r)}},this.current=!1,this.href=void 0,this.pageTitle=void 0,this.showBackIcon=!1}componentWillRender(){this.setSlottedCurrentPageClass()}async setFocus(){this.el.shadowRoot.querySelector("ic-link")&&this.el.shadowRoot.querySelector("ic-link").focus()}render(){const{current:e,href:r,pageTitle:s}=this,i=`${s&&s.toLowerCase().replace(" ","-")}-describedby`,o=null!==s&&(0,a.d)(s)&&""!==s,n=null!==r&&(0,a.d)(r)&&""!==r;return(0,t.h)(t.H,{class:{back:this.showBackIcon},"aria-current":e&&"page",role:"listitem"},(0,t.h)("div",{class:"breadcrumb"},(0,t.h)("span",{innerHTML:c.C,class:"chevron","aria-hidden":"true"}),this.showBackIcon&&i&&(0,t.h)("span",{id:i,class:"hide"},`Back to ${s}`),o&&n?this.renderDefaultBreadcrumb(e,s,i,r):(0,t.h)("slot",null)))}static get delegatesFocus(){return!0}get el(){return(0,t.g)(this)}};i.style=':host{display:block;margin:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0}:host .breadcrumb{display:flex;align-items:center;white-space:nowrap;gap:var(--ic-space-xs);min-height:var(--ic-space-lg)}:host .chevron{width:var(--ic-space-lg);height:var(--ic-space-lg)}:host .chevron svg{color:var(--ic-architectural-400)}:host(:first-child) .chevron{display:none}.back-icon svg{color:var(--ic-hyperlink)}:host(.back){display:flex;align-items:center}:host(.back) .chevron{display:none}ic-link{--breadcrumb-link-display:inline-flex;--breadcrumb-link-align-items:center;--breadcrumb-link-gap:var(--ic-space-xs)}:host([aria-current="page"]) .current-page-container{display:flex;align-items:center;gap:var(--ic-space-xs)}:host(.collapsed-breadcrumb-wrapper){margin-right:var(--ic-space-xs) !important;display:flex;align-items:center;gap:var(--ic-space-xs)}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb){border:none;background-color:transparent;color:var(--ic-hyperlink);text-decoration:underline;font-weight:var(--ic-font-weight-bold);cursor:pointer}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:hover),:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:focus){outline:var(--ic-hc-focus-outline);border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none}.hide,:host(.collapsed-breadcrumb-wrapper) ::slotted(.hide){display:none}@media (forced-colors: active){.back-icon svg{color:currentcolor}}@supports (text-decoration-thickness: 25%){ic-link{--breadcrumb-link-display:flex}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:hover),:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:focus){text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}'}}]);