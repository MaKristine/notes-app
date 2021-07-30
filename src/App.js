import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import { useState } from 'react';
import Search from './components/Search';
import Header from './components/Header';


function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "26/07/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "27/07/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "28/07/2021",
    },

    
],
);


const [searchText, setSearchText] = useState('');
//const [searchDate, setSearchDate] = useState('');

const searchDate = (date) => {
  //alert(date !=='')
   if(date !== ''){
    const newDate = notes.filter((note)=>
    note.date.includes(date.toLocaleDateString()))
    setNotes(newDate);
   }else{
    const newDate = notes.filter((note)=>
    note.date!=='')
    setNotes(newDate);
   }
 
}


const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};
const deleteNote = (id) => {
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
}



  return (
    <div className='container'>
      
      <Header handlerSearchDate={searchDate}/>
      <Search handleSearchNote={setSearchText}/>
       
      <NotesList notes={notes.filter((note)=>
          note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
