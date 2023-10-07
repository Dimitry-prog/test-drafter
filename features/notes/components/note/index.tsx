'use client';

import { useParams } from "next/navigation";
import { useGetNoteQuery } from "@/features/notes/redux/noteApi";
import { NoteParamsType } from "@/features/notes/types";
import Link from "next/link";

const Note = () => {
  const params = useParams<NoteParamsType>();
  const { data: note } = useGetNoteQuery(params.noteId);

  return (
    <>
      {note ? (
        <>
          <h2>{note.title}</h2>
          <p>{note.description}</p>
          <Link href={`/notes/${params.noteId}/edit`}>✏️</Link>
        </>
      ) : <h2>We can not find this note :(</h2>}
    </>
  );
};

export default Note;