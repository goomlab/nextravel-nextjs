import React from "react";
import { connect } from 'react-redux';
import Link from "next/link";

import MenuService from "~/packages/Post/services/MenuService";
import PostService from "~/packages/Post/services/PostService";
import HotelService from "~/packages/TravelgoOne/services/HotelService";
import PageFilterService from "~/packages/TravelgoOne/services/PageFilterService";
import RatePlanPeriodService from "~/packages/TravelgoOne/services/RatePlanPeriodService";


import Layout from "~/components/Layouts/MainLayout/MainLayout";
import BookingSearchBox from "~/components/Partials/BookingSearchBox";


const SitemapHotels = props => {
  return (
    <div className="row mb-5">
      <div className="col-12">
        <h2>Strutture ricettive</h2>
      </div>
      {props.models.map((model, index) =>
        <div className="col-sm-6 col-lg-4 footer-menu-col" key={index}>
          <Link as={`${process.env.accommodations_path}/${model.slug.it}`}
            href={{
              pathname: `${process.env.accommodations_path}/${model.slug.it}`,
            }}
          >
            <a className="goto">{model.title.it}</a>
          </Link>
        </div>
      )}
    </div>
  )
}

const SitemapFilterPages = props => {
  return (
    <div className="row mb-5">
      <div className="col-12">
        <h2>Offerte</h2>
      </div>
      {props.models.map((model, index) =>
        <div className="col-sm-6 col-lg-4 footer-menu-col" key={index}>
          <Link as={`/offerte/${model.slug.it}`}
            href={{
              pathname: `/offerte/${model.slug.it}`,
            }}
          >
            <a className="goto">{model.title.it}</a>
          </Link>
        </div>
      )}
    </div>
  )
}

const SitemapPages = props => {
  return (
    <div className="row mb-5">
      <div className="col-12">
        <h2>Pagine</h2>
      </div>
      {props.models.map((model, index) =>
        <div className="col-sm-6 col-lg-4 footer-menu-col" key={index}>
          <Link as={`/${model.slug.it}`}
            href={{
              pathname: `/${model.slug.it}`,
            }}
          >
            <a className="goto">{model.title.it}</a>
          </Link>
        </div>
      )}
    </div>
  )
}


const SitemapHtml = props => {console.log('props', props)
  return (
    <Layout 
      settings={{template:"sitemap-page", menu: props.menu}}
      meta={{
        title: "Mappa del sito",
        description: "Mappa del sito",
        url: `${process.env.meta.url}/sitemap-html`,
        image: null
      }}
      >

      <BookingSearchBox query={props.query} />

      <section className="section-main single-hotel-section">
        <div className="container">
          <h1 className="mb-5">Sitemap</h1>
          <SitemapHotels models={props.hotels || []} />
          <SitemapFilterPages models={props.pagefilters || []} />
          <SitemapPages models={props.pages || []} />
        </div>
      </section>
    </Layout>
  );
};

SitemapHtml.getInitialProps = async ctx => {
  let menu = null;
  let pages = [];
  let hotels = [];
  let pagefilters = [];
  let rateplanperiods = [];
  try {
    let menuService = new MenuService();
    menu = await menuService.get(1);

    let postService = new PostService();
    pages = await postService.all({
      stauts: {key: 'status', compare: '=', value: 1},
      order: ['name','asc']
    }) || [];

    let hotelService = new HotelService();
    hotels = await hotelService.all({
      status: {key: 'status', compare: '=', value: 1},
      order: ['name','asc']
    }) || [];

    let pagefilterService = new PageFilterService();
    pagefilters = await pagefilterService.all({
      stauts: {key: 'status', compare: '=', value: 1}
    }) || [];

    // let rateplanperiodService = new RatePlanPeriodService();
    // rateplanperiods = await rateplanperiodService.all({
    //   stauts: {key: 'status', compare: '=', value: 1}
    // }) || [];
  } catch (e) {
    console.log('error', e)
  }

  return {
    params: ctx.params,
    query: ctx.query,
    menu,
    pages,
    hotels,
    pagefilters,
    rateplanperiods
  };
};

export default SitemapHtml;


// const mapStateToProps = (state) => {
// 	return {
//     hotelLoading: state.hotel.loading,
//     hotelSeatchParams: state.hotel.params,
// 		hotels: state.hotel.items,
//     hotelMeta: state.hotel.meta,
// 	}
// }
// const mapDispatchToProps = (dispatch) => {
//   let hotelAction = new HotelAction()
//   return {
//     loading: (state) => {
//       dispatch(hotelAction.loading(state))
//     },
//     query: (data) => {
//       dispatch(hotelAction.query(data))
//     },
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SitemapHtml);


