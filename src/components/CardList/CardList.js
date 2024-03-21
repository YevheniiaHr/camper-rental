import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCards,
  selectIsLoading,
  selectError,
} from '../../redux/cards/selectors';
import { fetchCards } from '../../redux/cards/operations';
import { Card } from 'components/Card/Card';
import { AdvertsSection, StyledList } from './CardList.styled';
import { CustomButton } from 'components/Button/Button';

export const CardList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCards);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [visibleCampersCount, setVisibleCampersCount] = useState(4);
  const handleLoadMore = () => {
    setVisibleCampersCount(prevCount => Math.min(prevCount + campers.length));
  };

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <AdvertsSection>
      {error && <div>Error: {error}</div>}
      <StyledList>
        {campers.slice(0, visibleCampersCount).map(camper => (
          <Card key={camper._id} {...camper} />
        ))}
      </StyledList>
      {visibleCampersCount < campers.length && (
        <CustomButton
          onClick={handleLoadMore}
          disabled={isLoading}
          variant="contained"
        >
          {isLoading ? 'Loading...' : 'Load more'}
        </CustomButton>
      )}
      {/* {error && <div>Error: {error}</div>}
      <StyledList>
        {campers.slice(0, visibleCampersCount).map(camper => (
          <Card key={camper._id} {...camper} />
        ))}
      </StyledList>
      {visibleCampersCount < campers.length && (
        <button onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load more'}
        </button> */}
      {/* )} */}
    </AdvertsSection>
  );
};
