import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/index";
import { object } from "prop-types";

export default function NoteCard({ data }) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/notes/${data?.id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">{showFormattedDate(data.createdAt)}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.body}</p>
    </div>
  );
}

NoteCard.propTypes = {
  data: object.isRequired,
};
