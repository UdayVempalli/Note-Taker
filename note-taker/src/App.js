import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
      {
        id: nanoid(),
        text: "1st Notes",
        date: "05/07/2025"
      },
      {
        id: nanoid(),
        text: "1st Notes",
        date: "05/07/2025"
      },
      {
        id: nanoid(),
        text: "2nd Notes",
        date: "05/07/2025"
      },
      {
        id: nanoid(),
        text: "3rd Notes",
        date: "05/07/2025"
      },
      {
        id: nanoid(),
        text: "new Notes",
        date: "05/07/2025"
      },
      {
        id: nanoid(),
        text: "3rd Notes",
        date: "05/07/2025"
      },
      {
        id: nanoid(),
        text: "3rd Notes",
        date: "05/07/2025"
      },
  ]);
  const [searchText, setSearchText] = useState('');

  const [darkMode, setdarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
        localStorage.getItem('react-notes-app-data')
    );

    if(savedNotes) {
      setNotes(savedNotes);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  }; 

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
          <Header handleToggledarkMode={setdarkMode} />
          <Search handleSearchNote = {setSearchText} />
          <NotesList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>          
      </div>
    </div>

  );
};

export default App;
