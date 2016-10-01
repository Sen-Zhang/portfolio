import * as consts from './const';

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
    localStorage.removeItem('session');
    dispatch(requestSignOut());
    location.replace('/login');
  };
}
