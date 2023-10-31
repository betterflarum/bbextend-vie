/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/TextEditorButton */ "flarum/common/components/TextEditorButton");
/* harmony import */ var flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3__);




flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('defendervex/bbextend', function () {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'toolbarItems', function (items) {
    var _this = this;
    items.add('bbextend-bold', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[b][/b]');
      },
      icon: "fas fa-bold"
    }, "Bold"));
    items.add('bbextend-italic', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[i][/i]');
      },
      icon: "fas fa-italic"
    }, "Italic"));
    items.add('bbextend-underline', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[u][/u]');
      },
      icon: "fas fa-underline"
    }, "Underline"));
    items.add('bbextend-strikethrough', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[s][/s]');
      },
      icon: "fas fa-strikethrough"
    }, "Strikethrough"));
    items.add('bbextend-align-center', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[center][/center]');
      },
      icon: "fas fa-align-center"
    }, "Center"));
    items.add('bbextend-align-right', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[right][/right]');
      },
      icon: "fas fa-align-right"
    }, "Right"));
    items.add('bbextend-align-justify', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[justify][/justify]');
      },
      icon: "fas fa-align-justify"
    }, "Justify"));
    items.add('bbextend-indent', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[indent=20][/indent]');
      },
      icon: "fas fa-indent"
    }, "Indent"));
    items.add('bbextend-size', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[size=24][/size]');
      },
      icon: "fas fa-text-height"
    }, "Size"));
    items.add('bbextend-color', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[color=red][/color]');
      },
      icon: "fas fa-palette"
    }, "Color"));
    items.add('bbextend-code', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[code][/code]');
      },
      icon: "fas fa-code"
    }, "Code"));
    items.add('bbextend-quote', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[quote][/quote]');
      },
      icon: "fas fa-quote-left"
    }, "Quote"));
    items.add('bbextend-hr', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[hr]');
      },
      icon: "fas fa-minus"
    }, "Horizontal Rule"));
    items.add('bbextend-google-doc', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[gdoc][/gdoc]');
      },
      icon: "fas fa-file-word"
    }, "Google Doc"));
    items.add('bbextend-google-sheet', m((flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: function onclick() {
        return _this.attrs.composer.editor.insertAtCursor('[gsheet][/gsheet]');
      },
      icon: "fas fa-file-excel"
    }, "Google Sheet"));
  });
});

/***/ }),

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/components/TextEditorButton":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditorButton']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/TextEditorButton'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map