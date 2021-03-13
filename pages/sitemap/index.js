import React from 'react';
import moment from 'moment';

const createSitemap = () => {
  var updatedDate = moment().startOf('month').toISOString() //2021-02-22T13:02:52+00:00

  return `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${process.env.app_url}/sitemap/rateplanperiods</loc>
        <lastmod>${updatedDate}</lastmod>
      </sitemap>
      <sitemap>
        <loc>${process.env.app_url}/sitemap/accommodations</loc>
        <lastmod>${updatedDate}</lastmod>
      </sitemap>
      <sitemap>
        <loc>${process.env.app_url}/sitemap/filterpages</loc>
        <lastmod>${updatedDate}</lastmod>
      </sitemap>
      <sitemap>
        <loc>${process.env.app_url}/sitemap/pages</loc>
        <lastmod>${updatedDate}</lastmod>
      </sitemap>
    </sitemapindex>
  `
}

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    // let hotelService = new HotelService();
    // let models = await hotelService.all() || [];

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap());
    res.end();
  }
}

export default Sitemap;