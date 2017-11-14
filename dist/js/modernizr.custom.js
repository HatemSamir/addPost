window.Modernizr=function(e,t,n){function r(e){d.cssText=e}function o(e,t){return typeof e===t}var i,a,c={},l=t.documentElement,s="modernizr",u=t.createElement(s),d=u.style,f=" -webkit- -moz- -o- -ms- ".split(" "),p={},h=[],m=h.slice,y=function(e,n,r,o){var i,a,c,u,d=t.createElement("div"),f=t.body,p=f||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:s+(r+1),d.appendChild(c);return i=["&#173;",'<style id="s',s,'">',e,"</style>"].join(""),d.id=s,(f?d:p).innerHTML+=i,p.appendChild(d),f||(p.style.background="",p.style.overflow="hidden",u=l.style.overflow,l.style.overflow="hidden",l.appendChild(p)),a=n(d,e),f?d.parentNode.removeChild(d):(p.parentNode.removeChild(p),l.style.overflow=u),!!a},v={}.hasOwnProperty;a=o(v,"undefined")||o(v.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return v.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=m.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(m.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(m.call(arguments)))};return r}),p.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:y(["@media (",f.join("touch-enabled),("),s,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n};for(var g in p)a(p,g)&&(i=g.toLowerCase(),c[i]=p[g](),h.push((c[i]?"":"no-")+i));return c.addTest=function(e,t){if("object"==typeof e)for(var r in e)a(e,r)&&c.addTest(r,e[r]);else{if(e=e.toLowerCase(),c[e]!==n)return c;t="function"==typeof t?t():t,l.className+=" "+(t?"":"no-")+e,c[e]=t}return c},r(""),u=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=m[e[p]];return t||(t={},h++,e[p]=h,m[h]=t),t}function i(e,n,r){if(n||(n=t),s)return n.createElement(e);r||(r=o(n));var i;return(i=r.cache[e]?r.cache[e].cloneNode():f.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e)).canHaveChildren&&!d.test(e)?r.frag.appendChild(i):i}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var r=o(e);return y.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),s||a(e,r),e}var l,s,u=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",h=0,m={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){l=!0,s=!0}}();var y={elements:u.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==u.shivCSS,supportsUnknownElements:s,shivMethods:!1!==u.shivMethods,type:"default",shivDocument:c,createElement:i,createDocumentFragment:function(e,n){if(e||(e=t),s)return e.createDocumentFragment();for(var i=(n=n||o(e)).frag.cloneNode(),a=0,c=r(),l=c.length;a<l;a++)i.createElement(c[a]);return i}};e.html5=y,c(t)}(this,t),c._version="2.6.2",c._prefixes=f,c.testStyles=y,l.className=l.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+h.join(" "),c}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==y.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();g=1,e?e.t?h(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):g=0}function l(e,n,r,o,i,l,s){function u(t){if(!p&&a(d.readyState)&&(b.r=p=1,!g&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&h(function(){j.removeChild(d)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var s=s||f.errorTimeout,d=t.createElement(e),p=0,y=0,b={t:r,s:n,e:i,a:l,x:s};1===T[n]&&(y=1,T[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,y)},v.splice(o,0,b),"img"!=e&&(y||2===T[n]?(j.insertBefore(d,E?null:m),h(u,s)):T[n].push(d))}function s(e,t,n,r,i){return g=0,t=t||"j",o(e)?l("c"==t?w:C,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=f;return e.loader={load:s,i:0},e}var d,f,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],y={}.toString,v=[],g=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,j=E?p:m.parentNode,p=e.opera&&"[object Opera]"==y.call(e.opera),p=!!t.attachEvent&&!p,C=b?"object":p?"script":"img",w=p?"script":C,S=Array.isArray||function(e){return"[object Array]"==y.call(e)},N=[],T={},x={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};(f=function(e){function t(e){var t,n,r,e=e.split("!"),o=N.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;n<a;n++)r=e[n].split("="),(t=x[r.shift()])&&(i=t(i,r));for(n=0;n<o;n++)i=N[n](i);return i}function a(e,o,i,a,c){var l=t(e),s=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,i,a,c):(T[l.url]?l.noexec=!0:T[l.url]=1,i.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(s))&&i.load(function(){u(),o&&o(l.origUrl,c,a),s&&s(l.origUrl,c,a),T[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),a(e,d,t,0,s);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--c&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[l])),a(e[l],d,t,l,s))}else!n&&p()}var c,l,s=!!e.test,u=e.load||e.both,d=e.callback||i,f=d,p=e.complete||i;n(s?e.yep:e.nope,!!u),u&&n(u)}var l,s,d=this.yepnope.loader;if(o(e))a(e,0,d,0);else if(S(e))for(l=0;l<e.length;l++)s=e[l],o(s)?a(s,0,d,0):S(s)?f(s):Object(s)===s&&c(s,d);else Object(e)===e&&c(e,d)}).addPrefix=function(e,t){x[e]=t},f.addFilter=function(e){N.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u,d,p=t.createElement("script"),o=o||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=s?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},h(function(){u||(u=1,n(1))},o),l?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,r,o,a,l){var s,o=t.createElement("link"),n=l?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);a||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};