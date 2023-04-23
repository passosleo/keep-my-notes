import styled from "styled-components";
import { IStyledProps } from "./types";

export const AddButtonWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoteCardWrapper = styled.div`
  padding: 1em;
  border-radius: 0.5em;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  height: fit-content;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 1.5em;
    font-weight: 600;
    margin: 0;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1em;
    font-weight: 400;
    margin: 0;
    margin-bottom: 0.5em;
  }
`;

export const NoteListWrapper = styled.div<IStyledProps>`
  display: grid;
  grid-template-columns: repeat(${({ viewMode }) => viewMode}, 1fr);
  gap: 1em;
`;

export const ViewModeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 0;
`;

export const ActionButton = {
  margin: "0 3",
  cursor: "pointer",
};
