import { createSlice } from '@reduxjs/toolkit';

import { fetchCards } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  campers: [],
  isLoading: false,
  error: null,
};
const campersSlice = createSlice({
  name: 'campersSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCards.pending, handlePending)
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload;
      })
      .addCase(fetchCards.rejected, handleRejected);
  },
});
export const campersReducer = campersSlice.reducer;
