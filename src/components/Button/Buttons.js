import { Button } from '@mui/material';

export const CustomButton = ({ onClick, variant, type, children }) => {
  <Button onClick={onClick} variant={variant}>
    {children}
  </Button>;
};
