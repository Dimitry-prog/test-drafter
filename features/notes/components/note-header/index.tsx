import Link from "next/link";
import FiltrationNotes from "@/features/notes/components/filtration-notes";

const NoteHeader = () => {

  return (
    <div className="p-0 navbar navbar-expand-sm">
      <div className="p-0 container-fluid gap-2 justify-content-end">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse gap-2 justify-content-end" id="navbarSupportedContent">
          <div className='d-flex gap-2 flex-column flex-sm-row'>
            <Link href='/notes/create' className='btn btn-primary'>Create</Link>
            <FiltrationNotes/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteHeader;