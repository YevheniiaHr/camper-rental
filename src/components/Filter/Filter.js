import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, Label, SideBar } from './Filter.styled';
import sprite from '../sprite.svg';
import {
  setLocation,
  setVehicle,
  setEquipment,
} from '../../redux/cards/campersSlice';
import {
  // selectEquipmentFilter,
  selectFilteredLocation,
  // selectVehicleTypeFilter,
} from '../../redux/cards/selectors';
import { Form, Formik } from 'formik';
import { CustomButton } from 'components/Button/Button';

export const Filter = () => {
  const dispatch = useDispatch();
  const locationFilter = useSelector(selectFilteredLocation);

  // const equipmentFilter = useSelector(selectEquipmentFilter);
  // const vehicleTypeFilter = useSelector(selectVehicleTypeFilter);

  // const handleEquipmentFilter = filter => {
  //   const newFilter = [...equipmentFilter];
  //   const index = newFilter.indexOf(filter);
  //   if (index !== -1) {
  //     newFilter.splice(index, 1);
  //   } else {
  //     newFilter.push(filter);
  //   }
  //   dispatch(setEquipment(newFilter));
  // };

  // const handleVehicleTypeFilter = filter => {
  //   const newFilter = [...vehicleTypeFilter];
  //   const index = newFilter.indexOf(filter);
  //   if (index !== -1) {
  //     newFilter.splice(index, 1);
  //   } else {
  //     newFilter.push(filter);
  //   }
  //   dispatch(setVehicle(newFilter));
  // };
  return (
    <SideBar>
      <Formik
        initialValues={{
          location: '',
          ac: 0,
          transmition: 'automatic',
          kitchen: 0,
          tv: 0,
          shower: 0,
          vehicleType: '',
        }}
        onSubmit={values => {
          console.log(values);
          const { location, vehicleType, ...equipment } = values;
          dispatch(setLocation(location));
          dispatch(setVehicle(vehicleType));
          dispatch(setEquipment(equipment));
        }}
      >
        <Form>
          <Label>
            <FilterInput name="location" type="text" value={locationFilter} />
          </Label>
          <h2>Equipment</h2>
          <label>
            <FilterInput type="checkbox" value="ac" name="ac" />
            <svg width="32px" height="32px">
              <use xlinkHref={sprite + '#ac-1'} />
            </svg>
          </label>
          AC
          <label>
            <FilterInput type="checkbox" value="automatic" name="transmition" />
            <svg width="32px" height="32px">
              <use xlinkHref={sprite + '#automatic-1'} />
            </svg>
            Automatic
          </label>
          <label>
            <FilterInput type="checkbox" value="kitchen" name="kitchen" />
            <svg width="33px" height="33px">
              <use xlinkHref={sprite + '#icon-kitchen'} />
            </svg>
            Kitchen
          </label>
          <label>
            <FilterInput type="checkbox" value="tv" name="tv" />
            <svg width="32px" height="32px">
              <use xlinkHref={sprite + '#icon-Tv-1'} />
            </svg>
            TV
          </label>
          <label>
            <FilterInput type="checkbox" value="shower" name="shower" />
            <svg width="33px" height="33px">
              <use xlinkHref={sprite + '#icon-shower'} />
            </svg>
            Shower/WC
          </label>
          <h2>Vehicle Type</h2>
          <label>
            <FilterInput
              type="radio"
              name="vehicleType"
              value="fullyIntegrated"
            />
            <svg width="40px" height="28px">
              <use xlinkHref={sprite + '#icon-van'} />
            </svg>
            Fully Integrated
          </label>
          <label>
            <FilterInput type="radio" name="vehicleType" value="camperVan" />
            <svg width="40px" height="28px">
              <use xlinkHref={sprite + '#icon-fully-integrated'} />
            </svg>
            Van
          </label>
          <label>
            <FilterInput type="radio" name="vehicleType" value="alcov" />
            <svg width="40px" height="28px">
              <use xlinkHref={sprite + '#icon-alcov'} />
            </svg>
            Alcov
          </label>
          <CustomButton type="submit" hoverBackgroundColor="#d84343">
            Search
          </CustomButton>
        </Form>
      </Formik>
    </SideBar>
  );
};
