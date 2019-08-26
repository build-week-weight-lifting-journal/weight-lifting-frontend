// redux 
import { combineReducers } from 'redux'

// reducers 
import { workoutsReducer } from './workoutsReducer'

// combineReducers creates one state object using multiple reducers 
export const reducer = combineReducers({
    workouts: workoutsReducer
})
