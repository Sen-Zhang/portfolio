import * as consts from './const';
import Auth from '../api/AuthApi';

function requestSignIn(creds) {
  return {
    type: consts.SIGN_IN_REQUEST,
    creds
  };
}

function receiveSignIn(session) {
  return {
    type: consts.SIGN_IN_SUCCESS,
    auth_token: session.auth_token,
    user: session.user
  };
}

function signInFail() {
  return {
    type: consts.SIGN_IN_FAILURE,
  };
}

export function signIn(creds) {
  return dispatch => {
    dispatch(requestSignIn(creds));
    Auth.signIn(creds).then((res) => {
      if (res.body.auth_token) {
        const session = {
          auth_token: res.body.auth_token,
          user: res.body.user,
          isAuthenticated: true,
          invalid: false
        };

        localStorage.setItem('session', JSON.stringify(session));
        dispatch(receiveSignIn(session));
        location.replace('/home');
      } else {
        dispatch(signInFail());
      }
    }, () => {
      dispatch(signInFail());
    });
  };
}
