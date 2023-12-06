import { useEffect, useState } from "react";
import { getArchivedNotes } from "../utils/local-data";
import NoteCardList from "../components/NoteCardList";

export default function ArchivePage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getArchivedNotes());
  }, []);

  return (
    <>
      <div className="container mx-auto my-9 lg:px-44">
        <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Catatan Arsip
        </h1>
        <NoteCardList notes={notes} />
      </div>
    </>
  );
}
