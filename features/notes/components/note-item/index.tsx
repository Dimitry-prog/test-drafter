import { NoteType } from "@/features/notes/types";
import Link from "next/link";

type NoteProps = {
  note: NoteType
}

const NoteItem = ({ note }: NoteProps) => {
  return (
    <li>
      <Link href={`notes/${note.id}`}>
        <h2>{note.title}</h2>
        <p>{note.description}</p>
      </Link>
    </li>
  );
};

export default NoteItem;