import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@/shared/libs/constants";
import { NoteType, NoteUpdateType } from "@/features/notes/types";

export const noteApi = createApi({
  reducerPath: 'noteApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Notes'],
  endpoints: (builder) => ({
    getNotes: builder.query<NoteType[], string>({
      query: (query = '') => query ? `/notes?q=${query}` : `/notes`,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Notes' as const, id })),
          ]
          : ['Notes'],
    }),
    getNote: builder.query<NoteType, string>({
      query: (noteId) => `/notes/${noteId}`,
      providesTags: (result, error, arg) => [{ type: 'Notes', id: arg }]
    }),
    addNewNote: builder.mutation<NoteType, NoteType>({
      query: (body) => ({
        url: '/notes',
        method: 'POST',
        body: body
      }),
      invalidatesTags: ['Notes']
    }),
    updateNote: builder.mutation<NoteType, NoteUpdateType>({
      query: (data) => ({
        url: `/notes/${data.id}`,
        method: 'PATCH',
        body: data.body
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Notes', id: arg.id }]
    }),
    deleteNote: builder.mutation<NoteType, string>({
      query: (noteId) => ({
        url: `/notes/${noteId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notes']
    })
  })
});

export const {
  useGetNotesQuery,
  useAddNewNoteMutation,
  useDeleteNoteMutation,
  useGetNoteQuery,
  useUpdateNoteMutation
} = noteApi;