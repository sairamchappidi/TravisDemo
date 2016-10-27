/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _codetotest = __webpack_require__(1);

	var _codetotest2 = _interopRequireDefault(_codetotest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe("Testing Two Numbers", function () {
	    var a = 4,
	        b = 3;
	    beforeEach(function () {
	        console.log("Setting up ");
	        a = 4, b = 3;
	    });
	    afterEach(function () {
	        console.log("Tearing down ");
	        a = 0, b = 0;
	    });
	    it("Add Numbers", function () {
	        expect(_codetotest2.default.AddTwoNumbers(a, b)).toEqual(7);
	    });
	    it("Multiply Numbers", function () {
	        expect(_codetotest2.default.MultiplyTwoNumbers(a, b)).toEqual(12);
	    });
	    it("Compare Numbers to be Greater Than", function () {
	        expect(a).toBeGreaterThan(b);
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function AddTwoNumbers(a, b) {
	  return a + b; //Function to return addition of two numbers a and b.
	}

	function MultiplyTwoNumbers(a, b) {
	  return a * b; //Function to return product of two numbers a and b.
	}

	exports.default = { AddTwoNumbers: AddTwoNumbers, MultiplyTwoNumbers: MultiplyTwoNumbers };

/***/ }
/******/ ]);