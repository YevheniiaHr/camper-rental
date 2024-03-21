import { Button } from './Buttons.styled';

export const CustomButton = ({
  onClick,
  variant,
  type,
  children,
  ...props
}) => {
  return (
    <Button onClick={onClick} variant={variant} type={type} {...props}>
      {children}
    </Button>
  );
};
