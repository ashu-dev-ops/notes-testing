import React, { useState } from "react";
import { IoIosSave } from "react-icons/io";
import styled from "styled-components";
import { useNoteContext } from "../context/note-context";

const AddNote = () => {
  // useState
  const { addNote, changeShowAddNote, newColor } = useNoteContext();
  //   console.log(addNote);
  const [state, setstate] = useState("");
  const [noWords, seNoWords] = useState("200");
  const handleChange = (e) => {
    let noteValue = e.target.value.trim().length;
    // let noteValue = e.target.value.split(" ").length;

    seNoWords(noteValue);
    // const data = {
    //   text: noteValue,
    //   bgColor: newColor,
    // };
    setstate(e.target.value);
    // console.log();
  };
  const data = {
    text: state,
    bgColor: newColor,
  };
  return (
    <Wrapper>
      <div className="note  new" style={{ backgroundColor: newColor }}>
        {/* <h3></h3> */}
        <textarea
          rows="7"
          cols="10"
          placeholder="type new"
          onChange={handleChange}
          value={state}
        ></textarea>
        <div className="note-footer">
          <small>{noWords} remaining</small>
          <button
            className="save btn"
            onClick={() => {
              // console.log("clicked");
              addNote(data);
              changeShowAddNote();
            }}
          >
            <IoIosSave color="white" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .note {
    /* background-color: blueviolet; */
    min-height: 300px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 30px;
  }
  .new {
    textarea {
      resize: none;
      border: none;
      background-color: transparent;
      font-size: 1.5rem;
      font-weight: bold;
      color: whitesmoke;
    }
    textarea:focus {
      border: none;
      outline: none;
    }
    button {
      background-color: transparent;
      border: none;
      font-size: 1.5rem;
    }
  }
  .note-footer {
    display: flex;
    justify-content: space-between;
  }
`;

export default AddNote;
