'use client';

import { ChangeEvent, FormEvent, MouseEventHandler, useEffect, useState } from "react";
import { NoteSortType } from "@/features/notes/types";
import { useAppDispatch } from "@/shared/store";
import { noteActions } from "@/features/notes/redux/noteSlice";
import useDebounce from "@/shared/hooks/useDebounce";

const SortNotes = () => {
  const [values, setValues] = useState<NoteSortType>({
    field: '',
    order: 'asc'
  })
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(values, 500);

  const handleResetFiltration: MouseEventHandler<HTMLButtonElement> = (e) => {
    setValues({
      field: '',
      order: 'asc'
    });
    dispatch(noteActions.setActiveSearchFilter(null));
  }

  const handleFieldChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    dispatch(noteActions.setActiveSearchFilter('sort'));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  useEffect(() => {
    dispatch(noteActions.setSortQuery(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className="btn-group">
      <button onClick={handleResetFiltration} className="w-100 btn btn-secondary dropdown-toggle" type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false" data-bs-auto-close="outside" data-bs-display="static">
        Sort
      </button>
      <form onSubmit={handleSubmit} className='px-2 dropdown-menu w-100  dropdown-menu-end'>
        <select value={values.field} onChange={handleFieldChange} name='field'
                className="form-select mb-3 form-select-sm" aria-label="Sort field by:">
          <option value='' disabled>Sort field by:</option>
          <option value="title">Title</option>
          <option value="description">Description</option>
        </select>
        <select value={values.order} onChange={handleFieldChange} name='order'
                className="form-select form-select-sm" aria-label="Sort order by:">
          <option value='' disabled>Sort order by:</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </form>
    </div>
  );
};

export default SortNotes;