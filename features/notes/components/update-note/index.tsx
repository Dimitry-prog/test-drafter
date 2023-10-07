'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import { NoteParamsType, NoteType, NoteUpdateType } from "@/features/notes/types";
import { useGetNoteQuery, useUpdateNoteMutation } from "@/features/notes/redux/noteApi";
import { useParams, useRouter } from "next/navigation";

const UpdateNote = () => {
  const params = useParams<NoteParamsType>();
  const { data: note } = useGetNoteQuery(params.noteId);
  const [updateNote] = useUpdateNoteMutation();
  const [values, setValues] = useState<Omit<NoteType, "id">>({
    title: note?.title || '',
    description: note?.description || ''
  });
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const note: NoteUpdateType = {
      id: params.noteId,
      body: {
        title: values.title,
        description: values.description
      }
    };

    await updateNote(note);
    router.push('/notes');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={values.title} onChange={handleChange} name='title' type='text'/>
      <textarea value={values.description} onChange={handleChange} name='description'/>
      <button type='submit'>🆕</button>
    </form>
  );
};

export default UpdateNote;