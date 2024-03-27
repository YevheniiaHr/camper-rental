import { OpenMenuBtn } from './Header.styled';
import sprite from '../../components/sprite.svg';
export const BurgerButton = ({ openMenu }) => {
  return (
    <OpenMenuBtn typeof="button" onClick={openMenu}>
      <svg width="16px" height="16px">
        <use xlinkHref={sprite + '#icon-burger'} />
      </svg>
    </OpenMenuBtn>
  );
};
