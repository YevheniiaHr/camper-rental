import { Container, HomeWrapper, SectionHero } from './Home.styled';
import { MainTitle } from './MainTitle/MainTitle';
import { Navigation } from './Navigation/Navigation';

export const Home = () => {
  return (
    <SectionHero>
      <HomeWrapper>
        <MainTitle />
        <Navigation />
      </HomeWrapper>
    </SectionHero>
  );
};
