import { useDispatch, useSelector } from 'react-redux';
import {
  FilterName,
  HaedingFilt,
  Icon,
  IconText,
  IconVehicle,
  InputWrapper,
  Label,
  LocationInput,
  SideBar,
  VehicleEquipmentWrapp,
  VehicleInput,
} from './Filter.styled';
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
import { useState } from 'react';

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
      Location
      <Formik
        initialValues={{
          location: '',
          ac: 0,
          transmission: 'automatic',
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
          <InputWrapper>
            <Label htmlFor="location"> </Label>
            <Icon width="16px" height="16px">
              <use xlinkHref={sprite + '#icon-map-pin'} />
            </Icon>
            <LocationInput
              name="location"
              type="text"
              placeholder="Kyiv, Ukraine"
              id="location"
            />
          </InputWrapper>
          <HaedingFilt>Filters</HaedingFilt>
          <FilterName>Vehicle equipment</FilterName>
          <VehicleEquipmentWrapp>
            <InputWrapper>
              <Label htmlFor="ac">
                <IconText>AC</IconText>
                <VehicleInput
                  type="checkbox"
                  value="airConditioner"
                  name="ac"
                  id="ac"
                />
                <IconVehicle width="32px" height="32px">
                  <use xlinkHref={sprite + '#ac-1'} />
                </IconVehicle>
              </Label>
            </InputWrapper>
            <InputWrapper>
              <Label>
                <IconText> Automatic</IconText>
                <VehicleInput
                  type="checkbox"
                  value="transmissionAutomatic"
                  name="transmission"
                />
                <IconVehicle width="32px" height="32px">
                  <use xlinkHref={sprite + '#automatic-1'} />
                </IconVehicle>
              </Label>
            </InputWrapper>
            <InputWrapper>
              <IconText> Kitchen</IconText>
              <Label>
                <VehicleInput type="checkbox" value="kitchen" name="kitchen" />
                <IconVehicle width="33px" height="33px">
                  <use xlinkHref={sprite + '#icon-kitchen'} />
                </IconVehicle>
              </Label>
            </InputWrapper>
            <InputWrapper>
              <IconText>TV</IconText>
              <Label>
                <VehicleInput type="checkbox" value="TV" name="tv" />
                <IconVehicle width="32px" height="32px">
                  <use xlinkHref={sprite + '#icon-Tv-1'} />
                </IconVehicle>
              </Label>
            </InputWrapper>
            <InputWrapper>
              <IconText> Shower/WC</IconText>
              <Label>
                <VehicleInput
                  type="checkbox"
                  value="showerToilet"
                  name="shower"
                />
                <IconVehicle width="33px" height="33px">
                  <use xlinkHref={sprite + '#icon-shower'} />
                </IconVehicle>
              </Label>
            </InputWrapper>
          </VehicleEquipmentWrapp>
          <FilterName>Vehicle Type</FilterName>
          <VehicleEquipmentWrapp>
            <InputWrapper>
              <IconText> Van</IconText>
              <Label>
                <VehicleInput
                  type="radio"
                  name="vehicleType"
                  value="panelTruck"
                />
                <IconVehicle width="40px" height="28px">
                  <use xlinkHref={sprite + '#icon-fully-integrated'} />
                </IconVehicle>
              </Label>
            </InputWrapper>
            <InputWrapper>
              <IconText>Fully Integrated</IconText>
              <Label>
                <VehicleInput
                  type="radio"
                  name="vehicleType"
                  value="fullyIntegrated"
                />
                <IconVehicle width="40px" height="28px">
                  <use xlinkHref={sprite + '#icon-van'} />
                </IconVehicle>
              </Label>
            </InputWrapper>

            <InputWrapper>
              <IconText>Alcov</IconText>
              <Label>
                <VehicleInput type="radio" name="vehicleType" value="alcove" />
                <IconVehicle width="40px" height="28px">
                  <use xlinkHref={sprite + '#icon-alcov'} />
                </IconVehicle>
              </Label>
            </InputWrapper>
          </VehicleEquipmentWrapp>

          <CustomButton
            type="submit"
            hoverBackgroundColor="#d84343"
            marginTop="65px"
          >
            Search
          </CustomButton>
        </Form>
      </Formik>
    </SideBar>
  );
};
