'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
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
  }, [])

  return (
    <form onSubmit={handleSubmit} className='d-flex flex-column gap-4 needs-validation' noValidate>
      <div className="input-group">
        <span className="input-group-text" id="basic-addon1">Title</span>
        <input value={values.title} onChange={handleChange} name='title' type="text" className="form-control"
               placeholder="Note title" aria-label="Username"
               aria-describedby="basic-addon1" required/>
        <div className="invalid-feedback">
          Please provide a title.
        </div>
      </div>
      <div className="input-group">
        <span className="input-group-text">Describe your note</span>
        <textarea value={values.description} onChange={handleChange} name='description' className="form-control"
                  aria-label="With textarea" rows={6} required/>
        <div className="invalid-feedback">
          Please provide a description.
        </div>
      </div>
      <button type='submit' className='align-self-md-end btn btn-primary'>Edit note</button>
    </form>
  );
};

export default UpdateNote;