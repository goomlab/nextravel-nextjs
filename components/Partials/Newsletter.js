import React from "react";
import { connect } from 'react-redux'
import * as yup from 'yup'
import { useFormik } from 'formik'

import NewsletterAction from '~/packages/TravelgoOne/actions/NewsletterAction'

const Newsletter = (props) => {

  /**
   * onChange
   */
  const onChange = (e) => {
    e.persist(); console.log('onChage', e);
    let newState = Object.assign({}, props.newsletter);
    switch( e.target.name ){
      case 'privacy': 
        newState[e.target.name] = (e.target.checked) ? 1 : 0;
      break;
      default: newState[e.target.name] = e.target.value; break;
    }
    props.setContact(newState)
  }

  /**
   * onSubmit
   */
  const handleSubmit = () => {
    props.createContact(props.newsletter)
  }

  /**
   * Validate
   */
  const formik =  useFormik({
    initialValues: {
      email: props.newsletter.email || "",
      privacy: props.newsletter.privacy || 0
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Campo non valido'),
      privacy: yup.number().min(1, 'Campo non valido').max(1, 'Campo non valido'),
    }),
    enableReinitialize: true,
    onSubmit: handleSubmit
  })

  /**
   * Render
   */
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
              il nostro booking {process.env.contacts.phone.label}
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <form onSubmit={formik.handleSubmit} className={"needs-validation" + (formik.errors ? "was-validated" : "")} noValidate>
              <div className="form-template-1">
              <div className="row">
                <div className="col-lg-9">
                  <div className="form-group">
                    <input
                      type="email"
                      className={"form-control" + (formik.errors.email ? " is-invalid" : "")}
                      id="newsletter_email"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email || ''}
                      onChange={(e)=>{
                        onChange(e)
                        formik.handleChange(e)
                      }}
                      />
                      {formik.errors.email && 
                        <div className="invalid-feedback">
                          {formik.errors.email}
                        </div>
                      }
                  </div>
                  <div className="form-group">{console.log('newslettrer', props.newsletter)}
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className={"custom-control-input" + (formik.errors.privacy ? " is-invalid" : "")}
                        name="privacy"
                        id="newsletter_privacy" 
                        value="1"
                        checked={formik.values.privacy == 1 ? 1 : 0}
                        onChange={(e)=>{
                          onChange(e)
                          formik.handleChange(e)
                        }}
                        />
                      <label className="custom-control-label" htmlFor="newsletter_privacy">Acconsento al trattamento dei miei dati ai sensi dell’informativa sulla <a href="/privacy" target="_blank" rel="nofollow">Privacy</a>.</label>
                      {formik.errors.privacy && 
                        <div className="invalid-feedback">
                          {formik.errors.privacy}
                        </div>
                      }
                    </div>
                  </div>

                  {/* <div className="form-group">
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
                  </div> */}
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <button type="submit" className="btn btn-green">
                      iscriviti
                    </button>
                  </div>
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

const mapStateToProps = (state) => {
	return {
		newsletter: state.newsletter,
	}
}
const mapDispatchToProps = (dispatch) => {
  let newsletterAction = new NewsletterAction()
  return {
    setContact: (data) => {
      dispatch(newsletterAction.setItem(data))
    },
    resetContact: () => {
      dispatch(newsletterAction.resetItem())
    },
    createContact: (data) => {
      dispatch(newsletterAction.sendinblue_createContact(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);
