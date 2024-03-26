import { StyledLink } from './Navigation.styled';
import sprite from '../../sprite.svg';
export const Navigation = () => {
  return (
    <nav>
      <StyledLink to="/catalog">
        Click here to see our catalog
        <svg width="16px" height="16px">
          <use xlinkHref={sprite + '#icon-arrow'} />
        </svg>
      </StyledLink>
    </nav>
  );
};
