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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css"), "");
// Module
exports.push([module.i, "@media screen and (max-width: 768px) {\n  body {\n    font-size: 10px; } }\n\n@media screen and (min-width: 769px) {\n  body {\n    font-size: 12px; } }\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: linear-gradient(to right bottom, #51dacf, #651086);\n  height: 100vh; }\n\n.appContainer {\n  height: 80vh;\n  width: 80vw;\n  border-radius: 40px;\n  -webkit-box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.75);\n  box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.75);\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 100px auto;\n  grid-template-areas: \"top top\" \"left main\"; }\n\n.addition {\n  grid-area: top;\n  display: flex;\n  align-items: center;\n  padding: 1rem; }\n  .addition button {\n    padding: .5rem;\n    font-size: 1rem;\n    display: flex;\n    align-items: center;\n    border-radius: 10px;\n    box-shadow: 0px 0px 5px 1px; }\n    .addition button span {\n      font-size: 1.5rem;\n      margin-right: .5rem; }\n\n.lateral-tab {\n  grid-area: left;\n  background-image: linear-gradient(to bottom, #eae9e9, #d4d7dd);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0 0 0 40px; }\n  .lateral-tab ul {\n    border-right: 6px solid #222222;\n    height: 100%;\n    width: 95%; }\n    .lateral-tab ul li {\n      width: 80%;\n      margin-top: 1rem;\n      font-size: 1.5rem;\n      padding: 1rem;\n      display: flex;\n      justify-content: space-between;\n      border-radius: 8px;\n      cursor: pointer; }\n\n.red {\n  background-image: linear-gradient(to left, #ff4646, #af0404); }\n\n.orange {\n  background-image: linear-gradient(to left, #ffb45e, #d04925); }\n\n.green {\n  background-image: linear-gradient(to left, #1fab89, #2e4137); }\n\n.main-view {\n  grid-area: main;\n  border-radius: 0 0 40px 0;\n  background-image: linear-gradient(to bottom, #eae9e9, #d4d7dd);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .main-view__green {\n    background-image: linear-gradient(to left, #1fab89, #2e4137); }\n  .main-view__orange {\n    background-image: linear-gradient(to left, #ffb45e, #d04925); }\n  .main-view__red {\n    background-image: linear-gradient(to left, #ff4646, #af0404); }\n\n.projects-view {\n  height: 100%;\n  overflow-y: scroll;\n  border-radius: 0 0 40px 0; }\n  .projects-view ul {\n    max-height: 60vh;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 0 0 40px 0; }\n    .projects-view ul li {\n      width: 80%;\n      margin-top: 1rem;\n      font-size: 1.5rem;\n      padding: 1rem;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      border-radius: 8px;\n      background-color: orangered; }\n      .projects-view ul li > div {\n        font-size: 1.2rem;\n        color: #9fe914;\n        font-weight: bold; }\n      .projects-view ul li .project-info > div {\n        display: flex;\n        align-items: center; }\n      .projects-view ul li .action-date {\n        display: flex;\n        flex-direction: column;\n        align-items: center; }\n        .projects-view ul li .action-date > div {\n          display: flex;\n          align-items: center; }\n        .projects-view ul li .action-date .go-button {\n          padding: .2rem;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          border-radius: 8px;\n          margin-top: 10px; }\n          .projects-view ul li .action-date .go-button span {\n            font-size: 1.5rem;\n            color: blueviolet; }\n      .projects-view ul li span {\n        font-size: 1rem;\n        color: #d4d7dd;\n        font-weight: 600;\n        margin-right: .5rem; }\n\n.project {\n  background-color: orangered;\n  width: 80%;\n  padding: .5rem;\n  border-radius: 10px; }\n  .project__info {\n    display: flex;\n    align-items: center;\n    padding: .5rem; }\n    .project__info > :first-child {\n      padding: 1rem; }\n    .project__info h1 {\n      display: inline;\n      font-size: 2.5rem;\n      font-weight: bold; }\n    .project__info h2 {\n      display: inline;\n      font-size: 1.5rem;\n      margin-top: .7rem; }\n    .project__info p {\n      margin-top: .6rem;\n      font-size: 1.1rem; }\n    .project__info button {\n      margin-top: .6rem;\n      padding: .3rem;\n      font-size: .9rem;\n      border-radius: 8px; }\n      .project__info button span {\n        font-size: 1rem;\n        font-weight: bolder;\n        color: green; }\n  .project__todo {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: .3rem;\n    margin-bottom: .3rem; }\n    .project__todo ul {\n      border: 1px solid;\n      width: 80%;\n      max-height: 5rem;\n      overflow-y: scroll; }\n      .project__todo ul li {\n        height: 4rem;\n        padding: .5rem;\n        display: flex;\n        align-items: stretch;\n        flex-wrap: wrap;\n        position: relative; }\n        .project__todo ul li > div {\n          margin: auto 0; }\n          .project__todo ul li > div span {\n            font-size: 1rem;\n            font-weight: 600; }\n        .project__todo ul li .right {\n          width: 70%;\n          margin-bottom: .5rem; }\n        .project__todo ul li .left {\n          width: 25%;\n          height: 4rem;\n          display: flex;\n          flex-direction: column;\n          justify-content: space-between;\n          align-items: center; }\n        .project__todo ul li .left > span {\n          color: #d4d7dd;\n          margin-right: 1rem; }\n        .project__todo ul li .close-btn {\n          position: absolute;\n          right: 0;\n          top: 0;\n          border-radius: 50%;\n          margin: .3rem;\n          padding: .3rem;\n          background-image: linear-gradient(to bottom, #eae9e9, #d4d7dd);\n          cursor: pointer; }\n        .project__todo ul li .done-todo {\n          position: relative;\n          top: 10px; }\n          .project__todo ul li .done-todo > span {\n            font-size: 1rem;\n            font-weight: bolder;\n            color: green; }\n  .project__creator {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    .project__creator h1 {\n      font-size: 2.2rem;\n      font-weight: bold;\n      margin-bottom: 1.2rem; }\n    .project__creator input {\n      height: 1.9rem;\n      margin-bottom: 1.2rem; }\n    .project__creator button {\n      padding: 1rem;\n      border-radius: 10px;\n      background-color: whitesmoke; }\n\n#add-todo {\n  display: none; }\n\n.add-label {\n  padding: .3rem;\n  background: #ffb45e;\n  margin-top: .3rem; }\n\n#add-todo:checked ~ .todo__creator {\n  display: none; }\n\n.todo__creator {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: .5rem; }\n  .todo__creator h1 {\n    font-size: 2.2rem;\n    font-weight: bold; }\n  .todo__creator input {\n    height: 1.9rem; }\n  .todo__creator button {\n    padding: .5rem;\n    border-radius: 10px;\n    background-color: whitesmoke; }\n\n.hide {\n  display: none; }\n\n.inner-edit {\n  display: none; }\n  .inner-edit input {\n    width: 6rem; }\n\n#expand-toggle0 {\n  display: none; }\n\n#expand-btn0 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle0:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle1 {\n  display: none; }\n\n#expand-btn1 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle1:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle2 {\n  display: none; }\n\n#expand-btn2 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle2:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle3 {\n  display: none; }\n\n#expand-btn3 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle3:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle4 {\n  display: none; }\n\n#expand-btn4 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle4:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle5 {\n  display: none; }\n\n#expand-btn5 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle5:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle6 {\n  display: none; }\n\n#expand-btn6 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle6:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle7 {\n  display: none; }\n\n#expand-btn7 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle7:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle8 {\n  display: none; }\n\n#expand-btn8 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle8:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle9 {\n  display: none; }\n\n#expand-btn9 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle9:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle10 {\n  display: none; }\n\n#expand-btn10 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle10:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle11 {\n  display: none; }\n\n#expand-btn11 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle11:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle12 {\n  display: none; }\n\n#expand-btn12 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle12:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle13 {\n  display: none; }\n\n#expand-btn13 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle13:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle14 {\n  display: none; }\n\n#expand-btn14 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle14:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle15 {\n  display: none; }\n\n#expand-btn15 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle15:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle16 {\n  display: none; }\n\n#expand-btn16 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle16:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle17 {\n  display: none; }\n\n#expand-btn17 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle17:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle18 {\n  display: none; }\n\n#expand-btn18 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle18:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle19 {\n  display: none; }\n\n#expand-btn19 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle19:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle20 {\n  display: none; }\n\n#expand-btn20 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 50px; }\n\n#expand-toggle20:checked ~ .inner-edit {\n  display: flex; }\n\n.Green {\n  background-image: linear-gradient(to left, #1fab89, #2e4137); }\n\n.Orange {\n  background-image: linear-gradient(to left, #ffb45e, #d04925); }\n\n.Red {\n  background-image: linear-gradient(to left, #ff4646, #af0404); }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Project */ "./src/modules/Project.js");
/* harmony import */ var _modules_Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Todo */ "./src/modules/Todo.js");
/* harmony import */ var _modules_DOMController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/DOMController */ "./src/modules/DOMController.js");





let projects = [];
if (localStorage.getItem('projects')) {
  projects = JSON.parse(localStorage.getItem('projects')).map((proj) => {
    const project = new _modules_Project__WEBPACK_IMPORTED_MODULE_1__["default"](proj.name, proj.category, proj.description, new Date(Date.parse(proj.dueDate)), proj.status);
    proj.todos.forEach((todo) => {
      const tod = new _modules_Todo__WEBPACK_IMPORTED_MODULE_2__["default"](todo.name, todo.description, new Date(Date.parse(todo.dueDate)), todo.status);
      project.addTodo(tod);
    });
    return project;
  });
}

const projectCreate = () => {
  const {
    name: proName,
    category: proCategory,
    description: proDescription,
    date: proDate,
  } = _modules_DOMController__WEBPACK_IMPORTED_MODULE_3__["default"].projectInput();
  if (_modules_Project__WEBPACK_IMPORTED_MODULE_1__["default"].validDate(proDate) <= 0) {
    alert('Invalid date');
    return;
  }

  const pro = new _modules_Project__WEBPACK_IMPORTED_MODULE_1__["default"](proName, proCategory.length === 0 ? 'default' : proCategory, proDescription, proDate);
  projects.push(pro);

  localStorage.setItem('projects', JSON.stringify(projects));

  _modules_DOMController__WEBPACK_IMPORTED_MODULE_3__["default"].getListProjectsView(projects, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo);
};

const todoCreate = (project) => {
  const {
    name: toName,
    description: toDescription,
    date: toDate,
  } = _modules_DOMController__WEBPACK_IMPORTED_MODULE_3__["default"].todoInput();
  if (toName === '' || toDescription === '' || toDate.toDateString() === 'Invalid Date') return;
  if (_modules_Todo__WEBPACK_IMPORTED_MODULE_2__["default"].validDate(toDate, project.getDueDate) >= 0) {
    alert('invalid date');
    return;
  }
  const tod = new _modules_Todo__WEBPACK_IMPORTED_MODULE_2__["default"](toName, toDescription, toDate);
  project.addTodo(tod);
  localStorage.setItem('projects', JSON.stringify(projects));
  _modules_DOMController__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectView(project, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);
};

const changeProjectStatus = (project) => {
  project.updateStatus();

  localStorage.setItem('projects', JSON.stringify(projects));
  _modules_DOMController__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectView(project, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);
};

const updateTodoStatus = (project, index) => {
  project.getTodo[index].updateStatus();
  localStorage.setItem('projects', JSON.stringify(projects));
  _modules_DOMController__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectView(project, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);
};

const deleteTodo = (project, index) => {
  project.delTodo(index);
  localStorage.setItem('projects', JSON.stringify(projects));
  _modules_DOMController__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectView(project, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);
};

const editTodo = (project, index) => {
  const {
    name,
    description,
    toDate,
  } = _modules_DOMController__WEBPACK_IMPORTED_MODULE_3__["default"].todoEditInput(index);
  if (name === '' || description === '' || toDate.toDateString() === 'Invalid Date') return;
  if (_modules_Todo__WEBPACK_IMPORTED_MODULE_2__["default"].validDate(toDate, project.getDueDate) >= 0 || _modules_Todo__WEBPACK_IMPORTED_MODULE_2__["default"].validDate(toDate, new Date()) <= 0) {
    alert('invalid date');
    return;
  }
  project.getTodo[index].setName = name;
  project.getTodo[index].setDescription = description;
  project.getTodo[index].setDueDate = toDate;
  localStorage.setItem('projects', JSON.stringify(projects));
  _modules_DOMController__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectView(project, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);
};

_modules_DOMController__WEBPACK_IMPORTED_MODULE_3__["default"].getListProjectsView(projects, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);

_modules_DOMController__WEBPACK_IMPORTED_MODULE_3__["default"].updateProjectAddListeners(projectCreate);


/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/modules/DOMController.js":
/*!**************************************!*\
  !*** ./src/modules/DOMController.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DOMController; });
const DOMController = (() => {
  const mainView = () => document.querySelector('.main-view');
  const projectButton = () => document.querySelector('.creator-button');
  const addProjectBtn = () => document.querySelector('.add_project');
  const viewProjectBtns = () => document.querySelectorAll('.go-button');
  const addTodoBtn = () => document.querySelector('.add-todo');
  const homeBtn = () => document.querySelector('.nav-link');
  const projectStatusBtn = () => document.querySelector('.done-project');
  const todoStatusBtn = () => document.querySelectorAll('.done-todo');
  const tododeleteBtns = () => document.querySelectorAll('.close-btn');
  const editTodoBtns = () => document.querySelectorAll('.edit-todo');
  const innerEditdivs = () => document.querySelectorAll('.inner-edit');
  const urgentBtn = () => document.querySelector('.nav-urgent');
  const importantBtn = () => document.querySelector('.nav-important');
  const closeBtn = () => document.querySelector('.nav-close');
  const defaultBtn = () => document.querySelector('.nav-default');

  const todoEditInput = (index) => {
    return {
      name: innerEditdivs()[index].querySelector('[name="name"]').value,
      description: innerEditdivs()[index].querySelector('[name="description"]').value,
      toDate: new Date(innerEditdivs()[index].querySelector('[name="date"]').value),
    };
  };

  const projectInput = () => ({
    name: document.querySelector('.project__name').value,
    category: document.querySelector('.project__category').value,
    description: document.querySelector('.project__description').value,
    date: new Date(`${document.querySelector('.project__date').value}`),
  });

  const todoInput = () => ({
    name: document.querySelector('.todo__name').value,
    description: document.querySelector('.todo__description').value,
    date: new Date(document.querySelector('.todo__date').value),
  });

  const projectInpHTML = `
      <div class="project__creator">
      <h1>Create a Project</h1>
      <input type="text" placeholder="Name" class="project__name">
      <input type="text" placeholder="category" class="project__category">
      <input type="text" placeholder="description" class="project__description">
      <input type="date" class="project__date">
      <button class="creator-button">Create</button>
      </div>`;

  const projectHTML = (project) => {
    const statusBtn = project.getStatus ? '<button class="done-project"> Done <span>☑</span></button>' : '<button class="done-project"> Pending <span>⍻</span></button>';
    let todosHtml = project.getTodo
      .map((item, index) => {
        const statusBtn = item.getStatus ? '<button class="done-todo"> Done <span>☑</span></button>' : '<button class="done-todo"> Pending <span>⍻</span></button>';
        return `
        <li class="${item.priority}">
        <div class="right">
        <span>${item.getName}</span> <br>
        <span>${item.getDescription}</span> <br>
        <span>${item.getDueDate}</span><br>
        </div>
        <div class="left">
        ${statusBtn}
        </div>
        <span class="close-btn">❌</span>
        <input type="checkbox" id="expand-toggle${index}" />
        <div class="inner-edit">
        <input type="text" name="name" placeholder="Name" value="${item.getName}">
        <input type="text" name="description" placeholder="description" value="${item.getDescription}">
        <input type="date" name="date" value="${item.getDueDate.getFullYear()}-${('0'.concat(item.getDueDate.getMonth() + 1)).slice(-2, -1)}-${item.getDueDate.getDate()}">
        <button class="edit-todo">Edit</button>
        </div>
        <label for="expand-toggle${index}" id="expand-btn${index}"> Edit </label>
        </li>
        `;
      })
      .join('');
    todosHtml = todosHtml === '' ? '<li>no todo added yet ☺</li>' : todosHtml;
    return `
    <div class="project ${project.getPriority}">
    <div class="project__info">
    <div><h1>Name: ${project.getName}</h1><br>
    <h2> Category: ${project.getCategory}</h2>
    <p> Description: ${project.getDescription}</p><br>
    <p>Due Date: ${project.getDueDate}</p>
    </div>
    ${statusBtn}
    </div>
    <div class="project__todo">
    <ul>
    ${todosHtml} 
    </ul>
    </div>
    <input id="add-todo" type="checkbox" />
    <label for="add-todo" class="add-label"><span>✚</span>Add a todo</label>
    <div class="todo__creator">
    <input type="text" placeholder="Name" class="todo__name">
    <input type="text" placeholder="description" class="todo__description">
    <input type="date" class="todo__date">
    <button class="add-todo">Create</button>
    </div>
    </div>`;
  };
  const projectViewHTML = (projects) => {
    let ps = projects
      .map((project) => (`
        <li class="${project.priority}">
        <div class="project-info">
        <div><span>Name:</span> ${project.getName}</div>
        <div><span>category:</span> ${project.getCategory} </div>
        <div><span>description:</span> ${project.getDescription} </div>
        <div><span>Status:</span> ${project.getStatus ? 'Done' : 'Pending'} </div>
        </div>
        <div class="action-date">
        <div><span>Due Date</span> ${project.getDueDate}</div>
        <button class="go-button">Go to project <span>➤</span></button
        </div
        </li>
        `)).join('');
    if (ps === '') {
      ps = '<li>No Projects added Yet!!</li>';
    }
    return `
    <div class="projects-view">
    <ul>
    ${ps}
    </ul>
    </div>`;
  };

  const fillMainView = (content) => {
    mainView().innerHTML = '';
    mainView().innerHTML = content;
  };

  const updateProjectAddListeners = (func) => {
    addProjectBtn().addEventListener('click', () => {
      fillMainView(projectInpHTML);
      projectButton().addEventListener('click', func);
    });
  };

  const getListProjectsView = (projects, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo) => {
    fillMainView(projectViewHTML(projects));
    viewProjectBtns().forEach((btn, i) => {
      btn.addEventListener('click', () => {
        getProjectView(projects[i], todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
      });
    });
    homeBtn().addEventListener('click', () => {
      getListProjectsView(projects, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
    });
    urgentBtn().addEventListener('click', () => {
      const urgentPj = projects.filter((e) => e.getPriority === 'Red');
      getListFilteredProject(urgentPj, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
    });
    importantBtn().addEventListener('click', () => {
      const importantPj = projects.filter((e) => e.getPriority === 'Orange');
      getListFilteredProject(importantPj, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
    });
    closeBtn().addEventListener('click', () => {
      const closePj = projects.filter((e) => e.getPriority === 'Green');
      getListFilteredProject(closePj, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
    });
    defaultBtn().addEventListener('click', () => {
      const closePj = projects.filter((e) => e.getCategory === 'default');
      getListFilteredProject(closePj, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
    });
  };

  const getListFilteredProject = (projects, todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo) => {
    fillMainView(projectViewHTML(projects));
    viewProjectBtns().forEach((btn, i) => {
      btn.addEventListener('click', () => {
        getProjectView(projects[i], todoCreate, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
      });
    });
  };

  const getProjectView = (project, addTodo, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo) => {
    fillMainView(projectHTML(project));
    updateProjectListeners(project, addTodo, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo);
  };

  const updateProjectListeners = (project, addTodo, updateProjectStatus, updateTodoStatus, deleteTodo, editTodo) => {
    addTodoBtn().addEventListener('click', () => {
      addTodo(project);
    });
    projectStatusBtn().addEventListener('click', () => updateProjectStatus(project));
    todoStatusBtn().forEach((btn, index) => {
      btn.addEventListener('click', () => {
        updateTodoStatus(project, index);
      });
    });
    tododeleteBtns().forEach((Btn, i) => {
      Btn.addEventListener('click', () => {
        deleteTodo(project, i);
      });
    });
    editTodoBtns().forEach((Btn, ind) => {
      Btn.addEventListener('click', () => {
        editTodo(project, ind);
      });
    });
  };

  return {
    projectInput,
    todoInput,
    todoEditInput,
    updateProjectAddListeners,
    getListProjectsView,
    getProjectView,
  };
})();



/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Project {
  constructor(name, category, description, dueDate = new Date(), status = false) {
    this.name = name;
    this.category = category;
    this.dueDate = dueDate;
    this.updatePriority();
    this.description = description;
    this.todos = [];
    this.status = status;
  }

  get getName() {
    return this.name;
  }

  get getCategory() {
    return this.category;
  }

  get getDescription() {
    return this.description;
  }

  get getDueDate() {
    return this.dueDate;
  }

  get getTodo() {
    return this.todos;
  }

  get getStatus() {
    return this.status;
  }

  set setTodo(newTodo) {
    this.todo = newTodo;
  }

  set setDueDate(newDate) {
    if (Math.floor(newDate - new Date()) <= 0) {
      return false;
    }
    this.date = newDate;
    this.updatePriority();
    return true;
  }

  set setCategory(newCategory) {
    this.category = newCategory;
  }

  static validDate(date) {
    return Math.floor((date - new Date()) / 86400000);
  }

  get getPriority() {
    return this.priority;
  }

  updatePriority() {
    const timeLeft = Project.validDate(this.dueDate);
    // console.log (timeLeft);
    if (timeLeft <= 1) {
      this.priority = 'Red';
    } else if (timeLeft > 1 && timeLeft <= 3) {
      this.priority = 'Orange';
    } else {
      this.priority = 'Green';
    }
  }

  addTodo(todo) {
    if (Math.floor(this.dueDate - todo.dueDate) <= 0 || Math.floor(todo.dueDate - new Date()) <= 0) {
      return false;
    }
    this.todos.push(todo);
    return true;
  }

  delTodo(index) {
    this.todos.splice(index, 1);
  }

  updateStatus() {
    this.status = !this.status;
    if (this.status) {
      this.todos.forEach((todo) => (todo.setStatus = true));
    } else {
      this.todos.forEach((todo) => (todo.setStatus = false));
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Todo {
  constructor(name, description, dueDate = new Date(), status = false) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.updatePriority();
    this.status = status;
  }

  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }

  get getDescription() {
    return this.description;
  }

  set setDescription(description) {
    this.description = description;
  }

  get getDueDate() {
    return this.dueDate;
  }

  set setDueDate(newDate) {
    this.dueDate = newDate;
    this.updatePriority();
  }

  get getStatus() {
    return this.status;
  }

  set setStatus(bol) {
    this.status = bol;
  }

  static validDate(todoDate, projectDate) {
    return Math.floor((todoDate - projectDate) / 86400000);
  }


  updatePriority() {
    const timeLeft = Math.floor((this.dueDate - new Date()) / 86400000);
    if (timeLeft <= 1) {
      this.priority = 'Red';
    } else if (timeLeft > 1 && timeLeft <= 3) {
      this.priority = 'Orange';
    } else {
      this.priority = 'Green';
    }
  }

  updateStatus() {
    this.status = !this.status;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Todo);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzPzFlMmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1RvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RB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Q0FBMkMsa0JBQWtCLEVBQUUscUJBQXFCLGtCQUFrQixFQUFFLGtCQUFrQiwwQkFBMEIsc0JBQXNCLDJCQUEyQixzQkFBc0IsdUJBQXVCLHVCQUF1QixnQkFBZ0IsY0FBYyxFQUFFLDJDQUEyQyxrQkFBa0IsRUFBRSxxQkFBcUIsa0JBQWtCLEVBQUUsa0JBQWtCLDBCQUEwQixzQkFBc0IsMkJBQTJCLHNCQUFzQix1QkFBdUIsdUJBQXVCLGdCQUFnQixjQUFjLEVBQUUsMkNBQTJDLGtCQUFrQixFQUFFLHFCQUFxQixrQkFBa0IsRUFBRSxrQkFBa0IsMEJBQTBCLHNCQUFzQiwyQkFBMkIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGNBQWMsRUFBRSwyQ0FBMkMsa0JBQWtCLEVBQUUscUJBQXFCLGtCQUFrQixFQUFFLGtCQUFrQiwwQkFBMEIsc0JBQXNCLDJCQUEyQixzQkFBc0IsdUJBQXVCLHVCQUF1QixnQkFBZ0IsY0FBYyxFQUFFLDJDQUEyQyxrQkFBa0IsRUFBRSxxQkFBcUIsa0JBQWtCLEVBQUUsa0JBQWtCLDBCQUEwQixzQkFBc0IsMkJBQTJCLHNCQUFzQix1QkFBdUIsdUJBQXVCLGdCQUFnQixjQUFjLEVBQUUsMkNBQTJDLGtCQUFrQixFQUFFLHNCQUFzQixrQkFBa0IsRUFBRSxtQkFBbUIsMEJBQTBCLHNCQUFzQiwyQkFBMkIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGNBQWMsRUFBRSw0Q0FBNEMsa0JBQWtCLEVBQUUsc0JBQXNCLGtCQUFrQixFQUFFLG1CQUFtQiwwQkFBMEIsc0JBQXNCLDJCQUEyQixzQkFBc0IsdUJBQXVCLHVCQUF1QixnQkFBZ0IsY0FBYyxFQUFFLDRDQUE0QyxrQkFBa0IsRUFBRSxzQkFBc0Isa0JBQWtCLEVBQUUsbUJBQW1CLDBCQUEwQixzQkFBc0IsMkJBQTJCLHNCQUFzQix1QkFBdUIsdUJBQXVCLGdCQUFnQixjQUFjLEVBQUUsNENBQTRDLGtCQUFrQixFQUFFLHNCQUFzQixrQkFBa0IsRUFBRSxtQkFBbUIsMEJBQTBCLHNCQUFzQiwyQkFBMkIsc0JB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxzRUFBTyxFOzs7Ozs7Ozs7Ozs7QUM5RnRCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIiksIFwiXCIpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDEycHg7IH0gfVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICM1MWRhY2YsICM2NTEwODYpO1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcblxcbi5hcHBDb250YWluZXIge1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgd2lkdGg6IDgwdnc7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDMwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMzBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwidG9wIHRvcFxcXCIgXFxcImxlZnQgbWFpblxcXCI7IH1cXG5cXG4uYWRkaXRpb24ge1xcbiAgZ3JpZC1hcmVhOiB0b3A7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07IH1cXG4gIC5hZGRpdGlvbiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHg7IH1cXG4gICAgLmFkZGl0aW9uIGJ1dHRvbiBzcGFuIHtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtOyB9XFxuXFxuLmxhdGVyYWwtdGFiIHtcXG4gIGdyaWQtYXJlYTogbGVmdDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlYWU5ZTksICNkNGQ3ZGQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0MHB4OyB9XFxuICAubGF0ZXJhbC10YWIgdWwge1xcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCAjMjIyMjIyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA5NSU7IH1cXG4gICAgLmxhdGVyYWwtdGFiIHVsIGxpIHtcXG4gICAgICB3aWR0aDogODAlO1xcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmNDY0NiwgI2FmMDQwNCk7IH1cXG5cXG4ub3JhbmdlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmZiNDVlLCAjZDA0OTI1KTsgfVxcblxcbi5ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzFmYWI4OSwgIzJlNDEzNyk7IH1cXG5cXG4ubWFpbi12aWV3IHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0MHB4IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWFlOWU5LCAjZDRkN2RkKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5tYWluLXZpZXdfX2dyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxZmFiODksICMyZTQxMzcpOyB9XFxuICAubWFpbi12aWV3X19vcmFuZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmYjQ1ZSwgI2QwNDkyNSk7IH1cXG4gIC5tYWluLXZpZXdfX3JlZCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmY0NjQ2LCAjYWYwNDA0KTsgfVxcblxcbi5wcm9qZWN0cy12aWV3IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0MHB4IDA7IH1cXG4gIC5wcm9qZWN0cy12aWV3IHVsIHtcXG4gICAgbWF4LWhlaWdodDogNjB2aDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDQwcHggMDsgfVxcbiAgICAucHJvamVjdHMtdmlldyB1bCBsaSB7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkOyB9XFxuICAgICAgLnByb2plY3RzLXZpZXcgdWwgbGkgPiBkaXYge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICBjb2xvcjogIzlmZTkxNDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgICAgLnByb2plY3RzLXZpZXcgdWwgbGkgLnByb2plY3QtaW5mbyA+IGRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgIC5wcm9qZWN0cy12aWV3IHVsIGxpIC5hY3Rpb24tZGF0ZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgIC5wcm9qZWN0cy12aWV3IHVsIGxpIC5hY3Rpb24tZGF0ZSA+IGRpdiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgIC5wcm9qZWN0cy12aWV3IHVsIGxpIC5hY3Rpb24tZGF0ZSAuZ28tYnV0dG9uIHtcXG4gICAgICAgICAgcGFkZGluZzogLjJyZW07XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gICAgICAgICAgLnByb2plY3RzLXZpZXcgdWwgbGkgLmFjdGlvbi1kYXRlIC5nby1idXR0b24gc3BhbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgY29sb3I6IGJsdWV2aW9sZXQ7IH1cXG4gICAgICAucHJvamVjdHMtdmlldyB1bCBsaSBzcGFuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGNvbG9yOiAjZDRkN2RkO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07IH1cXG5cXG4ucHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XFxuICAucHJvamVjdF9faW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtOyB9XFxuICAgIC5wcm9qZWN0X19pbmZvID4gOmZpcnN0LWNoaWxkIHtcXG4gICAgICBwYWRkaW5nOiAxcmVtOyB9XFxuICAgIC5wcm9qZWN0X19pbmZvIGgxIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLnByb2plY3RfX2luZm8gaDIge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICBtYXJnaW4tdG9wOiAuN3JlbTsgfVxcbiAgICAucHJvamVjdF9faW5mbyBwIHtcXG4gICAgICBtYXJnaW4tdG9wOiAuNnJlbTtcXG4gICAgICBmb250LXNpemU6IDEuMXJlbTsgfVxcbiAgICAucHJvamVjdF9faW5mbyBidXR0b24ge1xcbiAgICAgIG1hcmdpbi10b3A6IC42cmVtO1xcbiAgICAgIHBhZGRpbmc6IC4zcmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4OyB9XFxuICAgICAgLnByb2plY3RfX2luZm8gYnV0dG9uIHNwYW4ge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgICAgIGNvbG9yOiBncmVlbjsgfVxcbiAgLnByb2plY3RfX3RvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjNyZW07IH1cXG4gICAgLnByb2plY3RfX3RvZG8gdWwge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgbWF4LWhlaWdodDogNXJlbTtcXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cXG4gICAgICAucHJvamVjdF9fdG9kbyB1bCBsaSB7XFxuICAgICAgICBoZWlnaHQ6IDRyZW07XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAgICAgLnByb2plY3RfX3RvZG8gdWwgbGkgPiBkaXYge1xcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDsgfVxcbiAgICAgICAgICAucHJvamVjdF9fdG9kbyB1bCBsaSA+IGRpdiBzcGFuIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbiAgICAgICAgLnByb2plY3RfX3RvZG8gdWwgbGkgLnJpZ2h0IHtcXG4gICAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07IH1cXG4gICAgICAgIC5wcm9qZWN0X190b2RvIHVsIGxpIC5sZWZ0IHtcXG4gICAgICAgICAgd2lkdGg6IDI1JTtcXG4gICAgICAgICAgaGVpZ2h0OiA0cmVtO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgIC5wcm9qZWN0X190b2RvIHVsIGxpIC5sZWZ0ID4gc3BhbiB7XFxuICAgICAgICAgIGNvbG9yOiAjZDRkN2RkO1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07IH1cXG4gICAgICAgIC5wcm9qZWN0X190b2RvIHVsIGxpIC5jbG9zZS1idG4ge1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgbWFyZ2luOiAuM3JlbTtcXG4gICAgICAgICAgcGFkZGluZzogLjNyZW07XFxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlYWU5ZTksICNkNGQ3ZGQpO1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAgIC5wcm9qZWN0X190b2RvIHVsIGxpIC5kb25lLXRvZG8ge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIHRvcDogMTBweDsgfVxcbiAgICAgICAgICAucHJvamVjdF9fdG9kbyB1bCBsaSAuZG9uZS10b2RvID4gc3BhbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgICAgICAgY29sb3I6IGdyZWVuOyB9XFxuICAucHJvamVjdF9fY3JlYXRvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLnByb2plY3RfX2NyZWF0b3IgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTsgfVxcbiAgICAucHJvamVjdF9fY3JlYXRvciBpbnB1dCB7XFxuICAgICAgaGVpZ2h0OiAxLjlyZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtOyB9XFxuICAgIC5wcm9qZWN0X19jcmVhdG9yIGJ1dHRvbiB7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7IH1cXG5cXG4jYWRkLXRvZG8ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5hZGQtbGFiZWwge1xcbiAgcGFkZGluZzogLjNyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZiNDVlO1xcbiAgbWFyZ2luLXRvcDogLjNyZW07IH1cXG5cXG4jYWRkLXRvZG86Y2hlY2tlZCB+IC50b2RvX19jcmVhdG9yIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4udG9kb19fY3JlYXRvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IC41cmVtOyB9XFxuICAudG9kb19fY3JlYXRvciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgLnRvZG9fX2NyZWF0b3IgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDEuOXJlbTsgfVxcbiAgLnRvZG9fX2NyZWF0b3IgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7IH1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmlubmVyLWVkaXQgaW5wdXQge1xcbiAgICB3aWR0aDogNnJlbTsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4wIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTA6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTEge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxOmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNTBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMjpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMyB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4zIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTM6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTQge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuNCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGU0OmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGU1IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNTBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlNTpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlNiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG42IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTY6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTcge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuNyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGU3OmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGU4IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjgge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNTBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlODpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlOSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG45IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTk6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTEwIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjEwIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTEwOmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxMSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4xMSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxMTpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMTIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNTBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTI6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTEzIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjEzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTEzOmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxNCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4xNCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxNDpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMTUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNTBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTU6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTE2IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjE2IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTE2OmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxNyB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4xNyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxNzpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTgge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMTgge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNTBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTg6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTE5IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjE5IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTE5OmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUyMCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4yMCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUyMDpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5HcmVlbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzFmYWI4OSwgIzJlNDEzNyk7IH1cXG5cXG4uT3JhbmdlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmZiNDVlLCAjZDA0OTI1KTsgfVxcblxcbi5SZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmZjQ2NDYsICNhZjA0MDQpOyB9XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJpbXBvcnQgJy4vbWFpbi5zY3NzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vbW9kdWxlcy9Qcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vbW9kdWxlcy9Ub2RvJztcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gJy4vbW9kdWxlcy9ET01Db250cm9sbGVyJztcblxubGV0IHByb2plY3RzID0gW107XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHtcbiAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKS5tYXAoKHByb2opID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvai5uYW1lLCBwcm9qLmNhdGVnb3J5LCBwcm9qLmRlc2NyaXB0aW9uLCBuZXcgRGF0ZShEYXRlLnBhcnNlKHByb2ouZHVlRGF0ZSkpLCBwcm9qLnN0YXR1cyk7XG4gICAgcHJvai50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCB0b2QgPSBuZXcgVG9kbyh0b2RvLm5hbWUsIHRvZG8uZGVzY3JpcHRpb24sIG5ldyBEYXRlKERhdGUucGFyc2UodG9kby5kdWVEYXRlKSksIHRvZG8uc3RhdHVzKTtcbiAgICAgIHByb2plY3QuYWRkVG9kbyh0b2QpO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9KTtcbn1cblxuY29uc3QgcHJvamVjdENyZWF0ZSA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIG5hbWU6IHByb05hbWUsXG4gICAgY2F0ZWdvcnk6IHByb0NhdGVnb3J5LFxuICAgIGRlc2NyaXB0aW9uOiBwcm9EZXNjcmlwdGlvbixcbiAgICBkYXRlOiBwcm9EYXRlLFxuICB9ID0gRE9NQ29udHJvbGxlci5wcm9qZWN0SW5wdXQoKTtcbiAgaWYgKFByb2plY3QudmFsaWREYXRlKHByb0RhdGUpIDw9IDApIHtcbiAgICBhbGVydCgnSW52YWxpZCBkYXRlJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcHJvID0gbmV3IFByb2plY3QocHJvTmFtZSwgcHJvQ2F0ZWdvcnkubGVuZ3RoID09PSAwID8gJ2RlZmF1bHQnIDogcHJvQ2F0ZWdvcnksIHByb0Rlc2NyaXB0aW9uLCBwcm9EYXRlKTtcbiAgcHJvamVjdHMucHVzaChwcm8pO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cbiAgRE9NQ29udHJvbGxlci5nZXRMaXN0UHJvamVjdHNWaWV3KHByb2plY3RzLCB0b2RvQ3JlYXRlLCBjaGFuZ2VQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvKTtcbn07XG5cbmNvbnN0IHRvZG9DcmVhdGUgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZTogdG9OYW1lLFxuICAgIGRlc2NyaXB0aW9uOiB0b0Rlc2NyaXB0aW9uLFxuICAgIGRhdGU6IHRvRGF0ZSxcbiAgfSA9IERPTUNvbnRyb2xsZXIudG9kb0lucHV0KCk7XG4gIGlmICh0b05hbWUgPT09ICcnIHx8IHRvRGVzY3JpcHRpb24gPT09ICcnIHx8IHRvRGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gJ0ludmFsaWQgRGF0ZScpIHJldHVybjtcbiAgaWYgKFRvZG8udmFsaWREYXRlKHRvRGF0ZSwgcHJvamVjdC5nZXREdWVEYXRlKSA+PSAwKSB7XG4gICAgYWxlcnQoJ2ludmFsaWQgZGF0ZScpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0b2QgPSBuZXcgVG9kbyh0b05hbWUsIHRvRGVzY3JpcHRpb24sIHRvRGF0ZSk7XG4gIHByb2plY3QuYWRkVG9kbyh0b2QpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICBET01Db250cm9sbGVyLmdldFByb2plY3RWaWV3KHByb2plY3QsIHRvZG9DcmVhdGUsIGNoYW5nZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbn07XG5cbmNvbnN0IGNoYW5nZVByb2plY3RTdGF0dXMgPSAocHJvamVjdCkgPT4ge1xuICBwcm9qZWN0LnVwZGF0ZVN0YXR1cygpO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIERPTUNvbnRyb2xsZXIuZ2V0UHJvamVjdFZpZXcocHJvamVjdCwgdG9kb0NyZWF0ZSwgY2hhbmdlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pO1xufTtcblxuY29uc3QgdXBkYXRlVG9kb1N0YXR1cyA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICBwcm9qZWN0LmdldFRvZG9baW5kZXhdLnVwZGF0ZVN0YXR1cygpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICBET01Db250cm9sbGVyLmdldFByb2plY3RWaWV3KHByb2plY3QsIHRvZG9DcmVhdGUsIGNoYW5nZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRvZG8gPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgcHJvamVjdC5kZWxUb2RvKGluZGV4KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgRE9NQ29udHJvbGxlci5nZXRQcm9qZWN0Vmlldyhwcm9qZWN0LCB0b2RvQ3JlYXRlLCBjaGFuZ2VQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbyk7XG59O1xuXG5jb25zdCBlZGl0VG9kbyA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB0b0RhdGUsXG4gIH0gPSBET01Db250cm9sbGVyLnRvZG9FZGl0SW5wdXQoaW5kZXgpO1xuICBpZiAobmFtZSA9PT0gJycgfHwgZGVzY3JpcHRpb24gPT09ICcnIHx8IHRvRGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gJ0ludmFsaWQgRGF0ZScpIHJldHVybjtcbiAgaWYgKFRvZG8udmFsaWREYXRlKHRvRGF0ZSwgcHJvamVjdC5nZXREdWVEYXRlKSA+PSAwIHx8IFRvZG8udmFsaWREYXRlKHRvRGF0ZSwgbmV3IERhdGUoKSkgPD0gMCkge1xuICAgIGFsZXJ0KCdpbnZhbGlkIGRhdGUnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgcHJvamVjdC5nZXRUb2RvW2luZGV4XS5zZXROYW1lID0gbmFtZTtcbiAgcHJvamVjdC5nZXRUb2RvW2luZGV4XS5zZXREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBwcm9qZWN0LmdldFRvZG9baW5kZXhdLnNldER1ZURhdGUgPSB0b0RhdGU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIERPTUNvbnRyb2xsZXIuZ2V0UHJvamVjdFZpZXcocHJvamVjdCwgdG9kb0NyZWF0ZSwgY2hhbmdlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pO1xufTtcblxuRE9NQ29udHJvbGxlci5nZXRMaXN0UHJvamVjdHNWaWV3KHByb2plY3RzLCB0b2RvQ3JlYXRlLCBjaGFuZ2VQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbyk7XG5cbkRPTUNvbnRyb2xsZXIudXBkYXRlUHJvamVjdEFkZExpc3RlbmVycyhwcm9qZWN0Q3JlYXRlKTtcbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImNvbnN0IERPTUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBtYWluVmlldyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXZpZXcnKTtcbiAgY29uc3QgcHJvamVjdEJ1dHRvbiA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdG9yLWJ1dHRvbicpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZF9wcm9qZWN0Jyk7XG4gIGNvbnN0IHZpZXdQcm9qZWN0QnRucyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nby1idXR0b24nKTtcbiAgY29uc3QgYWRkVG9kb0J0biA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpO1xuICBjb25zdCBob21lQnRuID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saW5rJyk7XG4gIGNvbnN0IHByb2plY3RTdGF0dXNCdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9uZS1wcm9qZWN0Jyk7XG4gIGNvbnN0IHRvZG9TdGF0dXNCdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9uZS10b2RvJyk7XG4gIGNvbnN0IHRvZG9kZWxldGVCdG5zID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ0bicpO1xuICBjb25zdCBlZGl0VG9kb0J0bnMgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10b2RvJyk7XG4gIGNvbnN0IGlubmVyRWRpdGRpdnMgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5uZXItZWRpdCcpO1xuICBjb25zdCB1cmdlbnRCdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXVyZ2VudCcpO1xuICBjb25zdCBpbXBvcnRhbnRCdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWltcG9ydGFudCcpO1xuICBjb25zdCBjbG9zZUJ0biA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtY2xvc2UnKTtcbiAgY29uc3QgZGVmYXVsdEJ0biA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtZGVmYXVsdCcpO1xuXG4gIGNvbnN0IHRvZG9FZGl0SW5wdXQgPSAoaW5kZXgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogaW5uZXJFZGl0ZGl2cygpW2luZGV4XS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIm5hbWVcIl0nKS52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBpbm5lckVkaXRkaXZzKClbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZSxcbiAgICAgIHRvRGF0ZTogbmV3IERhdGUoaW5uZXJFZGl0ZGl2cygpW2luZGV4XS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRhdGVcIl0nKS52YWx1ZSksXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSAoKSA9PiAoe1xuICAgIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19uYW1lJykudmFsdWUsXG4gICAgY2F0ZWdvcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19jYXRlZ29yeScpLnZhbHVlLFxuICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fZGVzY3JpcHRpb24nKS52YWx1ZSxcbiAgICBkYXRlOiBuZXcgRGF0ZShgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fZGF0ZScpLnZhbHVlfWApLFxuICB9KTtcblxuICBjb25zdCB0b2RvSW5wdXQgPSAoKSA9PiAoe1xuICAgIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19uYW1lJykudmFsdWUsXG4gICAgZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19kZXNjcmlwdGlvbicpLnZhbHVlLFxuICAgIGRhdGU6IG5ldyBEYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19kYXRlJykudmFsdWUpLFxuICB9KTtcblxuICBjb25zdCBwcm9qZWN0SW5wSFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X19jcmVhdG9yXCI+XG4gICAgICA8aDE+Q3JlYXRlIGEgUHJvamVjdDwvaDE+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBjbGFzcz1cInByb2plY3RfX25hbWVcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiY2F0ZWdvcnlcIiBjbGFzcz1cInByb2plY3RfX2NhdGVnb3J5XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCIgY2xhc3M9XCJwcm9qZWN0X19kZXNjcmlwdGlvblwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJwcm9qZWN0X19kYXRlXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY3JlYXRvci1idXR0b25cIj5DcmVhdGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PmA7XG5cbiAgY29uc3QgcHJvamVjdEhUTUwgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHN0YXR1c0J0biA9IHByb2plY3QuZ2V0U3RhdHVzID8gJzxidXR0b24gY2xhc3M9XCJkb25lLXByb2plY3RcIj4gRG9uZSA8c3Bhbj7imJE8L3NwYW4+PC9idXR0b24+JyA6ICc8YnV0dG9uIGNsYXNzPVwiZG9uZS1wcm9qZWN0XCI+IFBlbmRpbmcgPHNwYW4+4o27PC9zcGFuPjwvYnV0dG9uPic7XG4gICAgbGV0IHRvZG9zSHRtbCA9IHByb2plY3QuZ2V0VG9kb1xuICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdHVzQnRuID0gaXRlbS5nZXRTdGF0dXMgPyAnPGJ1dHRvbiBjbGFzcz1cImRvbmUtdG9kb1wiPiBEb25lIDxzcGFuPuKYkTwvc3Bhbj48L2J1dHRvbj4nIDogJzxidXR0b24gY2xhc3M9XCJkb25lLXRvZG9cIj4gUGVuZGluZyA8c3Bhbj7ijbs8L3NwYW4+PC9idXR0b24+JztcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGxpIGNsYXNzPVwiJHtpdGVtLnByaW9yaXR5fVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cbiAgICAgICAgPHNwYW4+JHtpdGVtLmdldE5hbWV9PC9zcGFuPiA8YnI+XG4gICAgICAgIDxzcGFuPiR7aXRlbS5nZXREZXNjcmlwdGlvbn08L3NwYW4+IDxicj5cbiAgICAgICAgPHNwYW4+JHtpdGVtLmdldER1ZURhdGV9PC9zcGFuPjxicj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XG4gICAgICAgICR7c3RhdHVzQnRufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1idG5cIj7inYw8L3NwYW4+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImV4cGFuZC10b2dnbGUke2luZGV4fVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1lZGl0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdmFsdWU9XCIke2l0ZW0uZ2V0TmFtZX1cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiIHZhbHVlPVwiJHtpdGVtLmdldERlc2NyaXB0aW9ufVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIHZhbHVlPVwiJHtpdGVtLmdldER1ZURhdGUuZ2V0RnVsbFllYXIoKX0tJHsoJzAnLmNvbmNhdChpdGVtLmdldER1ZURhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMiwgLTEpfS0ke2l0ZW0uZ2V0RHVlRGF0ZS5nZXREYXRlKCl9XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LXRvZG9cIj5FZGl0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bGFiZWwgZm9yPVwiZXhwYW5kLXRvZ2dsZSR7aW5kZXh9XCIgaWQ9XCJleHBhbmQtYnRuJHtpbmRleH1cIj4gRWRpdCA8L2xhYmVsPlxuICAgICAgICA8L2xpPlxuICAgICAgICBgO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKTtcbiAgICB0b2Rvc0h0bWwgPSB0b2Rvc0h0bWwgPT09ICcnID8gJzxsaT5ubyB0b2RvIGFkZGVkIHlldCDimLo8L2xpPicgOiB0b2Rvc0h0bWw7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdCAke3Byb2plY3QuZ2V0UHJpb3JpdHl9XCI+XG4gICAgPGRpdiBjbGFzcz1cInByb2plY3RfX2luZm9cIj5cbiAgICA8ZGl2PjxoMT5OYW1lOiAke3Byb2plY3QuZ2V0TmFtZX08L2gxPjxicj5cbiAgICA8aDI+IENhdGVnb3J5OiAke3Byb2plY3QuZ2V0Q2F0ZWdvcnl9PC9oMj5cbiAgICA8cD4gRGVzY3JpcHRpb246ICR7cHJvamVjdC5nZXREZXNjcmlwdGlvbn08L3A+PGJyPlxuICAgIDxwPkR1ZSBEYXRlOiAke3Byb2plY3QuZ2V0RHVlRGF0ZX08L3A+XG4gICAgPC9kaXY+XG4gICAgJHtzdGF0dXNCdG59XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByb2plY3RfX3RvZG9cIj5cbiAgICA8dWw+XG4gICAgJHt0b2Rvc0h0bWx9IFxuICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGlucHV0IGlkPVwiYWRkLXRvZG9cIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgIDxsYWJlbCBmb3I9XCJhZGQtdG9kb1wiIGNsYXNzPVwiYWRkLWxhYmVsXCI+PHNwYW4+4pyaPC9zcGFuPkFkZCBhIHRvZG88L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJ0b2RvX19jcmVhdG9yXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgY2xhc3M9XCJ0b2RvX19uYW1lXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwidG9kb19fZGVzY3JpcHRpb25cIj5cbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cInRvZG9fX2RhdGVcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRvZG9cIj5DcmVhdGU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICB9O1xuICBjb25zdCBwcm9qZWN0Vmlld0hUTUwgPSAocHJvamVjdHMpID0+IHtcbiAgICBsZXQgcHMgPSBwcm9qZWN0c1xuICAgICAgLm1hcCgocHJvamVjdCkgPT4gKGBcbiAgICAgICAgPGxpIGNsYXNzPVwiJHtwcm9qZWN0LnByaW9yaXR5fVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbmZvXCI+XG4gICAgICAgIDxkaXY+PHNwYW4+TmFtZTo8L3NwYW4+ICR7cHJvamVjdC5nZXROYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2PjxzcGFuPmNhdGVnb3J5Ojwvc3Bhbj4gJHtwcm9qZWN0LmdldENhdGVnb3J5fSA8L2Rpdj5cbiAgICAgICAgPGRpdj48c3Bhbj5kZXNjcmlwdGlvbjo8L3NwYW4+ICR7cHJvamVjdC5nZXREZXNjcmlwdGlvbn0gPC9kaXY+XG4gICAgICAgIDxkaXY+PHNwYW4+U3RhdHVzOjwvc3Bhbj4gJHtwcm9qZWN0LmdldFN0YXR1cyA/ICdEb25lJyA6ICdQZW5kaW5nJ30gPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWRhdGVcIj5cbiAgICAgICAgPGRpdj48c3Bhbj5EdWUgRGF0ZTwvc3Bhbj4gJHtwcm9qZWN0LmdldER1ZURhdGV9PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJnby1idXR0b25cIj5HbyB0byBwcm9qZWN0IDxzcGFuPuKepDwvc3Bhbj48L2J1dHRvblxuICAgICAgICA8L2RpdlxuICAgICAgICA8L2xpPlxuICAgICAgICBgKSkuam9pbignJyk7XG4gICAgaWYgKHBzID09PSAnJykge1xuICAgICAgcHMgPSAnPGxpPk5vIFByb2plY3RzIGFkZGVkIFlldCEhPC9saT4nO1xuICAgIH1cbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0cy12aWV3XCI+XG4gICAgPHVsPlxuICAgICR7cHN9XG4gICAgPC91bD5cbiAgICA8L2Rpdj5gO1xuICB9O1xuXG4gIGNvbnN0IGZpbGxNYWluVmlldyA9IChjb250ZW50KSA9PiB7XG4gICAgbWFpblZpZXcoKS5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluVmlldygpLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdEFkZExpc3RlbmVycyA9IChmdW5jKSA9PiB7XG4gICAgYWRkUHJvamVjdEJ0bigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsbE1haW5WaWV3KHByb2plY3RJbnBIVE1MKTtcbiAgICAgIHByb2plY3RCdXR0b24oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldExpc3RQcm9qZWN0c1ZpZXcgPSAocHJvamVjdHMsIHRvZG9DcmVhdGUsIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKSA9PiB7XG4gICAgZmlsbE1haW5WaWV3KHByb2plY3RWaWV3SFRNTChwcm9qZWN0cykpO1xuICAgIHZpZXdQcm9qZWN0QnRucygpLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBnZXRQcm9qZWN0Vmlldyhwcm9qZWN0c1tpXSwgdG9kb0NyZWF0ZSwgdXBkYXRlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaG9tZUJ0bigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZ2V0TGlzdFByb2plY3RzVmlldyhwcm9qZWN0cywgdG9kb0NyZWF0ZSwgdXBkYXRlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pO1xuICAgIH0pO1xuICAgIHVyZ2VudEJ0bigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdXJnZW50UGogPSBwcm9qZWN0cy5maWx0ZXIoKGUpID0+IGUuZ2V0UHJpb3JpdHkgPT09ICdSZWQnKTtcbiAgICAgIGdldExpc3RGaWx0ZXJlZFByb2plY3QodXJnZW50UGosIHRvZG9DcmVhdGUsIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbiAgICB9KTtcbiAgICBpbXBvcnRhbnRCdG4oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGltcG9ydGFudFBqID0gcHJvamVjdHMuZmlsdGVyKChlKSA9PiBlLmdldFByaW9yaXR5ID09PSAnT3JhbmdlJyk7XG4gICAgICBnZXRMaXN0RmlsdGVyZWRQcm9qZWN0KGltcG9ydGFudFBqLCB0b2RvQ3JlYXRlLCB1cGRhdGVQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbyk7XG4gICAgfSk7XG4gICAgY2xvc2VCdG4oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGNsb3NlUGogPSBwcm9qZWN0cy5maWx0ZXIoKGUpID0+IGUuZ2V0UHJpb3JpdHkgPT09ICdHcmVlbicpO1xuICAgICAgZ2V0TGlzdEZpbHRlcmVkUHJvamVjdChjbG9zZVBqLCB0b2RvQ3JlYXRlLCB1cGRhdGVQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbyk7XG4gICAgfSk7XG4gICAgZGVmYXVsdEJ0bigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY2xvc2VQaiA9IHByb2plY3RzLmZpbHRlcigoZSkgPT4gZS5nZXRDYXRlZ29yeSA9PT0gJ2RlZmF1bHQnKTtcbiAgICAgIGdldExpc3RGaWx0ZXJlZFByb2plY3QoY2xvc2VQaiwgdG9kb0NyZWF0ZSwgdXBkYXRlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldExpc3RGaWx0ZXJlZFByb2plY3QgPSAocHJvamVjdHMsIHRvZG9DcmVhdGUsIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKSA9PiB7XG4gICAgZmlsbE1haW5WaWV3KHByb2plY3RWaWV3SFRNTChwcm9qZWN0cykpO1xuICAgIHZpZXdQcm9qZWN0QnRucygpLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBnZXRQcm9qZWN0Vmlldyhwcm9qZWN0c1tpXSwgdG9kb0NyZWF0ZSwgdXBkYXRlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdFZpZXcgPSAocHJvamVjdCwgYWRkVG9kbywgdXBkYXRlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pID0+IHtcbiAgICBmaWxsTWFpblZpZXcocHJvamVjdEhUTUwocHJvamVjdCkpO1xuICAgIHVwZGF0ZVByb2plY3RMaXN0ZW5lcnMocHJvamVjdCwgYWRkVG9kbywgdXBkYXRlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVByb2plY3RMaXN0ZW5lcnMgPSAocHJvamVjdCwgYWRkVG9kbywgdXBkYXRlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pID0+IHtcbiAgICBhZGRUb2RvQnRuKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBhZGRUb2RvKHByb2plY3QpO1xuICAgIH0pO1xuICAgIHByb2plY3RTdGF0dXNCdG4oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVwZGF0ZVByb2plY3RTdGF0dXMocHJvamVjdCkpO1xuICAgIHRvZG9TdGF0dXNCdG4oKS5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHVwZGF0ZVRvZG9TdGF0dXMocHJvamVjdCwgaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdG9kb2RlbGV0ZUJ0bnMoKS5mb3JFYWNoKChCdG4sIGkpID0+IHtcbiAgICAgIEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlVG9kbyhwcm9qZWN0LCBpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGVkaXRUb2RvQnRucygpLmZvckVhY2goKEJ0biwgaW5kKSA9PiB7XG4gICAgICBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGVkaXRUb2RvKHByb2plY3QsIGluZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb2plY3RJbnB1dCxcbiAgICB0b2RvSW5wdXQsXG4gICAgdG9kb0VkaXRJbnB1dCxcbiAgICB1cGRhdGVQcm9qZWN0QWRkTGlzdGVuZXJzLFxuICAgIGdldExpc3RQcm9qZWN0c1ZpZXcsXG4gICAgZ2V0UHJvamVjdFZpZXcsXG4gIH07XG59KSgpO1xuXG5leHBvcnQge1xuICBET01Db250cm9sbGVyIGFzXG4gIGRlZmF1bHQsXG59OyIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBuZXcgRGF0ZSgpLCBzdGF0dXMgPSBmYWxzZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy51cGRhdGVQcmlvcml0eSgpO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIH1cblxuICBnZXQgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0IGdldENhdGVnb3J5KCkge1xuICAgIHJldHVybiB0aGlzLmNhdGVnb3J5O1xuICB9XG5cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIGdldCBnZXRUb2RvKCkge1xuICAgIHJldHVybiB0aGlzLnRvZG9zO1xuICB9XG5cbiAgZ2V0IGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gIH1cblxuICBzZXQgc2V0VG9kbyhuZXdUb2RvKSB7XG4gICAgdGhpcy50b2RvID0gbmV3VG9kbztcbiAgfVxuXG4gIHNldCBzZXREdWVEYXRlKG5ld0RhdGUpIHtcbiAgICBpZiAoTWF0aC5mbG9vcihuZXdEYXRlIC0gbmV3IERhdGUoKSkgPD0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmRhdGUgPSBuZXdEYXRlO1xuICAgIHRoaXMudXBkYXRlUHJpb3JpdHkoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldCBzZXRDYXRlZ29yeShuZXdDYXRlZ29yeSkge1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBuZXdDYXRlZ29yeTtcbiAgfVxuXG4gIHN0YXRpYyB2YWxpZERhdGUoZGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKChkYXRlIC0gbmV3IERhdGUoKSkgLyA4NjQwMDAwMCk7XG4gIH1cblxuICBnZXQgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICB1cGRhdGVQcmlvcml0eSgpIHtcbiAgICBjb25zdCB0aW1lTGVmdCA9IFByb2plY3QudmFsaWREYXRlKHRoaXMuZHVlRGF0ZSk7XG4gICAgLy8gY29uc29sZS5sb2cgKHRpbWVMZWZ0KTtcbiAgICBpZiAodGltZUxlZnQgPD0gMSkge1xuICAgICAgdGhpcy5wcmlvcml0eSA9ICdSZWQnO1xuICAgIH0gZWxzZSBpZiAodGltZUxlZnQgPiAxICYmIHRpbWVMZWZ0IDw9IDMpIHtcbiAgICAgIHRoaXMucHJpb3JpdHkgPSAnT3JhbmdlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcmlvcml0eSA9ICdHcmVlbic7XG4gICAgfVxuICB9XG5cbiAgYWRkVG9kbyh0b2RvKSB7XG4gICAgaWYgKE1hdGguZmxvb3IodGhpcy5kdWVEYXRlIC0gdG9kby5kdWVEYXRlKSA8PSAwIHx8IE1hdGguZmxvb3IodG9kby5kdWVEYXRlIC0gbmV3IERhdGUoKSkgPD0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBkZWxUb2RvKGluZGV4KSB7XG4gICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgdXBkYXRlU3RhdHVzKCkge1xuICAgIHRoaXMuc3RhdHVzID0gIXRoaXMuc3RhdHVzO1xuICAgIGlmICh0aGlzLnN0YXR1cykge1xuICAgICAgdGhpcy50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiAodG9kby5zZXRTdGF0dXMgPSB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9kb3MuZm9yRWFjaCgodG9kbykgPT4gKHRvZG8uc2V0U3RhdHVzID0gZmFsc2UpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBuZXcgRGF0ZSgpLCBzdGF0dXMgPSBmYWxzZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy51cGRhdGVQcmlvcml0eSgpO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgZ2V0IGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldCBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIHNldCBzZXREdWVEYXRlKG5ld0RhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEYXRlO1xuICAgIHRoaXMudXBkYXRlUHJpb3JpdHkoKTtcbiAgfVxuXG4gIGdldCBnZXRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICB9XG5cbiAgc2V0IHNldFN0YXR1cyhib2wpIHtcbiAgICB0aGlzLnN0YXR1cyA9IGJvbDtcbiAgfVxuXG4gIHN0YXRpYyB2YWxpZERhdGUodG9kb0RhdGUsIHByb2plY3REYXRlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKHRvZG9EYXRlIC0gcHJvamVjdERhdGUpIC8gODY0MDAwMDApO1xuICB9XG5cblxuICB1cGRhdGVQcmlvcml0eSgpIHtcbiAgICBjb25zdCB0aW1lTGVmdCA9IE1hdGguZmxvb3IoKHRoaXMuZHVlRGF0ZSAtIG5ldyBEYXRlKCkpIC8gODY0MDAwMDApO1xuICAgIGlmICh0aW1lTGVmdCA8PSAxKSB7XG4gICAgICB0aGlzLnByaW9yaXR5ID0gJ1JlZCc7XG4gICAgfSBlbHNlIGlmICh0aW1lTGVmdCA+IDEgJiYgdGltZUxlZnQgPD0gMykge1xuICAgICAgdGhpcy5wcmlvcml0eSA9ICdPcmFuZ2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByaW9yaXR5ID0gJ0dyZWVuJztcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTdGF0dXMoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF0dXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiJdLCJzb3VyY2VSb290IjoiIn0=