import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import auth from './auth';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default combineReducers({
  auth: persistReducer(persistConfig, auth),
});
