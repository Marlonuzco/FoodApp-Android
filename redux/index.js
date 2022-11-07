import {configureStore} from '@reduxjs/toolkit';
import auth from './reducer/auth';

export const store = configureStore({
  reducer: {
    auth,
  },
});

console.log('Initial state', store.getState());
store.subscribe(() => {
  console.log('stateChange', store.getState());
});
