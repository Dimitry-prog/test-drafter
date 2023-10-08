import { createSlice } from "@reduxjs/toolkit";
import { NoteFilterType, NoteFiltrationType, NoteSortType } from "@/features/notes/types";

type NoteState = {
  searchQuery: string;
  filterQuery: NoteFilterType;
  sortQuery: NoteSortType;
  activeSearchFilter: NoteFiltrationType
}

const initialState: NoteState = {
  searchQuery: '',
  filterQuery: {
    field: 'title',
    search: ''
  },
  sortQuery: {
    field: 'title',
    order: 'asc'
  },
  activeSearchFilter: null,
}

const noteSlice = createSlice({
  name: 'noteSlice',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload;
    },
    setSortQuery: (state, action) => {
      state.sortQuery = action.payload;
    },
    setActiveSearchFilter: (state, action) => {
      state.activeSearchFilter = action.payload;
    }
  }
});

export const { reducer: noteReducer, actions: noteActions } = noteSlice;