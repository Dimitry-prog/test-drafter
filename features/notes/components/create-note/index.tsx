'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import { NoteType } from "@/features/notes/types";
import { useAddNewNoteMutation } from "@/features/notes/redux/noteApi";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";

const CreateNote = () => {
  const [values, setValues] = useState<Omit<NoteType, "id">>({
    title: '',
    description: ''
  });
  const [addNewPost, { isLoading }] = useAddNewNoteMutation();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newNote: NoteType = {
      id: uuidv4(),
      title: values.title,
      description: values.description
    };

    await addNewPost(newNote);
    router.push('/notes');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={values.title} onChange={handleChange} name='title' type='text'/>
      <textarea onChange={handleChange} name='description'/>
      <button type='submit'>➕</button>
    </form>
  );
};

export default CreateNote;