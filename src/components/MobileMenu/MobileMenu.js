import sprite from '../../components/sprite.svg';
import React from 'react';
import { createPortal } from 'react-dom';
import { CloseBtn, MobileWrapp } from './MobileMenu.styled';
import { Navigation } from 'components/Header/Navigation';
const mobileRoot = document.querySelector('#mobile');

export const MobileMenu = ({ onClose, isOpen }) => {
  console.log('mobileRoot:', mobileRoot);
  return isOpen
    ? createPortal(
        <MobileWrapp>
          <CloseBtn onClick={onClose}>
            <svg width="16px" height="16px">
              <use xlinkHref={sprite + '#icon-close'} />
            </svg>
          </CloseBtn>
          <Navigation onClose={onClose} />
        </MobileWrapp>,
        mobileRoot
      )
    : null;
};
