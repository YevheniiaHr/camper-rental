import React from 'react';

import { Card } from 'components/Card/Card';
import { StyledList } from './CardList.styled';

export const CardList = ({ campers }) => {
  return (
    <StyledList>
      {campers.map(camper => (
        <Card key={camper._id} {...camper} />
      ))}
    </StyledList>
  );
};
