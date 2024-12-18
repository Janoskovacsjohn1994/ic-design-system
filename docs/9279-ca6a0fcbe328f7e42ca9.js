"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[9279],{69279:function(e,t,i){i.r(t),i.d(t,{ic_data_row:function(){return a}});var o=i(19067),n=i(83689);i(73817);const a=class{constructor(e){(0,o.r)(this,e),this.hasEndComponent=!1,this.resizeObserver=null,this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{this.checkLabelAbove()})),this.resizeObserver.observe(this.el)},this.renderCellContent=e=>{const t="value"===e;return(0,o.h)("div",{class:e},(0,n.i)(this.el,e)?(0,o.h)("slot",{name:e}):(0,o.h)("ic-typography",{variant:t?"body":"xs"===this.entitySize?"label":"subtitle-large"},t?this.value:this.label))},this.deviceSize=n.D.XL,this.entitySize=void 0,this.label=void 0,this.size="default",this.small=!1,this.value=void 0}disconnectedCallback(){var e;null===(e=this.resizeObserver)||void 0===e||e.disconnect()}componentWillLoad(){this.deviceSize=(0,n.e)(),this.hasEndComponent=(0,n.v)(this.el,"end-component"),this.checkLabelAbove()}componentDidLoad(){(0,n.f)(this.runResizeObserver),this.hasEndComponent&&this.labelEndComponent()}checkLabelAbove(){var e;const t=(null===(e=this.el.shadowRoot.querySelector(".data"))||void 0===e?void 0:e.clientWidth)+46;t&&(this.entitySize=t<n.D.S?"xs":t<n.D.M?"m":"xl")}labelEndComponent(){this.el.shadowRoot.querySelectorAll("slot[name=end-component]").forEach((e=>e.setAttribute("aria-label",`for ${this.label} row`)))}render(){const{el:e,entitySize:t,hasEndComponent:i,label:a,renderCellContent:s,size:l,small:r,value:d}=this;return(0,o.h)(o.H,{class:{small:r||"small"===l,"breakpoint-medium":"m"===t,"breakpoint-xs":"xs"===t},role:"listitem"},(0,o.h)("div",{class:"data"},(0,o.h)("div",{class:"text-cells"},((0,n.i)(e,"label")||a)&&s("label"),((0,n.i)(e,"value")||d)&&s("value")),i&&(0,o.h)("div",{class:"end-component"},(0,o.h)("slot",{name:"end-component"}))),(0,o.h)("div",{class:"divider"}))}get el(){return(0,o.g)(this)}};a.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:relative;display:block}.data{display:flex;align-items:center}.text-cells{display:flex;flex-grow:1;min-width:0}.label{width:12.5rem;min-width:12.5rem;margin-right:var(--ic-space-md);color:var(--ic-color-tertiary-text)}.value{flex-grow:1}slot[name="value"]::slotted(ic-text-field[readonly][hide-label]){margin-top:calc(var(--ic-space-xs) * -1)}slot[name="value"]::slotted(ic-text-field[small][readonly][hide-label]){margin-top:calc(var(--ic-space-xxs) * -1)}slot[name="value"]::slotted(ic-text-field[readonly][hide-label][rows]){margin-top:calc(var(--ic-space-xxs) * -1 - var(--ic-space-xxxs))}.end-component{width:-moz-fit-content;width:fit-content;margin-left:3.5rem}.divider{margin-top:var(--ic-space-md);height:var(--ic-border-width);background-color:var(--ic-architectural-300)}:host(.small) .divider{margin-top:var(--ic-space-xs)}:host(.breakpoint-medium) .label{width:10rem;min-width:10rem}:host(.breakpoint-xs) .text-cells{flex-direction:column}:host(.breakpoint-xs) .label{width:8rem;margin-bottom:var(--ic-space-xs)}:host(.breakpoint-xs) .value{max-width:95%}:host(.breakpoint-xs) .end-component{margin-left:0}@media (forced-colors: active){.divider{background-color:canvastext}}'}}]);