"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[9685],{9685:function(t,e,i){i.r(e),i.d(e,{ic_typography:function(){return r}});var o=i(9917),n=i(7261);i(6040);const r=class{constructor(t){(0,o.r)(this,t),this.typographyTruncationExpandToggle=(0,o.c)(this,"typographyTruncationExpandToggle",7),this.focusBtnFromKeyboard=!0,this.inAGGrid=!1,this.lastMarkerTop=0,this.lastWidth=0,this.resizeObserver=null,this.truncatedHeight=0,this.toggleExpanded=t=>{t.stopPropagation(),this.expanded=!this.expanded,this.typographyTruncationExpandToggle.emit({expanded:this.expanded,typographyEl:this.el})},this.checkMarkerPosition=(t,e)=>{e-t<this.truncatedHeight?(this.truncated=!1,this.expanded=!1):this.truncated=!0},this.getElementTop=t=>t.getClientRects&&t.getClientRects()[0]?t.getClientRects()[0].top:0,this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{clearTimeout(this.resizeInterval),this.resizeInterval=window.setTimeout(this.resizeObserverCallback,50)})),this.resizeObserver.observe(this.truncWrapperEl)},this.resizeObserverCallback=()=>{if(this.lastWidth===this.el.clientWidth)return;if(0===this.truncatedHeight)return void this.checkMaxLines(this.el.clientHeight);const t=this.getElementTop(this.marker);t!==this.lastMarkerTop&&(this.checkMarkerPosition(this.getElementTop(this.el),t),this.lastMarkerTop=t,this.lastWidth=this.el.clientWidth)},this.truncButtonFocus=()=>{this.focusBtnFromKeyboard&&(this.truncButtonFocussed=!0)},this.truncButtonBlur=()=>{this.focusBtnFromKeyboard=!0,this.truncButtonFocussed=!1},this.truncButtonFocusFromMouse=()=>{this.focusBtnFromKeyboard=!1},this.truncated=!1,this.truncButtonFocussed=!1,this.applyVerticalMargins=!1,this.bold=!1,this.italic=!1,this.maxLines=void 0,this.strikethrough=!1,this.underline=!1,this.variant="body",this.expanded=!1}watchExpandedHandler(){this.el.setAttribute("style",`--truncation-max-lines: ${this.expanded?"initial":this.maxLines}`)}disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}async resetTruncation(){this.truncated&&(this.truncated=!1,this.maxLines=0,this.el.removeAttribute("max-lines"),this.expanded=!1,this.el.removeAttribute("style"))}componentDidLoad(){var t,e;if(("body"===this.variant||"IC-TOOLTIP"===(null===(e=null===(t=this.el.getRootNode())||void 0===t?void 0:t.host)||void 0===e?void 0:e.tagName))&&this.maxLines>0){const t=document.createElement("span");t.style.visibility="hidden",this.el.appendChild(t),this.marker=t,this.lastWidth=this.el.clientWidth,this.checkMaxLines(this.el.clientHeight),(0,n.f)(this.runResizeObserver)}}componentWillRender(){(0,n.u)(this.el)&&(this.inAGGrid=!0)}async checkMaxLines(t){Math.floor(t/24)>this.maxLines&&(this.el.setAttribute("style",`--truncation-max-lines: ${this.maxLines}`),this.truncatedHeight=this.el.clientHeight,this.truncated=!0)}async setShowHideExpanded(t){this.expanded=t}render(){var t,e;const{variant:i,applyVerticalMargins:n,maxLines:r,truncated:s,expanded:a,strikethrough:c,underline:l,italic:h,bold:p}=this;return(0,o.h)(o.H,{class:{[`ic-typography-${i}`]:!0,[`ic-typography-vertical-margins-${i}`]:n,bold:p,italic:h,strikethrough:c,underline:l,"in-ag-grid":this.inAGGrid}},("body"===i||"IC-TOOLTIP"===(null===(e=null===(t=this.el.getRootNode())||void 0===t?void 0:t.host)||void 0===e?void 0:e.tagName))&&r>0?(0,o.h)("div",{class:"trunc-wrapper",ref:t=>this.truncWrapperEl=t},(0,o.h)("slot",null)):(0,o.h)("slot",null),"body"===i&&r>0&&s&&(0,o.h)("button",{class:{"trunc-btn":!0,focus:this.truncButtonFocussed},onFocus:this.truncButtonFocus,onBlur:this.truncButtonBlur,onMouseDown:this.truncButtonFocusFromMouse,onClick:this.toggleExpanded},a?"See less":"See more"))}get el(){return(0,o.g)(this)}static get watchers(){return{expanded:["watchExpandedHandler"]}}};r.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:relative}:host(.ic-typography-vertical-margins-h1){margin:0 0 var(--ic-space-xl)}:host(.ic-typography-vertical-margins-h2){margin:var(--ic-space-xxl) 0 var(--ic-space-lg)}:host(.ic-typography-vertical-margins-h3){margin:var(--ic-space-xl) 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-h4){margin:var(--ic-space-lg) 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-subtitle-large),:host(.ic-typography-vertical-margins-subtitle-small),:host(.ic-typography-vertical-margins-body),:host(.ic-typography-vertical-margins-code-large),:host(.ic-typography-vertical-margins-code-small),:host(.ic-typography-vertical-margins-code-extra-small){margin:0 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-caption),:host(.ic-typography-vertical-margins-caption-uppercase){margin:0 0 var(--ic-space-xs)}:host(.ic-typography-vertical-margins-h2:first-child),:host(.ic-typography-vertical-margins-h3:first-child),:host(.ic-typography-vertical-margins-h4:first-child){margin-top:0}:host(.ic-typography-h1){font:var(--ic-font-h1) !important}:host(.ic-typography-h2){font:var(--ic-font-h2);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-h3){font:var(--ic-font-h3)}:host(.ic-typography-h4){font:var(--ic-font-h4);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-subtitle-large){font:var(--ic-font-subtitle-large);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-subtitle-small){font:var(--ic-font-subtitle-small);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-body){font:var(--ic-font-body);letter-spacing:var(--ic-font-letter-spacing-0pt005)}:host(.ic-typography-caption){font:var(--ic-font-caption);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-caption-uppercase){font:var(--ic-font-caption);letter-spacing:var(--ic-font-letter-spacing-0pt0025);text-transform:uppercase}:host(.ic-typography-label){font:var(--ic-font-label);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-label-uppercase){font:var(--ic-font-label);letter-spacing:var(--ic-font-letter-spacing-0pt025);text-transform:uppercase}:host(.ic-typography-code-large){font:var(--ic-font-code-large);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-code-small){font:var(--ic-font-code-small);letter-spacing:var(--ic-font-letter-spacing-0pt005)}:host(.ic-typography-code-extra-small){font:var(--ic-font-code-extra-small);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-badge){font:var(--ic-font-badge);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-badge-small){font:var(--ic-font-badge-small);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-no-wrap){white-space:nowrap}:host ::slotted(h1),:host ::slotted(h2),:host ::slotted(h3),:host ::slotted(h4),:host ::slotted(h5),:host ::slotted(h6),:host ::slotted(p),:host ::slotted(label){font:inherit;letter-spacing:inherit}.trunc-wrapper{display:-webkit-box;-webkit-box-orient:vertical;line-clamp:var(--truncation-max-lines, initial);-webkit-line-clamp:var(--truncation-max-lines, initial);overflow:hidden;padding-right:var(--ellipsis-padding-right, 0)}.trunc-btn{border:none;background:none;padding:0;color:var(--ic-color-primary-text);text-decoration:underline;font-weight:var(--ic-font-weight-bold);transition:var(--ic-easing-transition-fast)}.trunc-btn:hover,.trunc-btn.focus{outline:none;border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none;cursor:pointer}:host(.strikethrough){text-decoration:line-through}:host(.underline){text-decoration:underline}:host(.underline.strikethrough){text-decoration:line-through underline}:host(.italic){font-style:italic !important}:host(.bold){font-weight:var(--ic-font-weight-bold)}:host(.in-ag-grid),:host(.in-ag-grid) ::slotted(*){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@supports (text-underline-offset: 25%){.trunc-btn:hover,.trunc-btn.focus{text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}'}}]);