import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCampers,
  selectIsLoading,
  selectError,
} from '../../redux/cards/selectors';
import { fetchCards } from '../../redux/cards/operations';
import { Card } from 'components/Card/Card';
import { AdvertsSection, StyledList } from './CardList.styled';
import { CustomButton } from 'components/Button/Button';
import { Loader } from 'components/Loader';

export const CardList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [visibleCampersCount, setVisibleCampersCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCampersCount(prevCount => Math.min(prevCount + 4));
  };

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <AdvertsSection>
      {error && <div>Error: {error}</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <StyledList>
          {campers.slice(0, visibleCampersCount).map(camper => (
            <Card key={camper._id} {...camper} />
          ))}
        </StyledList>
      )}
      {visibleCampersCount < campers.length && (
        <CustomButton
          onClick={handleLoadMore}
          disabled={isLoading}
          variant="contained"
          borderColor="1px solid rgba(71, 84, 103, 0.2)"
          backgroundColor="transparent"
          textColor="#101828"
          hoverBackgroundColor="transparent"
          hoverBorderColor="#E44848"
          style={{
            marginTop: '68px',

            marginLeft: '467px',
          }}
        >
          {' '}
          Load more
          {/* {isLoading ? <Loader /> : 'Load more'} */}
        </CustomButton>
      )}
    </AdvertsSection>
  );
};
