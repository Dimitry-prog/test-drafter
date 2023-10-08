import SearchNote from "@/features/notes/components/search-note";
import FilterNotes from "@/features/notes/components/filter-notes";
import SortNotes from "@/features/notes/components/sort-notes";

const FiltrationNotes = () => {
  return (
    <div className='d-flex gap-2 flex-column flex-sm-row'>
      <SearchNote/>
      <FilterNotes/>
      <SortNotes/>
    </div>
  );
};

export default FiltrationNotes;