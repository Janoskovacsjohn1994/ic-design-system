"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[5442],{5442:function(t,e,a){a.r(e),a.d(e,{ic_tab_panel:function(){return c}});var n=a(7848),s=a(3077),i=a(6345);const c=class{constructor(t){(0,n.r)(this,t),this.tabPanelCreated=(0,n.c)(this,"tabPanelCreated",7),this.tabPanelRemoved=(0,n.c)(this,"tabPanelRemoved",7),this.appearance="dark",this.contextId="default",this.panelId=void 0,this.selectedTab=void 0,this.tabPosition=void 0}connectedCallback(){this.tabPanelCreated.emit(this.el)}disconnectedCallback(){const t=document.querySelector(`ic-tab-context[context-id=${this.contextId}]`);t&&t.tabRemovedHandler()}render(){const{panelId:t,selectedTab:e,appearance:a}=this;return(0,n.h)(n.H,{class:{"ic-tab-panel-light":a===s.I.Light},role:"tabpanel",hidden:!(0,i.d)(t)||!(0,i.d)(e)||!(t===e)},(0,n.h)("div",null,(0,n.h)("slot",null)))}get el(){return(0,n.g)(this)}};c.style=":host{display:block}:host(.ic-tab-panel-light){color:white}"}}]);