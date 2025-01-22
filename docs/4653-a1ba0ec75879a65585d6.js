"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[4653],{44653:function(t,e,i){i.r(e),i.d(e,{ic_text_field:function(){return l}});var a=i(44894),s=i(34677),n=i(60790);let r=0;const o=[...n.y,"title"],l=class{constructor(t){(0,a.r)(this,t),this.getValidationText=(0,a.c)(this,"getValidationText",7),this.icBlur=(0,a.c)(this,"icBlur",7),this.icChange=(0,a.c)(this,"icChange",7),this.icFocus=(0,a.c)(this,"icFocus",7),this.icInput=(0,a.c)(this,"icInput",7),this.icKeydown=(0,a.c)(this,"icKeydown",7),this.inheritedAttributes={},this.hostMutationObserver=null,this.getNumberOfCharacters=t=>null!=t?t.length:0,this.getMaxLengthExceeded=t=>{this.numChars=this.getNumberOfCharacters(t),"number"===this.type&&(this.minValueUnattained=t&&Number(t)<Number(this.min),this.maxValueExceeded=Number(t)>Number(this.max)),this.maxLength>0&&(this.maxLengthExceeded=this.numChars>this.maxLength)},this.getMaxCharactersReached=t=>{this.numChars=this.getNumberOfCharacters(t),this.maxCharactersReached=this.maxCharacters>0&&this.numChars>=this.maxCharacters,this.maxCharactersError&&!this.maxCharactersReached&&(this.maxCharactersError=!1)},this.onInput=t=>{this.value=t.target.value,this.icInput.emit({value:this.value})},this.onBlur=t=>{const e=t.target.value;this.numChars=e.length,this.minCharactersUnattained=this.minCharacters>0&&this.numChars<this.minCharacters,this.icBlur.emit({value:e})},this.onFocus=t=>{this.icFocus.emit({value:t.target.value})},this.hasStatus=t=>""!==t&&!this.disabled,this.handleFormReset=()=>{this.value=this.initialValue},this.hostMutationCallback=t=>{let e=!1;t.forEach((({attributeName:t,type:i,addedNodes:a,removedNodes:s})=>{o.includes(t)?(this.inheritedAttributes[t]=this.el.getAttribute(t),e=!0):"childList"===i&&(e=(0,n.F)(a,s,"icon"))})),e&&(0,a.f)(this)},this.showValidation=()=>{const t=this.readonly?0:this.maxLength,e=(0,n.H)(this.validationStatus)||(0,n.H)(this.validationText),i=this.minValueUnattained||this.maxValueExceeded,a=t>0||this.maxCharactersError||this.minCharactersUnattained;return(!e||i||a)&&!this.validationInlineInternal},this.numChars=0,this.maxCharactersReached=!1,this.maxCharactersError=!1,this.minCharactersUnattained=!1,this.maxLengthExceeded=!1,this.maxValueExceeded=!1,this.minValueUnattained=!1,this.ariaActiveDescendant=void 0,this.ariaAutocomplete=void 0,this.ariaExpanded=void 0,this.ariaOwns=void 0,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autoFocus=!1,this.disabled=!1,this.fullWidth=!1,this.helperText="",this.hideLabel=!1,this.hiddenInput=!0,this.inputId="ic-text-field-input-"+r++,this.inputmode="text",this.label=void 0,this.max=void 0,this.maxCharacters=0,this.maxLength=0,this.maxLengthMessage="Maximum length exceeded",this.min=void 0,this.minCharacters=0,this.name=this.inputId,this.placeholder="",this.readonly=!1,this.required=!1,this.resize=!1,this.role=void 0,this.rows=1,this.size="default",this.small=!1,this.spellcheck=!1,this.truncateValue=void 0,this.type="text",this.validationInline=!1,this.validationInlineInternal=!1,this.validationStatus="",this.validationText="",this.debounce=0,this.value="",this.initialValue=this.value}watchDisabledHandler(){(0,n.r)(this.disabled,this.el)}debounceChanged(){this.icChange=(0,n.P)(this.icChange,this.debounce)}watchValueHandler(t){this.inputEl&&this.inputEl.value!==t&&(this.inputEl.value=t),this.getMaxLengthExceeded(t),this.getMaxCharactersReached(t),this.icChange.emit({value:t})}connectedCallback(){this.debounceChanged()}disconnectedCallback(){var t;(0,n.n)(this.el,this.handleFormReset),null===(t=this.hostMutationObserver)||void 0===t||t.disconnect()}componentWillLoad(){this.value!==this.initialValue&&this.watchValueHandler(this.value),this.getMaxLengthExceeded(this.value),this.getMaxCharactersReached(this.value),this.inheritedAttributes=(0,n.x)(this.el,o),this.readonly&&(this.maxLengthExceeded=!1,this.maxValueExceeded=!1,this.minValueUnattained=!1),(0,n.m)(this.el,this.handleFormReset),(0,n.r)(this.disabled,this.el)}componentDidLoad(){(0,n.a)([{prop:this.label,propName:"label"}],"Text Field"),this.validationInlineInternal&&this.getValidationText.emit({value:this.validationText}),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{attributes:!0,childList:!0})}handleKeyDown(t){this.icKeydown.emit({event:t}),this.maxCharactersError=this.maxCharactersReached}async setFocus(){var t;null===(t=this.inputEl)||void 0===t||t.focus()}render(){const{inputId:t,name:e,label:i,required:r,size:o,small:l,placeholder:h,helperText:c,rows:d,resize:u,disabled:m,value:p,min:b,max:x,maxLength:g,numChars:v,readonly:f,maxLengthExceeded:y,maxCharacters:w,maxCharactersError:C,maxCharactersReached:k,minCharacters:z,minCharactersUnattained:E,minValueUnattained:I,maxValueExceeded:L,validationStatus:V,validationText:M,validationInline:F,validationInlineInternal:O,spellcheck:T,inputmode:N,fullWidth:R,truncateValue:S,hiddenInput:q,showValidation:A}=this,B=f||m,U=y||L||I||E||C?C?s.a.Warning:s.a.Error:V,$=y?this.maxLengthMessage:C?`Maximum input is ${w} characters`:L?`Maximum value of ${x} exceeded`:I?`Minimum value of ${b} not met`:E?`Minimum input is ${z} characters`:M,H=f?0:g,D=y||C||L||I||0===g&&U===s.a.Error?"assertive":"polite",W=this.hasStatus(U)&&!(U==s.a.Success&&F)&&!O,_=d>1,j=g>0?`${t}-charcount-desc`:"",K=`${j} ${(0,n.s)(t,""!==c,W)}`.trim(),P=B&&!f,G=!!this.el.querySelector('[slot="icon"]')&&!P,J=`${U===s.a.Error}`;return q?(0,n.p)(!0,this.el,e,p,B):(0,n.q)(this.el),(0,a.h)(a.H,{class:{fullwidth:R}},(0,a.h)("ic-input-container",{readonly:f,disabled:B},!this.hideLabel&&(0,a.h)("ic-input-label",{for:t,label:i,helperText:c,required:r,disabled:P,readonly:f}),(0,a.h)("ic-input-component-container",{size:l?"small":o,validationStatus:U,multiLine:_,disabled:B,readonly:f,validationInline:F,fullWidth:R},G&&(0,a.h)("span",{class:{readonly:f,"has-value":this.getNumberOfCharacters(p)>0},slot:"left-icon"},(0,a.h)("slot",{name:"icon"})),_?(0,a.h)("textarea",Object.assign({id:t,class:{"no-resize":!1===u||f,"no-left-pad":!G&&f,readonly:f},name:e,ref:t=>this.inputEl=t,value:p,rows:d,required:r,disabled:B,placeholder:h||"",readonly:f,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":i,"aria-describedby":K,"aria-invalid":J,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck:T,inputmode:N,maxlength:k?w:null,minlength:E?z:null},this.inheritedAttributes)):(0,a.h)("input",Object.assign({id:t,name:e,ref:t=>this.inputEl=t,type:this.type,min:b,max:x,value:p,class:{"no-left-pad":!G&&f,readonly:f,"truncate-value":S},placeholder:h||"",required:r,disabled:B,readonly:f,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":i,"aria-describedby":K,"aria-invalid":J,"aria-activedescendant":this.ariaActiveDescendant,"aria-expanded":this.ariaExpanded,"aria-owns":this.ariaOwns,autocomplete:this.autocomplete,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck:T,inputmode:N,role:this.role,maxlength:k?w:null,minlength:E?z:null},this.inheritedAttributes)),(0,n.i)(this.el,"clear-button")&&(0,a.h)("slot",{name:"clear-button"}),(0,n.i)(this.el,"search-submit-button")&&(0,a.h)("slot",{name:"search-submit-button"})),(0,n.i)(this.el,"menu")&&(0,a.h)("slot",{name:"menu"}),A()&&(0,a.h)("ic-input-validation",{status:!1===this.hasStatus(U)||U===s.a.Success&&F||O?"":U,message:W?$:"",ariaLiveMode:D,for:t,fullWidth:R},!f&&H>0&&(0,a.h)("div",{slot:"validation-message-adornment"},(0,a.h)("ic-typography",{variant:"caption",class:{maxlengthtext:!0,error:y,disabled:P}},(0,a.h)("span",{"aria-live":"polite",id:`${t}-charcount`,class:"charcount"},v,"/",H),(0,a.h)("span",{hidden:!0,id:j},"Field can contain a maximum of ",H," characters."))))))}get el(){return(0,a.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"],debounce:["debounceChanged"],value:["watchValueHandler"]}}};l.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--ic-input-label-helpertext-padding:var(--ic-space-xxs)}:host(.fullwidth){width:100%}::-moz-placeholder{color:var(--ic-color-tertiary-text);opacity:1}::placeholder{color:var(--ic-color-tertiary-text);opacity:1}input,textarea{border:0;border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);line-height:1.5rem;letter-spacing:0.005rem;width:100%;padding-right:var(--ic-space-xs);padding-left:var(--ic-space-xs)}textarea{min-height:var(--ic-space-lg);resize:vertical;padding-top:0.375rem}input:focus,textarea:focus{border:0;outline:0}input:disabled,textarea:disabled{color:var(--ic-architectural-200)}input.readonly,textarea.readonly{color:var(--ic-color-primary-text)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type="number"]{-moz-appearance:textfield}textarea.no-resize{resize:none}.maxlengthtext{color:var(--ic-color-secondary-text);padding-right:var(--ic-space-xxxs)}.no-left-pad{padding-left:0}::slotted([slot="icon"]){fill:var(--ic-color-tertiary-text)}.has-value ::slotted([slot="icon"]){fill:var(--ic-color-primary-text)}.charcount{margin-right:calc(-1 * var(--ic-space-xxxs))}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}input[type="search"].truncate-value{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (forced-colors: active){input.readonly,textarea.readonly{color:canvastext}.has-value ::slotted([slot="icon"]){fill:currentcolor}}'}}]);