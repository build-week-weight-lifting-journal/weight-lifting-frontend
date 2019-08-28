import {
   LOGIN_START,
   LOGIN_ERROR,
   LOGIN_SUCCESS
} from "../actions/index.js";

const initialState = {
  loginIsLoading: false,
  isLoggedIn: false,
  loginError: ""
};

export const logInReducer = (state = initialState, action) => {
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
                isLoggedIn: true
            };
        case LOGIN_ERROR:
            return {
                ...state,
                loginIsLoading: false,
                loginError: action.payload
            };
        default:
            return state;
    }
};
