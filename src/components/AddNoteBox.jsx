import { useState } from "react";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

export default function AddNoteBox() {
  const navigate = useNavigate();
  const [noteForm, setNoteForm] = useState({
    title: "",
    body: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "title" && noteForm.title.length >= 50 && value.length >= 50) {
      console.log("max character limit!");
    } else {
      setNoteForm({
        ...noteForm,
        [name]: value,
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    addNote(noteForm);

    // setNoteForm({
    //   title: "",
    //   body: "",
    // });

    navigate("/");
  };

  return (
    <div className="container lg:px-44 my-9 mx-auto">
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Buat Catatan</h1>

      <form onSubmit={submitHandler} className="flex flex-col">
        <div className="flex justify-end">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sisa karakter: {50 - noteForm.title.length}</label>
        </div>
        <input
          name="title"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
          placeholder="Ini adalah judul..."
          value={noteForm.title}
          onChange={changeHandler}
        />
        <textarea
          name="body"
          rows="6"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
          placeholder="Tambahkan catatanmu disini..."
          value={noteForm.body}
          onChange={changeHandler}
        ></textarea>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
