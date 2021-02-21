import BaseAction from '~/packages/BaseAction'
import PageLoaderAction from '~/packages/Base/actions/PageLoaderAction'
import AlertMessageAction from '~/packages/Base/actions/AlertMessageAction'
import PracticeService from '../services/PracticeService'

export const practiceByGuestConsts = {
  SET_ITEM: 'PRACTICE_BY_GUEST_SET_ITEM',
  RESET_ITEM: 'PRACTICE_BY_GUEST_RESET_ITEM',
  GET_CLIENT_IP: 'PRACTICE_BY_GUEST_GET_CLIENT_IP',
  CREATE: 'PRACTICE_BY_GUEST_CREATE',
}

export default class PracticeByGuestAction extends BaseAction {
  constructor() {
		super();
		this.service = new PracticeService();
		this.consts = practiceByGuestConsts;
  }



  setItem(item) {
    return (dispatch) => {
      dispatch({
        type: this.consts.SET_ITEM,
        item: item
      })
    }
  }

  resetItem() {
    return (dispatch) => {
      dispatch({
        type: this.consts.RESET_ITEM,
      })
    }
  }

  getClientIp() {
    return (dispatch) => {
      this.service.getClientIp()
      .then(response => {
        dispatch({
          type: this.consts.GET_CLIENT_IP,
          clientIp: response.data.clientIp,
        })
      })
      .catch(error => {

      })
    }
  }

  create(params) {
    return (dispatch) => {
      dispatch(PageLoaderAction.show())
      this.service.createByGuest(params)
      .then(response => {
        dispatch(this.resetItem())
        dispatch(AlertMessageAction.alertMessageSuccess('Richiesta inviata con successo!'))
        dispatch(PageLoaderAction.hide())
      })
      .catch(error => {
        dispatch(AlertMessageAction.alertMessageError(error.response.data.meta.message))
        dispatch(PageLoaderAction.hide())
      })
    }
  }
}