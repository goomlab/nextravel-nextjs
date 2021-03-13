import React from 'react';
import moment from 'moment';

import RatePlanPeriodService from "~/packages/TravelgoOne/services/RatePlanPeriodService";

const createSitemap = (models) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${models.map((model, index) => {
            let updatedAt = moment(model.updated_at, "DD/MM/YYYY hh:mm:ss").toISOString(); // 12/03/2021 17:05:06  -->  2021-02-17T11:39:04+00:00
            return `
                    <url>
                        <loc>${`${process.env.app_url}/strutture-ricettive/${model.rateplan.hotel.slug.it}/booking/${model.id}`}</loc>
                        <lastmod>${updatedAt}</lastmod>
                    </url>
                `;
          })
          .join('')}
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    let service = new RatePlanPeriodService();
    let models = await service.all({
      status: {key: 'status', compare: '=', value: 1}
    }) || [];

    // const request = await fetch(EXTERNAL_DATA_URL);
    // const posts = await request.json();

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(models));
    res.end();
  }
}

export default Sitemap;