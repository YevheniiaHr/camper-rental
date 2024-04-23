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
      if (page !== 1) {
        return;
      }
      const totalResult = await fetchAllCards({ page: 1, limit: '' });
      // console.log(totalResult);
      setTotalPage(Math.ceil(totalResult.length / limit));
    })();
    dispatch(fetchCards({ page, limit }));
  }, [dispatch, page, limit]);

  const location = useSelector(selectFilteredLocation);
  const filteredEquipment = useSelector(selectEquipmentFilter);
  const filteredVehicle = useSelector(selectVehicleTypeFilter);

  // useEffect(() => {
  //   dispatch(fetchCards({ page, limit }));
  // }, [dispatch, page, limit]);

  const [filteredCampers, setFilteredCampers] = useState(campers);

  useEffect(() => {
    if (location) {
      setFilteredCampers(result =>
        result.filter(item => {
          return item.location.toLowerCase().includes(location.toLowerCase());
        })
      );
    }
    if (filteredVehicle) {
      setFilteredCampers(result =>
        result.filter(item => item.form === filteredVehicle)
      );
    }
    if (Array.isArray(filteredEquipment?.ac) && filteredEquipment?.ac[0]) {
      setFilteredCampers(result =>
        result.filter(item => item.details.airConditioner)
      );
    }
    if (
      Array.isArray(filteredEquipment?.transmission) &&
      filteredEquipment?.transmission[0]
    ) {
      setFilteredCampers(result =>
        result.filter(item => item.transmission === 'automatic')
      );
    }
    if (
      Array.isArray(filteredEquipment?.kitchen) &&
      filteredEquipment?.kitchen[0]
    ) {
      setFilteredCampers(result => result.filter(item => item.kitchen));
    }
    if (Array.isArray(filteredEquipment?.tv) && filteredEquipment?.tv[0]) {
      setFilteredCampers(result => result.filter(item => item.tv));
    }
    if (
      Array.isArray(filteredEquipment?.shower) &&
      filteredEquipment?.shower[0]
    ) {
      setFilteredCampers(result => result.filter(item => item.shower));
    }
  }, [location, filteredEquipment, filteredVehicle]);
  useEffect(() => {
    setFilteredCampers(campers);
  }, [campers]);
  // const filteredCampers = () => {
  //   let result = campers;
  //   if (location) {
  //     result = result.filter(item => item.location.includes(location));
  //   }
  //   if (filteredVehicle) {
  //     result = result.filter(item => item.form === filteredVehicle);
  //   }
  //   if (filteredEquipment?.ac[0]) {
  //     result = result.filter(item => item.airConditioner);
  //   }
  //   if (filteredEquipment?.transmission[0]) {
  //     result = result.filter(item => item.transmission === 'automatic');
  //   }
  //   if (filteredEquipment?.kitchen[0]) {
  //     result = result.filter(item => item.kitchen);
  //   }
  //   if (filteredEquipment?.tv[0]) {
  //     result = result.filter(item => item.tv);
  //   }
  //   if (filteredEquipment?.shower[0]) {
  //     result = result.filter(item => item.shower);
  //   }
  //   return result;
  // };

  return (
    <>
      <Filter />
      <FilterContainer>
        {error && <div>Error: {error}</div>}
        {isLoading ? <Loader /> : <CardList campers={filteredCampers} />}

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
