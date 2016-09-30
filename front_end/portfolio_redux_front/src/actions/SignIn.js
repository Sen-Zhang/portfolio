import * as consts from './const';
import config from '../config/base';

function requestSignIn(creds) {
  return {
    type: consts.SIGN_IN_REQUEST,
    isAuthenticated: false,
    invalid: false,
    creds
  };
}

function receiveSignIn(session) {
  return {
    type: consts.SIGN_IN_SUCCESS,
    isAuthenticated: true,
    invalid: false,
    auth_token: session.auth_token,
    user: session.user
  };
}

// function signInFail() {
//   return {
//     type: consts.SIGN_IN_FAILURE,
//     isAuthenticated: false,
//     invalid: true
//   };
// }

export function signIn(creds) {
  const session = {
    auth_token: 'the_auth_token',
    user: 'Foo',
    isAuthenticated: true,
    invalid: false
  };

  return dispatch => {
    dispatch(requestSignIn(creds));
    localStorage.setItem(config.site, JSON.stringify(session));
    dispatch(receiveSignIn(session));
    location.replace('/home');
    // dispatch(signInFail());
  };
}
