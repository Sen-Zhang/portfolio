import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import session from './Session';

const reducers = {
  routing: routerReducer,
  session
};
const combined = combineReducers(reducers);

export default combined;
