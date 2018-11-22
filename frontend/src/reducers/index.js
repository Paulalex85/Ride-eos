import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import OrderReducer from './OrderReducer';
import PlaceReducer from './PlaceReducer';
import AssignmentsReducer from './AssignmentsReducer';
import OfferReducer from './OfferReducer'

export default combineReducers({
  user: UserReducer,
  orders: OrderReducer,
  places: PlaceReducer,
  assignments: AssignmentsReducer,
  offers: OfferReducer,
})