import BaseAction from '~/packages/BaseAction'
import PageLoaderAction from '~/packages/Base/actions/PageLoaderAction'
import AlertMessageAction from '~/packages/Base/actions/AlertMessageAction'
import HotelService from '../services/HotelService'

export const hotelConsts = {
  LOADING: 'HOTEL_LIST_LOADING',
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

  loading(state) {
    return(dispatch) => {
      dispatch({
        type: this.consts.LOADING,
        loading: state
      })
    }
  }
  


  query(params) {
    return (dispatch) => {
      dispatch(PageLoaderAction.show())
      dispatch(this.loading(1))

      this.service.query(params)
      .then(response => {
        dispatch({
          type: this.consts.ITEMS,
          items: response.data,
          meta: response.meta
        })
        dispatch(PageLoaderAction.hide())
        // if( response.data.length > 0 )
        if(parseInt(response.meta.last_page) > 1)
          dispatch(this.loading(0))
        else
          dispatch(this.loading(1))
      })
      .catch(error => {
        dispatch({
          type: this.consts.RESET_ITEMS,
          items: [],
          meta: null
        })
        dispatch(PageLoaderAction.hide())
        dispatch(this.loading(0))
      })
    }
  }
}