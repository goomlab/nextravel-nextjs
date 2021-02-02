import React from "react";
import Link from "next/link";

import SwiperCore, { Swiper, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import BaseService from "~/packages/BaseService";
import MenuService from "~/packages/Post/services/MenuService";
import PostService from "~/packages/Post/services/PostService";
import HotelService from "~/packages/TravelgoOne/services/HotelService";
// import LastminuteService from "~/packages/TravelgoOne/services/LastminuteService";
import RateplanPeriodService from "~/packages/TravelgoOne/services/RateplanPeriodService";

import Layout from "~/components/Layouts/MainLayout/MainLayout";
import BookingSearchBox from "~/components/Partials/BookingSearchBox";
import PeriodArchive from "~/components/Partials/PeriodArchive";
import HotelExtraServicesTable from '~/components/Partials/HotelExtraServicesTable';

const HotelPage = props => {
  if (!props.page || props.page.length <= 0) {
    return (
      <Layout settings={{ menu: props.menu }}>
        <div>Data not found</div>
      </Layout>
    );
  }

  const hotel = props.page;
  const swiperHotelThumbnail = React.useRef(null)
  
  let stars = [];
  for( let i = 1; i <= parseInt(hotel.stars); i++ ) {
    stars.push(<i key={i} className="ico ico-star"></i>);
  }

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
      settings={{template:"accommodation-page", menu: props.menu}}
      meta={{
        title: props.page.meta_title.it,
        description: props.page.meta_description.it,
        url: `${process.env.meta.url}/accommodations/${props.page.slug.it}`,
        image: (props.page.media && props.page.media.gallery && props.page.media.gallery[0]) ? props.page.media.gallery[0].url : null
        // image: (props.page.media && props.page.media.thumbnails && props.page.media.thumbnails[0]) ? props.page.media.thumbnails[0].url : null
      }}
      >
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
                  <figure classNAme="img-bgas">
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
              <div className="stars">
                {stars}
              </div>
            </div>
            <div className="single-hotel-call ml-auto">
              chiama!&nbsp;<span className="bold">{process.env.contacts.phone.label}</span>
            </div>
          </div>
        </div>
      </section>


      <section className="section-main only-padding-bottom single-hotel-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="content-box content-box-1">
                <div className="titoletto">
                  posizione
                </div>
                <div className="description">
                  {hotel.details.address}<br/>
                  {hotel.details.zip_code} {hotel.details.city} ({hotel.details.state})
                </div>

                <div className="titoletto">
                    distanze
                </div>
                <div className="description">
                  <div dangerouslySetInnerHTML={{ __html: hotel.description_near.it }} />
                </div>
                {/* <div className="description">
                  Piano famiglia 4=3 1 bambino fino a 12 anni in camera con 2 adulti Gratis
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
                                
              <div className="content-box content-box-2">
                <div className="description">
                  <div dangerouslySetInnerHTML={{ __html: hotel.description_short.it }} />
                </div>
              </div>
                                
              <div className="content-box content-box-3">
                <div className="description">
                  <div dangerouslySetInnerHTML={{ __html: hotel.description.it }} />
                </div>
              </div>
            </div>

            <div className="col-lg-7 offset-lg-1">
              <PeriodArchive
                hotel={hotel}
                periods={props.periods}
                hasHotelAgeRanges={true}
                />

              {hotel.extraServices && hotel.extraServices.length > 0 && 
                <HotelExtraServicesTable
                  extraServices={hotel.extraServices}
                  />
                // <div className="row">
                //   <div className="col-sm-10">
                //     <span>Servizi aggiuntivi</span>
                //     <table class="prices-table">
                //       <tbody>
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
                //       </tbody>
                //     </table>
                //   </div>
                // </div>
              }

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

HotelPage.getInitialProps = async params => {
  let menu = null;
  let locs = [];
  let hotelCategories = [];
  let page = null;
  let periods = [];
  try {
    let baseService = new BaseService();
    let init = await baseService.initApp();
    locs = init.locs || [];
    hotelCategories = init.hotelCategories || [];

    let menuService = new MenuService();
    menu = await menuService.get(1);

    let hotelService = new HotelService();
    page = await hotelService.getBySlug(params.query.accommodation);

    if( page && page.id > 0 ){
      let rateplanPeriodService = new RateplanPeriodService();
      periods = await rateplanPeriodService.query({hotel_id: page.id});
    }
  } catch (e) {

  }

  return {
    locs,
    hotelCategories,
    menu,
    page,
    periods
  };
};

export default HotelPage;
