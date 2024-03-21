import { Container } from '@mui/material';
import { CardList } from 'components/CardList/CardList';
import { Filter } from 'components/Filter/Filter';

const FilterPage = () => {
  return (
    <Container style={{ marginTop: '64px', display: 'flex' }}>
      <Filter />
      <CardList />
    </Container>
  );
};
export default FilterPage;
