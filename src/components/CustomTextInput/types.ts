export interface IProps extends IStyledProps {
  label?: string;
  type?: "text" | "textarea";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autoFocus?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface IStyledProps {
  width?: string;
  height?: string;
  disabled?: boolean;
}
