webpackHotUpdate_N_E("pages/strutture-ricettive/[accommodation]/booking/[id]",{

/***/ "./components/Partials/HotelAgeRangesTable.js":
/*!****************************************************!*\
  !*** ./components/Partials/HotelAgeRangesTable.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/giuseppe/Workspace/Di Costanzo Marco/nextravel.it/www/nextravel-nextjs/components/Partials/HotelAgeRangesTable.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar HotelAgeRangesTable = function HotelAgeRangesTable(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, props.hotelAgeRanges && props.hotelAgeRanges.length > 0 && __jsx(\"div\", {\n    \"class\": \"price-box-details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, \"Supplementi e Riduzioni per et\\xE0\"), __jsx(\"table\", {\n    className: \"prices-table\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, props.hotelAgeRanges.map(function (obj, index) {\n    return __jsx(\"tr\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }\n    }, __jsx(\"td\", {\n      className: \"service-name\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }\n    }, obj.age_min, \" - \", obj.age_max), __jsx(\"td\", {\n      className: \"service-price\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }\n    }, __jsx(\"span\", {\n      className: \"no-smartphone\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 19\n      }\n    }, obj.price_type == 'fixed' ? '€ ' : '+ '), obj.price, \",-\", obj.price_type == 'percent' ? ' %' : ''));\n  })))));\n};\n\n_c = HotelAgeRangesTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HotelAgeRangesTable);\n\nvar _c;\n\n$RefreshReg$(_c, \"HotelAgeRangesTable\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXJ0aWFscy9Ib3RlbEFnZVJhbmdlc1RhYmxlLmpzPzFhNmIiXSwibmFtZXMiOlsiSG90ZWxBZ2VSYW5nZXNUYWJsZSIsInByb3BzIiwiaG90ZWxBZ2VSYW5nZXMiLCJsZW5ndGgiLCJtYXAiLCJvYmoiLCJpbmRleCIsImFnZV9taW4iLCJhZ2VfbWF4IiwicHJpY2VfdHlwZSIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUFDLEtBQUssRUFBSTtBQUNuQyxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDQyxjQUFOLElBQXdCRCxLQUFLLENBQUNDLGNBQU4sQ0FBcUJDLE1BQXJCLEdBQThCLENBQXRELElBQ0M7QUFBSyxhQUFNLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQURGLEVBRUU7QUFBTyxhQUFTLEVBQUMsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ0YsS0FBSyxDQUFDQyxjQUFOLENBQXFCRSxHQUFyQixDQUEwQixVQUFDQyxHQUFELEVBQU1DLEtBQU47QUFBQSxXQUN6QjtBQUFJLFNBQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELEdBQUcsQ0FBQ0UsT0FEUCxTQUNtQkYsR0FBRyxDQUFDRyxPQUR2QixDQURGLEVBSUU7QUFBSSxlQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFrQ0gsR0FBRyxDQUFDSSxVQUFKLElBQWtCLE9BQW5CLEdBQThCLElBQTlCLEdBQXFDLElBQXRFLENBREYsRUFFR0osR0FBRyxDQUFDSyxLQUZQLFFBR0lMLEdBQUcsQ0FBQ0ksVUFBSixJQUFrQixTQUFuQixHQUFnQyxJQUFoQyxHQUF1QyxFQUgxQyxDQUpGLENBRHlCO0FBQUEsR0FBMUIsQ0FERCxDQURGLENBRkYsQ0FGSixDQURGO0FBeUJELENBMUJEOztLQUFNVCxtQjtBQTRCU0Esa0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhcnRpYWxzL0hvdGVsQWdlUmFuZ2VzVGFibGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5cbmNvbnN0IEhvdGVsQWdlUmFuZ2VzVGFibGUgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge3Byb3BzLmhvdGVsQWdlUmFuZ2VzICYmIHByb3BzLmhvdGVsQWdlUmFuZ2VzLmxlbmd0aCA+IDAgJiYgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1ib3gtZGV0YWlsc1wiPlxuICAgICAgICAgIDxzcGFuPlN1cHBsZW1lbnRpIGUgUmlkdXppb25pIHBlciBldMOgPC9zcGFuPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwcmljZXMtdGFibGVcIj5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtwcm9wcy5ob3RlbEFnZVJhbmdlcy5tYXAoIChvYmosIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzZXJ2aWNlLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIHtvYmouYWdlX21pbn0gLSB7b2JqLmFnZV9tYXh9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2VydmljZS1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm8tc21hcnRwaG9uZVwiPnsob2JqLnByaWNlX3R5cGUgPT0gJ2ZpeGVkJykgPyAn4oKsICcgOiAnKyAnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtvYmoucHJpY2V9LC1cbiAgICAgICAgICAgICAgICAgIHsob2JqLnByaWNlX3R5cGUgPT0gJ3BlcmNlbnQnKSA/ICcgJScgOiAnJ31cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3RlbEFnZVJhbmdlc1RhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Partials/HotelAgeRangesTable.js\n");

/***/ })

})