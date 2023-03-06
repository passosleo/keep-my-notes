import { InputWrapper } from "./styles";
import { IProps } from "./types";

function CustomTextInput({
  label,
  type = "text",
  onChange,
  placeholder,
  disabled,
  required,
  maxLength,
  minLength,
  pattern,
  autoFocus,
  onBlur,
  onFocus,
  width,
  height,
}: IProps) {
  return (
    <InputWrapper width={width} height={height}>
      {label && <label htmlFor={label}>{label}</label>}
      {type === "textarea" ? (
        <textarea id={label} placeholder={placeholder} />
      ) : (
        <input
          id={label}
          type={type}
          onChange={onChange}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          autoFocus={autoFocus}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
        />
      )}
    </InputWrapper>
  );
}

export default CustomTextInput;
