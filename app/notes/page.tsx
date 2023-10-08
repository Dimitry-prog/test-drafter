import NoteList from "@/features/notes/components/note-list";
import { Metadata } from "next";
import NoteHeader from "@/features/notes/components/note-header";

export const metadata: Metadata = {
  title: 'List of notes',
  description: 'Here we are'
}

const NotesPage = () => {

  return (
    <section className='py-2 pb-5 d-flex flex-column gap-4'>
      <NoteHeader/>
      <NoteList/>
    </section>
  );
};

export default NotesPage;

