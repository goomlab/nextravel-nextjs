import { newsletterConsts } from '../actions/NewsletterAction'

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  mobile: "",
  privacy: "",
  list_ids: [2]
}

const NewsletterReducer = (state = initialState, action) => {
  switch (action.type) {
    case newsletterConsts.RESET_ITEM:
      return initialState;
    case newsletterConsts.SET_ITEM:
      return {
        ...state,
        ...action.item
      }
    case newsletterConsts.GET_CLIENT_IP:
      return {
        ...state,
        sub_ip: action.clientIp
      }
    case newsletterConsts.SENDINBLUE_CREATE_CONTACT:
      return initialState;
    default:
      return state;
  }
}

export default NewsletterReducer;