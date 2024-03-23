import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './cards/campersSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    // filters: filtersReducer,
  },
});
