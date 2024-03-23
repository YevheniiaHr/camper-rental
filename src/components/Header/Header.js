import {
  NavList,
  StyledAppBar,
  StyledLink,
  StyledToolBar,
} from './Header.styled';

const { Typography, Container } = require('@mui/material');

export const Header = () => {
  return (
    <StyledAppBar>
      <StyledToolBar>
        <Typography>CampersRental</Typography>

        <nav>
          <NavList>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/catalog">Catalog</StyledLink>
            <StyledLink to="/favorite">Favorite</StyledLink>
          </NavList>
        </nav>
      </StyledToolBar>
    </StyledAppBar>
  );
};
