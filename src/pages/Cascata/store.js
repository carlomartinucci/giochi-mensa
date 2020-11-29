import { configureStore } from '@reduxjs/toolkit';
import cascataReducer from './cascataSlice';

export default configureStore({
  reducer: {
    cascata: cascataReducer
  },
});
