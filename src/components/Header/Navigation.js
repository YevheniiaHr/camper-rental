import { NavList, StyledLink } from './Header.styled';

export const Navigation = ({ onClose }) => {
  const haandleClick = () => {
    onClose();
  };
  return (
    <nav>
      <NavList>
        <li>
          <StyledLink to="/" end onClick={haandleClick}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/catalog" onClick={haandleClick}>
            Catalog
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/favorite" onClick={haandleClick}>
            Favorite
          </StyledLink>
        </li>
      </NavList>
    </nav>
  );
};
