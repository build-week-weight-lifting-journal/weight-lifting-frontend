// axios with authorization
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

// fetch for workouts array data
export const FETCH_WORKOUTS_DATA_START = "FETCH_WORKOUTS_DATA_START";
export const FETCH_WORKOUTS_DATA_SUCCESS = "FETCH_WORKOUTS_DATA_SUCCESS";
export const FETCH_WORKOUTS_DATA_FAILURE = "FETCH_WORKOUTS_DATA_FAILURE";

export const FETCH_SETS_START = "FETCH_SETS_START";
export const FETCH_SETS_SUCCESS = "FETCH_SETS_SUCCESS";
export const FETCH_SETS_FAILURE = "FETCH_SETS_FAILURE";

export const getWorkoutsData = () => dispatch => {
  // loading data
  dispatch({ type: FETCH_WORKOUTS_DATA_START });

  // add authorization to axios promise
  axiosWithAuth()
    .get(`https://backend-buildweek-wlj-mack.herokuapp.com/api/journals/users/${localStorage.getItem(
      "userId"
    )}`,)
    .then(response => {
      // successful
      // console.log("response data", response.data);
      dispatch({ type: FETCH_WORKOUTS_DATA_SUCCESS, payload: response.data });
    })
    .catch(error => {
      // unsuccessful
      dispatch({ type: FETCH_WORKOUTS_DATA_FAILURE, payload: error.response });
    });
};

export const getSets = (workout) => dispatch => {

  dispatch({ type: FETCH_SETS_START });

  axiosWithAuth() 
    .get(`https://backend-buildweek-wlj-mack.herokuapp.com/api/journals/exercises/${workout.userId}/${workout.id}`)

    .then(response => {
      // console.log("response data", response.data.item)  
      dispatch({ type: FETCH_SETS_SUCCESS, payload: response.data.item });
    })

    .catch(error => {
      // console.log(error)
      dispatch({ type: FETCH_SETS_FAILURE });
    })
}

export const deleteSetsAndWorkout = (journalId) => () => {
  axiosWithAuth()
    .delete(
      `https://backend-buildweek-wlj-mack.herokuapp.com/api/journals/${journalId}`
    )
    .then(response => {
      localStorage.removeItem("journalId");
      console.log("deleted journal", response);
    })
    .catch(error => {
      console.log("Error", error);
    });
};