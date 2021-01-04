import React from 'react';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import Scripts from './Scripts';

const MainLayout = ({children, settings = {}, meta = {}}) => {
  return(
    <React.Fragment>
      <Head meta={meta}/>
      <div className={`page` + (settings.template ? ` ${settings.template}` : '')}>
        <Header settings={settings} />
        <main>
          {children}
        </main>
      </div>
      <Footer />
      <Scripts />
    </React.Fragment>
  )
}

export default MainLayout