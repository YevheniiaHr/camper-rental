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

const CustomCheckbox = ({ field, form: { setFieldValue }, icon }) => (
  <Label isChecked={field.value}>
    <VehicleInput
      {...field}
      type="checkbox"
      onChange={() => {
        setFieldValue(field.name, !field.value);
      }}
    />
    {icon}
  </Label>
);

const CustomRadioButton = ({
  field,
  form: { setFieldValue },
  icon,
  radioValue,
}) => {
  console.log(field, radioValue);
  return (
    <Label isChecked={field.value === radioValue}>
      <VehicleInput
        type="radio"
        {...field}
        value={radioValue}
        name="vehicleType"
        checked={field.value === radioValue}
        onChange={() => {
          setFieldValue(field.name, radioValue);
        }}
      />
      {icon}
    </Label>
  );
};

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <SideBar>
      Location
      <Formik
        initialValues={{
          location: '',
          ac: 0,
          transmission: '',
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
              <VehicleInput
                component={CustomCheckbox}
                name="ac"
                icon={
                  <FlexContainer>
                    <IconVehicle width="32px" height="32px">
                      <use xlinkHref={sprite + '#ac-1'} />
                    </IconVehicle>
                    <IconText>AC</IconText>
                  </FlexContainer>
                }
              />
            </InputWrapper>
            <InputWrapper>
              <VehicleInput
                component={CustomCheckbox}
                name="transmission"
                icon={
                  <FlexContainer>
                    <IconVehicle width="32px" height="32px">
                      <use xlinkHref={sprite + '#automatic-1'} />
                    </IconVehicle>
                    <IconText> Automatic</IconText>
                  </FlexContainer>
                }
              />
            </InputWrapper>
            <InputWrapper>
              <VehicleInput
                component={CustomCheckbox}
                name="kitchen"
                icon={
                  <FlexContainer>
                    <IconVehicle width="33px" height="33px">
                      <use xlinkHref={sprite + '#icon-kitchen'} />
                    </IconVehicle>
                    <IconText> Kitchen</IconText>
                  </FlexContainer>
                }
              />
            </InputWrapper>
            <InputWrapper>
              <VehicleInput
                component={CustomCheckbox}
                name="tv"
                icon={
                  <FlexContainer>
                    <IconVehicle width="32px" height="32px">
                      <use xlinkHref={sprite + '#icon-Tv-1'} />
                    </IconVehicle>
                    <IconText>TV</IconText>
                  </FlexContainer>
                }
              />
            </InputWrapper>
            <InputWrapper>
              <VehicleInput
                component={CustomCheckbox}
                name="shower"
                icon={
                  <FlexContainer>
                    <IconVehicle width="33px" height="33px">
                      <use xlinkHref={sprite + '#icon-shower'} />
                    </IconVehicle>
                    <IconText> Shower/WC</IconText>
                  </FlexContainer>
                }
              />
            </InputWrapper>
          </VehicleEquipmentWrapp>
          <FilterName>Vehicle Type</FilterName>
          <VehicleEquipmentWrapp>
            <InputWrapper>
              <VehicleInput
                component={CustomRadioButton}
                name="vehicleType"
                radioValue="panelTruck"
                icon={
                  <FlexContainer>
                    <IconVehicle width="40px" height="28px">
                      <use xlinkHref={sprite + '#icon-fully-integrated'} />
                    </IconVehicle>
                    <IconText> Van</IconText>
                  </FlexContainer>
                }
              />
            </InputWrapper>
            <InputWrapper>
              <VehicleInput
                component={CustomRadioButton}
                name="vehicleType"
                radioValue="fullyIntegrated"
                icon={
                  <FlexContainer>
                    <IconVehicle width="40px" height="28px">
                      <use xlinkHref={sprite + '#icon-van'} />
                    </IconVehicle>
                    <IconText>
                      Fully <br /> Integrated
                    </IconText>
                  </FlexContainer>
                }
              />
            </InputWrapper>

            <InputWrapper>
              <VehicleInput
                component={CustomRadioButton}
                name="vehicleType"
                radioValue="alcove"
                icon={
                  <FlexContainer>
                    <IconVehicle width="40px" height="28px">
                      <use xlinkHref={sprite + '#icon-alcov'} />
                    </IconVehicle>
                    <IconText>Alcov</IconText>
                  </FlexContainer>
                }
              />
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
