import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCards,
  selectIsLoading,
  selectError,
} from '../../redux/cards/selectors';
// import { fetchMoreCampers } from './operations';
import { fetchCards } from '../../redux/cards/operations';
export const CardList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCards);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [visibleCampersCount, setVisibleCampersCount] = useState(4);
  const handleLoadMore = () => {
    setVisibleCampersCount(prevCount => prevCount + 4);
  };
  //   const handleLoadMore = () => {
  //     dispatch(fetchMoreCampers());
  //   };

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);
  return (
    <div>
      {error && <div>Error: {error}</div>}
      <ul>
        {campers.slice(0, visibleCampersCount).map(camper => (
          <li key={camper.id}>{/* Рендеринг кемперів */}</li>
        ))}
      </ul>
      {visibleCampersCount < campers.length && (
        <button onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load more'}
        </button>
      )}
    </div>
  );
};
