import React from 'react'


export const makeHotelSchema = (hotel) => {
  return {
    "@context": "http://schema.org",
    "@type": "Hotel",
    
    "name": hotel.name,
    "url": process.env.REACT_APP_URL,
    "email": process.env.contacts.email.label,
    "telephone": process.env.contacts.phone.label,
    "address": {
      "@type": 'PostalAddress',
      "addressLocality": (hotel.details) ? hotel.details.city : "",
      "addressRegion": (hotel.details) ? hotel.details.state : "",
      "postalcode": (hotel.details) ? hotel.details.zip_code : "",
      "streetAddress": (hotel.details) ? hotel.details.address : "",
      "addressRegion": (hotel.details) ? hotel.details.state : "",
    },
    "openingHours": [
      "Mo-Sa 00:00-24-00"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (hotel.rating_details) ? hotel.rating_details.ratingValue : "",
      "reviewCount": (hotel.rating_details) ? hotel.rating_details.reviewCount : "",
      "priceRange": "",
    }
  }
}

export const HotelSchema = (hotel) => {
  return (
      <script
          key={`jobJSON-${hotel.id}`}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(makeHotelSchema(hotel)) }}
      />
  )
}


// {
//   "@context":"http:\/\/www.schema.org",
//   "@type":"Hotel",
//   "name":"HotelIschia.org",
//   "url":"https:\/\/www.hotelischia.org",
//   "image":"https:\/\/www.hotelischia.org\/default.jpg",
//   "logo":"https:\/\/www.hotelischia.org\/logo.png",
//   "description":"HotelIschia ",
//   "address":{"@type":"PostalAddress","streetAddress":"Via Tommaso Cigliano 109","addressLocality":"Forio","addressRegion":"Campania","postalCode":"80075","addressCountry":"Italia"},
//   "geo":{"@type":"GeoCoordinates","latitude":"45.3725831","longitude":"12.3386239"},
//   "hasMap":"https:\/\/www.google.it\/maps\/place\/Hotelischia.org\/@40.751108,13.869027,15z\/data=!4m12!1m6!3m5!1s0x0:0x1a2964fe6e65709a!2sHotelischia.org!8m2!3d40.751108!4d13.869027!3m4!1s0x0:0x1a2964fe6e65709a!8m2!3d40.751108!4d13.869027",
//   "openingHours":"Mo, Tu, We, Th, Fr, Sa, Su 00:00-24:00",
//   "contactPoint":{"@type":"ContactPoint","telephone":"tel:+3908118088050","email":"info@hotelischia.org","contactType":"reservations"},
//   "priceRange":"da \u20ac 30,00","telephone":"tel:+3908118088050"},
//   {"@context":"http:\/\/www.schema.org","@type":"WebSite","name":"HotelIschia.org","alternateName":"HotelIschia.org","url":"https:\/\/www.hotelischia.org\/"}