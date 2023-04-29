import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.5em;
    font-weight: 500;
  }

  img {
    border-radius: 50%;
    border: 2px solid #f2f2f2;
    background: #f2f2f2;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const FileInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    display: none;
  }

  label {
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.8em;
    padding: 0.5em 1em;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.blue};
  }
`;
