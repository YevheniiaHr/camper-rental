import styled from '@emotion/styled';
import { Field } from 'formik';
// import sprite from '../sprite.svg';

export const SideBar = styled.aside`
  margin-top: 64px;
`;
export const LocatioWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 8px;
`;
export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 18px;
  width: 115px;
  height: 95px;
  cursor: pointer;
  ${({ isChecked }) =>
    isChecked &&
    `
    border-color: #e44848;
  `}
`;
export const LocationLabel = styled.label`
  &:hover {
    border-color: #e44848;
  }
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
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
`;

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
export const InputWrapper = styled.div``;
export const VehicleInput = styled(Field)`
  display: none;
`;

export const IconVehicle = styled.svg``;
export const IconText = styled.span`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;
export const VehicleEquipmentWrapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
