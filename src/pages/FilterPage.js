import { CardList } from 'components/CardList/CardList';
import { Filter } from 'components/Filter/Filter';
import { FilterContainer } from 'components/Styles/FilterContainer.styled';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../redux/cards/operations';
import {
  selectCampers,
  selectEquipmentFilter,
  selectError,
  selectFilteredLocation,
  selectIsLoading,
  selectVehicleTypeFilter,
} from '../redux/cards/selectors';

import { LoadMoreBtn } from 'components/Button/LoadMoreBtn.styled';
import { fetchAllCards } from 'service/api';
import { Container } from 'components/Layout/Layout.styled';

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
      if (page !== 1) {
        return;
      }
      const totalResult = await fetchAllCards({ page: 1, limit: '' });

      setTotalPage(Math.ceil(totalResult.length / limit));
    })();
    dispatch(fetchCards({ page, limit }));
  }, [dispatch, page, limit]);

  const location = useSelector(selectFilteredLocation);
  const filteredEquipment = useSelector(selectEquipmentFilter);
  const filteredVehicle = useSelector(selectVehicleTypeFilter);

  useEffect(() => {
    const params = [];

    if (location) {
      params.push(`location=${location}`);
    }
    if (filteredVehicle) {
      params.push(`form=${filteredVehicle}`);
    }

    if (filteredEquipment?.ac) {
      params.push(`airConditioner=${Number(filteredEquipment.ac)}`);
    }
    if (filteredEquipment?.transmission) {
      params.push(
        `transmission=${filteredEquipment.transmission && 'automatic'}`
      );
    }
    if (
      Array.isArray(filteredEquipment?.kitchen) &&
      filteredEquipment?.kitchen[0]
    ) {
      params.push(`kitchen=${Number(filteredEquipment.kitchen)}`);
    }
    if (Array.isArray(filteredEquipment?.tv) && filteredEquipment?.tv[0]) {
      params.push(`TV=${Number(filteredEquipment.tv)}`);
    }
    if (
      Array.isArray(filteredEquipment?.shower) &&
      filteredEquipment?.shower[0]
    ) {
      params.push(`shower=${Number(filteredEquipment.shower)}`);
    }
    dispatch(fetchCards({ page, limit, params }));
  }, [location, filteredEquipment, filteredVehicle, dispatch, page]);

  return (
    <Container>
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
    </Container>
  );
};
export default FilterPage;
