"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[8343],{38343:function(t,e,i){i.r(e),i.d(e,{ic_search_bar:function(){return h}});var s=i(44894),a=i(34677),n=i(60790);let l=0;const h=class{constructor(t){(0,s.r)(this,t),this.icChange=(0,s.c)(this,"icChange",7),this.icClear=(0,s.c)(this,"icClear",7),this.icInput=(0,s.c)(this,"icInput",7),this.icInputBlur=(0,s.c)(this,"icInputBlur",7),this.icInputFocus=(0,s.c)(this,"icInputFocus",7),this.icOptionSelect=(0,s.c)(this,"icOptionSelect",7),this.icMenuChange=(0,s.c)(this,"icMenuChange",7),this.icClearBlur=(0,s.c)(this,"icClearBlur",7),this.icRetryLoad=(0,s.c)(this,"icRetryLoad",7),this.icSubmitSearch=(0,s.c)(this,"icSubmitSearch",7),this.icSubmitSearchBlur=(0,s.c)(this,"icSubmitSearchBlur",7),this.icSearchBarBlur=(0,s.c)(this,"icSearchBarBlur",7),this.icSearchBarFocus=(0,s.c)(this,"icSearchBarFocus",7),this.assistiveHintEl=null,this.hasTimedOut=!1,this.inputId="ic-search-bar-input-"+l++,this.menuCloseFromMenuChangeEvent=!1,this.menuId=`${this.inputId}-menu`,this.preLoad=!0,this.preventSubmit=!1,this.prevNoOption=!1,this.retryButtonClick=!1,this.truncateValue=!1,this.handleClear=t=>{const e=t;"click"!==t.type&&"Enter"!==e.code&&"Space"!==e.code||(this.value="",this.inputEl.value="",this.loading=!1,clearTimeout(this.timeoutTimer),this.filteredOptions=this.options,this.el.setFocus(),this.icClear.emit(),t.preventDefault(),this.preventSubmit=!0)},this.onInput=t=>{this.value=t.target.value;const e=[{[this.labelField]:this.emptyOptionListText,[this.valueField]:""}];if(this.options.length>0&&(this.setMenuChange(!0),this.preLoad=!1,!1===this.disableFilter)){const t=(0,n.B)(this.options,!1,this.value,"anywhere",this.labelField);this.filteredOptions=t.length>0?t:e}this.showClearButton||this.handleShowClearButton(!0),this.debounceAriaLiveUpdate()},this.onInputBlur=t=>{const e=t.target.value,i=t.relatedTarget;this.icInputBlur.emit({value:e,relatedTarget:i})},this.onInputFocus=t=>{const e=t.target.value;this.icInputFocus.emit({value:e}),this.handleShowClearButton(!0)},this.handleClearBlur=t=>{const e=t.relatedTarget;this.icClearBlur.emit({relatedTarget:e}),this.clearButtonFocused=!1},this.handleSubmitSearchBlur=t=>{const e=t.relatedTarget;this.icSubmitSearchBlur.emit({relatedTarget:e}),this.searchSubmitFocused=!1},this.handleMouseDown=t=>{t.preventDefault()},this.handleSubmitSearchFocus=()=>{this.searchSubmitFocused=!0},this.handleSubmitSearch=()=>{this.highlightedValue&&(this.value=this.highlightedValue),this.highlightedValue=void 0,this.icSubmitSearch.emit({value:this.value});const t=this.el.closest("FORM");this.searchSubmitButton&&t&&!this.preventSubmit&&(0,n.C)(t,this.searchSubmitButton)},this.handleSubmitSearchKeyDown=t=>{" "===t.key&&(t.preventDefault(),this.handleSubmitSearch())},this.handleRetry=t=>{this.retryViaKeyPress="Enter"===t.detail.keyPressed,this.icRetryLoad.emit({value:t.detail.value}),this.triggerLoading(),this.retryButtonClick=!0},this.triggerLoading=()=>{const t=[{[this.labelField]:this.loadingLabel,[this.valueField]:"",loading:!0}];this.filteredOptions!==t&&(this.filteredOptions=t),this.timeout&&(this.timeoutTimer=window.setTimeout((()=>{this.filteredOptions=[{[this.labelField]:this.loadingErrorLabel,[this.valueField]:"",timedOut:!0}]}),this.timeout))},this.handleOptionSelect=t=>{t.detail.label!==this.emptyOptionListText?(this.value=t.detail.value,this.icOptionSelect.emit({value:this.value})):this.el.setFocus()},this.handleMenuOptionHighlight=t=>{var e;const i=null===(e=t.detail.optionId)||void 0===e?void 0:e.replace(`${this.menuId}-`,"");i&&(this.highlightedValue=i),t.detail.optionId?this.ariaActiveDescendant=t.detail.optionId:this.ariaActiveDescendant=void 0},this.handleMenuChange=t=>{this.setMenuChange(t.detail.open),t.detail.open||(this.handleMenuCloseFromMenuChange(!0),(void 0===t.detail.focusInput||t.detail.focusInput)&&this.el.setFocus())},this.setMenuChange=t=>{this.open!==t&&(this.open=t,this.icMenuChange.emit({open:t}))},this.handleHostFocus=()=>{this.options&&this.value&&!this.menuCloseFromMenuChangeEvent&&this.setMenuChange(!0),this.handleTruncateValue(!1),this.icSearchBarFocus.emit()},this.handleHostBlur=t=>{const e=t.relatedTarget;this.open&&this.options&&e!==this.menu&&!this.retryViaKeyPress&&!this.retryButtonClick&&this.setMenuChange(!1),(this.retryButtonClick||this.retryViaKeyPress)&&this.inputEl.setFocus(),this.handleShowClearButton(!1),this.handleMenuCloseFromMenuChange(!1),this.handleTruncateValue(!0),this.icSearchBarBlur.emit({relatedTarget:e,value:this.value}),this.retryViaKeyPress=!1,this.retryButtonClick=!1},this.handleShowClearButton=t=>{this.showClearButton=t},this.handleFocusClearButton=()=>{this.clearButtonFocused=!0},this.handleMenuCloseFromMenuChange=t=>{this.menuCloseFromMenuChangeEvent=t},this.handleTruncateValue=t=>{this.truncateValue=t},this.renderAssistiveHintEl=()=>{var t,e;const i=null===(e=null===(t=this.el.shadowRoot.querySelector("ic-text-field"))||void 0===t?void 0:t.shadowRoot)||void 0===e?void 0:e.querySelector(`#${this.inputId}`);i&&Object.keys(i).length>0&&this.hasOptionsOrFilterDisabled()&&(this.assistiveHintEl=document.createElement("span"),this.assistiveHintEl.innerText=this.hintText,this.assistiveHintEl.id=`${this.inputId}-assistive-hint`,this.assistiveHintEl.style.display="none",void 0!==i.after&&i.after(this.assistiveHintEl))},this.updateSearchResultAriaLive=()=>{const t=this.el.shadowRoot.querySelector(".search-results-status");t&&(!this.open||""===this.value||this.value.length<this.charactersUntilSuggestion?t.innerText="":this.hasOptionsOrFilterDisabled()&&this.filteredOptions.length>0&&this.open&&!this.filteredOptions[0].loading&&(this.hadNoOptions()?t.innerText=this.emptyOptionListText:t.innerText=`${this.filteredOptions.length} result${this.filteredOptions.length>1?"s":""} available`))},this.hasOptionsOrFilterDisabled=()=>this.options.length>0||this.disableFilter,this.hadNoOptions=()=>1===this.filteredOptions.length&&this.filteredOptions[0][this.labelField]===this.emptyOptionListText&&"navigation"===this.searchMode,this.isSubmitDisabled=()=>{const t=void 0===this.value||null===this.value||""===this.value,e=this.value.length<this.charactersUntilSuggestion;return t||e||this.disabled||this.hadNoOptions()||this.hasTimedOut||this.loading},this.highlightFirstOptionAfterNoResults=()=>{this.prevNoOption&&this.menu&&!this.hasTimedOut&&(this.menu.handleSetFirstOption(),this.prevNoOption=!1);this.filteredOptions.find((t=>t[this.labelField]===this.emptyOptionListText||t[this.labelField]===this.loadingErrorLabel||t[this.labelField]===this.loadingLabel))&&(this.prevNoOption=!0)},this.ariaActiveDescendant=void 0,this.clearButtonFocused=!1,this.highlightedValue=void 0,this.open=!1,this.searchSubmitFocused=!1,this.showClearButton=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.charactersUntilSuggestion=2,this.disabled=!1,this.disableFilter=!1,this.debounce=0,this.emptyOptionListText="No results found",this.focusOnLoad=!1,this.fullWidth=!1,this.helperText="",this.hideLabel=!1,this.hintText="When autocomplete results are available use the up and down arrows to choose and press enter to select",this.label=void 0,this.labelField="label",this.loading=!1,this.loadingErrorLabel="Loading Error",this.loadingLabel="Loading...",this.name=this.inputId,this.placeholder="Search",this.readonly=!1,this.required=!1,this.searchMode="navigation",this.size="default",this.small=!1,this.spellcheck=!1,this.timeout=void 0,this.valueField="value",this.filteredOptions=[],this.options=[],this.value=""}watchDisabledHandler(){(0,n.r)(this.disabled,this.el)}loadingHandler(t){t&&!this.hasTimedOut&&(this.preLoad=!1,this.triggerLoading())}filteredOptionsHandler(t){this.hasTimedOut=t.some((t=>t.timedOut))}watchOptionsHandler(t){if(this.disableFilter&&!this.hasTimedOut)if(this.loading=!1,clearTimeout(this.timeoutTimer),t.length>0)this.filteredOptions=t;else{if(this.hadNoOptions())return;this.setMenuChange(!0),!this.preLoad&&(this.filteredOptions=[{[this.labelField]:this.emptyOptionListText,[this.valueField]:""}]),this.preLoad=!0}this.debounceAriaLiveUpdate()}watchValueHandler(t){this.inputEl&&this.options&&(0,n.E)(t,this.options,this.valueField,this.labelField)?this.inputEl.value=(0,n.E)(t,this.options,this.valueField,this.labelField):this.inputEl&&this.inputEl.value!==t&&(this.inputEl.value=t)}disconnectedCallback(){this.assistiveHintEl&&this.assistiveHintEl.remove()}componentWillLoad(){this.watchValueHandler(this.value),(0,n.r)(this.disabled,this.el),this.small&&(this.size="small")}componentDidLoad(){var t;this.focusOnLoad&&this.el.setFocus(),this.hasOptionsOrFilterDisabled()&&(this.renderAssistiveHintEl(),this.disableFilter&&(this.filteredOptions=this.options)),(0,n.a)([{prop:this.label,propName:"label"}],"Search Bar"),void 0!==this.inputEl&&(this.anchorEl=null===(t=this.inputEl.shadowRoot)||void 0===t?void 0:t.querySelector("ic-input-component-container"))}componentWillRender(){this.highlightFirstOptionAfterNoResults()}handleKeyDown(t){const e=t.detail.event;this.menu&&this.open&&this.menu.handleKeyboardOpen(e)}handleKeyUp(t){if("Enter"===t.key){if(this.preventSubmit||this.isSubmitDisabled())return;this.handleSubmitSearch(),this.setMenuChange(!1)}"Escape"===t.key&&this.setMenuChange(!1),this.preventSubmit&&(this.preventSubmit=!1)}async setFocus(){this.retryViaKeyPress=!1,this.retryButtonClick=!1,this.inputEl&&this.inputEl.setFocus()}debounceAriaLiveUpdate(){clearTimeout(this.debounceAriaLive),this.debounceAriaLive=window.setTimeout((()=>{this.updateSearchResultAriaLive()}),500)}render(){const{inputId:t,name:e,label:i,required:l,small:h,size:o,placeholder:r,helperText:u,disabled:d,value:c,readonly:p,spellcheck:b,fullWidth:m,options:v,open:g,hideLabel:f,menuId:y,ariaActiveDescendant:w,truncateValue:F,autofocus:S,autocapitalize:O,autocomplete:C,filteredOptions:L}=this,x=p||d,B=(0,n.s)(t,""!==u,!1).trim();let k;k=""!==B&&this.hasOptionsOrFilterDisabled()?`${B} ${this.inputId}-assistive-hint`:this.hasOptionsOrFilterDisabled()?`${this.inputId}-assistive-hint`:""!==B?B:void 0;const T=!!c&&this.hasOptionsOrFilterDisabled(),E=T&&g&&L.length>0,M=E&&c.length>=this.charactersUntilSuggestion,I=(0,n.E)(c,v,this.valueField,this.labelField);return(0,n.p)(!0,this.el,e,c,x),(0,s.h)(s.H,{class:{search:!0,fullwidth:m,disabled:d,small:"small"===o},onFocus:this.handleHostFocus,onBlur:this.handleHostBlur},(0,s.h)("ic-text-field",{ref:t=>this.inputEl=t,inputId:t,label:i,helperText:u,required:l,disabled:x&&!p,readonly:p,size:o,hideLabel:f,fullWidth:m,name:e,truncateValue:F,value:v&&I?I:c,placeholder:r,onInput:this.onInput,onBlur:this.onInputBlur,onFocus:this.onInputFocus,"aria-label":f?i:"","aria-describedby":k,"aria-owns":M?y:void 0,"aria-controls":M?y:void 0,"aria-haspopup":v.length>0?"listbox":void 0,ariaExpanded:v.length>0?`${E}`:void 0,ariaActiveDescendant:w,"aria-autocomplete":T?"list":void 0,role:v.length>0?"combobox":void 0,autocomplete:C,autocapitalize:O,autoFocus:S,spellcheck:b,inputmode:"search",debounce:this.debounce},(0,s.h)("div",{class:{"clear-button-container":!0,"clear-button-visible":c&&!x&&this.showClearButton},slot:"clear-button"},(0,s.h)("ic-button",{id:"clear-button",class:"clear-button","aria-label":"Clear",innerHTML:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M15.8327 5.34199L14.6577 4.16699L9.99935 8.82533L5.34102 4.16699L4.16602 5.34199L8.82435 10.0003L4.16602 14.6587L5.34102 15.8337L9.99935 11.1753L14.6577 15.8337L15.8327 14.6587L11.1743 10.0003L15.8327 5.34199Z" fill="currentColor"/>\n</svg>\n',onClick:this.handleClear,onMouseDown:this.handleMouseDown,size:o,onFocus:this.handleFocusClearButton,onBlur:this.handleClearBlur,onKeyDown:this.handleClear,type:"submit",variant:"icon",appearance:this.clearButtonFocused?a.I.Light:a.I.Dark}),(0,s.h)("div",{class:"divider"})),(0,s.h)("div",{class:{"search-submit-button-container":!0,"search-submit-button-disabled":this.isSubmitDisabled()},slot:"search-submit-button"},(0,s.h)("ic-button",{id:"search-submit-button","aria-label":"Search",ref:t=>this.searchSubmitButton=t,class:{"search-submit-button":!0,"search-submit-button-small":!!h},disabled:this.isSubmitDisabled(),innerHTML:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n    <path d="M13.1292 11.8792H12.4708L12.2375 11.6542C13.0542 10.7042 13.5458 9.47083 13.5458 8.12916C13.5458 5.13749 11.1208 2.71249 8.12916 2.71249C5.13749 2.71249 2.71249 5.13749 2.71249 8.12916C2.71249 11.1208 5.13749 13.5458 8.12916 13.5458C9.47083 13.5458 10.7042 13.0542 11.6542 12.2375L11.8792 12.4708V13.1292L16.0458 17.2875L17.2875 16.0458L13.1292 11.8792ZM8.12916 11.8792C6.05416 11.8792 4.37916 10.2042 4.37916 8.12916C4.37916 6.05416 6.05416 4.37916 8.12916 4.37916C10.2042 4.37916 11.8792 6.05416 11.8792 8.12916C11.8792 10.2042 10.2042 11.8792 8.12916 11.8792Z" fill="currentColor"/>\n</svg>',size:o,onClick:this.handleSubmitSearch,onMouseDown:this.handleMouseDown,onBlur:this.handleSubmitSearchBlur,onFocus:this.handleSubmitSearchFocus,onKeyDown:this.handleSubmitSearchKeyDown,type:"submit",variant:"icon",appearance:this.searchSubmitFocused?a.I.Light:a.I.Default})),(0,s.h)("div",{class:{"menu-container":!0,fullwidth:m},slot:"menu"},M&&(0,s.h)("ic-menu",{class:{"no-results":this.hadNoOptions()||1===L.length&&(L[0][this.labelField]===this.loadingLabel||L[0][this.labelField]===this.loadingErrorLabel)},activationType:"manual",anchorEl:this.anchorEl,autoFocusOnSelected:!1,searchMode:this.searchMode,inputEl:this.inputEl,inputLabel:i,ref:t=>this.menu=t,small:"small"===o,fullWidth:m,menuId:y,open:!!M,options:L,onMenuOptionSelect:this.handleOptionSelect,onMenuStateChange:this.handleMenuChange,onMenuOptionId:this.handleMenuOptionHighlight,onRetryButtonClicked:this.handleRetry,parentEl:this.el,value:c,labelField:this.labelField,valueField:this.valueField}))),(0,s.h)("div",{"aria-live":"polite",role:"status",class:"search-results-status"}))}static get delegatesFocus(){return!0}get el(){return(0,s.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"],loading:["loadingHandler"],filteredOptions:["filteredOptionsHandler"],options:["watchOptionsHandler"],value:["watchValueHandler"]}}};h.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.search){--divider-height:1.5rem;--ic-input-label-helpertext-padding:var(--ic-space-xxs)}:host(.search.small){--divider-height:1rem}:host(.fullwidth){width:100%}:host(.search) .disabled:hover{border-color:var(--ic-architectural-200)}:host(.search.disabled) .disabled svg{color:var(--ic-architectural-200)}:host(.search) .disabled svg{color:var(--ic-architectural-400)}.clear-button-container{align-items:center;margin-right:var(--ic-space-1px);display:none;visibility:hidden}.clear-button{border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition)}.clear-button:focus,.clear-button:active{background-color:var(--ic-focus-blue);box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow);border-radius:0.25rem}.clear-button:focus,.clear-button:active *{fill:white}.clear-button-visible{visibility:visible;display:flex}.search-submit-button-container{display:flex;align-items:center}.search-submit-button-disabled .ic-tooltip-container{display:none !important}.search-submit-button:focus,.search-submit-button:active{background-color:var(--ic-focus-blue) !important;box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow) !important;border-radius:var(--ic-space-xxs)}.search-submit-button:focus,.search-submit-button:active *{fill:white}.divider{width:var(--ic-border-width);background-color:var(--ic-action-dark-active);height:var(--divider-height)}:host(.dark) .divider{background-color:var(--ic-architectural-200)}.menu-container{width:var(--input-width, 20rem);position:relative;top:var(--ic-space-xxxs)}.menu-container.fullwidth{width:100%}.no-results{cursor:not-allowed}.search-results-status{border:0;clip:rect(0, 0, 0, 0, 0);height:var(--ic-space-1px);margin-bottom:calc(-1 * var(--ic-space-1px));margin-right:calc(-1 * var(--ic-space-1px));overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:var(--ic-space-1px)}'}}]);