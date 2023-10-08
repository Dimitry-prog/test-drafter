'use client';

import NoteItem from "@/features/notes/components/note-item";
import { useAppSelector } from "@/shared/store";
import useNotes from "@/features/notes/hooks/useNotes";

const NoteList = () => {
  const activeSearchFilter = useAppSelector(state => state.note.activeSearchFilter);
  const { notes, isLoading } = useNotes(activeSearchFilter);

  return (
    <>
      {isLoading ? <h2>Loading...</h2> : notes ? (
        <ul
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {notes.map(note => (
            <NoteItem note={note} key={note.id}/>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default NoteList;