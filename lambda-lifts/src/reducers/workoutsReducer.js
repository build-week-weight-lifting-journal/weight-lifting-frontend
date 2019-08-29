import {
  FETCH_WORKOUTS_DATA_START,
  FETCH_WORKOUTS_DATA_SUCCESS,
  FETCH_WORKOUTS_DATA_FAILURE,
  UPDATE_WORKOUT_START,
  UPDATE_WORKOUT_SUCCESS,
  UPDATE_WORKOUT_FAILURE
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
    case UPDATE_WORKOUT_START: {
      return {
        ...state,
        workoutIsUpdated: false
      };
    }
    case UPDATE_WORKOUT_SUCCESS: {
      return {
        ...state
      };
    }
    case UPDATE_WORKOUT_FAILURE: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};
