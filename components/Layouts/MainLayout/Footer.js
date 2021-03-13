import React from 'react';
import Link from "next/link";

const Footer = props => {
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
            <div className="row">
              {props.settings.menu && props.settings.menu.items.length > 0 && props.settings.menu.items.map((menuitem, index) => 
                <React.Fragment key={index}>
                {!menuitem.children || menuitem.children.length <= 0 && 
                  <div className="col-lg-4 footer-menu-col">
                    <Link href={menuitem.translations.url.it}>
                      <a>{menuitem.translations.title.it}</a>
                    </Link>
                  </div>
                }
                {menuitem.children && menuitem.children.length > 0 && menuitem.children.map((children, indexChildren) => 
                  <div key={indexChildren} className="col-lg-4 footer-menu-col">
                    <Link key={indexChildren} href={children.translations.url.it}>
                      <a key={indexChildren}>{children.translations.title.it}</a>
                    </Link>
                  </div>
                )}
                </React.Fragment>
              )}
              <div className="col-lg-4 footer-menu-col">
                <Link href="/sitemaphtml">
                  <a>Sitemap</a>
                </Link>
              </div>
              <div className="col-lg-4 footer-menu-col">
                <Link href="/privacy-policy">
                  <a>Privacy Policy</a>
                </Link>
              </div>
            </div>
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