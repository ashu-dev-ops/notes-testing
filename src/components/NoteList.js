import React from "react";
import Note from "./Note";
import styled from "styled-components";
import { useNoteContext } from "../context/note-context";
import AddNote from "./AddNote";
const NoteList = () => {
  const { notes, showAddNote } = useNoteContext();
  // if (notes.length < 1) {
  //   // console.log(running);
  //   // console.log("running");
  //   return <h1>hurry up create some notes</h1>;
  // }
  //   console.log(notes);
  return (
    <Wrapper>
      <div className="note-list">
        {/* <Note />
        <Note />
        <Note /> */}
        {showAddNote && <AddNote />}

        {notes.map((n) => {
          return <Note key={n.id} {...n} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 990px;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
  .note-list {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;

export default NoteList;
