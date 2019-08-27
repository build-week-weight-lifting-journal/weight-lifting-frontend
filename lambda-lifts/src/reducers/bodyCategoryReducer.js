import {
  FETCH_BODY_CATEGORY_START,
  FETCH_BODY_CATEGORY_SUCCESS,
  FETCH_BODY_CATEGORY_FAILURE,
  CLEAR_BODY_CATEGORY
} from "../actions/index.js";

const initialState = {
  bodyCategory: [],
  bodyCategoryIsLoading: false,
  bodyCategoryError: "",
  selectedCategories: []
};

export const bodyCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BODY_CATEGORY_START: {
      return {
        ...state,
        bodyCategoryIsLoading: true,
        bodyCategoryError: ""
      };
    }
    case FETCH_BODY_CATEGORY_SUCCESS: {
      return {
        ...state,
        bodyCategory: [...state.bodyCategory, action.payload],
        bodyCategoryIsLoading: false,
        bodyCategoryError: ""
      };
    }
    case FETCH_BODY_CATEGORY_FAILURE: {
      return {
        ...state,
        bodyCategoryIsLoading: false,
        bodyCategoryError: action.payload
      };
    }
    case CLEAR_BODY_CATEGORY: {
      return {
        ...state,
        selectedCategories: []
      };
    }
    default:
      return state;
  }
};
