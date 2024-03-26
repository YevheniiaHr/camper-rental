import styled from '@emotion/styled';
import hero from '../../components/img/camper.png';
import hero2x from '../../components/img/camper@2x.png';
import heroMobile1x from '../../components/img/camper-mobile.png';
import heroMobile2x from '../../components/img/camper-mobile@2x.png';
import heroTablet1x from '../../components/img/camper-tablet.png';
import heroTablet2x from '../../components/img/camper-tablet@2x.png';
export const SectionHero = styled.section`
  // padding-bottom: 40px;
  // padding-right: 20px;
  // padding-left: 20px;
  padding-top: 200px;
  margin: 0 auto;
  outline: 2px solid red;
      height: auto;

  
  background-image: linear-gradient(
  rgba(46, 47, 66, 0.7),
  rgba(46, 47, 66, 0.7)
      ),
  url(${heroMobile1x});
    background-size: cover;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${heroMobile2x});

  @media screen and (min-width: 768px) {
    // padding-bottom: 48px;
    // padding-right: 32px;
    // padding-top: 189px;
height: 100vh;
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.7),
        rgba(46, 47, 66, 0.7)
      ),
      url(${heroTablet1x});
    background-size: cover;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${heroTablet2x});
    }
  }

  @media screen and (min-width: 1440px) {
    // padding-right: 0;
    // padding-bottom: 171px;
    // padding-top: 200px;

    // display: flex;
    // gap: 76px;

    background-image: linear-gradient(
        rgba(46, 47, 66, 0.7),
        rgba(46, 47, 66, 0.7)
      ),
      url(${hero});
    background-size: cover;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${hero2x});
    }
  }
`;
export const HomeWrapper = styled.div`
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
}
  // width: 100%;
 
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
