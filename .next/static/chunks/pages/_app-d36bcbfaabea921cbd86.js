_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),c=n.n(r),a=n("HaE+"),i=n("1OyB"),o=n("vuIU"),u=n("Ji7U"),s=n("md7G"),l=n("foSv"),f=n("q1tI"),p=n.n(f),v=n("8Bbg"),d=n.n(v),h=n("ANjH");function y(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(c){return"function"===typeof c?c(n,r,t):e(c)}}}}var E=y();E.withExtraArgument=y;var b=E,g=n("5HXA"),m=n("/MKj"),O=function(){return(O=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var c in e=arguments[n])Object.prototype.hasOwnProperty.call(e,c)&&(t[c]=e[c]);return t}).apply(this,arguments)},_=function(t,e,n,r){return new(n||(n=Promise))((function(c,a){function i(t){try{u(r.next(t))}catch(e){a(e)}}function o(t){try{u(r.throw(t))}catch(e){a(e)}}function u(t){var e;t.done?c(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,o)}u((r=r.apply(t,e||[])).next())}))},S=function(t,e){var n,r,c,a,i={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(c=2&a[0]?r.return:a[0]?r.throw||((c=r.return)&&c.call(r),0):r.next)&&!(c=c.call(r,a[1])).done)return c;switch(r=0,c&&(a=[2&a[0],c.value]),a[0]){case 0:case 1:c=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(c=(c=i.trys).length>0&&c[c.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!c||a[1]>c[0]&&a[1]<c[3])){i.label=a[1];break}if(6===a[0]&&i.label<c[1]){i.label=c[1],c=a;break}if(c&&i.label<c[2]){i.label=c[2],i.ops.push(a);break}c[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(o){a=[6,o],r=0}finally{n=c=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},T=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]])}return n},R="__NEXT_REDUX_WRAPPER_HYDRATE__",j=function(){return"undefined"===typeof window},I=function(t,e){var n=(void 0===e?{}:e).deserializeState;return n?n(t):t},P=function(t,e){var n=(void 0===e?{}:e).serializeState;return n?n(t):t},w=function(t){var e=t.makeStore,n=t.context,r=function(t){return(void 0===t?{}:t).storeKey||"__NEXT_REDUX_WRAPPER_STORE__"}(t.config),c=function(){return e(n)};if(j()){var a=n,i=void 0;return a.req&&(i=a.req),a.ctx&&a.ctx.req&&(i=a.ctx.req),i?(i.__nextReduxWrapperStore||(i.__nextReduxWrapperStore=c()),i.__nextReduxWrapperStore):c()}return r in window||(window[r]=c()),window[r]},A=function(t,e){void 0===e&&(e={});var n=function(n){var r=n.callback,c=n.context,a=n.isApp,i=void 0!==a&&a;return _(void 0,void 0,void 0,(function(){var n,a,o,u;return S(this,(function(s){switch(s.label){case 0:return n=w({context:c,makeStore:t,config:e}),e.debug&&console.log("1. getProps created store with state",n.getState()),(o=r)?[4,r(O(O({},c),i?{ctx:O(O({},c.ctx),{store:n})}:{store:n}))]:[3,2];case 1:o=s.sent(),s.label=2;case 2:return a=o||{},e.debug&&console.log("3. getProps after dispatches has store state",n.getState()),u=n.getState(),[2,{initialProps:a,initialState:j()?P(u,e):u}]}}))}))},r=function(t){return function(e){return _(void 0,void 0,void 0,(function(){return S(this,(function(r){return e.store?(console.warn("No need to wrap pages if _app was wrapped"),[2,t(e)]):[2,n({callback:t,context:e})]}))}))}},c=function(t){return function(e){return _(void 0,void 0,void 0,(function(){return S(this,(function(r){switch(r.label){case 0:return[4,n({callback:t,context:e,isApp:!0})];case 1:return[2,r.sent()]}}))}))}},a=function(t){return function(e){return _(void 0,void 0,void 0,(function(){var r,c,a,i,o;return S(this,(function(u){switch(u.label){case 0:return[4,n({callback:t,context:e})];case 1:return r=u.sent(),c=r.initialProps,a=c.props,i=T(c,["props"]),o=T(r,["initialProps"]),[2,O(O({},i),{props:O(O({},o),a)})]}}))}))}};return{getServerSideProps:function(t){return function(e){return _(void 0,void 0,void 0,(function(){return S(this,(function(n){switch(n.label){case 0:return[4,a(t)(e)];case 1:return[2,n.sent()]}}))}))}},getStaticProps:a,withRedux:function(n){var a="withRedux("+(n.displayName||n.name||"Component")+")",i=function(r,c){var i,o=r.initialState,u=r.initialProps,s=T(r,["initialState","initialProps"]),l=Object(f.useRef)(!0),v=null===(i=null===s||void 0===s?void 0:s.pageProps)||void 0===i?void 0:i.initialState;e.debug&&console.log("4. WrappedApp created new store with",a,{initialState:o,initialStateFromGSPorGSSR:v});var d=Object(f.useRef)(w({makeStore:t,config:e,context:c})),h=Object(f.useCallback)((function(){o&&d.current.dispatch({type:R,payload:I(o,e)}),v&&d.current.dispatch({type:R,payload:I(v,e)})}),[v,o]);l.current&&h(),Object(f.useEffect)((function(){l.current?l.current=!1:h()}),[h]),u&&u.pageProps&&(s.pageProps=O(O({},u.pageProps),s.pageProps));var y=s;return v&&delete(y=O(O({},s),{pageProps:O({},s.pageProps)})).pageProps.initialState,p.a.createElement(m.a,{store:d.current},p.a.createElement(n,O({},u,y)))};return i.displayName=a,"getInitialProps"in n&&(i.getInitialProps=function(t){return _(void 0,void 0,void 0,(function(){var e;return S(this,(function(a){return e=n.getInitialProps,[2,(t.ctx?c(e):r(e))(t)]}))}))}),i}}},k=n("YRjj"),D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k.a.ALERT_MESSAGE_SUCCESS:return{type:"alert-success",message:e.message,error:0};case k.a.ALERT_MESSAGE_ERROR:return{type:"alert-danger",message:e.message,error:1};case k.a.ALERT_MESSAGE_WARNING:return{type:"alert-warning",message:e.message,error:1};default:return t}},C=n("XvPD"),M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"hide",display:"none"},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C.b.SHOW:return{type:"show",display:e.display};case C.b.HIDE:return{type:"hide",display:e.display};default:return t}},N=n("a3WO");var x=n("BsWD");function G(t){return function(t){if(Array.isArray(t))return Object(N.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(x.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var L=n("rePB"),U=n("bxpL");function W(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?W(Object(n),!0).forEach((function(e){Object(L.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var X={loading:0,params:{page:1},items:[],meta:null},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case U.b.RESET_ITEMS:return X;case U.b.LOADING:return B(B({},t),{},{loading:e.loading});case U.b.ITEMS:return B(B({},t),{},{items:[].concat(G(t.items),G(e.items)),meta:e.meta,params:B(B({},t.params),{},{page:parseInt(t.params.page)+1})});default:return t}},q=n("p54a");function Y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(n),!0).forEach((function(e){Object(L.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var J={item:{hotel_id:null,rate_plan_id:null,customer:{first_name:"",last_name:"",email:"",mobile:""},message:"",privacy:0,checkin:null,checkout:null,treatment:null,numRooms:1,rooms:[{adults:2,childrens:0,childrenAges:[]}],transfer_id:null}},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case q.b.RESET_ITEM:var n=z(z({},t),{},{item:z(z({},t.item),{},{customer:{first_name:"",last_name:"",email:"",mobile:""}})});return console.log("newState",n),n;case q.b.SET_ITEM:return z(z({},t),{},{item:e.item});case q.b.GET_CLIENT_IP:return z(z({},t),{},{sub_ip:e.clientIp});case q.b.CREATE:return z(z({},t),{},{item:e.item});default:return t}},F=n("mI8k");function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){Object(L.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Q={first_name:"",last_name:"",email:"",mobile:"",privacy:"",list_ids:[2]},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F.b.RESET_ITEM:return Q;case F.b.SET_ITEM:return Z(Z({},t),e.item);case F.b.GET_CLIENT_IP:return Z(Z({},t),{},{sub_ip:e.clientIp});case F.b.SENDINBLUE_CREATE_CONTACT:return Q;default:return t}},tt=A((function(t){return Object(h.createStore)(Object(h.combineReducers)({alertMessage:D,pageLoader:M,hotel:H,practiceByGuest:V,newsletter:$}),{},Object(g.composeWithDevTools)(Object(h.applyMiddleware)(b)))}),{debug:!0}),et=n("ODXe"),nt=p.a.createElement,rt=Object(m.b)((function(t){return{type:t.alertMessage.type,message:t.alertMessage.message}}),(function(t){return{resetAlertMessage:function(){t(k.b.reset())}}}))((function(t){var e=!(!t.message||""==t.message),n=p.a.useState(e),r=Object(et.a)(n,2),c=r[0],a=r[1];e!=c&&a(e);var i="Info";if(t.type)switch(t.type){case"alert-success":"success",i="Successo";break;case"alert-danger":"error",i="Errore";break;case"alert-warning":"warning",i="Attenzione";break;default:"info",i="Info"}return nt("div",{style:{display:c?"block":"none",background:"rgba(56,64,68,0.9)",position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:"1070",textAlign:"center"}},nt("div",{id:"AlertMessage",className:"AlertMessage modal"+(c?" fade show":""),tabIndex:"-1",role:"dialog",style:{display:c?"block":"none"}},nt("div",{className:"modal-dialog",role:"document"},nt("div",{className:"modal-content"},nt("div",{className:"modal-header"},nt("h5",{className:"modal-title"},i),nt("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(e){return a(!1),void t.resetAlertMessage()}},nt("span",{"aria-hidden":"true"},"\xd7"))),nt("div",{className:"modal-body"},nt("p",null,t.message))))))})),ct=p.a.createElement;function at(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var it=function(t){Object(u.a)(n,t);var e=at(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return ct("div",{className:"pageloader",style:{display:this.props.display,opacity:"0.9",msFilter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)",filter:"alpha(opacity=90)",position:"fixed",top:0,bottom:0,left:0,right:0,backgroundImage:"url(/images/spinner.gif)",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"50px",backgroundColor:"#384044",zIndex:"100000000",textAlign:"center"}})}}]),n}(p.a.Component),ot=Object(m.b)((function(t){return{type:t.pageLoader.type,display:t.pageLoader.display}}))(it),ut=p.a.createElement;function st(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var lt=function(t){Object(u.a)(n,t);var e=st(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return ut(p.a.Fragment,null,ut(ot,null),ut(e,n),ut(rt,null))}}],[{key:"getInitialProps",value:function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,r=e.ctx,!n.getInitialProps){t.next=7;break}return t.next=4,n.getInitialProps(r);case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0={};case 8:return a=t.t0,t.abrupt("return",{pageProps:a});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),n}(d.a);e.default=tt.withRedux(lt)},"5HXA":function(t,e,n){"use strict";var r=n("ANjH").compose;e.__esModule=!0,e.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},e.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(t){return t}}},"6Brv":function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("1OyB"),c=n("vuIU"),a=n("Ji7U"),i=n("md7G"),o=n("foSv"),u=n("vDqi"),s=n.n(u);function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(o.a)(t);if(e){var c=Object(o.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var f=function(t){Object(a.a)(n,t);var e=l(n);function n(){return Object(r.a)(this,n),e.call(this,"/travelgo-one/hotels")}return Object(c.a)(n,[{key:"query",value:function(t){return s.a.get("".concat(this.url,"/query"),{params:t},this.config).then((function(t){return Promise.resolve(t.data)})).catch((function(t){return Promise.reject(t)}))}}]),n}(n("jC1T").a)},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("o0o1"),c=n("lwsE"),a=n("W8MJ"),i=n("7W2i"),o=n("a1gu"),u=n("Nsbk"),s=n("yXPU");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var c=u(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return o(this,n)}}var f=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=E,e.default=void 0;var p=f(n("q1tI")),v=n("g/15");function d(t){return h.apply(this,arguments)}function h(){return(h=s(r.mark((function t(e){var n,c,a;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,c=e.ctx,t.next=3,(0,v.loadGetInitialProps)(n,c);case 3:return a=t.sent,t.abrupt("return",{pageProps:a});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=v.AppInitialProps,e.NextWebVitalsMetric=v.NextWebVitalsMetric;var y=function(t){i(n,t);var e=l(n);function n(){return c(this,n),e.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,c=t.__N_SSG,a=t.__N_SSP;return p.default.createElement(n,Object.assign({},r,c||a?{}:{url:E(e)}))}}]),n}(p.default.Component);function E(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",c=n||e;return t.push(r,c)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",c=n||e;return t.replace(r,c)}}}e.default=y,y.origGetInitialProps=d,y.getInitialProps=d},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},XvPD:function(t,e,n){"use strict";n.d(e,"b",(function(){return a}));var r=n("1OyB"),c=n("vuIU"),a={SHOW:"PAGE_LOADER_SHOW",HIDE:"PAGE_LOADER_HIDE"},i=function(){function t(){Object(r.a)(this,t)}return Object(c.a)(t,[{key:"construct",value:function(){}}],[{key:"show",value:function(){return{type:a.SHOW,display:"block"}}},{key:"hide",value:function(){return{type:a.HIDE,display:"none"}}}]),t}();e.a=i},YRjj:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("1OyB"),c=n("vuIU"),a={ALERT_MESSAGE_SUCCESS:"ALERT_MESSAGE_SUCCESS",ALERT_MESSAGE_ERROR:"ALERT_MESSAGE_ERROR",ALERT_MESSAGE_WARNING:"ALERT_MESSAGE_WARNING"},i=function(){function t(){Object(r.a)(this,t)}return Object(c.a)(t,[{key:"construct",value:function(){this.alertMessageSuccess=this.alertMessageSuccess.bind(this),this.alertMessageError=this.alertMessageError.bind(this),this.alertMessageWarning=this.alertMessageWarning.bind(this)}}],[{key:"alertMessageSuccess",value:function(t){return{type:a.ALERT_MESSAGE_SUCCESS,message:t}}},{key:"alertMessageError",value:function(t){return{type:a.ALERT_MESSAGE_ERROR,message:t}}},{key:"alertMessageWarning",value:function(t){return{type:a.ALERT_MESSAGE_WARNING,message:t}}},{key:"reset",value:function(){return{type:a.ALERT_MESSAGE_SUCCESS,message:""}}}]),t}();e.b=i},ZC9X:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("1OyB"),c=n("vuIU"),a=n("Ji7U"),i=n("md7G"),o=n("foSv"),u=n("vDqi"),s=n.n(u);function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(o.a)(t);if(e){var c=Object(o.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var f=function(t){Object(a.a)(n,t);var e=l(n);function n(){return Object(r.a)(this,n),e.call(this,"/travelgo-one/practices")}return Object(c.a)(n,[{key:"getClientIp",value:function(){return s.a.get("/get-client-ip",this.config).then((function(t){return Promise.resolve(t)})).catch((function(t){return Promise.reject(t)}))}},{key:"createByGuest",value:function(t){return s.a.post(this.url+"/create-by-guest",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return Promise.resolve(t)})).catch((function(t){return Promise.reject(t)}))}}]),n}(n("jC1T").a)},bxpL:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return v}));var r=n("1OyB"),c=n("vuIU"),a=n("Ji7U"),i=n("md7G"),o=n("foSv"),u=n("sYsk"),s=n("XvPD"),l=(n("YRjj"),n("6Brv"));function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(o.a)(t);if(e){var c=Object(o.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var p={LOADING:"HOTEL_LIST_LOADING",ITEMS:"HOTEL_LIST_ITEMS",RESET_ITEMS:"HOTEL_LIST_RESET_ITEMS"},v=function(t){Object(a.a)(n,t);var e=f(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).service=new l.a,t.consts=p,t}return Object(c.a)(n,[{key:"loading",value:function(t){var e=this;return function(n){n({type:e.consts.LOADING,loading:t})}}},{key:"query",value:function(t){var e=this;return function(n){n(s.a.show()),n(e.loading(1)),e.service.query(t).then((function(t){n({type:e.consts.ITEMS,items:t.data,meta:t.meta}),n(s.a.hide()),parseInt(t.meta.current_page)*parseInt(t.meta.per_page)<=parseInt(t.meta.total)?n(e.loading(0)):n(e.loading(1))})).catch((function(t){n({type:e.consts.RESET_ITEMS,items:[],meta:null}),n(s.a.hide()),n(e.loading(0))}))}}}]),n}(u.a)},mI8k:function(t,e,n){"use strict";n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return E}));var r=n("1OyB"),c=n("vuIU"),a=n("Ji7U"),i=n("md7G"),o=n("foSv"),u=n("sYsk"),s=n("XvPD"),l=n("YRjj"),f=n("vDqi"),p=n.n(f);function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(o.a)(t);if(e){var c=Object(o.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var d=function(t){Object(a.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.call(this,"/newsletter")}return Object(c.a)(n,[{key:"getClientIp",value:function(){return p.a.get("/get-client-ip",this.config).then((function(t){return Promise.resolve(t)})).catch((function(t){return Promise.reject(t)}))}},{key:"sendinblue_createContact",value:function(t){return p.a.post("".concat(this.url,"/sendinblue/contacts"),t,this.config).then((function(t){return Promise.resolve(t)})).catch((function(t){return Promise.reject(t)}))}}]),n}(n("jC1T").a);function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(o.a)(t);if(e){var c=Object(o.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var y={SET_ITEM:"NEWSLETTER_SET_ITEM",RESET_ITEM:"NEWSLETTER_RESET_ITEM",GET_CLIENT_IP:"NEWSLETTER_GET_CLIENT_IP",SENDINBLUE_CREATE_CONTACT:"NEWSLETTER_SENDINBLUE_CREATE_CONTACT"},E=function(t){Object(a.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).service=new d,t.consts=y,t}return Object(c.a)(n,[{key:"setItem",value:function(t){var e=this;return function(n){n({type:e.consts.SET_ITEM,item:t})}}},{key:"resetItem",value:function(){var t=this;return function(e){e({type:t.consts.RESET_ITEM})}}},{key:"getClientIp",value:function(){var t=this;return function(e){t.service.getClientIp().then((function(n){e({type:t.consts.GET_CLIENT_IP,clientIp:n.data.clientIp})})).catch((function(t){}))}}},{key:"sendinblue_createContact",value:function(t){var e=this;return function(n){n(s.a.show()),e.service.sendinblue_createContact(t).then((function(t){n(e.resetItem()),n(l.b.alertMessageSuccess("Ti ringraziamo per esserti registrato alla newsletter. Ti terremo aggiornati sulle nostre offerte.")),n(s.a.hide())})).catch((function(t){n(l.b.alertMessageError(t.response.data.meta.message)),n(s.a.hide())}))}}}]),n}(u.a)},p54a:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return d}));var r=n("1OyB"),c=n("vuIU"),a=n("Ji7U"),i=n("md7G"),o=n("foSv"),u=n("sYsk"),s=n("XvPD"),l=n("YRjj"),f=n("ZC9X");function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(o.a)(t);if(e){var c=Object(o.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var v={SET_ITEM:"PRACTICE_BY_GUEST_SET_ITEM",RESET_ITEM:"PRACTICE_BY_GUEST_RESET_ITEM",GET_CLIENT_IP:"PRACTICE_BY_GUEST_GET_CLIENT_IP",CREATE:"PRACTICE_BY_GUEST_CREATE"},d=function(t){Object(a.a)(n,t);var e=p(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).service=new f.a,t.consts=v,t}return Object(c.a)(n,[{key:"setItem",value:function(t){var e=this;return function(n){n({type:e.consts.SET_ITEM,item:t})}}},{key:"resetItem",value:function(){var t=this;return function(e){e({type:t.consts.RESET_ITEM})}}},{key:"getClientIp",value:function(){var t=this;return function(e){t.service.getClientIp().then((function(n){e({type:t.consts.GET_CLIENT_IP,clientIp:n.data.clientIp})})).catch((function(t){}))}}},{key:"create",value:function(t){var e=this;return function(n){n(s.a.show()),e.service.createByGuest(t).then((function(t){n(e.resetItem()),n(l.b.alertMessageSuccess("Richiesta inviata con successo!")),n(s.a.hide())})).catch((function(t){n(l.b.alertMessageError(t.response.data.meta.message)),n(s.a.hide())}))}}}]),n}(u.a)},sYsk:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("1OyB"),c=n("vuIU"),a=function(){function t(){Object(r.a)(this,t),this.service=null,this.consts=null,this.redirect=null}return Object(c.a)(t,[{key:"all",value:function(t,e){var n=this;return function(r){n.service.search(t,e).then((function(t){r({type:n.consts.SEARCHED,items:t.data.data,totItems:t.data.meta.total})})).catch((function(t){}))}}},{key:"get",value:function(t){var e=this;return function(n){e.service.load(t).then((function(t){n({type:e.consts.LOADED,item:t.data.data})})).catch((function(t){}))}}},{key:"createPost",value:function(t,e){var n=this;return function(e){n.service.createPost(t).then((function(t){e({type:n.consts.CREATED,item:t.data.data})})).catch((function(t){}))}}},{key:"create",value:function(t,e){var n=this;return function(e){n.service.create(t).then((function(t){e({type:n.consts.CREATED,item:t.data.data})})).catch((function(t){}))}}},{key:"updatePost",value:function(t,e,n){var r=this;return function(n){r.service.updatePost(t,e).then((function(e){n({type:r.consts.UPDATED,item:e.data.data}),n(r.load(t))})).catch((function(t){}))}}},{key:"update",value:function(t,e,n){var r=this;return function(n){r.service.update(t,e).then((function(t){n({type:r.consts.UPDATED,item:t.data.data})})).catch((function(t){}))}}},{key:"remove",value:function(t){var e=this;return function(n){e.service.remove(t).then((function(t){n({type:e.consts.REMOVED})})).catch((function(t){}))}}},{key:"removeOnList",value:function(t,e,n){var r=this;return function(e){r.service.remove(t).then((function(t){e({type:r.consts.REMOVED})})).catch((function(t){}))}}},{key:"updateFields",value:function(t,e,n,r){var c=this;return function(n){c.service.updateFields(t,e).then((function(t){n({type:c.consts.UPDATED,item:t.data.data})})).catch((function(t){}))}}}]),t}()}},[[0,1,2,0,3]]]);