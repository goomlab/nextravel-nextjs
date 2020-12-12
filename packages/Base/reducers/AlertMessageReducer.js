import { alertMessageConsts } from '../actions/AlertMessageAction';

const AlertMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case alertMessageConsts.ALERT_MESSAGE_SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
        error: 0
      }
    case alertMessageConsts.ALERT_MESSAGE_ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
        error: 1
      }
    case alertMessageConsts.ALERT_MESSAGE_WARNING:
      return {
        type: 'alert-warning',
        message: action.message,
        error: 1
      }
    default:
      return state;
  }
}

export default AlertMessageReducer;