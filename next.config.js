const path = require('path');
const webpack = require('webpack');

// const devConfig = {
//   app_title: 'Nextravel DEV',
//   api_url: 'http://laravelcb.isolajam.eu/api/v1',
// }

// const prodConfig = {
//   app_title: 'Nextravel',
//   api_url: 'https://www.nextravel.it/api/v1',
// }


module.exports = {
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    return config;
  },
  env: {
    app_title: process.env.REACT_APP_NAME,
    app_url: process.env.REACT_APP_URL,
    api_url: process.env.REACT_APP_API_URL,
    public_path: process.env.REACT_PUBLIC_PATH,
    accommodations_path: process.env.REACT_ACCOMMODATIONS_PATH,
    filterpages_path: process.env.REACT_FILTERPAGES_PATH,
    api: {
      headers: {
        'Accept': 'application/json'
        // 'Content-Type': 'application/json'
        // 'Content-Type': 'multipart/form-data'
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // "X-Requested-With": "XMLHttpRequest"
      }
    },
    meta: {
      title: process.env.REACT_APP_NAME,
      description: process.env.REACT_APP_DESCRIPTION,
      url: process.env.REACT_APP_URL,
      image: process.env.REACT_APP_IMAGE,
    },
    ga_tracking_id: process.env.REACT_GTAG_ID,
    pagination: {
      paginate: 30
    },
    socials: {
      'facebook': {
        'label': 'Facebook',
        'url': '',
        'ico': '<i class="fab fa-facebook"></i>'
      },
      'instagram': {
        'label' : 'Instagram',
        'url' : '',
        'ico' : '<i class="fab fa-instagram"></i>'
      },
    },
    contacts: {
      'email': {
        'prelabel': '',
        'label': 'info@nextravel.it',
        'url': 'mailto:info@nextravel.it',
        'ico': '<i class="ico ico-mail"></i>'
      },
      'phone': {
        'prelabel': '',
        'label' : '347 512 3030',
        'url' : 'tel:393475123030',
        'ico' : '<i class="fas fa-phone-alt"></i>'
      },
      // 'mobile': {
      //   'prelabel': '',
      //   'label' : '347 512 3030',
      //   'url' : '',
      //   'ico' : '<i class="ico ico-instagram"></i>'
      // },
    },
    address: [
      {
        'company' : 'Nextravel',
        'label' : 'via Giovan Battista Vico 183<br/>80077 Ischia (Na)',
        'url' : 'javascript:void(0)',
        'ico' : '<i class="map-marker"></i>',
        'piva' : 'IT09640631215'
      }
    ]
  }

  // async redirects() {
  //   return [
  //     // 307 temporary redirect
  //     {
  //       source: "/offerte-per-mese",
  //       destination: "/page-filter",
  //       permanent: false,
  //     },
  //     {
  //       source: "/offerte-per-mese/:slug",
  //       destination: "/page-filter/:slug",
  //       permanent: false,
  //     },
  //     // // 308 permanent redirect
  //     // {
  //     //   source: "/posts",
  //     //   destination: "/blog",
  //     //   permanent: true // permanent redirect
  //     // },
  //     // // With parameter and custom status code
  //     // {
  //     //   source: "/photos/:id",
  //     //   destination: "/photo/:id",
  //     //   statusCode: 303 // see other
  //     // }
  //   ];
  // }
};