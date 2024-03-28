import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Header } from 'components/Header/Header';
import { Loader } from '../Loader';
// import { Container } from '@mui/material';
export const Layout = () => {
  return (
    <>
      {' '}
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};