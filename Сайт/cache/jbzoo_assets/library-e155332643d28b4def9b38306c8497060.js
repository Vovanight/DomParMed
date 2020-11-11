/* cacheid:5ee10fc4454a1c6da606f6bf29047b540 */
/* media/zoo/applications/jbuniversal/assets/js/libs/browser.min.js */
/**
 * JBZoo Application
 *
 * This file is part of the JBZoo CCK package.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package    Application
 * @license    GPL-2.0
 * @copyright  Copyright (C) JBZoo.com, All rights reserved.
 * @link       https://github.com/JBZoo/JBZoo
 */

;
/*!
 * jQuery Browser Plugin 0.0.7
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 20-01-2015
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],function(b){a(b)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=a(require("jquery")):a(window.jQuery)}(function(a){"use strict";function b(a){void 0===a&&(a=window.navigator.userAgent),a=a.toLowerCase();var b=/(edge)\/([\w.]+)/.exec(a)||/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(ipod)/.exec(a)||/(iphone)/.exec(a)||/(kindle)/.exec(a)||/(silk)/.exec(a)||/(android)/.exec(a)||/(windows phone)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||/(cros)/.exec(a)||/(playbook)/.exec(a)||/(bb)/.exec(a)||/(blackberry)/.exec(a)||[],d={},e={browser:b[5]||b[3]||b[1]||"",version:b[2]||b[4]||"0",versionNumber:b[4]||b[2]||"0",platform:c[0]||""};if(e.browser&&(d[e.browser]=!0,d.version=e.version,d.versionNumber=parseInt(e.versionNumber,10)),e.platform&&(d[e.platform]=!0),(d.android||d.bb||d.blackberry||d.ipad||d.iphone||d.ipod||d.kindle||d.playbook||d.silk||d["windows phone"])&&(d.mobile=!0),(d.cros||d.mac||d.linux||d.win)&&(d.desktop=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv||d.edge){var f="msie";e.browser=f,d[f]=!0}if(d.safari&&d.blackberry){var g="blackberry";e.browser=g,d[g]=!0}if(d.safari&&d.playbook){var h="playbook";e.browser=h,d[h]=!0}if(d.bb){var i="blackberry";e.browser=i,d[i]=!0}if(d.opr){var j="opera";e.browser=j,d[j]=!0}if(d.safari&&d.android){var k="android";e.browser=k,d[k]=!0}if(d.safari&&d.kindle){var l="kindle";e.browser=l,d[l]=!0}if(d.safari&&d.silk){var m="silk";e.browser=m,d[m]=!0}return d.name=e.browser,d.platform=e.platform,d}return window.jQBrowser=b(window.navigator.userAgent),window.jQBrowser.uaMatch=b,a&&(a.browser=window.jQBrowser),window.jQBrowser});
/* media/zoo/applications/jbuniversal/assets/js/libs/cookie.min.js */
/**
 * JBZoo Application
 *
 * This file is part of the JBZoo CCK package.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package    Application
 * @license    GPL-2.0
 * @copyright  Copyright (C) JBZoo.com, All rights reserved.
 * @link       https://github.com/JBZoo/JBZoo
 */

;
(function ($, window, document, undefined) {

    /*! jquery.cookie v1.4.1 | MIT */
    !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
    
})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/libs/sweet-alert.min.js */
/**
 * JBZoo Application
 *
 * This file is part of the JBZoo CCK package.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package    Application
 * @license    GPL-2.0
 * @copyright  Copyright (C) JBZoo.com, All rights reserved.
 * @link       https://github.com/JBZoo/JBZoo
 */

;
!function(e,t,n){function o(e){var t=x(),n=t.querySelector("h2"),o=t.querySelector("p"),r=t.querySelector("button.cancel"),a=t.querySelector("button.confirm");if(n.innerHTML=e.html?e.title:E(e.title).split("\n").join("<br>"),o.innerHTML=e.html?e.text:E(e.text||"").split("\n").join("<br>"),e.text&&I(o),e.customClass)q(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var s=t.getAttribute("data-custom-class");B(t,s),t.setAttribute("data-custom-class","")}if(M(t.querySelectorAll(".sa-icon")),e.type&&!f()){for(var c=!1,l=0;l<h.length;l++)if(e.type===h[l]){c=!0;break}if(!c)return p("Unknown alert type: "+e.type),!1;var u,d=["success","error","warning","info"];-1!==d.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),I(u));var m=C();switch(e.type){case"success":q(u,"animate"),q(u.querySelector(".sa-tip"),"animateSuccessTip"),q(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":q(u,"animateErrorIcon"),q(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":q(u,"pulseWarning"),q(u.querySelector(".sa-body"),"pulseWarningIns"),q(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":m.setAttribute("type",e.inputType),q(t,"show-input"),setTimeout(function(){m.focus(),m.addEventListener("keyup",g.resetInputError)},400)}}if(e.imageUrl){var y=t.querySelector(".sa-icon.sa-custom");y.style.backgroundImage="url("+e.imageUrl+")",I(y);var v=80,b=80;if(e.imageSize){var w=e.imageSize.toString().split("x"),S=w[0],k=w[1];S&&k?(v=S,b=k):p("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}y.setAttribute("style",y.getAttribute("style")+"width:"+v+"px; height:"+b+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?r.style.display="inline-block":M(r),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?a.style.display="inline-block":M(a),e.cancelButtonText&&(r.innerHTML=E(e.cancelButtonText)),e.confirmButtonText&&(a.innerHTML=E(e.confirmButtonText)),e.confirmButtonColor&&(a.style.backgroundColor=e.confirmButtonColor,i(a,e.confirmButtonColor)),t.setAttribute("data-allow-ouside-click",e.allowOutsideClick);var T=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",T),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)}function r(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,r="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),r+=("00"+n).substr(n.length);return r}function a(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function s(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null}function i(e,t){var n=s(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"}function c(){var e=x();H(k(),10),I(e),q(e,"showSweetAlert"),B(e,"hideSweetAlert"),d=t.activeElement;var n=e.querySelector("button.confirm");n.focus(),setTimeout(function(){q(e,"visible")},500);var o=e.getAttribute("data-timer");"null"!==o&&""!==o&&(e.timeout=setTimeout(function(){v.close()},o))}function l(){var e=x(),t=C();B(e,"show-input"),t.value="",t.setAttribute("type",S.inputType),g.resetInputError()}function u(){var e=x();e.style.marginTop=D(x())}function f(){return e.attachEvent&&!e.addEventListener?!0:!1}function p(t){e.console&&e.console.log("SweetAlert: "+t)}var d,m,y,v,g,b=".sweet-alert",w=".sweet-overlay",h=["error","warning","info","success","input","prompt"],S={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#AEDEF4",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text"},x=function(){var e=t.querySelector(b);return e||(j(),e=x()),e},C=function(){var e=x();return e?e.querySelector("input"):void 0},k=function(){return t.querySelector(w)},T=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},q=function(e,t){T(e,t)||(e.className+=" "+t)},B=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(T(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},E=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},A=function(e){e.style.opacity="",e.style.display="block"},I=function(e){if(e&&!e.length)return A(e);for(var t=0;t<e.length;++t)A(e[t])},O=function(e){e.style.opacity="",e.style.display="none"},M=function(e){if(e&&!e.length)return O(e);for(var t=0;t<e.length;++t)O(e[t])},N=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},D=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},H=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)};o()}e.style.display="block"},L=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"};o()},P=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var r=t.createEvent("MouseEvents");r.initEvent("click",!1,!1),n.dispatchEvent(r)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},U=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)},j=function(){var e='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error"><span class="sa-x-mark"><span class="sa-line sa-left"></span><span class="sa-line sa-right"></span></span></div><div class="sa-icon sa-warning"> <span class="sa-body"></span> <span class="sa-dot"></span> </div> <div class="sa-icon sa-info"></div> <div class="sa-icon sa-success"> <span class="sa-line sa-tip"></span> <span class="sa-line sa-long"></span> <div class="sa-placeholder"></div> <div class="sa-fix"></div> </div> <div class="sa-icon sa-custom"></div> <h2>Title</h2><p>Text</p><fieldset><input type="text" tabIndex="3" /><div class="sa-input-error"></div></fieldset> <div class="sa-error-container"><div class="icon">!</div> <p>Not valid!</p></div> <button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',n=t.createElement("div");for(n.innerHTML=e;n.firstChild;)t.body.appendChild(n.firstChild)};v=g=function(){function s(e){var t=b;return"undefined"!=typeof t[e]?t[e]:S[e]}function f(){var e=!0;T(A,"show-input")&&(e=A.querySelector("input").value,e||(e="")),w.doneFunction(e),w.closeOnConfirm&&v.close()}function d(){var e=String(w.doneFunction).replace(/\s/g,""),t="function("===e.substring(0,9)&&")"!==e.substring(9,10);t&&w.doneFunction(!1),w.closeOnCancel&&v.close()}function g(t){var o=t||e.event,r=o.keyCode||o.which;if(-1!==[9,13,32,27].indexOf(r)){for(var a=o.target||o.srcElement,s=-1,c=0;c<L.length;c++)if(a===L[c]){s=c;break}9===r?(a=-1===s?D:s===L.length-1?L[0]:L[s+1],U(o),a.focus(),w.confirmButtonColor&&i(a,w.confirmButtonColor)):13===r?("INPUT"===a.tagName&&(a=D,D.focus()),a=-1===s?D:n):27===r&&w.allowEscapeKey===!0?(a=H,P(a,o)):a=n}}var b=arguments[0];if(q(t.body,"stop-scrolling"),l(),arguments[0]===n)return p("SweetAlert expects at least 1 attribute!"),!1;var w=a({},S);switch(typeof arguments[0]){case"string":w.title=arguments[0],w.text=arguments[1]||"",w.type=arguments[2]||"";break;case"object":if(arguments[0].title===n)return p('Missing "title" argument!'),!1;w.title=arguments[0].title;for(var h=["text","type","customClass","allowOutsideClick","showConfirmButton","showCancelButton","closeOnConfirm","closeOnCancel","timer","confirmButtonColor","cancelButtonText","imageUrl","imageSize","html","animation","allowEscapeKey","inputType"],C=h.length,B=0;C>B;B++){var E=h[B];w[E]=s(E)}w.confirmButtonText=w.showCancelButton?"Confirm":S.confirmButtonText,w.confirmButtonText=s("confirmButtonText"),w.doneFunction=arguments[1]||null;break;default:return p('Unexpected type of argument! Expected "string" or "object", got '+typeof arguments[0]),!1}o(w),u(),c();for(var A=x(),I=function(t){var n=t||e.event,o=n.target||n.srcElement,a=-1!==o.className.indexOf("confirm"),s=-1!==o.className.indexOf("sweet-overlay"),i=T(A,"visible"),c=w.doneFunction&&"true"===A.getAttribute("data-has-done-function");switch(n.type){case"mouseover":a&&w.confirmButtonColor&&(o.style.backgroundColor=r(w.confirmButtonColor,-.04));break;case"mouseout":a&&w.confirmButtonColor&&(o.style.backgroundColor=w.confirmButtonColor);break;case"mousedown":a&&w.confirmButtonColor&&(o.style.backgroundColor=r(w.confirmButtonColor,-.14));break;case"mouseup":a&&w.confirmButtonColor&&(o.style.backgroundColor=r(w.confirmButtonColor,-.04));break;case"focus":var l=A.querySelector("button.confirm"),u=A.querySelector("button.cancel");a?u.style.boxShadow="none":l.style.boxShadow="none";break;case"click":a&&c&&i?f():c&&i||s?d():N(A,o)&&"BUTTON"===o.tagName&&v.close()}},O=A.querySelectorAll("button"),M=0;M<O.length;M++)O[M].onclick=I,O[M].onmouseover=I,O[M].onmouseout=I,O[M].onmousedown=I,O[M].onmouseup=I,O[M].onfocus=I;k().onclick=I;var D=A.querySelector("button.confirm"),H=A.querySelector("button.cancel"),L=A.querySelectorAll("button[tabindex]");m=e.onkeydown,e.onkeydown=g,e.onfocus=function(){e.setTimeout(function(){y!==n&&(y.focus(),y=n)},0)}},v.setDefaults=g.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");a(S,e)},v.close=g.close=function(){var o=x();L(k(),5),L(o,5),B(o,"showSweetAlert"),q(o,"hideSweetAlert"),B(o,"visible");var r=o.querySelector(".sa-icon.sa-success");B(r,"animate"),B(r.querySelector(".sa-tip"),"animateSuccessTip"),B(r.querySelector(".sa-long"),"animateSuccessLong");var a=o.querySelector(".sa-icon.sa-error");B(a,"animateErrorIcon"),B(a.querySelector(".sa-x-mark"),"animateXMark");var s=o.querySelector(".sa-icon.sa-warning");B(s,"pulseWarning"),B(s.querySelector(".sa-body"),"pulseWarningIns"),B(s.querySelector(".sa-dot"),"pulseWarningIns"),B(t.body,"stop-scrolling"),e.onkeydown=m,d&&d.focus(),y=n,clearTimeout(o.timeout)},v.showInputError=g.showInputError=function(e){var t=x(),n=t.querySelector(".sa-input-error");q(n,"show");var o=t.querySelector(".sa-error-container");q(o,"show"),o.querySelector("p").innerHTML=e,t.querySelector("input").focus()},v.resetInputError=g.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=x(),n=t.querySelector(".sa-input-error");B(n,"show");var o=t.querySelector(".sa-error-container");B(o,"show")},"function"==typeof define&&define.amd?define(function(){return v}):"undefined"!=typeof module&&module.exports?module.exports=v:"undefined"!=typeof e&&(e.sweetAlert=e.swal=v)}(window,document);
/* media/zoo/applications/jbuniversal/assets/js/helper.js */
/**
 * JBZoo Application
 *
 * This file is part of the JBZoo CCK package.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package    Application
 * @license    GPL-2.0
 * @copyright  Copyright (C) JBZoo.com, All rights reserved.
 * @link       https://github.com/JBZoo/JBZoo
 */

;
(function ($, window, document, undefined) {

    var JBZooHelper = function () {
    };

    var globalVars = {};

    $.extend(JBZooHelper.prototype, {

        /**
         * General debug flag
         */
        DEBUG: true,

        /**
         * Discuss at: http://phpjs.org/functions/number_format/
         * @param number
         * @param decimals
         * @param dec_point
         * @param thousands_sep
         * @returns {string}
         */
        numberFormat: function (number, decimals, dec_point, thousands_sep) {

            number = (number + '').replace(/[^0-9+\-Ee.]/g, '');

            var n = !isFinite(+number) ? 0 : +number,
                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                s = '',
                toFixedFix = function (n, prec) {
                    var k = Math.pow(10, prec);
                    return '' + (Math.round(n * k) / k)
                            .toFixed(prec);
                };

            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');

            if (s[0].length > 3) {
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
            }

            if ((s[1] || '')
                    .length < prec) {
                s[1] = s[1] || '';
                s[1] += new Array(prec - s[1].length + 1)
                    .join('0');
            }

            return s.join(dec);
        },

        /**
         * Event logger to browser console
         * @param type String
         * @param message String
         * @param vars mixed
         */
        logger: function (type, message, vars) {

            var $jbzoo = this;

            if (!$jbzoo.DEBUG || typeof console == 'undefined') {
                return false;
            }

            var postfix = "\t\tvars:";

            if (type == 'e') { // error
                vars !== undefined ? console.error(message + postfix, vars) : console.error(message);

            } else if (type == 'w') { // warning
                vars !== undefined ? console.warn(message + postfix, vars) : console.warn(message);

            } else if (type == 'i') { // information
                vars !== undefined ? console.info(message + postfix, vars) : console.info(message);

            } else if (type == 'l') { // log
                vars !== undefined ? console.log(message + postfix, vars) : console.log(message);

            } else {
                vars !== undefined ? console.log(message + postfix, vars) : console.log(message);
            }
        },

        /**
         * Check is variable empty
         * @link http://phpjs.org/functions/empty:392
         * @param mixedVar
         * @return {Boolean}
         */
        empty: function (mixedVar) {
            var $jbzoo = this,
                undef, key, i, len;
            var emptyValues = [undef, null, false, 0, '', '0'];

            for (i = 0, len = emptyValues.length; i < len; i++) {
                if (mixedVar === emptyValues[i]) {
                    return true;
                }
            }

            if (typeof mixedVar === 'object') {
                if ($jbzoo.countProps(mixedVar) == 0) {
                    return true;
                }
            }

            return false;
        },

        /**
         * Count object properties
         * @param object
         * @return {Number}
         */
        countProps: function (object) {
            var count = 0;
            for (var property in object) {
                if (object.hasOwnProperty(property)) {
                    count++;
                }
            }
            return count;
        },

        /**
         * Backtrace for debug
         * Function may use dump function for show backtrace as string
         * Work only if environment is "development"
         * @param asString
         */
        trace: function (asString) {
            var $jbzoo = this;

            if (!$jbzoo.DEBUG || typeof console == 'undefined') {
                return false;
            }

            if ($jbzoo.empty(asString)) {
                asString = false;
            }

            var getStackTrace = function () {
                var obj = {};
                Error.captureStackTrace(obj, getStackTrace);
                return obj.stack;
            };

            if (asString) {
                $jbzoo.dump(getStackTrace(), 'trace', false);
            } else {
                if (typeof console != 'undefined') {
                    console.trace();
                }
            }
        },

        /**
         * Check is value in array
         * @param needle
         * @param haystack
         * @param strict
         * @return {Boolean}
         */
        in_array: function (needle, haystack, strict) {

            var found = false, key;

            strict = !!strict;

            for (key in haystack) {
                if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
                    found = true;
                    break;
                }
            }

            return found;
        },

        /**
         * Alias for console log + backtrace
         * For debug only
         * Work only if environment is "development"
         * @param vars mixed
         * @param name String
         * @param showTrace Boolean
         * @return {Boolean}
         */
        dump: function (vars, name, showTrace) {

            // get type
            if (typeof vars == 'string' || typeof vars == 'array') {
                var type = ' (' + typeof(vars) + ', ' + vars.length + ')';
            } else {
                var type = ' (' + typeof(vars) + ')';
            }

            // wrap in vars quote if string
            if (typeof vars == 'string') {
                vars = '"' + vars + '"';
            }

            // get var name
            if (typeof name == 'undefined') {
                name = '...' + type + ' = ';
            } else {
                name += type + ' = ';
            }

            // is show trace in console
            if (typeof showTrace == 'undefined') {
                showTrace = false;
            }

            // dump var
            if (window.parent && window.parent.console && window.parent.console.log) {
                window.parent.console.log(name, vars);
            }

            // show console
            if (showTrace && typeof console.trace != 'undefined') {
                console.trace();
            }

            return true;
        },

        /**
         * Check is string numeric
         * @param mixed
         * @returns {boolean}
         */
        isNumeric: function (mixed) {
            return (typeof(mixed) === 'number' || typeof(mixed) === 'string') && mixed !== '' && !isNaN(mixed);
        },

        /**
         * Parse integer from string
         * Discuss at: http://phpjs.org/functions/intval/
         * @param mixed
         * @returns {Number}
         */
        toInt: function (mixed, base) {
            var type = typeof mixed;

            if (type === 'boolean') {
                return +mixed;

            } else if (type === 'string') {
                mixed = mixed.replace(/\s/g, '');
                var tmp = parseInt(mixed, base || 10);
                return (isNaN(tmp) || !isFinite(tmp)) ? 0 : tmp;

            } else if (type === 'number' && isFinite(mixed)) {
                return mixed | 0;

            } else {
                return 0;
            }
        },

        /**
         * Discuss at: http://phpjs.org/functions/is_int/
         * @param mixed
         * @returns {boolean}
         */
        isInt: function (mixed) {
            return mixed === +mixed && isFinite(mixed) && !(mixed % 1);
        },

        /**
         * Parse integer from string
         * @param mixed
         * @returns {Number}
         */
        toFloat: function (mixed) {
            mixed = $.trim(mixed);
            mixed = mixed.replace(/\s/g, '');
            mixed = mixed.replace(',', '.');
            mixed = (parseFloat(mixed) || 0);
            mixed = JBZoo.round(mixed, 9); // hack for numbers like "0.30000000000000004"
            return mixed;
        },

        /**
         * Discuss at: http://phpjs.org/functions/round/
         * @param value
         * @param precision
         * @param mode
         * @returns {number}
         */
        round: function (value, precision, mode) {
            var m, f, isHalf, sgn; // helper variables
            // making sure precision is integer
            precision |= 0;
            m = Math.pow(10, precision);
            value *= m;

            // sign of the number
            sgn = (value > 0) | -(value < 0);
            isHalf = value % 1 === 0.5 * sgn;
            f = Math.floor(value);

            if (isHalf) {
                switch (mode) {
                    case 'ROUND_HALF_DOWN':
                        // rounds .5 toward zero
                        value = f + (sgn < 0);
                        break;
                    case 'ROUND_HALF_EVEN':
                        // rouds .5 towards the next even integer
                        value = f + (f % 2 * sgn);
                        break;
                    case 'ROUND_HALF_ODD':
                        // rounds .5 towards the next odd integer
                        value = f + !(f % 2);
                        break;
                    default:
                        // rounds .5 away from zero
                        value = f + (sgn > 0);
                }
            }

            return (isHalf ? value : Math.round(value)) / m;
        },

        /**
         * @param min
         * @param max
         * @returns {*}
         */
        rand: function (min, max) {
            var $jbzoo = this,
                argc = arguments.length;

            if (argc === 0) {
                min = 0;
                max = 2147483647;

            } else if (argc === 1) {
                $jbzoo.error('Warning: rand() expects exactly 2 parameters, 1 given');

            } else {
                min = $jbzoo.toInt(min);
                max = $jbzoo.toInt(max);
            }

            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        /**
         * Discuss at: http://phpjs.org/functions/implode/
         * @param glue
         * @param pieces
         * @returns {*}
         */
        implode: function (glue, pieces) {

            var i = '',
                retVal = '',
                tGlue = '';

            if (arguments.length === 1) {
                pieces = glue;
                glue = '';
            }

            if (typeof pieces === 'object') {
                if (Object.prototype.toString.call(pieces) === '[object Array]') {
                    return pieces.join(glue);
                }
                for (i in pieces) {
                    retVal += tGlue + pieces[i];
                    tGlue = glue;
                }
                return retVal;
            }

            return pieces;
        },

        /**
         * Discuss at: http://phpjs.org/functions/explode/
         * @param delimiter
         * @param string
         * @param limit
         * @returns {*}
         */
        explode: function explode(delimiter, string, limit) {

            if (arguments.length < 2 || typeof delimiter === 'undefined' || typeof string === 'undefined') {
                return null;
            }

            if (delimiter === '' || delimiter === false || delimiter === null) {
                return false;
            }

            if (typeof delimiter === 'function'
                || typeof delimiter === 'object'
                || typeof string === 'function'
                || typeof string === 'object'
            ) {
                return {0: ''};
            }

            if (delimiter === true) delimiter = '1';

            // Here we go...
            delimiter += '';
            string += '';

            var s = string.split(delimiter);

            if (typeof limit === 'undefined') return s;

            // Support for limit
            if (limit === 0) limit = 1;

            // Positive limit
            if (limit > 0) {
                if (limit >= s.length) return s;
                return s.slice(0, limit - 1)
                    .concat([s.slice(limit - 1)
                        .join(delimiter)
                    ]);
            }

            // Negative limit
            if (-limit >= s.length) return [];

            s.splice(s.length + limit);
            return s;
        },

        /**
         * Discuss at: http://phpjs.org/functions/strip_tags/
         * @param input
         * @param allowed
         * @returns {string}
         */
        stripTags: function (input, allowed) {
            allowed = (((allowed || '') + '')
                .toLowerCase()
                .match(/<[a-z][a-z0-9]*>/g) || [])
                .join('');

            var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi,
                result = input
                    .replace(commentsAndPhpTags, '')
                    .replace(tags, function ($0, $1) {
                        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
                    });

            result = $.trim(result);

            return result;
        },

        /**
         * Show custom errors
         * @param message
         */
        error: function (message) {
            $.error('JBZoo / ' + message);
        },

        /**
         * Deprecated! Create own JBZoo.widget() and call this.ajax()
         * @param options
         */
        ajax: function (options) {
            $('body').JBZoo().JBZoo('ajax', options);
            //$jbzoo.error('Use widget extending, JBZoo must be parent!');
        },

        /**
         * Show binded events
         * @param selector
         */
        dumpBinds: function (selector) {
            $.each($(selector).data('events'), function (eventName, event) {
                dump(event, eventName);
            });
        },

        /**
         * @param varName
         * @param value
         */
        addVar: function (varName, value) {
            globalVars[varName] = value;
        },

        mergeVar:function(varName, value) {
            globalVars[varName] = (typeof globalVars[varName] == 'undefined' ? {} : globalVars[varName]);
            globalVars[varName] = $.extend(true, {}, globalVars[varName], value);
        },

        /**
         *
         * @param varName
         * @param defaultValue
         * @returns {*}
         */
        getVar: function (varName, defaultValue) {

            if (!this.empty(globalVars[varName])) {
                return globalVars[varName];
            }

            if (typeof defaultValue == 'undefined') {
                return undefined;
            }

            return defaultValue;
        },

        /**
         * Simple system message like alert
         * @param message
         * @param closeCallback
         * @param params
         */
        alert: function (message, closeCallback, params) {
            $('body').JBZoo().JBZoo('alert', message, closeCallback, params);
        },

        /**
         * Confirm dialogbox
         * @param message
         * @param yesCallback
         * @param noCallback
         * @param context
         */
        confirm: function (message, yesCallback, noCallback, context) {
            $('body').JBZoo().JBZoo('confirm', message, yesCallback, noCallback, context);
        }

    });

    // init JS helper (deprecated)
    window.JBZoo = new JBZooHelper();

    // add dumper
    window.dump = function () {
        if (JBZoo.DEBUG) {
            JBZoo.dump.apply(this, arguments)
        }
    };

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/widget.js */
/**
 * JBZoo Application
 *
 * This file is part of the JBZoo CCK package.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package    Application
 * @license    GPL-2.0
 * @copyright  Copyright (C) JBZoo.com, All rights reserved.
 * @link       https://github.com/JBZoo/JBZoo
 */

;
(function ($, window, document, undefined) {

    var instanceId       = 0,
        widgetId         = 0,
        widgets          = {},
        parentSelector   = '{element}',
        documentSelector = '{document}',
        closestSelector  = '{closest';

    /**
     * JBZoo widget factory
     */
    $.extend(JBZoo.constructor.prototype, {

        /**
         * Widget creator
         * @param widgetName
         * @param defaults
         * @param methods
         */
        widget: function (widgetName, defaults, methods) {

            var $jbzoo     = this,
                eventList  = {},
                widgetPath = widgetName.split('.'),
                widgetName = widgetName.replace(/\./g, '');

            $.each(methods, function (key, method) {

                if (key.indexOf(' ') > 0) {
                    // collecting events
                    var keyParts = key.match(/^(.*?)\s(.*)/);
                    if (!$jbzoo.empty(keyParts[1]) && $.isFunction(method)) {
                        var trigger = $.trim(keyParts[1]),
                            target  = $.trim(keyParts[2]);

                        eventList[trigger + ' ' + target] = {
                            'trigger': trigger,
                            'target' : target,
                            'action' : method
                        };

                        delete methods[key];
                    }
                }
            });

            if (widgets[widgetName]) {
                $jbzoo.error('Widget \"' + widgetName + '\" already has defined!');
            }

            widgets[widgetName] = function (element, options) {
                var $this   = this;

                // system
                instanceId++;
                $this._id   = instanceId;
                $this._name = widgetName;

                // for widget
                $this.el      = $(element);
                $this.options = $.extend(true, {}, $this._defaults, options);

                var oldId = $this.el.attr('data-widgetid');

                oldId = oldId ? ',' + $this._id : $this._id;
                $this.el.attr('data-widgetid', oldId);

                // init
                $this._initEvents(this._eventList, this);
                $this.init(this);

                // onCreate event
                if ($.isFunction(this.options.onCreate)) {
                    $this.options.onCreate.apply($this);
                }
            };

            // widget extending
            var extendedDefaultList = {
                    onCreate : $.noop,
                    onDestroy: $.noop
                },
                extendedEventList   = {},
                lastParent          = '';

            if ($jbzoo.countProps(widgetPath) > 1) {
                var parentName = '';

                $.each(widgetPath, function (n, name) {
                    parentName += $.trim(name);

                    if (widgets[parentName] && widgetName != parentName) {
                        lastParent = parentName;

                        $jbzoo.classExtend(widgets[widgetName], widgets[parentName]);

                        extendedEventList   = $.extend(true, extendedEventList, widgets[parentName].prototype._eventList);
                        extendedDefaultList = $.extend({}, extendedDefaultList, widgets[parentName].prototype._defaults);

                    } else if (n + 1 != widgetPath.length) {
                        $.error('Widget "' + parentName + '" is undefined!');
                    }
                });
            }

            // merge
            widgetId++;
            $.extend(widgets[widgetName].prototype,
                {
                    /**
                     * jQuery for widget's element
                     */
                    el: false,

                    /**
                     * Ready use options
                     */
                    options: {},

                    /**
                     * Debug history
                     */
                    _logs: [],

                    /**
                     * internal timers
                     */
                    _timers: {},

                    /**
                     * Only for class extending
                     */
                    _eventList: eventList,

                    /**
                     * Add message to log history
                     * @param message
                     */
                    _log: function (message) {
                        this._logs.push(message);
                        return this._logs;
                    },

                    /**
                     * Custom constructor
                     * @param $this
                     * @private
                     */
                    init: $.noop,

                    /**
                     * Custom destructor
                     */
                    _destroy: $.noop,

                    /**
                     * System destructor
                     */
                    destroy: function () {
                        var $this = this;

                        $this._destroy.apply(this, arguments);
                        $this.off('');
                        $this.el.removeData(this._name);
                        if ($.isFunction(this.options.onDestroy)) {
                            this.options.onDestroy.apply($this);
                        }
                    },

                    /**
                     * Auto init events
                     * @param eventList
                     * @param $this
                     */
                    _initEvents: function (eventList, $this) {
                        if (!$jbzoo.empty(eventList)) {
                            $.each(eventList, function (n, eventData) {
                                $this.on(eventData.trigger, eventData.target, eventData.action);
                            });
                        }
                    },

                    /**
                     * For easy selecting with widget context
                     * @param selector
                     * @returns jQuery
                     */
                    $: function (selector) {
                        if (selector == parentSelector) {
                            return this.el;
                        }

                        if (selector.indexOf(documentSelector + ' ') === 0) {
                            selector = selector.replace(documentSelector + ' ', '');
                            return $(selector);
                        }

                        return $(selector, this.el);
                    },

                    /**
                     * Add actions for DOM with delegate
                     * @param eventName
                     * @param selector
                     * @param callback
                     */
                    on: function (eventName, selector, callback) {

                        var $this         = this,
                            eventCallback = function (event) {

                                var args    = arguments,
                                    newArgs = [event, $this];

                                if (args.length > 1) {
                                    var i = 0;
                                    while (args[i]) {
                                        (i > 0) && newArgs.push(args[i]);
                                        i++;
                                    }
                                }

                                return callback.apply(this, newArgs);
                            };

                        if (eventName.indexOf('.') == -1) {
                            eventName = eventName + '.' + $this._name;
                        }

                        if (selector instanceof jQuery) {
                            return $(selector).on(eventName, eventCallback);

                        } else if (selector == parentSelector) {
                            return $(this.el).on(eventName, eventCallback);

                        } else if (selector.indexOf(documentSelector + ' ') == 0) {
                            selector = selector.replace(documentSelector + ' ', '');
                            return $(selector).on(eventName, eventCallback);

                        } else if (selector.indexOf(closestSelector + ' ') == 0) {
                            selector = selector.replace(closestSelector + ' ', '');
                            selector = selector.replace('}', '');

                            return $(this.el).closest(selector).on(eventName, eventCallback);

                        } else {

                            return $(this.el)
                                .on(eventName, selector, eventCallback)
                                .find(selector);
                        }
                    },

                    /**
                     * Disable DOM events
                     * @param eventName
                     * @param selector
                     * @returns {*}
                     */
                    off: function (eventName, selector) {

                        var $this     = this,
                            eventName = eventName + '.' + $this._name;

                        if (!selector || selector == parentSelector) {
                            return $(this.el).off(eventName);

                        } else {
                            return $(this.el).off(eventName, selector);
                        }
                    },

                    /**
                     * Manual event calling
                     * @param trigger
                     * @param selector
                     * @param data
                     * @private
                     */
                    _trigger: function (trigger, selector, data) {

                        if (arguments.length == 1) {
                            data     = [];
                            selector = parentSelector;

                        } else if (arguments.length == 2) {
                            data     = arguments[1];
                            selector = parentSelector;

                        } else {
                            selector = arguments[1] || parentSelector;
                        }

                        if (trigger.indexOf('.') == -1) {
                            trigger = trigger + '.' + this._name;
                        }

                        this.$(selector).trigger(trigger, data);
                    },

                    /**
                     * @param handler
                     * @param delay
                     * @returns {number}
                     * @private
                     */
                    _delay: function (handler, delay, timerName) {

                        var $this                = this;
                        timerName                = timerName || 'default';

                        clearTimeout($this._timers[timerName]);
                        $this._timers[timerName] = setTimeout(function () {
                            return (typeof handler === "string" ? $this[handler] : handler ).apply($this, arguments);
                        }, delay || 0);

                        return $this._timers[timerName];
                    },

                    /**
                     * -->Experimental<-- feature!!!
                     * @param method
                     * @param args
                     * @returns {*}
                     */
                    _parent: function (method, args) {
                        if (widgets[this._parentName]) {
                            return widgets[this._parentName].prototype[method].apply(this, args);
                        }
                    }

                },
                widgets[widgetName].prototype,
                methods,
                {
                    _widgetId  : widgetId,
                    _parentName: lastParent,
                    _defaults  : $.extend(true, {}, extendedDefaultList, defaults),
                    _eventList : $.extend({}, extendedEventList, eventList)
                }
            );

            // plugin initialize (HANDS OFF!!!)
            $.fn[widgetName] = function (options, isComplex) {

                var args        = arguments,
                    method      = (args[0] && typeof args[0] == 'string') ? args[0] : null,
                    returnValue = this;

                if (method && method.indexOf('_') === 0) {
                    $jbzoo.error('Method \"jQuery.' + widgetName + '.' + method + '\" is protected!');
                }

                if (widgetName.toLowerCase() == 'jbzooprice' || widgetName.toLowerCase().indexOf('jbzoopriceelement') === 0) {
                    var $element = $(this);

                    if (widgets[widgetName].prototype[method] && $element.data(widgetName) && method != "init") {

                        methodValue = $element.data(widgetName)[method].apply(
                            $element.data(widgetName),
                            Array.prototype.slice.call(args, 1)
                        );

                        if (methodValue !== $element.data(widgetName) && methodValue !== undefined) {

                            returnValue = methodValue && methodValue.jquery ?
                                returnValue.pushStack(methodValue.get()) :
                                methodValue;

                            return false;
                        }


                    } else if ((!method || $.isPlainObject(method))) {
                        $element.data(widgetName, new widgets[widgetName]($element, options));

                    } else if (method) {
                        $jbzoo.error("Method \"" + method + "\" does not exist on jQuery." + widgetName);
                    }

                }
                else {

                    this.each(function () {
                        var element  = this,
                            $element = $(this);

                        if (widgets[widgetName].prototype[method] && $element.data(widgetName) && method != "init") {

                            methodValue = $element.data(widgetName)[method].apply(
                                $element.data(widgetName),
                                Array.prototype.slice.call(args, 1)
                            );

                            if (methodValue !== $element.data(widgetName) && methodValue !== undefined) {

                                returnValue = methodValue && methodValue.jquery ?
                                    returnValue.pushStack(methodValue.get()) :
                                    methodValue;

                                return false;
                            }


                        } else if ((!method || $.isPlainObject(method)) && (!$.data(element, widgetName))) {
                            $element.data(widgetName, new widgets[widgetName](element, options));

                        } else if (method) {
                            $jbzoo.error("Method \"" + method + "\" does not exist on jQuery." + widgetName);
                        }
                    });
                }
                // chain jQuery functions
                return returnValue;

            };
        },

        /**
         * Prototype class extending
         * @param Child
         * @param Parent
         */
        classExtend: function (Child, Parent) {
            var JBZooObject             = function () {
            };

            $.extend(JBZooObject.prototype, Child.prototype, Parent.prototype);
            Child.prototype             = new JBZooObject;
            Child.prototype.constructor = Child;
            Child.parent                = Parent.prototype
        },

        /**
         * Check is Widget exists
         * @param widgetName
         * @returns {boolean}
         */
        isWidgetExists: function (widgetName) {
            return !JBZoo.empty($.fn[widgetName]) || $.isFunction($[widgetName]);
        }

    });

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/jbzoo.js */
/**
 * JBZoo Application
 *
 * This file is part of the JBZoo CCK package.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package    Application
 * @license    GPL-2.0
 * @copyright  Copyright (C) JBZoo.com, All rights reserved.
 * @link       https://github.com/JBZoo/JBZoo
 */

;
(function ($, window, document, undefined) {

    var globalAjaxId = 0;

    JBZoo.widget('JBZoo', {}, {

        /**
         * Link to global helper
         */
        jbzoo: window.JBZoo,

        /**
         * Current ajax status
         */
        _isAjax: false,

        /**
         * Ajax auto locker for multi ajax
         */
        _isAjaxLocking: false,

        /**
         * Widget fire on ajax start
         */
        _onAjaxStart: function (options) {
            var $target = (options.target) ? $(options.target) : this.el;
            $target.addClass('jbloading');
        },

        /**
         * Widget fire on ajax end
         */
        _onAjaxStop: function (options, args) {
            var $target = (options.target) ? $(options.target) : this.el;
            $target.removeClass('jbloading');
        },

        /**
         * Custom ajax handler
         * @param options = {
         *     'url'     : 'index.php?format=raw&tmpl=component',
         *     'data'    : {},
         *     'dataType': 'json',
         *     'success' : false,
         *     'error'   : false,
         *     'onFatal' : function () {}
         * }
         */
        ajax: function (options) {

            var $this = this;

            globalAjaxId++;

            if ($this._isAjaxLocking && $this._isAjax) {
                JBZoo.logger('i', 'ajax::' + globalAjaxId + ' locked!');
                return $this;
            }

            $this._isAjax = true;
            $.isFunction($this._onAjaxStart) && $this._onAjaxStart.apply($this, [options]);

            //JBZoo.logger('w', 'ajax::' + globalAjaxId + ' ->', options);

            var options = $.extend(true, {}, {
                'url'     : 'index.php?format=raw&tmpl=component',
                'data'    : {
                    'rand'  : JBZoo.rand(100, 999), // forced no cache
                    'option': 'com_zoo',
                    'tmpl'  : 'component',
                    'format': 'raw'
                },
                'target'  : false,
                'dataType': 'json',
                'success' : $.noop,
                'error'   : $.noop,
                'onFatal' : function (responce) {
                    if (JBZoo.DEBUG) {
                        JBZoo.logger('e', 'ajax(' + globalAjaxId + ') ->', responce[0].responseText);
                    } else {
                        $this.error('ajax(' + globalAjaxId + ') response no parse');
                    }
                }
            }, options);

            // check url
            if (JBZoo.empty(options.url)) {
                $this._isAjax = false;
                $.isFunction($this._onAjaxStop) && $this._onAjaxStop.apply($this, [options]);
                $this.error("ajax(" + globalAjaxId + ") url is no set!");
                return;
            }

            // jQuery ajax
            $.ajax({
                'url'     : options.url,
                'data'    : options.data,
                'dataType': options.dataType,
                'type'    : 'POST',
                'cache'   : false,
                'headers' : {
                    "cache-control": "no-cache"
                },
                'success' : function (data) {

                    // inner flag & callback
                    $this._isAjax = false;

                    if (typeof data == 'string') {
                        data = $.trim(data);
                    }

                    if (options.dataType == 'json') {
                        //JBZoo.logger('i', 'ajax::' + globalAjaxId + ' <-', data);

                        if (data.result && $.isFunction(options.success)) {
                            options.success.apply($this, arguments);

                        } else if (!data.result && $.isFunction(options.error)) {
                            options.error.apply($this, arguments);
                        }

                    } else if ($.isFunction(options.success)) {
                        options.success.apply($this, arguments);
                    }

                    $.isFunction($this._onAjaxStop) && $this._onAjaxStop.apply($this, [options, arguments]);

                },

                'error': function () {
                    // inner flag & callback
                    $this._isAjax = false;
                    $.isFunction($this._onAjaxStop) && $this._onAjaxStop.apply($this, [options, arguments]);

                    options.onFatal(arguments);
                }
            });
        },

        /**
         * Get data from parent or nested element
         * @param key
         * @param selector
         * @returns {*}
         */
        data: function (key, selector) {
            if (selector) {
                return this.$(selector).data(key);
            }
            return this.el.data(key);
        },

        /**
         * Get attr from parent or nested element
         * @param attr
         * @param selector
         * @returns {*}
         */
        attr: function (attr, selector) {
            if (selector) {
                return this.$(selector).attr(attr);
            }
            return this.el.attr(attr);
        },

        /**
         * Plugin fatal error
         * @param message
         */
        error: function (message) {
            return JBZoo.error(this._name + ': ' + message);
        },

        /**
         * Simple system message like alert
         * @param message
         * @param closeCallback
         * @param params
         */
        alert: function (message, closeCallback, params) {
            
            var $this = this,
                _swal = $.isFunction(window.parent.swal) ? window.parent.swal : swal;
            
            if ($.isFunction(_swal)) {
                params = $.extend(true, {}, {
                    html             : true,
                    title            : message,
                    //animation        : false,
                    allowOutsideClick: true,
                    confirmButtonText: JBZoo.getVar('JBZOO_DIALOGBOX_OK', 'OK')
                }, $this._def(params, {}));

                _swal(params, closeCallback);

            } else {
                message = JBZoo.stripTags(message);
                alert(message);
                closeCallback()
            }
        },

        /**
         * Confirm dialogbox
         * @param message
         * @param yesCallback
         * @param noCallback
         * @param context
         */
        confirm: function (message, yesCallback, noCallback, context) {

            var $this = this,
                _swal = $.isFunction(window.parent.swal) ? window.parent.swal : swal;

            noCallback = noCallback || $.noop;
            yesCallback = yesCallback || $.noop;
            
            if ($.isFunction(_swal)) {
                _swal({
                    html             : true,
                    title            : message,
                    //animation        : false,
                    showCancelButton : true,
                    closeOnConfirm   : true,
                    closeOnCancel    : true,
                    allowOutsideClick: false,
                    confirmButtonText: JBZoo.getVar('JBZOO_DIALOGBOX_OK', 'OK'),
                    cancelButtonText : JBZoo.getVar('JBZOO_DIALOGBOX_CANCEL', 'Cancel')
                },
                function (isConfirm) {
                    if (isConfirm) {
                        if ($.isFunction(yesCallback)) {
                            yesCallback.apply(context)
                        }
                    } else {
                        if ($.isFunction(noCallback)) {
                            noCallback.apply(context)
                        }
                    }
                });

            } else {
                message = JBZoo.stripTags(message);
                if (confirm(message)) {
                    $.isFunction(yesCallback) && yesCallback.apply(context);
                } else {
                    $.isFunction(noCallback) && noCallback.apply(context);
                }
            }
        },

        /**
         * Batch options setting
         * @param options
         * @returns {*}
         */
        setOptions: function (options) {
            var key;
            for (key in options) {
                this._setOption(key, options[key]);
            }
            return this;
        },

        /**
         * Set one option
         * @param key
         * @param value
         * @returns {*}
         */
        setOption: function (key, value) {
            this.options[key] = value;
            return this;
        },

        /**
         * Get option value
         * @param key
         * @returns {*}
         */
        getOption: function (key) {
            return this.options[key];
        },

        /**
         * Get option value
         * @returns {*}
         */
        getOptions: function () {
            return this.options;
        },

        /**
         * @param key
         * @returns String
         */
        _: function (key) {
            return key;
        },

        /**
         * Check and return default value
         * @param value
         * @param defaultValue
         * @returns {*}
         * @private
         */
        _def: function (value, defaultValue) {
            return typeof value !== 'undefined' ? value : defaultValue;
        },

        /**
         * Save var in browser cookie
         * @param key
         * @param value
         * @param namespace
         */
        setCookie: function (key, value, namespace) {

            if (!JBZoo.isWidgetExists('cookie')) {
                return;
            }

            var $this = this,
                ns = $this._def(namespace, $this._name);

            $.cookie(ns + '_' + key, value, {
                'path'   : '/',
                'expires': 365
            });
        },

        /**
         * Get var from browser cookie
         * @param key
         * @param defaultVal
         * @param namespace
         * @returns {*}
         */
        getCookie: function (key, defaultVal, namespace) {

            if (!JBZoo.isWidgetExists('cookie')) {
                return;
            }

            var $this = this,
                ns = $this._def(namespace, $this._name),
                cookieKey = $.cookie(ns + '_' + key);

            return this._def(cookieKey, defaultVal);
        },

        /**
         * Check key name for events
         * @param event
         * @param keyName
         * @returns {Boolean}
         * @private
         */
        _key: function (event, keyName) {
            var key = event.which,
                map = {
                    'enter'      : [13],
                    'arrow-left' : [37],
                    'arrow-top'  : [38],
                    'arrow-right': [39],
                    'arrow-down' : [40]
                };

            keyName = $.trim(keyName.toLowerCase());

            return JBZoo.in_array(key, map[keyName]);
        }

    });

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/libs/uikit.min.js */
/**
 * JBZoo Application
 *
 * This file is part of the JBZoo CCK package.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package    Application
 * @license    GPL-2.0
 * @copyright  Copyright (C) JBZoo.com, All rights reserved.
 * @link       https://github.com/JBZoo/JBZoo
 */

;
/*! UIkit 2.18.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){if("function"==typeof define&&define.amd&&define("uikit",function(){var i=window.UIkit||t(window,window.jQuery,window.document);return i.load=function(t,e,n,o){var s,a=t.split(","),r=[],c=(o.config&&o.config.uikit&&o.config.uikit.base?o.config.uikit.base:"").replace(/\/+$/g,"");if(!c)throw new Error("Please define base path to UIkit in the requirejs config.");for(s=0;s<a.length;s+=1){var l=a[s].replace(/\./g,"/");r.push(c+"/components/"+l)}e(r,function(){n(i)})},i}),!window.jQuery)throw new Error("UIkit requires jQuery");window&&window.jQuery&&t(window,window.jQuery,window.document)}(function(t,i,e){"use strict";var n={},o=window.UIkit;if(n.version="2.18.0",n.noConflict=function(){return o&&(window.UIkit=o,i.UIkit=o,i.fn.uk=o.fn),n},n.prefix=function(t){return t},n.$=i,n.$doc=n.$(document),n.$win=n.$(window),n.$html=n.$("html"),n.fn=function(t,e){var o=arguments,s=t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),a=s[1],r=s[2];return n[a]?this.each(function(){var t=i(this),s=t.data(a);s||t.data(a,s=n[a](this,r?void 0:e)),r&&s[r].apply(s,Array.prototype.slice.call(o,1))}):(i.error("UIkit component ["+a+"] does not exist."),this)},n.support={},n.support.transition=function(){var t=function(){var t,i=e.body||e.documentElement,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==i.style[t])return n[t]}();return t&&{end:t}}(),n.support.animation=function(){var t=function(){var t,i=e.body||e.documentElement,n={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(t in n)if(void 0!==i.style[t])return n[t]}();return t&&{end:t}}(),n.support.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},n.support.touch="ontouchstart"in window&&navigator.userAgent.toLowerCase().match(/mobile|tablet/)||t.DocumentTouch&&document instanceof t.DocumentTouch||t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints>0||t.navigator.pointerEnabled&&t.navigator.maxTouchPoints>0||!1,n.support.mutationobserver=t.MutationObserver||t.WebKitMutationObserver||null,n.Utils={},n.Utils.str2json=function(t,i){try{return i?JSON.parse(t.replace(/([\$\w]+)\s*:/g,function(t,i){return'"'+i+'":'}).replace(/'([^']+)'/g,function(t,i){return'"'+i+'"'})):new Function("","var json = "+t+"; return JSON.parse(JSON.stringify(json));")()}catch(e){return!1}},n.Utils.debounce=function(t,i,e){var n;return function(){var o=this,s=arguments,a=function(){n=null,e||t.apply(o,s)},r=e&&!n;clearTimeout(n),n=setTimeout(a,i),r&&t.apply(o,s)}},n.Utils.removeCssRules=function(t){var i,e,n,o,s,a,r,c,l,u;t&&setTimeout(function(){try{for(u=document.styleSheets,o=0,r=u.length;r>o;o++){for(n=u[o],e=[],n.cssRules=n.cssRules,i=s=0,c=n.cssRules.length;c>s;i=++s)n.cssRules[i].type===CSSRule.STYLE_RULE&&t.test(n.cssRules[i].selectorText)&&e.unshift(i);for(a=0,l=e.length;l>a;a++)n.deleteRule(e[a])}}catch(h){}},0)},n.Utils.isInView=function(t,e){var o=i(t);if(!o.is(":visible"))return!1;var s=n.$win.scrollLeft(),a=n.$win.scrollTop(),r=o.offset(),c=r.left,l=r.top;return e=i.extend({topoffset:0,leftoffset:0},e),l+o.height()>=a&&l-e.topoffset<=a+n.$win.height()&&c+o.width()>=s&&c-e.leftoffset<=s+n.$win.width()?!0:!1},n.Utils.checkDisplay=function(t,e){var o=n.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]",t||document);return t&&!o.length&&(o=i(t)),o.trigger("display.uk.check"),e&&("string"!=typeof e&&(e='[class*="uk-animation-"]'),o.find(e).each(function(){var t=n.$(this),i=t.attr("class"),e=i.match(/uk\-animation\-(.+)/);t.removeClass(e[0]).width(),t.addClass(e[0])})),o},n.Utils.options=function(t){if(i.isPlainObject(t))return t;var e=t?t.indexOf("{"):-1,o={};if(-1!=e)try{o=n.Utils.str2json(t.substr(e))}catch(s){}return o},n.Utils.animate=function(t,e){var o=i.Deferred();return t=n.$(t),e=e,t.css("display","none").addClass(e).one(n.support.animation.end,function(){t.removeClass(e),o.resolve()}).width(),t.css("display",""),o.promise()},n.Utils.uid=function(t){return(t||"id")+(new Date).getTime()+"RAND"+Math.ceil(1e5*Math.random())},n.Utils.template=function(t,i){for(var e,n,o,s,a=t.replace(/\n/g,"\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g,"{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),r=0,c=[],l=0;r<a.length;){if(e=a[r],e.match(/\{\{\s*(.+?)\s*\}\}/))switch(r+=1,e=a[r],n=e[0],o=e.substring(e.match(/^(\^|\#|\!|\~|\:)/)?1:0),n){case"~":c.push("for(var $i=0;$i<"+o+".length;$i++) { var $item = "+o+"[$i];"),l++;break;case":":c.push("for(var $key in "+o+") { var $val = "+o+"[$key];"),l++;break;case"#":c.push("if("+o+") {"),l++;break;case"^":c.push("if(!"+o+") {"),l++;break;case"/":c.push("}"),l--;break;case"!":c.push("__ret.push("+o+");");break;default:c.push("__ret.push(escape("+o+"));")}else c.push("__ret.push('"+e.replace(/\'/g,"\\'")+"');");r+=1}return s=new Function("$data",["var __ret = [];","try {","with($data){",l?'__ret = ["Not all blocks are closed correctly."]':c.join(""),"};","}catch(e){__ret = [e.message];}",'return __ret.join("").replace(/\\n\\n/g, "\\n");',"function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")),i?s(i):s},n.Utils.events={},n.Utils.events.click=n.support.touch?"tap":"click",window.UIkit=n,i.UIkit=n,i.fn.uk=n.fn,n.langdirection="rtl"==n.$html.attr("dir")?"right":"left",n.components={},n.component=function(t,e){var o=function(e,s){var a=this;return this.UIkit=n,this.element=e?n.$(e):null,this.options=i.extend(!0,{},this.defaults,s),this.plugins={},this.element&&this.element.data(t,this),this.init(),(this.options.plugins.length?this.options.plugins:Object.keys(o.plugins)).forEach(function(t){o.plugins[t].init&&(o.plugins[t].init(a),a.plugins[t]=!0)}),this.trigger("init.uk.component",[t,this]),this};return o.plugins={},i.extend(!0,o.prototype,{defaults:{plugins:[]},boot:function(){},init:function(){},on:function(t,i,e){return n.$(this.element||this).on(t,i,e)},one:function(t,i,e){return n.$(this.element||this).one(t,i,e)},off:function(t){return n.$(this.element||this).off(t)},trigger:function(t,i){return n.$(this.element||this).trigger(t,i)},find:function(t){return n.$(this.element?this.element:[]).find(t)},proxy:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=function(){return t[i].apply(t,arguments)})})},mixin:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=t[i].bind(e))})},option:function(){return 1==arguments.length?this.options[arguments[0]]||void 0:(2==arguments.length&&(this.options[arguments[0]]=arguments[1]),void 0)}},e),this.components[t]=o,this[t]=function(){var e,o;if(arguments.length)switch(arguments.length){case 1:"string"==typeof arguments[0]||arguments[0].nodeType||arguments[0]instanceof jQuery?e=i(arguments[0]):o=arguments[0];break;case 2:e=i(arguments[0]),o=arguments[1]}return e&&e.data(t)?e.data(t):new n.components[t](e,o)},n.domready&&n.component.boot(t),o},n.plugin=function(t,i,e){this.components[t].plugins[i]=e},n.component.boot=function(t){n.components[t].prototype&&n.components[t].prototype.boot&&!n.components[t].booted&&(n.components[t].prototype.boot.apply(n,[]),n.components[t].booted=!0)},n.component.bootComponents=function(){for(var t in n.components)n.component.boot(t)},n.domObservers=[],n.domready=!1,n.ready=function(t){n.domObservers.push(t),n.domready&&t(document)},n.on=function(t,i,e){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready&&i.apply(n.$doc),n.$doc.on(t,i,e)},n.one=function(t,i,e){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready?(i.apply(n.$doc),n.$doc):n.$doc.one(t,i,e)},n.trigger=function(t,i){return n.$doc.trigger(t,i)},n.domObserve=function(t,i){n.support.mutationobserver&&(i=i||function(){},n.$(t).each(function(){var t=this,e=n.$(t);if(!e.data("observer"))try{var o=new n.support.mutationobserver(n.Utils.debounce(function(){i.apply(t,[]),e.trigger("changed.uk.dom")},50));o.observe(t,{childList:!0,subtree:!0}),e.data("observer",o)}catch(s){}}))},n.on("domready.uk.dom",function(){n.domObservers.forEach(function(t){t(document)}),n.domready&&n.Utils.checkDisplay(document)}),i(function(){n.$body=n.$("body"),n.ready(function(){n.domObserve("[data-uk-observe]")}),n.on("changed.uk.dom",function(t){var i=t.target;n.domObservers.forEach(function(t){t(i)}),n.Utils.checkDisplay(i)}),n.trigger("beforeready.uk.dom"),n.component.bootComponents(),setInterval(function(){var t,i={x:window.pageXOffset,y:window.pageYOffset},e=function(){(i.x!=window.pageXOffset||i.y!=window.pageYOffset)&&(t={x:0,y:0},window.pageXOffset!=i.x&&(t.x=window.pageXOffset>i.x?1:-1),window.pageYOffset!=i.y&&(t.y=window.pageYOffset>i.y?1:-1),i={dir:t,x:window.pageXOffset,y:window.pageYOffset},n.$doc.trigger("scrolling.uk.document",[i]))};return n.support.touch&&n.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup",e),(i.x||i.y)&&e(),e}(),15),n.trigger("domready.uk.dom"),n.support.touch&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&n.$win.on("load orientationchange resize",n.Utils.debounce(function(){var t=function(){return i(".uk-height-viewport").css("height",window.innerHeight),t};return t()}(),100)),n.trigger("afterready.uk.dom"),n.domready=!0}),n.$html.addClass(n.support.touch?"uk-touch":"uk-notouch"),n.support.touch){var s,a=!1,r="uk-hover",c=".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";n.$html.on("touchstart MSPointerDown pointerdown",c,function(){a&&i("."+r).removeClass(r),a=i(this).addClass(r)}).on("touchend MSPointerUp pointerup",function(t){s=i(t.target).parents(c),a&&a.not(s).removeClass(r)})}return n}),function(t){function i(t,i,e,n){return Math.abs(t-i)>=Math.abs(e-n)?t-i>0?"Left":"Right":e-n>0?"Up":"Down"}function e(){l=null,h.last&&(h.el.trigger("longTap"),h={})}function n(){l&&clearTimeout(l),l=null}function o(){a&&clearTimeout(a),r&&clearTimeout(r),c&&clearTimeout(c),l&&clearTimeout(l),a=r=c=l=null,h={}}function s(t){return t.pointerType==t.MSPOINTER_TYPE_TOUCH&&t.isPrimary}if(!t.fn.swipeLeft){var a,r,c,l,u,h={},d=750;t(function(){var f,p,g,m=0,v=0;"MSGesture"in window&&(u=new MSGesture,u.target=document.body),t(document).on("MSGestureEnd gestureend",function(t){var i=t.originalEvent.velocityX>1?"Right":t.originalEvent.velocityX<-1?"Left":t.originalEvent.velocityY>1?"Down":t.originalEvent.velocityY<-1?"Up":null;i&&(h.el.trigger("swipe"),h.el.trigger("swipe"+i))}).on("touchstart MSPointerDown pointerdown",function(i){("MSPointerDown"!=i.type||s(i.originalEvent))&&(g="MSPointerDown"==i.type||"pointerdown"==i.type?i:i.originalEvent.touches[0],f=Date.now(),p=f-(h.last||f),h.el=t("tagName"in g.target?g.target:g.target.parentNode),a&&clearTimeout(a),h.x1=g.pageX,h.y1=g.pageY,p>0&&250>=p&&(h.isDoubleTap=!0),h.last=f,l=setTimeout(e,d),!u||"MSPointerDown"!=i.type&&"pointerdown"!=i.type&&"touchstart"!=i.type||u.addPointer(i.originalEvent.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){("MSPointerMove"!=t.type||s(t.originalEvent))&&(g="MSPointerMove"==t.type||"pointermove"==t.type?t:t.originalEvent.touches[0],n(),h.x2=g.pageX,h.y2=g.pageY,m+=Math.abs(h.x1-h.x2),v+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(e){("MSPointerUp"!=e.type||s(e.originalEvent))&&(n(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?c=setTimeout(function(){h.el.trigger("swipe"),h.el.trigger("swipe"+i(h.x1,h.x2,h.y1,h.y2)),h={}},0):"last"in h&&(isNaN(m)||30>m&&30>v?r=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=o,h.el.trigger(i),h.isDoubleTap?(h.el.trigger("doubleTap"),h={}):a=setTimeout(function(){a=null,h.el.trigger("singleTap"),h={}},250)},0):h={},m=v=0))}).on("touchcancel MSPointerCancel",o),t(window).on("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(i){t.fn[i]=function(e){return t(this).on(i,e)}})}}(jQuery),function(t){"use strict";var i=[];t.component("stackMargin",{defaults:{cls:"uk-margin-small-top"},boot:function(){t.ready(function(i){t.$("[data-uk-margin]",i).each(function(){var i,e=t.$(this);e.data("stackMargin")||(i=t.stackMargin(e,t.Utils.options(e.attr("data-uk-margin"))))})})},init:function(){var e=this;this.columns=this.element.children(),this.columns.length&&(t.$win.on("resize orientationchange",function(){var i=function(){e.process()};return t.$(function(){i(),t.$win.on("load",i)}),t.Utils.debounce(i,20)}()),t.$html.on("changed.uk.dom",function(){e.columns=e.element.children(),e.process()}),this.on("display.uk.check",function(){e.columns=e.element.children(),this.element.is(":visible")&&this.process()}.bind(this)),i.push(this))},process:function(){return t.Utils.stackMargin(this.columns,this.options),this},revert:function(){return this.columns.removeClass(this.options.cls),this}}),t.ready(function(){var i=[],e=function(){i.forEach(function(t){if(t.is(":visible")){var i=t.parent().width(),e=t.data("width"),n=i/e,o=Math.floor(n*t.data("height"));t.css({height:e>i?o:t.data("height")})}})};return t.$win.on("resize",t.Utils.debounce(e,15)),function(n){t.$("iframe.uk-responsive-width",n).each(function(){var e=t.$(this);!e.data("responsive")&&e.attr("width")&&e.attr("height")&&(e.data("width",e.attr("width")),e.data("height",e.attr("height")),e.data("responsive",!0),i.push(e))}),e()}}()),t.Utils.stackMargin=function(i,e){e=t.$.extend({cls:"uk-margin-small-top"},e),e.cls=e.cls,i=t.$(i).removeClass(e.cls);var n=!1,o=i.filter(":visible:first"),s=o.length?o.position().top+o.outerHeight()-1:!1;s!==!1&&i.each(function(){var i=t.$(this);i.is(":visible")&&(n?i.addClass(e.cls):i.position().top>=s&&(n=i.addClass(e.cls)))})}}(UIkit),function(t){"use strict";function i(i,e){e=t.$.extend({duration:1e3,transition:"easeOutExpo",offset:0,complete:function(){}},e);var n=i.offset().top-e.offset,o=t.$doc.height(),s=window.innerHeight;n+s>o&&(n=o-s),t.$("html,body").stop().animate({scrollTop:n},e.duration,e.transition).promise().done(e.complete)}t.component("smoothScroll",{boot:function(){t.$html.on("click.smooth-scroll.uikit","[data-uk-smooth-scroll]",function(){var i=t.$(this);if(!i.data("smoothScroll")){{t.smoothScroll(i,t.Utils.options(i.attr("data-uk-smooth-scroll")))}i.trigger("click")}return!1})},init:function(){var e=this;this.on("click",function(n){n.preventDefault(),i(t.$(this.hash).length?t.$(this.hash):t.$("body"),e.options)})}}),t.Utils.scrollToElement=i,t.$.easing.easeOutExpo||(t.$.easing.easeOutExpo=function(t,i,e,n,o){return i==o?e+n:n*(-Math.pow(2,-10*i/o)+1)+e})}(UIkit),function(t){"use strict";var i=t.$win,e=t.$doc,n=[],o=function(){for(var i=0;i<n.length;i++)t.support.requestAnimationFrame.apply(window,[n[i].check])};t.component("scrollspy",{defaults:{target:!1,cls:"uk-scrollspy-inview",initcls:"uk-scrollspy-init-inview",topoffset:0,leftoffset:0,repeat:!1,delay:0},boot:function(){e.on("scrolling.uk.document",o),i.on("load resize orientationchange",t.Utils.debounce(o,50)),t.ready(function(i){t.$("[data-uk-scrollspy]",i).each(function(){var i=t.$(this);if(!i.data("scrollspy")){t.scrollspy(i,t.Utils.options(i.attr("data-uk-scrollspy")))}})})},init:function(){var i,e=this,o=this.options.cls.split(/,/),s=function(){var n=e.options.target?e.element.find(e.options.target):e.element,s=1===n.length?1:0,a=0;n.each(function(){var n=t.$(this),r=n.data("inviewstate"),c=t.Utils.isInView(n,e.options),l=n.data("ukScrollspyCls")||o[a].trim();!c||r||n.data("scrollspy-idle")||(i||(n.addClass(e.options.initcls),e.offset=n.offset(),i=!0,n.trigger("init.uk.scrollspy")),n.data("scrollspy-idle",setTimeout(function(){n.addClass("uk-scrollspy-inview").toggleClass(l).width(),n.trigger("inview.uk.scrollspy"),n.data("scrollspy-idle",!1),n.data("inviewstate",!0)},e.options.delay*s)),s++),!c&&r&&e.options.repeat&&(n.data("scrollspy-idle")&&clearTimeout(n.data("scrollspy-idle")),n.removeClass("uk-scrollspy-inview").toggleClass(l),n.data("inviewstate",!1),n.trigger("outview.uk.scrollspy")),a=o[a+1]?a+1:0})};s(),this.check=s,n.push(this)}});var s=[],a=function(){for(var i=0;i<s.length;i++)t.support.requestAnimationFrame.apply(window,[s[i].check])};t.component("scrollspynav",{defaults:{cls:"uk-active",closest:!1,topoffset:0,leftoffset:0,smoothscroll:!1},boot:function(){e.on("scrolling.uk.document",a),i.on("resize orientationchange",t.Utils.debounce(a,50)),t.ready(function(i){t.$("[data-uk-scrollspy-nav]",i).each(function(){var i=t.$(this);if(!i.data("scrollspynav")){t.scrollspynav(i,t.Utils.options(i.attr("data-uk-scrollspy-nav")))}})})},init:function(){var e,n=[],o=this.find("a[href^='#']").each(function(){n.push(t.$(this).attr("href"))}),a=t.$(n.join(",")),r=this.options.cls,c=this.options.closest||this.options.closest,l=this,u=function(){e=[];for(var n=0;n<a.length;n++)t.Utils.isInView(a.eq(n),l.options)&&e.push(a.eq(n));if(e.length){var s,u=i.scrollTop(),h=function(){for(var t=0;t<e.length;t++)if(e[t].offset().top>=u)return e[t]}();if(!h)return;l.options.closest?(o.closest(c).removeClass(r),s=o.filter("a[href='#"+h.attr("id")+"']").closest(c).addClass(r)):s=o.removeClass(r).filter("a[href='#"+h.attr("id")+"']").addClass(r),l.element.trigger("inview.uk.scrollspynav",[h,s])}};this.options.smoothscroll&&t.smoothScroll&&o.each(function(){t.smoothScroll(this,l.options.smoothscroll)}),u(),this.element.data("scrollspynav",this),this.check=u,s.push(this)}})}(UIkit),function(t){"use strict";var i=[];t.component("toggle",{defaults:{target:!1,cls:"uk-hidden",animation:!1,duration:200},boot:function(){t.ready(function(e){t.$("[data-uk-toggle]",e).each(function(){var i=t.$(this);if(!i.data("toggle")){t.toggle(i,t.Utils.options(i.attr("data-uk-toggle")))}}),setTimeout(function(){i.forEach(function(t){t.getToggles()})},0)})},init:function(){var t=this;this.aria=-1!==this.options.cls.indexOf("uk-hidden"),this.getToggles(),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle()}),i.push(this)},toggle:function(){if(this.totoggle.length){if(this.options.animation&&t.support.animation){var i=this,e=this.options.animation.split(",");1==e.length&&(e[1]=e[0]),e[0]=e[0].trim(),e[1]=e[1].trim(),this.totoggle.css("animation-duration",this.options.duration+"ms"),this.totoggle.hasClass(this.options.cls)?(this.totoggle.toggleClass(this.options.cls),this.totoggle.each(function(){t.Utils.animate(this,e[0]).then(function(){t.$(this).css("animation-duration",""),t.Utils.checkDisplay(this)})})):this.totoggle.each(function(){t.Utils.animate(this,e[1]+" uk-animation-reverse").then(function(){t.$(this).toggleClass(i.options.cls).css("animation-duration",""),t.Utils.checkDisplay(this)}.bind(this))})}else this.totoggle.toggleClass(this.options.cls),t.Utils.checkDisplay(this.totoggle);this.updateAria()}},getToggles:function(){this.totoggle=this.options.target?t.$(this.options.target):[],this.updateAria()},updateAria:function(){this.aria&&this.totoggle.length&&this.totoggle.each(function(){t.$(this).attr("aria-hidden",t.$(this).hasClass("uk-hidden"))})}})}(UIkit),function(t){"use strict";t.component("alert",{defaults:{fade:!0,duration:200,trigger:".uk-alert-close"},boot:function(){t.$html.on("click.alert.uikit","[data-uk-alert]",function(i){var e=t.$(this);if(!e.data("alert")){var n=t.alert(e,t.Utils.options(e.attr("data-uk-alert")));t.$(i.target).is(n.options.trigger)&&(i.preventDefault(),n.close())}})},init:function(){var t=this;this.on("click",this.options.trigger,function(i){i.preventDefault(),t.close()})},close:function(){var t=this.trigger("close.uk.alert"),i=function(){this.trigger("closed.uk.alert").remove()}.bind(this);this.options.fade?t.css("overflow","hidden").css("max-height",t.height()).animate({height:0,opacity:0,"padding-top":0,"padding-bottom":0,"margin-top":0,"margin-bottom":0},this.options.duration,i):i()}})}(UIkit),function(t){"use strict";t.component("buttonRadio",{defaults:{target:".uk-button"},boot:function(){t.$html.on("click.buttonradio.uikit","[data-uk-button-radio]",function(i){var e=t.$(this);if(!e.data("buttonRadio")){var n=t.buttonRadio(e,t.Utils.options(e.attr("data-uk-button-radio"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter(".uk-active").attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),i.find(i.options.target).not(n).removeClass("uk-active").blur(),n.addClass("uk-active"),i.find(i.options.target).not(n).attr("aria-checked","false"),n.attr("aria-checked","true"),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find(".uk-active")}}),t.component("buttonCheckbox",{defaults:{target:".uk-button"},boot:function(){t.$html.on("click.buttoncheckbox.uikit","[data-uk-button-checkbox]",function(i){var e=t.$(this);if(!e.data("buttonCheckbox")){var n=t.buttonCheckbox(e,t.Utils.options(e.attr("data-uk-button-checkbox"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter(".uk-active").attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),n.toggleClass("uk-active").blur(),n.attr("aria-checked",n.hasClass("uk-active")),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find(".uk-active")}}),t.component("button",{defaults:{},boot:function(){t.$html.on("click.button.uikit","[data-uk-button]",function(){var i=t.$(this);if(!i.data("button")){{t.button(i,t.Utils.options(i.attr("data-uk-button")))}i.trigger("click")}})},init:function(){var t=this;this.element.attr("aria-pressed",this.element.hasClass("uk-active")),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle(),t.trigger("change.uk.button",[t.element.blur().hasClass("uk-active")])})},toggle:function(){this.element.toggleClass("uk-active"),this.element.attr("aria-pressed",this.element.hasClass("uk-active"))}})}(UIkit),function(t){"use strict";var i,e=!1;t.component("dropdown",{defaults:{mode:"hover",remaintime:800,justify:!1,boundary:t.$win,delay:0},remainIdle:!1,boot:function(){var i=t.support.touch?"click":"mouseenter";t.$html.on(i+".dropdown.uikit","[data-uk-dropdown]",function(e){var n=t.$(this);if(!n.data("dropdown")){var o=t.dropdown(n,t.Utils.options(n.attr("data-uk-dropdown")));("click"==i||"mouseenter"==i&&"hover"==o.options.mode)&&o.element.trigger(i),o.element.find(".uk-dropdown").length&&e.preventDefault()}})},init:function(){var e=this;this.dropdown=this.find(".uk-dropdown"),this.centered=this.dropdown.hasClass("uk-dropdown-center"),this.justified=this.options.justify?t.$(this.options.justify):!1,this.boundary=t.$(this.options.boundary),this.flipped=this.dropdown.hasClass("uk-dropdown-flip"),this.boundary.length||(this.boundary=t.$win),this.element.attr("aria-haspopup","true"),this.element.attr("aria-expanded",this.element.hasClass("uk-open")),"click"==this.options.mode||t.support.touch?this.on("click.uikit.dropdown",function(i){var n=t.$(i.target);n.parents(".uk-dropdown").length||((n.is("a[href='#']")||n.parent().is("a[href='#']")||e.dropdown.length&&!e.dropdown.is(":visible"))&&i.preventDefault(),n.blur()),e.element.hasClass("uk-open")?(n.is("a:not(.js-uk-prevent)")||n.is(".uk-dropdown-close")||!e.dropdown.find(i.target).length)&&e.hide():e.show()}):this.on("mouseenter",function(){e.remainIdle&&clearTimeout(e.remainIdle),i&&clearTimeout(i),i=setTimeout(e.show.bind(e),e.options.delay)}).on("mouseleave",function(){i&&clearTimeout(i),e.remainIdle=setTimeout(function(){e.hide()},e.options.remaintime)}).on("click",function(i){var n=t.$(i.target);e.remainIdle&&clearTimeout(e.remainIdle),(n.is("a[href='#']")||n.parent().is("a[href='#']"))&&i.preventDefault(),e.show()})},show:function(){t.$html.off("click.outer.dropdown"),e&&e[0]!=this.element[0]&&(e.removeClass("uk-open"),e.attr("aria-expanded","false")),i&&clearTimeout(i),this.checkDimensions(),this.element.addClass("uk-open"),this.element.attr("aria-expanded","true"),this.trigger("show.uk.dropdown",[this]),t.Utils.checkDisplay(this.dropdown,!0),e=this.element,this.registerOuterClick()},hide:function(){this.element.removeClass("uk-open"),this.remainIdle=!1,this.element.attr("aria-expanded","false"),e&&e[0]==this.element[0]&&(e=!1)},registerOuterClick:function(){var n=this;t.$html.off("click.outer.dropdown"),setTimeout(function(){t.$html.on("click.outer.dropdown",function(o){i&&clearTimeout(i);var s=t.$(o.target);e&&e[0]==n.element[0]&&(s.is("a:not(.js-uk-prevent)")||s.is(".uk-dropdown-close")||!n.dropdown.find(o.target).length)&&(n.hide(),t.$html.off("click.outer.dropdown"))})},10)},checkDimensions:function(){if(this.dropdown.length){this.justified&&this.justified.length&&this.dropdown.css("min-width","");var i=this,e=this.dropdown.css("margin-"+t.langdirection,""),n=e.show().offset(),o=e.outerWidth(),s=this.boundary.width(),a=this.boundary.offset()?this.boundary.offset().left:0;if(this.centered&&(e.css("margin-"+t.langdirection,-1*(parseFloat(o)/2-e.parent().width()/2)),n=e.offset(),(o+n.left>s||n.left<0)&&(e.css("margin-"+t.langdirection,""),n=e.offset())),this.justified&&this.justified.length){var r=this.justified.outerWidth();if(e.css("min-width",r),"right"==t.langdirection){var c=s-(this.justified.offset().left+r),l=s-(e.offset().left+e.outerWidth());e.css("margin-right",c-l)}else e.css("margin-left",this.justified.offset().left-n.left);n=e.offset()}o+(n.left-a)>s&&(e.addClass("uk-dropdown-flip"),n=e.offset()),n.left-a<0&&(e.addClass("uk-dropdown-stack"),e.hasClass("uk-dropdown-flip")&&(this.flipped||(e.removeClass("uk-dropdown-flip"),n=e.offset(),e.addClass("uk-dropdown-flip")),setTimeout(function(){(e.offset().left-a<0||!i.flipped&&e.outerWidth()+(n.left-a)<s)&&e.removeClass("uk-dropdown-flip")},0)),this.trigger("stack.uk.dropdown",[this])),e.css("display","")}}})}(UIkit),function(t){"use strict";var i=[];t.component("gridMatchHeight",{defaults:{target:!1,row:!0},boot:function(){t.ready(function(i){t.$("[data-uk-grid-match]",i).each(function(){var i,e=t.$(this);e.data("gridMatchHeight")||(i=t.gridMatchHeight(e,t.Utils.options(e.attr("data-uk-grid-match"))))})})},init:function(){var e=this;this.columns=this.element.children(),this.elements=this.options.target?this.find(this.options.target):this.columns,this.columns.length&&(t.$win.on("load resize orientationchange",function(){var i=function(){e.match()};return t.$(function(){i()}),t.Utils.debounce(i,50)}()),t.$html.on("changed.uk.dom",function(){e.columns=e.element.children(),e.elements=e.options.target?e.find(e.options.target):e.columns,e.match()}),this.on("display.uk.check",function(){this.element.is(":visible")&&this.match()}.bind(this)),i.push(this))},match:function(){var i=this.columns.filter(":visible:first");if(i.length){var e=Math.ceil(100*parseFloat(i.css("width"))/parseFloat(i.parent().css("width")))>=100;return e?this.revert():t.Utils.matchHeights(this.elements,this.options),this}},revert:function(){return this.elements.css("min-height",""),this}}),t.component("gridMargin",{defaults:{cls:"uk-grid-margin"},boot:function(){t.ready(function(i){t.$("[data-uk-grid-margin]",i).each(function(){var i,e=t.$(this);e.data("gridMargin")||(i=t.gridMargin(e,t.Utils.options(e.attr("data-uk-grid-margin"))))})})},init:function(){t.stackMargin(this.element,this.options)}}),t.Utils.matchHeights=function(i,e){i=t.$(i).css("min-height",""),e=t.$.extend({row:!0},e);var n=function(i){if(!(i.length<2)){var e=0;i.each(function(){e=Math.max(e,t.$(this).outerHeight())}).each(function(){var i=t.$(this),n=e-(i.outerHeight()-i.height());i.css("min-height",n+"px")})}};e.row?(i.first().width(),setTimeout(function(){var e=!1,o=[];i.each(function(){var i=t.$(this),s=i.offset().top;s!=e&&o.length&&(n(t.$(o)),o=[],s=i.offset().top),o.push(i),e=s}),o.length&&n(t.$(o))},0)):n(i)}}(UIkit),function(t){"use strict";function i(i,e){return e?("object"==typeof i?(i=i instanceof jQuery?i:t.$(i),i.parent().length&&(e.persist=i,e.persist.data("modalPersistParent",i.parent()))):i="string"==typeof i||"number"==typeof i?t.$("<div></div>").html(i):t.$("<div></div>").html("UIkit.modal Error: Unsupported data type: "+typeof i),i.appendTo(e.element.find(".uk-modal-dialog")),e):void 0}var e,n=!1,o=t.$html;t.component("modal",{defaults:{keyboard:!0,bgclose:!0,minScrollHeight:150,center:!1},scrollable:!1,transition:!1,init:function(){e||(e=t.$("body"));var i=this;this.transition=t.support.transition,this.paddingdir="padding-"+("left"==t.langdirection?"right":"left"),this.dialog=this.find(".uk-modal-dialog"),this.element.attr("aria-hidden",this.element.hasClass("uk-open")),this.on("click",".uk-modal-close",function(t){t.preventDefault(),i.hide()}).on("click",function(e){var n=t.$(e.target);n[0]==i.element[0]&&i.options.bgclose&&i.hide()})},toggle:function(){return this[this.isActive()?"hide":"show"]()},show:function(){if(!this.isActive())return n&&n.hide(!0),this.element.removeClass("uk-open").show(),this.resize(),n=this,o.addClass("uk-modal-page").height(),this.element.addClass("uk-open"),this.element.attr("aria-hidden","false"),this.element.trigger("show.uk.modal"),t.Utils.checkDisplay(this.dialog,!0),this},hide:function(i){if(this.isActive()){if(!i&&t.support.transition){var e=this;this.one(t.support.transition.end,function(){e._hide()}).removeClass("uk-open")}else this._hide();return this}},resize:function(){var t=e.width();if(this.scrollbarwidth=window.innerWidth-t,e.css(this.paddingdir,this.scrollbarwidth),this.element.css("overflow-y",this.scrollbarwidth?"scroll":"auto"),!this.updateScrollable()&&this.options.center){var i=this.dialog.outerHeight(),n=parseInt(this.dialog.css("margin-top"),10)+parseInt(this.dialog.css("margin-bottom"),10);i+n<window.innerHeight?this.dialog.css({top:window.innerHeight/2-i/2-n}):this.dialog.css({top:""})}},updateScrollable:function(){var t=this.dialog.find(".uk-overflow-container:visible:first");if(t.length){t.css("height",0);var i=Math.abs(parseInt(this.dialog.css("margin-top"),10)),e=this.dialog.outerHeight(),n=window.innerHeight,o=n-2*(20>i?20:i)-e;return t.css("height",o<this.options.minScrollHeight?"":o),!0}return!1},_hide:function(){this.element.hide().removeClass("uk-open"),this.element.attr("aria-hidden","true"),o.removeClass("uk-modal-page"),e.css(this.paddingdir,""),n===this&&(n=!1),this.trigger("hide.uk.modal")},isActive:function(){return n==this}}),t.component("modalTrigger",{boot:function(){t.$html.on("click.modal.uikit","[data-uk-modal]",function(i){var e=t.$(this);if(e.is("a")&&i.preventDefault(),!e.data("modalTrigger")){var n=t.modalTrigger(e,t.Utils.options(e.attr("data-uk-modal")));n.show()}}),t.$html.on("keydown.modal.uikit",function(t){n&&27===t.keyCode&&n.options.keyboard&&(t.preventDefault(),n.hide())}),t.$win.on("resize orientationchange",t.Utils.debounce(function(){n&&n.resize()},150))},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1},this.options),this.modal=t.modal(this.options.target,this.options),this.on("click",function(t){t.preventDefault(),i.show()}),this.proxy(this.modal,"show hide isActive")}}),t.modal.dialog=function(e,n){var o=t.modal(t.$(t.modal.dialog.template).appendTo("body"),n);return o.on("hide.uk.modal",function(){o.persist&&(o.persist.appendTo(o.persist.data("modalPersistParent")),o.persist=!1),o.element.remove()}),i(e,o),o},t.modal.dialog.template='<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>',t.modal.alert=function(i,e){t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">Ok</button></div>'].join(""),t.$.extend({bgclose:!1,keyboard:!1},e)).show()},t.modal.confirm=function(i,e,n){e=t.$.isFunction(e)?e:function(){};
var o=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary js-modal-confirm">Ok</button> <button class="uk-button uk-modal-close">Cancel</button></div>'].join(""),t.$.extend({bgclose:!1,keyboard:!1},n));o.element.find(".js-modal-confirm").on("click",function(){e(),o.hide()}),o.show()}}(UIkit),function(t){"use strict";function i(i){var e=t.$(i),n="auto";if(e.is(":visible"))n=e.outerHeight();else{var o={position:e.css("position"),visibility:e.css("visibility"),display:e.css("display")};n=e.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),e.css(o)}return n}t.component("nav",{defaults:{toggle:">li.uk-parent > a[href='#']",lists:">li.uk-parent > ul",multiple:!1},boot:function(){t.ready(function(i){t.$("[data-uk-nav]",i).each(function(){var i=t.$(this);if(!i.data("nav")){t.nav(i,t.Utils.options(i.attr("data-uk-nav")))}})})},init:function(){var i=this;this.on("click.uikit.nav",this.options.toggle,function(e){e.preventDefault();var n=t.$(this);i.open(n.parent()[0]==i.element[0]?n:n.parent("li"))}),this.find(this.options.lists).each(function(){var e=t.$(this),n=e.parent(),o=n.hasClass("uk-active");e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'),n.data("list-container",e.parent()),n.attr("aria-expanded",n.hasClass("uk-open")),o&&i.open(n,!0)})},open:function(e,n){var o=this,s=this.element,a=t.$(e);this.options.multiple||s.children(".uk-open").not(e).each(function(){var i=t.$(this);i.data("list-container")&&i.data("list-container").stop().animate({height:0},function(){t.$(this).parent().removeClass("uk-open")})}),a.toggleClass("uk-open"),a.attr("aria-expanded",a.hasClass("uk-open")),a.data("list-container")&&(n?(a.data("list-container").stop().height(a.hasClass("uk-open")?"auto":0),this.trigger("display.uk.check")):a.data("list-container").stop().animate({height:a.hasClass("uk-open")?i(a.data("list-container").find("ul:first")):0},function(){o.trigger("display.uk.check")}))}})}(UIkit),function(t){"use strict";var i={x:window.scrollX,y:window.scrollY},e=(t.$win,t.$doc),n=t.$html,o={show:function(o){if(o=t.$(o),o.length){var s=t.$("body"),a=o.find(".uk-offcanvas-bar:first"),r="right"==t.langdirection,c=a.hasClass("uk-offcanvas-bar-flip")?-1:1,l=c*(r?-1:1);i={x:window.pageXOffset,y:window.pageYOffset},o.addClass("uk-active"),s.css({width:window.innerWidth,height:window.innerHeight}).addClass("uk-offcanvas-page"),s.css(r?"margin-right":"margin-left",(r?-1:1)*a.outerWidth()*l).width(),n.css("margin-top",-1*i.y),a.addClass("uk-offcanvas-bar-show"),this._initElement(o),e.trigger("show.uk.offcanvas",[o,a]),o.attr("aria-hidden","false")}},hide:function(e){var o=t.$("body"),s=t.$(".uk-offcanvas.uk-active"),a="right"==t.langdirection,r=s.find(".uk-offcanvas-bar:first"),c=function(){o.removeClass("uk-offcanvas-page").css({width:"",height:"","margin-left":"","margin-right":""}),s.removeClass("uk-active"),r.removeClass("uk-offcanvas-bar-show"),n.css("margin-top",""),window.scrollTo(i.x,i.y),t.$doc.trigger("hide.uk.offcanvas",[s,r]),s.attr("aria-hidden","true")};s.length&&(t.support.transition&&!e?(o.one(t.support.transition.end,function(){c()}).css(a?"margin-right":"margin-left",""),setTimeout(function(){r.removeClass("uk-offcanvas-bar-show")},0)):c())},_initElement:function(i){i.data("OffcanvasInit")||(i.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas",function(i){var e=t.$(i.target);if(!i.type.match(/swipe/)&&!e.hasClass("uk-offcanvas-close")){if(e.hasClass("uk-offcanvas-bar"))return;if(e.parents(".uk-offcanvas-bar:first").length)return}i.stopImmediatePropagation(),o.hide()}),i.on("click","a[href^='#']",function(){var i=t.$(this),e=i.attr("href");"#"!=e&&(t.$doc.one("hide.uk.offcanvas",function(){var i=t.$(e);i.length||(i=t.$('[name="'+e.replace("#","")+'"]')),t.Utils.scrollToElement&&i.length?t.Utils.scrollToElement(i):window.location.href=e}),o.hide())}),i.data("OffcanvasInit",!0))}};t.component("offcanvasTrigger",{boot:function(){n.on("click.offcanvas.uikit","[data-uk-offcanvas]",function(i){i.preventDefault();var e=t.$(this);if(!e.data("offcanvasTrigger")){{t.offcanvasTrigger(e,t.Utils.options(e.attr("data-uk-offcanvas")))}e.trigger("click")}}),n.on("keydown.uk.offcanvas",function(t){27===t.keyCode&&o.hide()})},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1},this.options),this.on("click",function(t){t.preventDefault(),o.show(i.options.target)})}}),t.offcanvas=o}(UIkit),function(t){"use strict";function i(i,e,n){var o,s=t.$.Deferred(),a=i,r=i;return n[0]===e[0]?(s.resolve(),s.promise()):("object"==typeof i&&(a=i[0],r=i[1]||i[0]),o=function(){e&&e.hide().removeClass("uk-active "+r+" uk-animation-reverse"),n.addClass(a).one(t.support.animation.end,function(){n.removeClass(""+a).css({opacity:"",display:""}),s.resolve(),e&&e.css({opacity:"",display:""})}.bind(this)).show()},n.css("animation-duration",this.options.duration+"ms"),e&&e.length?(e.css("animation-duration",this.options.duration+"ms"),e.css("display","none").addClass(r+" uk-animation-reverse").one(t.support.animation.end,function(){o()}.bind(this)).css("display","")):(n.addClass("uk-active"),o()),s.promise())}var e;t.component("switcher",{defaults:{connect:!1,toggle:">*",active:0,animation:!1,duration:200},animating:!1,boot:function(){t.ready(function(i){t.$("[data-uk-switcher]",i).each(function(){var i=t.$(this);if(!i.data("switcher")){t.switcher(i,t.Utils.options(i.attr("data-uk-switcher")))}})})},init:function(){var i=this;if(this.on("click.uikit.switcher",this.options.toggle,function(t){t.preventDefault(),i.show(this)}),this.options.connect){this.connect=t.$(this.options.connect),this.connect.find(".uk-active").removeClass(".uk-active"),this.connect.length&&(this.connect.children().attr("aria-hidden","true"),this.connect.on("click","[data-uk-switcher-item]",function(e){e.preventDefault();var n=t.$(this).attr("data-uk-switcher-item");if(i.index!=n)switch(n){case"next":case"previous":i.show(i.index+("next"==n?1:-1));break;default:i.show(parseInt(n,10))}}).on("swipeRight swipeLeft",function(t){t.preventDefault(),i.show(i.index+("swipeLeft"==t.type?1:-1))}));var e=this.find(this.options.toggle),n=e.filter(".uk-active");if(n.length)this.show(n,!1);else{if(this.options.active===!1)return;n=e.eq(this.options.active),this.show(n.length?n:e.eq(0),!1)}e.not(n).attr("aria-expanded","false"),n.attr("aria-expanded","true"),this.on("changed.uk.dom",function(){i.connect=t.$(i.options.connect)})}},show:function(n,o){if(!this.animating){if(isNaN(n))n=t.$(n);else{var s=this.find(this.options.toggle);n=0>n?s.length-1:n,n=s.eq(s[n]?n:0)}var a=this,s=this.find(this.options.toggle),r=t.$(n),c=e[this.options.animation]||function(t,n){if(!a.options.animation)return e.none.apply(a);var o=a.options.animation.split(",");return 1==o.length&&(o[1]=o[0]),o[0]=o[0].trim(),o[1]=o[1].trim(),i.apply(a,[o,t,n])};o!==!1&&t.support.animation||(c=e.none),r.hasClass("uk-disabled")||(s.attr("aria-expanded","false"),r.attr("aria-expanded","true"),s.filter(".uk-active").removeClass("uk-active"),r.addClass("uk-active"),this.options.connect&&this.connect.length&&(this.index=this.find(this.options.toggle).index(r),-1==this.index&&(this.index=0),this.connect.each(function(){var i=t.$(this),e=t.$(i.children()),n=t.$(e.filter(".uk-active")),o=t.$(e.eq(a.index));a.animating=!0,c.apply(a,[n,o]).then(function(){n.removeClass("uk-active"),o.addClass("uk-active"),n.attr("aria-hidden","true"),o.attr("aria-hidden","false"),t.Utils.checkDisplay(o,!0),a.animating=!1})})),this.trigger("show.uk.switcher",[r]))}}}),e={none:function(){var i=t.$.Deferred();return i.resolve(),i.promise()},fade:function(t,e){return i.apply(this,["uk-animation-fade",t,e])},"slide-bottom":function(t,e){return i.apply(this,["uk-animation-slide-bottom",t,e])},"slide-top":function(t,e){return i.apply(this,["uk-animation-slide-top",t,e])},"slide-vertical":function(t,e){var n=["uk-animation-slide-top","uk-animation-slide-bottom"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},"slide-left":function(t,e){return i.apply(this,["uk-animation-slide-left",t,e])},"slide-right":function(t,e){return i.apply(this,["uk-animation-slide-right",t,e])},"slide-horizontal":function(t,e){var n=["uk-animation-slide-right","uk-animation-slide-left"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},scale:function(t,e){return i.apply(this,["uk-animation-scale-up",t,e])}},t.switcher.animations=e}(UIkit),function(t){"use strict";t.component("tab",{defaults:{target:">li:not(.uk-tab-responsive, .uk-disabled)",connect:!1,active:0,animation:!1,duration:200},boot:function(){t.ready(function(i){t.$("[data-uk-tab]",i).each(function(){var i=t.$(this);if(!i.data("tab")){t.tab(i,t.Utils.options(i.attr("data-uk-tab")))}})})},init:function(){var i=this;this.on("click.uikit.tab",this.options.target,function(e){if(e.preventDefault(),!i.switcher||!i.switcher.animating){var n=i.find(i.options.target).not(this);n.removeClass("uk-active").blur(),i.trigger("change.uk.tab",[t.$(this).addClass("uk-active")]),i.options.connect||(n.attr("aria-expanded","false"),t.$(this).attr("aria-expanded","true"))}}),this.options.connect&&(this.connect=t.$(this.options.connect)),this.responsivetab=t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'),this.responsivetab.dropdown=this.responsivetab.find(".uk-dropdown"),this.responsivetab.lst=this.responsivetab.dropdown.find("ul"),this.responsivetab.caption=this.responsivetab.find("a:first"),this.element.hasClass("uk-tab-bottom")&&this.responsivetab.dropdown.addClass("uk-dropdown-up"),this.responsivetab.lst.on("click.uikit.tab","a",function(e){e.preventDefault(),e.stopPropagation();var n=t.$(this);i.element.children(":not(.uk-tab-responsive)").eq(n.data("index")).trigger("click")}),this.on("show.uk.switcher change.uk.tab",function(t,e){i.responsivetab.caption.html(e.text())}),this.element.append(this.responsivetab),this.options.connect&&(this.switcher=t.switcher(this.element,{toggle:">li:not(.uk-tab-responsive)",connect:this.options.connect,active:this.options.active,animation:this.options.animation,duration:this.options.duration})),t.dropdown(this.responsivetab,{mode:"click"}),i.trigger("change.uk.tab",[this.element.find(this.options.target).filter(".uk-active")]),this.check(),t.$win.on("resize orientationchange",t.Utils.debounce(function(){i.element.is(":visible")&&i.check()},100)),this.on("display.uk.check",function(){i.element.is(":visible")&&i.check()})},check:function(){var i=this.element.children(":not(.uk-tab-responsive)").removeClass("uk-hidden");if(i.length){var e,n,o=i.eq(0).offset().top+Math.ceil(i.eq(0).height()/2),s=!1;if(this.responsivetab.lst.empty(),i.each(function(){t.$(this).offset().top>o&&(s=!0)}),s)for(var a=0;a<i.length;a++)e=t.$(i.eq(a)),n=e.find("a"),"none"==e.css("float")||e.attr("uk-dropdown")||(e.addClass("uk-hidden"),e.hasClass("uk-disabled")||this.responsivetab.lst.append('<li><a href="'+n.attr("href")+'" data-index="'+a+'">'+n.html()+"</a></li>"));this.responsivetab[this.responsivetab.lst.children().length?"removeClass":"addClass"]("uk-hidden")}}})}(UIkit),function(t){"use strict";t.component("cover",{defaults:{automute:!0},boot:function(){t.ready(function(i){t.$("[data-uk-cover]",i).each(function(){var i=t.$(this);if(!i.data("cover")){t.cover(i,t.Utils.options(i.attr("data-uk-cover")))}})})},init:function(){if(this.parent=this.element.parent(),t.$win.on("load resize orientationchange",t.Utils.debounce(function(){this.check()}.bind(this),100)),this.on("display.uk.check",function(){this.element.is(":visible")&&this.check()}.bind(this)),this.check(),this.element.is("iframe")&&this.options.automute){var i=this.element.attr("src");this.element.attr("src","").on("load",function(){this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}',"*")}).attr("src",[i,i.indexOf("?")>-1?"&":"?","enablejsapi=1&api=1"].join(""))}},check:function(){this.element.css({width:"",height:""}),this.dimension={w:this.element.width(),h:this.element.height()},this.element.attr("width")&&!isNaN(this.element.attr("width"))&&(this.dimension.w=this.element.attr("width")),this.element.attr("height")&&!isNaN(this.element.attr("height"))&&(this.dimension.h=this.element.attr("height")),this.ratio=this.dimension.w/this.dimension.h;var t,i,e=this.parent.width(),n=this.parent.height();e/this.ratio<n?(t=Math.ceil(n*this.ratio),i=n):(t=e,i=Math.ceil(e/this.ratio)),this.element.css({width:t,height:i})}})}(UIkit);
