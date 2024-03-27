import React, { useEffect, useState } from 'react';
import { MobViewWrapper } from './Header.styled';
// import { Navigation } from './Navigation';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { BurgerButton } from './BurgerButton';
// import { useEffect } from 'react';

export const MobileView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileRoot, setMobileRoot] = useState(null);
  useEffect(() => {
    const root = document.querySelector('#modal');
    setMobileRoot(root);
  }, []);
  const handleOpenMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
    // console.log('handleCloseMenu called. isOpen:', false);
  };
  console.log('MobileView isOpen:', isOpen);
  console.log('MobileView mobileRoot:', mobileRoot);
  return (
    <MobViewWrapper>
      {/* <Navigation openMenu={toggleMenu} /> */}
      <MobileMenu
        mobileRoot={mobileRoot}
        onClose={handleCloseMenu}
        isOpen={isOpen}
      />
      <BurgerButton onClick={handleOpenMenu} />
    </MobViewWrapper>
  );
};
