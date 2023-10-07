import { createSlice } from "@reduxjs/toolkit";

type NoteState = {
  searchQuery: string;
}

const initialState: NoteState = {
  searchQuery: ''
}

const noteSlice = createSlice({
  name: 'noteSlice',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchQuery = action.payload;
    }
  }
});

export const { reducer: noteReducer, actions: noteActions } = noteSlice;