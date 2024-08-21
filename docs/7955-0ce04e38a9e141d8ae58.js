"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[7955],{4588:function(e,t,i){i.d(t,{A:function(){return y},B:function(){return P},C:function(){return J},D:function(){return D},E:function(){return H},I:function(){return l},a:function(){return b},b:function(){return w},c:function(){return _},d:function(){return f},e:function(){return h},f:function(){return c},g:function(){return g},h:function(){return u},i:function(){return S},j:function(){return d},k:function(){return E},l:function(){return C},m:function(){return A},n:function(){return F},o:function(){return O},p:function(){return N},q:function(){return p},r:function(){return W},s:function(){return m},t:function(){return q},u:function(){return v},v:function(){return I},w:function(){return k},x:function(){return M},y:function(){return r},z:function(){return s}});const r=["aria-atomic","aria-autocomplete","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-expanded","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],a=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],o=["ic-alert"],n={"ic-alert":["ic-link"]};var s,l,c,d,h,u;!function(e){e.Warning="warning",e.Error="error",e.Success="success"}(s||(s={})),function(e){e.Default="default",e.Dark="dark",e.Light="light"}(l||(l={})),function(e){e[e.January=0]="January",e[e.February=1]="February",e[e.March=2]="March",e[e.April=3]="April",e[e.May=4]="May",e[e.June=5]="June",e[e.July=6]="July",e[e.August=7]="August",e[e.September=8]="September",e[e.October=9]="October",e[e.November=10]="November",e[e.December=11]="December"}(c||(c={})),function(e){e[e.Sun=0]="Sun",e[e.Mon=1]="Mon",e[e.Tue=2]="Tue",e[e.Wed=3]="Wed",e[e.Thu=4]="Thu",e[e.Fri=5]="Fri",e[e.Sat=6]="Sat"}(d||(d={})),function(e){e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday"}(h||(h={})),function(e){e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday"}(u||(u={}));const m=e=>{const t=[];return Object.values(e).forEach((e=>{if(isNaN(Number(e))){const i=e;t.push(i)}})),t},p=(e,t=[])=>{const i={};return t.forEach((t=>{if(e.hasAttribute(t)){null!==e.getAttribute(t)&&(i[t]=e.getAttribute(t)),e.removeAttribute(t)}})),i},f=(e,t=0)=>{let i;return(...r)=>{clearTimeout(i),i=setTimeout(e,t,...r)}},v=(e,t,i,r,a)=>{if(void 0!==i&&(e||L(t))){const e=t.querySelectorAll("input.ic-input");let o=Array.from(e).filter((e=>t===e.parentElement))[0];null==o&&(o=t.ownerDocument.createElement("input"),o.type="hidden",o.classList.add("ic-input"),t.appendChild(o)),o.disabled=a,o.name=i,r instanceof Date?o.value=r?r.toISOString():null:o.value=r||""}},g=(e,t=null)=>{var i;const r=(e.parentElement||e.getRootNode().host.parentElement).closest(a.join(","));if(null!==r){const a=r.tagName.toLowerCase(),s=e.tagName.toLowerCase();return(null===(i=n[a])||void 0===i?void 0:i.includes(s))?l.Default:null===t||o.includes(a)?r.classList.contains(l.Dark)?l.Dark:l.Light:t}return l.Default},b=e=>!e||0===e.trim().length,y=e=>void 0!==e?e:null,x=e=>getComputedStyle(document.documentElement).getPropertyValue(e),w=(e,t)=>{const i=((e,t)=>e&&e.querySelector?e.querySelector(`[slot="${t}"]`):null)(e,t);return i?T(i):null},T=e=>{const t=e.firstElementChild;if(null!==t){const i=t.assignedElements?t.assignedElements():t.childNodes;return i.length?i:e.tagName?[e]:null}return null===e?null:[e]};Number(x("--ic-breakpoint-xs").replace("px","")),Number(x("--ic-breakpoint-sm").replace("px","")),Number(x("--ic-breakpoint-md").replace("px","")),Number(x("--ic-breakpoint-lg").replace("px","")),Number(x("--ic-breakpoint-xl").replace("px",""));const S=(e,t)=>Array.from(e.children).some((e=>e.getAttribute("slot")===t)),L=e=>!!e.shadowRoot&&!!e.attachShadow,I=(e,t,i)=>{return`${t?(r=e,r+"-helper-text"):""} ${i?(e=>e+"-validation-text")(e):""}`.trim();var r},k=()=>"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0,E=(e,t,i="value",r="label")=>{const a=[];if(t.length>0&&t.map){t.map((e=>{e.children?e.children.map((e=>a.push(e))):a.push(e)}));const o=a.find((t=>t[i]===e));if(void 0!==o)return o[r]}},C=(e,t,i,r,a="label")=>e.filter((e=>{var o;const n=e[a].toLowerCase(),s=null===(o=e.description)||void 0===o?void 0:o.toLowerCase(),l=i.toLowerCase();return"anywhere"===r?t?n.includes(l)||(null==s?void 0:s.includes(l)):n.includes(l):t?n.startsWith(l)||(null==s?void 0:s.startsWith(l)):n.startsWith(l)})),A=e=>{const t=[];return e.length>0&&e.map&&e.map((e=>{e.children?e.children.map((e=>t.push(e))):t.push(e)})),t.length},N=(e,t=16)=>1/t*parseInt(e)+"rem",P=e=>/^-?\d+$/.test(e),M=(e,t)=>""!==e&&!t,O=(e,t)=>{for(let i=0;i<e.length;i++){const{prop:r,propName:a}=e[i];null==r&&console.error(`No ${a} specified for ${t} component - prop '${a}' (web components) / '${$(a)}' (react) required`)}},$=e=>{const t=(e=e.toLowerCase()).split("-");let i=t[0];for(let r=1;r<t.length;r++)i+=t[r].substring(0,1).toUpperCase()+t[r].substring(1);return i},D=e=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&e()},R=e=>e.closest("FORM"),q=(e,t)=>{const i=R(e);null!==i&&i.addEventListener("reset",t)},F=(e,t)=>{const i=R(e);null!==i&&i.removeEventListener("reset",t)},W=(e,t)=>{e||t.removeAttribute("disabled")},H=()=>window.navigator.userAgent.toUpperCase().indexOf("MAC")>=0,J=e=>e.charAt(0).toUpperCase()+e.slice(1),_=(e,t,i)=>{const r=e=>Array.from(e).some((e=>e.slot===i));return r(e)||r(t)}},7955:function(e,t,i){i.r(t),i.d(t,{ic_tree_item:function(){return n}});var r=i(9917),a=i(4588);let o=0;const n=class{constructor(e){(0,r.r)(this,e),this.icTreeItemSelected=(0,r.c)(this,"icTreeItemSelected",7),this.treeItemId="ic-tree-item-"+o++,this.treeItemTag="IC-TREE-ITEM",this.hostMutationObserver=null,this.TOOLTIP="ic-tooltip",this.handleTreeItemClicked=()=>{this.isParent&&(this.expanded=!this.expanded,this.hasParentExpanded=!0),this.updateAriaLabel(),this.selected=!0,this.watchSelectedHandler()},this.setTreeItemPadding=()=>{let e=1,t=this.el.parentElement;const i=this.el.shadowRoot.querySelector(".tree-item-content"),r=Array.from(t.children).map((e=>e!==this.el&&!e.querySelector('[slot="router-item"]')&&!e.querySelector('[slot="label"]')&&e.children.length>0)).includes(!0),a=t.tagName===this.treeItemTag,o=this.hasRouterSlot();for((r&&!this.el.isParent||a&&!this.el.isParent)&&(o?this.routerSlot.classList.add("ic-tree-item-single"):i.classList.add("ic-tree-item-single"));t;)t.tagName===this.treeItemTag&&(e++,!this.el.isParent&&r?i.style.paddingLeft=`calc(var(--ic-space-xl) + ${16*e}px)`:this.el.isParent?i.style.paddingLeft=16*e+"px":i.style.paddingLeft=`calc(var(--ic-space-xs) + ${24*e}px`),t=t.parentElement},this.truncateTreeItemLabel=e=>{const t=e.shadowRoot.querySelector(".tree-item-label"),i=null==t?void 0:t.closest(this.TOOLTIP),r=e.shadowRoot.querySelector(".tree-item-content");if((null==t?void 0:t.scrollHeight)>(null==r?void 0:r.clientHeight)&&(t.classList.add("ic-text-overflow"),!i)){const e=document.createElement("ic-tooltip");e.setAttribute("target",this.el.id),e.setAttribute("label",t.textContent),e.classList.add("ic-tooltip-overflow"),e.setAttribute("placement","right"),r.appendChild(e),e.appendChild(t)}},this.hostMutationCallback=e=>{e.some((({type:e,addedNodes:t,removedNodes:i})=>"childList"===e&&(0,a.c)(t,i,"icon")))&&(0,r.f)(this)},this.handleDisplayTooltip=e=>{const t=this.el.shadowRoot.querySelector(".tree-item-label"),i=null==t?void 0:t.closest(this.TOOLTIP);null==i||i.displayTooltip(e)},this.childTreeItems=void 0,this.appearance="dark",this.disabled=!1,this.expanded=!1,this.hasParentExpanded=!1,this.href=void 0,this.hreflang="",this.isParent=!1,this.label="",this.referrerpolicy=void 0,this.rel=void 0,this.selected=!1,this.size="default",this.target=void 0}watchSelectedHandler(){this.selected&&this.icTreeItemSelected.emit({id:this.el.id}),this.updateAriaLabel()}disconnectedCallback(){var e;null===(e=this.hostMutationObserver)||void 0===e||e.disconnect()}componentDidLoad(){this.childTreeItems=Array.from(this.el.children).filter((e=>e.tagName===this.treeItemTag)),this.childTreeItems.length>0&&(this.isParent=!0),this.setTreeItemPadding(),this.updateAriaLabel(),this.truncateTreeItemLabel(this.el),!(0,a.i)(this.el,"label")&&(0,a.o)([{prop:this.label,propName:"label"}],"Tree item"),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{childList:!0})}componentDidUpdate(){this.hasParentExpanded&&(this.childTreeItems.forEach((e=>{this.truncateTreeItemLabel(e)})),this.hasParentExpanded=!1)}handleKeyDown(e){"Enter"!==e.key&&" "!==e.key||(e.stopImmediatePropagation(),this.handleTreeItemClicked())}async setFocus(){var e,t;this.hasRouterSlot()?null===(e=this.routerSlot)||void 0===e||e.focus():null===(t=this.treeItemElement)||void 0===t||t.focus()}async updateAriaLabel(){let e;if(e=this.hasRouterSlot()?this.routerSlot.textContent:(0,a.i)(this.el,"label")?this.el.querySelector('[slot="label"]').textContent:this.label,this.isParent&&(e=`${e}, triggers submenu, ${this.expanded?"expanded":"collapsed"}`),this.el.parentElement){const t=Array.from(this.el.parentElement.children).filter((e=>e.tagName===this.treeItemTag));e=`${e}, ${t.indexOf(this.el)+1} of ${t.length}`}this.selected&&(e=`${e}, active`),this.disabled&&(e=`${e}, dimmed`),this.hasRouterSlot()?this.routerSlot.ariaLabel=e:this.treeItemElement.ariaLabel=e}hasRouterSlot(){return this.routerSlot=this.el.querySelector('[slot="router-item"]'),!!this.routerSlot}render(){const{appearance:e,disabled:t,label:i,selected:o,size:n,expanded:s}=this,l=this.href&&!this.disabled?"a":"div",c="a"==l&&{href:this.href,hrefLang:this.hreflang,referrerPolicy:this.referrerpolicy,rel:this.rel,target:this.target};return(0,r.h)(r.H,{class:{[`ic-tree-item-${e}`]:!0,"ic-tree-item-disabled":t,"ic-tree-item-selected":!t&&o,[`ic-tree-item-${n}`]:"default"!==n},id:this.treeItemId},this.hasRouterSlot()?(0,r.h)("slot",{name:"router-item"}):(0,r.h)(l,Object.assign({class:{"tree-item-content":!0},tabIndex:t?-1:0,onClick:this.handleTreeItemClicked,ref:e=>this.treeItemElement=e,"aria-disabled":t?"true":"false","aria-live":"polite"},c,{onFocus:()=>this.handleDisplayTooltip(!0),onBlur:()=>this.handleDisplayTooltip(!1)}),this.isParent&&(0,r.h)("span",{class:{"arrow-dropdown":!0,"tree-item-expanded":s},"aria-hidden":"true",innerHTML:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentColor"/>\n</svg>'}),(0,a.i)(this.el,"icon")&&(0,r.h)("div",{class:"icon-container"},(0,r.h)("slot",{name:"icon"})),(0,r.h)("ic-typography",{class:"tree-item-label"},(0,a.i)(this.el,"label")?(0,r.h)("slot",{name:"label"}):i)),s&&(0,r.h)("div",{"aria-hidden":`${!s}`},(0,r.h)("slot",null)))}get el(){return(0,r.g)(this)}static get watchers(){return{selected:["watchSelectedHandler"]}}};n.style=':host{display:block;border:none;position:relative}:host .tree-item-content{display:flex;align-items:center;height:calc(var(--ic-space-xl) + var(--ic-space-xs));padding:0 var(--ic-space-xs);text-decoration:none;color:var(--ic-primary-text)}::slotted([slot="router-item"]){display:flex;align-items:center;height:calc(var(--ic-space-xl) + var(--ic-space-xs));text-decoration:none;font-family:var(--ic-font-body-family);color:var(--ic-primary-text);padding:0 var(--ic-space-xs) !important}::slotted([slot="router-item"].ic-tree-item-single){padding-left:calc(var(--ic-space-xl) + var(--ic-space-xs)) !important}:host .tree-item-content:focus,::slotted([slot="router-item"]:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-transition-duration-fast);outline:none}:host .tree-item-content:hover,::slotted([slot="router-item"]:hover){background-color:var(--ic-action-dark-bg-hover) !important;cursor:pointer}:host .tree-item-content:active,::slotted([slot="router-item"]:active){background-color:var(--ic-action-dark-bg-active) !important}:host(.ic-tree-item-selected) .tree-item-content,:host(.ic-tree-item-selected) ::slotted([slot="router-item"]){background-color:var(--ic-action-default-bg-hover) !important}:host(.ic-tree-item-small) .tree-item-content,:host(.ic-tree-item-small) ::slotted([slot="router-item"]){height:var(--ic-space-xl)}:host(.ic-tree-item-large) .tree-item-content,:host(.ic-tree-item-large) ::slotted([slot="router-item"]){height:var(--ic-space-xxl)}:host(.ic-tree-item-disabled){pointer-events:none}:host(.ic-tree-item-disabled) .tree-item-content,:host(.ic-tree-item-disabled) .arrow-dropdown,:host(.ic-tree-item-disabled) ::slotted([slot="icon"]),:host(.ic-tree-item-disabled) ::slotted([slot="router-item"]){color:var(--ic-architectural-200) !important;fill:var(--ic-architectural-200);pointer-events:none}:host(.ic-tree-item-light) .tree-item-content,:host(.ic-tree-item-light) .arrow-dropdown,:host(.ic-tree-item-light) ::slotted([slot="icon"]),:host(.ic-tree-item-light) ::slotted([slot="router-item"]){color:var(--ic-architectural-white);fill:var(--ic-architectural-white)}:host .arrow-dropdown{color:var(--ic-action-default);margin-right:var(--ic-space-xs)}:host(.ic-tree-item-small) .arrow-dropdown{margin-right:var(--ic-space-xxs)}:host .tree-item-expanded{transform:rotate(180deg);margin-top:calc(-1 * var(--ic-space-xxs))}:host .ic-tree-item-single{padding-left:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.ic-tree-item-small) .ic-tree-item-single{padding-left:calc(var(--ic-space-xl) + var(--ic-space-xxs))}.icon-container{width:var(--ic-space-lg);height:var(--ic-space-lg);margin:0 var(--ic-space-xs) 0 0}:host(.ic-tree-item-small) .icon-container{margin:0 var(--ic-space-xxs) 0 0}.ic-text-overflow{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ic-tooltip-overflow{overflow:hidden}@media (forced-colors: active){::slotted([slot="icon"]){fill:currentcolor}:host(.ic-tree-item-disabled) .tree-item-content,:host(.ic-tree-item-disabled) .arrow-dropdown,:host(.ic-tree-item-disabled) ::slotted([slot="icon"]),:host(.ic-tree-item-disabled) ::slotted([slot="router-item"]){color:GrayText !important;fill:GrayText !important}:host .tree-item-content:focus,::slotted([slot="router-item"]:focus){border:var(--ic-hc-border) !important}:host(.ic-tree-item-selected) .tree-item-content,:host(.ic-tree-item-selected) ::slotted([slot="router-item"]){color:Highlight !important}}'}}]);