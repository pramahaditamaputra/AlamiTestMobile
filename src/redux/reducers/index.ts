import {globalReducer} from './global';
import {combineReducers} from 'redux';
import {productReducer} from './product';

const reducer = combineReducers({productReducer, globalReducer});

export default reducer;
