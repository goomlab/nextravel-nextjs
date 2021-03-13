module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("P3VZ");


/***/ }),

/***/ "P3VZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_TravelgoOne_services_LocService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XarN");




const createSitemap = models => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${models.map((model, index) => {
  let updatedAt = moment__WEBPACK_IMPORTED_MODULE_1___default()(model.updated_at, "DD/MM/YYYY hh:mm:ss").toISOString(); // 12/03/2021 17:05:06  -->  2021-02-17T11:39:04+00:00

  return `
                    <url>
                        <loc>${`${"https://www.nextravel.it"}/${model.slug.it}`}</loc>
                        <lastmod>${updatedAt}</lastmod>
                    </url>
                `;
}).join('')}
    </urlset>
    `;

class Sitemap extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps({
    res
  }) {
    let service = new _packages_TravelgoOne_services_LocService__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]();
    let models = (await service.all({
      status: {
        key: 'status',
        compare: '=',
        value: 1
      }
    })) || [];
    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(models));
    res.end();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sitemap);

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eW3l":
/***/ (function(module, exports) {

module.exports = require("qs");

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

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });