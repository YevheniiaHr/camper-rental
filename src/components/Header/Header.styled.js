import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
export const StyledLink = styled(NavLink)`
  color: black;
  cursor: pointer;
  font-size: 24px;

  &:hover {
    color: orange;
  }
  &.active {
    color: orange;
  }
`;
export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 50px;

  flex-direction: row;
  margin-top: 0;
`;

export const MobViewWrapper = styled.div`
  width: 100%;
  max-width: 375px;
  height: 60px;
  background-color: green;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const BurgerButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const DeskHeaderWrap = styled.div`
  background-color: #e44847;

  padding-left: 96px;
  padding-right: 96px;

  height: 70px;

  display: flex;

  justify-content: center;
  align-items: center;
`;
