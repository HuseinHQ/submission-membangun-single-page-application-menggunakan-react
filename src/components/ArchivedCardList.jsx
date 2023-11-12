/* eslint-disable react/prop-types */
import ArchivedCard from "./ArchivedCard";

export default function ArchivedCardList({ notes, setNotes, archivedNotes, setArchivedNotes, archivedNotesToShow }) {
  return (
    <div className="container mx-auto my-20 lg:px-44">
      <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Arsip</h1>
      <div className="flex flex-wrap gap-2">
        {archivedNotesToShow?.length ? (
          archivedNotesToShow.map((archivedNote) => (
            <ArchivedCard
              key={archivedNote.id}
              data={archivedNote}
              notes={notes}
              setNotes={setNotes}
              archivedNotes={archivedNotes}
              setArchivedNotes={setArchivedNotes}
            />
          ))
        ) : (
          <p className="text-white">Tidak ada catatan</p>
        )}
      </div>
    </div>
  );
}
