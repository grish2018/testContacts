!function(e){function t(t){for(var o,a,s=t[0],l=t[1],u=t[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(c&&c(t);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={0:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/js/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;i.push([4,1]),n()}({4:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=(n(5),n(1)),a=n.n(i),s=n(2),l={init:function(){var e=this;e.window=r()(window),e.document=r()(document),e.html=r()("html"),e.body=r()("body"),e.browser=Object(s.a)(),e.mobile=e.browser.mobile,e.html.removeClass("no-js").addClass(e.mobile?"mobile":"desktop").addClass(e.browser.name),0!==e.browser.os.indexOf("OS")&&0!==e.browser.os.indexOf("iOS")||e.html.addClass("huapple"),e.mobile||a()()}},u=n(3),c=n.n(u),p={init:function(){(p.app=this).document.ready((function(){p.initInputLabel(),p.initMask()}))},initInputLabel:function(){var e=".js-label input:not([required]), .js-label textarea:not([required])",t="_label-empty";this.app.document.on("focus",e,(function(){r()(this).siblings("label").removeClass(t)})).on("blur",e,(function(){r()(this).val()||r()(this).siblings("label").addClass(t)})),r()(e).each((function(){r()(this).val()||r()(this).siblings("label").addClass(t)}))},initMask:function(){var e=document.querySelectorAll(".js-mask__tel");c()({mask:"+7 (999) 999 99 99",showMaskOnHover:!1}).mask(e)}},f=p;function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b={breakpoints:{sm:320,md:768,lg:1280},media:320,resizeEventName:"app_resize",submitEventName:"app_submit",popupLoadedEventName:"app_popup_loaded",popupClosedEventName:"app_popup_closed",tabChangedEventName:"app_tab_changed",scrollToOffset:200,scrollToSpeed:500,init:function(){var e=this;"object"===("undefined"==typeof appConfig?"undefined":d(appConfig))&&Object.keys(appConfig).forEach((function(e){Object.prototype.hasOwnProperty.call(b,e)&&(b[e]=appConfig[e])})),b.currentID=0,this.page=l,this.page.init.call(this),this.forms=f,this.forms.init.call(this),b.checkMedia(),b.window.on("resize",b.checkMedia),window.jQuery=r.a,(window.app=b).document.ready((function(){e.initScrollTo()}))},initScrollTo:function(){b.document.on("click",".js-scrollto",(function(){var e,t=r()(this).data("href");!t||(e=r()(t)).length&&r()("html, body").animate({scrollTop:e.offset().top-b.scrollToOffset},b.scrollToSpeed)}))},formatPrice:function(e){return this.formatNumber(e,0,","," ")},formatNumber:function(e,t,n,o){var r,i;return isNaN(t=Math.abs(t))&&(t=2),null==n&&(n=","),null==o&&(o="."),3<(i=(r=parseInt(e=(+e||0).toFixed(t))+"").length)?i%=3:i=0,(i?r.substr(0,i)+o:"")+r.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+o)+(t?n+Math.abs(e-r).toFixed(t).replace(/-/,"0").slice(2):"")},checkMedia:function(){var e=b.media;for(var t in b.breakpoints)b.window.outerWidth()>=b.breakpoints[t]&&(b.media=b.breakpoints[t]);b.media!=e&&b.document.trigger(b.resizeEventName,{media:b.media})},uniqID:function(){return"app_id_".concat(b.currentID++)},getNumEnding:function(e,t){var n;if(11<=(e%=100)&&e<=19)n=t[2];else switch(e%10){case 1:n=t[0];break;case 2:case 3:case 4:n=t[1];break;default:n=t[2]}return n},getKeyByValue:function(e,t){return Object.keys(e).find((function(n){return e[n]===t}))}};b.init()}});