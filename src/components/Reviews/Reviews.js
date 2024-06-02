import sprite from '../sprite.svg';
import { FormWrapper } from 'components/Features/Features.styled';
import {
  CommonReviewsContainer,
  ReviewsContainer,
  UserComment,
  UserName,
  UserReview,
} from './Reviews.styled';
import { Forma } from 'components/Forma/Forma';
import { Avatar } from '@mui/material';

export const Reviews = ({ reviews }) => {
  const getRatingStars = rating => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      const color = i <= rating ? '#ffc531' : '#f2f4f7';

      stars.push(
        <svg key={i} width="16px" height="16px" fill={color} stroke={color}>
          <use xlinkHref={`${sprite}#icon-Rating`} />
        </svg>
      );
    }
    console.log(stars);
    return stars;
  };

  return (
    <CommonReviewsContainer>
      <ReviewsContainer>
        {reviews.map((item, index) => (
          <UserReview key={index}>
            <Avatar>{item.reviewer_name.charAt(0).toUpperCase()}</Avatar>
            <UserName>{item.reviewer_name}</UserName>

            {getRatingStars(item.reviewer_rating)}

            <UserComment> {item.comment}</UserComment>
          </UserReview>
        ))}
      </ReviewsContainer>
      <FormWrapper>
        <Forma />
      </FormWrapper>
    </CommonReviewsContainer>
  );
};
