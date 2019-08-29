// axios with authorization
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

// fetch for workouts array data
export const FETCH_WORKOUTS_DATA_START = "FETCH_WORKOUTS_DATA_START";
export const FETCH_WORKOUTS_DATA_SUCCESS = "FETCH_WORKOUTS_DATA_SUCCESS";
export const FETCH_WORKOUTS_DATA_FAILURE = "FETCH_WORKOUTS_DATA_FAILURE";
export const UPDATE_WORKOUT_START = "UPDATE_WORKOUT_START";
export const UPDATE_WORKOUT_SUCCESS = "UPDATE_WORKOUT_SUCCESS";
export const UPDATE_WORKOUT_FAILURE = "UPDATE_WORKOUT_FAILURE";

export const getWorkoutsData = () => dispatch => {
  // loading data
  dispatch({ type: FETCH_WORKOUTS_DATA_START });

  // add authorization to axios promise
  axiosWithAuth()
    .get("")
    .then(response => {
      // successful
      // console.log("response data", response);
      // dispatch({ type: FETCH_WORKOUTS_DATA_SUCCESS, payload: response.data });
    })
    .catch(error => {
      // unsuccessful
      dispatch({ type: FETCH_WORKOUTS_DATA_FAILURE, payload: error.response });
    });
};

export const updateWorkoutData = () => dispatch => {
  dispatch({ type: UPDATE_WORKOUT_START });
  axiosWithAuth()
    .put(
      `https://backend-buildweek-wlj-mack.herokuapp.com/api/jouexe/${localStorage.getItem(
        "exerciseId"
      )}`
    )
    .then(response => {
      dispatch({ type: UPDATE_WORKOUT_SUCCESS });
    })
    .catch(error => {
      dispatch({ type: UPDATE_WORKOUT_FAILURE, payload: error.response });
    });
};
