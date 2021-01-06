import React from 'react'
import NextHead from 'next/head'

const Head = (meta) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{meta.title || ''}</title>
    <meta name="description" content={meta.description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/css/bootstrap-datepicker.min.css" integrity="sha256-JDBcnYeV19J14isGd3EtnsCQK05d8PczJ5+fvEvBJvI=" crossorigin="anonymous" />
    <link rel="stylesheet" href="css/select2.min.css" /> */}

    <link rel="stylesheet" href={`${process.env.public_path}/css/frontend.min.css`} />

    <meta property="og:url" content={meta.url || ''} />
    <meta property="og:description" content={meta.description || ''} />
    <meta property="og:type" content={meta.type || 'website'} />
    {/* <meta property="fb:app_id" content="your fb id" /> */}
    <meta property="og:title" content={`${process.env.meta.title} - ${(meta.title || '')}`} />
    <meta property="og:image" content={meta.image || process.env.meta.image} />
    <meta property="og:locale" content="it_IT" />
    <meta property="og:type" content="article" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="" />
    <meta name="twitter:title" content={`${process.env.meta.title} - ${(meta.title || '')}`} />
    <meta name="twitter:description" content={meta.description || ''} />
    <meta name="twitter:image" content={meta.image || process.env.meta.image} />
  </NextHead>
)

export default Head