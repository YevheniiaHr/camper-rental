import { Container } from 'components/Layout/Layout.styled';
import { HomeWrapper, SectionHero } from './Home.styled';
import { MainTitle } from './MainTitle/MainTitle';
import { Navigation } from './Navigation/Navigation';

export const Home = () => {
  return (
    <SectionHero>
      <Container>
        <HomeWrapper>
          <MainTitle />
          <Navigation />
        </HomeWrapper>
      </Container>
    </SectionHero>
  );
};
