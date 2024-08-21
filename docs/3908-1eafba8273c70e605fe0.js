"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[3908],{3908:function(t,i,e){e.r(i),e.d(i,{ic_radio_group:function(){return a}});var s=e(9917),o=e(7261);e(6040);const a=class{constructor(t){(0,s.r)(this,t),this.icChange=(0,s.c)(this,"icChange",7),this.resizeObserver=null,this.ADDITIONAL_FIELD="additional-field",this.RADIO_HORIZONTAL="horizontal",this.RADIO_VERTICAL="vertical",this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{this.checkOrientation()})),this.resizeObserver.observe(this.el)},this.handleKeyDown=t=>{switch(t.key){case"ArrowDown":case"ArrowRight":this.radioOptions[this.getNextItemToSelect(this.selectedChild,!0)].click(),t.preventDefault();break;case"ArrowUp":case"ArrowLeft":this.radioOptions[this.getNextItemToSelect(this.selectedChild,!1)].click(),t.preventDefault()}},this.getNextItemToSelect=(t,i)=>{const e=this.radioOptions.length-1;t<1&&(t=0);let s=i?t+1:t-1;return s<0?s=e:s>e&&(s=0),this.radioOptions[s].disabled&&(s=this.getNextItemToSelect(s,i)),s},this.addSlotChangeListener=()=>{this.radioContainer.addEventListener("slotchange",this.setRadioOptions)},this.setFirstRadioOptionTabIndex=t=>{this.radioOptions[0].setTabIndex(t)},this.setRadioOptions=()=>{this.selectedChild=-1,this.checkedValue="",this.radioOptions=Array.from(this.el.querySelectorAll("ic-radio-option")),this.radioOptions.length>0&&(this.radioOptions.forEach(((t,i)=>{t.selected||(t.selected=this.checkedValue===t.value),t.name=this.name,t.groupLabel=this.label,t.selected&&(this.selectedChild=i,this.checkedValue=t.value)})),this.setFirstRadioOptionTabIndex(this.selectedChild>0?-1:0),this.initialOrientation===this.RADIO_HORIZONTAL&&void 0!==this.radioOptions&&(this.radioOptions.length>2||2===this.radioOptions.length&&((0,o.i)(this.radioOptions[0],this.ADDITIONAL_FIELD)||(0,o.i)(this.radioOptions[1],this.ADDITIONAL_FIELD)))&&(this.currentOrientation=this.RADIO_VERTICAL))},this.checkedValue="",this.currentOrientation=void 0,this.initialOrientation=void 0,this.selectedChild=-1,this.disabled=!1,this.helperText=void 0,this.hideLabel=!1,this.label=void 0,this.name=void 0,this.orientation="vertical",this.required=!1,this.size="default",this.small=!1,this.validationStatus="",this.validationText=""}orientationChangeHandler(){this.initialOrientation=this.orientation,this.checkOrientation()}disconnectedCallback(){var t,i;null===(t=this.resizeObserver)||void 0===t||t.disconnect(),null===(i=this.radioContainer)||void 0===i||i.removeEventListener("slotchange",this.setRadioOptions)}componentWillLoad(){(0,o.k)(this.disabled,this.el),this.orientationChangeHandler(),this.currentOrientation=this.initialOrientation}componentDidLoad(){this.setRadioOptions(),(0,o.f)(this.runResizeObserver),this.addSlotChangeListener(),(0,o.a)([{prop:this.label,propName:"label"},{prop:this.name,propName:"name"}],"Radio Group")}selectHandler({detail:t,target:i}){var e;this.checkedValue=t.value;const s=i;this.icChange.emit({value:this.checkedValue,selectedOption:{radio:s,textFieldValue:null===(e=null==s?void 0:s.querySelector("ic-text-field"))||void 0===e?void 0:e.value}}),void 0!==this.radioOptions&&(this.radioOptions.forEach(((t,i)=>{t.selected=this.checkedValue===t.value,t.selected&&(this.selectedChild=i)})),this.setFirstRadioOptionTabIndex(this.selectedChild>0?-1:0))}changeHandler(){const t=this.radioOptions.findIndex((t=>t.selected));t<0&&(this.setFirstRadioOptionTabIndex(0),this.selectedChild=t)}checkOrientation(){var t,i;if(this.initialOrientation===this.RADIO_HORIZONTAL){let e=0;Array.isArray(this.radioOptions)&&this.radioOptions.length>0?this.radioOptions.forEach((({clientWidth:t},i,s)=>{e+=t,i<s.length-1&&(e+=40)})):e=0,this.initialOrientation==this.RADIO_HORIZONTAL&&(void 0!==this.radioOptions&&(this.radioOptions.length>2||2===this.radioOptions.length&&((0,o.i)(this.radioOptions[0],this.ADDITIONAL_FIELD)||(0,o.i)(this.radioOptions[1],this.ADDITIONAL_FIELD)))||e>=(null===(t=this.radioContainer)||void 0===t?void 0:t.clientWidth)?this.currentOrientation=this.RADIO_VERTICAL:e<(null===(i=this.radioContainer)||void 0===i?void 0:i.clientWidth)&&(this.currentOrientation=this.RADIO_HORIZONTAL))}}render(){return(0,o.p)(!0,this.el,this.name,this.checkedValue,this.disabled),(0,s.h)(s.H,{onKeyDown:this.handleKeyDown,class:{small:this.small||"small"===this.size}},(0,s.h)("div",{role:"radiogroup","aria-label":`${this.label}${this.required?", required":""}`},!this.hideLabel&&(0,s.h)("ic-input-label",{class:{[`${this.validationStatus}`]:!0},label:this.label,helperText:this.helperText,required:this.required,disabled:this.disabled}),(0,s.h)("div",{class:{"radio-buttons-container":!0,horizontal:this.currentOrientation===this.RADIO_HORIZONTAL},ref:t=>this.radioContainer=t},(0,s.h)("slot",null))),(0,o.t)(this.validationStatus,this.disabled)&&(0,s.h)("ic-input-validation",{ariaLiveMode:"polite",status:this.validationStatus,message:this.validationText}))}get el(){return(0,s.g)(this)}static get watchers(){return{orientation:["orientationChangeHandler"]}}};a.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}ic-input-label.error{color:var(--ic-status-error)}ic-input-validation{margin-top:var(--ic-space-sm)}:host(.small) ic-input-validation{margin-top:calc(var(--ic-space-sm) / 2)}ic-input-label ic-typography{margin-bottom:var(--ic-space-sm)}:host(.small) ic-input-label ic-typography{margin-bottom:calc(var(--ic-space-sm) / 2)}:host .radio-buttons-container{display:flex;flex-direction:column;gap:var(--ic-space-xxs)}:host(.small) .radio-buttons-container{gap:var(--ic-space-xxxs)}:host .radio-buttons-container.horizontal{display:flex;flex-direction:row;gap:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.small) .radio-buttons-container.horizontal{gap:var(--ic-space-xl)}'}}]);