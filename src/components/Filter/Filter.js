import { useDispatch } from 'react-redux';
import {
  FilterName,
  FlexContainer,
  HaedingFilt,
  Icon,
  IconText,
  IconVehicle,
  InputWrapper,
  Label,
  LocatioWrap,
  LocationInput,
  LocationLabel,
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
import {} from '../../redux/cards/selectors';
import { Form, Formik } from 'formik';
import { CustomButton } from 'components/Button/Button';
import { useState } from 'react';

export const Filter = () => {
  const dispatch = useDispatch();

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
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
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
          <LocatioWrap>
            <LocationLabel>
              <Icon width="16px" height="16px">
                <use xlinkHref={sprite + '#icon-map-pin'} />
              </Icon>
              <LocationInput name="location" type="text" placeholder="City" />
            </LocationLabel>
          </LocatioWrap>
          <HaedingFilt>Filters</HaedingFilt>
          <FilterName>Vehicle equipment</FilterName>
          <VehicleEquipmentWrapp>
            <InputWrapper>
              <Label
                htmlFor="ac"
                isChecked={isChecked}
                onClick={toggleCheckbox}
              >
                <VehicleInput
                  type="checkbox"
                  value="airConditioner"
                  name="ac"
                  id="ac"
                />
                <FlexContainer>
                  <IconVehicle width="32px" height="32px">
                    <use xlinkHref={sprite + '#ac-1'} />
                  </IconVehicle>
                  <IconText>AC</IconText>
                </FlexContainer>
              </Label>
            </InputWrapper>
            <InputWrapper>
              <Label
                htmlFor="transmission"
                isChecked={isChecked}
                onClick={toggleCheckbox}
              >
                <VehicleInput
                  type="checkbox"
                  value="transmissionAutomatic"
                  name="transmission"
                  id="transmission"
                />
                <FlexContainer>
                  <IconVehicle width="32px" height="32px">
                    <use xlinkHref={sprite + '#automatic-1'} />
                  </IconVehicle>
                  <IconText> Automatic</IconText>
                </FlexContainer>
              </Label>
            </InputWrapper>
            <InputWrapper>
              <Label
                htmlFor="kitchen"
                isChecked={isChecked}
                onClick={toggleCheckbox}
              >
                <VehicleInput
                  type="checkbox"
                  value="kitchen"
                  name="kitchen"
                  id="kitchen"
                />
                <FlexContainer>
                  <IconVehicle width="33px" height="33px">
                    <use xlinkHref={sprite + '#icon-kitchen'} />
                  </IconVehicle>
                  <IconText> Kitchen</IconText>
                </FlexContainer>
              </Label>
            </InputWrapper>
            <InputWrapper>
              <Label isChecked={isChecked} onClick={toggleCheckbox}>
                <VehicleInput type="checkbox" value="TV" name="tv" />
                <FlexContainer>
                  <IconVehicle width="32px" height="32px">
                    <use xlinkHref={sprite + '#icon-Tv-1'} />
                  </IconVehicle>
                  <IconText>TV</IconText>
                </FlexContainer>
              </Label>
            </InputWrapper>
            <InputWrapper>
              <Label isChecked={isChecked} onClick={toggleCheckbox}>
                <VehicleInput
                  type="checkbox"
                  value="showerToilet"
                  name="shower"
                />
                <FlexContainer>
                  <IconVehicle width="33px" height="33px">
                    <use xlinkHref={sprite + '#icon-shower'} />
                  </IconVehicle>
                  <IconText> Shower/WC</IconText>
                </FlexContainer>
              </Label>
            </InputWrapper>
          </VehicleEquipmentWrapp>
          <FilterName>Vehicle Type</FilterName>
          <VehicleEquipmentWrapp>
            <InputWrapper>
              <Label>
                <VehicleInput
                  type="radio"
                  name="vehicleType"
                  value="panelTruck"
                />
                <FlexContainer>
                  <IconVehicle width="40px" height="28px">
                    <use xlinkHref={sprite + '#icon-fully-integrated'} />
                  </IconVehicle>
                  <IconText> Van</IconText>
                </FlexContainer>
              </Label>
            </InputWrapper>
            <InputWrapper>
              <Label>
                <VehicleInput
                  type="radio"
                  name="vehicleType"
                  value="fullyIntegrated"
                />
                <FlexContainer>
                  <IconVehicle width="40px" height="28px">
                    <use xlinkHref={sprite + '#icon-van'} />
                  </IconVehicle>
                  <IconText>
                    Fully <br /> Integrated
                  </IconText>
                </FlexContainer>
              </Label>
            </InputWrapper>

            <InputWrapper>
              <Label>
                <VehicleInput type="radio" name="vehicleType" value="alcove" />
                <FlexContainer>
                  <IconVehicle width="40px" height="28px">
                    <use xlinkHref={sprite + '#icon-alcov'} />
                  </IconVehicle>
                  <IconText>Alcov</IconText>
                </FlexContainer>
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
