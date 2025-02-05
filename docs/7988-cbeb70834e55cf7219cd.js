"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[7988],{47988:function(e,i,t){t.r(i),t.d(i,{ic_radio_option:function(){return n}});var a=t(44894),o=t(60790);t(34677);const c="additional-field",r="ic-text-field",n=class{constructor(e){(0,a.r)(this,e),this.icCheck=(0,a.c)(this,"icCheck",7),this.radioOptionSelect=(0,a.c)(this,"radioOptionSelect",7),this.icSelectedChange=(0,a.c)(this,"icSelectedChange",7),this.defaultRadioValue="",this.hasAdditionalField=!1,this.skipFocus=!1,this.handleClick=()=>{var e;this.disabled||(!1===this.skipFocus&&this.radioElement.focus(),this.skipFocus=!1,this.hasAdditionalField&&(this.value=(null===(e=this.el.querySelector(r))||void 0===e?void 0:e.value)||this.defaultRadioValue),this.icCheck.emit({value:this.value}),this.radioOptionSelect.emit({value:this.value}))},this.swallowClick=e=>{e.stopPropagation()},this.handleFormReset=()=>{this.skipFocus=!0,this.selected=this.initiallySelected},this.additionalFieldDisplay="static",this.disabled=!1,this.dynamicText="This selection requires additional answers",this.form=void 0,this.formaction=void 0,this.formenctype=void 0,this.formmethod=void 0,this.formnovalidate=void 0,this.formtarget=void 0,this.groupLabel=void 0,this.label=void 0,this.name=void 0,this.value=void 0,this.selected=!1,this.initiallySelected=this.selected}watchDisabledHandler(){(0,o.r)(this.disabled,this.el)}watchSelectedHandler(){this.icSelectedChange.emit()}handleCheck(e){const i=Array.from(this.el.children),t=e.target;"static"===this.additionalFieldDisplay&&(i.includes(t.parentElement)||i.includes(t))&&this.icCheck.emit({value:this.value})}disconnectedCallback(){(0,o.n)(this.el,this.handleFormReset)}componentWillLoad(){if((0,o.i)(this.el,c)){this.hasAdditionalField=!0;const e=this.el.querySelector(r);e&&(e.hiddenInput=!1)}this.defaultRadioValue=this.value,(0,o.m)(this.el,this.handleFormReset),(0,o.r)(this.disabled,this.el)}componentDidLoad(){(0,o.a)([{prop:this.value,propName:"value"}],"Radio Option")}componentWillRender(){const e=(0,o.i)(this.el,c);if(e&&!this.hasAdditionalField){this.hasAdditionalField=!0;const e=this.el.querySelector(r);e&&(e.hiddenInput=!1)}else!e&&this.hasAdditionalField&&(this.hasAdditionalField=!1)}componentDidRender(){if("static"===this.additionalFieldDisplay){const e=this.el.querySelector(r);!this.selected||this.disabled?null==e||e.setAttribute("disabled",""):null==e||e.removeAttribute("disabled")}}textfieldValueHandler(e){this.selected&&(this.value=e.detail.value||this.defaultRadioValue,this.icCheck.emit({value:this.value}),this.radioOptionSelect.emit({value:this.value})),e.stopImmediatePropagation()}async setFocus(){var e;null===(e=this.radioElement)||void 0===e||e.focus()}async setTabIndex(e){this.radioElement.tabIndex=e}render(){const{additionalFieldDisplay:e,disabled:i,dynamicText:t,form:r,formaction:n,formenctype:d,formmethod:s,formnovalidate:l,formtarget:h,groupLabel:u,handleClick:p,hasAdditionalField:m,label:b,name:v,selected:f,swallowClick:k,value:g}=this,y=`ic-radio-option-${(0,o.e)(b)||g}-${u}`;return(0,a.h)(a.H,{onClick:p,class:{disabled:i}},(0,a.h)("div",{class:{container:!0,disabled:i}},(0,a.h)("div",null,(0,a.h)("input",{role:"radio",tabindex:f?"0":"-1",type:"radio",name:v,id:y,value:g,disabled:!!i||null,checked:f,ref:e=>this.radioElement=e,form:r,formaction:n,formenctype:d,formmethod:s,formnovalidate:l,formtarget:h}),(0,a.h)("span",{class:"checkmark"})),(0,a.h)("ic-typography",{class:"radio-label",variant:"body"},(0,a.h)("label",{htmlFor:y},b))),m&&(0,a.h)("div",{onClick:k,class:{"dynamic-container":!0,hidden:"dynamic"===e&&!f}},"dynamic"===e&&(0,a.h)("div",{class:"branch-corner"}),(0,a.h)("div",null,"dynamic"===e&&(0,a.h)("ic-typography",{variant:"caption"},(0,a.h)("p",{class:"dynamic-text"},t)),(0,a.h)("div",{class:{"additional-field-wrapper":"static"===e}},(0,a.h)("slot",{name:c})))))}static get delegatesFocus(){return!0}get el(){return(0,a.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"],selected:["watchSelectedHandler"]}}};n.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:flex;flex-direction:column;width:-moz-fit-content;width:fit-content}:host([additional-field-display="static"]) ::slotted([slot="additional-field"]){margin-top:calc(var(--ic-space-sm) / 2);margin-left:var(--ic-space-xl)}:host(.disabled){color:var(--ic-architectural-200)}.container input:focus+span.checkmark,:host(:focus) .container input:checked+span.checkmark{box-shadow:var(--ic-border-focus)}.container{display:grid;grid-template-columns:min-content auto;position:relative;cursor:pointer;align-items:center;margin:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs)}.container.disabled,.container.disabled input:disabled{cursor:default}.container input{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-block;position:absolute;cursor:pointer;height:var(--ic-space-lg);width:var(--ic-space-lg);border-radius:50%;border:none}.checkmark{display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:var(--ic-architectural-white);border:var(--ic-border-default);border-radius:50%;transition:var(--ic-easing-transition-fast);box-sizing:border-box}.container input:checked~.checkmark::after{display:inline-block}.container:hover input~.checkmark{background-color:var(--ic-action-default-bg-hover-no-alpha);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-hover);border:var(--ic-border-width) solid var(--ic-action-default)}.container:active input~.checkmark{background-color:var(--ic-action-default-bg-active-no-alpha);border:var(--ic-border-width) solid var(--ic-action-default-active);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-active)}.container:active input:checked~.checkmark{background-color:var(--ic-action-default-bg-active);border:0.125rem solid var(--ic-action-default-active);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-active)}.container:active input:checked~.checkmark::after{background-color:var(--ic-action-default-active)}.container input:checked~.checkmark{border:0.125rem solid var(--ic-action-default)}.container input:checked:disabled~.checkmark{background-color:var(--ic-architectural-white);border:0.125rem solid var(--ic-architectural-200)}.container input:disabled~.checkmark{border:var(--ic-border-width) dashed var(--ic-architectural-200)}.container input:disabled~.checkmark::after{background:var(--ic-architectural-200)}.container:hover input:disabled~.checkmark{background-color:var(--ic-architectural-white);box-shadow:none;border:0.125rem solid none}.container:active input:disabled~.checkmark::after{background-color:var(--ic-architectural-200)}.container .checkmark::after{content:"";position:absolute;display:none;top:calc(50% - var(--ic-space-xs));left:calc(50% - var(--ic-space-xs));width:var(--ic-space-md);height:var(--ic-space-md);border-radius:50%;background:var(--ic-action-default)}.radio-label{margin-left:var(--ic-space-md)}.additional-field-wrapper{margin-left:var(--ic-space-xs)}.branch-corner{color:var(--ic-action-default);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-action-default);border-left:0.125rem solid var(--ic-action-default);margin-left:calc(-1 * var(--ic-space-1px))}.dynamic-container{display:flex;position:relative;margin:var(--ic-space-xxxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-container.hidden{display:none}.dynamic-text{color:var(--ic-action-default);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){::slotted(ic-text-field){--input-width:100%}}@media (forced-colors: active){.container input:checked~.checkmark,.container:active input:checked~.checkmark{border-color:Highlight}.container input:checked~.checkmark::after,.container:active input:checked~.checkmark::after{background-color:Highlight}.container input:disabled~.checkmark,.container input:checked:disabled~.checkmark{border-color:GrayText}.container input:disabled~.checkmark::after,.container:active input:disabled~.checkmark::after{background-color:GrayText}}'}}]);