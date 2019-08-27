import { IS_SIGNING_UP, SIGNUP_SUCCESS, SIGNUP_ERROR } from "../actions";

const initialState = {
  isSignUpLoading: false,
  isSignedUp: false,
  error: ""
};

export const signUpReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case IS_SIGNING_UP:
      return {
        ...state,
        isSignUpLoading: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSignUpLoading: false,
        isSignedUp: true
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        isSignUpLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};