import React from "react";
import moment from "moment";
import Link from "next/link";
import Head from 'next/Head';

// import { HotelSchema, makeHotelSchema } from "~/components/JsonLdSchema"

import SwiperCore, { Swiper, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import BaseService from "~/packages/BaseService";
import MenuService from "~/packages/Post/services/MenuService";
import PostService from "~/packages/Post/services/PostService";
import HotelService from "~/packages/TravelgoOne/services/HotelService";
import RateplanPeriodService from "~/packages/TravelgoOne/services/RateplanPeriodService";

import Layout from "~/components/Layouts/MainLayout/MainLayout";
import BookingSearchBox from "~/components/Partials/BookingSearchBox";
import BookingForm from "~/components/Partials/BookingForm";
import HotelAgeRangesTable from '~/components/Partials/HotelAgeRangesTable';
import HotelExtraServicesTable from '~/components/Partials/HotelExtraServicesTable';
import PriceTable from '~/components/Partials/PriceTable';
import PriceTableWrap from '~/components/Partials/PriceTableWrap';
import PriceTableWrap2 from '~/components/Partials/PriceTableWrap2';
import JsonLdSchema from "../../../../components/JsonLdSchema";


const BookingPage = props => {
  if (!props.hotel) {
    return (
      <Layout settings={{ menu: props.menu }}>
        <div>Data not found</div>
      </Layout>
    );
  }

  const period = props.period;
  const hotel = props.hotel;
  const swiperHotelThumbnail = React.useRef(null)

  let dateFrom = moment(period.date_from, "YYYY-MM-DD");
  let dateTo = moment(period.date_to, "YYYY-MM-DD");

  let stars = [];
  for (let i = 1; i <= parseInt(hotel.stars); i++) {
    stars.push(<i key={i} className="ico ico-star"></i>);
  }

  // let priceList = {};
  // for (const [key, treatmentObj] of Object.entries(props.period.viewPrices)) {
  //   priceList[key] = {
  //     n1: (treatmentObj.n1) ? treatmentObj.n1 : null,
  //     n2: (treatmentObj.n2) ? treatmentObj.n2 : null,
  //     n3: (treatmentObj.n3) ? treatmentObj.n3 : null,
  //     n4: (treatmentObj.n4) ? treatmentObj.n4 : null,
  //     n5: (treatmentObj.n5) ? treatmentObj.n5 : null,
  //     n6: (treatmentObj.n6) ? treatmentObj.n6 : null,
  //     n7: (treatmentObj.n7) ? treatmentObj.n7 : null,
  //   };
  // }

  // let priceList = {}
  // for (const [roomTypeName, roomTypeContent] of Object.entries(period.viewPeriodPrices)){
  //   priceList[roomTypeName] = {};
  //   if( roomTypeContent.prices ){
  //     for (const [key, treatmentObj] of Object.entries(roomTypeContent.prices)) {
  //       priceList[roomTypeName][key] = {
  //         n1: (treatmentObj.n1) ? treatmentObj.n1 : null,
  //         n2: (treatmentObj.n2) ? treatmentObj.n2 : null,
  //         n3: (treatmentObj.n3) ? treatmentObj.n3 : null,
  //         n4: (treatmentObj.n4) ? treatmentObj.n4 : null,
  //         n5: (treatmentObj.n5) ? treatmentObj.n5 : null,
  //         n6: (treatmentObj.n6) ? treatmentObj.n6 : null,
  //         n7: (treatmentObj.n7) ? treatmentObj.n7 : null,
  //       };
  //     }
  //   }
  // }

  React.useEffect(() => {
    swiperHotelThumbnail.current = new Swiper(`#swiperHotelThumbnail`, {
      grubCursor: false,
      simulateTouch : false,
      direction: 'horizontal',
      //speed: 600,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: `#swiperHotelThumbnail-button-next`,
        prevEl: `#swiperHotelThumbnail-button-prev`,
      }
    })
  }, [])

  return (
    <Layout 
      settings={{template:"booking-page", menu: props.menu}}
      meta={{
        title: `Booking ${props.hotel.meta_title.it}`,
        description: `Booking`,
        canonical: `${process.env.meta.url}/accommodations/${props.hotel.slug.it}`,
        url: `${process.env.meta.url}/accommodations/${props.hotel.slug.it}/booking`,
        image: (props.hotel.media && props.hotel.media.gallery && props.hotel.media.gallery[0]) ? props.hotel.media.gallery[0].url : null,
        // jsonlds:[
        //   <HotelSchema hotel={props.hotel} />
        // ]
      }}
      >
        {/* <Head>
          <script
            key={`jobJSON-${hotel.id}`}
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(makeHotelSchema(hotel)) }}
          />
        </Head> */}
      <BookingSearchBox />

      <section className="single-hotel-section">
        <div className="container">
          <div id={`swiperHotelThumbnail`} className="swiper-container swiperHotelThumbnail">
            <div className="swiper-wrapper">
              {hotel.media && hotel.media.gallery.map((img, index) => 
                <div className="swiper-slide" key={index}>
                  <figure className="img-bgas">
                    <img src={img.url} alt={img.name} />
                  </figure>
                </div>
              )}
              {(!hotel.media || !hotel.media.gallery) && 
                <div className="swiper-slide">
                  <figure class="img-bgas">
                    <img src="default" alt="" />
                  </figure>
                </div>
              }
            </div>
            <div id={`swiperHotelThumbnail-button-prev`} className="swiper-button-prev"></div>
            <div id={`swiperHotelThumbnail-button-next`} className="swiper-button-next"></div>
          </div>

          {/* <figure className="img-bgas">
            <img
              src={(hotel.media && hotel.media.gallery && hotel.media.gallery[0]) ? hotel.media.gallery[0].url : 'default'}
              alt={hotel.media && hotel.media.gallery && hotel.media.gallery[0] && hotel.media.gallery[0].name} 
              />
          </figure> */}

          <div className="topline">
            <div className="title mr-auto">
              <h1>
                {/* Hotel&nbsp;<strong>Sorriso</strong> */}
                {hotel.name}
              </h1>
              {/* <!-- &nbsp;&nbsp;&nbsp;&nbsp; --> */}
              <div className="stars">{stars}</div>
            </div>
            <div className="single-hotel-call ml-auto">
              chiama!&nbsp;<span className="bold">{process.env.contacts.phone.label}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="single-hotel-section">
        <div className="container">
          <div className="hotel-booking-box">
            <div className="box1">
              <div className="row">
                <div className="col-lg-6">
                {/* {priceList && Object.entries(priceList).map( ([treatment, prices], index) => 
                  <React.Fragment>
                    <div className="prices-box" key={index}>
                      <PriceTable 
                        key={index}
                        index={index}
                        treatment={treatment}
                        prices={prices}
                        hotel={hotel}
                        period={period}
                        />
                    </div>
                  </React.Fragment>
                )} */}
                <PriceTableWrap2 {...props} />

                {period.hotelAgeRanges && period.hotelAgeRanges.length > 0 && 
                  <HotelAgeRangesTable 
                    hotelAgeRanges={period.hotelAgeRanges} 
                    />
                  // <React.Fragment>
                  //   <span>Supplementi e Riduzioni per età</span>
                  //   <table className="prices-table">
                  //     <tbody>
                  //       {period.hotelAgeRanges.map( (obj, index) => 
                  //         <tr key={index}>
                  //           <td className="service-name">
                  //             {obj.age_min} - {obj.age_max}
                  //           </td>
                  //           <td className="service-price">
                  //             <span className="no-smartphone">{(obj.price_type == 'fixed') ? '€ ' : '+ '}</span>
                  //             {obj.price},-
                  //             {(obj.price_type == 'percent') ? ' %' : ''}
                  //           </td>
                  //         </tr>
                  //       )}
                  //     </tbody>
                  //   </table>
                  // </React.Fragment>
                }

                {hotel.extraServices && hotel.extraServices.length > 0 && 
                  <HotelExtraServicesTable 
                    extraServices={hotel.extraServices} 
                    />
                  // <React.Fragment>
                  //   <span>Servizi aggiuntivi</span>
                  //   <table class="prices-table">
                  //     <tbody>
                  //       {hotel.extraServices.map( (obj, index) => 
                  //         <tr key={index}>
                  //           <td className="service-name">
                  //             {obj.name}
                  //           </td>
                  //           <td className="service-price">
                  //             <span className="no-smartphone">{(obj.pivot.price_type == 'fixed') ? '€ ' : '+ '}</span>
                  //             {obj.pivot.price},-
                  //             {(obj.pivot.price_type == 'percent') ? ' %' : ''}
                  //           </td>
                  //         </tr>
                  //       )}
                  //     </tbody>
                  //   </table>
                  // </React.Fragment>
                }
                
                </div>
                <div className="col-lg-4 offset-lg-2">
                  <div className="description">
                    <div className="row mb-5">
                      <div className="col-lg-6">Offerta n. {period.id}</div>
                      <div className="col-lg-6">
                        dal {dateFrom.format("DD/MM/YYYY")}
                        <br />
                        al {dateTo.format("DD/MM/YYYY")}
                      </div>
                    </div>
                    per ulteriori informazioni contattaci a<br />
                    <span className="bold">{process.env.contacts.email.label}</span>
                  </div>

                  {/* <!-- <div className="price">
                      <span className="from">da</span>
                      <span className="value">&euro; 2059,-</span>
                  </div> --> */}
                </div>
              </div>
            </div>

            <BookingForm 
              rateplan={props.period.rateplan || null}
              hotel={props.period.rateplan.hotel || null}
              query={props.query} 
              period={props.period} 
              />
          </div>
        </div>
      </section>

      <section className="section-main single-hotel-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="content-box content-box-1">
                <div className="titoletto">posizione</div>
                <div className="description">
                  {hotel.details.address}<br/>
                  {hotel.details.zip_code} {hotel.details.city} ({hotel.details.state})
                </div>

                <div className="titoletto">distanze</div>
                <div className="description">
                  <div dangerouslySetInnerHTML={{ __html: hotel.description_near.it }} />
                </div>

                {/* <div className="description">
                  <p>
                    Piano famiglia 4=3 1 bambino fino a 12 anni in camera con 2
                    adulti Gratis
                  </p>
                </div> */}

                <ul className="hotel-service-list">
                  {hotel.incServices && hotel.incServices.length > 0 && hotel.incServices.map( (obj, index) => 
                    <li key={index}>
                      <span>
                        {/* ico */}
                        {/* <i className="ico ico-childrens"></i> */}
                        {obj.name}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="content-box content-box-2">
                <div className="description">
                  <div dangerouslySetInnerHTML={{ __html: hotel.description_short.it }} />
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="content-box content-box-3">
                <div className="description">
                  <div dangerouslySetInnerHTML={{ __html: hotel.description_short.it }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

BookingPage.getInitialProps = async params => {
  let locs = [];
  let hotelCategories = [];
  let menu = null;
  let page = null;
  let hotel = null;
  let period = null;

  let query = {
    checkin: params.query.checkin || null,
    checkout: params.query.checkout || null,
    treatment: params.query.treatment || null,
    room_type_id: params.query.room_type_id || null,
    nights: params.query.nights || null,
  }

  try {
    let baseService = new BaseService();
    let init = await baseService.initApp();
    locs = init.locs || [];
    hotelCategories = init.hotelCategories || [];

    let menuService = new MenuService();
    menu = await menuService.get(1);

    let rateplanPeriodService = new RateplanPeriodService();
    period = await rateplanPeriodService.get(params.query.id);

    if( period && period.rateplan && period.rateplan.hotel) {
      hotel = period.rateplan.hotel
    }
  } catch (e) {}

  return {
    query,
    locs,
    hotelCategories,
    menu,
    page,
    hotel,
    period
  };
};

export default BookingPage;
