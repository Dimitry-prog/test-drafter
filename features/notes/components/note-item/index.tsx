import { NoteType } from "@/features/notes/types";
import Link from "next/link";

type NoteProps = {
  note: NoteType
}

const NoteItem = ({ note }: NoteProps) => {

  return (
    <li className="col">
      <Link href={`notes/${note.id}`}>
        <div className="card h-100">
          <h3 className="card-header">
            {note.title}
          </h3>
          <div className="card-body">
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default NoteItem;