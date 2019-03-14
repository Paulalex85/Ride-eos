import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import OrderReducer from './OrderReducer';
import OfferReducer from './OfferReducer';
import ScatterReducer from './ScatterReducer';
import StackpowerReducer from './StackpowerReducer'

export default combineReducers({
  user: UserReducer,
  orders: OrderReducer,
  offers: OfferReducer,
  scatter: ScatterReducer,
  stackpower: StackpowerReducer
})