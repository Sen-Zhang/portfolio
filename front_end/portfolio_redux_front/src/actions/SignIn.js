import * as consts from './const';

export function signIn(session) {
  return {
    type: consts.SIGN_IN,
    session
  };
}
