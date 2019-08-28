import { LOGIN_START, LOGIN_FAILURE, LOGIN_SUCCESS } from "../actions/index.js";

const initialState = {
  loginIsLoading: false,
  isLoggedIn: false,
  loginError: "",
  userId: 0
};

export const loginReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loginIsLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginIsLoading: false,
        isLoggedIn: true,
        userId: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginIsLoading: false,
        loginError: action.payload
      };
    default:
      return state;
  }
};
