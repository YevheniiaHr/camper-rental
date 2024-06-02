import { Route, Routes } from 'react-router-dom';
// import HomePage from 'pages/HomePage';
// import FilterPage from 'pages/FilterPage';
// import FavoritePage from 'pages/FavoritePage';

import { Layout } from './Layout/Layout';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const FilterPage = lazy(() => import('../pages/FilterPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage'));

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<FilterPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
