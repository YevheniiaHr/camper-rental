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
    <FilterContainer>
      <Filter />
      {error && <div>Error: {error}</div>}
      {isLoading ? <Loader /> : <CardList campers={campers} />}

      {page < totalPage && (
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
          {isLoading ? <Loader /> : 'Load more'}
        </CustomButton>
      )}
    </FilterContainer>
  );
};
export default FilterPage;
