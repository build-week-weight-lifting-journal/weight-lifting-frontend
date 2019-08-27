import { axiosWithAuth } from "../utils/axiosWithAuth";

export const IS_SIGNING_UP = "IS_SIGNING_UP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

/*user should be of object type 
{
    'password': '',
    'firstName': '',
    'lastName': '',
    'email': ''
}
*/

export const signUp = (dispatch, user) => {
  dispatch({ type: IS_SIGNING_UP });
  axiosWithAuth()
    .post("", user)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: SIGNUP_ERROR, payload: err.response.data.message });
    });
};