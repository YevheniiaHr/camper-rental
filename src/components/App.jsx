import { Route, Routes, useLocation } from 'react-router-dom';
// import HomePage from 'pages/HomePage';
// import FilterPage from 'pages/FilterPage';
// import FavoritePage from 'pages/FavoritePage';

import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const FilterPage = lazy(() => import('../pages/FilterPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage'));

export const App = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  return (
    <>
      <Routes>
        <Route path="/" element={isHomePage ? null : <Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<FilterPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
