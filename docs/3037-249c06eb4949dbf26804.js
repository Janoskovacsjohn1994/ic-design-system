"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[3037],{3037:function(t,e,i){i.r(e),i.d(e,{ic_date_input:function(){return h}});var s=i(9917),a=i(1060),n=i(2683);let l=0;const h=class{constructor(t){(0,s.r)(this,t),this.calendarButtonClicked=(0,s.c)(this,"calendarButtonClicked",7),this.icBlur=(0,s.c)(this,"icBlur",7),this.icChange=(0,s.c)(this,"icChange",7),this.icFocus=(0,s.c)(this,"icFocus",7),this.ARIA_INVALID="aria-invalid",this.ARIA_LABEL="aria-label",this.ARIA_LABELLED_BY="aria-labelledby",this.EVENT_OBJECT_STRING="[object Event]",this.FIT_TO_VALUE="fit-to-value",this.initialValue=this.value,this.INPUT_EVENT_OBJECT_STRING="[object InputEvent]",this.inputsInOrder=[],this.isAfterMax=!1,this.isBeforeMin=!1,this.isDateSetFromKeyboardEvent=!1,this.isDisabledDate=!1,this.isValidDay=!0,this.isValidMonth=!0,this.isValidDate=!0,this.isZuluTime=!1,this.KEYBOARD_EVENT_OBJECT_STRING="[object KeyboardEvent]",this.MAX_DAY=31,this.MAX_MONTH=12,this.previousEmittedDate=void 0,this.previousSelectedDate=null,this.selectedDate=null,this.setInputPasteValue=(t,e)=>{const i=t;i.value=e,i.classList.add(this.FIT_TO_VALUE)},this.checkSingleCopiedValueIsValid=(t,e)=>{let i=!1;const s=Number(e);switch(t){case this.dayInputEl:i=s>=1&&s<=this.MAX_DAY;break;case this.monthInputEl:i=s>=1&&s<=this.MAX_MONTH;break;case this.yearInputEl:i=!0;break;default:i=!1}return i},this.isKeyboardOrEvent=t=>Object.prototype.toString.call(t)===this.EVENT_OBJECT_STRING||Object.prototype.toString.call(t)===this.KEYBOARD_EVENT_OBJECT_STRING,this.setDateValidity=()=>{(0,a.a)(this.day)?this.isValidDay=!0:this.isValidDay=!(+this.day>this.MAX_DAY),(0,a.a)(this.month)?this.isValidMonth=!0:this.isValidMonth=!(+this.month>this.MAX_MONTH)},this.handleInput=t=>{const e=t,i=t.target;i!==this.yearInputEl?("deleteContentBackward"===e.inputType||this.preventAutoFormatting?this.preventAutoFormatting&&(2!==i.value.length||this.isKeyboardOrEvent(t)?this.setInputValue(i):(this.setInputValue(i),this.setPreventInput(i,!0),this.moveToNextInput(i))):(1===i.value.length&&(i===this.dayInputEl&&+i.value>=4||i===this.monthInputEl&&+i.value>=2)&&+i.value<=9&&(this.setInputValue(i),this.notifyScreenReader(i,t),this.moveToNextInput(i)),2===i.value.length?(0==+i.value&&(i.value="01"),this.setInputValue(i),this.setPreventInput(i,!0),this.notifyScreenReader(i,t),this.moveToNextInput(i)):this.setPreventInput(i,!1)),2!==i.value.length&&this.setPreventInput(i,!1)):4===i.value.length?(this.setInputValue(i),Object.prototype.toString.call(t)!==this.EVENT_OBJECT_STRING&&this.moveToNextInput(i),this.setPreventInput(i,!0)):(this.setInputValue(i,!0),this.setPreventInput(i,!1)),this.setFitToValueStyling(i),0===i.value.length&&(this.setInputValue(i,!0),this.setValidationMessage()),this.notifyScreenReader(i,t)},this.handleKeyDown=(t,e)=>{const i=t.target,s=t.key.toLowerCase();switch(/-?\d*\.?\d+(e[-+]?\d+)?|[/-]|arrowup|arrowdown|arrowleft|arrowright|shift|tab|backspace|delete/.test(s)||(t.ctrlKey||t.metaKey)&&("v"===s||"c"===s)||t.preventDefault(),s){case"/":case"-":case".":t.preventDefault(),this.setPasteInvalidText(),this.moveToNextInput(i);break;case"arrowright":case"arrowleft":t.preventDefault(),this.handleLeftRightArrowKeyPress(i,s);break;case"arrowup":case"arrowdown":this.preventAutoFormatting=!0,this.handleUpDownArrowKeyPress(i,t)}this.preventInput(t,e),this.isDateSetFromKeyboardEvent=!0},this.handleFocus=t=>{t.target.select()},this.handleBlur=t=>{const e=t.target;this.setPasteInvalidText(),this.autocompleteInput(e)},this.handleLeftRightArrowKeyPress=(t,e)=>{"arrowright"===e?this.moveToNextInput(t):this.moveToPreviousInput(t),this.setPasteInvalidText()},this.notifyScreenReaderSelectedDate=()=>{const t=(0,a.s)(a.e),e=(0,a.s)(a.f);this.selectedDateInfoEl.textContent=`Selected date: ${t[this.selectedDate.getDay()]}, ${this.selectedDate.getDate()} ${e[this.selectedDate.getMonth()]} ${this.selectedDate.getFullYear()}`},this.handleUpDownArrowKeyPress=(t,e)=>{const i=t===this.yearInputEl?0:1;let s;switch(t){case this.dayInputEl:s=this.MAX_DAY;break;case this.monthInputEl:s=this.MAX_MONTH;break;case this.yearInputEl:s=9999}(null==t?void 0:t.value)?("ArrowUp"===e.key&&(+t.value===s?(e.preventDefault(),t.value=`0${i}`):t.value=+t.value+1<10?"0"+(+t.value+1):(+t.value+1).toString(),this.notifyScreenReader(t,e)),"ArrowDown"===e.key&&(+t.value===i?(e.preventDefault(),t.value=s.toString()):t.value=+t.value-1<10?"0"+(+t.value-1):(+t.value-1).toString(),this.notifyScreenReader(t,e))):"ArrowDown"===e.key?(e.preventDefault(),t===this.yearInputEl?t.value=(new Date).getFullYear().toString():t.value=s.toString(),this.notifyScreenReader(t,e)):"ArrowUp"===e.key&&(e.preventDefault(),t===this.yearInputEl?t.value=(new Date).getFullYear().toString():t.value=`0${i}`,this.notifyScreenReader(t,e)),this.setInputValue(t),this.setFitToValueStyling(t)},this.handleDateChange=t=>{!t&&(0,n.b)(this.selectedDate,this.previousSelectedDate)||(this.value&&this.inputsInOrder.forEach((t=>{t.classList.add(this.FIT_TO_VALUE)})),this.day&&this.month&&this.year&&""===this.invalidDateText?(this.setValueAndEmitChange(this.selectedDate),this.notifyScreenReaderSelectedDate()):null===this.selectedDate&&null===this.previousSelectedDate||(this.setValueAndEmitChange(null),this.selectedDateInfoEl.textContent=""),this.previousSelectedDate=this.selectedDate,this.isDateSetFromKeyboardEvent||this.updateInputValues(this.day,this.month,this.year))},this.slicePastedDate=(t,e)=>e.length>t?e.slice(0,t):e,this.isPastedStringDateValid=t=>!!(/\d+-\d+-\d+$/.test(t)||/\d+\/\d+\/\d+/.test(t)||/\d+\.\d+\.\d+/.test(t))||!!/[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}(?::[0-9]{2}(?:\.\d+)?)?Z/.test(t)&&(this.isZuluTime=!0,!0),this.handlePaste=t=>{t.preventDefault();const e=t.clipboardData.getData("Text"),i=this.isPastedStringDateValid(e);this.setPastedValueAndValidation(i,e,t)},this.setDate=t=>{if(null===t||""===t||void 0===t)this.day=null,this.month=null,this.year=null,this.inputsInOrder.forEach((t=>{t.classList.remove(this.FIT_TO_VALUE),this.setPreventInput(t,!1)})),this.handleDateChange(!0);else if((0,n.i)(t)){let e;e="string"==typeof t?new Date(+t):t,this.day=(0,n.j)(e.getDate()),this.month=(0,n.j)(e.getMonth()+1),this.year=e.getFullYear().toString()}else if("string"==typeof t){const e=(0,n.s)(t,this.dateFormat);this.year=e[0],this.month=e[1],this.day=e[2]}this.setValidationMessage()},this.formatMinMax=t=>{let e;const i=(0,n.j)(t.getDate()),s=(0,n.j)(t.getMonth()+1),a=t.getFullYear();switch(this.dateFormat){case"DD/MM/YYYY":e=`${i}/${s}/${a}`;break;case"MM/DD/YYYY":e=`${s}/${i}/${a}`;break;case"YYYY/MM/DD":e=`${a}/${s}/${i}`}return e},this.updateInputValues=(t,e,i)=>{this.dayInputEl.value=t,this.monthInputEl.value=e,this.yearInputEl.value=i},this.setInputValue=(t,e=!1)=>{const i=e?"":t.value;switch(t){case this.dayInputEl:this.day=i;break;case this.monthInputEl:this.month=i;break;case this.yearInputEl:this.year!==i&&(this.year=i)}this.setValidationMessage()},this.setValidationMessage=()=>{this.setDateValidity(),(0,a.a)(this.day)||(0,a.a)(this.month)||(0,a.a)(this.year)?this.selectedDate=null:(this.selectedDate=this.convertToDate(this.year,this.month,this.day),this.isValidDate=0!=+this.selectedDate&&this.selectedDate.getDate()==+this.day,this.isDisabledDate=this.isSelectedDateDisabled(),!this.isValidDate||this.isDisabledDate?this.inputsInOrder.forEach((t=>t.setAttribute(this.ARIA_INVALID,"true"))):this.inputsInOrder.forEach((t=>t.removeAttribute(this.ARIA_INVALID)))),this.isValidDay&&this.isValidMonth&&this.isValidDate?this.isDisabledDate&&null!==this.selectedDate?this.isBeforeMin?this.disablePast?this.invalidDateText=this.disablePastMessage:this.invalidDateText=`Please enter a date after ${this.formatMinMax(this.minDate)}.`:this.isAfterMax?this.disableFuture?this.invalidDateText=this.disableFutureMessage:this.invalidDateText=`Please enter a date before ${this.formatMinMax(this.maxDate)}.`:0!==this.disableDays.length?this.invalidDateText=this.disableDaysMessage:(this.disablePast&&(this.invalidDateText=this.disablePastMessage),this.disableFuture&&(this.invalidDateText=this.disableFutureMessage)):this.invalidDateText="":this.invalidDateText=this.invalidDateMessage},this.setInputsInOrder=()=>{this.el.shadowRoot.querySelectorAll("input").forEach((t=>this.inputsInOrder.push(t)))},this.setAriaLabelledBy=()=>{var t;if(this.disabled&&!(0,a.a)(null===(t=this.inputCompContainerEl)||void 0===t?void 0:t.getAttribute(this.ARIA_LABELLED_BY)))return void this.removeAriaLabelledBy();if(this.disabled)return;const e=this.el.shadowRoot.querySelector("label"),i=`${this.inputId}-label`;if(null!=e){e.id=i;const t=!(0,a.a)(this.validationStatus)&&!(0,a.a)(this.validationText)||!(0,a.a)(this.invalidDateText),s=`${i} ${this.screenReaderInfoId} ${(0,a.v)(this.inputId,""!==this.helperText&&this.helperText!==this.defaultHelperText,t)} ${this.selectedDate?this.selectedDateInfoId:""} ${this.assistiveHintId}`;this.inputCompContainerEl.setAttribute(this.ARIA_LABELLED_BY,s)}},this.setPreventInput=(t,e)=>{switch(t){case this.dayInputEl:this.preventDayInput=e;break;case this.monthInputEl:this.preventMonthInput=e;break;case this.yearInputEl:this.preventYearInput=e}},this.getInputFromDatePart=t=>{const e=(0,s.h)("input",{class:"day-input",id:"day-input",ref:t=>this.dayInputEl=t,"aria-label":"day",placeholder:"DD",disabled:this.disabled,onPaste:this.handlePaste,inputmode:"number",pattern:"[0-9]*",onKeyDown:t=>this.handleKeyDown(t,this.preventDayInput)}),i=(0,s.h)("input",{id:"month-input",class:"month-input",ref:t=>this.monthInputEl=t,"aria-label":"month",placeholder:"MM",disabled:this.disabled,onPaste:this.handlePaste,inputmode:"number",pattern:"[0-9]*",onKeyDown:t=>this.handleKeyDown(t,this.preventMonthInput)}),a=(0,s.h)("input",{id:"year-input",class:"year-input",ref:t=>this.yearInputEl=t,"aria-label":"year",placeholder:"YYYY",maxLength:4,disabled:this.disabled,onPaste:this.handlePaste,inputmode:"number",pattern:"[0-9]*",onKeyDown:t=>this.handleKeyDown(t,this.preventYearInput)});let n;switch(t){case"D":n=e;break;case"M":n=i;break;case"Y":n=a}return n},this.getInputsInOrder=()=>{const t=this.dateFormat.split("/"),e=[];return t.forEach((t=>{e.push(this.getInputFromDatePart(t.substring(0,1)))})),e},this.getDescOfInputsOrder=()=>{let t;switch(this.dateFormat){case"DD/MM/YYYY":t="day, month, and year";break;case"MM/DD/YYYY":t="month, day, and year";break;case"YYYY/MM/DD":t="year, month, and day"}return t},this.getScreenReaderInfo=t=>{let e="";return this.required&&(e+="required"),t===a.z.Error&&(e+=" invalid data"),""===e?"":e+", "},this.preventInput=(t,e)=>{const i=t.key,s=t.target;let a;s&&(a=s.value.substring(s.selectionStart,s.selectionEnd)),("e"===i||"."===i||"-"===i||t.key>="0"&&t.key<="9"&&e&&!a)&&t.preventDefault()},this.isSelectedDateDisabled=()=>{const t=new Date;this.isAfterMax=!1,this.isBeforeMin=!1;let e=!1;const i=this.selectedDate.toDateString()!==t.toDateString();return this.minDate&&this.selectedDate<this.minDate&&i&&(this.isBeforeMin=!0,e=!0),this.maxDate&&this.selectedDate>this.maxDate&&i&&(this.isAfterMax=!0,e=!0),this.disableDays.includes(this.selectedDate.getDay())&&(e=!0),(this.disablePast&&this.selectedDate<t||this.disableFuture&&this.selectedDate>t)&&i&&(e=!0),e},this.moveToNextInput=t=>{const e=this.inputsInOrder.findIndex((e=>e===t)),i=this.inputsInOrder[e+1];this.preventAutoFormatting=!1,i&&i.focus()},this.moveToPreviousInput=t=>{const e=this.inputsInOrder.findIndex((e=>e===t));this.preventAutoFormatting=!1,this.inputsInOrder[e-1]&&this.inputsInOrder[e-1].focus()},this.autocompleteInput=t=>{if(t===this.yearInputEl)this.autocompleteYear();else{const e=t.value;1===e.length&&(t.value=0==+e?"01":`0${e}`)}t.value&&this.setInputValue(t)},this.autocompleteYear=()=>{const t=this.yearInputEl.value;let e="";t&&(["2","0","0"].forEach(((i,s)=>{t.length+s<=3&&(e+=i)})),this.yearInputEl.value=`${e}${t}`)},this.convertToDate=(t,e,i)=>(0,a.a)(t)||(0,a.a)(e)||(0,a.a)(i)?null:new Date(+t,+e-1,+i),this.handleHostBlur=()=>{this.removeLabelledBy=!1,this.icBlur.emit({value:this.selectedDate})},this.handleHostFocus=()=>{var t;(null===(t=this.el.shadowRoot.activeElement)||void 0===t?void 0:t.id.match(/(day|month|year)-input$/))?this.removeLabelledBy=!1:this.removeLabelledBy=!0,this.icFocus.emit({value:this.selectedDate})},this.handleFormReset=()=>{this.setDate(this.initialValue),this.setValidationMessage(),this.handleDateChange(!1)},this.getAriaLabel=t=>t.getAttribute(this.ARIA_LABEL),this.notifyScreenReaderArrowKeys=t=>{const e=this.el.shadowRoot.querySelector("#live-region");let i="";const s=this.getAriaLabel(t);e&&t.value&&(t===this.monthInputEl&&a.f[+t.value-1]&&(i=`${t.value} - ${a.f[+t.value-1]}, ${s}`),t!==this.dayInputEl&&t!==this.yearInputEl||(i=`${t.value}, ${s}`),e.textContent=i)},this.notifyScreenReaderInput=(t,e)=>{let i="";const s=this.getAriaLabel(t);t===this.dayInputEl||t===this.monthInputEl?2===t.value.length?(t===this.monthInputEl&&a.f[+t.value-1]&&this.isValidMonth&&(i=`${t.value} - ${a.f[+t.value-1]}, ${s}`),t===this.dayInputEl&&this.isValidDay&&(i=`${t.value}, ${s}`)):i="":i=4===t.value.length?`${t.value}, ${s}`:"",e.textContent=i},this.setFitToValueStyling=t=>{t.value?t.classList.add(this.FIT_TO_VALUE):t.classList.remove(this.FIT_TO_VALUE)},this.setAriaInvalid=(t,e,i,s)=>{this.inputsInOrder.length&&(this.inputsInOrder.forEach((t=>{t.removeAttribute(this.ARIA_INVALID)})),t||this.dayInputEl.setAttribute(this.ARIA_INVALID,"true"),e||this.monthInputEl.setAttribute(this.ARIA_INVALID,"true"),i&&!s||this.inputsInOrder.forEach((t=>{t.setAttribute(this.ARIA_INVALID,"true")})))},this.handleClear=()=>{this.inputsInOrder.forEach((t=>{t.classList.remove(this.FIT_TO_VALUE),this.setInputValue(t,!0),this.setPreventInput(t,!1)})),this.isDateSetFromKeyboardEvent=!1,this.setValidationMessage(),this.handleDateChange(!0),this.inputsInOrder[0].focus()},this.handleCalendarOpen=t=>{var e,i;t.stopImmediatePropagation(),null===(e=this.calendarButtonEl)||void 0===e||e.shadowRoot.querySelector("ic-tooltip").displayTooltip(!1),this.calendarButtonClicked.emit({value:this.selectedDate}),null===(i=this.calendarButtonEl)||void 0===i||i.shadowRoot.querySelector("ic-tooltip").displayTooltip(!1),this.isDateSetFromKeyboardEvent=!1},this.setValueAndEmitChange=t=>{(0,n.b)(new Date(this.value),t)||(this.emitIcChange(t),this.value=t)},this.handleCalendarFocus=()=>{this.calendarFocused=!0},this.handleCalendarBlur=()=>{this.calendarFocused=!1},this.handleClearFocus=()=>{this.removeLabelledBy=!0,this.clearButtonFocused=!0},this.handleClearBlur=t=>{var e;this.clearButtonFocused=!1,(null===(e=t.relatedTarget)||void 0===e?void 0:e.id.match(/(day|year)-input$/))?this.removeLabelledBy=!1:this.removeLabelledBy=!0},this.emitIcChange=t=>{null===t&&null===this.previousEmittedDate||(0,n.b)(t,this.previousEmittedDate)||(this.previousEmittedDate=t,this.icChange.emit({value:t}))},this.day="",this.invalidDateText=void 0,this.maxDate=void 0,this.minDate=void 0,this.month="",this.year="",this.calendarFocused=!1,this.clearButtonFocused=!1,this.removeLabelledBy=!1,this.dateFormat="DD/MM/YYYY",this.disabled=!1,this.disableDays=[],this.disableDaysMessage="The date you have selected is on a day of the week that is not allowed. Please select another date.",this.disableFuture=!1,this.disableFutureMessage="Dates in the future are not allowed. Please select a date in the past.",this.disablePast=!1,this.disablePastMessage="Dates in the past are not allowed. Please select a date in the future.",this.helperText=void 0,this.hideHelperText=!1,this.inputId="ic-date-input-"+l++,this.invalidDateMessage="Please enter a valid date.",this.label=void 0,this.max="",this.min="",this.name=this.inputId,this.required=!1,this.showCalendarButton=!1,this.showClearButton=!0,this.size="default",this.value="",this.validationStatus="",this.validationText=""}watchDisableFutureHandler(){this.watchMaxHandler()}watchDisablePastHandler(){this.watchMinHandler()}watchMaxHandler(){this.disableFuture?this.maxDate=new Date:this.maxDate=(0,n.h)(this.max,this.dateFormat)}watchMinHandler(){this.disablePast?this.minDate=new Date:this.minDate=(0,n.h)(this.min,this.dateFormat)}watchRequiredHandler(){const t=this.el.shadowRoot.querySelector("label");if(this.required){const e=document.createElement("span");e.setAttribute("id","asterisk-span"),e.setAttribute("aria-hidden","true"),e.textContent=" *",null==t||t.appendChild(e)}else{const t=this.el.shadowRoot.querySelector("#asterisk-span");t&&t.remove()}}disconnectedCallback(){(0,a.n)(this.el,this.handleFormReset)}componentWillLoad(){this.defaultHelperText=`Use format ${this.dateFormat}`,(0,a.a)(this.helperText)&&(this.helperText=this.defaultHelperText),this.watchMinHandler(),this.watchMaxHandler(),this.value?(this.setDate(this.value),this.previousEmittedDate=this.selectedDate):this.previousEmittedDate=null,this.screenReaderInfoId=`${this.inputId}-screen-reader-info`,this.assistiveHintId=`${this.inputId}-assistive-hint`,this.selectedDateInfoId=`${this.inputId}-selected-date-info`,(0,a.t)(this.el,this.handleFormReset)}componentDidLoad(){this.setInputsInOrder(),(0,a.o)([{prop:this.label,propName:"label"}],"Date Input"),this.value&&(this.updateInputValues(this.day,this.month,this.year),this.inputsInOrder.forEach((t=>{t.classList.add(this.FIT_TO_VALUE)}))),this.setAriaInvalid(this.isValidDay,this.isValidMonth,this.isValidDate,this.isDisabledDate),this.value&&this.notifyScreenReaderSelectedDate(),this.inputsInOrder.forEach((t=>{t.addEventListener("input",this.handleInput),t.addEventListener("focus",this.handleFocus),t.addEventListener("blur",this.handleBlur)})),this.watchRequiredHandler()}componentWillUpdate(){(0,a.a)(this.helperText)&&(this.helperText=this.defaultHelperText),this.isDateSetFromKeyboardEvent||this.setDate(this.value),this.setAriaInvalid(this.isValidDay,this.isValidMonth,this.isValidDate,this.isDisabledDate),this.handleDateChange(!1),this.isDateSetFromKeyboardEvent=!1}componentDidRender(){this.removeLabelledBy?this.removeAriaLabelledBy():this.setAriaLabelledBy()}async getDate(){return this.selectedDate}async setCalendarFocus(){this.calendarButtonEl&&this.calendarButtonEl.focus()}async setDisableDays(t){this.disableDays=t}async triggerIcChange(t){this.emitIcChange(t)}removeAriaLabelledBy(){this.inputCompContainerEl.removeAttribute(this.ARIA_LABELLED_BY)}setPastedValueAndValidation(t,e,i){switch(!0){case t:{const t=(this.isZuluTime?(0,n.k)(e):e).split(/-|\/|\./);this.inputsInOrder.forEach(((e,i)=>{if(e.classList.add(this.FIT_TO_VALUE),this.isZuluTime)this.pasteZuluDateTime(t,i);else{let s;s=e===this.dayInputEl||e===this.monthInputEl?this.slicePastedDate(2,t[i]):this.slicePastedDate(4,t[i]),e.value=s,this.setInputValue(e),this.autocompleteInput(e)}})),this.isZuluTime=!1;break}case(1===e.length||2===e.length||4===e.length)&&(0,a.B)(e):this.checkSingleCopiedValueIsValid(i.target,e)?(this.setInputPasteValue(i.target,e),this.setInputValue(i.target)):this.displayPastedValidation(i);break;case 3===e.length&&(0,a.B)(e):i.target!==this.yearInputEl?this.displayPastedValidation(i):(this.setInputPasteValue(i.target,e),this.setInputValue(i.target));break;case e.length>=5&&(0,a.B)(e):this.displayPastedValidation(i)}}pasteZuluDateTime(t,e){if(0===e){const i=this.slicePastedDate(4,t[e]);this.yearInputEl.value=i,this.setInputValue(this.yearInputEl)}else if(1===e){const i=this.slicePastedDate(2,t[e]);this.monthInputEl.value=i,this.setInputValue(this.monthInputEl)}else{const i=this.slicePastedDate(2,t[e]);this.dayInputEl.value=i,this.setInputValue(this.dayInputEl)}}displayPastedValidation(t){var e;(null===(e=this.invalidDateText)||void 0===e?void 0:e.length)>0&&(this.previousInvalidDateTest=this.invalidDateText),this.invalidDateText=`Please paste a valid ${this.getAriaLabel(t.target)}`,this.validationStatus=a.z.Error,this.isPasteValidationDisplayed=!0}setPasteInvalidText(){var t;this.isPasteValidationDisplayed&&(this.invalidDateText=null!==(t=this.previousInvalidDateTest)&&void 0!==t?t:"",this.isPasteValidationDisplayed=!1,this.isDateSetFromKeyboardEvent=!0)}notifyScreenReader(t,e){const i=this.el.shadowRoot.querySelector("#live-region");i&&(this.isKeyboardOrEvent(e)?this.notifyScreenReaderArrowKeys(t):Object.prototype.toString.call(e)===this.INPUT_EVENT_OBJECT_STRING&&this.notifyScreenReaderInput(t,i))}render(){const{inputId:t,label:e,disabled:i,helperText:n,hideHelperText:l,showClearButton:h,showCalendarButton:r,size:o}=this,d=!(0,a.a)(this.validationStatus)&&!(0,a.a)(this.validationText),u=d?this.validationStatus:(0,a.a)(this.invalidDateText)?"":a.z.Error,c=`Type or use the up and down arrow keys to change the values for the ${this.getDescOfInputsOrder()}.`;return(0,a.u)(!0,this.el,this.name,this.convertToDate(this.year,this.month,this.day),this.disabled),(0,s.h)(s.H,{onBlur:this.handleHostBlur,onFocus:this.handleHostFocus},(0,s.h)("ic-input-container",{disabled:i},(0,s.h)("ic-input-label",{for:t,label:e,helperText:l?null:n,disabled:i}),(0,s.h)("span",{id:this.screenReaderInfoId,class:"sr-only","aria-hidden":"true"},this.getScreenReaderInfo(u),l&&`${n}\n`,`${this.defaultHelperText}.`),(0,s.h)("span",{id:this.assistiveHintId,class:"sr-only","aria-hidden":"true"},c),(0,s.h)("span",{id:"live-region","aria-live":"assertive",class:"sr-only"}),(0,s.h)("ic-input-component-container",{id:t,ref:t=>this.inputCompContainerEl=t,disabled:i,validationStatus:u,size:o,role:"group"},(0,s.h)("div",{class:"input-container"},(0,s.h)("div",{class:"date-inputs"},this.getInputsInOrder()[0],"/",this.getInputsInOrder()[1],"/",this.getInputsInOrder()[2]),(0,s.h)("div",{class:"action-buttons"},h&&(0,s.h)("ic-button",{id:"clear-button","aria-label":"Clear input",class:{"clear-button":!0,hidden:(0,a.a)(this.day)&&(0,a.a)(this.month)&&(0,a.a)(this.year)},disabled:this.disabled,innerHTML:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M15.8327 5.34199L14.6577 4.16699L9.99935 8.82533L5.34102 4.16699L4.16602 5.34199L8.82435 10.0003L4.16602 14.6587L5.34102 15.8337L9.99935 11.1753L14.6577 15.8337L15.8327 14.6587L11.1743 10.0003L15.8327 5.34199Z" fill="currentColor"/>\n</svg>\n',onClick:this.handleClear,onFocus:this.handleClearFocus,onBlur:this.handleClearBlur,variant:"icon",appearance:this.clearButtonFocused?a.I.Light:a.I.Dark,size:o}),r&&(0,s.h)("div",{class:"show-calendar-button-wrapper"},(0,s.h)("div",{class:{divider:!0,[o]:!0}}),(0,s.h)("ic-button",{id:"calendar-button",ref:t=>this.calendarButtonEl=t,"aria-label":"Display calendar","aria-haspopup":"dialog",class:"calendar-button",disabled:this.disabled,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n  <path d="M16.6667 2.50004H15.8334V0.833374H14.1667V2.50004H5.83342V0.833374H4.16675V2.50004H3.33341C2.41675 2.50004 1.66675 3.25004 1.66675 4.16671V17.5C1.66675 18.4167 2.41675 19.1667 3.33341 19.1667H16.6667C17.5834 19.1667 18.3334 18.4167 18.3334 17.5V4.16671C18.3334 3.25004 17.5834 2.50004 16.6667 2.50004ZM16.6667 17.5H3.33341V6.66671H16.6667V17.5Z" fill="currentColor"/>\n</svg>',onClick:this.handleCalendarOpen,variant:"icon",size:o,onFocus:this.handleCalendarFocus,onBlur:this.handleCalendarBlur,appearance:this.calendarFocused?a.I.Light:a.I.Default}))))),(0,s.h)("span",{id:this.selectedDateInfoId,class:"sr-only","aria-live":"polite"},(0,s.h)("span",{ref:t=>this.selectedDateInfoEl=t,role:"status"})),(d||!(0,a.a)(this.invalidDateText))&&(0,s.h)("ic-input-validation",{status:u,message:d?this.validationText:this.invalidDateText,for:t})))}static get delegatesFocus(){return!0}get el(){return(0,s.g)(this)}static get watchers(){return{disableFuture:["watchDisableFutureHandler"],disablePast:["watchDisablePastHandler"],max:["watchMaxHandler"],min:["watchMinHandler"],required:["watchRequiredHandler"]}}};h.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}input{border:0;height:100%;padding:0;outline:none;background:none;-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none}ic-input-component-container{cursor:text}ic-input-component-container,ic-input-component-container:hover{color:var(--ic-color-tertiary-text)}ic-input-component-container .focus-indicator{padding:var(--ic-space-xxxs) var(--ic-space-xs);align-items:center}.day-input{width:1.438rem}.month-input{width:1.813rem}.year-input,.year-input.fit-to-value{width:2.313rem}.fit-to-value{width:1.25rem}.sr-only{position:absolute;left:-9999px}.input-container{width:100%;display:flex;justify-content:space-between;align-items:center;position:relative}.action-buttons{display:flex;align-items:center}.show-calendar-button-wrapper{display:flex;justify-content:center;align-items:center}.clear-button,.calendar-button{border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition);margin:0}.clear-button.hidden{display:none}.clear-button:focus,.calendar-button:focus,.clear-button:active,.calendar-button:active{background-color:var(--ic-focus-blue) !important;box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow) !important;border-radius:0.25rem}.clear-button:focus,.calendar-button:focus,.clear-button:active *,.calendar-button:active *{fill:var(--ic-architectural-white)}.divider{margin:0 var(--ic-space-xxs);width:var(--ic-space-1px);background-color:var(--ic-architectural-400);border-radius:var(--ic-space-1px)}.divider.small{height:var(--ic-space-md)}.divider.default{height:calc(var(--ic-space-sm) + var(--ic-space-xs))}.divider.large{height:var(--ic-space-lg)}'}}]);