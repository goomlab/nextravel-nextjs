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
  let searchParams = {};
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
      if( page.loc_id ) searchParams = {...searchParams, checkout: page.loc_id};
      if( page.category_id ) searchParams = {...searchParams, checkout: page.category_id};

      let hotelService = new HotelService();
      hotels = await hotelService.query(searchParams);
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
