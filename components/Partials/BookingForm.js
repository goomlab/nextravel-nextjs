import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as yup from 'yup'
import { useFormik } from 'formik'

import HotelServiceService from '~/packages/TravelgoOne/services/HotelServiceService'
import PracticeByGuestAction from '~/packages/TravelgoOne/actions/PracticeByGuestAction'

import MyDateRangePicker from '../MyDateRangePicker'

const BookingForm = props => {

  /**
   * ComponentDidUpdate
   */
  React.useEffect(() => {
    //console.log('componentDidUpdate', props.practice, props.query)
    let newState = Object.assign({}, props.practice);
    props.setPractice({
      ...newState,
      hotel_id: props.hotel.id,
      rate_plan_id: props.rateplan.id,
      checkin: props.query.checkin || null,
      checkout: props.query.checkout || null,
      treatment: props.query.treatment || null,
    })
  }, [props.query])

  const [transfers, setTransfers] = React.useState([]);
  React.useEffect(() => {
    let service = new HotelServiceService()
    service.all({
      type: {
        key: 'type',
        compare: '=',
        value: 'transfer'
      }
    })
    .then(response => {
      setTransfers(response)
      console.log('transfers', response)
    })
  }, [])

  const onChange = (e) => {
    e.persist();
    let newState = Object.assign({}, props.practice);
    switch( e.target.name ){
      case 'privacy': 
        newState[e.target.name] = (e.target.checked) ? 1 : 0;
      break;
      case 'first_name':
      case 'last_name':
      case 'email':
      case 'mobile':
        newState.customer[e.target.name] = e.target.value;
      break;
      default: newState[e.target.name] = e.target.value; break;
    }
    props.setPractice(newState)
  }

  const onChangeDatePicker = (startDate, endDate) => {
    let newState = Object.assign({}, props.practice);
    newState.checkin = startDate.format('YYYY-MM-DD');
    newState.checkout = endDate.format('YYYY-MM-DD');
    props.setPractice(newState)
  }

  /**
   * Room
   */
  const onAddRoom = () => {
    let newState = Object.assign({}, props.practice);
    newState.rooms.push({
      adults: 2,
      childrens: 0,
      childrenAges: []
    });
    props.setPractice(newState)
  }

  const onDeleteRoom = (index) => {
    let newState = Object.assign({}, props.practice);
    newState.rooms.splice(index, 1);
    props.setPractice(newState)
  }

  const onAddRoomChildren = (e, index) => {
    let newState = Object.assign({}, props.practice);
    newState.rooms[index].childrenAges.push(e.target.value);
    newState.rooms[index].childrenAges.sort();
    props.setPractice(newState)
  }
  
  const onChangeRoom = (e, index) => {
    e.persist();
    let newState = Object.assign({}, props.practice);
    switch( e.currentTarget.dataset.name ) {
      case "childrens":
        if( parseInt(e.currentTarget.value) == 0 ){
          // reset childrenAges
          newState.rooms[index].childrenAges = [];
        }
        else if(newState.rooms[index].childrens > parseInt(e.currentTarget.value) ){
          // rimuovo gli utlimi elementi
          newState.rooms[index].childrenAges.splice(e.currentTarget.value);
        }
        else {
          // aggiungo age con valore 0
          for(let j = newState.rooms[index].childrens; j < parseInt(e.currentTarget.value); j++)
            newState.rooms[index].childrenAges.push(-1);
        }
        newState.rooms[index].childrens = e.currentTarget.value;
      break;
      case "ageChildrens":
        let indexChild = e.currentTarget.dataset.index;
        newState.rooms[index].childrenAges[indexChild] = e.currentTarget.value;
        newState.rooms[index].childrenAges.sort(function(a, b){return b-a}); // sort desc
      break;
      default: 
        newState.rooms[index][e.currentTarget.dataset.name] = e.currentTarget.value;  
      break;
    }
    props.setPractice(newState)
  }


  /**
   * Submit
   */
  const handleSubmit = () => {
    props.createPractice(props.practice)
  }

  /**
   * Validate
   */
  const formik =  useFormik({
    initialValues: {
      // checkin: props.checkin || "",
      // checkout: props.practice.checkout || "",
      treatment: props.practice.treatment || "",
      first_name: props.practice.customer.first_name || "",
      last_name: props.practice.customer.last_name || "",
      email: props.practice.customer.email || "",
      mobile: props.practice.customer.mobile || "",
      privacy: props.practice.privacy || 0
    },
    validationSchema: yup.object().shape({
      // checkin: yup.string().required('Campo non valido'),
      // checkout: yup.string().required('Campo non valido'),
      treatment: yup.string().required('Campo non valido'),
      first_name: yup.string().required('Campo non valido'),
      last_name: yup.string().required('Campo non valido'),
      email: yup.string().required('Campo non valido'),
      mobile: yup.string().required('Campo non valido'),
      privacy: yup.number().min(1, 'Campo non valido').max(1, 'Campo non valido'),
    }),
    enableReinitialize: true,
    onSubmit: handleSubmit
  })


  /**
   * Render
   */

  const renderRooms = () => {
    let _html = [];

    for( let i in props.practice.rooms ){
      // adults
      var _htmlAdultOptions = [];
      _htmlAdultOptions.push(<option key={0} value="0">Adulti</option>);
      for( var j = 1; j <= 4; j++ ) {
        _htmlAdultOptions.push(
          <option key={j} value={j}>{j}</option>
        );
      }

      // childrens
      var _htmlChildrenOptions = [];
      _htmlChildrenOptions.push(<option key={0} value="0">Bambini</option>);
      for( var j = 1; j <= 4; j++ ) {
        _htmlChildrenOptions.push(
          <option key={j} value={j}>{j}</option>
        );
      }

      // children ages
      var _ageOptions = [];
      _ageOptions.push(<option key={-1} value="">Età</option>);
      for( var j = 0; j <= 12; j++) {
        _ageOptions.push(
          <option key={j} value={j}>{j}</option>
        );
      }

      let _htmlChildrenAges = [];
      for( let j in props.practice.rooms[i].childrenAges ) {
        _htmlChildrenAges.push(
          <div key={j} className="col-lg-3">
            <div className="form-group">
              <select 
                className="custom-select"
                name="childrens_age[]"
                data-name="ageChildrens"
                data-index={j}
                value={props.practice.rooms[i].childrenAges[j] || 0}
                onChange={(e)=>onChangeRoom(e,i)}
              >
                {_ageOptions}
              </select>
            </div>
          </div>
        );
      }

      _html.push(
      <div key={i} className="row">
        <div className="col-lg-3">
          <div className="form-group">
            {i == 0 &&
              <button 
                type="button"
                className="btn btn-green"
                onClick={()=>onAddRoom()}
                >
                  + Camera
                </button>
            }
            {i > 0 &&
              <React.Fragment>
                <label>camera <span className="room-number">{parseInt(i)+1}</span></label>
                &nbsp;&nbsp;
                <button 
                  type="button"
                  className="btn btn-danger btn-sm roomBox_buttonDelete"
                  onClick={()=>onDeleteRoom(i)}
                >
                <i className="fas fa-times"></i>
                </button>
              </React.Fragment>
            }
          </div>
        </div>
        <div className="col-lg-2">
          <div className="form-group">
            <select 
            className="custom-select" 
            id={`adults_${i}`} 
            name="adults[]"
            data-name="adults"
            value={props.practice.rooms[i].adults || 0}
            onChange={(e)=>onChangeRoom(e, i)}
            >
              ${_htmlAdultOptions}
            </select>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="form-group">
            <select 
              className="custom-select" 
              id={`childrens_${i}`} 
              name="childrens[]"
              data-name="childrens"
              value={props.practice.rooms[i].childrens || 0}
              onChange={(e)=>onChangeRoom(e, i)} 
            >
              ${_htmlChildrenOptions}
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row table_childrenAges">
            {_htmlChildrenAges}
          </div>
        </div>
      </div>
      );
    }

    return _html;
  }

  return(
    <React.Fragment>
    <form onSubmit={formik.handleSubmit} className={"needs-validation" + (formik.errors ? "was-validated" : "")} noValidate>
      <div className="box2 form-template-1">
        <div className="row">
          <div className="col-lg-3">
            <div className="form-group">
              <MyDateRangePicker 
                startDate={props.practice.checkin}
                endDate={props.practice.checkout}
                onChange={(startDate, endDate)=>onChangeDatePicker(startDate, endDate)}
                />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <select
                className={"custom-select" + (formik.errors.treatment ? " is-invalid" : "")}
                name="treatment"
                id="treatment"
                // value={props.practice.treatment || ''}
                // onChange={(e) => onChange(e)}
                value={formik.values.treatment || ''}
                onChange={(e)=>{
                  onChange(e)
                  formik.handleChange(e)
                }}
                >
                <option value="">Trattamento</option>
                {props.priceList && Object.entries(props.priceList).map( ([treatment, prices], index) =>
                  <option key={index} value={treatment}>{treatment}</option>
                )}
              </select>
              {formik.errors.treatment && 
                  <div className="invalid-feedback">
                    {formik.errors.treatment}
                  </div>
                }
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <select
                className="custom-select"
                name="transfer_id"
                id="tranfer_id"
                value={props.practice.transfer_id || ''}
                onChange={(e) => onChange(e)}
                >
                <option value="">Transfer</option>
                {/* <option value="Bus">Bus dalla tua città</option>
                <option value="Aliscafo">Aliscafo</option>
                <option value="Traghetto">Traghetto</option> */}
                {transfers.map((obj, index) => 
                  <option key={index} value={obj.id}>{obj.name}</option>
                )}
              </select>
            </div>
          </div>
        </div>

        <div className="room-box" id="roomBox">
          {renderRooms()}
        </div>
      </div>
      <div className="box3 form-template-2">
        <div className="row">
          <div className="col-lg-3">
            <div className="form-group">
              <div className="title">Richiedi il tuo preventivo gratuitamente</div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <input 
                type="text"
                className={"form-control" + (formik.errors.first_name ? " is-invalid" : "")}
                id="first_name"
                name="first_name"
                placeholder="Nome"
                // value={props.practice.customer.first_name || ""}
                // onChange={(e)=>onChange(e)}
                value={formik.values.first_name || ''}
                onChange={(e)=>{
                  onChange(e)
                  formik.handleChange(e)
                }}
                // reuired="true"
                />
                {formik.errors.first_name && 
                  <div className="invalid-feedback">
                    {formik.errors.first_name}
                  </div>
                }
            </div>
            <div className="form-group">
              <input
                type="text"
                className={"form-control" + (formik.errors.last_name ? " is-invalid" : "")}
                id="last_name"
                name="last_name"
                placeholder="Cognome"
                // value={props.practice.customer.last_name || ""}
                // onChange={(e)=>onChange(e)}
                value={formik.values.last_name || ''}
                onChange={(e)=>{
                  onChange(e)
                  formik.handleChange(e)
                }}
                /> 
                {formik.errors.last_name && 
                  <div className="invalid-feedback">
                    {formik.errors.last_name}
                  </div>
                }
            </div>
            <div className="form-group">
              <input
                type="email"
                className={"form-control" + (formik.errors.email ? " is-invalid" : "")}
                id="email"
                name="email"
                placeholder="Email"
                // defaultValue={props.practice.customer.email || ""}
                // onChange={(e)=>onChange(e)}
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
            <div className="form-group">
              <input
                type="text"
                className={"form-control" + (formik.errors.mobile ? " is-invalid" : "")}
                id="mobile"
                name="mobile"
                placeholder="Cellulare"
                // defaultValue={props.practice.customer.mobile || ""}
                // onChange={(e)=>onChange(e)}
                value={formik.values.mobile || ''}
                onChange={(e)=>{
                  onChange(e)
                  formik.handleChange(e)
                }}
                /> 
                {formik.errors.mobile && 
                  <div className="invalid-feedback">
                    {formik.errors.mobile}
                  </div>
                }
            </div>
          </div>
          <div className="col-lg-5">
            <div className="form-group">
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Messaggio"
                value={props.practice.message || ""}
                onChange={(e)=>onChange(e)}
                >
              </textarea> 
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className={"custom-control-input" + (formik.errors.privacy ? " is-invalid" : "")}
                  name="privacy"
                  id="privacy" 
                  // value={props.practice.privacy || 0}
                  // onChange={(e)=>onChange(e)}
                  value="1"
                  checked={formik.values.privacy == 1 ? 1 : 0}
                  onChange={(e)=>{
                    onChange(e)
                    formik.handleChange(e)
                  }}
                  />
                <label className="custom-control-label" htmlFor="privacy">Acconsento al trattamento dei miei dati ai sensi dell’informativa sulla <a href="/privacy" target="_blank" rel="nofollow">Privacy</a>.</label>
                {formik.errors.privacy && 
                  <div className="invalid-feedback">
                    {formik.errors.privacy}
                  </div>
                }
              </div>
            </div>
            <div className="form-group text-right">
                <button type="submit" className="btn-submit">richiedi disponibilità</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
	return {
		practice: state.practiceByGuest.item,
	}
}
const mapDispatchToProps = (dispatch) => {
  let practiceByGuestAction = new PracticeByGuestAction()
  return {
    setPractice: (data) => {
      dispatch(practiceByGuestAction.setItem(data))
    },
    resetPractice: () => {
      dispatch(practiceByGuestAction.resetItem())
    },
    createPractice: (data) => {
      dispatch(practiceByGuestAction.create(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);