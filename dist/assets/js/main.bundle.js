!function(e){function n(n){for(var t,o,i=n[0],s=n[1],u=n[2],_=0,c=[];_<i.length;_++)o=i[_],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);for(d&&d(n);c.length;)c.shift()();return p.push.apply(p,u||[]),a()}function a(){for(var e,n=0;n<p.length;n++){for(var a=p[n],t=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(t=!1)}t&&(p.splice(n--,1),e=o(o.s=a[0]))}return e}var t={},r={0:0},p=[];function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,n,a){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(a,t,function(n){return e[n]}.bind(null,t));return a},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/assets/js/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var d=s;p.push([4,1]),a()}({4:function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(8);\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js?")},8:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js\nvar jquery = __webpack_require__(0);\nvar jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);\n\n// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js\nvar lazysizes = __webpack_require__(5);\n\n// EXTERNAL MODULE: ./node_modules/svg4everybody/dist/svg4everybody.js\nvar svg4everybody = __webpack_require__(1);\nvar svg4everybody_default = /*#__PURE__*/__webpack_require__.n(svg4everybody);\n\n// EXTERNAL MODULE: ./node_modules/browser-detect/dist/browser-detect.es5.js\nvar browser_detect_es5 = __webpack_require__(2);\n\n// CONCATENATED MODULE: ./src/js/page.js\n//import FastClick from 'fastclick'; // incopatibility with select2\nvar page={init:function init(){var app=this;// Base components\napp.window=jquery_default()(window);app.document=jquery_default()(document);app.html=jquery_default()('html');app.body=jquery_default()('body');// App params\napp.browser=Object(browser_detect_es5[\"a\" /* default */])();app.mobile=app.browser.mobile;app.html.removeClass('no-js').addClass(app.mobile?'mobile':'desktop').addClass(app.browser.name);if(app.browser.os.indexOf('OS')===0||app.browser.os.indexOf('iOS')===0){app.html.addClass('huapple');}// svg4everybody | Init\nif(!app.mobile){svg4everybody_default()();}// FastClick | Init\n//        if (app.mobile) {\n//            FastClick.attach(document.body);\n//        }\n}};/* harmony default export */ var js_page = (page);\n// EXTERNAL MODULE: ./node_modules/inputmask/index.js\nvar inputmask = __webpack_require__(3);\nvar inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);\n\n// CONCATENATED MODULE: ./src/js/forms.js\nvar forms_forms={init:function init(){forms_forms.app=this;this.document.ready(function(){forms_forms.initMask();});},initMask:function initMask(){var selector=document.querySelectorAll('.js-mask__tel');inputmask_default()({mask:'+7 (999) 999 99 99',showMaskOnHover:false}).mask(selector);}};/* harmony default export */ var js_forms = (forms_forms);\n// CONCATENATED MODULE: ./src/js/app.js\nfunction _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}// import Swiper from 'swiper/js/swiper.js';\nvar app_app={// параметры, изменяемые в appConfig\nbreakpoints:{sm:320,md:768,lg:1280},media:320,resizeEventName:'app_resize',submitEventName:'app_submit',popupLoadedEventName:'app_popup_loaded',popupClosedEventName:'app_popup_closed',tabChangedEventName:'app_tab_changed',scrollToOffset:200,// оффсет при скролле до элемента\nscrollToSpeed:500,// скорость скролла \ninit:function init(){var _this=this;// read config\nif((typeof appConfig===\"undefined\"?\"undefined\":_typeof(appConfig))==='object'){Object.keys(appConfig).forEach(function(key){if(Object.prototype.hasOwnProperty.call(app_app,key)){app_app[key]=appConfig[key];}});}app_app.currentID=0;// Init page\nthis.page=js_page;this.page.init.call(this);// Init page\nthis.forms=js_forms;this.forms.init.call(this);app_app.checkMedia();app_app.window.on('resize',app_app.checkMedia);window.jQuery=jquery_default.a;window.app=app_app;app_app.document.ready(function(){_this.initScrollTo();});// app.window.on('load', () => {\n// });\n// this.document.on(app.resizeEventName, () => {\n// });\n},initScrollTo:function initScrollTo(){app_app.document.on('click','.js-scrollto',function(){var target=jquery_default()(this).data('href');if(target){var $target=jquery_default()(target);if($target.length){jquery_default()('html, body').animate({scrollTop:$target.offset().top-app_app.scrollToOffset},app_app.scrollToSpeed);}}});},formatPrice:function formatPrice(price){return this.formatNumber(price,0,',',' ');},formatNumber:function formatNumber(number,decimals,dec_point,thousands_sep){// original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)\n// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)\n// bugfix by: Michael White (http://crestidg.com)\nvar i,j,kw,kd,km;// input sanitation & defaults\nif(isNaN(decimals=Math.abs(decimals))){decimals=2;}if(dec_point==undefined){dec_point=',';}if(thousands_sep==undefined){thousands_sep='.';}i=parseInt(number=(+number||0).toFixed(decimals))+'';if((j=i.length)>3){j=j%3;}else{j=0;}km=j?i.substr(0,j)+thousands_sep:'';kw=i.substr(j).replace(/(\\d{3})(?=\\d)/g,'$1'+thousands_sep);kd=decimals?dec_point+Math.abs(number-i).toFixed(decimals).replace(/-/,'0').slice(2):'';return km+kw+kd;},/**\n     * Проверяет размер окна и пишет его в app.media\n     * @returns void\n     */checkMedia:function checkMedia(){var current=app_app.media;for(var key in app_app.breakpoints){if(app_app.window.outerWidth()>=app_app.breakpoints[key]){app_app.media=app_app.breakpoints[key];}//            console.log(app.media);\n}if(app_app.media!=current){app_app.document.trigger(app_app.resizeEventName,{media:app_app.media});}},uniqID:function uniqID(){return\"app_id_\".concat(app_app.currentID++);},/**\n     * Функция возвращает окончание для множественного числа слова на основании числа и массива окончаний\n     * param  iNumber Integer Число на основе которого нужно сформировать окончание\n     * param  aEndings Array Массив слов или окончаний для чисел (1, 4, 5),\n     *         например ['яблоко', 'яблока', 'яблок']\n     * return String\n     * \n     * https://habrahabr.ru/post/105428/\n     */getNumEnding:function getNumEnding(iNumber,aEndings){var sEnding,i;iNumber=iNumber%100;if(iNumber>=11&&iNumber<=19){sEnding=aEndings[2];}else{i=iNumber%10;switch(i){case 1:sEnding=aEndings[0];break;case 2:case 3:case 4:sEnding=aEndings[1];break;default:sEnding=aEndings[2];}}return sEnding;},getKeyByValue:function getKeyByValue(object,value){return Object.keys(object).find(function(key){return object[key]===value;});}};app_app.init();\n\n//# sourceURL=webpack:///./src/js/app.js_+_2_modules?")}});