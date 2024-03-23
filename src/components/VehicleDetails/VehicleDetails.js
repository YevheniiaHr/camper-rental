export const VehicleDetails = ({ campers }) => {
  return (
    <div>
      <ul>
        <li>Form {campers.form}</li>
        <li>Length {campers.length}</li>
        <li>Width{campers.width}</li>
        <li>Height {campers.height}</li>
        <li>Tank {campers.tank}</li>
        <li>Consumption {campers.consumption}</li>
      </ul>
    </div>
  );
};
