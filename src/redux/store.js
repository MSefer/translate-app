import { configureStore } from '@reduxjs/toolkit';
import controlsReducer from './controlsSlice';

export default configureStore({
  reducer: {
    controls: controlsReducer,
  },
})