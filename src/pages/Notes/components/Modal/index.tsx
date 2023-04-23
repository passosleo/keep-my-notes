import CustomModal from "../../../../components/CustomModal";
import CustomTextInput from "../../../../components/CustomTextInput";
import { NoteColors } from "../../../../static";
import { ColorsWrapper, NoteColorRadioInput } from "../../styles";
import { INotesModalProps } from "../../types";

export default function NoteModal({
  handleSaveNote,
  handleNoteForm,
  handleModalOpen,
  isModalOpen,
  currentNote,
}: INotesModalProps) {
  return (
    <form onSubmit={(e) => handleSaveNote(e)}>
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => handleModalOpen()}
        footer={true}
        title={currentNote.id ? "Editar nota" : "Adicionar nota"}
        closable={true}
      >
        <CustomTextInput
          label="Título"
          placeholder="Insira um título"
          onChange={({ target }) => handleNoteForm({ target }, "title")}
          maxLength={25}
          width="280px"
          required
          value={currentNote.title}
        />
        <CustomTextInput
          label="Descrição"
          type="textarea"
          placeholder="Insira uma descrição"
          onChange={({ target }) => handleNoteForm({ target }, "description")}
          size="medium"
          width="280px"
          value={currentNote.description}
        />
        <ColorsWrapper>
          {NoteColors.map((color) => {
            return (
              <NoteColorRadioInput noteColor={color}>
                <label key={color} htmlFor={color} />
                <input
                  type="radio"
                  name="color"
                  id={color}
                  value={color}
                  onChange={({ target }) => handleNoteForm({ target }, "color")}
                  checked={
                    currentNote.color
                      ? currentNote.color === color
                      : color === NoteColors[0]
                  }
                  key={color}
                />
              </NoteColorRadioInput>
            );
          })}
        </ColorsWrapper>
      </CustomModal>
    </form>
  );
}
