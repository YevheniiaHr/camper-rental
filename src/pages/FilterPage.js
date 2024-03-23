import { CardList } from 'components/CardList/CardList';
import { Filter } from 'components/Filter/Filter';
import { FilterContainer } from 'components/Styles/FilterContainer.styled';

const FilterPage = () => {
  return (
    <FilterContainer>
      <Filter />
      <CardList />
    </FilterContainer>
  );
};
export default FilterPage;
