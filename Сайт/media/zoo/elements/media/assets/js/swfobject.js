var swfobject=function(){var s,c,d,f,l,p,m="undefined",w="object",u="Shockwave Flash",h="application/x-shockwave-flash",v="SWFObjectExprInst",e="onreadystatechange",y=window,g=document,b=navigator,C=!1,a=[function(){(C?function(){var t=g.getElementsByTagName("body")[0],n=x(w);n.setAttribute("type",h);var a=t.appendChild(n);{var i;a?(i=0,function(){if(typeof a.GetVariable!=m){var e=a.GetVariable("$version");e&&(e=e.split(" ")[1].split(","),N.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)])}else if(i<10)return i++,setTimeout(arguments.callee,10);t.removeChild(n),a=null,I()}()):I()}}:I)()}],E=[],S=[],o=[],i=!1,A=!1,r=!0,N=function(){var e=typeof g.getElementById!=m&&typeof g.getElementsByTagName!=m&&typeof g.createElement!=m,t=b.userAgent.toLowerCase(),n=b.platform.toLowerCase(),a=/win/.test(n||t),i=/mac/.test(n||t),r=!!/webkit/.test(t)&&parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")),o=!1,l=[0,0,0],s=null;if(typeof b.plugins!=m&&typeof b.plugins[u]==w)!(s=b.plugins[u].description)||typeof b.mimeTypes!=m&&b.mimeTypes[h]&&!b.mimeTypes[h].enabledPlugin||(o=!(C=!0),s=s.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),l[0]=parseInt(s.replace(/^(.*)\..*$/,"$1"),10),l[1]=parseInt(s.replace(/^.*\.(.*)\s.*$/,"$1"),10),l[2]=/[a-zA-Z]/.test(s)?parseInt(s.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof y.ActiveXObject!=m)try{var c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");c&&(s=c.GetVariable("$version"))&&(o=!0,s=s.split(" ")[1].split(","),l=[parseInt(s[0],10),parseInt(s[1],10),parseInt(s[2],10)])}catch(e){}return{w3:e,pv:l,wk:r,ie:o,win:a,mac:i}}();N.w3&&((typeof g.readyState!=m&&"complete"==g.readyState||typeof g.readyState==m&&(g.getElementsByTagName("body")[0]||g.body))&&t(),i||(typeof g.addEventListener!=m&&g.addEventListener("DOMContentLoaded",t,!1),N.ie&&N.win&&(g.attachEvent(e,function(){"complete"==g.readyState&&(g.detachEvent(e,arguments.callee),t())}),y==top&&function(){if(!i){try{g.documentElement.doScroll("left")}catch(e){return setTimeout(arguments.callee,0)}t()}}()),N.wk&&function(){i||(/loaded|complete/.test(g.readyState)?t():setTimeout(arguments.callee,0))}(),T(t)));function t(){if(!i){try{var e=g.getElementsByTagName("body")[0].appendChild(x("span"));e.parentNode.removeChild(e)}catch(e){return}i=!0;for(var t=a.length,n=0;n<t;n++)a[n]()}}function n(e){i?e():a[a.length]=e}function T(e){var t,n,a,i;typeof y.addEventListener!=m?y.addEventListener("load",e,!1):typeof g.addEventListener!=m?g.addEventListener("load",e,!1):typeof y.attachEvent!=m?(a="onload",i=e,(n=y).attachEvent(a,i),o[o.length]=[n,a,i]):"function"==typeof y.onload?(t=y.onload,y.onload=function(){t(),e()}):y.onload=e}function I(){var e=E.length;if(0<e)for(var t=0;t<e;t++){var n,a=E[t].id,i=E[t].callbackFn,r={success:!1,id:a};if(0<N.pv[0]){var o=$(a);if(o)if(!M(E[t].swfVersion)||N.wk&&N.wk<312)if(E[t].expressInstall&&k()){var l={};l.data=E[t].expressInstall,l.width=o.getAttribute("width")||"0",l.height=o.getAttribute("height")||"0",o.getAttribute("class")&&(l.styleclass=o.getAttribute("class")),o.getAttribute("align")&&(l.align=o.getAttribute("align"));for(var s={},c=o.getElementsByTagName("param"),d=c.length,f=0;f<d;f++)"movie"!=c[f].getAttribute("name").toLowerCase()&&(s[c[f].getAttribute("name")]=c[f].getAttribute("value"));j(l,s,a,i)}else!function(e){{var t;N.ie&&N.win&&4!=e.readyState?(t=x("div"),e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(B(e),t),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()):e.parentNode.replaceChild(B(e),e)}}(o),i&&i(r);else P(a,!0),i&&(r.success=!0,r.ref=L(a),i(r))}else{P(a,!0),i&&((n=L(a))&&typeof n.SetVariable!=m&&(r.success=!0,r.ref=n),i(r))}}}function L(e){var t,n=null,a=$(e);return a&&"OBJECT"==a.nodeName&&(typeof a.SetVariable!=m?n=a:(t=a.getElementsByTagName(w)[0])&&(n=t)),n}function k(){return!A&&M("6.0.65")&&(N.win||N.mac)&&!(N.wk&&N.wk<312)}function j(e,t,n,a){d=a||null,f={success:!(A=!0),id:n};var i,r,o,l=$(n);l&&(c="OBJECT"==l.nodeName?(s=B(l),null):(s=l,n),e.id=v,(typeof e.width==m||!/%$/.test(e.width)&&parseInt(e.width,10)<310)&&(e.width="310"),(typeof e.height==m||!/%$/.test(e.height)&&parseInt(e.height,10)<137)&&(e.height="137"),g.title=g.title.slice(0,47)+" - Flash Player Installation",i=N.ie&&N.win?"ActiveX":"PlugIn",r="MMredirectURL="+y.location.toString().replace(/&/g,"%26")+"&MMplayerType="+i+"&MMdoctitle="+g.title,typeof t.flashvars!=m?t.flashvars+="&"+r:t.flashvars=r,N.ie&&N.win&&4!=l.readyState&&(n+="SWFObjectNew",(o=x("div")).setAttribute("id",n),l.parentNode.insertBefore(o,l),l.style.display="none",function(){4==l.readyState?l.parentNode.removeChild(l):setTimeout(arguments.callee,10)}()),O(e,t,n))}function B(e){var t=x("div");if(N.win&&N.ie)t.innerHTML=e.innerHTML;else{var n=e.getElementsByTagName(w)[0];if(n){var a=n.childNodes;if(a)for(var i=a.length,r=0;r<i;r++)1==a[r].nodeType&&"PARAM"==a[r].nodeName||8==a[r].nodeType||t.appendChild(a[r].cloneNode(!0))}}return t}function O(e,t,n){var a,i,r,o,l,s=$(n);if(N.wk&&N.wk<312)return a;if(s)if(typeof e.id==m&&(e.id=n),N.ie&&N.win){var c,d="";for(c in e)e[c]!=Object.prototype[c]&&("data"==c.toLowerCase()?t.movie=e[c]:"styleclass"==c.toLowerCase()?d+=' class="'+e[c]+'"':"classid"!=c.toLowerCase()&&(d+=" "+c+'="'+e[c]+'"'));var f,p="";for(f in t)t[f]!=Object.prototype[f]&&(p+='<param name="'+f+'" value="'+t[f]+'" />');s.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+d+">"+p+"</object>",S[S.length]=e.id,a=$(e.id)}else{var u,v,y=x(w);for(u in y.setAttribute("type",h),e)e[u]!=Object.prototype[u]&&("styleclass"==u.toLowerCase()?y.setAttribute("class",e[u]):"classid"!=u.toLowerCase()&&y.setAttribute(u,e[u]));for(v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&(i=y,o=t[r=v],l=void 0,(l=x("param")).setAttribute("name",r),l.setAttribute("value",o),i.appendChild(l));s.parentNode.replaceChild(y,s),a=y}return a}function F(e){var t=$(e);t&&"OBJECT"==t.nodeName&&(N.ie&&N.win?(t.style.display="none",function(){4==t.readyState?function(e){var t=$(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function $(e){var t=null;try{t=g.getElementById(e)}catch(e){}return t}function x(e){return g.createElement(e)}function M(e){var t=N.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]}function V(e,t,n,a){var i,r,o;N.ie&&N.mac||(i=g.getElementsByTagName("head")[0])&&(r=n&&"string"==typeof n?n:"screen",a&&(p=l=null),l&&p==r||((o=x("style")).setAttribute("type","text/css"),o.setAttribute("media",r),l=i.appendChild(o),N.ie&&N.win&&typeof g.styleSheets!=m&&0<g.styleSheets.length&&(l=g.styleSheets[g.styleSheets.length-1]),p=r),N.ie&&N.win?l&&typeof l.addRule==w&&l.addRule(e,t):l&&typeof g.createTextNode!=m&&l.appendChild(g.createTextNode(e+" {"+t+"}")))}function P(e,t){var n;r&&(n=t?"visible":"hidden",i&&$(e)?$(e).style.visibility=n:V("#"+e,"visibility:"+n))}function R(e){return null!=/[\\\"<>\.;]/.exec(e)&&typeof encodeURIComponent!=m?encodeURIComponent(e):e}N.ie&&N.win&&window.attachEvent("onunload",function(){for(var e=o.length,t=0;t<e;t++)o[t][0].detachEvent(o[t][1],o[t][2]);for(var n,a,i=S.length,r=0;r<i;r++)F(S[r]);for(n in N)N[n]=null;for(a in N=null,swfobject)swfobject[a]=null;swfobject=null});return{registerObject:function(e,t,n,a){var i;N.w3&&e&&t?((i={}).id=e,i.swfVersion=t,i.expressInstall=n,i.callbackFn=a,E[E.length]=i,P(e,!1)):a&&a({success:!1,id:e})},getObjectById:function(e){if(N.w3)return L(e)},embedSWF:function(o,l,s,c,d,f,p,u,v,y){var h={success:!1,id:l};N.w3&&!(N.wk&&N.wk<312)&&o&&l&&s&&c&&d?(P(l,!1),n(function(){s+="",c+="";var e={};if(v&&typeof v===w)for(var t in v)e[t]=v[t];e.data=o,e.width=s,e.height=c;var n={};if(u&&typeof u===w)for(var a in u)n[a]=u[a];if(p&&typeof p===w)for(var i in p)typeof n.flashvars!=m?n.flashvars+="&"+i+"="+p[i]:n.flashvars=i+"="+p[i];if(M(d)){var r=O(e,n,l);e.id==l&&P(l,!0),h.success=!0,h.ref=r}else{if(f&&k())return e.data=f,void j(e,n,l,y);P(l,!0)}y&&y(h)})):y&&y(h)},switchOffAutoHideShow:function(){r=!1},ua:N,getFlashPlayerVersion:function(){return{major:N.pv[0],minor:N.pv[1],release:N.pv[2]}},hasFlashPlayerVersion:M,createSWF:function(e,t,n){return N.w3?O(e,t,n):void 0},showExpressInstall:function(e,t,n,a){N.w3&&k()&&j(e,t,n,a)},removeSWF:function(e){N.w3&&F(e)},createCSS:function(e,t,n,a){N.w3&&V(e,t,n,a)},addDomLoadEvent:n,addLoadEvent:T,getQueryParamValue:function(e){var t=g.location.search||g.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return R(t);for(var n=t.split("&"),a=0;a<n.length;a++)if(n[a].substring(0,n[a].indexOf("="))==e)return R(n[a].substring(n[a].indexOf("=")+1))}return""},expressInstallCallback:function(){var e;A&&((e=$(v))&&s&&(e.parentNode.replaceChild(s,e),c&&(P(c,!0),N.ie&&N.win&&(s.style.display="block")),d&&d(f)),A=!1)}}}();