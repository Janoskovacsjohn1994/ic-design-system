"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[5442],{5442:function(t,e,n){n.r(e),n.d(e,{ic_tab_panel:function(){return o}});var a=n(4942),i=n(5671),s=n(3144),c=n(9065),l=n(9455),o=function(){function t(e){(0,i.Z)(this,t),(0,c.r)(this,e),this.tabPanelCreated=(0,c.c)(this,"tabPanelCreated",7),this.tabPanelRemoved=(0,c.c)(this,"tabPanelRemoved",7),this.appearance="dark",this.contextId="default",this.panelId=void 0,this.selectedTab=void 0,this.tabPosition=void 0}return(0,s.Z)(t,[{key:"connectedCallback",value:function(){this.tabPanelCreated.emit(this.host)}},{key:"disconnectedCallback",value:function(){var t=document.querySelector("ic-tab-context[context-id=".concat(this.contextId,"]"));t&&t.tabRemovedHandler()}},{key:"render",value:function(){var t=this.panelId,e=this.selectedTab,n=this.appearance;return(0,c.h)(c.H,{class:(0,a.Z)({},"ic-tab-panel-light",n===l.I.Light),role:"tabpanel",hidden:void 0===t||void 0===e||!(t===e)},(0,c.h)("div",null,(0,c.h)("slot",null)))}},{key:"host",get:function(){return(0,c.g)(this)}}]),t}();o.style=":host{display:block}:host(.ic-tab-panel-light){color:white}"}}]);
//# sourceMappingURL=5442-54bcef9568d9940f6747.js.map