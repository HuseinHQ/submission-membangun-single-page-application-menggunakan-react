import { useEffect, useState } from "react";
import NoteCardList from "../components/NoteCardList";
import { getActiveNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";

export default function HomePage() {
  const [notes, setNotes] = useState([]);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("title") || "";

  useEffect(() => {
    setNotes(getActiveNotes());
  }, []);

  useEffect(() => {
    const activeNotes = getActiveNotes();
    if (keyword) {
      const filteredNotes = activeNotes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));
      setNotes(filteredNotes);
    } else {
      setNotes(activeNotes);
    }
  }, [keyword]);

  return (
    <>
      <div className="container mx-auto my-9 lg:px-44">
        <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Catatan Aktif
        </h1>
        <NoteCardList notes={notes} />
      </div>
    </>
  );
}
