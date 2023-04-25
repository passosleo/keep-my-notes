import { CustomButton } from "../../components/CustomButton";
import { NoteListWrapper, ActionsWrapper } from "./styles";
import { FiPlusCircle, FiGrid } from "react-icons/fi";
import { useNotes } from "./hooks/useNotes";
import { NoteModal } from "./components/Modal";
import { NoteCard } from "./components/Card";
import { Empty } from "../../components/Empty";
import { theme } from "../../theme";
import { BsInbox } from "react-icons/bs";
import { Note } from "../../@types";

export function NotesPage() {
  const {
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

      {filteredNotes.length === 0 ? (
        <Empty
          defaultMessage="No notes yet"
          icon={<BsInbox size={80} color={theme.colors.lightGrey} />}
          extra={search ? `No notes found for "${search}"` : ""}
        />
      ) : (
        <NoteListWrapper viewMode={viewMode}>
          {filteredNotes.map((note: Note) => {
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
      )}

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
