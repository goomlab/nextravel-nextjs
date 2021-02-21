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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: ./packages/Base/actions/AlertMessageAction.js
var AlertMessageAction = __webpack_require__("YRjj");

// CONCATENATED MODULE: ./packages/Base/reducers/AlertMessageReducer.js


const AlertMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case AlertMessageAction["a" /* alertMessageConsts */].ALERT_MESSAGE_SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
        error: 0
      };

    case AlertMessageAction["a" /* alertMessageConsts */].ALERT_MESSAGE_ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
        error: 1
      };

    case AlertMessageAction["a" /* alertMessageConsts */].ALERT_MESSAGE_WARNING:
      return {
        type: 'alert-warning',
        message: action.message,
        error: 1
      };

    default:
      return state;
  }
};

/* harmony default export */ var reducers_AlertMessageReducer = (AlertMessageReducer);
// EXTERNAL MODULE: ./packages/Base/actions/PageLoaderAction.js
var PageLoaderAction = __webpack_require__("XvPD");

// CONCATENATED MODULE: ./packages/Base/reducers/PageLoaderReducer.js


const PageLoaderReducer = (state = {
  type: "hide",
  display: "none"
}, action) => {
  switch (action.type) {
    case PageLoaderAction["b" /* pageLoaderConsts */].SHOW:
      return {
        type: "show",
        display: action.display
      };

    case PageLoaderAction["b" /* pageLoaderConsts */].HIDE:
      return {
        type: "hide",
        display: action.display
      };

    default:
      return state;
  }
};

/* harmony default export */ var reducers_PageLoaderReducer = (PageLoaderReducer);
// EXTERNAL MODULE: ./packages/TravelgoOne/actions/PracticeByGuestAction.js
var PracticeByGuestAction = __webpack_require__("p54a");

// CONCATENATED MODULE: ./packages/TravelgoOne/reducers/PracticeByGuestReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialCustomer = {
  first_name: "",
  last_name: "",
  email: "",
  mobile: ""
};
const PracticeByGuestReducer_initialState = {
  item: {
    hotel_id: null,
    rate_plan_id: null,
    customer: initialCustomer,
    message: "",
    privacy: 0,
    checkin: null,
    checkout: null,
    treatment: null,
    numRooms: 1,
    rooms: [{
      adults: 2,
      childrens: 0,
      childrenAges: []
    }],
    transfer_id: null
  }
};

const PracticeByGuestReducer = (state = PracticeByGuestReducer_initialState, action) => {
  switch (action.type) {
    case PracticeByGuestAction["b" /* practiceByGuestConsts */].RESET_ITEM:
      let newState = _objectSpread(_objectSpread({}, state), {}, {
        item: _objectSpread(_objectSpread({}, state.item), {}, {
          customer: {
            first_name: "",
            last_name: "",
            email: "",
            mobile: ""
          }
        })
      });

      console.log('newState', newState);
      return newState;

    case PracticeByGuestAction["b" /* practiceByGuestConsts */].SET_ITEM:
      return _objectSpread(_objectSpread({}, state), {}, {
        item: action.item
      });

    case PracticeByGuestAction["b" /* practiceByGuestConsts */].GET_CLIENT_IP:
      return _objectSpread(_objectSpread({}, state), {}, {
        sub_ip: action.clientIp
      });

    case PracticeByGuestAction["b" /* practiceByGuestConsts */].CREATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        item: action.item
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_PracticeByGuestReducer = (PracticeByGuestReducer);
// EXTERNAL MODULE: ./packages/TravelgoOne/actions/NewsletterAction.js + 1 modules
var NewsletterAction = __webpack_require__("mI8k");

// CONCATENATED MODULE: ./packages/TravelgoOne/reducers/NewsletterReducer.js
function NewsletterReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function NewsletterReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { NewsletterReducer_ownKeys(Object(source), true).forEach(function (key) { NewsletterReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { NewsletterReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function NewsletterReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const NewsletterReducer_initialState = {
  first_name: "",
  last_name: "",
  email: "",
  mobile: "",
  privacy: "",
  list_ids: [2]
};

const NewsletterReducer = (state = NewsletterReducer_initialState, action) => {
  switch (action.type) {
    case NewsletterAction["b" /* newsletterConsts */].RESET_ITEM:
      return NewsletterReducer_initialState;

    case NewsletterAction["b" /* newsletterConsts */].SET_ITEM:
      return NewsletterReducer_objectSpread(NewsletterReducer_objectSpread({}, state), action.item);

    case NewsletterAction["b" /* newsletterConsts */].GET_CLIENT_IP:
      return NewsletterReducer_objectSpread(NewsletterReducer_objectSpread({}, state), {}, {
        sub_ip: action.clientIp
      });

    case NewsletterAction["b" /* newsletterConsts */].SENDINBLUE_CREATE_CONTACT:
      return NewsletterReducer_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_NewsletterReducer = (NewsletterReducer);
// CONCATENATED MODULE: ./store.js







 // create a makeStore function

const makeStore = context => Object(external_redux_["createStore"])(Object(external_redux_["combineReducers"])({
  alertMessage: reducers_AlertMessageReducer,
  pageLoader: reducers_PageLoaderReducer,
  practiceByGuest: reducers_PracticeByGuestReducer,
  newsletter: reducers_NewsletterReducer
}), {}, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a))); // export an assembled wrapper

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makeStore, {
  debug: true
});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/UI/AlertMessage.js
var __jsx = external_react_default.a.createElement;




const AlertMessage = props => {
  let initialState = props.message && props.message != "" ? true : false;
  const [open, setOpen] = external_react_default.a.useState(initialState);
  if (initialState != open) setOpen(initialState);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.resetAlertMessage();
  };

  let type = "info";
  let title = "Info";

  if (props.type) {
    switch (props.type) {
      case 'alert-success':
        type = 'success';
        title = "Successo";
        break;

      case 'alert-danger':
        type = 'error';
        title = "Errore";
        break;

      case 'alert-warning':
        type = 'warning';
        title = "Attenzione";
        break;

      default:
        type = "info";
        title = "Info";
        break;
    }
  }

  return __jsx("div", {
    style: {
      display: open ? "block" : "none",
      background: 'rgba(56,64,68,0.9)',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: '1070',
      textAlign: 'center'
    }
  }, __jsx("div", {
    id: "AlertMessage",
    className: "AlertMessage modal" + (open ? " fade show" : ""),
    tabIndex: "-1",
    role: "dialog",
    style: {
      display: open ? "block" : "none"
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document"
  }, __jsx("div", {
    className: "modal-content"
  }, __jsx("div", {
    className: "modal-header"
  }, __jsx("h5", {
    className: "modal-title"
  }, title), __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: e => handleClose()
  }, __jsx("span", {
    "aria-hidden": "true"
  }, "\xD7"))), __jsx("div", {
    className: "modal-body"
  }, __jsx("p", null, props.message))))));
};

const mapStateToProps = state => {
  return {
    type: state.alertMessage.type,
    message: state.alertMessage.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetAlertMessage: () => {
      dispatch(AlertMessageAction["b" /* default */].reset());
    }
  };
};

/* harmony default export */ var UI_AlertMessage = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(AlertMessage));
// CONCATENATED MODULE: ./components/UI/PageLoader.js
var PageLoader_jsx = external_react_default.a.createElement;

 // import spinner from 'spinner.gif';

class PageLoader_PageLoader extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return PageLoader_jsx("div", {
      className: "pageloader",
      style: {
        display: this.props.display,
        opacity: '0.9',
        msFilter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)",
        filter: 'alpha(opacity=90)',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // backgroundImage: 'url('+spinner+')',
        backgroundImage: 'url(/images/spinner.gif)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '50px',
        backgroundColor: '#384044',
        zIndex: '100000000',
        textAlign: 'center'
      }
    });
  }

}

const PageLoader_mapStateToProps = state => {
  return {
    type: state.pageLoader.type,
    display: state.pageLoader.display
  };
};

/* harmony default export */ var UI_PageLoader = (Object(external_react_redux_["connect"])(PageLoader_mapStateToProps)(PageLoader_PageLoader));
// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;






class _app_MyApp extends app_default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}; //Anything returned here can be accessed by the client

    return {
      pageProps: pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(UI_PageLoader, null), _app_jsx(Component, pageProps), _app_jsx(UI_AlertMessage, null));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (wrapper.withRedux(_app_MyApp));

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "ZC9X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticeService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jC1T");


class PracticeService extends _BaseService__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] {
  constructor() {
    super('/travelgo-one/practices');
  }

  getClientIp() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/get-client-ip`, this.config).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  createByGuest(postData) {
    let config = {
      headers: {
        'Content-Type': 'application/json' // 'Authorization': `Bearer ${token}`

      }
    };
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.url + '/create-by-guest', postData, config).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

}

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eW3l":
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

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

/***/ "p54a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return practiceByGuestConsts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticeByGuestAction; });
/* harmony import */ var _packages_BaseAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("sYsk");
/* harmony import */ var _packages_Base_actions_PageLoaderAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XvPD");
/* harmony import */ var _packages_Base_actions_AlertMessageAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YRjj");
/* harmony import */ var _services_PracticeService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZC9X");




const practiceByGuestConsts = {
  SET_ITEM: 'PRACTICE_BY_GUEST_SET_ITEM',
  RESET_ITEM: 'PRACTICE_BY_GUEST_RESET_ITEM',
  GET_CLIENT_IP: 'PRACTICE_BY_GUEST_GET_CLIENT_IP',
  CREATE: 'PRACTICE_BY_GUEST_CREATE'
};
class PracticeByGuestAction extends _packages_BaseAction__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
  constructor() {
    super();
    this.service = new _services_PracticeService__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]();
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

  create(params) {
    return dispatch => {
      dispatch(_packages_Base_actions_PageLoaderAction__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].show());
      this.service.createByGuest(params).then(response => {
        dispatch(this.resetItem());
        dispatch(_packages_Base_actions_AlertMessageAction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"].alertMessageSuccess('Richiesta inviata con successo!'));
        dispatch(_packages_Base_actions_PageLoaderAction__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].hide());
      }).catch(error => {
        dispatch(_packages_Base_actions_AlertMessageAction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"].alertMessageError(error.response.data.meta.message));
        dispatch(_packages_Base_actions_PageLoaderAction__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].hide());
      });
    };
  }

}

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

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

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });