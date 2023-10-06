import { NoteType } from "@/features/notes/types";
import NoteItem from "@/features/notes/components/note-item";

type NotesListProps = {
  notes: NoteType[]
}

const NoteList = ({ notes }: NotesListProps) => {

  return (
    <ul>
      {notes.map(note => (
        <NoteItem note={note} key={note.id}/>
      ))}
    </ul>
  );
};

export default NoteList;