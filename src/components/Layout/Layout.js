import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from 'components/Header/Header';

export const Layout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  return (
    <>
      {!isHomePage && <Header />}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
