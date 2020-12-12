import React from 'react';
import Link from "next/link";

const Header = (props) => {
  return (
    <header>
      <nav id="nav-0" className="navbar navbar-expand-xl">
        <div className="container">
          <ul>
            <li>
              <a className="nav-link" href={process.env.contacts.email.url}><span dangerouslySetInnerHTML={{ __html: process.env.contacts.email.ico }} /> <span>{process.env.contacts.email.label}</span></a>
            </li>
            <li>|</li>
            {Object.entries(process.env.socials).map(([key, obj], index) => 
                <li key={key}>
                  <a className="nav-link" href={obj.url}>
                    <span dangerouslySetInnerHTML={{ __html: (`${obj.ico}`) }} />
                  </a>
                </li>
              )}
            {/* <li>
              <a className="nav-link" href="#"><i className="fab fa-facebook"></i></a>
            </li>
            <li>
              <a className="nav-link" href="#"><i className="fab fa-instagram"></i></a>
            </li>
            <li>
              <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
            </li> */}
          </ul>
        </div>
      </nav>
        
      <nav id="nav-1" className="navbar navbar-expand-xl">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <div className="navbar-logo"><img src="/images/logo.png" alt="Next Travel"/></div>
            </a>
          </Link>
          

          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ml-auto" id="navbar-nav-main">
              {props.settings.menu && props.settings.menu.items.length > 0 && props.settings.menu.items.map((menuitem, index) => 
                <React.Fragment key={index}>
                  {!menuitem.children || menuitem.children.length <= 0 && 
                    <li className="nav-item">
                      <Link href={menuitem.translations.url.it}>
                        <a className="nav-link">{menuitem.translations.title.it}</a>
                      </Link>
                    </li>
                  }
                  {menuitem.children && menuitem.children.length > 0 && 
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="dropdown-strutture" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {menuitem.translations.title.it}
                      </a>
                      <div className="dropdown-menu" aria-labelledby="dropdown-strutture">
                        {menuitem.children.map((children, indexChildren) => 
                          <Link key={indexChildren} href={children.translations.url.it}>
                            <a key={indexChildren} className="dropdown-item">{children.translations.title.it}</a>
                          </Link>
                        )}
                      </div>
                    </li>
                  }
                  {index < (props.settings.menu.items.length - 1) &&
                    <li className="nav-item separator">|</li>
                  }
                </React.Fragment>
              )}
              {/* <li className="nav-item dropdown locale-item">
                <a className="nav-link dropdown-toggle" href="#" id="localeNavbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  IT
                </a>
                <div className="dropdown-menu" aria-labelledby="localeNavbarDropdown">
                  <a className="dropdown-item" href="#">IT</a>
                  <a className="dropdown-item" href="#">EN</a>
                </div>
              </li> */}
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link nav-callto" href={process.env.contacts.phone.url}>chiama! {process.env.contacts.phone.label}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;