module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "1nAM":
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "57t+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jC1T");


class MenuService extends _BaseService__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] {
  constructor() {
    super('/post/menu');
  }

}

/***/ }),

/***/ "6Brv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jC1T");


class HotelService extends _BaseService__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] {
  constructor() {
    super('/travelgo-one/hotels');
  }

  query(params) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.url}/query`, {
      params
    }, this.config).then(response => {
      return Promise.resolve(response.data);
    }).catch(error => {
      return Promise.reject(error);
    });
  } // queryLastminutes(id, params) {
  //   return axios.get(`${this.url}/${id}/query-lastminutes`, { params }, this.config)
  //   .then(response => {
  //     return Promise.resolve(response.data.data);
  //   })
  //   .catch(error => {
  //     return Promise.reject(error);
  //   });
  // }


}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "8Mm2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_BaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("jC1T");
/* harmony import */ var react_bootstrap_daterangepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("KPCs");
/* harmony import */ var react_bootstrap_daterangepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_daterangepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1nAM");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







swiper__WEBPACK_IMPORTED_MODULE_5___default.a.use([swiper__WEBPACK_IMPORTED_MODULE_5__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_5__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_5__["Scrollbar"], swiper__WEBPACK_IMPORTED_MODULE_5__["A11y"]]);

const BookingSearchBox = props => {
  const swiperBookingMonths = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  const swiperBookingHolidays = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  const defaultCheckin = moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'days').format('YYYY-MM-DD');
  const defaultCheckout = moment__WEBPACK_IMPORTED_MODULE_1___default()().add(7, 'days').format('YYYY-MM-DD');
  const defaultCheckinFormatted = moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'days').format('DD/MM/YYYY');
  const defaultCheckoutFormatted = moment__WEBPACK_IMPORTED_MODULE_1___default()().add(7, 'days').format('DD/MM/YYYY');

  const initCheckin = () => {
    if (props.query && props.query.checkin != undefined && props.query.checkin != "") {
      return props.query.checkin;
    }

    if (props.searchParams && props.searchParams.checkin != undefined && props.searchParams.checkin != "") {
      return props.searchParams.checkin;
    }

    return defaultCheckin;
  };

  const initCheckout = () => {
    if (props.query && props.query.checkout != undefined && props.query.checkout != "") {
      return props.query.checkout;
    }

    if (props.searchParams && props.searchParams.checkout != undefined && props.searchParams.checkout != "") {
      return props.searchParams.checkout;
    }

    return defaultCheckout;
  };

  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    loc_id: props.query && props.query.loc_id || '',
    category_id: props.query && props.query.category_id || '',
    checkin: initCheckin(),
    checkout: initCheckout(),
    nights: props.query && props.query.nights || ''
  });
  const [params, setParams] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    locs: [],
    hotelCategories: [],
    months: [],
    specials: []
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    // swipers
    if (props.full) {
      swiperBookingMonths.current = new swiper__WEBPACK_IMPORTED_MODULE_5__["Swiper"]('#swiperBookingMonths', {
        grubCursor: false,
        simulateTouch: false,
        direction: 'horizontal',
        speed: 600,
        slidesPerView: 10,
        spaceBetween: 30,
        breakpoints: {
          1: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 10,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 10,
            spaceBetween: 30
          }
        },
        navigation: {
          nextEl: '#swiperBookingMonths-button-next',
          prevEl: '#swiperBookingMonths-button-prev'
        }
      }); // swiperBookingHolidays.current = new Swiper('#swiperBookingHolidays', {
      //   grubCursor: false,
      //   simulateTouch : false,
      //   direction: 'horizontal',
      //   speed: 600,
      //   slidesPerView: 10,
      //   spaceBetween: 30,
      //   navigation: {
      //     nextEl: '#swiperBookingHolidays-button-next',
      //     prevEl: '#swiperBookingHolidays-button-prev',
      //   }
      // })
    } // init booking


    let baseService = new _packages_BaseService__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]();
    baseService.initApp().then(response => {
      setParams({
        locs: response.locs || [],
        hotelCategories: response.hotelCategories || [],
        months: response.filterPages.months || [],
        specials: response.filterPages.specials || []
      });
      if (props.full && swiperBookingMonths && swiperBookingMonths.current) swiperBookingMonths.current.update(); // if( props.full && swiperBookingHolidays && swiperBookingHolidays.current )
      //   swiperBookingHolidays.current.update()
    }).catch(error => {
      console.log('error', error);
    }); // setState({
    //   loc_id: (props.query && props.query.loc_id) || null,
    //   category_id: (props.query && props.query.category_id) || null,
    //   checkin: (props.query && props.query.checkin) || null,
    //   checkout: (props.query && props.query.checkout) || null,
    //   nights: (props.query && props.query.nights) || null
    // })
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (props.full) {
      swiperBookingHolidays.current = new swiper__WEBPACK_IMPORTED_MODULE_5__["Swiper"]('#swiperBookingHolidays', {
        grubCursor: false,
        simulateTouch: false,
        direction: 'horizontal',
        speed: 600,
        slidesPerView: 10,
        spaceBetween: 30,
        breakpoints: {
          1: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 10,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 10,
            spaceBetween: 30
          }
        },
        navigation: {
          nextEl: '#swiperBookingHolidays-button-next',
          prevEl: '#swiperBookingHolidays-button-prev'
        }
      });
    }
  }, [params]); // const checkinFormatted = (props.query && props.query.checkin && props.query.checkin != "") ? moment(props.query.checkin, 'YYYY-MM-DD').format('DD/MM/YYYY') : defaultCheckinFormatted;
  // const checkoutFormatted = (props.query && props.query.checkout && props.query.checkout != "") ? moment(props.query.checkout, 'YYYY-MM-DD').format('DD/MM/YYYY') : defaultCheckoutFormatted;

  const checkinFormatted = state.checkin != "" && state.checkin != undefined ? moment__WEBPACK_IMPORTED_MODULE_1___default()(state.checkin, 'YYYY-MM-DD').format('DD/MM/YYYY') : defaultCheckinFormatted;
  const checkoutFormatted = state.checkout != "" && state.checkout != undefined ? moment__WEBPACK_IMPORTED_MODULE_1___default()(state.checkout, 'YYYY-MM-DD').format('DD/MM/YYYY') : defaultCheckoutFormatted;

  const getMonths = () => {
    // mesi
    let months = [];
    moment__WEBPACK_IMPORTED_MODULE_1___default.a.locale('it');
    var now = moment__WEBPACK_IMPORTED_MODULE_1___default()();
    let i = 0;

    do {
      months.push(__jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: `${"/offerte"}/[slug]`,
        as: `${"/offerte"}/${now.format('MMMM').toLowerCase()}`
      }, __jsx("a", null, __jsx("strong", null, now.format('MMM')), " ", now.format('YY'))));
      i++;
      now.add(1, 'months');
    } while (i < 12);

    return months;
  };

  const onChange = e => {
    let newState = Object.assign({}, state);
    newState[e.target.name] = e.target.value;
    setState(_objectSpread({}, newState));
  };

  const onDatePickerApply = (event, picker) => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      checkin: picker.startDate.format('YYYY-MM-DD'),
      checkout: picker.endDate.format('YYYY-MM-DD')
    }));
  };

  const onSumbit = e => {
    e.preventDefault();
    var url = `${"/strutture-ricettive"}?`;

    for (let [key, value] of Object.entries(state)) url += key + '=' + value + '&';

    window.location.href = url;
  };

  const months = getMonths();
  return __jsx("section", {
    className: "booking-box"
  }, __jsx("div", {
    className: "container"
  }, __jsx("form", {
    className: "booking-form"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-3"
  }, __jsx("select", {
    className: "custom-select",
    name: "loc_id",
    id: "loc_id",
    onChange: e => onChange(e),
    value: state.loc_id || ''
  }, __jsx("option", {
    value: ""
  }, "Localit\xE0"), params.locs && params.locs.map((obj, index) => __jsx("option", {
    key: index,
    value: obj.id
  }, obj.name)))), __jsx("div", {
    className: "col-lg-3"
  }, __jsx("select", {
    className: "custom-select",
    name: "category_id",
    id: "category_id",
    onChange: e => onChange(e),
    value: state.category_id || ''
  }, __jsx("option", {
    value: ""
  }, "Struttura"), params.hotelCategories && params.hotelCategories.map((obj, index) => __jsx("option", {
    key: index,
    value: obj.id
  }, obj.name)))), __jsx("div", {
    className: "col-lg-3"
  }, __jsx(react_bootstrap_daterangepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
    initialSettings: {
      // startDate: state.checkinFormatted,
      // endDate: state.checkoutFormatted,
      startDate: moment__WEBPACK_IMPORTED_MODULE_1___default()(state.checkin, 'YYYY-MM-DD'),
      endDate: moment__WEBPACK_IMPORTED_MODULE_1___default()(state.checkout, 'YYYY-MM-DD'),
      autoApply: true,
      startDate: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
      locale: {
        'cancelLabel': 'Cancella',
        'applyLabel': 'Applica'
      }
    },
    onApply: onDatePickerApply,
    style: {
      display: 'block',
      width: '100%'
    }
  }, __jsx("input", {
    className: "form-control",
    id: "booking_dateRangePicker",
    type: "text",
    placeholder: "Checkin",
    value: checkinFormatted != "" && checkoutFormatted != "" ? `${checkinFormatted} - ${checkoutFormatted}` : '',
    onChange: e => {}
  })), __jsx("input", {
    type: "hidden",
    name: "checkin",
    id: "checkin",
    onChange: e => onChange(e),
    value: state.checkin || ''
  }), __jsx("input", {
    type: "hidden",
    name: "checkout",
    id: "checkout",
    onChange: e => onChange(e),
    value: state.checkout || ''
  })), __jsx("div", {
    className: "col-lg-2"
  }, __jsx("select", {
    className: "custom-select",
    name: "nights",
    id: "nights",
    onChange: e => onChange(e),
    value: state.nights || ''
  }, __jsx("option", {
    value: ""
  }, "Notti"), __jsx("option", {
    value: "1"
  }, "1"), __jsx("option", {
    value: "2"
  }, "2"), __jsx("option", {
    value: "3"
  }, "3"), __jsx("option", {
    value: "4"
  }, "4"), __jsx("option", {
    value: "5"
  }, "5"), __jsx("option", {
    value: "6"
  }, "6"), __jsx("option", {
    value: "7"
  }, "7"))), __jsx("div", {
    className: "col-lg-1"
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-yellow",
    onClick: e => onSumbit(e)
  }, "Cerca")))), props.full && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "booking-months"
  }, __jsx("div", {
    id: "swiperBookingMonths",
    className: "swiper-container swiperBookingMonths"
  }, __jsx("div", {
    className: "swiper-wrapper"
  }, months.map((obj, index) => __jsx("div", {
    className: "swiper-slide",
    key: index
  }, obj)))), __jsx("div", {
    id: "swiperBookingMonths-button-prev",
    className: "swiper-button-prev"
  }), __jsx("div", {
    id: "swiperBookingMonths-button-next",
    className: "swiper-button-next"
  })), params.specials && params.specials.length > 0 && __jsx("div", {
    className: "booking-holidays"
  }, __jsx("div", {
    id: "swiperBookingHolidays",
    className: "swiper-container swiperBookingMonths"
  }, __jsx("div", {
    className: "swiper-wrapper"
  }, params.specials && params.specials.map((obj, index) => __jsx("div", {
    className: "swiper-slide",
    key: index
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `${"/offerte"}/[slug]`,
    as: `${"/offerte"}/${obj.slug.it}`
  }, __jsx("a", null, obj.title.it)))))), __jsx("div", {
    id: "swiperBookingHolidays-button-prev",
    className: "swiper-button-prev"
  }), __jsx("div", {
    id: "swiperBookingHolidays-button-next",
    className: "swiper-button-next"
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (BookingSearchBox);

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "Hw1s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getThumbnail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeHotelSchema; });
/* unused harmony export HotelSchema */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const getThumbnail = item => {
  if (item.media && item.media.thumbnail && item.media.thumbnail[0]) {
    return item.media.thumbnail[0].url;
  }

  if (item.media && item.media.gallery && item.media.gallery[0]) {
    return item.media.gallery[0].url;
  }

  return '';
};
const makeHotelSchema = hotel => {
  return {
    "@context": "http://schema.org",
    "@type": "Hotel",
    "name": hotel.name,
    "description": hotel.description.it,
    "url": "https://www.nextravel.it" + '/strutture-ricettive/' + hotel.slug.it,
    "email": {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.email.label,
    "telephone": {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.phone.label,
    "image": getThumbnail(hotel),
    "logo": "https://www.nextravel.it" + '/images/logo.png',
    "address": {
      "@type": 'PostalAddress',
      "addressLocality": hotel.details ? hotel.details.city : "",
      "addressRegion": hotel.details ? hotel.details.state : "",
      "postalcode": hotel.details ? hotel.details.zip_code : "",
      "streetAddress": hotel.details ? hotel.details.address : "",
      "addressRegion": hotel.details ? hotel.details.state : ""
    },
    "openingHours": ["Mo-Sa 00:00-24-00"],
    "hasMap": hotel.details ? hotel.details.gmap : "",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": hotel.details ? hotel.details.lat : "",
      "longitude": hotel.details ? hotel.details.lng : ""
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.phone.label,
      "email": {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.email.label,
      "contactType": "reservations"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": hotel.rating_details ? hotel.rating_details.ratingValue : "3"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "bestRating": hotel.rating_details ? hotel.rating_details.bestRating : "0",
      "ratingCount": hotel.rating_details ? hotel.rating_details.ratingCount : "0",
      "ratingValue": hotel.rating_details ? hotel.rating_details.ratingValue : "3",
      "reviewCount": hotel.rating_details ? hotel.rating_details.reviewCount : "0"
    },
    "priceRange": "€30 - €110"
  };
};
const HotelSchema = hotel => {
  return __jsx("script", {
    key: `jobJSON-${hotel.id}`,
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(makeHotelSchema(hotel))
    }
  });
}; // {
//   "@context":"http:\/\/www.schema.org",
//   "@type":"Hotel",
//   "name":"HotelIschia.org",
//   "url":"https:\/\/www.hotelischia.org",
//   "image":"https:\/\/www.hotelischia.org\/default.jpg",
//   "logo":"https:\/\/www.hotelischia.org\/logo.png",
//   "description":"HotelIschia ",
//   "address":{"@type":"PostalAddress","streetAddress":"Via Tommaso Cigliano 109","addressLocality":"Forio","addressRegion":"Campania","postalCode":"80075","addressCountry":"Italia"},
//   "geo":{"@type":"GeoCoordinates","latitude":"45.3725831","longitude":"12.3386239"},
//   "hasMap":"https:\/\/www.google.it\/maps\/place\/Hotelischia.org\/@40.751108,13.869027,15z\/data=!4m12!1m6!3m5!1s0x0:0x1a2964fe6e65709a!2sHotelischia.org!8m2!3d40.751108!4d13.869027!3m4!1s0x0:0x1a2964fe6e65709a!8m2!3d40.751108!4d13.869027",
//   "openingHours":"Mo, Tu, We, Th, Fr, Sa, Su 00:00-24:00",
//   "contactPoint":{"@type":"ContactPoint","telephone":"tel:+3908118088050","email":"info@hotelischia.org","contactType":"reservations"},
//   "priceRange":"da \u20ac 30,00","telephone":"tel:+3908118088050"},
//   {"@context":"http:\/\/www.schema.org","@type":"WebSite","name":"HotelIschia.org","alternateName":"HotelIschia.org","url":"https:\/\/www.hotelischia.org\/"}

/***/ }),

/***/ "JHTH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/Layouts/MainLayout/Head.js
var __jsx = external_react_default.a.createElement;




const Head = meta => __jsx(head_default.a, null, __jsx("meta", {
  charSet: "UTF-8"
}), __jsx("title", null, meta.title || '', " - ", "Nextravel"), __jsx("meta", {
  name: "description",
  content: meta.description || ''
}), meta.canonical && meta.canonical != "" && __jsx("link", {
  rel: "canonical",
  href: meta.canonical
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, shrink-to-fit=no"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
  integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",
  crossOrigin: "anonymous"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
  integrity: "sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",
  crossOrigin: "anonymous"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css"
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"
}), __jsx("link", {
  rel: "stylesheet",
  href: `${"/nextjs/public"}/css/frontend.min.css`
}), __jsx("meta", {
  property: "og:url",
  content: meta.url || ''
}), __jsx("meta", {
  property: "og:description",
  content: meta.description || ''
}), __jsx("meta", {
  property: "og:type",
  content: meta.type || 'website'
}), __jsx("meta", {
  property: "og:title",
  content: `${{"title":"Nextravel","url":"https://www.nextravel.it","image":"https://www.nextravel.it/default.jpg"}.title} - ${meta.title || ''}`
}), __jsx("meta", {
  property: "og:image",
  content: meta.image || {"title":"Nextravel","url":"https://www.nextravel.it","image":"https://www.nextravel.it/default.jpg"}.image
}), __jsx("meta", {
  property: "og:locale",
  content: "it_IT"
}), __jsx("meta", {
  property: "og:type",
  content: "article"
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary"
}), __jsx("meta", {
  name: "twitter:site",
  content: ""
}), __jsx("meta", {
  name: "twitter:creator",
  content: ""
}), __jsx("meta", {
  name: "twitter:title",
  content: `${{"title":"Nextravel","url":"https://www.nextravel.it","image":"https://www.nextravel.it/default.jpg"}.title} - ${meta.title || ''}`
}), __jsx("meta", {
  name: "twitter:description",
  content: meta.description || ''
}), __jsx("meta", {
  name: "twitter:image",
  content: meta.image || {"title":"Nextravel","url":"https://www.nextravel.it","image":"https://www.nextravel.it/default.jpg"}.image
}));

/* harmony default export */ var MainLayout_Head = (Head);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/Layouts/MainLayout/Header.js
var Header_jsx = external_react_default.a.createElement;

 // let lastScrollY = 0;
// let ticking = false;

const Header = props => {
  const [posY, setPosY] = external_react_default.a.useState('');
  const [navClass, setNavClass] = external_react_default.a.useState('');
  const navRef = /*#__PURE__*/external_react_default.a.createRef();

  const handleScroll = () => {
    setPosY(window.scrollY);
  };

  external_react_default.a.useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
  }, []);
  external_react_default.a.useEffect(() => {
    if (posY > 30) {
      setNavClass('fixed-top navbar-scroll'); // navRef.current.classList.add('fixed-top')
      // navRef.current.classList.add('navbar-scroll')
    } else {
      setNavClass(''); // navRef.current.classList.remove('fixed-top')
      // navRef.current.classList.remove('navbar-scroll')
    }
  }, [posY]);
  return Header_jsx("header", null, Header_jsx("nav", {
    id: "nav-0",
    className: `navbar navbar-expand-xl`
  }, Header_jsx("div", {
    className: "container"
  }, Header_jsx("ul", null, Header_jsx("li", null, Header_jsx("a", {
    className: "nav-link",
    href: {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.email.url
  }, Header_jsx("span", {
    dangerouslySetInnerHTML: {
      __html: {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.email.ico
    }
  }), " ", Header_jsx("span", null, {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.email.label))), Header_jsx("li", null, "|"), Object.entries({"facebook":{"label":"Facebook","url":"","ico":"<i class=\"fab fa-facebook\"></i>"},"instagram":{"label":"Instagram","url":"","ico":"<i class=\"fab fa-instagram\"></i>"}}).map(([key, obj], index) => Header_jsx("li", {
    key: key
  }, Header_jsx("a", {
    className: "nav-link",
    href: obj.url
  }, Header_jsx("span", {
    dangerouslySetInnerHTML: {
      __html: `${obj.ico}`
    }
  }))))))), Header_jsx("nav", {
    id: "nav-1",
    className: `navbar navbar-expand-xl ${navClass}`,
    ref: navRef
  }, Header_jsx("div", {
    className: "container"
  }, Header_jsx(link_default.a, {
    href: "/"
  }, Header_jsx("a", {
    className: "navbar-brand"
  }, Header_jsx("div", {
    className: "navbar-logo"
  }, Header_jsx("img", {
    src: "/images/logo.png",
    alt: "Next Travel"
  })))), Header_jsx("button", {
    className: "navbar-toggler collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#mainNavbar",
    "aria-controls": "mainNavbar",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, Header_jsx("span", null), Header_jsx("span", null), Header_jsx("span", null)), Header_jsx("div", {
    className: "collapse navbar-collapse",
    id: "mainNavbar"
  }, Header_jsx("ul", {
    className: "navbar-nav ml-auto",
    id: "navbar-nav-main"
  }, props.settings.menu && props.settings.menu.items.length > 0 && props.settings.menu.items.map((menuitem, index) => Header_jsx(external_react_default.a.Fragment, {
    key: index
  }, !menuitem.children || menuitem.children.length <= 0 && Header_jsx("li", {
    className: "nav-item"
  }, Header_jsx(link_default.a, {
    href: menuitem.translations.url.it
  }, Header_jsx("a", {
    className: "nav-link"
  }, menuitem.translations.title.it))), menuitem.children && menuitem.children.length > 0 && Header_jsx("li", {
    className: "nav-item dropdown"
  }, Header_jsx("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "dropdown-strutture",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, menuitem.translations.title.it), Header_jsx("div", {
    className: "dropdown-menu",
    "aria-labelledby": "dropdown-strutture"
  }, menuitem.children.map((children, indexChildren) => Header_jsx(link_default.a, {
    key: indexChildren,
    href: children.translations.url.it
  }, Header_jsx("a", {
    key: indexChildren,
    className: "dropdown-item"
  }, children.translations.title.it))))), index < props.settings.menu.items.length - 1 && Header_jsx("li", {
    className: "nav-item separator"
  }, "|")))), Header_jsx("ul", {
    className: "navbar-nav ml-auto"
  }, Header_jsx("li", {
    className: "nav-item"
  }, Header_jsx("a", {
    className: "nav-link nav-callto",
    href: {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.phone.url
  }, "chiama! ", {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.phone.label)))))));
};

/* harmony default export */ var MainLayout_Header = (Header);
// CONCATENATED MODULE: ./components/Layouts/MainLayout/Footer.js
var Footer_jsx = external_react_default.a.createElement;



const Footer = props => {
  return Footer_jsx("footer", null, Footer_jsx("div", {
    className: "container"
  }, Footer_jsx("div", {
    className: "row"
  }, Footer_jsx("div", {
    className: "col-md-5"
  }, Footer_jsx("span", {
    className: "green"
  }, "sede"), Footer_jsx("br", null), Footer_jsx("span", {
    dangerouslySetInnerHTML: {
      __html: [{"company":"Nextravel","label":"via Giovan Battista Vico 183<br/>80077 Ischia (Na)","url":"javascript:void(0)","ico":"<i class=\"map-marker\"></i>","piva":"IT09640631215"}][0].label
    }
  }), Footer_jsx("br", null), Footer_jsx("br", null), Footer_jsx("br", null), "P.IVA ", [{"company":"Nextravel","label":"via Giovan Battista Vico 183<br/>80077 Ischia (Na)","url":"javascript:void(0)","ico":"<i class=\"map-marker\"></i>","piva":"IT09640631215"}][0].piva), Footer_jsx("div", {
    className: "col-md-7"
  }, Footer_jsx("div", {
    className: "row"
  }, props.settings.menu && props.settings.menu.items.length > 0 && props.settings.menu.items.map((menuitem, index) => Footer_jsx(external_react_default.a.Fragment, {
    key: index
  }, !menuitem.children || menuitem.children.length <= 0 && Footer_jsx("div", {
    className: "col-lg-4 footer-menu-col"
  }, Footer_jsx(link_default.a, {
    href: menuitem.translations.url.it
  }, Footer_jsx("a", null, menuitem.translations.title.it))), menuitem.children && menuitem.children.length > 0 && menuitem.children.map((children, indexChildren) => Footer_jsx("div", {
    key: indexChildren,
    className: "col-lg-4 footer-menu-col"
  }, Footer_jsx(link_default.a, {
    key: indexChildren,
    href: children.translations.url.it
  }, Footer_jsx("a", {
    key: indexChildren
  }, children.translations.title.it)))))), Footer_jsx("div", {
    className: "col-lg-4 footer-menu-col"
  }, Footer_jsx(link_default.a, {
    href: "/sitemaphtml"
  }, Footer_jsx("a", null, "Sitemap"))), Footer_jsx("div", {
    className: "col-lg-4 footer-menu-col"
  }, Footer_jsx(link_default.a, {
    href: "/privacy-policy"
  }, Footer_jsx("a", null, "Privacy Policy")))))), Footer_jsx("div", {
    className: "row"
  }, Footer_jsx("div", {
    className: "col-md-5"
  }, Footer_jsx("div", {
    className: "logo"
  }, Footer_jsx("img", {
    src: "/images/logo.png",
    alt: ""
  }))), Footer_jsx("div", {
    className: "col-md-5"
  }, Footer_jsx("ul", {
    className: "menu-social"
  }, Object.entries({"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}).map(([key, obj], index) => Footer_jsx("li", {
    key: key
  }, Footer_jsx("a", {
    href: obj.url
  }, Footer_jsx("div", {
    dangerouslySetInnerHTML: {
      __html: `${obj.ico} ${obj.label}`
    }
  })))))), Footer_jsx("div", {
    className: "col-md-2"
  }, Footer_jsx("ul", {
    className: "menu-social"
  }, Object.entries({"facebook":{"label":"Facebook","url":"","ico":"<i class=\"fab fa-facebook\"></i>"},"instagram":{"label":"Instagram","url":"","ico":"<i class=\"fab fa-instagram\"></i>"}}).map(([key, obj], index) => Footer_jsx("li", {
    key: key
  }, Footer_jsx("a", {
    href: obj.url
  }, Footer_jsx("div", {
    dangerouslySetInnerHTML: {
      __html: `${obj.ico}`
    }
  })))))))));
};

/* harmony default export */ var MainLayout_Footer = (Footer);
// CONCATENATED MODULE: ./components/Layouts/MainLayout/Scripts.js
var Scripts_jsx = external_react_default.a.createElement;


const Scripts = () => {
  return Scripts_jsx(external_react_default.a.Fragment, null, Scripts_jsx("script", {
    src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
  }), Scripts_jsx("script", {
    type: "text/javascript",
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
    integrity: "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",
    crossOrigin: "anonymous"
  }), Scripts_jsx("script", {
    type: "text/javascript",
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
    integrity: "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",
    crossOrigin: "anonymous"
  }));
};

/* harmony default export */ var MainLayout_Scripts = (Scripts);
// CONCATENATED MODULE: ./components/Layouts/MainLayout/MainLayout.js
var MainLayout_jsx = external_react_default.a.createElement;






const MainLayout = ({
  children,
  settings = {},
  meta = {}
}) => {
  return MainLayout_jsx(external_react_default.a.Fragment, null, MainLayout_jsx(MainLayout_Head, meta), MainLayout_jsx("div", {
    className: `page` + (settings.template ? ` ${settings.template}` : '')
  }, MainLayout_jsx(MainLayout_Header, {
    settings: settings
  }), MainLayout_jsx("main", null, children)), MainLayout_jsx(MainLayout_Footer, {
    settings: settings
  }), MainLayout_jsx(MainLayout_Scripts, null));
};

/* harmony default export */ var MainLayout_MainLayout = __webpack_exports__["a"] = (MainLayout);

/***/ }),

/***/ "KPCs":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-daterangepicker");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/JsonLdSchema.js
var JsonLdSchema = __webpack_require__("Hw1s");

// EXTERNAL MODULE: ./packages/BaseService.js
var BaseService = __webpack_require__("jC1T");

// EXTERNAL MODULE: ./packages/Post/services/MenuService.js
var MenuService = __webpack_require__("57t+");

// EXTERNAL MODULE: ./packages/Post/services/PostService.js
var PostService = __webpack_require__("TvVg");

// EXTERNAL MODULE: ./packages/TravelgoOne/services/HotelService.js
var HotelService = __webpack_require__("6Brv");

// EXTERNAL MODULE: ./packages/TravelgoOne/services/LocService.js
var LocService = __webpack_require__("XarN");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");

// CONCATENATED MODULE: ./packages/TravelgoOne/services/HotelCategoryService.js


class HotelCategoryService_HotelCategoryService extends BaseService["a" /* default */] {
  constructor() {
    super('/travelgo-one/categories');
  }

}
// EXTERNAL MODULE: ./packages/TravelgoOne/actions/HotelAction.js
var HotelAction = __webpack_require__("bxpL");

// EXTERNAL MODULE: ./components/Layouts/MainLayout/MainLayout.js + 4 modules
var MainLayout = __webpack_require__("JHTH");

// EXTERNAL MODULE: ./components/Partials/BookingSearchBox.js
var BookingSearchBox = __webpack_require__("8Mm2");

// EXTERNAL MODULE: ./components/Partials/HotelArchive2.js
var HotelArchive2 = __webpack_require__("hm/Q");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/Partials/HomeRecap.js
var __jsx = external_react_default.a.createElement;




const HomeRecap = props => {
  external_moment_default.a.locale('it');
  var now = external_moment_default()();
  return __jsx("section", {
    className: "section-main section-home-primopiano"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "box-home-primopiano"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-4"
  }, __jsx("div", {
    className: "home-primopiano-item"
  }, __jsx("div", {
    className: "title"
  }, "Transfer traghetto"), __jsx("div", {
    className: "description"
  }, "Prenota l\u2019Hotel con noi ed avrai il Traghetto per Ischia a soli \u20AC136 \u20AC70 A/R Auto+Conducente*"), __jsx("div", {
    className: "note"
  }, "*offerta non valida dal 26-Dic e dal 03-Gen"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6"
  }, __jsx("a", {
    href: "#",
    className: "btn btn-transparent"
  }, "scopri")), __jsx("div", {
    className: "col-sm-6"
  }, __jsx("i", {
    className: "ico ico-nave"
  }))))), props.busPage && __jsx("div", {
    className: "col-lg-4"
  }, __jsx("div", {
    className: "home-primopiano-item"
  }, __jsx("div", {
    className: "title"
  }, props.busPage.title.it), __jsx("div", {
    className: "description"
  }, __jsx("span", {
    dangerouslySetInnerHTML: {
      __html: props.busPage.content_short.it
    }
  })), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6"
  }, __jsx(link_default.a, {
    href: props.busPage.page_path.it
  }, __jsx("a", {
    className: "btn btn-transparent"
  }, "scopri"))), __jsx("div", {
    className: "col-sm-6"
  }, __jsx("i", {
    className: "ico ico-orologio"
  }))))), __jsx("div", {
    className: "col-lg-4"
  }, __jsx("div", {
    className: "home-primopiano-item"
  }, __jsx("div", {
    className: "title"
  }, "Offerte del mese"), __jsx("div", {
    className: "description"
  }, __jsx("p", null, "Tutte le offerte di ", __jsx("strong", null, now.format('MMMM'), " ", now.format('YYYY')), " a portata di click. Non perdere l'occasione.")), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6"
  }, __jsx(link_default.a, {
    href: `${"/offerte"}/[slug]`,
    as: `${"/offerte"}/${now.format('MMMM').toLowerCase()}`
  }, __jsx("a", {
    className: "btn btn-transparent"
  }, "scopri"))), __jsx("div", {
    className: "col-sm-6"
  }, __jsx("i", {
    className: "ico ico-cal"
  })))))))));
};

/* harmony default export */ var Partials_HomeRecap = (HomeRecap);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: ./packages/TravelgoOne/actions/NewsletterAction.js + 1 modules
var NewsletterAction = __webpack_require__("mI8k");

// CONCATENATED MODULE: ./components/Partials/Newsletter.js
var Newsletter_jsx = external_react_default.a.createElement;






const Newsletter = props => {
  external_react_default.a.useEffect(() => {
    props.getClientIp();
  }, []);
  /**
   * onChange
   */

  const onChange = e => {
    e.persist();
    console.log('onChage', e);
    let newState = Object.assign({}, props.newsletter);

    switch (e.target.name) {
      case 'privacy':
        newState[e.target.name] = e.target.checked ? 1 : 0;
        break;

      default:
        newState[e.target.name] = e.target.value;
        break;
    }

    props.setContact(newState);
  };
  /**
   * onSubmit
   */


  const handleSubmit = () => {
    props.createContact(props.newsletter);
  };
  /**
   * Validate
   */


  const formik = Object(external_formik_["useFormik"])({
    initialValues: {
      email: props.newsletter.email || "",
      privacy: props.newsletter.privacy || 0
    },
    validationSchema: external_yup_["object"]().shape({
      email: external_yup_["string"]().required('Campo non valido'),
      privacy: external_yup_["number"]().min(1, 'Campo non valido').max(1, 'Campo non valido')
    }),
    enableReinitialize: true,
    onSubmit: handleSubmit
  });
  /**
   * Render
   */

  return Newsletter_jsx("section", {
    className: "section-main section-newsletter"
  }, Newsletter_jsx("div", {
    className: "container"
  }, Newsletter_jsx("div", {
    className: "row"
  }, Newsletter_jsx("div", {
    className: "col-lg-5"
  }, Newsletter_jsx("div", {
    className: "description"
  }, Newsletter_jsx("strong", null, "Inserisci la tua email.", Newsletter_jsx("br", null), "Sarai aggiornato su tutte le offerte."), Newsletter_jsx("br", null), "Alcune sono riservate ai soli iscritti.", Newsletter_jsx("br", null), "Per una vacanza su misura contatta", Newsletter_jsx("br", null), "il nostro booking ", {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.phone.label)), Newsletter_jsx("div", {
    className: "col-lg-6 offset-lg-1"
  }, Newsletter_jsx("form", {
    onSubmit: formik.handleSubmit,
    className: "needs-validation" + (formik.errors ? "was-validated" : ""),
    noValidate: true
  }, Newsletter_jsx("div", {
    className: "form-template-1"
  }, Newsletter_jsx("div", {
    className: "row"
  }, Newsletter_jsx("div", {
    className: "col-lg-9"
  }, Newsletter_jsx("div", {
    className: "form-group"
  }, Newsletter_jsx("input", {
    type: "email",
    className: "form-control" + (formik.errors.email ? " is-invalid" : ""),
    id: "newsletter_email",
    name: "email",
    placeholder: "Email",
    value: formik.values.email || '',
    onChange: e => {
      onChange(e);
      formik.handleChange(e);
    }
  }), formik.errors.email && Newsletter_jsx("div", {
    className: "invalid-feedback"
  }, formik.errors.email)), Newsletter_jsx("div", {
    className: "form-group"
  }, Newsletter_jsx("div", {
    className: "custom-control custom-checkbox"
  }, Newsletter_jsx("input", {
    type: "checkbox",
    className: "custom-control-input" + (formik.errors.privacy ? " is-invalid" : ""),
    name: "privacy",
    id: "newsletter_privacy",
    value: "1",
    checked: formik.values.privacy == 1 ? 1 : 0,
    onChange: e => {
      onChange(e);
      formik.handleChange(e);
    }
  }), Newsletter_jsx("label", {
    className: "custom-control-label",
    htmlFor: "newsletter_privacy"
  }, "Acconsento al trattamento dei miei dati ai sensi dell\u2019informativa sulla ", Newsletter_jsx("a", {
    href: "/privacy-policy",
    target: "_blank",
    rel: "nofollow"
  }, "Privacy"), "."), formik.errors.privacy && Newsletter_jsx("div", {
    className: "invalid-feedback"
  }, formik.errors.privacy)))), Newsletter_jsx("div", {
    className: "col-lg-3"
  }, Newsletter_jsx("div", {
    className: "form-group"
  }, Newsletter_jsx("button", {
    type: "submit",
    className: "btn btn-green"
  }, "iscriviti"))))))))));
};

const mapStateToProps = state => {
  return {
    newsletter: state.newsletter
  };
};

const mapDispatchToProps = dispatch => {
  let newsletterAction = new NewsletterAction["a" /* default */]();
  return {
    setContact: data => {
      dispatch(newsletterAction.setItem(data));
    },
    resetContact: () => {
      dispatch(newsletterAction.resetItem());
    },
    getClientIp: () => {
      dispatch(newsletterAction.getClientIp());
    },
    createContact: data => {
      dispatch(newsletterAction.sendinblue_createContact(data));
    }
  };
};

/* harmony default export */ var Partials_Newsletter = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(Newsletter));
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;













 // import HotelArchive from "~/components/Partials/HotelArchive";





const Index = props => {
  if (!props.page || props.page.length <= 0) {
    return pages_jsx(MainLayout["a" /* default */], {
      settings: {
        menu: props.menu
      }
    }, pages_jsx("div", null, "Data not found"));
  }

  external_react_default.a.useEffect(() => {
    props.query({
      hasEmptyPeriods: true,
      orderBy: 'order_seq',
      orderHow: 'asc',
      page: props.hotelSeatchParams.page,
      paginate: 4 //process.env.pagination.paginate

    });
  }, []); // React.useEffect(() => {
  //   setHotelLoading(props.hotelLoading)
  // },[props])
  // const [hotelLoading, setHotelLoading] = React.useState(props.hotelLoading);

  const [hotelBoxEnd, setHotelBoxEnd] = external_react_default.a.useState(0);

  function logit() {
    let scrollY = window.pageYOffset;
    let old_hotelBoxEnd = hotelBoxEnd;
    let new_hotelBoxEnd = document.getElementById('hotel-archive-end').offsetTop;
    setHotelBoxEnd(new_hotelBoxEnd);

    if (props.hotelLoading == 0 && scrollY > new_hotelBoxEnd - window.innerHeight) {
      // console.log('scroll', scrollY, hotelBoxEnd, new_hotelBoxEnd, props.hotelLoading)
      // setHotelLoading(1)
      props.loading(1);
      props.query({
        hasEmptyPeriods: true,
        orderBy: 'order_seq',
        orderHow: 'asc',
        page: props.hotelSeatchParams.page,
        paginate: 4 //process.env.pagination.paginate

      });
      window.scrollTo({
        top: old_hotelBoxEnd,
        behavior: 'smooth'
      });
    }
  }

  external_react_default.a.useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }

    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  return pages_jsx(MainLayout["a" /* default */], {
    settings: {
      template: "front-page",
      menu: props.menu
    },
    meta: {
      title: props.page.meta_title.it,
      description: props.page.meta_description.it,
      url: `${{"title":"Nextravel","url":"https://www.nextravel.it","image":"https://www.nextravel.it/default.jpg"}.url}`,
      // image: (props.page.media && props.page.media.gallery && props.page.media.gallery[0]) ? props.page.media.gallery[0].url : null
      image: props.page.media && props.page.media.thumbnails && props.page.media.thumbnails[0] ? props.page.media.thumbnails[0].url : null
    }
  }, props.hotels && props.hotels && pages_jsx(head_default.a, null, props.hotels && props.hotels && Object.entries(props.hotels).map(([key, hotel]) => pages_jsx("script", {
    key: `jobJSON-${hotel.id}`,
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(Object(JsonLdSchema["a" /* makeHotelSchema */])(hotel))
    }
  }))), pages_jsx("section", {
    className: "section-main section-first home"
  }, pages_jsx("div", {
    className: "container"
  }, pages_jsx("div", {
    className: "row"
  }, pages_jsx("div", {
    className: "col-lg-7"
  }, pages_jsx("div", {
    className: "primary-title"
  }, pages_jsx("h1", null, props.page.subtitle.it), pages_jsx("span", {
    style: {
      color: "#384044",
      textDecoration: "underline"
    }
  }, "Chiama! ", {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.phone.label))), pages_jsx("div", {
    className: "col-lg-4 col-offset-1"
  }, pages_jsx("div", {
    className: "primary-description"
  }, pages_jsx("div", {
    dangerouslySetInnerHTML: {
      __html: props.page.content.it
    }
  })))))), pages_jsx(BookingSearchBox["a" /* default */], {
    query: props.query,
    full: true
  }), pages_jsx("section", {
    className: "section-main"
  }, pages_jsx("div", {
    className: "container"
  }, pages_jsx("div", {
    className: "primary-title text-center"
  }, pages_jsx("h2", null, "Prenota la tua vacanza tra una vasta scelta di Hotel selezionati.")), pages_jsx("div", {
    className: "primary-description text-center"
  }, "Per qualsiasi informazione non esitare a contattarci allo", " ", pages_jsx("strong", null, {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.phone.label)))), pages_jsx(HotelArchive2["a" /* default */], {
    hotels: props.hotels ? props.hotels : []
  }), props.hotels && props.hotels.meta && parseInt(props.hotels.meta.to) < parseInt(props.hotels.meta.last_page) && pages_jsx("section", {
    className: "section-main"
  }, pages_jsx("div", {
    className: "container text-center"
  }, pages_jsx(link_default.a, {
    href: `${"/strutture-ricettive"}`,
    as: `${"/strutture-ricettive"}?page=2`
  }, pages_jsx("a", {
    className: "btn btn-more"
  }, "Carica le altre offerte")))), pages_jsx(Partials_HomeRecap, props), pages_jsx(Partials_Newsletter, null));
};

Index.getInitialProps = async ctx => {
  let menu = null; // let months = [];
  // let specials = [];
  // let locs = [];
  // let hotelCategories = [];

  let page = null;
  let busPage = null;
  let hotels = [];

  try {
    // initialProps = mainInitialProps();
    // let baseService = new BaseService();
    // let init = await baseService.initApp();
    // locs = init.locs || [];
    // hotelCategories = init.hotelCategories || [];
    // months = init.filterPages.months || [];
    // specials = init.filterPages.specials || [];
    let menuService = new MenuService["a" /* default */]();
    menu = await menuService.get(1);
    let postService = new PostService["a" /* default */]();
    page = await postService.get(1);
    busPage = await postService.get(3); // let hotelService = new HotelService();
    // hotels = await hotelService.query({
    //   hasEmptyPeriods: true,
    //   orderBy: 'order_seq',
    //   orderHow: 'asc',
    //   paginate: process.env.pagination.paginate
    // });
  } catch (e) {
    console.log('error', e);
  }

  return {
    params: ctx.params,
    query: ctx.query,
    menu,
    // specials,
    // locs,
    // hotelCategories,
    page,
    busPage // hotels

  };
}; // export default Index;


const pages_mapStateToProps = state => {
  return {
    hotelLoading: state.hotel.loading,
    hotelSeatchParams: state.hotel.params,
    hotels: state.hotel.items,
    hotelMeta: state.hotel.meta
  };
};

const pages_mapDispatchToProps = dispatch => {
  let hotelAction = new HotelAction["a" /* default */]();
  return {
    loading: state => {
      dispatch(hotelAction.loading(state));
    },
    query: data => {
      dispatch(hotelAction.query(data));
    }
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(pages_mapStateToProps, pages_mapDispatchToProps)(Index));

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "TvVg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jC1T");


class PostService extends _BaseService__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] {
  constructor() {
    super('/post/posts');
  }

}

/***/ }),

/***/ "V5Fq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PriceTable = props => {
  const prices = props.prices;
  let title = "";

  switch (props.treatment) {
    case 'RO':
      title = "Solo Camera";
      break;

    case 'BB':
      title = "Camera e Colazione";
      break;

    case 'HB':
      title = "Mezza Pensione";
      break;

    case 'FB':
      title = "Pensione Completa";
      break;

    case 'HBB':
      title = "Mezza Completa + Bevande";
      break;

    case 'FBB':
      title = "Pensione Completa + Bevande";
      break;

    case 'ALL_INCLUSIVE':
      title = "All inclusive";
      break;
  }

  return __jsx("div", {
    className: "prices-box-details",
    key: props.index
  }, __jsx("div", {
    className: "prices-top"
  }, __jsx("div", {
    className: "prices-details"
  }, __jsx("span", null, title, " / prezzi p.p.")), props.priceTableLink && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `${"/strutture-ricettive"}/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&room_type_id=${props.room_type ? props.room_type.id : ''}&treatment=${props.treatment}`,
    href: {
      pathname: `${"/strutture-ricettive"}/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        room_type_id: props.room_type ? props.room_type.id : null
      }
    }
  }, __jsx("a", {
    className: "prices-goto"
  }))), __jsx("table", {
    className: "prices-table"
  }, __jsx("thead", null, __jsx("tr", {
    className: "yes-smartphone"
  }, __jsx("th", {
    colSpan: "7"
  }, "notti")), __jsx("tr", null, __jsx("th", null, "1 ", __jsx("span", {
    className: "no-smartphone"
  }, "notti")), __jsx("th", null, "2 ", __jsx("span", {
    className: "no-smartphone"
  }, "notti")), __jsx("th", null, "3 ", __jsx("span", {
    className: "no-smartphone"
  }, "notti")), __jsx("th", null, "4 ", __jsx("span", {
    className: "no-smartphone"
  }, "notti")), __jsx("th", null, "5 ", __jsx("span", {
    className: "no-smartphone"
  }, "notti")), __jsx("th", null, "6 ", __jsx("span", {
    className: "no-smartphone"
  }, "notti")), __jsx("th", null, "7 ", __jsx("span", {
    className: "no-smartphone"
  }, "notti")))), __jsx("tbody", null, __jsx("tr", null, __jsx("td", null, prices.n1 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `${"/strutture-ricettive"}/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&room_type_id=${props.room_type ? props.room_type.id : ''}&treatment=${props.treatment}&nights=1`,
    href: {
      pathname: `${"/strutture-ricettive"}/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        room_type_id: props.room_type ? props.room_type.id : null,
        nights: 1
      }
    }
  }, __jsx("a", null, __jsx("span", {
    className: "no-smartphone"
  }, "\u20AC"), " ", prices.n1, ",-")), !prices.n1 && `-`), __jsx("td", null, prices.n2 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `${"/strutture-ricettive"}/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&room_type_id=${props.room_type ? props.room_type.id : ''}&treatment=${props.treatment}&nights=2`,
    href: {
      pathname: `${"/strutture-ricettive"}/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        room_type_id: props.room_type ? props.room_type.id : null,
        nights: 2
      }
    }
  }, __jsx("a", null, __jsx("span", {
    className: "no-smartphone"
  }, "\u20AC"), " ", prices.n2, ",-")), !prices.n2 && `-`), __jsx("td", null, prices.n3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `${"/strutture-ricettive"}/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&room_type_id=${props.room_type ? props.room_type.id : ''}&treatment=${props.treatment}&nights=3`,
    href: {
      pathname: `${"/strutture-ricettive"}/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        room_type_id: props.room_type ? props.room_type.id : null,
        nights: 3
      }
    }
  }, __jsx("a", null, __jsx("span", {
    className: "no-smartphone"
  }, "\u20AC"), " ", prices.n3, ",-")), !prices.n3 && `-`), __jsx("td", null, prices.n4 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `${"/strutture-ricettive"}/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&room_type_id=${props.room_type ? props.room_type.id : ''}&treatment=${props.treatment}&nights=4`,
    href: {
      pathname: `${"/strutture-ricettive"}/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        room_type_id: props.room_type ? props.room_type.id : null,
        nights: 4
      }
    }
  }, __jsx("a", null, __jsx("span", {
    className: "no-smartphone"
  }, "\u20AC"), " ", prices.n4, ",-")), !prices.n4 && `-`), __jsx("td", null, prices.n5 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `${"/strutture-ricettive"}/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&room_type_id=${props.room_type ? props.room_type.id : ''}&treatment=${props.treatment}&nights=5`,
    href: {
      pathname: `${"/strutture-ricettive"}/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        room_type_id: props.room_type ? props.room_type.id : null,
        nights: 5
      }
    }
  }, __jsx("a", null, __jsx("span", {
    className: "no-smartphone"
  }, "\u20AC"), " ", prices.n5, ",-")), !prices.n5 && `-`), __jsx("td", null, prices.n6 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `${"/strutture-ricettive"}/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&room_type_id=${props.room_type ? props.room_type.id : ''}&treatment=${props.treatment}&nights=6`,
    href: {
      pathname: `${"/strutture-ricettive"}/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        room_type_id: props.room_type ? props.room_type.id : null,
        nights: 6
      }
    }
  }, __jsx("a", null, __jsx("span", {
    className: "no-smartphone"
  }, "\u20AC"), " ", prices.n6, ",-")), !prices.n6 && `-`), __jsx("td", null, prices.n7 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `${"/strutture-ricettive"}/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&room_type_id=${props.room_type ? props.room_type.id : ''}&treatment=${props.treatment}&nights=7`,
    href: {
      pathname: `${"/strutture-ricettive"}/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        room_type_id: props.room_type ? props.room_type.id : null,
        nights: 7
      }
    }
  }, __jsx("a", null, __jsx("span", {
    className: "no-smartphone"
  }, "\u20AC"), " ", prices.n7, ",-")), !prices.n7 && `-`)))));
};

/* harmony default export */ __webpack_exports__["a"] = (PriceTable);

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XarN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jC1T");


class LocService extends _BaseService__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] {
  constructor() {
    super('/travelgo-one/locs');
  }

}

/***/ }),

/***/ "XvPD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pageLoaderConsts; });
const pageLoaderConsts = {
  SHOW: 'PAGE_LOADER_SHOW',
  HIDE: 'PAGE_LOADER_HIDE'
};

class PageLoaderActions {
  construct() {// this.alertMessageSuccess = this.alertMessageSuccess.bind(this);
    // this.alertMessageError = this.alertMessageError.bind(this);
    // this.alertMessageWarning = this.alertMessageWarning.bind(this);
  }

  static show() {
    return {
      type: pageLoaderConsts.SHOW,
      display: "block"
    };
  }

  static hide() {
    return {
      type: pageLoaderConsts.HIDE,
      display: "none"
    };
  }

}

/* harmony default export */ __webpack_exports__["a"] = (PageLoaderActions);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YRjj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alertMessageConsts; });
const alertMessageConsts = {
  ALERT_MESSAGE_SUCCESS: 'ALERT_MESSAGE_SUCCESS',
  ALERT_MESSAGE_ERROR: 'ALERT_MESSAGE_ERROR',
  ALERT_MESSAGE_WARNING: 'ALERT_MESSAGE_WARNING'
};

class AlertMessageAction {
  construct() {
    this.alertMessageSuccess = this.alertMessageSuccess.bind(this);
    this.alertMessageError = this.alertMessageError.bind(this);
    this.alertMessageWarning = this.alertMessageWarning.bind(this);
  }

  static alertMessageSuccess(message) {
    return {
      type: alertMessageConsts.ALERT_MESSAGE_SUCCESS,
      message: message
    };
  }

  static alertMessageError(message) {
    return {
      type: alertMessageConsts.ALERT_MESSAGE_ERROR,
      message: message
    };
  }

  static alertMessageWarning(message) {
    return {
      type: alertMessageConsts.ALERT_MESSAGE_WARNING,
      message: message
    };
  }

  static reset() {
    return {
      type: alertMessageConsts.ALERT_MESSAGE_SUCCESS,
      message: ""
    };
  }

}

/* harmony default export */ __webpack_exports__["b"] = (AlertMessageAction);

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "bxpL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hotelConsts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelAction; });
/* harmony import */ var _packages_BaseAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("sYsk");
/* harmony import */ var _packages_Base_actions_PageLoaderAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XvPD");
/* harmony import */ var _packages_Base_actions_AlertMessageAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YRjj");
/* harmony import */ var _services_HotelService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6Brv");




const hotelConsts = {
  LOADING: 'HOTEL_LIST_LOADING',
  ITEMS: 'HOTEL_LIST_ITEMS',
  RESET_ITEMS: 'HOTEL_LIST_RESET_ITEMS' // RESET_ITEM: 'PRACTICE_BY_GUEST_RESET_ITEM',
  // GET_CLIENT_IP: 'PRACTICE_BY_GUEST_GET_CLIENT_IP',
  // CREATE: 'PRACTICE_BY_GUEST_CREATE',

};
class HotelAction extends _packages_BaseAction__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
  constructor() {
    super();
    this.service = new _services_HotelService__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]();
    this.consts = hotelConsts;
  }

  loading(state) {
    return dispatch => {
      dispatch({
        type: this.consts.LOADING,
        loading: state
      });
    };
  }

  query(params) {
    return dispatch => {
      dispatch(_packages_Base_actions_PageLoaderAction__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].show());
      dispatch(this.loading(1));
      this.service.query(params).then(response => {
        dispatch({
          type: this.consts.ITEMS,
          items: response.data,
          meta: response.meta
        });
        dispatch(_packages_Base_actions_PageLoaderAction__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].hide()); // if( response.data.length > 0 )
        // console.log('response', response.meta.current_page, response.meta.per_page, (parseInt(response.meta.current_page) * parseInt(response.meta.per_page)))

        if (parseInt(response.meta.current_page) * parseInt(response.meta.per_page) <= parseInt(response.meta.total)) dispatch(this.loading(0));else dispatch(this.loading(1));
      }).catch(error => {
        dispatch({
          type: this.consts.RESET_ITEMS,
          items: [],
          meta: null
        });
        dispatch(_packages_Base_actions_PageLoaderAction__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].hide());
        dispatch(this.loading(0));
      });
    };
  }

}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eW3l":
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "hm/Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vhO2");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1nAM");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PriceTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("V5Fq");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





swiper__WEBPACK_IMPORTED_MODULE_4___default.a.use([swiper__WEBPACK_IMPORTED_MODULE_4__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_4__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_4__["Scrollbar"], swiper__WEBPACK_IMPORTED_MODULE_4__["A11y"]]);


const NavTab = props => {
  const index = props.index;
  let dateFrom = moment__WEBPACK_IMPORTED_MODULE_1___default()(props.period.date_from, 'YYYY-MM-DD');
  let dateTo = moment__WEBPACK_IMPORTED_MODULE_1___default()(props.period.date_to, 'YYYY-MM-DD');
  return __jsx("div", {
    key: index,
    className: `swiper-slide swiper-slide-${props.hotel.id}`
  }, __jsx("a", {
    className: `nav-item nav-link ${index == props.activeTab ? 'active' : ''}`,
    id: `nav-${props.hotel.id}-period-${index}-tab`,
    "data-toggle": "tab",
    href: `#nav-${props.hotel.id}-period-${index}`,
    role: "tab",
    "aria-controls": `nav-${props.hotel.id}-period-${index}`,
    "aria-selected": "true",
    onClick: () => props.onActivateTab(index)
  }, __jsx("span", null, dateFrom.format('DD/MM'), __jsx("br", null), dateTo.format('DD/MM')), __jsx("i", {
    className: "ico ico-arrow-curved"
  })));
};

const NavContent = props => {
  const index = props.index;
  let priceList = {}; // if( !props.period.viewPeriodPrices || props.period.viewPeriodPrices.length <= 0)
  //   return;

  for (const [roomTypeName, roomTypeContent] of Object.entries(props.period.viewPeriodPrices)) {
    priceList[roomTypeName] = {};

    if (roomTypeContent.prices) {
      for (const [key, treatmentObj] of Object.entries(roomTypeContent.prices)) {
        priceList[roomTypeName][key] = {
          n1: treatmentObj.n1 ? treatmentObj.n1 : null,
          n2: treatmentObj.n2 ? treatmentObj.n2 : null,
          n3: treatmentObj.n3 ? treatmentObj.n3 : null,
          n4: treatmentObj.n4 ? treatmentObj.n4 : null,
          n5: treatmentObj.n5 ? treatmentObj.n5 : null,
          n6: treatmentObj.n6 ? treatmentObj.n6 : null,
          n7: treatmentObj.n7 ? treatmentObj.n7 : null
        };
      }
    }
  }

  return __jsx("div", {
    className: `tab-pane fade ${index == 0 ? 'show active' : ''}`,
    id: `nav-${props.hotel.id}-period-${index}`,
    role: "tabpanel",
    "aria-labelledby": `nav-${props.hotel.id}-period-${index}-tab`
  }, props.period.viewPeriodPrices && Object.entries(props.period.viewPeriodPrices).map(([roomType, roomTypeContent], index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: index
  }, roomTypeContent.prices && Object.entries(roomTypeContent.prices).map(([treatment, prices], index2) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: index2
  }, __jsx("div", null, __jsx("span", {
    style: {
      color: '#4fbaad'
    }
  }, roomTypeContent.room_type.name)), __jsx(_PriceTable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] // key={index2}
  , {
    index: index,
    room_type: roomTypeContent.room_type,
    treatment: treatment,
    prices: prices,
    hotel: props.hotel,
    period: props.period,
    priceTableLink: true
  }))))));
};

const HotelArchiveItem = props => {
  const hotel = props.hotel;
  const swiperPrices = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  let stars = [];

  for (let i = 1; i <= parseInt(hotel.stars); i++) {
    stars.push(__jsx("i", {
      key: i,
      className: "ico ico-star"
    }));
  }

  const [activeTab, setActiveTab] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);

  const onActivateTab = index => {
    setActiveTab(index);
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    swiperPrices.current = new swiper__WEBPACK_IMPORTED_MODULE_4__["Swiper"](`#swiperPrices-${hotel.id}`, {
      grubCursor: false,
      simulateTouch: false,
      direction: 'horizontal',
      //speed: 600,
      // slidesPerView: 4,
      spaceBetween: 0,
      breakpoints: {
        1: {
          slidesPerView: 1
        },
        320: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4
        }
      },
      navigation: {
        nextEl: `#swiperPrices-${hotel.id}-button-next`,
        prevEl: `#swiperPrices-${hotel.id}-button-prev`
      }
    });
  }, []); // React.useEffect(() => {
  //   if( swiperPrices && swiperPrices.current )
  //     swiperPrices.current.update()
  // }, [activeTab])

  return __jsx("div", {
    className: "hotel-list-item"
  }, __jsx("a", {
    href: `${"/strutture-ricettive"}/${props.hotel.slug.it}`,
    rel: "nofollow"
  }, __jsx("div", {
    className: "topline"
  }, __jsx("div", {
    className: "title mr-auto"
  }, hotel.name), __jsx("div", {
    className: "stars ml-auto"
  }, stars))), __jsx("a", {
    href: `${"/strutture-ricettive"}/${props.hotel.slug.it}`,
    rel: "nofollow"
  }, __jsx("figure", {
    className: "img-bgas"
  }, __jsx("img", {
    src: hotel.media && hotel.media.gallery && hotel.media.gallery[0] ? hotel.media.gallery[0].url : 'default',
    alt: hotel.media && hotel.media.gallery && hotel.media.gallery[0] && hotel.media.gallery[0].name
  }))), __jsx("div", {
    className: "prices-box"
  }, hotel.rateplanPeriods && hotel.rateplanPeriods.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    style: {
      width: "100% !important"
    }
  }, __jsx("div", {
    className: "nav nav-tabs",
    id: "nav-tab-1",
    role: "tablist",
    style: {
      width: "100% !important"
    }
  }, __jsx("div", {
    id: `swiperPrices-${hotel.id}`,
    className: "swiper-container swiperPrices",
    style: {
      width: "100% !important"
    }
  }, __jsx("div", {
    className: "swiper-wrapper",
    style: {
      width: "100% !important"
    }
  }, hotel.rateplanPeriods.map((period, index) => __jsx(NavTab, {
    key: index,
    index: index,
    period: period,
    hotel: hotel,
    activeTab: activeTab,
    onActivateTab: () => onActivateTab(index)
  })))), __jsx("div", {
    id: `swiperPrices-${hotel.id}-button-prev`,
    className: "swiper-button-prev"
  }), __jsx("div", {
    id: `swiperPrices-${hotel.id}-button-next`,
    className: "swiper-button-next"
  }))), __jsx("div", {
    className: "tab-content",
    id: "nav-tabContent-1"
  }, hotel.rateplanPeriods.map((period, index) => __jsx(NavContent, {
    key: index,
    index: index,
    hotel: hotel,
    period: period
  })))), !hotel.rateplanPeriods || hotel.rateplanPeriods.length <= 0 && __jsx("div", {
    style: {
      height: 70
    }
  }), __jsx("div", {
    className: "details"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-4"
  }, __jsx("div", {
    className: "description"
  }, __jsx("span", {
    className: "bold"
  }, "POSIZIONE"), __jsx("br", null), hotel.details.address, __jsx("br", null), hotel.details.zip_code, " - ", hotel.details.city, __jsx("br", null), "\u2014", __jsx("br", null), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: hotel.description_near.it
    }
  }))), __jsx("div", {
    className: "col-8"
  }, __jsx("ul", {
    className: "hotel-service-list"
  }, hotel.incServices && hotel.incServices.length > 0 && hotel.incServices.map((obj, index) => __jsx("li", {
    key: index
  }, __jsx("span", null, obj.name))))))), __jsx("div", {
    className: "bottomline"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-8"
  }, __jsx("div", {
    className: "line"
  })), __jsx("div", {
    className: "col-4"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `${"/strutture-ricettive"}/${props.hotel.slug.it}`,
    href: {
      pathname: `${"/strutture-ricettive"}/[accommodition]`
    }
  }, __jsx("a", {
    className: "goto"
  }, "Visualizza la struttura")))))));
};

const HotelPagination = props => {
  const [currPage, setCurrPage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (props.meta) {
      setCurrPage(parseInt(props.meta.current_page) - 1);
    }
  }, []);

  const handlePageClick = e => {
    props.filter.page = e.selected + 1;
    let stringa = '?';

    for (let i in props.filter) stringa += `${i}=${props.filter[i]}&`;

    window.location.href = window.location.pathname + stringa;
  };

  if (props.meta) {
    return __jsx(react_paginate__WEBPACK_IMPORTED_MODULE_3___default.a, {
      forcePage: currPage,
      previousLabel: "<",
      nextLabel: ">",
      breakLabel: "...",
      breakClassName: "break-me",
      pageCount: props.meta.last_page,
      marginPagesDisplayed: 2,
      pageRangeDisplayed: 5,
      onPageChange: e => handlePageClick(e),
      containerClassName: "pagination",
      subContainerClassName: "pages pagination",
      activeClassName: "active"
    });
  }

  return '';
};

const HotelArchive = props => {
  return __jsx("section", {
    id: "hotel-archive"
  }, __jsx("div", {
    className: "container"
  }, props.hotels && props.hotels.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row"
  }, props.hotels.map((hotel, index) => __jsx("div", {
    key: index,
    className: "col-md-6"
  }, __jsx(HotelArchiveItem, {
    hotel: hotel
  })))), __jsx(HotelPagination, props)), !props.hotels || props.hotels.length <= 0 && __jsx("div", null, "Nessun risultato")), __jsx("div", {
    id: "hotel-archive-end"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (HotelArchive);

/***/ }),

/***/ "jC1T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eW3l");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class BaseService {
  constructor(url) {
    this.url = `${"https://www.nextravel.it/api/v1"}` + (url ? url : '');
    this.config = {
      headers: {// API_KEY: '$2y$10$zgrnhniFfgWCIkTqUNmBJeJkre2AY3s7FXf8EIqdSzFodKK3uM7Jy',
      }
    };
  }

  checkAuthApi(json) {
    let token = Cookies.get('access_token') || null;

    if (token) {
      if (json) return {
        headers: {
          // ...API.headers,
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };else return {
        headers: {
          // ...API.headers,
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      };
    } else {
      if (json) {
        return {
          headers: {
            'Content-Type': 'application/json'
          }
        };
      } else {
        return {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        };
      }
    }
  }

  initApp() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.url + '/travelgo-one/frontend/initialize', this.config).then(response => {
      return Promise.resolve(response.data);
    }).catch(error => {
      return Promise.reject(error);
    });
  } // all(params){
  //   return axios.get(this.url, { params }, this.config)
  //   .then(response => {
  //     return Promise.resolve(response.data.data);
  //   })
  //   .catch(error => {
  //     return Promise.reject(error);
  //   });
  // }


  all(params) {
    // let config = this.checkAuthApi();
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.url, {
      params,
      paramsSerializer: function (params) {
        return qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params, {
          encode: false
        });
      } // ...config

    }).then(response => {
      return Promise.resolve(response.data.data);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  get(id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.url}/${id}`, this.config).then(response => {
      return Promise.resolve(response.data.data);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  getBySlug(slug) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.url}/by-slug/${slug}`, this.config).then(response => {
      return Promise.resolve(response.data.data);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  search(params) {
    let config = this.checkAuthApi();
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.url, _objectSpread({
      params,
      paramsSerializer: function (params) {
        return qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params, {
          encode: false
        });
      }
    }, config)).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  load(id) {
    let config = this.checkAuthApi();
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.url}/${id}`, config).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  createPost(postData) {
    let config = this.checkAuthApi();
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.url, postData, config).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  create(postData) {
    let config = this.checkAuthApi('json');
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.url, postData, config).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  update(id, postData) {
    let config = this.checkAuthApi('json');
    config = _objectSpread(_objectSpread({}, config), {}, {
      onUploadProgress: progressEvent => console.log(progressEvent.loaded)
    });
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(this.url + '/' + id, postData, config).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  updatePost(id, postData) {
    let config = this.checkAuthApi();
    postData.append('_method', 'PUT');
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.url + '/' + id, postData, config).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  remove(id) {
    let config = this.checkAuthApi();
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(this.url + '/' + id, _objectSpread({}, config)).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  updateFields(id, postData) {
    let config = this.checkAuthApi('json'); // config.headers = {
    //   ...config.headers,
    //   'Content-type' : 'application/form-url-encode'
    // }
    // postData['_method'] = 'PUT';

    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(this.url + '/update-fields/' + id, postData, config).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

}

/***/ }),

/***/ "mI8k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ newsletterConsts; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ NewsletterAction_NewsletterAction; });

// EXTERNAL MODULE: ./packages/BaseAction.js
var BaseAction = __webpack_require__("sYsk");

// EXTERNAL MODULE: ./packages/Base/actions/PageLoaderAction.js
var PageLoaderAction = __webpack_require__("XvPD");

// EXTERNAL MODULE: ./packages/Base/actions/AlertMessageAction.js
var AlertMessageAction = __webpack_require__("YRjj");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./packages/BaseService.js
var BaseService = __webpack_require__("jC1T");

// CONCATENATED MODULE: ./packages/TravelgoOne/services/NewsletterService.js


class NewsletterService_NewsletterService extends BaseService["a" /* default */] {
  constructor() {
    super('/newsletter');
  }

  getClientIp() {
    // return axios.get("https://ifconfig.co/ip", this.config)
    return external_axios_default.a.get(`/get-client-ip`, this.config).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  sendinblue_createContact(params) {
    return external_axios_default.a.post(`${this.url}/sendinblue/contacts`, params, this.config).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

}
// CONCATENATED MODULE: ./packages/TravelgoOne/actions/NewsletterAction.js




const newsletterConsts = {
  SET_ITEM: 'NEWSLETTER_SET_ITEM',
  RESET_ITEM: 'NEWSLETTER_RESET_ITEM',
  GET_CLIENT_IP: 'NEWSLETTER_GET_CLIENT_IP',
  SENDINBLUE_CREATE_CONTACT: 'NEWSLETTER_SENDINBLUE_CREATE_CONTACT'
};
class NewsletterAction_NewsletterAction extends BaseAction["a" /* default */] {
  constructor() {
    super();
    this.service = new NewsletterService_NewsletterService();
    this.consts = newsletterConsts;
  }

  setItem(item) {
    return dispatch => {
      dispatch({
        type: this.consts.SET_ITEM,
        item: item
      });
    };
  }

  resetItem() {
    return dispatch => {
      dispatch({
        type: this.consts.RESET_ITEM
      });
    };
  }

  getClientIp() {
    return dispatch => {
      this.service.getClientIp().then(response => {
        dispatch({
          type: this.consts.GET_CLIENT_IP,
          clientIp: response.data.clientIp
        });
      }).catch(error => {});
    };
  }

  sendinblue_createContact(params) {
    return dispatch => {
      dispatch(PageLoaderAction["a" /* default */].show());
      this.service.sendinblue_createContact(params).then(response => {
        dispatch(this.resetItem());
        dispatch(AlertMessageAction["b" /* default */].alertMessageSuccess('Ti ringraziamo per esserti registrato alla newsletter. Ti terremo aggiornati sulle nostre offerte.'));
        dispatch(PageLoaderAction["a" /* default */].hide());
      }).catch(error => {
        dispatch(AlertMessageAction["b" /* default */].alertMessageError(error.response.data.meta.message)); // dispatch(AlertMessageAction.alertMessageError("Errore dura"))

        dispatch(PageLoaderAction["a" /* default */].hide());
      });
    };
  }

}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "sYsk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseAction; });
// import AlertMessageActions from 'actions/AlertMessageActions';
// import PageLoaderActions from 'actions/PageLoaderActions';
class BaseAction {
  constructor() {
    this.service = null;
    this.consts = null;
    this.redirect = null;
  }

  all(filter, count) {
    return dispatch => {
      // dispatch(PageLoaderActions.show());
      this.service.search(filter, count).then(response => {
        dispatch({
          type: this.consts.SEARCHED,
          items: response.data.data,
          totItems: response.data.meta.total
        }); // dispatch(PageLoaderActions.hide());
      }).catch(error => {// dispatch(PageLoaderActions.hide());
        // if( error.response && error.response.data && error.response.data.meta )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
        // else if( error.response && error.response.data && error.response.data.message )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
        // else
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
      });
    };
  }

  get(id) {
    return dispatch => {
      // dispatch(PageLoaderActions.show());
      this.service.load(id).then(response => {
        dispatch({
          type: this.consts.LOADED,
          item: response.data.data
        }); // dispatch(PageLoaderActions.hide());
      }).catch(error => {// dispatch(PageLoaderActions.hide());
        // if( error.response && error.response.data && error.response.data.meta )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
        // else if( error.response && error.response.data && error.response.data.message )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
        // else
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
      });
    };
  }

  createPost(postData, ownProps) {
    return dispatch => {
      // dispatch(PageLoaderActions.show());
      this.service.createPost(postData).then(response => {
        dispatch({
          type: this.consts.CREATED,
          item: response.data.data
        }); // dispatch(PageLoaderActions.hide());
        // dispatch(AlertMessageActions.alertMessageSuccess(response.data.meta.message));
        // let postype = this.getQueryString(ownProps.location, 'post_type');
        // let redirect = this.redirect + '/' + response.data.data.id + ((postype) ? '?post_type='+postype : '');
        // ownProps.history.push(redirect);
      }).catch(error => {// dispatch(PageLoaderActions.hide());
        // if( error.response && error.response.data && error.response.data.meta )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
        // else if( error.response && error.response.data && error.response.data.message )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
        // else
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
      });
    };
  }

  create(postData, ownProps) {
    return dispatch => {
      // dispatch(PageLoaderActions.show());
      this.service.create(postData).then(response => {
        dispatch({
          type: this.consts.CREATED,
          item: response.data.data
        }); // dispatch(PageLoaderActions.hide());
        // dispatch(AlertMessageActions.alertMessageSuccess(response.data.meta.message));
        // let postype = this.getQueryString(ownProps.location, 'post_type');
        // let redirect = this.redirect + '/' + response.data.data.id + ((postype) ? '?post_type='+postype : '');
        // ownProps.history.push(redirect);
      }).catch(error => {// dispatch(PageLoaderActions.hide());
        // if( error.response && error.response.data && error.response.data.meta )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
        // else if( error.response && error.response.data && error.response.data.message )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
        // else
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
      });
    };
  }

  updatePost(id, postData, ownProps) {
    return dispatch => {
      // dispatch(PageLoaderActions.show());
      this.service.updatePost(id, postData).then(response => {
        dispatch({
          type: this.consts.UPDATED,
          item: response.data.data
        }); // dispatch(PageLoaderActions.hide());
        // dispatch(AlertMessageActions.alertMessageSuccess(response.data.meta.message));
        // let postype = this.getQueryString(ownProps.location, 'post_type');
        // let redirect = this.redirect + '/' + response.data.item.id + ((postype) ? '?post_type='+postype : '');
        // ownProps.history.push(redirect);

        dispatch(this.load(id));
      }).catch(error => {// dispatch(PageLoaderActions.hide());
        // if( error.response && error.response.data && error.response.data.meta )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
        // else if( error.response && error.response.data && error.response.data.message )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
        // else
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
      });
    };
  }

  update(id, postData, ownProps) {
    return dispatch => {
      // dispatch(PageLoaderActions.show());
      this.service.update(id, postData).then(response => {
        dispatch({
          type: this.consts.UPDATED,
          item: response.data.data
        }); // dispatch(PageLoaderActions.hide());
        // dispatch(AlertMessageActions.alertMessageSuccess(response.data.meta.message));
        // dispatch(this.load(id));
      }).catch(error => {// dispatch(PageLoaderActions.hide());
        // if( error.response && error.response.data && error.response.data.meta )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
        // else if( error.response && error.response.data && error.response.data.message )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
        // else
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
      });
    };
  }

  remove(id) {
    return dispatch => {
      // dispatch(PageLoaderActions.show());
      this.service.remove(id).then(response => {
        dispatch({
          type: this.consts.REMOVED // item: response.data.item

        }); // dispatch(AlertMessageActions.alertMessageSuccess(response.data.message));
        // dispatch(PageLoaderActions.hide());
      }).catch(error => {// dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
        // dispatch(PageLoaderActions.hide());
      });
    };
  }

  removeOnList(id, searchParams, searchCount) {
    return dispatch => {
      // dispatch(PageLoaderActions.show());
      this.service.remove(id).then(response => {
        dispatch({
          type: this.consts.REMOVED // item: response.data.item

        }); // dispatch(this.search(searchParams, searchCount));
        // dispatch(AlertMessageActions.alertMessageSuccess(response.data.message));
        // dispatch(PageLoaderActions.hide());
      }).catch(error => {// dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
        // dispatch(PageLoaderActions.hide());
      });
    };
  }

  updateFields(id, postData, searchParams, searchCount) {
    return dispatch => {
      // dispatch(PageLoaderActions.show());
      this.service.updateFields(id, postData).then(response => {
        dispatch({
          type: this.consts.UPDATED,
          item: response.data.data
        }); // dispatch(this.search(searchParams, searchCount));
        // dispatch(AlertMessageActions.alertMessageSuccess(response.data.meta.message));
        // dispatch(PageLoaderActions.hide());
      }).catch(error => {// if( error.response && error.response.data && error.response.data.meta )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
        // else if( error.response && error.response.data && error.response.data.message )
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
        // else
        // 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
        // dispatch(PageLoaderActions.hide());
      });
    };
  }

}

/***/ }),

/***/ "vhO2":
/***/ (function(module, exports) {

module.exports = require("react-paginate");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });