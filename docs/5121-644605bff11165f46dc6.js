"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[5121],{5121:function(t,e,n){n.r(e),n.d(e,{ic_hero:function(){return h}});var i=n(4942),o=n(5671),a=n(3144),r=n(6902),s=n(9455),c=n(7570),h=function(){function t(e){(0,o.Z)(this,t),(0,r.r)(this,e),this.heading=void 0,this.subheading=void 0,this.secondaryHeading=void 0,this.secondarySubheading=void 0,this.backgroundImage=void 0,this.disableBackgroundParallax=!1,this.aligned="left",this.contentAligned="left",this.small=!1,this.rightContent=!1,this.scrollFactor="right -100px",this.leftContentFullWidth=!this.rightContent&&void 0===this.secondaryHeading,this.foregroundColor=(0,c.j)()}return(0,a.Z)(t,[{key:"themeChangeHandler",value:function(t){var e=t.detail;this.foregroundColor=e.mode}},{key:"doScroll",value:function(){if(!this.disableBackgroundParallax){var t=.4*document.scrollingElement.scrollTop-100;this.scrollFactor="right "+t+"px"}}},{key:"componentWillLoad",value:function(){this.rightContent=(0,c.s)(this.el,"secondary")}},{key:"componentDidLoad",value:function(){(0,c.a)([{prop:this.heading,propName:"heading"}],"Hero")}},{key:"componentWillRender",value:function(){this.rightContent=(0,c.s)(this.el,"secondary")}},{key:"render",value:function(){var t,e,n=this.aligned,o=this.small,a=this.heading,c=this.subheading,h=this.secondaryHeading,d=this.secondarySubheading,l=this.foregroundColor,g=this.backgroundImage,m=this.scrollFactor,p={};return void 0!==g&&(p={"background-image":"url("+g+")","background-position":m}),(0,r.h)(r.H,{class:(t={},(0,i.Z)(t,s.I.Dark,l===s.I.Dark),(0,i.Z)(t,"has-background-image",void 0!==g),t),style:p},(0,r.h)("ic-section-container",{aligned:n,fullHeight:!0,class:"section-container"},(0,r.h)("div",{class:(e={},(0,i.Z)(e,"left-container",!0),(0,i.Z)(e,"left-container-full-width",this.leftContentFullWidth),e)},(0,r.h)("div",{class:"heading"},(0,r.h)("slot",{name:"heading"},(0,r.h)("ic-typography",{variant:o?"h2":"h1",class:(0,i.Z)({},"heading-bottom-spacing",!o)},a))),(0,r.h)("div",{class:"subheading"},(0,r.h)("slot",{name:"subheading"},(0,r.h)("ic-typography",{variant:"body"},c))),(0,r.h)("div",{class:"interaction-container"},(0,r.h)("slot",{name:"interaction"}))),(void 0!==h||this.rightContent)&&(0,r.h)("div",{class:"right-container"},(0,r.h)("slot",{name:"secondary"},h&&(0,r.h)("div",{class:"secondary-container"},(0,r.h)("div",{class:"secondary-heading"},(0,r.h)("ic-typography",{variant:"h4"},h)),(0,r.h)("div",{class:"secondary-subheading"},(0,r.h)("ic-typography",{variant:"subtitle-small"},d)))))))}},{key:"el",get:function(){return(0,r.g)(this)}}]),t}();h.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;background-color:var(--ic-theme-tertiary);color:var(--ic-theme-text);--hero-heading-bottom-margin:var(--ic-space-md)}:host(.dark){background-color:var(--ic-theme-secondary)}:host(.has-background-image){background-repeat:no-repeat;background-position:right -100px;background-size:auto calc(100% + 100px);box-shadow:var(--ic-elevation-inset)}@media (prefers-reduced-motion){:host(.has-background-image){background-position:right -100px !important}}ic-typography.heading-bottom-spacing{margin-bottom:var(--hero-heading-bottom-margin)}.section-container{display:flex;align-items:center;height:100%}.left-container{padding:var(--ic-space-xl) 0}.left-container:not(.left-container-full-width){flex-basis:50%}.left-container-full-width{width:100%}.right-container{flex-basis:50%}.interaction-container{display:flex;gap:var(--ic-space-md);margin-top:var(--ic-space-lg)}.secondary-container{display:flex;flex-direction:column;justify-content:center;border-left:var(--ic-space-xxxs) solid var(--ic-theme-text)}.secondary-subheading{margin-top:var(--ic-space-xxs)}:host([content-aligned="left"]) .left-container,:host([content-aligned="left"]) .interaction-container{justify-content:flex-start;text-align:left}:host([content-aligned="center"]) .left-container,:host([content-aligned="center"]) .interaction-container{justify-content:center;text-align:center}@media (min-width: 992px){.left-container-full-width{width:66.6%}}@media (min-width: 1044px){:host,.section-container{min-height:208px}:host([small]),:host([small]) .section-container{min-height:173px}.left-container:not(.left-container-full-width){flex-basis:66.6%}.left-container{min-height:144px}.right-container{flex-basis:33.3%;margin-left:50px}.secondary-container{min-height:144px}.secondary-heading,.secondary-subheading{margin-left:63px}}@media (min-width: 801px) and (max-width: 1043px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:256px}:host([small]),:host([small]) .section-container{min-height:240px}:host([secondary-heading]),:host([secondary-heading]) .section-container{min-height:224px}.left-container{min-height:160px}.secondary-container{min-height:160px}.secondary-heading,.secondary-subheading{margin-left:94.75px}.right-container{margin-left:50px}}@media (min-width: 641px) and (max-width: 800px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:256px}:host([small]),:host([small]) .section-container{min-height:240px}:host([secondary-heading]),:host([secondary-heading]) .section-container{min-height:224px}.left-container{min-height:160px}.secondary-container{min-height:160px}.secondary-heading,.secondary-subheading{margin-left:34px}.right-container{margin-left:50px}}@media (min-width: 481px) and (max-width: 640px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:208px}:host([small]),:host([small]) .section-container{min-height:173px}:host([secondary-heading]),:host([secondary-heading]) .section-container{min-height:280px}:host([secondary-heading]) .section-container,:host([small]) .section-container,.section-container{flex-direction:column;align-items:flex-start}.left-container{height:-moz-fit-content;height:fit-content}.secondary-container{height:-moz-fit-content;height:fit-content;border:none}.right-container{margin-bottom:40px}}@media (max-width: 480px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:192px}:host([small]),:host([small]) .section-container{min-height:173px}:host([secondary-heading]),:host([secondary-heading]) .section-container{min-height:264px}:host([secondary-heading]) .section-container,:host([small]) .section-container,.section-container{flex-direction:column;align-items:flex-start}.left-container{height:-moz-fit-content;height:fit-content}.secondary-container{height:-moz-fit-content;height:fit-content;border:none}}'}}]);
//# sourceMappingURL=5121-644605bff11165f46dc6.js.map