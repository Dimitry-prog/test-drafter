export type NoteType = {
  id: string;
  title: string;
  description: string;
}

export type NoteUpdateType = {
  id: string;
  body: Omit<NoteType, 'id'>;
}

export type NoteParamsType = {
  noteId: string;
}