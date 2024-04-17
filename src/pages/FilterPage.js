import { CardList } from 'components/CardList/CardList';
import { Filter } from 'components/Filter/Filter';
import { FilterContainer } from 'components/Styles/FilterContainer.styled';
import { CustomButton } from 'components/Button/Button';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../redux/cards/operations';
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from '../redux/cards/selectors';
import { fetchAllCards } from 'service/api';
import { LoadMoreBtn } from 'components/Button/LoadMoreBtn.styled';

const FilterPage = () => {
  const limit = 4;
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    (async () => {
      const totalResult = await fetchAllCards({ page: 1, limit: '' });
      // console.log(totalResult);
      setTotalPage(Math.ceil(totalResult.length / limit));
    })();
  }, [dispatch, limit]);
  useEffect(() => {
    dispatch(fetchCards({ page, limit }));
  }, [dispatch, page, limit]);
  return (
    <>
      <Filter />
      <FilterContainer>
        {error && <div>Error: {error}</div>}
        {isLoading ? <Loader /> : <CardList campers={campers} />}

        {page < totalPage && (
          <LoadMoreBtn
            onClick={handleLoadMore}
            disabled={isLoading}
            variant="contained"
          >
            {isLoading ? <Loader /> : 'Load more'}
          </LoadMoreBtn>
        )}
      </FilterContainer>
    </>
  );
};
export default FilterPage;
