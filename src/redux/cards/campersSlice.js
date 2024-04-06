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
    addFavorite(state, { payload }) {
      state.favorite.push(payload);
    },
    deleteFavorite(state, { payload }) {
      const index = state.favorite.findIndex(item => item._id === payload);
      state.favorite.splice(index, 1);
    },
    updateEquipmentFilter(state, action) {
      state.filters = {
        ...state.filters,
        equipment: action.payload,
      };
      // state.filters.equipment = action.payload;
    },
    updateVehicleTypeFilter(state, action) {
      state.filters = {
        ...state.filters,
        vehicleType: action.payload,
      };
      // state.filters.vehicleType = action.payload;
    },
    setFilter(state, action) {
      state.filters = {
        ...state.filters,
        location: action.payload,
      };
      // state.filters.location = action.payload;
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
export const {
  setFilter,
  updateEquipmentFilter,
  updateVehicleTypeFilter,
  addFavorite,
  deleteFavorite,
} = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
