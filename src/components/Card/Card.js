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
import { useState } from 'react';

import { ModalWindow } from 'components/Modal/ModalWindow';
import Modal from 'react-modal';
Modal.setAppElement('#modal');
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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
            <CustomButton onClick={handleShowMore} type="button">
              Show More
            </CustomButton>
          </ListWrap>
        </Container>
      </ItemWrapper>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={{
          name,
          price,
          rating,
          location,
          reviews,
          gallery,
          description,
          details,
        }}
      ></ModalWindow>
    </Item>
  );
};
