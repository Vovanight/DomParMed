/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

!function(o){function a(){}o.extend(a.prototype,{name:"SubmissionMysubmissions",options:{msgDelete:"Are you sure you want to delete this submission?"},initialize:function(t,e){this.options=o.extend({},this.options,e);var i=this;t.find(".submissions > *").each(function(){var t=o(this);t.find("h3.toggler:first").bind("click",function(){t.find("div.preview:first").toggleClass("hidden"),"undefined"!=typeof google&&void 0!==google.maps&&o('[id^="googlemaps-"]').each(function(){o(this).data("Googlemaps")&&o(this).Googlemaps("refresh")})})}),t.find("a.delete-item").each(function(){o(this).bind("click",function(t){confirm(i.options.msgDelete)||t.preventDefault()})})}}),o.fn[a.prototype.name]=function(){var i=arguments,n=i[0]?i[0]:null;return this.each(function(){var t,e=o(this);a.prototype[n]&&e.data(a.prototype.name)&&"initialize"!=n?e.data(a.prototype.name)[n].apply(e.data(a.prototype.name),Array.prototype.slice.call(i,1)):!n||o.isPlainObject(n)?(t=new a,a.prototype.initialize&&t.initialize.apply(t,o.merge([e],i)),e.data(a.prototype.name,t)):o.error("Method "+n+" does not exist on jQuery."+a.name)})}}(jQuery),function(o){function a(){}o.extend(a.prototype,{name:"Submission",options:{uri:""},initialize:function(t,e){this.options=o.extend({},this.options,e);var i=this;t.find("div.image a.modal-button").each(function(){o(this).attr("href").match(new RegExp("^"+i.options.uri))||o(this).attr("href",i.options.uri+o(this).attr("href"))})}}),o.fn[a.prototype.name]=function(){var i=arguments,n=i[0]?i[0]:null;return this.each(function(){var t,e=o(this);a.prototype[n]&&e.data(a.prototype.name)&&"initialize"!=n?e.data(a.prototype.name)[n].apply(e.data(a.prototype.name),Array.prototype.slice.call(i,1)):!n||o.isPlainObject(n)?(t=new a,a.prototype.initialize&&t.initialize.apply(t,o.merge([e],i)),e.data(a.prototype.name,t)):o.error("Method "+n+" does not exist on jQuery."+a.name)})}}(jQuery),function(o){function a(){}o.extend(a.prototype,{name:"EditSubmission",options:{groups:[0]},initialize:function(i,t){this.options=o.extend({},this.options,t);var e=this;this.input=i,o.each(["apply","save","save-new"],function(t,e){o("#toolbar-"+e+" a, #toolbar-"+e+" button").bind("validate.adminForm",function(t){""==i.find('input[name="name"]').val()&&(i.find("span.message-name").css("display","block"),t.preventDefault())})}),o("#access").bind("change",function(){e.setTrustedMode()}),this.setTrustedMode()},setTrustedMode:function(){var t=this.input.find("input.trusted");-1!==o.inArray(o("#access").val(),this.options.groups)?(t.attr("disabled","disabled"),t.prop("checked","")):t.removeAttr("disabled")}}),o.fn[a.prototype.name]=function(){var i=arguments,n=i[0]?i[0]:null;return this.each(function(){var t,e=o(this);a.prototype[n]&&e.data(a.prototype.name)&&"initialize"!=n?e.data(a.prototype.name)[n].apply(e.data(a.prototype.name),Array.prototype.slice.call(i,1)):!n||o.isPlainObject(n)?(t=new a,a.prototype.initialize&&t.initialize.apply(t,o.merge([e],i)),e.data(a.prototype.name,t)):o.error("Method "+n+" does not exist on jQuery."+a.name)})}}(jQuery);