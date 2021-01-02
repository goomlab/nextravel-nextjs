import React from "react";
import Link from "next/link";

import Layout from "~/components/Layouts/MainLayout/MainLayout";
import BookingSearchBox from "~/components/Partials/BookingSearchBox";
import HotelArchive from "~/components/Partials/HotelArchive";

const TemplateArchiveHotel = props => {console.log('props TemplateArchiveHotel',props)

  if (!props.page || props.page.length <= 0) {
    return (
      <Layout settings={{menu: props.menu}}>
        <div>Data not found</div>
      </Layout>
    );
  }

  return(
    <Layout settings={{menu: props.menu}}>

      <BookingSearchBox 
        searchParams={props.searchParams}
        // locs={props.locs || []}
        // hotelCategories={props.hotelCategories || []}
        />

      <section className="section-main">
        <div className="container">
          <div className="primary-title text-center">
            <h1>
              {props.page.title.it}
            </h1>
          </div>
          <div className="primary-description text-center">
            {props.page.content &&
              <div dangerouslySetInnerHTML={{ __html: props.page.content.it }} />
            }
            {props.page.description &&
              <div dangerouslySetInnerHTML={{ __html: props.page.description.it }} />
            }
          </div>
        </div>
      </section>
      
      {/* <HotelArchive hotels={props.hotels} /> */}
      <HotelArchive hotels={(props.hotels && props.hotels.data) ? props.hotels.data : []} />

    </Layout>
  )
}

export default TemplateArchiveHotel;