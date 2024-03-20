import { Container } from '@mui/material';
import { CardList } from 'components/CardList/CardList';

const HomePage = () => {
  return (
    <Container style={{ marginTop: '64px' }}>
      <CardList />{' '}
    </Container>
  );
  // <div style={{ marginTop: '64px' }}>Home Page</div>;
};
export default HomePage;
