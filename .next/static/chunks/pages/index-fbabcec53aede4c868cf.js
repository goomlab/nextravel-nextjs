_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{RNiq:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),r=a.n(n),i=a("HaE+"),c=a("ODXe"),o=a("q1tI"),s=a.n(o),l=a("/MKj"),u=a("YFqc"),m=a.n(u),f=a("8Kt/"),d=a.n(f),v=a("Hw1s"),p=a("jC1T"),h=a("57t+"),g=a("TvVg"),N=(a("6Brv"),a("1OyB")),b=a("Ji7U"),y=a("md7G"),E=a("foSv");a("vDqi");function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(E.a)(e);if(t){var r=Object(E.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(y.a)(this,a)}}p.a;function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(E.a)(e);if(t){var r=Object(E.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(y.a)(this,a)}}p.a;var w=a("bxpL"),I=a("JHTH"),O=a("8Mm2"),S=a("hm/Q"),R=a("wd/R"),j=a.n(R),C=s.a.createElement,P=function(e){j.a.locale("it");var t=j()();return C("section",{className:"section-main section-home-primopiano"},C("div",{className:"container"},C("div",{className:"box-home-primopiano"},C("div",{className:"row"},C("div",{className:"col-lg-4"},C("div",{className:"home-primopiano-item"},C("div",{className:"title"},"Transfer traghetto"),C("div",{className:"description"},"Prenota l\u2019Hotel con noi ed avrai il Traghetto per Ischia a soli \u20ac136 \u20ac70 A/R Auto+Conducente*"),C("div",{className:"note"},"*offerta non valida dal 26-Dic e dal 03-Gen"),C("div",{className:"row"},C("div",{className:"col-sm-6"},C("a",{href:"#",className:"btn btn-transparent"},"scopri")),C("div",{className:"col-sm-6"},C("i",{className:"ico ico-nave"}))))),e.busPage&&C("div",{className:"col-lg-4"},C("div",{className:"home-primopiano-item"},C("div",{className:"title"},e.busPage.title.it),C("div",{className:"description"},C("span",{dangerouslySetInnerHTML:{__html:e.busPage.content_short.it}})),C("div",{className:"row"},C("div",{className:"col-sm-6"},C(m.a,{href:e.busPage.page_path.it},C("a",{className:"btn btn-transparent"},"scopri"))),C("div",{className:"col-sm-6"},C("i",{className:"ico ico-orologio"}))))),C("div",{className:"col-lg-4"},C("div",{className:"home-primopiano-item"},C("div",{className:"title"},"Offerte del mese"),C("div",{className:"description"},C("p",null,"Tutte le offerte di ",C("strong",null,t.format("MMMM")," ",t.format("YYYY"))," a portata di click. Non perdere l'occasione.")),C("div",{className:"row"},C("div",{className:"col-sm-6"},C(m.a,{href:"".concat("/offerte","/[slug]"),as:"".concat("/offerte","/").concat(t.format("MMMM").toLowerCase())},C("a",{className:"btn btn-transparent"},"scopri"))),C("div",{className:"col-sm-6"},C("i",{className:"ico ico-cal"})))))))))},L=a("UGp+"),M=a("KYPV"),k=a("mI8k"),D=s.a.createElement,x=Object(l.b)((function(e){return{newsletter:e.newsletter}}),(function(e){var t=new k.a;return{setContact:function(a){e(t.setItem(a))},resetContact:function(){e(t.resetItem())},getClientIp:function(){e(t.getClientIp())},createContact:function(a){e(t.sendinblue_createContact(a))}}}))((function(e){s.a.useEffect((function(){e.getClientIp()}),[]);var t=function(t){t.persist(),console.log("onChage",t);var a=Object.assign({},e.newsletter);switch(t.target.name){case"privacy":a[t.target.name]=t.target.checked?1:0;break;default:a[t.target.name]=t.target.value}e.setContact(a)},a=Object(M.a)({initialValues:{email:e.newsletter.email||"",privacy:e.newsletter.privacy||0},validationSchema:L.b().shape({email:L.c().required("Campo non valido"),privacy:L.a().min(1,"Campo non valido").max(1,"Campo non valido")}),enableReinitialize:!0,onSubmit:function(){e.createContact(e.newsletter)}});return D("section",{className:"section-main section-newsletter"},D("div",{className:"container"},D("div",{className:"row"},D("div",{className:"col-lg-5"},D("div",{className:"description"},D("strong",null,"Inserisci la tua email.",D("br",null),"Sarai aggiornato su tutte le offerte."),D("br",null),"Alcune sono riservate ai soli iscritti.",D("br",null),"Per una vacanza su misura contatta",D("br",null),"il nostro booking ","347 512 3030")),D("div",{className:"col-lg-6 offset-lg-1"},D("form",{onSubmit:a.handleSubmit,className:"needs-validation"+(a.errors?"was-validated":""),noValidate:!0},D("div",{className:"form-template-1"},D("div",{className:"row"},D("div",{className:"col-lg-9"},D("div",{className:"form-group"},D("input",{type:"email",className:"form-control"+(a.errors.email?" is-invalid":""),id:"newsletter_email",name:"email",placeholder:"Email",value:a.values.email||"",onChange:function(e){t(e),a.handleChange(e)}}),a.errors.email&&D("div",{className:"invalid-feedback"},a.errors.email)),D("div",{className:"form-group"},D("div",{className:"custom-control custom-checkbox"},D("input",{type:"checkbox",className:"custom-control-input"+(a.errors.privacy?" is-invalid":""),name:"privacy",id:"newsletter_privacy",value:"1",checked:1==a.values.privacy?1:0,onChange:function(e){t(e),a.handleChange(e)}}),D("label",{className:"custom-control-label",htmlFor:"newsletter_privacy"},"Acconsento al trattamento dei miei dati ai sensi dell\u2019informativa sulla ",D("a",{href:"/privacy-policy",target:"_blank",rel:"nofollow"},"Privacy"),"."),a.errors.privacy&&D("div",{className:"invalid-feedback"},a.errors.privacy)))),D("div",{className:"col-lg-3"},D("div",{className:"form-group"},D("button",{type:"submit",className:"btn btn-green"},"iscriviti"))))))))))})),q=s.a.createElement,H=function(e){if(!e.page||e.page.length<=0)return q(I.a,{settings:{menu:e.menu}},q("div",null,"Data not found"));s.a.useEffect((function(){e.query({hasEmptyPeriods:!0,orderBy:"order_seq",orderHow:"asc",page:e.hotelSeatchParams.page,paginate:4})}),[]);var t=s.a.useState(e.hotelLoading),a=Object(c.a)(t,2),n=(a[0],a[1]);function r(){var t=window.pageYOffset,a=document.getElementById("hotel-archive-end").offsetTop;0==e.hotelLoading&&t>a-window.innerHeight&&(n(1),e.query({hasEmptyPeriods:!0,orderBy:"order_seq",orderHow:"asc",page:e.hotelSeatchParams.page,paginate:4}))}return s.a.useEffect((function(){return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}})),q(I.a,{settings:{template:"front-page",menu:e.menu},meta:{title:e.page.meta_title.it,description:e.page.meta_description.it,url:"".concat("https://www.nextravel.it"),image:e.page.media&&e.page.media.thumbnails&&e.page.media.thumbnails[0]?e.page.media.thumbnails[0].url:null}},e.hotels&&e.hotels&&q(d.a,null,e.hotels&&e.hotels&&Object.entries(e.hotels).map((function(e){var t=Object(c.a)(e,2),a=(t[0],t[1]);return q("script",{key:"jobJSON-".concat(a.id),type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(Object(v.a)(a))}})}))),q("section",{className:"section-main section-first home"},q("div",{className:"container"},q("div",{className:"row"},q("div",{className:"col-lg-7"},q("div",{className:"primary-title"},q("h1",null,e.page.subtitle.it),q("span",{style:{color:"#384044",textDecoration:"underline"}},"Chiama! ","347 512 3030"))),q("div",{className:"col-lg-4 col-offset-1"},q("div",{className:"primary-description"},q("div",{dangerouslySetInnerHTML:{__html:e.page.content.it}})))))),q(O.a,{query:e.query,full:!0}),q("section",{className:"section-main"},q("div",{className:"container"},q("div",{className:"primary-title text-center"},q("h2",null,"Prenota la tua vacanza tra una vasta scelta di Hotel selezionati.")),q("div",{className:"primary-description text-center"},"Per qualsiasi informazione non esitare a contattarci allo"," ",q("strong",null,"347 512 3030")))),q(S.a,{hotels:e.hotels?e.hotels:[]}),e.hotels&&e.hotels.meta&&parseInt(e.hotels.meta.to)<parseInt(e.hotels.meta.last_page)&&q("section",{className:"section-main"},q("div",{className:"container text-center"},q(m.a,{href:"".concat("/strutture-ricettive"),as:"".concat("/strutture-ricettive","?page=2")},q("a",{className:"btn btn-more"},"Carica le altre offerte")))),q(P,e),q(x,null))};H.getInitialProps=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n,i,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,n=null,i=null,[],e.prev=4,c=new h.a,e.next=8,c.get(1);case 8:return a=e.sent,o=new g.a,e.next=12,o.get(1);case 12:return n=e.sent,e.next=15,o.get(3);case 15:i=e.sent,e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),console.log("error",e.t0);case 21:return e.abrupt("return",{params:t.params,query:t.query,menu:a,page:n,busPage:i});case 22:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}();t.default=Object(l.b)((function(e){return{hotelLoading:e.hotel.loading,hotelSeatchParams:e.hotel.params,hotels:e.hotel.items,hotelMeta:e.hotel.meta}}),(function(e){var t=new w.a;return{loading:function(a){e(t.loading(a))},query:function(a){e(t.query(a))}}}))(H)},bxpL:function(e,t,a){"use strict";a.d(t,"b",(function(){return f})),a.d(t,"a",(function(){return d}));var n=a("1OyB"),r=a("vuIU"),i=a("Ji7U"),c=a("md7G"),o=a("foSv"),s=a("sYsk"),l=a("XvPD"),u=(a("YRjj"),a("6Brv"));function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(o.a)(e);if(t){var r=Object(o.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(c.a)(this,a)}}var f={LOADING:"HOTEL_LIST_LOADING",ITEMS:"HOTEL_LIST_ITEMS",RESET_ITEMS:"HOTEL_LIST_RESET_ITEMS"},d=function(e){Object(i.a)(a,e);var t=m(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).service=new u.a,e.consts=f,e}return Object(r.a)(a,[{key:"loading",value:function(e){var t=this;return function(a){a({type:t.consts.LOADING,loading:e})}}},{key:"query",value:function(e){var t=this;return function(a){a(l.a.show()),a(t.loading(1)),t.service.query(e).then((function(e){a({type:t.consts.ITEMS,items:e.data,meta:e.meta}),a(l.a.hide()),parseInt(e.meta.last_page)>1?a(t.loading(0)):a(t.loading(1))})).catch((function(e){a({type:t.consts.RESET_ITEMS,items:[],meta:null}),a(l.a.hide()),a(t.loading(0))}))}}}]),a}(s.a)},mI8k:function(e,t,a){"use strict";a.d(t,"b",(function(){return h})),a.d(t,"a",(function(){return g}));var n=a("1OyB"),r=a("vuIU"),i=a("Ji7U"),c=a("md7G"),o=a("foSv"),s=a("sYsk"),l=a("XvPD"),u=a("YRjj"),m=a("vDqi"),f=a.n(m);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(o.a)(e);if(t){var r=Object(o.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(c.a)(this,a)}}var v=function(e){Object(i.a)(a,e);var t=d(a);function a(){return Object(n.a)(this,a),t.call(this,"/newsletter")}return Object(r.a)(a,[{key:"getClientIp",value:function(){return f.a.get("/get-client-ip",this.config).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}))}},{key:"sendinblue_createContact",value:function(e){return f.a.post("".concat(this.url,"/sendinblue/contacts"),e,this.config).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}))}}]),a}(a("jC1T").a);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(o.a)(e);if(t){var r=Object(o.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(c.a)(this,a)}}var h={SET_ITEM:"NEWSLETTER_SET_ITEM",RESET_ITEM:"NEWSLETTER_RESET_ITEM",GET_CLIENT_IP:"NEWSLETTER_GET_CLIENT_IP",SENDINBLUE_CREATE_CONTACT:"NEWSLETTER_SENDINBLUE_CREATE_CONTACT"},g=function(e){Object(i.a)(a,e);var t=p(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).service=new v,e.consts=h,e}return Object(r.a)(a,[{key:"setItem",value:function(e){var t=this;return function(a){a({type:t.consts.SET_ITEM,item:e})}}},{key:"resetItem",value:function(){var e=this;return function(t){t({type:e.consts.RESET_ITEM})}}},{key:"getClientIp",value:function(){var e=this;return function(t){e.service.getClientIp().then((function(a){t({type:e.consts.GET_CLIENT_IP,clientIp:a.data.clientIp})})).catch((function(e){}))}}},{key:"sendinblue_createContact",value:function(e){var t=this;return function(a){a(l.a.show()),t.service.sendinblue_createContact(e).then((function(e){a(t.resetItem()),a(u.b.alertMessageSuccess("Ti ringraziamo per esserti registrato alla newsletter. Ti terremo aggiornati sulle nostre offerte.")),a(l.a.hide())})).catch((function(e){a(u.b.alertMessageError(e.response.data.meta.message)),a(l.a.hide())}))}}}]),a}(s.a)},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",1,2,4,7,0,3,5,6,8,10]]]);