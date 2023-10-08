export type NoteType = {
  id: string;
  title: string;
  description: string;
};

export type NoteUpdateType = {
  id: string;
  body: Omit<NoteType, 'id'>;
};

export type NoteParamsType = {
  noteId: string;
};

export type NoteFilterType = {
  field: string;
  search: string;
};

export type NoteSortType = {
  field: string;
  order: string;
};

export type NoteFiltrationType = 'search' | 'filter' | 'sort' | null;

export type NoteQueryType = string | NoteFilterType | NoteSortType | void;