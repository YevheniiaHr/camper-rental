const { CustomButton } = require('components/Button/Buttons');
const {
  Title,
  Price,
  Rating,
  Location,
  Text,
  ListDetails,
  Item,
} = require('./Card.styled');

export const Card = ({ id, name, price, rating, location }) => {
  return (
    <Item>
      <Title>{name}</Title>
      <Price>{price}</Price>
      <Rating>{rating}</Rating>
      <Location>{location}</Location>
      <Text>
        The pictures shown here are example vehicles of the respective.
      </Text>
      <ListDetails></ListDetails>
      {/* <CustomButton onClick={handleShowMore} type="button">
        Show More
      </CustomButton> */}
    </Item>
  );
};
