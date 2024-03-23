import { ItemFeature } from './Features.styled';

export const Item = ({ icon, text, castomKey }) => {
  return (
    <ItemFeature>
      {icon}

      {text}

      {castomKey}
    </ItemFeature>
  );
};
