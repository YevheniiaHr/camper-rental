import { NavList, StyledLink } from './Header.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorite">Favorite</StyledLink>
      </NavList>
    </nav>
  );
};
