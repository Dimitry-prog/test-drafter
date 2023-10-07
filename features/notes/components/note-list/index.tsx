'use client'
import NoteItem from "@/features/notes/components/note-item";
import { useDeleteNoteMutation, useGetNotesQuery } from "@/features/notes/redux/noteApi";
import { useAppSelector } from "@/shared/store";

// type NotesListProps = {
//   notes: NoteType[]
// }

const NoteList = () => {
  const searchQuery = useAppSelector(state => state.note.searchQuery);
  const { data: notes, isLoading } = useGetNotesQuery(searchQuery);
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