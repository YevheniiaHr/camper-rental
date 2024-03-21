import styled from '@emotion/styled';

export const Button = styled.button`
  border-radius: 200px;
  //   padding: 16px 40px;
  //   width: 166px;
  //   height: 56px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#E44848'};
  color: ${({ textColor }) => textColor || '#F2F4F7'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  width: ${({ width }) => width || '166px'};
  height: ${({ height }) => height || '56px'};
  border: ${({ border }) => border || 'none'};
`;
