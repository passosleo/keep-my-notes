import CustomModal from "../../../../components/CustomModal";
import CustomTextInput from "../../../../components/CustomTextInput";
import { INotesModalProps } from "../../types";

export default function NotesModal({
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
        title="Adicionar nota"
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
      </CustomModal>
    </form>
  );
}
