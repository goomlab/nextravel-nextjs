import React from 'react'
import App from 'next/app'
import {wrapper, State} from '../store';

import AlertMessage from '../components/UI/AlertMessage'
import PageLoader from '../components/UI/PageLoader'

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? (await Component.getInitialProps(ctx)) : {};
    //Anything returned here can be accessed by the client
    return {pageProps: pageProps};
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <PageLoader />
        <Component {...pageProps}></Component>
        <AlertMessage />
      </React.Fragment>
    )
  }
}

export default wrapper.withRedux(MyApp)