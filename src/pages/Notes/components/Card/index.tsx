import {
  NoteCardDescription,
  NoteCardTitle,
  NoteCardWrapper,
} from "../../styles";
import { BiEdit, BiTrash } from "react-icons/bi";
import { INoteCardProps } from "../../types";

export default function NoteCard({
  note,
  handleEditNote,
  handleDeleteNote,
}: INoteCardProps) {
  const { id, title, description } = note;
  return (
    <NoteCardWrapper>
      <NoteCardTitle>{title}</NoteCardTitle>
      <NoteCardDescription>{description}</NoteCardDescription>
      <BiEdit size={20} onClick={() => handleEditNote(id)} />
      <BiTrash size={20} onClick={() => handleDeleteNote(id)} />
    </NoteCardWrapper>
  );
}
