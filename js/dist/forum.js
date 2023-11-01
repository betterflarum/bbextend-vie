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
/* harmony import */ var flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/PostStream */ "flarum/forum/components/PostStream");
/* harmony import */ var flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_4__);






// Extra style attributes that are added to each line.
// There's a couple things that need manual tweaking.
var extraDocStyles = 'margin-bottom: 0;';
function populateGDocs() {
  var posts = document.getElementsByClassName('Post-body');
  if (posts.length == 0) {
    return;
  }
  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];
    var gdocs = post.getElementsByClassName('bbextend-gdoc');
    for (var j = 0; j < gdocs.length; j++) {
      var gdoc = gdocs[j];
      var url = gdoc.getElementsByTagName('a')[0].getAttribute('href');

      // Remove the class from gdoc so we only try to process it once.
      gdoc.classList.remove('bbextend-gdoc');
      if (!url.startsWith('https://docs.google.com/document/d/')) {
        gdoc.innerHTML = '<i class="fas fa-triangle-exclamation"></i> Invalid Google Doc URL';
        continue;
      }
      gdoc.innerHTML = '<i class="fas fa-ellipsis fa-fade"></i> Loading Google Doc...';

      // remove anything after the last slash of the url.
      url = url.substring(0, url.lastIndexOf('/'));
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url + '/pub', true);
      xhr.responseType = 'document';
      xhr.onload = function () {
        if (this.status == 200) {
          var applyStyle = function applyStyle(element) {
            if (element.childNodes.length > 0) {
              for (var i = 0; i < element.childNodes.length; i++) {
                applyStyle(element.childNodes[i]);
              }
            }
            if (!element.className) {
              return;
            }
            var classes = element.className.split(' ');
            var styleString = '';
            classes.forEach(function (e) {
              styleString += styles['.' + e];
            });
            element.setAttribute('style', styleString + extraDocStyles);

            // Just in case theres anything in Flarum that'll match the class name.
            // This is because we want to follow google doc's style exclusively.
            element.removeAttribute('class');
          };
          var doc = this.responseXML;
          var html = doc.getElementsByTagName('body')[0].innerHTML;
          gdoc.innerHTML = html;

          // We get the part of the html we want and get rid of the rest.
          // Basiclly we just keep the style information and the actual document body.
          var contents = gdoc.childNodes[1];
          while (gdoc.firstChild) {
            gdoc.removeChild(gdoc.firstChild);
          }
          gdoc.appendChild(contents);
          var style = gdoc.childNodes[0].childNodes[0].innerHTML;
          var div = gdoc.childNodes[0].childNodes[1];

          // Pharse the <style> element from the google doc.
          // We're reformatting it into strings that can be put directly in the style tag of the elements.
          var styles = {};
          style.split('}').forEach(function (e) {
            var parts = e.split('{');
            var element = parts[0];
            var style = parts[1];
            if (!style) {
              return;
            }
            styles[element] = style + ";";

            //console.log(element, styles[element]);
          });

          gdoc.childNodes[0].removeChild(gdoc.childNodes[0].childNodes[0]);
          applyStyle(div);

          // We need to manually override the max-width of the document to fill the post container.
          var divStyle = div.getAttribute('style').split(';');
          divStyle.forEach(function (e, i) {
            if (e.includes('max-width')) {
              divStyle[i] = 'max-width: 100%';
            }
          });

          // Fallback to make sure the text is readable, sometimes it doesn't import with a color set.
          div.setAttribute('style', 'color: #000;' + divStyle.join(';'));
          var link = document.createElement('a');
          link.setAttribute('href', url);
          link.setAttribute('target', '_blank');
          link.innerHTML = '<i class="fas fa-file-word"></i> View Google Doc';
          gdoc.appendChild(link);
        }
      };
      xhr.onerror = function () {
        gdoc.innerHTML = '<i class="fas fa-triangle-exclamation"></i> Failed to load Google Doc';
      };
      xhr.send();
    }
  }
}
;
flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('defendervex/bbextend', function () {
  // TODO: Find a better way to trigger this.
  //window.addEventListener('load', function() {
  //	populateGDocs();
  //});

  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'oncreate', function () {
    populateGDocs();
  });
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

/***/ }),

/***/ "flarum/forum/components/PostStream":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/PostStream']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/PostStream'];

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