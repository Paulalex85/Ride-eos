import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import OrderReducer from './OrderReducer'
import PlaceReducer from './PlaceReducer'

export default combineReducers({
  user: UserReducer,
  orders: OrderReducer,
  places: PlaceReducer
})