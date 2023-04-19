/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/formValidator.js":
/*!******************************!*\
  !*** ./src/formValidator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "formValidator": () => (/* binding */ formValidator)
/* harmony export */ });
const zipCodeRegexMap = {
  USA: /^\d{5}(-\d{4})?$/,
  Canada: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
};

const formValidator = {
  validateEmail: email => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  },

  validateZipCode: (country, zipCode) => {
    const regex = zipCodeRegexMap[country];
    if (regex) {
      return regex.test(zipCode);
    }
    return false; // country not found in map
  },

  confirmPassword: (password, passwordConfirm) => {
    if (password === passwordConfirm) {
      return true;
    }
    return false;
  },

  validateForm: (email, country, zipCode, password, passwordConfirm) => {
    const invalidEmail = !formValidator.validateEmail(email);
    const invalidZipCode = !formValidator.validateZipCode(country, zipCode);
    const nonMatchingPassword = !formValidator.confirmPassword(
      password,
      passwordConfirm
    );

    return {
      invalidEmail,
      invalidZipCode,
      nonMatchingPassword,
    };
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidator);


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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formValidator */ "./src/formValidator.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLFlBQVksRUFBRSxLQUFLLEVBQUU7QUFDckI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7O1VDMUM3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS8uL3NyYy9mb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3NpZ251cGZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpZ251cGZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaWdudXBmb3JtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHppcENvZGVSZWdleE1hcCA9IHtcbiAgVVNBOiAvXlxcZHs1fSgtXFxkezR9KT8kLyxcbiAgQ2FuYWRhOiAvXltBLVphLXpdXFxkW0EtWmEtel0gXFxkW0EtWmEtel1cXGQkLyxcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtVmFsaWRhdG9yID0ge1xuICB2YWxpZGF0ZUVtYWlsOiBlbWFpbCA9PiB7XG4gICAgY29uc3QgcmVnZXggPSAvXlxcUytAXFxTK1xcLlxcUyskLztcbiAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XG4gIH0sXG5cbiAgdmFsaWRhdGVaaXBDb2RlOiAoY291bnRyeSwgemlwQ29kZSkgPT4ge1xuICAgIGNvbnN0IHJlZ2V4ID0gemlwQ29kZVJlZ2V4TWFwW2NvdW50cnldO1xuICAgIGlmIChyZWdleCkge1xuICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoemlwQ29kZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTsgLy8gY291bnRyeSBub3QgZm91bmQgaW4gbWFwXG4gIH0sXG5cbiAgY29uZmlybVBhc3N3b3JkOiAocGFzc3dvcmQsIHBhc3N3b3JkQ29uZmlybSkgPT4ge1xuICAgIGlmIChwYXNzd29yZCA9PT0gcGFzc3dvcmRDb25maXJtKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIHZhbGlkYXRlRm9ybTogKGVtYWlsLCBjb3VudHJ5LCB6aXBDb2RlLCBwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtKSA9PiB7XG4gICAgY29uc3QgaW52YWxpZEVtYWlsID0gIWZvcm1WYWxpZGF0b3IudmFsaWRhdGVFbWFpbChlbWFpbCk7XG4gICAgY29uc3QgaW52YWxpZFppcENvZGUgPSAhZm9ybVZhbGlkYXRvci52YWxpZGF0ZVppcENvZGUoY291bnRyeSwgemlwQ29kZSk7XG4gICAgY29uc3Qgbm9uTWF0Y2hpbmdQYXNzd29yZCA9ICFmb3JtVmFsaWRhdG9yLmNvbmZpcm1QYXNzd29yZChcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgcGFzc3dvcmRDb25maXJtXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpbnZhbGlkRW1haWwsXG4gICAgICBpbnZhbGlkWmlwQ29kZSxcbiAgICAgIG5vbk1hdGNoaW5nUGFzc3dvcmQsXG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1WYWxpZGF0b3I7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBmb3JtVmFsaWRhdG9yIGZyb20gJy4vZm9ybVZhbGlkYXRvcic7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=