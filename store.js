import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

import alertMessage from './packages/Base/reducers/AlertMessageReducer'
import pageLoader from './packages/Base/reducers/PageLoaderReducer'
import practiceByGuest from './packages/TravelgoOne/reducers/PracticeByGuestReducer'

// create a makeStore function
export const makeStore = context => createStore(
    combineReducers({
    alertMessage: alertMessage,
    pageLoader: pageLoader,
    practiceByGuest: practiceByGuest
  }),
  {},
  composeWithDevTools(applyMiddleware(reduxThunk))
);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});