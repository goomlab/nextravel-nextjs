webpackHotUpdate_N_E("pages/strutture-ricettive/[accommodation]/booking/[id]",{

/***/ "./components/Partials/HotelAgeRangesTable.js":
/*!****************************************************!*\
  !*** ./components/Partials/HotelAgeRangesTable.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/giuseppe/Workspace/Di Costanzo Marco/nextravel.it/www/nextravel-nextjs/components/Partials/HotelAgeRangesTable.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar HotelAgeRangesTable = function HotelAgeRangesTable(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, props.hotelAgeRanges && props.hotelAgeRanges.length > 0 && __jsx(\"div\", {\n    \"class\": \"prices-box-details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, \"Supplementi e Riduzioni per et\\xE0\"), __jsx(\"table\", {\n    className: \"prices-table\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, props.hotelAgeRanges.map(function (obj, index) {\n    return __jsx(\"tr\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }\n    }, __jsx(\"td\", {\n      className: \"service-name\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }\n    }, obj.age_min, \" - \", obj.age_max), __jsx(\"td\", {\n      className: \"service-price\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }\n    }, __jsx(\"span\", {\n      className: \"no-smartphone\",\n      dangerouslySetInnerHTML: {\n        __html: obj.price_type == 'fixed' ? '€&nbsp;' : parseFloat(obj.price) > 0 ? '+' : ''\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 19\n      }\n    }), obj.price, obj.price_type == 'percent' ? '%' : ',-'));\n  })))));\n};\n\n_c = HotelAgeRangesTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HotelAgeRangesTable);\n\nvar _c;\n\n$RefreshReg$(_c, \"HotelAgeRangesTable\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXJ0aWFscy9Ib3RlbEFnZVJhbmdlc1RhYmxlLmpzPzFhNmIiXSwibmFtZXMiOlsiSG90ZWxBZ2VSYW5nZXNUYWJsZSIsInByb3BzIiwiaG90ZWxBZ2VSYW5nZXMiLCJsZW5ndGgiLCJtYXAiLCJvYmoiLCJpbmRleCIsImFnZV9taW4iLCJhZ2VfbWF4IiwiX19odG1sIiwicHJpY2VfdHlwZSIsInBhcnNlRmxvYXQiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBQyxLQUFLLEVBQUk7QUFDbkMsU0FDRSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLEtBQUssQ0FBQ0MsY0FBTixJQUF3QkQsS0FBSyxDQUFDQyxjQUFOLENBQXFCQyxNQUFyQixHQUE4QixDQUF0RCxJQUNDO0FBQUssYUFBTSxvQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FERixFQUVFO0FBQU8sYUFBUyxFQUFDLGNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NGLEtBQUssQ0FBQ0MsY0FBTixDQUFxQkUsR0FBckIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOO0FBQUEsV0FDekI7QUFBSSxTQUFHLEVBQUVBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxHQUFHLENBQUNFLE9BRFAsU0FDbUJGLEdBQUcsQ0FBQ0csT0FEdkIsQ0FERixFQUlFO0FBQUksZUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFO0FBQU0sZUFBUyxFQUFDLGVBQWhCO0FBQWdDLDZCQUF1QixFQUFFO0FBQUVDLGNBQU0sRUFBR0osR0FBRyxDQUFDSyxVQUFKLElBQWtCLE9BQW5CLEdBQThCLFNBQTlCLEdBQTJDQyxVQUFVLENBQUNOLEdBQUcsQ0FBQ08sS0FBTCxDQUFWLEdBQXdCLENBQXhCLEdBQTRCLEdBQTVCLEdBQWtDO0FBQXZGLE9BQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdHUCxHQUFHLENBQUNPLEtBSFAsRUFJSVAsR0FBRyxDQUFDSyxVQUFKLElBQWtCLFNBQW5CLEdBQWdDLEdBQWhDLEdBQXNDLElBSnpDLENBSkYsQ0FEeUI7QUFBQSxHQUExQixDQURELENBREYsQ0FGRixDQUZKLENBREY7QUEwQkQsQ0EzQkQ7O0tBQU1WLG1CO0FBNkJTQSxrRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFydGlhbHMvSG90ZWxBZ2VSYW5nZXNUYWJsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cblxuY29uc3QgSG90ZWxBZ2VSYW5nZXNUYWJsZSA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7cHJvcHMuaG90ZWxBZ2VSYW5nZXMgJiYgcHJvcHMuaG90ZWxBZ2VSYW5nZXMubGVuZ3RoID4gMCAmJiBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlcy1ib3gtZGV0YWlsc1wiPlxuICAgICAgICAgIDxzcGFuPlN1cHBsZW1lbnRpIGUgUmlkdXppb25pIHBlciBldMOgPC9zcGFuPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwcmljZXMtdGFibGVcIj5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtwcm9wcy5ob3RlbEFnZVJhbmdlcy5tYXAoIChvYmosIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzZXJ2aWNlLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIHtvYmouYWdlX21pbn0gLSB7b2JqLmFnZV9tYXh9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2VydmljZS1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cIm5vLXNtYXJ0cGhvbmVcIj57KG9iai5wcmljZV90eXBlID09ICdmaXhlZCcpID8gJ+KCrCcgOiAocGFyc2VGbG9hdChvYmoucHJpY2UpID4gMCA/ICcrJyA6ICcnKX08L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm8tc21hcnRwaG9uZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogKG9iai5wcmljZV90eXBlID09ICdmaXhlZCcpID8gJ+KCrCZuYnNwOycgOiAocGFyc2VGbG9hdChvYmoucHJpY2UpID4gMCA/ICcrJyA6ICcnKSB9fSAvPlxuICAgICAgICAgICAgICAgICAge29iai5wcmljZX1cbiAgICAgICAgICAgICAgICAgIHsob2JqLnByaWNlX3R5cGUgPT0gJ3BlcmNlbnQnKSA/ICclJyA6ICcsLSd9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG90ZWxBZ2VSYW5nZXNUYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Partials/HotelAgeRangesTable.js\n");

/***/ })

})