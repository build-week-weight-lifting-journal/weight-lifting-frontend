import {
  FETCH_EXERCISE_CATEGORY_START,
  FETCH_EXERCISE_CATEGORY_SUCCESS,
  FETCH_EXERCISE_CATEGORY_FAILURE,
  POST_EXERCISE_START,
  POST_EXERCISE_SUCCESS,
  POST_EXERCISE_FAILURE,
  UPDATE_WORKOUT_START,
  UPDATE_WORKOUT_SUCCESS,
  UPDATE_WORKOUT_FAILURE
} from "../actions/index.js";

const initialState = {
  exercises: [],
  exerciseIsLoading: false,
  exerciseError: "",
  exerciseObj: {
    weight: "100kg",
    reps: 10,
    sets: 10,
    journalId: 0,
    exerciseId: 0
  },
  objectIsLoading: false,
  objectError: ""
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
    case POST_EXERCISE_START: {
      return {
        ...state,
        objectIsLoading: true,
        objectError: ""
      };
    }
    case POST_EXERCISE_SUCCESS: {
      return {
        ...state,
        exerciseObj: { ...state.exerciseObj, ...action.payload },
        objectIsLoading: false,
        objectError: ""
      };
    }
    case POST_EXERCISE_FAILURE: {
      return {
        ...state,
        objectIsLoading: false,
        objectError: action.payload
      };
    }
    case UPDATE_WORKOUT_START: {
      return {
        ...state,
        objectIsLoading: true
      };
    }
    case UPDATE_WORKOUT_SUCCESS: {
      return {
        ...state,
        exerciseObj: { ...state.exerciseObj, ...action.payload },
        objectIsLoading: false,
        objectError: ""
      };
    }
    case UPDATE_WORKOUT_FAILURE: {
      return {
        ...state,
        objectError: action.payload
      };
    }
    default:
      return state;
  }
};
