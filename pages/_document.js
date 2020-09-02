import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { GtagScript, GtagNoscript } from '../components/gtag'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  

  render(){
    return (
      <Html lang="it">
        <Head>
          {/* <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" /> */}
          <meta name="theme-color" content="#666" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" />

          {/* <GtagScript /> */}
        </Head>
        <body>
          {/* <GtagNoscript /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}