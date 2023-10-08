'use client';
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "@/shared/store";
import { noteActions } from "@/features/notes/redux/noteSlice";
import useDebounce from "@/shared/hooks/useDebounce";

const SearchNote = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(search, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    dispatch(noteActions.setActiveSearchFilter('search'));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(noteActions.setSearchQuery(debouncedValue));
  }

  useEffect(() => {
    dispatch(noteActions.setSearchQuery(debouncedValue));
  }, [debouncedValue]);

  return (
    <form onSubmit={handleSubmit}>
      <input value={search} onChange={handleChange} type='text' placeholder='Search'/>
      <button type='submit'>🔍</button>
    </form>
  );
};

export default SearchNote;