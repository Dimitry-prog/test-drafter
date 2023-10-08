'use client';
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "@/shared/store";
import { noteActions } from "@/features/notes/redux/noteSlice";
import useDebounce from "@/shared/hooks/useDebounce";

const SearchNote = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(search, 500);

  const handleResetFiltration = () => {
    dispatch(noteActions.setActiveSearchFilter(null));
    setSearch('');
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    dispatch(noteActions.setActiveSearchFilter('search'));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  useEffect(() => {
    dispatch(noteActions.setSearchQuery(debouncedValue));
  }, [debouncedValue]);

  return (
    <div onClick={handleResetFiltration} className="btn-group">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false" data-bs-auto-close="outside" data-bs-display="static">
        Search
      </button>
      <form onSubmit={handleSubmit} className='px-2 dropdown-menu w-100 dropdown-menu-end'>
        <input value={search} onChange={handleChange} type='text' placeholder='Search' className="form-control"/>
      </form>
    </div>

  );
};

export default SearchNote;