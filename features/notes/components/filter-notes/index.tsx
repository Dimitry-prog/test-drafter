'use client';

import { ChangeEvent, FormEvent, MouseEventHandler, useEffect, useState } from "react";
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

  const handleResetFiltration: MouseEventHandler<HTMLButtonElement> = (e) => {
    setValues({
      field: 'title',
      search: ''
    });
    dispatch(noteActions.setActiveSearchFilter(null));
  }

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
  }

  useEffect(() => {
    dispatch(noteActions.setFilterQuery(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className="btn-group">
      <button onClick={handleResetFiltration} className="btn btn-secondary dropdown-toggle" type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false" data-bs-auto-close="outside" data-bs-display="static">
        Filter
      </button>
      <form onSubmit={handleSubmit} className='px-2 dropdown-menu w-100 dropdown-menu-end'>
        <input
          value={values.search}
          onChange={handleChange}
          name='search'
          type="text"
          placeholder={`Search by ${values.field}...`}
          className="form-control"
        />
        <select value={values.field} onChange={handleFieldChange} name='field'
                className="mt-3 form-select form-select-sm" aria-label="Search by:">
          <option value='' disabled>Search by:</option>
          <option value="title">Title</option>
          <option value="description">Description</option>
        </select>
      </form>
    </div>
  );
};

export default FilterNotes;