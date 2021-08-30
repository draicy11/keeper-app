import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isFocused,setFocus] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleFocus(e){
    setFocus(true);
  }

  return (
    <div>
      <form className="create-note">
        
        {
          isFocused &&
          <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        }
        <textarea
          onChange={handleChange}
          onClick={handleFocus}
          name="content"
          placeholder="Take a note..."
          rows={isFocused ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isFocused}>
          <Fab
            onClick={(event) => {
              props.addNote(note);
              setNote({
                title: "",
                content: "",
              });
              // stops app to refresh
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
