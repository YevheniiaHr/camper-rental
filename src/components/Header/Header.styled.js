import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
export const StyledLink = styled(NavLink)`
  color: black;
  cursor: pointer;

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
  @media (min-width: 1440px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

export const MobViewWrapper = styled.div`
  // position: absolute;
  width: 100%;
  max-width: 375px;
  height: 60px;
  background-color: green;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // @media (min-width: 768px) {
  //   height: 84px;
  //   max-width: 768px;
  //   padding-left: 32px;
  //   padding-right: 32px;
  // }
`;
export const BurgerButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const DeskHeaderWrap = styled.div`
  background-color: green;

  padding-left: 96px;
  padding-right: 96px;

  // transform: translateX(-50%);

  width: 1440px;

  height: 70px;

  display: flex;

  justify-content: center;
  align-items: center;
`;
