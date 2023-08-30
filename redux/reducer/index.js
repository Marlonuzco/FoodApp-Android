import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import auth from './auth';
import cart from './cart';
import favorites from './favorites';
import products from './products';
import backOrders from './backOrders';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default combineReducers({
  auth: persistReducer(persistConfig, auth),
  products,
  favorites,
  backOrders,
  cart,
});
