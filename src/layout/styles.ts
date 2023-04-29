import styled from "styled-components";

export const Header = styled.section`
  background: ${({ theme }) => theme.colors.blue}};
  padding: 0.5em 0.8em;
  z-index: 1;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: ${({ theme }) => theme.colors.white}};
  display: flex;
  align-items: center;
  justify-content: center;

  div:first-child {
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      cursor: pointer;
      border-radius: 50%;
      border: 2px solid #f2f2f2;
      background: ${({ theme }) => theme.colors.white}};
    }
  }
`;

export const ContentWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2em 0.8em;
  height: calc(100vh - 80px);
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  div:first-child {
    p:first-child {
      font-weight: 600;
      margin-right: 1rem;
    }
  }

  div:last-child {
    display: none;
    position: absolute;
    color: ${({ theme }) => theme.colors.grey};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
    cursor: pointer;
    transition: 100ms;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  &:hover div:last-child {
    display: block;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  cursor: pointer;
`;
