import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import ScatterReducer from './ScatterReducer';

export default combineReducers({
  orders: OrderReducer,
  scatter: ScatterReducer,
})