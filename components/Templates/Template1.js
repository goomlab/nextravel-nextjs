import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import SwiperCore, { Swiper, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import Layout from "../Layouts/MainLayout/MainLayout";
import BookingSearchBox from "~/components/Partials/BookingSearchBox";

const Template1 = props => {
  if (!props.data || props.data.length <= 0) {
    return (
      <Layout>
        <div>Data not found</div>
      </Layout>
    );
  }

  const page = props.data;
  const swiperHotelThumbnail = React.useRef(null)

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
        title: page.meta_title.it,
        description: page.meta_description.it,
        url: `${process.env.meta.url}}`,
        image: (page.media && page.media.gallery && page.media.gallery[0]) ? page.media.gallery[0].url : null
        // image: (props.page.media && props.page.media.thumbnails && props.page.media.thumbnails[0]) ? props.page.media.thumbnails[0].url : null
      }}
      >
      <BookingSearchBox />

      {/* <section className="section-main"> */}
      <section className="single-hotel-section">
        <div className="container">

          <div id={`swiperHotelThumbnail`} className="swiper-container swiperHotelThumbnail">
            <div className="swiper-wrapper">
              {page.media && page.media.gallery.map((img, index) => 
                <div className="swiper-slide" key={index}>
                  <figure className="img-bgas">
                    <img src={img.url} alt={img.name} />
                  </figure>
                </div>
              )}
              {(!page.media || !page.media.gallery) && 
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

          <div className="topline">
            <div className="title mr-auto">
              <h1>
                {page.title.it}
              </h1>
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
                <div className="description">
                  <div dangerouslySetInnerHTML={{ __html: page.content_short.it }} />
                </div>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div className="content-box content-box-1">
                <div className="description">
                  <div dangerouslySetInnerHTML={{ __html: page.content.it }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Template1;
