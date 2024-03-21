import { createSlice } from '@reduxjs/toolkit';

import { fetchCards, filterCampers } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  campers: [],
  filters: {
    equipment: [],
    vehicleType: [],
  },
  isLoading: false,
  error: null,
};
const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    updateEquipmentFilter(state, action) {
      state.filters.equipment = action.payload;
    },
    updateVehicleTypeFilter(state, action) {
      state.filters.vehicleType = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCards.pending, handlePending)
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload;
      })
      .addCase(fetchCards.rejected, handleRejected)
      .addCase(filterCampers.pending, handlePending)
      .addCase(filterCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload;
      })
      .addCase(filterCampers.rejected, handleRejected);
  },
});
export const campersReducer = campersSlice.reducer;
