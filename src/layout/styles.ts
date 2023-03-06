import styled from "styled-components";

export const Header = styled.section`
  background: #5b8fb9;
  padding: 0.5em 0.8em;
  z-index: 1;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      background: #f2f2f2;
      border: none;
      border-radius: 5px;
      padding: 0.5em;
      width: 25%;

      &:focus {
        outline: none;
      }
    }

    img {
      border-radius: 50%;
      border: 2px solid #f2f2f2;
      background: #f2f2f2;
    }
  }
`;

export const ContentWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2em 0.8em;
`;
