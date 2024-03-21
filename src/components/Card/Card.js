// import { useDispatch } from 'react-redux';
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
} from './Card.styled';
import { ListItem } from './ListItem';
// import { useState } from 'react';

export const Card = ({
  _id,
  name,
  price,
  rating,
  location,
  description,
  gallery,
  reviews,
  details,
}) => {
  // const [showModal, setShowModal] = useState(false);

  // const handleShowMore = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };
  const firstLine = description.slice(0, 70);

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

        <Container>
          <TitleBox>
            <Title>{name}</Title>
            <Price>${price}</Price>
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
          <Text>{firstLine} ...</Text>
          <ListWrap>
            <ListDetails>
              {iconData.map((item, index) => (
                <ListItem key={index} icon={item.icon} text={item.text} />
              ))}
            </ListDetails>
            <CustomButton type="button">Show More</CustomButton>
          </ListWrap>
        </Container>
      </ItemWrapper>
    </Item>
  );
};
