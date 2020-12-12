import React from 'react'
import { connect } from 'react-redux'

import AlertMessageAction from '~/packages/Base/actions/AlertMessageAction';

const AlertMessage = props => {

  let initialState = (props.message && props.message != "") ? true : false;
	const [open, setOpen] = React.useState(initialState);
	if( initialState != open )
		setOpen(initialState);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
		setOpen(false);
		props.resetAlertMessage();
  };

  let type = "info";
	let title = "Info";
	if( props.type ) {
		switch(props.type) {
			case 'alert-success': type = 'success'; title = "Successo"; break;
			case 'alert-danger': type = 'error'; title = "Errore"; break;
			case 'alert-warning': type = 'warning'; title = "Attenzione"; break;
			default: type = "info"; title = "Info"; break;
		}
	}
  
  return(
    <div style={{
      display: (open ? "block" : "none"),
      background: 'rgba(56,64,68,0.9)',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: '1070',
      textAlign: 'center'
      }}>
      <div 
        id="AlertMessage" 
        className={"AlertMessage modal" + (open ? " fade show" : "")}
        tabIndex="-1" 
        role="dialog"
        style={{
          display: (open ? "block" : "none")
        }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={(e)=>handleClose()}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{props.message}</p>
            </div>
            {/* <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-dismiss="modal"
                onClick={(e)=>handleClose()}
                >
                  Chiudi
                </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
	return {
		type: state.alertMessage.type,
		message: state.alertMessage.message
	}
}
const mapDispatchToProps = (dispatch) => {
  return {
    resetAlertMessage: () => {
      dispatch(AlertMessageAction.reset());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertMessage);