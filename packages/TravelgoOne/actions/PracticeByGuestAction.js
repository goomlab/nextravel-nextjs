import BaseAction from '~/packages/BaseAction'
import PageLoaderAction from '~/packages/Base/actions/PageLoaderAction'
import AlertMessageAction from '~/packages/Base/actions/AlertMessageAction'
import PracticeService from '../services/PracticeService'

export const practiceByGuestConsts = {
  SET_ITEM: 'PRACTICE_BY_GUEST_SET_ITEM',
  RESET_ITEM: 'PRACTICE_BY_GUEST_RESET_ITEM',
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