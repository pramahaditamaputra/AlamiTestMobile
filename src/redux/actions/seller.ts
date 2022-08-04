import sellerService from '../../services/sellerService';
import {showMessage} from '../../utils';
import {ActionTypes} from '../constants/ActionTypes';

export const addSeller = (seller: object) => async dispatch => {
  try {
    dispatch({type: ActionTypes.SET_LOADING, payload: true});
    const res = await sellerService.addSeller(seller);
    if (res?.code >= 400 && res?.code <= 405) {
      throw new Error(res.message);
    }
    dispatch({type: ActionTypes.SET_LOADING, payload: false});
    showMessage('New Seller has been added', 'success');
  } catch (error: any) {
    dispatch({type: ActionTypes.SET_LOADING, payload: false});
    showMessage(error.message, 'error');
    console.log(error.message);
  }
};
