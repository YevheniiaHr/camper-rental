import styled from '@emotion/styled';
export const MobileWrapp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #e44848;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //   padding: 20px 20px;
  z-index: 1000;
  // visibility: hidden;
  overflow: hidden;
`;
export const CloseBtn = styled.button`
  align-self: flex-end;

  border: none;
  background-color: transparent;
`;
