
function css_browser_selector(e){var r=e.toLowerCase(),i=function(e){return r.indexOf(e)>-1},t="gecko",o="webkit",a="safari",n="chrome",s="opera",d="mobile",c=0,l=window.devicePixelRatio?(window.devicePixelRatio+"").replace(".","_"):"1",w=[!/opera|webtv/.test(r)&&/msie\s(\d+)/.test(r)&&(c=1*RegExp.$1)?"ie ie"+c+(6==c||7==c?" ie67 ie678 ie6789":8==c?" ie678 ie6789":9==c?" ie6789 ie9m":c>9?" ie9m":""):/trident\/\d+.*?;\s*rv:(\d+)\.(\d+)\)/.test(r)&&(c=[RegExp.$1,RegExp.$2])?"ie ie"+c[0]+" ie"+c[0]+"_"+c[1]+" ie9m":/firefox\/(\d+)\.(\d+)/.test(r)&&(re=RegExp)?t+" ff ff"+re.$1+" ff"+re.$1+"_"+re.$2:i("gecko/")?t:i(s)?s+(/version\/(\d+)/.test(r)?" "+s+RegExp.$1:/opera(\s|\/)(\d+)/.test(r)?" "+s+RegExp.$2:""):i("konqueror")?"konqueror":i("blackberry")?d+" blackberry":i(n)||i("crios")?o+" "+n:i("iron")?o+" iron":!i("cpu os")&&i("applewebkit/")?o+" "+a:i("mozilla/")?t:"",i("android")?d+" android":"",i("tablet")?"tablet":"",i("j2me")?d+" j2me":i("ipad; u; cpu os")?d+" chrome android tablet":i("ipad;u;cpu os")?d+" chromedef android tablet":i("iphone")?d+" ios iphone":i("ipod")?d+" ios ipod":i("ipad")?d+" ios ipad tablet":i("mac")?"mac":i("darwin")?"mac":i("webtv")?"webtv":i("win")?"win"+(i("windows nt 6.0")?" vista":""):i("freebsd")?"freebsd":i("x11")||i("linux")?"linux":"","1"!=l?" retina ratio"+l:"","js portrait"].join(" ");return window.jQuery&&!window.jQuery.browser&&(window.jQuery.browser=c?{msie:1,version:c}:{}),w}!function(e,r){var i=css_browser_selector(navigator.userAgent),t=e.documentElement;t.className+=" "+i;var o=i.replace(/^\s*|\s*$/g,"").split(/ +/);r.CSSBS=1;for(var a=0;a<o.length;a++)r["CSSBS_"+o[a]]=1;var n=function(r){return e.documentElement[r]||e.body[r]};r.jQuery&&!function(e){function i(){if(0==m){try{var e=n("clientWidth"),r=n("clientHeight");if(e>r?u.removeClass(a).addClass(s):u.removeClass(s).addClass(a),e==b)return;b=e}catch(i){}m=setTimeout(o,100)}}function o(){try{u.removeClass(p),u.addClass(360>=b?d:640>=b?c:768>=b?l:1024>=b?w:"pc")}catch(e){}m=0}var a="portrait",s="landscape",d="smartnarrow",c="smartwide",l="tabletnarrow",w="tabletwide",p=d+" "+c+" "+l+" "+w+" pc",u=e(t),m=0,b=0;r.CSSBS_ie?setInterval(i,1e3):e(r).on("resize orientationchange",i).trigger("resize"),e(r).load(i)}(r.jQuery)}(document,window);

;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};



(function(){ var els = "source|address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|picture|progress|ruby|section|time|video".split('|'); for(var i = 0; i < els.length; i++) { document.createElement(els[i]); } } )();


var Formstone=this.Formstone=function(a,b,c){"use strict";function d(a){l.Plugins[a].initialized||(l.Plugins[a].methods._setup.call(c),l.Plugins[a].initialized=!0)}function e(a,b,c,d){var e,f={raw:{}};d=d||{};for(e in d)d.hasOwnProperty(e)&&("classes"===a?(f.raw[d[e]]=b+"-"+d[e],f[d[e]]="."+b+"-"+d[e]):(f.raw[e]=d[e],f[e]=d[e]+"."+b));for(e in c)c.hasOwnProperty(e)&&("classes"===a?(f.raw[e]=c[e].replace(/{ns}/g,b),f[e]=c[e].replace(/{ns}/g,"."+b)):(f.raw[e]=c[e].replace(/.{ns}/g,""),f[e]=c[e].replace(/{ns}/g,b)));return f}function f(){var a,b={transition:"transitionend",MozTransition:"transitionend",OTransition:"otransitionend",WebkitTransition:"webkitTransitionEnd"},d=["transition","-webkit-transition"],e={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},f="transitionend",g="",h="",i=c.createElement("div");for(a in b)if(b.hasOwnProperty(a)&&a in i.style){f=b[a],l.support.transition=!0;break}o.transitionEnd=f+".{ns}";for(a in d)if(d.hasOwnProperty(a)&&d[a]in i.style){g=d[a];break}l.transition=g;for(a in e)if(e.hasOwnProperty(a)&&e[a]in i.style){l.support.transform=!0,h=e[a];break}l.transform=h}function g(){l.windowWidth=l.$window.width(),l.windowHeight=l.$window.height(),p=k.startTimer(p,q,h)}function h(){for(var a in l.ResizeHandlers)l.ResizeHandlers.hasOwnProperty(a)&&l.ResizeHandlers[a].callback.call(b,l.windowWidth,l.windowHeight)}function i(a,b){return parseInt(a.priority)-parseInt(b.priority)}var j=function(){this.Version="0.7.16",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.window=b,this.$window=a(b),this.document=c,this.$document=a(c),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.userAgent=b.navigator.userAgent||b.navigator.vendor||b.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(b.File&&b.FileList&&b.FileReader),history:!!(b.history&&b.history.pushState&&b.history.replaceState),matchMedia:!(!b.matchMedia&&!b.msMatchMedia),raf:!(!b.requestAnimationFrame||!b.cancelAnimationFrame),touch:!!("ontouchstart"in b||b.DocumentTouch&&c instanceof b.DocumentTouch),transition:!1,transform:!1}},k={killEvent:function(a,b){try{a.preventDefault(),a.stopPropagation(),b&&a.stopImmediatePropagation()}catch(c){}},startTimer:function(a,b,c,d){return k.clearTimer(a),d?setInterval(c,b):setTimeout(c,b)},clearTimer:function(a,b){a&&(b?clearInterval(a):clearTimeout(a),a=null)},sortAsc:function(a,b){return parseInt(b)-parseInt(a)},sortDesc:function(a,b){return parseInt(b)-parseInt(a)}},l=new j,m=a.Deferred(),n={base:"{ns}",element:"{ns}-element"},o={namespace:".{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",resize:"resize.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"};j.prototype.NoConflict=function(){l.DontConflict=!0;for(var b in l.Plugins)l.Plugins.hasOwnProperty(b)&&(a[b]=l.Conflicts[b],a.fn[b]=l.Conflicts.fn[b])},j.prototype.Plugin=function(c,f){return l.Plugins[c]=function(c,d){function f(b){var e="object"===a.type(b);b=a.extend(!0,{},d.defaults||{},e?b:{});for(var f=this,g=0,i=f.length;i>g;g++){var j=f.eq(g);if(!h(j)){var k="__"+d.guid++,l=d.classes.raw.base+k,m=j.data(c+"-options"),n=a.extend(!0,{$el:j,guid:k,rawGuid:l,dotGuid:"."+l},b,"object"===a.type(m)?m:{});j.addClass(d.classes.raw.element).data(s,n),d.methods._construct.apply(j,[n].concat(Array.prototype.slice.call(arguments,e?1:0)))}}return f}function g(){d.functions.iterate.apply(this,[d.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(d.classes.raw.element).removeData(s)}function h(a){return a.data(s)}function j(b){if(this instanceof a){var c=d.methods[b];return"object"!==a.type(b)&&b?c&&0!==b.indexOf("_")?d.functions.iterate.apply(this,[c].concat(Array.prototype.slice.call(arguments,1))):this:f.apply(this,arguments)}}function m(c){var e=d.utilities[c]||d.utilities._initialize||!1;return e?e.apply(b,Array.prototype.slice.call(arguments,"object"===a.type(c)?0:1)):void 0}function p(b){d.defaults=a.extend(!0,d.defaults,b||{})}function q(b){for(var c=this,d=0,e=c.length;e>d;d++){var f=c.eq(d),g=h(f)||{};"undefined"!==a.type(g.$el)&&b.apply(f,[g].concat(Array.prototype.slice.call(arguments,1)))}return c}var r="fs-"+c,s="fs"+c.replace(/(^|\s)([a-z])/g,function(a,b,c){return b+c.toUpperCase()});return d.initialized=!1,d.priority=d.priority||10,d.classes=e("classes",r,n,d.classes),d.events=e("events",c,o,d.events),d.functions=a.extend({getData:h,iterate:q},k,d.functions),d.methods=a.extend(!0,{_setup:a.noop,_construct:a.noop,_destruct:a.noop,_resize:!1,destroy:g},d.methods),d.utilities=a.extend(!0,{_initialize:!1,_delegate:!1,defaults:p},d.utilities),d.widget&&(l.Conflicts.fn[c]=a.fn[c],a.fn[s]=j,l.DontConflict||(a.fn[c]=a.fn[s])),l.Conflicts[c]=a[c],a[s]=d.utilities._delegate||m,l.DontConflict||(a[c]=a[s]),d.namespace=c,d.namespaceClean=s,d.guid=0,d.methods._resize&&(l.ResizeHandlers.push({namespace:c,priority:d.priority,callback:d.methods._resize}),l.ResizeHandlers.sort(i)),d}(c,f),m.then(function(){d(c)}),l.Plugins[c]};var p=null,q=20;return l.$window.on("resize.fs",g),g(),a(function(){l.$body=a("body"),m.resolve()}),o.clickTouchStart=o.click+" "+o.touchStart,f(),l}(jQuery,this,document);


/* Media query
********************************************/
/*! formstone v0.7.16 [mediaquery.js] 2015-08-24 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b){b=b||{};for(var c in t)t.hasOwnProperty(c)&&(l[c]=b[c]?a.merge(b[c],l[c]):l[c]);l=a.extend(l,b),l.minWidth.sort(p.sortDesc),l.maxWidth.sort(p.sortAsc),l.minHeight.sort(p.sortDesc),l.maxHeight.sort(p.sortAsc);for(var d in t)if(t.hasOwnProperty(d)){s[d]={};for(var e in l[d])if(l[d].hasOwnProperty(e)){var f=window.matchMedia("("+t[d]+": "+(l[d][e]===1/0?1e5:l[d][e])+l.unit+")");f.addListener(g),s[d][l[d][e]]=f}}g()}function d(a,b,c){var d=o.matchMedia(b),e=i(d.media);r[e]||(r[e]={mq:d,active:!0,enter:{},leave:{}},r[e].mq.addListener(h));for(var f in c)c.hasOwnProperty(f)&&r[e].hasOwnProperty(f)&&(r[e][f][a]=c[f]);h(r[e].mq)}function e(a,b){if(a)if(b){var c=i(b);r[c]&&(r[c].enter[a]&&delete r[c].enter[a],r[c].leave[a]&&delete r[c].leave[a])}else for(var d in r)r.hasOwnProperty(d)&&(r[d].enter[a]&&delete r[d].enter[a],r[d].leave[a]&&delete r[d].leave[a])}function f(){q={unit:l.unit};for(var a in t)if(t.hasOwnProperty(a))for(var b in s[a])if(s[a].hasOwnProperty(b)&&s[a][b].matches){var c="Infinity"===b?1/0:parseInt(b,10);a.indexOf("max")>-1?(!q[a]||c<q[a])&&(q[a]=c):(!q[a]||c>q[a])&&(q[a]=c)}}function g(){f(),n.trigger(m.mqChange,[q])}function h(a){var b=i(a.media),c=r[b],d=a.matches?m.enter:m.leave;if(c&&c.active||!c.active&&a.matches){for(var e in c[d])c[d].hasOwnProperty(e)&&c[d][e].apply(c.mq);c.active=!0}}function i(a){return a.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}function j(){return q}var k=b.Plugin("mediaquery",{utilities:{_initialize:c,state:j,bind:d,unbind:e},events:{mqChange:"mqchange"}}),l={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},m=a.extend(k.events,{enter:"enter",leave:"leave"}),n=b.$window,o=n[0],p=k.functions,q=null,r=[],s={},t={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}}(jQuery,Formstone);


/* Clock
********************************************/

(function($){

	$.fn.countDown = function (options) {
		config = {};

		$.extend(config, options);

		diffSecs = this.setCountDown(config);

		if (config.onComplete)
		{
			$.data($(this)[0], 'callback', config.onComplete);
		}
		if (config.omitWeeks)
		{
			$.data($(this)[0], 'omitWeeks', config.omitWeeks);
		}

		$('#' + $(this).attr('id') + ' .digit').html('<div class="top"></div><div class="bottom"></div>');
		$(this).doCountDown($(this).attr('id'), diffSecs, 500);

		return this;

	};

	$.fn.stopCountDown = function () {
		clearTimeout($.data(this[0], 'timer'));
	};

	$.fn.startCountDown = function () {
		this.doCountDown($(this).attr('id'),$.data(this[0], 'diffSecs'), 500);
	};

	$.fn.setCountDown = function (options) {
		var targetTime = new Date();
		if (options.targetDate)
		{
			targetTime = new Date(options.targetDate.month + '/' + options.targetDate.day + '/' + options.targetDate.year + ' ' + options.targetDate.hour + ':' + options.targetDate.min + ':' + options.targetDate.sec + (options.targetDate.utc ? ' UTC' : ''));
		}
		else if (options.targetOffset)
		{
			targetTime.setFullYear(options.targetOffset.year + targetTime.getFullYear());
			targetTime.setMonth(options.targetOffset.month + targetTime.getMonth());
			targetTime.setDate(options.targetOffset.day + targetTime.getDate());
			targetTime.setHours(options.targetOffset.hour + targetTime.getHours());
			targetTime.setMinutes(options.targetOffset.min + targetTime.getMinutes());
			targetTime.setSeconds(options.targetOffset.sec + targetTime.getSeconds());
		}

		var nowTime = new Date();

		diffSecs = Math.floor((targetTime.valueOf()-nowTime.valueOf())/1000);

		$.data(this[0], 'diffSecs', diffSecs);

		return diffSecs;
	};

	$.fn.doCountDown = function (id, diffSecs, duration) {
		$this = $('#' + id);
		if (diffSecs <= 0)
		{
			diffSecs = 0;
			if ($.data($this[0], 'timer'))
			{
				clearTimeout($.data($this[0], 'timer'));
			}
		}

		secs = diffSecs % 60;
		mins = Math.floor(diffSecs/60)%60;
		hours = Math.floor(diffSecs/60/60)%24;
		if ($.data($this[0], 'omitWeeks') == true)
		{
			days = Math.floor(diffSecs/60/60/24);
			weeks = Math.floor(diffSecs/60/60/24/7);
		}
		else
		{
			days = Math.floor(diffSecs/60/60/24)%7;
			weeks = Math.floor(diffSecs/60/60/24/7);
		}

		$this.dashChangeTo(id, 'seconds_dash', secs, duration ? duration : 800);
		$this.dashChangeTo(id, 'minutes_dash', mins, duration ? duration : 1200);
		$this.dashChangeTo(id, 'hours_dash', hours, duration ? duration : 1200);
		$this.dashChangeTo(id, 'days_dash', days, duration ? duration : 1200);
		$this.dashChangeTo(id, 'weeks_dash', weeks, duration ? duration : 1200);

		$.data($this[0], 'diffSecs', diffSecs);
		if (diffSecs > 0)
		{
			e = $this;
			t = setTimeout(function() { e.doCountDown(id, diffSecs-1) } , 1000);
			$.data(e[0], 'timer', t);
		}
		else if (cb = $.data($this[0], 'callback'))
		{
			$.data($this[0], 'callback')();
		}

	};

	$.fn.dashChangeTo = function(id, dash, n, duration) {
		  $this = $('#' + id);

		  for (var i=($this.find('.' + dash + ' .digit').length-1); i>=0; i--)
		  {
				var d = n%10;
				n = (n - d) / 10;
				$this.digitChangeTo('#' + $this.attr('id') + ' .' + dash + ' .digit:eq('+i+')', d, duration);
		  }
	};

	$.fn.digitChangeTo = function (digit, n, duration) {
		if (!duration)
		{
			duration = 800;
		}
		if ($(digit + ' div.top').html() != n + '')
		{
			$(digit + ' div.top').css({'display': 'none'});
			$(digit + ' div.top').html((n ? n : '0')).slideDown(duration);

			$(digit + ' div.bottom').animate({}, duration, function() {
				$(digit + ' div.bottom').html($(digit + ' div.top').html());
				$(digit + ' div.bottom').css({'display': 'block', 'height': ''});
				$(digit + ' div.top').hide().slideUp(10);
			});
		}
	};

})(jQuery);
