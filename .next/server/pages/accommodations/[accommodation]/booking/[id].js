module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "3TA0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_BaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("jC1T");
/* harmony import */ var _packages_Post_services_MenuService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("57t+");
/* harmony import */ var _packages_Post_services_PostService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("TvVg");
/* harmony import */ var _packages_TravelgoOne_services_HotelService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6Brv");
/* harmony import */ var _packages_TravelgoOne_services_RateplanPeriodService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("N6Bt");
/* harmony import */ var _components_Layouts_MainLayout_MainLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("JHTH");
/* harmony import */ var _components_Partials_BookingSearchBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("8Mm2");
/* harmony import */ var _components_Partials_BookingForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("8Otk");
/* harmony import */ var _components_Partials_PriceTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("V5Fq");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const BookingPage = props => {
  console.log('props booking page', props);

  if (!props.hotel || props.hotel.length <= 0) {
    return __jsx(_components_Layouts_MainLayout_MainLayout__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      settings: {
        menu: props.menu
      }
    }, __jsx("div", null, "Data not found"));
  }

  const period = props.period;
  const hotel = props.hotel;
  let dateFrom = moment__WEBPACK_IMPORTED_MODULE_1___default()(period.date_from, "YYYY-MM-DD");
  let dateTo = moment__WEBPACK_IMPORTED_MODULE_1___default()(period.date_to, "YYYY-MM-DD");
  let stars = [];

  for (let i = 1; i <= parseInt(hotel.stars); i++) {
    stars.push(__jsx("i", {
      key: i,
      className: "ico ico-star"
    }));
  }

  let priceList = {};

  for (const [key, treatmentObj] of Object.entries(props.period.viewPrices)) {
    priceList[key] = {
      n1: treatmentObj.n1 ? treatmentObj.n1 : null,
      n2: treatmentObj.n2 ? treatmentObj.n2 : null,
      n3: treatmentObj.n3 ? treatmentObj.n3 : null,
      n4: treatmentObj.n4 ? treatmentObj.n4 : null,
      n5: treatmentObj.n5 ? treatmentObj.n5 : null,
      n6: treatmentObj.n6 ? treatmentObj.n6 : null,
      n7: treatmentObj.n7 ? treatmentObj.n7 : null
    };
  }

  return __jsx(_components_Layouts_MainLayout_MainLayout__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    settings: {
      template: "booking-page",
      menu: props.menu
    },
    meta: {
      title: `Booking ${props.hotel.meta_title.it}`,
      description: `Booking`,
      url: `${{"title":"NextTravel","url":"https://www.nextravel.it","image":"https://www.nextravel.it/default.jpg"}.url}/accommodations/${props.page.slug.it}/booking`,
      image: props.hotel.media && props.hotel.media.gallery && props.hotel.media.gallery[0] ? props.hotel.media.gallery[0].url : null
    }
  }, __jsx(_components_Partials_BookingSearchBox__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null), __jsx("section", {
    className: "single-hotel-section"
  }, __jsx("div", {
    className: "container"
  }, __jsx("figure", {
    className: "img-bgas"
  }, __jsx("img", {
    src: hotel.media && hotel.media.gallery && hotel.media.gallery[0] ? hotel.media.gallery[0].url : 'default',
    alt: hotel.media && hotel.media.gallery && hotel.media.gallery[0] && hotel.media.gallery[0].name
  })), __jsx("div", {
    className: "topline"
  }, __jsx("div", {
    className: "title mr-auto"
  }, __jsx("h1", null, hotel.name), __jsx("div", {
    className: "stars"
  }, stars)), __jsx("div", {
    className: "single-hotel-call ml-auto"
  }, "chiama!\xA0", __jsx("span", {
    className: "bold"
  }, {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.phone.label))))), __jsx("section", {
    className: "single-hotel-section"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "hotel-booking-box"
  }, __jsx("div", {
    className: "box1"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6"
  }, priceList && Object.entries(priceList).map(([treatment, prices], index) => __jsx("div", {
    className: "prices-box",
    key: index
  }, __jsx(_components_Partials_PriceTable__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    key: index,
    index: index,
    treatment: treatment,
    prices: prices,
    hotel: hotel,
    period: period
  })))), __jsx("div", {
    className: "col-lg-4 offset-lg-2"
  }, __jsx("div", {
    className: "description"
  }, __jsx("div", {
    className: "row mb-5"
  }, __jsx("div", {
    className: "col-lg-6"
  }, "Offerta n. ", period.id), __jsx("div", {
    className: "col-lg-6"
  }, "dal ", dateFrom.format("DD/MM/YYYY"), __jsx("br", null), "al ", dateTo.format("DD/MM/YYYY"))), "per ulteriori informazioni contattaci a", __jsx("br", null), __jsx("span", {
    className: "bold"
  }, {"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}.email.label))))), console.log('props query', props.query), __jsx(_components_Partials_BookingForm__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    rateplan: props.period.rateplan || null,
    hotel: props.period.rateplan.hotel || null,
    query: props.query,
    priceList: priceList
  })))), __jsx("section", {
    className: "section-main single-hotel-section"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-3"
  }, __jsx("div", {
    className: "content-box content-box-1"
  }, __jsx("div", {
    className: "titoletto"
  }, "posizione"), __jsx("div", {
    className: "description"
  }, hotel.details.address, __jsx("br", null), hotel.details.zip_code, " ", hotel.details.city, " (", hotel.details.state, ")"), __jsx("div", {
    className: "titoletto"
  }, "distanze"), __jsx("div", {
    className: "description"
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: hotel.description_near.it
    }
  })), __jsx("ul", {
    className: "hotel-service-list"
  }, hotel.incServices && hotel.incServices.length > 0 && hotel.incServices.map((obj, index) => __jsx("li", {
    key: index
  }, __jsx("span", null, obj.name)))))), __jsx("div", {
    className: "col-lg-4"
  }, __jsx("div", {
    className: "content-box content-box-2"
  }, __jsx("div", {
    className: "description"
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: hotel.description_short.it
    }
  })))), __jsx("div", {
    className: "col-lg-5"
  }, __jsx("div", {
    className: "content-box content-box-3"
  }, __jsx("div", {
    className: "description"
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: hotel.description_short.it
    }
  }))))))));
};

BookingPage.getInitialProps = async params => {
  let locs = [];
  let hotelCategories = [];
  let menu = null;
  let page = null;
  let hotel = null;
  let period = null;
  let query = {
    checkin: params.query.checkin || null,
    checkout: params.query.checkout || null,
    treatment: params.query.treatment || null,
    nights: params.query.nights || null
  };

  try {
    let baseService = new _packages_BaseService__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]();
    let init = await baseService.initApp();
    locs = init.locs || [];
    hotelCategories = init.hotelCategories || [];
    let menuService = new _packages_Post_services_MenuService__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]();
    menu = await menuService.get(1);
    let rateplanPeriodService = new _packages_TravelgoOne_services_RateplanPeriodService__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]();
    period = await rateplanPeriodService.get(params.query.id);

    if (period && period.rateplan && period.rateplan.hotel) {
      hotel = period.rateplan.hotel;
    }
  } catch (e) {}

  return {
    query,
    locs,
    hotelCategories,
    menu,
    page,
    hotel,
    period
  };
};

/* harmony default export */ __webpack_exports__["default"] = (BookingPage);

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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3TA0");


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
  console.log('booking search props', props);
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
        href: "/offerte/[slug]",
        as: `/offerte/${now.format('MMMM').toLowerCase()}`
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
    var url = "/accommodations?";

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
    href: "/offerte/[slug]",
    as: `/offerte/${obj.slug.it}`
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

/***/ "8Otk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: ./packages/TravelgoOne/actions/PracticeByGuestAction.js + 2 modules
var PracticeByGuestAction = __webpack_require__("p54a");

// EXTERNAL MODULE: external "react-bootstrap-daterangepicker"
var external_react_bootstrap_daterangepicker_ = __webpack_require__("KPCs");
var external_react_bootstrap_daterangepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_bootstrap_daterangepicker_);

// CONCATENATED MODULE: ./components/MyDateRangePicker.js
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MyDateRangePicker = props => {
  const [state, setState] = external_react_default.a.useState({
    startDate: props.startDate ? external_moment_default()(props.startDate, "YYYY-MM-DD") : external_moment_default()(),
    endDate: props.endDate ? external_moment_default()(props.endDate, "YYYY-MM-DD") : external_moment_default()().add('2 days')
  });

  const onApply = (event, picker) => {
    props.onChange(picker.startDate, picker.endDate);
    setState({
      startDate: picker.startDate,
      endDate: picker.endDate
    });
  };

  external_react_default.a.useEffect(() => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      startDate: props.startDate ? external_moment_default()(props.startDate, "YYYY-MM-DD") : external_moment_default()(),
      endDate: props.endDate ? external_moment_default()(props.endDate, "YYYY-MM-DD") : external_moment_default()().add('2 days')
    }));
  }, [props]);

  const onChange = e => {
    // non fare nulla
    console.log(e.target.value);
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx(external_react_bootstrap_daterangepicker_default.a, {
    minDate: external_moment_default()().format('YYYY-MM-DD'),
    startDate: state.startDate,
    endDate: state.endDate,
    autoApply: true,
    onApply: (event, picker) => onApply(event, picker)
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "",
    name: "",
    placeholder: "Checkin",
    value: state.startDate.format('DD/MM/YYYY') + ' - ' + state.endDate.format('DD/MM/YYYY') || '',
    onchange: e => onChange(e)
  })));
};

/* harmony default export */ var components_MyDateRangePicker = (MyDateRangePicker);
// CONCATENATED MODULE: ./components/Partials/BookingForm.js
var BookingForm_jsx = external_react_default.a.createElement;

function BookingForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BookingForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BookingForm_ownKeys(Object(source), true).forEach(function (key) { BookingForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BookingForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BookingForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const BookingForm = props => {
  /**
   * ComponentDidUpdate
   */
  external_react_default.a.useEffect(() => {
    console.log('componentDidUpdate', props.practice, props.query);
    let newState = Object.assign({}, props.practice);
    props.setPractice(BookingForm_objectSpread(BookingForm_objectSpread({}, newState), {}, {
      hotel_id: props.hotel.id,
      rate_plan_id: props.rateplan.id,
      checkin: props.query.checkin || null,
      checkout: props.query.checkout || null,
      treatment: props.query.treatment || null
    }));
  }, [props.query]);

  const onChange = e => {
    e.persist();
    let newState = Object.assign({}, props.practice);

    switch (e.target.name) {
      case 'privacy':
        newState[e.target.name] = e.target.checked ? 1 : 0;
        break;

      case 'first_name':
      case 'last_name':
      case 'email':
      case 'mobile':
        newState.customer[e.target.name] = e.target.value;
        break;

      default:
        newState[e.target.name] = e.target.value;
        break;
    }

    props.setPractice(newState);
  };

  const onChangeDatePicker = (startDate, endDate) => {
    let newState = Object.assign({}, props.practice);
    newState.checkin = startDate.format('YYYY-MM-DD');
    newState.checkout = endDate.format('YYYY-MM-DD');
    props.setPractice(newState);
  };
  /**
   * Room
   */


  const onAddRoom = () => {
    let newState = Object.assign({}, props.practice);
    newState.rooms.push({
      adults: 2,
      childrens: 0,
      childrenAges: []
    });
    props.setPractice(newState);
  };

  const onDeleteRoom = index => {
    let newState = Object.assign({}, props.practice);
    newState.rooms.splice(index, 1);
    props.setPractice(newState);
  };

  const onAddRoomChildren = (e, index) => {
    let newState = Object.assign({}, props.practice);
    newState.rooms[index].childrenAges.push(e.target.value);
    newState.rooms[index].childrenAges.sort();
    props.setPractice(newState);
  };

  const onChangeRoom = (e, index) => {
    e.persist();
    let newState = Object.assign({}, props.practice);

    switch (e.currentTarget.dataset.name) {
      case "childrens":
        if (parseInt(e.currentTarget.value) == 0) {
          // reset childrenAges
          newState.rooms[index].childrenAges = [];
        } else if (newState.rooms[index].childrens > parseInt(e.currentTarget.value)) {
          // rimuovo gli utlimi elementi
          newState.rooms[index].childrenAges.splice(e.currentTarget.value);
        } else {
          // aggiungo age con valore 0
          for (let j = newState.rooms[index].childrens; j < parseInt(e.currentTarget.value); j++) newState.rooms[index].childrenAges.push(-1);
        }

        newState.rooms[index].childrens = e.currentTarget.value;
        break;

      case "ageChildrens":
        let indexChild = e.currentTarget.dataset.index;
        newState.rooms[index].childrenAges[indexChild] = e.currentTarget.value;
        newState.rooms[index].childrenAges.sort(function (a, b) {
          return b - a;
        }); // sort desc

        break;

      default:
        newState.rooms[index][e.currentTarget.dataset.name] = e.currentTarget.value;
        break;
    }

    props.setPractice(newState);
  };
  /**
   * Submit
   */


  const handleSubmit = () => {
    props.createPractice(props.practice);
  };
  /**
   * Validate
   */


  const formik = Object(external_formik_["useFormik"])({
    initialValues: {
      // checkin: props.checkin || "",
      // checkout: props.practice.checkout || "",
      treatment: props.practice.treatment || "",
      first_name: props.practice.customer.first_name || "",
      last_name: props.practice.customer.last_name || "",
      email: props.practice.customer.email || "",
      mobile: props.practice.customer.mobile || "",
      privacy: props.practice.privacy || 0
    },
    validationSchema: external_yup_["object"]().shape({
      // checkin: yup.string().required('Campo non valido'),
      // checkout: yup.string().required('Campo non valido'),
      treatment: external_yup_["string"]().required('Campo non valido'),
      first_name: external_yup_["string"]().required('Campo non valido'),
      last_name: external_yup_["string"]().required('Campo non valido'),
      email: external_yup_["string"]().required('Campo non valido'),
      mobile: external_yup_["string"]().required('Campo non valido'),
      privacy: external_yup_["number"]().min(1, 'Campo non valido').max(1, 'Campo non valido')
    }),
    enableReinitialize: true,
    onSubmit: handleSubmit
  });
  /**
   * Render
   */

  const renderRooms = () => {
    let _html = [];

    for (let i in props.practice.rooms) {
      // adults
      var _htmlAdultOptions = [];

      _htmlAdultOptions.push(BookingForm_jsx("option", {
        key: 0,
        value: "0"
      }, "Adulti"));

      for (var j = 1; j <= 4; j++) {
        _htmlAdultOptions.push(BookingForm_jsx("option", {
          key: j,
          value: j
        }, j));
      } // childrens


      var _htmlChildrenOptions = [];

      _htmlChildrenOptions.push(BookingForm_jsx("option", {
        key: 0,
        value: "0"
      }, "Bambini"));

      for (var j = 1; j <= 4; j++) {
        _htmlChildrenOptions.push(BookingForm_jsx("option", {
          key: j,
          value: j
        }, j));
      } // children ages


      var _ageOptions = [];

      _ageOptions.push(BookingForm_jsx("option", {
        key: -1,
        value: ""
      }, "Et\xE0"));

      for (var j = 0; j <= 12; j++) {
        _ageOptions.push(BookingForm_jsx("option", {
          key: j,
          value: j
        }, j));
      }

      let _htmlChildrenAges = [];

      for (let j in props.practice.rooms[i].childrenAges) {
        _htmlChildrenAges.push(BookingForm_jsx("div", {
          key: j,
          className: "col-lg-3"
        }, BookingForm_jsx("div", {
          className: "form-group"
        }, BookingForm_jsx("select", {
          className: "custom-select",
          name: "childrens_age[]",
          "data-name": "ageChildrens",
          "data-index": j,
          value: props.practice.rooms[i].childrenAges[j] || 0,
          onChange: e => onChangeRoom(e, i)
        }, _ageOptions))));
      }

      _html.push(BookingForm_jsx("div", {
        key: i,
        className: "row"
      }, BookingForm_jsx("div", {
        className: "col-lg-3"
      }, BookingForm_jsx("div", {
        className: "form-group"
      }, i == 0 && BookingForm_jsx("button", {
        type: "button",
        className: "btn btn-green",
        onClick: () => onAddRoom()
      }, "+ Camera"), i > 0 && BookingForm_jsx(external_react_default.a.Fragment, null, BookingForm_jsx("label", null, "camera ", BookingForm_jsx("span", {
        className: "room-number"
      }, parseInt(i) + 1)), "\xA0\xA0", BookingForm_jsx("button", {
        type: "button",
        className: "btn btn-danger btn-sm roomBox_buttonDelete",
        onClick: () => onDeleteRoom(i)
      }, BookingForm_jsx("i", {
        className: "fas fa-times"
      }))))), BookingForm_jsx("div", {
        className: "col-lg-2"
      }, BookingForm_jsx("div", {
        className: "form-group"
      }, BookingForm_jsx("select", {
        className: "custom-select",
        id: `adults_${i}`,
        name: "adults[]",
        "data-name": "adults",
        value: props.practice.rooms[i].adults || 0,
        onChange: e => onChangeRoom(e, i)
      }, "$", _htmlAdultOptions))), BookingForm_jsx("div", {
        className: "col-lg-2"
      }, BookingForm_jsx("div", {
        className: "form-group"
      }, BookingForm_jsx("select", {
        className: "custom-select",
        id: `childrens_${i}`,
        name: "childrens[]",
        "data-name": "childrens",
        value: props.practice.rooms[i].childrens || 0,
        onChange: e => onChangeRoom(e, i)
      }, "$", _htmlChildrenOptions))), BookingForm_jsx("div", {
        className: "col-lg-4"
      }, BookingForm_jsx("div", {
        className: "row table_childrenAges"
      }, _htmlChildrenAges))));
    }

    return _html;
  };

  return BookingForm_jsx(external_react_default.a.Fragment, null, BookingForm_jsx("form", {
    onSubmit: formik.handleSubmit,
    className: "needs-validation" + (formik.errors ? "was-validated" : ""),
    noValidate: true
  }, BookingForm_jsx("div", {
    className: "box2 form-template-1"
  }, BookingForm_jsx("div", {
    className: "row"
  }, BookingForm_jsx("div", {
    className: "col-lg-3"
  }, BookingForm_jsx("div", {
    className: "form-group"
  }, BookingForm_jsx(components_MyDateRangePicker, {
    startDate: props.practice.checkin,
    endDate: props.practice.checkout,
    onChange: (startDate, endDate) => onChangeDatePicker(startDate, endDate)
  }))), BookingForm_jsx("div", {
    className: "col-lg-3"
  }, BookingForm_jsx("div", {
    className: "form-group"
  }, BookingForm_jsx("select", {
    className: "custom-select" + (formik.errors.treatment ? " is-invalid" : ""),
    name: "treatment",
    id: "treatment" // value={props.practice.treatment || ''}
    // onChange={(e) => onChange(e)}
    ,
    value: formik.values.treatment || '',
    onChange: e => {
      onChange(e);
      formik.handleChange(e);
    }
  }, BookingForm_jsx("option", {
    value: ""
  }, "Trattamento"), props.priceList && Object.entries(props.priceList).map(([treatment, prices], index) => BookingForm_jsx("option", {
    key: index,
    value: treatment
  }, treatment))), formik.errors.treatment && BookingForm_jsx("div", {
    className: "invalid-feedback"
  }, formik.errors.treatment))), BookingForm_jsx("div", {
    className: "col-lg-3"
  }, BookingForm_jsx("div", {
    className: "form-group"
  }, BookingForm_jsx("select", {
    className: "custom-select",
    name: "transfer_id",
    id: "tranfer_id",
    value: props.practice.transfer_id || '',
    onChange: e => onChange(e)
  }, BookingForm_jsx("option", {
    value: ""
  }, "Transfer"), BookingForm_jsx("option", {
    value: "1"
  }, "Transfer 1"), BookingForm_jsx("option", {
    value: "2"
  }, "Transfer 2"), BookingForm_jsx("option", {
    value: "3"
  }, "Transfer 3"))))), BookingForm_jsx("div", {
    className: "room-box",
    id: "roomBox"
  }, renderRooms())), BookingForm_jsx("div", {
    className: "box3 form-template-2"
  }, BookingForm_jsx("div", {
    className: "row"
  }, BookingForm_jsx("div", {
    className: "col-lg-3"
  }, BookingForm_jsx("div", {
    className: "form-group"
  }, BookingForm_jsx("div", {
    className: "title"
  }, "Richiedi il tuo preventivo gratuitamente"))), BookingForm_jsx("div", {
    className: "col-lg-4"
  }, BookingForm_jsx("div", {
    className: "form-group"
  }, BookingForm_jsx("input", {
    type: "text",
    className: "form-control" + (formik.errors.first_name ? " is-invalid" : ""),
    id: "first_name",
    name: "first_name",
    placeholder: "Nome" // value={props.practice.customer.first_name || ""}
    // onChange={(e)=>onChange(e)}
    ,
    value: formik.values.first_name || '',
    onChange: e => {
      onChange(e);
      formik.handleChange(e);
    } // reuired="true"

  }), formik.errors.first_name && BookingForm_jsx("div", {
    className: "invalid-feedback"
  }, formik.errors.first_name)), BookingForm_jsx("div", {
    className: "form-group"
  }, BookingForm_jsx("input", {
    type: "text",
    className: "form-control" + (formik.errors.last_name ? " is-invalid" : ""),
    id: "last_name",
    name: "last_name",
    placeholder: "Cognome" // value={props.practice.customer.last_name || ""}
    // onChange={(e)=>onChange(e)}
    ,
    value: formik.values.last_name || '',
    onChange: e => {
      onChange(e);
      formik.handleChange(e);
    }
  }), formik.errors.last_name && BookingForm_jsx("div", {
    className: "invalid-feedback"
  }, formik.errors.last_name)), BookingForm_jsx("div", {
    className: "form-group"
  }, BookingForm_jsx("input", {
    type: "email",
    className: "form-control" + (formik.errors.email ? " is-invalid" : ""),
    id: "email",
    name: "email",
    placeholder: "Email" // defaultValue={props.practice.customer.email || ""}
    // onChange={(e)=>onChange(e)}
    ,
    value: formik.values.email || '',
    onChange: e => {
      onChange(e);
      formik.handleChange(e);
    }
  }), formik.errors.email && BookingForm_jsx("div", {
    className: "invalid-feedback"
  }, formik.errors.email)), BookingForm_jsx("div", {
    className: "form-group"
  }, BookingForm_jsx("input", {
    type: "text",
    className: "form-control" + (formik.errors.mobile ? " is-invalid" : ""),
    id: "mobile",
    name: "mobile",
    placeholder: "Cellulare" // defaultValue={props.practice.customer.mobile || ""}
    // onChange={(e)=>onChange(e)}
    ,
    value: formik.values.mobile || '',
    onChange: e => {
      onChange(e);
      formik.handleChange(e);
    }
  }), formik.errors.mobile && BookingForm_jsx("div", {
    className: "invalid-feedback"
  }, formik.errors.mobile))), BookingForm_jsx("div", {
    className: "col-lg-5"
  }, BookingForm_jsx("div", {
    className: "form-group"
  }, BookingForm_jsx("textarea", {
    className: "form-control",
    id: "message",
    name: "message",
    placeholder: "Messaggio",
    value: props.practice.message || "",
    onChange: e => onChange(e)
  })), BookingForm_jsx("div", {
    className: "form-group"
  }, BookingForm_jsx("div", {
    className: "custom-control custom-checkbox"
  }, BookingForm_jsx("input", {
    type: "checkbox",
    className: "custom-control-input" + (formik.errors.privacy ? " is-invalid" : ""),
    name: "privacy",
    id: "privacy" // value={props.practice.privacy || 0}
    // onChange={(e)=>onChange(e)}
    ,
    value: "1",
    checked: formik.values.privacy == 1 ? 1 : 0,
    onChange: e => {
      onChange(e);
      formik.handleChange(e);
    }
  }), BookingForm_jsx("label", {
    className: "custom-control-label",
    htmlFor: "privacy"
  }, "Acconsento al trattamento dei miei dati ai sensi dell\u2019informativa sulla ", BookingForm_jsx("a", {
    href: "#"
  }, "Privacy"), "."), formik.errors.privacy && BookingForm_jsx("div", {
    className: "invalid-feedback"
  }, formik.errors.privacy))), BookingForm_jsx("div", {
    className: "form-group text-right"
  }, BookingForm_jsx("button", {
    type: "submit",
    className: "btn-submit"
  }, "richiedi disponibilit\xE0")))))));
};

const mapStateToProps = state => {
  return {
    practice: state.practiceByGuest.item
  };
};

const mapDispatchToProps = dispatch => {
  let practiceByGuestAction = new PracticeByGuestAction["a" /* default */]();
  return {
    setPractice: data => {
      dispatch(practiceByGuestAction.setItem(data));
    },
    resetPractice: () => {
      dispatch(practiceByGuestAction.resetItem());
    },
    createPractice: data => {
      dispatch(practiceByGuestAction.create(data));
    }
  };
};

/* harmony default export */ var Partials_BookingForm = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(BookingForm));

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

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

// CONCATENATED MODULE: ./components/Layouts/MainLayout/Head.js
var __jsx = external_react_default.a.createElement;



const Head = meta => __jsx(head_default.a, null, __jsx("meta", {
  charSet: "UTF-8"
}), __jsx("title", null, meta.title || ''), __jsx("meta", {
  name: "description",
  content: meta.description || ''
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
  content: `${{"title":"NextTravel","url":"https://www.nextravel.it","image":"https://www.nextravel.it/default.jpg"}.title} - ${meta.title || ''}`
}), __jsx("meta", {
  property: "og:image",
  content: meta.image || {"title":"NextTravel","url":"https://www.nextravel.it","image":"https://www.nextravel.it/default.jpg"}.image
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
  content: `${{"title":"NextTravel","url":"https://www.nextravel.it","image":"https://www.nextravel.it/default.jpg"}.title} - ${meta.title || ''}`
}), __jsx("meta", {
  name: "twitter:description",
  content: meta.description || ''
}), __jsx("meta", {
  name: "twitter:image",
  content: meta.image || {"title":"NextTravel","url":"https://www.nextravel.it","image":"https://www.nextravel.it/default.jpg"}.image
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


const Footer = () => {
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
  })), Footer_jsx("div", {
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
  }, console.log('socials', {"facebook":{"label":"Facebook","url":"","ico":"<i class=\"fab fa-facebook\"></i>"},"instagram":{"label":"Instagram","url":"","ico":"<i class=\"fab fa-instagram\"></i>"}}), Object.entries({"email":{"prelabel":"","label":"info@nextravel.it","url":"mailto:info@nextravel.it","ico":"<i class=\"ico ico-mail\"></i>"},"phone":{"prelabel":"","label":"347 512 3030","url":"tel:393475123030","ico":"<i class=\"fas fa-phone-alt\"></i>"}}).map(([key, obj], index) => Footer_jsx("li", {
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
  }), MainLayout_jsx("main", null, children)), MainLayout_jsx(MainLayout_Footer, null), MainLayout_jsx(MainLayout_Scripts, null));
};

/* harmony default export */ var MainLayout_MainLayout = __webpack_exports__["a"] = (MainLayout);

/***/ }),

/***/ "KPCs":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-daterangepicker");

/***/ }),

/***/ "N6Bt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateplanPeriodService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jC1T");


class RateplanPeriodService extends _BaseService__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] {
  constructor() {
    super('/travelgo-one/rateplan-periods');
  }

  query(params) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.url}/query`, {
      params
    }, this.config).then(response => {
      return Promise.resolve(response.data.data);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

}

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

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
  }

  return __jsx("div", {
    className: "prices-box-details",
    key: props.index
  }, __jsx("div", {
    className: "prices-top"
  }, __jsx("div", {
    className: "prices-details"
  }, __jsx("span", null, title, " / prezzi p.p.")), props.priceTableLink && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}`,
    href: {
      pathname: `/accommodations/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to
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
    as: `/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=1`,
    href: {
      pathname: `/accommodations/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        nights: 1
      }
    }
  }, __jsx("a", null, __jsx("span", {
    className: "no-smartphone"
  }, "\u20AC"), " ", prices.n1, ",-")), !prices.n1 && `-`), __jsx("td", null, prices.n2 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=2`,
    href: {
      pathname: `/accommodations/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        nights: 2
      }
    }
  }, __jsx("a", null, __jsx("span", {
    className: "no-smartphone"
  }, "\u20AC"), " ", prices.n2, ",-")), !prices.n2 && `-`), __jsx("td", null, prices.n3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=3`,
    href: {
      pathname: `/accommodations/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        nights: 3
      }
    }
  }, __jsx("a", null, __jsx("span", {
    className: "no-smartphone"
  }, "\u20AC"), " ", prices.n3, ",-")), !prices.n3 && `-`), __jsx("td", null, prices.n4 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=4`,
    href: {
      pathname: `/accommodations/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        nights: 4
      }
    }
  }, __jsx("a", null, __jsx("span", {
    className: "no-smartphone"
  }, "\u20AC"), " ", prices.n4, ",-")), !prices.n4 && `-`), __jsx("td", null, prices.n5 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=5`,
    href: {
      pathname: `/accommodations/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        nights: 5
      }
    }
  }, __jsx("a", null, __jsx("span", {
    className: "no-smartphone"
  }, "\u20AC"), " ", prices.n5, ",-")), !prices.n5 && `-`), __jsx("td", null, prices.n6 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=6`,
    href: {
      pathname: `/accommodations/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
        nights: 6
      }
    }
  }, __jsx("a", null, __jsx("span", {
    className: "no-smartphone"
  }, "\u20AC"), " ", prices.n6, ",-")), !prices.n6 && `-`), __jsx("td", null, prices.n7 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=7`,
    href: {
      pathname: `/accommodations/[accommodition]/booking/[id]`,
      query: {
        checkin: props.period.date_from,
        checkout: props.period.date_to,
        treatment: props.treatment,
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

/***/ "jC1T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
    let config = this.checkAuthApi();
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.url, _objectSpread({
      params,
      paramsSerializer: function (params) {
        return qs.stringify(params, {
          encode: false
        });
      }
    }, config)).then(response => {
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
        return qs.stringify(params, {
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

/***/ "p54a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ practiceByGuestConsts; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PracticeByGuestAction_PracticeByGuestAction; });

// CONCATENATED MODULE: ./packages/BaseAction.js
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
// EXTERNAL MODULE: ./packages/Base/actions/PageLoaderAction.js
var PageLoaderAction = __webpack_require__("XvPD");

// EXTERNAL MODULE: ./packages/Base/actions/AlertMessageAction.js
var AlertMessageAction = __webpack_require__("YRjj");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./packages/BaseService.js
var BaseService = __webpack_require__("jC1T");

// CONCATENATED MODULE: ./packages/TravelgoOne/services/PracticeService.js


class PracticeService_PracticeService extends BaseService["a" /* default */] {
  constructor() {
    super('/travelgo-one/practices');
  }

  createByGuest(postData) {
    let config = {
      headers: {
        'Content-Type': 'application/json' // 'Authorization': `Bearer ${token}`

      }
    };
    return external_axios_default.a.post(this.url + '/create-by-guest', postData, config).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

}
// CONCATENATED MODULE: ./packages/TravelgoOne/actions/PracticeByGuestAction.js




const practiceByGuestConsts = {
  SET_ITEM: 'PRACTICE_BY_GUEST_SET_ITEM',
  RESET_ITEM: 'PRACTICE_BY_GUEST_RESET_ITEM',
  CREATE: 'PRACTICE_BY_GUEST_CREATE'
};
class PracticeByGuestAction_PracticeByGuestAction extends BaseAction {
  constructor() {
    super();
    this.service = new PracticeService_PracticeService();
    this.consts = practiceByGuestConsts;
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

  create(params) {
    return dispatch => {
      dispatch(PageLoaderAction["a" /* default */].show());
      this.service.createByGuest(params).then(response => {
        dispatch(this.resetItem());
        dispatch(AlertMessageAction["b" /* default */].alertMessageSuccess('Richiesta inviata con successo!'));
        dispatch(PageLoaderAction["a" /* default */].hide());
      }).catch(error => {
        dispatch(AlertMessageAction["b" /* default */].alertMessageError(error.response.data.meta.message));
        dispatch(PageLoaderAction["a" /* default */].hide());
      });
    };
  }

}

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