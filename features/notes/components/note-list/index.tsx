'use client';

import NoteItem from "@/features/notes/components/note-item";
import { useDeleteNoteMutation } from "@/features/notes/redux/noteApi";
import { useAppSelector } from "@/shared/store";
import useNotes from "@/features/notes/hooks/useNotes";

const NoteList = () => {
  const activeSearchFilter = useAppSelector(state => state.note.activeSearchFilter);
  const { notes, isLoading } = useNotes(activeSearchFilter);
  const [deleteNote] = useDeleteNoteMutation();

  return (
    <>
      {isLoading ? <h2>Loading...</h2> : notes ? (
        <ul>
          {notes.map(note => (
            <NoteItem note={note} key={note.id} deleteNote={() => deleteNote(note.id)}/>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default NoteList;