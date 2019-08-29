// axios with authorization
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

// fetch for category array data
export const FETCH_EXERCISE_CATEGORY_START = "FETCH_EXERCISE_CATEGORY_START";
export const FETCH_EXERCISE_CATEGORY_SUCCESS =
  "FETCH_EXERCISE_CATEGORY_SUCCESS";
export const FETCH_EXERCISE_CATEGORY_FAILURE =
  "FETCH_EXERCISE_CATEGORY_FAILURE";

export const POST_EXERCISE_START = "POST_EXERCISE_START";
export const POST_EXERCISE_SUCCESS = "POST_EXERCISE_SUCCESS";
export const POST_EXERCISE_FAILURE = "POST_EXERCISE_FAILURE";
export const UPDATE_WORKOUT_START = "UPDATE_WORKOUT_START";
export const UPDATE_WORKOUT_SUCCESS = "UPDATE_WORKOUT_SUCCESS";
export const UPDATE_WORKOUT_FAILURE = "UPDATE_WORKOUT_FAILURE";

export const getExerciseData = () => dispatch => {
  // loading data
  dispatch({ type: FETCH_EXERCISE_CATEGORY_START });

  // add authorization to axios promise
  axiosWithAuth()
    .get("https://backend-buildweek-wlj-mack.herokuapp.com/api/exercises")
    .then(response => {
      // successful
      console.log("getExercise data", response);

      dispatch({
        type: FETCH_EXERCISE_CATEGORY_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      // unsuccessful
      dispatch({
        type: FETCH_EXERCISE_CATEGORY_FAILURE,
        payload: error.response
      });
    });
};

export const postExercise = exercise => dispatch => {
  // put id of exercise and id of journal to state (pass in to object that we're posting using the check button)

  // for may
  // user id
  // journal id
  // api/journals/exercises/:userId/:id --- this is an array (item)
  // renders my workout cards

  dispatch({ type: POST_EXERCISE_START });

  axiosWithAuth()
    .post(
      "https://backend-buildweek-wlj-mack.herokuapp.com/api/jouexe/",
      exercise
    )
    .then(response => {
      console.log("post exercise response", response.data.id);
      localStorage.setItem("jouExeId", response.data.id);
      dispatch({ type: POST_EXERCISE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("post exercise error", error);

      dispatch({ type: POST_EXERCISE_FAILURE, payload: error });
    });
};

export const updateWorkoutData = workout => dispatch => {
  dispatch({ type: UPDATE_WORKOUT_START });
  axiosWithAuth()
    .put(
      `https://backend-buildweek-wlj-mack.herokuapp.com/api/jouexe/${localStorage.getItem(
        "jouExeId"
      )}`,
      workout
    )
    .then(response => {
      dispatch({ type: UPDATE_WORKOUT_SUCCESS, payload: workout });
      localStorage.removeItem("exerciseId");
      localStorage.removeItem("journalId");
      localStorage.removeItem("jouExeId");
      console.log("workout updated", response);
    })
    .catch(error => {
      dispatch({ type: UPDATE_WORKOUT_FAILURE, payload: error.response });
    });
};

export const deleteWorkout = workoutId => () => {
  // dispatch({ type: UPDATE_WORKOUT_START });
  axiosWithAuth()
    .delete(
      `https://backend-buildweek-wlj-mack.herokuapp.com/api/jouexe/${workoutId}`
    )
    .then(response => {
      // dispatch({ type: UPDATE_WORKOUT_SUCCESS, payload: workout });
      localStorage.removeItem("exerciseId");
      console.log("workout deleted", response);
    })
    .catch(error => {
      // dispatch({ type: UPDATE_WORKOUT_FAILURE, payload: error.response });
      console.log(error)
    });
};