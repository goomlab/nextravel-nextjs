import React from "react";
import Link from "next/link";
import NextHead from 'next/head'

import { HotelSchema, makeHotelSchema } from "~/components/JsonLdSchema";

import BaseService from "~/packages/BaseService";
import MenuService from "~/packages/Post/services/MenuService";
import PostService from "~/packages/Post/services/PostService";
import HotelService from "~/packages/TravelgoOne/services/HotelService";
import LocService from "~/packages/TravelgoOne/services/LocService";
import HotelCategoryService from "~/packages/TravelgoOne/services/HotelCategoryService";

import Layout from "~/components/Layouts/MainLayout/MainLayout";
import BookingSearchBox from "~/components/Partials/BookingSearchBox";
// import HotelArchive from "~/components/Partials/HotelArchive";
import HotelArchive2 from "~/components/Partials/HotelArchive2";
import HomeRecap from "~/components/Partials/HomeRecap";
import Newsletter from "~/components/Partials/Newsletter";

const Index = props => {
  if (!props.page || props.page.length <= 0) {
    return (
      <Layout settings={{menu: props.menu}}>
        <div>Data not found</div>
      </Layout>
    );
  }

  return (
    <Layout 
      settings={{template:"front-page", menu: props.menu}}
      meta={{
        title: props.page.meta_title.it,
        description: props.page.meta_description.it,
        url: `${process.env.meta.url}`,
        // image: (props.page.media && props.page.media.gallery && props.page.media.gallery[0]) ? props.page.media.gallery[0].url : null
        image: (props.page.media && props.page.media.thumbnails && props.page.media.thumbnails[0]) ? props.page.media.thumbnails[0].url : null
      }}
      >
      <NextHead>
        {props.hotels && props.hotels.data && Object.entries(props.hotels.data).map(([key, hotel]) =>
          <script
            key={`jobJSON-${hotel.id}`}
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(makeHotelSchema(hotel)) }}
          />
        )}
      </NextHead>
      

      <section className="section-main section-first home">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="primary-title">
                <h1>{props.page.subtitle.it}</h1>
                <span style={{color: "#384044", textDecoration: "underline"}}>
                  Chiama! {process.env.contacts.phone.label}
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-offset-1">
              <div className="primary-description">
                <div dangerouslySetInnerHTML={{ __html: props.page.content.it }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingSearchBox query={props.query} full={true} />

      <section className="section-main">
        <div className="container">
          <div className="primary-title text-center">
            <h2>
              Prenota la tua vacanza tra una vasta scelta di Hotel selezionati.
            </h2>
          </div>
          <div className="primary-description text-center">
            Per qualsiasi informazione non esitare a contattarci allo{" "}
            <strong>{process.env.contacts.phone.label}</strong>
          </div>
        </div>
      </section>

      {/* <HotelArchive hotels={(props.hotels && props.hotels.data) ? props.hotels.data : []} /> */}
      <HotelArchive2 hotels={(props.hotels && props.hotels.data) ? props.hotels.data : []} />

      {props.hotels && props.hotels.meta && parseInt(props.hotels.meta.to) < parseInt(props.hotels.meta.last_page) &&
      <section className="section-main">
        <div className="container text-center">
          {/* <Link href="/accomodations" as="/accommodations?page=2"> */}
          <Link href={`${process.env.accommodations_path}`} as={`${process.env.accommodations_path}?page=2`}>
            <a className="btn btn-more">Carica le altre offerte</a>
          </Link>
        </div>
      </section>
      }

      <HomeRecap {...props} />

      <Newsletter />
    </Layout>
  );
};

Index.getInitialProps = async ctx => {
  let menu = null;
  // let months = [];
  // let specials = [];
  // let locs = [];
  // let hotelCategories = [];
  let page = null;
  let busPage = null;
  let hotels = [];
  try {
    // initialProps = mainInitialProps();

    // let baseService = new BaseService();
    // let init = await baseService.initApp();
    // locs = init.locs || [];
    // hotelCategories = init.hotelCategories || [];
    // months = init.filterPages.months || [];
    // specials = init.filterPages.specials || [];

    let menuService = new MenuService();
    menu = await menuService.get(1);

    let postService = new PostService();
    page = await postService.get(1);
    busPage = await postService.get(3);

    let hotelService = new HotelService();
    hotels = await hotelService.query({
      hasEmptyPeriods: true,
      orderBy: 'order_seq',
      orderHow: 'asc',
      paginate: process.env.pagination.paginate
    });
  } catch (e) {
    console.log('error', e)
  }

  return {
    params: ctx.params,
    query: ctx.query,
    menu,
    // specials,
    // locs,
    // hotelCategories,
    page,
    busPage,
    hotels
  };
};

export default Index;
