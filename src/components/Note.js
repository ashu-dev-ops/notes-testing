import React, { useState } from "react";
import styled from "styled-components";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { useNoteContext } from "../context/note-context";
import { IoIosSave } from "react-icons/io";

const Note = ({ id, text, update, bgColor }) => {
  const { deleteNote, updateNote, readyForUpdate } = useNoteContext();
  //   console.log(readyForUpdate);

  const [state, setstate] = useState(text);
  const handleChange = (e) => {
    setstate(e.target.value);
    // console.log();
  };
  if (update) {
    return (
      <Wrapper>
        <div className="note  new" style={{ backgroundColor: bgColor }}>
          <textarea
            rows="5"
            cols="10"
            placeholder={state}
            onChange={handleChange}
            value={state}
          ></textarea>
          <div className="note-footer">
            <small>200 remaining</small>
            <button
              className="save btn"
              onClick={() => {
                console.log("clicked");
                return updateNote(id, state);
              }}
            >
              <IoIosSave color="white" />
            </button>
          </div>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="note" style={{ backgroundColor: bgColor }}>
        {/* <span>{text}</span> */}
        <textarea
          rows="5"
          cols="10"
          // placeholder={state}
          // onChange={handleChange}
          value={text}
        ></textarea>
        <div className="note-footer">
          <button onClick={() => deleteNote(id)}>
            <AiFillDelete />
          </button>
          <button
            onClick={() => {
              return readyForUpdate(id);
            }}
          >
            <AiTwotoneEdit />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  button {
    border: none;
    background-color: transparent;
    font-size: 1.4rem;
  }
  .note {
    background-color: red;
    min-height: 300px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 30px;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    textarea {
      resize: none;
      border: none;
      background-color: transparent;
      font-size: 1.5rem;
      font-weight: bold;
      color: #3d5656;
    }
    textarea:focus {
      border: none;
      outline: none;
    }
  }
  .new {
    textarea {
      resize: none;
      border: none;
      background-color: transparent;
      font-size: 1.5rem;
      font-weight: bold;
      color: #3d5656;
    }
    textarea:focus {
      border: none;
      outline: none;
    }
    background-color: blueviolet;
    box-shadow: -30px 28px 400px -21px rgba(255, 245, 245, 1);
    -webkit-box-shadow: -30px 28px 400px -21px rgba(255, 245, 245, 1);
    -moz-box-shadow: -30px 28px 400px -21px rgba(255, 245, 245, 1);
  }
  .note-footer {
    display: flex;
    justify-content: space-between;
  }
`;

export default Note;
