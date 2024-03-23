import { CustomKey, Icon, ItemFeature, Text } from './Features.styled';

export const Item = ({ icon, text, castomKey }) => {
  return (
    <ItemFeature>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
      <CustomKey>
        {castomKey.charAt(0).toUpperCase() + castomKey.slice(1)}
      </CustomKey>
    </ItemFeature>
  );
};
