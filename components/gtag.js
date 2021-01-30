import React from 'react'

const GA_TRACKING_ID = process.env.ga_tracking_id;
export const GtagScript = () => {
  function intercept() {
    const qs = document.querySelector("#gtm-js");
    if (qs !== null) {
      qs.addEventListener("load", () => {
        console.log("GTM loaded");
      });
    }
  }

  return (
    <React.Fragment>
      <script
        id="gtm-js"
        async
        src={`https://www.googletagmanager.com/gtm.js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
            (${intercept.toString()})()
            `
        }}
      />
      
      {/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TZBGDPX');</script> */}
      
    </React.Fragment>
  );
};
const style = {
  display: "none",
  visibility: "hidden"
};
export const GtagNoscript = props => (
  <React.Fragment>
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
        height="0"
        width="0"
        style={style}
      />
    </noscript>
  </React.Fragment>
);