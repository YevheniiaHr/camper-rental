// import { useMediaQuery } from '@mui/material';
import sprite from '../../components/sprite.svg';
// import { useLocation } from 'react-router-dom';
import React from 'react';
import { createPortal } from 'react-dom';
import { CloseBtn, MobileWrapp } from './MobileMenu.styled';
import { Navigation } from 'components/Header/Navigation';

// const mobileRoot = document.querySelector('#modal');
// console.log(mobileRoot);
export const MobileMenu = ({ mobileRoot, onClose, isOpen }) => {
  // const isMobileSreen = useMediaQuery('(max-width:767px)');
  //   let location = useLocation();
  //   useEffect(() => {
  //     if (isOpen) {
  //       onClose();
  //     }
  //   },[location]);

  console.log('mobileRoot:', mobileRoot);
  return (
    mobileRoot &&
    // isOpen &&
    createPortal(
      <MobileWrapp>
        <CloseBtn onClick={onClose}>
          <svg width="16px" height="16px">
            <use xlinkHref={sprite + '#icon-close'} />
          </svg>
        </CloseBtn>
        <Navigation />
      </MobileWrapp>,
      mobileRoot
    )
  );
};
