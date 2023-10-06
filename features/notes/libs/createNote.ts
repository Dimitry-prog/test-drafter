import { BASE_URL } from "@/shared/libs/constants";
import { NoteType } from "@/features/notes/types";

export const createNote = async (body: NoteType) => {
  try {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const note = await response.json();

    return note;
  } catch (e) {
    console.log(e)
  }
}