import {
  FETCH_EXERCISE_CATEGORY_START,
  FETCH_EXERCISE_CATEGORY_SUCCESS,
  FETCH_EXERCISE_CATEGORY_FAILURE,
  CLEAR_EXERCISE_CATEGORY,
  ADD_EXERCISE_CATEGORY
} from "../actions/index.js";

const initialState = {
  exercises: [],
  exerciseIsLoading: false,
  exerciseError: "",
  selectedExercises: []
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
        exercises: [...state.exercises, action.payload],
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
    case CLEAR_EXERCISE_CATEGORY: {
      return {
        ...state,
        selectedExercises: []
      };
    }
    case ADD_EXERCISE_CATEGORY: {
      return {
        ...state,
        selectedExercises: [...state.selectedExercises, action.payload]
      };
    }
    default:
      return state;
  }
};
