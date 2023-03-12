import { useState } from "react";

export default function useNotes() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
  });

  function handleAddNote(e: any) {
    e.preventDefault();
    console.log(newNote);
    setIsModalOpen(false);
    setNewNote({
      title: "",
      description: "",
    });
  }

  return {
    setIsModalOpen,
    isModalOpen,
    newNote,
    setNewNote,
    handleAddNote,
  };
}
