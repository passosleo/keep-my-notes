import CustomButton from "../../components/CustomButton";
import { NoteListWrapper, ActionsWrapper } from "./styles";
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
    search,
    setSearch,
    filteredNotes,
  } = useNotes();

  return (
    <>
      <ActionsWrapper>
        <CustomButton
          variant="solid"
          title="Add"
          onClick={handleModalOpen}
          rightIcon={<FiPlusCircle size={20} />}
          height="2rem"
        />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
        <CustomButton
          variant="solid"
          onClick={handleViewMode}
          width="2rem"
          height="2rem"
          rightIcon={<FiGrid size={20} />}
        />
      </ActionsWrapper>

      <NoteListWrapper viewMode={viewMode}>
        {(filteredNotes ?? notes)?.map((note: Note) => {
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
