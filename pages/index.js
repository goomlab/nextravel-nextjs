import React from "react";
import Link from "next/link";

import BaseService from "~/packages/BaseService";
import MenuService from "~/packages/Post/services/MenuService";
import PostService from "~/packages/Post/services/PostService";
import HotelService from "~/packages/TravelgoOne/services/HotelService";
import LocService from "~/packages/TravelgoOne/services/LocService";
import HotelCategoryService from "~/packages/TravelgoOne/services/HotelCategoryService";

import Layout from "~/components/Layouts/MainLayout/MainLayout";
import BookingSearchBox from "~/components/Partials/BookingSearchBox";
import HotelArchive from "~/components/Partials/HotelArchive";
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
    <Layout settings={{template:"front-page", menu: props.menu}}>
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
      
      <HotelArchive hotels={(props.hotels && props.hotels.data) ? props.hotels.data : []} />

      {props.hotels && props.hotels.meta && parseInt(props.hotels.meta.to) > parseInt(props.hotels.meta.total) &&
      <section className="section-main">
        <div className="container text-center">
          <Link href="/accomodations" as="/accomodations?page=2">
            <a className="btn btn-more">Carica le altre offerte</a>
          </Link>
        </div>
      </section>
      }

      <HomeRecap />

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

    let hotelService = new HotelService();
    hotels = await hotelService.query({
      paginate: 25
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
    hotels
  };
};

export default Index;
