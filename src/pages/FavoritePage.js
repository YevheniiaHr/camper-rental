import { CardList } from 'components/CardList/CardList';
import { AdvertsSection } from 'components/CardList/CardList.styled';
import { selectFavoriteCampers } from '../redux/cards/selectors';
import { useSelector } from 'react-redux';
import { Container } from 'components/Layout/Layout.styled';
const FavoritePage = () => {
  const favoriteCampers = useSelector(selectFavoriteCampers);

  return (
    <AdvertsSection>
      <Container>
        {favoriteCampers.length === 0 ? (
          <h2>
            Here will be your favorite campers, push ❤️ on the cataloge page
          </h2>
        ) : (
          <CardList campers={favoriteCampers} />
        )}
      </Container>
    </AdvertsSection>
  );
};
export default FavoritePage;
