import { pageLoaderConsts } from '../actions/PageLoaderAction';

const PageLoaderReducer = (state = {
    type: "hide",
    display: "none"
}, action) => {
  switch (action.type) {
    case pageLoaderConsts.SHOW:
      return {
        type: "show",
        display: action.display        
      }
    case pageLoaderConsts.HIDE:
      return {
        type: "hide",
        display: action.display
      }
    default:
      return state;
  }
}

export default PageLoaderReducer;