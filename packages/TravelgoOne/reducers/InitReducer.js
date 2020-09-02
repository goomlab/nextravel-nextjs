const initialState = {
  locs: [],
  hotelCategories: [],
  months: [],
  specials: [],
}

const InitReducer = (state = intitialState, action) => {
  switch (action.type) {
      case 'INIT':
          return {
              ...state,
              locs: action.locs,
              hotelCategories: action.hotelCategories,
              months: action.months,
              specials: action.specials,
          };
      default:
          return state;
  }
};

export default InitReducer;