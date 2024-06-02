import styled from '@emotion/styled';
import hero from '../../components/img/camper.png';
import hero2x from '../../components/img/camper@2x.png';

export const SectionHero = styled.section`
  padding-top: 200px;
  margin: 0 auto;
  height: 100vh;
 



background-image: linear-gradient(
        rgba(46, 47, 66, 0.7),
        rgba(46, 47, 66, 0.7)
      ),
      url(${hero});
    background-size: cover;
    @media {(min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${hero2x});
      }
    
  
`;
export const HomeWrapper = styled.div`
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
}

 
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
