import { NoteCardWrapper, ActionButton } from "../../styles";
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
      <div>
        <h1>{title}</h1>
        <div>
          <BiEdit
            style={ActionButton}
            size={22}
            onClick={() => handleEditNote(id)}
          />
          <BiTrash
            style={ActionButton}
            size={22}
            onClick={() => handleDeleteNote(id)}
          />
        </div>
      </div>

      <p>{description}</p>
    </NoteCardWrapper>
  );
}
