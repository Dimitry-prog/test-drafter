'use client';
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "@/shared/store";
import { noteActions } from "@/features/notes/redux/noteSlice";

const SearchNote = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();
  // useGetNotesBySearchQuery(search)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(noteActions.setSearch(search));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={search} onChange={handleChange} type='text' placeholder='Search'/>
      <button type='submit'>🔍</button>
    </form>
  );
};

export default SearchNote;