import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";

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
  return ( 
      <div className="container">
          <NotesList notes={notes}/>          
      </div>
  );
};

export default App;
