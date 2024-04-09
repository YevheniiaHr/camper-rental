import styled from '@emotion/styled';

export const Button = styled.button`
  border-radius: 200px;

  background-color: ${({ backgroundColor }) => backgroundColor || '#E44848'};
  color: ${({ textColor }) => textColor || '#F2F4F7'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  width: ${({ width }) => width || '166px'};
  height: ${({ height }) => height || '56px'};
  border: ${({ border }) => border || '1px solid rgba(71, 84, 103, 0.2)'};

  transition: background-color 0.3s, border-color 0.3s;
  &:hover {
    background-color: ${({ hoverBackgroundColor }) =>
      hoverBackgroundColor || '#d84343'};
    border-color: ${({ hoverBorderColor }) => hoverBorderColor || '#E44848'};
  }
`;
