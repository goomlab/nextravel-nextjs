import React from "react";
import Link from "next/link";

import BaseService from "~/packages/BaseService";
import MenuService from "~/packages/Post/services/MenuService";
import PageFilterService from "~/packages/TravelgoOne/services/PageFilterService";
import HotelService from "~/packages/TravelgoOne/services/HotelService";

import TemplateArchiveHotel from "~/components/Templates/TemplateArchiveHotel";

const Index = props => {
  return (
    <TemplateArchiveHotel {...props} />
  );
};

Index.getInitialProps = async params => {
  // let initialProps = {};
  let menu = null;
  let locs = [];
  let hotelCategories = [];
  let page = null;
  let hotels = [];
  let searchParams = {
    page: 1,
    paginate: process.env.pagination.paginate,
    orderBy: 'order_seq',
    orderHow: 'asc',
  };
  try {
    // initialProps = mainInitialProps();

    let baseService = new BaseService();
    let init = await baseService.initApp();
    locs = init.locs || [];
    hotelCategories = init.hotelCategories || [];

    let menuService = new MenuService();
    menu = await menuService.get(1);

    let pageFilterService = new PageFilterService();
    page = await pageFilterService.getBySlug(params.query.slug);
    if( page ){
      if( page.date_from ) searchParams = {...searchParams, checkin: page.date_from};
      if( page.date_to ) searchParams = {...searchParams, checkout: page.date_to};
      if( page.loc_id ) searchParams = {...searchParams, loc_id: page.loc_id};
      if( page.category_id ) searchParams = {...searchParams, category_id: page.category_id};
      if( parseInt(page.stars) > 0 ) searchParams = {...searchParams, stars: page.stars};

      searchParams = {
        ...searchParams, 
        hasEmptyPeriods: true,
        orderBy: 'order_seq',
        orderHow: 'asc',
        paginate: process.env.pagination.paginate
      };console.log('search',searchParams)
      let hotelService = new HotelService();
      hotels = await hotelService.query(searchParams);
      console.log('hotels', hotels, searchParams)
    }
  } catch (e) {
    console.log('error', e)
  }

  return {
    menu,
    locs,
    hotelCategories,
    page,
    hotels,
    searchParams
  };
};

export default Index;
