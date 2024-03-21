export const selectCards = state => state.cards.campers;

export const selectIsLoading = state => state.cards.isLoading;

export const selectEquipmentFilter = state => state.campers.filters.equipment;

export const selectVehicleTypeFilter = state =>
  state.campers.filters.vehicleType;

export const selectError = state => state.cards.error;
