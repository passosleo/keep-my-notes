import CustomButton from "../../components/CustomButton";
import {
  AddButtonWrapper,
  NoteListWrapper,
  ViewModeButtonWrapper,
} from "./styles";
import { FiPlusCircle, FiGrid } from "react-icons/fi";
import useNotes from "./hooks/useNotes";
import NoteModal from "./components/Modal";
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
    handleViewMode,
    viewMode,
  } = useNotes();
  return (
    <>
      <AddButtonWrapper>
        <CustomButton
          variant="solid"
          title="Adicionar nota"
          onClick={handleModalOpen}
          rightIcon={<FiPlusCircle size={20} />}
          width="13rem"
          height="3rem"
        />
      </AddButtonWrapper>

      <ViewModeButtonWrapper>
        <CustomButton
          variant="solid"
          onClick={handleViewMode}
          rightIcon={<FiGrid size={20} />}
        />
      </ViewModeButtonWrapper>

      <NoteListWrapper viewMode={viewMode}>
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
      </NoteListWrapper>

      <NoteModal
        handleSaveNote={handleSaveNote}
        handleNoteForm={handleNoteForm}
        handleModalOpen={handleModalOpen}
        isModalOpen={isModalOpen}
        currentNote={currentNote}
      />
    </>
  );
}
