import { BASE_URL } from "@/shared/libs/constants";
import { NoteType } from "@/features/notes/types";

export const deleteNoteById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/notes/${id}`, {
      method: 'DELETE',
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