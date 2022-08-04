import productService from '../../services/productService';
import {showMessage} from '../../utils';
import {ActionTypes} from '../constants/ActionTypes';

export const getProductBySearch = (keyword: string) => async dispatch => {
  try {
    dispatch({type: ActionTypes.SET_LOADING, payload: true});
    const res = await productService.getProductBySearch(keyword);
    await dispatch({
      type: ActionTypes.GET_PRODUCT_BY_SEARCH,
      payload: res.data,
    });
    dispatch({type: ActionTypes.SET_LOADING, payload: false});
  } catch (error: any) {
    dispatch({type: ActionTypes.SET_LOADING, payload: false});
    console.log(error.message);
  }
};

export const getAllProducts = () => async dispatch => {
  try {
    dispatch({type: ActionTypes.SET_LOADING, payload: true});
    const res = await productService.getProductBySearch('');
    if (res?.code >= 400 && res?.code <= 405) {
      throw new Error(res.message);
    }
    await dispatch({
      type: ActionTypes.GET_ALL_PRODUCTS,
      payload: res.data,
    });
    dispatch({type: ActionTypes.SET_LOADING, payload: false});
  } catch (error: any) {
    dispatch({type: ActionTypes.SET_LOADING, payload: false});
    dispatch({type: ActionTypes.GET_PRODUCTS_FAILED, payload: []});
    console.log(error.message);
  }
};

export const getProductBySellerId = (sellerId: number) => async dispatch => {
  try {
    dispatch({type: ActionTypes.SET_LOADING, payload: true});
    const res = await productService.getProductBySellerId(sellerId);
    if (res?.code >= 400 && res?.code <= 405) {
      throw new Error(res.message);
    }
    await dispatch({
      type: ActionTypes.GET_PRODUCT_BY_SELLER_ID,
      payload: res.data,
    });
    dispatch({type: ActionTypes.SET_LOADING, payload: false});
  } catch (error: any) {
    dispatch({type: ActionTypes.SET_LOADING, payload: false});
    dispatch({type: ActionTypes.GET_PRODUCTS_FAILED, payload: []});
    console.log(error.message);
  }
};

export const addProduct = (product: object) => async dispatch => {
  try {
    dispatch({type: ActionTypes.SET_LOADING, payload: true});
    const res = await productService.addProduct(product);
    if (res?.code >= 400 && res?.code <= 405) {
      throw new Error(res.message);
    }
    dispatch({type: ActionTypes.SET_LOADING, payload: false});
    showMessage('Success: New Product has been added', 'success');
  } catch (error: any) {
    dispatch({type: ActionTypes.SET_LOADING, payload: false});
    showMessage(`Error: ${error.message}`, 'error');
    console.log(error.message);
  }
};
