'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { NoteFilterType } from "@/features/notes/types";
import { useAppDispatch } from "@/shared/store";
import { noteActions } from "@/features/notes/redux/noteSlice";
import useDebounce from "@/shared/hooks/useDebounce";

const FilterNotes = () => {
  const [values, setValues] = useState<NoteFilterType>({
    field: 'title',
    search: ''
  })
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(values, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value.toLowerCase()
    }));
    dispatch(noteActions.setActiveSearchFilter('filter'));
  };

  const handleFieldChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(noteActions.setFilterQuery(values));
  }

  useEffect(() => {
    dispatch(noteActions.setFilterQuery(debouncedValue));
  }, [debouncedValue]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={values.search}
        onChange={handleChange}
        name='search'
        type="text"
        placeholder={`Search by ${values.field}...`}
      />
      <div>
        <label htmlFor="fieldSelect">Search by:</label>
        <select defaultValue={values.field} onChange={handleFieldChange} name='field'>
          <option value='' disabled>Search by:</option>
          <option value="title">Title</option>
          <option value="description">Description</option>
        </select>
      </div>
      <button type='submit'>🔍</button>
    </form>
  );
};

export default FilterNotes;