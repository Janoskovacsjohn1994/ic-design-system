"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[9441],{5061:function(t,e,i){i.r(e),i.d(e,{ic_search_bar:function(){return p}});var n=i(4942),a=i(5861),s=i(5671),o=i(3144),l=i(4687),r=i.n(l),u=i(6902),h=i(9455),c=i(7570),d=0,p=function(){function t(e){var i=this;(0,s.Z)(this,t),(0,u.r)(this,e),this.icInput=(0,u.c)(this,"icInput",7),this.icInputBlur=(0,u.c)(this,"icInputBlur",7),this.icInputFocus=(0,u.c)(this,"icInputFocus",7),this.icChange=(0,u.c)(this,"icChange",7),this.icClear=(0,u.c)(this,"icClear",7),this.icSubmitSearch=(0,u.c)(this,"icSubmitSearch",7),this.icOptionSelect=(0,u.c)(this,"icOptionSelect",7),this.icMenuChange=(0,u.c)(this,"icMenuChange",7),this.icClearBlur=(0,u.c)(this,"icClearBlur",7),this.icSubmitSearchBlur=(0,u.c)(this,"icSubmitSearchBlur",7),this.icSearchBarBlur=(0,u.c)(this,"icSearchBarBlur",7),this.icSearchBarFocus=(0,u.c)(this,"icSearchBarFocus",7),this.inputId="ic-search-bar-input-".concat(d++),this.menuId="".concat(this.inputId,"-menu"),this.menuCloseFromMenuChangeEvent=!1,this.truncateValue=!1,this.assistiveHintEl=null,this.preventSubmit=!1,this.handleSubmitSearch=function(){i.icSubmitSearch.emit({value:i.value});var t=i.el.closest("FORM");i.searchSubmitButton&&t&&!i.preventSubmit&&(0,c.t)(t,i.searchSubmitButton)},this.onInput=function(t){i.value=t.target.value;var e=[{label:i.emptyOptionListText,value:""}];if(i.options.length>0){if(i.setMenuChange(!0),!1===i.disableFilter){var n=(0,c.u)(i.options,!1,i.value,"anywhere");i.filteredOptions=n.length>0?n:e}}else i.disableFilter&&(i.setMenuChange(!0),i.filteredOptions=e);i.showClearButton||i.handleShowClearButton(!0),i.debounceAriaLiveUpdate(),i.icInput.emit({value:i.value})},this.onInputBlur=function(t){var e=t.target.value,n=t.relatedTarget;i.icInputBlur.emit({value:e,relatedTarget:n})},this.onInputFocus=function(t){var e=t.target.value;i.icInputFocus.emit({value:e}),i.handleShowClearButton(!0)},this.handleClear=function(t){var e=t;"click"!==t.type&&"Enter"!==e.code&&"Space"!==e.code||(i.value="",i.inputEl.value="",i.el.setFocus(),i.icClear.emit(),t.preventDefault(),i.preventSubmit=!0)},this.handleClearBlur=function(t){var e=t.relatedTarget;i.icClearBlur.emit({relatedTarget:e}),i.clearButtonFocused=!1},this.handleSubmitSearchBlur=function(t){var e=t.relatedTarget;i.icSubmitSearchBlur.emit({relatedTarget:e}),i.searchSubmitFocused=!1},this.handleSubmitSearchFocus=function(){i.handleMenuCloseFromMenuChange(!0),i.searchSubmitFocused=!0},this.handleOptionSelect=function(t){t.detail.label!==i.emptyOptionListText?(i.value=t.detail.value,i.icOptionSelect.emit({value:i.value})):i.el.setFocus()},this.handleMenuChange=function(t){i.setMenuChange(t.detail.open)},this.setMenuChange=function(t){i.open!==t&&(i.open=t,i.icMenuChange.emit({open:t}))},this.handleHostFocus=function(){i.options&&i.value&&!i.menuCloseFromMenuChangeEvent&&i.setMenuChange(!0),i.handleTruncateValue(!1),i.icSearchBarFocus.emit()},this.handleHostBlur=function(t){var e=t.relatedTarget;i.open&&i.options&&e!==i.menu&&i.setMenuChange(!1),i.handleShowClearButton(!1),i.handleMenuCloseFromMenuChange(!1),i.handleTruncateValue(!0),i.icSearchBarBlur.emit({relatedTarget:e,value:i.value})},this.handleShowClearButton=function(t){i.showClearButton=t},this.handleFocusClearButton=function(){i.clearButtonFocused=!0},this.handleMenuCloseFromMenuChange=function(t){i.menuCloseFromMenuChangeEvent=t},this.handleTruncateValue=function(t){i.truncateValue=t},this.renderAssistiveHintEl=function(){var t,e,n=null===(e=null===(t=i.el.shadowRoot.querySelector("ic-text-field"))||void 0===t?void 0:t.shadowRoot)||void 0===e?void 0:e.querySelector("#".concat(i.inputId));n&&Object.keys(n).length>0&&i.hasOptionsOrFilterDisabled()&&(i.assistiveHintEl=document.createElement("span"),i.assistiveHintEl.innerText=i.hintText,i.assistiveHintEl.id="".concat(i.inputId,"-assistive-hint"),i.assistiveHintEl.style.display="none",void 0!==n.after&&n.after(i.assistiveHintEl))},this.updateSearchResultAriaLive=function(){var t=i.el.shadowRoot.querySelector(".search-results-status");!i.open||""===i.value||i.value.length<i.charactersUntilSuggestion?t.innerText="":i.hasOptionsOrFilterDisabled()&&i.filteredOptions.length>0&&i.open&&t&&(i.hadNoOptions()?t.innerText=i.emptyOptionListText:t.innerText="".concat(i.filteredOptions.length," result").concat(i.filteredOptions.length>1?"s":""," available"))},this.hasOptionsOrFilterDisabled=function(){return i.options.length>0||i.disableFilter},this.hadNoOptions=function(){return 1===i.filteredOptions.length&&i.filteredOptions[0].label===i.emptyOptionListText},this.isSubmitDisabled=function(){return void 0===i.value||null===i.value||""===i.value||i.disabled||i.hadNoOptions()},this.highlightFirstOptionAfterNoResults=function(){i.prevNoOption&&i.menu&&(i.menu.handleSetFirstOption(),i.prevNoOption=!1),i.filteredOptions.find((function(t){return t.label===i.emptyOptionListText}))&&(i.prevNoOption=!0)},this.label=void 0,this.required=!1,this.disabled=!1,this.readonly=!1,this.placeholder="Search",this.fullWidth=!1,this.disableFilter=!1,this.hideLabel=!1,this.helperText="",this.small=!1,this.value="",this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.debounce=0,this.name=this.inputId,this.spellcheck=!1,this.options=[],this.focusOnLoad=!1,this.hintText="When autocomplete results are available use the up and down arrows to choose and press enter to select",this.emptyOptionListText="No results found",this.charactersUntilSuggestion=2,this.open=!1,this.filteredOptions=[],this.ariaActiveDescendant=void 0,this.showClearButton=!1,this.clearButtonFocused=!1,this.searchSubmitFocused=!1,this.prevNoOption=!1}var e;return(0,o.Z)(t,[{key:"debounceChanged",value:function(){this.icChange=(0,c.v)(this.icChange,this.debounce)}},{key:"watchOptionsHandler",value:function(t){this.disableFilter&&(this.filteredOptions=t)}},{key:"watchValueHandler",value:function(t){this.inputEl&&this.options&&(0,c.w)(t,this.options)?this.inputEl.value=(0,c.w)(t,this.options):this.inputEl&&this.inputEl.value!==t&&(this.inputEl.value=t),this.icChange.emit({value:t})}},{key:"setFocus",value:(e=(0,a.Z)(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.inputEl&&this.inputEl.setFocus();case 1:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"handleKeyDown",value:function(t){var e=t.detail.event;this.menu&&this.open&&this.menu.handleKeyboardOpen(e)}},{key:"handleKeyUp",value:function(t){if("Enter"===t.key){if(this.preventSubmit||this.isSubmitDisabled())return;this.handleSubmitSearch(),this.setMenuChange(!1)}"Escape"===t.key&&this.setMenuChange(!1),this.preventSubmit&&(this.preventSubmit=!1)}},{key:"debounceAriaLiveUpdate",value:function(){var t=this;clearTimeout(this.debounce),this.debounce=window.setTimeout((function(){t.updateSearchResultAriaLive()}),500)}},{key:"onMenuClose",value:function(t){t.detail.open||(this.handleMenuCloseFromMenuChange(!0),(void 0===t.detail.focusInput||t.detail.focusInput)&&this.el.setFocus())}},{key:"onMenuOptionHighlighted",value:function(t){t.detail.optionId?this.ariaActiveDescendant=t.detail.optionId:this.ariaActiveDescendant=void 0}},{key:"connectedCallback",value:function(){this.debounceChanged()}},{key:"componentWillRender",value:function(){this.highlightFirstOptionAfterNoResults()}},{key:"componentWillLoad",value:function(){this.watchValueHandler(this.value)}},{key:"componentDidLoad",value:function(){this.focusOnLoad&&this.el.setFocus(),this.hasOptionsOrFilterDisabled()&&(this.renderAssistiveHintEl(),this.disableFilter&&(this.filteredOptions=this.options)),(0,c.a)([{prop:this.label,propName:"label"}],"Search Bar"),this.anchorEl=this.inputEl.shadowRoot.querySelector("ic-input-component-container")}},{key:"disconnectedCallback",value:function(){this.assistiveHintEl&&this.assistiveHintEl.remove()}},{key:"render",value:function(){var t,e,i,a=this,s=this.inputId,o=this.name,l=this.label,r=this.required,d=this.small,p=this.placeholder,b=this.helperText,m=this.disabled,v=this.value,f=this.readonly,g=this.spellcheck,y=this.fullWidth,w=this.options,C=this.open,S=this.hideLabel,x=this.menuId,k=this.ariaActiveDescendant,F=this.truncateValue,O=this.autofocus,B=this.autocapitalize,L=this.autocomplete,I=this.filteredOptions,E=!(!f&&!m),M=(0,c.f)(s,""!==b,!1).trim();i=""!==M&&this.hasOptionsOrFilterDisabled()?"".concat(M," ").concat(this.inputId,"-assistive-hint"):this.hasOptionsOrFilterDisabled()?"".concat(this.inputId,"-assistive-hint"):""!==M?M:void 0;var T,z=E&&!f,H=v&&this.hasOptionsOrFilterDisabled(),D=H&&C&&I.length>0;return T=w.length>0?D?"true":"false":void 0,(0,c.d)(!0,this.el,o,v,E),(0,u.h)(u.H,{class:(t={},(0,n.Z)(t,"search",!0),(0,n.Z)(t,"fullwidth",y),(0,n.Z)(t,"disabled",m),(0,n.Z)(t,"small",d),t),onFocus:this.handleHostFocus,onBlur:this.handleHostBlur},(0,u.h)("ic-text-field",{ref:function(t){return a.inputEl=t},inputId:s,label:l,helperText:b,required:r,disabled:z,readonly:f,small:d,hideLabel:S,fullWidth:y,name:o,truncateValue:F,value:w&&(0,c.w)(v,w)?(0,c.w)(v,w):v,placeholder:p,onInput:this.onInput,onBlur:this.onInputBlur,onFocus:this.onInputFocus,"aria-label":S?l:"","aria-describedby":i,"aria-owns":H?x:void 0,"aria-haspopup":w.length>0?"listbox":void 0,ariaExpanded:T,ariaActiveDescendant:k,"aria-autocomplete":H?"list":void 0,role:H?"combobox":void 0,autocomplete:L,autocapitalize:B,autoFocus:O,spellcheck:g,inputmode:"search"},(0,u.h)("div",{class:{"clear-button-container":!0,"clear-button-visible":v&&!E&&this.showClearButton},slot:"clear-button"},(0,u.h)("ic-button",{id:"clear-button",class:"clear-button","aria-label":"Clear",innerHTML:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M15.8327 5.34199L14.6577 4.16699L9.99935 8.82533L5.34102 4.16699L4.16602 5.34199L8.82435 10.0003L4.16602 14.6587L5.34102 15.8337L9.99935 11.1753L14.6577 15.8337L15.8327 14.6587L11.1743 10.0003L15.8327 5.34199Z" fill="currentColor"/>\n</svg>\n',onClick:this.handleClear,size:d?"small":"default",onFocus:this.handleFocusClearButton,onBlur:this.handleClearBlur,onKeyDown:this.handleClear,type:"submit",variant:"icon",appearance:this.clearButtonFocused?h.I.Light:h.I.Dark}),(0,u.h)("div",{class:"divider"})),(0,u.h)("div",{class:{"search-submit-button-container":!0,"search-submit-button-disabled":this.isSubmitDisabled()},slot:"search-submit-button"},(0,u.h)("ic-button",{id:"search-submit-button","aria-label":"Search",ref:function(t){return a.searchSubmitButton=t},class:(e={},(0,n.Z)(e,"search-submit-button",!0),(0,n.Z)(e,"search-submit-button-small",!!d),e),disabled:this.isSubmitDisabled(),innerHTML:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n    <path d="M13.1292 11.8792H12.4708L12.2375 11.6542C13.0542 10.7042 13.5458 9.47083 13.5458 8.12916C13.5458 5.13749 11.1208 2.71249 8.12916 2.71249C5.13749 2.71249 2.71249 5.13749 2.71249 8.12916C2.71249 11.1208 5.13749 13.5458 8.12916 13.5458C9.47083 13.5458 10.7042 13.0542 11.6542 12.2375L11.8792 12.4708V13.1292L16.0458 17.2875L17.2875 16.0458L13.1292 11.8792ZM8.12916 11.8792C6.05416 11.8792 4.37916 10.2042 4.37916 8.12916C4.37916 6.05416 6.05416 4.37916 8.12916 4.37916C10.2042 4.37916 11.8792 6.05416 11.8792 8.12916C11.8792 10.2042 10.2042 11.8792 8.12916 11.8792Z" fill="currentColor"/>\n</svg>',size:d?"small":"default",onClick:this.handleSubmitSearch,onBlur:this.handleSubmitSearchBlur,onFocus:this.handleSubmitSearchFocus,type:"submit",variant:"icon",appearance:this.searchSubmitFocused?h.I.Light:h.I.Default})),(0,u.h)("div",{class:{"menu-container":!0,fullwidth:y},slot:"menu"},D&&v.length>=this.charactersUntilSuggestion&&(0,u.h)("ic-menu",{class:{"no-results":this.hadNoOptions()},activationType:"manual",anchorEl:this.anchorEl,autoFocusOnSelected:!1,inputEl:this.inputEl,inputLabel:l,ref:function(t){return a.menu=t},small:d,fullWidth:y,menuId:x,open:!0,options:I,onOptionSelect:this.handleOptionSelect,onMenuChange:this.handleMenuChange,parentEl:this.el,value:v}))),(0,u.h)("div",{"aria-live":"polite",role:"status",class:"search-results-status"}))}},{key:"el",get:function(){return(0,u.g)(this)}}],[{key:"watchers",get:function(){return{debounce:["debounceChanged"],options:["watchOptionsHandler"],value:["watchValueHandler"]}}}]),t}();p.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.search){--divider-height:24px}:host(.search.small){--divider-height:16px}:host(.fullwidth){width:100%}:host(.search) .disabled:hover{border-color:var(--ic-architectural-200)}:host(.search.disabled) .disabled svg{color:var(--ic-architectural-200)}:host(.search) .disabled svg{color:var(--ic-architectural-400)}.clear-button-container{align-items:center;margin-right:1px;display:none;visibility:hidden}.clear-button{border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition)}.clear-button:focus{background-color:var(--ic-focus-blue);box-shadow:inset 0 0 0 2px var(--ic-focus-glow);border-radius:4px}.clear-button:focus *{fill:white}.clear-button-visible{visibility:visible;display:flex}.search-submit-button-container{display:flex;align-items:center}.search-submit-button-disabled .ic-tooltip-container{display:none !important}.search-submit-button:focus{background-color:var(--ic-focus-blue) !important;box-shadow:inset 0 0 0 2px var(--ic-focus-glow) !important;border-radius:var(--ic-space-xxs);height:var(--ic-space-xl);margin-top:var(--ic-space-xxxs)}.search-submit-button:focus *{fill:white}.divider{width:1px;background-color:var(--ic-action-dark-active);height:var(--divider-height)}:host(.dark) .divider{background-color:var(--ic-architectural-200)}.menu-container{width:var(--input-width, 320px);position:relative;top:var(--ic-space-xxxs)}.menu-container.fullwidth{width:100%}ic-menu{transition:var(--ic-easing-transition-slow)}.no-results{cursor:not-allowed}.search-results-status{border:0;clip:rect(0, 0, 0, 0, 0);height:1px;margin-bottom:-1px;margin-right:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}'}}]);
//# sourceMappingURL=9441-aa3439b1c359375319bd.js.map