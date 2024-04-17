import { CardList } from 'components/CardList/CardList';
import { AdvertsSection } from 'components/CardList/CardList.styled';
import { selectFavoriteCampers } from '../redux/cards/selectors';
import { useSelector } from 'react-redux';
const FavoritePage = () => {
  const favoriteCampers = useSelector(selectFavoriteCampers);

  return (
    <AdvertsSection>
      {favoriteCampers.length === 0 ? (
        <h2>
          Here will be your favorite campers, push ❤️ on the cataloge page
        </h2>
      ) : (
        <CardList campers={favoriteCampers} />
      )}
    </AdvertsSection>
  );
};
export default FavoritePage;
