"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[1437],{1437:function(i,t,a){a.r(t),a.d(t,{ic_input_label:function(){return h},ic_input_validation:function(){return p}});var e,r=a(4942),s=a(5671),l=a(3144),n=a(9065),o=a(8365),c=a(9455),h=function(){function i(t){(0,s.Z)(this,i),(0,n.r)(this,t),this.dark=!1,this.disabled=!1,this.error=!1,this.for=void 0,this.helperText="",this.label=void 0,this.readonly=!1,this.required=!1}return(0,l.Z)(i,[{key:"componentDidLoad",value:function(){(0,o.a)([{prop:this.label,propName:"label"}],"Input Label")}},{key:"render",value:function(){var i,t,a,e=this.disabled,s=this.readonly,l=this.label,c=this.required,h=this.helperText,u=this.error,p=this.dark,d=c?l+" *":l,v=s?"".concat(d):(0,n.h)("label",{htmlFor:this.for},d),b=(0,o.O)(this.for);return(0,n.h)(n.H,{class:(i={},(0,r.Z)(i,"disabled",e),(0,r.Z)(i,"readonly",s),(0,r.Z)(i,"with-helper",""!==h),i)},(0,n.h)("ic-typography",{variant:"label",class:(t={},(0,r.Z)(t,"readonly-label",s),(0,r.Z)(t,"error-label",u&&!(s||e)),(0,r.Z)(t,"dark",p),t)},v),""!==h&&(0,n.h)("ic-typography",{variant:"caption",class:(a={},(0,r.Z)(a,"helpertext",!0),(0,r.Z)(a,"helpertext-normal",!e&&!s),(0,r.Z)(a,"helpertext-readonly",s),a)},(0,n.h)("span",{id:b},h)))}}]),i}();h.style="ic-input-label{margin-bottom:var(--ic-space-xs)}ic-input-label.with-helper{margin-bottom:var(--ic-space-xxxs)}ic-input-label.disabled{color:var(--ic-color-tertiary-text)}ic-input-label.readonly{color:var(--ic-color-tertiary-text)}ic-input-label .helpertext{margin-top:var(--ic-space-xxxs)}ic-input-label .helpertext-normal{color:var(--ic-color-secondary-text)}ic-input-label .helpertext-readonly{color:var(--ic-color-tertiary-text)}ic-input-label .readonly-label{color:var(--ic-color-secondary-text)}ic-input-label .error-label{color:var(--ic-status-error)}ic-input-label .dark{color:var(--ic-architectural-white)}";var u=(e={},(0,r.Z)(e,c.a.Warning,o.Q),(0,r.Z)(e,c.a.Error,o.R),(0,r.Z)(e,c.a.Success,o.M),e),p=function(){function i(t){(0,s.Z)(this,i),(0,n.r)(this,t),this.ariaLiveMode="polite",this.for=void 0,this.fullWidth=!1,this.message=void 0,this.status=""}return(0,l.Z)(i,[{key:"componentDidLoad",value:function(){(0,o.a)([{prop:this.message,propName:"message"}],"Input Validation")}},{key:"render",value:function(){var i,t,a=""!==this.status?u[this.status]:"",e=(0,o.P)(this.for);return(0,n.h)(n.H,{class:(i={},(0,r.Z)(i,this.status,""!==this.status),(0,r.Z)(i,"fullwidth",this.fullWidth),i)},""!==a&&(0,n.h)("span",{class:(t={},(0,r.Z)(t,"status-icon",!0),(0,r.Z)(t,"icon-".concat(this.status),!0),t),innerHTML:a}),(0,n.h)("ic-typography",{variant:"caption",class:"statustext"},(0,n.h)("span",{"aria-live":this.ariaLiveMode,id:e},this.message)),(0,n.h)("slot",{name:"validation-message-adornment"}))}},{key:"el",get:function(){return(0,n.g)(this)}}]),i}();p.style="ic-input-validation{width:var(--input-width, 20rem);margin-top:var(--ic-space-xs);display:flex}ic-input-validation.fullwidth{width:100%}ic-input-validation span.status-icon{padding-right:var(--ic-space-xxs)}ic-input-validation span.status-icon>svg{height:1.25rem;width:1.25rem}ic-input-validation span.icon-success>svg{fill:var(--ic-status-success)}ic-input-validation span.icon-error>svg{fill:var(--ic-status-error)}ic-input-validation span.icon-warning>svg{fill:var(--ic-status-warning-mid)}ic-input-validation .statustext{flex-grow:1}"}}]);
//# sourceMappingURL=1437-7e4a9b0857b6405e53a7.js.map