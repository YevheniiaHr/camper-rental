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

export const CardList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
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
          style={{
            marginTop: '68px',
            border: '1px solid rgba(71, 84, 103, 0.2)',
            backgroundColor: 'transparent',
            color: '#101828',
            marginLeft: '467px',
            transition: 'color 0.3s ease',
          }}
        >
          {isLoading ? 'Loading...' : 'Load more'}
        </CustomButton>
      )}
    </AdvertsSection>
  );
};
