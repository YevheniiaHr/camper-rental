// import { useEffect, useState } from 'react';

// import { CardFavorite } from 'components/CardFavorite/CardFavorite';
import { useSelector } from 'react-redux';
import { selectFavoriteCampers } from '../../redux/cards/selectors';
import { Card } from 'components/Card/Card';

export const FavoriteCardList = () => {
  // const [favoriteCards, setFavoriteCards] = useState([]);

  // useEffect(() => {
  //   const allStorageItems = { ...localStorage };

  //   const favoriteCardIds = Object.keys(allStorageItems).filter(
  //     key => allStorageItems[key] === 'true'
  //   );

  //   setFavoriteCards(favoriteCardIds);
  // }, []);
  const favorite = useSelector(selectFavoriteCampers);
  return (
    <div>
      <ul>
        {favorite.map(({ _id, gallery, reviews, name, price }) => (
          <Card
            key={_id}
            _id={_id}
            gallery={gallery}
            reviews={reviews}
            name={name}
            price={price}
          />
        ))}
      </ul>
    </div>
  );
};
