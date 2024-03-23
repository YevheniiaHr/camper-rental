import { useSelector } from 'react-redux';
import { Label, ListDetails, Row, Value } from './VehicleDetails.styled';
import { selectCards } from '../../redux/cards/selectors';

export const VehicleDetails = ({ id }) => {
  const data = useSelector(selectCards);

  const selectedData = data.find(item => item._id === id);

  if (!selectedData) {
    return <div>No data available</div>;
  }
  return (
    <ListDetails>
      <Row>
        <Label>Form</Label>
        <Value>
          {selectedData.form.charAt(0).toUpperCase() +
            selectedData.form.slice(1)}
        </Value>
      </Row>
      <Row>
        <Label>Length</Label>
        <Value>{selectedData.length}</Value>
      </Row>
      <Row>
        <Label>Width</Label>
        <Value>{selectedData.width}</Value>
      </Row>
      <Row>
        <Label>Height</Label>
        <Value>{selectedData.height}</Value>
      </Row>
      <Row>
        <Label>Tank</Label>
        <Value>{selectedData.tank}</Value>
      </Row>
      <Row>
        <Label>Consumption</Label>
        <Value>{selectedData.consumption}</Value>
      </Row>
    </ListDetails>
  );
};
