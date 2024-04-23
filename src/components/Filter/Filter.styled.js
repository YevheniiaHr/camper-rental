import styled from '@emotion/styled';
import { Field } from 'formik';
// import sprite from '../sprite.svg';

export const SideBar = styled.aside`
  margin-top: 64px;
`;
export const LocatioWrap = styled.div``;
export const Label = styled.label`
  // display: flex;
  // align-items: center;
`;
export const HaedingFilt = styled.h3`
  margin-top: 45px;

  font-weight: 500;
  font-size: 16px;
  color: #475467;
`;
export const FilterName = styled.h2`
  font-weight: 600;
  font-size: 20px;
  color: #101828;
  margin-bottom: 20px;
  margin-top: 14px;
`;
export const Input = styled.input``;
export const VehicleEquipment = styled.div``;
export const VehicleType = styled.div``;
export const LocationInput = styled(Field)`
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  padding: 18px 218px 18px 34px;
  width: 360px;
  height: 56px;
  background: #f7f7f7;
`;
export const Icon = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
`;
export const InputWrapper = styled.div`
  position: relative;
  // display: flex;
  // align-items: center;
  margin-top: 8px;
`;
export const VehicleInput = styled(Field)`
  // appearance: none;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 18px;
  width: 115px;
  height: 95px;
`;
export const IconVehicle = styled.svg`
  position: absolute;
  left: 36%;
  top: 34%;
  transform: translateY(-50%);
`;
export const IconText = styled.span`
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 38%;
  top: 50%;
`;
export const VehicleEquipmentWrapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border-top: 1px solid rgba(16, 24, 40, 0.1);
`;
