import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 0;
`;

export const NoteCardWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 1em;
  border-radius: 0.5em;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const NoteCardTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5em;
`;

export const NoteCardDescription = styled.p`
  font-size: 1em;
  font-weight: 400;
  margin: 0;
  margin-bottom: 0.5em;
`;
