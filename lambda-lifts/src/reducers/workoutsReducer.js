import {
  FETCH_WORKOUTS_DATA_START,
  FETCH_WORKOUTS_DATA_SUCCESS,
  FETCH_WORKOUTS_DATA_FAILURE,
  FETCH_SETS_START,  
  FETCH_SETS_SUCCESS,
  FETCH_SETS_FAILURE,
} from "../actions/index.js";

const initialState = {
  workoutArray: [],
  workoutsIsLoading: false,
  workoutsError: "",
  workoutIsUpdated: false,
  setsArray: [],
  setsIsLoading: false, 
  setsError: ""
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
        workoutArray: action.payload,
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
    case FETCH_SETS_START: {
      return {
        ...state,
        setsIsLoading: true,
        setsError: ""
      };
    }
    case FETCH_SETS_SUCCESS: {
      return {
        ...state,
        setsArray: action.payload,
        setsIsLoading: false,
        setsError: ""
      };
    }
    case FETCH_SETS_FAILURE: {
      return {
        ...state,
        setsIsLoading: false,
        setsError: action.payload
      };
    }
    default:
      return state;
  }
};
