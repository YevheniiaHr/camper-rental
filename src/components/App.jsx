import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import FilterPage from 'pages/FilterPage';
import FavoritePage from 'pages/FavoritePage';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<FilterPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
