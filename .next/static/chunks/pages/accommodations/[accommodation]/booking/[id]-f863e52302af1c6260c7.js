_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"3TA0":function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),l=n.n(a),i=n("HaE+"),o=n("ODXe"),r=n("q1tI"),s=n.n(r),c=n("wd/R"),u=n.n(c),d=(n("YFqc"),n("jC1T")),m=n("57t+"),p=(n("TvVg"),n("6Brv"),n("N6Bt")),v=n("JHTH"),g=n("8Mm2"),h=n("8Otk"),f=n("V5Fq"),N=s.a.createElement,y=function(e){if(console.log("props booking page",e),!e.hotel||e.hotel.length<=0)return N(v.a,{settings:{menu:e.menu}},N("div",null,"Data not found"));for(var t=e.period,n=e.hotel,a=u()(t.date_from,"YYYY-MM-DD"),l=u()(t.date_to,"YYYY-MM-DD"),i=[],r=1;r<=parseInt(n.stars);r++)i.push(N("i",{key:r,className:"ico ico-star"}));for(var s={},c=0,d=Object.entries(e.period.viewPrices);c<d.length;c++){var m=Object(o.a)(d[c],2),p=m[0],y=m[1];s[p]={n1:y.n1?y.n1:null,n2:y.n2?y.n2:null,n3:y.n3?y.n3:null,n4:y.n4?y.n4:null,n5:y.n5?y.n5:null,n6:y.n6?y.n6:null,n7:y.n7?y.n7:null}}return N(v.a,{settings:{template:"booking-page",menu:e.menu},meta:{title:"Booking ".concat(e.hotel.meta_title.it),description:"Booking",url:"".concat("https://www.nextravel.it","/accommodations/").concat(e.hotel.slug.it,"/booking"),image:e.hotel.media&&e.hotel.media.gallery&&e.hotel.media.gallery[0]?e.hotel.media.gallery[0].url:null}},N(g.a,null),N("section",{className:"single-hotel-section"},N("div",{className:"container"},N("figure",{className:"img-bgas"},N("img",{src:n.media&&n.media.gallery&&n.media.gallery[0]?n.media.gallery[0].url:"default",alt:n.media&&n.media.gallery&&n.media.gallery[0]&&n.media.gallery[0].name})),N("div",{className:"topline"},N("div",{className:"title mr-auto"},N("h1",null,n.name),N("div",{className:"stars"},i)),N("div",{className:"single-hotel-call ml-auto"},"chiama!\xa0",N("span",{className:"bold"},"347 512 3030"))))),N("section",{className:"single-hotel-section"},N("div",{className:"container"},N("div",{className:"hotel-booking-box"},N("div",{className:"box1"},N("div",{className:"row"},N("div",{className:"col-lg-6"},s&&Object.entries(s).map((function(e,a){var l=Object(o.a)(e,2),i=l[0],r=l[1];return N("div",{className:"prices-box",key:a},N(f.a,{key:a,index:a,treatment:i,prices:r,hotel:n,period:t}))}))),N("div",{className:"col-lg-4 offset-lg-2"},N("div",{className:"description"},N("div",{className:"row mb-5"},N("div",{className:"col-lg-6"},"Offerta n. ",t.id),N("div",{className:"col-lg-6"},"dal ",a.format("DD/MM/YYYY"),N("br",null),"al ",l.format("DD/MM/YYYY"))),"per ulteriori informazioni contattaci a",N("br",null),N("span",{className:"bold"},"info@nextravel.it"))))),console.log("props query",e.query),N(h.a,{rateplan:e.period.rateplan||null,hotel:e.period.rateplan.hotel||null,query:e.query,priceList:s})))),N("section",{className:"section-main single-hotel-section"},N("div",{className:"container"},N("div",{className:"row"},N("div",{className:"col-lg-3"},N("div",{className:"content-box content-box-1"},N("div",{className:"titoletto"},"posizione"),N("div",{className:"description"},n.details.address,N("br",null),n.details.zip_code," ",n.details.city," (",n.details.state,")"),N("div",{className:"titoletto"},"distanze"),N("div",{className:"description"},N("div",{dangerouslySetInnerHTML:{__html:n.description_near.it}})),N("ul",{className:"hotel-service-list"},n.incServices&&n.incServices.length>0&&n.incServices.map((function(e,t){return N("li",{key:t},N("span",null,e.name))}))))),N("div",{className:"col-lg-4"},N("div",{className:"content-box content-box-2"},N("div",{className:"description"},N("div",{dangerouslySetInnerHTML:{__html:n.description_short.it}})))),N("div",{className:"col-lg-5"},N("div",{className:"content-box content-box-3"},N("div",{className:"description"},N("div",{dangerouslySetInnerHTML:{__html:n.description_short.it}}))))))))};y.getInitialProps=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a,i,o,r,s,c,u,v,g,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],a=[],i=null,o=null,r=null,s=null,c={checkin:t.query.checkin||null,checkout:t.query.checkout||null,treatment:t.query.treatment||null,nights:t.query.nights||null},e.prev=7,u=new d.a,e.next=11,u.initApp();case 11:return v=e.sent,n=v.locs||[],a=v.hotelCategories||[],g=new m.a,e.next=17,g.get(1);case 17:return i=e.sent,h=new p.a,e.next=21,h.get(t.query.id);case 21:(s=e.sent)&&s.rateplan&&s.rateplan.hotel&&(r=s.rateplan.hotel),e.next=27;break;case 25:e.prev=25,e.t0=e.catch(7);case 27:return e.abrupt("return",{query:c,locs:n,hotelCategories:a,menu:i,page:o,hotel:r,period:s});case 28:case"end":return e.stop()}}),e,null,[[7,25]])})));return function(t){return e.apply(this,arguments)}}(),t.default=y},"Ffs+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accommodations/[accommodation]/booking/[id]",function(){return n("3TA0")}])},N6Bt:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("1OyB"),l=n("vuIU"),i=n("Ji7U"),o=n("md7G"),r=n("foSv"),s=n("vDqi"),c=n.n(s);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(r.a)(e);if(t){var l=Object(r.a)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var d=function(e){Object(i.a)(n,e);var t=u(n);function n(){return Object(a.a)(this,n),t.call(this,"/travelgo-one/rateplan-periods")}return Object(l.a)(n,[{key:"query",value:function(e){return c.a.get("".concat(this.url,"/query"),{params:e},this.config).then((function(e){return Promise.resolve(e.data.data)})).catch((function(e){return Promise.reject(e)}))}}]),n}(n("jC1T").a)}},[["Ffs+",0,2,6,5,1,3,4,7,9]]]);