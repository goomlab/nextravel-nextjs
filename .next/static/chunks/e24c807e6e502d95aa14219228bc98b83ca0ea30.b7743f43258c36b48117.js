(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"I+5a":function(e,a,t){(function(r){var n;e.exports=(n=t("q1tI"),function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=n},function(e,a,t){"use strict";var r=t(3);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,i,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),i=r.n(n),o=r(0),s=r.n(o);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=function(e){var a=e.pageClassName,t=e.pageLinkClassName,r=e.page,n=e.selected,o=e.activeClassName,s=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+r+(d?" "+d:""),v=null;return n&&(v="page",f=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+o:o,void 0!==t?void 0!==s&&(t=t+" "+s):t=s),i.a.createElement("li",{className:a},i.a.createElement("a",l({role:"button",className:t,href:p,tabIndex:"0","aria-label":f,"aria-current":v,onKeyPress:u},c(u)),r))};c.propTypes={pageSelectedHandler:s.a.func.isRequired,selected:s.a.bool.isRequired,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,extraAriaContext:s.a.string,href:s.a.string,ariaLabel:s.a.string,page:s.a.number.isRequired,getEventListener:s.a.func.isRequired};var u=c;function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var a=e.breakLabel,t=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,o=e.getEventListener,s=t||"break";return i.a.createElement("li",{className:s},i.a.createElement("a",p({className:r,role:"button",tabIndex:"0",onKeyPress:n},o(n)),a))};d.propTypes={breakLabel:s.a.oneOfType([s.a.string,s.a.node]),breakClassName:s.a.string,breakLinkClassName:s.a.string,breakHandler:s.a.func.isRequired,getEventListener:s.a.func.isRequired};var f=d;function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function g(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,a){return(b=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function h(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=P(e);if(a){var n=P(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return y(this,t)}}function y(e,a){return!a||"object"!==v(a)&&"function"!=typeof a?N(e):a}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var C=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&b(e,a)}(o,e);var a,t,r,n=h(o);function o(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o),k(N(a=n.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),k(N(a),"handleNextPage",(function(e){var t=a.state.selected,r=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<r-1&&a.handlePageSelected(t+1,e)})),k(N(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),k(N(a),"getEventListener",(function(e){return k({},a.props.eventListener,e)})),k(N(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var r=a.state.selected;a.handlePageSelected(r<e?a.getForwardJump():a.getBackwardJump(),t)})),k(N(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),k(N(a),"pagination",(function(){var e=[],t=a.props,r=t.pageRangeDisplayed,n=t.pageCount,o=t.marginPagesDisplayed,s=t.breakLabel,l=t.breakClassName,c=t.breakLinkClassName,u=a.state.selected;if(n<=r)for(var p=0;p<n;p++)e.push(a.getPageElement(p));else{var d,v,m,g=r/2,b=r-g;u>n-r/2?g=r-(b=n-u):u<r/2&&(b=r-(g=u));var h=function(e){return a.getPageElement(e)};for(d=0;d<n;d++)(v=d+1)<=o||v>n-o||d>=u-g&&d<=u+b?e.push(h(d)):s&&e[e.length-1]!==m&&(m=i.a.createElement(f,{key:d,breakLabel:s,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,d),getEventListener:a.getEventListener}),e.push(m))}return e})),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=o,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<r)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,r=t.pageClassName,n=t.pageLinkClassName,o=t.activeClassName,s=t.activeLinkClassName,l=t.extraAriaContext;return i.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:r,pageLinkClassName:n,activeClassName:o,activeLinkClassName:s,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,r=e.containerClassName,n=e.previousLabel,o=e.previousClassName,s=e.previousLinkClassName,l=e.previousAriaLabel,c=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,f=e.nextAriaLabel,v=e.nextRel,g=this.state.selected,b=o+(0===g?" ".concat(a):""),h=p+(g===t-1?" ".concat(a):""),y=0===g?"true":"false",N=g===t-1?"true":"false";return i.a.createElement("ul",{className:r},i.a.createElement("li",{className:b},i.a.createElement("a",m({className:s,href:this.hrefBuilder(g-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":y,"aria-label":l,rel:c},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),i.a.createElement("li",{className:h},i.a.createElement("a",m({className:d,href:this.hrefBuilder(g+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":N,"aria-label":f,rel:v},this.getEventListener(this.handleNextPage)),u)))}}])&&g(a.prototype,t),r&&g(a,r),o}(n.Component);k(C,"propTypes",{pageCount:s.a.number.isRequired,pageRangeDisplayed:s.a.number.isRequired,marginPagesDisplayed:s.a.number.isRequired,previousLabel:s.a.node,previousAriaLabel:s.a.string,prevRel:s.a.string,nextLabel:s.a.node,nextAriaLabel:s.a.string,nextRel:s.a.string,breakLabel:s.a.oneOfType([s.a.string,s.a.node]),hrefBuilder:s.a.func,onPageChange:s.a.func,initialPage:s.a.number,forcePage:s.a.number,disableInitialCallback:s.a.bool,containerClassName:s.a.string,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,previousClassName:s.a.string,nextClassName:s.a.string,previousLinkClassName:s.a.string,nextLinkClassName:s.a.string,disabledClassName:s.a.string,breakClassName:s.a.string,breakLinkClassName:s.a.string,extraAriaContext:s.a.string,ariaLabelBuilder:s.a.func,eventListener:s.a.string}),k(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),t.default=C,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,t("yLpj"))},"hm/Q":function(e,a,t){"use strict";var r=t("ODXe"),n=t("q1tI"),i=t.n(n),o=t("wd/R"),s=t.n(o),l=t("YFqc"),c=t.n(l),u=t("I+5a"),p=t.n(u),d=t("bTu8"),f=t("g0Ox"),v=t("Xchd"),m=t("Ap4+"),g=t("ZXcA"),b=t("V5Fq"),h=i.a.createElement;d.a.use([f.a,v.a,m.a,g.a]);var y=function(e){var a=e.index,t=s()(e.period.date_from,"YYYY-MM-DD"),r=s()(e.period.date_to,"YYYY-MM-DD");return h("div",{key:a,className:"swiper-slide swiper-slide-".concat(e.hotel.id)},h("a",{className:"nav-item nav-link ".concat(a==e.activeTab?"active":""),id:"nav-".concat(e.hotel.id,"-period-").concat(a,"-tab"),"data-toggle":"tab",href:"#nav-".concat(e.hotel.id,"-period-").concat(a),role:"tab","aria-controls":"nav-".concat(e.hotel.id,"-period-").concat(a),"aria-selected":"true",onClick:function(){return e.onActivateTab(a)}},h("span",null,t.format("DD/MM"),h("br",null),r.format("DD/MM")),h("i",{className:"ico ico-arrow-curved"})))},N=function(e){for(var a=e.index,t={},n=0,o=Object.entries(e.period.viewPeriodPrices);n<o.length;n++){var s=Object(r.a)(o[n],2),l=s[0],c=s[1];if(t[l]={},c.prices)for(var u=0,p=Object.entries(c.prices);u<p.length;u++){var d=Object(r.a)(p[u],2),f=d[0],v=d[1];t[l][f]={n1:v.n1?v.n1:null,n2:v.n2?v.n2:null,n3:v.n3?v.n3:null,n4:v.n4?v.n4:null,n5:v.n5?v.n5:null,n6:v.n6?v.n6:null,n7:v.n7?v.n7:null}}}return h("div",{className:"tab-pane fade ".concat(0==a?"show active":""),id:"nav-".concat(e.hotel.id,"-period-").concat(a),role:"tabpanel","aria-labelledby":"nav-".concat(e.hotel.id,"-period-").concat(a,"-tab")},e.period.viewPeriodPrices&&Object.entries(e.period.viewPeriodPrices).map((function(a,t){var n=Object(r.a)(a,2),o=(n[0],n[1]);return h(i.a.Fragment,{key:t},o.prices&&Object.entries(o.prices).map((function(a,n){var s=Object(r.a)(a,2),l=s[0],c=s[1];return h(i.a.Fragment,{key:n},h("div",null,h("span",{style:{color:"#4fbaad"}},o.room_type.name)),h(b.a,{index:t,room_type:o.room_type,treatment:l,prices:c,hotel:e.hotel,period:e.period,priceTableLink:!0}))})))})))},P=function(e){for(var a=e.hotel,t=i.a.useRef(null),n=[],o=1;o<=parseInt(a.stars);o++)n.push(h("i",{key:o,className:"ico ico-star"}));var s=i.a.useState(0),l=Object(r.a)(s,2),u=l[0],p=l[1];return i.a.useEffect((function(){t.current=new d.a("#swiperPrices-".concat(a.id),{grubCursor:!1,simulateTouch:!1,direction:"horizontal",spaceBetween:0,breakpoints:{1:{slidesPerView:1},320:{slidesPerView:4},768:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:4}},navigation:{nextEl:"#swiperPrices-".concat(a.id,"-button-next"),prevEl:"#swiperPrices-".concat(a.id,"-button-prev")}})}),[]),h("div",{className:"hotel-list-item"},h("a",{href:"".concat("/strutture-ricettive","/").concat(e.hotel.slug.it),rel:"nofollow"},h("div",{className:"topline"},h("div",{className:"title mr-auto"},a.name),h("div",{className:"stars ml-auto"},n))),h("a",{href:"".concat("/strutture-ricettive","/").concat(e.hotel.slug.it),rel:"nofollow"},h("figure",{className:"img-bgas"},h("img",{src:a.media&&a.media.gallery&&a.media.gallery[0]?a.media.gallery[0].url:"default",alt:a.media&&a.media.gallery&&a.media.gallery[0]&&a.media.gallery[0].name}))),h("div",{className:"prices-box"},a.rateplanPeriods&&a.rateplanPeriods.length>0&&h(i.a.Fragment,null,h("nav",{style:{width:"100% !important"}},h("div",{className:"nav nav-tabs",id:"nav-tab-1",role:"tablist",style:{width:"100% !important"}},h("div",{id:"swiperPrices-".concat(a.id),className:"swiper-container swiperPrices",style:{width:"100% !important"}},h("div",{className:"swiper-wrapper",style:{width:"100% !important"}},a.rateplanPeriods.map((function(e,t){return h(y,{key:t,index:t,period:e,hotel:a,activeTab:u,onActivateTab:function(){return function(e){p(e)}(t)}})})))),h("div",{id:"swiperPrices-".concat(a.id,"-button-prev"),className:"swiper-button-prev"}),h("div",{id:"swiperPrices-".concat(a.id,"-button-next"),className:"swiper-button-next"}))),h("div",{className:"tab-content",id:"nav-tabContent-1"},a.rateplanPeriods.map((function(e,t){return h(N,{key:t,index:t,hotel:a,period:e})})))),!a.rateplanPeriods||a.rateplanPeriods.length<=0&&h("div",{style:{height:70}}),h("div",{className:"details"},h("div",{className:"row"},h("div",{className:"col-4"},h("div",{className:"description"},h("span",{className:"bold"},"POSIZIONE"),h("br",null),a.details.address,h("br",null),a.details.zip_code," - ",a.details.city,h("br",null),"\u2014",h("br",null),h("div",{dangerouslySetInnerHTML:{__html:a.description_near.it}}))),h("div",{className:"col-8"},h("ul",{className:"hotel-service-list"},a.incServices&&a.incServices.length>0&&a.incServices.map((function(e,a){return h("li",{key:a},h("span",null,e.name))})))))),h("div",{className:"bottomline"},h("div",{className:"row"},h("div",{className:"col-8"},h("div",{className:"line"})),h("div",{className:"col-4"},h(c.a,{as:"".concat("/strutture-ricettive","/").concat(e.hotel.slug.it),href:{pathname:"".concat("/strutture-ricettive","/[accommodition]")}},h("a",{className:"goto"},"Visualizza la struttura")))))))},k=function(e){var a=i.a.useState(0),t=Object(r.a)(a,2),n=t[0],o=t[1];i.a.useEffect((function(){e.meta&&o(parseInt(e.meta.current_page)-1)}),[]);return e.meta?h(p.a,{forcePage:n,previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:e.meta.last_page,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(a){return function(a){e.filter.page=a.selected+1;var t="?";for(var r in e.filter)t+="".concat(r,"=").concat(e.filter[r],"&");window.location.href=window.location.pathname+t}(a)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}):""};a.a=function(e){return h("section",null,h("div",{className:"container"},e.hotels&&e.hotels.length>0&&h(i.a.Fragment,null,h("div",{className:"row"},e.hotels.map((function(e,a){return h("div",{key:a,className:"col-md-6"},h(P,{hotel:e}))}))),h(k,e)),!e.hotels||e.hotels.length<=0&&h("div",null,"Nessun risultato")))}}}]);