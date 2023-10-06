import { getNotes } from "@/features/notes/libs/getNotes";
import NoteList from "@/features/notes/components/note-list";
import CreateNote from "@/features/notes/components/create-note";

// export const revalidate = 0;

export const generateMetadata = async () => {
  const notes = await getNotes();

  if (!notes) {
    return {
      title: 'Notes not found'
    }
  }

  return {
    title: 'List of notes',
    description: 'Here we are'
  }
}

const NotesPage = async () => {
  const notes = await getNotes();

  return (
    <section>
      <CreateNote/>
      Hello, notes
      {notes && <NoteList notes={notes}/>}
    </section>
  );
};

export default NotesPage;

