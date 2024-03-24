import sprite from '../sprite.svg';
import { CustomButton } from 'components/Button/Button';

import {
  Title,
  Price,
  Rating,
  Location,
  Text,
  Item,
  Img,
  Container,
  TitleBox,
  ItemWrapper,
  LocationWrap,
  ListDetails,
  ListWrap,
} from '../Card/Card.styled';
import { ListItem } from '../Card/ListItem';

import Modal from 'react-modal';
Modal.setAppElement('#modal');

export const CardFavorite = ({
  _id,
  name,
  price,
  rating,
  location,
  description,
  gallery,
  reviews,
}) => {
  const iconData = [
    { icon: 'icon-adults', text: '3 adults' },
    { icon: 'automatic-1', text: 'Automatic' },
    { icon: 'icon-petrol', text: 'Petrol' },
    { icon: 'icon-kitchen', text: 'Kitchen' },
    { icon: 'icon-bed', text: '2 beds' },
    { icon: 'ac-1', text: 'AC' },
  ];
  return (
    <Item>
      <ItemWrapper>
        <Img src={gallery[0]} alt={name} />
        {console.log('Gallery:', gallery[0])}
        <Container>
          <TitleBox>
            <Title>{name}</Title>
            <Price>€{price},00</Price>
            <CustomButton
              style={{
                width: '16px',
                height: '16px',
                backgroundColor: 'transparent',
              }}
              type="button"
            >
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + '#icon-heart-fill'} />
              </svg>
            </CustomButton>
          </TitleBox>

          <LocationWrap>
            <Rating>
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + '#icon-Rating'} />
              </svg>
              {rating} ({reviews.length} Reviews)
            </Rating>
            <Location>
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + '#icon-map-pin'} />
              </svg>{' '}
              {location}
            </Location>
          </LocationWrap>
          <Text>{description} ...</Text>
          <ListWrap>
            <ListDetails>
              {iconData.map((item, index) => (
                <ListItem key={index} icon={item.icon} text={item.text} />
              ))}
            </ListDetails>
          </ListWrap>
        </Container>
      </ItemWrapper>
    </Item>
  );
};
