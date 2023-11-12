/* eslint-disable react/prop-types */
import ActiveCard from "./ActiveCard";

export default function ActiveCardList({ notes, setNotes, archivedNotes, setArchivedNotes, notesToShow }) {
  return (
    <div className="container mx-auto lg:px-44">
      <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Catatan Aktif</h1>
      <div className="flex flex-wrap gap-2">
        {notesToShow?.length ? (
          notesToShow.map((note) => (
            <ActiveCard
              key={note.id}
              data={note}
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
