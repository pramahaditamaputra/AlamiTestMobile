import {ActionTypes} from '../constants/ActionTypes';

const productInitialState: object = {
  data: [],
};

export const productReducer = (
  state: object = productInitialState,
  action: any,
) => {
  if (action.type === ActionTypes.GET_PRODUCT_BY_SEARCH) {
    console.log(action.payload);
    return {
      ...state,
      data: action.payload,
    };
  }

  if (action.type === ActionTypes.GET_PRODUCT_BY_SELLER_ID) {
    return {
      ...state,
      data: action.payload,
    };
  }

  if (action.type === ActionTypes.GET_ALL_PRODUCTS) {
    return {
      ...state,
      data: action.payload,
    };
  }

  if (action.type === ActionTypes.GET_PRODUCTS_FAILED) {
    return {
      ...state,
      data: action.payload,
    };
  }


  
  return state;
};
