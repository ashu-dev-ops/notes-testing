import React from "react";
import { downloadFrom } from "../constants/downloadFrom";
import styled from "styled-components";
// import { BsApple, BsWindows } from "react-icons/bs";
// import { Io}
// import {IoLogoGooglePlaystore}
// import { DiLinux } from "react-icons/di";

const SingleStore = () => {
  return (
    <Wrapper>
      {downloadFrom.map((i, index) => {
        return (
          <article className="single-store" key={index}>
            <span className="left">{i.icon}</span>
            <div className="right">
              <p>Download on the</p>
              <h4>{i.h4}</h4>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-column-gap: 5vh;
  grid-row-gap: 2vh;
  margin: 1vw 20vw;
  /* background-color: orange; */

  /* grid-template-columns:repeat() */
  .single-store {
    /* display: flex;
    flex-direction: row; */
    display: grid;
    grid-template-columns: 15% 85%;
    align-items: center;
    /* margin: 20px; */
    /* background-color: red; */
    border: 2px solid #6c7c7f;
    padding: 4px;
    border-radius: 5px;
  }
  .left {
    margin-right: 15px;
  }
  .right {
    color: white;
    p {
      font-size: 1rem;
      text-align: left;
      padding: 5px;
      margin: 0;
    }
    h4 {
      font-size: 1.2rem;
    }
  }
  .icon-d {
    /* size: 4vh; */
    font-size: 4vh;
    color: white;
  }
`;

export default SingleStore;
