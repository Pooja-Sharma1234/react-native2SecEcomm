import {applyMiddleware, combineReducers, createStore} from 'redux';
import {AuthReducer} from './AuthReducer';
import {thunk} from 'redux-thunk';

import DataReducer from './DataReducer';
import {CartReducer} from './CartReducer';
import {WishlistReducer} from './WishListReducer';

const reducers = combineReducers({
  auth: AuthReducer,
  data: DataReducer,
  cart: CartReducer,
  wish: WishlistReducer,
});
const middlewares = [thunk];
export default createStore(reducers, applyMiddleware(...middlewares));
