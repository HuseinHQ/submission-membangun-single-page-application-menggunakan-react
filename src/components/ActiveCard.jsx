/* eslint-disable react/prop-types */
import { showFormattedDate } from "../utils/index";

export default function ActiveCard({ data, notes, setNotes, archivedNotes, setArchivedNotes }) {
  const deleteHandler = (e) => {
    e.preventDefault();

    const newNotes = notes.filter((note) => note.id !== data.id);
    setNotes(newNotes);
  };

  const archiveHandler = (e) => {
    e.preventDefault();

    const newNotes = notes.filter((note) => note.id !== data.id);
    setNotes(newNotes);
    setArchivedNotes([...archivedNotes, data]);
  };

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">{showFormattedDate(data.createdAt)}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.body}</p>
      <div className="flex gap-2">
        <a
          onClick={deleteHandler}
          href=""
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Delete
        </a>
        <a
          onClick={archiveHandler}
          href=""
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Arsipkan
        </a>
      </div>
    </div>
  );
}
