import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  orders: OrderReducer,
  user: UserReducer,
})