// redux
import { combineReducers } from "redux";

// reducers
import { workoutsReducer } from "./workoutsReducer";
import { signUpReducer } from "./signUpReducer";
import { exerciseReducer } from "./exerciseReducer";
import { nameWorkoutReducer } from "./nameWorkoutReducer";
import { loginReducer } from "./loginReducer";

// combineReducers creates one state object using multiple reducers
export const reducer = combineReducers({
  workouts: workoutsReducer,
  signup: signUpReducer,
  exercise: exerciseReducer,
  nameWorkout: nameWorkoutReducer,
  login: loginReducer
});
