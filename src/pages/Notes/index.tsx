import { NoteListWrapper, ActionsWrapper } from "./styles";
import { theme } from "../../theme";
import { FiPlusCircle, FiGrid } from "react-icons/fi";
import { BsInbox } from "react-icons/bs";
import { CustomButton } from "../../components/CustomButton";
import { NoteModal } from "./components/NoteModal";
import { NoteCard } from "./components/NoteCard";
import { Empty } from "../../components/Empty";
import { ConfirmModal } from "./components/ConfirmModal";
import { useCustomModal } from "../../components/CustomModal/hooks/useCustomModal";
import { useNotes } from "./hooks/useNotes";
import { Note } from "../../@types";

export function NotesPage() {
  const { isModalOpen: isNoteModalOpen, handleModalOpen: handleNoteModalOpen } =
    useCustomModal();

  const {
    isModalOpen: isConfirmModalOpen,
    handleModalOpen: handleConfirmModalOpen,
    modalProps: confirmModalProps,
  } = useCustomModal();

  const {
    handleSaveNote,
    handleNoteForm,
    handleEditNote,
    handleAddNote,
    handleDeleteNote,
    currentNote,
    handleViewMode,
    viewMode,
    search,
    setSearch,
    notes,
    onDeleteNote,
  } = useNotes({ handleNoteModalOpen, handleConfirmModalOpen });

  const hasNotes = notes.length > 0;
  return (
    <>
      <ActionsWrapper>
        <CustomButton
          variant="solid"
          title="Add"
          onClick={handleAddNote}
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

      {!hasNotes ? (
        <Empty
          defaultMessage="No notes yet"
          icon={<BsInbox size={80} color={theme.colors.lightGrey} />}
          extra={search ? `No notes found for "${search}"` : ""}
        />
      ) : (
        <NoteListWrapper viewMode={viewMode}>
          {notes.map((note: Note) => (
            <NoteCard
              note={note}
              key={note.id}
              handleEditNote={handleEditNote}
              onDeleteNote={onDeleteNote}
            />
          ))}
        </NoteListWrapper>
      )}

      <NoteModal
        handleSaveNote={handleSaveNote}
        handleNoteForm={handleNoteForm}
        handleModalOpen={handleNoteModalOpen}
        isModalOpen={isNoteModalOpen}
        currentNote={currentNote}
      />

      <ConfirmModal
        isModalOpen={isConfirmModalOpen}
        handleModalOpen={handleConfirmModalOpen}
        onConfirm={() => handleDeleteNote(confirmModalProps.id)}
      />
    </>
  );
}
