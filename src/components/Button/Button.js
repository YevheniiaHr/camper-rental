import { Button } from './Buttons.styled';

export const CustomButton = ({
  onClick,
  variant,
  type,
  children,
  hoverBorderColor,
  border,
  color,
  borderColor,

  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      type={type}
      hoverBorderColor={hoverBorderColor}
      border={border}
      color={color}
      borderColor={borderColor}
      {...props}
    >
      {children}
    </Button>
  );
};
