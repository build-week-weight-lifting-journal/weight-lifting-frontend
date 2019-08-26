// const initialState = {
//     workouts: [], 
//     workoutsIsLoading: false, 
//     workoutsError: '', 
// }

// export const workoutsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_WORKOUTS_START: {
//             return {
//                 ...state, 
//                 workoutsIsLoading: true, 
//                 workoutsError: ''
//             }
//         }
//         case FETCH_WORKOUTS_SUCCESS: {
//             return {
//                 ...state,
//                 workouts: [...state.workouts, action.payload],
//                 workoutsIsLoading: false, 
//                 workoutsError: ''
//             }
//         }
//         case FETCH_WORKOUTS_FAILURE: {
//             return {
//                 ...state, 
//                 workoutsIsLoading: false, 
//                 workoutsError: action.payload
//             }
//         }
//     }
// }