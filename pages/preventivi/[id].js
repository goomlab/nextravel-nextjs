import React from "react";
import moment from "moment";
import Link from "next/link";

import SwiperCore, { Swiper, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import PracticeService from "~/packages/TravelgoOne/services/PracticeService";
import BaseService from "~/packages/BaseService";
import MenuService from "~/packages/Post/services/MenuService";
// import HotelService from "~/packages/TravelgoOne/services/HotelService";
// import RateplanPeriodService from "~/packages/TravelgoOne/services/RateplanPeriodService";

import Layout from "~/components/Layouts/MainLayout/MainLayout";
// import BookingSearchBox from "~/components/Partials/BookingSearchBox";
// import BookingForm from "~/components/Partials/BookingForm";
// import PriceTable from '~/components/Partials/PriceTable';
// import { query } from "express";

const PracticePage = props => {console.log('props',props)
  if (!props.practice || props.practice.length <= 0) {
    return (
      <Layout settings={{ menu: props.menu }}>
        <div>Data not found</div>
      </Layout>
    );
  }
  console.log(props.practice);
  return('ciao');

  // const period = props.period;
  const hotel = props.practice.hotel;
  const swiperHotelThumbnail = React.useRef(null)

  // let dateFrom = moment(period.date_from, "YYYY-MM-DD");
  // let dateTo = moment(period.date_to, "YYYY-MM-DD");

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
        title: `Preventivo ${props.practice.id}`,
        description: `Preventivo ${props.practice.id}`,
        url: `${process.env.meta.url}/preventivi/${props.practice.id}`,
        image: (props.hotel.media && props.practice.hotel.media.gallery && props.practice.hotel.media.gallery[0]) ? props.practice.hotel.media.gallery[0].url : null
      }}
      >

      <section className="single-hotel-section">
        <div className="container">
          <div id={`swiperHotelThumbnail`} className="swiper-container swiperHotelThumbnail">
            <div className="swiper-wrapper">
              {hotel.media && hotel.media.gallery.map((img, index) => 
                <div className="swiper-slide" key={index}>
                  <figure class="img-bgas">
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

      {/* <section className="single-hotel-section">
        <div className="container">
          <div className="hotel-booking-box">
            <div className="box1">
              <div className="row">
                <div className="col-lg-6">
                {priceList && Object.entries(priceList).map( ([treatment, prices], index) => 
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
                )}

                <span>Servizi aggiuntivi</span>
                <table class="prices-table">
                  {hotel.extraServices && hotel.extraServices.length > 0 && hotel.extraServices.map( (obj, index) => 
                    <tr key={index}>
                      <td className="service-name">
                        {obj.name}
                      </td>
                      <td className="service-price">
                        <span className="no-smartphone">{(obj.pivot.price_type == 'fixed') ? '€ ' : '+ '}</span>
                        {obj.pivot.price},-
                        {(obj.pivot.price_type == 'percent') ? ' %' : ''}
                      </td>
                    </tr>
                  )}
                </table>
                
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
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}

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

PracticePage.getInitialProps = async params => {
  let menu = null;
  let practice = null;
  let error = null;

  try {
    let practiceService = new PracticeService();
    practice = practiceService.get(params.query.id);

    let menuService = new MenuService();
    menu = await menuService.get(1);
  } catch (e) {
    error = e;
  }

  return {
    error,
    menu,
    practice,
  };
};

export default PracticePage;
