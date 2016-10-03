import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../actions/const';

const session = (state = {
  token: null,
  user: null,
  isAuthenticated: false
}, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      location.replace('/home');

      return {
        ...state,
        ...{
          isAuthenticated: true,
          token: action.token,
          user: action.user,
        }
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        ...{
          isAuthenticated: false,
          token: null,
          user: null,
        }
      };
    default:
      return state;
  }
};

export default session;
