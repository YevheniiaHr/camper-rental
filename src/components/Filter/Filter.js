import { useDispatch, useSelector } from 'react-redux';
import { FilterBtn, Input, Label, LocatioWrap, SideBar } from './Filter.styled';
import sprite from '../sprite.svg';
import {
  updateEquipmentFilter,
  updateVehicleTypeFilter,
  setFilter,
} from '../../redux/cards/campersSlice';
import {
  selectEquipmentFilter,
  selectFilteredLocation,
  selectVehicleTypeFilter,
} from '../../redux/cards/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const locationFilter = useSelector(selectFilteredLocation);

  const handleOnChange = e => {
    e.preventDefault();
    dispatch(setFilter(e.target.value));
  };

  const equipmentFilter = useSelector(selectEquipmentFilter);
  const vehicleTypeFilter = useSelector(selectVehicleTypeFilter);

  const handleEquipmentFilter = filter => {
    const newFilter = [...equipmentFilter];
    const index = newFilter.indexOf(filter);
    if (index !== -1) {
      newFilter.splice(index, 1);
    } else {
      newFilter.push(filter);
    }
    dispatch(updateEquipmentFilter(newFilter));
  };

  const handleVehicleTypeFilter = filter => {
    const newFilter = [...vehicleTypeFilter];
    const index = newFilter.indexOf(filter);
    if (index !== -1) {
      newFilter.splice(index, 1);
    } else {
      newFilter.push(filter);
    }
    dispatch(updateVehicleTypeFilter(newFilter));
  };
  return (
    <SideBar>
      <LocatioWrap>
        {' '}
        <Label>
          <Input
            name="filter"
            type="text"
            value={locationFilter}
            onChange={handleOnChange}
          ></Input>
        </Label>
      </LocatioWrap>
      <h2>Equipment</h2>
      <FilterBtn
        // width="95px"
        // height="95px"
        onClick={() => handleEquipmentFilter('AC')}
      >
        <svg width="32px" height="32px">
          <use xlinkHref={sprite + '#ac-1'} />
        </svg>
        AC
      </FilterBtn>
      <FilterBtn
        // width="95px"
        // height="95px"
        onClick={() => handleEquipmentFilter('Automatic')}
      >
        <svg width="32px" height="32px">
          <use xlinkHref={sprite + '#automatic-1'} />
        </svg>
        Automatic
      </FilterBtn>
      <FilterBtn
        width="95px"
        height="95px"
        onClick={() => handleEquipmentFilter('Automatic')}
      >
        <svg width="33px" height="33px">
          <use xlinkHref={sprite + '#icon-kitchen'} />
        </svg>
        Kitchen
      </FilterBtn>
      <FilterBtn
        width="95px"
        height="95px"
        onClick={() => handleEquipmentFilter('Automatic')}
      >
        <svg width="32px" height="32px">
          <use xlinkHref={sprite + '#icon-Tv-1'} />
        </svg>
        TV
      </FilterBtn>
      <FilterBtn
        width="95px"
        height="95px"
        onClick={() => handleEquipmentFilter('Automatic')}
      >
        <svg width="33px" height="33px">
          <use xlinkHref={sprite + '#icon-shower'} />
        </svg>
        Shower/WC
      </FilterBtn>

      <h2>Vehicle Type</h2>
      <FilterBtn onClick={() => handleVehicleTypeFilter('fullyIntegrated')}>
        <svg width="40px" height="28px">
          <use xlinkHref={sprite + '#icon-van'} />
        </svg>
        Fully Integrated
      </FilterBtn>
      <FilterBtn onClick={() => handleVehicleTypeFilter('camperVan')}>
        <svg width="40px" height="28px">
          <use xlinkHref={sprite + '#icon-fully-integrated'} />
        </svg>
        Van
      </FilterBtn>
      <FilterBtn onClick={() => handleVehicleTypeFilter('camperVan')}>
        <svg width="40px" height="28px">
          <use xlinkHref={sprite + '#icon-alcov'} />
        </svg>
        Alcov
      </FilterBtn>
    </SideBar>
  );
};
