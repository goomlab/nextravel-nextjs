import { hotelConsts } from '../actions/HotelAction'

const initialState = {
  loading: 0,
  params: {
    page: 1
  },
  items: [],
  meta: null
}

const HotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case hotelConsts.RESET_ITEMS:
      return initialState;
    case hotelConsts.LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case hotelConsts.ITEMS:
      return {
        ...state,
        items: [
          ...state.items,
          ...action.items
        ],
        meta: action.meta,
        params: {
          ...state.params,
          page: parseInt(state.params.page) + 1
        }
      }
    default:
      return state;
  }
}

export default HotelReducer;