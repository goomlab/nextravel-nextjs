webpackHotUpdate_N_E("pages/accommodations/[accommodation]/booking/[id]",{

/***/ "./components/MyDateRangePicker.js":
/*!*****************************************!*\
  !*** ./components/MyDateRangePicker.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_daterangepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap-daterangepicker */ \"./node_modules/react-bootstrap-daterangepicker/dist/bundle.js\");\n/* harmony import */ var react_bootstrap_daterangepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_daterangepicker__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/giuseppe/Workspace/Di Costanzo Marco/nextravel.it/www/nextravel-nextjs/components/MyDateRangePicker.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar MyDateRangePicker = function MyDateRangePicker(props) {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({\n    startDate: props.startDate ? moment__WEBPACK_IMPORTED_MODULE_3___default()(props.startDate, \"YYYY-MM-DD\") : moment__WEBPACK_IMPORTED_MODULE_3___default()(),\n    endDate: props.endDate ? moment__WEBPACK_IMPORTED_MODULE_3___default()(props.endDate, \"YYYY-MM-DD\") : moment__WEBPACK_IMPORTED_MODULE_3___default()().add('2 days')\n  }),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      state = _React$useState2[0],\n      setState = _React$useState2[1];\n\n  var _onApply = function onApply(event, picker) {\n    props.onChange(picker.startDate, picker.endDate);\n    setState({\n      startDate: picker.startDate,\n      endDate: picker.endDate\n    });\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    setState(_objectSpread(_objectSpread({}, state), {}, {\n      startDate: props.startDate ? moment__WEBPACK_IMPORTED_MODULE_3___default()(props.startDate, \"YYYY-MM-DD\") : moment__WEBPACK_IMPORTED_MODULE_3___default()(),\n      endDate: props.endDate ? moment__WEBPACK_IMPORTED_MODULE_3___default()(props.endDate, \"YYYY-MM-DD\") : moment__WEBPACK_IMPORTED_MODULE_3___default()().add('2 days')\n    }));\n  }, [props]);\n\n  var onChange = function onChange(e) {// non fare nulla\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap_daterangepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    minDate: moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD'),\n    startDate: state.startDate,\n    endDate: state.endDate,\n    autoApply: true,\n    onApply: function onApply(event, picker) {\n      return _onApply(event, picker);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    id: \"\",\n    name: \"\",\n    placeholder: \"Checkin\",\n    value: state.startDate.format('DD/MM/YYYY') + ' - ' + state.endDate.format('DD/MM/YYYY') || '',\n    onchange: function onchange(e) {\n      return onChange(e);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(MyDateRangePicker, \"exfvd+XiJJ0tvcoe4vEqQTQZwm4=\");\n\n_c = MyDateRangePicker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyDateRangePicker);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyDateRangePicker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeURhdGVSYW5nZVBpY2tlci5qcz83NWE3Il0sIm5hbWVzIjpbIk15RGF0ZVJhbmdlUGlja2VyIiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwic3RhcnREYXRlIiwibW9tZW50IiwiZW5kRGF0ZSIsImFkZCIsInN0YXRlIiwic2V0U3RhdGUiLCJvbkFwcGx5IiwiZXZlbnQiLCJwaWNrZXIiLCJvbkNoYW5nZSIsInVzZUVmZmVjdCIsImUiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSx3QkFFVEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQ3ZDQyxhQUFTLEVBQUdILEtBQUssQ0FBQ0csU0FBUCxHQUFvQkMsNkNBQU0sQ0FBQ0osS0FBSyxDQUFDRyxTQUFQLEVBQWtCLFlBQWxCLENBQTFCLEdBQTREQyw2Q0FBTSxFQUR0QztBQUV2Q0MsV0FBTyxFQUFHTCxLQUFLLENBQUNLLE9BQVAsR0FBa0JELDZDQUFNLENBQUNKLEtBQUssQ0FBQ0ssT0FBUCxFQUFnQixZQUFoQixDQUF4QixHQUF3REQsNkNBQU0sR0FBR0UsR0FBVCxDQUFhLFFBQWI7QUFGMUIsR0FBZixDQUZTO0FBQUE7QUFBQSxNQUU1QkMsS0FGNEI7QUFBQSxNQUVyQkMsUUFGcUI7O0FBT25DLE1BQU1DLFFBQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQ1gsU0FBSyxDQUFDWSxRQUFOLENBQWVELE1BQU0sQ0FBQ1IsU0FBdEIsRUFBaUNRLE1BQU0sQ0FBQ04sT0FBeEM7QUFDQUcsWUFBUSxDQUFDO0FBQ1BMLGVBQVMsRUFBRVEsTUFBTSxDQUFDUixTQURYO0FBRVBFLGFBQU8sRUFBRU0sTUFBTSxDQUFDTjtBQUZULEtBQUQsQ0FBUjtBQUlELEdBTkQ7O0FBUUFKLDhDQUFLLENBQUNZLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkwsWUFBUSxpQ0FDSEQsS0FERztBQUVOSixlQUFTLEVBQUdILEtBQUssQ0FBQ0csU0FBUCxHQUFvQkMsNkNBQU0sQ0FBQ0osS0FBSyxDQUFDRyxTQUFQLEVBQWtCLFlBQWxCLENBQTFCLEdBQTREQyw2Q0FBTSxFQUZ2RTtBQUdOQyxhQUFPLEVBQUdMLEtBQUssQ0FBQ0ssT0FBUCxHQUFrQkQsNkNBQU0sQ0FBQ0osS0FBSyxDQUFDSyxPQUFQLEVBQWdCLFlBQWhCLENBQXhCLEdBQXdERCw2Q0FBTSxHQUFHRSxHQUFULENBQWEsUUFBYjtBQUgzRCxPQUFSO0FBS0QsR0FORCxFQU1HLENBQUNOLEtBQUQsQ0FOSDs7QUFRQSxNQUFNWSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDRSxDQUFELEVBQU8sQ0FDdEI7QUFDRCxHQUZEOztBQUlBLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0VBQUQ7QUFDRSxXQUFPLEVBQUVWLDZDQUFNLEdBQUdXLE1BQVQsQ0FBZ0IsWUFBaEIsQ0FEWDtBQUVFLGFBQVMsRUFBRVIsS0FBSyxDQUFDSixTQUZuQjtBQUdFLFdBQU8sRUFBRUksS0FBSyxDQUFDRixPQUhqQjtBQUlFLGFBQVMsRUFBRSxJQUpiO0FBS0UsV0FBTyxFQUFFLGlCQUFDSyxLQUFELEVBQVFDLE1BQVI7QUFBQSxhQUFpQkYsUUFBTyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsQ0FBeEI7QUFBQSxLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBQ2MsYUFBUyxFQUFDLGNBRHhCO0FBQ3VDLE1BQUUsRUFBQyxFQUQxQztBQUM2QyxRQUFJLEVBQUMsRUFEbEQ7QUFDcUQsZUFBVyxFQUFDLFNBRGpFO0FBRUUsU0FBSyxFQUFFSixLQUFLLENBQUNKLFNBQU4sQ0FBZ0JZLE1BQWhCLENBQXVCLFlBQXZCLElBQXVDLEtBQXZDLEdBQStDUixLQUFLLENBQUNGLE9BQU4sQ0FBY1UsTUFBZCxDQUFxQixZQUFyQixDQUEvQyxJQUFxRixFQUY5RjtBQUdFLFlBQVEsRUFBRSxrQkFBQ0QsQ0FBRDtBQUFBLGFBQU9GLFFBQVEsQ0FBQ0UsQ0FBRCxDQUFmO0FBQUEsS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERixDQURGO0FBaUJELENBNUNEOztHQUFNZixpQjs7S0FBQUEsaUI7QUE4Q1NBLGdGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NeURhdGVSYW5nZVBpY2tlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF0ZVJhbmdlUGlja2VyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1kYXRlcmFuZ2VwaWNrZXInO1xuXG5jb25zdCBNeURhdGVSYW5nZVBpY2tlciA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHN0YXJ0RGF0ZTogKHByb3BzLnN0YXJ0RGF0ZSkgPyBtb21lbnQocHJvcHMuc3RhcnREYXRlLCBcIllZWVktTU0tRERcIikgOiBtb21lbnQoKSxcbiAgICBlbmREYXRlOiAocHJvcHMuZW5kRGF0ZSkgPyBtb21lbnQocHJvcHMuZW5kRGF0ZSwgXCJZWVlZLU1NLUREXCIpIDogbW9tZW50KCkuYWRkKCcyIGRheXMnKVxuICB9KTtcblxuICBjb25zdCBvbkFwcGx5ID0gKGV2ZW50LCBwaWNrZXIpID0+IHtcbiAgICBwcm9wcy5vbkNoYW5nZShwaWNrZXIuc3RhcnREYXRlLCBwaWNrZXIuZW5kRGF0ZSk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgc3RhcnREYXRlOiBwaWNrZXIuc3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZTogcGlja2VyLmVuZERhdGUsXG4gICAgfSlcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzdGFydERhdGU6IChwcm9wcy5zdGFydERhdGUpID8gbW9tZW50KHByb3BzLnN0YXJ0RGF0ZSwgXCJZWVlZLU1NLUREXCIpIDogbW9tZW50KCksXG4gICAgICBlbmREYXRlOiAocHJvcHMuZW5kRGF0ZSkgPyBtb21lbnQocHJvcHMuZW5kRGF0ZSwgXCJZWVlZLU1NLUREXCIpIDogbW9tZW50KCkuYWRkKCcyIGRheXMnKVxuICAgIH0pXG4gIH0sIFtwcm9wc10pXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIC8vIG5vbiBmYXJlIG51bGxhXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxEYXRlUmFuZ2VQaWNrZXJcbiAgICAgICAgbWluRGF0ZT17bW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyl9XG4gICAgICAgIHN0YXJ0RGF0ZT17c3RhdGUuc3RhcnREYXRlfVxuICAgICAgICBlbmREYXRlPXtzdGF0ZS5lbmREYXRlfVxuICAgICAgICBhdXRvQXBwbHk9e3RydWV9XG4gICAgICAgIG9uQXBwbHk9eyhldmVudCwgcGlja2VyKT0+b25BcHBseShldmVudCwgcGlja2VyKX1cbiAgICAgICAgPlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIlwiIG5hbWU9XCJcIiBwbGFjZWhvbGRlcj1cIkNoZWNraW5cIiBcbiAgICAgICAgICB2YWx1ZT17c3RhdGUuc3RhcnREYXRlLmZvcm1hdCgnREQvTU0vWVlZWScpICsgJyAtICcgKyBzdGF0ZS5lbmREYXRlLmZvcm1hdCgnREQvTU0vWVlZWScpIHx8ICcnfSBcbiAgICAgICAgICBvbmNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfVxuICAgICAgICAvPlxuICAgICAgPC9EYXRlUmFuZ2VQaWNrZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlEYXRlUmFuZ2VQaWNrZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MyDateRangePicker.js\n");

/***/ })

})