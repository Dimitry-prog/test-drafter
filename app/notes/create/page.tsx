import CreateNote from "@/features/notes/components/create-note";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Create new note',
  description: 'Here we are'
}

const CreatePage = () => {
  return (
    <section className='mt-5'>
      <CreateNote/>
    </section>
  );
};

export default CreatePage;