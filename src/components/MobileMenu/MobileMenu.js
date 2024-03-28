import sprite from '../../components/sprite.svg';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseBtn, MobileWrapp } from './MobileMenu.styled';
import { Navigation } from 'components/Header/Navigation';
const mobileRoot = document.querySelector('#mobile');

export const MobileMenu = ({ onClose, isOpen }) => {
  let location = useLocation();

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location]);
  console.log('mobileRoot:', mobileRoot);
  return isOpen
    ? createPortal(
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
    : null;
};
