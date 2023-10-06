import { BASE_URL } from "@/shared/libs/constants";
import { NoteType, NoteUpdateType } from "@/features/notes/types";

export const updateNoteById = async (data: NoteUpdateType) => {
  try {
    const response = await fetch(`${BASE_URL}/notes/${data.id}`, {
      method: 'PATCH',
      body: JSON.stringify(data.body),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const note: NoteType = await response.json();

    return note
  } catch (e) {
    console.log(e)
  }
}