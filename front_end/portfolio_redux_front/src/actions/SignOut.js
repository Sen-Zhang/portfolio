import * as consts from './const';
import config from '../config/base';

export function requestSignOut() {
  return {
    type: consts.SIGN_OUT_SUCCESS,
    isAuthenticated: false,
    invalid: false,
    user: null,
    auth_token: null
  };
}

export function signOut() {
  return dispatch => {
    localStorage.removeItem(config.site);
    dispatch(requestSignOut());
    location.replace('/login');
  };
}
