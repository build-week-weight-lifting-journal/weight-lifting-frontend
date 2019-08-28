import { axiosWithAuth } from "../utils/axiosWithAuth";

export const IS_MAKING_WORKOUT = "IS_MAKING_WORKOUT";
export const WORKOUT_MADE_SUCCESS = "WORKOUT_MADE_SUCCESS";
export const WORKOUT_MADE_FAILURE = "WORKOUT_MADE_FAILURE";

/*journal should be of object type 
{
    userId: int,
    name: "",
    date: "",
*/

export const makeWorkout = workout => {
  console.log("hit workout action", workout);
  return dispatch => {
    dispatch({ type: IS_MAKING_WORKOUT });
    axiosWithAuth()
      .post(
        "https://backend-buildweek-wlj-mack.herokuapp.com/api/journals/",
        workout
      )
      .then(res => {
        dispatch({ type: WORKOUT_MADE_SUCCESS });
        console.log(res);
      })
      .catch(err => {
        dispatch({ type: WORKOUT_MADE_FAILURE, payload: err.response });
      });
  };
};
