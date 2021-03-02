import BaseAction from '~/packages/BaseAction'
import PageLoaderAction from '~/packages/Base/actions/PageLoaderAction'
import AlertMessageAction from '~/packages/Base/actions/AlertMessageAction'
import HotelService from '../services/HotelService'

export const hotelConsts = {
  ITEMS: 'HOTEL_LIST_ITEMS',
  RESET_ITEMS: 'HOTEL_LIST_RESET_ITEMS',
  // RESET_ITEM: 'PRACTICE_BY_GUEST_RESET_ITEM',
  // GET_CLIENT_IP: 'PRACTICE_BY_GUEST_GET_CLIENT_IP',
  // CREATE: 'PRACTICE_BY_GUEST_CREATE',
}

export default class HotelAction extends BaseAction {
  constructor() {
		super();
		this.service = new HotelService();
		this.consts = hotelConsts;
  }



  query(params) {
    return (dispatch) => {
      dispatch(PageLoaderAction.show())
      this.service.query(params)
      .then(response => {console.log('response data', response.data)
        dispatch({
          type: this.consts.ITEMS,
          items: response.data
        })
        dispatch(PageLoaderAction.hide())
      })
      .catch(error => {
        dispatch({
          type: this.consts.RESET_ITEMS,
          items: []
        })
        dispatch(PageLoaderAction.hide())
      })
    }
  }
}