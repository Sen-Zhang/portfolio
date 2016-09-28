import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = {
  routing: routerReducer
};
const combined = combineReducers(reducers);

export default combined;
