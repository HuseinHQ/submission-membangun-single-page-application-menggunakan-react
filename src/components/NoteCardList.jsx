import { arrayOf, object } from "prop-types";
import NoteCard from "./NoteCard";

export default function NoteCardList({ notes }) {
  return (
    <div className="flex flex-wrap gap-2">
      {notes?.length ? notes.map((note) => <NoteCard key={note.id} data={note} />) : <p className="text-white">Tidak ada catatan</p>}
    </div>
  );
}

NoteCardList.propTypes = {
  notes: arrayOf(object).isRequired,
};
