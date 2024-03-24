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
      if (i <= rating) {
        stars.push(`icon-Rating-${i}`);
      } else {
        stars.push(`icon-Rating-nofill-${i}`);
      }
    }
    return stars;
  };

  return (
    <CommonReviewsContainer>
      <ReviewsContainer>
        {reviews.map((item, index) => (
          <UserReview key={index}>
            <Avatar>{item.reviewer_name.charAt(0).toUpperCase()}</Avatar>
            <UserName>{item.reviewer_name}</UserName>

            {getRatingStars(item.reviewer_rating).map((icon, index) => (
              <svg key={index} width="16px" height="16px">
                <use xlinkHref={`${sprite}#${icon}`} />
              </svg>
            ))}

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
