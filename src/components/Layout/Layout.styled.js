import styled from '@emotion/styled';
export const Container = styled.div`
  //   padding-left: 40px;
  //   padding-right: 40px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  max-width: 375px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    // padding-left: 32px;
    // padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
//     padding-left: 85px;
//     padding-right: 85px;
//   }
`;
