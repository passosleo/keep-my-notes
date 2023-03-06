import { Button } from "./styles";
import { IProps } from "./types";

function CustomButton({
  title,
  type = "button",
  onClick,
  leftIcon,
  rightIcon,
  disabled = false,
  color = "solid",
  width,
  height,
  fontSize,
}: IProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      color={color}
      width={width}
      height={height}
      title=""
      fontSize={fontSize}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {title && <p>{title}</p>}
      {rightIcon && <span>{rightIcon}</span>}
    </Button>
  );
}

export default CustomButton;
