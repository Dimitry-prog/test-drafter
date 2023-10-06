import { NoteType } from "@/features/notes/types";

type NoteSingleProps = {
  note: NoteType;
}

const Note = ({ note }: NoteSingleProps) => {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
    </div>
  );
};

export default Note;