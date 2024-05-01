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
  ButtonFavorite,
} from './Card.styled';
import { ListItem } from './ListItem';
import { useState } from 'react';

import { ModalWindow } from 'components/Modal/ModalWindow';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCampers } from '../../redux/cards/selectors';
import { addFavorite, deleteFavorite } from '../../redux/cards/campersSlice';
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
  CD,
  TV,
  airConditioner,
  bathroom,
  beds,
  freezer,
  gas,
  hob,
  kitchen,
  microwave,
  radio,
  shower,
  toilet,
  water,
}) => {
  const favorite = useSelector(selectFavoriteCampers);
  const dispatch = useDispatch();
  const isFavorite = favorite.find(item => item._id === _id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleFavoriteToggle = () => {
    isFavorite
      ? dispatch(
          deleteFavorite({
            _id,
            name,
            price,
            rating,
            location,
            description,
            gallery,
            reviews,
            CD,
            TV,
            airConditioner,
            bathroom,
            beds,
            freezer,
            gas,
            hob,
            kitchen,
            microwave,
            radio,
            shower,
            toilet,
            water,
          })
        )
      : dispatch(
          addFavorite({
            _id,
            name,
            price,
            rating,
            location,
            description,
            gallery,
            reviews,
            CD,
            TV,
            airConditioner,
            bathroom,
            beds,
            freezer,
            gas,
            hob,
            kitchen,
            microwave,
            radio,
            shower,
            toilet,
            water,
          })
        );
  };
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
            <Price>
              €
              {Number(price).toLocaleString('en', { minimumFractionDigits: 2 })}
            </Price>
            <ButtonFavorite onClick={handleFavoriteToggle} type="button">
              {isFavorite ? (
                <svg width="16px" height="16px">
                  <use xlinkHref={sprite + '#icon-heart-fill'} />
                </svg>
              ) : (
                <svg width="16px" height="16px">
                  <use xlinkHref={sprite + '#icon-heart'} />
                </svg>
              )}
            </ButtonFavorite>
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
              </svg>
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
            <CustomButton
              onClick={handleShowMore}
              type="button"
              hoverBackgroundColor="#d84343"
            >
              Show More
            </CustomButton>
          </ListWrap>
        </Container>
      </ItemWrapper>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={{
          _id,
          name,
          price,
          rating,
          location,
          reviews,
          gallery,
          description,
          CD,
          TV,
          airConditioner,
          bathroom,
          beds,
          freezer,
          gas,
          hob,
          kitchen,
          microwave,
          radio,
          shower,
          toilet,
          water,
        }}
      ></ModalWindow>
    </Item>
  );
};
