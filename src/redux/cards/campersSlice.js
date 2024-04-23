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
  favorite: [],
  filters: {
    location: '',
    equipment: {},
    vehicleType: '',
  },
  isLoading: false,
  error: null,
};
const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      state.favorite.push(payload);
    },
    deleteFavorite(state, { payload }) {
      const index = state.favorite.findIndex(item => item._id === payload);
      state.favorite.splice(index, 1);
    },
    setVehicle(state, action) {
      state.filters.vehicleType = action.payload;
    },
    setEquipment(state, action) {
      state.filters.equipment = action.payload;
    },

    setLocation(state, action) {
      state.filters.location = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCards.pending, handlePending)
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = [...state.campers, ...action.payload];
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
export const {
  setLocation,
  setVehicle,
  setEquipment,
  addFavorite,
  deleteFavorite,
} = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
