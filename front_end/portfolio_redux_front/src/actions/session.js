import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../actions/const';

export const receiveSignIn = (token, user) => ({
  type: SIGN_IN_SUCCESS,
  token,
  user
});

export const signOut = () => ({
  type: SIGN_OUT_SUCCESS
});
