_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"57t+":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("1OyB"),o=n("Ji7U"),r=n("md7G"),c=n("foSv");n("vDqi");function i(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(r.a)(this,n)}}var s=function(t){Object(o.a)(n,t);var e=i(n);function n(){return Object(a.a)(this,n),e.call(this,"/post/menu")}return n}(n("jC1T").a)},"6Brv":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("1OyB"),o=n("vuIU"),r=n("Ji7U"),c=n("md7G"),i=n("foSv"),s=n("vDqi"),l=n.n(s);function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(i.a)(t);if(e){var o=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(c.a)(this,n)}}var d=function(t){Object(r.a)(n,t);var e=u(n);function n(){return Object(a.a)(this,n),e.call(this,"/travelgo-one/hotels")}return Object(o.a)(n,[{key:"query",value:function(t){return l.a.get("".concat(this.url,"/query"),{params:t},this.config).then((function(t){return Promise.resolve(t.data)})).catch((function(t){return Promise.reject(t)}))}}]),n}(n("jC1T").a)},DwHP:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/strutture-ricettive",function(){return n("bpkj")}])},Hw1s:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("rePB"),o=n("q1tI"),r=(n.n(o).a.createElement,function(t){return{"@context":"http://schema.org","@type":"Hotel",name:t.name,description:t.description.it,url:"https://www.nextravel.it/strutture-ricettive/"+t.slug.it,email:"info@nextravel.it",telephone:"347 512 3030",image:(e=t,e.media&&e.media.thumbnail&&e.media.thumbnail[0]?e.media.thumbnail[0].url:e.media&&e.media.gallery&&e.media.gallery[0]?e.media.gallery[0].url:""),logo:"https://www.nextravel.it/images/logo.png",address:Object(a.a)({"@type":"PostalAddress",addressLocality:t.details?t.details.city:"",addressRegion:t.details?t.details.state:"",postalcode:t.details?t.details.zip_code:"",streetAddress:t.details?t.details.address:""},"addressRegion",t.details?t.details.state:""),openingHours:["Mo-Sa 00:00-24-00"],hasMap:t.details?t.details.gmap:"",geo:{"@type":"GeoCoordinates",latitude:t.details?t.details.lat:"",longitude:t.details?t.details.lng:""},contactPoint:{"@type":"ContactPoint",telephone:"347 512 3030",email:"info@nextravel.it",contactType:"reservations"},aggregateRating:{"@type":"AggregateRating",bestRating:t.rating_details?t.rating_details.bestRating:"0",ratingCount:t.rating_details?t.rating_details.ratingCount:"0",ratingValue:t.rating_details?t.rating_details.ratingValue:"0",reviewCount:t.rating_details?t.rating_details.reviewCount:"0",priceRange:"\u20ac30-\u20ac110"}};var e})},TvVg:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("1OyB"),o=n("Ji7U"),r=n("md7G"),c=n("foSv");n("vDqi");function i(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(r.a)(this,n)}}var s=function(t){Object(o.a)(n,t);var e=i(n);function n(){return Object(a.a)(this,n),e.call(this,"/post/posts")}return n}(n("jC1T").a)},V5Fq:function(t,e,n){"use strict";var a=n("q1tI"),o=n.n(a),r=(n("wd/R"),n("YFqc")),c=n.n(r),i=o.a.createElement;e.a=function(t){var e=t.prices,n="";switch(t.treatment){case"RO":n="Solo Camera";break;case"BB":n="Camera e Colazione";break;case"HB":n="Mezza Pensione";break;case"FB":n="Pensione Completa";break;case"HBB":n="Mezza Completa + Bevande";break;case"FBB":n="Pensione Completa + Bevande";break;case"ALL_INCLUSIVE":n="All inclusive"}return i("div",{className:"prices-box-details",key:t.index},i("div",{className:"prices-top"},i("div",{className:"prices-details"},i("span",null,n," / prezzi p.p.")),t.priceTableLink&&i(c.a,{as:"".concat("/strutture-ricettive","/").concat(t.hotel.slug.it,"/booking/").concat(t.period.id,"?checkin=").concat(t.period.date_from,"&checkout=").concat(t.period.date_to,"&room_type_id=").concat(t.room_type?t.room_type.id:"","&treatment=").concat(t.treatment),href:{pathname:"".concat("/strutture-ricettive","/[accommodition]/booking/[id]"),query:{checkin:t.period.date_from,checkout:t.period.date_to,treatment:t.treatment,room_type_id:t.room_type?t.room_type.id:null}}},i("a",{className:"prices-goto"}))),i("table",{className:"prices-table"},i("thead",null,i("tr",{className:"yes-smartphone"},i("th",{colSpan:"7"},"notti")),i("tr",null,i("th",null,"1 ",i("span",{className:"no-smartphone"},"notti")),i("th",null,"2 ",i("span",{className:"no-smartphone"},"notti")),i("th",null,"3 ",i("span",{className:"no-smartphone"},"notti")),i("th",null,"4 ",i("span",{className:"no-smartphone"},"notti")),i("th",null,"5 ",i("span",{className:"no-smartphone"},"notti")),i("th",null,"6 ",i("span",{className:"no-smartphone"},"notti")),i("th",null,"7 ",i("span",{className:"no-smartphone"},"notti")))),i("tbody",null,i("tr",null,i("td",null,e.n1&&i(c.a,{as:"".concat("/strutture-ricettive","/").concat(t.hotel.slug.it,"/booking/").concat(t.period.id,"?checkin=").concat(t.period.date_from,"&checkout=").concat(t.period.date_to,"&room_type_id=").concat(t.room_type?t.room_type.id:"","&treatment=").concat(t.treatment,"&nights=1"),href:{pathname:"".concat("/strutture-ricettive","/[accommodition]/booking/[id]"),query:{checkin:t.period.date_from,checkout:t.period.date_to,treatment:t.treatment,room_type_id:t.room_type?t.room_type.id:null,nights:1}}},i("a",null,i("span",{className:"no-smartphone"},"\u20ac")," ",e.n1,",-")),!e.n1&&"-"),i("td",null,e.n2&&i(c.a,{as:"".concat("/strutture-ricettive","/").concat(t.hotel.slug.it,"/booking/").concat(t.period.id,"?checkin=").concat(t.period.date_from,"&checkout=").concat(t.period.date_to,"&room_type_id=").concat(t.room_type?t.room_type.id:"","&treatment=").concat(t.treatment,"&nights=2"),href:{pathname:"".concat("/strutture-ricettive","/[accommodition]/booking/[id]"),query:{checkin:t.period.date_from,checkout:t.period.date_to,treatment:t.treatment,room_type_id:t.room_type?t.room_type.id:null,nights:2}}},i("a",null,i("span",{className:"no-smartphone"},"\u20ac")," ",e.n2,",-")),!e.n2&&"-"),i("td",null,e.n3&&i(c.a,{as:"".concat("/strutture-ricettive","/").concat(t.hotel.slug.it,"/booking/").concat(t.period.id,"?checkin=").concat(t.period.date_from,"&checkout=").concat(t.period.date_to,"&room_type_id=").concat(t.room_type?t.room_type.id:"","&treatment=").concat(t.treatment,"&nights=3"),href:{pathname:"".concat("/strutture-ricettive","/[accommodition]/booking/[id]"),query:{checkin:t.period.date_from,checkout:t.period.date_to,treatment:t.treatment,room_type_id:t.room_type?t.room_type.id:null,nights:3}}},i("a",null,i("span",{className:"no-smartphone"},"\u20ac")," ",e.n3,",-")),!e.n3&&"-"),i("td",null,e.n4&&i(c.a,{as:"".concat("/strutture-ricettive","/").concat(t.hotel.slug.it,"/booking/").concat(t.period.id,"?checkin=").concat(t.period.date_from,"&checkout=").concat(t.period.date_to,"&room_type_id=").concat(t.room_type?t.room_type.id:"","&treatment=").concat(t.treatment,"&nights=4"),href:{pathname:"".concat("/strutture-ricettive","/[accommodition]/booking/[id]"),query:{checkin:t.period.date_from,checkout:t.period.date_to,treatment:t.treatment,room_type_id:t.room_type?t.room_type.id:null,nights:4}}},i("a",null,i("span",{className:"no-smartphone"},"\u20ac")," ",e.n4,",-")),!e.n4&&"-"),i("td",null,e.n5&&i(c.a,{as:"".concat("/strutture-ricettive","/").concat(t.hotel.slug.it,"/booking/").concat(t.period.id,"?checkin=").concat(t.period.date_from,"&checkout=").concat(t.period.date_to,"&room_type_id=").concat(t.room_type?t.room_type.id:"","&treatment=").concat(t.treatment,"&nights=5"),href:{pathname:"".concat("/strutture-ricettive","/[accommodition]/booking/[id]"),query:{checkin:t.period.date_from,checkout:t.period.date_to,treatment:t.treatment,room_type_id:t.room_type?t.room_type.id:null,nights:5}}},i("a",null,i("span",{className:"no-smartphone"},"\u20ac")," ",e.n5,",-")),!e.n5&&"-"),i("td",null,e.n6&&i(c.a,{as:"".concat("/strutture-ricettive","/").concat(t.hotel.slug.it,"/booking/").concat(t.period.id,"?checkin=").concat(t.period.date_from,"&checkout=").concat(t.period.date_to,"&room_type_id=").concat(t.room_type?t.room_type.id:"","&treatment=").concat(t.treatment,"&nights=6"),href:{pathname:"".concat("/strutture-ricettive","/[accommodition]/booking/[id]"),query:{checkin:t.period.date_from,checkout:t.period.date_to,treatment:t.treatment,room_type_id:t.room_type?t.room_type.id:null,nights:6}}},i("a",null,i("span",{className:"no-smartphone"},"\u20ac")," ",e.n6,",-")),!e.n6&&"-"),i("td",null,e.n7&&i(c.a,{as:"".concat("/strutture-ricettive","/").concat(t.hotel.slug.it,"/booking/").concat(t.period.id,"?checkin=").concat(t.period.date_from,"&checkout=").concat(t.period.date_to,"&room_type_id=").concat(t.room_type?t.room_type.id:"","&treatment=").concat(t.treatment,"&nights=7"),href:{pathname:"".concat("/strutture-ricettive","/[accommodition]/booking/[id]"),query:{checkin:t.period.date_from,checkout:t.period.date_to,treatment:t.treatment,room_type_id:t.room_type?t.room_type.id:null,nights:7}}},i("a",null,i("span",{className:"no-smartphone"},"\u20ac")," ",e.n7,",-")),!e.n7&&"-")))))}},bpkj:function(t,e,n){"use strict";n.r(e);var a=n("o0o1"),o=n.n(a),r=n("HaE+"),c=n("ODXe"),i=n("q1tI"),s=n.n(i),l=(n("YFqc"),n("8Kt/")),u=n.n(l),d=n("Hw1s"),m=n("57t+"),p=n("TvVg"),h=n("6Brv"),_=n("JHTH"),f=n("8Mm2"),y=n("hm/Q"),g=s.a.createElement,v=function(t){return!t.page||t.page.length<=0?g(_.a,{settings:{menu:t.menu}},g("div",null,"Data not found")):g(_.a,{settings:{template:"accommodation-page",menu:t.menu},meta:{title:t.page.meta_title.it,description:t.page.meta_description.it,url:"".concat("https://www.nextravel.it","/accommodations"),image:t.page.media&&t.page.media.thumbnails&&t.page.media.thumbnails[0]?t.page.media.thumbnails[0].url:null}},g(u.a,null,t.hotels&&t.hotels.data&&t.hotels.data.length>0&&Object.entries(t.hotels.data).map((function(t){var e=Object(c.a)(t,2),n=(e[0],e[1]);return g("script",{key:"jobJSON-".concat(n.id),type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(Object(d.a)(n))}})}))),g(f.a,{query:t.query}),g("section",{className:"section-main"},g("div",{className:"container"},g("div",{className:"primary-title text-center"},g("h2",null,"Prenota la tua vacanza tra una vasta scelta di Hotel selezionati.")),g("div",{className:"primary-description text-center"},"Per qualsiasi informazione non esitare a contattarci allo"," ",g("strong",null,"347 512 3030")))),g(y.a,{hotels:t.hotels&&t.hotels.data?t.hotels.data:[],meta:t.hotels.meta,filter:t.hotels.filter}))};v.getInitialProps=function(){var t=Object(r.a)(o.a.mark((function t(e){var n,a,r,c,i,s,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("ctx",e),n={loc_id:e.query.loc_id||"",category_id:e.query.category_id||"",checkin:e.query.checkin||"",checkout:e.query.checkout||"",hasEmptyPeriods:!0,page:e.query.page||1,orderBy:"order_seq",orderHow:"asc",paginate:30},a=null,r=null,c=[],t.prev=5,i=new m.a,t.next=9,i.get(1);case 9:return a=t.sent,s=new p.a,t.next=13,s.get(2);case 13:return r=t.sent,l=new h.a,t.next=17,l.query(n);case 17:(c=t.sent).filter=n,t.next=23;break;case 21:t.prev=21,t.t0=t.catch(5);case 23:return t.abrupt("return",{params:e.params,query:e.query,menu:a,page:r,hotels:c});case 24:case"end":return t.stop()}}),t,null,[[5,21]])})));return function(e){return t.apply(this,arguments)}}(),e.default=v}},[["DwHP",1,2,4,7,0,3,5,6,9]]]);