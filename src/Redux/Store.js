// store.js
// store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Reducers'; // Import your data slice

const rootReducer = {
  data: dataReducer, 
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
