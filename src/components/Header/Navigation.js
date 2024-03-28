import { NavList, StyledLink } from './Header.styled';

export const Navigation = ({ onClose }) => {
  const haandleClick = () => {
    onClose();
  };
  return (
    <nav>
      <NavList>
        <StyledLink to="/" end onClick={haandleClick}>
          Home
        </StyledLink>
        <StyledLink to="/catalog" onClick={haandleClick}>
          Catalog
        </StyledLink>
        <StyledLink to="/favorite" onClick={haandleClick}>
          Favorite
        </StyledLink>
      </NavList>
    </nav>
  );
};
