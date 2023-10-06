'use client';
import { useEffect, useState } from "react";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchedNotes = async () => {
      fetch('http://localhost:3001/notes')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setNotes(data)
        })
        .catch(error => console.error(error));
    }
    fetchedNotes()
  }, [])

  return (
    <div>
      {JSON.stringify(notes)}
    </div>
  );
};

export default NotesList;