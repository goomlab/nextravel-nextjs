_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"+1oh":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=(a("wd/R"),a("YFqc"),i.a.createElement);t.a=function(e){return r(i.a.Fragment,null,e.extraServices&&e.extraServices.length>0&&r("div",{class:"prices-box-details"},r("span",null,"Supplementi e servizi aggiuntivi"),r("table",{class:"prices-table"},r("tbody",null,e.extraServices.map((function(e,t){return r("tr",{key:t},r("td",{className:"service-name"},e.name),r("td",{className:"service-price"},r("span",{className:"no-smartphone",dangerouslySetInnerHTML:{__html:"fixed"==e.pivot.price_type?"\u20ac&nbsp;":""}}),e.pivot.price,"percent"==e.pivot.price_type?"%":",-"))}))))))}},"5nHU":function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),i=a.n(n),r=a("HaE+"),s=a("q1tI"),l=a.n(s),c=a("wd/R"),o=a.n(c),u=(a("YFqc"),a("8Kt/"),a("bTu8")),m=a("g0Ox"),d=a("Xchd"),p=a("Ap4+"),v=a("ZXcA"),g=a("jC1T"),h=a("57t+"),f=(a("TvVg"),a("6Brv"),a("N6Bt")),b=a("JHTH"),N=a("8Mm2"),y=a("8Otk"),w=a("Gmui"),_=a("+1oh"),x=(a("V5Fq"),a("EIQ/"),a("8ici")),k=l.a.createElement;u.a.use([m.a,d.a,p.a,v.a]);var q=function(e){if(!e.hotel)return k(b.a,{settings:{menu:e.menu}},k("div",null,"Data not found"));for(var t=e.period,a=e.hotel,n=l.a.useRef(null),i=o()(t.date_from,"YYYY-MM-DD"),r=o()(t.date_to,"YYYY-MM-DD"),s=[],c=1;c<=parseInt(a.stars);c++)s.push(k("i",{key:c,className:"ico ico-star"}));return l.a.useEffect((function(){n.current=new u.a("#swiperHotelThumbnail",{grubCursor:!1,simulateTouch:!1,direction:"horizontal",slidesPerView:1,spaceBetween:0,navigation:{nextEl:"#swiperHotelThumbnail-button-next",prevEl:"#swiperHotelThumbnail-button-prev"}})}),[]),k(b.a,{settings:{template:"booking-page",menu:e.menu},meta:{title:"Booking ".concat(e.hotel.meta_title.it),description:"Booking",canonical:"".concat("https://www.nextravel.it","/accommodations/").concat(e.hotel.slug.it),url:"".concat("https://www.nextravel.it","/accommodations/").concat(e.hotel.slug.it,"/booking"),image:e.hotel.media&&e.hotel.media.gallery&&e.hotel.media.gallery[0]?e.hotel.media.gallery[0].url:null}},k(N.a,null),k("section",{className:"single-hotel-section"},k("div",{className:"container"},k("div",{id:"swiperHotelThumbnail",className:"swiper-container swiperHotelThumbnail"},k("div",{className:"swiper-wrapper"},a.media&&a.media.gallery.map((function(e,t){return k("div",{className:"swiper-slide",key:t},k("figure",{className:"img-bgas"},k("img",{src:e.url,alt:e.name})))})),(!a.media||!a.media.gallery)&&k("div",{className:"swiper-slide"},k("figure",{class:"img-bgas"},k("img",{src:"default",alt:""})))),k("div",{id:"swiperHotelThumbnail-button-prev",className:"swiper-button-prev"}),k("div",{id:"swiperHotelThumbnail-button-next",className:"swiper-button-next"})),k("div",{className:"topline"},k("div",{className:"title mr-auto"},k("h1",null,a.name),k("div",{className:"stars"},s)),k("div",{className:"single-hotel-call ml-auto"},"chiama!\xa0",k("span",{className:"bold"},"347 512 3030"))))),k("section",{className:"single-hotel-section"},k("div",{className:"container"},k("div",{className:"hotel-booking-box"},k("div",{className:"box1"},k("div",{className:"row"},k("div",{className:"col-lg-6"},k(x.a,e),t.hotelAgeRanges&&t.hotelAgeRanges.length>0&&k(w.a,{hotelAgeRanges:t.hotelAgeRanges}),a.extraServices&&a.extraServices.length>0&&k(_.a,{extraServices:a.extraServices})),k("div",{className:"col-lg-4 offset-lg-2"},k("div",{className:"description"},k("div",{className:"row mb-5"},k("div",{className:"col-lg-6"},"Offerta n. ",t.id),k("div",{className:"col-lg-6"},"dal ",i.format("DD/MM/YYYY"),k("br",null),"al ",r.format("DD/MM/YYYY"))),"per ulteriori informazioni contattaci a",k("br",null),k("span",{className:"bold"},"info@nextravel.it"))))),k(y.a,{rateplan:e.period.rateplan||null,hotel:e.period.rateplan.hotel||null,query:e.query,period:e.period})))),k("section",{className:"section-main single-hotel-section"},k("div",{className:"container"},k("div",{className:"row"},k("div",{className:"col-lg-3"},k("div",{className:"content-box content-box-1"},k("div",{className:"titoletto"},"posizione"),k("div",{className:"description"},a.details.address,k("br",null),a.details.zip_code," ",a.details.city," (",a.details.state,")"),k("div",{className:"titoletto"},"distanze"),k("div",{className:"description"},k("div",{dangerouslySetInnerHTML:{__html:a.description_near.it}})),k("ul",{className:"hotel-service-list"},a.incServices&&a.incServices.length>0&&a.incServices.map((function(e,t){return k("li",{key:t},k("span",null,e.name))}))))),k("div",{className:"col-lg-4"},k("div",{className:"content-box content-box-2"},k("div",{className:"description"},k("div",{dangerouslySetInnerHTML:{__html:a.description_short.it}})))),k("div",{className:"col-lg-5"},k("div",{className:"content-box content-box-3"},k("div",{className:"description"},k("div",{dangerouslySetInnerHTML:{__html:a.description_short.it}}))))))))};q.getInitialProps=function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n,r,s,l,c,o,u,m,d,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],n=[],r=null,s=null,l=null,c=null,o={checkin:t.query.checkin||null,checkout:t.query.checkout||null,treatment:t.query.treatment||null,room_type_id:t.query.room_type_id||null,nights:t.query.nights||null},e.prev=7,u=new g.a,e.next=11,u.initApp();case 11:return m=e.sent,a=m.locs||[],n=m.hotelCategories||[],d=new h.a,e.next=17,d.get(1);case 17:return r=e.sent,p=new f.a,e.next=21,p.get(t.query.id);case 21:(c=e.sent)&&c.rateplan&&c.rateplan.hotel&&(l=c.rateplan.hotel),e.next=27;break;case 25:e.prev=25,e.t0=e.catch(7);case 27:return e.abrupt("return",{query:o,locs:a,hotelCategories:n,menu:r,page:s,hotel:l,period:c});case 28:case"end":return e.stop()}}),e,null,[[7,25]])})));return function(t){return e.apply(this,arguments)}}(),t.default=q},"8ici":function(e,t,a){"use strict";var n=a("ODXe"),i=a("q1tI"),r=a.n(i),s=(a("wd/R"),a("V5Fq")),l=r.a.createElement;t.a=function(e){return l(r.a.Fragment,null,e.period.viewPeriodPrices&&Object.entries(e.period.viewPeriodPrices).map((function(t,a){var i=Object(n.a)(t,2),c=(i[0],i[1]);return l(r.a.Fragment,{key:a},c.prices&&Object.entries(c.prices).map((function(t,i){var o=Object(n.a)(t,2),u=o[0],m=o[1];return l(r.a.Fragment,{key:i},l("div",null,l("span",{style:{color:"#4fbaad"}},c.room_type.name)),l(s.a,{index:a,room_type:c.room_type,treatment:u,prices:m,hotel:e.hotel,period:e.period,priceTableLink:!0}))})))})))}},"EIQ/":function(e,t,a){"use strict";a("ODXe");var n=a("q1tI"),i=a.n(n);a("wd/R"),a("V5Fq"),i.a.createElement},FFKe:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/strutture-ricettive/[accommodation]/booking/[id]",function(){return a("5nHU")}])},Gmui:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=(a("wd/R"),a("YFqc"),i.a.createElement);t.a=function(e){return r(i.a.Fragment,null,e.hotelAgeRanges&&e.hotelAgeRanges.length>0&&r("div",{className:"prices-box-details"},r("span",null,"Supplementi e Riduzioni per et\xe0"),r("table",{className:"prices-table"},r("tbody",null,e.hotelAgeRanges.map((function(e,t){return r("tr",{key:t},r("td",{className:"service-name"},e.age_min," - ",e.age_max),r("td",{className:"service-price"},r("span",{className:"no-smartphone",dangerouslySetInnerHTML:{__html:"fixed"==e.price_type?"\u20ac&nbsp;":parseFloat(e.price)>0?"+":""}}),e.price,"percent"==e.price_type?"%":",-"))}))))))}},N6Bt:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("1OyB"),i=a("vuIU"),r=a("Ji7U"),s=a("md7G"),l=a("foSv"),c=a("vDqi"),o=a.n(c);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(l.a)(e);if(t){var i=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(s.a)(this,a)}}var m=function(e){Object(r.a)(a,e);var t=u(a);function a(){return Object(n.a)(this,a),t.call(this,"/travelgo-one/rateplan-periods")}return Object(i.a)(a,[{key:"query",value:function(e){return o.a.get("".concat(this.url,"/query"),{params:e},this.config).then((function(e){return Promise.resolve(e.data.data)})).catch((function(e){return Promise.reject(e)}))}}]),a}(a("jC1T").a)}},[["FFKe",1,2,4,7,0,3,5,6,8,9]]]);