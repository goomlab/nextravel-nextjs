import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <span className="green">sede legale</span><br/>
            via nome cognome, 00<br/>
            80077 Ischia (Na)<br/>
            —<br/>
            <span className="green">sede operativa</span><br/>
            via nome cognome, 00<br/>
            80077 Ischia (Na)<br/>
            <br/><br/>
            P.IVA 123456789
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
              <li>
                <a href="#"><i className="fas fa-phone-alt"></i> 081000000</a>
              </li>
              <li>
                <a href="#"><i className="fas fa-envelope"></i> info@nextravel.it</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="menu-social">
              <li>
                <a href="#"><i className="fab fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;