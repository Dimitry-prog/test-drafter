'use client';

import { useParams, useRouter } from "next/navigation";
import { useDeleteNoteMutation, useGetNoteQuery } from "@/features/notes/redux/noteApi";
import { NoteParamsType } from "@/features/notes/types";
import Link from "next/link";

const Note = () => {
  const params = useParams<NoteParamsType>();
  const { data: note } = useGetNoteQuery(params.noteId);
  const [deleteNote] = useDeleteNoteMutation();
  const router = useRouter();

  const handleDeleteNote = async () => {
    await deleteNote(params.noteId);
    router.replace('/notes');
  }

  return (
    <>
      {note ? (
        <div className="card">
          <h2 className="card-header">
            {note.title}
          </h2>
          <div className="card-body">
            <p className="card-text">{note.description}</p>
          </div>
          <div className="card-footer d-flex gap-2 justify-content-between">
            <Link href="/notes" className='btn btn-light btn-sm '>🔙</Link>
            <div className="d-flex gap-2 align-items-center justify-content-end">
              <Link href={`/notes/${params.noteId}/edit`} className='btn btn-secondary btn-sm'>✏️</Link>
              <button onClick={handleDeleteNote} type='button' className='btn btn-secondary btn-sm'>🗑️
              </button>
            </div>
          </div>
        </div>
      ) : <h2>We can not find this note :(</h2>}
    </>
  );
};

export default Note;