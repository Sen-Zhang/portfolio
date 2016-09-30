import config from '../config/base';
import {
  SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_SUCCESS
} from '../actions/const';

const savedStore = JSON.parse(localStorage.getItem(config.site)) || {};
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
          isAuthenticated: false
        }
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        session: {
          isAuthenticated: true,
          invalid: false,
          user: action.user
        }
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        session: {
          isAuthenticated: false,
          invalid: false,
        }
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        session: {
          isAuthenticated: false
        }
      };
    default:
      return state;
  }
}

export default session;
