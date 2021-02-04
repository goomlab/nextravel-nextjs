webpackHotUpdate_N_E("pages/strutture-ricettive/[accommodation]/booking/[id]",{

/***/ "./components/Partials/HotelAgeRangesTable.js":
/*!****************************************************!*\
  !*** ./components/Partials/HotelAgeRangesTable.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/giuseppe/Workspace/Di Costanzo Marco/nextravel.it/www/nextravel-nextjs/components/Partials/HotelAgeRangesTable.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar HotelAgeRangesTable = function HotelAgeRangesTable(props) {\n  console.log('hotelAgeRanges', props.hotelAgeRanges);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, props.hotelAgeRanges && props.hotelAgeRanges.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, \"Supplementi e Riduzioni per et\\xE0\"), __jsx(\"table\", {\n    className: \"prices-table\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, props.hotelAgeRanges.map(function (obj, index) {\n    return __jsx(\"tr\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }\n    }, console.log('age obj', obj), __jsx(\"td\", {\n      className: \"service-name\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }\n    }, obj.age_min, \" - \", obj.age_max), __jsx(\"td\", {\n      className: \"service-price\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }\n    }, __jsx(\"span\", {\n      className: \"no-smartphone\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 19\n      }\n    }, obj.price_type == 'fixed' ? '€ ' : '+ '), obj.price, \",-\", obj.price_type == 'percent' ? ' %' : ''));\n  })))));\n};\n\n_c = HotelAgeRangesTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HotelAgeRangesTable);\n\nvar _c;\n\n$RefreshReg$(_c, \"HotelAgeRangesTable\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXJ0aWFscy9Ib3RlbEFnZVJhbmdlc1RhYmxlLmpzPzFhNmIiXSwibmFtZXMiOlsiSG90ZWxBZ2VSYW5nZXNUYWJsZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImhvdGVsQWdlUmFuZ2VzIiwibGVuZ3RoIiwibWFwIiwib2JqIiwiaW5kZXgiLCJhZ2VfbWluIiwiYWdlX21heCIsInByaWNlX3R5cGUiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBQyxLQUFLLEVBQUk7QUFBQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLEtBQUssQ0FBQ0csY0FBcEM7QUFDcEMsU0FDRSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILEtBQUssQ0FBQ0csY0FBTixJQUF3QkgsS0FBSyxDQUFDRyxjQUFOLENBQXFCQyxNQUFyQixHQUE4QixDQUF0RCxJQUNDLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQURGLEVBRUU7QUFBTyxhQUFTLEVBQUMsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ0osS0FBSyxDQUFDRyxjQUFOLENBQXFCRSxHQUFyQixDQUEwQixVQUFDQyxHQUFELEVBQU1DLEtBQU47QUFBQSxXQUN6QjtBQUFJLFNBQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSSxHQUF2QixDQUFqQixFQUNFO0FBQUksZUFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQSxHQUFHLENBQUNFLE9BRFAsU0FDbUJGLEdBQUcsQ0FBQ0csT0FEdkIsQ0FERixFQUlFO0FBQUksZUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBa0NILEdBQUcsQ0FBQ0ksVUFBSixJQUFrQixPQUFuQixHQUE4QixJQUE5QixHQUFxQyxJQUF0RSxDQURGLEVBRUdKLEdBQUcsQ0FBQ0ssS0FGUCxRQUdJTCxHQUFHLENBQUNJLFVBQUosSUFBa0IsU0FBbkIsR0FBZ0MsSUFBaEMsR0FBdUMsRUFIMUMsQ0FKRixDQUR5QjtBQUFBLEdBQTFCLENBREQsQ0FERixDQUZGLENBRkosQ0FERjtBQXlCRCxDQTFCRDs7S0FBTVgsbUI7QUE0QlNBLGtGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QYXJ0aWFscy9Ib3RlbEFnZVJhbmdlc1RhYmxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuXG5jb25zdCBIb3RlbEFnZVJhbmdlc1RhYmxlID0gcHJvcHMgPT4ge2NvbnNvbGUubG9nKCdob3RlbEFnZVJhbmdlcycsIHByb3BzLmhvdGVsQWdlUmFuZ2VzKVxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtwcm9wcy5ob3RlbEFnZVJhbmdlcyAmJiBwcm9wcy5ob3RlbEFnZVJhbmdlcy5sZW5ndGggPiAwICYmIFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPHNwYW4+U3VwcGxlbWVudGkgZSBSaWR1emlvbmkgcGVyIGV0w6A8L3NwYW4+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInByaWNlcy10YWJsZVwiPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3Byb3BzLmhvdGVsQWdlUmFuZ2VzLm1hcCggKG9iaiwgaW5kZXgpID0+IFxuICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+e2NvbnNvbGUubG9nKCdhZ2Ugb2JqJywgb2JqKX1cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2VydmljZS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICB7b2JqLmFnZV9taW59IC0ge29iai5hZ2VfbWF4fVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNlcnZpY2UtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vLXNtYXJ0cGhvbmVcIj57KG9iai5wcmljZV90eXBlID09ICdmaXhlZCcpID8gJ+KCrCAnIDogJysgJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7b2JqLnByaWNlfSwtXG4gICAgICAgICAgICAgICAgICB7KG9iai5wcmljZV90eXBlID09ICdwZXJjZW50JykgPyAnICUnIDogJyd9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICB9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3RlbEFnZVJhbmdlc1RhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Partials/HotelAgeRangesTable.js\n");

/***/ })

})