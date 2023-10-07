import { NoteType } from "@/features/notes/types";
import { BASE_URL } from "@/shared/libs/constants";

export const getNotes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/notes`);
    const notes: NoteType[] = await response.json();

    return notes
  } catch (e) {
    console.log(e)
  }
}

export const getNotesBySearch = async (search: string) => {
  try {
    const response = await fetch(`${BASE_URL}/notes?q=${search}`);
    const notes: NoteType[] = await response.json();

    return notes
  } catch (e) {
    console.log(e)
  }
}