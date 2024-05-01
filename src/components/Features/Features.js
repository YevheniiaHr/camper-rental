import {
  DetailsWrapper,
  FeaturesWrapper,
  FormWrapper,
  ListFeatures,
  TitleText,
} from './Features.styled';
import sprite from '../sprite.svg';
import { Item } from './Item';
import { VehicleDetails } from 'components/VehicleDetails/VehicleDetails';
import { Forma } from 'components/Forma/Forma';

export const Features = ({
  id,
  CD,
  TV,
  airConditioner,
  bathroom,
  beds,
  freezer,
  gas,
  hob,
  kitchen,
  microwave,
  radio,
  shower,
  toilet,
  water,
}) => {
  const details = {
    CD,
    TV,
    airConditioner,
    bathroom,
    beds,
    freezer,
    gas,
    hob,
    kitchen,
    microwave,
    radio,
    shower,
    toilet,
    water,
  };
  const getIconByKey = key => {
    switch (key) {
      case 'airConditioner':
        return (
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#icon-air-conditioner'} />
          </svg>
        );

      case 'bathroom':
        return (
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#icon-shower'} />
          </svg>
        );
      case 'kitchen':
        return (
          <svg width="16px" height="16px">
            <use xlinkHref={sprite + '#icon-kitchen'} />
          </svg>
        );
      case 'beds':
        return (
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#icon-bed'} />
          </svg>
        );
      case 'TV':
        return (
          <svg width="16px" height="16px">
            <use xlinkHref={sprite + '#icon-tv'} />
          </svg>
        );
      case 'CD':
        return (
          <svg width="16px" height="16px">
            <use xlinkHref={sprite + '#icon-cd'} />
          </svg>
        );
      case 'radio':
        return (
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#icon-radio'} />
          </svg>
        );
      case 'shower':
        return (
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#icon-shower'} />
          </svg>
        );
      case 'toilet':
        return (
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#icon-toilet'} />
          </svg>
        );
      case 'freezer':
        return (
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#icon-freezer'} />
          </svg>
        );
      case 'hob':
        return (
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#icon-hob'} />
          </svg>
        );
      case 'microwave':
        return (
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#icon-microwave'} />
          </svg>
        );
      case 'gas':
        return (
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#icon-gas'} />
          </svg>
        );
      case 'water':
        return (
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + '#icon-water'} />
          </svg>
        );

      default:
        return null; // Повертаємо null, якщо іконка не знайдена
    }
  };
  return (
    <FeaturesWrapper>
      <DetailsWrapper>
        <ListFeatures>
          {details &&
            Object.entries(details).map(([key, value]) => {
              if (value !== 0 && value !== false) {
                return (
                  <Item
                    key={key}
                    icon={getIconByKey(key)}
                    text={value}
                    castomKey={key}
                  />
                );
              }
              return null;
            })}
        </ListFeatures>
        <TitleText>Vehicle details</TitleText>
        <VehicleDetails id={id} />
      </DetailsWrapper>
      <FormWrapper>
        <Forma />
      </FormWrapper>
    </FeaturesWrapper>
  );
};
