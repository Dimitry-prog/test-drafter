import NoteList from "@/features/notes/components/note-list";
import { Metadata } from "next";
import Link from "next/link";
import FiltrationNotes from "@/features/notes/components/filtration-notes";

export const metadata: Metadata = {
  title: 'List of notes',
  description: 'Here we are'
}

const NotesPage = () => {

  return (
    <section>
      Hello, notes
      <Link href='/notes/create'>➕</Link>
      <NoteList/>
      <FiltrationNotes/>
    </section>
  );
};

export default NotesPage;

