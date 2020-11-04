!function($){var Timepicker,isEmptyObject,extendRemove,detectSupport,convert24to12,splitDateTime,parseDateTimeInternal,selectLocalTimezone;$.ui.timepicker=$.ui.timepicker||{},$.ui.timepicker.version||($.extend($.ui,{timepicker:{version:"1.3.1"}}),Timepicker=function(){this.regional=[],this.regional[""]={currentText:"Now",closeText:"Done",amNames:["AM","A"],pmNames:["PM","P"],timeFormat:"HH:mm",timeSuffix:"",timeOnlyTitle:"Choose Time",timeText:"Time",hourText:"Hour",minuteText:"Minute",secondText:"Second",millisecText:"Millisecond",microsecText:"Microsecond",timezoneText:"Time Zone",isRTL:!1},this._defaults={showButtonPanel:!0,timeOnly:!1,showHour:null,showMinute:null,showSecond:null,showMillisec:null,showMicrosec:null,showTimezone:null,showTime:!0,stepHour:1,stepMinute:1,stepSecond:1,stepMillisec:1,stepMicrosec:1,hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null,hourMin:0,minuteMin:0,secondMin:0,millisecMin:0,microsecMin:0,hourMax:23,minuteMax:59,secondMax:59,millisecMax:999,microsecMax:999,minDateTime:null,maxDateTime:null,onSelect:null,hourGrid:0,minuteGrid:0,secondGrid:0,millisecGrid:0,microsecGrid:0,alwaysSetTime:!0,separator:" ",altFieldTimeOnly:!0,altTimeFormat:null,altSeparator:null,altTimeSuffix:null,pickerTimeFormat:null,pickerTimeSuffix:null,showTimepicker:!0,timezoneList:null,addSliderAccess:!1,sliderAccessArgs:null,controlType:"slider",defaultValue:null,parse:"strict"},$.extend(this._defaults,this.regional[""])},$.extend(Timepicker.prototype,{$input:null,$altInput:null,$timeObj:null,inst:null,hour_slider:null,minute_slider:null,second_slider:null,millisec_slider:null,microsec_slider:null,timezone_select:null,hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null,hourMinOriginal:null,minuteMinOriginal:null,secondMinOriginal:null,millisecMinOriginal:null,microsecMinOriginal:null,hourMaxOriginal:null,minuteMaxOriginal:null,secondMaxOriginal:null,millisecMaxOriginal:null,microsecMaxOriginal:null,ampm:"",formattedDate:"",formattedTime:"",formattedDateTime:"",timezoneList:null,units:["hour","minute","second","millisec","microsec"],support:{},control:null,setDefaults:function(e){return extendRemove(this._defaults,e||{}),this},_newInst:function($input,opts){var tp_inst=new Timepicker,inlineSettings={},fns={},overrides,i,attrName;for(attrName in this._defaults)if(this._defaults.hasOwnProperty(attrName)){var attrValue=$input.attr("time:"+attrName);if(attrValue)try{inlineSettings[attrName]=eval(attrValue)}catch(e){inlineSettings[attrName]=attrValue}}for(i in overrides={beforeShow:function(e,t){if($.isFunction(tp_inst._defaults.evnts.beforeShow))return tp_inst._defaults.evnts.beforeShow.call($input[0],e,t,tp_inst)},onChangeMonthYear:function(e,t,i){tp_inst._updateDateTime(i),$.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)&&tp_inst._defaults.evnts.onChangeMonthYear.call($input[0],e,t,i,tp_inst)},onClose:function(e,t){!0===tp_inst.timeDefined&&""!==$input.val()&&tp_inst._updateDateTime(t),$.isFunction(tp_inst._defaults.evnts.onClose)&&tp_inst._defaults.evnts.onClose.call($input[0],e,t,tp_inst)}},overrides)overrides.hasOwnProperty(i)&&(fns[i]=opts[i]||null);tp_inst._defaults=$.extend({},this._defaults,inlineSettings,opts,overrides,{evnts:fns,timepicker:tp_inst}),tp_inst.amNames=$.map(tp_inst._defaults.amNames,function(e){return e.toUpperCase()}),tp_inst.pmNames=$.map(tp_inst._defaults.pmNames,function(e){return e.toUpperCase()}),tp_inst.support=detectSupport(tp_inst._defaults.timeFormat+(tp_inst._defaults.pickerTimeFormat?tp_inst._defaults.pickerTimeFormat:"")+(tp_inst._defaults.altTimeFormat?tp_inst._defaults.altTimeFormat:"")),"string"==typeof tp_inst._defaults.controlType?("slider"==tp_inst._defaults.controlType&&void 0===jQuery.ui.slider&&(tp_inst._defaults.controlType="select"),tp_inst.control=tp_inst._controls[tp_inst._defaults.controlType]):tp_inst.control=tp_inst._defaults.controlType;var timezoneList=[-720,-660,-600,-570,-540,-480,-420,-360,-300,-270,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,525,540,570,600,630,660,690,720,765,780,840];null!==tp_inst._defaults.timezoneList&&(timezoneList=tp_inst._defaults.timezoneList);var tzl=timezoneList.length,tzi=0,tzv=null;if(0<tzl&&"object"!=typeof timezoneList[0])for(;tzi<tzl;tzi++)tzv=timezoneList[tzi],timezoneList[tzi]={value:tzv,label:$.timepicker.timezoneOffsetString(tzv,tp_inst.support.iso8601)};return tp_inst._defaults.timezoneList=timezoneList,tp_inst.timezone=null!==tp_inst._defaults.timezone?$.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone):-1*(new Date).getTimezoneOffset(),tp_inst.hour=tp_inst._defaults.hour<tp_inst._defaults.hourMin?tp_inst._defaults.hourMin:tp_inst._defaults.hour>tp_inst._defaults.hourMax?tp_inst._defaults.hourMax:tp_inst._defaults.hour,tp_inst.minute=tp_inst._defaults.minute<tp_inst._defaults.minuteMin?tp_inst._defaults.minuteMin:tp_inst._defaults.minute>tp_inst._defaults.minuteMax?tp_inst._defaults.minuteMax:tp_inst._defaults.minute,tp_inst.second=tp_inst._defaults.second<tp_inst._defaults.secondMin?tp_inst._defaults.secondMin:tp_inst._defaults.second>tp_inst._defaults.secondMax?tp_inst._defaults.secondMax:tp_inst._defaults.second,tp_inst.millisec=tp_inst._defaults.millisec<tp_inst._defaults.millisecMin?tp_inst._defaults.millisecMin:tp_inst._defaults.millisec>tp_inst._defaults.millisecMax?tp_inst._defaults.millisecMax:tp_inst._defaults.millisec,tp_inst.microsec=tp_inst._defaults.microsec<tp_inst._defaults.microsecMin?tp_inst._defaults.microsecMin:tp_inst._defaults.microsec>tp_inst._defaults.microsecMax?tp_inst._defaults.microsecMax:tp_inst._defaults.microsec,tp_inst.ampm="",tp_inst.$input=$input,tp_inst._defaults.altField&&(tp_inst.$altInput=$(tp_inst._defaults.altField).css({cursor:"pointer"}).focus(function(){$input.trigger("focus")})),0!==tp_inst._defaults.minDate&&0!==tp_inst._defaults.minDateTime||(tp_inst._defaults.minDate=new Date),0!==tp_inst._defaults.maxDate&&0!==tp_inst._defaults.maxDateTime||(tp_inst._defaults.maxDate=new Date),void 0!==tp_inst._defaults.minDate&&tp_inst._defaults.minDate instanceof Date&&(tp_inst._defaults.minDateTime=new Date(tp_inst._defaults.minDate.getTime())),void 0!==tp_inst._defaults.minDateTime&&tp_inst._defaults.minDateTime instanceof Date&&(tp_inst._defaults.minDate=new Date(tp_inst._defaults.minDateTime.getTime())),void 0!==tp_inst._defaults.maxDate&&tp_inst._defaults.maxDate instanceof Date&&(tp_inst._defaults.maxDateTime=new Date(tp_inst._defaults.maxDate.getTime())),void 0!==tp_inst._defaults.maxDateTime&&tp_inst._defaults.maxDateTime instanceof Date&&(tp_inst._defaults.maxDate=new Date(tp_inst._defaults.maxDateTime.getTime())),tp_inst.$input.bind("focus",function(){tp_inst._onFocus()}),tp_inst},_addTimePicker:function(e){var t=this.$altInput&&this._defaults.altFieldTimeOnly?this.$input.val()+" "+this.$altInput.val():this.$input.val();this.timeDefined=this._parseTime(t),this._limitMinMaxDateTime(e,!1),this._injectTimePicker()},_parseTime:function(t,e){if(this.inst||(this.inst=$.datepicker._getInst(this.$input[0])),e||!this._defaults.timeOnly){var i=$.datepicker._get(this.inst,"dateFormat");try{var s=parseDateTimeInternal(i,this._defaults.timeFormat,t,$.datepicker._getFormatConfig(this.inst),this._defaults);if(!s.timeObj)return!1;$.extend(this,s.timeObj)}catch(e){return $.timepicker.log("Error parsing the date/time string: "+e+"\ndate/time string = "+t+"\ntimeFormat = "+this._defaults.timeFormat+"\ndateFormat = "+i),!1}return!0}var a=$.datepicker.parseTime(this._defaults.timeFormat,t,this._defaults);return!!a&&($.extend(this,a),!0)},_injectTimePicker:function(){var e,t=this.inst.dpDiv,i=this.inst.settings,r=this,l="",s="",a=null,n={},o={},c=0,m=0;if(0===t.find("div.ui-timepicker-div").length&&i.showTimepicker){for(var u=' style="display:none;"',d='<div class="ui-timepicker-div'+(i.isRTL?" ui-timepicker-rtl":"")+'"><dl><dt class="ui_tpicker_time_label"'+(i.showTime?"":u)+">"+i.timeText+'</dt><dd class="ui_tpicker_time"'+(i.showTime?"":u)+"></dd>",c=0,m=this.units.length;c<m;c++){if(a=null!==i["show"+(s=(l=this.units[c]).substr(0,1).toUpperCase()+l.substr(1))]?i["show"+s]:this.support[l],n[l]=parseInt(i[l+"Max"]-(i[l+"Max"]-i[l+"Min"])%i["step"+s],10),o[l]=0,d+='<dt class="ui_tpicker_'+l+'_label"'+(a?"":u)+">"+i[l+"Text"]+'</dt><dd class="ui_tpicker_'+l+'"><div class="ui_tpicker_'+l+'_slider"'+(a?"":u)+"></div>",a&&0<i[l+"Grid"]){if(d+='<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>',"hour"==l)for(var p=i[l+"Min"];p<=n[l];p+=parseInt(i[l+"Grid"],10)){o[l]++;var h=$.datepicker.formatTime(this.support.ampm?"hht":"HH",{hour:p},i);d+='<td data-for="'+l+'">'+h+"</td>"}else for(var _=i[l+"Min"];_<=n[l];_+=parseInt(i[l+"Grid"],10))o[l]++,d+='<td data-for="'+l+'">'+(_<10?"0":"")+_+"</td>";d+="</tr></table></div>"}d+="</dd>"}var f=null!==i.showTimezone?i.showTimezone:this.support.timezone;d+='<dt class="ui_tpicker_timezone_label"'+(f?"":u)+">"+i.timezoneText+"</dt>",d+='<dd class="ui_tpicker_timezone" '+(f?"":u)+"></dd>";var g=$(d+="</dl></div>");for(!0===i.timeOnly&&(g.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">'+i.timeOnlyTitle+"</div></div>"),t.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()),c=0,m=r.units.length;c<m;c++)a=null!==i["show"+(s=(l=r.units[c]).substr(0,1).toUpperCase()+l.substr(1))]?i["show"+s]:this.support[l],r[l+"_slider"]=r.control.create(r,g.find(".ui_tpicker_"+l+"_slider"),l,r[l],i[l+"Min"],n[l],i["step"+s]),a&&0<i[l+"Grid"]&&(e=100*o[l]*i[l+"Grid"]/(n[l]-i[l+"Min"]),g.find(".ui_tpicker_"+l+" table").css({width:e+"%",marginLeft:i.isRTL?"0":e/(-2*o[l])+"%",marginRight:i.isRTL?e/(-2*o[l])+"%":"0",borderCollapse:"collapse"}).find("td").click(function(e){var t=$(this),i=t.html(),s=parseInt(i.replace(/[^0-9]/g),10),a=i.replace(/[^apm]/gi),n=t.data("for");"hour"==n&&(-1!==a.indexOf("p")&&s<12?s+=12:-1!==a.indexOf("a")&&12===s&&(s=0)),r.control.value(r,r[n+"_slider"],l,s),r._onTimeChange(),r._onSelectHandler()}).css({cursor:"pointer",width:100/o[l]+"%",textAlign:"center",overflow:"hidden"}));this.timezone_select=g.find(".ui_tpicker_timezone").append("<select></select>").find("select"),$.fn.append.apply(this.timezone_select,$.map(i.timezoneList,function(e,t){return $("<option />").val("object"==typeof e?e.value:e).text("object"==typeof e?e.label:e)})),void 0!==this.timezone&&null!==this.timezone&&""!==this.timezone?-1*new Date(this.inst.selectedYear,this.inst.selectedMonth,this.inst.selectedDay,12).getTimezoneOffset()==this.timezone?selectLocalTimezone(r):this.timezone_select.val(this.timezone):void 0!==this.hour&&null!==this.hour&&""!==this.hour?this.timezone_select.val(i.timezone):selectLocalTimezone(r),this.timezone_select.change(function(){r._onTimeChange(),r._onSelectHandler()});var M,k,v,T=t.find(".ui-datepicker-buttonpane");T.length?T.before(g):t.append(g),this.$timeObj=g.find(".ui_tpicker_time"),null!==this.inst&&(M=this.timeDefined,this._onTimeChange(),this.timeDefined=M),this._defaults.addSliderAccess&&(k=this._defaults.sliderAccessArgs,v=this._defaults.isRTL,k.isRTL=v,setTimeout(function(){var r;0===g.find(".ui-slider-access").length&&(g.find(".ui-slider:visible").sliderAccess(k),(r=g.find(".ui-slider-access:eq(0)").outerWidth(!0))&&g.find("table:visible").each(function(){var e=$(this),t=e.outerWidth(),i=e.css(v?"marginRight":"marginLeft").toString().replace("%",""),s=t-r,a=i*s/t+"%",n={width:s,marginRight:0,marginLeft:0};n[v?"marginRight":"marginLeft"]=a,e.css(n)}))},10)),r._limitMinMaxDateTime(this.inst,!0)}},_limitMinMaxDateTime:function(e,t){var i,s,a,n,r,l,o,c,m=this._defaults,u=new Date(e.selectedYear,e.selectedMonth,e.selectedDay);this._defaults.showTimepicker&&(null!==$.datepicker._get(e,"minDateTime")&&void 0!==$.datepicker._get(e,"minDateTime")&&u&&(i=$.datepicker._get(e,"minDateTime"),s=new Date(i.getFullYear(),i.getMonth(),i.getDate(),0,0,0,0),null!==this.hourMinOriginal&&null!==this.minuteMinOriginal&&null!==this.secondMinOriginal&&null!==this.millisecMinOriginal&&null!==this.microsecMinOriginal||(this.hourMinOriginal=m.hourMin,this.minuteMinOriginal=m.minuteMin,this.secondMinOriginal=m.secondMin,this.millisecMinOriginal=m.millisecMin,this.microsecMinOriginal=m.microsecMin),e.settings.timeOnly||s.getTime()==u.getTime()?(this._defaults.hourMin=i.getHours(),this.hour<=this._defaults.hourMin?(this.hour=this._defaults.hourMin,this._defaults.minuteMin=i.getMinutes(),this.minute<=this._defaults.minuteMin?(this.minute=this._defaults.minuteMin,this._defaults.secondMin=i.getSeconds(),this.second<=this._defaults.secondMin?(this.second=this._defaults.secondMin,this._defaults.millisecMin=i.getMilliseconds(),this.millisec<=this._defaults.millisecMin?(this.millisec=this._defaults.millisecMin,this._defaults.microsecMin=i.getMicroseconds()):(this.microsec<this._defaults.microsecMin&&(this.microsec=this._defaults.microsecMin),this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.minuteMin=this.minuteMinOriginal,this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.hourMin=this.hourMinOriginal,this._defaults.minuteMin=this.minuteMinOriginal,this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)),null!==$.datepicker._get(e,"maxDateTime")&&void 0!==$.datepicker._get(e,"maxDateTime")&&u&&(a=$.datepicker._get(e,"maxDateTime"),n=new Date(a.getFullYear(),a.getMonth(),a.getDate(),0,0,0,0),null!==this.hourMaxOriginal&&null!==this.minuteMaxOriginal&&null!==this.secondMaxOriginal&&null!==this.millisecMaxOriginal||(this.hourMaxOriginal=m.hourMax,this.minuteMaxOriginal=m.minuteMax,this.secondMaxOriginal=m.secondMax,this.millisecMaxOriginal=m.millisecMax,this.microsecMaxOriginal=m.microsecMax),e.settings.timeOnly||n.getTime()==u.getTime()?(this._defaults.hourMax=a.getHours(),this.hour>=this._defaults.hourMax?(this.hour=this._defaults.hourMax,this._defaults.minuteMax=a.getMinutes(),this.minute>=this._defaults.minuteMax?(this.minute=this._defaults.minuteMax,this._defaults.secondMax=a.getSeconds(),this.second>=this._defaults.secondMax?(this.second=this._defaults.secondMax,this._defaults.millisecMax=a.getMilliseconds(),this.millisec>=this._defaults.millisecMax?(this.millisec=this._defaults.millisecMax,this._defaults.microsecMax=a.getMicroseconds()):(this.microsec>this._defaults.microsecMax&&(this.microsec=this._defaults.microsecMax),this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.minuteMax=this.minuteMaxOriginal,this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.hourMax=this.hourMaxOriginal,this._defaults.minuteMax=this.minuteMaxOriginal,this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)),void 0!==t&&!0===t&&(r=parseInt(this._defaults.hourMax-(this._defaults.hourMax-this._defaults.hourMin)%this._defaults.stepHour,10),l=parseInt(this._defaults.minuteMax-(this._defaults.minuteMax-this._defaults.minuteMin)%this._defaults.stepMinute,10),o=parseInt(this._defaults.secondMax-(this._defaults.secondMax-this._defaults.secondMin)%this._defaults.stepSecond,10),c=parseInt(this._defaults.millisecMax-(this._defaults.millisecMax-this._defaults.millisecMin)%this._defaults.stepMillisec,10),microsecMax=parseInt(this._defaults.microsecMax-(this._defaults.microsecMax-this._defaults.microsecMin)%this._defaults.stepMicrosec,10),this.hour_slider&&(this.control.options(this,this.hour_slider,"hour",{min:this._defaults.hourMin,max:r}),this.control.value(this,this.hour_slider,"hour",this.hour-this.hour%this._defaults.stepHour)),this.minute_slider&&(this.control.options(this,this.minute_slider,"minute",{min:this._defaults.minuteMin,max:l}),this.control.value(this,this.minute_slider,"minute",this.minute-this.minute%this._defaults.stepMinute)),this.second_slider&&(this.control.options(this,this.second_slider,"second",{min:this._defaults.secondMin,max:o}),this.control.value(this,this.second_slider,"second",this.second-this.second%this._defaults.stepSecond)),this.millisec_slider&&(this.control.options(this,this.millisec_slider,"millisec",{min:this._defaults.millisecMin,max:c}),this.control.value(this,this.millisec_slider,"millisec",this.millisec-this.millisec%this._defaults.stepMillisec)),this.microsec_slider&&(this.control.options(this,this.microsec_slider,"microsec",{min:this._defaults.microsecMin,max:microsecMax}),this.control.value(this,this.microsec_slider,"microsec",this.microsec-this.microsec%this._defaults.stepMicrosec))))},_onTimeChange:function(){var e=!!this.hour_slider&&this.control.value(this,this.hour_slider,"hour"),t=!!this.minute_slider&&this.control.value(this,this.minute_slider,"minute"),i=!!this.second_slider&&this.control.value(this,this.second_slider,"second"),s=!!this.millisec_slider&&this.control.value(this,this.millisec_slider,"millisec"),a=!!this.microsec_slider&&this.control.value(this,this.microsec_slider,"microsec"),n=!!this.timezone_select&&this.timezone_select.val(),r=this._defaults,l=r.pickerTimeFormat||r.timeFormat,o=r.pickerTimeSuffix||r.timeSuffix;"object"==typeof e&&(e=!1),"object"==typeof t&&(t=!1),"object"==typeof i&&(i=!1),"object"==typeof s&&(s=!1),"object"==typeof a&&(a=!1),"object"==typeof n&&(n=!1),!1!==e&&(e=parseInt(e,10)),!1!==t&&(t=parseInt(t,10)),!1!==i&&(i=parseInt(i,10)),!1!==s&&(s=parseInt(s,10)),!1!==a&&(a=parseInt(a,10));var c=r[e<12?"amNames":"pmNames"][0],m=e!=this.hour||t!=this.minute||i!=this.second||s!=this.millisec||a!=this.microsec||0<this.ampm.length&&e<12!=(-1!==$.inArray(this.ampm.toUpperCase(),this.amNames))||null!==this.timezone&&n!=this.timezone;m&&(!1!==e&&(this.hour=e),!1!==t&&(this.minute=t),!1!==i&&(this.second=i),!1!==s&&(this.millisec=s),!1!==a&&(this.microsec=a),!1!==n&&(this.timezone=n),this.inst||(this.inst=$.datepicker._getInst(this.$input[0])),this._limitMinMaxDateTime(this.inst,!0)),this.support.ampm&&(this.ampm=c),this.formattedTime=$.datepicker.formatTime(r.timeFormat,this,r),this.$timeObj&&(l===r.timeFormat?this.$timeObj.text(this.formattedTime+o):this.$timeObj.text($.datepicker.formatTime(l,this,r)+o)),this.timeDefined=!0,m&&this._updateDateTime()},_onSelectHandler:function(){var e=this._defaults.onSelect||this.inst.settings.onSelect,t=this.$input?this.$input[0]:null;e&&t&&e.apply(t,[this.formattedDateTime,this])},_updateDateTime:function(e){e=this.inst||e;var t=$.datepicker._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay)),i=$.datepicker._get(e,"dateFormat"),s=$.datepicker._getFormatConfig(e),a=null!==t&&this.timeDefined;this.formattedDate=$.datepicker.formatDate(i,null===t?new Date:t,s);var n,r,l,o=this.formattedDate;""===e.lastVal&&(e.currentYear=e.selectedYear,e.currentMonth=e.selectedMonth,e.currentDay=e.selectedDay),!0===this._defaults.timeOnly?o=this.formattedTime:!0!==this._defaults.timeOnly&&(this._defaults.alwaysSetTime||a)&&(o+=this._defaults.separator+this.formattedTime+this._defaults.timeSuffix),this.formattedDateTime=o,this._defaults.showTimepicker?this.$altInput&&!1===this._defaults.timeOnly&&!0===this._defaults.altFieldTimeOnly?(this.$altInput.val(this.formattedTime),this.$input.val(this.formattedDate)):this.$altInput?(this.$input.val(o),n="",r=this._defaults.altSeparator?this._defaults.altSeparator:this._defaults.separator,l=this._defaults.altTimeSuffix?this._defaults.altTimeSuffix:this._defaults.timeSuffix,this._defaults.timeOnly||(n=this._defaults.altFormat?$.datepicker.formatDate(this._defaults.altFormat,null===t?new Date:t,s):this.formattedDate)&&(n+=r),this._defaults.altTimeFormat?n+=$.datepicker.formatTime(this._defaults.altTimeFormat,this,this._defaults)+l:n+=this.formattedTime+l,this.$altInput.val(n)):this.$input.val(o):this.$input.val(this.formattedDate),this.$input.trigger("change")},_onFocus:function(){if(!this.$input.val()&&this._defaults.defaultValue){this.$input.val(this._defaults.defaultValue);var e=$.datepicker._getInst(this.$input.get(0)),t=$.datepicker._get(e,"timepicker");if(t&&t._defaults.timeOnly&&e.input.val()!=e.lastVal)try{$.datepicker._updateDatepicker(e)}catch(e){$.timepicker.log(e)}}},_controls:{slider:{create:function(i,e,s,t,a,n,r){var l=i._defaults.isRTL;return e.prop("slide",null).slider({orientation:"horizontal",value:l?-1*t:t,min:l?-1*n:a,max:l?-1*a:n,step:r,slide:function(e,t){i.control.value(i,$(this),s,l?-1*t.value:t.value),i._onTimeChange()},stop:function(e,t){i._onSelectHandler()}})},options:function(e,t,i,s,a){if(e._defaults.isRTL){if("string"==typeof s)return"min"==s||"max"==s?void 0!==a?t.slider(s,-1*a):Math.abs(t.slider(s)):t.slider(s);var n=s.min,r=s.max;return s.min=s.max=null,void 0!==n&&(s.max=-1*n),void 0!==r&&(s.min=-1*r),t.slider(s)}return"string"==typeof s&&void 0!==a?t.slider(s,a):t.slider(s)},value:function(e,t,i,s){return e._defaults.isRTL?void 0!==s?t.slider("value",-1*s):Math.abs(t.slider("value")):void 0!==s?t.slider("value",s):t.slider("value")}},select:{create:function(t,e,i,s,a,n,r){for(var l='<select class="ui-timepicker-select" data-unit="'+i+'" data-min="'+a+'" data-max="'+n+'" data-step="'+r+'">',o=t._defaults.pickerTimeFormat||t._defaults.timeFormat,c=a;c<=n;c+=r)l+='<option value="'+c+'"'+(c==s?" selected":"")+">",l+="hour"==i?$.datepicker.formatTime($.trim(o.replace(/[^ht ]/gi,"")),{hour:c},t._defaults):"millisec"==i||"microsec"==i||10<=c?c:"0"+c.toString(),l+="</option>";return l+="</select>",e.children("select").remove(),$(l).appendTo(e).change(function(e){t._onTimeChange(),t._onSelectHandler()}),e},options:function(e,t,i,s,a){var n={},r=t.children("select");if("string"==typeof s){if(void 0===a)return r.data(s);n[s]=a}else n=s;return e.control.create(e,t,r.data("unit"),r.val(),n.min||r.data("min"),n.max||r.data("max"),n.step||r.data("step"))},value:function(e,t,i,s){var a=t.children("select");return void 0!==s?a.val(s):a.val()}}}}),$.fn.extend({timepicker:function(e){e=e||{};var t=Array.prototype.slice.call(arguments);return"object"==typeof e&&(t[0]=$.extend(e,{timeOnly:!0})),$(this).each(function(){$.fn.datetimepicker.apply($(this),t)})},datetimepicker:function(t){var i=arguments;return"string"==typeof(t=t||{})?"getDate"==t?$.fn.datepicker.apply($(this[0]),i):this.each(function(){var e=$(this);e.datepicker.apply(e,i)}):this.each(function(){var e=$(this);e.datepicker($.timepicker._newInst(e,t)._defaults)})}}),$.datepicker.parseDateTime=function(e,t,i,s,a){var n,r=parseDateTimeInternal(e,t,i,s,a);return r.timeObj&&(n=r.timeObj,r.date.setHours(n.hour,n.minute,n.second,n.millisec),r.date.setMicroseconds(n.microsec)),r.date},$.datepicker.parseTime=function(e,t,i){function a(e,t,n){var i="^"+e.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g,function(e){var t,i,s,a=e.length;switch(e.charAt(0).toLowerCase()){case"h":case"m":case"s":return 1===a?"(\\d?\\d)":"(\\d{"+a+"})";case"l":case"c":return"(\\d?\\d?\\d)";case"z":return"(z|[-+]\\d\\d:?\\d\\d|\\S+)?";case"t":return t=n.amNames,i=n.pmNames,s=[],t&&$.merge(s,t),i&&$.merge(s,i),"("+(s=$.map(s,function(e){return e.replace(/[.*+?|()\[\]{}\\]/g,"\\$&")})).join("|")+")?";default:return"("+e.replace(/\'/g,"").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g,function(e){return"\\"+e})+")?"}}).replace(/\s/g,"\\s?")+n.timeSuffix+"$",s=function(e){var t=e.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),i={h:-1,m:-1,s:-1,l:-1,c:-1,t:-1,z:-1};if(t)for(var s=0;s<t.length;s++)-1==i[t[s].toString().charAt(0)]&&(i[t[s].toString().charAt(0)]=s+1);return i}(e),a="",r=t.match(new RegExp(i,"i")),l={hour:0,minute:0,second:0,millisec:0,microsec:0};return!!r&&(-1!==s.t&&(void 0===r[s.t]||0===r[s.t].length?(a="",l.ampm=""):(a=-1!==$.inArray(r[s.t].toUpperCase(),n.amNames)?"AM":"PM",l.ampm=n["AM"==a?"amNames":"pmNames"][0])),-1!==s.h&&("AM"==a&&"12"==r[s.h]?l.hour=0:"PM"==a&&"12"!=r[s.h]?l.hour=parseInt(r[s.h],10)+12:l.hour=Number(r[s.h])),-1!==s.m&&(l.minute=Number(r[s.m])),-1!==s.s&&(l.second=Number(r[s.s])),-1!==s.l&&(l.millisec=Number(r[s.l])),-1!==s.c&&(l.microsec=Number(r[s.c])),-1!==s.z&&void 0!==r[s.z]&&(l.timezone=$.timepicker.timezoneOffsetNumber(r[s.z])),l)}var s=extendRemove(extendRemove({},$.timepicker._defaults),i||{});e.replace(/\'.*?\'/g,"").indexOf("Z");return"function"==typeof s.parse?s.parse(e,t,s):("loose"===s.parse?function(t,i,s){try{var e=new Date("2012-01-01 "+i);if(isNaN(e.getTime())&&(e=new Date("2012-01-01T"+i),isNaN(e.getTime())&&(e=new Date("01/01/2012 "+i),isNaN(e.getTime()))))throw"Unable to parse time with native Date: "+i;return{hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),millisec:e.getMilliseconds(),microsec:e.getMicroseconds(),timezone:-1*e.getTimezoneOffset()}}catch(e){try{return a(t,i,s)}catch(e){$.timepicker.log("Unable to parse \ntimeString: "+i+"\ntimeFormat: "+t)}}return!1}:a)(e,t,s)},$.datepicker.formatTime=function(e,t,i){i=i||{},i=$.extend({},$.timepicker._defaults,i),t=$.extend({hour:0,minute:0,second:0,millisec:0,timezone:0},t);var s=e,a=i.amNames[0],n=parseInt(t.hour,10);return 11<n&&(a=i.pmNames[0]),s=s.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|('.*?'|".*?"))/g,function(e){switch(e){case"HH":return("0"+n).slice(-2);case"H":return n;case"hh":return("0"+convert24to12(n)).slice(-2);case"h":return convert24to12(n);case"mm":return("0"+t.minute).slice(-2);case"m":return t.minute;case"ss":return("0"+t.second).slice(-2);case"s":return t.second;case"l":return("00"+t.millisec).slice(-3);case"c":return("00"+t.microsec).slice(-3);case"z":return $.timepicker.timezoneOffsetString(null===t.timezone?i.timezone:t.timezone,!1);case"Z":return $.timepicker.timezoneOffsetString(null===t.timezone?i.timezone:t.timezone,!0);case"T":return a.charAt(0).toUpperCase();case"TT":return a.toUpperCase();case"t":return a.charAt(0).toLowerCase();case"tt":return a.toLowerCase();default:return e.replace(/\'/g,"")||"'"}}),s=$.trim(s)},$.datepicker._base_selectDate=$.datepicker._selectDate,$.datepicker._selectDate=function(e,t){var i=this._getInst($(e)[0]),s=this._get(i,"timepicker");s?(s._limitMinMaxDateTime(i,!0),i.inline=i.stay_open=!0,this._base_selectDate(e,t),i.inline=i.stay_open=!1,this._notifyChange(i),this._updateDatepicker(i)):this._base_selectDate(e,t)},$.datepicker._base_updateDatepicker=$.datepicker._updateDatepicker,$.datepicker._updateDatepicker=function(e){var t,i=e.input[0];$.datepicker._curInst&&$.datepicker._curInst!=e&&$.datepicker._datepickerShowing&&$.datepicker._lastInput!=i||"boolean"==typeof e.stay_open&&!1!==e.stay_open||(this._base_updateDatepicker(e),(t=this._get(e,"timepicker"))&&t._addTimePicker(e))},$.datepicker._base_doKeyPress=$.datepicker._doKeyPress,$.datepicker._doKeyPress=function(e){var t=$.datepicker._getInst(e.target),i=$.datepicker._get(t,"timepicker");if(i&&$.datepicker._get(t,"constrainInput")){var s=i.support.ampm,a=null!==i._defaults.showTimezone?i._defaults.showTimezone:i.support.timezone,n=$.datepicker._possibleChars($.datepicker._get(t,"dateFormat")),r=i._defaults.timeFormat.toString().replace(/[hms]/g,"").replace(/TT/g,s?"APM":"").replace(/Tt/g,s?"AaPpMm":"").replace(/tT/g,s?"AaPpMm":"").replace(/T/g,s?"AP":"").replace(/tt/g,s?"apm":"").replace(/t/g,s?"ap":"")+" "+i._defaults.separator+i._defaults.timeSuffix+(a?i._defaults.timezoneList.join(""):"")+i._defaults.amNames.join("")+i._defaults.pmNames.join("")+n,l=String.fromCharCode(void 0===e.charCode?e.keyCode:e.charCode);return e.ctrlKey||l<" "||!n||-1<r.indexOf(l)}return $.datepicker._base_doKeyPress(e)},$.datepicker._base_updateAlternate=$.datepicker._updateAlternate,$.datepicker._updateAlternate=function(e){var t,i,s,a,n,r,l,o=this._get(e,"timepicker");o?(t=o._defaults.altField)&&(o._defaults.altFormat||o._defaults.dateFormat,i=this._getDate(e),s=$.datepicker._getFormatConfig(e),a="",n=o._defaults.altSeparator?o._defaults.altSeparator:o._defaults.separator,r=o._defaults.altTimeSuffix?o._defaults.altTimeSuffix:o._defaults.timeSuffix,l=null!==o._defaults.altTimeFormat?o._defaults.altTimeFormat:o._defaults.timeFormat,a+=$.datepicker.formatTime(l,o,o._defaults)+r,o._defaults.timeOnly||o._defaults.altFieldTimeOnly||null===i||(a=o._defaults.altFormat?$.datepicker.formatDate(o._defaults.altFormat,i,s)+n+a:o.formattedDate+n+a),$(t).val(a)):$.datepicker._base_updateAlternate(e)},$.datepicker._base_doKeyUp=$.datepicker._doKeyUp,$.datepicker._doKeyUp=function(e){var t=$.datepicker._getInst(e.target),i=$.datepicker._get(t,"timepicker");if(i&&i._defaults.timeOnly&&t.input.val()!=t.lastVal)try{$.datepicker._updateDatepicker(t)}catch(e){$.timepicker.log(e)}return $.datepicker._base_doKeyUp(e)},$.datepicker._base_gotoToday=$.datepicker._gotoToday,$.datepicker._gotoToday=function(e){var t=this._getInst($(e)[0]),i=t.dpDiv;this._base_gotoToday(e);var s=this._get(t,"timepicker");selectLocalTimezone(s);var a=new Date;this._setTime(t,a),$(".ui-datepicker-today",i).click()},$.datepicker._disableTimepickerDatepicker=function(e){var t,i=this._getInst(e);i&&(t=this._get(i,"timepicker"),$(e).datepicker("getDate"),t&&(t._defaults.showTimepicker=!1,t._updateDateTime(i)))},$.datepicker._enableTimepickerDatepicker=function(e){var t,i=this._getInst(e);i&&(t=this._get(i,"timepicker"),$(e).datepicker("getDate"),t&&(t._defaults.showTimepicker=!0,t._addTimePicker(i),t._updateDateTime(i)))},$.datepicker._setTime=function(e,t){var i,s=this._get(e,"timepicker");s&&(i=s._defaults,s.hour=t?t.getHours():i.hour,s.minute=t?t.getMinutes():i.minute,s.second=t?t.getSeconds():i.second,s.millisec=t?t.getMilliseconds():i.millisec,s.microsec=t?t.getMicroseconds():i.microsec,s._limitMinMaxDateTime(e,!0),s._onTimeChange(),s._updateDateTime(e))},$.datepicker._setTimeDatepicker=function(e,t,i){var s,a,n=this._getInst(e);!n||(s=this._get(n,"timepicker"))&&(this._setDateFromField(n),t&&("string"==typeof t?(s._parseTime(t,i),(a=new Date).setHours(s.hour,s.minute,s.second,s.millisec),a.setMicroseconds(s.microsec)):(a=new Date(t.getTime())).setMicroseconds(t.getMicroseconds()),"Invalid Date"==a.toString()&&(a=void 0),this._setTime(n,a)))},$.datepicker._base_setDateDatepicker=$.datepicker._setDateDatepicker,$.datepicker._setDateDatepicker=function(e,t){var i,s,a=this._getInst(e);a&&("string"==typeof t&&((t=new Date(t)).getTime()||$.timepicker.log("Error creating Date object from string.")),i=this._get(a,"timepicker"),t instanceof Date?(s=new Date(t.getTime())).setMicroseconds(t.getMicroseconds()):s=t,i&&(i.support.timezone||null!==i._defaults.timezone||(i.timezone=-1*s.getTimezoneOffset()),t=$.timepicker.timezoneAdjust(t,i.timezone),s=$.timepicker.timezoneAdjust(s,i.timezone)),this._updateDatepicker(a),this._base_setDateDatepicker.apply(this,arguments),this._setTimeDatepicker(e,s,!0))},$.datepicker._base_getDateDatepicker=$.datepicker._getDateDatepicker,$.datepicker._getDateDatepicker=function(e,t){var i=this._getInst(e);if(i){var s=this._get(i,"timepicker");if(s){void 0===i.lastVal&&this._setDateFromField(i,t);var a=this._getDate(i);return a&&s._parseTime($(e).val(),s.timeOnly)&&(a.setHours(s.hour,s.minute,s.second,s.millisec),a.setMicroseconds(s.microsec),null!=s.timezone&&(s.support.timezone||null!==s._defaults.timezone||(s.timezone=-1*a.getTimezoneOffset()),a=$.timepicker.timezoneAdjust(a,s.timezone))),a}return this._base_getDateDatepicker(e,t)}},$.datepicker._base_parseDate=$.datepicker.parseDate,$.datepicker.parseDate=function(t,i,s){var a;try{a=this._base_parseDate(t,i,s)}catch(e){if(!(0<=e.indexOf(":")))throw e;a=this._base_parseDate(t,i.substring(0,i.length-(e.length-e.indexOf(":")-2)),s),$.timepicker.log("Error parsing the date string: "+e+"\ndate string = "+i+"\ndate format = "+t)}return a},$.datepicker._base_formatDate=$.datepicker._formatDate,$.datepicker._formatDate=function(e,t,i,s){var a=this._get(e,"timepicker");return a?(a._updateDateTime(e),a.$input.val()):this._base_formatDate(e)},$.datepicker._base_optionDatepicker=$.datepicker._optionDatepicker,$.datepicker._optionDatepicker=function(e,t,i){var s,a=this._getInst(e);if(!a)return null;var n=this._get(a,"timepicker");if(n){var r,l=null,o=null,c=null,m=n._defaults.evnts,u={};if("string"==typeof t){if("minDate"===t||"minDateTime"===t)l=i;else if("maxDate"===t||"maxDateTime"===t)o=i;else if("onSelect"===t)c=i;else if(m.hasOwnProperty(t)){if(void 0===i)return m[t];u[t]=i,s={}}}else if("object"==typeof t)for(r in t.minDate?l=t.minDate:t.minDateTime?l=t.minDateTime:t.maxDate?o=t.maxDate:t.maxDateTime&&(o=t.maxDateTime),m)m.hasOwnProperty(r)&&t[r]&&(u[r]=t[r]);for(r in u)u.hasOwnProperty(r)&&(m[r]=u[r],delete(s=s||$.extend({},t))[r]);if(s&&isEmptyObject(s))return;l?(l=0===l?new Date:new Date(l),n._defaults.minDate=l,n._defaults.minDateTime=l):o?(o=0===o?new Date:new Date(o),n._defaults.maxDate=o,n._defaults.maxDateTime=o):c&&(n._defaults.onSelect=c)}return void 0===i?this._base_optionDatepicker.call($.datepicker,e,t):this._base_optionDatepicker.call($.datepicker,e,s||t,i)},isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(e))return!1;return!0},extendRemove=function(e,t){for(var i in $.extend(e,t),t)null!==t[i]&&void 0!==t[i]||(e[i]=t[i]);return e},detectSupport=function(e){function t(e,t){return-1!==e.indexOf(t)}var i=e.replace(/\'.*?\'/g,"").toLowerCase();return{hour:t(i,"h"),minute:t(i,"m"),second:t(i,"s"),millisec:t(i,"l"),microsec:t(i,"c"),timezone:t(i,"z"),ampm:t(i,"t")&&t(e,"h"),iso8601:t(e,"Z")}},convert24to12=function(e){return 12<e&&(e-=12),0===e&&(e=12),String(e)},splitDateTime=function(t,i,e,s){try{var a=s&&s.separator?s.separator:$.timepicker._defaults.separator,n=(s&&s.timeFormat?s.timeFormat:$.timepicker._defaults.timeFormat).split(a).length,r=i.split(a),l=r.length;if(1<l)return[r.splice(0,l-n).join(a),r.splice(0,n).join(a)]}catch(e){if($.timepicker.log("Could not split the date from the time. Please check the following datetimepicker options\nthrown error: "+e+"\ndateTimeString"+i+"\ndateFormat = "+t+"\nseparator = "+s.separator+"\ntimeFormat = "+s.timeFormat),0<=e.indexOf(":")){var o=i.length-(e.length-e.indexOf(":")-2);i.substring(o);return[$.trim(i.substring(0,o)),$.trim(i.substring(o))]}throw e}return[i,""]},parseDateTimeInternal=function(e,t,i,s,a){var n=splitDateTime(e,i,s,a),r=$.datepicker._base_parseDate(e,n[0],s);if(""===n[1])return{date:r};var l=n[1],o=$.datepicker.parseTime(t,l,a);if(null===o)throw"Wrong time format";return{date:r,timeObj:o}},selectLocalTimezone=function(e,t){var i;e&&e.timezone_select&&(i=void 0!==t?t:new Date,e.timezone_select.val(-1*i.getTimezoneOffset()))},$.timepicker=new Timepicker,$.timepicker.timezoneOffsetString=function(e,t){if(isNaN(e)||840<e)return e;var i=e%60,s=t?":":"",a=(0<=e?"+":"-")+("0"+(101*((e-i)/60)).toString()).slice(-2)+s+("0"+(101*i).toString()).slice(-2);return"+00:00"==a?"Z":a},$.timepicker.timezoneOffsetNumber=function(e){return"Z"===(e=e.toString().replace(":","")).toUpperCase()?0:/^(\-|\+)\d{4}$/.test(e)?("-"==e.substr(0,1)?-1:1)*(60*parseInt(e.substr(1,2),10)+parseInt(e.substr(3,2),10)):e},$.timepicker.timezoneAdjust=function(e,t){var i=$.timepicker.timezoneOffsetNumber(t);return isNaN(i)||e.setMinutes(+e.getMinutes()+(-1*e.getTimezoneOffset()-i)),e},$.timepicker.timeRange=function(e,t,i){return $.timepicker.handleRange("timepicker",e,t,i)},$.timepicker.datetimeRange=function(e,t,i){$.timepicker.handleRange("datetimepicker",e,t,i)},$.timepicker.dateRange=function(e,t,i){$.timepicker.handleRange("datepicker",e,t,i)},$.timepicker.handleRange=function(l,o,c,m){function i(e,t){var i,s,a=o[l]("getDate"),n=c[l]("getDate"),r=e[l]("getDate");null!==a&&(i=new Date(a.getTime()),s=new Date(a.getTime()),i.setMilliseconds(i.getMilliseconds()+m.minInterval),s.setMilliseconds(s.getMilliseconds()+m.maxInterval),0<m.minInterval&&n<i?c[l]("setDate",i):0<m.maxInterval&&s<n?c[l]("setDate",s):n<a&&t[l]("setDate",r))}function t(e,t,i){var s;e.val()&&(null!==(s=e[l].call(e,"getDate"))&&0<m.minInterval&&("minDate"==i&&s.setMilliseconds(s.getMilliseconds()+m.minInterval),"maxDate"==i&&s.setMilliseconds(s.getMilliseconds()-m.minInterval)),s.getTime&&t[l].call(t,"option",i,s))}return m=$.extend({},{minInterval:0,maxInterval:0,start:{},end:{}},m),$.fn[l].call(o,$.extend({onClose:function(e,t){i($(this),c)},onSelect:function(e){t($(this),c,"minDate")}},m,m.start)),$.fn[l].call(c,$.extend({onClose:function(e,t){i($(this),o)},onSelect:function(e){t($(this),o,"maxDate")}},m,m.end)),i(o,c),t(o,c,"minDate"),t(c,o,"maxDate"),$([o.get(0),c.get(0)])},$.timepicker.log=function(e){window.console&&console.log(e)},Date.prototype.getMicroseconds||(Date.prototype.microseconds=0,Date.prototype.getMicroseconds=function(){return this.microseconds},Date.prototype.setMicroseconds=function(e){return this.setMilliseconds(this.getMilliseconds()+Math.floor(e/1e3)),this.microseconds=e%1e3,this}),$.timepicker.version="1.3.1")}(jQuery);