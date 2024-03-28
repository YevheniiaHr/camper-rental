import React, { useState } from 'react';
import { MobViewWrapper } from './Header.styled';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { BurgerButton } from './Header.styled';
import sprite from '../../components/sprite.svg';
export const MobileView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  console.log('MobileView isOpen:', isOpen);
  return (
    <MobViewWrapper>
      <BurgerButton typeof="button" onClick={handleOpenMenu}>
        <svg width="16px" height="16px">
          <use xlinkHref={sprite + '#icon-burger'} />
        </svg>
      </BurgerButton>
      <MobileMenu onClose={handleCloseMenu} isOpen={isOpen} />
    </MobViewWrapper>
  );
};
