import { useState } from "react";
import { useNotesService } from "../../../services/notes";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { NoteColors } from "../../../static";
import { Note } from "../../../@types";
import { IUseNotesProps } from "../types";

export function useNotes({
  handleNoteModalOpen,
  handleConfirmModalOpen,
}: IUseNotesProps) {
  const { storeValue, getStoredValue } = useLocalStorage();
  const [currentNote, setCurrentNote] = useState<Note>({
    id: "",
    title: "",
    description: "",
    color: NoteColors[0],
    updatedAt: "",
  });
  const [viewMode, setViewMode] = useState<number>(
    getStoredValue("viewMode") || 3
  );

  const { saveNote, updateNoteById, deleteNoteById, getNoteById, getNotes } =
    useNotesService();

  const [notes, setNotes] = useState<Note[]>(getNotes());

  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter((note) => {
    const { title, description } = note;
    return (
      title.toLowerCase().includes(search.toLowerCase()) ||
      description?.toLowerCase().includes(search.toLowerCase())
    );
  });

  function handleViewMode() {
    const current = viewMode === 3 ? 1 : viewMode + 1;
    storeValue("viewMode", current);
    setViewMode(current);
  }

  function refreshNotes() {
    setNotes(getNotes());
  }

  function handleAddNote() {
    handleNoteModalOpen();
    clearForm();
  }

  function handleNoteForm({ target }: any, field: string) {
    const { value } = target;
    setCurrentNote({
      ...currentNote,
      [field]: value,
    });
  }

  function handleSaveNote(e: FormDataEvent) {
    e.preventDefault();
    if (currentNote.id) {
      updateNoteById(currentNote.id, currentNote);
    } else {
      saveNote(currentNote);
    }
    handleNoteModalOpen();
    refreshNotes();
  }

  function handleEditNote(id: string) {
    setCurrentNote(getNoteById(id));
    handleNoteModalOpen();
  }

  function onDeleteNote(id: string) {
    handleConfirmModalOpen({ id });
  }

  function handleDeleteNote(id: string) {
    deleteNoteById(id);
    refreshNotes();
  }

  function clearForm() {
    setCurrentNote({
      id: "",
      title: "",
      description: "",
      color: NoteColors[0],
      updatedAt: "",
    });
  }

  return {
    handleAddNote,
    handleNoteForm,
    handleSaveNote,
    handleEditNote,
    handleDeleteNote,
    handleViewMode,
    onDeleteNote,
    viewMode,
    search,
    setSearch,
    notes: filteredNotes,
    currentNote,
  };
}
