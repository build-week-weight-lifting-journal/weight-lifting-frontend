import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const postLoginData = (credentials, history) => dispatch => {
  // loading data
  dispatch({ type: LOGIN_START });

  axios
    .post(
      "https://backend-buildweek-wlj-mack.herokuapp.com/api/auth/login",
      credentials
    )

    .then(response => {
      // successful
      // console.log("post login api response object", response);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.id);

      dispatch({ type: LOGIN_SUCCESS, payload: response.data.id });

      history.push("/dashboard");
    })

    .catch(error => {
      // unsuccessful
      console.log("The api is currently down.", error.response);

      dispatch({ type: LOGIN_FAILURE, payload: error.response });
    });
};
