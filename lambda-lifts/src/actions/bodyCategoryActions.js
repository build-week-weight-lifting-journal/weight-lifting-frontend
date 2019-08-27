// axios with authorization 
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

// fetch for category array data  
export const FETCH_BODY_CATEGORY_START = 'FETCH_CATEGORY_DATA_START'; 
export const FETCH_BODY_CATEGORY_SUCCESS = 'FETCH_CATEGORY_DATA_SUCCESS';
export const FETCH_BODY_CATEGORY_FAILURE = 'FETCH_CATEGORY_DATA_FAILURE';

export const getBodyCategoryData = () => dispatch => {

    // loading data 
    dispatch({ type: FETCH_BODY_CATEGORY_START });

    // add authorization to axios promise 
    axiosWithAuth()
        .get('')
        .then(response => {
            // successful 
            console.log("response data", response)
            
            // dispatch({ type: FETCH_BODY_CATEGORY_SUCCESS, payload: response.data });
        })
        .catch(error => {
            // unsuccessful 
            dispatch({ type: FETCH_BODY_CATEGORY_FAILURE, payload: error.response });
        });
};