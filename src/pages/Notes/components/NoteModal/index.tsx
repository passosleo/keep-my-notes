import { CustomModal } from "../../../../components/CustomModal";
import { CustomTextInput } from "../../../../components/CustomTextInput";
import { NoteColors } from "../../../../static";
import { ColorsWrapper, NoteColorRadioInput } from "../../styles";
import { INoteModalProps } from "../../types";

export function NoteModal({
  handleSaveNote,
  handleNoteForm,
  handleModalOpen,
  isModalOpen,
  currentNote,
}: INoteModalProps) {
  return (
    <form onSubmit={(e) => handleSaveNote(e)}>
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => handleModalOpen()}
        footer={true}
        title={currentNote.id ? "Edit note" : "Add note"}
        closable={true}
      >
        <CustomTextInput
          label="Title"
          placeholder="Enter a title"
          onChange={({ target }) => handleNoteForm({ target }, "title")}
          maxLength={50}
          width="280px"
          required
          value={currentNote.title}
        />
        <CustomTextInput
          label="Description"
          type="textarea"
          placeholder="Enter a description"
          onChange={({ target }) => handleNoteForm({ target }, "description")}
          size="medium"
          width="280px"
          value={currentNote.description}
        />
        <ColorsWrapper>
          {NoteColors.map((color) => (
            <NoteColorRadioInput key={color} noteColor={color}>
              <label htmlFor={color} />
              <input
                type="radio"
                name="color"
                id={color}
                value={color}
                onChange={({ target }) => handleNoteForm({ target }, "color")}
                checked={currentNote.color === color}
              />
            </NoteColorRadioInput>
          ))}
        </ColorsWrapper>
      </CustomModal>
    </form>
  );
}
