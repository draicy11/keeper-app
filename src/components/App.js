import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, changeNotes] = useState([]);

  function addNote(note) {
    changeNotes((prev) => {
      return [...prev, note];
    });
  }

  function deleteNote(id){
    changeNotes( prev => {
      return (notes.filter((note,index)=>{
        return (id !== index);
      }))
    } );
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
