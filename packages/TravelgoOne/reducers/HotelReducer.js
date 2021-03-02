import { hotelConsts } from '../actions/HotelAction'

const initialState = {
  items: []
}

const HotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case hotelConsts.RESET_ITEMS:
      return initialState;
    case hotelConsts.ITEMS:
      return {
        ...state,
        items: action.items
      }
    default:
      return state;
  }
}

export default HotelReducer;