import { BASE_URL } from "@/shared/libs/constants";
import { NoteType } from "@/features/notes/types";

export const getNoteById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/notes/${id}`);
    const note: NoteType = await response.json();

    return note
  } catch (e) {
    console.log(e)
  }
}