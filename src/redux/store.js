import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './cards/campersSlice';
import filtersReducer from './cards/filtersSlice';
export const store = configureStore({
  reducer: {
    cards: campersReducer,
    filters: filtersReducer,
  },
});
