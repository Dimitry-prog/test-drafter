'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import { NoteType } from "@/features/notes/types";
import { updateNoteById } from "@/features/notes/libs/updateNoteById";

const CreateNote = () => {
  const [values, setValues] = useState<Omit<NoteType, "id">>({
    title: '',
    description: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newNote = {
      id: '1245769768tyit',
      title: values.title,
      description: values.description
    };
    // await createNote(newNote);
    // await deleteNoteById(newNote.id)
    const data = {
      id: newNote.id,
      body: newNote
    }
    await updateNoteById(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={values.title} onChange={handleChange} name='title' type='text'/>
      <textarea onChange={handleChange} name='description'/>
    </form>
  );
};

export default CreateNote;