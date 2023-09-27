/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/helpers/domHelpers.js":
/*!**************************************!*\
  !*** ./src/js/helpers/domHelpers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function createElement(tagName, attributes, content, eventHandlers, parent) {
  var element = document.createElement(tagName);
  if (attributes) {
    for (var _i = 0, _Object$entries = Object.entries(attributes); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      element.setAttribute(key, value);
    }
  }
  if (content) {
    element.innerHTML = content;
  }
  if (eventHandlers) {
    for (var _i2 = 0, _Object$entries2 = Object.entries(eventHandlers); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        event = _Object$entries2$_i[0],
        handler = _Object$entries2$_i[1];
      element.addEventListener(event, handler);
    }
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}

// export function createCheckoutForm() {}

/***/ }),

/***/ "./src/js/urls.js":
/*!************************!*\
  !*** ./src/js/urls.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_CATEGORIES_LIST: () => (/* binding */ API_CATEGORIES_LIST),
/* harmony export */   API_PRODUCTS_BY_CATEGORY_ID: () => (/* binding */ API_PRODUCTS_BY_CATEGORY_ID),
/* harmony export */   API_TOPPINGS_LIST: () => (/* binding */ API_TOPPINGS_LIST)
/* harmony export */ });
var BASE_URL = "http://localhost:".concat("8080", "/api");
var API_CATEGORIES_LIST = "".concat(BASE_URL, "/categories");
var API_PRODUCTS_BY_CATEGORY_ID = "".concat(BASE_URL, "/products");
var API_TOPPINGS_LIST = "".concat(BASE_URL, "/toppings");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background: rgb(255, 255, 255);
  background: radial-gradient(circle, rgb(247, 245, 245) 0%, rgb(240, 239, 238) 100%);
}

@media screen and (max-width: 768px) {
  h1,
  h2,
  h3,
  h4,
  p {
    font-size: 90%;
    margin: 4px;
  }
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}

.header {
  color: grey;
  margin: 50px;
  font-size: 50px;
}

.categories {
  display: flex;
  flex-direction: row;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin: 3px;
  background-color: rgb(223, 228, 212);
}
.card:hover {
  opacity: 0.8;
}

.active {
  background-color: #b7b7a4;
}

.products {
  width: 70%;
  max-width: 720px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.product-img {
  width: 70px;
}

.choose-price {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.product-price {
  margin: 4px;
}
.product-price:nth-child(1)::after {
  content: "/";
  margin-left: 7px;
  color: red;
}

.title,
.product-price {
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/scss/main.scss"],"names":[],"mappings":"AAAA;EACE,8BAAA;EACA,mFAAA;AACF;;AAMA;EACE;;;;;IAKE,cAAA;IACA,WAAA;EAHF;AACF;AAMA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,UAAA;EACA,cAAA;AAJF;;AAOA;EACE,WAAA;EACA,YAAA;EACA,eAAA;AAJF;;AAOA;EACE,aAAA;EACA,mBAAA;AAJF;;AAOA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;EACA,WAAA;EACA,oCAAA;AAJF;AAKE;EACE,YAAA;AAHJ;;AAOA;EACE,yBAAA;AAJF;;AAOA;EACE,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,2DAAA;AAJF;;AAOA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;AAJF;;AAOA;EACE,WAAA;AAJF;;AAOA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;AAJF;;AAOA;EACE,WAAA;AAJF;AAMI;EACE,YAAA;EACA,gBAAA;EACA,UAAA;AAJN;;AASA;;EAEE,eAAA;AANF","sourcesContent":["body {\r\n  background: rgb(255, 255, 255);\r\n  background: radial-gradient(\r\n    circle,\r\n    rgb(247, 245, 245) 0%,\r\n    rgb(240, 239, 238) 100%\r\n  );\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  h1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  p {\r\n    font-size: 90%;\r\n    margin: 4px;\r\n  }  \r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.header {\r\n  color: grey;\r\n  margin: 50px;\r\n  font-size: 50px;\r\n}\r\n\r\n.categories {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 25%;\r\n  margin: 3px;\r\n  background-color: rgb(223, 228, 212);\r\n  &:hover {\r\n    opacity: 0.8;\r\n  }\r\n}\r\n\r\n.active {\r\n  background-color: #b7b7a4;\r\n}\r\n\r\n.products {\r\n  width: 70%;\r\n  max-width: 720px;\r\n  margin-top: 50px;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r\n}\r\n\r\n.product {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 10px;\r\n}\r\n\r\n.product-img {\r\n  width: 70px;\r\n}\r\n\r\n.choose-price {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.product-price {\r\n  margin: 4px;\r\n  &:nth-child(1) {\r\n    &::after {\r\n      content: \"/\";\r\n      margin-left: 7px;\r\n      color: red;\r\n    }\r\n  }\r\n}\r\n\r\n.title,\r\n.product-price {\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urls */ "./src/js/urls.js");
/* harmony import */ var _helpers_domHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/domHelpers */ "./src/js/helpers/domHelpers.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



var $categories = document.querySelector(".categories");
var $products = document.querySelector(".products");
// const $info = document.querySelector(".info");
// const $cart = document.querySelector(".cart");

fetch(_urls__WEBPACK_IMPORTED_MODULE_1__.API_CATEGORIES_LIST).then(function (res) {
  return res.json();
}).then(function (categories) {
  var currentlyActiveCard = null;
  var _iterator = _createForOfIteratorHelper(categories),
    _step;
  try {
    var _loop = function _loop() {
      var category = _step.value;
      var cardElement = (0,_helpers_domHelpers__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
        "class": "card"
      });
      var titleElement = (0,_helpers_domHelpers__WEBPACK_IMPORTED_MODULE_2__.createElement)("h3", {
        "class": "title"
      }, category.name);
      cardElement.addEventListener("click", function () {
        if (currentlyActiveCard) {
          currentlyActiveCard.classList.remove("active");
        }
        cardElement.classList.add("active");
        var categoryId = category.id;
        displayProductsByCategory(categoryId);
        currentlyActiveCard = cardElement;
      });
      cardElement.appendChild(titleElement);
      $categories.appendChild(cardElement);
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
function displayProductsByCategory(categoryId) {
  fetch("".concat(_urls__WEBPACK_IMPORTED_MODULE_1__.API_PRODUCTS_BY_CATEGORY_ID, "/").concat(categoryId)).then(function (res) {
    return res.json();
  }).then(function (products) {
    $products.innerHTML = "";
    var _iterator2 = _createForOfIteratorHelper(products),
      _step2;
    try {
      var _loop2 = function _loop2() {
        var product = _step2.value;
        var productElement = (0,_helpers_domHelpers__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
          "class": "product"
        }, "", $products);
        var imgElement = (0,_helpers_domHelpers__WEBPACK_IMPORTED_MODULE_2__.createElement)("img", {
          "class": "product-img"
          // src: `../img/${product.id}.jpg`,
        }, "", productElement);
        var titleElement = (0,_helpers_domHelpers__WEBPACK_IMPORTED_MODULE_2__.createElement)("h4", {
          "class": "product-title"
        }, product.name, productElement);
        var choosePrice = (0,_helpers_domHelpers__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
          "class": "choose-price"
        }, "", productElement);
        var priceElement1 = (0,_helpers_domHelpers__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", {
          "class": "product-price"
        }, "small: ".concat(product.price_small, "\u20B4"), choosePrice);
        var priceElement2 = (0,_helpers_domHelpers__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", {
          "class": "product-price"
        }, "big: ".concat(product.price_big, "\u20B4"), choosePrice);
        priceElement1.addEventListener("click", function () {
          product.size = priceElement1.textContent;
          displayProductDetails(product);
          addToppings();
        });
        priceElement2.addEventListener("click", function () {
          product.size = priceElement1.textContent;
          displayProductDetails(product);
          addToppings();
        });
        productElement.appendChild(imgElement);
        productElement.appendChild(titleElement);
        productElement.appendChild(choosePrice);
        choosePrice.appendChild(priceElement1);
        choosePrice.appendChild(priceElement2);
        $products.appendChild(productElement);
      };
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
}
function displayProductDetails(product) {
  $products.innerHTML = "";
  var titleElement = (0,_helpers_domHelpers__WEBPACK_IMPORTED_MODULE_2__.createElement)("h2", {
    "class": "product-title"
  }, product.name);
  var descriptionElement = (0,_helpers_domHelpers__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", {
    "class": "product-size"
  }, product.size);
  $products.appendChild(titleElement);
  $products.appendChild(descriptionElement);
}
function addToppings() {
  fetch(_urls__WEBPACK_IMPORTED_MODULE_1__.API_TOPPINGS_LIST).then(function (res) {
    return res.json();
  }).then(function (toppings) {
    var _iterator3 = _createForOfIteratorHelper(toppings),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var topping = _step3.value;
        var cardElement = (0,_helpers_domHelpers__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
          "class": "card"
        });
        var titleElement = (0,_helpers_domHelpers__WEBPACK_IMPORTED_MODULE_2__.createElement)("h3", {
          "class": "title"
        }, topping.name);
        cardElement.addEventListener("click", function () {});
        cardElement.appendChild(titleElement);
        $products.appendChild(cardElement);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map