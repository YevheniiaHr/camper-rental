import { useEffect, useState } from 'react';

import { CardFavorite } from 'components/CardFavorite/CardFavorite';

export const FavoriteCardList = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const allStorageItems = { ...localStorage };

    const favoriteCardIds = Object.keys(allStorageItems).filter(
      key => allStorageItems[key] === 'true'
    );

    setFavoriteCards(favoriteCardIds);
  }, []);
  return (
    <div>
      <h2>Here will be your favorite campers, push ❤️ </h2>

      <div>
        {favoriteCards.map((cardId, gallery, reviews, name, price) => (
          <CardFavorite
            key={cardId}
            _id={cardId}
            gallery={gallery}
            reviews={reviews}
            name={name}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};
