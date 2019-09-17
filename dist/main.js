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

  // Get the view for the new list of projects
  // update listeners for "go to project" button
  // update listeners for "Home" link on the left panel
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

  // get view for the modified project
  // update listeners for todo create button
  // update listeners for project status toggler button
  _modules_DOMController__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectView(project, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);
};

const changeProjectStatus = (project) => {
  project.updateStatus();

  // get view for the modified project
  // update listeners for todo create button
  // update listeners for project status toggler button
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

// initial view rendering to show the list of the projects (intro)
_modules_DOMController__WEBPACK_IMPORTED_MODULE_3__["default"].getListProjectsView(projects, todoCreate, changeProjectStatus, updateTodoStatus, deleteTodo, editTodo);

// Add event listener to the "Add a Project" button
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

  const todoEditInput = (index) => (
    {
      name: innerEditdivs()[index].querySelector('[name="name"]').value,
      description: innerEditdivs()[index].querySelector('[name="description"]').value,
      toDate: new Date(innerEditdivs()[index].querySelector('[name="date"]').value),
    }
  );


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
        <li>
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

  // Add event listener to the "Add a Project" button
  const updateProjectAddListeners = (func) => {
    addProjectBtn().addEventListener('click', () => {
      fillMainView(projectInpHTML);
      projectButton().addEventListener('click', func);
    });
  };

  // Get the view for the new list of projects
  // update listeners for "go to project" button
  // update listeners for "Home" link on the left panel
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

  // get view for the modified project
  // update listeners for todo create button
  // update listeners for project status toggler button
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

  // Change the status of the project
  updateStatus() {
    this.status = !this.status;
    // propogate the state of the project on the related todos
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
    // console.log (timeLeft);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzPzFlMmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1RvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RB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Q0FBMkMsa0JBQWtCLEVBQUUscUJBQXFCLGtCQUFrQixFQUFFLGtCQUFrQiwwQkFBMEIsc0JBQXNCLDJCQUEyQixzQkFBc0IsdUJBQXVCLHVCQUF1QixnQkFBZ0IsY0FBYyxFQUFFLDJDQUEyQyxrQkFBa0IsRUFBRSxxQkFBcUIsa0JBQWtCLEVBQUUsa0JBQWtCLDBCQUEwQixzQkFBc0IsMkJBQTJCLHNCQUFzQix1QkFBdUIsdUJBQXVCLGdCQUFnQixjQUFjLEVBQUUsMkNBQTJDLGtCQUFrQixFQUFFLHFCQUFxQixrQkFBa0IsRUFBRSxrQkFBa0IsMEJBQTBCLHNCQUFzQiwyQkFBMkIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGNBQWMsRUFBRSwyQ0FBMkMsa0JBQWtCLEVBQUUscUJBQXFCLGtCQUFrQixFQUFFLGtCQUFrQiwwQkFBMEIsc0JBQXNCLDJCQUEyQixzQkFBc0IsdUJBQXVCLHVCQUF1QixnQkFBZ0IsY0FBYyxFQUFFLDJDQUEyQyxrQkFBa0IsRUFBRSxxQkFBcUIsa0JBQWtCLEVBQUUsa0JBQWtCLDBCQUEwQixzQkFBc0IsMkJBQTJCLHNCQUFzQix1QkFBdUIsdUJBQXVCLGdCQUFnQixjQUFjLEVBQUUsMkNBQTJDLGtCQUFrQixFQUFFLHNCQUFzQixrQkFBa0IsRUFBRSxtQkFBbUIsMEJBQTBCLHNCQUFzQiwyQkFBMkIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGNBQWMsRUFBRSw0Q0FBNEMsa0JBQWtCLEVBQUUsc0JBQXNCLGtCQUFrQixFQUFFLG1CQUFtQiwwQkFBMEIsc0JBQXNCLDJCQUEyQixzQkFBc0IsdUJBQXVCLHVCQUF1QixnQkFBZ0IsY0FBYyxFQUFFLDRDQUE0QyxrQkFBa0IsRUFBRSxzQkFBc0Isa0JBQWtCLEVBQUUsbUJBQW1CLDBCQUEwQixzQkFBc0IsMkJBQTJCLHNCQUFzQix1QkFBdUIsdUJBQXVCLGdCQUFnQixjQUFjLEVBQUUsNENBQTRDLGtCQUFrQixFQUFFLHNCQUFzQixrQkFBa0IsRUFBRSxtQkFBbUIsMEJBQTBCLHNCQUFzQiwyQkFBMkIsc0JB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzdORDtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDaEd0QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCIpLCBcIlwiKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDEwcHg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAxMnB4OyB9IH1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjNTFkYWNmLCAjNjUxMDg2KTtcXG4gIGhlaWdodDogMTAwdmg7IH1cXG5cXG4uYXBwQ29udGFpbmVyIHtcXG4gIGhlaWdodDogODB2aDtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDMwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInRvcCB0b3BcXFwiIFxcXCJsZWZ0IG1haW5cXFwiOyB9XFxuXFxuLmFkZGl0aW9uIHtcXG4gIGdyaWQtYXJlYTogdG9wO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtOyB9XFxuICAuYWRkaXRpb24gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4OyB9XFxuICAgIC5hZGRpdGlvbiBidXR0b24gc3BhbiB7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTsgfVxcblxcbi5sYXRlcmFsLXRhYiB7XFxuICBncmlkLWFyZWE6IGxlZnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWFlOWU5LCAjZDRkN2RkKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNDBweDsgfVxcbiAgLmxhdGVyYWwtdGFiIHVsIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgIzIyMjIyMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogOTUlOyB9XFxuICAgIC5sYXRlcmFsLXRhYiB1bCBsaSB7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5yZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmZjQ2NDYsICNhZjA0MDQpOyB9XFxuXFxuLm9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmYjQ1ZSwgI2QwNDkyNSk7IH1cXG5cXG4uZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxZmFiODksICMyZTQxMzcpOyB9XFxuXFxuLm1haW4tdmlldyB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNDBweCAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VhZTllOSwgI2Q0ZDdkZCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAubWFpbi12aWV3X19ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMWZhYjg5LCAjMmU0MTM3KTsgfVxcbiAgLm1haW4tdmlld19fb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmZmI0NWUsICNkMDQ5MjUpOyB9XFxuICAubWFpbi12aWV3X19yZWQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmNDY0NiwgI2FmMDQwNCk7IH1cXG5cXG4ucHJvamVjdHMtdmlldyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNDBweCAwOyB9XFxuICAucHJvamVjdHMtdmlldyB1bCB7XFxuICAgIG1heC1oZWlnaHQ6IDYwdmg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0MHB4IDA7IH1cXG4gICAgLnByb2plY3RzLXZpZXcgdWwgbGkge1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDsgfVxcbiAgICAgIC5wcm9qZWN0cy12aWV3IHVsIGxpID4gZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgY29sb3I6ICM5ZmU5MTQ7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAgIC5wcm9qZWN0cy12aWV3IHVsIGxpIC5wcm9qZWN0LWluZm8gPiBkaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAucHJvamVjdHMtdmlldyB1bCBsaSAuYWN0aW9uLWRhdGUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgICAucHJvamVjdHMtdmlldyB1bCBsaSAuYWN0aW9uLWRhdGUgPiBkaXYge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgICAucHJvamVjdHMtdmlldyB1bCBsaSAuYWN0aW9uLWRhdGUgLmdvLWJ1dHRvbiB7XFxuICAgICAgICAgIHBhZGRpbmc6IC4ycmVtO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICAgICAgICAgIC5wcm9qZWN0cy12aWV3IHVsIGxpIC5hY3Rpb24tZGF0ZSAuZ28tYnV0dG9uIHNwYW4ge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICAgIGNvbG9yOiBibHVldmlvbGV0OyB9XFxuICAgICAgLnByb2plY3RzLXZpZXcgdWwgbGkgc3BhbiB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBjb2xvcjogI2Q0ZDdkZDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtOyB9XFxuXFxuLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxcbiAgLnByb2plY3RfX2luZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuNXJlbTsgfVxcbiAgICAucHJvamVjdF9faW5mbyA+IDpmaXJzdC1jaGlsZCB7XFxuICAgICAgcGFkZGluZzogMXJlbTsgfVxcbiAgICAucHJvamVjdF9faW5mbyBoMSB7XFxuICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgIC5wcm9qZWN0X19pbmZvIGgyIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgbWFyZ2luLXRvcDogLjdyZW07IH1cXG4gICAgLnByb2plY3RfX2luZm8gcCB7XFxuICAgICAgbWFyZ2luLXRvcDogLjZyZW07XFxuICAgICAgZm9udC1zaXplOiAxLjFyZW07IH1cXG4gICAgLnByb2plY3RfX2luZm8gYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tdG9wOiAuNnJlbTtcXG4gICAgICBwYWRkaW5nOiAuM3JlbTtcXG4gICAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsgfVxcbiAgICAgIC5wcm9qZWN0X19pbmZvIGJ1dHRvbiBzcGFuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgICBjb2xvcjogZ3JlZW47IH1cXG4gIC5wcm9qZWN0X190b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogLjNyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC4zcmVtOyB9XFxuICAgIC5wcm9qZWN0X190b2RvIHVsIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgICB3aWR0aDogODAlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDVyZW07XFxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XFxuICAgICAgLnByb2plY3RfX3RvZG8gdWwgbGkge1xcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xcbiAgICAgICAgcGFkZGluZzogLjVyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgICAgIC5wcm9qZWN0X190b2RvIHVsIGxpID4gZGl2IHtcXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDA7IH1cXG4gICAgICAgICAgLnByb2plY3RfX3RvZG8gdWwgbGkgPiBkaXYgc3BhbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG4gICAgICAgIC5wcm9qZWN0X190b2RvIHVsIGxpIC5yaWdodCB7XFxuICAgICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtOyB9XFxuICAgICAgICAucHJvamVjdF9fdG9kbyB1bCBsaSAubGVmdCB7XFxuICAgICAgICAgIHdpZHRoOiAyNSU7XFxuICAgICAgICAgIGhlaWdodDogNHJlbTtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgICAucHJvamVjdF9fdG9kbyB1bCBsaSAubGVmdCA+IHNwYW4ge1xcbiAgICAgICAgICBjb2xvcjogI2Q0ZDdkZDtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyB9XFxuICAgICAgICAucHJvamVjdF9fdG9kbyB1bCBsaSAuY2xvc2UtYnRuIHtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgIG1hcmdpbjogLjNyZW07XFxuICAgICAgICAgIHBhZGRpbmc6IC4zcmVtO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWFlOWU5LCAjZDRkN2RkKTtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgICAucHJvamVjdF9fdG9kbyB1bCBsaSAuZG9uZS10b2RvIHtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICB0b3A6IDEwcHg7IH1cXG4gICAgICAgICAgLnByb2plY3RfX3RvZG8gdWwgbGkgLmRvbmUtdG9kbyA+IHNwYW4ge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjsgfVxcbiAgLnByb2plY3RfX2NyZWF0b3Ige1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC5wcm9qZWN0X19jcmVhdG9yIGgxIHtcXG4gICAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07IH1cXG4gICAgLnByb2plY3RfX2NyZWF0b3IgaW5wdXQge1xcbiAgICAgIGhlaWdodDogMS45cmVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTsgfVxcbiAgICAucHJvamVjdF9fY3JlYXRvciBidXR0b24ge1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyB9XFxuXFxuI2FkZC10b2RvIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uYWRkLWxhYmVsIHtcXG4gIHBhZGRpbmc6IC4zcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmYjQ1ZTtcXG4gIG1hcmdpbi10b3A6IC4zcmVtOyB9XFxuXFxuI2FkZC10b2RvOmNoZWNrZWQgfiAudG9kb19fY3JlYXRvciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnRvZG9fX2NyZWF0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAuNXJlbTsgfVxcbiAgLnRvZG9fX2NyZWF0b3IgaDEge1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIC50b2RvX19jcmVhdG9yIGlucHV0IHtcXG4gICAgaGVpZ2h0OiAxLjlyZW07IH1cXG4gIC50b2RvX19jcmVhdG9yIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyB9XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5pbm5lci1lZGl0IGlucHV0IHtcXG4gICAgd2lkdGg6IDZyZW07IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTAge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUwOmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNTBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4yIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTI6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTMge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUzOmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGU0IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNTBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlNDpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlNSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG41IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTU6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTYge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuNiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGU2OmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGU3IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNTBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlNzpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlOCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG44IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTg6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTkge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuOSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGU5OmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxMCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4xMCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxMDpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTEge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMTEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNTBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTE6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTEyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjEyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTEyOmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxMyB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4xMyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxMzpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTQge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMTQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNTBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTQ6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTE1IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjE1IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTE1OmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxNiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4xNiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxNjpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTcge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMTcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNTBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTc6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTE4IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjE4IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTE4OmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxOSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4xOSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA1MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxOTpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMjAge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMjAge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNTBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMjA6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uR3JlZW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxZmFiODksICMyZTQxMzcpOyB9XFxuXFxuLk9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmYjQ1ZSwgI2QwNDkyNSk7IH1cXG5cXG4uUmVkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmY0NjQ2LCAjYWYwNDA0KTsgfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL21vZHVsZXMvUHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL21vZHVsZXMvVG9kbyc7XG5pbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvRE9NQ29udHJvbGxlcic7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG4gIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkubWFwKChwcm9qKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2oubmFtZSwgcHJvai5jYXRlZ29yeSwgcHJvai5kZXNjcmlwdGlvbiwgbmV3IERhdGUoRGF0ZS5wYXJzZShwcm9qLmR1ZURhdGUpKSwgcHJvai5zdGF0dXMpO1xuICAgIHByb2oudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgdG9kID0gbmV3IFRvZG8odG9kby5uYW1lLCB0b2RvLmRlc2NyaXB0aW9uLCBuZXcgRGF0ZShEYXRlLnBhcnNlKHRvZG8uZHVlRGF0ZSkpLCB0b2RvLnN0YXR1cyk7XG4gICAgICBwcm9qZWN0LmFkZFRvZG8odG9kKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfSk7XG59XG5cbmNvbnN0IHByb2plY3RDcmVhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBuYW1lOiBwcm9OYW1lLFxuICAgIGNhdGVnb3J5OiBwcm9DYXRlZ29yeSxcbiAgICBkZXNjcmlwdGlvbjogcHJvRGVzY3JpcHRpb24sXG4gICAgZGF0ZTogcHJvRGF0ZSxcbiAgfSA9IERPTUNvbnRyb2xsZXIucHJvamVjdElucHV0KCk7XG4gIGlmIChQcm9qZWN0LnZhbGlkRGF0ZShwcm9EYXRlKSA8PSAwKSB7XG4gICAgYWxlcnQoJ0ludmFsaWQgZGF0ZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBybyA9IG5ldyBQcm9qZWN0KHByb05hbWUsIHByb0NhdGVnb3J5Lmxlbmd0aCA9PT0gMCA/ICdkZWZhdWx0JyA6IHByb0NhdGVnb3J5LCBwcm9EZXNjcmlwdGlvbiwgcHJvRGF0ZSk7XG4gIHByb2plY3RzLnB1c2gocHJvKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG4gIC8vIEdldCB0aGUgdmlldyBmb3IgdGhlIG5ldyBsaXN0IG9mIHByb2plY3RzXG4gIC8vIHVwZGF0ZSBsaXN0ZW5lcnMgZm9yIFwiZ28gdG8gcHJvamVjdFwiIGJ1dHRvblxuICAvLyB1cGRhdGUgbGlzdGVuZXJzIGZvciBcIkhvbWVcIiBsaW5rIG9uIHRoZSBsZWZ0IHBhbmVsXG4gIERPTUNvbnRyb2xsZXIuZ2V0TGlzdFByb2plY3RzVmlldyhwcm9qZWN0cywgdG9kb0NyZWF0ZSwgY2hhbmdlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbyk7XG59O1xuXG5jb25zdCB0b2RvQ3JlYXRlID0gKHByb2plY3QpID0+IHtcbiAgY29uc3Qge1xuICAgIG5hbWU6IHRvTmFtZSxcbiAgICBkZXNjcmlwdGlvbjogdG9EZXNjcmlwdGlvbixcbiAgICBkYXRlOiB0b0RhdGUsXG4gIH0gPSBET01Db250cm9sbGVyLnRvZG9JbnB1dCgpO1xuICBpZiAodG9OYW1lID09PSAnJyB8fCB0b0Rlc2NyaXB0aW9uID09PSAnJyB8fCB0b0RhdGUudG9EYXRlU3RyaW5nKCkgPT09ICdJbnZhbGlkIERhdGUnKSByZXR1cm47XG4gIGlmIChUb2RvLnZhbGlkRGF0ZSh0b0RhdGUsIHByb2plY3QuZ2V0RHVlRGF0ZSkgPj0gMCkge1xuICAgIGFsZXJ0KCdpbnZhbGlkIGRhdGUnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdG9kID0gbmV3IFRvZG8odG9OYW1lLCB0b0Rlc2NyaXB0aW9uLCB0b0RhdGUpO1xuICBwcm9qZWN0LmFkZFRvZG8odG9kKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblxuICAvLyBnZXQgdmlldyBmb3IgdGhlIG1vZGlmaWVkIHByb2plY3RcbiAgLy8gdXBkYXRlIGxpc3RlbmVycyBmb3IgdG9kbyBjcmVhdGUgYnV0dG9uXG4gIC8vIHVwZGF0ZSBsaXN0ZW5lcnMgZm9yIHByb2plY3Qgc3RhdHVzIHRvZ2dsZXIgYnV0dG9uXG4gIERPTUNvbnRyb2xsZXIuZ2V0UHJvamVjdFZpZXcocHJvamVjdCwgdG9kb0NyZWF0ZSwgY2hhbmdlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pO1xufTtcblxuY29uc3QgY2hhbmdlUHJvamVjdFN0YXR1cyA9IChwcm9qZWN0KSA9PiB7XG4gIHByb2plY3QudXBkYXRlU3RhdHVzKCk7XG5cbiAgLy8gZ2V0IHZpZXcgZm9yIHRoZSBtb2RpZmllZCBwcm9qZWN0XG4gIC8vIHVwZGF0ZSBsaXN0ZW5lcnMgZm9yIHRvZG8gY3JlYXRlIGJ1dHRvblxuICAvLyB1cGRhdGUgbGlzdGVuZXJzIGZvciBwcm9qZWN0IHN0YXR1cyB0b2dnbGVyIGJ1dHRvblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICBET01Db250cm9sbGVyLmdldFByb2plY3RWaWV3KHByb2plY3QsIHRvZG9DcmVhdGUsIGNoYW5nZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVRvZG9TdGF0dXMgPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgcHJvamVjdC5nZXRUb2RvW2luZGV4XS51cGRhdGVTdGF0dXMoKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgRE9NQ29udHJvbGxlci5nZXRQcm9qZWN0Vmlldyhwcm9qZWN0LCB0b2RvQ3JlYXRlLCBjaGFuZ2VQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbyk7XG59O1xuXG5jb25zdCBkZWxldGVUb2RvID0gKHByb2plY3QsIGluZGV4KSA9PiB7XG4gIHByb2plY3QuZGVsVG9kbyhpbmRleCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIERPTUNvbnRyb2xsZXIuZ2V0UHJvamVjdFZpZXcocHJvamVjdCwgdG9kb0NyZWF0ZSwgY2hhbmdlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pO1xufTtcblxuY29uc3QgZWRpdFRvZG8gPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgdG9EYXRlLFxuICB9ID0gRE9NQ29udHJvbGxlci50b2RvRWRpdElucHV0KGluZGV4KTtcbiAgaWYgKG5hbWUgPT09ICcnIHx8IGRlc2NyaXB0aW9uID09PSAnJyB8fCB0b0RhdGUudG9EYXRlU3RyaW5nKCkgPT09ICdJbnZhbGlkIERhdGUnKSByZXR1cm47XG4gIGlmIChUb2RvLnZhbGlkRGF0ZSh0b0RhdGUsIHByb2plY3QuZ2V0RHVlRGF0ZSkgPj0gMCB8fCBUb2RvLnZhbGlkRGF0ZSh0b0RhdGUsIG5ldyBEYXRlKCkpIDw9IDApIHtcbiAgICBhbGVydCgnaW52YWxpZCBkYXRlJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHByb2plY3QuZ2V0VG9kb1tpbmRleF0uc2V0TmFtZSA9IG5hbWU7XG4gIHByb2plY3QuZ2V0VG9kb1tpbmRleF0uc2V0RGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgcHJvamVjdC5nZXRUb2RvW2luZGV4XS5zZXREdWVEYXRlID0gdG9EYXRlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICBET01Db250cm9sbGVyLmdldFByb2plY3RWaWV3KHByb2plY3QsIHRvZG9DcmVhdGUsIGNoYW5nZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbn07XG5cbi8vIGluaXRpYWwgdmlldyByZW5kZXJpbmcgdG8gc2hvdyB0aGUgbGlzdCBvZiB0aGUgcHJvamVjdHMgKGludHJvKVxuRE9NQ29udHJvbGxlci5nZXRMaXN0UHJvamVjdHNWaWV3KHByb2plY3RzLCB0b2RvQ3JlYXRlLCBjaGFuZ2VQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbyk7XG5cbi8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgXCJBZGQgYSBQcm9qZWN0XCIgYnV0dG9uXG5ET01Db250cm9sbGVyLnVwZGF0ZVByb2plY3RBZGRMaXN0ZW5lcnMocHJvamVjdENyZWF0ZSk7IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiY29uc3QgRE9NQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW5WaWV3ID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdmlldycpO1xuICBjb25zdCBwcm9qZWN0QnV0dG9uID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0b3ItYnV0dG9uJyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkX3Byb2plY3QnKTtcbiAgY29uc3Qgdmlld1Byb2plY3RCdG5zID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvLWJ1dHRvbicpO1xuICBjb25zdCBhZGRUb2RvQnRuID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJyk7XG4gIGNvbnN0IGhvbWVCdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWxpbmsnKTtcbiAgY29uc3QgcHJvamVjdFN0YXR1c0J0biA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb25lLXByb2plY3QnKTtcbiAgY29uc3QgdG9kb1N0YXR1c0J0biA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb25lLXRvZG8nKTtcbiAgY29uc3QgdG9kb2RlbGV0ZUJ0bnMgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnRuJyk7XG4gIGNvbnN0IGVkaXRUb2RvQnRucyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXRvZG8nKTtcbiAgY29uc3QgaW5uZXJFZGl0ZGl2cyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbm5lci1lZGl0Jyk7XG4gIGNvbnN0IHVyZ2VudEJ0biA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdXJnZW50Jyk7XG4gIGNvbnN0IGltcG9ydGFudEJ0biA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtaW1wb3J0YW50Jyk7XG4gIGNvbnN0IGNsb3NlQnRuID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1jbG9zZScpO1xuICBjb25zdCBkZWZhdWx0QnRuID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1kZWZhdWx0Jyk7XG5cbiAgY29uc3QgdG9kb0VkaXRJbnB1dCA9IChpbmRleCkgPT4gKFxuICAgIHtcbiAgICAgIG5hbWU6IGlubmVyRWRpdGRpdnMoKVtpbmRleF0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJuYW1lXCJdJykudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogaW5uZXJFZGl0ZGl2cygpW2luZGV4XS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsdWUsXG4gICAgICB0b0RhdGU6IG5ldyBEYXRlKGlubmVyRWRpdGRpdnMoKVtpbmRleF0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJkYXRlXCJdJykudmFsdWUpLFxuICAgIH1cbiAgKTtcblxuXG4gIGNvbnN0IHByb2plY3RJbnB1dCA9ICgpID0+ICh7XG4gICAgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX25hbWUnKS52YWx1ZSxcbiAgICBjYXRlZ29yeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2NhdGVnb3J5JykudmFsdWUsXG4gICAgZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19kZXNjcmlwdGlvbicpLnZhbHVlLFxuICAgIGRhdGU6IG5ldyBEYXRlKGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19kYXRlJykudmFsdWV9YCksXG4gIH0pO1xuXG4gIGNvbnN0IHRvZG9JbnB1dCA9ICgpID0+ICh7XG4gICAgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9fX25hbWUnKS52YWx1ZSxcbiAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9fX2Rlc2NyaXB0aW9uJykudmFsdWUsXG4gICAgZGF0ZTogbmV3IERhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9fX2RhdGUnKS52YWx1ZSksXG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RJbnBIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RfX2NyZWF0b3JcIj5cbiAgICAgIDxoMT5DcmVhdGUgYSBQcm9qZWN0PC9oMT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIGNsYXNzPVwicHJvamVjdF9fbmFtZVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJjYXRlZ29yeVwiIGNsYXNzPVwicHJvamVjdF9fY2F0ZWdvcnlcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cInByb2plY3RfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cInByb2plY3RfX2RhdGVcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJjcmVhdG9yLWJ1dHRvblwiPkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+YDtcblxuICBjb25zdCBwcm9qZWN0SFRNTCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzQnRuID0gcHJvamVjdC5nZXRTdGF0dXMgPyAnPGJ1dHRvbiBjbGFzcz1cImRvbmUtcHJvamVjdFwiPiBEb25lIDxzcGFuPuKYkTwvc3Bhbj48L2J1dHRvbj4nIDogJzxidXR0b24gY2xhc3M9XCJkb25lLXByb2plY3RcIj4gUGVuZGluZyA8c3Bhbj7ijbs8L3NwYW4+PC9idXR0b24+JztcbiAgICBsZXQgdG9kb3NIdG1sID0gcHJvamVjdC5nZXRUb2RvXG4gICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0dXNCdG4gPSBpdGVtLmdldFN0YXR1cyA/ICc8YnV0dG9uIGNsYXNzPVwiZG9uZS10b2RvXCI+IERvbmUgPHNwYW4+4piRPC9zcGFuPjwvYnV0dG9uPicgOiAnPGJ1dHRvbiBjbGFzcz1cImRvbmUtdG9kb1wiPiBQZW5kaW5nIDxzcGFuPuKNuzwvc3Bhbj48L2J1dHRvbj4nO1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8bGk+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxuICAgICAgICA8c3Bhbj4ke2l0ZW0uZ2V0TmFtZX08L3NwYW4+IDxicj5cbiAgICAgICAgPHNwYW4+JHtpdGVtLmdldERlc2NyaXB0aW9ufTwvc3Bhbj4gPGJyPlxuICAgICAgICA8c3Bhbj4ke2l0ZW0uZ2V0RHVlRGF0ZX08L3NwYW4+PGJyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cbiAgICAgICAgJHtzdGF0dXNCdG59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlLWJ0blwiPuKdjDwvc3Bhbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiZXhwYW5kLXRvZ2dsZSR7aW5kZXh9XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWVkaXRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB2YWx1ZT1cIiR7aXRlbS5nZXROYW1lfVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCIgdmFsdWU9XCIke2l0ZW0uZ2V0RGVzY3JpcHRpb259XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgdmFsdWU9XCIke2l0ZW0uZ2V0RHVlRGF0ZS5nZXRGdWxsWWVhcigpfS0keygnMCcuY29uY2F0KGl0ZW0uZ2V0RHVlRGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yLCAtMSl9LSR7aXRlbS5nZXREdWVEYXRlLmdldERhdGUoKX1cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtdG9kb1wiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJleHBhbmQtdG9nZ2xlJHtpbmRleH1cIiBpZD1cImV4cGFuZC1idG4ke2luZGV4fVwiPiBFZGl0IDwvbGFiZWw+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIGA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuICAgIHRvZG9zSHRtbCA9IHRvZG9zSHRtbCA9PT0gJycgPyAnPGxpPm5vIHRvZG8gYWRkZWQgeWV0IOKYujwvbGk+JyA6IHRvZG9zSHRtbDtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0ICR7cHJvamVjdC5nZXRQcmlvcml0eX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9faW5mb1wiPlxuICAgIDxkaXY+PGgxPk5hbWU6ICR7cHJvamVjdC5nZXROYW1lfTwvaDE+PGJyPlxuICAgIDxoMj4gQ2F0ZWdvcnk6ICR7cHJvamVjdC5nZXRDYXRlZ29yeX08L2gyPlxuICAgIDxwPiBEZXNjcmlwdGlvbjogJHtwcm9qZWN0LmdldERlc2NyaXB0aW9ufTwvcD48YnI+XG4gICAgPHA+RHVlIERhdGU6ICR7cHJvamVjdC5nZXREdWVEYXRlfTwvcD5cbiAgICA8L2Rpdj5cbiAgICAke3N0YXR1c0J0bn1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fdG9kb1wiPlxuICAgIDx1bD5cbiAgICAke3RvZG9zSHRtbH0gXG4gICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8aW5wdXQgaWQ9XCJhZGQtdG9kb1wiIHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgPGxhYmVsIGZvcj1cImFkZC10b2RvXCIgY2xhc3M9XCJhZGQtbGFiZWxcIj48c3Bhbj7inJo8L3NwYW4+QWRkIGEgdG9kbzwvbGFiZWw+XG4gICAgPGRpdiBjbGFzcz1cInRvZG9fX2NyZWF0b3JcIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBjbGFzcz1cInRvZG9fX25hbWVcIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCIgY2xhc3M9XCJ0b2RvX19kZXNjcmlwdGlvblwiPlxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwidG9kb19fZGF0ZVwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdG9kb1wiPkNyZWF0ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIH07XG4gIGNvbnN0IHByb2plY3RWaWV3SFRNTCA9IChwcm9qZWN0cykgPT4ge1xuICAgIGxldCBwcyA9IHByb2plY3RzXG4gICAgICAubWFwKChwcm9qZWN0KSA9PiAoYFxuICAgICAgICA8bGkgY2xhc3M9XCIke3Byb2plY3QucHJpb3JpdHl9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWluZm9cIj5cbiAgICAgICAgPGRpdj48c3Bhbj5OYW1lOjwvc3Bhbj4gJHtwcm9qZWN0LmdldE5hbWV9PC9kaXY+XG4gICAgICAgIDxkaXY+PHNwYW4+Y2F0ZWdvcnk6PC9zcGFuPiAke3Byb2plY3QuZ2V0Q2F0ZWdvcnl9IDwvZGl2PlxuICAgICAgICA8ZGl2PjxzcGFuPmRlc2NyaXB0aW9uOjwvc3Bhbj4gJHtwcm9qZWN0LmdldERlc2NyaXB0aW9ufSA8L2Rpdj5cbiAgICAgICAgPGRpdj48c3Bhbj5TdGF0dXM6PC9zcGFuPiAke3Byb2plY3QuZ2V0U3RhdHVzID8gJ0RvbmUnIDogJ1BlbmRpbmcnfSA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZGF0ZVwiPlxuICAgICAgICA8ZGl2PjxzcGFuPkR1ZSBEYXRlPC9zcGFuPiAke3Byb2plY3QuZ2V0RHVlRGF0ZX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImdvLWJ1dHRvblwiPkdvIHRvIHByb2plY3QgPHNwYW4+4p6kPC9zcGFuPjwvYnV0dG9uXG4gICAgICAgIDwvZGl2XG4gICAgICAgIDwvbGk+XG4gICAgICAgIGApKS5qb2luKCcnKTtcbiAgICBpZiAocHMgPT09ICcnKSB7XG4gICAgICBwcyA9ICc8bGk+Tm8gUHJvamVjdHMgYWRkZWQgWWV0ISE8L2xpPic7XG4gICAgfVxuICAgIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3RzLXZpZXdcIj5cbiAgICA8dWw+XG4gICAgJHtwc31cbiAgICA8L3VsPlxuICAgIDwvZGl2PmA7XG4gIH07XG5cbiAgY29uc3QgZmlsbE1haW5WaWV3ID0gKGNvbnRlbnQpID0+IHtcbiAgICBtYWluVmlldygpLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW5WaWV3KCkuaW5uZXJIVE1MID0gY29udGVudDtcbiAgfTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIFwiQWRkIGEgUHJvamVjdFwiIGJ1dHRvblxuICBjb25zdCB1cGRhdGVQcm9qZWN0QWRkTGlzdGVuZXJzID0gKGZ1bmMpID0+IHtcbiAgICBhZGRQcm9qZWN0QnRuKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBmaWxsTWFpblZpZXcocHJvamVjdElucEhUTUwpO1xuICAgICAgcHJvamVjdEJ1dHRvbigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gR2V0IHRoZSB2aWV3IGZvciB0aGUgbmV3IGxpc3Qgb2YgcHJvamVjdHNcbiAgLy8gdXBkYXRlIGxpc3RlbmVycyBmb3IgXCJnbyB0byBwcm9qZWN0XCIgYnV0dG9uXG4gIC8vIHVwZGF0ZSBsaXN0ZW5lcnMgZm9yIFwiSG9tZVwiIGxpbmsgb24gdGhlIGxlZnQgcGFuZWxcbiAgY29uc3QgZ2V0TGlzdFByb2plY3RzVmlldyA9IChwcm9qZWN0cywgdG9kb0NyZWF0ZSwgdXBkYXRlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pID0+IHtcbiAgICBmaWxsTWFpblZpZXcocHJvamVjdFZpZXdIVE1MKHByb2plY3RzKSk7XG4gICAgdmlld1Byb2plY3RCdG5zKCkuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGdldFByb2plY3RWaWV3KHByb2plY3RzW2ldLCB0b2RvQ3JlYXRlLCB1cGRhdGVQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBob21lQnRuKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnZXRMaXN0UHJvamVjdHNWaWV3KHByb2plY3RzLCB0b2RvQ3JlYXRlLCB1cGRhdGVQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbyk7XG4gICAgfSk7XG4gICAgdXJnZW50QnRuKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB1cmdlbnRQaiA9IHByb2plY3RzLmZpbHRlcigoZSkgPT4gZS5nZXRQcmlvcml0eSA9PT0gJ1JlZCcpO1xuICAgICAgZ2V0TGlzdEZpbHRlcmVkUHJvamVjdCh1cmdlbnRQaiwgdG9kb0NyZWF0ZSwgdXBkYXRlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pO1xuICAgIH0pO1xuICAgIGltcG9ydGFudEJ0bigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW1wb3J0YW50UGogPSBwcm9qZWN0cy5maWx0ZXIoKGUpID0+IGUuZ2V0UHJpb3JpdHkgPT09ICdPcmFuZ2UnKTtcbiAgICAgIGdldExpc3RGaWx0ZXJlZFByb2plY3QoaW1wb3J0YW50UGosIHRvZG9DcmVhdGUsIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbiAgICB9KTtcbiAgICBjbG9zZUJ0bigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY2xvc2VQaiA9IHByb2plY3RzLmZpbHRlcigoZSkgPT4gZS5nZXRQcmlvcml0eSA9PT0gJ0dyZWVuJyk7XG4gICAgICBnZXRMaXN0RmlsdGVyZWRQcm9qZWN0KGNsb3NlUGosIHRvZG9DcmVhdGUsIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbiAgICB9KTtcbiAgICBkZWZhdWx0QnRuKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjbG9zZVBqID0gcHJvamVjdHMuZmlsdGVyKChlKSA9PiBlLmdldENhdGVnb3J5ID09PSAnZGVmYXVsdCcpO1xuICAgICAgZ2V0TGlzdEZpbHRlcmVkUHJvamVjdChjbG9zZVBqLCB0b2RvQ3JlYXRlLCB1cGRhdGVQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TGlzdEZpbHRlcmVkUHJvamVjdCA9IChwcm9qZWN0cywgdG9kb0NyZWF0ZSwgdXBkYXRlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pID0+IHtcbiAgICBmaWxsTWFpblZpZXcocHJvamVjdFZpZXdIVE1MKHByb2plY3RzKSk7XG4gICAgdmlld1Byb2plY3RCdG5zKCkuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGdldFByb2plY3RWaWV3KHByb2plY3RzW2ldLCB0b2RvQ3JlYXRlLCB1cGRhdGVQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBnZXQgdmlldyBmb3IgdGhlIG1vZGlmaWVkIHByb2plY3RcbiAgLy8gdXBkYXRlIGxpc3RlbmVycyBmb3IgdG9kbyBjcmVhdGUgYnV0dG9uXG4gIC8vIHVwZGF0ZSBsaXN0ZW5lcnMgZm9yIHByb2plY3Qgc3RhdHVzIHRvZ2dsZXIgYnV0dG9uXG4gIGNvbnN0IGdldFByb2plY3RWaWV3ID0gKHByb2plY3QsIGFkZFRvZG8sIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKSA9PiB7XG4gICAgZmlsbE1haW5WaWV3KHByb2plY3RIVE1MKHByb2plY3QpKTtcbiAgICB1cGRhdGVQcm9qZWN0TGlzdGVuZXJzKHByb2plY3QsIGFkZFRvZG8sIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVQcm9qZWN0TGlzdGVuZXJzID0gKHByb2plY3QsIGFkZFRvZG8sIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKSA9PiB7XG4gICAgYWRkVG9kb0J0bigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYWRkVG9kbyhwcm9qZWN0KTtcbiAgICB9KTtcbiAgICBwcm9qZWN0U3RhdHVzQnRuKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB1cGRhdGVQcm9qZWN0U3RhdHVzKHByb2plY3QpKTtcbiAgICB0b2RvU3RhdHVzQnRuKCkuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB1cGRhdGVUb2RvU3RhdHVzKHByb2plY3QsIGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRvZG9kZWxldGVCdG5zKCkuZm9yRWFjaCgoQnRuLCBpKSA9PiB7XG4gICAgICBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVRvZG8ocHJvamVjdCwgaSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBlZGl0VG9kb0J0bnMoKS5mb3JFYWNoKChCdG4sIGluZCkgPT4ge1xuICAgICAgQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBlZGl0VG9kbyhwcm9qZWN0LCBpbmQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0SW5wdXQsXG4gICAgdG9kb0lucHV0LFxuICAgIHRvZG9FZGl0SW5wdXQsXG4gICAgdXBkYXRlUHJvamVjdEFkZExpc3RlbmVycyxcbiAgICBnZXRMaXN0UHJvamVjdHNWaWV3LFxuICAgIGdldFByb2plY3RWaWV3LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHtcbiAgRE9NQ29udHJvbGxlciBhc1xuICBkZWZhdWx0LFxufTsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gbmV3IERhdGUoKSwgc3RhdHVzID0gZmFsc2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMudXBkYXRlUHJpb3JpdHkoKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgZ2V0IGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldCBnZXRDYXRlZ29yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yeTtcbiAgfVxuXG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBnZXQgZ2V0VG9kbygpIHtcbiAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgfVxuXG4gIGdldCBnZXRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICB9XG5cbiAgc2V0IHNldFRvZG8obmV3VG9kbykge1xuICAgIHRoaXMudG9kbyA9IG5ld1RvZG87XG4gIH1cblxuICBzZXQgc2V0RHVlRGF0ZShuZXdEYXRlKSB7XG4gICAgaWYgKE1hdGguZmxvb3IobmV3RGF0ZSAtIG5ldyBEYXRlKCkpIDw9IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5kYXRlID0gbmV3RGF0ZTtcbiAgICB0aGlzLnVwZGF0ZVByaW9yaXR5KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXQgc2V0Q2F0ZWdvcnkobmV3Q2F0ZWdvcnkpIHtcbiAgICB0aGlzLmNhdGVnb3J5ID0gbmV3Q2F0ZWdvcnk7XG4gIH1cblxuICBzdGF0aWMgdmFsaWREYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoZGF0ZSAtIG5ldyBEYXRlKCkpIC8gODY0MDAwMDApO1xuICB9XG5cbiAgZ2V0IGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgdXBkYXRlUHJpb3JpdHkoKSB7XG4gICAgY29uc3QgdGltZUxlZnQgPSBQcm9qZWN0LnZhbGlkRGF0ZSh0aGlzLmR1ZURhdGUpO1xuICAgIC8vIGNvbnNvbGUubG9nICh0aW1lTGVmdCk7XG4gICAgaWYgKHRpbWVMZWZ0IDw9IDEpIHtcbiAgICAgIHRoaXMucHJpb3JpdHkgPSAnUmVkJztcbiAgICB9IGVsc2UgaWYgKHRpbWVMZWZ0ID4gMSAmJiB0aW1lTGVmdCA8PSAzKSB7XG4gICAgICB0aGlzLnByaW9yaXR5ID0gJ09yYW5nZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJpb3JpdHkgPSAnR3JlZW4nO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIGlmIChNYXRoLmZsb29yKHRoaXMuZHVlRGF0ZSAtIHRvZG8uZHVlRGF0ZSkgPD0gMCB8fCBNYXRoLmZsb29yKHRvZG8uZHVlRGF0ZSAtIG5ldyBEYXRlKCkpIDw9IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZGVsVG9kbyhpbmRleCkge1xuICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIC8vIENoYW5nZSB0aGUgc3RhdHVzIG9mIHRoZSBwcm9qZWN0XG4gIHVwZGF0ZVN0YXR1cygpIHtcbiAgICB0aGlzLnN0YXR1cyA9ICF0aGlzLnN0YXR1cztcbiAgICAvLyBwcm9wb2dhdGUgdGhlIHN0YXRlIG9mIHRoZSBwcm9qZWN0IG9uIHRoZSByZWxhdGVkIHRvZG9zXG4gICAgaWYgKHRoaXMuc3RhdHVzKSB7XG4gICAgICB0aGlzLnRvZG9zLmZvckVhY2goKHRvZG8pID0+ICh0b2RvLnNldFN0YXR1cyA9IHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiAodG9kby5zZXRTdGF0dXMgPSBmYWxzZSkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSA9IG5ldyBEYXRlKCksIHN0YXR1cyA9IGZhbHNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnVwZGF0ZVByaW9yaXR5KCk7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIH1cblxuICBnZXQgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0IHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG5cbiAgc2V0IHNldER1ZURhdGUobmV3RGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgdGhpcy51cGRhdGVQcmlvcml0eSgpO1xuICB9XG5cbiAgZ2V0IGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gIH1cblxuICBzZXQgc2V0U3RhdHVzKGJvbCkge1xuICAgIHRoaXMuc3RhdHVzID0gYm9sO1xuICB9XG5cblxuICBzdGF0aWMgdmFsaWREYXRlKHRvZG9EYXRlLCBwcm9qZWN0RGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKCh0b2RvRGF0ZSAtIHByb2plY3REYXRlKSAvIDg2NDAwMDAwKTtcbiAgfVxuXG5cbiAgdXBkYXRlUHJpb3JpdHkoKSB7XG4gICAgY29uc3QgdGltZUxlZnQgPSBNYXRoLmZsb29yKCh0aGlzLmR1ZURhdGUgLSBuZXcgRGF0ZSgpKSAvIDg2NDAwMDAwKTtcbiAgICAvLyBjb25zb2xlLmxvZyAodGltZUxlZnQpO1xuICAgIGlmICh0aW1lTGVmdCA8PSAxKSB7XG4gICAgICB0aGlzLnByaW9yaXR5ID0gJ1JlZCc7XG4gICAgfSBlbHNlIGlmICh0aW1lTGVmdCA+IDEgJiYgdGltZUxlZnQgPD0gMykge1xuICAgICAgdGhpcy5wcmlvcml0eSA9ICdPcmFuZ2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByaW9yaXR5ID0gJ0dyZWVuJztcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTdGF0dXMoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF0dXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiXSwic291cmNlUm9vdCI6IiJ9