// import { createSlice } from '@reduxjs/toolkit';
// import { filterCampers } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const initialState = {
//   campers: [],
//   filters: {
//     equipment: [],
//     vehicleType: [],
//   },
//   isLoading: false,
//   error: null,
// };

// const filtersSlice = createSlice({
//   name: 'campers',
//   initialState,
//   reducers: {
//     updateEquipmentFilter(state, action) {
//       state.filters.equipment = action.payload;
//     },
//     updateVehicleTypeFilter(state, action) {
//       state.filters.vehicleType = action.payload;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(filterCampers.pending, handlePending)
//       .addCase(filterCampers.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.campers = action.payload;
//       })
//       .addCase(filterCampers.rejected, handleRejected);
//   },
// });
// export const { updateEquipmentFilter, updateVehicleTypeFilter } =
//   filtersSlice.actions;

// export default filtersSlice.reducer;
