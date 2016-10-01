import {
  SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_SUCCESS
} from '../actions/const';

const savedStore = JSON.parse(localStorage.getItem('session')) || {};
const sessionInfo = Object.assign({},
  {
    auth_token: null,
    user: null,
    isAuthenticated: false,
    invalid: false
  },
  savedStore
);

function session(state = { session: sessionInfo }, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        session: {
          isAuthenticated: false,
          invalid: false,
          auth_token: null,
          user: null,
        }
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        session: {
          isAuthenticated: true,
          invalid: false,
          auth_token: action.auth_token,
          user: action.user,
        }
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        session: {
          isAuthenticated: false,
          invalid: true,
          auth_token: null,
          user: null,
        }
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        session: {
          isAuthenticated: false,
          invalid: false,
          auth_token: null,
          user: null,
        }
      };
    default:
      return state;
  }
}

export default session;
