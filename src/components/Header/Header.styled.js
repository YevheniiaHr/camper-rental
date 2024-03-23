import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { AppBar, Toolbar } from '@mui/material';
export const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;
export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;
export const StyledAppBar = styled(AppBar)`
  background-color: green;
`;
export const StyledToolBar = styled(Toolbar)`
  justify-content: space-around;
`;
