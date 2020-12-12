import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <span className="green">sede</span><br/>
            <span dangerouslySetInnerHTML={{ __html: process.env.address[0].label }} />
            <br/>
            {/* —<br/>
            <span className="green">sede operativa</span><br/>
            via nome cognome, 00<br/>
            80077 Ischia (Na)<br/> */}
            <br/><br/>
            P.IVA {process.env.address[0].piva}
          </div>
          <div className="col-md-7">
              
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="logo">
              <img src="/images/logo.png" alt=""/>
            </div>
          </div>
          <div className="col-md-5">
            <ul className="menu-social">
              {console.log('socials',process.env.socials)}
              {Object.entries(process.env.contacts).map(([key, obj], index) => 
                <li key={key}>
                  <a href={obj.url}>
                    <div dangerouslySetInnerHTML={{ __html: (`${obj.ico} ${obj.label}`) }} />
                  </a>
                </li>
              )}
              {/* <li>
                <a href="tel:393475123030"><i className="fas fa-phone-alt"></i> 347 512 3030</a>
              </li>
              <li>
                <a href="mailto:info@nextravel.it"><i className="fas fa-envelope"></i> info@nextravel.it</a>
              </li> */}
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="menu-social">
              {Object.entries(process.env.socials).map(([key, obj], index) => 
                <li key={key}>
                  <a href={obj.url}>
                    <div dangerouslySetInnerHTML={{ __html: (`${obj.ico}`) }} />
                  </a>
                </li>
              )}
              {/* <li>
                <a href="#"><i className="fab fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;