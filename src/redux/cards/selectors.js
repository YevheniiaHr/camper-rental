import { createSelector } from 'reselect';
export const selectError = state => state.campers.error;
export const selectIsLoading = state => state.campers.isLoading;
export const selectCampers = state => state.campers.campers;
export const selectFilters = state => state.campers.filters;
export const selectFavoriteCampers = state => state.campers.favorite;

export const selectFilteredLocation = createSelector(
  [selectFilters],
  filters => filters.location
);

export const selectEquipmentFilter = createSelector(
  [selectFilters],
  filters => filters.equipment
);

export const selectVehicleTypeFilter = createSelector(
  [selectFilters],
  filters => filters.vehicleType
);

// export const selectFilteredCampers = createSelector(
//   [
//     selectCampers,
//     selectFilteredLocation,
//     selectEquipmentFilter,
//     selectVehicleTypeFilter,
//   ],
//   (campers, location, equipment, vehicleType) => {
//     return campers.filter(camper => {
//       const locationMatch =
//         !location ||
//         camper.location.toLowerCase().includes(location.toLowerCase());

//       const equipmentMatch =
//         !equipment ||
//         (typeof equipment === 'string' &&
//           camper.details[equipment.toLowerCase()]);

//       const vehicleTypeMatch =
//         !vehicleType ||
//         (Array.isArray(vehicleType) &&
//           vehicleType.includes(camper.form.toLowerCase()));

//       return locationMatch && equipmentMatch && vehicleTypeMatch;
//     });
//   }
// );
