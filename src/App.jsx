/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { getInitialData } from "./utils/index";
import AddNoteBox from "./components/AddNoteBox";
import ActiveCardList from "./components/ActiveCardList";
import ArchivedCardList from "./components/ArchivedCardList";

function App() {
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [notesToShow, setNotesToShow] = useState([]);
  const [archivedNotesToShow, setArchivedNotesToShow] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setNotes(getInitialData());
  }, []);

  useEffect(() => {
    if (search) {
      const filteredNotesToShow = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));
      setNotesToShow(filteredNotesToShow);
      const filteredArchivedNotesToShow = archivedNotes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));
      setArchivedNotesToShow(filteredArchivedNotesToShow);
    } else {
      setNotesToShow(notes);
      setArchivedNotesToShow(archivedNotes);
    }
  }, [notes, archivedNotes]);

  return (
    <>
      <Navbar
        notes={notes}
        setNotesToShow={setNotesToShow}
        archivedNotes={archivedNotes}
        setArchivedNotesToShow={setArchivedNotesToShow}
        search={search}
        setSearch={setSearch}
      />
      <AddNoteBox notes={notes} setNotes={setNotes} />
      <ActiveCardList notes={notes} setNotes={setNotes} archivedNotes={archivedNotes} setArchivedNotes={setArchivedNotes} notesToShow={notesToShow} />
      <ArchivedCardList
        notes={notes}
        setNotes={setNotes}
        archivedNotes={archivedNotes}
        setArchivedNotes={setArchivedNotes}
        archivedNotesToShow={archivedNotesToShow}
      />
    </>
  );
}

export default App;
