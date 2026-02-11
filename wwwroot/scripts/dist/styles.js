/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/styles/site.scss");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./wwwroot/styles/site.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./wwwroot/styles/site.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n/*$main-color: #1e3b99;*/\\n.flex, .vertical-centerer, .centerer, .horizontal-centerer {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.flex-vertical, .page, #global-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.flex-reversed {\\n  display: flex;\\n  flex-direction: row-reverse;\\n}\\n\\n.flex-vertical-reversed {\\n  display: flex;\\n  flex-direction: column-reverse;\\n}\\n\\n.flex-wrap {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.stretched-flex-item {\\n  flex: 1 0;\\n}\\n\\n.space-between-flex-container {\\n  justify-content: space-between;\\n}\\n\\n.space-around-flex-container {\\n  justify-content: space-around;\\n}\\n\\n.baseline-aligned-flex-container {\\n  align-items: baseline;\\n}\\n\\n.end-aligned-flex-item {\\n  align-self: flex-end;\\n}\\n\\n.end-align-flex-container {\\n  align-items: flex-end;\\n}\\n\\n.inline {\\n  display: inline;\\n}\\n\\n.block {\\n  display: block;\\n}\\n\\n.relative {\\n  position: relative;\\n}\\n\\n.absolute {\\n  position: absolute;\\n}\\n\\n.contents {\\n  display: contents;\\n}\\n\\n.horizontal-centerer, .centerer {\\n  justify-content: center;\\n}\\n\\n.vertical-centerer, .centerer {\\n  align-items: center;\\n}\\n\\n.non-displayed {\\n  display: none;\\n}\\n\\n.full-screen {\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n}\\n\\n/*Размеры*/\\n.full-width, .full-size, html, #global-wrapper, .full-screen {\\n  width: 100%;\\n}\\n\\n.full-height, .full-size, html, #global-wrapper, .full-screen {\\n  height: 100%;\\n}\\n\\n.standart-icon-size {\\n  width: 24px;\\n  height: 24px;\\n}\\n\\n.half-width {\\n  width: 50%;\\n}\\n\\n.half-height {\\n  height: 50%;\\n}\\n\\n.quarter-width {\\n  width: 25%;\\n}\\n\\n.main-font, .fail-text, .expirience-body, .expirience-header, .info, .lang .using-row, .lang .last-row, .lang .first-row, .languages, .developer-part, .contact, .my-name, .expirience-head, .resume-head, .medium-font {\\n  font-family: \\\"Cascadia Mono\\\";\\n}\\n\\n.medium-font {\\n  font-size: 15px;\\n}\\n\\nbody {\\n  background-color: #1e1e1e;\\n  color: #c8c8c8;\\n}\\n\\n#main-part-wrapper {\\n  overflow-x: auto;\\n}\\n\\n.page {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.my-photo {\\n  max-width: 500px;\\n  max-height: 500px;\\n  width: 25vh;\\n  height: 25vh;\\n  padding-left: 2vw;\\n}\\n\\n.first-body {\\n  width: 100%;\\n  height: 100vh;\\n  margin-top: -44px;\\n}\\n\\n.secong-body {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.third-body {\\n  width: 100%;\\n  height: 100vh;\\n  overflow-x: hidden;\\n}\\n\\n.my-name, .expirience-head, .resume-head {\\n  font-size: 10vh;\\n  font-weight: bold;\\n  padding-left: 1vw;\\n}\\n\\n.contact {\\n  width: 230px;\\n  height: 40px;\\n  font-size: 20px;\\n  font-weight: bold;\\n  margin-right: 2vw;\\n  color: #c8c8c8;\\n  border: 0;\\n  cursor: pointer;\\n  border-top: 2px solid #1e1e1e;\\n  border-bottom: 2px solid #1e1e1e;\\n}\\n\\n.contact:hover {\\n  color: #9cdcfe;\\n  border-top: 2px solid #9cdcfe;\\n  border-bottom: 2px solid #9cdcfe;\\n}\\n\\n.contact-icon {\\n  width: 30px;\\n  height: 30px;\\n  margin-right: 7px;\\n}\\n\\n.developer-part {\\n  font-size: 50px;\\n  font-weight: bold;\\n  margin-right: 1vw;\\n}\\n.developer-part .developer-word {\\n  color: #007acc;\\n}\\n.developer-part .developer-type {\\n  width: 290px;\\n}\\n\\n.languages {\\n  font-size: 30px;\\n  font-weight: bold;\\n  color: #9cdcfe;\\n}\\n\\n.lang .using-row, .lang .last-row, .lang .first-row {\\n  font-size: 23px;\\n}\\n.lang .using-row .using-row-numb, .lang .last-row .using-row-numb, .lang .first-row .using-row-numb {\\n  color: #8a8a8a;\\n  width: 50px;\\n  text-align: end;\\n  padding-right: 35px;\\n  padding-top: 4px;\\n}\\n.lang .using-row .tech-hide-button, .lang .last-row .tech-hide-button, .lang .first-row .tech-hide-button {\\n  width: 30px;\\n  height: 30px;\\n}\\n.lang .using-row .tech-hide-button .tech-arrow, .lang .last-row .tech-hide-button .tech-arrow, .lang .first-row .tech-hide-button .tech-arrow {\\n  width: 1px;\\n  height: 30px;\\n  content: \\\"\\\";\\n  background: #8a8a8a;\\n}\\n.lang .using-row .vw-using-header .vw-using, .lang .last-row .vw-using-header .vw-using, .lang .first-row .vw-using-header .vw-using, .lang .using-row .vw-using-header .vw-using-text, .lang .last-row .vw-using-header .vw-using-text, .lang .first-row .vw-using-header .vw-using-text {\\n  font-size: 23px;\\n  padding-top: 4px;\\n}\\n.lang .using-row:hover .using-row-numb, .lang .last-row:hover .using-row-numb, .lang .first-row:hover .using-row-numb {\\n  color: #c8c8c8;\\n}\\n.lang .first-row .using-row-numb {\\n  padding-right: 21px;\\n}\\n.lang .first-row .vw-using-header .vw-using {\\n  border-left: 0;\\n  padding-left: 15px;\\n}\\n.lang .first-row img {\\n  width: 30px;\\n  height: 30px;\\n  cursor: pointer;\\n}\\n.lang .last-row .tech-hide-button .tech-arrow:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  background: #8a8a8a;\\n  width: 15px;\\n  height: 1px;\\n  margin: 30px 0 0 0;\\n}\\n\\n.info {\\n  font-size: 3vh;\\n  padding: 0 3vh 4vh 0;\\n  text-align: end;\\n  max-width: 55vw;\\n}\\n\\n.resume-head {\\n  margin-left: auto;\\n  padding-right: 2vw;\\n  font-size: 15vh;\\n}\\n.resume-head .resume-base-color {\\n  color: #c8c8c8;\\n}\\n.resume-head .resume-var-color {\\n  color: #9cdcfe;\\n}\\n.resume-head .resume-main-color {\\n  color: #007acc;\\n}\\n.resume-head .resume-light-green-color {\\n  color: #4ec9b0;\\n}\\n\\n.expirience-head {\\n  font-size: 10vh;\\n  margin-left: -44vw;\\n  margin-top: 8vh;\\n  transition: margin 1000ms;\\n}\\n\\n.expirience-header {\\n  font-size: 25px;\\n  font-weight: bold;\\n  cursor: pointer;\\n}\\n.expirience-header .exp-row-line {\\n  content: \\\"\\\";\\n  background: #8a8a8a;\\n  width: 85vw;\\n  height: 1px;\\n  margin-left: 10vw;\\n}\\n.expirience-header .expirience-row {\\n  padding: 8px 0 8px 0;\\n}\\n\\n.expirience-header:hover .expirience-name {\\n  border-right: 1px solid #9cdcfe;\\n}\\n.expirience-header:hover .expirience-time {\\n  border-left: 1px solid #9cdcfe;\\n}\\n.expirience-header:hover .exp-row-line {\\n  background: #9cdcfe;\\n}\\n\\n.expirience-name {\\n  text-align: end;\\n  border-right: 1px solid #8a8a8a;\\n  width: 35vw;\\n  padding-right: 1vw;\\n  margin-left: 5vw;\\n}\\n\\n.expirience-job-title {\\n  text-align: center;\\n  width: 30vw;\\n}\\n\\n.expirience-time {\\n  text-align: start;\\n  border-left: 1px solid #8a8a8a;\\n  width: 35vw;\\n  padding-left: 1vw;\\n}\\n\\n.expirience-text {\\n  width: 100%;\\n}\\n\\n.expirience-body {\\n  height: 0px;\\n  transition: height 0.3s ease;\\n  /*background: #d5d5d5;*/\\n  overflow: hidden;\\n  font-size: 15px;\\n}\\n.expirience-body .main-color {\\n  color: #007acc;\\n}\\n.expirience-body .expirience-text {\\n  width: 80vw;\\n  padding: 1vh 0vw 1vh 10vw;\\n}\\n\\n.fail-text {\\n  width: 450px;\\n  font-size: 20px;\\n  text-align: center;\\n}\\n\\n.nikifor-photo {\\n  width: 450px;\\n  height: 450px;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./wwwroot/styles/site.scss?./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addStylesClient; });\n/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ \"./node_modules/vue-style-loader/lib/listToStyles.js\");\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n  Modified by Evan You @yyx990803\n*/\n\n\n\nvar hasDocument = typeof document !== 'undefined'\n\nif (typeof DEBUG !== 'undefined' && DEBUG) {\n  if (!hasDocument) {\n    throw new Error(\n    'vue-style-loader cannot be used in a non-browser environment. ' +\n    \"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.\"\n  ) }\n}\n\n/*\ntype StyleObject = {\n  id: number;\n  parts: Array<StyleObjectPart>\n}\n\ntype StyleObjectPart = {\n  css: string;\n  media: string;\n  sourceMap: ?string\n}\n*/\n\nvar stylesInDom = {/*\n  [id: number]: {\n    id: number,\n    refs: number,\n    parts: Array<(obj?: StyleObjectPart) => void>\n  }\n*/}\n\nvar head = hasDocument && (document.head || document.getElementsByTagName('head')[0])\nvar singletonElement = null\nvar singletonCounter = 0\nvar isProduction = false\nvar noop = function () {}\nvar options = null\nvar ssrIdKey = 'data-vue-ssr-id'\n\n// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n// tags it will allow on a page\nvar isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())\n\nfunction addStylesClient (parentId, list, _isProduction, _options) {\n  isProduction = _isProduction\n\n  options = _options || {}\n\n  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, list)\n  addStylesToDom(styles)\n\n  return function update (newList) {\n    var mayRemove = []\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i]\n      var domStyle = stylesInDom[item.id]\n      domStyle.refs--\n      mayRemove.push(domStyle)\n    }\n    if (newList) {\n      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, newList)\n      addStylesToDom(styles)\n    } else {\n      styles = []\n    }\n    for (var i = 0; i < mayRemove.length; i++) {\n      var domStyle = mayRemove[i]\n      if (domStyle.refs === 0) {\n        for (var j = 0; j < domStyle.parts.length; j++) {\n          domStyle.parts[j]()\n        }\n        delete stylesInDom[domStyle.id]\n      }\n    }\n  }\n}\n\nfunction addStylesToDom (styles /* Array<StyleObject> */) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i]\n    var domStyle = stylesInDom[item.id]\n    if (domStyle) {\n      domStyle.refs++\n      for (var j = 0; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j])\n      }\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j]))\n      }\n      if (domStyle.parts.length > item.parts.length) {\n        domStyle.parts.length = item.parts.length\n      }\n    } else {\n      var parts = []\n      for (var j = 0; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j]))\n      }\n      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }\n    }\n  }\n}\n\nfunction createStyleElement () {\n  var styleElement = document.createElement('style')\n  styleElement.type = 'text/css'\n  head.appendChild(styleElement)\n  return styleElement\n}\n\nfunction addStyle (obj /* StyleObjectPart */) {\n  var update, remove\n  var styleElement = document.querySelector('style[' + ssrIdKey + '~=\"' + obj.id + '\"]')\n\n  if (styleElement) {\n    if (isProduction) {\n      // has SSR styles and in production mode.\n      // simply do nothing.\n      return noop\n    } else {\n      // has SSR styles but in dev mode.\n      // for some reason Chrome can't handle source map in server-rendered\n      // style tags - source maps in <style> only works if the style tag is\n      // created and inserted dynamically. So we remove the server rendered\n      // styles and inject new ones.\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  if (isOldIE) {\n    // use singleton mode for IE9.\n    var styleIndex = singletonCounter++\n    styleElement = singletonElement || (singletonElement = createStyleElement())\n    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)\n    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)\n  } else {\n    // use multi-style-tag mode in all other cases\n    styleElement = createStyleElement()\n    update = applyToTag.bind(null, styleElement)\n    remove = function () {\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  update(obj)\n\n  return function updateStyle (newObj /* StyleObjectPart */) {\n    if (newObj) {\n      if (newObj.css === obj.css &&\n          newObj.media === obj.media &&\n          newObj.sourceMap === obj.sourceMap) {\n        return\n      }\n      update(obj = newObj)\n    } else {\n      remove()\n    }\n  }\n}\n\nvar replaceText = (function () {\n  var textStore = []\n\n  return function (index, replacement) {\n    textStore[index] = replacement\n    return textStore.filter(Boolean).join('\\n')\n  }\n})()\n\nfunction applyToSingletonTag (styleElement, index, remove, obj) {\n  var css = remove ? '' : obj.css\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css)\n  } else {\n    var cssNode = document.createTextNode(css)\n    var childNodes = styleElement.childNodes\n    if (childNodes[index]) styleElement.removeChild(childNodes[index])\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index])\n    } else {\n      styleElement.appendChild(cssNode)\n    }\n  }\n}\n\nfunction applyToTag (styleElement, obj) {\n  var css = obj.css\n  var media = obj.media\n  var sourceMap = obj.sourceMap\n\n  if (media) {\n    styleElement.setAttribute('media', media)\n  }\n  if (options.ssrId) {\n    styleElement.setAttribute(ssrIdKey, obj.id)\n  }\n\n  if (sourceMap) {\n    // https://developer.chrome.com/devtools/docs/javascript-debugging\n    // this makes source maps inside style tags work properly in Chrome\n    css += '\\n/*# sourceURL=' + sourceMap.sources[0] + ' */'\n    // http://stackoverflow.com/a/26603875\n    css += '\\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'\n  }\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild)\n    }\n    styleElement.appendChild(document.createTextNode(css))\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-style-loader/lib/addStylesClient.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listToStyles; });\n/**\n * Translates the list format produced by css-loader into something\n * easier to manipulate.\n */\nfunction listToStyles (parentId, list) {\n  var styles = []\n  var newStyles = {}\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i]\n    var id = item[0]\n    var css = item[1]\n    var media = item[2]\n    var sourceMap = item[3]\n    var part = {\n      id: parentId + ':' + i,\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    }\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = { id: id, parts: [part] })\n    } else {\n      newStyles[id].parts.push(part)\n    }\n  }\n  return styles\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-style-loader/lib/listToStyles.js?");

/***/ }),

/***/ "./wwwroot/styles/site.scss":
/*!**********************************!*\
  !*** ./wwwroot/styles/site.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/dist/cjs.js!./site.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./wwwroot/styles/site.scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"7f2cb590\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./wwwroot/styles/site.scss?");

/***/ })

/******/ });