import React from "react";
import styled from "styled-components";
import ArtBoard from "../components/ArtBoard";
import NoteList from "../components/NoteList";

const NotesPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="left">
          <ArtBoard />
        </div>
        <div className="right">
          <NoteList />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    display: flex;
    /* background-color: orange; */
    width: 100%;
    /* margin: 0 20rem; */
    padding: 0 4vh;
    .left {
      width: 10%;
      /* background-color: red; */
      display: flex;
      flex-direction: column;
    }
    .right {
      width: 90%;
    }
  }
`;

export default NotesPage;
