import { useParams } from "react-router-dom";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import { MdDelete } from "react-icons/md";
import { MdUnarchive } from "react-icons/md";
import { MdArchive } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();

  function deleteHandler() {
    deleteNote(note.id);
    if (note.archived) {
      navigate("/notes/archive");
    } else {
      navigate("/");
    }
  }

  function archiveHandler() {
    archiveNote(note.id);
    navigate("/");
  }

  function unarchiveHandler() {
    unarchiveNote(note.id);
    navigate("/notes/archive");
  }

  return (
    <section className="container mx-auto my-9 lg:px-44">
      <h1 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h1>
      <h2 className="mb-5 font-normal text-lg text-gray-700 dark:text-gray-300">{showFormattedDate(note.createdAt)}</h2>
      <p className="mb-3 font-normal text-lg text-gray-900 dark:text-white">{note.body}</p>
      <div className="absolute bottom-20 right-44">
        {!note?.archived ? (
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            title="Archive"
            onClick={archiveHandler}
          >
            <MdArchive className="w-8 h-8" />
          </button>
        ) : (
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            title="Unarchive"
            onClick={unarchiveHandler}
          >
            <MdUnarchive className="w-8 h-8" />
          </button>
        )}
        <button
          type="button"
          className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500"
          title="Delete"
          onClick={deleteHandler}
        >
          <MdDelete className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
