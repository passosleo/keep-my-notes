import { Note } from "./../../types/index";

export interface INotesModalProps {
  isModalOpen: boolean;
  handleNoteForm: (e: any, field: string) => void;
  handleSaveNote: (e: any) => void;
  handleModalOpen: () => void;
  currentNote: Note;
}

export interface INoteCardProps {
  note: Note;
  handleEditNote: (id: string) => void;
  handleDeleteNote: (id: string) => void;
}
