// import { StyledAppBar, StyledToolBar } from './Header.styled';

// import { Typography, useMediaQuery } from '@mui/material';
// import { Navigation } from './Navigation';
import { MobileView } from './MobileView';
import { DesktopView } from './DesktopView';
import { useMediaQuery } from '@mui/material';

export const Header = () => {
  const isDesktop = useMediaQuery('(min-width:1440px)');
  return <header>{isDesktop ? <DesktopView /> : <MobileView />}</header>;
};
