// axios with authorization
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

// fetch for category array data
export const FETCH_EXERCISE_CATEGORY_START = "FETCH_EXERCISE_CATEGORY_START";
export const FETCH_EXERCISE_CATEGORY_SUCCESS = "FETCH_EXERCISE_CATEGORY_SUCCESS";
export const FETCH_EXERCISE_CATEGORY_FAILURE = "FETCH_EXERCISE_CATEGORY_FAILURE";

export const getExerciseData = () => dispatch => {
  // loading data
  dispatch({ type: FETCH_EXERCISE_CATEGORY_START });

  // add authorization to axios promise
  axiosWithAuth()
    .get("https://backend-buildweek-wlj-mack.herokuapp.com/api/exercises")
    .then(response => {
      // successful
      // console.log("response data", response);

      dispatch({ type: FETCH_EXERCISE_CATEGORY_SUCCESS, payload: response.data });

    })
    .catch(error => {
      // unsuccessful
      dispatch({ type: FETCH_EXERCISE_CATEGORY_FAILURE, payload: error.response });
    });
};
