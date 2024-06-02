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
