import { practiceByGuestConsts } from '../actions/PracticeByGuestAction'

const initialCustomer = {
  first_name: "",
  last_name: "",
  email: "",
  mobile: "",
}

const initialState = {
  item: {
    hotel_id: null,
    rate_plan_id: null,
    customer: initialCustomer,
    message: "",
    privacy: 0,
    checkin: null,
    checkout: null,
    treatment: null,
    numRooms: 1,
    rooms: [
      {
        adults: 2,
        childrens: 0,
        childrenAges: []
      }
    ],
    transfer_id: null
  }
}

const PracticeByGuestReducer = (state = initialState, action) => {
  switch (action.type) {
    case practiceByGuestConsts.RESET_ITEM:
      return {
        ...state,
        customer: initialCustomer
      }
    case practiceByGuestConsts.SET_ITEM:
      return {
        ...state,
        item: action.item
      }
    case practiceByGuestConsts.CREATE:
      return {
        ...state,
        item: action.item
      }
    default:
      return state;
  }
}

export default PracticeByGuestReducer;