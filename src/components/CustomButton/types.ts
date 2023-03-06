export interface IProps {
  title?: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  color?: "solid" | "outline";
  width?: string;
  height?: string;
  fontSize?: string;
  transition?: boolean;
}
