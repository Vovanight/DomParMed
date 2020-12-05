/* cacheid:ae47177e3b7d1a86268ace7246a511120 */
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
/* media/zoo/applications/jbuniversal/assets/js/libs/tablesorter.min.js */
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

    /* TableSorter 2.13.3 http://mottie.github.io/tablesorter/ */
    !(function(f){f.extend({tablesorter:new function(){function c(){var a=1<arguments.length?Array.prototype.slice.call(arguments):arguments[0];"undefined"!==typeof console&&"undefined"!==typeof console.log?console.log(a):alert(a)}function n(a,b){c(a+" ("+((new Date).getTime()-b.getTime())+"ms)")}function l(a){for(var b in a)return!1;return!0}function p(a,b,d){if(!b)return"";var h=a.config,c=h.textExtraction,g="",g="simple"===c?h.supportsTextContent?b.textContent:f(b).text():"function"===typeof c?c(b, a,d):"object"===typeof c&&c.hasOwnProperty(d)?c[d](b,a,d):h.supportsTextContent?b.textContent:f(b).text();return f.trim(g)}function w(a){var b=a.config,d=b.$tbodies=b.$table.children("tbody:not(."+b.cssInfoBlock+")"),h,x,g,k,q,f,m,A="";if(0===d.length)return b.debug?c("*Empty table!* Not building a parser cache"):"";b.debug&&(m=new Date,c("Detecting parsers for each column"));d=d[0].rows;if(d[0])for(h=[],x=d[0].cells.length,g=0;g<x;g++){k=b.$headers.filter(":not([colspan])");k=k.add(b.$headers.filter('[colspan="1"]')).filter('[data-column="'+ g+'"]:last');q=b.headers[g];f=e.getParserById(e.getData(k,q,"sorter"));b.empties[g]=e.getData(k,q,"empty")||b.emptyTo||(b.emptyToBottom?"bottom":"top");b.strings[g]=e.getData(k,q,"string")||b.stringTo||"max";if(!f)a:{k=a;q=d;f=-1;for(var l=g,t=void 0,y=e.parsers.length,v=!1,s="",t=!0;""===s&&t;)f++,q[f]?(v=q[f].cells[l],s=p(k,v,l),k.config.debug&&c("Checking if value was empty on row "+f+", column: "+l+': "'+s+'"')):t=!1;for(;0<=--y;)if((t=e.parsers[y])&&"text"!==t.id&&t.is&&t.is(s,k,v)){f=t;break a}f= e.getParserById("text")}b.debug&&(A+="column:"+g+"; parser:"+f.id+"; string:"+b.strings[g]+"; empty: "+b.empties[g]+"\n");h.push(f)}b.debug&&(c(A),n("Completed detecting parsers",m));b.parsers=h}function z(a){var b=a.tBodies,d=a.config,h,x,g=d.parsers,k,q,r,m,A,l,t,y=[];d.cache={};if(!g)return d.debug?c("*Empty table!* Not building a cache"):"";d.debug&&(t=new Date);d.showProcessing&&e.isProcessing(a,!0);for(m=0;m<b.length;m++)if(d.cache[m]={row:[],normalized:[]},!f(b[m]).hasClass(d.cssInfoBlock)){h= b[m]&&b[m].rows.length||0;x=b[m].rows[0]&&b[m].rows[0].cells.length||0;for(q=0;q<h;++q)if(A=f(b[m].rows[q]),l=[],A.hasClass(d.cssChildRow))d.cache[m].row[d.cache[m].row.length-1]=d.cache[m].row[d.cache[m].row.length-1].add(A);else{d.cache[m].row.push(A);for(r=0;r<x;++r)k=p(a,A[0].cells[r],r),k=g[r].format(k,a,A[0].cells[r],r),l.push(k),"numeric"===(g[r].type||"").toLowerCase()&&(y[r]=Math.max(Math.abs(k)||0,y[r]||0));l.push(d.cache[m].normalized.length);d.cache[m].normalized.push(l)}d.cache[m].colMax= y}d.showProcessing&&e.isProcessing(a);d.debug&&n("Building cache for "+h+" rows",t)}function B(a,b){var d=a.config,h=d.widgetOptions,c=a.tBodies,g=[],k=d.cache,q,r,m,A,p,t,y,v,s,u,w;if(!l(k)){d.debug&&(w=new Date);for(v=0;v<c.length;v++)if(q=f(c[v]),q.length&&!q.hasClass(d.cssInfoBlock)){p=e.processTbody(a,q,!0);q=k[v].row;r=k[v].normalized;A=(m=r.length)?r[0].length-1:0;for(t=0;t<m;t++)if(u=r[t][A],g.push(q[u]),!d.appender||d.pager&&!(d.pager.removeRows&&h.pager_removeRows||d.pager.ajax))for(s=q[u].length, y=0;y<s;y++)p.append(q[u][y]);e.processTbody(a,p,!1)}d.appender&&d.appender(a,g);d.debug&&n("Rebuilt table",w);b||d.appender||e.applyWidget(a);f(a).trigger("sortEnd",a);f(a).trigger("updateComplete",a)}}function E(a){var b=[],d={},h=0,c=f(a).find("thead:eq(0), tfoot").children("tr"),g,k,e,r,m,l,n,p,u,v;for(g=0;g<c.length;g++)for(m=c[g].cells,k=0;k<m.length;k++){r=m[k];l=r.parentNode.rowIndex;n=l+"-"+r.cellIndex;p=r.rowSpan||1;u=r.colSpan||1;"undefined"===typeof b[l]&&(b[l]=[]);for(e=0;e<b[l].length+ 1;e++)if("undefined"===typeof b[l][e]){v=e;break}d[n]=v;h=Math.max(v,h);f(r).attr({"data-column":v});for(e=l;e<l+p;e++)for("undefined"===typeof b[e]&&(b[e]=[]),n=b[e],r=v;r<v+u;r++)n[r]="x"}a.config.columns=h+1;return d}function C(a){var b=E(a),d,h,x,g,k,q,r,m=a.config;m.headerList=[];m.headerContent=[];m.debug&&(r=new Date);g=m.cssIcon?'<i class="'+m.cssIcon+" "+e.css.icon+'"></i>':"";m.$headers=f(a).find(m.selectorHeaders).each(function(a){h=f(this);d=m.headers[a];m.headerContent[a]=f(this).html(); k=m.headerTemplate.replace(/\{content\}/g,f(this).html()).replace(/\{icon\}/g,g);m.onRenderTemplate&&(x=m.onRenderTemplate.apply(h,[a,k]))&&"string"===typeof x&&(k=x);f(this).html('<div class="tablesorter-header-inner">'+k+"</div>");m.onRenderHeader&&m.onRenderHeader.apply(h,[a]);this.column=b[this.parentNode.rowIndex+"-"+this.cellIndex];var c=e.getData(h,d,"sortInitialOrder")||m.sortInitialOrder;this.order=/^d/i.test(c)||1===c?[1,0,2]:[0,1,2];this.count=-1;this.lockedOrder=!1;q=e.getData(h,d,"lockedOrder")|| !1;"undefined"!==typeof q&&!1!==q&&(this.order=this.lockedOrder=/^d/i.test(q)||1===q?[1,1,1]:[0,0,0]);h.addClass(e.css.header+" "+m.cssHeader);m.headerList[a]=this;h.parent().addClass(e.css.headerRow+" "+m.cssHeaderRow);h.attr("tabindex",0)});D(a);m.debug&&(n("Built headers:",r),c(m.$headers))}function F(a,b,d){var h=a.config;h.$table.find(h.selectorRemove).remove();w(a);z(a);G(h.$table,b,d)}function D(a){var b,d=a.config;d.$headers.each(function(a,c){b="false"===e.getData(c,d.headers[a],"sorter"); c.sortDisabled=b;f(c)[b?"addClass":"removeClass"]("sorter-false")})}function H(a){var b,d,h,c=a.config,g=c.sortList,k=[e.css.sortAsc+" "+c.cssAsc,e.css.sortDesc+" "+c.cssDesc],q=f(a).find("tfoot tr").children().removeClass(k.join(" "));c.$headers.removeClass(k.join(" "));h=g.length;for(b=0;b<h;b++)if(2!==g[b][1]&&(a=c.$headers.not(".sorter-false").filter('[data-column="'+g[b][0]+'"]'+(1===h?":last":"")),a.length))for(d=0;d<a.length;d++)a[d].sortDisabled||(a.eq(d).addClass(k[g[b][1]]),q.length&&q.filter('[data-column="'+ g[b][0]+'"]').eq(d).addClass(k[g[b][1]]))}function L(a){if(a.config.widthFixed&&0===f(a).find("colgroup").length){var b=f("<colgroup>"),d=f(a).width();f(a.tBodies[0]).find("tr:first").children("td:visible").each(function(){b.append(f("<col>").css("width",parseInt(f(this).width()/d*1E3,10)/10+"%"))});f(a).prepend(b)}}function M(a,b){var d,h,c,g=a.config,k=b||g.sortList;g.sortList=[];f.each(k,function(a,b){d=[parseInt(b[0],10),parseInt(b[1],10)];if(c=g.$headers[d[0]])g.sortList.push(d),h=f.inArray(d[1], c.order),c.count=0<=h?h:d[1]%(g.sortReset?3:2)})}function N(a,b,d){var h,c,g,k=a.config,q=!d[k.sortMultiSortKey],l=f(a);l.trigger("sortStart",a);b.count=d[k.sortResetKey]?2:(b.count+1)%(k.sortReset?3:2);k.sortRestart&&(c=b,k.$headers.each(function(){this===c||!q&&f(this).is("."+e.css.sortDesc+",."+e.css.sortAsc)||(this.count=-1)}));c=b.column;if(q){k.sortList=[];if(null!==k.sortForce)for(h=k.sortForce,d=0;d<h.length;d++)h[d][0]!==c&&k.sortList.push(h[d]);h=b.order[b.count];if(2>h&&(k.sortList.push([c, h]),1<b.colSpan))for(d=1;d<b.colSpan;d++)k.sortList.push([c+d,h])}else if(k.sortAppend&&1<k.sortList.length&&e.isValueInArray(k.sortAppend[0][0],k.sortList)&&k.sortList.pop(),e.isValueInArray(c,k.sortList))for(d=0;d<k.sortList.length;d++)g=k.sortList[d],h=k.$headers[g[0]],g[0]===c&&(g[1]=h.order[b.count],2===g[1]&&(k.sortList.splice(d,1),h.count=-1));else if(h=b.order[b.count],2>h&&(k.sortList.push([c,h]),1<b.colSpan))for(d=1;d<b.colSpan;d++)k.sortList.push([c+d,h]);if(null!==k.sortAppend)for(h=k.sortAppend, d=0;d<h.length;d++)h[d][0]!==c&&k.sortList.push(h[d]);l.trigger("sortBegin",a);setTimeout(function(){H(a);I(a);B(a)},1)}function I(a){var b,d,h,c,g,k,f,r,m,p,u,t,y,v=0,s=a.config,w=s.textSorter||"",z=s.sortList,B=z.length,C=a.tBodies.length;if(!s.serverSideSorting&&!l(s.cache)){s.debug&&(p=new Date);for(d=0;d<C;d++)k=s.cache[d].colMax,m=(f=s.cache[d].normalized)&&f[0]?f[0].length-1:0,f.sort(function(d,f){for(b=0;b<B;b++){g=z[b][0];r=z[b][1];t=(v=0===r)?d:f;y=v?f:d;h=s.string[s.empties[g]||s.emptyTo]; if(""===t[g]&&0!==h)return("boolean"===typeof h?h?-1:1:h||1)*(v?1:-1);if(""===y[g]&&0!==h)return("boolean"===typeof h?h?1:-1:-h||-1)*(v?1:-1);(c=/n/i.test(s.parsers&&s.parsers[g]?s.parsers[g].type||"":""))&&s.strings[g]?(c="boolean"===typeof s.string[s.strings[g]]?(v?1:-1)*(s.string[s.strings[g]]?-1:1):s.strings[g]?s.string[s.strings[g]]||0:0,u=s.numberSorter?s.numberSorter(t[g],y[g],v,k[g],a):e.sortNumeric(t[g],y[g],c,k[g])):u="function"===typeof w?w(t[g],y[g],v,g,a):"object"===typeof w&&w.hasOwnProperty(g)? w[g](t[g],y[g],v,g,a):e.sortNatural(t[g],y[g]);if(u)return u}return d[m]-f[m]});s.debug&&n("Sorting on "+z.toString()+" and dir "+r+" time",p)}}function J(a,b){var d=a[0].config;d.pager&&!d.pager.ajax&&a.trigger("updateComplete");"function"===typeof b&&b(a[0])}function G(a,b,d){!1===b||a[0].isProcessing?J(a,d):a.trigger("sorton",[a[0].config.sortList,function(){J(a,d)}])}function K(a){var b=a.config,d=b.$table,c,x;b.$headers.find(b.selectorSort).add(b.$headers.filter(b.selectorSort)).unbind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter").bind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter", function(d,c){if(!(1!==(d.which||d.button)&&!/sort|keypress/.test(d.type)||"keypress"===d.type&&13!==d.which||"mouseup"===d.type&&!0!==c&&250<(new Date).getTime()-x)){if("mousedown"===d.type)return x=(new Date).getTime(),"INPUT"===d.target.tagName?"":!b.cancelSelection;b.delayInit&&l(b.cache)&&z(a);var h=(/TH|TD/.test(this.tagName)?f(this):f(this).parents("th, td").filter(":first"))[0];h.sortDisabled||N(a,h,d)}});b.cancelSelection&&b.$headers.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none", MozUserSelect:"none"});d.unbind("sortReset update updateRows updateCell updateAll addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(".tablesorter ")).bind("sortReset.tablesorter",function(d){d.stopPropagation();b.sortList=[];H(a);I(a);B(a)}).bind("updateAll.tablesorter",function(b,d,c){b.stopPropagation();e.refreshWidgets(a,!0,!0);e.restoreHeaders(a);C(a);K(a);F(a,d,c)}).bind("update.tablesorter updateRows.tablesorter",function(b,d,c){b.stopPropagation(); D(a);F(a,d,c)}).bind("updateCell.tablesorter",function(c,h,e,l){c.stopPropagation();d.find(b.selectorRemove).remove();var m,x,n;m=d.find("tbody");c=m.index(f(h).parents("tbody").filter(":first"));var t=f(h).parents("tr").filter(":first");h=f(h)[0];m.length&&0<=c&&(x=m.eq(c).find("tr").index(t),n=h.cellIndex,m=b.cache[c].normalized[x].length-1,b.cache[c].row[a.config.cache[c].normalized[x][m]]=t,b.cache[c].normalized[x][n]=b.parsers[n].format(p(a,h,n),a,h,n),G(d,e,l))}).bind("addRows.tablesorter", function(g,e,f,x){g.stopPropagation();var m=e.filter("tr").length,l=[],n=e[0].cells.length,t=d.find("tbody").index(e.parents("tbody").filter(":first"));b.parsers||w(a);for(g=0;g<m;g++){for(c=0;c<n;c++)l[c]=b.parsers[c].format(p(a,e[g].cells[c],c),a,e[g].cells[c],c);l.push(b.cache[t].row.length);b.cache[t].row.push([e[g]]);b.cache[t].normalized.push(l);l=[]}G(d,f,x)}).bind("sorton.tablesorter",function(b,c,h,e){var f=a.config;b.stopPropagation();d.trigger("sortStart",this);M(a,c);H(a);f.delayInit&& l(f.cache)&&z(a);d.trigger("sortBegin",this);I(a);B(a,e);"function"===typeof h&&h(a)}).bind("appendCache.tablesorter",function(b,d,c){b.stopPropagation();B(a,c);"function"===typeof d&&d(a)}).bind("applyWidgetId.tablesorter",function(d,c){d.stopPropagation();e.getWidgetById(c).format(a,b,b.widgetOptions)}).bind("applyWidgets.tablesorter",function(b,d){b.stopPropagation();e.applyWidget(a,d)}).bind("refreshWidgets.tablesorter",function(b,d,c){b.stopPropagation();e.refreshWidgets(a,d,c)}).bind("destroy.tablesorter", function(b,d,c){b.stopPropagation();e.destroy(a,d,c)})}var e=this;e.version="2.13.3";e.parsers=[];e.widgets=[];e.defaults={theme:"default",widthFixed:!1,showProcessing:!1,headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0,delayInit:!1,serverSideSorting:!1,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1, sortRestart:!1,emptyTo:"bottom",stringTo:"max",textExtraction:"simple",textSorter:null,numberSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:!0,initialized:null,tableClass:"",cssAsc:"",cssDesc:"",cssHeader:"",cssHeaderRow:"",cssProcessing:"",cssChildRow:"tablesorter-childRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]}; e.css={table:"tablesorter",childRow:"tablesorter-childRow",header:"tablesorter-header",headerRow:"tablesorter-headerRow",icon:"tablesorter-icon",info:"tablesorter-infoOnly",processing:"tablesorter-processing",sortAsc:"tablesorter-headerAsc",sortDesc:"tablesorter-headerDesc"};e.log=c;e.benchmark=n;e.construct=function(a){return this.each(function(){var b=f.extend(!0,{},e.defaults,a);!this.hasInitialized&&e.buildTable&&"TABLE"!==this.tagName&&e.buildTable(this,b);e.setup(this,b)})};e.setup=function(a, b){if(!a||!a.tHead||0===a.tBodies.length||!0===a.hasInitialized)return b.debug?c("stopping initialization! No table, thead, tbody or tablesorter has already been initialized"):"";var d="",h=f(a),l=f.metadata;a.hasInitialized=!1;a.isProcessing=!0;a.config=b;f.data(a,"tablesorter",b);b.debug&&f.data(a,"startoveralltimer",new Date);b.supportsTextContent="x"===f("<span>x</span>")[0].textContent;b.supportsDataObject=function(a){a[0]=parseInt(a[0],10);return 1<a[0]||1===a[0]&&4<=parseInt(a[1],10)}(f.fn.jquery.split(".")); b.string={max:1,min:-1,"max+":1,"max-":-1,zero:0,none:0,"null":0,top:!0,bottom:!1};/tablesorter\-/.test(h.attr("class"))||(d=""!==b.theme?" tablesorter-"+b.theme:"");b.$table=h.addClass(e.css.table+" "+b.tableClass+d);b.$tbodies=h.children("tbody:not(."+b.cssInfoBlock+")");b.widgetInit={};C(a);L(a);w(a);b.delayInit||z(a);K(a);b.supportsDataObject&&"undefined"!==typeof h.data().sortlist?b.sortList=h.data().sortlist:l&&h.metadata()&&h.metadata().sortlist&&(b.sortList=h.metadata().sortlist);e.applyWidget(a, !0);0<b.sortList.length?h.trigger("sorton",[b.sortList,{},!b.initWidgets]):b.initWidgets&&e.applyWidget(a);b.showProcessing&&h.unbind("sortBegin.tablesorter sortEnd.tablesorter").bind("sortBegin.tablesorter sortEnd.tablesorter",function(b){e.isProcessing(a,"sortBegin"===b.type)});a.hasInitialized=!0;a.isProcessing=!1;b.debug&&e.benchmark("Overall initialization time",f.data(a,"startoveralltimer"));h.trigger("tablesorter-initialized",a);"function"===typeof b.initialized&&b.initialized(a)};e.isProcessing= function(a,b,d){a=f(a);var c=a[0].config;a=d||a.find("."+e.css.header);b?(0<c.sortList.length&&(a=a.filter(function(){return this.sortDisabled?!1:e.isValueInArray(parseFloat(f(this).attr("data-column")),c.sortList)})),a.addClass(e.css.processing+" "+c.cssProcessing)):a.removeClass(e.css.processing+" "+c.cssProcessing)};e.processTbody=function(a,b,d){if(d)return a.isProcessing=!0,b.before('<span class="tablesorter-savemyplace"/>'),d=f.fn.detach?b.detach():b.remove();d=f(a).find("span.tablesorter-savemyplace"); b.insertAfter(d);d.remove();a.isProcessing=!1};e.clearTableBody=function(a){f(a)[0].config.$tbodies.empty()};e.restoreHeaders=function(a){var b=a.config;b.$table.find(b.selectorHeaders).each(function(a){f(this).find(".tablesorter-header-inner").length&&f(this).html(b.headerContent[a])})};e.destroy=function(a,b,d){a=f(a)[0];if(a.hasInitialized){e.refreshWidgets(a,!0,!0);var c=f(a),l=a.config,g=c.find("thead:first"),k=g.find("tr."+e.css.headerRow).removeClass(e.css.headerRow+" "+l.cssHeaderRow),n=c.find("tfoot:first > tr").children("th, td"); g.find("tr").not(k).remove();c.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd ".split(" ").join(".tablesorter "));l.$headers.add(n).removeClass([e.css.header,l.cssHeader,l.cssAsc,l.cssDesc,e.css.sortAsc,e.css.sortDesc].join(" ")).removeAttr("data-column");k.find(l.selectorSort).unbind("mousedown.tablesorter mouseup.tablesorter keypress.tablesorter"); e.restoreHeaders(a);!1!==b&&c.removeClass(e.css.table+" "+l.tableClass+" tablesorter-"+l.theme);a.hasInitialized=!1;"function"===typeof d&&d(a)}};e.regex={chunk:/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,hex:/^0x[0-9a-f]+$/i};e.sortNatural=function(a,b){if(a===b)return 0;var d,c,f,g,k,l;c=e.regex;if(c.hex.test(b)){d=parseInt(a.match(c.hex),16);f=parseInt(b.match(c.hex),16);if(d<f)return-1;if(d>f)return 1}d=a.replace(c.chunk,"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/, "").split("\\0");c=b.replace(c.chunk,"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");l=Math.max(d.length,c.length);for(k=0;k<l;k++){f=isNaN(d[k])?d[k]||0:parseFloat(d[k])||0;g=isNaN(c[k])?c[k]||0:parseFloat(c[k])||0;if(isNaN(f)!==isNaN(g))return isNaN(f)?1:-1;typeof f!==typeof g&&(f+="",g+="");if(f<g)return-1;if(f>g)return 1}return 0};e.sortText=function(a,b){return a>b?1:a<b?-1:0};e.getTextValue=function(a,b,d){if(d){var c=a?a.length:0,e=d+b;for(d=0;d<c;d++)e+=a.charCodeAt(d);return b* e}return 0};e.sortNumeric=function(a,b,d,c){if(a===b)return 0;isNaN(a)&&(a=e.getTextValue(a,d,c));isNaN(b)&&(b=e.getTextValue(b,d,c));return a-b};e.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",A:"\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",c:"\u00e7\u0107\u010d",C:"\u00c7\u0106\u010c",e:"\u00e9\u00e8\u00ea\u00eb\u011b\u0119",E:"\u00c9\u00c8\u00ca\u00cb\u011a\u0118",i:"\u00ed\u00ec\u0130\u00ee\u00ef\u0131",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6", O:"\u00d3\u00d2\u00d4\u00d5\u00d6",ss:"\u00df",SS:"\u1e9e",u:"\u00fa\u00f9\u00fb\u00fc\u016f",U:"\u00da\u00d9\u00db\u00dc\u016e"};e.replaceAccents=function(a){var b,d="[",c=e.characterEquivalents;if(!e.characterRegex){e.characterRegexArray={};for(b in c)"string"===typeof b&&(d+=c[b],e.characterRegexArray[b]=RegExp("["+c[b]+"]","g"));e.characterRegex=RegExp(d+"]")}if(e.characterRegex.test(a))for(b in c)"string"===typeof b&&(a=a.replace(e.characterRegexArray[b],b));return a};e.isValueInArray=function(a, b){var d,c=b.length;for(d=0;d<c;d++)if(b[d][0]===a)return!0;return!1};e.addParser=function(a){var b,d=e.parsers.length,c=!0;for(b=0;b<d;b++)e.parsers[b].id.toLowerCase()===a.id.toLowerCase()&&(c=!1);c&&e.parsers.push(a)};e.getParserById=function(a){var b,d=e.parsers.length;for(b=0;b<d;b++)if(e.parsers[b].id.toLowerCase()===a.toString().toLowerCase())return e.parsers[b];return!1};e.addWidget=function(a){e.widgets.push(a)};e.getWidgetById=function(a){var b,d,c=e.widgets.length;for(b=0;b<c;b++)if((d= e.widgets[b])&&d.hasOwnProperty("id")&&d.id.toLowerCase()===a.toLowerCase())return d};e.applyWidget=function(a,b){a=f(a)[0];var d=a.config,c=d.widgetOptions,l=[],g,k,q;d.debug&&(g=new Date);d.widgets.length&&(d.widgets=f.grep(d.widgets,function(a,b){return f.inArray(a,d.widgets)===b}),f.each(d.widgets||[],function(a,b){(q=e.getWidgetById(b))&&q.id&&(q.priority||(q.priority=10),l[a]=q)}),l.sort(function(a,b){return a.priority<b.priority?-1:a.priority===b.priority?0:1}),f.each(l,function(e,g){if(g){if(b|| !d.widgetInit[g.id])g.hasOwnProperty("options")&&(c=a.config.widgetOptions=f.extend(!0,{},g.options,c),d.widgetInit[g.id]=!0),g.hasOwnProperty("init")&&g.init(a,g,d,c);!b&&g.hasOwnProperty("format")&&g.format(a,d,c,!1)}}));d.debug&&(k=d.widgets.length,n("Completed "+(!0===b?"initializing ":"applying ")+k+" widget"+(1!==k?"s":""),g))};e.refreshWidgets=function(a,b,d){a=f(a)[0];var h,l=a.config,g=l.widgets,k=e.widgets,n=k.length;for(h=0;h<n;h++)k[h]&&k[h].id&&(b||0>f.inArray(k[h].id,g))&&(l.debug&& c("Refeshing widgets: Removing "+k[h].id),k[h].hasOwnProperty("remove")&&(k[h].remove(a,l,l.widgetOptions),l.widgetInit[k[h].id]=!1));!0!==d&&e.applyWidget(a,b)};e.getData=function(a,b,c){var e="";a=f(a);var l,g;if(!a.length)return"";l=f.metadata?a.metadata():!1;g=" "+(a.attr("class")||"");"undefined"!==typeof a.data(c)||"undefined"!==typeof a.data(c.toLowerCase())?e+=a.data(c)||a.data(c.toLowerCase()):l&&"undefined"!==typeof l[c]?e+=l[c]:b&&"undefined"!==typeof b[c]?e+=b[c]:" "!==g&&g.match(" "+ c+"-")&&(e=g.match(RegExp("\\s"+c+"-([\\w-]+)"))[1]||"");return f.trim(e)};e.formatFloat=function(a,b){if("string"!==typeof a||""===a)return a;var c;a=(b&&b.config?!1!==b.config.usNumberFormat:"undefined"!==typeof b?b:1)?a.replace(/,/g,""):a.replace(/[\s|\.]/g,"").replace(/,/g,".");/^\s*\([.\d]+\)/.test(a)&&(a=a.replace(/^\s*\(([.\d]+)\)/,"-$1"));c=parseFloat(a);return isNaN(c)?f.trim(a):c};e.isDigit=function(a){return isNaN(a)?/^[\-+(]?\d+[)]?$/.test(a.toString().replace(/[,.'"\s]/g,"")):!0}}}); var p=f.tablesorter;f.fn.extend({tablesorter:p.construct});p.addParser({id:"text",is:function(){return!0},format:function(c,n){var l=n.config;c&&(c=f.trim(l.ignoreCase?c.toLocaleLowerCase():c),c=l.sortLocaleCompare?p.replaceAccents(c):c);return c},type:"text"});p.addParser({id:"digit",is:function(c){return p.isDigit(c)},format:function(c,n){var l=p.formatFloat((c||"").replace(/[^\w,. \-()]/g,""),n);return c&&"number"===typeof l?l:c?f.trim(c&&n.config.ignoreCase?c.toLocaleLowerCase():c):c},type:"numeric"}); p.addParser({id:"currency",is:function(c){return/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((c||"").replace(/[,. ]/g,""))},format:function(c,n){var l=p.formatFloat((c||"").replace(/[^\w,. \-()]/g,""),n);return c&&"number"===typeof l?l:c?f.trim(c&&n.config.ignoreCase?c.toLocaleLowerCase():c):c},type:"numeric"});p.addParser({id:"ipAddress",is:function(c){return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(c)},format:function(c,f){var l,u=c?c.split("."): "",w="",z=u.length;for(l=0;l<z;l++)w+=("00"+u[l]).slice(-3);return c?p.formatFloat(w,f):c},type:"numeric"});p.addParser({id:"url",is:function(c){return/^(https?|ftp|file):\/\//.test(c)},format:function(c){return c?f.trim(c.replace(/(https?|ftp|file):\/\//,"")):c},type:"text"});p.addParser({id:"isoDate",is:function(c){return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(c)},format:function(c,f){return c?p.formatFloat(""!==c?(new Date(c.replace(/-/g,"/"))).getTime()||"":"",f):c},type:"numeric"});p.addParser({id:"percent", is:function(c){return/(\d\s*?%|%\s*?\d)/.test(c)&&15>c.length},format:function(c,f){return c?p.formatFloat(c.replace(/%/g,""),f):c},type:"numeric"});p.addParser({id:"usLongDate",is:function(c){return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(c)||/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(c)},format:function(c,f){return c?p.formatFloat((new Date(c.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||"",f):c},type:"numeric"});p.addParser({id:"shortDate",is:function(c){return/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((c|| "").replace(/\s+/g," ").replace(/[\-.,]/g,"/"))},format:function(c,f,l,u){if(c){l=f.config;var w=l.headerList[u];u=w.dateFormat||p.getData(w,l.headers[u],"dateFormat")||l.dateFormat;c=c.replace(/\s+/g," ").replace(/[\-.,]/g,"/");"mmddyyyy"===u?c=c.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2"):"ddmmyyyy"===u?c=c.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1"):"yyyymmdd"===u&&(c=c.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,"$1/$2/$3"))}return c?p.formatFloat((new Date(c)).getTime()|| "",f):c},type:"numeric"});p.addParser({id:"time",is:function(c){return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(c)},format:function(c,f){return c?p.formatFloat((new Date("2000/01/01 "+c.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||"",f):c},type:"numeric"});p.addParser({id:"metadata",is:function(){return!1},format:function(c,n,l){c=n.config;c=c.parserMetadataName?c.parserMetadataName:"sortValue";return f(l).metadata()[c]},type:"numeric"});p.addWidget({id:"zebra",priority:90,format:function(c, n,l){var u,w,z,B,E,C,F=RegExp(n.cssChildRow,"i"),D=n.$tbodies;n.debug&&(E=new Date);for(c=0;c<D.length;c++)u=D.eq(c),C=u.children("tr").length,1<C&&(z=0,u=u.children("tr:visible"),u.each(function(){w=f(this);F.test(this.className)||z++;B=0===z%2;w.removeClass(l.zebra[B?1:0]).addClass(l.zebra[B?0:1])}));n.debug&&p.benchmark("Applying Zebra widget",E)},remove:function(c,n,l){var p;n=n.$tbodies;var w=(l.zebra||["even","odd"]).join(" ");for(l=0;l<n.length;l++)p=f.tablesorter.processTbody(c,n.eq(l),!0), p.children().removeClass(w),f.tablesorter.processTbody(c,p,!1)}})})(jQuery);

    /* Metadata - jQuery plugin for parsing metadata from elements */
    (function(c){c.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(b,c){this.defaults.type=b;this.defaults.name=c},get:function(b,f){var d=c.extend({},this.defaults,f);d.single.length||(d.single="metadata");var a=c.data(b,d.single);if(a)return a;a="{}";if("class"==d.type){var e=d.cre.exec(b.className);e&&(a=e[1])}else if("elem"==d.type){if(!b.getElementsByTagName)return;e=b.getElementsByTagName(d.name);e.length&&(a=c.trim(e[0].innerHTML))}else void 0!= b.getAttribute&&(e=b.getAttribute(d.name))&&(a=e);0>a.indexOf("{")&&(a="{"+a+"}");a=eval("("+a+")");c.data(b,d.single,a);return a}}});c.fn.metadata=function(b){return c.metadata.get(this[0],b)}})(jQuery);

})(jQuery, window, document);
