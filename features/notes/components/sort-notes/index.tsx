'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { NoteSortType } from "@/features/notes/types";
import { useAppDispatch } from "@/shared/store";
import { noteActions } from "@/features/notes/redux/noteSlice";
import useDebounce from "@/shared/hooks/useDebounce";

const SortNotes = () => {
  const [values, setValues] = useState<NoteSortType>({
    field: 'title',
    order: 'asc'
  })
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(values, 500);

  const handleFieldChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    dispatch(noteActions.setActiveSearchFilter('sort'));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(noteActions.setSortQuery(values));
  }

  useEffect(() => {
    dispatch(noteActions.setSortQuery(debouncedValue));
  }, [debouncedValue]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fieldSelect">Sort field by:</label>
        <select defaultValue={values.field} onChange={handleFieldChange} name='field'>
          <option value='' disabled>Sort field by:</option>
          <option value="title">Title</option>
          <option value="description">Description</option>
        </select>
      </div>
      <div>
        <label htmlFor="fieldSelect">Sort order by:</label>
        <select defaultValue={values.order} onChange={handleFieldChange} name='order'>
          <option value='' disabled>Sort order by:</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
      <button type='submit'>🔍</button>
    </form>
  );
};

export default SortNotes;