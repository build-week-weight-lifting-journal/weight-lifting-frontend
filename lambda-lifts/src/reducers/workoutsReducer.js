import {
  FETCH_WORKOUTS_DATA_START,
  FETCH_WORKOUTS_DATA_SUCCESS,
  FETCH_WORKOUTS_DATA_FAILURE
} from "../actions/index.js";

const initialState = {
  workouts: [],
  workoutsIsLoading: false,
  workoutsError: "",
  workoutIsUpdated: false
};

export const workoutsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORKOUTS_DATA_START: {
      return {
        ...state,
        workoutsIsLoading: true,
        workoutsError: ""
      };
    }
    case FETCH_WORKOUTS_DATA_SUCCESS: {
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
        workoutsIsLoading: false,
        workoutsError: ""
      };
    }
    case FETCH_WORKOUTS_DATA_FAILURE: {
      return {
        ...state,
        workoutsIsLoading: false,
        workoutsError: action.payload
      };
    }

    default:
      return state;
  }
};
