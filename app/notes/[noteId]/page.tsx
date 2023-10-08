import Note from "@/features/notes/components/note";
import { Metadata } from "next";
import { getNoteById } from "@/features/notes/libs/getNoteById";
import { getNotes } from "@/features/notes/libs/getNotes";

type NotePageProps = {
  params: {
    noteId: string
  }
}

export const generateMetadata = async ({ params }: NotePageProps): Promise<Metadata> => {
  const note = await getNoteById(params.noteId);

  if (!note) {
    return {
      title: 'Note not found'
    }
  }

  return {
    title: note.title,
    description: note.description
  }
}

export const generateStaticParams = async (): Promise<{ noteId: string }[]> => {
  const notes = await getNotes();
  if (notes) {
    return notes.map(note => ({
      noteId: note.id
    }))
  } else {
    return [];
  }
}

const NotePage = () => {

  return (
    <section className='mt-5'>
      <Note/>
    </section>
  );
};

export default NotePage;