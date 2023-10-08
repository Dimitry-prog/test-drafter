import UpdateNote from "@/features/notes/components/update-note";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Edit note',
  description: 'Here we are'
}

const EditPage = () => {
  return (
    <section className='mt-5'>
      <UpdateNote/>
    </section>
  );
};

export default EditPage;