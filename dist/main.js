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
exports.push([module.i, "@media screen and (max-width: 768px) {\n  body {\n    font-size: 10px; } }\n\n@media screen and (min-width: 769px) {\n  body {\n    font-size: 12px; } }\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: linear-gradient(to right bottom, #51dacf, #651086);\n  height: 100vh; }\n\n.appContainer {\n  height: 80vh;\n  width: 80vw;\n  border-radius: 40px;\n  -webkit-box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.75);\n  box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.75);\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 100px auto;\n  grid-template-areas: \"top top\" \"left main\"; }\n\n.addition {\n  grid-area: top;\n  display: flex;\n  align-items: center;\n  padding: 1rem; }\n  .addition button {\n    padding: .5rem;\n    font-size: 1rem;\n    display: flex;\n    align-items: center;\n    border-radius: 10px;\n    box-shadow: 0px 0px 5px 1px; }\n    .addition button span {\n      font-size: 1.5rem;\n      margin-right: .5rem; }\n\n.lateral-tab {\n  grid-area: left;\n  background-image: linear-gradient(to bottom, #eae9e9, #d4d7dd);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0 0 0 40px; }\n  .lateral-tab ul {\n    border-right: 6px solid #222222;\n    height: 100%;\n    width: 95%; }\n    .lateral-tab ul li {\n      width: 80%;\n      margin-top: 1rem;\n      font-size: 1.5rem;\n      padding: 1rem;\n      display: flex;\n      justify-content: space-between;\n      border-radius: 8px;\n      cursor: pointer; }\n\n.red {\n  background-image: linear-gradient(to left, #ff4646, #af0404); }\n\n.orange {\n  background-image: linear-gradient(to left, #ffb45e, #d04925); }\n\n.green {\n  background-image: linear-gradient(to left, #1fab89, #2e4137); }\n\n.main-view {\n  grid-area: main;\n  border-radius: 0 0 40px 0;\n  background-image: linear-gradient(to bottom, #eae9e9, #d4d7dd);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .main-view__green {\n    background-image: linear-gradient(to left, #1fab89, #2e4137); }\n  .main-view__orange {\n    background-image: linear-gradient(to left, #ffb45e, #d04925); }\n  .main-view__red {\n    background-image: linear-gradient(to left, #ff4646, #af0404); }\n\n.projects-view {\n  height: 100%;\n  overflow-y: scroll;\n  border-radius: 0 0 40px 0; }\n  .projects-view ul {\n    max-height: 60vh;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 0 0 40px 0; }\n    .projects-view ul li {\n      width: 80%;\n      margin-top: 1rem;\n      font-size: 1.5rem;\n      padding: 1rem;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      border-radius: 8px;\n      background-color: orangered; }\n      .projects-view ul li > div {\n        font-size: 1.2rem;\n        color: #9fe914;\n        font-weight: bold; }\n      .projects-view ul li .project-info > div {\n        display: flex;\n        align-items: center; }\n      .projects-view ul li .action-date {\n        display: flex;\n        flex-direction: column;\n        align-items: center; }\n        .projects-view ul li .action-date > div {\n          display: flex;\n          align-items: center; }\n        .projects-view ul li .action-date .go-button {\n          padding: .2rem;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          border-radius: 8px;\n          margin-top: 10px; }\n          .projects-view ul li .action-date .go-button span {\n            font-size: 1.5rem;\n            color: blueviolet; }\n      .projects-view ul li span {\n        font-size: 1rem;\n        color: #d4d7dd;\n        font-weight: 600;\n        margin-right: .5rem; }\n\n.project {\n  background-color: orangered;\n  width: 80%;\n  padding: .5rem;\n  border-radius: 10px; }\n  .project__info {\n    display: flex;\n    align-items: center;\n    padding: .5rem; }\n    .project__info > :first-child {\n      padding: 1rem; }\n    .project__info h1 {\n      display: inline;\n      font-size: 2.5rem;\n      font-weight: bold; }\n    .project__info h2 {\n      font-size: 1.5rem;\n      margin-top: .7rem; }\n    .project__info p {\n      margin-top: .6rem;\n      font-size: 1.1rem; }\n    .project__info button {\n      margin-top: .6rem;\n      padding: .3rem;\n      font-size: .9rem;\n      border-radius: 8px; }\n      .project__info button span {\n        font-size: 1rem;\n        font-weight: bolder;\n        color: green; }\n  .project__todo {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: .3rem;\n    margin-bottom: .3rem; }\n    .project__todo ul {\n      border: 1px solid;\n      width: 80%;\n      max-height: 5rem;\n      overflow-y: scroll; }\n      .project__todo ul li {\n        padding: .5rem;\n        display: flex;\n        align-items: stretch;\n        flex-wrap: wrap;\n        position: relative; }\n        .project__todo ul li > div {\n          margin: auto 0; }\n          .project__todo ul li > div span {\n            font-size: 1rem;\n            font-weight: 600; }\n        .project__todo ul li .right {\n          width: 70%;\n          margin-bottom: .5rem; }\n        .project__todo ul li .left {\n          width: 25%;\n          height: 4rem;\n          display: flex;\n          flex-direction: column;\n          justify-content: space-between;\n          align-items: center; }\n        .project__todo ul li .left > span {\n          color: #d4d7dd;\n          margin-right: 1rem; }\n        .project__todo ul li .close-btn {\n          position: absolute;\n          right: 0;\n          top: 0;\n          border-radius: 50%;\n          margin: .3rem;\n          padding: .3rem;\n          background-image: linear-gradient(to bottom, #eae9e9, #d4d7dd);\n          cursor: pointer; }\n        .project__todo ul li .done-todo {\n          position: relative;\n          top: 10px; }\n          .project__todo ul li .done-todo > span {\n            font-size: 1rem;\n            font-weight: bolder;\n            color: green; }\n  .project__creator {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    .project__creator h1 {\n      font-size: 2.2rem;\n      font-weight: bold;\n      margin-bottom: 1.2rem; }\n    .project__creator input {\n      height: 1.9rem;\n      margin-bottom: 1.2rem; }\n    .project__creator button {\n      padding: 1rem;\n      border-radius: 10px;\n      background-color: whitesmoke; }\n\n#add-todo {\n  display: none; }\n\n.add-label {\n  padding: .3rem;\n  background: #ffb45e;\n  margin-top: .3rem; }\n\n#add-todo:checked ~ .todo__creator {\n  display: none; }\n\n.todo__creator {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: .5rem; }\n  .todo__creator h1 {\n    font-size: 2.2rem;\n    font-weight: bold; }\n  .todo__creator input {\n    height: 1.9rem; }\n  .todo__creator button {\n    padding: .5rem;\n    border-radius: 10px;\n    background-color: whitesmoke; }\n\n.hide {\n  display: none; }\n\n.inner-edit {\n  display: none; }\n  .inner-edit input {\n    width: 6rem; }\n\n#expand-toggle0 {\n  display: none; }\n\n#expand-btn0 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle0:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle1 {\n  display: none; }\n\n#expand-btn1 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle1:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle2 {\n  display: none; }\n\n#expand-btn2 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle2:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle3 {\n  display: none; }\n\n#expand-btn3 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle3:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle4 {\n  display: none; }\n\n#expand-btn4 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle4:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle5 {\n  display: none; }\n\n#expand-btn5 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle5:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle6 {\n  display: none; }\n\n#expand-btn6 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle6:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle7 {\n  display: none; }\n\n#expand-btn7 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle7:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle8 {\n  display: none; }\n\n#expand-btn8 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle8:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle9 {\n  display: none; }\n\n#expand-btn9 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle9:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle10 {\n  display: none; }\n\n#expand-btn10 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle10:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle11 {\n  display: none; }\n\n#expand-btn11 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle11:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle12 {\n  display: none; }\n\n#expand-btn12 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle12:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle13 {\n  display: none; }\n\n#expand-btn13 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle13:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle14 {\n  display: none; }\n\n#expand-btn14 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle14:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle15 {\n  display: none; }\n\n#expand-btn15 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle15:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle16 {\n  display: none; }\n\n#expand-btn16 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle16:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle17 {\n  display: none; }\n\n#expand-btn17 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle17:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle18 {\n  display: none; }\n\n#expand-btn18 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle18:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle19 {\n  display: none; }\n\n#expand-btn19 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle19:checked ~ .inner-edit {\n  display: flex; }\n\n#expand-toggle20 {\n  display: none; }\n\n#expand-btn20 {\n  display: inline-block;\n  padding: 5px 11px;\n  background-color: #ff7;\n  border: 1px solid;\n  border-radius: 3px;\n  position: absolute;\n  right: 53px;\n  top: 60px; }\n\n#expand-toggle20:checked ~ .inner-edit {\n  display: flex; }\n\n.Green {\n  background-image: linear-gradient(to left, #1fab89, #2e4137); }\n\n.Orange {\n  background-image: linear-gradient(to left, #ffb45e, #d04925); }\n\n.Red {\n  background-image: linear-gradient(to left, #ff4646, #af0404); }\n", ""]);


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

  if ([proName, proCategory, proDescription].some((e) => e.length === 0 || e.match(/^\s+$/))) {
    alert('Empty Form');
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
  if ([toName, toDescription].some((e) => e.length === 0 || e.match(/^\s+$/))) {
    alert('Empty Form');
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
  if (_modules_Todo__WEBPACK_IMPORTED_MODULE_2__["default"].validDate(toDate, project.getDueDate) >= 0 || _modules_Todo__WEBPACK_IMPORTED_MODULE_2__["default"].validDate(toDate, new Date()) < 0) {
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
        <input type="date" name="date" value="${item.getDueDate.getFullYear()}-${(`0${(item.getDueDate.getMonth() + 1)}`).slice(-2)}-${item.getDueDate.getDate()}">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzPzFlMmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1RvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RB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QUFFLHFCQUFxQixrQkFBa0IsRUFBRSxrQkFBa0IsMEJBQTBCLHNCQUFzQiwyQkFBMkIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGNBQWMsRUFBRSwyQ0FBMkMsa0JBQWtCLEVBQUUscUJBQXFCLGtCQUFrQixFQUFFLGtCQUFrQiwwQkFBMEIsc0JBQXNCLDJCQUEyQixzQkFBc0IsdUJBQXVCLHVCQUF1QixnQkFBZ0IsY0FBYyxFQUFFLDJDQUEyQyxrQkFBa0IsRUFBRSxxQkFBcUIsa0JBQWtCLEVBQUUsa0JBQWtCLDBCQUEwQixzQkFBc0IsMkJBQTJCLHNCQUFzQix1QkFBdUIsdUJBQXVCLGdCQUFnQixjQUFjLEVBQUUsMkNBQTJDLGtCQUFrQixFQUFFLHFCQUFxQixrQkFBa0IsRUFBRSxrQkFBa0IsMEJBQTBCLHNCQUFzQiwyQkFBMkIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGNBQWMsRUFBRSwyQ0FBMkMsa0JBQWtCLEVBQUUscUJBQXFCLGtCQUFrQixFQUFFLGtCQUFrQiwwQkFBMEIsc0JBQXNCLDJCQUEyQixzQkFBc0IsdUJBQXVCLHVCQUF1QixnQkFBZ0IsY0FBYyxFQUFFLDJDQUEyQyxrQkFBa0IsRUFBRSxzQkFBc0Isa0JBQWtCLEVBQUUsbUJBQW1CLDBCQUEwQixzQkFBc0IsMkJBQTJCLHNCQUFzQix1QkFBdUIsdUJBQXVCLGdCQUFnQixjQUFjLEVBQUUsNENBQTRDLGtCQUFrQixFQUFFLHNCQUFzQixrQkFBa0IsRUFBRSxtQkFBbUIsMEJBQTBCLHNCQUFzQiwyQkFBMkIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGNBQWMsRUFBRSw0Q0FBNEMsa0JBQWtCLEVBQUUsc0JBQXNCLGtCQUFrQixFQUFFLG1CQUFtQiwwQkFBMEIsc0JBQXNCLDJCQUEyQixzQkFBc0IsdUJBQXVCLHVCQUF1QixnQkFBZ0IsY0FBYyxFQUFFLDRDQUE0QyxrQkFBa0IsRUFBRSxzQkFBc0Isa0JBQWtCLEVBQUUsbUJBQW1CLDBCQUEwQixzQkFBc0IsMkJBQTJCLHNCQUFzQix1QkFBdUIsdUJB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QSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3JORDtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxzRUFBTyxFOzs7Ozs7Ozs7Ozs7QUM5RnRCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIiksIFwiXCIpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDEycHg7IH0gfVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICM1MWRhY2YsICM2NTEwODYpO1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcblxcbi5hcHBDb250YWluZXIge1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgd2lkdGg6IDgwdnc7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDMwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMzBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwidG9wIHRvcFxcXCIgXFxcImxlZnQgbWFpblxcXCI7IH1cXG5cXG4uYWRkaXRpb24ge1xcbiAgZ3JpZC1hcmVhOiB0b3A7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07IH1cXG4gIC5hZGRpdGlvbiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHg7IH1cXG4gICAgLmFkZGl0aW9uIGJ1dHRvbiBzcGFuIHtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtOyB9XFxuXFxuLmxhdGVyYWwtdGFiIHtcXG4gIGdyaWQtYXJlYTogbGVmdDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlYWU5ZTksICNkNGQ3ZGQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0MHB4OyB9XFxuICAubGF0ZXJhbC10YWIgdWwge1xcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCAjMjIyMjIyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA5NSU7IH1cXG4gICAgLmxhdGVyYWwtdGFiIHVsIGxpIHtcXG4gICAgICB3aWR0aDogODAlO1xcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmNDY0NiwgI2FmMDQwNCk7IH1cXG5cXG4ub3JhbmdlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmZiNDVlLCAjZDA0OTI1KTsgfVxcblxcbi5ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzFmYWI4OSwgIzJlNDEzNyk7IH1cXG5cXG4ubWFpbi12aWV3IHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0MHB4IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWFlOWU5LCAjZDRkN2RkKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5tYWluLXZpZXdfX2dyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxZmFiODksICMyZTQxMzcpOyB9XFxuICAubWFpbi12aWV3X19vcmFuZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmYjQ1ZSwgI2QwNDkyNSk7IH1cXG4gIC5tYWluLXZpZXdfX3JlZCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmY0NjQ2LCAjYWYwNDA0KTsgfVxcblxcbi5wcm9qZWN0cy12aWV3IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0MHB4IDA7IH1cXG4gIC5wcm9qZWN0cy12aWV3IHVsIHtcXG4gICAgbWF4LWhlaWdodDogNjB2aDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDQwcHggMDsgfVxcbiAgICAucHJvamVjdHMtdmlldyB1bCBsaSB7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkOyB9XFxuICAgICAgLnByb2plY3RzLXZpZXcgdWwgbGkgPiBkaXYge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICBjb2xvcjogIzlmZTkxNDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgICAgLnByb2plY3RzLXZpZXcgdWwgbGkgLnByb2plY3QtaW5mbyA+IGRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgIC5wcm9qZWN0cy12aWV3IHVsIGxpIC5hY3Rpb24tZGF0ZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgIC5wcm9qZWN0cy12aWV3IHVsIGxpIC5hY3Rpb24tZGF0ZSA+IGRpdiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgIC5wcm9qZWN0cy12aWV3IHVsIGxpIC5hY3Rpb24tZGF0ZSAuZ28tYnV0dG9uIHtcXG4gICAgICAgICAgcGFkZGluZzogLjJyZW07XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gICAgICAgICAgLnByb2plY3RzLXZpZXcgdWwgbGkgLmFjdGlvbi1kYXRlIC5nby1idXR0b24gc3BhbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgY29sb3I6IGJsdWV2aW9sZXQ7IH1cXG4gICAgICAucHJvamVjdHMtdmlldyB1bCBsaSBzcGFuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGNvbG9yOiAjZDRkN2RkO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07IH1cXG5cXG4ucHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XFxuICAucHJvamVjdF9faW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtOyB9XFxuICAgIC5wcm9qZWN0X19pbmZvID4gOmZpcnN0LWNoaWxkIHtcXG4gICAgICBwYWRkaW5nOiAxcmVtOyB9XFxuICAgIC5wcm9qZWN0X19pbmZvIGgxIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLnByb2plY3RfX2luZm8gaDIge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIG1hcmdpbi10b3A6IC43cmVtOyB9XFxuICAgIC5wcm9qZWN0X19pbmZvIHAge1xcbiAgICAgIG1hcmdpbi10b3A6IC42cmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtOyB9XFxuICAgIC5wcm9qZWN0X19pbmZvIGJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLXRvcDogLjZyZW07XFxuICAgICAgcGFkZGluZzogLjNyZW07XFxuICAgICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7IH1cXG4gICAgICAucHJvamVjdF9faW5mbyBidXR0b24gc3BhbiB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgY29sb3I6IGdyZWVuOyB9XFxuICAucHJvamVjdF9fdG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC4zcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuM3JlbTsgfVxcbiAgICAucHJvamVjdF9fdG9kbyB1bCB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBtYXgtaGVpZ2h0OiA1cmVtO1xcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcbiAgICAgIC5wcm9qZWN0X190b2RvIHVsIGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgICAucHJvamVjdF9fdG9kbyB1bCBsaSA+IGRpdiB7XFxuICAgICAgICAgIG1hcmdpbjogYXV0byAwOyB9XFxuICAgICAgICAgIC5wcm9qZWN0X190b2RvIHVsIGxpID4gZGl2IHNwYW4ge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyB9XFxuICAgICAgICAucHJvamVjdF9fdG9kbyB1bCBsaSAucmlnaHQge1xcbiAgICAgICAgICB3aWR0aDogNzAlO1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTsgfVxcbiAgICAgICAgLnByb2plY3RfX3RvZG8gdWwgbGkgLmxlZnQge1xcbiAgICAgICAgICB3aWR0aDogMjUlO1xcbiAgICAgICAgICBoZWlnaHQ6IDRyZW07XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgICAgLnByb2plY3RfX3RvZG8gdWwgbGkgLmxlZnQgPiBzcGFuIHtcXG4gICAgICAgICAgY29sb3I6ICNkNGQ3ZGQ7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTsgfVxcbiAgICAgICAgLnByb2plY3RfX3RvZG8gdWwgbGkgLmNsb3NlLWJ0biB7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICBtYXJnaW46IC4zcmVtO1xcbiAgICAgICAgICBwYWRkaW5nOiAuM3JlbTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VhZTllOSwgI2Q0ZDdkZCk7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgLnByb2plY3RfX3RvZG8gdWwgbGkgLmRvbmUtdG9kbyB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgdG9wOiAxMHB4OyB9XFxuICAgICAgICAgIC5wcm9qZWN0X190b2RvIHVsIGxpIC5kb25lLXRvZG8gPiBzcGFuIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47IH1cXG4gIC5wcm9qZWN0X19jcmVhdG9yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAucHJvamVjdF9fY3JlYXRvciBoMSB7XFxuICAgICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtOyB9XFxuICAgIC5wcm9qZWN0X19jcmVhdG9yIGlucHV0IHtcXG4gICAgICBoZWlnaHQ6IDEuOXJlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07IH1cXG4gICAgLnByb2plY3RfX2NyZWF0b3IgYnV0dG9uIHtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTsgfVxcblxcbiNhZGQtdG9kbyB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmFkZC1sYWJlbCB7XFxuICBwYWRkaW5nOiAuM3JlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmI0NWU7XFxuICBtYXJnaW4tdG9wOiAuM3JlbTsgfVxcblxcbiNhZGQtdG9kbzpjaGVja2VkIH4gLnRvZG9fX2NyZWF0b3Ige1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi50b2RvX19jcmVhdG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogLjVyZW07IH1cXG4gIC50b2RvX19jcmVhdG9yIGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAudG9kb19fY3JlYXRvciBpbnB1dCB7XFxuICAgIGhlaWdodDogMS45cmVtOyB9XFxuICAudG9kb19fY3JlYXRvciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTsgfVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuICAuaW5uZXItZWRpdCBpbnB1dCB7XFxuICAgIHdpZHRoOiA2cmVtOyB9XFxuXFxuI2V4cGFuZC10b2dnbGUwIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjAge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNjBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMDpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4xIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDYwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTE6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA2MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUyOmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUzIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNjBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMzpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlNCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG40IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDYwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTQ6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuNSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA2MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGU1OmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGU2IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjYge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNjBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlNjpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlNyB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG43IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDYwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTc6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTgge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuOCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA2MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGU4OmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGU5IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNjBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlOTpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTAge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMTAge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNjBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTA6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTExIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjExIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDYwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTExOmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxMiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4xMiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA2MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxMjpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTMge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMTMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNjBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTM6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTE0IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjE0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDYwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTE0OmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxNSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4xNSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA2MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxNTpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTYge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMTYge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNjBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTY6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTE3IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjE3IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDYwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTE3OmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxOCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI2V4cGFuZC1idG4xOCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1M3B4O1xcbiAgdG9wOiA2MHB4OyB9XFxuXFxuI2V4cGFuZC10b2dnbGUxODpjaGVja2VkIH4gLmlubmVyLWVkaXQge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTkge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNleHBhbmQtYnRuMTkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTNweDtcXG4gIHRvcDogNjBweDsgfVxcblxcbiNleHBhbmQtdG9nZ2xlMTk6Y2hlY2tlZCB+IC5pbm5lci1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTIwIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jZXhwYW5kLWJ0bjIwIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUzcHg7XFxuICB0b3A6IDYwcHg7IH1cXG5cXG4jZXhwYW5kLXRvZ2dsZTIwOmNoZWNrZWQgfiAuaW5uZXItZWRpdCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLkdyZWVuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMWZhYjg5LCAjMmU0MTM3KTsgfVxcblxcbi5PcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmZmI0NWUsICNkMDQ5MjUpOyB9XFxuXFxuLlJlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmNDY0NiwgI2FmMDQwNCk7IH1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9tb2R1bGVzL1Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9tb2R1bGVzL1RvZG8nO1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSAnLi9tb2R1bGVzL0RPTUNvbnRyb2xsZXInO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpLm1hcCgocHJvaikgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qLm5hbWUsIHByb2ouY2F0ZWdvcnksIHByb2ouZGVzY3JpcHRpb24sIG5ldyBEYXRlKERhdGUucGFyc2UocHJvai5kdWVEYXRlKSksIHByb2ouc3RhdHVzKTtcbiAgICBwcm9qLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHRvZCA9IG5ldyBUb2RvKHRvZG8ubmFtZSwgdG9kby5kZXNjcmlwdGlvbiwgbmV3IERhdGUoRGF0ZS5wYXJzZSh0b2RvLmR1ZURhdGUpKSwgdG9kby5zdGF0dXMpO1xuICAgICAgcHJvamVjdC5hZGRUb2RvKHRvZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH0pO1xufVxuXG5jb25zdCBwcm9qZWN0Q3JlYXRlID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZTogcHJvTmFtZSxcbiAgICBjYXRlZ29yeTogcHJvQ2F0ZWdvcnksXG4gICAgZGVzY3JpcHRpb246IHByb0Rlc2NyaXB0aW9uLFxuICAgIGRhdGU6IHByb0RhdGUsXG4gIH0gPSBET01Db250cm9sbGVyLnByb2plY3RJbnB1dCgpO1xuICBpZiAoUHJvamVjdC52YWxpZERhdGUocHJvRGF0ZSkgPD0gMCkge1xuICAgIGFsZXJ0KCdJbnZhbGlkIGRhdGUnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoW3Byb05hbWUsIHByb0NhdGVnb3J5LCBwcm9EZXNjcmlwdGlvbl0uc29tZSgoZSkgPT4gZS5sZW5ndGggPT09IDAgfHwgZS5tYXRjaCgvXlxccyskLykpKSB7XG4gICAgYWxlcnQoJ0VtcHR5IEZvcm0nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBwcm8gPSBuZXcgUHJvamVjdChwcm9OYW1lLCBwcm9DYXRlZ29yeS5sZW5ndGggPT09IDAgPyAnZGVmYXVsdCcgOiBwcm9DYXRlZ29yeSwgcHJvRGVzY3JpcHRpb24sIHByb0RhdGUpO1xuICBwcm9qZWN0cy5wdXNoKHBybyk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblxuICBET01Db250cm9sbGVyLmdldExpc3RQcm9qZWN0c1ZpZXcocHJvamVjdHMsIHRvZG9DcmVhdGUsIGNoYW5nZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8pO1xufTtcblxuY29uc3QgdG9kb0NyZWF0ZSA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBuYW1lOiB0b05hbWUsXG4gICAgZGVzY3JpcHRpb246IHRvRGVzY3JpcHRpb24sXG4gICAgZGF0ZTogdG9EYXRlLFxuICB9ID0gRE9NQ29udHJvbGxlci50b2RvSW5wdXQoKTtcbiAgaWYgKHRvTmFtZSA9PT0gJycgfHwgdG9EZXNjcmlwdGlvbiA9PT0gJycgfHwgdG9EYXRlLnRvRGF0ZVN0cmluZygpID09PSAnSW52YWxpZCBEYXRlJykgcmV0dXJuO1xuICBpZiAoVG9kby52YWxpZERhdGUodG9EYXRlLCBwcm9qZWN0LmdldER1ZURhdGUpID49IDApIHtcbiAgICBhbGVydCgnaW52YWxpZCBkYXRlJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChbdG9OYW1lLCB0b0Rlc2NyaXB0aW9uXS5zb21lKChlKSA9PiBlLmxlbmd0aCA9PT0gMCB8fCBlLm1hdGNoKC9eXFxzKyQvKSkpIHtcbiAgICBhbGVydCgnRW1wdHkgRm9ybScpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0b2QgPSBuZXcgVG9kbyh0b05hbWUsIHRvRGVzY3JpcHRpb24sIHRvRGF0ZSk7XG4gIHByb2plY3QuYWRkVG9kbyh0b2QpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICBET01Db250cm9sbGVyLmdldFByb2plY3RWaWV3KHByb2plY3QsIHRvZG9DcmVhdGUsIGNoYW5nZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbn07XG5cbmNvbnN0IGNoYW5nZVByb2plY3RTdGF0dXMgPSAocHJvamVjdCkgPT4ge1xuICBwcm9qZWN0LnVwZGF0ZVN0YXR1cygpO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIERPTUNvbnRyb2xsZXIuZ2V0UHJvamVjdFZpZXcocHJvamVjdCwgdG9kb0NyZWF0ZSwgY2hhbmdlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pO1xufTtcblxuY29uc3QgdXBkYXRlVG9kb1N0YXR1cyA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICBwcm9qZWN0LmdldFRvZG9baW5kZXhdLnVwZGF0ZVN0YXR1cygpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICBET01Db250cm9sbGVyLmdldFByb2plY3RWaWV3KHByb2plY3QsIHRvZG9DcmVhdGUsIGNoYW5nZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRvZG8gPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgcHJvamVjdC5kZWxUb2RvKGluZGV4KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgRE9NQ29udHJvbGxlci5nZXRQcm9qZWN0Vmlldyhwcm9qZWN0LCB0b2RvQ3JlYXRlLCBjaGFuZ2VQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbyk7XG59O1xuXG5jb25zdCBlZGl0VG9kbyA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB0b0RhdGUsXG4gIH0gPSBET01Db250cm9sbGVyLnRvZG9FZGl0SW5wdXQoaW5kZXgpO1xuICBpZiAobmFtZSA9PT0gJycgfHwgZGVzY3JpcHRpb24gPT09ICcnIHx8IHRvRGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gJ0ludmFsaWQgRGF0ZScpIHJldHVybjtcbiAgaWYgKFRvZG8udmFsaWREYXRlKHRvRGF0ZSwgcHJvamVjdC5nZXREdWVEYXRlKSA+PSAwIHx8IFRvZG8udmFsaWREYXRlKHRvRGF0ZSwgbmV3IERhdGUoKSkgPCAwKSB7XG4gICAgYWxlcnQoJ2ludmFsaWQgZGF0ZScpO1xuICAgIHJldHVybjtcbiAgfVxuICBwcm9qZWN0LmdldFRvZG9baW5kZXhdLnNldE5hbWUgPSBuYW1lO1xuICBwcm9qZWN0LmdldFRvZG9baW5kZXhdLnNldERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHByb2plY3QuZ2V0VG9kb1tpbmRleF0uc2V0RHVlRGF0ZSA9IHRvRGF0ZTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgRE9NQ29udHJvbGxlci5nZXRQcm9qZWN0Vmlldyhwcm9qZWN0LCB0b2RvQ3JlYXRlLCBjaGFuZ2VQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbyk7XG59O1xuXG5ET01Db250cm9sbGVyLmdldExpc3RQcm9qZWN0c1ZpZXcocHJvamVjdHMsIHRvZG9DcmVhdGUsIGNoYW5nZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcblxuRE9NQ29udHJvbGxlci51cGRhdGVQcm9qZWN0QWRkTGlzdGVuZXJzKHByb2plY3RDcmVhdGUpOyIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImNvbnN0IERPTUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBtYWluVmlldyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXZpZXcnKTtcbiAgY29uc3QgcHJvamVjdEJ1dHRvbiA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdG9yLWJ1dHRvbicpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZF9wcm9qZWN0Jyk7XG4gIGNvbnN0IHZpZXdQcm9qZWN0QnRucyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nby1idXR0b24nKTtcbiAgY29uc3QgYWRkVG9kb0J0biA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpO1xuICBjb25zdCBob21lQnRuID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saW5rJyk7XG4gIGNvbnN0IHByb2plY3RTdGF0dXNCdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9uZS1wcm9qZWN0Jyk7XG4gIGNvbnN0IHRvZG9TdGF0dXNCdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9uZS10b2RvJyk7XG4gIGNvbnN0IHRvZG9kZWxldGVCdG5zID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ0bicpO1xuICBjb25zdCBlZGl0VG9kb0J0bnMgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10b2RvJyk7XG4gIGNvbnN0IGlubmVyRWRpdGRpdnMgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5uZXItZWRpdCcpO1xuICBjb25zdCB1cmdlbnRCdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXVyZ2VudCcpO1xuICBjb25zdCBpbXBvcnRhbnRCdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWltcG9ydGFudCcpO1xuICBjb25zdCBjbG9zZUJ0biA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtY2xvc2UnKTtcbiAgY29uc3QgZGVmYXVsdEJ0biA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtZGVmYXVsdCcpO1xuXG4gIGNvbnN0IHRvZG9FZGl0SW5wdXQgPSAoaW5kZXgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogaW5uZXJFZGl0ZGl2cygpW2luZGV4XS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIm5hbWVcIl0nKS52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBpbm5lckVkaXRkaXZzKClbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZSxcbiAgICAgIHRvRGF0ZTogbmV3IERhdGUoaW5uZXJFZGl0ZGl2cygpW2luZGV4XS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRhdGVcIl0nKS52YWx1ZSksXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSAoKSA9PiAoe1xuICAgIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19uYW1lJykudmFsdWUsXG4gICAgY2F0ZWdvcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19jYXRlZ29yeScpLnZhbHVlLFxuICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fZGVzY3JpcHRpb24nKS52YWx1ZSxcbiAgICBkYXRlOiBuZXcgRGF0ZShgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fZGF0ZScpLnZhbHVlfWApLFxuICB9KTtcblxuICBjb25zdCB0b2RvSW5wdXQgPSAoKSA9PiAoe1xuICAgIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19uYW1lJykudmFsdWUsXG4gICAgZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19kZXNjcmlwdGlvbicpLnZhbHVlLFxuICAgIGRhdGU6IG5ldyBEYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19kYXRlJykudmFsdWUpLFxuICB9KTtcblxuICBjb25zdCBwcm9qZWN0SW5wSFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X19jcmVhdG9yXCI+XG4gICAgICA8aDE+Q3JlYXRlIGEgUHJvamVjdDwvaDE+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBjbGFzcz1cInByb2plY3RfX25hbWVcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiY2F0ZWdvcnlcIiBjbGFzcz1cInByb2plY3RfX2NhdGVnb3J5XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCIgY2xhc3M9XCJwcm9qZWN0X19kZXNjcmlwdGlvblwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJwcm9qZWN0X19kYXRlXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY3JlYXRvci1idXR0b25cIj5DcmVhdGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PmA7XG5cbiAgY29uc3QgcHJvamVjdEhUTUwgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHN0YXR1c0J0biA9IHByb2plY3QuZ2V0U3RhdHVzID8gJzxidXR0b24gY2xhc3M9XCJkb25lLXByb2plY3RcIj4gRG9uZSA8c3Bhbj7imJE8L3NwYW4+PC9idXR0b24+JyA6ICc8YnV0dG9uIGNsYXNzPVwiZG9uZS1wcm9qZWN0XCI+IFBlbmRpbmcgPHNwYW4+4o27PC9zcGFuPjwvYnV0dG9uPic7XG4gICAgbGV0IHRvZG9zSHRtbCA9IHByb2plY3QuZ2V0VG9kb1xuICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdHVzQnRuID0gaXRlbS5nZXRTdGF0dXMgPyAnPGJ1dHRvbiBjbGFzcz1cImRvbmUtdG9kb1wiPiBEb25lIDxzcGFuPuKYkTwvc3Bhbj48L2J1dHRvbj4nIDogJzxidXR0b24gY2xhc3M9XCJkb25lLXRvZG9cIj4gUGVuZGluZyA8c3Bhbj7ijbs8L3NwYW4+PC9idXR0b24+JztcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGxpIGNsYXNzPVwiJHtpdGVtLnByaW9yaXR5fVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cbiAgICAgICAgPHNwYW4+JHtpdGVtLmdldE5hbWV9PC9zcGFuPiA8YnI+XG4gICAgICAgIDxzcGFuPiR7aXRlbS5nZXREZXNjcmlwdGlvbn08L3NwYW4+IDxicj5cbiAgICAgICAgPHNwYW4+JHtpdGVtLmdldER1ZURhdGV9PC9zcGFuPjxicj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XG4gICAgICAgICR7c3RhdHVzQnRufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1idG5cIj7inYw8L3NwYW4+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImV4cGFuZC10b2dnbGUke2luZGV4fVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1lZGl0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdmFsdWU9XCIke2l0ZW0uZ2V0TmFtZX1cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiIHZhbHVlPVwiJHtpdGVtLmdldERlc2NyaXB0aW9ufVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIHZhbHVlPVwiJHtpdGVtLmdldER1ZURhdGUuZ2V0RnVsbFllYXIoKX0tJHsoYDAkeyhpdGVtLmdldER1ZURhdGUuZ2V0TW9udGgoKSArIDEpfWApLnNsaWNlKC0yKX0tJHtpdGVtLmdldER1ZURhdGUuZ2V0RGF0ZSgpfVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC10b2RvXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImV4cGFuZC10b2dnbGUke2luZGV4fVwiIGlkPVwiZXhwYW5kLWJ0biR7aW5kZXh9XCI+IEVkaXQgPC9sYWJlbD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgYDtcbiAgICAgIH0pXG4gICAgICAuam9pbignJyk7XG4gICAgdG9kb3NIdG1sID0gdG9kb3NIdG1sID09PSAnJyA/ICc8bGk+bm8gdG9kbyBhZGRlZCB5ZXQg4pi6PC9saT4nIDogdG9kb3NIdG1sO1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QgJHtwcm9qZWN0LmdldFByaW9yaXR5fVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X19pbmZvXCI+XG4gICAgPGRpdj48aDE+TmFtZTogJHtwcm9qZWN0LmdldE5hbWV9PC9oMT48YnI+XG4gICAgPGgyPiBDYXRlZ29yeTogJHtwcm9qZWN0LmdldENhdGVnb3J5fTwvaDI+XG4gICAgPHA+IERlc2NyaXB0aW9uOiAke3Byb2plY3QuZ2V0RGVzY3JpcHRpb259PC9wPjxicj5cbiAgICA8cD5EdWUgRGF0ZTogJHtwcm9qZWN0LmdldER1ZURhdGV9PC9wPlxuICAgIDwvZGl2PlxuICAgICR7c3RhdHVzQnRufVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X190b2RvXCI+XG4gICAgPHVsPlxuICAgICR7dG9kb3NIdG1sfSBcbiAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxpbnB1dCBpZD1cImFkZC10b2RvXCIgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICA8bGFiZWwgZm9yPVwiYWRkLXRvZG9cIiBjbGFzcz1cImFkZC1sYWJlbFwiPjxzcGFuPuKcmjwvc3Bhbj5BZGQgYSB0b2RvPC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzPVwidG9kb19fY3JlYXRvclwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIGNsYXNzPVwidG9kb19fbmFtZVwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cInRvZG9fX2Rlc2NyaXB0aW9uXCI+XG4gICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJ0b2RvX19kYXRlXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImFkZC10b2RvXCI+Q3JlYXRlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgfTtcbiAgY29uc3QgcHJvamVjdFZpZXdIVE1MID0gKHByb2plY3RzKSA9PiB7XG4gICAgbGV0IHBzID0gcHJvamVjdHNcbiAgICAgIC5tYXAoKHByb2plY3QpID0+IChgXG4gICAgICAgIDxsaSBjbGFzcz1cIiR7cHJvamVjdC5wcmlvcml0eX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW5mb1wiPlxuICAgICAgICA8ZGl2PjxzcGFuPk5hbWU6PC9zcGFuPiAke3Byb2plY3QuZ2V0TmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdj48c3Bhbj5jYXRlZ29yeTo8L3NwYW4+ICR7cHJvamVjdC5nZXRDYXRlZ29yeX0gPC9kaXY+XG4gICAgICAgIDxkaXY+PHNwYW4+ZGVzY3JpcHRpb246PC9zcGFuPiAke3Byb2plY3QuZ2V0RGVzY3JpcHRpb259IDwvZGl2PlxuICAgICAgICA8ZGl2PjxzcGFuPlN0YXR1czo8L3NwYW4+ICR7cHJvamVjdC5nZXRTdGF0dXMgPyAnRG9uZScgOiAnUGVuZGluZyd9IDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1kYXRlXCI+XG4gICAgICAgIDxkaXY+PHNwYW4+RHVlIERhdGU8L3NwYW4+ICR7cHJvamVjdC5nZXREdWVEYXRlfTwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZ28tYnV0dG9uXCI+R28gdG8gcHJvamVjdCA8c3Bhbj7inqQ8L3NwYW4+PC9idXR0b25cbiAgICAgICAgPC9kaXZcbiAgICAgICAgPC9saT5cbiAgICAgICAgYCkpLmpvaW4oJycpO1xuICAgIGlmIChwcyA9PT0gJycpIHtcbiAgICAgIHBzID0gJzxsaT5ObyBQcm9qZWN0cyBhZGRlZCBZZXQhITwvbGk+JztcbiAgICB9XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtdmlld1wiPlxuICAgIDx1bD5cbiAgICAke3BzfVxuICAgIDwvdWw+XG4gICAgPC9kaXY+YDtcbiAgfTtcblxuICBjb25zdCBmaWxsTWFpblZpZXcgPSAoY29udGVudCkgPT4ge1xuICAgIG1haW5WaWV3KCkuaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpblZpZXcoKS5pbm5lckhUTUwgPSBjb250ZW50O1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVByb2plY3RBZGRMaXN0ZW5lcnMgPSAoZnVuYykgPT4ge1xuICAgIGFkZFByb2plY3RCdG4oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZpbGxNYWluVmlldyhwcm9qZWN0SW5wSFRNTCk7XG4gICAgICBwcm9qZWN0QnV0dG9uKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRMaXN0UHJvamVjdHNWaWV3ID0gKHByb2plY3RzLCB0b2RvQ3JlYXRlLCB1cGRhdGVQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbykgPT4ge1xuICAgIGZpbGxNYWluVmlldyhwcm9qZWN0Vmlld0hUTUwocHJvamVjdHMpKTtcbiAgICB2aWV3UHJvamVjdEJ0bnMoKS5mb3JFYWNoKChidG4sIGkpID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZ2V0UHJvamVjdFZpZXcocHJvamVjdHNbaV0sIHRvZG9DcmVhdGUsIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGhvbWVCdG4oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdldExpc3RQcm9qZWN0c1ZpZXcocHJvamVjdHMsIHRvZG9DcmVhdGUsIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbiAgICB9KTtcbiAgICB1cmdlbnRCdG4oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHVyZ2VudFBqID0gcHJvamVjdHMuZmlsdGVyKChlKSA9PiBlLmdldFByaW9yaXR5ID09PSAnUmVkJyk7XG4gICAgICBnZXRMaXN0RmlsdGVyZWRQcm9qZWN0KHVyZ2VudFBqLCB0b2RvQ3JlYXRlLCB1cGRhdGVQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbyk7XG4gICAgfSk7XG4gICAgaW1wb3J0YW50QnRuKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbXBvcnRhbnRQaiA9IHByb2plY3RzLmZpbHRlcigoZSkgPT4gZS5nZXRQcmlvcml0eSA9PT0gJ09yYW5nZScpO1xuICAgICAgZ2V0TGlzdEZpbHRlcmVkUHJvamVjdChpbXBvcnRhbnRQaiwgdG9kb0NyZWF0ZSwgdXBkYXRlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pO1xuICAgIH0pO1xuICAgIGNsb3NlQnRuKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjbG9zZVBqID0gcHJvamVjdHMuZmlsdGVyKChlKSA9PiBlLmdldFByaW9yaXR5ID09PSAnR3JlZW4nKTtcbiAgICAgIGdldExpc3RGaWx0ZXJlZFByb2plY3QoY2xvc2VQaiwgdG9kb0NyZWF0ZSwgdXBkYXRlUHJvamVjdFN0YXR1cywgdXBkYXRlVG9kb1N0YXR1cywgZGVsZXRlVG9kbywgZWRpdFRvZG8pO1xuICAgIH0pO1xuICAgIGRlZmF1bHRCdG4oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGNsb3NlUGogPSBwcm9qZWN0cy5maWx0ZXIoKGUpID0+IGUuZ2V0Q2F0ZWdvcnkgPT09ICdkZWZhdWx0Jyk7XG4gICAgICBnZXRMaXN0RmlsdGVyZWRQcm9qZWN0KGNsb3NlUGosIHRvZG9DcmVhdGUsIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRMaXN0RmlsdGVyZWRQcm9qZWN0ID0gKHByb2plY3RzLCB0b2RvQ3JlYXRlLCB1cGRhdGVQcm9qZWN0U3RhdHVzLCB1cGRhdGVUb2RvU3RhdHVzLCBkZWxldGVUb2RvLCBlZGl0VG9kbykgPT4ge1xuICAgIGZpbGxNYWluVmlldyhwcm9qZWN0Vmlld0hUTUwocHJvamVjdHMpKTtcbiAgICB2aWV3UHJvamVjdEJ0bnMoKS5mb3JFYWNoKChidG4sIGkpID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZ2V0UHJvamVjdFZpZXcocHJvamVjdHNbaV0sIHRvZG9DcmVhdGUsIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RWaWV3ID0gKHByb2plY3QsIGFkZFRvZG8sIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKSA9PiB7XG4gICAgZmlsbE1haW5WaWV3KHByb2plY3RIVE1MKHByb2plY3QpKTtcbiAgICB1cGRhdGVQcm9qZWN0TGlzdGVuZXJzKHByb2plY3QsIGFkZFRvZG8sIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVQcm9qZWN0TGlzdGVuZXJzID0gKHByb2plY3QsIGFkZFRvZG8sIHVwZGF0ZVByb2plY3RTdGF0dXMsIHVwZGF0ZVRvZG9TdGF0dXMsIGRlbGV0ZVRvZG8sIGVkaXRUb2RvKSA9PiB7XG4gICAgYWRkVG9kb0J0bigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYWRkVG9kbyhwcm9qZWN0KTtcbiAgICB9KTtcbiAgICBwcm9qZWN0U3RhdHVzQnRuKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB1cGRhdGVQcm9qZWN0U3RhdHVzKHByb2plY3QpKTtcbiAgICB0b2RvU3RhdHVzQnRuKCkuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB1cGRhdGVUb2RvU3RhdHVzKHByb2plY3QsIGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRvZG9kZWxldGVCdG5zKCkuZm9yRWFjaCgoQnRuLCBpKSA9PiB7XG4gICAgICBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVRvZG8ocHJvamVjdCwgaSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBlZGl0VG9kb0J0bnMoKS5mb3JFYWNoKChCdG4sIGluZCkgPT4ge1xuICAgICAgQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBlZGl0VG9kbyhwcm9qZWN0LCBpbmQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0SW5wdXQsXG4gICAgdG9kb0lucHV0LFxuICAgIHRvZG9FZGl0SW5wdXQsXG4gICAgdXBkYXRlUHJvamVjdEFkZExpc3RlbmVycyxcbiAgICBnZXRMaXN0UHJvamVjdHNWaWV3LFxuICAgIGdldFByb2plY3RWaWV3LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHtcbiAgRE9NQ29udHJvbGxlciBhc1xuICBkZWZhdWx0LFxufTsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gbmV3IERhdGUoKSwgc3RhdHVzID0gZmFsc2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMudXBkYXRlUHJpb3JpdHkoKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgZ2V0IGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldCBnZXRDYXRlZ29yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yeTtcbiAgfVxuXG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBnZXQgZ2V0VG9kbygpIHtcbiAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgfVxuXG4gIGdldCBnZXRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICB9XG5cbiAgc2V0IHNldFRvZG8obmV3VG9kbykge1xuICAgIHRoaXMudG9kbyA9IG5ld1RvZG87XG4gIH1cblxuICBzZXQgc2V0RHVlRGF0ZShuZXdEYXRlKSB7XG4gICAgaWYgKE1hdGguZmxvb3IobmV3RGF0ZSAtIG5ldyBEYXRlKCkpIDw9IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5kYXRlID0gbmV3RGF0ZTtcbiAgICB0aGlzLnVwZGF0ZVByaW9yaXR5KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXQgc2V0Q2F0ZWdvcnkobmV3Q2F0ZWdvcnkpIHtcbiAgICB0aGlzLmNhdGVnb3J5ID0gbmV3Q2F0ZWdvcnk7XG4gIH1cblxuICBzdGF0aWMgdmFsaWREYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoZGF0ZSAtIG5ldyBEYXRlKCkpIC8gODY0MDAwMDApO1xuICB9XG5cbiAgZ2V0IGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgdXBkYXRlUHJpb3JpdHkoKSB7XG4gICAgY29uc3QgdGltZUxlZnQgPSBQcm9qZWN0LnZhbGlkRGF0ZSh0aGlzLmR1ZURhdGUpO1xuICAgIC8vIGNvbnNvbGUubG9nICh0aW1lTGVmdCk7XG4gICAgaWYgKHRpbWVMZWZ0IDw9IDEpIHtcbiAgICAgIHRoaXMucHJpb3JpdHkgPSAnUmVkJztcbiAgICB9IGVsc2UgaWYgKHRpbWVMZWZ0ID4gMSAmJiB0aW1lTGVmdCA8PSAzKSB7XG4gICAgICB0aGlzLnByaW9yaXR5ID0gJ09yYW5nZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJpb3JpdHkgPSAnR3JlZW4nO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIGlmIChNYXRoLmZsb29yKHRoaXMuZHVlRGF0ZSAtIHRvZG8uZHVlRGF0ZSkgPD0gMCB8fCBNYXRoLmZsb29yKHRvZG8uZHVlRGF0ZSAtIG5ldyBEYXRlKCkpIDw9IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZGVsVG9kbyhpbmRleCkge1xuICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXR1cygpIHtcbiAgICB0aGlzLnN0YXR1cyA9ICF0aGlzLnN0YXR1cztcbiAgICBpZiAodGhpcy5zdGF0dXMpIHtcbiAgICAgIHRoaXMudG9kb3MuZm9yRWFjaCgodG9kbykgPT4gKHRvZG8uc2V0U3RhdHVzID0gdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZG9zLmZvckVhY2goKHRvZG8pID0+ICh0b2RvLnNldFN0YXR1cyA9IGZhbHNlKSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gbmV3IERhdGUoKSwgc3RhdHVzID0gZmFsc2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMudXBkYXRlUHJpb3JpdHkoKTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgfVxuXG4gIGdldCBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXQgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBzZXQgc2V0RHVlRGF0ZShuZXdEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gbmV3RGF0ZTtcbiAgICB0aGlzLnVwZGF0ZVByaW9yaXR5KCk7XG4gIH1cblxuICBnZXQgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgfVxuXG4gIHNldCBzZXRTdGF0dXMoYm9sKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBib2w7XG4gIH1cblxuICBzdGF0aWMgdmFsaWREYXRlKHRvZG9EYXRlLCBwcm9qZWN0RGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKCh0b2RvRGF0ZSAtIHByb2plY3REYXRlKSAvIDg2NDAwMDAwKTtcbiAgfVxuXG5cbiAgdXBkYXRlUHJpb3JpdHkoKSB7XG4gICAgY29uc3QgdGltZUxlZnQgPSBNYXRoLmZsb29yKCh0aGlzLmR1ZURhdGUgLSBuZXcgRGF0ZSgpKSAvIDg2NDAwMDAwKTtcbiAgICBpZiAodGltZUxlZnQgPD0gMSkge1xuICAgICAgdGhpcy5wcmlvcml0eSA9ICdSZWQnO1xuICAgIH0gZWxzZSBpZiAodGltZUxlZnQgPiAxICYmIHRpbWVMZWZ0IDw9IDMpIHtcbiAgICAgIHRoaXMucHJpb3JpdHkgPSAnT3JhbmdlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcmlvcml0eSA9ICdHcmVlbic7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU3RhdHVzKCkge1xuICAgIHRoaXMuc3RhdHVzID0gIXRoaXMuc3RhdHVzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwic291cmNlUm9vdCI6IiJ9