import React from "react";
import Link from "next/link";
import Head from "next/Head";
import { HotelSchema, makeHotelSchema } from "~/components/JsonLdSchema"

import MenuService from "~/packages/Post/services/MenuService";
import PostService from "~/packages/Post/services/PostService";
import HotelService from "~/packages/TravelgoOne/services/HotelService";
import Layout from "~/components/Layouts/MainLayout/MainLayout";
import BookingSearchBox from "~/components/Partials/BookingSearchBox";
import HotelArchive2 from "~/components/Partials/HotelArchive2";

const Index = props => {
  if (!props.page || props.page.length <= 0) {
    return (
      <Layout settings={{menu: props.menu}}>
        <div>Data not found</div>
      </Layout>
    );
  }

  // React.useEffect(() => {
  //   let filter = {
  //     loc_id: props.query.loc_id || '',
  //     category_id: props.query.category_id || '',
  //     checkin: props.query.checkin || '',
  //     checkout: props.query.checkout || '',
  //     nights: props.query.nights || '',
  
  //     page: props.query.page || 1,
  //     // num_per_page: 15,
  //     // orderBy: 'date_from',
  //     // orderHow: 'asc'
  //     paginate: 2
  //   }

  //   let hotelService = new HotelService();
  //   hotelService.query(filter)
  //   .then(response => {
  //     console.log('response', response)
  //   });
  // }, [])

  return (
    <Layout 
      settings={{template:"accommodation-page", menu: props.menu}}
      meta={{
        title: props.page.meta_title.it,
        description: props.page.meta_description.it,
        url: `${process.env.meta.url}/accommodations`,
        // image: (props.page.media && props.page.media.gallery && props.page.media.gallery[0]) ? props.page.media.gallery[0].url : null
        image: (props.page.media && props.page.media.thumbnails && props.page.media.thumbnails[0]) ? props.page.media.thumbnails[0].url : null
      }}
      >
      <Head>
        {props.hotels && props.hotels.data  && props.hotels.data.length > 0 && Object.entries(props.hotels.data).map(([key, hotel]) =>
          <script
            key={`jobJSON-${hotel.id}`}
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(makeHotelSchema(hotel)) }}
          />
        )}
      </Head>

      <BookingSearchBox query={props.query} />

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
      
      <HotelArchive2 hotels={(props.hotels && props.hotels.data) ? props.hotels.data : []} meta={props.hotels.meta} filter={props.hotels.filter} />

    </Layout>
  );
};

Index.getInitialProps = async ctx => {
  console.log('ctx', ctx)
  let filter = {
    loc_id: ctx.query.loc_id || '',
    category_id: ctx.query.category_id || '',
    checkin: ctx.query.checkin || '',
    checkout: ctx.query.checkout || '',
    // nights: ctx.query.nights || '',

    hasEmptyPeriods: true,
    page: ctx.query.page || 1,
    // num_per_page: 4,
    orderBy: 'order_seq',
    orderHow: 'asc',
    paginate: process.env.pagination.paginate
  }

  let menu = null;
  let page = null;
  let hotels = [];
  try {
    // initialProps = mainInitialProps();

    let menuService = new MenuService();
    menu = await menuService.get(1);

    let postService = new PostService();
    page = await postService.get(2);

    let hotelService = new HotelService();
    hotels = await hotelService.query(filter);
    hotels.filter = filter;
  } catch (e) {
    
  }

  return {
    params: ctx.params,
    query: ctx.query,
    menu,
    page,
    hotels
  };
};

export default Index;
