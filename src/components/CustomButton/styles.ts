import styled from "styled-components";
import { IProps } from "./types";

export const Button = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  background: ${({ disabled, color, theme }) =>
    disabled
      ? color === "solid"
        ? theme.colors.grey
        : theme.colors.white
      : color === "solid"
      ? theme.colors.blue
      : theme.colors.white};
  border: 0.0625rem solid
    ${({ disabled, color, theme }) =>
      disabled
        ? color === "solid"
          ? theme.colors.white
          : theme.colors.grey
        : color === "solid"
        ? theme.colors.white
        : theme.colors.blue};
  border-radius: 0.625rem;
  color: ${({ disabled, color, theme }) =>
    disabled
      ? color === "solid"
        ? theme.colors.white
        : theme.colors.grey
      : color === "solid"
      ? theme.colors.white
      : theme.colors.blue};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1em")};
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.2s;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background: ${({ disabled, color, theme }) =>
      disabled
        ? color === "solid"
          ? theme.colors.grey
          : theme.colors.white
        : color === "solid"
        ? theme.colors.white
        : theme.colors.blue};
    color: ${({ disabled, color, theme }) =>
      disabled
        ? color === "solid"
          ? theme.colors.white
          : theme.colors.grey
        : color === "solid"
        ? theme.colors.blue
        : theme.colors.white};
    border: 0.0625rem solid
      ${({ disabled, color, theme }) =>
        disabled
          ? color === "solid"
            ? theme.colors.white
            : theme.colors.grey
          : color === "solid"
          ? theme.colors.blue
          : theme.colors.white};
  }

  p {
    margin: 0 0.5rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:focus {
    outline: none;
  }
`;
