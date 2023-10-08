import { NoteFilterType, NoteSortType } from "@/features/notes/types";

export const NOTE_SEARCH_QUERY = (search: string) => `q=${search}`;
export const NOTE_FILTER_QUERY = (filterQuery: NoteFilterType) => `${filterQuery.field}_like=${filterQuery.search}`;
export const NOTE_SORT_QUERY = (sortQuery: NoteSortType) => `_sort=${sortQuery.field}&_order=${sortQuery.order}`;