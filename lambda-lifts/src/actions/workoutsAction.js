// axios with authorization
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

// fetch for workouts array data
export const FETCH_WORKOUTS_DATA_START = "FETCH_WORKOUTS_DATA_START";
export const FETCH_WORKOUTS_DATA_SUCCESS = "FETCH_WORKOUTS_DATA_SUCCESS";
export const FETCH_WORKOUTS_DATA_FAILURE = "FETCH_WORKOUTS_DATA_FAILURE";

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
