import React from "react";

const Newsletter = () => {
  return (
    <section className="section-main section-newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="description">
              <strong>
                Inserisci la tua email.
                <br />
                Sarai aggiornato su tutte le offerte.
              </strong>
              <br />
              Alcune sono riservate ai soli iscritti.
              <br />
              Per una vacanza su misura contatta
              <br />
              il nostro booking 081 000000
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <form className="form-template-1">
              <div className="row">
                <div className="col-lg-9">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="newsletter_email"
                      name="newsletter_email"
                      placeholder="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="newsletter_privacy"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="newsletter_privacy"
                      >
                        Acconsento al trattamento dei miei dati ai sensi
                        dell’informativa sulla <a href="#">Privacy</a>.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <button type="submit" className="btn btn-green">
                      iscriviti
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
