import styled from '@emotion/styled';
import hero from '../../components/img/camper.png';

export const SectionHero = styled.section`
  //   padding-bottom: 40px;
  //   padding-right: 20px;
  //   padding-top: 127px;
  outline: 2px solid red;
  // display: contents;
  height: 100vh;

  @media screen and (min-width: 768px) {
    padding-bottom: 48px;
    padding-right: 32px;
    padding-top: 189px;
  }

  @media screen and (min-width: 1440px) {
    padding-right: 0;
    padding-bottom: 171px;
    padding-top: 200px;

    display: flex;
    gap: 76px;
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.7),
        rgba(46, 47, 66, 0.7)
      ),
      url(${hero});
    background-size: cover;
  }
`;
export const HomeWrapper = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
