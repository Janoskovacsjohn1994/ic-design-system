"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[7670],{7670:function(t,e,i){i.r(e),i.d(e,{ic_typography:function(){return n}});var o=i(3660),r=i(6003);i(3077);const n=class{constructor(t){(0,o.r)(this,t),this.focusBtnFromKeyboard=!0,this.lastMarkerTop=0,this.lastWidth=0,this.resizeObserver=null,this.truncatedHeight=0,this.toggleExpanded=()=>{this.expanded=!this.expanded},this.checkMaxLines=t=>{Math.floor(t/24)>this.maxLines&&(this.el.setAttribute("style","--truncation-max-lines: ".concat(this.maxLines)),this.truncatedHeight=this.el.clientHeight,this.truncated=!0)},this.checkMarkerPosition=(t,e)=>{e-t<this.truncatedHeight?(this.truncated=!1,this.expanded=!1):this.truncated=!0},this.getElementTop=t=>t.getClientRects?t.getClientRects()[0].top:0,this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{clearTimeout(this.resizeInterval),this.resizeInterval=window.setTimeout(this.resizeObserverCallback,50)})),this.resizeObserver.observe(this.truncWrapperEl)},this.resizeObserverCallback=()=>{if(this.lastWidth===this.el.clientWidth)return;if(0===this.truncatedHeight)return void this.checkMaxLines(this.el.clientHeight);const t=this.getElementTop(this.marker);t!==this.lastMarkerTop&&(this.checkMarkerPosition(this.getElementTop(this.el),t),this.lastMarkerTop=t,this.lastWidth=this.el.clientWidth)},this.truncButtonFocus=()=>{this.focusBtnFromKeyboard&&(this.truncButtonFocussed=!0)},this.truncButtonBlur=()=>{this.focusBtnFromKeyboard=!0,this.truncButtonFocussed=!1},this.truncButtonFocusFromMouse=()=>{this.focusBtnFromKeyboard=!1},this.truncated=!1,this.truncButtonFocussed=!1,this.applyVerticalMargins=!1,this.bold=!1,this.italic=!1,this.maxLines=void 0,this.strikethrough=!1,this.underline=!1,this.variant="body",this.expanded=!1}watchExpandedHandler(){this.el.setAttribute("style","--truncation-max-lines: ".concat(this.expanded?"initial":this.maxLines))}disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}componentDidLoad(){if("body"===this.variant&&this.maxLines>0){const t=document.createElement("span");t.style.visibility="hidden",this.el.appendChild(t),this.marker=t,this.lastWidth=this.el.clientWidth,this.checkMaxLines(this.el.clientHeight),(0,r.c)(this.runResizeObserver)}}render(){const{variant:t,applyVerticalMargins:e,maxLines:i,truncated:r,expanded:n,strikethrough:s,underline:a,italic:c,bold:l}=this;return(0,o.h)(o.H,{class:{["ic-typography-".concat(t)]:!0,["ic-typography-vertical-margins-".concat(t)]:e,bold:l,italic:c,strikethrough:s,underline:a}},"body"===t&&i>0?(0,o.h)("div",{class:"trunc-wrapper",ref:t=>this.truncWrapperEl=t},(0,o.h)("slot",null)):(0,o.h)("slot",null),"body"===t&&i>0&&r&&(0,o.h)("button",{class:{"trunc-btn":!0,focus:this.truncButtonFocussed},onFocus:this.truncButtonFocus,onBlur:this.truncButtonBlur,onMouseDown:this.truncButtonFocusFromMouse,onClick:this.toggleExpanded,"aria-hidden":"true"},n?"See less":"See more"))}get el(){return(0,o.g)(this)}static get watchers(){return{expanded:["watchExpandedHandler"]}}};n.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:relative}:host(.ic-typography-vertical-margins-h1){margin:0 0 var(--ic-space-xl)}:host(.ic-typography-vertical-margins-h2){margin:var(--ic-space-xxl) 0 var(--ic-space-lg)}:host(.ic-typography-vertical-margins-h3){margin:var(--ic-space-xl) 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-h4){margin:var(--ic-space-lg) 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-subtitle-large),:host(.ic-typography-vertical-margins-subtitle-small),:host(.ic-typography-vertical-margins-body),:host(.ic-typography-vertical-margins-code-large),:host(.ic-typography-vertical-margins-code-small),:host(.ic-typography-vertical-margins-code-extra-small){margin:0 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-caption),:host(.ic-typography-vertical-margins-caption-uppercase){margin:0 0 var(--ic-space-xs)}:host(.ic-typography-vertical-margins-h2:first-child),:host(.ic-typography-vertical-margins-h3:first-child),:host(.ic-typography-vertical-margins-h4:first-child){margin-top:0}:host(.ic-typography-h1){font:var(--ic-font-h1) !important}:host(.ic-typography-h2){font:var(--ic-font-h2);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-h3){font:var(--ic-font-h3)}:host(.ic-typography-h4){font:var(--ic-font-h4);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-subtitle-large){font:var(--ic-font-subtitle-large);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-subtitle-small){font:var(--ic-font-subtitle-small);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-body){font:var(--ic-font-body);letter-spacing:var(--ic-font-letter-spacing-0pt005)}:host(.ic-typography-caption){font:var(--ic-font-caption);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-caption-uppercase){font:var(--ic-font-caption);letter-spacing:var(--ic-font-letter-spacing-0pt0025);text-transform:uppercase}:host(.ic-typography-label){font:var(--ic-font-label);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-label-uppercase){font:var(--ic-font-label);letter-spacing:var(--ic-font-letter-spacing-0pt025);text-transform:uppercase}:host(.ic-typography-code-large){font:var(--ic-font-code-large);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-code-small){font:var(--ic-font-code-small);letter-spacing:var(--ic-font-letter-spacing-0pt005)}:host(.ic-typography-code-extra-small){font:var(--ic-font-code-extra-small);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-no-wrap){white-space:nowrap}:host ::slotted(h1),:host ::slotted(h2),:host ::slotted(h3),:host ::slotted(h4),:host ::slotted(h5),:host ::slotted(h6),:host ::slotted(p),:host ::slotted(label){font:inherit;letter-spacing:inherit}.trunc-wrapper{display:-webkit-box;-webkit-box-orient:vertical;line-clamp:var(--truncation-max-lines, initial);-webkit-line-clamp:var(--truncation-max-lines, initial);overflow:hidden}.trunc-btn{border:none;background:none;padding:0;color:var(--ic-color-primary-text);text-decoration:underline;font-weight:var(--ic-font-weight-bold);transition:var(--ic-easing-transition-fast)}.trunc-btn:hover,.trunc-btn.focus{outline:none;border-bottom:var(--ic-space-xxs) solid !important;margin-bottom:calc(-1 * var(--ic-space-xxs)) !important;text-decoration:none;cursor:pointer}:host(.strikethrough){text-decoration:line-through}:host(.underline){text-decoration:underline}:host(.underline.strikethrough){text-decoration:line-through underline}:host(.italic){font-style:italic !important}:host(.bold){font-weight:var(--ic-font-weight-bold)}@supports (text-decoration-thickness: 25%){.trunc-btn:hover,.trunc-btn.focus{text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}'}}]);