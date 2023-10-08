'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
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

  useEffect(() => {
    const forms = document.querySelectorAll<HTMLFormElement>('.needs-validation')

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }, []);

  return (
    <form onSubmit={handleSubmit} className='d-flex flex-column gap-4 needs-validation' noValidate>
      <div className="input-group">
        <span className="input-group-text" id="basic-addon1">Title</span>
        <input value={values.title} onChange={handleChange} name='title' disabled={isLoading} type="text"
               className="form-control"
               placeholder="Note title" aria-label="Username"
               aria-describedby="basic-addon1" required/>
        <div className="invalid-feedback">
          Please provide a title.
        </div>
      </div>
      <div className="input-group">
        <span className="input-group-text">Describe your note</span>
        <textarea onChange={handleChange} name='description' disabled={isLoading} className="form-control"
                  aria-label="With textarea" rows={6} required/>
        <div className="invalid-feedback">
          Please provide a description.
        </div>
      </div>
      <button type='submit' disabled={isLoading} className='align-self-md-end btn btn-primary'>Create note</button>
    </form>
  );
};

export default CreateNote;