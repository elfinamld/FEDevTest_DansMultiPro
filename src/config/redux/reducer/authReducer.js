import * as types from '../types';

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.auth.LOGIN_RD:
      return {
        ...state,
        isLoggedIn: true,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
