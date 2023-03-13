import CustomButton from "../../components/CustomButton";
import { Wrapper } from "./styles";
import { FiPlusCircle } from "react-icons/fi";
import useNotes from "./hooks/useNotes";
import NotesModal from "./components/Modal";
import { Note } from "../../types";
import NoteCard from "./components/Card";

export default function Notes() {
  const {
    notes,
    handleModalOpen,
    handleSaveNote,
    handleNoteForm,
    isModalOpen,
    currentNote,
    handleEditNote,
    handleDeleteNote,
  } = useNotes();
  return (
    <>
      <Wrapper>
        <CustomButton
          variant="solid"
          title="Adicionar nota"
          onClick={() => handleModalOpen()}
          disabled={false}
          rightIcon={<FiPlusCircle size={20} />}
          width="13rem"
          height="3rem"
        />
      </Wrapper>

      {notes?.map((note: Note) => {
        return (
          <NoteCard
            note={note}
            key={note.id}
            handleEditNote={handleEditNote}
            handleDeleteNote={handleDeleteNote}
          />
        );
      })}

      <NotesModal
        handleSaveNote={handleSaveNote}
        handleNoteForm={handleNoteForm}
        handleModalOpen={handleModalOpen}
        isModalOpen={isModalOpen}
        currentNote={currentNote}
      />
    </>
  );
}
