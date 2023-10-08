import { useGetNotesQuery } from "@/features/notes/redux/noteApi";
import { NoteFiltrationType, NoteType } from "@/features/notes/types";
import { useEffect, useState } from "react";
import { NOTE_FILTER_QUERY, NOTE_SEARCH_QUERY, NOTE_SORT_QUERY } from "@/features/notes/libs/constants";
import { useAppSelector } from "@/shared/store";

const useNotes = (activeSearchFilter: NoteFiltrationType): { notes: NoteType[], isLoading: boolean } => {
  const searchQuery = useAppSelector(state => state.note.searchQuery);
  const filterQuery = useAppSelector(state => state.note.filterQuery);
  const sortQuery = useAppSelector(state => state.note.sortQuery);

  let typeQuery = null;

  switch (activeSearchFilter) {
    case "search":
      typeQuery = NOTE_SEARCH_QUERY(searchQuery)
      break;
    case "filter":
      typeQuery = NOTE_FILTER_QUERY(filterQuery);
      break;
    case "sort":
      typeQuery = NOTE_SORT_QUERY(sortQuery);
      break;
    default:
      typeQuery = '';
  }

  const { data, isLoading } = useGetNotesQuery(typeQuery);
  const [notes, setNotes] = useState<NoteType[]>(data || []);

  useEffect(() => {
    if (data) {
      setNotes(data)
    }
  }, [activeSearchFilter, data])

  return {
    notes, isLoading
  };
};

export default useNotes;