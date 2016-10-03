import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import session from './session';

const reducers = {
  routing,
  session
};
const combined = combineReducers(reducers);

export default combined;
