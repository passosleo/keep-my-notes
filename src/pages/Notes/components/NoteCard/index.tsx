import { NoteCardWrapper, ActionButton, NoteDateWrapper } from "../../styles";
import { BiEdit, BiTrash } from "react-icons/bi";
import { INoteCardProps } from "../../types";
import moment from "moment";

export function NoteCard({
  note,
  handleEditNote,
  onDeleteNote,
}: INoteCardProps) {
  const { id, title, description, color, updatedAt } = note;
  const updated = moment(updatedAt);
  return (
    <NoteCardWrapper noteColor={color}>
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
            onClick={() => onDeleteNote(id)}
          />
        </div>
      </div>
      <p>{description}</p>
      <NoteDateWrapper>
        <p>{`updated on ${updated.format("DD.MM.YY")} at ${updated.format(
          "HH:mm"
        )}`}</p>
      </NoteDateWrapper>
    </NoteCardWrapper>
  );
}
