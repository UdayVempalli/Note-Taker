import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";

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
      <div className="container">
          <Search />
          <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>          
      </div>
  );
};

export default App;
