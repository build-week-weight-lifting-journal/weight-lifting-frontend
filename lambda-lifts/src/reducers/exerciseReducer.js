import {
  FETCH_EXERCISE_CATEGORY_START,
  FETCH_EXERCISE_CATEGORY_SUCCESS,
  FETCH_EXERCISE_CATEGORY_FAILURE,
} from "../actions/index.js";

const initialState = {
  exercises: [],
  exerciseIsLoading: false,
  exerciseError: "",
  exerciseId: 0, 
};

export const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXERCISE_CATEGORY_START: {
      return {
        ...state,
        exerciseIsLoading: true,
        exerciseError: ""
      };
    }
    case FETCH_EXERCISE_CATEGORY_SUCCESS: {
      return {
        ...state,
        exercises: [...state.exercises, ...action.payload],
        exerciseIsLoading: false,
        exerciseError: ""
      };
    }
    case FETCH_EXERCISE_CATEGORY_FAILURE: {
      return {
        ...state,
        exerciseIsLoading: false,
        exerciseError: action.payload
      };
    }
    default:
      return state;
  }
};
