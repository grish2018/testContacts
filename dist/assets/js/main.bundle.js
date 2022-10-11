/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazysizes */ \"./node_modules/lazysizes/lazysizes.js\");\n/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui */ \"./node_modules/@fancyapps/ui/dist/fancybox.esm.js\");\n/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inputmask */ \"./node_modules/inputmask/dist/inputmask.js\");\n/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/InputLabel */ \"./src/js/components/InputLabel.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\nfunction _typeof(obj){\"@babel/helpers - typeof\";return _typeof=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&\"function\"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;},_typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,\"prototype\",{writable:false});return Constructor;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var App=/*#__PURE__*/function(){function App(config){var _this=this;_classCallCheck(this,App);_defineProperty(this,\"scrollToOffset\",100);_defineProperty(this,\"popupLoadedEvent\",'app.popup_loaded');if(_typeof(config)==='object'){Object.keys(config).forEach(function(key){_this[key]=config[key];});}this.body=document.querySelector('body');this.initFancybox();this.initScrollTo();this.initBurgerClickHandler();this.initMobileMenuCloseHandler();this.initSwiper();this.initMask();document.addEventListener(this.popupLoadedEvent,function(ev){_this.initMask(ev.detail.$content);});new _components_InputLabel__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();this.body.classList.add('_init');}_createClass(App,[{key:\"initSwiper\",value:function initSwiper(){console.log(swiper__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);var swiper=new swiper__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('.mySwiper',{grabCursor:true,slidesPerView:2,loop:true,autoplay:{delay:1000,disableOnInteraction:false},spaceBetween:74,speed:1000,modules:[swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay],navigation:{nextEl:\".swiper-button-next\",prevEl:\".swiper-button-prev\"},breakpoints:{// when window width is >= 768px\n768:{slidesPerView:3,spaceBetween:141},// when window width is >= 1280px\n1280:{slidesPerView:4,spaceBetween:130},// when window width is >= 1920px\n1920:{slidesPerView:4,spaceBetween:180}}});}},{key:\"initFancybox\",value:function initFancybox(){var _this2=this;_fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__.Fancybox.bind('[data-fancybox]',{dragToClose:false,on:{done:function done(fancybox,slide){document.dispatchEvent(new CustomEvent(_this2.popupLoadedEvent,{detail:{$content:slide.$content}}));}}});}},{key:\"initInputLabel\",value:function initInputLabel(){var wrapper=arguments.length>0&&arguments[0]!==undefined?arguments[0]:document;var selector='.js-label input, .js-label textarea';var className='_label-empty';var items=wrapper.querySelectorAll(selector);document.addEventListener('focus',function(e){console.log(e.target);var parent=e.target.parentNode;if(parent.classList.contains('js-label')){var label=Array.prototype.find.call(parent.children,function(child){return child.tagName==='LABEL';});label.classList.remove(className);}},true);document.addEventListener('blur',function(e){console.log(e.target);if(!e.target.value){var parent=e.target.parentNode;if(parent.classList.contains('js-label')){var label=Array.prototype.find.call(parent.children,function(child){return child.tagName==='LABEL';});label.classList.add(className);}}},true);// this.app.document\n//     .on('focus', sel, function () {\n//         $(this).siblings('label').removeClass(className);\n//     })\n//     .on('blur', sel, function () {\n//         if (!$(this).val()) {\n//             $(this).siblings('label').addClass(className);\n//         }\n//     });\nitems.forEach(function(el){var label=Array.prototype.find.call(el.parentNode.children,function(child){return child.tagName==='LABEL';});if(!el.value){label.classList.add(className);}});}},{key:\"initMask\",value:function initMask(){var wrapper=arguments.length>0&&arguments[0]!==undefined?arguments[0]:document;var selector='input.js-mask[type=\"tel\"]';var items=wrapper.querySelectorAll(selector);// простой вариант\n// Inputmask({\n//     mask: '+7 (999) 999 99 99',\n//     showMaskOnHover: false,\n// }).mask(items);\n// подмена восьмерки, подстановка +7, городские номера\ninputmask__WEBPACK_IMPORTED_MODULE_2___default()({mask:'+7 (999) 999-99-99',postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict,fromCheckval){// console.log(pos, c)\nif(pos===0&&['0','8'].indexOf(c)!==-1){return{pos:1,c:7,remove:4};}if(pos===4&&c==='7'){return{remove:4};}return true;},showMaskOnHover:false,jitMasking:true}).mask(items);}},{key:\"initScrollTo\",value:function initScrollTo(){var _this3=this;document.querySelectorAll('.js-scrollto[data-target]').forEach(function(el){var target=document.querySelector(el.dataset.target);if(target){el.addEventListener('click',function(){var y=target.getBoundingClientRect().top+window.pageYOffset-_this3.scrollToOffset;window.scrollTo({top:y,behavior:'smooth'});return false;});}});}},{key:\"initBurgerClickHandler\",value:function initBurgerClickHandler(){document.querySelector('.js-burgerMenu').addEventListener('click',function(){document.querySelector('.js-mobileMenu').style.visibility='visible';document.querySelector('body').style.overflow='hidden';});}},{key:\"initMobileMenuCloseHandler\",value:function initMobileMenuCloseHandler(){document.querySelector('.js-mobileMenuCloseIcon').addEventListener('click',function(){document.querySelector('.js-mobileMenu').style.visibility='hidden';document.querySelector('body').style.overflow='initial';});}}]);return App;}();document.addEventListener('DOMContentLoaded',function(){window.app=new App(appConfig||{});});\n\n//# sourceURL=webpack://frontend-pack/./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/InputLabel.js":
/*!*****************************************!*\
  !*** ./src/js/components/InputLabel.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InputLabel; }\n/* harmony export */ });\nfunction _typeof(obj){\"@babel/helpers - typeof\";return _typeof=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&\"function\"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;},_typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,\"prototype\",{writable:false});return Constructor;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var InputLabel=/*#__PURE__*/function(){function InputLabel(config){var _this=this;_classCallCheck(this,InputLabel);_defineProperty(this,\"selectorClassName\",'js-label');_defineProperty(this,\"labelEmptyClassName\",'_label-empty');if(_typeof(config)==='object'){Object.keys(config).forEach(function(key){_this[key]=config[key];});}this.addEvents();document.querySelectorAll(\".\".concat(this.selectorClassName,\" input, .\").concat(this.selectorClassName,\" textarea\")).forEach(function(el){if(!el.value){var label=_this.siblingLabel(el);label.classList.add(_this.labelEmptyClassName);}});}_createClass(InputLabel,[{key:\"addEvents\",value:function addEvents(){var _this2=this;document.addEventListener('focus',function(ev){var parent=ev.target.parentNode;if(parent.classList.contains(_this2.selectorClassName)){var label=_this2.childLabel(parent);label.classList.remove(_this2.labelEmptyClassName);}},true);document.addEventListener('blur',function(ev){var el=ev.target;if(!el.value){var parent=el.parentNode;if(parent.classList.contains(_this2.selectorClassName)){var label=_this2.childLabel(parent);label.classList.add(_this2.labelEmptyClassName);}}},true);}},{key:\"childLabel\",value:function childLabel(el){return Array.prototype.find.call(el.children,function(child){return child.tagName==='LABEL';});}},{key:\"siblingLabel\",value:function siblingLabel(el){return this.childLabel(el.parentNode);}}]);return InputLabel;}();\n\n//# sourceURL=webpack://frontend-pack/./src/js/components/InputLabel.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfrontend_pack"] = self["webpackChunkfrontend_pack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/js/app.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;