import React from "react";
import Link from "next/link";
import moment from "moment";

const HomeRecap = props => {
  moment.locale('it');
  var now = moment();

  return (
    <section className="section-main section-home-primopiano">
      <div className="container">
        <div className="box-home-primopiano">
          <div className="row">
            <div className="col-lg-4">
              <div className="home-primopiano-item">
                <div className="title">Transfer traghetto</div>
                <div className="description">
                  Prenota l’Hotel con noi ed avrai il Traghetto per Ischia a
                  soli €136 €70 A/R Auto+Conducente*
                </div>
                <div className="note">
                  *offerta non valida dal 26-Dic e dal 03-Gen
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <a href="#" className="btn btn-transparent">
                      scopri
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <i className="ico ico-nave"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home-primopiano-item">
                <div className="title">{props.busPage.title.it}</div>
                <div className="description">
                  <span dangerouslySetInnerHTML={{ __html: props.busPage.content_short.it }} />
                </div>
                {/* <div className="note">
                  *offerta non valida dal 26-Dic e dal 03-Gen
                </div> */}
                <div className="row">
                  <div className="col-sm-6">
                    <Link href={props.busPage.page_path.it}>  
                      <a className="btn btn-transparent">
                        scopri
                      </a>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <i className="ico ico-orologio"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home-primopiano-item">
                <div className="title">Offerte del mese</div>
                <div className="description">
                  <p>
                  Tutte le offerte di <strong>{now.format('MMMM')} {now.format('YYYY')}</strong> a portata di click. Non perdere l'occasione.
                  </p>
                </div>
                {/* <div className="note">
                  *offerta non valida dal 26-Dic e dal 03-Gen
                </div> */}
                <div className="row">
                  <div className="col-sm-6">
                    <Link href={`${process.env.filterpages_path}/[slug]`} as={`${process.env.filterpages_path}/${now.format('MMMM').toLowerCase()}`}>
                      <a className="btn btn-transparent">
                        scopri
                      </a>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <i className="ico ico-cal"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRecap;