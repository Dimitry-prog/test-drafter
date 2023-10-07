import { NoteType } from "@/features/notes/types";
import Link from "next/link";

type NoteProps = {
  note: NoteType
  deleteNote: () => void;
}

const NoteItem = ({ note, deleteNote }: NoteProps) => {

  return (
    <li>
      <Link href={`notes/${note.id}`}>
        <h2>{note.title}</h2>
        <p>{note.description}</p>
      </Link>
      <button onClick={deleteNote} type='button'>🗑️</button>
    </li>
  );
};

export default NoteItem;