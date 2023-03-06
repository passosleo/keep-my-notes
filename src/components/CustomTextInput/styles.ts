import styled from "styled-components";
import { IStyledProps } from "./types";

export const InputWrapper = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    margin-bottom: 0.3rem;
  }

  input,
  textarea {
    font-family: ${({ theme }) => theme.fonts.primary};
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background: #fff;
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: #000;
    }
  }
`;
