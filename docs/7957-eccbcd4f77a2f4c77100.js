"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[7957],{7957:function(e,i,t){t.r(i),t.d(i,{ic_checkbox:function(){return o}});var a=t(3660),c=t(6003);t(3077);const o=class{constructor(e){(0,a.r)(this,e),this.checkboxChecked=(0,a.c)(this,"checkboxChecked",7),this.icCheck=(0,a.c)(this,"icCheck",7),this.IC_TEXT_FIELD="ic-text-field",this.eventHandler=e=>{e.stopImmediatePropagation()},this.handleClick=()=>{this.checked=!this.checked,this.icCheck.emit(),this.checkboxChecked.emit()},this.handleFormReset=()=>{this.checked=this.initiallyChecked},this.additionalFieldDisplay="static",this.checked=!1,this.initiallyChecked=this.checked,this.disabled=!1,this.dynamicText="This selection requires additional answers",this.groupLabel=void 0,this.indeterminate=!1,this.label=void 0,this.name=void 0,this.size=void 0,this.small=!1,this.value=void 0}componentWillLoad(){var e;(0,c.r)(this.disabled,this.host),(0,c.d)(this.host,this.handleFormReset),null===(e=this.host.querySelector(this.IC_TEXT_FIELD))||void 0===e||e.addEventListener("icChange",this.eventHandler)}componentDidLoad(){(0,c.a)([{prop:this.label,propName:"label"},{prop:this.value,propName:"value"}],"Checkbox")}componentDidRender(){if("static"===this.additionalFieldDisplay){const e=this.host.querySelector(this.IC_TEXT_FIELD);this.checked?e&&e.removeAttribute("disabled"):e&&e.setAttribute("disabled","")}else this.checked?this.additionalFieldContainer.style.display="flex":this.additionalFieldContainer.style.display="none"}disconnectedCallback(){var e;(0,c.e)(this.host,this.handleFormReset),null===(e=this.host.querySelector(this.IC_TEXT_FIELD))||void 0===e||e.removeEventListener("icChange",this.eventHandler)}async setFocus(){const e=this.host.shadowRoot.querySelector(".checkbox");e&&e.focus()}render(){let e="ic-checkbox-".concat(void 0!==this.label?this.label:this.value,"-").concat(this.groupLabel);e=e.replace(/ /g,"-");const i=this.host.parentElement.size;return this.checked?(0,c.f)(!0,this.host,this.name,this.checked&&this.value,this.disabled):(0,c.h)(this.host),(0,a.h)(a.H,{class:{disabled:this.disabled,small:this.small,["".concat(this.size||i)]:!0}},(0,a.h)("div",{class:"container"},this.checked&&!this.indeterminate&&(0,a.h)("svg",{class:"checkmark",width:"1.5rem",height:"1.5rem",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"},(0,a.h)("title",null,"checkmark icon"),(0,a.h)("path",{d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"})),this.checked&&this.indeterminate&&(0,a.h)("div",{class:"indeterminate-symbol"}),(0,a.h)("input",{role:"checkbox",class:{checkbox:!0,checked:this.checked,indeterminate:this.indeterminate},type:"checkbox",name:this.name,id:e,value:this.value,disabled:!!this.disabled||null,checked:this.checked,indeterminate:this.indeterminate,onClick:this.handleClick}),(0,a.h)("ic-typography",{class:"checkbox-label",variant:"body"},(0,a.h)("label",{htmlFor:e},this.label))),(0,c.i)(this.host,"additional-field")&&(0,a.h)("div",{class:"dynamic-container",ref:e=>this.additionalFieldContainer=e},"dynamic"===this.additionalFieldDisplay&&(0,a.h)("div",{class:"branch-corner"}),(0,a.h)("div",null,"dynamic"===this.additionalFieldDisplay&&(0,a.h)("ic-typography",{variant:"caption"},(0,a.h)("p",{class:"dynamic-text","aria-live":"polite"},this.dynamicText)),(0,a.h)("div",{class:{"additional-field-wrapper":"static"===this.additionalFieldDisplay}},(0,a.h)("slot",{name:"additional-field"})))))}static get delegatesFocus(){return!0}get host(){return(0,a.g)(this)}};o.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.disabled){color:var(--ic-architectural-200);pointer-events:none}.container{display:flex;width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs);margin-bottom:var(--ic-space-xxs);align-items:center}:host(.small) .container{margin-bottom:var(--ic-space-xxxs)}.checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:transparent;border:var(--ic-space-1px) solid var(--ic-architectural-300);border-radius:var(--ic-border-radius);outline:none;cursor:pointer;transition:var(--ic-easing-transition-fast);flex-shrink:0}:host(.small) .checkbox,:host(.small) .container svg{width:var(--ic-space-md);height:var(--ic-space-md)}:host(.large) .checkbox,:host(.large) .container svg{width:var(--ic-space-xl);height:var(--ic-space-xl)}.checkbox:checked{background-color:var(--ic-action-default);border:var(--ic-space-1px) solid var(--ic-action-default);transition:var(--ic-easing-transition-slow)}.checkbox:checked:disabled{background-color:var(--ic-architectural-200)}.checkbox:indeterminate,.checkbox.indeterminate:checked{background-color:transparent;border:0.125rem solid var(--ic-action-default)}.checkbox:checked:hover{background-color:var(--ic-action-default-hover)}.checkbox:indeterminate:hover,.checkbox.indeterminate:checked:hover{background-color:var(--ic-action-default-bg-hover);border:0.125rem solid var(--ic-action-default-hover)}.checkbox:checked:active{background-color:var(--ic-action-default-active)}.checkbox:indeterminate:active,.checkbox.indeterminate:checked:active{background-color:var(--ic-action-default-bg-active);border:0.125rem solid var(--ic-action-default-active)}.checkbox:hover{background-color:var(--ic-action-default-bg-hover);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-hover);border:var(--ic-space-1px) solid var(--ic-action-default-hover)}.checkbox:active{background-color:var(--ic-action-default-bg-active);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-active);border:var(--ic-space-1px) solid var(--ic-action-default-active)}.checkbox:focus{box-shadow:var(--ic-border-focus)}.checkbox:disabled{border:var(--ic-space-1px) dashed var(--ic-architectural-200)}.checkbox-label{padding-left:var(--ic-space-sm)}.checkbox-label:hover{cursor:pointer}.checkmark{position:relative;right:calc(-1 * var(--ic-space-lg));margin-left:calc(-1 * var(--ic-space-lg));fill:white;z-index:1;background-color:transparent;pointer-events:none;flex-shrink:0}:host(.small) .checkmark{margin-left:calc(-1 * var(--ic-space-md));right:calc(-1 * var(--ic-space-md))}:host(.large) .checkmark{margin-left:calc(-1 * var(--ic-space-xl));right:calc(-1 * var(--ic-space-xl))}.indeterminate-symbol{position:relative;width:0.875rem;height:var(--ic-space-xxxs);right:-1.188rem;margin-left:-0.875rem;z-index:1;background-color:var(--ic-action-default);pointer-events:none;flex-shrink:0}:host(.small) .indeterminate-symbol{width:0.6rem;right:-0.8rem;margin-left:-0.6rem}:host(.large) .indeterminate-symbol{width:1.25rem;right:-1.625rem;margin-left:-1.25rem}.container:hover .indeterminate-symbol{background-color:var(--ic-action-default-hover)}.container:active .indeterminate-symbol{background-color:var(--ic-action-default-active)}.additional-field-wrapper{margin-left:calc(var(--ic-space-md) + var(--ic-space-lg));margin-top:calc(var(--ic-space-sm) / 2)}.branch-corner{color:var(--ic-action-default);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-action-default);border-left:0.125rem solid var(--ic-action-default)}.dynamic-container{display:flex;position:relative;margin:var(--ic-space-xxxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-text{color:var(--ic-action-default);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){::slotted(ic-text-field){--input-width:100%}}@media (forced-colors: active){.checkbox{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert;transition:none}.checkbox:checked{transition:none}.checkbox:focus-visible{outline:0.125rem solid highlight}.checkbox:disabled:not(:checked){-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:GrayText}.checkmark{fill:none}.indeterminate-symbol{display:none}}'}}]);