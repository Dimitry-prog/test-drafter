import NoteList from "@/features/notes/components/note-list";
import SearchNote from "@/features/notes/components/search-note";
import { Metadata } from "next";
import Link from "next/link";

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
      <SearchNote/>
    </section>
  );
};

export default NotesPage;

