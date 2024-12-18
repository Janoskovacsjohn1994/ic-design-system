"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[9511],{49511:function(e,t,i){i.r(t),i.d(t,{ic_select:function(){return c}});var s=i(44894),a=i(17970),n=i(34677);const l='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentColor" />\n</svg>\n',o='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n<path d="M12.6666 4.27334L11.7266 3.33334L7.99998 7.06001L4.27331 3.33334L3.33331 4.27334L7.05998 8.00001L3.33331 11.7267L4.27331 12.6667L7.99998 8.94001L11.7266 12.6667L12.6666 11.7267L8.93998 8.00001L12.6666 4.27334Z" fill="currentColor" />\n</svg>\n';let h=0;const r=[...a.y,"tabindex","title"],c=class{constructor(e){(0,s.r)(this,e),this.icBlur=(0,s.c)(this,"icBlur",7),this.icChange=(0,s.c)(this,"icChange",7),this.icClear=(0,s.c)(this,"icClear",7),this.icClose=(0,s.c)(this,"icClose",7),this.icFocus=(0,s.c)(this,"icFocus",7),this.icInput=(0,s.c)(this,"icInput",7),this.icOpen=(0,s.c)(this,"icOpen",7),this.icOptionSelect=(0,s.c)(this,"icOptionSelect",7),this.icRetryLoad=(0,s.c)(this,"icRetryLoad",7),this.hasSetDefaultValue=!1,this.inheritedAttributes={},this.initialOptionsEmpty=!1,this.inputId="ic-select-input-"+h++,this.menuId=`${this.inputId}-menu`,this.searchableMenuItemSelected=!1,this.ungroupedOptions=[],this.hostMutationObserver=null,this.hostMutationCallback=e=>{let t=!1;e.forEach((({attributeName:e,type:i,addedNodes:s,removedNodes:n})=>{r.includes(e)?(this.inheritedAttributes[e]=this.el.getAttribute(e),t=!0):"childList"===i&&(t=(0,a.j)(s,n,"icon"))})),t&&(0,s.f)(this)},this.handleRetry=e=>{var t;e.detail.keyPressed&&(null===(t=this.searchableSelectElement)||void 0===t||t.focus()),this.blurredBecauseButtonPressed=!0,this.retryButtonClick=!0,this.hasSetDefaultValue=!0,this.icRetryLoad.emit({value:this.hiddenInputValue})},this.emitIcChange=e=>{this.searchable||(this.value=e),clearTimeout(this.debounceIcChange),this.debounceIcChange=window.setTimeout((()=>{this.icChange.emit({value:e})}),this.currDebounce)},this.emitImmediateIcChange=e=>{this.value=e,clearTimeout(this.debounceIcChange),this.icChange.emit({value:e})},this.deduplicateOptions=e=>{const t=[],i=[];let s;return e.forEach((e=>{if(e.children){s=[],e.children.forEach((e=>{t.includes(e.value)?console.warn(`ic-select with label ${this.label} was populated with duplicate option (value: ${e.value}) which has been removed.`):(t.push(e.value),s.push(e))}));const a=Object.assign(Object.assign({},e),{children:s});i.push(a)}else t.includes(e.value)?console.warn(`ic-select with label ${this.label} was populated with duplicate option (value: ${e.value}) which has been removed.`):(t.push(e.value),i.push(e))})),i},this.setOptionsValuesFromLabels=()=>{var e;(null===(e=this.options)||void 0===e?void 0:e.length)>0&&this.options.map&&this.options.map((e=>{e.value||(e.value=e.label)}))},this.setUngroupedOptions=e=>{this.ungroupedOptions=e.detail.options},this.setTextColor=()=>{0===this.nativeSelectElement.selectedIndex?this.nativeSelectElement.className="placeholder":this.nativeSelectElement.className="select-option-selected"},this.setMenuChange=e=>{this.open!==e&&(this.open=e)},this.getLabelFromValue=e=>(0,a.E)(e,this.uniqueOptions),this.getFilteredChildMenuOptions=e=>{let t=e.children;t=this.searchable?(0,a.B)(e.children,this.includeDescriptionsInSearch,this.searchableSelectInputValue,this.searchMatchPosition):(0,a.B)(e.children,!1,this.pressedCharacters,"start");const i=Object.assign({},e);return i.children=t,i},this.handleNativeSelectChange=()=>{this.icOptionSelect.emit({value:this.nativeSelectElement.value}),this.emitImmediateIcChange(this.nativeSelectElement.value),this.setTextColor()},this.handleCustomSelectChange=e=>{this.searchable&&e.detail.label===this.emptyOptionListText?this.searchableSelectElement.focus():(this.searchable&&(this.value=e.detail.value,this.searchableMenuItemSelected=!0,this.value===this.currValue&&(this.searchableSelectInputValue=this.getLabelFromValue(this.value)),this.inputValueToFilter=null,this.hiddenInputValue=this.getValueFromLabel(this.searchableSelectInputValue)),this.ariaActiveDescendant=e.detail.optionId,this.icOptionSelect.emit({value:e.detail.value}),this.emitIcChange(e.detail.value))},this.handleMenuChange=e=>{this.open=e.detail.open,this.pressedCharacters="",this.searchable&&this.handleFocusIndicatorDisplay()},this.handleMenuKeyPress=e=>{e.cancelBubble=!0,this.handleCharacterKeyDown(e.detail.key)},this.handleMenuValueChange=e=>{this.value=e.detail.value},this.handleFocusIndicatorDisplay=()=>{const e=this.el.shadowRoot.querySelector(".focus-indicator");this.open?e.classList.add("focus-indicator-enabled"):e.classList.remove("focus-indicator-enabled")},this.handleMouseDown=e=>{this.open||e.preventDefault()},this.isExternalFiltering=()=>this.searchable&&this.disableFilter,this.handleClick=e=>{var t;this.open||(this.isExternalFiltering()?this.menu.options=this.filteredOptions:this.hasTimedOut||this.loading||(null===(t=this.noOptions)||void 0===t?void 0:t.length)||this.searchable&&!this.searchableMenuItemSelected||(this.noOptions=null,this.menu.options=this.uniqueOptions)),0!==e.detail&&this.menu.handleClickOpen()},this.handleExpandIconMouseDown=e=>{this.disabled||(e.preventDefault(),this.searchableSelectElement.focus(),this.handleClick(e))},this.handleClear=e=>{e.stopPropagation(),this.hasTimedOut=!1,clearTimeout(this.timeoutTimer),this.noOptions=null,this.emitImmediateIcChange(null),this.icClear.emit(),this.searchable?(this.searchableSelectElement.value=null,this.searchableSelectInputValue=null,this.filteredOptions=this.uniqueOptions,this.hiddenInputValue=null,this.searchableSelectElement.focus()):this.customSelectElement.focus()},this.handleCharacterKeyDown=e=>{!this.open||" "!==e||0!==this.pressedCharacters.length||this.hasTimedOut||this.loading||this.setMenuChange(!1),1!==e.length||this.searchable?this.pressedCharacters="":(window.clearTimeout(this.characterKeyPressTimer),this.characterKeyPressTimer=window.setTimeout((()=>this.pressedCharacters=""),1e3),this.pressedCharacters+=e,this.handleFilter(),this.noOptions||this.emitImmediateIcChange(this.filteredOptions[0].value))},this.handleNativeSelectKeyDown=e=>{("Escape"!==e.key&&"Tab"!==e.key||this.open)&&(e.cancelBubble=!0),this.handleCharacterKeyDown(e.key)},this.handleKeyDown=e=>{("Escape"!==e.key&&"Tab"!==e.key||this.open)&&(e.cancelBubble=!0);const t="ArrowDown"===e.key||"ArrowUp"===e.key;this.open||(this.isExternalFiltering()&&("Enter"===e.key||t)?this.menu.options=this.filteredOptions:this.hasTimedOut||(this.noOptions=null,this.menu.options=this.uniqueOptions)),this.open&&"Enter"===e.key?this.setMenuChange(!1):t&&null!==this.noOptions||(" "===e.key&&this.pressedCharacters.length>0||this.menu.handleKeyboardOpen(e),this.handleCharacterKeyDown(e.key))},this.handleClearButtonFocus=()=>{this.clearButtonFocused=!0},this.handleClearButtonBlur=e=>{var t;const i=null===(t=this.menu)||void 0===t?void 0:t.querySelector("#retry-button");this.searchableSelectElement&&e.relatedTarget===this.searchableSelectElement||i&&e.relatedTarget===i||(this.setMenuChange(!1),this.handleFocusIndicatorDisplay()),this.clearButtonFocused=!1},this.handleFilter=()=>{var e;const t=this.deduplicateOptions(this.searchable?[...this.uniqueOptions]:this.ungroupedOptions);let i,s=!1,n=[];t.map((e=>{e.children&&(s=!0)})),this.searchable?(i=(0,a.B)(t,this.includeDescriptionsInSearch,this.inputValueToFilter,this.searchMatchPosition),this.searchableMenuItemSelected=!1):i=(0,a.B)(t,!1,this.pressedCharacters,"start"),s||(null===(e=i[0])||void 0===e?void 0:e.label)===this.emptyOptionListText?s&&t.map((e=>{this.includeGroupTitlesInSearch&&-1!==i.indexOf(e)?n.push(e):n.push(this.getFilteredChildMenuOptions(e))})):n=i;let l=!1;s&&(l=!0,n.map((e=>{e.children.length>0&&(l=!1)}))),n.length>0&&!l?(this.noOptions=null,this.filteredOptions=n):(this.noOptions=[{label:this.emptyOptionListText,value:""}],this.filteredOptions=this.noOptions)},this.triggerLoading=()=>{this.hasTimedOut=!1,this.noOptions=[{label:this.loadingLabel,value:"",loading:!0}],this.filteredOptions!==this.noOptions&&this.searchable?this.filteredOptions=this.noOptions:this.uniqueOptions===this.noOptions||this.searchable||(this.uniqueOptions=this.noOptions),this.timeout&&(this.timeoutTimer=window.setTimeout((()=>{this.loading=!1,this.hasTimedOut=!0,this.noOptions=[{label:this.loadingErrorLabel,value:"",timedOut:!0}],this.filteredOptions=this.noOptions,this.searchable||(this.uniqueOptions=this.noOptions)}),this.timeout))},this.getValueFromLabel=e=>{var t;return null===(t=this.uniqueOptions.find((t=>t.label===e)))||void 0===t?void 0:t.value},this.handleSearchableSelectInput=e=>{this.searchableSelectInputValue=e.target.value,this.icInput.emit({value:this.searchableSelectInputValue}),this.emitIcChange(this.searchableSelectInputValue),this.hiddenInputValue=this.searchableSelectInputValue,this.inputValueToFilter=this.searchableSelectInputValue,this.setMenuChange(!0),this.disableFilter||(this.handleFilter(),this.debounceAriaLiveUpdate())},this.updateSearchableSelectResultAriaLive=()=>{const e=this.el.shadowRoot.querySelector(".searchable-select-results-status");e&&(null!==this.noOptions?e.innerText=this.emptyOptionListText:e.innerText="")},this.getDefaultValue=e=>this.getLabelFromValue(e)||e||null,this.onFocus=()=>{this.icFocus.emit()},this.onBlur=({relatedTarget:e})=>{var t;const i=e;if(null!==i&&("UL"===i.tagName&&i.className.includes("menu")||"LI"===i.tagName&&i.className.includes("option")))return;const s=null===(t=this.menu)||void 0===t?void 0:t.querySelector("#retry-button");this.searchable&&!!this.menu&&i!==this.menu&&!Array.from(this.menu.querySelectorAll("[role='option']")).includes(i)&&!(this.clearButton&&i===this.clearButton)&&!(s&&i===s)&&(this.retryButtonClick||this.setMenuChange(!1),this.handleFocusIndicatorDisplay()),this.retryButtonClick=!1,this.icBlur.emit()},this.onTimeoutBlur=e=>{e.detail.ev.relatedTarget===this.searchableSelectElement||this.blurredBecauseButtonPressed||(this.setMenuChange(!1),this.handleFocusIndicatorDisplay(),this.icBlur.emit()),this.blurredBecauseButtonPressed=!1},this.handleFormReset=()=>{this.value=this.initialValue,this.searchable&&(this.searchableSelectInputValue=this.getDefaultValue(this.value),this.hiddenInputValue=this.value)},this.ariaActiveDescendant=void 0,this.clearButtonFocused=!1,this.debounceIcChange=void 0,this.hiddenInputValue=void 0,this.noOptions=null,this.open=!1,this.pressedCharacters="",this.searchableSelectInputValue=null,this.charactersUntilSuggestions=0,this.disabled=!1,this.disableFilter=!1,this.emptyOptionListText="No results found",this.form=void 0,this.formaction=void 0,this.formenctype=void 0,this.formmethod=void 0,this.formnovalidate=void 0,this.formtarget=void 0,this.fullWidth=!1,this.helperText="",this.hideLabel=!1,this.includeDescriptionsInSearch=!1,this.includeGroupTitlesInSearch=!1,this.label=void 0,this.loadingErrorLabel="Loading Error",this.loadingLabel="Loading...",this.name=this.inputId,this.placeholder="Select an option",this.readonly=!1,this.required=!1,this.searchable=!1,this.searchMatchPosition="anywhere",this.selectOnEnter=!1,this.showClearButton=!1,this.size="default",this.small=!1,this.timeout=void 0,this.validationStatus="",this.validationText="",this.loading=!1,this.options=[],this.filteredOptions=this.options,this.uniqueOptions=this.options,this.debounce=0,this.currDebounce=this.debounce,this.value=void 0,this.initialValue=this.value,this.inputValueToFilter=this.value,this.currValue=this.value}loadingHandler(e){e&&this.triggerLoading()}watchOptionsHandler(){var e;this.hasTimedOut?this.searchable||(this.options=this.noOptions):(this.loading=!1,clearTimeout(this.timeoutTimer),this.isExternalFiltering()?((null===(e=this.options)||void 0===e?void 0:e.length)>0?(this.setOptionsValuesFromLabels(),this.noOptions=null,this.uniqueOptions=this.deduplicateOptions(this.options),this.filteredOptions=this.uniqueOptions):(this.noOptions=[{label:this.emptyOptionListText,value:""}],this.uniqueOptions=this.noOptions,this.filteredOptions=this.noOptions),this.updateSearchableSelectResultAriaLive(),this.setDefaultValue()):(this.setOptionsValuesFromLabels(),this.uniqueOptions=this.deduplicateOptions(this.options),this.filteredOptions=this.uniqueOptions,this.initialOptionsEmpty&&(this.setDefaultValue(),this.initialOptionsEmpty=!1)))}debounceChangedHandler(e){this.updateOnChangeDebounce(e)}valueChangedHandler(){this.value!==this.currValue&&(this.currValue=this.value),this.searchable&&(this.searchableSelectInputValue=this.getLabelFromValue(this.currValue)||this.currValue)}openChangedHandler(){this.open?this.icOpen.emit():this.icClose.emit()}disconnectedCallback(){var e;(0,a.n)(this.el,this.handleFormReset),null===(e=this.hostMutationObserver)||void 0===e||e.disconnect()}componentWillLoad(){var e;this.inheritedAttributes=(0,a.x)(this.el,r),(0,a.k)(this.disabled,this.el),this.setOptionsValuesFromLabels(),(0,a.m)(this.el,this.handleFormReset),(null===(e=this.options)||void 0===e?void 0:e.length)?(this.setDefaultValue(),this.uniqueOptions=this.deduplicateOptions(this.options)):(this.initialOptionsEmpty=!0,this.noOptions=[{label:this.emptyOptionListText,value:""}],this.uniqueOptions=this.noOptions,this.filteredOptions=this.noOptions)}componentDidLoad(){(0,a.a)([{prop:this.label,propName:"label"}],"Select"),this.loading&&this.triggerLoading(),this.hiddenInputValue=this.searchable&&this.currValue,this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{attributes:!0,childList:!0})}componentDidRender(){this.nativeSelectElement&&!this.disabled&&this.setTextColor()}async setFocus(){this.nativeSelectElement?this.nativeSelectElement.focus():this.customSelectElement?this.customSelectElement.focus():this.searchableSelectElement&&this.searchableSelectElement.focus()}updateOnChangeDebounce(e){this.currDebounce!==e&&(this.currDebounce=e)}debounceAriaLiveUpdate(){clearTimeout(this.debounceAria),window.setTimeout((()=>{this.updateSearchableSelectResultAriaLive()}),800)}setDefaultValue(){!this.hasSetDefaultValue&&this.currValue&&(this.searchableSelectInputValue=this.getDefaultValue(this.currValue),this.initialValue=this.currValue,this.hasSetDefaultValue=!0)}render(){const{small:e,size:t,disabled:i,fullWidth:h,helperText:r,hideLabel:c,label:u,menuId:d,name:p,options:b,placeholder:m,readonly:v,required:g,searchable:f,showClearButton:y,validationStatus:O,validationText:w,currValue:x}=this;(0,a.p)(!0,this.el,p,this.searchable?this.hiddenInputValue:x,i);const C=`${O===n.a.Error}`,S=(0,a.s)(this.inputId,""!==r,(0,a.t)(this.validationStatus,this.disabled)).trim();let I=!!this.el.querySelector('[slot="icon"]');return I&&(i||v&&!this.value)&&(I=!1),(0,s.h)(s.H,{class:{disabled:i,searchable:f,small:e,[t]:"default"!==t,"full-width":h},onBlur:this.onBlur},(0,s.h)("ic-input-container",{readonly:v},!c&&(0,s.h)("ic-input-label",{for:this.inputId,label:u,helperText:r,required:g,disabled:i,readonly:v}),(0,s.h)("ic-input-component-container",{ref:e=>this.anchorEl=e,class:{"menu-open":this.open},small:e,size:t,fullWidth:h,disabled:i,readonly:v,validationStatus:O},I&&(0,s.h)("span",{slot:"left-icon",class:{readonly:v,"has-value":!!this.value}},(0,s.h)("slot",{name:"icon"})),v?(0,s.h)("ic-typography",null,(0,s.h)("p",null,this.getLabelFromValue(x))):(0,a.F)()?(0,s.h)("select",Object.assign({ref:e=>this.nativeSelectElement=e,disabled:i,onChange:this.handleNativeSelectChange,required:g,id:this.inputId,"aria-label":u,"aria-describedby":S,"aria-invalid":C,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.handleNativeSelectKeyDown,form:this.form},this.inheritedAttributes),(0,s.h)("option",{value:"",selected:!0,disabled:!y},m),b.map((e=>e.children?(0,s.h)("optgroup",{label:e.label},e.children.map((e=>(0,s.h)("option",{value:e.value,disabled:e.disabled,selected:e.value===x},e.label)))):(0,s.h)("option",{value:e.value,disabled:e.disabled,selected:e.value===x},e.label)))):f?(0,s.h)("div",{class:"searchable-select-container"},(0,s.h)("input",{class:"select-input",role:"combobox",autocomplete:"off","aria-label":u,"aria-describedby":S,"aria-activedescendant":this.ariaActiveDescendant,"aria-autocomplete":"list","aria-expanded":`${this.open}`,"aria-invalid":C,"aria-required":`${g}`,"aria-controls":d,ref:e=>this.searchableSelectElement=e,id:this.inputId,value:this.searchableSelectInputValue,placeholder:m,disabled:i,onInput:this.handleSearchableSelectInput,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.onFocus,onBlur:this.onBlur,form:this.form,formaction:this.formaction,formenctype:this.formenctype,formmethod:this.formmethod,formnovalidate:this.formnovalidate,formtarget:this.formtarget}),this.searchableSelectInputValue&&(y||f)&&(0,s.h)("div",{class:"clear-button-container"},(0,s.h)("ic-button",{id:"clear-button",ref:e=>this.clearButton=e,"aria-label":this.searchableSelectInputValue&&null===x?"Clear input":"Clear selection",class:"clear-button",innerHTML:o,onClick:this.handleClear,onFocus:this.handleClearButtonFocus,onBlur:this.handleClearButtonBlur,size:t,variant:"icon",appearance:this.clearButtonFocused?n.I.Light:n.I.Dark}),(0,s.h)("div",{class:"divider"})),(0,s.h)("span",{onMouseDown:this.handleExpandIconMouseDown,class:{"expand-icon":!0,"expand-icon-open":this.open,"expand-icon-filled":!(null==x||""===x)},innerHTML:l,"aria-hidden":"true"}),(0,s.h)("div",{"aria-live":"polite",role:"status",class:"searchable-select-results-status"})):(0,s.h)("div",{class:"select-container"},(0,s.h)("button",{class:"select-input",ref:e=>this.customSelectElement=e,id:this.inputId,"aria-label":`${u}, ${this.getLabelFromValue(x)||m}${g?", required":""}`,"aria-describedby":S,"aria-invalid":C,"aria-haspopup":"listbox","aria-expanded":this.open?"true":"false","aria-owns":d,"aria-controls":d,disabled:i,onBlur:this.onBlur,onFocus:this.onFocus,onClick:this.handleClick,onMouseDown:this.handleMouseDown,onKeyDown:this.handleKeyDown},(0,s.h)("ic-typography",{variant:"body",class:{"value-text":!0,placeholder:void 0===this.getLabelFromValue(x)}},this.getLabelFromValue(x)||m),(0,s.h)("div",{class:"select-input-end"},x&&y&&(0,s.h)("div",{class:"divider"}),(0,s.h)("span",{class:{"expand-icon":!0,"expand-icon-open":this.open,"expand-icon-filled":!(null==x||""===x)},innerHTML:l,"aria-hidden":"true"}))),x&&y&&(0,s.h)("ic-button",{id:"clear-button","aria-label":"Clear selection",class:"clear-button",innerHTML:o,onClick:this.handleClear,onFocus:this.handleClearButtonFocus,onBlur:this.handleClearButtonBlur,size:t,variant:"icon",appearance:this.clearButtonFocused?n.I.Light:n.I.Dark}))),!(0,a.F)()&&(0,s.h)("ic-menu",{class:{"no-results":this.loading||this.hasTimedOut||null!==this.noOptions&&this.noOptions[0]&&this.noOptions[0].label===this.emptyOptionListText},ref:e=>this.menu=e,inputEl:f?this.searchableSelectElement:this.customSelectElement,inputLabel:u,anchorEl:this.anchorEl,small:e,size:t,menuId:d,open:this.open,options:f?this.filteredOptions:this.uniqueOptions,value:x,fullWidth:h,selectOnEnter:this.selectOnEnter,onMenuStateChange:this.handleMenuChange,onMenuOptionSelect:this.handleCustomSelectChange,onMenuKeyPress:this.handleMenuKeyPress,onMenuValueChange:this.handleMenuValueChange,onUngroupedOptionsSet:this.setUngroupedOptions,onRetryButtonClicked:this.handleRetry,parentEl:this.el,onTimeoutBlur:this.onTimeoutBlur,activationType:this.searchable||this.selectOnEnter?"manual":"automatic"}),(0,a.t)(this.validationStatus,this.disabled)&&(0,s.h)("ic-input-validation",{class:{"menu-open":this.open},ariaLiveMode:"polite",status:O,message:w,for:this.inputId})))}static get delegatesFocus(){return!0}get el(){return(0,s.g)(this)}static get watchers(){return{loading:["loadingHandler"],options:["watchOptionsHandler"],debounce:["debounceChangedHandler"],value:["valueChangedHandler"],open:["openChangedHandler"]}}};c.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:relative;--ic-input-label-helpertext-padding:var(--ic-space-xxs)}:host(.full-width){width:100%}ic-input-component-container:hover{--border-color:var(--ic-action-dark-hover)}ic-input-component-container:active{--border-color:var(--ic-action-dark-active);color:var(--ic-action-dark-active)}ic-input-component-container.menu-open{--border-color:var(--ic-architectural-400);color:var(--ic-action-dark)}ic-input-validation .status-icon,ic-input-validation .statustext{visibility:visible}ic-input-validation.menu-open .status-icon,ic-input-validation.menu-open .statustext{visibility:hidden;transition:visibility 0s}ic-input-label{margin-bottom:var(--ic-space-xs) !important}select{border:0;border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);color:var(--ic-color-primary-text);line-height:1.5rem;letter-spacing:0.005rem;width:100%;height:100%;padding-left:0.375rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-repeat:no-repeat;background-position:right 0.375rem center;background-image:url("data:image/svg+xml;utf8,<svg fill=\'black\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")}select option,.select-option-selected{color:var(--ic-color-primary-text)}select:disabled{color:var(--ic-architectural-200);background-image:url("data:image/svg+xml;utf8,<svg fill=\'grey\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")}select:focus{border:0;outline:0}select:not([disabled]){cursor:pointer}.select-container{width:100%;display:flex;align-items:center;position:relative}.select-input{width:100%;height:100%;padding:0 0.375rem;display:flex;cursor:pointer;align-items:center;justify-content:space-between;background:none;border:none}.select-input:focus{outline:var(--ic-hc-focus-outline)}:host(:not(.disabled)) ic-input-component-container:hover .select-input{background-color:var(--ic-architectural-white)}.select-input[disabled]{pointer-events:none}:host(.searchable) .select-input{cursor:auto}.searchable-select-container{align-items:center;display:flex;width:100%;position:relative}.expand-icon{height:var(--ic-space-lg);padding-left:var(--ic-space-xs);color:var(--ic-action-dark)}.expand-icon>svg{display:inline-block;width:var(--ic-space-lg);height:var(--ic-space-lg)}:host(.disabled) .expand-icon,:host(.disabled) .expand-icon>svg>path{color:var(--ic-architectural-200)}:host(.searchable) .expand-icon{padding-left:var(--ic-space-xxs);height:2.25rem}:host(.searchable) .expand-icon>svg{height:2.25rem;padding:0 0.375rem}:host(.searchable:not(.disabled)) .expand-icon>svg{cursor:pointer}.expand-icon-open{color:var(--ic-action-dark)}.expand-icon-filled{color:var(--ic-action-dark)}.expand-icon-open,:host(.searchable) .expand-icon-open{transform:rotateX(180deg)}:host(.disabled) .value-text,.placeholder{color:var(--ic-color-tertiary-text)}.select-input-end{display:flex;align-items:center}.clear-button-container{display:flex;gap:var(--ic-space-xxs);padding-left:2.375rem;align-items:center}:host(.small) .clear-button-container{padding-left:1.875rem}.divider{width:var(--ic-border-width);background-color:var(--ic-architectural-400);margin:var(--ic-space-xxs) 0;border-radius:var(--ic-space-1px);height:var(--ic-space-lg)}:host(.small) .divider{height:var(--ic-space-md)}.clear-button{position:absolute;right:2.75rem;border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition)}.clear-button:focus{background-color:var(--ic-focus-blue);box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow);border-radius:0.25rem}.clear-button:focus *{fill:white}.searchable-select-results-status{border:0;clip:rect(0, 0, 0, 0, 0);height:var(--ic-space-1px);overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:var(--ic-space-1px)}::slotted([slot="icon"]){fill:var(--ic-color-tertiary-text)}.has-value ::slotted([slot="icon"]){fill:var(--ic-color-primary-text)}.readonly ::slotted([slot="icon"]){padding:0.375rem;margin-bottom:0.75rem}@media (forced-colors: active){.has-value ::slotted([slot="icon"]){fill:currentcolor}}'}}]);