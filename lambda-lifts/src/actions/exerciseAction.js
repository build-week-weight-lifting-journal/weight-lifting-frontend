// axios with authorization
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

// fetch for category array data
export const FETCH_EXERCISE_CATEGORY_START = "FETCH_EXERCISE_DATA_START";
export const FETCH_EXERCISE_CATEGORY_SUCCESS = "FETCH_EXERCISE_DATA_SUCCESS";
export const FETCH_EXERCISE_CATEGORY_FAILURE = "FETCH_EXERCISE_DATA_FAILURE";
export const CLEAR_EXERCISE_CATEGORY = "CLEAR_EXERCISE_CATEGORY";
export const ADD_EXERCISE_CATEGORY = "ADD_EXERCISE_CATEGORY";

export const getExerciseData = () => dispatch => {
  // loading data
  dispatch({ type: FETCH_EXERCISE_CATEGORY_START });

  // add authorization to axios promise
  axiosWithAuth()
    .get("https://backend-buildweek-wlj-mack.herokuapp.com/api/exercises")
    .then(response => {
      // successful
      console.log("response data", response);

      // dispatch({ type: FETCH_EXERCISE_CATEGORY_SUCCESS, payload: response.data });
    })
    .catch(error => {
      // unsuccessful
      dispatch({ type: FETCH_EXERCISE_CATEGORY_FAILURE, payload: error.response });
    });
};

export const clearSelectedExercises = () => dispatch => {
  dispatch({ type: CLEAR_EXERCISE_CATEGORY });

  console.log("cleared!");
};

export const addSelectedExercises = (exercise) => dispatch => {
  dispatch({ type: ADD_EXERCISE_CATEGORY, payload: exercise });

  console.log("added an exercise", exercise);
};