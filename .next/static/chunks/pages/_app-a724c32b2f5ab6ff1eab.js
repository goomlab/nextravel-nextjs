_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{0:function(e,t,r){r("GcxT"),e.exports=r("nOHt")},"1TCz":function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),o=r.n(n),a=r("HaE+"),i=r("1OyB"),c=r("vuIU"),u=r("Ji7U"),s=r("md7G"),l=r("foSv"),p=r("q1tI"),f=r.n(p),d=r("8Bbg"),v=r.n(d),g=r("ANjH");function b(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"===typeof o?o(r,n,e):t(o)}}}}var y=b();y.withExtraArgument=b;var h=y,m=r("5HXA"),_=r("/MKj"),w=function(){return(w=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},O=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{u(n.next(e))}catch(t){a(t)}}function c(e){try{u(n.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}u((n=n.apply(e,t||[])).next())}))},E=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},S=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},P="__NEXT_REDUX_WRAPPER_HYDRATE__",x=function(){return"undefined"===typeof window},R=function(e,t){var r=(void 0===t?{}:t).deserializeState;return r?r(e):e},j=function(e,t){var r=(void 0===t?{}:t).serializeState;return r?r(e):e},k=function(e){var t=e.makeStore,r=e.context,n=function(e){return(void 0===e?{}:e).storeKey||"__NEXT_REDUX_WRAPPER_STORE__"}(e.config),o=function(){return t(r)};if(x()){var a=r,i=void 0;return a.req&&(i=a.req),a.ctx&&a.ctx.req&&(i=a.ctx.req),i?(i.__nextReduxWrapperStore||(i.__nextReduxWrapperStore=o()),i.__nextReduxWrapperStore):o()}return n in window||(window[n]=o()),window[n]},N=function(e,t){void 0===t&&(t={});var r=function(r){var n=r.callback,o=r.context,a=r.isApp,i=void 0!==a&&a;return O(void 0,void 0,void 0,(function(){var r,a,c,u;return E(this,(function(s){switch(s.label){case 0:return r=k({context:o,makeStore:e,config:t}),t.debug&&console.log("1. getProps created store with state",r.getState()),(c=n)?[4,n(w(w({},o),i?{ctx:w(w({},o.ctx),{store:r})}:{store:r}))]:[3,2];case 1:c=s.sent(),s.label=2;case 2:return a=c||{},t.debug&&console.log("3. getProps after dispatches has store state",r.getState()),u=r.getState(),[2,{initialProps:a,initialState:x()?j(u,t):u}]}}))}))},n=function(e){return function(t){return O(void 0,void 0,void 0,(function(){return E(this,(function(n){return t.store?(console.warn("No need to wrap pages if _app was wrapped"),[2,e(t)]):[2,r({callback:e,context:t})]}))}))}},o=function(e){return function(t){return O(void 0,void 0,void 0,(function(){return E(this,(function(n){switch(n.label){case 0:return[4,r({callback:e,context:t,isApp:!0})];case 1:return[2,n.sent()]}}))}))}},a=function(e){return function(t){return O(void 0,void 0,void 0,(function(){var n,o,a,i,c;return E(this,(function(u){switch(u.label){case 0:return[4,r({callback:e,context:t})];case 1:return n=u.sent(),o=n.initialProps,a=o.props,i=S(o,["props"]),c=S(n,["initialProps"]),[2,w(w({},i),{props:w(w({},c),a)})]}}))}))}};return{getServerSideProps:function(e){return function(t){return O(void 0,void 0,void 0,(function(){return E(this,(function(r){switch(r.label){case 0:return[4,a(e)(t)];case 1:return[2,r.sent()]}}))}))}},getStaticProps:a,withRedux:function(r){var a="withRedux("+(r.displayName||r.name||"Component")+")",i=function(n,o){var i,c=n.initialState,u=n.initialProps,s=S(n,["initialState","initialProps"]),l=Object(p.useRef)(!0),d=null===(i=null===s||void 0===s?void 0:s.pageProps)||void 0===i?void 0:i.initialState;t.debug&&console.log("4. WrappedApp created new store with",a,{initialState:c,initialStateFromGSPorGSSR:d});var v=Object(p.useRef)(k({makeStore:e,config:t,context:o})),g=Object(p.useCallback)((function(){c&&v.current.dispatch({type:P,payload:R(c,t)}),d&&v.current.dispatch({type:P,payload:R(d,t)})}),[d,c]);l.current&&g(),Object(p.useEffect)((function(){l.current?l.current=!1:g()}),[g]),u&&u.pageProps&&(s.pageProps=w(w({},u.pageProps),s.pageProps));var b=s;return d&&delete(b=w(w({},s),{pageProps:w({},s.pageProps)})).pageProps.initialState,f.a.createElement(_.a,{store:v.current},f.a.createElement(r,w({},u,b)))};return i.displayName=a,"getInitialProps"in r&&(i.getInitialProps=function(e){return O(void 0,void 0,void 0,(function(){var t;return E(this,(function(a){return t=r.getInitialProps,[2,(e.ctx?o(t):n(t))(e)]}))}))}),i}}},T=r("YRjj"),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.a.ALERT_MESSAGE_SUCCESS:return{type:"alert-success",message:t.message,error:0};case T.a.ALERT_MESSAGE_ERROR:return{type:"alert-danger",message:t.message,error:1};case T.a.ALERT_MESSAGE_WARNING:return{type:"alert-warning",message:t.message,error:1};default:return e}},I=r("XvPD"),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"hide",display:"none"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.b.SHOW:return{type:"show",display:t.display};case I.b.HIDE:return{type:"hide",display:t.display};default:return e}},M=r("rePB"),C=r("p54a");function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){Object(M.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W={first_name:"",last_name:"",email:"",mobile:""},U={item:{hotel_id:null,rate_plan_id:null,customer:W,message:"",privacy:0,checkin:null,checkout:null,treatment:null,numRooms:1,rooms:[{adults:2,childrens:0,childrenAges:[]}],transfer_id:null}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.b.RESET_ITEM:return G(G({},e),{},{customer:W});case C.b.SET_ITEM:case C.b.CREATE:return G(G({},e),{},{item:t.item});default:return e}},q=N((function(e){return Object(g.createStore)(Object(g.combineReducers)({alertMessage:A,pageLoader:D,practiceByGuest:L}),{},Object(m.composeWithDevTools)(Object(g.applyMiddleware)(h)))}),{debug:!0}),H=r("ODXe"),z=f.a.createElement,B=Object(_.b)((function(e){return{type:e.alertMessage.type,message:e.alertMessage.message}}),(function(e){return{resetAlertMessage:function(){e(T.b.reset())}}}))((function(e){var t=!(!e.message||""==e.message),r=f.a.useState(t),n=Object(H.a)(r,2),o=n[0],a=n[1];t!=o&&a(t);var i="Info";if(e.type)switch(e.type){case"alert-success":"success",i="Successo";break;case"alert-danger":"error",i="Errore";break;case"alert-warning":"warning",i="Attenzione";break;default:"info",i="Info"}return z("div",{style:{display:o?"block":"none",background:"rgba(56,64,68,0.9)",position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:"1070",textAlign:"center"}},z("div",{id:"AlertMessage",className:"AlertMessage modal"+(o?" fade show":""),tabIndex:"-1",role:"dialog",style:{display:o?"block":"none"}},z("div",{className:"modal-dialog",role:"document"},z("div",{className:"modal-content"},z("div",{className:"modal-header"},z("h5",{className:"modal-title"},i),z("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(t){return a(!1),void e.resetAlertMessage()}},z("span",{"aria-hidden":"true"},"\xd7"))),z("div",{className:"modal-body"},z("p",null,e.message))))))})),V=f.a.createElement;function J(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}var F=function(e){Object(u.a)(r,e);var t=J(r);function r(e){return Object(i.a)(this,r),t.call(this,e)}return Object(c.a)(r,[{key:"render",value:function(){return V("div",{className:"pageloader",style:{display:this.props.display,opacity:"0.9",msFilter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)",filter:"alpha(opacity=90)",position:"fixed",top:0,bottom:0,left:0,right:0,backgroundImage:"url(/images/spinner.gif)",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"50px",backgroundColor:"#384044",zIndex:"100000000",textAlign:"center"}})}}]),r}(f.a.Component),K=Object(_.b)((function(e){return{type:e.pageLoader.type,display:e.pageLoader.display}}))(F),Y=f.a.createElement;function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}var Z=function(e){Object(u.a)(r,e);var t=Q(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps;return Y(f.a.Fragment,null,Y(K,null),Y(t,r),Y(B,null))}}],[{key:"getInitialProps",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.Component,n=t.ctx,!r.getInitialProps){e.next=7;break}return e.next=4,r.getInitialProps(n);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={};case 8:return a=e.t0,e.abrupt("return",{pageProps:a});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),r}(v.a);t.default=q.withRedux(Z)},"5HXA":function(e,t,r){"use strict";var n=r("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?n:n.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},"8Bbg":function(e,t,r){e.exports=r("B5Ud")},B5Ud:function(e,t,r){"use strict";var n=r("o0o1"),o=r("lwsE"),a=r("W8MJ"),i=r("7W2i"),c=r("a1gu"),u=r("Nsbk"),s=r("yXPU");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}var p=r("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=y,t.default=void 0;var f=p(r("q1tI")),d=r("g/15");function v(e){return g.apply(this,arguments)}function g(){return(g=s(n.mark((function e(t){var r,o,a;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,o=t.ctx,e.next=3,(0,d.loadGetInitialProps)(r,o);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,t.NextWebVitalsMetric=d.NextWebVitalsMetric;var b=function(e){i(r,e);var t=l(r);function r(){return o(this,r),t.apply(this,arguments)}return a(r,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,o=e.__N_SSG,a=e.__N_SSP;return f.default.createElement(r,Object.assign({},n,o||a?{}:{url:y(t)}))}}]),r}(f.default.Component);function y(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return n},get pathname(){return t},get asPath(){return r},back:function(){e.back()},push:function(t,r){return e.push(t,r)},pushTo:function(t,r){var n=r?t:"",o=r||t;return e.push(n,o)},replace:function(t,r){return e.replace(t,r)},replaceTo:function(t,r){var n=r?t:"",o=r||t;return e.replace(n,o)}}}t.default=b,b.origGetInitialProps=v,b.getInitialProps=v},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])}},[[0,0,2,1,3,7]]]);