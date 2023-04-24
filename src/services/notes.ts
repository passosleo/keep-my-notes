import { Note } from "../@types";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

export default function useNotesService() {
  const { storeValue, getStoredValue } = useLocalStorage();

  function saveNote(note: Note) {
    const id = uuidv4();
    const previousNotes = getStoredValue("notes", []);
    storeValue("notes", [...previousNotes, { ...note, id }]);
  }

  function getNotes() {
    return getStoredValue("notes", []) as Note[];
  }

  function getNoteById(id: string) {
    const notes = getNotes();
    return notes.find((note: Note) => note.id === id) as Note;
  }

  function updateNoteById(id: string, note: Note) {
    const notes = getNotes();
    const noteIndex = notes.findIndex((note: Note) => note.id === id);
    notes[noteIndex] = note;
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
