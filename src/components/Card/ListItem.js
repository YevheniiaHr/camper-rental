import sprite from '../sprite.svg';
import { DetailItem, TextDetailItem } from './Card.styled';

export const ListItem = ({ icon, text }) => {
  return (
    <DetailItem>
      <svg width="20px" height="20px">
        <use xlinkHref={sprite + `#${icon}`} />
      </svg>
      <TextDetailItem>{text}</TextDetailItem>
    </DetailItem>
  );
};
