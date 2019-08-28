import {
  IS_MAKING_WORKOUT,
  WORKOUT_MADE_SUCCESS,
  WORKOUT_MADE_FAILURE
} from "../actions";

const initialState = {
  isLoading: false,
  isMade: false,
  error: ""
};

export const nameWorkoutReducer = (state = initialState, action) => {
  console.log("nameWorkoutReducer", action.type);
  switch (action.type) {
    case IS_MAKING_WORKOUT:
      return {
        ...state,
        isLoading: true
      };
    case WORKOUT_MADE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isMade: true
      };
    case WORKOUT_MADE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
