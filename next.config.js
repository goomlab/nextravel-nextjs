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
    api_url: process.env.REACT_APP_API_URL,
    public_path: process.env.REACT_PUBLIC_PATH,
    api: {
      headers: {
        'Accept': 'application/json'
        // 'Content-Type': 'application/json'
        // 'Content-Type': 'multipart/form-data'
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // "X-Requested-With": "XMLHttpRequest"
      }
    },
    // ga_tracking_id: 'GTM-5HSTK76'
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