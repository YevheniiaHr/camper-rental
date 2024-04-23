import { HomeWrapper, SectionHero } from './Home.styled';
import { MainTitle } from './MainTitle/MainTitle';
import { Navigation } from './Navigation/Navigation';

export const Home = () => {
  return (
    <HomeWrapper>
      <SectionHero>
        <MainTitle />
        <Navigation />
      </SectionHero>
    </HomeWrapper>
  );
};
