import React from 'react';
import moment from 'moment';

import MyDateRangePicker from '../MyDateRangePicker';

const BookingForm = props => {

  const [state, setState] = React.useState({
    customer: {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
    },
    message: "",
    privacy: 0,
    checkin: props.query.startDate || null,
    checkout: props.query.endDate ||null,
    numRooms: 1,
    rooms: [
      {
        adults: 2,
        childrens: 0,
        childrenAges: []
      }
    ],
    transfer_id: null
  });

  // const [focus, setFocus] = React.useState([]);

  // const onFocus = (e) => {
  //   e.persist();console.log(e);
  //   if( !focus || e.target.value != "" )
  //     e.target.parentElement.classList.add('focus');
  //   else
  //     e.target.parentElement.classList.remove('focus');
  //   setFocus(!focus);
  // }

  const onChange = (e) => {
    e.persist();
    let newState = Object.assign({},state);
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
    setState(newState);
  }

  const onChangeDatePicker = (startDate, endDate) => {
    let newState = Object.assign({},state);
    newState.checkin = startDate.format('YYYY-MM-DD');
    newState.checkout = endDate.format('YYYY-MM-DD');
    setState(newState);
  }

  /**
   * Room
   */
  const onAddRoom = () => {
    let newState = Object.assign({}, state);
    newState.rooms.push({
      adults: 2,
      childrens: 0,
      childrenAges: []
    });
    setState(newState);
  }

  const onDeleteRoom = (index) => {
    let newState = Object.assign({}, state);
    newState.rooms.splice(index, 1);
    setState(newState);
  }

  const onAddRoomChildren = (e, index) => {
    let newState = Object.assign({}, state);
    newState.rooms[index].childrenAges.push(e.target.value);
    newState.rooms[index].childrenAges.sort();
    setState(newState);
  }
  
  const onChangeRoom = (e, index) => {
    e.persist();
    let newState = Object.assign({}, state);
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
    setState(newState);
  }

  const renderRooms = () => {
    let _html = [];

    for( let i in state.rooms ){
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
      for( let j in state.rooms[i].childrenAges ) {
        _htmlChildrenAges.push(
          <div key={j} className="col-lg-3">
            <div className="form-group">
              <select 
                className="custom-select"
                name="childrens_age[]"
                data-name="ageChildrens"
                data-index={j}
                value={state.rooms[i].childrenAges[j] || 0}
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
            value={state.rooms[i].adults || 0}
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
              value={state.rooms[i].childrens || 0}
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
      <div className="box2 form-template-1">
        <div className="row">
          <div className="col-lg-3">
            <div className="form-group">
              <MyDateRangePicker 
                startDate={props.query.checkin}
                endDate={props.query.checkout}
                onChange={(startDate, endDate)=>onChangeDatePicker(startDate, endDate)}
                />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <select
                className="custom-select"
                name="transfer_id"
                id="tranfer_id"
                value={state.transfer_id || ''}
                onChange={(e) => onChange(e)}
                >
                <option value="">Transfer</option>
                <option value="1">Transfer 1</option>
                <option value="2">Transfer 2</option>
                <option value="3">Transfer 3</option>
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
                className="form-control"
                id="first_name"
                name="first_name"
                placeholder="Nome"
                value={state.customer.first_name || ""}
                onChange={(e)=>onChange(e)}
                /> 
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="last_name"
                name="last_name"
                placeholder="Cognome"
                value={state.customer.last_name || ""}
                onChange={(e)=>onChange(e)}
                /> 
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                defaultValue={state.customer.email || ""}
                onChange={(e)=>onChange(e)}
                /> 
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                placeholder="Cellulare"
                defaultValue={state.customer.mobile || ""}
                onChange={(e)=>onChange(e)}
                /> 
            </div>
          </div>
          <div className="col-lg-5">
            <div className="form-group">
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Messaggio"
                value={state.message || ""}
                onChange={(e)=>onChange(e)}
                >
              </textarea> 
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="privacy"
                  id="privacy" 
                  value={state.privacy || 0}
                  onChange={(e)=>onChange(e)}
                  />
                <label className="custom-control-label" htmlFor="privacy">Acconsento al trattamento dei miei dati ai sensi dell’informativa sulla <a href="#">Privacy</a>.</label>
              </div>
            </div>
            <div className="form-group text-right">
                <button type="submit" className="btn-submit">richiedi disponibilità</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BookingForm;