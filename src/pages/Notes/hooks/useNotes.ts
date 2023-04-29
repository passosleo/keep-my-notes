import { useState } from "react";
import { useNotesService } from "../../../services/notes";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { NoteColors } from "../../../static";
import { Note } from "../../../@types";

export function useNotes() {
  const { storeValue, getStoredValue } = useLocalStorage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note>({
    id: "",
    title: "",
    description: "",
    color: NoteColors[0],
    updatedAt: "",
  });
  const [viewMode, setViewMode] = useState<number>(
    getStoredValue("viewMode") || 4
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
    const current = viewMode === 4 ? 1 : viewMode + 1;
    storeValue("viewMode", current);
    setViewMode(current);
  }

  function refreshNotes() {
    setNotes(getNotes());
  }

  function handleModalOpen() {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      clearForm();
    }
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
    handleModalOpen();
    refreshNotes();
  }

  function handleEditNote(id: string) {
    setCurrentNote(getNoteById(id));
    handleModalOpen();
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
    isModalOpen,
    handleNoteForm,
    handleSaveNote,
    notes,
    handleModalOpen,
    currentNote,
    handleEditNote,
    handleDeleteNote,
    handleViewMode,
    viewMode,
    search,
    setSearch,
    filteredNotes,
  };
}
