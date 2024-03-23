import styled from '@emotion/styled';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const FormGroup = styled.label`
  display: flex;
  align-items: baseline;
  gap: 10px;
  width: 400px;
  align-self: center;
`;
export const Field = styled(FormikField)`
  padding: 4px;
  border-radius: 10px;
  //   padding: 18px 337px 18px 18px;
  width: 400px;
  height: 56px;
  border: none;
  background-color: #f7f7f7;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(16, 24, 40, 0.6);
`;
export const ErrorMessage = styled(FormikError)`
  font-size: 16px;
  color: red;
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;

  margin-top: 44px;
`;
export const FormTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  margin-top: 24px;
  margin-left: 24px;
`;
export const FormText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-left: 24px;
`;
