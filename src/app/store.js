import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cascataReducer from '../cascata/cascataSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cascata: cascataReducer
  },
});
