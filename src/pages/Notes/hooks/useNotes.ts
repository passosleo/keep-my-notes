import { useState, useEffect } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function useNotes() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
  });
  const { storeValue, getStoredValue, clearStorage } = useLocalStorage();
  const notes = getStoredValue("notes");

  function handleAddNote(e: any) {
    e.preventDefault();
    console.log(newNote);
    const previousNotes = getStoredValue("notes");
    storeValue("notes", [...previousNotes, newNote]);
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
    notes,
  };
}
