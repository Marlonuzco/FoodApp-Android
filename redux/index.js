import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

import reducers from './reducer/index';

export const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

export const persistor = persistStore(store);

/* console.log('Initial state', store.getState());
store.subscribe(() => {
  console.log('stateChange', store.getState());
}); */
