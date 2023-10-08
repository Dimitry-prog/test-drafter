import SearchNote from "@/features/notes/components/search-note";
import FilterNotes from "@/features/notes/components/filter-notes";
import SortNotes from "@/features/notes/components/sort-notes";

const FiltrationNotes = () => {
  return (
    <div>
      <SearchNote/>
      <FilterNotes/>
      <SortNotes/>
    </div>
  );
};

export default FiltrationNotes;