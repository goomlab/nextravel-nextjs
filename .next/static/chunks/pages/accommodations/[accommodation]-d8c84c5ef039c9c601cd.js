_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{N6Bt:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("1OyB"),i=n("vuIU"),r=n("Ji7U"),o=n("md7G"),c=n("foSv"),s=n("vDqi"),l=n.n(s);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var i=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var d=function(e){Object(r.a)(n,e);var t=u(n);function n(){return Object(a.a)(this,n),t.call(this,"/travelgo-one/rateplan-periods")}return Object(i.a)(n,[{key:"query",value:function(e){return l.a.get("".concat(this.url,"/query"),{params:e},this.config).then((function(e){return Promise.resolve(e.data.data)})).catch((function(e){return Promise.reject(e)}))}}]),n}(n("jC1T").a)},TvVg:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("1OyB"),i=n("Ji7U"),r=n("md7G"),o=n("foSv");n("vDqi");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(o.a)(e);if(t){var i=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(r.a)(this,n)}}var s=function(e){Object(i.a)(n,e);var t=c(n);function n(){return Object(a.a)(this,n),t.call(this,"/post/posts")}return n}(n("jC1T").a)},msUd:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accommodations/[accommodation]",function(){return n("yinf")}])},yinf:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),i=n.n(a),r=n("HaE+"),o=n("q1tI"),c=n.n(o),s=n("YFqc"),l=n.n(s),u=n("jC1T"),d=n("57t+"),m=(n("TvVg"),n("6Brv")),p=n("N6Bt"),f=n("JHTH"),v=n("8Mm2"),g=n("ODXe"),h=n("wd/R"),y=n.n(h),N=n("V5Fq"),b=c.a.createElement,_=function(e){for(var t=y()(e.period.date_from,"YYYY-MM-DD"),n=y()(e.period.date_to,"YYYY-MM-DD"),a={},i=0,r=Object.entries(e.period.viewPrices);i<r.length;i++){var o=Object(g.a)(r[i],2),s=o[0],u=o[1];a[s]={n1:u.n1?u.n1:null,n2:u.n2?u.n2:null,n3:u.n3?u.n3:null,n4:u.n4?u.n4:null,n5:u.n5?u.n5:null,n6:u.n6?u.n6:null,n7:u.n7?u.n7:null}}return b(c.a.Fragment,null,b("div",{className:"col-sm-10"},b("div",{className:"prices-date"},"dal ",t.format("DD/MM")," al ",n.format("DD/MM")),a&&Object.entries(a).map((function(t,n){var a=Object(g.a)(t,2),i=a[0],r=a[1];return b("div",{className:"prices-box",key:n},b(N.a,{key:n,index:n,treatment:i,prices:r,hotel:e.hotel,period:e.period}))}))),b("div",{className:"col-sm-2 text-right"},b(l.a,{as:"/accommodations/".concat(e.hotel.slug.it,"/booking/").concat(e.period.id,"?checkin=").concat(e.period.date_from,"&checkout=").concat(e.period.date_to),href:{pathname:"/accommodations/[accommodition]/booking/[period]"}},b("a",{className:"prices-goto with-top-border"}))))},w=function(e){return b("div",{className:"prices-box-container"},b("div",{className:"row"},console.log("periods",e.periods),e.periods&&e.periods.length>0&&e.periods.map((function(t,n){return b(_,{key:n,hotel:e.hotel,period:t})}))))},j=c.a.createElement,x=function(e){if(!e.page||e.page.length<=0)return j(f.a,{settings:{menu:e.menu}},j("div",null,"Data not found"));for(var t=e.page,n=[],a=1;a<=parseInt(t.stars);a++)n.push(j("i",{key:a,className:"ico ico-star"}));return j(f.a,{settings:{template:"accommodation-page",menu:e.menu},meta:{title:e.page.meta_title.it,description:e.page.meta_description.it,url:"".concat("https://www.nextravel.it","/accommodations/").concat(e.page.slug.it),image:e.page.media&&e.page.media.gallery&&e.page.media.gallery[0]?e.page.media.gallery[0].url:null}},j(v.a,null),j("section",{className:"single-hotel-section"},j("div",{className:"container"},j("figure",{className:"img-bgas"},j("img",{src:t.media&&t.media.gallery&&t.media.gallery[0]?t.media.gallery[0].url:"default",alt:t.media&&t.media.gallery&&t.media.gallery[0]&&t.media.gallery[0].name})),j("div",{className:"topline"},j("div",{className:"title mr-auto"},j("h1",null,t.name),j("div",{className:"stars"},n)),j("div",{className:"single-hotel-call ml-auto"},"chiama!\xa0",j("span",{className:"bold"},"347 512 3030"))))),j("section",{className:"section-main only-padding-bottom single-hotel-section"},j("div",{className:"container"},j("div",{className:"row"},j("div",{className:"col-lg-4"},j("div",{className:"content-box content-box-1"},j("div",{className:"titoletto"},"posizione"),j("div",{className:"description"},t.details.address,j("br",null),t.details.zip_code," ",t.details.city," (",t.details.state,")"),j("div",{className:"titoletto"},"distanze"),j("div",{className:"description"},j("div",{dangerouslySetInnerHTML:{__html:t.description_near.it}})),j("ul",{className:"hotel-service-list"},t.incServices&&t.incServices.length>0&&t.incServices.map((function(e,t){return j("li",{key:t},j("span",null,e.name))})))),j("div",{className:"content-box content-box-2"},j("div",{className:"description"},j("div",{dangerouslySetInnerHTML:{__html:t.description_short.it}}))),j("div",{className:"content-box content-box-3"},j("div",{className:"description"},j("div",{dangerouslySetInnerHTML:{__html:t.description.it}})))),j("div",{className:"col-lg-7 offset-lg-1"},console.log("hotel",t),j(w,{hotel:t,periods:e.periods}))))))};x.getInitialProps=function(){var e=Object(r.a)(i.a.mark((function e(t){var n,a,r,o,c,s,l,f,v,g;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,a=[],r=[],o=null,c=[],e.prev=5,s=new u.a,e.next=9,s.initApp();case 9:return l=e.sent,a=l.locs||[],r=l.hotelCategories||[],f=new d.a,e.next=15,f.get(1);case 15:return n=e.sent,v=new m.a,e.next=19,v.getBySlug(t.query.accommodation);case 19:if(!((o=e.sent)&&o.id>0)){e.next=25;break}return g=new p.a,e.next=24,g.query({hotel_id:o.id});case 24:c=e.sent;case 25:e.next=29;break;case 27:e.prev=27,e.t0=e.catch(5);case 29:return e.abrupt("return",{locs:a,hotelCategories:r,menu:n,page:o,periods:c});case 30:case"end":return e.stop()}}),e,null,[[5,27]])})));return function(t){return e.apply(this,arguments)}}();t.default=x}},[["msUd",0,2,6,5,1,3,4]]]);