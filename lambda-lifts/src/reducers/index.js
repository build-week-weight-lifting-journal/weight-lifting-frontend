// redux
import { combineReducers } from "redux";

// reducers
import { workoutsReducer } from "./workoutsReducer";
import { signUpReducer } from "./signUpReducer";
import { bodyCategoryReducer } from "./bodyCategoryReducer";

// combineReducers creates one state object using multiple reducers
export const reducer = combineReducers({
    workouts: workoutsReducer,
    signup: signUpReducer,
    categories: bodyCategoryReducer
});