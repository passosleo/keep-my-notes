import { Note } from "../@types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

export function useNotesService() {
  const { storeValue, getStoredValue } = useLocalStorage();

  function saveNote(note: Note) {
    const id = uuidv4();
    const updatedAt = new Date().toISOString();
    const previousNotes = getStoredValue("notes", []);
    storeValue("notes", [...previousNotes, { ...note, id, updatedAt }]);
  }

  function getNotes() {
    const notes: Note[] = getStoredValue("notes", []);
    return notes.sort((a: Note, b: Note) => {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
  }

  function getNoteById(id: string) {
    const notes = getNotes();
    return notes.find((note: Note) => note.id === id) as Note;
  }

  function updateNoteById(id: string, note: Note) {
    const notes = getNotes();
    const noteIndex = notes.findIndex((note: Note) => note.id === id);
    const updatedAt = new Date().toISOString();
    notes[noteIndex] = {
      ...note,
      updatedAt,
    };
    storeValue("notes", notes);
  }

  function deleteNoteById(id: string) {
    const notes = getNotes();
    const noteIndex = notes.findIndex((note: Note) => note.id === id);
    notes.splice(noteIndex, 1);
    storeValue("notes", notes);
  }

  return {
    saveNote,
    getNoteById,
    getNotes,
    updateNoteById,
    deleteNoteById,
  };
}
